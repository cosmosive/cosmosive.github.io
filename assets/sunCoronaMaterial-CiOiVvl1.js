import{Ht as ae,Mt as ie,Q as se,mt as j,ot as le,rn as ue}from"./simStateMigration-DSBaSZmK.js";import{r as ce,t as fe}from"./starScenePosition-CHMq6nI5.js";import{B as me,E as he,H as pe,c as de,dt as D,et as Z,ft as ve,m as H,s as $,wt as E}from"./three-vendor-BPq9nlj2.js";import{t as ee}from"./r3fHostExtras-imMgbS2z.js";var X=new Map;function dt(e,t){X.set(e,t)}function vt(e){X.delete(e)}function gt(e,t,o){let r=null;for(const n of X.values()){const a=n(e,t,o);a!=null&&Number.isFinite(a)&&a>=0&&(r==null||a<r)&&(r=a)}return r}var te={current:null};function ge(e,t,o){return o&&t&&ue(e,t.position.x,t.position.y,t.position.z),e}function xt(e,t,o){if(o&&t){const r=e;r.x+=t.position.x,r.y+=t.position.y,r.z+=t.position.z}return e}function St(e,t){return e.getWorldPosition(t),ge(t,te.current,!0),t}function yt(e){const t=e.replace(/^#/,""),o=parseInt(t,16);return Number.isFinite(o)?[Math.floor(o/65536)%256,Math.floor(o/256)%256,o%256]:[0,0,0]}function xe(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function Pt(e){return Math.max(0,Math.min(255,Math.round(e)))}function Se(e,t,o,r,n){e.updateMatrixWorld(!0),e.getWorldPosition(o),t.position.x=o.x,t.position.y=o.y,t.position.z=o.z,e.getWorldDirection(o),r.setFromMatrixColumn(e.matrixWorld,0).normalize(),n.setFromMatrixColumn(e.matrixWorld,1).normalize(),t.forward.x=o.x,t.forward.y=o.y,t.forward.z=o.z,t.right.x=r.x,t.right.y=r.y,t.right.z=r.z,t.up.x=n.x,t.up.y=n.y,t.up.z=n.z,t.fovYRadians=me.degToRad(e.fov),t.aspect=e.aspect}function ye(e,t,o,r,n){Se(e,t,o,r,n);{const a=te.current;a&&(t.position.x-=a.position.x,t.position.y-=a.position.y,t.position.z-=a.position.z)}}var Pe=1,we=-25,Me=500,Ce=.01;function U(e,t){let o=t;for(;e[o]!==o;)o=e[o];let r=t;for(;r!==o;){const n=e[r];e[r]=o,r=n}return o}function ke(e,t,o){const r=U(e,t),n=U(e,o);r!==n&&(e[r]=n)}function Q(e,t,o){return`${e},${t},${o}`}function wt(e,t){const o=e.length,r=Array.from({length:o},(i,s)=>s),n=t,a=new Map;for(let i=0;i<o;i+=1){const s=e[i],f=Q(Math.floor(s.x/n),Math.floor(s.y/n),Math.floor(s.z/n));a.has(f)||a.set(f,[]),a.get(f).push(i)}const u=t*t;for(let i=0;i<o;i+=1){const s=e[i],f=Math.floor(s.x/n),g=Math.floor(s.y/n),m=Math.floor(s.z/n);for(let h=-1;h<=1;h+=1)for(let d=-1;d<=1;d+=1)for(let x=-1;x<=1;x+=1){const S=Q(f+h,g+d,m+x),y=a.get(S);if(y)for(const P of y){if(P<=i)continue;const w=e[P],k=w.x-s.x,M=w.y-s.y,T=w.z-s.z;k*k+M*M+T*T<u&&ke(r,i,P)}}}const c=new Map;for(let i=0;i<o;i+=1){const s=U(r,i);c.has(s)||c.set(s,[]),c.get(s).push(i)}const l=[];for(let i=0;i<o;i+=1)l.push(void 0);for(const i of c.values())i.length<=1||(i.sort((s,f)=>s-f),i.forEach((s,f)=>{f>0&&(l[s]={x:0,y:f*we})}));return l}function Fe(){const e=[];for(let t=0;t<Me;t+=1){const o=se(t*.7%360,t*.3%180-90);o!=null&&e.push(o)}return e}function ze(){const e=Fe(),t=e.length,o=ie,r=new Float32Array(t*3);return e.forEach((n,a)=>{r[a*3]=n.x*o,r[a*3+1]=n.y*o,r[a*3+2]=n.z*o}),{abbr:"_bootstrap",positions:r,sizes:new Float32Array(t).fill(Pe),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(Ce),brightness:new Float32Array(t).fill(1),mag:new Float32Array(t).fill(-1/0),starsInChunk:[]}}var be={raMin:0,raMax:360,decMin:-90,decMax:90},Mt={chunks:[],namedStarsInView:[]};function Ct(e,t){return e===0&&t!=="success"}function oe(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[ze()]:[]}function kt(e,t){const o=oe(e,t),r=o.slice(0,3).map(n=>n.abbr).join(",");return o.length===0?{syntheticKind:"empty",chunkAbbrevSample:r}:o.length===1&&o[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:r}:o.some(n=>n.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:r}:{syntheticKind:"real",chunkAbbrevSample:r}}function J(e,t){return t.current===e.current}function Ft(e,t,o,r,n){e.onerror=a=>{J(t,o)||(r("error"),n(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{J(t,o)||(r("error"),n("Starfield worker message error"))}}function Y(e){const t=e.indexOf("__part");return t===-1?e:e.slice(0,t)}function _(e,t){const o=new Float32Array(e.length+t.length);return o.set(e,0),o.set(t,e.length),o}function Te(e,t){return{abbr:e.abbr,positions:_(e.positions,t.positions),sizes:_(e.sizes,t.sizes),colors:_(e.colors,t.colors),warm:_(e.warm,t.warm),brightness:_(e.brightness,t.brightness),mag:_(e.mag,t.mag),starsInChunk:[...e.starsInChunk,...t.starsInChunk]}}function Ie(e,t){const o=new Map;e.chunks.forEach((n,a)=>o.set(Y(n.abbr),a));const r=[...e.chunks];for(const n of t.chunks){const a=Y(n.abbr),u=o.get(a);if(u!=null){const c=r[u];c&&(r[u]=Te(c,n))}else o.set(a,r.length),r.push(n)}return{chunks:r,namedStarsInView:[...e.namedStarsInView,...t.namedStarsInView]}}function Ae(e,t,o,r,n,a,u,c="replace"){const{runId:l,...i}=e;l===t.current&&(o.current=l,c==="append"?(r.current=[...r.current,...i.starsInView],n(s=>Ie(s,{chunks:i.chunks,namedStarsInView:i.namedStarsInView}))):(r.current=i.starsInView,n({chunks:i.chunks,namedStarsInView:i.namedStarsInView})),a("ready"),u(null))}function zt(e,t,o,r,n,a={}){const u=a.mode??"replace";e.processStarfield({runId:t,catalog:o,maxDistanceLevel:r,bounds:be,raInHours:!1,maxPerChunk:a.maxPerChunk}).then(c=>{Ae(c,n.runIdRef,n.lastSuccessfulRunIdRef,n.starsInViewRef,n.setStarData,n.setStarfieldStatus,n.setErrorMessage,u),a.onComplete?.()}).catch(c=>{t===n.runIdRef.current&&(n.setStarfieldStatus("error"),n.setErrorMessage(c instanceof Error?c.message:"Starfield worker failed"))})}function _e(e,t){t.length=0;for(const o of e){const r=new Float32Array(o.starsInChunk.length);for(let n=0;n<o.starsInChunk.length;n+=1){const a=o.starsInChunk[n];r[n]=a?fe(a)*j:0}t.push(r)}}function Re(e,t,o){const r=oe(e(),t());return _e(r,o),r}var We=500*j;function Ee(e,t,o,r){const n=Math.sqrt(e*e+t*t+o*o);if(n<=0||!Number.isFinite(n)){r.x=0,r.y=0,r.z=0;return}const a=le(n)*j/n;r.x=e*a,r.y=t*a,r.z=o*a}function De(e,t,o,r,n,a,u,c){const l=Math.sqrt(e*e+t*t+o*o);if(l<=0||!Number.isFinite(l)||!Number.isFinite(r)){const m=-n,h=-a,d=-u;return m*m+h*h+d*d<=c}const i=r/l,s=e*i-n,f=t*i-a,g=o*i-u;return s*s+f*f+g*g<=c}function Ve(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},viewpointHelioKm:{x:0,y:0,z:0}}}function Le(e){const t=Math.tan(e.frustum.fovYRadians*.5);return Ee(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.viewpointHelioKm),{tanHalfV:t,maxDistSqKm:We**2}}var Ne=256,He=320,Oe=`
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
`,Be=`
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
`,qe=`
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
`;function re(e){return new D({uniforms:{uPointSizeMax:{value:e?.pointSizeMax??Ne},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uPointSizeFloor:{value:e?.pointSizeFloor??1},uMagLimit:{value:6.5},uMagFadeRange:{value:1},uMagRef:{value:0},uFluxClampMax:{value:4},uFluxGamma:{value:.45},uPsfMaxMult:{value:3.5},uPaletteHot:{value:new H(1,.78,.56)},uPaletteFlare:{value:new H(1,.92,.75)}},vertexShader:Oe,fragmentShader:e?.useHaloShader?qe:Be,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function Ke(){return re({twinkleAmp:.03,twinkleFreq:.9,pointSizeFloor:1})}function Ge(){return re({useHaloShader:!0,sizeMultiplier:1.6,pointSizeMax:He,pointSizeFloor:1,twinkleAmp:.02,twinkleFreq:.55})}function Ue(e){const{layers:t}=ee(e);return{createChunk(o){const r=t[o.layer],n=new de;for(const l of o.attributes)n.setAttribute(l.name,new $(l.data,l.components));n.computeBoundingSphere();const a=o.material,u=new Z(n,a);u.frustumCulled=!0,u.raycast=()=>{},r.add(u);const c=new Map(o.attributes.map(l=>[l.name,l.components]));return{meshRef:u,updateAttribute(l,i){const s=c.get(l);s!=null&&n.setAttribute(l,new $(i,s))},setVertexCount(l){n.computeBoundingSphere()},dispose(){r.remove(u),n.dispose()}}}}}function je(e){return Ue(e)}function Xe(e,t,o){const r=new Z(e.geometry,o);return r.frustumCulled=!0,r.renderOrder=1,r.raycast=()=>{},t.add(r),{mesh:r,dispose(){t.remove(r)}}}function ne(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function $e(e,t){let o=0,r=-1,n=null;for(let a=0;a<e.length;a+=1){const u=e[a],c=u.starsInChunk.length,l=t(u,a);l&&ne(l,n)&&(n=l,r=o+l.index),o+=c}return r}function Qe(e,t){if(t<0||t>=e.length)return!1;const o=e[t],r=o.proper??(o.hip!=null?`HIP ${o.hip}`:`Star ${o.id}`);return ce.select(ae("hyg",o.id),r,"star"),!0}function Je(e){if(e.starsInView.length===0)return!1;const t=e.prepared;if(t==null)return!1;const o=$e(e.chunks,(r,n)=>e.pickInChunk(r,n,t));return Qe(e.starsInView,o)}function Ye(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function Ze(){return 1}function et(){return 8}var B={px:0,py:0};function tt(e){const{positions:t,sizes:o,distancesKm:r,starCount:n,camFrustum:a,tanHalfV:u,viewpointHelioKm:c,maxDistSqKm:l,mouseX:i,mouseY:s,projectStarToScreenPx:f}=e,g=Math.min(n,t.length/3,o.length,r.length);let m=null;for(let h=0;h<g;h+=1){const d=h*3,x=t[d],S=t[d+1],y=t[d+2];if(!De(x,S,y,r[h]??0,c.x,c.y,c.z,l))continue;const P=x-a.position.x,w=S-a.position.y,k=y-a.position.z,M=P*a.forward.x+w*a.forward.y+k*a.forward.z;if(M<=1e-6)continue;const T=P*a.right.x+w*a.right.y+k*a.right.z,O=P*a.up.x+w*a.up.y+k*a.up.z,p=u*a.aspect*M;if(Math.abs(T)>p)continue;const v=u*M;if(Math.abs(O)>v)continue;const F=M,z=Ze(),C=et();if(C<=0)continue;f(x,S,y,B);const R=B.px-i,I=B.py-s,W=R*R+I*I;if(W>C*C)continue;const V={index:h,distSqPx:W,depthCam:F,renderedPx:z};ne(V,m)&&(m=V)}return m}var q=new E,K=new E;function ot(e,t,o,r,n,a,u,c,l,i,s,f,g){const m=o.getBoundingClientRect();return tt({positions:a,sizes:u,distancesKm:c,starCount:l,uScale:Ye(m.height,r.fov*Math.PI/180),camFrustum:i,tanHalfV:s,viewpointHelioKm:f,maxDistSqKm:g,mouseX:e-m.left,mouseY:t-m.top,projectStarToScreenPx:(h,d,x,S)=>{q.set(h,d,x),q.applyMatrix4(n.matrixWorld),K.copy(q).project(r),S.px=(K.x*.5+.5)*m.width,S.py=(-K.y*.5+.5)*m.height}})}function rt(e){const{cameraThree:t,pickerScratch:o,syncScratch:r}=e;ye(t,o.frustum,r.forward,r.right,r.up);const{tanHalfV:n,maxDistSqKm:a}=Le(o);return Je({starsInView:e.starsInView,chunks:e.chunks,prepared:{tanHalfV:n,maxDistSqKm:a},pickInChunk:(u,c,l)=>{const i=e.pointsMeshes[c],s=e.chunkDistancesKm[c],f=e.chunkOriginalSizes[c];return!i||!s||!f?null:ot(e.clientX,e.clientY,e.canvas,t,i,u.positions,f,s,u.starsInChunk.length,o.frustum,l.tanHalfV,o.viewpointHelioKm,l.maxDistSqKm)}})}function nt(e){return rt(e)}var b={chunks:[],pointsMeshes:[],starsInView:[]};function bt(){return b}function Tt(e,t){const o=ee(e),r=o.layers.starfield,{starsInViewRef:n,getStarData:a,getStatus:u}=t,c=je(e),l=[],i=[],s=[],f=[],g=[],m=Ke(),h=Ge();let d=0;const x=new pe,S=new he,y=new ve,P=Ve(),w=new E,k=new E,M=new E;function T(){for(const p of s)p.dispose();s.length=0;for(const p of l)p.dispose();l.length=0,i.length=0,f.length=0,g.length=0}function O(p){b.chunks=p,b.pointsMeshes=i,b.starsInView=n.current}return{refresh(){T();const p=Re(a,u,f);for(const v of p){g.push(new Float32Array(v.sizes));const F=c.createChunk({layer:"starfield",meshName:`cosmosive-starfield-points-${v.abbr.replace(/[^a-zA-Z0-9_-]/g,"_")}`,material:m,attributes:[{name:"position",data:v.positions,components:3},{name:"size",data:v.sizes,components:1},{name:"color",data:v.colors,components:3},{name:"warm",data:v.warm,components:1},{name:"brightness",data:v.brightness,components:1},{name:"mag",data:v.mag,components:1}]});l.push(F);const z=F.meshRef;i.push(z),s.push(Xe(z,r,h))}O(p)},advanceTime(p){d+=p,m.uniforms.uTime&&(m.uniforms.uTime.value=d),h.uniforms.uTime&&(h.uniforms.uTime.value=d)},countFrustum(){let p=0,v=0;const F=s.map(C=>C.mesh),z=[...i,...F];if(z.length>0){const C=o.cameraThree;C.updateMatrixWorld(!0),x.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),S.setFromProjectionMatrix(x);for(const R of z){const I=R.geometry;I.boundingSphere||I.computeBoundingSphere();const W=I.boundingSphere;if(!W)continue;y.copy(W).applyMatrix4(R.matrixWorld);const V=I.getAttribute("position");v+=V?.count??0,S.intersectsSphere(y)&&(p+=1)}}return{total:z.length,visible:p,verts:v}},pickFromClick({clientX:p,clientY:v,canvas:F}){return nt({kind:"r3f",clientX:p,clientY:v,canvas:F,starsInView:n.current,chunks:b.chunks,chunkDistancesKm:f,chunkOriginalSizes:g,cameraThree:o.cameraThree,pointsMeshes:i,pickerScratch:P,syncScratch:{forward:w,right:k,up:M}})},dispose(){T(),m.dispose(),h.dispose(),b.chunks=[],b.pointsMeshes=[],b.starsInView=[]}}}function L(e,t=1,o=1){const[r,n,a]=xe(e),u=Math.max(.15,Math.min(1,t));return[r*u,n*u,a*u,o]}var A={star1:L("#fff3a8",1),star2:L("#f5c238",1),star3:L("#e07b1a",1),star4:L("#a8380c",1)};function N(e){return new H(e[0],e[1],e[2])}function at(){return{cool:N(A.star4),warm:N(A.star3),hot:N(A.star2),flare:N(A.star1)}}var it=`
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
`,st=`
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
`;function It(e){return e==null||Array.isArray(e)||!(e instanceof D)?!1:e.userData.cosmosiveSunPhotosphere===!0}function At(e,t){const o=at(),r={cool:e?.cool??o.cool,warm:e?.warm??o.warm,hot:e?.hot??o.hot,flare:e?.flare??o.flare},n={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:r.cool.clone()},uPaletteWarm:{value:r.warm.clone()},uPaletteHot:{value:r.hot.clone()},uPaletteFlare:{value:r.flare.clone()}},a=new D({uniforms:n,vertexShader:it,fragmentShader:st,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var lt=`
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
`,ut=`
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
`;function G(e){return new H(e[0],e[1],e[2])}function ct(){return{warm:G(A.star3),hot:G(A.star2),flare:G(A.star1)}}function _t(e){return e==null||Array.isArray(e)||!(e instanceof D)?!1:e.userData.cosmosiveSunCorona===!0}function Rt(e){const t=ct(),o={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},r={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},n=new D({uniforms:r,vertexShader:lt,fragmentShader:ut,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return n.userData.cosmosiveSunCorona=!0,n}export{dt as C,gt as S,yt as _,A as a,xt as b,bt as c,zt as d,Ft as f,Pt as g,ye as h,It as i,Mt as l,wt as m,_t as n,L as o,Ct as p,At as r,Tt as s,Rt as t,kt as u,xe as v,vt as w,te as x,St as y};
