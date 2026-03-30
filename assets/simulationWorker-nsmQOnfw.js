(function(){"use strict";const y=24405875e-1,A=864e5,I=24604005e-1,r={SUN:"10",MERCURY:"199",VENUS:"299",EARTH:"399",MARS:"499",JUPITER:"599",SATURN:"699",URANUS:"799",NEPTUNE:"899",PLUTO:"999",MOON:"301"};/**
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
 */function S(t){if(!Number.isFinite(t))throw console.trace(),`Value is not a finite number: ${t}`;return t}var e;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(e||(e={})),e.Star1,e.Star2,e.Star3,e.Star4,e.Star5,e.Star6,e.Star7,e.Star8;var l;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(l||(l={}));function h(t){if(!(t instanceof o))throw`Not an instance of the Observer class: ${t}`;if(S(t.latitude),S(t.longitude),S(t.height),t.latitude<-90||t.latitude>90)throw`Latitude ${t.latitude} is out of range. Must be -90..+90.`;return t}class o{constructor(a,s,n){this.latitude=a,this.longitude=s,this.height=n,h(this)}}var f;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(f||(f={}));var m;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(m||(m={}));var g;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(g||(g={})),new o(40.7128,-74.006,10),r.SUN+"",e.Sun,r.MERCURY+"",e.Mercury,r.VENUS+"",e.Venus,r.EARTH+"",e.Earth,r.MARS+"",e.Mars,r.JUPITER+"",e.Jupiter,r.SATURN+"",e.Saturn,r.URANUS+"",e.Uranus,r.NEPTUNE+"",e.Neptune,r.PLUTO+"",e.Pluto,r.MOON+"",e.Moon;const j=1,O=86400;function _(t){return t.type==="setRate"&&(!Number.isFinite(t.speed)||t.speed<0)?{type:"setRate",speed:0}:t}function P(t){return t/A+y}function p(t){return{protocolVersion:j,jd:(t==null?void 0:t.jd)??I,playing:(t==null?void 0:t.playing)??!1,speed:(t==null?void 0:t.speed)??86400}}function M(t,a){const s=_(a);switch(s.type){case"init":{const n=p({jd:s.jd??t.jd,playing:s.playing??t.playing,speed:s.speed??t.speed});return{state:n,events:[{type:"timeState",state:n}]}}case"seek":{if(!Number.isFinite(s.jd))return{state:t,events:[{type:"error",code:"INVALID_JD",message:"seek.jd must be finite"}]};const n={...t,jd:s.jd};return{state:n,events:[{type:"tick",jd:n.jd},{type:"timeState",state:n}]}}case"step":{if(!t.playing)return{state:t,events:[]};const n=s.deltaSeconds;if(!Number.isFinite(n))return{state:t,events:[{type:"error",code:"INVALID_DELTA",message:"step.deltaSeconds must be finite"}]};const E=t.jd+t.speed*n/O,U={...t,jd:E};return{state:U,events:[{type:"tick",jd:E},{type:"timeState",state:U}]}}case"setPlaying":{const n={...t,playing:s.playing};return{state:n,events:[{type:"timeState",state:n}]}}case"setRate":{const n={...t,speed:s.speed};return{state:n,events:[{type:"timeState",state:n}]}}default:return{state:t,events:[]}}}const d=1;function V(t,a){return{...t,ts:performance.now(),schemaVersion:d}}const N=500;let i=p({jd:P(Date.now())}),c=null;function u(t){self.postMessage(V(t))}function R(){c!=null&&(clearInterval(c),c=null)}function D(){R(),c=setInterval(()=>{const{state:t,events:a}=M(i,{type:"step",deltaSeconds:N/1e3});i=t,u({type:"events",events:a}),u({type:"timeState",state:i})},N)}function T(){i.playing?D():R()}self.onmessage=t=>{const a=t.data;if(a.type==="init"){i=p({jd:a.jd??i.jd,playing:a.playing??i.playing,speed:a.speed??i.speed}),T(),u({type:"timeState",state:i});return}if(a.type==="time"){const{state:s,events:n}=M(i,a.cmd);i=s,u({type:"events",events:n}),u({type:"timeState",state:i}),T()}}})();
