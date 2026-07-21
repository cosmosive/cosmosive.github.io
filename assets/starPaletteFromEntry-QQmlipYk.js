import{a as Fe,q as Pe,t as ke}from"./src-LAZXfPkT.js";import"./astro-D_-L7llL.js";import{F as le,K as re,z as ue}from"./src-CGAzYA7g.js";import{G as Me,t as ce}from"./activeGameplayHost-BRXabnCK.js";import{u as Ce}from"./celestial-BM9jHBLQ.js";import{t as ze}from"./skyLightStore-CVz1oC2L.js";import{n as Ae,o as _e}from"./activeOriginScenePos-CX7xC2G-.js";import{t as K}from"./clamp01-C0YE5yT6.js";import{o as Te}from"./cameraImpulse-CIkV0N5p.js";import{St as H,W as Re,f as te,k as Ie,lt as U,p as De,tt as Ee,ut as Le,v as W}from"./three-vendor-CoNqi1xW.js";import{t as ve}from"./r3fHostExtras-CS8xlzvG.js";import{t as Ve}from"./combatFrustum-BPs0s6WW.js";var oe=new Map;function qt(e,t){oe.set(e,t)}function Gt(e){oe.delete(e)}function Xt(e,t,a){let o=null;for(const r of oe.values()){const n=r(e,t,a);n!=null&&Number.isFinite(n)&&n>=0&&(o==null||n<o)&&(o=n)}return o}var E={effectiveSpeedKmPerS:0,proximityThrottle:1,nearestBodySurfaceDistSu:null,viewpointScenePosX:0,viewpointScenePosY:0,viewpointScenePosZ:0};function Yt(e){e.effectiveSpeedKmPerS!==void 0&&(E.effectiveSpeedKmPerS=e.effectiveSpeedKmPerS),e.proximityThrottle!==void 0&&(E.proximityThrottle=e.proximityThrottle),e.nearestBodySurfaceDistSu!==void 0&&(E.nearestBodySurfaceDistSu=e.nearestBodySurfaceDistSu),e.viewpointScenePosX!==void 0&&(E.viewpointScenePosX=e.viewpointScenePosX),e.viewpointScenePosY!==void 0&&(E.viewpointScenePosY=e.viewpointScenePosY),e.viewpointScenePosZ!==void 0&&(E.viewpointScenePosZ=e.viewpointScenePosZ)}function jt(e,t){return e.getWorldPosition(t),t}var ge=null;function $t(e){ge=e}function Jt(){return ge}function Zt(e){if(typeof e!="string"||!/^#?[0-9a-fA-F]{6}$/.test(e))return[0,0,0];const t=e.replace(/^#/,""),a=parseInt(t,16);return Number.isFinite(a)?[Math.floor(a/65536)%256,Math.floor(a/256)%256,a%256]:[0,0,0]}function ne(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function Qt(e){return Math.max(0,Math.min(255,Math.round(e)))}function Ne(e,t,a){return[e[0]+(t[0]-e[0])*a,e[1]+(t[1]-e[1])*a,e[2]+(t[2]-e[2])*a]}function G(e,t=1,a=1){const[o,r,n]=ne(e),c=Math.max(.15,Math.min(1,t));return[o*c,r*c,n*c,a]}var Be=1,We=-25,fe=500,Oe=.01;function ae(e,t){let a=t;for(;e[a]!==a;)a=e[a];let o=t;for(;o!==a;){const r=e[o];e[o]=a,o=r}return a}function Ke(e,t,a){const o=ae(e,t),r=ae(e,a);o!==r&&(e[o]=r)}function me(e,t,a){return`${e},${t},${a}`}function ea(e,t){const a=e.length,o=Array.from({length:a},(i,l)=>l),r=t,n=new Map;for(let i=0;i<a;i+=1){const l=e[i],m=me(Math.floor(l.x/r),Math.floor(l.y/r),Math.floor(l.z/r));n.has(m)||n.set(m,[]),n.get(m).push(i)}const c=t*t;for(let i=0;i<a;i+=1){const l=e[i],m=Math.floor(l.x/r),d=Math.floor(l.y/r),h=Math.floor(l.z/r);for(let S=-1;S<=1;S+=1)for(let v=-1;v<=1;v+=1)for(let x=-1;x<=1;x+=1){const M=me(m+S,d+v,h+x),w=n.get(M);if(w)for(const P of w){if(P<=i)continue;const z=e[P],_=z.x-l.x,T=z.y-l.y,R=z.z-l.z;_*_+T*T+R*R<c&&Ke(o,i,P)}}}const s=new Map;for(let i=0;i<a;i+=1){const l=ae(o,i);s.has(l)||s.set(l,[]),s.get(l).push(i)}const u=[];for(let i=0;i<a;i+=1)u.push(void 0);for(const i of s.values())i.length<=1||(i.sort((l,m)=>l-m),i.forEach((l,m)=>{m>0&&(u[l]={x:0,y:m*We})}));return u}function He(){const e=Math.PI*(3-Math.sqrt(5)),t=[];for(let a=0;a<fe;a+=1){const o=1-2*(a+.5)/fe,r=Math.sqrt(Math.max(0,1-o*o)),n=a*e;t.push({x:Math.cos(n)*r,y:o,z:Math.sin(n)*r})}return t}var Ue=6;function qe(e){const t=new Float32Array(e);for(let a=0;a<e;a+=1){const o=(a*.618033988749895+.5)%1;t[a]=Math.max(-1,Ue+2*Math.log10(Math.max(o,1e-4)))}return t}function Ge(){const e=He(),t=e.length,a=ke,o=new Float32Array(t*3);return e.forEach((r,n)=>{o[n*3]=r.x*a,o[n*3+1]=r.y*a,o[n*3+2]=r.z*a}),{abbr:"_bootstrap",positions:o,sizes:new Float32Array(t).fill(Be),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(Oe),brightness:new Float32Array(t).fill(1),mag:qe(t),starsInChunk:[]}}var Xe={raMin:0,raMax:360,decMin:-90,decMax:90},ta={chunks:[],namedStarsInView:[]};function aa(e,t){return e===0&&t!=="success"}function Se(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[Ge()]:[]}function ra(e,t){const a=Se(e,t),o=a.slice(0,3).map(r=>r.abbr).join(",");return a.length===0?{syntheticKind:"empty",chunkAbbrevSample:o}:a.length===1&&a[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:o}:a.some(r=>r.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:o}:{syntheticKind:"real",chunkAbbrevSample:o}}function he(e,t){return t.current===e.current}function oa(e,t,a,o,r){e.onerror=n=>{he(t,a)||(o("error"),r(n.message??"Starfield worker failed"))},e.onmessageerror=()=>{he(t,a)||(o("error"),r("Starfield worker message error"))}}function pe(e){const t=e.indexOf("__part");return t===-1?e:e.slice(0,t)}function B(e,t){const a=new Float32Array(e.length+t.length);return a.set(e,0),a.set(t,e.length),a}function Ye(e,t){return{abbr:e.abbr,positions:B(e.positions,t.positions),sizes:B(e.sizes,t.sizes),colors:B(e.colors,t.colors),warm:B(e.warm,t.warm),brightness:B(e.brightness,t.brightness),mag:B(e.mag,t.mag),starsInChunk:[...e.starsInChunk,...t.starsInChunk]}}function je(e,t){const a=new Map;e.chunks.forEach((r,n)=>a.set(pe(r.abbr),n));const o=[...e.chunks];for(const r of t.chunks){const n=pe(r.abbr),c=a.get(n);if(c!=null){const s=o[c];s&&(o[c]=Ye(s,r))}else a.set(n,o.length),o.push(r)}return{chunks:o,namedStarsInView:[...e.namedStarsInView,...t.namedStarsInView]}}function $e(e,t,a,o,r,n,c,s="replace"){const{runId:u,...i}=e;u===t.current&&(a.current=u,s==="append"?(o.current=[...o.current,...i.starsInView],r(l=>je(l,{chunks:i.chunks,namedStarsInView:i.namedStarsInView}))):(o.current=i.starsInView,r({chunks:i.chunks,namedStarsInView:i.namedStarsInView})),n("ready"),c(null))}function na(e,t,a,o,r,n={}){const c=n.mode??"replace";e.processStarfield({runId:t,catalog:a,maxDistanceLevel:o,bounds:Xe,raInHours:!1,maxPerChunk:n.maxPerChunk}).then(s=>{$e(s,r.runIdRef,r.lastSuccessfulRunIdRef,r.starsInViewRef,r.setStarData,r.setStarfieldStatus,r.setErrorMessage,c),n.onComplete?.()}).catch(s=>{t===r.runIdRef.current&&(r.setStarfieldStatus("error"),r.setErrorMessage(s instanceof Error?s.message:"Starfield worker failed"))})}function Je(e,t){t.length=0;for(const a of e){const o=new Float32Array(a.starsInChunk.length);for(let r=0;r<a.starsInChunk.length;r+=1){const n=a.starsInChunk[r];o[r]=n?Me(n)*re:0}t.push(o)}}function Ze(e,t,a){const o=Se(e(),t());return Je(o,a),o}var Qe=500*re;function et(e,t,a,o){const r=Math.sqrt(e*e+t*t+a*a);if(r<=0||!Number.isFinite(r)){o.x=0,o.y=0,o.z=0;return}const n=Fe(r)*re/r;o.x=e*n,o.y=t*n,o.z=a*n}function tt(e,t,a,o,r,n,c,s){const u=Math.sqrt(e*e+t*t+a*a);if(u<=0||!Number.isFinite(u)||!Number.isFinite(o)){const h=-r,S=-n,v=-c;return h*h+S*S+v*v<=s}const i=o/u,l=e*i-r,m=t*i-n,d=a*i-c;return l*l+m*m+d*d<=s}function at(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},viewpointHelioKm:{x:0,y:0,z:0}}}function rt(e){const t=Math.tan(e.frustum.fovYRadians*.5);return et(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.viewpointHelioKm),{tanHalfV:t,maxDistSqKm:Qe**2}}var ot=256,nt=320,it=`
  attribute float size;
  attribute vec3 color;
  attribute float brightness;
  attribute float warm;
  attribute float mag;
  attribute float ignite;
  attribute vec3 velocity;
  varying vec3 vColor;
  varying float vBrightness;
  varying float vWarm;
  varying float vSeed;
  varying float vSaturation;
  varying vec2 vScreenDir;
  uniform float uPointSizeMax;
  uniform float uTime;
  uniform float uDtYears;
  uniform float uTwinkleAmp;
  uniform float uTwinkleFreq;
  uniform float uSizeMultiplier;
  uniform float uPointSizeFloor;
  uniform float uMagLimit;
  uniform float uMagFadeRange;
  uniform float uMagRef;
  uniform float uFluxClampMax;
  uniform float uFluxGamma;
  uniform float uPsfMaxMult;
  uniform float uFaintSizeFade;
  uniform float uFlareSatLo;
  uniform float uFlareSatHi;
  uniform float uFlareMaxScale;
  uniform float uDprScale;
  varying float vFlareFrac;
  varying float vFlareScale;

  float hash13(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }

  void main() {
    // Stellar proper motion: advect along the precomputed scene-space drift velocity by the
    // elapsed years since J2000 (uDtYears). velocity is 0 for stars without astrometry, so this
    // is a no-op for them. One vec3 multiply-add on top of the existing transform.
    vec3 pos = position + velocity * uDtYears;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vColor = color;
    vWarm = warm;
    vSeed = hash13(position * 0.01 + vec3(warm, brightness, size));
    float twinkle = 1.0 + uTwinkleAmp * sin(uTime * (uTwinkleFreq + vSeed * 0.85) + vSeed * 6.2831);

    // Apparent magnitude from current camera (per-vertex catalog mag is Sol-pov apparent mag;
    // rescale by the camera/Sol distance ratio): m_app = mag + 5 * log10(d_cam / d_sol).
    float dCam = length(mvPosition.xyz);
    float dSol = max(length(pos), 1.0);
    float appMag = mag + 5.0 * log(dCam / dSol) / log(10.0);

    // Cull via clip-space (WebKit/WKWebView renders gl_PointSize=0 as 1 px). Push the vertex
    // outside the [-1,1] clip volume to actually drop it. Cull on naked-eye mag limit only;
    // size has no role in culling. ignite > 1.0 exempts a star from mag cull so it blazes
    // from anywhere regardless of the current dim curve.
    if (mvPosition.z >= 0.0 || (appMag > uMagLimit && ignite <= 1.0)) {
      gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      gl_PointSize = 0.0;
      vBrightness = 0.0;
      vSaturation = 0.0;
      vScreenDir = vec2(0.0);
      vFlareFrac = 0.0;
      vFlareScale = 1.0;
    } else {
      // NDC position (-1..1); the radial direction from screen center drives the
      // speed-streak (warp-tunnel) elongation in the fragment. Stars near the edge
      // (|ndc| -> 1) streak more than those near the heading point at center.
      vScreenDir = gl_Position.xy / max(abs(gl_Position.w), 0.0001);
      // Pogson flux relative to reference magnitude (Vega-like, m_ref=0).
      // For an ignited star whose appMag exceeds the limit, flux grows large but is
      // clamped at uFluxClampMax in the tone curve below -- no divide-by-zero or NaN.
      float fluxLog = -0.4 * (appMag - uMagRef);
      float flux = pow(10.0, fluxLog);
      // Gamma-compressed tone curve; saturate brightest stars at uFluxClampMax.
      float toneFlux = pow(clamp(flux, 0.0, uFluxClampMax), uFluxGamma);
      // Smooth fade across the last uMagFadeRange below the limit.
      float magFade = clamp((uMagLimit - appMag) / max(uMagFadeRange, 0.0001), 0.0, 1.0);
      // Ignited stars bypass the fade so they blaze at full magFade=1.
      if (ignite > 1.0) { magFade = 1.0; }
      // PSF analogue: brightest stars bleed slightly larger.
      float maxToneFlux = pow(uFluxClampMax, uFluxGamma);
      float saturationFrac = sqrt(clamp(toneFlux / max(maxToneFlux, 0.0001), 0.0, 1.0));
      vSaturation = saturationFrac;
      float psfSizePx = mix(uPointSizeFloor, uPointSizeFloor * uPsfMaxMult, saturationFrac);
      // size attribute now carries fusion fade multiplier (0..1, default 1).
      psfSizePx *= size;
      psfSizePx *= uSizeMultiplier;
      // Visual thinning: the faint bulk both dims (magFade in vBrightness) and shrinks
      // here, so it recedes toward invisible while bright stars stay prominent (ED-style
      // sparse sky). Ignited stars have magFade forced to 1.0 above, so they keep full size.
      psfSizePx *= mix(uFaintSizeFade, 1.0, magFade);
      // Lens flare: enlarge the sprite for the brightest stars so the spikes/ring reach
      // outward. The fragment remaps halo/core by vFlareScale so the visible disc keeps its
      // current size (no bigger sphere); the extra area carries only the flare.
      float flareFrac = smoothstep(uFlareSatLo, uFlareSatHi, saturationFrac);
      float flareScale = mix(1.0, uFlareMaxScale, flareFrac);
      vFlareFrac = flareFrac;
      vFlareScale = flareScale;
      // gl_PointSize is in DRAWING-BUFFER pixels, so a fixed value renders at half the apparent
      // (CSS) size when the renderer runs at dpr 2 (Chromium/web on a Retina display) versus dpr 1
      // (WebKit/Tauri, pinned by the fillrate cliff -- see sceneDprPolicy). That shrank every star
      // AND its thin diffraction spikes to sub-pixel on the web build, so the flare read on Tauri
      // but vanished in Chrome/Firefox. Scale by the live drawing-buffer pixel ratio (uDprScale,
      // 1 on Tauri = no change) so apparent size -- and the spikes -- are dpr-independent.
      gl_PointSize = clamp(psfSizePx * flareScale * uDprScale, 0.0, uPointSizeMax);
      // ignite multiplies final brightness: 1.0 = normal, >1.0 = blazing.
      vBrightness = toneFlux * magFade * twinkle * (0.85 + 0.3 * brightness) * ignite;
    }
  }
`,st=`
  varying vec3 vColor;
  varying float vBrightness;
  varying float vWarm;
  varying float vSaturation;
  varying vec2 vScreenDir;
  varying float vFlareFrac;
  varying float vFlareScale;
  uniform vec3 uPaletteHot;
  uniform vec3 uPaletteFlare;
  uniform float uStreakAmt;
  uniform float uCoreSizeRatio;
  uniform float uFlareSpikeAmt;

  // Speed-streak (supercruise warp blur): elongate the glow along the screen-radial direction from
  // the heading point. Length-invariant rotated basis, along-axis compressed. Identity when idle.
  vec2 streakUv(vec2 uv) {
    if (uStreakAmt <= 0.001) return uv;
    float r = length(vScreenDir);
    if (r < 0.001) return uv;
    vec2 ndir = vScreenDir / r;
    float along = dot(uv, ndir);
    float perp = dot(uv, vec2(-ndir.y, ndir.x));
    float stretch = 1.0 + uStreakAmt * 5.0 * clamp(r, 0.0, 1.0);
    return vec2(along / stretch, perp);
  }

  // 4-point diffraction cross (the cinematic glints). Thin, long, screen-aligned rays --
  // reads as real camera/telescope optics, not a billboard sprite. Called over the full
  // enlarged flare sprite for the brightest stars; faint stars never reach this.
  float diffractionSpikes(vec2 uv) {
    float d = clamp(length(uv) * 2.0, 0.0, 1.0);
    float fade = 1.0 - d;
    float horiz = exp(-abs(uv.y) * 140.0);
    float vert = exp(-abs(uv.x) * 140.0);
    return (horiz + vert) * fade * fade;
  }

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    if (dot(uv, uv) > 0.25) discard; // outside the halo sprite

    // Premultiplied accumulator (color * alpha); output alpha is 1 so AdditiveBlending writes it as-is.
    vec3 outRgb = vec3(0.0);

    // --- halo glow (remapped by vFlareScale so it stays its current on-screen size inside the
    // enlarged flare sprite; vFlareScale == 1 for non-flaring stars, identical to before) ---
    vec2 huv = streakUv(uv * vFlareScale);
    float hradial = clamp(length(huv) * 2.0, 0.0, 1.0);
    float outer = smoothstep(1.0, 0.2, hradial);
    float innerCut = smoothstep(0.55, 0.0, hradial);
    float halo = max(0.0, outer - innerCut) * (0.3 + 0.7 * vWarm);
    vec3 haloColor = mix(vColor, uPaletteHot, 0.45 + 0.45 * vWarm);
    haloColor = mix(haloColor, uPaletteFlare, 0.25 + 0.25 * vWarm);
    float haloAlpha = halo * 0.7;
    outRgb += (haloColor * vBrightness) * haloAlpha;

    // --- core in the inner 1/uCoreSizeRatio of the sprite (also remapped by vFlareScale) ---
    vec2 cuv = uv * uCoreSizeRatio * vFlareScale;
    if (dot(cuv, cuv) <= 0.25) {
      vec2 cs = streakUv(cuv);
      float cradial = clamp(length(cs) * 2.0, 0.0, 1.0);
      float core = pow(1.0 - cradial, 2.8);
      float mid = pow(1.0 - cradial, 1.2);
      float edge = smoothstep(1.0, 0.35, cradial);
      float warmBoost = smoothstep(0.72, 0.0, cradial) * (0.25 + 0.75 * vWarm);
      float flareBoost = smoothstep(0.35, 0.0, cradial) * vWarm;
      vec3 col = mix(vColor, uPaletteHot, warmBoost);
      col = mix(col, uPaletteFlare, flareBoost * 0.65);
      float cAlpha = clamp(edge * (0.45 + 0.55 * mid), 0.0, 1.0);
      outRgb += col * vBrightness * (0.75 + 0.6 * core) * cAlpha;
    }

    // --- lens flare on the brightest stars: a 4-point diffraction cross drawn over the full
    // enlarged sprite so it reaches well past the compact core (procedural, not a billboard).
    // vFlareFrac == 0 for the faint bulk, so this whole block early-outs there. ---
    if (vFlareFrac > 0.0) {
      vec3 flareColor = mix(haloColor, uPaletteFlare, 0.5);
      float spikes = diffractionSpikes(uv) * uFlareSpikeAmt * vFlareFrac;
      outRgb += flareColor * vBrightness * spikes;
    }

    if (max(outRgb.r, max(outRgb.g, outRgb.b)) < 0.0001) discard;
    gl_FragColor = vec4(outRgb, 1.0);
  }
`;function lt(e){return new U({uniforms:{uPointSizeMax:{value:e?.pointSizeMax??ot},uTime:{value:0},uDtYears:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uPointSizeFloor:{value:e?.pointSizeFloor??1},uMagLimit:{value:6.5},uMagFadeRange:{value:2.5},uMagRef:{value:0},uFluxClampMax:{value:4},uFluxGamma:{value:.6},uPsfMaxMult:{value:5},uFaintSizeFade:{value:.5},uFlareSatLo:{value:.42},uFlareSatHi:{value:.66},uFlareMaxScale:{value:5},uDprScale:{value:1},uFlareSpikeAmt:{value:.5},uPaletteHot:{value:new W(1,.78,.56)},uPaletteFlare:{value:new W(1,.92,.75)},uStreakAmt:{value:0},uCoreSizeRatio:{value:e?.coreSizeRatio??1}},vertexShader:it,fragmentShader:st,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function ut(){return lt({sizeMultiplier:1.6,pointSizeMax:nt,pointSizeFloor:1,twinkleAmp:.03,twinkleFreq:.9,coreSizeRatio:1.6})}function ct(e){const{layers:t}=ve(e);return{createChunk(a){const o=t[a.layer],r=new De;for(const u of a.attributes)r.setAttribute(u.name,new te(u.data,u.components));r.computeBoundingSphere();const n=a.material,c=new Ee(r,n);c.frustumCulled=!0,c.raycast=()=>{},o.add(c);const s=new Map(a.attributes.map(u=>[u.name,u.components]));return{meshRef:c,updateAttribute(u,i){const l=s.get(u);l!=null&&r.setAttribute(u,new te(i,l))},setVertexCount(u){r.computeBoundingSphere()},dispose(){o.remove(c),r.dispose()}}}}}function ft(e){return ct(e)}function xe(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function mt(e,t){let a=null,o=null;for(let r=0;r<e.length;r+=1){const n=e[r],c=t(n,r);c&&xe(c,a)&&(a=c,o=n.starsInChunk[c.index]??null)}return o}function ht(e){const t=e.proper??(e.hip!=null?`HIP ${e.hip}`:`Star ${e.id}`);return Ce.select(Pe("hyg",e.id),t,"star"),!0}function pt(e){if(e.chunks.length===0)return!1;const t=e.prepared;if(t==null)return!1;const a=mt(e.chunks,(o,r)=>e.pickInChunk(o,r,t));return a?ht(a):!1}function dt(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function vt(){return 1}function gt(){return 8}var J={px:0,py:0};function St(e){const{positions:t,velocities:a,dtYears:o,sizes:r,distancesKm:n,starCount:c,camFrustum:s,tanHalfV:u,viewpointHelioKm:i,maxDistSqKm:l,mouseX:m,mouseY:d,projectStarToScreenPx:h}=e,S=o??0,v=Math.min(c,t.length/3,r.length,n.length);let x=null;for(let M=0;M<v;M+=1){const w=M*3,P=t[w]+(a?a[w]*S:0),z=t[w+1]+(a?a[w+1]*S:0),_=t[w+2]+(a?a[w+2]*S:0);if(!tt(P,z,_,n[M]??0,i.x,i.y,i.z,l))continue;const T=P-s.position.x,R=z-s.position.y,V=_-s.position.z,N=T*s.forward.x+R*s.forward.y+V*s.forward.z;if(N<=1e-6)continue;const $=T*s.right.x+R*s.right.y+V*s.right.z,p=T*s.up.x+R*s.up.y+V*s.up.z,f=u*s.aspect*N;if(Math.abs($)>f)continue;const g=u*N;if(Math.abs(p)>g)continue;const y=N,k=vt(),b=gt();if(b<=0)continue;h(P,z,_,J);const I=J.px-m,D=J.py-d,q=I*I+D*D;if(q>b*b)continue;const O={index:M,distSqPx:q,depthCam:y,renderedPx:k};xe(O,x)&&(x=O)}return x}var Z=new H,Q=new H;function xt(e,t,a,o,r,n,c,s,u,i,l,m,d,h,S){const v=a.getBoundingClientRect();return St({positions:n,velocities:h,dtYears:S,sizes:c,distancesKm:s,starCount:u,uScale:dt(v.height,o.fov*Math.PI/180),camFrustum:i,tanHalfV:l,viewpointHelioKm:m,maxDistSqKm:d,mouseX:e-v.left,mouseY:t-v.top,projectStarToScreenPx:(x,M,w,P)=>{Z.set(x,M,w),Z.applyMatrix4(r.matrixWorld),Q.copy(Z).project(o),P.px=(Q.x*.5+.5)*v.width,P.py=(-Q.y*.5+.5)*v.height}})}function yt(e){const{cameraThree:t,pickerScratch:a,syncScratch:o}=e;Ve(t,a.frustum,o.forward,o.right,o.up);const r=Ae();r&&(a.frustum.position.x+=r.x,a.frustum.position.y+=r.y,a.frustum.position.z+=r.z);const{tanHalfV:n,maxDistSqKm:c}=rt(a);return pt({chunks:e.chunks,prepared:{tanHalfV:n,maxDistSqKm:c},pickInChunk:(s,u,i)=>{const l=e.pointsMeshes[u],m=e.chunkDistancesKm[u],d=e.chunkOriginalSizes[u];return!l||!m||!d?null:xt(e.clientX,e.clientY,e.canvas,t,l,s.positions,d,m,s.starsInChunk.length,a.frustum,i.tanHalfV,a.viewpointHelioKm,i.maxDistSqKm,e.chunkVelocities[u]??null,e.dtYears)}})}function wt(e){return yt(e)}var C={chunks:[],pointsMeshes:[],starsInView:[],generation:0};function ia(){return C}function sa(e,t){const a=ve(e),{starsInViewRef:o,getStarData:r,getStatus:n}=t,c=ft(e),s=[],u=[],i=[],l=[],m=[],d=[],h=ut();let S=0,v=0;const x=new Map,M=new Re,w=new Ie,P=new Le,z=at(),_=new H,T=new H,R=new H;function V(){for(const p of s)p.dispose();s.length=0,u.length=0,i.length=0,l.length=0,m.length=0,d.length=0;for(const p of x.values())p.ref=null}function N(p){C.chunks=p,C.pointsMeshes=u,C.starsInView=o.current,C.generation+=1}function $(p){const f=C;for(let g=0;g<f.chunks.length;g+=1){const y=f.chunks[g],k=f.pointsMeshes[g];if(!(!y||!k))for(let b=0;b<y.starsInChunk.length;b+=1){const I=y.starsInChunk[b];if(!I||I.proper!==p)continue;const D=k.geometry.getAttribute("ignite");return D instanceof te?{attribute:D,index:b}:null}}return null}return{refresh(){V();const p=Ze(r,n,i);for(const f of p){l.push(new Float32Array(f.sizes));const g=_e(f);m.push(g);const y=c.createChunk({layer:"starfield",meshName:`cosmosive-starfield-points-${f.abbr.replace(/[^a-zA-Z0-9_-]/g,"_")}`,material:h,attributes:[{name:"position",data:f.positions,components:3},{name:"size",data:f.sizes,components:1},{name:"color",data:f.colors,components:3},{name:"warm",data:f.warm,components:1},{name:"brightness",data:f.brightness,components:1},{name:"mag",data:f.mag,components:1},{name:"ignite",data:new Float32Array(f.sizes.length).fill(1),components:1},{name:"velocity",data:g,components:3}]});s.push(y);const k=y.meshRef;u.push(k)}d.length=0;for(const f of u)d.push(f);N(p)},advanceTime(p){S+=p,h.uniforms.uTime&&(h.uniforms.uTime.value=S),h.uniforms.uDprScale&&(h.uniforms.uDprScale.value=a.gl.getPixelRatio());const f=(ce().jd-ue)/le;h.uniforms.uDtYears&&(h.uniforms.uDtYears.value=f);const g=4.5,y=7.5,k=.8,b=E.effectiveSpeedKmPerS,I=k*Math.max(0,Math.min(1,((b>1?Math.log10(b):0)-g)/(y-g))),D=1-Math.exp(-p/.35);v+=(I-v)*D;const q=Math.max(v,Te()*k);h.uniforms.uStreakAmt&&(h.uniforms.uStreakAmt.value=q);const O=ze(),ye=1-Math.exp(-p/.7);if(h.uniforms.uMagLimit){const A=h.uniforms.uMagLimit.value;h.uniforms.uMagLimit.value=A+(O.magLimit-A)*ye}const we=1-Math.exp(-p/.5),ie=O.ignitedStarProperNames;for(const A of ie)x.has(A)||x.set(A,{value:1,ref:null});for(const[A,F]of x){const se=ie.includes(A),be=se?6:1;if(F.ref===null&&(F.ref=$(A)),F.value+=(be-F.value)*we,!se&&Math.abs(F.value-1)<.001){F.ref!==null&&(F.ref.attribute.setX(F.ref.index,1),F.ref.attribute.needsUpdate=!0),x.delete(A);continue}F.ref!==null&&(F.ref.attribute.setX(F.ref.index,F.value),F.ref.attribute.needsUpdate=!0)}},countFrustum(){let p=0,f=0;if(d.length>0){const g=a.cameraThree;g.updateMatrixWorld(!0),M.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),w.setFromProjectionMatrix(M);for(const y of d){const k=y.geometry;k.boundingSphere||k.computeBoundingSphere();const b=k.boundingSphere;b&&(P.copy(b).applyMatrix4(y.matrixWorld),w.intersectsSphere(P)&&(p+=1))}for(const y of u)f+=y.geometry.getAttribute("position")?.count??0}return{total:d.length,visible:p,verts:f}},pickFromClick({clientX:p,clientY:f,canvas:g}){return wt({kind:"r3f",clientX:p,clientY:f,canvas:g,chunks:C.chunks,chunkDistancesKm:i,chunkOriginalSizes:l,chunkVelocities:m,dtYears:(ce().jd-ue)/le,cameraThree:a.cameraThree,pointsMeshes:u,pickerScratch:z,syncScratch:{forward:_,right:T,up:R}})},dispose(){V(),h.dispose(),C.chunks=[],C.pointsMeshes=[],C.starsInView=[],C.generation+=1}}}var L={star1:G("#fff3a8",1),star2:G("#f5c238",1),star3:G("#e07b1a",1),star4:G("#a8380c",1)};function X(e){return new W(e[0],e[1],e[2])}function bt(){return{cool:X(L.star4),warm:X(L.star3),hot:X(L.star2),flare:X(L.star1)}}var Ft=`
#include <common>
varying vec3 vViewPos;
varying vec3 vLocalPos;
varying vec3 vViewNormal;
#include <logdepthbuf_pars_vertex>

void main() {
  // View space (camera-relative) keeps the limb term float32-safe at re-rooted star
  // vantages: modelViewMatrix cancels the huge absolute origin offset in float64 on the
  // CPU before the GPU downcast. A world-space camera-minus-fragment term would quantize
  // the tiny per-vertex sphere variation away on the first teleport frame -> dark facets.
  vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
  vViewPos = mvPos.xyz;
  vLocalPos = position;
  vViewNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * mvPos;
  // Write logarithmic depth so this disc shares the scene's depth curve (the renderer runs
  // logarithmicDepthBuffer:true). Without it a raw ShaderMaterial writes perspective depth,
  // which at a re-rooted star's astronomical near/far ratio crushes toward 1.0 and drops whole
  // triangles against the far plane -> the dark faceting seen on teleport until a move resets near/far.
  #include <logdepthbuf_vertex>
}
`,Pt=`
uniform float uTime;
uniform float uTurbulence;
uniform float uGranulationScale;
uniform float uLimbStrength;
uniform float uEmissiveBoost;
uniform float uOpacity;
uniform float uBandStrength;
uniform vec3 uPaletteCool;
uniform vec3 uPaletteWarm;
uniform vec3 uPaletteHot;
uniform vec3 uPaletteFlare;
varying vec3 vViewPos;
varying vec3 vLocalPos;
varying vec3 vViewNormal;
#include <logdepthbuf_pars_fragment>

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}

float noise3(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash13(i + vec3(0.0, 0.0, 0.0));
  float n100 = hash13(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash13(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash13(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash13(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash13(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash13(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash13(i + vec3(1.0, 1.0, 1.0));
  float nx00 = mix(n000, n100, f.x);
  float nx10 = mix(n010, n110, f.x);
  float nx01 = mix(n001, n101, f.x);
  float nx11 = mix(n011, n111, f.x);
  float nxy0 = mix(nx00, nx10, f.y);
  float nxy1 = mix(nx01, nx11, f.y);
  return mix(nxy0, nxy1, f.z);
}

float fbm3(vec3 p) {
  // 2 octaves: the former 3rd octave was the finest detail at 1/8 amplitude -- dropping it cuts
  // ~1/3 of the per-fragment noise cost (this shader fills the disc when near the Sun, the heavy
  // WebKit/Tauri fillrate case) with little visible change to the granulation.
  float value = 0.0;
  float amp = 0.5;
  float freq = 1.0;
  for (int i = 0; i < 2; i += 1) {
    value += amp * noise3(p * freq);
    freq *= 2.1;
    amp *= 0.5;
  }
  return value;
}

void main() {
  #include <logdepthbuf_fragment>
  vec3 p = normalize(vLocalPos) * uGranulationScale;
  p += vec3(uTime * 0.012, -uTime * 0.009, uTime * 0.007) * uTurbulence;
  float granulation = fbm3(p);
  float flare = smoothstep(0.62, 0.95, granulation);
  vec3 col = mix(uPaletteCool, uPaletteWarm, granulation);
  col = mix(col, uPaletteHot, smoothstep(0.5, 0.85, granulation));
  col = mix(col, uPaletteFlare, flare);
  if (uBandStrength > 0.0) {
    // Outrun sun: hard horizontal stripes alternating between two target luma
    // levels. The overlay color-grade pass maps luma 0.5 -> hot magenta and
    // luma 1.0 -> safety orange, so the disc reads as two-tone orange/magenta
    // bands (no in-between cyan/violet from a continuous gradient).
    vec3 nrm = normalize(vLocalPos);
    float stripe = step(0.0, sin(nrm.y * 26.0));
    float bandLuma = mix(0.5, 1.0, stripe);
    col = mix(col, vec3(bandLuma), uBandStrength);
  }
  vec3 viewDir = normalize(-vViewPos);
  float ndv = max(dot(normalize(vViewNormal), viewDir), 0.0);
  float limb = pow(ndv, 0.6);
  // Band mode outputs target luma directly so the overlay grade maps each stripe
  // onto an exact ramp stop; skip the emissive/limb scaling that would clamp them.
  float litScale = mix(0.55, uLimbStrength, limb) * uEmissiveBoost;
  col *= mix(litScale, 1.0, uBandStrength);
  gl_FragColor = vec4(col, uOpacity);
}
`;function la(e){return e==null||Array.isArray(e)||!(e instanceof U)?!1:e.userData.cosmosiveSunPhotosphere===!0}function ua(e,t){const a=bt(),o={cool:e?.cool??a.cool,warm:e?.warm??a.warm,hot:e?.hot??a.hot,flare:e?.flare??a.flare},r={uTime:{value:0},uBandStrength:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:o.cool.clone()},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},n=new U({uniforms:r,vertexShader:Ft,fragmentShader:Pt,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return n.userData.cosmosiveSunPhotosphere=!0,n}var kt=`
#include <common>
varying vec3 vViewPos;
varying vec3 vLocalPos;
varying vec3 vViewNormal;
#include <logdepthbuf_pars_vertex>

void main() {
  // View space (camera-relative) keeps the halo term float32-safe at re-rooted star
  // vantages -- see the photosphere shader for why a world-space camera-minus-fragment term
  // quantizes to facets on the first teleport frame.
  vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
  vViewPos = mvPos.xyz;
  vLocalPos = position;
  vViewNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * mvPos;
  // Logarithmic depth: share the scene's depth curve (renderer logarithmicDepthBuffer:true).
  // See the photosphere shader for the faceting this prevents.
  #include <logdepthbuf_vertex>
}
`,Mt=`
uniform float uTime;
uniform float uIntensity;
uniform vec3 uPaletteWarm;
uniform vec3 uPaletteHot;
uniform vec3 uPaletteFlare;
varying vec3 vViewPos;
varying vec3 vLocalPos;
varying vec3 vViewNormal;
#include <logdepthbuf_pars_fragment>

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}

float noise3(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash13(i + vec3(0.0, 0.0, 0.0));
  float n100 = hash13(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash13(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash13(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash13(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash13(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash13(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash13(i + vec3(1.0, 1.0, 1.0));
  float nx00 = mix(n000, n100, f.x);
  float nx10 = mix(n010, n110, f.x);
  float nx01 = mix(n001, n101, f.x);
  float nx11 = mix(n011, n111, f.x);
  float nxy0 = mix(nx00, nx10, f.y);
  float nxy1 = mix(nx01, nx11, f.y);
  return mix(nxy0, nxy1, f.z);
}

// Single-octave streak noise (was 2 octaves). Halves this shell's per-fragment noise cost; the
// corona is the larger, screen-covering shell near the Sun, so this is the bigger WebKit/Tauri
// fillrate win. Output range stays [0,1], so the streak smoothstep below reads the same.
float coronaStreakNoise(vec3 p) {
  return noise3(p);
}

void main() {
  #include <logdepthbuf_fragment>
  vec3 fragToCam = normalize(-vViewPos);
  float cosA = clamp(dot(normalize(vViewNormal), fragToCam), -1.0, 1.0);
  float sinA = sqrt(max(0.0, 1.0 - cosA * cosA));
  float b = sinA * 2.0;
  float halo = 1.0 - smoothstep(1.0, 2.0, b);
  halo = pow(halo, 1.4);
  vec3 dir = normalize(vLocalPos);
  float streak = coronaStreakNoise(dir * 4.0 + vec3(uTime * 0.05));
  float spike = smoothstep(0.55, 0.92, streak) * halo;
  float intensity = (halo * 0.95 + spike * 0.5) * uIntensity;
  vec3 col = mix(uPaletteWarm, uPaletteHot, halo);
  col = mix(col, uPaletteFlare, spike);
  gl_FragColor = vec4(col * intensity, intensity);
}
`;function ee(e){return new W(e[0],e[1],e[2])}function Ct(){return{warm:ee(L.star3),hot:ee(L.star2),flare:ee(L.star1)}}function ca(e){return e==null||Array.isArray(e)||!(e instanceof U)?!1:e.userData.cosmosiveSunCorona===!0}function fa(e){const t=Ct(),a={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},o={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:a.warm.clone()},uPaletteHot:{value:a.hot.clone()},uPaletteFlare:{value:a.flare.clone()}},r=new U({uniforms:o,vertexShader:kt,fragmentShader:Mt,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return r.userData.cosmosiveSunCorona=!0,r}var zt=[1,1,1],At=ne("#f5c238");function _t(e){return typeof e.c=="string"&&e.c.length>0?ne(`#${e.c}`):At}function de(e,t){return[K(e[0]*t),K(e[1]*t),K(e[2]*t)]}function Tt(e){const t=_t(e);return{cool:de(t,.55),warm:de(t,.8),hot:t,flare:Ne(t,zt,.28)}}var Y=new W(1,1,1);function j(e){return new W(e[0],e[1],e[2])}function Rt(e){const t=Tt(e);return{cool:j(t.cool),warm:j(t.warm),hot:j(t.hot),flare:j(t.flare)}}function ma(e){const t=Rt(e),a=K(.9-K(typeof e.warm=="number"?e.warm:.01)*1.05);return{cool:t.cool.clone().lerp(Y,a*.72),warm:t.warm.clone().lerp(Y,a),hot:t.hot.clone().lerp(Y,a),flare:t.flare.clone().lerp(Y,Math.max(a,.5))}}export{E as C,Gt as D,qt as E,jt as S,Xt as T,Ne as _,ua as a,Jt as b,ia as c,na as d,oa as f,Qt as g,G as h,ca as i,ta as l,ea as m,Rt as n,la as o,aa as p,fa as r,sa as s,ma as t,ra as u,Zt as v,Yt as w,$t as x,ne as y};
