import{i as L}from"./rolldown-runtime-BOC55nOF.js";import{p as q}from"./r3f-vendor-BJwwS6g6.js";import{n as O}from"./state-data-vendor-CVNrbw43.js";import{bt as Q}from"./sceneRuntimeModel-UAcrReEA.js";import{n as S}from"./scenePrefsStore-5g2_xcCY.js";import{n as M}from"./appSimRuntimeHost-4Ole-ymY.js";import{c as V}from"./titleScreenLookDirection-pxmJqZ4E.js";import"./use-custom-objects-catalog-uU5Bzhso.js";import{$ as I,a as B}from"./index-XULyEsbf.js";import{a as U,i as k,o as W,t as j}from"./r3fHostExtras-x9mpQIDE.js";import{R as _,V as z,bt as p,dt as G,lt as H,p as b,w as P,yt as Y}from"./three-vendor-DAtgWcGY.js";import{i as K,n as X,r as C}from"./dsoMajorNebula-CQTL1vDI.js";var R=L(q(),1),$=I.far/4,h=10,J=17,Z=9,ee=`
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
`;function oe(e){let o=17;for(let a=0;a<e.length;a+=1)o=(o*31+e.charCodeAt(a))%104729;return o/104729}function i(e,o){const a=Math.sin((e+o)*43758.5453123)*12589.317;return a-Math.floor(a)}function te(e){if(!Number.isFinite(e.distPc)||e.distPc<=0||!Number.isFinite(e.majAxArcmin)||(e.majAxArcmin??0)<=0)return 0;const o=_.degToRad(e.majAxArcmin/120),a=Q(e.distPc*Math.tan(o));return!Number.isFinite(a)||a<=0?0:Math.min(a,$)}function re(e,o){const a=Number.isFinite(e.majAxArcmin)?Math.max(e.majAxArcmin??0,4):4,n=Number.isFinite(e.minAxArcmin)&&(e.minAxArcmin??0)>0?Math.min(1,Math.max(.2,(e.minAxArcmin??a)/a)):null,r=e.type==="planetary_nebula"?.72+i(o,.11)*.2:.34+i(o,.11)*.42,l=n??r,f=e.type==="planetary_nebula"?Math.max(l,.72+i(o,.29)*.2):Math.max(.28,l*(.68+i(o,.29)*.3)),u=Number.isFinite(e.positionAngleDeg)?_.degToRad(e.positionAngleDeg??0):i(o,.47)*Math.PI*2,c=(i(o,.67)-.5)*(e.type==="planetary_nebula"?.22:.58),s=new p(i(o,.81)-.5,i(o,1.03)-.5,i(o,1.29)-.5);s.lengthSq()<1e-8&&s.set(.3,-.2,.5),s.normalize();const m=e.type==="planetary_nebula"?.42+i(o,1.41)*.2:.78+i(o,1.41)*.5;return{morphAngleRad:u,morphScale:new p(1,l,f),morphTiltRad:c,warpAxis:s,warpStrength:m}}function w(e){return Math.min(1,Math.max(0,e))}function x(e,o,a){return new b().setHSL(e,w(o),w(a))}function ne(e,o){if((e.openNgcTypeRaw??"").toUpperCase()==="DRKN")return{colorA:new b(1774351),colorB:new b(3416600),colorC:new b(8014375),intensityScale:.7};const a=(o%h+h)%h,n=(J/360+a/h)%1,r=a===Z,l=a%2===0?.3:.65,f=x(n,r?.32:.62,.08),u=x(n,r?.4:.9,r?.3:l),c=x(n,r?.3:.65,r?.62:.82);return e.type==="planetary_nebula"&&c.lerp(x(.52,.54,.74),.22),{colorA:f,colorB:u,colorC:c,intensityScale:e.type==="planetary_nebula"?1.6:1.4}}function ie(e,o,a,n){return{uTime:{value:0},uRadius:{value:e},uIntensity:{value:1.5*n.intensityScale},uStructureScale:{value:4.5},uQuality:{value:0},uWarpStrength:{value:a.warpStrength},uColorA:{value:n.colorA.clone()},uColorB:{value:n.colorB.clone()},uColorC:{value:n.colorC.clone()},uSeedOffset:{value:new p(o*3.1,(o+.17)*2.6,(o+.31)*4.2)},uMorphScale:{value:a.morphScale},uWarpAxis:{value:a.warpAxis},uDriftVec:{value:new p(.009+i(o,2.11)*.005,-.006+i(o,2.47)*.004,.007+i(o,2.79)*.005)},uMorphAngles:{value:new Y(a.morphAngleRad,a.morphTiltRad)}}}function se(e,o){const a=V(e),n=new p(a.x,a.y,a.z),r=te(e),l=oe(e.catalogId),f=ie(r,l,re(e,l),ne(e,o)),u=new G(r,40,28),c=new H({uniforms:f,vertexShader:ee,fragmentShader:ae,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1}),s=new z(u,c);s.frustumCulled=!1,s.renderOrder=-10;const m=new P;return m.name=`nebula-${e.catalogId}`,m.position.copy(n),m.add(s),{group:m,material:c,mesh:s}}function le(e){e.mesh.geometry.dispose(),e.material.dispose()}function N(e,o){const a=o==="ultra";for(const n of e)n.material.uniforms.uQuality.value=a?1:0}function ue(){return X(K())}function ce(e){const o=j(e).layers.dso,a=new P;a.name="nebulaVolumeLayer",o.add(a);const n=B(),r=[],l=S.getState(),f={current:l.showNebulaClouds},u={current:l.nebulaQuality},c={current:M().getState().universeMode.activeGalaxyId!==null},s={current:0},m={current:performance.now()},y=()=>{a.visible=f.current&&!c.current&&r.length>0},A=()=>{for(;r.length>0;){const t=r.pop();t!=null&&(a.remove(t.group),le(t))}},g=()=>{A(),ue().forEach((t,v)=>{const d=se(t,v);r.push(d),a.add(d.group)}),N(r,u.current),y()};g();const D=S.subscribe(t=>({showNebulaClouds:t.showNebulaClouds,nebulaQuality:t.nebulaQuality}),t=>{f.current=t.showNebulaClouds,u.current!==t.nebulaQuality&&(u.current=t.nebulaQuality,N(r,u.current)),y()},{equalityFn:O}),E=M().subscribeSelector(t=>t.universeMode.activeGalaxyId,t=>{c.current=t!==null,y()}),T=n.getQueryCache().subscribe(t=>{(C(t,"openngc-dso-catalog")||C(t,"custom-objects-catalog"))&&g()});return{onFrame:t=>{if(!a.visible)return;const v=performance.now(),d=Math.min(.06,Math.max(0,(v-m.current)/1e3));m.current=v,s.current+=d;for(const F of r)F.material.uniforms.uTime.value=s.current},dispose:()=>{D(),E(),T(),A(),o.remove(a)}}}function Re(){const e=W(),o=(0,R.useRef)(null);return(0,R.useLayoutEffect)(()=>{const a=ce(e);return o.current=a.onFrame,()=>{a.dispose(),o.current=null}},[e]),U(()=>o.current?.(),k.HUD_BRIDGE),null}export{Re as NebulaVolumeMountR3f};
