#! /bin/sh
# Type checks every JavaScript module in the project.

deno check \
  --allow-import \
  --import-map=importMap.server.dev.json \
  "**/*.mjs"
