import{Ht as z,Rt as Se,wt as ye}from"./babylon-postprocess-vendor-CPXB9tym.js";import{B as Pe,C as be,Q as ie,R as we,bt as E,lt as W,o as ne,p as j,s as Me,ut as Ce,yt as ke}from"./three-vendor-BZgPQKFQ.js";import{Co as se,Kn as le,Nn as ze,Oo as Fe,Vo as Te,bo as Ie,hn as ue,qo as Re,xo as _e,yn as Ae}from"./index-CAZ5MsQF.js";import{u as Ee}from"./babylon-vendor-Cyt56fsS.js";var J=new WeakMap;function Dt(e,t){J.set(e,t)}function Lt(e){J.delete(e)}function We(e){if(e.engineKind!=="babylon")throw new Error("asBabylon: SceneHost is not a Babylon implementation");const t=J.get(e);if(!t)throw new Error("asBabylon: missing Babylon extras (host not fully initialized?)");return t}function De(e,t,n,o,r){e.updateMatrixWorld(!0),e.getWorldPosition(n),t.position.x=n.x,t.position.y=n.y,t.position.z=n.z,e.getWorldDirection(n),o.setFromMatrixColumn(e.matrixWorld,0).normalize(),r.setFromMatrixColumn(e.matrixWorld,1).normalize(),t.forward.x=n.x,t.forward.y=n.y,t.forward.z=n.z,t.right.x=o.x,t.right.y=o.y,t.right.z=o.z,t.up.x=r.x,t.up.y=r.y,t.up.z=r.z,t.fovYRadians=we.degToRad(e.fov),t.aspect=e.aspect}function Le(e,t,n,o,r){De(e,t,n,o,r);{const a=ze.current;a&&(t.position.x-=a.position.x,t.position.y-=a.position.y,t.position.z-=a.position.z)}}var Be=new z(0,0,-1),He=new z(1,0,0),Ne=new z(0,1,0),B=new z,H=new z,N=new z,V=new z;function Ve(e,t,n){e.computeWorldMatrix(),e.getWorldMatrix().getTranslationToRef(B),n.position.x=B.x,n.position.y=B.y,n.position.z=B.z;{const[r,a,i]=t.getFloatingOrigin();n.position.x+=r,n.position.y+=a,n.position.z+=i}e.getDirectionToRef(Be,H),e.getDirectionToRef(He,N),e.getDirectionToRef(Ne,V),n.forward.x=H.x,n.forward.y=H.y,n.forward.z=H.z,n.right.x=N.x,n.right.y=N.y,n.right.z=N.z,n.up.x=V.x,n.up.y=V.y,n.up.z=V.z,n.fovYRadians=e.fov;const o=e.getEngine();n.aspect=o.getRenderWidth()/Math.max(1,o.getRenderHeight())}function Bt(e){const t=e.replace(/^#/,""),n=parseInt(t,16);return Number.isFinite(n)?[Math.floor(n/65536)%256,Math.floor(n/256)%256,n%256]:[0,0,0]}function Oe(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function Ht(e){return Math.max(0,Math.min(255,Math.round(e)))}function O(e,t=1,n=1){const[o,r,a]=Oe(e),i=Math.max(.15,Math.min(1,t));return[o*i,r*i,a*i,n]}var _={star1:O("#fff3a8",1),star2:O("#f5c238",1),star3:O("#e07b1a",1),star4:O("#a8380c",1)},Z=4,Nt=64*Z,qe=-25,Ue=500,je=.01;function ce(e){return Math.max(0,Math.min(1,e))}function Ke(e){return e?.size!=null&&Number.isFinite(e.size)?ce(e.size):.5}function Ge(e){return .08+.76*ce((e-.99)/.01)**3}function Vt(e){return(e?_e(e,le(e)):se)*Ge(Ke(e))*Z}function Q(e,t){let n=t;for(;e[n]!==n;)n=e[n];let o=t;for(;o!==n;){const r=e[o];e[o]=n,o=r}return n}function Xe(e,t,n){const o=Q(e,t),r=Q(e,n);o!==r&&(e[o]=r)}function oe(e,t,n){return`${e},${t},${n}`}function Ot(e,t){const n=e.length,o=Array.from({length:n},(s,u)=>u),r=t,a=new Map;for(let s=0;s<n;s+=1){const u=e[s],f=oe(Math.floor(u.x/r),Math.floor(u.y/r),Math.floor(u.z/r));a.has(f)||a.set(f,[]),a.get(f).push(s)}const i=t*t;for(let s=0;s<n;s+=1){const u=e[s],f=Math.floor(u.x/r),p=Math.floor(u.y/r),h=Math.floor(u.z/r);for(let d=-1;d<=1;d+=1)for(let m=-1;m<=1;m+=1)for(let g=-1;g<=1;g+=1){const S=oe(f+d,p+m,h+g),P=a.get(S);if(P)for(const b of P){if(b<=s)continue;const w=e[b],C=w.x-u.x,M=w.y-u.y,y=w.z-u.z;C*C+M*M+y*y<i&&Xe(o,s,b)}}}const c=new Map;for(let s=0;s<n;s+=1){const u=Q(o,s);c.has(u)||c.set(u,[]),c.get(u).push(s)}const l=[];for(let s=0;s<n;s+=1)l.push(void 0);for(const s of c.values())s.length<=1||(s.sort((u,f)=>u-f),s.forEach((u,f)=>{f>0&&(l[u]={x:0,y:f*qe})}));return l}function $e(){const e=[];for(let t=0;t<Ue;t+=1){const n=Ie(t*.7%360,t*.3%180-90);n!=null&&e.push(n)}return e}function Ye(){const e=$e(),t=e.length,n=Te,o=new Float32Array(t*3);return e.forEach((r,a)=>{o[a*3]=r.x*n,o[a*3+1]=r.y*n,o[a*3+2]=r.z*n}),{abbr:"_bootstrap",positions:o,sizes:new Float32Array(t).fill(se*Z),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(je),brightness:new Float32Array(t).fill(1),mag:new Float32Array(t).fill(-1/0),starsInChunk:[]}}var Qe={raMin:0,raMax:360,decMin:-90,decMax:90},qt={chunks:[],namedStarsInView:[]};function Ut(e,t){return e===0&&t!=="success"}function fe(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[Ye()]:[]}function jt(e,t){const n=fe(e,t),o=n.slice(0,3).map(r=>r.abbr).join(",");return n.length===0?{syntheticKind:"empty",chunkAbbrevSample:o}:n.length===1&&n[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:o}:n.some(r=>r.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:o}:{syntheticKind:"real",chunkAbbrevSample:o}}function re(e,t){return t.current===e.current}function Kt(e,t,n,o,r){e.onerror=a=>{re(t,n)||(o("error"),r(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{re(t,n)||(o("error"),r("Starfield worker message error"))}}function Je(e,t,n,o,r,a,i){const{runId:c,...l}=e;c===t.current&&(n.current=c,o.current=l.starsInView,r({chunks:l.chunks,namedStarsInView:l.namedStarsInView}),a("ready"),i(null))}function Gt(e,t,n,o,r){e.processStarfield({runId:t,catalog:n,maxDistanceLevel:o,bounds:Qe,raInHours:!1}).then(a=>{Je(a,r.runIdRef,r.lastSuccessfulRunIdRef,r.starsInViewRef,r.setStarData,r.setStarfieldStatus,r.setErrorMessage)}).catch(a=>{t===r.runIdRef.current&&(r.setStarfieldStatus("error"),r.setErrorMessage(a instanceof Error?a.message:"Starfield worker failed"))})}function Ze(e,t){t.length=0;for(const n of e){const o=new Float32Array(n.starsInChunk.length);for(let r=0;r<n.starsInChunk.length;r+=1){const a=n.starsInChunk[r];o[r]=a?le(a):0}t.push(o)}}function et(e,t,n){const o=fe(e(),t());return Ze(o,n),o}function tt(e,t,n,o){const r=Math.sqrt(e*e+t*t+n*n);if(r<=0||!Number.isFinite(r)){o.x=0,o.y=0,o.z=0;return}const a=Fe(r)/r;o.x=e*a,o.y=t*a,o.z=n*a}function nt(e,t,n,o,r,a,i,c){const l=Math.sqrt(e*e+t*t+n*n);if(l<=0||!Number.isFinite(l)||!Number.isFinite(o)){const h=-r,d=-a,m=-i;return h*h+d*d+m*m<=c}const s=o/l,u=e*s-r,f=t*s-a,p=n*s-i;return u*u+f*f+p*p<=c}function ot(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},cameraHelioPc:{x:0,y:0,z:0}}}function me(e){const t=Math.tan(e.frustum.fovYRadians*.5);return tt(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.cameraHelioPc),{tanHalfV:t,maxDistSqPc:500**2}}var rt=256,at=320,it=`
  attribute float size;
  attribute vec3 color;
  attribute float brightness;
  attribute float warm;
  attribute float mag;
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
  uniform float uPointSizeFloor;
  uniform float uMagLimit;
  uniform float uMagFadeRange;

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
    float brightnessScale = 1.0;
    // Apparent magnitude from current camera (naked-eye cull). Catalog mag is the Sol-pov
    // apparent mag; rescale by the camera/Sol distance ratio (units cancel; both scene units):
    //   m_app = mag + 5 * log10(d_cam / d_sol)
    // Cull via clip-space: WebKit/WKWebView renders gl_PointSize=0 as a 1px point, so push
    // the vertex outside the [-1,1] clip volume to actually drop it. Smooth fade across the
    // last uMagFadeRange mag below the limit avoids popping.
    float dCam = length(mvPosition.xyz);
    float dSol = max(length(position), 1.0);
    float appMag = mag + 5.0 * log(dCam / dSol) / log(10.0);
    float magFade = clamp((uMagLimit - appMag) / max(uMagFadeRange, 0.0001), 0.0, 1.0);
    bool magCulled = appMag > uMagLimit;
    if (mvPosition.z >= 0.0 || magCulled) {
      gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      gl_PointSize = 0.0;
    } else {
      float screenPx = size * (uScale / -mvPosition.z);
      if (screenPx < uMinScreenPx || (uMaxScreenPx > 0.0 && screenPx > uMaxScreenPx)) {
        gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
        gl_PointSize = 0.0;
      } else {
        float s = screenPx * uSizeMultiplier;
        gl_PointSize = clamp(s, uPointSizeFloor, uPointSizeMax);
        brightnessScale = magFade;
      }
    }
    vBrightness = brightness * twinkle * brightnessScale;
  }
`,st=`
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
`,lt=`
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
`;function he(e){const t=new W({uniforms:{uScale:{value:1},uPointSizeMax:{value:e?.pointSizeMax??rt},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uMinScreenPx:{value:e?.minScreenPx??0},uMaxScreenPx:{value:e?.maxScreenPx??0},uPointSizeFloor:{value:e?.pointSizeFloor??0},uMagLimit:{value:6.5},uMagFadeRange:{value:1},uPaletteHot:{value:new j(1,.78,.56)},uPaletteFlare:{value:new j(1,.92,.75)}},vertexShader:it,fragmentShader:e?.useHaloShader?lt:st,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),n=new ke;return t.onBeforeRender=(o,r,a)=>{const i=a;i.isPerspectiveCamera&&i.fov&&(o.getSize(n),t.uniforms.uScale.value=n.y/(2*Math.tan(i.fov*Math.PI/360)))},t}function ut(){return he({twinkleAmp:.03,twinkleFreq:.9,pointSizeFloor:1})}function ct(){return he({useHaloShader:!0,sizeMultiplier:1.6,pointSizeMax:at,pointSizeFloor:1,twinkleAmp:.02,twinkleFreq:.55})}function ft(e){const{layers:t}=ue(e);return{createChunk(n){const o=t[n.layer],r=new Me;for(const l of n.attributes)r.setAttribute(l.name,new ne(l.data,l.components));r.computeBoundingSphere();const a=n.material,i=new ie(r,a);i.frustumCulled=!0,i.raycast=()=>{},o.add(i);const c=new Map(n.attributes.map(l=>[l.name,l.components]));return{meshRef:i,updateAttribute(l,s){const u=c.get(l);u!=null&&r.setAttribute(l,new ne(s,u))},setVertexCount(l){r.computeBoundingSphere()},dispose(){o.remove(i),r.dispose()}}}}}function ae(e){return e==="position"?ye.PositionKind:e}function mt(e){const{scene:t,layers:n}=We(e);return{createChunk(o){const r=n[o.layer],a=new Ee(o.meshName,t);a.material=o.material;for(const i of o.attributes)a.setVerticesData(ae(i.name),i.data,!0,i.components);return a.isUnIndexed=!0,a.setIndices([],null),a.isPickable=!1,e.attach(r,a),{meshRef:a,updateAttribute(i,c){a.updateVerticesData(ae(i),c,!1,!1)},setVertexCount(i){const c=a.subMeshes[0];c&&(c.verticesCount=i),a.refreshBoundingInfo(!0)},dispose(){e.detach(r,a),a.dispose()}}}}}function ht(e){return e.engineKind==="babylon"?mt(e):ft(e)}function dt(e,t,n){const o=new ie(e.geometry,n);return o.frustumCulled=!0,o.renderOrder=1,o.raycast=()=>{},t.add(o),{mesh:o,dispose(){t.remove(o)}}}function de(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function pt(e,t){let n=0,o=-1,r=null;for(let a=0;a<e.length;a+=1){const i=e[a],c=i.starsInChunk.length,l=t(i,a);l&&de(l,r)&&(r=l,o=n+l.index),n+=c}return o}function vt(e,t){if(t<0||t>=e.length)return!1;const n=e[t],o=n.proper??(n.hip!=null?`HIP ${n.hip}`:`Star ${n.id}`);return Ae.select(Re("hyg",n.id),o,"star"),!0}function pe(e){if(e.starsInView.length===0)return!1;const t=e.prepared;if(t==null)return!1;const n=pt(e.chunks,(o,r)=>e.pickInChunk(o,r,t));return vt(e.starsInView,n)}var gt=3;function ve(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function xt(e,t,n){return Math.max(t,Math.min(n,e))}function ge(e,t,n,o=1,r=256){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(o)||!Number.isFinite(r)||t<=0||e<=0||o<=0||r<=0)return 0;const a=e*(n/t);return a<=0?0:xt(a*o,0,r)}function St(e,t,n){const o=ge(e,t,n);if(o<=0)return 0;const r=o*.5+gt;return Math.min(r,256)}var G={px:0,py:0};function xe(e){const{positions:t,sizes:n,distancesPc:o,starCount:r,uScale:a,camFrustum:i,tanHalfV:c,cameraHelioPc:l,maxDistSqPc:s,mouseX:u,mouseY:f,projectStarToScreenPx:p}=e,h=Math.min(r,t.length/3,n.length,o.length);let d=null;for(let m=0;m<h;m+=1){const g=m*3,S=t[g],P=t[g+1],b=t[g+2];if(!nt(S,P,b,o[m]??0,l.x,l.y,l.z,s))continue;const w=S-i.position.x,C=P-i.position.y,M=b-i.position.z,y=w*i.forward.x+C*i.forward.y+M*i.forward.z;if(y<=1e-6)continue;const K=w*i.right.x+C*i.right.y+M*i.right.z,v=w*i.up.x+C*i.up.y+M*i.up.z,x=c*i.aspect*y;if(Math.abs(K)>x)continue;const F=c*y;if(Math.abs(v)>F)continue;const k=y,T=n[m]??0,D=ge(T,k,a),I=St(T,k,a);if(I<=0)continue;p(S,P,b,G);const A=G.px-u,L=G.py-f,ee=A*A+L*L;if(ee>I*I)continue;const te={index:m,distSqPx:ee,depthCam:k,renderedPx:D};de(te,d)&&(d=te)}return d}var X=new E,$=new E;function yt(e,t,n,o,r,a,i,c,l,s,u,f,p){const h=n.getBoundingClientRect();return xe({positions:a,sizes:i,distancesPc:c,starCount:l,uScale:ve(h.height,o.fov*Math.PI/180),camFrustum:s,tanHalfV:u,cameraHelioPc:f,maxDistSqPc:p,mouseX:e-h.left,mouseY:t-h.top,projectStarToScreenPx:(d,m,g,S)=>{X.set(d,m,g),X.applyMatrix4(r.matrixWorld),$.copy(X).project(o),S.px=($.x*.5+.5)*h.width,S.py=(-$.y*.5+.5)*h.height}})}function Pt(e){const{cameraThree:t,pickerScratch:n,syncScratch:o}=e;Le(t,n.frustum,o.forward,o.right,o.up);const{tanHalfV:r,maxDistSqPc:a}=me(n);return pe({starsInView:e.starsInView,chunks:e.chunks,prepared:{tanHalfV:r,maxDistSqPc:a},pickInChunk:(i,c,l)=>{const s=e.pointsMeshes[c],u=e.chunkDistancesPc[c],f=e.chunkOriginalSizes[c];return!s||!u||!f?null:yt(e.clientX,e.clientY,e.canvas,t,s,i.positions,f,u,i.starsInChunk.length,n.frustum,l.tanHalfV,n.cameraHelioPc,l.maxDistSqPc)}})}var q=new z,bt=Se.Identity();function wt(e,t,n,o,r,a,i,c,l,s,u,f,p,h,d){const m=n.getBoundingClientRect(),g=o.getEngine(),S=r.viewport.toGlobal(g.getRenderWidth(),g.getRenderHeight()),P=o.getTransformMatrix();return xe({positions:i,sizes:c,distancesPc:l,starCount:s,uScale:u,camFrustum:f,tanHalfV:p,cameraHelioPc:h,maxDistSqPc:d,mouseX:e-m.left,mouseY:t-m.top,projectStarToScreenPx:(b,w,C,M)=>{q.set(b,w,C),z.TransformCoordinatesToRef(q,a,q);const y=z.Project(q,bt,P,S);M.px=y.x,M.py=y.y}})}function Mt(e){const{scene:t,camera:n,host:o,pickerScratch:r}=e,a=ve(t.getEngine().getRenderHeight(),n.fov);Ve(n,o,r.frustum);const{tanHalfV:i,maxDistSqPc:c}=me(r);return pe({starsInView:e.starsInView,chunks:e.chunks,prepared:{uScale:a,tanHalfV:i,maxDistSqPc:c},pickInChunk:(l,s,u)=>{const f=e.chunkStarCounts[s]??l.starsInChunk.length;if(f<=0)return null;const p=e.chunkDistancesPc[s],h=e.chunkPositions[s]??l.positions,d=e.chunkSizes[s]??l.sizes;return p?wt(e.clientX,e.clientY,e.canvas,t,n,e.starfieldWm,h,d,p,f,u.uScale,r.frustum,u.tanHalfV,r.cameraHelioPc,u.maxDistSqPc):null}})}function Ct(e){return e.kind==="babylon"?Mt(e):Pt(e)}var R={chunks:[],pointsMeshes:[],starsInView:[]};function Xt(){return R}function $t(e,t){const n=ue(e),o=n.layers.starfield,{starsInViewRef:r,getStarData:a,getStatus:i}=t,c=ht(e),l=[],s=[],u=[],f=[],p=[],h=ut(),d=ct();let m=0;const g=new Pe,S=new be,P=new Ce,b=ot(),w=new E,C=new E,M=new E;function y(){for(const v of u)v.dispose();u.length=0;for(const v of l)v.dispose();l.length=0,s.length=0,f.length=0,p.length=0}function K(v){R.chunks=v,R.pointsMeshes=s,R.starsInView=r.current}return{refresh(){y();const v=et(a,i,f);for(const x of v){p.push(new Float32Array(x.sizes));const F=c.createChunk({layer:"starfield",meshName:`cosmosive-starfield-points-${x.abbr.replace(/[^a-zA-Z0-9_-]/g,"_")}`,material:h,attributes:[{name:"position",data:x.positions,components:3},{name:"size",data:x.sizes,components:1},{name:"color",data:x.colors,components:3},{name:"warm",data:x.warm,components:1},{name:"brightness",data:x.brightness,components:1},{name:"mag",data:x.mag,components:1}]});l.push(F);const k=F.meshRef;s.push(k),u.push(dt(k,o,d))}K(v)},advanceTime(v){m+=v,h.uniforms.uTime&&(h.uniforms.uTime.value=m),d.uniforms.uTime&&(d.uniforms.uTime.value=m)},countFrustum(){let v=0,x=0;const F=u.map(T=>T.mesh),k=[...s,...F];if(k.length>0){const T=n.cameraThree;T.updateMatrixWorld(!0),g.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),S.setFromProjectionMatrix(g);for(const D of k){const I=D.geometry;I.boundingSphere||I.computeBoundingSphere();const A=I.boundingSphere;if(!A)continue;P.copy(A).applyMatrix4(D.matrixWorld);const L=I.getAttribute("position");x+=L?.count??0,S.intersectsSphere(P)&&(v+=1)}}return{total:k.length,visible:v,verts:x}},pickFromClick({clientX:v,clientY:x,canvas:F}){return Ct({kind:"r3f",clientX:v,clientY:x,canvas:F,starsInView:r.current,chunks:R.chunks,chunkDistancesPc:f,chunkOriginalSizes:p,cameraThree:n.cameraThree,pointsMeshes:s,pickerScratch:b,syncScratch:{forward:w,right:C,up:M}})},dispose(){y(),h.dispose(),d.dispose(),R.chunks=[],R.pointsMeshes=[],R.starsInView=[]}}}function U(e){return new j(e[0],e[1],e[2])}function kt(){return{cool:U(_.star4),warm:U(_.star3),hot:U(_.star2),flare:U(_.star1)}}var zt=`
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
`,Ft=`
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
`;function Yt(e){return e==null||Array.isArray(e)||!(e instanceof W)?!1:e.userData.cosmosiveSunPhotosphere===!0}function Qt(e,t){const n=kt(),o={cool:e?.cool??n.cool,warm:e?.warm??n.warm,hot:e?.hot??n.hot,flare:e?.flare??n.flare},r={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:o.cool.clone()},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},a=new W({uniforms:r,vertexShader:zt,fragmentShader:Ft,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var Tt=`
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
`,It=`
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
`;function Y(e){return new j(e[0],e[1],e[2])}function Rt(){return{warm:Y(_.star3),hot:Y(_.star2),flare:Y(_.star1)}}function Jt(e){return e==null||Array.isArray(e)||!(e instanceof W)?!1:e.userData.cosmosiveSunCorona===!0}function Zt(e){const t=Rt(),n={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},o={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:n.warm.clone()},uPaletteHot:{value:n.hot.clone()},uPaletteFlare:{value:n.flare.clone()}},r=new W({uniforms:o,vertexShader:Tt,fragmentShader:It,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return r.userData.cosmosiveSunCorona=!0,r}export{Oe as C,Dt as D,We as E,Lt as O,Bt as S,Le as T,Ot as _,$t as a,O as b,ht as c,qt as d,jt as f,fe as g,Ut as h,Yt as i,ot as l,Kt as m,Jt as n,Xt as o,Gt as p,Qt as r,Ct as s,Zt as t,et as u,Vt as v,Ve as w,Ht as x,_ as y};
