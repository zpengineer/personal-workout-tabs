parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"tuLQ":[function(require,module,exports) {
const e={controls:document.querySelector("[data-controls]"),panes:document.querySelector("[data-panes]"),pane:document.querySelectorAll(".pane-item"),accordion:document.querySelector(".pane-accordion")};for(item of(e.controls.addEventListener("click",t=>{if(t.preventDefault(),"A"!==t.target.nodeName)return;const c=document.querySelector(".controls__item--active");c&&c.classList.remove("controls__item--active");const a=t.target;a.classList.add("controls__item--active");const s=a.getAttribute("href").slice(1),n=e.panes.querySelector(`#${s}`),o=document.querySelector(".pane--active");o&&o.classList.remove("pane--active"),n.classList.add("pane--active")}),e.pane))item.addEventListener("click",function(){if(this.classList.contains("pane-item--active"))this.classList.remove("pane-item--active");else{for(el of e.pane)el.classList.remove("pane-item--active");this.classList.add("pane-item--active")}});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./app/tabs.js");
},{"./sass/main.scss":"clu1","./app/tabs.js":"tuLQ"}]},{},["Focm"], null)
//# sourceMappingURL=/personal-workout-tabs/src.714d2261.js.map