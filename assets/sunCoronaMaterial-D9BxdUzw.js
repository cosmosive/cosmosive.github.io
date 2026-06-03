import{H as le,K as ue,N as ke,X as ne}from"./src-DWKVT447.js";import{c as Pe,j as we,nt as Me,p as be}from"./sceneRuntimeTypes-CEvW8e0J.js";import{t as ce}from"./activeGameplayHost-BikAQuDg.js";import{t as Fe}from"./skyLightStore-BfXJGTVl.js";import{Dt as V,G as Ce,_ as G,d as te,f as ze,ht as Ae,k as Te,mt as B,rt as pe}from"./three-vendor-DtGC8FGl.js";import{Vn as _e,dn as Ie,it as De}from"./index-DF4I-jex.js";import{n as Re,r as Le}from"./combatFrustum-D5yrAg96.js";import{t as ve}from"./r3fHostExtras-6Sd3a68y.js";var oe=new Map;function Nt(e,t){oe.set(e,t)}function Vt(e){oe.delete(e)}function Bt(e,t,r){let o=null;for(const n of oe.values()){const a=n(e,t,r);a!=null&&Number.isFinite(a)&&a>=0&&(o==null||a<o)&&(o=a)}return o}var R={effectiveSpeedKmPerS:0,proximityThrottle:1,nearestBodySurfaceDistSu:null,viewpointScenePosX:0,viewpointScenePosY:0,viewpointScenePosZ:0};function Ht(e){e.effectiveSpeedKmPerS!==void 0&&(R.effectiveSpeedKmPerS=e.effectiveSpeedKmPerS),e.proximityThrottle!==void 0&&(R.proximityThrottle=e.proximityThrottle),e.nearestBodySurfaceDistSu!==void 0&&(R.nearestBodySurfaceDistSu=e.nearestBodySurfaceDistSu),e.viewpointScenePosX!==void 0&&(R.viewpointScenePosX=e.viewpointScenePosX),e.viewpointScenePosY!==void 0&&(R.viewpointScenePosY=e.viewpointScenePosY),e.viewpointScenePosZ!==void 0&&(R.viewpointScenePosZ=e.viewpointScenePosZ)}function Ee(e,t,r){return r&&t&&ke(e,t.position.x,t.position.y,t.position.z),e}function Ot(e,t,r){if(r&&t){const o=e;o.x+=t.position.x,o.y+=t.position.y,o.z+=t.position.z}return e}function Kt(e,t){return e.getWorldPosition(t),Ee(t,Le.current,!0),t}function Ut(e){if(typeof e!="string"||!/^#?[0-9a-fA-F]{6}$/.test(e))return[0,0,0];const t=e.replace(/^#/,""),r=parseInt(t,16);return Number.isFinite(r)?[Math.floor(r/65536)%256,Math.floor(r/256)%256,r%256]:[0,0,0]}function We(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function qt(e){return Math.max(0,Math.min(255,Math.round(e)))}function Gt(e,t,r){return[e[0]+(t[0]-e[0])*r,e[1]+(t[1]-e[1])*r,e[2]+(t[2]-e[2])*r]}function K(e,t=1,r=1){const[o,n,a]=We(e),u=Math.max(.15,Math.min(1,t));return[o*u,n*u,a*u,r]}function Ne(e,t,r,o,n){n.x=0,n.y=0,n.z=0;const{x:a,y:u,z:s,vx:c,vy:i,vz:l}=e;if(a==null||u==null||s==null||c==null||i==null||l==null)return n;const f=Math.hypot(a,u,s);if(f<=0)return n;const y=Math.hypot(t,r,o);if(y<=0)return n;const k=a/f,d=u/f,m=s/f,p=c*k+i*d+l*m,S=y/f;return n.x=(c-p*k)*S,n.y=(i-p*d)*S,n.z=(l-p*m)*S,n}var U={x:0,y:0,z:0};function Ve(e){const t=e.starsInChunk,r=e.positions,o=Math.floor(r.length/3),n=new Float32Array(r.length);for(let a=0;a<o;a+=1){const u=t[a];u&&(Ne(u,r[a*3],r[a*3+1],r[a*3+2],U),n[a*3]=U.x,n[a*3+1]=U.y,n[a*3+2]=U.z)}return n}var Be=1,He=-25,Oe=500,Ke=.01;function re(e,t){let r=t;for(;e[r]!==r;)r=e[r];let o=t;for(;o!==r;){const n=e[o];e[o]=r,o=n}return r}function Ue(e,t,r){const o=re(e,t),n=re(e,r);o!==n&&(e[o]=n)}function fe(e,t,r){return`${e},${t},${r}`}function Yt(e,t){const r=e.length,o=Array.from({length:r},(i,l)=>l),n=t,a=new Map;for(let i=0;i<r;i+=1){const l=e[i],f=fe(Math.floor(l.x/n),Math.floor(l.y/n),Math.floor(l.z/n));a.has(f)||a.set(f,[]),a.get(f).push(i)}const u=t*t;for(let i=0;i<r;i+=1){const l=e[i],f=Math.floor(l.x/n),y=Math.floor(l.y/n),k=Math.floor(l.z/n);for(let d=-1;d<=1;d+=1)for(let m=-1;m<=1;m+=1)for(let p=-1;p<=1;p+=1){const S=fe(f+d,y+m,k+p),P=a.get(S);if(P)for(const w of P){if(w<=i)continue;const C=e[w],z=C.x-l.x,A=C.y-l.y,I=C.z-l.z;z*z+A*A+I*I<u&&Ue(o,i,w)}}}const s=new Map;for(let i=0;i<r;i+=1){const l=re(o,i);s.has(l)||s.set(l,[]),s.get(l).push(i)}const c=[];for(let i=0;i<r;i+=1)c.push(void 0);for(const i of s.values())i.length<=1||(i.sort((l,f)=>l-f),i.forEach((l,f)=>{f>0&&(c[l]={x:0,y:f*He})}));return c}function qe(){const e=[];for(let t=0;t<Oe;t+=1){const r=we(t*.7%360,t*.3%180-90);r!=null&&e.push(r)}return e}function Ge(){const e=qe(),t=e.length,r=Pe,o=new Float32Array(t*3);return e.forEach((n,a)=>{o[a*3]=n.x*r,o[a*3+1]=n.y*r,o[a*3+2]=n.z*r}),{abbr:"_bootstrap",positions:o,sizes:new Float32Array(t).fill(Be),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(Ke),brightness:new Float32Array(t).fill(1),mag:new Float32Array(t).fill(-1/0),starsInChunk:[]}}var Ye={raMin:0,raMax:360,decMin:-90,decMax:90},Xt={chunks:[],namedStarsInView:[]};function jt(e,t){return e===0&&t!=="success"}function de(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[Ge()]:[]}function $t(e,t){const r=de(e,t),o=r.slice(0,3).map(n=>n.abbr).join(",");return r.length===0?{syntheticKind:"empty",chunkAbbrevSample:o}:r.length===1&&r[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:o}:r.some(n=>n.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:o}:{syntheticKind:"real",chunkAbbrevSample:o}}function me(e,t){return t.current===e.current}function Jt(e,t,r,o,n){e.onerror=a=>{me(t,r)||(o("error"),n(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{me(t,r)||(o("error"),n("Starfield worker message error"))}}function he(e){const t=e.indexOf("__part");return t===-1?e:e.slice(0,t)}function W(e,t){const r=new Float32Array(e.length+t.length);return r.set(e,0),r.set(t,e.length),r}function Xe(e,t){return{abbr:e.abbr,positions:W(e.positions,t.positions),sizes:W(e.sizes,t.sizes),colors:W(e.colors,t.colors),warm:W(e.warm,t.warm),brightness:W(e.brightness,t.brightness),mag:W(e.mag,t.mag),starsInChunk:[...e.starsInChunk,...t.starsInChunk]}}function je(e,t){const r=new Map;e.chunks.forEach((n,a)=>r.set(he(n.abbr),a));const o=[...e.chunks];for(const n of t.chunks){const a=he(n.abbr),u=r.get(a);if(u!=null){const s=o[u];s&&(o[u]=Xe(s,n))}else r.set(a,o.length),o.push(n)}return{chunks:o,namedStarsInView:[...e.namedStarsInView,...t.namedStarsInView]}}function $e(e,t,r,o,n,a,u,s="replace"){const{runId:c,...i}=e;c===t.current&&(r.current=c,s==="append"?(o.current=[...o.current,...i.starsInView],n(l=>je(l,{chunks:i.chunks,namedStarsInView:i.namedStarsInView}))):(o.current=i.starsInView,n({chunks:i.chunks,namedStarsInView:i.namedStarsInView})),a("ready"),u(null))}function Zt(e,t,r,o,n,a={}){const u=a.mode??"replace";e.processStarfield({runId:t,catalog:r,maxDistanceLevel:o,bounds:Ye,raInHours:!1,maxPerChunk:a.maxPerChunk}).then(s=>{$e(s,n.runIdRef,n.lastSuccessfulRunIdRef,n.starsInViewRef,n.setStarData,n.setStarfieldStatus,n.setErrorMessage,u),a.onComplete?.()}).catch(s=>{t===n.runIdRef.current&&(n.setStarfieldStatus("error"),n.setErrorMessage(s instanceof Error?s.message:"Starfield worker failed"))})}function Je(e,t){t.length=0;for(const r of e){const o=new Float32Array(r.starsInChunk.length);for(let n=0;n<r.starsInChunk.length;n+=1){const a=r.starsInChunk[n];o[n]=a?Ie(a)*ne:0}t.push(o)}}function Ze(e,t,r){const o=de(e(),t());return Je(o,r),o}var Qe=500*ne;function et(e,t,r,o){const n=Math.sqrt(e*e+t*t+r*r);if(n<=0||!Number.isFinite(n)){o.x=0,o.y=0,o.z=0;return}const a=be(n)*ne/n;o.x=e*a,o.y=t*a,o.z=r*a}function tt(e,t,r,o,n,a,u,s){const c=Math.sqrt(e*e+t*t+r*r);if(c<=0||!Number.isFinite(c)||!Number.isFinite(o)){const k=-n,d=-a,m=-u;return k*k+d*d+m*m<=s}const i=o/c,l=e*i-n,f=t*i-a,y=r*i-u;return l*l+f*f+y*y<=s}function rt(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},viewpointHelioKm:{x:0,y:0,z:0}}}function nt(e){const t=Math.tan(e.frustum.fovYRadians*.5);return et(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.viewpointHelioKm),{tanHalfV:t,maxDistSqKm:Qe**2}}var ot=256,at=320,it=`
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
`,st=`
  varying vec3 vColor;
  varying float vBrightness;
  varying float vWarm;
  varying vec2 vScreenDir;
  uniform vec3 uPaletteHot;
  uniform vec3 uPaletteFlare;
  uniform float uStreakAmt;

  // Speed-streak (supercruise warp blur): elongate the glow along the screen-radial
  // direction from the heading point. Returns sprite-local coords in a rotated basis
  // (length-invariant) with the along-axis compressed so the falloff reaches further
  // that way. Early-outs to identity when not cruising, so normal flight pays nothing.
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

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    if (dot(uv, uv) > 0.25) discard;
    uv = streakUv(uv);
    float radial = clamp(length(uv) * 2.0, 0.0, 1.0);
    float core = pow(1.0 - radial, 2.8);
    float mid = pow(1.0 - radial, 1.2);
    float edge = smoothstep(1.0, 0.35, radial);
    float warmBoost = smoothstep(0.72, 0.0, radial) * (0.25 + 0.75 * vWarm);
    float flareBoost = smoothstep(0.35, 0.0, radial) * vWarm;
    vec3 col = mix(vColor, uPaletteHot, warmBoost);
    col = mix(col, uPaletteFlare, flareBoost * 0.65);
    float alpha = clamp(edge * (0.45 + 0.55 * mid), 0.0, 1.0);
    vec3 emissive = col * vBrightness * (0.75 + 0.6 * core);
    gl_FragColor = vec4(emissive, alpha);
    if (gl_FragColor.a < 0.01) discard;
  }
`,lt=`
  varying vec3 vColor;
  varying float vBrightness;
  varying float vWarm;
  varying float vSaturation;
  varying vec2 vScreenDir;
  uniform vec3 uPaletteHot;
  uniform vec3 uPaletteFlare;
  uniform float uStreakAmt;

  // Speed-streak elongation (see main fragment). Identity when not cruising.
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

  // Anamorphic diffraction spikes (the cinematic "Elite Dangerous" star glints).
  // A bright horizontal streak plus a fainter vertical one, summed across the
  // sprite. Only the brightest stars (high vSaturation) earn visible spikes, so
  // faint stars stay clean pinpoints. The spike term early-outs to ~0 for dim
  // stars, keeping the added ALU off the bulk of the field.
  float diffractionSpikes(vec2 uv) {
    // Distance from each axis -> a thin glow line along that axis. abs() gives the
    // perpendicular offset; the falloff sharpens the line and fades toward the edge.
    float d = clamp(length(uv) * 2.0, 0.0, 1.0);
    float fade = 1.0 - d;            // length-wise taper to sprite edge
    float horiz = exp(-abs(uv.y) * 90.0);
    float vert = exp(-abs(uv.x) * 90.0);
    return (horiz + vert * 0.6) * fade * fade;
  }

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float rr = dot(uv, uv);
    if (rr > 0.25) discard;
    uv = streakUv(uv);
    float radial = clamp(length(uv) * 2.0, 0.0, 1.0);
    float outer = smoothstep(1.0, 0.2, radial);
    float innerCut = smoothstep(0.55, 0.0, radial);
    float halo = max(0.0, outer - innerCut);
    halo *= (0.3 + 0.7 * vWarm);
    vec3 haloColor = mix(vColor, uPaletteHot, 0.45 + 0.45 * vWarm);
    haloColor = mix(haloColor, uPaletteFlare, 0.25 + 0.25 * vWarm);
    float alpha = halo * 0.7;

    // Spikes ramp in only over the top of the brightness range (sat^3 gate) so
    // the effect is reserved for the few standout stars / the Sun.
    float spikeGate = vSaturation * vSaturation * vSaturation;
    if (spikeGate > 0.004) {
      float spikes = diffractionSpikes(uv) * spikeGate;
      // Spikes lean toward the hot/flare palette for the white-blue glint look.
      vec3 spikeColor = mix(haloColor, uPaletteFlare, 0.5);
      gl_FragColor = vec4(haloColor * vBrightness, alpha)
                   + vec4(spikeColor * vBrightness * spikes, spikes);
    } else {
      gl_FragColor = vec4(haloColor * vBrightness, alpha);
    }
    if (gl_FragColor.a < 0.01) discard;
  }
`;function ge(e){return new B({uniforms:{uPointSizeMax:{value:e?.pointSizeMax??ot},uTime:{value:0},uDtYears:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uPointSizeFloor:{value:e?.pointSizeFloor??1},uMagLimit:{value:6.5},uMagFadeRange:{value:1},uMagRef:{value:0},uFluxClampMax:{value:4},uFluxGamma:{value:.45},uPsfMaxMult:{value:3.5},uPaletteHot:{value:new G(1,.78,.56)},uPaletteFlare:{value:new G(1,.92,.75)},uStreakAmt:{value:0}},vertexShader:it,fragmentShader:e?.useHaloShader?lt:st,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function ut(){return ge({twinkleAmp:.03,twinkleFreq:.9,pointSizeFloor:1})}function ct(){return ge({useHaloShader:!0,sizeMultiplier:1.6,pointSizeMax:at,pointSizeFloor:1,twinkleAmp:.02,twinkleFreq:.55})}function ft(e){const{layers:t}=ve(e);return{createChunk(r){const o=t[r.layer],n=new ze;for(const c of r.attributes)n.setAttribute(c.name,new te(c.data,c.components));n.computeBoundingSphere();const a=r.material,u=new pe(n,a);u.frustumCulled=!0,u.raycast=()=>{},o.add(u);const s=new Map(r.attributes.map(c=>[c.name,c.components]));return{meshRef:u,updateAttribute(c,i){const l=s.get(c);l!=null&&n.setAttribute(c,new te(i,l))},setVertexCount(c){n.computeBoundingSphere()},dispose(){o.remove(u),n.dispose()}}}}}function mt(e){return ft(e)}function ht(e,t,r){const o=new pe(e.geometry,r);return o.frustumCulled=!0,o.renderOrder=1,o.raycast=()=>{},t.add(o),{mesh:o,dispose(){t.remove(o)}}}function Se(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function pt(e,t){let r=null,o=null;for(let n=0;n<e.length;n+=1){const a=e[n],u=t(a,n);u&&Se(u,r)&&(r=u,o=a.starsInChunk[u.index]??null)}return o}function vt(e){const t=e.proper??(e.hip!=null?`HIP ${e.hip}`:`Star ${e.id}`);return _e.select(Me("hyg",e.id),t,"star"),!0}function dt(e){if(e.chunks.length===0)return!1;const t=e.prepared;if(t==null)return!1;const r=pt(e.chunks,(o,n)=>e.pickInChunk(o,n,t));return r?vt(r):!1}function gt(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function St(){return 1}function xt(){return 8}var J={px:0,py:0};function yt(e){const{positions:t,velocities:r,dtYears:o,sizes:n,distancesKm:a,starCount:u,camFrustum:s,tanHalfV:c,viewpointHelioKm:i,maxDistSqKm:l,mouseX:f,mouseY:y,projectStarToScreenPx:k}=e,d=o??0,m=Math.min(u,t.length/3,n.length,a.length);let p=null;for(let S=0;S<m;S+=1){const P=S*3,w=t[P]+(r?r[P]*d:0),C=t[P+1]+(r?r[P+1]*d:0),z=t[P+2]+(r?r[P+2]*d:0);if(!tt(w,C,z,a[S]??0,i.x,i.y,i.z,l))continue;const A=w-s.position.x,I=C-s.position.y,N=z-s.position.z,E=A*s.forward.x+I*s.forward.y+N*s.forward.z;if(E<=1e-6)continue;const Y=A*s.right.x+I*s.right.y+N*s.right.z,H=A*s.up.x+I*s.up.y+N*s.up.z,X=c*s.aspect*E;if(Math.abs(Y)>X)continue;const j=c*E;if(Math.abs(H)>j)continue;const v=E,h=St(),g=xt();if(g<=0)continue;k(w,C,z,J);const x=J.px-f,M=J.py-y,b=x*x+M*M;if(b>g*g)continue;const D={index:S,distSqPx:b,depthCam:v,renderedPx:h};Se(D,p)&&(p=D)}return p}var Z=new V,Q=new V;function kt(e,t,r,o,n,a,u,s,c,i,l,f,y,k,d){const m=r.getBoundingClientRect();return yt({positions:a,velocities:k,dtYears:d,sizes:u,distancesKm:s,starCount:c,uScale:gt(m.height,o.fov*Math.PI/180),camFrustum:i,tanHalfV:l,viewpointHelioKm:f,maxDistSqKm:y,mouseX:e-m.left,mouseY:t-m.top,projectStarToScreenPx:(p,S,P,w)=>{Z.set(p,S,P),Z.applyMatrix4(n.matrixWorld),Q.copy(Z).project(o),w.px=(Q.x*.5+.5)*m.width,w.py=(-Q.y*.5+.5)*m.height}})}function Pt(e){const{cameraThree:t,pickerScratch:r,syncScratch:o}=e;Re(t,r.frustum,o.forward,o.right,o.up);const{tanHalfV:n,maxDistSqKm:a}=nt(r);return dt({chunks:e.chunks,prepared:{tanHalfV:n,maxDistSqKm:a},pickInChunk:(u,s,c)=>{const i=e.pointsMeshes[s],l=e.chunkDistancesKm[s],f=e.chunkOriginalSizes[s];return!i||!l||!f?null:kt(e.clientX,e.clientY,e.canvas,t,i,u.positions,f,l,u.starsInChunk.length,r.frustum,c.tanHalfV,r.viewpointHelioKm,c.maxDistSqKm,e.chunkVelocities[s]??null,e.dtYears)}})}function wt(e){return Pt(e)}var _={chunks:[],pointsMeshes:[],starsInView:[]};function Qt(){return _}function er(e,t){const r=ve(e),o=r.layers.starfield,{starsInViewRef:n,getStarData:a,getStatus:u}=t,s=mt(e),c=[],i=[],l=[],f=[],y=[],k=[],d=[],m=ut(),p=ct();let S=0,P=0;const w=new Map,C=new Ce,z=new Te,A=new Ae,I=rt(),N=new V,E=new V,Y=new V;function H(){for(const v of l)v.dispose();l.length=0;for(const v of c)v.dispose();c.length=0,i.length=0,f.length=0,y.length=0,k.length=0,d.length=0;for(const v of w.values())v.ref=null}function X(v){_.chunks=v,_.pointsMeshes=i,_.starsInView=n.current}function j(v){const h=_;for(let g=0;g<h.chunks.length;g+=1){const x=h.chunks[g],M=h.pointsMeshes[g];if(!(!x||!M))for(let b=0;b<x.starsInChunk.length;b+=1){const D=x.starsInChunk[b];if(!D||D.proper!==v)continue;const O=M.geometry.getAttribute("ignite");return O instanceof te?{attribute:O,index:b}:null}}return null}return{refresh(){H();const v=Ze(a,u,f);for(const h of v){y.push(new Float32Array(h.sizes));const g=Ve(h);k.push(g);const x=s.createChunk({layer:"starfield",meshName:`cosmosive-starfield-points-${h.abbr.replace(/[^a-zA-Z0-9_-]/g,"_")}`,material:m,attributes:[{name:"position",data:h.positions,components:3},{name:"size",data:h.sizes,components:1},{name:"color",data:h.colors,components:3},{name:"warm",data:h.warm,components:1},{name:"brightness",data:h.brightness,components:1},{name:"mag",data:h.mag,components:1},{name:"ignite",data:new Float32Array(h.sizes.length).fill(1),components:1},{name:"velocity",data:g,components:3}]});c.push(x);const M=x.meshRef;i.push(M),l.push(ht(M,o,p))}d.length=0;for(const h of i)d.push(h);for(const h of l)d.push(h.mesh);X(v)},advanceTime(v){S+=v,m.uniforms.uTime&&(m.uniforms.uTime.value=S),p.uniforms.uTime&&(p.uniforms.uTime.value=S);const h=(ce().jd-ue)/le;m.uniforms.uDtYears&&(m.uniforms.uDtYears.value=h),p.uniforms.uDtYears&&(p.uniforms.uDtYears.value=h);const g=4.5,x=7.5,M=.8,b=R.effectiveSpeedKmPerS,D=M*Math.max(0,Math.min(1,((b>1?Math.log10(b):0)-g)/(x-g))),O=1-Math.exp(-v/.35);P+=(D-P)*O;const ae=Math.max(P,De()*M);m.uniforms.uStreakAmt&&(m.uniforms.uStreakAmt.value=ae),p.uniforms.uStreakAmt&&(p.uniforms.uStreakAmt.value=ae);const $=Fe(),ie=1-Math.exp(-v/.7);if(m.uniforms.uMagLimit){const F=m.uniforms.uMagLimit.value;m.uniforms.uMagLimit.value=F+($.magLimit-F)*ie}if(p.uniforms.uMagLimit){const F=p.uniforms.uMagLimit.value;p.uniforms.uMagLimit.value=F+($.magLimit-F)*ie}const xe=1-Math.exp(-v/.5),se=$.ignitedStarProperNames;for(const F of se)w.has(F)||w.set(F,{value:1,ref:null});for(const[F,T]of w){const ye=se.includes(F)?6:1;T.ref===null&&(T.ref=j(F)),T.value+=(ye-T.value)*xe,T.ref!==null&&(T.ref.attribute.setX(T.ref.index,T.value),T.ref.attribute.needsUpdate=!0)}},countFrustum(){let v=0,h=0;if(d.length>0){const g=r.cameraThree;g.updateMatrixWorld(!0),C.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),z.setFromProjectionMatrix(C);for(const x of d){const M=x.geometry;M.boundingSphere||M.computeBoundingSphere();const b=M.boundingSphere;b&&(A.copy(b).applyMatrix4(x.matrixWorld),z.intersectsSphere(A)&&(v+=1))}for(const x of i)h+=x.geometry.getAttribute("position")?.count??0}return{total:d.length,visible:v,verts:h}},pickFromClick({clientX:v,clientY:h,canvas:g}){return wt({kind:"r3f",clientX:v,clientY:h,canvas:g,chunks:_.chunks,chunkDistancesKm:f,chunkOriginalSizes:y,chunkVelocities:k,dtYears:(ce().jd-ue)/le,cameraThree:r.cameraThree,pointsMeshes:i,pickerScratch:I,syncScratch:{forward:N,right:E,up:Y}})},dispose(){H(),m.dispose(),p.dispose(),_.chunks=[],_.pointsMeshes=[],_.starsInView=[]}}}var L={star1:K("#fff3a8",1),star2:K("#f5c238",1),star3:K("#e07b1a",1),star4:K("#a8380c",1)};function q(e){return new G(e[0],e[1],e[2])}function Mt(){return{cool:q(L.star4),warm:q(L.star3),hot:q(L.star2),flare:q(L.star1)}}var bt=`
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
  float value = 0.0;
  float amp = 0.5;
  float freq = 1.0;
  for (int i = 0; i < 3; i += 1) {
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
`;function tr(e){return e==null||Array.isArray(e)||!(e instanceof B)?!1:e.userData.cosmosiveSunPhotosphere===!0}function rr(e,t){const r=Mt(),o={cool:e?.cool??r.cool,warm:e?.warm??r.warm,hot:e?.hot??r.hot,flare:e?.flare??r.flare},n={uTime:{value:0},uBandStrength:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:o.cool.clone()},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},a=new B({uniforms:n,vertexShader:bt,fragmentShader:Ft,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var Ct=`
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

float fbm2(vec3 p) {
  return noise3(p) * 0.65 + noise3(p * 2.1) * 0.35;
}

void main() {
  vec3 fragToCam = normalize(cameraPosition - vWorldPos);
  float cosA = clamp(dot(normalize(vNormalDir), fragToCam), -1.0, 1.0);
  float sinA = sqrt(max(0.0, 1.0 - cosA * cosA));
  float b = sinA * 2.0;
  float halo = 1.0 - smoothstep(1.0, 2.0, b);
  halo = pow(halo, 1.4);
  vec3 dir = normalize(vLocalPos);
  float streak = fbm2(dir * 4.0 + vec3(uTime * 0.05));
  float spike = smoothstep(0.55, 0.92, streak) * halo;
  float intensity = (halo * 0.95 + spike * 0.5) * uIntensity;
  vec3 col = mix(uPaletteWarm, uPaletteHot, halo);
  col = mix(col, uPaletteFlare, spike);
  gl_FragColor = vec4(col * intensity, intensity);
}
`;function ee(e){return new G(e[0],e[1],e[2])}function At(){return{warm:ee(L.star3),hot:ee(L.star2),flare:ee(L.star1)}}function nr(e){return e==null||Array.isArray(e)||!(e instanceof B)?!1:e.userData.cosmosiveSunCorona===!0}function or(e){const t=At(),r={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},o={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:r.warm.clone()},uPaletteHot:{value:r.hot.clone()},uPaletteFlare:{value:r.flare.clone()}},n=new B({uniforms:o,vertexShader:Ct,fragmentShader:zt,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return n.userData.cosmosiveSunCorona=!0,n}export{Bt as C,Ht as S,Vt as T,Ut as _,L as a,Ot as b,Xt as c,Jt as d,jt as f,Gt as g,qt as h,tr as i,$t as l,K as m,nr as n,er as o,Yt as p,rr as r,Qt as s,or as t,Zt as u,We as v,Nt as w,R as x,Kt as y};
