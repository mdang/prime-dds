(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"1Yj4":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o),s=n("TSYQ"),c=n.n(s),l=n("33Jr"),u=function(e){var t=e.className,n=e.cssModule,o=e.fluid,s=e.tag,u=Object(r.a)(e,["className","cssModule","fluid","tag"]),f="container";!0===o?f="container-fluid":o&&(f="container-"+o);var d=Object(l.e)(c()(t,f),n);return i.a.createElement(s,Object(a.a)({},u,{className:d}))};u.defaultProps={tag:"div"},t.a=u},"33Jr":function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return m}));var a,r=n("17x9"),o=n.n(r);function i(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function s(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function c(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,o={};r>0;)o[n=a[r-=1]]=e[n];return o}var l="object"==typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,t,n){if(!(e[t]instanceof l))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]),o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]);var u={Fade:150,Collapse:350,Modal:300,Carousel:600},f=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],d={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};"undefined"==typeof window||!window.document||window.document.createElement;function m(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},"dZ3+":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("1Yj4"),i=n("ok1R"),s=n("rhny"),c=[{id:1,title:"Group Dentistry Reimagined"},{id:2,title:"Join our movement as we create the next generation of Private Practice"},{id:3,title:"Learn More"}],l=[{id:1,title:"Welcome to<br />White Rock Dental"},{id:2,title:"Open Saturdays and for Emergencies"},{id:3,title:"Find Us"}];t.default=function(e){var t=c;return t="parent"===Object(a.useState)(e.typeOfPage)[0]?c:l,r.a.createElement("section",{className:"section bg-home home-half",id:"home","data-image-src":"images/bg-home.jpg"},r.a.createElement("div",{className:"bg-overlay"}),r.a.createElement("div",{className:"display-table"},r.a.createElement("div",{className:"display-table-cell"},r.a.createElement(o.a,null,r.a.createElement(i.a,null,r.a.createElement(s.a,{lg:{size:8,offset:2},className:"col-lg-8 offset-lg-2 text-white text-center"},r.a.createElement("h1",{className:"home-title",dangerouslySetInnerHTML:{__html:t[0].title}}),r.a.createElement("p",{className:"home-desc"},t[1].title)))))),r.a.createElement("div",{className:"wave-effect wave-anim"},r.a.createElement("div",{className:"waves-shape shape-one"},r.a.createElement("div",{className:"wave wave-one"})),r.a.createElement("div",{className:"waves-shape shape-two"},r.a.createElement("div",{className:"wave wave-two"})),r.a.createElement("div",{className:"waves-shape shape-three"},r.a.createElement("div",{className:"wave wave-three"}))))}},ok1R:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o),s=n("TSYQ"),c=n.n(s),l=n("33Jr"),u=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,s=e.tag,u=e.form,f=e.widths,d=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];f.forEach((function(t,n){var a=e[t];if(delete d[t],a){var r=!n;m.push(r?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var p=Object(l.e)(c()(t,o?"no-gutters":null,u?"form-row":"row",m),n);return i.a.createElement(s,Object(a.a)({},d,{className:p}))};u.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]},t.a=u},rhny:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o),s=n("TSYQ"),c=n.n(s),l=n("33Jr"),u=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},f=function(e){var t=e.className,n=e.cssModule,o=e.widths,s=e.tag,f=Object(r.a)(e,["className","cssModule","widths","tag"]),d=[];o.forEach((function(t,a){var r=e[t];if(delete f[t],r||""===r){var o=!a;if(Object(l.d)(r)){var i,s=o?"-":"-"+t+"-",m=u(o,t,r.size);d.push(Object(l.e)(c()(((i={})[m]=r.size||""===r.size,i["order"+s+r.order]=r.order||0===r.order,i["offset"+s+r.offset]=r.offset||0===r.offset,i)),n))}else{var p=u(o,t,r);d.push(p)}}})),d.length||d.push("col");var m=Object(l.e)(c()(t,d),n);return i.a.createElement(s,Object(a.a)({},f,{className:m}))};f.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]},t.a=f},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-section-js-9fc37a33554b835e5181.js.map