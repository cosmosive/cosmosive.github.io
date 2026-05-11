import{r as Gd}from"./rolldown-runtime-BOC55nOF.js";var Qh,Oh,Gh,kh,zh,Vh,Hh,Wh,qh;var kd={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zd={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var Xh="attached",Vd="detached";var kr=1e3,$t=1001,zr=1002,Ct=1003,xa=1004,Hd=1004,Xo=1005,Wd=1005,gt=1006,Yo=1007,qd=1007,nn=1008,Xd=1008,Ye=1009,Yh=1010,Jh=1011,Ia=1012,Kh=1013,Fi=1014,ti=1015,Zt=1016,Jo=1017,Ko=1018,Zo=1020,$o=35902,jo=35899,Zh=1021,Vr=1022,Qt=1023,or=1026,el=1027,Ki=1028,Ca=1029,Ci=1030,tl=1031,Yd=1032,il=1033,fa=33776,Hr=33777,$h=33778,Wr=33779,nl=35840,jh=35841,qr=35842,pa=35843,rl=36196,Ma=37492,Sa=37496,sl=37488,al=37489,ol=37490,ll=37491,sr=37808,eu=37809,tu=37810,iu=37811,Fr=37812,nu=37813,ru=37814,su=37815,au=37816,ou=37817,lu=37818,cu=37819,hu=37820,uu=37821,Xr=36492,Au=36494,cl=36495,hl=36283,ul=36284,Al=36285,dl=36286,Jd=2200,du=2201,fu=2202,Yr=2300,ga=2301,la=2302,Uo=2303,En=2400,xn=2401,Jr=2402,Ba=2500,fl=2501,pu=3200,Kd=3201,Zd=3202,$d=3203;var Ft="srgb",Kr="srgb-linear",Zr="linear",$r="srgb",ca=7680,jd=7681,ef=7682,tf=7683,nf=34055,rf=34056,sf=5386;var ba=35044,af=35048,of=35040,lf=35045,cf=35049,hf=35041,uf=35046,Af=35050,df=35042,ff="300 es",ji=2e3,pf=2001,gf={COMPUTE:"compute",RENDER:"render"},mf={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},vf={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},_f={TEXTURE_COMPARE:"depthTextureCompare"};function yf(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}var Ef={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function nr(e,t){return new Ef[e](t)}function gu(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function jr(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function mu(){const e=jr("canvas");return e.style.display="block",e}var tc={},en=null;function xf(e){en=e}function If(){return en}function es(...e){const t="THREE."+e.shift();en?en("log",t,...e):console.log(t,...e)}function vu(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function ce(...e){e=vu(e);const t="THREE."+e.shift();if(en)en("warn",t,...e);else{const i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function we(...e){e=vu(e);const t="THREE."+e.shift();if(en)en("error",t,...e);else{const i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function ma(...e){const t=e.join(" ");t in tc||(tc[t]=!0,ce(...e))}function Cf(e,t,i){return new Promise(function(n,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:n()}}setTimeout(s,i)})}var Mf={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ic=1234567,Cn=Math.PI/180,lr=180/Math.PI;function ii(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[e&255]+Pt[e>>8&255]+Pt[e>>16&255]+Pt[e>>24&255]+"-"+Pt[t&255]+Pt[t>>8&255]+"-"+Pt[t>>16&15|64]+Pt[t>>24&255]+"-"+Pt[i&63|128]+Pt[i>>8&255]+"-"+Pt[i>>16&255]+Pt[i>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function Ge(e,t,i){return Math.max(t,Math.min(i,e))}function pl(e,t){return(e%t+t)%t}function Sf(e,t,i,n,r){return n+(e-t)*(r-n)/(i-t)}function Bf(e,t,i){return e!==t?(i-e)/(t-e):0}function Qr(e,t,i){return(1-i)*e+i*t}function bf(e,t,i,n){return Qr(e,t,1-Math.exp(-i*n))}function wf(e,t=1){return t-Math.abs(pl(e,t*2)-t)}function Tf(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function Rf(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function Df(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Lf(e,t){return e+Math.random()*(t-e)}function Pf(e){return e*(.5-Math.random())}function Uf(e){e!==void 0&&(ic=e);let t=ic+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nf(e){return e*Cn}function Ff(e){return e*lr}function Qf(e){return(e&e-1)===0&&e!==0}function Of(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Gf(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function kf(e,t,i,n,r){const s=Math.cos,a=Math.sin,o=s(i/2),l=a(i/2),c=s((t+n)/2),u=a((t+n)/2),A=s((t-n)/2),h=a((t-n)/2),d=s((n-t)/2),p=a((n-t)/2);switch(r){case"XYX":e.set(o*u,l*A,l*h,o*c);break;case"YZY":e.set(l*h,o*u,l*A,o*c);break;case"ZXZ":e.set(l*A,l*h,o*u,o*c);break;case"XZX":e.set(o*u,l*p,l*d,o*c);break;case"YXY":e.set(l*d,o*u,l*p,o*c);break;case"ZYZ":e.set(l*p,l*d,o*u,o*c);break;default:ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ht(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Je(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var zf={DEG2RAD:Cn,RAD2DEG:lr,generateUUID:ii,clamp:Ge,euclideanModulo:pl,mapLinear:Sf,inverseLerp:Bf,lerp:Qr,damp:bf,pingpong:wf,smoothstep:Tf,smootherstep:Rf,randInt:Df,randFloat:Lf,randFloatSpread:Pf,seededRandom:Uf,degToRad:Nf,radToDeg:Ff,isPowerOfTwo:Qf,ceilPowerOfTwo:Of,floorPowerOfTwo:Gf,setQuaternionFromProperEuler:kf,normalize:Je,denormalize:Ht};Hh=Symbol.iterator;var Z=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*n+e.x,this.y=r*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Hh](){yield this.x,yield this.y}};Qh=Z;Qh.prototype.isVector2=!0;var Wt=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,a){let o=i[n+0],l=i[n+1],c=i[n+2],u=i[n+3],A=r[s+0],h=r[s+1],d=r[s+2],p=r[s+3];if(u!==p||o!==A||l!==h||c!==d){let m=o*A+l*h+c*d+u*p;m<0&&(A=-A,h=-h,d=-d,p=-p,m=-m);let g=1-a;if(m<.9995){const f=Math.acos(m),v=Math.sin(f);g=Math.sin(g*f)/v,a=Math.sin(a*f)/v,o=o*g+A*a,l=l*g+h*a,c=c*g+d*a,u=u*g+p*a}else{o=o*g+A*a,l=l*g+h*a,c=c*g+d*a,u=u*g+p*a;const f=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=f,l*=f,c*=f,u*=f}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,s){const a=i[n],o=i[n+1],l=i[n+2],c=i[n+3],u=r[s],A=r[s+1],h=r[s+2],d=r[s+3];return e[t]=a*d+c*u+o*h-l*A,e[t+1]=o*d+c*A+l*u-a*h,e[t+2]=l*d+c*h+a*A-o*u,e[t+3]=c*d-a*u-o*A-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,s=e._order,a=Math.cos,o=Math.sin,l=a(i/2),c=a(n/2),u=a(r/2),A=o(i/2),h=o(n/2),d=o(r/2);switch(s){case"XYZ":this._x=A*c*u+l*h*d,this._y=l*h*u-A*c*d,this._z=l*c*d+A*h*u,this._w=l*c*u-A*h*d;break;case"YXZ":this._x=A*c*u+l*h*d,this._y=l*h*u-A*c*d,this._z=l*c*d-A*h*u,this._w=l*c*u+A*h*d;break;case"ZXY":this._x=A*c*u-l*h*d,this._y=l*h*u+A*c*d,this._z=l*c*d+A*h*u,this._w=l*c*u-A*h*d;break;case"ZYX":this._x=A*c*u-l*h*d,this._y=l*h*u+A*c*d,this._z=l*c*d-A*h*u,this._w=l*c*u+A*h*d;break;case"YZX":this._x=A*c*u+l*h*d,this._y=l*h*u+A*c*d,this._z=l*c*d-A*h*u,this._w=l*c*u-A*h*d;break;case"XZY":this._x=A*c*u-l*h*d,this._y=l*h*u-A*c*d,this._z=l*c*d+A*h*u,this._w=l*c*u+A*h*d;break;default:ce("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10],A=i+a+u;if(A>0){const h=.5/Math.sqrt(A+1);this._w=.25/h,this._x=(c-o)*h,this._y=(r-l)*h,this._z=(s-n)*h}else if(i>a&&i>u){const h=2*Math.sqrt(1+i-a-u);this._w=(c-o)/h,this._x=.25*h,this._y=(n+s)/h,this._z=(r+l)/h}else if(a>u){const h=2*Math.sqrt(1+a-i-u);this._w=(r-l)/h,this._x=(n+s)/h,this._y=.25*h,this._z=(o+c)/h}else{const h=2*Math.sqrt(1+u-i-a);this._w=(s-n)/h,this._x=(r+l)/h,this._y=(o+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,s=e._w,a=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+s*a+n*l-r*o,this._y=n*c+s*o+r*a-i*l,this._z=r*c+s*l+i*o-n*a,this._w=s*c-i*a-n*o-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,r=-r,s=-s,a=-a);let o=1-t;if(a<.9995){const l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+n*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+n*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};Wh=Symbol.iterator;var w=class{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,s=e.y,a=e.z,o=e.w,l=2*(s*n-a*i),c=2*(a*t-r*n),u=2*(r*i-s*t);return this.x=t+o*l+s*u-a*c,this.y=i+o*c+a*l-r*u,this.z=n+o*u+r*c-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,s=t.x,a=t.y,o=t.z;return this.x=n*o-r*a,this.y=r*s-i*o,this.z=i*a-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Wh](){yield this.x,yield this.y,yield this.z}};Oh=w;Oh.prototype.isVector3=!0;var Qa=new w,nc=new Wt,We=class{constructor(e,t,i,n,r,s,a,o,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,s,a,o,l)}set(e,t,i,n,r,s,a,o,l){const c=this.elements;return c[0]=e,c[1]=n,c[2]=a,c[3]=t,c[4]=r,c[5]=o,c[6]=i,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7],A=i[2],h=i[5],d=i[8],p=n[0],m=n[3],g=n[6],f=n[1],v=n[4],E=n[7],_=n[2],S=n[5],M=n[8];return r[0]=s*p+a*f+o*_,r[3]=s*m+a*v+o*S,r[6]=s*g+a*E+o*M,r[1]=l*p+c*f+u*_,r[4]=l*m+c*v+u*S,r[7]=l*g+c*E+u*M,r[2]=A*p+h*f+d*_,r[5]=A*m+h*v+d*S,r[8]=A*g+h*E+d*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8];return t*s*c-t*a*l-i*r*c+i*a*o+n*r*l-n*s*o}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],a=e[5],o=e[6],l=e[7],c=e[8],u=c*s-a*l,A=a*o-c*r,h=l*r-s*o,d=t*u+i*A+n*h;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/d;return e[0]=u*p,e[1]=(n*l-c*i)*p,e[2]=(a*i-n*s)*p,e[3]=A*p,e[4]=(c*t-n*o)*p,e[5]=(n*r-a*t)*p,e[6]=h*p,e[7]=(i*o-l*t)*p,e[8]=(s*t-i*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,s,a){const o=Math.cos(r),l=Math.sin(r);return this.set(i*o,i*l,-i*(o*s+l*a)+s+e,-n*l,n*o,-n*(-l*s+o*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Oa.makeScale(e,t)),this}rotate(e){return this.premultiply(Oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gh=We;Gh.prototype.isMatrix3=!0;var Oa=new We,rc=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vf(){const e={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer==="srgb"&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=ar(r.r),r.g=ar(r.g),r.b=ar(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Zr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ma("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ma("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],n=[.3127,.329];return e.define({[Kr]:{primaries:t,whitePoint:n,transfer:Zr,toXYZ:rc,fromXYZ:sc,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:t,whitePoint:n,transfer:$r,toXYZ:rc,fromXYZ:sc,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),e}var nt=Vf();function Ni(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ar(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Dn,_u=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Dn===void 0&&(Dn=jr("canvas")),Dn.width=e.width,Dn.height=e.height;const n=Dn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Dn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=Ni(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hf=0,Zi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,a=n.length;s<a;s++)n[s].isDataTexture?r.push(Ga(n[s].image)):r.push(Ga(n[s]))}else r=Ga(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ga(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?_u.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(ce("Texture: Unable to serialize Texture."),{})}var Wf=0,ka=new w,wt=class ha extends gi{constructor(t=ha.DEFAULT_IMAGE,i=ha.DEFAULT_MAPPING,n=$t,r=$t,s=gt,a=nn,o=Qt,l=Ye,c=ha.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=ii(),this.name="",this.source=new Zi(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ka).x}get height(){return this.source.getSize(ka).y}get depth(){return this.source.getSize(ka).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const n=t[i];if(n===void 0){ce(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const r=this[i];if(r===void 0){ce(`Texture.setValues(): property '${i}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[i]=n}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kr:t.x=t.x-Math.floor(t.x);break;case $t:t.x=t.x<0?0:1;break;case zr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kr:t.y=t.y-Math.floor(t.y);break;case $t:t.y=t.y<0?0:1;break;case zr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=300;wt.DEFAULT_ANISOTROPY=1;qh=Symbol.iterator;var ht=class{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const o=e.elements,l=o[0],c=o[4],u=o[8],A=o[1],h=o[5],d=o[9],p=o[2],m=o[6],g=o[10];if(Math.abs(c-A)<.01&&Math.abs(u-p)<.01&&Math.abs(d-m)<.01){if(Math.abs(c+A)<.1&&Math.abs(u+p)<.1&&Math.abs(d+m)<.1&&Math.abs(l+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,E=(h+1)/2,_=(g+1)/2,S=(c+A)/4,M=(u+p)/4,T=(d+m)/4;return v>E&&v>_?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=S/i,r=M/i):E>_?E<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(E),i=S/n,r=T/n):_<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(_),i=M/r,n=T/r),this.set(i,n,r,t),this}let f=Math.sqrt((m-d)*(m-d)+(u-p)*(u-p)+(A-c)*(A-c));return Math.abs(f)<.001&&(f=1),this.x=(m-d)/f,this.y=(u-p)/f,this.z=(A-c)/f,this.w=Math.acos((l+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[qh](){yield this.x,yield this.y,yield this.z,yield this.w}};kh=ht;kh.prototype.isVector4=!0;var gl=class extends gi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const n=new wt({width:e,height:t,depth:i.depth}),r=i.count;for(let s=0;s<r;s++)this.textures[s]=n.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new Zi(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends gl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},wa=class extends wt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},qf=class extends ni{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new wa(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}},cs=class extends wt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xf=class extends ni{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new cs(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}},He=class yu{constructor(t,i,n,r,s,a,o,l,c,u,A,h,d,p,m,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,n,r,s,a,o,l,c,u,A,h,d,p,m,g)}set(t,i,n,r,s,a,o,l,c,u,A,h,d,p,m,g){const f=this.elements;return f[0]=t,f[4]=i,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=A,f[14]=h,f[3]=d,f[7]=p,f[11]=m,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yu().fromArray(this.elements)}copy(t){const i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this}copyPosition(t){const i=this.elements,n=t.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,n){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,i,n){return this.set(t.x,i.x,n.x,0,t.y,i.y,n.y,0,t.z,i.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,n=t.elements,r=1/Ln.setFromMatrixColumn(t,0).length(),s=1/Ln.setFromMatrixColumn(t,1).length(),a=1/Ln.setFromMatrixColumn(t,2).length();return i[0]=n[0]*r,i[1]=n[1]*r,i[2]=n[2]*r,i[3]=0,i[4]=n[4]*s,i[5]=n[5]*s,i[6]=n[6]*s,i[7]=0,i[8]=n[8]*a,i[9]=n[9]*a,i[10]=n[10]*a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),A=Math.sin(s);if(t.order==="XYZ"){const h=a*u,d=a*A,p=o*u,m=o*A;i[0]=l*u,i[4]=-l*A,i[8]=c,i[1]=d+p*c,i[5]=h-m*c,i[9]=-o*l,i[2]=m-h*c,i[6]=p+d*c,i[10]=a*l}else if(t.order==="YXZ"){const h=l*u,d=l*A,p=c*u,m=c*A;i[0]=h+m*o,i[4]=p*o-d,i[8]=a*c,i[1]=a*A,i[5]=a*u,i[9]=-o,i[2]=d*o-p,i[6]=m+h*o,i[10]=a*l}else if(t.order==="ZXY"){const h=l*u,d=l*A,p=c*u,m=c*A;i[0]=h-m*o,i[4]=-a*A,i[8]=p+d*o,i[1]=d+p*o,i[5]=a*u,i[9]=m-h*o,i[2]=-a*c,i[6]=o,i[10]=a*l}else if(t.order==="ZYX"){const h=a*u,d=a*A,p=o*u,m=o*A;i[0]=l*u,i[4]=p*c-d,i[8]=h*c+m,i[1]=l*A,i[5]=m*c+h,i[9]=d*c-p,i[2]=-c,i[6]=o*l,i[10]=a*l}else if(t.order==="YZX"){const h=a*l,d=a*c,p=o*l,m=o*c;i[0]=l*u,i[4]=m-h*A,i[8]=p*A+d,i[1]=A,i[5]=a*u,i[9]=-o*u,i[2]=-c*u,i[6]=d*A+p,i[10]=h-m*A}else if(t.order==="XZY"){const h=a*l,d=a*c,p=o*l,m=o*c;i[0]=l*u,i[4]=-A,i[8]=c*u,i[1]=h*A+m,i[5]=a*u,i[9]=d*A-p,i[2]=p*A-d,i[6]=o*u,i[10]=m*A+h}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yf,t,Jf)}lookAt(t,i,n){const r=this.elements;return jt.subVectors(t,i),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ki.crossVectors(n,jt),ki.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ki.crossVectors(n,jt)),ki.normalize(),ms.crossVectors(jt,ki),r[0]=ki.x,r[4]=ms.x,r[8]=jt.x,r[1]=ki.y,r[5]=ms.y,r[9]=jt.y,r[2]=ki.z,r[6]=ms.z,r[10]=jt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const n=t.elements,r=i.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],A=n[5],h=n[9],d=n[13],p=n[2],m=n[6],g=n[10],f=n[14],v=n[3],E=n[7],_=n[11],S=n[15],M=r[0],T=r[4],y=r[8],C=r[12],L=r[1],b=r[5],F=r[9],H=r[13],U=r[2],k=r[6],G=r[10],Q=r[14],Y=r[3],ee=r[7],ie=r[11],me=r[15];return s[0]=a*M+o*L+l*U+c*Y,s[4]=a*T+o*b+l*k+c*ee,s[8]=a*y+o*F+l*G+c*ie,s[12]=a*C+o*H+l*Q+c*me,s[1]=u*M+A*L+h*U+d*Y,s[5]=u*T+A*b+h*k+d*ee,s[9]=u*y+A*F+h*G+d*ie,s[13]=u*C+A*H+h*Q+d*me,s[2]=p*M+m*L+g*U+f*Y,s[6]=p*T+m*b+g*k+f*ee,s[10]=p*y+m*F+g*G+f*ie,s[14]=p*C+m*H+g*Q+f*me,s[3]=v*M+E*L+_*U+S*Y,s[7]=v*T+E*b+_*k+S*ee,s[11]=v*y+E*F+_*G+S*ie,s[15]=v*C+E*H+_*Q+S*me,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],A=t[6],h=t[10],d=t[14],p=t[3],m=t[7],g=t[11],f=t[15],v=l*d-c*h,E=o*d-c*A,_=o*h-l*A,S=a*d-c*u,M=a*h-l*u,T=a*A-o*u;return i*(m*v-g*E+f*_)-n*(p*v-g*S+f*M)+r*(p*E-m*S+f*T)-s*(p*_-m*M+g*T)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=i,r[14]=n),this}invert(){const t=this.elements,i=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],A=t[9],h=t[10],d=t[11],p=t[12],m=t[13],g=t[14],f=t[15],v=i*o-n*a,E=i*l-r*a,_=i*c-s*a,S=n*l-r*o,M=n*c-s*o,T=r*c-s*l,y=u*m-A*p,C=u*g-h*p,L=u*f-d*p,b=A*g-h*m,F=A*f-d*m,H=h*f-d*g,U=v*H-E*F+_*b+S*L-M*C+T*y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/U;return t[0]=(o*H-l*F+c*b)*k,t[1]=(r*F-n*H-s*b)*k,t[2]=(m*T-g*M+f*S)*k,t[3]=(h*M-A*T-d*S)*k,t[4]=(l*L-a*H-c*C)*k,t[5]=(i*H-r*L+s*C)*k,t[6]=(g*_-p*T-f*E)*k,t[7]=(u*T-h*_+d*E)*k,t[8]=(a*F-o*L+c*y)*k,t[9]=(n*L-i*F-s*y)*k,t[10]=(p*M-m*_+f*v)*k,t[11]=(A*_-u*M-d*v)*k,t[12]=(o*C-a*b-l*y)*k,t[13]=(i*b-n*C+r*y)*k,t[14]=(m*E-p*S-g*v)*k,t[15]=(u*S-A*E+h*v)*k,this}scale(t){const i=this.elements,n=t.x,r=t.y,s=t.z;return i[0]*=n,i[4]*=r,i[8]*=s,i[1]*=n,i[5]*=r,i[9]*=s,i[2]*=n,i[6]*=r,i[10]*=s,i[3]*=n,i[7]*=r,i[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,n,r))}makeTranslation(t,i,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,n,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const n=Math.cos(i),r=Math.sin(i),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,i,n){return this.set(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,i,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,i,r,1,0,0,0,0,1),this}compose(t,i,n){const r=this.elements,s=i._x,a=i._y,o=i._z,l=i._w,c=s+s,u=a+a,A=o+o,h=s*c,d=s*u,p=s*A,m=a*u,g=a*A,f=o*A,v=l*c,E=l*u,_=l*A,S=n.x,M=n.y,T=n.z;return r[0]=(1-(m+f))*S,r[1]=(d+_)*S,r[2]=(p-E)*S,r[3]=0,r[4]=(d-_)*M,r[5]=(1-(h+f))*M,r[6]=(g+v)*M,r[7]=0,r[8]=(p+E)*T,r[9]=(g-v)*T,r[10]=(1-(h+m))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,i,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),i.identity(),this;let a=Ln.set(r[0],r[1],r[2]).length();const o=Ln.set(r[4],r[5],r[6]).length(),l=Ln.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Ai.copy(this);const c=1/a,u=1/o,A=1/l;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=u,Ai.elements[5]*=u,Ai.elements[6]*=u,Ai.elements[8]*=A,Ai.elements[9]*=A,Ai.elements[10]*=A,i.setFromRotationMatrix(Ai),n.x=a,n.y=o,n.z=l,this}makePerspective(t,i,n,r,s,a,o=ji,l=!1){const c=this.elements,u=2*s/(i-t),A=2*s/(n-r),h=(i+t)/(i-t),d=(n+r)/(n-r);let p,m;if(l)p=s/(a-s),m=a*s/(a-s);else if(o===2e3)p=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===2001)p=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=A,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,n,r,s,a,o=ji,l=!1){const c=this.elements,u=2/(i-t),A=2/(n-r),h=-(i+t)/(i-t),d=-(n+r)/(n-r);let p,m;if(l)p=1/(a-s),m=a/(a-s);else if(o===2e3)p=-2/(a-s),m=-(a+s)/(a-s);else if(o===2001)p=-1/(a-s),m=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=A,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const i=this.elements,n=t.elements;for(let r=0;r<16;r++)if(i[r]!==n[r])return!1;return!0}fromArray(t,i=0){for(let n=0;n<16;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){const n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t[i+9]=n[9],t[i+10]=n[10],t[i+11]=n[11],t[i+12]=n[12],t[i+13]=n[13],t[i+14]=n[14],t[i+15]=n[15],t}};zh=He;zh.prototype.isMatrix4=!0;var Ln=new w,Ai=new He,Yf=new w(0,0,0),Jf=new w(1,1,1),ki=new w,ms=new w,jt=new w,ac=new He,oc=new Wt,Qi=class Eu{constructor(t=0,i=0,n=0,r=Eu.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,n,r=this._order){return this._x=t,this._y=i,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],A=r[2],h=r[6],d=r[10];switch(i){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-A,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-A,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(A,-1,1)),Math.abs(A)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-A,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,n){return ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ac,i,n)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return oc.setFromEuler(this),this.setFromQuaternion(oc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qi.DEFAULT_ORDER="XYZ";var Ta=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kf=0,lc=new w,Pn=new Wt,Bi=new He,vs=new w,_r=new w,Zf=new w,$f=new Wt,cc=new w(1,0,0),hc=new w(0,1,0),uc=new w(0,0,1),Ac={type:"added"},jf={type:"removed"},Un={type:"childadded",child:null},za={type:"childremoved",child:null},lt=class ua extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ua.DEFAULT_UP.clone();const t=new w,i=new Qi,n=new Wt,r=new w(1,1,1);function s(){n.setFromEuler(i,!1)}function a(){i.setFromQuaternion(n,void 0,!1)}i._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new He},normalMatrix:{value:new We}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=ua.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ua.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Pn.setFromAxisAngle(t,i),this.quaternion.multiply(Pn),this}rotateOnWorldAxis(t,i){return Pn.setFromAxisAngle(t,i),this.quaternion.premultiply(Pn),this}rotateX(t){return this.rotateOnAxis(cc,t)}rotateY(t){return this.rotateOnAxis(hc,t)}rotateZ(t){return this.rotateOnAxis(uc,t)}translateOnAxis(t,i){return lc.copy(t).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(cc,t)}translateY(t){return this.translateOnAxis(hc,t)}translateZ(t){return this.translateOnAxis(uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,i,n){t.isVector3?vs.copy(t):vs.set(t,i,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(_r,vs,this.up):Bi.lookAt(vs,_r,this.up),this.quaternion.setFromRotationMatrix(Bi),r&&(Bi.extractRotation(r.matrixWorld),Pn.setFromRotationMatrix(Bi),this.quaternion.premultiply(Pn.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ac),Un.child=t,this.dispatchEvent(Un),Un.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(jf),za.child=t,this.dispatchEvent(za),za.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ac),Un.child=t,this.dispatchEvent(Un),Un.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(t,i);if(s!==void 0)return s}}getObjectsByProperty(t,i,n=[]){this[t]===i&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,i,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,Zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,$f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=i-s[0]*i-s[4]*n-s[8]*r,s[13]+=n-s[1]*i-s[5]*n-s[9]*r,s[14]+=r-s[2]*i-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].updateMatrixWorld(t)}updateWorldMatrix(t,i){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",n={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const A=l[c];s(t.shapes,A)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(i){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),A=a(t.shapes),h=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),A.length>0&&(n.shapes=A),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}};lt.DEFAULT_UP=new w(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rr=class extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ep={type:"move"},Aa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,i),g=this._getHandJoint(l,p);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],A=c.position.distanceTo(u.position),h=.02,d=.005;l.inputState.pinching&&A>h+d?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&A<=h-d&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ep)))}return a!==null&&(a.visible=n!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new rr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Va(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=nt.workingColorSpace){if(e=pl(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Va(s,r,e+1/3),this.g=Va(s,r,e),this.b=Va(s,r,e-1/3)}return nt.colorSpaceToWorking(this,n),this}setStyle(e,t=Ft){function i(r){r!==void 0&&parseFloat(r)<1&&ce("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ce("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const i=xu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return nt.workingToColorSpace(Ut.copy(this),e),Math.round(Ge(Ut.r*255,0,255))*65536+Math.round(Ge(Ut.g*255,0,255))*256+Math.round(Ge(Ut.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Ut.copy(this),t);const i=Ut.r,n=Ut.g,r=Ut.b,s=Math.max(i,n,r),a=Math.min(i,n,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case i:o=(n-r)/u+(n<r?6:0);break;case n:o=(r-i)/u+2;break;case r:o=(i-n)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Ft){nt.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,n=Ut.b;return e!=="srgb"?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(_s);const i=Qr(zi.h,_s.h,t),n=Qr(zi.s,_s.s,t),r=Qr(zi.l,_s.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ut=new ye;ye.NAMES=xu;var Iu=class Cu{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(t),this.density=i}clone(){return new Cu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Mu=class Su{constructor(t,i=1,n=1e3){this.isFog=!0,this.name="",this.color=new ye(t),this.near=i,this.far=n}clone(){return new Su(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bu=class extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},di=new w,bi=new w,Ha=new w,wi=new w,Nn=new w,Fn=new w,dc=new w,Wa=new w,qa=new w,Xa=new w,Ya=new ht,Ja=new ht,Ka=new ht,Ji=class er{constructor(t=new w,i=new w,n=new w){this.a=t,this.b=i,this.c=n}static getNormal(t,i,n,r){r.subVectors(n,i),di.subVectors(t,i),r.cross(di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,i,n,r,s){di.subVectors(r,i),bi.subVectors(n,i),Ha.subVectors(t,i);const a=di.dot(di),o=di.dot(bi),l=di.dot(Ha),c=bi.dot(bi),u=bi.dot(Ha),A=a*c-o*o;if(A===0)return s.set(0,0,0),null;const h=1/A,d=(c*l-o*u)*h,p=(a*u-o*l)*h;return s.set(1-d-p,p,d)}static containsPoint(t,i,n,r){return this.getBarycoord(t,i,n,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,i,n,r,s,a,o,l){return this.getBarycoord(t,i,n,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(t,i,n,r,s,a){return Ya.setScalar(0),Ja.setScalar(0),Ka.setScalar(0),Ya.fromBufferAttribute(t,i),Ja.fromBufferAttribute(t,n),Ka.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ya,s.x),a.addScaledVector(Ja,s.y),a.addScaledVector(Ka,s.z),a}static isFrontFacing(t,i,n,r){return di.subVectors(n,i),bi.subVectors(t,i),di.cross(bi).dot(r)<0}set(t,i,n){return this.a.copy(t),this.b.copy(i),this.c.copy(n),this}setFromPointsAndIndices(t,i,n,r){return this.a.copy(t[i]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,i,n,r){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),di.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return er.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return er.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,n,r,s){return er.getInterpolation(t,this.a,this.b,this.c,i,n,r,s)}containsPoint(t){return er.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return er.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const n=this.a,r=this.b,s=this.c;let a,o;Nn.subVectors(r,n),Fn.subVectors(s,n),Wa.subVectors(t,n);const l=Nn.dot(Wa),c=Fn.dot(Wa);if(l<=0&&c<=0)return i.copy(n);qa.subVectors(t,r);const u=Nn.dot(qa),A=Fn.dot(qa);if(u>=0&&A<=u)return i.copy(r);const h=l*A-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),i.copy(n).addScaledVector(Nn,a);Xa.subVectors(t,s);const d=Nn.dot(Xa),p=Fn.dot(Xa);if(p>=0&&d<=p)return i.copy(s);const m=d*c-l*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),i.copy(n).addScaledVector(Fn,o);const g=u*p-d*A;if(g<=0&&A-u>=0&&d-p>=0)return dc.subVectors(s,r),o=(A-u)/(A-u+(d-p)),i.copy(r).addScaledVector(dc,o);const f=1/(g+m+h);return a=m*f,o=h*f,i.copy(n).addScaledVector(Nn,a).addScaledVector(Fn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ot=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,fi):fi.fromBufferAttribute(r,s),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ys.copy(i.boundingBox)),ys.applyMatrix4(e.matrixWorld),this.union(ys)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),Es.subVectors(this.max,yr),Qn.subVectors(e.a,yr),On.subVectors(e.b,yr),Gn.subVectors(e.c,yr),Vi.subVectors(On,Qn),Hi.subVectors(Gn,On),on.subVectors(Qn,Gn);let t=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-on.z,on.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,on.z,0,-on.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-on.y,on.x,0];return!Za(t,Qn,On,Gn,Es)||(t=[1,0,0,0,1,0,0,0,1],!Za(t,Qn,On,Gn,Es))?!1:(xs.crossVectors(Vi,Hi),t=[xs.x,xs.y,xs.z],Za(t,Qn,On,Gn,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new w,new w,new w,new w,new w,new w,new w,new w],fi=new w,ys=new Ot,Qn=new w,On=new w,Gn=new w,Vi=new w,Hi=new w,on=new w,yr=new w,Es=new w,xs=new w,ln=new w;function Za(e,t,i,n,r){for(let s=0,a=e.length-3;s<=a;s+=3){ln.fromArray(e,s);const o=r.x*Math.abs(ln.x)+r.y*Math.abs(ln.y)+r.z*Math.abs(ln.z),l=t.dot(ln),c=i.dot(ln),u=n.dot(ln);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Pi=tp();function tp(){const e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function Kt(e){Math.abs(e)>65504&&ce("DataUtils.toHalfFloat(): Value out of range."),e=Ge(e,-65504,65504),Pi.floatView[0]=e;const t=Pi.uint32View[0],i=t>>23&511;return Pi.baseTable[i]+((t&8388607)>>Pi.shiftTable[i])}function Pr(e){const t=e>>10;return Pi.uint32View[0]=Pi.mantissaTable[Pi.offsetTable[t]+(e&1023)]+Pi.exponentTable[t],Pi.floatView[0]}var ip=class{static toHalfFloat(e){return Kt(e)}static fromHalfFloat(e){return Pr(e)}},Mt=new w,Is=new Z,np=0,ut=class extends gi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:np++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ba,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Is.fromBufferAttribute(this,t),Is.applyMatrix3(e),this.setXY(t,Is.x,Is.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ht(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ht(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ht(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ht(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ht(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),n=Je(n,this.array),r=Je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}},rp=class extends ut{constructor(e,t,i){super(new Int8Array(e),t,i)}},sp=class extends ut{constructor(e,t,i){super(new Uint8Array(e),t,i)}},ap=class extends ut{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}},op=class extends ut{constructor(e,t,i){super(new Int16Array(e),t,i)}},ml=class extends ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}},lp=class extends ut{constructor(e,t,i){super(new Int32Array(e),t,i)}},vl=class extends ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}},cp=class extends ut{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Pr(this.array[e*this.itemSize]);return this.normalized&&(t=Ht(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=Kt(t),this}getY(e){let t=Pr(this.array[e*this.itemSize+1]);return this.normalized&&(t=Ht(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=Kt(t),this}getZ(e){let t=Pr(this.array[e*this.itemSize+2]);return this.normalized&&(t=Ht(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=Kt(t),this}getW(e){let t=Pr(this.array[e*this.itemSize+3]);return this.normalized&&(t=Ht(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=Kt(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array)),this.array[e+0]=Kt(t),this.array[e+1]=Kt(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),n=Je(n,this.array)),this.array[e+0]=Kt(t),this.array[e+1]=Kt(i),this.array[e+2]=Kt(n),this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),i=Je(i,this.array),n=Je(n,this.array),r=Je(r,this.array)),this.array[e+0]=Kt(t),this.array[e+1]=Kt(i),this.array[e+2]=Kt(n),this.array[e+3]=Kt(r),this}},Ce=class extends ut{constructor(e,t,i){super(new Float32Array(e),t,i)}},hp=new Ot,Er=new w,$a=new w,Dt=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hp.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Er,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add($a)),this.expandByPoint(Er.copy(e.center).sub($a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},up=0,si=new He,ja=new lt,kn=new w,ei=new Ot,xr=new Ot,Tt=new w,Ke=class bu extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yf(t)?vl:ml)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,n=0){this.groups.push({start:t,count:i,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,i,n){return si.makeTranslation(t,i,n),this.applyMatrix4(si),this}scale(t,i,n){return si.makeScale(t,i,n),this.applyMatrix4(si),this}lookAt(t){return ja.lookAt(t),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kn).negate(),this.translate(kn.x,kn.y,kn.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ce(n,3))}else{const n=Math.min(t.length,i.count);for(let r=0;r<n;r++){const s=t[r];i.setXYZ(r,s.x,s.y,s.z||0)}t.length>i.count&&ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ot);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let n=0,r=i.length;n<r;n++){const s=i[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dt);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let s=0,a=i.length;s<a;s++){const o=i[s];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(ei.min,xr.min),ei.expandByPoint(Tt),Tt.addVectors(ei.max,xr.max),ei.expandByPoint(Tt)):(ei.expandByPoint(xr.min),ei.expandByPoint(xr.max))}ei.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Tt.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Tt));if(i)for(let s=0,a=i.length;s<a;s++){const o=i[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Tt.fromBufferAttribute(o,c),l&&(kn.fromBufferAttribute(t,c),Tt.add(kn)),r=Math.max(r,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=i.position,r=i.normal,s=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new w,l[y]=new w;const c=new w,u=new w,A=new w,h=new Z,d=new Z,p=new Z,m=new w,g=new w;function f(y,C,L){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,C),A.fromBufferAttribute(n,L),h.fromBufferAttribute(s,y),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,L),u.sub(c),A.sub(c),d.sub(h),p.sub(h);const b=1/(d.x*p.y-p.x*d.y);isFinite(b)&&(m.copy(u).multiplyScalar(p.y).addScaledVector(A,-d.y).multiplyScalar(b),g.copy(A).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(b),o[y].add(m),o[C].add(m),o[L].add(m),l[y].add(g),l[C].add(g),l[L].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,C=v.length;y<C;++y){const L=v[y],b=L.start,F=L.count;for(let H=b,U=b+F;H<U;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const E=new w,_=new w,S=new w,M=new w;function T(y){S.fromBufferAttribute(r,y),M.copy(S);const C=o[y];E.copy(C),E.sub(S.multiplyScalar(S.dot(C))).normalize(),_.crossVectors(M,C);const L=_.dot(l[y])<0?-1:1;a.setXYZW(y,E.x,E.y,E.z,L)}for(let y=0,C=v.length;y<C;++y){const L=v[y],b=L.start,F=L.count;for(let H=b,U=b+F;H<U;H+=3)T(t.getX(H+0)),T(t.getX(H+1)),T(t.getX(H+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ut(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new w,s=new w,a=new w,o=new w,l=new w,c=new w,u=new w,A=new w;if(t)for(let h=0,d=t.count;h<d;h+=3){const p=t.getX(h+0),m=t.getX(h+1),g=t.getX(h+2);r.fromBufferAttribute(i,p),s.fromBufferAttribute(i,m),a.fromBufferAttribute(i,g),u.subVectors(a,s),A.subVectors(r,s),u.cross(A),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=i.count;h<d;h+=3)r.fromBufferAttribute(i,h+0),s.fromBufferAttribute(i,h+1),a.fromBufferAttribute(i,h+2),u.subVectors(a,s),A.subVectors(r,s),u.cross(A),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,n=t.count;i<n;i++)Tt.fromBufferAttribute(t,i),Tt.normalize(),t.setXYZ(i,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,A=o.normalized,h=new c.constructor(l.length*u);let d=0,p=0;for(let m=0,g=l.length;m<g;m++){o.isInterleavedBufferAttribute?d=l[m]*o.data.stride+o.offset:d=l[m]*u;for(let f=0;f<u;f++)h[p++]=c[d++]}return new ut(h,u,A)}if(this.index===null)return ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new bu,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);i.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,A=c.length;u<A;u++){const h=c[u],d=t(h,n);l.push(d)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let A=0,h=c.length;A<h;A++){const d=c[A];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(i))}const s=t.morphAttributes;for(const c in s){const u=[],A=s[c];for(let h=0,d=A.length;h<d;h++)u.push(A[h].clone(i));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const A=a[c];this.addGroup(A.start,A.count,A.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ra=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ba,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},kt=new w,ts=class wu{constructor(t,i,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,n=this.data.count;i<n;i++)kt.fromBufferAttribute(this,i),kt.applyMatrix4(t),this.setXYZ(i,kt.x,kt.y,kt.z);return this}applyNormalMatrix(t){for(let i=0,n=this.count;i<n;i++)kt.fromBufferAttribute(this,i),kt.applyNormalMatrix(t),this.setXYZ(i,kt.x,kt.y,kt.z);return this}transformDirection(t){for(let i=0,n=this.count;i<n;i++)kt.fromBufferAttribute(this,i),kt.transformDirection(t),this.setXYZ(i,kt.x,kt.y,kt.z);return this}getComponent(t,i){let n=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(n=Ht(n,this.array)),n}setComponent(t,i,n){return this.normalized&&(n=Je(n,this.array)),this.data.array[t*this.data.stride+this.offset+i]=n,this}setX(t,i){return this.normalized&&(i=Je(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Je(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Je(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Je(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ht(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ht(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ht(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ht(i,this.array)),i}setXY(t,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=Je(i,this.array),n=Je(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=n,this}setXYZ(t,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Je(i,this.array),n=Je(n,this.array),r=Je(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,i,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=Je(i,this.array),n=Je(n,this.array),r=Je(r,this.array),s=Je(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){es("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)i.push(this.data.array[r+s])}return new ut(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new wu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){es("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)i.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ap=0,Gt=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ce(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(i.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(t){const r=n(e.textures),s=n(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},_l=class extends Gt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zn,Ir=new w,Vn=new w,Hn=new w,Wn=new Z,Cr=new Z,Tu=new He,Cs=new w,Mr=new w,Ms=new w,fc=new Z,eo=new Z,pc=new Z,Ru=class extends lt{constructor(e=new _l){if(super(),this.isSprite=!0,this.type="Sprite",zn===void 0){zn=new Ke;const t=new Ra(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);zn.setIndex([0,1,2,0,2,3]),zn.setAttribute("position",new ts(t,3,0,!1)),zn.setAttribute("uv",new ts(t,2,3,!1))}this.geometry=zn,this.material=e,this.center=new Z(.5,.5),this.count=1}raycast(e,t){e.camera===null&&we('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vn.setFromMatrixScale(this.matrixWorld),Tu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vn.multiplyScalar(-Hn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const s=this.center;Ss(Cs.set(-.5,-.5,0),Hn,s,Vn,n,r),Ss(Mr.set(.5,-.5,0),Hn,s,Vn,n,r),Ss(Ms.set(.5,.5,0),Hn,s,Vn,n,r),fc.set(0,0),eo.set(1,0),pc.set(1,1);let a=e.ray.intersectTriangle(Cs,Mr,Ms,!1,Ir);if(a===null&&(Ss(Mr.set(-.5,.5,0),Hn,s,Vn,n,r),eo.set(0,1),a=e.ray.intersectTriangle(Cs,Ms,Mr,!1,Ir),a===null))return;const o=e.ray.origin.distanceTo(Ir);o<e.near||o>e.far||t.push({distance:o,point:Ir.clone(),uv:Ji.getInterpolation(Ir,Cs,Mr,Ms,fc,eo,pc,new Z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ss(e,t,i,n,r,s){Wn.subVectors(e,i).addScalar(.5).multiply(n),r!==void 0?(Cr.x=s*Wn.x-r*Wn.y,Cr.y=r*Wn.x+s*Wn.y):Cr.copy(Wn),e.copy(t),e.x+=Cr.x,e.y+=Cr.y,e.applyMatrix4(Tu)}var Bs=new w,gc=new w,Du=class extends lt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,n=t.length;i<n;i++){const r=t[i];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const n=this.levels;let r;for(r=0;r<n.length&&!(t<n[r].distance);r++);return n.splice(r,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){const n=t.splice(i,1);return this.remove(n[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,n;for(i=1,n=t.length;i<n;i++){let r=t[i].distance;if(t[i].object.visible&&(r-=r*t[i].hysteresis),e<r)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){Bs.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Bs);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Bs.setFromMatrixPosition(e.matrixWorld),gc.setFromMatrixPosition(this.matrixWorld);const i=Bs.distanceTo(gc)/e.zoom;t[0].object.visible=!0;let n,r;for(n=1,r=t.length;n<r;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),i>=s)t[n-1].object.visible=!1,t[n].object.visible=!0;else break}for(this._currentLevel=n-1;n<r;n++)t[n].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let n=0,r=i.length;n<r;n++){const s=i[n];t.object.levels.push({object:s.object.uuid,distance:s.distance,hysteresis:s.hysteresis})}return t}},Ri=new w,to=new w,bs=new w,Wi=new w,io=new w,ws=new w,no=new w,Ar=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){to.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(to);const r=e.distanceTo(t)*.5,s=-this.direction.dot(bs),a=Wi.dot(this.direction),o=-Wi.dot(bs),l=Wi.lengthSq(),c=Math.abs(1-s*s);let u,A,h,d;if(c>0)if(u=s*o-a,A=s*a-o,d=r*c,u>=0)if(A>=-d)if(A<=d){const p=1/c;u*=p,A*=p,h=u*(u+s*A+2*a)+A*(s*u+A+2*o)+l}else A=r,u=Math.max(0,-(s*A+a)),h=-u*u+A*(A+2*o)+l;else A=-r,u=Math.max(0,-(s*A+a)),h=-u*u+A*(A+2*o)+l;else A<=-d?(u=Math.max(0,-(-s*r+a)),A=u>0?-r:Math.min(Math.max(-r,-o),r),h=-u*u+A*(A+2*o)+l):A<=d?(u=0,A=Math.min(Math.max(-r,-o),r),h=A*(A+2*o)+l):(u=Math.max(0,-(s*r+a)),A=u>0?r:Math.min(Math.max(-r,-o),r),h=-u*u+A*(A+2*o)+l);else A=s>0?-r:r,u=Math.max(0,-(s*A+a)),h=-u*u+A*(A+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(to).addScaledVector(bs,A),h}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),n=Ri.dot(Ri)-i*i,r=e.radius*e.radius;if(n>r)return null;const s=Math.sqrt(r-n),a=i-s,o=i+s;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,A=this.origin;return l>=0?(i=(e.min.x-A.x)*l,n=(e.max.x-A.x)*l):(i=(e.max.x-A.x)*l,n=(e.min.x-A.x)*l),c>=0?(r=(e.min.y-A.y)*c,s=(e.max.y-A.y)*c):(r=(e.max.y-A.y)*c,s=(e.min.y-A.y)*c),i>s||r>n||((r>i||isNaN(i))&&(i=r),(s<n||isNaN(n))&&(n=s),u>=0?(a=(e.min.z-A.z)*u,o=(e.max.z-A.z)*u):(a=(e.max.z-A.z)*u,o=(e.min.z-A.z)*u),i>o||a>n)||((a>i||i!==i)&&(i=a),(o<n||n!==n)&&(n=o),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,i,n,r){io.subVectors(t,e),ws.subVectors(i,e),no.crossVectors(io,ws);let s=this.direction.dot(no),a;if(s>0){if(n)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Wi.subVectors(this.origin,e);const o=a*this.direction.dot(ws.crossVectors(Wi,ws));if(o<0)return null;const l=a*this.direction.dot(io.cross(Wi));if(l<0||o+l>s)return null;const c=-a*Wi.dot(no);return c<0?null:this.at(c/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rn=class extends Gt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mc=new He,cn=new Ar,Ts=new Dt,vc=new w,Rs=new w,Ds=new w,Ls=new w,ro=new w,Ps=new w,_c=new w,Us=new w,St=class extends lt{constructor(e=new Ke,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(r&&a){Ps.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],u=r[o];c!==0&&(ro.fromBufferAttribute(u,e),s?Ps.addScaledVector(ro,c):Ps.addScaledVector(ro.sub(t),c))}t.add(Ps)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere),Ts.applyMatrix4(r),cn.copy(e.ray).recast(e.near),!(Ts.containsPoint(cn.origin)===!1&&(cn.intersectSphere(Ts,vc)===null||cn.origin.distanceToSquared(vc)>(e.far-e.near)**2))&&(mc.copy(r).invert(),cn.copy(e.ray).applyMatrix4(mc),!(i.boundingBox!==null&&cn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cn)))}_computeIntersections(e,t,i){let n;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,A=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(s))for(let d=0,p=A.length;d<p;d++){const m=A[d],g=s[m.materialIndex],f=Math.max(m.start,h.start),v=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let E=f,_=v;E<_;E+=3){const S=a.getX(E),M=a.getX(E+1),T=a.getX(E+2);n=Ns(this,g,e,i,l,c,u,S,M,T),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const d=Math.max(0,h.start),p=Math.min(a.count,h.start+h.count);for(let m=d,g=p;m<g;m+=3){const f=a.getX(m),v=a.getX(m+1),E=a.getX(m+2);n=Ns(this,s,e,i,l,c,u,f,v,E),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(s))for(let d=0,p=A.length;d<p;d++){const m=A[d],g=s[m.materialIndex],f=Math.max(m.start,h.start),v=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let E=f,_=v;E<_;E+=3){const S=E,M=E+1,T=E+2;n=Ns(this,g,e,i,l,c,u,S,M,T),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const d=Math.max(0,h.start),p=Math.min(o.count,h.start+h.count);for(let m=d,g=p;m<g;m+=3){const f=m,v=m+1,E=m+2;n=Ns(this,s,e,i,l,c,u,f,v,E),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function dp(e,t,i,n,r,s,a,o){let l;if(t.side===1?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===0,o),l===null)return null;Us.copy(o),Us.applyMatrix4(e.matrixWorld);const c=i.ray.origin.distanceTo(Us);return c<i.near||c>i.far?null:{distance:c,point:Us.clone(),object:e}}function Ns(e,t,i,n,r,s,a,o,l,c){e.getVertexPosition(o,Rs),e.getVertexPosition(l,Ds),e.getVertexPosition(c,Ls);const u=dp(e,t,i,n,Rs,Ds,Ls,_c);if(u){const A=new w;Ji.getBarycoord(_c,Rs,Ds,Ls,A),r&&(u.uv=Ji.getInterpolatedAttribute(r,o,l,c,A,new Z)),s&&(u.uv1=Ji.getInterpolatedAttribute(s,o,l,c,A,new Z)),a&&(u.normal=Ji.getInterpolatedAttribute(a,o,l,c,A,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new w,materialIndex:0};Ji.getNormal(Rs,Ds,Ls,h.normal),u.face=h,u.barycoord=A}return u}var Sr=new ht,yc=new ht,Ec=new ht,fp=new ht,xc=new He,Fs=new w,so=new Dt,Ic=new He,ao=new Ar,Lu=class extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xh,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ot),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Fs),this.boundingBox.expandByPoint(Fs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Fs),this.boundingSphere.expandByPoint(Fs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(n),e.ray.intersectsSphere(so)!==!1&&(Ic.copy(n).invert(),ao.copy(e.ray).applyMatrix4(Ic),!(this.boundingBox!==null&&ao.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ao)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;yc.fromBufferAttribute(n.attributes.skinIndex,e),Ec.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(Sr.copy(t),t.set(0,0,0,0)):(Sr.set(...t,1),t.set(0,0,0)),Sr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const s=Ec.getComponent(r);if(s!==0){const a=yc.getComponent(r);xc.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(fp.copy(Sr).applyMatrix4(xc),s)}}return t.isVector4&&(t.w=Sr.w),t.applyMatrix4(this.bindMatrixInverse)}},yl=class extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ai=class extends wt{constructor(e=null,t=1,i=1,n,r,s,a,o,l=Ct,c=Ct,u,A){super(null,s,a,o,l,c,n,r,u,A),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Cc=new He,pp=new He,Pu=class Uu{constructor(t=[],i=[]){this.uuid=ii(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){const n=new He;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,i=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:pp;Cc.multiplyMatrices(o,i[s]),Cc.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Uu(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const i=new Float32Array(t*t*4);i.set(this.boneMatrices);const n=new ai(i,t,t,Qt,ti);return n.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=n,this}getBoneByName(t){for(let i=0,n=this.bones.length;i<n;i++){const r=this.bones[i];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let n=0,r=t.bones.length;n<r;n++){const s=t.bones[n];let a=i[s];a===void 0&&(ce("Skeleton: No bone found with UUID:",s),a=new yl),this.bones.push(a),this.boneInverses.push(new He().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const i=this.bones,n=this.boneInverses;for(let r=0,s=i.length;r<s;r++){const a=i[r];t.bones.push(a.uuid);const o=n[r];t.boneInverses.push(o.toArray())}return t}},cr=class extends ut{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qn=new He,Mc=new He,Qs=[],Sc=new Ot,gp=new He,Br=new St,br=new Dt,Nu=class extends St{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cr(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,gp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ot),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qn),Sc.copy(e.boundingBox).applyMatrix4(qn),this.boundingBox.union(Sc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qn),br.copy(e.boundingSphere).applyMatrix4(qn),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=e*(i.length+1)+1;for(let s=0;s<i.length;s++)i[s]=n[r+s]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(i),e.ray.intersectsSphere(br)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,qn),Mc.multiplyMatrices(i,qn),Br.matrixWorld=Mc,Br.raycast(e,Qs);for(let s=0,a=Qs.length;s<a;s++){const o=Qs[s];o.instanceId=r,o.object=this,t.push(o)}Qs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new ai(new Float32Array(n*this.count),n,this.count,Ki,ti));const r=this.morphTexture.source.data.data;let s=0;for(let l=0;l<i.length;l++)s+=i[l];const a=this.geometry.morphTargetsRelative?1:1-s,o=n*e;return r[o]=a,r.set(i,o+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},oo=new w,mp=new w,vp=new We,Yi=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=oo.subVectors(i,t).cross(mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const n=e.delta(oo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vp.getNormalMatrix(e),n=this.coplanarPoint(oo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},hn=new Dt,_p=new Z(.5,.5),Os=new w,dr=class{constructor(e=new Yi,t=new Yi,i=new Yi,n=new Yi,r=new Yi,s=new Yi){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ji,i=!1){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],A=r[6],h=r[7],d=r[8],p=r[9],m=r[10],g=r[11],f=r[12],v=r[13],E=r[14],_=r[15];if(n[0].setComponents(l-s,h-c,g-d,_-f).normalize(),n[1].setComponents(l+s,h+c,g+d,_+f).normalize(),n[2].setComponents(l+a,h+u,g+p,_+v).normalize(),n[3].setComponents(l-a,h-u,g-p,_-v).normalize(),i)n[4].setComponents(o,A,m,E).normalize(),n[5].setComponents(l-o,h-A,g-m,_-E).normalize();else if(n[4].setComponents(l-o,h-A,g-m,_-E).normalize(),t===2e3)n[5].setComponents(l+o,h+A,g+m,_+E).normalize();else if(t===2001)n[5].setComponents(o,A,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hn)}intersectsSprite(e){return hn.center.set(0,0,0),hn.radius=.7071067811865476+_p.distanceTo(e.center),hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(hn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Os.x=n.normal.x>0?e.max.x:e.min.x,Os.y=n.normal.y>0?e.max.y:e.min.y,Os.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yi=new He,Ei=new dr,Fu=class Qu{constructor(){this.coordinateSystem=ji}intersectsObject(t,i){if(!i.isArrayCamera||i.cameras.length===0)return!1;for(let n=0;n<i.cameras.length;n++){const r=i.cameras[n];if(yi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Ei.setFromProjectionMatrix(yi,r.coordinateSystem,r.reversedDepth),Ei.intersectsObject(t))return!0}return!1}intersectsSprite(t,i){if(!i||!i.cameras||i.cameras.length===0)return!1;for(let n=0;n<i.cameras.length;n++){const r=i.cameras[n];if(yi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Ei.setFromProjectionMatrix(yi,r.coordinateSystem,r.reversedDepth),Ei.intersectsSprite(t))return!0}return!1}intersectsSphere(t,i){if(!i||!i.cameras||i.cameras.length===0)return!1;for(let n=0;n<i.cameras.length;n++){const r=i.cameras[n];if(yi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Ei.setFromProjectionMatrix(yi,r.coordinateSystem,r.reversedDepth),Ei.intersectsSphere(t))return!0}return!1}intersectsBox(t,i){if(!i||!i.cameras||i.cameras.length===0)return!1;for(let n=0;n<i.cameras.length;n++){const r=i.cameras[n];if(yi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Ei.setFromProjectionMatrix(yi,r.coordinateSystem,r.reversedDepth),Ei.intersectsBox(t))return!0}return!1}containsPoint(t,i){if(!i||!i.cameras||i.cameras.length===0)return!1;for(let n=0;n<i.cameras.length;n++){const r=i.cameras[n];if(yi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),Ei.setFromProjectionMatrix(yi,r.coordinateSystem,r.reversedDepth),Ei.containsPoint(t))return!0}return!1}clone(){return new Qu}};function lo(e,t){return e-t}function yp(e,t){return e.z-t.z}function Ep(e,t){return t.z-e.z}var xp=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){const r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];s.push(a),this.index++,a.start=e,a.count=t,a.z=i,a.index=n}reset(){this.list.length=0,this.index=0}},Jt=new He,Ip=new ye(1,1,1),Bc=new dr,Cp=new Fu,Gs=new Ot,un=new Dt,wr=new w,bc=new w,Mp=new w,co=new xp,Nt=new St,ks=[];function Sp(e,t,i=0){const n=t.itemSize;if(e.isInterleavedBufferAttribute||e.array.constructor!==t.array.constructor){const r=e.count;for(let s=0;s<r;s++)for(let a=0;a<n;a++)t.setComponent(s+i,a,e.getComponent(s,a))}else t.array.set(e.array,i*n);t.needsUpdate=!0}function An(e,t){if(e.constructor!==t.constructor){const i=Math.min(e.length,t.length);for(let n=0;n<i;n++)t[n]=e[n]}else{const i=Math.min(e.length,t.length);t.set(new e.constructor(e.buffer,0,i))}}var Ou=class extends St{constructor(e,t,i=t*2,n){super(new Ke,n),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new ai(new Float32Array(e*e*4),e,e,Qt,ti);this._matricesTexture=t}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new ai(new Uint32Array(e*e),e,e,Ca,Fi);this._indirectTexture=t}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new ai(new Float32Array(e*e*4).fill(1),e,e,Qt,ti);t.colorSpace=nt.workingColorSpace,this._colorsTexture=t}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,n=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const{array:s,itemSize:a,normalized:o}=e.getAttribute(r),l=new ut(new s.constructor(i*a),a,o);t.setAttribute(r,l)}if(e.getIndex()!==null){const r=i>65535?new Uint32Array(n):new Uint16Array(n);t.setIndex(new ut(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const n=e.getAttribute(i),r=t.getAttribute(i);if(n.itemSize!==r.itemSize||n.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ot);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const r=t[i].geometryIndex;this.getMatrixAt(i,Jt),this.getBoundingBoxAt(r,Gs).applyMatrix4(Jt),e.union(Gs)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const r=t[i].geometryIndex;this.getMatrixAt(i,Jt),this.getBoundingSphereAt(r,un).applyMatrix4(Jt),e.union(un)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const t={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(lo),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=t):(i=this._instanceInfo.length,this._instanceInfo.push(t));const n=this._matricesTexture;Jt.identity().toArray(n.image.data,i*16),n.needsUpdate=!0;const r=this._colorsTexture;return r&&(Ip.toArray(r.image.data,i*4),r.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);const n={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;n.vertexStart=this._nextVertexStart,n.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const s=e.getIndex();if(s!==null&&(n.indexStart=this._nextIndexStart,n.reservedIndexCount=i===-1?s.count:i),n.indexStart!==-1&&n.indexStart+n.reservedIndexCount>this._maxIndexCount||n.vertexStart+n.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let a;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(lo),a=this._availableGeometryIds.shift(),r[a]=n):(a=this._geometryCount,this._geometryCount++,r.push(n)),this.setGeometryAt(a,e),this._nextIndexStart=n.indexStart+n.reservedIndexCount,this._nextVertexStart=n.vertexStart+n.reservedVertexCount,a}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,n=i.getIndex()!==null,r=i.getIndex(),s=t.getIndex(),a=this._geometryInfo[e];if(n&&s.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const o=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const c in i.attributes){const u=t.getAttribute(c),A=i.getAttribute(c);Sp(u,A,o);const h=u.itemSize;for(let d=u.count,p=l;d<p;d++){const m=o+d;for(let g=0;g<h;g++)A.setComponent(m,g,0)}A.needsUpdate=!0,A.addUpdateRange(o*h,l*h)}if(n){const c=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let A=0;A<s.count;A++)r.setX(c+A,o+s.getX(A));for(let A=s.count,h=u;A<h;A++)r.setX(c+A,o);r.needsUpdate=!0,r.addUpdateRange(c,a.reservedIndexCount)}return a.start=n?a.indexStart:a.vertexStart,a.count=n?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const i=this._instanceInfo;for(let n=0,r=i.length;n<r;n++)i[n].active&&i[n].geometryIndex===e&&this.deleteInstance(n);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const i=this._geometryInfo,n=i.map((s,a)=>a).sort((s,a)=>i[s].vertexStart-i[a].vertexStart),r=this.geometry;for(let s=0,a=i.length;s<a;s++){const o=i[n[s]];if(o.active!==!1){if(r.index!==null){if(o.indexStart!==t){const{indexStart:l,vertexStart:c,reservedIndexCount:u}=o,A=r.index,h=A.array,d=e-c;for(let p=l;p<l+u;p++)h[p]=h[p]+d;A.array.copyWithin(t,l,l+u),A.addUpdateRange(t,u),A.needsUpdate=!0,o.indexStart=t}t+=o.reservedIndexCount}if(o.vertexStart!==e){const{vertexStart:l,reservedVertexCount:c}=o,u=r.attributes;for(const A in u){const h=u[A],{array:d,itemSize:p}=h;d.copyWithin(e*p,l*p,(l+c)*p),h.addUpdateRange(e*p,c*p),h.needsUpdate=!0}o.vertexStart=e}e+=o.reservedVertexCount,o.start=r.index?o.indexStart:o.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingBox===null){const r=new Ot,s=i.index,a=i.attributes.position;for(let o=n.start,l=n.start+n.count;o<l;o++){let c=o;s&&(c=s.getX(c)),r.expandByPoint(wr.fromBufferAttribute(a,c))}n.boundingBox=r}return t.copy(n.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingSphere===null){const r=new Dt;this.getBoundingBoxAt(e,Gs),Gs.getCenter(r.center);const s=i.index,a=i.attributes.position;let o=0;for(let l=n.start,c=n.start+n.count;l<c;l++){let u=l;s&&(u=s.getX(u)),wr.fromBufferAttribute(a,u),o=Math.max(o,r.center.distanceToSquared(wr))}r.radius=Math.sqrt(o),n.boundingSphere=r}return t.copy(n.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const i=this._matricesTexture,n=this._matricesTexture.image.data;return t.toArray(n,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){const t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(lo);t[t.length-1]===i.length-1;)i.pop(),t.pop();if(e<i.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const n=new Int32Array(e),r=new Int32Array(e);An(this._multiDrawCounts,n),An(this._multiDrawStarts,r),this._multiDrawCounts=n,this._multiDrawStarts=r,this._maxInstanceCount=e;const s=this._indirectTexture,a=this._matricesTexture,o=this._colorsTexture;s.dispose(),this._initIndirectTexture(),An(s.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),An(a.image.data,this._matricesTexture.image.data),o&&(o.dispose(),this._initColorsTexture(),An(o.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const i=[...this._geometryInfo].filter(s=>s.active);if(Math.max(...i.map(s=>s.vertexStart+s.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(s=>s.indexStart+s.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const n=this.geometry;n.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Ke,this._initializeGeometry(n));const r=this.geometry;n.index&&An(n.index.array,r.index.array);for(const s in n.attributes)An(n.attributes[s].array,r.attributes[s].array)}raycast(e,t){const i=this._instanceInfo,n=this._geometryInfo,r=this.matrixWorld,s=this.geometry;Nt.material=this.material,Nt.geometry.index=s.index,Nt.geometry.attributes=s.attributes,Nt.geometry.boundingBox===null&&(Nt.geometry.boundingBox=new Ot),Nt.geometry.boundingSphere===null&&(Nt.geometry.boundingSphere=new Dt);for(let a=0,o=i.length;a<o;a++){if(!i[a].visible||!i[a].active)continue;const l=i[a].geometryIndex,c=n[l];Nt.geometry.setDrawRange(c.start,c.count),this.getMatrixAt(a,Nt.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Nt.geometry.boundingBox),this.getBoundingSphereAt(l,Nt.geometry.boundingSphere),Nt.raycast(e,ks);for(let u=0,A=ks.length;u<A;u++){const h=ks[u];h.object=this,h.batchId=a,t.push(h)}ks.length=0}Nt.material=null,Nt.geometry.index=null,Nt.geometry.attributes={},Nt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,i,n,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const s=n.getIndex();let a=s===null?1:s.array.BYTES_PER_ELEMENT,o=1;r.wireframe&&(o=2,a=n.attributes.position.count>65535?4:2);const l=this._instanceInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,A=this._geometryInfo,h=this.perObjectFrustumCulled,d=this._indirectTexture,p=d.image.data,m=i.isArrayCamera?Cp:Bc;h&&!i.isArrayCamera&&(Jt.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),Bc.setFromProjectionMatrix(Jt,i.coordinateSystem,i.reversedDepth));let g=0;if(this.sortObjects){Jt.copy(this.matrixWorld).invert(),wr.setFromMatrixPosition(i.matrixWorld).applyMatrix4(Jt),bc.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(Jt);for(let E=0,_=l.length;E<_;E++)if(l[E].visible&&l[E].active){const S=l[E].geometryIndex;this.getMatrixAt(E,Jt),this.getBoundingSphereAt(S,un).applyMatrix4(Jt);let M=!1;if(h&&(M=!m.intersectsSphere(un,i)),!M){const T=A[S],y=Mp.subVectors(un.center,wr).dot(bc);co.push(T.start,T.count,y,E)}}const f=co.list,v=this.customSort;v===null?f.sort(r.transparent?Ep:yp):v.call(this,f,i);for(let E=0,_=f.length;E<_;E++){const S=f[E];c[g]=S.start*a*o,u[g]=S.count*o,p[g]=S.index,g++}co.reset()}else for(let f=0,v=l.length;f<v;f++)if(l[f].visible&&l[f].active){const E=l[f].geometryIndex;let _=!1;if(h&&(this.getMatrixAt(f,Jt),this.getBoundingSphereAt(E,un).applyMatrix4(Jt),_=!m.intersectsSphere(un,i)),!_){const S=A[E];c[g]=S.start*a*o,u[g]=S.count*o,p[g]=f,g++}}d.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,i,n,r,s){this.onBeforeRender(e,null,n,r,s)}},qt=class extends Gt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},va=new w,_a=new w,wc=new He,Tr=new Ar,zs=new Dt,ho=new w,Tc=new w,tn=class extends lt{constructor(e=new Ke,t=new qt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)va.fromBufferAttribute(t,n-1),_a.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=va.distanceTo(_a);e.setAttribute("lineDistance",new Ce(i,1))}else ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(n),zs.radius+=r,e.ray.intersectsSphere(zs)===!1)return;wc.copy(n).invert(),Tr.copy(e.ray).applyMatrix4(wc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){const A=Math.max(0,s.start),h=Math.min(c.count,s.start+s.count);for(let d=A,p=h-1;d<p;d+=l){const m=c.getX(d),g=c.getX(d+1),f=Vs(this,e,Tr,o,m,g,d);f&&t.push(f)}if(this.isLineLoop){const d=c.getX(h-1),p=c.getX(A),m=Vs(this,e,Tr,o,d,p,h-1);m&&t.push(m)}}else{const A=Math.max(0,s.start),h=Math.min(u.count,s.start+s.count);for(let d=A,p=h-1;d<p;d+=l){const m=Vs(this,e,Tr,o,d,d+1,d);m&&t.push(m)}if(this.isLineLoop){const d=Vs(this,e,Tr,o,h-1,A,h-1);d&&t.push(d)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}};function Vs(e,t,i,n,r,s,a){const o=e.geometry.attributes.position;if(va.fromBufferAttribute(o,r),_a.fromBufferAttribute(o,s),i.distanceSqToSegment(va,_a,ho,Tc)>n)return;ho.applyMatrix4(e.matrixWorld);const l=t.ray.origin.distanceTo(ho);if(!(l<t.near||l>t.far))return{distance:l,point:Tc.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:e}}var Rc=new w,Dc=new w,Si=class extends tn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Rc.fromBufferAttribute(t,n),Dc.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Rc.distanceTo(Dc);e.setAttribute("lineDistance",new Ce(i,1))}else ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Gu=class extends tn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},El=class extends Gt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lc=new He,No=new Ar,Hs=new Dt,Ws=new w,ku=class extends lt{constructor(e=new Ke,t=new El){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere),Hs.applyMatrix4(n),Hs.radius+=r,e.ray.intersectsSphere(Hs)===!1)return;Lc.copy(n).invert(),No.copy(e.ray).applyMatrix4(Lc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=i.index,c=i.attributes.position;if(l!==null){const u=Math.max(0,s.start),A=Math.min(l.count,s.start+s.count);for(let h=u,d=A;h<d;h++){const p=l.getX(h);Ws.fromBufferAttribute(c,p),Pc(Ws,p,o,n,e,t,this)}}else{const u=Math.max(0,s.start),A=Math.min(c.count,s.start+s.count);for(let h=u,d=A;h<d;h++)Ws.fromBufferAttribute(c,h),Pc(Ws,h,o,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}};function Pc(e,t,i,n,r,s,a){const o=No.distanceSqToPoint(e);if(o<i){const l=new w;No.closestPointToPoint(e,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var zu=class extends wt{constructor(e,t,i,n,r=gt,s=gt,a,o,l){super(e,t,i,n,r,s,a,o,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const c=this;function u(){c.needsUpdate=!0,c._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},Bp=class extends zu{constructor(e,t,i,n,r,s,a,o){super({},e,t,i,n,r,s,a,o),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},bp=class extends wt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Ct,this.minFilter=Ct,this.generateMipmaps=!1,this.needsUpdate=!0}},fr=class extends wt{constructor(e,t,i,n,r,s,a,o,l,c,u,A){super(null,s,a,o,l,c,n,r,u,A),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Vu=class extends fr{constructor(e,t,i,n,r,s){super(e,t,i,r,s),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=$t,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Hu=class extends fr{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,301),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},hs=class extends wt{constructor(e=[],t=301,i,n,r,s,a,o,l,c){super(e,t,i,n,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wp=class extends wt{constructor(e,t,i,n,r,s,a,o,l){super(e,t,i,n,r,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tp=class extends wt{constructor(e,t,i,n,r,s,a,o,l){super(e,t,i,n,r,s,a,o,l),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const c=e?e.parentNode:null;c!==null&&"requestPaint"in c&&(c.onpaint=()=>{this.needsUpdate=!0},c.requestPaint())}dispose(){const e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}},Sn=class extends wt{constructor(e,t,i=Fi,n,r,s,a=Ct,o=Ct,l,c=or,u=1){if(c!==1026&&c!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},n,r,s,a,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Wu=class extends Sn{constructor(e,t=Fi,i=301,n,r,s=Ct,a=Ct,o,l=or){const c={width:e,height:e,depth:1},u=[c,c,c,c,c,c];super(e,e,t,i,n,r,s,a,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xl=class extends wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},us=class qu extends Ke{constructor(t=1,i=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],A=[];let h=0,d=0;p("z","y","x",-1,-1,n,i,t,a,s,0),p("z","y","x",1,-1,n,i,-t,a,s,1),p("x","z","y",1,1,t,n,i,r,a,2),p("x","z","y",1,-1,t,n,-i,r,a,3),p("x","y","z",1,-1,t,i,n,r,s,4),p("x","y","z",-1,-1,t,i,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(A,2));function p(m,g,f,v,E,_,S,M,T,y,C){const L=_/T,b=S/y,F=_/2,H=S/2,U=M/2,k=T+1,G=y+1;let Q=0,Y=0;const ee=new w;for(let ie=0;ie<G;ie++){const me=ie*b-H;for(let Ie=0;Ie<k;Ie++)ee[m]=(Ie*L-F)*v,ee[g]=me*E,ee[f]=U,c.push(ee.x,ee.y,ee.z),ee[m]=0,ee[g]=0,ee[f]=M>0?1:-1,u.push(ee.x,ee.y,ee.z),A.push(Ie/T),A.push(1-ie/y),Q+=1}for(let ie=0;ie<y;ie++)for(let me=0;me<T;me++){const Ie=h+me+k*ie,Xe=h+me+k*(ie+1),Ze=h+(me+1)+k*(ie+1),X=h+(me+1)+k*ie;l.push(Ie,Xe,X),l.push(Xe,Ze,X),Y+=6}o.addGroup(d,Y,C),d+=Y,h+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Xu=class Yu extends Ke{constructor(t=1,i=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:n,radialSegments:r,heightSegments:s},i=Math.max(0,i),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],u=i/2,A=Math.PI/2*t,h=i,d=2*A+h,p=n*2+s,m=r+1,g=new w,f=new w;for(let v=0;v<=p;v++){let E=0,_=0,S=0,M=0;if(v<=n){const C=v/n,L=C*Math.PI/2;_=-u-t*Math.cos(L),S=t*Math.sin(L),M=-t*Math.cos(L),E=C*A}else if(v<=n+s){const C=(v-n)/s;_=-u+C*i,S=t,M=0,E=A+C*h}else{const C=(v-n-s)/n,L=C*Math.PI/2;_=u+t*Math.sin(L),S=t*Math.cos(L),M=t*Math.sin(L),E=A+h+C*A}const T=Math.max(0,Math.min(1,E/d));let y=0;v===0?y=.5/r:v===p&&(y=-.5/r);for(let C=0;C<=r;C++){const L=C/r,b=L*Math.PI*2,F=Math.sin(b),H=Math.cos(b);f.x=-S*H,f.y=_,f.z=S*F,o.push(f.x,f.y,f.z),g.set(-S*H,M,S*F),g.normalize(),l.push(g.x,g.y,g.z),c.push(L+y,T)}if(v>0){const C=(v-1)*m;for(let L=0;L<r;L++){const b=C+L,F=C+L+1,H=v*m+L,U=v*m+L+1;a.push(b,F,H),a.push(F,U,H)}}}this.setIndex(a),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yu(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ju=class Ku extends Ke{constructor(t=1,i=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:n,thetaLength:r},i=Math.max(3,i);const s=[],a=[],o=[],l=[],c=new w,u=new Z;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let A=0,h=3;A<=i;A++,h+=3){const d=n+A/i*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let A=1;A<=i;A++)s.push(A,A+1,0);this.setIndex(s),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(o,3)),this.setAttribute("uv",new Ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ku(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Il=class Zu extends Ke{constructor(t=1,i=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],A=[],h=[],d=[];let p=0;const m=[],g=n/2;let f=0;v(),a===!1&&(t>0&&E(!0),i>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Ce(A,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(d,2));function v(){const _=new w,S=new w;let M=0;const T=(i-t)/n;for(let y=0;y<=s;y++){const C=[],L=y/s,b=L*(i-t)+t;for(let F=0;F<=r;F++){const H=F/r,U=H*l+o,k=Math.sin(U),G=Math.cos(U);S.x=b*k,S.y=-L*n+g,S.z=b*G,A.push(S.x,S.y,S.z),_.set(k,T,G).normalize(),h.push(_.x,_.y,_.z),d.push(H,1-L),C.push(p++)}m.push(C)}for(let y=0;y<r;y++)for(let C=0;C<s;C++){const L=m[C][y],b=m[C+1][y],F=m[C+1][y+1],H=m[C][y+1];(t>0||C!==0)&&(u.push(L,b,H),M+=3),(i>0||C!==s-1)&&(u.push(b,F,H),M+=3)}c.addGroup(f,M,0),f+=M}function E(_){const S=p,M=new Z,T=new w;let y=0;const C=_===!0?t:i,L=_===!0?1:-1;for(let F=1;F<=r;F++)A.push(0,g*L,0),h.push(0,L,0),d.push(.5,.5),p++;const b=p;for(let F=0;F<=r;F++){const H=F/r*l+o,U=Math.cos(H),k=Math.sin(H);T.x=C*k,T.y=g*L,T.z=C*U,A.push(T.x,T.y,T.z),h.push(0,L,0),M.x=U*.5+.5,M.y=k*.5*L+.5,d.push(M.x,M.y),p++}for(let F=0;F<r;F++){const H=S+F,U=b+F;_===!0?u.push(U,U+1,H):u.push(U+1,U,H),y+=3}c.addGroup(f,y,_===!0?1:2),f+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cl=class $u extends Il{constructor(t=1,i=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,i,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new $u(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pr=class ju extends Ke{constructor(t=[],i=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new Ce(s,3)),this.setAttribute("normal",new Ce(s.slice(),3)),this.setAttribute("uv",new Ce(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const E=new w,_=new w,S=new w;for(let M=0;M<i.length;M+=3)d(i[M+0],E),d(i[M+1],_),d(i[M+2],S),l(E,_,S,v)}function l(v,E,_,S){const M=S+1,T=[];for(let y=0;y<=M;y++){T[y]=[];const C=v.clone().lerp(_,y/M),L=E.clone().lerp(_,y/M),b=M-y;for(let F=0;F<=b;F++)F===0&&y===M?T[y][F]=C:T[y][F]=C.clone().lerp(L,F/b)}for(let y=0;y<M;y++)for(let C=0;C<2*(M-y)-1;C++){const L=Math.floor(C/2);C%2===0?(h(T[y][L+1]),h(T[y+1][L]),h(T[y][L])):(h(T[y][L+1]),h(T[y+1][L+1]),h(T[y+1][L]))}}function c(v){const E=new w;for(let _=0;_<s.length;_+=3)E.x=s[_+0],E.y=s[_+1],E.z=s[_+2],E.normalize().multiplyScalar(v),s[_+0]=E.x,s[_+1]=E.y,s[_+2]=E.z}function u(){const v=new w;for(let E=0;E<s.length;E+=3){v.x=s[E+0],v.y=s[E+1],v.z=s[E+2];const _=g(v)/2/Math.PI+.5,S=f(v)/Math.PI+.5;a.push(_,1-S)}p(),A()}function A(){for(let v=0;v<a.length;v+=6){const E=a[v+0],_=a[v+2],S=a[v+4];Math.max(E,_,S)>.9&&Math.min(E,_,S)<.1&&(E<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function d(v,E){const _=v*3;E.x=t[_+0],E.y=t[_+1],E.z=t[_+2]}function p(){const v=new w,E=new w,_=new w,S=new w,M=new Z,T=new Z,y=new Z;for(let C=0,L=0;C<s.length;C+=9,L+=6){v.set(s[C+0],s[C+1],s[C+2]),E.set(s[C+3],s[C+4],s[C+5]),_.set(s[C+6],s[C+7],s[C+8]),M.set(a[L+0],a[L+1]),T.set(a[L+2],a[L+3]),y.set(a[L+4],a[L+5]),S.copy(v).add(E).add(_).divideScalar(3);const b=g(S);m(M,L+0,v,b),m(T,L+2,E,b),m(y,L+4,_,b)}}function m(v,E,_,S){S<0&&v.x===1&&(a[E]=v.x-1),_.x===0&&_.z===0&&(a[E]=S/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ju(t.vertices,t.indices,t.radius,t.detail)}},eA=class tA extends pr{constructor(t=1,i=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(s,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new tA(t.radius,t.detail)}},qs=new w,Xs=new w,uo=new w,Ys=new Ji,iA=class extends Ke{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),n=Math.cos(Cn*t),r=e.getIndex(),s=e.getAttribute("position"),a=r?r.count:s.count,o=[0,0,0],l=["a","b","c"],c=new Array(3),u={},A=[];for(let h=0;h<a;h+=3){r?(o[0]=r.getX(h),o[1]=r.getX(h+1),o[2]=r.getX(h+2)):(o[0]=h,o[1]=h+1,o[2]=h+2);const{a:d,b:p,c:m}=Ys;if(d.fromBufferAttribute(s,o[0]),p.fromBufferAttribute(s,o[1]),m.fromBufferAttribute(s,o[2]),Ys.getNormal(uo),c[0]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,c[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,c[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let g=0;g<3;g++){const f=(g+1)%3,v=c[g],E=c[f],_=Ys[l[g]],S=Ys[l[f]],M=`${v}_${E}`,T=`${E}_${v}`;T in u&&u[T]?(uo.dot(u[T].normal)<=n&&(A.push(_.x,_.y,_.z),A.push(S.x,S.y,S.z)),u[T]=null):M in u||(u[M]={index0:o[g],index1:o[f],normal:uo.clone()})}}for(const h in u)if(u[h]){const{index0:d,index1:p}=u[h];qs.fromBufferAttribute(s,d),Xs.fromBufferAttribute(s,p),A.push(qs.x,qs.y,qs.z),A.push(Xs.x,Xs.y,Xs.z)}this.setAttribute("position",new Ce(A,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ce("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let n=0;const r=i.length;let s;t?s=t:s=e*i[r-1];let a=0,o=r-1,l;for(;a<=o;)if(n=Math.floor(a+(o-a)/2),l=i[n]-s,l<0)a=n+1;else if(l>0)o=n-1;else{o=n;break}if(n=o,i[n]===s)return n/(r-1);const c=i[n],u=i[n+1]-c,A=(s-c)/u;return(n+A)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const s=this.getPoint(n),a=this.getPoint(r),o=t||(s.isVector2?new Z:new w);return o.copy(a).sub(s).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new w,n=[],r=[],s=[],a=new w,o=new He;for(let h=0;h<=e;h++){const d=h/e;n[h]=this.getTangentAt(d,new w)}r[0]=new w,s[0]=new w;let l=Number.MAX_VALUE;const c=Math.abs(n[0].x),u=Math.abs(n[0].y),A=Math.abs(n[0].z);c<=l&&(l=c,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),A<=l&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),s[0].crossVectors(n[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),s[h]=s[h-1].clone(),a.crossVectors(n[h-1],n[h]),a.length()>Number.EPSILON){a.normalize();const d=Math.acos(Ge(n[h-1].dot(n[h]),-1,1));r[h].applyMatrix4(o.makeRotationAxis(a,d))}s[h].crossVectors(n[h],r[h])}if(t===!0){let h=Math.acos(Ge(r[0].dot(r[e]),-1,1));h/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let d=1;d<=e;d++)r[d].applyMatrix4(o.makeRotationAxis(n[d],h*d)),s[d].crossVectors(n[d],r[d])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Da=class extends mi{constructor(e=0,t=0,i=1,n=1,r=0,s=Math.PI*2,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(e,t=new Z){const i=t,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(s?r=0:r=n),this.aClockwise===!0&&!s&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+e*r;let o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),A=o-this.aX,h=l-this.aY;o=A*c-h*u+this.aX,l=A*u+h*c+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},nA=class extends Da{constructor(e,t,i,n,r,s){super(e,t,i,i,n,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Ml(){let e=0,t=0,i=0,n=0;function r(s,a,o,l){e=s,t=o,i=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,A){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+A)+(l-o)/A;h*=u,d*=u,r(a,o,h,d)},calc:function(s){const a=s*s,o=a*s;return e+t*s+i*a+n*o}}}var Uc=new w,Nc=new w,Ao=new Ml,fo=new Ml,po=new Ml,rA=class extends mi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new w){const i=t,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e;let a=Math.floor(s),o=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:o===0&&a===r-1&&(a=r-2,o=1);let l,c;this.closed||a>0?l=n[(a-1)%r]:(Nc.subVectors(n[0],n[1]).add(n[0]),l=Nc);const u=n[a%r],A=n[(a+1)%r];if(this.closed||a+2<r?c=n[(a+2)%r]:(Uc.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=Uc),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let d=Math.pow(l.distanceToSquared(u),h),p=Math.pow(u.distanceToSquared(A),h),m=Math.pow(A.distanceToSquared(c),h);p<1e-4&&(p=1),d<1e-4&&(d=p),m<1e-4&&(m=p),Ao.initNonuniformCatmullRom(l.x,u.x,A.x,c.x,d,p,m),fo.initNonuniformCatmullRom(l.y,u.y,A.y,c.y,d,p,m),po.initNonuniformCatmullRom(l.z,u.z,A.z,c.z,d,p,m)}else this.curveType==="catmullrom"&&(Ao.initCatmullRom(l.x,u.x,A.x,c.x,this.tension),fo.initCatmullRom(l.y,u.y,A.y,c.y,this.tension),po.initCatmullRom(l.z,u.z,A.z,c.z,this.tension));return i.set(Ao.calc(o),fo.calc(o),po.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new w().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Fc(e,t,i,n,r){const s=(n-t)*.5,a=(r-i)*.5,o=e*e,l=e*o;return(2*i-2*n+s+a)*l+(-3*i+3*n-2*s-a)*o+s*e+i}function Rp(e,t){const i=1-e;return i*i*t}function Dp(e,t){return 2*(1-e)*e*t}function Lp(e,t){return e*e*t}function Or(e,t,i,n){return Rp(e,t)+Dp(e,i)+Lp(e,n)}function Pp(e,t){const i=1-e;return i*i*i*t}function Up(e,t){const i=1-e;return 3*i*i*e*t}function Np(e,t){return 3*(1-e)*e*e*t}function Fp(e,t){return e*e*e*t}function Gr(e,t,i,n,r){return Pp(e,t)+Up(e,i)+Np(e,n)+Fp(e,r)}var Sl=class extends mi{constructor(e=new Z,t=new Z,i=new Z,n=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Z){const i=t,n=this.v0,r=this.v1,s=this.v2,a=this.v3;return i.set(Gr(e,n.x,r.x,s.x,a.x),Gr(e,n.y,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sA=class extends mi{constructor(e=new w,t=new w,i=new w,n=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new w){const i=t,n=this.v0,r=this.v1,s=this.v2,a=this.v3;return i.set(Gr(e,n.x,r.x,s.x,a.x),Gr(e,n.y,r.y,s.y,a.y),Gr(e,n.z,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bl=class extends mi{constructor(e=new Z,t=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aA=class extends mi{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bl=class extends mi{constructor(e=new Z,t=new Z,i=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Z){const i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(Or(e,n.x,r.x,s.x),Or(e,n.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wl=class extends mi{constructor(e=new w,t=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){const i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(Or(e,n.x,r.x,s.x),Or(e,n.y,r.y,s.y),Or(e,n.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tl=class extends mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){const i=t,n=this.points,r=(n.length-1)*e,s=Math.floor(r),a=r-s,o=n[s===0?s:s-1],l=n[s],c=n[s>n.length-2?n.length-1:s+1],u=n[s>n.length-3?n.length-1:s+2];return i.set(Fc(a,o.x,l.x,c.x,u.x),Fc(a,o.y,l.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new Z().fromArray(n))}return this}},ya=Object.freeze({__proto__:null,ArcCurve:nA,CatmullRomCurve3:rA,CubicBezierCurve:Sl,CubicBezierCurve3:sA,EllipseCurve:Da,LineCurve:Bl,LineCurve3:aA,QuadraticBezierCurve:bl,QuadraticBezierCurve3:wl,SplineCurve:Tl}),oA=class extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ya[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const s=n[r]-i,a=this.curves[r],o=a.getLength(),l=o===0?0:1-s/o;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const s=r[n],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,o=s.getPoints(a);for(let l=0;l<o.length;l++){const c=o[l];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new ya[n.type]().fromJSON(n))}return this}},Ea=class extends oA{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Bl(this.currentPoint.clone(),new Z(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new bl(this.currentPoint.clone(),new Z(e,t),new Z(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,s){const a=new Sl(this.currentPoint.clone(),new Z(e,t),new Z(i,n),new Z(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(e){const t=new Tl([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,s){const a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+a,t+o,i,n,r,s),this}absarc(e,t,i,n,r,s){return this.absellipse(e,t,i,i,n,r,s),this}ellipse(e,t,i,n,r,s,a,o){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,n,r,s,a,o),this}absellipse(e,t,i,n,r,s,a,o){const l=new Da(e,t,i,n,r,s,a,o);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mn=class extends Ea{constructor(e){super(e),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new Ea().fromJSON(n))}return this}};function Qp(e,t,i=2){const n=t&&t.length,r=n?t[0]*i:e.length;let s=lA(e,0,r,i,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=Vp(e,t,s,i)),e.length>80*i){o=e[0],l=e[1];let u=o,A=l;for(let h=i;h<r;h+=i){const d=e[h],p=e[h+1];d<o&&(o=d),p<l&&(l=p),d>u&&(u=d),p>A&&(A=p)}c=Math.max(u-o,A-l),c=c!==0?32767/c:0}return is(s,a,i,o,l,c,0),a}function lA(e,t,i,n,r){let s;if(r===eg(e,t,i,n)>0)for(let a=t;a<i;a+=n)s=Qc(a/n|0,e[a],e[a+1],s);else for(let a=i-n;a>=t;a-=n)s=Qc(a/n|0,e[a],e[a+1],s);return s&&hr(s,s.next)&&(rs(s),s=s.next),s}function Bn(e,t){if(!e)return e;t||(t=e);let i=e,n;do if(n=!1,!i.steiner&&(hr(i,i.next)||vt(i.prev,i,i.next)===0)){if(rs(i),i=t=i.prev,i===i.next)break;n=!0}else i=i.next;while(n||i!==t);return t}function is(e,t,i,n,r,s,a){if(!e)return;!a&&s&&Yp(e,n,r,s);let o=e;for(;e.prev!==e.next;){const l=e.prev,c=e.next;if(s?Gp(e,n,r,s):Op(e)){t.push(l.i,e.i,c.i),rs(e),e=c.next,o=c.next;continue}if(e=c,e===o){a?a===1?(e=kp(Bn(e),t),is(e,t,i,n,r,s,2)):a===2&&zp(e,t,i,n,r,s):is(Bn(e),t,i,n,r,s,1);break}}}function Op(e){const t=e.prev,i=e,n=e.next;if(vt(t,i,n)>=0)return!1;const r=t.x,s=i.x,a=n.x,o=t.y,l=i.y,c=n.y,u=Math.min(r,s,a),A=Math.min(o,l,c),h=Math.max(r,s,a),d=Math.max(o,l,c);let p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=h&&p.y>=A&&p.y<=d&&Ur(r,o,s,l,a,c,p.x,p.y)&&vt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Gp(e,t,i,n){const r=e.prev,s=e,a=e.next;if(vt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,A=s.y,h=a.y,d=Math.min(o,l,c),p=Math.min(u,A,h),m=Math.max(o,l,c),g=Math.max(u,A,h),f=Fo(d,p,t,i,n),v=Fo(m,g,t,i,n);let E=e.prevZ,_=e.nextZ;for(;E&&E.z>=f&&_&&_.z<=v;){if(E.x>=d&&E.x<=m&&E.y>=p&&E.y<=g&&E!==r&&E!==a&&Ur(o,u,l,A,c,h,E.x,E.y)&&vt(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=d&&_.x<=m&&_.y>=p&&_.y<=g&&_!==r&&_!==a&&Ur(o,u,l,A,c,h,_.x,_.y)&&vt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=f;){if(E.x>=d&&E.x<=m&&E.y>=p&&E.y<=g&&E!==r&&E!==a&&Ur(o,u,l,A,c,h,E.x,E.y)&&vt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=m&&_.y>=p&&_.y<=g&&_!==r&&_!==a&&Ur(o,u,l,A,c,h,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function kp(e,t){let i=e;do{const n=i.prev,r=i.next.next;!hr(n,r)&&hA(n,i,i.next,r)&&ns(n,r)&&ns(r,n)&&(t.push(n.i,i.i,r.i),rs(i),rs(i.next),i=e=r),i=i.next}while(i!==e);return Bn(i)}function zp(e,t,i,n,r,s){let a=e;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Zp(a,o)){let l=uA(a,o);a=Bn(a,a.next),l=Bn(l,l.next),is(a,t,i,n,r,s,0),is(l,t,i,n,r,s,0);return}o=o.next}a=a.next}while(a!==e)}function Vp(e,t,i,n){const r=[];for(let s=0,a=t.length;s<a;s++){const o=lA(e,t[s]*n,s<a-1?t[s+1]*n:e.length,n,!1);o===o.next&&(o.steiner=!0),r.push(Kp(o))}r.sort(Hp);for(let s=0;s<r.length;s++)i=Wp(r[s],i);return i}function Hp(e,t){let i=e.x-t.x;return i===0&&(i=e.y-t.y,i===0&&(i=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),i}function Wp(e,t){const i=qp(e,t);if(!i)return t;const n=uA(i,e);return Bn(n,n.next),Bn(i,i.next)}function qp(e,t){let i=t;const n=e.x,r=e.y;let s=-1/0,a;if(hr(e,i))return i;do{if(hr(e,i.next))return i.next;if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){const A=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(A<=n&&A>s&&(s=A,a=i.x<i.next.x?i:i.next,A===n))return a}i=i.next}while(i!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;i=a;do{if(n>=i.x&&i.x>=l&&n!==i.x&&cA(r<c?n:s,r,l,c,r<c?s:n,r,i.x,i.y)){const A=Math.abs(r-i.y)/(n-i.x);ns(i,e)&&(A<u||A===u&&(i.x>a.x||i.x===a.x&&Xp(a,i)))&&(a=i,u=A)}i=i.next}while(i!==o);return a}function Xp(e,t){return vt(e.prev,e,t.prev)<0&&vt(t.next,e,e.next)<0}function Yp(e,t,i,n){let r=e;do r.z===0&&(r.z=Fo(r.x,r.y,t,i,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,Jp(r)}function Jp(e){let t,i=1;do{let n=e,r;e=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<i&&(o++,a=a.nextZ,!!a);c++);let l=i;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:e=r,r.prevZ=s,s=r;n=a}s.nextZ=null,i*=2}while(t>1);return e}function Fo(e,t,i,n,r){return e=(e-i)*r|0,t=(t-n)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Kp(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function cA(e,t,i,n,r,s,a,o){return(r-a)*(t-o)>=(e-a)*(s-o)&&(e-a)*(n-o)>=(i-a)*(t-o)&&(i-a)*(s-o)>=(r-a)*(n-o)}function Ur(e,t,i,n,r,s,a,o){return!(e===a&&t===o)&&cA(e,t,i,n,r,s,a,o)}function Zp(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!$p(e,t)&&(ns(e,t)&&ns(t,e)&&jp(e,t)&&(vt(e.prev,e,t.prev)||vt(e,t.prev,t))||hr(e,t)&&vt(e.prev,e,e.next)>0&&vt(t.prev,t,t.next)>0)}function vt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function hr(e,t){return e.x===t.x&&e.y===t.y}function hA(e,t,i,n){const r=Ks(vt(e,t,i)),s=Ks(vt(e,t,n)),a=Ks(vt(i,n,e)),o=Ks(vt(i,n,t));return!!(r!==s&&a!==o||r===0&&Js(e,i,t)||s===0&&Js(e,n,t)||a===0&&Js(i,e,n)||o===0&&Js(i,t,n))}function Js(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Ks(e){return e>0?1:e<0?-1:0}function $p(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&hA(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function ns(e,t){return vt(e.prev,e,e.next)<0?vt(e,t,e.next)>=0&&vt(e,e.prev,t)>=0:vt(e,t,e.prev)<0||vt(e,e.next,t)<0}function jp(e,t){let i=e,n=!1;const r=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next;while(i!==e);return n}function uA(e,t){const i=Qo(e.i,e.x,e.y),n=Qo(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function Qc(e,t,i,n){const r=Qo(e,t,i);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function rs(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Qo(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function eg(e,t,i,n){let r=0;for(let s=t,a=i-n;s<i;s+=n)r+=(e[a]-e[s])*(e[s+1]+e[a+1]),a=s;return r}var tg=class{static triangulate(e,t,i=2){return Qp(e,t,i)}},Ui=class AA{static area(t){const i=t.length;let n=0;for(let r=i-1,s=0;s<i;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return AA.area(t)<0}static triangulateShape(t,i){const n=[],r=[],s=[];Oc(t),Gc(n,t);let a=t.length;i.forEach(Oc);for(let l=0;l<i.length;l++)r.push(a),a+=i[l].length,Gc(n,i[l]);const o=tg.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Oc(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Gc(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var dA=class fA extends Ke{constructor(t=new Mn([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Ce(r,3)),this.setAttribute("uv",new Ce(s,2)),this.computeVertexNormals();function a(o){const l=[],c=i.curveSegments!==void 0?i.curveSegments:12,u=i.steps!==void 0?i.steps:1,A=i.depth!==void 0?i.depth:1;let h=i.bevelEnabled!==void 0?i.bevelEnabled:!0,d=i.bevelThickness!==void 0?i.bevelThickness:.2,p=i.bevelSize!==void 0?i.bevelSize:d-.1,m=i.bevelOffset!==void 0?i.bevelOffset:0,g=i.bevelSegments!==void 0?i.bevelSegments:3;const f=i.extrudePath,v=i.UVGenerator!==void 0?i.UVGenerator:ig;let E,_=!1,S,M,T,y;if(f){E=f.getSpacedPoints(u),_=!0,h=!1;const K=f.isCatmullRomCurve3?f.closed:!1;S=f.computeFrenetFrames(u,K),M=new w,T=new w,y=new w}h||(g=0,d=0,p=0,m=0);const C=o.extractPoints(c);let L=C.shape;const b=C.holes;if(!Ui.isClockWise(L)){L=L.reverse();for(let K=0,ae=b.length;K<ae;K++){const se=b[K];Ui.isClockWise(se)&&(b[K]=se.reverse())}}function F(K){const se=10000000000000001e-36;let xe=K[0];for(let ve=1;ve<=K.length;ve++){const Ne=ve%K.length,R=K[Ne],et=R.x-xe.x,Re=R.y-xe.y,Qe=et*et+Re*Re,oe=Math.max(Math.abs(R.x),Math.abs(R.y),Math.abs(xe.x),Math.abs(xe.y));if(Qe<=se*oe*oe){K.splice(Ne,1),ve--;continue}xe=R}}F(L),b.forEach(F);const H=b.length,U=L;for(let K=0;K<H;K++){const ae=b[K];L=L.concat(ae)}function k(K,ae,se){return ae||we("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(ae,se)}const G=L.length;function Q(K,ae,se){let xe,ve,Ne;const R=K.x-ae.x,et=K.y-ae.y,Re=se.x-K.x,Qe=se.y-K.y,oe=R*R+et*et,At=R*Qe-et*Re;if(Math.abs(At)>Number.EPSILON){const Me=Math.sqrt(oe),B=Math.sqrt(Re*Re+Qe*Qe),x=ae.x-et/Me,O=ae.y+R/Me,J=se.x-Qe/B,$=se.y+Re/B,ne=((J-x)*Qe-($-O)*Re)/(R*Qe-et*Re);xe=x+R*ne-K.x,ve=O+et*ne-K.y;const de=xe*xe+ve*ve;if(de<=2)return new Z(xe,ve);Ne=Math.sqrt(de/2)}else{let Me=!1;R>Number.EPSILON?Re>Number.EPSILON&&(Me=!0):R<-Number.EPSILON?Re<-Number.EPSILON&&(Me=!0):Math.sign(et)===Math.sign(Qe)&&(Me=!0),Me?(xe=-et,ve=R,Ne=Math.sqrt(oe)):(xe=R,ve=et,Ne=Math.sqrt(oe/2))}return new Z(xe/Ne,ve/Ne)}const Y=[];for(let K=0,ae=U.length,se=ae-1,xe=K+1;K<ae;K++,se++,xe++)se===ae&&(se=0),xe===ae&&(xe=0),Y[K]=Q(U[K],U[se],U[xe]);const ee=[];let ie,me=Y.concat();for(let K=0,ae=H;K<ae;K++){const se=b[K];ie=[];for(let xe=0,ve=se.length,Ne=ve-1,R=xe+1;xe<ve;xe++,Ne++,R++)Ne===ve&&(Ne=0),R===ve&&(R=0),ie[xe]=Q(se[xe],se[Ne],se[R]);ee.push(ie),me=me.concat(ie)}let Ie;if(g===0)Ie=Ui.triangulateShape(U,b);else{const K=[],ae=[];for(let se=0;se<g;se++){const xe=se/g,ve=d*Math.cos(xe*Math.PI/2),Ne=p*Math.sin(xe*Math.PI/2)+m;for(let R=0,et=U.length;R<et;R++){const Re=k(U[R],Y[R],Ne);ue(Re.x,Re.y,-ve),xe===0&&K.push(Re)}for(let R=0,et=H;R<et;R++){const Re=b[R];ie=ee[R];const Qe=[];for(let oe=0,At=Re.length;oe<At;oe++){const Me=k(Re[oe],ie[oe],Ne);ue(Me.x,Me.y,-ve),xe===0&&Qe.push(Me)}xe===0&&ae.push(Qe)}}Ie=Ui.triangulateShape(K,ae)}const Xe=Ie.length,Ze=p+m;for(let K=0;K<G;K++){const ae=h?k(L[K],me[K],Ze):L[K];_?(T.copy(S.normals[0]).multiplyScalar(ae.x),M.copy(S.binormals[0]).multiplyScalar(ae.y),y.copy(E[0]).add(T).add(M),ue(y.x,y.y,y.z)):ue(ae.x,ae.y,0)}for(let K=1;K<=u;K++)for(let ae=0;ae<G;ae++){const se=h?k(L[ae],me[ae],Ze):L[ae];_?(T.copy(S.normals[K]).multiplyScalar(se.x),M.copy(S.binormals[K]).multiplyScalar(se.y),y.copy(E[K]).add(T).add(M),ue(y.x,y.y,y.z)):ue(se.x,se.y,A/u*K)}for(let K=g-1;K>=0;K--){const ae=K/g,se=d*Math.cos(ae*Math.PI/2),xe=p*Math.sin(ae*Math.PI/2)+m;for(let ve=0,Ne=U.length;ve<Ne;ve++){const R=k(U[ve],Y[ve],xe);ue(R.x,R.y,A+se)}for(let ve=0,Ne=b.length;ve<Ne;ve++){const R=b[ve];ie=ee[ve];for(let et=0,Re=R.length;et<Re;et++){const Qe=k(R[et],ie[et],xe);_?ue(Qe.x,Qe.y+E[u-1].y,E[u-1].x+se):ue(Qe.x,Qe.y,A+se)}}}X(),Ae();function X(){const K=r.length/3;if(h){let ae=0,se=G*ae;for(let xe=0;xe<Xe;xe++){const ve=Ie[xe];Ue(ve[2]+se,ve[1]+se,ve[0]+se)}ae=u+g*2,se=G*ae;for(let xe=0;xe<Xe;xe++){const ve=Ie[xe];Ue(ve[0]+se,ve[1]+se,ve[2]+se)}}else{for(let ae=0;ae<Xe;ae++){const se=Ie[ae];Ue(se[2],se[1],se[0])}for(let ae=0;ae<Xe;ae++){const se=Ie[ae];Ue(se[0]+G*u,se[1]+G*u,se[2]+G*u)}}n.addGroup(K,r.length/3-K,0)}function Ae(){const K=r.length/3;let ae=0;Te(U,ae),ae+=U.length;for(let se=0,xe=b.length;se<xe;se++){const ve=b[se];Te(ve,ae),ae+=ve.length}n.addGroup(K,r.length/3-K,1)}function Te(K,ae){let se=K.length;for(;--se>=0;){const xe=se;let ve=se-1;ve<0&&(ve=K.length-1);for(let Ne=0,R=u+g*2;Ne<R;Ne++){const et=G*Ne,Re=G*(Ne+1);ke(ae+xe+et,ae+ve+et,ae+ve+Re,ae+xe+Re)}}}function ue(K,ae,se){l.push(K),l.push(ae),l.push(se)}function Ue(K,ae,se){De(K),De(ae),De(se);const xe=r.length/3,ve=v.generateTopUV(n,r,xe-3,xe-2,xe-1);je(ve[0]),je(ve[1]),je(ve[2])}function ke(K,ae,se,xe){De(K),De(ae),De(xe),De(ae),De(se),De(xe);const ve=r.length/3,Ne=v.generateSideWallUV(n,r,ve-6,ve-3,ve-2,ve-1);je(Ne[0]),je(Ne[1]),je(Ne[3]),je(Ne[1]),je(Ne[2]),je(Ne[3])}function De(K){r.push(l[K*3+0]),r.push(l[K*3+1]),r.push(l[K*3+2])}function je(K){s.push(K.x),s.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,n=this.parameters.options;return ng(i,n,t)}static fromJSON(t,i){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=i[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new ya[r.type]().fromJSON(r)),new fA(n,t.options)}},ig={generateTopUV:function(e,t,i,n,r){const s=t[i*3],a=t[i*3+1],o=t[n*3],l=t[n*3+1],c=t[r*3],u=t[r*3+1];return[new Z(s,a),new Z(o,l),new Z(c,u)]},generateSideWallUV:function(e,t,i,n,r,s){const a=t[i*3],o=t[i*3+1],l=t[i*3+2],c=t[n*3],u=t[n*3+1],A=t[n*3+2],h=t[r*3],d=t[r*3+1],p=t[r*3+2],m=t[s*3],g=t[s*3+1],f=t[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Z(a,1-l),new Z(c,1-A),new Z(h,1-p),new Z(m,1-f)]:[new Z(o,1-l),new Z(u,1-A),new Z(d,1-p),new Z(g,1-f)]}};function ng(e,t,i){if(i.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){const s=e[n];i.shapes.push(s.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var pA=class gA extends pr{constructor(t=1,i=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new gA(t.radius,t.detail)}},mA=class vA extends Ke{constructor(t=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],i=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:n,phiLength:r},i=Math.floor(i),r=Ge(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/i,A=new w,h=new Z,d=new w,p=new w,m=new w;let g=0,f=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,d.x=f*1,d.y=-g,d.z=f*0,m.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(m.x,m.y,m.z);break;default:g=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,d.x=f*1,d.y=-g,d.z=f*0,p.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),l.push(d.x,d.y,d.z),m.copy(p)}for(let v=0;v<=i;v++){const E=n+v*u*r,_=Math.sin(E),S=Math.cos(E);for(let M=0;M<=t.length-1;M++){A.x=t[M].x*_,A.y=t[M].y,A.z=t[M].x*S,a.push(A.x,A.y,A.z),h.x=v/i,h.y=M/(t.length-1),o.push(h.x,h.y);const T=l[3*M+0]*_,y=l[3*M+1],C=l[3*M+0]*S;c.push(T,y,C)}}for(let v=0;v<i;v++)for(let E=0;E<t.length-1;E++){const _=E+v*t.length,S=_,M=_+t.length,T=_+t.length+1,y=_+1;s.push(S,M,y),s.push(T,y,M)}this.setIndex(s),this.setAttribute("position",new Ce(a,3)),this.setAttribute("uv",new Ce(o,2)),this.setAttribute("normal",new Ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vA(t.points,t.segments,t.phiStart,t.phiLength)}},Rl=class _A extends pr{constructor(t=1,i=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new _A(t.radius,t.detail)}},La=class yA extends Ke{constructor(t=1,i=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:n,heightSegments:r};const s=t/2,a=i/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,A=t/o,h=i/l,d=[],p=[],m=[],g=[];for(let f=0;f<u;f++){const v=f*h-a;for(let E=0;E<c;E++){const _=E*A-s;p.push(_,-v,0),m.push(0,0,1),g.push(E/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const E=v+c*f,_=v+c*(f+1),S=v+1+c*(f+1),M=v+1+c*f;d.push(E,_,M),d.push(_,S,M)}this.setIndex(d),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(m,3)),this.setAttribute("uv",new Ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yA(t.width,t.height,t.widthSegments,t.heightSegments)}},EA=class xA extends Ke{constructor(t=.5,i=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let A=t;const h=(i-t)/r,d=new w,p=new Z;for(let m=0;m<=r;m++){for(let g=0;g<=n;g++){const f=s+g/n*a;d.x=A*Math.cos(f),d.y=A*Math.sin(f),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/i+1)/2,p.y=(d.y/i+1)/2,u.push(p.x,p.y)}A+=h}for(let m=0;m<r;m++){const g=m*(n+1);for(let f=0;f<n;f++){const v=f+g,E=v,_=v+n+1,S=v+n+2,M=v+1;o.push(E,_,M),o.push(_,S,M)}}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xA(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},IA=class CA extends Ke{constructor(t=new Mn([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(s,3)),this.setAttribute("uv",new Ce(a,2));function c(u){const A=r.length/3,h=u.extractPoints(i);let d=h.shape;const p=h.holes;Ui.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,f=p.length;g<f;g++){const v=p[g];Ui.isClockWise(v)===!0&&(p[g]=v.reverse())}const m=Ui.triangulateShape(d,p);for(let g=0,f=p.length;g<f;g++){const v=p[g];d=d.concat(v)}for(let g=0,f=d.length;g<f;g++){const v=d[g];r.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let g=0,f=m.length;g<f;g++){const v=m[g],E=v[0]+A,_=v[1]+A,S=v[2]+A;n.push(E,_,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes;return rg(i,t)}static fromJSON(t,i){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=i[t.shapes[r]];n.push(a)}return new CA(n,t.curveSegments)}};function rg(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,n=e.length;i<n;i++){const r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Dl=class MA extends Ke{constructor(t=1,i=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},i=Math.max(3,Math.floor(i)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],A=new w,h=new w,d=[],p=[],m=[],g=[];for(let f=0;f<=n;f++){const v=[],E=f/n;let _=0;f===0&&a===0?_=.5/i:f===n&&l===Math.PI&&(_=-.5/i);for(let S=0;S<=i;S++){const M=S/i;A.x=-t*Math.cos(r+M*s)*Math.sin(a+E*o),A.y=t*Math.cos(a+E*o),A.z=t*Math.sin(r+M*s)*Math.sin(a+E*o),p.push(A.x,A.y,A.z),h.copy(A).normalize(),m.push(h.x,h.y,h.z),g.push(M+_,1-E),v.push(c++)}u.push(v)}for(let f=0;f<n;f++)for(let v=0;v<i;v++){const E=u[f][v+1],_=u[f][v],S=u[f+1][v],M=u[f+1][v+1];(f!==0||a>0)&&d.push(E,_,M),(f!==n-1||l<Math.PI)&&d.push(_,S,M)}this.setIndex(d),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(m,3)),this.setAttribute("uv",new Ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new MA(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},SA=class BA extends pr{constructor(t=1,i=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new BA(t.radius,t.detail)}},bA=class wA extends Ke{constructor(t=1,i=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],u=[],A=[],h=new w,d=new w,p=new w;for(let m=0;m<=n;m++){const g=a+m/n*o;for(let f=0;f<=r;f++){const v=f/r*s;d.x=(t+i*Math.cos(g))*Math.cos(v),d.y=(t+i*Math.cos(g))*Math.sin(v),d.z=i*Math.sin(g),c.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),p.subVectors(d,h).normalize(),u.push(p.x,p.y,p.z),A.push(f/r),A.push(m/n)}}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){const f=(r+1)*m+g-1,v=(r+1)*(m-1)+g-1,E=(r+1)*(m-1)+g,_=(r+1)*m+g;l.push(f,v,_),l.push(v,E,_)}this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(A,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wA(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},TA=class RA extends Ke{constructor(t=1,i=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);const o=[],l=[],c=[],u=[],A=new w,h=new w,d=new w,p=new w,m=new w,g=new w,f=new w;for(let E=0;E<=n;++E){const _=E/n*s*Math.PI*2;v(_,s,a,t,d),v(_+.01,s,a,t,p),g.subVectors(p,d),f.addVectors(p,d),m.crossVectors(g,f),f.crossVectors(m,g),m.normalize(),f.normalize();for(let S=0;S<=r;++S){const M=S/r*Math.PI*2,T=-i*Math.cos(M),y=i*Math.sin(M);A.x=d.x+(T*f.x+y*m.x),A.y=d.y+(T*f.y+y*m.y),A.z=d.z+(T*f.z+y*m.z),l.push(A.x,A.y,A.z),h.subVectors(A,d).normalize(),c.push(h.x,h.y,h.z),u.push(E/n),u.push(S/r)}}for(let E=1;E<=n;E++)for(let _=1;_<=r;_++){const S=(r+1)*(E-1)+(_-1),M=(r+1)*E+(_-1),T=(r+1)*E+_,y=(r+1)*(E-1)+_;o.push(S,M,y),o.push(M,T,y)}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(u,2));function v(E,_,S,M,T){const y=Math.cos(E),C=Math.sin(E),L=S/_*E,b=Math.cos(L);T.x=M*(2+b)*.5*y,T.y=M*(2+b)*C*.5,T.z=M*Math.sin(L)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new RA(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},DA=class LA extends Ke{constructor(t=new wl(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),i=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(i,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new w,l=new w,c=new Z;let u=new w;const A=[],h=[],d=[],p=[];m(),this.setIndex(p),this.setAttribute("position",new Ce(A,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(d,2));function m(){for(let E=0;E<i;E++)g(E);g(s===!1?i:0),v(),f()}function g(E){u=t.getPointAt(E/i,u);const _=a.normals[E],S=a.binormals[E];for(let M=0;M<=r;M++){const T=M/r*Math.PI*2,y=Math.sin(T),C=-Math.cos(T);l.x=C*_.x+y*S.x,l.y=C*_.y+y*S.y,l.z=C*_.z+y*S.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,A.push(o.x,o.y,o.z)}}function f(){for(let E=1;E<=i;E++)for(let _=1;_<=r;_++){const S=(r+1)*(E-1)+(_-1),M=(r+1)*E+(_-1),T=(r+1)*E+_,y=(r+1)*(E-1)+_;p.push(S,M,y),p.push(M,T,y)}}function v(){for(let E=0;E<=i;E++)for(let _=0;_<=r;_++)c.x=E/i,c.y=_/r,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new LA(new ya[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},PA=class extends Ke{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,n=new w,r=new w;if(e.index!==null){const s=e.attributes.position,a=e.index;let o=e.groups;o.length===0&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,c=o.length;l<c;++l){const u=o[l],A=u.start,h=u.count;for(let d=A,p=A+h;d<p;d+=3)for(let m=0;m<3;m++){const g=a.getX(d+m),f=a.getX(d+(m+1)%3);n.fromBufferAttribute(s,g),r.fromBufferAttribute(s,f),kc(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{const s=e.attributes.position;for(let a=0,o=s.count/3;a<o;a++)for(let l=0;l<3;l++){const c=3*a+l,u=3*a+(l+1)%3;n.fromBufferAttribute(s,c),r.fromBufferAttribute(s,u),kc(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ce(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function kc(e,t,i){const n=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(n)===!0||i.has(r)===!0?!1:(i.add(n),i.add(r),!0)}var zc=Object.freeze({__proto__:null,BoxGeometry:us,CapsuleGeometry:Xu,CircleGeometry:Ju,ConeGeometry:Cl,CylinderGeometry:Il,DodecahedronGeometry:eA,EdgesGeometry:iA,ExtrudeGeometry:dA,IcosahedronGeometry:pA,LatheGeometry:mA,OctahedronGeometry:Rl,PlaneGeometry:La,PolyhedronGeometry:pr,RingGeometry:EA,ShapeGeometry:IA,SphereGeometry:Dl,TetrahedronGeometry:SA,TorusGeometry:bA,TorusKnotGeometry:TA,TubeGeometry:DA,WireframeGeometry:PA}),UA=class extends Gt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function ur(e){const t={};for(const i in e){t[i]={};for(const n in e[i]){const r=e[i][n];if(Vc(r))r.isRenderTargetTexture?(ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null):t[i][n]=r.clone();else if(Array.isArray(r))if(Vc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[i][n]=s}else t[i][n]=r.slice();else t[i][n]=r}}return t}function Vt(e){const t={};for(let i=0;i<e.length;i++){const n=ur(e[i]);for(const r in n)t[r]=n[r]}return t}function Vc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function sg(e){const t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function NA(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:nt.workingColorSpace}var FA={clone:ur,merge:Vt},ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,li=class extends Gt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ag,this.fragmentShader=og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=sg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ll=class extends li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pl=class extends Gt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},QA=class extends Pl{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},OA=class extends Gt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},GA=class extends Gt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},kA=class extends Gt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},zA=class extends Gt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ul=class extends Gt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nl=class extends Gt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},VA=class extends Gt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ye(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}},HA=class extends qt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function In(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function WA(e){function t(r,s){return e[r]-e[s]}const i=e.length,n=new Array(i);for(let r=0;r!==i;++r)n[r]=r;return n.sort(t),n}function Oo(e,t,i){const n=e.length,r=new e.constructor(n);for(let s=0,a=0;a!==n;++s){const o=i[s]*t;for(let l=0;l!==t;++l)r[a++]=e[o+l]}return r}function Fl(e,t,i,n){let r=1,s=e[0];for(;s!==void 0&&s[n]===void 0;)s=e[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),i.push(...a)),s=e[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(i,i.length)),s=e[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),i.push(a)),s=e[r++];while(s!==void 0)}function lg(e,t,i,n,r=30){const s=e.clone();s.name=t;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),A=[],h=[];for(let d=0;d<c.times.length;++d){const p=c.times[d]*r;if(!(p<i||p>=n)){A.push(c.times[d]);for(let m=0;m<u;++m)h.push(c.values[d*u+m])}}A.length!==0&&(c.times=In(A,c.times.constructor),c.values=In(h,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function cg(e,t=0,i=e,n=30){n<=0&&(n=30);const r=i.tracks.length,s=t/n;for(let a=0;a<r;++a){const o=i.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=e.tracks.find(function(f){return f.name===o.name&&f.ValueTypeName===l});if(c===void 0)continue;let u=0;const A=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=A/3);let h=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);const p=o.times.length-1;let m;if(s<=o.times[0]){const f=u,v=A-u;m=o.values.slice(f,v)}else if(s>=o.times[p]){const f=p*A+u,v=f+A-u;m=o.values.slice(f,v)}else{const f=o.createInterpolant(),v=u,E=A-u;f.evaluate(s),m=f.resultBuffer.slice(v,E)}l==="quaternion"&&new Wt().fromArray(m).normalize().conjugate().toArray(m);const g=c.times.length;for(let f=0;f<g;++f){const v=f*d+h;if(l==="quaternion")Wt.multiplyQuaternionsFlat(c.values,v,m,0,c.values,v);else{const E=d-h*2;for(let _=0;_<E;++_)c.values[v+_]-=m[_]}}}return e.blendMode=fl,e}var hg=class{static convertArray(e,t){return In(e,t)}static isTypedArray(e){return gu(e)}static getKeyframeOrder(e){return WA(e)}static sortedArray(e,t,i){return Oo(e,t,i)}static flattenJSON(e,t,i,n){Fl(e,t,i,n)}static subclip(e,t,i,n,r=30){return lg(e,t,i,n,r)}static makeClipAdditive(e,t=0,i=e,n=30){return cg(e,t,i,n)}},gr=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let s;i:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break t}s=t.length;break i}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let o=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(n=r,r=t[--i-1],e>=r)break t}s=i,i=0;break i}break e}for(;i<s;){const a=i+s>>>1;e<t[a]?s=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qA=class extends gr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:En,endingEnd:En}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,s=e+1,a=n[r],o=n[s];if(a===void 0)switch(this.getSettings_().endingStart){case xn:r=e,a=2*t-i;break;case Jr:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(o===void 0)switch(this.getSettings_().endingEnd){case xn:s=e,o=2*i-t;break;case Jr:s=1,o=i+n[1]-n[0];break;default:s=e-1,o=t}const l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(o-i),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,A=this._weightPrev,h=this._weightNext,d=(i-t)/(n-t),p=d*d,m=p*d,g=-A*m+2*A*p-A*d,f=(1+A)*m+(-1.5-2*A)*p+(-.5+A)*d+1,v=(-1-h)*m+(1.5+h)*p+.5*d,E=h*m-h*p;for(let _=0;_!==a;++_)r[_]=g*s[c+_]+f*s[l+_]+v*s[o+_]+E*s[u+_];return r}},Ql=class extends gr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=(i-t)/(n-t),u=1-c;for(let A=0;A!==a;++A)r[A]=s[l+A]*u+s[o+A]*c;return r}},XA=class extends gr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},YA=class extends gr{interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,l=o-a,c=this.settings||this.DefaultSettings_,u=c.inTangents,A=c.outTangents;if(!u||!A){const p=(i-t)/(n-t),m=1-p;for(let g=0;g!==a;++g)r[g]=s[l+g]*m+s[o+g]*p;return r}const h=a*2,d=e-1;for(let p=0;p!==a;++p){const m=s[l+p],g=s[o+p],f=d*h+p*2,v=A[f],E=A[f+1],_=e*h+p*2,S=u[_],M=u[_+1];let T=(i-t)/(n-t),y,C,L,b,F;for(let H=0;H<8;H++){y=T*T,C=y*T,L=1-T,b=L*L,F=b*L;const U=F*t+3*b*T*v+3*L*y*S+C*n-i;if(Math.abs(U)<1e-10)break;const k=3*b*(v-t)+6*L*T*(S-v)+3*y*(n-S);if(Math.abs(k)<1e-10)break;T=T-U/k,T=Math.max(0,Math.min(1,T))}r[p]=F*m+3*b*T*E+3*L*y*M+C*g}return r}},ci=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=In(t,this.TimeBufferType),this.values=In(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:In(e.times,Array),values:In(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new XA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new YA(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Yr:t=this.InterpolantFactoryMethodDiscrete;break;case ga:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break;case Uo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ce("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return Uo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,s=n-1;for(;r!==n&&i[r]<e;)++r;for(;s!==-1&&i[s]>t;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(we("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(we("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const o=i[a];if(typeof o=="number"&&isNaN(o)){we("KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(s!==null&&s>o){we("KeyframeTrack: Out of order keys.",this,a,o,s),e=!1;break}s=o}if(n!==void 0&&gu(n))for(let a=0,o=n.length;a!==o;++a){const l=n[a];if(isNaN(l)){we("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===la,r=e.length-1;let s=1;for(let a=1;a<r;++a){let o=!1;const l=e[a];if(l!==e[a+1]&&(a!==1||l!==e[0]))if(n)o=!0;else{const c=a*i,u=c-i,A=c+i;for(let h=0;h!==i;++h){const d=t[c+h];if(d!==t[u+h]||d!==t[A+h]){o=!0;break}}}if(o){if(a!==s){e[s]=e[a];const c=a*i,u=s*i;for(let A=0;A!==i;++A)t[u+A]=t[c+A]}++s}}if(r>0){e[s]=e[r];for(let a=r*i,o=s*i,l=0;l!==i;++l)t[o+l]=t[a+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=ga;var bn=class extends ci{constructor(e,t,i){super(e,t,i)}};bn.prototype.ValueTypeName="bool";bn.prototype.ValueBufferType=Array;bn.prototype.DefaultInterpolation=Yr;bn.prototype.InterpolantFactoryMethodLinear=void 0;bn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ol=class extends ci{constructor(e,t,i,n){super(e,t,i,n)}};Ol.prototype.ValueTypeName="color";var ss=class extends ci{constructor(e,t,i,n){super(e,t,i,n)}};ss.prototype.ValueTypeName="number";var JA=class extends gr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(i-t)/(n-t);let l=e*a;for(let c=l+a;l!==c;l+=4)Wt.slerpFlat(r,0,s,l-a,s,l,o);return r}},As=class extends ci{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new JA(this.times,this.values,this.getValueSize(),e)}};As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;var wn=class extends ci{constructor(e,t,i){super(e,t,i)}};wn.prototype.ValueTypeName="string";wn.prototype.ValueBufferType=Array;wn.prototype.DefaultInterpolation=Yr;wn.prototype.InterpolantFactoryMethodLinear=void 0;wn.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends ci{constructor(e,t,i,n){super(e,t,i,n)}};as.prototype.ValueTypeName="vector";var os=class{constructor(e="",t=-1,i=[],n=Ba){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let s=0,a=i.length;s!==a;++s)t.push(Ag(i[s]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,s=i.length;r!==s;++r)t.push(ci.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,s=[];for(let a=0;a<r;a++){let o=[],l=[];o.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const c=WA(o);o=Oo(o,1,c),l=Oo(l,1,c),!n&&o[0]===0&&(o.push(r),l.push(l[0])),s.push(new ss(".morphTargetInfluences["+t[a].name+"]",o,l).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.name.match(r);if(c&&c.length>1){const u=c[1];let A=n[u];A||(n[u]=A=[]),A.push(l)}}const s=[];for(const a in n)s.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return s}static parseAnimation(e,t){if(ce("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return we("AnimationClip: No animation in JSONLoader data."),null;const i=function(c,u,A,h,d){if(A.length!==0){const p=[],m=[];Fl(A,p,m,h),p.length!==0&&d.push(new c(u,p,m))}},n=[],r=e.name||"default",s=e.fps||30,a=e.blendMode;let o=e.length||-1;const l=e.hierarchy||[];for(let c=0;c<l.length;c++){const u=l[c].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const A={};let h;for(h=0;h<u.length;h++)if(u[h].morphTargets)for(let d=0;d<u[h].morphTargets.length;d++)A[u[h].morphTargets[d]]=-1;for(const d in A){const p=[],m=[];for(let g=0;g!==u[h].morphTargets.length;++g){const f=u[h];p.push(f.time),m.push(f.morphTarget===d?1:0)}n.push(new ss(".morphTargetInfluence["+d+"]",p,m))}o=A.length*s}else{const A=".bones["+t[c].name+"]";i(as,A+".position",u,"pos",n),i(As,A+".quaternion",u,"rot",n),i(as,A+".scale",u,"scl",n)}}return n.length===0?null:new this(r,o,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function ug(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ss;case"vector":case"vector2":case"vector3":case"vector4":return as;case"color":return Ol;case"quaternion":return As;case"bool":case"boolean":return bn;case"string":return wn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function Ag(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=ug(e.type);if(e.times===void 0){const i=[],n=[];Fl(e.keys,i,n,"value"),e.times=i,e.values=n}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}var Mi={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Hc(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Hc(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Hc(e){try{const t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Gl=class{constructor(e,t,i){const n=this;let r=!1,s=0,a=0,o;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){a++,r===!1&&n.onStart!==void 0&&n.onStart(c,s,a),r=!0},this.itemEnd=function(c){s++,n.onProgress!==void 0&&n.onProgress(c,s,a),s===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){const u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,A=l.length;u<A;u+=2){const h=l[u],d=l[u+1];if(h.global&&(h.lastIndex=0),h.test(c))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},KA=new Gl,Xt=class{constructor(e){this.manager=e!==void 0?e:KA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xt.DEFAULT_MATERIAL_NAME="__DEFAULT";var Di={},dg=class extends Error{constructor(e,t){super(e),this.response=t}},oi=class extends Xt{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Mi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Di[e]!==void 0){Di[e].push({onLoad:t,onProgress:i,onError:n});return}Di[e]=[],Di[e].push({onLoad:t,onProgress:i,onError:n});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,o=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const c=Di[e],u=l.body.getReader(),A=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=A?parseInt(A):0,d=h!==0;let p=0;const m=new ReadableStream({start(g){f();function f(){u.read().then(({done:v,value:E})=>{if(v)g.close();else{p+=E.byteLength;const _=new ProgressEvent("progress",{lengthComputable:d,loaded:p,total:h});for(let S=0,M=c.length;S<M;S++){const T=c[S];T.onProgress&&T.onProgress(_)}g.enqueue(E),f()}},v=>{g.error(v)})}}});return new Response(m)}else throw new dg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return l.json();default:if(a==="")return l.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),u=c&&c[1]?c[1].toLowerCase():void 0,A=new TextDecoder(u);return l.arrayBuffer().then(h=>A.decode(h))}}}).then(l=>{Mi.add(`file:${e}`,l);const c=Di[e];delete Di[e];for(let u=0,A=c.length;u<A;u++){const h=c[u];h.onLoad&&h.onLoad(l)}}).catch(l=>{const c=Di[e];if(c===void 0)throw this.manager.itemError(e),l;delete Di[e];for(let u=0,A=c.length;u<A;u++){const h=c[u];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},fg=class extends Xt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new oi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(o){n?n(o):we(o),r.manager.itemError(e)}},i,n)}parse(e){const t=[];for(let i=0;i<e.length;i++){const n=os.parse(e[i]);t.push(n)}return t}},pg=class extends Xt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=[],a=new fr,o=new oi(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(r.withCredentials);let l=0;function c(u){o.load(e[u],function(A){const h=r.parse(A,!0);s[u]={width:h.width,height:h.height,format:h.format,mipmaps:h.mipmaps},l+=1,l===6&&(h.mipmapCount===1&&(a.minFilter=gt),a.image=s,a.format=h.format,a.needsUpdate=!0,t&&t(a))},i,n)}if(Array.isArray(e))for(let u=0,A=e.length;u<A;++u)c(u);else o.load(e,function(u){const A=r.parse(u,!0);if(A.isCubemap){const h=A.mipmaps.length/A.mipmapCount;for(let d=0;d<h;d++){s[d]={mipmaps:[]};for(let p=0;p<A.mipmapCount;p++)s[d].mipmaps.push(A.mipmaps[d*A.mipmapCount+p]),s[d].format=A.format,s[d].width=A.width,s[d].height=A.height}a.image=s}else a.image.width=A.width,a.image.height=A.height,a.mipmaps=A.mipmaps;A.mipmapCount===1&&(a.minFilter=gt),a.format=A.format,a.needsUpdate=!0,t&&t(a)},i,n);return a}},Xn=new WeakMap,ls=class extends Xt{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Mi.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);else{let u=Xn.get(s);u===void 0&&(u=[],Xn.set(s,u)),u.push({onLoad:t,onError:n})}return s}const a=jr("img");function o(){c(),t&&t(this);const u=Xn.get(this)||[];for(let A=0;A<u.length;A++){const h=u[A];h.onLoad&&h.onLoad(this)}Xn.delete(this),r.manager.itemEnd(e)}function l(u){c(),n&&n(u),Mi.remove(`image:${e}`);const A=Xn.get(this)||[];for(let h=0;h<A.length;h++){const d=A[h];d.onError&&d.onError(u)}Xn.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Mi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}},gg=class extends Xt{constructor(e){super(e)}load(e,t,i,n){const r=new hs;r.colorSpace=Ft;const s=new ls(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function o(l){s.load(e[l],function(c){r.images[l]=c,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,n)}for(let l=0;l<e.length;++l)o(l);return r}},mg=class extends Xt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new ai,a=new oi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(o){let l;try{l=r.parse(o)}catch(c){n!==void 0?n(c):we(c);return}l.image!==void 0?s.image=l.image:l.data!==void 0&&(s.image.width=l.width,s.image.height=l.height,s.image.data=l.data),s.wrapS=l.wrapS!==void 0?l.wrapS:$t,s.wrapT=l.wrapT!==void 0?l.wrapT:$t,s.magFilter=l.magFilter!==void 0?l.magFilter:gt,s.minFilter=l.minFilter!==void 0?l.minFilter:gt,s.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(s.colorSpace=l.colorSpace),l.flipY!==void 0&&(s.flipY=l.flipY),l.format!==void 0&&(s.format=l.format),l.type!==void 0&&(s.type=l.type),l.mipmaps!==void 0&&(s.mipmaps=l.mipmaps,s.minFilter=nn),l.mipmapCount===1&&(s.minFilter=gt),l.generateMipmaps!==void 0&&(s.generateMipmaps=l.generateMipmaps),s.needsUpdate=!0,t&&t(s,l)},i,n),s}},vg=class extends Xt{constructor(e){super(e)}load(e,t,i,n){const r=new wt,s=new ls(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},sn=class extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ZA=class extends sn{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},go=new He,Wc=new w,qc=new w,kl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.mapType=Ye,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wc),qc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qc),t.updateMatrixWorld(),go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zs=new w,$s=new Wt,xi=new w,Pa=class extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zs,$s,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zs,$s,xi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Zs,$s,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zs,$s,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new w,Xc=new Z,Yc=new Z,Rt=class extends Pa{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Cn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Xc,Yc),t.subVectors(Yc,Xc)}setViewOffset(e,t,i,n,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cn*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*n/o,t-=s.offsetY*i/l,n*=s.width/o,i*=s.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_g=class extends kl{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=lr*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},$A=class extends sn{constructor(e,t,i=0,n=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new _g}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},yg=class extends kl{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0}},jA=class extends sn{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new yg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ds=class extends Pa{constructor(e=-1,t=1,i=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,s=i+e,a=n+t,o=n-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Eg=class extends kl{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ed=class extends sn{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new Eg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},td=class extends sn{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},id=class extends sn{constructor(e,t,i=10,n=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},zl=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,n=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*n),t.addScaledVector(s[2],.488603*r),t.addScaledVector(s[3],.488603*i),t.addScaledVector(s[4],1.092548*(i*n)),t.addScaledVector(s[5],1.092548*(n*r)),t.addScaledVector(s[6],.315392*(3*r*r-1)),t.addScaledVector(s[7],1.092548*(i*r)),t.addScaledVector(s[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){const i=e.x,n=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],2*.511664*n),t.addScaledVector(s[2],2*.511664*r),t.addScaledVector(s[3],2*.511664*i),t.addScaledVector(s[4],2*.429043*i*n),t.addScaledVector(s[5],2*.429043*n*r),t.addScaledVector(s[6],.743125*r*r-.247708),t.addScaledVector(s[7],2*.429043*i*r),t.addScaledVector(s[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+n*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+n*3);return e}static getBasisAt(e,t){const i=e.x,n=e.y,r=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*r,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*i*r,t[8]=.546274*(i*i-n*n)}},nd=class extends sn{constructor(e=new zl,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},rd=class sd extends Xt{constructor(t){super(t),this.textures={}}load(t,i,n,r){const s=this,a=new oi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(o){try{i(s.parse(JSON.parse(o)))}catch(l){r?r(l):we(l),s.manager.itemError(t)}},n,r)}parse(t){const i=this.textures;function n(s){return i[s]===void 0&&ce("MaterialLoader: Undefined texture",s),i[s]}const r=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(r.uuid=t.uuid),t.name!==void 0&&(r.name=t.name),t.color!==void 0&&r.color!==void 0&&r.color.setHex(t.color),t.roughness!==void 0&&(r.roughness=t.roughness),t.metalness!==void 0&&(r.metalness=t.metalness),t.sheen!==void 0&&(r.sheen=t.sheen),t.sheenColor!==void 0&&(r.sheenColor=new ye().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(r.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(t.emissive),t.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(t.specular),t.specularIntensity!==void 0&&(r.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(r.shininess=t.shininess),t.clearcoat!==void 0&&(r.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(r.dispersion=t.dispersion),t.iridescence!==void 0&&(r.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(r.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(r.transmission=t.transmission),t.thickness!==void 0&&(r.thickness=t.thickness),t.attenuationDistance!==void 0&&(r.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(r.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(r.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(r.fog=t.fog),t.flatShading!==void 0&&(r.flatShading=t.flatShading),t.blending!==void 0&&(r.blending=t.blending),t.combine!==void 0&&(r.combine=t.combine),t.side!==void 0&&(r.side=t.side),t.shadowSide!==void 0&&(r.shadowSide=t.shadowSide),t.opacity!==void 0&&(r.opacity=t.opacity),t.transparent!==void 0&&(r.transparent=t.transparent),t.alphaTest!==void 0&&(r.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(r.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(r.depthFunc=t.depthFunc),t.depthTest!==void 0&&(r.depthTest=t.depthTest),t.depthWrite!==void 0&&(r.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(r.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(r.blendSrc=t.blendSrc),t.blendDst!==void 0&&(r.blendDst=t.blendDst),t.blendEquation!==void 0&&(r.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(r.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(r.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(r.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&r.blendColor!==void 0&&r.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(r.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(r.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(r.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(r.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(r.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(r.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(r.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(r.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(r.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(r.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(r.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(r.rotation=t.rotation),t.linewidth!==void 0&&(r.linewidth=t.linewidth),t.dashSize!==void 0&&(r.dashSize=t.dashSize),t.gapSize!==void 0&&(r.gapSize=t.gapSize),t.scale!==void 0&&(r.scale=t.scale),t.polygonOffset!==void 0&&(r.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(r.dithering=t.dithering),t.alphaToCoverage!==void 0&&(r.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(r.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(r.allowOverride=t.allowOverride),t.visible!==void 0&&(r.visible=t.visible),t.toneMapped!==void 0&&(r.toneMapped=t.toneMapped),t.userData!==void 0&&(r.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?r.vertexColors=t.vertexColors>0:r.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const s in t.uniforms){const a=t.uniforms[s];switch(r.uniforms[s]={},a.type){case"t":r.uniforms[s].value=n(a.value);break;case"c":r.uniforms[s].value=new ye().setHex(a.value);break;case"v2":r.uniforms[s].value=new Z().fromArray(a.value);break;case"v3":r.uniforms[s].value=new w().fromArray(a.value);break;case"v4":r.uniforms[s].value=new ht().fromArray(a.value);break;case"m3":r.uniforms[s].value=new We().fromArray(a.value);break;case"m4":r.uniforms[s].value=new He().fromArray(a.value);break;default:r.uniforms[s].value=a.value}}if(t.defines!==void 0&&(r.defines=t.defines),t.vertexShader!==void 0&&(r.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(r.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(r.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)r.extensions[s]=t.extensions[s];if(t.lights!==void 0&&(r.lights=t.lights),t.clipping!==void 0&&(r.clipping=t.clipping),t.size!==void 0&&(r.size=t.size),t.sizeAttenuation!==void 0&&(r.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(r.map=n(t.map)),t.matcap!==void 0&&(r.matcap=n(t.matcap)),t.alphaMap!==void 0&&(r.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(r.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(r.bumpScale=t.bumpScale),t.normalMap!==void 0&&(r.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(r.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new Z().fromArray(s)}return t.displacementMap!==void 0&&(r.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(r.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(r.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(r.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(r.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(r.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(r.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(r.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(r.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(r.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(r.envMap=n(t.envMap)),t.envMapRotation!==void 0&&r.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(r.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(r.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(r.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(r.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(r.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(r.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(r.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(r.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(r.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new Z().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(r.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(r.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(r.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(r.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(r.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(r.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=n(t.sheenRoughnessMap)),r}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return sd.createMaterialFromType(t)}static createMaterialFromType(t){return new{ShadowMaterial:UA,SpriteMaterial:_l,RawShaderMaterial:Ll,ShaderMaterial:li,PointsMaterial:El,MeshPhysicalMaterial:QA,MeshStandardMaterial:Pl,MeshPhongMaterial:OA,MeshToonMaterial:GA,MeshNormalMaterial:kA,MeshLambertMaterial:zA,MeshDepthMaterial:Ul,MeshDistanceMaterial:Nl,MeshBasicMaterial:rn,MeshMatcapMaterial:VA,LineDashedMaterial:HA,LineBasicMaterial:qt,Material:Gt}[t]}},Go=class{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},ad=class extends Ke{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},od=class extends Xt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new oi(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(o){n?n(o):we(o),r.manager.itemError(e)}},i,n)}parse(e){const t={},i={};function n(A,h){if(t[h]!==void 0)return t[h];const d=A.interleavedBuffers[h],p=r(A,d.buffer),m=new Ra(nr(d.type,p),d.stride);return m.uuid=d.uuid,t[h]=m,m}function r(A,h){if(i[h]!==void 0)return i[h];const d=A.arrayBuffers[h],p=new Uint32Array(d).buffer;return i[h]=p,p}const s=e.isInstancedBufferGeometry?new ad:new Ke,a=e.data.index;if(a!==void 0){const A=nr(a.type,a.array);s.setIndex(new ut(A,1))}const o=e.data.attributes;for(const A in o){const h=o[A];let d;if(h.isInterleavedBufferAttribute)d=new ts(n(e.data,h.data),h.itemSize,h.offset,h.normalized);else{const p=nr(h.type,h.array);d=new(h.isInstancedBufferAttribute?cr:ut)(p,h.itemSize,h.normalized)}h.name!==void 0&&(d.name=h.name),h.usage!==void 0&&d.setUsage(h.usage),s.setAttribute(A,d)}const l=e.data.morphAttributes;if(l)for(const A in l){const h=l[A],d=[];for(let p=0,m=h.length;p<m;p++){const g=h[p];let f;g.isInterleavedBufferAttribute?f=new ts(n(e.data,g.data),g.itemSize,g.offset,g.normalized):f=new ut(nr(g.type,g.array),g.itemSize,g.normalized),g.name!==void 0&&(f.name=g.name),d.push(f)}s.morphAttributes[A]=d}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const c=e.data.groups||e.data.drawcalls||e.data.offsets;if(c!==void 0)for(let A=0,h=c.length;A!==h;++A){const d=c[A];s.addGroup(d.start,d.count,d.materialIndex)}const u=e.data.boundingSphere;return u!==void 0&&(s.boundingSphere=new Dt().fromJSON(u)),e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}},mo={},xg=class extends Xt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=this.path===""?Go.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const a=new oi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){let l=null;try{l=JSON.parse(o)}catch(u){n!==void 0&&n(u),we("ObjectLoader: Can't parse "+e+".",u.message);return}const c=l.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry"){n!==void 0&&n(new Error("THREE.ObjectLoader: Can't load "+e)),we("ObjectLoader: Can't load "+e);return}r.parse(l,t)},i,n)}async loadAsync(e,t){const i=this,n=this.path===""?Go.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||n;const r=new oi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const s=await r.loadAsync(e,t);let a;try{a=JSON.parse(s)}catch(l){throw new Error("ObjectLoader: Can't parse "+e+". "+l.message)}const o=a.metadata;if(o===void 0||o.type===void 0||o.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(a)}parse(e,t){const i=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),s=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,r,o,a,i),c=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,c),this.bindLightTargets(l),t!==void 0){let u=!1;for(const A in s)if(s[A].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(l)}return l}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),n=this.parseGeometries(e.geometries,i),r=await this.parseImagesAsync(e.images),s=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,s),o=this.parseObject(e.object,n,a,s,t),l=this.parseSkeletons(e.skeletons,o);return this.bindSkeletons(o,l),this.bindLightTargets(o),o}static registerGeometry(e,t){mo[e]=t}parseShapes(e){const t={};if(e!==void 0)for(let i=0,n=e.length;i<n;i++){const r=new Mn().fromJSON(e[i]);t[r.uuid]=r}return t}parseSkeletons(e,t){const i={},n={};if(t.traverse(function(r){r.isBone&&(n[r.uuid]=r)}),e!==void 0)for(let r=0,s=e.length;r<s;r++){const a=new Pu().fromJSON(e[r],n);i[a.uuid]=a}return i}parseGeometries(e,t){const i={};if(e!==void 0){const n=new od;for(let r=0,s=e.length;r<s;r++){let a;const o=e[r];switch(o.type){case"BufferGeometry":case"InstancedBufferGeometry":a=n.parse(o);break;default:o.type in zc?a=zc[o.type].fromJSON(o,t):o.type in mo?a=mo[o.type].fromJSON(o,t):ce(`ObjectLoader: Unknown geometry type "${o.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=o.uuid,o.name!==void 0&&(a.name=o.name),o.userData!==void 0&&(a.userData=o.userData),i[o.uuid]=a}}return i}parseMaterials(e,t){const i={},n={};if(e!==void 0){const r=new rd;r.setTextures(t);for(let s=0,a=e.length;s<a;s++){const o=e[s];i[o.uuid]===void 0&&(i[o.uuid]=r.parse(o)),n[o.uuid]=i[o.uuid]}}return n}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const n=e[i],r=os.parse(n);t[r.uuid]=r}return t}parseImages(e,t){const i=this,n={};let r;function s(o){return i.manager.itemStart(o),r.load(o,function(){i.manager.itemEnd(o)},void 0,function(){i.manager.itemError(o),i.manager.itemEnd(o)})}function a(o){if(typeof o=="string"){const l=o;return s(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:i.resourcePath+l)}else return o.data?{data:nr(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){r=new ls(new Gl(t)),r.setCrossOrigin(this.crossOrigin);for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.url;if(Array.isArray(u)){const A=[];for(let h=0,d=u.length;h<d;h++){const p=u[h],m=a(p);m!==null&&(m instanceof HTMLImageElement?A.push(m):A.push(new ai(m.data,m.width,m.height)))}n[c.uuid]=new Zi(A)}else{const A=a(c.url);n[c.uuid]=new Zi(A)}}}return n}async parseImagesAsync(e){const t=this,i={};let n;async function r(s){if(typeof s=="string"){const a=s,o=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await n.loadAsync(o)}else return s.data?{data:nr(s.type,s.data),width:s.width,height:s.height}:null}if(e!==void 0&&e.length>0){n=new ls(this.manager),n.setCrossOrigin(this.crossOrigin);for(let s=0,a=e.length;s<a;s++){const o=e[s],l=o.url;if(Array.isArray(l)){const c=[];for(let u=0,A=l.length;u<A;u++){const h=l[u],d=await r(h);d!==null&&(d instanceof HTMLImageElement?c.push(d):c.push(new ai(d.data,d.width,d.height)))}i[o.uuid]=new Zi(c)}else{const c=await r(o.url);i[o.uuid]=new Zi(c)}}}return i}parseTextures(e,t){function i(r,s){return typeof r=="number"?r:(ce("ObjectLoader.parseTexture: Constant should be in numeric form.",r),s[r])}const n={};if(e!==void 0)for(let r=0,s=e.length;r<s;r++){const a=e[r];a.image===void 0&&ce('ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&ce("ObjectLoader: Undefined image",a.image);const o=t[a.image],l=o.data;let c;Array.isArray(l)?(c=new hs,l.length===6&&(c.needsUpdate=!0)):(l&&l.data?c=new ai:c=new wt,l&&(c.needsUpdate=!0)),c.source=o,c.uuid=a.uuid,a.name!==void 0&&(c.name=a.name),a.mapping!==void 0&&(c.mapping=i(a.mapping,Ig)),a.channel!==void 0&&(c.channel=a.channel),a.offset!==void 0&&c.offset.fromArray(a.offset),a.repeat!==void 0&&c.repeat.fromArray(a.repeat),a.center!==void 0&&c.center.fromArray(a.center),a.rotation!==void 0&&(c.rotation=a.rotation),a.wrap!==void 0&&(c.wrapS=i(a.wrap[0],Jc),c.wrapT=i(a.wrap[1],Jc)),a.format!==void 0&&(c.format=a.format),a.internalFormat!==void 0&&(c.internalFormat=a.internalFormat),a.type!==void 0&&(c.type=a.type),a.colorSpace!==void 0&&(c.colorSpace=a.colorSpace),a.minFilter!==void 0&&(c.minFilter=i(a.minFilter,Kc)),a.magFilter!==void 0&&(c.magFilter=i(a.magFilter,Kc)),a.anisotropy!==void 0&&(c.anisotropy=a.anisotropy),a.flipY!==void 0&&(c.flipY=a.flipY),a.generateMipmaps!==void 0&&(c.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(c.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(c.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(c.compareFunction=a.compareFunction),a.normalized!==void 0&&(c.normalized=a.normalized),a.userData!==void 0&&(c.userData=a.userData),n[a.uuid]=c}return n}parseObject(e,t,i,n,r){let s;function a(A){return t[A]===void 0&&ce("ObjectLoader: Undefined geometry",A),t[A]}function o(A){if(A!==void 0){if(Array.isArray(A)){const h=[];for(let d=0,p=A.length;d<p;d++){const m=A[d];i[m]===void 0&&ce("ObjectLoader: Undefined material",m),h.push(i[m])}return h}return i[A]===void 0&&ce("ObjectLoader: Undefined material",A),i[A]}}function l(A){return n[A]===void 0&&ce("ObjectLoader: Undefined texture",A),n[A]}let c,u;switch(e.type){case"Scene":s=new Bu,e.background!==void 0&&(Number.isInteger(e.background)?s.background=new ye(e.background):s.background=l(e.background)),e.environment!==void 0&&(s.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?s.fog=new Mu(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(s.fog=new Iu(e.fog.color,e.fog.density)),e.fog.name!==""&&(s.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(s.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(s.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&s.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(s.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&s.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":s=new Rt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(s.focus=e.focus),e.zoom!==void 0&&(s.zoom=e.zoom),e.filmGauge!==void 0&&(s.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(s.filmOffset=e.filmOffset),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new ds(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(s.zoom=e.zoom),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new td(e.color,e.intensity);break;case"DirectionalLight":s=new ed(e.color,e.intensity),s.target=e.target||"";break;case"PointLight":s=new jA(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new id(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new $A(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),s.target=e.target||"";break;case"HemisphereLight":s=new ZA(e.color,e.groundColor,e.intensity);break;case"LightProbe":s=new nd(new zl().fromArray(e.sh),e.intensity);break;case"SkinnedMesh":c=a(e.geometry),u=o(e.material),s=new Lu(c,u),e.bindMode!==void 0&&(s.bindMode=e.bindMode),e.bindMatrix!==void 0&&s.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(s.skeleton=e.skeleton);break;case"Mesh":c=a(e.geometry),u=o(e.material),s=new St(c,u);break;case"InstancedMesh":c=a(e.geometry),u=o(e.material);const A=e.count,h=e.instanceMatrix,d=e.instanceColor;s=new Nu(c,u,A),s.instanceMatrix=new cr(new Float32Array(h.array),16),d!==void 0&&(s.instanceColor=new cr(new Float32Array(d.array),d.itemSize));break;case"BatchedMesh":c=a(e.geometry),u=o(e.material),s=new Ou(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),s.geometry=c,s.perObjectFrustumCulled=e.perObjectFrustumCulled,s.sortObjects=e.sortObjects,s._drawRanges=e.drawRanges,s._reservedRanges=e.reservedRanges,s._geometryInfo=e.geometryInfo.map(p=>{let m=null,g=null;return p.boundingBox!==void 0&&(m=new Ot().fromJSON(p.boundingBox)),p.boundingSphere!==void 0&&(g=new Dt().fromJSON(p.boundingSphere)),{...p,boundingBox:m,boundingSphere:g}}),s._instanceInfo=e.instanceInfo,s._availableInstanceIds=e._availableInstanceIds,s._availableGeometryIds=e._availableGeometryIds,s._nextIndexStart=e.nextIndexStart,s._nextVertexStart=e.nextVertexStart,s._geometryCount=e.geometryCount,s._maxInstanceCount=e.maxInstanceCount,s._maxVertexCount=e.maxVertexCount,s._maxIndexCount=e.maxIndexCount,s._geometryInitialized=e.geometryInitialized,s._matricesTexture=l(e.matricesTexture.uuid),s._indirectTexture=l(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(s._colorsTexture=l(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(s.boundingSphere=new Dt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(s.boundingBox=new Ot().fromJSON(e.boundingBox));break;case"LOD":s=new Du;break;case"Line":s=new tn(a(e.geometry),o(e.material));break;case"LineLoop":s=new Gu(a(e.geometry),o(e.material));break;case"LineSegments":s=new Si(a(e.geometry),o(e.material));break;case"PointCloud":case"Points":s=new ku(a(e.geometry),o(e.material));break;case"Sprite":s=new Ru(o(e.material));break;case"Group":s=new rr;break;case"Bone":s=new yl;break;default:s=new lt}if(s.uuid=e.uuid,e.name!==void 0&&(s.name=e.name),e.matrix!==void 0?(s.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(e.position!==void 0&&s.position.fromArray(e.position),e.rotation!==void 0&&s.rotation.fromArray(e.rotation),e.quaternion!==void 0&&s.quaternion.fromArray(e.quaternion),e.scale!==void 0&&s.scale.fromArray(e.scale)),e.up!==void 0&&s.up.fromArray(e.up),e.pivot!==void 0&&(s.pivot=new w().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(s.castShadow=e.castShadow),e.receiveShadow!==void 0&&(s.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(s.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(s.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(s.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(s.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(s.visible=e.visible),e.frustumCulled!==void 0&&(s.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(s.renderOrder=e.renderOrder),e.static!==void 0&&(s.static=e.static),e.userData!==void 0&&(s.userData=e.userData),e.layers!==void 0&&(s.layers.mask=e.layers),e.children!==void 0){const A=e.children;for(let h=0;h<A.length;h++)s.add(this.parseObject(A[h],t,i,n,r))}if(e.animations!==void 0){const A=e.animations;for(let h=0;h<A.length;h++){const d=A[h];s.animations.push(r[d])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(s.autoUpdate=e.autoUpdate);const A=e.levels;for(let h=0;h<A.length;h++){const d=A[h],p=s.getObjectByProperty("uuid",d.object);p!==void 0&&s.addLevel(p,d.distance,d.hysteresis)}}return s}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const n=t[i.skeleton];n===void 0?ce("ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(n,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const i=t.target,n=e.getObjectByProperty("uuid",i);n!==void 0?t.target=n:t.target=new lt}})}},Ig={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306},Jc={RepeatWrapping:kr,ClampToEdgeWrapping:$t,MirroredRepeatWrapping:zr},Kc={NearestFilter:Ct,NearestMipmapNearestFilter:xa,NearestMipmapLinearFilter:Xo,LinearFilter:gt,LinearMipmapNearestFilter:Yo,LinearMipmapLinearFilter:nn},vo=new WeakMap,Cg=class extends Xt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Mi.get(`image-bitmap:${e}`);if(s!==void 0){if(r.manager.itemStart(e),s.then){s.then(l=>{vo.has(s)===!0?(n&&n(vo.get(s)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const o=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Mi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){n&&n(l),vo.set(o,l),Mi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Mi.add(`image-bitmap:${e}`,o),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},js,Vl=class{static getContext(){return js===void 0&&(js=new(window.AudioContext||window.webkitAudioContext)),js}static setContext(e){js=e}},Mg=class extends Xt{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new oi(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){try{const l=o.slice(0),c=Vl.getContext(),u=e+"#decode";r.manager.itemStart(u),c.decodeAudioData(l,function(A){t(A),r.manager.itemEnd(u)}).catch(function(A){a(A),r.manager.itemEnd(u)})}catch(l){a(l)}},i,n);function a(o){n?n(o):we(o),r.manager.itemError(e)}}},Zc=new He,$c=new He,dn=new He,Sg=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Rt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Rt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,dn.copy(e.projectionMatrix);const i=t.eyeSep/2,n=i*t.near/t.focus,r=t.near*Math.tan(Cn*t.fov*.5)/t.zoom;let s,a;$c.elements[12]=-i,Zc.elements[12]=i,s=-r*t.aspect+n,a=r*t.aspect+n,dn.elements[0]=2*t.near/(a-s),dn.elements[8]=(a+s)/(a-s),this.cameraL.projectionMatrix.copy(dn),s=-r*t.aspect-n,a=r*t.aspect-n,dn.elements[0]=2*t.near/(a-s),dn.elements[8]=(a+s)/(a-s),this.cameraR.projectionMatrix.copy(dn)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply($c),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Zc)}},Yn=-90,Jn=1,ld=class extends lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Rt(Yn,Jn,e,t);n.layers=this.layers,this.add(n);const r=new Rt(Yn,Jn,e,t);r.layers=this.layers,this.add(r);const s=new Rt(Yn,Jn,e,t);s.layers=this.layers,this.add(s);const a=new Rt(Yn,Jn,e,t);a.layers=this.layers,this.add(a);const o=new Rt(Yn,Jn,e,t);o.layers=this.layers,this.add(o);const l=new Rt(Yn,Jn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,a,o]=t;for(const l of t)this.remove(l);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),A=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(u,A,h),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}},cd=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},hd=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Bg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Bg(){this._document.hidden===!1&&this.reset()}var fn=new w,_o=new Wt,bg=new w,pn=new w,gn=new w,wg=class extends lt{constructor(){super(),this.type="AudioListener",this.context=Vl.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new hd}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();const t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(fn,_o,bg),pn.set(0,0,-1).applyQuaternion(_o),gn.set(0,1,0).applyQuaternion(_o),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(fn.x,i),t.positionY.linearRampToValueAtTime(fn.y,i),t.positionZ.linearRampToValueAtTime(fn.z,i),t.forwardX.linearRampToValueAtTime(pn.x,i),t.forwardY.linearRampToValueAtTime(pn.y,i),t.forwardZ.linearRampToValueAtTime(pn.z,i),t.upX.linearRampToValueAtTime(gn.x,i),t.upY.linearRampToValueAtTime(gn.y,i),t.upZ.linearRampToValueAtTime(gn.z,i)}else t.setPosition(fn.x,fn.y,fn.z),t.setOrientation(pn.x,pn.y,pn.z,gn.x,gn.y,gn.z)}},ud=class extends lt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){ce("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){ce("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){ce("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){ce("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){ce("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(ce("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){ce("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(ce("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},mn=new w,jc=new Wt,Tg=new w,vn=new w,Rg=class extends ud{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(mn,jc,Tg),vn.set(0,0,1).applyQuaternion(jc);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(mn.x,i),t.positionY.linearRampToValueAtTime(mn.y,i),t.positionZ.linearRampToValueAtTime(mn.z,i),t.orientationX.linearRampToValueAtTime(vn.x,i),t.orientationY.linearRampToValueAtTime(vn.y,i),t.orientationZ.linearRampToValueAtTime(vn.z,i)}else t.setPosition(mn.x,mn.y,mn.z),t.setOrientation(vn.x,vn.y,vn.z)}},Dg=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},Ad=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,r,s;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,r=e*n+n;let s=this.cumulativeWeight;if(s===0){for(let a=0;a!==n;++a)i[r+a]=i[a];s=t}else{s+=t;const a=t/s;this._mixBufferRegion(i,r,0,a,n)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const o=t*this._origIndex;this._mixBufferRegion(i,n,o,1-r,t)}s>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let o=t,l=t+t;o!==l;++o)if(i[o]!==i[o+t]){a.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,s=n;r!==s;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let s=0;s!==r;++s)e[t+s]=e[i+s]}_slerp(e,t,i,n){Wt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){const s=this._workIndex*r;Wt.multiplyQuaternionsFlat(e,s,e,t,e,i),Wt.slerpFlat(e,t,e,t,e,s,n)}_lerp(e,t,i,n,r){const s=1-n;for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]*s+e[i+a]*n}}_lerpAdditive(e,t,i,n,r){for(let s=0;s!==r;++s){const a=t+s;e[a]=e[a]+e[i+s]*n}}},Hl="\\[\\]\\.:\\/",Lg=new RegExp("["+Hl+"]","g"),Wl="[^"+Hl+"]",Pg="[^"+Hl.replace("\\.","")+"]",Ug=/((?:WC+[\/:])*)/.source.replace("WC",Wl),Ng=/(WCOD+)?/.source.replace("WCOD",Pg),Fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wl),Qg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wl),Og=new RegExp("^"+Ug+Ng+Fg+Qg+"$"),Gg=["material","materials","bones","map"],kg=class{constructor(e,t,i){const n=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ft=class tr{constructor(t,i,n){this.path=i,this.parsedPath=n||tr.parseTrackName(i),this.node=tr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,n){return t&&t.isAnimationObjectGroup?new tr.Composite(t,i,n):new tr(t,i,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lg,"")}static parseTrackName(t){const i=Og.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Gg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(i);if(n!==void 0)return n}if(t.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===i||o.uuid===i)return o;const l=n(o.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[i++]=n[r]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++]}_setValue_array_setNeedsUpdate(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node;const i=this.parsedPath,n=i.objectName,r=i.propertyName;let s=i.propertyIndex;if(t||(t=tr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=i.objectIndex;switch(n){case"materials":if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){we("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){we("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){we("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){we("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){we("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[r];if(a===void 0){const c=i.nodeName;we("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=kg;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zg=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=ii(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,n=arguments.length;i!==n;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,n=this._parsedPaths,r=this._bindings,s=r.length;let a,o=e.length,l=this.nCachedObjects_;for(let c=0,u=arguments.length;c!==u;++c){const A=arguments[c],h=A.uuid;let d=t[h];if(d===void 0){d=o++,t[h]=d,e.push(A);for(let p=0,m=s;p!==m;++p)r[p].push(new ft(A,i[p],n[p]))}else if(d<l){a=e[d];const p=--l,m=e[p];t[m.uuid]=d,e[d]=m,t[h]=p,e[p]=A;for(let g=0,f=s;g!==f;++g){const v=r[g],E=v[p];let _=v[d];v[d]=E,_===void 0&&(_=new ft(A,i[g],n[g])),v[p]=_}}else e[d]!==a&&we("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_;for(let s=0,a=arguments.length;s!==a;++s){const o=arguments[s],l=o.uuid,c=t[l];if(c!==void 0&&c>=r){const u=r++,A=e[u];t[A.uuid]=c,e[c]=A,t[l]=u,e[u]=o;for(let h=0,d=n;h!==d;++h){const p=i[h],m=p[u],g=p[c];p[c]=m,p[u]=g}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_,s=e.length;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a].uuid,c=t[l];if(c!==void 0)if(delete t[l],c<r){const u=--r,A=e[u],h=--s,d=e[h];t[A.uuid]=c,e[c]=A,t[d.uuid]=u,e[u]=d,e.pop();for(let p=0,m=n;p!==m;++p){const g=i[p],f=g[u],v=g[h];g[c]=f,g[u]=v,g.pop()}}else{const u=--s,A=e[u];u>0&&(t[A.uuid]=c),e[c]=A,e.pop();for(let h=0,d=n;h!==d;++h){const p=i[h];p[c]=p[u],p.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const i=this._bindingsIndicesByPath;let n=i[e];const r=this._bindings;if(n!==void 0)return r[n];const s=this._paths,a=this._parsedPaths,o=this._objects,l=o.length,c=this.nCachedObjects_,u=new Array(l);n=r.length,i[e]=n,s.push(e),a.push(t),r.push(u);for(let A=c,h=o.length;A!==h;++A){const d=o[A];u[A]=new ft(d,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const n=this._paths,r=this._parsedPaths,s=this._bindings,a=s.length-1,o=s[a],l=e[a];t[l]=i,s[i]=o,s.pop(),r[i]=r[a],r.pop(),n[i]=n[a],n.pop()}}},dd=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const r=t.tracks,s=r.length,a=new Array(s),o={endingStart:En,endingEnd:En};for(let l=0;l!==s;++l){const c=r[l].createInterpolant(null);a[l]=c,c.settings&&Object.assign(o,c.settings),c.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=du,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const n=this._clip.duration,r=e._clip.duration,s=r/n,a=n/r;e.warp(1,s,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,r=n.time,s=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,o[1]=r+i,l[0]=e/s,l[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const o=(e-r)*i;o<0||i===0?t=0:(this._startTime=null,t=i*o)}t*=this._updateTimeScale(e);const s=this._updateTime(t),a=this._updateWeight(e);if(a>0){const o=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case fl:for(let c=0,u=o.length;c!==u;++c)o[c].evaluate(s),l[c].accumulateAdditive(a);break;case Ba:default:for(let c=0,u=o.length;c!==u;++c)o[c].evaluate(s),l[c].accumulate(n,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,r=this._loopCount;const s=i===fu;if(e===0)return r===-1?n:s&&(r&1)===1?t-n:n;if(i===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),n>=t||n<0){const a=Math.floor(n/t);n-=t*a,r+=Math.abs(a);const o=this.repetitions-r;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(o===1){const l=e<0;this._setEndings(l,!l,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=n;if(s&&(r&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=xn,n.endingEnd=xn):(e?n.endingStart=this.zeroSlopeAtStart?xn:En:n.endingStart=Jr,t?n.endingEnd=this.zeroSlopeAtEnd?xn:En:n.endingEnd=Jr)}_scheduleFading(e,t,i){const n=this._mixer,r=n.time;let s=this._weightInterpolant;s===null&&(s=n._lendControlInterpolant(),this._weightInterpolant=s);const a=s.parameterPositions,o=s.sampleValues;return a[0]=r,o[0]=t,a[1]=r+e,o[1]=i,this}},Vg=new Float32Array(1),Hg=class extends gi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,s=e._propertyBindings,a=e._interpolants,o=i.uuid,l=this._bindingsByRootAndName;let c=l[o];c===void 0&&(c={},l[o]=c);for(let u=0;u!==r;++u){const A=n[u],h=A.name;let d=c[h];if(d!==void 0)++d.referenceCount,s[u]=d;else{if(d=s[u],d!==void 0){d._cacheIndex===null&&(++d.referenceCount,this._addInactiveBinding(d,o,h));continue}const p=t&&t._propertyBindings[u].binding.parsedPath;d=new Ad(ft.create(i,h,p),A.ValueTypeName,A.getValueSize()),++d.referenceCount,this._addInactiveBinding(d,o,h),s[u]=d}a[u].resultBuffer=d.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const a=s.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=n.length,n.push(e),s.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,a=s[r],o=a.knownActions,l=o[o.length-1],c=e._byClipCacheIndex;l._byClipCacheIndex=c,o[c]=l,o.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,A=(e._localRoot||this._root).uuid;delete u[A],o.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,r=this._bindings;let s=n[t];s===void 0&&(s={},n[t]=s),s[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,s=this._bindingsByRootAndName,a=s[n],o=t[t.length-1],l=e._cacheIndex;o._cacheIndex=l,t[l]=o,t.pop(),delete a[r],Object.keys(a).length===0&&delete s[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Ql(new Float32Array(2),new Float32Array(2),1,Vg),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const n=t||this._root,r=n.uuid;let s=typeof e=="string"?os.findByName(n,e):e;const a=s!==null?s.uuid:e,o=this._actionsByClip[a];let l=null;if(i===void 0&&(s!==null?i=s.blendMode:i=Ba),o!==void 0){const u=o.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;l=o.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;const c=new dd(this,s,t,i);return this._bindAction(c,l),this._addInactiveAction(c,a,r),c}existingAction(e,t){const i=t||this._root,n=i.uuid,r=typeof e=="string"?os.findByName(i,e):e,s=r?r.uuid:e,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(n,e,r,s);const a=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)a[l].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){const s=r.knownActions;for(let a=0,o=s.length;a!==o;++a){const l=s[a];this._deactivateAction(l);const c=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=c,t[c]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const r in i){const s=i[r].actionByRoot[t];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}const n=this._bindingsByRootAndName[t];if(n!==void 0)for(const r in n){const s=n[r];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}},Wg=class extends gl{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isRenderTarget3D=!0,this.depth=i,this.texture=new cs(null,e,t,i),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}},qg=class fd{constructor(t){this.value=t}clone(){return new fd(this.value.clone===void 0?this.value:this.value.clone())}},Xg=0,Yg=class extends gi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Xg++}),this.name="",this.usage=ba,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let i=0,n=t.length;i<n;i++){const r=Array.isArray(t[i])?t[i]:[t[i]];for(let s=0;s<r.length;s++)this.uniforms.push(r[s].clone())}return this}clone(){return new this.constructor().copy(this)}},Jg=class extends Ra{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},Kg=class{constructor(e,t,i,n,r,s=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=n,this.count=r,this.normalized=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},eh=new He,Zg=class{constructor(e,t,i=0,n=1/0){this.ray=new Ar(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):we("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return eh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eh),this}intersectObject(e,t=!0,i=[]){return ko(e,this,i,t),i.sort(th),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)ko(e[n],this,i,t);return i.sort(th),i}};function th(e,t){return e.distance-t.distance}function ko(e,t,i,n){let r=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(r=!1),r===!0&&n===!0){const s=e.children;for(let a=0,o=s.length;a<o;a++)ko(s[a],t,i,!0)}}var $g=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ce("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},jg=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},em=class{constructor(e=1,t=0,i=0){this.radius=e,this.theta=t,this.y=i}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}},pd=class{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};Vh=pd;Vh.prototype.isMatrix2=!0;var ih=new Z,tm=class{constructor(e=new Z(1/0,1/0),t=new Z(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ih.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ih).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},nh=new w,ea=new w,Kn=new w,Zn=new w,yo=new w,im=new w,nm=new w,rm=class{constructor(e=new w,t=new w){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){nh.subVectors(e,this.start),ea.subVectors(this.end,this.start);const i=ea.dot(ea);if(i===0)return 0;let n=ea.dot(nh)/i;return t&&(n=Ge(n,0,1)),n}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}distanceSqToLine3(e,t=im,i=nm){const n=10000000000000001e-32;let r,s;const a=this.start,o=e.start,l=this.end,c=e.end;Kn.subVectors(l,a),Zn.subVectors(c,o),yo.subVectors(a,o);const u=Kn.dot(Kn),A=Zn.dot(Zn),h=Zn.dot(yo);if(u<=n&&A<=n)return t.copy(a),i.copy(o),t.sub(i),t.dot(t);if(u<=n)r=0,s=h/A,s=Ge(s,0,1);else{const d=Kn.dot(yo);if(A<=n)s=0,r=Ge(-d/u,0,1);else{const p=Kn.dot(Zn),m=u*A-p*p;m!==0?r=Ge((p*h-d*A)/m,0,1):r=0,s=(p*r+h)/A,s<0?(s=0,r=Ge(-d/u,0,1)):s>1&&(s=1,r=Ge((p-d)/u,0,1))}}return t.copy(a).addScaledVector(Kn,r),i.copy(o).addScaledVector(Zn,s),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},rh=new w,sm=class extends lt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new Ke,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,a=1,o=32;s<o;s++,a++){const l=s/o*Math.PI*2,c=a/o*Math.PI*2;n.push(Math.cos(l),Math.sin(l),1,Math.cos(c),Math.sin(c),1)}i.setAttribute("position",new Ce(n,3));const r=new qt({fog:!1,toneMapped:!1});this.cone=new Si(i,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),rh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(rh),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Xi=new w,ta=new He,Eo=new He,am=class extends Si{constructor(e){const t=gd(e),i=new Ke,n=[],r=[];for(let l=0;l<t.length;l++){const c=t[l];c.parent&&c.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}i.setAttribute("position",new Ce(n,3)),i.setAttribute("color",new Ce(r,3));const s=new qt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,s),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const a=new ye(255),o=new ye(65280);this.setColors(a,o)}updateMatrixWorld(e){const t=this.bones,i=this.geometry,n=i.getAttribute("position");Eo.copy(this.root.matrixWorld).invert();for(let r=0,s=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(ta.multiplyMatrices(Eo,a.matrixWorld),Xi.setFromMatrixPosition(ta),n.setXYZ(s,Xi.x,Xi.y,Xi.z),ta.multiplyMatrices(Eo,a.parent.matrixWorld),Xi.setFromMatrixPosition(ta),n.setXYZ(s+1,Xi.x,Xi.y,Xi.z),s+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){const i=this.geometry.getAttribute("color");for(let n=0;n<i.count;n+=2)i.setXYZ(n,e.r,e.g,e.b),i.setXYZ(n+1,t.r,t.g,t.b);return i.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};function gd(e){const t=[];e.isBone===!0&&t.push(e);for(let i=0;i<e.children.length;i++)t.push(...gd(e.children[i]));return t}var om=class extends St{constructor(e,t,i){const n=new Dl(t,4,2),r=new rn({wireframe:!0,fog:!1,toneMapped:!1});super(n,r),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},lm=new w,sh=new ye,ah=new ye,cm=class extends lt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const n=new Rl(t);n.rotateY(Math.PI*.5),this.material=new rn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=n.getAttribute("position"),s=new Float32Array(r.count*3);n.setAttribute("color",new ut(s,3)),this.add(new St(n,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");sh.copy(this.light.color),ah.copy(this.light.groundColor);for(let i=0,n=t.count;i<n;i++){const r=i<n/2?sh:ah;t.setXYZ(i,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(lm.setFromMatrixPosition(this.light.matrixWorld).negate())}},hm=class extends Si{constructor(e=10,t=10,i=4473924,n=8947848){i=new ye(i),n=new ye(n);const r=t/2,s=e/t,a=e/2,o=[],l=[];for(let A=0,h=0,d=-a;A<=t;A++,d+=s){o.push(-a,0,d,a,0,d),o.push(d,0,-a,d,0,a);const p=A===r?i:n;p.toArray(l,h),h+=3,p.toArray(l,h),h+=3,p.toArray(l,h),h+=3,p.toArray(l,h),h+=3}const c=new Ke;c.setAttribute("position",new Ce(o,3)),c.setAttribute("color",new Ce(l,3));const u=new qt({vertexColors:!0,toneMapped:!1});super(c,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},um=class extends Si{constructor(e=10,t=16,i=8,n=64,r=4473924,s=8947848){r=new ye(r),s=new ye(s);const a=[],o=[];if(t>1)for(let u=0;u<t;u++){const A=u/t*(Math.PI*2),h=Math.sin(A)*e,d=Math.cos(A)*e;a.push(0,0,0),a.push(h,0,d);const p=u&1?r:s;o.push(p.r,p.g,p.b),o.push(p.r,p.g,p.b)}for(let u=0;u<i;u++){const A=u&1?r:s,h=e-e/i*u;for(let d=0;d<n;d++){let p=d/n*(Math.PI*2),m=Math.sin(p)*h,g=Math.cos(p)*h;a.push(m,0,g),o.push(A.r,A.g,A.b),p=(d+1)/n*(Math.PI*2),m=Math.sin(p)*h,g=Math.cos(p)*h,a.push(m,0,g),o.push(A.r,A.g,A.b)}}const l=new Ke;l.setAttribute("position",new Ce(a,3)),l.setAttribute("color",new Ce(o,3));const c=new qt({vertexColors:!0,toneMapped:!1});super(l,c),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},oh=new w,ia=new w,lh=new w,Am=class extends lt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let n=new Ke;n.setAttribute("position",new Ce([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new qt({fog:!1,toneMapped:!1});this.lightPlane=new tn(n,r),this.add(this.lightPlane),n=new Ke,n.setAttribute("position",new Ce([0,0,0,0,0,1],3)),this.targetLine=new tn(n,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),oh.setFromMatrixPosition(this.light.matrixWorld),ia.setFromMatrixPosition(this.light.target.matrixWorld),lh.subVectors(ia,oh),this.lightPlane.lookAt(ia),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ia),this.targetLine.scale.z=lh.length()}},na=new w,Et=new Pa,dm=class extends Si{constructor(e){const t=new Ke,i=new qt({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],r=[],s={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(d,p){o(d),o(p)}function o(d){n.push(0,0,0),r.push(0,0,0),s[d]===void 0&&(s[d]=[]),s[d].push(n.length/3-1)}t.setAttribute("position",new Ce(n,3)),t.setAttribute("color",new Ce(r,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();const l=new ye(16755200),c=new ye(16711680),u=new ye(43775),A=new ye(16777215),h=new ye(3355443);this.setColors(l,c,u,A,h)}setColors(e,t,i,n,r){const s=this.geometry.getAttribute("color");return s.setXYZ(0,e.r,e.g,e.b),s.setXYZ(1,e.r,e.g,e.b),s.setXYZ(2,e.r,e.g,e.b),s.setXYZ(3,e.r,e.g,e.b),s.setXYZ(4,e.r,e.g,e.b),s.setXYZ(5,e.r,e.g,e.b),s.setXYZ(6,e.r,e.g,e.b),s.setXYZ(7,e.r,e.g,e.b),s.setXYZ(8,e.r,e.g,e.b),s.setXYZ(9,e.r,e.g,e.b),s.setXYZ(10,e.r,e.g,e.b),s.setXYZ(11,e.r,e.g,e.b),s.setXYZ(12,e.r,e.g,e.b),s.setXYZ(13,e.r,e.g,e.b),s.setXYZ(14,e.r,e.g,e.b),s.setXYZ(15,e.r,e.g,e.b),s.setXYZ(16,e.r,e.g,e.b),s.setXYZ(17,e.r,e.g,e.b),s.setXYZ(18,e.r,e.g,e.b),s.setXYZ(19,e.r,e.g,e.b),s.setXYZ(20,e.r,e.g,e.b),s.setXYZ(21,e.r,e.g,e.b),s.setXYZ(22,e.r,e.g,e.b),s.setXYZ(23,e.r,e.g,e.b),s.setXYZ(24,t.r,t.g,t.b),s.setXYZ(25,t.r,t.g,t.b),s.setXYZ(26,t.r,t.g,t.b),s.setXYZ(27,t.r,t.g,t.b),s.setXYZ(28,t.r,t.g,t.b),s.setXYZ(29,t.r,t.g,t.b),s.setXYZ(30,t.r,t.g,t.b),s.setXYZ(31,t.r,t.g,t.b),s.setXYZ(32,i.r,i.g,i.b),s.setXYZ(33,i.r,i.g,i.b),s.setXYZ(34,i.r,i.g,i.b),s.setXYZ(35,i.r,i.g,i.b),s.setXYZ(36,i.r,i.g,i.b),s.setXYZ(37,i.r,i.g,i.b),s.setXYZ(38,n.r,n.g,n.b),s.setXYZ(39,n.r,n.g,n.b),s.setXYZ(40,r.r,r.g,r.b),s.setXYZ(41,r.r,r.g,r.b),s.setXYZ(42,r.r,r.g,r.b),s.setXYZ(43,r.r,r.g,r.b),s.setXYZ(44,r.r,r.g,r.b),s.setXYZ(45,r.r,r.g,r.b),s.setXYZ(46,r.r,r.g,r.b),s.setXYZ(47,r.r,r.g,r.b),s.setXYZ(48,r.r,r.g,r.b),s.setXYZ(49,r.r,r.g,r.b),s.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,i=1,n=1;let r,s;if(Et.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,s=0;else if(this.camera.coordinateSystem===2e3)r=-1,s=1;else if(this.camera.coordinateSystem===2001)r=0,s=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);It("c",t,e,Et,0,0,r),It("t",t,e,Et,0,0,s),It("n1",t,e,Et,-i,-n,r),It("n2",t,e,Et,i,-n,r),It("n3",t,e,Et,-i,n,r),It("n4",t,e,Et,i,n,r),It("f1",t,e,Et,-i,-n,s),It("f2",t,e,Et,i,-n,s),It("f3",t,e,Et,-i,n,s),It("f4",t,e,Et,i,n,s),It("u1",t,e,Et,i*.7,n*1.1,r),It("u2",t,e,Et,-i*.7,n*1.1,r),It("u3",t,e,Et,0,n*2,r),It("cf1",t,e,Et,-i,0,s),It("cf2",t,e,Et,i,0,s),It("cf3",t,e,Et,0,-n,s),It("cf4",t,e,Et,0,n,s),It("cn1",t,e,Et,-i,0,r),It("cn2",t,e,Et,i,0,r),It("cn3",t,e,Et,0,-n,r),It("cn4",t,e,Et,0,n,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function It(e,t,i,n,r,s,a){na.set(r,s,a).unproject(n);const o=t[e];if(o!==void 0){const l=i.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],na.x,na.y,na.z)}}var ra=new Ot,fm=class extends Si{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),r=new Ke;r.setIndex(new ut(i,1)),r.setAttribute("position",new ut(n,3)),super(r,new qt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&ra.setFromObject(this.object),ra.isEmpty())return;const e=ra.min,t=ra.max,i=this.geometry.attributes.position,n=i.array;n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=e.x,n[4]=t.y,n[5]=t.z,n[6]=e.x,n[7]=e.y,n[8]=t.z,n[9]=t.x,n[10]=e.y,n[11]=t.z,n[12]=t.x,n[13]=t.y,n[14]=e.z,n[15]=e.x,n[16]=t.y,n[17]=e.z,n[18]=e.x,n[19]=e.y,n[20]=e.z,n[21]=t.x,n[22]=e.y,n[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},pm=class extends Si{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ke;r.setIndex(new ut(i,1)),r.setAttribute("position",new Ce(n,3)),super(r,new qt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},gm=class extends tn{constructor(e,t=1,i=16776960){const n=i,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],s=new Ke;s.setAttribute("position",new Ce(r,3)),s.computeBoundingSphere(),super(s,new qt({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],o=new Ke;o.setAttribute("position",new Ce(a,3)),o.computeBoundingSphere(),this.add(new St(o,new rn({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},ch=new w,sa,xo,mm=class extends lt{constructor(e=new w(0,0,1),t=new w(0,0,0),i=1,n=16776960,r=i*.2,s=r*.2){super(),this.type="ArrowHelper",sa===void 0&&(sa=new Ke,sa.setAttribute("position",new Ce([0,0,0,0,1,0],3)),xo=new Cl(.5,1,5,1),xo.translate(0,-.5,0)),this.position.copy(t),this.line=new tn(sa,new qt({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new St(xo,new rn({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{ch.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(ch,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},vm=class extends Si{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new Ke;n.setAttribute("position",new Ce(t,3)),n.setAttribute("color",new Ce(i,3));const r=new qt({vertexColors:!0,toneMapped:!1});super(n,r),this.type="AxesHelper"}setColors(e,t,i){const n=new ye,r=this.geometry.attributes.color.array;return n.set(e),n.toArray(r,0),n.toArray(r,3),n.set(t),n.toArray(r,6),n.toArray(r,9),n.set(i),n.toArray(r,12),n.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},_m=class{constructor(){this.type="ShapePath",this.color=new ye,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ea,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,r,s){return this.currentPath.bezierCurveTo(e,t,i,n,r,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const f=[];for(let v=0,E=g.length;v<E;v++){const _=g[v],S=new Mn;S.curves=_.curves,f.push(S)}return f}function i(g,f){const v=f.length;let E=!1;for(let _=v-1,S=0;S<v;_=S++){let M=f[_],T=f[S],y=T.x-M.x,C=T.y-M.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(M=f[S],y=-y,T=f[_],C=-C),g.y<M.y||g.y>T.y)continue;if(g.y===M.y){if(g.x===M.x)return!0}else{const L=C*(g.x-M.x)-y*(g.y-M.y);if(L===0)return!0;if(L<0)continue;E=!E}}else{if(g.y!==M.y)continue;if(T.x<=g.x&&g.x<=M.x||M.x<=g.x&&g.x<=T.x)return!0}}return E}const n=Ui.isClockWise,r=this.subPaths;if(r.length===0)return[];let s,a,o;const l=[];if(r.length===1)return a=r[0],o=new Mn,o.curves=a.curves,l.push(o),l;let c=!n(r[0].getPoints());c=e?!c:c;const u=[],A=[];let h=[],d=0,p;A[d]=void 0,h[d]=[];for(let g=0,f=r.length;g<f;g++)a=r[g],p=a.getPoints(),s=n(p),s=e?!s:s,s?(!c&&A[d]&&d++,A[d]={s:new Mn,p},A[d].s.curves=a.curves,c&&d++,h[d]=[]):h[d].push({h:a,p:p[0]});if(!A[0])return t(r);if(A.length>1){let g=!1,f=0;for(let v=0,E=A.length;v<E;v++)u[v]=[];for(let v=0,E=A.length;v<E;v++){const _=h[v];for(let S=0;S<_.length;S++){const M=_[S];let T=!0;for(let y=0;y<A.length;y++)i(M.p,A[y].p)&&(v!==y&&f++,T?(T=!1,u[y].push(M)):g=!0);T&&u[v].push(M)}}f>0&&g===!1&&(h=u)}let m;for(let g=0,f=A.length;g<f;g++){o=A[g].s,l.push(o),m=h[g];for(let v=0,E=m.length;v<E;v++)o.holes.push(m[v].h)}return l}},ym=class extends gi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ce("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Em(e,t){const i=e.image&&e.image.width?e.image.width/e.image.height:1;return i>t?(e.repeat.x=1,e.repeat.y=i/t,e.offset.x=0,e.offset.y=(1-e.repeat.y)/2):(e.repeat.x=t/i,e.repeat.y=1,e.offset.x=(1-e.repeat.x)/2,e.offset.y=0),e}function xm(e,t){const i=e.image&&e.image.width?e.image.width/e.image.height:1;return i>t?(e.repeat.x=t/i,e.repeat.y=1,e.offset.x=(1-e.repeat.x)/2,e.offset.y=0):(e.repeat.x=1,e.repeat.y=i/t,e.offset.x=0,e.offset.y=(1-e.repeat.y)/2),e}function Im(e){return e.repeat.x=1,e.repeat.y=1,e.offset.x=0,e.offset.y=0,e}function zo(e,t,i,n){const r=Cm(n);switch(i){case Zh:return e*t;case Ki:return e*t/r.components*r.byteLength;case Ca:return e*t/r.components*r.byteLength;case Ci:return e*t*2/r.components*r.byteLength;case tl:return e*t*2/r.components*r.byteLength;case Vr:return e*t*3/r.components*r.byteLength;case Qt:return e*t*4/r.components*r.byteLength;case il:return e*t*4/r.components*r.byteLength;case fa:case Hr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case $h:case Wr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case jh:case pa:return Math.max(e,16)*Math.max(t,8)/4;case nl:case qr:return Math.max(e,8)*Math.max(t,8)/2;case rl:case Ma:case sl:case al:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Sa:case ol:case ll:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case sr:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case eu:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case tu:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case iu:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Fr:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case nu:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ru:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case su:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case au:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ou:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case lu:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case cu:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case hu:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case uu:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Xr:case Au:case cl:return Math.ceil(e/4)*Math.ceil(t/4)*16;case hl:case ul:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Al:case dl:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Cm(e){switch(e){case Ye:case Yh:return{byteLength:1,components:1};case Ia:case Jh:case Zt:return{byteLength:2,components:1};case Jo:case Ko:return{byteLength:2,components:4};case Fi:case Kh:case ti:return{byteLength:4,components:1};case $o:case jo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}var Mm=class{static contain(e,t){return Em(e,t)}static cover(e,t){return xm(e,t)}static fill(e){return Im(e)}static getByteLength(e,t,i,n){return zo(e,t,i,n)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");var Y0=Gd({ACESFilmicToneMapping:()=>4,AddEquation:()=>100,AddOperation:()=>2,AdditiveAnimationBlendMode:()=>fl,AdditiveBlending:()=>2,AgXToneMapping:()=>6,AlphaFormat:()=>Zh,AlwaysCompare:()=>519,AlwaysDepth:()=>1,AlwaysStencilFunc:()=>519,AmbientLight:()=>td,AnimationAction:()=>dd,AnimationClip:()=>os,AnimationLoader:()=>fg,AnimationMixer:()=>Hg,AnimationObjectGroup:()=>zg,AnimationUtils:()=>hg,ArcCurve:()=>nA,ArrayCamera:()=>cd,ArrowHelper:()=>mm,AttachedBindMode:()=>Xh,Audio:()=>ud,AudioAnalyser:()=>Dg,AudioContext:()=>Vl,AudioListener:()=>wg,AudioLoader:()=>Mg,AxesHelper:()=>vm,BackSide:()=>1,BasicDepthPacking:()=>pu,BasicShadowMap:()=>0,BatchedMesh:()=>Ou,BezierInterpolant:()=>YA,Bone:()=>yl,BooleanKeyframeTrack:()=>bn,Box2:()=>tm,Box3:()=>Ot,Box3Helper:()=>pm,BoxGeometry:()=>us,BoxHelper:()=>fm,BufferAttribute:()=>ut,BufferGeometry:()=>Ke,BufferGeometryLoader:()=>od,ByteType:()=>Yh,Cache:()=>Mi,Camera:()=>Pa,CameraHelper:()=>dm,CanvasTexture:()=>wp,CapsuleGeometry:()=>Xu,CatmullRomCurve3:()=>rA,CineonToneMapping:()=>3,CircleGeometry:()=>Ju,ClampToEdgeWrapping:()=>$t,Clock:()=>$g,Color:()=>ye,ColorKeyframeTrack:()=>Ol,ColorManagement:()=>nt,Compatibility:()=>_f,CompressedArrayTexture:()=>Vu,CompressedCubeTexture:()=>Hu,CompressedTexture:()=>fr,CompressedTextureLoader:()=>pg,ConeGeometry:()=>Cl,ConstantAlphaFactor:()=>213,ConstantColorFactor:()=>211,Controls:()=>ym,CubeCamera:()=>ld,CubeDepthTexture:()=>Wu,CubeReflectionMapping:()=>301,CubeRefractionMapping:()=>302,CubeTexture:()=>hs,CubeTextureLoader:()=>gg,CubeUVReflectionMapping:()=>306,CubicBezierCurve:()=>Sl,CubicBezierCurve3:()=>sA,CubicInterpolant:()=>qA,CullFaceBack:()=>1,CullFaceFront:()=>2,CullFaceFrontBack:()=>3,CullFaceNone:()=>0,Curve:()=>mi,CurvePath:()=>oA,CustomBlending:()=>5,CustomToneMapping:()=>5,CylinderGeometry:()=>Il,Cylindrical:()=>em,Data3DTexture:()=>cs,DataArrayTexture:()=>wa,DataTexture:()=>ai,DataTextureLoader:()=>mg,DataUtils:()=>ip,DecrementStencilOp:()=>tf,DecrementWrapStencilOp:()=>rf,DefaultLoadingManager:()=>KA,DepthFormat:()=>or,DepthStencilFormat:()=>el,DepthTexture:()=>Sn,DetachedBindMode:()=>Vd,DirectionalLight:()=>ed,DirectionalLightHelper:()=>Am,DiscreteInterpolant:()=>XA,DodecahedronGeometry:()=>eA,DoubleSide:()=>2,DstAlphaFactor:()=>206,DstColorFactor:()=>208,DynamicCopyUsage:()=>Af,DynamicDrawUsage:()=>af,DynamicReadUsage:()=>cf,EdgesGeometry:()=>iA,EllipseCurve:()=>Da,EqualCompare:()=>514,EqualDepth:()=>4,EqualStencilFunc:()=>514,EquirectangularReflectionMapping:()=>303,EquirectangularRefractionMapping:()=>304,Euler:()=>Qi,EventDispatcher:()=>gi,ExternalTexture:()=>xl,ExtrudeGeometry:()=>dA,FileLoader:()=>oi,Float16BufferAttribute:()=>cp,Float32BufferAttribute:()=>Ce,FloatType:()=>ti,Fog:()=>Mu,FogExp2:()=>Iu,FramebufferTexture:()=>bp,FrontSide:()=>0,Frustum:()=>dr,FrustumArray:()=>Fu,GLBufferAttribute:()=>Kg,GLSL1:()=>"100",GLSL3:()=>ff,GreaterCompare:()=>516,GreaterDepth:()=>6,GreaterEqualCompare:()=>518,GreaterEqualDepth:()=>5,GreaterEqualStencilFunc:()=>518,GreaterStencilFunc:()=>516,GridHelper:()=>hm,Group:()=>rr,HTMLTexture:()=>Tp,HalfFloatType:()=>Zt,HemisphereLight:()=>ZA,HemisphereLightHelper:()=>cm,IcosahedronGeometry:()=>pA,ImageBitmapLoader:()=>Cg,ImageLoader:()=>ls,ImageUtils:()=>_u,IncrementStencilOp:()=>ef,IncrementWrapStencilOp:()=>nf,InstancedBufferAttribute:()=>cr,InstancedBufferGeometry:()=>ad,InstancedInterleavedBuffer:()=>Jg,InstancedMesh:()=>Nu,Int16BufferAttribute:()=>op,Int32BufferAttribute:()=>lp,Int8BufferAttribute:()=>rp,IntType:()=>Kh,InterleavedBuffer:()=>Ra,InterleavedBufferAttribute:()=>ts,Interpolant:()=>gr,InterpolateBezier:()=>Uo,InterpolateDiscrete:()=>Yr,InterpolateLinear:()=>ga,InterpolateSmooth:()=>la,InterpolationSamplingMode:()=>vf,InterpolationSamplingType:()=>mf,InvertStencilOp:()=>sf,KeepStencilOp:()=>ca,KeyframeTrack:()=>ci,LOD:()=>Du,LatheGeometry:()=>mA,Layers:()=>Ta,LessCompare:()=>513,LessDepth:()=>2,LessEqualCompare:()=>515,LessEqualDepth:()=>3,LessEqualStencilFunc:()=>515,LessStencilFunc:()=>513,Light:()=>sn,LightProbe:()=>nd,Line:()=>tn,Line3:()=>rm,LineBasicMaterial:()=>qt,LineCurve:()=>Bl,LineCurve3:()=>aA,LineDashedMaterial:()=>HA,LineLoop:()=>Gu,LineSegments:()=>Si,LinearFilter:()=>gt,LinearInterpolant:()=>Ql,LinearMipMapLinearFilter:()=>Xd,LinearMipMapNearestFilter:()=>qd,LinearMipmapLinearFilter:()=>nn,LinearMipmapNearestFilter:()=>Yo,LinearSRGBColorSpace:()=>Kr,LinearToneMapping:()=>1,LinearTransfer:()=>Zr,Loader:()=>Xt,LoaderUtils:()=>Go,LoadingManager:()=>Gl,LoopOnce:()=>Jd,LoopPingPong:()=>fu,LoopRepeat:()=>du,MOUSE:()=>kd,Material:()=>Gt,MaterialBlending:()=>6,MaterialLoader:()=>rd,MathUtils:()=>zf,Matrix2:()=>pd,Matrix3:()=>We,Matrix4:()=>He,MaxEquation:()=>104,Mesh:()=>St,MeshBasicMaterial:()=>rn,MeshDepthMaterial:()=>Ul,MeshDistanceMaterial:()=>Nl,MeshLambertMaterial:()=>zA,MeshMatcapMaterial:()=>VA,MeshNormalMaterial:()=>kA,MeshPhongMaterial:()=>OA,MeshPhysicalMaterial:()=>QA,MeshStandardMaterial:()=>Pl,MeshToonMaterial:()=>GA,MinEquation:()=>103,MirroredRepeatWrapping:()=>zr,MixOperation:()=>1,MultiplyBlending:()=>4,MultiplyOperation:()=>0,NearestFilter:()=>Ct,NearestMipMapLinearFilter:()=>Wd,NearestMipMapNearestFilter:()=>Hd,NearestMipmapLinearFilter:()=>Xo,NearestMipmapNearestFilter:()=>xa,NeutralToneMapping:()=>7,NeverCompare:()=>512,NeverDepth:()=>0,NeverStencilFunc:()=>512,NoBlending:()=>0,NoColorSpace:()=>"",NoNormalPacking:()=>"",NoToneMapping:()=>0,NormalAnimationBlendMode:()=>Ba,NormalBlending:()=>1,NormalGAPacking:()=>"ga",NormalRGPacking:()=>"rg",NotEqualCompare:()=>517,NotEqualDepth:()=>7,NotEqualStencilFunc:()=>517,NumberKeyframeTrack:()=>ss,Object3D:()=>lt,ObjectLoader:()=>xg,ObjectSpaceNormalMap:()=>1,OctahedronGeometry:()=>Rl,OneFactor:()=>201,OneMinusConstantAlphaFactor:()=>214,OneMinusConstantColorFactor:()=>212,OneMinusDstAlphaFactor:()=>207,OneMinusDstColorFactor:()=>209,OneMinusSrcAlphaFactor:()=>205,OneMinusSrcColorFactor:()=>203,OrthographicCamera:()=>ds,PCFShadowMap:()=>1,PCFSoftShadowMap:()=>2,PMREMGenerator:()=>Vo,Path:()=>Ea,PerspectiveCamera:()=>Rt,Plane:()=>Yi,PlaneGeometry:()=>La,PlaneHelper:()=>gm,PointLight:()=>jA,PointLightHelper:()=>om,Points:()=>ku,PointsMaterial:()=>El,PolarGridHelper:()=>um,PolyhedronGeometry:()=>pr,PositionalAudio:()=>Rg,PropertyBinding:()=>ft,PropertyMixer:()=>Ad,QuadraticBezierCurve:()=>bl,QuadraticBezierCurve3:()=>wl,Quaternion:()=>Wt,QuaternionKeyframeTrack:()=>As,QuaternionLinearInterpolant:()=>JA,R11_EAC_Format:()=>sl,RED_GREEN_RGTC2_Format:()=>Al,RED_RGTC1_Format:()=>hl,REVISION:()=>"184",RG11_EAC_Format:()=>ol,RGBADepthPacking:()=>Kd,RGBAFormat:()=>Qt,RGBAIntegerFormat:()=>il,RGBA_ASTC_10x10_Format:()=>cu,RGBA_ASTC_10x5_Format:()=>au,RGBA_ASTC_10x6_Format:()=>ou,RGBA_ASTC_10x8_Format:()=>lu,RGBA_ASTC_12x10_Format:()=>hu,RGBA_ASTC_12x12_Format:()=>uu,RGBA_ASTC_4x4_Format:()=>sr,RGBA_ASTC_5x4_Format:()=>eu,RGBA_ASTC_5x5_Format:()=>tu,RGBA_ASTC_6x5_Format:()=>iu,RGBA_ASTC_6x6_Format:()=>Fr,RGBA_ASTC_8x5_Format:()=>nu,RGBA_ASTC_8x6_Format:()=>ru,RGBA_ASTC_8x8_Format:()=>su,RGBA_BPTC_Format:()=>Xr,RGBA_ETC2_EAC_Format:()=>Sa,RGBA_PVRTC_2BPPV1_Format:()=>pa,RGBA_PVRTC_4BPPV1_Format:()=>qr,RGBA_S3TC_DXT1_Format:()=>Hr,RGBA_S3TC_DXT3_Format:()=>$h,RGBA_S3TC_DXT5_Format:()=>Wr,RGBDepthPacking:()=>Zd,RGBFormat:()=>Vr,RGBIntegerFormat:()=>Yd,RGB_BPTC_SIGNED_Format:()=>Au,RGB_BPTC_UNSIGNED_Format:()=>cl,RGB_ETC1_Format:()=>rl,RGB_ETC2_Format:()=>Ma,RGB_PVRTC_2BPPV1_Format:()=>jh,RGB_PVRTC_4BPPV1_Format:()=>nl,RGB_S3TC_DXT1_Format:()=>fa,RGDepthPacking:()=>$d,RGFormat:()=>Ci,RGIntegerFormat:()=>tl,RawShaderMaterial:()=>Ll,Ray:()=>Ar,Raycaster:()=>Zg,RectAreaLight:()=>id,RedFormat:()=>Ki,RedIntegerFormat:()=>Ca,ReinhardToneMapping:()=>2,RenderTarget:()=>gl,RenderTarget3D:()=>Wg,RepeatWrapping:()=>kr,ReplaceStencilOp:()=>jd,ReverseSubtractEquation:()=>102,RingGeometry:()=>EA,SIGNED_R11_EAC_Format:()=>al,SIGNED_RED_GREEN_RGTC2_Format:()=>dl,SIGNED_RED_RGTC1_Format:()=>ul,SIGNED_RG11_EAC_Format:()=>ll,SRGBColorSpace:()=>Ft,SRGBTransfer:()=>$r,Scene:()=>Bu,ShaderChunk:()=>$e,ShaderLib:()=>pi,ShaderMaterial:()=>li,ShadowMaterial:()=>UA,Shape:()=>Mn,ShapeGeometry:()=>IA,ShapePath:()=>_m,ShapeUtils:()=>Ui,ShortType:()=>Jh,Skeleton:()=>Pu,SkeletonHelper:()=>am,SkinnedMesh:()=>Lu,Source:()=>Zi,Sphere:()=>Dt,SphereGeometry:()=>Dl,Spherical:()=>jg,SphericalHarmonics3:()=>zl,SplineCurve:()=>Tl,SpotLight:()=>$A,SpotLightHelper:()=>sm,Sprite:()=>Ru,SpriteMaterial:()=>_l,SrcAlphaFactor:()=>204,SrcAlphaSaturateFactor:()=>210,SrcColorFactor:()=>202,StaticCopyUsage:()=>uf,StaticDrawUsage:()=>ba,StaticReadUsage:()=>lf,StereoCamera:()=>Sg,StreamCopyUsage:()=>df,StreamDrawUsage:()=>of,StreamReadUsage:()=>hf,StringKeyframeTrack:()=>wn,SubtractEquation:()=>101,SubtractiveBlending:()=>3,TOUCH:()=>zd,TangentSpaceNormalMap:()=>0,TetrahedronGeometry:()=>SA,Texture:()=>wt,TextureLoader:()=>vg,TextureUtils:()=>Mm,Timer:()=>hd,TimestampQuery:()=>gf,TorusGeometry:()=>bA,TorusKnotGeometry:()=>TA,Triangle:()=>Ji,TriangleFanDrawMode:()=>2,TriangleStripDrawMode:()=>1,TrianglesDrawMode:()=>0,TubeGeometry:()=>DA,UVMapping:()=>300,Uint16BufferAttribute:()=>ml,Uint32BufferAttribute:()=>vl,Uint8BufferAttribute:()=>sp,Uint8ClampedBufferAttribute:()=>ap,Uniform:()=>qg,UniformsGroup:()=>Yg,UniformsLib:()=>pe,UniformsUtils:()=>FA,UnsignedByteType:()=>Ye,UnsignedInt101111Type:()=>jo,UnsignedInt248Type:()=>Zo,UnsignedInt5999Type:()=>$o,UnsignedIntType:()=>Fi,UnsignedShort4444Type:()=>Jo,UnsignedShort5551Type:()=>Ko,UnsignedShortType:()=>Ia,VSMShadowMap:()=>3,Vector2:()=>Z,Vector3:()=>w,Vector4:()=>ht,VectorKeyframeTrack:()=>as,VideoFrameTexture:()=>Bp,VideoTexture:()=>zu,WebGL3DRenderTarget:()=>Xf,WebGLArrayRenderTarget:()=>qf,WebGLCoordinateSystem:()=>ji,WebGLCubeRenderTarget:()=>ql,WebGLRenderTarget:()=>ni,WebGLRenderer:()=>O0,WebGLUtils:()=>Id,WebGPUCoordinateSystem:()=>pf,WebXRController:()=>Aa,WireframeGeometry:()=>PA,WrapAroundEnding:()=>Jr,ZeroCurvatureEnding:()=>En,ZeroFactor:()=>200,ZeroSlopeEnding:()=>xn,ZeroStencilOp:()=>0,createCanvasElement:()=>mu,error:()=>we,getConsoleFunction:()=>If,log:()=>es,setConsoleFunction:()=>xf,warn:()=>ce,warnOnce:()=>ma});function md(){let e=null,t=!1,i=null,n=null;function r(s,a){i(s,a),n=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&i!==null&&e!==null&&(n=e.requestAnimationFrame(r),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function Sm(e){const t=new WeakMap;function i(o,l){const c=o.array,u=o.usage,A=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:A}}function n(o,l,c){const u=l.array,A=l.updateRanges;if(e.bindBuffer(c,o),A.length===0)e.bufferSubData(c,0,u);else{A.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<A.length;d++){const p=A[h],m=A[d];m.start<=p.start+p.count+1?p.count=Math.max(p.count,m.start+m.count-p.start):(++h,A[h]=m)}A.length=h+1;for(let d=0,p=A.length;d<p;d++){const m=A[d];e.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var $e={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},pe={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new w},probesMax:{value:new w},probesResolution:{value:new w}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},pi={basic:{uniforms:Vt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Vt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Vt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Vt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Vt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ye(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Vt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Vt([pe.points,pe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Vt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Vt([pe.common,pe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Vt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Vt([pe.sprite,pe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Vt([pe.common,pe.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Vt([pe.lights,pe.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};pi.physical={uniforms:Vt([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var aa={r:0,b:0,g:0},Bm=new He,vd=new We;vd.set(-1,0,0,0,1,0,0,0,1);function bm(e,t,i,n,r,s){const a=new ye(0);let o=r===!0?0:1,l,c,u=null,A=0,h=null;function d(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const _=v.backgroundBlurriness>0;E=t.get(E,_)}return E}function p(v){let E=!1;const _=d(v);_===null?g(a,o):_&&_.isColor&&(g(_,1),E=!0);const S=e.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(v,E){const _=d(E);_&&(_.isCubeTexture||_.mapping===306)?(c===void 0&&(c=new St(new us(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:ur(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(vd),c.material.toneMapped=nt.getTransfer(_.colorSpace)!==$r,(u!==_||A!==_.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,u=_,A=_.version,h=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new St(new La(2,2),new li({name:"BackgroundMaterial",uniforms:ur(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=nt.getTransfer(_.colorSpace)!==$r,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||A!==_.version||h!==e.toneMapping)&&(l.material.needsUpdate=!0,u=_,A=_.version,h=e.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,E){v.getRGB(aa,NA(e)),i.buffers.color.setClear(aa.r,aa.g,aa.b,E,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:m,dispose:f}}function wm(e,t){const i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(b,F,H,U,k){let G=!1;const Q=A(b,U,H,F);s!==Q&&(s=Q,c(s.object)),G=d(b,U,H,k),G&&p(b,U,H,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,_(b,F,H,U),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function c(b){return e.bindVertexArray(b)}function u(b){return e.deleteVertexArray(b)}function A(b,F,H,U){const k=U.wireframe===!0;let G=n[F.id];G===void 0&&(G={},n[F.id]=G);const Q=b.isInstancedMesh===!0?b.id:0;let Y=G[Q];Y===void 0&&(Y={},G[Q]=Y);let ee=Y[H.id];ee===void 0&&(ee={},Y[H.id]=ee);let ie=ee[k];return ie===void 0&&(ie=h(l()),ee[k]=ie),ie}function h(b){const F=[],H=[],U=[];for(let k=0;k<i;k++)F[k]=0,H[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:U,object:b,attributes:{},index:null}}function d(b,F,H,U){const k=s.attributes,G=F.attributes;let Q=0;const Y=H.getAttributes();for(const ee in Y)if(Y[ee].location>=0){const ie=k[ee];let me=G[ee];if(me===void 0&&(ee==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),ee==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),ie===void 0||ie.attribute!==me||me&&ie.data!==me.data)return!0;Q++}return s.attributesNum!==Q||s.index!==U}function p(b,F,H,U){const k={},G=F.attributes;let Q=0;const Y=H.getAttributes();for(const ee in Y)if(Y[ee].location>=0){let ie=G[ee];ie===void 0&&(ee==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),ee==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor));const me={};me.attribute=ie,ie&&ie.data&&(me.data=ie.data),k[ee]=me,Q++}s.attributes=k,s.attributesNum=Q,s.index=U}function m(){const b=s.newAttributes;for(let F=0,H=b.length;F<H;F++)b[F]=0}function g(b){f(b,0)}function f(b,F){const H=s.newAttributes,U=s.enabledAttributes,k=s.attributeDivisors;H[b]=1,U[b]===0&&(e.enableVertexAttribArray(b),U[b]=1),k[b]!==F&&(e.vertexAttribDivisor(b,F),k[b]=F)}function v(){const b=s.newAttributes,F=s.enabledAttributes;for(let H=0,U=F.length;H<U;H++)F[H]!==b[H]&&(e.disableVertexAttribArray(H),F[H]=0)}function E(b,F,H,U,k,G,Q){Q===!0?e.vertexAttribIPointer(b,F,H,k,G):e.vertexAttribPointer(b,F,H,U,k,G)}function _(b,F,H,U){m();const k=U.attributes,G=H.getAttributes(),Q=F.defaultAttributeValues;for(const Y in G){const ee=G[Y];if(ee.location>=0){let ie=k[Y];if(ie===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),ie!==void 0){const me=ie.normalized,Ie=ie.itemSize,Xe=t.get(ie);if(Xe===void 0)continue;const Ze=Xe.buffer,X=Xe.type,Ae=Xe.bytesPerElement,Te=X===e.INT||X===e.UNSIGNED_INT||ie.gpuType===1013;if(ie.isInterleavedBufferAttribute){const ue=ie.data,Ue=ue.stride,ke=ie.offset;if(ue.isInstancedInterleavedBuffer){for(let De=0;De<ee.locationSize;De++)f(ee.location+De,ue.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let De=0;De<ee.locationSize;De++)g(ee.location+De);e.bindBuffer(e.ARRAY_BUFFER,Ze);for(let De=0;De<ee.locationSize;De++)E(ee.location+De,Ie/ee.locationSize,X,me,Ue*Ae,(ke+Ie/ee.locationSize*De)*Ae,Te)}else{if(ie.isInstancedBufferAttribute){for(let ue=0;ue<ee.locationSize;ue++)f(ee.location+ue,ie.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ue=0;ue<ee.locationSize;ue++)g(ee.location+ue);e.bindBuffer(e.ARRAY_BUFFER,Ze);for(let ue=0;ue<ee.locationSize;ue++)E(ee.location+ue,Ie/ee.locationSize,X,me,Ie*Ae,Ie/ee.locationSize*ue*Ae,Te)}}else if(Q!==void 0){const me=Q[Y];if(me!==void 0)switch(me.length){case 2:e.vertexAttrib2fv(ee.location,me);break;case 3:e.vertexAttrib3fv(ee.location,me);break;case 4:e.vertexAttrib4fv(ee.location,me);break;default:e.vertexAttrib1fv(ee.location,me)}}}}v()}function S(){C();for(const b in n){const F=n[b];for(const H in F){const U=F[H];for(const k in U){const G=U[k];for(const Q in G)u(G[Q].object),delete G[Q];delete U[k]}}delete n[b]}}function M(b){if(n[b.id]===void 0)return;const F=n[b.id];for(const H in F){const U=F[H];for(const k in U){const G=U[k];for(const Q in G)u(G[Q].object),delete G[Q];delete U[k]}}delete n[b.id]}function T(b){for(const F in n){const H=n[F];for(const U in H){const k=H[U];if(k[b.id]===void 0)continue;const G=k[b.id];for(const Q in G)u(G[Q].object),delete G[Q];delete k[b.id]}}}function y(b){for(const F in n){const H=n[F],U=b.isInstancedMesh===!0?b.id:0,k=H[U];if(k!==void 0){for(const G in k){const Q=k[G];for(const Y in Q)u(Q[Y].object),delete Q[Y];delete k[G]}delete H[U],Object.keys(H).length===0&&delete n[F]}}}function C(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:T,initAttributes:m,enableAttribute:g,disableUnusedAttributes:v}}function Tm(e,t,i){let n;function r(l){n=l}function s(l,c){e.drawArrays(n,l,c),i.update(c,n,1)}function a(l,c,u){u!==0&&(e.drawArraysInstanced(n,l,c,u),i.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let A=0;for(let h=0;h<u;h++)A+=c[h];i.update(A,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Rm(e,t,i,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==1023&&n.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const y=T===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==1009&&n.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==1015&&!y)}function l(T){if(T==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp";const u=l(c);u!==c&&(ce("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const A=i.logarithmicDepthBuffer===!0,h=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&h===!1&&ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),E=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),M=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:A,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:_,maxSamples:S,samples:M}}function Dm(e){const t=this;let i=null,n=0,r=!1,s=!1;const a=new Yi,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(A,h){const d=A.length!==0||h||n!==0||r;return r=h,n=A.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(A,h){i=u(A,h,0)},this.setState=function(A,h,d){const p=A.clippingPlanes,m=A.clipIntersection,g=A.clipShadows,f=e.get(A);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{const v=s?0:n,E=v*4;let _=f.clippingState||null;l.value=_,_=u(p,h,E,d);for(let S=0;S!==E;++S)_[S]=i[S];f.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(A,h,d,p){const m=A!==null?A.length:0;let g=null;if(m!==0){if(g=l.value,p!==!0||g===null){const f=d+m*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<f)&&(g=new Float32Array(f));for(let E=0,_=d;E!==m;++E,_+=4)a.copy(A[E]).applyMatrix4(v,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,g}}var $i=4,hh=[.125,.215,.35,.446,.526,.582],yn=20,Lm=256,Rr=new ds,uh=new ye,Io=null,Co=0,Mo=0,So=!1,Pm=new w,Vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){const{size:s=256,position:a=Pm}=r;Io=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,n,o,a),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Io,Co,Mo),this._renderer.xr.enabled=So,e.scissorTest=!1,$n(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget(),Co=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gt,minFilter:gt,generateMipmaps:!1,type:Zt,format:Qt,colorSpace:Kr,depthBuffer:!1},n=Ah(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Um(r)),this._blurMaterial=Fm(r,e,t),this._ggxMaterial=Nm(r,e,t)}return n}_compileMaterial(e){const t=new St(new Ke,e);this._renderer.compile(t,Rr)}_sceneToCubeUV(e,t,i,n,r){const s=new Rt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(uh),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(n),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new us,new rn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,h=A.material;let d=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,d=!0):(h.color.copy(uh),d=!0);for(let m=0;m<6;m++){const g=m%3;g===0?(s.up.set(0,a[m],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[m],r.y,r.z)):g===1?(s.up.set(0,0,a[m]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[m],r.z)):(s.up.set(0,a[m],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[m]));const f=this._cubeSize;$n(n,g*f,m>2?f:0,f,f),l.setRenderTarget(n),d&&l.render(A,s),l.render(e,s)}l.toneMapping=u,l.autoClear=c,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===301||e.mapping===302;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dh());const r=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=e;const o=this._cubeSize;$n(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,Rr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const n=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const o=s.uniforms,l=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c)*(0+l*1.25),{_lodMax:A}=this,h=this._sizeLods[i],d=3*h*(i>A-$i?i-A+$i:0),p=4*(this._cubeSize-h);o.envMap.value=e.texture,o.roughness.value=u,o.mipInt.value=A-t,$n(r,d,p,3*h,2*h),n.setRenderTarget(r),n.render(a,Rr),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=A-i,$n(e,d,p,3*h,2*h),n.setRenderTarget(e),n.render(a,Rr)}_blur(e,t,i,n,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",r),this._halfBlur(s,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const c=3,u=this._lodMeshes[n];u.material=l;const A=l.uniforms,h=this._sizeLods[i]-1,d=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*yn-1),p=r/d,m=isFinite(r)?1+Math.floor(c*p):yn;m>yn&&ce(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yn}`);const g=[];let f=0;for(let _=0;_<yn;++_){const S=_/p,M=Math.exp(-S*S/2);g.push(M),_===0?f+=M:_<m&&(f+=2*M)}for(let _=0;_<g.length;_++)g[_]=g[_]/f;A.envMap.value=e.texture,A.samples.value=m,A.weights.value=g,A.latitudinal.value=s==="latitudinal",a&&(A.poleAxis.value=a);const{_lodMax:v}=this;A.dTheta.value=d,A.mipInt.value=v-i;const E=this._sizeLods[n];$n(t,3*E*(n>v-$i?n-v+$i:0),4*(this._cubeSize-E),3*E,2*E),o.setRenderTarget(t),o.render(u,Rr)}};function Um(e){const t=[],i=[],n=[];let r=e;const s=e-$i+1+hh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>e-$i?l=hh[a-e+$i-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,A=1+c,h=[u,u,A,u,A,A,u,u,A,A,u,A],d=6,p=6,m=3,g=2,f=1,v=new Float32Array(m*p*d),E=new Float32Array(g*p*d),_=new Float32Array(f*p*d);for(let M=0;M<d;M++){const T=M%3*2/3-1,y=M>2?0:-1,C=[T,y,0,T+2/3,y,0,T+2/3,y+1,0,T,y,0,T+2/3,y+1,0,T,y+1,0];v.set(C,m*p*M),E.set(h,g*p*M);const L=[M,M,M,M,M,M];_.set(L,f*p*M)}const S=new Ke;S.setAttribute("position",new ut(v,m)),S.setAttribute("uv",new ut(E,g)),S.setAttribute("faceIndex",new ut(_,f)),n.push(new St(S,null)),r>$i&&r--}return{lodMeshes:n,sizeLods:t,sigmas:i}}function Ah(e,t,i){const n=new ni(e,t,i);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $n(e,t,i,n,r){e.viewport.set(t,i,n,r),e.scissor.set(t,i,n,r)}function Nm(e,t,i){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ua(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fm(e,t,i){const n=new Float32Array(yn),r=new w(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function dh(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function fh(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ua(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var ql=class extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new hs(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new us(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;const s=new St(n,r),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=gt),new ld(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}};function Qm(e){let t=new WeakMap,i=new WeakMap,n=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===303||d===304)if(t.has(h)){const p=t.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new ql(p.height);return m.fromEquirectangularTexture(e,h),t.set(h,m),h.addEventListener("dispose",c),o(m.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,p=d===303||d===304,m=d===301||d===302;if(p||m){let g=i.get(h);const f=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new Vo(e)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,i.set(h,g),g.texture;if(g!==void 0)return g.texture;{const v=h.image;return p&&v&&v.height>0||m&&v&&l(v)?(n===null&&(n=new Vo(e)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,i.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,d){return d===303?h.mapping=301:d===304&&(h.mapping=302),h}function l(h){let d=0;const p=6;for(let m=0;m<p;m++)h[m]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const p=i.get(d);p!==void 0&&(i.delete(d),p.dispose())}function A(){t=new WeakMap,i=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:A}}function Om(e){const t={};function i(n){if(t[n]!==void 0)return t[n];const r=e.getExtension(n);return t[n]=r,r}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){const r=i(n);return r===null&&ma("WebGLRenderer: "+n+" extension not supported."),r}}}function Gm(e,t,i,n){const r={},s=new WeakMap;function a(A){const h=A.target;h.index!==null&&t.remove(h.index);for(const p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,i.memory.geometries--}function o(A,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,i.memory.geometries++),h}function l(A){const h=A.attributes;for(const d in h)t.update(h[d],e.ARRAY_BUFFER)}function c(A){const h=[],d=A.index,p=A.attributes.position;let m=0;if(p===void 0)return;if(d!==null){const v=d.array;m=d.version;for(let E=0,_=v.length;E<_;E+=3){const S=v[E+0],M=v[E+1],T=v[E+2];h.push(S,M,M,T,T,S)}}else{const v=p.array;m=p.version;for(let E=0,_=v.length/3-1;E<_;E+=3){const S=E+0,M=E+1,T=E+2;h.push(S,M,M,T,T,S)}}const g=new(p.count>=65535?vl:ml)(h,1);g.version=m;const f=s.get(A);f&&t.remove(f),s.set(A,g)}function u(A){const h=s.get(A);if(h){const d=A.index;d!==null&&h.version<d.version&&c(A)}else c(A);return s.get(A)}return{get:o,update:l,getWireframeAttribute:u}}function km(e,t,i){let n;function r(A){n=A}let s,a;function o(A){s=A.type,a=A.bytesPerElement}function l(A,h){e.drawElements(n,h,s,A*a),i.update(h,n,1)}function c(A,h,d){d!==0&&(e.drawElementsInstanced(n,h,s,A*a,d),i.update(h,n,d))}function u(A,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,A,0,d);let p=0;for(let m=0;m<d;m++)p+=h[m];i.update(p,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function zm(e){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(i.calls++,a){case e.TRIANGLES:i.triangles+=o*(s/3);break;case e.LINES:i.lines+=o*(s/2);break;case e.LINE_STRIP:i.lines+=o*(s-1);break;case e.LINE_LOOP:i.lines+=o*s;break;case e.POINTS:i.points+=o*s;break;default:we("WebGLInfo: Unknown draw mode:",a);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:n}}function Vm(e,t,i){const n=new WeakMap,r=new ht;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,A=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==A){let C=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;d===!0&&(E=1),p===!0&&(E=2),m===!0&&(E=3);let _=o.attributes.position.count*E,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const M=new Float32Array(_*S*4*A),T=new wa(M,_,S,A);T.type=ti,T.needsUpdate=!0;const y=E*4;for(let L=0;L<A;L++){const b=g[L],F=f[L],H=v[L],U=_*S*4*L;for(let k=0;k<b.count;k++){const G=k*y;d===!0&&(r.fromBufferAttribute(b,k),M[U+G+0]=r.x,M[U+G+1]=r.y,M[U+G+2]=r.z,M[U+G+3]=0),p===!0&&(r.fromBufferAttribute(F,k),M[U+G+4]=r.x,M[U+G+5]=r.y,M[U+G+6]=r.z,M[U+G+7]=0),m===!0&&(r.fromBufferAttribute(H,k),M[U+G+8]=r.x,M[U+G+9]=r.y,M[U+G+10]=r.z,M[U+G+11]=H.itemSize===4?r.w:1)}}h={count:A,texture:T,size:new Z(_,S)},n.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,i);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];const p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",p),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:s}}function Hm(e,t,i,n,r){let s=new WeakMap;function a(c){const u=r.render.frame,A=c.geometry,h=t.get(c,A);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null&&i.remove(u.instanceColor)}return{update:a,dispose:o}}var Wm={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function qm(e,t,i,n,r){const s=new ni(t,i,{type:e,depthBuffer:n,stencilBuffer:r,depthTexture:n?new Sn(t,i):void 0}),a=new ni(t,i,{type:Zt,depthBuffer:!1,stencilBuffer:!1}),o=new Ke;o.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ce([0,2,0,0,2,0],2));const l=new Ll({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new St(o,l),u=new ds(-1,1,1,-1,0,1);let A=null,h=null,d=!1,p,m=null,g=[],f=!1;this.setSize=function(v,E){s.setSize(v,E),a.setSize(v,E);for(let _=0;_<g.length;_++){const S=g[_];S.setSize&&S.setSize(v,E)}},this.setEffects=function(v){g=v,f=g.length>0&&g[0].isRenderPass===!0;const E=s.width,_=s.height;for(let S=0;S<g.length;S++){const M=g[S];M.setSize&&M.setSize(E,_)}},this.begin=function(v,E){if(d||v.toneMapping===0&&g.length===0)return!1;if(m=E,E!==null){const _=E.width,S=E.height;(s.width!==_||s.height!==S)&&this.setSize(_,S)}return f===!1&&v.setRenderTarget(s),p=v.toneMapping,v.toneMapping=0,!0},this.hasRenderPass=function(){return f},this.end=function(v,E){v.toneMapping=p,d=!0;let _=s,S=a;for(let M=0;M<g.length;M++){const T=g[M];if(T.enabled!==!1&&(T.render(v,S,_,E),T.needsSwap!==!1)){const y=_;_=S,S=y}}if(A!==v.outputColorSpace||h!==v.toneMapping){A=v.outputColorSpace,h=v.toneMapping,l.defines={},nt.getTransfer(A)==="srgb"&&(l.defines.SRGB_TRANSFER="");const M=Wm[h];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=_.texture,v.setRenderTarget(m),v.render(c,u),m=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var _d=new wt,Ho=new Sn(1,1),yd=new wa,Ed=new cs,xd=new hs,ph=[],gh=[],mh=new Float32Array(16),vh=new Float32Array(9),_h=new Float32Array(4);function mr(e,t,i){const n=e[0];if(n<=0||n>0)return e;const r=t*i;let s=ph[r];if(s===void 0&&(s=new Float32Array(r),ph[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=i,e[a].toArray(s,o)}return s}function Bt(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function bt(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function Na(e,t){let i=gh[t];i===void 0&&(i=new Int32Array(t),gh[t]=i);for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function Xm(e,t){const i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Ym(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Bt(i,t))return;e.uniform2fv(this.addr,t),bt(i,t)}}function Jm(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Bt(i,t))return;e.uniform3fv(this.addr,t),bt(i,t)}}function Km(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Bt(i,t))return;e.uniform4fv(this.addr,t),bt(i,t)}}function Zm(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(Bt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),bt(i,t)}else{if(Bt(i,n))return;_h.set(n),e.uniformMatrix2fv(this.addr,!1,_h),bt(i,n)}}function $m(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(Bt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),bt(i,t)}else{if(Bt(i,n))return;vh.set(n),e.uniformMatrix3fv(this.addr,!1,vh),bt(i,n)}}function jm(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(Bt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),bt(i,t)}else{if(Bt(i,n))return;mh.set(n),e.uniformMatrix4fv(this.addr,!1,mh),bt(i,n)}}function ev(e,t){const i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function tv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Bt(i,t))return;e.uniform2iv(this.addr,t),bt(i,t)}}function iv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Bt(i,t))return;e.uniform3iv(this.addr,t),bt(i,t)}}function nv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Bt(i,t))return;e.uniform4iv(this.addr,t),bt(i,t)}}function rv(e,t){const i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function sv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Bt(i,t))return;e.uniform2uiv(this.addr,t),bt(i,t)}}function av(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Bt(i,t))return;e.uniform3uiv(this.addr,t),bt(i,t)}}function ov(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Bt(i,t))return;e.uniform4uiv(this.addr,t),bt(i,t)}}function lv(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(Ho.compareFunction=i.isReversedDepthBuffer()?518:515,s=Ho):s=_d,i.setTexture2D(t||s,r)}function cv(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTexture3D(t||Ed,r)}function hv(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTextureCube(t||xd,r)}function uv(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTexture2DArray(t||yd,r)}function Av(e){switch(e){case 5126:return Xm;case 35664:return Ym;case 35665:return Jm;case 35666:return Km;case 35674:return Zm;case 35675:return $m;case 35676:return jm;case 5124:case 35670:return ev;case 35667:case 35671:return tv;case 35668:case 35672:return iv;case 35669:case 35673:return nv;case 5125:return rv;case 36294:return sv;case 36295:return av;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return uv}}function dv(e,t){e.uniform1fv(this.addr,t)}function fv(e,t){const i=mr(t,this.size,2);e.uniform2fv(this.addr,i)}function pv(e,t){const i=mr(t,this.size,3);e.uniform3fv(this.addr,i)}function gv(e,t){const i=mr(t,this.size,4);e.uniform4fv(this.addr,i)}function mv(e,t){const i=mr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function vv(e,t){const i=mr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function _v(e,t){const i=mr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function yv(e,t){e.uniform1iv(this.addr,t)}function Ev(e,t){e.uniform2iv(this.addr,t)}function xv(e,t){e.uniform3iv(this.addr,t)}function Iv(e,t){e.uniform4iv(this.addr,t)}function Cv(e,t){e.uniform1uiv(this.addr,t)}function Mv(e,t){e.uniform2uiv(this.addr,t)}function Sv(e,t){e.uniform3uiv(this.addr,t)}function Bv(e,t){e.uniform4uiv(this.addr,t)}function bv(e,t,i){const n=this.cache,r=t.length,s=Na(i,r);Bt(n,s)||(e.uniform1iv(this.addr,s),bt(n,s));let a;this.type===e.SAMPLER_2D_SHADOW?a=Ho:a=_d;for(let o=0;o!==r;++o)i.setTexture2D(t[o]||a,s[o])}function wv(e,t,i){const n=this.cache,r=t.length,s=Na(i,r);Bt(n,s)||(e.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==r;++a)i.setTexture3D(t[a]||Ed,s[a])}function Tv(e,t,i){const n=this.cache,r=t.length,s=Na(i,r);Bt(n,s)||(e.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==r;++a)i.setTextureCube(t[a]||xd,s[a])}function Rv(e,t,i){const n=this.cache,r=t.length,s=Na(i,r);Bt(n,s)||(e.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==r;++a)i.setTexture2DArray(t[a]||yd,s[a])}function Dv(e){switch(e){case 5126:return dv;case 35664:return fv;case 35665:return pv;case 35666:return gv;case 35674:return mv;case 35675:return vv;case 35676:return _v;case 5124:case 35670:return yv;case 35667:case 35671:return Ev;case 35668:case 35672:return xv;case 35669:case 35673:return Iv;case 5125:return Cv;case 36294:return Mv;case 36295:return Sv;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Rv}}var Lv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Av(t.type)}},Pv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dv(t.type)}},Uv=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const a=n[r];a.setValue(e,t[a.id],i)}}},Bo=/(\w+)(\])?(\[|\.)?/g;function yh(e,t){e.seq.push(t),e.map[t.id]=t}function Nv(e,t,i){const n=e.name,r=n.length;for(Bo.lastIndex=0;;){const s=Bo.exec(n),a=Bo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){yh(i,c===void 0?new Lv(o,e,t):new Pv(o,e,t));break}else{let u=i.map[o];u===void 0&&(u=new Uv(o),yh(i,u)),i=u}}}var da=class{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s);Nv(a,e.getUniformLocation(t,a.name),this)}const n=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(s):r.push(s);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){const a=t[r],o=i[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const s=e[n];s.id in t&&i.push(s)}return i}};function Eh(e,t,i){const n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var Fv=37297,Qv=0;function Ov(e,t){const i=e.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${i[a]}`)}return n.join(`
`)}var xh=new We;function Gv(e){nt._getMatrix(xh,nt.workingColorSpace,e);const t=`mat3( ${xh.elements.map(i=>i.toFixed(4))} )`;switch(nt.getTransfer(e)){case Zr:return[t,"LinearTransferOETF"];case $r:return[t,"sRGBTransferOETF"];default:return ce("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Ih(e,t,i){const n=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return i.toUpperCase()+`

`+r+`

`+Ov(e.getShaderSource(t),a)}else return r}function kv(e,t){const i=Gv(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var zv={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function Vv(e,t){const i=zv[t];return i===void 0?(ce("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var oa=new w;function Hv(){return nt.getLuminanceCoefficients(oa),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${oa.x.toFixed(4)}, ${oa.y.toFixed(4)}, ${oa.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wv(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function qv(e){const t=[];for(const i in e){const n=e[i];n!==!1&&t.push("#define "+i+" "+n)}return t.join(`
`)}function Xv(e,t){const i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=e.getActiveAttrib(t,r),a=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),i[a]={type:s.type,location:e.getAttribLocation(t,a),locationSize:o}}return i}function Nr(e){return e!==""}function Ch(e,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Yv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(e){return e.replace(Yv,Kv)}var Jv=new Map;function Kv(e,t){let i=$e[t];if(i===void 0){const n=Jv.get(t);if(n!==void 0)i=$e[n],ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wo(i)}var Zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(e){return e.replace(Zv,$v)}function $v(e,t,i,n){let r="";for(let s=parseInt(t);s<parseInt(i);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bh(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var jv={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function e0(e){return jv[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var t0={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function i0(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":t0[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var n0={302:"ENVMAP_MODE_REFRACTION"};function r0(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":n0[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var s0={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function a0(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":s0[e.combine]||"ENVMAP_BLENDING_NONE"}function o0(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:n,maxMip:i}}function l0(e,t,i,n){const r=e.getContext(),s=i.defines;let a=i.vertexShader,o=i.fragmentShader;const l=e0(i),c=i0(i),u=r0(i),A=a0(i),h=o0(i),d=Wv(i),p=qv(s),m=r.createProgram();let g,f,v=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p].filter(Nr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p].filter(Nr).join(`
`),f.length>0&&(f+=`
`)):(g=[Bh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),f=[Bh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,p,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+u:"",i.envMap?"#define "+A:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==0?"#define TONE_MAPPING":"",i.toneMapping!==0?$e.tonemapping_pars_fragment:"",i.toneMapping!==0?Vv("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,kv("linearToOutputTexel",i.outputColorSpace),Hv(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Nr).join(`
`)),a=Wo(a),a=Ch(a,i),a=Mh(a,i),o=Wo(o),o=Ch(o,i),o=Mh(o,i),a=Sh(a),o=Sh(o),i.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",i.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=v+g+a,_=v+f+o,S=Eh(r,r.VERTEX_SHADER,E),M=Eh(r,r.FRAGMENT_SHADER,_);r.attachShader(m,S),r.attachShader(m,M),i.index0AttributeName!==void 0?r.bindAttribLocation(m,0,i.index0AttributeName):i.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function T(b){if(e.debug.checkShaderErrors){const F=r.getProgramInfoLog(m)||"",H=r.getShaderInfoLog(S)||"",U=r.getShaderInfoLog(M)||"",k=F.trim(),G=H.trim(),Q=U.trim();let Y=!0,ee=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(Y=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,m,S,M);else{const ie=Ih(r,S,"vertex"),me=Ih(r,M,"fragment");we("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+k+`
`+ie+`
`+me)}else k!==""?ce("WebGLProgram: Program Info Log:",k):(G===""||Q==="")&&(ee=!1);ee&&(b.diagnostics={runnable:Y,programLog:k,vertexShader:{log:G,prefix:g},fragmentShader:{log:Q,prefix:f}})}r.deleteShader(S),r.deleteShader(M),y=new da(r,m),C=Xv(r,m)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let C;this.getAttributes=function(){return C===void 0&&T(this),C};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(m,Fv)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Qv++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=M,this}var c0=0,h0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new u0(e),t.set(e,i)),i}},u0=class{constructor(e){this.id=c0++,this.code=e,this.usedTimes=0}};function A0(e){return e===1030||e===37490||e===36285}function d0(e,t,i,n,r,s){const a=new Ta,o=new h0,l=new Set,c=[],u=new Map,A=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,C,L,b,F,H){const U=b.fog,k=F.geometry,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?b.environment:null,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Y=t.get(y.envMap||G,Q),ee=Y&&Y.mapping===306?Y.image.height:null,ie=d[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&ce("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const me=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ie=me!==void 0?me.length:0;let Xe=0;k.morphAttributes.position!==void 0&&(Xe=1),k.morphAttributes.normal!==void 0&&(Xe=2),k.morphAttributes.color!==void 0&&(Xe=3);let Ze,X,Ae,Te;if(ie){const ze=pi[ie];Ze=ze.vertexShader,X=ze.fragmentShader}else Ze=y.vertexShader,X=y.fragmentShader,o.update(y),Ae=o.getVertexShaderID(y),Te=o.getFragmentShaderID(y);const ue=e.getRenderTarget(),Ue=e.state.buffers.depth.getReversed(),ke=F.isInstancedMesh===!0,De=F.isBatchedMesh===!0,je=!!y.map,K=!!y.matcap,ae=!!Y,se=!!y.aoMap,xe=!!y.lightMap,ve=!!y.bumpMap,Ne=!!y.normalMap,R=!!y.displacementMap,et=!!y.emissiveMap,Re=!!y.metalnessMap,Qe=!!y.roughnessMap,oe=y.anisotropy>0,At=y.clearcoat>0,Me=y.dispersion>0,B=y.iridescence>0,x=y.sheen>0,O=y.transmission>0,J=oe&&!!y.anisotropyMap,$=At&&!!y.clearcoatMap,ne=At&&!!y.clearcoatNormalMap,de=At&&!!y.clearcoatRoughnessMap,P=B&&!!y.iridescenceMap,he=B&&!!y.iridescenceThicknessMap,ge=x&&!!y.sheenColorMap,Ee=x&&!!y.sheenRoughnessMap,j=!!y.specularMap,Oe=!!y.specularColorMap,qe=!!y.specularIntensityMap,st=O&&!!y.transmissionMap,tt=O&&!!y.thicknessMap,D=!!y.gradientMap,q=!!y.alphaMap,re=y.alphaTest>0,fe=!!y.alphaHash,Le=!!y.extensions;let te=0;y.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(te=e.toneMapping);const Pe={shaderID:ie,shaderType:y.type,shaderName:y.name,vertexShader:Ze,fragmentShader:X,defines:y.defines,customVertexShaderID:Ae,customFragmentShaderID:Te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:De,batchingColor:De&&F._colorsTexture!==null,instancing:ke,instancingColor:ke&&F.instanceColor!==null,instancingMorph:ke&&F.morphTexture!==null,outputColorSpace:ue===null?e.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:je,matcap:K,envMap:ae,envMapMode:ae&&Y.mapping,envMapCubeUVHeight:ee,aoMap:se,lightMap:xe,bumpMap:ve,normalMap:Ne,displacementMap:R,emissiveMap:et,normalMapObjectSpace:Ne&&y.normalMapType===1,normalMapTangentSpace:Ne&&y.normalMapType===0,packedNormalMap:Ne&&y.normalMapType===0&&A0(y.normalMap.format),metalnessMap:Re,roughnessMap:Qe,anisotropy:oe,anisotropyMap:J,clearcoat:At,clearcoatMap:$,clearcoatNormalMap:ne,clearcoatRoughnessMap:de,dispersion:Me,iridescence:B,iridescenceMap:P,iridescenceThicknessMap:he,sheen:x,sheenColorMap:ge,sheenRoughnessMap:Ee,specularMap:j,specularColorMap:Oe,specularIntensityMap:qe,transmission:O,transmissionMap:st,thicknessMap:tt,gradientMap:D,opaque:y.transparent===!1&&y.blending===1&&y.alphaToCoverage===!1,alphaMap:q,alphaTest:re,alphaHash:fe,combine:y.combine,mapUv:je&&p(y.map.channel),aoMapUv:se&&p(y.aoMap.channel),lightMapUv:xe&&p(y.lightMap.channel),bumpMapUv:ve&&p(y.bumpMap.channel),normalMapUv:Ne&&p(y.normalMap.channel),displacementMapUv:R&&p(y.displacementMap.channel),emissiveMapUv:et&&p(y.emissiveMap.channel),metalnessMapUv:Re&&p(y.metalnessMap.channel),roughnessMapUv:Qe&&p(y.roughnessMap.channel),anisotropyMapUv:J&&p(y.anisotropyMap.channel),clearcoatMapUv:$&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:P&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:he&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&p(y.sheenRoughnessMap.channel),specularMapUv:j&&p(y.specularMap.channel),specularColorMapUv:Oe&&p(y.specularColorMap.channel),specularIntensityMapUv:qe&&p(y.specularIntensityMap.channel),transmissionMapUv:st&&p(y.transmissionMap.channel),thicknessMapUv:tt&&p(y.thicknessMap.channel),alphaMapUv:q&&p(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ne||oe),vertexNormals:!!k.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(je||q),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&Ne===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:A,reversedDepthBuffer:Ue,skinning:F.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Xe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:te,decodeVideoTexture:je&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)==="srgb",decodeVideoTextureEmissive:et&&y.emissiveMap.isVideoTexture===!0&&nt.getTransfer(y.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===2,flipSided:y.side===1,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Le&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&y.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function g(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)C.push(L),C.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(f(C,y),v(C,y),C.push(e.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function f(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function v(y,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),y.push(a.mask)}function E(y){const C=d[y.type];let L;if(C){const b=pi[C];L=FA.clone(b.uniforms)}else L=y.uniforms;return L}function _(y,C){let L=u.get(C);return L!==void 0?++L.usedTimes:(L=new l0(e,C,y,r),c.push(L),u.set(C,L)),L}function S(y){if(--y.usedTimes===0){const C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function M(y){o.remove(y)}function T(){o.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:E,acquireProgram:_,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:T}}function f0(){let e=new WeakMap;function t(a){return e.has(a)}function i(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function n(a){e.delete(a)}function r(a,o,l){e.get(a)[o]=l}function s(){e=new WeakMap}return{has:t,get:i,remove:n,update:r,dispose:s}}function p0(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function bh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function wh(){const e=[];let t=0;const i=[],n=[],r=[];function s(){t=0,i.length=0,n.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,p,m,g,f){let v=e[t];return v===void 0?(v={id:h.id,object:h,geometry:d,material:p,materialVariant:a(h),groupOrder:m,renderOrder:h.renderOrder,z:g,group:f},e[t]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=p,v.materialVariant=a(h),v.groupOrder=m,v.renderOrder=h.renderOrder,v.z=g,v.group=f),t++,v}function l(h,d,p,m,g,f){const v=o(h,d,p,m,g,f);p.transmission>0?n.push(v):p.transparent===!0?r.push(v):i.push(v)}function c(h,d,p,m,g,f){const v=o(h,d,p,m,g,f);p.transmission>0?n.unshift(v):p.transparent===!0?r.unshift(v):i.unshift(v)}function u(h,d){i.length>1&&i.sort(h||p0),n.length>1&&n.sort(d||bh),r.length>1&&r.sort(d||bh)}function A(){for(let h=t,d=e.length;h<d;h++){const p=e[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:i,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:A,sort:u}}function g0(){let e=new WeakMap;function t(n,r){const s=e.get(n);let a;return s===void 0?(a=new wh,e.set(n,[a])):r>=s.length?(a=new wh,s.push(a)):a=s[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function m0(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new w,color:new ye};break;case"SpotLight":i={position:new w,direction:new w,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new w,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new w,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new w,halfWidth:new w,halfHeight:new w};break}return e[t.id]=i,i}}}function v0(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var _0=0;function y0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function E0(e){const t=new m0,i=v0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const r=new w,s=new He,a=new He;function o(c){let u=0,A=0,h=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let d=0,p=0,m=0,g=0,f=0,v=0,E=0,_=0,S=0,M=0,T=0;c.sort(y0);for(let C=0,L=c.length;C<L;C++){const b=c[C],F=b.color,H=b.intensity,U=b.distance;let k=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===1030?k=b.shadow.map.texture:k=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)u+=F.r*H,A+=F.g*H,h+=F.b*H;else if(b.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(b.sh.coefficients[G],H);T++}else if(b.isDirectionalLight){const G=t.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Q=b.shadow,Y=i.get(b);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=b.shadow.matrix,v++}n.directional[d]=G,d++}else if(b.isSpotLight){const G=t.get(b);G.position.setFromMatrixPosition(b.matrixWorld),G.color.copy(F).multiplyScalar(H),G.distance=U,G.coneCos=Math.cos(b.angle),G.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),G.decay=b.decay,n.spot[m]=G;const Q=b.shadow;if(b.map&&(n.spotLightMap[S]=b.map,S++,Q.updateMatrices(b),b.castShadow&&M++),n.spotLightMatrix[m]=Q.matrix,b.castShadow){const Y=i.get(b);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,n.spotShadow[m]=Y,n.spotShadowMap[m]=k,_++}m++}else if(b.isRectAreaLight){const G=t.get(b);G.color.copy(F).multiplyScalar(H),G.halfWidth.set(b.width*.5,0,0),G.halfHeight.set(0,b.height*.5,0),n.rectArea[g]=G,g++}else if(b.isPointLight){const G=t.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),G.distance=b.distance,G.decay=b.decay,b.castShadow){const Q=b.shadow,Y=i.get(b);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,n.pointShadow[p]=Y,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=b.shadow.matrix,E++}n.point[p]=G,p++}else if(b.isHemisphereLight){const G=t.get(b);G.skyColor.copy(b.color).multiplyScalar(H),G.groundColor.copy(b.groundColor).multiplyScalar(H),n.hemi[f]=G,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=A,n.ambient[2]=h;const y=n.hash;(y.directionalLength!==d||y.pointLength!==p||y.spotLength!==m||y.rectAreaLength!==g||y.hemiLength!==f||y.numDirectionalShadows!==v||y.numPointShadows!==E||y.numSpotShadows!==_||y.numSpotMaps!==S||y.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=m,n.rectArea.length=g,n.point.length=p,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=_+S-M,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,y.directionalLength=d,y.pointLength=p,y.spotLength=m,y.rectAreaLength=g,y.hemiLength=f,y.numDirectionalShadows=v,y.numPointShadows=E,y.numSpotShadows=_,y.numSpotMaps=S,y.numLightProbes=T,n.version=_0++)}function l(c,u){let A=0,h=0,d=0,p=0,m=0;const g=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const E=c[f];if(E.isDirectionalLight){const _=n.directional[A];_.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),A++}else if(E.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),d++}else if(E.isRectAreaLight){const _=n.rectArea[p];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(E.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),p++}else if(E.isPointLight){const _=n.point[h];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(g),h++}else if(E.isHemisphereLight){const _=n.hemi[m];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function Th(e){const t=new E0(e),i=[],n=[],r=[];function s(h){A.camera=h,i.length=0,n.length=0,r.length=0}function a(h){i.push(h)}function o(h){n.push(h)}function l(h){r.push(h)}function c(){t.setup(i)}function u(h){t.setupView(i,h)}const A={lightsArray:i,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:A,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function x0(e){let t=new WeakMap;function i(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Th(e),t.set(r,[o])):s>=a.length?(o=new Th(e),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:i,dispose:n}}var I0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,M0=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],S0=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],Rh=new He,Dr=new w,bo=new w;function B0(e,t,i){let n=new dr;const r=new Z,s=new Z,a=new ht,o=new Ul,l=new Nl,c={},u=i.maxTextureSize,A={0:1,1:0,2:2},h=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:I0,fragmentShader:C0}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new Ke;p.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new St(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(M,T,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===2&&(ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const C=e.getRenderTarget(),L=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),F=e.state;F.setBlending(0),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=f!==this.type;H&&T.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(k=>k.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,k=M.length;U<k;U++){const G=M[U],Q=G.shadow;if(Q===void 0){ce("WebGLShadowMap:",G,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const Y=Q.getFrameExtents();r.multiply(Y),s.copy(Q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,Q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,Q.mapSize.y=s.y));const ee=e.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=ee,Q.map===null||H===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===3){if(G.isPointLight){ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new ni(r.x,r.y,{format:Ci,type:Zt,minFilter:gt,magFilter:gt,generateMipmaps:!1}),Q.map.texture.name=G.name+".shadowMap",Q.map.depthTexture=new Sn(r.x,r.y,ti),Q.map.depthTexture.name=G.name+".shadowMapDepth",Q.map.depthTexture.format=or,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Ct,Q.map.depthTexture.magFilter=Ct}else G.isPointLight?(Q.map=new ql(r.x),Q.map.depthTexture=new Wu(r.x,Fi)):(Q.map=new ni(r.x,r.y),Q.map.depthTexture=new Sn(r.x,r.y,Fi)),Q.map.depthTexture.name=G.name+".shadowMap",Q.map.depthTexture.format=or,this.type===1?(Q.map.depthTexture.compareFunction=ee?518:515,Q.map.depthTexture.minFilter=gt,Q.map.depthTexture.magFilter=gt):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Ct,Q.map.depthTexture.magFilter=Ct);Q.camera.updateProjectionMatrix()}const ie=Q.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<ie;me++){if(Q.map.isWebGLCubeRenderTarget)e.setRenderTarget(Q.map,me),e.clear();else{me===0&&(e.setRenderTarget(Q.map),e.clear());const Ie=Q.getViewport(me);a.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),F.viewport(a)}if(G.isPointLight){const Ie=Q.camera,Xe=Q.matrix,Ze=G.distance||Ie.far;Ze!==Ie.far&&(Ie.far=Ze,Ie.updateProjectionMatrix()),Dr.setFromMatrixPosition(G.matrixWorld),Ie.position.copy(Dr),bo.copy(Ie.position),bo.add(M0[me]),Ie.up.copy(S0[me]),Ie.lookAt(bo),Ie.updateMatrixWorld(),Xe.makeTranslation(-Dr.x,-Dr.y,-Dr.z),Rh.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(Rh,Ie.coordinateSystem,Ie.reversedDepth)}else Q.updateMatrices(G);n=Q.getFrustum(),_(T,y,Q.camera,G,this.type)}Q.isPointLightShadow!==!0&&this.type===3&&v(Q,y),Q.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(C,L,b)};function v(M,T){const y=t.update(m);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ni(r.x,r.y,{format:Ci,type:Zt})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,e.setRenderTarget(M.mapPass),e.clear(),e.renderBufferDirect(T,null,y,h,m,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,e.setRenderTarget(M.map),e.clear(),e.renderBufferDirect(T,null,y,d,m,null)}function E(M,T,y,C){let L=null;const b=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(b!==void 0)L=b;else if(L=y.isPointLight===!0?l:o,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const F=L.uuid,H=T.uuid;let U=c[F];U===void 0&&(U={},c[F]=U);let k=U[H];k===void 0&&(k=L.clone(),U[H]=k,T.addEventListener("dispose",S)),L=k}if(L.visible=T.visible,L.wireframe=T.wireframe,C===3?L.side=T.shadowSide!==null?T.shadowSide:T.side:L.side=T.shadowSide!==null?T.shadowSide:A[T.side],L.alphaMap=T.alphaMap,L.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,L.map=T.map,L.clipShadows=T.clipShadows,L.clippingPlanes=T.clippingPlanes,L.clipIntersection=T.clipIntersection,L.displacementMap=T.displacementMap,L.displacementScale=T.displacementScale,L.displacementBias=T.displacementBias,L.wireframeLinewidth=T.wireframeLinewidth,L.linewidth=T.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const F=e.properties.get(L);F.light=y}return L}function _(M,T,y,C,L){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&L===3)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);const F=t.update(M),H=M.material;if(Array.isArray(H)){const U=F.groups;for(let k=0,G=U.length;k<G;k++){const Q=U[k],Y=H[Q.materialIndex];if(Y&&Y.visible){const ee=E(M,Y,C,L);M.onBeforeShadow(e,M,T,y,F,ee,Q),e.renderBufferDirect(y,null,F,ee,M,Q),M.onAfterShadow(e,M,T,y,F,ee,Q)}}}else if(H.visible){const U=E(M,H,C,L);M.onBeforeShadow(e,M,T,y,F,U,null),e.renderBufferDirect(y,null,F,U,M,null),M.onAfterShadow(e,M,T,y,F,U,null)}}const b=M.children;for(let F=0,H=b.length;F<H;F++)_(b[F],T,y,C,L)}function S(M){M.target.removeEventListener("dispose",S);for(const T in c){const y=c[T],C=M.target.uuid;C in y&&(y[C].dispose(),delete y[C])}}}function b0(e,t){function i(){let D=!1;const q=new ht;let re=null;const fe=new ht(0,0,0,0);return{setMask:function(Le){re!==Le&&!D&&(e.colorMask(Le,Le,Le,Le),re=Le)},setLocked:function(Le){D=Le},setClear:function(Le,te,Pe,ze,Yt){Yt===!0&&(Le*=ze,te*=ze,Pe*=ze),q.set(Le,te,Pe,ze),fe.equals(q)===!1&&(e.clearColor(Le,te,Pe,ze),fe.copy(q))},reset:function(){D=!1,re=null,fe.set(-1,0,0,0)}}}function n(){let D=!1,q=!1,re=null,fe=null,Le=null;return{setReversed:function(te){if(q!==te){const Pe=t.get("EXT_clip_control");te?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),q=te;const ze=Le;Le=null,this.setClear(ze)}},getReversed:function(){return q},setTest:function(te){te?ue(e.DEPTH_TEST):Ue(e.DEPTH_TEST)},setMask:function(te){re!==te&&!D&&(e.depthMask(te),re=te)},setFunc:function(te){if(q&&(te=Mf[te]),fe!==te){switch(te){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}fe=te}},setLocked:function(te){D=te},setClear:function(te){Le!==te&&(Le=te,q&&(te=1-te),e.clearDepth(te))},reset:function(){D=!1,re=null,fe=null,Le=null,q=!1}}}function r(){let D=!1,q=null,re=null,fe=null,Le=null,te=null,Pe=null,ze=null,Yt=null;return{setTest:function(mt){D||(mt?ue(e.STENCIL_TEST):Ue(e.STENCIL_TEST))},setMask:function(mt){q!==mt&&!D&&(e.stencilMask(mt),q=mt)},setFunc:function(mt,vi,hi){(re!==mt||fe!==vi||Le!==hi)&&(e.stencilFunc(mt,vi,hi),re=mt,fe=vi,Le=hi)},setOp:function(mt,vi,hi){(te!==mt||Pe!==vi||ze!==hi)&&(e.stencilOp(mt,vi,hi),te=mt,Pe=vi,ze=hi)},setLocked:function(mt){D=mt},setClear:function(mt){Yt!==mt&&(e.clearStencil(mt),Yt=mt)},reset:function(){D=!1,q=null,re=null,fe=null,Le=null,te=null,Pe=null,ze=null,Yt=null}}}const s=new i,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},A={},h={},d=new WeakMap,p=[],m=null,g=!1,f=null,v=null,E=null,_=null,S=null,M=null,T=null,y=new ye(0,0,0),C=0,L=!1,b=null,F=null,H=null,U=null,k=null;const G=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,Y=0;const ee=e.getParameter(e.VERSION);ee.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Q=Y>=1):ee.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Q=Y>=2);let ie=null,me={};const Ie=e.getParameter(e.SCISSOR_BOX),Xe=e.getParameter(e.VIEWPORT),Ze=new ht().fromArray(Ie),X=new ht().fromArray(Xe);function Ae(D,q,re,fe){const Le=new Uint8Array(4),te=e.createTexture();e.bindTexture(D,te),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Pe=0;Pe<re;Pe++)D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY?e.texImage3D(q,0,e.RGBA,1,1,fe,0,e.RGBA,e.UNSIGNED_BYTE,Le):e.texImage2D(q+Pe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Le);return te}const Te={};Te[e.TEXTURE_2D]=Ae(e.TEXTURE_2D,e.TEXTURE_2D,1),Te[e.TEXTURE_CUBE_MAP]=Ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[e.TEXTURE_2D_ARRAY]=Ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Te[e.TEXTURE_3D]=Ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(e.DEPTH_TEST),a.setFunc(3),ve(!1),Ne(1),ue(e.CULL_FACE),se(0);function ue(D){u[D]!==!0&&(e.enable(D),u[D]=!0)}function Ue(D){u[D]!==!1&&(e.disable(D),u[D]=!1)}function ke(D,q){return h[D]!==q?(e.bindFramebuffer(D,q),h[D]=q,D===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=q),D===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=q),!0):!1}function De(D,q){let re=p,fe=!1;if(D){re=d.get(q),re===void 0&&(re=[],d.set(q,re));const Le=D.textures;if(re.length!==Le.length||re[0]!==e.COLOR_ATTACHMENT0){for(let te=0,Pe=Le.length;te<Pe;te++)re[te]=e.COLOR_ATTACHMENT0+te;re.length=Le.length,fe=!0}}else re[0]!==e.BACK&&(re[0]=e.BACK,fe=!0);fe&&e.drawBuffers(re)}function je(D){return m!==D?(e.useProgram(D),m=D,!0):!1}const K={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};K[103]=e.MIN,K[104]=e.MAX;const ae={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function se(D,q,re,fe,Le,te,Pe,ze,Yt,mt){if(D===0){g===!0&&(Ue(e.BLEND),g=!1);return}if(g===!1&&(ue(e.BLEND),g=!0),D!==5){if(D!==f||mt!==L){if((v!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,S=100),mt)switch(D){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:we("WebGLState: Invalid blending: ",D);break}else switch(D){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",D);break}E=null,_=null,M=null,T=null,y.set(0,0,0),C=0,f=D,L=mt}return}Le=Le||q,te=te||re,Pe=Pe||fe,(q!==v||Le!==S)&&(e.blendEquationSeparate(K[q],K[Le]),v=q,S=Le),(re!==E||fe!==_||te!==M||Pe!==T)&&(e.blendFuncSeparate(ae[re],ae[fe],ae[te],ae[Pe]),E=re,_=fe,M=te,T=Pe),(ze.equals(y)===!1||Yt!==C)&&(e.blendColor(ze.r,ze.g,ze.b,Yt),y.copy(ze),C=Yt),f=D,L=!1}function xe(D,q){D.side===2?Ue(e.CULL_FACE):ue(e.CULL_FACE);let re=D.side===1;q&&(re=!re),ve(re),D.blending===1&&D.transparent===!1?se(0):se(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const fe=D.stencilWrite;o.setTest(fe),fe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),et(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):Ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(D){b!==D&&(D?e.frontFace(e.CW):e.frontFace(e.CCW),b=D)}function Ne(D){D!==0?(ue(e.CULL_FACE),D!==F&&(D===1?e.cullFace(e.BACK):D===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ue(e.CULL_FACE),F=D}function R(D){D!==H&&(Q&&e.lineWidth(D),H=D)}function et(D,q,re){D?(ue(e.POLYGON_OFFSET_FILL),(U!==q||k!==re)&&(U=q,k=re,a.getReversed()&&(q=-q),e.polygonOffset(q,re))):Ue(e.POLYGON_OFFSET_FILL)}function Re(D){D?ue(e.SCISSOR_TEST):Ue(e.SCISSOR_TEST)}function Qe(D){D===void 0&&(D=e.TEXTURE0+G-1),ie!==D&&(e.activeTexture(D),ie=D)}function oe(D,q,re){re===void 0&&(ie===null?re=e.TEXTURE0+G-1:re=ie);let fe=me[re];fe===void 0&&(fe={type:void 0,texture:void 0},me[re]=fe),(fe.type!==D||fe.texture!==q)&&(ie!==re&&(e.activeTexture(re),ie=re),e.bindTexture(D,q||Te[D]),fe.type=D,fe.texture=q)}function At(){const D=me[ie];D!==void 0&&D.type!==void 0&&(e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Me(){try{e.compressedTexImage2D(...arguments)}catch(D){we("WebGLState:",D)}}function B(){try{e.compressedTexImage3D(...arguments)}catch(D){we("WebGLState:",D)}}function x(){try{e.texSubImage2D(...arguments)}catch(D){we("WebGLState:",D)}}function O(){try{e.texSubImage3D(...arguments)}catch(D){we("WebGLState:",D)}}function J(){try{e.compressedTexSubImage2D(...arguments)}catch(D){we("WebGLState:",D)}}function $(){try{e.compressedTexSubImage3D(...arguments)}catch(D){we("WebGLState:",D)}}function ne(){try{e.texStorage2D(...arguments)}catch(D){we("WebGLState:",D)}}function de(){try{e.texStorage3D(...arguments)}catch(D){we("WebGLState:",D)}}function P(){try{e.texImage2D(...arguments)}catch(D){we("WebGLState:",D)}}function he(){try{e.texImage3D(...arguments)}catch(D){we("WebGLState:",D)}}function ge(D){return A[D]!==void 0?A[D]:e.getParameter(D)}function Ee(D,q){A[D]!==q&&(e.pixelStorei(D,q),A[D]=q)}function j(D){Ze.equals(D)===!1&&(e.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function Oe(D){X.equals(D)===!1&&(e.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function qe(D,q){let re=c.get(q);re===void 0&&(re=new WeakMap,c.set(q,re));let fe=re.get(D);fe===void 0&&(fe=e.getUniformBlockIndex(q,D.name),re.set(D,fe))}function st(D,q){const re=c.get(q).get(D);l.get(q)!==re&&(e.uniformBlockBinding(q,re,D.__bindingPointIndex),l.set(q,re))}function tt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},A={},ie=null,me={},h={},d=new WeakMap,p=[],m=null,g=!1,f=null,v=null,E=null,_=null,S=null,M=null,T=null,y=new ye(0,0,0),C=0,L=!1,b=null,F=null,H=null,U=null,k=null,Ze.set(0,0,e.canvas.width,e.canvas.height),X.set(0,0,e.canvas.width,e.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ue,disable:Ue,bindFramebuffer:ke,drawBuffers:De,useProgram:je,setBlending:se,setMaterial:xe,setFlipSided:ve,setCullFace:Ne,setLineWidth:R,setPolygonOffset:et,setScissorTest:Re,activeTexture:Qe,bindTexture:oe,unbindTexture:At,compressedTexImage2D:Me,compressedTexImage3D:B,texImage2D:P,texImage3D:he,pixelStorei:Ee,getParameter:ge,updateUBOMapping:qe,uniformBlockBinding:st,texStorage2D:ne,texStorage3D:de,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:J,compressedTexSubImage3D:$,scissor:j,viewport:Oe,reset:tt}}function w0(e,t,i,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,u=new WeakMap,A=new Set;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(B,x){return p?new OffscreenCanvas(B,x):jr("canvas")}function g(B,x,O){let J=1;const $=Me(B);if(($.width>O||$.height>O)&&(J=O/Math.max($.width,$.height)),J<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const ne=Math.floor(J*$.width),de=Math.floor(J*$.height);h===void 0&&(h=m(ne,de));const P=x?m(ne,de):h;return P.width=ne,P.height=de,P.getContext("2d").drawImage(B,0,0,ne,de),ce("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ne+"x"+de+")."),P}else return"data"in B&&ce("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),B;return B}function f(B){return B.generateMipmaps}function v(B){e.generateMipmap(B)}function E(B){return B.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?e.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(B,x,O,J,$,ne=!1){if(B!==null){if(e[B]!==void 0)return e[B];ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let de;J&&(de=t.get("EXT_texture_norm16"),de||ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let P=x;if(x===e.RED&&(O===e.FLOAT&&(P=e.R32F),O===e.HALF_FLOAT&&(P=e.R16F),O===e.UNSIGNED_BYTE&&(P=e.R8),O===e.UNSIGNED_SHORT&&de&&(P=de.R16_EXT),O===e.SHORT&&de&&(P=de.R16_SNORM_EXT)),x===e.RED_INTEGER&&(O===e.UNSIGNED_BYTE&&(P=e.R8UI),O===e.UNSIGNED_SHORT&&(P=e.R16UI),O===e.UNSIGNED_INT&&(P=e.R32UI),O===e.BYTE&&(P=e.R8I),O===e.SHORT&&(P=e.R16I),O===e.INT&&(P=e.R32I)),x===e.RG&&(O===e.FLOAT&&(P=e.RG32F),O===e.HALF_FLOAT&&(P=e.RG16F),O===e.UNSIGNED_BYTE&&(P=e.RG8),O===e.UNSIGNED_SHORT&&de&&(P=de.RG16_EXT),O===e.SHORT&&de&&(P=de.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(O===e.UNSIGNED_BYTE&&(P=e.RG8UI),O===e.UNSIGNED_SHORT&&(P=e.RG16UI),O===e.UNSIGNED_INT&&(P=e.RG32UI),O===e.BYTE&&(P=e.RG8I),O===e.SHORT&&(P=e.RG16I),O===e.INT&&(P=e.RG32I)),x===e.RGB_INTEGER&&(O===e.UNSIGNED_BYTE&&(P=e.RGB8UI),O===e.UNSIGNED_SHORT&&(P=e.RGB16UI),O===e.UNSIGNED_INT&&(P=e.RGB32UI),O===e.BYTE&&(P=e.RGB8I),O===e.SHORT&&(P=e.RGB16I),O===e.INT&&(P=e.RGB32I)),x===e.RGBA_INTEGER&&(O===e.UNSIGNED_BYTE&&(P=e.RGBA8UI),O===e.UNSIGNED_SHORT&&(P=e.RGBA16UI),O===e.UNSIGNED_INT&&(P=e.RGBA32UI),O===e.BYTE&&(P=e.RGBA8I),O===e.SHORT&&(P=e.RGBA16I),O===e.INT&&(P=e.RGBA32I)),x===e.RGB&&(O===e.UNSIGNED_SHORT&&de&&(P=de.RGB16_EXT),O===e.SHORT&&de&&(P=de.RGB16_SNORM_EXT),O===e.UNSIGNED_INT_5_9_9_9_REV&&(P=e.RGB9_E5),O===e.UNSIGNED_INT_10F_11F_11F_REV&&(P=e.R11F_G11F_B10F)),x===e.RGBA){const he=ne?Zr:nt.getTransfer($);O===e.FLOAT&&(P=e.RGBA32F),O===e.HALF_FLOAT&&(P=e.RGBA16F),O===e.UNSIGNED_BYTE&&(P=he==="srgb"?e.SRGB8_ALPHA8:e.RGBA8),O===e.UNSIGNED_SHORT&&de&&(P=de.RGBA16_EXT),O===e.SHORT&&de&&(P=de.RGBA16_SNORM_EXT),O===e.UNSIGNED_SHORT_4_4_4_4&&(P=e.RGBA4),O===e.UNSIGNED_SHORT_5_5_5_1&&(P=e.RGB5_A1)}return(P===e.R16F||P===e.R32F||P===e.RG16F||P===e.RG32F||P===e.RGBA16F||P===e.RGBA32F)&&t.get("EXT_color_buffer_float"),P}function S(B,x){let O;return B?x===null||x===1014||x===1020?O=e.DEPTH24_STENCIL8:x===1015?O=e.DEPTH32F_STENCIL8:x===1012&&(O=e.DEPTH24_STENCIL8,ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===1014||x===1020?O=e.DEPTH_COMPONENT24:x===1015?O=e.DEPTH_COMPONENT32F:x===1012&&(O=e.DEPTH_COMPONENT16),O}function M(B,x){return f(B)===!0||B.isFramebufferTexture&&B.minFilter!==1003&&B.minFilter!==1006?Math.log2(Math.max(x.width,x.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?x.mipmaps.length:1}function T(B){const x=B.target;x.removeEventListener("dispose",T),C(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&A.delete(x)}function y(B){const x=B.target;x.removeEventListener("dispose",y),b(x)}function C(B){const x=n.get(B);if(x.__webglInit===void 0)return;const O=B.source,J=d.get(O);if(J){const $=J[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&L(B),Object.keys(J).length===0&&d.delete(O)}n.remove(B)}function L(B){const x=n.get(B);e.deleteTexture(x.__webglTexture);const O=B.source,J=d.get(O);delete J[x.__cacheKey],a.memory.textures--}function b(B){const x=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let $=0;$<x.__webglFramebuffer[J].length;$++)e.deleteFramebuffer(x.__webglFramebuffer[J][$]);else e.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)e.deleteFramebuffer(x.__webglFramebuffer[J]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=B.textures;for(let J=0,$=O.length;J<$;J++){const ne=n.get(O[J]);ne.__webglTexture&&(e.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(O[J])}n.remove(B)}let F=0;function H(){F=0}function U(){return F}function k(B){F=B}function G(){const B=F;return B>=r.maxTextures&&ce("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+r.maxTextures),F+=1,B}function Q(B){const x=[];return x.push(B.wrapS),x.push(B.wrapT),x.push(B.wrapR||0),x.push(B.magFilter),x.push(B.minFilter),x.push(B.anisotropy),x.push(B.internalFormat),x.push(B.format),x.push(B.type),x.push(B.generateMipmaps),x.push(B.premultiplyAlpha),x.push(B.flipY),x.push(B.unpackAlignment),x.push(B.colorSpace),x.join()}function Y(B,x){const O=n.get(B);if(B.isVideoTexture&&oe(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&O.__version!==B.version){const J=B.image;if(J===null)ce("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(O,B,x);return}}else B.isExternalTexture&&(O.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,O.__webglTexture,e.TEXTURE0+x)}function ee(B,x){const O=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&O.__version!==B.version){Ue(O,B,x);return}else B.isExternalTexture&&(O.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,O.__webglTexture,e.TEXTURE0+x)}function ie(B,x){const O=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&O.__version!==B.version){Ue(O,B,x);return}i.bindTexture(e.TEXTURE_3D,O.__webglTexture,e.TEXTURE0+x)}function me(B,x){const O=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&O.__version!==B.version){ke(O,B,x);return}i.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+x)}const Ie={[kr]:e.REPEAT,[$t]:e.CLAMP_TO_EDGE,[zr]:e.MIRRORED_REPEAT},Xe={[Ct]:e.NEAREST,[xa]:e.NEAREST_MIPMAP_NEAREST,[Xo]:e.NEAREST_MIPMAP_LINEAR,[gt]:e.LINEAR,[Yo]:e.LINEAR_MIPMAP_NEAREST,[nn]:e.LINEAR_MIPMAP_LINEAR},Ze={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function X(B,x){if(x.type===1015&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===1006||x.magFilter===1007||x.magFilter===1005||x.magFilter===1008||x.minFilter===1006||x.minFilter===1007||x.minFilter===1005||x.minFilter===1008)&&ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(B,e.TEXTURE_WRAP_S,Ie[x.wrapS]),e.texParameteri(B,e.TEXTURE_WRAP_T,Ie[x.wrapT]),(B===e.TEXTURE_3D||B===e.TEXTURE_2D_ARRAY)&&e.texParameteri(B,e.TEXTURE_WRAP_R,Ie[x.wrapR]),e.texParameteri(B,e.TEXTURE_MAG_FILTER,Xe[x.magFilter]),e.texParameteri(B,e.TEXTURE_MIN_FILTER,Xe[x.minFilter]),x.compareFunction&&(e.texParameteri(B,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(B,e.TEXTURE_COMPARE_FUNC,Ze[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===1003||x.minFilter!==1005&&x.minFilter!==1008||x.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");e.texParameterf(B,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ae(B,x){let O=!1;B.__webglInit===void 0&&(B.__webglInit=!0,x.addEventListener("dispose",T));const J=x.source;let $=d.get(J);$===void 0&&($={},d.set(J,$));const ne=Q(x);if(ne!==B.__cacheKey){$[ne]===void 0&&($[ne]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[ne].usedTimes++;const de=$[B.__cacheKey];de!==void 0&&($[B.__cacheKey].usedTimes--,de.usedTimes===0&&L(x)),B.__cacheKey=ne,B.__webglTexture=$[ne].texture}return O}function Te(B,x,O){return Math.floor(Math.floor(B/O)/x)}function ue(B,x,O,J){const ne=B.updateRanges;if(ne.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,O,J,x.data);else{ne.sort((Ee,j)=>Ee.start-j.start);let de=0;for(let Ee=1;Ee<ne.length;Ee++){const j=ne[de],Oe=ne[Ee],qe=j.start+j.count,st=Te(Oe.start,x.width,4),tt=Te(j.start,x.width,4);Oe.start<=qe+1&&st===tt&&Te(Oe.start+Oe.count-1,x.width,4)===st?j.count=Math.max(j.count,Oe.start+Oe.count-j.start):(++de,ne[de]=Oe)}ne.length=de+1;const P=i.getParameter(e.UNPACK_ROW_LENGTH),he=i.getParameter(e.UNPACK_SKIP_PIXELS),ge=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let Ee=0,j=ne.length;Ee<j;Ee++){const Oe=ne[Ee],qe=Math.floor(Oe.start/4),st=Math.ceil(Oe.count/4),tt=qe%x.width,D=Math.floor(qe/x.width),q=st,re=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,tt),i.pixelStorei(e.UNPACK_SKIP_ROWS,D),i.texSubImage2D(e.TEXTURE_2D,0,tt,D,q,re,O,J,x.data)}B.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,P),i.pixelStorei(e.UNPACK_SKIP_PIXELS,he),i.pixelStorei(e.UNPACK_SKIP_ROWS,ge)}}function Ue(B,x,O){let J=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=e.TEXTURE_3D);const $=Ae(B,x),ne=x.source;i.bindTexture(J,B.__webglTexture,e.TEXTURE0+O);const de=n.get(ne);if(ne.version!==de.__version||$===!0){if(i.activeTexture(e.TEXTURE0+O),!(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)){const q=nt.getPrimaries(nt.workingColorSpace),re=x.colorSpace===""?null:nt.getPrimaries(x.colorSpace),fe=x.colorSpace===""||q===re?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let P=g(x.image,!1,r.maxTextureSize);P=At(x,P);const he=s.convert(x.format,x.colorSpace),ge=s.convert(x.type);let Ee=_(x.internalFormat,he,ge,x.normalized,x.colorSpace,x.isVideoTexture);X(J,x);let j;const Oe=x.mipmaps,qe=x.isVideoTexture!==!0,st=de.__version===void 0||$===!0,tt=ne.dataReady,D=M(x,P);if(x.isDepthTexture)Ee=S(x.format===el,x.type),st&&(qe?i.texStorage2D(e.TEXTURE_2D,1,Ee,P.width,P.height):i.texImage2D(e.TEXTURE_2D,0,Ee,P.width,P.height,0,he,ge,null));else if(x.isDataTexture)if(Oe.length>0){qe&&st&&i.texStorage2D(e.TEXTURE_2D,D,Ee,Oe[0].width,Oe[0].height);for(let q=0,re=Oe.length;q<re;q++)j=Oe[q],qe?tt&&i.texSubImage2D(e.TEXTURE_2D,q,0,0,j.width,j.height,he,ge,j.data):i.texImage2D(e.TEXTURE_2D,q,Ee,j.width,j.height,0,he,ge,j.data);x.generateMipmaps=!1}else qe?(st&&i.texStorage2D(e.TEXTURE_2D,D,Ee,P.width,P.height),tt&&ue(x,P,he,ge)):i.texImage2D(e.TEXTURE_2D,0,Ee,P.width,P.height,0,he,ge,P.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){qe&&st&&i.texStorage3D(e.TEXTURE_2D_ARRAY,D,Ee,Oe[0].width,Oe[0].height,P.depth);for(let q=0,re=Oe.length;q<re;q++)if(j=Oe[q],x.format!==1023)if(he!==null)if(qe){if(tt)if(x.layerUpdates.size>0){const fe=zo(j.width,j.height,x.format,x.type);for(const Le of x.layerUpdates){const te=j.data.subarray(Le*fe/j.data.BYTES_PER_ELEMENT,(Le+1)*fe/j.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,Le,j.width,j.height,1,he,te)}x.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,j.width,j.height,P.depth,he,j.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,q,Ee,j.width,j.height,P.depth,0,j.data,0,0);else ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?tt&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,q,0,0,0,j.width,j.height,P.depth,he,ge,j.data):i.texImage3D(e.TEXTURE_2D_ARRAY,q,Ee,j.width,j.height,P.depth,0,he,ge,j.data)}else{qe&&st&&i.texStorage2D(e.TEXTURE_2D,D,Ee,Oe[0].width,Oe[0].height);for(let q=0,re=Oe.length;q<re;q++)j=Oe[q],x.format!==1023?he!==null?qe?tt&&i.compressedTexSubImage2D(e.TEXTURE_2D,q,0,0,j.width,j.height,he,j.data):i.compressedTexImage2D(e.TEXTURE_2D,q,Ee,j.width,j.height,0,j.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?tt&&i.texSubImage2D(e.TEXTURE_2D,q,0,0,j.width,j.height,he,ge,j.data):i.texImage2D(e.TEXTURE_2D,q,Ee,j.width,j.height,0,he,ge,j.data)}else if(x.isDataArrayTexture)if(qe){if(st&&i.texStorage3D(e.TEXTURE_2D_ARRAY,D,Ee,P.width,P.height,P.depth),tt)if(x.layerUpdates.size>0){const q=zo(P.width,P.height,x.format,x.type);for(const re of x.layerUpdates){const fe=P.data.subarray(re*q/P.data.BYTES_PER_ELEMENT,(re+1)*q/P.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,re,P.width,P.height,1,he,ge,fe)}x.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,he,ge,P.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Ee,P.width,P.height,P.depth,0,he,ge,P.data);else if(x.isData3DTexture)qe?(st&&i.texStorage3D(e.TEXTURE_3D,D,Ee,P.width,P.height,P.depth),tt&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,he,ge,P.data)):i.texImage3D(e.TEXTURE_3D,0,Ee,P.width,P.height,P.depth,0,he,ge,P.data);else if(x.isFramebufferTexture){if(st)if(qe)i.texStorage2D(e.TEXTURE_2D,D,Ee,P.width,P.height);else{let q=P.width,re=P.height;for(let fe=0;fe<D;fe++)i.texImage2D(e.TEXTURE_2D,fe,Ee,q,re,0,he,ge,null),q>>=1,re>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){const q=e.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),P.parentNode!==q){q.appendChild(P),A.add(x),q.onpaint=Pe=>{const ze=Pe.changedElements;for(const Yt of A)ze.includes(Yt.image)&&(Yt.needsUpdate=!0)},q.requestPaint();return}const re=0,fe=e.RGBA,Le=e.RGBA,te=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,re,fe,Le,te,P),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(qe&&st){const q=Me(Oe[0]);i.texStorage2D(e.TEXTURE_2D,D,Ee,q.width,q.height)}for(let q=0,re=Oe.length;q<re;q++)j=Oe[q],qe?tt&&i.texSubImage2D(e.TEXTURE_2D,q,0,0,he,ge,j):i.texImage2D(e.TEXTURE_2D,q,Ee,he,ge,j);x.generateMipmaps=!1}else if(qe){if(st){const q=Me(P);i.texStorage2D(e.TEXTURE_2D,D,Ee,q.width,q.height)}tt&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,he,ge,P)}else i.texImage2D(e.TEXTURE_2D,0,Ee,he,ge,P);f(x)&&v(J),de.__version=ne.version,x.onUpdate&&x.onUpdate(x)}B.__version=x.version}function ke(B,x,O){if(x.image.length!==6)return;const J=Ae(B,x),$=x.source;i.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+O);const ne=n.get($);if($.version!==ne.__version||J===!0){i.activeTexture(e.TEXTURE0+O);const de=nt.getPrimaries(nt.workingColorSpace),P=x.colorSpace===""?null:nt.getPrimaries(x.colorSpace),he=x.colorSpace===""||de===P?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const ge=x.isCompressedTexture||x.image[0].isCompressedTexture,Ee=x.image[0]&&x.image[0].isDataTexture,j=[];for(let te=0;te<6;te++)!ge&&!Ee?j[te]=g(x.image[te],!0,r.maxCubemapSize):j[te]=Ee?x.image[te].image:x.image[te],j[te]=At(x,j[te]);const Oe=j[0],qe=s.convert(x.format,x.colorSpace),st=s.convert(x.type),tt=_(x.internalFormat,qe,st,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,q=ne.__version===void 0||J===!0,re=$.dataReady;let fe=M(x,Oe);X(e.TEXTURE_CUBE_MAP,x);let Le;if(ge){D&&q&&i.texStorage2D(e.TEXTURE_CUBE_MAP,fe,tt,Oe.width,Oe.height);for(let te=0;te<6;te++){Le=j[te].mipmaps;for(let Pe=0;Pe<Le.length;Pe++){const ze=Le[Pe];x.format!==1023?qe!==null?D?re&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,ze.width,ze.height,qe,ze.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,tt,ze.width,ze.height,0,ze.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?re&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,ze.width,ze.height,qe,st,ze.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,tt,ze.width,ze.height,0,qe,st,ze.data)}}}else{if(Le=x.mipmaps,D&&q){Le.length>0&&fe++;const te=Me(j[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,fe,tt,te.width,te.height)}for(let te=0;te<6;te++)if(Ee){D?re&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,j[te].width,j[te].height,qe,st,j[te].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,tt,j[te].width,j[te].height,0,qe,st,j[te].data);for(let Pe=0;Pe<Le.length;Pe++){const ze=Le[Pe].image[te].image;D?re&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,ze.width,ze.height,qe,st,ze.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,tt,ze.width,ze.height,0,qe,st,ze.data)}}else{D?re&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,qe,st,j[te]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,tt,qe,st,j[te]);for(let Pe=0;Pe<Le.length;Pe++){const ze=Le[Pe];D?re&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,qe,st,ze.image[te]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,tt,qe,st,ze.image[te])}}}f(x)&&v(e.TEXTURE_CUBE_MAP),ne.__version=$.version,x.onUpdate&&x.onUpdate(x)}B.__version=x.version}function De(B,x,O,J,$,ne){const de=s.convert(O.format,O.colorSpace),P=s.convert(O.type),he=_(O.internalFormat,de,P,O.normalized,O.colorSpace),ge=n.get(x),Ee=n.get(O);if(Ee.__renderTarget=x,!ge.__hasExternalTextures){const j=Math.max(1,x.width>>ne),Oe=Math.max(1,x.height>>ne);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?i.texImage3D($,ne,he,j,Oe,x.depth,0,de,P,null):i.texImage2D($,ne,he,j,Oe,0,de,P,null)}i.bindFramebuffer(e.FRAMEBUFFER,B),Qe(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,$,Ee.__webglTexture,0,Re(x)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,J,$,Ee.__webglTexture,ne),i.bindFramebuffer(e.FRAMEBUFFER,null)}function je(B,x,O){if(e.bindRenderbuffer(e.RENDERBUFFER,B),x.depthBuffer){const J=x.depthTexture,$=J&&J.isDepthTexture?J.type:null,ne=S(x.stencilBuffer,$),de=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Qe(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(x),ne,x.width,x.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(x),ne,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,ne,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,de,e.RENDERBUFFER,B)}else{const J=x.textures;for(let $=0;$<J.length;$++){const ne=J[$],de=s.convert(ne.format,ne.colorSpace),P=s.convert(ne.type),he=_(ne.internalFormat,de,P,ne.normalized,ne.colorSpace);Qe(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Re(x),he,x.width,x.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,Re(x),he,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,he,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function K(B,x,O){const J=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,B),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",T)),$.__webglTexture===void 0){$.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),X(e.TEXTURE_CUBE_MAP,x.depthTexture);const ge=s.convert(x.depthTexture.format),Ee=s.convert(x.depthTexture.type);let j;x.depthTexture.format===1026?j=e.DEPTH_COMPONENT24:x.depthTexture.format===1027&&(j=e.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,j,x.width,x.height,0,ge,Ee,null)}}else Y(x.depthTexture,0);const ne=$.__webglTexture,de=Re(x),P=J?e.TEXTURE_CUBE_MAP_POSITIVE_X+O:e.TEXTURE_2D,he=x.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===1026)Qe(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,he,P,ne,0,de):e.framebufferTexture2D(e.FRAMEBUFFER,he,P,ne,0);else if(x.depthTexture.format===1027)Qe(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,he,P,ne,0,de):e.framebufferTexture2D(e.FRAMEBUFFER,he,P,ne,0);else throw new Error("Unknown depthTexture format")}function ae(B){const x=n.get(B),O=B.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==B.depthTexture){const J=B.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",$)};J.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=J}if(B.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let J=0;J<6;J++)K(x.__webglFramebuffer[J],B,J);else{const J=B.texture.mipmaps;J&&J.length>0?K(x.__webglFramebuffer[0],B,0):K(x.__webglFramebuffer,B,0)}else if(O){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=e.createRenderbuffer(),je(x.__webglDepthbuffer[J],B,!1);else{const $=B.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer[J];e.bindRenderbuffer(e.RENDERBUFFER,ne),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,ne)}}else{const J=B.texture.mipmaps;if(J&&J.length>0?i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),je(x.__webglDepthbuffer,B,!1);else{const $=B.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ne),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,ne)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function se(B,x,O){const J=n.get(B);x!==void 0&&De(J.__webglFramebuffer,B,B.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),O!==void 0&&ae(B)}function xe(B){const x=B.texture,O=n.get(B),J=n.get(x);B.addEventListener("dispose",y);const $=B.textures,ne=B.isWebGLCubeRenderTarget===!0,de=$.length>1;if(de||(J.__webglTexture===void 0&&(J.__webglTexture=e.createTexture()),J.__version=x.version,a.memory.textures++),ne){O.__webglFramebuffer=[];for(let P=0;P<6;P++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[P]=[];for(let he=0;he<x.mipmaps.length;he++)O.__webglFramebuffer[P][he]=e.createFramebuffer()}else O.__webglFramebuffer[P]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let P=0;P<x.mipmaps.length;P++)O.__webglFramebuffer[P]=e.createFramebuffer()}else O.__webglFramebuffer=e.createFramebuffer();if(de)for(let P=0,he=$.length;P<he;P++){const ge=n.get($[P]);ge.__webglTexture===void 0&&(ge.__webglTexture=e.createTexture(),a.memory.textures++)}if(B.samples>0&&Qe(B)===!1){O.__webglMultisampledFramebuffer=e.createFramebuffer(),O.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let P=0;P<$.length;P++){const he=$[P];O.__webglColorRenderbuffer[P]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,O.__webglColorRenderbuffer[P]);const ge=s.convert(he.format,he.colorSpace),Ee=s.convert(he.type),j=_(he.internalFormat,ge,Ee,he.normalized,he.colorSpace,B.isXRRenderTarget===!0),Oe=Re(B);e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe,j,B.width,B.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+P,e.RENDERBUFFER,O.__webglColorRenderbuffer[P])}e.bindRenderbuffer(e.RENDERBUFFER,null),B.depthBuffer&&(O.__webglDepthRenderbuffer=e.createRenderbuffer(),je(O.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ne){i.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),X(e.TEXTURE_CUBE_MAP,x);for(let P=0;P<6;P++)if(x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)De(O.__webglFramebuffer[P][he],B,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+P,he);else De(O.__webglFramebuffer[P],B,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);f(x)&&v(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(de){for(let P=0,he=$.length;P<he;P++){const ge=$[P],Ee=n.get(ge);let j=e.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(j=B.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(j,Ee.__webglTexture),X(j,ge),De(O.__webglFramebuffer,B,ge,e.COLOR_ATTACHMENT0+P,j,0),f(ge)&&v(j)}i.unbindTexture()}else{let P=e.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(P=B.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(P,J.__webglTexture),X(P,x),x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)De(O.__webglFramebuffer[he],B,x,e.COLOR_ATTACHMENT0,P,he);else De(O.__webglFramebuffer,B,x,e.COLOR_ATTACHMENT0,P,0);f(x)&&v(P),i.unbindTexture()}B.depthBuffer&&ae(B)}function ve(B){const x=B.textures;for(let O=0,J=x.length;O<J;O++){const $=x[O];if(f($)){const ne=E(B),de=n.get($).__webglTexture;i.bindTexture(ne,de),v(ne),i.unbindTexture()}}}const Ne=[],R=[];function et(B){if(B.samples>0){if(Qe(B)===!1){const x=B.textures,O=B.width,J=B.height;let $=e.COLOR_BUFFER_BIT;const ne=B.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=n.get(B),P=x.length>1;if(P)for(let ge=0;ge<x.length;ge++)i.bindFramebuffer(e.FRAMEBUFFER,de.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,de.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const he=B.texture.mipmaps;he&&he.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ge=0;ge<x.length;ge++){if(B.resolveDepthBuffer&&(B.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),P){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,de.__webglColorRenderbuffer[ge]);const Ee=n.get(x[ge]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ee,0)}e.blitFramebuffer(0,0,O,J,0,0,O,J,$,e.NEAREST),l===!0&&(Ne.length=0,R.length=0,Ne.push(e.COLOR_ATTACHMENT0+ge),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Ne.push(ne),R.push(ne),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,R)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ne))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),P)for(let ge=0;ge<x.length;ge++){i.bindFramebuffer(e.FRAMEBUFFER,de.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,de.__webglColorRenderbuffer[ge]);const Ee=n.get(x[ge]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,de.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,Ee,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&l){const x=B.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function Re(B){return Math.min(r.maxSamples,B.samples)}function Qe(B){const x=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function oe(B){const x=a.render.frame;u.get(B)!==x&&(u.set(B,x),B.update())}function At(B,x){const O=B.colorSpace,J=B.format,$=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||O!=="srgb-linear"&&O!==""&&(nt.getTransfer(O)==="srgb"?(J!==1023||$!==1009)&&ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",O)),x}function Me(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.getTextureUnits=U,this.setTextureUnits=k,this.setTexture2D=Y,this.setTexture2DArray=ee,this.setTexture3D=ie,this.setTextureCube=me,this.rebindTextures=se,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Id(e,t){function i(n,r=""){let s;const a=nt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a==="srgb")if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===36196||n===37492)return a==="srgb"?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===37496)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return s.COMPRESSED_R11_EAC;if(n===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return s.COMPRESSED_RG11_EAC;if(n===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===37808)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===36492)return a==="srgb"?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]!==void 0?e[n]:null}return{convert:i}}var T0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,D0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new xl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new li({vertexShader:T0,fragmentShader:R0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new La(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},L0=class extends gi{constructor(e,t){super();const i=this;let n=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,u=null,A=null,h=null,d=null;const p=typeof XRWebGLBinding<"u",m=new D0,g={},f=t.getContextAttributes();let v=null,E=null;const _=[],S=[],M=new Z;let T=null;const y=new Rt;y.viewport=new ht;const C=new Rt;C.viewport=new ht;const L=[y,C],b=new cd;let F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Ae=_[X];return Ae===void 0&&(Ae=new Aa,_[X]=Ae),Ae.getTargetRaySpace()},this.getControllerGrip=function(X){let Ae=_[X];return Ae===void 0&&(Ae=new Aa,_[X]=Ae),Ae.getGripSpace()},this.getHand=function(X){let Ae=_[X];return Ae===void 0&&(Ae=new Aa,_[X]=Ae),Ae.getHandSpace()};function U(X){const Ae=S.indexOf(X.inputSource);if(Ae===-1)return;const Te=_[Ae];Te!==void 0&&(Te.update(X.inputSource,X.frame,l||s),Te.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",G);for(let X=0;X<_.length;X++){const Ae=S[X];Ae!==null&&(S[X]=null,_[X].disconnect(Ae))}F=null,H=null,m.reset();for(const X in g)delete g[X];e.setRenderTarget(v),h=null,A=null,u=null,n=null,E=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return A!==null?A:h},this.getBinding=function(){return u===null&&p&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return d},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(v=e.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",k),n.addEventListener("inputsourceschange",G),f.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(M),p&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Te=null,ue=null;f.depth&&(ue=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=f.stencil?el:or,Te=f.stencil?Zo:Fi);const Ue={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=this.getBinding(),A=u.createProjectionLayer(Ue),n.updateRenderState({layers:[A]}),e.setPixelRatio(1),e.setSize(A.textureWidth,A.textureHeight,!1),E=new ni(A.textureWidth,A.textureHeight,{format:Qt,type:Ye,depthTexture:new Sn(A.textureWidth,A.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:A.ignoreDepthValues===!1,resolveStencilBuffer:A.ignoreDepthValues===!1})}else{const Ae={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(n,t,Ae),n.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new ni(h.framebufferWidth,h.framebufferHeight,{format:Qt,type:Ye,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await n.requestReferenceSpace(a),Ze.setContext(n),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(X){for(let Ae=0;Ae<X.removed.length;Ae++){const Te=X.removed[Ae],ue=S.indexOf(Te);ue>=0&&(S[ue]=null,_[ue].disconnect(Te))}for(let Ae=0;Ae<X.added.length;Ae++){const Te=X.added[Ae];let ue=S.indexOf(Te);if(ue===-1){for(let ke=0;ke<_.length;ke++)if(ke>=S.length){S.push(Te),ue=ke;break}else if(S[ke]===null){S[ke]=Te,ue=ke;break}if(ue===-1)break}const Ue=_[ue];Ue&&Ue.connect(Te)}}const Q=new w,Y=new w;function ee(X,Ae,Te){Q.setFromMatrixPosition(Ae.matrixWorld),Y.setFromMatrixPosition(Te.matrixWorld);const ue=Q.distanceTo(Y),Ue=Ae.projectionMatrix.elements,ke=Te.projectionMatrix.elements,De=Ue[14]/(Ue[10]-1),je=Ue[14]/(Ue[10]+1),K=(Ue[9]+1)/Ue[5],ae=(Ue[9]-1)/Ue[5],se=(Ue[8]-1)/Ue[0],xe=(ke[8]+1)/ke[0],ve=De*se,Ne=De*xe,R=ue/(-se+xe),et=R*-se;if(Ae.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(et),X.translateZ(R),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ue[10]===-1)X.projectionMatrix.copy(Ae.projectionMatrix),X.projectionMatrixInverse.copy(Ae.projectionMatrixInverse);else{const Re=De+R,Qe=je+R,oe=ve-et,At=Ne+(ue-et),Me=K*je/Qe*Re,B=ae*je/Qe*Re;X.projectionMatrix.makePerspective(oe,At,Me,B,Re,Qe),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ie(X,Ae){Ae===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Ae.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let Ae=X.near,Te=X.far;m.texture!==null&&(m.depthNear>0&&(Ae=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),b.near=C.near=y.near=Ae,b.far=C.far=y.far=Te,(F!==b.near||H!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),F=b.near,H=b.far),b.layers.mask=X.layers.mask|6,y.layers.mask=b.layers.mask&-5,C.layers.mask=b.layers.mask&-3;const ue=X.parent,Ue=b.cameras;ie(b,ue);for(let ke=0;ke<Ue.length;ke++)ie(Ue[ke],ue);Ue.length===2?ee(b,y,C):b.projectionMatrix.copy(y.projectionMatrix),me(X,b,ue)};function me(X,Ae,Te){Te===null?X.matrix.copy(Ae.matrixWorld):(X.matrix.copy(Te.matrixWorld),X.matrix.invert(),X.matrix.multiply(Ae.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Ae.projectionMatrix),X.projectionMatrixInverse.copy(Ae.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=lr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(A===null&&h===null))return o},this.setFoveation=function(X){o=X,A!==null&&(A.fixedFoveation=X),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(b)},this.getCameraTexture=function(X){return g[X]};let Ie=null;function Xe(X,Ae){if(c=Ae.getViewerPose(l||s),d=Ae,c!==null){const Te=c.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let ue=!1;Te.length!==b.cameras.length&&(b.cameras.length=0,ue=!0);for(let ke=0;ke<Te.length;ke++){const De=Te[ke];let je=null;if(h!==null)je=h.getViewport(De);else{const ae=u.getViewSubImage(A,De);je=ae.viewport,ke===0&&(e.setRenderTargetTextures(E,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(E))}let K=L[ke];K===void 0&&(K=new Rt,K.layers.enable(ke),K.viewport=new ht,L[ke]=K),K.matrix.fromArray(De.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(De.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(je.x,je.y,je.width,je.height),ke===0&&(b.matrix.copy(K.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ue===!0&&b.cameras.push(K)}const Ue=n.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&p){u=i.getBinding();const ke=u.getDepthInformation(Te[0]);ke&&ke.isValid&&ke.texture&&m.init(ke,n.renderState)}if(Ue&&Ue.includes("camera-access")&&p){e.state.unbindTexture(),u=i.getBinding();for(let ke=0;ke<Te.length;ke++){const De=Te[ke].camera;if(De){let je=g[De];je||(je=new xl,g[De]=je);const K=u.getCameraImage(De);je.sourceTexture=K}}}}for(let Te=0;Te<_.length;Te++){const ue=S[Te],Ue=_[Te];ue!==null&&Ue!==void 0&&Ue.update(ue,Ae,l||s)}Ie&&Ie(X,Ae),Ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ae}),d=null}const Ze=new md;Ze.setAnimationLoop(Xe),this.setAnimationLoop=function(X){Ie=X},this.dispose=function(){}}},P0=new He,Cd=new We;Cd.set(-1,0,0,0,1,0,0,0,1);function U0(e,t){function i(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,NA(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,v,E,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),A(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),h(g,f),f.isMeshPhysicalMaterial&&d(g,f,_)):f.isMeshMatcapMaterial?(s(g,f),p(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),m(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,v,E):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,i(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,i(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,i(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===1&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,i(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===1&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,i(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,i(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const v=t.get(f),E=v.envMap,_=v.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(P0.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Cd),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,i(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,v,E){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*v,g.scale.value=E*.5,f.map&&(g.map.value=f.map,i(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,i(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,i(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,i(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function A(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,v){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,f){f.matcap&&(g.matcap.value=f.matcap)}function m(g,f){const v=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function N0(e,t,i,n){let r={},s={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const _=E.program;n.uniformBlockBinding(v,_)}function c(v,E){let _=r[v.id];_===void 0&&(p(v),_=u(v),r[v.id]=_,v.addEventListener("dispose",g));const S=E.program;n.updateUBOMapping(v,S);const M=t.render.frame;s[v.id]!==M&&(h(v),s[v.id]=M)}function u(v){const E=A();v.__bindingPointIndex=E;const _=e.createBuffer(),S=v.__size,M=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,S,M),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,_),_}function A(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const E=r[v.id],_=v.uniforms,S=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let M=0,T=_.length;M<T;M++){const y=Array.isArray(_[M])?_[M]:[_[M]];for(let C=0,L=y.length;C<L;C++){const b=y[C];if(d(b,M,C,S)===!0){const F=b.__offset,H=Array.isArray(b.value)?b.value:[b.value];let U=0;for(let k=0;k<H.length;k++){const G=H[k],Q=m(G);typeof G=="number"||typeof G=="boolean"?(b.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,F+U,b.__data)):G.isMatrix3?(b.__data[0]=G.elements[0],b.__data[1]=G.elements[1],b.__data[2]=G.elements[2],b.__data[3]=0,b.__data[4]=G.elements[3],b.__data[5]=G.elements[4],b.__data[6]=G.elements[5],b.__data[7]=0,b.__data[8]=G.elements[6],b.__data[9]=G.elements[7],b.__data[10]=G.elements[8],b.__data[11]=0):ArrayBuffer.isView(G)?b.__data.set(new G.constructor(G.buffer,G.byteOffset,b.__data.length)):(G.toArray(b.__data,U),U+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,b.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(v,E,_,S){const M=v.value,T=E+"_"+_;if(S[T]===void 0)return typeof M=="number"||typeof M=="boolean"?S[T]=M:ArrayBuffer.isView(M)?S[T]=M.slice():S[T]=M.clone(),!0;{const y=S[T];if(typeof M=="number"||typeof M=="boolean"){if(y!==M)return S[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(y.equals(M)===!1)return y.copy(M),!0}}return!1}function p(v){const E=v.uniforms;let _=0;const S=16;for(let T=0,y=E.length;T<y;T++){const C=Array.isArray(E[T])?E[T]:[E[T]];for(let L=0,b=C.length;L<b;L++){const F=C[L],H=Array.isArray(F.value)?F.value:[F.value];for(let U=0,k=H.length;U<k;U++){const G=H[U],Q=m(G),Y=_%S,ee=Y%Q.boundary,ie=Y+ee;_+=ee,ie!==0&&S-ie<Q.storage&&(_+=S-ie),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=Q.storage}}}const M=_%S;return M>0&&(_+=S-M),v.__size=_,v.__cache={},this}function m(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):ce("WebGLRenderer: Unsupported uniform value type.",v),E}function g(v){const E=v.target;E.removeEventListener("dispose",g);const _=a.indexOf(E.__bindingPointIndex);a.splice(_,1),e.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function f(){for(const v in r)e.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}var F0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ii=null;function Q0(){return Ii===null&&(Ii=new ai(F0,16,16,Ci,Zt),Ii.name="DFG_LUT",Ii.minFilter=gt,Ii.magFilter=gt,Ii.wrapS=$t,Ii.wrapT=$t,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}var O0=class{constructor(e={}){const{canvas:t=mu(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:A=!1,outputBufferType:h=Ye}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const p=h,m=new Set([il,tl,Ca]),g=new Set([Ye,Fi,Ia,Zo,Jo,Ko]),f=new Uint32Array(4),v=new Int32Array(4),E=new w;let _=null,S=null;const M=[],T=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,b=null;this._outputColorSpace=Ft;let F=0,H=0,U=null,k=-1,G=null;const Q=new ht,Y=new ht;let ee=null;const ie=new ye(0);let me=0,Ie=t.width,Xe=t.height,Ze=1,X=null,Ae=null;const Te=new ht(0,0,Ie,Xe),ue=new ht(0,0,Ie,Xe);let Ue=!1;const ke=new dr;let De=!1,je=!1;const K=new He,ae=new w,se=new ht,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function Ne(){return U===null?Ze:1}let R=i;function et(I,N){return t.getContext(I,N)}try{const I={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r184"),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),R===null){const N="webgl2";if(R=et(N,I),R===null)throw et(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw we("WebGLRenderer: "+I.message),I}let Re,Qe,oe,At,Me,B,x,O,J,$,ne,de,P,he,ge,Ee,j,Oe,qe,st,tt,D,q;function re(){Re=new Om(R),Re.init(),tt=new Id(R,Re),Qe=new Rm(R,Re,e,tt),oe=new b0(R,Re),Qe.reversedDepthBuffer&&A&&oe.buffers.depth.setReversed(!0),At=new zm(R),Me=new f0,B=new w0(R,Re,oe,Me,Qe,tt,At),x=new Qm(C),O=new Sm(R),D=new wm(R,O),J=new Gm(R,O,At,D),$=new Hm(R,J,O,D,At),Oe=new Vm(R,Qe,B),ge=new Dm(Me),ne=new d0(C,x,Re,Qe,D,ge),de=new U0(C,Me),P=new g0,he=new x0(Re),j=new bm(C,x,oe,$,d,o),Ee=new B0(C,$,Qe),q=new N0(R,At,Qe,oe),qe=new Tm(R,Re,At),st=new km(R,Re,At),At.programs=ne.programs,C.capabilities=Qe,C.extensions=Re,C.properties=Me,C.renderLists=P,C.shadowMap=Ee,C.state=oe,C.info=At}re(),p!==1009&&(y=new qm(p,t.width,t.height,n,r));const fe=new L0(C,R);this.xr=fe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const I=Re.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Re.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Ze},this.setPixelRatio=function(I){I!==void 0&&(Ze=I,this.setSize(Ie,Xe,!1))},this.getSize=function(I){return I.set(Ie,Xe)},this.setSize=function(I,N,W=!0){if(fe.isPresenting){ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=I,Xe=N,t.width=Math.floor(I*Ze),t.height=Math.floor(N*Ze),W===!0&&(t.style.width=I+"px",t.style.height=N+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,I,N)},this.getDrawingBufferSize=function(I){return I.set(Ie*Ze,Xe*Ze).floor()},this.setDrawingBufferSize=function(I,N,W){Ie=I,Xe=N,Ze=W,t.width=Math.floor(I*W),t.height=Math.floor(N*W),this.setViewport(0,0,I,N)},this.setEffects=function(I){if(p===1009){we("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let N=0;N<I.length;N++)if(I[N].isOutputPass===!0){ce("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(Q)},this.getViewport=function(I){return I.copy(Te)},this.setViewport=function(I,N,W,V){I.isVector4?Te.set(I.x,I.y,I.z,I.w):Te.set(I,N,W,V),oe.viewport(Q.copy(Te).multiplyScalar(Ze).round())},this.getScissor=function(I){return I.copy(ue)},this.setScissor=function(I,N,W,V){I.isVector4?ue.set(I.x,I.y,I.z,I.w):ue.set(I,N,W,V),oe.scissor(Y.copy(ue).multiplyScalar(Ze).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(I){oe.setScissorTest(Ue=I)},this.setOpaqueSort=function(I){X=I},this.setTransparentSort=function(I){Ae=I},this.getClearColor=function(I){return I.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor(...arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha(...arguments)},this.clear=function(I=!0,N=!0,W=!0){let V=0;if(I){let z=!1;if(U!==null){const le=U.texture.format;z=m.has(le)}if(z){const le=U.texture.type,_e=g.has(le),Se=j.getClearColor(),Be=j.getClearAlpha(),Ve=Se.r,it=Se.g,rt=Se.b;_e?(f[0]=Ve,f[1]=it,f[2]=rt,f[3]=Be,R.clearBufferuiv(R.COLOR,0,f)):(v[0]=Ve,v[1]=it,v[2]=rt,v[3]=Be,R.clearBufferiv(R.COLOR,0,v))}else V|=R.COLOR_BUFFER_BIT}N&&(V|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),b=I},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),j.dispose(),P.dispose(),he.dispose(),Me.dispose(),x.dispose(),$.dispose(),D.dispose(),q.dispose(),ne.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Xl),fe.removeEventListener("sessionend",Yl),an.stop()};function Le(I){I.preventDefault(),es("WebGLRenderer: Context Lost."),L=!0}function te(){es("WebGLRenderer: Context Restored."),L=!1;const I=At.autoReset,N=Ee.enabled,W=Ee.autoUpdate,V=Ee.needsUpdate,z=Ee.type;re(),At.autoReset=I,Ee.enabled=N,Ee.autoUpdate=W,Ee.needsUpdate=V,Ee.type=z}function Pe(I){we("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ze(I){const N=I.target;N.removeEventListener("dispose",ze),Yt(N)}function Yt(I){mt(I),Me.remove(I)}function mt(I){const N=Me.get(I).programs;N!==void 0&&(N.forEach(function(W){ne.releaseProgram(W)}),I.isShaderMaterial&&ne.releaseShaderCache(I))}this.renderBufferDirect=function(I,N,W,V,z,le){N===null&&(N=xe);const _e=z.isMesh&&z.matrixWorld.determinant()<0,Se=Pd(I,N,W,V,z);oe.setMaterial(V,_e);let Be=W.index,Ve=1;if(V.wireframe===!0){if(Be=J.getWireframeAttribute(W),Be===void 0)return;Ve=2}const it=W.drawRange,rt=W.attributes.position;let Fe=it.start*Ve,pt=(it.start+it.count)*Ve;le!==null&&(Fe=Math.max(Fe,le.start*Ve),pt=Math.min(pt,(le.start+le.count)*Ve)),Be!==null?(Fe=Math.max(Fe,0),pt=Math.min(pt,Be.count)):rt!=null&&(Fe=Math.max(Fe,0),pt=Math.min(pt,rt.count));const _t=pt-Fe;if(_t<0||_t===1/0)return;D.setup(z,V,Se,W,Be);let yt,at=qe;if(Be!==null&&(yt=O.get(Be),at=st,at.setIndex(yt)),z.isMesh)V.wireframe===!0?(oe.setLineWidth(V.wireframeLinewidth*Ne()),at.setMode(R.LINES)):at.setMode(R.TRIANGLES);else if(z.isLine){let Lt=V.linewidth;Lt===void 0&&(Lt=1),oe.setLineWidth(Lt*Ne()),z.isLineSegments?at.setMode(R.LINES):z.isLineLoop?at.setMode(R.LINE_LOOP):at.setMode(R.LINE_STRIP)}else z.isPoints?at.setMode(R.POINTS):z.isSprite&&at.setMode(R.TRIANGLES);if(z.isBatchedMesh)if(Re.get("WEBGL_multi_draw"))at.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Lt=z._multiDrawStarts,be=z._multiDrawCounts,ui=z._multiDrawCount,ot=Be?O.get(Be).bytesPerElement:1,ri=Me.get(V).currentProgram.getUniforms();for(let _i=0;_i<ui;_i++)ri.setValue(R,"_gl_DrawID",_i),at.render(Lt[_i]/ot,be[_i])}else if(z.isInstancedMesh)at.renderInstances(Fe,_t,z.count);else if(W.isInstancedBufferGeometry){const Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,be=Math.min(W.instanceCount,Lt);at.renderInstances(Fe,_t,be)}else at.render(Fe,_t)};function vi(I,N,W){I.transparent===!0&&I.side===2&&I.forceSinglePass===!1?(I.side=1,I.needsUpdate=!0,gs(I,N,W),I.side=0,I.needsUpdate=!0,gs(I,N,W),I.side=2):gs(I,N,W)}this.compile=function(I,N,W=null){W===null&&(W=I),S=he.get(W),S.init(N),T.push(S),W.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),I!==W&&I.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),S.setupLights();const V=new Set;return I.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const le=z.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){const Se=le[_e];vi(Se,W,z),V.add(Se)}else vi(le,W,z),V.add(le)}),S=T.pop(),V},this.compileAsync=function(I,N,W=null){const V=this.compile(I,N,W);return new Promise(z=>{function le(){if(V.forEach(function(_e){Me.get(_e).currentProgram.isReady()&&V.delete(_e)}),V.size===0){z(I);return}setTimeout(le,10)}Re.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let hi=null;function Dd(I){hi&&hi(I)}function Xl(){an.stop()}function Yl(){an.start()}const an=new md;an.setAnimationLoop(Dd),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(I){hi=I,fe.setAnimationLoop(I),I===null?an.stop():an.start()},fe.addEventListener("sessionstart",Xl),fe.addEventListener("sessionend",Yl),this.render=function(I,N){if(N!==void 0&&N.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;b!==null&&b.renderStart(I,N);const W=fe.enabled===!0&&fe.isPresenting===!0,V=y!==null&&(U===null||W)&&y.begin(C,U);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(N),N=fe.getCamera()),I.isScene===!0&&I.onBeforeRender(C,I,N,U),S=he.get(I,T.length),S.init(N),S.state.textureUnits=B.getTextureUnits(),T.push(S),K.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ke.setFromProjectionMatrix(K,ji,N.reversedDepth),je=this.localClippingEnabled,De=ge.init(this.clippingPlanes,je),_=P.get(I,M.length),_.init(),M.push(_),fe.enabled===!0&&fe.isPresenting===!0){const le=C.xr.getDepthSensingMesh();le!==null&&Fa(le,N,-1/0,C.sortObjects)}Fa(I,N,0,C.sortObjects),_.finish(),C.sortObjects===!0&&_.sort(X,Ae),ve=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ve&&j.addToRenderList(_,I),this.info.render.frame++,De===!0&&ge.beginShadows();const z=S.state.shadowsArray;if(Ee.render(z,I,N),De===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&y.hasRenderPass())===!1){const le=_.opaque,_e=_.transmissive;if(S.setupLights(),N.isArrayCamera){const Se=N.cameras;if(_e.length>0)for(let Be=0,Ve=Se.length;Be<Ve;Be++){const it=Se[Be];Kl(le,_e,I,it)}ve&&j.render(I);for(let Be=0,Ve=Se.length;Be<Ve;Be++){const it=Se[Be];Jl(_,I,it,it.viewport)}}else _e.length>0&&Kl(le,_e,I,N),ve&&j.render(I),Jl(_,I,N)}U!==null&&H===0&&(B.updateMultisampleRenderTarget(U),B.updateRenderTargetMipmap(U)),V&&y.end(C),I.isScene===!0&&I.onAfterRender(C,I,N),D.resetDefaultState(),k=-1,G=null,T.pop(),T.length>0?(S=T[T.length-1],B.setTextureUnits(S.state.textureUnits),De===!0&&ge.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,M.pop(),M.length>0?_=M[M.length-1]:_=null,b!==null&&b.renderEnd()};function Fa(I,N,W,V){if(I.visible===!1)return;if(I.layers.test(N.layers)){if(I.isGroup)W=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(N);else if(I.isLightProbeGrid)S.pushLightProbeGrid(I);else if(I.isLight)S.pushLight(I),I.castShadow&&S.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ke.intersectsSprite(I)){V&&se.setFromMatrixPosition(I.matrixWorld).applyMatrix4(K);const le=$.update(I),_e=I.material;_e.visible&&_.push(I,le,_e,W,se.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ke.intersectsObject(I))){const le=$.update(I),_e=I.material;if(V&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),se.copy(I.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),se.copy(le.boundingSphere.center)),se.applyMatrix4(I.matrixWorld).applyMatrix4(K)),Array.isArray(_e)){const Se=le.groups;for(let Be=0,Ve=Se.length;Be<Ve;Be++){const it=Se[Be],rt=_e[it.materialIndex];rt&&rt.visible&&_.push(I,le,rt,W,se.z,it)}}else _e.visible&&_.push(I,le,_e,W,se.z,null)}}const z=I.children;for(let le=0,_e=z.length;le<_e;le++)Fa(z[le],N,W,V)}function Jl(I,N,W,V){const{opaque:z,transmissive:le,transparent:_e}=I;S.setupLightsView(W),De===!0&&ge.setGlobalState(C.clippingPlanes,W),V&&oe.viewport(Q.copy(V)),z.length>0&&ps(z,N,W),le.length>0&&ps(le,N,W),_e.length>0&&ps(_e,N,W),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Kl(I,N,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){const rt=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new ni(1,1,{generateMipmaps:!0,type:rt?Zt:Ye,minFilter:nn,samples:Math.max(4,Qe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const z=S.state.transmissionRenderTarget[V.id],le=V.viewport||Q;z.setSize(le.z*C.transmissionResolutionScale,le.w*C.transmissionResolutionScale);const _e=C.getRenderTarget(),Se=C.getActiveCubeFace(),Be=C.getActiveMipmapLevel();C.setRenderTarget(z),C.getClearColor(ie),me=C.getClearAlpha(),me<1&&C.setClearColor(16777215,.5),C.clear(),ve&&j.render(W);const Ve=C.toneMapping;C.toneMapping=0;const it=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),De===!0&&ge.setGlobalState(C.clippingPlanes,V),ps(I,W,V),B.updateMultisampleRenderTarget(z),B.updateRenderTargetMipmap(z),Re.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Fe=0,pt=N.length;Fe<pt;Fe++){const{object:_t,geometry:yt,material:at,group:Lt}=N[Fe];if(at.side===2&&_t.layers.test(V.layers)){const be=at.side;at.side=1,at.needsUpdate=!0,Zl(_t,W,V,yt,at,Lt),at.side=be,at.needsUpdate=!0,rt=!0}}rt===!0&&(B.updateMultisampleRenderTarget(z),B.updateRenderTargetMipmap(z))}C.setRenderTarget(_e,Se,Be),C.setClearColor(ie,me),it!==void 0&&(V.viewport=it),C.toneMapping=Ve}function ps(I,N,W){const V=N.isScene===!0?N.overrideMaterial:null;for(let z=0,le=I.length;z<le;z++){const _e=I[z],{object:Se,geometry:Be,group:Ve}=_e;let it=_e.material;it.allowOverride===!0&&V!==null&&(it=V),Se.layers.test(W.layers)&&Zl(Se,N,W,Be,it,Ve)}}function Zl(I,N,W,V,z,le){I.onBeforeRender(C,N,W,V,z,le),I.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),z.onBeforeRender(C,N,W,V,I,le),z.transparent===!0&&z.side===2&&z.forceSinglePass===!1?(z.side=1,z.needsUpdate=!0,C.renderBufferDirect(W,N,V,z,I,le),z.side=0,z.needsUpdate=!0,C.renderBufferDirect(W,N,V,z,I,le),z.side=2):C.renderBufferDirect(W,N,V,z,I,le),I.onAfterRender(C,N,W,V,z,le)}function gs(I,N,W){N.isScene!==!0&&(N=xe);const V=Me.get(I),z=S.state.lights,le=S.state.shadowsArray,_e=z.state.version,Se=ne.getParameters(I,z.state,le,N,W,S.state.lightProbeGridArray),Be=ne.getProgramCacheKey(Se);let Ve=V.programs;V.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;const it=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;V.envMap=x.get(I.envMap||V.environment,it),V.envMapRotation=V.environment!==null&&I.envMap===null?N.environmentRotation:I.envMapRotation,Ve===void 0&&(I.addEventListener("dispose",ze),Ve=new Map,V.programs=Ve);let rt=Ve.get(Be);if(rt!==void 0){if(V.currentProgram===rt&&V.lightsStateVersion===_e)return jl(I,Se),rt}else Se.uniforms=ne.getUniforms(I),b!==null&&I.isNodeMaterial&&b.build(I,W,Se),I.onBeforeCompile(Se,C),rt=ne.acquireProgram(Se,Be),Ve.set(Be,rt),V.uniforms=Se.uniforms;const Fe=V.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Fe.clippingPlanes=ge.uniform),jl(I,Se),V.needsLights=Nd(I),V.lightsStateVersion=_e,V.needsLights&&(Fe.ambientLightColor.value=z.state.ambient,Fe.lightProbe.value=z.state.probe,Fe.directionalLights.value=z.state.directional,Fe.directionalLightShadows.value=z.state.directionalShadow,Fe.spotLights.value=z.state.spot,Fe.spotLightShadows.value=z.state.spotShadow,Fe.rectAreaLights.value=z.state.rectArea,Fe.ltc_1.value=z.state.rectAreaLTC1,Fe.ltc_2.value=z.state.rectAreaLTC2,Fe.pointLights.value=z.state.point,Fe.pointLightShadows.value=z.state.pointShadow,Fe.hemisphereLights.value=z.state.hemi,Fe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Fe.spotLightMatrix.value=z.state.spotLightMatrix,Fe.spotLightMap.value=z.state.spotLightMap,Fe.pointShadowMatrix.value=z.state.pointShadowMatrix),V.lightProbeGrid=S.state.lightProbeGridArray.length>0,V.currentProgram=rt,V.uniformsList=null,rt}function $l(I){if(I.uniformsList===null){const N=I.currentProgram.getUniforms();I.uniformsList=da.seqWithValue(N.seq,I.uniforms)}return I.uniformsList}function jl(I,N){const W=Me.get(I);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Ld(I,N){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;E.setFromMatrixPosition(N.matrixWorld);for(let W=0,V=I.length;W<V;W++){const z=I[W];if(z.texture!==null&&z.boundingBox.containsPoint(E))return z}return null}function Pd(I,N,W,V,z){N.isScene!==!0&&(N=xe),B.resetTextureUnits();const le=N.fog,_e=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,Se=U===null?C.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:nt.workingColorSpace,Be=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ve=x.get(V.envMap||_e,Be),it=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,rt=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Fe=!!W.morphAttributes.position,pt=!!W.morphAttributes.normal,_t=!!W.morphAttributes.color;let yt=0;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(yt=C.toneMapping);const at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Lt=at!==void 0?at.length:0,be=Me.get(V),ui=S.state.lights;if(De===!0&&(je===!0||I!==G)){const ct=I===G&&V.id===k;ge.setState(V,I,ct)}let ot=!1;V.version===be.__version?(be.needsLights&&be.lightsStateVersion!==ui.state.version||be.outputColorSpace!==Se||z.isBatchedMesh&&be.batching===!1||!z.isBatchedMesh&&be.batching===!0||z.isBatchedMesh&&be.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&be.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&be.instancing===!1||!z.isInstancedMesh&&be.instancing===!0||z.isSkinnedMesh&&be.skinning===!1||!z.isSkinnedMesh&&be.skinning===!0||z.isInstancedMesh&&be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&be.instancingMorph===!1&&z.morphTexture!==null||be.envMap!==Ve||V.fog===!0&&be.fog!==le||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ge.numPlanes||be.numIntersection!==ge.numIntersection)||be.vertexAlphas!==it||be.vertexTangents!==rt||be.morphTargets!==Fe||be.morphNormals!==pt||be.morphColors!==_t||be.toneMapping!==yt||be.morphTargetsCount!==Lt||!!be.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,be.__version=V.version);let ri=be.currentProgram;ot===!0&&(ri=gs(V,N,z),b&&V.isNodeMaterial&&b.onUpdateProgram(V,ri,be));let _i=!1,Oi=!1,Tn=!1;const dt=ri.getUniforms(),xt=be.uniforms;if(oe.useProgram(ri.program)&&(_i=!0,Oi=!0,Tn=!0),V.id!==k&&(k=V.id,Oi=!0),be.needsLights){const ct=Ld(S.state.lightProbeGridArray,z);be.lightProbeGrid!==ct&&(be.lightProbeGrid=ct,Oi=!0)}if(_i||G!==I){oe.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),dt.setValue(R,"projectionMatrix",I.projectionMatrix),dt.setValue(R,"viewMatrix",I.matrixWorldInverse);const ct=dt.map.cameraPosition;ct!==void 0&&ct.setValue(R,ae.setFromMatrixPosition(I.matrixWorld)),Qe.logarithmicDepthBuffer&&dt.setValue(R,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(R,"isOrthographic",I.isOrthographicCamera===!0),G!==I&&(G=I,Oi=!0,Tn=!0)}if(be.needsLights&&(ui.state.directionalShadowMap.length>0&&dt.setValue(R,"directionalShadowMap",ui.state.directionalShadowMap,B),ui.state.spotShadowMap.length>0&&dt.setValue(R,"spotShadowMap",ui.state.spotShadowMap,B),ui.state.pointShadowMap.length>0&&dt.setValue(R,"pointShadowMap",ui.state.pointShadowMap,B)),z.isSkinnedMesh){dt.setOptional(R,z,"bindMatrix"),dt.setOptional(R,z,"bindMatrixInverse");const ct=z.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),dt.setValue(R,"boneTexture",ct.boneTexture,B))}z.isBatchedMesh&&(dt.setOptional(R,z,"batchingTexture"),dt.setValue(R,"batchingTexture",z._matricesTexture,B),dt.setOptional(R,z,"batchingIdTexture"),dt.setValue(R,"batchingIdTexture",z._indirectTexture,B),dt.setOptional(R,z,"batchingColorTexture"),z._colorsTexture!==null&&dt.setValue(R,"batchingColorTexture",z._colorsTexture,B));const Gi=W.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&Oe.update(z,W,ri),(Oi||be.receiveShadow!==z.receiveShadow)&&(be.receiveShadow=z.receiveShadow,dt.setValue(R,"receiveShadow",z.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(xt.envMapIntensity.value=N.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=Q0()),Oi){if(dt.setValue(R,"toneMappingExposure",C.toneMappingExposure),be.needsLights&&Ud(xt,Tn),le&&V.fog===!0&&de.refreshFogUniforms(xt,le),de.refreshMaterialUniforms(xt,V,Ze,Xe,S.state.transmissionRenderTarget[I.id]),be.needsLights&&be.lightProbeGrid){const ct=be.lightProbeGrid;xt.probesSH.value=ct.texture,xt.probesMin.value.copy(ct.boundingBox.min),xt.probesMax.value.copy(ct.boundingBox.max),xt.probesResolution.value.copy(ct.resolution)}da.upload(R,$l(be),xt,B)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(da.upload(R,$l(be),xt,B),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(R,"center",z.center),dt.setValue(R,"modelViewMatrix",z.modelViewMatrix),dt.setValue(R,"normalMatrix",z.normalMatrix),dt.setValue(R,"modelMatrix",z.matrixWorld),V.uniformsGroups!==void 0){const ct=V.uniformsGroups;for(let vr=0,Rn=ct.length;vr<Rn;vr++){const ec=ct[vr];q.update(ec,ri),q.bind(ec,ri)}}return ri}function Ud(I,N){I.ambientLightColor.needsUpdate=N,I.lightProbe.needsUpdate=N,I.directionalLights.needsUpdate=N,I.directionalLightShadows.needsUpdate=N,I.pointLights.needsUpdate=N,I.pointLightShadows.needsUpdate=N,I.spotLights.needsUpdate=N,I.spotLightShadows.needsUpdate=N,I.rectAreaLights.needsUpdate=N,I.hemisphereLights.needsUpdate=N}function Nd(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(I,N,W){const V=Me.get(I);V.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Me.get(I.texture).__webglTexture=N,Me.get(I.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,N){const W=Me.get(I);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0};const Fd=R.createFramebuffer();this.setRenderTarget=function(I,N=0,W=0){U=I,F=N,H=W;let V=null,z=!1,le=!1;if(I){const _e=Me.get(I);if(_e.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(R.FRAMEBUFFER,_e.__webglFramebuffer),Q.copy(I.viewport),Y.copy(I.scissor),ee=I.scissorTest,oe.viewport(Q),oe.scissor(Y),oe.setScissorTest(ee),k=-1;return}else if(_e.__webglFramebuffer===void 0)B.setupRenderTarget(I);else if(_e.__hasExternalTextures)B.rebindTextures(I,Me.get(I.texture).__webglTexture,Me.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ve=I.depthTexture;if(_e.__boundDepthTexture!==Ve){if(Ve!==null&&Me.has(Ve)&&(I.width!==Ve.image.width||I.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(I)}}const Se=I.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(le=!0);const Be=Me.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Be[N])?V=Be[N][W]:V=Be[N],z=!0):I.samples>0&&B.useMultisampledRTT(I)===!1?V=Me.get(I).__webglMultisampledFramebuffer:Array.isArray(Be)?V=Be[W]:V=Be,Q.copy(I.viewport),Y.copy(I.scissor),ee=I.scissorTest}else Q.copy(Te).multiplyScalar(Ze).floor(),Y.copy(ue).multiplyScalar(Ze).floor(),ee=Ue;if(W!==0&&(V=Fd),oe.bindFramebuffer(R.FRAMEBUFFER,V)&&oe.drawBuffers(I,V),oe.viewport(Q),oe.scissor(Y),oe.setScissorTest(ee),z){const _e=Me.get(I.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,_e.__webglTexture,W)}else if(le){const _e=N;for(let Se=0;Se<I.textures.length;Se++){const Be=Me.get(I.textures[Se]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Se,Be.__webglTexture,W,_e)}}else if(I!==null&&W!==0){const _e=Me.get(I.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,_e.__webglTexture,W)}k=-1},this.readRenderTargetPixels=function(I,N,W,V,z,le,_e,Se=0){if(!(I&&I.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Me.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&_e!==void 0&&(Be=Be[_e]),Be){oe.bindFramebuffer(R.FRAMEBUFFER,Be);try{const Ve=I.textures[Se],it=Ve.format,rt=Ve.type;if(I.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Se),!Qe.textureFormatReadable(it)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(rt)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=I.width-V&&W>=0&&W<=I.height-z&&R.readPixels(N,W,V,z,tt.convert(it),tt.convert(rt),le)}finally{const Ve=U!==null?Me.get(U).__webglFramebuffer:null;oe.bindFramebuffer(R.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(I,N,W,V,z,le,_e,Se=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Me.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&_e!==void 0&&(Be=Be[_e]),Be)if(N>=0&&N<=I.width-V&&W>=0&&W<=I.height-z){oe.bindFramebuffer(R.FRAMEBUFFER,Be);const Ve=I.textures[Se],it=Ve.format,rt=Ve.type;if(I.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Se),!Qe.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Fe),R.bufferData(R.PIXEL_PACK_BUFFER,le.byteLength,R.STREAM_READ),R.readPixels(N,W,V,z,tt.convert(it),tt.convert(rt),0);const pt=U!==null?Me.get(U).__webglFramebuffer:null;oe.bindFramebuffer(R.FRAMEBUFFER,pt);const _t=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Cf(R,_t,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Fe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,le),R.deleteBuffer(Fe),R.deleteSync(_t),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,N=null,W=0){const V=Math.pow(2,-W),z=Math.floor(I.image.width*V),le=Math.floor(I.image.height*V),_e=N!==null?N.x:0,Se=N!==null?N.y:0;B.setTexture2D(I,0),R.copyTexSubImage2D(R.TEXTURE_2D,W,0,0,_e,Se,z,le),oe.unbindTexture()};const Qd=R.createFramebuffer(),Od=R.createFramebuffer();this.copyTextureToTexture=function(I,N,W=null,V=null,z=0,le=0){let _e,Se,Be,Ve,it,rt,Fe,pt,_t;const yt=I.isCompressedTexture?I.mipmaps[le]:I.image;if(W!==null)_e=W.max.x-W.min.x,Se=W.max.y-W.min.y,Be=W.isBox3?W.max.z-W.min.z:1,Ve=W.min.x,it=W.min.y,rt=W.isBox3?W.min.z:0;else{const xt=Math.pow(2,-z);_e=Math.floor(yt.width*xt),Se=Math.floor(yt.height*xt),I.isDataArrayTexture?Be=yt.depth:I.isData3DTexture?Be=Math.floor(yt.depth*xt):Be=1,Ve=0,it=0,rt=0}V!==null?(Fe=V.x,pt=V.y,_t=V.z):(Fe=0,pt=0,_t=0);const at=tt.convert(N.format),Lt=tt.convert(N.type);let be;N.isData3DTexture?(B.setTexture3D(N,0),be=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(B.setTexture2DArray(N,0),be=R.TEXTURE_2D_ARRAY):(B.setTexture2D(N,0),be=R.TEXTURE_2D),oe.activeTexture(R.TEXTURE0),oe.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),oe.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),oe.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const ui=oe.getParameter(R.UNPACK_ROW_LENGTH),ot=oe.getParameter(R.UNPACK_IMAGE_HEIGHT),ri=oe.getParameter(R.UNPACK_SKIP_PIXELS),_i=oe.getParameter(R.UNPACK_SKIP_ROWS),Oi=oe.getParameter(R.UNPACK_SKIP_IMAGES);oe.pixelStorei(R.UNPACK_ROW_LENGTH,yt.width),oe.pixelStorei(R.UNPACK_IMAGE_HEIGHT,yt.height),oe.pixelStorei(R.UNPACK_SKIP_PIXELS,Ve),oe.pixelStorei(R.UNPACK_SKIP_ROWS,it),oe.pixelStorei(R.UNPACK_SKIP_IMAGES,rt);const Tn=I.isDataArrayTexture||I.isData3DTexture,dt=N.isDataArrayTexture||N.isData3DTexture;if(I.isDepthTexture){const xt=Me.get(I),Gi=Me.get(N),ct=Me.get(xt.__renderTarget),vr=Me.get(Gi.__renderTarget);oe.bindFramebuffer(R.READ_FRAMEBUFFER,ct.__webglFramebuffer),oe.bindFramebuffer(R.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let Rn=0;Rn<Be;Rn++)Tn&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Me.get(I).__webglTexture,z,rt+Rn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Me.get(N).__webglTexture,le,_t+Rn)),R.blitFramebuffer(Ve,it,_e,Se,Fe,pt,_e,Se,R.DEPTH_BUFFER_BIT,R.NEAREST);oe.bindFramebuffer(R.READ_FRAMEBUFFER,null),oe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(z!==0||I.isRenderTargetTexture||Me.has(I)){const xt=Me.get(I),Gi=Me.get(N);oe.bindFramebuffer(R.READ_FRAMEBUFFER,Qd),oe.bindFramebuffer(R.DRAW_FRAMEBUFFER,Od);for(let ct=0;ct<Be;ct++)Tn?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,xt.__webglTexture,z,rt+ct):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,xt.__webglTexture,z),dt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Gi.__webglTexture,le,_t+ct):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Gi.__webglTexture,le),z!==0?R.blitFramebuffer(Ve,it,_e,Se,Fe,pt,_e,Se,R.COLOR_BUFFER_BIT,R.NEAREST):dt?R.copyTexSubImage3D(be,le,Fe,pt,_t+ct,Ve,it,_e,Se):R.copyTexSubImage2D(be,le,Fe,pt,Ve,it,_e,Se);oe.bindFramebuffer(R.READ_FRAMEBUFFER,null),oe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else dt?I.isDataTexture||I.isData3DTexture?R.texSubImage3D(be,le,Fe,pt,_t,_e,Se,Be,at,Lt,yt.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(be,le,Fe,pt,_t,_e,Se,Be,at,yt.data):R.texSubImage3D(be,le,Fe,pt,_t,_e,Se,Be,at,Lt,yt):I.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,le,Fe,pt,_e,Se,at,Lt,yt.data):I.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,le,Fe,pt,yt.width,yt.height,at,yt.data):R.texSubImage2D(R.TEXTURE_2D,le,Fe,pt,_e,Se,at,Lt,yt);oe.pixelStorei(R.UNPACK_ROW_LENGTH,ui),oe.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ot),oe.pixelStorei(R.UNPACK_SKIP_PIXELS,ri),oe.pixelStorei(R.UNPACK_SKIP_ROWS,_i),oe.pixelStorei(R.UNPACK_SKIP_IMAGES,Oi),le===0&&N.generateMipmaps&&R.generateMipmap(be),oe.unbindTexture()},this.initRenderTarget=function(I){Me.get(I).__webglFramebuffer===void 0&&B.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?B.setTextureCube(I,0):I.isData3DTexture?B.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?B.setTexture2DArray(I,0):B.setTexture2D(I,0),oe.unbindTexture()},this.resetState=function(){F=0,H=0,U=null,oe.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}},jn=new w,Dh=new He,Lh=new He,Ph=new w,Uh=new w,J0=class{constructor(e={}){const t=this;let i,n,r,s;const a={objects:new WeakMap},o=e.element!==void 0?e.element:document.createElement("div");o.style.overflow="hidden",this.domElement=o,this.sortObjects=!0,this.getSize=function(){return{width:i,height:n}},this.render=function(d,p){d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),Dh.copy(p.matrixWorldInverse),Lh.multiplyMatrices(p.projectionMatrix,Dh),c(d,d,p),this.sortObjects&&h(d)},this.setSize=function(d,p){i=d,n=p,r=i/2,s=n/2,o.style.width=d+"px",o.style.height=p+"px"};function l(d){d.isCSS2DObject&&(d.element.style.display="none");for(let p=0,m=d.children.length;p<m;p++)l(d.children[p])}function c(d,p,m){if(d.visible===!1){l(d);return}if(d.isCSS2DObject){jn.setFromMatrixPosition(d.matrixWorld),jn.applyMatrix4(Lh);const g=jn.z>=-1&&jn.z<=1&&d.layers.test(m.layers)===!0,f=d.element;f.style.display=g===!0?"":"none",g===!0&&(d.onBeforeRender(t,p,m),f.style.transform="translate("+-100*d.center.x+"%,"+-100*d.center.y+"%)translate("+(jn.x*r+r)+"px,"+(-jn.y*s+s)+"px)",f.parentNode!==o&&o.appendChild(f),d.onAfterRender(t,p,m));const v={distanceToCameraSquared:u(m,d)};a.objects.set(d,v)}for(let g=0,f=d.children.length;g<f;g++)c(d.children[g],p,m)}function u(d,p){return Ph.setFromMatrixPosition(d.matrixWorld),Uh.setFromMatrixPosition(p.matrixWorld),Ph.distanceToSquared(Uh)}function A(d){const p=[];return d.traverseVisible(function(m){m.isCSS2DObject&&p.push(m)}),p}function h(d){const p=A(d).sort(function(g,f){return g.renderOrder!==f.renderOrder?f.renderOrder-g.renderOrder:a.objects.get(g).distanceToCameraSquared-a.objects.get(f).distanceToCameraSquared}),m=p.length;for(let g=0,f=p.length;g<f;g++)p[g].element.style.zIndex=m-g}}},G0=class{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const i=this.workersResolve[e];if(i&&i(t),this.queue.length){const{resolve:n,msg:r,transfer:s}=this.queue.shift();this.workersResolve[e]=n,this.workers[e].postMessage(r,s)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(i=>{const n=this._getIdleWorker();n!==-1?(this._initWorker(n),this.workerStatus|=1<<n,this.workersResolve[n]=i,this.workers[n].postMessage(e,t)):this.queue.push({resolve:i,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}};var Md=1000054e3,Sd=1000054001;var Bd=1000054004,bd=1000054005;var wd=1000066e3;var Td=1000066004;var Lr=class{constructor(e,t,i,n){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,i),this._littleEndian=n,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t=0){const i=this._offset;let n=0;for(;this._dataView.getUint8(this._offset)!==t&&n<e;)n++,this._offset++;return n<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+i,n)}},K0=new Uint8Array([0]),zt=[171,75,84,88,32,50,48,187,13,10,26,10];function Nh(e){return new TextDecoder().decode(e)}function k0(e){const t=new Uint8Array(e.buffer,e.byteOffset,zt.length);if(t[0]!==zt[0]||t[1]!==zt[1]||t[2]!==zt[2]||t[3]!==zt[3]||t[4]!==zt[4]||t[5]!==zt[5]||t[6]!==zt[6]||t[7]!==zt[7]||t[8]!==zt[8]||t[9]!==zt[9]||t[10]!==zt[10]||t[11]!==zt[11])throw new Error("Missing KTX 2.0 identifier.");const i={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},n=17*Uint32Array.BYTES_PER_ELEMENT,r=new Lr(e,zt.length,n,!0);i.vkFormat=r._nextUint32(),i.typeSize=r._nextUint32(),i.pixelWidth=r._nextUint32(),i.pixelHeight=r._nextUint32(),i.pixelDepth=r._nextUint32(),i.layerCount=r._nextUint32(),i.faceCount=r._nextUint32(),i.levelCount=r._nextUint32(),i.supercompressionScheme=r._nextUint32();const s=r._nextUint32(),a=r._nextUint32(),o=r._nextUint32(),l=r._nextUint32(),c=r._nextUint64(),u=r._nextUint64(),A=3*Math.max(i.levelCount,1)*8,h=new Lr(e,zt.length+n,A,!0);for(let Q=0,Y=Math.max(i.levelCount,1);Q<Y;Q++)i.levels.push({levelData:new Uint8Array(e.buffer,e.byteOffset+h._nextUint64(),h._nextUint64()),uncompressedByteLength:h._nextUint64()});const d=new Lr(e,s,a,!0);d._skip(4);const p=d._nextUint16(),m=d._nextUint16(),g=d._nextUint16(),f=d._nextUint16(),v={vendorId:p,descriptorType:m,versionNumber:g,colorModel:d._nextUint8(),colorPrimaries:d._nextUint8(),transferFunction:d._nextUint8(),flags:d._nextUint8(),texelBlockDimension:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],bytesPlane:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],samples:[]},E=(f/4-6)/4;for(let Q=0;Q<E;Q++){const Y={bitOffset:d._nextUint16(),bitLength:d._nextUint8(),channelType:d._nextUint8(),samplePosition:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],sampleLower:Number.NEGATIVE_INFINITY,sampleUpper:Number.POSITIVE_INFINITY};64&Y.channelType?(Y.sampleLower=d._nextInt32(),Y.sampleUpper=d._nextInt32()):(Y.sampleLower=d._nextUint32(),Y.sampleUpper=d._nextUint32()),v.samples[Q]=Y}i.dataFormatDescriptor.length=0,i.dataFormatDescriptor.push(v);const _=new Lr(e,o,l,!0);for(;_._offset<l;){const Q=_._nextUint32(),Y=_._scan(Q),ee=Nh(Y);if(i.keyValue[ee]=_._nextUint8Array(Q-Y.byteLength-1),ee.match(/^ktx/i)){const ie=Nh(i.keyValue[ee]);i.keyValue[ee]=ie.substring(0,ie.lastIndexOf("\0"))}_._skip(Q%4?4-Q%4:0)}if(u<=0)return i;const S=new Lr(e,c,u,!0),M=S._nextUint16(),T=S._nextUint16(),y=S._nextUint32(),C=S._nextUint32(),L=S._nextUint32(),b=S._nextUint32(),F=[];for(let Q=0,Y=Math.max(i.levelCount,1);Q<Y;Q++)F.push({imageFlags:S._nextUint32(),rgbSliceByteOffset:S._nextUint32(),rgbSliceByteLength:S._nextUint32(),alphaSliceByteOffset:S._nextUint32(),alphaSliceByteLength:S._nextUint32()});const H=c+S._offset,U=H+y,k=U+C,G=k+L;return i.globalData={endpointCount:M,selectorCount:T,imageDescs:F,endpointsData:new Uint8Array(e.buffer,e.byteOffset+H,y),selectorsData:new Uint8Array(e.buffer,e.byteOffset+U,C),tablesData:new Uint8Array(e.buffer,e.byteOffset+k,L),extendedData:new Uint8Array(e.buffer,e.byteOffset+G,b)},i}var wo,Li,qo,To={env:{emscripten_notify_memory_growth:function(e){qo=new Uint8Array(Li.exports.memory.buffer)}}},z0=class{init(){return wo||(wo=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Fh).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,To)).then(this._init):WebAssembly.instantiate(Buffer.from(Fh,"base64"),To).then(this._init),wo)}_init(e){Li=e.instance,To.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Li)throw new Error("ZSTDDecoder: Await .init() before decoding.");const i=e.byteLength,n=Li.exports.malloc(i);qo.set(e,n),t=t||Number(Li.exports.ZSTD_findDecompressedSize(n,i));const r=Li.exports.malloc(t),s=Li.exports.ZSTD_decompress(r,t,n,i),a=qo.slice(r,r+s);return Li.exports.free(n),Li.exports.free(r),a}},Fh="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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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",V0="display-p3",H0="display-p3-linear",Z0={...nt.spaces[Ft],outputColorSpaceConfig:{drawingBufferColorSpace:Ft,toneMappingMode:"extended"}},Ro=new WeakMap,Do=0,Lo,fs=class ir extends Xt{constructor(t){super(t),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new G0,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(t){return this.transcoderPath=t,this}setWorkerLimit(t){return this.workerPool.setWorkerLimit(t),this}async detectSupportAsync(t){return console.warn('KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.'),await t.init(),this.detectSupport(t)}detectSupport(t){return t.isWebGPURenderer===!0?this.workerConfig={astcSupported:t.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:t.hasFeature("texture-compression-etc1"),etc2Supported:t.hasFeature("texture-compression-etc2"),dxtSupported:t.hasFeature("texture-compression-s3tc"),bptcSupported:t.hasFeature("texture-compression-bc"),pvrtcSupported:t.hasFeature("texture-compression-pvrtc")}:(this.workerConfig={astcSupported:t.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:t.extensions.has("WEBGL_compressed_texture_astc")&&t.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:t.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:t.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:t.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:t.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:t.extensions.has("WEBGL_compressed_texture_pvrtc")||t.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},typeof navigator<"u"&&typeof navigator.platform<"u"&&typeof navigator.userAgent<"u"&&navigator.platform.indexOf("Linux")>=0&&navigator.userAgent.indexOf("Firefox")>=0&&this.workerConfig.astcSupported&&this.workerConfig.etc2Supported&&this.workerConfig.bptcSupported&&this.workerConfig.dxtSupported&&(this.workerConfig.astcSupported=!1,this.workerConfig.etc2Supported=!1)),this}init(){if(!this.transcoderPending){const t=new oi(this.manager);t.setPath(this.transcoderPath),t.setWithCredentials(this.withCredentials);const i=t.loadAsync("basis_transcoder.js"),n=new oi(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const r=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([i,r]).then(([s,a])=>{const o=ir.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(ir.EngineFormat),"let _EngineType = "+JSON.stringify(ir.EngineType),"let _TranscoderFormat = "+JSON.stringify(ir.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(ir.BasisFormat),"/* basis_transcoder.js */",s,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),u=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:u},[u]),c})}),Do>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Do++}return this.transcoderPending}load(t,i,n,r){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const s=new oi(this.manager);s.setPath(this.path),s.setCrossOrigin(this.crossOrigin),s.setWithCredentials(this.withCredentials),s.setRequestHeader(this.requestHeader),s.setResponseType("arraybuffer"),s.load(t,a=>{this.parse(a,i,r)},n,r)}parse(t,i,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Ro.has(t))return Ro.get(t).promise.then(i).catch(n);this._createTexture(t).then(r=>i?i(r):null).catch(n)}_createTextureFrom(t,i){const{type:n,error:r,data:{faces:s,width:a,height:o,format:l,type:c,dfdFlags:u}}=t;if(n==="error")return Promise.reject(r);let A;if(i.faceCount===6)A=new Hu(s,l,c);else{const h=s[0].mipmaps;A=i.layerCount>1?new Vu(h,a,o,i.layerCount,l,c):new fr(h,a,o,l,c)}return A.minFilter=s[0].mipmaps.length===1?gt:nn,A.magFilter=gt,A.generateMipmaps=!1,A.needsUpdate=!0,A.colorSpace=Rd(i),A.premultiplyAlpha=!!(u&1),A}async _createTexture(t,i={}){const n=k0(new Uint8Array(t)),r=n.vkFormat===1000066e3&&n.dataFormatDescriptor[0].colorModel===167;if(!(n.vkFormat===0||r&&!this.workerConfig.astcHDRSupported))return q0(n);const s=i,a=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:t,taskConfig:s},[t])).then(o=>this._createTextureFrom(o.data,n));return Ro.set(t,{promise:a}),a}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Do--}};fs.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};fs.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};fs.EngineFormat={RGBAFormat:Qt,RGBA_ASTC_4x4_Format:sr,RGB_BPTC_UNSIGNED_Format:cl,RGBA_BPTC_Format:Xr,RGBA_ETC2_EAC_Format:Sa,RGBA_PVRTC_4BPPV1_Format:qr,RGBA_S3TC_DXT5_Format:Wr,RGB_ETC1_Format:rl,RGB_ETC2_Format:Ma,RGB_PVRTC_4BPPV1_Format:nl,RGBA_S3TC_DXT1_Format:Hr};fs.EngineType={UnsignedByteType:Ye,HalfFloatType:Zt,FloatType:ti};fs.BasisWorker=function(){let e,t,i;const n=_EngineFormat,r=_EngineType,s=_TranscoderFormat,a=_BasisFormat;self.addEventListener("message",function(p){const m=p.data;switch(m.type){case"init":e=m.config,o(m.transcoderBinary);break;case"transcode":t.then(()=>{try{const{faces:g,buffers:f,width:v,height:E,hasAlpha:_,format:S,type:M,dfdFlags:T}=l(m.buffer);self.postMessage({type:"transcode",id:m.id,data:{faces:g,width:v,height:E,hasAlpha:_,format:S,type:M,dfdFlags:T}},f)}catch(g){console.error(g),self.postMessage({type:"error",id:m.id,error:g.message})}});break}});function o(p){t=new Promise(m=>{i={wasmBinary:p,onRuntimeInitialized:m},BASIS(i)}).then(()=>{i.initializeBasis(),i.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function l(p){const m=new i.KTX2File(new Uint8Array(p));function g(){m.close(),m.delete()}if(!m.isValid())throw g(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let f;if(m.isUASTC())f=a.UASTC;else if(m.isETC1S())f=a.ETC1S;else if(m.isHDR())f=a.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const v=m.getWidth(),E=m.getHeight(),_=m.getLayers()||1,S=m.getLevels(),M=m.getFaces(),T=m.getHasAlpha(),y=m.getDFDFlags(),{transcoderFormat:C,engineFormat:L,engineType:b}=A(f,v,E,T);if(!v||!E||!S)throw g(),new Error("THREE.KTX2Loader:	Invalid texture");if(!m.startTranscoding())throw g(),new Error("THREE.KTX2Loader: .startTranscoding failed");const F=[],H=[];for(let U=0;U<M;U++){const k=[];for(let G=0;G<S;G++){const Q=[];let Y,ee;for(let me=0;me<_;me++){const Ie=m.getImageLevelInfo(G,me,U);U===0&&G===0&&me===0&&(Ie.origWidth%4!==0||Ie.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),S>1?(Y=Ie.origWidth,ee=Ie.origHeight):(Y=Ie.width,ee=Ie.height);let Xe=new Uint8Array(m.getImageTranscodedSizeInBytes(G,me,0,C));const Ze=m.transcodeImage(Xe,G,me,U,C,0,-1,-1);if(b===r.HalfFloatType&&(Xe=new Uint16Array(Xe.buffer,Xe.byteOffset,Xe.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!Ze)throw g(),new Error("THREE.KTX2Loader: .transcodeImage failed.");Q.push(Xe)}const ie=d(Q);k.push({data:ie,width:Y,height:ee}),H.push(ie.buffer)}F.push({mipmaps:k,width:v,height:E,format:L,type:b})}return g(),{faces:F,buffers:H,width:v,height:E,hasAlpha:T,dfdFlags:y,format:L,type:b}}const c=[{if:"astcSupported",basisFormat:[a.UASTC],transcoderFormat:[s.ASTC_4x4,s.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],engineType:[r.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[s.BC7_M5,s.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],engineType:[r.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[s.BC1,s.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],engineType:[r.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[s.ETC1,s.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],engineType:[r.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[s.ETC1],engineFormat:[n.RGB_ETC1_Format],engineType:[r.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[s.PVRTC1_4_RGB,s.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],engineType:[r.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[a.UASTC_HDR],transcoderFormat:[s.BC6H],engineFormat:[n.RGB_BPTC_UNSIGNED_Format],engineType:[r.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[s.RGBA32,s.RGBA32],engineFormat:[n.RGBAFormat,n.RGBAFormat],engineType:[r.UnsignedByteType,r.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[a.UASTC_HDR],transcoderFormat:[s.RGBA_HALF],engineFormat:[n.RGBAFormat],engineType:[r.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],u={[a.ETC1S]:c.filter(p=>p.basisFormat.includes(a.ETC1S)).sort((p,m)=>p.priorityETC1S-m.priorityETC1S),[a.UASTC]:c.filter(p=>p.basisFormat.includes(a.UASTC)).sort((p,m)=>p.priorityUASTC-m.priorityUASTC),[a.UASTC_HDR]:c.filter(p=>p.basisFormat.includes(a.UASTC_HDR)).sort((p,m)=>p.priorityHDR-m.priorityHDR)};function A(p,m,g,f){const v=u[p];for(let E=0;E<v.length;E++){const _=v[E];if(!(_.if&&!e[_.if])&&_.basisFormat.includes(p)&&!(f&&_.transcoderFormat.length<2)&&!(_.needsPowerOfTwo&&!(h(m)&&h(g))))return{transcoderFormat:_.transcoderFormat[f?1:0],engineFormat:_.engineFormat[f?1:0],engineType:_.engineType[0]}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function h(p){return p<=2?!0:(p&p-1)===0&&p!==0}function d(p){if(p.length===1)return p[0];let m=0;for(let v=0;v<p.length;v++){const E=p[v];m+=E.byteLength}const g=new Uint8Array(m);let f=0;for(let v=0;v<p.length;v++){const E=p[v];g.set(E,f),f+=E.byteLength}return g}};var W0=new Set([Qt,Vr,Ci,Ki]),Po={109:Qt,103:Ci,100:Ki,97:Qt,83:Ci,76:Ki,91:Qt,43:Qt,37:Qt,22:Ci,16:Ci,15:Ki,9:Ki,123:Vr,122:Vr,152:Sa,148:Ma,153:sl,154:al,155:ol,156:ll,[wd]:sr,158:sr,157:sr,[Td]:Fr,166:Fr,165:Fr,134:Hr,133:Hr,132:fa,131:fa,138:Wr,137:Wr,140:ul,139:hl,142:dl,141:Al,146:Xr,145:Xr,[bd]:qr,[Sd]:qr,[Bd]:pa,[Md]:pa},_n={109:ti,103:ti,100:ti,97:Zt,83:Zt,76:Zt,91:Ia,43:Ye,37:Ye,22:Ye,16:Ye,15:Ye,9:Ye,123:$o,122:jo,152:Ye,148:Ye,153:Ye,154:Ye,155:Ye,156:Ye,[wd]:Zt,158:Ye,157:Ye,[Td]:Zt,166:Ye,165:Ye,134:Ye,133:Ye,132:Ye,131:Ye,138:Ye,137:Ye,140:Ye,139:Ye,142:Ye,141:Ye,146:Ye,145:Ye,[bd]:Ye,[Sd]:Ye,[Bd]:Ye,[Md]:Ye};async function q0(e){const{vkFormat:t}=e;if(Po[t]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat: "+t);_n[t]===void 0&&console.warn('THREE.KTX2Loader: Missing ".type" for vkFormat: '+t);let i;e.supercompressionScheme===2&&(Lo||(Lo=new Promise(async a=>{const o=new z0;await o.init(),a(o)})),i=await Lo);const n=[];for(let a=0;a<e.levels.length;a++){const o=Math.max(1,e.pixelWidth>>a),l=Math.max(1,e.pixelHeight>>a),c=e.pixelDepth?Math.max(1,e.pixelDepth>>a):0,u=e.levels[a];let A;if(e.supercompressionScheme===0)A=u.levelData;else if(e.supercompressionScheme===2)A=i.decode(u.levelData,u.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let h;_n[t]===1015?h=new Float32Array(A.buffer,A.byteOffset,A.byteLength/Float32Array.BYTES_PER_ELEMENT):_n[t]===1016||_n[t]===1012?h=new Uint16Array(A.buffer,A.byteOffset,A.byteLength/Uint16Array.BYTES_PER_ELEMENT):_n[t]===35902||_n[t]===35899?h=new Uint32Array(A.buffer,A.byteOffset,A.byteLength/Uint32Array.BYTES_PER_ELEMENT):h=A,n.push({data:h,width:o,height:l,depth:c})}const r=e.levelCount===0||n.length>1;let s;if(W0.has(Po[t]))s=e.pixelDepth===0?new ai(n[0].data,e.pixelWidth,e.pixelHeight):new cs(n[0].data,e.pixelWidth,e.pixelHeight,e.pixelDepth),s.minFilter=r?xa:Ct,s.magFilter=Ct,s.generateMipmaps=e.levelCount===0;else{if(e.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");s=new fr(n,e.pixelWidth,e.pixelHeight),s.minFilter=r?nn:gt,s.magFilter=gt}return s.mipmaps=n,s.type=_n[t],s.format=Po[t],s.colorSpace=Rd(e),s.needsUpdate=!0,Promise.resolve(s)}function Rd(e){const t=e.dataFormatDescriptor[0];return t.colorPrimaries===1?t.transferFunction===2?Ft:Kr:t.colorPrimaries===10?t.transferFunction===2?V0:H0:(t.colorPrimaries===0||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${t.colorPrimaries}"`),"")}export{Rt as $,Nu as A,Gt as B,gi as C,Ye as Ct,rr as D,ht as Dt,dr as E,w as Et,Si as F,rn as G,We as H,gt as I,Pl as J,Ul as K,nn as L,tn as M,qt as N,Zt as O,ni as Ot,Gu as P,ds as Q,Kr as R,Qi as S,qg as St,ti as T,Z as Tt,He as U,zf as V,St as W,lt as X,Ct as Y,Rl as Z,Il as _,Ru as _t,td as a,Qt as at,el as b,vg as bt,ut as c,Ki as ct,wp as d,Ft as dt,La as et,Ju as f,Bu as ft,nt as g,jg as gt,ye as h,Dl as ht,Y0 as i,Kd as it,Ta as j,cr as k,PA as kt,Ke as l,kr as lt,$g as m,Dt as mt,J0 as n,ku as nt,pu as o,Ci as ot,$t as p,li as pt,kA as q,O0 as r,Wt as rt,us as s,Zg as st,fs as t,jA as tt,Mi as u,EA as ut,cs as v,_l as vt,Ce as w,Zo as wt,Sn as x,hd as xt,ai as y,wt as yt,Gl as z};
