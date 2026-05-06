import{n as Ae}from"./state-data-vendor-sq1yP6E9.js";import{Ht as N,Rt as Qe}from"./babylon-postprocess-vendor-BBh1ALWr.js";import{B as Ze,C as Je,Q as Pe,R as et,bt as E,lt as Z,o as K,p as ce,s as tt,ut as nt,yt as Ie}from"./three-vendor-vu4QJ6OG.js";import{$ as Me,$t as rt,Cn as ot,Fa as xe,Ga as at,Ka as st,Qa as it,Sn as Ne,Vt as De,Wi as lt,Za as ut,a as ct,an as ft,bo as dt,bt as mt,fa as le,go as pt,gt as ht,ho as vt,ht as St,lt as gt,na as fe,nn as Le,on as yt,oo as xt,qa as Oe,ra as We,tn as bt,uo as Ct,wn as wt,yo as Pt}from"./index-odFsId6h.js";import{n as W,t as Mt}from"./queryCacheNotify-BoJ_4xvi.js";var be=new WeakMap;function vr(e,t){be.set(e,t)}function Sr(e){be.delete(e)}function He(e){if(e.engineKind!=="babylon")throw new Error("asBabylon: SceneHost is not a Babylon implementation");const t=be.get(e);if(!t)throw new Error("asBabylon: missing Babylon extras (host not fully initialized?)");return t}var me={current:null};function Ft(e,t,n){return n&&t&&dt(e,t.position.x,t.position.y,t.position.z),e}function Be(e,t,n){if(n&&t){const o=e;o.x+=t.position.x,o.y+=t.position.y,o.z+=t.position.z}return e}function Et(e,t){return e.getWorldPosition(t),Ft(t,me.current,!0),t}function Tt(e,t,n,o,r){e.updateMatrixWorld(!0),e.getWorldPosition(n),t.position.x=n.x,t.position.y=n.y,t.position.z=n.z,e.getWorldDirection(n),o.setFromMatrixColumn(e.matrixWorld,0).normalize(),r.setFromMatrixColumn(e.matrixWorld,1).normalize(),t.forward.x=n.x,t.forward.y=n.y,t.forward.z=n.z,t.right.x=o.x,t.right.y=o.y,t.right.z=o.z,t.up.x=r.x,t.up.y=r.y,t.up.z=r.z,t.fovYRadians=et.degToRad(e.fov),t.aspect=e.aspect}function Ve(e,t,n,o,r){Tt(e,t,n,o,r);{const a=me.current;a&&(t.position.x-=a.position.x,t.position.y-=a.position.y,t.position.z-=a.position.z)}}function _t(e){const t=W(e).cameraThree,n=new E,o=new E,r=new E;return{syncFrustumHeliocentric(a){Ve(t,a,n,o,r)}}}var Rt=new N(0,0,-1),zt=new N(1,0,0),kt=new N(0,1,0),te=new N,ne=new N,re=new N,oe=new N;function At(e,t,n){e.computeWorldMatrix(),e.getWorldMatrix().getTranslationToRef(te),n.position.x=te.x,n.position.y=te.y,n.position.z=te.z;{const[r,a,s]=t.getFloatingOrigin();n.position.x+=r,n.position.y+=a,n.position.z+=s}e.getDirectionToRef(Rt,ne),e.getDirectionToRef(zt,re),e.getDirectionToRef(kt,oe),n.forward.x=ne.x,n.forward.y=ne.y,n.forward.z=ne.z,n.right.x=re.x,n.right.y=re.y,n.right.z=re.z,n.up.x=oe.x,n.up.y=oe.y,n.up.z=oe.z,n.fovYRadians=e.fov;const o=e.getEngine();n.aspect=o.getRenderWidth()/Math.max(1,o.getRenderHeight())}function It(e){const{cameraBabylon:t}=He(e);return{syncFrustumHeliocentric(n){At(t,e,n)}}}function Nt(e){return e.engineKind==="babylon"?It(e):_t(e)}var Dt=()=>({starfieldChunksTotal:0,starfieldChunksVisible:0,starfieldVerticesTotal:0,starfieldPipelineStatus:"idle",starfieldSyntheticKind:"empty",starfieldChunkAbbrevSample:"",shipsCandidates:0,shipsRendered:0,combatShotsTracerEnemySlots:0,combatShotsConquestCandidates:0,combatShotsConquestPassedFrustum:0,updatedAtMs:0}),Fe=Dt();function gr(e){}typeof globalThis.window<"u";var Se="__cosmosivePointer",ge=new WeakMap;function Lt(e,t){t==null?delete e.userData[Se]:e.userData[Se]=t}function G(e){return e.userData[Se]}function Ot(e,t){t==null?ge.delete(e):ge.set(e,t)}function X(e){return ge.get(e)}function yr(e,t,n){e.engineKind==="r3f"?Lt(t,n):Ot(t,n)}var Ee=new Ie;function Wt(e,t,n,o){const r=n.getBoundingClientRect();o.x=(e-r.left)/r.width*2-1,o.y=-((t-r.top)/r.height)*2+1}function Ht(e){const t=W(e);t.scene.updateMatrixWorld(!0);const n=t.gl.domElement,o=t.cameraThree,r=n.clientWidth/Math.max(1,n.clientHeight);Number.isFinite(r)&&Math.abs(o.aspect-r)>1e-6&&(o.aspect=r,o.updateProjectionMatrix()),o.updateMatrixWorld(!0)}function Bt(e){return W(e).scene.children.filter(t=>t.visible!==!1)}function Y(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent}return!1}function Q(e,t){let n=e;for(;n;){if(t(n))return!0;n=n.parent??null}return!1}var Te=new E,_e=new E,Vt=new E,ue=[];function jt(e){return ue.push(e),()=>{const t=ue.indexOf(e);t>=0&&ue.splice(t,1)}}function de(e,t){for(const n of ue)if(n(e,t))return!0;return!1}function Ut(e,t,n,o,r){let a=!1;const s={nativeEvent:n,object:e,point:o,index:r,stopPropagation:()=>{a=!0}};Q(e,u=>{const i=X(u)?.[t];return i?(i(s),a):!1})}function xr(e,t,n,o,r,a){if(e.engineKind==="babylon"){Ut(t,n,o,r,a);return}let s=!1;const u={nativeEvent:o,object:t,point:r,index:a,stopPropagation:()=>{s=!0}};Y(t,i=>{const l=G(i)?.[n];return l?(l(u),s):!1})}function br(e,t,n,o,r){if(t!==n){if(e.engineKind==="babylon"){t&&Q(t,a=>{const s=X(a)?.onPointerOut;return s?(s({nativeEvent:o,object:a,point:Te,stopPropagation:()=>{}}),!0):!1}),n&&Q(n,a=>{const s=X(a)?.onPointerOver;return s?(s({nativeEvent:o,object:a,point:_e.copy(r),stopPropagation:()=>{}}),!0):!1});return}t&&Y(t,a=>{const s=G(a)?.onPointerOut;return s?(s({nativeEvent:o,object:a,point:Te,stopPropagation:()=>{}}),!0):!1}),n&&Y(n,a=>{const s=G(a)?.onPointerOver;return s?(s({nativeEvent:o,object:a,point:_e.copy(r),stopPropagation:()=>{}}),!0):!1})}}function Cr(e,t){for(const n of e){let o=!1;if(Y(n.object,r=>G(r)?.onClick?(o=!0,!0):!1),o)return{kind:"interactive",object:n.object,point:n.point.clone(),index:n.index!==void 0?n.index:void 0,ndc:{x:t.x,y:t.y}}}return null}function wr(e,t,n,o){const r=e.pickAt(t,n);if(!r)return null;const a=r.node;let s=!1;return Q(a,u=>X(u)?.onClick?(s=!0,!0):!1),s?{kind:"interactive",object:a,point:new E(r.point[0],r.point[1],r.point[2]),ndc:{x:o.x,y:o.y}}:null}function $t(e,t){Ht(e),Ee.set(t.x,t.y);const n=W(e);return n.raycaster.setFromCamera(Ee,n.cameraThree),n.raycaster.intersectObjects(Bt(e),!0)}function qt(e,t,n,o){if(n.button!==0)return;const r=e.pickAt(n.clientX,n.clientY);if(!r){if(de(n,t))return;o();return}const a=r.node,s=new E(r.point[0],r.point[1],r.point[2]);let u=!1,i=!1;const l={nativeEvent:n,object:a,point:s,index:void 0,stopPropagation:()=>{u=!0}};Q(a,c=>{const f=X(c)?.onClick;return f?(i=!0,f(l),u):!1}),!i&&(de(n,t)||o())}function Pr(e,t,n,o){if(e.engineKind==="babylon"){qt(e,t,n,o);return}if(n.button!==0)return;const r={x:0,y:0};Wt(n.clientX,n.clientY,t,r);const a=$t(e,r);if(a.length===0){if(de(n,t))return;o();return}for(const s of a){let u=!1,i=!1;const l={nativeEvent:n,object:s.object,point:Vt.copy(s.point),index:(s.index!==void 0,s.index),stopPropagation:()=>{u=!0}};if(Y(s.object,c=>{const f=G(c)?.onClick;return f?(i=!0,f(l),u):!1}),i)return}de(n,t)||o()}function Mr(e){const t=e.replace(/^#/,""),n=parseInt(t,16);return Number.isFinite(n)?[Math.floor(n/65536)%256,Math.floor(n/256)%256,n%256]:[0,0,0]}function Kt(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function Fr(e){return Math.max(0,Math.min(255,Math.round(e)))}function ae(e,t=1,n=1){const[o,r,a]=Kt(e),s=Math.max(.15,Math.min(1,t));return[o*s,r*s,a*s,n]}var V={star1:ae("#fff3a8",1),star2:ae("#f5c238",1),star3:ae("#e07b1a",1),star4:ae("#a8380c",1)};function je(){const e=le().getState(),t=rt.getState().session.gameStarted,n=(e.camera.visitId!=null||e.camera.watchId!=null)&&e.camera.autoWatch;return e.playing||n||t}function Gt(){const e=De.getState();return{ttPhase:e.phase,c2TourOrder:e.c2TourOrder,remainingC2StarIds:e.remainingC2StarIds,timeTrialStarNamesUi:Le.getState().appMode==="time-trial",showStarNames:xe.getState().showStarNames}}function Xt(e){const t=De.subscribe(o=>({phase:o.phase,c2TourOrder:o.c2TourOrder,remainingC2StarIds:o.remainingC2StarIds}),()=>e(),{equalityFn:Ae}),n=Le.subscribe((o,r)=>{const a=o.appMode==="time-trial",s=r!=null&&r.appMode==="time-trial";r!=null&&a===s||e()});return()=>{t(),n()}}function Yt(e,t){if(t<0||t>=e.length)return!1;const n=e[t],o=n.proper??(n.hip!=null?`HIP ${n.hip}`:`Star ${n.id}`);return bt.select(pt("hyg",n.id),o,"star"),!0}var Qt=256,Zt=320,Jt=`
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
`,en=`
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
`,tn=`
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
`;function Ue(e){const t=new Z({uniforms:{uScale:{value:1},uPointSizeMax:{value:e?.pointSizeMax??Qt},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uMinScreenPx:{value:e?.minScreenPx??0},uMaxScreenPx:{value:e?.maxScreenPx??0},uPaletteHot:{value:new ce(1,.78,.56)},uPaletteFlare:{value:new ce(1,.92,.75)}},vertexShader:Jt,fragmentShader:e?.useHaloShader?tn:en,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),n=new Ie;return t.onBeforeRender=(o,r,a)=>{const s=a;s.isPerspectiveCamera&&s.fov&&(o.getSize(n),t.uniforms.uScale.value=n.y/(2*Math.tan(s.fov*Math.PI/360)))},t}function nn(){return Ue({twinkleAmp:.03,twinkleFreq:.9})}function rn(){return Ue({useHaloShader:!0,sizeMultiplier:1.6,minScreenPx:2.1,maxScreenPx:5.2,pointSizeMax:Zt,twinkleAmp:.02,twinkleFreq:.55})}var Ce=4,Er=64*Ce,on=-25,an=500,sn=.01;function $e(e){return Math.max(0,Math.min(1,e))}function ln(e){return e?.size!=null&&Number.isFinite(e.size)?$e(e.size):.5}function un(e){return .08+.76*$e((e-.99)/.01)**3}function Tr(e){return(e?st(e,Ne(e)):Oe)*un(ln(e))*Ce}function ye(e,t){let n=t;for(;e[n]!==n;)n=e[n];let o=t;for(;o!==n;){const r=e[o];e[o]=n,o=r}return n}function cn(e,t,n){const o=ye(e,t),r=ye(e,n);o!==r&&(e[o]=r)}function Re(e,t,n){return`${e},${t},${n}`}function fn(e,t){const n=e.length,o=Array.from({length:n},(l,c)=>c),r=t,a=new Map;for(let l=0;l<n;l+=1){const c=e[l],f=Re(Math.floor(c.x/r),Math.floor(c.y/r),Math.floor(c.z/r));a.has(f)||a.set(f,[]),a.get(f).push(l)}const s=t*t;for(let l=0;l<n;l+=1){const c=e[l],f=Math.floor(c.x/r),d=Math.floor(c.y/r),v=Math.floor(c.z/r);for(let h=-1;h<=1;h+=1)for(let S=-1;S<=1;S+=1)for(let y=-1;y<=1;y+=1){const R=Re(f+h,d+S,v+y),k=a.get(R);if(k)for(const A of k){if(A<=l)continue;const P=e[A],T=P.x-c.x,b=P.y-c.y,m=P.z-c.z;T*T+b*b+m*m<s&&cn(o,l,A)}}}const u=new Map;for(let l=0;l<n;l+=1){const c=ye(o,l);u.has(c)||u.set(c,[]),u.get(c).push(l)}const i=[];for(let l=0;l<n;l+=1)i.push(void 0);for(const l of u.values())l.length<=1||(l.sort((c,f)=>c-f),l.forEach((c,f)=>{f>0&&(i[c]={x:0,y:f*on})}));return i}function dn(){const e=[];for(let t=0;t<an;t+=1){const n=at(t*.7%360,t*.3%180-90);n!=null&&e.push(n)}return e}function mn(){const e=dn(),t=e.length,n=Ct,o=new Float32Array(t*3);return e.forEach((r,a)=>{o[a*3]=r.x*n,o[a*3+1]=r.y*n,o[a*3+2]=r.z*n}),{abbr:"_bootstrap",positions:o,sizes:new Float32Array(t).fill(Oe*Ce),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(sn),brightness:new Float32Array(t).fill(1),starsInChunk:[]}}var pn={raMin:0,raMax:360,decMin:-90,decMax:90},hn={chunks:[],namedStarsInView:[]};function vn(e,t){return e===0&&t!=="success"}function qe(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[mn()]:[]}function Sn(e,t){const n=qe(e,t),o=n.slice(0,3).map(r=>r.abbr).join(",");return n.length===0?{syntheticKind:"empty",chunkAbbrevSample:o}:n.length===1&&n[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:o}:n.some(r=>r.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:o}:{syntheticKind:"real",chunkAbbrevSample:o}}function ze(e,t){return t.current===e.current}function gn(e,t,n,o,r){e.onerror=a=>{ze(t,n)||(o("error"),r(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{ze(t,n)||(o("error"),r("Starfield worker message error"))}}function yn(e,t,n,o,r,a,s){const{runId:u,...i}=e;u===t.current&&(n.current=u,o.current=i.starsInView,r({chunks:i.chunks,namedStarsInView:i.namedStarsInView}),a("ready"),s(null))}function xn(e,t,n,o,r){e.processStarfield({runId:t,catalog:n,maxDistanceLevel:o,bounds:pn,raInHours:!1}).then(a=>{yn(a,r.runIdRef,r.lastSuccessfulRunIdRef,r.starsInViewRef,r.setStarData,r.setStarfieldStatus,r.setErrorMessage)}).catch(a=>{t===r.runIdRef.current&&(r.setStarfieldStatus("error"),r.setErrorMessage(a instanceof Error?a.message:"Starfield worker failed"))})}function bn(e){return{dispose:jt((t,n)=>t.button!==0||!(n instanceof HTMLCanvasElement)?!1:e(t.clientX,t.clientY,n))}}function Ke(e){return e==="countdown"||e==="active"||e==="complete"}function Cn(e,t,n,o){if(!o||!Ke(t)||n.length===0)return e;const r=new Set(n);return e.filter(a=>a.catalogId!=null&&r.has(a.catalogId))}function wn(e,t,n){return!n||!Ke(t)?e:e||t==="countdown"}function Pn(e){const t={current:[]},n={current:!1},o={current:fe()};function r(){const{ttPhase:a,c2TourOrder:s,timeTrialStarNamesUi:u,showStarNames:i}=Gt(),{namedStarsInView:l}=e.getStarData();t.current=Cn(l,a,s,u),n.current=wn(i,a,u)}return r(),{updateLabelRefs:r,getNamedStarsInView:()=>t.current,getEnabled:()=>n.current&&!o.current,dispose:We(()=>{o.current=fe(),e.onHidesHudChromeChange?.()})}}var z=new E;function Mn(e){const t=W(e);return{projectFromHeliocentric(n,o){const r=t.cameraThree,{size:a}=e;return z.set(n.x,n.y,n.z),Be(z,me.current,!0),z.project(r),Number.isFinite(z.x)&&Number.isFinite(z.y)&&Number.isFinite(z.z)&&Math.abs(z.x)<=1&&Math.abs(z.y)<=1&&z.z>=-1&&z.z<=1?(o.x=(z.x*.5+.5)*a.width,o.y=(-z.y*.5+.5)*a.height,!0):!1}}}var se=new N;function Fn(e){const{scene:t,cameraBabylon:n,layers:o}=He(e);return{projectFromHeliocentric(r,a){const s=t.getEngine();if(!s.getRenderingCanvas())return!1;const u=o.starfield.getWorldMatrix();se.set(r.x,r.y,r.z),N.TransformCoordinatesToRef(se,u,se);const i=n.viewport.toGlobal(s.getRenderWidth(),s.getRenderHeight()),l=t.getTransformMatrix(),c=N.Project(se,Qe.Identity(),l,i);return Number.isFinite(c.x)&&Number.isFinite(c.y)&&Number.isFinite(c.z)&&c.x>=i.x&&c.x<=i.x+i.width&&c.y>=i.y&&c.y<=i.y+i.height&&c.z>=0&&c.z<=1?(a.x=c.x,a.y=c.y,!0):!1}}}function En(e){return e.engineKind==="babylon"?Fn(e):Mn(e)}function Tn(e,t,n=48){const o=[];for(let s=0;s<t.length;s+=1){const u=t[s];if(!Pt(u.position,e.position,e.forward,e.right,e.up,e.fovYRadians,e.aspect))continue;const i=u.position.x-e.position.x,l=u.position.y-e.position.y,c=u.position.z-e.position.z,f=i*i+l*l+c*c;o.push({entry:u,distSq:f,index:s})}o.sort((s,u)=>s.distSq!==u.distSq?s.distSq-u.distSq:s.index-u.index);const r=o.slice(0,n).map(s=>s.entry),a=fn(r.map(s=>s.position),10);return r.map((s,u)=>({...s,labelOffset:a[u]}))}function _n(e,t){return`translate(${e}px, ${t}px) translate(-50%, calc(-100% - 8px))`}function Rn(e){return e.map(t=>`${t.name}\0${t.position.x.toFixed(4)},${t.position.y.toFixed(4)},${t.position.z.toFixed(4)}\0${t.labelOffset?.x??""},${t.labelOffset?.y??""}`).join("|")}function zn(e){const t=document.createElement("div");t.style.position="absolute",t.style.left="0",t.style.top="0",t.style.width="100%",t.style.height="100%",t.style.pointerEvents="none",e.appendChild(t);let n="",o=[],r=[];function a(){t.replaceChildren(),o=[],r=[],n=""}function s(u){t.replaceChildren(),o=[],r=u;for(const{position:i,name:l,labelOffset:c}of u){const f=document.createElement("div");f.className="star-label-wrapper",f.style.position="absolute",f.style.left="0",f.style.top="0",f.style.pointerEvents="none";const d=document.createElement("span");d.className="star-label",d.textContent=l,f.appendChild(d),t.appendChild(f),o.push({wrap:f,span:d})}}return{container:t,get lastSig(){return n},set lastSig(u){n=u},get rowEls(){return o},get currentRows(){return r},clearRows:a,rebuildRows:s}}function kn(e,t,n){const o=n,r=zn(o),a=Nt(e),s=En(e),u={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},i={x:0,y:0};return{onFrame:()=>{const c=t.getEnabled(),f=t.getNamedStarsInView();if(!c){r.lastSig!==""&&r.clearRows();return}a.syncFrustumHeliocentric(u);const d=Tn(u,f),v=Rn(d);v!==r.lastSig&&(r.lastSig=v,r.rebuildRows(d));for(let h=0;h<r.currentRows.length;h+=1){const S=r.currentRows[h],y=r.rowEls[h]?.wrap;if(!y)continue;if(!s.projectFromHeliocentric(S.position,i)){y.style.display="none";continue}y.style.display="";const R=i.x+(S.labelOffset?.x??0),k=i.y+(S.labelOffset?.y??0);y.style.transform=_n(R,k)}},dispose:()=>{r.clearRows(),r.container.parentNode===o&&o.removeChild(r.container)}}}function An(e){const t=xe.subscribe(o=>({maxDistanceLevel:o.maxDistanceLevel,showStarNames:o.showStarNames}),(o,r)=>{e.onLabelInputsChange(),(r==null||o.maxDistanceLevel!==r.maxDistanceLevel)&&e.onMaxDistanceLevelChange()},{equalityFn:Ae}),n=Xt(e.onLabelInputsChange);return{dispose(){t(),n()}}}function In(e){let t=hn,n="idle",o=null;return{getStarData:()=>t,getStatus:()=>n,getErrorMessage:()=>o,setStarData(r){t=typeof r=="function"?r(t):r,e.onAfterStarData()},setStarfieldStatus(r){n=typeof r=="function"?r(n):r,e.onAfterStatus()},setErrorMessage(r){o=typeof r=="function"?r(o):r,e.onAfterError()}}}function Nn(e,t){let n=[],o=null;function r(){o?.abort(),o=null;for(const s of n)e.removeChild(s);n=[]}function a(s,u){if(r(),s==="loading"){const i=document.createElement("div");i.className="starfield-status starfield-status--loading",i.style.position="absolute",i.style.left="50%",i.style.top="50%",i.style.transform="translate(-50%, -50%)",i.style.pointerEvents="none";const l=document.createElement("span");l.className="starfield-status__text",l.textContent="Loading stars…",i.appendChild(l),e.appendChild(i),n.push(i)}else if(s==="error"){const i=document.createElement("div");i.className="starfield-status starfield-status--error",i.style.position="absolute",i.style.left="50%",i.style.top="50%",i.style.transform="translate(-50%, -50%)",i.style.pointerEvents="auto";const l=document.createElement("div");l.className="starfield-status__message";const c=document.createElement("span");c.className="starfield-status__text",c.textContent=u??"Failed to load stars",l.appendChild(c);const f=document.createElement("button");f.type="button",f.className="starfield-status__retry",f.textContent="Retry",o=new AbortController,f.addEventListener("click",t,{signal:o.signal}),l.appendChild(f),i.appendChild(l),e.appendChild(i),n.push(i)}}return{refresh:a,dispose:r}}var Dn="/assets/starfield.worker-DeoSgUe7.js";function Ln(e){const t=ct();function n(){return t.getQueryData(["hyg-catalog"])?.stars??[]}const o={current:0},r={current:-1};let a=null,s=null;const u=typeof window.Worker>"u",i=window.Worker;i?(a=new i(Dn,{type:"module"}),s=ht(a),gn(a,o,r,e.setStarfieldStatus,e.setErrorMessage)):(e.setStarfieldStatus("error"),e.setErrorMessage("Workers not supported"));const l={runIdRef:o,lastSuccessfulRunIdRef:r,starsInViewRef:e.starsInViewRef,setStarData:e.setStarData,setStarfieldStatus:e.setStarfieldStatus,setErrorMessage:e.setErrorMessage};function c(){if(!s)return;const h=t.getQueryState([Me]),S=n();if(vn(S.length,h?.status))return;e.setStarfieldStatus("loading"),o.current+=1;const y=o.current,{maxDistanceLevel:R}=xe.getState();xn(s,y,S,R,l)}function f(){const h=t.getQueryState([Me]);if(h?.status==="error"){if(u)return;const S=h.error;e.setStarfieldStatus("error"),e.setErrorMessage(S instanceof Error?S.message:String(S));return}h?.status==="success"&&!u&&e.setErrorMessage(null),c()}function d(){e.setErrorMessage(null),e.setStarfieldStatus("loading"),c()}const v=t.getQueryCache().subscribe(h=>{Mt(h,"hyg-catalog")&&f()});return{runWorkerProcess:c,applyHygQueryState:f,retry:d,dispose(){if(v(),s){try{s[St]()}catch{}s=null}a?.terminate(),a=null}}}function On(e){const{host:t,domOverlay:n,starsInViewRef:o,refreshPointsMesh:r,pickFromClick:a}=e,s=()=>{je()||t.invalidate()},u=In({onAfterStarData:()=>{i.updateLabelRefs(),r(),s()},onAfterStatus:()=>{d(),r(),s()},onAfterError:()=>{d()}}),i=Pn({getStarData:u.getStarData,onHidesHudChromeChange:s}),l=kn(t,{getNamedStarsInView:i.getNamedStarsInView,getEnabled:i.getEnabled},n),c=Ln({starsInViewRef:o,setStarData:u.setStarData,setStarfieldStatus:u.setStarfieldStatus,setErrorMessage:u.setErrorMessage}),f=Nn(n,c.retry);function d(){f.refresh(u.getStatus(),u.getErrorMessage())}const v=bn(a),h=An({onLabelInputsChange:i.updateLabelRefs,onMaxDistanceLevelChange:c.runWorkerProcess});return{mountState:u,labelsBinding:i,workerLifecycle:c,nameLabels:l,refreshOverlay:d,bootstrap(){r(),s(),d(),c.applyHygQueryState()},dispose(){h.dispose(),i.dispose(),f.dispose(),l.dispose(),c.dispose(),v.dispose()}}}function _r(e){}var Ge=null;function Rr(e){Ge=e}function Wn(){return Ge?.current??{}}var Hn=1495978707e-1,Bn=1e3;function Vn(e,t){const n=e.width,o=e.height,r=t.clientWidth,a=t.clientHeight;let s;Number.isFinite(n)&&n>0?s=n:Number.isFinite(r)?s=r:s=0;let u;return Number.isFinite(o)&&o>0?u=o:Number.isFinite(a)?u=a:u=0,!Number.isFinite(s)||!Number.isFinite(u)||s<=0||u<=0?null:{w:s,h:u}}function jn(e,t,n,o,r=28){return!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)?!1:e>=r&&t>=r&&e<=n-r&&t<=o-r}function Un(e){if(!Number.isFinite(e)||e<0)return"";const t=e/xt;if(t<.001){const n=t*Hn;return n<1?`${n.toFixed(3)} km`:n<1e3?`${n.toFixed(0)} km`:`${(n/1e3).toFixed(1)} Mm`}return t<1?`${t.toFixed(3)} AU`:t<100?`${t.toFixed(2)} AU`:`${t.toFixed(0)} AU`}function $n(e){return!Number.isFinite(e)||e<0?"":e<.01?`${e.toFixed(4)} pc`:e<1?`${e.toFixed(3)} pc`:e<100?`${e.toFixed(2)} pc`:`${e.toFixed(0)} pc`}function qn(e,t){const n=document.createElement("div");n.className="selected-body-label-wrapper",n.style.position="absolute",n.style.left="0",n.style.top="0",n.style.pointerEvents="none",n.style.display="none";const o=document.createElement("span");o.className="selected-body-label",n.appendChild(o),t.appendChild(n);const r=document.createElement("div");r.className="selected-body-callout-wrapper",r.style.display="none";const a=document.createElement("div");a.className="selected-body-callout__ring";const s=document.createElement("div");s.className="selected-body-callout__leader-v";const u=document.createElement("div");u.className="selected-body-callout__leader-h";const i=document.createElement("div");i.className="selected-body-callout__name";const l=document.createElement("div");l.className="selected-body-callout__distance",r.append(a,s,u,i,l),t.appendChild(r);let c=!1,f=!1;const d=p=>{p!==c&&(c=p,n.style.display=p?"":"none")},v=p=>{p!==f&&(f=p,r.style.display=p?"":"none")},h=le().getState().selection,S={id:h.selectedId,name:h.selectedName},y=le().subscribeSelector(p=>p.selection.selectedId,p=>{S.id=p}),R=le().subscribeSelector(p=>p.selection.selectedName,p=>{S.name=p});let k=fe();const A=We(()=>{k=fe(),e.invalidate()}),P=new E,T=new E,b=new E;let m="",g=0;function M(p,x){if(p==="hor"){const F=Wn()[x];return F?{pos:{x:F[0],y:F[1],z:F[2]},isSolar:!0}:null}if(p==="hyg"){const F=lt();if(F.length===0)return null;const D=yt(F).get(x);return D?{pos:ot(D),isSolar:!1}:null}const _=[...mt(),...gt()];if(_.length===0)return null;const w=ft(_).get(x);return w?{pos:wt(w),isSolar:!1}:null}return{onFrame:()=>{if(k){d(!1),v(!1);return}const{id:p,name:x}=S;if(!p||!x){d(!1),v(!1);return}let _;try{_=vt(p)}catch{d(!1),v(!1);return}const w=M(_.source,_.rawId);if(!w){d(!1),v(!1);return}const F=W(e).cameraThree;if(!F.isPerspectiveCamera){d(!1),v(!1);return}if(P.set(w.pos.x,w.pos.y,w.pos.z),Be(P,me.current,!0),b.copy(P).project(F),!(Number.isFinite(b.x)&&Number.isFinite(b.y)&&Number.isFinite(b.z)&&Math.abs(b.x)<=1&&Math.abs(b.y)<=1&&b.z>=-1&&b.z<=1)){d(!1),v(!1);return}const D=W(e).gl.domElement,L=Vn(e.size,D);if(L==null){d(!1),v(!1);return}const{w:O,h:J}=L,H=(b.x*.5+.5)*O,$=(-b.y*.5+.5)*J;if(w.isSolar){o.textContent!==x&&(o.textContent=x),n.style.transform=`translate(${H}px, ${$}px) translate(-50%, -50%)`,d(!0),v(!1);return}if(!jn(H,$,O,J)){d(!1),v(!1);return}i.textContent!==x&&(i.textContent=x),r.style.transform=`translate(${H}px, ${$}px)`;const ee=performance.now();if(ee-g>=Bn||m===""){Et(F,T);const B={x:T.x,y:T.y,z:T.z},q=Math.hypot(w.pos.x-B.x,w.pos.y-B.y,w.pos.z-B.z),j=q<1e5?Un(q):$n(ut(B,w.pos));j!==m&&(m=j,l.textContent=j),g=ee}d(!1),v(!0)},dispose:()=>{y(),R(),A(),n.parentNode===t&&t.removeChild(n),r.parentNode===t&&t.removeChild(r)}}}var Kn=3;function Gn(e,t,n){return Math.max(t,Math.min(n,e))}function Xe(e,t,n,o=1,r=256){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)||!Number.isFinite(r)||t<=0||e<=0||o<=0||r<=0)return 0;const a=e*(n/t);return a<=0?0:Gn(a*o,0,r)}function Xn(e,t,n){const o=Xe(e,t,n);if(o<=0)return 0;const r=o*.5+Kn;return Math.min(r,256)}function Yn(e,t,n,o){const r=Math.sqrt(e*e+t*t+n*n);if(r<=0||!Number.isFinite(r)){o.x=0,o.y=0,o.z=0;return}const a=it(r)/r;o.x=e*a,o.y=t*a,o.z=n*a}function Qn(e,t,n,o,r,a,s,u){const i=Math.sqrt(e*e+t*t+n*n);if(i<=0||!Number.isFinite(i)||!Number.isFinite(o)){const v=-r,h=-a,S=-s;return v*v+h*h+S*S<=u}const l=o/i,c=e*l-r,f=t*l-a,d=n*l-s;return c*c+f*f+d*d<=u}var pe=new E,he=new E;function Zn(e,t,n,o,r,a,s,u,i,l,c,f,d,v){const h=n.getBoundingClientRect(),S=e-h.left,y=t-h.top,R=Number.isFinite(o.fov)&&o.fov>0?h.height/(2*Math.tan(o.fov*Math.PI/360)):0,k=Math.min(i,a.length/3,s.length,u.length);let A=null;for(let P=0;P<k;P+=1){const T=P*3,b=a[T],m=a[T+1],g=a[T+2];if(!Qn(b,m,g,u[P]??0,f.x,f.y,f.z,d))continue;const M=b-l.position.x,C=m-l.position.y,p=g-l.position.z,x=M*l.forward.x+C*l.forward.y+p*l.forward.z;if(x<=1e-6)continue;const _=M*l.right.x+C*l.right.y+p*l.right.z,w=M*l.up.x+C*l.up.y+p*l.up.z,F=c*l.aspect*x;if(Math.abs(_)>F)continue;const D=c*x;if(Math.abs(w)>D)continue;const L=x,O=s[P],J=Xe(O,L,R),H=Xn(O,L,R);if(H<=0)continue;pe.set(b,m,g),pe.applyMatrix4(r.matrixWorld),he.copy(pe).project(o);const $=(he.x*.5+.5)*h.width,ee=(-he.y*.5+.5)*h.height,B=$-S,q=ee-y,j=B*B+q*q;if(j>H*H)continue;const we={index:P,distSqPx:j,depthCam:L,renderedPx:J};v(we,A)&&(A=we)}return A}function Ye(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function Jn(e,t){let n=0,o=-1,r=null;for(let a=0;a<e.length;a+=1){const s=e[a],u=s.starsInChunk.length,i=t(s,a);i&&Ye(i,r)&&(r=i,o=n+i.index),n+=u}return o}function er(e,t){t.length=0;for(const n of e){const o=new Float32Array(n.starsInChunk.length);for(let r=0;r<n.starsInChunk.length;r+=1){const a=n.starsInChunk[r];o[r]=a?Ne(a):0}t.push(o)}}var I={chunks:[],pointsMeshes:[],starsInView:[]},U={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},tr=new E,nr=new E,rr=new E,ke={x:0,y:0,z:0};function zr(){return I}function kr(e,t){const n=W(e),o=n.layers.starfield,r={current:[]},a=[],s=[],u=[],i=[],l=[];let c=null,f=null,d=0;const v=new Ze,h=new Je,S=new nt;let y;function R(m,g,M,C){const{chunks:p}=I;Ve(C,U,tr,nr,rr);const x=Math.tan(U.fovYRadians*.5);Yn(U.position.x,U.position.y,U.position.z,ke);const _=500**2;return Jn(p,(w,F)=>{const D=a[F],L=i[F],O=l[F];return!D||!L||!O?null:Zn(m,g,M,C,D,w.positions,O,L,w.starsInChunk.length,U,x,ke,_,Ye)})}function k(m,g,M){const C=r.current;return C.length===0?!1:Yt(C,R(m,g,M,n.cameraThree))}function A(m){const g=new tt;return g.setAttribute("position",new K(m.positions,3)),g.setAttribute("size",new K(m.sizes,1)),g.setAttribute("color",new K(m.colors,3)),g.setAttribute("warm",new K(m.warm,1)),g.setAttribute("brightness",new K(m.brightness,1)),g.computeBoundingSphere(),g}function P(){for(const m of a)o.remove(m);a.length=0,i.length=0,l.length=0;for(const m of s)o.remove(m);s.length=0;for(const m of u)m.dispose();u.length=0}function T(){if(P(),c==null||f==null){I.chunks=[],I.pointsMeshes=[],I.starsInView=r.current;return}const m=qe(y.mountState.getStarData(),y.mountState.getStatus());er(m,i);for(const g of m){const M=A(g);u.push(M),l.push(new Float32Array(g.sizes));const C=new Pe(M,c);C.frustumCulled=!0,C.raycast=()=>{},o.add(C),a.push(C);const p=new Pe(M,f);p.frustumCulled=!0,p.renderOrder=1,o.add(p),s.push(p)}I.chunks=m,I.pointsMeshes=a,I.starsInView=r.current}c=nn(),f=rn(),y=On({host:e,domOverlay:t,starsInViewRef:r,refreshPointsMesh:T,pickFromClick:k});const b=qn(e,t);return y.bootstrap(),{onFrame:()=>{if(y.nameLabels.onFrame(),b.onFrame(),je()){const m=Math.min(.06,n.timer.getDelta());d+=m,c?.uniforms.uTime&&(c.uniforms.uTime.value=d),f?.uniforms.uTime&&(f.uniforms.uTime.value=d)}y.mountState.getStarData,y.mountState.getStatus},dispose:()=>{y.dispose(),b.dispose(),P(),c?.dispose(),c=null,f?.dispose(),f=null,I.chunks=[],I.pointsMeshes=[],I.starsInView=[]}}}function ie(e){return new ce(e[0],e[1],e[2])}function or(){return{cool:ie(V.star4),warm:ie(V.star3),hot:ie(V.star2),flare:ie(V.star1)}}var ar=`
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
`,sr=`
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
`;function Ar(e){return e==null||Array.isArray(e)||!(e instanceof Z)?!1:e.userData.cosmosiveSunPhotosphere===!0}function Ir(e,t){const n=or(),o={cool:e?.cool??n.cool,warm:e?.warm??n.warm,hot:e?.hot??n.hot,flare:e?.flare??n.flare},r={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:o.cool.clone()},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},a=new Z({uniforms:r,vertexShader:ar,fragmentShader:sr,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var ir=`
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
`,lr=`
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
`;function ve(e){return new ce(e[0],e[1],e[2])}function ur(){return{warm:ve(V.star3),hot:ve(V.star2),flare:ve(V.star1)}}function Nr(e){return e==null||Array.isArray(e)||!(e instanceof Z)?!1:e.userData.cosmosiveSunCorona===!0}function Dr(e){const t=ur(),n={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},o={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:n.warm.clone()},uPaletteHot:{value:n.hot.clone()},uPaletteFlare:{value:n.flare.clone()}},r=new Z({uniforms:o,vertexShader:ir,fragmentShader:lr,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return r.userData.cosmosiveSunCorona=!0,r}export{$t as A,He as B,Mr as C,Wt as D,br as E,gr as F,Sr as H,Nt as I,At as L,Ot as M,yr as N,wr as O,Lt as P,Et as R,Fr as S,xr as T,vr as V,qe as _,zr as a,V as b,Ye as c,Qn as d,Xn as f,On as g,_r as h,Ar as i,Pr as j,Cr as k,Jn as l,Rr as m,Nr as n,kr as o,Xe as p,Ir as r,er as s,Dr as t,Yn as u,Tr as v,Kt as w,ae as x,Yt as y,me as z};
