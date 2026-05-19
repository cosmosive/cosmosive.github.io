import{Lt as c}from"./simStateMigration-P7rCqk2W.js";import{t as m}from"./deepSkyScenePosition-DDYY_EN5.js";import{D as f,U as d,dt as p,m as v,pt as C}from"./three-vendor-BPq9nlj2.js";import{it as h}from"./index-gLvuFbKT.js";import{a as g,o as S}from"./majorDsoSelector-CQluqkXv.js";import{n as y}from"./dsoMajorCluster-D31AqF-f.js";import{t as P}from"./shaderNoiseHelpers-BZZYASr5.js";import{t as k}from"./createDsoMountR3f-CjfMIAMN.js";var D=Math.PI/180/60,A=h.far/4;function M(o){return o.openNgcTypeRaw==="GCl"?"globular":"open"}function R(o){if(o.type!=="star_cluster"||!Number.isFinite(o.distPc)||o.distPc<=0||!Number.isFinite(o.majAxArcmin)||(o.majAxArcmin??0)<=0)return null;const r=o.majAxArcmin/2*D,e=o.distPc*Math.tan(r);if(!Number.isFinite(e)||e<=0)return null;const a=Math.min(c(e),A);return a<=0?null:{radiusSu:a,radiusPc:e,morphScale:[1,1,1],kind:M(o)}}var x={colorCore:[1.4,1.5,1.7],colorHalo:[.5,.6,.9],coreDensity:1.5,haloStrength:.4,sparkleContrast:5,intensity:1.1},F={colorCore:[1.5,1.25,.75],colorHalo:[1,.75,.45],coreDensity:2.4,haloStrength:1.6,sparkleContrast:3,intensity:1.2};function L(o){return o==="globular"?F:x}var T=`
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
`,_=`
uniform float uTime;
uniform float uRadius;
uniform float uIntensity;
uniform float uCoreDensity;
uniform float uHaloStrength;
uniform float uSparkleContrast;
uniform vec3 uColorCore;
uniform vec3 uColorHalo;
`,E=`
${_}
varying vec3 vWorldPos;
varying vec3 vLocalPos;
varying vec3 vNormalDir;
${P}

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
`;function n(o){return new v(o[0],o[1],o[2])}function N(o,r){return{uTime:{value:0},uRadius:{value:o.radiusSu},uIntensity:{value:r.intensity},uCoreDensity:{value:r.coreDensity},uHaloStrength:{value:r.haloStrength},uSparkleContrast:{value:r.sparkleContrast},uColorCore:{value:n(r.colorCore)},uColorHalo:{value:n(r.colorHalo)}}}function w(o){const r=R(o);if(r===null)return null;const e=L(r.kind),a=m(o),t=new f;t.name=`cluster-${o.catalogId}`,t.position.set(a.x,a.y,a.z);const s=new C(r.radiusSu,48,24),u=N(r,e),i=new p({uniforms:u,vertexShader:T,fragmentShader:E,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1}),l=new d(s,i);return l.frustumCulled=!1,l.renderOrder=-12,t.add(l),{group:t,mesh:l,material:i,geometry:s}}function H(o){o.geometry.dispose(),o.material.dispose()}function I(o){return k(o,{layerName:"clusterCloudLayer",selectEntries:()=>y(S()),createVisual:w,disposeVisual:H,applyFrame:(r,e)=>{const{uTime:a}=r.material.uniforms;a.value=e}})}var W=g(I,"present.hud");export{W as ClusterCloudMountR3f};
