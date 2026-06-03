import{n as P}from"./state-data-vendor-poX9OG4b.js";import{L as C}from"./sceneRuntimeTypes-CEvW8e0J.js";import{t as E}from"./deepSkyScenePosition-CJpe8tKj.js";import{A as R,K as f,U as w,_ as h,dt as D,gt as I,mt as O,q as L}from"./three-vendor-DtGC8FGl.js";import{Or as v,a as T}from"./index-wDW9sPMk.js";import{t as F}from"./r3fHostExtras-DoOV6si3.js";import{t as A}from"./createMountComponent-D5fmzFWU.js";import{n as S,t as U}from"./deepSkyCatalogBridge-CRcBG0ed.js";import{n as x}from"./dsoMajorBlackHole-BvYPib4P.js";import{t as V}from"./shaderNoiseHelpers-DYuLfImQ.js";var k=3,H=50,z=1.5,N=1e7;function B(o){if(o.type!=="black_hole")return null;const e=o.physical?.schwarzschildRadiusKm;if(e==null||!Number.isFinite(e)||e<=0)return null;const t=e*C*N;return{eventHorizonSu:t,innerDiscSu:t*k,outerDiscSu:t*H,photonSphereSu:t*z}}var G=`
varying vec3 vWorldPos;
varying vec3 vLocalPos;
void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vLocalPos = position;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,K=`
uniform float uTime;
uniform float uInnerRadius;
uniform float uOuterRadius;
uniform float uIntensity;
uniform float uDopplerStrength;
uniform vec3 uColorInner;
uniform vec3 uColorOuter;
`,Q=`
${K}
varying vec3 vWorldPos;
varying vec3 vLocalPos;
${V}

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
`,j=.06;function W(o,e){const t=F(o).layers.dso,r=new R;r.name=e.layerName,t.add(r);const d=T(),s=[],n={current:v.getState().showDsoVolumes},l={current:0},c={current:performance.now()},i=()=>{r.visible=n.current&&s.length>0},m=()=>{for(;s.length>0;){const a=s.pop();r.remove(a.group),e.disposeVisual(a)}},p=()=>{m();for(const a of e.selectEntries()){const u=e.createVisual(a);u!==null&&(s.push(u),r.add(u.group))}i()};p();const g=v.subscribe(a=>({showDsoVolumes:a.showDsoVolumes}),a=>{n.current=a.showDsoVolumes,i()},{equalityFn:P}),y=d.getQueryCache().subscribe(a=>{(S(a,"openngc-dso-catalog")||S(a,"custom-objects-catalog"))&&p()}),M=e.subscribeRebuild?.(p);return{onFrame:a=>{if(!r.visible)return;const u=performance.now(),b=Math.min(j,Math.max(0,(u-c.current)/1e3));c.current=u,l.current+=b;for(const _ of s)e.applyFrame(_,l.current)},dispose:()=>{g(),y(),M?.(),m(),t.remove(r)}}}var Y=w.degToRad(15);function $(o){return{uTime:{value:0},uInnerRadius:{value:o.innerDiscSu},uOuterRadius:{value:o.outerDiscSu},uIntensity:{value:1.4},uDopplerStrength:{value:.45},uColorInner:{value:new h(2,2,2.4)},uColorOuter:{value:new h(1.4,.5,.15)}}}function q(o){const e=B(o);if(e===null)return null;const t=E(o),r=new R;r.name=`blackhole-${o.catalogId}`,r.position.set(t.x,t.y,t.z);const d=new D(e.innerDiscSu,e.outerDiscSu,192,4),s=new O({uniforms:$(e),vertexShader:G,fragmentShader:Q,transparent:!0,depthWrite:!1,blending:2,side:2,toneMapped:!1}),n=new f(d,s);n.rotation.x=Y,n.frustumCulled=!1,n.renderOrder=-8,r.add(n);const l=new I(e.eventHorizonSu,48,24),c=new L({color:0,toneMapped:!1}),i=new f(l,c);return i.renderOrder=-7,r.add(i),{group:r,discMesh:n,discMaterial:s,discGeometry:d,horizonMesh:i,horizonMaterial:c,horizonGeometry:l}}function J(o){o.discGeometry.dispose(),o.discMaterial.dispose(),o.horizonGeometry.dispose(),o.horizonMaterial.dispose()}function X(o){return W(o,{layerName:"blackHoleLayer",selectEntries:()=>x(U()),createVisual:q,disposeVisual:J,applyFrame:(e,t)=>{const{uTime:r}=e.discMaterial.uniforms;r.value=t}})}var de=A(X,"present.hud");export{de as BlackHoleMountR3f};
