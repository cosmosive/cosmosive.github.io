import{i as P}from"./rolldown-runtime-BOC55nOF.js";import{p as E}from"./r3f-vendor-CiF_hEUp.js";import{n as w}from"./state-data-vendor-AdClwYuZ.js";import{ht as L}from"./sceneRuntimeTypes-IFh14Xrr.js";import{n as h}from"./scenePrefsStore-ySh80ahF.js";import{n as v}from"./appSimRuntimeHost-EsArdl6f.js";import{a as O}from"./catalog-query-defaults-sD_XjDib.js";import"./use-custom-objects-catalog-mdXWCpAr.js";import{a as D}from"./index-QNjmQs5F.js";import{a as T,i as F,o as x,t as H}from"./r3fHostExtras-C8VytOx0.js";import{D as M,G as U,V as A,W as S,h as R,ht as G,pt as N,ut as k}from"./three-vendor-DnPFe64c.js";import{i as z,r as g}from"./majorDsoSelector-B-ROxJ13.js";import{n as B}from"./dsoMajorBlackHole-B0SX_YH-.js";import{t as V}from"./shaderNoiseHelpers-DXgXQMEZ.js";var b=P(E(),1),K=3,Q=50,W=1.5,Y=1e7;function j(e){if(e.type!=="black_hole")return null;const r=e.physical?.schwarzschildRadiusKm;if(r==null||!Number.isFinite(r)||r<=0)return null;const o=r*L*Y;return{eventHorizonSu:o,innerDiscSu:o*K,outerDiscSu:o*Q,photonSphereSu:o*W}}var $=`
varying vec3 vWorldPos;
varying vec3 vLocalPos;
void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vLocalPos = position;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,q=`
uniform float uTime;
uniform float uInnerRadius;
uniform float uOuterRadius;
uniform float uIntensity;
uniform float uDopplerStrength;
uniform vec3 uColorInner;
uniform vec3 uColorOuter;
`,J=`
${q}
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
`,X=A.degToRad(15);function Z(e){return{uTime:{value:0},uInnerRadius:{value:e.innerDiscSu},uOuterRadius:{value:e.outerDiscSu},uIntensity:{value:1.4},uDopplerStrength:{value:.45},uColorInner:{value:new R(2,2,2.4)},uColorOuter:{value:new R(1.4,.5,.15)}}}function ee(e){const r=j(e);if(r===null)return null;const o=O(e),s=new M;s.name=`blackhole-${e.catalogId}`,s.position.set(o.x,o.y,o.z);const a=new k(r.innerDiscSu,r.outerDiscSu,192,4),u=new N({uniforms:Z(r),vertexShader:$,fragmentShader:J,transparent:!0,depthWrite:!1,blending:2,side:2,toneMapped:!1}),n=new S(a,u);n.rotation.x=X,n.frustumCulled=!1,n.renderOrder=-8,s.add(n);const l=new G(r.eventHorizonSu,48,24),c=new U({color:0,toneMapped:!1}),i=new S(l,c);return i.renderOrder=-7,s.add(i),{group:s,discMesh:n,discMaterial:u,discGeometry:a,horizonMesh:i,horizonMaterial:c,horizonGeometry:l}}function oe(e){e.discGeometry.dispose(),e.discMaterial.dispose(),e.horizonGeometry.dispose(),e.horizonMaterial.dispose()}function re(){return B(z())}function te(e){const r=H(e).layers.dso,o=new M;o.name="blackHoleLayer",r.add(o);const s=D(),a=[],u={current:h.getState().showNebulaClouds},n={current:v().getState().universeMode.activeGalaxyId!==null},l={current:0},c={current:performance.now()},i=()=>{o.visible=u.current&&!n.current&&a.length>0},p=()=>{for(;a.length>0;){const t=a.pop();t!=null&&(o.remove(t.group),oe(t))}},f=()=>{p();const t=re();for(const m of t){const d=ee(m);d!==null&&(a.push(d),o.add(d.group))}i()};f();const y=h.subscribe(t=>({showNebulaClouds:t.showNebulaClouds}),t=>{u.current=t.showNebulaClouds,i()},{equalityFn:w}),_=v().subscribeSelector(t=>t.universeMode.activeGalaxyId,t=>{n.current=t!==null,i()}),C=s.getQueryCache().subscribe(t=>{(g(t,"openngc-dso-catalog")||g(t,"custom-objects-catalog"))&&f()});return{onFrame:t=>{if(!o.visible)return;const m=performance.now(),d=Math.min(.06,Math.max(0,(m-c.current)/1e3));c.current=m,l.current+=d;for(const I of a)I.discMaterial.uniforms.uTime.value=l.current},dispose:()=>{y(),_(),C(),p(),r.remove(o)}}}function be(){const e=x(),r=(0,b.useRef)(null);return(0,b.useLayoutEffect)(()=>{const o=te(e);return r.current=o.onFrame,()=>{o.dispose(),r.current=null}},[e]),T(()=>r.current?.(),F.HUD_BRIDGE),null}export{be as BlackHoleMountR3f};
