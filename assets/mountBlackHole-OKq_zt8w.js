import{n as C}from"./state-data-vendor-DwYWRG6B.js";import{t as D}from"./deepSkyScenePosition-gTl-1TDH.js";import{A as R,J as P,W as _,_ as f,_t as O,ft as E,ht as I,q as h}from"./three-vendor-Ce7iT1Ri.js";import{Wr as v,a as F,ln as L}from"./index-BkS8DZQZ.js";import{t as x}from"./r3fHostExtras-BtatsfV9.js";import{t as A}from"./createMountComponent-CpEhyfV6.js";import{n as g,t as T}from"./deepSkyCatalogBridge-BXC0YJ82.js";import{n as V}from"./dsoMajorBlackHole-BvYPib4P.js";import{t as k}from"./shaderNoiseHelpers-DYuLfImQ.js";var B=`
varying vec3 vWorldPos;
varying vec3 vLocalPos;
void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vLocalPos = position;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,z=`
uniform float uTime;
uniform float uInnerRadius;
uniform float uOuterRadius;
uniform float uIntensity;
uniform float uDopplerStrength;
uniform vec3 uColorInner;
uniform vec3 uColorOuter;
`,G=`
${z}
varying vec3 vWorldPos;
varying vec3 vLocalPos;
${k}

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
`,H=.06;function U(e,r){const a=x(e).layers.dsoReRooted,o=new R;o.name=r.layerName,a.add(o);const d=F(),s=[],n={current:v.getState().showDsoVolumes},l={current:0},c={current:performance.now()},i=()=>{o.visible=n.current&&s.length>0},m=()=>{for(;s.length>0;){const t=s.pop();o.remove(t.group),r.disposeVisual(t)}},p=()=>{m();for(const t of r.selectEntries()){const u=r.createVisual(t);u!==null&&(s.push(u),o.add(u.group))}i()};p();const y=v.subscribe(t=>({showDsoVolumes:t.showDsoVolumes}),t=>{n.current=t.showDsoVolumes,i()},{equalityFn:C}),b=d.getQueryCache().subscribe(t=>{(g(t,"openngc-dso-catalog")||g(t,"custom-objects-catalog"))&&p()}),M=r.subscribeRebuild?.(p);return{onFrame:t=>{if(!o.visible)return;const u=performance.now(),S=Math.min(H,Math.max(0,(u-c.current)/1e3));c.current=u,l.current+=S;for(const w of s)r.applyFrame(w,l.current)},dispose:()=>{y(),b(),M?.(),m(),a.remove(o)}}}var N=_.degToRad(15);function Q(e){return{uTime:{value:0},uInnerRadius:{value:e.innerDiscSu},uOuterRadius:{value:e.outerDiscSu},uIntensity:{value:1.4},uDopplerStrength:{value:.45},uColorInner:{value:new f(2,2,2.4)},uColorOuter:{value:new f(1.4,.5,.15)}}}function W(e){const r=L(e);if(r===null)return null;const a=D(e),o=new R;o.name=`blackhole-${e.catalogId}`,o.position.set(a.x,a.y,a.z);const d=new E(r.innerDiscSu,r.outerDiscSu,192,4),s=new I({uniforms:Q(r),vertexShader:B,fragmentShader:G,transparent:!0,depthWrite:!1,blending:2,side:2,toneMapped:!1}),n=new h(d,s);n.rotation.x=N,n.frustumCulled=!1,n.renderOrder=-8,o.add(n);const l=new O(r.eventHorizonSu,48,24),c=new P({color:0,toneMapped:!1}),i=new h(l,c);return i.renderOrder=-7,o.add(i),{group:o,discMesh:n,discMaterial:s,discGeometry:d,horizonMesh:i,horizonMaterial:c,horizonGeometry:l}}function j(e){e.discGeometry.dispose(),e.discMaterial.dispose(),e.horizonGeometry.dispose(),e.horizonMaterial.dispose()}function Y(e){return U(e,{layerName:"blackHoleLayer",selectEntries:()=>V(T()),createVisual:W,disposeVisual:j,applyFrame:(r,a)=>{const{uTime:o}=r.discMaterial.uniforms;o.value=a}})}var se=A(Y,"present.hud");export{se as BlackHoleMountR3f};
