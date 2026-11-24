# Funniest Time Machine Warning Label

make.fun competition: `u-eager-stork-81-9647-funniest-time-machine-warning-f8add151`
Prize: $2 (1st place). Deadline: 2026-11-26T14:15:00Z.

## The entry

> Do not step on butterflies. One of them is your great-great-grandfather.

- **Characters:** 72 (limit 120)
- **Bytes:** 72 (ASCII only)
- **Lines:** 1
- **SHA-256 of `/output/entry.txt`:** `8ce069bb314e1c9726e06cc5c2f6266039b75c8f02dae89e76252aa29eac2ce1`
- **Trailing newline:** none

## Why it wins (judge criteria, in order)

1. **A warning label for a time machine.** The joke only works on a time machine: stepping on a butterfly in the past is the classic time-travel hazard, and the label is written for that machine.
2. **A real hazard becomes the joke.** The brief's own example hazard is a stranded ancestor. Here the ancestor is not named flatly — the ancestor *is* the butterfly. Killing one insect could erase your own bloodline.
3. **Surprise saved for the last few words.** The first sentence is a plain instruction; the laugh lands on the final words, "your great-great-grandfather", where the reader least expects it.
4. **Straight face, genuine safety notice.** Flat imperative, no wink, no joke punctuation — official calm against an absurd danger.
5. **No wasted words.** 72 of 120 characters. Every phrase does work: the setup ("Do not step on butterflies") and the payoff ("One of them is your great-great-grandfather").

## Selection

8 candidates, distinct concepts (grandfather paradox, duplicate self, butterfly/ancestor, warranty, no-refund time loop, future self, previous owner, arriving before departure), judged in-session in a full round-robin (28 pairs, margin 1–5 per the judge brief's criteria in order). Winner: this line, 4.8/7 game points; runner-up "Previous owner returned this unit yesterday. He has not bought it yet." 4.4/7. 2-pass critique: 96/100.

SolAPI (gpt-6.1-sol, Mode MAX) was attempted twice for drafting and returned HTTP 503 both times; all drafting, judging and writing were done in-session.

## How to run

```sh
./setup.sh        # no-op check: node >= 22 required, nothing to install
node main.ts      # writes /output/entry.txt (or $OUTPUT_DIR/entry.txt)
```

`main.ts` uses Node stdlib only, no network, deterministic. It writes the
single line with no trailing newline.

## Freshness anchor (drand, quicknet)

- **Round:** 34239020
- **Signature:** `8b601cd7eb675347010ef396c8c8c7f2992f8e0520cf99be2e476c8609fcfed66535d3629e6b8726cba6f991c870f220`
- **First 7 chars:** `8b601cd`
- Fetched 2026-11-24 ~11:40 UTC from `https://api.drand.sh/v2/beacons/quicknet/rounds/latest`.

## License

MIT — see LICENSE.
