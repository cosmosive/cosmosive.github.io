import{i as c}from"./rolldown-runtime-BOC55nOF.js";import{p as d}from"./r3f-vendor-CiF_hEUp.js";import{kt as g}from"./sceneRuntimeTypes-Ba-OycFt.js";import{a as f}from"./catalog-query-defaults-BcARUz2n.js";import{$ as h}from"./index-DoSftIGR.js";import{a as p,i as v,o as A}from"./r3fHostExtras-C8VytOx0.js";import{D as C,Et as R,W as S,h as b,ht as D,pt as x}from"./three-vendor-DnPFe64c.js";import{i as N}from"./majorDsoSelector-CJYmcMFP.js";import{n as y}from"./dsoMajorGalaxy-C9oIe0On.js";import{t as G}from"./shaderNoiseHelpers-DXgXQMEZ.js";import{t as P}from"./createDsoMountR3f-BE_fOJE3.js";var m=c(d(),1),M=Math.PI/180,_=Math.PI/180/60,I=h.far/1.2,B=.05,E=.15,L=.7,T=.35,k={NGC0224:"spiral",NGC0598:"spiral",NGC5457:"spiral",NGC3031:"spiral",NGC0055:"spiral",NGC0253:"spiral",NGC4236:"spiral",NGC4945:"spiral",NGC5128:"lenticular",NGC0292:"irregular",NGC1300:"barred_spiral",NGC4565:"spiral",NGC3034:"irregular"};function W(a){switch(a){case"lenticular":return E;case"elliptical":return L;case"irregular":return T;default:return B}}function O(a){if(!Number.isFinite(a.distPc)||a.distPc<=0||!Number.isFinite(a.majAxArcmin)||(a.majAxArcmin??0)<=0)return null;const r=a.majAxArcmin/2*_,o=a.distPc*Math.tan(r);if(!Number.isFinite(o)||o<=0)return null;const t=g(o),i=Math.min(t,I),e=k[a.catalogId]??"spiral",l=Number.isFinite(a.minAxArcmin)&&(a.minAxArcmin??0)>0,s=a.majAxArcmin;return{discRadiusSu:i,discRadiusPc:o,morphScale:[1,l?Math.min(1,Math.max(.15,a.minAxArcmin/s)):.7,W(e)],positionAngleRad:Number.isFinite(a.positionAngleDeg)?a.positionAngleDeg*M:0,kind:e}}var q={colorBulge:[1.4,1.05,.55],colorArms:[.55,.75,1.2],colorDust:[.08,.05,.04],bulgeStrength:1.4,bulgeRadiusRatio:.2,armCount:2,armWinding:4.5,armContrast:2.8,dustStrength:1,intensity:1},z={NGC0224:{colorBulge:[1.6,1.15,.65],colorArms:[.65,.85,1.3],colorDust:[.1,.06,.04],bulgeStrength:1.7,bulgeRadiusRatio:.22,armCount:2,armWinding:5,armContrast:3.2,dustStrength:1.3,intensity:1.1},NGC0598:{colorBulge:[1.3,1,.6],colorArms:[.7,.9,1.35],colorDust:[.08,.06,.05],bulgeStrength:1,bulgeRadiusRatio:.12,armCount:3,armWinding:3.6,armContrast:2.2,dustStrength:.85,intensity:1},NGC5457:{colorBulge:[1.45,1.05,.6],colorArms:[.65,.9,1.35],colorDust:[.08,.06,.05],bulgeStrength:1.2,bulgeRadiusRatio:.15,armCount:4,armWinding:4,armContrast:2.6,dustStrength:.95,intensity:1.05},NGC3031:{colorBulge:[1.55,1.1,.6],colorArms:[.6,.8,1.25],colorDust:[.09,.06,.05],bulgeStrength:1.6,bulgeRadiusRatio:.22,armCount:2,armWinding:5.5,armContrast:3,dustStrength:1,intensity:1.05},NGC5128:{colorBulge:[1.45,.85,.7],colorArms:[.85,.7,.6],colorDust:[.04,.03,.03],bulgeStrength:2,bulgeRadiusRatio:.4,armCount:0,armWinding:0,armContrast:1,dustStrength:2,intensity:1},NGC0292:{colorBulge:[1,.9,1.1],colorArms:[.9,.6,.95],colorDust:[.06,.05,.06],bulgeStrength:.6,bulgeRadiusRatio:.35,armCount:0,armWinding:0,armContrast:1,dustStrength:.4,intensity:.9}};function F(a){return z[a.catalogId]??q}var w=`
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
`,H=`
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
`,j=`
${H}
varying vec3 vWorldPos;
varying vec3 vLocalPos;
varying vec3 vNormalDir;
${G}

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
`;function u(a){return new b(a[0],a[1],a[2])}function K(a){return new R(a[0],a[1],a[2])}function U(a,r){return{uTime:{value:0},uRadius:{value:a.discRadiusSu},uIntensity:{value:r.intensity},uBulgeStrength:{value:r.bulgeStrength},uBulgeRadiusRatio:{value:r.bulgeRadiusRatio},uArmCount:{value:r.armCount},uArmWinding:{value:r.armWinding},uArmContrast:{value:r.armContrast},uDustStrength:{value:r.dustStrength},uPositionAngle:{value:a.positionAngleRad},uColorBulge:{value:u(r.colorBulge)},uColorArms:{value:u(r.colorArms)},uColorDust:{value:u(r.colorDust)},uMorphScale:{value:K(a.morphScale)}}}function V(a){const r=O(a);if(r===null||r.discRadiusSu<=0)return null;const o=F(a),t=f(a),i=new C;i.name=`galaxy-${a.catalogId}`,i.position.set(t.x,t.y,t.z);const e=new D(r.discRadiusSu,64,32),l=U(r,o),s=new x({uniforms:l,vertexShader:w,fragmentShader:j,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1}),n=new S(e,s);return n.frustumCulled=!1,n.renderOrder=-15,i.add(n),{group:i,mesh:n,material:s,geometry:e}}function Y(a){a.geometry.dispose(),a.material.dispose()}function $(a){return P(a,{layerName:"galaxyDiscLayer",selectEntries:()=>y(N()),createVisual:V,disposeVisual:Y,applyFrame:(r,o)=>{const{uTime:t}=r.material.uniforms;t.value=o}})}function na(){const a=A(),r=(0,m.useRef)(null);return(0,m.useLayoutEffect)(()=>{const o=$(a);return r.current=o.onFrame,()=>{o.dispose(),r.current=null}},[a]),p(()=>r.current?.(),v.HUD_BRIDGE),null}export{na as GalaxyDiscMountR3f};
