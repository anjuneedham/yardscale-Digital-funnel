import { NextResponse } from "next/server";

import { isOwner } from "@/lib/campaign/auth";
import {
  StoreError,
  deleteDoc,
  isCollection,
  isValidId,
  listDocs,
  patchDoc,
  storeInfo,
  type Doc,
} from "@/lib/campaign/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function fail(error: unknown) {
  if (error instanceof StoreError) return NextResponse.json({ error: error.message }, { status: error.status });
  console.error("[dashboard] unexpected error", error);
  return NextResponse.json({ error: "Something went wrong saving that." }, { status: 500 });
}

/** Rejects cross-site writes: JSON content type plus same-origin check. */
function writeGuard(request: Request): NextResponse | null {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Expected JSON." }, { status: 415 });
  }
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== request.headers.get("host")) {
    return NextResponse.json({ error: "Cross-origin request blocked." }, { status: 403 });
  }
  return null;
}

async function guard(request: Request, write: boolean) {
  if (!(await isOwner())) return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  return write ? writeGuard(request) : null;
}

export async function GET(request: Request) {
  const blocked = await guard(request, false);
  if (blocked) return blocked;
  const collection = new URL(request.url).searchParams.get("collection");
  if (!isCollection(collection)) return NextResponse.json({ error: "Unknown collection." }, { status: 400 });
  try {
    return NextResponse.json({ docs: await listDocs(collection), store: storeInfo() });
  } catch (e) {
    return fail(e);
  }
}

/** PATCH { collection, id, patch } — deep-merges `patch` into the record (null deletes a key). */
export async function PATCH(request: Request) {
  const blocked = await guard(request, true);
  if (blocked) return blocked;
  const body = (await request.json().catch(() => null)) as {
    collection?: unknown;
    id?: unknown;
    patch?: unknown;
  } | null;
  if (!body || !isCollection(body.collection) || !isValidId(body.id)) {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }
  if (typeof body.patch !== "object" || body.patch === null || Array.isArray(body.patch)) {
    return NextResponse.json({ error: "Patch must be an object." }, { status: 400 });
  }
  try {
    const doc = await patchDoc(body.collection, body.id, body.patch as Doc);
    return NextResponse.json({ doc });
  } catch (e) {
    return fail(e);
  }
}

/** DELETE ?collection=&id= */
export async function DELETE(request: Request) {
  const blocked = await guard(request, false);
  if (blocked) return blocked;
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== request.headers.get("host")) {
    return NextResponse.json({ error: "Cross-origin request blocked." }, { status: 403 });
  }
  const params = new URL(request.url).searchParams;
  const collection = params.get("collection");
  const id = params.get("id");
  if (!isCollection(collection) || !isValidId(id)) return NextResponse.json({ error: "Bad request." }, { status: 400 });
  try {
    await deleteDoc(collection, id);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return fail(e);
  }
}
