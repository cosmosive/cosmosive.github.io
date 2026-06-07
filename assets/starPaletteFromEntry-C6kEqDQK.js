import{G as ue,V as ce,Y as ne}from"./src-Da5Hff70.js";import{C as be,J as ke,a as Me,t as Ce}from"./src-BUMvno5p.js";import{t as fe}from"./activeGameplayHost-u52Plwcv.js";import{t as ze}from"./skyLightStore-B4PKtV4I.js";import{r as Ae,t as de}from"./activeOriginScenePos-Cygxww89.js";import{K as Te,Ot as B,_ as H,d as ae,f as _e,gt as Re,ht as U,it as Ie,k as De}from"./three-vendor-Ce7iT1Ri.js";import{$ as Le,Hn as Ee,Ht as We,zt as Ne}from"./index-j90Ef2mO.js";import{t as ge}from"./r3fHostExtras-B4lTT2b6.js";import{t as Ve}from"./combatFrustum-BAFMev2t.js";var ie=new Map;function Kt(e,t){ie.set(e,t)}function Ht(e){ie.delete(e)}function Ut(e,t,r){let o=null;for(const a of ie.values()){const n=a(e,t,r);n!=null&&Number.isFinite(n)&&n>=0&&(o==null||n<o)&&(o=n)}return o}var W={effectiveSpeedKmPerS:0,proximityThrottle:1,nearestBodySurfaceDistSu:null,viewpointScenePosX:0,viewpointScenePosY:0,viewpointScenePosZ:0};function qt(e){e.effectiveSpeedKmPerS!==void 0&&(W.effectiveSpeedKmPerS=e.effectiveSpeedKmPerS),e.proximityThrottle!==void 0&&(W.proximityThrottle=e.proximityThrottle),e.nearestBodySurfaceDistSu!==void 0&&(W.nearestBodySurfaceDistSu=e.nearestBodySurfaceDistSu),e.viewpointScenePosX!==void 0&&(W.viewpointScenePosX=e.viewpointScenePosX),e.viewpointScenePosY!==void 0&&(W.viewpointScenePosY=e.viewpointScenePosY),e.viewpointScenePosZ!==void 0&&(W.viewpointScenePosZ=e.viewpointScenePosZ)}function Gt(e,t){return e.getWorldPosition(t),t}function Yt(e){if(typeof e!="string"||!/^#?[0-9a-fA-F]{6}$/.test(e))return[0,0,0];const t=e.replace(/^#/,""),r=parseInt(t,16);return Number.isFinite(r)?[Math.floor(r/65536)%256,Math.floor(r/256)%256,r%256]:[0,0,0]}function X(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function jt(e){return Math.max(0,Math.min(255,Math.round(e)))}function T(e,t,r){return[e[0]+(t[0]-e[0])*r,e[1]+(t[1]-e[1])*r,e[2]+(t[2]-e[2])*r]}function G(e,t=1,r=1){const[o,a,n]=X(e),c=Math.max(.15,Math.min(1,t));return[o*c,a*c,n*c,r]}var Be=1,Oe=-25,Ke=500,He=.01;function oe(e,t){let r=t;for(;e[r]!==r;)r=e[r];let o=t;for(;o!==r;){const a=e[o];e[o]=r,o=a}return r}function Ue(e,t,r){const o=oe(e,t),a=oe(e,r);o!==a&&(e[o]=a)}function me(e,t,r){return`${e},${t},${r}`}function Xt(e,t){const r=e.length,o=Array.from({length:r},(i,u)=>u),a=t,n=new Map;for(let i=0;i<r;i+=1){const u=e[i],h=me(Math.floor(u.x/a),Math.floor(u.y/a),Math.floor(u.z/a));n.has(h)||n.set(h,[]),n.get(h).push(i)}const c=t*t;for(let i=0;i<r;i+=1){const u=e[i],h=Math.floor(u.x/a),v=Math.floor(u.y/a),p=Math.floor(u.z/a);for(let x=-1;x<=1;x+=1)for(let d=-1;d<=1;d+=1)for(let y=-1;y<=1;y+=1){const k=me(h+x,v+d,p+y),w=n.get(k);if(w)for(const P of w){if(P<=i)continue;const z=e[P],C=z.x-u.x,R=z.y-u.y,I=z.z-u.z;C*C+R*R+I*I<c&&Ue(o,i,P)}}}const s=new Map;for(let i=0;i<r;i+=1){const u=oe(o,i);s.has(u)||s.set(u,[]),s.get(u).push(i)}const l=[];for(let i=0;i<r;i+=1)l.push(void 0);for(const i of s.values())i.length<=1||(i.sort((u,h)=>u-h),i.forEach((u,h)=>{h>0&&(l[u]={x:0,y:h*Oe})}));return l}function qe(){const e=[];for(let t=0;t<Ke;t+=1){const r=be(t*.7%360,t*.3%180-90);r!=null&&e.push(r)}return e}function Ge(){const e=qe(),t=e.length,r=Ce,o=new Float32Array(t*3);return e.forEach((a,n)=>{o[n*3]=a.x*r,o[n*3+1]=a.y*r,o[n*3+2]=a.z*r}),{abbr:"_bootstrap",positions:o,sizes:new Float32Array(t).fill(Be),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(He),brightness:new Float32Array(t).fill(1),mag:new Float32Array(t).fill(-1/0),starsInChunk:[]}}var Ye={raMin:0,raMax:360,decMin:-90,decMax:90},$t={chunks:[],namedStarsInView:[]};function Jt(e,t){return e===0&&t!=="success"}function Se(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[Ge()]:[]}function Zt(e,t){const r=Se(e,t),o=r.slice(0,3).map(a=>a.abbr).join(",");return r.length===0?{syntheticKind:"empty",chunkAbbrevSample:o}:r.length===1&&r[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:o}:r.some(a=>a.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:o}:{syntheticKind:"real",chunkAbbrevSample:o}}function he(e,t){return t.current===e.current}function Qt(e,t,r,o,a){e.onerror=n=>{he(t,r)||(o("error"),a(n.message??"Starfield worker failed"))},e.onmessageerror=()=>{he(t,r)||(o("error"),a("Starfield worker message error"))}}function pe(e){const t=e.indexOf("__part");return t===-1?e:e.slice(0,t)}function V(e,t){const r=new Float32Array(e.length+t.length);return r.set(e,0),r.set(t,e.length),r}function je(e,t){return{abbr:e.abbr,positions:V(e.positions,t.positions),sizes:V(e.sizes,t.sizes),colors:V(e.colors,t.colors),warm:V(e.warm,t.warm),brightness:V(e.brightness,t.brightness),mag:V(e.mag,t.mag),starsInChunk:[...e.starsInChunk,...t.starsInChunk]}}function Xe(e,t){const r=new Map;e.chunks.forEach((a,n)=>r.set(pe(a.abbr),n));const o=[...e.chunks];for(const a of t.chunks){const n=pe(a.abbr),c=r.get(n);if(c!=null){const s=o[c];s&&(o[c]=je(s,a))}else r.set(n,o.length),o.push(a)}return{chunks:o,namedStarsInView:[...e.namedStarsInView,...t.namedStarsInView]}}function $e(e,t,r,o,a,n,c,s="replace"){const{runId:l,...i}=e;l===t.current&&(r.current=l,s==="append"?(o.current=[...o.current,...i.starsInView],a(u=>Xe(u,{chunks:i.chunks,namedStarsInView:i.namedStarsInView}))):(o.current=i.starsInView,a({chunks:i.chunks,namedStarsInView:i.namedStarsInView})),n("ready"),c(null))}function er(e,t,r,o,a,n={}){const c=n.mode??"replace";e.processStarfield({runId:t,catalog:r,maxDistanceLevel:o,bounds:Ye,raInHours:!1,maxPerChunk:n.maxPerChunk}).then(s=>{$e(s,a.runIdRef,a.lastSuccessfulRunIdRef,a.starsInViewRef,a.setStarData,a.setStarfieldStatus,a.setErrorMessage,c),n.onComplete?.()}).catch(s=>{t===a.runIdRef.current&&(a.setStarfieldStatus("error"),a.setErrorMessage(s instanceof Error?s.message:"Starfield worker failed"))})}function Je(e,t){t.length=0;for(const r of e){const o=new Float32Array(r.starsInChunk.length);for(let a=0;a<r.starsInChunk.length;a+=1){const n=r.starsInChunk[a];o[a]=n?We(n)*ne:0}t.push(o)}}function Ze(e,t,r){const o=Se(e(),t());return Je(o,r),o}var Qe=500*ne;function et(e,t,r,o){const a=Math.sqrt(e*e+t*t+r*r);if(a<=0||!Number.isFinite(a)){o.x=0,o.y=0,o.z=0;return}const n=Me(a)*ne/a;o.x=e*n,o.y=t*n,o.z=r*n}function tt(e,t,r,o,a,n,c,s){const l=Math.sqrt(e*e+t*t+r*r);if(l<=0||!Number.isFinite(l)||!Number.isFinite(o)){const p=-a,x=-n,d=-c;return p*p+x*x+d*d<=s}const i=o/l,u=e*i-a,h=t*i-n,v=r*i-c;return u*u+h*h+v*v<=s}function rt(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},viewpointHelioKm:{x:0,y:0,z:0}}}function at(e){const t=Math.tan(e.frustum.fovYRadians*.5);return et(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.viewpointHelioKm),{tanHalfV:t,maxDistSqKm:Qe**2}}var ot=256,nt=320,it=`
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
      gl_PointSize = clamp(psfSizePx * flareScale, 0.0, uPointSizeMax);
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
`;function lt(e){return new U({uniforms:{uPointSizeMax:{value:e?.pointSizeMax??ot},uTime:{value:0},uDtYears:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uPointSizeFloor:{value:e?.pointSizeFloor??1},uMagLimit:{value:6.5},uMagFadeRange:{value:2.5},uMagRef:{value:0},uFluxClampMax:{value:4},uFluxGamma:{value:.6},uPsfMaxMult:{value:5},uFaintSizeFade:{value:.5},uFlareSatLo:{value:.42},uFlareSatHi:{value:.66},uFlareMaxScale:{value:5},uFlareSpikeAmt:{value:.5},uPaletteHot:{value:new H(1,.78,.56)},uPaletteFlare:{value:new H(1,.92,.75)},uStreakAmt:{value:0},uCoreSizeRatio:{value:e?.coreSizeRatio??1}},vertexShader:it,fragmentShader:st,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function ut(){return lt({sizeMultiplier:1.6,pointSizeMax:nt,pointSizeFloor:1,twinkleAmp:.03,twinkleFreq:.9,coreSizeRatio:1.6})}function ct(e){const{layers:t}=ge(e);return{createChunk(r){const o=t[r.layer],a=new _e;for(const l of r.attributes)a.setAttribute(l.name,new ae(l.data,l.components));a.computeBoundingSphere();const n=r.material,c=new Ie(a,n);c.frustumCulled=!0,c.raycast=()=>{},o.add(c);const s=new Map(r.attributes.map(l=>[l.name,l.components]));return{meshRef:c,updateAttribute(l,i){const u=s.get(l);u!=null&&a.setAttribute(l,new ae(i,u))},setVertexCount(l){a.computeBoundingSphere()},dispose(){o.remove(c),a.dispose()}}}}}function ft(e){return ct(e)}function xe(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function mt(e,t){let r=null,o=null;for(let a=0;a<e.length;a+=1){const n=e[a],c=t(n,a);c&&xe(c,r)&&(r=c,o=n.starsInChunk[c.index]??null)}return o}function ht(e){const t=e.proper??(e.hip!=null?`HIP ${e.hip}`:`Star ${e.id}`);return Ee.select(ke("hyg",e.id),t,"star"),!0}function pt(e){if(e.chunks.length===0)return!1;const t=e.prepared;if(t==null)return!1;const r=mt(e.chunks,(o,a)=>e.pickInChunk(o,a,t));return r?ht(r):!1}function vt(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function dt(){return 1}function gt(){return 8}var Z={px:0,py:0};function St(e){const{positions:t,velocities:r,dtYears:o,sizes:a,distancesKm:n,starCount:c,camFrustum:s,tanHalfV:l,viewpointHelioKm:i,maxDistSqKm:u,mouseX:h,mouseY:v,projectStarToScreenPx:p}=e,x=o??0,d=Math.min(c,t.length/3,a.length,n.length);let y=null;for(let k=0;k<d;k+=1){const w=k*3,P=t[w]+(r?r[w]*x:0),z=t[w+1]+(r?r[w+1]*x:0),C=t[w+2]+(r?r[w+2]*x:0);if(!tt(P,z,C,n[k]??0,i.x,i.y,i.z,u))continue;const R=P-s.position.x,I=z-s.position.y,O=C-s.position.z,N=R*s.forward.x+I*s.forward.y+O*s.forward.z;if(N<=1e-6)continue;const q=R*s.right.x+I*s.right.y+O*s.right.z,$=R*s.up.x+I*s.up.y+O*s.up.z,J=l*s.aspect*N;if(Math.abs(q)>J)continue;const m=l*N;if(Math.abs($)>m)continue;const f=N,g=dt(),S=gt();if(S<=0)continue;p(P,z,C,Z);const F=Z.px-h,b=Z.py-v,L=F*F+b*b;if(L>S*S)continue;const E={index:k,distSqPx:L,depthCam:f,renderedPx:g};xe(E,y)&&(y=E)}return y}var Q=new B,ee=new B;function xt(e,t,r,o,a,n,c,s,l,i,u,h,v,p,x){const d=r.getBoundingClientRect();return St({positions:n,velocities:p,dtYears:x,sizes:c,distancesKm:s,starCount:l,uScale:vt(d.height,o.fov*Math.PI/180),camFrustum:i,tanHalfV:u,viewpointHelioKm:h,maxDistSqKm:v,mouseX:e-d.left,mouseY:t-d.top,projectStarToScreenPx:(y,k,w,P)=>{Q.set(y,k,w),Q.applyMatrix4(a.matrixWorld),ee.copy(Q).project(o),P.px=(ee.x*.5+.5)*d.width,P.py=(-ee.y*.5+.5)*d.height}})}function yt(e){const{cameraThree:t,pickerScratch:r,syncScratch:o}=e;Ve(t,r.frustum,o.forward,o.right,o.up);const a=de();a&&(r.frustum.position.x+=a.x,r.frustum.position.y+=a.y,r.frustum.position.z+=a.z);const{tanHalfV:n,maxDistSqKm:c}=at(r);return pt({chunks:e.chunks,prepared:{tanHalfV:n,maxDistSqKm:c},pickInChunk:(s,l,i)=>{const u=e.pointsMeshes[l],h=e.chunkDistancesKm[l],v=e.chunkOriginalSizes[l];return!u||!h||!v?null:xt(e.clientX,e.clientY,e.canvas,t,u,s.positions,v,h,s.starsInChunk.length,r.frustum,i.tanHalfV,r.viewpointHelioKm,i.maxDistSqKm,e.chunkVelocities[l]??null,e.dtYears)}})}function wt(e){return yt(e)}var _={chunks:[],pointsMeshes:[],starsInView:[]};function tr(){return _}function rr(e,t){const r=ge(e),{starsInViewRef:o,getStarData:a,getStatus:n}=t,c=ft(e),s=[],l=[],i=[],u=[],h=[],v=[],p=ut();let x=0,d=0;const y=new Map,k=new Te,w=new De,P=new Re,z=rt(),C=new B;function R(){const m=de();m?C.set(-m.x,-m.y,-m.z):C.set(0,0,0);for(const f of l)f.position.equals(C)||f.position.copy(C)}const I=new B,O=new B,N=new B;function q(){for(const m of s)m.dispose();s.length=0,l.length=0,i.length=0,u.length=0,h.length=0,v.length=0;for(const m of y.values())m.ref=null}function $(m){_.chunks=m,_.pointsMeshes=l,_.starsInView=o.current}function J(m){const f=_;for(let g=0;g<f.chunks.length;g+=1){const S=f.chunks[g],F=f.pointsMeshes[g];if(!(!S||!F))for(let b=0;b<S.starsInChunk.length;b+=1){const L=S.starsInChunk[b];if(!L||L.proper!==m)continue;const E=F.geometry.getAttribute("ignite");return E instanceof ae?{attribute:E,index:b}:null}}return null}return{refresh(){q();const m=Ze(a,n,i);for(const f of m){u.push(new Float32Array(f.sizes));const g=Ne(f);h.push(g);const S=c.createChunk({layer:"starfield",meshName:`cosmosive-starfield-points-${f.abbr.replace(/[^a-zA-Z0-9_-]/g,"_")}`,material:p,attributes:[{name:"position",data:f.positions,components:3},{name:"size",data:f.sizes,components:1},{name:"color",data:f.colors,components:3},{name:"warm",data:f.warm,components:1},{name:"brightness",data:f.brightness,components:1},{name:"mag",data:f.mag,components:1},{name:"ignite",data:new Float32Array(f.sizes.length).fill(1),components:1},{name:"velocity",data:g,components:3}]});s.push(S);const F=S.meshRef;l.push(F)}v.length=0;for(const f of l)v.push(f);$(m)},advanceTime(m){x+=m,R(),p.uniforms.uTime&&(p.uniforms.uTime.value=x);const f=(fe().jd-ue)/ce;p.uniforms.uDtYears&&(p.uniforms.uDtYears.value=f);const g=4.5,S=7.5,F=.8,b=W.effectiveSpeedKmPerS,L=F*Math.max(0,Math.min(1,((b>1?Math.log10(b):0)-g)/(S-g))),E=1-Math.exp(-m/.35);d+=(L-d)*E;const ye=Math.max(d,Le()*F);p.uniforms.uStreakAmt&&(p.uniforms.uStreakAmt.value=ye);const se=ze(),we=1-Math.exp(-m/.7);if(p.uniforms.uMagLimit){const D=p.uniforms.uMagLimit.value;p.uniforms.uMagLimit.value=D+(se.magLimit-D)*we}const Fe=1-Math.exp(-m/.5),le=se.ignitedStarProperNames;for(const D of le)y.has(D)||y.set(D,{value:1,ref:null});for(const[D,A]of y){const Pe=le.includes(D)?6:1;A.ref===null&&(A.ref=J(D)),A.value+=(Pe-A.value)*Fe,A.ref!==null&&(A.ref.attribute.setX(A.ref.index,A.value),A.ref.attribute.needsUpdate=!0)}},countFrustum(){let m=0,f=0;if(v.length>0){const g=r.cameraThree;g.updateMatrixWorld(!0),k.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),w.setFromProjectionMatrix(k);for(const S of v){const F=S.geometry;F.boundingSphere||F.computeBoundingSphere();const b=F.boundingSphere;b&&(P.copy(b).applyMatrix4(S.matrixWorld),w.intersectsSphere(P)&&(m+=1))}for(const S of l)f+=S.geometry.getAttribute("position")?.count??0}return{total:v.length,visible:m,verts:f}},pickFromClick({clientX:m,clientY:f,canvas:g}){return wt({kind:"r3f",clientX:m,clientY:f,canvas:g,chunks:_.chunks,chunkDistancesKm:i,chunkOriginalSizes:u,chunkVelocities:h,dtYears:(fe().jd-ue)/ce,cameraThree:r.cameraThree,pointsMeshes:l,pickerScratch:z,syncScratch:{forward:I,right:O,up:N}})},dispose(){q(),p.dispose(),_.chunks=[],_.pointsMeshes=[],_.starsInView=[]}}}var M={star1:G("#fff3a8",1),star2:G("#f5c238",1),star3:G("#e07b1a",1),star4:G("#a8380c",1)};function Y(e){return new H(e[0],e[1],e[2])}function Ft(){return{cool:Y(M.star4),warm:Y(M.star3),hot:Y(M.star2),flare:Y(M.star1)}}var Pt=`
varying vec3 vWorldPos;
varying vec3 vLocalPos;
varying vec3 vNormalDir;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vLocalPos = position;
  vNormalDir = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,bt=`
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
varying vec3 vWorldPos;
varying vec3 vLocalPos;
varying vec3 vNormalDir;

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
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  float ndv = max(dot(normalize(vNormalDir), viewDir), 0.0);
  float limb = pow(ndv, 0.6);
  // Band mode outputs target luma directly so the overlay grade maps each stripe
  // onto an exact ramp stop; skip the emissive/limb scaling that would clamp them.
  float litScale = mix(0.55, uLimbStrength, limb) * uEmissiveBoost;
  col *= mix(litScale, 1.0, uBandStrength);
  gl_FragColor = vec4(col, uOpacity);
}
`;function ar(e){return e==null||Array.isArray(e)||!(e instanceof U)?!1:e.userData.cosmosiveSunPhotosphere===!0}function or(e,t){const r=Ft(),o={cool:e?.cool??r.cool,warm:e?.warm??r.warm,hot:e?.hot??r.hot,flare:e?.flare??r.flare},a={uTime:{value:0},uBandStrength:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:o.cool.clone()},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},n=new U({uniforms:a,vertexShader:Pt,fragmentShader:bt,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return n.userData.cosmosiveSunPhotosphere=!0,n}var kt=`
varying vec3 vWorldPos;
varying vec3 vLocalPos;
varying vec3 vNormalDir;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vLocalPos = position;
  vNormalDir = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,Mt=`
uniform float uTime;
uniform float uIntensity;
uniform vec3 uPaletteWarm;
uniform vec3 uPaletteHot;
uniform vec3 uPaletteFlare;
varying vec3 vWorldPos;
varying vec3 vLocalPos;
varying vec3 vNormalDir;

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
  vec3 fragToCam = normalize(cameraPosition - vWorldPos);
  float cosA = clamp(dot(normalize(vNormalDir), fragToCam), -1.0, 1.0);
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
`;function te(e){return new H(e[0],e[1],e[2])}function Ct(){return{warm:te(M.star3),hot:te(M.star2),flare:te(M.star1)}}function nr(e){return e==null||Array.isArray(e)||!(e instanceof U)?!1:e.userData.cosmosiveSunCorona===!0}function ir(e){const t=Ct(),r={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},o={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:r.warm.clone()},uPaletteHot:{value:r.hot.clone()},uPaletteFlare:{value:r.flare.clone()}},a=new U({uniforms:o,vertexShader:kt,fragmentShader:Mt,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return a.userData.cosmosiveSunCorona=!0,a}var re=X("#d6ebff"),ve=X("#f5c238"),zt=.01;function K(e){return[e[0],e[1],e[2]]}function At(){return{cool:K(M.star4),warm:K(M.star3),hot:K(M.star2),flare:K(M.star1)}}function Tt(e){return typeof e.c=="string"&&e.c.length>0?X(`#${e.c}`):K(M.star2)}function _t(e){return typeof e.warm=="number"&&Number.isFinite(e.warm)?Ae(e.warm):zt}function Rt(e){const t=At(),r=Tt(e),o=_t(e),a=1-o;return{cool:T(T(t.cool,re,a*.7),r,.2),warm:T(T(t.warm,r,.45),ve,o*.6),hot:T(T(t.hot,r,.75),re,a*.35),flare:T(T(T(t.flare,r,.35),ve,o*.45),re,a*.2)}}function j(e){return new H(e[0],e[1],e[2])}function sr(e){const t=Rt(e);return{cool:j(t.cool),warm:j(t.warm),hot:j(t.hot),flare:j(t.flare)}}export{Kt as C,Ut as S,Yt as _,ar as a,W as b,$t as c,Qt as d,Jt as f,T as g,jt as h,or as i,Zt as l,G as m,ir as n,rr as o,Xt as p,nr as r,tr as s,sr as t,er as u,X as v,Ht as w,qt as x,Gt as y};
