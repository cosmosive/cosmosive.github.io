import{i as p}from"./rolldown-runtime-BOC55nOF.js";import{p as f}from"./r3f-vendor-CiF_hEUp.js";import{vt as h}from"./sceneRuntimeTypes-Ba-OycFt.js";import{a as v}from"./catalog-query-defaults-BcARUz2n.js";import{a as R,i as S,o as g}from"./r3fHostExtras-C8VytOx0.js";import{D as I,G as M,V as P,W as c,h as d,ht as _,pt as y,ut as D}from"./three-vendor-DnPFe64c.js";import{i as E}from"./majorDsoSelector-CJYmcMFP.js";import{n as L}from"./dsoMajorBlackHole-BRkdBlXA.js";import{t as O}from"./shaderNoiseHelpers-DXgXQMEZ.js";import{t as b}from"./createDsoMountR3f-BE_fOJE3.js";var m=p(f(),1),C=3,T=50,w=1.5,F=1e7;function H(e){if(e.type!=="black_hole")return null;const o=e.physical?.schwarzschildRadiusKm;if(o==null||!Number.isFinite(o)||o<=0)return null;const r=o*h*F;return{eventHorizonSu:r,innerDiscSu:r*C,outerDiscSu:r*T,photonSphereSu:r*w}}var k=`
varying vec3 vWorldPos;
varying vec3 vLocalPos;
void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vLocalPos = position;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,x=`
uniform float uTime;
uniform float uInnerRadius;
uniform float uOuterRadius;
uniform float uIntensity;
uniform float uDopplerStrength;
uniform vec3 uColorInner;
uniform vec3 uColorOuter;
`,z=`
${x}
varying vec3 vWorldPos;
varying vec3 vLocalPos;
${O}

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
`,U=P.degToRad(15);function B(e){return{uTime:{value:0},uInnerRadius:{value:e.innerDiscSu},uOuterRadius:{value:e.outerDiscSu},uIntensity:{value:1.4},uDopplerStrength:{value:.45},uColorInner:{value:new d(2,2,2.4)},uColorOuter:{value:new d(1.4,.5,.15)}}}function G(e){const o=H(e);if(o===null)return null;const r=v(e),t=new I;t.name=`blackhole-${e.catalogId}`,t.position.set(r.x,r.y,r.z);const i=new D(o.innerDiscSu,o.outerDiscSu,192,4),s=new y({uniforms:B(o),vertexShader:k,fragmentShader:z,transparent:!0,depthWrite:!1,blending:2,side:2,toneMapped:!1}),a=new c(i,s);a.rotation.x=U,a.frustumCulled=!1,a.renderOrder=-8,t.add(a);const u=new _(o.eventHorizonSu,48,24),l=new M({color:0,toneMapped:!1}),n=new c(u,l);return n.renderOrder=-7,t.add(n),{group:t,discMesh:a,discMaterial:s,discGeometry:i,horizonMesh:n,horizonMaterial:l,horizonGeometry:u}}function N(e){e.discGeometry.dispose(),e.discMaterial.dispose(),e.horizonGeometry.dispose(),e.horizonMaterial.dispose()}function A(e){return b(e,{layerName:"blackHoleLayer",selectEntries:()=>L(E()),createVisual:G,disposeVisual:N,applyFrame:(o,r)=>{const{uTime:t}=o.discMaterial.uniforms;t.value=r}})}function Z(){const e=g(),o=(0,m.useRef)(null);return(0,m.useLayoutEffect)(()=>{const r=A(e);return o.current=r.onFrame,()=>{r.dispose(),o.current=null}},[e]),R(()=>o.current?.(),S.HUD_BRIDGE),null}export{Z as BlackHoleMountR3f};
