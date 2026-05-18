# Planet Surface Textures

Real-world basemaps for the major solar system bodies, consumed by `assetBodyTextureProvider` at runtime. The renderer falls back to procedural canvas noise (per body, deterministic) when a file is missing, so the build never breaks on incomplete assets.

## Layout

```
public/assets/textures/planets/
  2k/   # 2048x1024 JPG  (active bucket — current registry default)
  4k/   # 4096x2048 JPG  (committed, not consumed yet)
  8k/   # 8192x4096 JPG  (committed where the source publishes it; not consumed yet)
```

Each bucket contains planet basemaps at top level plus a `moons/<planet>/` subtree:

```
sun.jpg
mercury.jpg  venus.jpg    earth.jpg    mars.jpg     jupiter.jpg
saturn.jpg   uranus.jpg   neptune.jpg  pluto.jpg
earth_clouds.jpg  earth_night.jpg  saturn_ring.png
moons/
  earth/moon.jpg
  mars/{phobos,deimos}.jpg + {phobos}_comp.jpg
  jupiter/{io,europa,ganymede,callisto}.jpg + {io,europa,ganymede,callisto}_comp.jpg
  saturn/{mimas,enceladus,tethys,dione,rhea,iapetus}.jpg + {mimas,enceladus,tethys,dione,rhea,iapetus,titan}_comp.jpg
  uranus/{miranda,ariel,umbriel,titania,oberon}.jpg
```

Switching the active bucket is a one-line edit in `packages/shared-pure/src/scene/planetAssetTextures.ts` (`ACTIVE_PLANET_ASSET_RESOLUTION`).

## Sources & Licenses

### Primary: Solar System Scope

<https://www.solarsystemscope.com/textures/> — Solar System Scope Textures by **INOVE** (https://www.solarsystemscope.com) are licensed under **CC BY 4.0** (<https://creativecommons.org/licenses/by/4.0/>). Attribution is required wherever the textures are surfaced (About panel, credits screen, etc.).

This site publishes 2K for every body and 8K for most. Where the source offers a 4K variant, prefer that for the `4k/` bucket; otherwise downsample 8K → 4K with an image tool of your choice. Download every available bucket per body and commit it to the matching subfolder.

### Public-domain alternatives (NASA / USGS)

If Solar System Scope is unavailable or lower-quality for a given body, the following NASA / USGS originals are public domain (no attribution required, but encouraged):

| Body    | Source                                                                                   |
| ------- | ---------------------------------------------------------------------------------------- |
| Mercury | MESSENGER global mosaic — USGS Astrogeology                                              |
| Venus   | Magellan radar surface mosaic                                                            |
| Earth   | NASA Visible Earth / Blue Marble                                                         |
| Mars    | Viking + MOLA color shaded relief — USGS Astrogeology                                    |
| Jupiter | Cassini ISS global mosaic                                                                |
| Saturn  | Cassini ISS global mosaic                                                                |
| Uranus  | Voyager 2 / Hubble composite                                                             |
| Neptune | Voyager 2 / Hubble composite                                                             |
| Moon    | LRO WAC global mosaic                                                                    |
| Pluto   | New Horizons LORRI/MVIC mosaic — e.g. https://photojournal.jpl.nasa.gov/catalog/PIA20198 |

## Per-Body Manifest

Record the actual source used per body here as files land. Format: `body — source — license — buckets present`.

Sources shorthand:
- **SSS** = Solar System Scope (<https://www.solarsystemscope.com/textures/>) — CC BY 4.0
- **JPL** = JPL/Caltech Solar System Simulator texture maps (<https://space.jpl.nasa.gov/tmaps/>) — NASA/JPL public domain
- **USGS** = USGS Astrogeology planetary images (<https://planetarynames.wr.usgs.gov/Page/Images>) — public domain; files suffixed `_comp.jpg`

When multiple rows exist for a body, the **[active]** tag marks which file the registry currently points to. Other rows are kept for provenance.

- sun — SSS — CC BY 4.0 — 2k
- mercury — SSS — CC BY 4.0 — 2k
- venus — SSS — CC BY 4.0 — 2k
- earth — SSS — CC BY 4.0 — 2k (also `earth_clouds.jpg`, `earth_night.jpg` — SSS)
  -- moon — SSS — CC BY 4.0 — 2k (`moons/earth/moon.jpg`)
- mars — SSS — CC BY 4.0 — 2k
  -- phobos — JPL — public domain — 2k (`phobos.jpg`)
  -- phobos — USGS — public domain — 2k (`phobos_comp.jpg`) **[active]**
  -- deimos — JPL — public domain — 2k
- jupiter — SSS — CC BY 4.0 — 2k
  -- io — JPL — public domain — 2k (`io.jpg`) **[active]**
  -- io — USGS — public domain — 2k (`io_comp.jpg`)
  -- europa — JPL — public domain — 2k (`europa.jpg`)
  -- europa — USGS — public domain — 2k (`europa_comp.jpg`) **[active]**
  -- ganymede — JPL — public domain — 2k (`ganymede.jpg`)
  -- ganymede — USGS — public domain — 2k (`ganymede_comp.jpg`) **[active]**
  -- callisto — JPL — public domain — 2k (`callisto.jpg`)
  -- callisto — USGS — public domain — 2k (`callisto_comp.jpg`) **[active]**
- saturn — SSS — CC BY 4.0 — 2k (rings: `saturn_ring.png` — SSS)
  -- mimas — JPL — public domain — 2k (`mimas.jpg`)
  -- mimas — USGS — public domain — 2k (`mimas_comp.jpg`) **[active]**
  -- enceladus — JPL — public domain — 2k (`enceladus.jpg`)
  -- enceladus — USGS — public domain — 2k (`enceladus_comp.jpg`) **[active]**
  -- tethys — JPL — public domain — 2k (`tethys.jpg`)
  -- tethys — USGS — public domain — 2k (`tethys_comp.jpg`) **[active]**
  -- dione — JPL — public domain — 2k (`dione.jpg`)
  -- dione — USGS — public domain — 2k (`dione_comp.jpg`) **[active]**
  -- rhea — JPL — public domain — 2k (`rhea.jpg`)
  -- rhea — USGS — public domain — 2k (`rhea_comp.jpg`) **[active]**
  -- titan — USGS — public domain — 2k (`titan_comp.jpg`) **[active]**
  -- iapetus — JPL — public domain — 2k (`iapetus.jpg`)
  -- iapetus — USGS — public domain — 2k (`iapetus_comp.jpg`) **[active]**
- uranus — SSS — CC BY 4.0 — 2k
  -- miranda — JPL — public domain — 2k
  -- ariel — JPL — public domain — 2k
  -- umbriel — JPL — public domain — 2k
  -- titania — JPL — public domain — 2k
  -- oberon — JPL — public domain — 2k
- neptune — SSS — CC BY 4.0 — 2k
- pluto — SSS — CC BY 4.0 — 2k

## Attribution string for the app

When at least one CC-BY texture from Solar System Scope is in use, the app should display (e.g. in an About panel):

> Planet textures © Solar System Scope (https://www.solarsystemscope.com) — CC BY 4.0

This attribution is required by the CC BY 4.0 license.
