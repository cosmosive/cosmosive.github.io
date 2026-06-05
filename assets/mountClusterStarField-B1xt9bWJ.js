import{n as X}from"./state-data-vendor-poX9OG4b.js";import{t as H}from"./publicUrl-Dg1xy6-A.js";import{t as W}from"./skyLightStore-BfXJGTVl.js";import{t as U}from"./deepSkyScenePosition-CIyVuXnZ.js";import{t as J}from"./dsoSpheremapLOD-hw7O3U3k.js";import{A as Z,d as C,f as $,g as tt,mt as et,rt as ot}from"./three-vendor-DtGC8FGl.js";import{$t as at,Nr as I,a as rt,en as st,tn as lt}from"./index-BRqrMmr0.js";import{t as it}from"./r3fHostExtras-BxsX4C09.js";import{t as nt}from"./createMountComponent-7Tgk5IWz.js";import{n as B,t as ut}from"./deepSkyCatalogBridge-4mzezHQR.js";import{n as M,t as ct}from"./nebulaSeed-D0YYy3wG.js";var mt={mainSequence:[.85,.95,1.4],giant:[1.4,1,.55],giantFraction:.08},ft={mainSequence:[1.35,1.15,.8],giant:[1.5,.85,.5],giantFraction:.25};function gt(t){return t==="globular"?ft:mt}var k=7,pt=12e4,dt=8,Mt=24,ht=4e3;function vt(t,o){const e=10**(.4*(6-t)),n=Math.round(e*(o==="globular"?90:40));return Math.max(Mt,Math.min(ht,n))}function St(t){return 5*(Math.log10(t)-1)}function xt(t,o){return(M(t,o)+M(t,o+.37)+M(t,o+.71))/1.5-1}function bt(t,o){if(o==="globular"){const e=t*t;return Math.min(1,e*(.4+.6*t))}return Math.cbrt(t)*(.85+.15*t)}function F(t,o,e,n,i,r,s,l){t.xs.push(e,n,i),t.mags.push(r),t.cols.push(s[0],s[1],s[2]),t.glow.push(l),t.ids.push(o)}function wt(t,o,e,n,i,r,s){const{members:l}=n,f=Math.floor(l.length/k),c=Math.min(f,Math.max(0,e-1));let m=0;for(let g=0;g<c;g+=1){const u=g*k,h=l[u],x=l[u+1],v=l[u+2],a=l[u+3],b=l[u+4],S=l[u+5],p=l[u+6],d=U({raDeg:h,decDeg:x,distPc:t.distPc+v});F(o,t.catalogId,d.x,d.y,d.z,a,[b,S,p],0),m+=1}return e-m>=1&&(F(o,t.catalogId,i.x,i.y,i.z,r,s.mainSequence,1),m+=1),m}function Ft(t,o,e,n){if(e<=0)return 0;const i=lt(t);if(i===null)return 0;const r=U(t);if(!Number.isFinite(r.x)||!Number.isFinite(r.y)||!Number.isFinite(r.z)||r.x===0&&r.y===0&&r.z===0)return 0;const{distPc:s}=t,l=t.vMag!=null&&Number.isFinite(t.vMag)?t.vMag:dt,f=at(t),c=gt(f),m=n?.get(J(t.catalogId));if(m!=null&&m.kind==="open")return wt(t,o,e,m,r,l,c);const{axisRatio:g,tiltRad:u}=st(t),h=ct(t.catalogId),x=i.radiusSu,v=St(s);let a=vt(l,f);if(a=Math.min(a,Math.max(0,e-1)),a<=0)return e>=1?(F(o,t.catalogId,r.x,r.y,r.z,l,c.giant,1),1):0;const b=l-v,S=Math.cos(u),p=Math.sin(u);let d=0;for(let P=0;P<a;P+=1){const w=h+P*.0137,G=M(w,.11)*Math.PI*2,A=M(w,.23)*2-1,T=Math.sqrt(Math.max(0,1-A*A));let _=T*Math.cos(G),z=T*Math.sin(G),R=A;const E=bt(M(w,.41),f)*x;_*=E,z*=E,R*=E;const L=z*g,N=_*S-L*p,O=_*p+L*S,j=r.x+N,q=r.y+O,V=r.z+R,Q=xt(w,.61)*2.5,Y=b+2.5*Math.log10(a)+Q+v,K=M(w,.83)<c.giantFraction?c.giant:c.mainSequence;F(o,t.catalogId,j,q,V,Y,K,0),d+=1}const D=f==="globular"?c.giant:c.mainSequence;return F(o,t.catalogId,r.x,r.y,r.z,l,D,1),d+=1,d}function Ct(t,o){const e={xs:[],mags:[],cols:[],glow:[],ids:[]};let n=0;for(const i of t){if(n>=12e4)break;i.type==="star_cluster"&&(n+=Ft(i,e,pt-n,o))}return{positions:new Float32Array(e.xs),mag:new Float32Array(e.mags),color:new Float32Array(e.cols),isGlow:new Float32Array(e.glow),catalogIds:e.ids,count:e.ids.length}}var yt="/assets/data/clusters/cluster-members.json",Pt=1e4,y=null;function At(t){const o=atob(t),e=new Uint8Array(o.length);for(let n=0;n<o.length;n+=1)e[n]=o.charCodeAt(n);return new Float32Array(e.buffer.slice(0))}function _t(t){const o=new Map;if(t===null||typeof t!="object")return o;const e=t;if(e.clusters===null||typeof e.clusters!="object"||e.clusters===void 0)return o;for(const[n,i]of Object.entries(e.clusters))if(i!==null&&typeof i=="object"){const{kind:r,members:s}=i;(r==="open"||r==="globular")&&typeof s=="string"&&o.set(n,{kind:r,members:At(s)})}return o}function Et(){if(y!==null)return y;const t=new AbortController,o=setTimeout(()=>t.abort(),Pt);return y=fetch(H(yt),{signal:t.signal}).then(async e=>e.ok?_t(await e.json()):new Map).catch(()=>new Map).finally(()=>clearTimeout(o)),y}async function Gt(){return Et()}var Tt=160,zt=`
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
`,Rt=`
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
`;function Lt(){return new et({uniforms:{uMagLimit:{value:13},uGlowMagLimit:{value:5},uMagRef:{value:0},uMagFadeRange:{value:1.5},uFluxClampMax:{value:6},uFluxGamma:{value:.45},uPointSizeFloor:{value:1.1},uPointSizeMax:{value:Tt},uPsfMaxMult:{value:3.5},uGlowSizeMult:{value:3},uSizeMultiplier:{value:1}},vertexShader:zt,fragmentShader:Rt,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function It(t){const o=it(t).layers.dsoReRooted,e=new Z;e.name="clusterStarFieldLayer",o.add(e);const n=rt(),i=Lt(),r=new tt;let s=null,l=null,f,c=!1;const m={current:I.getState().showDsoVolumes},g=()=>{e.visible=m.current&&s!==null},u=()=>{if(!c){if(s!==null&&(e.remove(s),s.geometry.dispose(),s=null),l=Ct(ut(),f),l.count>0){const a=new $;a.setAttribute("position",new C(l.positions,3)),a.setAttribute("mag",new C(l.mag,1)),a.setAttribute("color",new C(l.color,3)),a.setAttribute("isGlow",new C(l.isGlow,1)),s=new ot(a,i),s.name="clusterStarField",s.frustumCulled=!1,s.renderOrder=-18,e.add(s)}g()}};Promise.resolve().then(u).catch(a=>console.error("[mountClusterStarField] rebuild failed:",a));let h=!1;Gt().then(a=>{h||c||(f=a,u())}).catch(a=>console.error("[mountClusterStarField] getAllClusterMemberSets failed:",a));const x=I.subscribe(a=>({showDsoVolumes:a.showDsoVolumes}),a=>{m.current=a.showDsoVolumes,g()},{equalityFn:X}),v=n.getQueryCache().subscribe(a=>{(B(a,"openngc-dso-catalog")||B(a,"custom-objects-catalog"))&&u()});return{onFrame:()=>{if(i.uniforms.uMagLimit){const a=r.getDelta(),b=W(),S=1-Math.exp(-a/.7),p=i.uniforms.uMagLimit.value;i.uniforms.uMagLimit.value=p+(b.bandMagLimit-p)*S}},dispose:()=>{c=!0,h=!0,x(),v(),s!==null&&(e.remove(s),s.geometry.dispose(),s=null),i.dispose(),o.remove(e)}}}var Ht=nt(It,"present.hud");export{Ht as ClusterStarFieldMountR3f};
