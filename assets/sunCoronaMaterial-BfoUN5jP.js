import{H as oe,K as ae,N as de,X as te}from"./src-DWKVT447.js";import{Y as ge,o as Se,t as xe,w as ye}from"./src-DUX3SHok.js";import{t as ie}from"./activeGameplayHost-CmKCwhLH.js";import{t as Pe}from"./skyLightStore-BfXJGTVl.js";import{Dt as K,G as we,_ as Y,d as Q,f as ke,ht as be,k as Me,mt as O,rt as Ce}from"./three-vendor-DtGC8FGl.js";import{Vn as Fe,dn as ze,it as Ae}from"./index-Bn2aKXpa.js";import{n as Te,r as Re}from"./combatFrustum-D5yrAg96.js";import{t as ce}from"./r3fHostExtras-DitxdilJ.js";var re=new Map;function _t(e,t){re.set(e,t)}function It(e){re.delete(e)}function Dt(e,t,r){let o=null;for(const n of re.values()){const a=n(e,t,r);a!=null&&Number.isFinite(a)&&a>=0&&(o==null||a<o)&&(o=a)}return o}var L={effectiveSpeedKmPerS:0,proximityThrottle:1,nearestBodySurfaceDistSu:null,viewpointScenePosX:0,viewpointScenePosY:0,viewpointScenePosZ:0};function Lt(e){e.effectiveSpeedKmPerS!==void 0&&(L.effectiveSpeedKmPerS=e.effectiveSpeedKmPerS),e.proximityThrottle!==void 0&&(L.proximityThrottle=e.proximityThrottle),e.nearestBodySurfaceDistSu!==void 0&&(L.nearestBodySurfaceDistSu=e.nearestBodySurfaceDistSu),e.viewpointScenePosX!==void 0&&(L.viewpointScenePosX=e.viewpointScenePosX),e.viewpointScenePosY!==void 0&&(L.viewpointScenePosY=e.viewpointScenePosY),e.viewpointScenePosZ!==void 0&&(L.viewpointScenePosZ=e.viewpointScenePosZ)}function _e(e,t,r){return r&&t&&de(e,t.position.x,t.position.y,t.position.z),e}function Et(e,t,r){if(r&&t){const o=e;o.x+=t.position.x,o.y+=t.position.y,o.z+=t.position.z}return e}function Wt(e,t){return e.getWorldPosition(t),_e(t,Re.current,!0),t}function Nt(e){if(typeof e!="string"||!/^#?[0-9a-fA-F]{6}$/.test(e))return[0,0,0];const t=e.replace(/^#/,""),r=parseInt(t,16);return Number.isFinite(r)?[Math.floor(r/65536)%256,Math.floor(r/256)%256,r%256]:[0,0,0]}function Ie(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function Vt(e){return Math.max(0,Math.min(255,Math.round(e)))}function Bt(e,t,r){return[e[0]+(t[0]-e[0])*r,e[1]+(t[1]-e[1])*r,e[2]+(t[2]-e[2])*r]}function U(e,t=1,r=1){const[o,n,a]=Ie(e),l=Math.max(.15,Math.min(1,t));return[o*l,n*l,a*l,r]}function De(e,t,r,o,n){n.x=0,n.y=0,n.z=0;const{x:a,y:l,z:s,vx:c,vy:i,vz:u}=e;if(a==null||l==null||s==null||c==null||i==null||u==null)return n;const f=Math.hypot(a,l,s);if(f<=0)return n;const d=Math.hypot(t,r,o);if(d<=0)return n;const h=a/f,g=l/f,v=s/f,S=c*h+i*g+u*v,y=d/f;return n.x=(c-S*h)*y,n.y=(i-S*g)*y,n.z=(u-S*v)*y,n}var q={x:0,y:0,z:0};function Le(e){const t=e.starsInChunk,r=e.positions,o=Math.floor(r.length/3),n=new Float32Array(r.length);for(let a=0;a<o;a+=1){const l=t[a];l&&(De(l,r[a*3],r[a*3+1],r[a*3+2],q),n[a*3]=q.x,n[a*3+1]=q.y,n[a*3+2]=q.z)}return n}var Ee=1,We=-25,Ne=500,Ve=.01;function ee(e,t){let r=t;for(;e[r]!==r;)r=e[r];let o=t;for(;o!==r;){const n=e[o];e[o]=r,o=n}return r}function Be(e,t,r){const o=ee(e,t),n=ee(e,r);o!==n&&(e[o]=n)}function se(e,t,r){return`${e},${t},${r}`}function Kt(e,t){const r=e.length,o=Array.from({length:r},(i,u)=>u),n=t,a=new Map;for(let i=0;i<r;i+=1){const u=e[i],f=se(Math.floor(u.x/n),Math.floor(u.y/n),Math.floor(u.z/n));a.has(f)||a.set(f,[]),a.get(f).push(i)}const l=t*t;for(let i=0;i<r;i+=1){const u=e[i],f=Math.floor(u.x/n),d=Math.floor(u.y/n),h=Math.floor(u.z/n);for(let g=-1;g<=1;g+=1)for(let v=-1;v<=1;v+=1)for(let S=-1;S<=1;S+=1){const y=se(f+g,d+v,h+S),w=a.get(y);if(w)for(const b of w){if(b<=i)continue;const C=e[b],A=C.x-u.x,T=C.y-u.y,R=C.z-u.z;A*A+T*T+R*R<l&&Be(o,i,b)}}}const s=new Map;for(let i=0;i<r;i+=1){const u=ee(o,i);s.has(u)||s.set(u,[]),s.get(u).push(i)}const c=[];for(let i=0;i<r;i+=1)c.push(void 0);for(const i of s.values())i.length<=1||(i.sort((u,f)=>u-f),i.forEach((u,f)=>{f>0&&(c[u]={x:0,y:f*We})}));return c}function Ke(){const e=[];for(let t=0;t<Ne;t+=1){const r=ye(t*.7%360,t*.3%180-90);r!=null&&e.push(r)}return e}function Oe(){const e=Ke(),t=e.length,r=xe,o=new Float32Array(t*3);return e.forEach((n,a)=>{o[a*3]=n.x*r,o[a*3+1]=n.y*r,o[a*3+2]=n.z*r}),{abbr:"_bootstrap",positions:o,sizes:new Float32Array(t).fill(Ee),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(Ve),brightness:new Float32Array(t).fill(1),mag:new Float32Array(t).fill(-1/0),starsInChunk:[]}}var He={raMin:0,raMax:360,decMin:-90,decMax:90},Ot={chunks:[],namedStarsInView:[]};function Ht(e,t){return e===0&&t!=="success"}function fe(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[Oe()]:[]}function Ut(e,t){const r=fe(e,t),o=r.slice(0,3).map(n=>n.abbr).join(",");return r.length===0?{syntheticKind:"empty",chunkAbbrevSample:o}:r.length===1&&r[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:o}:r.some(n=>n.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:o}:{syntheticKind:"real",chunkAbbrevSample:o}}function le(e,t){return t.current===e.current}function qt(e,t,r,o,n){e.onerror=a=>{le(t,r)||(o("error"),n(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{le(t,r)||(o("error"),n("Starfield worker message error"))}}function ue(e){const t=e.indexOf("__part");return t===-1?e:e.slice(0,t)}function V(e,t){const r=new Float32Array(e.length+t.length);return r.set(e,0),r.set(t,e.length),r}function Ue(e,t){return{abbr:e.abbr,positions:V(e.positions,t.positions),sizes:V(e.sizes,t.sizes),colors:V(e.colors,t.colors),warm:V(e.warm,t.warm),brightness:V(e.brightness,t.brightness),mag:V(e.mag,t.mag),starsInChunk:[...e.starsInChunk,...t.starsInChunk]}}function qe(e,t){const r=new Map;e.chunks.forEach((n,a)=>r.set(ue(n.abbr),a));const o=[...e.chunks];for(const n of t.chunks){const a=ue(n.abbr),l=r.get(a);if(l!=null){const s=o[l];s&&(o[l]=Ue(s,n))}else r.set(a,o.length),o.push(n)}return{chunks:o,namedStarsInView:[...e.namedStarsInView,...t.namedStarsInView]}}function Ge(e,t,r,o,n,a,l,s="replace"){const{runId:c,...i}=e;c===t.current&&(r.current=c,s==="append"?(o.current=[...o.current,...i.starsInView],n(u=>qe(u,{chunks:i.chunks,namedStarsInView:i.namedStarsInView}))):(o.current=i.starsInView,n({chunks:i.chunks,namedStarsInView:i.namedStarsInView})),a("ready"),l(null))}function Gt(e,t,r,o,n,a={}){const l=a.mode??"replace";e.processStarfield({runId:t,catalog:r,maxDistanceLevel:o,bounds:He,raInHours:!1,maxPerChunk:a.maxPerChunk}).then(s=>{Ge(s,n.runIdRef,n.lastSuccessfulRunIdRef,n.starsInViewRef,n.setStarData,n.setStarfieldStatus,n.setErrorMessage,l),a.onComplete?.()}).catch(s=>{t===n.runIdRef.current&&(n.setStarfieldStatus("error"),n.setErrorMessage(s instanceof Error?s.message:"Starfield worker failed"))})}function Ye(e,t){t.length=0;for(const r of e){const o=new Float32Array(r.starsInChunk.length);for(let n=0;n<r.starsInChunk.length;n+=1){const a=r.starsInChunk[n];o[n]=a?ze(a)*te:0}t.push(o)}}function Xe(e,t,r){const o=fe(e(),t());return Ye(o,r),o}var je=500*te;function $e(e,t,r,o){const n=Math.sqrt(e*e+t*t+r*r);if(n<=0||!Number.isFinite(n)){o.x=0,o.y=0,o.z=0;return}const a=Se(n)*te/n;o.x=e*a,o.y=t*a,o.z=r*a}function Je(e,t,r,o,n,a,l,s){const c=Math.sqrt(e*e+t*t+r*r);if(c<=0||!Number.isFinite(c)||!Number.isFinite(o)){const h=-n,g=-a,v=-l;return h*h+g*g+v*v<=s}const i=o/c,u=e*i-n,f=t*i-a,d=r*i-l;return u*u+f*f+d*d<=s}function Ze(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},viewpointHelioKm:{x:0,y:0,z:0}}}function Qe(e){const t=Math.tan(e.frustum.fovYRadians*.5);return $e(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.viewpointHelioKm),{tanHalfV:t,maxDistSqKm:je**2}}var et=256,tt=320,rt=`
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
      gl_PointSize = clamp(psfSizePx, 0.0, uPointSizeMax);
      // ignite multiplies final brightness: 1.0 = normal, >1.0 = blazing.
      vBrightness = toneFlux * magFade * twinkle * (0.85 + 0.3 * brightness) * ignite;
    }
  }
`,nt=`
  varying vec3 vColor;
  varying float vBrightness;
  varying float vWarm;
  varying float vSaturation;
  varying vec2 vScreenDir;
  uniform vec3 uPaletteHot;
  uniform vec3 uPaletteFlare;
  uniform float uStreakAmt;
  uniform float uCoreSizeRatio;

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

  // Anamorphic diffraction spikes (the cinematic glints). Only the brightest stars (high
  // vSaturation) earn visible spikes, so the term early-outs to ~0 for the faint bulk.
  float diffractionSpikes(vec2 uv) {
    float d = clamp(length(uv) * 2.0, 0.0, 1.0);
    float fade = 1.0 - d;
    float horiz = exp(-abs(uv.y) * 90.0);
    float vert = exp(-abs(uv.x) * 90.0);
    return (horiz + vert * 0.6) * fade * fade;
  }

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    if (dot(uv, uv) > 0.25) discard; // outside the halo sprite

    // Premultiplied accumulator (color * alpha); output alpha is 1 so AdditiveBlending writes it as-is.
    vec3 outRgb = vec3(0.0);

    // --- halo glow over the full sprite (matches the former halo pass) ---
    vec2 huv = streakUv(uv);
    float hradial = clamp(length(huv) * 2.0, 0.0, 1.0);
    float outer = smoothstep(1.0, 0.2, hradial);
    float innerCut = smoothstep(0.55, 0.0, hradial);
    float halo = max(0.0, outer - innerCut) * (0.3 + 0.7 * vWarm);
    vec3 haloColor = mix(vColor, uPaletteHot, 0.45 + 0.45 * vWarm);
    haloColor = mix(haloColor, uPaletteFlare, 0.25 + 0.25 * vWarm);
    float haloAlpha = halo * 0.7;
    float spikeGate = vSaturation * vSaturation * vSaturation;
    if (spikeGate > 0.004) {
      float spikes = diffractionSpikes(huv) * spikeGate;
      vec3 spikeColor = mix(haloColor, uPaletteFlare, 0.5);
      vec3 hRgb = haloColor * vBrightness + spikeColor * vBrightness * spikes;
      outRgb += hRgb * (haloAlpha + spikes);
    } else {
      outRgb += (haloColor * vBrightness) * haloAlpha;
    }

    // --- core in the inner 1/uCoreSizeRatio of the sprite (matches the former core pass + size) ---
    vec2 cuv = uv * uCoreSizeRatio;
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

    if (max(outRgb.r, max(outRgb.g, outRgb.b)) < 0.0001) discard;
    gl_FragColor = vec4(outRgb, 1.0);
  }
`;function ot(e){return new O({uniforms:{uPointSizeMax:{value:e?.pointSizeMax??et},uTime:{value:0},uDtYears:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uPointSizeFloor:{value:e?.pointSizeFloor??1},uMagLimit:{value:6.5},uMagFadeRange:{value:1},uMagRef:{value:0},uFluxClampMax:{value:4},uFluxGamma:{value:.45},uPsfMaxMult:{value:3.5},uPaletteHot:{value:new Y(1,.78,.56)},uPaletteFlare:{value:new Y(1,.92,.75)},uStreakAmt:{value:0},uCoreSizeRatio:{value:e?.coreSizeRatio??1}},vertexShader:rt,fragmentShader:nt,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function at(){return ot({sizeMultiplier:1.6,pointSizeMax:tt,pointSizeFloor:1,twinkleAmp:.03,twinkleFreq:.9,coreSizeRatio:1.6})}function it(e){const{layers:t}=ce(e);return{createChunk(r){const o=t[r.layer],n=new ke;for(const c of r.attributes)n.setAttribute(c.name,new Q(c.data,c.components));n.computeBoundingSphere();const a=r.material,l=new Ce(n,a);l.frustumCulled=!0,l.raycast=()=>{},o.add(l);const s=new Map(r.attributes.map(c=>[c.name,c.components]));return{meshRef:l,updateAttribute(c,i){const u=s.get(c);u!=null&&n.setAttribute(c,new Q(i,u))},setVertexCount(c){n.computeBoundingSphere()},dispose(){o.remove(l),n.dispose()}}}}}function st(e){return it(e)}function me(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function lt(e,t){let r=null,o=null;for(let n=0;n<e.length;n+=1){const a=e[n],l=t(a,n);l&&me(l,r)&&(r=l,o=a.starsInChunk[l.index]??null)}return o}function ut(e){const t=e.proper??(e.hip!=null?`HIP ${e.hip}`:`Star ${e.id}`);return Fe.select(ge("hyg",e.id),t,"star"),!0}function ct(e){if(e.chunks.length===0)return!1;const t=e.prepared;if(t==null)return!1;const r=lt(e.chunks,(o,n)=>e.pickInChunk(o,n,t));return r?ut(r):!1}function ft(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function mt(){return 1}function ht(){return 8}var j={px:0,py:0};function pt(e){const{positions:t,velocities:r,dtYears:o,sizes:n,distancesKm:a,starCount:l,camFrustum:s,tanHalfV:c,viewpointHelioKm:i,maxDistSqKm:u,mouseX:f,mouseY:d,projectStarToScreenPx:h}=e,g=o??0,v=Math.min(l,t.length/3,n.length,a.length);let S=null;for(let y=0;y<v;y+=1){const w=y*3,b=t[w]+(r?r[w]*g:0),C=t[w+1]+(r?r[w+1]*g:0),A=t[w+2]+(r?r[w+2]*g:0);if(!Je(b,C,A,a[y]??0,i.x,i.y,i.z,u))continue;const T=b-s.position.x,R=C-s.position.y,W=A-s.position.z,N=T*s.forward.x+R*s.forward.y+W*s.forward.z;if(N<=1e-6)continue;const X=T*s.right.x+R*s.right.y+W*s.right.z,p=T*s.up.x+R*s.up.y+W*s.up.z,m=c*s.aspect*N;if(Math.abs(X)>m)continue;const x=c*N;if(Math.abs(p)>x)continue;const P=N,M=mt(),k=ht();if(k<=0)continue;h(b,C,A,j);const I=j.px-f,D=j.py-d,H=I*I+D*D;if(H>k*k)continue;const B={index:y,distSqPx:H,depthCam:P,renderedPx:M};me(B,S)&&(S=B)}return S}var $=new K,J=new K;function vt(e,t,r,o,n,a,l,s,c,i,u,f,d,h,g){const v=r.getBoundingClientRect();return pt({positions:a,velocities:h,dtYears:g,sizes:l,distancesKm:s,starCount:c,uScale:ft(v.height,o.fov*Math.PI/180),camFrustum:i,tanHalfV:u,viewpointHelioKm:f,maxDistSqKm:d,mouseX:e-v.left,mouseY:t-v.top,projectStarToScreenPx:(S,y,w,b)=>{$.set(S,y,w),$.applyMatrix4(n.matrixWorld),J.copy($).project(o),b.px=(J.x*.5+.5)*v.width,b.py=(-J.y*.5+.5)*v.height}})}function dt(e){const{cameraThree:t,pickerScratch:r,syncScratch:o}=e;Te(t,r.frustum,o.forward,o.right,o.up);const{tanHalfV:n,maxDistSqKm:a}=Qe(r);return ct({chunks:e.chunks,prepared:{tanHalfV:n,maxDistSqKm:a},pickInChunk:(l,s,c)=>{const i=e.pointsMeshes[s],u=e.chunkDistancesKm[s],f=e.chunkOriginalSizes[s];return!i||!u||!f?null:vt(e.clientX,e.clientY,e.canvas,t,i,l.positions,f,u,l.starsInChunk.length,r.frustum,c.tanHalfV,r.viewpointHelioKm,c.maxDistSqKm,e.chunkVelocities[s]??null,e.dtYears)}})}function gt(e){return dt(e)}var z={chunks:[],pointsMeshes:[],starsInView:[]};function Yt(){return z}function Xt(e,t){const r=ce(e),{starsInViewRef:o,getStarData:n,getStatus:a}=t,l=st(e),s=[],c=[],i=[],u=[],f=[],d=[],h=at();let g=0,v=0;const S=new Map,y=new we,w=new Me,b=new be,C=Ze(),A=new K,T=new K,R=new K;function W(){for(const p of s)p.dispose();s.length=0,c.length=0,i.length=0,u.length=0,f.length=0,d.length=0;for(const p of S.values())p.ref=null}function N(p){z.chunks=p,z.pointsMeshes=c,z.starsInView=o.current}function X(p){const m=z;for(let x=0;x<m.chunks.length;x+=1){const P=m.chunks[x],M=m.pointsMeshes[x];if(!(!P||!M))for(let k=0;k<P.starsInChunk.length;k+=1){const I=P.starsInChunk[k];if(!I||I.proper!==p)continue;const D=M.geometry.getAttribute("ignite");return D instanceof Q?{attribute:D,index:k}:null}}return null}return{refresh(){W();const p=Xe(n,a,i);for(const m of p){u.push(new Float32Array(m.sizes));const x=Le(m);f.push(x);const P=l.createChunk({layer:"starfield",meshName:`cosmosive-starfield-points-${m.abbr.replace(/[^a-zA-Z0-9_-]/g,"_")}`,material:h,attributes:[{name:"position",data:m.positions,components:3},{name:"size",data:m.sizes,components:1},{name:"color",data:m.colors,components:3},{name:"warm",data:m.warm,components:1},{name:"brightness",data:m.brightness,components:1},{name:"mag",data:m.mag,components:1},{name:"ignite",data:new Float32Array(m.sizes.length).fill(1),components:1},{name:"velocity",data:x,components:3}]});s.push(P);const M=P.meshRef;c.push(M)}d.length=0;for(const m of c)d.push(m);N(p)},advanceTime(p){g+=p,h.uniforms.uTime&&(h.uniforms.uTime.value=g);const m=(ie().jd-ae)/oe;h.uniforms.uDtYears&&(h.uniforms.uDtYears.value=m);const x=4.5,P=7.5,M=.8,k=L.effectiveSpeedKmPerS,I=M*Math.max(0,Math.min(1,((k>1?Math.log10(k):0)-x)/(P-x))),D=1-Math.exp(-p/.35);v+=(I-v)*D;const H=Math.max(v,Ae()*M);h.uniforms.uStreakAmt&&(h.uniforms.uStreakAmt.value=H);const B=Pe(),he=1-Math.exp(-p/.7);if(h.uniforms.uMagLimit){const _=h.uniforms.uMagLimit.value;h.uniforms.uMagLimit.value=_+(B.magLimit-_)*he}const pe=1-Math.exp(-p/.5),ne=B.ignitedStarProperNames;for(const _ of ne)S.has(_)||S.set(_,{value:1,ref:null});for(const[_,F]of S){const ve=ne.includes(_)?6:1;F.ref===null&&(F.ref=X(_)),F.value+=(ve-F.value)*pe,F.ref!==null&&(F.ref.attribute.setX(F.ref.index,F.value),F.ref.attribute.needsUpdate=!0)}},countFrustum(){let p=0,m=0;if(d.length>0){const x=r.cameraThree;x.updateMatrixWorld(!0),y.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),w.setFromProjectionMatrix(y);for(const P of d){const M=P.geometry;M.boundingSphere||M.computeBoundingSphere();const k=M.boundingSphere;k&&(b.copy(k).applyMatrix4(P.matrixWorld),w.intersectsSphere(b)&&(p+=1))}for(const P of c)m+=P.geometry.getAttribute("position")?.count??0}return{total:d.length,visible:p,verts:m}},pickFromClick({clientX:p,clientY:m,canvas:x}){return gt({kind:"r3f",clientX:p,clientY:m,canvas:x,chunks:z.chunks,chunkDistancesKm:i,chunkOriginalSizes:u,chunkVelocities:f,dtYears:(ie().jd-ae)/oe,cameraThree:r.cameraThree,pointsMeshes:c,pickerScratch:C,syncScratch:{forward:A,right:T,up:R}})},dispose(){W(),h.dispose(),z.chunks=[],z.pointsMeshes=[],z.starsInView=[]}}}var E={star1:U("#fff3a8",1),star2:U("#f5c238",1),star3:U("#e07b1a",1),star4:U("#a8380c",1)};function G(e){return new Y(e[0],e[1],e[2])}function St(){return{cool:G(E.star4),warm:G(E.star3),hot:G(E.star2),flare:G(E.star1)}}var xt=`
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
`,yt=`
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
`;function jt(e){return e==null||Array.isArray(e)||!(e instanceof O)?!1:e.userData.cosmosiveSunPhotosphere===!0}function $t(e,t){const r=St(),o={cool:e?.cool??r.cool,warm:e?.warm??r.warm,hot:e?.hot??r.hot,flare:e?.flare??r.flare},n={uTime:{value:0},uBandStrength:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:o.cool.clone()},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},a=new O({uniforms:n,vertexShader:xt,fragmentShader:yt,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var Pt=`
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
`,wt=`
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
`;function Z(e){return new Y(e[0],e[1],e[2])}function kt(){return{warm:Z(E.star3),hot:Z(E.star2),flare:Z(E.star1)}}function Jt(e){return e==null||Array.isArray(e)||!(e instanceof O)?!1:e.userData.cosmosiveSunCorona===!0}function Zt(e){const t=kt(),r={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},o={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:r.warm.clone()},uPaletteHot:{value:r.hot.clone()},uPaletteFlare:{value:r.flare.clone()}},n=new O({uniforms:o,vertexShader:Pt,fragmentShader:wt,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return n.userData.cosmosiveSunCorona=!0,n}export{Dt as C,Lt as S,It as T,Nt as _,E as a,Et as b,Ot as c,qt as d,Ht as f,Bt as g,Vt as h,jt as i,Ut as l,U as m,Jt as n,Xt as o,Kt as p,$t as r,Yt as s,Zt as t,Gt as u,Ie as v,_t as w,L as x,Wt as y};
