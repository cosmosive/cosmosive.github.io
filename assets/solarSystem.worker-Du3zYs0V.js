(function(){"use strict";const e={SUN:"10",MERCURY:"199",VENUS:"299",EARTH:"399",MARS:"499",JUPITER:"599",SATURN:"699",URANUS:"799",NEPTUNE:"899",PLUTO:"999",MOON:"301"},U=[e.SUN,e.MERCURY,e.VENUS,e.EARTH,e.MARS,e.JUPITER,e.SATURN,e.URANUS,e.NEPTUNE,e.PLUTO];function M(t){return{x:t.x*15,y:t.y*15,z:t.z*15}}/**
      @preserve

      Astronomy library for JavaScript (browser and Node.js).
      https://github.com/cosinekitty/astronomy

      MIT License

      Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
  *//**
 * @fileoverview Astronomy calculation library for browser scripting and Node.js.
 * @author Don Cross <cosinekitty@gmail.com>
 * @license MIT
 */function l(t){if(!Number.isFinite(t))throw console.trace(),`Value is not a finite number: ${t}`;return t}var r;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(r||(r={})),r.Star1,r.Star2,r.Star3,r.Star4,r.Star5,r.Star6,r.Star7,r.Star8;var p;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(p||(p={}));function m(t){if(!(t instanceof h))throw`Not an instance of the Observer class: ${t}`;if(l(t.latitude),l(t.longitude),l(t.height),t.latitude<-90||t.latitude>90)throw`Latitude ${t.latitude} is out of range. Must be -90..+90.`;return t}class h{constructor(n,s,o){this.latitude=n,this.longitude=s,this.height=o,m(this)}}var R;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(R||(R={}));var g;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(g||(g={}));var A;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(A||(A={})),new h(40.7128,-74.006,10);function E(t,n,s){if(t.length===0)return null;if(t.length===1||n<=t[0].time.jd)return t[0].position;if(n>=t[t.length-1].time.jd)return t[t.length-1].position;let o=0,u=t.length-1;for(;u-o>1;){const S=o+u>>1;t[S].time.jd<=n?o=S:u=S}const a=t[o],i=t[u],c=(n-a.time.jd)/(i.time.jd-a.time.jd),N=a.position.x+c*(i.position.x-a.position.x),T=a.position.y+c*(i.position.y-a.position.y),O=a.position.z+c*(i.position.z-a.position.z);return{x:N,y:T,z:O}}e.SUN+"",r.Sun,e.MERCURY+"",r.Mercury,e.VENUS+"",r.Venus,e.EARTH+"",r.Earth,e.MARS+"",r.Mars,e.JUPITER+"",r.Jupiter,e.SATURN+"",r.Saturn,e.URANUS+"",r.Uranus,e.NEPTUNE+"",r.Neptune,e.PLUTO+"",r.Pluto,e.MOON+"",r.Moon;function I(t,n,s=U){const o={};for(const u of s){const a=n[u]??[],i=a.length?E(a,t):null;if(i){const c=M(i);o[u]=[c.x,c.y,c.z]}}return o}let f=null;self.onmessage=t=>{const n=t.data;try{if(n.type==="load"){f=n.batch;const s={type:"ready",runId:n.runId};self.postMessage(s);return}if(n.type==="compute"){if(!f){const a={type:"error",runId:n.runId,seq:n.seq,message:"No ephemeris loaded"};self.postMessage(a);return}const s=n.jd,o=I(s,f,U),u={type:"positions",runId:n.runId,seq:n.seq,jd:s,positions:o};self.postMessage(u)}}catch(s){const o=s instanceof Error?s.message:String(s),u="runId"in n?n.runId:0,a="seq"in n?n.seq:0,i={type:"error",runId:u,seq:a,message:o};self.postMessage(i)}}})();
