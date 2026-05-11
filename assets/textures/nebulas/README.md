# Curated Nebula Spheremaps

Vetted real-imagery equirect spheremaps. Each nebula lives in its own
`<catalog-id>/` dir with three KTX2/UASTC tiers (`thumb` / `mid` / `high`)
plus a `LICENSE.txt`. Manifest at `manifest.json` lists every entry.

The pipeline is `scripts/processNebulaSpheremap.sh`. Curated id list lives
in `src/rendering/sceneMounts/__tests__/mountNebulaVolume.r3f.test.ts`.

## Adding a new nebula

1. Locate a vetted source on **esahubble.org**, **esawebb.org**, or
   **science.nasa.gov/photojournal**. Copy the page URL and the full
   attribution credit line verbatim.
2. Download the largest available JPG.
3. Run `scripts/processNebulaSpheremap.sh <jpg> <catalog-id> <h_fov_deg>`.
4. Replace the placeholder `LICENSE.txt` with the real source/license/attribution.
5. Append a manifest entry (alphabetical by id).
6. `npx vitest run nebulaSpheremapManifest` → must stay 8/8.
7. Commit per `f6efe269` / `d63606db` style.

## Source-hunting notes (learned the hard way)

- **ESA prefix codes are not interchangeable.** `heic*` = ESA/Hubble
  release. `opo*` = STScI Press Office release (NASA-side). A given
  observation often has only one of the two — e.g. M27 Dumbbell exists
  only as `opo0306a`, with no `heic*` equivalent. Don't guess prefixes;
  open the page first.
- **Direct CDN pattern** works for both prefixes:
  `https://cdn.esahubble.org/archives/images/large/<id>.jpg`. If it 404s,
  the page itself always has "Fullsize Original" / "Large JPEG" links.
- **Spitzer site is decommissioned.** Old `spitzer.caltech.edu/image/...`
  and `photojournal.jpl.nasa.gov/catalog/PIA*` URLs 301-redirect (or 404)
  to `science.nasa.gov/photojournal/<slug>`. Direct full-res assets sit
  under `assets.science.nasa.gov/content/dam/science/psd/photojournal/...`.
- **ESA also hosts DSS2-derived wide-fields under `heic*`** even though
  they are not Hubble instrument data — e.g. `heic0510a` (North America
  Nebula) is a Palomar 48" DSS2 mosaic processed by Davide De Martin via
  FITS Liberator. Credit string differs; copy verbatim, don't normalize.
- **License field in manifest** uses `"CC-BY-4.0"` for all current
  entries. Public-domain NASA/JPL imagery would need a new string —
  prefer ESA/Hubble sources to keep the set uniform.
- **JWST alternatives exist** for several (Carina `weic2205a`, Pillars
  `weic2316a`, Crab `weic2326a`). Current set picks Hubble for visual
  consistency with the M42 baseline. Swap individually if desired.

## HFOV picks

The flat→equirect reprojection stretches an Earth-POV image across one
hemisphere; HFOV trades immersion vs target size:

- **150°** — wide diffuse mosaics where the target fills the frame
  (Orion, Carina, Lagoon, Swan, North America).
- **100°** — compact subjects where a wider stretch would dilute the
  detail (Pillars of Creation, Crab, Horsehead, Dumbbell).

Reprojection is intentionally non-physical — it is **not** an
"inside-the-nebula" view. Document the chosen HFOV in `LICENSE.txt`.

## Pipeline gotchas (encoded in the script already)

- `toktx` rejects PNGs carrying an ICC profile without an explicit
  transfer-function flag → script passes `--assign_oetf srgb`.
- `ffmpeg`'s MJPEG decoder caps ~16k px per dimension → script
  pre-downscales via ImageMagick to ≤8192 on the long side before
  reprojection.
- The original M42 ingest used hugin/nona for reprojection; commit
  `3469fa42` switched to `ffmpeg -vf v360=flat:e` because it is in every
  standard build and produces identical results without a separate dep.

## Current entries

9 ids — curated featured set complete:

`CUSTOM-BARNARD-33`, `NGC1952`, `NGC1976`, `NGC3372`, `NGC6523`,
`NGC6611`, `NGC6618`, `NGC6853`, `NGC7000`.

Per-id provenance lives in each `<id>/LICENSE.txt`.
