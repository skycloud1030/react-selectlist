!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("ReactSelectlist",["react"],t):"object"==typeof exports?exports.ReactSelectlist=t(require("react")):e.ReactSelectlist=t(e.react)}("undefined"!=typeof self?self:this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(t,r){t.exports=e},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=Array.isArray;function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e){var t=this,r=e.className,c=e.style,u=e.disabled,s=e.multiple,d=e.orientation,b=e.textField,p=void 0===b?"label":b,y=e.valueField,m=void 0===y?"value":y,v=f(Object(n.useState)((function(){return Math.random().toString(36).substring(2,15)})),1)[0],h=f(Object(n.useState)(e.data),2),O=h[0],j=h[1],g=e.onChange,S=void 0===g?function(){}:g,k=Object(n.useCallback)((function(e){var t,r=[];switch(s){case!0:(r=l(O))[e].checked=!r[e].checked;break;default:(r=O.map((function(e){return i({},e,{checked:!1})})))[e].checked=!0,t=r[e][m]}S(function(e){switch(!0){case s:return e.filter((function(e){return e.checked})).map((function(e){return e[m]}));default:return t}}(r))}),[s,O]);Object(n.useEffect)((function(){var t,r,n=[],o=e.value;switch(!0){case s&&a(o):n=e.data.map((function(e){return i({},e,{checked:o.includes(e[m])})}));break;case s:n=e.data.map((function(e){return i({},e,{checked:e[m]==o})}));break;case a(o):r=null==(t=o)?0:t.length,o=r?t[r-1]:void 0;default:n=e.data.map((function(e){return i({},e,{checked:e[m]==o})}))}j(n)}),[e.data,s,e.value]);var w=Object(n.useMemo)((function(){var r=s?"checkbox":"radio",n="horizontal"===d?{display:"inline-block"}:{display:"block"};return O.map((function(a,c){var l=a.checked||!1;return o.a.createElement("span",{key:c,style:i({},e.style,{},n)},o.a.createElement("input",{id:"".concat(v,"_").concat(c),checked:l,name:"".concat(v,"_").concat(c),type:r,onChange:k.bind(t,c),value:a[m],disabled:u[c]}),o.a.createElement("label",{htmlFor:"".concat(v,"_").concat(c)},a[p]))}))}),[u,s,d,O]);return o.a.createElement("span",{className:r,style:c},w)}b.defaultProps={data:[],disabled:[],orientation:"horizontal",multiple:!0};var p=o.a.memo(b);t.default=p}])}));