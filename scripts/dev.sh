#!/bin/sh
# Loads the environment variables and serves the Ruck app.

# Load the environment variables.
. scripts/.env.sh &&

# Serve the Ruck app.
./scripts/serve.sh
