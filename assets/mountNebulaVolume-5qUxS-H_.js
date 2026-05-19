import{n as Z}from"./state-data-vendor-C3QYJult.js";import{j as ee}from"./simStateMigration-2dphAwns.js";import{n as U}from"./scenePrefsStore-BjccSgSd.js";import{B as te,Ct as oe,D as V,L as re,U as Q,dt as z,gt as G,ht as ae,m as ne,pt as Y,rt as ie,t as se,u as le,wt as w,y as ue}from"./three-vendor-BhRh_ddp.js";import{gt as ce,n as fe,nt as he}from"./index-Bm2YMtx-.js";import{t as me}from"./r3fHostExtras-BZZUIlbo.js";import{a as de,o as pe,r as q}from"./majorDsoSelector-BBbtJzjU.js";import{i as ge,t as ve}from"./equirectBackSideMaterial-FZKOvCEk.js";import{t as ye}from"./shaderNoiseHelpers-BZZYASr5.js";function Se(e){let t=17;for(let o=0;o<e.length;o+=1)t=(t*31+e.charCodeAt(o))%104729;return t/104729}function p(e,t){const o=Math.sin((e+t)*43758.5453123)*12589.317;return o-Math.floor(o)}function F(e){return Math.min(1,Math.max(0,e))}var Me=Math.PI/180;function be(e,t){const o=Number.isFinite(e.majAxArcmin)?Math.max(e.majAxArcmin??0,4):4,a=Number.isFinite(e.minAxArcmin)&&(e.minAxArcmin??0)>0?Math.min(1,Math.max(.2,(e.minAxArcmin??o)/o)):null,r=e.type==="planetary_nebula"?.72+p(t,.11)*.2:.34+p(t,.11)*.42,c=a??r,n=e.type==="planetary_nebula"?Math.max(c,.72+p(t,.29)*.2):Math.max(.28,c*(.68+p(t,.29)*.3)),s=Number.isFinite(e.positionAngleDeg)?(e.positionAngleDeg??0)*Me:p(t,.47)*Math.PI*2,f=(p(t,.67)-.5)*(e.type==="planetary_nebula"?.22:.58);let l=p(t,.81)-.5,d=p(t,1.03)-.5,i=p(t,1.29)-.5;l*l+d*d+i*i<1e-8&&(l=.3,d=-.2,i=.5);const u=Math.sqrt(l*l+d*d+i*i),m=[l/u,d/u,i/u],g=e.type==="planetary_nebula"?.42+p(t,1.41)*.2:.78+p(t,1.41)*.5;return{morphAngleRad:s,morphTiltRad:f,morphScale:[1,c,n],warpAxis:m,warpStrength:g}}var Ae={hueA:.97,hueB:.48,hueJitter:.04,satRange:[.82,.95],lightBRange:[.48,.62],lightA:.06,lightCRange:[.72,.86],dustStrength:1.05,coreBoost:1.6,intensityScale:1.55,morphologyMode:0,accentBias:.55},Ce={hueA:.52,hueB:.88,hueJitter:.05,satRange:[.78,.95],lightBRange:[.55,.7],lightA:.08,lightCRange:[.78,.92],dustStrength:.35,coreBoost:2.4,intensityScale:1.85,morphologyMode:1,accentBias:.65},Re={hueA:.78,hueB:.32,hueJitter:.05,satRange:[.72,.92],lightBRange:[.46,.6],lightA:.05,lightCRange:[.7,.82],dustStrength:.6,coreBoost:2,intensityScale:1.7,morphologyMode:2,accentBias:.7},xe={hueA:.62,hueB:.58,hueJitter:.03,satRange:[.6,.82],lightBRange:[.46,.6],lightA:.07,lightCRange:[.78,.9],dustStrength:.85,coreBoost:1.2,intensityScale:1.25,morphologyMode:5,accentBias:.3},Be={hueA:.07,hueB:.08,hueJitter:.02,satRange:[.35,.55],lightBRange:[.28,.38],lightA:.02,lightCRange:[.55,.7],dustStrength:1.4,coreBoost:.6,intensityScale:.65,morphologyMode:3,accentBias:.15},Ne={hueA:.94,hueB:.6,hueJitter:.05,satRange:[.78,.92],lightBRange:[.5,.66],lightA:.07,lightCRange:[.82,.95],dustStrength:.95,coreBoost:2.2,intensityScale:1.75,morphologyMode:4,accentBias:.6};function we(e,t){const o=e.toUpperCase();return o==="DRKN"||o==="DN"?Be:o==="PN"||t==="planetary_nebula"?Ce:o==="SNR"?Re:o==="RFN"||o==="REFN"?xe:o==="CL+N"||o==="CLN"||o==="OCL+N"?Ne:Ae}function I(e,t,o){const a=F(t),r=F(o);if(a===0)return[r,r,r];const c=r<.5?r*(1+a):r+a-r*a,n=2*r-c,s=(e%1+1)%1,f=[s+1/3,s,s-1/3],l=[0,0,0];for(let d=0;d<3;d+=1){let i=f[d];i<0&&(i+=1),i>1&&(i-=1),i<1/6?l[d]=n+(c-n)*6*i:i<1/2?l[d]=c:i<2/3?l[d]=n+(c-n)*(2/3-i)*6:l[d]=n}return[l[0],l[1],l[2]]}function L(e,t){return e[0]+(e[1]-e[0])*F(t)}function Ee(e,t){const o=we(e.openNgcTypeRaw??"",e.type),a=(p(t,.211)-.5)*2*o.hueJitter,r=(p(t,.379)-.5)*2*o.hueJitter,c=p(t,.557),n=p(t,.733),s=p(t,.911),f=p(t,.143)>.55,l=f?o.hueB:o.hueA,d=f?o.hueA:o.hueB,i=l+a,u=d+r,m=L(o.satRange,c),g=L(o.lightBRange,n),y=L(o.lightCRange,s);return{colorA:I(i,m*.4,o.lightA),colorB:I(i,m,g),colorC:I(u,Math.min(1,m+.05),y),dustStrength:o.dustStrength*(.85+p(t,1.17)*.3),coreBoost:o.coreBoost,intensityScale:o.intensityScale,morphologyMode:o.morphologyMode,accentBias:o.accentBias}}function Te(e,t){const o=r=>[p(t,r)*7.3,p(t,r+.13)*7.3,p(t,r+.27)*7.3],a=e==="ultra"?1:0;return[{radiusScale:1,seedOffset:o(2.1),octaveBoost:0,intensityMul:.85},{radiusScale:.78,seedOffset:o(2.6),octaveBoost:a,intensityMul:1.1},{radiusScale:.55,seedOffset:o(3.1),octaveBoost:a,intensityMul:1.45}]}function _e(e,t,o,a){if(!Number.isFinite(e)||e<=0)return[];const r=o.morphologyMode;if(r===3)return[];const c=o.coreBoost*(r===1?2.6:1.8),n=o.colorC,s=[n[0]*c,n[1]*c,n[2]*c];return[{offset:[0,0,0],radius:(.06+p(t,4.91)*.06)*e,color:s,intensity:1}]}var J=`
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
`,K=ye,X=`
uniform float uTime;
uniform float uRadius;
uniform float uIntensity;
uniform float uStructureScale;
uniform float uQuality;
uniform float uShellIndex;
uniform float uShellIntensityMul;
uniform float uOctaveBoost;
uniform float uMorphologyMode;
uniform float uDustStrength;
uniform float uCoreBoost;
uniform float uAccentBias;
uniform float uWarpStrength;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform vec3 uMorphScale;
uniform vec3 uWarpAxis;
uniform vec3 uDriftVec;
uniform vec3 uSeedOffset;
uniform vec2 uMorphAngles;
`,Ie=`
${X}
varying vec3 vWorldPos;
varying vec3 vLocalPos;
varying vec3 vNormalDir;
${K}

void main() {
  vec3 fragToCam = normalize(cameraPosition - vWorldPos);
  float cosA = clamp(dot(normalize(vNormalDir), fragToCam), -1.0, 1.0);
  float sinA = sqrt(max(0.0, 1.0 - cosA * cosA));

  // Local sample point in ellipsoid space.
  vec3 q = vLocalPos / max(uRadius, 0.0001);
  q.xy = rotate2D(q.xy, uMorphAngles.x);
  q.xz = rotate2D(q.xz, uMorphAngles.y);
  q /= max(uMorphScale, vec3(0.001));

  // Macro silhouette — keeps gas inside an organic outline rather than a hard sphere.
  vec3 macroCoord = q * 1.3 + uSeedOffset * 1.7;
  float macro = fbm4(macroCoord);
  float macroMask = smoothstep(0.36, 0.62, macro);
  float silhouetteMask = 1.0 - smoothstep(0.62, 0.94, sinA);
  float boundary = macroMask * silhouetteMask;
  if (boundary < 0.015) discard;

  // Domain-warped emission noise — produces filaments, not pillows.
  vec3 driftedSeed = uSeedOffset + uTime * uDriftVec;
  vec3 warp = curlWarp(q * 1.4 + driftedSeed * 0.3, uWarpStrength);
  vec3 noisePoint = q * uStructureScale + driftedSeed + warp;

  float primary = (uQuality > 0.5 || uOctaveBoost > 0.5) ? fbm6(noisePoint) : fbm4(noisePoint);
  float secondary = fbm4(noisePoint * 2.0 + vec3(5.0, -2.0, 3.4));

  // Mode-specific density curves.
  // 0 emission, 1 planetary, 2 SNR, 3 dark, 4 cluster+neb, 5 reflection.
  float modeLow = 0.40;
  float modeHigh = 0.82;
  if (uMorphologyMode > 0.5 && uMorphologyMode < 1.5) { modeLow = 0.46; modeHigh = 0.74; }
  else if (uMorphologyMode > 1.5 && uMorphologyMode < 2.5) { modeLow = 0.36; modeHigh = 0.88; }
  else if (uMorphologyMode > 2.5 && uMorphologyMode < 3.5) { modeLow = 0.30; modeHigh = 0.66; }
  else if (uMorphologyMode > 4.5) { modeLow = 0.36; modeHigh = 0.78; }
  float clouds = smoothstep(modeLow, modeHigh, primary);
  float voids = 1.0 - smoothstep(0.42, 0.86, secondary);
  float density = clouds * voids * boundary;

  // SNR anisotropy — stretch density along the warp axis for shock-front filaments.
  if (uMorphologyMode > 1.5 && uMorphologyMode < 2.5) {
    float anis = abs(dot(normalize(q + vec3(1e-4)), uWarpAxis));
    density *= mix(0.55, 1.25, anis);
  }

  // Dust absorption — second, lower-frequency noise carves dark lanes through emission.
  vec3 dustCoord = q * (uStructureScale * 0.42) + uSeedOffset * 0.85 + vec3(13.0, -7.0, 4.0);
  float dust = smoothstep(0.38, 0.78, fbm4(dustCoord));
  float dustMask = clamp(1.0 - dust * uDustStrength, 0.0, 1.0);

  // Dark-nebula inversion: emission collapses, dust becomes the structure (rim-lit).
  if (uMorphologyMode > 2.5 && uMorphologyMode < 3.5) {
    density = dust * 0.55 * boundary * mix(0.3, 1.0, sinA);
    dustMask = 1.0;
  } else {
    density *= dustMask;
  }
  if (density < 0.015) discard;

  float spike = smoothstep(0.66, 0.94, primary) * density;
  float limb = mix(1.0, 0.55, sinA);
  float shellGain = mix(1.0, uShellIntensityMul, 0.9);

  // Color: dark base → mid emission → secondary-line highlight on spikes.
  vec3 col = mix(uColorA, uColorB, clamp(density * 1.4, 0.0, 1.0));
  col = mix(col, uColorC, clamp(spike * (0.6 + uAccentBias * 0.6), 0.0, 1.0));

  float intensity = (density * 1.5 + spike * uCoreBoost) * limb * uIntensity * shellGain;
  float alpha = clamp(density * limb, 0.0, 1.0);
  gl_FragColor = vec4(col * intensity, alpha);
}
`,Le=`
${X}
varying vec3 vWorldPos;
varying vec3 vLocalPos;
varying vec3 vNormalDir;
${K}

/** Ray–unit-sphere intersection in ellipsoid-local space; returns (tNear, tFar) or (-1,-1). */
vec2 intersectUnitSphere(vec3 ro, vec3 rd) {
  float b = dot(ro, rd);
  float c = dot(ro, ro) - 1.0;
  float h = b * b - c;
  if (h < 0.0) return vec2(-1.0);
  h = sqrt(h);
  return vec2(-b - h, -b + h);
}

void main() {
  // Build ray in ellipsoid-local frame.
  vec3 roLocal = (inverse(modelMatrix) * vec4(cameraPosition, 1.0)).xyz;
  vec3 rdLocal = normalize((inverse(modelMatrix) * vec4(normalize(vWorldPos - cameraPosition), 0.0)).xyz);
  vec3 scaleInv = 1.0 / max(uMorphScale, vec3(0.001)) / max(uRadius, 0.0001);
  vec3 ro = roLocal * scaleInv;
  vec3 rd = normalize(rdLocal * scaleInv);
  vec2 tHit = intersectUnitSphere(ro, rd);
  if (tHit.y < 0.0) discard;
  float tStart = max(tHit.x, 0.0);
  float tEnd = tHit.y;
  if (tEnd - tStart < 1e-4) discard;

  int steps = (uQuality > 0.5) ? 32 : 22;
  float stepLen = (tEnd - tStart) / float(steps);
  vec3 emission = vec3(0.0);
  float transmittance = 1.0;
  vec3 driftedSeed = uSeedOffset + uTime * uDriftVec;

  for (int i = 0; i < 32; i += 1) {
    if (i >= steps) break;
    float t = tStart + (float(i) + 0.5) * stepLen;
    vec3 q = ro + rd * t;

    vec3 warp = curlWarp(q * 1.4 + driftedSeed * 0.3, uWarpStrength);
    vec3 np = q * uStructureScale + driftedSeed + warp;
    float primary = fbm4(np);
    float secondary = fbm4(np * 2.0 + vec3(5.0, -2.0, 3.4));
    float clouds = smoothstep(0.36, 0.82, primary);
    float voids = 1.0 - smoothstep(0.42, 0.86, secondary);
    float density = clouds * voids;

    float dust = smoothstep(0.38, 0.78, fbm4(q * (uStructureScale * 0.42) + uSeedOffset * 0.85 + vec3(13.0, -7.0, 4.0)));
    float absorb = dust * uDustStrength;

    float spike = smoothstep(0.66, 0.94, primary) * density;
    vec3 col = mix(uColorA, uColorB, clamp(density * 1.4, 0.0, 1.0));
    col = mix(col, uColorC, clamp(spike * (0.6 + uAccentBias * 0.6), 0.0, 1.0));
    float emit = (density * 1.5 + spike * uCoreBoost) * uIntensity;

    emission += transmittance * col * emit * stepLen;
    transmittance *= exp(-(density * 0.6 + absorb * 1.4) * stepLen);
    if (transmittance < 0.02) break;
  }

  float alpha = clamp(1.0 - transmittance, 0.0, 1.0);
  if (alpha < 0.015) discard;
  gl_FragColor = vec4(emission, alpha);
}
`,Pe="/assets/transcoder/",R=new Map,P=null;function $(){if(P!==null)return P;const e=new se;return e.setTranscoderPath(Pe),P=e,e}function Oe(e){try{$().detectSupport(e)}catch{}}function N(e){const t=R.get(e);t!==void 0&&(t.refCount-=1,!(t.refCount>0)&&(t.texture?.dispose(),R.delete(e)))}function j(e,t,o){let a=null;const r=new Promise((n,s)=>{a=()=>{N(e),s(new DOMException("aborted","AbortError"))},o.addEventListener("abort",a,{once:!0})}),c=()=>{a&&o.removeEventListener("abort",a)};return Promise.race([t.promise,r]).finally(c)}function De(e,t){if(t?.aborted)return Promise.reject(new DOMException("aborted","AbortError"));const o=R.get(e);if(o!==void 0)return o.refCount+=1,t!==void 0?j(e,o,t):o.promise;const a={refCount:1,texture:null,promise:new Promise((r,c)=>{$().load(e,n=>{const s=R.get(e);if(s===void 0||s.refCount<=0){n.dispose(),R.delete(e),c(new DOMException("aborted","AbortError"));return}a.texture=n,r(n)},void 0,n=>{R.delete(e),c(n instanceof Error?n:new Error(String(n)))})})};return R.set(e,a),t!==void 0?j(e,a,t):a.promise}var Fe="/assets/textures/nebulas/manifest.json",E=null;function ke(e){if(e===null||typeof e!="object")return!1;const t=e;return typeof t.thumb=="string"&&typeof t.mid=="string"&&typeof t.high=="string"&&typeof t.source=="string"&&typeof t.license=="string"&&typeof t.attribution=="string"}function Ue(e){if(e===null||typeof e!="object")return{entries:{}};const t=e;if(t.entries===null||typeof t.entries!="object")return{entries:{}};const o={};for(const[a,r]of Object.entries(t.entries))ke(r)&&(o[a]=r);return{entries:o}}var qe=1e4;function je(){if(E!==null)return E;const e=new AbortController,t=setTimeout(()=>e.abort(),qe);return E=fetch(Fe,{signal:e.signal}).then(async o=>o.ok?Ue(await o.json()):{entries:{}}).catch(()=>({entries:{}})).finally(()=>clearTimeout(t)),E}function He(e){return e.replace(/\s+/g,"").toUpperCase()}async function We(e){return(await je()).entries[He(e)]??null}var Ve=.6,Qe=1.2;function ze(e,t,o){if(t<=e)return o>=t?1:0;const a=Math.min(1,Math.max(0,(o-e)/(t-e)));return a*a*(3-2*a)}function Ge(e){return!Number.isFinite(e)||e<0?"none":e<=.8?"high":e<=2?"mid":e<=5?"thumb":"none"}function Ye(e){if(!Number.isFinite(e)||e<0)return{shellOpacity:0,sphereOpacity:1};const t=ze(Ve,Qe,e);return{shellOpacity:t,sphereOpacity:1-t}}var Je=.95,H=48;function Ke(e,t){switch(t){case"high":return e.high;case"mid":return e.mid;case"thumb":return e.thumb;default:return null}}function Xe(e,t){const{center:o,radius:a,entry:r}=t,c=new Y(a*Je,H,Math.max(2,Math.floor(H/2))),n=new Uint8Array([0,0,0,0]),s=new ue(n,1,1,ie);s.needsUpdate=!0;const f=ve({texture:s,programCacheKey:"nebula-spheremap-edge-feather"}),l=new Q(c,f);l.name=`nebula-spheremap-${r.thumb}`,l.position.copy(o),l.rotation.set(-Math.PI/2,0,0),l.raycast=()=>{},l.frustumCulled=!1,l.renderOrder=-5,e.add(l);let d="none",i=null,u=null,m=!1,g=0;const y=(M,S,v)=>{if(m){N(M);return}if(u===null||u.ac!==S){N(M);return}i!==null&&i!==M&&N(i),i=M,f.map=v,f.needsUpdate=!0},x=M=>{const S=Ke(r,M);if(S===null)return;if(u!==null){if(u.url===S)return;u.ac.abort(),u=null}const v=new AbortController;u={url:S,ac:v},De(S,v.signal).then(h=>{y(S,v,h),u!==null&&u.ac===v&&(u=null)}).catch(()=>{u!==null&&u.ac===v&&(u=null)})};return{update(M){if(m)return;const S=M.distanceTo(o),v=a>0?S/a:Number.POSITIVE_INFINITY,h=Ge(v);h!==d&&(d=h,h==="none"?u!==null&&(u.ac.abort(),u=null):x(h));const b=Ye(v);g=i!==null?b.sphereOpacity:0,f.opacity=g,l.visible=g>.001},getSphereOpacity(){return g},dispose(){m||(m=!0,u!==null&&(u.ac.abort(),u=null),e.remove(l),c.dispose(),f.map=null,f.dispose(),s.dispose(),i!==null&&(N(i),i=null))}}}var $e=he.far/4;function T(e){return new ne(e[0],e[1],e[2])}function O(e){return new w(e[0],e[1],e[2])}function Ze(e){if(!Number.isFinite(e.distPc)||e.distPc<=0||!Number.isFinite(e.majAxArcmin)||(e.majAxArcmin??0)<=0)return 0;const t=te.degToRad(e.majAxArcmin/120),o=ee(e.distPc*Math.tan(t));return!Number.isFinite(o)||o<=0?0:Math.min(o,$e)}function et(e,t,o,a,r,c,n,s){return{uTime:{value:0},uRadius:{value:t},uIntensity:{value:1.45*s.intensityScale},uStructureScale:{value:4.4+o*.6},uQuality:{value:0},uShellIndex:{value:o},uShellIntensityMul:{value:a},uOctaveBoost:{value:r},uMorphologyMode:{value:s.morphologyMode},uDustStrength:{value:s.dustStrength},uCoreBoost:{value:s.coreBoost},uAccentBias:{value:s.accentBias},uWarpStrength:{value:n.warpStrength},uColorA:{value:T(s.colorA)},uColorB:{value:T(s.colorB)},uColorC:{value:T(s.colorC)},uMorphScale:{value:O(n.morphScale)},uWarpAxis:{value:O(n.warpAxis)},uDriftVec:{value:new w(.009+Math.sin(e+o*1.1)*.004,-.006+Math.cos(e*1.7+o)*.004,.007+Math.sin(e*.6+o*2.3)*.005)},uSeedOffset:{value:O(c)},uMorphAngles:{value:new oe(n.morphAngleRad,n.morphTiltRad)}}}function tt(e){return new z({uniforms:e,vertexShader:J,fragmentShader:Ie,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1})}function ot(e){return new z({uniforms:e,vertexShader:J,fragmentShader:Le,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1})}var D=null;function rt(){if(D!==null)return D;const e=128,t=document.createElement("canvas");t.width=e,t.height=e;const o=t.getContext("2d");if(o!==null){const r=o.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.35,"rgba(255,255,255,0.55)"),r.addColorStop(.7,"rgba(255,255,255,0.12)"),r.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=r,o.fillRect(0,0,e,e)}const a=new le(t);return a.colorSpace=re,a.needsUpdate=!0,D=a,a}function at(e,t){const o=Ze(e);if(o<=0)return null;const a=ce(e),r=Se(e.catalogId),c=be(e,r),n=Ee(e,r),s=Te(t,r),f=new V;f.name=`nebula-${e.catalogId}`,f.position.set(a.x,a.y,a.z);const l=[];for(let m=0;m<s.length;m+=1){const g=s[m],y=o*g.radiusScale,x=et(o,y,m,g.intensityMul,g.octaveBoost,g.seedOffset,c,n),M=new Y(y,40,28),S=tt(x),v=new Q(M,S);v.frustumCulled=!1,v.renderOrder=-10-m,f.add(v),l.push({mesh:v,shellMaterial:S,raymarchMaterial:null,shellIndex:m,baseIntensity:x.uIntensity.value})}const d=_e(o,r,n,c),i=[];let u=null;if(d.length>0){u=rt();for(const m of d){const g=new G({map:u,color:T(m.color),transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),y=new ae(g);y.position.set(m.offset[0],m.offset[1],m.offset[2]),y.scale.setScalar(m.radius*2),y.renderOrder=-10-s.length,y.frustumCulled=!1,f.add(y),i.push(y)}}return{group:f,shells:l,sprites:i,spriteTexture:u,radius:o,spheremap:null}}function nt(e){e.spheremap!==null&&(e.spheremap.dispose(),Object.assign(e,{spheremap:null}));for(const t of e.shells)t.mesh.geometry.dispose(),t.shellMaterial.dispose(),t.raymarchMaterial!==null&&t.raymarchMaterial.dispose();for(const t of e.sprites)t.material instanceof G&&t.material.dispose()}function W(e,t){const o=t==="ultra";for(const a of e)for(const r of a.shells)r.shellMaterial.uniforms.uQuality.value=o?1:0,r.shellIndex===2&&(o?(r.raymarchMaterial===null&&(r.raymarchMaterial=ot(r.shellMaterial.uniforms)),r.raymarchMaterial.uniforms.uQuality.value=1,r.mesh.material=r.raymarchMaterial):r.mesh.material=r.shellMaterial)}function it(){return ge(pe())}function st(e){const t=me(e),o=t.layers.dso,a=t.cameraThree,r=new V;r.name="nebulaVolumeLayer",o.add(r);const c=new w,n=new w;Oe(t.gl);const s=fe(),f=[],l=U.getState(),d={current:l.showNebulaClouds},i={current:l.nebulaQuality},u={current:0},m={current:performance.now()},g=()=>{r.visible=d.current&&f.length>0},y=()=>{for(;f.length>0;){const h=f.pop();r.remove(h.group),nt(h)}},x=(h,b)=>{We(b.catalogId).then(A=>{if(A===null||!f.includes(h))return;const C=Xe(h.group,{center:new w(0,0,0),radius:h.radius,entry:A});Object.assign(h,{spheremap:C})})},M=()=>{y();const h=it();for(const b of h){const A=at(b,i.current);A!==null&&(f.push(A),r.add(A.group),x(A,b))}W(f,i.current),g()};M();const S=U.subscribe(h=>({showNebulaClouds:h.showNebulaClouds,nebulaQuality:h.nebulaQuality}),h=>{d.current=h.showNebulaClouds,i.current!==h.nebulaQuality&&(i.current=h.nebulaQuality,W(f,i.current)),g()},{equalityFn:Z}),v=s.getQueryCache().subscribe(h=>{(q(h,"openngc-dso-catalog")||q(h,"custom-objects-catalog"))&&M()});return{onFrame:h=>{if(!r.visible)return;const b=performance.now(),A=Math.min(.06,Math.max(0,(b-m.current)/1e3));m.current=b,u.current+=A,a.getWorldPosition(c);for(const C of f){let k=1;C.spheremap!==null&&(n.copy(c),C.group.worldToLocal(n),C.spheremap.update(n),k=1-C.spheremap.getSphereOpacity());for(const B of C.shells){B.shellMaterial.uniforms.uTime.value=u.current;const _=B.baseIntensity*k;B.shellMaterial.uniforms.uIntensity.value!==_&&(B.shellMaterial.uniforms.uIntensity.value=_),B.raymarchMaterial!==null&&(B.raymarchMaterial.uniforms.uIntensity.value=_)}}},dispose:()=>{S(),v(),y(),o.remove(r)}}}var St=de(st,"present.hud");export{St as NebulaVolumeMountR3f};
