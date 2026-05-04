import{n as me}from"./state-data-vendor-Bp8N-OcR.js";import{H as Pe,N as Ne,Ot as Le,Rt as We,V as Oe,mt as He,wt as Be}from"./sceneModel-BTMHFJxN.js";import{n as J}from"./scenePrefsStore-CDSiOaR6.js";import{a as Ve}from"./overlayStackStore-_95pxoCh.js";import{i as qe}from"./deepSkyScenePosition-BjL4EWuY.js";import{E as de,_n as Ue,d as $e,t as Xe}from"./combatSessionStore-BLUIsR6v.js";import{d as Ke}from"./timeTrialGuards-dj-UhkOt.js";import{B as je,C as Ge,Q as pe,R as Ye,bt as I,f as X,lt as W,o as N,s as Qe,ut as Ze,yt as Je}from"./three-vendor-Bbop5Fm9.js";import{t as ve}from"./use-hyg-catalog-Bsz2t5JD.js";import{n as et,r as tt}from"./comlink-BsukVemt.js";import{a as rt,q as he}from"./index-Dj3DuypV.js";import{n as we,t as nt}from"./queryCacheNotify-DH7dvD3S.js";var oe={current:null};function ot(e,t,r){return r&&t&&We(e,t.position.x,t.position.y,t.position.z),e}function at(e,t,r){if(r&&t){const a=e;a.x+=t.position.x,a.y+=t.position.y,a.z+=t.position.z}return e}function fr(e,t){return e.getWorldPosition(t),ot(t,oe.current,!0),t}var st=()=>({starfieldChunksTotal:0,starfieldChunksVisible:0,starfieldVerticesTotal:0,starfieldPipelineStatus:"idle",starfieldSyntheticKind:"empty",starfieldChunkAbbrevSample:"",shipsCandidates:0,shipsRendered:0,combatShotsTracerEnemySlots:0,combatShotsConquestCandidates:0,combatShotsConquestPassedFrustum:0,updatedAtMs:0}),Se=st();function mr(e){}typeof globalThis.window<"u";function it(e,t,r,a,o){e.updateMatrixWorld(!0),e.getWorldPosition(r),t.position.x=r.x,t.position.y=r.y,t.position.z=r.z,e.getWorldDirection(r),a.setFromMatrixColumn(e.matrixWorld,0).normalize(),o.setFromMatrixColumn(e.matrixWorld,1).normalize(),t.forward.x=r.x,t.forward.y=r.y,t.forward.z=r.z,t.right.x=a.x,t.right.y=a.y,t.right.z=a.z,t.up.x=o.x,t.up.y=o.y,t.up.z=o.z,t.fovYRadians=Ye.degToRad(e.fov),t.aspect=e.aspect}function lt(e,t,r,a,o){it(e,t,r,a,o);{const s=oe.current;s&&(t.position.x-=s.position.x,t.position.y-=s.position.y,t.position.z-=s.position.z)}}var te="__cosmosivePointer",re=new WeakMap;function ge(e,t){t==null?delete e.userData[te]:e.userData[te]=t}function dr(e){return e.userData[te]}function pr(e,t){t==null?re.delete(e):re.set(e,t)}function vr(e){return re.get(e)}function hr(e){const t=e.replace(/^#/,""),r=parseInt(t,16);return Number.isFinite(r)?[Math.floor(r/65536)%256,Math.floor(r/256)%256,r%256]:[0,0,0]}function ut(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function Sr(e){return Math.max(0,Math.min(255,Math.round(e)))}function V(e,t=1,r=1){const[a,o,s]=ut(e),u=Math.max(.15,Math.min(1,t));return[a*u,o*u,s*u,r]}var k={star1:V("#fff3a8",1),star2:V("#f5c238",1),star3:V("#e07b1a",1),star4:V("#a8380c",1)},ct="/assets/starfield.worker-BWykY_u-.js";function Me(e){return e==="countdown"||e==="active"||e==="complete"}function ft(e,t,r,a){if(!a||!Me(t)||r.length===0)return e;const o=new Set(r);return e.filter(s=>s.catalogId!=null&&o.has(s.catalogId))}function mt(e,t,r){return!r||!Me(t)?e:e||t==="countdown"}var dt=256,pt=320,vt=`
  attribute float size;
  attribute vec3 color;
  attribute float brightness;
  attribute float warm;
  varying vec3 vColor;
  varying float vBrightness;
  varying float vWarm;
  varying float vSeed;
  uniform float uScale;
  uniform float uPointSizeMax;
  uniform float uTime;
  uniform float uTwinkleAmp;
  uniform float uTwinkleFreq;
  uniform float uSizeMultiplier;
  uniform float uMinScreenPx;
  uniform float uMaxScreenPx;

  float hash13(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    vColor = color;
    vWarm = warm;
    vSeed = hash13(position * 0.01 + vec3(warm, brightness, size));
    float twinkle = 1.0 + uTwinkleAmp * sin(uTime * (uTwinkleFreq + vSeed * 0.85) + vSeed * 6.2831);
    vBrightness = brightness * twinkle;
    if (mvPosition.z >= 0.0) {
      gl_PointSize = 0.0;
    } else {
      float screenPx = size * (uScale / -mvPosition.z);
      if (screenPx < uMinScreenPx || (uMaxScreenPx > 0.0 && screenPx > uMaxScreenPx)) {
        gl_PointSize = 0.0;
      } else {
        float s = screenPx * uSizeMultiplier;
        gl_PointSize = clamp(s, 0.0, uPointSizeMax);
      }
    }
  }
`,ht=`
  varying vec3 vColor;
  varying float vBrightness;
  varying float vWarm;
  uniform vec3 uPaletteHot;
  uniform vec3 uPaletteFlare;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    if (dot(uv, uv) > 0.25) discard;
    float radial = clamp(length(uv) * 2.0, 0.0, 1.0);
    float core = pow(1.0 - radial, 2.8);
    float mid = pow(1.0 - radial, 1.2);
    float edge = smoothstep(1.0, 0.35, radial);
    float warmBoost = smoothstep(0.72, 0.0, radial) * (0.25 + 0.75 * vWarm);
    float flareBoost = smoothstep(0.35, 0.0, radial) * vWarm;
    vec3 col = mix(vColor, uPaletteHot, warmBoost);
    col = mix(col, uPaletteFlare, flareBoost * 0.65);
    float alpha = clamp(edge * (0.45 + 0.55 * mid), 0.0, 1.0);
    vec3 emissive = col * vBrightness * (0.75 + 0.6 * core);
    gl_FragColor = vec4(emissive, alpha);
    if (gl_FragColor.a < 0.01) discard;
  }
`,St=`
  varying vec3 vColor;
  varying float vBrightness;
  varying float vWarm;
  uniform vec3 uPaletteHot;
  uniform vec3 uPaletteFlare;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float rr = dot(uv, uv);
    if (rr > 0.25) discard;
    float radial = clamp(length(uv) * 2.0, 0.0, 1.0);
    float outer = smoothstep(1.0, 0.2, radial);
    float innerCut = smoothstep(0.55, 0.0, radial);
    float halo = max(0.0, outer - innerCut);
    halo *= (0.3 + 0.7 * vWarm);
    vec3 haloColor = mix(vColor, uPaletteHot, 0.45 + 0.45 * vWarm);
    haloColor = mix(haloColor, uPaletteFlare, 0.25 + 0.25 * vWarm);
    float alpha = halo * 0.7;
    gl_FragColor = vec4(haloColor * vBrightness, alpha);
    if (gl_FragColor.a < 0.01) discard;
  }
`;function Ce(e){const t=new W({uniforms:{uScale:{value:1},uPointSizeMax:{value:e?.pointSizeMax??dt},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uMinScreenPx:{value:e?.minScreenPx??0},uMaxScreenPx:{value:e?.maxScreenPx??0},uPaletteHot:{value:new X(1,.78,.56)},uPaletteFlare:{value:new X(1,.92,.75)}},vertexShader:vt,fragmentShader:e?.useHaloShader?St:ht,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),r=new Je;return t.onBeforeRender=(a,o,s)=>{const u=s;u.isPerspectiveCamera&&u.fov&&(a.getSize(r),t.uniforms.uScale.value=r.y/(2*Math.tan(u.fov*Math.PI/360)))},t}function gt(){return Ce({twinkleAmp:.03,twinkleFreq:.9})}function yt(){return Ce({useHaloShader:!0,sizeMultiplier:1.6,minScreenPx:2.1,maxScreenPx:5.2,pointSizeMax:pt,twinkleAmp:.02,twinkleFreq:.55})}var ae=4,gr=64*ae,xt=-25,bt=500,Pt=.01;function Te(e){return Math.max(0,Math.min(1,e))}function wt(e){return e?.size!=null&&Number.isFinite(e.size)?Te(e.size):.5}function Mt(e){return .08+.76*Te((e-.99)/.01)**3}function yr(e){return(e?Oe(e,Ue(e)):Pe)*Mt(wt(e))*ae}function ne(e,t){let r=t;for(;e[r]!==r;)r=e[r];let a=t;for(;a!==r;){const o=e[a];e[a]=r,a=o}return r}function Ct(e,t,r){const a=ne(e,t),o=ne(e,r);a!==o&&(e[a]=o)}function ye(e,t,r){return`${e},${t},${r}`}function Tt(e,t){const r=e.length,a=Array.from({length:r},(i,f)=>f),o=t,s=new Map;for(let i=0;i<r;i+=1){const f=e[i],m=ye(Math.floor(f.x/o),Math.floor(f.y/o),Math.floor(f.z/o));s.has(m)||s.set(m,[]),s.get(m).push(i)}const u=t*t;for(let i=0;i<r;i+=1){const f=e[i],m=Math.floor(f.x/o),S=Math.floor(f.y/o),w=Math.floor(f.z/o);for(let x=-1;x<=1;x+=1)for(let b=-1;b<=1;b+=1)for(let h=-1;h<=1;h+=1){const g=ye(m+x,S+b,w+h),y=s.get(g);if(y)for(const M of y){if(M<=i)continue;const C=e[M],_=C.x-f.x,F=C.y-f.y,T=C.z-f.z;_*_+F*F+T*T<u&&Ct(a,i,M)}}}const c=new Map;for(let i=0;i<r;i+=1){const f=ne(a,i);c.has(f)||c.set(f,[]),c.get(f).push(i)}const d=[];for(let i=0;i<r;i+=1)d.push(void 0);for(const i of c.values())i.length<=1||(i.sort((f,m)=>f-m),i.forEach((f,m)=>{m>0&&(d[f]={x:0,y:m*xt})}));return d}function _t(){const e=[];for(let t=0;t<bt;t+=1){const r=Ne(t*.7%360,t*.3%180-90);r!=null&&e.push(r)}return e}function At(){const e=_t(),t=e.length,r=He,a=new Float32Array(t*3);return e.forEach((o,s)=>{a[s*3]=o.x*r,a[s*3+1]=o.y*r,a[s*3+2]=o.z*r}),{abbr:"_bootstrap",positions:a,sizes:new Float32Array(t).fill(Pe*ae),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(Pt),brightness:new Float32Array(t).fill(1),starsInChunk:[]}}var Et={raMin:0,raMax:360,decMin:-90,decMax:90},Ft={chunks:[],namedStarsInView:[]};function Rt(e,t){return e===0&&t!=="success"}function _e(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[At()]:[]}function xr(e,t){const r=_e(e,t),a=r.slice(0,3).map(o=>o.abbr).join(",");return r.length===0?{syntheticKind:"empty",chunkAbbrevSample:a}:r.length===1&&r[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:a}:r.some(o=>o.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:a}:{syntheticKind:"real",chunkAbbrevSample:a}}function xe(e,t){return t.current===e.current}function zt(e,t,r,a,o){e.onerror=s=>{xe(t,r)||(a("error"),o(s.message??"Starfield worker failed"))},e.onmessageerror=()=>{xe(t,r)||(a("error"),o("Starfield worker message error"))}}function It(e,t,r,a,o,s,u){const{runId:c,...d}=e;c===t.current&&(r.current=c,a.current=d.starsInView,o({chunks:d.chunks,namedStarsInView:d.namedStarsInView}),s("ready"),u(null))}function kt(e,t,r,a,o){e.processStarfield({runId:t,catalog:r,maxDistanceLevel:a,bounds:Et,raInHours:!1}).then(s=>{It(s,o.runIdRef,o.lastSuccessfulRunIdRef,o.starsInViewRef,o.setStarData,o.setStarfieldStatus,o.setErrorMessage)}).catch(s=>{t===o.runIdRef.current&&(o.setStarfieldStatus("error"),o.setErrorMessage(s instanceof Error?s.message:"Starfield worker failed"))})}function Dt(e,t,r=48){const a=[];for(let u=0;u<t.length;u+=1){const c=t[u];if(!Le(c.position,e.position,e.forward,e.right,e.up,e.fovYRadians,e.aspect))continue;const d=c.position.x-e.position.x,i=c.position.y-e.position.y,f=c.position.z-e.position.z,m=d*d+i*i+f*f;a.push({entry:c,distSq:m,index:u})}a.sort((u,c)=>u.distSq!==c.distSq?u.distSq-c.distSq:u.index-c.index);const o=a.slice(0,r).map(u=>u.entry),s=Tt(o.map(u=>u.position),10);return o.map((u,c)=>({...u,labelOffset:s[c]}))}function Nt(e,t){return`translate(${e}px, ${t}px) translate(-50%, calc(-100% - 8px))`}function Lt(e){return e.map(t=>`${t.name}\0${t.position.x.toFixed(4)},${t.position.y.toFixed(4)},${t.position.z.toFixed(4)}\0${t.labelOffset?.x??""},${t.labelOffset?.y??""}`).join("|")}function Wt(e){const t=document.createElement("div");t.style.position="absolute",t.style.left="0",t.style.top="0",t.style.width="100%",t.style.height="100%",t.style.pointerEvents="none",e.appendChild(t);let r="",a=[],o=[];function s(){t.replaceChildren(),a=[],o=[],r=""}function u(c){t.replaceChildren(),a=[],o=c;for(const{position:d,name:i,labelOffset:f}of c){const m=document.createElement("div");m.className="star-label-wrapper",m.style.position="absolute",m.style.left="0",m.style.top="0",m.style.pointerEvents="none";const S=document.createElement("span");S.className="star-label",S.textContent=i,m.appendChild(S),t.appendChild(m),a.push({wrap:m,span:S})}}return{container:t,get lastSig(){return r},set lastSig(c){r=c},get rowEls(){return a},get currentRows(){return o},clearRows:s,rebuildRows:u}}function Ot(e,t,r){const a=r,o=Wt(a),s={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},u=new I,c=new I,d=new I,i=new I;return{onFrame:()=>{const m=t.getEnabled(),S=t.getNamedStarsInView(),{size:w}=e;if(!m){o.lastSig!==""&&o.clearRows();return}const x=we(e).cameraThree;if(!x.isPerspectiveCamera)return;lt(x,s,u,c,d);const b=Dt(s,S),h=Lt(b);h!==o.lastSig&&(o.lastSig=h,o.rebuildRows(b));for(let g=0;g<o.currentRows.length;g+=1){const y=o.currentRows[g],M=o.rowEls[g]?.wrap;if(!M)continue;if(i.set(y.position.x,y.position.y,y.position.z),at(i,oe.current,!0),i.project(x),!(Number.isFinite(i.x)&&Number.isFinite(i.y)&&Number.isFinite(i.z)&&Math.abs(i.x)<=1&&Math.abs(i.y)<=1&&i.z>=-1&&i.z<=1)){M.style.display="none";continue}M.style.display="";const C=(i.x*.5+.5)*w.width+(y.labelOffset?.x??0),_=(-i.y*.5+.5)*w.height+(y.labelOffset?.y??0);M.style.transform=Nt(C,_)}},dispose:()=>{o.clearRows(),o.container.parentNode===a&&a.removeChild(o.container)}}}var Ht=3;function Ae(e,t,r){return Math.max(t,Math.min(r,e))}function Bt(e,t,r,a=1,o=256){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(r)||!Number.isFinite(a)||!Number.isFinite(o)||t<=0||e<=0||a<=0||o<=0)return 0;const s=e*(r/t);return s<=0?0:Ae(s*a,0,o)}function Vt(e,t,r){return Ae(Bt(e,t,r)*.5+Ht,28,256)}function q(){const e=qe().getState(),t=Xe.getState().session.gameStarted,r=(e.camera.visitId!=null||e.camera.watchId!=null)&&e.camera.autoWatch;return e.playing||r||t}var E={chunks:[],pointsMeshes:[],starsInView:[]},U=new I,be=new I,L=new I;function qt(e,t,r,a,o,s,u,c){const d=r.getBoundingClientRect(),i=e-d.left,f=t-d.top,m=Number.isFinite(a.fov)&&a.fov>0?d.height/(2*Math.tan(a.fov*Math.PI/360)):0,S=Math.min(c,s.length/3,u.length);let w=-1,x=1/0;for(let b=0;b<S;b+=1){const h=b*3;U.set(s[h],s[h+1],s[h+2]),U.applyMatrix4(o.matrixWorld),be.copy(U).applyMatrix4(a.matrixWorldInverse);const g=-be.z,y=Vt(u[b],g,m);if(y<=0||(L.copy(U).project(a),L.z<-1||L.z>1))continue;const M=(L.x*.5+.5)*d.width,C=(-L.y*.5+.5)*d.height,_=M-i,F=C-f,T=_*_+F*F;T>y*y||T<x&&(x=T,w=b)}return w}function br(){return E}function Pr(e,t){const r=rt();function a(){return r.getQueryData(["hyg-catalog"])?.stars??[]}const o=we(e),s=o.layers.starfield,u=t,c={current:[]},d={current:null},i={current:null},f={current:0},m={current:-1};let S=Ft,w="idle",x=null;const b=n=>{S=typeof n=="function"?n(S):n,C(),Y(),q()||e.invalidate()},h=n=>{w=typeof n=="function"?n(w):n,Z(),Y(),q()||e.invalidate()},g=n=>{x=typeof n=="function"?n(x):n,Z()},y={current:[]},M={current:!1},C=()=>{const n=he.getState(),l=n.phase,{c2TourOrder:v}=n,p=de.getState().appMode==="time-trial",{showStarNames:P}=J.getState(),{namedStarsInView:A}=S;y.current=ft(A,l,v,p),M.current=mt(P,l,p)};C();const _=Ot(e,{getNamedStarsInView:()=>y.current,getEnabled:()=>M.current&&!Ke(Ve.getState().stack)},t),F={runIdRef:f,lastSuccessfulRunIdRef:m,starsInViewRef:c,setStarData:b,setStarfieldStatus:h,setErrorMessage:g},T=[],K=[],j=[];let R=null,z=null,G=0;const Yt=new je,Qt=new Ge,Zt=new Ze;function Ee(n,l,v){return p=>{p.stopPropagation();const P=c.current;if(P.length===0)return;const A=qt(p.nativeEvent.clientX,p.nativeEvent.clientY,o.gl.domElement,o.cameraThree,l,v.positions,v.sizes,v.starsInChunk.length);if(A<0)return;const B=n+A;if(B<0||B>=P.length)return;const D=P[B],fe=D.proper??(D.hip!=null?`HIP ${D.hip}`:`Star ${D.id}`);$e.select(Be("hyg",D.id),fe,"star")}}function Fe(n){const l=new Qe;return l.setAttribute("position",new N(n.positions,3)),l.setAttribute("size",new N(n.sizes,1)),l.setAttribute("color",new N(n.colors,3)),l.setAttribute("warm",new N(n.warm,1)),l.setAttribute("brightness",new N(n.brightness,1)),l.computeBoundingSphere(),l}function se(){for(const n of T)ge(n,null),s.remove(n);T.length=0;for(const n of K)s.remove(n);K.length=0;for(const n of j)n.dispose();j.length=0}function Y(){if(se(),R==null||z==null){E.chunks=[],E.pointsMeshes=[],E.starsInView=c.current;return}const n=_e(S,w);let l=0;for(const v of n){const p=Fe(v);j.push(p);const P=new pe(p,R);P.frustumCulled=!0,s.add(P),ge(P,{onClick:Ee(l,P,v)}),T.push(P);const A=new pe(p,z);A.frustumCulled=!0,A.renderOrder=1,s.add(A),K.push(A),l+=v.starsInChunk.length}E.chunks=n,E.pointsMeshes=T,E.starsInView=c.current}R=gt(),z=yt();function Q(){const n=i.current;if(!n)return;const l=r.getQueryState([ve]),v=a();if(Rt(v.length,l?.status))return;h("loading"),f.current+=1;const p=f.current,{maxDistanceLevel:P}=J.getState();kt(n,p,v,P,F)}const Re=()=>{g(null),h("loading"),Q()};let O=[],H=null;function ie(){H?.abort(),H=null;for(const n of O)u.removeChild(n);O=[]}function Z(){if(ie(),w==="loading"){const n=document.createElement("div");n.className="starfield-status starfield-status--loading",n.style.position="absolute",n.style.left="50%",n.style.top="50%",n.style.transform="translate(-50%, -50%)",n.style.pointerEvents="none";const l=document.createElement("span");l.className="starfield-status__text",l.textContent="Loading stars…",n.appendChild(l),u.appendChild(n),O.push(n)}else if(w==="error"){const n=document.createElement("div");n.className="starfield-status starfield-status--error",n.style.position="absolute",n.style.left="50%",n.style.top="50%",n.style.transform="translate(-50%, -50%)",n.style.pointerEvents="auto";const l=document.createElement("div");l.className="starfield-status__message";const v=document.createElement("span");v.className="starfield-status__text",v.textContent=x??"Failed to load stars",l.appendChild(v);const p=document.createElement("button");p.type="button",p.className="starfield-status__retry",p.textContent="Retry",H=new AbortController,p.addEventListener("click",Re,{signal:H.signal}),l.appendChild(p),n.appendChild(l),u.appendChild(n),O.push(n)}}const le=typeof window.Worker>"u",ue=window.Worker;if(ue){const n=new ue(ct,{type:"module"});d.current=n,i.current=tt(n),zt(n,f,m,h,g)}else h("error"),g("Workers not supported");Y(),q()||e.invalidate(),Z();function ce(){const n=r.getQueryState([ve]);if(n?.status==="error"){if(le)return;const l=n.error;h("error"),g(l instanceof Error?l.message:String(l));return}n?.status==="success"&&(le||g(null)),Q()}ce();const ze=J.subscribe(n=>({maxDistanceLevel:n.maxDistanceLevel,showStarNames:n.showStarNames}),(n,l)=>{C(),(l==null||n.maxDistanceLevel!==l.maxDistanceLevel)&&Q()},{equalityFn:me}),Ie=he.subscribe(n=>({phase:n.phase,c2TourOrder:n.c2TourOrder,remainingC2StarIds:n.remainingC2StarIds}),()=>{C()},{equalityFn:me}),ke=de.subscribe((n,l)=>{const v=n.appMode==="time-trial",p=l!=null&&l.appMode==="time-trial";l!=null&&v===p||C()}),De=r.getQueryCache().subscribe(n=>{nt(n,"hyg-catalog")&&ce()});return{onFrame:()=>{if(_.onFrame(),q()){const n=Math.min(.06,o.timer.getDelta());G+=n,R?.uniforms.uTime&&(R.uniforms.uTime.value=G),z?.uniforms.uTime&&(z.uniforms.uTime.value=G)}},dispose:()=>{ze(),Ie(),ke(),De(),ie(),_.dispose(),se(),R?.dispose(),R=null,z?.dispose(),z=null;const n=i.current;if(n)try{n[et]()}catch{}i.current=null,d.current?.terminate(),d.current=null,E.chunks=[],E.pointsMeshes=[],E.starsInView=[]}}}function $(e){return new X(e[0],e[1],e[2])}function Ut(){return{cool:$(k.star4),warm:$(k.star3),hot:$(k.star2),flare:$(k.star1)}}var $t=`
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
`,Xt=`
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
`;function wr(e){return e==null||Array.isArray(e)||!(e instanceof W)?!1:e.userData.cosmosiveSunPhotosphere===!0}function Mr(e,t){const r=Ut(),a={cool:e?.cool??r.cool,warm:e?.warm??r.warm,hot:e?.hot??r.hot,flare:e?.flare??r.flare},o={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:a.cool.clone()},uPaletteWarm:{value:a.warm.clone()},uPaletteHot:{value:a.hot.clone()},uPaletteFlare:{value:a.flare.clone()}},s=new W({uniforms:o,vertexShader:$t,fragmentShader:Xt,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return s.userData.cosmosiveSunPhotosphere=!0,s}var Kt=`
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
`,jt=`
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
`;function ee(e){return new X(e[0],e[1],e[2])}function Gt(){return{warm:ee(k.star3),hot:ee(k.star2),flare:ee(k.star1)}}function Cr(e){return e==null||Array.isArray(e)||!(e instanceof W)?!1:e.userData.cosmosiveSunCorona===!0}function Tr(e){const t=Gt(),r={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},a={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:r.warm.clone()},uPaletteHot:{value:r.hot.clone()},uPaletteFlare:{value:r.flare.clone()}},o=new W({uniforms:a,vertexShader:Kt,fragmentShader:jt,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return o.userData.cosmosiveSunCorona=!0,o}export{ge as A,V as C,vr as D,ut as E,mr as M,fr as N,dr as O,oe as P,k as S,hr as T,_e as _,br as a,mt as b,Wt as c,Dt as d,Ft as f,Rt as g,zt as h,wr as i,lt as j,pr as k,Lt as l,kt as m,Cr as n,Pr as o,xr as p,Mr as r,Vt as s,Tr as t,Nt as u,yr as v,Sr as w,ct as x,ft as y};
