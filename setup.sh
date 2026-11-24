#!/bin/sh
# One-shot setup: no dependencies to install (Node stdlib only).
# Requires Node >= 22 (main.ts is run as `node main.ts`).
set -e
node --version
echo "setup OK: nothing to install"
