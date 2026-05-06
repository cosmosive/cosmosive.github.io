import{wt as fe}from"./babylon-postprocess-vendor-Uy6z8sXZ.js";import{B as me,C as he,Q as te,R as de,bt as N,lt as B,o as Q,p as V,s as pe,ut as ve,yt as xe}from"./three-vendor-BZgPQKFQ.js";import{En as ne,Ja as Se,So as ye,Ya as re,an as ge,eo as Pe,fo as be,qa as Me,vo as we}from"./index-BTwYLDZC.js";import{l as Ce}from"./babylon-vendor-C3r8os07.js";import{t as oe}from"./r3fHostExtras-BIco5YcV.js";var X=new WeakMap;function wt(e,t){X.set(e,t)}function Ct(e){X.delete(e)}function ze(e){if(e.engineKind!=="babylon")throw new Error("asBabylon: SceneHost is not a Babylon implementation");const t=X.get(e);if(!t)throw new Error("asBabylon: missing Babylon extras (host not fully initialized?)");return t}var ae={current:null};function ke(e,t,n){return n&&t&&ye(e,t.position.x,t.position.y,t.position.z),e}function zt(e,t,n){if(n&&t){const r=e;r.x+=t.position.x,r.y+=t.position.y,r.z+=t.position.z}return e}function kt(e,t){return e.getWorldPosition(t),ke(t,ae.current,!0),t}function Te(e,t,n,r,o){e.updateMatrixWorld(!0),e.getWorldPosition(n),t.position.x=n.x,t.position.y=n.y,t.position.z=n.z,e.getWorldDirection(n),r.setFromMatrixColumn(e.matrixWorld,0).normalize(),o.setFromMatrixColumn(e.matrixWorld,1).normalize(),t.forward.x=n.x,t.forward.y=n.y,t.forward.z=n.z,t.right.x=r.x,t.right.y=r.y,t.right.z=r.z,t.up.x=o.x,t.up.y=o.y,t.up.z=o.z,t.fovYRadians=de.degToRad(e.fov),t.aspect=e.aspect}function Fe(e,t,n,r,o){Te(e,t,n,r,o);{const a=ae.current;a&&(t.position.x-=a.position.x,t.position.y-=a.position.y,t.position.z-=a.position.z)}}function Tt(e){const t=e.replace(/^#/,""),n=parseInt(t,16);return Number.isFinite(n)?[Math.floor(n/65536)%256,Math.floor(n/256)%256,n%256]:[0,0,0]}function Ae(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function Ft(e){return Math.max(0,Math.min(255,Math.round(e)))}function L(e,t=1,n=1){const[r,o,a]=Ae(e),i=Math.max(.15,Math.min(1,t));return[r*i,o*i,a*i,n]}var E={star1:L("#fff3a8",1),star2:L("#f5c238",1),star3:L("#e07b1a",1),star4:L("#a8380c",1)},$=4,At=64*$,Ie=-25,_e=500,Ee=.01;function ie(e){return Math.max(0,Math.min(1,e))}function Re(e){return e?.size!=null&&Number.isFinite(e.size)?ie(e.size):.5}function We(e){return .08+.76*ie((e-.99)/.01)**3}function It(e){return(e?Se(e,ne(e)):re)*We(Re(e))*$}function G(e,t){let n=t;for(;e[n]!==n;)n=e[n];let r=t;for(;r!==n;){const o=e[r];e[r]=n,r=o}return n}function De(e,t,n){const r=G(e,t),o=G(e,n);r!==o&&(e[r]=o)}function Y(e,t,n){return`${e},${t},${n}`}function _t(e,t){const n=e.length,r=Array.from({length:n},(s,u)=>u),o=t,a=new Map;for(let s=0;s<n;s+=1){const u=e[s],f=Y(Math.floor(u.x/o),Math.floor(u.y/o),Math.floor(u.z/o));a.has(f)||a.set(f,[]),a.get(f).push(s)}const i=t*t;for(let s=0;s<n;s+=1){const u=e[s],f=Math.floor(u.x/o),S=Math.floor(u.y/o),h=Math.floor(u.z/o);for(let d=-1;d<=1;d+=1)for(let m=-1;m<=1;m+=1)for(let y=-1;y<=1;y+=1){const P=Y(f+d,S+m,h+y),C=a.get(P);if(C)for(const g of C){if(g<=s)continue;const z=e[g],T=z.x-u.x,F=z.y-u.y,M=z.z-u.z;T*T+F*F+M*M<i&&De(r,s,g)}}}const c=new Map;for(let s=0;s<n;s+=1){const u=G(r,s);c.has(u)||c.set(u,[]),c.get(u).push(s)}const l=[];for(let s=0;s<n;s+=1)l.push(void 0);for(const s of c.values())s.length<=1||(s.sort((u,f)=>u-f),s.forEach((u,f)=>{f>0&&(l[u]={x:0,y:f*Ie})}));return l}function Ne(){const e=[];for(let t=0;t<_e;t+=1){const n=Me(t*.7%360,t*.3%180-90);n!=null&&e.push(n)}return e}function Be(){const e=Ne(),t=e.length,n=be,r=new Float32Array(t*3);return e.forEach((o,a)=>{r[a*3]=o.x*n,r[a*3+1]=o.y*n,r[a*3+2]=o.z*n}),{abbr:"_bootstrap",positions:r,sizes:new Float32Array(t).fill(re*$),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(Ee),brightness:new Float32Array(t).fill(1),starsInChunk:[]}}var Le={raMin:0,raMax:360,decMin:-90,decMax:90},Et={chunks:[],namedStarsInView:[]};function Rt(e,t){return e===0&&t!=="success"}function se(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[Be()]:[]}function Wt(e,t){const n=se(e,t),r=n.slice(0,3).map(o=>o.abbr).join(",");return n.length===0?{syntheticKind:"empty",chunkAbbrevSample:r}:n.length===1&&n[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:r}:n.some(o=>o.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:r}:{syntheticKind:"real",chunkAbbrevSample:r}}function Z(e,t){return t.current===e.current}function Dt(e,t,n,r,o){e.onerror=a=>{Z(t,n)||(r("error"),o(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{Z(t,n)||(r("error"),o("Starfield worker message error"))}}function He(e,t,n,r,o,a,i){const{runId:c,...l}=e;c===t.current&&(n.current=c,r.current=l.starsInView,o({chunks:l.chunks,namedStarsInView:l.namedStarsInView}),a("ready"),i(null))}function Nt(e,t,n,r,o){e.processStarfield({runId:t,catalog:n,maxDistanceLevel:r,bounds:Le,raInHours:!1}).then(a=>{He(a,o.runIdRef,o.lastSuccessfulRunIdRef,o.starsInViewRef,o.setStarData,o.setStarfieldStatus,o.setErrorMessage)}).catch(a=>{t===o.runIdRef.current&&(o.setStarfieldStatus("error"),o.setErrorMessage(a instanceof Error?a.message:"Starfield worker failed"))})}function Ve(e,t){t.length=0;for(const n of e){const r=new Float32Array(n.starsInChunk.length);for(let o=0;o<n.starsInChunk.length;o+=1){const a=n.starsInChunk[o];r[o]=a?ne(a):0}t.push(r)}}function Oe(e,t,n){const r=se(e(),t());return Ve(r,n),r}function le(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function qe(e,t){let n=0,r=-1,o=null;for(let a=0;a<e.length;a+=1){const i=e[a],c=i.starsInChunk.length,l=t(i,a);l&&le(l,o)&&(o=l,r=n+l.index),n+=c}return r}function Ue(e,t){if(t<0||t>=e.length)return!1;const n=e[t],r=n.proper??(n.hip!=null?`HIP ${n.hip}`:`Star ${n.id}`);return ge.select(we("hyg",n.id),r,"star"),!0}function je(e){if(e.starsInView.length===0)return!1;const t=e.prepared;if(t==null)return!1;const n=qe(e.chunks,(r,o)=>e.pickInChunk(r,o,t));return Ue(e.starsInView,n)}function Ke(e,t,n,r){const o=Math.sqrt(e*e+t*t+n*n);if(o<=0||!Number.isFinite(o)){r.x=0,r.y=0,r.z=0;return}const a=Pe(o)/o;r.x=e*a,r.y=t*a,r.z=n*a}function Ge(e,t,n,r,o,a,i,c){const l=Math.sqrt(e*e+t*t+n*n);if(l<=0||!Number.isFinite(l)||!Number.isFinite(r)){const h=-o,d=-a,m=-i;return h*h+d*d+m*m<=c}const s=r/l,u=e*s-o,f=t*s-a,S=n*s-i;return u*u+f*f+S*S<=c}function Xe(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},cameraHelioPc:{x:0,y:0,z:0}}}function $e(e){const t=Math.tan(e.frustum.fovYRadians*.5);return Ke(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.cameraHelioPc),{tanHalfV:t,maxDistSqPc:500**2}}var Je=256,Qe=320,Ye=`
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
`,Ze=`
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
`,et=`
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
`;function ue(e){const t=new B({uniforms:{uScale:{value:1},uPointSizeMax:{value:e?.pointSizeMax??Je},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uMinScreenPx:{value:e?.minScreenPx??0},uMaxScreenPx:{value:e?.maxScreenPx??0},uPaletteHot:{value:new V(1,.78,.56)},uPaletteFlare:{value:new V(1,.92,.75)}},vertexShader:Ye,fragmentShader:e?.useHaloShader?et:Ze,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),n=new xe;return t.onBeforeRender=(r,o,a)=>{const i=a;i.isPerspectiveCamera&&i.fov&&(r.getSize(n),t.uniforms.uScale.value=n.y/(2*Math.tan(i.fov*Math.PI/360)))},t}function tt(){return ue({twinkleAmp:.03,twinkleFreq:.9})}function nt(){return ue({useHaloShader:!0,sizeMultiplier:1.6,minScreenPx:2.1,maxScreenPx:5.2,pointSizeMax:Qe,twinkleAmp:.02,twinkleFreq:.55})}function rt(e){const{layers:t}=oe(e);return{createChunk(n){const r=t[n.layer],o=new pe;for(const l of n.attributes)o.setAttribute(l.name,new Q(l.data,l.components));o.computeBoundingSphere();const a=n.material,i=new te(o,a);i.frustumCulled=!0,i.raycast=()=>{},r.add(i);const c=new Map(n.attributes.map(l=>[l.name,l.components]));return{meshRef:i,updateAttribute(l,s){const u=c.get(l);u!=null&&o.setAttribute(l,new Q(s,u))},setVertexCount(l){o.computeBoundingSphere()},dispose(){r.remove(i),o.dispose()}}}}}function ee(e){return e==="position"?fe.PositionKind:e}function ot(e){const{scene:t,layers:n}=ze(e);return{createChunk(r){const o=n[r.layer],a=new Ce(r.meshName,t);a.material=r.material;for(const i of r.attributes)a.setVerticesData(ee(i.name),i.data,!0,i.components);return a.isUnIndexed=!0,a.setIndices([],null),a.isPickable=!1,e.attach(o,a),{meshRef:a,updateAttribute(i,c){a.updateVerticesData(ee(i),c,!1,!1)},setVertexCount(i){const c=a.subMeshes[0];c&&(c.verticesCount=i),a.refreshBoundingInfo(!0)},dispose(){e.detach(o,a),a.dispose()}}}}}function at(e){return e.engineKind==="babylon"?ot(e):rt(e)}function it(e,t,n){const r=new te(e.geometry,n);return r.frustumCulled=!0,r.renderOrder=1,r.raycast=()=>{},t.add(r),{mesh:r,dispose(){t.remove(r)}}}var st=3;function lt(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function ut(e,t,n){return Math.max(t,Math.min(n,e))}function ce(e,t,n,r=1,o=256){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(o)||t<=0||e<=0||r<=0||o<=0)return 0;const a=e*(n/t);return a<=0?0:ut(a*r,0,o)}function ct(e,t,n){const r=ce(e,t,n);if(r<=0)return 0;const o=r*.5+st;return Math.min(o,256)}var q={px:0,py:0};function ft(e){const{positions:t,sizes:n,distancesPc:r,starCount:o,uScale:a,camFrustum:i,tanHalfV:c,cameraHelioPc:l,maxDistSqPc:s,mouseX:u,mouseY:f,projectStarToScreenPx:S}=e,h=Math.min(o,t.length/3,n.length,r.length);let d=null;for(let m=0;m<h;m+=1){const y=m*3,P=t[y],C=t[y+1],g=t[y+2];if(!Ge(P,C,g,r[m]??0,l.x,l.y,l.z,s))continue;const z=P-i.position.x,T=C-i.position.y,F=g-i.position.z,M=z*i.forward.x+T*i.forward.y+F*i.forward.z;if(M<=1e-6)continue;const O=z*i.right.x+T*i.right.y+F*i.right.z,p=z*i.up.x+T*i.up.y+F*i.up.z,v=c*i.aspect*M;if(Math.abs(O)>v)continue;const A=c*M;if(Math.abs(p)>A)continue;const x=M,w=n[m]??0,R=ce(w,x,a),b=ct(w,x,a);if(b<=0)continue;S(P,C,g,q);const k=q.px-u,_=q.py-f,W=k*k+_*_;if(W>b*b)continue;const D={index:m,distSqPx:W,depthCam:x,renderedPx:R};le(D,d)&&(d=D)}return d}var U=new N,j=new N;function mt(e,t,n,r,o,a,i,c,l,s,u,f,S){const h=n.getBoundingClientRect();return ft({positions:a,sizes:i,distancesPc:c,starCount:l,uScale:lt(h.height,r.fov*Math.PI/180),camFrustum:s,tanHalfV:u,cameraHelioPc:f,maxDistSqPc:S,mouseX:e-h.left,mouseY:t-h.top,projectStarToScreenPx:(d,m,y,P)=>{U.set(d,m,y),U.applyMatrix4(o.matrixWorld),j.copy(U).project(r),P.px=(j.x*.5+.5)*h.width,P.py=(-j.y*.5+.5)*h.height}})}var I={chunks:[],pointsMeshes:[],starsInView:[]};function Bt(){return I}function Lt(e,t){const n=oe(e),r=n.layers.starfield,{starsInViewRef:o,getStarData:a,getStatus:i}=t,c=at(e),l=[],s=[],u=[],f=[],S=[],h=tt(),d=nt();let m=0;const y=new me,P=new he,C=new ve,g=Xe(),z=new N,T=new N,F=new N;function M(){for(const p of u)p.dispose();u.length=0;for(const p of l)p.dispose();l.length=0,s.length=0,f.length=0,S.length=0}function O(p){I.chunks=p,I.pointsMeshes=s,I.starsInView=o.current}return{refresh(){M();const p=Oe(a,i,f);for(const v of p){S.push(new Float32Array(v.sizes));const A=c.createChunk({layer:"starfield",meshName:`cosmosive-starfield-points-${v.abbr.replace(/[^a-zA-Z0-9_-]/g,"_")}`,material:h,attributes:[{name:"position",data:v.positions,components:3},{name:"size",data:v.sizes,components:1},{name:"color",data:v.colors,components:3},{name:"warm",data:v.warm,components:1},{name:"brightness",data:v.brightness,components:1}]});l.push(A);const x=A.meshRef;s.push(x),u.push(it(x,r,d))}O(p)},advanceTime(p){m+=p,h.uniforms.uTime&&(h.uniforms.uTime.value=m),d.uniforms.uTime&&(d.uniforms.uTime.value=m)},countFrustum(){let p=0,v=0;const A=u.map(w=>w.mesh),x=[...s,...A];if(x.length>0){const w=n.cameraThree;w.updateMatrixWorld(!0),y.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),P.setFromProjectionMatrix(y);for(const R of x){const b=R.geometry;b.boundingSphere||b.computeBoundingSphere();const k=b.boundingSphere;if(!k)continue;C.copy(k).applyMatrix4(R.matrixWorld);const _=b.getAttribute("position");v+=_?.count??0,P.intersectsSphere(C)&&(p+=1)}}return{total:x.length,visible:p,verts:v}},pickFromClick({clientX:p,clientY:v,canvas:A}){const x=n.cameraThree;Fe(x,g.frustum,z,T,F);const{tanHalfV:w,maxDistSqPc:R}=$e(g);return je({starsInView:o.current,chunks:I.chunks,prepared:{tanHalfV:w,maxDistSqPc:R},pickInChunk:(b,k,_)=>{const W=s[k],D=f[k],J=S[k];return!W||!D||!J?null:mt(p,v,A,x,W,b.positions,J,D,b.starsInChunk.length,g.frustum,_.tanHalfV,g.cameraHelioPc,_.maxDistSqPc)}})},dispose(){M(),h.dispose(),d.dispose(),I.chunks=[],I.pointsMeshes=[],I.starsInView=[]}}}function H(e){return new V(e[0],e[1],e[2])}function ht(){return{cool:H(E.star4),warm:H(E.star3),hot:H(E.star2),flare:H(E.star1)}}var dt=`
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
`,pt=`
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
`;function Ht(e){return e==null||Array.isArray(e)||!(e instanceof B)?!1:e.userData.cosmosiveSunPhotosphere===!0}function Vt(e,t){const n=ht(),r={cool:e?.cool??n.cool,warm:e?.warm??n.warm,hot:e?.hot??n.hot,flare:e?.flare??n.flare},o={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:r.cool.clone()},uPaletteWarm:{value:r.warm.clone()},uPaletteHot:{value:r.hot.clone()},uPaletteFlare:{value:r.flare.clone()}},a=new B({uniforms:o,vertexShader:dt,fragmentShader:pt,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var vt=`
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
`,xt=`
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
`;function K(e){return new V(e[0],e[1],e[2])}function St(){return{warm:K(E.star3),hot:K(E.star2),flare:K(E.star1)}}function Ot(e){return e==null||Array.isArray(e)||!(e instanceof B)?!1:e.userData.cosmosiveSunCorona===!0}function qt(e){const t=St(),n={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},r={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:n.warm.clone()},uPaletteHot:{value:n.hot.clone()},uPaletteFlare:{value:n.flare.clone()}},o=new B({uniforms:r,vertexShader:vt,fragmentShader:xt,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return o.userData.cosmosiveSunCorona=!0,o}export{ae as A,L as C,Fe as D,Ae as E,wt as M,Ct as N,zt as O,E as S,Tt as T,Dt as _,Lt as a,_t as b,lt as c,$e as d,je as f,Nt as g,Wt as h,Ht as i,ze as j,kt as k,at as l,Et as m,Ot as n,Bt as o,Oe as p,Vt as r,ft as s,qt as t,Xe as u,Rt as v,Ft as w,It as x,se as y};
