import{n as Ae}from"./state-data-vendor-sq1yP6E9.js";import{Ht as L,Rt as Qe}from"./babylon-postprocess-vendor-BBh1ALWr.js";import{B as Ze,C as Je,Q as Pe,R as et,bt as F,lt as ee,o as X,p as ce,s as tt,ut as nt,yt as Ne}from"./three-vendor-vu4QJ6OG.js";import{$ as Me,$t as rt,Cn as ot,Fa as xe,Ga as at,Ka as it,Qa as st,Sn as De,Vt as Le,Wi as lt,Za as ut,a as ct,an as ft,bo as dt,bt as mt,fa as le,go as pt,gt as ht,ho as vt,ht as St,lt as gt,na as fe,nn as Oe,on as yt,oo as xt,qa as We,ra as He,tn as bt,uo as Ct,wn as wt,yo as Pt}from"./index-Cg5s0Zv3.js";import{n as V,t as Mt}from"./queryCacheNotify-BoJ_4xvi.js";var be=new WeakMap;function pr(e,t){be.set(e,t)}function hr(e){be.delete(e)}function Be(e){if(e.engineKind!=="babylon")throw new Error("asBabylon: SceneHost is not a Babylon implementation");const t=be.get(e);if(!t)throw new Error("asBabylon: missing Babylon extras (host not fully initialized?)");return t}var me={current:null};function Ft(e,t,n){return n&&t&&dt(e,t.position.x,t.position.y,t.position.z),e}function Ve(e,t,n){if(n&&t){const o=e;o.x+=t.position.x,o.y+=t.position.y,o.z+=t.position.z}return e}function Et(e,t){return e.getWorldPosition(t),Ft(t,me.current,!0),t}function Tt(e,t,n,o,r){e.updateMatrixWorld(!0),e.getWorldPosition(n),t.position.x=n.x,t.position.y=n.y,t.position.z=n.z,e.getWorldDirection(n),o.setFromMatrixColumn(e.matrixWorld,0).normalize(),r.setFromMatrixColumn(e.matrixWorld,1).normalize(),t.forward.x=n.x,t.forward.y=n.y,t.forward.z=n.z,t.right.x=o.x,t.right.y=o.y,t.right.z=o.z,t.up.x=r.x,t.up.y=r.y,t.up.z=r.z,t.fovYRadians=et.degToRad(e.fov),t.aspect=e.aspect}function je(e,t,n,o,r){Tt(e,t,n,o,r);{const a=me.current;a&&(t.position.x-=a.position.x,t.position.y-=a.position.y,t.position.z-=a.position.z)}}function _t(e){const t=V(e).cameraThree,n=new F,o=new F,r=new F;return{syncFrustumHeliocentric(a){je(t,a,n,o,r)}}}var Rt=new L(0,0,-1),zt=new L(1,0,0),It=new L(0,1,0),te=new L,ne=new L,re=new L,oe=new L;function kt(e,t,n){e.computeWorldMatrix(),e.getWorldMatrix().getTranslationToRef(te),n.position.x=te.x,n.position.y=te.y,n.position.z=te.z;{const[r,a,i]=t.getFloatingOrigin();n.position.x+=r,n.position.y+=a,n.position.z+=i}e.getDirectionToRef(Rt,ne),e.getDirectionToRef(zt,re),e.getDirectionToRef(It,oe),n.forward.x=ne.x,n.forward.y=ne.y,n.forward.z=ne.z,n.right.x=re.x,n.right.y=re.y,n.right.z=re.z,n.up.x=oe.x,n.up.y=oe.y,n.up.z=oe.z,n.fovYRadians=e.fov;const o=e.getEngine();n.aspect=o.getRenderWidth()/Math.max(1,o.getRenderHeight())}function At(e){const{cameraBabylon:t}=Be(e);return{syncFrustumHeliocentric(n){kt(t,e,n)}}}function Nt(e){return e.engineKind==="babylon"?At(e):_t(e)}var Dt=()=>({starfieldChunksTotal:0,starfieldChunksVisible:0,starfieldVerticesTotal:0,starfieldPipelineStatus:"idle",starfieldSyntheticKind:"empty",starfieldChunkAbbrevSample:"",shipsCandidates:0,shipsRendered:0,combatShotsTracerEnemySlots:0,combatShotsConquestCandidates:0,combatShotsConquestPassedFrustum:0,updatedAtMs:0}),Fe=Dt();function vr(e){}typeof globalThis.window<"u";var Se="__cosmosivePointer",ge=new WeakMap;function Lt(e,t){t==null?delete e.userData[Se]:e.userData[Se]=t}function Y(e){return e.userData[Se]}function Ot(e,t){t==null?ge.delete(e):ge.set(e,t)}function Q(e){return ge.get(e)}function Sr(e,t,n){e.engineKind==="r3f"?Lt(t,n):Ot(t,n)}var Ee=new Ne;function Wt(e,t,n,o){const r=n.getBoundingClientRect();o.x=(e-r.left)/r.width*2-1,o.y=-((t-r.top)/r.height)*2+1}function Ht(e){const t=V(e);t.scene.updateMatrixWorld(!0);const n=t.gl.domElement,o=t.cameraThree,r=n.clientWidth/Math.max(1,n.clientHeight);Number.isFinite(r)&&Math.abs(o.aspect-r)>1e-6&&(o.aspect=r,o.updateProjectionMatrix()),o.updateMatrixWorld(!0)}function Bt(e){return V(e).scene.children.filter(t=>t.visible!==!1)}function Z(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent}return!1}function J(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent??null}return!1}var Te=new F,_e=new F,Vt=new F,ue=[];function jt(e){return ue.push(e),()=>{const t=ue.indexOf(e);t>=0&&ue.splice(t,1)}}function de(e,t){for(const n of ue)if(n(e,t))return!0;return!1}function Ut(e,t,n,o,r){let a=!1;const i={nativeEvent:n,object:e,point:o,index:r,stopPropagation:()=>{a=!0}};J(e,u=>{const s=Q(u)?.[t];return s?(s(i),a):!1})}function gr(e,t,n,o,r,a){if(e.engineKind==="babylon"){Ut(t,n,o,r,a);return}let i=!1;const u={nativeEvent:o,object:t,point:r,index:a,stopPropagation:()=>{i=!0}};Z(t,s=>{const l=Y(s)?.[n];return l?(l(u),i):!1})}function yr(e,t,n,o,r){if(t!==n){if(e.engineKind==="babylon"){t&&J(t,a=>{const i=Q(a)?.onPointerOut;return i?(i({nativeEvent:o,object:a,point:Te,stopPropagation:()=>{}}),!0):!1}),n&&J(n,a=>{const i=Q(a)?.onPointerOver;return i?(i({nativeEvent:o,object:a,point:_e.copy(r),stopPropagation:()=>{}}),!0):!1});return}t&&Z(t,a=>{const i=Y(a)?.onPointerOut;return i?(i({nativeEvent:o,object:a,point:Te,stopPropagation:()=>{}}),!0):!1}),n&&Z(n,a=>{const i=Y(a)?.onPointerOver;return i?(i({nativeEvent:o,object:a,point:_e.copy(r),stopPropagation:()=>{}}),!0):!1})}}function xr(e,t){for(const n of e){let o=!1;if(Z(n.object,r=>Y(r)?.onClick?(o=!0,!0):!1),o)return{kind:"interactive",object:n.object,point:n.point.clone(),index:n.index!==void 0?n.index:void 0,ndc:{x:t.x,y:t.y}}}return null}function br(e,t,n,o){const r=e.pickAt(t,n);if(!r)return null;const a=r.node;let i=!1;return J(a,u=>Q(u)?.onClick?(i=!0,!0):!1),i?{kind:"interactive",object:a,point:new F(r.point[0],r.point[1],r.point[2]),ndc:{x:o.x,y:o.y}}:null}function $t(e,t){Ht(e),Ee.set(t.x,t.y);const n=V(e);return n.raycaster.setFromCamera(Ee,n.cameraThree),n.raycaster.intersectObjects(Bt(e),!0)}function qt(e,t,n,o){if(n.button!==0)return;const r=e.pickAt(n.clientX,n.clientY);if(!r){if(de(n,t))return;o();return}const a=r.node,i=new F(r.point[0],r.point[1],r.point[2]);let u=!1,s=!1;const l={nativeEvent:n,object:a,point:i,index:void 0,stopPropagation:()=>{u=!0}};J(a,c=>{const f=Q(c)?.onClick;return f?(s=!0,f(l),u):!1}),!s&&(de(n,t)||o())}function Cr(e,t,n,o){if(e.engineKind==="babylon"){qt(e,t,n,o);return}if(n.button!==0)return;const r={x:0,y:0};Wt(n.clientX,n.clientY,t,r);const a=$t(e,r);if(a.length===0){if(de(n,t))return;o();return}for(const i of a){let u=!1,s=!1;const l={nativeEvent:n,object:i.object,point:Vt.copy(i.point),index:(i.index!==void 0,i.index),stopPropagation:()=>{u=!0}};if(Z(i.object,c=>{const f=Y(c)?.onClick;return f?(s=!0,f(l),u):!1}),s)return}de(n,t)||o()}function wr(e){const t=e.replace(/^#/,""),n=parseInt(t,16);return Number.isFinite(n)?[Math.floor(n/65536)%256,Math.floor(n/256)%256,n%256]:[0,0,0]}function Kt(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function Pr(e){return Math.max(0,Math.min(255,Math.round(e)))}function ae(e,t=1,n=1){const[o,r,a]=Kt(e),i=Math.max(.15,Math.min(1,t));return[o*i,r*i,a*i,n]}var $={star1:ae("#fff3a8",1),star2:ae("#f5c238",1),star3:ae("#e07b1a",1),star4:ae("#a8380c",1)};function Ue(){const e=le().getState(),t=rt.getState().session.gameStarted,n=(e.camera.visitId!=null||e.camera.watchId!=null)&&e.camera.autoWatch;return e.playing||n||t}function Gt(){const e=Le.getState();return{ttPhase:e.phase,c2TourOrder:e.c2TourOrder,remainingC2StarIds:e.remainingC2StarIds,timeTrialStarNamesUi:Oe.getState().appMode==="time-trial",showStarNames:xe.getState().showStarNames}}function Xt(e){const t=Le.subscribe(o=>({phase:o.phase,c2TourOrder:o.c2TourOrder,remainingC2StarIds:o.remainingC2StarIds}),()=>e(),{equalityFn:Ae}),n=Oe.subscribe((o,r)=>{const a=o.appMode==="time-trial",i=r!=null&&r.appMode==="time-trial";r!=null&&a===i||e()});return()=>{t(),n()}}var Yt=256,Qt=320,Zt=`
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
`,Jt=`
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
`,en=`
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
`;function $e(e){const t=new ee({uniforms:{uScale:{value:1},uPointSizeMax:{value:e?.pointSizeMax??Yt},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uMinScreenPx:{value:e?.minScreenPx??0},uMaxScreenPx:{value:e?.maxScreenPx??0},uPaletteHot:{value:new ce(1,.78,.56)},uPaletteFlare:{value:new ce(1,.92,.75)}},vertexShader:Zt,fragmentShader:e?.useHaloShader?en:Jt,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),n=new Ne;return t.onBeforeRender=(o,r,a)=>{const i=a;i.isPerspectiveCamera&&i.fov&&(o.getSize(n),t.uniforms.uScale.value=n.y/(2*Math.tan(i.fov*Math.PI/360)))},t}function tn(){return $e({twinkleAmp:.03,twinkleFreq:.9})}function nn(){return $e({useHaloShader:!0,sizeMultiplier:1.6,minScreenPx:2.1,maxScreenPx:5.2,pointSizeMax:Qt,twinkleAmp:.02,twinkleFreq:.55})}var Ce=4,Mr=64*Ce,rn=-25,on=500,an=.01;function qe(e){return Math.max(0,Math.min(1,e))}function sn(e){return e?.size!=null&&Number.isFinite(e.size)?qe(e.size):.5}function ln(e){return .08+.76*qe((e-.99)/.01)**3}function Fr(e){return(e?it(e,De(e)):We)*ln(sn(e))*Ce}function ye(e,t){let n=t;for(;e[n]!==n;)n=e[n];let o=t;for(;o!==n;){const r=e[o];e[o]=n,o=r}return n}function un(e,t,n){const o=ye(e,t),r=ye(e,n);o!==r&&(e[o]=r)}function Re(e,t,n){return`${e},${t},${n}`}function cn(e,t){const n=e.length,o=Array.from({length:n},(l,c)=>c),r=t,a=new Map;for(let l=0;l<n;l+=1){const c=e[l],f=Re(Math.floor(c.x/r),Math.floor(c.y/r),Math.floor(c.z/r));a.has(f)||a.set(f,[]),a.get(f).push(l)}const i=t*t;for(let l=0;l<n;l+=1){const c=e[l],f=Math.floor(c.x/r),d=Math.floor(c.y/r),S=Math.floor(c.z/r);for(let p=-1;p<=1;p+=1)for(let g=-1;g<=1;g+=1)for(let M=-1;M<=1;M+=1){const C=Re(f+p,d+g,S+M),k=a.get(C);if(k)for(const A of k){if(A<=l)continue;const E=e[A],_=E.x-c.x,w=E.y-c.y,z=E.z-c.z;_*_+w*w+z*z<i&&un(o,l,A)}}}const u=new Map;for(let l=0;l<n;l+=1){const c=ye(o,l);u.has(c)||u.set(c,[]),u.get(c).push(l)}const s=[];for(let l=0;l<n;l+=1)s.push(void 0);for(const l of u.values())l.length<=1||(l.sort((c,f)=>c-f),l.forEach((c,f)=>{f>0&&(s[c]={x:0,y:f*rn})}));return s}function fn(){const e=[];for(let t=0;t<on;t+=1){const n=at(t*.7%360,t*.3%180-90);n!=null&&e.push(n)}return e}function dn(){const e=fn(),t=e.length,n=Ct,o=new Float32Array(t*3);return e.forEach((r,a)=>{o[a*3]=r.x*n,o[a*3+1]=r.y*n,o[a*3+2]=r.z*n}),{abbr:"_bootstrap",positions:o,sizes:new Float32Array(t).fill(We*Ce),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(an),brightness:new Float32Array(t).fill(1),starsInChunk:[]}}var mn={raMin:0,raMax:360,decMin:-90,decMax:90},pn={chunks:[],namedStarsInView:[]};function hn(e,t){return e===0&&t!=="success"}function Ke(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[dn()]:[]}function vn(e,t){const n=Ke(e,t),o=n.slice(0,3).map(r=>r.abbr).join(",");return n.length===0?{syntheticKind:"empty",chunkAbbrevSample:o}:n.length===1&&n[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:o}:n.some(r=>r.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:o}:{syntheticKind:"real",chunkAbbrevSample:o}}function ze(e,t){return t.current===e.current}function Sn(e,t,n,o,r){e.onerror=a=>{ze(t,n)||(o("error"),r(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{ze(t,n)||(o("error"),r("Starfield worker message error"))}}function gn(e,t,n,o,r,a,i){const{runId:u,...s}=e;u===t.current&&(n.current=u,o.current=s.starsInView,r({chunks:s.chunks,namedStarsInView:s.namedStarsInView}),a("ready"),i(null))}function yn(e,t,n,o,r){e.processStarfield({runId:t,catalog:n,maxDistanceLevel:o,bounds:mn,raInHours:!1}).then(a=>{gn(a,r.runIdRef,r.lastSuccessfulRunIdRef,r.starsInViewRef,r.setStarData,r.setStarfieldStatus,r.setErrorMessage)}).catch(a=>{t===r.runIdRef.current&&(r.setStarfieldStatus("error"),r.setErrorMessage(a instanceof Error?a.message:"Starfield worker failed"))})}function xn(e){return{dispose:jt((t,n)=>t.button!==0||!(n instanceof HTMLCanvasElement)?!1:e(t.clientX,t.clientY,n))}}function Ge(e){return e==="countdown"||e==="active"||e==="complete"}function bn(e,t,n,o){if(!o||!Ge(t)||n.length===0)return e;const r=new Set(n);return e.filter(a=>a.catalogId!=null&&r.has(a.catalogId))}function Cn(e,t,n){return!n||!Ge(t)?e:e||t==="countdown"}function wn(e){const t={current:[]},n={current:!1},o={current:fe()};function r(){const{ttPhase:a,c2TourOrder:i,timeTrialStarNamesUi:u,showStarNames:s}=Gt(),{namedStarsInView:l}=e.getStarData();t.current=bn(l,a,i,u),n.current=Cn(s,a,u)}return r(),{updateLabelRefs:r,getNamedStarsInView:()=>t.current,getEnabled:()=>n.current&&!o.current,dispose:He(()=>{o.current=fe(),e.onHidesHudChromeChange?.()})}}var I=new F;function Pn(e){const t=V(e);return{projectFromHeliocentric(n,o){const r=t.cameraThree,{size:a}=e;return I.set(n.x,n.y,n.z),Ve(I,me.current,!0),I.project(r),Number.isFinite(I.x)&&Number.isFinite(I.y)&&Number.isFinite(I.z)&&Math.abs(I.x)<=1&&Math.abs(I.y)<=1&&I.z>=-1&&I.z<=1?(o.x=(I.x*.5+.5)*a.width,o.y=(-I.y*.5+.5)*a.height,!0):!1}}}var ie=new L;function Mn(e){const{scene:t,cameraBabylon:n,layers:o}=Be(e);return{projectFromHeliocentric(r,a){const i=t.getEngine();if(!i.getRenderingCanvas())return!1;const u=o.starfield.getWorldMatrix();ie.set(r.x,r.y,r.z),L.TransformCoordinatesToRef(ie,u,ie);const s=n.viewport.toGlobal(i.getRenderWidth(),i.getRenderHeight()),l=t.getTransformMatrix(),c=L.Project(ie,Qe.Identity(),l,s);return Number.isFinite(c.x)&&Number.isFinite(c.y)&&Number.isFinite(c.z)&&c.x>=s.x&&c.x<=s.x+s.width&&c.y>=s.y&&c.y<=s.y+s.height&&c.z>=0&&c.z<=1?(a.x=c.x,a.y=c.y,!0):!1}}}function Fn(e){return e.engineKind==="babylon"?Mn(e):Pn(e)}function En(e,t,n=48){const o=[];for(let i=0;i<t.length;i+=1){const u=t[i];if(!Pt(u.position,e.position,e.forward,e.right,e.up,e.fovYRadians,e.aspect))continue;const s=u.position.x-e.position.x,l=u.position.y-e.position.y,c=u.position.z-e.position.z,f=s*s+l*l+c*c;o.push({entry:u,distSq:f,index:i})}o.sort((i,u)=>i.distSq!==u.distSq?i.distSq-u.distSq:i.index-u.index);const r=o.slice(0,n).map(i=>i.entry),a=cn(r.map(i=>i.position),10);return r.map((i,u)=>({...i,labelOffset:a[u]}))}function Tn(e,t){return`translate(${e}px, ${t}px) translate(-50%, calc(-100% - 8px))`}function _n(e){return e.map(t=>`${t.name}\0${t.position.x.toFixed(4)},${t.position.y.toFixed(4)},${t.position.z.toFixed(4)}\0${t.labelOffset?.x??""},${t.labelOffset?.y??""}`).join("|")}function Rn(e){const t=document.createElement("div");t.style.position="absolute",t.style.left="0",t.style.top="0",t.style.width="100%",t.style.height="100%",t.style.pointerEvents="none",e.appendChild(t);let n="",o=[],r=[];function a(){t.replaceChildren(),o=[],r=[],n=""}function i(u){t.replaceChildren(),o=[],r=u;for(const{position:s,name:l,labelOffset:c}of u){const f=document.createElement("div");f.className="star-label-wrapper",f.style.position="absolute",f.style.left="0",f.style.top="0",f.style.pointerEvents="none";const d=document.createElement("span");d.className="star-label",d.textContent=l,f.appendChild(d),t.appendChild(f),o.push({wrap:f,span:d})}}return{container:t,get lastSig(){return n},set lastSig(u){n=u},get rowEls(){return o},get currentRows(){return r},clearRows:a,rebuildRows:i}}function zn(e,t,n){const o=n,r=Rn(o),a=Nt(e),i=Fn(e),u={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},s={x:0,y:0};return{onFrame:()=>{const c=t.getEnabled(),f=t.getNamedStarsInView();if(!c){r.lastSig!==""&&r.clearRows();return}a.syncFrustumHeliocentric(u);const d=En(u,f),S=_n(d);S!==r.lastSig&&(r.lastSig=S,r.rebuildRows(d));for(let p=0;p<r.currentRows.length;p+=1){const g=r.currentRows[p],M=r.rowEls[p]?.wrap;if(!M)continue;if(!i.projectFromHeliocentric(g.position,s)){M.style.display="none";continue}M.style.display="";const C=s.x+(g.labelOffset?.x??0),k=s.y+(g.labelOffset?.y??0);M.style.transform=Tn(C,k)}},dispose:()=>{r.clearRows(),r.container.parentNode===o&&o.removeChild(r.container)}}}function In(e){const t=xe.subscribe(o=>({maxDistanceLevel:o.maxDistanceLevel,showStarNames:o.showStarNames}),(o,r)=>{e.onLabelInputsChange(),(r==null||o.maxDistanceLevel!==r.maxDistanceLevel)&&e.onMaxDistanceLevelChange()},{equalityFn:Ae}),n=Xt(e.onLabelInputsChange);return{dispose(){t(),n()}}}function kn(e){let t=pn,n="idle",o=null;return{getStarData:()=>t,getStatus:()=>n,getErrorMessage:()=>o,setStarData(r){t=typeof r=="function"?r(t):r,e.onAfterStarData()},setStarfieldStatus(r){n=typeof r=="function"?r(n):r,e.onAfterStatus()},setErrorMessage(r){o=typeof r=="function"?r(o):r,e.onAfterError()}}}function An(e,t){let n=[],o=null;function r(){o?.abort(),o=null;for(const i of n)e.removeChild(i);n=[]}function a(i,u){if(r(),i==="loading"){const s=document.createElement("div");s.className="starfield-status starfield-status--loading",s.style.position="absolute",s.style.left="50%",s.style.top="50%",s.style.transform="translate(-50%, -50%)",s.style.pointerEvents="none";const l=document.createElement("span");l.className="starfield-status__text",l.textContent="Loading stars…",s.appendChild(l),e.appendChild(s),n.push(s)}else if(i==="error"){const s=document.createElement("div");s.className="starfield-status starfield-status--error",s.style.position="absolute",s.style.left="50%",s.style.top="50%",s.style.transform="translate(-50%, -50%)",s.style.pointerEvents="auto";const l=document.createElement("div");l.className="starfield-status__message";const c=document.createElement("span");c.className="starfield-status__text",c.textContent=u??"Failed to load stars",l.appendChild(c);const f=document.createElement("button");f.type="button",f.className="starfield-status__retry",f.textContent="Retry",o=new AbortController,f.addEventListener("click",t,{signal:o.signal}),l.appendChild(f),s.appendChild(l),e.appendChild(s),n.push(s)}}return{refresh:a,dispose:r}}var Nn="/assets/starfield.worker-DeoSgUe7.js";function Dn(e){const t=ct();function n(){return t.getQueryData(["hyg-catalog"])?.stars??[]}const o={current:0},r={current:-1};let a=null,i=null;const u=typeof window.Worker>"u",s=window.Worker;s?(a=new s(Nn,{type:"module"}),i=ht(a),Sn(a,o,r,e.setStarfieldStatus,e.setErrorMessage)):(e.setStarfieldStatus("error"),e.setErrorMessage("Workers not supported"));const l={runIdRef:o,lastSuccessfulRunIdRef:r,starsInViewRef:e.starsInViewRef,setStarData:e.setStarData,setStarfieldStatus:e.setStarfieldStatus,setErrorMessage:e.setErrorMessage};function c(){if(!i)return;const p=t.getQueryState([Me]),g=n();if(hn(g.length,p?.status))return;e.setStarfieldStatus("loading"),o.current+=1;const M=o.current,{maxDistanceLevel:C}=xe.getState();yn(i,M,g,C,l)}function f(){const p=t.getQueryState([Me]);if(p?.status==="error"){if(u)return;const g=p.error;e.setStarfieldStatus("error"),e.setErrorMessage(g instanceof Error?g.message:String(g));return}p?.status==="success"&&!u&&e.setErrorMessage(null),c()}function d(){e.setErrorMessage(null),e.setStarfieldStatus("loading"),c()}const S=t.getQueryCache().subscribe(p=>{Mt(p,"hyg-catalog")&&f()});return{runWorkerProcess:c,applyHygQueryState:f,retry:d,dispose(){if(S(),i){try{i[St]()}catch{}i=null}a?.terminate(),a=null}}}function Ln(e){const{host:t,domOverlay:n,starsInViewRef:o,refreshPointsMesh:r,pickFromClick:a}=e,i=()=>{Ue()||t.invalidate()},u=kn({onAfterStarData:()=>{s.updateLabelRefs(),r(),i()},onAfterStatus:()=>{d(),r(),i()},onAfterError:()=>{d()}}),s=wn({getStarData:u.getStarData,onHidesHudChromeChange:i}),l=zn(t,{getNamedStarsInView:s.getNamedStarsInView,getEnabled:s.getEnabled},n),c=Dn({starsInViewRef:o,setStarData:u.setStarData,setStarfieldStatus:u.setStarfieldStatus,setErrorMessage:u.setErrorMessage}),f=An(n,c.retry);function d(){f.refresh(u.getStatus(),u.getErrorMessage())}const S=xn(a),p=In({onLabelInputsChange:s.updateLabelRefs,onMaxDistanceLevelChange:c.runWorkerProcess});return{mountState:u,labelsBinding:s,workerLifecycle:c,nameLabels:l,refreshOverlay:d,bootstrap(){r(),i(),d(),c.applyHygQueryState()},dispose(){p.dispose(),s.dispose(),f.dispose(),l.dispose(),c.dispose(),S.dispose()}}}function Er(e){}var Xe=null;function Tr(e){Xe=e}function On(){return Xe?.current??{}}var Wn=1495978707e-1,Hn=1e3;function Bn(e,t){const n=e.width,o=e.height,r=t.clientWidth,a=t.clientHeight;let i;Number.isFinite(n)&&n>0?i=n:Number.isFinite(r)?i=r:i=0;let u;return Number.isFinite(o)&&o>0?u=o:Number.isFinite(a)?u=a:u=0,!Number.isFinite(i)||!Number.isFinite(u)||i<=0||u<=0?null:{w:i,h:u}}function Vn(e,t,n,o,r=28){return!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)?!1:e>=r&&t>=r&&e<=n-r&&t<=o-r}function jn(e){if(!Number.isFinite(e)||e<0)return"";const t=e/xt;if(t<.001){const n=t*Wn;return n<1?`${n.toFixed(3)} km`:n<1e3?`${n.toFixed(0)} km`:`${(n/1e3).toFixed(1)} Mm`}return t<1?`${t.toFixed(3)} AU`:t<100?`${t.toFixed(2)} AU`:`${t.toFixed(0)} AU`}function Un(e){return!Number.isFinite(e)||e<0?"":e<.01?`${e.toFixed(4)} pc`:e<1?`${e.toFixed(3)} pc`:e<100?`${e.toFixed(2)} pc`:`${e.toFixed(0)} pc`}function $n(e,t){const n=document.createElement("div");n.className="selected-body-label-wrapper",n.style.position="absolute",n.style.left="0",n.style.top="0",n.style.pointerEvents="none",n.style.display="none";const o=document.createElement("span");o.className="selected-body-label",n.appendChild(o),t.appendChild(n);const r=document.createElement("div");r.className="selected-body-callout-wrapper",r.style.display="none";const a=document.createElement("div");a.className="selected-body-callout__ring";const i=document.createElement("div");i.className="selected-body-callout__leader-v";const u=document.createElement("div");u.className="selected-body-callout__leader-h";const s=document.createElement("div");s.className="selected-body-callout__name";const l=document.createElement("div");l.className="selected-body-callout__distance",r.append(a,i,u,s,l),t.appendChild(r);let c=!1,f=!1;const d=m=>{m!==c&&(c=m,n.style.display=m?"":"none")},S=m=>{m!==f&&(f=m,r.style.display=m?"":"none")},p=le().getState().selection,g={id:p.selectedId,name:p.selectedName},M=le().subscribeSelector(m=>m.selection.selectedId,m=>{g.id=m}),C=le().subscribeSelector(m=>m.selection.selectedName,m=>{g.name=m});let k=fe();const A=He(()=>{k=fe(),e.invalidate()}),E=new F,_=new F,w=new F;let z="",h=0;function x(m,v){if(m==="hor"){const P=On()[v];return P?{pos:{x:P[0],y:P[1],z:P[2]},isSolar:!0}:null}if(m==="hyg"){const P=lt();if(P.length===0)return null;const O=yt(P).get(v);return O?{pos:ot(O),isSolar:!1}:null}const y=[...mt(),...gt()];if(y.length===0)return null;const b=ft(y).get(v);return b?{pos:wt(b),isSolar:!1}:null}return{onFrame:()=>{if(k){d(!1),S(!1);return}const{id:m,name:v}=g;if(!m||!v){d(!1),S(!1);return}let y;try{y=vt(m)}catch{d(!1),S(!1);return}const b=x(y.source,y.rawId);if(!b){d(!1),S(!1);return}const P=V(e).cameraThree;if(!P.isPerspectiveCamera){d(!1),S(!1);return}if(E.set(b.pos.x,b.pos.y,b.pos.z),Ve(E,me.current,!0),w.copy(E).project(P),!(Number.isFinite(w.x)&&Number.isFinite(w.y)&&Number.isFinite(w.z)&&Math.abs(w.x)<=1&&Math.abs(w.y)<=1&&w.z>=-1&&w.z<=1)){d(!1),S(!1);return}const O=V(e).gl.domElement,R=Bn(e.size,O);if(R==null){d(!1),S(!1);return}const{w:W,h:j}=R,D=(w.x*.5+.5)*W,B=(-w.y*.5+.5)*j;if(b.isSolar){o.textContent!==v&&(o.textContent=v),n.style.transform=`translate(${D}px, ${B}px) translate(-50%, -50%)`,d(!0),S(!1);return}if(!Vn(D,B,W,j)){d(!1),S(!1);return}s.textContent!==v&&(s.textContent=v),r.style.transform=`translate(${D}px, ${B}px)`;const H=performance.now();if(H-h>=Hn||z===""){Et(P,_);const U={x:_.x,y:_.y,z:_.z},G=Math.hypot(b.pos.x-U.x,b.pos.y-U.y,b.pos.z-U.z),q=G<1e5?jn(G):Un(ut(U,b.pos));q!==z&&(z=q,l.textContent=q),h=H}d(!1),S(!0)},dispose:()=>{M(),C(),A(),n.parentNode===t&&t.removeChild(n),r.parentNode===t&&t.removeChild(r)}}}var qn=3;function Kn(e,t,n){return Math.max(t,Math.min(n,e))}function Ye(e,t,n,o=1,r=256){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)||!Number.isFinite(r)||t<=0||e<=0||o<=0||r<=0)return 0;const a=e*(n/t);return a<=0?0:Kn(a*o,0,r)}function Gn(e,t,n){const o=Ye(e,t,n);if(o<=0)return 0;const r=o*.5+qn;return Math.min(r,256)}function Xn(e,t,n,o){const r=Math.sqrt(e*e+t*t+n*n);if(r<=0||!Number.isFinite(r)){o.x=0,o.y=0,o.z=0;return}const a=st(r)/r;o.x=e*a,o.y=t*a,o.z=n*a}function Yn(e,t,n,o,r,a,i,u){const s=Math.sqrt(e*e+t*t+n*n);if(s<=0||!Number.isFinite(s)||!Number.isFinite(o)){const S=-r,p=-a,g=-i;return S*S+p*p+g*g<=u}const l=o/s,c=e*l-r,f=t*l-a,d=n*l-i;return c*c+f*f+d*d<=u}var pe=new F,he=new F;function Qn(e,t,n,o,r,a,i,u,s,l,c,f,d,S){const p=n.getBoundingClientRect(),g=e-p.left,M=t-p.top,C=Number.isFinite(o.fov)&&o.fov>0?p.height/(2*Math.tan(o.fov*Math.PI/360)):0,k=Math.min(s,a.length/3,i.length,u.length);let A=null;for(let E=0;E<k;E+=1){const _=E*3,w=a[_],z=a[_+1],h=a[_+2];if(!Yn(w,z,h,u[E]??0,f.x,f.y,f.z,d))continue;const x=w-l.position.x,T=z-l.position.y,m=h-l.position.z,v=x*l.forward.x+T*l.forward.y+m*l.forward.z;if(v<=1e-6)continue;const y=x*l.right.x+T*l.right.y+m*l.right.z,b=x*l.up.x+T*l.up.y+m*l.up.z,P=c*l.aspect*v;if(Math.abs(y)>P)continue;const O=c*v;if(Math.abs(b)>O)continue;const R=v,W=i[E],j=Ye(W,R,C),D=Gn(W,R,C);if(D<=0)continue;pe.set(w,z,h),pe.applyMatrix4(r.matrixWorld),he.copy(pe).project(o);const B=(he.x*.5+.5)*p.width,H=(-he.y*.5+.5)*p.height,U=B-g,G=H-M,q=U*U+G*G;if(q>D*D)continue;const we={index:E,distSqPx:q,depthCam:R,renderedPx:j};S(we,A)&&(A=we)}return A}function Ie(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function Zn(e,t){t.length=0;for(const n of e){const o=new Float32Array(n.starsInChunk.length);for(let r=0;r<n.starsInChunk.length;r+=1){const a=n.starsInChunk[r];o[r]=a?De(a):0}t.push(o)}}var N={chunks:[],pointsMeshes:[],starsInView:[]},K={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},Jn=new F,er=new F,tr=new F,ke={x:0,y:0,z:0};function _r(){return N}function Rr(e,t){const n=V(e),o=n.layers.starfield,r={current:[]},a=[],i=[],u=[],s=[],l=[],c=[];let f=null,d=null,S=0;const p=new Ze,g=new Je,M=new nt;let C;function k(h,x,T,m){const{chunks:v}=N;je(m,K,Jn,er,tr);const y=Math.tan(K.fovYRadians*.5);Xn(K.position.x,K.position.y,K.position.z,ke);const b=500**2;let P=-1,O=null;for(let R=0;R<v.length;R+=1){const W=v[R],j=a[R],D=l[R],B=c[R];if(!W||!j||!D||!B)continue;const H=Qn(h,x,T,m,j,W.positions,B,D,W.starsInChunk.length,K,y,ke,b,Ie);!H||!Ie(H,O)||(O=H,P=s[R]+H.index)}return P}function A(h,x,T){const m=r.current;if(m.length===0)return!1;const v=k(h,x,T,n.cameraThree);if(v<0||v>=m.length)return!1;const y=m[v],b=y.proper??(y.hip!=null?`HIP ${y.hip}`:`Star ${y.id}`);return bt.select(pt("hyg",y.id),b,"star"),!0}function E(h){const x=new tt;return x.setAttribute("position",new X(h.positions,3)),x.setAttribute("size",new X(h.sizes,1)),x.setAttribute("color",new X(h.colors,3)),x.setAttribute("warm",new X(h.warm,1)),x.setAttribute("brightness",new X(h.brightness,1)),x.computeBoundingSphere(),x}function _(){for(const h of a)o.remove(h);a.length=0,s.length=0,l.length=0,c.length=0;for(const h of i)o.remove(h);i.length=0;for(const h of u)h.dispose();u.length=0}function w(){if(_(),f==null||d==null){N.chunks=[],N.pointsMeshes=[],N.starsInView=r.current;return}const h=Ke(C.mountState.getStarData(),C.mountState.getStatus());Zn(h,l);let x=0;for(const T of h){const m=E(T);u.push(m),s.push(x),c.push(new Float32Array(T.sizes));const v=new Pe(m,f);v.frustumCulled=!0,v.raycast=()=>{},o.add(v),a.push(v);const y=new Pe(m,d);y.frustumCulled=!0,y.renderOrder=1,o.add(y),i.push(y),x+=T.starsInChunk.length}N.chunks=h,N.pointsMeshes=a,N.starsInView=r.current}f=tn(),d=nn(),C=Ln({host:e,domOverlay:t,starsInViewRef:r,refreshPointsMesh:w,pickFromClick:A});const z=$n(e,t);return C.bootstrap(),{onFrame:()=>{if(C.nameLabels.onFrame(),z.onFrame(),Ue()){const h=Math.min(.06,n.timer.getDelta());S+=h,f?.uniforms.uTime&&(f.uniforms.uTime.value=S),d?.uniforms.uTime&&(d.uniforms.uTime.value=S)}C.mountState.getStarData,C.mountState.getStatus},dispose:()=>{C.dispose(),z.dispose(),_(),f?.dispose(),f=null,d?.dispose(),d=null,N.chunks=[],N.pointsMeshes=[],N.starsInView=[]}}}function se(e){return new ce(e[0],e[1],e[2])}function nr(){return{cool:se($.star4),warm:se($.star3),hot:se($.star2),flare:se($.star1)}}var rr=`
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
`;function zr(e){return e==null||Array.isArray(e)||!(e instanceof ee)?!1:e.userData.cosmosiveSunPhotosphere===!0}function Ir(e,t){const n=nr(),o={cool:e?.cool??n.cool,warm:e?.warm??n.warm,hot:e?.hot??n.hot,flare:e?.flare??n.flare},r={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:o.cool.clone()},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},a=new ee({uniforms:r,vertexShader:rr,fragmentShader:or,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var ar=`
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
`,ir=`
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
`;function ve(e){return new ce(e[0],e[1],e[2])}function sr(){return{warm:ve($.star3),hot:ve($.star2),flare:ve($.star1)}}function kr(e){return e==null||Array.isArray(e)||!(e instanceof ee)?!1:e.userData.cosmosiveSunCorona===!0}function Ar(e){const t=sr(),n={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},o={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:n.warm.clone()},uPaletteHot:{value:n.hot.clone()},uPaletteFlare:{value:n.flare.clone()}},r=new ee({uniforms:o,vertexShader:ar,fragmentShader:ir,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return r.userData.cosmosiveSunCorona=!0,r}export{Ot as A,hr as B,gr as C,xr as D,br as E,kt as F,Et as I,me as L,Lt as M,vr as N,$t as O,Nt as P,Be as R,Kt as S,Wt as T,Fr as _,_r as a,Pr as b,Ie as c,Gn as d,Ye as f,Ke as g,Ln as h,zr as i,Sr as j,Cr as k,Xn as l,Er as m,kr as n,Rr as o,Tr as p,Ir as r,Zn as s,Ar as t,Yn as u,$ as v,yr as w,wr as x,ae as y,pr as z};
