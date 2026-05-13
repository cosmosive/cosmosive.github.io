import{K as re,dt as U,kt as ne,tn as ae,tt as ie,zt as se}from"./sceneRuntimeTypes-BIGCaVoh.js";import{b as le,t as ue}from"./simActions-kkvSKJPG.js";import{t as Q}from"./r3fHostExtras-BRh30x1S.js";import{E as ce,Et as W,U as fe,V as me,c as X,h as V,l as pe,mt as he,nt as Y,pt as E}from"./three-vendor-BZf4UzLD.js";function de(e,t,o){return o&&t&&ae(e,t.position.x,t.position.y,t.position.z),e}function ft(e,t,o){if(o&&t){const r=e;r.x+=t.position.x,r.y+=t.position.y,r.z+=t.position.z}return e}var Z={current:null};function mt(e,t){return e.getWorldPosition(t),de(t,Z.current,!0),t}function ve(e,t,o,r,n){e.updateMatrixWorld(!0),e.getWorldPosition(o),t.position.x=o.x,t.position.y=o.y,t.position.z=o.z,e.getWorldDirection(o),r.setFromMatrixColumn(e.matrixWorld,0).normalize(),n.setFromMatrixColumn(e.matrixWorld,1).normalize(),t.forward.x=o.x,t.forward.y=o.y,t.forward.z=o.z,t.right.x=r.x,t.right.y=r.y,t.right.z=r.z,t.up.x=n.x,t.up.y=n.y,t.up.z=n.z,t.fovYRadians=me.degToRad(e.fov),t.aspect=e.aspect}function xe(e,t,o,r,n){ve(e,t,o,r,n);{const a=Z.current;a&&(t.position.x-=a.position.x,t.position.y-=a.position.y,t.position.z-=a.position.z)}}var j=new Map;function pt(e,t){j.set(e,t)}function ht(e){j.delete(e)}function dt(e,t,o){let r=null;for(const n of j.values()){const a=n(e,t,o);a!=null&&Number.isFinite(a)&&a>=0&&(r==null||a<r)&&(r=a)}return r}function vt(e){const t=e.replace(/^#/,""),o=parseInt(t,16);return Number.isFinite(o)?[Math.floor(o/65536)%256,Math.floor(o/256)%256,o%256]:[0,0,0]}function ge(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function xt(e){return Math.max(0,Math.min(255,Math.round(e)))}var Se=1,ye=-25,Pe=500,Me=.01;function G(e,t){let o=t;for(;e[o]!==o;)o=e[o];let r=t;for(;r!==o;){const n=e[r];e[r]=o,r=n}return o}function we(e,t,o){const r=G(e,t),n=G(e,o);r!==n&&(e[r]=n)}function $(e,t,o){return`${e},${t},${o}`}function gt(e,t){const o=e.length,r=Array.from({length:o},(i,l)=>l),n=t,a=new Map;for(let i=0;i<o;i+=1){const l=e[i],f=$(Math.floor(l.x/n),Math.floor(l.y/n),Math.floor(l.z/n));a.has(f)||a.set(f,[]),a.get(f).push(i)}const u=t*t;for(let i=0;i<o;i+=1){const l=e[i],f=Math.floor(l.x/n),x=Math.floor(l.y/n),m=Math.floor(l.z/n);for(let p=-1;p<=1;p+=1)for(let d=-1;d<=1;d+=1)for(let g=-1;g<=1;g+=1){const S=$(f+p,x+d,m+g),y=a.get(S);if(y)for(const P of y){if(P<=i)continue;const M=e[P],F=M.x-l.x,w=M.y-l.y,T=M.z-l.z;F*F+w*w+T*T<u&&we(r,i,P)}}}const c=new Map;for(let i=0;i<o;i+=1){const l=G(r,i);c.has(l)||c.set(l,[]),c.get(l).push(i)}const s=[];for(let i=0;i<o;i+=1)s.push(void 0);for(const i of c.values())i.length<=1||(i.sort((l,f)=>l-f),i.forEach((l,f)=>{f>0&&(s[l]={x:0,y:f*ye})}));return s}function Ce(){const e=[];for(let t=0;t<Pe;t+=1){const o=re(t*.7%360,t*.3%180-90);o!=null&&e.push(o)}return e}function Fe(){const e=Ce(),t=e.length,o=ne,r=new Float32Array(t*3);return e.forEach((n,a)=>{r[a*3]=n.x*o,r[a*3+1]=n.y*o,r[a*3+2]=n.z*o}),{abbr:"_bootstrap",positions:r,sizes:new Float32Array(t).fill(Se),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(Me),brightness:new Float32Array(t).fill(1),mag:new Float32Array(t).fill(-1/0),starsInChunk:[]}}var ze={raMin:0,raMax:360,decMin:-90,decMax:90},St={chunks:[],namedStarsInView:[]};function yt(e,t){return e===0&&t!=="success"}function ee(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[Fe()]:[]}function Pt(e,t){const o=ee(e,t),r=o.slice(0,3).map(n=>n.abbr).join(",");return o.length===0?{syntheticKind:"empty",chunkAbbrevSample:r}:o.length===1&&o[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:r}:o.some(n=>n.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:r}:{syntheticKind:"real",chunkAbbrevSample:r}}function J(e,t){return t.current===e.current}function Mt(e,t,o,r,n){e.onerror=a=>{J(t,o)||(r("error"),n(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{J(t,o)||(r("error"),n("Starfield worker message error"))}}function be(e,t,o,r,n,a,u){const{runId:c,...s}=e;c===t.current&&(o.current=c,r.current=s.starsInView,n({chunks:s.chunks,namedStarsInView:s.namedStarsInView}),a("ready"),u(null))}function wt(e,t,o,r,n){e.processStarfield({runId:t,catalog:o,maxDistanceLevel:r,bounds:ze,raInHours:!1}).then(a=>{be(a,n.runIdRef,n.lastSuccessfulRunIdRef,n.starsInViewRef,n.setStarData,n.setStarfieldStatus,n.setErrorMessage)}).catch(a=>{t===n.runIdRef.current&&(n.setStarfieldStatus("error"),n.setErrorMessage(a instanceof Error?a.message:"Starfield worker failed"))})}function ke(e,t){t.length=0;for(const o of e){const r=new Float32Array(o.starsInChunk.length);for(let n=0;n<o.starsInChunk.length;n+=1){const a=o.starsInChunk[n];r[n]=a?le(a)*U:0}t.push(r)}}function Te(e,t,o){const r=ee(e(),t());return ke(r,o),r}var Ae=500*U;function _e(e,t,o,r){const n=Math.sqrt(e*e+t*t+o*o);if(n<=0||!Number.isFinite(n)){r.x=0,r.y=0,r.z=0;return}const a=ie(n)*U/n;r.x=e*a,r.y=t*a,r.z=o*a}function Ie(e,t,o,r,n,a,u,c){const s=Math.sqrt(e*e+t*t+o*o);if(s<=0||!Number.isFinite(s)||!Number.isFinite(r)){const m=-n,p=-a,d=-u;return m*m+p*p+d*d<=c}const i=r/s,l=e*i-n,f=t*i-a,x=o*i-u;return l*l+f*f+x*x<=c}function Re(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},viewpointHelioKm:{x:0,y:0,z:0}}}function We(e){const t=Math.tan(e.frustum.fovYRadians*.5);return _e(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.viewpointHelioKm),{tanHalfV:t,maxDistSqKm:Ae**2}}var Ee=256,De=320,Le=`
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
`,Ne=`
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
`,Ve=`
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
`;function te(e){return new E({uniforms:{uPointSizeMax:{value:e?.pointSizeMax??Ee},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uPointSizeFloor:{value:e?.pointSizeFloor??1},uMagLimit:{value:6.5},uMagFadeRange:{value:1},uMagRef:{value:0},uFluxClampMax:{value:4},uFluxGamma:{value:.45},uPsfMaxMult:{value:3.5},uPaletteHot:{value:new V(1,.78,.56)},uPaletteFlare:{value:new V(1,.92,.75)}},vertexShader:Le,fragmentShader:e?.useHaloShader?Ve:Ne,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function He(){return te({twinkleAmp:.03,twinkleFreq:.9,pointSizeFloor:1})}function Oe(){return te({useHaloShader:!0,sizeMultiplier:1.6,pointSizeMax:De,pointSizeFloor:1,twinkleAmp:.02,twinkleFreq:.55})}function Be(e){const{layers:t}=Q(e);return{createChunk(o){const r=t[o.layer],n=new pe;for(const s of o.attributes)n.setAttribute(s.name,new X(s.data,s.components));n.computeBoundingSphere();const a=o.material,u=new Y(n,a);u.frustumCulled=!0,u.raycast=()=>{},r.add(u);const c=new Map(o.attributes.map(s=>[s.name,s.components]));return{meshRef:u,updateAttribute(s,i){const l=c.get(s);l!=null&&n.setAttribute(s,new X(i,l))},setVertexCount(s){n.computeBoundingSphere()},dispose(){r.remove(u),n.dispose()}}}}}function Ke(e){return Be(e)}function qe(e,t,o){const r=new Y(e.geometry,o);return r.frustumCulled=!0,r.renderOrder=1,r.raycast=()=>{},t.add(r),{mesh:r,dispose(){t.remove(r)}}}function oe(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function Ge(e,t){let o=0,r=-1,n=null;for(let a=0;a<e.length;a+=1){const u=e[a],c=u.starsInChunk.length,s=t(u,a);s&&oe(s,n)&&(n=s,r=o+s.index),o+=c}return r}function Ue(e,t){if(t<0||t>=e.length)return!1;const o=e[t],r=o.proper??(o.hip!=null?`HIP ${o.hip}`:`Star ${o.id}`);return ue.select(se("hyg",o.id),r,"star"),!0}function je(e){if(e.starsInView.length===0)return!1;const t=e.prepared;if(t==null)return!1;const o=Ge(e.chunks,(r,n)=>e.pickInChunk(r,n,t));return Ue(e.starsInView,o)}function Xe(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function $e(){return 1}function Je(){return 8}var O={px:0,py:0};function Qe(e){const{positions:t,sizes:o,distancesKm:r,starCount:n,camFrustum:a,tanHalfV:u,viewpointHelioKm:c,maxDistSqKm:s,mouseX:i,mouseY:l,projectStarToScreenPx:f}=e,x=Math.min(n,t.length/3,o.length,r.length);let m=null;for(let p=0;p<x;p+=1){const d=p*3,g=t[d],S=t[d+1],y=t[d+2];if(!Ie(g,S,y,r[p]??0,c.x,c.y,c.z,s))continue;const P=g-a.position.x,M=S-a.position.y,F=y-a.position.z,w=P*a.forward.x+M*a.forward.y+F*a.forward.z;if(w<=1e-6)continue;const T=P*a.right.x+M*a.right.y+F*a.right.z,H=P*a.up.x+M*a.up.y+F*a.up.z,h=u*a.aspect*w;if(Math.abs(T)>h)continue;const v=u*w;if(Math.abs(H)>v)continue;const z=w,b=$e(),C=Je();if(C<=0)continue;f(g,S,y,O);const I=O.px-i,A=O.py-l,R=I*I+A*A;if(R>C*C)continue;const D={index:p,distSqPx:R,depthCam:z,renderedPx:b};oe(D,m)&&(m=D)}return m}var B=new W,K=new W;function Ye(e,t,o,r,n,a,u,c,s,i,l,f,x){const m=o.getBoundingClientRect();return Qe({positions:a,sizes:u,distancesKm:c,starCount:s,uScale:Xe(m.height,r.fov*Math.PI/180),camFrustum:i,tanHalfV:l,viewpointHelioKm:f,maxDistSqKm:x,mouseX:e-m.left,mouseY:t-m.top,projectStarToScreenPx:(p,d,g,S)=>{B.set(p,d,g),B.applyMatrix4(n.matrixWorld),K.copy(B).project(r),S.px=(K.x*.5+.5)*m.width,S.py=(-K.y*.5+.5)*m.height}})}function Ze(e){const{cameraThree:t,pickerScratch:o,syncScratch:r}=e;xe(t,o.frustum,r.forward,r.right,r.up);const{tanHalfV:n,maxDistSqKm:a}=We(o);return je({starsInView:e.starsInView,chunks:e.chunks,prepared:{tanHalfV:n,maxDistSqKm:a},pickInChunk:(u,c,s)=>{const i=e.pointsMeshes[c],l=e.chunkDistancesKm[c],f=e.chunkOriginalSizes[c];return!i||!l||!f?null:Ye(e.clientX,e.clientY,e.canvas,t,i,u.positions,f,l,u.starsInChunk.length,o.frustum,s.tanHalfV,o.viewpointHelioKm,s.maxDistSqKm)}})}function et(e){return Ze(e)}var k={chunks:[],pointsMeshes:[],starsInView:[]};function Ct(){return k}function Ft(e,t){const o=Q(e),r=o.layers.starfield,{starsInViewRef:n,getStarData:a,getStatus:u}=t,c=Ke(e),s=[],i=[],l=[],f=[],x=[],m=He(),p=Oe();let d=0;const g=new fe,S=new ce,y=new he,P=Re(),M=new W,F=new W,w=new W;function T(){for(const h of l)h.dispose();l.length=0;for(const h of s)h.dispose();s.length=0,i.length=0,f.length=0,x.length=0}function H(h){k.chunks=h,k.pointsMeshes=i,k.starsInView=n.current}return{refresh(){T();const h=Te(a,u,f);for(const v of h){x.push(new Float32Array(v.sizes));const z=c.createChunk({layer:"starfield",meshName:`cosmosive-starfield-points-${v.abbr.replace(/[^a-zA-Z0-9_-]/g,"_")}`,material:m,attributes:[{name:"position",data:v.positions,components:3},{name:"size",data:v.sizes,components:1},{name:"color",data:v.colors,components:3},{name:"warm",data:v.warm,components:1},{name:"brightness",data:v.brightness,components:1},{name:"mag",data:v.mag,components:1}]});s.push(z);const b=z.meshRef;i.push(b),l.push(qe(b,r,p))}H(h)},advanceTime(h){d+=h,m.uniforms.uTime&&(m.uniforms.uTime.value=d),p.uniforms.uTime&&(p.uniforms.uTime.value=d)},countFrustum(){let h=0,v=0;const z=l.map(C=>C.mesh),b=[...i,...z];if(b.length>0){const C=o.cameraThree;C.updateMatrixWorld(!0),g.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),S.setFromProjectionMatrix(g);for(const I of b){const A=I.geometry;A.boundingSphere||A.computeBoundingSphere();const R=A.boundingSphere;if(!R)continue;y.copy(R).applyMatrix4(I.matrixWorld);const D=A.getAttribute("position");v+=D?.count??0,S.intersectsSphere(y)&&(h+=1)}}return{total:b.length,visible:h,verts:v}},pickFromClick({clientX:h,clientY:v,canvas:z}){return et({kind:"r3f",clientX:h,clientY:v,canvas:z,starsInView:n.current,chunks:k.chunks,chunkDistancesKm:f,chunkOriginalSizes:x,cameraThree:o.cameraThree,pointsMeshes:i,pickerScratch:P,syncScratch:{forward:M,right:F,up:w}})},dispose(){T(),m.dispose(),p.dispose(),k.chunks=[],k.pointsMeshes=[],k.starsInView=[]}}}function L(e,t=1,o=1){const[r,n,a]=ge(e),u=Math.max(.15,Math.min(1,t));return[r*u,n*u,a*u,o]}var _={star1:L("#fff3a8",1),star2:L("#f5c238",1),star3:L("#e07b1a",1),star4:L("#a8380c",1)};function N(e){return new V(e[0],e[1],e[2])}function tt(){return{cool:N(_.star4),warm:N(_.star3),hot:N(_.star2),flare:N(_.star1)}}var ot=`
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
`,rt=`
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
`;function zt(e){return e==null||Array.isArray(e)||!(e instanceof E)?!1:e.userData.cosmosiveSunPhotosphere===!0}function bt(e,t){const o=tt(),r={cool:e?.cool??o.cool,warm:e?.warm??o.warm,hot:e?.hot??o.hot,flare:e?.flare??o.flare},n={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:r.cool.clone()},uPaletteWarm:{value:r.warm.clone()},uPaletteHot:{value:r.hot.clone()},uPaletteFlare:{value:r.flare.clone()}},a=new E({uniforms:n,vertexShader:ot,fragmentShader:rt,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var nt=`
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
`;function q(e){return new V(e[0],e[1],e[2])}function it(){return{warm:q(_.star3),hot:q(_.star2),flare:q(_.star1)}}function kt(e){return e==null||Array.isArray(e)||!(e instanceof E)?!1:e.userData.cosmosiveSunCorona===!0}function Tt(e){const t=it(),o={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},r={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},n=new E({uniforms:r,vertexShader:nt,fragmentShader:at,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return n.userData.cosmosiveSunCorona=!0,n}export{Z as C,mt as S,ge as _,_ as a,ht as b,Ct as c,wt as d,Mt as f,vt as g,xt as h,zt as i,St as l,gt as m,kt as n,L as o,yt as p,bt as r,Ft as s,Tt as t,Pt as u,dt as v,ft as w,xe as x,pt as y};
