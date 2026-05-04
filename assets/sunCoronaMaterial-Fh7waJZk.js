import{n as at}from"./state-data-vendor-Bp8N-OcR.js";import{H as pt,N as Et,Ot as Rt,Rt as _t,V as zt,mt as Ft,wt as It}from"./sceneModel-BCGJypyq.js";import{n as q}from"./scenePrefsStore-Dj7aWJM_.js";import{a as Dt}from"./overlayStackStore-_95pxoCh.js";import{i as kt}from"./deepSkyScenePosition-DajeHXSp.js";import{E as st,_n as Lt,d as Nt,t as Wt}from"./combatSessionStore-tY2gS0Cy.js";import{d as Ot}from"./timeTrialGuards-dj-UhkOt.js";import{B as Vt,C as Ht,N as it,Q as Bt,R as Ut,bt as W,f as ht,l as $t,lt as D,o as I,s as qt,ut as jt,yt as Gt}from"./three-vendor-Bbop5Fm9.js";import{t as lt}from"./use-hyg-catalog-C77qHB0b.js";import{n as Kt,r as Qt}from"./comlink-BsukVemt.js";import{a as Yt,q as ct}from"./index-CfF9UXHm.js";import{n as vt,t as Xt}from"./queryCacheNotify-DH7dvD3S.js";var X={current:null};function Zt(t,e,r){return r&&e&&_t(t,e.position.x,e.position.y,e.position.z),t}function Jt(t,e,r){if(r&&e){const a=t;a.x+=e.position.x,a.y+=e.position.y,a.z+=e.position.z}return t}function rr(t,e){return t.getWorldPosition(e),Zt(e,X.current,!0),e}var te=()=>({starfieldChunksTotal:0,starfieldChunksVisible:0,starfieldVerticesTotal:0,starfieldPipelineStatus:"idle",starfieldSyntheticKind:"empty",starfieldChunkAbbrevSample:"",shipsCandidates:0,shipsRendered:0,combatShotsTracerEnemySlots:0,combatShotsConquestCandidates:0,combatShotsConquestPassedFrustum:0,updatedAtMs:0}),ut=te();function nr(t){}typeof globalThis.window<"u";function ee(t,e,r,a,o){t.updateMatrixWorld(!0),t.getWorldPosition(r),e.position.x=r.x,e.position.y=r.y,e.position.z=r.z,t.getWorldDirection(r),a.setFromMatrixColumn(t.matrixWorld,0).normalize(),o.setFromMatrixColumn(t.matrixWorld,1).normalize(),e.forward.x=r.x,e.forward.y=r.y,e.forward.z=r.z,e.right.x=a.x,e.right.y=a.y,e.right.z=a.z,e.up.x=o.x,e.up.y=o.y,e.up.z=o.z,e.fovYRadians=Ut.degToRad(t.fov),e.aspect=t.aspect}function re(t,e,r,a,o){ee(t,e,r,a,o);{const s=X.current;s&&(e.position.x-=s.position.x,e.position.y-=s.position.y,e.position.z-=s.position.z)}}var K="__cosmosivePointer",Q=new WeakMap;function ft(t,e){e==null?delete t.userData[K]:t.userData[K]=e}function or(t){return t.userData[K]}function ar(t,e){e==null?Q.delete(t):Q.set(t,e)}function sr(t){return Q.get(t)}function ir(t){const e=t.replace(/^#/,""),r=parseInt(e,16);return Number.isFinite(r)?[Math.floor(r/65536)%256,Math.floor(r/256)%256,r%256]:[0,0,0]}function ne(t){if(!t||typeof t!="string")return[1,1,1];const e=t.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,1,1]}function lr(t){return Math.max(0,Math.min(255,Math.round(t)))}function O(t,e=1,r=1){const[a,o,s]=ne(t),c=Math.max(.15,Math.min(1,e));return[a*c,o*c,s*c,r]}var z={star1:O("#fff3a8",1),star2:O("#f5c238",1),star3:O("#e07b1a",1),star4:O("#a8380c",1)},oe=64,ae=[{offset:0,color:"rgba(255,255,255,1)"},{offset:1,color:"rgba(255,255,255,0.8)"}];function gt(t){const e=t?.size??oe,r=t?.stops??ae,a=document.createElement("canvas");a.width=e,a.height=e;const o=a.getContext("2d");if(o){const c=e/2,u=o.createRadialGradient(c,c,0,c,c,c);for(const{offset:m,color:i}of r)u.addColorStop(m,i);o.fillStyle=u,o.fillRect(0,0,e,e)}const s=new $t(a);return s.generateMipmaps=!1,s.minFilter=it,s.magFilter=it,s.needsUpdate=!0,s}var se=[{offset:0,color:"rgba(255,255,255,1)"},{offset:.3,color:"rgba(255,255,255,1)"},{offset:.65,color:"rgba(255,255,255,0.8)"},{offset:1,color:"rgba(255,255,255,0)"}],ie="/assets/starfield.worker-CZ91LfvW.js";function St(t){return t==="countdown"||t==="active"||t==="complete"}function le(t,e,r,a){if(!a||!St(e)||r.length===0)return t;const o=new Set(r);return t.filter(s=>s.catalogId!=null&&o.has(s.catalogId))}function ce(t,e,r){return!r||!St(e)?t:t||e==="countdown"}var ue=256,fe=`
  attribute float size;
  attribute vec3 color;
  attribute float brightness;
  varying vec3 vColor;
  varying float vBrightness;
  uniform float uScale;
  uniform float uPointSizeMax;
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vColor = color;
    vBrightness = brightness;
    if (mvPosition.z >= 0.0) {
      gl_PointSize = 0.0;
    } else {
      float s = size * (uScale / -mvPosition.z);
      gl_PointSize = clamp(s, 0.0, uPointSizeMax);
    }
  }
`,de=`
  varying vec3 vColor;
  varying float vBrightness;
  uniform sampler2D map;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    if (dot(uv, uv) > 0.25) discard;
    vec4 texColor = texture2D(map, gl_PointCoord);
    gl_FragColor = vec4(vColor * vBrightness, 1.0) * texColor;
    if (gl_FragColor.a < 0.01) discard;
  }
`;function me(t){const e=t==null?gt():null,r=t??e,a=new D({uniforms:{uScale:{value:1},uPointSizeMax:{value:ue},map:{value:r}},vertexShader:fe,fragmentShader:de,transparent:!0,depthWrite:!1});e&&(a.cosmosiveFallbackTexture=e);const o=new Gt;return a.onBeforeRender=(s,c,u)=>{const m=u;m.isPerspectiveCamera&&m.fov&&(s.getSize(o),a.uniforms.uScale.value=o.y/(2*Math.tan(m.fov*Math.PI/360)))},a}var Z=4,cr=64*Z,pe=-25,he=500,ve=.01;function yt(t){return Math.max(0,Math.min(1,t))}function ge(t){return t?.size!=null&&Number.isFinite(t.size)?yt(t.size):.5}function Se(t){return .08+.76*yt((t-.99)/.01)**3}function ur(t){return(t?zt(t,Lt(t)):pt)*Se(ge(t))*Z}function Y(t,e){let r=e;for(;t[r]!==r;)r=t[r];let a=e;for(;a!==r;){const o=t[a];t[a]=r,a=o}return r}function ye(t,e,r){const a=Y(t,e),o=Y(t,r);a!==o&&(t[a]=o)}function dt(t,e,r){return`${t},${e},${r}`}function xe(t,e){const r=t.length,a=Array.from({length:r},(i,f)=>f),o=e,s=new Map;for(let i=0;i<r;i+=1){const f=t[i],d=dt(Math.floor(f.x/o),Math.floor(f.y/o),Math.floor(f.z/o));s.has(d)||s.set(d,[]),s.get(d).push(i)}const c=e*e;for(let i=0;i<r;i+=1){const f=t[i],d=Math.floor(f.x/o),v=Math.floor(f.y/o),P=Math.floor(f.z/o);for(let x=-1;x<=1;x+=1)for(let T=-1;T<=1;T+=1)for(let g=-1;g<=1;g+=1){const S=dt(d+x,v+T,P+g),b=s.get(S);if(b)for(const w of b){if(w<=i)continue;const C=t[w],R=C.x-f.x,k=C.y-f.y,_=C.z-f.z;R*R+k*k+_*_<c&&ye(a,i,w)}}}const u=new Map;for(let i=0;i<r;i+=1){const f=Y(a,i);u.has(f)||u.set(f,[]),u.get(f).push(i)}const m=[];for(let i=0;i<r;i+=1)m.push(void 0);for(const i of u.values())i.length<=1||(i.sort((f,d)=>f-d),i.forEach((f,d)=>{d>0&&(m[f]={x:0,y:d*pe})}));return m}function be(){const t=[];for(let e=0;e<he;e+=1){const r=Et(e*.7%360,e*.3%180-90);r!=null&&t.push(r)}return t}function we(){const t=be(),e=t.length,r=Ft,a=new Float32Array(e*3);return t.forEach((o,s)=>{a[s*3]=o.x*r,a[s*3+1]=o.y*r,a[s*3+2]=o.z*r}),{abbr:"_bootstrap",positions:a,sizes:new Float32Array(e).fill(pt*Z),colors:new Float32Array(e*3).fill(1),warm:new Float32Array(e).fill(ve),brightness:new Float32Array(e).fill(1),starsInChunk:[]}}var Ce={raMin:0,raMax:360,decMin:-90,decMax:90},Pe={chunks:[],namedStarsInView:[]};function Me(t,e){return t===0&&e!=="success"}function xt(t,e){return t.chunks.length>0?t.chunks:e==="idle"||e==="loading"?[we()]:[]}function fr(t,e){const r=xt(t,e),a=r.slice(0,3).map(o=>o.abbr).join(",");return r.length===0?{syntheticKind:"empty",chunkAbbrevSample:a}:r.length===1&&r[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:a}:r.some(o=>o.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:a}:{syntheticKind:"real",chunkAbbrevSample:a}}function mt(t,e){return e.current===t.current}function Te(t,e,r,a,o){t.onerror=s=>{mt(e,r)||(a("error"),o(s.message??"Starfield worker failed"))},t.onmessageerror=()=>{mt(e,r)||(a("error"),o("Starfield worker message error"))}}function Ae(t,e,r,a,o,s,c){const{runId:u,...m}=t;u===e.current&&(r.current=u,a.current=m.starsInView,o({chunks:m.chunks,namedStarsInView:m.namedStarsInView}),s("ready"),c(null))}function Ee(t,e,r,a,o){t.processStarfield({runId:e,catalog:r,maxDistanceLevel:a,bounds:Ce,raInHours:!1}).then(s=>{Ae(s,o.runIdRef,o.lastSuccessfulRunIdRef,o.starsInViewRef,o.setStarData,o.setStarfieldStatus,o.setErrorMessage)}).catch(s=>{e===o.runIdRef.current&&(o.setStarfieldStatus("error"),o.setErrorMessage(s instanceof Error?s.message:"Starfield worker failed"))})}function Re(t,e,r=48){const a=[];for(let c=0;c<e.length;c+=1){const u=e[c];if(!Rt(u.position,t.position,t.forward,t.right,t.up,t.fovYRadians,t.aspect))continue;const m=u.position.x-t.position.x,i=u.position.y-t.position.y,f=u.position.z-t.position.z,d=m*m+i*i+f*f;a.push({entry:u,distSq:d,index:c})}a.sort((c,u)=>c.distSq!==u.distSq?c.distSq-u.distSq:c.index-u.index);const o=a.slice(0,r).map(c=>c.entry),s=xe(o.map(c=>c.position),10);return o.map((c,u)=>({...c,labelOffset:s[u]}))}function _e(t,e){return`translate(${t}px, ${e}px) translate(-50%, calc(-100% - 8px))`}function ze(t){return t.map(e=>`${e.name}\0${e.position.x.toFixed(4)},${e.position.y.toFixed(4)},${e.position.z.toFixed(4)}\0${e.labelOffset?.x??""},${e.labelOffset?.y??""}`).join("|")}function Fe(t){const e=document.createElement("div");e.style.position="absolute",e.style.left="0",e.style.top="0",e.style.width="100%",e.style.height="100%",e.style.pointerEvents="none",t.appendChild(e);let r="",a=[],o=[];function s(){e.replaceChildren(),a=[],o=[],r=""}function c(u){e.replaceChildren(),a=[],o=u;for(const{position:m,name:i,labelOffset:f}of u){const d=document.createElement("div");d.className="star-label-wrapper",d.style.position="absolute",d.style.left="0",d.style.top="0",d.style.pointerEvents="none";const v=document.createElement("span");v.className="star-label",v.textContent=i,d.appendChild(v),e.appendChild(d),a.push({wrap:d,span:v})}}return{container:e,get lastSig(){return r},set lastSig(u){r=u},get rowEls(){return a},get currentRows(){return o},clearRows:s,rebuildRows:c}}function Ie(t,e,r){const a=r,o=Fe(a),s={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},c=new W,u=new W,m=new W,i=new W;return{onFrame:()=>{const d=e.getEnabled(),v=e.getNamedStarsInView(),{size:P}=t;if(!d){o.lastSig!==""&&o.clearRows();return}const x=vt(t).cameraThree;if(!x.isPerspectiveCamera)return;re(x,s,c,u,m);const T=Re(s,v),g=ze(T);g!==o.lastSig&&(o.lastSig=g,o.rebuildRows(T));for(let S=0;S<o.currentRows.length;S+=1){const b=o.currentRows[S],w=o.rowEls[S]?.wrap;if(!w)continue;if(i.set(b.position.x,b.position.y,b.position.z),Jt(i,X.current,!0),i.project(x),!(Number.isFinite(i.x)&&Number.isFinite(i.y)&&Number.isFinite(i.z)&&Math.abs(i.x)<=1&&Math.abs(i.y)<=1&&i.z>=-1&&i.z<=1)){w.style.display="none";continue}w.style.display="";const C=(i.x*.5+.5)*P.width+(b.labelOffset?.x??0),R=(-i.y*.5+.5)*P.height+(b.labelOffset?.y??0);w.style.transform=_e(C,R)}},dispose:()=>{o.clearRows(),o.container.parentNode===a&&a.removeChild(o.container)}}}function j(){const t=kt().getState(),e=Wt.getState().session.gameStarted,r=(t.camera.visitId!=null||t.camera.watchId!=null)&&t.camera.autoWatch;return t.playing||r||e}var M={chunks:[],pointsMeshes:[],starsInView:[]};function dr(){return M}function mr(t,e){const r=Yt();function a(){return r.getQueryData(["hyg-catalog"])?.stars??[]}const s=vt(t).layers.starfield,c=e,u={current:[]},m={current:null},i={current:null},f={current:0},d={current:-1};let v=Pe,P="idle",x=null;const T=n=>{v=typeof n=="function"?n(v):n,C(),B(),j()||t.invalidate()},g=n=>{P=typeof n=="function"?n(P):n,$(),B(),j()||t.invalidate()},S=n=>{x=typeof n=="function"?n(x):n,$()},b={current:[]},w={current:!1},C=()=>{const n=ct.getState(),l=n.phase,{c2TourOrder:h}=n,p=st.getState().appMode==="time-trial",{showStarNames:y}=q.getState(),{namedStarsInView:E}=v;b.current=le(E,l,h,p),w.current=ce(y,l,p)};C();const R=Ie(t,{getNamedStarsInView:()=>b.current,getEnabled:()=>w.current&&!Ot(Dt.getState().stack)},e),k={runIdRef:f,lastSuccessfulRunIdRef:d,starsInViewRef:u,setStarData:T,setStarfieldStatus:g,setErrorMessage:S},_=[],H=[];let A=null,F=null;const Ve=new Vt,He=new Ht,Be=new jt;function bt(n){return l=>{l.stopPropagation();const h=u.current,{index:p}=l;if(p==null||h.length===0)return;const y=n+p;if(y<0||y>=h.length)return;const E=h[y],ot=E.proper??(E.hip!=null?`HIP ${E.hip}`:`Star ${E.id}`);Nt.select(It("hyg",E.id),ot,"star")}}function wt(n){const l=new qt;return l.setAttribute("position",new I(n.positions,3)),l.setAttribute("size",new I(n.sizes,1)),l.setAttribute("color",new I(n.colors,3)),l.setAttribute("warm",new I(n.warm,1)),l.setAttribute("brightness",new I(n.brightness,1)),l.computeBoundingSphere(),l}function J(){for(const n of _)ft(n,null),s.remove(n);_.length=0;for(const n of H)n.dispose();H.length=0}function B(){if(J(),F==null||A==null){M.chunks=[],M.pointsMeshes=[],M.starsInView=u.current;return}const n=xt(v,P);let l=0;for(const h of n){const p=wt(h);H.push(p);const y=new Bt(p,F);y.frustumCulled=!0,s.add(y),ft(y,{onClick:bt(l)}),_.push(y),l+=h.starsInChunk.length}M.chunks=n,M.pointsMeshes=_,M.starsInView=u.current}try{A=gt({stops:se}),A.needsUpdate=!0}catch{A=null}A!=null&&(F=me(A));function U(){const n=i.current;if(!n)return;const l=r.getQueryState([lt]),h=a();if(Me(h.length,l?.status))return;g("loading"),f.current+=1;const p=f.current,{maxDistanceLevel:y}=q.getState();Ee(n,p,h,y,k)}const Ct=()=>{S(null),g("loading"),U()};let L=[],N=null;function tt(){N?.abort(),N=null;for(const n of L)c.removeChild(n);L=[]}function $(){if(tt(),P==="loading"){const n=document.createElement("div");n.className="starfield-status starfield-status--loading",n.style.position="absolute",n.style.left="50%",n.style.top="50%",n.style.transform="translate(-50%, -50%)",n.style.pointerEvents="none";const l=document.createElement("span");l.className="starfield-status__text",l.textContent="Loading stars…",n.appendChild(l),c.appendChild(n),L.push(n)}else if(P==="error"){const n=document.createElement("div");n.className="starfield-status starfield-status--error",n.style.position="absolute",n.style.left="50%",n.style.top="50%",n.style.transform="translate(-50%, -50%)",n.style.pointerEvents="auto";const l=document.createElement("div");l.className="starfield-status__message";const h=document.createElement("span");h.className="starfield-status__text",h.textContent=x??"Failed to load stars",l.appendChild(h);const p=document.createElement("button");p.type="button",p.className="starfield-status__retry",p.textContent="Retry",N=new AbortController,p.addEventListener("click",Ct,{signal:N.signal}),l.appendChild(p),n.appendChild(l),c.appendChild(n),L.push(n)}}const et=typeof window.Worker>"u",rt=window.Worker;if(rt){const n=new rt(ie,{type:"module"});m.current=n,i.current=Qt(n),Te(n,f,d,g,S)}else g("error"),S("Workers not supported");B(),j()||t.invalidate(),$();function nt(){const n=r.getQueryState([lt]);if(n?.status==="error"){if(et)return;const l=n.error;g("error"),S(l instanceof Error?l.message:String(l));return}n?.status==="success"&&(et||S(null)),U()}nt();const Pt=q.subscribe(n=>({maxDistanceLevel:n.maxDistanceLevel,showStarNames:n.showStarNames}),(n,l)=>{C(),(l==null||n.maxDistanceLevel!==l.maxDistanceLevel)&&U()},{equalityFn:at}),Mt=ct.subscribe(n=>({phase:n.phase,c2TourOrder:n.c2TourOrder,remainingC2StarIds:n.remainingC2StarIds}),()=>{C()},{equalityFn:at}),Tt=st.subscribe((n,l)=>{const h=n.appMode==="time-trial",p=l!=null&&l.appMode==="time-trial";l!=null&&h===p||C()}),At=r.getQueryCache().subscribe(n=>{Xt(n,"hyg-catalog")&&nt()});return{onFrame:()=>{R.onFrame()},dispose:()=>{Pt(),Mt(),Tt(),At(),tt(),R.dispose(),J(),F?.dispose(),F?.cosmosiveFallbackTexture?.dispose(),F=null,A?.dispose(),A=null;const n=i.current;if(n)try{n[Kt]()}catch{}i.current=null,m.current?.terminate(),m.current=null,M.chunks=[],M.pointsMeshes=[],M.starsInView=[]}}}function V(t){return new ht(t[0],t[1],t[2])}function De(){return{cool:V(z.star4),warm:V(z.star3),hot:V(z.star2),flare:V(z.star1)}}var ke=`
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
`,Le=`
uniform float uTime;
uniform float uTurbulence;
uniform float uGranulationScale;
uniform float uLimbStrength;
uniform float uEmissiveBoost;
uniform float uOpacity;
uniform vec3 uPaletteCool;
uniform vec3 uPaletteWarm;
uniform vec3 uPaletteHot;
uniform vec3 uPaletteFlare;
varying vec3 vWorldPos;
varying vec3 vLocalPos;
varying vec3 vNormalDir;

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}

float noise3(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash13(i + vec3(0.0, 0.0, 0.0));
  float n100 = hash13(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash13(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash13(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash13(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash13(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash13(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash13(i + vec3(1.0, 1.0, 1.0));
  float nx00 = mix(n000, n100, f.x);
  float nx10 = mix(n010, n110, f.x);
  float nx01 = mix(n001, n101, f.x);
  float nx11 = mix(n011, n111, f.x);
  float nxy0 = mix(nx00, nx10, f.y);
  float nxy1 = mix(nx01, nx11, f.y);
  return mix(nxy0, nxy1, f.z);
}

float fbm3(vec3 p) {
  float value = 0.0;
  float amp = 0.5;
  float freq = 1.0;
  for (int i = 0; i < 3; i += 1) {
    value += amp * noise3(p * freq);
    freq *= 2.1;
    amp *= 0.5;
  }
  return value;
}

void main() {
  vec3 p = normalize(vLocalPos) * uGranulationScale;
  p += vec3(uTime * 0.012, -uTime * 0.009, uTime * 0.007) * uTurbulence;
  float granulation = fbm3(p);
  float flare = smoothstep(0.62, 0.95, granulation);
  vec3 col = mix(uPaletteCool, uPaletteWarm, granulation);
  col = mix(col, uPaletteHot, smoothstep(0.5, 0.85, granulation));
  col = mix(col, uPaletteFlare, flare);
  vec3 viewDir = normalize(cameraPosition - vWorldPos);
  float ndv = max(dot(normalize(vNormalDir), viewDir), 0.0);
  float limb = pow(ndv, 0.6);
  col *= mix(0.55, uLimbStrength, limb);
  col *= uEmissiveBoost;
  gl_FragColor = vec4(col, uOpacity);
}
`;function pr(t){return t==null||Array.isArray(t)||!(t instanceof D)?!1:t.userData.cosmosiveSunPhotosphere===!0}function hr(t,e){const r=De(),a={cool:t?.cool??r.cool,warm:t?.warm??r.warm,hot:t?.hot??r.hot,flare:t?.flare??r.flare},o={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:a.cool.clone()},uPaletteWarm:{value:a.warm.clone()},uPaletteHot:{value:a.hot.clone()},uPaletteFlare:{value:a.flare.clone()}},s=new D({uniforms:o,vertexShader:ke,fragmentShader:Le,transparent:e?.transparent??!1,depthWrite:e?.depthWrite??!0,toneMapped:!1});return s.userData.cosmosiveSunPhotosphere=!0,s}var Ne=`
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
`,We=`
uniform float uTime;
uniform float uIntensity;
uniform vec3 uPaletteWarm;
uniform vec3 uPaletteHot;
uniform vec3 uPaletteFlare;
varying vec3 vWorldPos;
varying vec3 vLocalPos;
varying vec3 vNormalDir;

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}

float noise3(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash13(i + vec3(0.0, 0.0, 0.0));
  float n100 = hash13(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash13(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash13(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash13(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash13(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash13(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash13(i + vec3(1.0, 1.0, 1.0));
  float nx00 = mix(n000, n100, f.x);
  float nx10 = mix(n010, n110, f.x);
  float nx01 = mix(n001, n101, f.x);
  float nx11 = mix(n011, n111, f.x);
  float nxy0 = mix(nx00, nx10, f.y);
  float nxy1 = mix(nx01, nx11, f.y);
  return mix(nxy0, nxy1, f.z);
}

float fbm2(vec3 p) {
  return noise3(p) * 0.65 + noise3(p * 2.1) * 0.35;
}

void main() {
  vec3 fragToCam = normalize(cameraPosition - vWorldPos);
  float cosA = clamp(dot(normalize(vNormalDir), fragToCam), -1.0, 1.0);
  float sinA = sqrt(max(0.0, 1.0 - cosA * cosA));
  float b = sinA * 2.0;
  float halo = 1.0 - smoothstep(1.0, 2.0, b);
  halo = pow(halo, 1.4);
  vec3 dir = normalize(vLocalPos);
  float streak = fbm2(dir * 4.0 + vec3(uTime * 0.05));
  float spike = smoothstep(0.55, 0.92, streak) * halo;
  float intensity = (halo * 0.95 + spike * 0.5) * uIntensity;
  vec3 col = mix(uPaletteWarm, uPaletteHot, halo);
  col = mix(col, uPaletteFlare, spike);
  gl_FragColor = vec4(col * intensity, intensity);
}
`;function G(t){return new ht(t[0],t[1],t[2])}function Oe(){return{warm:G(z.star3),hot:G(z.star2),flare:G(z.star1)}}function vr(t){return t==null||Array.isArray(t)||!(t instanceof D)?!1:t.userData.cosmosiveSunCorona===!0}function gr(t){const e=Oe(),r={warm:t?.warm??e.warm,hot:t?.hot??e.hot,flare:t?.flare??e.flare},a={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:r.warm.clone()},uPaletteHot:{value:r.hot.clone()},uPaletteFlare:{value:r.flare.clone()}},o=new D({uniforms:a,vertexShader:Ne,fragmentShader:We,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return o.userData.cosmosiveSunCorona=!0,o}export{ar as A,z as C,ne as D,ir as E,X as F,re as M,nr as N,sr as O,rr as P,gt as S,lr as T,ur as _,dr as a,ie as b,ze as c,Pe as d,fr as f,xt as g,Me as h,pr as i,ft as j,or as k,_e as l,Te as m,vr as n,mr as o,Ee as p,hr as r,Fe as s,gr as t,Re as u,le as v,O as w,se as x,ce as y};
