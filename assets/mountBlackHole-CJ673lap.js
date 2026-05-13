import{Ct as p}from"./sceneRuntimeTypes-BPiIoHGi.js";import{a as m}from"./catalog-query-defaults-JlMTt8Vz.js";import{D as f,G as h,V as v,W as c,h as d,ht as S,pt as R,ut as g}from"./three-vendor-DnPFe64c.js";import{a as M,i as I}from"./majorDsoSelector-CXO4P3rt.js";import{n as P}from"./dsoMajorBlackHole-By_nztw5.js";import{t as y}from"./shaderNoiseHelpers-DXgXQMEZ.js";import{t as D}from"./createDsoMountR3f-Jq1d-bXF.js";var L=3,C=50,O=1.5,E=1e7;function _(e){if(e.type!=="black_hole")return null;const o=e.physical?.schwarzschildRadiusKm;if(o==null||!Number.isFinite(o)||o<=0)return null;const r=o*p*E;return{eventHorizonSu:r,innerDiscSu:r*L,outerDiscSu:r*C,photonSphereSu:r*O}}var b=`
varying vec3 vWorldPos;
varying vec3 vLocalPos;
void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vLocalPos = position;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,w=`
uniform float uTime;
uniform float uInnerRadius;
uniform float uOuterRadius;
uniform float uIntensity;
uniform float uDopplerStrength;
uniform vec3 uColorInner;
uniform vec3 uColorOuter;
`,T=`
${w}
varying vec3 vWorldPos;
varying vec3 vLocalPos;
${y}

void main() {
  float r = length(vLocalPos.xy);
  if (r < uInnerRadius || r > uOuterRadius) discard;

  // Normalised radial coord 0..1 across the disc.
  float tRad = clamp((r - uInnerRadius) / (uOuterRadius - uInnerRadius), 0.0, 1.0);
  // Temperature falloff: inner edge hottest. Use Stefan-Boltzmann-ish power.
  float temperature = pow(1.0 - tRad, 1.4);
  vec3 col = mix(uColorOuter, uColorInner, temperature);

  // Azimuthal Doppler beaming — disc rotation makes the approaching side brighter.
  float phi = atan(vLocalPos.y, vLocalPos.x);
  float doppler = 1.0 + uDopplerStrength * cos(phi);

  // FBM turbulence to break up the smooth ring.
  vec3 noisePoint = vec3(vLocalPos.x / uOuterRadius * 4.0, vLocalPos.y / uOuterRadius * 4.0, uTime * 0.3);
  float turb = fbm4(noisePoint);
  float turbMod = 0.55 + 0.9 * turb;

  // Edge fades.
  float innerFade = smoothstep(0.0, 0.05, tRad);
  float outerFade = 1.0 - smoothstep(0.85, 1.0, tRad);
  float edge = innerFade * outerFade;

  float brightness = temperature * doppler * turbMod * edge * uIntensity;
  float alpha = clamp(brightness, 0.0, 1.0);
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(col * brightness, alpha);
}
`,k=v.degToRad(15);function x(e){return{uTime:{value:0},uInnerRadius:{value:e.innerDiscSu},uOuterRadius:{value:e.outerDiscSu},uIntensity:{value:1.4},uDopplerStrength:{value:.45},uColorInner:{value:new d(2,2,2.4)},uColorOuter:{value:new d(1.4,.5,.15)}}}function H(e){const o=_(e);if(o===null)return null;const r=m(e),a=new f;a.name=`blackhole-${e.catalogId}`,a.position.set(r.x,r.y,r.z);const n=new g(o.innerDiscSu,o.outerDiscSu,192,4),s=new R({uniforms:x(o),vertexShader:b,fragmentShader:T,transparent:!0,depthWrite:!1,blending:2,side:2,toneMapped:!1}),t=new c(n,s);t.rotation.x=k,t.frustumCulled=!1,t.renderOrder=-8,a.add(t);const l=new S(o.eventHorizonSu,48,24),u=new h({color:0,toneMapped:!1}),i=new c(l,u);return i.renderOrder=-7,a.add(i),{group:a,discMesh:t,discMaterial:s,discGeometry:n,horizonMesh:i,horizonMaterial:u,horizonGeometry:l}}function z(e){e.discGeometry.dispose(),e.discMaterial.dispose(),e.horizonGeometry.dispose(),e.horizonMaterial.dispose()}function F(e){return D(e,{layerName:"blackHoleLayer",selectEntries:()=>P(M()),createVisual:H,disposeVisual:z,applyFrame:(o,r)=>{const{uTime:a}=o.discMaterial.uniforms;a.value=r}})}var K=I(F,"present.hud");export{K as BlackHoleMountR3f};
