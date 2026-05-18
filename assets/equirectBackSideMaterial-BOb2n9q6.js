import{W as d,m as s}from"./three-vendor-BhRh_ddp.js";import{n as m,t as i}from"./majorDsoSelector-DkHrBKru.js";var f=new Set(["nebula","planetary_nebula"]);function l(e){return m(e,{types:f,max:10})}function E(e){return i(l(e))}var p=.07,v=-Math.PI/2;function c({texture:e,colorMul:r=1,initialOpacity:o=0,programCacheKey:n="dso-immersive-dome-edge-feather"}){const t=new d({map:e,side:1,depthWrite:!1,toneMapped:!1,transparent:!0,opacity:o});return t.color=new s(r,r,r),t.customProgramCacheKey=()=>n,t.onBeforeCompile=a=>{a.uniforms.dsoEdgeFeather={value:p},a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform float dsoEdgeFeather;`),a.fragmentShader=a.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
#ifdef USE_MAP
{
	float du = min( vMapUv.x, 1.0 - vMapUv.x );
	float dv = min( vMapUv.y, 1.0 - vMapUv.y );
	float edgeFactor = smoothstep( 0.0, dsoEdgeFeather, du ) * smoothstep( 0.0, dsoEdgeFeather, dv );
	diffuseColor.rgb *= edgeFactor;
	diffuseColor.a *= edgeFactor;
}
#endif`)},t}export{l as i,v as n,E as r,c as t};
