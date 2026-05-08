import{Ht as k,Rt as ht,wt as dt}from"./babylon-postprocess-vendor-CPXB9tym.js";import{B as pt,C as vt,Q as nt,R as gt,bt as D,lt as W,o as tt,p as U,s as xt,ut as St}from"./three-vendor-BZgPQKFQ.js";import{Do as yt,Kn as Pt,Nn as wt,Vo as Mt,bo as bt,hn as at,jo as J,qo as Ct,yn as kt}from"./index-DILpdhc-.js";import{u as zt}from"./babylon-vendor-Cyt56fsS.js";var Z=new WeakMap;function Fe(t,e){Z.set(t,e)}function Te(t){Z.delete(t)}function Ft(t){if(t.engineKind!=="babylon")throw new Error("asBabylon: SceneHost is not a Babylon implementation");const e=Z.get(t);if(!e)throw new Error("asBabylon: missing Babylon extras (host not fully initialized?)");return e}function Tt(t,e,o,r,n){t.updateMatrixWorld(!0),t.getWorldPosition(o),e.position.x=o.x,e.position.y=o.y,e.position.z=o.z,t.getWorldDirection(o),r.setFromMatrixColumn(t.matrixWorld,0).normalize(),n.setFromMatrixColumn(t.matrixWorld,1).normalize(),e.forward.x=o.x,e.forward.y=o.y,e.forward.z=o.z,e.right.x=r.x,e.right.y=r.y,e.right.z=r.z,e.up.x=n.x,e.up.y=n.y,e.up.z=n.z,e.fovYRadians=gt.degToRad(t.fov),e.aspect=t.aspect}function Rt(t,e,o,r,n){Tt(t,e,o,r,n);{const a=wt.current;a&&(e.position.x-=a.position.x,e.position.y-=a.position.y,e.position.z-=a.position.z)}}var At=new k(0,0,-1),It=new k(1,0,0),_t=new k(0,1,0),H=new k,B=new k,V=new k,N=new k;function Et(t,e,o){t.computeWorldMatrix(),t.getWorldMatrix().getTranslationToRef(H),o.position.x=H.x,o.position.y=H.y,o.position.z=H.z;{const[n,a,u]=e.getFloatingOrigin();o.position.x+=n,o.position.y+=a,o.position.z+=u}t.getDirectionToRef(At,B),t.getDirectionToRef(It,V),t.getDirectionToRef(_t,N),o.forward.x=B.x,o.forward.y=B.y,o.forward.z=B.z,o.right.x=V.x,o.right.y=V.y,o.right.z=V.z,o.up.x=N.x,o.up.y=N.y,o.up.z=N.z,o.fovYRadians=t.fov;const r=t.getEngine();o.aspect=r.getRenderWidth()/Math.max(1,r.getRenderHeight())}function Re(t){const e=t.replace(/^#/,""),o=parseInt(e,16);return Number.isFinite(o)?[Math.floor(o/65536)%256,Math.floor(o/256)%256,o%256]:[0,0,0]}function Dt(t){if(!t||typeof t!="string")return[1,1,1];const e=t.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,1,1]}function Ae(t){return Math.max(0,Math.min(255,Math.round(t)))}function O(t,e=1,o=1){const[r,n,a]=Dt(t),u=Math.max(.15,Math.min(1,e));return[r*u,n*u,a*u,o]}var I={star1:O("#fff3a8",1),star2:O("#f5c238",1),star3:O("#e07b1a",1),star4:O("#a8380c",1)},Wt=1,Lt=-25,Ht=500,Bt=.01;function Q(t,e){let o=e;for(;t[o]!==o;)o=t[o];let r=e;for(;r!==o;){const n=t[r];t[r]=o,r=n}return o}function Vt(t,e,o){const r=Q(t,e),n=Q(t,o);r!==n&&(t[r]=n)}function et(t,e,o){return`${t},${e},${o}`}function Ie(t,e){const o=t.length,r=Array.from({length:o},(i,l)=>l),n=e,a=new Map;for(let i=0;i<o;i+=1){const l=t[i],f=et(Math.floor(l.x/n),Math.floor(l.y/n),Math.floor(l.z/n));a.has(f)||a.set(f,[]),a.get(f).push(i)}const u=e*e;for(let i=0;i<o;i+=1){const l=t[i],f=Math.floor(l.x/n),p=Math.floor(l.y/n),m=Math.floor(l.z/n);for(let h=-1;h<=1;h+=1)for(let d=-1;d<=1;d+=1)for(let g=-1;g<=1;g+=1){const S=et(f+h,p+d,m+g),P=a.get(S);if(P)for(const w of P){if(w<=i)continue;const M=t[w],b=M.x-l.x,y=M.y-l.y,C=M.z-l.z;b*b+y*y+C*C<u&&Vt(r,i,w)}}}const c=new Map;for(let i=0;i<o;i+=1){const l=Q(r,i);c.has(l)||c.set(l,[]),c.get(l).push(i)}const s=[];for(let i=0;i<o;i+=1)s.push(void 0);for(const i of c.values())i.length<=1||(i.sort((l,f)=>l-f),i.forEach((l,f)=>{f>0&&(s[l]={x:0,y:f*Lt})}));return s}function Nt(){const t=[];for(let e=0;e<Ht;e+=1){const o=bt(e*.7%360,e*.3%180-90);o!=null&&t.push(o)}return t}function Ot(){const t=Nt(),e=t.length,o=Mt,r=new Float32Array(e*3);return t.forEach((n,a)=>{r[a*3]=n.x*o,r[a*3+1]=n.y*o,r[a*3+2]=n.z*o}),{abbr:"_bootstrap",positions:r,sizes:new Float32Array(e).fill(Wt),colors:new Float32Array(e*3).fill(1),warm:new Float32Array(e).fill(Bt),brightness:new Float32Array(e).fill(1),mag:new Float32Array(e).fill(-1/0),starsInChunk:[]}}var Kt={raMin:0,raMax:360,decMin:-90,decMax:90},_e={chunks:[],namedStarsInView:[]};function Ee(t,e){return t===0&&e!=="success"}function it(t,e){return t.chunks.length>0?t.chunks:e==="idle"||e==="loading"?[Ot()]:[]}function De(t,e){const o=it(t,e),r=o.slice(0,3).map(n=>n.abbr).join(",");return o.length===0?{syntheticKind:"empty",chunkAbbrevSample:r}:o.length===1&&o[0]?.abbr==="_bootstrap"?{syntheticKind:"bootstrap",chunkAbbrevSample:r}:o.some(n=>n.abbr==="_fallback")?{syntheticKind:"fallback",chunkAbbrevSample:r}:{syntheticKind:"real",chunkAbbrevSample:r}}function ot(t,e){return e.current===t.current}function We(t,e,o,r,n){t.onerror=a=>{ot(e,o)||(r("error"),n(a.message??"Starfield worker failed"))},t.onmessageerror=()=>{ot(e,o)||(r("error"),n("Starfield worker message error"))}}function qt(t,e,o,r,n,a,u){const{runId:c,...s}=t;c===e.current&&(o.current=c,r.current=s.starsInView,n({chunks:s.chunks,namedStarsInView:s.namedStarsInView}),a("ready"),u(null))}function Le(t,e,o,r,n){t.processStarfield({runId:e,catalog:o,maxDistanceLevel:r,bounds:Kt,raInHours:!1}).then(a=>{qt(a,n.runIdRef,n.lastSuccessfulRunIdRef,n.starsInViewRef,n.setStarData,n.setStarfieldStatus,n.setErrorMessage)}).catch(a=>{e===n.runIdRef.current&&(n.setStarfieldStatus("error"),n.setErrorMessage(a instanceof Error?a.message:"Starfield worker failed"))})}function Ut(t,e){e.length=0;for(const o of t){const r=new Float32Array(o.starsInChunk.length);for(let n=0;n<o.starsInChunk.length;n+=1){const a=o.starsInChunk[n];r[n]=a?Pt(a)*J:0}e.push(r)}}function jt(t,e,o){const r=it(t(),e());return Ut(r,o),r}var Gt=500*J;function Xt(t,e,o,r){const n=Math.sqrt(t*t+e*e+o*o);if(n<=0||!Number.isFinite(n)){r.x=0,r.y=0,r.z=0;return}const a=yt(n)*J/n;r.x=t*a,r.y=e*a,r.z=o*a}function $t(t,e,o,r,n,a,u,c){const s=Math.sqrt(t*t+e*e+o*o);if(s<=0||!Number.isFinite(s)||!Number.isFinite(r)){const m=-n,h=-a,d=-u;return m*m+h*h+d*d<=c}const i=r/s,l=t*i-n,f=e*i-a,p=o*i-u;return l*l+f*f+p*p<=c}function Yt(){return{frustum:{position:{x:0,y:0,z:0},forward:{x:0,y:0,z:-1},right:{x:1,y:0,z:0},up:{x:0,y:1,z:0},fovYRadians:Math.PI/4,aspect:1},cameraHelioKm:{x:0,y:0,z:0}}}function st(t){const e=Math.tan(t.frustum.fovYRadians*.5);return Xt(t.frustum.position.x,t.frustum.position.y,t.frustum.position.z,t.cameraHelioKm),{tanHalfV:e,maxDistSqKm:Gt**2}}var Qt=256,Jt=320,Zt=`
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
`,te=`
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
`,ee=`
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
`;function lt(t){return new W({uniforms:{uPointSizeMax:{value:t?.pointSizeMax??Qt},uTime:{value:0},uTwinkleAmp:{value:t?.twinkleAmp??0},uTwinkleFreq:{value:t?.twinkleFreq??.8},uSizeMultiplier:{value:t?.sizeMultiplier??1},uPointSizeFloor:{value:t?.pointSizeFloor??1},uMagLimit:{value:6.5},uMagFadeRange:{value:1},uMagRef:{value:0},uFluxClampMax:{value:4},uFluxGamma:{value:.45},uPsfMaxMult:{value:3.5},uPaletteHot:{value:new U(1,.78,.56)},uPaletteFlare:{value:new U(1,.92,.75)}},vertexShader:Zt,fragmentShader:t?.useHaloShader?ee:te,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}function oe(){return lt({twinkleAmp:.03,twinkleFreq:.9,pointSizeFloor:1})}function re(){return lt({useHaloShader:!0,sizeMultiplier:1.6,pointSizeMax:Jt,pointSizeFloor:1,twinkleAmp:.02,twinkleFreq:.55})}function ne(t){const{layers:e}=at(t);return{createChunk(o){const r=e[o.layer],n=new xt;for(const s of o.attributes)n.setAttribute(s.name,new tt(s.data,s.components));n.computeBoundingSphere();const a=o.material,u=new nt(n,a);u.frustumCulled=!0,u.raycast=()=>{},r.add(u);const c=new Map(o.attributes.map(s=>[s.name,s.components]));return{meshRef:u,updateAttribute(s,i){const l=c.get(s);l!=null&&n.setAttribute(s,new tt(i,l))},setVertexCount(s){n.computeBoundingSphere()},dispose(){r.remove(u),n.dispose()}}}}}function rt(t){return t==="position"?dt.PositionKind:t}function ae(t){const{scene:e,layers:o}=Ft(t);return{createChunk(r){const n=o[r.layer],a=new zt(r.meshName,e);a.material=r.material;for(const u of r.attributes)a.setVerticesData(rt(u.name),u.data,!0,u.components);return a.isUnIndexed=!0,a.setIndices([],null),a.isPickable=!1,t.attach(n,a),{meshRef:a,updateAttribute(u,c){a.updateVerticesData(rt(u),c,!1,!1)},setVertexCount(u){const c=a.subMeshes[0];c&&(c.verticesCount=u),a.refreshBoundingInfo(!0)},dispose(){t.detach(n,a),a.dispose()}}}}}function ie(t){return t.engineKind==="babylon"?ae(t):ne(t)}function se(t,e,o){const r=new nt(t.geometry,o);return r.frustumCulled=!0,r.renderOrder=1,r.raycast=()=>{},e.add(r),{mesh:r,dispose(){e.remove(r)}}}function ut(t,e){return e?t.depthCam!==e.depthCam?t.depthCam<e.depthCam:t.renderedPx!==e.renderedPx?t.renderedPx>e.renderedPx:t.distSqPx<e.distSqPx:!0}function le(t,e){let o=0,r=-1,n=null;for(let a=0;a<t.length;a+=1){const u=t[a],c=u.starsInChunk.length,s=e(u,a);s&&ut(s,n)&&(n=s,r=o+s.index),o+=c}return r}function ue(t,e){if(e<0||e>=t.length)return!1;const o=t[e],r=o.proper??(o.hip!=null?`HIP ${o.hip}`:`Star ${o.id}`);return kt.select(Ct("hyg",o.id),r,"star"),!0}function ct(t){if(t.starsInView.length===0)return!1;const e=t.prepared;if(e==null)return!1;const o=le(t.chunks,(r,n)=>t.pickInChunk(r,n,e));return ue(t.starsInView,o)}function ft(t,e){return!Number.isFinite(t)||!Number.isFinite(e)||t<=0||e<=0?0:t/(2*Math.tan(e*.5))}function ce(){return 1}function fe(){return 8}var G={px:0,py:0};function mt(t){const{positions:e,sizes:o,distancesKm:r,starCount:n,camFrustum:a,tanHalfV:u,cameraHelioKm:c,maxDistSqKm:s,mouseX:i,mouseY:l,projectStarToScreenPx:f}=t,p=Math.min(n,e.length/3,o.length,r.length);let m=null;for(let h=0;h<p;h+=1){const d=h*3,g=e[d],S=e[d+1],P=e[d+2];if(!$t(g,S,P,r[h]??0,c.x,c.y,c.z,s))continue;const w=g-a.position.x,M=S-a.position.y,b=P-a.position.z,y=w*a.forward.x+M*a.forward.y+b*a.forward.z;if(y<=1e-6)continue;const C=w*a.right.x+M*a.right.y+b*a.right.z,j=w*a.up.x+M*a.up.y+b*a.up.z,v=u*a.aspect*y;if(Math.abs(C)>v)continue;const x=u*y;if(Math.abs(j)>x)continue;const F=y,T=ce(),z=fe();if(z<=0)continue;f(g,S,P,G);const _=G.px-i,A=G.py-l,E=_*_+A*A;if(E>z*z)continue;const L={index:h,distSqPx:E,depthCam:F,renderedPx:T};ut(L,m)&&(m=L)}return m}var X=new D,$=new D;function me(t,e,o,r,n,a,u,c,s,i,l,f,p){const m=o.getBoundingClientRect();return mt({positions:a,sizes:u,distancesKm:c,starCount:s,uScale:ft(m.height,r.fov*Math.PI/180),camFrustum:i,tanHalfV:l,cameraHelioKm:f,maxDistSqKm:p,mouseX:t-m.left,mouseY:e-m.top,projectStarToScreenPx:(h,d,g,S)=>{X.set(h,d,g),X.applyMatrix4(n.matrixWorld),$.copy(X).project(r),S.px=($.x*.5+.5)*m.width,S.py=(-$.y*.5+.5)*m.height}})}function he(t){const{cameraThree:e,pickerScratch:o,syncScratch:r}=t;Rt(e,o.frustum,r.forward,r.right,r.up);const{tanHalfV:n,maxDistSqKm:a}=st(o);return ct({starsInView:t.starsInView,chunks:t.chunks,prepared:{tanHalfV:n,maxDistSqKm:a},pickInChunk:(u,c,s)=>{const i=t.pointsMeshes[c],l=t.chunkDistancesKm[c],f=t.chunkOriginalSizes[c];return!i||!l||!f?null:me(t.clientX,t.clientY,t.canvas,e,i,u.positions,f,l,u.starsInChunk.length,o.frustum,s.tanHalfV,o.cameraHelioKm,s.maxDistSqKm)}})}var K=new k,de=ht.Identity();function pe(t,e,o,r,n,a,u,c,s,i,l,f,p,m,h){const d=o.getBoundingClientRect(),g=r.getEngine(),S=n.viewport.toGlobal(g.getRenderWidth(),g.getRenderHeight()),P=r.getTransformMatrix();return mt({positions:u,sizes:c,distancesKm:s,starCount:i,uScale:l,camFrustum:f,tanHalfV:p,cameraHelioKm:m,maxDistSqKm:h,mouseX:t-d.left,mouseY:e-d.top,projectStarToScreenPx:(w,M,b,y)=>{K.set(w,M,b),k.TransformCoordinatesToRef(K,a,K);const C=k.Project(K,de,P,S);y.px=C.x,y.py=C.y}})}function ve(t){const{scene:e,camera:o,host:r,pickerScratch:n}=t,a=ft(e.getEngine().getRenderHeight(),o.fov);Et(o,r,n.frustum);const{tanHalfV:u,maxDistSqKm:c}=st(n);return ct({starsInView:t.starsInView,chunks:t.chunks,prepared:{uScale:a,tanHalfV:u,maxDistSqKm:c},pickInChunk:(s,i,l)=>{const f=t.chunkStarCounts[i]??s.starsInChunk.length;if(f<=0)return null;const p=t.chunkDistancesKm[i],m=t.chunkPositions[i]??s.positions,h=t.chunkSizes[i]??s.sizes;return p?pe(t.clientX,t.clientY,t.canvas,e,o,t.starfieldWm,m,h,p,f,l.uScale,n.frustum,l.tanHalfV,n.cameraHelioKm,l.maxDistSqKm):null}})}function ge(t){return t.kind==="babylon"?ve(t):he(t)}var R={chunks:[],pointsMeshes:[],starsInView:[]};function He(){return R}function Be(t,e){const o=at(t),r=o.layers.starfield,{starsInViewRef:n,getStarData:a,getStatus:u}=e,c=ie(t),s=[],i=[],l=[],f=[],p=[],m=oe(),h=re();let d=0;const g=new pt,S=new vt,P=new St,w=Yt(),M=new D,b=new D,y=new D;function C(){for(const v of l)v.dispose();l.length=0;for(const v of s)v.dispose();s.length=0,i.length=0,f.length=0,p.length=0}function j(v){R.chunks=v,R.pointsMeshes=i,R.starsInView=n.current}return{refresh(){C();const v=jt(a,u,f);for(const x of v){p.push(new Float32Array(x.sizes));const F=c.createChunk({layer:"starfield",meshName:`cosmosive-starfield-points-${x.abbr.replace(/[^a-zA-Z0-9_-]/g,"_")}`,material:m,attributes:[{name:"position",data:x.positions,components:3},{name:"size",data:x.sizes,components:1},{name:"color",data:x.colors,components:3},{name:"warm",data:x.warm,components:1},{name:"brightness",data:x.brightness,components:1},{name:"mag",data:x.mag,components:1}]});s.push(F);const T=F.meshRef;i.push(T),l.push(se(T,r,h))}j(v)},advanceTime(v){d+=v,m.uniforms.uTime&&(m.uniforms.uTime.value=d),h.uniforms.uTime&&(h.uniforms.uTime.value=d)},countFrustum(){let v=0,x=0;const F=l.map(z=>z.mesh),T=[...i,...F];if(T.length>0){const z=o.cameraThree;z.updateMatrixWorld(!0),g.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),S.setFromProjectionMatrix(g);for(const _ of T){const A=_.geometry;A.boundingSphere||A.computeBoundingSphere();const E=A.boundingSphere;if(!E)continue;P.copy(E).applyMatrix4(_.matrixWorld);const L=A.getAttribute("position");x+=L?.count??0,S.intersectsSphere(P)&&(v+=1)}}return{total:T.length,visible:v,verts:x}},pickFromClick({clientX:v,clientY:x,canvas:F}){return ge({kind:"r3f",clientX:v,clientY:x,canvas:F,starsInView:n.current,chunks:R.chunks,chunkDistancesKm:f,chunkOriginalSizes:p,cameraThree:o.cameraThree,pointsMeshes:i,pickerScratch:w,syncScratch:{forward:M,right:b,up:y}})},dispose(){C(),m.dispose(),h.dispose(),R.chunks=[],R.pointsMeshes=[],R.starsInView=[]}}}function q(t){return new U(t[0],t[1],t[2])}function xe(){return{cool:q(I.star4),warm:q(I.star3),hot:q(I.star2),flare:q(I.star1)}}var Se=`
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
`,ye=`
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
`;function Ve(t){return t==null||Array.isArray(t)||!(t instanceof W)?!1:t.userData.cosmosiveSunPhotosphere===!0}function Ne(t,e){const o=xe(),r={cool:t?.cool??o.cool,warm:t?.warm??o.warm,hot:t?.hot??o.hot,flare:t?.flare??o.flare},n={uTime:{value:0},uTurbulence:{value:1},uGranulationScale:{value:6},uLimbStrength:{value:1.4},uEmissiveBoost:{value:2.4},uOpacity:{value:1},uPaletteCool:{value:r.cool.clone()},uPaletteWarm:{value:r.warm.clone()},uPaletteHot:{value:r.hot.clone()},uPaletteFlare:{value:r.flare.clone()}},a=new W({uniforms:n,vertexShader:Se,fragmentShader:ye,transparent:e?.transparent??!1,depthWrite:e?.depthWrite??!0,toneMapped:!1});return a.userData.cosmosiveSunPhotosphere=!0,a}var Pe=`
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
`,we=`
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
`;function Y(t){return new U(t[0],t[1],t[2])}function Me(){return{warm:Y(I.star3),hot:Y(I.star2),flare:Y(I.star1)}}function Oe(t){return t==null||Array.isArray(t)||!(t instanceof W)?!1:t.userData.cosmosiveSunCorona===!0}function Ke(t){const e=Me(),o={warm:t?.warm??e.warm,hot:t?.hot??e.hot,flare:t?.flare??e.flare},r={uTime:{value:0},uIntensity:{value:1.4},uPaletteWarm:{value:o.warm.clone()},uPaletteHot:{value:o.hot.clone()},uPaletteFlare:{value:o.flare.clone()}},n=new W({uniforms:r,vertexShader:Pe,fragmentShader:we,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1});return n.userData.cosmosiveSunCorona=!0,n}export{Et as C,Te as D,Fe as E,Dt as S,Ft as T,Ie as _,Be as a,Ae as b,ie as c,_e as d,De as f,it as g,Ee as h,Ve as i,Yt as l,We as m,Oe as n,He as o,Le as p,Ne as r,ge as s,Ke as t,jt as u,I as v,Rt as w,Re as x,O as y};
