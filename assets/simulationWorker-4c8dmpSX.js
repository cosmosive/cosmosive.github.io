(function(){"use strict";const j=24405875e-1,A=864e5,E=24604005e-1,u={SUN:"10",MERCURY:"199",VENUS:"299",EARTH:"399",MARS:"499",JUPITER:"599",SATURN:"699",URANUS:"799",NEPTUNE:"899",PLUTO:"999",MOON:"301"};/**
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
 */function p(t){if(!Number.isFinite(t))throw console.trace(),`Value is not a finite number: ${t}`;return t}var e;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(e||(e={})),e.Star1,e.Star2,e.Star3,e.Star4,e.Star5,e.Star6,e.Star7,e.Star8;var l;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(l||(l={}));function I(t){if(!(t instanceof o))throw`Not an instance of the Observer class: ${t}`;if(p(t.latitude),p(t.longitude),p(t.height),t.latitude<-90||t.latitude>90)throw`Latitude ${t.latitude} is out of range. Must be -90..+90.`;return t}class o{constructor(s,a,n){this.latitude=s,this.longitude=a,this.height=n,I(this)}}var f;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(f||(f={}));var m;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(m||(m={}));var g;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(g||(g={})),new o(40.7128,-74.006,10),u.SUN+"",e.Sun,u.MERCURY+"",e.Mercury,u.VENUS+"",e.Venus,u.EARTH+"",e.Earth,u.MARS+"",e.Mars,u.JUPITER+"",e.Jupiter,u.SATURN+"",e.Saturn,u.URANUS+"",e.Uranus,u.NEPTUNE+"",e.Neptune,u.PLUTO+"",e.Pluto,u.MOON+"",e.Moon;const h=1,O=86400;function P(t){return t.type==="setRate"&&(!Number.isFinite(t.speed)||t.speed<0)?{type:"setRate",speed:0}:t}function d(t){return t/A+j}function S(t){return{protocolVersion:h,jd:(t==null?void 0:t.jd)??E,playing:(t==null?void 0:t.playing)??!1,speed:(t==null?void 0:t.speed)??86400}}function T(t,s){const a=P(s);switch(a.type){case"init":{const n=S({jd:a.jd??t.jd,playing:a.playing??t.playing,speed:a.speed??t.speed});return{state:n,events:[{type:"timeState",state:n}]}}case"seek":{if(!Number.isFinite(a.jd))return{state:t,events:[{type:"error",code:"INVALID_JD",message:"seek.jd must be finite"}]};const n={...t,jd:a.jd};return{state:n,events:[{type:"tick",jd:n.jd},{type:"timeState",state:n}]}}case"step":{if(!t.playing)return{state:t,events:[]};const n=a.deltaSeconds;if(!Number.isFinite(n))return{state:t,events:[{type:"error",code:"INVALID_DELTA",message:"step.deltaSeconds must be finite"}]};const R=t.jd+t.speed*n/O,y={...t,jd:R};return{state:y,events:[{type:"tick",jd:R},{type:"timeState",state:y}]}}case"setPlaying":{const n={...t,playing:a.playing};return{state:n,events:[{type:"timeState",state:n}]}}case"setRate":{const n={...t,speed:a.speed};return{state:n,events:[{type:"timeState",state:n}]}}default:return{state:t,events:[]}}}const N=500;let i=S({jd:d(Date.now())}),c=null;function r(t){self.postMessage(t)}function M(){c!=null&&(clearInterval(c),c=null)}function _(){M(),c=setInterval(()=>{const{state:t,events:s}=T(i,{type:"step",deltaSeconds:N/1e3});i=t,r({type:"events",events:s}),r({type:"timeState",state:i})},N)}function U(){i.playing?_():M()}self.onmessage=t=>{const s=t.data;if(s.type==="init"){i=S({jd:s.jd??i.jd,playing:s.playing??i.playing,speed:s.speed??i.speed}),U(),r({type:"timeState",state:i});return}if(s.type==="time"){const{state:a,events:n}=T(i,s.cmd);i=a,r({type:"events",events:n}),r({type:"timeState",state:i}),U()}}})();
