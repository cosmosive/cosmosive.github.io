import{n as W}from"./state-data-vendor-poX9OG4b.js";import{t as H}from"./publicUrl-Dg1xy6-A.js";import{t as J}from"./skyLightStore-BfXJGTVl.js";import{b as Z}from"./src-C2ufWDL8.js";import{t as B}from"./deepSkyScenePosition-PvQBd_xt.js";import{t as $}from"./dsoSpheremapLOD-hw7O3U3k.js";import{A as tt,d as C,f as et,g as ot,mt as at,rt as it}from"./three-vendor-DtGC8FGl.js";import{Gt as rt,a as st,kr as I}from"./index-DhdJTZpa.js";import{t as lt}from"./r3fHostExtras-BV5eJ3qI.js";import{t as nt}from"./createMountComponent-6SiL4h9m.js";import{n as N,t as ut}from"./deepSkyCatalogBridge-DBMLBJDz.js";import{n as M,t as ct}from"./nebulaSeed-D0YYy3wG.js";var mt=Math.PI/180/60,ft=rt.far/4;function D(t){return t.openNgcTypeRaw==="GCl"?"globular":"open"}function gt(t){const o=t.majAxArcmin,e=t.minAxArcmin;let r=1;Number.isFinite(o)&&(o??0)>0&&Number.isFinite(e)&&(e??0)>0&&(r=Math.min(1,e/o));const s=t.positionAngleDeg,a=Number.isFinite(s)?s*Math.PI/180:0;return{axisRatio:r,tiltRad:a}}function pt(t){if(t.type!=="star_cluster"||!Number.isFinite(t.distPc)||t.distPc<=0)return null;const o=Number.isFinite(t.majAxArcmin)&&(t.majAxArcmin??0)>0;let e;if(o){const s=t.majAxArcmin/2*mt;e=t.distPc*Math.tan(s)}else e=4;(!Number.isFinite(e)||e<=0)&&(e=4);const r=Math.min(Z(e),ft);return r<=0?null:{radiusSu:r,radiusPc:e,morphScale:[1,1,1],kind:D(t)}}var dt={mainSequence:[.85,.95,1.4],giant:[1.4,1,.55],giantFraction:.08},Mt={mainSequence:[1.35,1.15,.8],giant:[1.5,.85,.5],giantFraction:.25};function ht(t){return t==="globular"?Mt:dt}var U=7,vt=12e4,St=8,bt=24,xt=4e3;function wt(t,o){const e=10**(.4*(6-t)),r=Math.round(e*(o==="globular"?90:40));return Math.max(bt,Math.min(xt,r))}function Ft(t){return 5*(Math.log10(t)-1)}function Ct(t,o){return(M(t,o)+M(t,o+.37)+M(t,o+.71))/1.5-1}function At(t,o){if(o==="globular"){const e=t*t;return Math.min(1,e*(.4+.6*t))}return Math.cbrt(t)*(.85+.15*t)}function F(t,o,e,r,s,a,l,n){t.xs.push(e,r,s),t.mags.push(a),t.cols.push(l[0],l[1],l[2]),t.glow.push(n),t.ids.push(o)}function Pt(t,o,e,r,s,a,l){const{members:n}=r,f=Math.floor(n.length/U),c=Math.min(f,Math.max(0,e-1));let m=0;for(let g=0;g<c;g+=1){const u=g*U,h=n[u],b=n[u+1],v=n[u+2],i=n[u+3],x=n[u+4],S=n[u+5],p=n[u+6],d=B({raDeg:h,decDeg:b,distPc:t.distPc+v});F(o,t.catalogId,d.x,d.y,d.z,i,[x,S,p],0),m+=1}return e-m>=1&&(F(o,t.catalogId,s.x,s.y,s.z,a,l.mainSequence,1),m+=1),m}function _t(t,o,e,r){if(e<=0)return 0;const s=pt(t);if(s===null)return 0;const a=B(t);if(!Number.isFinite(a.x)||!Number.isFinite(a.y)||!Number.isFinite(a.z)||a.x===0&&a.y===0&&a.z===0)return 0;const{distPc:l}=t,n=t.vMag!=null&&Number.isFinite(t.vMag)?t.vMag:St,f=D(t),c=ht(f),m=r?.get($(t.catalogId));if(m!=null&&m.kind==="open")return Pt(t,o,e,m,a,n,c);const{axisRatio:g,tiltRad:u}=gt(t),h=ct(t.catalogId),b=s.radiusSu,v=Ft(l);let i=wt(n,f);if(i=Math.min(i,Math.max(0,e-1)),i<=0)return e>=1?(F(o,t.catalogId,a.x,a.y,a.z,n,c.giant,1),1):0;const x=n-v,S=Math.cos(u),p=Math.sin(u);let d=0;for(let P=0;P<i;P+=1){const w=h+P*.0137,y=M(w,.11)*Math.PI*2,_=M(w,.23)*2-1,T=Math.sqrt(Math.max(0,1-_*_));let R=T*Math.cos(y),G=T*Math.sin(y),z=_;const E=At(M(w,.41),f)*b;R*=E,G*=E,z*=E;const L=G*g,j=R*S-L*p,O=R*p+L*S,q=a.x+j,V=a.y+O,Q=a.z+z,Y=Ct(w,.61)*2.5,K=x+2.5*Math.log10(i)+Y+v,X=M(w,.83)<c.giantFraction?c.giant:c.mainSequence;F(o,t.catalogId,q,V,Q,K,X,0),d+=1}const k=f==="globular"?c.giant:c.mainSequence;return F(o,t.catalogId,a.x,a.y,a.z,n,k,1),d+=1,d}function Rt(t,o){const e={xs:[],mags:[],cols:[],glow:[],ids:[]};let r=0;for(const s of t){if(r>=12e4)break;s.type==="star_cluster"&&(r+=_t(s,e,vt-r,o))}return{positions:new Float32Array(e.xs),mag:new Float32Array(e.mags),color:new Float32Array(e.cols),isGlow:new Float32Array(e.glow),catalogIds:e.ids,count:e.ids.length}}var Et="/assets/data/clusters/cluster-members.json",yt=1e4,A=null;function Tt(t){const o=atob(t),e=new Uint8Array(o.length);for(let r=0;r<o.length;r+=1)e[r]=o.charCodeAt(r);return new Float32Array(e.buffer.slice(0))}function Gt(t){const o=new Map;if(t===null||typeof t!="object")return o;const e=t;if(e.clusters===null||typeof e.clusters!="object"||e.clusters===void 0)return o;for(const[r,s]of Object.entries(e.clusters))if(s!==null&&typeof s=="object"){const{kind:a,members:l}=s;(a==="open"||a==="globular")&&typeof l=="string"&&o.set(r,{kind:a,members:Tt(l)})}return o}function zt(){if(A!==null)return A;const t=new AbortController,o=setTimeout(()=>t.abort(),yt);return A=fetch(H(Et),{signal:t.signal}).then(async e=>e.ok?Gt(await e.json()):new Map).catch(()=>new Map).finally(()=>clearTimeout(o)),A}async function Lt(){return zt()}var It=160,Nt=`
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
`,Ut=`
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
`;function Bt(){return new at({uniforms:{uMagLimit:{value:13},uGlowMagLimit:{value:5},uMagRef:{value:0},uMagFadeRange:{value:1.5},uFluxClampMax:{value:6},uFluxGamma:{value:.45},uPointSizeFloor:{value:1.1},uPointSizeMax:{value:It},uPsfMaxMult:{value:3.5},uGlowSizeMult:{value:18},uSizeMultiplier:{value:1}},vertexShader:Nt,fragmentShader:Ut,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function Dt(t){const o=lt(t).layers.dso,e=new tt;e.name="clusterStarFieldLayer",o.add(e);const r=st(),s=Bt(),a=new ot;let l=null,n=null,f,c=!1;const m={current:I.getState().showDsoVolumes},g=()=>{e.visible=m.current&&l!==null},u=()=>{if(!c){if(l!==null&&(e.remove(l),l.geometry.dispose(),l=null),n=Rt(ut(),f),n.count>0){const i=new et;i.setAttribute("position",new C(n.positions,3)),i.setAttribute("mag",new C(n.mag,1)),i.setAttribute("color",new C(n.color,3)),i.setAttribute("isGlow",new C(n.isGlow,1)),l=new it(i,s),l.name="clusterStarField",l.frustumCulled=!1,l.renderOrder=-18,e.add(l)}g()}};Promise.resolve().then(u).catch(i=>console.error("[mountClusterStarField] rebuild failed:",i));let h=!1;Lt().then(i=>{h||c||(f=i,u())}).catch(i=>console.error("[mountClusterStarField] getAllClusterMemberSets failed:",i));const b=I.subscribe(i=>({showDsoVolumes:i.showDsoVolumes}),i=>{m.current=i.showDsoVolumes,g()},{equalityFn:W}),v=r.getQueryCache().subscribe(i=>{(N(i,"openngc-dso-catalog")||N(i,"custom-objects-catalog"))&&u()});return{onFrame:()=>{if(s.uniforms.uMagLimit){const i=a.getDelta(),x=J(),S=1-Math.exp(-i/.7),p=s.uniforms.uMagLimit.value;s.uniforms.uMagLimit.value=p+(x.bandMagLimit-p)*S}},dispose:()=>{c=!0,h=!0,b(),v(),l!==null&&(e.remove(l),l.geometry.dispose(),l=null),s.dispose(),o.remove(e)}}}var te=nt(Dt,"present.hud");export{te as ClusterStarFieldMountR3f};
