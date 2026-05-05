import{n as We}from"./state-data-vendor-GurlhYZz.js";import{B as mt,C as ht,Q as Oe,R as vt,bt as E,f as me,lt as oe,o as Z,s as St,ut as yt,yt as Ye}from"./three-vendor-BVbCAnpr.js";import{Aa as Ce,Ba as gt,Bi as xt,Ha as Je,Hr as Ze,Ht as Be,Ka as et,Qi as bt,Qt as Ct,Ur as Pt,Va as wt,Wr as Mt,_t as Tt,a as _t,cn as kt,en as Ft,eo as Et,et as He,ga as Rt,gt as At,in as Ve,io as zt,lo as It,mo as Nt,oa as de,po as Dt,sn as Lt,uo as Wt,ut as Ot,xt as Bt}from"./index-rj9Ogjny.js";import{n as Q,t as Ht}from"./queryCacheNotify-BluFeo99.js";var ve={current:null};function Vt(e,t,n){return n&&t&&Nt(e,t.position.x,t.position.y,t.position.z),e}function tt(e,t,n){if(n&&t){const o=e;o.x+=t.position.x,o.y+=t.position.y,o.z+=t.position.z}return e}function nr(e,t){return e.getWorldPosition(t),Vt(t,ve.current,!0),t}var Ut=()=>({starfieldChunksTotal:0,starfieldChunksVisible:0,starfieldVerticesTotal:0,starfieldPipelineStatus:"idle",starfieldSyntheticKind:"empty",starfieldChunkAbbrevSample:"",shipsCandidates:0,shipsRendered:0,combatShotsTracerEnemySlots:0,combatShotsConquestCandidates:0,combatShotsConquestPassedFrustum:0,updatedAtMs:0}),Ue=Ut();function rr(e){}typeof globalThis.window<"u";function jt(e,t,n,o,r){e.updateMatrixWorld(!0),e.getWorldPosition(n),t.position.x=n.x,t.position.y=n.y,t.position.z=n.z,e.getWorldDirection(n),o.setFromMatrixColumn(e.matrixWorld,0).normalize(),r.setFromMatrixColumn(e.matrixWorld,1).normalize(),t.forward.x=n.x,t.forward.y=n.y,t.forward.z=n.z,t.right.x=o.x,t.right.y=o.y,t.right.z=o.z,t.up.x=r.x,t.up.y=r.y,t.up.z=r.z,t.fovYRadians=vt.degToRad(e.fov),t.aspect=e.aspect}function nt(e,t,n,o,r){jt(e,t,n,o,r);{const a=ve.current;a&&(t.position.x-=a.position.x,t.position.y-=a.position.y,t.position.z-=a.position.z)}}var Te="__cosmosivePointer",_e=new WeakMap;function or(e,t){t==null?delete e.userData[Te]:e.userData[Te]=t}function ee(e){return e.userData[Te]}function ar(e,t){t==null?_e.delete(e):_e.set(e,t)}function te(e){return _e.get(e)}var je=new Ye;function $t(e,t,n,o){const r=n.getBoundingClientRect();o.x=(e-r.left)/r.width*2-1,o.y=-((t-r.top)/r.height)*2+1}function qt(e){const t=Q(e);t.scene.updateMatrixWorld(!0);const n=t.gl.domElement,o=t.cameraThree,r=n.clientWidth/Math.max(1,n.clientHeight);Number.isFinite(r)&&Math.abs(o.aspect-r)>1e-6&&(o.aspect=r,o.updateProjectionMatrix()),o.updateMatrixWorld(!0)}function Kt(e){return Q(e).scene.children.filter(t=>t.visible!==!1)}function ne(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent}return!1}function re(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent??null}return!1}var $e=new E,qe=new E,Gt=new E,pe=[];function Xt(e){return pe.push(e),()=>{const t=pe.indexOf(e);t>=0&&pe.splice(t,1)}}function he(e,t){for(const n of pe)if(n(e,t))return!0;return!1}function Qt(e,t,n,o,r){let a=!1;const l={nativeEvent:n,object:e,point:o,index:r,stopPropagation:()=>{a=!0}};re(e,c=>{const p=te(c)?.[t];return p?(p(l),a):!1})}function sr(e,t,n,o,r,a){if(e.engineKind==="babylon"){Qt(t,n,o,r,a);return}let l=!1;const c={nativeEvent:o,object:t,point:r,index:a,stopPropagation:()=>{l=!0}};ne(t,p=>{const i=ee(p)?.[n];return i?(i(c),l):!1})}function ir(e,t,n,o,r){if(t!==n){if(e.engineKind==="babylon"){t&&re(t,a=>{const l=te(a)?.onPointerOut;return l?(l({nativeEvent:o,object:a,point:$e,stopPropagation:()=>{}}),!0):!1}),n&&re(n,a=>{const l=te(a)?.onPointerOver;return l?(l({nativeEvent:o,object:a,point:qe.copy(r),stopPropagation:()=>{}}),!0):!1});return}t&&ne(t,a=>{const l=ee(a)?.onPointerOut;return l?(l({nativeEvent:o,object:a,point:$e,stopPropagation:()=>{}}),!0):!1}),n&&ne(n,a=>{const l=ee(a)?.onPointerOver;return l?(l({nativeEvent:o,object:a,point:qe.copy(r),stopPropagation:()=>{}}),!0):!1})}}function lr(e,t){for(const n of e){let o=!1;if(ne(n.object,r=>ee(r)?.onClick?(o=!0,!0):!1),o)return{kind:"interactive",object:n.object,point:n.point.clone(),index:n.index!==void 0?n.index:void 0,ndc:{x:t.x,y:t.y}}}return null}function cr(e,t,n,o){const r=e.pickAt(t,n);if(!r)return null;const a=r.node;let l=!1;return re(a,c=>te(c)?.onClick?(l=!0,!0):!1),l?{kind:"interactive",object:a,point:new E(r.point[0],r.point[1],r.point[2]),ndc:{x:o.x,y:o.y}}:null}function Yt(e,t){qt(e),je.set(t.x,t.y);const n=Q(e);return n.raycaster.setFromCamera(je,n.cameraThree),n.raycaster.intersectObjects(Kt(e),!0)}function Jt(e,t,n,o){if(n.button!==0)return;const r=e.pickAt(n.clientX,n.clientY);if(!r){if(he(n,t))return;o();return}const a=r.node,l=new E(r.point[0],r.point[1],r.point[2]);let c=!1,p=!1;const i={nativeEvent:n,object:a,point:l,index:void 0,stopPropagation:()=>{c=!0}};re(a,u=>{const d=te(u)?.onClick;return d?(p=!0,d(i),c):!1}),!p&&(he(n,t)||o())}function ur(e,t,n,o){if(e.engineKind==="babylon"){Jt(e,t,n,o);return}if(n.button!==0)return;const r={x:0,y:0};$t(n.clientX,n.clientY,t,r);const a=Yt(e,r);if(a.length===0){if(he(n,t))return;o();return}for(const l of a){let c=!1,p=!1;const i={nativeEvent:n,object:l.object,point:Gt.copy(l.point),index:(l.index!==void 0,l.index),stopPropagation:()=>{c=!0}};if(ne(l.object,u=>{const d=ee(u)?.onClick;return d?(p=!0,d(i),c):!1}),p)return}he(n,t)||o()}function fr(e){const t=e.replace(/^#/,""),n=parseInt(t,16);return Number.isFinite(n)?[Math.floor(n/65536)%256,Math.floor(n/256)%256,n%256]:[0,0,0]}function Zt(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function dr(e){return Math.max(0,Math.min(255,Math.round(e)))}function ce(e,t=1,n=1){const[o,r,a]=Zt(e),l=Math.max(.15,Math.min(1,t));return[o*l,r*l,a*l,n]}var $={star1:ce("#fff3a8",1),star2:ce("#f5c238",1),star3:ce("#e07b1a",1),star4:ce("#a8380c",1)},en="/assets/starfield.worker-DeoSgUe7.js";function rt(e){return e==="countdown"||e==="active"||e==="complete"}function tn(e,t,n,o){if(!o||!rt(t)||n.length===0)return e;const r=new Set(n);return e.filter(a=>a.catalogId!=null&&r.has(a.catalogId))}function nn(e,t,n){return!n||!rt(t)?e:e||t==="countdown"}var rn=256,on=320,an=`
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
`,sn=`
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
`,ln=`
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
`;function ot(e){const t=new oe({uniforms:{uScale:{value:1},uPointSizeMax:{value:e?.pointSizeMax??rn},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uMinScreenPx:{value:e?.minScreenPx??0},uMaxScreenPx:{value:e?.maxScreenPx??0},uPaletteHot:{value:new me(1,.78,.56)},uPaletteFlare:{value:new me(1,.92,.75)}},vertexShader:an,fragmentShader:e?.useHaloShader?ln:sn,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),n=new Ye;return t.onBeforeRender=(o,r,a)=>{const l=a;l.isPerspectiveCamera&&l.fov&&(o.getSize(n),t.uniforms.uScale.value=n.y/(2*Math.tan(l.fov*Math.PI/360)))},t}function cn(){return ot({twinkleAmp:.03,twinkleFreq:.9})}function un(){return ot({useHaloShader:!0,sizeMultiplier:1.6,minScreenPx:2.1,maxScreenPx:5.2,pointSizeMax:on,twinkleAmp:.02,twinkleFreq:.55})}var Fe=4,pr=64*Fe,fn=-25,dn=500,pn=.01;function at(e){return Math.max(0,Math.min(1,e))}function mn(e){return e?.size!=null&&Number.isFinite(e.size)?at(e.size):.5}function hn(e){return .08+.76*at((e-.99)/.01)**3}function mr(e){return(e?wt(e,Ze(e)):Je)*hn(mn(e))*Fe}function ke(e,t){let n=t;for(;e[n]!==n;)n=e[n];let o=t;for(;o!==n;){const r=e[o];e[o]=n,o=r}return n}function vn(e,t,n){const o=ke(e,t),r=ke(e,n);o!==r&&(e[o]=r)}function Ke(e,t,n){return`${e},${t},${n}`}function Sn(e,t){const n=e.length,o=Array.from({length:n},(i,u)=>u),r=t,a=new Map;for(let i=0;i<n;i+=1){const u=e[i],d=Ke(Math.floor(u.x/r),Math.floor(u.y/r),Math.floor(u.z/r));a.has(d)||a.set(d,[]),a.get(d).push(i)}const l=t*t;for(let i=0;i<n;i+=1){const u=e[i],d=Math.floor(u.x/r),h=Math.floor(u.y/r),S=Math.floor(u.z/r);for(let x=-1;x<=1;x+=1)for(let M=-1;M<=1;M+=1)for(let T=-1;T<=1;T+=1){const P=Ke(d+x,h+M,S+T),w=a.get(P);if(w)for(const v of w){if(v<=i)continue;const b=e[v],R=b.x-u.x,N=b.y-u.y,O=b.z-u.z;R*R+N*N+O*O<l&&vn(o,i,v)}}}const c=new Map;for(let i=0;i<n;i+=1){const u=ke(o,i);c.has(u)||c.set(u,[]),c.get(u).push(i)}const p=[];for(let i=0;i<n;i+=1)p.push(void 0);for(const i of c.values())i.length<=1||(i.sort((u,d)=>u-d),i.forEach((u,d)=>{d>0&&(p[u]={x:0,y:d*fn})}));return p}function yn(){const e=[];for(let t=0;t<dn;t+=1){const n=gt(t*.7%360,t*.3%180-90);n!=null&&e.push(n)}return e}function gn(){const e=yn(),t=e.length,n=zt,o=new Float32Array(t*3);return e.forEach((r,a)=>{o[a*3]=r.x*n,o[a*3+1]=r.y*n,o[a*3+2]=r.z*n}),{abbr:"_bootstrap",positions:o,sizes:new Float32Array(t).fill(Je*Fe),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(pn),brightness:new Float32Array(t).fill(1),starsInChunk:[]}}var xn={raMin:0,raMax:360,decMin:-90,decMax:90},bn={chunks:[],namedStarsInView:[]};function Cn(e,t){return e===0&&t!=="success"}function st(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[gn()]:[]}function hr(e,t){const n=st(e,t),o=n.slice(0,3).map(r=>r.abbr).join(",");return n.length===0?{syntheticKind:"empty",chunkAbbrevSample:o}:n.length===1&&n[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:o}:n.some(r=>r.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:o}:{syntheticKind:"real",chunkAbbrevSample:o}}function Ge(e,t){return t.current===e.current}function Pn(e,t,n,o,r){e.onerror=a=>{Ge(t,n)||(o("error"),r(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{Ge(t,n)||(o("error"),r("Starfield worker message error"))}}function wn(e,t,n,o,r,a,l){const{runId:c,...p}=e;c===t.current&&(n.current=c,o.current=p.starsInView,r({chunks:p.chunks,namedStarsInView:p.namedStarsInView}),a("ready"),l(null))}function Mn(e,t,n,o,r){e.processStarfield({runId:t,catalog:n,maxDistanceLevel:o,bounds:xn,raInHours:!1}).then(a=>{wn(a,r.runIdRef,r.lastSuccessfulRunIdRef,r.starsInViewRef,r.setStarData,r.setStarfieldStatus,r.setErrorMessage)}).catch(a=>{t===r.runIdRef.current&&(r.setStarfieldStatus("error"),r.setErrorMessage(a instanceof Error?a.message:"Starfield worker failed"))})}function Tn(e,t,n=48){const o=[];for(let l=0;l<t.length;l+=1){const c=t[l];if(!Dt(c.position,e.position,e.forward,e.right,e.up,e.fovYRadians,e.aspect))continue;const p=c.position.x-e.position.x,i=c.position.y-e.position.y,u=c.position.z-e.position.z,d=p*p+i*i+u*u;o.push({entry:c,distSq:d,index:l})}o.sort((l,c)=>l.distSq!==c.distSq?l.distSq-c.distSq:l.index-c.index);const r=o.slice(0,n).map(l=>l.entry),a=Sn(r.map(l=>l.position),10);return r.map((l,c)=>({...l,labelOffset:a[c]}))}function _n(e,t){return`translate(${e}px, ${t}px) translate(-50%, calc(-100% - 8px))`}function kn(e){return e.map(t=>`${t.name}\0${t.position.x.toFixed(4)},${t.position.y.toFixed(4)},${t.position.z.toFixed(4)}\0${t.labelOffset?.x??""},${t.labelOffset?.y??""}`).join("|")}function Fn(e){const t=document.createElement("div");t.style.position="absolute",t.style.left="0",t.style.top="0",t.style.width="100%",t.style.height="100%",t.style.pointerEvents="none",e.appendChild(t);let n="",o=[],r=[];function a(){t.replaceChildren(),o=[],r=[],n=""}function l(c){t.replaceChildren(),o=[],r=c;for(const{position:p,name:i,labelOffset:u}of c){const d=document.createElement("div");d.className="star-label-wrapper",d.style.position="absolute",d.style.left="0",d.style.top="0",d.style.pointerEvents="none";const h=document.createElement("span");h.className="star-label",h.textContent=i,d.appendChild(h),t.appendChild(d),o.push({wrap:d,span:h})}}return{container:t,get lastSig(){return n},set lastSig(c){n=c},get rowEls(){return o},get currentRows(){return r},clearRows:a,rebuildRows:l}}function En(e,t,n){const o=n,r=Fn(o),a={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},l=new E,c=new E,p=new E,i=new E;return{onFrame:()=>{const d=t.getEnabled(),h=t.getNamedStarsInView(),{size:S}=e;if(!d){r.lastSig!==""&&r.clearRows();return}const x=Q(e).cameraThree;if(!x.isPerspectiveCamera)return;nt(x,a,l,c,p);const M=Tn(a,h),T=kn(M);T!==r.lastSig&&(r.lastSig=T,r.rebuildRows(M));for(let P=0;P<r.currentRows.length;P+=1){const w=r.currentRows[P],v=r.rowEls[P]?.wrap;if(!v)continue;if(i.set(w.position.x,w.position.y,w.position.z),tt(i,ve.current,!0),i.project(x),!(Number.isFinite(i.x)&&Number.isFinite(i.y)&&Number.isFinite(i.z)&&Math.abs(i.x)<=1&&Math.abs(i.y)<=1&&i.z>=-1&&i.z<=1)){v.style.display="none";continue}v.style.display="";const b=(i.x*.5+.5)*S.width+(w.labelOffset?.x??0),R=(-i.y*.5+.5)*S.height+(w.labelOffset?.y??0);v.style.transform=_n(b,R)}},dispose:()=>{r.clearRows(),r.container.parentNode===o&&o.removeChild(r.container)}}}var it=null;function vr(e){it=e}function Rn(){return it?.current??{}}var An=1495978707e-1,zn=1e3;function In(e){if(!Number.isFinite(e)||e<0)return"";if(e<1e5){const n=e/Et;if(n<.001){const o=n*An;return o<1?`${o.toFixed(3)} km`:o<1e3?`${o.toFixed(0)} km`:`${(o/1e3).toFixed(1)} Mm`}return n<1?`${n.toFixed(3)} AU`:n<100?`${n.toFixed(2)} AU`:`${n.toFixed(0)} AU`}const t=et(e);return t<.01?`${t.toFixed(4)} pc`:t<1?`${t.toFixed(3)} pc`:t<100?`${t.toFixed(2)} pc`:`${t.toFixed(0)} pc`}function Nn(e,t){const n=document.createElement("div");n.className="selected-body-label-wrapper",n.style.position="absolute",n.style.left="0",n.style.top="0",n.style.pointerEvents="none";const o=document.createElement("span");o.className="selected-body-label",n.appendChild(o),t.appendChild(n);const r=document.createElement("div");r.className="selected-body-callout-wrapper";const a=document.createElement("div");a.className="selected-body-callout__ring";const l=document.createElement("div");l.className="selected-body-callout__leader-v";const c=document.createElement("div");c.className="selected-body-callout__leader-h";const p=document.createElement("div");p.className="selected-body-callout__name";const i=document.createElement("div");i.className="selected-body-callout__distance",r.append(a,l,c,p,i),t.appendChild(r);let u=!1,d=!1;const h=m=>{m!==u&&(u=m,n.style.display=m?"":"none")},S=m=>{m!==d&&(d=m,r.style.display=m?"":"none")};h(!1),S(!1);const x=de().getState().selection,M={id:x.selectedId,name:x.selectedName},T=de().subscribeSelector(m=>m.selection.selectedId,m=>{M.id=m}),P=de().subscribeSelector(m=>m.selection.selectedName,m=>{M.name=m}),w=new E,v=new E;let b="",R=0;function N(m,_){if(m==="hor"){const C=Rn()[_];return C?{pos:{x:C[0],y:C[1],z:C[2]},isSolar:!0}:null}if(m==="hyg"){const C=xt();if(C.length===0)return null;const D=kt(C).get(_);return D?{pos:Pt(D),isSolar:!1}:null}const A=[...Bt(),...Ot()];if(A.length===0)return null;const k=Lt(A).get(_);return k?{pos:Mt(k),isSolar:!1}:null}return{onFrame:()=>{const{id:m,name:_}=M;if(!m||!_){h(!1),S(!1);return}let A;try{A=It(m)}catch{h(!1),S(!1);return}const k=N(A.source,A.rawId);if(!k){h(!1),S(!1);return}const C=Q(e).cameraThree;if(!C.isPerspectiveCamera){h(!1),S(!1);return}if(w.set(k.pos.x,k.pos.y,k.pos.z),tt(w,ve.current,!0),v.copy(w).project(C),!(Number.isFinite(v.x)&&Number.isFinite(v.y)&&Number.isFinite(v.z)&&Math.abs(v.x)<=1&&Math.abs(v.y)<=1&&v.z>=-1&&v.z<=1)){h(!1),S(!1);return}const{size:D}=e,z=(v.x*.5+.5)*D.width,I=(-v.y*.5+.5)*D.height;if(k.isSolar){o.textContent!==_&&(o.textContent=_),n.style.transform=`translate(${z}px, ${I}px) translate(-50%, -50%)`,h(!0),S(!1);return}p.textContent!==_&&(p.textContent=_),r.style.transform=`translate(${z}px, ${I}px)`;const B=performance.now();if(B-R>=zn||b===""){const H=In(w.distanceTo(C.position));H!==b&&(b=H,i.textContent=H),R=B}h(!1),S(!0)},dispose:()=>{T(),P(),n.parentNode===t&&t.removeChild(n),r.parentNode===t&&t.removeChild(r)}}}var Dn=3;function Ln(e,t,n){return Math.max(t,Math.min(n,e))}function lt(e,t,n,o=1,r=256){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)||!Number.isFinite(r)||t<=0||e<=0||o<=0||r<=0)return 0;const a=e*(n/t);return a<=0?0:Ln(a*o,0,r)}function Wn(e,t,n){const o=lt(e,t,n);if(o<=0)return 0;const r=o*.5+Dn;return Math.min(r,256)}function On(e,t,n,o){const r=Math.sqrt(e*e+t*t+n*n);if(r<=0||!Number.isFinite(r)){o.x=0,o.y=0,o.z=0;return}const a=et(r)/r;o.x=e*a,o.y=t*a,o.z=n*a}function Bn(e,t,n,o,r,a,l,c){const p=Math.sqrt(e*e+t*t+n*n);if(p<=0||!Number.isFinite(p)||!Number.isFinite(o)){const S=-r,x=-a,M=-l;return S*S+x*x+M*M<=c}const i=o/p,u=e*i-r,d=t*i-a,h=n*i-l;return u*u+d*d+h*h<=c}var Pe=new E,we=new E;function Hn(e,t,n,o,r,a,l,c,p,i,u,d,h,S){const x=n.getBoundingClientRect(),M=e-x.left,T=t-x.top,P=Number.isFinite(o.fov)&&o.fov>0?x.height/(2*Math.tan(o.fov*Math.PI/360)):0,w=Math.min(p,a.length/3,l.length,c.length);let v=null;for(let b=0;b<w;b+=1){const R=b*3,N=a[R],O=a[R+1],m=a[R+2];if(!Bn(N,O,m,c[b]??0,d.x,d.y,d.z,h))continue;const _=N-i.position.x,A=O-i.position.y,k=m-i.position.z,C=_*i.forward.x+A*i.forward.y+k*i.forward.z;if(C<=1e-6)continue;const D=_*i.right.x+A*i.right.y+k*i.right.z,z=_*i.up.x+A*i.up.y+k*i.up.z,I=u*i.aspect*C;if(Math.abs(D)>I)continue;const B=u*C;if(Math.abs(z)>B)continue;const H=C,Se=l[b],Ee=lt(Se,H,P),Y=Wn(Se,H,P);if(Y<=0)continue;Pe.set(N,O,m),Pe.applyMatrix4(r.matrixWorld),we.copy(Pe).project(o);const ye=(we.x*.5+.5)*x.width,ge=(-we.y*.5+.5)*x.height,J=ye-M,q=ge-T,K=J*J+q*q;if(K>Y*Y)continue;const ae={index:b,distSqPx:K,depthCam:H,renderedPx:Ee};S(ae,v)&&(v=ae)}return v}function ue(){const e=de().getState(),t=Ct.getState().session.gameStarted,n=(e.camera.visitId!=null||e.camera.watchId!=null)&&e.camera.autoWatch;return e.playing||n||t}var W={chunks:[],pointsMeshes:[],starsInView:[]},X={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},Vn=new E,Un=new E,jn=new E,Xe={x:0,y:0,z:0};function Qe(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function Sr(){return W}function yr(e,t){const n=_t();function o(){return n.getQueryData(["hyg-catalog"])?.stars??[]}const r=Q(e),a=r.layers.starfield,l=t,c={current:[]},p={current:null},i={current:null},u={current:0},d={current:-1};let h=bn,S="idle",x=null;const M=s=>{h=typeof s=="function"?s(h):s,b(),q(),ue()||e.invalidate()},T=s=>{S=typeof s=="function"?s(S):s,xe(),q(),ue()||e.invalidate()},P=s=>{x=typeof s=="function"?s(x):s,xe()},w={current:[]},v={current:!1},b=()=>{const s=Be.getState(),f=s.phase,{c2TourOrder:y}=s,g=Ve.getState().appMode==="time-trial",{showStarNames:F}=Ce.getState(),{namedStarsInView:L}=h;w.current=tn(L,f,y,g),v.current=nn(F,f,g)};b();const R=En(e,{getNamedStarsInView:()=>w.current,getEnabled:()=>v.current&&!bt(Rt.getState().stack)},t),N=Nn(e,t),O={runIdRef:u,lastSuccessfulRunIdRef:d,starsInViewRef:c,setStarData:M,setStarfieldStatus:T,setErrorMessage:P},m=[],_=[],A=[],k=[],C=[],D=[];let z=null,I=null,B=0;const H=new mt,Se=new ht,Ee=new yt;function Y(s,f,y,g){const{chunks:F}=W;nt(g,X,Vn,Un,jn);const L=Math.tan(X.fovYRadians*.5);On(X.position.x,X.position.y,X.position.z,Xe);const U=500**2;let V=-1,G=null;for(let j=0;j<F.length;j+=1){const be=F[j],Ne=m[j],De=C[j],Le=D[j];if(!be||!Ne||!De||!Le)continue;const le=Hn(s,f,y,g,Ne,be.positions,Le,De,be.starsInChunk.length,X,L,Xe,U,Qe);!le||!Qe(le,G)||(G=le,V=k[j]+le.index)}return V}function ye(s,f){const y=c.current;if(y.length===0||!(f instanceof HTMLCanvasElement))return!1;const g=Y(s.clientX,s.clientY,f,r.cameraThree);if(g<0||g>=y.length)return!1;const F=y[g],L=F.proper??(F.hip!=null?`HIP ${F.hip}`:`Star ${F.id}`);return Ft.select(Wt("hyg",F.id),L,"star"),!0}function ge(s){const f=new St;return f.setAttribute("position",new Z(s.positions,3)),f.setAttribute("size",new Z(s.sizes,1)),f.setAttribute("color",new Z(s.colors,3)),f.setAttribute("warm",new Z(s.warm,1)),f.setAttribute("brightness",new Z(s.brightness,1)),f.computeBoundingSphere(),f}function J(){for(const s of m)a.remove(s);m.length=0,k.length=0,C.length=0,D.length=0;for(const s of _)a.remove(s);_.length=0;for(const s of A)s.dispose();A.length=0}function q(){if(J(),z==null||I==null){W.chunks=[],W.pointsMeshes=[],W.starsInView=c.current;return}const s=st(h,S);let f=0;for(const y of s){const g=ge(y);A.push(g),k.push(f);const F=new Float32Array(y.starsInChunk.length);for(let V=0;V<y.starsInChunk.length;V+=1){const G=y.starsInChunk[V];F[V]=G?Ze(G):0}C.push(F),D.push(new Float32Array(y.sizes));const L=new Oe(g,z);L.frustumCulled=!0,L.raycast=()=>{},a.add(L),m.push(L);const U=new Oe(g,I);U.frustumCulled=!0,U.renderOrder=1,a.add(U),_.push(U),f+=y.starsInChunk.length}W.chunks=s,W.pointsMeshes=m,W.starsInView=c.current}z=cn(),I=un();function K(){const s=i.current;if(!s)return;const f=n.getQueryState([He]),y=o();if(Cn(y.length,f?.status))return;T("loading"),u.current+=1;const g=u.current,{maxDistanceLevel:F}=Ce.getState();Mn(s,g,y,F,O)}const ae=()=>{P(null),T("loading"),K()};let se=[],ie=null;function Re(){ie?.abort(),ie=null;for(const s of se)l.removeChild(s);se=[]}function xe(){if(Re(),S==="loading"){const s=document.createElement("div");s.className="starfield-status starfield-status--loading",s.style.position="absolute",s.style.left="50%",s.style.top="50%",s.style.transform="translate(-50%, -50%)",s.style.pointerEvents="none";const f=document.createElement("span");f.className="starfield-status__text",f.textContent="Loading stars…",s.appendChild(f),l.appendChild(s),se.push(s)}else if(S==="error"){const s=document.createElement("div");s.className="starfield-status starfield-status--error",s.style.position="absolute",s.style.left="50%",s.style.top="50%",s.style.transform="translate(-50%, -50%)",s.style.pointerEvents="auto";const f=document.createElement("div");f.className="starfield-status__message";const y=document.createElement("span");y.className="starfield-status__text",y.textContent=x??"Failed to load stars",f.appendChild(y);const g=document.createElement("button");g.type="button",g.className="starfield-status__retry",g.textContent="Retry",ie=new AbortController,g.addEventListener("click",ae,{signal:ie.signal}),f.appendChild(g),s.appendChild(f),l.appendChild(s),se.push(s)}}const Ae=typeof window.Worker>"u",ze=window.Worker;if(ze){const s=new ze(en,{type:"module"});p.current=s,i.current=Tt(s),Pn(s,u,d,T,P)}else T("error"),P("Workers not supported");q(),ue()||e.invalidate(),xe();const ct=Xt((s,f)=>s.button!==0?!1:ye(s,f));function Ie(){const s=n.getQueryState([He]);if(s?.status==="error"){if(Ae)return;const f=s.error;T("error"),P(f instanceof Error?f.message:String(f));return}s?.status==="success"&&(Ae||P(null)),K()}Ie();const ut=Ce.subscribe(s=>({maxDistanceLevel:s.maxDistanceLevel,showStarNames:s.showStarNames}),(s,f)=>{b(),(f==null||s.maxDistanceLevel!==f.maxDistanceLevel)&&K()},{equalityFn:We}),ft=Be.subscribe(s=>({phase:s.phase,c2TourOrder:s.c2TourOrder,remainingC2StarIds:s.remainingC2StarIds}),()=>{b()},{equalityFn:We}),dt=Ve.subscribe((s,f)=>{const y=s.appMode==="time-trial",g=f!=null&&f.appMode==="time-trial";f!=null&&y===g||b()}),pt=n.getQueryCache().subscribe(s=>{Ht(s,"hyg-catalog")&&Ie()});return{onFrame:()=>{if(R.onFrame(),N.onFrame(),ue()){const s=Math.min(.06,r.timer.getDelta());B+=s,z?.uniforms.uTime&&(z.uniforms.uTime.value=B),I?.uniforms.uTime&&(I.uniforms.uTime.value=B)}},dispose:()=>{ut(),ft(),dt(),pt(),Re(),R.dispose(),N.dispose(),J(),z?.dispose(),z=null,I?.dispose(),I=null;const s=i.current;if(s)try{s[At]()}catch{}i.current=null,p.current?.terminate(),p.current=null,ct(),W.chunks=[],W.pointsMeshes=[],W.starsInView=[]}}}function fe(e){return new me(e[0],e[1],e[2])}function $n(){return{cool:fe($.star4),warm:fe($.star3),hot:fe($.star2),flare:fe($.star1)}}var qn=`
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
`,Kn=`
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
`;function gr(e){return e==null||Array.isArray(e)||!(e instanceof oe)?!1:e.userData.cosmosiveSunPhotosphere===!0}function xr(e,t){const n=$n(),o={cool:e?.cool??n.cool,warm:e?.warm??n.warm,hot:e?.hot??n.hot,flare:e?.flare??n.flare},r={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:o.cool.clone()},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},a=new oe({uniforms:r,vertexShader:qn,fragmentShader:Kn,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var Gn=`
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
`,Xn=`
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
`;function Me(e){return new me(e[0],e[1],e[2])}function Qn(){return{warm:Me($.star3),hot:Me($.star2),flare:Me($.star1)}}function br(e){return e==null||Array.isArray(e)||!(e instanceof oe)?!1:e.userData.cosmosiveSunCorona===!0}function Cr(e){const t=Qn(),n={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},o={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:n.warm.clone()},uPaletteHot:{value:n.hot.clone()},uPaletteFlare:{value:n.flare.clone()}},r=new oe({uniforms:o,vertexShader:Gn,fragmentShader:Xn,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return r.userData.cosmosiveSunCorona=!0,r}export{Zt as A,or as B,tn as C,ce as D,$ as E,lr as F,rr as H,Yt as I,Xt as L,ir as M,$t as N,dr as O,cr as P,ur as R,mr as S,en as T,nr as U,nt as V,ve as W,hr as _,Sr as a,Cn as b,Bn as c,vr as d,Fn as f,bn as g,Tn as h,gr as i,sr as j,fr as k,Wn as l,_n as m,br as n,yr as o,kn as p,xr as r,On as s,Cr as t,lt as u,Mn as v,nn as w,st as x,Pn as y,ar as z};
