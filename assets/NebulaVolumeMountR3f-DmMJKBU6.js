import{i as W}from"./rolldown-runtime-BOC55nOF.js";import{p as Q}from"./r3f-vendor-BI9mNYCY.js";import{n as U}from"./state-data-vendor-DNk8p1j6.js";import{Et as V}from"./sceneRuntimeTypes-zSL_qd_j.js";import{n as L}from"./scenePrefsStore-BvmYcMkB.js";import{n as P}from"./appSimRuntimeHost-DMEkMZuy.js";import{a as H}from"./catalog-query-defaults-jXf5nuKL.js";import"./use-custom-objects-catalog-BD-bYnM5.js";import{$ as G,a as Y}from"./index-uOGBC_pE.js";import{a as j,i as J,o as $,t as K}from"./r3fHostExtras-BpWaYoWX.js";import{B as X,E as F,L as Z,Tt as I,U as ee,_t as T,ft as q,gt as te,m as oe,mt as ae,u as re,wt as ne}from"./three-vendor-DUnm81py.js";import{i as se,n as ie,r as _}from"./dsoMajorNebula-CsXUFj_U.js";var D=W(Q(),1);function le(e){let o=17;for(let t=0;t<e.length;t+=1)o=(o*31+e.charCodeAt(t))%104729;return o/104729}function l(e,o){const t=Math.sin((e+o)*43758.5453123)*12589.317;return t-Math.floor(t)}function w(e){return Math.min(1,Math.max(0,e))}var ce=Math.PI/180;function ue(e,o){const t=Number.isFinite(e.majAxArcmin)?Math.max(e.majAxArcmin??0,4):4,s=Number.isFinite(e.minAxArcmin)&&(e.minAxArcmin??0)>0?Math.min(1,Math.max(.2,(e.minAxArcmin??t)/t)):null,a=e.type==="planetary_nebula"?.72+l(o,.11)*.2:.34+l(o,.11)*.42,h=s??a,u=e.type==="planetary_nebula"?Math.max(h,.72+l(o,.29)*.2):Math.max(.28,h*(.68+l(o,.29)*.3)),r=Number.isFinite(e.positionAngleDeg)?(e.positionAngleDeg??0)*ce:l(o,.47)*Math.PI*2,d=(l(o,.67)-.5)*(e.type==="planetary_nebula"?.22:.58);let i=l(o,.81)-.5,c=l(o,1.03)-.5,n=l(o,1.29)-.5;i*i+c*c+n*n<1e-8&&(i=.3,c=-.2,n=.5);const g=Math.sqrt(i*i+c*c+n*n),m=[i/g,c/g,n/g],p=e.type==="planetary_nebula"?.42+l(o,1.41)*.2:.78+l(o,1.41)*.5;return{morphAngleRad:r,morphTiltRad:d,morphScale:[1,h,u],warpAxis:m,warpStrength:p}}var fe={hueA:.97,hueB:.48,hueJitter:.04,satRange:[.82,.95],lightBRange:[.48,.62],lightA:.06,lightCRange:[.72,.86],dustStrength:1.05,coreBoost:1.6,intensityScale:1.55,morphologyMode:0,accentBias:.55},me={hueA:.52,hueB:.88,hueJitter:.05,satRange:[.78,.95],lightBRange:[.55,.7],lightA:.08,lightCRange:[.78,.92],dustStrength:.35,coreBoost:2.4,intensityScale:1.85,morphologyMode:1,accentBias:.65},he={hueA:.78,hueB:.32,hueJitter:.05,satRange:[.72,.92],lightBRange:[.46,.6],lightA:.05,lightCRange:[.7,.82],dustStrength:.6,coreBoost:2,intensityScale:1.7,morphologyMode:2,accentBias:.7},de={hueA:.62,hueB:.58,hueJitter:.03,satRange:[.6,.82],lightBRange:[.46,.6],lightA:.07,lightCRange:[.78,.9],dustStrength:.85,coreBoost:1.2,intensityScale:1.25,morphologyMode:5,accentBias:.3},pe={hueA:.07,hueB:.08,hueJitter:.02,satRange:[.35,.55],lightBRange:[.28,.38],lightA:.02,lightCRange:[.55,.7],dustStrength:1.4,coreBoost:.6,intensityScale:.65,morphologyMode:3,accentBias:.15},ve={hueA:.94,hueB:.6,hueJitter:.05,satRange:[.78,.92],lightBRange:[.5,.66],lightA:.07,lightCRange:[.82,.95],dustStrength:.95,coreBoost:2.2,intensityScale:1.75,morphologyMode:4,accentBias:.6};function ge(e,o){const t=e.toUpperCase();return t==="DRKN"||t==="DN"?pe:t==="PN"||o==="planetary_nebula"?me:t==="SNR"?he:t==="RFN"||t==="REFN"?de:t==="CL+N"||t==="CLN"||t==="OCL+N"?ve:fe}function C(e,o,t){const s=w(o),a=w(t);if(s===0)return[a,a,a];const h=a<.5?a*(1+s):a+s-a*s,u=2*a-h,r=(e%1+1)%1,d=[r+1/3,r,r-1/3],i=[0,0,0];for(let c=0;c<3;c+=1){let n=d[c];n<0&&(n+=1),n>1&&(n-=1),n<1/6?i[c]=u+(h-u)*6*n:n<1/2?i[c]=h:n<2/3?i[c]=u+(h-u)*(2/3-n)*6:i[c]=u}return[i[0],i[1],i[2]]}function R(e,o){return e[0]+(e[1]-e[0])*w(o)}function ye(e,o){const t=ge(e.openNgcTypeRaw??"",e.type),s=(l(o,.211)-.5)*2*t.hueJitter,a=(l(o,.379)-.5)*2*t.hueJitter,h=l(o,.557),u=l(o,.733),r=l(o,.911),d=l(o,.143)>.55,i=d?t.hueB:t.hueA,c=d?t.hueA:t.hueB,n=i+s,g=c+a,m=R(t.satRange,h),p=R(t.lightBRange,u),v=R(t.lightCRange,r);return{colorA:C(n,m*.4,t.lightA),colorB:C(n,m,p),colorC:C(g,Math.min(1,m+.05),v),dustStrength:t.dustStrength*(.85+l(o,1.17)*.3),coreBoost:t.coreBoost,intensityScale:t.intensityScale,morphologyMode:t.morphologyMode,accentBias:t.accentBias}}function Me(e,o){const t=a=>[l(o,a)*7.3,l(o,a+.13)*7.3,l(o,a+.27)*7.3],s=e==="ultra"?1:0;return[{radiusScale:1,seedOffset:t(2.1),octaveBoost:0,intensityMul:.85},{radiusScale:.78,seedOffset:t(2.6),octaveBoost:s,intensityMul:1.1},{radiusScale:.55,seedOffset:t(3.1),octaveBoost:s,intensityMul:1.45}]}function Se(e,o,t,s){if(!Number.isFinite(e)||e<=0)return[];const a=t.morphologyMode;if(a===3)return[];const h=a===1?1:2+(l(o,3.7)>.55?1:0),u=[];for(let r=0;r<h;r+=1){const d=4.1+r*.71,i=l(o,d)*2-1,c=l(o,d+.31)*Math.PI*2,n=(.05+l(o,d+.59)*.32)*e,g=Math.sin(c),m=Math.cos(c),p=Math.sqrt(Math.max(0,1-i*i)),[v,S,f]=s.morphScale,M=[n*p*m*v,n*p*g*S,n*i*f],y=r===0?t.colorC:t.colorB,b=t.coreBoost*(a===1?2.6:1.8),x=[y[0]*b,y[1]*b,y[2]*b];u.push({offset:M,radius:(.04+l(o,d+.91)*.06)*e,color:x,intensity:1})}return u}var O=`
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
`,k=`
vec2 rotate2D(vec2 p, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
}

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
  return mix(mix(nx00, nx10, f.y), mix(nx01, nx11, f.y), f.z);
}

float fbm4(vec3 p) {
  float v = 0.0;
  float amp = 0.55;
  float freq = 1.0;
  for (int i = 0; i < 4; i += 1) {
    v += amp * noise3(p * freq);
    freq *= 1.94;
    amp *= 0.52;
  }
  return v;
}

float fbm6(vec3 p) {
  float v = 0.0;
  float amp = 0.55;
  float freq = 1.0;
  for (int i = 0; i < 6; i += 1) {
    v += amp * noise3(p * freq);
    freq *= 1.92;
    amp *= 0.5;
  }
  return v;
}

vec3 curlWarp(vec3 p, float strength) {
  float a = fbm4(p + vec3(0.0, 11.7, 3.1));
  float b = fbm4(p + vec3(7.3, -4.9, 21.5));
  float c = fbm4(p + vec3(-18.4, 5.6, -2.2));
  return vec3(a - 0.5, b - 0.5, c - 0.5) * strength;
}
`,z=`
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
`,be=`
${z}
varying vec3 vWorldPos;
varying vec3 vLocalPos;
varying vec3 vNormalDir;
${k}

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
`,Ae=`
${z}
varying vec3 vWorldPos;
varying vec3 vLocalPos;
varying vec3 vNormalDir;
${k}

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
`,xe=G.far/4;function A(e){return new oe(e[0],e[1],e[2])}function B(e){return new I(e[0],e[1],e[2])}function Ce(e){if(!Number.isFinite(e.distPc)||e.distPc<=0||!Number.isFinite(e.majAxArcmin)||(e.majAxArcmin??0)<=0)return 0;const o=X.degToRad(e.majAxArcmin/120),t=V(e.distPc*Math.tan(o));return!Number.isFinite(t)||t<=0?0:Math.min(t,xe)}function Re(e,o,t,s,a,h,u,r){return{uTime:{value:0},uRadius:{value:o},uIntensity:{value:1.45*r.intensityScale},uStructureScale:{value:4.4+t*.6},uQuality:{value:0},uShellIndex:{value:t},uShellIntensityMul:{value:s},uOctaveBoost:{value:a},uMorphologyMode:{value:r.morphologyMode},uDustStrength:{value:r.dustStrength},uCoreBoost:{value:r.coreBoost},uAccentBias:{value:r.accentBias},uWarpStrength:{value:u.warpStrength},uColorA:{value:A(r.colorA)},uColorB:{value:A(r.colorB)},uColorC:{value:A(r.colorC)},uMorphScale:{value:B(u.morphScale)},uWarpAxis:{value:B(u.warpAxis)},uDriftVec:{value:new I(.009+Math.sin(e+t*1.1)*.004,-.006+Math.cos(e*1.7+t)*.004,.007+Math.sin(e*.6+t*2.3)*.005)},uSeedOffset:{value:B(h)},uMorphAngles:{value:new ne(u.morphAngleRad,u.morphTiltRad)}}}function Be(e){return new q({uniforms:e,vertexShader:O,fragmentShader:be,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1})}function Ne(e){return new q({uniforms:e,vertexShader:O,fragmentShader:Ae,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1})}var N=null;function we(){if(N!==null)return N;const e=128,o=document.createElement("canvas");o.width=e,o.height=e;const t=o.getContext("2d");if(t!==null){const a=t.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.35,"rgba(255,255,255,0.55)"),a.addColorStop(.7,"rgba(255,255,255,0.12)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.fillRect(0,0,e,e)}const s=new re(o);return s.colorSpace=Z,s.needsUpdate=!0,N=s,s}function Le(e,o){const t=Ce(e);if(t<=0)return null;const s=H(e),a=le(e.catalogId),h=ue(e,a),u=ye(e,a),r=Me(o,a),d=new F;d.name=`nebula-${e.catalogId}`,d.position.set(s.x,s.y,s.z);const i=[];for(let m=0;m<r.length;m+=1){const p=r[m],v=t*p.radiusScale,S=Re(t,v,m,p.intensityMul,p.octaveBoost,p.seedOffset,h,u),f=new ae(v,40,28),M=Be(S),y=new ee(f,M);y.frustumCulled=!1,y.renderOrder=-10-m,d.add(y),i.push({mesh:y,shellMaterial:M,raymarchMaterial:null,shellIndex:m})}const c=Se(t,a,u,h),n=[];let g=null;if(c.length>0){g=we();for(const m of c){const p=new T({map:g,color:A(m.color),transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),v=new te(p);v.position.set(m.offset[0],m.offset[1],m.offset[2]),v.scale.setScalar(m.radius*2),v.renderOrder=-10-r.length,v.frustumCulled=!1,d.add(v),n.push(v)}}return{group:d,shells:i,sprites:n,spriteTexture:g}}function Pe(e){for(const o of e.shells)o.mesh.geometry.dispose(),o.shellMaterial.dispose(),o.raymarchMaterial!==null&&o.raymarchMaterial.dispose();for(const o of e.sprites)o.material instanceof T&&o.material.dispose()}function E(e,o){const t=o==="ultra";for(const s of e)for(const a of s.shells)a.shellMaterial.uniforms.uQuality.value=t?1:0,a.shellIndex===2&&(t?(a.raymarchMaterial===null&&(a.raymarchMaterial=Ne(a.shellMaterial.uniforms)),a.raymarchMaterial.uniforms.uQuality.value=1,a.mesh.material=a.raymarchMaterial):a.mesh.material=a.shellMaterial)}function _e(){return ie(se())}function De(e){const o=K(e).layers.dso,t=new F;t.name="nebulaVolumeLayer",o.add(t);const s=Y(),a=[],h=L.getState(),u={current:h.showNebulaClouds},r={current:h.nebulaQuality},d={current:P().getState().universeMode.activeGalaxyId!==null},i={current:0},c={current:performance.now()},n=()=>{t.visible=u.current&&!d.current&&a.length>0},g=()=>{for(;a.length>0;){const f=a.pop();f!=null&&(t.remove(f.group),Pe(f))}},m=()=>{g();const f=_e();for(const M of f){const y=Le(M,r.current);y!==null&&(a.push(y),t.add(y.group))}E(a,r.current),n()};m();const p=L.subscribe(f=>({showNebulaClouds:f.showNebulaClouds,nebulaQuality:f.nebulaQuality}),f=>{u.current=f.showNebulaClouds,r.current!==f.nebulaQuality&&(r.current=f.nebulaQuality,E(a,r.current)),n()},{equalityFn:U}),v=P().subscribeSelector(f=>f.universeMode.activeGalaxyId,f=>{d.current=f!==null,n()}),S=s.getQueryCache().subscribe(f=>{(_(f,"openngc-dso-catalog")||_(f,"custom-objects-catalog"))&&m()});return{onFrame:f=>{if(!t.visible)return;const M=performance.now(),y=Math.min(.06,Math.max(0,(M-c.current)/1e3));c.current=M,i.current+=y;for(const b of a)for(const x of b.shells)x.shellMaterial.uniforms.uTime.value=i.current},dispose:()=>{p(),v(),S(),g(),o.remove(t)}}}function Ye(){const e=$(),o=(0,D.useRef)(null);return(0,D.useLayoutEffect)(()=>{const t=De(e);return o.current=t.onFrame,()=>{t.dispose(),o.current=null}},[e]),j(()=>o.current?.(),J.HUD_BRIDGE),null}export{Ye as NebulaVolumeMountR3f};
