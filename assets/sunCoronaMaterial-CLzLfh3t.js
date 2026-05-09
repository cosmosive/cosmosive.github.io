import{Hn as oe,Ki as U,Mi as re,Vi as ae,_a as ne,aa as ie,da as se,jn as le}from"./index-0RQhzVLX.js";import{t as Q}from"./r3fHostExtras-CuyrlSEU.js";import{B as ue,C as ce,Q as J,R as fe,bt as W,lt as E,o as j,p as N,s as me,ut as he}from"./three-vendor-Cq50JzVP.js";var Y={current:null};function pe(e,t,o){return o&&t&&ne(e,t.position.x,t.position.y,t.position.z),e}function ut(e,t,o){if(o&&t){const r=e;r.x+=t.position.x,r.y+=t.position.y,r.z+=t.position.z}return e}function ct(e,t){return e.getWorldPosition(t),pe(t,Y.current,!0),t}function de(e,t,o,r,a){e.updateMatrixWorld(!0),e.getWorldPosition(o),t.position.x=o.x,t.position.y=o.y,t.position.z=o.z,e.getWorldDirection(o),r.setFromMatrixColumn(e.matrixWorld,0).normalize(),a.setFromMatrixColumn(e.matrixWorld,1).normalize(),t.forward.x=o.x,t.forward.y=o.y,t.forward.z=o.z,t.right.x=r.x,t.right.y=r.y,t.right.z=r.z,t.up.x=a.x,t.up.y=a.y,t.up.z=a.z,t.fovYRadians=fe.degToRad(e.fov),t.aspect=e.aspect}function ve(e,t,o,r,a){de(e,t,o,r,a);{const n=Y.current;n&&(t.position.x-=n.position.x,t.position.y-=n.position.y,t.position.z-=n.position.z)}}function ft(e){const t=e.replace(/^#/,""),o=parseInt(t,16);return Number.isFinite(o)?[Math.floor(o/65536)%256,Math.floor(o/256)%256,o%256]:[0,0,0]}function xe(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function mt(e){return Math.max(0,Math.min(255,Math.round(e)))}var ge=1,Se=-25,ye=500,Pe=.01;function G(e,t){let o=t;for(;e[o]!==o;)o=e[o];let r=t;for(;r!==o;){const a=e[r];e[r]=o,r=a}return o}function Me(e,t,o){const r=G(e,t),a=G(e,o);r!==a&&(e[r]=a)}function X(e,t,o){return`${e},${t},${o}`}function ht(e,t){const o=e.length,r=Array.from({length:o},(i,l)=>l),a=t,n=new Map;for(let i=0;i<o;i+=1){const l=e[i],f=X(Math.floor(l.x/a),Math.floor(l.y/a),Math.floor(l.z/a));n.has(f)||n.set(f,[]),n.get(f).push(i)}const u=t*t;for(let i=0;i<o;i+=1){const l=e[i],f=Math.floor(l.x/a),x=Math.floor(l.y/a),m=Math.floor(l.z/a);for(let h=-1;h<=1;h+=1)for(let d=-1;d<=1;d+=1)for(let g=-1;g<=1;g+=1){const S=X(f+h,x+d,m+g),y=n.get(S);if(y)for(const P of y){if(P<=i)continue;const M=e[P],F=M.x-l.x,C=M.y-l.y,T=M.z-l.z;F*F+C*C+T*T<u&&Me(r,i,P)}}}const c=new Map;for(let i=0;i<o;i+=1){const l=G(r,i);c.has(l)||c.set(l,[]),c.get(l).push(i)}const s=[];for(let i=0;i<o;i+=1)s.push(void 0);for(const i of c.values())i.length<=1||(i.sort((l,f)=>l-f),i.forEach((l,f)=>{f>0&&(s[l]={x:0,y:f*Se})}));return s}function Ce(){const e=[];for(let t=0;t<ye;t+=1){const o=re(t*.7%360,t*.3%180-90);o!=null&&e.push(o)}return e}function we(){const e=Ce(),t=e.length,o=ie,r=new Float32Array(t*3);return e.forEach((a,n)=>{r[n*3]=a.x*o,r[n*3+1]=a.y*o,r[n*3+2]=a.z*o}),{abbr:"_bootstrap",positions:r,sizes:new Float32Array(t).fill(ge),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(Pe),brightness:new Float32Array(t).fill(1),mag:new Float32Array(t).fill(-1/0),starsInChunk:[]}}var Fe={raMin:0,raMax:360,decMin:-90,decMax:90},pt={chunks:[],namedStarsInView:[]};function dt(e,t){return e===0&&t!=="success"}function Z(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[we()]:[]}function vt(e,t){const o=Z(e,t),r=o.slice(0,3).map(a=>a.abbr).join(",");return o.length===0?{syntheticKind:"empty",chunkAbbrevSample:r}:o.length===1&&o[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:r}:o.some(a=>a.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:r}:{syntheticKind:"real",chunkAbbrevSample:r}}function $(e,t){return t.current===e.current}function xt(e,t,o,r,a){e.onerror=n=>{$(t,o)||(r("error"),a(n.message??"Starfield worker failed"))},e.onmessageerror=()=>{$(t,o)||(r("error"),a("Starfield worker message error"))}}function ze(e,t,o,r,a,n,u){const{runId:c,...s}=e;c===t.current&&(o.current=c,r.current=s.starsInView,a({chunks:s.chunks,namedStarsInView:s.namedStarsInView}),n("ready"),u(null))}function gt(e,t,o,r,a){e.processStarfield({runId:t,catalog:o,maxDistanceLevel:r,bounds:Fe,raInHours:!1}).then(n=>{ze(n,a.runIdRef,a.lastSuccessfulRunIdRef,a.starsInViewRef,a.setStarData,a.setStarfieldStatus,a.setErrorMessage)}).catch(n=>{t===a.runIdRef.current&&(a.setStarfieldStatus("error"),a.setErrorMessage(n instanceof Error?n.message:"Starfield worker failed"))})}function be(e,t){t.length=0;for(const o of e){const r=new Float32Array(o.starsInChunk.length);for(let a=0;a<o.starsInChunk.length;a+=1){const n=o.starsInChunk[a];r[a]=n?oe(n)*U:0}t.push(r)}}function ke(e,t,o){const r=Z(e(),t());return be(r,o),r}var Te=500*U;function Ae(e,t,o,r){const a=Math.sqrt(e*e+t*t+o*o);if(a<=0||!Number.isFinite(a)){r.x=0,r.y=0,r.z=0;return}const n=ae(a)*U/a;r.x=e*n,r.y=t*n,r.z=o*n}function _e(e,t,o,r,a,n,u,c){const s=Math.sqrt(e*e+t*t+o*o);if(s<=0||!Number.isFinite(s)||!Number.isFinite(r)){const m=-a,h=-n,d=-u;return m*m+h*h+d*d<=c}const i=r/s,l=e*i-a,f=t*i-n,x=o*i-u;return l*l+f*f+x*x<=c}function Ie(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},cameraHelioKm:{x:0,y:0,z:0}}}function Re(e){const t=Math.tan(e.frustum.fovYRadians*.5);return Ae(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.cameraHelioKm),{tanHalfV:t,maxDistSqKm:Te**2}}var We=256,Ee=320,De=`
  attribute float size;
  attribute vec3 color;
  attribute float brightness;
  attribute float warm;
  attribute float mag;
  varying vec3 vColor;
  varying float vBrightness;
  varying float vWarm;
  varying float vSeed;
  uniform float uPointSizeMax;
  uniform float uTime;
  uniform float uTwinkleAmp;
  uniform float uTwinkleFreq;
  uniform float uSizeMultiplier;
  uniform float uPointSizeFloor;
  uniform float uMagLimit;
  uniform float uMagFadeRange;
  uniform float uMagRef;
  uniform float uFluxClampMax;
  uniform float uFluxGamma;
  uniform float uPsfMaxMult;

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

    // Apparent magnitude from current camera (per-vertex catalog mag is Sol-pov apparent mag;
    // rescale by the camera/Sol distance ratio): m_app = mag + 5 * log10(d_cam / d_sol).
    float dCam = length(mvPosition.xyz);
    float dSol = max(length(position), 1.0);
    float appMag = mag + 5.0 * log(dCam / dSol) / log(10.0);

    // Cull via clip-space (WebKit/WKWebView renders gl_PointSize=0 as 1 px). Push the vertex
    // outside the [-1,1] clip volume to actually drop it. Cull on naked-eye mag limit only;
    // size has no role in culling.
    if (mvPosition.z >= 0.0 || appMag > uMagLimit) {
      gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      gl_PointSize = 0.0;
      vBrightness = 0.0;
    } else {
      // Pogson flux relative to reference magnitude (Vega-like, m_ref=0).
      float fluxLog = -0.4 * (appMag - uMagRef);
      float flux = pow(10.0, fluxLog);
      // Gamma-compressed tone curve; saturate brightest stars at uFluxClampMax.
      float toneFlux = pow(clamp(flux, 0.0, uFluxClampMax), uFluxGamma);
      // Smooth fade across the last uMagFadeRange below the limit.
      float magFade = clamp((uMagLimit - appMag) / max(uMagFadeRange, 0.0001), 0.0, 1.0);
      // PSF analogue: brightest stars bleed slightly larger.
      float maxToneFlux = pow(uFluxClampMax, uFluxGamma);
      float saturationFrac = sqrt(clamp(toneFlux / max(maxToneFlux, 0.0001), 0.0, 1.0));
      float psfSizePx = mix(uPointSizeFloor, uPointSizeFloor * uPsfMaxMult, saturationFrac);
      // size attribute now carries fusion fade multiplier (0..1, default 1).
      psfSizePx *= size;
      psfSizePx *= uSizeMultiplier;
      gl_PointSize = clamp(psfSizePx, 0.0, uPointSizeMax);
      vBrightness = toneFlux * magFade * twinkle * (0.85 + 0.3 * brightness);
    }
  }
`,Le=`
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
`,He=`
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
`;function ee(e){return new E({uniforms:{uPointSizeMax:{value:e?.pointSizeMax??We},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uPointSizeFloor:{value:e?.pointSizeFloor??1},uMagLimit:{value:6.5},uMagFadeRange:{value:1},uMagRef:{value:0},uFluxClampMax:{value:4},uFluxGamma:{value:.45},uPsfMaxMult:{value:3.5},uPaletteHot:{value:new N(1,.78,.56)},uPaletteFlare:{value:new N(1,.92,.75)}},vertexShader:De,fragmentShader:e?.useHaloShader?He:Le,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function Ne(){return ee({twinkleAmp:.03,twinkleFreq:.9,pointSizeFloor:1})}function Ve(){return ee({useHaloShader:!0,sizeMultiplier:1.6,pointSizeMax:Ee,pointSizeFloor:1,twinkleAmp:.02,twinkleFreq:.55})}function Oe(e){const{layers:t}=Q(e);return{createChunk(o){const r=t[o.layer],a=new me;for(const s of o.attributes)a.setAttribute(s.name,new j(s.data,s.components));a.computeBoundingSphere();const n=o.material,u=new J(a,n);u.frustumCulled=!0,u.raycast=()=>{},r.add(u);const c=new Map(o.attributes.map(s=>[s.name,s.components]));return{meshRef:u,updateAttribute(s,i){const l=c.get(s);l!=null&&a.setAttribute(s,new j(i,l))},setVertexCount(s){a.computeBoundingSphere()},dispose(){r.remove(u),a.dispose()}}}}}function Be(e){return Oe(e)}function Ke(e,t,o){const r=new J(e.geometry,o);return r.frustumCulled=!0,r.renderOrder=1,r.raycast=()=>{},t.add(r),{mesh:r,dispose(){t.remove(r)}}}function te(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function qe(e,t){let o=0,r=-1,a=null;for(let n=0;n<e.length;n+=1){const u=e[n],c=u.starsInChunk.length,s=t(u,n);s&&te(s,a)&&(a=s,r=o+s.index),o+=c}return r}function Ge(e,t){if(t<0||t>=e.length)return!1;const o=e[t],r=o.proper??(o.hip!=null?`HIP ${o.hip}`:`Star ${o.id}`);return le.select(se("hyg",o.id),r,"star"),!0}function Ue(e){if(e.starsInView.length===0)return!1;const t=e.prepared;if(t==null)return!1;const o=qe(e.chunks,(r,a)=>e.pickInChunk(r,a,t));return Ge(e.starsInView,o)}function je(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function Xe(){return 1}function $e(){return 8}var O={px:0,py:0};function Qe(e){const{positions:t,sizes:o,distancesKm:r,starCount:a,camFrustum:n,tanHalfV:u,cameraHelioKm:c,maxDistSqKm:s,mouseX:i,mouseY:l,projectStarToScreenPx:f}=e,x=Math.min(a,t.length/3,o.length,r.length);let m=null;for(let h=0;h<x;h+=1){const d=h*3,g=t[d],S=t[d+1],y=t[d+2];if(!_e(g,S,y,r[h]??0,c.x,c.y,c.z,s))continue;const P=g-n.position.x,M=S-n.position.y,F=y-n.position.z,C=P*n.forward.x+M*n.forward.y+F*n.forward.z;if(C<=1e-6)continue;const T=P*n.right.x+M*n.right.y+F*n.right.z,V=P*n.up.x+M*n.up.y+F*n.up.z,p=u*n.aspect*C;if(Math.abs(T)>p)continue;const v=u*C;if(Math.abs(V)>v)continue;const z=C,b=Xe(),w=$e();if(w<=0)continue;f(g,S,y,O);const I=O.px-i,A=O.py-l,R=I*I+A*A;if(R>w*w)continue;const D={index:h,distSqPx:R,depthCam:z,renderedPx:b};te(D,m)&&(m=D)}return m}var B=new W,K=new W;function Je(e,t,o,r,a,n,u,c,s,i,l,f,x){const m=o.getBoundingClientRect();return Qe({positions:n,sizes:u,distancesKm:c,starCount:s,uScale:je(m.height,r.fov*Math.PI/180),camFrustum:i,tanHalfV:l,cameraHelioKm:f,maxDistSqKm:x,mouseX:e-m.left,mouseY:t-m.top,projectStarToScreenPx:(h,d,g,S)=>{B.set(h,d,g),B.applyMatrix4(a.matrixWorld),K.copy(B).project(r),S.px=(K.x*.5+.5)*m.width,S.py=(-K.y*.5+.5)*m.height}})}function Ye(e){const{cameraThree:t,pickerScratch:o,syncScratch:r}=e;ve(t,o.frustum,r.forward,r.right,r.up);const{tanHalfV:a,maxDistSqKm:n}=Re(o);return Ue({starsInView:e.starsInView,chunks:e.chunks,prepared:{tanHalfV:a,maxDistSqKm:n},pickInChunk:(u,c,s)=>{const i=e.pointsMeshes[c],l=e.chunkDistancesKm[c],f=e.chunkOriginalSizes[c];return!i||!l||!f?null:Je(e.clientX,e.clientY,e.canvas,t,i,u.positions,f,l,u.starsInChunk.length,o.frustum,s.tanHalfV,o.cameraHelioKm,s.maxDistSqKm)}})}function Ze(e){return Ye(e)}var k={chunks:[],pointsMeshes:[],starsInView:[]};function St(){return k}function yt(e,t){const o=Q(e),r=o.layers.starfield,{starsInViewRef:a,getStarData:n,getStatus:u}=t,c=Be(e),s=[],i=[],l=[],f=[],x=[],m=Ne(),h=Ve();let d=0;const g=new ue,S=new ce,y=new he,P=Ie(),M=new W,F=new W,C=new W;function T(){for(const p of l)p.dispose();l.length=0;for(const p of s)p.dispose();s.length=0,i.length=0,f.length=0,x.length=0}function V(p){k.chunks=p,k.pointsMeshes=i,k.starsInView=a.current}return{refresh(){T();const p=ke(n,u,f);for(const v of p){x.push(new Float32Array(v.sizes));const z=c.createChunk({layer:"starfield",meshName:`cosmosive-starfield-points-${v.abbr.replace(/[^a-zA-Z0-9_-]/g,"_")}`,material:m,attributes:[{name:"position",data:v.positions,components:3},{name:"size",data:v.sizes,components:1},{name:"color",data:v.colors,components:3},{name:"warm",data:v.warm,components:1},{name:"brightness",data:v.brightness,components:1},{name:"mag",data:v.mag,components:1}]});s.push(z);const b=z.meshRef;i.push(b),l.push(Ke(b,r,h))}V(p)},advanceTime(p){d+=p,m.uniforms.uTime&&(m.uniforms.uTime.value=d),h.uniforms.uTime&&(h.uniforms.uTime.value=d)},countFrustum(){let p=0,v=0;const z=l.map(w=>w.mesh),b=[...i,...z];if(b.length>0){const w=o.cameraThree;w.updateMatrixWorld(!0),g.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),S.setFromProjectionMatrix(g);for(const I of b){const A=I.geometry;A.boundingSphere||A.computeBoundingSphere();const R=A.boundingSphere;if(!R)continue;y.copy(R).applyMatrix4(I.matrixWorld);const D=A.getAttribute("position");v+=D?.count??0,S.intersectsSphere(y)&&(p+=1)}}return{total:b.length,visible:p,verts:v}},pickFromClick({clientX:p,clientY:v,canvas:z}){return Ze({kind:"r3f",clientX:p,clientY:v,canvas:z,starsInView:a.current,chunks:k.chunks,chunkDistancesKm:f,chunkOriginalSizes:x,cameraThree:o.cameraThree,pointsMeshes:i,pickerScratch:P,syncScratch:{forward:M,right:F,up:C}})},dispose(){T(),m.dispose(),h.dispose(),k.chunks=[],k.pointsMeshes=[],k.starsInView=[]}}}function L(e,t=1,o=1){const[r,a,n]=xe(e),u=Math.max(.15,Math.min(1,t));return[r*u,a*u,n*u,o]}var _={star1:L("#fff3a8",1),star2:L("#f5c238",1),star3:L("#e07b1a",1),star4:L("#a8380c",1)};function H(e){return new N(e[0],e[1],e[2])}function et(){return{cool:H(_.star4),warm:H(_.star3),hot:H(_.star2),flare:H(_.star1)}}var tt=`
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
`,ot=`
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
`;function Pt(e){return e==null||Array.isArray(e)||!(e instanceof E)?!1:e.userData.cosmosiveSunPhotosphere===!0}function Mt(e,t){const o=et(),r={cool:e?.cool??o.cool,warm:e?.warm??o.warm,hot:e?.hot??o.hot,flare:e?.flare??o.flare},a={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:r.cool.clone()},uPaletteWarm:{value:r.warm.clone()},uPaletteHot:{value:r.hot.clone()},uPaletteFlare:{value:r.flare.clone()}},n=new E({uniforms:a,vertexShader:tt,fragmentShader:ot,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return n.userData.cosmosiveSunPhotosphere=!0,n}var rt=`
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
`,at=`
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
`;function q(e){return new N(e[0],e[1],e[2])}function nt(){return{warm:q(_.star3),hot:q(_.star2),flare:q(_.star1)}}function Ct(e){return e==null||Array.isArray(e)||!(e instanceof E)?!1:e.userData.cosmosiveSunCorona===!0}function wt(e){const t=nt(),o={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},r={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},a=new E({uniforms:r,vertexShader:rt,fragmentShader:at,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return a.userData.cosmosiveSunCorona=!0,a}export{ve as _,_ as a,Y as b,St as c,gt as d,xt as f,ft as g,mt as h,Pt as i,pt as l,ht as m,Ct as n,L as o,dt as p,Mt as r,yt as s,wt as t,vt as u,ut as v,ct as y};
