import{n as Pe}from"./state-data-vendor-poX9OG4b.js";import{t as Ne}from"./publicUrl-Dg1xy6-A.js";import{w as Oe}from"./playerBoostLadderPort-Dz0KSiwT.js";import"./simStateMigration-bfvtwBm6.js";import{t as Ae}from"./deepSkyScenePosition-CJpe8tKj.js";import{n as ye,t as Ge}from"./dsoSpheremapLOD-hw7O3U3k.js";import{n as ke,t as G}from"./clamp01-DwraWUL9.js";import{A as q,Dt as _,Et as Ue,G as We,K as xe,R as ne,S as ae,_ as N,gt as He,m as ze,mt as Ce,ot as re,t as Ve,vt as qe,yt as Ye}from"./three-vendor-DtGC8FGl.js";import{$t as je,Or as oe,a as Ke,en as Re,nn as Ze,zr as Y}from"./index-Be60UNKa.js";import{n as ie}from"./combatFrustum-D5yrAg96.js";import{t as Je}from"./r3fHostExtras-C-UhF0Mu.js";import{t as $e}from"./createMountComponent-D3qkindf.js";import{n as le,t as Xe}from"./deepSkyCatalogBridge-Bd33URdE.js";import{t as Qe}from"./shaderNoiseHelpers-DYuLfImQ.js";import{n as p,t as _e}from"./nebulaSeed-D0YYy3wG.js";import{n as et,r as tt}from"./galaxyVolumeActivations-DjDa8t_c.js";var at={colorBulge:[1.4,1.05,.55],colorArms:[.55,.75,1.2],colorDust:[.08,.05,.04],bulgeStrength:1.4,bulgeRadiusRatio:.2,armCount:2,armWinding:4.5,armContrast:2.8,dustStrength:1,intensity:1},Me={NGC0224:{colorBulge:[1.6,1.15,.65],colorArms:[.65,.85,1.3],colorDust:[.1,.06,.04],bulgeStrength:1.7,bulgeRadiusRatio:.22,armCount:2,armWinding:5,armContrast:3.2,dustStrength:1.3,intensity:1.1},NGC0598:{colorBulge:[1.3,1,.6],colorArms:[.7,.9,1.35],colorDust:[.08,.06,.05],bulgeStrength:1,bulgeRadiusRatio:.12,armCount:3,armWinding:3.6,armContrast:2.2,dustStrength:.85,intensity:1},NGC5457:{colorBulge:[1.45,1.05,.6],colorArms:[.65,.9,1.35],colorDust:[.08,.06,.05],bulgeStrength:1.2,bulgeRadiusRatio:.15,armCount:4,armWinding:4,armContrast:2.6,dustStrength:.95,intensity:1.05},NGC3031:{colorBulge:[1.55,1.1,.6],colorArms:[.6,.8,1.25],colorDust:[.09,.06,.05],bulgeStrength:1.6,bulgeRadiusRatio:.22,armCount:2,armWinding:5.5,armContrast:3,dustStrength:1,intensity:1.05},NGC5128:{colorBulge:[1.45,.85,.7],colorArms:[.85,.7,.6],colorDust:[.04,.03,.03],bulgeStrength:2,bulgeRadiusRatio:.4,armCount:0,armWinding:0,armContrast:1,dustStrength:2,intensity:1},NGC0292:{colorBulge:[1,.9,1.1],colorArms:[.9,.6,.95],colorDust:[.06,.05,.06],bulgeStrength:.6,bulgeRadiusRatio:.35,armCount:0,armWinding:0,armContrast:1,dustStrength:.4,intensity:.9}};function rt(e){return Me[e.catalogId]??at}function nt(e){return Object.hasOwn(Me,e)}var ot={hueA:.97,hueB:.48,hueJitter:.04,satRange:[.82,.85],lightBRange:[.48,.62],lightA:.06,lightCRange:[.72,.86],intensityScale:1.55},it={hueA:.52,hueB:.88,hueJitter:.05,satRange:[.78,.85],lightBRange:[.55,.7],lightA:.08,lightCRange:[.78,.92],intensityScale:1.85},lt={hueA:.78,hueB:.32,hueJitter:.05,satRange:[.72,.92],lightBRange:[.46,.6],lightA:.05,lightCRange:[.7,.82],intensityScale:1.7},ut={hueA:.62,hueB:.58,hueJitter:.03,satRange:[.6,.82],lightBRange:[.46,.6],lightA:.07,lightCRange:[.78,.9],intensityScale:1.25},st={hueA:.07,hueB:.08,hueJitter:.02,satRange:[.35,.55],lightBRange:[.28,.38],lightA:.02,lightCRange:[.55,.7],intensityScale:.65},ct={hueA:.94,hueB:.6,hueJitter:.05,satRange:[.78,.84],lightBRange:[.5,.66],lightA:.07,lightCRange:[.82,.95],intensityScale:1.75};function we(e,t){const a=e.toUpperCase();return a==="DRKN"||a==="DN"?"dark":a==="PN"||t==="planetary_nebula"?"planetary":a==="SNR"?"snr":a==="RFN"||a==="REFN"?"reflection":a==="CL+N"||a==="CLN"||a==="OCL+N"?"cluster_neb":"emission"}var dt={emission:ot,planetary:it,snr:lt,reflection:ut,dark:st,cluster_neb:ct};function mt(e,t){return dt[we(e,t)]}function H(e,t,a){const r=G(t),l=G(a);if(r===0)return[l,l,l];const n=l<.5?l*(1+r):l+r-l*r,i=2*l-n,s=(e%1+1)%1,m=[s+1/3,s,s-1/3],c=[0,0,0];for(let f=0;f<3;f+=1){let o=m[f];o<0&&(o+=1),o>1&&(o-=1),o<1/6?c[f]=i+(n-i)*6*o:o<1/2?c[f]=n:o<2/3?c[f]=i+(n-i)*(2/3-o)*6:c[f]=i}return[c[0],c[1],c[2]]}function j(e,t){return e[0]+(e[1]-e[0])*G(t)}function ft(e,t){const a=mt(e.openNgcTypeRaw??"",e.type),r=(p(t,.211)-.5)*2*a.hueJitter,l=(p(t,.379)-.5)*2*a.hueJitter,n=p(t,.557),i=p(t,.733),s=p(t,.911),m=p(t,.143)>.55,c=m?a.hueB:a.hueA,f=m?a.hueA:a.hueB,o=c+r,y=f+l,d=j(a.satRange,n),F=j(a.lightBRange,i),C=j(a.lightCRange,s);return{colorA:H(o,d*.4,a.lightA),colorB:H(o,d,F),colorC:H(y,Math.min(1,d+.05),C),intensity:a.intensityScale}}function w(e,t,a){return e+(t-e)*a}function ht(e){switch(e){case"elliptical":return{bulgeStrength:[1.8,2.6],bulgeRadiusRatio:[.45,.65],armCount:[0,0],armWinding:[0,0],armContrast:[1,1],dustStrength:[.1,.4],intensity:[.9,1.05]};case"irregular":return{bulgeStrength:[.5,.9],bulgeRadiusRatio:[.25,.4],armCount:[0,0],armWinding:[0,0],armContrast:[1,1],dustStrength:[.3,.7],intensity:[.85,1]};case"lenticular":return{bulgeStrength:[1.6,2.2],bulgeRadiusRatio:[.32,.45],armCount:[0,0],armWinding:[0,0],armContrast:[1,1],dustStrength:[1.2,2],intensity:[.95,1.1]};case"barred_spiral":return{bulgeStrength:[1.2,1.7],bulgeRadiusRatio:[.16,.24],armCount:[2,4],armWinding:[3.5,5.5],armContrast:[2,3.5],dustStrength:[.85,1.3],intensity:[1,1.1]};default:return{bulgeStrength:[1,1.6],bulgeRadiusRatio:[.12,.22],armCount:[2,4],armWinding:[3.5,5.5],armContrast:[2,3.5],dustStrength:[.8,1.3],intensity:[1,1.1]}}}function pt(e){switch(e){case"elliptical":case"lenticular":return{bulgeHue:[.04,.09],bulgeSat:[.45,.7],bulgeLight:.6,armHue:[.05,.1],armSat:[.35,.55],armLight:.5,dustHue:[.04,.08],dustLight:[.02,.04]};case"irregular":return{bulgeHue:[.5,.62],bulgeSat:[.3,.55],bulgeLight:.6,armHue:[.55,.66],armSat:[.5,.78],armLight:.62,dustHue:[.06,.1],dustLight:[.03,.05]};default:return{bulgeHue:[.07,.13],bulgeSat:[.55,.8],bulgeLight:.62,armHue:[.5,.64],armSat:[.55,.85],armLight:.6,dustHue:[.04,.09],dustLight:[.03,.06]}}}function gt(e,t){const[a,r]=e;return a===r?a:a+Math.floor(t*(r-a+1))}function vt(e,t){const a=Re(e),r=a?.kind??"spiral",l=G(a?.armTightness??.5),n=ht(r),i=pt(r),s=r==="spiral"||r==="barred_spiral",m=H(w(i.bulgeHue[0],i.bulgeHue[1],p(t,.131)),w(i.bulgeSat[0],i.bulgeSat[1],p(t,.197)),i.bulgeLight),c=s?G(l*.7+p(t,.271)*.3):p(t,.271),f=H(w(i.armHue[0],i.armHue[1],c),w(i.armSat[0],i.armSat[1],p(t,.331)),i.armLight),o=H(w(i.dustHue[0],i.dustHue[1],p(t,.409)),.4,w(i.dustLight[0],i.dustLight[1],p(t,.467))),y=s?G((1-l)*.75+p(t,.701)*.25):p(t,.521);return{colorBulge:m,colorArms:f,colorDust:o,bulgeStrength:w(n.bulgeStrength[0],n.bulgeStrength[1],y),bulgeRadiusRatio:w(n.bulgeRadiusRatio[0],n.bulgeRadiusRatio[1],y),armCount:gt(n.armCount,p(t,.643)),armWinding:w(n.armWinding[0],n.armWinding[1],s?y:p(t,.709)),armContrast:w(n.armContrast[0],n.armContrast[1],p(t,.773)),dustStrength:w(n.dustStrength[0],n.dustStrength[1],p(t,.829)),intensity:w(n.intensity[0],n.intensity[1],p(t,.883)),bar:r==="barred_spiral"?w(.6,1,p(t,.941)):0}}var ue=18,St=25,K=1.4,se=.6;function bt(e){if(e==null||!Number.isFinite(e)||e<=0)return 1;const t=(e-ue)/(St-ue);return Y(K+(se-K)*t,se,K)}var At={emission:0,planetary:1,snr:2,dark:3,cluster_neb:4,reflection:5},yt={emission:{anisoY:[.6,1],anisoZ:[.55,1],warp:[.25,.5],freq:[2.6,3.4],shell:null,clump:[.3,.45],bipolar:null},cluster_neb:{anisoY:[.65,1],anisoZ:[.6,1],warp:[.3,.55],freq:[2.8,3.6],shell:null,clump:[.28,.42],bipolar:null},planetary:{anisoY:[.7,1],anisoZ:[.7,1],warp:[.1,.25],freq:[3,4],shell:{mid:[.45,.7],thick:[.1,.22]},clump:[.22,.35],bipolar:[.4,.8]},snr:{anisoY:[.7,1],anisoZ:[.7,1],warp:[.15,.35],freq:[3.4,4.4],shell:{mid:[.7,.9],thick:[.06,.14]},clump:[.12,.22],bipolar:null},dark:{anisoY:[.5,1],anisoZ:[.5,1],warp:[.35,.6],freq:[2.4,3.2],shell:null,clump:[.1,.2],bipolar:null},reflection:{anisoY:[.7,1],anisoZ:[.7,1],warp:[.1,.2],freq:[2,3],shell:null,clump:[.32,.45],bipolar:null}},xt=.061,Ct=.173,Rt=.289,_t=.347,Mt=.431,wt=.523,Ft=.617,Et=.701,Bt=.829,Lt=.937,Tt=.097,Dt=.251,Z=32;function L(e,t,a){return a[0]+(a[1]-a[0])*p(e,t)}function It(e,t){const a=we(e.openNgcTypeRaw??"",e.type),r=yt[a],l=[1,e.majAxArcmin!=null&&e.minAxArcmin!=null&&e.majAxArcmin>0?Y(e.minAxArcmin/e.majAxArcmin,.3,1):Math.max(.3,L(t,xt,r.anisoY)),Math.max(.3,L(t,Ct,r.anisoZ))],n=[p(t,_t)*Z,p(t,Mt)*Z,p(t,wt)*Z],i=e.positionAngleDeg!=null&&Number.isFinite(e.positionAngleDeg)?e.positionAngleDeg%180*Math.PI/180:p(t,Rt)*Math.PI*2;return{mode:At[a],morphScale:l,positionAngleRad:i,seedOffset:n,warp:L(t,Ft,r.warp),freq:L(t,Et,r.freq),shellMid:r.shell===null?0:L(t,Lt,r.shell.mid),shellThick:r.shell===null?0:L(t,Tt,r.shell.thick),clump:L(t,Bt,r.clump),bipolar:r.bipolar===null?0:L(t,Dt,r.bipolar)}}var ce=6,Pt=12,J=1.5,$=1;function Nt(e){if(e==null||!Number.isFinite(e))return $;const t=(e-ce)/(Pt-ce);return Y(J+($-J)*t,$,J)}var de=11,Ot=18,X=1.5,me=.2;function Gt(e){if(e==null||!Number.isFinite(e)||e<=0)return 0;const t=(e-de)/(Ot-de);return Y(X+(me-X)*t,me,X)}function kt(e){return e==null||!Number.isFinite(e)?3:e<=6?1:e<=9?2:3}var Ut="/assets/textures/nebulas/manifest.json",z=null;function Wt(e){if(e===null||typeof e!="object")return!1;const t=e;return typeof t.thumb=="string"&&typeof t.mid=="string"&&typeof t.high=="string"&&typeof t.source=="string"&&typeof t.license=="string"&&typeof t.attribution=="string"}function Ht(e){if(e===null||typeof e!="object")return{entries:{}};const t=e;if(t.entries===null||typeof t.entries!="object")return{entries:{}};const a={};for(const[r,l]of Object.entries(t.entries))Wt(l)&&(a[r]=l);return{entries:a}}var zt=1e4;function Vt(){if(z!==null)return z;const e=new AbortController,t=setTimeout(()=>e.abort(),zt);return z=fetch(Ne(Ut),{signal:e.signal}).then(async a=>a.ok?Ht(await a.json()):{entries:{}}).catch(()=>({entries:{}})).finally(()=>clearTimeout(t)),z}async function qt(){return(await Vt()).entries}var Yt="/assets/transcoder/",O=new Map,Q=null;function Fe(){if(Q!==null)return Q;const e=new Ve;return e.setTranscoderPath(Yt),Q=e,e}function jt(e){try{Fe().detectSupport(e)}catch{}}function k(e){const t=O.get(e);t!==void 0&&(t.refCount-=1,!(t.refCount>0)&&(t.texture?.dispose(),O.delete(e)))}function fe(e,t,a){let r=null;const l=new Promise((i,s)=>{r=()=>{k(e),s(new DOMException("aborted","AbortError"))},a.addEventListener("abort",r,{once:!0})}),n=()=>{r&&a.removeEventListener("abort",r)};return Promise.race([t.promise,l]).finally(n)}function Ee(e,t){if(t?.aborted)return Promise.reject(new DOMException("aborted","AbortError"));const a=O.get(e);if(a!==void 0)return a.refCount+=1,t!==void 0?fe(e,a,t):a.promise;const r={refCount:1,texture:null,promise:new Promise((l,n)=>{Fe().load(e,i=>{const s=O.get(e);if(s===void 0||s.refCount<=0){i.dispose(),O.delete(e),n(new DOMException("aborted","AbortError"));return}r.texture=i,l(i)},void 0,i=>{O.delete(e),n(i instanceof Error?i:new Error(String(i)))})})};return O.set(e,r),t!==void 0?fe(e,r,t):r.promise}var Kt=`
varying vec3 vWorldPos;
varying vec3 vCenter;
void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  // Sphere centre in world space (modelMatrix is a vertex-only built-in).
  vCenter = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,Zt=`
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
`,Jt=`
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
`,$t=`
void main() {
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
`,Xt=`
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
`,Qt=`
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
`;function Be(e){return`${Zt}${Qe}${Jt}${e}${$t}`}var ea=Be(Xt),ta=Be(Qt),he=2.8,aa=.32,pe=.4,ra=.05,ee=.45,na=1.5,oa=3.5,ia=.5,la=.02,ge=.46,ua=.03,sa=.12,ca=.16,da=.82,ma=1.5;var fa=5.5,ve=.6,ha=.06,pa=.0015,Ya=pa*.7;function W(e,t){e.setRGB(t[0],t[1],t[2])}function Le(e,t){switch(t){case"high":return e.high;case"mid":return e.mid;case"thumb":return e.thumb;default:return null}}var te=null;function ga(){if(te!==null)return te;const e=64,t=new Uint8Array(e*e*4),a=(e-1)/2;for(let l=0;l<e;l+=1)for(let n=0;n<e;n+=1){const i=(n-a)/a,s=(l-a)/a,m=Math.hypot(i,s),c=Math.exp(-fa*m*m),f=(l*e+n)*4;t[f]=255,t[f+1]=255,t[f+2]=255,t[f+3]=Math.round(255*Math.min(1,Math.max(0,c)))}const r=new ae(t,e,e,re);return r.minFilter=ne,r.magFilter=ne,r.needsUpdate=!0,te=r,r}var va=`
  precision highp float;
  uniform float uRadius;     // disc radius in local units (CircleGeometry radius)
  uniform vec2  uUvScale;    // (major, minor) half-extent the galaxy fills in the square plate
  varying vec2 vUv;
  varying vec2 vLocal;       // local disc coords, normalized to [-1, 1]
  void main() {
    vLocal = position.xy / max(uRadius, 1e-6);
    // KTX2 textures load flipY=false (compressed textures can't be flipped), so the plate is
    // stored bottom-up; negate v to read it right-side up.
    vUv = vec2(0.5 + vLocal.x * uUvScale.x, 0.5 - vLocal.y * uUvScale.y);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Sa=`
  precision highp float;
  uniform sampler2D uMap;
  uniform float uIntensity;
  uniform float uBgLo;        // luminance below which the plate is treated as background (alpha 0)
  uniform float uBgHi;        // luminance above which the plate is fully opaque
  uniform float uCenterFade;  // normalized radius below which the disc fades (bulge takes over)
  uniform float uEdgeFade;    // normalized radius above which the disc fades to its rim
  varying vec2 vUv;
  varying vec2 vLocal;
  float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
  void main() {
    float r = length(vLocal);
    if (r > 1.0) discard;                                  // circular mask
    vec3 col = texture2D(uMap, vUv).rgb;
    float a = smoothstep(uBgLo, uBgHi, luma(col));          // drop the black sky
    a *= smoothstep(0.0, max(uCenterFade, 1e-4), r);        // fade core → bulge owns it
    a *= 1.0 - smoothstep(uEdgeFade, 1.0, r);               // fade rim
    if (a < 0.003) discard;
    gl_FragColor = vec4(col * uIntensity, a);
  }
`,ba=Math.PI/180;function V(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function P(e,t){const a=Math.hypot(e[0],e[1],e[2]);return!Number.isFinite(a)||a<1e-9?t:[e[0]/a,e[1]/a,e[2]/a]}function Se(e,t,a,r){return[e[0]*t+a[0]*r,e[1]*t+a[1]*r,e[2]*t+a[2]*r]}var Aa=[0,0,1];function ya(e,t,a){const r=P(e,[0,0,1]),l=P(V(Aa,r),[1,0,0]),n=P(V(r,l),[0,1,0]),i=Number.isFinite(t)?t*ba:0,s=P(Se(n,Math.cos(i),l,Math.sin(i)),n),m=P(V(r,s),l),c=Math.min(1,Math.max(.001,a)),f=Math.acos(c),o=P(Se(r,c,m,Math.sqrt(Math.max(0,1-c*c))),r),y=s;return{xAxis:y,yAxis:P(V(o,y),m),zAxis:o,inclinationRad:f}}function xa(e,t,a){if(e.texture===null)return null;const{radius:r}=e,l=e.morphScale!==void 0?e.morphScale[1]:.5,n=ya(t.lengthSq()>1e-12?[t.x,t.y,t.z]:[0,0,1],e.entry.positionAngleDeg,l),i=new q;i.quaternion.setFromRotationMatrix(new We().makeBasis(new _(n.xAxis[0],n.xAxis[1],n.xAxis[2]),new _(n.yAxis[0],n.yAxis[1],n.yAxis[2]),new _(n.zAxis[0],n.zAxis[1],n.zAxis[2]))),a.add(i);const s=new ae(new Uint8Array([0,0,0,0]),1,1,re);s.needsUpdate=!0;const m={uMap:{value:s},uRadius:{value:r},uUvScale:{value:new Ue(ge,ge*l)},uIntensity:{value:ma*(e.galaxyBrightnessScale??1)},uBgLo:{value:ua},uBgHi:{value:sa},uCenterFade:{value:ca},uEdgeFade:{value:da}},c=new ze(r,96),f=new Ce({uniforms:m,vertexShader:va,fragmentShader:Sa,transparent:!0,depthWrite:!1,blending:1,side:2,toneMapped:!1}),o=new xe(c,f);o.name=`dso-disc-${e.entry.catalogId}`,o.raycast=()=>{},o.frustumCulled=!1,o.renderOrder=-15,i.add(o);const y=e.galaxyPalette?.colorBulge??[1,.95,.85],d=new Ye({map:ga(),color:new N(y[0],y[1],y[2]),transparent:!0,depthWrite:!1,blending:2,toneMapped:!1});d.opacity=ve;const F=new qe(d),C=r*Math.min(.6,Math.max(.2,e.galaxyPalette?.bulgeRadiusRatio??.34))*2;F.scale.set(C,C,1),F.renderOrder=-14,a.add(F);let b="none",R=null,A=null,u=!1;const S=x=>{if(e.texture===null)return;const g=Le(e.texture,x);if(g===null)return;if(A!==null){if(A.url===g)return;A.ac.abort(),A=null}const E=new AbortController;A={url:g,ac:E},Ee(g,E.signal).then(T=>{if(u||A===null||A.ac!==E){k(g);return}R!==null&&R!==g&&k(R),R=g,m.uMap.value=T,A=null}).catch(()=>{A!==null&&A.ac===E&&(A=null)})};return b="thumb",S("thumb"),{group:a,mesh:o,radius:r,scenePos:t,tick(x,g){o.frustumCulled=g>1,d.opacity=ve*Math.min(1,Math.max(0,(g-.15)/.85));const E=ye(g),T=E==="none"?"thumb":E;T!==b&&(b=T,S(T))},dispose(){u=!0,A!==null&&(A.ac.abort(),A=null),c.dispose(),f.dispose(),d.dispose(),s.dispose(),R!==null&&(k(R),R=null)}}}function Ca(e){if(e.radius<=0)return null;const{entry:t,shape:a}=e,r=Ae(t),l=new _(r.x,r.y,r.z),n=new q;if(n.name=`dso-${t.catalogId}`,n.position.copy(l),a==="galaxy"&&e.texture?.projection==="flat-disc")return xa(e,l,n);let i=n;if(a==="nebula"){const u=l.clone();u.lengthSq()<1e-12&&u.set(1,0,0),u.normalize();const S=new _().crossVectors(u,new _(0,0,1));S.lengthSq()<1e-6&&S.crossVectors(u,new _(1,0,0)),S.normalize();const x=S.multiplyScalar(Math.sqrt(1-ee*ee)).addScaledVector(u,ee).normalize(),g=new q;g.quaternion.setFromUnitVectors(new _(0,0,1),x),n.add(g),i=g}const s=new He(e.radius,24,16),m=new ae(new Uint8Array([0,0,0,0]),1,1,re);m.needsUpdate=!0;const c=a==="galaxy",f=e.texture!==null,o={uMap:{value:m},uTime:{value:0},uRadius:{value:e.radius},uSteps:{value:c?28:30},uExtinction:{value:c?2:3},uIntensity:{value:he},uDensity:{value:c?ia:1},uDrift:{value:c?la:ra},uUsePalette:{value:f?0:1},uViewMix:{value:1},uZoom:{value:aa},uWarp:{value:pe},uPalA:{value:new N(0,0,0)},uPalB:{value:new N(0,0,0)},uPalC:{value:new N(0,0,0)},uShapeMode:{value:0},uShapeWarp:{value:pe},uShapeFreq:{value:3},uShellMid:{value:0},uShellThick:{value:0},uClump:{value:.15},uBipolar:{value:0},uCstar:{value:0},uShapeSeed:{value:new _(0,0,0)},uBulgeStrength:{value:1},uBulgeRadiusRatio:{value:.2},uBar:{value:0},uArmCount:{value:0},uArmWinding:{value:0},uArmContrast:{value:1},uDustStrength:{value:0},uPositionAngle:{value:e.positionAngleRad??0},uColorBulge:{value:new N(0,0,0)},uColorArms:{value:new N(0,0,0)},uColorDust:{value:new N(0,0,0)},uMorphScale:{value:new _(1,1,1)}};if(c&&e.galaxyPalette!==void 0){const u=e.galaxyPalette;o.uBulgeStrength.value=u.bulgeStrength,o.uBulgeRadiusRatio.value=u.bulgeRadiusRatio,o.uArmCount.value=u.armCount,o.uArmWinding.value=u.armWinding,o.uArmContrast.value=u.armContrast,o.uDustStrength.value=u.dustStrength,o.uBar.value=u.bar??0,W(o.uColorBulge.value,u.colorBulge),W(o.uColorArms.value,u.colorArms),W(o.uColorDust.value,u.colorDust),o.uIntensity.value=u.intensity*oa*(e.galaxyBrightnessScale??1),e.morphScale!==void 0&&o.uMorphScale.value.set(e.morphScale[0],e.morphScale[1],e.morphScale[2])}else if(!c&&!f&&e.nebulaPalette!==void 0){const u=e.nebulaPalette;W(o.uPalA.value,u.colorA),W(o.uPalB.value,u.colorB),W(o.uPalC.value,u.colorC),o.uIntensity.value=he*u.intensity}if(!c&&e.nebulaShape!==void 0){const u=e.nebulaShape;o.uShapeMode.value=u.mode,o.uShapeWarp.value=u.warp,o.uShapeFreq.value=u.freq,o.uShellMid.value=u.shellMid,o.uShellThick.value=u.shellThick,o.uClump.value=u.clump,o.uBipolar.value=u.bipolar,o.uPositionAngle.value=u.positionAngleRad,o.uMorphScale.value.set(u.morphScale[0],u.morphScale[1],u.morphScale[2]),o.uShapeSeed.value.set(u.seedOffset[0],u.seedOffset[1],u.seedOffset[2]),o.uCstar.value=e.cstarBright??0}!c&&e.brightnessScale!==void 0&&(o.uIntensity.value=o.uIntensity.value*e.brightnessScale);const y=new Ce({uniforms:o,vertexShader:Kt,fragmentShader:c?ta:ea,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1}),d=new xe(s,y);d.name=`dso-vol-${t.catalogId}`,d.raycast=()=>{},d.frustumCulled=!1,d.renderOrder=c?-15:-12,i.add(d);let F="none",C=null,b=null,R=!1;const A=u=>{if(e.texture===null)return;const S=Le(e.texture,u);if(S===null)return;if(b!==null){if(b.url===S)return;b.ac.abort(),b=null}const x=new AbortController;b={url:S,ac:x},Ee(S,x.signal).then(g=>{if(R||b===null||b.ac!==x){k(S);return}C!==null&&C!==S&&k(C),C=S,o.uMap.value=g,b=null}).catch(()=>{b!==null&&b.ac===x&&(b=null)})};return f&&(F="thumb",A("thumb")),{group:n,mesh:d,radius:e.radius,scenePos:l,tick(u,S){if(o.uTime.value=o.uTime.value+u,d.frustumCulled=S>1,!c){const x=Math.min(1,Math.max(0,(S-1)/2));o.uSteps.value=Math.round(16+14*x);const g=G((30-S)/28);o.uViewMix.value=g**na}if(f){const x=ye(S),g=x==="none"?"thumb":x;g!==F&&(F=g,A(g))}},dispose(){R=!0,b!==null&&(b.ac.abort(),b=null),s.dispose(),y.dispose(),m.dispose(),C!==null&&(k(C),C=null)}}}function Ra(e,t){const a=Je(e),r=a.layers.dso,l=a.cameraThree,n=new q;n.name="dsoVolumeLayer",r.add(n),jt(a.gl);const i=Ke();let s=[];const m=new Map;let c=!1,f=0;const o={current:oe.getState().showDsoVolumes},y={current:performance.now()},d={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:1,aspect:1},F=new _,C=new _,b=new _,R=new _,A=()=>{n.visible=o.current&&m.size>0},u=h=>{const M=m.get(h);M!==void 0&&(n.remove(M.group),M.dispose(),m.delete(h),tt(h))},S=()=>{for(const h of[...m.keys()])u(h)},x=()=>{c||(S(),s=t.buildSpecs().filter(h=>h.radius>0).map(h=>{const M=Ae(h.entry);return{id:h.entry.catalogId,scenePos:new _(M.x,M.y,M.z),radius:h.radius,spec:h}}),A())},g=()=>{ie(l,d,F,C,b),R.set(d.position.x,d.position.y,d.position.z);const h=[],M=[];for(const v of s){const B=v.scenePos.distanceToSquared(R),U=Math.sqrt(B);if(U<=v.radius){M.push(v);continue}const De=v.radius/U,Ie=v.spec.visibilityFactor??1;De<(m.has(v.id)?.00105:.0015)*Ie||Oe(v.scenePos,d.position,d.forward,d.right,d.up,d.fovYRadians,d.aspect)&&h.push({cand:v,distSq:B})}h.sort((v,B)=>v.distSq-B.distSq);const D=new Map;for(const v of M)D.set(v.id,v);for(const{cand:v}of h){if(D.size>=128)break;D.set(v.id,v)}for(const v of[...m.keys()])D.has(v)||u(v);let I=0;for(const[v,B]of D){if(m.has(v))continue;if(I>=4)break;const U=Ca(B.spec);U!==null&&(n.add(U.group),m.set(v,U),B.spec.shape==="galaxy"&&et(v),I+=1)}A()};Promise.resolve().then(x).catch(h=>console.error("[createDsoVolumeMount] rebuildCandidates failed:",h));const E=oe.subscribe(h=>({showDsoVolumes:h.showDsoVolumes}),h=>{o.current=h.showDsoVolumes,A()},{equalityFn:Pe}),T=i.getQueryCache().subscribe(h=>{(le(h,"openngc-dso-catalog")||le(h,"custom-objects-catalog"))&&x()}),Te=t.subscribeReady?.(x);return{onFrame:h=>{if(!o.current||s.length===0)return;const M=performance.now(),D=Math.min(ha,Math.max(0,(M-y.current)/1e3));if(y.current=M,f+=1,f%6===0&&g(),m.size!==0){ie(l,d,F,C,b),R.set(d.position.x,d.position.y,d.position.z);for(const I of m.values()){const v=I.scenePos.distanceTo(R),B=I.radius>0?v/I.radius:Number.POSITIVE_INFINITY;I.tick(D,B)}}},dispose:()=>{c=!0,E(),T(),Te?.(),S(),r.remove(n)}}}function _a(e){return(e.openNgcTypeRaw==null||e.openNgcTypeRaw==="G")&&e.parentGalaxyId==null}function be(e,t){const a=Ze(e.distPc,e.majAxArcmin);if(a<=0)return null;const r=_e(e.catalogId);return{entry:e,shape:"nebula",radius:a,texture:t,nebulaPalette:t===null?ft(e,r):void 0,nebulaShape:It(e,r),brightnessScale:Nt(e.vMag),cstarBright:e.type==="planetary_nebula"?Gt(e.cstarVMag):0,visibilityFactor:kt(e.vMag)}}function Ma(e,t){if(!_a(e))return null;const a=Re(e);if(a===null||a.discRadiusSu<=0)return null;const r=nt(e.catalogId)?rt(e):vt(e,_e(e.catalogId));return{entry:e,shape:"galaxy",radius:t?.projection==="flat-disc"?je(a.discRadiusSu):a.discRadiusSu,texture:t,galaxyPalette:r,morphScale:a.morphScale,positionAngleRad:a.positionAngleRad,galaxyBrightnessScale:bt(e.surfBrightness)}}function wa(e){let t={},a={};return Ra(e,{buildSpecs:()=>{const l=[];for(const n of Xe()){const i=Ge(n.catalogId);if(n.type==="nebula"||n.type==="planetary_nebula"){const s=be(n,t[i]??null);s!==null&&l.push(s)}else if(n.type==="star_cluster"&&n.openNgcTypeRaw==="Cl+N"){const s=be(n,t[i]??null);s!==null&&l.push(s)}else if(n.type==="galaxy"){const s=Ma(n,a[i]??null);s!==null&&l.push(s)}}return l},subscribeReady:l=>{let n=!1;return qt().then(i=>{n||(t=i,l())}),ke().then(i=>{n||(a=i,l())}),()=>{n=!0}}})}var ja=$e(wa,"present.hud");export{ja as DsoVolumesMountR3f};
