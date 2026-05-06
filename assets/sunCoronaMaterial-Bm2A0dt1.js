import{n as je}from"./state-data-vendor-sq1yP6E9.js";import{Ht as H,Rt as at}from"./babylon-postprocess-vendor-BBh1ALWr.js";import{B as st,C as it,Q as Ie,R as lt,bt as T,lt as ae,o as J,p as ve,s as ut,ut as ct,yt as Ue}from"./three-vendor-vu4QJ6OG.js";import{$ as ke,$t as ft,Cn as dt,Fa as Ee,Ga as mt,Ka as pt,Qa as ht,Sn as $e,Vt as qe,Wi as vt,Za as gt,a as St,an as yt,bo as xt,bt,fa as pe,go as Ct,gt as wt,ho as Pt,ht as Mt,lt as Ft,na as ge,nn as Ke,on as Et,oo as Tt,qa as Ge,ra as Xe,tn as _t,uo as Rt,wn as zt,yo as At}from"./index-BtmPZZ42.js";import{n as U,t as It}from"./queryCacheNotify-BoJ_4xvi.js";var Te=new WeakMap;function yr(e,t){Te.set(e,t)}function xr(e){Te.delete(e)}function Ye(e){if(e.engineKind!=="babylon")throw new Error("asBabylon: SceneHost is not a Babylon implementation");const t=Te.get(e);if(!t)throw new Error("asBabylon: missing Babylon extras (host not fully initialized?)");return t}var ye={current:null};function kt(e,t,n){return n&&t&&xt(e,t.position.x,t.position.y,t.position.z),e}function Qe(e,t,n){if(n&&t){const o=e;o.x+=t.position.x,o.y+=t.position.y,o.z+=t.position.z}return e}function Nt(e,t){return e.getWorldPosition(t),kt(t,ye.current,!0),t}function Dt(e,t,n,o,r){e.updateMatrixWorld(!0),e.getWorldPosition(n),t.position.x=n.x,t.position.y=n.y,t.position.z=n.z,e.getWorldDirection(n),o.setFromMatrixColumn(e.matrixWorld,0).normalize(),r.setFromMatrixColumn(e.matrixWorld,1).normalize(),t.forward.x=n.x,t.forward.y=n.y,t.forward.z=n.z,t.right.x=o.x,t.right.y=o.y,t.right.z=o.z,t.up.x=r.x,t.up.y=r.y,t.up.z=r.z,t.fovYRadians=lt.degToRad(e.fov),t.aspect=e.aspect}function Ze(e,t,n,o,r){Dt(e,t,n,o,r);{const a=ye.current;a&&(t.position.x-=a.position.x,t.position.y-=a.position.y,t.position.z-=a.position.z)}}function Lt(e){const t=U(e).cameraThree,n=new T,o=new T,r=new T;return{syncFrustumHeliocentric(a){Ze(t,a,n,o,r)}}}var Wt=new H(0,0,-1),Ot=new H(1,0,0),Ht=new H(0,1,0),ie=new H,le=new H,ue=new H,ce=new H;function Bt(e,t,n){e.computeWorldMatrix(),e.getWorldMatrix().getTranslationToRef(ie),n.position.x=ie.x,n.position.y=ie.y,n.position.z=ie.z;{const[r,a,s]=t.getFloatingOrigin();n.position.x+=r,n.position.y+=a,n.position.z+=s}e.getDirectionToRef(Wt,le),e.getDirectionToRef(Ot,ue),e.getDirectionToRef(Ht,ce),n.forward.x=le.x,n.forward.y=le.y,n.forward.z=le.z,n.right.x=ue.x,n.right.y=ue.y,n.right.z=ue.z,n.up.x=ce.x,n.up.y=ce.y,n.up.z=ce.z,n.fovYRadians=e.fov;const o=e.getEngine();n.aspect=o.getRenderWidth()/Math.max(1,o.getRenderHeight())}function Vt(e){const{cameraBabylon:t}=Ye(e);return{syncFrustumHeliocentric(n){Bt(t,e,n)}}}function jt(e){return e.engineKind==="babylon"?Vt(e):Lt(e)}var Ut=()=>({starfieldChunksTotal:0,starfieldChunksVisible:0,starfieldVerticesTotal:0,starfieldPipelineStatus:"idle",starfieldSyntheticKind:"empty",starfieldChunkAbbrevSample:"",shipsCandidates:0,shipsRendered:0,combatShotsTracerEnemySlots:0,combatShotsConquestCandidates:0,combatShotsConquestPassedFrustum:0,updatedAtMs:0}),Ne=Ut();function br(e){}typeof globalThis.window<"u";var Pe="__cosmosivePointer",Me=new WeakMap;function $t(e,t){t==null?delete e.userData[Pe]:e.userData[Pe]=t}function te(e){return e.userData[Pe]}function qt(e,t){t==null?Me.delete(e):Me.set(e,t)}function ne(e){return Me.get(e)}function Cr(e,t,n){e.engineKind==="r3f"?$t(t,n):qt(t,n)}var De=new Ue;function Kt(e,t,n,o){const r=n.getBoundingClientRect();o.x=(e-r.left)/r.width*2-1,o.y=-((t-r.top)/r.height)*2+1}function Gt(e){const t=U(e);t.scene.updateMatrixWorld(!0);const n=t.gl.domElement,o=t.cameraThree,r=n.clientWidth/Math.max(1,n.clientHeight);Number.isFinite(r)&&Math.abs(o.aspect-r)>1e-6&&(o.aspect=r,o.updateProjectionMatrix()),o.updateMatrixWorld(!0)}function Xt(e){return U(e).scene.children.filter(t=>t.visible!==!1)}function re(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent}return!1}function oe(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent??null}return!1}var Le=new T,We=new T,Yt=new T,he=[];function Qt(e){return he.push(e),()=>{const t=he.indexOf(e);t>=0&&he.splice(t,1)}}function Se(e,t){for(const n of he)if(n(e,t))return!0;return!1}function Zt(e,t,n,o,r){let a=!1;const s={nativeEvent:n,object:e,point:o,index:r,stopPropagation:()=>{a=!0}};oe(e,u=>{const l=ne(u)?.[t];return l?(l(s),a):!1})}function wr(e,t,n,o,r,a){if(e.engineKind==="babylon"){Zt(t,n,o,r,a);return}let s=!1;const u={nativeEvent:o,object:t,point:r,index:a,stopPropagation:()=>{s=!0}};re(t,l=>{const i=te(l)?.[n];return i?(i(u),s):!1})}function Pr(e,t,n,o,r){if(t!==n){if(e.engineKind==="babylon"){t&&oe(t,a=>{const s=ne(a)?.onPointerOut;return s?(s({nativeEvent:o,object:a,point:Le,stopPropagation:()=>{}}),!0):!1}),n&&oe(n,a=>{const s=ne(a)?.onPointerOver;return s?(s({nativeEvent:o,object:a,point:We.copy(r),stopPropagation:()=>{}}),!0):!1});return}t&&re(t,a=>{const s=te(a)?.onPointerOut;return s?(s({nativeEvent:o,object:a,point:Le,stopPropagation:()=>{}}),!0):!1}),n&&re(n,a=>{const s=te(a)?.onPointerOver;return s?(s({nativeEvent:o,object:a,point:We.copy(r),stopPropagation:()=>{}}),!0):!1})}}function Mr(e,t){for(const n of e){let o=!1;if(re(n.object,r=>te(r)?.onClick?(o=!0,!0):!1),o)return{kind:"interactive",object:n.object,point:n.point.clone(),index:n.index!==void 0?n.index:void 0,ndc:{x:t.x,y:t.y}}}return null}function Fr(e,t,n,o){const r=e.pickAt(t,n);if(!r)return null;const a=r.node;let s=!1;return oe(a,u=>ne(u)?.onClick?(s=!0,!0):!1),s?{kind:"interactive",object:a,point:new T(r.point[0],r.point[1],r.point[2]),ndc:{x:o.x,y:o.y}}:null}function Jt(e,t){Gt(e),De.set(t.x,t.y);const n=U(e);return n.raycaster.setFromCamera(De,n.cameraThree),n.raycaster.intersectObjects(Xt(e),!0)}function en(e,t,n,o){if(n.button!==0)return;const r=e.pickAt(n.clientX,n.clientY);if(!r){if(Se(n,t))return;o();return}const a=r.node,s=new T(r.point[0],r.point[1],r.point[2]);let u=!1,l=!1;const i={nativeEvent:n,object:a,point:s,index:void 0,stopPropagation:()=>{u=!0}};oe(a,c=>{const f=ne(c)?.onClick;return f?(l=!0,f(i),u):!1}),!l&&(Se(n,t)||o())}function Er(e,t,n,o){if(e.engineKind==="babylon"){en(e,t,n,o);return}if(n.button!==0)return;const r={x:0,y:0};Kt(n.clientX,n.clientY,t,r);const a=Jt(e,r);if(a.length===0){if(Se(n,t))return;o();return}for(const s of a){let u=!1,l=!1;const i={nativeEvent:n,object:s.object,point:Yt.copy(s.point),index:(s.index!==void 0,s.index),stopPropagation:()=>{u=!0}};if(re(s.object,c=>{const f=te(c)?.onClick;return f?(l=!0,f(i),u):!1}),l)return}Se(n,t)||o()}function Tr(e){const t=e.replace(/^#/,""),n=parseInt(t,16);return Number.isFinite(n)?[Math.floor(n/65536)%256,Math.floor(n/256)%256,n%256]:[0,0,0]}function tn(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function _r(e){return Math.max(0,Math.min(255,Math.round(e)))}function fe(e,t=1,n=1){const[o,r,a]=tn(e),s=Math.max(.15,Math.min(1,t));return[o*s,r*s,a*s,n]}var K={star1:fe("#fff3a8",1),star2:fe("#f5c238",1),star3:fe("#e07b1a",1),star4:fe("#a8380c",1)};function nn(){const e=pe().getState(),t=ft.getState().session.gameStarted,n=(e.camera.visitId!=null||e.camera.watchId!=null)&&e.camera.autoWatch;return e.playing||n||t}function rn(){const e=qe.getState();return{ttPhase:e.phase,c2TourOrder:e.c2TourOrder,remainingC2StarIds:e.remainingC2StarIds,timeTrialStarNamesUi:Ke.getState().appMode==="time-trial",showStarNames:Ee.getState().showStarNames}}function on(e){const t=qe.subscribe(o=>({phase:o.phase,c2TourOrder:o.c2TourOrder,remainingC2StarIds:o.remainingC2StarIds}),()=>e(),{equalityFn:je}),n=Ke.subscribe((o,r)=>{const a=o.appMode==="time-trial",s=r!=null&&r.appMode==="time-trial";r!=null&&a===s||e()});return()=>{t(),n()}}var an=256,sn=320,ln=`
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
`,un=`
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
`,cn=`
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
`;function Je(e){const t=new ae({uniforms:{uScale:{value:1},uPointSizeMax:{value:e?.pointSizeMax??an},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uMinScreenPx:{value:e?.minScreenPx??0},uMaxScreenPx:{value:e?.maxScreenPx??0},uPaletteHot:{value:new ve(1,.78,.56)},uPaletteFlare:{value:new ve(1,.92,.75)}},vertexShader:ln,fragmentShader:e?.useHaloShader?cn:un,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),n=new Ue;return t.onBeforeRender=(o,r,a)=>{const s=a;s.isPerspectiveCamera&&s.fov&&(o.getSize(n),t.uniforms.uScale.value=n.y/(2*Math.tan(s.fov*Math.PI/360)))},t}function fn(){return Je({twinkleAmp:.03,twinkleFreq:.9})}function dn(){return Je({useHaloShader:!0,sizeMultiplier:1.6,minScreenPx:2.1,maxScreenPx:5.2,pointSizeMax:sn,twinkleAmp:.02,twinkleFreq:.55})}var _e=4,Rr=64*_e,mn=-25,pn=500,hn=.01;function et(e){return Math.max(0,Math.min(1,e))}function vn(e){return e?.size!=null&&Number.isFinite(e.size)?et(e.size):.5}function gn(e){return .08+.76*et((e-.99)/.01)**3}function zr(e){return(e?pt(e,$e(e)):Ge)*gn(vn(e))*_e}function Fe(e,t){let n=t;for(;e[n]!==n;)n=e[n];let o=t;for(;o!==n;){const r=e[o];e[o]=n,o=r}return n}function Sn(e,t,n){const o=Fe(e,t),r=Fe(e,n);o!==r&&(e[o]=r)}function Oe(e,t,n){return`${e},${t},${n}`}function yn(e,t){const n=e.length,o=Array.from({length:n},(i,c)=>c),r=t,a=new Map;for(let i=0;i<n;i+=1){const c=e[i],f=Oe(Math.floor(c.x/r),Math.floor(c.y/r),Math.floor(c.z/r));a.has(f)||a.set(f,[]),a.get(f).push(i)}const s=t*t;for(let i=0;i<n;i+=1){const c=e[i],f=Math.floor(c.x/r),p=Math.floor(c.y/r),g=Math.floor(c.z/r);for(let d=-1;d<=1;d+=1)for(let h=-1;h<=1;h+=1)for(let w=-1;w<=1;w+=1){const z=Oe(f+d,p+h,g+w),A=a.get(z);if(A)for(const I of A){if(I<=i)continue;const y=e[I],b=y.x-c.x,x=y.y-c.y,N=y.z-c.z;b*b+x*x+N*N<s&&Sn(o,i,I)}}}const u=new Map;for(let i=0;i<n;i+=1){const c=Fe(o,i);u.has(c)||u.set(c,[]),u.get(c).push(i)}const l=[];for(let i=0;i<n;i+=1)l.push(void 0);for(const i of u.values())i.length<=1||(i.sort((c,f)=>c-f),i.forEach((c,f)=>{f>0&&(l[c]={x:0,y:f*mn})}));return l}function xn(){const e=[];for(let t=0;t<pn;t+=1){const n=mt(t*.7%360,t*.3%180-90);n!=null&&e.push(n)}return e}function bn(){const e=xn(),t=e.length,n=Rt,o=new Float32Array(t*3);return e.forEach((r,a)=>{o[a*3]=r.x*n,o[a*3+1]=r.y*n,o[a*3+2]=r.z*n}),{abbr:"_bootstrap",positions:o,sizes:new Float32Array(t).fill(Ge*_e),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(hn),brightness:new Float32Array(t).fill(1),starsInChunk:[]}}var Cn={raMin:0,raMax:360,decMin:-90,decMax:90},wn={chunks:[],namedStarsInView:[]};function Pn(e,t){return e===0&&t!=="success"}function tt(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[bn()]:[]}function Ar(e,t){const n=tt(e,t),o=n.slice(0,3).map(r=>r.abbr).join(",");return n.length===0?{syntheticKind:"empty",chunkAbbrevSample:o}:n.length===1&&n[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:o}:n.some(r=>r.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:o}:{syntheticKind:"real",chunkAbbrevSample:o}}function He(e,t){return t.current===e.current}function Mn(e,t,n,o,r){e.onerror=a=>{He(t,n)||(o("error"),r(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{He(t,n)||(o("error"),r("Starfield worker message error"))}}function Fn(e,t,n,o,r,a,s){const{runId:u,...l}=e;u===t.current&&(n.current=u,o.current=l.starsInView,r({chunks:l.chunks,namedStarsInView:l.namedStarsInView}),a("ready"),s(null))}function En(e,t,n,o,r){e.processStarfield({runId:t,catalog:n,maxDistanceLevel:o,bounds:Cn,raInHours:!1}).then(a=>{Fn(a,r.runIdRef,r.lastSuccessfulRunIdRef,r.starsInViewRef,r.setStarData,r.setStarfieldStatus,r.setErrorMessage)}).catch(a=>{t===r.runIdRef.current&&(r.setStarfieldStatus("error"),r.setErrorMessage(a instanceof Error?a.message:"Starfield worker failed"))})}function nt(e){return e==="countdown"||e==="active"||e==="complete"}function Tn(e,t,n,o){if(!o||!nt(t)||n.length===0)return e;const r=new Set(n);return e.filter(a=>a.catalogId!=null&&r.has(a.catalogId))}function _n(e,t,n){return!n||!nt(t)?e:e||t==="countdown"}function Rn(e){const t={current:[]},n={current:!1},o={current:ge()};function r(){const{ttPhase:a,c2TourOrder:s,timeTrialStarNamesUi:u,showStarNames:l}=rn(),{namedStarsInView:i}=e.getStarData();t.current=Tn(i,a,s,u),n.current=_n(l,a,u)}return r(),{updateLabelRefs:r,getNamedStarsInView:()=>t.current,getEnabled:()=>n.current&&!o.current,dispose:Xe(()=>{o.current=ge(),e.onHidesHudChromeChange?.()})}}var k=new T;function zn(e){const t=U(e);return{projectFromHeliocentric(n,o){const r=t.cameraThree,{size:a}=e;return k.set(n.x,n.y,n.z),Qe(k,ye.current,!0),k.project(r),Number.isFinite(k.x)&&Number.isFinite(k.y)&&Number.isFinite(k.z)&&Math.abs(k.x)<=1&&Math.abs(k.y)<=1&&k.z>=-1&&k.z<=1?(o.x=(k.x*.5+.5)*a.width,o.y=(-k.y*.5+.5)*a.height,!0):!1}}}var de=new H;function An(e){const{scene:t,cameraBabylon:n,layers:o}=Ye(e);return{projectFromHeliocentric(r,a){const s=t.getEngine();if(!s.getRenderingCanvas())return!1;const u=o.starfield.getWorldMatrix();de.set(r.x,r.y,r.z),H.TransformCoordinatesToRef(de,u,de);const l=n.viewport.toGlobal(s.getRenderWidth(),s.getRenderHeight()),i=t.getTransformMatrix(),c=H.Project(de,at.Identity(),i,l);return Number.isFinite(c.x)&&Number.isFinite(c.y)&&Number.isFinite(c.z)&&c.x>=l.x&&c.x<=l.x+l.width&&c.y>=l.y&&c.y<=l.y+l.height&&c.z>=0&&c.z<=1?(a.x=c.x,a.y=c.y,!0):!1}}}function In(e){return e.engineKind==="babylon"?An(e):zn(e)}function kn(e,t,n=48){const o=[];for(let s=0;s<t.length;s+=1){const u=t[s];if(!At(u.position,e.position,e.forward,e.right,e.up,e.fovYRadians,e.aspect))continue;const l=u.position.x-e.position.x,i=u.position.y-e.position.y,c=u.position.z-e.position.z,f=l*l+i*i+c*c;o.push({entry:u,distSq:f,index:s})}o.sort((s,u)=>s.distSq!==u.distSq?s.distSq-u.distSq:s.index-u.index);const r=o.slice(0,n).map(s=>s.entry),a=yn(r.map(s=>s.position),10);return r.map((s,u)=>({...s,labelOffset:a[u]}))}function Nn(e,t){return`translate(${e}px, ${t}px) translate(-50%, calc(-100% - 8px))`}function Dn(e){return e.map(t=>`${t.name}\0${t.position.x.toFixed(4)},${t.position.y.toFixed(4)},${t.position.z.toFixed(4)}\0${t.labelOffset?.x??""},${t.labelOffset?.y??""}`).join("|")}function Ln(e){const t=document.createElement("div");t.style.position="absolute",t.style.left="0",t.style.top="0",t.style.width="100%",t.style.height="100%",t.style.pointerEvents="none",e.appendChild(t);let n="",o=[],r=[];function a(){t.replaceChildren(),o=[],r=[],n=""}function s(u){t.replaceChildren(),o=[],r=u;for(const{position:l,name:i,labelOffset:c}of u){const f=document.createElement("div");f.className="star-label-wrapper",f.style.position="absolute",f.style.left="0",f.style.top="0",f.style.pointerEvents="none";const p=document.createElement("span");p.className="star-label",p.textContent=i,f.appendChild(p),t.appendChild(f),o.push({wrap:f,span:p})}}return{container:t,get lastSig(){return n},set lastSig(u){n=u},get rowEls(){return o},get currentRows(){return r},clearRows:a,rebuildRows:s}}function Wn(e,t,n){const o=n,r=Ln(o),a=jt(e),s=In(e),u={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},l={x:0,y:0};return{onFrame:()=>{const c=t.getEnabled(),f=t.getNamedStarsInView();if(!c){r.lastSig!==""&&r.clearRows();return}a.syncFrustumHeliocentric(u);const p=kn(u,f),g=Dn(p);g!==r.lastSig&&(r.lastSig=g,r.rebuildRows(p));for(let d=0;d<r.currentRows.length;d+=1){const h=r.currentRows[d],w=r.rowEls[d]?.wrap;if(!w)continue;if(!s.projectFromHeliocentric(h.position,l)){w.style.display="none";continue}w.style.display="";const z=l.x+(h.labelOffset?.x??0),A=l.y+(h.labelOffset?.y??0);w.style.transform=Nn(z,A)}},dispose:()=>{r.clearRows(),r.container.parentNode===o&&o.removeChild(r.container)}}}function On(e){let t=wn,n="idle",o=null;return{getStarData:()=>t,getStatus:()=>n,getErrorMessage:()=>o,setStarData(r){t=typeof r=="function"?r(t):r,e.onAfterStarData()},setStarfieldStatus(r){n=typeof r=="function"?r(n):r,e.onAfterStatus()},setErrorMessage(r){o=typeof r=="function"?r(o):r,e.onAfterError()}}}function Hn(e){const t=Ee.subscribe(o=>({maxDistanceLevel:o.maxDistanceLevel,showStarNames:o.showStarNames}),(o,r)=>{e.onLabelInputsChange(),(r==null||o.maxDistanceLevel!==r.maxDistanceLevel)&&e.onMaxDistanceLevelChange()},{equalityFn:je}),n=on(e.onLabelInputsChange);return{dispose(){t(),n()}}}function Bn(e,t){let n=[],o=null;function r(){o?.abort(),o=null;for(const s of n)e.removeChild(s);n=[]}function a(s,u){if(r(),s==="loading"){const l=document.createElement("div");l.className="starfield-status starfield-status--loading",l.style.position="absolute",l.style.left="50%",l.style.top="50%",l.style.transform="translate(-50%, -50%)",l.style.pointerEvents="none";const i=document.createElement("span");i.className="starfield-status__text",i.textContent="Loading stars…",l.appendChild(i),e.appendChild(l),n.push(l)}else if(s==="error"){const l=document.createElement("div");l.className="starfield-status starfield-status--error",l.style.position="absolute",l.style.left="50%",l.style.top="50%",l.style.transform="translate(-50%, -50%)",l.style.pointerEvents="auto";const i=document.createElement("div");i.className="starfield-status__message";const c=document.createElement("span");c.className="starfield-status__text",c.textContent=u??"Failed to load stars",i.appendChild(c);const f=document.createElement("button");f.type="button",f.className="starfield-status__retry",f.textContent="Retry",o=new AbortController,f.addEventListener("click",t,{signal:o.signal}),i.appendChild(f),l.appendChild(i),e.appendChild(l),n.push(l)}}return{refresh:a,dispose:r}}var Vn="/assets/starfield.worker-DeoSgUe7.js";function jn(e){const t=St();function n(){return t.getQueryData(["hyg-catalog"])?.stars??[]}const o={current:0},r={current:-1};let a=null,s=null;const u=typeof window.Worker>"u",l=window.Worker;l?(a=new l(Vn,{type:"module"}),s=wt(a),Mn(a,o,r,e.setStarfieldStatus,e.setErrorMessage)):(e.setStarfieldStatus("error"),e.setErrorMessage("Workers not supported"));const i={runIdRef:o,lastSuccessfulRunIdRef:r,starsInViewRef:e.starsInViewRef,setStarData:e.setStarData,setStarfieldStatus:e.setStarfieldStatus,setErrorMessage:e.setErrorMessage};function c(){if(!s)return;const d=t.getQueryState([ke]),h=n();if(Pn(h.length,d?.status))return;e.setStarfieldStatus("loading"),o.current+=1;const w=o.current,{maxDistanceLevel:z}=Ee.getState();En(s,w,h,z,i)}function f(){const d=t.getQueryState([ke]);if(d?.status==="error"){if(u)return;const h=d.error;e.setStarfieldStatus("error"),e.setErrorMessage(h instanceof Error?h.message:String(h));return}d?.status==="success"&&!u&&e.setErrorMessage(null),c()}function p(){e.setErrorMessage(null),e.setStarfieldStatus("loading"),c()}const g=t.getQueryCache().subscribe(d=>{It(d,"hyg-catalog")&&f()});return{runWorkerProcess:c,applyHygQueryState:f,retry:p,dispose(){if(g(),s){try{s[Mt]()}catch{}s=null}a?.terminate(),a=null}}}var rt=null;function Ir(e){rt=e}function Un(){return rt?.current??{}}var $n=1495978707e-1,qn=1e3;function Kn(e,t){const n=e.width,o=e.height,r=t.clientWidth,a=t.clientHeight;let s;Number.isFinite(n)&&n>0?s=n:Number.isFinite(r)?s=r:s=0;let u;return Number.isFinite(o)&&o>0?u=o:Number.isFinite(a)?u=a:u=0,!Number.isFinite(s)||!Number.isFinite(u)||s<=0||u<=0?null:{w:s,h:u}}function Gn(e,t,n,o,r=28){return!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)?!1:e>=r&&t>=r&&e<=n-r&&t<=o-r}function Xn(e){if(!Number.isFinite(e)||e<0)return"";const t=e/Tt;if(t<.001){const n=t*$n;return n<1?`${n.toFixed(3)} km`:n<1e3?`${n.toFixed(0)} km`:`${(n/1e3).toFixed(1)} Mm`}return t<1?`${t.toFixed(3)} AU`:t<100?`${t.toFixed(2)} AU`:`${t.toFixed(0)} AU`}function Yn(e){return!Number.isFinite(e)||e<0?"":e<.01?`${e.toFixed(4)} pc`:e<1?`${e.toFixed(3)} pc`:e<100?`${e.toFixed(2)} pc`:`${e.toFixed(0)} pc`}function Qn(e,t){const n=document.createElement("div");n.className="selected-body-label-wrapper",n.style.position="absolute",n.style.left="0",n.style.top="0",n.style.pointerEvents="none",n.style.display="none";const o=document.createElement("span");o.className="selected-body-label",n.appendChild(o),t.appendChild(n);const r=document.createElement("div");r.className="selected-body-callout-wrapper",r.style.display="none";const a=document.createElement("div");a.className="selected-body-callout__ring";const s=document.createElement("div");s.className="selected-body-callout__leader-v";const u=document.createElement("div");u.className="selected-body-callout__leader-h";const l=document.createElement("div");l.className="selected-body-callout__name";const i=document.createElement("div");i.className="selected-body-callout__distance",r.append(a,s,u,l,i),t.appendChild(r);let c=!1,f=!1;const p=v=>{v!==c&&(c=v,n.style.display=v?"":"none")},g=v=>{v!==f&&(f=v,r.style.display=v?"":"none")},d=pe().getState().selection,h={id:d.selectedId,name:d.selectedName},w=pe().subscribeSelector(v=>v.selection.selectedId,v=>{h.id=v}),z=pe().subscribeSelector(v=>v.selection.selectedName,v=>{h.name=v});let A=ge();const I=Xe(()=>{A=ge(),e.invalidate()}),y=new T,b=new T,x=new T;let N="",$=0;function G(v,_){if(v==="hor"){const M=Un()[_];return M?{pos:{x:M[0],y:M[1],z:M[2]},isSolar:!0}:null}if(v==="hyg"){const M=vt();if(M.length===0)return null;const B=Et(M).get(_);return B?{pos:dt(B),isSolar:!1}:null}const D=[...bt(),...Ft()];if(D.length===0)return null;const P=yt(D).get(_);return P?{pos:zt(P),isSolar:!1}:null}return{onFrame:()=>{if(A){p(!1),g(!1);return}const{id:v,name:_}=h;if(!v||!_){p(!1),g(!1);return}let D;try{D=Pt(v)}catch{p(!1),g(!1);return}const P=G(D.source,D.rawId);if(!P){p(!1),g(!1);return}const M=U(e).cameraThree;if(!M.isPerspectiveCamera){p(!1),g(!1);return}if(y.set(P.pos.x,P.pos.y,P.pos.z),Qe(y,ye.current,!0),x.copy(y).project(M),!(Number.isFinite(x.x)&&Number.isFinite(x.y)&&Number.isFinite(x.z)&&Math.abs(x.x)<=1&&Math.abs(x.y)<=1&&x.z>=-1&&x.z<=1)){p(!1),g(!1);return}const B=U(e).gl.domElement,W=Kn(e.size,B);if(W==null){p(!1),g(!1);return}const{w:q,h:Y}=W,m=(x.x*.5+.5)*q,S=(-x.y*.5+.5)*Y;if(P.isSolar){o.textContent!==_&&(o.textContent=_),n.style.transform=`translate(${m}px, ${S}px) translate(-50%, -50%)`,p(!0),g(!1);return}if(!Gn(m,S,q,Y)){p(!1),g(!1);return}l.textContent!==_&&(l.textContent=_),r.style.transform=`translate(${m}px, ${S}px)`;const F=performance.now();if(F-$>=qn||N===""){Nt(M,b);const C={x:b.x,y:b.y,z:b.z},E=Math.hypot(P.pos.x-C.x,P.pos.y-C.y,P.pos.z-C.z),R=E<1e5?Xn(E):Yn(gt(C,P.pos));R!==N&&(N=R,i.textContent=R),$=F}p(!1),g(!0)},dispose:()=>{w(),z(),I(),n.parentNode===t&&t.removeChild(n),r.parentNode===t&&t.removeChild(r)}}}var Zn=3;function Jn(e,t,n){return Math.max(t,Math.min(n,e))}function ot(e,t,n,o=1,r=256){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)||!Number.isFinite(r)||t<=0||e<=0||o<=0||r<=0)return 0;const a=e*(n/t);return a<=0?0:Jn(a*o,0,r)}function er(e,t,n){const o=ot(e,t,n);if(o<=0)return 0;const r=o*.5+Zn;return Math.min(r,256)}function tr(e,t,n,o){const r=Math.sqrt(e*e+t*t+n*n);if(r<=0||!Number.isFinite(r)){o.x=0,o.y=0,o.z=0;return}const a=ht(r)/r;o.x=e*a,o.y=t*a,o.z=n*a}function nr(e,t,n,o,r,a,s,u){const l=Math.sqrt(e*e+t*t+n*n);if(l<=0||!Number.isFinite(l)||!Number.isFinite(o)){const g=-r,d=-a,h=-s;return g*g+d*d+h*h<=u}const i=o/l,c=e*i-r,f=t*i-a,p=n*i-s;return c*c+f*f+p*p<=u}var be=new T,Ce=new T;function rr(e,t,n,o,r,a,s,u,l,i,c,f,p,g){const d=n.getBoundingClientRect(),h=e-d.left,w=t-d.top,z=Number.isFinite(o.fov)&&o.fov>0?d.height/(2*Math.tan(o.fov*Math.PI/360)):0,A=Math.min(l,a.length/3,s.length,u.length);let I=null;for(let y=0;y<A;y+=1){const b=y*3,x=a[b],N=a[b+1],$=a[b+2];if(!nr(x,N,$,u[y]??0,f.x,f.y,f.z,p))continue;const G=x-i.position.x,X=N-i.position.y,v=$-i.position.z,_=G*i.forward.x+X*i.forward.y+v*i.forward.z;if(_<=1e-6)continue;const D=G*i.right.x+X*i.right.y+v*i.right.z,P=G*i.up.x+X*i.up.y+v*i.up.z,M=c*i.aspect*_;if(Math.abs(D)>M)continue;const B=c*_;if(Math.abs(P)>B)continue;const W=_,q=s[y],Y=ot(q,W,z),m=er(q,W,z);if(m<=0)continue;be.set(x,N,$),be.applyMatrix4(r.matrixWorld),Ce.copy(be).project(o);const S=(Ce.x*.5+.5)*d.width,F=(-Ce.y*.5+.5)*d.height,C=S-h,E=F-w,R=C*C+E*E;if(R>m*m)continue;const O={index:y,distSqPx:R,depthCam:W,renderedPx:Y};g(O,I)&&(I=O)}return I}function ee(){return nn()}var L={chunks:[],pointsMeshes:[],starsInView:[]},Z={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},or=new T,ar=new T,sr=new T,Be={x:0,y:0,z:0};function Ve(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function kr(){return L}function Nr(e,t){const n=U(e),o=n.layers.starfield,r=t,a={current:[]},s=On({onAfterStarData:()=>{f(),P(),ee()||e.invalidate()},onAfterStatus:()=>{W(),P(),ee()||e.invalidate()},onAfterError:()=>{W()}}),{setStarData:u,setStarfieldStatus:l,setErrorMessage:i}=s,c=Rn({getStarData:s.getStarData,onHidesHudChromeChange:()=>{ee()||e.invalidate()}}),{updateLabelRefs:f}=c,p=Wn(e,{getNamedStarsInView:c.getNamedStarsInView,getEnabled:c.getEnabled},t),g=Qn(e,t),d=[],h=[],w=[],z=[],A=[],I=[];let y=null,b=null,x=0;const N=new st,$=new it,G=new ct;function X(m,S,F,C){const{chunks:E}=L;Ze(C,Z,or,ar,sr);const R=Math.tan(Z.fovYRadians*.5);tr(Z.position.x,Z.position.y,Z.position.z,Be);const O=500**2;let V=-1,Q=null;for(let j=0;j<E.length;j+=1){const xe=E[j],Re=d[j],ze=A[j],Ae=I[j];if(!xe||!Re||!ze||!Ae)continue;const se=rr(m,S,F,C,Re,xe.positions,Ae,ze,xe.starsInChunk.length,Z,R,Be,O,Ve);!se||!Ve(se,Q)||(Q=se,V=z[j]+se.index)}return V}function v(m,S){const F=a.current;if(F.length===0||!(S instanceof HTMLCanvasElement))return!1;const C=X(m.clientX,m.clientY,S,n.cameraThree);if(C<0||C>=F.length)return!1;const E=F[C],R=E.proper??(E.hip!=null?`HIP ${E.hip}`:`Star ${E.id}`);return _t.select(Ct("hyg",E.id),R,"star"),!0}function _(m){const S=new ut;return S.setAttribute("position",new J(m.positions,3)),S.setAttribute("size",new J(m.sizes,1)),S.setAttribute("color",new J(m.colors,3)),S.setAttribute("warm",new J(m.warm,1)),S.setAttribute("brightness",new J(m.brightness,1)),S.computeBoundingSphere(),S}function D(){for(const m of d)o.remove(m);d.length=0,z.length=0,A.length=0,I.length=0;for(const m of h)o.remove(m);h.length=0;for(const m of w)m.dispose();w.length=0}function P(){if(D(),y==null||b==null){L.chunks=[],L.pointsMeshes=[],L.starsInView=a.current;return}const m=tt(s.getStarData(),s.getStatus());let S=0;for(const F of m){const C=_(F);w.push(C),z.push(S);const E=new Float32Array(F.starsInChunk.length);for(let V=0;V<F.starsInChunk.length;V+=1){const Q=F.starsInChunk[V];E[V]=Q?$e(Q):0}A.push(E),I.push(new Float32Array(F.sizes));const R=new Ie(C,y);R.frustumCulled=!0,R.raycast=()=>{},o.add(R),d.push(R);const O=new Ie(C,b);O.frustumCulled=!0,O.renderOrder=1,o.add(O),h.push(O),S+=F.starsInChunk.length}L.chunks=m,L.pointsMeshes=d,L.starsInView=a.current}y=fn(),b=dn();const M=jn({starsInViewRef:a,setStarData:u,setStarfieldStatus:l,setErrorMessage:i}),B=Bn(r,M.retry);function W(){B.refresh(s.getStatus(),s.getErrorMessage())}P(),ee()||e.invalidate(),W();const q=Qt((m,S)=>m.button!==0?!1:v(m,S));M.applyHygQueryState();const Y=Hn({onLabelInputsChange:f,onMaxDistanceLevelChange:M.runWorkerProcess});return{onFrame:()=>{if(p.onFrame(),g.onFrame(),ee()){const m=Math.min(.06,n.timer.getDelta());x+=m,y?.uniforms.uTime&&(y.uniforms.uTime.value=x),b?.uniforms.uTime&&(b.uniforms.uTime.value=x)}},dispose:()=>{Y.dispose(),c.dispose(),B.dispose(),p.dispose(),g.dispose(),D(),y?.dispose(),y=null,b?.dispose(),b=null,M.dispose(),q(),L.chunks=[],L.pointsMeshes=[],L.starsInView=[]}}}function me(e){return new ve(e[0],e[1],e[2])}function ir(){return{cool:me(K.star4),warm:me(K.star3),hot:me(K.star2),flare:me(K.star1)}}var lr=`
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
`,ur=`
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
`;function Dr(e){return e==null||Array.isArray(e)||!(e instanceof ae)?!1:e.userData.cosmosiveSunPhotosphere===!0}function Lr(e,t){const n=ir(),o={cool:e?.cool??n.cool,warm:e?.warm??n.warm,hot:e?.hot??n.hot,flare:e?.flare??n.flare},r={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:o.cool.clone()},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},a=new ae({uniforms:r,vertexShader:lr,fragmentShader:ur,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var cr=`
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
`,fr=`
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
`;function we(e){return new ve(e[0],e[1],e[2])}function dr(){return{warm:we(K.star3),hot:we(K.star2),flare:we(K.star1)}}function Wr(e){return e==null||Array.isArray(e)||!(e instanceof ae)?!1:e.userData.cosmosiveSunCorona===!0}function Or(e){const t=dr(),n={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},o={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:n.warm.clone()},uPaletteHot:{value:n.hot.clone()},uPaletteFlare:{value:n.flare.clone()}},r=new ae({uniforms:o,vertexShader:cr,fragmentShader:fr,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return r.userData.cosmosiveSunCorona=!0,r}export{Fr as A,Bt as B,fe as C,wr as D,tn as E,qt as F,xr as G,ye as H,Cr as I,$t as L,Jt as M,Qt as N,Pr as O,Er as P,br as R,K as S,Tr as T,Ye as U,Nt as V,yr as W,Rn as _,kr as a,zr as b,nr as c,Ir as d,jn as f,Wn as g,On as h,Dr as i,Mr as j,Kt as k,er as l,Hn as m,Wr as n,Nr as o,Bn as p,Lr as r,tr as s,Or as t,ot as u,Ar as v,_r as w,nn as x,tt as y,jt as z};
