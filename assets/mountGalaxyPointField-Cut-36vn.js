import{n as C}from"./state-data-vendor-DwYWRG6B.js";import{n as G}from"./manifest.generated-DjbgW5yc.js";import{A as _,d as m,f as z,ht as R,it as L}from"./three-vendor-Ce7iT1Ri.js";import{En as T,Vr as P,a as B,b as E}from"./index-D4N99ROn.js";import{t as N}from"./createMountComponent-Bwxxehf2.js";import{n as g}from"./backdropCache-DtKmT5Q5.js";import{n as S,t as V}from"./deepSkyCatalogBridge-DGshPzO2.js";import{i as I,t as O}from"./galaxyVolumeActivations-DjDa8t_c.js";var D=13;function k(a){switch(T(a.hubbleType).kind){case"elliptical":case"lenticular":return[1.3,1.05,.7];case"irregular":return[.8,.95,1.3];default:return[1.05,1,1.05]}}function Q(a){return a.type==="galaxy"&&(a.openNgcTypeRaw==null||a.openNgcTypeRaw==="G")&&a.parentGalaxyId==null}function Y(a){if(!Q(a)||!Number.isFinite(a.distPc)||(a.distPc??0)<=0)return null;const l=G(a);if(!Number.isFinite(l.x)||!Number.isFinite(l.y)||!Number.isFinite(l.z)||l.x===0&&l.y===0&&l.z===0)return null;const i=a.vMag!=null&&Number.isFinite(a.vMag)?a.vMag:D;return{pos:[l.x,l.y,l.z],mag:i,color:k(a)}}function U(a){const l=[],i=[],n=[],s=[];for(const e of a){const t=Y(e);t!==null&&(l.push(t.pos[0],t.pos[1],t.pos[2]),i.push(t.mag),n.push(t.color[0],t.color[1],t.color[2]),s.push(e.catalogId))}return{positions:new Float32Array(l),mag:new Float32Array(i),colors:new Float32Array(n),catalogIds:s,count:s.length}}var j=96,X=`
  attribute float mag;
  attribute vec3 color;
  attribute float suppress;
  varying vec3 vColor;
  varying float vBrightness;
  uniform float uMagLimit;
  uniform float uMagRef;
  uniform float uMagFadeRange;
  uniform float uFluxClampMax;
  uniform float uFluxGamma;
  uniform float uPointSizeFloor;
  uniform float uPointSizeMax;
  uniform float uPsfMaxMult;
  uniform float uSizeMultiplier;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vColor = color;

    // Apparent magnitude rescaled to the current camera distance (catalog mag is Sol-pov):
    // m_app = mag + 5*log10(d_cam / d_sol).
    float dCam = length(mvPosition.xyz);
    float dSol = max(length(position), 1.0);
    float appMag = mag + 5.0 * log(dCam / dSol) / log(10.0);

    if (mvPosition.z >= 0.0 || appMag > uMagLimit || suppress > 0.5) {
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
      float magFade = clamp((uMagLimit - appMag) / max(uMagFadeRange, 0.0001), 0.0, 1.0);
      float maxToneFlux = pow(uFluxClampMax, uFluxGamma);
      float saturationFrac = sqrt(clamp(toneFlux / max(maxToneFlux, 0.0001), 0.0, 1.0));
      float psfSizePx = mix(uPointSizeFloor, uPointSizeFloor * uPsfMaxMult, saturationFrac);
      psfSizePx *= uSizeMultiplier;
      gl_PointSize = clamp(psfSizePx, 0.0, uPointSizeMax);
      vBrightness = toneFlux * magFade;
    }
  }
`,K=`
  varying vec3 vColor;
  varying float vBrightness;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    if (dot(uv, uv) > 0.25) discard;
    float radial = clamp(length(uv) * 2.0, 0.0, 1.0);
    float core = pow(1.0 - radial, 2.2);
    float glow = smoothstep(1.0, 0.0, radial);
    float alpha = clamp(glow * (0.4 + 0.6 * core), 0.0, 1.0);
    vec3 emissive = vColor * vBrightness * (0.6 + 0.8 * core);
    gl_FragColor = vec4(emissive, alpha);
    if (gl_FragColor.a < 0.01) discard;
  }
`;function q(){return new R({uniforms:{uMagLimit:{value:8.5},uMagRef:{value:0},uMagFadeRange:{value:1.5},uFluxClampMax:{value:6},uFluxGamma:{value:.45},uPointSizeFloor:{value:1.6},uPointSizeMax:{value:j},uPsfMaxMult:{value:4},uSizeMultiplier:{value:1}},vertexShader:X,fragmentShader:K,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function W(a){const l=E(a).layers.dso,i=new _;i.name="galaxyPointFieldLayer",l.add(i);const n=B(),s=q();let e=null,t=null,d=new Map,u=new Set,v=!1;const x={current:P.getState().showDsoVolumes},h=()=>{i.visible=x.current&&e!==null},F=()=>{if(e===null||t===null)return;const o=e.geometry.getAttribute("suppress"),c=o.array,p=new Set;for(const r of O()){const M=d.get(r);M!==void 0&&p.add(M)}let f=!1;for(const r of u)p.has(r)||(c[r]=0,f=!0);for(const r of p)u.has(r)||(c[r]=1,f=!0);f&&(u=p,o.needsUpdate=!0,g())},y=()=>{if(!v){if(e!==null&&(i.remove(e),e.geometry.dispose(),e=null),t=U(V()),d=new Map(t.catalogIds.map((o,c)=>[o,c])),u=new Set,t.count>0){const o=new z;o.setAttribute("position",new m(t.positions,3)),o.setAttribute("mag",new m(t.mag,1)),o.setAttribute("color",new m(t.colors,3)),o.setAttribute("suppress",new m(new Float32Array(t.count),1)),e=new L(o,s),e.name="galaxyPointField",e.frustumCulled=!1,e.renderOrder=-20,e.layers.set(1),i.add(e),F()}h(),g()}};Promise.resolve().then(y).catch(o=>console.error("[mountGalaxyPointField] rebuild failed:",o));const w=P.subscribe(o=>({showDsoVolumes:o.showDsoVolumes}),o=>{x.current=o.showDsoVolumes,h()},{equalityFn:C}),b=n.getQueryCache().subscribe(o=>{(S(o,"openngc-dso-catalog")||S(o,"custom-objects-catalog"))&&y()}),A=I(()=>F());return{onFrame:()=>{},dispose:()=>{v=!0,w(),b(),A(),e!==null&&(i.remove(e),e.geometry.dispose(),e=null,g()),s.dispose(),l.remove(i)}}}var re=N(W,"present.hud");export{re as GalaxyPointFieldMountR3f};
