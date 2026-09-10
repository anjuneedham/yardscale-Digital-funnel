/** Renders structured data. Kept in one place so every page emits it consistently. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is generated from local, trusted content only.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
