(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"1Yj4":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),s=a("q1tI"),o=a.n(s),c=a("TSYQ"),i=a.n(c),l=a("33Jr"),u=function(e){var t=e.className,a=e.cssModule,s=e.fluid,c=e.tag,u=Object(r.a)(e,["className","cssModule","fluid","tag"]),f="container";!0===s?f="container-fluid":s&&(f="container-"+s);var d=Object(l.b)(i()(t,f),a);return o.a.createElement(c,Object(n.a)({},u,{className:d}))};u.defaultProps={tag:"div"},t.a=u},"33Jr":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var n,r=a("17x9"),s=a.n(r);function o(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}var c="object"==typeof window&&window.Element||function(){};s.a.oneOfType([s.a.string,s.a.func,function(e,t,a){if(!(e[t]instanceof c))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")},s.a.shape({current:s.a.any})]),s.a.oneOfType([s.a.func,s.a.string,s.a.shape({$$typeof:s.a.symbol,render:s.a.func}),s.a.arrayOf(s.a.oneOfType([s.a.func,s.a.string,s.a.shape({$$typeof:s.a.symbol,render:s.a.func})]))]),"undefined"==typeof window||!window.document||window.document.createElement;function i(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===s)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},"dZ3+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),s=a("1Yj4"),o=a("ok1R"),c=a("rhny"),i=[{id:1,title:"Group Dentistry Reimagined"},{id:2,title:"Join our movement as we create the next generation of Private Practice"},{id:3,title:"Learn More"}],l=[{id:1,title:"Welcome to White Rock Dental"},{id:2,title:"Open Saturdays and for emergencies"},{id:3,title:"Find Us"}];t.default=function(e){var t=i;return t="parent"===Object(n.useState)(e.typeOfPage)[0]?i:l,r.a.createElement("section",{className:"section bg-home home-half",id:"home","data-image-src":"images/bg-home.jpg"},r.a.createElement("div",{className:"bg-overlay"}),r.a.createElement("div",{className:"display-table"},r.a.createElement("div",{className:"display-table-cell"},r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement(c.a,{lg:{size:8,offset:2},className:"col-lg-8 offset-lg-2 text-white text-center"},r.a.createElement("h1",{className:"home-title"},t[0].title),r.a.createElement("p",{className:"home-desc"},t[1].title)))))),r.a.createElement("div",{className:"wave-effect wave-anim"},r.a.createElement("div",{className:"waves-shape shape-one"},r.a.createElement("div",{className:"wave wave-one"})),r.a.createElement("div",{className:"waves-shape shape-two"},r.a.createElement("div",{className:"wave wave-two"})),r.a.createElement("div",{className:"waves-shape shape-three"},r.a.createElement("div",{className:"wave wave-three"}))))}},ok1R:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),s=a("q1tI"),o=a.n(s),c=a("TSYQ"),i=a.n(c),l=a("33Jr"),u=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,c=e.tag,u=e.form,f=e.widths,d=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];f.forEach((function(t,a){var n=e[t];if(delete d[t],n){var r=!a;m.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var p=Object(l.b)(i()(t,s?"no-gutters":null,u?"form-row":"row",m),a);return o.a.createElement(c,Object(n.a)({},d,{className:p}))};u.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]},t.a=u},rhny:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),s=a("q1tI"),o=a.n(s),c=a("TSYQ"),i=a.n(c),l=a("33Jr"),u=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},f=function(e){var t=e.className,a=e.cssModule,s=e.widths,c=e.tag,f=Object(r.a)(e,["className","cssModule","widths","tag"]),d=[];s.forEach((function(t,n){var r=e[t];if(delete f[t],r||""===r){var s=!n;if(Object(l.a)(r)){var o,c=s?"-":"-"+t+"-",m=u(s,t,r.size);d.push(Object(l.b)(i()(((o={})[m]=r.size||""===r.size,o["order"+c+r.order]=r.order||0===r.order,o["offset"+c+r.offset]=r.offset||0===r.offset,o)),a))}else{var p=u(s,t,r);d.push(p)}}})),d.length||d.push("col");var m=Object(l.b)(i()(t,d),a);return o.a.createElement(c,Object(n.a)({},f,{className:m}))};f.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]},t.a=f},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-section-js-c1efde5d3c13a7dca6f2.js.map