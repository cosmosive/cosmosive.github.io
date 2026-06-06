import{G as ce,V as fe,Y as ie}from"./src-CU7t4spL.js";import{Y as ke,o as Me,t as Ce,w as ze}from"./src--Dj6uCWZ.js";import{t as me}from"./activeGameplayHost-B0AfVpuP.js";import{t as Ae}from"./skyLightStore-BfXJGTVl.js";import{r as Te,t as ge}from"./activeOriginScenePos-DI3XOiL2.js";import{Dt as B,G as _e,_ as H,d as oe,f as Re,ht as Ie,k as De,mt as U,rt as Le}from"./three-vendor-DtGC8FGl.js";import{Gn as Ee,Kt as We,it as Ne}from"./index-n1EAFJ_Z.js";import{t as Se}from"./r3fHostExtras-LkYRkCt0.js";import{t as Ve}from"./combatFrustum-BN9fbl_3.js";var se=new Map;function Ut(e,t){se.set(e,t)}function qt(e){se.delete(e)}function Gt(e,t,r){let o=null;for(const a of se.values()){const n=a(e,t,r);n!=null&&Number.isFinite(n)&&n>=0&&(o==null||n<o)&&(o=n)}return o}var W={effectiveSpeedKmPerS:0,proximityThrottle:1,nearestBodySurfaceDistSu:null,viewpointScenePosX:0,viewpointScenePosY:0,viewpointScenePosZ:0};function Yt(e){e.effectiveSpeedKmPerS!==void 0&&(W.effectiveSpeedKmPerS=e.effectiveSpeedKmPerS),e.proximityThrottle!==void 0&&(W.proximityThrottle=e.proximityThrottle),e.nearestBodySurfaceDistSu!==void 0&&(W.nearestBodySurfaceDistSu=e.nearestBodySurfaceDistSu),e.viewpointScenePosX!==void 0&&(W.viewpointScenePosX=e.viewpointScenePosX),e.viewpointScenePosY!==void 0&&(W.viewpointScenePosY=e.viewpointScenePosY),e.viewpointScenePosZ!==void 0&&(W.viewpointScenePosZ=e.viewpointScenePosZ)}function jt(e,t){return e.getWorldPosition(t),t}function Xt(e){if(typeof e!="string"||!/^#?[0-9a-fA-F]{6}$/.test(e))return[0,0,0];const t=e.replace(/^#/,""),r=parseInt(t,16);return Number.isFinite(r)?[Math.floor(r/65536)%256,Math.floor(r/256)%256,r%256]:[0,0,0]}function $(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function $t(e){return Math.max(0,Math.min(255,Math.round(e)))}function T(e,t,r){return[e[0]+(t[0]-e[0])*r,e[1]+(t[1]-e[1])*r,e[2]+(t[2]-e[2])*r]}function G(e,t=1,r=1){const[o,a,n]=$(e),c=Math.max(.15,Math.min(1,t));return[o*c,a*c,n*c,r]}function Be(e,t,r,o,a){a.x=0,a.y=0,a.z=0;const{x:n,y:c,z:s,vx:l,vy:i,vz:u}=e;if(n==null||c==null||s==null||l==null||i==null||u==null)return a;const f=Math.hypot(n,c,s);if(f<=0)return a;const v=Math.hypot(t,r,o);if(v<=0)return a;const p=n/f,g=c/f,d=s/f,S=l*p+i*g+u*d,w=v/f;return a.x=(l-S*p)*w,a.y=(i-S*g)*w,a.z=(u-S*d)*w,a}var Y={x:0,y:0,z:0};function Oe(e){const t=e.starsInChunk,r=e.positions,o=Math.floor(r.length/3),a=new Float32Array(r.length);for(let n=0;n<o;n+=1){const c=t[n];c&&(Be(c,r[n*3],r[n*3+1],r[n*3+2],Y),a[n*3]=Y.x,a[n*3+1]=Y.y,a[n*3+2]=Y.z)}return a}var Ke=1,He=-25,Ue=500,qe=.01;function ne(e,t){let r=t;for(;e[r]!==r;)r=e[r];let o=t;for(;o!==r;){const a=e[o];e[o]=r,o=a}return r}function Ge(e,t,r){const o=ne(e,t),a=ne(e,r);o!==a&&(e[o]=a)}function he(e,t,r){return`${e},${t},${r}`}function Jt(e,t){const r=e.length,o=Array.from({length:r},(i,u)=>u),a=t,n=new Map;for(let i=0;i<r;i+=1){const u=e[i],f=he(Math.floor(u.x/a),Math.floor(u.y/a),Math.floor(u.z/a));n.has(f)||n.set(f,[]),n.get(f).push(i)}const c=t*t;for(let i=0;i<r;i+=1){const u=e[i],f=Math.floor(u.x/a),v=Math.floor(u.y/a),p=Math.floor(u.z/a);for(let g=-1;g<=1;g+=1)for(let d=-1;d<=1;d+=1)for(let S=-1;S<=1;S+=1){const w=he(f+g,v+d,p+S),F=n.get(w);if(F)for(const b of F){if(b<=i)continue;const z=e[b],C=z.x-u.x,R=z.y-u.y,I=z.z-u.z;C*C+R*R+I*I<c&&Ge(o,i,b)}}}const s=new Map;for(let i=0;i<r;i+=1){const u=ne(o,i);s.has(u)||s.set(u,[]),s.get(u).push(i)}const l=[];for(let i=0;i<r;i+=1)l.push(void 0);for(const i of s.values())i.length<=1||(i.sort((u,f)=>u-f),i.forEach((u,f)=>{f>0&&(l[u]={x:0,y:f*He})}));return l}function Ye(){const e=[];for(let t=0;t<Ue;t+=1){const r=ze(t*.7%360,t*.3%180-90);r!=null&&e.push(r)}return e}function je(){const e=Ye(),t=e.length,r=Ce,o=new Float32Array(t*3);return e.forEach((a,n)=>{o[n*3]=a.x*r,o[n*3+1]=a.y*r,o[n*3+2]=a.z*r}),{abbr:"_bootstrap",positions:o,sizes:new Float32Array(t).fill(Ke),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(qe),brightness:new Float32Array(t).fill(1),mag:new Float32Array(t).fill(-1/0),starsInChunk:[]}}var Xe={raMin:0,raMax:360,decMin:-90,decMax:90},Zt={chunks:[],namedStarsInView:[]};function Qt(e,t){return e===0&&t!=="success"}function xe(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[je()]:[]}function er(e,t){const r=xe(e,t),o=r.slice(0,3).map(a=>a.abbr).join(",");return r.length===0?{syntheticKind:"empty",chunkAbbrevSample:o}:r.length===1&&r[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:o}:r.some(a=>a.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:o}:{syntheticKind:"real",chunkAbbrevSample:o}}function pe(e,t){return t.current===e.current}function tr(e,t,r,o,a){e.onerror=n=>{pe(t,r)||(o("error"),a(n.message??"Starfield worker failed"))},e.onmessageerror=()=>{pe(t,r)||(o("error"),a("Starfield worker message error"))}}function ve(e){const t=e.indexOf("__part");return t===-1?e:e.slice(0,t)}function V(e,t){const r=new Float32Array(e.length+t.length);return r.set(e,0),r.set(t,e.length),r}function $e(e,t){return{abbr:e.abbr,positions:V(e.positions,t.positions),sizes:V(e.sizes,t.sizes),colors:V(e.colors,t.colors),warm:V(e.warm,t.warm),brightness:V(e.brightness,t.brightness),mag:V(e.mag,t.mag),starsInChunk:[...e.starsInChunk,...t.starsInChunk]}}function Je(e,t){const r=new Map;e.chunks.forEach((a,n)=>r.set(ve(a.abbr),n));const o=[...e.chunks];for(const a of t.chunks){const n=ve(a.abbr),c=r.get(n);if(c!=null){const s=o[c];s&&(o[c]=$e(s,a))}else r.set(n,o.length),o.push(a)}return{chunks:o,namedStarsInView:[...e.namedStarsInView,...t.namedStarsInView]}}function Ze(e,t,r,o,a,n,c,s="replace"){const{runId:l,...i}=e;l===t.current&&(r.current=l,s==="append"?(o.current=[...o.current,...i.starsInView],a(u=>Je(u,{chunks:i.chunks,namedStarsInView:i.namedStarsInView}))):(o.current=i.starsInView,a({chunks:i.chunks,namedStarsInView:i.namedStarsInView})),n("ready"),c(null))}function rr(e,t,r,o,a,n={}){const c=n.mode??"replace";e.processStarfield({runId:t,catalog:r,maxDistanceLevel:o,bounds:Xe,raInHours:!1,maxPerChunk:n.maxPerChunk}).then(s=>{Ze(s,a.runIdRef,a.lastSuccessfulRunIdRef,a.starsInViewRef,a.setStarData,a.setStarfieldStatus,a.setErrorMessage,c),n.onComplete?.()}).catch(s=>{t===a.runIdRef.current&&(a.setStarfieldStatus("error"),a.setErrorMessage(s instanceof Error?s.message:"Starfield worker failed"))})}function Qe(e,t){t.length=0;for(const r of e){const o=new Float32Array(r.starsInChunk.length);for(let a=0;a<r.starsInChunk.length;a+=1){const n=r.starsInChunk[a];o[a]=n?We(n)*ie:0}t.push(o)}}function et(e,t,r){const o=xe(e(),t());return Qe(o,r),o}var tt=500*ie;function rt(e,t,r,o){const a=Math.sqrt(e*e+t*t+r*r);if(a<=0||!Number.isFinite(a)){o.x=0,o.y=0,o.z=0;return}const n=Me(a)*ie/a;o.x=e*n,o.y=t*n,o.z=r*n}function at(e,t,r,o,a,n,c,s){const l=Math.sqrt(e*e+t*t+r*r);if(l<=0||!Number.isFinite(l)||!Number.isFinite(o)){const p=-a,g=-n,d=-c;return p*p+g*g+d*d<=s}const i=o/l,u=e*i-a,f=t*i-n,v=r*i-c;return u*u+f*f+v*v<=s}function ot(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},viewpointHelioKm:{x:0,y:0,z:0}}}function nt(e){const t=Math.tan(e.frustum.fovYRadians*.5);return rt(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.viewpointHelioKm),{tanHalfV:t,maxDistSqKm:tt**2}}var it=256,st=320,lt=`
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
`,ut=`
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
`;function ct(e){return new U({uniforms:{uPointSizeMax:{value:e?.pointSizeMax??it},uTime:{value:0},uDtYears:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uPointSizeFloor:{value:e?.pointSizeFloor??1},uMagLimit:{value:6.5},uMagFadeRange:{value:2.5},uMagRef:{value:0},uFluxClampMax:{value:4},uFluxGamma:{value:.6},uPsfMaxMult:{value:5},uFaintSizeFade:{value:.5},uFlareSatLo:{value:.42},uFlareSatHi:{value:.66},uFlareMaxScale:{value:5},uFlareSpikeAmt:{value:.5},uPaletteHot:{value:new H(1,.78,.56)},uPaletteFlare:{value:new H(1,.92,.75)},uStreakAmt:{value:0},uCoreSizeRatio:{value:e?.coreSizeRatio??1}},vertexShader:lt,fragmentShader:ut,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function ft(){return ct({sizeMultiplier:1.6,pointSizeMax:st,pointSizeFloor:1,twinkleAmp:.03,twinkleFreq:.9,coreSizeRatio:1.6})}function mt(e){const{layers:t}=Se(e);return{createChunk(r){const o=t[r.layer],a=new Re;for(const l of r.attributes)a.setAttribute(l.name,new oe(l.data,l.components));a.computeBoundingSphere();const n=r.material,c=new Le(a,n);c.frustumCulled=!0,c.raycast=()=>{},o.add(c);const s=new Map(r.attributes.map(l=>[l.name,l.components]));return{meshRef:c,updateAttribute(l,i){const u=s.get(l);u!=null&&a.setAttribute(l,new oe(i,u))},setVertexCount(l){a.computeBoundingSphere()},dispose(){o.remove(c),a.dispose()}}}}}function ht(e){return mt(e)}function ye(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function pt(e,t){let r=null,o=null;for(let a=0;a<e.length;a+=1){const n=e[a],c=t(n,a);c&&ye(c,r)&&(r=c,o=n.starsInChunk[c.index]??null)}return o}function vt(e){const t=e.proper??(e.hip!=null?`HIP ${e.hip}`:`Star ${e.id}`);return Ee.select(ke("hyg",e.id),t,"star"),!0}function dt(e){if(e.chunks.length===0)return!1;const t=e.prepared;if(t==null)return!1;const r=pt(e.chunks,(o,a)=>e.pickInChunk(o,a,t));return r?vt(r):!1}function gt(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function St(){return 1}function xt(){return 8}var Q={px:0,py:0};function yt(e){const{positions:t,velocities:r,dtYears:o,sizes:a,distancesKm:n,starCount:c,camFrustum:s,tanHalfV:l,viewpointHelioKm:i,maxDistSqKm:u,mouseX:f,mouseY:v,projectStarToScreenPx:p}=e,g=o??0,d=Math.min(c,t.length/3,a.length,n.length);let S=null;for(let w=0;w<d;w+=1){const F=w*3,b=t[F]+(r?r[F]*g:0),z=t[F+1]+(r?r[F+1]*g:0),C=t[F+2]+(r?r[F+2]*g:0);if(!at(b,z,C,n[w]??0,i.x,i.y,i.z,u))continue;const R=b-s.position.x,I=z-s.position.y,O=C-s.position.z,N=R*s.forward.x+I*s.forward.y+O*s.forward.z;if(N<=1e-6)continue;const q=R*s.right.x+I*s.right.y+O*s.right.z,J=R*s.up.x+I*s.up.y+O*s.up.z,Z=l*s.aspect*N;if(Math.abs(q)>Z)continue;const h=l*N;if(Math.abs(J)>h)continue;const m=N,x=St(),y=xt();if(y<=0)continue;p(b,z,C,Q);const P=Q.px-f,k=Q.py-v,L=P*P+k*k;if(L>y*y)continue;const E={index:w,distSqPx:L,depthCam:m,renderedPx:x};ye(E,S)&&(S=E)}return S}var ee=new B,te=new B;function wt(e,t,r,o,a,n,c,s,l,i,u,f,v,p,g){const d=r.getBoundingClientRect();return yt({positions:n,velocities:p,dtYears:g,sizes:c,distancesKm:s,starCount:l,uScale:gt(d.height,o.fov*Math.PI/180),camFrustum:i,tanHalfV:u,viewpointHelioKm:f,maxDistSqKm:v,mouseX:e-d.left,mouseY:t-d.top,projectStarToScreenPx:(S,w,F,b)=>{ee.set(S,w,F),ee.applyMatrix4(a.matrixWorld),te.copy(ee).project(o),b.px=(te.x*.5+.5)*d.width,b.py=(-te.y*.5+.5)*d.height}})}function Ft(e){const{cameraThree:t,pickerScratch:r,syncScratch:o}=e;Ve(t,r.frustum,o.forward,o.right,o.up);const a=ge();a&&(r.frustum.position.x+=a.x,r.frustum.position.y+=a.y,r.frustum.position.z+=a.z);const{tanHalfV:n,maxDistSqKm:c}=nt(r);return dt({chunks:e.chunks,prepared:{tanHalfV:n,maxDistSqKm:c},pickInChunk:(s,l,i)=>{const u=e.pointsMeshes[l],f=e.chunkDistancesKm[l],v=e.chunkOriginalSizes[l];return!u||!f||!v?null:wt(e.clientX,e.clientY,e.canvas,t,u,s.positions,v,f,s.starsInChunk.length,r.frustum,i.tanHalfV,r.viewpointHelioKm,i.maxDistSqKm,e.chunkVelocities[l]??null,e.dtYears)}})}function Pt(e){return Ft(e)}var _={chunks:[],pointsMeshes:[],starsInView:[]};function ar(){return _}function or(e,t){const r=Se(e),{starsInViewRef:o,getStarData:a,getStatus:n}=t,c=ht(e),s=[],l=[],i=[],u=[],f=[],v=[],p=ft();let g=0,d=0;const S=new Map,w=new _e,F=new De,b=new Ie,z=ot(),C=new B;function R(){const h=ge();h?C.set(-h.x,-h.y,-h.z):C.set(0,0,0);for(const m of l)m.position.equals(C)||m.position.copy(C)}const I=new B,O=new B,N=new B;function q(){for(const h of s)h.dispose();s.length=0,l.length=0,i.length=0,u.length=0,f.length=0,v.length=0;for(const h of S.values())h.ref=null}function J(h){_.chunks=h,_.pointsMeshes=l,_.starsInView=o.current}function Z(h){const m=_;for(let x=0;x<m.chunks.length;x+=1){const y=m.chunks[x],P=m.pointsMeshes[x];if(!(!y||!P))for(let k=0;k<y.starsInChunk.length;k+=1){const L=y.starsInChunk[k];if(!L||L.proper!==h)continue;const E=P.geometry.getAttribute("ignite");return E instanceof oe?{attribute:E,index:k}:null}}return null}return{refresh(){q();const h=et(a,n,i);for(const m of h){u.push(new Float32Array(m.sizes));const x=Oe(m);f.push(x);const y=c.createChunk({layer:"starfield",meshName:`cosmosive-starfield-points-${m.abbr.replace(/[^a-zA-Z0-9_-]/g,"_")}`,material:p,attributes:[{name:"position",data:m.positions,components:3},{name:"size",data:m.sizes,components:1},{name:"color",data:m.colors,components:3},{name:"warm",data:m.warm,components:1},{name:"brightness",data:m.brightness,components:1},{name:"mag",data:m.mag,components:1},{name:"ignite",data:new Float32Array(m.sizes.length).fill(1),components:1},{name:"velocity",data:x,components:3}]});s.push(y);const P=y.meshRef;l.push(P)}v.length=0;for(const m of l)v.push(m);J(h)},advanceTime(h){g+=h,R(),p.uniforms.uTime&&(p.uniforms.uTime.value=g);const m=(me().jd-ce)/fe;p.uniforms.uDtYears&&(p.uniforms.uDtYears.value=m);const x=4.5,y=7.5,P=.8,k=W.effectiveSpeedKmPerS,L=P*Math.max(0,Math.min(1,((k>1?Math.log10(k):0)-x)/(y-x))),E=1-Math.exp(-h/.35);d+=(L-d)*E;const we=Math.max(d,Ne()*P);p.uniforms.uStreakAmt&&(p.uniforms.uStreakAmt.value=we);const le=Ae(),Fe=1-Math.exp(-h/.7);if(p.uniforms.uMagLimit){const D=p.uniforms.uMagLimit.value;p.uniforms.uMagLimit.value=D+(le.magLimit-D)*Fe}const Pe=1-Math.exp(-h/.5),ue=le.ignitedStarProperNames;for(const D of ue)S.has(D)||S.set(D,{value:1,ref:null});for(const[D,A]of S){const be=ue.includes(D)?6:1;A.ref===null&&(A.ref=Z(D)),A.value+=(be-A.value)*Pe,A.ref!==null&&(A.ref.attribute.setX(A.ref.index,A.value),A.ref.attribute.needsUpdate=!0)}},countFrustum(){let h=0,m=0;if(v.length>0){const x=r.cameraThree;x.updateMatrixWorld(!0),w.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),F.setFromProjectionMatrix(w);for(const y of v){const P=y.geometry;P.boundingSphere||P.computeBoundingSphere();const k=P.boundingSphere;k&&(b.copy(k).applyMatrix4(y.matrixWorld),F.intersectsSphere(b)&&(h+=1))}for(const y of l)m+=y.geometry.getAttribute("position")?.count??0}return{total:v.length,visible:h,verts:m}},pickFromClick({clientX:h,clientY:m,canvas:x}){return Pt({kind:"r3f",clientX:h,clientY:m,canvas:x,chunks:_.chunks,chunkDistancesKm:i,chunkOriginalSizes:u,chunkVelocities:f,dtYears:(me().jd-ce)/fe,cameraThree:r.cameraThree,pointsMeshes:l,pickerScratch:z,syncScratch:{forward:I,right:O,up:N}})},dispose(){q(),p.dispose(),_.chunks=[],_.pointsMeshes=[],_.starsInView=[]}}}var M={star1:G("#fff3a8",1),star2:G("#f5c238",1),star3:G("#e07b1a",1),star4:G("#a8380c",1)};function j(e){return new H(e[0],e[1],e[2])}function bt(){return{cool:j(M.star4),warm:j(M.star3),hot:j(M.star2),flare:j(M.star1)}}var kt=`
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
`;function nr(e){return e==null||Array.isArray(e)||!(e instanceof U)?!1:e.userData.cosmosiveSunPhotosphere===!0}function ir(e,t){const r=bt(),o={cool:e?.cool??r.cool,warm:e?.warm??r.warm,hot:e?.hot??r.hot,flare:e?.flare??r.flare},a={uTime:{value:0},uBandStrength:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:o.cool.clone()},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},n=new U({uniforms:a,vertexShader:kt,fragmentShader:Mt,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return n.userData.cosmosiveSunPhotosphere=!0,n}var Ct=`
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
`,zt=`
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
`;function re(e){return new H(e[0],e[1],e[2])}function At(){return{warm:re(M.star3),hot:re(M.star2),flare:re(M.star1)}}function sr(e){return e==null||Array.isArray(e)||!(e instanceof U)?!1:e.userData.cosmosiveSunCorona===!0}function lr(e){const t=At(),r={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},o={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:r.warm.clone()},uPaletteHot:{value:r.hot.clone()},uPaletteFlare:{value:r.flare.clone()}},a=new U({uniforms:o,vertexShader:Ct,fragmentShader:zt,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return a.userData.cosmosiveSunCorona=!0,a}var ae=$("#d6ebff"),de=$("#f5c238"),Tt=.01;function K(e){return[e[0],e[1],e[2]]}function _t(){return{cool:K(M.star4),warm:K(M.star3),hot:K(M.star2),flare:K(M.star1)}}function Rt(e){return typeof e.c=="string"&&e.c.length>0?$(`#${e.c}`):K(M.star2)}function It(e){return typeof e.warm=="number"&&Number.isFinite(e.warm)?Te(e.warm):Tt}function Dt(e){const t=_t(),r=Rt(e),o=It(e),a=1-o;return{cool:T(T(t.cool,ae,a*.7),r,.2),warm:T(T(t.warm,r,.45),de,o*.6),hot:T(T(t.hot,r,.75),ae,a*.35),flare:T(T(T(t.flare,r,.35),de,o*.45),ae,a*.2)}}function X(e){return new H(e[0],e[1],e[2])}function ur(e){const t=Dt(e);return{cool:X(t.cool),warm:X(t.warm),hot:X(t.hot),flare:X(t.flare)}}export{Ut as C,Gt as S,Xt as _,nr as a,W as b,Zt as c,tr as d,Qt as f,T as g,$t as h,ir as i,er as l,G as m,lr as n,or as o,Jt as p,sr as r,ar as s,ur as t,rr as u,$ as v,qt as w,Yt as x,jt as y};
