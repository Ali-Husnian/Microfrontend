(()=>{"use strict";var e,t={1447:(e,t,o)=>{o(3138),o(9911),o(9765),o(8901);var r=o(6486),a=o.n(r);const i=JSON.parse('[{"title":"Javascript Ninja","price":9.99,"description":"Get updated of the all the things around javascript. This course forms the foundation of all javascript faameworks.","imageUrl":"https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png","author":"Max"},{"title":"CSS Ninja","price":11.5,"description":"Get all the expertise required to build some awesome websites. In this course we go though the core concepts of css , and also advanced concepts such as animation.","imageUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png","author":"Jack"},{"title":"React Ninja","price":15.5,"description":"Learn how to build single page applications using one of the most popular front end framework - React. We will see how to build an either project and deploy to AWS cloud.","imageUrl":"https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png","author":"Alex"}]');var s=o(9755);!function(){const e=s("#course-list")[0];let t="";a().each(i,(e=>{const o='<div class="card mb-3 rounded-3" style="max-width: 350px"><div class="row g-0 p-3"><div class="col-md-4"> <img src="'+e.imageUrl+'" class="img-fluid rounded-start"alt="css"/></div><div class="col-md-8"><div class="card-body"><h2 class="card-title">'+e.title+'</h2><p class="card-text">'+e.description+'</p><p class="card-text"><strong>Author: </strong><small class="text-muted">'+e.author+"</small></p></div></div></div> </div>";t+=o})),e.innerHTML=t}()}},o={};function r(e){var a=o[e];if(void 0!==a)return a.exports;var i=o[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=t,r.amdD=function(){throw new Error("define cannot be used indirect")},e=[],r.O=(t,o,a,i)=>{if(!o){var s=1/0;for(d=0;d<e.length;d++){for(var[o,a,i]=e[d],n=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(n=!1,i<s&&(s=i));if(n){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,a,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={953:0,534:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var a,i,[s,n,l]=o,c=0;if(s.some((t=>0!==e[t]))){for(a in n)r.o(n,a)&&(r.m[a]=n[a]);if(l)var d=l(r)}for(t&&t(o);c<s.length;c++)i=s[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},o=self.webpackChunk_8_1_course_project_initialize=self.webpackChunk_8_1_course_project_initialize||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var a=r.O(void 0,[900,412,534],(()=>r(1447)));a=r.O(a)})();