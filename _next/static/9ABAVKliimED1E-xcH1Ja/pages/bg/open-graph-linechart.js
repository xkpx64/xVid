(window.webpackJsonp=window.webpackJsonp||[]).push([[24,46],{"/a9y":function(e,t,r){"use strict";var n=r("lwsE"),a=r("W8MJ"),o=r("a1gu"),i=r("Nsbk"),c=r("7W2i");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var s=r("TqRt");t.__esModule=!0,t.default=void 0;var l=s(r("q1tI")),f=s(r("8Kt/")),p={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function d(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var v=function(e){c(s,e);var t,r=(t=s,function(){var e,r=i(t);if(u()){var n=i(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return o(this,e)});function s(){return n(this,s),r.apply(this,arguments)}return a(s,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||p[e]||"An unexpected error has occurred";return l.default.createElement("div",{style:g.error},l.default.createElement(f.default,null,l.default.createElement("title",null,e,": ",t)),l.default.createElement("div",null,l.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?l.default.createElement("h1",{style:g.h1},e):null,l.default.createElement("div",{style:g.desc},l.default.createElement("h2",{style:g.h2},t,"."))))}}]),s}(l.default.Component);t.default=v,v.displayName="ErrorPage",v.getInitialProps=d,v.origGetInitialProps=d;var g={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"5TBX":function(e){e.exports=JSON.parse('{"navigation":{"home":"\u041d\u0430\u0447\u0430\u043b\u043e","map":"\u0420\u0430\u0437\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435","what-we-know":"\u041a\u0430\u043a\u0432\u043e \u0437\u043d\u0430\u0435\u043c","why-stay-home":"\u0417\u0430\u0449\u043e \u0434\u0430 \u043e\u0441\u0442\u0430\u043d\u0435\u043c \u0432\u043a\u044a\u0449\u0438","about":"\u0417\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430","facebook":"Facebook \u0433\u0440\u0443\u043f\u0430"},"date_format":"DD.MM.YYYY \u0433. \u0432 HH:mm \u0447.","footer":{"disclaimer":"\u0422\u043e\u0437\u0438 \u0443\u0435\u0431\u0441\u0430\u0439\u0442 \u043d\u0435 \u0435 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u0435\u043d \u0438\u0437\u0442\u043e\u0447\u043d\u0438\u043a \u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f. \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0443\u0432\u0430\u043d\u0430 \u0442\u0443\u043a \u0435 \u0441 \u0438\u0437\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u0441\u043a\u0438 \u0445\u0430\u0440\u0430\u043a\u0435\u0440.","privacy":"\u041f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442"}}')},"6/8+":function(e){e.exports=JSON.parse('{"page_title":"\u041d\u0430\u0447\u0430\u043b\u043e","seo":{"title":"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u0435\u043d \u0443\u0435\u0431\u0441\u0430\u0439\u0442 \u0437\u0430 \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441\u0430 \u0432 \u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f","description":"\u0410\u043a\u0442\u0443\u0430\u043b\u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0438 \u0433\u0440\u0430\u0444\u0438\u043a\u0438 \u0437\u0430 \u0440\u0430\u0437\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435\u0442\u043e \u043d\u0430 \u043a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441\u0430 \u0432 \u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f"},"charts":{"infected":"\u0417\u0430\u0440\u0430\u0437\u0435\u043d\u0438","cured":"\u0418\u0437\u043b\u0435\u043a\u0443\u0432\u0430\u043d\u0438","fatal":"\u0416\u0435\u0440\u0442\u0432\u0438","hospitalized":"\u0425\u043e\u0441\u043f\u0438\u0442\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043d\u0438","intensive_care":"\u0418\u043d\u0442\u0435\u043d\u0437\u0438\u0432\u043d\u0438 \u0433\u0440\u0438\u0436\u0438","medical_staff":"\u0417\u0430\u0440\u0430\u0437\u0435\u043d \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b","new_cases_today":"\u0414\u043d\u0435\u0441 \u0441\u0430 \u0441\u044a\u043e\u0431\u0449\u0435\u043d\u0438 {{count}} \u043d\u043e\u0432\u0438 \u0441\u043b\u0443\u0447\u0430\u044f.","new_cases_today_0":"\u0414\u043d\u0435\u0441 \u043d\u0435 \u0441\u0430 \u0441\u044a\u043e\u0431\u0449\u0435\u043d\u0438 \u043d\u043e\u0432\u0438 \u0441\u043b\u0443\u0447\u0430\u0438.","new_cases_today_1":"\u0414\u043d\u0435\u0441 \u0435 \u0441\u044a\u043e\u0431\u0449\u0435\u043d 1 \u043d\u043e\u0432 \u0441\u043b\u0443\u0447\u0430\u0439.","diff_cases":"\u0411\u0440\u043e\u044f\u0442 \u043d\u0430 \u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u043b\u0443\u0447\u0430\u0438 \u0435 \u0441 {{count}} {{diffType}} \u043e\u0442 \u0432\u0447\u0435\u0440\u0430.","diff_cases_0":"\u0411\u0440\u043e\u044f\u0442 \u043d\u0430 \u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u043b\u0443\u0447\u0430\u0438 \u0435 \u0441\u044a\u0449\u0438\u044f \u043a\u0430\u0442\u043e \u0432\u0447\u0435\u0440\u0430.","higher":"\u043f\u043e-\u0433\u043e\u043b\u044f\u043c","lower":"\u043f\u043e-\u043c\u0430\u043b\u044a\u043a","cases_linechart":{"title":"\u0425\u0440\u043e\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u043d\u0430 \u0437\u0430\u0440\u0430\u0437\u0430\u0442\u0430","xtitle":"\u0414\u0430\u0442\u0430","ytitle":"\u0411\u0440\u043e\u0439 \u0437\u0430\u0441\u0435\u0433\u043d\u0430\u0442\u0438"},"cases_barchart":{"title":"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e \u0434\u043d\u0438","xtitle":"\u0414\u0430\u0442\u0430","ytitle":"\u0411\u0440\u043e\u0439 \u0437\u0430\u0441\u0435\u0433\u043d\u0430\u0442\u0438"},"cases_gender_piechart":{"title":"\u0420\u0430\u0437\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u043e \u043f\u043e\u043b","male":"\u041c\u044a\u0436\u0435 {{percentage}}%","female":"\u0416\u0435\u043d\u0438 {{percentage}}%"},"cases_piechart":{"title":"\u041f\u0440\u043e\u0446\u0435\u043d\u0442\u043d\u043e \u0441\u044a\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0438\u0442\u0435","infected":"\u0417\u0430\u0440\u0430\u0437\u0435\u043d\u0438 {{percentage}}%","cured":"\u0418\u0437\u043b\u0435\u043a\u0443\u0432\u0430\u043d\u0438 {{percentage}}%","fatal":"\u0416\u0435\u0440\u0442\u0432\u0438 {{percentage}}%"}},"last_updated":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0430 \u0430\u043a\u0442\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f:"}')},BIX1:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return(0,a.useContext)(o.default)};var a=r("q1tI"),o=n(r("TdOP"))},Ff2n:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("zLVn");function a(e,t){if(null==e)return{};var r,a,o=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},JZiN:function(e,t,r){"use strict";var n=r("o0o1"),a=r.n(n),o=r("q1tI"),i=r.n(o),c=r("vcXL"),u=r.n(c),s=r("eomm"),l=r.n(s),f=(r("MX0m"),r("3Z9Z"),r("JI6e"),r("l/gT"),i.a.createElement,i.a.createElement),p=function(e){e.dateCasesData;return f(l.a,{statusCode:404})};p.getInitialProps=function(){var e,t;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.a.awrap(u()("https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/DateCasesDataset.json"));case 2:return e=r.sent,r.next=5,a.a.awrap(e.json());case 5:return t=r.sent,r.abrupt("return",{dateCasesData:t});case 7:case"end":return r.stop()}}),null,null,null,Promise)};t.a=p},MA9B:function(e,t,r){"use strict";var n=r("284h"),a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.lang,r=e.namespaces,n=void 0===r?{}:r,a=e.children,y=e.isStaticMode,b=function(e){for(var t,r=1;r<arguments.length;r++)t=null==arguments[r]?{}:arguments[r],r%2?f(Object(t),!0).forEach((function(r){(0,i.default)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}));return e}({},(0,c.useContext)(p),{},n);return(0,s.setInternals)({lang:t,isStaticMode:y}),l(u.default.Provider,{value:{lang:t,t:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length?arguments[1]:void 0,r=Array.isArray(e)?e[0]:e,n=r.split(":"),a=(0,o.default)(n,2),i=a[0],c=a[1],u=b[i]||{},s=v(u,c,t),l=d(u,s);return g(l,t)||r}}},l(p.Provider,{value:b},a))};var o=a(r("J4zp")),i=a(r("lSNA")),c=n(r("q1tI")),u=a(r("TdOP")),s=r("tQgH"),l=c.default.createElement;function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var p=(0,c.createContext)({});function d(e){var t=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"").split(".").reduce((function(e,t){return e[t]}),e);return"string"==typeof t?t:void 0}function v(e,t,r){if(!r||"number"!=typeof r.count)return t;var n="".concat(t,"_").concat(r.count);if(void 0!==d(e,n))return n;var a="".concat(t,"_plural");return 1<r.count&&void 0!==d(e,a)?a:t}function g(e,t){return e&&t?Object.keys(t).reduce((function(e,r){var n=new RegExp("{{\\s*".concat(r,"\\s*}}"),"gm");return e=e.replace(n,"".concat(t[r]))}),e):e||""}},QA0p:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){var r=void 0===t?{}:t,n=r.propTypes,o=r.defaultProps,i=r.allowFallback,c=void 0!==i&&i,u=r.displayName,s=void 0===u?e.name||e.displayName:u,l=function(t,r){return e(t,r)};return Object.assign(a.default.forwardRef||!c?a.default.forwardRef(l):function(e){return l(e,null)},{displayName:s,propTypes:n,defaultProps:o})};var n,a=(n=r("q1tI"))&&n.__esModule?n:{default:n}},TSYQ:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},TdOP:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r("q1tI").createContext)({t:function(e){return Array.isArray(e)?e[0]:e},lang:""});t.default=n},eomm:function(e,t,r){e.exports=r("/a9y")},fFtf:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return g}));var n=r("rePB"),a=r("MA9B"),o=r.n(a),i=r("q1tI"),c=r.n(i),u=r("JZiN"),s=r("5TBX"),l=r("6/8+"),f=c.a.createElement;function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={common:s,home:l};function g(e){return f(o.a,{lang:"bg",namespaces:v,isStaticMode:!0},f(u.a,e))}g=Object.assign(g,d({},u.a)),u.a.getInitialProps&&(g.getInitialProps=function(e){return u.a.getInitialProps(d({},e,{lang:"bg"}))})},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},tQgH:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.setInternals=void 0;var n={};t.setInternals=function(e){n.lang=e.lang,n.isStaticMode=e.isStaticMode};var a=n;t.default=a},vUet:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("wx14"),r("QA0p");var n=r("q1tI"),a=r.n(n),o=a.a.createContext({});o.Consumer,o.Provider;function i(e,t){var r=Object(n.useContext)(o);return e||r[t]||t}},wx14:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},yIL0:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bg/open-graph-linechart",function(){return r("fFtf")}])},zLVn:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))}},[["yIL0",1,0,7,2,6,8]]]);