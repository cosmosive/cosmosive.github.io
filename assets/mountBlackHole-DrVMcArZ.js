import{n as C}from"./state-data-vendor-poX9OG4b.js";import{t as D}from"./deepSkyScenePosition-BugCExot.js";import{A as R,K as f,U as P,_ as h,dt as _,gt as O,mt as E,q as I}from"./three-vendor-DtGC8FGl.js";import{Pr as v,a as F,cn as L}from"./index-DzPXy7XS.js";import{t as T}from"./r3fHostExtras-B01KOKoI.js";import{t as x}from"./createMountComponent-CA2cMyNc.js";import{n as g,t as A}from"./deepSkyCatalogBridge-BDCSf3vz.js";import{n as V}from"./dsoMajorBlackHole-BvYPib4P.js";import{t as k}from"./shaderNoiseHelpers-DYuLfImQ.js";var B=`
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
`,H=.06;function U(e,r){const a=T(e).layers.dsoReRooted,o=new R;o.name=r.layerName,a.add(o);const d=F(),s=[],n={current:v.getState().showDsoVolumes},l={current:0},c={current:performance.now()},i=()=>{o.visible=n.current&&s.length>0},m=()=>{for(;s.length>0;){const t=s.pop();o.remove(t.group),r.disposeVisual(t)}},p=()=>{m();for(const t of r.selectEntries()){const u=r.createVisual(t);u!==null&&(s.push(u),o.add(u.group))}i()};p();const y=v.subscribe(t=>({showDsoVolumes:t.showDsoVolumes}),t=>{n.current=t.showDsoVolumes,i()},{equalityFn:C}),b=d.getQueryCache().subscribe(t=>{(g(t,"openngc-dso-catalog")||g(t,"custom-objects-catalog"))&&p()}),M=r.subscribeRebuild?.(p);return{onFrame:t=>{if(!o.visible)return;const u=performance.now(),S=Math.min(H,Math.max(0,(u-c.current)/1e3));c.current=u,l.current+=S;for(const w of s)r.applyFrame(w,l.current)},dispose:()=>{y(),b(),M?.(),m(),a.remove(o)}}}var N=P.degToRad(15);function Q(e){return{uTime:{value:0},uInnerRadius:{value:e.innerDiscSu},uOuterRadius:{value:e.outerDiscSu},uIntensity:{value:1.4},uDopplerStrength:{value:.45},uColorInner:{value:new h(2,2,2.4)},uColorOuter:{value:new h(1.4,.5,.15)}}}function j(e){const r=L(e);if(r===null)return null;const a=D(e),o=new R;o.name=`blackhole-${e.catalogId}`,o.position.set(a.x,a.y,a.z);const d=new _(r.innerDiscSu,r.outerDiscSu,192,4),s=new E({uniforms:Q(r),vertexShader:B,fragmentShader:G,transparent:!0,depthWrite:!1,blending:2,side:2,toneMapped:!1}),n=new f(d,s);n.rotation.x=N,n.frustumCulled=!1,n.renderOrder=-8,o.add(n);const l=new O(r.eventHorizonSu,48,24),c=new I({color:0,toneMapped:!1}),i=new f(l,c);return i.renderOrder=-7,o.add(i),{group:o,discMesh:n,discMaterial:s,discGeometry:d,horizonMesh:i,horizonMaterial:c,horizonGeometry:l}}function K(e){e.discGeometry.dispose(),e.discMaterial.dispose(),e.horizonGeometry.dispose(),e.horizonMaterial.dispose()}function W(e){return U(e,{layerName:"blackHoleLayer",selectEntries:()=>V(A()),createVisual:j,disposeVisual:K,applyFrame:(r,a)=>{const{uTime:o}=r.discMaterial.uniforms;o.value=a}})}var se=x(W,"present.hud");export{se as BlackHoleMountR3f};
