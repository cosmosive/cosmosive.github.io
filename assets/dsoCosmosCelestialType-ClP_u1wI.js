import{i as at}from"./rolldown-runtime-BOC55nOF.js";import{f as ot}from"./r3f-vendor-C8eBNM_t.js";import{l as ke}from"./state-data-vendor-BcdAKgrC.js";import{O as he,P as Ie,j as Be}from"./overlayCommands-BoJLiIFM.js";function ja(e,t){const a=new Map;for(const o of e)a.set(o.catalogId,o);for(const o of t)a.set(o.catalogId,o);return Array.from(a.values())}var N=at(ot(),1),ve="openngc";function rt(e,t){if(e.length===0)return`${ve}:0`;const a=e[0]?.catalogId??"",o=e[e.length-1]?.catalogId??"",r=typeof t=="number"&&Number.isFinite(t)?`:sch${t}`:"";return`${ve}:${e.length}:${a}:${o}${r}`}var ie=null,ue=[];function st(e,t){ue=e,ie=t}function Fa(){return ie}function Wa(){return ue}function lt(){ue=[],ie=null}var Oe=Symbol("Comlink.proxy"),nt=Symbol("Comlink.endpoint"),$e=Symbol("Comlink.releaseProxy"),J=Symbol("Comlink.finalizer"),Y=Symbol("Comlink.thrown"),pe=e=>typeof e=="object"&&e!==null||typeof e=="function",Le=new Map([["proxy",{canHandle:e=>pe(e)&&e[Oe],serialize(e){const{port1:t,port2:a}=new MessageChannel;return He(e,t),[a,[a]]},deserialize(e){return e.start(),Ne(e)}}],["throw",{canHandle:e=>pe(e)&&Y in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}}]]);function ct(e,t){for(const a of e)if(t===a||a==="*"||a instanceof RegExp&&a.test(t))return!0;return!1}function He(e,t=globalThis,a=["*"]){t.addEventListener("message",function o(r){if(!r||!r.data)return;if(!ct(a,r.origin)){console.warn(`Invalid origin '${r.origin}' for comlink proxy`);return}const{id:s,type:l,path:i}=Object.assign({path:[]},r.data),u=(r.data.argumentList||[]).map(L);let c;try{const d=i.slice(0,-1).reduce((f,y)=>f[y],e),_=i.reduce((f,y)=>f[y],e);switch(l){case"GET":c=_;break;case"SET":d[i.slice(-1)[0]]=L(r.data.value),c=!0;break;case"APPLY":c=_.apply(d,u);break;case"CONSTRUCT":c=mt(new _(...u));break;case"ENDPOINT":{const{port1:f,port2:y}=new MessageChannel;He(e,y),c=_t(f,[f])}break;case"RELEASE":c=void 0;break;default:return}}catch(d){c={value:d,[Y]:0}}Promise.resolve(c).catch(d=>({value:d,[Y]:0})).then(d=>{const[_,f]=q(d);t.postMessage(Object.assign(Object.assign({},_),{id:s}),f),l==="RELEASE"&&(t.removeEventListener("message",o),ze(t),J in e&&typeof e[J]=="function"&&e[J]())}).catch(d=>{const[_,f]=q({value:new TypeError("Unserializable return value"),[Y]:0});t.postMessage(Object.assign(Object.assign({},_),{id:s}),f)})}),t.start&&t.start()}function it(e){return e.constructor.name==="MessagePort"}function ze(e){it(e)&&e.close()}function Ne(e,t){const a=new Map;return e.addEventListener("message",function(r){const{data:s}=r;if(!s||!s.id)return;const l=a.get(s.id);if(l)try{l(s)}finally{a.delete(s.id)}}),le(e,a,[],t)}function W(e){if(e)throw new Error("Proxy has been released and is not useable")}function Ue(e){return z(e,new Map,{type:"RELEASE"}).then(()=>{ze(e)})}var K=new WeakMap,V="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{const t=(K.get(e)||0)-1;K.set(e,t),t===0&&Ue(e)});function ut(e,t){const a=(K.get(t)||0)+1;K.set(t,a),V&&V.register(e,t,e)}function dt(e){V&&V.unregister(e)}function le(e,t,a=[],o=function(){}){let r=!1;const s=new Proxy(o,{get(l,i){if(W(r),i===$e)return()=>{dt(s),Ue(e),t.clear(),r=!0};if(i==="then"){if(a.length===0)return{then:()=>s};const u=z(e,t,{type:"GET",path:a.map(c=>c.toString())}).then(L);return u.then.bind(u)}return le(e,t,[...a,i])},set(l,i,u){W(r);const[c,d]=q(u);return z(e,t,{type:"SET",path:[...a,i].map(_=>_.toString()),value:c},d).then(L)},apply(l,i,u){W(r);const c=a[a.length-1];if(c===nt)return z(e,t,{type:"ENDPOINT"}).then(L);if(c==="bind")return le(e,t,a.slice(0,-1));const[d,_]=be(u);return z(e,t,{type:"APPLY",path:a.map(f=>f.toString()),argumentList:d},_).then(L)},construct(l,i){W(r);const[u,c]=be(i);return z(e,t,{type:"CONSTRUCT",path:a.map(d=>d.toString()),argumentList:u},c).then(L)}});return ut(s,e),s}function ft(e){return Array.prototype.concat.apply([],e)}function be(e){const t=e.map(q);return[t.map(a=>a[0]),ft(t.map(a=>a[1]))]}var De=new WeakMap;function _t(e,t){return De.set(e,t),e}function mt(e){return Object.assign(e,{[Oe]:!0})}function q(e){for(const[t,a]of Le)if(a.canHandle(e)){const[o,r]=a.serialize(e);return[{type:"HANDLER",name:t,value:o},r]}return[{type:"RAW",value:e},De.get(e)||[]]}function L(e){switch(e.type){case"HANDLER":return Le.get(e.name).deserialize(e.value);case"RAW":return e.value}}function z(e,t,a,o){return new Promise(r=>{const s=gt();t.set(s,r),e.start&&e.start(),e.postMessage(Object.assign({id:s},a),o)})}function gt(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}var ht="/assets/openngc.worker-CoGk7Wpu.js";async function vt(e){if(typeof Worker>"u")return he(e);let t;try{t=new Worker(ht,{type:"module"})}catch{return he(e)}const a=Ne(t);try{return await a.loadCatalog(e)}catch(o){const r=o instanceof Error?o.message:String(o);throw Object.assign(new Error(r),{cause:o})}finally{a[$e](),t.terminate()}}var pt="openngc-dso-catalog";function Ya(e){const t=e?.extraEnabled===!0,[a,o]=(0,N.useState)(!1);(0,N.useEffect)(()=>{queueMicrotask(()=>{o(!0)})},[]);const r=ke({queryKey:[pt],queryFn:async()=>{const{entries:s,schemaVersion:l}=await vt(Be("data/openngc/openngc-dso.json"));return st(s,rt(s,l)),s},enabled:t||a,staleTime:Ie,retry:!1});return(0,N.useEffect)(()=>{r.isError&&lt()},[r.isError]),r}var ye="custom-objects";function bt(e,t){if(e.length===0)return`${ye}:0`;const a=e[0]?.catalogId??"",o=e[e.length-1]?.catalogId??"",r=typeof t=="number"&&Number.isFinite(t)?`:sch${t}`:"";return`${ye}:${e.length}:${a}:${o}${r}`}var de=[],fe=null;function yt(e,t){de=e,fe=t}function Ka(){return fe}function Va(){return de}function St(){de=[],fe=null}var wt=new Set(["galaxy","star_cluster","planetary_nebula","nebula","black_hole"]),b=class extends Error{constructor(e){super(e),this.name="CustomObjectsCatalogShapeError"}};function A(e){return typeof e=="number"&&Number.isFinite(e)}function x(e){if(typeof e!="string")return;const t=e.trim();return t.length>0?t:void 0}function xt(e,t){if(e==null||typeof e!="object")throw new b(`custom-objects entries[${t}] must be an object`);const a=e,o=x(a.catalogId),r=x(a.name),s=x(a.type);if(!o||!r||!s)throw new b(`custom-objects entries[${t}]: catalogId, name, and type are required`);if(!wt.has(s))throw new b(`custom-objects entries[${t}]: unknown type "${String(s)}"`);const{raDeg:l}=a,{decDeg:i}=a,{distPc:u}=a;if(!A(l)||!A(i)||!A(u))throw new b(`custom-objects entries[${t}]: raDeg, decDeg, and distPc must be finite numbers`);let c;if(a.aliases!=null){if(!Array.isArray(a.aliases))throw new b(`custom-objects entries[${t}]: aliases must be an array of strings when present`);c=a.aliases.map((m,G)=>{const v=x(m);if(v==null)throw new b(`custom-objects entries[${t}].aliases[${G}]: invalid string`);return v})}let d;if(a.physical!=null){if(typeof a.physical!="object")throw new b(`custom-objects entries[${t}]: physical must be an object when present`);const m=a.physical;if(d={},m.massSolarMasses!=null){if(!A(m.massSolarMasses))throw new b(`custom-objects entries[${t}].physical.massSolarMasses must be finite`);d.massSolarMasses=m.massSolarMasses}if(m.radiusKm!=null){if(!A(m.radiusKm))throw new b(`custom-objects entries[${t}].physical.radiusKm must be finite`);d.radiusKm=m.radiusKm}if(m.schwarzschildRadiusKm!=null){if(!A(m.schwarzschildRadiusKm))throw new b(`custom-objects entries[${t}].physical.schwarzschildRadiusKm must be finite`);d.schwarzschildRadiusKm=m.schwarzschildRadiusKm}if(m.spinDimensionless!=null){if(!A(m.spinDimensionless))throw new b(`custom-objects entries[${t}].physical.spinDimensionless must be finite`);d.spinDimensionless=m.spinDimensionless}if(m.luminositySolar!=null){if(!A(m.luminositySolar))throw new b(`custom-objects entries[${t}].physical.luminositySolar must be finite`);d.luminositySolar=m.luminositySolar}Object.keys(d).length===0&&(d=void 0)}let _;if(a.references!=null){if(!Array.isArray(a.references))throw new b(`custom-objects entries[${t}]: references must be an array of strings when present`);_=a.references.map((m,G)=>{const v=x(m);if(v==null)throw new b(`custom-objects entries[${t}].references[${G}]: invalid string`);return v})}const f={catalogId:o,name:r,type:s,raDeg:l,decDeg:i,distPc:u};c!=null&&(f.aliases=c);const y=x(a.subtype);if(y!=null&&(f.subtype=y),a.vMag!=null){if(!A(a.vMag))throw new b(`custom-objects entries[${t}]: vMag must be a finite number when set`);f.vMag=a.vMag}if(a.majAxArcmin!=null){if(!A(a.majAxArcmin))throw new b(`custom-objects entries[${t}]: majAxArcmin must be a finite number when set`);f.majAxArcmin=a.majAxArcmin}const p=x(a.constellation);p!=null&&(f.constellation=p);const S=x(a.messier);S!=null&&(f.messier=S);const R=x(a.parentGalaxyId);if(R!=null&&(f.parentGalaxyId=R),a.featured!=null){if(typeof a.featured!="boolean")throw new b(`custom-objects entries[${t}]: featured must be a boolean when set`);f.featured=a.featured}const w=x(a.notesMarkdown);w!=null&&(f.notesMarkdown=w);const O=x(a.description);O!=null&&(f.description=O);const P=x(a.imageUrl);P!=null&&(f.imageUrl=P);const k=x(a.wikipediaTitle);if(k!=null&&(f.wikipediaTitle=k),a.discoveredYear!=null){if(typeof a.discoveredYear!="number"||!Number.isInteger(a.discoveredYear))throw new b(`custom-objects entries[${t}]: discoveredYear must be an integer when set`);f.discoveredYear=a.discoveredYear}if(_!=null&&(f.references=_),d!=null&&(f.physical=d),a.externalLinks!=null){if(a.externalLinks===null||typeof a.externalLinks!="object"||Array.isArray(a.externalLinks))throw new b(`custom-objects entries[${t}]: externalLinks must be a non-null object when set`);const m={};for(const[G,v]of Object.entries(a.externalLinks)){if(typeof v!="string"||!v.startsWith("https://"))throw new b(`custom-objects entries[${t}].externalLinks.${G}: value must be an https:// URL string`);m[G]=v}f.externalLinks=m}return f}function Et(e){const t={catalogId:e.catalogId,name:e.name,type:e.type,raDeg:e.raDeg,decDeg:e.decDeg,distPc:e.distPc};return e.aliases!=null&&(t.aliases=e.aliases),e.subtype!=null&&(t.subtype=e.subtype),e.vMag!=null&&(t.vMag=e.vMag),e.majAxArcmin!=null&&(t.majAxArcmin=e.majAxArcmin),e.constellation!=null&&(t.constellation=e.constellation),e.messier!=null&&(t.messier=e.messier),e.parentGalaxyId!=null&&(t.parentGalaxyId=e.parentGalaxyId),e.featured!=null&&(t.featured=e.featured),e.notesMarkdown!=null&&(t.notesMarkdown=e.notesMarkdown),e.description!=null&&(t.description=e.description),e.imageUrl!=null&&(t.imageUrl=e.imageUrl),e.wikipediaTitle!=null&&(t.wikipediaTitle=e.wikipediaTitle),e.references!=null&&(t.references=e.references),e.discoveredYear!=null&&(t.discoveredYear=e.discoveredYear),e.physical!=null&&(t.physical=e.physical),e.externalLinks!=null&&(t.externalLinks=e.externalLinks),t}function Tt(e){if(e==null||typeof e!="object")throw new b("Custom objects JSON must be an object");const t=e;if(!Array.isArray(t.entries))throw new b("Custom objects JSON must include entries: []");let a;return typeof t.version=="number"&&Number.isFinite(t.version)&&(a=t.version),{entries:t.entries.map((o,r)=>xt(o,r)).map(Et),...a!==void 0&&{schemaVersion:a}}}async function Rt(e){const t=await fetch(e);if(!t.ok)throw new Error(`Failed to load custom objects catalog: ${t.status}`);return Tt(await t.json())}var Ct="custom-objects-catalog";function qa(e){const t=e?.extraEnabled===!0,[a,o]=(0,N.useState)(!1);(0,N.useEffect)(()=>{queueMicrotask(()=>{o(!0)})},[]);const r=ke({queryKey:[Ct],queryFn:async()=>{const{entries:s,schemaVersion:l}=await Rt(Be("data/custom/custom-objects.json"));return yt(s,bt(s,l)),s},enabled:t||a,staleTime:Ie,retry:!1});return(0,N.useEffect)(()=>{r.isError&&St()},[r.isError]),r}var ne=null,je=0,ce=new Set;function Mt(){je+=1;for(const e of ce)e()}function Xa(){return je}function Za(e){return ce.add(e),()=>ce.delete(e)}function Qa(e,t){ne={c1Abbr:e,c2Abbr:t},Mt()}function Ja(){const e=ne;return ne=null,e}var n;(function(e){e.TerrainWet="terrain_wet",e.TerrainDry="terrain_dry",e.Aquatic="aquatic",e.Barren="barren",e.GasGiant="gas_giant",e.GasGiantRinged="gas_giant_ringed",e.Molten="molten",e.Ice="ice",e.Star="star",e.BlackHole="black_hole",e.Galaxy="galaxy",e.Nebula="nebula"})(n||(n={}));var C={[n.TerrainWet]:{base1:[.4,.69,.78,1],base2:[.4,.69,.78,1],base3:[.204,.255,.616,1],land1:[.784,.831,.365,1],land2:[.388,.671,.247,1],land3:[.184,.341,.325,1],land4:[.157,.208,.251,1],cloud1:[.882,.949,1,1],cloud2:[.753,.89,1,1],cloud3:[.369,.439,.647,1],cloud4:[.251,.286,.451,1],atmo1:[.678,.847,.902,.25],atmo2:[0,.498,1,.35],atmo3:[0,0,.502,.45]},[n.TerrainDry]:{col1:[.96,.85,.63,1],col2:[.85,.65,.4,1],col3:[.58,.38,.26,1],col4:[.35,.22,.2,1]},[n.Aquatic]:{base1:[.157,.38,.69,1],base2:[.118,.286,.58,1],base3:[.078,.176,.42,1],land1:[.388,.671,.247,1],land2:[.255,.502,.216,1],land3:[.184,.341,.325,1],land4:[.118,.22,.259,1],cloud1:[.882,.949,1,1],cloud2:[.753,.89,1,1],cloud3:[.369,.439,.647,1],cloud4:[.251,.286,.451,1],atmo1:[.4,.7,.9,.25],atmo2:[.1,.4,.8,.35],atmo3:[.05,.15,.5,.45]},[n.Barren]:{base1:[.608,.62,.722,1],base2:[.278,.38,.486,1],base3:[.208,.224,.333,1],crater1:[.278,.38,.486,1],crater2:[.208,.224,.333,1]},[n.GasGiant]:{gas_base1:[.941,.71,.255,1],gas_base2:[.812,.459,.169,1],gas_base3:[.671,.318,.188,1],gas_base4:[.49,.22,.2,1],gas_dark1:[.231,.125,.153,1],gas_dark2:[.231,.125,.153,1],gas_dark3:[.129,.094,.106,1],gas_dark4:[.129,.094,.106,1]},[n.GasGiantRinged]:{gas1:[.941,.71,.255,1],gas2:[.812,.459,.169,1],gas3:[.671,.318,.188,1],gas4:[.49,.22,.2,1],gas_dark1:[.231,.125,.153,1],gas_dark2:[.2,.11,.14,1],gas_dark3:[.129,.094,.106,1],gas_dark4:[.1,.07,.09,1],ring1:[.941,.78,.45,1],ring2:[.812,.56,.3,1],ring3:[.58,.35,.2,1],ring4:[.35,.2,.15,1]},[n.Molten]:{base1:[.561,.302,.341,1],base2:[.322,.2,.247,1],base3:[.239,.161,.212,1],crater1:[.322,.2,.247,1],crater2:[.239,.161,.212,1],river1:[1,.537,.2,1],river2:[.902,.271,.224,1],river3:[.678,.184,.271,1]},[n.Ice]:{base1:[.98,1,1,1],base2:[.78,.831,1,1],base3:[.573,.561,.722,1],lake1:[.31,.643,.722,1],lake2:[.298,.408,.522,1],lake3:[.227,.247,.369,1],cloud1:[.882,.949,1,1],cloud2:[.753,.89,1,1],cloud3:[.369,.439,.647,1],cloud4:[.251,.286,.451,1]},[n.Star]:{star1:[1,.95,.5,1],star2:[1,.7,.2,1],star3:[.9,.35,.1,1],star4:[.6,.15,.05,1],blob:[1,.647,0,1],glow:[1,.6,.15,1]},[n.BlackHole]:{glow1:[1,.902,.784,1],glow2:[.98,.588,.353,1],glow3:[.973,.353,.137,1],glow4:[.667,.039,.031,1],purple:[.498,.004,.498,1],rim:[1,.816,.694,1],inset:[.867,.686,.765,1]},[n.Galaxy]:{core:[1,.96,.8,1],arm1:[.4,.5,.9,1],arm2:[.3,.35,.7,1],dust:[.15,.1,.2,1]}},M={[n.TerrainWet]:["base1","base2","base3","land1","land2","land3","land4","cloud1","cloud2","cloud3","cloud4","atmo1","atmo2","atmo3"],[n.TerrainDry]:["col1","col2","col3","col4"],[n.Aquatic]:["base1","base2","base3","land1","land2","land3","land4","cloud1","cloud2","cloud3","cloud4","atmo1","atmo2","atmo3"],[n.Barren]:["base1","base2","base3","crater1","crater2"],[n.GasGiant]:["gas_base1","gas_base2","gas_base3","gas_base4","gas_dark1","gas_dark2","gas_dark3","gas_dark4"],[n.GasGiantRinged]:["gas1","gas2","gas3","gas4","gas_dark1","gas_dark2","gas_dark3","gas_dark4","ring1","ring2","ring3","ring4"],[n.Molten]:["base1","base2","base3","crater1","crater2","river1","river2","river3"],[n.Ice]:["base1","base2","base3","lake1","lake2","lake3","cloud1","cloud2","cloud3","cloud4"],[n.Star]:["star1","star2","star3","star4","blob","glow"],[n.BlackHole]:["glow1","glow2","glow3","glow4","purple","rim","inset"],[n.Galaxy]:["core","arm1","arm2","dust"]},E={[n.TerrainWet]:20,[n.TerrainDry]:10,[n.Aquatic]:20,[n.Barren]:10,[n.GasGiant]:9,[n.GasGiantRinged]:75,[n.Molten]:10,[n.Ice]:20,[n.Star]:60,[n.BlackHole]:10,[n.Galaxy]:20,[n.Nebula]:0};function Se(e,t,a){const o=e.createShader(t);if(!o)throw new Error("Failed to create shader");if(e.shaderSource(o,a),e.compileShader(o),!e.getShaderParameter(o,e.COMPILE_STATUS)){const r=e.getShaderInfoLog(o);throw e.deleteShader(o),new Error(`Shader compile error: ${r}`)}return o}function Fe(e,t,a){const o=Se(e,e.VERTEX_SHADER,t),r=Se(e,e.FRAGMENT_SHADER,a),s=e.createProgram();if(!s)throw new Error("Failed to create program");if(e.attachShader(s,o),e.attachShader(s,r),e.linkProgram(s),!e.getProgramParameter(s,e.LINK_STATUS)){const l=e.getProgramInfoLog(s);throw e.deleteProgram(s),new Error(`Program link error: ${l}`)}return e.deleteShader(o),e.deleteShader(r),s}function we(e,t){const a=e.createTexture();if(!a)throw new Error("Failed to create texture");return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),a}function H(e,t){e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,1);const a=e.createTexture();if(!a)throw new Error("Failed to create BH texture");return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),a}function At(e){const t=e.createTexture();if(!t)throw new Error("Failed to create fallback texture");return e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,1,1,0,e.LUMINANCE,e.UNSIGNED_BYTE,new Uint8Array([128])),t}function Gt(e=128){const t=document.createElement("canvas");t.width=e,t.height=e;const a=t.getContext("2d");let o=48271;const r=()=>(o=o*16807%2147483647,(o-1)/2147483646);a.fillStyle="rgb(128,128,128)",a.fillRect(0,0,e,e);const s=e/2,l=e/2,i=e*8;for(let c=0;c<i;c++){const d=r()*Math.PI*2,_=r()*e*.5,f=s+Math.cos(d)*_,y=l+Math.sin(d)*_,p=r()*e*.08+1,S=Math.floor(80+r()*96);a.fillStyle=`rgba(${S},${S},${S},${.1+r()*.3})`,a.beginPath(),a.arc(f,y,p,0,Math.PI*2),a.fill()}const u=a.createRadialGradient(s,l,0,s,l,e*.5);return u.addColorStop(0,"rgba(128,128,128,0)"),u.addColorStop(.7,"rgba(128,128,128,0)"),u.addColorStop(1,"rgba(128,128,128,0.5)"),a.fillStyle=u,a.fillRect(0,0,e,e),t}function Pt(e){return new Promise((t,a)=>{const o=new Image;o.crossOrigin="anonymous",o.onload=()=>t(o),o.onerror=()=>a(new Error(`Failed to load noise texture: ${e}`)),o.src=e})}function kt(e,t){let a=Math.imul(e|0,2654435761)+Math.imul(t|0,2246822519)|0;return a=Math.imul(a>>>16^a,73244475),a=Math.imul(a>>>16^a,73244475),a=a>>>16^a,(a>>>0)%1e4/100+.1}var It=`
attribute vec2 a_position;
varying vec2 v_pos;
void main() {
    v_pos = a_position * 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,We=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

varying vec2 v_pos;

uniform float u_pixels;
uniform float u_time;
uniform float u_time_speed;
uniform float u_rotation;
uniform vec2 u_light_origin;
uniform float u_seed1, u_seed2, u_seed3, u_seed4, u_seed5, u_seed6;
uniform vec4 u_col0, u_col1, u_col2, u_col3, u_col4, u_col5;
uniform vec4 u_col6, u_col7, u_col8, u_col9, u_col10, u_col11;
uniform vec4 u_col12, u_col13, u_col14, u_col15;
uniform sampler2D u_noise_tex;
`,Ye=`
vec2 rotate2d(vec2 coord, float angle) {
    coord -= 0.5;
    coord *= mat2(vec2(cos(angle), -sin(angle)), vec2(sin(angle), cos(angle)));
    return coord + 0.5;
}

vec2 spherify(vec2 uv) {
    vec2 centered = uv * 2.0 - 1.0;
    float z2 = 1.0 - dot(centered, centered);
    if (z2 < 0.0) return uv;
    float z = sqrt(z2);
    vec2 sphere = centered / (z + 1.0);
    return sphere * 0.5 + 0.5;
}

// --- Standard noise (wrap vec2(1) * floor(sz+0.5)) ---

float rand_s(vec2 coord, float s, float sz) {
    coord = mod(coord, vec2(floor(sz + 0.5)));
    return fract(sin(dot(coord, vec2(12.9898, 78.233))) * 15.5453 * s);
}

float noise_s(vec2 coord, float s, float sz) {
    vec2 i = floor(coord);
    vec2 f = fract(coord);
    float a = rand_s(i, s, sz);
    float b = rand_s(i + vec2(1.0, 0.0), s, sz);
    float c = rand_s(i + vec2(0.0, 1.0), s, sz);
    float d = rand_s(i + vec2(1.0, 1.0), s, sz);
    vec2 cubic = f * f * (3.0 - 2.0 * f);
    return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
}

float fbm_s(vec2 coord, int oct, float s, float sz) {
    float value = 0.0;
    float scale = 0.5;
    for (int i = 0; i < 10; i++) {
        if (i >= oct) break;
        value += noise_s(coord, s, sz) * scale;
        coord *= 2.0;
        scale *= 0.5;
    }
    return value;
}

float circleNoise_s(vec2 uv, float s, float sz) {
    float uv_y = floor(uv.y);
    uv.x += uv_y * 0.31;
    vec2 f = fract(uv);
    float h = rand_s(vec2(floor(uv.x), floor(uv_y)), s, sz);
    float m = length(f - 0.25 - h * 0.5);
    float r = h * 0.25;
    return smoothstep(0.0, r, m * 0.75);
}

float circleCrater_s(vec2 uv, float s, float sz) {
    float uv_y = floor(uv.y);
    uv.x += uv_y * 0.31;
    vec2 f = fract(uv);
    float h = rand_s(vec2(floor(uv.x), floor(uv_y)), s, sz);
    float m = length(f - 0.25 - h * 0.5);
    float r = h * 0.25;
    return smoothstep(r - 0.10 * r, r, m);
}

// --- Wide noise (wrap vec2(2,1) * floor(sz+0.5)) ---

float rand_w(vec2 coord, float s, float sz) {
    coord = mod(coord, vec2(2.0, 1.0) * floor(sz + 0.5));
    return fract(sin(dot(coord, vec2(12.9898, 78.233))) * 15.5453 * s);
}

float noise_w(vec2 coord, float s, float sz) {
    vec2 i = floor(coord);
    vec2 f = fract(coord);
    float a = rand_w(i, s, sz);
    float b = rand_w(i + vec2(1.0, 0.0), s, sz);
    float c = rand_w(i + vec2(0.0, 1.0), s, sz);
    float d = rand_w(i + vec2(1.0, 1.0), s, sz);
    vec2 cubic = f * f * (3.0 - 2.0 * f);
    return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
}

float fbm_w(vec2 coord, int oct, float s, float sz) {
    float value = 0.0;
    float scale = 0.5;
    for (int i = 0; i < 10; i++) {
        if (i >= oct) break;
        value += noise_w(coord, s, sz) * scale;
        coord *= 2.0;
        scale *= 0.5;
    }
    return value;
}

float circleNoise_w(vec2 uv, float s, float sz) {
    float uv_y = floor(uv.y);
    uv.x += uv_y * 0.31;
    vec2 f = fract(uv);
    float h = rand_w(vec2(floor(uv.x), floor(uv_y)), s, sz);
    float m = length(f - 0.25 - h * 0.5);
    float r = h * 0.25;
    return smoothstep(0.0, r, m * 0.75);
}

// --- Voronoi cells (for star surface) ---

vec2 Hash2(vec2 p) {
    float r = 523.0 * sin(dot(p, vec2(53.3158, 43.6143)));
    return vec2(fract(15.32354 * r), fract(17.25865 * r));
}

float cells(vec2 p, float numCells, float tiles) {
    p *= numCells;
    float d = 1.0e10;
    for (int xo = -1; xo <= 1; xo++) {
        for (int yo = -1; yo <= 1; yo++) {
            vec2 tp = floor(p) + vec2(float(xo), float(yo));
            tp = p - tp - Hash2(mod(tp, numCells / tiles));
            d = min(d, dot(tp, tp));
        }
    }
    return sqrt(d);
}

// --- Circle pattern (for star blob/flare) ---

float circlePattern(vec2 uv, float circle_amt, float circle_sz, float s, float sz) {
    float invert = 1.0 / circle_amt;
    float offset = step(invert, mod(uv.y, invert * 2.0));
    uv.x += offset * invert * 0.5;
    vec2 rand_co = floor(uv * circle_amt) / circle_amt;
    uv = mod(uv, invert) * circle_amt;
    float r = rand_s(rand_co, s, sz);
    r = clamp(r, invert, 1.0 - invert);
    float circ = distance(uv, vec2(r));
    return smoothstep(circ, circ + 0.5, invert * circle_sz * rand_s(rand_co * 1.5, s, sz));
}

// --- Alpha compositing (source over) ---

vec4 alphaBlend(vec4 bg, vec4 fg) {
    float a = fg.a + bg.a * (1.0 - fg.a);
    if (a < 0.001) return vec4(0.0);
    vec3 rgb = (fg.rgb * fg.a + bg.rgb * bg.a * (1.0 - fg.a)) / a;
    return vec4(rgb, a);
}

// --- Branchless 4-color ramp (posterized) ---

vec4 sampleRamp4(float t, vec4 c0, vec4 c1, vec4 c2, vec4 c3) {
    t = clamp(t, 0.0, 1.0);
    vec4 r = mix(c0, c1, step(0.25, t));
    r = mix(r, c2, step(0.5, t));
    r = mix(r, c3, step(0.75, t));
    return r;
}

// --- Smooth 4-color gradient ---

vec4 smoothRamp4(float t, vec4 c0, vec4 c1, vec4 c2, vec4 c3) {
    t = clamp(t, 0.0, 1.0);
    vec4 r = mix(c0, c1, clamp(t / 0.333, 0.0, 1.0));
    r = mix(r, c2, clamp((t - 0.333) / 0.333, 0.0, 1.0));
    r = mix(r, c3, clamp((t - 0.666) / 0.334, 0.0, 1.0));
    return r;
}
`;function Bt(e,t){const a=t!==1?`    uv = (uv - 0.5) * ${t.toFixed(4)} + 0.5;
`:"",o=e.map(r=>r.feature.glsl(r.params)).join(`
`);return We+Ye+`
void main() {
    vec2 raw_uv = v_pos;
    vec2 uv = (floor(raw_uv * u_pixels) / u_pixels) + 0.5;
${a}
    float d_circle = distance(uv, vec2(0.5));
    float d_light = distance(uv, u_light_origin);
    float a_circle = step(d_circle, 0.49999);
    float t = u_time * u_time_speed;

    vec2 rotated = rotate2d(uv, u_rotation);
    vec2 sphered = spherify(rotated);

    vec4 result = vec4(0.0);

${o}

    gl_FragColor = result;
}
`}function Ot(e){return We+Ye+e}var $t=class{constructor(e,t,a){this.programs=new Map,this.noiseTexture=null,this.gl=e,this.quadVBO=t,this.fallbackTexture=a}setNoiseTexture(e){this.noiseTexture=e}precompile(e){this.programs.has(e.type)||this.buildProgram(e)}render(e,t,a){const o=this.gl,r=this.getOrBuild(e),s=t.resolution||512,l=t.seed,i=t.rotationAngle??0,u=t.timeSpeed??.1,c=t.lightPos??[.39,.7];o.useProgram(r.prog);const d=o.getAttribLocation(r.prog,"a_position");o.enableVertexAttribArray(d),o.bindBuffer(o.ARRAY_BUFFER,this.quadVBO),o.vertexAttribPointer(d,2,o.FLOAT,!1,0,0),this.setUniform1f(r,"u_pixels",s),this.setUniform1f(r,"u_time",a),this.setUniform1f(r,"u_time_speed",u),this.setUniform1f(r,"u_rotation",i),this.setUniform2f(r,"u_light_origin",c[0],c[1]);for(let S=1;S<=6;S++)this.setUniform1f(r,`u_seed${S}`,kt(l,S));const _=e.colorSlots,f=e.palette,y=t.colors||{};for(let S=0;S<16;S++){const R=_[S];let w=[0,0,0,0];R&&(y[R]?w=y[R]:f[R]&&(w=f[R])),this.setUniform4f(r,`u_col${S}`,w[0],w[1],w[2],w[3])}o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,this.noiseTexture||this.fallbackTexture);const p=this.getUniform(r,"u_noise_tex");p!==null&&o.uniform1i(p,0),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT),o.disable(o.BLEND),o.drawArrays(o.TRIANGLE_STRIP,0,4)}dispose(){const e=this.gl;this.programs.forEach(t=>e.deleteProgram(t.prog)),this.programs.clear()}getOrBuild(e){let t=this.programs.get(e.type);return t||(t=this.buildProgram(e)),t}buildProgram(e){let t;if(e.mode==="composed"&&e.features)t=Bt(e.features,e.uvScaling);else if(e.mode==="standalone"&&e.standaloneGlsl)t=Ot(e.standaloneGlsl);else throw new Error(`Invalid profile mode for shader rendering: ${e.mode}`);const a={prog:Fe(this.gl,It,t),uniforms:new Map};return this.programs.set(e.type,a),a}getUniform(e,t){return e.uniforms.has(t)||e.uniforms.set(t,this.gl.getUniformLocation(e.prog,t)),e.uniforms.get(t)}setUniform1f(e,t,a){const o=this.getUniform(e,t);o!==null&&this.gl.uniform1f(o,a)}setUniform2f(e,t,a,o){const r=this.getUniform(e,t);r!==null&&this.gl.uniform2f(r,a,o)}setUniform4f(e,t,a,o,r,s){const l=this.getUniform(e,t);l!==null&&this.gl.uniform4f(l,a,o,r,s)}},T=.4,Lt=84*Math.PI/180;200/2*T;var ee=400/2*T,te=350/2*T,ae=400/2*T,oe=1500/2*T*1.05,Ht=800/2*T,zt=1200/2*T,xe=33*T,Nt=83*T,Ut=20*T,Dt=1200*T,jt=-50*T,Ee=10,Te=3.33,Re=800,Ce=1.74;function _e(){return new Float32Array(16)}function X(){const e=_e();return e[0]=e[5]=e[10]=e[15]=1,e}function j(e,t){const a=_e();for(let o=0;o<4;o++)for(let r=0;r<4;r++)a[o*4+r]=e[r]*t[o*4]+e[4+r]*t[o*4+1]+e[8+r]*t[o*4+2]+e[12+r]*t[o*4+3];return a}function Ke(e,t){const a=X();return a[0]=e,a[5]=t,a}function Ft(e){const t=X(),a=Math.cos(e),o=Math.sin(e);return t[5]=a,t[9]=-o,t[6]=o,t[10]=a,t}function Ve(e){const t=X(),a=Math.cos(e),o=Math.sin(e);return t[0]=a,t[4]=-o,t[1]=o,t[5]=a,t}function Wt(e,t,a){const o=X();return o[12]=e,o[13]=t,o[14]=a,o}function Yt(){const e=_e(),t=Re/2,a=Re/2;return e[0]=Ce/t,e[5]=-Ce/a,e[10]=-.001,e[11]=-1/Dt,e[15]=1,e}function re(e,t,a=0){const o=Ke(e,t);return a?j(Ve(a),o):o}function $(e,t=0){let a=Ke(e,e);return t&&(a=j(Ve(t),a)),a=j(Wt(0,jt,0),a),j(Ft(Lt),a)}var Kt=`
attribute vec2 aPos;
uniform mat4 uMVP;
uniform mat4 uModel;
varying vec2 vUV;
varying float vZ;
void main() {
  vUV = aPos * 0.5 + 0.5;
  vZ  = (uModel * vec4(aPos, 0.0, 1.0)).z;
  gl_Position = uMVP * vec4(aPos, 0.0, 1.0);
}
`,Vt=`
precision mediump float;
varying vec2 vUV;
varying float vZ;
uniform sampler2D uTex;
uniform float uAlpha;
uniform float uClipZ;
void main() {
  vec4 c = texture2D(uTex, vUV);
  c *= uAlpha;
  if (uClipZ != 0.0) {
    float fade = smoothstep(-50.0, 50.0, vZ * uClipZ);
    c *= fade;
  }
  gl_FragColor = c;
}
`;function h(e,t){return`rgba(${Math.round(e[0]*255)},${Math.round(e[1]*255)},${Math.round(e[2]*255)},${t})`}function qt(e){return`rgb(${Math.round(e[0]*255)},${Math.round(e[1]*255)},${Math.round(e[2]*255)})`}function Me(e){return`rgba(${Math.round(e[0]*255)},${Math.round(e[1]*255)},${Math.round(e[2]*255)},`}function Xt(e){const t=e.glow1,a=e.glow2,o=e.glow3,r=e.glow4,s=e.purple,l=e.rim,i=e.inset;return{glow:[{offset:0,color:h(t,.65)},{offset:.08,color:h(t,.55)},{offset:.2,color:h(a,.6)},{offset:.34,color:h(a,.6)},{offset:.49,color:h(o,.55)},{offset:.63,color:h(o,.55)},{offset:.73,color:h(r,.45)},{offset:.83,color:h(r,.18)},{offset:.97,color:h(r,.05)},{offset:1,color:h(r,0)}],hGlow:[{offset:0,color:h(t,0)},{offset:.53,color:h(t,0)},{offset:.54,color:"rgba(255,255,255,0.7)"},{offset:.55,color:h(t,.85)},{offset:.59,color:h(a,.75)},{offset:.63,color:h(a,.85)},{offset:.73,color:h(o,.6)},{offset:.83,color:h(r,.4)},{offset:.97,color:h(r,.1)},{offset:1,color:h(r,0)}],backglow:[{offset:0,color:h(s,0)},{offset:.14,color:h(s,0)},{offset:.4,color:h(s,.1)},{offset:.7,color:"rgba(0,0,0,0)"},{offset:1,color:"rgba(0,0,0,0)"}],holeBloom:h(s,.6),holeHalo:h(s,.6),holeOuterRim:qt(l),holeInsetA:Me(l),holeInsetB:Me(i)}}function Z(e,t){const a=document.createElement("canvas");return a.width=Math.ceil(e),a.height=Math.ceil(t),[a,a.getContext("2d")]}function Zt(e){const t=xe*3,a=(ee+t)*2,o=(te+t)*2,[r,s]=Z(a,o),l=a/2,i=o/2;s.filter=`blur(${xe}px)`;const u=Math.sqrt(ee**2+te**2),c=s.createRadialGradient(l,i,0,l,i,u);for(const d of e.glow)c.addColorStop(d.offset,d.color);return s.fillStyle=c,s.beginPath(),s.ellipse(l,i,ee,te,0,0,Math.PI*2),s.fill(),r}function qe(e,t,a){const o=(e+t*3)*2,[r,s]=Z(o,o),l=o/2;s.filter=`blur(${t}px)`;const i=e*Math.SQRT2,u=s.createRadialGradient(l,l,0,l,l,i);for(const c of a)u.addColorStop(c.offset,c.color);return s.fillStyle=u,s.beginPath(),s.arc(l,l,e,0,Math.PI*2),s.fill(),r}function Qt(e){return qe(Ht,Nt,e.hGlow)}function Jt(e){return qe(zt,Ut,e.backglow)}function ea(e){const[r,s]=Z(600,600),l=600/2,i=600/2;s.save(),s.filter="blur(100px)",s.fillStyle=e.holeBloom,s.beginPath(),s.arc(l,i,110,0,Math.PI*2),s.fill(),s.restore(),s.save(),s.filter="blur(50px)",s.fillStyle="white",s.beginPath(),s.arc(l,i,105,0,Math.PI*2),s.fill(),s.restore(),s.save(),s.filter="blur(2px)",s.fillStyle="rgb(0,0,0)",s.beginPath(),s.arc(l,i,108,0,Math.PI*2),s.fill(),s.restore(),s.save(),s.filter="blur(6px)",s.fillStyle=e.holeHalo,s.beginPath(),s.arc(l,i,102,0,Math.PI*2),s.fill(),s.restore(),s.save(),s.filter="blur(2px)",s.fillStyle=e.holeOuterRim,s.beginPath(),s.arc(l,i,100,0,Math.PI*2),s.fill(),s.restore(),s.fillStyle="black",s.beginPath(),s.arc(l,i,100,0,Math.PI*2),s.fill();const u=s.createRadialGradient(l,i,98,l,i,100);u.addColorStop(0,"transparent"),u.addColorStop(.5,e.holeInsetA+"0.15)"),u.addColorStop(1,e.holeInsetA+"0.5)"),s.fillStyle=u,s.beginPath(),s.arc(l,i,100,0,Math.PI*2),s.fill();const c=s.createRadialGradient(l,i,97,l,i,100);return c.addColorStop(0,"transparent"),c.addColorStop(.5,e.holeInsetB+"0.1)"),c.addColorStop(1,e.holeInsetB+"0.35)"),s.fillStyle=c,s.beginPath(),s.arc(l,i,100,0,Math.PI*2),s.fill(),r}function Ae(e,t,a){const o=Math.ceil(t*2),[r,s]=Z(o,o),l=o/2;s.save(),s.beginPath(),s.arc(l,l,t,0,Math.PI*2),s.clip(),s.drawImage(e,0,0,o,o),s.restore(),s.globalCompositeOperation="destination-in";const i=s.createRadialGradient(l,l,0,l,l,t);for(const u of a)i.addColorStop(u.offset,`rgba(0,0,0,${u.alpha})`);return s.fillStyle=i,s.fillRect(0,0,o,o),s.globalCompositeOperation="source-over",r}var ta=class{constructor(e,t){this.state=null,this.noiseImage=null,this.gl=e,this.quadVBO=t}setNoiseImage(e){this.noiseImage=e,this.state&&!this.state.texHEH&&this.dispose()}init(e){const t=this.gl;this.dispose();const a=Xt(e),o=Fe(t,Kt,Vt);t.useProgram(o);const r=t.getUniformLocation(o,"uMVP"),s=t.getUniformLocation(o,"uModel"),l=t.getUniformLocation(o,"uTex"),i=t.getUniformLocation(o,"uAlpha"),u=t.getUniformLocation(o,"uClipZ"),c=t.getAttribLocation(o,"aPos");t.uniform1i(l,0);const d=Yt(),_=Zt(a),f=Qt(a),y=Jt(a),p=ea(a),S=H(t,_),R=H(t,f),w=H(t,y),O=H(t,p);let P=null,k=null;this.noiseImage&&(P=H(t,Ae(this.noiseImage,ae,[{offset:0,alpha:1},{offset:.283,alpha:1},{offset:.99,alpha:0},{offset:1,alpha:0}])),k=H(t,Ae(this.noiseImage,oe,[{offset:0,alpha:1},{offset:.283,alpha:.7},{offset:.99,alpha:0},{offset:1,alpha:0}]))),this.state={prog:o,locMvp:r,locModel:s,locTex:l,locAlpha:i,locClipZ:u,aPosLoc:c,proj:d,texGlow:S,glowHW:_.width/2,glowHH:_.height/2,texHGlow:R,hglowHS:f.width/2,texBglow:w,bglowHS:y.width/2,texHole:O,holeHS:p.width/2*T,texEH:P,texHEH:k}}render(e,t,a){const o=this.gl;(!this.state||this.state.texHEH===null&&this.noiseImage!==null)&&this.init(e);const r=this.state;o.useProgram(r.prog),o.bindBuffer(o.ARRAY_BUFFER,this.quadVBO),o.enableVertexAttribArray(r.aPosLoc),o.vertexAttribPointer(r.aPosLoc,2,o.FLOAT,!1,0,0),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT),o.enable(o.BLEND),o.disable(o.DEPTH_TEST);const s=t*a,l=s%Ee/Ee*Math.PI*2,i=s%Te/Te*Math.PI*2,u=()=>o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),c=()=>o.blendFunc(o.ONE,o.ONE_MINUS_SRC_COLOR);u(),this.drawQuad(r,r.texGlow,re(r.glowHW,r.glowHH),1,0),r.texHEH&&(c(),this.drawQuad(r,r.texHEH,$(oe,l),.35,-1)),u(),this.drawQuad(r,r.texHGlow,$(r.hglowHS),1,-1),this.drawQuad(r,r.texHGlow,$(r.hglowHS),1,-1),r.texEH&&(c(),this.drawQuad(r,r.texEH,re(ae,ae,i),.7,0)),u(),this.drawQuad(r,r.texBglow,$(r.bglowHS),1,0),this.drawQuad(r,r.texHole,re(r.holeHS,r.holeHS),1,0),u(),this.drawQuad(r,r.texHGlow,$(r.hglowHS),1,1),this.drawQuad(r,r.texHGlow,$(r.hglowHS),1,1),r.texHEH&&(c(),this.drawQuad(r,r.texHEH,$(oe,l),.35,1)),o.disable(o.BLEND)}dispose(){if(!this.state)return;const e=this.gl,t=this.state;e.deleteProgram(t.prog),e.deleteTexture(t.texGlow),e.deleteTexture(t.texHGlow),e.deleteTexture(t.texBglow),e.deleteTexture(t.texHole),t.texEH&&e.deleteTexture(t.texEH),t.texHEH&&e.deleteTexture(t.texHEH),this.state=null}drawQuad(e,t,a,o,r){const s=this.gl,l=j(e.proj,a);s.uniformMatrix4fv(e.locMvp,!1,l),s.uniformMatrix4fv(e.locModel,!1,a),s.uniform1f(e.locAlpha,o),s.uniform1f(e.locClipZ,r),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,t),s.drawArrays(s.TRIANGLE_STRIP,0,4)}},aa=class{constructor(e){this.hasSpare=!1,this.spare=0,this.s=e}next(){return this.s=(this.s*16807+0)%2147483647,(this.s-1)/2147483646}random(e,t){return t!==void 0?e+this.next()*(t-e):e!==void 0?this.next()*e:this.next()}randomGaussian(e=0,t=1){if(this.hasSpare)return this.hasSpare=!1,e+t*this.spare;let a,o,r;do a=this.next()*2-1,o=this.next()*2-1,r=a*a+o*o;while(r>=1||r===0);return r=Math.sqrt(-2*Math.log(r)/r),this.spare=o*r,this.hasSpare=!0,e+t*a*r}},oa=Math.PI*2,ra=900;function Ge(e){if(typeof document>"u")return new OffscreenCanvas(e,e);const t=document.createElement("canvas");return t.width=e,t.height=e,t}function sa(e,t=512,a){const o=new aa(e),r=ra,s=Ge(r),l=s.getContext("2d");function i(v,I,U,B){const D=Math.max(0,Math.min(255,B));l.fillStyle=`rgba(${v|0},${I|0},${U|0},${D/255})`}function u(v,I,U){const B=Math.abs(U)/2;B<.1||(l.beginPath(),l.arc(v,I,B,0,oa),l.fill())}function c(v,I,U,B,D){D=D+r/2e3;const et=8300+Math.floor(r/3),tt=r/1500,Q=20;for(let ge=0;ge<et;ge++)i(v+o.random(Q),U+o.random(Q),I+o.random(Q),Math.abs(o.randomGaussian())/4),u(-r/2+r/2*o.randomGaussian(),r*o.randomGaussian()/B,o.randomGaussian(r/100,r/B+r/40)),i(255,255,255,D*o.randomGaussian()/2),u(-r/2+r/2*o.randomGaussian(),r*o.randomGaussian()/B,tt*o.randomGaussian())}function d(){const v=r*4;for(let I=0;I<v;I++)i(255,255,255,Math.abs(255*o.randomGaussian())),u(-r/2+r/2*o.randomGaussian(),r*o.randomGaussian()*o.randomGaussian()*o.randomGaussian()*o.randomGaussian(),.5*o.randomGaussian())}function _(){l.save(),l.translate(o.random(-r/2,r/2),o.random(-r/10,r/10)),c(o.random(100,255),o.random(100,255),o.random(100,255),29,100),l.scale(.05,.05),c(o.random(100,255),o.random(100,255),o.random(100,255),10,2),c(255,255,255,2,2),d(),l.restore()}l.save(),l.translate(r/2,r/2);const f=o.random(.3,1);l.scale(f,f),l.rotate(o.random(-Math.PI,Math.PI));const y=a?.dominant??[o.random(10,255),o.random(10,255),o.random(10,255)];c(y[0],y[1],y[2],3,6),d();const p=a?.accents??[[200,200,200],[0,200,250],[250,100,250]];c(p[0][0],p[0][1],p[0][2],7,205),p.length>1&&c(p[1][0],p[1][1],p[1][2],22,205),p.length>2&&c(p[2][0],p[2][1],p[2][2],25,205);const S=Math.floor(o.random(0,3.1));for(let v=0;v<S;v++)_();const R=Math.max(10,r/12),w=Math.floor(o.random(5,R));for(let v=0;v<w;v++)l.save(),l.translate(r/3*o.randomGaussian(),r/3*o.randomGaussian()),l.scale(o.random(.5,1),o.random(.5,1)),l.rotate(o.random(-Math.PI/4,Math.PI/4)),c(o.random(100,255),o.random(100,255),o.random(100,255),15,100),l.restore();l.restore();const O=r/2,P=r/2,k=r,m=l.createRadialGradient(O,P,k*.25,O,P,k*.52);if(m.addColorStop(0,"rgba(0,0,0,0)"),m.addColorStop(.6,"rgba(0,0,0,0)"),m.addColorStop(1,"rgba(0,0,0,1)"),l.globalCompositeOperation="destination-out",l.fillStyle=m,l.fillRect(0,0,r,r),l.globalCompositeOperation="source-over",t===r)return s;const G=Ge(t);return G.getContext("2d").drawImage(s,0,0,t,t),G}var F={id:"base_planet",seedSlots:[1],colorSlotRange:[0,3],glsl:e=>{const t=e.uvSource===1?"sphered":"rotated",a=e.octaves||6,o=`u_seed${e.seedSlot||1}`,r=`u_col${e.colorStart||0}`,s=`u_col${(e.colorStart||0)+1}`,l=`u_col${(e.colorStart||0)+2}`;return`
    // === BASE PLANET ===
    {
        float base_sz = ${(e.noiseScale||10).toFixed(1)};
        float base_fbm1 = fbm_s(${t}, ${a}, ${o}, base_sz);
        float base_dl = d_light + fbm_s(${t} * base_sz + base_fbm1 + vec2(t, 0.0), ${a}, ${o}, base_sz) * 0.1;

        vec4 base_col = mix(${r}, ${s}, step(0.4, base_dl));
        base_col = mix(base_col, ${l}, step(0.6, base_dl));
        result = vec4(base_col.rgb, a_circle * base_col.a);
    }`}},Xe={id:"land_mass",seedSlots:[2],colorSlotRange:[3,7],glsl:e=>{const t=(e.landCutoff??.5).toFixed(4),a=`u_seed${e.seedSlot||2}`,o=`u_col${e.colorStart||3}`,r=`u_col${(e.colorStart||3)+1}`,s=`u_col${(e.colorStart||3)+2}`,l=`u_col${(e.colorStart||3)+3}`;return`
    // === LAND MASS ===
    {
        float land_sz = ${(e.noiseScale||10).toFixed(1)};
        vec2 land_base = sphered * land_sz + vec2(t, 0.0);
        float lf1 = fbm_s(land_base, 6, ${a}, land_sz);
        float lf2 = fbm_s(land_base - u_light_origin * lf1, 6, ${a}, land_sz);
        float lf3 = fbm_s(land_base - u_light_origin * 1.5 * lf1, 6, ${a}, land_sz);
        float lf4 = fbm_s(land_base - u_light_origin * 2.0 * lf1, 6, ${a}, land_sz);

        float dl_mid = step(0.4, d_light);
        float dl_hi  = step(0.6, d_light);
        float dl_lo  = 1.0 - dl_mid;
        lf4 *= mix(1.0, 0.9, dl_lo);
        lf2 *= mix(1.0, 1.05, dl_mid) * mix(1.0, 1.3, dl_hi);
        lf3 *= mix(1.0, 1.05, dl_mid) * mix(1.0, 1.4, dl_hi);
        lf4 *= mix(1.0, 1.05, dl_mid) * mix(1.0, 1.8, dl_hi);

        float ld = pow(d_light, 2.0) * 0.1;
        vec4 land_col = ${l};
        land_col = mix(land_col, ${s}, step(lf4 + ld, lf1));
        land_col = mix(land_col, ${r}, step(lf3 + ld, lf1));
        land_col = mix(land_col, ${o}, step(lf2 + ld, lf1));
        float land_a = step(${t}, lf1) * a_circle * land_col.a;
        result = alphaBlend(result, vec4(land_col.rgb, land_a));
    }`}},me={id:"clouds",seedSlots:[3],colorSlotRange:[7,11],glsl:e=>{const t=(e.cloudCover??.546).toFixed(4),a=(e.cloudScale||4).toFixed(1),o=`u_seed${e.seedSlot||3}`;return`
    // === CLOUD LAYER ===
    {
        float cloud_sz = ${a};
        vec2 cloud_uv = sphered;
        cloud_uv.y += smoothstep(0.0, 1.3, abs(cloud_uv.x - 0.4));
        cloud_uv *= vec2(1.0, 2.5);

        float c_noise = 0.0;
        for (int j = 0; j < 9; j++) {
            c_noise += circleNoise_s(cloud_uv * cloud_sz * 0.3 + float(j + 1) + 10.0 + vec2(t, 0.0), ${o}, cloud_sz);
        }
        float cloud_c = fbm_s(cloud_uv * cloud_sz + c_noise + vec2(t, 0.0), 4, ${o}, cloud_sz);

        float cloud_cover = ${t};
        vec4 cloud_col = ${`u_col${e.colorStart||7}`};
        cloud_col = mix(cloud_col, ${`u_col${(e.colorStart||7)+1}`}, step(cloud_c, cloud_cover + 0.03));
        cloud_col = mix(cloud_col, ${`u_col${(e.colorStart||7)+2}`}, step(0.4, d_light + cloud_c * 0.2));
        cloud_col = mix(cloud_col, ${`u_col${(e.colorStart||7)+3}`}, step(0.6, d_light + cloud_c * 0.2));
        float cloud_d = distance(uv, vec2(0.5));
        cloud_c *= step(cloud_d, 0.5);
        float cloud_a = step(cloud_cover, cloud_c) * a_circle * cloud_col.a;
        result = alphaBlend(result, vec4(cloud_col.rgb, cloud_a));
    }`}},Ze={id:"atmosphere",seedSlots:[],colorSlotRange:[11,14],glsl:e=>`
    // === ATMOSPHERE ===
    {
        vec2 atmo_ndc = 2.0 * uv - 1.0;
        float atmo_d = length(atmo_ndc);
        vec4 atmo = mix(vec4(0.0), ${`u_col${e.colorStart||11}`}, smoothstep(0.65, 0.87, atmo_d));
        atmo = mix(atmo, ${`u_col${(e.colorStart||11)+1}`}, smoothstep(0.87, 0.97, atmo_d));
        atmo = mix(atmo, ${`u_col${(e.colorStart||11)+2}`}, smoothstep(0.97, 1.04, atmo_d));
        atmo = mix(atmo, vec4(0.0), smoothstep(1.04, 1.05, atmo_d));
        result = alphaBlend(result, atmo);
    }`},la={type:n.TerrainWet,mode:"composed",uvScaling:1.05,features:[{feature:F,params:{uvSource:0,octaves:6,seedSlot:1,colorStart:0,noiseScale:10}},{feature:Xe,params:{landCutoff:.5,seedSlot:2,colorStart:3,noiseScale:10}},{feature:me,params:{cloudCover:.546,cloudScale:4,seedSlot:3,colorStart:7}},{feature:Ze,params:{colorStart:11}}],palette:C[n.TerrainWet],colorSlots:M[n.TerrainWet],loopLCM:E[n.TerrainWet],defaults:{fbmOctaves:6,noiseScale:10,cloudCover:.546,cloudScale:4,landCutoff:.5}},na=`
void main() {
    vec2 raw_uv = v_pos;
    vec2 uv = (floor(raw_uv * u_pixels) / u_pixels) + 0.5;

    float d_circle = distance(uv, vec2(0.5));
    float a = step(d_circle, 0.49999);
    float t = u_time * u_time_speed;

    vec2 suv = spherify(uv);
    float d_light = distance(suv, u_light_origin);
    suv = rotate2d(suv, u_rotation);

    float sz = 10.0;
    float f = fbm_s(suv * sz + vec2(t, 0.0), 4, u_seed1, sz);

    d_light = smoothstep(-0.3, 1.2, d_light);
    d_light *= mix(1.0, 0.9, step(d_light, 0.362));
    d_light *= mix(1.0, 0.9, step(d_light, 0.525));

    float c = d_light * pow(f, 0.8) * 3.5;
    float posterize = floor(c * 4.0) / 4.0;
    vec4 col = sampleRamp4(posterize, u_col0, u_col1, u_col2, u_col3);

    gl_FragColor = vec4(col.rgb, a * col.a);
}
`,ca={type:n.TerrainDry,mode:"standalone",uvScaling:1,standaloneGlsl:na,palette:C[n.TerrainDry],colorSlots:M[n.TerrainDry],loopLCM:E[n.TerrainDry],defaults:{}},ia={type:n.Aquatic,mode:"composed",uvScaling:1.05,features:[{feature:F,params:{uvSource:0,octaves:6,seedSlot:1,colorStart:0,noiseScale:10}},{feature:Xe,params:{landCutoff:.65,seedSlot:2,colorStart:3,noiseScale:10}},{feature:me,params:{cloudCover:.546,cloudScale:4,seedSlot:3,colorStart:7}},{feature:Ze,params:{colorStart:11}}],palette:C[n.Aquatic],colorSlots:M[n.Aquatic],loopLCM:E[n.Aquatic],defaults:{fbmOctaves:6,noiseScale:10,cloudCover:.546,cloudScale:4,landCutoff:.65}},Qe={id:"craters",seedSlots:[2],colorSlotRange:[3,5],glsl:e=>{const t=(e.craterScale||5).toFixed(1),a=`u_seed${e.seedSlot||2}`,o=`u_col${e.colorStart||3}`,r=`u_col${(e.colorStart||3)+1}`;return`
    // === CRATER LAYER ===
    {
        float crater_sz = ${t};
        float c1_val = 1.0;
        for (int i = 0; i < 2; i++) {
            c1_val *= circleCrater_s(sphered * crater_sz + float(i + 1) + 10.0 + vec2(t, 0.0), ${a}, crater_sz);
        }
        float crater1 = 1.0 - c1_val;

        float c2_val = 1.0;
        vec2 c2_off = (u_light_origin - 0.5) * 0.04;
        for (int i = 0; i < 2; i++) {
            c2_val *= circleCrater_s((sphered + c2_off) * crater_sz + float(i + 1) + 10.0 + vec2(t, 0.0), ${a}, crater_sz);
        }
        float crater2 = 1.0 - c2_val;

        vec4 crater_col = ${o};
        float crater_a = step(0.5, crater1) * a_circle;
        crater_col = mix(crater_col, ${r}, step(crater2, crater1 - (0.5 - d_light) * 2.0));
        crater_col = mix(crater_col, ${r}, step(0.4, d_light));
        crater_a *= step(d_circle, 0.5);
        result = alphaBlend(result, vec4(crater_col.rgb, crater_a * crater_col.a));
    }`}},ua={type:n.Barren,mode:"composed",uvScaling:1,features:[{feature:F,params:{uvSource:0,octaves:6,seedSlot:1,colorStart:0,noiseScale:10}},{feature:Qe,params:{craterScale:5,seedSlot:2,colorStart:3}}],palette:C[n.Barren],colorSlots:M[n.Barren],loopLCM:E[n.Barren],defaults:{fbmOctaves:6,noiseScale:10,craterScale:5}},da=`
void main() {
    vec2 raw_uv = v_pos;
    vec2 uv = (floor(raw_uv * u_pixels) / u_pixels) + 0.5;

    float d_circle = distance(uv, vec2(0.5));
    float d_light = distance(uv, u_light_origin);
    float a_circle = step(d_circle, 0.49999);
    float t = u_time * u_time_speed;

    vec2 rotated = rotate2d(uv, u_rotation);
    vec2 sphered = spherify(rotated);

    // === BASE GAS ===
    float gas_sz = 9.0;
    vec2 gas_uv = sphered;
    float cn_base = 0.0;
    for (int j = 0; j < 9; j++) {
        cn_base += circleNoise_s(gas_uv * gas_sz * 0.3 + float(j + 1) + 10.0 + vec2(t, 0.0), u_seed1, gas_sz);
    }
    float gas_c = fbm_s(gas_uv * gas_sz + cn_base + vec2(t, 0.0), 5, u_seed1, gas_sz);

    vec4 gas_col = u_col0;
    gas_col = mix(gas_col, u_col1, step(gas_c, 0.03));
    gas_col = mix(gas_col, u_col2, step(0.4, d_light + gas_c * 0.2));
    gas_col = mix(gas_col, u_col3, step(0.6, d_light + gas_c * 0.2));
    vec4 result = vec4(gas_col.rgb, a_circle * gas_col.a);

    // === DARK GAS OVERLAY ===
    vec2 gas2_uv = sphered;
    gas2_uv.y += smoothstep(0.0, 1.3, abs(gas2_uv.x - 0.4));
    float cn_dark = 0.0;
    for (int j = 0; j < 9; j++) {
        cn_dark += circleNoise_s(gas2_uv * gas_sz * 0.3 + float(j + 1) + 10.0 + vec2(t, 0.0), u_seed2, gas_sz);
    }
    float gas2_c = fbm_s(gas2_uv * gas_sz + cn_dark + vec2(t, 0.0), 5, u_seed2, gas_sz);

    float cloud_cover = 0.538;
    vec4 gas2_col = u_col4;
    gas2_col = mix(gas2_col, u_col5, step(gas2_c, cloud_cover + 0.03));
    gas2_col = mix(gas2_col, u_col6, step(0.4, d_light + gas2_c * 0.2));
    gas2_col = mix(gas2_col, u_col7, step(0.6, d_light + gas2_c * 0.2));
    float gas2_a = step(cloud_cover, gas2_c) * a_circle * gas2_col.a;
    result = alphaBlend(result, vec4(gas2_col.rgb, gas2_a));

    gl_FragColor = result;
}
`,fa={type:n.GasGiant,mode:"standalone",uvScaling:1,standaloneGlsl:da,palette:C[n.GasGiant],colorSlots:M[n.GasGiant],loopLCM:E[n.GasGiant],defaults:{}},_a=`
void main() {
    vec2 raw_uv = v_pos;
    vec2 uv = (floor(raw_uv * u_pixels) / u_pixels) + 0.5;
    float t = u_time * u_time_speed;

    // Planet body at 50% scale to leave room for ring
    float body_scale = 2.0;
    vec2 body_raw = v_pos * body_scale;
    vec2 body_uv = (floor(body_raw * u_pixels) / u_pixels) + 0.5;

    float body_d_circle = distance(body_uv, vec2(0.5));
    float body_a = step(body_d_circle, 0.49999);
    float body_d_light = distance(body_uv, u_light_origin);

    vec2 body_rotated = rotate2d(body_uv, u_rotation);
    vec2 body_sphered = spherify(body_rotated);

    // === DENSE GAS PLANET ===
    float gas_sz = 15.0;
    float band = fbm_w(vec2(0.0, body_sphered.y * gas_sz), 6, u_seed1, gas_sz);
    float turb = 0.0;
    for (int j = 0; j < 10; j++) {
        turb += circleNoise_w(body_sphered * gas_sz * 0.3 + float(j + 1) + 10.0 + vec2(t, 0.0), u_seed1, gas_sz);
    }

    float gf1 = fbm_w(body_sphered * gas_sz, 6, u_seed1, gas_sz);
    float gf2 = fbm_w(body_sphered * vec2(1.0, 2.0) * gas_sz + gf1 + vec2(-t, 0.0) + turb, 6, u_seed1, gas_sz);
    gf2 *= pow(band, 2.0) * 7.0;
    float light = gf2 + body_d_light * 1.8;
    gf2 += pow(body_d_light, 1.0) - 0.3;
    gf2 = smoothstep(-0.2, 4.0 - gf2, light);

    float posterized = floor(gf2 * 4.0) / 2.0;
    vec4 gas_col = mix(
        sampleRamp4(posterized, u_col0, u_col1, u_col2, u_col3),
        sampleRamp4(posterized - 1.0, u_col4, u_col5, u_col6, u_col7),
        step(0.625, gf2)
    );
    vec4 result = vec4(gas_col.rgb, body_a * gas_col.a);

    // === RING LAYER ===
    float ring_sz = 25.0;
    float ring_width = 0.143;
    float ring_perspective = 6.0;
    float scale_planet = 4.0;

    vec2 ring_uv = rotate2d(uv, u_rotation);
    vec2 ring_center = ring_uv - vec2(0.0, 0.5);
    ring_center *= vec2(1.0, ring_perspective);
    float center_d = distance(ring_center, vec2(0.5, 0.0));

    float ring = smoothstep(0.5 - ring_width * 2.0, 0.5 - ring_width, center_d);
    ring *= smoothstep(center_d - ring_width, center_d, 0.4);

    // Hide ring behind planet in upper half
    float behind = step(ring_uv.y, 0.5) * (1.0 - step(1.0 / scale_planet, distance(ring_uv, vec2(0.5))));
    ring *= 1.0 - behind;

    // Ring material noise
    vec2 ring_mat_uv = rotate2d(ring_center + vec2(0.0, 0.5), t);
    ring *= fbm_w(ring_mat_uv * ring_sz, 8, u_seed2, ring_sz);

    float ring_posterized = floor((ring + pow(body_d_light, 2.0) * 2.0) * 4.0) / 4.0;
    vec4 ring_col = mix(
        sampleRamp4(ring_posterized, u_col8, u_col9, u_col10, u_col11),
        sampleRamp4(ring_posterized - 1.0, u_col8, u_col9, u_col10, u_col11),
        step(1.0, ring_posterized)
    );
    float ring_a = step(0.28, ring);
    result = alphaBlend(result, vec4(ring_col.rgb, ring_a * ring_col.a));

    gl_FragColor = result;
}
`,ma={type:n.GasGiantRinged,mode:"standalone",uvScaling:1,standaloneGlsl:_a,palette:C[n.GasGiantRinged],colorSlots:M[n.GasGiantRinged],loopLCM:E[n.GasGiantRinged],defaults:{}},Je={id:"flow_layer",seedSlots:[2,3],colorSlotRange:[3,6],glsl:e=>{const t=e.flowOctaves||5,a=(e.flowCutoff??.6).toFixed(4),o=(e.flowScale||10).toFixed(1),r=`u_seed${e.seedSlot||3}`,s=`u_col${e.colorStart||5}`,l=`u_col${(e.colorStart||5)+1}`,i=`u_col${(e.colorStart||5)+2}`;return e.useScroll,`
    // === FLOW LAYER ===
    {
        float flow_sz = ${o};
        float flow_cutoff = ${a};
        float rf1 = fbm_w(sphered * flow_sz + vec2(t, 0.0), ${t}, ${r}, flow_sz);
        float river = fbm_w(sphered + vec2(t, 0.0) + rf1 * 2.5, ${t}, ${r}, flow_sz);
        river = step(flow_cutoff, river);

        vec4 flow_col = ${s};
        flow_col = mix(flow_col, ${l}, step(0.4, d_light));
        flow_col = mix(flow_col, ${i}, step(0.6, d_light));
        float flow_a = river * a_circle * flow_col.a;
        result = alphaBlend(result, vec4(flow_col.rgb, flow_a));
    }`}},ga={type:n.Molten,mode:"composed",uvScaling:1,features:[{feature:F,params:{uvSource:1,octaves:6,seedSlot:1,colorStart:0,noiseScale:10}},{feature:Qe,params:{craterScale:5,seedSlot:2,colorStart:3}},{feature:Je,params:{flowOctaves:5,flowCutoff:.6,flowScale:10,seedSlot:3,colorStart:5}}],palette:C[n.Molten],colorSlots:M[n.Molten],loopLCM:E[n.Molten],defaults:{fbmOctaves:6,noiseScale:10,craterScale:5,flowCutoff:.6,flowOctaves:5,flowScale:10}},ha={type:n.Ice,mode:"composed",uvScaling:1,features:[{feature:F,params:{uvSource:0,octaves:6,seedSlot:1,colorStart:0,noiseScale:10}},{feature:Je,params:{flowOctaves:4,flowCutoff:.6,flowScale:10,seedSlot:2,colorStart:3}},{feature:me,params:{cloudCover:.546,cloudScale:4,seedSlot:3,colorStart:6}}],palette:C[n.Ice],colorSlots:M[n.Ice],loopLCM:E[n.Ice],defaults:{fbmOctaves:6,noiseScale:10,cloudCover:.546,cloudScale:4,flowCutoff:.6,flowOctaves:4,flowScale:10}},va=`
void main() {
    vec2 raw_uv = v_pos;
    vec2 uv = (floor(raw_uv * u_pixels) / u_pixels) + 0.5;
    float t = u_time * u_time_speed;

    vec2 centered = uv - 0.5;
    float d_circle = length(centered);
    float angle = atan(centered.y, centered.x);

    // Body is shrunk so glow + rays fit inside the canvas
    float body_r = 0.28;
    float canvas_edge = 0.48;

    // Remap UVs so body fills the same [0,0.5] normalized space
    vec2 s_uv = centered / (body_r * 2.0) + 0.5;
    float s_d = distance(s_uv, vec2(0.5));

    // === RADIAL GLOW ===
    float glow_pulse = 1.0 + 0.12 * sin(t) + 0.06 * sin(t * 2.15);
    float glow_a = smoothstep(canvas_edge, body_r * 0.5, d_circle) * 0.55 * glow_pulse;
    float glow_noise = fbm_s(uv * 4.0 + vec2(t * 0.1, t * 0.075), 3, u_seed5, 4.0);
    glow_a *= 0.7 + glow_noise * 0.4;
    vec4 result = vec4(u_col5.rgb, glow_a * u_col5.a);

    // === RAYS ===
    float ang01 = angle / 6.2832 + 0.5;
    float ray_seed = noise_s(vec2(ang01 * 3.0, t * 0.15), u_seed6, 3.0);
    float ray_w1 = sin(angle * 8.0 + ray_seed * 6.0 + t * 0.5);
    ray_w1 = pow(max(ray_w1, 0.0), 3.0);
    float ray_w2 = sin(angle * 16.0 - ray_seed * 4.0 - t * 0.3);
    ray_w2 = pow(max(ray_w2, 0.0), 4.0) * 0.4;
    float ray_intensity = ray_w1 + ray_w2;

    float ray_reach = body_r + ray_intensity * (canvas_edge - body_r);
    float ray_a = smoothstep(ray_reach, ray_reach - 0.03, d_circle)
                * smoothstep(body_r - 0.01, body_r + 0.02, d_circle);
    ray_a *= 1.0 - smoothstep(body_r, ray_reach, d_circle) * 0.6;
    ray_a *= 0.5 * glow_pulse;
    result = alphaBlend(result, vec4(u_col5.rgb, ray_a * u_col5.a));

    // === THIN BRIGHT LINES ===
    float line_seed = noise_s(vec2(ang01 * 5.0, t * 0.2), u_seed6, 5.0);
    float line_w1 = sin(angle * 12.0 + line_seed * 8.0 + t * 0.7);
    line_w1 = pow(max(line_w1, 0.0), 12.0);
    float line_w2 = sin(angle * 24.0 - line_seed * 5.0 + t * 0.4);
    line_w2 = pow(max(line_w2, 0.0), 16.0) * 0.6;
    float line_intensity = line_w1 + line_w2;

    float line_reach = body_r + line_intensity * (canvas_edge - body_r);
    float line_a = smoothstep(line_reach, line_reach - 0.01, d_circle)
                 * smoothstep(body_r - 0.005, body_r + 0.01, d_circle);
    line_a *= 1.0 - smoothstep(body_r, line_reach, d_circle) * 0.4;
    line_a *= 0.85;
    vec3 line_col = mix(u_col5.rgb, u_col0.rgb, 0.7);
    result = alphaBlend(result, vec4(line_col, line_a));

    // === BLOB LAYER (corona) ===
    float blob_scale = 1.4;
    vec2 blob_uv = (s_uv - 0.5) / blob_scale + 0.5;
    vec2 blob_rot = rotate2d(blob_uv, u_rotation);
    float blob_angle = atan(blob_rot.x - 0.5, blob_rot.y - 0.5);
    float blob_d = distance(blob_uv, vec2(0.5));

    float blob_sz = 4.0;
    float blob_c = 0.0;
    for (int i = 0; i < 15; i++) {
        float r = rand_s(vec2(float(i)), u_seed3, blob_sz);
        vec2 circleUV = vec2(blob_d, blob_angle);
        blob_c += circlePattern(circleUV * blob_sz + t * 0.5 - (1.0 / max(blob_d, 0.01)) * 0.1 + r, 3.0, 1.5, u_seed3, blob_sz);
    }
    blob_c *= 0.37 - blob_d;
    blob_c = step(0.07, blob_c - blob_d);
    blob_c *= step(d_circle, canvas_edge);

    vec4 blob_col = u_col4;
    result = alphaBlend(result, vec4(blob_col.rgb, blob_c * blob_col.a));

    // === STAR SURFACE (voronoi) ===
    float star_a = step(d_circle, body_r);
    vec2 star_pix = rotate2d(s_uv, u_rotation);
    star_pix = spherify(star_pix);

    float n = cells(star_pix + vec2(t, 0.0), 10.0, 2.0);
    n *= cells(star_pix + vec2(t * 0.5, 0.0), 20.0, 2.0);
    n *= 2.0;
    n = clamp(n, 0.0, 1.0);

    float interp = floor(n * 3.0) / 3.0;
    vec4 star_col = sampleRamp4(interp, u_col0, u_col1, u_col2, u_col3);
    result = alphaBlend(result, vec4(star_col.rgb, star_a * star_col.a));

    // === FLARE LAYER ===
    float flare_scale = 1.2;
    vec2 flare_uv = (s_uv - 0.5) / flare_scale + 0.5;
    vec2 flare_rot = rotate2d(flare_uv, u_rotation);
    float flare_angle = atan(flare_rot.x - 0.5, flare_rot.y - 0.5) * 0.4;
    float flare_d = distance(flare_uv, vec2(0.5));

    float flare_sz = 2.0;
    vec2 flare_circleUV = vec2(flare_d, flare_angle);
    float fn = fbm_s(flare_circleUV * flare_sz + t * 0.5, 4, u_seed4, flare_sz);
    float fnc = circlePattern(flare_circleUV * 1.0 + t * 0.5 + fn, 2.0, 1.0, u_seed4, flare_sz);
    fnc *= 1.5;
    float fn2 = fbm_s(flare_circleUV * flare_sz + t * 0.5 + vec2(100.0, 100.0), 4, u_seed4, flare_sz);
    fnc -= fn2 * 0.1;

    float flare_a = 0.0;
    float storm_w = 0.2;
    float storm_dw = 0.07;
    float in_storm = step(fnc, 1.0 - flare_d);
    float edge_a = step(storm_w - storm_dw + flare_d, fnc);
    float full_a = step(storm_w + flare_d, fnc);
    flare_a = in_storm * max(edge_a, full_a);

    float flare_interp = floor(fn2 + fnc);
    vec4 flare_col = sampleRamp4(clamp(flare_interp, 0.0, 1.0), u_col0, u_col1, u_col2, u_col3);
    flare_a *= step(fn2 * 0.25, flare_d);
    flare_a *= step(d_circle, canvas_edge);
    result = alphaBlend(result, vec4(flare_col.rgb, flare_a * flare_col.a));

    gl_FragColor = result;
}
`,pa={type:n.Star,mode:"standalone",uvScaling:1,standaloneGlsl:va,palette:C[n.Star],colorSlots:M[n.Star],loopLCM:E[n.Star],defaults:{}},ba=`
void main() {
    vec2 raw_uv = v_pos;
    vec2 uv = (floor(raw_uv * u_pixels) / u_pixels) + 0.5;
    float t = u_time * u_time_speed;

    vec2 centered = uv - 0.5;
    // Perspective tilt
    centered.y *= 2.0;
    float d = length(centered);
    float angle = atan(centered.y, centered.x);

    float sz = 20.0;
    // Core glow
    float core = exp(-d * d * 40.0);

    // Spiral arms (2 arms)
    float arm_tightness = 2.5;
    float arm1 = sin(angle + log(max(d, 0.001)) * arm_tightness + t);
    float arm2 = sin(angle + log(max(d, 0.001)) * arm_tightness + 3.14159 + t);
    float arms = max(arm1, arm2);
    arms = smoothstep(0.3, 0.9, arms);
    arms *= smoothstep(0.0, 0.05, d) * smoothstep(0.45, 0.2, d);

    // Star noise
    float stars = fbm_s(uv * sz + vec2(t * 0.33, 0.0), 4, u_seed1, sz);
    arms += stars * 0.2 * smoothstep(0.4, 0.1, d);

    // Dust lanes
    float dust = fbm_s(vec2(angle * 3.0, d * 10.0) + vec2(t * 0.17, 0.0), 3, u_seed2, sz);
    arms *= 0.7 + dust * 0.3;

    // Color assignment
    vec4 col = mix(u_col3, u_col2, arms);
    col = mix(col, u_col1, arms * smoothstep(0.15, 0.05, d));
    col = mix(col, u_col0, core);

    float alpha = smoothstep(0.45, 0.3, d) * step(0.01, core + arms);
    alpha = max(alpha, core * 0.8);

    gl_FragColor = vec4(col.rgb, alpha * col.a);
}
`,ya={type:n.Galaxy,mode:"standalone",uvScaling:1,standaloneGlsl:ba,palette:C[n.Galaxy],colorSlots:M[n.Galaxy],loopLCM:E[n.Galaxy],defaults:{}},Sa={type:n.BlackHole,mode:"multipass",uvScaling:1,palette:C[n.BlackHole],colorSlots:M[n.BlackHole],loopLCM:E[n.BlackHole],defaults:{}},wa={type:n.Nebula,mode:"canvas2d",uvScaling:1,palette:{},colorSlots:[],loopLCM:E[n.Nebula],defaults:{}},se={[n.TerrainWet]:la,[n.TerrainDry]:ca,[n.Aquatic]:ia,[n.Barren]:ua,[n.GasGiant]:fa,[n.GasGiantRinged]:ma,[n.Molten]:ga,[n.Ice]:ha,[n.Star]:pa,[n.Galaxy]:ya,[n.BlackHole]:Sa,[n.Nebula]:wa},eo=class{constructor(e){this.noiseTexture=null,this.noiseImage=null,this.canvas=e||document.createElement("canvas");const t=this.canvas.getContext("webgl",{premultipliedAlpha:!1,alpha:!0,antialias:!1,preserveDrawingBuffer:!0});if(!t)throw new Error("WebGL not supported");this.gl=t;const a=t.createBuffer();if(!a)throw new Error("Failed to create buffer");this.quadVBO=a,t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW),this.fallbackTexture=At(t);const o=Gt(128);this.noiseTexture=we(t,o),this.shaderRenderer=new $t(t,this.quadVBO,this.fallbackTexture),this.shaderRenderer.setNoiseTexture(this.noiseTexture),this.bhRenderer=new ta(t,this.quadVBO)}async precompile(e){const t=e||Object.values(n).filter(a=>a!==n.BlackHole&&a!==n.Nebula);for(const a of t){const o=se[a];!o||o.mode==="multipass"||o.mode==="canvas2d"||(this.shaderRenderer.precompile(o),await new Promise(r=>setTimeout(r,0)))}}async loadNoiseTexture(e){const t=await Pt(e);this.noiseImage=t,this.setNoiseTexture(t),this.bhRenderer.setNoiseImage(t)}setNoiseTexture(e){const t=this.gl;this.noiseTexture&&t.deleteTexture(this.noiseTexture),this.noiseTexture=we(t,e),this.shaderRenderer.setNoiseTexture(this.noiseTexture)}render(e,t){const a=this.gl,o=e.resolution||512,r=e.type;if(r===n.Nebula)return sa(e.seed,o,e.colors);if((this.canvas.width!==o||this.canvas.height!==o)&&(this.canvas.width=o,this.canvas.height=o),a.viewport(0,0,o,o),r===n.BlackHole){const l=se[n.BlackHole],i=l.palette,u=e.colors||{},c={};for(const _ of l.colorSlots)c[_]=u[_]||i[_];const d=e.timeSpeed??.1;return this.bhRenderer.render(c,t,d),this.canvas}const s=se[r];if(!s)throw new Error(`Unknown celestial type: ${r}`);return this.shaderRenderer.render(s,e,t),this.canvas}renderToImageData(e,t){this.render(e,t);const a=this.gl,o=this.canvas.width,r=this.canvas.height,s=new Uint8Array(o*r*4);a.readPixels(0,0,o,r,a.RGBA,a.UNSIGNED_BYTE,s);const l=o*4,i=new Uint8Array(l);for(let u=0;u<Math.floor(r/2);u++){const c=u*l,d=(r-1-u)*l;i.set(s.subarray(c,c+l)),s.copyWithin(c,d,d+l),s.set(i,d)}return new ImageData(new Uint8ClampedArray(s.buffer),o,r)}getCanvas(){return this.canvas}getLoopDuration(e,t){const a=t??.1,o=E[e];return o?o/a:0}static getCelestialTypes(){return Object.values(n)}static getColorSlots(e){return[...M[e]||[]]}static getDefaultPalette(e){return{...C[e]||{}}}dispose(){const e=this.gl;this.shaderRenderer.dispose(),this.bhRenderer.dispose(),e.deleteBuffer(this.quadVBO),e.deleteTexture(this.fallbackTexture),this.noiseTexture&&e.deleteTexture(this.noiseTexture)}};function to(e){const t=e.replace(/^#/,""),a=parseInt(t,16);return Number.isFinite(a)?[Math.floor(a/65536)%256,Math.floor(a/256)%256,a%256]:[0,0,0]}function xa(e){if(!e||typeof e!="string")return[1,1,1];const t=e.replace(/^#/,"").match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]}function ao(e){return Math.max(0,Math.min(255,Math.round(e)))}function g(e,t=1,a=1){const[o,r,s]=xa(e),l=Math.max(.15,Math.min(1,t));return[o*l,r*l,s*l,a]}var Ea={kind:"barren",eluvadeType:n.Barren,defaultTextureResolution:192,defaultColors(e){const t=g(e,1),a=g(e,.82),o=g(e,.64);return{base1:t,base2:a,base3:o,crater1:a,crater2:o}},textureBlit:{backdropFill:"baseColor",starBodyZoomOnSphere:!1},sphereMaterialCosmos:"unlit",features:{animated:!0,sceneGraph:"sphere"}},Ta={kind:"blackHole",eluvadeType:n.BlackHole,defaultTextureResolution:256,defaultColors(){return{}},textureBlit:{backdropFill:"transparent",starBodyZoomOnSphere:!1},sphereMaterialCosmos:"unlit",features:{animated:!0,sceneGraph:"billboard"}},Ra={kind:"desert",eluvadeType:n.TerrainDry,defaultTextureResolution:192,defaultColors(e){return{col1:g(e,1),col2:g(e,.82),col3:g(e,.64),col4:g(e,.48)}},textureBlit:{backdropFill:"baseColor",starBodyZoomOnSphere:!1},sphereMaterialCosmos:"unlit",features:{animated:!0,sceneGraph:"sphere"}},Ca={kind:"galaxy",eluvadeType:n.Galaxy,defaultTextureResolution:256,defaultColors(){return{}},textureBlit:{backdropFill:"transparent",starBodyZoomOnSphere:!1},sphereMaterialCosmos:"unlit",features:{animated:!0,sceneGraph:"billboard"}},Ma={kind:"gasGiant",eluvadeType:n.GasGiant,defaultTextureResolution:256,defaultColors(e){return{gas_base1:g(e,1),gas_base2:g(e,.82),gas_base3:g(e,.64),gas_base4:g(e,.48),gas_dark1:g(e,.35),gas_dark2:g(e,.28)}},textureBlit:{backdropFill:"baseColor",starBodyZoomOnSphere:!1},sphereMaterialCosmos:"unlit",features:{animated:!0,rings:!1,sceneGraph:"sphere"}},Aa={kind:"iceGiant",eluvadeType:n.Ice,defaultTextureResolution:224,defaultColors(e){const t=g(e,1),a=g(e,.82),o=g(e,.64);return{base1:[Math.min(1,t[0]+.15),Math.min(1,t[1]+.2),1,1],base2:a,base3:o,lake1:t,lake2:a,cloud1:[.9,.95,1,1]}},textureBlit:{backdropFill:"baseColor",starBodyZoomOnSphere:!1},sphereMaterialCosmos:"unlit",features:{animated:!0,sceneGraph:"sphere"}},Ga={kind:"molten",eluvadeType:n.Molten,defaultTextureResolution:224,defaultColors(e){const t=g(e,1),a=g(e,.82),o=g(e,.64);return{base1:a,base2:o,river1:t,river2:a,river3:o}},textureBlit:{backdropFill:"baseColor",starBodyZoomOnSphere:!1},sphereMaterialCosmos:"unlit",features:{animated:!0,sceneGraph:"sphere"}},Pa={kind:"nebula",eluvadeType:n.Nebula,defaultTextureResolution:256,defaultColors(){return{}},textureBlit:{backdropFill:"transparent",starBodyZoomOnSphere:!1},sphereMaterialCosmos:"unlit",features:{animated:!1,sceneGraph:"billboard"}},ka={kind:"oceanic",eluvadeType:n.TerrainWet,defaultTextureResolution:224,defaultColors(e){const t=g(e,1),a=g(e,.82);return{base1:a,base2:g(e,.64),land1:t,land2:a,cloud1:[.9,.95,1,1],atmo2:[t[0]*.3,t[1]*.5,Math.min(1,t[2]+.2),.35]}},textureBlit:{backdropFill:"baseColor",starBodyZoomOnSphere:!1},sphereMaterialCosmos:"unlit",features:{animated:!0,sceneGraph:"sphere"}},Ia={kind:"star",eluvadeType:n.Star,defaultTextureResolution:512,defaultColors(e){const t=g(e,1),a=g(e,.82);return{star1:t,star2:a,star3:g(e,.64),blob:a,glow:[t[0],t[1],t[2],1]}},textureBlit:{backdropFill:"starDim",starBodyZoomOnSphere:!0},sphereMaterialCosmos:"unlit",features:{animated:!0,sceneGraph:"sphere"}},Ba={star:Ia,barren:Ea,molten:Ga,oceanic:ka,desert:Ra,gasGiant:Ma,iceGiant:Aa,galaxy:Ca,nebula:Pa,blackHole:Ta},Oa=new Set,$a={galaxy:"galaxy",nebula:"nebula",planetary_nebula:"nebula",star_cluster:"nebula",black_hole:"blackHole"},Pe=new Set;function La(e){const t=$a[e];return t??(Pe.has(e)||(Pe.add(e),console.warn(`[dsoBodyRegistry] unknown DeepSkyBodyType "${String(e)}"; defaulting to nebula`)),"nebula")}function Ha(e){return Oa.has(e.catalogId)?"blackHole":La(e.type)}function oo(e){return Ba[Ha(e)].eluvadeType}function ro(e){return e===n.BlackHole?"black_hole":e}export{Wa as A,Ya as C,Ne as D,$e as E,ja as M,rt as O,pt as S,mt as T,Rt as _,g as a,Ka as b,xa as c,Xa as d,Qa as f,qa as g,Ct as h,Ba as i,st as j,Fa as k,eo as l,Ja as m,ro as n,ao as o,Za as p,Ha as r,to as s,oo as t,n as u,bt as v,vt as w,yt as x,Va as y};
