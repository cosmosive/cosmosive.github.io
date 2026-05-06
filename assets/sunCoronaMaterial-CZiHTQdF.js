import{n as Ye}from"./state-data-vendor-XiC-QsZD.js";import{$ as He,V as vt,bt as Qe,dt as St,o as oe,p as ye,s as yt,ut as ue,w as gt,xt as E,z as xt}from"./three-vendor-jA1PqwyJ.js";import{$ as Be,$a as bt,$t as Ct,Cn as Pt,Ja as wt,La as _e,Sn as Je,So as Mt,Vt as Ze,Wi as Ft,Ya as et,_o as Tt,a as _t,an as Et,bt as kt,co as Rt,eo as zt,fo as At,gt as It,ht as Nt,ia as tt,lt as Dt,na as ge,nn as nt,on as Lt,pa as ve,qa as Ot,tn as Wt,vo as Ht,wn as Bt,xo as Vt}from"./index-gigodQ9W.js";import{n as Q,t as Ut}from"./queryCacheNotify-BsGBodwC.js";var be={current:null};function $t(e,t,n){return n&&t&&Mt(e,t.position.x,t.position.y,t.position.z),e}function rt(e,t,n){if(n&&t){const o=e;o.x+=t.position.x,o.y+=t.position.y,o.z+=t.position.z}return e}function jt(e,t){return e.getWorldPosition(t),$t(t,be.current,!0),t}var qt=()=>({starfieldChunksTotal:0,starfieldChunksVisible:0,starfieldVerticesTotal:0,starfieldPipelineStatus:"idle",starfieldSyntheticKind:"empty",starfieldChunkAbbrevSample:"",shipsCandidates:0,shipsRendered:0,combatShotsTracerEnemySlots:0,combatShotsConquestCandidates:0,combatShotsConquestPassedFrustum:0,updatedAtMs:0}),Ve=qt();function fr(e){}typeof globalThis.window<"u";function Kt(e,t,n,o,r){e.updateMatrixWorld(!0),e.getWorldPosition(n),t.position.x=n.x,t.position.y=n.y,t.position.z=n.z,e.getWorldDirection(n),o.setFromMatrixColumn(e.matrixWorld,0).normalize(),r.setFromMatrixColumn(e.matrixWorld,1).normalize(),t.forward.x=n.x,t.forward.y=n.y,t.forward.z=n.z,t.right.x=o.x,t.right.y=o.y,t.right.z=o.z,t.up.x=r.x,t.up.y=r.y,t.up.z=r.z,t.fovYRadians=xt.degToRad(e.fov),t.aspect=e.aspect}function ot(e,t,n,o,r){Kt(e,t,n,o,r);{const a=be.current;a&&(t.position.x-=a.position.x,t.position.y-=a.position.y,t.position.z-=a.position.z)}}var Ee="__cosmosivePointer",ke=new WeakMap;function dr(e,t){t==null?delete e.userData[Ee]:e.userData[Ee]=t}function se(e){return e.userData[Ee]}function pr(e,t){t==null?ke.delete(e):ke.set(e,t)}function ie(e){return ke.get(e)}var Ue=new Qe;function Gt(e,t,n,o){const r=n.getBoundingClientRect();o.x=(e-r.left)/r.width*2-1,o.y=-((t-r.top)/r.height)*2+1}function Xt(e){const t=Q(e);t.scene.updateMatrixWorld(!0);const n=t.gl.domElement,o=t.cameraThree,r=n.clientWidth/Math.max(1,n.clientHeight);Number.isFinite(r)&&Math.abs(o.aspect-r)>1e-6&&(o.aspect=r,o.updateProjectionMatrix()),o.updateMatrixWorld(!0)}function Yt(e){return Q(e).scene.children.filter(t=>t.visible!==!1)}function le(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent}return!1}function ce(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent??null}return!1}var $e=new E,je=new E,Qt=new E,Se=[];function Jt(e){return Se.push(e),()=>{const t=Se.indexOf(e);t>=0&&Se.splice(t,1)}}function xe(e,t){for(const n of Se)if(n(e,t))return!0;return!1}function Zt(e,t,n,o,r){let a=!1;const i={nativeEvent:n,object:e,point:o,index:r,stopPropagation:()=>{a=!0}};ce(e,c=>{const d=ie(c)?.[t];return d?(d(i),a):!1})}function mr(e,t,n,o,r,a){if(e.engineKind==="babylon"){Zt(t,n,o,r,a);return}let i=!1;const c={nativeEvent:o,object:t,point:r,index:a,stopPropagation:()=>{i=!0}};le(t,d=>{const l=se(d)?.[n];return l?(l(c),i):!1})}function hr(e,t,n,o,r){if(t!==n){if(e.engineKind==="babylon"){t&&ce(t,a=>{const i=ie(a)?.onPointerOut;return i?(i({nativeEvent:o,object:a,point:$e,stopPropagation:()=>{}}),!0):!1}),n&&ce(n,a=>{const i=ie(a)?.onPointerOver;return i?(i({nativeEvent:o,object:a,point:je.copy(r),stopPropagation:()=>{}}),!0):!1});return}t&&le(t,a=>{const i=se(a)?.onPointerOut;return i?(i({nativeEvent:o,object:a,point:$e,stopPropagation:()=>{}}),!0):!1}),n&&le(n,a=>{const i=se(a)?.onPointerOver;return i?(i({nativeEvent:o,object:a,point:je.copy(r),stopPropagation:()=>{}}),!0):!1})}}function vr(e,t){for(const n of e){let o=!1;if(le(n.object,r=>se(r)?.onClick?(o=!0,!0):!1),o)return{kind:"interactive",object:n.object,point:n.point.clone(),index:n.index!==void 0?n.index:void 0,ndc:{x:t.x,y:t.y}}}return null}function Sr(e,t,n,o){const r=e.pickAt(t,n);if(!r)return null;const a=r.node;let i=!1;return ce(a,c=>ie(c)?.onClick?(i=!0,!0):!1),i?{kind:"interactive",object:a,point:new E(r.point[0],r.point[1],r.point[2]),ndc:{x:o.x,y:o.y}}:null}function en(e,t){Xt(e),Ue.set(t.x,t.y);const n=Q(e);return n.raycaster.setFromCamera(Ue,n.cameraThree),n.raycaster.intersectObjects(Yt(e),!0)}function tn(e,t,n,o){if(n.button!==0)return;const r=e.pickAt(n.clientX,n.clientY);if(!r){if(xe(n,t))return;o();return}const a=r.node,i=new E(r.point[0],r.point[1],r.point[2]);let c=!1,d=!1;const l={nativeEvent:n,object:a,point:i,index:void 0,stopPropagation:()=>{c=!0}};ce(a,u=>{const f=ie(u)?.onClick;return f?(d=!0,f(l),c):!1}),!d&&(xe(n,t)||o())}function yr(e,t,n,o){if(e.engineKind==="babylon"){tn(e,t,n,o);return}if(n.button!==0)return;const r={x:0,y:0};Gt(n.clientX,n.clientY,t,r);const a=en(e,r);if(a.length===0){if(xe(n,t))return;o();return}for(const i of a){let c=!1,d=!1;const l={nativeEvent:n,object:i.object,point:Qt.copy(i.point),index:(i.index!==void 0,i.index),stopPropagation:()=>{c=!0}};if(le(i.object,u=>{const f=se(u)?.onClick;return f?(d=!0,f(l),c):!1}),d)return}xe(n,t)||o()}function gr(e){const t=e.replace(/^#/,""),n=parseInt(t,16);return Number.isFinite(n)?[Math.floor(n/65536)%256,Math.floor(n/256)%256,n%256]:[0,0,0]}function nn(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function xr(e){return Math.max(0,Math.min(255,Math.round(e)))}function me(e,t=1,n=1){const[o,r,a]=nn(e),i=Math.max(.15,Math.min(1,t));return[o*i,r*i,a*i,n]}var Y={star1:me("#fff3a8",1),star2:me("#f5c238",1),star3:me("#e07b1a",1),star4:me("#a8380c",1)};function rn(){const e=ve().getState(),t=Ct.getState().session.gameStarted,n=(e.camera.visitId!=null||e.camera.watchId!=null)&&e.camera.autoWatch;return e.playing||n||t}function on(){const e=Ze.getState();return{ttPhase:e.phase,c2TourOrder:e.c2TourOrder,remainingC2StarIds:e.remainingC2StarIds,timeTrialStarNamesUi:nt.getState().appMode==="time-trial",showStarNames:_e.getState().showStarNames}}function an(e){const t=Ze.subscribe(o=>({phase:o.phase,c2TourOrder:o.c2TourOrder,remainingC2StarIds:o.remainingC2StarIds}),()=>e(),{equalityFn:Ye}),n=nt.subscribe((o,r)=>{const a=o.appMode==="time-trial",i=r!=null&&r.appMode==="time-trial";r!=null&&a===i||e()});return()=>{t(),n()}}var sn="/assets/starfield.worker-DeoSgUe7.js";function at(e){return e==="countdown"||e==="active"||e==="complete"}function ln(e,t,n,o){if(!o||!at(t)||n.length===0)return e;const r=new Set(n);return e.filter(a=>a.catalogId!=null&&r.has(a.catalogId))}function cn(e,t,n){return!n||!at(t)?e:e||t==="countdown"}var un=256,fn=320,dn=`
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
`,pn=`
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
`,mn=`
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
`;function st(e){const t=new ue({uniforms:{uScale:{value:1},uPointSizeMax:{value:e?.pointSizeMax??un},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uMinScreenPx:{value:e?.minScreenPx??0},uMaxScreenPx:{value:e?.maxScreenPx??0},uPaletteHot:{value:new ye(1,.78,.56)},uPaletteFlare:{value:new ye(1,.92,.75)}},vertexShader:dn,fragmentShader:e?.useHaloShader?mn:pn,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),n=new Qe;return t.onBeforeRender=(o,r,a)=>{const i=a;i.isPerspectiveCamera&&i.fov&&(o.getSize(n),t.uniforms.uScale.value=n.y/(2*Math.tan(i.fov*Math.PI/360)))},t}function hn(){return st({twinkleAmp:.03,twinkleFreq:.9})}function vn(){return st({useHaloShader:!0,sizeMultiplier:1.6,minScreenPx:2.1,maxScreenPx:5.2,pointSizeMax:fn,twinkleAmp:.02,twinkleFreq:.55})}var ze=4,br=64*ze,Sn=-25,yn=500,gn=.01;function it(e){return Math.max(0,Math.min(1,e))}function xn(e){return e?.size!=null&&Number.isFinite(e.size)?it(e.size):.5}function bn(e){return .08+.76*it((e-.99)/.01)**3}function Cr(e){return(e?wt(e,Je(e)):et)*bn(xn(e))*ze}function Re(e,t){let n=t;for(;e[n]!==n;)n=e[n];let o=t;for(;o!==n;){const r=e[o];e[o]=n,o=r}return n}function Cn(e,t,n){const o=Re(e,t),r=Re(e,n);o!==r&&(e[o]=r)}function qe(e,t,n){return`${e},${t},${n}`}function Pn(e,t){const n=e.length,o=Array.from({length:n},(l,u)=>u),r=t,a=new Map;for(let l=0;l<n;l+=1){const u=e[l],f=qe(Math.floor(u.x/r),Math.floor(u.y/r),Math.floor(u.z/r));a.has(f)||a.set(f,[]),a.get(f).push(l)}const i=t*t;for(let l=0;l<n;l+=1){const u=e[l],f=Math.floor(u.x/r),m=Math.floor(u.y/r),v=Math.floor(u.z/r);for(let S=-1;S<=1;S+=1)for(let M=-1;M<=1;M+=1)for(let F=-1;F<=1;F+=1){const C=qe(f+S,m+M,v+F),k=a.get(C);if(k)for(const T of k){if(T<=l)continue;const g=e[T],R=g.x-u.x,b=g.y-u.y,N=g.z-u.z;R*R+b*b+N*N<i&&Cn(o,l,T)}}}const c=new Map;for(let l=0;l<n;l+=1){const u=Re(o,l);c.has(u)||c.set(u,[]),c.get(u).push(l)}const d=[];for(let l=0;l<n;l+=1)d.push(void 0);for(const l of c.values())l.length<=1||(l.sort((u,f)=>u-f),l.forEach((u,f)=>{f>0&&(d[u]={x:0,y:f*Sn})}));return d}function wn(){const e=[];for(let t=0;t<yn;t+=1){const n=Ot(t*.7%360,t*.3%180-90);n!=null&&e.push(n)}return e}function Mn(){const e=wn(),t=e.length,n=At,o=new Float32Array(t*3);return e.forEach((r,a)=>{o[a*3]=r.x*n,o[a*3+1]=r.y*n,o[a*3+2]=r.z*n}),{abbr:"_bootstrap",positions:o,sizes:new Float32Array(t).fill(et*ze),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(gn),brightness:new Float32Array(t).fill(1),starsInChunk:[]}}var Fn={raMin:0,raMax:360,decMin:-90,decMax:90},Tn={chunks:[],namedStarsInView:[]};function _n(e,t){return e===0&&t!=="success"}function lt(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[Mn()]:[]}function Pr(e,t){const n=lt(e,t),o=n.slice(0,3).map(r=>r.abbr).join(",");return n.length===0?{syntheticKind:"empty",chunkAbbrevSample:o}:n.length===1&&n[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:o}:n.some(r=>r.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:o}:{syntheticKind:"real",chunkAbbrevSample:o}}function Ke(e,t){return t.current===e.current}function En(e,t,n,o,r){e.onerror=a=>{Ke(t,n)||(o("error"),r(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{Ke(t,n)||(o("error"),r("Starfield worker message error"))}}function kn(e,t,n,o,r,a,i){const{runId:c,...d}=e;c===t.current&&(n.current=c,o.current=d.starsInView,r({chunks:d.chunks,namedStarsInView:d.namedStarsInView}),a("ready"),i(null))}function Rn(e,t,n,o,r){e.processStarfield({runId:t,catalog:n,maxDistanceLevel:o,bounds:Fn,raInHours:!1}).then(a=>{kn(a,r.runIdRef,r.lastSuccessfulRunIdRef,r.starsInViewRef,r.setStarData,r.setStarfieldStatus,r.setErrorMessage)}).catch(a=>{t===r.runIdRef.current&&(r.setStarfieldStatus("error"),r.setErrorMessage(a instanceof Error?a.message:"Starfield worker failed"))})}function zn(e,t,n=48){const o=[];for(let i=0;i<t.length;i+=1){const c=t[i];if(!Vt(c.position,e.position,e.forward,e.right,e.up,e.fovYRadians,e.aspect))continue;const d=c.position.x-e.position.x,l=c.position.y-e.position.y,u=c.position.z-e.position.z,f=d*d+l*l+u*u;o.push({entry:c,distSq:f,index:i})}o.sort((i,c)=>i.distSq!==c.distSq?i.distSq-c.distSq:i.index-c.index);const r=o.slice(0,n).map(i=>i.entry),a=Pn(r.map(i=>i.position),10);return r.map((i,c)=>({...i,labelOffset:a[c]}))}function An(e,t){return`translate(${e}px, ${t}px) translate(-50%, calc(-100% - 8px))`}function In(e){return e.map(t=>`${t.name}\0${t.position.x.toFixed(4)},${t.position.y.toFixed(4)},${t.position.z.toFixed(4)}\0${t.labelOffset?.x??""},${t.labelOffset?.y??""}`).join("|")}function Nn(e){const t=document.createElement("div");t.style.position="absolute",t.style.left="0",t.style.top="0",t.style.width="100%",t.style.height="100%",t.style.pointerEvents="none",e.appendChild(t);let n="",o=[],r=[];function a(){t.replaceChildren(),o=[],r=[],n=""}function i(c){t.replaceChildren(),o=[],r=c;for(const{position:d,name:l,labelOffset:u}of c){const f=document.createElement("div");f.className="star-label-wrapper",f.style.position="absolute",f.style.left="0",f.style.top="0",f.style.pointerEvents="none";const m=document.createElement("span");m.className="star-label",m.textContent=l,f.appendChild(m),t.appendChild(f),o.push({wrap:f,span:m})}}return{container:t,get lastSig(){return n},set lastSig(c){n=c},get rowEls(){return o},get currentRows(){return r},clearRows:a,rebuildRows:i}}function Dn(e,t,n){const o=n,r=Nn(o),a={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},i=new E,c=new E,d=new E,l=new E;return{onFrame:()=>{const f=t.getEnabled(),m=t.getNamedStarsInView(),{size:v}=e;if(!f){r.lastSig!==""&&r.clearRows();return}const S=Q(e).cameraThree;if(!S.isPerspectiveCamera)return;ot(S,a,i,c,d);const M=zn(a,m),F=In(M);F!==r.lastSig&&(r.lastSig=F,r.rebuildRows(M));for(let C=0;C<r.currentRows.length;C+=1){const k=r.currentRows[C],T=r.rowEls[C]?.wrap;if(!T)continue;if(l.set(k.position.x,k.position.y,k.position.z),rt(l,be.current,!0),l.project(S),!(Number.isFinite(l.x)&&Number.isFinite(l.y)&&Number.isFinite(l.z)&&Math.abs(l.x)<=1&&Math.abs(l.y)<=1&&l.z>=-1&&l.z<=1)){T.style.display="none";continue}T.style.display="";const g=(l.x*.5+.5)*v.width+(k.labelOffset?.x??0),R=(-l.y*.5+.5)*v.height+(k.labelOffset?.y??0);T.style.transform=An(g,R)}},dispose:()=>{r.clearRows(),r.container.parentNode===o&&o.removeChild(r.container)}}}var ct=null;function wr(e){ct=e}function Ln(){return ct?.current??{}}var On=1495978707e-1,Wn=1e3;function Hn(e,t){const n=e.width,o=e.height,r=t.clientWidth,a=t.clientHeight;let i;Number.isFinite(n)&&n>0?i=n:Number.isFinite(r)?i=r:i=0;let c;return Number.isFinite(o)&&o>0?c=o:Number.isFinite(a)?c=a:c=0,!Number.isFinite(i)||!Number.isFinite(c)||i<=0||c<=0?null:{w:i,h:c}}function Bn(e,t,n,o,r=28){return!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)?!1:e>=r&&t>=r&&e<=n-r&&t<=o-r}function Vn(e){if(!Number.isFinite(e)||e<0)return"";const t=e/Rt;if(t<.001){const n=t*On;return n<1?`${n.toFixed(3)} km`:n<1e3?`${n.toFixed(0)} km`:`${(n/1e3).toFixed(1)} Mm`}return t<1?`${t.toFixed(3)} AU`:t<100?`${t.toFixed(2)} AU`:`${t.toFixed(0)} AU`}function Un(e){return!Number.isFinite(e)||e<0?"":e<.01?`${e.toFixed(4)} pc`:e<1?`${e.toFixed(3)} pc`:e<100?`${e.toFixed(2)} pc`:`${e.toFixed(0)} pc`}function $n(e,t){const n=document.createElement("div");n.className="selected-body-label-wrapper",n.style.position="absolute",n.style.left="0",n.style.top="0",n.style.pointerEvents="none",n.style.display="none";const o=document.createElement("span");o.className="selected-body-label",n.appendChild(o),t.appendChild(n);const r=document.createElement("div");r.className="selected-body-callout-wrapper",r.style.display="none";const a=document.createElement("div");a.className="selected-body-callout__ring";const i=document.createElement("div");i.className="selected-body-callout__leader-v";const c=document.createElement("div");c.className="selected-body-callout__leader-h";const d=document.createElement("div");d.className="selected-body-callout__name";const l=document.createElement("div");l.className="selected-body-callout__distance",r.append(a,i,c,d,l),t.appendChild(r);let u=!1,f=!1;const m=h=>{h!==u&&(u=h,n.style.display=h?"":"none")},v=h=>{h!==f&&(f=h,r.style.display=h?"":"none")},S=ve().getState().selection,M={id:S.selectedId,name:S.selectedName},F=ve().subscribeSelector(h=>h.selection.selectedId,h=>{M.id=h}),C=ve().subscribeSelector(h=>h.selection.selectedName,h=>{M.name=h});let k=ge();const T=tt(()=>{k=ge(),e.invalidate()}),g=new E,R=new E,b=new E;let N="",W=0;function q(h,P){if(h==="hor"){const _=Ln()[P];return _?{pos:{x:_[0],y:_[1],z:_[2]},isSolar:!0}:null}if(h==="hyg"){const _=Ft();if(_.length===0)return null;const A=Lt(_).get(P);return A?{pos:Pt(A),isSolar:!1}:null}const D=[...kt(),...Dt()];if(D.length===0)return null;const w=Et(D).get(P);return w?{pos:Bt(w),isSolar:!1}:null}return{onFrame:()=>{if(k){m(!1),v(!1);return}const{id:h,name:P}=M;if(!h||!P){m(!1),v(!1);return}let D;try{D=Tt(h)}catch{m(!1),v(!1);return}const w=q(D.source,D.rawId);if(!w){m(!1),v(!1);return}const _=Q(e).cameraThree;if(!_.isPerspectiveCamera){m(!1),v(!1);return}if(g.set(w.pos.x,w.pos.y,w.pos.z),rt(g,be.current,!0),b.copy(g).project(_),!(Number.isFinite(b.x)&&Number.isFinite(b.y)&&Number.isFinite(b.z)&&Math.abs(b.x)<=1&&Math.abs(b.y)<=1&&b.z>=-1&&b.z<=1)){m(!1),v(!1);return}const A=Q(e).gl.domElement,I=Hn(e.size,A);if(I==null){m(!1),v(!1);return}const{w:H,h:re}=I,$=(b.x*.5+.5)*H,J=(-b.y*.5+.5)*re;if(w.isSolar){o.textContent!==P&&(o.textContent=P),n.style.transform=`translate(${$}px, ${J}px) translate(-50%, -50%)`,m(!0),v(!1);return}if(!Bn($,J,H,re)){m(!1),v(!1);return}d.textContent!==P&&(d.textContent=P),r.style.transform=`translate(${$}px, ${J}px)`;const Z=performance.now();if(Z-W>=Wn||N===""){jt(_,R);const B={x:R.x,y:R.y,z:R.z},K=Math.hypot(w.pos.x-B.x,w.pos.y-B.y,w.pos.z-B.z),V=K<1e5?Vn(K):Un(bt(B,w.pos));V!==N&&(N=V,l.textContent=V),W=Z}m(!1),v(!0)},dispose:()=>{F(),C(),T(),n.parentNode===t&&t.removeChild(n),r.parentNode===t&&t.removeChild(r)}}}var jn=3;function qn(e,t,n){return Math.max(t,Math.min(n,e))}function ut(e,t,n,o=1,r=256){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)||!Number.isFinite(r)||t<=0||e<=0||o<=0||r<=0)return 0;const a=e*(n/t);return a<=0?0:qn(a*o,0,r)}function Kn(e,t,n){const o=ut(e,t,n);if(o<=0)return 0;const r=o*.5+jn;return Math.min(r,256)}function Gn(e,t,n,o){const r=Math.sqrt(e*e+t*t+n*n);if(r<=0||!Number.isFinite(r)){o.x=0,o.y=0,o.z=0;return}const a=zt(r)/r;o.x=e*a,o.y=t*a,o.z=n*a}function Xn(e,t,n,o,r,a,i,c){const d=Math.sqrt(e*e+t*t+n*n);if(d<=0||!Number.isFinite(d)||!Number.isFinite(o)){const v=-r,S=-a,M=-i;return v*v+S*S+M*M<=c}const l=o/d,u=e*l-r,f=t*l-a,m=n*l-i;return u*u+f*f+m*m<=c}var Me=new E,Fe=new E;function Yn(e,t,n,o,r,a,i,c,d,l,u,f,m,v){const S=n.getBoundingClientRect(),M=e-S.left,F=t-S.top,C=Number.isFinite(o.fov)&&o.fov>0?S.height/(2*Math.tan(o.fov*Math.PI/360)):0,k=Math.min(d,a.length/3,i.length,c.length);let T=null;for(let g=0;g<k;g+=1){const R=g*3,b=a[R],N=a[R+1],W=a[R+2];if(!Xn(b,N,W,c[g]??0,f.x,f.y,f.z,m))continue;const q=b-l.position.x,O=N-l.position.y,h=W-l.position.z,P=q*l.forward.x+O*l.forward.y+h*l.forward.z;if(P<=1e-6)continue;const D=q*l.right.x+O*l.right.y+h*l.right.z,w=q*l.up.x+O*l.up.y+h*l.up.z,_=u*l.aspect*P;if(Math.abs(D)>_)continue;const A=u*P;if(Math.abs(w)>A)continue;const I=P,H=i[g],re=ut(H,I,C),$=Kn(H,I,C);if($<=0)continue;Me.set(b,N,W),Me.applyMatrix4(r.matrixWorld),Fe.copy(Me).project(o);const J=(Fe.x*.5+.5)*S.width,Z=(-Fe.y*.5+.5)*S.height,B=J-M,K=Z-F,V=B*B+K*K;if(V>$*$)continue;const ee={index:g,distSqPx:V,depthCam:I,renderedPx:re};v(ee,T)&&(T=ee)}return T}function ae(){return rn()}var L={chunks:[],pointsMeshes:[],starsInView:[]},ne={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},Qn=new E,Jn=new E,Zn=new E,Ge={x:0,y:0,z:0};function Xe(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function Mr(){return L}function Fr(e,t){const n=_t();function o(){return n.getQueryData(["hyg-catalog"])?.stars??[]}const r=Q(e),a=r.layers.starfield,i=t,c={current:[]},d={current:null},l={current:null},u={current:0},f={current:-1};let m=Tn,v="idle",S=null;const M=s=>{m=typeof s=="function"?s(m):s,g(),ee(),ae()||e.invalidate()},F=s=>{v=typeof s=="function"?s(v):s,Pe(),ee(),ae()||e.invalidate()},C=s=>{S=typeof s=="function"?s(S):s,Pe()},k={current:[]},T={current:!1},g=()=>{const{ttPhase:s,c2TourOrder:p,timeTrialStarNamesUi:y,showStarNames:x}=on(),{namedStarsInView:z}=m;k.current=ln(z,s,p,y),T.current=cn(x,s,y)};g();const R={current:ge()},b=tt(()=>{R.current=ge(),ae()||e.invalidate()}),N=Dn(e,{getNamedStarsInView:()=>k.current,getEnabled:()=>T.current&&!R.current},t),W=$n(e,t),q={runIdRef:u,lastSuccessfulRunIdRef:f,starsInViewRef:c,setStarData:M,setStarfieldStatus:F,setErrorMessage:C},O=[],h=[],P=[],D=[],w=[],_=[];let A=null,I=null,H=0;const re=new vt,$=new gt,J=new St;function Z(s,p,y,x){const{chunks:z}=L;ot(x,ne,Qn,Jn,Zn);const U=Math.tan(ne.fovYRadians*.5);Gn(ne.position.x,ne.position.y,ne.position.z,Ge);const G=500**2;let j=-1,te=null;for(let X=0;X<z.length;X+=1){const we=z[X],Le=O[X],Oe=w[X],We=_[X];if(!we||!Le||!Oe||!We)continue;const pe=Yn(s,p,y,x,Le,we.positions,We,Oe,we.starsInChunk.length,ne,U,Ge,G,Xe);!pe||!Xe(pe,te)||(te=pe,j=D[X]+pe.index)}return j}function B(s,p){const y=c.current;if(y.length===0||!(p instanceof HTMLCanvasElement))return!1;const x=Z(s.clientX,s.clientY,p,r.cameraThree);if(x<0||x>=y.length)return!1;const z=y[x],U=z.proper??(z.hip!=null?`HIP ${z.hip}`:`Star ${z.id}`);return Wt.select(Ht("hyg",z.id),U,"star"),!0}function K(s){const p=new yt;return p.setAttribute("position",new oe(s.positions,3)),p.setAttribute("size",new oe(s.sizes,1)),p.setAttribute("color",new oe(s.colors,3)),p.setAttribute("warm",new oe(s.warm,1)),p.setAttribute("brightness",new oe(s.brightness,1)),p.computeBoundingSphere(),p}function V(){for(const s of O)a.remove(s);O.length=0,D.length=0,w.length=0,_.length=0;for(const s of h)a.remove(s);h.length=0;for(const s of P)s.dispose();P.length=0}function ee(){if(V(),A==null||I==null){L.chunks=[],L.pointsMeshes=[],L.starsInView=c.current;return}const s=lt(m,v);let p=0;for(const y of s){const x=K(y);P.push(x),D.push(p);const z=new Float32Array(y.starsInChunk.length);for(let j=0;j<y.starsInChunk.length;j+=1){const te=y.starsInChunk[j];z[j]=te?Je(te):0}w.push(z),_.push(new Float32Array(y.sizes));const U=new He(x,A);U.frustumCulled=!0,U.raycast=()=>{},a.add(U),O.push(U);const G=new He(x,I);G.frustumCulled=!0,G.renderOrder=1,a.add(G),h.push(G),p+=y.starsInChunk.length}L.chunks=s,L.pointsMeshes=O,L.starsInView=c.current}A=hn(),I=vn();function Ce(){const s=l.current;if(!s)return;const p=n.getQueryState([Be]),y=o();if(_n(y.length,p?.status))return;F("loading"),u.current+=1;const x=u.current,{maxDistanceLevel:z}=_e.getState();Rn(s,x,y,z,q)}const ft=()=>{C(null),F("loading"),Ce()};let fe=[],de=null;function Ae(){de?.abort(),de=null;for(const s of fe)i.removeChild(s);fe=[]}function Pe(){if(Ae(),v==="loading"){const s=document.createElement("div");s.className="starfield-status starfield-status--loading",s.style.position="absolute",s.style.left="50%",s.style.top="50%",s.style.transform="translate(-50%, -50%)",s.style.pointerEvents="none";const p=document.createElement("span");p.className="starfield-status__text",p.textContent="Loading stars…",s.appendChild(p),i.appendChild(s),fe.push(s)}else if(v==="error"){const s=document.createElement("div");s.className="starfield-status starfield-status--error",s.style.position="absolute",s.style.left="50%",s.style.top="50%",s.style.transform="translate(-50%, -50%)",s.style.pointerEvents="auto";const p=document.createElement("div");p.className="starfield-status__message";const y=document.createElement("span");y.className="starfield-status__text",y.textContent=S??"Failed to load stars",p.appendChild(y);const x=document.createElement("button");x.type="button",x.className="starfield-status__retry",x.textContent="Retry",de=new AbortController,x.addEventListener("click",ft,{signal:de.signal}),p.appendChild(x),s.appendChild(p),i.appendChild(s),fe.push(s)}}const Ie=typeof window.Worker>"u",Ne=window.Worker;if(Ne){const s=new Ne(sn,{type:"module"});d.current=s,l.current=It(s),En(s,u,f,F,C)}else F("error"),C("Workers not supported");ee(),ae()||e.invalidate(),Pe();const dt=Jt((s,p)=>s.button!==0?!1:B(s,p));function De(){const s=n.getQueryState([Be]);if(s?.status==="error"){if(Ie)return;const p=s.error;F("error"),C(p instanceof Error?p.message:String(p));return}s?.status==="success"&&(Ie||C(null)),Ce()}De();const pt=_e.subscribe(s=>({maxDistanceLevel:s.maxDistanceLevel,showStarNames:s.showStarNames}),(s,p)=>{g(),(p==null||s.maxDistanceLevel!==p.maxDistanceLevel)&&Ce()},{equalityFn:Ye}),mt=an(g),ht=n.getQueryCache().subscribe(s=>{Ut(s,"hyg-catalog")&&De()});return{onFrame:()=>{if(N.onFrame(),W.onFrame(),ae()){const s=Math.min(.06,r.timer.getDelta());H+=s,A?.uniforms.uTime&&(A.uniforms.uTime.value=H),I?.uniforms.uTime&&(I.uniforms.uTime.value=H)}},dispose:()=>{pt(),mt(),ht(),b(),Ae(),N.dispose(),W.dispose(),V(),A?.dispose(),A=null,I?.dispose(),I=null;const s=l.current;if(s)try{s[Nt]()}catch{}l.current=null,d.current?.terminate(),d.current=null,dt(),L.chunks=[],L.pointsMeshes=[],L.starsInView=[]}}}function he(e){return new ye(e[0],e[1],e[2])}function er(){return{cool:he(Y.star4),warm:he(Y.star3),hot:he(Y.star2),flare:he(Y.star1)}}var tr=`
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
`,nr=`
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
`;function Tr(e){return e==null||Array.isArray(e)||!(e instanceof ue)?!1:e.userData.cosmosiveSunPhotosphere===!0}function _r(e,t){const n=er(),o={cool:e?.cool??n.cool,warm:e?.warm??n.warm,hot:e?.hot??n.hot,flare:e?.flare??n.flare},r={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:o.cool.clone()},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},a=new ue({uniforms:r,vertexShader:tr,fragmentShader:nr,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var rr=`
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
`,or=`
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
`;function Te(e){return new ye(e[0],e[1],e[2])}function ar(){return{warm:Te(Y.star3),hot:Te(Y.star2),flare:Te(Y.star1)}}function Er(e){return e==null||Array.isArray(e)||!(e instanceof ue)?!1:e.userData.cosmosiveSunCorona===!0}function kr(e){const t=ar(),n={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},o={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:n.warm.clone()},uPaletteHot:{value:n.hot.clone()},uPaletteFlare:{value:n.flare.clone()}},r=new ue({uniforms:o,vertexShader:rr,fragmentShader:or,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return r.userData.cosmosiveSunCorona=!0,r}export{me as A,Jt as B,ln as C,on as D,rn as E,hr as F,fr as G,pr as H,Gt as I,jt as K,Sr as L,gr as M,nn as N,an as O,mr as P,vr as R,Cr as S,sn as T,dr as U,yr as V,ot as W,Pr as _,Mr as a,_n as b,Xn as c,wr as d,Nn as f,Tn as g,zn as h,Tr as i,xr as j,Y as k,Kn as l,An as m,Er as n,Fr as o,In as p,be as q,_r as r,Gn as s,kr as t,ut as u,Rn as v,cn as w,lt as x,En as y,en as z};
