import{B as le,C as ue,Q,R as ce,bt as L,lt as B,o as N,p as V,s as fe,ut as me,yt as he}from"./three-vendor-BZgPQKFQ.js";import{En as ee,Ja as ve,So as pe,Ya as te,an as de,eo as xe,fo as Se,qa as ge,vo as Pe}from"./index-B4XAhHvv.js";import{t as ye}from"./r3fHostExtras-DQA4DyBd.js";var re={current:null};function Me(e,t,r){return r&&t&&pe(e,t.position.x,t.position.y,t.position.z),e}function ht(e,t,r){if(r&&t){const n=e;n.x+=t.position.x,n.y+=t.position.y,n.z+=t.position.z}return e}function vt(e,t){return e.getWorldPosition(t),Me(t,re.current,!0),t}function we(e,t,r,n,o){e.updateMatrixWorld(!0),e.getWorldPosition(r),t.position.x=r.x,t.position.y=r.y,t.position.z=r.z,e.getWorldDirection(r),n.setFromMatrixColumn(e.matrixWorld,0).normalize(),o.setFromMatrixColumn(e.matrixWorld,1).normalize(),t.forward.x=r.x,t.forward.y=r.y,t.forward.z=r.z,t.right.x=n.x,t.right.y=n.y,t.right.z=n.z,t.up.x=o.x,t.up.y=o.y,t.up.z=o.z,t.fovYRadians=ce.degToRad(e.fov),t.aspect=e.aspect}function be(e,t,r,n,o){we(e,t,r,n,o);{const a=re.current;a&&(t.position.x-=a.position.x,t.position.y-=a.position.y,t.position.z-=a.position.z)}}function pt(e){const t=e.replace(/^#/,""),r=parseInt(t,16);return Number.isFinite(r)?[Math.floor(r/65536)%256,Math.floor(r/256)%256,r%256]:[0,0,0]}function Ce(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function dt(e){return Math.max(0,Math.min(255,Math.round(e)))}function H(e,t=1,r=1){const[n,o,a]=Ce(e),i=Math.max(.15,Math.min(1,t));return[n*i,o*i,a*i,r]}var R={star1:H("#fff3a8",1),star2:H("#f5c238",1),star3:H("#e07b1a",1),star4:H("#a8380c",1)},$=4,xt=64*$,ze=-25,Te=500,Fe=.01;function ne(e){return Math.max(0,Math.min(1,e))}function ke(e){return e?.size!=null&&Number.isFinite(e.size)?ne(e.size):.5}function Ae(e){return .08+.76*ne((e-.99)/.01)**3}function St(e){return(e?ve(e,ee(e)):te)*Ae(ke(e))*$}function X(e,t){let r=t;for(;e[r]!==r;)r=e[r];let n=t;for(;n!==r;){const o=e[n];e[n]=r,n=o}return r}function Ie(e,t,r){const n=X(e,t),o=X(e,r);n!==o&&(e[n]=o)}function Y(e,t,r){return`${e},${t},${r}`}function gt(e,t){const r=e.length,n=Array.from({length:r},(s,l)=>l),o=t,a=new Map;for(let s=0;s<r;s+=1){const l=e[s],m=Y(Math.floor(l.x/o),Math.floor(l.y/o),Math.floor(l.z/o));a.has(m)||a.set(m,[]),a.get(m).push(s)}const i=t*t;for(let s=0;s<r;s+=1){const l=e[s],m=Math.floor(l.x/o),S=Math.floor(l.y/o),v=Math.floor(l.z/o);for(let d=-1;d<=1;d+=1)for(let h=-1;h<=1;h+=1)for(let g=-1;g<=1;g+=1){const y=Y(m+d,S+h,v+g),M=a.get(y);if(M)for(const C of M){if(C<=s)continue;const z=e[C],F=z.x-l.x,k=z.y-l.y,b=z.z-l.z;F*F+k*k+b*b<i&&Ie(n,s,C)}}}const f=new Map;for(let s=0;s<r;s+=1){const l=X(n,s);f.has(l)||f.set(l,[]),f.get(l).push(s)}const u=[];for(let s=0;s<r;s+=1)u.push(void 0);for(const s of f.values())s.length<=1||(s.sort((l,m)=>l-m),s.forEach((l,m)=>{m>0&&(u[l]={x:0,y:m*ze})}));return u}function _e(){const e=[];for(let t=0;t<Te;t+=1){const r=ge(t*.7%360,t*.3%180-90);r!=null&&e.push(r)}return e}function Re(){const e=_e(),t=e.length,r=Se,n=new Float32Array(t*3);return e.forEach((o,a)=>{n[a*3]=o.x*r,n[a*3+1]=o.y*r,n[a*3+2]=o.z*r}),{abbr:"_bootstrap",positions:n,sizes:new Float32Array(t).fill(te*$),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(Fe),brightness:new Float32Array(t).fill(1),starsInChunk:[]}}var Ee={raMin:0,raMax:360,decMin:-90,decMax:90},Pt={chunks:[],namedStarsInView:[]};function yt(e,t){return e===0&&t!=="success"}function oe(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[Re()]:[]}function Mt(e,t){const r=oe(e,t),n=r.slice(0,3).map(o=>o.abbr).join(",");return r.length===0?{syntheticKind:"empty",chunkAbbrevSample:n}:r.length===1&&r[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:n}:r.some(o=>o.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:n}:{syntheticKind:"real",chunkAbbrevSample:n}}function Z(e,t){return t.current===e.current}function wt(e,t,r,n,o){e.onerror=a=>{Z(t,r)||(n("error"),o(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{Z(t,r)||(n("error"),o("Starfield worker message error"))}}function We(e,t,r,n,o,a,i){const{runId:f,...u}=e;f===t.current&&(r.current=f,n.current=u.starsInView,o({chunks:u.chunks,namedStarsInView:u.namedStarsInView}),a("ready"),i(null))}function bt(e,t,r,n,o){e.processStarfield({runId:t,catalog:r,maxDistanceLevel:n,bounds:Ee,raInHours:!1}).then(a=>{We(a,o.runIdRef,o.lastSuccessfulRunIdRef,o.starsInViewRef,o.setStarData,o.setStarfieldStatus,o.setErrorMessage)}).catch(a=>{t===o.runIdRef.current&&(o.setStarfieldStatus("error"),o.setErrorMessage(a instanceof Error?a.message:"Starfield worker failed"))})}function De(e,t){t.length=0;for(const r of e){const n=new Float32Array(r.starsInChunk.length);for(let o=0;o<r.starsInChunk.length;o+=1){const a=r.starsInChunk[o];n[o]=a?ee(a):0}t.push(n)}}function Ne(e,t,r){const n=oe(e(),t());return De(n,r),n}function ae(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function Le(e,t){let r=0,n=-1,o=null;for(let a=0;a<e.length;a+=1){const i=e[a],f=i.starsInChunk.length,u=t(i,a);u&&ae(u,o)&&(o=u,n=r+u.index),r+=f}return n}function Be(e,t){if(t<0||t>=e.length)return!1;const r=e[t],n=r.proper??(r.hip!=null?`HIP ${r.hip}`:`Star ${r.id}`);return de.select(Pe("hyg",r.id),n,"star"),!0}function He(e){if(e.starsInView.length===0)return!1;const t=e.prepared;if(t==null)return!1;const r=Le(e.chunks,(n,o)=>e.pickInChunk(n,o,t));return Be(e.starsInView,r)}function Oe(e,t,r,n){const o=Math.sqrt(e*e+t*t+r*r);if(o<=0||!Number.isFinite(o)){n.x=0,n.y=0,n.z=0;return}const a=xe(o)/o;n.x=e*a,n.y=t*a,n.z=r*a}function Ve(e,t,r,n,o,a,i,f){const u=Math.sqrt(e*e+t*t+r*r);if(u<=0||!Number.isFinite(u)||!Number.isFinite(n)){const v=-o,d=-a,h=-i;return v*v+d*d+h*h<=f}const s=n/u,l=e*s-o,m=t*s-a,S=r*s-i;return l*l+m*m+S*S<=f}function qe(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},cameraHelioPc:{x:0,y:0,z:0}}}function Ue(e){const t=Math.tan(e.frustum.fovYRadians*.5);return Oe(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.cameraHelioPc),{tanHalfV:t,maxDistSqPc:500**2}}var je=256,Ge=320,Ke=`
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
`,$e=`
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
`;function ie(e){const t=new B({uniforms:{uScale:{value:1},uPointSizeMax:{value:e?.pointSizeMax??je},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uMinScreenPx:{value:e?.minScreenPx??0},uMaxScreenPx:{value:e?.maxScreenPx??0},uPaletteHot:{value:new V(1,.78,.56)},uPaletteFlare:{value:new V(1,.92,.75)}},vertexShader:Ke,fragmentShader:e?.useHaloShader?$e:Xe,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),r=new he;return t.onBeforeRender=(n,o,a)=>{const i=a;i.isPerspectiveCamera&&i.fov&&(n.getSize(r),t.uniforms.uScale.value=r.y/(2*Math.tan(i.fov*Math.PI/360)))},t}function Je(){return ie({twinkleAmp:.03,twinkleFreq:.9})}function Qe(){return ie({useHaloShader:!0,sizeMultiplier:1.6,minScreenPx:2.1,maxScreenPx:5.2,pointSizeMax:Ge,twinkleAmp:.02,twinkleFreq:.55})}var Ye=3;function Ze(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function et(e,t,r){return Math.max(t,Math.min(r,e))}function se(e,t,r,n=1,o=256){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(r)||!Number.isFinite(n)||!Number.isFinite(o)||t<=0||e<=0||n<=0||o<=0)return 0;const a=e*(r/t);return a<=0?0:et(a*n,0,o)}function tt(e,t,r){const n=se(e,t,r);if(n<=0)return 0;const o=n*.5+Ye;return Math.min(o,256)}var U={px:0,py:0};function rt(e){const{positions:t,sizes:r,distancesPc:n,starCount:o,uScale:a,camFrustum:i,tanHalfV:f,cameraHelioPc:u,maxDistSqPc:s,mouseX:l,mouseY:m,projectStarToScreenPx:S}=e,v=Math.min(o,t.length/3,r.length,n.length);let d=null;for(let h=0;h<v;h+=1){const g=h*3,y=t[g],M=t[g+1],C=t[g+2];if(!Ve(y,M,C,n[h]??0,u.x,u.y,u.z,s))continue;const z=y-i.position.x,F=M-i.position.y,k=C-i.position.z,b=z*i.forward.x+F*i.forward.y+k*i.forward.z;if(b<=1e-6)continue;const q=z*i.right.x+F*i.right.y+k*i.right.z,c=z*i.up.x+F*i.up.y+k*i.up.z,p=f*i.aspect*b;if(Math.abs(q)>p)continue;const w=f*b;if(Math.abs(c)>w)continue;const x=b,P=r[h]??0,A=se(P,x,a),T=tt(P,x,a);if(T<=0)continue;S(y,M,C,U);const I=U.px-l,E=U.py-m,W=I*I+E*E;if(W>T*T)continue;const D={index:h,distSqPx:W,depthCam:x,renderedPx:A};ae(D,d)&&(d=D)}return d}var j=new L,G=new L;function nt(e,t,r,n,o,a,i,f,u,s,l,m,S){const v=r.getBoundingClientRect();return rt({positions:a,sizes:i,distancesPc:f,starCount:u,uScale:Ze(v.height,n.fov*Math.PI/180),camFrustum:s,tanHalfV:l,cameraHelioPc:m,maxDistSqPc:S,mouseX:e-v.left,mouseY:t-v.top,projectStarToScreenPx:(d,h,g,y)=>{j.set(d,h,g),j.applyMatrix4(o.matrixWorld),G.copy(j).project(n),y.px=(G.x*.5+.5)*v.width,y.py=(-G.y*.5+.5)*v.height}})}var _={chunks:[],pointsMeshes:[],starsInView:[]};function Ct(){return _}function zt(e,t){const r=ye(e),n=r.layers.starfield,{starsInViewRef:o,getStarData:a,getStatus:i}=t,f=[],u=[],s=[],l=[],m=[],S=Je(),v=Qe();let d=0;const h=new le,g=new ue,y=new me,M=qe(),C=new L,z=new L,F=new L;function k(c){const p=new fe;return p.setAttribute("position",new N(c.positions,3)),p.setAttribute("size",new N(c.sizes,1)),p.setAttribute("color",new N(c.colors,3)),p.setAttribute("warm",new N(c.warm,1)),p.setAttribute("brightness",new N(c.brightness,1)),p.computeBoundingSphere(),p}function b(){for(const c of f)n.remove(c);f.length=0,l.length=0,m.length=0;for(const c of u)n.remove(c);u.length=0;for(const c of s)c.dispose();s.length=0}function q(c){_.chunks=c,_.pointsMeshes=f,_.starsInView=o.current}return{refresh(){b();const c=Ne(a,i,l);for(const p of c){const w=k(p);s.push(w),m.push(new Float32Array(p.sizes));const x=new Q(w,S);x.frustumCulled=!0,x.raycast=()=>{},n.add(x),f.push(x);const P=new Q(w,v);P.frustumCulled=!0,P.renderOrder=1,n.add(P),u.push(P)}q(c)},advanceTime(c){d+=c,S.uniforms.uTime&&(S.uniforms.uTime.value=d),v.uniforms.uTime&&(v.uniforms.uTime.value=d)},countFrustum(){let c=0,p=0;const w=[...f,...u];if(w.length>0){const x=r.cameraThree;x.updateMatrixWorld(!0),h.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),g.setFromProjectionMatrix(h);for(const P of w){const A=P.geometry;A.boundingSphere||A.computeBoundingSphere();const T=A.boundingSphere;if(!T)continue;y.copy(T).applyMatrix4(P.matrixWorld);const I=A.getAttribute("position");p+=I?.count??0,g.intersectsSphere(y)&&(c+=1)}}return{total:w.length,visible:c,verts:p}},pickFromClick({clientX:c,clientY:p,canvas:w}){const x=r.cameraThree;be(x,M.frustum,C,z,F);const{tanHalfV:P,maxDistSqPc:A}=Ue(M);return He({starsInView:o.current,chunks:_.chunks,prepared:{tanHalfV:P,maxDistSqPc:A},pickInChunk:(T,I,E)=>{const W=f[I],D=l[I],J=m[I];return!W||!D||!J?null:nt(c,p,w,x,W,T.positions,J,D,T.starsInChunk.length,M.frustum,E.tanHalfV,M.cameraHelioPc,E.maxDistSqPc)}})},dispose(){b(),S.dispose(),v.dispose(),_.chunks=[],_.pointsMeshes=[],_.starsInView=[]}}}function O(e){return new V(e[0],e[1],e[2])}function ot(){return{cool:O(R.star4),warm:O(R.star3),hot:O(R.star2),flare:O(R.star1)}}var at=`
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
`,it=`
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
`;function Tt(e){return e==null||Array.isArray(e)||!(e instanceof B)?!1:e.userData.cosmosiveSunPhotosphere===!0}function Ft(e,t){const r=ot(),n={cool:e?.cool??r.cool,warm:e?.warm??r.warm,hot:e?.hot??r.hot,flare:e?.flare??r.flare},o={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:n.cool.clone()},uPaletteWarm:{value:n.warm.clone()},uPaletteHot:{value:n.hot.clone()},uPaletteFlare:{value:n.flare.clone()}},a=new B({uniforms:o,vertexShader:at,fragmentShader:it,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var st=`
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
`,lt=`
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
`;function K(e){return new V(e[0],e[1],e[2])}function ut(){return{warm:K(R.star3),hot:K(R.star2),flare:K(R.star1)}}function kt(e){return e==null||Array.isArray(e)||!(e instanceof B)?!1:e.userData.cosmosiveSunCorona===!0}function At(e){const t=ut(),r={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},n={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:r.warm.clone()},uPaletteHot:{value:r.hot.clone()},uPaletteFlare:{value:r.flare.clone()}},o=new B({uniforms:n,vertexShader:st,fragmentShader:lt,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return o.userData.cosmosiveSunCorona=!0,o}export{dt as C,ht as D,be as E,vt as O,H as S,Ce as T,yt as _,zt as a,St as b,Ze as c,He as d,Ne as f,wt as g,bt as h,Tt as i,re as k,qe as l,Mt as m,kt as n,Ct as o,Pt as p,Ft as r,rt as s,At as t,Ue as u,oe as v,pt as w,R as x,gt as y};
