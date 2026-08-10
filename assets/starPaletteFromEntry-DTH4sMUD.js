import{a as be,q as Fe,t as Pe}from"./src-CU7dW3yu.js";import"./astro-BePEMyYX.js";import{B as le,W as ue,Z as re}from"./src-CVyf0waQ.js";import{ot as ke,t as ce}from"./activeGameplayHost-D21wXepp.js";import{u as Me}from"./celestial-uId0N_-A.js";import{t as Ce}from"./skyLightStore-C-gblSaU.js";import{n as ze,o as Ae}from"./activeOriginScenePos-BQGotk2l.js";import{t as H}from"./clamp01-C0YE5yT6.js";import{o as _e}from"./cameraImpulse-CIkV0N5p.js";import{St as K,W as Te,f as te,k as Ie,lt as U,p as Re,tt as De,ut as Ee,v as W}from"./three-vendor-BY42-AlS.js";import{t as ve}from"./r3fHostExtras-CS8xlzvG.js";import{t as Le}from"./combatFrustum-CH9gIfLq.js";var oe=new Map;function Ut(e,t){oe.set(e,t)}function qt(e){oe.delete(e)}function Gt(e,t,a){let r=null;for(const o of oe.values()){const n=o(e,t,a);n!=null&&Number.isFinite(n)&&n>=0&&(r==null||n<r)&&(r=n)}return r}var E={effectiveSpeedKmPerS:0,proximityThrottle:1,nearestBodySurfaceDistSu:null,viewpointScenePosX:0,viewpointScenePosY:0,viewpointScenePosZ:0};function Yt(e){e.effectiveSpeedKmPerS!==void 0&&(E.effectiveSpeedKmPerS=e.effectiveSpeedKmPerS),e.proximityThrottle!==void 0&&(E.proximityThrottle=e.proximityThrottle),e.nearestBodySurfaceDistSu!==void 0&&(E.nearestBodySurfaceDistSu=e.nearestBodySurfaceDistSu),e.viewpointScenePosX!==void 0&&(E.viewpointScenePosX=e.viewpointScenePosX),e.viewpointScenePosY!==void 0&&(E.viewpointScenePosY=e.viewpointScenePosY),e.viewpointScenePosZ!==void 0&&(E.viewpointScenePosZ=e.viewpointScenePosZ)}function jt(e,t){return e.getWorldPosition(t),t}var ge=null;function Xt(e){ge=e}function $t(){return ge}function Jt(e){if(typeof e!="string"||!/^#?[0-9a-fA-F]{6}$/.test(e))return[0,0,0];const t=e.replace(/^#/,""),a=parseInt(t,16);return Number.isFinite(a)?[Math.floor(a/65536)%256,Math.floor(a/256)%256,a%256]:[0,0,0]}function ne(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function Zt(e){return Math.max(0,Math.min(255,Math.round(e)))}function Ve(e,t,a){return[e[0]+(t[0]-e[0])*a,e[1]+(t[1]-e[1])*a,e[2]+(t[2]-e[2])*a]}function G(e,t=1,a=1){const[r,o,n]=ne(e),c=Math.max(.15,Math.min(1,t));return[r*c,o*c,n*c,a]}var Ne=1,Be=-25,fe=500,We=.01;function ae(e,t){let a=t;for(;e[a]!==a;)a=e[a];let r=t;for(;r!==a;){const o=e[r];e[r]=a,r=o}return a}function Oe(e,t,a){const r=ae(e,t),o=ae(e,a);r!==o&&(e[r]=o)}function me(e,t,a){return`${e},${t},${a}`}function Qt(e,t){const a=e.length,r=Array.from({length:a},(i,l)=>l),o=t,n=new Map;for(let i=0;i<a;i+=1){const l=e[i],m=me(Math.floor(l.x/o),Math.floor(l.y/o),Math.floor(l.z/o));n.has(m)||n.set(m,[]),n.get(m).push(i)}const c=t*t;for(let i=0;i<a;i+=1){const l=e[i],m=Math.floor(l.x/o),d=Math.floor(l.y/o),h=Math.floor(l.z/o);for(let x=-1;x<=1;x+=1)for(let v=-1;v<=1;v+=1)for(let y=-1;y<=1;y+=1){const k=me(m+x,d+v,h+y),w=n.get(k);if(w)for(const M of w){if(M<=i)continue;const C=e[M],_=C.x-l.x,T=C.y-l.y,I=C.z-l.z;_*_+T*T+I*I<c&&Oe(r,i,M)}}}const s=new Map;for(let i=0;i<a;i+=1){const l=ae(r,i);s.has(l)||s.set(l,[]),s.get(l).push(i)}const u=[];for(let i=0;i<a;i+=1)u.push(void 0);for(const i of s.values())i.length<=1||(i.sort((l,m)=>l-m),i.forEach((l,m)=>{m>0&&(u[l]={x:0,y:m*Be})}));return u}function He(){const e=Math.PI*(3-Math.sqrt(5)),t=[];for(let a=0;a<fe;a+=1){const r=1-2*(a+.5)/fe,o=Math.sqrt(Math.max(0,1-r*r)),n=a*e;t.push({x:Math.cos(n)*o,y:r,z:Math.sin(n)*o})}return t}var Ke=6;function Ue(e){const t=new Float32Array(e);for(let a=0;a<e;a+=1){const r=(a*.618033988749895+.5)%1;t[a]=Math.max(-1,Ke+2*Math.log10(Math.max(r,1e-4)))}return t}function qe(){const e=He(),t=e.length,a=Pe,r=new Float32Array(t*3);return e.forEach((o,n)=>{r[n*3]=o.x*a,r[n*3+1]=o.y*a,r[n*3+2]=o.z*a}),{abbr:"_bootstrap",positions:r,sizes:new Float32Array(t).fill(Ne),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(We),brightness:new Float32Array(t).fill(1),mag:Ue(t),starsInChunk:[]}}var Ge={raMin:0,raMax:360,decMin:-90,decMax:90},ea={chunks:[],namedStarsInView:[]};function ta(e,t){return e===0&&t!=="success"}function Se(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[qe()]:[]}function aa(e,t){const a=Se(e,t),r=a.slice(0,3).map(o=>o.abbr).join(",");return a.length===0?{syntheticKind:"empty",chunkAbbrevSample:r}:a.length===1&&a[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:r}:a.some(o=>o.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:r}:{syntheticKind:"real",chunkAbbrevSample:r}}function he(e,t){return t.current===e.current}function ra(e,t,a,r,o,n){e.onerror=c=>{n?.(),!he(t,a)&&(r("error"),o(c.message||"Starfield worker failed"))},e.onmessageerror=()=>{n?.(),!he(t,a)&&(r("error"),o("Starfield worker message error"))}}function pe(e){const t=e.indexOf("__part");return t===-1?e:e.slice(0,t)}function B(e,t){const a=new Float32Array(e.length+t.length);return a.set(e,0),a.set(t,e.length),a}function Ye(e,t){return{abbr:e.abbr,positions:B(e.positions,t.positions),sizes:B(e.sizes,t.sizes),colors:B(e.colors,t.colors),warm:B(e.warm,t.warm),brightness:B(e.brightness,t.brightness),mag:B(e.mag,t.mag),starsInChunk:[...e.starsInChunk,...t.starsInChunk]}}function je(e,t){const a=new Map;e.chunks.forEach((o,n)=>a.set(pe(o.abbr),n));const r=[...e.chunks];for(const o of t.chunks){const n=pe(o.abbr),c=a.get(n);if(c!=null){const s=r[c];s&&(r[c]=Ye(s,o))}else a.set(n,r.length),r.push(o)}return{chunks:r,namedStarsInView:[...e.namedStarsInView,...t.namedStarsInView]}}function Xe(e,t,a,r,o,n,c,s="replace"){const{runId:u,...i}=e;u===t.current&&(a.current=u,s==="append"?(r.current=[...r.current,...i.starsInView],o(l=>je(l,{chunks:i.chunks,namedStarsInView:i.namedStarsInView}))):(r.current=i.starsInView,o({chunks:i.chunks,namedStarsInView:i.namedStarsInView})),n("ready"),c(null))}function oa(e,t,a,r,o,n={}){const c=n.mode??"replace";e.processStarfield({runId:t,catalog:a,maxDistanceLevel:r,bounds:Ge,raInHours:!1,maxPerChunk:n.maxPerChunk}).then(s=>{Xe(s,o.runIdRef,o.lastSuccessfulRunIdRef,o.starsInViewRef,o.setStarData,o.setStarfieldStatus,o.setErrorMessage,c),n.onComplete?.()}).catch(s=>{t===o.runIdRef.current&&(o.setStarfieldStatus("error"),o.setErrorMessage(s instanceof Error?s.message:"Starfield worker failed"))})}function $e(e,t){t.length=0;for(const a of e){const r=new Float32Array(a.starsInChunk.length);for(let o=0;o<a.starsInChunk.length;o+=1){const n=a.starsInChunk[o];r[o]=n?ke(n)*re:0}t.push(r)}}function Je(e,t,a){const r=Se(e(),t());return $e(r,a),r}var Ze=500*re;function Qe(e,t,a,r){const o=Math.sqrt(e*e+t*t+a*a);if(o<=0||!Number.isFinite(o)){r.x=0,r.y=0,r.z=0;return}const n=be(o)*re/o;r.x=e*n,r.y=t*n,r.z=a*n}function et(e,t,a,r,o,n,c,s){const u=Math.sqrt(e*e+t*t+a*a);if(u<=0||!Number.isFinite(u)||!Number.isFinite(r)){const h=-o,x=-n,v=-c;return h*h+x*x+v*v<=s}const i=r/u,l=e*i-o,m=t*i-n,d=a*i-c;return l*l+m*m+d*d<=s}function tt(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},viewpointHelioKm:{x:0,y:0,z:0}}}function at(e){const t=Math.tan(e.frustum.fovYRadians*.5);return Qe(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.viewpointHelioKm),{tanHalfV:t,maxDistSqKm:Ze**2}}var rt=256,ot=320,nt=`
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
`,it=`
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
`;function st(e){return new U({uniforms:{uPointSizeMax:{value:e?.pointSizeMax??rt},uTime:{value:0},uDtYears:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uPointSizeFloor:{value:e?.pointSizeFloor??1},uMagLimit:{value:6.5},uMagFadeRange:{value:2.5},uMagRef:{value:0},uFluxClampMax:{value:4},uFluxGamma:{value:.6},uPsfMaxMult:{value:5},uFaintSizeFade:{value:.5},uFlareSatLo:{value:.42},uFlareSatHi:{value:.66},uFlareMaxScale:{value:5},uDprScale:{value:1},uFlareSpikeAmt:{value:.5},uPaletteHot:{value:new W(1,.78,.56)},uPaletteFlare:{value:new W(1,.92,.75)},uStreakAmt:{value:0},uCoreSizeRatio:{value:e?.coreSizeRatio??1}},vertexShader:nt,fragmentShader:it,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function lt(){return st({sizeMultiplier:1.6,pointSizeMax:ot,pointSizeFloor:1,twinkleAmp:.03,twinkleFreq:.9,coreSizeRatio:1.6})}function ut(e){const{layers:t}=ve(e);return{createChunk(a){const r=t[a.layer],o=new Re;for(const u of a.attributes)o.setAttribute(u.name,new te(u.data,u.components));o.computeBoundingSphere();const n=a.material,c=new De(o,n);c.frustumCulled=!0,c.raycast=()=>{},r.add(c);const s=new Map(a.attributes.map(u=>[u.name,u.components]));return{meshRef:c,updateAttribute(u,i){const l=s.get(u);l!=null&&o.setAttribute(u,new te(i,l))},setVertexCount(u){o.computeBoundingSphere()},dispose(){r.remove(c),o.dispose()}}}}}function ct(e){return ut(e)}function xe(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function ft(e,t){let a=null,r=null;for(let o=0;o<e.length;o+=1){const n=e[o],c=t(n,o);c&&xe(c,a)&&(a=c,r=n.starsInChunk[c.index]??null)}return r}function mt(e){const t=e.proper??(e.hip!=null?`HIP ${e.hip}`:`Star ${e.id}`);return Me.select(Fe("hyg",e.id),t,"star"),!0}function ht(e){if(e.chunks.length===0)return!1;const t=e.prepared;if(t==null)return!1;const a=ft(e.chunks,(r,o)=>e.pickInChunk(r,o,t));return a?mt(a):!1}function pt(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function dt(){return 1}function vt(){return 8}var J={px:0,py:0};function gt(e){const{positions:t,velocities:a,dtYears:r,sizes:o,distancesKm:n,starCount:c,camFrustum:s,tanHalfV:u,viewpointHelioKm:i,maxDistSqKm:l,mouseX:m,mouseY:d,projectStarToScreenPx:h}=e,x=r??0,v=Math.min(c,t.length/3,o.length,n.length);let y=null;for(let k=0;k<v;k+=1){const w=k*3,M=t[w]+(a?a[w]*x:0),C=t[w+1]+(a?a[w+1]*x:0),_=t[w+2]+(a?a[w+2]*x:0);if(!et(M,C,_,n[k]??0,i.x,i.y,i.z,l))continue;const T=M-s.position.x,I=C-s.position.y,V=_-s.position.z,N=T*s.forward.x+I*s.forward.y+V*s.forward.z;if(N<=1e-6)continue;const $=T*s.right.x+I*s.right.y+V*s.right.z,p=T*s.up.x+I*s.up.y+V*s.up.z,f=u*s.aspect*N;if(Math.abs($)>f)continue;const g=u*N;if(Math.abs(p)>g)continue;const S=N,F=dt(),P=vt();if(P<=0)continue;h(M,C,_,J);const R=J.px-m,D=J.py-d,O=R*R+D*D;if(O>P*P)continue;const q={index:k,distSqPx:O,depthCam:S,renderedPx:F};xe(q,y)&&(y=q)}return y}var Z=new K,Q=new K;function St(e,t,a,r,o,n,c,s,u,i,l,m,d,h,x){const v=a.getBoundingClientRect(),y=pt(v.height,r.fov*Math.PI/180);return gt({positions:n,velocities:h,dtYears:x,sizes:c,distancesKm:s,starCount:u,uScale:y,camFrustum:i,tanHalfV:l,viewpointHelioKm:m,maxDistSqKm:d,mouseX:e-v.left,mouseY:t-v.top,projectStarToScreenPx:(k,w,M,C)=>{Z.set(k,w,M),Z.applyMatrix4(o.matrixWorld),Q.copy(Z).project(r),C.px=(Q.x*.5+.5)*v.width,C.py=(-Q.y*.5+.5)*v.height}})}function xt(e){const{cameraThree:t,pickerScratch:a,syncScratch:r}=e;Le(t,a.frustum,r.forward,r.right,r.up);const o=ze();o&&(a.frustum.position.x+=o.x,a.frustum.position.y+=o.y,a.frustum.position.z+=o.z);const{tanHalfV:n,maxDistSqKm:c}=at(a);return ht({chunks:e.chunks,prepared:{tanHalfV:n,maxDistSqKm:c},pickInChunk:(s,u,i)=>{const l=e.pointsMeshes[u],m=e.chunkDistancesKm[u],d=e.chunkOriginalSizes[u];return!l||!m||!d?null:St(e.clientX,e.clientY,e.canvas,t,l,s.positions,d,m,s.starsInChunk.length,a.frustum,i.tanHalfV,a.viewpointHelioKm,i.maxDistSqKm,e.chunkVelocities[u]??null,e.dtYears)}})}function yt(e){return xt(e)}var z={chunks:[],pointsMeshes:[],starsInView:[],generation:0};function na(){return z}function ia(e,t){const a=ve(e),{starsInViewRef:r,getStarData:o,getStatus:n}=t,c=ct(e),s=[],u=[],i=[],l=[],m=[],d=[],h=lt();let x=0,v=0;const y=new Map,k=new Te,w=new Ie,M=new Ee,C=tt(),_=new K,T=new K,I=new K;function V(){for(const p of s)p.dispose();s.length=0,u.length=0,i.length=0,l.length=0,m.length=0,d.length=0;for(const p of y.values())p.ref=null}function N(p){z.chunks=p,z.pointsMeshes=u,z.starsInView=r.current,z.generation+=1}function $(p){const f=z;for(let g=0;g<f.chunks.length;g+=1){const S=f.chunks[g],F=f.pointsMeshes[g];if(!(!S||!F))for(let P=0;P<S.starsInChunk.length;P+=1){const R=S.starsInChunk[P];if(!R||R.proper!==p)continue;const D=F.geometry.getAttribute("ignite");return D instanceof te?{attribute:D,index:P}:null}}return null}return{refresh(){V();const p=Je(o,n,i);for(const f of p){l.push(new Float32Array(f.sizes));const g=Ae(f);m.push(g);const S=c.createChunk({layer:"starfield",meshName:`cosmosive-starfield-points-${f.abbr.replace(/[^a-zA-Z0-9_-]/g,"_")}`,material:h,attributes:[{name:"position",data:f.positions,components:3},{name:"size",data:f.sizes,components:1},{name:"color",data:f.colors,components:3},{name:"warm",data:f.warm,components:1},{name:"brightness",data:f.brightness,components:1},{name:"mag",data:f.mag,components:1},{name:"ignite",data:new Float32Array(f.sizes.length).fill(1),components:1},{name:"velocity",data:g,components:3}]});s.push(S);const F=S.meshRef;u.push(F)}d.length=0;for(const f of u)d.push(f);N(p)},advanceTime(p){x+=p,h.uniforms.uTime&&(h.uniforms.uTime.value=x),h.uniforms.uDprScale&&(h.uniforms.uDprScale.value=a.gl.getPixelRatio());const f=(ce().jd-ue)/le;h.uniforms.uDtYears&&(h.uniforms.uDtYears.value=f);const g=4.5,S=.8,F=E.effectiveSpeedKmPerS,P=S*Math.max(0,Math.min(1,((F>1?Math.log10(F):0)-g)/3)),R=1-Math.exp(-p/.35);v+=(P-v)*R;const D=Math.max(v,_e()*S);h.uniforms.uStreakAmt&&(h.uniforms.uStreakAmt.value=D);const O=Ce(),q=1-Math.exp(-p/.7);if(h.uniforms.uMagLimit){const A=h.uniforms.uMagLimit.value;h.uniforms.uMagLimit.value=A+(O.magLimit-A)*q}const ye=1-Math.exp(-p/.5),ie=O.ignitedStarProperNames;for(const A of ie)y.has(A)||y.set(A,{value:1,ref:null});for(const[A,b]of y){const se=ie.includes(A),we=se?6:1;if(b.ref===null&&(b.ref=$(A)),b.value+=(we-b.value)*ye,!se&&Math.abs(b.value-1)<.001){b.ref!==null&&(b.ref.attribute.setX(b.ref.index,1),b.ref.attribute.needsUpdate=!0),y.delete(A);continue}b.ref!==null&&(b.ref.attribute.setX(b.ref.index,b.value),b.ref.attribute.needsUpdate=!0)}},countFrustum(){let p=0,f=0;if(d.length>0){const g=a.cameraThree;g.updateMatrixWorld(!0),k.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),w.setFromProjectionMatrix(k);for(const S of d){const F=S.geometry;F.boundingSphere||F.computeBoundingSphere();const P=F.boundingSphere;P&&(M.copy(P).applyMatrix4(S.matrixWorld),w.intersectsSphere(M)&&(p+=1))}for(const S of u)f+=S.geometry.getAttribute("position")?.count??0}return{total:d.length,visible:p,verts:f}},pickFromClick({clientX:p,clientY:f,canvas:g}){return yt({kind:"r3f",clientX:p,clientY:f,canvas:g,chunks:z.chunks,chunkDistancesKm:i,chunkOriginalSizes:l,chunkVelocities:m,dtYears:(ce().jd-ue)/le,cameraThree:a.cameraThree,pointsMeshes:u,pickerScratch:C,syncScratch:{forward:_,right:T,up:I}})},dispose(){V(),h.dispose(),z.chunks=[],z.pointsMeshes=[],z.starsInView=[],z.generation+=1}}}var L={star1:G("#fff3a8",1),star2:G("#f5c238",1),star3:G("#e07b1a",1),star4:G("#a8380c",1)};function Y(e){return new W(e[0],e[1],e[2])}function wt(){return{cool:Y(L.star4),warm:Y(L.star3),hot:Y(L.star2),flare:Y(L.star1)}}var bt=`
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
`,Ft=`
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
`;function sa(e){return e==null||Array.isArray(e)||!(e instanceof U)?!1:e.userData.cosmosiveSunPhotosphere===!0}function la(e,t){const a=wt(),r={cool:e?.cool??a.cool,warm:e?.warm??a.warm,hot:e?.hot??a.hot,flare:e?.flare??a.flare},o={uTime:{value:0},uBandStrength:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:r.cool.clone()},uPaletteWarm:{value:r.warm.clone()},uPaletteHot:{value:r.hot.clone()},uPaletteFlare:{value:r.flare.clone()}},n=new U({uniforms:o,vertexShader:bt,fragmentShader:Ft,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return n.userData.cosmosiveSunPhotosphere=!0,n}var Pt=`
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
`,kt=`
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
`;function ee(e){return new W(e[0],e[1],e[2])}function Mt(){return{warm:ee(L.star3),hot:ee(L.star2),flare:ee(L.star1)}}function ua(e){return e==null||Array.isArray(e)||!(e instanceof U)?!1:e.userData.cosmosiveSunCorona===!0}function ca(e){const t=Mt(),a={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},r={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:a.warm.clone()},uPaletteHot:{value:a.hot.clone()},uPaletteFlare:{value:a.flare.clone()}},o=new U({uniforms:r,vertexShader:Pt,fragmentShader:kt,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return o.userData.cosmosiveSunCorona=!0,o}var Ct=[1,1,1],zt=ne("#f5c238");function At(e){return typeof e.c=="string"&&e.c.length>0?ne(`#${e.c}`):zt}function de(e,t){return[H(e[0]*t),H(e[1]*t),H(e[2]*t)]}function _t(e){const t=At(e);return{cool:de(t,.55),warm:de(t,.8),hot:t,flare:Ve(t,Ct,.28)}}var j=new W(1,1,1);function X(e){return new W(e[0],e[1],e[2])}function Tt(e){const t=_t(e);return{cool:X(t.cool),warm:X(t.warm),hot:X(t.hot),flare:X(t.flare)}}function fa(e){const t=Tt(e),a=H(typeof e.warm=="number"?e.warm:.01),r=H(.9-a*1.05);return{cool:t.cool.clone().lerp(j,r*.72),warm:t.warm.clone().lerp(j,r),hot:t.hot.clone().lerp(j,r),flare:t.flare.clone().lerp(j,Math.max(r,.5))}}export{E as C,qt as D,Ut as E,jt as S,Gt as T,Ve as _,la as a,$t as b,na as c,oa as d,ra as f,Zt as g,G as h,ua as i,ea as l,Qt as m,Tt as n,sa as o,ta as p,ca as r,ia as s,fa as t,aa as u,Jt as v,Yt as w,Xt as x,ne as y};
