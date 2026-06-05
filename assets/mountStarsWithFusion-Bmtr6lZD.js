import{i as B}from"./rolldown-runtime-BrVt6FZ6.js";import{p as K}from"./r3f-vendor-CDxlTQ1A.js";import{d as z}from"./src--Dj6uCWZ.js";import{r as M}from"./activeOriginScenePos-DI3XOiL2.js";import{Dt as j,Et as J,K as b,_ as k,d as Q,et as T,gt as _,mt as Y,tt as Z}from"./three-vendor-DtGC8FGl.js";import{Kt as D,qt as W}from"./index-MktzlqV8.js";import{f as ee,i as te,t as ne}from"./r3fHostExtras-DrhaHBJo.js";import{C as oe,i as re,n as se,s as H,t as ae,w as ie,y as ce}from"./starPaletteFromEntry-C99C4qHi.js";var q=B(K(),1),ue=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,le=`
uniform float uIntensity;
uniform vec3 uColorCore;
uniform vec3 uColorStreak;
varying vec2 vUv;

void main() {
  // Centered sprite coords in [-1, 1].
  vec2 p = (vUv - 0.5) * 2.0;

  // Anamorphic cross streak. Each term is a thin glow along one axis whose
  // perpendicular thickness is set by the exp() falloff; the (1 - |axis|)
  // taper fades the streak toward the sprite edge so it stays inside the quad.
  float horiz = exp(-abs(p.y) * 26.0) * max(0.0, 1.0 - abs(p.x));
  float vert = exp(-abs(p.x) * 26.0) * max(0.0, 1.0 - abs(p.y));
  float streak = horiz + vert * 0.45;

  // Square-aware edge window: fade the glow to zero by the quad edge (chebyshev
  // distance, matching the quad shape) so the additive square leaves no outline.
  float edge = max(abs(p.x), abs(p.y));
  float window = 1.0 - smoothstep(0.7, 1.0, edge);
  float glow = streak * window;
  if (glow < 0.002) discard;

  // Streaks lean toward the hotter flare color; faint edges keep the core color.
  vec3 col = mix(uColorCore, uColorStreak, clamp(streak, 0.0, 1.0));
  float a = clamp(glow * uIntensity, 0.0, 1.0);
  gl_FragColor = vec4(col * uIntensity * glow, a);
}
`;function fe(e){const t={uIntensity:{value:0},uColorCore:{value:e.core.clone()},uColorStreak:{value:e.streak.clone()}},n=new Y({uniforms:t,vertexShader:ue,fragmentShader:le,transparent:!0,depthWrite:!1,depthTest:!1,blending:2,toneMapped:!1});return n.userData.cosmosiveSunFlare=!0,n}var F=3,pe=4,U=2,de=200,he=1,A=32,me=24,Se=16,ve=7,w=new j,N=new J;function ge(e,t){return e.getSize(N),N.y/(2*Math.tan(t.fov*Math.PI/360))}function y(e){return String(e.id)}function ye(e){return typeof e.warm=="number"&&Number.isFinite(e.warm)?M(e.warm):.01}function Me(e){return typeof e.br=="number"&&Number.isFinite(e.br)?M(e.br):1}function V(e){return`fusion-star:${e}`}function we(e,t,n){const i=ae(t),a=ye(t),o=Me(t),c=new _(n,A,A),r=re(i,{transparent:!0,depthWrite:!1});r.uniforms.uTurbulence.value=.75+a*.65,r.uniforms.uGranulationScale.value=4.8+(1-a)*2.8,r.uniforms.uLimbStrength.value=1.05+o*.45,r.uniforms.uEmissiveBoost.value=1.45+o*1.15;const l=new b(c,r);l.name=`cosmosive-stars-with-fusion-${y(t)}`,l.frustumCulled=!1;const h=1.55+a*.5,m=new _(n*h,me,Se),f=se(i);f.uniforms.uIntensity.value=.85+o*.8+(1-a)*.2;const s=f.uniforms.uIntensity.value,p=new b(m,f);p.name=`cosmosive-stars-with-fusion-corona-${y(t)}`,p.frustumCulled=!1,p.renderOrder=1;const d=n*ve*2,u=new Z(d,d),S=fe({core:new k(i.warm),streak:new k(i.flare)}),x=.55+o*.8+(1-a)*.15,v=new b(u,S);v.name=`cosmosive-stars-with-fusion-flare-${y(t)}`,v.frustumCulled=!1,v.renderOrder=2;const g=W(t);l.position.set(g.x,g.y,g.z),p.position.copy(l.position),v.position.copy(l.position),e.add(l),e.add(p),e.add(v);const I=y(t);return oe(V(I),(L,X,$)=>{const P=g.x-L,R=g.y-X,E=g.z-$;return Math.max(0,Math.sqrt(P*P+R*R+E*E)-n)}),{id:I,baseCoronaIntensity:s,baseFlareIntensity:x,photosphereGeometry:c,photosphereMaterial:r,photosphereMesh:l,coronaGeometry:m,coronaMaterial:f,coronaMesh:p,flareGeometry:u,flareMaterial:S,flareMesh:v,elapsedSec:0,phase:"promoting",transition:0,pointRef:null}}function O(e,t){ie(V(t.id)),e.remove(t.photosphereMesh),e.remove(t.coronaMesh),e.remove(t.flareMesh),t.photosphereGeometry.dispose(),t.photosphereMaterial.dispose(),t.coronaGeometry.dispose(),t.coronaMaterial.dispose(),t.flareGeometry.dispose(),t.flareMaterial.dispose()}function G(e){const t=H();for(let n=0;n<t.chunks.length;n+=1){const i=t.chunks[n],a=t.pointsMeshes[n];if(!(!i||!a))for(let o=0;o<i.starsInChunk.length;o+=1){const c=i.starsInChunk[o];if(!c||String(c.id)!==e)continue;const r=a.geometry.getAttribute("size");return r instanceof Q?{attribute:r,index:o}:null}}return null}function C(e,t){if(e==null)return;const n=M(t),{attribute:i,index:a}=e;i.setX(a,n),i.needsUpdate=!0}function xe(e,t,n,i,a){const o=[];for(let c=0;c<e.length;c+=1){const r=e[c];if(!r)continue;const l=W(r),h=l.x-n,m=l.y-i,f=l.z-a,s=h*h+m*m+f*f,p=Math.sqrt(s);if(p<=0)continue;const d=2*z(r,D(r))*t/p;d<U||o.push({star:r,distSq:s,screenPx:d})}return o.sort((c,r)=>c.distSq-r.distSq),o.slice(0,F)}function be(e,t,n=F,i=pe,a=U){const o=[];for(let c=0;c<e.length;c+=1){const r=e[c];if(!r)continue;const l=t.has(r.id);if((l&&r.screenPx>=a||!l&&r.screenPx>=i)&&o.push(r.id),o.length>=n)break}return o}function Ce(e,t,n=he){const i=t/Math.max(n,1e-4);if(e.phase==="promoting"){const a=M(e.transition+i);return{phase:a>=1?"promoted":"promoting",transition:a}}return e.phase==="demoting"?{phase:"demoting",transition:M(e.transition-i)}:e}function Fe(e){return z(e,D(e))}function Ie(e){const t=M(e.transition),n=1-t;C(e.pointRef,n),e.photosphereMesh.visible=t>.01,e.coronaMesh.visible=t>.01,e.flareMesh.visible=t>.01,e.photosphereMaterial.uniforms.uOpacity.value=t,e.coronaMaterial.uniforms.uIntensity.value=e.baseCoronaIntensity*t,e.flareMaterial.uniforms.uIntensity.value=e.baseFlareIntensity*t}function Pe(e){const{cameraThree:t,gl:n,layers:i}=ne(e),a=i.starfield,o=new Map;let c=-1/0,r=performance.now();function l(){if(!(t instanceof T))return;ce(t,w);const h=ge(n,t),m=H().starsInView,f=xe(m,h,w.x,w.y,w.z),s=[];for(let d=0;d<f.length;d+=1){const u=f[d];if(!u)continue;const S=y(u.star);s.push({id:S,distSq:u.distSq,screenPx:u.screenPx})}const p=new Set(be(s,new Set(o.keys()),F));for(const[d,u]of o){if(p.has(d)){u.phase==="demoting"&&(u.phase="promoting");continue}u.phase!=="demoting"&&(u.phase="demoting")}for(let d=0;d<f.length;d+=1){const u=f[d];if(!u)continue;const S=y(u.star);if(!p.has(S)||o.has(S))continue;const x=Fe(u.star),v=we(a,u.star,x);v.pointRef=G(S),o.set(S,v)}}return{onFrame:()=>{const h=performance.now(),m=Math.min(.06,Math.max(0,(h-r)/1e3));r=h,h-c>=de&&(c=h,l());for(const[f,s]of o){const p=Ce({phase:s.phase,transition:s.transition},m);s.phase=p.phase,s.transition=p.transition,s.pointRef==null&&(s.pointRef=G(f)),s.elapsedSec+=m,s.photosphereMaterial.uniforms.uTime.value=s.elapsedSec,s.coronaMaterial.uniforms.uTime.value=s.elapsedSec,t instanceof T&&s.flareMesh.quaternion.copy(t.quaternion),Ie(s),s.phase==="demoting"&&s.transition<=0&&(C(s.pointRef,1),O(a,s),o.delete(f))}},dispose:()=>{for(const[h,m]of o)C(m.pointRef,1),O(a,m),o.delete(h)}}}function Oe(){const e=ee(),t=(0,q.useRef)(null);return(0,q.useLayoutEffect)(()=>{const n=Pe(e);return t.current=n.onFrame,()=>{n.dispose(),t.current=null}},[e]),te(()=>t.current?.(),"present.hud",1),null}export{Oe as StarsWithFusionMount};
