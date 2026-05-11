# Planet Surface Textures

Real-world basemaps for the major solar system bodies, consumed by `assetBodyTextureProvider` at runtime. The renderer falls back to procedural canvas noise (per body, deterministic) when a file is missing, so the build never breaks on incomplete assets.

## Layout

```
public/assets/textures/planets/
  2k/   # 2048x1024 JPG  (active bucket — current registry default)
  4k/   # 4096x2048 JPG  (committed, not consumed yet)
  8k/   # 8192x4096 JPG  (committed where the source publishes it; not consumed yet)
```

Each bucket contains the same 10 filenames:

```
mercury.jpg  venus.jpg    earth.jpg    mars.jpg     jupiter.jpg
saturn.jpg   uranus.jpg   neptune.jpg  moon.jpg     pluto.jpg
```

Switching the active bucket is a one-line edit in `packages/shared-pure/src/scene/planetAssetTextures.ts` (`ACTIVE_PLANET_ASSET_RESOLUTION`).

## Sources & Licenses

### Primary: Solar System Scope

<https://www.solarsystemscope.com/textures/> — Solar System Scope Textures by **INOVE** (https://www.solarsystemscope.com) are licensed under **CC BY 4.0** (<https://creativecommons.org/licenses/by/4.0/>). Attribution is required wherever the textures are surfaced (About panel, credits screen, etc.).

This site publishes 2K for every body and 8K for most. Where the source offers a 4K variant, prefer that for the `4k/` bucket; otherwise downsample 8K → 4K with an image tool of your choice. Download every available bucket per body and commit it to the matching subfolder.

### Public-domain alternatives (NASA / USGS)

If Solar System Scope is unavailable or lower-quality for a given body, the following NASA / USGS originals are public domain (no attribution required, but encouraged):

| Body    | Source                                                       |
| ------- | ------------------------------------------------------------ |
| Mercury | MESSENGER global mosaic — USGS Astrogeology                  |
| Venus   | Magellan radar surface mosaic                                |
| Earth   | NASA Visible Earth / Blue Marble                             |
| Mars    | Viking + MOLA color shaded relief — USGS Astrogeology        |
| Jupiter | Cassini ISS global mosaic                                    |
| Saturn  | Cassini ISS global mosaic                                    |
| Uranus  | Voyager 2 / Hubble composite                                 |
| Neptune | Voyager 2 / Hubble composite                                 |
| Moon    | LRO WAC global mosaic                                        |
| Pluto   | New Horizons LORRI/MVIC mosaic — e.g. https://photojournal.jpl.nasa.gov/catalog/PIA20198 |

## Per-Body Manifest

Record the actual source used per body here as files land. Format: `body — source — license — buckets present`.

- mercury — *(TBD)* — *(TBD)* — *(none)*
- venus — *(TBD)* — *(TBD)* — *(none)*
- earth — *(TBD)* — *(TBD)* — *(none)*
- mars — *(TBD)* — *(TBD)* — *(none)*
- jupiter — *(TBD)* — *(TBD)* — *(none)*
- saturn — *(TBD)* — *(TBD)* — *(none)*
- uranus — *(TBD)* — *(TBD)* — *(none)*
- neptune — *(TBD)* — *(TBD)* — *(none)*
- moon — *(TBD)* — *(TBD)* — *(none)*
- pluto — *(TBD)* — *(TBD)* — *(none)*

## Attribution string for the app

When at least one CC-BY texture from Solar System Scope is in use, the app should display (e.g. in an About panel):

> Planet textures © Solar System Scope (https://www.solarsystemscope.com) — CC BY 4.0

This attribution is required by the CC BY 4.0 license.
