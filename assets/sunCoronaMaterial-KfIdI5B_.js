import{n as ot}from"./state-data-vendor-XiC-QsZD.js";import{Ht as H,Rt as Mt}from"./babylon-postprocess-vendor-BBh1ALWr.js";import{$ as Ge,V as Ft,bt as at,dt as Tt,o as ie,p as Me,s as _t,ut as de,w as Et,xt as T,z as Rt}from"./three-vendor-jA1PqwyJ.js";import{$ as Ye,$a as zt,$t as kt,Cn as At,Ja as Nt,La as Ie,Sn as it,So as It,Vt as st,Wi as Dt,Ya as lt,_o as Lt,a as Wt,an as Ot,bt as Ht,co as Bt,eo as Vt,fo as jt,gt as Ut,ht as $t,ia as ct,lt as qt,na as Fe,nn as ut,on as Kt,pa as Ce,qa as Gt,tn as Yt,vo as Xt,wn as Qt,xo as Jt}from"./index-BO1Q6nJz.js";import{n as G,t as Zt}from"./queryCacheNotify-B0lf7FY_.js";var Oe=new WeakMap;function kr(e,t){Oe.set(e,t)}function Ar(e){Oe.delete(e)}function ft(e){if(e.engineKind!=="babylon")throw new Error("asBabylon: SceneHost is not a Babylon implementation");const t=Oe.get(e);if(!t)throw new Error("asBabylon: missing Babylon extras (host not fully initialized?)");return t}var _e={current:null};function en(e,t,n){return n&&t&&It(e,t.position.x,t.position.y,t.position.z),e}function dt(e,t,n){if(n&&t){const o=e;o.x+=t.position.x,o.y+=t.position.y,o.z+=t.position.z}return e}function tn(e,t){return e.getWorldPosition(t),en(t,_e.current,!0),t}function nn(e,t,n,o,r){e.updateMatrixWorld(!0),e.getWorldPosition(n),t.position.x=n.x,t.position.y=n.y,t.position.z=n.z,e.getWorldDirection(n),o.setFromMatrixColumn(e.matrixWorld,0).normalize(),r.setFromMatrixColumn(e.matrixWorld,1).normalize(),t.forward.x=n.x,t.forward.y=n.y,t.forward.z=n.z,t.right.x=o.x,t.right.y=o.y,t.right.z=o.z,t.up.x=r.x,t.up.y=r.y,t.up.z=r.z,t.fovYRadians=Rt.degToRad(e.fov),t.aspect=e.aspect}function pt(e,t,n,o,r){nn(e,t,n,o,r);{const a=_e.current;a&&(t.position.x-=a.position.x,t.position.y-=a.position.y,t.position.z-=a.position.z)}}function rn(e){const t=G(e).cameraThree,n=new T,o=new T,r=new T;return{syncFrustumHeliocentric(a){pt(t,a,n,o,r)}}}var on=new H(0,0,-1),an=new H(1,0,0),sn=new H(0,1,0),ve=new H,ye=new H,ge=new H,Se=new H;function ln(e,t,n){e.computeWorldMatrix(),e.getWorldMatrix().getTranslationToRef(ve),n.position.x=ve.x,n.position.y=ve.y,n.position.z=ve.z;{const[r,a,i]=t.getFloatingOrigin();n.position.x+=r,n.position.y+=a,n.position.z+=i}e.getDirectionToRef(on,ye),e.getDirectionToRef(an,ge),e.getDirectionToRef(sn,Se),n.forward.x=ye.x,n.forward.y=ye.y,n.forward.z=ye.z,n.right.x=ge.x,n.right.y=ge.y,n.right.z=ge.z,n.up.x=Se.x,n.up.y=Se.y,n.up.z=Se.z,n.fovYRadians=e.fov;const o=e.getEngine();n.aspect=o.getRenderWidth()/Math.max(1,o.getRenderHeight())}function cn(e){const{cameraBabylon:t}=ft(e);return{syncFrustumHeliocentric(n){ln(t,e,n)}}}function un(e){return e.engineKind==="babylon"?cn(e):rn(e)}var fn=()=>({starfieldChunksTotal:0,starfieldChunksVisible:0,starfieldVerticesTotal:0,starfieldPipelineStatus:"idle",starfieldSyntheticKind:"empty",starfieldChunkAbbrevSample:"",shipsCandidates:0,shipsRendered:0,combatShotsTracerEnemySlots:0,combatShotsConquestCandidates:0,combatShotsConquestPassedFrustum:0,updatedAtMs:0}),Xe=fn();function Nr(e){}typeof globalThis.window<"u";var De="__cosmosivePointer",Le=new WeakMap;function Ir(e,t){t==null?delete e.userData[De]:e.userData[De]=t}function le(e){return e.userData[De]}function Dr(e,t){t==null?Le.delete(e):Le.set(e,t)}function ce(e){return Le.get(e)}var Qe=new at;function dn(e,t,n,o){const r=n.getBoundingClientRect();o.x=(e-r.left)/r.width*2-1,o.y=-((t-r.top)/r.height)*2+1}function pn(e){const t=G(e);t.scene.updateMatrixWorld(!0);const n=t.gl.domElement,o=t.cameraThree,r=n.clientWidth/Math.max(1,n.clientHeight);Number.isFinite(r)&&Math.abs(o.aspect-r)>1e-6&&(o.aspect=r,o.updateProjectionMatrix()),o.updateMatrixWorld(!0)}function mn(e){return G(e).scene.children.filter(t=>t.visible!==!1)}function ue(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent}return!1}function fe(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent??null}return!1}var Je=new T,Ze=new T,hn=new T,Pe=[];function vn(e){return Pe.push(e),()=>{const t=Pe.indexOf(e);t>=0&&Pe.splice(t,1)}}function Te(e,t){for(const n of Pe)if(n(e,t))return!0;return!1}function yn(e,t,n,o,r){let a=!1;const i={nativeEvent:n,object:e,point:o,index:r,stopPropagation:()=>{a=!0}};fe(e,c=>{const f=ce(c)?.[t];return f?(f(i),a):!1})}function Lr(e,t,n,o,r,a){if(e.engineKind==="babylon"){yn(t,n,o,r,a);return}let i=!1;const c={nativeEvent:o,object:t,point:r,index:a,stopPropagation:()=>{i=!0}};ue(t,f=>{const l=le(f)?.[n];return l?(l(c),i):!1})}function Wr(e,t,n,o,r){if(t!==n){if(e.engineKind==="babylon"){t&&fe(t,a=>{const i=ce(a)?.onPointerOut;return i?(i({nativeEvent:o,object:a,point:Je,stopPropagation:()=>{}}),!0):!1}),n&&fe(n,a=>{const i=ce(a)?.onPointerOver;return i?(i({nativeEvent:o,object:a,point:Ze.copy(r),stopPropagation:()=>{}}),!0):!1});return}t&&ue(t,a=>{const i=le(a)?.onPointerOut;return i?(i({nativeEvent:o,object:a,point:Je,stopPropagation:()=>{}}),!0):!1}),n&&ue(n,a=>{const i=le(a)?.onPointerOver;return i?(i({nativeEvent:o,object:a,point:Ze.copy(r),stopPropagation:()=>{}}),!0):!1})}}function Or(e,t){for(const n of e){let o=!1;if(ue(n.object,r=>le(r)?.onClick?(o=!0,!0):!1),o)return{kind:"interactive",object:n.object,point:n.point.clone(),index:n.index!==void 0?n.index:void 0,ndc:{x:t.x,y:t.y}}}return null}function Hr(e,t,n,o){const r=e.pickAt(t,n);if(!r)return null;const a=r.node;let i=!1;return fe(a,c=>ce(c)?.onClick?(i=!0,!0):!1),i?{kind:"interactive",object:a,point:new T(r.point[0],r.point[1],r.point[2]),ndc:{x:o.x,y:o.y}}:null}function gn(e,t){pn(e),Qe.set(t.x,t.y);const n=G(e);return n.raycaster.setFromCamera(Qe,n.cameraThree),n.raycaster.intersectObjects(mn(e),!0)}function Sn(e,t,n,o){if(n.button!==0)return;const r=e.pickAt(n.clientX,n.clientY);if(!r){if(Te(n,t))return;o();return}const a=r.node,i=new T(r.point[0],r.point[1],r.point[2]);let c=!1,f=!1;const l={nativeEvent:n,object:a,point:i,index:void 0,stopPropagation:()=>{c=!0}};fe(a,u=>{const d=ce(u)?.onClick;return d?(f=!0,d(l),c):!1}),!f&&(Te(n,t)||o())}function Br(e,t,n,o){if(e.engineKind==="babylon"){Sn(e,t,n,o);return}if(n.button!==0)return;const r={x:0,y:0};dn(n.clientX,n.clientY,t,r);const a=gn(e,r);if(a.length===0){if(Te(n,t))return;o();return}for(const i of a){let c=!1,f=!1;const l={nativeEvent:n,object:i.object,point:hn.copy(i.point),index:(i.index!==void 0,i.index),stopPropagation:()=>{c=!0}};if(ue(i.object,u=>{const d=le(u)?.onClick;return d?(f=!0,d(l),c):!1}),f)return}Te(n,t)||o()}function Vr(e){const t=e.replace(/^#/,""),n=parseInt(t,16);return Number.isFinite(n)?[Math.floor(n/65536)%256,Math.floor(n/256)%256,n%256]:[0,0,0]}function xn(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function jr(e){return Math.max(0,Math.min(255,Math.round(e)))}function xe(e,t=1,n=1){const[o,r,a]=xn(e),i=Math.max(.15,Math.min(1,t));return[o*i,r*i,a*i,n]}var Z={star1:xe("#fff3a8",1),star2:xe("#f5c238",1),star3:xe("#e07b1a",1),star4:xe("#a8380c",1)};function bn(){const e=Ce().getState(),t=kt.getState().session.gameStarted,n=(e.camera.visitId!=null||e.camera.watchId!=null)&&e.camera.autoWatch;return e.playing||n||t}function wn(){const e=st.getState();return{ttPhase:e.phase,c2TourOrder:e.c2TourOrder,remainingC2StarIds:e.remainingC2StarIds,timeTrialStarNamesUi:ut.getState().appMode==="time-trial",showStarNames:Ie.getState().showStarNames}}function Cn(e){const t=st.subscribe(o=>({phase:o.phase,c2TourOrder:o.c2TourOrder,remainingC2StarIds:o.remainingC2StarIds}),()=>e(),{equalityFn:ot}),n=ut.subscribe((o,r)=>{const a=o.appMode==="time-trial",i=r!=null&&r.appMode==="time-trial";r!=null&&a===i||e()});return()=>{t(),n()}}var Pn="/assets/starfield.worker-DeoSgUe7.js";function mt(e){return e==="countdown"||e==="active"||e==="complete"}function Mn(e,t,n,o){if(!o||!mt(t)||n.length===0)return e;const r=new Set(n);return e.filter(a=>a.catalogId!=null&&r.has(a.catalogId))}function Fn(e,t,n){return!n||!mt(t)?e:e||t==="countdown"}var Tn=256,_n=320,En=`
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
`,Rn=`
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
`,zn=`
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
`;function ht(e){const t=new de({uniforms:{uScale:{value:1},uPointSizeMax:{value:e?.pointSizeMax??Tn},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uMinScreenPx:{value:e?.minScreenPx??0},uMaxScreenPx:{value:e?.maxScreenPx??0},uPaletteHot:{value:new Me(1,.78,.56)},uPaletteFlare:{value:new Me(1,.92,.75)}},vertexShader:En,fragmentShader:e?.useHaloShader?zn:Rn,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),n=new at;return t.onBeforeRender=(o,r,a)=>{const i=a;i.isPerspectiveCamera&&i.fov&&(o.getSize(n),t.uniforms.uScale.value=n.y/(2*Math.tan(i.fov*Math.PI/360)))},t}function kn(){return ht({twinkleAmp:.03,twinkleFreq:.9})}function An(){return ht({useHaloShader:!0,sizeMultiplier:1.6,minScreenPx:2.1,maxScreenPx:5.2,pointSizeMax:_n,twinkleAmp:.02,twinkleFreq:.55})}var He=4,Ur=64*He,Nn=-25,In=500,Dn=.01;function vt(e){return Math.max(0,Math.min(1,e))}function Ln(e){return e?.size!=null&&Number.isFinite(e.size)?vt(e.size):.5}function Wn(e){return .08+.76*vt((e-.99)/.01)**3}function $r(e){return(e?Nt(e,it(e)):lt)*Wn(Ln(e))*He}function We(e,t){let n=t;for(;e[n]!==n;)n=e[n];let o=t;for(;o!==n;){const r=e[o];e[o]=n,o=r}return n}function On(e,t,n){const o=We(e,t),r=We(e,n);o!==r&&(e[o]=r)}function et(e,t,n){return`${e},${t},${n}`}function Hn(e,t){const n=e.length,o=Array.from({length:n},(l,u)=>u),r=t,a=new Map;for(let l=0;l<n;l+=1){const u=e[l],d=et(Math.floor(u.x/r),Math.floor(u.y/r),Math.floor(u.z/r));a.has(d)||a.set(d,[]),a.get(d).push(l)}const i=t*t;for(let l=0;l<n;l+=1){const u=e[l],d=Math.floor(u.x/r),m=Math.floor(u.y/r),v=Math.floor(u.z/r);for(let y=-1;y<=1;y+=1)for(let C=-1;C<=1;C+=1)for(let x=-1;x<=1;x+=1){const E=et(d+y,m+C,v+x),N=a.get(E);if(N)for(const I of N){if(I<=l)continue;const b=e[I],R=b.x-u.x,w=b.y-u.y,A=b.z-u.z;R*R+w*w+A*A<i&&On(o,l,I)}}}const c=new Map;for(let l=0;l<n;l+=1){const u=We(o,l);c.has(u)||c.set(u,[]),c.get(u).push(l)}const f=[];for(let l=0;l<n;l+=1)f.push(void 0);for(const l of c.values())l.length<=1||(l.sort((u,d)=>u-d),l.forEach((u,d)=>{d>0&&(f[u]={x:0,y:d*Nn})}));return f}function Bn(){const e=[];for(let t=0;t<In;t+=1){const n=Gt(t*.7%360,t*.3%180-90);n!=null&&e.push(n)}return e}function Vn(){const e=Bn(),t=e.length,n=jt,o=new Float32Array(t*3);return e.forEach((r,a)=>{o[a*3]=r.x*n,o[a*3+1]=r.y*n,o[a*3+2]=r.z*n}),{abbr:"_bootstrap",positions:o,sizes:new Float32Array(t).fill(lt*He),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(Dn),brightness:new Float32Array(t).fill(1),starsInChunk:[]}}var jn={raMin:0,raMax:360,decMin:-90,decMax:90},Un={chunks:[],namedStarsInView:[]};function $n(e,t){return e===0&&t!=="success"}function yt(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[Vn()]:[]}function qr(e,t){const n=yt(e,t),o=n.slice(0,3).map(r=>r.abbr).join(",");return n.length===0?{syntheticKind:"empty",chunkAbbrevSample:o}:n.length===1&&n[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:o}:n.some(r=>r.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:o}:{syntheticKind:"real",chunkAbbrevSample:o}}function tt(e,t){return t.current===e.current}function qn(e,t,n,o,r){e.onerror=a=>{tt(t,n)||(o("error"),r(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{tt(t,n)||(o("error"),r("Starfield worker message error"))}}function Kn(e,t,n,o,r,a,i){const{runId:c,...f}=e;c===t.current&&(n.current=c,o.current=f.starsInView,r({chunks:f.chunks,namedStarsInView:f.namedStarsInView}),a("ready"),i(null))}function Gn(e,t,n,o,r){e.processStarfield({runId:t,catalog:n,maxDistanceLevel:o,bounds:jn,raInHours:!1}).then(a=>{Kn(a,r.runIdRef,r.lastSuccessfulRunIdRef,r.starsInViewRef,r.setStarData,r.setStarfieldStatus,r.setErrorMessage)}).catch(a=>{t===r.runIdRef.current&&(r.setStarfieldStatus("error"),r.setErrorMessage(a instanceof Error?a.message:"Starfield worker failed"))})}var L=new T;function Yn(e){const t=G(e);return{projectFromHeliocentric(n,o){const r=t.cameraThree,{size:a}=e;return L.set(n.x,n.y,n.z),dt(L,_e.current,!0),L.project(r),Number.isFinite(L.x)&&Number.isFinite(L.y)&&Number.isFinite(L.z)&&Math.abs(L.x)<=1&&Math.abs(L.y)<=1&&L.z>=-1&&L.z<=1?(o.x=(L.x*.5+.5)*a.width,o.y=(-L.y*.5+.5)*a.height,!0):!1}}}var be=new H;function Xn(e){const{scene:t,cameraBabylon:n,layers:o}=ft(e);return{projectFromHeliocentric(r,a){const i=t.getEngine();if(!i.getRenderingCanvas())return!1;const c=o.starfield.getWorldMatrix();be.set(r.x,r.y,r.z),H.TransformCoordinatesToRef(be,c,be);const f=n.viewport.toGlobal(i.getRenderWidth(),i.getRenderHeight()),l=t.getTransformMatrix(),u=H.Project(be,Mt.Identity(),l,f);return Number.isFinite(u.x)&&Number.isFinite(u.y)&&Number.isFinite(u.z)&&u.x>=f.x&&u.x<=f.x+f.width&&u.y>=f.y&&u.y<=f.y+f.height&&u.z>=0&&u.z<=1?(a.x=u.x,a.y=u.y,!0):!1}}}function Qn(e){return e.engineKind==="babylon"?Xn(e):Yn(e)}function Jn(e,t,n=48){const o=[];for(let i=0;i<t.length;i+=1){const c=t[i];if(!Jt(c.position,e.position,e.forward,e.right,e.up,e.fovYRadians,e.aspect))continue;const f=c.position.x-e.position.x,l=c.position.y-e.position.y,u=c.position.z-e.position.z,d=f*f+l*l+u*u;o.push({entry:c,distSq:d,index:i})}o.sort((i,c)=>i.distSq!==c.distSq?i.distSq-c.distSq:i.index-c.index);const r=o.slice(0,n).map(i=>i.entry),a=Hn(r.map(i=>i.position),10);return r.map((i,c)=>({...i,labelOffset:a[c]}))}function Zn(e,t){return`translate(${e}px, ${t}px) translate(-50%, calc(-100% - 8px))`}function er(e){return e.map(t=>`${t.name}\0${t.position.x.toFixed(4)},${t.position.y.toFixed(4)},${t.position.z.toFixed(4)}\0${t.labelOffset?.x??""},${t.labelOffset?.y??""}`).join("|")}function tr(e){const t=document.createElement("div");t.style.position="absolute",t.style.left="0",t.style.top="0",t.style.width="100%",t.style.height="100%",t.style.pointerEvents="none",e.appendChild(t);let n="",o=[],r=[];function a(){t.replaceChildren(),o=[],r=[],n=""}function i(c){t.replaceChildren(),o=[],r=c;for(const{position:f,name:l,labelOffset:u}of c){const d=document.createElement("div");d.className="star-label-wrapper",d.style.position="absolute",d.style.left="0",d.style.top="0",d.style.pointerEvents="none";const m=document.createElement("span");m.className="star-label",m.textContent=l,d.appendChild(m),t.appendChild(d),o.push({wrap:d,span:m})}}return{container:t,get lastSig(){return n},set lastSig(c){n=c},get rowEls(){return o},get currentRows(){return r},clearRows:a,rebuildRows:i}}function nr(e,t,n){const o=n,r=tr(o),a=un(e),i=Qn(e),c={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},f={x:0,y:0};return{onFrame:()=>{const u=t.getEnabled(),d=t.getNamedStarsInView();if(!u){r.lastSig!==""&&r.clearRows();return}a.syncFrustumHeliocentric(c);const m=Jn(c,d),v=er(m);v!==r.lastSig&&(r.lastSig=v,r.rebuildRows(m));for(let y=0;y<r.currentRows.length;y+=1){const C=r.currentRows[y],x=r.rowEls[y]?.wrap;if(!x)continue;if(!i.projectFromHeliocentric(C.position,f)){x.style.display="none";continue}x.style.display="";const E=f.x+(C.labelOffset?.x??0),N=f.y+(C.labelOffset?.y??0);x.style.transform=Zn(E,N)}},dispose:()=>{r.clearRows(),r.container.parentNode===o&&o.removeChild(r.container)}}}var gt=null;function Kr(e){gt=e}function rr(){return gt?.current??{}}var or=1495978707e-1,ar=1e3;function ir(e,t){const n=e.width,o=e.height,r=t.clientWidth,a=t.clientHeight;let i;Number.isFinite(n)&&n>0?i=n:Number.isFinite(r)?i=r:i=0;let c;return Number.isFinite(o)&&o>0?c=o:Number.isFinite(a)?c=a:c=0,!Number.isFinite(i)||!Number.isFinite(c)||i<=0||c<=0?null:{w:i,h:c}}function sr(e,t,n,o,r=28){return!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)?!1:e>=r&&t>=r&&e<=n-r&&t<=o-r}function lr(e){if(!Number.isFinite(e)||e<0)return"";const t=e/Bt;if(t<.001){const n=t*or;return n<1?`${n.toFixed(3)} km`:n<1e3?`${n.toFixed(0)} km`:`${(n/1e3).toFixed(1)} Mm`}return t<1?`${t.toFixed(3)} AU`:t<100?`${t.toFixed(2)} AU`:`${t.toFixed(0)} AU`}function cr(e){return!Number.isFinite(e)||e<0?"":e<.01?`${e.toFixed(4)} pc`:e<1?`${e.toFixed(3)} pc`:e<100?`${e.toFixed(2)} pc`:`${e.toFixed(0)} pc`}function ur(e,t){const n=document.createElement("div");n.className="selected-body-label-wrapper",n.style.position="absolute",n.style.left="0",n.style.top="0",n.style.pointerEvents="none",n.style.display="none";const o=document.createElement("span");o.className="selected-body-label",n.appendChild(o),t.appendChild(n);const r=document.createElement("div");r.className="selected-body-callout-wrapper",r.style.display="none";const a=document.createElement("div");a.className="selected-body-callout__ring";const i=document.createElement("div");i.className="selected-body-callout__leader-v";const c=document.createElement("div");c.className="selected-body-callout__leader-h";const f=document.createElement("div");f.className="selected-body-callout__name";const l=document.createElement("div");l.className="selected-body-callout__distance",r.append(a,i,c,f,l),t.appendChild(r);let u=!1,d=!1;const m=h=>{h!==u&&(u=h,n.style.display=h?"":"none")},v=h=>{h!==d&&(d=h,r.style.display=h?"":"none")},y=Ce().getState().selection,C={id:y.selectedId,name:y.selectedName},x=Ce().subscribeSelector(h=>h.selection.selectedId,h=>{C.id=h}),E=Ce().subscribeSelector(h=>h.selection.selectedName,h=>{C.name=h});let N=Fe();const I=ct(()=>{N=Fe(),e.invalidate()}),b=new T,R=new T,w=new T;let A="",B=0;function Y(h,P){if(h==="hor"){const F=rr()[P];return F?{pos:{x:F[0],y:F[1],z:F[2]},isSolar:!0}:null}if(h==="hyg"){const F=Dt();if(F.length===0)return null;const z=Kt(F).get(P);return z?{pos:At(z),isSolar:!1}:null}const D=[...Ht(),...qt()];if(D.length===0)return null;const M=Ot(D).get(P);return M?{pos:Qt(M),isSolar:!1}:null}return{onFrame:()=>{if(N){m(!1),v(!1);return}const{id:h,name:P}=C;if(!h||!P){m(!1),v(!1);return}let D;try{D=Lt(h)}catch{m(!1),v(!1);return}const M=Y(D.source,D.rawId);if(!M){m(!1),v(!1);return}const F=G(e).cameraThree;if(!F.isPerspectiveCamera){m(!1),v(!1);return}if(b.set(M.pos.x,M.pos.y,M.pos.z),dt(b,_e.current,!0),w.copy(b).project(F),!(Number.isFinite(w.x)&&Number.isFinite(w.y)&&Number.isFinite(w.z)&&Math.abs(w.x)<=1&&Math.abs(w.y)<=1&&w.z>=-1&&w.z<=1)){m(!1),v(!1);return}const z=G(e).gl.domElement,k=ir(e.size,z);if(k==null){m(!1),v(!1);return}const{w:V,h:ae}=k,q=(w.x*.5+.5)*V,ee=(-w.y*.5+.5)*ae;if(M.isSolar){o.textContent!==P&&(o.textContent=P),n.style.transform=`translate(${q}px, ${ee}px) translate(-50%, -50%)`,m(!0),v(!1);return}if(!sr(q,ee,V,ae)){m(!1),v(!1);return}f.textContent!==P&&(f.textContent=P),r.style.transform=`translate(${q}px, ${ee}px)`;const te=performance.now();if(te-B>=ar||A===""){tn(F,R);const j={x:R.x,y:R.y,z:R.z},X=Math.hypot(M.pos.x-j.x,M.pos.y-j.y,M.pos.z-j.z),U=X<1e5?lr(X):cr(zt(j,M.pos));U!==A&&(A=U,l.textContent=U),B=te}m(!1),v(!0)},dispose:()=>{x(),E(),I(),n.parentNode===t&&t.removeChild(n),r.parentNode===t&&t.removeChild(r)}}}var fr=3;function dr(e,t,n){return Math.max(t,Math.min(n,e))}function St(e,t,n,o=1,r=256){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)||!Number.isFinite(r)||t<=0||e<=0||o<=0||r<=0)return 0;const a=e*(n/t);return a<=0?0:dr(a*o,0,r)}function pr(e,t,n){const o=St(e,t,n);if(o<=0)return 0;const r=o*.5+fr;return Math.min(r,256)}function mr(e,t,n,o){const r=Math.sqrt(e*e+t*t+n*n);if(r<=0||!Number.isFinite(r)){o.x=0,o.y=0,o.z=0;return}const a=Vt(r)/r;o.x=e*a,o.y=t*a,o.z=n*a}function hr(e,t,n,o,r,a,i,c){const f=Math.sqrt(e*e+t*t+n*n);if(f<=0||!Number.isFinite(f)||!Number.isFinite(o)){const v=-r,y=-a,C=-i;return v*v+y*y+C*C<=c}const l=o/f,u=e*l-r,d=t*l-a,m=n*l-i;return u*u+d*d+m*m<=c}var ke=new T,Ae=new T;function vr(e,t,n,o,r,a,i,c,f,l,u,d,m,v){const y=n.getBoundingClientRect(),C=e-y.left,x=t-y.top,E=Number.isFinite(o.fov)&&o.fov>0?y.height/(2*Math.tan(o.fov*Math.PI/360)):0,N=Math.min(f,a.length/3,i.length,c.length);let I=null;for(let b=0;b<N;b+=1){const R=b*3,w=a[R],A=a[R+1],B=a[R+2];if(!hr(w,A,B,c[b]??0,d.x,d.y,d.z,m))continue;const Y=w-l.position.x,O=A-l.position.y,h=B-l.position.z,P=Y*l.forward.x+O*l.forward.y+h*l.forward.z;if(P<=1e-6)continue;const D=Y*l.right.x+O*l.right.y+h*l.right.z,M=Y*l.up.x+O*l.up.y+h*l.up.z,F=u*l.aspect*P;if(Math.abs(D)>F)continue;const z=u*P;if(Math.abs(M)>z)continue;const k=P,V=i[b],ae=St(V,k,E),q=pr(V,k,E);if(q<=0)continue;ke.set(w,A,B),ke.applyMatrix4(r.matrixWorld),Ae.copy(ke).project(o);const ee=(Ae.x*.5+.5)*y.width,te=(-Ae.y*.5+.5)*y.height,j=ee-C,X=te-x,U=j*j+X*X;if(U>q*q)continue;const ne={index:b,distSqPx:U,depthCam:k,renderedPx:ae};v(ne,I)&&(I=ne)}return I}function se(){return bn()}var W={chunks:[],pointsMeshes:[],starsInView:[]},oe={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},yr=new T,gr=new T,Sr=new T,nt={x:0,y:0,z:0};function rt(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function Gr(){return W}function Yr(e,t){const n=Wt();function o(){return n.getQueryData(["hyg-catalog"])?.stars??[]}const r=G(e),a=r.layers.starfield,i=t,c={current:[]},f={current:null},l={current:null},u={current:0},d={current:-1};let m=Un,v="idle",y=null;const C=s=>{m=typeof s=="function"?s(m):s,b(),ne(),se()||e.invalidate()},x=s=>{v=typeof s=="function"?s(v):s,Re(),ne(),se()||e.invalidate()},E=s=>{y=typeof s=="function"?s(y):s,Re()},N={current:[]},I={current:!1},b=()=>{const{ttPhase:s,c2TourOrder:p,timeTrialStarNamesUi:g,showStarNames:S}=wn(),{namedStarsInView:_}=m;N.current=Mn(_,s,p,g),I.current=Fn(S,s,g)};b();const R={current:Fe()},w=ct(()=>{R.current=Fe(),se()||e.invalidate()}),A=nr(e,{getNamedStarsInView:()=>N.current,getEnabled:()=>I.current&&!R.current},t),B=ur(e,t),Y={runIdRef:u,lastSuccessfulRunIdRef:d,starsInViewRef:c,setStarData:C,setStarfieldStatus:x,setErrorMessage:E},O=[],h=[],P=[],D=[],M=[],F=[];let z=null,k=null,V=0;const ae=new Ft,q=new Et,ee=new Tt;function te(s,p,g,S){const{chunks:_}=W;pt(S,oe,yr,gr,Sr);const $=Math.tan(oe.fovYRadians*.5);mr(oe.position.x,oe.position.y,oe.position.z,nt);const Q=500**2;let K=-1,re=null;for(let J=0;J<_.length;J+=1){const ze=_[J],$e=O[J],qe=M[J],Ke=F[J];if(!ze||!$e||!qe||!Ke)continue;const he=vr(s,p,g,S,$e,ze.positions,Ke,qe,ze.starsInChunk.length,oe,$,nt,Q,rt);!he||!rt(he,re)||(re=he,K=D[J]+he.index)}return K}function j(s,p){const g=c.current;if(g.length===0||!(p instanceof HTMLCanvasElement))return!1;const S=te(s.clientX,s.clientY,p,r.cameraThree);if(S<0||S>=g.length)return!1;const _=g[S],$=_.proper??(_.hip!=null?`HIP ${_.hip}`:`Star ${_.id}`);return Yt.select(Xt("hyg",_.id),$,"star"),!0}function X(s){const p=new _t;return p.setAttribute("position",new ie(s.positions,3)),p.setAttribute("size",new ie(s.sizes,1)),p.setAttribute("color",new ie(s.colors,3)),p.setAttribute("warm",new ie(s.warm,1)),p.setAttribute("brightness",new ie(s.brightness,1)),p.computeBoundingSphere(),p}function U(){for(const s of O)a.remove(s);O.length=0,D.length=0,M.length=0,F.length=0;for(const s of h)a.remove(s);h.length=0;for(const s of P)s.dispose();P.length=0}function ne(){if(U(),z==null||k==null){W.chunks=[],W.pointsMeshes=[],W.starsInView=c.current;return}const s=yt(m,v);let p=0;for(const g of s){const S=X(g);P.push(S),D.push(p);const _=new Float32Array(g.starsInChunk.length);for(let K=0;K<g.starsInChunk.length;K+=1){const re=g.starsInChunk[K];_[K]=re?it(re):0}M.push(_),F.push(new Float32Array(g.sizes));const $=new Ge(S,z);$.frustumCulled=!0,$.raycast=()=>{},a.add($),O.push($);const Q=new Ge(S,k);Q.frustumCulled=!0,Q.renderOrder=1,a.add(Q),h.push(Q),p+=g.starsInChunk.length}W.chunks=s,W.pointsMeshes=O,W.starsInView=c.current}z=kn(),k=An();function Ee(){const s=l.current;if(!s)return;const p=n.getQueryState([Ye]),g=o();if($n(g.length,p?.status))return;x("loading"),u.current+=1;const S=u.current,{maxDistanceLevel:_}=Ie.getState();Gn(s,S,g,_,Y)}const xt=()=>{E(null),x("loading"),Ee()};let pe=[],me=null;function Be(){me?.abort(),me=null;for(const s of pe)i.removeChild(s);pe=[]}function Re(){if(Be(),v==="loading"){const s=document.createElement("div");s.className="starfield-status starfield-status--loading",s.style.position="absolute",s.style.left="50%",s.style.top="50%",s.style.transform="translate(-50%, -50%)",s.style.pointerEvents="none";const p=document.createElement("span");p.className="starfield-status__text",p.textContent="Loading stars…",s.appendChild(p),i.appendChild(s),pe.push(s)}else if(v==="error"){const s=document.createElement("div");s.className="starfield-status starfield-status--error",s.style.position="absolute",s.style.left="50%",s.style.top="50%",s.style.transform="translate(-50%, -50%)",s.style.pointerEvents="auto";const p=document.createElement("div");p.className="starfield-status__message";const g=document.createElement("span");g.className="starfield-status__text",g.textContent=y??"Failed to load stars",p.appendChild(g);const S=document.createElement("button");S.type="button",S.className="starfield-status__retry",S.textContent="Retry",me=new AbortController,S.addEventListener("click",xt,{signal:me.signal}),p.appendChild(S),s.appendChild(p),i.appendChild(s),pe.push(s)}}const Ve=typeof window.Worker>"u",je=window.Worker;if(je){const s=new je(Pn,{type:"module"});f.current=s,l.current=Ut(s),qn(s,u,d,x,E)}else x("error"),E("Workers not supported");ne(),se()||e.invalidate(),Re();const bt=vn((s,p)=>s.button!==0?!1:j(s,p));function Ue(){const s=n.getQueryState([Ye]);if(s?.status==="error"){if(Ve)return;const p=s.error;x("error"),E(p instanceof Error?p.message:String(p));return}s?.status==="success"&&(Ve||E(null)),Ee()}Ue();const wt=Ie.subscribe(s=>({maxDistanceLevel:s.maxDistanceLevel,showStarNames:s.showStarNames}),(s,p)=>{b(),(p==null||s.maxDistanceLevel!==p.maxDistanceLevel)&&Ee()},{equalityFn:ot}),Ct=Cn(b),Pt=n.getQueryCache().subscribe(s=>{Zt(s,"hyg-catalog")&&Ue()});return{onFrame:()=>{if(A.onFrame(),B.onFrame(),se()){const s=Math.min(.06,r.timer.getDelta());V+=s,z?.uniforms.uTime&&(z.uniforms.uTime.value=V),k?.uniforms.uTime&&(k.uniforms.uTime.value=V)}},dispose:()=>{wt(),Ct(),Pt(),w(),Be(),A.dispose(),B.dispose(),U(),z?.dispose(),z=null,k?.dispose(),k=null;const s=l.current;if(s)try{s[$t]()}catch{}l.current=null,f.current?.terminate(),f.current=null,bt(),W.chunks=[],W.pointsMeshes=[],W.starsInView=[]}}}function we(e){return new Me(e[0],e[1],e[2])}function xr(){return{cool:we(Z.star4),warm:we(Z.star3),hot:we(Z.star2),flare:we(Z.star1)}}var br=`
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
`,wr=`
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
`;function Xr(e){return e==null||Array.isArray(e)||!(e instanceof de)?!1:e.userData.cosmosiveSunPhotosphere===!0}function Qr(e,t){const n=xr(),o={cool:e?.cool??n.cool,warm:e?.warm??n.warm,hot:e?.hot??n.hot,flare:e?.flare??n.flare},r={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:o.cool.clone()},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},a=new de({uniforms:r,vertexShader:br,fragmentShader:wr,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var Cr=`
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
`,Pr=`
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
`;function Ne(e){return new Me(e[0],e[1],e[2])}function Mr(){return{warm:Ne(Z.star3),hot:Ne(Z.star2),flare:Ne(Z.star1)}}function Jr(e){return e==null||Array.isArray(e)||!(e instanceof de)?!1:e.userData.cosmosiveSunCorona===!0}function Zr(e){const t=Mr(),n={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},o={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:n.warm.clone()},uPaletteHot:{value:n.hot.clone()},uPaletteFlare:{value:n.flare.clone()}},r=new de({uniforms:o,vertexShader:Cr,fragmentShader:Pr,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return r.userData.cosmosiveSunCorona=!0,r}export{xn as A,Ir as B,bn as C,xe as D,Z as E,Or as F,tn as G,un as H,gn as I,kr as J,_e as K,vn as L,Wr as M,dn as N,jr as O,Hr as P,Br as R,Pn as S,Cn as T,ln as U,Nr as V,pt as W,Ar as Y,$n as _,Gr as a,Mn as b,hr as c,Kr as d,nr as f,qn as g,Gn as h,Xr as i,Lr as j,Vr as k,pr as l,qr as m,Jr as n,Yr as o,Un as p,ft as q,Qr as r,mr as s,Zr as t,St as u,yt as v,wn as w,Fn as x,$r as y,Dr as z};
