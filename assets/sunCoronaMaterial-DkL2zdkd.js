import{N as ve,U as te}from"./src-DrOOIpip.js";import{c as de,j as ge,nt as Se,p as xe}from"./sceneRuntimeTypes-BlBRWH2H.js";import{t as ye}from"./skyLightStore-BfXJGTVl.js";import{Dt as W,G as Pe,_ as K,d as Q,f as ke,ht as we,k as Me,mt as N,rt as le}from"./three-vendor-DtGC8FGl.js";import{Vn as be,dn as Fe,it as Ce}from"./index-BfmW9_8e.js";import{n as ze,r as Ae}from"./combatFrustum-D5yrAg96.js";import{t as ue}from"./r3fHostExtras-Cgo39uRL.js";var re=new Map;function At(e,t){re.set(e,t)}function Tt(e){re.delete(e)}function _t(e,t,r){let n=null;for(const o of re.values()){const a=o(e,t,r);a!=null&&Number.isFinite(a)&&a>=0&&(n==null||a<n)&&(n=a)}return n}var I={effectiveSpeedKmPerS:0,proximityThrottle:1,nearestBodySurfaceDistSu:null,viewpointScenePosX:0,viewpointScenePosY:0,viewpointScenePosZ:0};function It(e){e.effectiveSpeedKmPerS!==void 0&&(I.effectiveSpeedKmPerS=e.effectiveSpeedKmPerS),e.proximityThrottle!==void 0&&(I.proximityThrottle=e.proximityThrottle),e.nearestBodySurfaceDistSu!==void 0&&(I.nearestBodySurfaceDistSu=e.nearestBodySurfaceDistSu),e.viewpointScenePosX!==void 0&&(I.viewpointScenePosX=e.viewpointScenePosX),e.viewpointScenePosY!==void 0&&(I.viewpointScenePosY=e.viewpointScenePosY),e.viewpointScenePosZ!==void 0&&(I.viewpointScenePosZ=e.viewpointScenePosZ)}function Te(e,t,r){return r&&t&&ve(e,t.position.x,t.position.y,t.position.z),e}function Rt(e,t,r){if(r&&t){const n=e;n.x+=t.position.x,n.y+=t.position.y,n.z+=t.position.z}return e}function Dt(e,t){return e.getWorldPosition(t),Te(t,Ae.current,!0),t}function Lt(e){if(typeof e!="string"||!/^#?[0-9a-fA-F]{6}$/.test(e))return[0,0,0];const t=e.replace(/^#/,""),r=parseInt(t,16);return Number.isFinite(r)?[Math.floor(r/65536)%256,Math.floor(r/256)%256,r%256]:[0,0,0]}function _e(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function Et(e){return Math.max(0,Math.min(255,Math.round(e)))}function Wt(e,t,r){return[e[0]+(t[0]-e[0])*r,e[1]+(t[1]-e[1])*r,e[2]+(t[2]-e[2])*r]}function O(e,t=1,r=1){const[n,o,a]=_e(e),l=Math.max(.15,Math.min(1,t));return[n*l,o*l,a*l,r]}var Ie=1,Re=-25,De=500,Le=.01;function ee(e,t){let r=t;for(;e[r]!==r;)r=e[r];let n=t;for(;n!==r;){const o=e[n];e[n]=r,n=o}return r}function Ee(e,t,r){const n=ee(e,t),o=ee(e,r);n!==o&&(e[n]=o)}function ae(e,t,r){return`${e},${t},${r}`}function Nt(e,t){const r=e.length,n=Array.from({length:r},(i,s)=>s),o=t,a=new Map;for(let i=0;i<r;i+=1){const s=e[i],h=ae(Math.floor(s.x/o),Math.floor(s.y/o),Math.floor(s.z/o));a.has(h)||a.set(h,[]),a.get(h).push(i)}const l=t*t;for(let i=0;i<r;i+=1){const s=e[i],h=Math.floor(s.x/o),y=Math.floor(s.y/o),v=Math.floor(s.z/o);for(let p=-1;p<=1;p+=1)for(let d=-1;d<=1;d+=1)for(let x=-1;x<=1;x+=1){const P=ae(h+p,y+d,v+x),w=a.get(P);if(w)for(const b of w){if(b<=i)continue;const F=e[b],C=F.x-s.x,z=F.y-s.y,D=F.z-s.z;C*C+z*z+D*D<l&&Ee(n,i,b)}}}const c=new Map;for(let i=0;i<r;i+=1){const s=ee(n,i);c.has(s)||c.set(s,[]),c.get(s).push(i)}const u=[];for(let i=0;i<r;i+=1)u.push(void 0);for(const i of c.values())i.length<=1||(i.sort((s,h)=>s-h),i.forEach((s,h)=>{h>0&&(u[s]={x:0,y:h*Re})}));return u}function We(){const e=[];for(let t=0;t<De;t+=1){const r=ge(t*.7%360,t*.3%180-90);r!=null&&e.push(r)}return e}function Ne(){const e=We(),t=e.length,r=de,n=new Float32Array(t*3);return e.forEach((o,a)=>{n[a*3]=o.x*r,n[a*3+1]=o.y*r,n[a*3+2]=o.z*r}),{abbr:"_bootstrap",positions:n,sizes:new Float32Array(t).fill(Ie),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(Le),brightness:new Float32Array(t).fill(1),mag:new Float32Array(t).fill(-1/0),starsInChunk:[]}}var Be={raMin:0,raMax:360,decMin:-90,decMax:90},Bt={chunks:[],namedStarsInView:[]};function Vt(e,t){return e===0&&t!=="success"}function ce(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[Ne()]:[]}function Ot(e,t){const r=ce(e,t),n=r.slice(0,3).map(o=>o.abbr).join(",");return r.length===0?{syntheticKind:"empty",chunkAbbrevSample:n}:r.length===1&&r[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:n}:r.some(o=>o.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:n}:{syntheticKind:"real",chunkAbbrevSample:n}}function ie(e,t){return t.current===e.current}function Ht(e,t,r,n,o){e.onerror=a=>{ie(t,r)||(n("error"),o(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{ie(t,r)||(n("error"),o("Starfield worker message error"))}}function se(e){const t=e.indexOf("__part");return t===-1?e:e.slice(0,t)}function L(e,t){const r=new Float32Array(e.length+t.length);return r.set(e,0),r.set(t,e.length),r}function Ve(e,t){return{abbr:e.abbr,positions:L(e.positions,t.positions),sizes:L(e.sizes,t.sizes),colors:L(e.colors,t.colors),warm:L(e.warm,t.warm),brightness:L(e.brightness,t.brightness),mag:L(e.mag,t.mag),starsInChunk:[...e.starsInChunk,...t.starsInChunk]}}function Oe(e,t){const r=new Map;e.chunks.forEach((o,a)=>r.set(se(o.abbr),a));const n=[...e.chunks];for(const o of t.chunks){const a=se(o.abbr),l=r.get(a);if(l!=null){const c=n[l];c&&(n[l]=Ve(c,o))}else r.set(a,n.length),n.push(o)}return{chunks:n,namedStarsInView:[...e.namedStarsInView,...t.namedStarsInView]}}function He(e,t,r,n,o,a,l,c="replace"){const{runId:u,...i}=e;u===t.current&&(r.current=u,c==="append"?(n.current=[...n.current,...i.starsInView],o(s=>Oe(s,{chunks:i.chunks,namedStarsInView:i.namedStarsInView}))):(n.current=i.starsInView,o({chunks:i.chunks,namedStarsInView:i.namedStarsInView})),a("ready"),l(null))}function Kt(e,t,r,n,o,a={}){const l=a.mode??"replace";e.processStarfield({runId:t,catalog:r,maxDistanceLevel:n,bounds:Be,raInHours:!1,maxPerChunk:a.maxPerChunk}).then(c=>{He(c,o.runIdRef,o.lastSuccessfulRunIdRef,o.starsInViewRef,o.setStarData,o.setStarfieldStatus,o.setErrorMessage,l),a.onComplete?.()}).catch(c=>{t===o.runIdRef.current&&(o.setStarfieldStatus("error"),o.setErrorMessage(c instanceof Error?c.message:"Starfield worker failed"))})}function Ke(e,t){t.length=0;for(const r of e){const n=new Float32Array(r.starsInChunk.length);for(let o=0;o<r.starsInChunk.length;o+=1){const a=r.starsInChunk[o];n[o]=a?Fe(a)*te:0}t.push(n)}}function Ue(e,t,r){const n=ce(e(),t());return Ke(n,r),n}var qe=500*te;function Ge(e,t,r,n){const o=Math.sqrt(e*e+t*t+r*r);if(o<=0||!Number.isFinite(o)){n.x=0,n.y=0,n.z=0;return}const a=xe(o)*te/o;n.x=e*a,n.y=t*a,n.z=r*a}function Xe(e,t,r,n,o,a,l,c){const u=Math.sqrt(e*e+t*t+r*r);if(u<=0||!Number.isFinite(u)||!Number.isFinite(n)){const v=-o,p=-a,d=-l;return v*v+p*p+d*d<=c}const i=n/u,s=e*i-o,h=t*i-a,y=r*i-l;return s*s+h*h+y*y<=c}function je(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},viewpointHelioKm:{x:0,y:0,z:0}}}function $e(e){const t=Math.tan(e.frustum.fovYRadians*.5);return Ge(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.viewpointHelioKm),{tanHalfV:t,maxDistSqKm:qe**2}}var Ye=256,Ze=320,Je=`
  attribute float size;
  attribute vec3 color;
  attribute float brightness;
  attribute float warm;
  attribute float mag;
  attribute float ignite;
  varying vec3 vColor;
  varying float vBrightness;
  varying float vWarm;
  varying float vSeed;
  varying float vSaturation;
  varying vec2 vScreenDir;
  uniform float uPointSizeMax;
  uniform float uTime;
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
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vColor = color;
    vWarm = warm;
    vSeed = hash13(position * 0.01 + vec3(warm, brightness, size));
    float twinkle = 1.0 + uTwinkleAmp * sin(uTime * (uTwinkleFreq + vSeed * 0.85) + vSeed * 6.2831);

    // Apparent magnitude from current camera (per-vertex catalog mag is Sol-pov apparent mag;
    // rescale by the camera/Sol distance ratio): m_app = mag + 5 * log10(d_cam / d_sol).
    float dCam = length(mvPosition.xyz);
    float dSol = max(length(position), 1.0);
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
`,Qe=`
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
`,et=`
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
`;function fe(e){return new N({uniforms:{uPointSizeMax:{value:e?.pointSizeMax??Ye},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uPointSizeFloor:{value:e?.pointSizeFloor??1},uMagLimit:{value:6.5},uMagFadeRange:{value:1},uMagRef:{value:0},uFluxClampMax:{value:4},uFluxGamma:{value:.45},uPsfMaxMult:{value:3.5},uPaletteHot:{value:new K(1,.78,.56)},uPaletteFlare:{value:new K(1,.92,.75)},uStreakAmt:{value:0}},vertexShader:Je,fragmentShader:e?.useHaloShader?et:Qe,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function tt(){return fe({twinkleAmp:.03,twinkleFreq:.9,pointSizeFloor:1})}function rt(){return fe({useHaloShader:!0,sizeMultiplier:1.6,pointSizeMax:Ze,pointSizeFloor:1,twinkleAmp:.02,twinkleFreq:.55})}function nt(e){const{layers:t}=ue(e);return{createChunk(r){const n=t[r.layer],o=new ke;for(const u of r.attributes)o.setAttribute(u.name,new Q(u.data,u.components));o.computeBoundingSphere();const a=r.material,l=new le(o,a);l.frustumCulled=!0,l.raycast=()=>{},n.add(l);const c=new Map(r.attributes.map(u=>[u.name,u.components]));return{meshRef:l,updateAttribute(u,i){const s=c.get(u);s!=null&&o.setAttribute(u,new Q(i,s))},setVertexCount(u){o.computeBoundingSphere()},dispose(){n.remove(l),o.dispose()}}}}}function ot(e){return nt(e)}function at(e,t,r){const n=new le(e.geometry,r);return n.frustumCulled=!0,n.renderOrder=1,n.raycast=()=>{},t.add(n),{mesh:n,dispose(){t.remove(n)}}}function me(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function it(e,t){let r=null,n=null;for(let o=0;o<e.length;o+=1){const a=e[o],l=t(a,o);l&&me(l,r)&&(r=l,n=a.starsInChunk[l.index]??null)}return n}function st(e){const t=e.proper??(e.hip!=null?`HIP ${e.hip}`:`Star ${e.id}`);return be.select(Se("hyg",e.id),t,"star"),!0}function lt(e){if(e.chunks.length===0)return!1;const t=e.prepared;if(t==null)return!1;const r=it(e.chunks,(n,o)=>e.pickInChunk(n,o,t));return r?st(r):!1}function ut(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function ct(){return 1}function ft(){return 8}var $={px:0,py:0};function mt(e){const{positions:t,sizes:r,distancesKm:n,starCount:o,camFrustum:a,tanHalfV:l,viewpointHelioKm:c,maxDistSqKm:u,mouseX:i,mouseY:s,projectStarToScreenPx:h}=e,y=Math.min(o,t.length/3,r.length,n.length);let v=null;for(let p=0;p<y;p+=1){const d=p*3,x=t[d],P=t[d+1],w=t[d+2];if(!Xe(x,P,w,n[p]??0,c.x,c.y,c.z,u))continue;const b=x-a.position.x,F=P-a.position.y,C=w-a.position.z,z=b*a.forward.x+F*a.forward.y+C*a.forward.z;if(z<=1e-6)continue;const D=b*a.right.x+F*a.right.y+C*a.right.z,U=b*a.up.x+F*a.up.y+C*a.up.z,q=l*a.aspect*z;if(Math.abs(D)>q)continue;const B=l*z;if(Math.abs(U)>B)continue;const G=z,X=ct(),m=ft();if(m<=0)continue;h(x,P,w,$);const f=$.px-i,g=$.py-s,S=f*f+g*g;if(S>m*m)continue;const k={index:p,distSqPx:S,depthCam:G,renderedPx:X};me(k,v)&&(v=k)}return v}var Y=new W,Z=new W;function ht(e,t,r,n,o,a,l,c,u,i,s,h,y){const v=r.getBoundingClientRect();return mt({positions:a,sizes:l,distancesKm:c,starCount:u,uScale:ut(v.height,n.fov*Math.PI/180),camFrustum:i,tanHalfV:s,viewpointHelioKm:h,maxDistSqKm:y,mouseX:e-v.left,mouseY:t-v.top,projectStarToScreenPx:(p,d,x,P)=>{Y.set(p,d,x),Y.applyMatrix4(o.matrixWorld),Z.copy(Y).project(n),P.px=(Z.x*.5+.5)*v.width,P.py=(-Z.y*.5+.5)*v.height}})}function pt(e){const{cameraThree:t,pickerScratch:r,syncScratch:n}=e;ze(t,r.frustum,n.forward,n.right,n.up);const{tanHalfV:o,maxDistSqKm:a}=$e(r);return lt({chunks:e.chunks,prepared:{tanHalfV:o,maxDistSqKm:a},pickInChunk:(l,c,u)=>{const i=e.pointsMeshes[c],s=e.chunkDistancesKm[c],h=e.chunkOriginalSizes[c];return!i||!s||!h?null:ht(e.clientX,e.clientY,e.canvas,t,i,l.positions,h,s,l.starsInChunk.length,r.frustum,u.tanHalfV,r.viewpointHelioKm,u.maxDistSqKm)}})}function vt(e){return pt(e)}var _={chunks:[],pointsMeshes:[],starsInView:[]};function Ut(){return _}function qt(e,t){const r=ue(e),n=r.layers.starfield,{starsInViewRef:o,getStarData:a,getStatus:l}=t,c=ot(e),u=[],i=[],s=[],h=[],y=[],v=[],p=tt(),d=rt();let x=0,P=0;const w=new Map,b=new Pe,F=new Me,C=new we,z=je(),D=new W,U=new W,q=new W;function B(){for(const m of s)m.dispose();s.length=0;for(const m of u)m.dispose();u.length=0,i.length=0,h.length=0,y.length=0,v.length=0;for(const m of w.values())m.ref=null}function G(m){_.chunks=m,_.pointsMeshes=i,_.starsInView=o.current}function X(m){const f=_;for(let g=0;g<f.chunks.length;g+=1){const S=f.chunks[g],k=f.pointsMeshes[g];if(!(!S||!k))for(let A=0;A<S.starsInChunk.length;A+=1){const V=S.starsInChunk[A];if(!V||V.proper!==m)continue;const E=k.geometry.getAttribute("ignite");return E instanceof Q?{attribute:E,index:A}:null}}return null}return{refresh(){B();const m=Ue(a,l,h);for(const f of m){y.push(new Float32Array(f.sizes));const g=c.createChunk({layer:"starfield",meshName:`cosmosive-starfield-points-${f.abbr.replace(/[^a-zA-Z0-9_-]/g,"_")}`,material:p,attributes:[{name:"position",data:f.positions,components:3},{name:"size",data:f.sizes,components:1},{name:"color",data:f.colors,components:3},{name:"warm",data:f.warm,components:1},{name:"brightness",data:f.brightness,components:1},{name:"mag",data:f.mag,components:1},{name:"ignite",data:new Float32Array(f.sizes.length).fill(1),components:1}]});u.push(g);const S=g.meshRef;i.push(S),s.push(at(S,n,d))}v.length=0;for(const f of i)v.push(f);for(const f of s)v.push(f.mesh);G(m)},advanceTime(m){x+=m,p.uniforms.uTime&&(p.uniforms.uTime.value=x),d.uniforms.uTime&&(d.uniforms.uTime.value=x);const f=4.5,g=7.5,S=.8,k=I.effectiveSpeedKmPerS,A=S*Math.max(0,Math.min(1,((k>1?Math.log10(k):0)-f)/(g-f))),V=1-Math.exp(-m/.35);P+=(A-P)*V;const E=Math.max(P,Ce()*S);p.uniforms.uStreakAmt&&(p.uniforms.uStreakAmt.value=E),d.uniforms.uStreakAmt&&(d.uniforms.uStreakAmt.value=E);const j=ye(),ne=1-Math.exp(-m/.7);if(p.uniforms.uMagLimit){const M=p.uniforms.uMagLimit.value;p.uniforms.uMagLimit.value=M+(j.magLimit-M)*ne}if(d.uniforms.uMagLimit){const M=d.uniforms.uMagLimit.value;d.uniforms.uMagLimit.value=M+(j.magLimit-M)*ne}const he=1-Math.exp(-m/.5),oe=j.ignitedStarProperNames;for(const M of oe)w.has(M)||w.set(M,{value:1,ref:null});for(const[M,T]of w){const pe=oe.includes(M)?6:1;T.ref===null&&(T.ref=X(M)),T.value+=(pe-T.value)*he,T.ref!==null&&(T.ref.attribute.setX(T.ref.index,T.value),T.ref.attribute.needsUpdate=!0)}},countFrustum(){let m=0,f=0;if(v.length>0){const g=r.cameraThree;g.updateMatrixWorld(!0),b.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),F.setFromProjectionMatrix(b);for(const S of v){const k=S.geometry;k.boundingSphere||k.computeBoundingSphere();const A=k.boundingSphere;A&&(C.copy(A).applyMatrix4(S.matrixWorld),F.intersectsSphere(C)&&(m+=1))}for(const S of i)f+=S.geometry.getAttribute("position")?.count??0}return{total:v.length,visible:m,verts:f}},pickFromClick({clientX:m,clientY:f,canvas:g}){return vt({kind:"r3f",clientX:m,clientY:f,canvas:g,chunks:_.chunks,chunkDistancesKm:h,chunkOriginalSizes:y,cameraThree:r.cameraThree,pointsMeshes:i,pickerScratch:z,syncScratch:{forward:D,right:U,up:q}})},dispose(){B(),p.dispose(),d.dispose(),_.chunks=[],_.pointsMeshes=[],_.starsInView=[]}}}var R={star1:O("#fff3a8",1),star2:O("#f5c238",1),star3:O("#e07b1a",1),star4:O("#a8380c",1)};function H(e){return new K(e[0],e[1],e[2])}function dt(){return{cool:H(R.star4),warm:H(R.star3),hot:H(R.star2),flare:H(R.star1)}}var gt=`
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
`,St=`
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
`;function Gt(e){return e==null||Array.isArray(e)||!(e instanceof N)?!1:e.userData.cosmosiveSunPhotosphere===!0}function Xt(e,t){const r=dt(),n={cool:e?.cool??r.cool,warm:e?.warm??r.warm,hot:e?.hot??r.hot,flare:e?.flare??r.flare},o={uTime:{value:0},uBandStrength:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:n.cool.clone()},uPaletteWarm:{value:n.warm.clone()},uPaletteHot:{value:n.hot.clone()},uPaletteFlare:{value:n.flare.clone()}},a=new N({uniforms:o,vertexShader:gt,fragmentShader:St,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var xt=`
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
`;function J(e){return new K(e[0],e[1],e[2])}function Pt(){return{warm:J(R.star3),hot:J(R.star2),flare:J(R.star1)}}function jt(e){return e==null||Array.isArray(e)||!(e instanceof N)?!1:e.userData.cosmosiveSunCorona===!0}function $t(e){const t=Pt(),r={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},n={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:r.warm.clone()},uPaletteHot:{value:r.hot.clone()},uPaletteFlare:{value:r.flare.clone()}},o=new N({uniforms:n,vertexShader:xt,fragmentShader:yt,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return o.userData.cosmosiveSunCorona=!0,o}export{_t as C,It as S,Tt as T,Lt as _,R as a,Rt as b,Bt as c,Ht as d,Vt as f,Wt as g,Et as h,Gt as i,Ot as l,O as m,jt as n,qt as o,Nt as p,Xt as r,Ut as s,$t as t,Kt as u,_e as v,At as w,I as x,Dt as y};
