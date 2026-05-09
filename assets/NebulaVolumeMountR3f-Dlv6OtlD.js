import{i as L}from"./rolldown-runtime-BOC55nOF.js";import{p as q}from"./r3f-vendor-BRgrcVsg.js";import{n as V}from"./state-data-vendor-CyHnElWR.js";import{$r as S,Si as M,Vt as O,a as Q,it as I,la as B}from"./index-0RQhzVLX.js";import{a as U,i as k,o as W,t as j}from"./r3fHostExtras-CuyrlSEU.js";import{R as _,V as z,bt as p,dt as G,lt as H,p as b,w as P,yt as Y}from"./three-vendor-Cq50JzVP.js";import{i as K,n as X,r as C}from"./dsoMajorNebula-bXSy2kvm.js";var R=L(q(),1),$=I.far/4,h=10,J=17,Z=9,ee=`
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
`;function oe(e){let o=17;for(let a=0;a<e.length;a+=1)o=(o*31+e.charCodeAt(a))%104729;return o/104729}function i(e,o){const a=Math.sin((e+o)*43758.5453123)*12589.317;return a-Math.floor(a)}function te(e){if(!Number.isFinite(e.distPc)||e.distPc<=0||!Number.isFinite(e.majAxArcmin)||(e.majAxArcmin??0)<=0)return 0;const o=_.degToRad(e.majAxArcmin/120),a=B(e.distPc*Math.tan(o));return!Number.isFinite(a)||a<=0?0:Math.min(a,$)}function ne(e,o){const a=Number.isFinite(e.majAxArcmin)?Math.max(e.majAxArcmin??0,4):4,r=Number.isFinite(e.minAxArcmin)&&(e.minAxArcmin??0)>0?Math.min(1,Math.max(.2,(e.minAxArcmin??a)/a)):null,n=e.type==="planetary_nebula"?.72+i(o,.11)*.2:.34+i(o,.11)*.42,s=r??n,m=e.type==="planetary_nebula"?Math.max(s,.72+i(o,.29)*.2):Math.max(.28,s*(.68+i(o,.29)*.3)),u=Number.isFinite(e.positionAngleDeg)?_.degToRad(e.positionAngleDeg??0):i(o,.47)*Math.PI*2,c=(i(o,.67)-.5)*(e.type==="planetary_nebula"?.22:.58),l=new p(i(o,.81)-.5,i(o,1.03)-.5,i(o,1.29)-.5);l.lengthSq()<1e-8&&l.set(.3,-.2,.5),l.normalize();const f=e.type==="planetary_nebula"?.42+i(o,1.41)*.2:.78+i(o,1.41)*.5;return{morphAngleRad:u,morphScale:new p(1,s,m),morphTiltRad:c,warpAxis:l,warpStrength:f}}function w(e){return Math.min(1,Math.max(0,e))}function x(e,o,a){return new b().setHSL(e,w(o),w(a))}function re(e,o){if((e.openNgcTypeRaw??"").toUpperCase()==="DRKN")return{colorA:new b(1774351),colorB:new b(3416600),colorC:new b(8014375),intensityScale:.7};const a=(o%h+h)%h,r=(J/360+a/h)%1,n=a===Z,s=a%2===0?.3:.65,m=x(r,n?.32:.62,.08),u=x(r,n?.4:.9,n?.3:s),c=x(r,n?.3:.65,n?.62:.82);return e.type==="planetary_nebula"&&c.lerp(x(.52,.54,.74),.22),{colorA:m,colorB:u,colorC:c,intensityScale:e.type==="planetary_nebula"?1.6:1.4}}function ie(e,o,a,r){return{uTime:{value:0},uRadius:{value:e},uIntensity:{value:1.5*r.intensityScale},uStructureScale:{value:4.5},uQuality:{value:0},uWarpStrength:{value:a.warpStrength},uColorA:{value:r.colorA.clone()},uColorB:{value:r.colorB.clone()},uColorC:{value:r.colorC.clone()},uSeedOffset:{value:new p(o*3.1,(o+.17)*2.6,(o+.31)*4.2)},uMorphScale:{value:a.morphScale},uWarpAxis:{value:a.warpAxis},uDriftVec:{value:new p(.009+i(o,2.11)*.005,-.006+i(o,2.47)*.004,.007+i(o,2.79)*.005)},uMorphAngles:{value:new Y(a.morphAngleRad,a.morphTiltRad)}}}function le(e,o){const a=O(e),r=new p(a.x,a.y,a.z),n=te(e),s=oe(e.catalogId),m=ie(n,s,ne(e,s),re(e,o)),u=new G(n,40,28),c=new H({uniforms:m,vertexShader:ee,fragmentShader:ae,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1}),l=new z(u,c);l.frustumCulled=!1,l.renderOrder=-10;const f=new P;return f.name=`nebula-${e.catalogId}`,f.position.copy(r),f.add(l),{group:f,material:c,mesh:l}}function se(e){e.mesh.geometry.dispose(),e.material.dispose()}function N(e,o){const a=o==="ultra";for(const r of e)r.material.uniforms.uQuality.value=a?1:0}function ue(){return X(K())}function ce(e){const o=j(e).layers.dso,a=new P;a.name="nebulaVolumeLayer",o.add(a);const r=Q(),n=[],s=M.getState(),m={current:s.showNebulaClouds},u={current:s.nebulaQuality},c={current:S().getState().universeMode.activeGalaxyId!==null},l={current:0},f={current:performance.now()},y=()=>{a.visible=m.current&&!c.current&&n.length>0},A=()=>{for(;n.length>0;){const t=n.pop();t!=null&&(a.remove(t.group),se(t))}},g=()=>{A(),ue().forEach((t,v)=>{const d=le(t,v);n.push(d),a.add(d.group)}),N(n,u.current),y()};g();const D=M.subscribe(t=>({showNebulaClouds:t.showNebulaClouds,nebulaQuality:t.nebulaQuality}),t=>{m.current=t.showNebulaClouds,u.current!==t.nebulaQuality&&(u.current=t.nebulaQuality,N(n,u.current)),y()},{equalityFn:V}),E=S().subscribeSelector(t=>t.universeMode.activeGalaxyId,t=>{c.current=t!==null,y()}),T=r.getQueryCache().subscribe(t=>{(C(t,"openngc-dso-catalog")||C(t,"custom-objects-catalog"))&&g()});return{onFrame:t=>{if(!a.visible)return;const v=performance.now(),d=Math.min(.06,Math.max(0,(v-f.current)/1e3));f.current=v,l.current+=d;for(const F of n)F.material.uniforms.uTime.value=l.current},dispose:()=>{D(),E(),T(),A(),o.remove(a)}}}function Ae(){const e=W(),o=(0,R.useRef)(null);return(0,R.useLayoutEffect)(()=>{const a=ce(e);return o.current=a.onFrame,()=>{a.dispose(),o.current=null}},[e]),U(()=>o.current?.(),k.HUD_BRIDGE),null}export{Ae as NebulaVolumeMountR3f};
