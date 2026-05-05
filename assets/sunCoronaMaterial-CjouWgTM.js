import{n as Dt}from"./state-data-vendor-GurlhYZz.js";import{B as ce,C as ue,Q as Lt,R as fe,bt as C,f as dt,lt as et,o as Q,s as de,ut as pe,yt as Xt}from"./three-vendor-BVbCAnpr.js";import{Aa as St,Ba as he,Ga as me,Hr as Qt,Ht as Wt,Qi as ve,Qt as ge,Va as Yt,_t as ye,a as Se,co as xe,do as be,en as Pe,et as Ot,fo as we,ga as Ce,gt as Me,in as Bt,oa as Te,ro as ke,za as ze}from"./index-CwkthfCj.js";import{n as nt,t as Re}from"./queryCacheNotify-BluFeo99.js";var Tt={current:null};function Ae(t,e,n){return n&&e&&we(t,e.position.x,e.position.y,e.position.z),t}function Fe(t,e,n){if(n&&e){const o=t;o.x+=e.position.x,o.y+=e.position.y,o.z+=e.position.z}return t}function On(t,e){return t.getWorldPosition(e),Ae(e,Tt.current,!0),e}var _e=()=>({starfieldChunksTotal:0,starfieldChunksVisible:0,starfieldVerticesTotal:0,starfieldPipelineStatus:"idle",starfieldSyntheticKind:"empty",starfieldChunkAbbrevSample:"",shipsCandidates:0,shipsRendered:0,combatShotsTracerEnemySlots:0,combatShotsConquestCandidates:0,combatShotsConquestPassedFrustum:0,updatedAtMs:0}),Ht=_e();function Bn(t){}typeof globalThis.window<"u";function Ie(t,e,n,o,r){t.updateMatrixWorld(!0),t.getWorldPosition(n),e.position.x=n.x,e.position.y=n.y,e.position.z=n.z,t.getWorldDirection(n),o.setFromMatrixColumn(t.matrixWorld,0).normalize(),r.setFromMatrixColumn(t.matrixWorld,1).normalize(),e.forward.x=n.x,e.forward.y=n.y,e.forward.z=n.z,e.right.x=o.x,e.right.y=o.y,e.right.z=o.z,e.up.x=r.x,e.up.y=r.y,e.up.z=r.z,e.fovYRadians=fe.degToRad(t.fov),e.aspect=t.aspect}function Jt(t,e,n,o,r){Ie(t,e,n,o,r);{const i=Tt.current;i&&(e.position.x-=i.position.x,e.position.y-=i.position.y,e.position.z-=i.position.z)}}var wt="__cosmosivePointer",Ct=new WeakMap;function Hn(t,e){e==null?delete t.userData[wt]:t.userData[wt]=e}function Y(t){return t.userData[wt]}function Vn(t,e){e==null?Ct.delete(t):Ct.set(t,e)}function J(t){return Ct.get(t)}var Vt=new Xt;function Ee(t,e,n,o){const r=n.getBoundingClientRect();o.x=(t-r.left)/r.width*2-1,o.y=-((e-r.top)/r.height)*2+1}function Ne(t){const e=nt(t);e.scene.updateMatrixWorld(!0);const n=e.gl.domElement,o=e.cameraThree,r=n.clientWidth/Math.max(1,n.clientHeight);Number.isFinite(r)&&Math.abs(o.aspect-r)>1e-6&&(o.aspect=r,o.updateProjectionMatrix()),o.updateMatrixWorld(!0)}function De(t){return nt(t).scene.children.filter(e=>e.visible!==!1)}function Z(t,e){let n=t;for(;n;){if(e(n))return!0;n=n.parent}return!1}function tt(t,e){let n=t;for(;n;){if(e(n))return!0;n=n.parent??null}return!1}var jt=new C,qt=new C,Le=new C,ft=[];function We(t){return ft.push(t),()=>{const e=ft.indexOf(t);e>=0&&ft.splice(e,1)}}function pt(t,e){for(const n of ft)if(n(t,e))return!0;return!1}function Oe(t,e,n,o,r){let i=!1;const l={nativeEvent:n,object:t,point:o,index:r,stopPropagation:()=>{i=!0}};tt(t,c=>{const p=J(c)?.[e];return p?(p(l),i):!1})}function jn(t,e,n,o,r,i){if(t.engineKind==="babylon"){Oe(e,n,o,r,i);return}let l=!1;const c={nativeEvent:o,object:e,point:r,index:i,stopPropagation:()=>{l=!0}};Z(e,p=>{const s=Y(p)?.[n];return s?(s(c),l):!1})}function qn(t,e,n,o,r){if(e!==n){if(t.engineKind==="babylon"){e&&tt(e,i=>{const l=J(i)?.onPointerOut;return l?(l({nativeEvent:o,object:i,point:jt,stopPropagation:()=>{}}),!0):!1}),n&&tt(n,i=>{const l=J(i)?.onPointerOver;return l?(l({nativeEvent:o,object:i,point:qt.copy(r),stopPropagation:()=>{}}),!0):!1});return}e&&Z(e,i=>{const l=Y(i)?.onPointerOut;return l?(l({nativeEvent:o,object:i,point:jt,stopPropagation:()=>{}}),!0):!1}),n&&Z(n,i=>{const l=Y(i)?.onPointerOver;return l?(l({nativeEvent:o,object:i,point:qt.copy(r),stopPropagation:()=>{}}),!0):!1})}}function Un(t,e){for(const n of t){let o=!1;if(Z(n.object,r=>Y(r)?.onClick?(o=!0,!0):!1),o)return{kind:"interactive",object:n.object,point:n.point.clone(),index:n.index!==void 0?n.index:void 0,ndc:{x:e.x,y:e.y}}}return null}function Kn(t,e,n,o){const r=t.pickAt(e,n);if(!r)return null;const i=r.node;let l=!1;return tt(i,c=>J(c)?.onClick?(l=!0,!0):!1),l?{kind:"interactive",object:i,point:new C(r.point[0],r.point[1],r.point[2]),ndc:{x:o.x,y:o.y}}:null}function Be(t,e){Ne(t),Vt.set(e.x,e.y);const n=nt(t);return n.raycaster.setFromCamera(Vt,n.cameraThree),n.raycaster.intersectObjects(De(t),!0)}function He(t,e,n,o){if(n.button!==0)return;const r=t.pickAt(n.clientX,n.clientY);if(!r){if(pt(n,e))return;o();return}const i=r.node,l=new C(r.point[0],r.point[1],r.point[2]);let c=!1,p=!1;const s={nativeEvent:n,object:i,point:l,index:void 0,stopPropagation:()=>{c=!0}};tt(i,f=>{const d=J(f)?.onClick;return d?(p=!0,d(s),c):!1}),!p&&(pt(n,e)||o())}function $n(t,e,n,o){if(t.engineKind==="babylon"){He(t,e,n,o);return}if(n.button!==0)return;const r={x:0,y:0};Ee(n.clientX,n.clientY,e,r);const i=Be(t,r);if(i.length===0){if(pt(n,e))return;o();return}for(const l of i){let c=!1,p=!1;const s={nativeEvent:n,object:l.object,point:Le.copy(l.point),index:(l.index!==void 0,l.index),stopPropagation:()=>{c=!0}};if(Z(l.object,f=>{const d=Y(f)?.onClick;return d?(p=!0,d(s),c):!1}),p)return}pt(n,e)||o()}function Gn(t){const e=t.replace(/^#/,""),n=parseInt(e,16);return Number.isFinite(n)?[Math.floor(n/65536)%256,Math.floor(n/256)%256,n%256]:[0,0,0]}function Ve(t){if(!t||typeof t!="string")return[1,1,1];const e=t.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,1,1]}function Xn(t){return Math.max(0,Math.min(255,Math.round(t)))}function lt(t,e=1,n=1){const[o,r,i]=Ve(t),l=Math.max(.15,Math.min(1,e));return[o*l,r*l,i*l,n]}var j={star1:lt("#fff3a8",1),star2:lt("#f5c238",1),star3:lt("#e07b1a",1),star4:lt("#a8380c",1)},je="/assets/starfield.worker-BWykY_u-.js";function Zt(t){return t==="countdown"||t==="active"||t==="complete"}function qe(t,e,n,o){if(!o||!Zt(e)||n.length===0)return t;const r=new Set(n);return t.filter(i=>i.catalogId!=null&&r.has(i.catalogId))}function Ue(t,e,n){return!n||!Zt(e)?t:t||e==="countdown"}var Ke=256,$e=320,Ge=`
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
`,Xe=`
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
`,Qe=`
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
`;function te(t){const e=new et({uniforms:{uScale:{value:1},uPointSizeMax:{value:t?.pointSizeMax??Ke},uTime:{value:0},uTwinkleAmp:{value:t?.twinkleAmp??0},uTwinkleFreq:{value:t?.twinkleFreq??.8},uSizeMultiplier:{value:t?.sizeMultiplier??1},uMinScreenPx:{value:t?.minScreenPx??0},uMaxScreenPx:{value:t?.maxScreenPx??0},uPaletteHot:{value:new dt(1,.78,.56)},uPaletteFlare:{value:new dt(1,.92,.75)}},vertexShader:Ge,fragmentShader:t?.useHaloShader?Qe:Xe,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),n=new Xt;return e.onBeforeRender=(o,r,i)=>{const l=i;l.isPerspectiveCamera&&l.fov&&(o.getSize(n),e.uniforms.uScale.value=n.y/(2*Math.tan(l.fov*Math.PI/360)))},e}function Ye(){return te({twinkleAmp:.03,twinkleFreq:.9})}function Je(){return te({useHaloShader:!0,sizeMultiplier:1.6,minScreenPx:2.1,maxScreenPx:5.2,pointSizeMax:$e,twinkleAmp:.02,twinkleFreq:.55})}var kt=4,Qn=64*kt,Ze=-25,tn=500,en=.01;function ee(t){return Math.max(0,Math.min(1,t))}function nn(t){return t?.size!=null&&Number.isFinite(t.size)?ee(t.size):.5}function rn(t){return .08+.76*ee((t-.99)/.01)**3}function Yn(t){return(t?he(t,Qt(t)):Yt)*rn(nn(t))*kt}function Mt(t,e){let n=e;for(;t[n]!==n;)n=t[n];let o=e;for(;o!==n;){const r=t[o];t[o]=n,o=r}return n}function on(t,e,n){const o=Mt(t,e),r=Mt(t,n);o!==r&&(t[o]=r)}function Ut(t,e,n){return`${t},${e},${n}`}function an(t,e){const n=t.length,o=Array.from({length:n},(s,f)=>f),r=e,i=new Map;for(let s=0;s<n;s+=1){const f=t[s],d=Ut(Math.floor(f.x/r),Math.floor(f.y/r),Math.floor(f.z/r));i.has(d)||i.set(d,[]),i.get(d).push(s)}const l=e*e;for(let s=0;s<n;s+=1){const f=t[s],d=Math.floor(f.x/r),g=Math.floor(f.y/r),b=Math.floor(f.z/r);for(let v=-1;v<=1;v+=1)for(let M=-1;M<=1;M+=1)for(let P=-1;P<=1;P+=1){const S=Ut(d+v,g+M,b+P),T=i.get(S);if(T)for(const w of T){if(w<=s)continue;const y=t[w],z=y.x-f.x,I=y.y-f.y,k=y.z-f.z;z*z+I*I+k*k<l&&on(o,s,w)}}}const c=new Map;for(let s=0;s<n;s+=1){const f=Mt(o,s);c.has(f)||c.set(f,[]),c.get(f).push(s)}const p=[];for(let s=0;s<n;s+=1)p.push(void 0);for(const s of c.values())s.length<=1||(s.sort((f,d)=>f-d),s.forEach((f,d)=>{d>0&&(p[f]={x:0,y:d*Ze})}));return p}function sn(){const t=[];for(let e=0;e<tn;e+=1){const n=ze(e*.7%360,e*.3%180-90);n!=null&&t.push(n)}return t}function ln(){const t=sn(),e=t.length,n=ke,o=new Float32Array(e*3);return t.forEach((r,i)=>{o[i*3]=r.x*n,o[i*3+1]=r.y*n,o[i*3+2]=r.z*n}),{abbr:"_bootstrap",positions:o,sizes:new Float32Array(e).fill(Yt*kt),colors:new Float32Array(e*3).fill(1),warm:new Float32Array(e).fill(en),brightness:new Float32Array(e).fill(1),starsInChunk:[]}}var cn={raMin:0,raMax:360,decMin:-90,decMax:90},un={chunks:[],namedStarsInView:[]};function fn(t,e){return t===0&&e!=="success"}function ne(t,e){return t.chunks.length>0?t.chunks:e==="idle"||e==="loading"?[ln()]:[]}function Jn(t,e){const n=ne(t,e),o=n.slice(0,3).map(r=>r.abbr).join(",");return n.length===0?{syntheticKind:"empty",chunkAbbrevSample:o}:n.length===1&&n[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:o}:n.some(r=>r.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:o}:{syntheticKind:"real",chunkAbbrevSample:o}}function Kt(t,e){return e.current===t.current}function dn(t,e,n,o,r){t.onerror=i=>{Kt(e,n)||(o("error"),r(i.message??"Starfield worker failed"))},t.onmessageerror=()=>{Kt(e,n)||(o("error"),r("Starfield worker message error"))}}function pn(t,e,n,o,r,i,l){const{runId:c,...p}=t;c===e.current&&(n.current=c,o.current=p.starsInView,r({chunks:p.chunks,namedStarsInView:p.namedStarsInView}),i("ready"),l(null))}function hn(t,e,n,o,r){t.processStarfield({runId:e,catalog:n,maxDistanceLevel:o,bounds:cn,raInHours:!1}).then(i=>{pn(i,r.runIdRef,r.lastSuccessfulRunIdRef,r.starsInViewRef,r.setStarData,r.setStarfieldStatus,r.setErrorMessage)}).catch(i=>{e===r.runIdRef.current&&(r.setStarfieldStatus("error"),r.setErrorMessage(i instanceof Error?i.message:"Starfield worker failed"))})}function mn(t,e,n=48){const o=[];for(let l=0;l<e.length;l+=1){const c=e[l];if(!be(c.position,t.position,t.forward,t.right,t.up,t.fovYRadians,t.aspect))continue;const p=c.position.x-t.position.x,s=c.position.y-t.position.y,f=c.position.z-t.position.z,d=p*p+s*s+f*f;o.push({entry:c,distSq:d,index:l})}o.sort((l,c)=>l.distSq!==c.distSq?l.distSq-c.distSq:l.index-c.index);const r=o.slice(0,n).map(l=>l.entry),i=an(r.map(l=>l.position),10);return r.map((l,c)=>({...l,labelOffset:i[c]}))}function vn(t,e){return`translate(${t}px, ${e}px) translate(-50%, calc(-100% - 8px))`}function gn(t){return t.map(e=>`${e.name}\0${e.position.x.toFixed(4)},${e.position.y.toFixed(4)},${e.position.z.toFixed(4)}\0${e.labelOffset?.x??""},${e.labelOffset?.y??""}`).join("|")}function yn(t){const e=document.createElement("div");e.style.position="absolute",e.style.left="0",e.style.top="0",e.style.width="100%",e.style.height="100%",e.style.pointerEvents="none",t.appendChild(e);let n="",o=[],r=[];function i(){e.replaceChildren(),o=[],r=[],n=""}function l(c){e.replaceChildren(),o=[],r=c;for(const{position:p,name:s,labelOffset:f}of c){const d=document.createElement("div");d.className="star-label-wrapper",d.style.position="absolute",d.style.left="0",d.style.top="0",d.style.pointerEvents="none";const g=document.createElement("span");g.className="star-label",g.textContent=s,d.appendChild(g),e.appendChild(d),o.push({wrap:d,span:g})}}return{container:e,get lastSig(){return n},set lastSig(c){n=c},get rowEls(){return o},get currentRows(){return r},clearRows:i,rebuildRows:l}}function Sn(t,e,n){const o=n,r=yn(o),i={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},l=new C,c=new C,p=new C,s=new C;return{onFrame:()=>{const d=e.getEnabled(),g=e.getNamedStarsInView(),{size:b}=t;if(!d){r.lastSig!==""&&r.clearRows();return}const v=nt(t).cameraThree;if(!v.isPerspectiveCamera)return;Jt(v,i,l,c,p);const M=mn(i,g),P=gn(M);P!==r.lastSig&&(r.lastSig=P,r.rebuildRows(M));for(let S=0;S<r.currentRows.length;S+=1){const T=r.currentRows[S],w=r.rowEls[S]?.wrap;if(!w)continue;if(s.set(T.position.x,T.position.y,T.position.z),Fe(s,Tt.current,!0),s.project(v),!(Number.isFinite(s.x)&&Number.isFinite(s.y)&&Number.isFinite(s.z)&&Math.abs(s.x)<=1&&Math.abs(s.y)<=1&&s.z>=-1&&s.z<=1)){w.style.display="none";continue}w.style.display="";const y=(s.x*.5+.5)*b.width+(T.labelOffset?.x??0),z=(-s.y*.5+.5)*b.height+(T.labelOffset?.y??0);w.style.transform=vn(y,z)}},dispose:()=>{r.clearRows(),r.container.parentNode===o&&o.removeChild(r.container)}}}var xn=3;function bn(t,e,n){return Math.max(e,Math.min(n,t))}function re(t,e,n,o=1,r=256){if(!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(n)||!Number.isFinite(o)||!Number.isFinite(r)||e<=0||t<=0||o<=0||r<=0)return 0;const i=t*(n/e);return i<=0?0:bn(i*o,0,r)}function Pn(t,e,n){const o=re(t,e,n);if(o<=0)return 0;const r=o*.5+xn;return Math.min(r,256)}function wn(t,e,n,o){const r=Math.sqrt(t*t+e*e+n*n);if(r<=0||!Number.isFinite(r)){o.x=0,o.y=0,o.z=0;return}const i=me(r)/r;o.x=t*i,o.y=e*i,o.z=n*i}function Cn(t,e,n,o,r,i,l,c){const p=Math.sqrt(t*t+e*e+n*n);if(p<=0||!Number.isFinite(p)||!Number.isFinite(o)){const b=-r,v=-i,M=-l;return b*b+v*v+M*M<=c}const s=o/p,f=t*s-r,d=e*s-i,g=n*s-l;return f*f+d*d+g*g<=c}var xt=new C,bt=new C;function Mn(t,e,n,o,r,i,l,c,p,s,f,d,g,b){const v=n.getBoundingClientRect(),M=t-v.left,P=e-v.top,S=Number.isFinite(o.fov)&&o.fov>0?v.height/(2*Math.tan(o.fov*Math.PI/360)):0,T=Math.min(p,i.length/3,l.length,c.length);let w=null;for(let y=0;y<T;y+=1){const z=y*3,I=i[z],k=i[z+1],D=i[z+2];if(!Cn(I,k,D,c[y]??0,d.x,d.y,d.z,g))continue;const L=I-s.position.x,W=k-s.position.y,O=D-s.position.z,E=L*s.forward.x+W*s.forward.y+O*s.forward.z;if(E<=1e-6)continue;const F=L*s.right.x+W*s.right.y+O*s.right.z,_=L*s.up.x+W*s.up.y+O*s.up.z,G=f*s.aspect*E;if(Math.abs(F)>G)continue;const zt=f*E;if(Math.abs(_)>zt)continue;const rt=E,ht=l[y],mt=re(ht,rt,S),X=Pn(ht,rt,S);if(X<=0)continue;xt.set(I,k,D),xt.applyMatrix4(r.matrixWorld),bt.copy(xt).project(o);const vt=(bt.x*.5+.5)*v.width,ot=(-bt.y*.5+.5)*v.height,q=vt-M,U=ot-P,at=q*q+U*U;if(at>X*X)continue;const B={index:y,distSqPx:at,depthCam:rt,renderedPx:mt};b(B,w)&&(w=B)}return w}function ct(){const t=Te().getState(),e=ge.getState().session.gameStarted,n=(t.camera.visitId!=null||t.camera.watchId!=null)&&t.camera.autoWatch;return t.playing||n||e}var A={chunks:[],pointsMeshes:[],starsInView:[]},$={position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},Tn=new C,kn=new C,zn=new C,$t={x:0,y:0,z:0};function Gt(t,e){return e?t.depthCam!==e.depthCam?t.depthCam<e.depthCam:t.renderedPx!==e.renderedPx?t.renderedPx>e.renderedPx:t.distSqPx<e.distSqPx:!0}function Zn(){return A}function tr(t,e){const n=Se();function o(){return n.getQueryData(["hyg-catalog"])?.stars??[]}const r=nt(t),i=r.layers.starfield,l=e,c={current:[]},p={current:null},s={current:null},f={current:0},d={current:-1};let g=un,b="idle",v=null;const M=a=>{g=typeof a=="function"?a(g):a,y(),q(),ct()||t.invalidate()},P=a=>{b=typeof a=="function"?a(b):a,gt(),q(),ct()||t.invalidate()},S=a=>{v=typeof a=="function"?a(v):a,gt()},T={current:[]},w={current:!1},y=()=>{const a=Wt.getState(),u=a.phase,{c2TourOrder:h}=a,m=Bt.getState().appMode==="time-trial",{showStarNames:x}=St.getState(),{namedStarsInView:R}=g;T.current=qe(R,u,h,m),w.current=Ue(x,u,m)};y();const z=Sn(t,{getNamedStarsInView:()=>T.current,getEnabled:()=>w.current&&!ve(Ce.getState().stack)},e),I={runIdRef:f,lastSuccessfulRunIdRef:d,starsInViewRef:c,setStarData:M,setStarfieldStatus:P,setErrorMessage:S},k=[],D=[],L=[],W=[],O=[],E=[];let F=null,_=null,G=0;const zt=new ce,rt=new ue,ht=new pe;function mt(a,u,h,m){const{chunks:x}=A;Jt(m,$,Tn,kn,zn);const R=Math.tan($.fovYRadians*.5);wn($.position.x,$.position.y,$.position.z,$t);const H=500**2;let N=-1,K=null;for(let V=0;V<x.length;V+=1){const yt=x[V],It=k[V],Et=O[V],Nt=E[V];if(!yt||!It||!Et||!Nt)continue;const st=Mn(a,u,h,m,It,yt.positions,Nt,Et,yt.starsInChunk.length,$,R,$t,H,Gt);!st||!Gt(st,K)||(K=st,N=W[V]+st.index)}return N}function X(a,u){const h=c.current;if(h.length===0||!(u instanceof HTMLCanvasElement))return!1;const m=mt(a.clientX,a.clientY,u,r.cameraThree);if(m<0||m>=h.length)return!1;const x=h[m],R=x.proper??(x.hip!=null?`HIP ${x.hip}`:`Star ${x.id}`);return Pe.select(xe("hyg",x.id),R,"star"),!0}function vt(a){const u=new de;return u.setAttribute("position",new Q(a.positions,3)),u.setAttribute("size",new Q(a.sizes,1)),u.setAttribute("color",new Q(a.colors,3)),u.setAttribute("warm",new Q(a.warm,1)),u.setAttribute("brightness",new Q(a.brightness,1)),u.computeBoundingSphere(),u}function ot(){for(const a of k)i.remove(a);k.length=0,W.length=0,O.length=0,E.length=0;for(const a of D)i.remove(a);D.length=0;for(const a of L)a.dispose();L.length=0}function q(){if(ot(),F==null||_==null){A.chunks=[],A.pointsMeshes=[],A.starsInView=c.current;return}const a=ne(g,b);let u=0;for(const h of a){const m=vt(h);L.push(m),W.push(u);const x=new Float32Array(h.starsInChunk.length);for(let N=0;N<h.starsInChunk.length;N+=1){const K=h.starsInChunk[N];x[N]=K?Qt(K):0}O.push(x),E.push(new Float32Array(h.sizes));const R=new Lt(m,F);R.frustumCulled=!0,R.raycast=()=>{},i.add(R),k.push(R);const H=new Lt(m,_);H.frustumCulled=!0,H.renderOrder=1,i.add(H),D.push(H),u+=h.starsInChunk.length}A.chunks=a,A.pointsMeshes=k,A.starsInView=c.current}F=Ye(),_=Je();function U(){const a=s.current;if(!a)return;const u=n.getQueryState([Ot]),h=o();if(fn(h.length,u?.status))return;P("loading"),f.current+=1;const m=f.current,{maxDistanceLevel:x}=St.getState();hn(a,m,h,x,I)}const at=()=>{S(null),P("loading"),U()};let B=[],it=null;function Rt(){it?.abort(),it=null;for(const a of B)l.removeChild(a);B=[]}function gt(){if(Rt(),b==="loading"){const a=document.createElement("div");a.className="starfield-status starfield-status--loading",a.style.position="absolute",a.style.left="50%",a.style.top="50%",a.style.transform="translate(-50%, -50%)",a.style.pointerEvents="none";const u=document.createElement("span");u.className="starfield-status__text",u.textContent="Loading stars…",a.appendChild(u),l.appendChild(a),B.push(a)}else if(b==="error"){const a=document.createElement("div");a.className="starfield-status starfield-status--error",a.style.position="absolute",a.style.left="50%",a.style.top="50%",a.style.transform="translate(-50%, -50%)",a.style.pointerEvents="auto";const u=document.createElement("div");u.className="starfield-status__message";const h=document.createElement("span");h.className="starfield-status__text",h.textContent=v??"Failed to load stars",u.appendChild(h);const m=document.createElement("button");m.type="button",m.className="starfield-status__retry",m.textContent="Retry",it=new AbortController,m.addEventListener("click",at,{signal:it.signal}),u.appendChild(m),a.appendChild(u),l.appendChild(a),B.push(a)}}const At=typeof window.Worker>"u",Ft=window.Worker;if(Ft){const a=new Ft(je,{type:"module"});p.current=a,s.current=ye(a),dn(a,f,d,P,S)}else P("error"),S("Workers not supported");q(),ct()||t.invalidate(),gt();const oe=We((a,u)=>a.button!==0?!1:X(a,u));function _t(){const a=n.getQueryState([Ot]);if(a?.status==="error"){if(At)return;const u=a.error;P("error"),S(u instanceof Error?u.message:String(u));return}a?.status==="success"&&(At||S(null)),U()}_t();const ae=St.subscribe(a=>({maxDistanceLevel:a.maxDistanceLevel,showStarNames:a.showStarNames}),(a,u)=>{y(),(u==null||a.maxDistanceLevel!==u.maxDistanceLevel)&&U()},{equalityFn:Dt}),ie=Wt.subscribe(a=>({phase:a.phase,c2TourOrder:a.c2TourOrder,remainingC2StarIds:a.remainingC2StarIds}),()=>{y()},{equalityFn:Dt}),se=Bt.subscribe((a,u)=>{const h=a.appMode==="time-trial",m=u!=null&&u.appMode==="time-trial";u!=null&&h===m||y()}),le=n.getQueryCache().subscribe(a=>{Re(a,"hyg-catalog")&&_t()});return{onFrame:()=>{if(z.onFrame(),ct()){const a=Math.min(.06,r.timer.getDelta());G+=a,F?.uniforms.uTime&&(F.uniforms.uTime.value=G),_?.uniforms.uTime&&(_.uniforms.uTime.value=G)}},dispose:()=>{ae(),ie(),se(),le(),Rt(),z.dispose(),ot(),F?.dispose(),F=null,_?.dispose(),_=null;const a=s.current;if(a)try{a[Me]()}catch{}s.current=null,p.current?.terminate(),p.current=null,oe(),A.chunks=[],A.pointsMeshes=[],A.starsInView=[]}}}function ut(t){return new dt(t[0],t[1],t[2])}function Rn(){return{cool:ut(j.star4),warm:ut(j.star3),hot:ut(j.star2),flare:ut(j.star1)}}var An=`
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
`,Fn=`
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
`;function er(t){return t==null||Array.isArray(t)||!(t instanceof et)?!1:t.userData.cosmosiveSunPhotosphere===!0}function nr(t,e){const n=Rn(),o={cool:t?.cool??n.cool,warm:t?.warm??n.warm,hot:t?.hot??n.hot,flare:t?.flare??n.flare},r={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:o.cool.clone()},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},i=new et({uniforms:r,vertexShader:An,fragmentShader:Fn,transparent:e?.transparent??!1,depthWrite:e?.depthWrite??!0,toneMapped:!1});return i.userData.cosmosiveSunPhotosphere=!0,i}var _n=`
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
`,In=`
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
`;function Pt(t){return new dt(t[0],t[1],t[2])}function En(){return{warm:Pt(j.star3),hot:Pt(j.star2),flare:Pt(j.star1)}}function rr(t){return t==null||Array.isArray(t)||!(t instanceof et)?!1:t.userData.cosmosiveSunCorona===!0}function or(t){const e=En(),n={warm:t?.warm??e.warm,hot:t?.hot??e.hot,flare:t?.flare??e.flare},o={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:n.warm.clone()},uPaletteHot:{value:n.hot.clone()},uPaletteFlare:{value:n.flare.clone()}},r=new et({uniforms:o,vertexShader:_n,fragmentShader:In,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return r.userData.cosmosiveSunCorona=!0,r}export{jn as A,Jt as B,Ue as C,Xn as D,lt as E,Be as F,On as H,We as I,$n as L,Ee as M,Kn as N,Gn as O,Un as P,Vn as R,qe as S,j as T,Tt as U,Bn as V,hn as _,Zn as a,ne as b,Cn as c,yn as d,gn as f,Jn as g,un as h,er as i,qn as j,Ve as k,Pn as l,mn as m,rr as n,tr as o,vn as p,nr as r,wn as s,or as t,re as u,dn as v,je as w,Yn as x,fn as y,Hn as z};
