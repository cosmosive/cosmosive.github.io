import{i as L}from"./rolldown-runtime-BOC55nOF.js";import{p as j}from"./r3f-vendor-D47J47SK.js";import{n as q}from"./state-data-vendor-yuKHXx2_.js";import{R as _,V as B,bt as p,dt as O,lt as V,p as x,w as P,yt as Q}from"./three-vendor-BZgPQKFQ.js";import{Jn as U,Uo as k,Va as S,a as I,cr as z,hn as W,uo as M}from"./index-DWNzzCQW.js";import{n as G,r as H,t as Y}from"./sceneModule-ClX32rlt.js";import{n as J,t as N}from"./queryCacheNotify-BkUP6Afh.js";var C=L(j(),1),K=z.far/4,X=10,h=10,$=17,Z=9,ee=`
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
`,ae=`
uniform float uTime;
uniform float uRadius;
uniform float uIntensity;
uniform float uStructureScale;
uniform float uQuality;
uniform float uWarpStrength;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform vec3 uMorphScale;
uniform vec3 uWarpAxis;
uniform vec3 uDriftVec;
uniform vec3 uSeedOffset;
uniform vec2 uMorphAngles;
varying vec3 vWorldPos;
varying vec3 vLocalPos;
varying vec3 vNormalDir;

vec2 rotate2D(vec2 p, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
}

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
  float amp = 0.55;
  float freq = 1.0;
  for (int i = 0; i < 3; i += 1) {
    value += amp * noise3(p * freq);
    freq *= 1.92;
    amp *= 0.5;
  }
  if (uQuality > 0.5) {
    value += 0.04 * noise3(p * 6.8);
  }
  return value;
}

void main() {
  vec3 fragToCam = normalize(cameraPosition - vWorldPos);
  float cosA = clamp(dot(normalize(vNormalDir), fragToCam), -1.0, 1.0);
  float sinA = sqrt(max(0.0, 1.0 - cosA * cosA));

  vec3 q = vLocalPos / max(uRadius, 0.0001);
  q.xy = rotate2D(q.xy, uMorphAngles.x);
  q.xz = rotate2D(q.xz, uMorphAngles.y);
  q /= max(uMorphScale, vec3(0.001));
  vec3 macroCoord = q * 1.3 + uSeedOffset * 1.7;
  float macro = fbm3(macroCoord);
  float macroMask = smoothstep(0.40, 0.58, macro);
  float silhouetteMask = 1.0 - smoothstep(0.65, 0.92, sinA);
  float boundary = macroMask * silhouetteMask;
  if (boundary < 0.02) {
    discard;
  }

  vec3 noisePoint = q * uStructureScale + uSeedOffset;
  noisePoint += uWarpAxis * (fbm3(q * 1.6 + uSeedOffset * 0.3) - 0.5) * uWarpStrength;
  noisePoint += uTime * uDriftVec;

  float primary = fbm3(noisePoint);
  float secondary = fbm3(noisePoint * 2.0 + vec3(5.0, -2.0, 3.4));
  float clouds = smoothstep(0.42, 0.82, primary);
  float voids = 1.0 - smoothstep(0.40, 0.86, secondary);
  float density = clouds * voids * boundary;
  if (density < 0.02) {
    discard;
  }
  float spike = smoothstep(0.62, 0.92, primary) * density;
  float limb = mix(1.0, 0.55, sinA);

  float intensity = (density * 1.4 + spike * 0.9) * limb * uIntensity;
  vec3 col = mix(uColorA, uColorB, density);
  col = mix(col, uColorC, spike);
  gl_FragColor = vec4(col * intensity, clamp(density * limb, 0.0, 1.0));
}
`;function oe(e){let a=17;for(let o=0;o<e.length;o+=1)a=(a*31+e.charCodeAt(o))%104729;return a/104729}function s(e,a){const o=Math.sin((e+a)*43758.5453123)*12589.317;return o-Math.floor(o)}function te(e){if(!Number.isFinite(e.distPc)||e.distPc<=0||!Number.isFinite(e.majAxArcmin)||(e.majAxArcmin??0)<=0)return 0;const a=_.degToRad(e.majAxArcmin/120),o=k(e.distPc*Math.tan(a));return!Number.isFinite(o)||o<=0?0:Math.min(o,K)}function re(e,a){const o=Number.isFinite(e.majAxArcmin)?Math.max(e.majAxArcmin??0,4):4,n=Number.isFinite(e.minAxArcmin)&&(e.minAxArcmin??0)>0?Math.min(1,Math.max(.2,(e.minAxArcmin??o)/o)):null,t=e.type==="planetary_nebula"?.72+s(a,.11)*.2:.34+s(a,.11)*.42,i=n??t,f=e.type==="planetary_nebula"?Math.max(i,.72+s(a,.29)*.2):Math.max(.28,i*(.68+s(a,.29)*.3)),l=Number.isFinite(e.positionAngleDeg)?_.degToRad(e.positionAngleDeg??0):s(a,.47)*Math.PI*2,c=(s(a,.67)-.5)*(e.type==="planetary_nebula"?.22:.58),u=new p(s(a,.81)-.5,s(a,1.03)-.5,s(a,1.29)-.5);u.lengthSq()<1e-8&&u.set(.3,-.2,.5),u.normalize();const m=e.type==="planetary_nebula"?.42+s(a,1.41)*.2:.78+s(a,1.41)*.5;return{morphAngleRad:l,morphScale:new p(1,i,f),morphTiltRad:c,warpAxis:u,warpStrength:m}}function R(e){return Math.min(1,Math.max(0,e))}function A(e,a,o){return new x().setHSL(e,R(a),R(o))}function ne(e,a){if((e.openNgcTypeRaw??"").toUpperCase()==="DRKN")return{colorA:new x(1774351),colorB:new x(3416600),colorC:new x(8014375),intensityScale:.7};const o=(a%h+h)%h,n=($/360+o/h)%1,t=o===Z,i=o%2===0?.3:.65,f=A(n,t?.32:.62,.08),l=A(n,t?.4:.9,t?.3:i),c=A(n,t?.3:.65,t?.62:.82);return e.type==="planetary_nebula"&&c.lerp(A(.52,.54,.74),.22),{colorA:f,colorB:l,colorC:c,intensityScale:e.type==="planetary_nebula"?1.6:1.4}}function ie(e,a,o,n){return{uTime:{value:0},uRadius:{value:e},uIntensity:{value:1.5*n.intensityScale},uStructureScale:{value:4.5},uQuality:{value:0},uWarpStrength:{value:o.warpStrength},uColorA:{value:n.colorA.clone()},uColorB:{value:n.colorB.clone()},uColorC:{value:n.colorC.clone()},uSeedOffset:{value:new p(a*3.1,(a+.17)*2.6,(a+.31)*4.2)},uMorphScale:{value:o.morphScale},uWarpAxis:{value:o.warpAxis},uDriftVec:{value:new p(.009+s(a,2.11)*.005,-.006+s(a,2.47)*.004,.007+s(a,2.79)*.005)},uMorphAngles:{value:new Q(o.morphAngleRad,o.morphTiltRad)}}}function se(e,a){const o=U(e),n=new p(o.x,o.y,o.z),t=te(e),i=oe(e.catalogId),f=ie(t,i,re(e,i),ne(e,a)),l=new O(t,40,28),c=new V({uniforms:f,vertexShader:ee,fragmentShader:ae,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1}),u=new B(l,c);u.frustumCulled=!1,u.renderOrder=-10;const m=new P;return m.name=`nebula-${e.catalogId}`,m.position.copy(n),m.add(u),{group:m,material:c,mesh:u}}function ue(e){e.mesh.geometry.dispose(),e.material.dispose()}function w(e,a){const o=a==="ultra";for(const n of e)n.material.uniforms.uQuality.value=o?1:0}function le(){const e=J().filter(a=>!(a.type!=="nebula"&&a.type!=="planetary_nebula"||!Number.isFinite(a.distPc)||a.distPc<=0||!Number.isFinite(a.majAxArcmin)||(a.majAxArcmin??0)<=0));return e.sort((a,o)=>{const n=+!!o.featured-+!!a.featured;if(n!==0)return n;const t=Number.isFinite(a.majAxArcmin)?a.majAxArcmin??0:0,i=(Number.isFinite(o.majAxArcmin)?o.majAxArcmin??0:0)-t;return i!==0?i:a.distPc-o.distPc}),e.slice(0,X)}function ce(e){const a=W(e).layers.dso,o=new P;o.name="nebulaVolumeLayer",a.add(o);const n=I(),t=[],i=M.getState(),f={current:i.showNebulaClouds},l={current:i.nebulaQuality},c={current:S().getState().universeMode.mode},u={current:0},m={current:performance.now()},b=()=>{o.visible=f.current&&c.current==="cosmos"&&t.length>0},y=()=>{for(;t.length>0;){const r=t.pop();r!=null&&(o.remove(r.group),ue(r))}},g=()=>{y(),le().forEach((r,d)=>{const v=se(r,d);t.push(v),o.add(v.group)}),w(t,l.current),b()};g();const D=M.subscribe(r=>({showNebulaClouds:r.showNebulaClouds,nebulaQuality:r.nebulaQuality}),r=>{f.current=r.showNebulaClouds,l.current!==r.nebulaQuality&&(l.current=r.nebulaQuality,w(t,l.current)),b()},{equalityFn:q}),E=S().subscribeSelector(r=>r.universeMode.mode,r=>{c.current=r,b()}),F=n.getQueryCache().subscribe(r=>{(N(r,"openngc-dso-catalog")||N(r,"custom-objects-catalog"))&&g()});return{onFrame:r=>{if(!o.visible)return;const d=performance.now(),v=Math.min(.06,Math.max(0,(d-m.current)/1e3));m.current=d,u.current+=v;for(const T of t)T.material.uniforms.uTime.value=u.current},dispose:()=>{D(),E(),F(),y(),a.remove(o)}}}function ye(){const e=H(),a=(0,C.useRef)(null);return(0,C.useLayoutEffect)(()=>{const o=ce(e);return a.current=o.onFrame,()=>{o.dispose(),a.current=null}},[e]),G(()=>a.current?.(),Y.HUD_BRIDGE),null}export{ye as NebulaVolumeMountR3f};
