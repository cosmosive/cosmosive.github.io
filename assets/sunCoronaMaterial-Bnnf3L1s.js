import{n as Re}from"./state-data-vendor-sq1yP6E9.js";import{Ht as N,Rt as Ye}from"./babylon-postprocess-vendor-BBh1ALWr.js";import{B as Qe,C as Ze,Q as we,R as Je,bt as w,lt as K,o as V,p as ae,s as et,ut as tt,yt as Ie}from"./three-vendor-vu4QJ6OG.js";import{$ as Fe,$t as nt,Cn as rt,Fa as ye,Ga as ot,Ka as at,Qa as it,Sn as Ae,Vt as Ne,Wi as st,Za as lt,a as ut,an as ct,bo as ft,bt as dt,fa as re,go as mt,gt as pt,ho as ht,ht as St,lt as vt,na as ie,nn as De,on as gt,oo as yt,qa as Le,ra as He,tn as xt,uo as bt,wn as Ct,yo as Pt}from"./index-CtcFb7FR.js";import{n as O,t as wt}from"./queryCacheNotify-BoJ_4xvi.js";var xe=new WeakMap;function br(e,t){xe.set(e,t)}function Cr(e){xe.delete(e)}function Oe(e){if(e.engineKind!=="babylon")throw new Error("asBabylon: SceneHost is not a Babylon implementation");const t=xe.get(e);if(!t)throw new Error("asBabylon: missing Babylon extras (host not fully initialized?)");return t}var le={current:null};function Ft(e,t,n){return n&&t&&ft(e,t.position.x,t.position.y,t.position.z),e}function We(e,t,n){if(n&&t){const o=e;o.x+=t.position.x,o.y+=t.position.y,o.z+=t.position.z}return e}function Mt(e,t){return e.getWorldPosition(t),Ft(t,le.current,!0),t}function Et(e,t,n,o,r){e.updateMatrixWorld(!0),e.getWorldPosition(n),t.position.x=n.x,t.position.y=n.y,t.position.z=n.z,e.getWorldDirection(n),o.setFromMatrixColumn(e.matrixWorld,0).normalize(),r.setFromMatrixColumn(e.matrixWorld,1).normalize(),t.forward.x=n.x,t.forward.y=n.y,t.forward.z=n.z,t.right.x=o.x,t.right.y=o.y,t.right.z=o.z,t.up.x=r.x,t.up.y=r.y,t.up.z=r.z,t.fovYRadians=Je.degToRad(e.fov),t.aspect=e.aspect}function Be(e,t,n,o,r){Et(e,t,n,o,r);{const a=le.current;a&&(t.position.x-=a.position.x,t.position.y-=a.position.y,t.position.z-=a.position.z)}}function Tt(e){const t=O(e).cameraThree,n=new w,o=new w,r=new w;return{syncFrustumHeliocentric(a){Be(t,a,n,o,r)}}}var kt=new N(0,0,-1),_t=new N(1,0,0),zt=new N(0,1,0),X=new N,Y=new N,Q=new N,Z=new N;function Rt(e,t,n){e.computeWorldMatrix(),e.getWorldMatrix().getTranslationToRef(X),n.position.x=X.x,n.position.y=X.y,n.position.z=X.z;{const[r,a,i]=t.getFloatingOrigin();n.position.x+=r,n.position.y+=a,n.position.z+=i}e.getDirectionToRef(kt,Y),e.getDirectionToRef(_t,Q),e.getDirectionToRef(zt,Z),n.forward.x=Y.x,n.forward.y=Y.y,n.forward.z=Y.z,n.right.x=Q.x,n.right.y=Q.y,n.right.z=Q.z,n.up.x=Z.x,n.up.y=Z.y,n.up.z=Z.z,n.fovYRadians=e.fov;const o=e.getEngine();n.aspect=o.getRenderWidth()/Math.max(1,o.getRenderHeight())}function It(e){const{cameraBabylon:t}=Oe(e);return{syncFrustumHeliocentric(n){Rt(t,e,n)}}}function At(e){return e.engineKind==="babylon"?It(e):Tt(e)}var Nt=()=>({starfieldChunksTotal:0,starfieldChunksVisible:0,starfieldVerticesTotal:0,starfieldPipelineStatus:"idle",starfieldSyntheticKind:"empty",starfieldChunkAbbrevSample:"",shipsCandidates:0,shipsRendered:0,combatShotsTracerEnemySlots:0,combatShotsConquestCandidates:0,combatShotsConquestPassedFrustum:0,updatedAtMs:0}),Me=Nt();function Pr(e){}typeof globalThis.window<"u";var Se="__cosmosivePointer",ve=new WeakMap;function Dt(e,t){t==null?delete e.userData[Se]:e.userData[Se]=t}function j(e){return e.userData[Se]}function Lt(e,t){t==null?ve.delete(e):ve.set(e,t)}function U(e){return ve.get(e)}function wr(e,t,n){e.engineKind==="r3f"?Dt(t,n):Lt(t,n)}var Ee=new Ie;function Ht(e,t,n,o){const r=n.getBoundingClientRect();o.x=(e-r.left)/r.width*2-1,o.y=-((t-r.top)/r.height)*2+1}function Ot(e){const t=O(e);t.scene.updateMatrixWorld(!0);const n=t.gl.domElement,o=t.cameraThree,r=n.clientWidth/Math.max(1,n.clientHeight);Number.isFinite(r)&&Math.abs(o.aspect-r)>1e-6&&(o.aspect=r,o.updateProjectionMatrix()),o.updateMatrixWorld(!0)}function Wt(e){return O(e).scene.children.filter(t=>t.visible!==!1)}function $(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent}return!1}function q(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent??null}return!1}var Te=new w,ke=new w,Bt=new w,oe=[];function Vt(e){return oe.push(e),()=>{const t=oe.indexOf(e);t>=0&&oe.splice(t,1)}}function se(e,t){for(const n of oe)if(n(e,t))return!0;return!1}function jt(e,t,n,o,r){let a=!1;const i={nativeEvent:n,object:e,point:o,index:r,stopPropagation:()=>{a=!0}};q(e,l=>{const s=U(l)?.[t];return s?(s(i),a):!1})}function Fr(e,t,n,o,r,a){if(e.engineKind==="babylon"){jt(t,n,o,r,a);return}let i=!1;const l={nativeEvent:o,object:t,point:r,index:a,stopPropagation:()=>{i=!0}};$(t,s=>{const c=j(s)?.[n];return c?(c(l),i):!1})}function Mr(e,t,n,o,r){if(t!==n){if(e.engineKind==="babylon"){t&&q(t,a=>{const i=U(a)?.onPointerOut;return i?(i({nativeEvent:o,object:a,point:Te,stopPropagation:()=>{}}),!0):!1}),n&&q(n,a=>{const i=U(a)?.onPointerOver;return i?(i({nativeEvent:o,object:a,point:ke.copy(r),stopPropagation:()=>{}}),!0):!1});return}t&&$(t,a=>{const i=j(a)?.onPointerOut;return i?(i({nativeEvent:o,object:a,point:Te,stopPropagation:()=>{}}),!0):!1}),n&&$(n,a=>{const i=j(a)?.onPointerOver;return i?(i({nativeEvent:o,object:a,point:ke.copy(r),stopPropagation:()=>{}}),!0):!1})}}function Er(e,t){for(const n of e){let o=!1;if($(n.object,r=>j(r)?.onClick?(o=!0,!0):!1),o)return{kind:"interactive",object:n.object,point:n.point.clone(),index:n.index!==void 0?n.index:void 0,ndc:{x:t.x,y:t.y}}}return null}function Tr(e,t,n,o){const r=e.pickAt(t,n);if(!r)return null;const a=r.node;let i=!1;return q(a,l=>U(l)?.onClick?(i=!0,!0):!1),i?{kind:"interactive",object:a,point:new w(r.point[0],r.point[1],r.point[2]),ndc:{x:o.x,y:o.y}}:null}function Ut(e,t){Ot(e),Ee.set(t.x,t.y);const n=O(e);return n.raycaster.setFromCamera(Ee,n.cameraThree),n.raycaster.intersectObjects(Wt(e),!0)}function $t(e,t,n,o){if(n.button!==0)return;const r=e.pickAt(n.clientX,n.clientY);if(!r){if(se(n,t))return;o();return}const a=r.node,i=new w(r.point[0],r.point[1],r.point[2]);let l=!1,s=!1;const c={nativeEvent:n,object:a,point:i,index:void 0,stopPropagation:()=>{l=!0}};q(a,u=>{const f=U(u)?.onClick;return f?(s=!0,f(c),l):!1}),!s&&(se(n,t)||o())}function kr(e,t,n,o){if(e.engineKind==="babylon"){$t(e,t,n,o);return}if(n.button!==0)return;const r={x:0,y:0};Ht(n.clientX,n.clientY,t,r);const a=Ut(e,r);if(a.length===0){if(se(n,t))return;o();return}for(const i of a){let l=!1,s=!1;const c={nativeEvent:n,object:i.object,point:Bt.copy(i.point),index:(i.index!==void 0,i.index),stopPropagation:()=>{l=!0}};if($(i.object,u=>{const f=j(u)?.onClick;return f?(s=!0,f(c),l):!1}),s)return}se(n,t)||o()}function _r(e){const t=e.replace(/^#/,""),n=parseInt(t,16);return Number.isFinite(n)?[Math.floor(n/65536)%256,Math.floor(n/256)%256,n%256]:[0,0,0]}function qt(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function zr(e){return Math.max(0,Math.min(255,Math.round(e)))}function J(e,t=1,n=1){const[o,r,a]=qt(e),i=Math.max(.15,Math.min(1,t));return[o*i,r*i,a*i,n]}var W={star1:J("#fff3a8",1),star2:J("#f5c238",1),star3:J("#e07b1a",1),star4:J("#a8380c",1)};function Ve(){const e=re().getState(),t=nt.getState().session.gameStarted,n=(e.camera.visitId!=null||e.camera.watchId!=null)&&e.camera.autoWatch;return e.playing||n||t}function Kt(){const e=Ne.getState();return{ttPhase:e.phase,c2TourOrder:e.c2TourOrder,remainingC2StarIds:e.remainingC2StarIds,timeTrialStarNamesUi:De.getState().appMode==="time-trial",showStarNames:ye.getState().showStarNames}}function Gt(e){const t=Ne.subscribe(o=>({phase:o.phase,c2TourOrder:o.c2TourOrder,remainingC2StarIds:o.remainingC2StarIds}),()=>e(),{equalityFn:Re}),n=De.subscribe((o,r)=>{const a=o.appMode==="time-trial",i=r!=null&&r.appMode==="time-trial";r!=null&&a===i||e()});return()=>{t(),n()}}var Xt=256,Yt=320,Qt=`
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
`,Zt=`
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
`,Jt=`
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
`;function je(e){const t=new K({uniforms:{uScale:{value:1},uPointSizeMax:{value:e?.pointSizeMax??Xt},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uMinScreenPx:{value:e?.minScreenPx??0},uMaxScreenPx:{value:e?.maxScreenPx??0},uPaletteHot:{value:new ae(1,.78,.56)},uPaletteFlare:{value:new ae(1,.92,.75)}},vertexShader:Qt,fragmentShader:e?.useHaloShader?Jt:Zt,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),n=new Ie;return t.onBeforeRender=(o,r,a)=>{const i=a;i.isPerspectiveCamera&&i.fov&&(o.getSize(n),t.uniforms.uScale.value=n.y/(2*Math.tan(i.fov*Math.PI/360)))},t}function en(){return je({twinkleAmp:.03,twinkleFreq:.9})}function tn(){return je({useHaloShader:!0,sizeMultiplier:1.6,minScreenPx:2.1,maxScreenPx:5.2,pointSizeMax:Yt,twinkleAmp:.02,twinkleFreq:.55})}function nn(e){return{dispose:Vt((t,n)=>t.button!==0||!(n instanceof HTMLCanvasElement)?!1:e(t.clientX,t.clientY,n))}}function Ue(e){return e==="countdown"||e==="active"||e==="complete"}function rn(e,t,n,o){if(!o||!Ue(t)||n.length===0)return e;const r=new Set(n);return e.filter(a=>a.catalogId!=null&&r.has(a.catalogId))}function on(e,t,n){return!n||!Ue(t)?e:e||t==="countdown"}function an(e){const t={current:[]},n={current:!1},o={current:ie()};function r(){const{ttPhase:a,c2TourOrder:i,timeTrialStarNamesUi:l,showStarNames:s}=Kt(),{namedStarsInView:c}=e.getStarData();t.current=rn(c,a,i,l),n.current=on(s,a,l)}return r(),{updateLabelRefs:r,getNamedStarsInView:()=>t.current,getEnabled:()=>n.current&&!o.current,dispose:He(()=>{o.current=ie(),e.onHidesHudChromeChange?.()})}}var I=new w;function sn(e){const t=O(e);return{projectFromHeliocentric(n,o){const r=t.cameraThree,{size:a}=e;return I.set(n.x,n.y,n.z),We(I,le.current,!0),I.project(r),Number.isFinite(I.x)&&Number.isFinite(I.y)&&Number.isFinite(I.z)&&Math.abs(I.x)<=1&&Math.abs(I.y)<=1&&I.z>=-1&&I.z<=1?(o.x=(I.x*.5+.5)*a.width,o.y=(-I.y*.5+.5)*a.height,!0):!1}}}var ee=new N;function ln(e){const{scene:t,cameraBabylon:n,layers:o}=Oe(e);return{projectFromHeliocentric(r,a){const i=t.getEngine();if(!i.getRenderingCanvas())return!1;const l=o.starfield.getWorldMatrix();ee.set(r.x,r.y,r.z),N.TransformCoordinatesToRef(ee,l,ee);const s=n.viewport.toGlobal(i.getRenderWidth(),i.getRenderHeight()),c=t.getTransformMatrix(),u=N.Project(ee,Ye.Identity(),c,s);return Number.isFinite(u.x)&&Number.isFinite(u.y)&&Number.isFinite(u.z)&&u.x>=s.x&&u.x<=s.x+s.width&&u.y>=s.y&&u.y<=s.y+s.height&&u.z>=0&&u.z<=1?(a.x=u.x,a.y=u.y,!0):!1}}}function un(e){return e.engineKind==="babylon"?ln(e):sn(e)}var be=4,Rr=64*be,cn=-25,fn=500,dn=.01;function $e(e){return Math.max(0,Math.min(1,e))}function mn(e){return e?.size!=null&&Number.isFinite(e.size)?$e(e.size):.5}function pn(e){return .08+.76*$e((e-.99)/.01)**3}function Ir(e){return(e?at(e,Ae(e)):Le)*pn(mn(e))*be}function ge(e,t){let n=t;for(;e[n]!==n;)n=e[n];let o=t;for(;o!==n;){const r=e[o];e[o]=n,o=r}return n}function hn(e,t,n){const o=ge(e,t),r=ge(e,n);o!==r&&(e[o]=r)}function _e(e,t,n){return`${e},${t},${n}`}function Sn(e,t){const n=e.length,o=Array.from({length:n},(c,u)=>u),r=t,a=new Map;for(let c=0;c<n;c+=1){const u=e[c],f=_e(Math.floor(u.x/r),Math.floor(u.y/r),Math.floor(u.z/r));a.has(f)||a.set(f,[]),a.get(f).push(c)}const i=t*t;for(let c=0;c<n;c+=1){const u=e[c],f=Math.floor(u.x/r),d=Math.floor(u.y/r),p=Math.floor(u.z/r);for(let h=-1;h<=1;h+=1)for(let S=-1;S<=1;S+=1)for(let g=-1;g<=1;g+=1){const F=_e(f+h,d+S,p+g),k=a.get(F);if(k)for(const R of k){if(R<=c)continue;const E=e[R],_=E.x-u.x,y=E.y-u.y,m=E.z-u.z;_*_+y*y+m*m<i&&hn(o,c,R)}}}const l=new Map;for(let c=0;c<n;c+=1){const u=ge(o,c);l.has(u)||l.set(u,[]),l.get(u).push(c)}const s=[];for(let c=0;c<n;c+=1)s.push(void 0);for(const c of l.values())c.length<=1||(c.sort((u,f)=>u-f),c.forEach((u,f)=>{f>0&&(s[u]={x:0,y:f*cn})}));return s}function vn(){const e=[];for(let t=0;t<fn;t+=1){const n=ot(t*.7%360,t*.3%180-90);n!=null&&e.push(n)}return e}function gn(){const e=vn(),t=e.length,n=bt,o=new Float32Array(t*3);return e.forEach((r,a)=>{o[a*3]=r.x*n,o[a*3+1]=r.y*n,o[a*3+2]=r.z*n}),{abbr:"_bootstrap",positions:o,sizes:new Float32Array(t).fill(Le*be),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(dn),brightness:new Float32Array(t).fill(1),starsInChunk:[]}}function yn(e,t,n=48){const o=[];for(let i=0;i<t.length;i+=1){const l=t[i];if(!Pt(l.position,e.position,e.forward,e.right,e.up,e.fovYRadians,e.aspect))continue;const s=l.position.x-e.position.x,c=l.position.y-e.position.y,u=l.position.z-e.position.z,f=s*s+c*c+u*u;o.push({entry:l,distSq:f,index:i})}o.sort((i,l)=>i.distSq!==l.distSq?i.distSq-l.distSq:i.index-l.index);const r=o.slice(0,n).map(i=>i.entry),a=Sn(r.map(i=>i.position),10);return r.map((i,l)=>({...i,labelOffset:a[l]}))}function xn(e,t){return`translate(${e}px, ${t}px) translate(-50%, calc(-100% - 8px))`}function bn(e){return e.map(t=>`${t.name}\0${t.position.x.toFixed(4)},${t.position.y.toFixed(4)},${t.position.z.toFixed(4)}\0${t.labelOffset?.x??""},${t.labelOffset?.y??""}`).join("|")}function Cn(e){const t=document.createElement("div");t.style.position="absolute",t.style.left="0",t.style.top="0",t.style.width="100%",t.style.height="100%",t.style.pointerEvents="none",e.appendChild(t);let n="",o=[],r=[];function a(){t.replaceChildren(),o=[],r=[],n=""}function i(l){t.replaceChildren(),o=[],r=l;for(const{position:s,name:c,labelOffset:u}of l){const f=document.createElement("div");f.className="star-label-wrapper",f.style.position="absolute",f.style.left="0",f.style.top="0",f.style.pointerEvents="none";const d=document.createElement("span");d.className="star-label",d.textContent=c,f.appendChild(d),t.appendChild(f),o.push({wrap:f,span:d})}}return{container:t,get lastSig(){return n},set lastSig(l){n=l},get rowEls(){return o},get currentRows(){return r},clearRows:a,rebuildRows:i}}function Pn(e,t,n){const o=n,r=Cn(o),a=At(e),i=un(e),l={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},s={x:0,y:0};return{onFrame:()=>{const u=t.getEnabled(),f=t.getNamedStarsInView();if(!u){r.lastSig!==""&&r.clearRows();return}a.syncFrustumHeliocentric(l);const d=yn(l,f),p=bn(d);p!==r.lastSig&&(r.lastSig=p,r.rebuildRows(d));for(let h=0;h<r.currentRows.length;h+=1){const S=r.currentRows[h],g=r.rowEls[h]?.wrap;if(!g)continue;if(!i.projectFromHeliocentric(S.position,s)){g.style.display="none";continue}g.style.display="";const F=s.x+(S.labelOffset?.x??0),k=s.y+(S.labelOffset?.y??0);g.style.transform=xn(F,k)}},dispose:()=>{r.clearRows(),r.container.parentNode===o&&o.removeChild(r.container)}}}function wn(e){const t=ye.subscribe(o=>({maxDistanceLevel:o.maxDistanceLevel,showStarNames:o.showStarNames}),(o,r)=>{e.onLabelInputsChange(),(r==null||o.maxDistanceLevel!==r.maxDistanceLevel)&&e.onMaxDistanceLevelChange()},{equalityFn:Re}),n=Gt(e.onLabelInputsChange);return{dispose(){t(),n()}}}var Fn={raMin:0,raMax:360,decMin:-90,decMax:90},Mn={chunks:[],namedStarsInView:[]};function En(e,t){return e===0&&t!=="success"}function qe(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[gn()]:[]}function Tn(e,t){const n=qe(e,t),o=n.slice(0,3).map(r=>r.abbr).join(",");return n.length===0?{syntheticKind:"empty",chunkAbbrevSample:o}:n.length===1&&n[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:o}:n.some(r=>r.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:o}:{syntheticKind:"real",chunkAbbrevSample:o}}function ze(e,t){return t.current===e.current}function kn(e,t,n,o,r){e.onerror=a=>{ze(t,n)||(o("error"),r(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{ze(t,n)||(o("error"),r("Starfield worker message error"))}}function _n(e,t,n,o,r,a,i){const{runId:l,...s}=e;l===t.current&&(n.current=l,o.current=s.starsInView,r({chunks:s.chunks,namedStarsInView:s.namedStarsInView}),a("ready"),i(null))}function zn(e,t,n,o,r){e.processStarfield({runId:t,catalog:n,maxDistanceLevel:o,bounds:Fn,raInHours:!1}).then(a=>{_n(a,r.runIdRef,r.lastSuccessfulRunIdRef,r.starsInViewRef,r.setStarData,r.setStarfieldStatus,r.setErrorMessage)}).catch(a=>{t===r.runIdRef.current&&(r.setStarfieldStatus("error"),r.setErrorMessage(a instanceof Error?a.message:"Starfield worker failed"))})}function Rn(e){let t=Mn,n="idle",o=null;return{getStarData:()=>t,getStatus:()=>n,getErrorMessage:()=>o,setStarData(r){t=typeof r=="function"?r(t):r,e.onAfterStarData()},setStarfieldStatus(r){n=typeof r=="function"?r(n):r,e.onAfterStatus()},setErrorMessage(r){o=typeof r=="function"?r(o):r,e.onAfterError()}}}function In(e,t){let n=[],o=null;function r(){o?.abort(),o=null;for(const i of n)e.removeChild(i);n=[]}function a(i,l){if(r(),i==="loading"){const s=document.createElement("div");s.className="starfield-status starfield-status--loading",s.style.position="absolute",s.style.left="50%",s.style.top="50%",s.style.transform="translate(-50%, -50%)",s.style.pointerEvents="none";const c=document.createElement("span");c.className="starfield-status__text",c.textContent="Loading stars…",s.appendChild(c),e.appendChild(s),n.push(s)}else if(i==="error"){const s=document.createElement("div");s.className="starfield-status starfield-status--error",s.style.position="absolute",s.style.left="50%",s.style.top="50%",s.style.transform="translate(-50%, -50%)",s.style.pointerEvents="auto";const c=document.createElement("div");c.className="starfield-status__message";const u=document.createElement("span");u.className="starfield-status__text",u.textContent=l??"Failed to load stars",c.appendChild(u);const f=document.createElement("button");f.type="button",f.className="starfield-status__retry",f.textContent="Retry",o=new AbortController,f.addEventListener("click",t,{signal:o.signal}),c.appendChild(f),s.appendChild(c),e.appendChild(s),n.push(s)}}return{refresh:a,dispose:r}}var An="/assets/starfield.worker-DeoSgUe7.js";function Nn(e){const t=ut();function n(){return t.getQueryData(["hyg-catalog"])?.stars??[]}const o={current:0},r={current:-1};let a=null,i=null;const l=typeof window.Worker>"u",s=window.Worker;s?(a=new s(An,{type:"module"}),i=pt(a),kn(a,o,r,e.setStarfieldStatus,e.setErrorMessage)):(e.setStarfieldStatus("error"),e.setErrorMessage("Workers not supported"));const c={runIdRef:o,lastSuccessfulRunIdRef:r,starsInViewRef:e.starsInViewRef,setStarData:e.setStarData,setStarfieldStatus:e.setStarfieldStatus,setErrorMessage:e.setErrorMessage};function u(){if(!i)return;const h=t.getQueryState([Fe]),S=n();if(En(S.length,h?.status))return;e.setStarfieldStatus("loading"),o.current+=1;const g=o.current,{maxDistanceLevel:F}=ye.getState();zn(i,g,S,F,c)}function f(){const h=t.getQueryState([Fe]);if(h?.status==="error"){if(l)return;const S=h.error;e.setStarfieldStatus("error"),e.setErrorMessage(S instanceof Error?S.message:String(S));return}h?.status==="success"&&!l&&e.setErrorMessage(null),u()}function d(){e.setErrorMessage(null),e.setStarfieldStatus("loading"),u()}const p=t.getQueryCache().subscribe(h=>{wt(h,"hyg-catalog")&&f()});return{runWorkerProcess:u,applyHygQueryState:f,retry:d,dispose(){if(p(),i){try{i[St]()}catch{}i=null}a?.terminate(),a=null}}}function Dn(e){const{host:t,domOverlay:n,starsInViewRef:o,refreshPointsMesh:r,pickFromClick:a}=e,i=()=>{Ve()||t.invalidate()},l=Rn({onAfterStarData:()=>{s.updateLabelRefs(),r(),i()},onAfterStatus:()=>{d(),r(),i()},onAfterError:()=>{d()}}),s=an({getStarData:l.getStarData,onHidesHudChromeChange:i}),c=Pn(t,{getNamedStarsInView:s.getNamedStarsInView,getEnabled:s.getEnabled},n),u=Nn({starsInViewRef:o,setStarData:l.setStarData,setStarfieldStatus:l.setStarfieldStatus,setErrorMessage:l.setErrorMessage}),f=In(n,u.retry);function d(){f.refresh(l.getStatus(),l.getErrorMessage())}const p=nn(a),h=wn({onLabelInputsChange:s.updateLabelRefs,onMaxDistanceLevelChange:u.runWorkerProcess});return{mountState:l,labelsBinding:s,workerLifecycle:u,nameLabels:c,refreshOverlay:d,bootstrap(){r(),i(),d(),u.applyHygQueryState()},dispose(){h.dispose(),s.dispose(),f.dispose(),c.dispose(),u.dispose(),p.dispose()}}}function Ar(e){}var Ke=null;function Nr(e){Ke=e}function Ln(){return Ke?.current??{}}var Hn=1495978707e-1,On=1e3;function Wn(e,t){const n=e.width,o=e.height,r=t.clientWidth,a=t.clientHeight;let i;Number.isFinite(n)&&n>0?i=n:Number.isFinite(r)?i=r:i=0;let l;return Number.isFinite(o)&&o>0?l=o:Number.isFinite(a)?l=a:l=0,!Number.isFinite(i)||!Number.isFinite(l)||i<=0||l<=0?null:{w:i,h:l}}function Bn(e,t,n,o,r=28){return!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)?!1:e>=r&&t>=r&&e<=n-r&&t<=o-r}function Vn(e){if(!Number.isFinite(e)||e<0)return"";const t=e/yt;if(t<.001){const n=t*Hn;return n<1?`${n.toFixed(3)} km`:n<1e3?`${n.toFixed(0)} km`:`${(n/1e3).toFixed(1)} Mm`}return t<1?`${t.toFixed(3)} AU`:t<100?`${t.toFixed(2)} AU`:`${t.toFixed(0)} AU`}function jn(e){return!Number.isFinite(e)||e<0?"":e<.01?`${e.toFixed(4)} pc`:e<1?`${e.toFixed(3)} pc`:e<100?`${e.toFixed(2)} pc`:`${e.toFixed(0)} pc`}function Un(e,t){const n=document.createElement("div");n.className="selected-body-label-wrapper",n.style.position="absolute",n.style.left="0",n.style.top="0",n.style.pointerEvents="none",n.style.display="none";const o=document.createElement("span");o.className="selected-body-label",n.appendChild(o),t.appendChild(n);const r=document.createElement("div");r.className="selected-body-callout-wrapper",r.style.display="none";const a=document.createElement("div");a.className="selected-body-callout__ring";const i=document.createElement("div");i.className="selected-body-callout__leader-v";const l=document.createElement("div");l.className="selected-body-callout__leader-h";const s=document.createElement("div");s.className="selected-body-callout__name";const c=document.createElement("div");c.className="selected-body-callout__distance",r.append(a,i,l,s,c),t.appendChild(r);let u=!1,f=!1;const d=v=>{v!==u&&(u=v,n.style.display=v?"":"none")},p=v=>{v!==f&&(f=v,r.style.display=v?"":"none")},h=re().getState().selection,S={id:h.selectedId,name:h.selectedName},g=re().subscribeSelector(v=>v.selection.selectedId,v=>{S.id=v}),F=re().subscribeSelector(v=>v.selection.selectedName,v=>{S.name=v});let k=ie();const R=He(()=>{k=ie(),e.invalidate()}),E=new w,_=new w,y=new w;let m="",x=0;function z(v,b){if(v==="hor"){const P=Ln()[b];return P?{pos:{x:P[0],y:P[1],z:P[2]},isSolar:!0}:null}if(v==="hyg"){const P=st();if(P.length===0)return null;const A=gt(P).get(b);return A?{pos:rt(A),isSolar:!1}:null}const M=[...dt(),...vt()];if(M.length===0)return null;const C=ct(M).get(b);return C?{pos:Ct(C),isSolar:!1}:null}return{onFrame:()=>{if(k){d(!1),p(!1);return}const{id:v,name:b}=S;if(!v||!b){d(!1),p(!1);return}let M;try{M=ht(v)}catch{d(!1),p(!1);return}const C=z(M.source,M.rawId);if(!C){d(!1),p(!1);return}const P=O(e).cameraThree;if(!P.isPerspectiveCamera){d(!1),p(!1);return}if(E.set(C.pos.x,C.pos.y,C.pos.z),We(E,le.current,!0),y.copy(E).project(P),!(Number.isFinite(y.x)&&Number.isFinite(y.y)&&Number.isFinite(y.z)&&Math.abs(y.x)<=1&&Math.abs(y.y)<=1&&y.z>=-1&&y.z<=1)){d(!1),p(!1);return}const A=O(e).gl.domElement,D=Wn(e.size,A);if(D==null){d(!1),p(!1);return}const{w:L,h:B}=D,ue=(y.x*.5+.5)*L,ce=(-y.y*.5+.5)*B;if(C.isSolar){o.textContent!==b&&(o.textContent=b),n.style.transform=`translate(${ue}px, ${ce}px) translate(-50%, -50%)`,d(!0),p(!1);return}if(!Bn(ue,ce,L,B)){d(!1),p(!1);return}s.textContent!==b&&(s.textContent=b),r.style.transform=`translate(${ue}px, ${ce}px)`;const Ce=performance.now();if(Ce-x>=On||m===""){Mt(P,_);const G={x:_.x,y:_.y,z:_.z},Pe=Math.hypot(C.pos.x-G.x,C.pos.y-G.y,C.pos.z-G.z),fe=Pe<1e5?Vn(Pe):jn(lt(G,C.pos));fe!==m&&(m=fe,c.textContent=fe),x=Ce}d(!1),p(!0)},dispose:()=>{g(),F(),R(),n.parentNode===t&&t.removeChild(n),r.parentNode===t&&t.removeChild(r)}}}function $n(e,t,n,o){const r=Math.sqrt(e*e+t*t+n*n);if(r<=0||!Number.isFinite(r)){o.x=0,o.y=0,o.z=0;return}const a=it(r)/r;o.x=e*a,o.y=t*a,o.z=n*a}function qn(e,t,n,o,r,a,i,l){const s=Math.sqrt(e*e+t*t+n*n);if(s<=0||!Number.isFinite(s)||!Number.isFinite(o)){const p=-r,h=-a,S=-i;return p*p+h*h+S*S<=l}const c=o/s,u=e*c-r,f=t*c-a,d=n*c-i;return u*u+f*f+d*d<=l}var Kn=3;function Gn(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function Xn(e,t,n){return Math.max(t,Math.min(n,e))}function Ge(e,t,n,o=1,r=256){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)||!Number.isFinite(r)||t<=0||e<=0||o<=0||r<=0)return 0;const a=e*(n/t);return a<=0?0:Xn(a*o,0,r)}function Yn(e,t,n){const o=Ge(e,t,n);if(o<=0)return 0;const r=o*.5+Kn;return Math.min(r,256)}function Xe(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function Qn(e,t){let n=0,o=-1,r=null;for(let a=0;a<e.length;a+=1){const i=e[a],l=i.starsInChunk.length,s=t(i,a);s&&Xe(s,r)&&(r=s,o=n+s.index),n+=l}return o}var de={px:0,py:0};function Zn(e){const{positions:t,sizes:n,distancesPc:o,starCount:r,uScale:a,camFrustum:i,tanHalfV:l,cameraHelioPc:s,maxDistSqPc:c,mouseX:u,mouseY:f,projectStarToScreenPx:d}=e,p=Math.min(r,t.length/3,n.length,o.length);let h=null;for(let S=0;S<p;S+=1){const g=S*3,F=t[g],k=t[g+1],R=t[g+2];if(!qn(F,k,R,o[S]??0,s.x,s.y,s.z,c))continue;const E=F-i.position.x,_=k-i.position.y,y=R-i.position.z,m=E*i.forward.x+_*i.forward.y+y*i.forward.z;if(m<=1e-6)continue;const x=E*i.right.x+_*i.right.y+y*i.right.z,z=E*i.up.x+_*i.up.y+y*i.up.z,T=l*i.aspect*m;if(Math.abs(x)>T)continue;const v=l*m;if(Math.abs(z)>v)continue;const b=m,M=n[S]??0,C=Ge(M,b,a),P=Yn(M,b,a);if(P<=0)continue;d(F,k,R,de);const A=de.px-u,D=de.py-f,L=A*A+D*D;if(L>P*P)continue;const B={index:S,distSqPx:L,depthCam:b,renderedPx:C};Xe(B,h)&&(h=B)}return h}var me=new w,pe=new w;function Jn(e,t,n,o,r,a,i,l,s,c,u,f,d){const p=n.getBoundingClientRect();return Zn({positions:a,sizes:i,distancesPc:l,starCount:s,uScale:Gn(p.height,o.fov*Math.PI/180),camFrustum:c,tanHalfV:u,cameraHelioPc:f,maxDistSqPc:d,mouseX:e-p.left,mouseY:t-p.top,projectStarToScreenPx:(h,S,g,F)=>{me.set(h,S,g),me.applyMatrix4(r.matrixWorld),pe.copy(me).project(o),F.px=(pe.x*.5+.5)*p.width,F.py=(-pe.y*.5+.5)*p.height}})}function er(e,t){if(t<0||t>=e.length)return!1;const n=e[t],o=n.proper??(n.hip!=null?`HIP ${n.hip}`:`Star ${n.id}`);return xt.select(mt("hyg",n.id),o,"star"),!0}function tr(e){if(e.starsInView.length===0)return!1;const t=e.prepared;if(t==null)return!1;const n=Qn(e.chunks,(o,r)=>e.pickInChunk(o,r,t));return er(e.starsInView,n)}function nr(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},cameraHelioPc:{x:0,y:0,z:0}}}function rr(e){const t=Math.tan(e.frustum.fovYRadians*.5);return $n(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.cameraHelioPc),{tanHalfV:t,maxDistSqPc:500**2}}function or(e,t){t.length=0;for(const n of e){const o=new Float32Array(n.starsInChunk.length);for(let r=0;r<n.starsInChunk.length;r+=1){const a=n.starsInChunk[r];o[r]=a?Ae(a):0}t.push(o)}}function ar(e,t,n){const o=qe(e(),t());return or(o,n),o}var H={chunks:[],pointsMeshes:[],starsInView:[]},te=nr(),ir=new w,sr=new w,lr=new w;function Dr(){return H}function Lr(e,t){const n=O(e),o=n.layers.starfield,r={current:[]},a=[],i=[],l=[],s=[],c=[];let u=null,f=null,d=0;const p=new Qe,h=new Ze,S=new tt;let g;function F(m,x,z){const T=n.cameraThree;Be(T,te.frustum,ir,sr,lr);const{tanHalfV:v,maxDistSqPc:b}=rr(te);return tr({starsInView:r.current,chunks:H.chunks,prepared:{tanHalfV:v,maxDistSqPc:b},pickInChunk:(M,C,P)=>{const A=a[C],D=s[C],L=c[C];return!A||!D||!L?null:Jn(m,x,z,T,A,M.positions,L,D,M.starsInChunk.length,te.frustum,P.tanHalfV,te.cameraHelioPc,P.maxDistSqPc)}})}function k(m){const x=new et;return x.setAttribute("position",new V(m.positions,3)),x.setAttribute("size",new V(m.sizes,1)),x.setAttribute("color",new V(m.colors,3)),x.setAttribute("warm",new V(m.warm,1)),x.setAttribute("brightness",new V(m.brightness,1)),x.computeBoundingSphere(),x}function R(){for(const m of a)o.remove(m);a.length=0,s.length=0,c.length=0;for(const m of i)o.remove(m);i.length=0;for(const m of l)m.dispose();l.length=0}function E(m){H.chunks=m,H.pointsMeshes=a,H.starsInView=r.current}function _(){if(R(),u==null||f==null){E([]);return}const m=ar(g.mountState.getStarData,g.mountState.getStatus,s);for(const x of m){const z=k(x);l.push(z),c.push(new Float32Array(x.sizes));const T=new we(z,u);T.frustumCulled=!0,T.raycast=()=>{},o.add(T),a.push(T);const v=new we(z,f);v.frustumCulled=!0,v.renderOrder=1,o.add(v),i.push(v)}E(m)}u=en(),f=tn(),g=Dn({host:e,domOverlay:t,starsInViewRef:r,refreshPointsMesh:_,pickFromClick:F});const y=Un(e,t);return g.bootstrap(),{onFrame:()=>{if(g.nameLabels.onFrame(),y.onFrame(),Ve()){const m=Math.min(.06,n.timer.getDelta());d+=m,u?.uniforms.uTime&&(u.uniforms.uTime.value=d),f?.uniforms.uTime&&(f.uniforms.uTime.value=d)}g.mountState.getStarData,g.mountState.getStatus},dispose:()=>{g.dispose(),y.dispose(),R(),u?.dispose(),u=null,f?.dispose(),f=null,H.chunks=[],H.pointsMeshes=[],H.starsInView=[]}}}function ne(e){return new ae(e[0],e[1],e[2])}function ur(){return{cool:ne(W.star4),warm:ne(W.star3),hot:ne(W.star2),flare:ne(W.star1)}}var cr=`
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
`;function Hr(e){return e==null||Array.isArray(e)||!(e instanceof K)?!1:e.userData.cosmosiveSunPhotosphere===!0}function Or(e,t){const n=ur(),o={cool:e?.cool??n.cool,warm:e?.warm??n.warm,hot:e?.hot??n.hot,flare:e?.flare??n.flare},r={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:o.cool.clone()},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},a=new K({uniforms:r,vertexShader:cr,fragmentShader:fr,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var dr=`
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
`,mr=`
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
`;function he(e){return new ae(e[0],e[1],e[2])}function pr(){return{warm:he(W.star3),hot:he(W.star2),flare:he(W.star1)}}function Wr(e){return e==null||Array.isArray(e)||!(e instanceof K)?!1:e.userData.cosmosiveSunCorona===!0}function Br(e){const t=pr(),n={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},o={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:n.warm.clone()},uPaletteHot:{value:n.hot.clone()},uPaletteFlare:{value:n.flare.clone()}},r=new K({uniforms:o,vertexShader:dr,fragmentShader:mr,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return r.userData.cosmosiveSunCorona=!0,r}export{Lt as A,Cr as B,Fr as C,Er as D,Tr as E,Rt as F,Mt as I,le as L,Dt as M,Pr as N,Ut as O,At as P,Oe as R,qt as S,Ht as T,Ir as _,Dr as a,zr as b,nr as c,Zn as d,Gn as f,qe as g,Dn as h,Hr as i,wr as j,kr as k,rr as l,Ar as m,Wr as n,Lr as o,Nr as p,Or as r,ar as s,Br as t,tr as u,W as v,Mr as w,_r as x,J as y,br as z};
