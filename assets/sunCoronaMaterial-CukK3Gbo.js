import{n as He}from"./state-data-vendor-xxwWr05t.js";import{$ as Be,V as St,bt as Je,dt as yt,o as oe,p as ye,s as gt,ut as ue,w as xt,xt as E,z as bt}from"./three-vendor-vIq9ZgXI.js";import{$ as Ve,$t as Ct,Bi as Pt,Ga as et,Hr as tt,Na as Me,Qi as ge,Ua as wt,Ur as Mt,Vt as Ue,Wa as Ft,Wr as Tt,Xa as _t,Ya as Et,Zt as kt,_o as Rt,a as zt,bt as At,co as Nt,ea as nt,gt as It,ht as Dt,io as Lt,la as ve,lt as Wt,mo as Ot,on as Ht,po as Bt,rn as $e,sn as Vt,vo as Ut}from"./index-CEGTPwks.js";import{n as Q,t as $t}from"./queryCacheNotify-BPmNJ8r7.js";var be={current:null};function jt(e,t,n){return n&&t&&Ut(e,t.position.x,t.position.y,t.position.z),e}function rt(e,t,n){if(n&&t){const o=e;o.x+=t.position.x,o.y+=t.position.y,o.z+=t.position.z}return e}function qt(e,t){return e.getWorldPosition(t),jt(t,be.current,!0),t}var Kt=()=>({starfieldChunksTotal:0,starfieldChunksVisible:0,starfieldVerticesTotal:0,starfieldPipelineStatus:"idle",starfieldSyntheticKind:"empty",starfieldChunkAbbrevSample:"",shipsCandidates:0,shipsRendered:0,combatShotsTracerEnemySlots:0,combatShotsConquestCandidates:0,combatShotsConquestPassedFrustum:0,updatedAtMs:0}),je=Kt();function cr(e){}typeof globalThis.window<"u";function Gt(e,t,n,o,r){e.updateMatrixWorld(!0),e.getWorldPosition(n),t.position.x=n.x,t.position.y=n.y,t.position.z=n.z,e.getWorldDirection(n),o.setFromMatrixColumn(e.matrixWorld,0).normalize(),r.setFromMatrixColumn(e.matrixWorld,1).normalize(),t.forward.x=n.x,t.forward.y=n.y,t.forward.z=n.z,t.right.x=o.x,t.right.y=o.y,t.right.z=o.z,t.up.x=r.x,t.up.y=r.y,t.up.z=r.z,t.fovYRadians=bt.degToRad(e.fov),t.aspect=e.aspect}function ot(e,t,n,o,r){Gt(e,t,n,o,r);{const a=be.current;a&&(t.position.x-=a.position.x,t.position.y-=a.position.y,t.position.z-=a.position.z)}}var Ee="__cosmosivePointer",ke=new WeakMap;function ur(e,t){t==null?delete e.userData[Ee]:e.userData[Ee]=t}function se(e){return e.userData[Ee]}function fr(e,t){t==null?ke.delete(e):ke.set(e,t)}function ie(e){return ke.get(e)}var qe=new Je;function Xt(e,t,n,o){const r=n.getBoundingClientRect();o.x=(e-r.left)/r.width*2-1,o.y=-((t-r.top)/r.height)*2+1}function Yt(e){const t=Q(e);t.scene.updateMatrixWorld(!0);const n=t.gl.domElement,o=t.cameraThree,r=n.clientWidth/Math.max(1,n.clientHeight);Number.isFinite(r)&&Math.abs(o.aspect-r)>1e-6&&(o.aspect=r,o.updateProjectionMatrix()),o.updateMatrixWorld(!0)}function Qt(e){return Q(e).scene.children.filter(t=>t.visible!==!1)}function le(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent}return!1}function ce(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent??null}return!1}var Ke=new E,Ge=new E,Zt=new E,Se=[];function Jt(e){return Se.push(e),()=>{const t=Se.indexOf(e);t>=0&&Se.splice(t,1)}}function xe(e,t){for(const n of Se)if(n(e,t))return!0;return!1}function en(e,t,n,o,r){let a=!1;const i={nativeEvent:n,object:e,point:o,index:r,stopPropagation:()=>{a=!0}};ce(e,c=>{const p=ie(c)?.[t];return p?(p(i),a):!1})}function dr(e,t,n,o,r,a){if(e.engineKind==="babylon"){en(t,n,o,r,a);return}let i=!1;const c={nativeEvent:o,object:t,point:r,index:a,stopPropagation:()=>{i=!0}};le(t,p=>{const l=se(p)?.[n];return l?(l(c),i):!1})}function pr(e,t,n,o,r){if(t!==n){if(e.engineKind==="babylon"){t&&ce(t,a=>{const i=ie(a)?.onPointerOut;return i?(i({nativeEvent:o,object:a,point:Ke,stopPropagation:()=>{}}),!0):!1}),n&&ce(n,a=>{const i=ie(a)?.onPointerOver;return i?(i({nativeEvent:o,object:a,point:Ge.copy(r),stopPropagation:()=>{}}),!0):!1});return}t&&le(t,a=>{const i=se(a)?.onPointerOut;return i?(i({nativeEvent:o,object:a,point:Ke,stopPropagation:()=>{}}),!0):!1}),n&&le(n,a=>{const i=se(a)?.onPointerOver;return i?(i({nativeEvent:o,object:a,point:Ge.copy(r),stopPropagation:()=>{}}),!0):!1})}}function mr(e,t){for(const n of e){let o=!1;if(le(n.object,r=>se(r)?.onClick?(o=!0,!0):!1),o)return{kind:"interactive",object:n.object,point:n.point.clone(),index:n.index!==void 0?n.index:void 0,ndc:{x:t.x,y:t.y}}}return null}function hr(e,t,n,o){const r=e.pickAt(t,n);if(!r)return null;const a=r.node;let i=!1;return ce(a,c=>ie(c)?.onClick?(i=!0,!0):!1),i?{kind:"interactive",object:a,point:new E(r.point[0],r.point[1],r.point[2]),ndc:{x:o.x,y:o.y}}:null}function tn(e,t){Yt(e),qe.set(t.x,t.y);const n=Q(e);return n.raycaster.setFromCamera(qe,n.cameraThree),n.raycaster.intersectObjects(Qt(e),!0)}function nn(e,t,n,o){if(n.button!==0)return;const r=e.pickAt(n.clientX,n.clientY);if(!r){if(xe(n,t))return;o();return}const a=r.node,i=new E(r.point[0],r.point[1],r.point[2]);let c=!1,p=!1;const l={nativeEvent:n,object:a,point:i,index:void 0,stopPropagation:()=>{c=!0}};ce(a,u=>{const d=ie(u)?.onClick;return d?(p=!0,d(l),c):!1}),!p&&(xe(n,t)||o())}function vr(e,t,n,o){if(e.engineKind==="babylon"){nn(e,t,n,o);return}if(n.button!==0)return;const r={x:0,y:0};Xt(n.clientX,n.clientY,t,r);const a=tn(e,r);if(a.length===0){if(xe(n,t))return;o();return}for(const i of a){let c=!1,p=!1;const l={nativeEvent:n,object:i.object,point:Zt.copy(i.point),index:(i.index!==void 0,i.index),stopPropagation:()=>{c=!0}};if(le(i.object,u=>{const d=se(u)?.onClick;return d?(p=!0,d(l),c):!1}),p)return}xe(n,t)||o()}function Sr(e){const t=e.replace(/^#/,""),n=parseInt(t,16);return Number.isFinite(n)?[Math.floor(n/65536)%256,Math.floor(n/256)%256,n%256]:[0,0,0]}function rn(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function yr(e){return Math.max(0,Math.min(255,Math.round(e)))}function me(e,t=1,n=1){const[o,r,a]=rn(e),i=Math.max(.15,Math.min(1,t));return[o*i,r*i,a*i,n]}var Y={star1:me("#fff3a8",1),star2:me("#f5c238",1),star3:me("#e07b1a",1),star4:me("#a8380c",1)},on="/assets/starfield.worker-DeoSgUe7.js";function at(e){return e==="countdown"||e==="active"||e==="complete"}function an(e,t,n,o){if(!o||!at(t)||n.length===0)return e;const r=new Set(n);return e.filter(a=>a.catalogId!=null&&r.has(a.catalogId))}function sn(e,t,n){return!n||!at(t)?e:e||t==="countdown"}var ln=256,cn=320,un=`
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
`,fn=`
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
`,dn=`
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
`;function st(e){const t=new ue({uniforms:{uScale:{value:1},uPointSizeMax:{value:e?.pointSizeMax??ln},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uMinScreenPx:{value:e?.minScreenPx??0},uMaxScreenPx:{value:e?.maxScreenPx??0},uPaletteHot:{value:new ye(1,.78,.56)},uPaletteFlare:{value:new ye(1,.92,.75)}},vertexShader:un,fragmentShader:e?.useHaloShader?dn:fn,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),n=new Je;return t.onBeforeRender=(o,r,a)=>{const i=a;i.isPerspectiveCamera&&i.fov&&(o.getSize(n),t.uniforms.uScale.value=n.y/(2*Math.tan(i.fov*Math.PI/360)))},t}function pn(){return st({twinkleAmp:.03,twinkleFreq:.9})}function mn(){return st({useHaloShader:!0,sizeMultiplier:1.6,minScreenPx:2.1,maxScreenPx:5.2,pointSizeMax:cn,twinkleAmp:.02,twinkleFreq:.55})}var ze=4,gr=64*ze,hn=-25,vn=500,Sn=.01;function it(e){return Math.max(0,Math.min(1,e))}function yn(e){return e?.size!=null&&Number.isFinite(e.size)?it(e.size):.5}function gn(e){return .08+.76*it((e-.99)/.01)**3}function xr(e){return(e?Ft(e,tt(e)):et)*gn(yn(e))*ze}function Re(e,t){let n=t;for(;e[n]!==n;)n=e[n];let o=t;for(;o!==n;){const r=e[o];e[o]=n,o=r}return n}function xn(e,t,n){const o=Re(e,t),r=Re(e,n);o!==r&&(e[o]=r)}function Xe(e,t,n){return`${e},${t},${n}`}function bn(e,t){const n=e.length,o=Array.from({length:n},(l,u)=>u),r=t,a=new Map;for(let l=0;l<n;l+=1){const u=e[l],d=Xe(Math.floor(u.x/r),Math.floor(u.y/r),Math.floor(u.z/r));a.has(d)||a.set(d,[]),a.get(d).push(l)}const i=t*t;for(let l=0;l<n;l+=1){const u=e[l],d=Math.floor(u.x/r),m=Math.floor(u.y/r),v=Math.floor(u.z/r);for(let g=-1;g<=1;g+=1)for(let M=-1;M<=1;M+=1)for(let F=-1;F<=1;F+=1){const C=Xe(d+g,m+M,v+F),k=a.get(C);if(k)for(const T of k){if(T<=l)continue;const x=e[T],R=x.x-u.x,b=x.y-u.y,I=x.z-u.z;R*R+b*b+I*I<i&&xn(o,l,T)}}}const c=new Map;for(let l=0;l<n;l+=1){const u=Re(o,l);c.has(u)||c.set(u,[]),c.get(u).push(l)}const p=[];for(let l=0;l<n;l+=1)p.push(void 0);for(const l of c.values())l.length<=1||(l.sort((u,d)=>u-d),l.forEach((u,d)=>{d>0&&(p[u]={x:0,y:d*hn})}));return p}function Cn(){const e=[];for(let t=0;t<vn;t+=1){const n=wt(t*.7%360,t*.3%180-90);n!=null&&e.push(n)}return e}function Pn(){const e=Cn(),t=e.length,n=Nt,o=new Float32Array(t*3);return e.forEach((r,a)=>{o[a*3]=r.x*n,o[a*3+1]=r.y*n,o[a*3+2]=r.z*n}),{abbr:"_bootstrap",positions:o,sizes:new Float32Array(t).fill(et*ze),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(Sn),brightness:new Float32Array(t).fill(1),starsInChunk:[]}}var wn={raMin:0,raMax:360,decMin:-90,decMax:90},Mn={chunks:[],namedStarsInView:[]};function Fn(e,t){return e===0&&t!=="success"}function lt(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[Pn()]:[]}function br(e,t){const n=lt(e,t),o=n.slice(0,3).map(r=>r.abbr).join(",");return n.length===0?{syntheticKind:"empty",chunkAbbrevSample:o}:n.length===1&&n[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:o}:n.some(r=>r.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:o}:{syntheticKind:"real",chunkAbbrevSample:o}}function Ye(e,t){return t.current===e.current}function Tn(e,t,n,o,r){e.onerror=a=>{Ye(t,n)||(o("error"),r(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{Ye(t,n)||(o("error"),r("Starfield worker message error"))}}function _n(e,t,n,o,r,a,i){const{runId:c,...p}=e;c===t.current&&(n.current=c,o.current=p.starsInView,r({chunks:p.chunks,namedStarsInView:p.namedStarsInView}),a("ready"),i(null))}function En(e,t,n,o,r){e.processStarfield({runId:t,catalog:n,maxDistanceLevel:o,bounds:wn,raInHours:!1}).then(a=>{_n(a,r.runIdRef,r.lastSuccessfulRunIdRef,r.starsInViewRef,r.setStarData,r.setStarfieldStatus,r.setErrorMessage)}).catch(a=>{t===r.runIdRef.current&&(r.setStarfieldStatus("error"),r.setErrorMessage(a instanceof Error?a.message:"Starfield worker failed"))})}function kn(e,t,n=48){const o=[];for(let i=0;i<t.length;i+=1){const c=t[i];if(!Rt(c.position,e.position,e.forward,e.right,e.up,e.fovYRadians,e.aspect))continue;const p=c.position.x-e.position.x,l=c.position.y-e.position.y,u=c.position.z-e.position.z,d=p*p+l*l+u*u;o.push({entry:c,distSq:d,index:i})}o.sort((i,c)=>i.distSq!==c.distSq?i.distSq-c.distSq:i.index-c.index);const r=o.slice(0,n).map(i=>i.entry),a=bn(r.map(i=>i.position),10);return r.map((i,c)=>({...i,labelOffset:a[c]}))}function Rn(e,t){return`translate(${e}px, ${t}px) translate(-50%, calc(-100% - 8px))`}function zn(e){return e.map(t=>`${t.name}\0${t.position.x.toFixed(4)},${t.position.y.toFixed(4)},${t.position.z.toFixed(4)}\0${t.labelOffset?.x??""},${t.labelOffset?.y??""}`).join("|")}function An(e){const t=document.createElement("div");t.style.position="absolute",t.style.left="0",t.style.top="0",t.style.width="100%",t.style.height="100%",t.style.pointerEvents="none",e.appendChild(t);let n="",o=[],r=[];function a(){t.replaceChildren(),o=[],r=[],n=""}function i(c){t.replaceChildren(),o=[],r=c;for(const{position:p,name:l,labelOffset:u}of c){const d=document.createElement("div");d.className="star-label-wrapper",d.style.position="absolute",d.style.left="0",d.style.top="0",d.style.pointerEvents="none";const m=document.createElement("span");m.className="star-label",m.textContent=l,d.appendChild(m),t.appendChild(d),o.push({wrap:d,span:m})}}return{container:t,get lastSig(){return n},set lastSig(c){n=c},get rowEls(){return o},get currentRows(){return r},clearRows:a,rebuildRows:i}}function Nn(e,t,n){const o=n,r=An(o),a={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},i=new E,c=new E,p=new E,l=new E;return{onFrame:()=>{const d=t.getEnabled(),m=t.getNamedStarsInView(),{size:v}=e;if(!d){r.lastSig!==""&&r.clearRows();return}const g=Q(e).cameraThree;if(!g.isPerspectiveCamera)return;ot(g,a,i,c,p);const M=kn(a,m),F=zn(M);F!==r.lastSig&&(r.lastSig=F,r.rebuildRows(M));for(let C=0;C<r.currentRows.length;C+=1){const k=r.currentRows[C],T=r.rowEls[C]?.wrap;if(!T)continue;if(l.set(k.position.x,k.position.y,k.position.z),rt(l,be.current,!0),l.project(g),!(Number.isFinite(l.x)&&Number.isFinite(l.y)&&Number.isFinite(l.z)&&Math.abs(l.x)<=1&&Math.abs(l.y)<=1&&l.z>=-1&&l.z<=1)){T.style.display="none";continue}T.style.display="";const x=(l.x*.5+.5)*v.width+(k.labelOffset?.x??0),R=(-l.y*.5+.5)*v.height+(k.labelOffset?.y??0);T.style.transform=Rn(x,R)}},dispose:()=>{r.clearRows(),r.container.parentNode===o&&o.removeChild(r.container)}}}var ct=null;function Cr(e){ct=e}function In(){return ct?.current??{}}var Dn=1495978707e-1,Ln=1e3;function Wn(e,t){const n=e.width,o=e.height,r=t.clientWidth,a=t.clientHeight;let i;Number.isFinite(n)&&n>0?i=n:Number.isFinite(r)?i=r:i=0;let c;return Number.isFinite(o)&&o>0?c=o:Number.isFinite(a)?c=a:c=0,!Number.isFinite(i)||!Number.isFinite(c)||i<=0||c<=0?null:{w:i,h:c}}function On(e,t,n,o,r=28){return!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)?!1:e>=r&&t>=r&&e<=n-r&&t<=o-r}function Hn(e){if(!Number.isFinite(e)||e<0)return"";const t=e/Lt;if(t<.001){const n=t*Dn;return n<1?`${n.toFixed(3)} km`:n<1e3?`${n.toFixed(0)} km`:`${(n/1e3).toFixed(1)} Mm`}return t<1?`${t.toFixed(3)} AU`:t<100?`${t.toFixed(2)} AU`:`${t.toFixed(0)} AU`}function Bn(e){return!Number.isFinite(e)||e<0?"":e<.01?`${e.toFixed(4)} pc`:e<1?`${e.toFixed(3)} pc`:e<100?`${e.toFixed(2)} pc`:`${e.toFixed(0)} pc`}function Vn(e,t){const n=document.createElement("div");n.className="selected-body-label-wrapper",n.style.position="absolute",n.style.left="0",n.style.top="0",n.style.pointerEvents="none";const o=document.createElement("span");o.className="selected-body-label",n.appendChild(o),t.appendChild(n);const r=document.createElement("div");r.className="selected-body-callout-wrapper";const a=document.createElement("div");a.className="selected-body-callout__ring";const i=document.createElement("div");i.className="selected-body-callout__leader-v";const c=document.createElement("div");c.className="selected-body-callout__leader-h";const p=document.createElement("div");p.className="selected-body-callout__name";const l=document.createElement("div");l.className="selected-body-callout__distance",r.append(a,i,c,p,l),t.appendChild(r);let u=!1,d=!1;const m=h=>{h!==u&&(u=h,n.style.display=h?"":"none")},v=h=>{h!==d&&(d=h,r.style.display=h?"":"none")};m(!1),v(!1);const g=ve().getState().selection,M={id:g.selectedId,name:g.selectedName},F=ve().subscribeSelector(h=>h.selection.selectedId,h=>{M.id=h}),C=ve().subscribeSelector(h=>h.selection.selectedName,h=>{M.name=h});let k=ge();const T=nt(()=>{k=ge(),e.invalidate()}),x=new E,R=new E,b=new E;let I="",H=0;function q(h,P){if(h==="hor"){const _=In()[P];return _?{pos:{x:_[0],y:_[1],z:_[2]},isSolar:!0}:null}if(h==="hyg"){const _=Pt();if(_.length===0)return null;const A=Vt(_).get(P);return A?{pos:Mt(A),isSolar:!1}:null}const D=[...At(),...Wt()];if(D.length===0)return null;const w=Ht(D).get(P);return w?{pos:Tt(w),isSolar:!1}:null}return{onFrame:()=>{if(k){m(!1),v(!1);return}const{id:h,name:P}=M;if(!h||!P){m(!1),v(!1);return}let D;try{D=Bt(h)}catch{m(!1),v(!1);return}const w=q(D.source,D.rawId);if(!w){m(!1),v(!1);return}const _=Q(e).cameraThree;if(!_.isPerspectiveCamera){m(!1),v(!1);return}if(x.set(w.pos.x,w.pos.y,w.pos.z),rt(x,be.current,!0),b.copy(x).project(_),!(Number.isFinite(b.x)&&Number.isFinite(b.y)&&Number.isFinite(b.z)&&Math.abs(b.x)<=1&&Math.abs(b.y)<=1&&b.z>=-1&&b.z<=1)){m(!1),v(!1);return}const A=Q(e).gl.domElement,N=Wn(e.size,A);if(N==null){m(!1),v(!1);return}const{w:B,h:re}=N,$=(b.x*.5+.5)*B,Z=(-b.y*.5+.5)*re;if(w.isSolar){o.textContent!==P&&(o.textContent=P),n.style.transform=`translate(${$}px, ${Z}px) translate(-50%, -50%)`,m(!0),v(!1);return}if(!On($,Z,B,re)){m(!1),v(!1);return}p.textContent!==P&&(p.textContent=P),r.style.transform=`translate(${$}px, ${Z}px)`;const J=performance.now();if(J-H>=Ln||I===""){qt(_,R);const V={x:R.x,y:R.y,z:R.z},K=Math.hypot(w.pos.x-V.x,w.pos.y-V.y,w.pos.z-V.z),U=K<1e5?Hn(K):Bn(Et(V,w.pos));U!==I&&(I=U,l.textContent=U),H=J}m(!1),v(!0)},dispose:()=>{F(),C(),T(),n.parentNode===t&&t.removeChild(n),r.parentNode===t&&t.removeChild(r)}}}var Un=3;function $n(e,t,n){return Math.max(t,Math.min(n,e))}function ut(e,t,n,o=1,r=256){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)||!Number.isFinite(r)||t<=0||e<=0||o<=0||r<=0)return 0;const a=e*(n/t);return a<=0?0:$n(a*o,0,r)}function jn(e,t,n){const o=ut(e,t,n);if(o<=0)return 0;const r=o*.5+Un;return Math.min(r,256)}function qn(e,t,n,o){const r=Math.sqrt(e*e+t*t+n*n);if(r<=0||!Number.isFinite(r)){o.x=0,o.y=0,o.z=0;return}const a=_t(r)/r;o.x=e*a,o.y=t*a,o.z=n*a}function Kn(e,t,n,o,r,a,i,c){const p=Math.sqrt(e*e+t*t+n*n);if(p<=0||!Number.isFinite(p)||!Number.isFinite(o)){const v=-r,g=-a,M=-i;return v*v+g*g+M*M<=c}const l=o/p,u=e*l-r,d=t*l-a,m=n*l-i;return u*u+d*d+m*m<=c}var Fe=new E,Te=new E;function Gn(e,t,n,o,r,a,i,c,p,l,u,d,m,v){const g=n.getBoundingClientRect(),M=e-g.left,F=t-g.top,C=Number.isFinite(o.fov)&&o.fov>0?g.height/(2*Math.tan(o.fov*Math.PI/360)):0,k=Math.min(p,a.length/3,i.length,c.length);let T=null;for(let x=0;x<k;x+=1){const R=x*3,b=a[R],I=a[R+1],H=a[R+2];if(!Kn(b,I,H,c[x]??0,d.x,d.y,d.z,m))continue;const q=b-l.position.x,O=I-l.position.y,h=H-l.position.z,P=q*l.forward.x+O*l.forward.y+h*l.forward.z;if(P<=1e-6)continue;const D=q*l.right.x+O*l.right.y+h*l.right.z,w=q*l.up.x+O*l.up.y+h*l.up.z,_=u*l.aspect*P;if(Math.abs(D)>_)continue;const A=u*P;if(Math.abs(w)>A)continue;const N=P,B=i[x],re=ut(B,N,C),$=jn(B,N,C);if($<=0)continue;Fe.set(b,I,H),Fe.applyMatrix4(r.matrixWorld),Te.copy(Fe).project(o);const Z=(Te.x*.5+.5)*g.width,J=(-Te.y*.5+.5)*g.height,V=Z-M,K=J-F,U=V*V+K*K;if(U>$*$)continue;const ee={index:x,distSqPx:U,depthCam:N,renderedPx:re};v(ee,T)&&(T=ee)}return T}function ae(){const e=ve().getState(),t=kt.getState().session.gameStarted,n=(e.camera.visitId!=null||e.camera.watchId!=null)&&e.camera.autoWatch;return e.playing||n||t}var W={chunks:[],pointsMeshes:[],starsInView:[]},ne={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},Xn=new E,Yn=new E,Qn=new E,Qe={x:0,y:0,z:0};function Ze(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function Pr(){return W}function wr(e,t){const n=zt();function o(){return n.getQueryData(["hyg-catalog"])?.stars??[]}const r=Q(e),a=r.layers.starfield,i=t,c={current:[]},p={current:null},l={current:null},u={current:0},d={current:-1};let m=Mn,v="idle",g=null;const M=s=>{m=typeof s=="function"?s(m):s,x(),ee(),ae()||e.invalidate()},F=s=>{v=typeof s=="function"?s(v):s,Pe(),ee(),ae()||e.invalidate()},C=s=>{g=typeof s=="function"?s(g):s,Pe()},k={current:[]},T={current:!1},x=()=>{const s=Ue.getState(),f=s.phase,{c2TourOrder:S}=s,y=$e.getState().appMode==="time-trial",{showStarNames:z}=Me.getState(),{namedStarsInView:L}=m;k.current=an(L,f,S,y),T.current=sn(z,f,y)};x();const R={current:ge()},b=nt(()=>{R.current=ge(),ae()||e.invalidate()}),I=Nn(e,{getNamedStarsInView:()=>k.current,getEnabled:()=>T.current&&!R.current},t),H=Vn(e,t),q={runIdRef:u,lastSuccessfulRunIdRef:d,starsInViewRef:c,setStarData:M,setStarfieldStatus:F,setErrorMessage:C},O=[],h=[],P=[],D=[],w=[],_=[];let A=null,N=null,B=0;const re=new St,$=new xt,Z=new yt;function J(s,f,S,y){const{chunks:z}=W;ot(y,ne,Xn,Yn,Qn);const L=Math.tan(ne.fovYRadians*.5);qn(ne.position.x,ne.position.y,ne.position.z,Qe);const G=500**2;let j=-1,te=null;for(let X=0;X<z.length;X+=1){const we=z[X],Le=O[X],We=w[X],Oe=_[X];if(!we||!Le||!We||!Oe)continue;const pe=Gn(s,f,S,y,Le,we.positions,Oe,We,we.starsInChunk.length,ne,L,Qe,G,Ze);!pe||!Ze(pe,te)||(te=pe,j=D[X]+pe.index)}return j}function V(s,f){const S=c.current;if(S.length===0||!(f instanceof HTMLCanvasElement))return!1;const y=J(s.clientX,s.clientY,f,r.cameraThree);if(y<0||y>=S.length)return!1;const z=S[y],L=z.proper??(z.hip!=null?`HIP ${z.hip}`:`Star ${z.id}`);return Ct.select(Ot("hyg",z.id),L,"star"),!0}function K(s){const f=new gt;return f.setAttribute("position",new oe(s.positions,3)),f.setAttribute("size",new oe(s.sizes,1)),f.setAttribute("color",new oe(s.colors,3)),f.setAttribute("warm",new oe(s.warm,1)),f.setAttribute("brightness",new oe(s.brightness,1)),f.computeBoundingSphere(),f}function U(){for(const s of O)a.remove(s);O.length=0,D.length=0,w.length=0,_.length=0;for(const s of h)a.remove(s);h.length=0;for(const s of P)s.dispose();P.length=0}function ee(){if(U(),A==null||N==null){W.chunks=[],W.pointsMeshes=[],W.starsInView=c.current;return}const s=lt(m,v);let f=0;for(const S of s){const y=K(S);P.push(y),D.push(f);const z=new Float32Array(S.starsInChunk.length);for(let j=0;j<S.starsInChunk.length;j+=1){const te=S.starsInChunk[j];z[j]=te?tt(te):0}w.push(z),_.push(new Float32Array(S.sizes));const L=new Be(y,A);L.frustumCulled=!0,L.raycast=()=>{},a.add(L),O.push(L);const G=new Be(y,N);G.frustumCulled=!0,G.renderOrder=1,a.add(G),h.push(G),f+=S.starsInChunk.length}W.chunks=s,W.pointsMeshes=O,W.starsInView=c.current}A=pn(),N=mn();function Ce(){const s=l.current;if(!s)return;const f=n.getQueryState([Ve]),S=o();if(Fn(S.length,f?.status))return;F("loading"),u.current+=1;const y=u.current,{maxDistanceLevel:z}=Me.getState();En(s,y,S,z,q)}const ft=()=>{C(null),F("loading"),Ce()};let fe=[],de=null;function Ae(){de?.abort(),de=null;for(const s of fe)i.removeChild(s);fe=[]}function Pe(){if(Ae(),v==="loading"){const s=document.createElement("div");s.className="starfield-status starfield-status--loading",s.style.position="absolute",s.style.left="50%",s.style.top="50%",s.style.transform="translate(-50%, -50%)",s.style.pointerEvents="none";const f=document.createElement("span");f.className="starfield-status__text",f.textContent="Loading stars…",s.appendChild(f),i.appendChild(s),fe.push(s)}else if(v==="error"){const s=document.createElement("div");s.className="starfield-status starfield-status--error",s.style.position="absolute",s.style.left="50%",s.style.top="50%",s.style.transform="translate(-50%, -50%)",s.style.pointerEvents="auto";const f=document.createElement("div");f.className="starfield-status__message";const S=document.createElement("span");S.className="starfield-status__text",S.textContent=g??"Failed to load stars",f.appendChild(S);const y=document.createElement("button");y.type="button",y.className="starfield-status__retry",y.textContent="Retry",de=new AbortController,y.addEventListener("click",ft,{signal:de.signal}),f.appendChild(y),s.appendChild(f),i.appendChild(s),fe.push(s)}}const Ne=typeof window.Worker>"u",Ie=window.Worker;if(Ie){const s=new Ie(on,{type:"module"});p.current=s,l.current=It(s),Tn(s,u,d,F,C)}else F("error"),C("Workers not supported");ee(),ae()||e.invalidate(),Pe();const dt=Jt((s,f)=>s.button!==0?!1:V(s,f));function De(){const s=n.getQueryState([Ve]);if(s?.status==="error"){if(Ne)return;const f=s.error;F("error"),C(f instanceof Error?f.message:String(f));return}s?.status==="success"&&(Ne||C(null)),Ce()}De();const pt=Me.subscribe(s=>({maxDistanceLevel:s.maxDistanceLevel,showStarNames:s.showStarNames}),(s,f)=>{x(),(f==null||s.maxDistanceLevel!==f.maxDistanceLevel)&&Ce()},{equalityFn:He}),mt=Ue.subscribe(s=>({phase:s.phase,c2TourOrder:s.c2TourOrder,remainingC2StarIds:s.remainingC2StarIds}),()=>{x()},{equalityFn:He}),ht=$e.subscribe((s,f)=>{const S=s.appMode==="time-trial",y=f!=null&&f.appMode==="time-trial";f!=null&&S===y||x()}),vt=n.getQueryCache().subscribe(s=>{$t(s,"hyg-catalog")&&De()});return{onFrame:()=>{if(I.onFrame(),H.onFrame(),ae()){const s=Math.min(.06,r.timer.getDelta());B+=s,A?.uniforms.uTime&&(A.uniforms.uTime.value=B),N?.uniforms.uTime&&(N.uniforms.uTime.value=B)}},dispose:()=>{pt(),mt(),ht(),vt(),b(),Ae(),I.dispose(),H.dispose(),U(),A?.dispose(),A=null,N?.dispose(),N=null;const s=l.current;if(s)try{s[Dt]()}catch{}l.current=null,p.current?.terminate(),p.current=null,dt(),W.chunks=[],W.pointsMeshes=[],W.starsInView=[]}}}function he(e){return new ye(e[0],e[1],e[2])}function Zn(){return{cool:he(Y.star4),warm:he(Y.star3),hot:he(Y.star2),flare:he(Y.star1)}}var Jn=`
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
`,er=`
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
`;function Mr(e){return e==null||Array.isArray(e)||!(e instanceof ue)?!1:e.userData.cosmosiveSunPhotosphere===!0}function Fr(e,t){const n=Zn(),o={cool:e?.cool??n.cool,warm:e?.warm??n.warm,hot:e?.hot??n.hot,flare:e?.flare??n.flare},r={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:o.cool.clone()},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},a=new ue({uniforms:r,vertexShader:Jn,fragmentShader:er,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var tr=`
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
`;function _e(e){return new ye(e[0],e[1],e[2])}function rr(){return{warm:_e(Y.star3),hot:_e(Y.star2),flare:_e(Y.star1)}}function Tr(e){return e==null||Array.isArray(e)||!(e instanceof ue)?!1:e.userData.cosmosiveSunCorona===!0}function _r(e){const t=rr(),n={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},o={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:n.warm.clone()},uPaletteHot:{value:n.hot.clone()},uPaletteFlare:{value:n.flare.clone()}},r=new ue({uniforms:o,vertexShader:tr,fragmentShader:nr,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return r.userData.cosmosiveSunCorona=!0,r}export{rn as A,ur as B,an as C,me as D,Y as E,mr as F,cr as H,tn as I,Jt as L,pr as M,Xt as N,yr as O,hr as P,vr as R,xr as S,on as T,qt as U,ot as V,be as W,br as _,Pr as a,Fn as b,Kn as c,Cr as d,An as f,Mn as g,kn as h,Mr as i,dr as j,Sr as k,jn as l,Rn as m,Tr as n,wr as o,zn as p,Fr as r,qn as s,_r as t,ut as u,En as v,sn as w,lt as x,Tn as y,fr as z};
