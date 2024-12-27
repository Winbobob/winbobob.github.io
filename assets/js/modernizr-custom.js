/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssanimations-cssfilters-cssremunit-csstransforms-csstransforms3d-csstransitions-displaytable-mediaqueries-opacity-preserve3d-prefixed-prefixedcss-prefixedcssvalue-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function s(){var e,t,n,s,i,o,a;for(var f in S)if(S.hasOwnProperty(f)){if(e=[],t=S[f],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)o=e[i],a=o.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),g.push((s?"":"no-")+a.join("-"))}}function i(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(w&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),w?x.className.baseVal=t:x.className=t)}function o(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function a(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):w?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e,t){return!!~(""+e).indexOf(t)}function u(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,n){var s;for(var i in e)if(e[i]in t)return n===!1?e[i]:(s=t[e[i]],r(s,"function")?u(s,n||t):s);return!1}function p(){var e=t.body;return e||(e=f(w?"svg":"body"),e.fake=!0),e}function c(e,n,r,s){var i,o,a,l,u="modernizr",d=f("div"),c=p();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=s?s[r]:u+(r+1),d.appendChild(a);return i=f("style"),i.type="text/css",i.id="s"+u,(c.fake?c:d).appendChild(i),c.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",l=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),o=n(d,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=l,x.offsetHeight):d.parentNode.removeChild(d),!!o}function m(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(a(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];s--;)i.push("("+a(t[s])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function v(e,t,s,i){function a(){d&&(delete q.style,delete q.modElem)}if(i=r(i,"undefined")?!1:i,!r(s,"undefined")){var u=m(e,s);if(!r(u,"undefined"))return u}for(var d,p,c,v,y,h=["modernizr","tspan"];!q.style;)d=!0,q.modElem=f(h.shift()),q.style=q.modElem.style;for(c=e.length,p=0;c>p;p++)if(v=e[p],y=q.style[v],l(v,"-")&&(v=o(v)),q.style[v]!==n){if(i||r(s,"undefined"))return a(),"pfx"==t?v:!0;try{q.style[v]=s}catch(g){}if(q.style[v]!=y)return a(),"pfx"==t?v:!0}return a(),!1}function y(e,t,n,s,i){var o=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+N.join(o+" ")+o).split(" ");return r(t,"string")||r(t,"undefined")?v(a,t,s,i):(a=(e+" "+P.join(o+" ")+o).split(" "),d(a,t,n))}function h(e,t,r){return y(e,n,n,t,r)}var g=[],S=[],C={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){S.push({name:e,fn:t,options:n})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var x=t.documentElement,w="svg"===x.nodeName.toLowerCase();Modernizr.addTest("cssremunit",function(){var e=f("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)});var b=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];C._prefixes=b,Modernizr.addTest("opacity",function(){var e=f("a").style;return e.cssText=b.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var _="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;Modernizr.addTest("supports",_||T);var z="Moz O ms Webkit",P=C._config.usePrefixes?z.toLowerCase().split(" "):[];C._domPrefixes=P;var E=function(e,t){var n=!1,r=f("div"),s=r.style;if(e in s){var i=P.length;for(s[e]=t,n=s[e];i--&&!n;)s[e]="-"+P[i]+"-"+t,n=s[e]}return""===n&&(n=!1),n};C.prefixedCSSValue=E;var N=C._config.usePrefixes?z.split(" "):[];C._cssomPrefixes=N;var j=function(t){var r,s=b.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var o=0;s>o;o++){var a=b[o],f=a.toUpperCase()+"_"+r;if(f in i)return"@-"+a.toLowerCase()+"-"+t}return!1};C.atRule=j;var k=C.testStyles=c;k("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2);var L=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return c("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();C.mq=L,Modernizr.addTest("mediaqueries",L("only all"));var A={elem:f("modernizr")};Modernizr._q.push(function(){delete A.elem});var q={style:A.elem.style};Modernizr._q.unshift(function(){delete q.style}),C.testAllProps=y;var M=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?j(e):(-1!=e.indexOf("-")&&(e=o(e)),t?y(e,t,n):y(e,"pfx"))};C.prefixedCSS=function(e){var t=M(e);return t&&a(t)};C.testAllProps=h,Modernizr.addTest("cssanimations",h("animationName","a",!0)),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return h("filter","blur(2px)");var e=f("a");return e.style.cssText=b.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&h("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!h("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in x.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",k(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("preserve3d",h("transformStyle","preserve-3d")),Modernizr.addTest("csstransitions",h("transition","all",!0)),s(),i(g),delete C.addTest,delete C.addAsyncTest;for(var O=0;O<Modernizr._q.length;O++)Modernizr._q[O]();e.Modernizr=Modernizr}(window,document);