!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){(function(t){var r=t&&t.pid?t.pid.toString(36):"";function n(){var e=Date.now(),t=n.last||e;return n.last=e>t?e:t+1}e.exports=e.exports.default=function(e,t){return(e||"")+""+r+n().toString(36)+(t||"")},e.exports.process=function(e,t){return(e||"")+r+n().toString(36)+(t||"")},e.exports.time=function(e,t){return(e||"")+n().toString(36)+(t||"")}}).call(this,r(1))},function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var a,s=[],l=!1,d=-1;function f(){l&&a&&(l=!1,a.length?s=a.concat(s):d=-1,s.length&&y())}function y(){if(!l){var e=c(f);l=!0;for(var t=s.length;t;){for(a=s,s=[];++d<t;)a&&a[d].run();d=-1,t=s.length}a=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new g(e,t)),1!==s.length||l||c(y)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);function i(e,t){return Math.floor(Math.random()*(t-e+1)+e)}class u{constructor(){this.green=i(0,255),this.blue=i(0,255),this.red=i(0,255),this.id=o()()}htmlRespresent(){return`RGB(${this.red}, ${this.green}, ${this.blue})`}}function c(e){let t=`<div class="square" id="${e.id}" style="background-color: ${e.htmlRespresent()}"></div>`;document.querySelector(".container-targets").insertAdjacentHTML("beforeend",t)}const a={btnHard:document.querySelector(".dificulity__level--hard"),btnEasy:document.querySelector(".dificulity__level--easy"),header:document.querySelector(".header"),newBtn:document.querySelector(".new"),squaresContainer:document.querySelector(".container-targets"),dificulity:document.querySelector(".dificulity"),message:document.querySelector(".message"),UIRGBTarget:document.querySelector(".rgb-target")};let s={};function l(e){if(e.target.matches(".square")&&!s.stateWon){s.currentTarget.id===e.target.id?(r=s.currentTarget,document.querySelectorAll(".square, .header").forEach(e=>e.style.backgroundColor=r.htmlRespresent()),a.message.textContent="Currect!",a.newBtn.textContent="PLAY AGIAN?",s.stateWon=!0):(t=e.target,a.message.textContent="Try again",t.style.backgroundColor="transparent")}var t,r}function d(e){e.target.dataset.difival===s.dificulity||s.stateWon||(s.dificulity="hard"===s.dificulity?"easy":"hard",a.btnHard.classList.toggle("dificulity__level--selected"),a.btnEasy.classList.toggle("dificulity__level--selected"),y(s.dificulity))}function f(e){y(s.dificulity);const t=window.getComputedStyle(a.header).getPropertyValue("--color-primary");a.header.style.backgroundColor=t,s.stateWon=!1,a.newBtn.textContent="New Colors"}function y(e){var t,r;s.targets="hard"===e?[new u,new u,new u,new u,new u,new u]:[new u,new u,new u],s.currentTarget=s.targets[i(0,s.targets.length-1)],t=s.targets,a.squaresContainer.innerHTML="",t.forEach(c),r=s.currentTarget,a.UIRGBTarget.textContent=r.htmlRespresent(),a.message.textContent=""}s.dificulity="hard",y(s.dificulity),a.squaresContainer.addEventListener("click",l),a.dificulity.addEventListener("click",d),a.newBtn.addEventListener("click",f)}]);