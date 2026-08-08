import{n as Ee}from"./state-data-vendor-otd9VOC3.js";import{t as Le}from"./queryClient-BDcZdLSf.js";import{p as K}from"./astro-B7v6zzKN.js";import{n as ae}from"./scenePrefsStore-B2dFbGeV.js";import{t as De}from"./cameraFrustum-qg0AO6XP.js";import{n as ge}from"./manifest.generated-CQNSHp80.js";import{t as Pe}from"./publicUrl-q_vWBQr4.js";import"./state-CCjXpPQz.js";import{d as Te,h as ve,m as Ie,n as Ne}from"./activeOriginScenePos-fWsKghjt.js";import{t as G}from"./clamp01-C0YE5yT6.js";import{n as be,r as Oe,t as Ge}from"./galaxyMorphology-mpcJJerD.js";import{A as j,G as Se,S as ee,St as C,W as ke,dt as We,ft as Ue,h as ze,lt as Ae,pt as He,rt as te,t as Ve,v as N,xt as qe,z as re}from"./three-vendor-BY42-AlS.js";import{t as Ye}from"./r3fHostExtras-CS8xlzvG.js";import{t as je}from"./createMountComponent-Bd02uS7P.js";import{n as ne,t as Ke}from"./deepSkyCatalogBridge-CrBZQ3Pw.js";import{t as Ze}from"./combatFrustum-CH9gIfLq.js";import{t as Je}from"./shaderNoiseHelpers-DYuLfImQ.js";import{n as $e,r as Xe}from"./galaxyVolumeActivations-DjDa8t_c.js";var Qe={colorBulge:[1.4,1.05,.55],colorArms:[.55,.75,1.2],colorDust:[.08,.05,.04],bulgeStrength:1.4,bulgeRadiusRatio:.2,armCount:2,armWinding:4.5,armContrast:2.8,dustStrength:1,intensity:1},xe={NGC0224:{colorBulge:[1.6,1.15,.65],colorArms:[.65,.85,1.3],colorDust:[.1,.06,.04],bulgeStrength:1.7,bulgeRadiusRatio:.22,armCount:2,armWinding:5,armContrast:3.2,dustStrength:1.3,intensity:1.1},NGC0598:{colorBulge:[1.3,1,.6],colorArms:[.7,.9,1.35],colorDust:[.08,.06,.05],bulgeStrength:1,bulgeRadiusRatio:.12,armCount:3,armWinding:3.6,armContrast:2.2,dustStrength:.85,intensity:1},NGC5457:{colorBulge:[1.45,1.05,.6],colorArms:[.65,.9,1.35],colorDust:[.08,.06,.05],bulgeStrength:1.2,bulgeRadiusRatio:.15,armCount:4,armWinding:4,armContrast:2.6,dustStrength:.95,intensity:1.05},NGC3031:{colorBulge:[1.55,1.1,.6],colorArms:[.6,.8,1.25],colorDust:[.09,.06,.05],bulgeStrength:1.6,bulgeRadiusRatio:.22,armCount:2,armWinding:5.5,armContrast:3,dustStrength:1,intensity:1.05},NGC5128:{colorBulge:[1.45,.85,.7],colorArms:[.85,.7,.6],colorDust:[.04,.03,.03],bulgeStrength:2,bulgeRadiusRatio:.4,armCount:0,armWinding:0,armContrast:1,dustStrength:2,intensity:1},NGC0292:{colorBulge:[1,.9,1.1],colorArms:[.9,.6,.95],colorDust:[.06,.05,.06],bulgeStrength:.6,bulgeRadiusRatio:.35,armCount:0,armWinding:0,armContrast:1,dustStrength:.4,intensity:.9}};function et(e){return xe[e.catalogId]??Qe}function tt(e){return Object.hasOwn(xe,e)}function ye(e){let t=17;for(let a=0;a<e.length;a+=1)t=(t*31+e.charCodeAt(a))%104729;return t/104729}function p(e,t){const a=Math.sin((e+t)*43758.5453123)*12589.317;return a-Math.floor(a)}var at={hueA:.97,hueB:.48,hueJitter:.04,satRange:[.82,.85],lightBRange:[.48,.62],lightA:.06,lightCRange:[.72,.86],intensityScale:1.55},rt={hueA:.52,hueB:.88,hueJitter:.05,satRange:[.78,.85],lightBRange:[.55,.7],lightA:.08,lightCRange:[.78,.92],intensityScale:1.85},nt={hueA:.78,hueB:.32,hueJitter:.05,satRange:[.72,.92],lightBRange:[.46,.6],lightA:.05,lightCRange:[.7,.82],intensityScale:1.7},ot={hueA:.62,hueB:.58,hueJitter:.03,satRange:[.6,.82],lightBRange:[.46,.6],lightA:.07,lightCRange:[.78,.9],intensityScale:1.25},it={hueA:.07,hueB:.08,hueJitter:.02,satRange:[.35,.55],lightBRange:[.28,.38],lightA:.02,lightCRange:[.55,.7],intensityScale:.65},lt={hueA:.94,hueB:.6,hueJitter:.05,satRange:[.78,.84],lightBRange:[.5,.66],lightA:.07,lightCRange:[.82,.95],intensityScale:1.75};function Ce(e,t){const a=e.toUpperCase();return a==="DRKN"||a==="DN"?"dark":a==="PN"||t==="planetary_nebula"?"planetary":a==="SNR"?"snr":a==="RFN"||a==="REFN"?"reflection":a==="CL+N"||a==="CLN"||a==="OCL+N"?"cluster_neb":"emission"}var ut={emission:at,planetary:rt,snr:nt,reflection:ot,dark:it,cluster_neb:lt};function st(e,t){return ut[Ce(e,t)]}function H(e,t,a){const r=G(t),u=G(a);if(r===0)return[u,u,u];const n=u<.5?u*(1+r):u+r-u*r,o=2*u-n,s=(e%1+1)%1,d=[s+1/3,s,s-1/3],c=[0,0,0];for(let h=0;h<3;h+=1){let i=d[h];i<0&&(i+=1),i>1&&(i-=1),i<1/6?c[h]=o+(n-o)*6*i:i<1/2?c[h]=n:i<2/3?c[h]=o+(n-o)*(2/3-i)*6:c[h]=o}return[c[0],c[1],c[2]]}function Z(e,t){return e[0]+(e[1]-e[0])*G(t)}function ct(e,t){const a=st(e.openNgcTypeRaw??"",e.type),r=(p(t,.211)-.5)*2*a.hueJitter,u=(p(t,.379)-.5)*2*a.hueJitter,n=p(t,.557),o=p(t,.733),s=p(t,.911),d=p(t,.143)>.55,c=d?a.hueB:a.hueA,h=d?a.hueA:a.hueB,i=c+r,b=h+u,f=Z(a.satRange,n),F=Z(a.lightBRange,o),y=Z(a.lightCRange,s);return{colorA:H(i,f*.4,a.lightA),colorB:H(i,f,F),colorC:H(b,Math.min(1,f+.05),y),intensity:a.intensityScale}}function w(e,t,a){return e+(t-e)*a}function dt(e){switch(e){case"elliptical":return{bulgeStrength:[1.8,2.6],bulgeRadiusRatio:[.45,.65],armCount:[0,0],armWinding:[0,0],armContrast:[1,1],dustStrength:[.1,.4],intensity:[.9,1.05]};case"irregular":return{bulgeStrength:[.5,.9],bulgeRadiusRatio:[.25,.4],armCount:[0,0],armWinding:[0,0],armContrast:[1,1],dustStrength:[.3,.7],intensity:[.85,1]};case"lenticular":return{bulgeStrength:[1.6,2.2],bulgeRadiusRatio:[.32,.45],armCount:[0,0],armWinding:[0,0],armContrast:[1,1],dustStrength:[1.2,2],intensity:[.95,1.1]};case"barred_spiral":return{bulgeStrength:[1.2,1.7],bulgeRadiusRatio:[.16,.24],armCount:[2,4],armWinding:[3.5,5.5],armContrast:[2,3.5],dustStrength:[.85,1.3],intensity:[1,1.1]};default:return{bulgeStrength:[1,1.6],bulgeRadiusRatio:[.12,.22],armCount:[2,4],armWinding:[3.5,5.5],armContrast:[2,3.5],dustStrength:[.8,1.3],intensity:[1,1.1]}}}function mt(e){switch(e){case"elliptical":case"lenticular":return{bulgeHue:[.04,.09],bulgeSat:[.45,.7],bulgeLight:.6,armHue:[.05,.1],armSat:[.35,.55],armLight:.5,dustHue:[.04,.08],dustLight:[.02,.04]};case"irregular":return{bulgeHue:[.5,.62],bulgeSat:[.3,.55],bulgeLight:.6,armHue:[.55,.66],armSat:[.5,.78],armLight:.62,dustHue:[.06,.1],dustLight:[.03,.05]};default:return{bulgeHue:[.07,.13],bulgeSat:[.55,.8],bulgeLight:.62,armHue:[.5,.64],armSat:[.55,.85],armLight:.6,dustHue:[.04,.09],dustLight:[.03,.06]}}}function ht(e,t){const[a,r]=e;return a===r?a:a+Math.floor(t*(r-a+1))}function ft(e,t){const a=be(e),r=a?.kind??"spiral",u=G(a?.armTightness??.5),n=dt(r),o=mt(r),s=r==="spiral"||r==="barred_spiral",d=H(w(o.bulgeHue[0],o.bulgeHue[1],p(t,.131)),w(o.bulgeSat[0],o.bulgeSat[1],p(t,.197)),o.bulgeLight),c=s?G(u*.7+p(t,.271)*.3):p(t,.271),h=H(w(o.armHue[0],o.armHue[1],c),w(o.armSat[0],o.armSat[1],p(t,.331)),o.armLight),i=H(w(o.dustHue[0],o.dustHue[1],p(t,.409)),.4,w(o.dustLight[0],o.dustLight[1],p(t,.467))),b=s?G((1-u)*.75+p(t,.701)*.25):p(t,.521);return{colorBulge:d,colorArms:h,colorDust:i,bulgeStrength:w(n.bulgeStrength[0],n.bulgeStrength[1],b),bulgeRadiusRatio:w(n.bulgeRadiusRatio[0],n.bulgeRadiusRatio[1],b),armCount:ht(n.armCount,p(t,.643)),armWinding:w(n.armWinding[0],n.armWinding[1],s?b:p(t,.709)),armContrast:w(n.armContrast[0],n.armContrast[1],p(t,.773)),dustStrength:w(n.dustStrength[0],n.dustStrength[1],p(t,.829)),intensity:w(n.intensity[0],n.intensity[1],p(t,.883)),bar:r==="barred_spiral"?w(.6,1,p(t,.941)):0}}var pt=18,oe=1.4,gt=.6;function vt(e){if(e==null||!Number.isFinite(e)||e<=0)return 1;const t=(e-pt)/7,a=oe+-.7999999999999999*t;return K(a,gt,oe)}var bt={emission:0,planetary:1,snr:2,dark:3,cluster_neb:4,reflection:5},St={emission:{anisoY:[.6,1],anisoZ:[.55,1],warp:[.25,.5],freq:[2.6,3.4],shell:null,clump:[.3,.45],bipolar:null},cluster_neb:{anisoY:[.65,1],anisoZ:[.6,1],warp:[.3,.55],freq:[2.8,3.6],shell:null,clump:[.28,.42],bipolar:null},planetary:{anisoY:[.7,1],anisoZ:[.7,1],warp:[.1,.25],freq:[3,4],shell:{mid:[.45,.7],thick:[.1,.22]},clump:[.22,.35],bipolar:[.4,.8]},snr:{anisoY:[.7,1],anisoZ:[.7,1],warp:[.15,.35],freq:[3.4,4.4],shell:{mid:[.7,.9],thick:[.06,.14]},clump:[.12,.22],bipolar:null},dark:{anisoY:[.5,1],anisoZ:[.5,1],warp:[.35,.6],freq:[2.4,3.2],shell:null,clump:[.1,.2],bipolar:null},reflection:{anisoY:[.7,1],anisoZ:[.7,1],warp:[.1,.2],freq:[2,3],shell:null,clump:[.32,.45],bipolar:null}},At=.061,xt=.173,yt=.289,Ct=.347,Rt=.431,_t=.523,Mt=.617,wt=.701,Ft=.829,Bt=.937,Et=.097,Lt=.251,J=32;function D(e,t,a){return a[0]+(a[1]-a[0])*p(e,t)}function Dt(e,t){const a=Ce(e.openNgcTypeRaw??"",e.type),r=St[a],u=[1,e.majAxArcmin!=null&&e.minAxArcmin!=null&&e.majAxArcmin>0?K(e.minAxArcmin/e.majAxArcmin,.3,1):Math.max(.3,D(t,At,r.anisoY)),Math.max(.3,D(t,xt,r.anisoZ))],n=[p(t,Ct)*J,p(t,Rt)*J,p(t,_t)*J],o=e.positionAngleDeg!=null&&Number.isFinite(e.positionAngleDeg)?e.positionAngleDeg%180*Math.PI/180:p(t,yt)*Math.PI*2;return{mode:bt[a],morphScale:u,positionAngleRad:o,seedOffset:n,warp:D(t,Mt,r.warp),freq:D(t,wt,r.freq),shellMid:r.shell===null?0:D(t,Bt,r.shell.mid),shellThick:r.shell===null?0:D(t,Et,r.shell.thick),clump:D(t,Ft,r.clump),bipolar:r.bipolar===null?0:D(t,Lt,r.bipolar)}}var Pt=6,ie=1.5,le=1;function Tt(e){if(e==null||!Number.isFinite(e))return le;const t=(e-Pt)/6,a=ie+-.5*t;return K(a,le,ie)}var It=11,ue=1.5,Nt=.2;function Ot(e){if(e==null||!Number.isFinite(e)||e<=0)return 0;const t=(e-It)/7,a=ue+-1.3*t;return K(a,Nt,ue)}function Gt(e){return e==null||!Number.isFinite(e)?3:e<=6?1:e<=9?2:3}var kt="/assets/textures/nebulas/manifest.json",q=null;function Wt(e){if(e===null||typeof e!="object")return!1;const t=e;return typeof t.thumb=="string"&&typeof t.mid=="string"&&typeof t.high=="string"&&typeof t.source=="string"&&typeof t.license=="string"&&typeof t.attribution=="string"}function Ut(e){if(e===null||typeof e!="object")return{entries:{}};const t=e;if(t.entries===null||typeof t.entries!="object")return{entries:{}};const a={};for(const[r,u]of Object.entries(t.entries))Wt(u)&&(a[r]=u);return{entries:a}}var zt=1e4;function Ht(){if(q!==null)return q;const e=new AbortController,t=setTimeout(()=>e.abort(),zt);return q=fetch(Pe(kt),{signal:e.signal}).then(async a=>a.ok?Ut(await a.json()):{entries:{}}).catch(()=>({entries:{}})).finally(()=>clearTimeout(t)),q}async function Vt(){return(await Ht()).entries}var qt="/assets/transcoder/",O=new Map,$=null;function Re(){if($!==null)return $;const e=new Ve;return e.setTranscoderPath(qt),$=e,e}function Yt(e){try{Re().detectSupport(e)}catch{}}function k(e){const t=O.get(e);t!==void 0&&(t.refCount-=1,!(t.refCount>0)&&(t.texture?.dispose(),O.delete(e)))}function se(e,t,a){let r=null;const u=new Promise((o,s)=>{r=()=>{k(e),s(new DOMException("aborted","AbortError"))},a.addEventListener("abort",r,{once:!0})}),n=()=>{r&&a.removeEventListener("abort",r)};return Promise.race([t.promise,u]).finally(n)}function _e(e,t){if(t?.aborted)return Promise.reject(new DOMException("aborted","AbortError"));const a=O.get(e);if(a!==void 0)return a.refCount+=1,t!==void 0?se(e,a,t):a.promise;const r={refCount:1,texture:null,promise:new Promise((u,n)=>{Re().load(e,o=>{const s=O.get(e);if(s===void 0||s.refCount<=0){o.dispose(),O.delete(e),n(new DOMException("aborted","AbortError"));return}r.texture=o,u(o)},void 0,o=>{O.delete(e),n(o instanceof Error?o:new Error(String(o)))})})};return O.set(e,r),t!==void 0?se(e,r,t):r.promise}var jt=`
#include <common>
varying vec3 vWorldPos;
varying vec3 vCenter;
#include <logdepthbuf_pars_vertex>
void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  // Sphere centre in world space (modelMatrix is a vertex-only built-in).
  vCenter = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
  // Log depth so the volume shares the scene's depth curve (renderer logarithmicDepthBuffer:true);
  // raw perspective depth crushes against the astronomical far plane and facets on teleport.
  #include <logdepthbuf_vertex>
}
`,Kt=`
uniform sampler2D uMap;
uniform float uTime;
uniform float uRadius;
uniform float uSteps;
uniform float uExtinction;
uniform float uIntensity;
uniform float uDensity;
uniform float uDrift;
uniform float uUsePalette;
uniform float uViewMix;
// nebula
uniform float uZoom;
uniform float uWarp;
uniform vec3 uPalA;
uniform vec3 uPalB;
uniform vec3 uPalC;
// nebula shape (per-object)
uniform float uShapeMode;
uniform float uShapeWarp;
uniform float uShapeFreq;
uniform float uShellMid;
uniform float uShellThick;
uniform float uClump;
uniform float uBipolar;
uniform float uCstar;
uniform vec3 uShapeSeed;
// galaxy
uniform float uBulgeStrength;
uniform float uBulgeRadiusRatio;
uniform float uBar;
uniform float uArmCount;
uniform float uArmWinding;
uniform float uArmContrast;
uniform float uDustStrength;
uniform float uPositionAngle;
uniform vec3 uColorBulge;
uniform vec3 uColorArms;
uniform vec3 uColorDust;
uniform vec3 uMorphScale;
varying vec3 vWorldPos;
varying vec3 vCenter;
#include <logdepthbuf_pars_fragment>
`,Zt=`
// Hard cap on the march loop (WebGL1 needs a constant bound); uSteps is the live budget <= this.
#define MAX_STEPS 32
#define TWO_PI 6.2831853071795864
#define PI 3.141592653589793
const float NEB_SAT_FLOOR = 0.18;
const float NEB_DIM_FLOOR = 0.10;

vec2 equirectUv(vec3 d) {
  d = normalize(d);
  float u = atan(d.z, d.x) / TWO_PI + 0.5;
  float v = asin(clamp(d.y, -1.0, 1.0)) / PI + 0.5;
  return vec2(u, v);
}

// Cheap per-pixel hash for the march-start dither.
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

// Ray vs unit sphere; returns (tNear, tFar) or (-1,-1) on miss.
vec2 hitUnitSphere(vec3 ro, vec3 rd) {
  float b = dot(ro, rd);
  float c = dot(ro, ro) - 1.0;
  float h = b * b - c;
  if (h < 0.0) return vec2(-1.0);
  h = sqrt(h);
  return vec2(-b - h, -b + h);
}
`,Jt=`
void main() {
  #include <logdepthbuf_fragment>
  // March in normalised local space centred on the volume (no inverse/modelMatrix in fragment).
  vec3 ro = (cameraPosition - vCenter) / uRadius;
  vec3 rd = normalize(vWorldPos - cameraPosition);
  vec2 tHit = hitUnitSphere(ro, rd);
  if (tHit.y < 0.0) discard;
  int steps = int(uSteps);
  float tNear = max(tHit.x, 0.0);
  float tFar = tHit.y;
  float stepLen = (tFar - tNear) / uSteps;
  float jitter = hash12(gl_FragCoord.xy + fract(uTime) * 17.0);
  tNear += jitter * stepLen;
  float drift = uTime * uDrift;

  vec3 emission = vec3(0.0);
  float transmittance = 1.0;

  for (int i = 0; i < MAX_STEPS; i++) {
    if (i >= steps) break;
    float t = tNear + (float(i) + 0.5) * stepLen;
    vec3 p = ro + rd * t;
    vec3 col;
    float dens;
    sampleVolume(p, drift, col, dens);
    dens *= uDensity;
    if (dens < 0.0001) continue;
    emission += transmittance * col * dens * stepLen * uIntensity;
    transmittance *= exp(-dens * uExtinction * stepLen);
    if (transmittance < 0.02) break;
  }

  float alpha = clamp(1.0 - transmittance, 0.0, 1.0);
  if (alpha < 0.01) discard;
  // Naked-eye mute: far volumes read muted + dimmer; full photo-colour only on approach.
  // Floored so nebulae never go fully grey/black. uViewMix=1 (galaxies + close-up) => no-op.
  float lum = dot(emission, vec3(0.2126, 0.7152, 0.0722));
  float satMix = NEB_SAT_FLOOR + (1.0 - NEB_SAT_FLOOR) * uViewMix;
  float dimMix = NEB_DIM_FLOOR + (1.0 - NEB_DIM_FLOOR) * uViewMix;
  emission = mix(vec3(lum), emission, satMix) * dimMix;
  gl_FragColor = vec4(emission, alpha);
}
`,$t=`
void sampleVolume(vec3 p, float drift, out vec3 col, out float dens) {
  col = vec3(0.0);
  dens = 0.0;

  // Per-object orientation + anisotropy (DIVIDE: components <=1 shrink gas inside the unit sphere).
  vec3 ps = p;
  ps.xy = rotate2D(ps.xy, uPositionAngle);
  ps /= max(uMorphScale, vec3(0.3));
  float nrm = length(ps);
  if (nrm > 1.15) return; // cheap outer early-out (warp tolerance included)

  // Cheap seeded domain warp (3x noise3); skippable when near-zero.
  vec3 warp = vec3(0.0);
  if (uShapeWarp > 0.001) {
    vec3 sp = ps * uShapeFreq + uShapeSeed;
    warp = (vec3(
      noise3(sp + vec3(0.0, 11.7, 3.1)),
      noise3(sp + vec3(7.3, -4.9, 21.5)),
      noise3(sp + vec3(-18.4, 5.6, -2.2))
    ) - 0.5) * uShapeWarp;
  }
  vec3 pw = ps + warp;
  float nrmW = length(pw);

  // Planetary central star: tight Gaussian core at the (pre-warp) centre. It lives INSIDE the
  // hollow shell where shell ~= 0, so compute it before the shell early-out and keep it lit.
  float starCore = (uCstar > 0.001) ? exp(-nrm * nrm * 140.0) : 0.0;

  // Morphology-mode radial profile -> mass envelope.
  int mode = int(uShapeMode + 0.5);
  float shell;
  if (mode == 1) {
    // planetary: hollow shell at uShellMid +/- uShellThick, optional bipolar lobes.
    shell = smoothstep(uShellThick, 0.0, abs(nrmW - uShellMid));
    if (uBipolar > 0.001) {
      float axial = abs(pw.z) / max(nrmW, 1e-3); // 1 at poles, 0 at equator
      shell *= mix(1.0, 0.25 + 1.75 * axial, uBipolar);
    }
  } else if (mode == 2) {
    // SNR: thin outer shell.
    shell = smoothstep(uShellThick, 0.0, abs(nrmW - uShellMid));
  } else if (mode == 5) {
    // reflection: soft gaussian, no edge.
    shell = exp(-nrmW * nrmW * 2.2);
  } else if (mode == 3) {
    // dark: filled, sharp edge.
    shell = smoothstep(1.0, 0.85, nrmW);
  } else {
    // emission / cluster: filled blob, soft outer falloff.
    shell = smoothstep(1.0, 0.2, nrmW);
  }
  if (shell <= 0.002 && starCore <= 0.002) return;

  // FBM detail, seeded per object; clumpiness widens/narrows the smoothstep band.
  float n = fbm3(ps * uShapeFreq + uShapeSeed + warp + vec3(0.0, 0.0, drift));
  float lo = 0.55 - uClump;
  float d = smoothstep(lo, 0.8, n) * shell;
  if (d < 0.002 && starCore <= 0.002) return;

  if (uUsePalette > 0.5) {
    float tcol = noise3(pw * 0.66 + uShapeSeed + vec3(drift, 0.0, 0.0));
    vec3 base = mix(uPalA, uPalB, smoothstep(0.0, 0.55, tcol));
    base = mix(base, uPalC, smoothstep(0.55, 1.0, tcol));
    float core = (mode == 3) ? 0.0 : smoothstep(0.95, 0.0, nrm); // dark: no core brighten
    col = base * (0.55 + 0.85 * core);
  } else {
    vec3 dir = normalize(pw);
    vec2 uv = 0.5 + (equirectUv(dir) - 0.5) * uZoom;
    col = texture2D(uMap, uv).rgb;
  }
  // Planetary central star: hot white core, lit even where the shell gas is absent.
  if (starCore > 0.0) col += vec3(0.9, 0.95, 1.0) * starCore * uCstar;
  dens = max(d, starCore);
}
`,Xt=`
void sampleVolume(vec3 p, float drift, out vec3 col, out float dens) {
  col = vec3(0.0);
  dens = 0.0;
  vec3 pd = p;
  pd.xy = rotate2D(pd.xy, uPositionAngle);
  pd /= max(uMorphScale, vec3(0.001));
  float r = length(pd.xy);
  float zAbs = abs(pd.z);
  float vertical = exp(-(zAbs * zAbs) / (0.6 * 0.6));
  float radialFall = smoothstep(1.05, 0.0, r);
  float bulgeR = max(uBulgeRadiusRatio, 0.04);
  float phi = atan(pd.y, pd.x);
  float arm = 1.0;
  if (uArmCount > 0.5) {
    float psi = phi + uArmWinding * log(max(r, 0.02) / bulgeR);
    arm = pow(clamp(0.5 + 0.5 * cos(uArmCount * psi), 0.0, 1.0), uArmContrast);
  }
  float turb = smoothstep(0.3, 0.85, fbm4(pd * 3.0 + vec3(0.0, 0.0, drift)));
  float discDens = vertical * radialFall * mix(0.15, 1.0, arm) * turb;
  float bulge = exp(-(r * r) / (bulgeR * bulgeR)) * exp(-(zAbs * zAbs) / (0.9 * 0.9));
  // Central bar (barred spirals): elongated along local x, thin in y, disc-thin in z.
  float bar = 0.0;
  if (uBar > 0.001) {
    float barLen = bulgeR * 2.5;
    float bx = pd.x / barLen;
    float by = pd.y / (barLen * 0.28);
    bar = exp(-(bx * bx + by * by)) * exp(-(zAbs * zAbs) / (0.4 * 0.4));
  }
  dens = bulge * uBulgeStrength + discDens + bar * uBar;
  if (dens < 0.001) return;
  if (uUsePalette > 0.5) {
    float dustCoord = fbm4(pd * 5.0 + vec3(13.0, -7.0, 4.0));
    float dust = smoothstep(0.45, 0.85, dustCoord) * exp(-(zAbs * zAbs) / (0.35 * 0.35)) * uDustStrength;
    col = uColorBulge * bulge * uBulgeStrength + uColorArms * discDens;
    col = max(col * (1.0 - dust * 0.6), vec3(0.0));
    col += uColorBulge * bar * uBar; // bar = old bulge-population stars, undimmed by dust
  } else {
    // Photo wrapped onto the disc: u = azimuth, v = radial distance (face-on unwrap; approximate).
    vec2 uv = vec2(phi / TWO_PI + 0.5, clamp(r, 0.0, 1.0));
    col = texture2D(uMap, uv).rgb * (0.4 + 1.2 * (bulge * uBulgeStrength + discDens + bar * uBar));
  }
}
`;function Me(e){return`${Kt}${Je}${Zt}${e}${Jt}`}var Qt=Me($t),ea=Me(Xt),ce=2.8,ta=.32,de=.4,aa=.05,X=.45,ra=1.5,na=3.5,oa=.5,ia=.02,me=.46,la=.03,ua=.12,sa=.16,ca=.82,da=1.5;var ma=5.5,he=.6,ha=.06,fa=.0015,ja=fa*.7;function z(e,t){e.setRGB(t[0],t[1],t[2])}function we(e,t){switch(t){case"high":return e.high;case"mid":return e.mid;case"thumb":return e.thumb;default:return null}}var Q=null;function pa(){if(Q!==null)return Q;const e=64,t=new Uint8Array(16384),a=63/2;for(let u=0;u<e;u+=1)for(let n=0;n<e;n+=1){const o=(n-a)/a,s=(u-a)/a,d=Math.hypot(o,s),c=Math.exp(-ma*d*d),h=(u*e+n)*4;t[h]=255,t[h+1]=255,t[h+2]=255,t[h+3]=Math.round(255*Math.min(1,Math.max(0,c)))}const r=new ee(t,e,e,te);return r.minFilter=re,r.magFilter=re,r.needsUpdate=!0,Q=r,r}var ga=`
  precision highp float;
  #include <common>
  uniform float uRadius;     // disc radius in local units (CircleGeometry radius)
  uniform vec2  uUvScale;    // (major, minor) half-extent the galaxy fills in the square plate
  varying vec2 vUv;
  varying vec2 vLocal;       // local disc coords, normalized to [-1, 1]
  #include <logdepthbuf_pars_vertex>
  void main() {
    vLocal = position.xy / max(uRadius, 1e-6);
    // KTX2 textures load flipY=false (compressed textures can't be flipped), so the plate is
    // stored bottom-up; negate v to read it right-side up.
    vUv = vec2(0.5 + vLocal.x * uUvScale.x, 0.5 - vLocal.y * uUvScale.y);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    // Log depth so the disc shares the scene's depth curve (renderer logarithmicDepthBuffer:true);
    // raw perspective depth crushes against the astronomical far plane and facets on teleport.
    #include <logdepthbuf_vertex>
  }
`,va=`
  precision highp float;
  uniform sampler2D uMap;
  uniform float uIntensity;
  uniform float uBgLo;        // luminance below which the plate is treated as background (alpha 0)
  uniform float uBgHi;        // luminance above which the plate is fully opaque
  uniform float uCenterFade;  // normalized radius below which the disc fades (bulge takes over)
  uniform float uEdgeFade;    // normalized radius above which the disc fades to its rim
  varying vec2 vUv;
  varying vec2 vLocal;
  #include <logdepthbuf_pars_fragment>
  float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
  void main() {
    #include <logdepthbuf_fragment>
    float r = length(vLocal);
    if (r > 1.0) discard;                                  // circular mask
    vec3 col = texture2D(uMap, vUv).rgb;
    float a = smoothstep(uBgLo, uBgHi, luma(col));          // drop the black sky
    a *= smoothstep(0.0, max(uCenterFade, 1e-4), r);        // fade core → bulge owns it
    a *= 1.0 - smoothstep(uEdgeFade, 1.0, r);               // fade rim
    if (a < 0.003) discard;
    gl_FragColor = vec4(col * uIntensity, a);
  }
`,ba=Math.PI/180;function Y(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function I(e,t){const a=Math.hypot(e[0],e[1],e[2]);return!Number.isFinite(a)||a<1e-9?t:[e[0]/a,e[1]/a,e[2]/a]}function fe(e,t,a,r){return[e[0]*t+a[0]*r,e[1]*t+a[1]*r,e[2]*t+a[2]*r]}var Sa=[0,0,1];function Aa(e,t,a){const r=I(e,[0,0,1]),u=I(Y(Sa,r),[1,0,0]),n=I(Y(r,u),[0,1,0]),o=Number.isFinite(t)?t*ba:0,s=I(fe(n,Math.cos(o),u,Math.sin(o)),n),d=I(Y(r,s),u),c=Math.min(1,Math.max(.001,a)),h=Math.acos(c),i=I(fe(r,c,d,Math.sqrt(Math.max(0,1-c*c))),r),b=s;return{xAxis:b,yAxis:I(Y(i,b),d),zAxis:i,inclinationRad:h}}function xa(e,t,a){if(e.texture===null)return null;const{radius:r}=e,u=e.morphScale!==void 0?e.morphScale[1]:.5,n=t.lengthSq()>1e-12?[t.x,t.y,t.z]:[0,0,1],o=Aa(n,e.entry.positionAngleDeg,u),s=new j;s.quaternion.setFromRotationMatrix(new ke().makeBasis(new C(o.xAxis[0],o.xAxis[1],o.xAxis[2]),new C(o.yAxis[0],o.yAxis[1],o.yAxis[2]),new C(o.zAxis[0],o.zAxis[1],o.zAxis[2]))),a.add(s);const d=new ee(new Uint8Array([0,0,0,0]),1,1,te);d.needsUpdate=!0;const c={uMap:{value:d},uRadius:{value:r},uUvScale:{value:new qe(me,me*u)},uIntensity:{value:da*(e.galaxyBrightnessScale??1)},uBgLo:{value:la},uBgHi:{value:ua},uCenterFade:{value:sa},uEdgeFade:{value:ca}},h=new ze(r,96),i=new Ae({uniforms:c,vertexShader:ga,fragmentShader:va,transparent:!0,depthWrite:!1,blending:1,side:2,toneMapped:!1}),b=new Se(h,i);b.name=`dso-disc-${e.entry.catalogId}`,b.raycast=()=>{},b.frustumCulled=!1,b.renderOrder=-15,s.add(b);const f=e.galaxyPalette?.colorBulge??[1,.95,.85],F=new He({map:pa(),color:new N(f[0],f[1],f[2]),transparent:!0,depthWrite:!1,blending:2,toneMapped:!1});F.opacity=he;const y=new Ue(F),S=r*Math.min(.6,Math.max(.2,e.galaxyPalette?.bulgeRadiusRatio??.34))*2;y.scale.set(S,S,1),y.renderOrder=-14,a.add(y);let B="none",R=null,l=null,v=!1;const x=A=>{if(e.texture===null)return;const _=we(e.texture,A);if(_===null)return;if(l!==null){if(l.url===_)return;l.ac.abort(),l=null}const L=new AbortController;l={url:_,ac:L},_e(_,L.signal).then(W=>{if(v||l===null||l.ac!==L){k(_);return}R!==null&&R!==_&&k(R),R=_,c.uMap.value=W,l=null}).catch(()=>{l!==null&&l.ac===L&&(l=null)})};return B="thumb",x("thumb"),{group:a,mesh:b,radius:r,scenePos:t,tick(A,_){b.frustumCulled=_>1;const L=Math.min(1,Math.max(0,(_-.15)/.85));F.opacity=he*L;const W=ve(_),V=W==="none"?"thumb":W;V!==B&&(B=V,x(V))},dispose(){v=!0,l!==null&&(l.ac.abort(),l=null),h.dispose(),i.dispose(),F.dispose(),d.dispose(),R!==null&&(k(R),R=null)}}}function ya(e){if(e.radius<=0)return null;const{entry:t,shape:a}=e,r=ge(t),u=new C(r.x,r.y,r.z),n=new j;if(n.name=`dso-${t.catalogId}`,n.position.copy(u),a==="galaxy"&&e.texture?.projection==="flat-disc")return xa(e,u,n);let o=n;if(a==="nebula"){const l=u.clone();l.lengthSq()<1e-12&&l.set(1,0,0),l.normalize();const v=new C().crossVectors(l,new C(0,0,1));v.lengthSq()<1e-6&&v.crossVectors(l,new C(1,0,0)),v.normalize();const x=v.multiplyScalar(Math.sqrt(1-X*X)).addScaledVector(l,X).normalize(),A=new j;A.quaternion.setFromUnitVectors(new C(0,0,1),x),n.add(A),o=A}const s=new We(e.radius,24,16),d=new ee(new Uint8Array([0,0,0,0]),1,1,te);d.needsUpdate=!0;const c=a==="galaxy",h=e.texture!==null,i={uMap:{value:d},uTime:{value:0},uRadius:{value:e.radius},uSteps:{value:c?28:30},uExtinction:{value:c?2:3},uIntensity:{value:ce},uDensity:{value:c?oa:1},uDrift:{value:c?ia:aa},uUsePalette:{value:h?0:1},uViewMix:{value:1},uZoom:{value:ta},uWarp:{value:de},uPalA:{value:new N(0,0,0)},uPalB:{value:new N(0,0,0)},uPalC:{value:new N(0,0,0)},uShapeMode:{value:0},uShapeWarp:{value:de},uShapeFreq:{value:3},uShellMid:{value:0},uShellThick:{value:0},uClump:{value:.15},uBipolar:{value:0},uCstar:{value:0},uShapeSeed:{value:new C(0,0,0)},uBulgeStrength:{value:1},uBulgeRadiusRatio:{value:.2},uBar:{value:0},uArmCount:{value:0},uArmWinding:{value:0},uArmContrast:{value:1},uDustStrength:{value:0},uPositionAngle:{value:e.positionAngleRad??0},uColorBulge:{value:new N(0,0,0)},uColorArms:{value:new N(0,0,0)},uColorDust:{value:new N(0,0,0)},uMorphScale:{value:new C(1,1,1)}};if(c&&e.galaxyPalette!==void 0){const l=e.galaxyPalette;i.uBulgeStrength.value=l.bulgeStrength,i.uBulgeRadiusRatio.value=l.bulgeRadiusRatio,i.uArmCount.value=l.armCount,i.uArmWinding.value=l.armWinding,i.uArmContrast.value=l.armContrast,i.uDustStrength.value=l.dustStrength,i.uBar.value=l.bar??0,z(i.uColorBulge.value,l.colorBulge),z(i.uColorArms.value,l.colorArms),z(i.uColorDust.value,l.colorDust),i.uIntensity.value=l.intensity*na*(e.galaxyBrightnessScale??1),e.morphScale!==void 0&&i.uMorphScale.value.set(e.morphScale[0],e.morphScale[1],e.morphScale[2])}else if(!c&&!h&&e.nebulaPalette!==void 0){const l=e.nebulaPalette;z(i.uPalA.value,l.colorA),z(i.uPalB.value,l.colorB),z(i.uPalC.value,l.colorC),i.uIntensity.value=ce*l.intensity}if(!c&&e.nebulaShape!==void 0){const l=e.nebulaShape;i.uShapeMode.value=l.mode,i.uShapeWarp.value=l.warp,i.uShapeFreq.value=l.freq,i.uShellMid.value=l.shellMid,i.uShellThick.value=l.shellThick,i.uClump.value=l.clump,i.uBipolar.value=l.bipolar,i.uPositionAngle.value=l.positionAngleRad,i.uMorphScale.value.set(l.morphScale[0],l.morphScale[1],l.morphScale[2]),i.uShapeSeed.value.set(l.seedOffset[0],l.seedOffset[1],l.seedOffset[2]),i.uCstar.value=e.cstarBright??0}!c&&e.brightnessScale!==void 0&&(i.uIntensity.value=i.uIntensity.value*e.brightnessScale);const b=new Ae({uniforms:i,vertexShader:jt,fragmentShader:c?ea:Qt,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1}),f=new Se(s,b);f.name=`dso-vol-${t.catalogId}`,f.raycast=()=>{},f.frustumCulled=!1,f.renderOrder=c?-15:-12,o.add(f);let F="none",y=null,S=null,B=!1;const R=l=>{if(e.texture===null)return;const v=we(e.texture,l);if(v===null)return;if(S!==null){if(S.url===v)return;S.ac.abort(),S=null}const x=new AbortController;S={url:v,ac:x},_e(v,x.signal).then(A=>{if(B||S===null||S.ac!==x){k(v);return}y!==null&&y!==v&&k(y),y=v,i.uMap.value=A,S=null}).catch(()=>{S!==null&&S.ac===x&&(S=null)})};return h&&(F="thumb",R("thumb")),{group:n,mesh:f,radius:e.radius,scenePos:u,tick(l,v){if(i.uTime.value=i.uTime.value+l,f.frustumCulled=v>1,!c){const x=Math.min(1,Math.max(0,(v-1)/2));i.uSteps.value=Math.round(16+14*x);const A=G((30-v)/28);i.uViewMix.value=A**ra}if(h){const x=ve(v),A=x==="none"?"thumb":x;A!==F&&(F=A,R(A))}},dispose(){B=!0,S!==null&&(S.ac.abort(),S=null),s.dispose(),b.dispose(),d.dispose(),y!==null&&(k(y),y=null)}}}function Ca(e,t){const a=Ye(e),r=a.layers.dsoReRooted,u=a.cameraThree,n=new j;n.name="dsoVolumeLayer",r.add(n),Yt(a.gl);const o=Le();let s=[];const d=new Map;let c=!1,h=0;const i={current:ae.getState().showDsoVolumes},b={current:performance.now()},f={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:1,aspect:1},F=new C,y=new C,S=new C,B=new C,R=()=>{n.visible=i.current&&d.size>0},l=()=>{Ze(u,f,F,y,S);const m=Ne();m&&(f.position.x+=m.x,f.position.y+=m.y,f.position.z+=m.z),B.set(f.position.x,f.position.y,f.position.z)},v=m=>{const M=d.get(m);M!==void 0&&(n.remove(M.group),M.dispose(),d.delete(m),Xe(m))},x=()=>{for(const m of[...d.keys()])v(m)},A=()=>{c||(x(),s=t.buildSpecs().filter(m=>m.radius>0).map(m=>{const M=ge(m.entry);return{id:m.entry.catalogId,scenePos:new C(M.x,M.y,M.z),radius:m.radius,spec:m}}),R())},_=()=>{l();const m=[],M=[];for(const g of s){const E=g.scenePos.distanceToSquared(B),U=Math.sqrt(E);if(U<=g.radius){M.push(g);continue}const Fe=g.radius/U,Be=g.spec.visibilityFactor??1;Fe<(d.has(g.id)?.00105:.0015)*Be||De(g.scenePos,f.position,f.forward,f.right,f.up,f.fovYRadians,f.aspect)&&m.push({cand:g,distSq:E})}m.sort((g,E)=>g.distSq-E.distSq);const P=new Map;for(const g of M)P.set(g.id,g);for(const{cand:g}of m){if(P.size>=128)break;P.set(g.id,g)}for(const g of[...d.keys()])P.has(g)||v(g);let T=0;for(const[g,E]of P){if(d.has(g))continue;if(T>=4)break;const U=ya(E.spec);U!==null&&(n.add(U.group),d.set(g,U),E.spec.shape==="galaxy"&&$e(g),T+=1)}R()};Promise.resolve().then(A).catch(m=>console.error("[createDsoVolumeMount] rebuildCandidates failed:",m));const L=ae.subscribe(m=>({showDsoVolumes:m.showDsoVolumes}),m=>{i.current=m.showDsoVolumes,R()},{equalityFn:Ee}),W=o.getQueryCache().subscribe(m=>{(ne(m,"openngc-dso-catalog")||ne(m,"custom-objects-catalog"))&&A()}),V=t.subscribeReady?.(A);return{onFrame:m=>{if(!i.current||s.length===0)return;const M=performance.now(),P=Math.min(ha,Math.max(0,(M-b.current)/1e3));if(b.current=M,h+=1,h%6===0&&_(),d.size!==0){l();for(const T of d.values()){const g=T.scenePos.distanceTo(B),E=T.radius>0?g/T.radius:Number.POSITIVE_INFINITY;T.tick(P,E)}}},dispose:()=>{c=!0,L(),W(),V?.(),x(),r.remove(n)}}}function Ra(e){return(e.openNgcTypeRaw==null||e.openNgcTypeRaw==="G")&&e.parentGalaxyId==null}function pe(e,t){const a=Oe(e.distPc,e.majAxArcmin);if(a<=0)return null;const r=ye(e.catalogId);return{entry:e,shape:"nebula",radius:a,texture:t,nebulaPalette:t===null?ct(e,r):void 0,nebulaShape:Dt(e,r),brightnessScale:Tt(e.vMag),cstarBright:e.type==="planetary_nebula"?Ot(e.cstarVMag):0,visibilityFactor:Gt(e.vMag)}}function _a(e,t){if(!Ra(e))return null;const a=be(e);if(a===null||a.discRadiusSu<=0)return null;const r=tt(e.catalogId)?et(e):ft(e,ye(e.catalogId));return{entry:e,shape:"galaxy",radius:t?.projection==="flat-disc"?Ge(a.discRadiusSu):a.discRadiusSu,texture:t,galaxyPalette:r,morphScale:a.morphScale,positionAngleRad:a.positionAngleRad,galaxyBrightnessScale:vt(e.surfBrightness)}}function Ma(e){let t={},a={};return Ca(e,{buildSpecs:()=>{const u=[];for(const n of Ke()){const o=Ie(n.catalogId);if(n.type==="nebula"||n.type==="planetary_nebula"){const s=pe(n,t[o]??null);s!==null&&u.push(s)}else if(n.type==="star_cluster"&&n.openNgcTypeRaw==="Cl+N"){const s=pe(n,t[o]??null);s!==null&&u.push(s)}else if(n.type==="galaxy"){const s=_a(n,a[o]??null);s!==null&&u.push(s)}}return u},subscribeReady:u=>{let n=!1;return Vt().then(o=>{n||(t=o,u())}),Te().then(o=>{n||(a=o,u())}),()=>{n=!0}}})}var Ka=je(Ma,"present.hud");export{Ka as DsoVolumesMountR3f};
