(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1Yj4":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),i=n("q1tI"),o=n.n(i),s=n("TSYQ"),c=n.n(s),l=n("33Jr"),d=function(e){var t=e.className,n=e.cssModule,i=e.fluid,s=e.tag,d=Object(r.a)(e,["className","cssModule","fluid","tag"]),u="container";!0===i?u="container-fluid":i&&(u="container-"+i);var f=Object(l.e)(c()(t,u),n);return o.a.createElement(s,Object(a.a)({},d,{className:f}))};d.defaultProps={tag:"div"},t.a=d},"33Jr":function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return m}));var a,r=n("17x9"),i=n.n(r);function o(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function s(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function c(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,i={};r>0;)i[n=a[r-=1]]=e[n];return i}var l="object"==typeof window&&window.Element||function(){};i.a.oneOfType([i.a.string,i.a.func,function(e,t,n){if(!(e[t]instanceof l))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},i.a.shape({current:i.a.any})]),i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]);var d={Fade:150,Collapse:350,Modal:300,Carousel:600},u=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],f={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};"undefined"==typeof window||!window.document||window.document.createElement;function m(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},"dZ3+":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("1Yj4"),o=n("ok1R"),s=n("rhny"),c=[{id:1,title:"Welcome to<br />White Rock Dental"},{id:2,title:"Open Saturdays and for Emergencies"},{id:3,title:"Find Us"}],l=[{id:1,title:"Welcome to<br />White Rock Dental"},{id:2,title:"Open Saturdays and for Emergencies"},{id:3,title:"Find Us"}],d=[{id:1,title:"Welcome to<br />White Rock Dental"},{id:2,title:"Open Saturdays and for Emergencies"},{id:3,title:"Find Us"}],u=[{id:1,title:"Welcome to<br />White Rock Dental"},{id:2,title:"Open Saturdays and for Emergencies"},{id:3,title:"Find Us"}],f=[{id:1,title:"Welcome to<br />White Rock Dental"},{id:2,title:"Open Saturdays and for Emergencies"},{id:3,title:"Find Us"}],m=[{id:1,title:"Group Dentistry Reimagined"},{id:2,title:"Join our movement as we create the next generation of Private Practice"},{id:3,title:"Learn More"}],p=[{id:1,title:"Welcome to<br />White Rock Dental"},{id:2,title:"Open Saturdays and for Emergencies"},{id:3,title:"Find Us"}],v=[{id:1,title:"Welcome to<br />White Rock Dental"},{id:2,title:"Open Saturdays and for Emergencies"},{id:3,title:"Find Us"}],h=[{id:1,title:"Welcome to<br />White Rock Dental"},{id:2,title:"Open Saturdays and for Emergencies"},{id:3,title:"Find Us"}],w=[{id:1,title:"Welcome to<br />White Rock Dental"},{id:2,title:"Open Saturdays and for Emergencies"},{id:3,title:"Find Us"}];t.default=function(e){var t=m,n=Object(a.useState)(e.typeOfPage)[0];return t="arlingtonDental"===n?c:"crownDental"===n?l:"crystalCreek"===n?d:"denstar"===n?u:"fairview"===n?f:"primeDentalGarland"===n?p:"primeDentalGP"===n?v:"primeDentalPlano"===n?h:"whiteRock"===n?w:m,r.a.createElement("section",{className:"section bg-home home-half",id:"home","data-image-src":"images/bg-home.jpg"},r.a.createElement("div",{className:"bg-overlay"}),r.a.createElement("div",{className:"display-table"},r.a.createElement("div",{className:"display-table-cell"},r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(s.a,{lg:{size:8,offset:2},className:"col-lg-8 offset-lg-2 text-white text-center"},r.a.createElement("h1",{className:"home-title",dangerouslySetInnerHTML:{__html:t[0].title}}),r.a.createElement("p",{className:"home-desc"},t[1].title)))))),r.a.createElement("div",{className:"wave-effect wave-anim"},r.a.createElement("div",{className:"waves-shape shape-one"},r.a.createElement("div",{className:"wave wave-one"})),r.a.createElement("div",{className:"waves-shape shape-two"},r.a.createElement("div",{className:"wave wave-two"})),r.a.createElement("div",{className:"waves-shape shape-three"},r.a.createElement("div",{className:"wave wave-three"}))))}},ok1R:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),i=n("q1tI"),o=n.n(i),s=n("TSYQ"),c=n.n(s),l=n("33Jr"),d=function(e){var t=e.className,n=e.cssModule,i=e.noGutters,s=e.tag,d=e.form,u=e.widths,f=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];u.forEach((function(t,n){var a=e[t];if(delete f[t],a){var r=!n;m.push(r?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var p=Object(l.e)(c()(t,i?"no-gutters":null,d?"form-row":"row",m),n);return o.a.createElement(s,Object(a.a)({},f,{className:p}))};d.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]},t.a=d},rhny:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),i=n("q1tI"),o=n.n(i),s=n("TSYQ"),c=n.n(s),l=n("33Jr"),d=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},u=function(e){var t=e.className,n=e.cssModule,i=e.widths,s=e.tag,u=Object(r.a)(e,["className","cssModule","widths","tag"]),f=[];i.forEach((function(t,a){var r=e[t];if(delete u[t],r||""===r){var i=!a;if(Object(l.d)(r)){var o,s=i?"-":"-"+t+"-",m=d(i,t,r.size);f.push(Object(l.e)(c()(((o={})[m]=r.size||""===r.size,o["order"+s+r.order]=r.order||0===r.order,o["offset"+s+r.offset]=r.offset||0===r.offset,o)),n))}else{var p=d(i,t,r);f.push(p)}}})),f.length||f.push("col");var m=Object(l.e)(c()(t,f),n);return o.a.createElement(s,Object(a.a)({},u,{className:m}))};u.defaultProps={tag:"div",widths:["xs","sm","md","lg","xl"]},t.a=u},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(a){"object"==typeof window&&(n=window)}e.exports=n},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=commons-8abffc302bb185d87bab.js.map