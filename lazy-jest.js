!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(window,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)t.d(r,u,function(n){return e[n]}.bind(null,u));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=n.appendArgCases=function(e,n,t){return t.reduce(function(t,r){var u=e(n,r);return t.concat(u)},[])};n.default=function(e,n,t){var u="number"==typeof t?n[t]:void 0,o=(u||{}).invalidCases;return!u||o&&o.length?n.reduce(function(n,u,a){if(a===t)return r(e,n,o||[]);var i=u.validCases;return"number"!=typeof t||t<0?r(e,n,i):e(n,i[0])},[]):[]}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(t(0)).default.bind(null,function(e,n){return e.length?e.map(function(e){return[].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(e),[n])}):[[n]]});n.default=r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u=t(0),o=function(e){return e&&e.__esModule?e:{default:e}}(u);function a(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f=function(e){return function(n,t){return n.length?n.map(function(n){return r({},n,i({},e,t))}):[i({},e,t)]}};n.default=function(e){var n=e.value.filter(function(e){return!e.optional}),t=e.value.filter(function(e){return e.optional}),r=[],i=[];n.forEach(function(e,t){var u=function(e){return o.default.bind(null,f(e))}(e.name);i=i.concat(u(n,t)),r=r.concat(u(n))});var c=[],l=[];return t.forEach(function(e){var n=e.name,t=e.invalidCases,o=e.validCases,a=function(e){return u.appendArgCases.bind(null,f(e))}(n);t&&(l=l.concat(a(r,t))),c=c.concat(a(r,o))}),{validCases:[].concat(a(n),a(c)),invalidCases:[].concat(a(i),a(l))}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(4);Object.defineProperty(n,"testFunction",{enumerable:!0,get:function(){return r.testFunction}}),Object.defineProperty(n,"enumerateArgsTestFunction",{enumerable:!0,get:function(){return r.enumerateArgsTestFunction}});var u=t(6);Object.defineProperty(n,"enumerateArrayCases",{enumerable:!0,get:function(){return u.enumerateArrayCases}}),Object.defineProperty(n,"enumerateCases",{enumerable:!0,get:function(){return u.enumerateCases}}),Object.defineProperty(n,"configArgs",{enumerable:!0,get:function(){return u.configArgs}}),Object.defineProperty(n,"configObjectArg",{enumerable:!0,get:function(){return u.configObjectArg}})},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.enumerateArgsTestFunction=n.testFunction=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=t(5),o=function(e){return e&&e.__esModule?e:{default:e}}(t(1));var a=function(e){return"- ("+e.map(function(e){return void 0===e?"undefined":"string"==typeof e?'"'+e+'"':(Array.isArray(e),"object"===(void 0===e?"undefined":r(e))?JSON.stringify(e):e.toString())}).join(",")+")"},i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];test(a(n),function(){(0,u.matchSnapshot)(function(){return e.apply(void 0,function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(n))})})},f=n.testFunction=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(e.name||"function")+"()";describe(t,function(){n&&n.length?n.forEach(function(n){return i(e,n)}):i(e)})},c=function(e,n){var t=n.map(function(e){return e.name});n.forEach(function(r,u){var i=(0,o.default)(n,u),c=a(t)+", argument <"+r.name+"> is invalid";f(e,i,c)})},l=function(e,n){var t=(0,o.default)(n),r=n.map(function(e){return e.name}),u=a(r);f(e,t.length?t:[],u)};n.enumerateArgsTestFunction=function(e,n){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(e.name||"function")+"()",r=n.value,u=r.length,o=r.length;--o&&r[o]&&r[o].optional;)u=o;var a=r.slice(u),f=r.slice(0,u);describe(t,function(){for(var n=a.length+1;n--;){var t=f.concat(a.slice(0,n));t.length?(c(e,t),l(e,t)):i(e)}})}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=n.mayThrowWrapper=function(e){try{return e()}catch(e){return e}};n.matchSnapshot=function(e){expect(r(e)).toMatchSnapshot()}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1);Object.defineProperty(n,"enumerateArrayCases",{enumerable:!0,get:function(){return i(r).default}});var u=t(0);Object.defineProperty(n,"enumerateCases",{enumerable:!0,get:function(){return i(u).default}});var o=t(7);Object.defineProperty(n,"configArgs",{enumerable:!0,get:function(){return i(o).default}});var a=t(2);function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"configObjectArg",{enumerable:!0,get:function(){return i(a).default}})},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ArgsConfig=void 0;var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(t(2));var a=function(e){var n=e.validCases,t=e.invalidCases,r=e.optional,u=e.name;return r&&(t=t?t.filter(function(e){return void 0!==e}):void 0,n.includes(void 0)||(n=[].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(n),[void 0]))),{optional:!!r,name:u||"argument",validCases:n,invalidCases:t}},i=n.ArgsConfig=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.value=Array.isArray(n)?n.map(a):[]}return u(e,[{key:"arg",value:function(e,n,t){return this.value.push(a(r({},t||{},{name:e,validCases:n}))),this}},{key:"objectArg",value:function(e,n,t){return this.value.push(r({},(0,o.default)(n),t||{},{name:e})),this}}]),e}();n.default=function(e){return new i(e)}}])});
//# sourceMappingURL=lazy-jest.js.map