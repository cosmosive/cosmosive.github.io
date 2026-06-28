import"./astro-BmanX5qR.js";import{J as le,Q as ue,nt as ne}from"./src-CZjK4KKE.js";import{A as be,T as Fe,q as Pe,vt as ke}from"./src-BlOGNk8m.js";import{rt as Me,t as ce}from"./activeGameplayHost-BqON_3B5.js";import{t as Ce}from"./skyLightStore-ahq7l6TE.js";import{d as _e}from"./celestial-REbcuM-h.js";import{A as ze,_t as Ae,at as Te,f as ae,gt as q,kt as K,p as Re,q as Ie,v as U}from"./three-vendor-7Zt43m1U.js";import{b as ve,dn as Le,ht as Ve,mn as De,rr as Ee}from"./index-Cq0Ou5we.js";import{t as Be}from"./combatFrustum-D1rXwIhm.js";var ie=new Map;function Ot(e,t){ie.set(e,t)}function Ht(e){ie.delete(e)}function Kt(e,t,r){let o=null;for(const a of ie.values()){const n=a(e,t,r);n!=null&&Number.isFinite(n)&&n>=0&&(o==null||n<o)&&(o=n)}return o}var E={effectiveSpeedKmPerS:0,proximityThrottle:1,nearestBodySurfaceDistSu:null,viewpointScenePosX:0,viewpointScenePosY:0,viewpointScenePosZ:0};function Ut(e){e.effectiveSpeedKmPerS!==void 0&&(E.effectiveSpeedKmPerS=e.effectiveSpeedKmPerS),e.proximityThrottle!==void 0&&(E.proximityThrottle=e.proximityThrottle),e.nearestBodySurfaceDistSu!==void 0&&(E.nearestBodySurfaceDistSu=e.nearestBodySurfaceDistSu),e.viewpointScenePosX!==void 0&&(E.viewpointScenePosX=e.viewpointScenePosX),e.viewpointScenePosY!==void 0&&(E.viewpointScenePosY=e.viewpointScenePosY),e.viewpointScenePosZ!==void 0&&(E.viewpointScenePosZ=e.viewpointScenePosZ)}function qt(e,t){return e.getWorldPosition(t),t}var de=null;function Gt(e){de=e}function Yt(){return de}function jt(e){if(typeof e!="string"||!/^#?[0-9a-fA-F]{6}$/.test(e))return[0,0,0];const t=e.replace(/^#/,""),r=parseInt(t,16);return Number.isFinite(r)?[Math.floor(r/65536)%256,Math.floor(r/256)%256,r%256]:[0,0,0]}function $(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function Xt(e){return Math.max(0,Math.min(255,Math.round(e)))}function z(e,t,r){return[e[0]+(t[0]-e[0])*r,e[1]+(t[1]-e[1])*r,e[2]+(t[2]-e[2])*r]}function Y(e,t=1,r=1){const[o,a,n]=$(e),c=Math.max(.15,Math.min(1,t));return[o*c,a*c,n*c,r]}var Ne=1,We=-25,Oe=500,He=.01;function oe(e,t){let r=t;for(;e[r]!==r;)r=e[r];let o=t;for(;o!==r;){const a=e[o];e[o]=r,o=a}return r}function Ke(e,t,r){const o=oe(e,t),a=oe(e,r);o!==a&&(e[o]=a)}function fe(e,t,r){return`${e},${t},${r}`}function $t(e,t){const r=e.length,o=Array.from({length:r},(i,l)=>l),a=t,n=new Map;for(let i=0;i<r;i+=1){const l=e[i],m=fe(Math.floor(l.x/a),Math.floor(l.y/a),Math.floor(l.z/a));n.has(m)||n.set(m,[]),n.get(m).push(i)}const c=t*t;for(let i=0;i<r;i+=1){const l=e[i],m=Math.floor(l.x/a),v=Math.floor(l.y/a),p=Math.floor(l.z/a);for(let S=-1;S<=1;S+=1)for(let d=-1;d<=1;d+=1)for(let y=-1;y<=1;y+=1){const k=fe(m+S,v+d,p+y),w=n.get(k);if(w)for(const F of w){if(F<=i)continue;const C=e[F],T=C.x-l.x,R=C.y-l.y,I=C.z-l.z;T*T+R*R+I*I<c&&Ke(o,i,F)}}}const s=new Map;for(let i=0;i<r;i+=1){const l=oe(o,i);s.has(l)||s.set(l,[]),s.get(l).push(i)}const u=[];for(let i=0;i<r;i+=1)u.push(void 0);for(const i of s.values())i.length<=1||(i.sort((l,m)=>l-m),i.forEach((l,m)=>{m>0&&(u[l]={x:0,y:m*We})}));return u}function Ue(){const e=[];for(let t=0;t<Oe;t+=1){const r=Pe(t*.7%360,t*.3%180-90);r!=null&&e.push(r)}return e}function qe(){const e=Ue(),t=e.length,r=Fe,o=new Float32Array(t*3);return e.forEach((a,n)=>{o[n*3]=a.x*r,o[n*3+1]=a.y*r,o[n*3+2]=a.z*r}),{abbr:"_bootstrap",positions:o,sizes:new Float32Array(t).fill(Ne),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(He),brightness:new Float32Array(t).fill(1),mag:new Float32Array(t).fill(-1/0),starsInChunk:[]}}var Ge={raMin:0,raMax:360,decMin:-90,decMax:90},Jt={chunks:[],namedStarsInView:[]};function Zt(e,t){return e===0&&t!=="success"}function ge(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[qe()]:[]}function Qt(e,t){const r=ge(e,t),o=r.slice(0,3).map(a=>a.abbr).join(",");return r.length===0?{syntheticKind:"empty",chunkAbbrevSample:o}:r.length===1&&r[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:o}:r.some(a=>a.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:o}:{syntheticKind:"real",chunkAbbrevSample:o}}function me(e,t){return t.current===e.current}function er(e,t,r,o,a){e.onerror=n=>{me(t,r)||(o("error"),a(n.message??"Starfield worker failed"))},e.onmessageerror=()=>{me(t,r)||(o("error"),a("Starfield worker message error"))}}function he(e){const t=e.indexOf("__part");return t===-1?e:e.slice(0,t)}function W(e,t){const r=new Float32Array(e.length+t.length);return r.set(e,0),r.set(t,e.length),r}function Ye(e,t){return{abbr:e.abbr,positions:W(e.positions,t.positions),sizes:W(e.sizes,t.sizes),colors:W(e.colors,t.colors),warm:W(e.warm,t.warm),brightness:W(e.brightness,t.brightness),mag:W(e.mag,t.mag),starsInChunk:[...e.starsInChunk,...t.starsInChunk]}}function je(e,t){const r=new Map;e.chunks.forEach((a,n)=>r.set(he(a.abbr),n));const o=[...e.chunks];for(const a of t.chunks){const n=he(a.abbr),c=r.get(n);if(c!=null){const s=o[c];s&&(o[c]=Ye(s,a))}else r.set(n,o.length),o.push(a)}return{chunks:o,namedStarsInView:[...e.namedStarsInView,...t.namedStarsInView]}}function Xe(e,t,r,o,a,n,c,s="replace"){const{runId:u,...i}=e;u===t.current&&(r.current=u,s==="append"?(o.current=[...o.current,...i.starsInView],a(l=>je(l,{chunks:i.chunks,namedStarsInView:i.namedStarsInView}))):(o.current=i.starsInView,a({chunks:i.chunks,namedStarsInView:i.namedStarsInView})),n("ready"),c(null))}function tr(e,t,r,o,a,n={}){const c=n.mode??"replace";e.processStarfield({runId:t,catalog:r,maxDistanceLevel:o,bounds:Ge,raInHours:!1,maxPerChunk:n.maxPerChunk}).then(s=>{Xe(s,a.runIdRef,a.lastSuccessfulRunIdRef,a.starsInViewRef,a.setStarData,a.setStarfieldStatus,a.setErrorMessage,c),n.onComplete?.()}).catch(s=>{t===a.runIdRef.current&&(a.setStarfieldStatus("error"),a.setErrorMessage(s instanceof Error?s.message:"Starfield worker failed"))})}function $e(e,t){t.length=0;for(const r of e){const o=new Float32Array(r.starsInChunk.length);for(let a=0;a<r.starsInChunk.length;a+=1){const n=r.starsInChunk[a];o[a]=n?Me(n)*ne:0}t.push(o)}}function Je(e,t,r){const o=ge(e(),t());return $e(o,r),o}var Ze=500*ne;function Qe(e,t,r,o){const a=Math.sqrt(e*e+t*t+r*r);if(a<=0||!Number.isFinite(a)){o.x=0,o.y=0,o.z=0;return}const n=be(a)*ne/a;o.x=e*n,o.y=t*n,o.z=r*n}function et(e,t,r,o,a,n,c,s){const u=Math.sqrt(e*e+t*t+r*r);if(u<=0||!Number.isFinite(u)||!Number.isFinite(o)){const p=-a,S=-n,d=-c;return p*p+S*S+d*d<=s}const i=o/u,l=e*i-a,m=t*i-n,v=r*i-c;return l*l+m*m+v*v<=s}function tt(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},viewpointHelioKm:{x:0,y:0,z:0}}}function rt(e){const t=Math.tan(e.frustum.fovYRadians*.5);return Qe(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.viewpointHelioKm),{tanHalfV:t,maxDistSqKm:Ze**2}}var at=256,ot=320,nt=`
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
`;function st(e){return new q({uniforms:{uPointSizeMax:{value:e?.pointSizeMax??at},uTime:{value:0},uDtYears:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uPointSizeFloor:{value:e?.pointSizeFloor??1},uMagLimit:{value:6.5},uMagFadeRange:{value:2.5},uMagRef:{value:0},uFluxClampMax:{value:4},uFluxGamma:{value:.6},uPsfMaxMult:{value:5},uFaintSizeFade:{value:.5},uFlareSatLo:{value:.42},uFlareSatHi:{value:.66},uFlareMaxScale:{value:5},uFlareSpikeAmt:{value:.5},uPaletteHot:{value:new U(1,.78,.56)},uPaletteFlare:{value:new U(1,.92,.75)},uStreakAmt:{value:0},uCoreSizeRatio:{value:e?.coreSizeRatio??1}},vertexShader:nt,fragmentShader:it,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function lt(){return st({sizeMultiplier:1.6,pointSizeMax:ot,pointSizeFloor:1,twinkleAmp:.03,twinkleFreq:.9,coreSizeRatio:1.6})}function ut(e){const{layers:t}=ve(e);return{createChunk(r){const o=t[r.layer],a=new Re;for(const u of r.attributes)a.setAttribute(u.name,new ae(u.data,u.components));a.computeBoundingSphere();const n=r.material,c=new Te(a,n);c.frustumCulled=!0,c.raycast=()=>{},o.add(c);const s=new Map(r.attributes.map(u=>[u.name,u.components]));return{meshRef:c,updateAttribute(u,i){const l=s.get(u);l!=null&&a.setAttribute(u,new ae(i,l))},setVertexCount(u){a.computeBoundingSphere()},dispose(){o.remove(c),a.dispose()}}}}}function ct(e){return ut(e)}function Se(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function ft(e,t){let r=null,o=null;for(let a=0;a<e.length;a+=1){const n=e[a],c=t(n,a);c&&Se(c,r)&&(r=c,o=n.starsInChunk[c.index]??null)}return o}function mt(e){const t=e.proper??(e.hip!=null?`HIP ${e.hip}`:`Star ${e.id}`);return _e.select(ke("hyg",e.id),t,"star"),!0}function ht(e){if(e.chunks.length===0)return!1;const t=e.prepared;if(t==null)return!1;const r=ft(e.chunks,(o,a)=>e.pickInChunk(o,a,t));return r?mt(r):!1}function pt(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function vt(){return 1}function dt(){return 8}var Z={px:0,py:0};function gt(e){const{positions:t,velocities:r,dtYears:o,sizes:a,distancesKm:n,starCount:c,camFrustum:s,tanHalfV:u,viewpointHelioKm:i,maxDistSqKm:l,mouseX:m,mouseY:v,projectStarToScreenPx:p}=e,S=o??0,d=Math.min(c,t.length/3,a.length,n.length);let y=null;for(let k=0;k<d;k+=1){const w=k*3,F=t[w]+(r?r[w]*S:0),C=t[w+1]+(r?r[w+1]*S:0),T=t[w+2]+(r?r[w+2]*S:0);if(!et(F,C,T,n[k]??0,i.x,i.y,i.z,l))continue;const R=F-s.position.x,I=C-s.position.y,B=T-s.position.z,N=R*s.forward.x+I*s.forward.y+B*s.forward.z;if(N<=1e-6)continue;const J=R*s.right.x+I*s.right.y+B*s.right.z,h=R*s.up.x+I*s.up.y+B*s.up.z,f=u*s.aspect*N;if(Math.abs(J)>f)continue;const g=u*N;if(Math.abs(h)>g)continue;const x=N,P=vt(),b=dt();if(b<=0)continue;p(F,C,T,Z);const V=Z.px-m,D=Z.py-v,G=V*V+D*D;if(G>b*b)continue;const O={index:k,distSqPx:G,depthCam:x,renderedPx:P};Se(O,y)&&(y=O)}return y}var Q=new K,ee=new K;function St(e,t,r,o,a,n,c,s,u,i,l,m,v,p,S){const d=r.getBoundingClientRect();return gt({positions:n,velocities:p,dtYears:S,sizes:c,distancesKm:s,starCount:u,uScale:pt(d.height,o.fov*Math.PI/180),camFrustum:i,tanHalfV:l,viewpointHelioKm:m,maxDistSqKm:v,mouseX:e-d.left,mouseY:t-d.top,projectStarToScreenPx:(y,k,w,F)=>{Q.set(y,k,w),Q.applyMatrix4(a.matrixWorld),ee.copy(Q).project(o),F.px=(ee.x*.5+.5)*d.width,F.py=(-ee.y*.5+.5)*d.height}})}function xt(e){const{cameraThree:t,pickerScratch:r,syncScratch:o}=e;Be(t,r.frustum,o.forward,o.right,o.up);const a=Le();a&&(r.frustum.position.x+=a.x,r.frustum.position.y+=a.y,r.frustum.position.z+=a.z);const{tanHalfV:n,maxDistSqKm:c}=rt(r);return ht({chunks:e.chunks,prepared:{tanHalfV:n,maxDistSqKm:c},pickInChunk:(s,u,i)=>{const l=e.pointsMeshes[u],m=e.chunkDistancesKm[u],v=e.chunkOriginalSizes[u];return!l||!m||!v?null:St(e.clientX,e.clientY,e.canvas,t,l,s.positions,v,m,s.starsInChunk.length,r.frustum,i.tanHalfV,r.viewpointHelioKm,i.maxDistSqKm,e.chunkVelocities[u]??null,e.dtYears)}})}function yt(e){return xt(e)}var A={chunks:[],pointsMeshes:[],starsInView:[]};function rr(){return A}function ar(e,t){const r=ve(e),{starsInViewRef:o,getStarData:a,getStatus:n}=t,c=ct(e),s=[],u=[],i=[],l=[],m=[],v=[],p=lt();let S=0,d=0;const y=new Map,k=new Ie,w=new ze,F=new Ae,C=tt(),T=new K,R=new K,I=new K;function B(){for(const h of s)h.dispose();s.length=0,u.length=0,i.length=0,l.length=0,m.length=0,v.length=0;for(const h of y.values())h.ref=null}function N(h){A.chunks=h,A.pointsMeshes=u,A.starsInView=o.current}function J(h){const f=A;for(let g=0;g<f.chunks.length;g+=1){const x=f.chunks[g],P=f.pointsMeshes[g];if(!(!x||!P))for(let b=0;b<x.starsInChunk.length;b+=1){const V=x.starsInChunk[b];if(!V||V.proper!==h)continue;const D=P.geometry.getAttribute("ignite");return D instanceof ae?{attribute:D,index:b}:null}}return null}return{refresh(){B();const h=Je(a,n,i);for(const f of h){l.push(new Float32Array(f.sizes));const g=De(f);m.push(g);const x=c.createChunk({layer:"starfield",meshName:`cosmosive-starfield-points-${f.abbr.replace(/[^a-zA-Z0-9_-]/g,"_")}`,material:p,attributes:[{name:"position",data:f.positions,components:3},{name:"size",data:f.sizes,components:1},{name:"color",data:f.colors,components:3},{name:"warm",data:f.warm,components:1},{name:"brightness",data:f.brightness,components:1},{name:"mag",data:f.mag,components:1},{name:"ignite",data:new Float32Array(f.sizes.length).fill(1),components:1},{name:"velocity",data:g,components:3}]});s.push(x);const P=x.meshRef;u.push(P)}v.length=0;for(const f of u)v.push(f);N(h)},advanceTime(h){S+=h,p.uniforms.uTime&&(p.uniforms.uTime.value=S);const f=(ce().jd-ue)/le;p.uniforms.uDtYears&&(p.uniforms.uDtYears.value=f);const g=4.5,x=7.5,P=.8,b=E.effectiveSpeedKmPerS,V=P*Math.max(0,Math.min(1,((b>1?Math.log10(b):0)-g)/(x-g))),D=1-Math.exp(-h/.35);d+=(V-d)*D;const G=Math.max(d,Ve()*P);p.uniforms.uStreakAmt&&(p.uniforms.uStreakAmt.value=G);const O=Ce(),xe=1-Math.exp(-h/.7);if(p.uniforms.uMagLimit){const L=p.uniforms.uMagLimit.value;p.uniforms.uMagLimit.value=L+(O.magLimit-L)*xe}const ye=1-Math.exp(-h/.5),se=O.ignitedStarProperNames;for(const L of se)y.has(L)||y.set(L,{value:1,ref:null});for(const[L,_]of y){const we=se.includes(L)?6:1;_.ref===null&&(_.ref=J(L)),_.value+=(we-_.value)*ye,_.ref!==null&&(_.ref.attribute.setX(_.ref.index,_.value),_.ref.attribute.needsUpdate=!0)}},countFrustum(){let h=0,f=0;if(v.length>0){const g=r.cameraThree;g.updateMatrixWorld(!0),k.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),w.setFromProjectionMatrix(k);for(const x of v){const P=x.geometry;P.boundingSphere||P.computeBoundingSphere();const b=P.boundingSphere;b&&(F.copy(b).applyMatrix4(x.matrixWorld),w.intersectsSphere(F)&&(h+=1))}for(const x of u)f+=x.geometry.getAttribute("position")?.count??0}return{total:v.length,visible:h,verts:f}},pickFromClick({clientX:h,clientY:f,canvas:g}){return yt({kind:"r3f",clientX:h,clientY:f,canvas:g,chunks:A.chunks,chunkDistancesKm:i,chunkOriginalSizes:l,chunkVelocities:m,dtYears:(ce().jd-ue)/le,cameraThree:r.cameraThree,pointsMeshes:u,pickerScratch:C,syncScratch:{forward:T,right:R,up:I}})},dispose(){B(),p.dispose(),A.chunks=[],A.pointsMeshes=[],A.starsInView=[]}}}var M={star1:Y("#fff3a8",1),star2:Y("#f5c238",1),star3:Y("#e07b1a",1),star4:Y("#a8380c",1)};function j(e){return new U(e[0],e[1],e[2])}function wt(){return{cool:j(M.star4),warm:j(M.star3),hot:j(M.star2),flare:j(M.star1)}}var bt=`
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
`;function or(e){return e==null||Array.isArray(e)||!(e instanceof q)?!1:e.userData.cosmosiveSunPhotosphere===!0}function nr(e,t){const r=wt(),o={cool:e?.cool??r.cool,warm:e?.warm??r.warm,hot:e?.hot??r.hot,flare:e?.flare??r.flare},a={uTime:{value:0},uBandStrength:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:o.cool.clone()},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},n=new q({uniforms:a,vertexShader:bt,fragmentShader:Ft,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return n.userData.cosmosiveSunPhotosphere=!0,n}var Pt=`
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
`;function te(e){return new U(e[0],e[1],e[2])}function Mt(){return{warm:te(M.star3),hot:te(M.star2),flare:te(M.star1)}}function ir(e){return e==null||Array.isArray(e)||!(e instanceof q)?!1:e.userData.cosmosiveSunCorona===!0}function sr(e){const t=Mt(),r={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},o={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:r.warm.clone()},uPaletteHot:{value:r.hot.clone()},uPaletteFlare:{value:r.flare.clone()}},a=new q({uniforms:o,vertexShader:Pt,fragmentShader:kt,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return a.userData.cosmosiveSunCorona=!0,a}var re=$("#d6ebff"),pe=$("#f5c238"),Ct=.01;function H(e){return[e[0],e[1],e[2]]}function _t(){return{cool:H(M.star4),warm:H(M.star3),hot:H(M.star2),flare:H(M.star1)}}function zt(e){return typeof e.c=="string"&&e.c.length>0?$(`#${e.c}`):H(M.star2)}function At(e){return typeof e.warm=="number"&&Number.isFinite(e.warm)?Ee(e.warm):Ct}function Tt(e){const t=_t(),r=zt(e),o=At(e),a=1-o;return{cool:z(z(t.cool,re,a*.7),r,.2),warm:z(z(t.warm,r,.45),pe,o*.6),hot:z(z(t.hot,r,.75),re,a*.35),flare:z(z(z(t.flare,r,.35),pe,o*.45),re,a*.2)}}function X(e){return new U(e[0],e[1],e[2])}function lr(e){const t=Tt(e);return{cool:X(t.cool),warm:X(t.warm),hot:X(t.hot),flare:X(t.flare)}}export{Ut as C,Ht as E,E as S,Ot as T,jt as _,or as a,Gt as b,Jt as c,er as d,Zt as f,z as g,Xt as h,nr as i,Qt as l,Y as m,sr as n,ar as o,$t as p,ir as r,rr as s,lr as t,tr as u,$ as v,Kt as w,qt as x,Yt as y};
