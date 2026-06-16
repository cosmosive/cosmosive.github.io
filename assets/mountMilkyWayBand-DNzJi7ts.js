import{n as L}from"./state-data-vendor-DwYWRG6B.js";import{nt as G,v as I,y as O}from"./src-xxWl3_7B.js";import{W as B,tt as w}from"./src-CSE_VlMD.js";import{t as N}from"./skyLightStore-CcPC6YfG.js";import{A as U,d as S,f as W,g as q,ht as Z,it as V}from"./three-vendor-Ce7iT1Ri.js";import{Hr as T,wt as j}from"./index-BzMsdo_U.js";import{t as Q}from"./r3fHostExtras-BtatsfV9.js";import{t as X}from"./createMountComponent-Bc7zy4mO.js";import{n as _}from"./backdropCache-DtKmT5Q5.js";var f={sunRadiusKpc:8.18,diskScaleRKpc:2.6,diskScaleZThinKpc:.3,diskScaleZThickKpc:.9,thickFraction:.12,bulgeFraction:.15,bulgeSigmaKpc:.55,bulgeSigmaZKpc:.4,maxSunDistKpc:22,packetAbsMag:-5};function H(a){const o=I(a);return()=>O(o)}function k(a){const o=Math.max(a(),1e-12),e=a();return Math.sqrt(-2*Math.log(o))*Math.cos(2*Math.PI*e)}function Y(a){const o=f.sunRadiusKpc;if(a()<f.bulgeFraction)return{x:o+k(a)*f.bulgeSigmaKpc,y:k(a)*f.bulgeSigmaKpc,z:k(a)*f.bulgeSigmaZKpc};const e=1-a(),t=1-a(),n=-f.diskScaleRKpc*(Math.log(e)+Math.log(t)),r=a()*Math.PI*2,s=-(a()<f.thickFraction?f.diskScaleZThickKpc:f.diskScaleZThinKpc)*Math.log(1-a())*(a()<.5?-1:1);return{x:o+n*Math.cos(r),y:n*Math.sin(r),z:s}}function J(a){const o=a.x-f.sunRadiusKpc;return{R:Math.hypot(o,a.y),Z:a.z}}function $(a,o,e){const t=B,n=t[0][0]*a+t[1][0]*o+t[2][0]*e,r=t[0][1]*a+t[1][1]*o+t[2][1]*e,s=t[0][2]*a+t[1][2]*o+t[2][2]*e,i=Math.hypot(n,r,s)||1;return{x:n/i,y:r/i,z:s/i}}function aa(a,o,e){const t=1/w,n=a*t/1e3,r=o*t/1e3,s=e*t/1e3,i=B;return{x:i[0][0]*n+i[0][1]*r+i[0][2]*s,y:i[1][0]*n+i[1][1]*r+i[1][2]*s,z:i[2][0]*n+i[2][1]*r+i[2][2]*s}}var x={midplaneTauPerKpc:.18,scaleRKpc:3,scaleZKpc:.11,steps:24},F={r:.78,g:1,b:1.32},ta=1.2,ea=[{name:"Aquila Rift",l:30,b:2,distPc:150,radiusPc:55,peakTauCore:3.5,elongation:2.6,paDeg:0},{name:"Cygnus Rift",l:75,b:0,distPc:170,radiusPc:60,peakTauCore:3,elongation:2.6,paDeg:0},{name:"Coalsack",l:303,b:0,distPc:180,radiusPc:18,peakTauCore:4,elongation:1.3,paDeg:0},{name:"Rho Ophiuchi",l:354,b:16,distPc:140,radiusPc:22,peakTauCore:3,elongation:1.6,paDeg:70},{name:"Taurus Dark Cloud",l:170,b:-15,distPc:140,radiusPc:28,peakTauCore:2.2,elongation:2,paDeg:0},{name:"Pipe Nebula",l:0,b:4.5,distPc:145,radiusPc:16,peakTauCore:2.5,elongation:2.8,paDeg:0},{name:"Lupus",l:339,b:16,distPc:150,radiusPc:18,peakTauCore:2,elongation:2,paDeg:30},{name:"Chamaeleon",l:300,b:-16,distPc:160,radiusPc:14,peakTauCore:2,elongation:1.8,paDeg:0},{name:"Vela Molecular Ridge",l:265,b:1,distPc:700,radiusPc:30,peakTauCore:1.8,elongation:2.5,paDeg:0},{name:"Musca (Dark Doodad)",l:301,b:-9,distPc:160,radiusPc:3,peakTauCore:1.4,elongation:6,paDeg:55},{name:"Serpens",l:32,b:5,distPc:440,radiusPc:14,peakTauCore:2,elongation:2,paDeg:10},{name:"Corona Australis",l:0,b:-18,distPc:150,radiusPc:6,peakTauCore:2.2,elongation:3.5,paDeg:70},{name:"Orion A",l:209,b:-19.5,distPc:410,radiusPc:9,peakTauCore:3,elongation:4,paDeg:35},{name:"Perseus Cloud",l:159,b:-20,distPc:300,radiusPc:14,peakTauCore:2,elongation:2.6,paDeg:25}];function oa(a){const o=a.l*Math.PI/180,e=a.b*Math.PI/180,t=a.distPc/1e3,n=a.radiusPc/1e3,r=Math.max(1,a.elongation??1),s=n*r,i=(a.paDeg??0)*Math.PI/180,l=Math.sin(o),p=Math.cos(o),d=Math.sin(e),c=Math.cos(e),u=Math.cos(i),g=Math.sin(i),M=u*-l+g*(-d*p),m=u*p+g*(-d*l),h=g*c,v=1/(n*n),P=1/(s*s)-v,y=a.peakTauCore/(n*Math.sqrt(2*Math.PI)*r);return{cx:t*c*p,cy:t*c*l,cz:t*d,dx:M,dy:m,dz:h,invM:v,anis:P,peakDensity:y}}var na=ea.map(oa),z=5,{SQRT1_2:sa}=Math,ia=Math.sqrt(2*Math.PI);function R(a){const o=a<0?-1:1,e=Math.abs(a),t=1/(1+.3275911*e);return o*(1-((((1.061405429*t-1.453152027)*t+1.421413741)*t-.284496736)*t+.254829592)*t*Math.exp(-e*e))}function ra(a,o,e){const{R:t,Z:n}=J({x:a,y:o,z:e});return x.midplaneTauPerKpc*Math.exp(-(t-f.sunRadiusKpc)/x.scaleRKpc)*Math.exp(-Math.abs(n)/x.scaleZKpc)}function la(a,o,e,t,n,r,s,i){const l=a.cx-o,p=a.cy-e,d=a.cz-t,c=l*n+p*r+d*s,u=n*a.dx+r*a.dy+s*a.dz,g=l*a.dx+p*a.dy+d*a.dz,M=l*l+p*p+d*d,m=a.invM+a.anis*u*u,h=a.invM*c+a.anis*u*g,v=a.invM*M+a.anis*g*g,P=Math.max(0,v-h*h/m);if(P>z*z)return 0;const y=h/m,D=Math.sqrt(m)*sa,b=.5*(R((i-y)*D)-R(-y*D));if(b<=0)return 0;const E=1/Math.sqrt(m);return a.peakDensity*ia*E*Math.exp(-.5*P)*b}function ca(a,o){const e=o.x-a.x,t=o.y-a.y,n=o.z-a.z,r=Math.hypot(e,t,n);if(r===0)return 0;let s=0;for(let c=0;c<x.steps;c+=1){const u=(c+.5)/x.steps;s+=ra(a.x+e*u,a.y+t*u,a.z+n*u)}let i=s*r/x.steps;const l=e/r,p=t/r,d=n/r;for(const c of na)i+=la(c,a.x,a.y,a.z,l,p,d,r);return i}var Fa=x.steps;function ua(a){const o=Math.max(0,a),e=Math.min(o,ta);return{dimMag:1.086*o,rgbScale:[Math.exp(-e*(F.r-1)),1,Math.exp(-e*(F.b-1))]}}var C=[1.15,1.02,.82],K=1e3,pa=1e3/(G*K);function A(a){const o=H(a.seed),e=a.viewerScenePos,t=e&&(e.x!==0||e.y!==0||e.z!==0)?aa(e.x,e.y,e.z):{x:0,y:0,z:0},n=[],r=[],s=[];for(let i=0;i<a.pointBudget;i+=1){const l=Y(o),p=Math.hypot(l.x,l.y,l.z);if(p>=pa&&p<=f.maxSunDistKpc){const d=p*K,c=$(l.x,l.y,l.z),u=d*w,g=f.packetAbsMag+5*Math.log10(d/10),M=ua(ca(t,l));n.push(c.x*u,c.y*u,c.z*u),r.push(g+M.dimMag),s.push(C[0]*M.rgbScale[0],C[1]*M.rgbScale[1],C[2]*M.rgbScale[2])}}return{positions:new Float32Array(n),mag:new Float32Array(r),colors:new Float32Array(s),count:r.length}}var ma="/assets/milkyWayBandField.worker-yWkrxfcB.js",da=4,fa=`
  attribute float mag;
  attribute vec3 color;
  varying vec3 vColor;
  varying float vBrightness;
  uniform float uMagLimit;
  uniform float uMagRef;
  uniform float uMagFadeRange;
  uniform float uFluxClampMax;
  uniform float uFluxGamma;
  uniform float uPointSizeFloor;
  uniform float uPointSizeMax;
  uniform float uPsfMaxMult;
  uniform float uSizeMultiplier;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vColor = color;

    // Apparent magnitude rescaled to the current camera distance (catalog mag is Sol-pov):
    // m_app = mag + 5*log10(d_cam / d_sol).
    float dCam = length(mvPosition.xyz);
    float dSol = max(length(position), 1.0);
    float appMag = mag + 5.0 * log(dCam / dSol) / log(10.0);

    if (mvPosition.z >= 0.0 || appMag > uMagLimit) {
      gl_Position = vec4(2.0, 2.0, 2.0, 1.0); // cull outside clip volume
      gl_PointSize = 0.0;
      vBrightness = 0.0;
    } else {
      vec4 clip = projectionMatrix * mvPosition;
      // z-remap: keep screen xy from the true direction, force depth just inside the far plane so
      // the packet is never far-clipped. depthWrite:false + renderOrder handle layering.
      gl_Position = vec4(clip.xy, clip.w * 0.9999, clip.w);

      float flux = pow(10.0, -0.4 * (appMag - uMagRef));
      float toneFlux = pow(clamp(flux, 0.0, uFluxClampMax), uFluxGamma);
      float magFade = clamp((uMagLimit - appMag) / max(uMagFadeRange, 0.0001), 0.0, 1.0);
      float maxToneFlux = pow(uFluxClampMax, uFluxGamma);
      float saturationFrac = sqrt(clamp(toneFlux / max(maxToneFlux, 0.0001), 0.0, 1.0));
      float psfSizePx = mix(uPointSizeFloor, uPointSizeFloor * uPsfMaxMult, saturationFrac);
      psfSizePx *= uSizeMultiplier;
      gl_PointSize = clamp(psfSizePx, 0.0, uPointSizeMax);
      vBrightness = toneFlux * magFade;
    }
  }
`,ga=`
  varying vec3 vColor;
  varying float vBrightness;
  uniform float uGlowAlpha;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float rr = dot(uv, uv);
    if (rr > 0.25) discard;
    float radial = clamp(length(uv) * 2.0, 0.0, 1.0);
    // Soft Gaussian-ish falloff — no hard core, so packets blur into a diffuse glow.
    float soft = smoothstep(1.0, 0.0, radial);
    float alpha = clamp(soft * soft * uGlowAlpha, 0.0, 1.0);
    vec3 emissive = vColor * vBrightness * soft;
    gl_FragColor = vec4(emissive, alpha);
    if (gl_FragColor.a < 0.004) discard;
  }
`;function ha(){return new Z({uniforms:{uMagLimit:{value:18},uMagRef:{value:1.5},uMagFadeRange:{value:3},uFluxClampMax:{value:3},uFluxGamma:{value:.42},uPointSizeFloor:{value:1.5},uPointSizeMax:{value:da},uPsfMaxMult:{value:2},uSizeMultiplier:{value:1.4},uGlowAlpha:{value:1.3}},vertexShader:fa,fragmentShader:ga,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})}var Ma=18e4;var Pa=1835625579;function xa(a){const e=Q(a).layers.dso,t=new U;t.name="milkyWayBandLayer",e.add(t);const n=ha(),r=new q;let s=null,i=null,l=!1;const p={current:T.getState().showDsoVolumes},d=()=>{t.visible=p.current&&s!==null},c=m=>{if(!l){if(m.count>0){const h=new W;h.setAttribute("position",new S(m.positions,3)),h.setAttribute("mag",new S(m.mag,1)),h.setAttribute("color",new S(m.colors,3)),s=new V(h,n),s.name="milkyWayBand",s.frustumCulled=!1,s.renderOrder=-19,s.layers.set(1),t.add(s)}_(),d()}},u={pointBudget:Ma,seed:Pa},g=typeof window<"u"?window.Worker:void 0;g?(i=new g(ma,{type:"module"}),j(i).buildBandField(u).then(c).catch(()=>c(A(u)))):Promise.resolve().then(()=>c(A(u)));const M=T.subscribe(m=>({showDsoVolumes:m.showDsoVolumes}),m=>{p.current=m.showDsoVolumes,d()},{equalityFn:L});return{onFrame:()=>{if(n.uniforms.uMagLimit){const m=r.getDelta(),h=N(),v=1-Math.exp(-m/.7),P=n.uniforms.uMagLimit.value;n.uniforms.uMagLimit.value=P+(h.bandMagLimit-P)*v}},dispose:()=>{l=!0,M(),i!==null&&(i.terminate(),i=null),s!==null&&(t.remove(s),s.geometry.dispose(),s=null,_()),n.dispose(),e.remove(t)}}}var za=X(xa,"present.hud");export{za as MilkyWayBandMountR3f};
