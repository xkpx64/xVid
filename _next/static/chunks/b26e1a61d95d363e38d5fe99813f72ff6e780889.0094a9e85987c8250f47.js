(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"2qu3":function(e,t,r){"use strict";var n=r("oI91"),a=r("/GRZ"),o=r("i2R6");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var l,f=(l=r("q1tI"))&&l.__esModule?l:{default:l},d=r("8L3h"),p=r("jwwS");var b=[],h=[],m=!1;function v(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function y(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var a=v(e[n]);a.loading?t.loading=!0:(t.loaded[n]=a.loaded,t.error=a.error),r.push(a.promise),a.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function j(e,t){return f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function O(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:j,webpack:null,modules:null},t),n=null;function a(){if(!n){var t=new g(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!m&&"function"===typeof r.webpack){var o=r.webpack();h.push((function(e){var t,r=s(o);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return a()}}catch(i){r.e(i)}finally{r.f()}}))}var i=function(e,t){a();var o=f.default.useContext(p.LoadableContext),i=(0,d.useSubscription)(n);return f.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),f.default.useMemo((function(){return i.loading||i.error?f.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return a()},i.displayName="LoadableComponent",f.default.forwardRef(i)}var g=function(){function e(t,r){a(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function w(e){return O(v,e)}function _(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return _(e,t)}))}w.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return O(y,e)},w.preloadAll=function(){return new Promise((function(e,t){_(b).then(e,t)}))},w.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return m=!0,t()};_(h,e).then(r,r)}))},window.__NEXT_PRELOADREADY=w.preloadReady;var x=w;t.default=x},"3Z9Z":function(e,t,r){"use strict";var n=r("wx14"),a=r("zLVn"),o=r("TSYQ"),i=r.n(o),u=r("q1tI"),s=r.n(u),c=r("vUet"),l=s.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.noGutters,u=e.as,l=void 0===u?"div":u,f=e.className,d=Object(a.a)(e,["bsPrefix","noGutters","as","className"]),p=Object(c.a)(r,"row");return s.a.createElement(l,Object(n.a)({ref:t},d,{className:i()(f,p,o&&"no-gutters")}))}));l.displayName="Row",l.defaultProps={noGutters:!1},t.a=l},"HaE+":function(e,t,r){"use strict";function n(e,t,r,n,a,o,i){try{var u=e[o](i),s=u.value}catch(c){return void r(c)}u.done?t(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function u(e){n(i,a,o,u,s,"next",e)}function s(e){n(i,a,o,u,s,"throw",e)}u(void 0)}))}}r.d(t,"a",(function(){return a}))},JI6e:function(e,t,r){"use strict";var n=r("wx14"),a=r("zLVn"),o=r("TSYQ"),i=r.n(o),u=r("q1tI"),s=r.n(u),c=r("vUet"),l=["xl","lg","md","sm","xs"],f=s.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,u=e.as,f=void 0===u?"div":u,d=Object(a.a)(e,["bsPrefix","className","as"]),p=Object(c.a)(r,"col"),b=[],h=[];return l.forEach((function(e){var t,r,n,a=d[e];if(delete d[e],null!=a&&"object"===typeof a){var o=a.span;t=void 0===o||o,r=a.offset,n=a.order}else t=a;var i="xs"!==e?"-"+e:"";null!=t&&b.push(!0===t?""+p+i:""+p+i+"-"+t),null!=n&&h.push("order"+i+"-"+n),null!=r&&h.push("offset"+i+"-"+r)})),b.length||b.push(p),s.a.createElement(f,Object(n.a)({},d,{ref:t,className:i.a.apply(void 0,[o].concat(b,h))}))}));f.displayName="Col",t.a=f},"T/rR":function(e,t,r){"use strict";var n=r("wx14"),a=r("zLVn"),o=r("TSYQ"),i=r.n(o),u=r("q1tI"),s=r.n(u),c=r("vUet"),l=s.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.variant,u=e.animation,l=e.size,f=e.children,d=e.as,p=void 0===d?"div":d,b=e.className,h=Object(a.a)(e,["bsPrefix","variant","animation","size","children","as","className"]),m=(r=Object(c.a)(r,"spinner"))+"-"+u;return s.a.createElement(p,Object(n.a)({ref:t},h,{className:i()(b,m,l&&m+"-"+l,o&&"text-"+o)}),f)}));l.displayName="Spinner",t.a=l},Vvt1:function(e,t,r){e.exports=r("a6RD")},a6RD:function(e,t,r){"use strict";var n=r("oI91");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=s,t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=o(o({},n),e));if(n=o(o({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=i.default.Map;var a={},u=e.modules();Object.keys(u).forEach((function(e){var t=u[e];"function"!==typeof t.then?a[e]=t:a[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=a}n.loadableGenerated&&delete(n=o(o({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,s(r,n);delete n.ssr}return r(n)};u(r("q1tI"));var i=u(r("2qu3"));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},jwwS:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=a},kYXx:function(e,t,r){"use strict";var n=r("o0o1"),a=r.n(n),o=r("HaE+"),i=r("nKUr"),u=r("q1tI"),s=r("g4pe"),c=r.n(s),l=r("Vvt1"),f=r.n(l),d=r("9ixD"),p=r("vcXL"),b=r.n(p),h=r("7vrA"),m=r("3Z9Z"),v=r("JI6e"),y=r("T/rR"),j=r("BIX1"),O=r.n(j),g=r("ds/u"),w=f()((function(){return Promise.all([r.e(16),r.e(11)]).then(r.bind(null,"CGeP"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["CGeP"]},modules:["../components/CasesMap/CasesMap"]}});t.a=function(){var e=O()().t,t=Object(u.useState)(!0),r=t[0],n=t[1],s=Object(u.useState)({}),l=s[0],f=s[1],p=Object(u.useState)(7),j=p[0],_=p[1];return Object(u.useEffect)((function(){(function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b()("https://raw.githubusercontent.com/COVID-19-Bulgaria/covid-database/master/Bulgaria/GeoDataset.json");case 3:return t=e.sent,e.t0=f,e.next=7,t.json();case 7:e.t1=e.sent,(0,e.t0)(e.t1),n(!1),e.next=14;break;case 12:e.prev=12,e.t2=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(i.jsxs)(g.a,{children:[Object(i.jsx)(c.a,{children:Object(i.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.6.0/dist/leaflet.css",integrity:"sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==",crossOrigin:""})}),Object(i.jsx)(d.c,{title:e("map:seo.title"),description:e("map:seo.description"),canonical:e("map:seo.canonical"),additionalMetaTags:[{name:"keywords",content:e("map:seo.keywords")}],openGraph:{title:e("map:seo.title"),description:e("map:seo.description"),images:[{url:"https://coronavirus-bulgaria.org/static/images/open_graph_map.png?v=".concat("J4AbU01N2RSZnENwDj4lw"),width:1200,height:630,alt:e("map:seo.description")}]}}),Object(i.jsxs)(h.a,{fluid:!0,children:[Object(i.jsx)("div",{className:"d-sm-flex align-items-center justify-content-between my-4",children:Object(i.jsx)("h1",{className:"h3 mb-0 text-gray-800",children:e("map:page_title")})}),Object(i.jsx)(m.a,{className:"mt-3",children:Object(i.jsx)(v.a,{style:{height:"400px"},children:r?Object(i.jsx)(y.a,{animation:"border",variant:"primary"}):Object(i.jsx)(w,{data:l,zoom:j,whenReady:function(){document.documentElement.clientWidth<=768&&_(6)},zoomSnap:.5})})})]})]})}},o0o1:function(e,t,r){e.exports=r("ls82")},vcXL:function(e,t,r){"use strict";var n=self.fetch.bind(self);e.exports=n,e.exports.default=e.exports}}]);