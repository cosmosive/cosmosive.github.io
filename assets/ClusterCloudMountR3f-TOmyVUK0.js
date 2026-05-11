import{i as b}from"./rolldown-runtime-BOC55nOF.js";import{p as M}from"./r3f-vendor-CiF_hEUp.js";import{n as D}from"./state-data-vendor-AdClwYuZ.js";import{Et as E}from"./sceneRuntimeTypes-IFh14Xrr.js";import{n as v}from"./scenePrefsStore-ySh80ahF.js";import{n as h}from"./appSimRuntimeHost-EsArdl6f.js";import{a as F}from"./catalog-query-defaults-sD_XjDib.js";import"./use-custom-objects-catalog-mdXWCpAr.js";import{$ as k,a as w}from"./index-QNjmQs5F.js";import{a as x,i as L,o as T,t as N}from"./r3fHostExtras-C8VytOx0.js";import{D as y,W as H,h as I,ht as O,pt as U}from"./three-vendor-DnPFe64c.js";import{i as G,r as C}from"./majorDsoSelector-B-ROxJ13.js";import{n as B}from"./dsoMajorCluster-DMqETTG9.js";import{t as q}from"./shaderNoiseHelpers-DXgXQMEZ.js";var g=b(M(),1),j=Math.PI/180/60,z=k.far/4;function Q(e){return e.openNgcTypeRaw==="GCl"?"globular":"open"}function V(e){if(e.type!=="star_cluster"||!Number.isFinite(e.distPc)||e.distPc<=0||!Number.isFinite(e.majAxArcmin)||(e.majAxArcmin??0)<=0)return null;const o=e.majAxArcmin/2*j,r=e.distPc*Math.tan(o);if(!Number.isFinite(r)||r<=0)return null;const s=Math.min(E(r),z);return s<=0?null:{radiusSu:s,radiusPc:r,morphScale:[1,1,1],kind:Q(e)}}var W={colorCore:[1.4,1.5,1.7],colorHalo:[.5,.6,.9],coreDensity:1.5,haloStrength:.4,sparkleContrast:5,intensity:1.1},Y={colorCore:[1.5,1.25,.75],colorHalo:[1,.75,.45],coreDensity:2.4,haloStrength:1.6,sparkleContrast:3,intensity:1.2};function $(e){return e==="globular"?Y:W}var K=`
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
`,J=`
uniform float uTime;
uniform float uRadius;
uniform float uIntensity;
uniform float uCoreDensity;
uniform float uHaloStrength;
uniform float uSparkleContrast;
uniform vec3 uColorCore;
uniform vec3 uColorHalo;
`,X=`
${J}
varying vec3 vWorldPos;
varying vec3 vLocalPos;
varying vec3 vNormalDir;
${q}

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
`;function S(e){return new I(e[0],e[1],e[2])}function Z(e,o){return{uTime:{value:0},uRadius:{value:e.radiusSu},uIntensity:{value:o.intensity},uCoreDensity:{value:o.coreDensity},uHaloStrength:{value:o.haloStrength},uSparkleContrast:{value:o.sparkleContrast},uColorCore:{value:S(o.colorCore)},uColorHalo:{value:S(o.colorHalo)}}}function ee(e){const o=V(e);if(o===null)return null;const r=$(o.kind),s=F(e),t=new y;t.name=`cluster-${e.catalogId}`,t.position.set(s.x,s.y,s.z);const l=new O(o.radiusSu,48,24),c=Z(o,r),i=new U({uniforms:c,vertexShader:K,fragmentShader:X,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1}),n=new H(l,i);return n.frustumCulled=!1,n.renderOrder=-12,t.add(n),{group:t,mesh:n,material:i,geometry:l}}function oe(e){e.geometry.dispose(),e.material.dispose()}function re(){return B(G())}function ae(e){const o=N(e).layers.dso,r=new y;r.name="clusterCloudLayer",o.add(r);const s=w(),t=[],l={current:v.getState().showNebulaClouds},c={current:h().getState().universeMode.activeGalaxyId!==null},i={current:0},n={current:performance.now()},f=()=>{r.visible=l.current&&!c.current&&t.length>0},p=()=>{for(;t.length>0;){const a=t.pop();a!=null&&(r.remove(a.group),oe(a))}},d=()=>{p();const a=re();for(const m of a){const u=ee(m);u!==null&&(t.push(u),r.add(u.group))}f()};d();const R=v.subscribe(a=>({showNebulaClouds:a.showNebulaClouds}),a=>{l.current=a.showNebulaClouds,f()},{equalityFn:D}),P=h().subscribeSelector(a=>a.universeMode.activeGalaxyId,a=>{c.current=a!==null,f()}),_=s.getQueryCache().subscribe(a=>{(C(a,"openngc-dso-catalog")||C(a,"custom-objects-catalog"))&&d()});return{onFrame:a=>{if(!r.visible)return;const m=performance.now(),u=Math.min(.06,Math.max(0,(m-n.current)/1e3));n.current=m,i.current+=u;for(const A of t)A.material.uniforms.uTime.value=i.current},dispose:()=>{R(),P(),_(),p(),o.remove(r)}}}function ye(){const e=T(),o=(0,g.useRef)(null);return(0,g.useLayoutEffect)(()=>{const r=ae(e);return o.current=r.onFrame,()=>{r.dispose(),o.current=null}},[e]),x(()=>o.current?.(),L.HUD_BRIDGE),null}export{ye as ClusterCloudMountR3f};
