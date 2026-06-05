import{G as ae,V as ie,Y as te}from"./src-CU7t4spL.js";import{Y as xe,o as ye,t as Pe,w as we}from"./src--Dj6uCWZ.js";import{t as se}from"./activeGameplayHost-Dtma4eUw.js";import{t as ke}from"./skyLightStore-BfXJGTVl.js";import{Dt as V,G as be,_ as G,d as Q,f as Me,ht as Ce,k as Fe,mt as K,rt as ze}from"./three-vendor-DtGC8FGl.js";import{Kn as Ae,it as Te,pt as fe,qt as Re}from"./index-DzPXy7XS.js";import{t as me}from"./r3fHostExtras-B01KOKoI.js";import{t as _e}from"./combatFrustum-BN9fbl_3.js";var oe=new Map;function _t(e,t){oe.set(e,t)}function It(e){oe.delete(e)}function Dt(e,t,o){let n=null;for(const r of oe.values()){const a=r(e,t,o);a!=null&&Number.isFinite(a)&&a>=0&&(n==null||a<n)&&(n=a)}return n}var L={effectiveSpeedKmPerS:0,proximityThrottle:1,nearestBodySurfaceDistSu:null,viewpointScenePosX:0,viewpointScenePosY:0,viewpointScenePosZ:0};function Lt(e){e.effectiveSpeedKmPerS!==void 0&&(L.effectiveSpeedKmPerS=e.effectiveSpeedKmPerS),e.proximityThrottle!==void 0&&(L.proximityThrottle=e.proximityThrottle),e.nearestBodySurfaceDistSu!==void 0&&(L.nearestBodySurfaceDistSu=e.nearestBodySurfaceDistSu),e.viewpointScenePosX!==void 0&&(L.viewpointScenePosX=e.viewpointScenePosX),e.viewpointScenePosY!==void 0&&(L.viewpointScenePosY=e.viewpointScenePosY),e.viewpointScenePosZ!==void 0&&(L.viewpointScenePosZ=e.viewpointScenePosZ)}function Et(e,t){return e.getWorldPosition(t),t}function Wt(e){if(typeof e!="string"||!/^#?[0-9a-fA-F]{6}$/.test(e))return[0,0,0];const t=e.replace(/^#/,""),o=parseInt(t,16);return Number.isFinite(o)?[Math.floor(o/65536)%256,Math.floor(o/256)%256,o%256]:[0,0,0]}function Ie(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function Nt(e){return Math.max(0,Math.min(255,Math.round(e)))}function Vt(e,t,o){return[e[0]+(t[0]-e[0])*o,e[1]+(t[1]-e[1])*o,e[2]+(t[2]-e[2])*o]}function H(e,t=1,o=1){const[n,r,a]=Ie(e),c=Math.max(.15,Math.min(1,t));return[n*c,r*c,a*c,o]}function De(e,t,o,n,r){r.x=0,r.y=0,r.z=0;const{x:a,y:c,z:s,vx:l,vy:i,vz:u}=e;if(a==null||c==null||s==null||l==null||i==null||u==null)return r;const f=Math.hypot(a,c,s);if(f<=0)return r;const v=Math.hypot(t,o,n);if(v<=0)return r;const p=a/f,g=c/f,d=s/f,S=l*p+i*g+u*d,P=v/f;return r.x=(l-S*p)*P,r.y=(i-S*g)*P,r.z=(u-S*d)*P,r}var q={x:0,y:0,z:0};function Le(e){const t=e.starsInChunk,o=e.positions,n=Math.floor(o.length/3),r=new Float32Array(o.length);for(let a=0;a<n;a+=1){const c=t[a];c&&(De(c,o[a*3],o[a*3+1],o[a*3+2],q),r[a*3]=q.x,r[a*3+1]=q.y,r[a*3+2]=q.z)}return r}var Ee=1,We=-25,Ne=500,Ve=.01;function ee(e,t){let o=t;for(;e[o]!==o;)o=e[o];let n=t;for(;n!==o;){const r=e[n];e[n]=o,n=r}return o}function Be(e,t,o){const n=ee(e,t),r=ee(e,o);n!==r&&(e[n]=r)}function le(e,t,o){return`${e},${t},${o}`}function Bt(e,t){const o=e.length,n=Array.from({length:o},(i,u)=>u),r=t,a=new Map;for(let i=0;i<o;i+=1){const u=e[i],f=le(Math.floor(u.x/r),Math.floor(u.y/r),Math.floor(u.z/r));a.has(f)||a.set(f,[]),a.get(f).push(i)}const c=t*t;for(let i=0;i<o;i+=1){const u=e[i],f=Math.floor(u.x/r),v=Math.floor(u.y/r),p=Math.floor(u.z/r);for(let g=-1;g<=1;g+=1)for(let d=-1;d<=1;d+=1)for(let S=-1;S<=1;S+=1){const P=le(f+g,v+d,p+S),w=a.get(P);if(w)for(const b of w){if(b<=i)continue;const F=e[b],C=F.x-u.x,T=F.y-u.y,R=F.z-u.z;C*C+T*T+R*R<c&&Be(n,i,b)}}}const s=new Map;for(let i=0;i<o;i+=1){const u=ee(n,i);s.has(u)||s.set(u,[]),s.get(u).push(i)}const l=[];for(let i=0;i<o;i+=1)l.push(void 0);for(const i of s.values())i.length<=1||(i.sort((u,f)=>u-f),i.forEach((u,f)=>{f>0&&(l[u]={x:0,y:f*We})}));return l}function Ke(){const e=[];for(let t=0;t<Ne;t+=1){const o=we(t*.7%360,t*.3%180-90);o!=null&&e.push(o)}return e}function Oe(){const e=Ke(),t=e.length,o=Pe,n=new Float32Array(t*3);return e.forEach((r,a)=>{n[a*3]=r.x*o,n[a*3+1]=r.y*o,n[a*3+2]=r.z*o}),{abbr:"_bootstrap",positions:n,sizes:new Float32Array(t).fill(Ee),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(Ve),brightness:new Float32Array(t).fill(1),mag:new Float32Array(t).fill(-1/0),starsInChunk:[]}}var He={raMin:0,raMax:360,decMin:-90,decMax:90},Kt={chunks:[],namedStarsInView:[]};function Ot(e,t){return e===0&&t!=="success"}function he(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[Oe()]:[]}function Ht(e,t){const o=he(e,t),n=o.slice(0,3).map(r=>r.abbr).join(",");return o.length===0?{syntheticKind:"empty",chunkAbbrevSample:n}:o.length===1&&o[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:n}:o.some(r=>r.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:n}:{syntheticKind:"real",chunkAbbrevSample:n}}function ue(e,t){return t.current===e.current}function qt(e,t,o,n,r){e.onerror=a=>{ue(t,o)||(n("error"),r(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{ue(t,o)||(n("error"),r("Starfield worker message error"))}}function ce(e){const t=e.indexOf("__part");return t===-1?e:e.slice(0,t)}function N(e,t){const o=new Float32Array(e.length+t.length);return o.set(e,0),o.set(t,e.length),o}function qe(e,t){return{abbr:e.abbr,positions:N(e.positions,t.positions),sizes:N(e.sizes,t.sizes),colors:N(e.colors,t.colors),warm:N(e.warm,t.warm),brightness:N(e.brightness,t.brightness),mag:N(e.mag,t.mag),starsInChunk:[...e.starsInChunk,...t.starsInChunk]}}function Ue(e,t){const o=new Map;e.chunks.forEach((r,a)=>o.set(ce(r.abbr),a));const n=[...e.chunks];for(const r of t.chunks){const a=ce(r.abbr),c=o.get(a);if(c!=null){const s=n[c];s&&(n[c]=qe(s,r))}else o.set(a,n.length),n.push(r)}return{chunks:n,namedStarsInView:[...e.namedStarsInView,...t.namedStarsInView]}}function Ge(e,t,o,n,r,a,c,s="replace"){const{runId:l,...i}=e;l===t.current&&(o.current=l,s==="append"?(n.current=[...n.current,...i.starsInView],r(u=>Ue(u,{chunks:i.chunks,namedStarsInView:i.namedStarsInView}))):(n.current=i.starsInView,r({chunks:i.chunks,namedStarsInView:i.namedStarsInView})),a("ready"),c(null))}function Ut(e,t,o,n,r,a={}){const c=a.mode??"replace";e.processStarfield({runId:t,catalog:o,maxDistanceLevel:n,bounds:He,raInHours:!1,maxPerChunk:a.maxPerChunk}).then(s=>{Ge(s,r.runIdRef,r.lastSuccessfulRunIdRef,r.starsInViewRef,r.setStarData,r.setStarfieldStatus,r.setErrorMessage,c),a.onComplete?.()}).catch(s=>{t===r.runIdRef.current&&(r.setStarfieldStatus("error"),r.setErrorMessage(s instanceof Error?s.message:"Starfield worker failed"))})}function Ye(e,t){t.length=0;for(const o of e){const n=new Float32Array(o.starsInChunk.length);for(let r=0;r<o.starsInChunk.length;r+=1){const a=o.starsInChunk[r];n[r]=a?Re(a)*te:0}t.push(n)}}function je(e,t,o){const n=he(e(),t());return Ye(n,o),n}var Xe=500*te;function $e(e,t,o,n){const r=Math.sqrt(e*e+t*t+o*o);if(r<=0||!Number.isFinite(r)){n.x=0,n.y=0,n.z=0;return}const a=ye(r)*te/r;n.x=e*a,n.y=t*a,n.z=o*a}function Je(e,t,o,n,r,a,c,s){const l=Math.sqrt(e*e+t*t+o*o);if(l<=0||!Number.isFinite(l)||!Number.isFinite(n)){const p=-r,g=-a,d=-c;return p*p+g*g+d*d<=s}const i=n/l,u=e*i-r,f=t*i-a,v=o*i-c;return u*u+f*f+v*v<=s}function Ze(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},viewpointHelioKm:{x:0,y:0,z:0}}}function Qe(e){const t=Math.tan(e.frustum.fovYRadians*.5);return $e(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.viewpointHelioKm),{tanHalfV:t,maxDistSqKm:Xe**2}}var et=256,tt=320,ot=`
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
`,rt=`
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
`;function nt(e){return new K({uniforms:{uPointSizeMax:{value:e?.pointSizeMax??et},uTime:{value:0},uDtYears:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uPointSizeFloor:{value:e?.pointSizeFloor??1},uMagLimit:{value:6.5},uMagFadeRange:{value:1},uMagRef:{value:0},uFluxClampMax:{value:4},uFluxGamma:{value:.45},uPsfMaxMult:{value:3.5},uPaletteHot:{value:new G(1,.78,.56)},uPaletteFlare:{value:new G(1,.92,.75)},uStreakAmt:{value:0},uCoreSizeRatio:{value:e?.coreSizeRatio??1}},vertexShader:ot,fragmentShader:rt,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function at(){return nt({sizeMultiplier:1.6,pointSizeMax:tt,pointSizeFloor:1,twinkleAmp:.03,twinkleFreq:.9,coreSizeRatio:1.6})}function it(e){const{layers:t}=me(e);return{createChunk(o){const n=t[o.layer],r=new Me;for(const l of o.attributes)r.setAttribute(l.name,new Q(l.data,l.components));r.computeBoundingSphere();const a=o.material,c=new ze(r,a);c.frustumCulled=!0,c.raycast=()=>{},n.add(c);const s=new Map(o.attributes.map(l=>[l.name,l.components]));return{meshRef:c,updateAttribute(l,i){const u=s.get(l);u!=null&&r.setAttribute(l,new Q(i,u))},setVertexCount(l){r.computeBoundingSphere()},dispose(){n.remove(c),r.dispose()}}}}}function st(e){return it(e)}function pe(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function lt(e,t){let o=null,n=null;for(let r=0;r<e.length;r+=1){const a=e[r],c=t(a,r);c&&pe(c,o)&&(o=c,n=a.starsInChunk[c.index]??null)}return n}function ut(e){const t=e.proper??(e.hip!=null?`HIP ${e.hip}`:`Star ${e.id}`);return Ae.select(xe("hyg",e.id),t,"star"),!0}function ct(e){if(e.chunks.length===0)return!1;const t=e.prepared;if(t==null)return!1;const o=lt(e.chunks,(n,r)=>e.pickInChunk(n,r,t));return o?ut(o):!1}function ft(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function mt(){return 1}function ht(){return 8}var X={px:0,py:0};function pt(e){const{positions:t,velocities:o,dtYears:n,sizes:r,distancesKm:a,starCount:c,camFrustum:s,tanHalfV:l,viewpointHelioKm:i,maxDistSqKm:u,mouseX:f,mouseY:v,projectStarToScreenPx:p}=e,g=n??0,d=Math.min(c,t.length/3,r.length,a.length);let S=null;for(let P=0;P<d;P+=1){const w=P*3,b=t[w]+(o?o[w]*g:0),F=t[w+1]+(o?o[w+1]*g:0),C=t[w+2]+(o?o[w+2]*g:0);if(!Je(b,F,C,a[P]??0,i.x,i.y,i.z,u))continue;const T=b-s.position.x,R=F-s.position.y,B=C-s.position.z,W=T*s.forward.x+R*s.forward.y+B*s.forward.z;if(W<=1e-6)continue;const O=T*s.right.x+R*s.right.y+B*s.right.z,Y=T*s.up.x+R*s.up.y+B*s.up.z,j=l*s.aspect*W;if(Math.abs(O)>j)continue;const h=l*W;if(Math.abs(Y)>h)continue;const m=W,x=mt(),y=ht();if(y<=0)continue;p(b,F,C,X);const k=X.px-f,M=X.py-v,I=k*k+M*M;if(I>y*y)continue;const D={index:P,distSqPx:I,depthCam:m,renderedPx:x};pe(D,S)&&(S=D)}return S}var $=new V,J=new V;function vt(e,t,o,n,r,a,c,s,l,i,u,f,v,p,g){const d=o.getBoundingClientRect();return pt({positions:a,velocities:p,dtYears:g,sizes:c,distancesKm:s,starCount:l,uScale:ft(d.height,n.fov*Math.PI/180),camFrustum:i,tanHalfV:u,viewpointHelioKm:f,maxDistSqKm:v,mouseX:e-d.left,mouseY:t-d.top,projectStarToScreenPx:(S,P,w,b)=>{$.set(S,P,w),$.applyMatrix4(r.matrixWorld),J.copy($).project(n),b.px=(J.x*.5+.5)*d.width,b.py=(-J.y*.5+.5)*d.height}})}function dt(e){const{cameraThree:t,pickerScratch:o,syncScratch:n}=e;_e(t,o.frustum,n.forward,n.right,n.up);const r=fe();r&&(o.frustum.position.x+=r.x,o.frustum.position.y+=r.y,o.frustum.position.z+=r.z);const{tanHalfV:a,maxDistSqKm:c}=Qe(o);return ct({chunks:e.chunks,prepared:{tanHalfV:a,maxDistSqKm:c},pickInChunk:(s,l,i)=>{const u=e.pointsMeshes[l],f=e.chunkDistancesKm[l],v=e.chunkOriginalSizes[l];return!u||!f||!v?null:vt(e.clientX,e.clientY,e.canvas,t,u,s.positions,v,f,s.starsInChunk.length,o.frustum,i.tanHalfV,o.viewpointHelioKm,i.maxDistSqKm,e.chunkVelocities[l]??null,e.dtYears)}})}function gt(e){return dt(e)}var A={chunks:[],pointsMeshes:[],starsInView:[]};function Gt(){return A}function Yt(e,t){const o=me(e),{starsInViewRef:n,getStarData:r,getStatus:a}=t,c=st(e),s=[],l=[],i=[],u=[],f=[],v=[],p=at();let g=0,d=0;const S=new Map,P=new be,w=new Fe,b=new Ce,F=Ze(),C=new V;function T(){const h=fe();h?C.set(-h.x,-h.y,-h.z):C.set(0,0,0);for(const m of l)m.position.equals(C)||m.position.copy(C)}const R=new V,B=new V,W=new V;function O(){for(const h of s)h.dispose();s.length=0,l.length=0,i.length=0,u.length=0,f.length=0,v.length=0;for(const h of S.values())h.ref=null}function Y(h){A.chunks=h,A.pointsMeshes=l,A.starsInView=n.current}function j(h){const m=A;for(let x=0;x<m.chunks.length;x+=1){const y=m.chunks[x],k=m.pointsMeshes[x];if(!(!y||!k))for(let M=0;M<y.starsInChunk.length;M+=1){const I=y.starsInChunk[M];if(!I||I.proper!==h)continue;const D=k.geometry.getAttribute("ignite");return D instanceof Q?{attribute:D,index:M}:null}}return null}return{refresh(){O();const h=je(r,a,i);for(const m of h){u.push(new Float32Array(m.sizes));const x=Le(m);f.push(x);const y=c.createChunk({layer:"starfield",meshName:`cosmosive-starfield-points-${m.abbr.replace(/[^a-zA-Z0-9_-]/g,"_")}`,material:p,attributes:[{name:"position",data:m.positions,components:3},{name:"size",data:m.sizes,components:1},{name:"color",data:m.colors,components:3},{name:"warm",data:m.warm,components:1},{name:"brightness",data:m.brightness,components:1},{name:"mag",data:m.mag,components:1},{name:"ignite",data:new Float32Array(m.sizes.length).fill(1),components:1},{name:"velocity",data:x,components:3}]});s.push(y);const k=y.meshRef;l.push(k)}v.length=0;for(const m of l)v.push(m);Y(h)},advanceTime(h){g+=h,T(),p.uniforms.uTime&&(p.uniforms.uTime.value=g);const m=(se().jd-ae)/ie;p.uniforms.uDtYears&&(p.uniforms.uDtYears.value=m);const x=4.5,y=7.5,k=.8,M=L.effectiveSpeedKmPerS,I=k*Math.max(0,Math.min(1,((M>1?Math.log10(M):0)-x)/(y-x))),D=1-Math.exp(-h/.35);d+=(I-d)*D;const ve=Math.max(d,Te()*k);p.uniforms.uStreakAmt&&(p.uniforms.uStreakAmt.value=ve);const re=ke(),de=1-Math.exp(-h/.7);if(p.uniforms.uMagLimit){const _=p.uniforms.uMagLimit.value;p.uniforms.uMagLimit.value=_+(re.magLimit-_)*de}const ge=1-Math.exp(-h/.5),ne=re.ignitedStarProperNames;for(const _ of ne)S.has(_)||S.set(_,{value:1,ref:null});for(const[_,z]of S){const Se=ne.includes(_)?6:1;z.ref===null&&(z.ref=j(_)),z.value+=(Se-z.value)*ge,z.ref!==null&&(z.ref.attribute.setX(z.ref.index,z.value),z.ref.attribute.needsUpdate=!0)}},countFrustum(){let h=0,m=0;if(v.length>0){const x=o.cameraThree;x.updateMatrixWorld(!0),P.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),w.setFromProjectionMatrix(P);for(const y of v){const k=y.geometry;k.boundingSphere||k.computeBoundingSphere();const M=k.boundingSphere;M&&(b.copy(M).applyMatrix4(y.matrixWorld),w.intersectsSphere(b)&&(h+=1))}for(const y of l)m+=y.geometry.getAttribute("position")?.count??0}return{total:v.length,visible:h,verts:m}},pickFromClick({clientX:h,clientY:m,canvas:x}){return gt({kind:"r3f",clientX:h,clientY:m,canvas:x,chunks:A.chunks,chunkDistancesKm:i,chunkOriginalSizes:u,chunkVelocities:f,dtYears:(se().jd-ae)/ie,cameraThree:o.cameraThree,pointsMeshes:l,pickerScratch:F,syncScratch:{forward:R,right:B,up:W}})},dispose(){O(),p.dispose(),A.chunks=[],A.pointsMeshes=[],A.starsInView=[]}}}var E={star1:H("#fff3a8",1),star2:H("#f5c238",1),star3:H("#e07b1a",1),star4:H("#a8380c",1)};function U(e){return new G(e[0],e[1],e[2])}function St(){return{cool:U(E.star4),warm:U(E.star3),hot:U(E.star2),flare:U(E.star1)}}var xt=`
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
`;function jt(e){return e==null||Array.isArray(e)||!(e instanceof K)?!1:e.userData.cosmosiveSunPhotosphere===!0}function Xt(e,t){const o=St(),n={cool:e?.cool??o.cool,warm:e?.warm??o.warm,hot:e?.hot??o.hot,flare:e?.flare??o.flare},r={uTime:{value:0},uBandStrength:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:n.cool.clone()},uPaletteWarm:{value:n.warm.clone()},uPaletteHot:{value:n.hot.clone()},uPaletteFlare:{value:n.flare.clone()}},a=new K({uniforms:r,vertexShader:xt,fragmentShader:yt,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var Pt=`
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
`;function Z(e){return new G(e[0],e[1],e[2])}function kt(){return{warm:Z(E.star3),hot:Z(E.star2),flare:Z(E.star1)}}function $t(e){return e==null||Array.isArray(e)||!(e instanceof K)?!1:e.userData.cosmosiveSunCorona===!0}function Jt(e){const t=kt(),o={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},n={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},r=new K({uniforms:n,vertexShader:Pt,fragmentShader:wt,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return r.userData.cosmosiveSunCorona=!0,r}export{_t as C,Dt as S,Wt as _,E as a,L as b,Kt as c,qt as d,Ot as f,Vt as g,Nt as h,jt as i,Ht as l,H as m,$t as n,Yt as o,Bt as p,Xt as r,Gt as s,Jt as t,Ut as u,Ie as v,It as w,Lt as x,Et as y};
