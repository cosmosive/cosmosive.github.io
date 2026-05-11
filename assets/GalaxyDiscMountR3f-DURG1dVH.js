import{i as D}from"./rolldown-runtime-BOC55nOF.js";import{p as N}from"./r3f-vendor-CiF_hEUp.js";import{n as _}from"./state-data-vendor-AdClwYuZ.js";import{Et as G}from"./sceneRuntimeTypes-IFh14Xrr.js";import{n as h}from"./scenePrefsStore-ySh80ahF.js";import{n as v}from"./appSimRuntimeHost-EsArdl6f.js";import{a as M}from"./catalog-query-defaults-sD_XjDib.js";import"./use-custom-objects-catalog-mdXWCpAr.js";import{$ as P,a as I}from"./index-B4NfcNKY.js";import{a as E,i as B,o as L,t as T}from"./r3fHostExtras-C8VytOx0.js";import{D as S,Et as w,W as O,h as F,ht as W,pt as k}from"./three-vendor-DnPFe64c.js";import{i as q,r as C}from"./majorDsoSelector-8oHOLqyL.js";import{n as z}from"./dsoMajorGalaxy-Ba2UvONP.js";import{t as U}from"./shaderNoiseHelpers-DXgXQMEZ.js";var A=D(N(),1),H=Math.PI/180,K=Math.PI/180/60,j=P.far/1.2,V=.05,Y=.15,Q=.7,$=.35,X={NGC0224:"spiral",NGC0598:"spiral",NGC5457:"spiral",NGC3031:"spiral",NGC0055:"spiral",NGC0253:"spiral",NGC4236:"spiral",NGC4945:"spiral",NGC5128:"lenticular",NGC0292:"irregular",NGC1300:"barred_spiral",NGC4565:"spiral",NGC3034:"irregular"};function J(a){switch(a){case"lenticular":return Y;case"elliptical":return Q;case"irregular":return $;default:return V}}function Z(a){if(!Number.isFinite(a.distPc)||a.distPc<=0||!Number.isFinite(a.majAxArcmin)||(a.majAxArcmin??0)<=0)return null;const o=a.majAxArcmin/2*K,r=a.distPc*Math.tan(o);if(!Number.isFinite(r)||r<=0)return null;const i=G(r),e=Math.min(i,j),s=X[a.catalogId]??"spiral",u=Number.isFinite(a.minAxArcmin)&&(a.minAxArcmin??0)>0,n=a.majAxArcmin;return{discRadiusSu:e,discRadiusPc:r,morphScale:[1,u?Math.min(1,Math.max(.15,a.minAxArcmin/n)):.7,J(s)],positionAngleRad:Number.isFinite(a.positionAngleDeg)?a.positionAngleDeg*H:0,kind:s}}var aa={colorBulge:[1.4,1.05,.55],colorArms:[.55,.75,1.2],colorDust:[.08,.05,.04],bulgeStrength:1.4,bulgeRadiusRatio:.2,armCount:2,armWinding:4.5,armContrast:2.8,dustStrength:1,intensity:1},oa={NGC0224:{colorBulge:[1.6,1.15,.65],colorArms:[.65,.85,1.3],colorDust:[.1,.06,.04],bulgeStrength:1.7,bulgeRadiusRatio:.22,armCount:2,armWinding:5,armContrast:3.2,dustStrength:1.3,intensity:1.1},NGC0598:{colorBulge:[1.3,1,.6],colorArms:[.7,.9,1.35],colorDust:[.08,.06,.05],bulgeStrength:1,bulgeRadiusRatio:.12,armCount:3,armWinding:3.6,armContrast:2.2,dustStrength:.85,intensity:1},NGC5457:{colorBulge:[1.45,1.05,.6],colorArms:[.65,.9,1.35],colorDust:[.08,.06,.05],bulgeStrength:1.2,bulgeRadiusRatio:.15,armCount:4,armWinding:4,armContrast:2.6,dustStrength:.95,intensity:1.05},NGC3031:{colorBulge:[1.55,1.1,.6],colorArms:[.6,.8,1.25],colorDust:[.09,.06,.05],bulgeStrength:1.6,bulgeRadiusRatio:.22,armCount:2,armWinding:5.5,armContrast:3,dustStrength:1,intensity:1.05},NGC5128:{colorBulge:[1.45,.85,.7],colorArms:[.85,.7,.6],colorDust:[.04,.03,.03],bulgeStrength:2,bulgeRadiusRatio:.4,armCount:0,armWinding:0,armContrast:1,dustStrength:2,intensity:1},NGC0292:{colorBulge:[1,.9,1.1],colorArms:[.9,.6,.95],colorDust:[.06,.05,.06],bulgeStrength:.6,bulgeRadiusRatio:.35,armCount:0,armWinding:0,armContrast:1,dustStrength:.4,intensity:.9}};function ra(a){return oa[a.catalogId]??aa}var ta=`
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
`,ea=`
uniform float uTime;
uniform float uRadius;
uniform float uIntensity;
uniform float uBulgeStrength;
uniform float uBulgeRadiusRatio;
uniform float uArmCount;
uniform float uArmWinding;
uniform float uArmContrast;
uniform float uDustStrength;
uniform float uPositionAngle;
uniform vec3 uColorBulge;
uniform vec3 uColorArms;
uniform vec3 uColorDust;
uniform vec3 uMorphScale;
`,sa=`
${ea}
varying vec3 vWorldPos;
varying vec3 vLocalPos;
varying vec3 vNormalDir;
${U}

void main() {
  // Local sample point in ellipsoid space.
  vec3 q = vLocalPos / max(uRadius, 0.0001);
  // Rotate the disc about the line-of-sight (Z axis after morphScale flattening).
  q.xy = rotate2D(q.xy, uPositionAngle);
  q /= max(uMorphScale, vec3(0.001));

  // Cylindrical disc coords. r is normalized radial distance (0..1); phi is azimuth.
  float r = length(q.xy);
  float phi = atan(q.y, q.x);
  // Disc-plane mask: |z| should be small for the visible band. Outside that, fade fast.
  float zAbs = abs(q.z);
  float diskMask = 1.0 - smoothstep(0.6, 1.05, zAbs);
  if (diskMask < 0.01) discard;

  float bulgeRadius = max(uBulgeRadiusRatio, 0.04);
  // Logarithmic spiral phase.
  float psi = phi + uArmWinding * log(max(r, 0.02) / bulgeRadius);
  float armBase = 0.5 + 0.5 * cos(uArmCount * psi);
  float arm = pow(clamp(armBase, 0.0, 1.0), uArmContrast);
  // Bulge: Gaussian falloff in the inner radii.
  float bulge = exp(-(r * r) / (bulgeRadius * bulgeRadius));
  // Disc background turbulence — slow-moving FBM modulated by arm density.
  vec3 noisePoint = vec3(q.x * 3.0, q.y * 3.0, q.z * 8.0) + vec3(0.0, 0.0, uTime * 0.02);
  float disc = smoothstep(0.35, 0.85, fbm4(noisePoint));
  float armDisc = arm * disc;
  // Dust lanes concentrate near the disc midplane and along arms (subtracted).
  float dustCoord = fbm4(vec3(q.x * 5.0, q.y * 5.0, q.z * 18.0) + vec3(13.0, -7.0, 4.0));
  float dustBand = smoothstep(0.4, 0.85, dustCoord) * smoothstep(0.4, 0.0, zAbs);
  float dust = dustBand * uDustStrength;

  // Radial outer falloff so the disc doesn't have a hard edge.
  float radial = 1.0 - smoothstep(0.85, 1.05, r);
  if (radial < 0.01) discard;

  // Limb darkening towards grazing angles — fades the shell horizon.
  vec3 fragToCam = normalize(cameraPosition - vWorldPos);
  float cosA = clamp(dot(normalize(vNormalDir), fragToCam), -1.0, 1.0);
  float sinA = sqrt(max(0.0, 1.0 - cosA * cosA));
  float limb = mix(1.0, 0.6, sinA);

  vec3 colArms = uColorArms * armDisc;
  vec3 colBulge = uColorBulge * bulge * uBulgeStrength;
  vec3 col = (colArms + colBulge) * radial * diskMask;
  // Subtract dust (clamped so we don't go to pure black HDR).
  col = max(col - uColorDust * 0.0 + (-uColorDust * 0.0), col);
  col = max(col * (1.0 - dust * 0.6), vec3(0.0));

  float density = (armDisc + bulge * uBulgeStrength) * radial * diskMask;
  float alpha = clamp(density * limb, 0.0, 1.0);
  if (alpha < 0.015) discard;
  gl_FragColor = vec4(col * uIntensity * limb, alpha);
}
`;function g(a){return new F(a[0],a[1],a[2])}function ia(a){return new w(a[0],a[1],a[2])}function na(a,o){return{uTime:{value:0},uRadius:{value:a.discRadiusSu},uIntensity:{value:o.intensity},uBulgeStrength:{value:o.bulgeStrength},uBulgeRadiusRatio:{value:o.bulgeRadiusRatio},uArmCount:{value:o.armCount},uArmWinding:{value:o.armWinding},uArmContrast:{value:o.armContrast},uDustStrength:{value:o.dustStrength},uPositionAngle:{value:a.positionAngleRad},uColorBulge:{value:g(o.colorBulge)},uColorArms:{value:g(o.colorArms)},uColorDust:{value:g(o.colorDust)},uMorphScale:{value:ia(a.morphScale)}}}function la(a){const o=Z(a);if(o===null||o.discRadiusSu<=0)return null;const r=ra(a),i=M(a),e=new S;e.name=`galaxy-${a.catalogId}`,e.position.set(i.x,i.y,i.z);const s=new W(o.discRadiusSu,64,32),u=na(o,r),n=new k({uniforms:u,vertexShader:ta,fragmentShader:sa,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1}),l=new O(s,n);return l.frustumCulled=!1,l.renderOrder=-15,e.add(l),{group:e,mesh:l,material:n,geometry:s}}function ua(a){a.geometry.dispose(),a.material.dispose()}function ca(){return z(q())}function ma(a){const o=T(a).layers.dso,r=new S;r.name="galaxyDiscLayer",o.add(r);const i=I(),e=[],s={current:h.getState().showNebulaClouds},u={current:v().getState().universeMode.activeGalaxyId!==null},n={current:0},l={current:performance.now()},d=()=>{r.visible=s.current&&!u.current&&e.length>0},f=()=>{for(;e.length>0;){const t=e.pop();t!=null&&(r.remove(t.group),ua(t))}},p=()=>{f();const t=ca();for(const m of t){const c=la(m);c!==null&&(e.push(c),r.add(c.group))}d()};p();const R=h.subscribe(t=>({showNebulaClouds:t.showNebulaClouds}),t=>{s.current=t.showNebulaClouds,d()},{equalityFn:_}),b=v().subscribeSelector(t=>t.universeMode.activeGalaxyId,t=>{u.current=t!==null,d()}),x=i.getQueryCache().subscribe(t=>{(C(t,"openngc-dso-catalog")||C(t,"custom-objects-catalog"))&&p()});return{onFrame:t=>{if(!r.visible)return;const m=performance.now(),c=Math.min(.06,Math.max(0,(m-l.current)/1e3));l.current=m,n.current+=c;for(const y of e)y.material.uniforms.uTime.value=n.current},dispose:()=>{R(),b(),x(),f(),o.remove(r)}}}function Ga(){const a=L(),o=(0,A.useRef)(null);return(0,A.useLayoutEffect)(()=>{const r=ma(a);return o.current=r.onFrame,()=>{r.dispose(),o.current=null}},[a]),E(()=>o.current?.(),B.HUD_BRIDGE),null}export{Ga as GalaxyDiscMountR3f};
