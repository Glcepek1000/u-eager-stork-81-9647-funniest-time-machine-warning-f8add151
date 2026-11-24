# TEST_RESULTS.md

Real execution proof for `main.ts` (Node v24.22.1, 2026-11-24 ~11:40 UTC).

## Run 1 — repo run

```sh
cd repo && OUTPUT_DIR=/tmp/tmwl-run1 node main.ts
```

- Exit code: 0
- `/tmp/tmwl-run1/entry.txt`: 72 bytes
- Content (byte-exact, no trailing newline):
  `Do not step on butterflies. One of them is your great-great-grandfather.`
- Characters: 72 (limit 120) — PASS
- Bytes: 72 (ASCII only) — PASS
- SHA-256: `8ce069bb314e1c9726e06cc5c2f6266039b75c8f02dae89e76252aa29eac2ce1`
- `endsWith("\n")`: false — PASS

## Clean-dir run

```sh
rm -rf /tmp/tmwl-clean && mkdir -p /tmp/tmwl-clean
cp -r repo /tmp/tmwl-clean/repo
cd /tmp/tmwl-clean/repo && OUTPUT_DIR=/tmp/tmwl-clean/out node main.ts
```

- Exit code: 0
- `/tmp/tmwl-clean/out/entry.txt`: 72 bytes, 72 chars, no trailing newline
- SHA-256: `8ce069bb314e1c9726e06cc5c2f6266039b75c8f02dae89e76252aa29eac2ce1`
- Byte-exact match with the repo run: YES

## Zero-fail QA

- Node stdlib only (`node:fs`, `node:path`); no network, no dependencies.
- No hardcoded paths outside `OUTPUT_DIR` env (default `/output` per the
  competition harness); no secrets, no API keys in the repo.
- Deterministic: same input produces the same 72 bytes every run.
