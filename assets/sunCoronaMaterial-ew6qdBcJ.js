import{Ht as z,Rt as ye,wt as Pe}from"./babylon-postprocess-vendor-CPXB9tym.js";import{B as we,C as be,Q as ie,R as Ce,bt as E,lt as W,o as ne,p as j,s as Me,ut as ke,yt as ze}from"./three-vendor-BZgPQKFQ.js";import{$a as se,En as le,Eo as Te,Qa as Fe,So as Ie,Za as Ae,an as Re,go as _e,io as Ee}from"./index-Cx72TUed.js";import{u as We}from"./babylon-vendor-Cyt56fsS.js";import{t as ue}from"./r3fHostExtras-BIco5YcV.js";var Z=new WeakMap;function Lt(e,t){Z.set(e,t)}function Nt(e){Z.delete(e)}function De(e){if(e.engineKind!=="babylon")throw new Error("asBabylon: SceneHost is not a Babylon implementation");const t=Z.get(e);if(!t)throw new Error("asBabylon: missing Babylon extras (host not fully initialized?)");return t}var ce={current:null};function He(e,t,n){return n&&t&&Te(e,t.position.x,t.position.y,t.position.z),e}function Vt(e,t,n){if(n&&t){const r=e;r.x+=t.position.x,r.y+=t.position.y,r.z+=t.position.z}return e}function Ot(e,t){return e.getWorldPosition(t),He(t,ce.current,!0),t}function Be(e,t,n,r,o){e.updateMatrixWorld(!0),e.getWorldPosition(n),t.position.x=n.x,t.position.y=n.y,t.position.z=n.z,e.getWorldDirection(n),r.setFromMatrixColumn(e.matrixWorld,0).normalize(),o.setFromMatrixColumn(e.matrixWorld,1).normalize(),t.forward.x=n.x,t.forward.y=n.y,t.forward.z=n.z,t.right.x=r.x,t.right.y=r.y,t.right.z=r.z,t.up.x=o.x,t.up.y=o.y,t.up.z=o.z,t.fovYRadians=Ce.degToRad(e.fov),t.aspect=e.aspect}function Le(e,t,n,r,o){Be(e,t,n,r,o);{const a=ce.current;a&&(t.position.x-=a.position.x,t.position.y-=a.position.y,t.position.z-=a.position.z)}}var Ne=new z(0,0,-1),Ve=new z(1,0,0),Oe=new z(0,1,0),B=new z,L=new z,N=new z,V=new z;function qe(e,t,n){e.computeWorldMatrix(),e.getWorldMatrix().getTranslationToRef(B),n.position.x=B.x,n.position.y=B.y,n.position.z=B.z;{const[o,a,i]=t.getFloatingOrigin();n.position.x+=o,n.position.y+=a,n.position.z+=i}e.getDirectionToRef(Ne,L),e.getDirectionToRef(Ve,N),e.getDirectionToRef(Oe,V),n.forward.x=L.x,n.forward.y=L.y,n.forward.z=L.z,n.right.x=N.x,n.right.y=N.y,n.right.z=N.z,n.up.x=V.x,n.up.y=V.y,n.up.z=V.z,n.fovYRadians=e.fov;const r=e.getEngine();n.aspect=r.getRenderWidth()/Math.max(1,r.getRenderHeight())}function qt(e){const t=e.replace(/^#/,""),n=parseInt(t,16);return Number.isFinite(n)?[Math.floor(n/65536)%256,Math.floor(n/256)%256,n%256]:[0,0,0]}function Ue(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function Ut(e){return Math.max(0,Math.min(255,Math.round(e)))}function O(e,t=1,n=1){const[r,o,a]=Ue(e),i=Math.max(.15,Math.min(1,t));return[r*i,o*i,a*i,n]}var R={star1:O("#fff3a8",1),star2:O("#f5c238",1),star3:O("#e07b1a",1),star4:O("#a8380c",1)},J=4,jt=64*J,je=-25,Ke=500,Ge=.01;function fe(e){return Math.max(0,Math.min(1,e))}function Xe(e){return e?.size!=null&&Number.isFinite(e.size)?fe(e.size):.5}function $e(e){return .08+.76*fe((e-.99)/.01)**3}function Kt(e){return(e?Fe(e,le(e)):se)*$e(Xe(e))*J}function Q(e,t){let n=t;for(;e[n]!==n;)n=e[n];let r=t;for(;r!==n;){const o=e[r];e[r]=n,r=o}return n}function Ye(e,t,n){const r=Q(e,t),o=Q(e,n);r!==o&&(e[r]=o)}function re(e,t,n){return`${e},${t},${n}`}function Gt(e,t){const n=e.length,r=Array.from({length:n},(s,u)=>u),o=t,a=new Map;for(let s=0;s<n;s+=1){const u=e[s],f=re(Math.floor(u.x/o),Math.floor(u.y/o),Math.floor(u.z/o));a.has(f)||a.set(f,[]),a.get(f).push(s)}const i=t*t;for(let s=0;s<n;s+=1){const u=e[s],f=Math.floor(u.x/o),p=Math.floor(u.y/o),h=Math.floor(u.z/o);for(let d=-1;d<=1;d+=1)for(let m=-1;m<=1;m+=1)for(let x=-1;x<=1;x+=1){const g=re(f+d,p+m,h+x),P=a.get(g);if(P)for(const w of P){if(w<=s)continue;const b=e[w],M=b.x-u.x,C=b.y-u.y,y=b.z-u.z;M*M+C*C+y*y<i&&Ye(r,s,w)}}}const c=new Map;for(let s=0;s<n;s+=1){const u=Q(r,s);c.has(u)||c.set(u,[]),c.get(u).push(s)}const l=[];for(let s=0;s<n;s+=1)l.push(void 0);for(const s of c.values())s.length<=1||(s.sort((u,f)=>u-f),s.forEach((u,f)=>{f>0&&(l[u]={x:0,y:f*je})}));return l}function Qe(){const e=[];for(let t=0;t<Ke;t+=1){const n=Ae(t*.7%360,t*.3%180-90);n!=null&&e.push(n)}return e}function Ze(){const e=Qe(),t=e.length,n=_e,r=new Float32Array(t*3);return e.forEach((o,a)=>{r[a*3]=o.x*n,r[a*3+1]=o.y*n,r[a*3+2]=o.z*n}),{abbr:"_bootstrap",positions:r,sizes:new Float32Array(t).fill(se*J),colors:new Float32Array(t*3).fill(1),warm:new Float32Array(t).fill(Ge),brightness:new Float32Array(t).fill(1),starsInChunk:[]}}var Je={raMin:0,raMax:360,decMin:-90,decMax:90},Xt={chunks:[],namedStarsInView:[]};function $t(e,t){return e===0&&t!=="success"}function me(e,t){return e.chunks.length>0?e.chunks:t==="idle"||t==="loading"?[Ze()]:[]}function Yt(e,t){const n=me(e,t),r=n.slice(0,3).map(o=>o.abbr).join(",");return n.length===0?{syntheticKind:"empty",chunkAbbrevSample:r}:n.length===1&&n[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:r}:n.some(o=>o.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:r}:{syntheticKind:"real",chunkAbbrevSample:r}}function oe(e,t){return t.current===e.current}function Qt(e,t,n,r,o){e.onerror=a=>{oe(t,n)||(r("error"),o(a.message??"Starfield worker failed"))},e.onmessageerror=()=>{oe(t,n)||(r("error"),o("Starfield worker message error"))}}function et(e,t,n,r,o,a,i){const{runId:c,...l}=e;c===t.current&&(n.current=c,r.current=l.starsInView,o({chunks:l.chunks,namedStarsInView:l.namedStarsInView}),a("ready"),i(null))}function Zt(e,t,n,r,o){e.processStarfield({runId:t,catalog:n,maxDistanceLevel:r,bounds:Je,raInHours:!1}).then(a=>{et(a,o.runIdRef,o.lastSuccessfulRunIdRef,o.starsInViewRef,o.setStarData,o.setStarfieldStatus,o.setErrorMessage)}).catch(a=>{t===o.runIdRef.current&&(o.setStarfieldStatus("error"),o.setErrorMessage(a instanceof Error?a.message:"Starfield worker failed"))})}function tt(e,t){t.length=0;for(const n of e){const r=new Float32Array(n.starsInChunk.length);for(let o=0;o<n.starsInChunk.length;o+=1){const a=n.starsInChunk[o];r[o]=a?le(a):0}t.push(r)}}function nt(e,t,n){const r=me(e(),t());return tt(r,n),r}function rt(e,t,n,r){const o=Math.sqrt(e*e+t*t+n*n);if(o<=0||!Number.isFinite(o)){r.x=0,r.y=0,r.z=0;return}const a=Ee(o)/o;r.x=e*a,r.y=t*a,r.z=n*a}function ot(e,t,n,r,o,a,i,c){const l=Math.sqrt(e*e+t*t+n*n);if(l<=0||!Number.isFinite(l)||!Number.isFinite(r)){const h=-o,d=-a,m=-i;return h*h+d*d+m*m<=c}const s=r/l,u=e*s-o,f=t*s-a,p=n*s-i;return u*u+f*f+p*p<=c}function at(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},cameraHelioPc:{x:0,y:0,z:0}}}function he(e){const t=Math.tan(e.frustum.fovYRadians*.5);return rt(e.frustum.position.x,e.frustum.position.y,e.frustum.position.z,e.cameraHelioPc),{tanHalfV:t,maxDistSqPc:500**2}}var it=256,st=320,lt=`
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
`,ut=`
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
`,ct=`
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
`;function de(e){const t=new W({uniforms:{uScale:{value:1},uPointSizeMax:{value:e?.pointSizeMax??it},uTime:{value:0},uTwinkleAmp:{value:e?.twinkleAmp??0},uTwinkleFreq:{value:e?.twinkleFreq??.8},uSizeMultiplier:{value:e?.sizeMultiplier??1},uMinScreenPx:{value:e?.minScreenPx??0},uMaxScreenPx:{value:e?.maxScreenPx??0},uPaletteHot:{value:new j(1,.78,.56)},uPaletteFlare:{value:new j(1,.92,.75)}},vertexShader:lt,fragmentShader:e?.useHaloShader?ct:ut,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}),n=new ze;return t.onBeforeRender=(r,o,a)=>{const i=a;i.isPerspectiveCamera&&i.fov&&(r.getSize(n),t.uniforms.uScale.value=n.y/(2*Math.tan(i.fov*Math.PI/360)))},t}function ft(){return de({twinkleAmp:.03,twinkleFreq:.9})}function mt(){return de({useHaloShader:!0,sizeMultiplier:1.6,minScreenPx:2.1,maxScreenPx:5.2,pointSizeMax:st,twinkleAmp:.02,twinkleFreq:.55})}function ht(e){const{layers:t}=ue(e);return{createChunk(n){const r=t[n.layer],o=new Me;for(const l of n.attributes)o.setAttribute(l.name,new ne(l.data,l.components));o.computeBoundingSphere();const a=n.material,i=new ie(o,a);i.frustumCulled=!0,i.raycast=()=>{},r.add(i);const c=new Map(n.attributes.map(l=>[l.name,l.components]));return{meshRef:i,updateAttribute(l,s){const u=c.get(l);u!=null&&o.setAttribute(l,new ne(s,u))},setVertexCount(l){o.computeBoundingSphere()},dispose(){r.remove(i),o.dispose()}}}}}function ae(e){return e==="position"?Pe.PositionKind:e}function dt(e){const{scene:t,layers:n}=De(e);return{createChunk(r){const o=n[r.layer],a=new We(r.meshName,t);a.material=r.material;for(const i of r.attributes)a.setVerticesData(ae(i.name),i.data,!0,i.components);return a.isUnIndexed=!0,a.setIndices([],null),a.isPickable=!1,e.attach(o,a),{meshRef:a,updateAttribute(i,c){a.updateVerticesData(ae(i),c,!1,!1)},setVertexCount(i){const c=a.subMeshes[0];c&&(c.verticesCount=i),a.refreshBoundingInfo(!0)},dispose(){e.detach(o,a),a.dispose()}}}}}function pt(e){return e.engineKind==="babylon"?dt(e):ht(e)}function vt(e,t,n){const r=new ie(e.geometry,n);return r.frustumCulled=!0,r.renderOrder=1,r.raycast=()=>{},t.add(r),{mesh:r,dispose(){t.remove(r)}}}function pe(e,t){return t?e.depthCam!==t.depthCam?e.depthCam<t.depthCam:e.renderedPx!==t.renderedPx?e.renderedPx>t.renderedPx:e.distSqPx<t.distSqPx:!0}function xt(e,t){let n=0,r=-1,o=null;for(let a=0;a<e.length;a+=1){const i=e[a],c=i.starsInChunk.length,l=t(i,a);l&&pe(l,o)&&(o=l,r=n+l.index),n+=c}return r}function St(e,t){if(t<0||t>=e.length)return!1;const n=e[t],r=n.proper??(n.hip!=null?`HIP ${n.hip}`:`Star ${n.id}`);return Re.select(Ie("hyg",n.id),r,"star"),!0}function ve(e){if(e.starsInView.length===0)return!1;const t=e.prepared;if(t==null)return!1;const n=xt(e.chunks,(r,o)=>e.pickInChunk(r,o,t));return St(e.starsInView,n)}var gt=3;function xe(e,t){return!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0?0:e/(2*Math.tan(t*.5))}function yt(e,t,n){return Math.max(t,Math.min(n,e))}function Se(e,t,n,r=1,o=256){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(o)||t<=0||e<=0||r<=0||o<=0)return 0;const a=e*(n/t);return a<=0?0:yt(a*r,0,o)}function Pt(e,t,n){const r=Se(e,t,n);if(r<=0)return 0;const o=r*.5+gt;return Math.min(o,256)}var G={px:0,py:0};function ge(e){const{positions:t,sizes:n,distancesPc:r,starCount:o,uScale:a,camFrustum:i,tanHalfV:c,cameraHelioPc:l,maxDistSqPc:s,mouseX:u,mouseY:f,projectStarToScreenPx:p}=e,h=Math.min(o,t.length/3,n.length,r.length);let d=null;for(let m=0;m<h;m+=1){const x=m*3,g=t[x],P=t[x+1],w=t[x+2];if(!ot(g,P,w,r[m]??0,l.x,l.y,l.z,s))continue;const b=g-i.position.x,M=P-i.position.y,C=w-i.position.z,y=b*i.forward.x+M*i.forward.y+C*i.forward.z;if(y<=1e-6)continue;const K=b*i.right.x+M*i.right.y+C*i.right.z,v=b*i.up.x+M*i.up.y+C*i.up.z,S=c*i.aspect*y;if(Math.abs(K)>S)continue;const T=c*y;if(Math.abs(v)>T)continue;const k=y,F=n[m]??0,D=Se(F,k,a),I=Pt(F,k,a);if(I<=0)continue;p(g,P,w,G);const _=G.px-u,H=G.py-f,ee=_*_+H*H;if(ee>I*I)continue;const te={index:m,distSqPx:ee,depthCam:k,renderedPx:D};pe(te,d)&&(d=te)}return d}var X=new E,$=new E;function wt(e,t,n,r,o,a,i,c,l,s,u,f,p){const h=n.getBoundingClientRect();return ge({positions:a,sizes:i,distancesPc:c,starCount:l,uScale:xe(h.height,r.fov*Math.PI/180),camFrustum:s,tanHalfV:u,cameraHelioPc:f,maxDistSqPc:p,mouseX:e-h.left,mouseY:t-h.top,projectStarToScreenPx:(d,m,x,g)=>{X.set(d,m,x),X.applyMatrix4(o.matrixWorld),$.copy(X).project(r),g.px=($.x*.5+.5)*h.width,g.py=(-$.y*.5+.5)*h.height}})}function bt(e){const{cameraThree:t,pickerScratch:n,syncScratch:r}=e;Le(t,n.frustum,r.forward,r.right,r.up);const{tanHalfV:o,maxDistSqPc:a}=he(n);return ve({starsInView:e.starsInView,chunks:e.chunks,prepared:{tanHalfV:o,maxDistSqPc:a},pickInChunk:(i,c,l)=>{const s=e.pointsMeshes[c],u=e.chunkDistancesPc[c],f=e.chunkOriginalSizes[c];return!s||!u||!f?null:wt(e.clientX,e.clientY,e.canvas,t,s,i.positions,f,u,i.starsInChunk.length,n.frustum,l.tanHalfV,n.cameraHelioPc,l.maxDistSqPc)}})}var q=new z,Ct=ye.Identity();function Mt(e,t,n,r,o,a,i,c,l,s,u,f,p,h,d){const m=n.getBoundingClientRect(),x=r.getEngine(),g=o.viewport.toGlobal(x.getRenderWidth(),x.getRenderHeight()),P=r.getTransformMatrix();return ge({positions:i,sizes:c,distancesPc:l,starCount:s,uScale:u,camFrustum:f,tanHalfV:p,cameraHelioPc:h,maxDistSqPc:d,mouseX:e-m.left,mouseY:t-m.top,projectStarToScreenPx:(w,b,M,C)=>{q.set(w,b,M),z.TransformCoordinatesToRef(q,a,q);const y=z.Project(q,Ct,P,g);C.px=y.x,C.py=y.y}})}function kt(e){const{scene:t,camera:n,host:r,pickerScratch:o}=e,a=xe(t.getEngine().getRenderHeight(),n.fov);qe(n,r,o.frustum);const{tanHalfV:i,maxDistSqPc:c}=he(o);return ve({starsInView:e.starsInView,chunks:e.chunks,prepared:{uScale:a,tanHalfV:i,maxDistSqPc:c},pickInChunk:(l,s,u)=>{const f=e.chunkStarCounts[s]??l.starsInChunk.length;if(f<=0)return null;const p=e.chunkDistancesPc[s],h=e.chunkPositions[s]??l.positions,d=e.chunkSizes[s]??l.sizes;return p?Mt(e.clientX,e.clientY,e.canvas,t,n,e.starfieldWm,h,d,p,f,u.uScale,o.frustum,u.tanHalfV,o.cameraHelioPc,u.maxDistSqPc):null}})}function zt(e){return e.kind==="babylon"?kt(e):bt(e)}var A={chunks:[],pointsMeshes:[],starsInView:[]};function Jt(){return A}function en(e,t){const n=ue(e),r=n.layers.starfield,{starsInViewRef:o,getStarData:a,getStatus:i}=t,c=pt(e),l=[],s=[],u=[],f=[],p=[],h=ft(),d=mt();let m=0;const x=new we,g=new be,P=new ke,w=at(),b=new E,M=new E,C=new E;function y(){for(const v of u)v.dispose();u.length=0;for(const v of l)v.dispose();l.length=0,s.length=0,f.length=0,p.length=0}function K(v){A.chunks=v,A.pointsMeshes=s,A.starsInView=o.current}return{refresh(){y();const v=nt(a,i,f);for(const S of v){p.push(new Float32Array(S.sizes));const T=c.createChunk({layer:"starfield",meshName:`cosmosive-starfield-points-${S.abbr.replace(/[^a-zA-Z0-9_-]/g,"_")}`,material:h,attributes:[{name:"position",data:S.positions,components:3},{name:"size",data:S.sizes,components:1},{name:"color",data:S.colors,components:3},{name:"warm",data:S.warm,components:1},{name:"brightness",data:S.brightness,components:1}]});l.push(T);const k=T.meshRef;s.push(k),u.push(vt(k,r,d))}K(v)},advanceTime(v){m+=v,h.uniforms.uTime&&(h.uniforms.uTime.value=m),d.uniforms.uTime&&(d.uniforms.uTime.value=m)},countFrustum(){let v=0,S=0;const T=u.map(F=>F.mesh),k=[...s,...T];if(k.length>0){const F=n.cameraThree;F.updateMatrixWorld(!0),x.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),g.setFromProjectionMatrix(x);for(const D of k){const I=D.geometry;I.boundingSphere||I.computeBoundingSphere();const _=I.boundingSphere;if(!_)continue;P.copy(_).applyMatrix4(D.matrixWorld);const H=I.getAttribute("position");S+=H?.count??0,g.intersectsSphere(P)&&(v+=1)}}return{total:k.length,visible:v,verts:S}},pickFromClick({clientX:v,clientY:S,canvas:T}){return zt({kind:"r3f",clientX:v,clientY:S,canvas:T,starsInView:o.current,chunks:A.chunks,chunkDistancesPc:f,chunkOriginalSizes:p,cameraThree:n.cameraThree,pointsMeshes:s,pickerScratch:w,syncScratch:{forward:b,right:M,up:C}})},dispose(){y(),h.dispose(),d.dispose(),A.chunks=[],A.pointsMeshes=[],A.starsInView=[]}}}function U(e){return new j(e[0],e[1],e[2])}function Tt(){return{cool:U(R.star4),warm:U(R.star3),hot:U(R.star2),flare:U(R.star1)}}var Ft=`
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
`;function tn(e){return e==null||Array.isArray(e)||!(e instanceof W)?!1:e.userData.cosmosiveSunPhotosphere===!0}function nn(e,t){const n=Tt(),r={cool:e?.cool??n.cool,warm:e?.warm??n.warm,hot:e?.hot??n.hot,flare:e?.flare??n.flare},o={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:r.cool.clone()},uPaletteWarm:{value:r.warm.clone()},uPaletteHot:{value:r.hot.clone()},uPaletteFlare:{value:r.flare.clone()}},a=new W({uniforms:o,vertexShader:Ft,fragmentShader:It,transparent:t?.transparent??!1,depthWrite:t?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var At=`
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
`,Rt=`
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
`;function Y(e){return new j(e[0],e[1],e[2])}function _t(){return{warm:Y(R.star3),hot:Y(R.star2),flare:Y(R.star1)}}function rn(e){return e==null||Array.isArray(e)||!(e instanceof W)?!1:e.userData.cosmosiveSunCorona===!0}function on(e){const t=_t(),n={warm:e?.warm??t.warm,hot:e?.hot??t.hot,flare:e?.flare??t.flare},r={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:n.warm.clone()},uPaletteHot:{value:n.hot.clone()},uPaletteFlare:{value:n.flare.clone()}},o=new W({uniforms:r,vertexShader:At,fragmentShader:Rt,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return o.userData.cosmosiveSunCorona=!0,o}export{Lt as A,Ue as C,Ot as D,Vt as E,ce as O,qt as S,Le as T,Gt as _,en as a,O as b,pt as c,Xt as d,Yt as f,me as g,$t as h,tn as i,Nt as j,De as k,at as l,Qt as m,rn as n,Jt as o,Zt as p,nn as r,zt as s,on as t,nt as u,Kt as v,qe as w,Ut as x,R as y};
