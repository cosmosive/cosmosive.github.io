import{i as ee}from"./rolldown-runtime-BrVt6FZ6.js";import{p as te}from"./r3f-vendor-CDxlTQ1A.js";import{v as $}from"./sceneRuntimeTypes-CEvW8e0J.js";import{t as w}from"./clamp01-DwraWUL9.js";import{Dt as oe,Et as ne,K as T,_ as I,d as re,et as G,gt as z,mt as ae,tt as se}from"./three-vendor-DtGC8FGl.js";import{dn as B,fn as X}from"./index-Be60UNKa.js";import{f as ie,i as ce,t as ue}from"./r3fHostExtras-C-UhF0Mu.js";import{T as le,a as b,g,r as fe,s as j,t as he,v as P,w as pe,y as de}from"./sunCoronaMaterial-DFNes3fZ.js";var W=ee(te(),1),me=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Se=`
uniform float uIntensity;
uniform vec3 uColorCore;
uniform vec3 uColorStreak;
varying vec2 vUv;

void main() {
  // Centered sprite coords in [-1, 1].
  vec2 p = (vUv - 0.5) * 2.0;
  float r = length(p);

  // Soft round halo: bright center falling to nothing at the quad edge.
  float halo = exp(-r * 3.0);

  // Anamorphic cross streak. Each term is a thin glow along one axis whose
  // perpendicular thickness is set by the exp() falloff; the (1 - |axis|)
  // taper fades the streak toward the sprite edge so it stays inside the quad.
  float horiz = exp(-abs(p.y) * 26.0) * max(0.0, 1.0 - abs(p.x));
  float vert = exp(-abs(p.x) * 26.0) * max(0.0, 1.0 - abs(p.y));
  float streak = horiz + vert * 0.45;

  // Square-aware edge window: the halo's circular exp() falloff is still ~0.05 at the quad border,
  // so on an additive square quad it leaves a hard "window pane" outline. Fade glow to zero by the
  // quad edge (chebyshev distance, matching the quad shape) to kill that boundary.
  float edge = max(abs(p.x), abs(p.y));
  float window = 1.0 - smoothstep(0.7, 1.0, edge);
  float glow = (halo + streak) * window;
  if (glow < 0.002) discard;

  // Streaks lean toward the hotter flare color; the halo keeps the core color.
  vec3 col = mix(uColorCore, uColorStreak, clamp(streak, 0.0, 1.0));
  float a = clamp(glow * uIntensity, 0.0, 1.0);
  gl_FragColor = vec4(col * uIntensity * glow, a);
}
`;function ve(e){const t={uIntensity:{value:0},uColorCore:{value:e.core.clone()},uColorStreak:{value:e.streak.clone()}},o=new ae({uniforms:t,vertexShader:me,fragmentShader:Se,transparent:!0,depthWrite:!1,depthTest:!1,blending:2,toneMapped:!1});return o.userData.cosmosiveSunFlare=!0,o}var _=P("#d6ebff"),D=P("#f5c238"),ge=.01;function x(e){return[e[0],e[1],e[2]]}function we(){return{cool:x(b.star4),warm:x(b.star3),hot:x(b.star2),flare:x(b.star1)}}function ye(e){return typeof e.c=="string"&&e.c.length>0?P(`#${e.c}`):x(b.star2)}function Me(e){return typeof e.warm=="number"&&Number.isFinite(e.warm)?w(e.warm):ge}function be(e){const t=we(),o=ye(e),i=Me(e),a=1-i;return{cool:g(g(t.cool,_,a*.7),o,.2),warm:g(g(t.warm,o,.45),D,i*.6),hot:g(g(t.hot,o,.75),_,a*.35),flare:g(g(g(t.flare,o,.35),D,i*.45),_,a*.2)}}function C(e){return new I(e[0],e[1],e[2])}function xe(e){const t=be(e);return{cool:C(t.cool),warm:C(t.warm),hot:C(t.hot),flare:C(t.flare)}}var A=3,Ce=4,K=2,Re=200,Fe=1,H=32,Te=24,_e=16,Ie=7,R=new oe,L=new ne;function Ee(e,t){return e.getSize(L),L.y/(2*Math.tan(t.fov*Math.PI/360))}function M(e){return String(e.id)}function Pe(e){return typeof e.warm=="number"&&Number.isFinite(e.warm)?w(e.warm):.01}function Ae(e){return typeof e.br=="number"&&Number.isFinite(e.br)?w(e.br):1}function J(e){return`fusion-star:${e}`}function ke(e,t,o){const i=xe(t),a=Pe(t),n=Ae(t),c=new z(o,H,H),r=fe(i,{transparent:!0,depthWrite:!1});r.uniforms.uTurbulence.value=.75+a*.65,r.uniforms.uGranulationScale.value=4.8+(1-a)*2.8,r.uniforms.uLimbStrength.value=1.05+n*.45,r.uniforms.uEmissiveBoost.value=1.45+n*1.15;const l=new T(c,r);l.name=`cosmosive-stars-with-fusion-${M(t)}`,l.frustumCulled=!1;const d=1.55+a*.5,m=new z(o*d,Te,_e),f=he(i);f.uniforms.uIntensity.value=.85+n*.8+(1-a)*.2;const s=f.uniforms.uIntensity.value,h=new T(m,f);h.name=`cosmosive-stars-with-fusion-corona-${M(t)}`,h.frustumCulled=!1,h.renderOrder=1;const p=o*Ie*2,u=new se(p,p),S=ve({core:new I(i.warm),streak:new I(i.flare)}),F=.55+n*.8+(1-a)*.15,v=new T(u,S);v.name=`cosmosive-stars-with-fusion-flare-${M(t)}`,v.frustumCulled=!1,v.renderOrder=2;const y=X(t);l.position.set(y.x,y.y,y.z),h.position.copy(l.position),v.position.copy(l.position),e.add(l),e.add(h),e.add(v);const k=M(t);return pe(J(k),(Q,Y,Z)=>{const O=y.x-Q,q=y.y-Y,N=y.z-Z;return Math.max(0,Math.sqrt(O*O+q*q+N*N)-o)}),{id:k,baseCoronaIntensity:s,baseFlareIntensity:F,photosphereGeometry:c,photosphereMaterial:r,photosphereMesh:l,coronaGeometry:m,coronaMaterial:f,coronaMesh:h,flareGeometry:u,flareMaterial:S,flareMesh:v,elapsedSec:0,phase:"promoting",transition:0,pointRef:null}}function U(e,t){le(J(t.id)),e.remove(t.photosphereMesh),e.remove(t.coronaMesh),e.remove(t.flareMesh),t.photosphereGeometry.dispose(),t.photosphereMaterial.dispose(),t.coronaGeometry.dispose(),t.coronaMaterial.dispose(),t.flareGeometry.dispose(),t.flareMaterial.dispose()}function V(e){const t=j();for(let o=0;o<t.chunks.length;o+=1){const i=t.chunks[o],a=t.pointsMeshes[o];if(!(!i||!a))for(let n=0;n<i.starsInChunk.length;n+=1){const c=i.starsInChunk[n];if(!c||String(c.id)!==e)continue;const r=a.geometry.getAttribute("size");return r instanceof re?{attribute:r,index:n}:null}}return null}function E(e,t){if(e==null)return;const o=w(t),{attribute:i,index:a}=e;i.setX(a,o),i.needsUpdate=!0}function Oe(e,t,o,i,a){const n=[];for(let c=0;c<e.length;c+=1){const r=e[c];if(!r)continue;const l=X(r),d=l.x-o,m=l.y-i,f=l.z-a,s=d*d+m*m+f*f,h=Math.sqrt(s);if(h<=0)continue;const p=2*$(r,B(r))*t/h;p<K||n.push({star:r,distSq:s,screenPx:p})}return n.sort((c,r)=>c.distSq-r.distSq),n.slice(0,A)}function qe(e,t,o=A,i=Ce,a=K){const n=[];for(let c=0;c<e.length;c+=1){const r=e[c];if(!r)continue;const l=t.has(r.id);if((l&&r.screenPx>=a||!l&&r.screenPx>=i)&&n.push(r.id),n.length>=o)break}return n}function Ne(e,t,o=Fe){const i=t/Math.max(o,1e-4);if(e.phase==="promoting"){const a=w(e.transition+i);return{phase:a>=1?"promoted":"promoting",transition:a}}return e.phase==="demoting"?{phase:"demoting",transition:w(e.transition-i)}:e}function Ge(e){return $(e,B(e))}function ze(e){const t=w(e.transition),o=1-t;E(e.pointRef,o),e.photosphereMesh.visible=t>.01,e.coronaMesh.visible=t>.01,e.flareMesh.visible=t>.01,e.photosphereMaterial.uniforms.uOpacity.value=t,e.coronaMaterial.uniforms.uIntensity.value=e.baseCoronaIntensity*t,e.flareMaterial.uniforms.uIntensity.value=e.baseFlareIntensity*t}function We(e){const{cameraThree:t,gl:o,layers:i}=ue(e),a=i.starfield,n=new Map;let c=-1/0,r=performance.now();function l(){if(!(t instanceof G))return;de(t,R);const d=Ee(o,t),m=j().starsInView,f=Oe(m,d,R.x,R.y,R.z),s=[];for(let p=0;p<f.length;p+=1){const u=f[p];if(!u)continue;const S=M(u.star);s.push({id:S,distSq:u.distSq,screenPx:u.screenPx})}const h=new Set(qe(s,new Set(n.keys()),A));for(const[p,u]of n){if(h.has(p)){u.phase==="demoting"&&(u.phase="promoting");continue}u.phase!=="demoting"&&(u.phase="demoting")}for(let p=0;p<f.length;p+=1){const u=f[p];if(!u)continue;const S=M(u.star);if(!h.has(S)||n.has(S))continue;const F=Ge(u.star),v=ke(a,u.star,F);v.pointRef=V(S),n.set(S,v)}}return{onFrame:()=>{const d=performance.now(),m=Math.min(.06,Math.max(0,(d-r)/1e3));r=d,d-c>=Re&&(c=d,l());for(const[f,s]of n){const h=Ne({phase:s.phase,transition:s.transition},m);s.phase=h.phase,s.transition=h.transition,s.pointRef==null&&(s.pointRef=V(f)),s.elapsedSec+=m,s.photosphereMaterial.uniforms.uTime.value=s.elapsedSec,s.coronaMaterial.uniforms.uTime.value=s.elapsedSec,t instanceof G&&s.flareMesh.quaternion.copy(t.quaternion),ze(s),s.phase==="demoting"&&s.transition<=0&&(E(s.pointRef,1),U(a,s),n.delete(f))}},dispose:()=>{for(const[d,m]of n)E(m.pointRef,1),U(a,m),n.delete(d)}}}function je(){const e=ie(),t=(0,W.useRef)(null);return(0,W.useLayoutEffect)(()=>{const o=We(e);return t.current=o.onFrame,()=>{o.dispose(),t.current=null}},[e]),ce(()=>t.current?.(),"present.hud",1),null}export{je as StarsWithFusionMount};
