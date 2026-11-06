import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Persistence for the campaign dashboard.
 *
 * One generic record store so new dashboard features never need a rebuild or a
 * migration: a record is (collection, id) -> JSON document.
 *
 *   supabase  durable. Used when credentials are present. Table:
 *             yardscale_campaign_records (see supabase/migrations).
 *   file      local development only (.data/campaign.json). On Vercel the
 *             filesystem is ephemeral, so this is never used in production
 *             unless DASHBOARD_STORE=file is set deliberately.
 *   none      production with nothing configured. Reads are empty and writes
 *             fail loudly so no one believes data was saved when it was not.
 */

export const COLLECTIONS = ["episode", "metrics", "settings", "lead", "note"] as const;
export type Collection = (typeof COLLECTIONS)[number];
export type Doc = Record<string, unknown>;
export type StoredDoc = Doc & { _updatedAt?: string };
export type StoreKind = "supabase" | "file" | "none";

const TABLE = "yardscale_campaign_records";
const ID_RE = /^[A-Za-z0-9_-]{1,64}$/;
const MAX_BYTES = 200_000;

export class StoreError extends Error {
  constructor(
    message: string,
    public status = 500,
  ) {
    super(message);
  }
}

export function isCollection(v: unknown): v is Collection {
  return typeof v === "string" && (COLLECTIONS as readonly string[]).includes(v);
}
export function isValidId(v: unknown): v is string {
  return typeof v === "string" && ID_RE.test(v);
}

function supabaseCreds() {
  const url = process.env.DASHBOARD_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.DASHBOARD_SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  return url && key ? { url, key } : null;
}

export function storeKind(): StoreKind {
  if (process.env.DASHBOARD_STORE === "file") return "file";
  if (process.env.DASHBOARD_STORE === "supabase" || supabaseCreds()) {
    return supabaseCreds() ? "supabase" : "none";
  }
  return process.env.NODE_ENV === "production" ? "none" : "file";
}

export function storeInfo(): { kind: StoreKind; durable: boolean; message: string } {
  const kind = storeKind();
  if (kind === "supabase") return { kind, durable: true, message: "Saving to Supabase." };
  if (kind === "file")
    return {
      kind,
      durable: process.env.NODE_ENV !== "production",
      message: "Saving to a local file (.data/campaign.json). Fine for development; not durable on Vercel.",
    };
  return {
    kind,
    durable: false,
    message:
      "No database is configured, so nothing you enter will be saved. Set the Supabase variables described in docs/zero-to-hero/ARCHITECTURE.md.",
  };
}

/** Deep-merge a patch into a document. `null` deletes a key. Arrays replace. */
export function mergeDoc(base: Doc, patch: Doc, depth = 0): Doc {
  const out: Doc = { ...base };
  for (const [k, v] of Object.entries(patch)) {
    if (k === "__proto__" || k === "constructor" || k === "prototype") continue;
    if (v === null) {
      delete out[k];
    } else if (
      depth < 4 &&
      typeof v === "object" &&
      !Array.isArray(v) &&
      typeof out[k] === "object" &&
      out[k] !== null &&
      !Array.isArray(out[k])
    ) {
      out[k] = mergeDoc(out[k] as Doc, v as Doc, depth + 1);
    } else {
      out[k] = v;
    }
  }
  return out;
}

// ───────────── file backend ─────────────

type FileShape = Record<string, Record<string, { data: Doc; updatedAt: string }>>;
const FILE = path.join(process.cwd(), ".data", "campaign.json");
let chain: Promise<unknown> = Promise.resolve();

async function readFile(): Promise<FileShape> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8")) as FileShape;
  } catch {
    return {};
  }
}
async function writeFile(shape: FileShape): Promise<void> {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  const tmp = `${FILE}.${process.pid}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(shape, null, 2));
  await fs.rename(tmp, FILE);
}
function serial<T>(fn: () => Promise<T>): Promise<T> {
  const next = chain.then(fn, fn);
  chain = next.catch(() => undefined);
  return next;
}

// ───────────── supabase backend ─────────────

let client: SupabaseClient | null = null;
function sb(): SupabaseClient {
  const creds = supabaseCreds();
  if (!creds) throw new StoreError("Supabase is not configured.", 503);
  client ??= createClient(creds.url, creds.key, { auth: { persistSession: false } });
  return client;
}
function sbFail(error: { message: string; code?: string }): never {
  if (error.code === "42P01" || /does not exist|schema cache/i.test(error.message)) {
    throw new StoreError(
      `The ${TABLE} table does not exist yet. Run supabase/migrations/20261106_create_campaign_records.sql.`,
      503,
    );
  }
  throw new StoreError(`Database error: ${error.message}`, 502);
}

// ───────────── public API ─────────────

export async function listDocs(collection: Collection): Promise<Record<string, StoredDoc>> {
  const kind = storeKind();
  if (kind === "none") return {};
  if (kind === "file") {
    const shape = await readFile();
    const out: Record<string, StoredDoc> = {};
    for (const [id, rec] of Object.entries(shape[collection] ?? {})) out[id] = { ...rec.data, _updatedAt: rec.updatedAt };
    return out;
  }
  const { data, error } = await sb().from(TABLE).select("id,data,updated_at").eq("collection", collection);
  if (error) sbFail(error);
  const out: Record<string, StoredDoc> = {};
  for (const row of data ?? []) out[row.id as string] = { ...(row.data as Doc), _updatedAt: row.updated_at as string };
  return out;
}

export async function patchDoc(collection: Collection, id: string, patch: Doc): Promise<StoredDoc> {
  if (!isValidId(id)) throw new StoreError("Invalid id.", 400);
  if (JSON.stringify(patch).length > MAX_BYTES) throw new StoreError("That record is too large.", 413);
  const kind = storeKind();
  if (kind === "none") throw new StoreError(storeInfo().message, 503);
  const now = new Date().toISOString();

  if (kind === "file") {
    return serial(async () => {
      const shape = await readFile();
      const current = shape[collection]?.[id]?.data ?? {};
      const merged = mergeDoc(current, patch);
      if (JSON.stringify(merged).length > MAX_BYTES) throw new StoreError("That record is too large.", 413);
      shape[collection] = { ...(shape[collection] ?? {}), [id]: { data: merged, updatedAt: now } };
      await writeFile(shape);
      return { ...merged, _updatedAt: now };
    });
  }

  const db = sb();
  const { data: row, error: readErr } = await db
    .from(TABLE)
    .select("data")
    .eq("collection", collection)
    .eq("id", id)
    .maybeSingle();
  if (readErr) sbFail(readErr);
  const merged = mergeDoc((row?.data as Doc) ?? {}, patch);
  if (JSON.stringify(merged).length > MAX_BYTES) throw new StoreError("That record is too large.", 413);
  const { error } = await db
    .from(TABLE)
    .upsert({ collection, id, data: merged, updated_at: now }, { onConflict: "collection,id" });
  if (error) sbFail(error);
  return { ...merged, _updatedAt: now };
}

export async function deleteDoc(collection: Collection, id: string): Promise<void> {
  if (!isValidId(id)) throw new StoreError("Invalid id.", 400);
  const kind = storeKind();
  if (kind === "none") throw new StoreError(storeInfo().message, 503);
  if (kind === "file") {
    await serial(async () => {
      const shape = await readFile();
      if (shape[collection]) delete shape[collection][id];
      await writeFile(shape);
    });
    return;
  }
  const { error } = await sb().from(TABLE).delete().eq("collection", collection).eq("id", id);
  if (error) sbFail(error);
}
