# SVG symbol viewer

An online, no-upload drag-and-drop SVG file symbol extractor and viewer:
[svgsymbolviewer.io](https://svgsymbolviewer.io).

## Requirements

- [Deno CLI](https://deno.land/#installation) v2+.

## Installation

For a local development installation, create a project `scripts/.env.sh` file
containing the following environment variables, with values customized for your
local environment:

```sh
# Development or production mode; "true" or "false".
export RUCK_DEV="true"

# The localhost port to serve the Ruck app on.
export RUCK_PORT="3000"
```

## Scripts

### Dev

To load the environment variables from `scripts/.env.sh` and serve the Ruck app:

```sh
./scripts/dev.sh
```

### Serve

To serve the Ruck app for either development or production (requires environment
variables):

```sh
./scripts/serve.sh
```

### Format

To format the project:

```sh
deno fmt
```

### Lint

To lint the project:

```sh
deno lint
```

### Type check

To type check every JavaScript module in the project:

```sh
./scripts/type-check.sh
```
