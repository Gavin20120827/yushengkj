(function(){var h={},mt={},c={id:"8b6ff1803602c6b08c4a6773d98c5b72",dm:["acmetcu.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],cptrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:1,vcard:11474957,qiao:11474957,lxb:11474957,kbtrk:0,pt:0,spa:0,aet:'',hca:'9637143046030F3F',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,v=!0,w=null,x=!1;mt.cookie={};mt.cookie.set=function(a,b,d){var e;d.O&&(e=new Date,e.setTime(e.getTime()+d.O));document.cookie=a+"="+b+(d.domain?"; domain="+d.domain:"")+(d.path?"; path="+d.path:"")+(e?"; expires="+e.toGMTString():"")+(d.qc?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:w};
mt.cookie.Nb=function(a,b){try{var d="Hm_ck_"+ +new Date;mt.cookie.set(d,"is-cookie-enabled",{domain:a,path:b,O:r});var e="is-cookie-enabled"===mt.cookie.get(d)?"1":"0";mt.cookie.set(d,"",{domain:a,path:b,O:-1});return e}catch(f){return"0"}};mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.wa=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.K=function(a){return mt.lang.d(a,"String")};mt.lang.isArray=function(a){return mt.lang.d(a,"Array")};
mt.lang.g=function(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a};mt.lang.trim=function(a){return a.replace(/^\s+|\s+$/g,"")};mt.lang.J=function(a,b){var d=x;if(a==w||!mt.lang.d(a,"Array")||b===r)return d;if(Array.prototype.indexOf)d=-1!==a.indexOf(b);else for(var e=0;e<a.length;e++)if(a[e]===b){d=v;break}return d};mt.url={};mt.url.m=function(a,b){var d=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return d?d[3]:w};
mt.url.mc=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:w};mt.url.vb=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):w};mt.url.Q=function(a){return(a=mt.url.vb(a))?a.replace(/:\d+$/,""):a};mt.url.sa=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):w};
(function(){var a=mt.lang,b=mt.url;mt.f={};mt.f.pa=function(d){return document.getElementById(d)};mt.f.La=function(d){if(!d)return w;try{d=String(d);if(0===d.indexOf("!HMCQ!"))return d;if(0===d.indexOf("!HMCC!"))return document.querySelector(d.substring(6,d.length));for(var e=d.split(">"),a=document.body,b=e.length-1;0<=b;b--)if(-1<e[b].indexOf("#")){var g=e[b].split("#")[1];(a=document.getElementById(g))||(a=document.getElementById(decodeURIComponent(g)));e=e.splice(b+1,e.length-(b+1));break}for(d=
0;a&&d<e.length;){var m=String(e[d]).toLowerCase();if(!("html"===m||"body"===m)){var b=0,n=e[d].match(/\[(\d+)\]/i),g=[];if(n)b=n[1]-1,m=m.split("[")[0];else if(1!==a.childNodes.length){for(var q=0,t=0,u=a.childNodes.length;t<u;t++){var s=a.childNodes[t];1===s.nodeType&&s.nodeName.toLowerCase()===m&&q++;if(1<q)return w}if(1!==q)return w}for(q=0;q<a.childNodes.length;q++)1===a.childNodes[q].nodeType&&a.childNodes[q].nodeName.toLowerCase()===m&&g.push(a.childNodes[q]);if(!g[b])return w;a=g[b]}d++}return a}catch(k){return w}};
mt.f.sa=function(d,e){var a=[],b=[];if(!d)return b;for(;d.parentNode!=w;){for(var g=0,m=0,n=d.parentNode.childNodes.length,q=0;q<n;q++){var t=d.parentNode.childNodes[q];if(t.nodeName===d.nodeName&&(g++,t===d&&(m=g),0<m&&1<g))break}if((n=""!==d.id)&&e){a.unshift("#"+encodeURIComponent(d.id));break}else n&&(n="#"+encodeURIComponent(d.id),n=0<a.length?n+">"+a.join(">"):n,b.push(n)),a.unshift(encodeURIComponent(String(d.nodeName).toLowerCase())+(1<g?"["+m+"]":""));d=d.parentNode}b.push(a.join(">"));return b};
mt.f.zb=function(a){return(a=mt.f.sa(a,v))&&a.length?String(a[0]):""};mt.f.yb=function(a){return mt.f.sa(a,x)};mt.f.kc=function(a,e){for(e=e.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==e)return a;return w};mt.f.tb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.f.lc=function(a){var e={top:0,left:0};if(!a)return e;var b=mt.f.tb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(e=a.getBoundingClientRect());return{top:e.top+(window.pageYOffset||b.scrollTop)-
(b.clientTop||0),left:e.left+(window.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};mt.f.getAttribute=function(a,e){var b=a.getAttribute&&a.getAttribute(e)||w;if(!b&&a.attributes&&a.attributes.length)for(var l=a.attributes,g=l.length,m=0;m<g;m++)l[m].nodeName===e&&(b=l[m].nodeValue);return b};mt.f.Y=function(a){var e="document";a.tagName!==r&&(e=a.tagName);return e.toLowerCase()};mt.f.Bb=function(b){var e="";b.textContent?e=a.trim(b.textContent):b.innerText&&(e=a.trim(b.innerText));e&&(e=e.replace(/\s+/g,
" ").substring(0,255));return e};mt.f.qa=function(d,e){var f;a.K(d)&&0===String(d).indexOf("!HMCQ!")?(f=String(d),f=b.m(document.location.href,f.substring(6,f.length))):a.K(d)||(f=mt.f.Y(d),"input"===f&&e&&("button"===d.type||"submit"===d.type)?f=a.trim(d.value)||"":"input"===f&&!e&&"password"!==d.type?f=a.trim(d.value)||"":"img"===f?(f=mt.f.getAttribute,f=f(d,"alt")||f(d,"title")||f(d,"src")):f="body"===f||"html"===f?["(hm-default-content-for-",f,")"].join(""):mt.f.Bb(d));return String(f||"").substring(0,
255)};(function(){(mt.f.Ba=function(){function a(){if(!a.aa){a.aa=v;for(var e=0,b=l.length;e<b;e++)l[e]()}}function e(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(e,1);return}a()}var b=x,l=[],g;document.addEventListener?g=function(){document.removeEventListener("DOMContentLoaded",g,x);a()}:document.attachEvent&&(g=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",g),a())});(function(){if(!b)if(b=v,"complete"===document.readyState)a.aa=v;
else if(document.addEventListener)document.addEventListener("DOMContentLoaded",g,x),window.addEventListener("load",a,x);else if(document.attachEvent){document.attachEvent("onreadystatechange",g);window.attachEvent("onload",a);var l=x;try{l=window.frameElement==w}catch(n){}document.documentElement.doScroll&&l&&e()}})();return function(e){a.aa?e():l.push(e)}}()).aa=x})();return mt.f})();mt.event={};
mt.event.e=function(a,b,d){a.attachEvent?a.attachEvent("on"+b,function(e){d.call(a,e)}):a.addEventListener&&a.addEventListener(b,d,x)};mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=x};
(function(){var a=mt.event;mt.h={};mt.h.Qa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.h.wb=function(){if(document.documentMode)return document.documentMode;var a=/msie (\d+\.\d+)/i.exec(navigator.userAgent);return a?+a[1]||0:0};mt.h.cookieEnabled=navigator.cookieEnabled;mt.h.javaEnabled=navigator.javaEnabled();mt.h.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.h.Sb=(window.screen.width||0)+"x"+(window.screen.height||0);mt.h.colorDepth=
window.screen.colorDepth||0;mt.h.Z=function(){var a;a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.h.R=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.h.orientation=0;(function(){function b(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.h.orientation=
a}b();a.e(window,"orientationchange",b)})();return mt.h})();mt.o={};mt.o.parse=function(a){return(new Function("return ("+a+")"))()};
mt.o.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var e=d[a];if(e)return e;e=a.charCodeAt();return"\\u00"+Math.floor(e/16).toString(16)+(e%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(e){switch(typeof e){case "undefined":return"undefined";case "number":return isFinite(e)?String(e):"null";case "string":return a(e);case "boolean":return String(e);
default:if(e===w)return"null";if(e instanceof Array){var d=["["],l=e.length,g,m,n;for(m=0;m<l;m++)switch(n=e[m],typeof n){case "undefined":case "function":case "unknown":break;default:g&&d.push(","),d.push(mt.o.stringify(n)),g=1}d.push("]");return d.join("")}if(e instanceof Date)return'"'+e.getFullYear()+"-"+b(e.getMonth()+1)+"-"+b(e.getDate())+"T"+b(e.getHours())+":"+b(e.getMinutes())+":"+b(e.getSeconds())+'"';g=["{"];m=mt.o.stringify;for(l in e)if(Object.prototype.hasOwnProperty.call(e,l))switch(n=
e[l],typeof n){case "undefined":case "unknown":case "function":break;default:d&&g.push(","),d=1,g.push(m(l)+":"+m(n))}g.push("}");return g.join("")}}}();mt.localStorage={};mt.localStorage.ga=function(){if(!mt.localStorage.l)try{mt.localStorage.l=document.createElement("input"),mt.localStorage.l.type="hidden",mt.localStorage.l.style.display="none",mt.localStorage.l.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)}catch(a){return x}return v};
mt.localStorage.set=function(a,b,d){var e=new Date;e.setTime(e.getTime()+d||31536E6);try{window.localStorage?(b=e.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.ga()&&(mt.localStorage.l.expires=e.toUTCString(),mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.setAttribute(a,b),mt.localStorage.l.save(document.location.hostname))}catch(f){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),d=a.substring(0,b)-0;if(d&&d>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.ga())try{return mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.getAttribute(a)}catch(e){}return w};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.ga())try{mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.removeAttribute(a),mt.localStorage.l.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){try{window.sessionStorage&&window.sessionStorage.setItem(a,b)}catch(d){}};
mt.sessionStorage.get=function(a){try{return window.sessionStorage?window.sessionStorage.getItem(a):w}catch(b){return w}};mt.sessionStorage.remove=function(a){try{window.sessionStorage&&window.sessionStorage.removeItem(a)}catch(b){}};mt.Ya={};mt.Ya.log=function(a,b){var d=new Image,e="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[e]=d;d.onload=function(){d.onload=w;d=window[e]=w;b&&b(a)};d.src=a};mt.Ca={};
mt.Ca.Cb=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(d){}return a};
mt.Ca.jc=function(a,b,d,e,f){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+d+'" height="'+e+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(f||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+d+'" height="'+e+'" src="'+b+'" flashvars="'+(f||"")+'" allowscriptaccess="always" /></object>'};
(function(){function a(){for(var a=x,d=document.getElementsByTagName("script"),e=d.length,e=100<e?100:e,f=0;f<e;f++){var l=d[f].src;if(l&&0===l.indexOf("https://hm.baidu.com/h")){a=v;break}}return a}return h.qb=a})();var A=h.qb;
h.r={nc:"http://tongji.baidu.com/hm-web/welcome/ico",Va:"hm.baidu.com/hm.gif",fb:/^(tongji|hmcdn).baidu.com$/,$a:"tongji.baidu.com",Gb:"hmmd",Hb:"hmpl",dc:"utm_medium",Fb:"hmkw",fc:"utm_term",Db:"hmci",bc:"utm_content",Ib:"hmsr",ec:"utm_source",Eb:"hmcu",ac:"utm_campaign",L:0,H:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",xa:A()||"https:"===document.location.protocol?"https:":"http:",oc:0,hc:6E5,Ob:6E5,pc:5E3,ic:5,la:1024,gc:1,ca:2147483647,Za:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn p ct u tt hh".split(" "),
S:v,Ia:["a","input","button"],hb:{id:"data-hm-id",ka:"data-hm-class",Fa:"data-hm-xpath",content:"data-hm-content",Da:"data-hm-tag",link:"data-hm-link"},Ha:"data-hm-enabled",Ga:"data-hm-disabled",Pb:"https://hmcdn.baidu.com/static/tongji/plugins/",Ua:["UrlChangeTracker"]};(function(){var a={D:{},e:function(a,d){this.D[a]=this.D[a]||[];this.D[a].push(d)},I:function(a,d){this.D[a]=this.D[a]||[];for(var e=this.D[a].length,f=0;f<e;f++)this.D[a][f](d)}};return h.z=a})();
(function(){function a(a,e){var f=document.createElement("script");f.charset="utf-8";b.d(e,"Function")&&(f.readyState?f.onreadystatechange=function(){if("loaded"===f.readyState||"complete"===f.readyState)f.onreadystatechange=w,e()}:f.onload=function(){e()});f.src=a;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(f,l)}var b=mt.lang;return h.load=a})();
(function(){function a(){var a="";if(h.c.b.nv){a=encodeURIComponent(document.referrer);try{window.sessionStorage?d.set("Hm_from_"+c.id,a):b.set("Hm_from_"+c.id,a,864E5)}catch(f){}}else try{a=(window.sessionStorage?d.get("Hm_from_"+c.id):b.get("Hm_from_"+c.id))||""}catch(l){}return a}var b=mt.localStorage,d=mt.sessionStorage;return h.rb=a})();
(function(){var a=mt.cookie,b=mt.localStorage,d=mt.sessionStorage,e={getData:function(e){try{return a.get(e)||d.get(e)||b.get(e)}catch(l){}},setData:function(f,l,g){try{a.set(f,l,{domain:e.P(),path:e.X(),O:g}),g?b.set(f,l,g):d.set(f,l)}catch(m){}},Rb:function(f){try{a.set(f,"",{domain:e.P(),path:e.X(),O:-1}),d.remove(f),b.remove(f)}catch(l){}},T:function(a,e){a="."+a.replace(/:\d+/,"");e="."+e.replace(/:\d+/,"");var b=a.indexOf(e);return-1<b&&b+e.length===a.length},ba:function(a,e){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(e)},P:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(e.T(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},X:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&e.ba(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,"$1")+"/"}return"/"}};return h.ma=e})();
(function(){var a=mt.lang,b=mt.o,d=h.ma,e={pageview:{},session:{},autoEventTracking:{},customEvent:{},user:{}},f={user:1,session:2,pageview:3,autoEventTracking:3,customEvent:3,others:3},l=["session","user"],g="Hm_up_"+c.id,m={init:function(){m.Lb()},Lb:function(){try{var n=b.parse(decodeURIComponent(d.getData(g)));a.d(n,"Object")&&(e.user=n)}catch(f){}},A:function(a){var b={};e[a]!==r&&(b=e[a]);a=this.ta();for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);return a},ta:function(){for(var a={},b,d=l.length-
1;0<=d;d--){b=e[l[d]];for(var f in b)b.hasOwnProperty(f)&&(a[f]=b[f])}return a},setProperty:function(d,f,g){var l=e[d];if(a.d(l,"Object")&&a.d(f,"Object")){for(var s in f)if(f.hasOwnProperty(s)){var k=a.g(String(s));if(g||!((/^_/.test(k)||/_$/.test(k))&&"_iden"!==k)){var p=f[s];if(p==w)delete l[k];else{if(a.d(p,"Object")||a.d(p,"Array"))p=b.stringify(p);p=a.g(String(p));m.Mb(d,k,p)&&(l[k]={value:p,scope:m.Na(d)})}}}"user"===d&&m.za()}},s:function(b){b!==r&&("userId"===b&&a.d(e.user,"Object")?(delete e.user.uid_,
m.za()):"user"===b&&a.d(e.user,"Object")?(b=e.user.uid_,e.user=b===r?{}:{uid_:b},m.za()):e[b]!==r&&(e[b]={}))},za:function(){try{d.setData(g,encodeURIComponent(b.stringify(e.user)),c.age)}catch(a){}},Mb:function(a,b,d){var f=v,g=e[a];if(256<encodeURIComponent(String(b)).length||256<encodeURIComponent(String(d)).length)f=x;else{var k=g[b];g[b]={value:d,scope:m.Na(a)};a=m.M(m.A(a));2048<encodeURIComponent(a).length&&(k!==r?g[b]=k:delete g[b],f=x)}return f},M:function(a){var e=[],b,d;for(d in a)a.hasOwnProperty(d)&&
(b=[d,a[d].value],(1===a[d].scope||2===a[d].scope)&&b.push(a[d].scope),e.push(b.join("*")));return e.join("!")},Na:function(a){a=f[a];return a!==r?a:f.others}};return h.N=m})();
(function(){var a=mt.f,b=mt.lang,d=mt.o,e=h.z,f=h.N,l=f.M;if(b.isArray(c.cptrk)&&0<c.cptrk.length){var g={Ta:{},ea:{},init:function(){for(var a,e=0;e<c.cptrk.length;e++)try{if(a=d.parse(decodeURIComponent(String(c.cptrk[e]))),a.a!==r&&b.d(a.a,"Object")){var f=a.a,l;for(l in f)f.hasOwnProperty(l)&&(g.ea[l]=String(f[l]))}}catch(u){}},Sa:function(){var e,b,d;for(d in g.ea)if(g.ea.hasOwnProperty(d)&&g.Ta[d]===r&&(e=g.ea[d],e=a.La(e)))b=b===r?{}:b,b[d]=a.qa(e,x),g.Ta[d]=v;return b},ua:function(){var a=
g.Sa();a&&g.Ub(a)},Kb:function(){"MutationObserver"in window?(new MutationObserver(g.ua)).observe(document.body,{childList:v,subtree:v}):window.setInterval(g.ua,15E3)},Ub:function(a){if(b.d(a,"Object")){f.setProperty("pageview",a);a=h.c.b.p;var e=h.c.b.ep;h.c.b.et=9;h.c.b.ep="";h.c.b.p=l(f.A("pageview"));h.c.i();h.c.b.p=a;h.c.b.ep=e;f.s("pageview")}}};g.init();e.e("pv-b",function(){var a=g.Sa();a&&f.setProperty("pageview",a)});g.Kb();a.Ba(g.ua)}})();
(function(){var a=mt.lang,b=mt.f,d={W:function(a,f){return function(l){var g=l.target||l.srcElement;if(g){var m=g.getAttribute(a.fa);l=l.clientX+":"+l.clientY;if(m&&m===l)g.removeAttribute(a.fa);else if(f&&0<f.length&&(g=b.yb(g))&&g.length)if(m=g.length,l=g[g.length-1],1E4>m*l.split(">").length)for(l=0;l<m;l++)d.Xa(a,g[l]);else d.Xa(a,l)}}},Xa:function(e,b){for(var d={},g=String(b).split(">").length,m=0;m<g;m++)d[b]="",b=b.substring(0,b.lastIndexOf(">"));e&&(a.d(e,"Object")&&e.Ja)&&e.Ja(d)},Qb:function(a,
b){return function(d){(d.target||d.srcElement).setAttribute(a.fa,d.clientX+":"+d.clientY);a&&a.w&&(b?a.w(b):a.w("#"+encodeURIComponent(this.id),d.type))}}};return h.oa=d})();
(function(){var a=mt.f,b=mt.o,d=mt.event,e=mt.lang,f=h.oa,l=h.N,g=l.M,m={fa:"HM_ce",ab:function(){if(c.cetrk&&c.cetrk.length){d.e(document,"click",f.W(m,c.cetrk));for(var e=0,g=c.cetrk.length;e<g;e++){var l;try{l=b.parse(decodeURIComponent(String(c.cetrk[e])))}catch(u){l={}}var s=l.p||"";-1===s.indexOf(">")&&(0===s.indexOf("#")&&(s=s.substring(1)),(s=a.pa(s))&&d.e(s,"click",f.Qb(m,l)))}}},Ja:function(a){if(c.cetrk&&c.cetrk.length)for(var e=0,d=c.cetrk.length;e<d;e++){var f;try{f=b.parse(decodeURIComponent(String(c.cetrk[e])))}catch(g){f=
{}}a.hasOwnProperty(f.p)&&m.w(f)}},w:function(b){h.c.b.et=7;var d=b&&b.k||"",d=e.g(d),f={};if(b&&b.a&&e.d(b.a,"Object"))for(var m in b.a)if(b.a.hasOwnProperty(m)){var s=a.La(b.a[m]||""),s=s?a.qa(s,x):"";f[m]=s}f._iden=d;l.setProperty("customEvent",f);h.c.b.ep="";h.c.b.p=g(l.A("customEvent"));h.c.i();h.c.b.p="";l.s("customEvent")}};h.z.e("pv-b",m.ab);return m})();
(function(){var a=mt.lang,b=mt.f,d=mt.event,e=mt.h,f=h.r,l=h.z,g=h.N,m=g.M,n=+new Date,q=[],t={W:function(){return function(e){if(h.c&&h.c.S&&c.aet&&c.aet.length){var d=e.target||e.srcElement;if(d){var g=h.c.Ia,p=b.getAttribute(d,f.Ha)!=w?v:x;if(b.getAttribute(d,f.Ga)==w)if(p)t.ha(t.ra(d,e));else{var z=b.Y(d);if(a.J(g,"*")||a.J(g,z))t.ha(t.ra(d,e));else for(;d.parentNode!=w;){var p=d.parentNode,z=b.Y(p),y="a"===z&&a.J(g,"a")?v:x,z="button"===z&&a.J(g,"button")?v:x,G=b.getAttribute(p,f.Ha)!=w?v:x;
if(b.getAttribute(p,f.Ga)==w&&(y||z||G)){t.ha(t.ra(p,e));break}d=d.parentNode}}}}}},ra:function(d,g){var k={},p=f.hb;k.id=b.getAttribute(d,p.id)||b.getAttribute(d,"id")||"";k.ka=b.getAttribute(d,p.ka)||b.getAttribute(d,"class")||"";k.Fa=b.getAttribute(d,p.Fa)||b.zb(d);k.content=b.getAttribute(d,p.content)||b.qa(d,v);k.Da=b.getAttribute(d,p.Da)||b.Y(d);k.link=b.getAttribute(d,p.link)||b.getAttribute(d,"href")||"";k.type=g.type||"click";p=a.wa(d.offsetTop)?d.offsetTop:0;"click"===g.type?p=e.Qa?g.clientY+
Math.max(document.documentElement.scrollTop,document.body.scrollTop):g.pageY:"touchend"===g.type&&(g.ya&&a.d(g.ya.changedTouches,"Array")&&g.ya.changedTouches.length)&&(p=g.ya.changedTouches[0].pageY);k.$b=p;return k},ha:function(b){var e=a.g;b=[+new Date-(h.c.F!==r?h.c.F:n),e(b.id),e(b.ka),e(b.Da),e(b.Fa),e(b.link),e(b.content),b.type,b.$b].join("*");t.ia(b);a.d(this.V(),"Function")&&this.V()()},ia:function(a){a.length>f.la||(encodeURIComponent(q.join("!")+a).length>f.la&&(t.w(q.join("!")),q=[]),
q.push(a))},w:function(a){h.c.b.et=5;h.c.b.ep=a;h.c.b.p=m(g.A("autoEventTracking"));h.c.i();h.c.b.p=""},V:function(){return function(){q&&q.length&&(t.w(q.join("!")),q=[])}}};a.K(c.aet)&&""!==c.aet&&l.e("pv-b",function(){d.e(document,"click",t.W());"ontouchend"in document&&d.e(window,"touchend",t.W());d.e(window,"unload",t.V())});return t})();
(function(){var a=mt.event,b=mt.h,d=h.r,e=h.z,f=+new Date,l=[],g=w,m={nb:function(){return function(){h.c&&(h.c.S&&c.aet&&c.aet.length)&&(window.clearTimeout(g),g=window.setTimeout(function(){m.cb(b.Z()+b.R())},150))}},cb:function(a){m.ia([+new Date-(h.c.F!==r?h.c.F:f),a].join("*"))},ia:function(a){if(encodeURIComponent(l.join("!")+a).length>d.la||3<l.length)m.w(l.join("!")),l=[];l.push(a)},w:function(a){h.c.b.et=6;h.c.b.vh=b.R();h.c.b.ep=a;h.c.i()},V:function(){return function(){l&&l.length&&(m.w(l.join("!")),
l=[])}}};mt.lang.K(c.aet)&&""!==c.aet&&e.e("pv-b",function(){a.e(window,"scroll",m.nb());a.e(window,"unload",m.V())});return m})();
(function(){var a=mt.f,b=h.r,d=h.load,e=h.rb;h.z.e("pv-b",function(){var f=b.protocol+"//crs.baidu.com/";c.rec&&a.Ba(function(){for(var l=0,g=c.rp.length;l<g;l++){var m=c.rp[l][0],n=c.rp[l][1],q=a.pa("hm_t_"+m);if(n&&!(2==n&&!q||q&&""!==q.innerHTML))q="",q=Math.round(Math.random()*b.ca),q=4==n?f+"hl.js?"+["siteId="+c.id,"planId="+m,"rnd="+q].join("&"):f+"t.js?"+["siteId="+c.id,"planId="+m,"from="+e(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
q].join("&"),d(q)}})})})();
(function(){function a(){return function(){h.c.b.nv=0;h.c.b.st=4;h.c.b.et=3;h.c.b.ep=h.na.xb()+","+h.na.ub();h.c.i()}}function b(){clearTimeout(y);var a;p&&(a="visible"==document[p]);z&&(a=!document[z]);m="undefined"==typeof a?v:a;if((!g||!n)&&m&&q)k=v,u=+new Date;else if(g&&n&&(!m||!q))k=x,s+=+new Date-u;g=m;n=q;y=setTimeout(b,100)}function d(a){var p=document,b="";if(a in p)b=a;else for(var e=["webkit","ms","moz","o"],d=0;d<e.length;d++){var y=e[d]+a.charAt(0).toUpperCase()+a.slice(1);if(y in p){b=
y;break}}return b}function e(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))q="focus"==a.type||"focusin"==a.type?v:x,b()}var f=mt.event,l=h.z,g=v,m=v,n=v,q=v,t=+new Date,u=t,s=0,k=v,p=d("visibilityState"),z=d("hidden"),y;b();(function(){var a=p.replace(/[vV]isibilityState/,"visibilitychange");f.e(document,a,b);f.e(window,"pageshow",b);f.e(window,"pagehide",b);"object"==typeof document.onfocusin?(f.e(document,"focusin",e),f.e(document,"focusout",e)):(f.e(window,"focus",e),
f.e(window,"blur",e))})();h.na={xb:function(){return+new Date-t},ub:function(){return k?+new Date-u+s:s}};l.e("pv-b",function(){f.e(window,"unload",a())});l.e("duration-send",a());l.e("duration-done",function(){u=t=+new Date;s=0});return h.na})();
(function(){var a=mt.lang,b=h.r,d=h.load,e={Jb:function(e){if((window._dxt===r||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.c){var l=h.c.P();d([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),e)}},Zb:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.lb=e})();
(function(){function a(a,b,e,d){if(!(a===r||b===r||d===r)){if(""===a)return[b,e,d].join("*");a=String(a).split("!");for(var g,f=x,k=0;k<a.length;k++)if(g=a[k].split("*"),String(b)===g[0]){g[1]=e;g[2]=d;a[k]=g.join("*");f=v;break}f||a.push([b,e,d].join("*"));return a.join("!")}}function b(a){for(var d in a)if({}.hasOwnProperty.call(a,d)){var y=a[d];e.d(y,"Object")||e.d(y,"Array")?b(y):a[d]=String(y)}}var d=mt.url,e=mt.lang,f=mt.o,l=mt.h,g=h.r,m=h.z,n=h.lb,q=h.load,t=h.ma,u=h.N,s=u.M,k={U:[],da:0,Ra:x,
C:{Ea:"",page:""},init:function(){k.j=0;u.init();m.e("pv-b",function(){k.mb();k.ob()});m.e("pv-d",function(){k.pb();k.C.page=""});m.e("stag-b",function(){h.c.b.api=k.j||k.da?k.j+"_"+k.da:"";h.c.b.ct=[decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),k.C.Ea,k.C.page].join("!")});m.e("stag-d",function(){h.c.b.api=0;k.j=0;k.da=0})},mb:function(){var a=window._hmt||[];if(!a||e.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var p=arguments[b];
e.d(p,"Array")&&(a.cmd[a.id].push(p),"_setAccount"===p[0]&&(1<p.length&&/^[0-9a-f]{32}$/.test(p[1]))&&(p=p[1],a.id=p,a.cmd[p]=a.cmd[p]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},ob:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],e=/^_track(Event|MobConv|Order|RTEvent)$/,d=0,g=b.length;d<g;d++){var f=b[d];e.test(f[0])?k.U.push(f):k.Aa(f)}a.cmd[c.id]={push:k.Aa}},pb:function(){if(0<k.U.length)for(var a=0,b=k.U.length;a<b;a++)k.Aa(k.U[a]);k.U=
w},Aa:function(a){var b=a[0];if(k.hasOwnProperty(b)&&e.d(k[b],"Function"))k[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(k.j|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],x===a||v===a))k.j|=2,h.c.Oa=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){k.j|=4;h.c.b.sn=h.c.Ma();h.c.b.et=0;h.c.b.ep="";h.c.b.vl=l.Z()+l.R();h.c.b.kb=0;h.c.va?(h.c.b.nv=0,h.c.b.st=4):h.c.va=v;var b=h.c.b.u,e=h.c.b.su;h.c.b.u=g.protocol+"//"+document.location.host+
a[1];k.Ra||(h.c.b.su=document.location.href);h.c.b.p=s(u.A("pageview"));h.c.i();h.c.b.u=b;h.c.b.su=e;h.c.b.p="";h.c.F=+new Date;u.s("pageview")}},_trackEvent:function(a){2<a.length&&(k.j|=8,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=4,h.c.b.ep=e.g(a[1])+"*"+e.g(a[2])+(a[3]?"*"+e.g(a[3]):"")+(a[4]?"*"+e.g(a[4]):""),h.c.b.p=s(u.ta()),h.c.i(),h.c.b.p="")},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],d=a[4]||3;if(0<b&&6>b&&0<d&&4>d){k.da++;for(var g=(h.c.b.cv||"*").split("!"),f=g.length;f<b-1;f++)g.push("*");
g[b-1]=d+"*"+e.g(a[2])+"*"+e.g(a[3]);h.c.b.cv=g.join("!");a=h.c.b.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?t.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):t.Rb("Hm_cv_"+c.id)}}},_setUserTag:function(b){if(!(3>b.length)){var d=e.g(b[1]);b=e.g(b[2]);if(d!==r&&b!==r){var y=decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),y=a(y,d,1,b);t.setData("Hm_ct_"+c.id,encodeURIComponent(y),c.age)}}},_setVisitTag:function(b){if(!(3>b.length)){var d=e.g(b[1]);b=e.g(b[2]);if(d!==
r&&b!==r){var y=k.C.Ea,y=a(y,d,2,b);k.C.Ea=y}}},_setPageTag:function(b){if(!(3>b.length)){var d=e.g(b[1]);b=e.g(b[2]);if(d!==r&&b!==r){var y=k.C.page,y=a(y,d,3,b);k.C.page=y}}},_setReferrerOverride:function(a){1<a.length&&(h.c.b.su=a[1].charAt&&"/"===a[1].charAt(0)?g.protocol+"//"+window.location.host+a[1]:a[1],k.Ra=v)},_trackOrder:function(a){a=a[1];e.d(a,"Object")&&(b(a),k.j|=16,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=94,h.c.b.ep=f.stringify(a),h.c.b.p=s(u.ta()),h.c.i(),h.c.b.p="")},_trackMobConv:function(a){if(a=
{webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])k.j|=32,h.c.b.et=93,h.c.b.ep=a,h.c.i()},_setDataxId:function(a){a=a[1];n.Jb();n.Zb(a)},_setUserId:function(a){a=a[1];if(a!==r&&(e.K(a)||e.wa(a))){var b=u.A("user").uid_;if(!(b&&b.value===e.g(String(a)))){var b=h.c.b.p,d=h.c.b.ep;h.c.b.et=8;h.c.b.ep="";h.c.b.p="uid_*"+e.g(String(a));h.c.i();var g={};g.uid_=a;u.setProperty("user",g,v);h.c.b.p=b;h.c.b.ep=d}}},_clearUserId:function(a){1<a.length&&v===a[1]&&u.s("userId")},_setUserProperty:function(a){a=
a[1];e.d(a,"Object")&&u.setProperty("user",a)},_clearUserProperty:function(a){1<a.length&&v===a[1]&&u.s("user")},_setSessionProperty:function(a){a=a[1];e.d(a,"Object")&&u.setProperty("session",a)},_clearSessionProperty:function(a){1<a.length&&v===a[1]&&u.s("session")},_setPageviewProperty:function(a){a=a[1];e.d(a,"Object")&&u.setProperty("pageview",a)},_clearPageviewProperty:function(a){1<a.length&&v===a[1]&&u.s("pageview")},_setAutoEventTrackingProperty:function(a){a=a[1];e.d(a,"Object")&&u.setProperty("autoEventTracking",
a)},_clearAutoEventTrackingProperty:function(a){1<a.length&&v===a[1]&&u.s("autoEventTracking")},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],x===a||v===a))h.c.Pa=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],x===a||v===a))h.c.S=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.c.b.et=3,h.c.b.ep=a,h.c.i())):m.I("duration-send");m.I("duration-done")},_require:function(a){1<a.length&&(a=a[1],g.fb.test(d.Q(a))&&q(a))},_providePlugin:function(a){if(1<
a.length){var b=window._hmt,d=a[1];a=a[2];if(e.J(g.Ua,d)&&e.d(a,"Function")&&(b.plugins=b.plugins||{},b.G=b.G||{},b.plugins[d]=a,b.B=b.B||[],a=b.B.slice(),d&&a.length&&a[0][1]===d))for(var f=0,k=a.length;f<k;f++){var l=a[f][2]||{};if(b.plugins[d]&&!b.G[d])b.G[d]=new b.plugins[d](l),b.B.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,d=a[1],f=a[2]||{};if(e.J(g.Ua,d))if(b.plugins=b.plugins||{},b.G=b.G||{},b.plugins[d]&&!b.G[d])b.G[d]=new b.plugins[d](f);else{b.B=b.B||
[];for(var f=0,l=b.B.length;f<l;f++)if(b.B[f][1]===d)return;b.B.push(a);k._require([w,g.Pb+d+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=a[1];a=a[2];e.d(a,"Object")&&(a._iden=b,u.setProperty("customEvent",a));h.c.b.et=7;h.c.b.ep="";h.c.b.p=s(u.A("customEvent"));h.c.i();h.c.b.p="";u.s("customEvent")}}};k.init();h.gb=k;return h.gb})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=v,this.b={},this.Pa=this.Oa=v,this.S=k.S,this.Ia=f.K(c.aet)&&0<c.aet.length?c.aet.split(","):"",this.va=x,this.init())}var b=mt.url,d=mt.Ya,e=mt.Ca,f=mt.lang,l=mt.cookie,g=mt.h,m=mt.sessionStorage,n=mt.o,q=mt.event,t=h.ma,u=h.N,s=u.M,k=h.r,p=h.load,z=h.z;a.prototype={T:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},ba:function(a,
b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},$:function(a){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.ba(a,c.dm[d]))return v}else{var e=b.Q(a);if(e&&this.T(e,c.dm[d]))return v}return x},P:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.T(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},X:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.ba(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,
"$1")+"/"}return"/"},Ab:function(){if(!document.referrer)return k.H-k.L>c.vdur?1:4;var a=x;this.$(document.referrer)&&this.$(document.location.href)?a=v:(a=b.Q(document.referrer),a=this.T(a||"",document.location.hostname));return a?k.H-k.L>c.vdur?1:4:3},Xb:function(){var a,b,d,e,g;k.L=t.getData("Hm_lpvt_"+c.id)||0;13===k.L.length&&(k.L=Math.round(k.L/1E3));b=this.Ab();a=4!==b?1:0;if(d=t.getData("Hm_lvt_"+c.id)){e=d.split(",");for(g=e.length-1;0<=g;g--)13===e[g].length&&(e[g]=""+Math.round(e[g]/1E3));
for(;2592E3<k.H-e[0];)e.shift();g=4>e.length?2:3;for(1===a&&e.push(k.H);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=k.H,e="",g=1;t.setData("Hm_lvt_"+c.id,d,c.age);t.setData("Hm_lpvt_"+c.id,k.H);d=l.Nb(this.P(),this.X());if(0===c.nv&&this.$(document.location.href)&&(""===document.referrer||this.$(document.referrer)))a=0,b=4;this.b.nv=a;this.b.st=b;this.b.cc=d;this.b.lt=e;this.b.lv=g},Wb:function(){for(var a=[],b=this.b.et,d=+new Date,e=0,g=k.Za.length;e<g;e++){var f=k.Za[e],l=this.b[f];
"undefined"!==typeof l&&""!==l&&("tt"!==f||"tt"===f&&0===b)&&(("ct"!==f||"ct"===f&&0===b)&&("kb"!==f||"kb"===f&&3===b))&&a.push(f+"="+encodeURIComponent(l))}switch(b){case 0:this.b.rt&&a.push("rt="+encodeURIComponent(this.b.rt));break;case 5:a.push("_lpt="+this.F);a.push("_ct="+d);break;case 6:a.push("_lpt="+this.F);a.push("_ct="+d);break;case 90:this.b.rt&&a.push("rt="+this.b.rt)}return a.join("&")},Yb:function(){this.Xb();this.b.si=c.id;this.b.sn=this.Ma();this.b.su=document.referrer;this.b.hh=
window.location.hash;this.b.ds=g.Sb;this.b.cl=g.colorDepth+"-bit";this.b.ln=String(g.language).toLowerCase();this.b.ja=g.javaEnabled?1:0;this.b.ck=g.cookieEnabled?1:0;this.b.lo="number"===typeof _bdhm_top?1:0;this.b.fl=e.Cb();this.b.v="1.2.63";this.b.cv=decodeURIComponent(t.getData("Hm_cv_"+c.id)||"");this.b.tt=document.title||"";this.b.vl=g.Z()+g.R();var a=document.location.href;this.b.cm=b.m(a,k.Gb)||"";this.b.cp=b.m(a,k.Hb)||b.m(a,k.dc)||"";this.b.cw=b.m(a,k.Fb)||b.m(a,k.fc)||"";this.b.ci=b.m(a,
k.Db)||b.m(a,k.bc)||"";this.b.cf=b.m(a,k.Ib)||b.m(a,k.ec)||"";this.b.cu=b.m(a,k.Eb)||b.m(a,k.ac)||""},init:function(){try{this.Yb(),0===this.b.nv?this.Vb():this.Ka(),h.c=this,this.jb(),this.ib(),z.I("pv-b"),this.Tb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));d.log(k.xa+"//"+k.Va+"?"+b.join("&"))}},Tb:function(){function a(){z.I("pv-d")}this.Oa?(this.va=v,this.b.et=0,this.b.ep=
"",this.b.p=s(u.A("pageview")),this.b.vl=g.Z()+g.R(),this.i(a),this.b.p=""):a();this.F=+new Date;u.s("pageview")},i:function(a){if(this.Pa){var b=this;b.b.rnd=Math.round(Math.random()*k.ca);z.I("stag-b");var e=k.xa+"//"+k.Va+"?"+b.Wb();z.I("stag-d");b.eb(e);d.log(e,function(d){b.Wa(d);f.d(a,"Function")&&a.call(b)})}},jb:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),e=b.Q(document.referrer)===k.$a?1:0,g=b.m(a,"jn"),f=/^heatlink$|^select$|^pageclick$/.test(g);a&&(d.test(a)&&e&&
f)&&(this.b.rnd=Math.round(Math.random()*k.ca),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",k.protocol+"//"+c.js+g+".js?"+this.b.rnd),g=document.getElementsByTagName("script")[0],g.parentNode.insertBefore(a,g))},ib:function(){if(window.postMessage&&window.self!==window.parent){var a=this;q.e(window,"message",function(d){if(b.Q(d.origin)===k.$a){d=d.data||{};var e=d.jn||"",g=/^customevent$/.test(e);if(RegExp(c.id).test(d.sd||
"")&&g)a.b.rnd=Math.round(Math.random()*k.ca),p(k.protocol+"//"+c.js+e+".js?"+a.b.rnd)}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}},eb:function(a){var b;try{b=n.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}var e=this.b.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);m.set("Hm_unsent_"+c.id,n.stringify(b))},Wa:function(a){var b;try{b=n.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=
a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?m.set("Hm_unsent_"+c.id,n.stringify(b)):this.Ka()}},Ka:function(){m.remove("Hm_unsent_"+c.id)},Vb:function(){var a=this,b;try{b=n.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(e){b=[]}if(b.length)for(var g=function(b){d.log(k.xa+"//"+b,function(b){a.Wa(b)})},f=0;f<b.length;f++)g(b[f])},Ma:function(){return Math.round(+new Date/1E3)%65535}};return new a})();
var B=h.r,C=h.load;if(c.apps){var D=[B.protocol,"//ers.baidu.com/app/s.js?"];D.push(c.apps);C(D.join(""))}(function(){var a=mt.event,b=mt.lang,d=h.r;if(c.kbtrk&&"undefined"!==typeof h.c){h.c.b.kb=b.wa(h.c.b.kb)?h.c.b.kb:0;var e=function(){h.c.b.et=85;h.c.b.ep=h.c.b.kb;h.c.i()};a.e(document,"keyup",function(){h.c.b.kb++});a.e(window,"unload",function(){e()});setInterval(e,d.Ob)}})();var E=h.r,F=h.load;c.pt&&F([E.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
var H=h.r,I=h.load;c.lxb&&I([H.protocol,"//lxbjs.baidu.com/lxb.js?sid=",c.lxb].join(""));var J=h.load,K=h.r.protocol;if(c.qiao){for(var L=[K+"//goutong.baidu.com/site/"],M=c.id,N=5381,O=M.length,P=0;P<O;P++)N=(33*N+Number(M.charCodeAt(P)))%4294967296;2147483648<N&&(N-=2147483648);L.push(N%1E3+"/");L.push(c.id+"/b.js");L.push("?siteId="+c.qiao);J(L.join(""))}
(function(){var a=mt.h,b=mt.lang,d=mt.event,e=mt.o;if("undefined"!==typeof h.c&&(c.med||(!a.Qa||7<a.wb())&&c.cvcc)){var f,l,g,m,n=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},q=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===x)return x},t=function(a,d){var k={};k.n=f;k.t="clk";k.v=a;if(d){var l=d.getAttribute("href"),m=d.getAttribute("onclick")?""+d.getAttribute("onclick"):w,n=d.getAttribute("id")||"";g.test(l)?(k.sn=
"mediate",k.snv=l):b.d(m,"String")&&g.test(m)&&(k.sn="wrap",k.snv=m);k.id=n}h.c.b.et=86;h.c.b.ep=e.stringify(k);h.c.i();for(k=+new Date;400>=+new Date-k;);};if(c.med)l="/zoosnet",f="swt",g=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,m={click:function(){for(var a=[],b=n(document.getElementsByTagName("a")),b=[].concat.apply(b,n(document.getElementsByTagName("area"))),b=[].concat.apply(b,n(document.getElementsByTagName("img"))),d,e,f=0,k=b.length;f<k;f++)d=b[f],e=
d.getAttribute("onclick"),d=d.getAttribute("href"),(g.test(e)||g.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){l="/other-comm";f="other";g=c.cvcc.q||r;var u=c.cvcc.id||r;m={click:function(){for(var a=[],b=n(document.getElementsByTagName("a")),b=[].concat.apply(b,n(document.getElementsByTagName("area"))),b=[].concat.apply(b,n(document.getElementsByTagName("img"))),d,e,f,k=0,l=b.length;k<l;k++)d=b[k],g!==r?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),u?(d=d.getAttribute("id"),(g.test(e)||
g.test(f)||u.test(d))&&a.push(b[k])):(g.test(e)||g.test(f))&&a.push(b[k])):u!==r&&(d=d.getAttribute("id"),u.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof m&&"undefined"!==typeof g){var s;l+=/\/$/.test(l)?"":"/";var k=function(a,d){if(s===d)return t(l+a,d),x;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,g=d.length;e<g;e++)if(s===d[e])return t(l+a+"/"+(e+1),d[e]),x};d.e(document,"mousedown",function(a){a=a||window.event;s=a.target||a.srcElement;var d={};for(q(m,function(a,e){d[a]=b.d(e,
"Function")?e():document.getElementById(e)});s&&s!==document&&q(d,k)!==x;)s=s.parentNode})}}})();(function(){var a=mt.f,b=mt.lang,d=mt.event,e=mt.o;if("undefined"!==typeof h.c&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var f={bb:function(){for(var b=c.cvcf.length,e,m=0;m<b;m++)(e=a.pa(decodeURIComponent(c.cvcf[m])))&&d.e(e,"click",f.oa())},oa:function(){return function(){h.c.b.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.c.b.ep=e.stringify(a);h.c.i()}}};a.Ba(function(){f.bb()})}})();
(function(){var a=mt.event,b=mt.o;if(c.med&&"undefined"!==typeof h.c){var d={n:"anti",sb:0,kb:0,clk:0},e=function(){h.c.b.et=86;h.c.b.ep=b.stringify(d);h.c.i()};a.e(document,"click",function(){d.clk++});a.e(document,"keyup",function(){d.kb=1});a.e(window,"scroll",function(){d.sb++});a.e(window,"load",function(){setTimeout(e,5E3)})}})();c.spa!==r&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]));})();
