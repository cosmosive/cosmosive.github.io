# Bundled web fonts

Self-hosted to avoid third-party requests (Google Fonts) at runtime — see
`src/surface/styles/fonts.css`. Both faces are licensed under the SIL Open Font
License, Version 1.1; the full license and copyright for each is kept alongside:

- **Share Tech Mono** — `share-tech-mono-latin.woff2` — © Carrois Type Design. License: `OFL-ShareTechMono.txt`.
- **Great Vibes** — `great-vibes-*.woff2` — © The Great Vibes Project Authors. License: `OFL-GreatVibes.txt`.

The `.woff2` files and their `unicode-range` subsets are the exact assets Google
served for `Share Tech Mono` + `Great Vibes` (display=swap), re-pointed to `/fonts`.
