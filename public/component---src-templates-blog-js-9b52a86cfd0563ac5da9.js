(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{R8uD:function(e,n,t){"use strict";(function(e){t("DNiP"),t("bWfx"),t("DW2E"),t("hhXQ"),t("Z2Ku"),t("L9s1"),t("hHhE"),t("WLL4"),t("rE2o"),t("rGqo"),t("yt8O"),t("RW0V"),t("pIFo"),t("ioFf"),t("V+eJ"),t("KKXr"),t("a1Th"),t("h7Nl"),t("Btvt"),t("91GP"),t("HAE/"),Object.defineProperty(n,"__esModule",{value:!0});var r,o=t("q1tI"),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return(i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var l,a=function(e,n){return e(n={exports:{}},n.exports),n.exports}((function(e,n){Object.defineProperty(n,"__esModule",{value:!0});var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,n){return e(n={exports:{}},n.exports),n.exports}var o,u,i,l="object",a=function(e){return e&&e.Math==Math&&e},f=a(typeof globalThis==l&&globalThis)||a(typeof window==l&&window)||a(typeof self==l&&self)||a(typeof t==l&&t)||Function("return this")(),s=function(e){try{return!!e()}catch(n){return!0}},p=!s((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),E={}.propertyIsEnumerable,d=Object.getOwnPropertyDescriptor,y={f:d&&!E.call({1:2},1)?function(e){var n=d(this,e);return!!n&&n.enumerable}:E},h=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}},v={}.toString,T="".split,m=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return v.call(e).slice(8,-1)}(e)?T.call(e,""):Object(e)}:Object,g=function(e){return m(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},O=function(e){return"object"==typeof e?null!==e:"function"==typeof e},_=function(e,n){if(!O(e))return e;var t,r;if(n&&"function"==typeof(t=e.toString)&&!O(r=t.call(e)))return r;if("function"==typeof(t=e.valueOf)&&!O(r=t.call(e)))return r;if(!n&&"function"==typeof(t=e.toString)&&!O(r=t.call(e)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,I=function(e,n){return b.call(e,n)},D=f.document,S=O(D)&&O(D.createElement),N=function(e){return S?D.createElement(e):{}},L=!p&&!s((function(){return 7!=Object.defineProperty(N("div"),"a",{get:function(){return 7}}).a})),A=Object.getOwnPropertyDescriptor,P={f:p?A:function(e,n){if(e=g(e),n=_(n,!0),L)try{return A(e,n)}catch(t){}if(I(e,n))return h(!y.f.call(e,n),e[n])}},R=function(e){if(!O(e))throw TypeError(String(e)+" is not an object");return e},w=Object.defineProperty,j={f:p?w:function(e,n,t){if(R(e),n=_(n,!0),R(t),L)try{return w(e,n,t)}catch(r){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(e[n]=t.value),e}},H=p?function(e,n,t){return j.f(e,n,h(1,t))}:function(e,n,t){return e[n]=t,e},M=function(e,n){try{H(f,e,n)}catch(t){f[e]=n}return n},G=r((function(e){var n=f["__core-js_shared__"]||M("__core-js_shared__",{});(e.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),k=G("native-function-to-string",Function.toString),x=f.WeakMap,C="function"==typeof x&&/native code/.test(k.call(x)),K=0,B=Math.random(),Y=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++K+B).toString(36)},U=G("keys"),F=function(e){return U[e]||(U[e]=Y(e))},V={},q=f.WeakMap;if(C){var W=new q,Q=W.get,z=W.has,X=W.set;o=function(e,n){return X.call(W,e,n),n},u=function(e){return Q.call(W,e)||{}},i=function(e){return z.call(W,e)}}else{var J=F("state");V[J]=!0,o=function(e,n){return H(e,J,n),n},u=function(e){return I(e,J)?e[J]:{}},i=function(e){return I(e,J)}}var Z={set:o,get:u,has:i,enforce:function(e){return i(e)?u(e):o(e,{})},getterFor:function(e){return function(n){var t;if(!O(n)||(t=u(n)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return t}}},$=r((function(e){var n=Z.get,t=Z.enforce,r=String(k).split("toString");G("inspectSource",(function(e){return k.call(e)})),(e.exports=function(e,n,o,u){var i=!!u&&!!u.unsafe,c=!!u&&!!u.enumerable,l=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof n||I(o,"name")||H(o,"name",n),t(o).source=r.join("string"==typeof n?n:"")),e!==f?(i?!l&&e[n]&&(c=!0):delete e[n],c?e[n]=o:H(e,n,o)):c?e[n]=o:M(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||k.call(this)}))})),ee=f,ne=function(e){return"function"==typeof e?e:void 0},te=function(e,n){return arguments.length<2?ne(ee[e])||ne(f[e]):ee[e]&&ee[e][n]||f[e]&&f[e][n]},re=Math.ceil,oe=Math.floor,ue=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ie=Math.min,ce=Math.max,le=Math.min,ae=function(e){return function(n,t,r){var o,u,i=g(n),c=(o=i.length)>0?ie(ue(o),9007199254740991):0,l=function(e,n){var t=ue(e);return t<0?ce(t+n,0):le(t,n)}(r,c);if(e&&t!=t){for(;c>l;)if((u=i[l++])!=u)return!0}else for(;c>l;l++)if((e||l in i)&&i[l]===t)return e||l||0;return!e&&-1}},fe={includes:ae(!0),indexOf:ae(!1)},se=fe.indexOf,pe=function(e,n){var t,r=g(e),o=0,u=[];for(t in r)!I(V,t)&&I(r,t)&&u.push(t);for(;n.length>o;)I(r,t=n[o++])&&(~se(u,t)||u.push(t));return u},Ee=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],de=Ee.concat("length","prototype"),ye={f:Object.getOwnPropertyNames||function(e){return pe(e,de)}},he={f:Object.getOwnPropertySymbols},ve=te("Reflect","ownKeys")||function(e){var n=ye.f(R(e)),t=he.f;return t?n.concat(t(e)):n},Te=function(e,n){for(var t=ve(n),r=j.f,o=P.f,u=0;u<t.length;u++){var i=t[u];I(e,i)||r(e,i,o(n,i))}},me=/#|\.prototype\./,ge=function(e,n){var t=_e[Oe(e)];return t==Ie||t!=be&&("function"==typeof n?s(n):!!n)},Oe=ge.normalize=function(e){return String(e).replace(me,".").toLowerCase()},_e=ge.data={},be=ge.NATIVE="N",Ie=ge.POLYFILL="P",De=ge,Se=P.f,Ne=function(e,n){var t,r,o,u,i,c=e.target,l=e.global,a=e.stat;if(t=l?f:a?f[c]||M(c,{}):(f[c]||{}).prototype)for(r in n){if(u=n[r],o=e.noTargetGet?(i=Se(t,r))&&i.value:t[r],!De(l?r:c+(a?".":"#")+r,e.forced)&&void 0!==o){if(typeof u==typeof o)continue;Te(u,o)}(e.sham||o&&o.sham)&&H(u,"sham",!0),$(t,r,u,e)}},Le=Object.keys||function(e){return pe(e,Ee)},Ae=y.f,Pe=function(e){return function(n){for(var t,r=g(n),o=Le(r),u=o.length,i=0,c=[];u>i;)t=o[i++],p&&!Ae.call(r,t)||c.push(e?[t,r[t]]:r[t]);return c}},Re={entries:Pe(!0),values:Pe(!1)}.values;Ne({target:"Object",stat:!0},{values:function(e){return Re(e)}});ee.Object.values;var we=!!Object.getOwnPropertySymbols&&!s((function(){return!String(Symbol())})),je=f.Symbol,He=G("wks"),Me=p?Object.defineProperties:function(e,n){R(e);for(var t,r=Le(n),o=r.length,u=0;o>u;)j.f(e,t=r[u++],n[t]);return e},Ge=te("document","documentElement"),ke=F("IE_PROTO"),xe=function(){},Ce=function(){var e,n=N("iframe"),t=Ee.length;for(n.style.display="none",Ge.appendChild(n),n.src=String("javascript:"),(e=n.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),Ce=e.F;t--;)delete Ce.prototype[Ee[t]];return Ce()},Ke=Object.create||function(e,n){var t;return null!==e?(xe.prototype=R(e),t=new xe,xe.prototype=null,t[ke]=e):t=Ce(),void 0===n?t:Me(t,n)};V[ke]=!0;var Be,Ye=He[Be="unscopables"]||(He[Be]=we&&je[Be]||(we?je:Y)("Symbol."+Be)),Ue=Array.prototype;null==Ue[Ye]&&H(Ue,Ye,Ke(null));var Fe,Ve=fe.includes;Ne({target:"Array",proto:!0},{includes:function(e){return Ve(this,e,arguments.length>1?arguments[1]:void 0)}}),Fe="includes",Ue[Ye][Fe]=!0;var qe,We,Qe,ze=function(e,n,t){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===n)return e;switch(t){case 0:return function(){return e.call(n)};case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}},Xe=Function.call;qe="includes",ze(Xe,f["Array"].prototype[qe],We);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(Qe||(Qe={}));var Je,Ze=Qe;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Je||(Je={}));var $e,en=Je,nn=[Ze.PARAGRAPH,Ze.HEADING_1,Ze.HEADING_2,Ze.HEADING_3,Ze.HEADING_4,Ze.HEADING_5,Ze.HEADING_6,Ze.OL_LIST,Ze.UL_LIST,Ze.HR,Ze.QUOTE,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],tn=[Ze.HR,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],rn=(($e={})[Ze.OL_LIST]=[Ze.LIST_ITEM],$e[Ze.UL_LIST]=[Ze.LIST_ITEM],$e[Ze.LIST_ITEM]=nn.slice(),$e[Ze.QUOTE]=[Ze.PARAGRAPH],$e);var on=Object.freeze({isInline:function(e){return Object.values(en).includes(e.nodeType)},isBlock:function(e){return Object.values(Ze).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});n.BLOCKS=Ze,n.CONTAINERS=rn,n.INLINES=en,n.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},n.TOP_LEVEL_BLOCKS=nn,n.VOID_BLOCKS=tn,n.helpers=on}));(l=a)&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")&&l.default;var f,s,p=a.BLOCKS,E=(a.CONTAINERS,a.INLINES),d=a.MARKS,y=(a.TOP_LEVEL_BLOCKS,a.VOID_BLOCKS,a.helpers);function h(e,n){return e.map((function(e,t){return r=v(e,n),u=t,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function v(e,n){var t=n.renderNode,r=n.renderMark,o=n.renderText;if(y.isText(e))return e.marks.reduce((function(e,n){return r[n.type]?r[n.type](e):e}),o?o(e.value):e.value);var i=h(e.content,n);return e.nodeType&&t[e.nodeType]?t[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}var T=((f={})[p.DOCUMENT]=function(e,n){return n},f[p.PARAGRAPH]=function(e,n){return u.createElement("p",null,n)},f[p.HEADING_1]=function(e,n){return u.createElement("h1",null,n)},f[p.HEADING_2]=function(e,n){return u.createElement("h2",null,n)},f[p.HEADING_3]=function(e,n){return u.createElement("h3",null,n)},f[p.HEADING_4]=function(e,n){return u.createElement("h4",null,n)},f[p.HEADING_5]=function(e,n){return u.createElement("h5",null,n)},f[p.HEADING_6]=function(e,n){return u.createElement("h6",null,n)},f[p.EMBEDDED_ENTRY]=function(e,n){return u.createElement("div",null,n)},f[p.UL_LIST]=function(e,n){return u.createElement("ul",null,n)},f[p.OL_LIST]=function(e,n){return u.createElement("ol",null,n)},f[p.LIST_ITEM]=function(e,n){return u.createElement("li",null,n)},f[p.QUOTE]=function(e,n){return u.createElement("blockquote",null,n)},f[p.HR]=function(){return u.createElement("hr",null)},f[E.ASSET_HYPERLINK]=function(e){return g(E.ASSET_HYPERLINK,e)},f[E.ENTRY_HYPERLINK]=function(e){return g(E.ENTRY_HYPERLINK,e)},f[E.EMBEDDED_ENTRY]=function(e){return g(E.EMBEDDED_ENTRY,e)},f[E.HYPERLINK]=function(e,n){return u.createElement("a",{href:e.data.uri},n)},f),m=((s={})[d.BOLD]=function(e){return u.createElement("b",null,e)},s[d.ITALIC]=function(e){return u.createElement("i",null,e)},s[d.UNDERLINE]=function(e){return u.createElement("u",null,e)},s[d.CODE]=function(e){return u.createElement("code",null,e)},s);function g(e,n){return u.createElement("span",{key:n.data.target.sys.id},"type: ",n.nodeType," id: ",n.data.target.sys.id)}n.documentToReactComponents=function(e,n){return void 0===n&&(n={}),e?v(e,{renderNode:i({},T,n.renderNode),renderMark:i({},m,n.renderMark),renderText:n.renderText}):null}}).call(this,t("yLpj"))},UExd:function(e,n,t){var r=t("nh4g"),o=t("DVgA"),u=t("aCFj"),i=t("UqcF").f;e.exports=function(e){return function(n){for(var t,c=u(n),l=o(c),a=l.length,f=0,s=[];a>f;)t=l[f++],r&&!i.call(c,t)||s.push(e?[t,c[t]]:c[t]);return s}}},c851:function(e,n,t){"use strict";t.r(n),t.d(n,"query",(function(){return l}));var r=t("q1tI"),o=t.n(r),u=t("hTlr"),i=t("R8uD"),c=t("hIod"),l="2646195817";n.default=function(e){return o.a.createElement(u.a,null,o.a.createElement(c.a,{title:e.data.contentfulPost.title}),o.a.createElement("h1",null,e.data.contentfulPost.title),o.a.createElement("p",null,e.data.contentfulPost.publishedDate),Object(i.documentToReactComponents)(e.data.contentfulPost.body.json))}},hhXQ:function(e,n,t){var r=t("XKFU"),o=t("UExd")(!1);r(r.S,"Object",{values:function(e){return o(e)}})}}]);
//# sourceMappingURL=component---src-templates-blog-js-9b52a86cfd0563ac5da9.js.map