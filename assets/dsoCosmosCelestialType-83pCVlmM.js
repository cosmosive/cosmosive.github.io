import{i as tt}from"./rolldown-runtime-BOC55nOF.js";import{p as ot}from"./r3f-vendor-CPLIAXzS.js";import{u as Ge}from"./state-data-vendor-D2CrpuN1.js";import{D as Ie,E as $e,F as ge}from"./overlayCommands-0JuB5akX.js";function Io(e,t){const o=new Map;for(const a of e)o.set(a.catalogId,a);for(const a of t)o.set(a.catalogId,a);return Array.from(o.values())}var z=tt(ot(),1),he="openngc";function at(e,t){if(e.length===0)return`${he}:0`;const o=e[0]?.catalogId??"",a=e[e.length-1]?.catalogId??"",r=typeof t=="number"&&Number.isFinite(t)?`:sch${t}`:"";return`${he}:${e.length}:${o}:${a}${r}`}var ce=null,ie=[];function rt(e,t){ie=e,ce=t}function $o(){return ce}function Lo(){return ie}function st(){ie=[],ce=null}var Le=Symbol("Comlink.proxy"),lt=Symbol("Comlink.endpoint"),Oe=Symbol("Comlink.releaseProxy"),Z=Symbol("Comlink.finalizer"),W=Symbol("Comlink.thrown"),ve=e=>typeof e=="object"&&e!==null||typeof e=="function",ke=new Map([["proxy",{canHandle:e=>ve(e)&&e[Le],serialize(e){const{port1:t,port2:o}=new MessageChannel;return Be(e,t),[o,[o]]},deserialize(e){return e.start(),ze(e)}}],["throw",{canHandle:e=>ve(e)&&W in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}}]]);function nt(e,t){for(const o of e)if(t===o||o==="*"||o instanceof RegExp&&o.test(t))return!0;return!1}function Be(e,t=globalThis,o=["*"]){t.addEventListener("message",function a(r){if(!r||!r.data)return;if(!nt(o,r.origin)){console.warn(`Invalid origin '${r.origin}' for comlink proxy`);return}const{id:s,type:l,path:i}=Object.assign({path:[]},r.data),u=(r.data.argumentList||[]).map(k);let c;try{const f=i.slice(0,-1).reduce((d,b)=>d[b],e),_=i.reduce((d,b)=>d[b],e);switch(l){case"GET":c=_;break;case"SET":f[i.slice(-1)[0]]=k(r.data.value),c=!0;break;case"APPLY":c=_.apply(f,u);break;case"CONSTRUCT":c=_t(new _(...u));break;case"ENDPOINT":{const{port1:d,port2:b}=new MessageChannel;Be(e,b),c=dt(d,[d])}break;case"RELEASE":c=void 0;break;default:return}}catch(f){c={value:f,[W]:0}}Promise.resolve(c).catch(f=>({value:f,[W]:0})).then(f=>{const[_,d]=q(f);t.postMessage(Object.assign(Object.assign({},_),{id:s}),d),l==="RELEASE"&&(t.removeEventListener("message",a),He(t),Z in e&&typeof e[Z]=="function"&&e[Z]())}).catch(f=>{const[_,d]=q({value:new TypeError("Unserializable return value"),[W]:0});t.postMessage(Object.assign(Object.assign({},_),{id:s}),d)})}),t.start&&t.start()}function ct(e){return e.constructor.name==="MessagePort"}function He(e){ct(e)&&e.close()}function ze(e,t){const o=new Map;return e.addEventListener("message",function(r){const{data:s}=r;if(!s||!s.id)return;const l=o.get(s.id);if(l)try{l(s)}finally{o.delete(s.id)}}),se(e,o,[],t)}function F(e){if(e)throw new Error("Proxy has been released and is not useable")}function Ne(e){return H(e,new Map,{type:"RELEASE"}).then(()=>{He(e)})}var Y=new WeakMap,V="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{const t=(Y.get(e)||0)-1;Y.set(e,t),t===0&&Ne(e)});function it(e,t){const o=(Y.get(t)||0)+1;Y.set(t,o),V&&V.register(e,t,e)}function ut(e){V&&V.unregister(e)}function se(e,t,o=[],a=function(){}){let r=!1;const s=new Proxy(a,{get(l,i){if(F(r),i===Oe)return()=>{ut(s),Ne(e),t.clear(),r=!0};if(i==="then"){if(o.length===0)return{then:()=>s};const u=H(e,t,{type:"GET",path:o.map(c=>c.toString())}).then(k);return u.then.bind(u)}return se(e,t,[...o,i])},set(l,i,u){F(r);const[c,f]=q(u);return H(e,t,{type:"SET",path:[...o,i].map(_=>_.toString()),value:c},f).then(k)},apply(l,i,u){F(r);const c=o[o.length-1];if(c===lt)return H(e,t,{type:"ENDPOINT"}).then(k);if(c==="bind")return se(e,t,o.slice(0,-1));const[f,_]=pe(u);return H(e,t,{type:"APPLY",path:o.map(d=>d.toString()),argumentList:f},_).then(k)},construct(l,i){F(r);const[u,c]=pe(i);return H(e,t,{type:"CONSTRUCT",path:o.map(f=>f.toString()),argumentList:u},c).then(k)}});return it(s,e),s}function ft(e){return Array.prototype.concat.apply([],e)}function pe(e){const t=e.map(q);return[t.map(o=>o[0]),ft(t.map(o=>o[1]))]}var Ue=new WeakMap;function dt(e,t){return Ue.set(e,t),e}function _t(e){return Object.assign(e,{[Le]:!0})}function q(e){for(const[t,o]of ke)if(o.canHandle(e)){const[a,r]=o.serialize(e);return[{type:"HANDLER",name:t,value:a},r]}return[{type:"RAW",value:e},Ue.get(e)||[]]}function k(e){switch(e.type){case"HANDLER":return ke.get(e.name).deserialize(e.value);case"RAW":return e.value}}function H(e,t,o,a){return new Promise(r=>{const s=mt();t.set(s,r),e.start&&e.start(),e.postMessage(Object.assign({id:s},o),a)})}function mt(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}var gt="/assets/openngc.worker-CoGk7Wpu.js";async function ht(e){if(typeof Worker>"u")return ge(e);let t;try{t=new Worker(gt,{type:"module"})}catch{return ge(e)}const o=ze(t);try{return await o.loadCatalog(e)}catch(a){const r=a instanceof Error?a.message:String(a);throw Object.assign(new Error(r),{cause:a})}finally{o[Oe](),t.terminate()}}var vt="openngc-dso-catalog";function Oo(e){const t=e?.extraEnabled===!0,[o,a]=(0,z.useState)(!1);(0,z.useEffect)(()=>{queueMicrotask(()=>{a(!0)})},[]);const r=Ge({queryKey:[vt],queryFn:async()=>{const{entries:s,schemaVersion:l}=await ht(Ie("data/openngc/openngc-dso.json"));return rt(s,at(s,l)),s},enabled:t||o,staleTime:$e,retry:!1});return(0,z.useEffect)(()=>{r.isError&&st()},[r.isError]),r}var be="custom-objects";function pt(e,t){if(e.length===0)return`${be}:0`;const o=e[0]?.catalogId??"",a=e[e.length-1]?.catalogId??"",r=typeof t=="number"&&Number.isFinite(t)?`:sch${t}`:"";return`${be}:${e.length}:${o}:${a}${r}`}var ue=[],fe=null;function bt(e,t){ue=e,fe=t}function ko(){return fe}function Bo(){return ue}function St(){ue=[],fe=null}var yt=new Set(["galaxy","star_cluster","planetary_nebula","nebula","black_hole"]),p=class extends Error{constructor(e){super(e),this.name="CustomObjectsCatalogShapeError"}};function C(e){return typeof e=="number"&&Number.isFinite(e)}function w(e){if(typeof e!="string")return;const t=e.trim();return t.length>0?t:void 0}function wt(e,t){if(e==null||typeof e!="object")throw new p(`custom-objects entries[${t}] must be an object`);const o=e,a=w(o.catalogId),r=w(o.name),s=w(o.type);if(!a||!r||!s)throw new p(`custom-objects entries[${t}]: catalogId, name, and type are required`);if(!yt.has(s))throw new p(`custom-objects entries[${t}]: unknown type "${String(s)}"`);const{raDeg:l}=o,{decDeg:i}=o,{distPc:u}=o;if(!C(l)||!C(i)||!C(u))throw new p(`custom-objects entries[${t}]: raDeg, decDeg, and distPc must be finite numbers`);let c;if(o.aliases!=null){if(!Array.isArray(o.aliases))throw new p(`custom-objects entries[${t}]: aliases must be an array of strings when present`);c=o.aliases.map((m,M)=>{const h=w(m);if(h==null)throw new p(`custom-objects entries[${t}].aliases[${M}]: invalid string`);return h})}let f;if(o.physical!=null){if(typeof o.physical!="object")throw new p(`custom-objects entries[${t}]: physical must be an object when present`);const m=o.physical;if(f={},m.massSolarMasses!=null){if(!C(m.massSolarMasses))throw new p(`custom-objects entries[${t}].physical.massSolarMasses must be finite`);f.massSolarMasses=m.massSolarMasses}if(m.radiusKm!=null){if(!C(m.radiusKm))throw new p(`custom-objects entries[${t}].physical.radiusKm must be finite`);f.radiusKm=m.radiusKm}if(m.schwarzschildRadiusKm!=null){if(!C(m.schwarzschildRadiusKm))throw new p(`custom-objects entries[${t}].physical.schwarzschildRadiusKm must be finite`);f.schwarzschildRadiusKm=m.schwarzschildRadiusKm}if(m.spinDimensionless!=null){if(!C(m.spinDimensionless))throw new p(`custom-objects entries[${t}].physical.spinDimensionless must be finite`);f.spinDimensionless=m.spinDimensionless}if(m.luminositySolar!=null){if(!C(m.luminositySolar))throw new p(`custom-objects entries[${t}].physical.luminositySolar must be finite`);f.luminositySolar=m.luminositySolar}Object.keys(f).length===0&&(f=void 0)}let _;if(o.references!=null){if(!Array.isArray(o.references))throw new p(`custom-objects entries[${t}]: references must be an array of strings when present`);_=o.references.map((m,M)=>{const h=w(m);if(h==null)throw new p(`custom-objects entries[${t}].references[${M}]: invalid string`);return h})}const d={catalogId:a,name:r,type:s,raDeg:l,decDeg:i,distPc:u};c!=null&&(d.aliases=c);const b=w(o.subtype);if(b!=null&&(d.subtype=b),o.vMag!=null){if(!C(o.vMag))throw new p(`custom-objects entries[${t}]: vMag must be a finite number when set`);d.vMag=o.vMag}if(o.majAxArcmin!=null){if(!C(o.majAxArcmin))throw new p(`custom-objects entries[${t}]: majAxArcmin must be a finite number when set`);d.majAxArcmin=o.majAxArcmin}const v=w(o.constellation);v!=null&&(d.constellation=v);const S=w(o.messier);S!=null&&(d.messier=S);const R=w(o.parentGalaxyId);if(R!=null&&(d.parentGalaxyId=R),o.featured!=null){if(typeof o.featured!="boolean")throw new p(`custom-objects entries[${t}]: featured must be a boolean when set`);d.featured=o.featured}const y=w(o.notesMarkdown);y!=null&&(d.notesMarkdown=y);const L=w(o.description);L!=null&&(d.description=L);const P=w(o.imageUrl);P!=null&&(d.imageUrl=P);const G=w(o.wikipediaTitle);if(G!=null&&(d.wikipediaTitle=G),o.discoveredYear!=null){if(typeof o.discoveredYear!="number"||!Number.isInteger(o.discoveredYear))throw new p(`custom-objects entries[${t}]: discoveredYear must be an integer when set`);d.discoveredYear=o.discoveredYear}if(_!=null&&(d.references=_),f!=null&&(d.physical=f),o.externalLinks!=null){if(o.externalLinks===null||typeof o.externalLinks!="object"||Array.isArray(o.externalLinks))throw new p(`custom-objects entries[${t}]: externalLinks must be a non-null object when set`);const m={};for(const[M,h]of Object.entries(o.externalLinks)){if(typeof h!="string"||!h.startsWith("https://"))throw new p(`custom-objects entries[${t}].externalLinks.${M}: value must be an https:// URL string`);m[M]=h}d.externalLinks=m}return d}function xt(e){const t={catalogId:e.catalogId,name:e.name,type:e.type,raDeg:e.raDeg,decDeg:e.decDeg,distPc:e.distPc};return e.aliases!=null&&(t.aliases=e.aliases),e.subtype!=null&&(t.subtype=e.subtype),e.vMag!=null&&(t.vMag=e.vMag),e.majAxArcmin!=null&&(t.majAxArcmin=e.majAxArcmin),e.constellation!=null&&(t.constellation=e.constellation),e.messier!=null&&(t.messier=e.messier),e.parentGalaxyId!=null&&(t.parentGalaxyId=e.parentGalaxyId),e.featured!=null&&(t.featured=e.featured),e.notesMarkdown!=null&&(t.notesMarkdown=e.notesMarkdown),e.description!=null&&(t.description=e.description),e.imageUrl!=null&&(t.imageUrl=e.imageUrl),e.wikipediaTitle!=null&&(t.wikipediaTitle=e.wikipediaTitle),e.references!=null&&(t.references=e.references),e.discoveredYear!=null&&(t.discoveredYear=e.discoveredYear),e.physical!=null&&(t.physical=e.physical),e.externalLinks!=null&&(t.externalLinks=e.externalLinks),t}function Et(e){if(e==null||typeof e!="object")throw new p("Custom objects JSON must be an object");const t=e;if(!Array.isArray(t.entries))throw new p("Custom objects JSON must include entries: []");let o;return typeof t.version=="number"&&Number.isFinite(t.version)&&(o=t.version),{entries:t.entries.map((a,r)=>wt(a,r)).map(xt),...o!==void 0&&{schemaVersion:o}}}async function Rt(e){const t=await fetch(e);if(!t.ok)throw new Error(`Failed to load custom objects catalog: ${t.status}`);return Et(await t.json())}var Tt="custom-objects-catalog";function Ho(e){const t=e?.extraEnabled===!0,[o,a]=(0,z.useState)(!1);(0,z.useEffect)(()=>{queueMicrotask(()=>{a(!0)})},[]);const r=Ge({queryKey:[Tt],queryFn:async()=>{const{entries:s,schemaVersion:l}=await Rt(Ie("data/custom/custom-objects.json"));return bt(s,pt(s,l)),s},enabled:t||o,staleTime:$e,retry:!1});return(0,z.useEffect)(()=>{r.isError&&St()},[r.isError]),r}var le=null,De=0,ne=new Set;function At(){De+=1;for(const e of ne)e()}function zo(){return De}function No(e){return ne.add(e),()=>ne.delete(e)}function Uo(e,t){le={c1Abbr:e,c2Abbr:t},At()}function Do(){const e=le;return le=null,e}var n;(function(e){e.TerrainWet="terrain_wet",e.TerrainDry="terrain_dry",e.Aquatic="aquatic",e.Barren="barren",e.GasGiant="gas_giant",e.GasGiantRinged="gas_giant_ringed",e.Molten="molten",e.Ice="ice",e.Star="star",e.BlackHole="black_hole",e.Galaxy="galaxy",e.Nebula="nebula"})(n||(n={}));var T={[n.TerrainWet]:{base1:[.4,.69,.78,1],base2:[.4,.69,.78,1],base3:[.204,.255,.616,1],land1:[.784,.831,.365,1],land2:[.388,.671,.247,1],land3:[.184,.341,.325,1],land4:[.157,.208,.251,1],cloud1:[.882,.949,1,1],cloud2:[.753,.89,1,1],cloud3:[.369,.439,.647,1],cloud4:[.251,.286,.451,1],atmo1:[.678,.847,.902,.25],atmo2:[0,.498,1,.35],atmo3:[0,0,.502,.45]},[n.TerrainDry]:{col1:[.96,.85,.63,1],col2:[.85,.65,.4,1],col3:[.58,.38,.26,1],col4:[.35,.22,.2,1]},[n.Aquatic]:{base1:[.157,.38,.69,1],base2:[.118,.286,.58,1],base3:[.078,.176,.42,1],land1:[.388,.671,.247,1],land2:[.255,.502,.216,1],land3:[.184,.341,.325,1],land4:[.118,.22,.259,1],cloud1:[.882,.949,1,1],cloud2:[.753,.89,1,1],cloud3:[.369,.439,.647,1],cloud4:[.251,.286,.451,1],atmo1:[.4,.7,.9,.25],atmo2:[.1,.4,.8,.35],atmo3:[.05,.15,.5,.45]},[n.Barren]:{base1:[.608,.62,.722,1],base2:[.278,.38,.486,1],base3:[.208,.224,.333,1],crater1:[.278,.38,.486,1],crater2:[.208,.224,.333,1]},[n.GasGiant]:{gas_base1:[.941,.71,.255,1],gas_base2:[.812,.459,.169,1],gas_base3:[.671,.318,.188,1],gas_base4:[.49,.22,.2,1],gas_dark1:[.231,.125,.153,1],gas_dark2:[.231,.125,.153,1],gas_dark3:[.129,.094,.106,1],gas_dark4:[.129,.094,.106,1]},[n.GasGiantRinged]:{gas1:[.941,.71,.255,1],gas2:[.812,.459,.169,1],gas3:[.671,.318,.188,1],gas4:[.49,.22,.2,1],gas_dark1:[.231,.125,.153,1],gas_dark2:[.2,.11,.14,1],gas_dark3:[.129,.094,.106,1],gas_dark4:[.1,.07,.09,1],ring1:[.941,.78,.45,1],ring2:[.812,.56,.3,1],ring3:[.58,.35,.2,1],ring4:[.35,.2,.15,1]},[n.Molten]:{base1:[.561,.302,.341,1],base2:[.322,.2,.247,1],base3:[.239,.161,.212,1],crater1:[.322,.2,.247,1],crater2:[.239,.161,.212,1],river1:[1,.537,.2,1],river2:[.902,.271,.224,1],river3:[.678,.184,.271,1]},[n.Ice]:{base1:[.98,1,1,1],base2:[.78,.831,1,1],base3:[.573,.561,.722,1],lake1:[.31,.643,.722,1],lake2:[.298,.408,.522,1],lake3:[.227,.247,.369,1],cloud1:[.882,.949,1,1],cloud2:[.753,.89,1,1],cloud3:[.369,.439,.647,1],cloud4:[.251,.286,.451,1]},[n.Star]:{star1:[1,.95,.5,1],star2:[1,.7,.2,1],star3:[.9,.35,.1,1],star4:[.6,.15,.05,1],blob:[1,.647,0,1],glow:[1,.6,.15,1]},[n.BlackHole]:{glow1:[1,.902,.784,1],glow2:[.98,.588,.353,1],glow3:[.973,.353,.137,1],glow4:[.667,.039,.031,1],purple:[.498,.004,.498,1],rim:[1,.816,.694,1],inset:[.867,.686,.765,1]},[n.Galaxy]:{core:[1,.96,.8,1],arm1:[.4,.5,.9,1],arm2:[.3,.35,.7,1],dust:[.15,.1,.2,1]}},A={[n.TerrainWet]:["base1","base2","base3","land1","land2","land3","land4","cloud1","cloud2","cloud3","cloud4","atmo1","atmo2","atmo3"],[n.TerrainDry]:["col1","col2","col3","col4"],[n.Aquatic]:["base1","base2","base3","land1","land2","land3","land4","cloud1","cloud2","cloud3","cloud4","atmo1","atmo2","atmo3"],[n.Barren]:["base1","base2","base3","crater1","crater2"],[n.GasGiant]:["gas_base1","gas_base2","gas_base3","gas_base4","gas_dark1","gas_dark2","gas_dark3","gas_dark4"],[n.GasGiantRinged]:["gas1","gas2","gas3","gas4","gas_dark1","gas_dark2","gas_dark3","gas_dark4","ring1","ring2","ring3","ring4"],[n.Molten]:["base1","base2","base3","crater1","crater2","river1","river2","river3"],[n.Ice]:["base1","base2","base3","lake1","lake2","lake3","cloud1","cloud2","cloud3","cloud4"],[n.Star]:["star1","star2","star3","star4","blob","glow"],[n.BlackHole]:["glow1","glow2","glow3","glow4","purple","rim","inset"],[n.Galaxy]:["core","arm1","arm2","dust"]},x={[n.TerrainWet]:20,[n.TerrainDry]:10,[n.Aquatic]:20,[n.Barren]:10,[n.GasGiant]:9,[n.GasGiantRinged]:75,[n.Molten]:10,[n.Ice]:20,[n.Star]:60,[n.BlackHole]:10,[n.Galaxy]:20,[n.Nebula]:0};function Se(e,t,o){const a=e.createShader(t);if(!a)throw new Error("Failed to create shader");if(e.shaderSource(a,o),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const r=e.getShaderInfoLog(a);throw e.deleteShader(a),new Error(`Shader compile error: ${r}`)}return a}function je(e,t,o){const a=Se(e,e.VERTEX_SHADER,t),r=Se(e,e.FRAGMENT_SHADER,o),s=e.createProgram();if(!s)throw new Error("Failed to create program");if(e.attachShader(s,a),e.attachShader(s,r),e.linkProgram(s),!e.getProgramParameter(s,e.LINK_STATUS)){const l=e.getProgramInfoLog(s);throw e.deleteProgram(s),new Error(`Program link error: ${l}`)}return e.deleteShader(a),e.deleteShader(r),s}function ye(e,t){const o=e.createTexture();if(!o)throw new Error("Failed to create texture");return e.bindTexture(e.TEXTURE_2D,o),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),o}function B(e,t){e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,1);const o=e.createTexture();if(!o)throw new Error("Failed to create BH texture");return e.bindTexture(e.TEXTURE_2D,o),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,0),o}function Ct(e){const t=e.createTexture();if(!t)throw new Error("Failed to create fallback texture");return e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,1,1,0,e.LUMINANCE,e.UNSIGNED_BYTE,new Uint8Array([128])),t}function Mt(e=128){const t=document.createElement("canvas");t.width=e,t.height=e;const o=t.getContext("2d");let a=48271;const r=()=>(a=a*16807%2147483647,(a-1)/2147483646);o.fillStyle="rgb(128,128,128)",o.fillRect(0,0,e,e);const s=e/2,l=e/2,i=e*8;for(let c=0;c<i;c++){const f=r()*Math.PI*2,_=r()*e*.5,d=s+Math.cos(f)*_,b=l+Math.sin(f)*_,v=r()*e*.08+1,S=Math.floor(80+r()*96);o.fillStyle=`rgba(${S},${S},${S},${.1+r()*.3})`,o.beginPath(),o.arc(d,b,v,0,Math.PI*2),o.fill()}const u=o.createRadialGradient(s,l,0,s,l,e*.5);return u.addColorStop(0,"rgba(128,128,128,0)"),u.addColorStop(.7,"rgba(128,128,128,0)"),u.addColorStop(1,"rgba(128,128,128,0.5)"),o.fillStyle=u,o.fillRect(0,0,e,e),t}function Pt(e){return new Promise((t,o)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>t(a),a.onerror=()=>o(new Error(`Failed to load noise texture: ${e}`)),a.src=e})}function Gt(e,t){let o=Math.imul(e|0,2654435761)+Math.imul(t|0,2246822519)|0;return o=Math.imul(o>>>16^o,73244475),o=Math.imul(o>>>16^o,73244475),o=o>>>16^o,(o>>>0)%1e4/100+.1}var It=`
attribute vec2 a_position;
varying vec2 v_pos;
void main() {
    v_pos = a_position * 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`,Fe=`
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
`,We=`
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
`;function $t(e,t){const o=t!==1?`    uv = (uv - 0.5) * ${t.toFixed(4)} + 0.5;
`:"",a=e.map(r=>r.feature.glsl(r.params)).join(`
`);return Fe+We+`
void main() {
    vec2 raw_uv = v_pos;
    vec2 uv = (floor(raw_uv * u_pixels) / u_pixels) + 0.5;
${o}
    float d_circle = distance(uv, vec2(0.5));
    float d_light = distance(uv, u_light_origin);
    float a_circle = step(d_circle, 0.49999);
    float t = u_time * u_time_speed;

    vec2 rotated = rotate2d(uv, u_rotation);
    vec2 sphered = spherify(rotated);

    vec4 result = vec4(0.0);

${a}

    gl_FragColor = result;
}
`}function Lt(e){return Fe+We+e}var Ot=class{constructor(e,t,o){this.programs=new Map,this.noiseTexture=null,this.gl=e,this.quadVBO=t,this.fallbackTexture=o}setNoiseTexture(e){this.noiseTexture=e}precompile(e){this.programs.has(e.type)||this.buildProgram(e)}render(e,t,o){const a=this.gl,r=this.getOrBuild(e),s=t.resolution||512,l=t.seed,i=t.rotationAngle??0,u=t.timeSpeed??.1,c=t.lightPos??[.39,.7];a.useProgram(r.prog);const f=a.getAttribLocation(r.prog,"a_position");a.enableVertexAttribArray(f),a.bindBuffer(a.ARRAY_BUFFER,this.quadVBO),a.vertexAttribPointer(f,2,a.FLOAT,!1,0,0),this.setUniform1f(r,"u_pixels",s),this.setUniform1f(r,"u_time",o),this.setUniform1f(r,"u_time_speed",u),this.setUniform1f(r,"u_rotation",i),this.setUniform2f(r,"u_light_origin",c[0],c[1]);for(let S=1;S<=6;S++)this.setUniform1f(r,`u_seed${S}`,Gt(l,S));const _=e.colorSlots,d=e.palette,b=t.colors||{};for(let S=0;S<16;S++){const R=_[S];let y=[0,0,0,0];R&&(b[R]?y=b[R]:d[R]&&(y=d[R])),this.setUniform4f(r,`u_col${S}`,y[0],y[1],y[2],y[3])}a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,this.noiseTexture||this.fallbackTexture);const v=this.getUniform(r,"u_noise_tex");v!==null&&a.uniform1i(v,0),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.disable(a.BLEND),a.drawArrays(a.TRIANGLE_STRIP,0,4)}dispose(){const e=this.gl;this.programs.forEach(t=>e.deleteProgram(t.prog)),this.programs.clear()}getOrBuild(e){let t=this.programs.get(e.type);return t||(t=this.buildProgram(e)),t}buildProgram(e){let t;if(e.mode==="composed"&&e.features)t=$t(e.features,e.uvScaling);else if(e.mode==="standalone"&&e.standaloneGlsl)t=Lt(e.standaloneGlsl);else throw new Error(`Invalid profile mode for shader rendering: ${e.mode}`);const o={prog:je(this.gl,It,t),uniforms:new Map};return this.programs.set(e.type,o),o}getUniform(e,t){return e.uniforms.has(t)||e.uniforms.set(t,this.gl.getUniformLocation(e.prog,t)),e.uniforms.get(t)}setUniform1f(e,t,o){const a=this.getUniform(e,t);a!==null&&this.gl.uniform1f(a,o)}setUniform2f(e,t,o,a){const r=this.getUniform(e,t);r!==null&&this.gl.uniform2f(r,o,a)}setUniform4f(e,t,o,a,r,s){const l=this.getUniform(e,t);l!==null&&this.gl.uniform4f(l,o,a,r,s)}},E=.4,kt=84*Math.PI/180;200/2*E;var J=400/2*E,ee=350/2*E,te=400/2*E,oe=1500/2*E*1.05,Bt=800/2*E,Ht=1200/2*E,we=33*E,zt=83*E,Nt=20*E,Ut=1200*E,Dt=-50*E,xe=10,Ee=3.33,Re=800,Te=1.74;function de(){return new Float32Array(16)}function X(){const e=de();return e[0]=e[5]=e[10]=e[15]=1,e}function D(e,t){const o=de();for(let a=0;a<4;a++)for(let r=0;r<4;r++)o[a*4+r]=e[r]*t[a*4]+e[4+r]*t[a*4+1]+e[8+r]*t[a*4+2]+e[12+r]*t[a*4+3];return o}function Ye(e,t){const o=X();return o[0]=e,o[5]=t,o}function jt(e){const t=X(),o=Math.cos(e),a=Math.sin(e);return t[5]=o,t[9]=-a,t[6]=a,t[10]=o,t}function Ve(e){const t=X(),o=Math.cos(e),a=Math.sin(e);return t[0]=o,t[4]=-a,t[1]=a,t[5]=o,t}function Ft(e,t,o){const a=X();return a[12]=e,a[13]=t,a[14]=o,a}function Wt(){const e=de(),t=Re/2,o=Re/2;return e[0]=Te/t,e[5]=-Te/o,e[10]=-.001,e[11]=-1/Ut,e[15]=1,e}function ae(e,t,o=0){const a=Ye(e,t);return o?D(Ve(o),a):a}function O(e,t=0){let o=Ye(e,e);return t&&(o=D(Ve(t),o)),o=D(Ft(0,Dt,0),o),D(jt(kt),o)}var Yt=`
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
`;function g(e,t){return`rgba(${Math.round(e[0]*255)},${Math.round(e[1]*255)},${Math.round(e[2]*255)},${t})`}function qt(e){return`rgb(${Math.round(e[0]*255)},${Math.round(e[1]*255)},${Math.round(e[2]*255)})`}function Ae(e){return`rgba(${Math.round(e[0]*255)},${Math.round(e[1]*255)},${Math.round(e[2]*255)},`}function Xt(e){const t=e.glow1,o=e.glow2,a=e.glow3,r=e.glow4,s=e.purple,l=e.rim,i=e.inset;return{glow:[{offset:0,color:g(t,.65)},{offset:.08,color:g(t,.55)},{offset:.2,color:g(o,.6)},{offset:.34,color:g(o,.6)},{offset:.49,color:g(a,.55)},{offset:.63,color:g(a,.55)},{offset:.73,color:g(r,.45)},{offset:.83,color:g(r,.18)},{offset:.97,color:g(r,.05)},{offset:1,color:g(r,0)}],hGlow:[{offset:0,color:g(t,0)},{offset:.53,color:g(t,0)},{offset:.54,color:"rgba(255,255,255,0.7)"},{offset:.55,color:g(t,.85)},{offset:.59,color:g(o,.75)},{offset:.63,color:g(o,.85)},{offset:.73,color:g(a,.6)},{offset:.83,color:g(r,.4)},{offset:.97,color:g(r,.1)},{offset:1,color:g(r,0)}],backglow:[{offset:0,color:g(s,0)},{offset:.14,color:g(s,0)},{offset:.4,color:g(s,.1)},{offset:.7,color:"rgba(0,0,0,0)"},{offset:1,color:"rgba(0,0,0,0)"}],holeBloom:g(s,.6),holeHalo:g(s,.6),holeOuterRim:qt(l),holeInsetA:Ae(l),holeInsetB:Ae(i)}}function K(e,t){const o=document.createElement("canvas");return o.width=Math.ceil(e),o.height=Math.ceil(t),[o,o.getContext("2d")]}function Kt(e){const t=we*3,o=(J+t)*2,a=(ee+t)*2,[r,s]=K(o,a),l=o/2,i=a/2;s.filter=`blur(${we}px)`;const u=Math.sqrt(J**2+ee**2),c=s.createRadialGradient(l,i,0,l,i,u);for(const f of e.glow)c.addColorStop(f.offset,f.color);return s.fillStyle=c,s.beginPath(),s.ellipse(l,i,J,ee,0,0,Math.PI*2),s.fill(),r}function qe(e,t,o){const a=(e+t*3)*2,[r,s]=K(a,a),l=a/2;s.filter=`blur(${t}px)`;const i=e*Math.SQRT2,u=s.createRadialGradient(l,l,0,l,l,i);for(const c of o)u.addColorStop(c.offset,c.color);return s.fillStyle=u,s.beginPath(),s.arc(l,l,e,0,Math.PI*2),s.fill(),r}function Qt(e){return qe(Bt,zt,e.hGlow)}function Zt(e){return qe(Ht,Nt,e.backglow)}function Jt(e){const[r,s]=K(600,600),l=600/2,i=600/2;s.save(),s.filter="blur(100px)",s.fillStyle=e.holeBloom,s.beginPath(),s.arc(l,i,110,0,Math.PI*2),s.fill(),s.restore(),s.save(),s.filter="blur(50px)",s.fillStyle="white",s.beginPath(),s.arc(l,i,105,0,Math.PI*2),s.fill(),s.restore(),s.save(),s.filter="blur(2px)",s.fillStyle="rgb(0,0,0)",s.beginPath(),s.arc(l,i,108,0,Math.PI*2),s.fill(),s.restore(),s.save(),s.filter="blur(6px)",s.fillStyle=e.holeHalo,s.beginPath(),s.arc(l,i,102,0,Math.PI*2),s.fill(),s.restore(),s.save(),s.filter="blur(2px)",s.fillStyle=e.holeOuterRim,s.beginPath(),s.arc(l,i,100,0,Math.PI*2),s.fill(),s.restore(),s.fillStyle="black",s.beginPath(),s.arc(l,i,100,0,Math.PI*2),s.fill();const u=s.createRadialGradient(l,i,98,l,i,100);u.addColorStop(0,"transparent"),u.addColorStop(.5,e.holeInsetA+"0.15)"),u.addColorStop(1,e.holeInsetA+"0.5)"),s.fillStyle=u,s.beginPath(),s.arc(l,i,100,0,Math.PI*2),s.fill();const c=s.createRadialGradient(l,i,97,l,i,100);return c.addColorStop(0,"transparent"),c.addColorStop(.5,e.holeInsetB+"0.1)"),c.addColorStop(1,e.holeInsetB+"0.35)"),s.fillStyle=c,s.beginPath(),s.arc(l,i,100,0,Math.PI*2),s.fill(),r}function Ce(e,t,o){const a=Math.ceil(t*2),[r,s]=K(a,a),l=a/2;s.save(),s.beginPath(),s.arc(l,l,t,0,Math.PI*2),s.clip(),s.drawImage(e,0,0,a,a),s.restore(),s.globalCompositeOperation="destination-in";const i=s.createRadialGradient(l,l,0,l,l,t);for(const u of o)i.addColorStop(u.offset,`rgba(0,0,0,${u.alpha})`);return s.fillStyle=i,s.fillRect(0,0,a,a),s.globalCompositeOperation="source-over",r}var eo=class{constructor(e,t){this.state=null,this.noiseImage=null,this.gl=e,this.quadVBO=t}setNoiseImage(e){this.noiseImage=e,this.state&&!this.state.texHEH&&this.dispose()}init(e){const t=this.gl;this.dispose();const o=Xt(e),a=je(t,Yt,Vt);t.useProgram(a);const r=t.getUniformLocation(a,"uMVP"),s=t.getUniformLocation(a,"uModel"),l=t.getUniformLocation(a,"uTex"),i=t.getUniformLocation(a,"uAlpha"),u=t.getUniformLocation(a,"uClipZ"),c=t.getAttribLocation(a,"aPos");t.uniform1i(l,0);const f=Wt(),_=Kt(o),d=Qt(o),b=Zt(o),v=Jt(o),S=B(t,_),R=B(t,d),y=B(t,b),L=B(t,v);let P=null,G=null;this.noiseImage&&(P=B(t,Ce(this.noiseImage,te,[{offset:0,alpha:1},{offset:.283,alpha:1},{offset:.99,alpha:0},{offset:1,alpha:0}])),G=B(t,Ce(this.noiseImage,oe,[{offset:0,alpha:1},{offset:.283,alpha:.7},{offset:.99,alpha:0},{offset:1,alpha:0}]))),this.state={prog:a,locMvp:r,locModel:s,locTex:l,locAlpha:i,locClipZ:u,aPosLoc:c,proj:f,texGlow:S,glowHW:_.width/2,glowHH:_.height/2,texHGlow:R,hglowHS:d.width/2,texBglow:y,bglowHS:b.width/2,texHole:L,holeHS:v.width/2*E,texEH:P,texHEH:G}}render(e,t,o){const a=this.gl;(!this.state||this.state.texHEH===null&&this.noiseImage!==null)&&this.init(e);const r=this.state;a.useProgram(r.prog),a.bindBuffer(a.ARRAY_BUFFER,this.quadVBO),a.enableVertexAttribArray(r.aPosLoc),a.vertexAttribPointer(r.aPosLoc,2,a.FLOAT,!1,0,0),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.enable(a.BLEND),a.disable(a.DEPTH_TEST);const s=t*o,l=s%xe/xe*Math.PI*2,i=s%Ee/Ee*Math.PI*2,u=()=>a.blendFunc(a.ONE,a.ONE_MINUS_SRC_ALPHA),c=()=>a.blendFunc(a.ONE,a.ONE_MINUS_SRC_COLOR);u(),this.drawQuad(r,r.texGlow,ae(r.glowHW,r.glowHH),1,0),r.texHEH&&(c(),this.drawQuad(r,r.texHEH,O(oe,l),.35,-1)),u(),this.drawQuad(r,r.texHGlow,O(r.hglowHS),1,-1),this.drawQuad(r,r.texHGlow,O(r.hglowHS),1,-1),r.texEH&&(c(),this.drawQuad(r,r.texEH,ae(te,te,i),.7,0)),u(),this.drawQuad(r,r.texBglow,O(r.bglowHS),1,0),this.drawQuad(r,r.texHole,ae(r.holeHS,r.holeHS),1,0),u(),this.drawQuad(r,r.texHGlow,O(r.hglowHS),1,1),this.drawQuad(r,r.texHGlow,O(r.hglowHS),1,1),r.texHEH&&(c(),this.drawQuad(r,r.texHEH,O(oe,l),.35,1)),a.disable(a.BLEND)}dispose(){if(!this.state)return;const e=this.gl,t=this.state;e.deleteProgram(t.prog),e.deleteTexture(t.texGlow),e.deleteTexture(t.texHGlow),e.deleteTexture(t.texBglow),e.deleteTexture(t.texHole),t.texEH&&e.deleteTexture(t.texEH),t.texHEH&&e.deleteTexture(t.texHEH),this.state=null}drawQuad(e,t,o,a,r){const s=this.gl,l=D(e.proj,o);s.uniformMatrix4fv(e.locMvp,!1,l),s.uniformMatrix4fv(e.locModel,!1,o),s.uniform1f(e.locAlpha,a),s.uniform1f(e.locClipZ,r),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,t),s.drawArrays(s.TRIANGLE_STRIP,0,4)}},to=class{constructor(e){this.hasSpare=!1,this.spare=0,this.s=e}next(){return this.s=(this.s*16807+0)%2147483647,(this.s-1)/2147483646}random(e,t){return t!==void 0?e+this.next()*(t-e):e!==void 0?this.next()*e:this.next()}randomGaussian(e=0,t=1){if(this.hasSpare)return this.hasSpare=!1,e+t*this.spare;let o,a,r;do o=this.next()*2-1,a=this.next()*2-1,r=o*o+a*a;while(r>=1||r===0);return r=Math.sqrt(-2*Math.log(r)/r),this.spare=a*r,this.hasSpare=!0,e+t*o*r}},oo=Math.PI*2,ao=900;function Me(e){if(typeof document>"u")return new OffscreenCanvas(e,e);const t=document.createElement("canvas");return t.width=e,t.height=e,t}function ro(e,t=512,o){const a=new to(e),r=ao,s=Me(r),l=s.getContext("2d");function i(h,I,N,$){const U=Math.max(0,Math.min(255,$));l.fillStyle=`rgba(${h|0},${I|0},${N|0},${U/255})`}function u(h,I,N){const $=Math.abs(N)/2;$<.1||(l.beginPath(),l.arc(h,I,$,0,oo),l.fill())}function c(h,I,N,$,U){U=U+r/2e3;const Je=8300+Math.floor(r/3),et=r/1500,Q=20;for(let me=0;me<Je;me++)i(h+a.random(Q),N+a.random(Q),I+a.random(Q),Math.abs(a.randomGaussian())/4),u(-r/2+r/2*a.randomGaussian(),r*a.randomGaussian()/$,a.randomGaussian(r/100,r/$+r/40)),i(255,255,255,U*a.randomGaussian()/2),u(-r/2+r/2*a.randomGaussian(),r*a.randomGaussian()/$,et*a.randomGaussian())}function f(){const h=r*4;for(let I=0;I<h;I++)i(255,255,255,Math.abs(255*a.randomGaussian())),u(-r/2+r/2*a.randomGaussian(),r*a.randomGaussian()*a.randomGaussian()*a.randomGaussian()*a.randomGaussian(),.5*a.randomGaussian())}function _(){l.save(),l.translate(a.random(-r/2,r/2),a.random(-r/10,r/10)),c(a.random(100,255),a.random(100,255),a.random(100,255),29,100),l.scale(.05,.05),c(a.random(100,255),a.random(100,255),a.random(100,255),10,2),c(255,255,255,2,2),f(),l.restore()}l.save(),l.translate(r/2,r/2);const d=a.random(.3,1);l.scale(d,d),l.rotate(a.random(-Math.PI,Math.PI));const b=o?.dominant??[a.random(10,255),a.random(10,255),a.random(10,255)];c(b[0],b[1],b[2],3,6),f();const v=o?.accents??[[200,200,200],[0,200,250],[250,100,250]];c(v[0][0],v[0][1],v[0][2],7,205),v.length>1&&c(v[1][0],v[1][1],v[1][2],22,205),v.length>2&&c(v[2][0],v[2][1],v[2][2],25,205);const S=Math.floor(a.random(0,3.1));for(let h=0;h<S;h++)_();const R=Math.max(10,r/12),y=Math.floor(a.random(5,R));for(let h=0;h<y;h++)l.save(),l.translate(r/3*a.randomGaussian(),r/3*a.randomGaussian()),l.scale(a.random(.5,1),a.random(.5,1)),l.rotate(a.random(-Math.PI/4,Math.PI/4)),c(a.random(100,255),a.random(100,255),a.random(100,255),15,100),l.restore();l.restore();const L=r/2,P=r/2,G=r,m=l.createRadialGradient(L,P,G*.25,L,P,G*.52);if(m.addColorStop(0,"rgba(0,0,0,0)"),m.addColorStop(.6,"rgba(0,0,0,0)"),m.addColorStop(1,"rgba(0,0,0,1)"),l.globalCompositeOperation="destination-out",l.fillStyle=m,l.fillRect(0,0,r,r),l.globalCompositeOperation="source-over",t===r)return s;const M=Me(t);return M.getContext("2d").drawImage(s,0,0,t,t),M}var j={id:"base_planet",seedSlots:[1],colorSlotRange:[0,3],glsl:e=>{const t=e.uvSource===1?"sphered":"rotated",o=e.octaves||6,a=`u_seed${e.seedSlot||1}`,r=`u_col${e.colorStart||0}`,s=`u_col${(e.colorStart||0)+1}`,l=`u_col${(e.colorStart||0)+2}`;return`
    // === BASE PLANET ===
    {
        float base_sz = ${(e.noiseScale||10).toFixed(1)};
        float base_fbm1 = fbm_s(${t}, ${o}, ${a}, base_sz);
        float base_dl = d_light + fbm_s(${t} * base_sz + base_fbm1 + vec2(t, 0.0), ${o}, ${a}, base_sz) * 0.1;

        vec4 base_col = mix(${r}, ${s}, step(0.4, base_dl));
        base_col = mix(base_col, ${l}, step(0.6, base_dl));
        result = vec4(base_col.rgb, a_circle * base_col.a);
    }`}},Xe={id:"land_mass",seedSlots:[2],colorSlotRange:[3,7],glsl:e=>{const t=(e.landCutoff??.5).toFixed(4),o=`u_seed${e.seedSlot||2}`,a=`u_col${e.colorStart||3}`,r=`u_col${(e.colorStart||3)+1}`,s=`u_col${(e.colorStart||3)+2}`,l=`u_col${(e.colorStart||3)+3}`;return`
    // === LAND MASS ===
    {
        float land_sz = ${(e.noiseScale||10).toFixed(1)};
        vec2 land_base = sphered * land_sz + vec2(t, 0.0);
        float lf1 = fbm_s(land_base, 6, ${o}, land_sz);
        float lf2 = fbm_s(land_base - u_light_origin * lf1, 6, ${o}, land_sz);
        float lf3 = fbm_s(land_base - u_light_origin * 1.5 * lf1, 6, ${o}, land_sz);
        float lf4 = fbm_s(land_base - u_light_origin * 2.0 * lf1, 6, ${o}, land_sz);

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
        land_col = mix(land_col, ${a}, step(lf2 + ld, lf1));
        float land_a = step(${t}, lf1) * a_circle * land_col.a;
        result = alphaBlend(result, vec4(land_col.rgb, land_a));
    }`}},_e={id:"clouds",seedSlots:[3],colorSlotRange:[7,11],glsl:e=>{const t=(e.cloudCover??.546).toFixed(4),o=(e.cloudScale||4).toFixed(1),a=`u_seed${e.seedSlot||3}`;return`
    // === CLOUD LAYER ===
    {
        float cloud_sz = ${o};
        vec2 cloud_uv = sphered;
        cloud_uv.y += smoothstep(0.0, 1.3, abs(cloud_uv.x - 0.4));
        cloud_uv *= vec2(1.0, 2.5);

        float c_noise = 0.0;
        for (int j = 0; j < 9; j++) {
            c_noise += circleNoise_s(cloud_uv * cloud_sz * 0.3 + float(j + 1) + 10.0 + vec2(t, 0.0), ${a}, cloud_sz);
        }
        float cloud_c = fbm_s(cloud_uv * cloud_sz + c_noise + vec2(t, 0.0), 4, ${a}, cloud_sz);

        float cloud_cover = ${t};
        vec4 cloud_col = ${`u_col${e.colorStart||7}`};
        cloud_col = mix(cloud_col, ${`u_col${(e.colorStart||7)+1}`}, step(cloud_c, cloud_cover + 0.03));
        cloud_col = mix(cloud_col, ${`u_col${(e.colorStart||7)+2}`}, step(0.4, d_light + cloud_c * 0.2));
        cloud_col = mix(cloud_col, ${`u_col${(e.colorStart||7)+3}`}, step(0.6, d_light + cloud_c * 0.2));
        float cloud_d = distance(uv, vec2(0.5));
        cloud_c *= step(cloud_d, 0.5);
        float cloud_a = step(cloud_cover, cloud_c) * a_circle * cloud_col.a;
        result = alphaBlend(result, vec4(cloud_col.rgb, cloud_a));
    }`}},Ke={id:"atmosphere",seedSlots:[],colorSlotRange:[11,14],glsl:e=>`
    // === ATMOSPHERE ===
    {
        vec2 atmo_ndc = 2.0 * uv - 1.0;
        float atmo_d = length(atmo_ndc);
        vec4 atmo = mix(vec4(0.0), ${`u_col${e.colorStart||11}`}, smoothstep(0.65, 0.87, atmo_d));
        atmo = mix(atmo, ${`u_col${(e.colorStart||11)+1}`}, smoothstep(0.87, 0.97, atmo_d));
        atmo = mix(atmo, ${`u_col${(e.colorStart||11)+2}`}, smoothstep(0.97, 1.04, atmo_d));
        atmo = mix(atmo, vec4(0.0), smoothstep(1.04, 1.05, atmo_d));
        result = alphaBlend(result, atmo);
    }`},so={type:n.TerrainWet,mode:"composed",uvScaling:1.05,features:[{feature:j,params:{uvSource:0,octaves:6,seedSlot:1,colorStart:0,noiseScale:10}},{feature:Xe,params:{landCutoff:.5,seedSlot:2,colorStart:3,noiseScale:10}},{feature:_e,params:{cloudCover:.546,cloudScale:4,seedSlot:3,colorStart:7}},{feature:Ke,params:{colorStart:11}}],palette:T[n.TerrainWet],colorSlots:A[n.TerrainWet],loopLCM:x[n.TerrainWet],defaults:{fbmOctaves:6,noiseScale:10,cloudCover:.546,cloudScale:4,landCutoff:.5}},lo=`
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
`,no={type:n.TerrainDry,mode:"standalone",uvScaling:1,standaloneGlsl:lo,palette:T[n.TerrainDry],colorSlots:A[n.TerrainDry],loopLCM:x[n.TerrainDry],defaults:{}},co={type:n.Aquatic,mode:"composed",uvScaling:1.05,features:[{feature:j,params:{uvSource:0,octaves:6,seedSlot:1,colorStart:0,noiseScale:10}},{feature:Xe,params:{landCutoff:.65,seedSlot:2,colorStart:3,noiseScale:10}},{feature:_e,params:{cloudCover:.546,cloudScale:4,seedSlot:3,colorStart:7}},{feature:Ke,params:{colorStart:11}}],palette:T[n.Aquatic],colorSlots:A[n.Aquatic],loopLCM:x[n.Aquatic],defaults:{fbmOctaves:6,noiseScale:10,cloudCover:.546,cloudScale:4,landCutoff:.65}},Qe={id:"craters",seedSlots:[2],colorSlotRange:[3,5],glsl:e=>{const t=(e.craterScale||5).toFixed(1),o=`u_seed${e.seedSlot||2}`,a=`u_col${e.colorStart||3}`,r=`u_col${(e.colorStart||3)+1}`;return`
    // === CRATER LAYER ===
    {
        float crater_sz = ${t};
        float c1_val = 1.0;
        for (int i = 0; i < 2; i++) {
            c1_val *= circleCrater_s(sphered * crater_sz + float(i + 1) + 10.0 + vec2(t, 0.0), ${o}, crater_sz);
        }
        float crater1 = 1.0 - c1_val;

        float c2_val = 1.0;
        vec2 c2_off = (u_light_origin - 0.5) * 0.04;
        for (int i = 0; i < 2; i++) {
            c2_val *= circleCrater_s((sphered + c2_off) * crater_sz + float(i + 1) + 10.0 + vec2(t, 0.0), ${o}, crater_sz);
        }
        float crater2 = 1.0 - c2_val;

        vec4 crater_col = ${a};
        float crater_a = step(0.5, crater1) * a_circle;
        crater_col = mix(crater_col, ${r}, step(crater2, crater1 - (0.5 - d_light) * 2.0));
        crater_col = mix(crater_col, ${r}, step(0.4, d_light));
        crater_a *= step(d_circle, 0.5);
        result = alphaBlend(result, vec4(crater_col.rgb, crater_a * crater_col.a));
    }`}},io={type:n.Barren,mode:"composed",uvScaling:1,features:[{feature:j,params:{uvSource:0,octaves:6,seedSlot:1,colorStart:0,noiseScale:10}},{feature:Qe,params:{craterScale:5,seedSlot:2,colorStart:3}}],palette:T[n.Barren],colorSlots:A[n.Barren],loopLCM:x[n.Barren],defaults:{fbmOctaves:6,noiseScale:10,craterScale:5}},uo=`
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
`,fo={type:n.GasGiant,mode:"standalone",uvScaling:1,standaloneGlsl:uo,palette:T[n.GasGiant],colorSlots:A[n.GasGiant],loopLCM:x[n.GasGiant],defaults:{}},_o=`
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
`,mo={type:n.GasGiantRinged,mode:"standalone",uvScaling:1,standaloneGlsl:_o,palette:T[n.GasGiantRinged],colorSlots:A[n.GasGiantRinged],loopLCM:x[n.GasGiantRinged],defaults:{}},Ze={id:"flow_layer",seedSlots:[2,3],colorSlotRange:[3,6],glsl:e=>{const t=e.flowOctaves||5,o=(e.flowCutoff??.6).toFixed(4),a=(e.flowScale||10).toFixed(1),r=`u_seed${e.seedSlot||3}`,s=`u_col${e.colorStart||5}`,l=`u_col${(e.colorStart||5)+1}`,i=`u_col${(e.colorStart||5)+2}`;return e.useScroll,`
    // === FLOW LAYER ===
    {
        float flow_sz = ${a};
        float flow_cutoff = ${o};
        float rf1 = fbm_w(sphered * flow_sz + vec2(t, 0.0), ${t}, ${r}, flow_sz);
        float river = fbm_w(sphered + vec2(t, 0.0) + rf1 * 2.5, ${t}, ${r}, flow_sz);
        river = step(flow_cutoff, river);

        vec4 flow_col = ${s};
        flow_col = mix(flow_col, ${l}, step(0.4, d_light));
        flow_col = mix(flow_col, ${i}, step(0.6, d_light));
        float flow_a = river * a_circle * flow_col.a;
        result = alphaBlend(result, vec4(flow_col.rgb, flow_a));
    }`}},go={type:n.Molten,mode:"composed",uvScaling:1,features:[{feature:j,params:{uvSource:1,octaves:6,seedSlot:1,colorStart:0,noiseScale:10}},{feature:Qe,params:{craterScale:5,seedSlot:2,colorStart:3}},{feature:Ze,params:{flowOctaves:5,flowCutoff:.6,flowScale:10,seedSlot:3,colorStart:5}}],palette:T[n.Molten],colorSlots:A[n.Molten],loopLCM:x[n.Molten],defaults:{fbmOctaves:6,noiseScale:10,craterScale:5,flowCutoff:.6,flowOctaves:5,flowScale:10}},ho={type:n.Ice,mode:"composed",uvScaling:1,features:[{feature:j,params:{uvSource:0,octaves:6,seedSlot:1,colorStart:0,noiseScale:10}},{feature:Ze,params:{flowOctaves:4,flowCutoff:.6,flowScale:10,seedSlot:2,colorStart:3}},{feature:_e,params:{cloudCover:.546,cloudScale:4,seedSlot:3,colorStart:6}}],palette:T[n.Ice],colorSlots:A[n.Ice],loopLCM:x[n.Ice],defaults:{fbmOctaves:6,noiseScale:10,cloudCover:.546,cloudScale:4,flowCutoff:.6,flowOctaves:4,flowScale:10}},vo=`
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
`,po={type:n.Star,mode:"standalone",uvScaling:1,standaloneGlsl:vo,palette:T[n.Star],colorSlots:A[n.Star],loopLCM:x[n.Star],defaults:{}},bo=`
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
`,So={type:n.Galaxy,mode:"standalone",uvScaling:1,standaloneGlsl:bo,palette:T[n.Galaxy],colorSlots:A[n.Galaxy],loopLCM:x[n.Galaxy],defaults:{}},yo={type:n.BlackHole,mode:"multipass",uvScaling:1,palette:T[n.BlackHole],colorSlots:A[n.BlackHole],loopLCM:x[n.BlackHole],defaults:{}},wo={type:n.Nebula,mode:"canvas2d",uvScaling:1,palette:{},colorSlots:[],loopLCM:x[n.Nebula],defaults:{}},re={[n.TerrainWet]:so,[n.TerrainDry]:no,[n.Aquatic]:co,[n.Barren]:io,[n.GasGiant]:fo,[n.GasGiantRinged]:mo,[n.Molten]:go,[n.Ice]:ho,[n.Star]:po,[n.Galaxy]:So,[n.BlackHole]:yo,[n.Nebula]:wo},jo=class{constructor(e){this.noiseTexture=null,this.noiseImage=null,this.canvas=e||document.createElement("canvas");const t=this.canvas.getContext("webgl",{premultipliedAlpha:!1,alpha:!0,antialias:!1,preserveDrawingBuffer:!0});if(!t)throw new Error("WebGL not supported");this.gl=t;const o=t.createBuffer();if(!o)throw new Error("Failed to create buffer");this.quadVBO=o,t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),t.STATIC_DRAW),this.fallbackTexture=Ct(t);const a=Mt(128);this.noiseTexture=ye(t,a),this.shaderRenderer=new Ot(t,this.quadVBO,this.fallbackTexture),this.shaderRenderer.setNoiseTexture(this.noiseTexture),this.bhRenderer=new eo(t,this.quadVBO)}async precompile(e){const t=e||Object.values(n).filter(o=>o!==n.BlackHole&&o!==n.Nebula);for(const o of t){const a=re[o];!a||a.mode==="multipass"||a.mode==="canvas2d"||(this.shaderRenderer.precompile(a),await new Promise(r=>setTimeout(r,0)))}}async loadNoiseTexture(e){const t=await Pt(e);this.noiseImage=t,this.setNoiseTexture(t),this.bhRenderer.setNoiseImage(t)}setNoiseTexture(e){const t=this.gl;this.noiseTexture&&t.deleteTexture(this.noiseTexture),this.noiseTexture=ye(t,e),this.shaderRenderer.setNoiseTexture(this.noiseTexture)}render(e,t){const o=this.gl,a=e.resolution||512,r=e.type;if(r===n.Nebula)return ro(e.seed,a,e.colors);if((this.canvas.width!==a||this.canvas.height!==a)&&(this.canvas.width=a,this.canvas.height=a),o.viewport(0,0,a,a),r===n.BlackHole){const l=re[n.BlackHole],i=l.palette,u=e.colors||{},c={};for(const _ of l.colorSlots)c[_]=u[_]||i[_];const f=e.timeSpeed??.1;return this.bhRenderer.render(c,t,f),this.canvas}const s=re[r];if(!s)throw new Error(`Unknown celestial type: ${r}`);return this.shaderRenderer.render(s,e,t),this.canvas}renderToImageData(e,t){this.render(e,t);const o=this.gl,a=this.canvas.width,r=this.canvas.height,s=new Uint8Array(a*r*4);o.readPixels(0,0,a,r,o.RGBA,o.UNSIGNED_BYTE,s);const l=a*4,i=new Uint8Array(l);for(let u=0;u<Math.floor(r/2);u++){const c=u*l,f=(r-1-u)*l;i.set(s.subarray(c,c+l)),s.copyWithin(c,f,f+l),s.set(i,f)}return new ImageData(new Uint8ClampedArray(s.buffer),a,r)}getCanvas(){return this.canvas}getLoopDuration(e,t){const o=t??.1,a=x[e];return a?a/o:0}static getCelestialTypes(){return Object.values(n)}static getColorSlots(e){return[...A[e]||[]]}static getDefaultPalette(e){return{...T[e]||{}}}dispose(){const e=this.gl;this.shaderRenderer.dispose(),this.bhRenderer.dispose(),e.deleteBuffer(this.quadVBO),e.deleteTexture(this.fallbackTexture),this.noiseTexture&&e.deleteTexture(this.noiseTexture)}},xo=new Set,Eo={galaxy:"galaxy",nebula:"nebula",planetary_nebula:"nebula",star_cluster:"nebula",black_hole:"blackHole"},Pe=new Set;function Ro(e){const t=Eo[e];return t??(Pe.has(e)||(Pe.add(e),console.warn(`[dsoCatalogKind] unknown DeepSkyBodyType "${String(e)}"; defaulting to nebula`)),"nebula")}function To(e){return xo.has(e.catalogId)?"blackHole":Ro(e.type)}function Ao(e){switch(e){case"galaxy":return n.Galaxy;case"nebula":return n.Nebula;case"blackHole":return n.BlackHole;default:return n.Nebula}}function Fo(e){return Ao(To(e))}function Wo(e){return e===n.BlackHole?"black_hole":e}export{at as C,Io as D,rt as E,ze as S,Lo as T,vt as _,n as a,_t as b,No as c,Ho as d,Rt as f,bt as g,ko as h,jo as i,Do as l,Bo as m,Wo as n,zo as o,pt as p,To as r,Uo as s,Fo as t,Tt as u,Oo as v,$o as w,Oe as x,ht as y};
