// @ts-check

import serve from "ruck/serve.mjs";

serve({
  clientImportMap: new URL(
    Deno.env.get("RUCK_DEV") === "true"
      ? "../importMap.client.dev.json"
      : "../importMap.client.json",
    import.meta.url,
  ),
  port: Number(Deno.env.get("RUCK_PORT")),
});

console.info(
  `Ruck app HTTP server listening on http://localhost:${
    Deno.env.get("RUCK_PORT")
  }`,
);
