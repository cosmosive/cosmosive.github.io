import{i as m}from"./rolldown-runtime-BOC55nOF.js";import{p as f}from"./r3f-vendor-CiF_hEUp.js";import{Et as p}from"./sceneRuntimeTypes-B3MNAH8z.js";import{a as d}from"./catalog-query-defaults-BW6VfLcL.js";import{$ as v}from"./index-CoToSwWH.js";import{a as h,i as C,o as S}from"./r3fHostExtras-C8VytOx0.js";import{D as g,W as y,h as P,ht as R,pt as D}from"./three-vendor-DnPFe64c.js";import{i as k}from"./majorDsoSelector-CU8Yh0F9.js";import{n as A}from"./dsoMajorCluster-CddD1jzv.js";import{t as M}from"./shaderNoiseHelpers-DXgXQMEZ.js";import{t as _}from"./createDsoMountR3f-DdzlMUFm.js";var i=m(f(),1),F=Math.PI/180/60,E=v.far/4;function x(r){return r.openNgcTypeRaw==="GCl"?"globular":"open"}function L(r){if(r.type!=="star_cluster"||!Number.isFinite(r.distPc)||r.distPc<=0||!Number.isFinite(r.majAxArcmin)||(r.majAxArcmin??0)<=0)return null;const o=r.majAxArcmin/2*F,e=r.distPc*Math.tan(o);if(!Number.isFinite(e)||e<=0)return null;const a=Math.min(p(e),E);return a<=0?null:{radiusSu:a,radiusPc:e,morphScale:[1,1,1],kind:x(r)}}var T={colorCore:[1.4,1.5,1.7],colorHalo:[.5,.6,.9],coreDensity:1.5,haloStrength:.4,sparkleContrast:5,intensity:1.1},H={colorCore:[1.5,1.25,.75],colorHalo:[1,.75,.45],coreDensity:2.4,haloStrength:1.6,sparkleContrast:3,intensity:1.2};function N(r){return r==="globular"?H:T}var w=`
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
`,I=`
uniform float uTime;
uniform float uRadius;
uniform float uIntensity;
uniform float uCoreDensity;
uniform float uHaloStrength;
uniform float uSparkleContrast;
uniform vec3 uColorCore;
uniform vec3 uColorHalo;
`,U=`
${I}
varying vec3 vWorldPos;
varying vec3 vLocalPos;
varying vec3 vNormalDir;
${M}

void main() {
  vec3 q = vLocalPos / max(uRadius, 0.0001);
  float r = length(q);
  if (r > 1.05) discard;

  // Radial concentration — strong center, soft outer falloff.
  float coreFalloff = exp(-(r * r) * 4.0);
  float radialFade = 1.0 - smoothstep(0.85, 1.05, r);

  // Diffuse halo (low-frequency FBM).
  float halo = fbm4(q * 2.5 + vec3(0.0, 0.0, uTime * 0.05));
  halo = smoothstep(0.35, 0.75, halo) * coreFalloff;

  // Sparse high-contrast sparkles — approximate unresolved stars.
  vec3 sparkPoint = q * 24.0 + vec3(uTime * 0.04, 0.0, uTime * 0.07);
  float sparkBase = noise3(sparkPoint);
  float sparkBase2 = noise3(sparkPoint * 2.2 + vec3(13.0, -7.0, 4.0));
  float spark = pow(max(0.0, sparkBase * 0.65 + sparkBase2 * 0.5), uSparkleContrast);
  spark *= coreFalloff;

  // Limb fade at the shell horizon.
  vec3 fragToCam = normalize(cameraPosition - vWorldPos);
  float cosA = clamp(dot(normalize(vNormalDir), fragToCam), -1.0, 1.0);
  float sinA = sqrt(max(0.0, 1.0 - cosA * cosA));
  float limb = mix(1.0, 0.5, sinA);

  vec3 col = uColorHalo * halo * uHaloStrength + uColorCore * spark * uCoreDensity;
  col *= radialFade * limb * uIntensity;

  float density = (halo * uHaloStrength + spark * uCoreDensity) * radialFade;
  float alpha = clamp(density, 0.0, 1.0);
  if (alpha < 0.015) discard;
  gl_FragColor = vec4(col, alpha);
}
`;function u(r){return new P(r[0],r[1],r[2])}function b(r,o){return{uTime:{value:0},uRadius:{value:r.radiusSu},uIntensity:{value:o.intensity},uCoreDensity:{value:o.coreDensity},uHaloStrength:{value:o.haloStrength},uSparkleContrast:{value:o.sparkleContrast},uColorCore:{value:u(o.colorCore)},uColorHalo:{value:u(o.colorHalo)}}}function O(r){const o=L(r);if(o===null)return null;const e=N(o.kind),a=d(r),t=new g;t.name=`cluster-${r.catalogId}`,t.position.set(a.x,a.y,a.z);const s=new R(o.radiusSu,48,24),c=b(o,e),n=new D({uniforms:c,vertexShader:w,fragmentShader:U,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1}),l=new y(s,n);return l.frustumCulled=!1,l.renderOrder=-12,t.add(l),{group:t,mesh:l,material:n,geometry:s}}function B(r){r.geometry.dispose(),r.material.dispose()}function q(r){return _(r,{layerName:"clusterCloudLayer",selectEntries:()=>A(k()),createVisual:O,disposeVisual:B,applyFrame:(o,e)=>{const{uTime:a}=o.material.uniforms;a.value=e}})}function Z(){const r=S(),o=(0,i.useRef)(null);return(0,i.useLayoutEffect)(()=>{const e=q(r);return o.current=e.onFrame,()=>{e.dispose(),o.current=null}},[r]),h(()=>o.current?.(),C.HUD_BRIDGE),null}export{Z as ClusterCloudMountR3f};
