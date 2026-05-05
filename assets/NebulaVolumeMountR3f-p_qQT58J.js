import{i as B}from"./rolldown-runtime-BOC55nOF.js";import{p as I}from"./r3f-vendor-DzhUhXUY.js";import{n as q}from"./state-data-vendor-GurlhYZz.js";import{R as x,V as O,bt as p,dt as j,f as b,lt as Q,w as E,yt as V}from"./three-vendor-BVbCAnpr.js";import{Aa as M,Wr as k,a as W,co as z,oa as N}from"./index-rj9Ogjny.js";import{a as G,n as Y,o as H,s as X,t as R}from"./queryCacheNotify-BluFeo99.js";import{t as K}from"./deepSkyCatalogBridge-B4dgRvER.js";var _=B(I(),1),C=220,J=5e4,w=90,$=28e3,Z=10,h=10,ee=17,ae=9,oe=`
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
`,te=`
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
`;function re(a){let e=17;for(let o=0;o<a.length;o+=1)e=(e*31+a.charCodeAt(o))%104729;return e/104729}function s(a,e){const o=Math.sin((a+e)*43758.5453123)*12589.317;return o-Math.floor(o)}function ne(a){const e=a.type==="planetary_nebula";if(!Number.isFinite(a.distPc)||a.distPc<=0)return e?w:C;const o=e?14:90,r=Number.isFinite(a.majAxArcmin)?Math.max(4,a.majAxArcmin??o):o,t=x.degToRad(r/120),i=z(Math.max(.05,a.distPc)*Math.tan(t))*(e?90:10);return e?x.clamp(i,w,$):x.clamp(i,C,J)}function ie(a,e){const o=Number.isFinite(a.majAxArcmin)?Math.max(a.majAxArcmin??0,4):4,r=Number.isFinite(a.minAxArcmin)&&(a.minAxArcmin??0)>0?Math.min(1,Math.max(.2,(a.minAxArcmin??o)/o)):null,t=a.type==="planetary_nebula"?.72+s(e,.11)*.2:.34+s(e,.11)*.42,i=r??t,f=a.type==="planetary_nebula"?Math.max(i,.72+s(e,.29)*.2):Math.max(.28,i*(.68+s(e,.29)*.3)),u=Number.isFinite(a.positionAngleDeg)?x.degToRad(a.positionAngleDeg??0):s(e,.47)*Math.PI*2,c=(s(e,.67)-.5)*(a.type==="planetary_nebula"?.22:.58),l=new p(s(e,.81)-.5,s(e,1.03)-.5,s(e,1.29)-.5);l.lengthSq()<1e-8&&l.set(.3,-.2,.5),l.normalize();const m=a.type==="planetary_nebula"?.42+s(e,1.41)*.2:.78+s(e,1.41)*.5;return{morphAngleRad:u,morphScale:new p(1,i,f),morphTiltRad:c,warpAxis:l,warpStrength:m}}function P(a){return Math.min(1,Math.max(0,a))}function A(a,e,o){return new b().setHSL(a,P(e),P(o))}function se(a,e){if((a.openNgcTypeRaw??"").toUpperCase()==="DRKN")return{colorA:new b(1774351),colorB:new b(3416600),colorC:new b(8014375),intensityScale:.7};const o=(e%h+h)%h,r=(ee/360+o/h)%1,t=o===ae,i=o%2===0?.3:.65,f=A(r,t?.32:.62,.08),u=A(r,t?.4:.9,t?.3:i),c=A(r,t?.3:.65,t?.62:.82);return a.type==="planetary_nebula"&&c.lerp(A(.52,.54,.74),.22),{colorA:f,colorB:u,colorC:c,intensityScale:a.type==="planetary_nebula"?1.6:1.4}}function le(a,e,o,r){return{uTime:{value:0},uRadius:{value:a},uIntensity:{value:1.5*r.intensityScale},uStructureScale:{value:4.5},uQuality:{value:0},uWarpStrength:{value:o.warpStrength},uColorA:{value:r.colorA.clone()},uColorB:{value:r.colorB.clone()},uColorC:{value:r.colorC.clone()},uSeedOffset:{value:new p(e*3.1,(e+.17)*2.6,(e+.31)*4.2)},uMorphScale:{value:o.morphScale},uWarpAxis:{value:o.warpAxis},uDriftVec:{value:new p(.009+s(e,2.11)*.005,-.006+s(e,2.47)*.004,.007+s(e,2.79)*.005)},uMorphAngles:{value:new V(o.morphAngleRad,o.morphTiltRad)}}}function ue(a,e){const o=k(a),r=new p(o.x,o.y,o.z),t=ne(a),i=re(a.catalogId),f=le(t,i,ie(a,i),se(a,e)),u=new j(t,40,28),c=new Q({uniforms:f,vertexShader:oe,fragmentShader:te,transparent:!0,depthWrite:!1,blending:2,side:1,toneMapped:!1}),l=new O(u,c);l.frustumCulled=!1,l.renderOrder=-10;const m=new E;return m.name=`nebula-${a.catalogId}`,m.position.copy(r),m.add(l),{group:m,material:c,mesh:l}}function ce(a){a.mesh.geometry.dispose(),a.material.dispose()}function D(a,e){const o=e==="ultra";for(const r of a)r.material.uniforms.uQuality.value=o?1:0}function me(){const a=K().filter(e=>!(e.type!=="nebula"&&e.type!=="planetary_nebula"||!Number.isFinite(e.distPc)||e.distPc<=0));return a.sort((e,o)=>{const r=+!!o.featured-+!!e.featured;if(r!==0)return r;const t=Number.isFinite(e.majAxArcmin)?e.majAxArcmin??0:0,i=(Number.isFinite(o.majAxArcmin)?o.majAxArcmin??0:0)-t;return i!==0?i:e.distPc-o.distPc}),a.slice(0,Z)}function fe(a){const e=Y(a).layers.dso,o=new E;o.name="nebulaVolumeLayer",e.add(o);const r=W(),t=[],i=M.getState(),f={current:i.showNebulaClouds},u={current:i.nebulaQuality},c={current:N().getState().universeMode.mode},l={current:0},m={current:performance.now()},y=()=>{o.visible=f.current&&c.current==="cosmos"&&t.length>0},g=()=>{for(;t.length>0;){const n=t.pop();n!=null&&(o.remove(n.group),ce(n))}},S=()=>{g(),me().forEach((n,v)=>{const d=ue(n,v);t.push(d),o.add(d.group)}),D(t,u.current),y()};S();const T=M.subscribe(n=>({showNebulaClouds:n.showNebulaClouds,nebulaQuality:n.nebulaQuality}),n=>{f.current=n.showNebulaClouds,u.current!==n.nebulaQuality&&(u.current=n.nebulaQuality,D(t,u.current)),y()},{equalityFn:q}),F=N().subscribeSelector(n=>n.universeMode.mode,n=>{c.current=n,y()}),L=r.getQueryCache().subscribe(n=>{(R(n,"openngc-dso-catalog")||R(n,"custom-objects-catalog"))&&S()});return{onFrame:n=>{if(!o.visible)return;const v=performance.now(),d=Math.min(.06,Math.max(0,(v-m.current)/1e3));m.current=v,l.current+=d;for(const U of t)U.material.uniforms.uTime.value=l.current},dispose:()=>{T(),F(),L(),g(),e.remove(o)}}}function Se(){const a=X(),e=(0,_.useRef)(null);return(0,_.useLayoutEffect)(()=>{const o=fe(a);return e.current=o.onFrame,()=>{o.dispose(),e.current=null}},[a]),H(()=>e.current?.(),G.HUD_BRIDGE),null}export{Se as NebulaVolumeMountR3f};
