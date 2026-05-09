import{i as L}from"./rolldown-runtime-BOC55nOF.js";import{p as q}from"./r3f-vendor-D47J47SK.js";import{n as j}from"./state-data-vendor-yuKHXx2_.js";import{R as _,V as B,bt as p,dt as O,lt as V,p as x,w as P,yt as Q}from"./three-vendor-BZgPQKFQ.js";import{Va as S,Yn as I,a as U,lr as k,mn as z,qo as W,uo as M}from"./index-Bu6BaRv8.js";import{n as G,r as H,t as Y}from"./sceneModule-ClX32rlt.js";import{n as K,t as N}from"./queryCacheNotify-DSSlECdJ.js";var C=L(q(),1),X=k.far/4,J=10,h=10,$=17,Z=9,ee=`
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
`;function te(e){let a=17;for(let t=0;t<e.length;t+=1)a=(a*31+e.charCodeAt(t))%104729;return a/104729}function s(e,a){const t=Math.sin((e+a)*43758.5453123)*12589.317;return t-Math.floor(t)}function oe(e){if(!Number.isFinite(e.distPc)||e.distPc<=0||!Number.isFinite(e.majAxArcmin)||(e.majAxArcmin??0)<=0)return 0;const a=_.degToRad(e.majAxArcmin/120),t=W(e.distPc*Math.tan(a));return!Number.isFinite(t)||t<=0?0:Math.min(t,X)}function re(e,a){const t=Number.isFinite(e.majAxArcmin)?Math.max(e.majAxArcmin??0,4):4,n=Number.isFinite(e.minAxArcmin)&&(e.minAxArcmin??0)>0?Math.min(1,Math.max(.2,(e.minAxArcmin??t)/t)):null,o=e.type==="planetary_nebula"?.72+s(a,.11)*.2:.34+s(a,.11)*.42,i=n??o,f=e.type==="planetary_nebula"?Math.max(i,.72+s(a,.29)*.2):Math.max(.28,i*(.68+s(a,.29)*.3)),u=Number.isFinite(e.positionAngleDeg)?_.degToRad(e.positionAngleDeg??0):s(a,.47)*Math.PI*2,c=(s(a,.67)-.5)*(e.type==="planetary_nebula"?.22:.58),l=new p(s(a,.81)-.5,s(a,1.03)-.5,s(a,1.29)-.5);l.lengthSq()<1e-8&&l.set(.3,-.2,.5),l.normalize();const m=e.type==="planetary_nebula"?.42+s(a,1.41)*.2:.78+s(a,1.41)*.5;return{morphAngleRad:u,morphScale:new p(1,i,f),morphTiltRad:c,warpAxis:l,warpStrength:m}}function R(e){return Math.min(1,Math.max(0,e))}function A(e,a,t){return new x().setHSL(e,R(a),R(t))}function ne(e,a){if((e.openNgcTypeRaw??"").toUpperCase()==="DRKN")return{colorA:new x(1774351),colorB:new x(3416600),colorC:new x(8014375),intensityScale:.7};const t=(a%h+h)%h,n=($/360+t/h)%1,o=t===Z,i=t%2===0?.3:.65,f=A(n,o?.32:.62,.08),u=A(n,o?.4:.9,o?.3:i),c=A(n,o?.3:.65,o?.62:.82);return e.type==="planetary_nebula"&&c.lerp(A(.52,.54,.74),.22),{colorA:f,colorB:u,colorC:c,intensityScale:e.type==="planetary_nebula"?1.6:1.4}}function ie(e,a,t,n){return{uTime:{value:0},uRadius:{value:e},uIntensity:{value:1.5*n.intensityScale},uStructureScale:{value:4.5},uQuality:{value:0},uWarpStrength:{value:t.warpStrength},uColorA:{value:n.colorA.clone()},uColorB:{value:n.colorB.clone()},uColorC:{value:n.colorC.clone()},uSeedOffset:{value:new p(a*3.1,(a+.17)*2.6,(a+.31)*4.2)},uMorphScale:{value:t.morphScale},uWarpAxis:{value:t.warpAxis},uDriftVec:{value:new p(.009+s(a,2.11)*.005,-.006+s(a,2.47)*.004,.007+s(a,2.79)*.005)},uMorphAngles:{value:new Q(t.morphAngleRad,t.morphTiltRad)}}}function se(e,a){const t=I(e),n=new p(t.x,t.y,t.z),o=oe(e),i=te(e.catalogId),f=ie(o,i,re(e,i),ne(e,a)),u=new O(o,40,28),c=new V({uniforms:f,vertexShader:ee,fragmentShader:ae,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1}),l=new B(u,c);l.frustumCulled=!1,l.renderOrder=-10;const m=new P;return m.name=`nebula-${e.catalogId}`,m.position.copy(n),m.add(l),{group:m,material:c,mesh:l}}function le(e){e.mesh.geometry.dispose(),e.material.dispose()}function w(e,a){const t=a==="ultra";for(const n of e)n.material.uniforms.uQuality.value=t?1:0}function ue(){const e=K().filter(a=>!(a.type!=="nebula"&&a.type!=="planetary_nebula"||!Number.isFinite(a.distPc)||a.distPc<=0||!Number.isFinite(a.majAxArcmin)||(a.majAxArcmin??0)<=0));return e.sort((a,t)=>{const n=+!!t.featured-+!!a.featured;if(n!==0)return n;const o=Number.isFinite(a.majAxArcmin)?a.majAxArcmin??0:0,i=(Number.isFinite(t.majAxArcmin)?t.majAxArcmin??0:0)-o;return i!==0?i:a.distPc-t.distPc}),e.slice(0,J)}function ce(e){const a=z(e).layers.dso,t=new P;t.name="nebulaVolumeLayer",a.add(t);const n=U(),o=[],i=M.getState(),f={current:i.showNebulaClouds},u={current:i.nebulaQuality},c={current:S().getState().universeMode.activeGalaxyId!==null},l={current:0},m={current:performance.now()},b=()=>{t.visible=f.current&&!c.current&&o.length>0},y=()=>{for(;o.length>0;){const r=o.pop();r!=null&&(t.remove(r.group),le(r))}},g=()=>{y(),ue().forEach((r,v)=>{const d=se(r,v);o.push(d),t.add(d.group)}),w(o,u.current),b()};g();const D=M.subscribe(r=>({showNebulaClouds:r.showNebulaClouds,nebulaQuality:r.nebulaQuality}),r=>{f.current=r.showNebulaClouds,u.current!==r.nebulaQuality&&(u.current=r.nebulaQuality,w(o,u.current)),b()},{equalityFn:j}),E=S().subscribeSelector(r=>r.universeMode.activeGalaxyId,r=>{c.current=r!==null,b()}),F=n.getQueryCache().subscribe(r=>{(N(r,"openngc-dso-catalog")||N(r,"custom-objects-catalog"))&&g()});return{onFrame:r=>{if(!t.visible)return;const v=performance.now(),d=Math.min(.06,Math.max(0,(v-m.current)/1e3));m.current=v,l.current+=d;for(const T of o)T.material.uniforms.uTime.value=l.current},dispose:()=>{D(),E(),F(),y(),a.remove(t)}}}function ye(){const e=H(),a=(0,C.useRef)(null);return(0,C.useLayoutEffect)(()=>{const t=ce(e);return a.current=t.onFrame,()=>{t.dispose(),a.current=null}},[e]),G(()=>a.current?.(),Y.HUD_BRIDGE),null}export{ye as NebulaVolumeMountR3f};
