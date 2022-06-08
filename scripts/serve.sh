#!/bin/sh
# Serves the Ruck app.

# Asserts an environment variable is set.
# Argument 1: Name.
# Argument 2: Value.
assertEnvVar() {
  if [ -z "$2" ]
  then
    echo "Missing environment variable \`$1\`." >&2
    exit 1
  fi
}

# Assert environment variables are set.
assertEnvVar RUCK_DEV $RUCK_DEV
assertEnvVar RUCK_PORT $RUCK_PORT

# Serve the Ruck app.
if [ "$RUCK_DEV" = "true" ]
then
  deno run \
    --allow-env \
    --allow-net \
    --allow-read \
    --import-map=importMap.server.dev.json \
    --watch=. \
    scripts/serve.mjs
else
  deno run \
    --allow-env \
    --allow-net \
    --allow-read \
    --import-map=importMap.server.json \
    --no-check \
    scripts/serve.mjs
fi
