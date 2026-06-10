# Curated Galaxy Spheremaps

Vetted real-imagery equirect spheremaps for galaxies. Each galaxy lives in its
own `<catalog-id>/` dir with three KTX2/UASTC tiers (`thumb` / `mid` / `high`)
plus a `LICENSE.txt`. Manifest at `manifest.json` lists every entry.

The pipeline is `scripts/processGalaxySpheremap.sh` — a galaxy-output sibling of
`scripts/processNebulaSpheremap.sh` (identical reprojection + encoding; only the
output directory differs).

> **Not yet wired into rendering.** Galaxies currently render _procedurally_
> (`src/engine/render/sceneMounts/mountGalaxyDisc.r3f.ts` — spiral/bulge/dust
> shader on an ellipsoid shell). These spheremaps are staged assets; there is no
> galaxy equivalent of the nebula `nebulaSpheremapManifest.ts` loader or mount
> yet. Wiring imagery into the galaxy render path is deferred future work.

## Adding a new galaxy

1. Locate a vetted source on **esahubble.org**, **esawebb.org**, or
   **science.nasa.gov/photojournal**. Copy the page URL and the full
   attribution credit line verbatim.
2. Download the largest available JPG.
3. Run `scripts/processGalaxySpheremap.sh <jpg> <catalog-id> <h_fov_deg>`.
4. Replace the placeholder `LICENSE.txt` with the real source/license/attribution.
5. Append a manifest entry (alphabetical by id).
6. Validate: `python3 -m json.tool manifest.json` parses clean.
7. Commit per `f6efe269` / `d63606db` style.

## Source-hunting notes (shared with the nebula set)

- **ESA prefix codes are not interchangeable.** `heic*` = ESA/Hubble release.
  `opo*` = STScI Press Office release (NASA-side). A given observation often has
  only one of the two — don't guess prefixes; open the page first.
- **Direct CDN pattern** works for both prefixes:
  `https://cdn.esahubble.org/archives/images/large/<id>.jpg`. If it 404s, the
  page itself always has "Fullsize Original" / "Large JPEG" links.
- **License field in manifest** uses `"CC-BY-4.0"` for all current entries.
  Public-domain NASA/JPL imagery would need a new string — prefer ESA/Hubble
  sources to keep the set uniform.

## HFOV picks

The flat→equirect reprojection stretches an Earth-POV image across one
hemisphere; HFOV trades immersion vs target size:

- **150°** — wide diffuse subjects that fill the frame.
- **100°** — compact subjects (a galaxy disc centered in frame) where a wider
  stretch would dilute the detail. M104 Sombrero uses 100°.

Reprojection is intentionally non-physical — it is **not** an
"external galaxy" view. Document the chosen HFOV in `LICENSE.txt`.

## Pipeline gotchas (encoded in the script already)

- `toktx` rejects PNGs carrying an ICC profile without an explicit
  transfer-function flag → script passes `--assign_oetf srgb`.
- `ffmpeg`'s MJPEG decoder caps ~16k px per dimension → script pre-downscales
  via ImageMagick to ≤8192 on the long side before reprojection.

## Current entries

1 id:

`NGC4594` (M104 Sombrero).

Per-id provenance lives in each `<id>/LICENSE.txt`.

## Imagery credit (per object)

Copied verbatim from each manifest entry's `source` / `license` / `attribution`.

| Catalog ID | Source                                  | License   | Attribution                |
| ---------- | --------------------------------------- | --------- | -------------------------- |
| `NGC4594`  | https://esahubble.org/images/heic2506a/ | CC-BY-4.0 | ESA/Hubble & NASA, K. Noll |
