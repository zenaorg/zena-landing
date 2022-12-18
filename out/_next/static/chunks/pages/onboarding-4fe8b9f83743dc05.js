(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{88162:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/onboarding",function(){return n(84609)}])},84609:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(85893),i=n(67294),a=n(62964),o=n(40725),s=n.n(o);function c(t){let{userData:e}=t,{width:n,height:o}=(0,a.Z)();return(0,i.useEffect)(()=>{localStorage.setItem("zena-session",JSON.stringify(e))},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s(),{width:n,height:o}),(0,r.jsx)("section",{className:"bg-white dark:bg-gray-900 mt-24",children:(0,r.jsx)("div",{className:"py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6",children:(0,r.jsx)("div",{className:"mx-auto max-w-screen-sm text-center",children:(0,r.jsx)("h2",{className:"mb-4 text-4xl tracking-tight font-extrabold leading-tight text-font dark:text-white",children:"Super! Lass uns starten!"})})})})]})}function u(t){let{setUserData:e,userData:n}=t;return(0,r.jsx)("section",{className:"bg-white dark:bg-gray-900 mt-24",children:(0,r.jsxs)("div",{className:"py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6",children:[(0,r.jsx)("div",{className:"mx-auto max-w-screen-sm text-center",children:(0,r.jsx)("h2",{className:"mb-4 text-4xl tracking-tight font-extrabold leading-tight text-font dark:text-white",children:"Wie soll ich dich nennen?"})}),(0,r.jsxs)("div",{className:"relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600",children:[(0,r.jsx)("label",{htmlFor:"name",className:"absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-font",children:"Name"}),(0,r.jsx)("input",{onChange:t=>e({...n,name:t.target.value}),type:"text",name:"name",id:"name",className:"block w-full border-0 p-0 text-font placeholder-gray-500 focus:ring-0 text-lg"})]})]})})}function l(t){let{setUserData:e,userData:n}=t,[a,o]=(0,i.useState)("");return(0,i.useEffect)(()=>{e({...n,avatar:"https://avatars.dicebear.com/api/avataaars/".concat(a)})},[a]),(0,r.jsx)("section",{className:"bg-white dark:bg-gray-900 mt-24",children:(0,r.jsxs)("div",{className:"py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6",children:[(0,r.jsx)("div",{className:"mx-auto max-w-screen-sm text-center",children:(0,r.jsx)("h2",{className:"mb-4 text-4xl tracking-tight font-extrabold leading-tight text-font dark:text-white",children:"Bitte w\xe4hle einen Avatar"})}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"flex lg:flex-nowrap flex-wrap justify-center",children:[(0,r.jsx)("div",{className:"w-4/12 md:w-6/12 px-4",onClick:()=>o("teste.svg"),children:(0,r.jsx)("img",{src:"https://avatars.dicebear.com/api/avataaars/teste.svg",alt:"avatar",className:"shadow rounded-full max-w-full h-auto align-middle border-none cursor-pointer ".concat("test.svge"===a?"p-1 ring-2 ring-green-dark":"")})}),(0,r.jsx)("div",{className:"w-4/12 md:w-6/12 px-4",onClick:()=>o("rik.svg"),children:(0,r.jsx)("img",{src:"https://avatars.dicebear.com/api/avataaars/rik.svg",alt:"avatar",className:"shadow rounded-full max-w-full h-auto align-middle border-none cursor-pointer ".concat("rik.svg"===a?"p-1 ring-2 ring-green-dark":"")})}),(0,r.jsx)("div",{className:"w-4/12 md:w-6/12 px-4",onClick:()=>o("alf.svg"),children:(0,r.jsx)("img",{src:"https://avatars.dicebear.com/api/avataaars/alf.svg",alt:"avatar",className:"shadow rounded-full max-w-full h-auto align-middle border-none cursor-pointer ".concat("alf.svg"===a?"p-1 ring-2 ring-green-dark":"")})}),(0,r.jsx)("div",{className:"w-4/12 md:w-6/12 px-4",onClick:()=>o("kar.svg"),children:(0,r.jsx)("img",{src:"https://avatars.dicebear.com/api/avataaars/kar.svg",alt:"avatar",className:"shadow rounded-full max-w-full h-auto align-middle border-none cursor-pointer ".concat("kar.svg"===a?"p-1 ring-2 ring-green-dark":"")})}),(0,r.jsx)("div",{className:"w-4/12 md:w-6/12 px-4",onClick:()=>o("kars.svg"),children:(0,r.jsx)("img",{src:"https://avatars.dicebear.com/api/avataaars/kars.svg",alt:"avatar",className:"shadow rounded-full max-w-full h-auto align-middle border-none cursor-pointer ".concat("kars.svg"===a?"p-1 ring-2 ring-green-dark":"")})})]})})]})})}var f=n(64853),h=n(11163);function d(){let t=(0,h.useRouter)(),{isLoggedIn:e}=(0,f.k)(),[n,a]=(0,i.useState)(1);console.log(e);let[o,s]=(0,i.useState)();return e&&t.push("/dashboard"),(0,r.jsxs)("div",{className:"grid h-screen place-items-center",children:[1===n&&(0,r.jsx)(u,{setUserData:s,userData:o}),2===n&&(0,r.jsx)(l,{setUserData:s,userData:o}),3===n&&(0,r.jsx)(c,{userData:o}),(0,r.jsx)("button",{onClick:()=>3===n?t.push("/dashboard"):a(n+1),className:"bg-green hover:bg-green-medium text-white font-bold py-2 px-4 rounded-full",children:"Weiter"})]})}},64853:function(t,e,n){"use strict";n.d(e,{k:function(){return r}});let r=()=>{let t;t=window.localStorage.getItem("zena-session");let e=t&&JSON.parse(t)||null;return{user:e,isLoggedIn:!!e}}},11163:function(t,e,n){t.exports=n(80880)},40725:function(t,e,n){var r;"undefined"!=typeof self&&self,r=function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,(function(e){return t[e]}).bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(e,n){e.exports=t},function(t,e,n){"use strict";var r={linear:function(t,e,n,r){return(n-e)*t/r+e},easeInQuad:function(t,e,n,r){return(n-e)*(t/=r)*t+e},easeOutQuad:function(t,e,n,r){return-(n-e)*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,r){return(n-e)*(t/=r)*t*t+e},easeOutCubic:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,n,r){return-(n-e)*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,r){var i=n-e;return-i*Math.cos(t/r*(Math.PI/2))+i+e},easeOutSine:function(t,e,n,r){return(n-e)*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,n,r){return-(n-e)/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,n,r){return 0==t?e:(n-e)*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,n,r){var i=n-e;return t==r?e+i:i*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,n,r){var i=n-e;return 0===t?e:t===r?e+i:(t/=r/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,n,r){return-(n-e)*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,n,r){return(n-e)*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,r){var i,a,o,s=n-e;return o=1.70158,0===t?e:1==(t/=r)?e+s:(a=0,a=.3*r,(i=s)<Math.abs(s)?(i=s,o=a/4):o=a/(2*Math.PI)*Math.asin(s/i),-i*Math.pow(2,10*(t-=1))*Math.sin((t*r-o)*(2*Math.PI)/a)+e)},easeOutElastic:function(t,e,n,r){var i,a,o,s=n-e;return o=1.70158,0===t?e:1==(t/=r)?e+s:(a=0,a=.3*r,(i=s)<Math.abs(s)?(i=s,o=a/4):o=a/(2*Math.PI)*Math.asin(s/i),i*Math.pow(2,-10*t)*Math.sin((t*r-o)*(2*Math.PI)/a)+s+e)},easeInOutElastic:function(t,e,n,r){var i,a,o,s=n-e;return o=1.70158,0===t?e:2==(t/=r/2)?e+s:(a=0,a=r*(.3*1.5),(i=s)<Math.abs(s)?(i=s,o=a/4):o=a/(2*Math.PI)*Math.asin(s/i),t<1?-(i*Math.pow(2,10*(t-=1))*Math.sin((t*r-o)*(2*Math.PI)/a)*.5)+e:i*Math.pow(2,-10*(t-=1))*Math.sin((t*r-o)*(2*Math.PI)/a)*.5+s+e)},easeInBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*(t/=r)*t*((i+1)*t-i)+e},easeOutBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*((t=t/r-1)*t*((i+1)*t+i)+1)+e},easeInOutBack:function(t,e,n,r,i){var a=n-e;return void 0===i&&(i=1.70158),(t/=r/2)<1?a/2*(t*t*((1+(i*=1.525))*t-i))+e:a/2*((t-=2)*t*((1+(i*=1.525))*t+i)+2)+e},easeInBounce:function(t,e,n,i){var a=n-e;return a-r.easeOutBounce(i-t,0,a,i)+e},easeOutBounce:function(t,e,n,r){var i=n-e;return(t/=r)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,i){var a=n-e;return t<i/2?.5*r.easeInBounce(2*t,0,a,i)+e:.5*r.easeOutBounce(2*t-i,0,a,i)+.5*a+e}};t.exports=r},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e),n.d(e,"ReactConfetti",function(){return F});var r,i,a,o,s=n(0),c=n.n(s),u=n(1),l=n.n(u);function f(t,e){return t+Math.random()*(e-t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}(r=a||(a={}))[r.Circle=0]="Circle",r[r.Square=1]="Square",r[r.Strip=2]="Strip",(i=o||(o={}))[i.Positive=1]="Positive",i[i.Negative=-1]="Negative";var p=function(){var t,e;function n(t,e,r,i){(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,n),d(this,"context",void 0),d(this,"radius",void 0),d(this,"x",void 0),d(this,"y",void 0),d(this,"w",void 0),d(this,"h",void 0),d(this,"vx",void 0),d(this,"vy",void 0),d(this,"shape",void 0),d(this,"angle",void 0),d(this,"angularSpin",void 0),d(this,"color",void 0),d(this,"rotateY",void 0),d(this,"rotationDirection",void 0),d(this,"getOptions",void 0),this.getOptions=e;var a=this.getOptions(),s=a.colors,c=a.initialVelocityX,u=a.initialVelocityY;this.context=t,this.x=r,this.y=i,this.w=f(5,20),this.h=f(5,20),this.radius=f(5,10),this.vx="number"==typeof c?f(-c,c):f(c.min,c.max),this.vy="number"==typeof u?f(-u,0):f(u.min,u.max),this.shape=Math.floor(0+3*Math.random()),this.angle=f(0,360)*Math.PI/180,this.angularSpin=f(-.2,.2),this.color=s[Math.floor(Math.random()*s.length)],this.rotateY=f(0,1),this.rotationDirection=f(0,1)?o.Positive:o.Negative}return t=[{key:"update",value:function(){var t=this.getOptions(),e=t.gravity,n=t.wind,r=t.friction,i=t.opacity,s=t.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=e,this.vx+=n,this.vx*=r,this.vy*=r,this.rotateY>=1&&this.rotationDirection===o.Positive?this.rotationDirection=o.Negative:this.rotateY<=-1&&this.rotationDirection===o.Negative&&(this.rotationDirection=o.Positive);var c=.1*this.rotationDirection;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=i,this.context.lineCap="round",this.context.lineWidth=2,s&&"function"==typeof s)s.call(this,this.context);else switch(this.shape){case a.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case a.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case a.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}],h(n.prototype,t),e&&h(n,e),n}();function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=function t(e,n){var r=this;(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,t),v(this,"canvas",void 0),v(this,"context",void 0),v(this,"getOptions",void 0),v(this,"x",0),v(this,"y",0),v(this,"w",0),v(this,"h",0),v(this,"lastNumberOfPieces",0),v(this,"tweenInitTime",Date.now()),v(this,"particles",[]),v(this,"particlesGenerated",0),v(this,"removeParticleAt",function(t){r.particles.splice(t,1)}),v(this,"getParticle",function(){var t=f(r.x,r.w+r.x),e=f(r.y,r.h+r.y);return new p(r.context,r.getOptions,t,e)}),v(this,"animate",function(){var t=r.canvas,e=r.context,n=r.particlesGenerated,i=r.lastNumberOfPieces,a=r.getOptions(),o=a.run,s=a.recycle,c=a.numberOfPieces,u=a.debug,l=a.tweenFunction,f=a.tweenDuration;if(!o)return!1;var h=r.particles.length,d=s?h:n,p=Date.now();if(d<c){i!==c&&(r.tweenInitTime=p,r.lastNumberOfPieces=c);for(var v=r.tweenInitTime,g=l(p-v>f?f:Math.max(0,p-v),d,c,f),m=Math.round(g-d),b=0;b<m;b++)r.particles.push(r.getParticle());r.particlesGenerated+=m}return u&&(e.font="12px sans-serif",e.fillStyle="#333",e.textAlign="right",e.fillText("Particles: ".concat(h),t.width-10,t.height-20)),r.particles.forEach(function(e,n){e.update(),(e.y>t.height||e.y<-100||e.x>t.width+100||e.x<-100)&&(s&&d<=c?r.particles[n]=r.getParticle():r.removeParticleAt(n))}),h>0||d<c}),this.canvas=e;var i=this.canvas.getContext("2d");if(!i)throw Error("Could not get canvas context");this.context=i,this.getOptions=n};function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach(function(e){x(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w={width:"undefined"!=typeof window?window.innerWidth:300,height:"undefined"!=typeof window?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:l.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},O=function(){var t;function e(t,n){var r=this;(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,e),x(this,"canvas",void 0),x(this,"context",void 0),x(this,"_options",void 0),x(this,"generator",void 0),x(this,"rafId",void 0),x(this,"setOptionsWithDefaults",function(t){var e={confettiSource:{x:0,y:0,w:r.canvas.width,h:0}};r._options=b(b(b({},e),w),t),Object.assign(r,t.confettiSource)}),x(this,"update",function(){var t=r.options,e=t.run,n=t.onConfettiComplete,i=r.canvas,a=r.context;e&&(a.fillStyle="white",a.clearRect(0,0,i.width,i.height)),r.generator.animate()?r.rafId=requestAnimationFrame(r.update):(n&&"function"==typeof n&&r.generator.particlesGenerated>0&&n.call(r,r),r._options.run=!1)}),x(this,"reset",function(){r.generator&&r.generator.particlesGenerated>0&&(r.generator.particlesGenerated=0,r.generator.particles=[],r.generator.lastNumberOfPieces=0)}),x(this,"stop",function(){r.options={run:!1},r.rafId&&(cancelAnimationFrame(r.rafId),r.rafId=void 0)}),this.canvas=t;var i=this.canvas.getContext("2d");if(!i)throw Error("Could not get canvas context");this.context=i,this.generator=new g(this.canvas,function(){return r.options}),this.options=n,this.update()}return y(e.prototype,[{key:"options",get:function(){return this._options},set:function(t){var e=this._options&&this._options.run,n=this._options&&this._options.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),"boolean"==typeof t.recycle&&t.recycle&&!1===n&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),"boolean"==typeof t.run&&t.run&&!1===e&&this.update()}}]),t&&y(e,t),e}();function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(){return(P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach(function(e){D(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function M(t,e){if(t){if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function C(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function D(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var A=c.a.createRef(),R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(a,t);var e,n,r,i=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),function(){var t,n,r=E(a);if(e){var i=E(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(t=n)&&("object"===j(t)||"function"==typeof t)?t:C(this)});function a(t){var e;!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,a);for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return D(C(e=i.call.apply(i,[this,t].concat(r))),"canvas",c.a.createRef()),D(C(e),"confetti",void 0),e.canvas=t.canvasRef||A,e}return n=[{key:"componentDidMount",value:function(){if(this.canvas.current){var t=B(this.props)[0];this.confetti=new O(this.canvas.current,t)}}},{key:"componentDidUpdate",value:function(){var t=B(this.props)[0];this.confetti&&(this.confetti.options=t)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var t,e=function(t){if(Array.isArray(t))return t}(t=B(this.props))||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(c){i=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}}(t,2)||M(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=e[0],r=e[1],i=S({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},r.style);return c.a.createElement("canvas",P({width:n.width,height:n.height,ref:this.canvas},r,{style:i}))}}],N(a.prototype,n),r&&N(a,r),a}(s.Component);function B(t){var e,n={},r={},i=[].concat(function(t){if(Array.isArray(t))return I(t)}(e=Object.keys(w))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(e)||M(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),["confettiSource","drawShape","onConfettiComplete"]),a=["canvasRef"];for(var o in t){var s=t[o];i.includes(o)?n[o]=s:a.includes(o)?a[o]=s:r[o]=s}return[n,r,{}]}D(R,"defaultProps",S({},w)),D(R,"displayName","ReactConfetti");var F=c.a.forwardRef(function(t,e){return c.a.createElement(R,P({canvasRef:e},t))});e.default=F}]).default},t.exports=r(n(67294))},88387:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isNavigator=e.isBrowser=e.off=e.on=e.noop=void 0;var n=function(){};e.noop=n,e.on=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.addEventListener&&t.addEventListener.apply(t,e)},e.off=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.removeEventListener&&t.removeEventListener.apply(t,e)},e.isBrowser="undefined"!=typeof window,e.isNavigator="undefined"!=typeof navigator},16713:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(67294),i=function(t){r.useEffect(t,[])};e.default=i},79050:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(70655),i=n(67294),a=r.__importDefault(n(86258)),o=function(t){var e=i.useRef(0),n=i.useState(t),r=n[0],o=n[1],s=i.useCallback(function(t){cancelAnimationFrame(e.current),e.current=requestAnimationFrame(function(){o(t)})},[]);return a.default(function(){cancelAnimationFrame(e.current)}),[r,s]};e.default=o},86258:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(70655),i=n(67294),a=r.__importDefault(n(16713)),o=function(t){var e=i.useRef(t);e.current=t,a.default(function(){return function(){return e.current()}})};e.default=o},62964:function(t,e,n){"use strict";var r=n(70655),i=n(67294),a=r.__importDefault(n(79050)),o=n(88387),s=function(t,e){void 0===t&&(t=1/0),void 0===e&&(e=1/0);var n=a.default({width:o.isBrowser?window.innerWidth:t,height:o.isBrowser?window.innerHeight:e}),r=n[0],s=n[1];return i.useEffect(function(){if(o.isBrowser){var t=function(){s({width:window.innerWidth,height:window.innerHeight})};return o.on(window,"resize",t),function(){o.off(window,"resize",t)}}},[]),r};e.Z=s}},function(t){t.O(0,[774,888,179],function(){return t(t.s=88162)}),_N_E=t.O()}]);