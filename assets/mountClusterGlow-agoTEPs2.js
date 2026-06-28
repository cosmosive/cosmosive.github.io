import{n as S}from"./state-data-vendor-DwYWRG6B.js";import{n as F}from"./manifest.generated-DjbgW5yc.js";import{t as G}from"./skyLightStore-DEPKm9qN.js";import{A as b,d as u,f as C,g as P,ht as y,it as A}from"./three-vendor-Ce7iT1Ri.js";import{Vr as d,a as z,b as _,xn as L}from"./index-D4N99ROn.js";import{t as R}from"./createMountComponent-Bwxxehf2.js";import{n as v,t as E}from"./deepSkyCatalogBridge-DGshPzO2.js";var T={mainSequence:[.85,.95,1.4],giant:[1.4,1,.55],giantFraction:.08},B={mainSequence:[1.35,1.15,.8],giant:[1.5,.85,.5],giantFraction:.25};function O(t){return t==="globular"?B:T}var k=8;function I(t,i,e,n,l,s,o){t.xs.push(e,n,l),t.mags.push(s),t.cols.push(o[0],o[1],o[2]),t.glow.push(1),t.ids.push(i)}function N(t,i){const e=F(t);if(!Number.isFinite(e.x)||!Number.isFinite(e.y)||!Number.isFinite(e.z)||e.x===0&&e.y===0&&e.z===0)return;const n=t.vMag!=null&&Number.isFinite(t.vMag)?t.vMag:k,l=L(t),s=O(l),o=l==="globular"?s.giant:s.mainSequence;I(i,t.catalogId,e.x,e.y,e.z,n,o)}function D(t){const i={xs:[],mags:[],cols:[],glow:[],ids:[]};for(const e of t)e.type==="star_cluster"&&N(e,i);return{positions:new Float32Array(i.xs),mag:new Float32Array(i.mags),color:new Float32Array(i.cols),isGlow:new Float32Array(i.glow),catalogIds:i.ids,count:i.ids.length}}var V=160,U=`
  attribute float mag;
  attribute vec3 color;
  attribute float isGlow;
  varying vec3 vColor;
  varying float vBrightness;
  varying float vIsGlow;
  uniform float uMagLimit;
  uniform float uGlowMagLimit;
  uniform float uMagRef;
  uniform float uMagFadeRange;
  uniform float uFluxClampMax;
  uniform float uFluxGamma;
  uniform float uPointSizeFloor;
  uniform float uPointSizeMax;
  uniform float uPsfMaxMult;
  uniform float uGlowSizeMult;
  uniform float uSizeMultiplier;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vColor = color;
    vIsGlow = isGlow;

    // Apparent magnitude rescaled to the current camera distance (catalog mag is Sol-pov):
    // m_app = mag + 5*log10(d_cam / d_sol).
    float dCam = length(mvPosition.xyz);
    float dSol = max(length(position), 1.0);
    float appMag = mag + 5.0 * log(dCam / dSol) / log(10.0);

    // Members keep the loose limit (resolve as you fly in); glows use a much stricter limit so only
    // genuinely bright (naked-eye) clusters show a soft patch from afar.
    float effLimit = mix(uMagLimit, uGlowMagLimit, isGlow);

    if (mvPosition.z >= 0.0 || appMag > effLimit) {
      gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // cull outside clip volume
      gl_PointSize = 0.0;
      vBrightness = 0.0;
    } else {
      vec4 clip = projectionMatrix * mvPosition;
      // z-remap: keep screen xy from the true direction, force depth just inside the far plane so
      // the point is never far-clipped. depthWrite:false + renderOrder handle layering.
      gl_Position = vec4(clip.xy, clip.w * 0.9999, clip.w);

      float flux = pow(10.0, -0.4 * (appMag - uMagRef));
      float toneFlux = pow(clamp(flux, 0.0, uFluxClampMax), uFluxGamma);
      float magFade = clamp((effLimit - appMag) / max(uMagFadeRange, 0.0001), 0.0, 1.0);
      float maxToneFlux = pow(uFluxClampMax, uFluxGamma);
      float saturationFrac = sqrt(clamp(toneFlux / max(maxToneFlux, 0.0001), 0.0, 1.0));
      float psfSizePx = mix(uPointSizeFloor, uPointSizeFloor * uPsfMaxMult, saturationFrac);
      // Glow point: large, soft, low-contrast diffuse core behind the resolved members.
      psfSizePx = mix(psfSizePx, psfSizePx * uGlowSizeMult, isGlow);
      psfSizePx *= uSizeMultiplier;
      gl_PointSize = clamp(psfSizePx, 0.0, uPointSizeMax);
      vBrightness = toneFlux * magFade;
    }
  }
`,Q=`
  varying vec3 vColor;
  varying float vBrightness;
  varying float vIsGlow;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    if (dot(uv, uv) > 0.25) discard;
    float radial = clamp(length(uv) * 2.0, 0.0, 1.0);
    // Stellar members: tight high-contrast pinpoint. Glow: broad, soft, low-contrast falloff.
    float coreExp = mix(3.0, 1.1, vIsGlow);
    float core = pow(1.0 - radial, coreExp);
    float glow = smoothstep(1.0, 0.0, radial);
    float baseAlpha = mix(0.35, 0.18, vIsGlow);
    float alpha = clamp(glow * (baseAlpha + (1.0 - baseAlpha) * core), 0.0, 1.0);
    float emissiveBoost = mix(0.5 + 0.9 * core, 0.25 + 0.4 * core, vIsGlow);
    vec3 emissive = vColor * vBrightness * emissiveBoost;
    gl_FragColor = vec4(emissive, alpha);
    if (gl_FragColor.a < 0.01) discard;
  }
`;function q(){return new y({uniforms:{uMagLimit:{value:13},uGlowMagLimit:{value:5},uMagRef:{value:0},uMagFadeRange:{value:1.5},uFluxClampMax:{value:6},uFluxGamma:{value:.45},uPointSizeFloor:{value:1.1},uPointSizeMax:{value:V},uPsfMaxMult:{value:3.5},uGlowSizeMult:{value:3},uSizeMultiplier:{value:1}},vertexShader:U,fragmentShader:Q,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function j(t){const i=_(t).layers.dsoReRooted,e=new b;e.name="clusterGlowLayer",i.add(e);const n=z(),l=q(),s=new P;let o=null,r=null,m=!1;const f={current:d.getState().showDsoVolumes},c=()=>{e.visible=f.current&&o!==null},g=()=>{if(!m){if(o!==null&&(e.remove(o),o.geometry.dispose(),o=null),r=D(E()),r.count>0){const a=new C;a.setAttribute("position",new u(r.positions,3)),a.setAttribute("mag",new u(r.mag,1)),a.setAttribute("color",new u(r.color,3)),a.setAttribute("isGlow",new u(r.isGlow,1)),o=new A(a,l),o.name="clusterGlow",o.frustumCulled=!1,o.renderOrder=-18,e.add(o)}c()}};Promise.resolve().then(g).catch(a=>console.error("[mountClusterGlow] rebuild failed:",a));const w=d.subscribe(a=>({showDsoVolumes:a.showDsoVolumes}),a=>{f.current=a.showDsoVolumes,c()},{equalityFn:S}),x=n.getQueryCache().subscribe(a=>{(v(a,"openngc-dso-catalog")||v(a,"custom-objects-catalog"))&&g()});return{onFrame:()=>{if(l.uniforms.uMagLimit){const a=s.getDelta(),h=G(),M=1-Math.exp(-a/.7),p=l.uniforms.uMagLimit.value;l.uniforms.uMagLimit.value=p+(h.bandMagLimit-p)*M}},dispose:()=>{m=!0,w(),x(),o!==null&&(e.remove(o),o.geometry.dispose(),o=null),l.dispose(),i.remove(e)}}}var oe=R(j,"present.hud");export{oe as ClusterGlowMountR3f};
