(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"2qu3":function(e,a,t){"use strict";var n=t("lwsE"),r=t("W8MJ"),l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});var o=l(t("q1tI")),i=t("8L3h"),s=t("jwwS"),u=[],c=[],d=!1;function f(e){var a=e(),t={loading:!0,loaded:null,error:null};return t.promise=a.then((function(e){return t.loading=!1,t.loaded=e,e})).catch((function(e){throw t.loading=!1,t.error=e,e})),t}function m(e){var a={loading:!1,loaded:{},error:null},t=[];try{Object.keys(e).forEach((function(n){var r=f(e[n]);r.loading?a.loading=!0:(a.loaded[n]=r.loaded,a.error=r.error),t.push(r.promise),r.promise.then((function(e){a.loaded[n]=e})).catch((function(e){a.error=e}))}))}catch(n){a.error=n}return a.promise=Promise.all(t).then((function(e){return a.loading=!1,e})).catch((function(e){throw a.loading=!1,e})),a}function b(e,a){return o.default.createElement((t=e)&&t.__esModule?t.default:t,a);var t}function p(e,a){var t=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:b,webpack:null,modules:null},a),n=null;function r(){if(!n){var a=new h(e,t);n={getCurrentValue:a.getCurrentValue.bind(a),subscribe:a.subscribe.bind(a),retry:a.retry.bind(a),promise:a.promise.bind(a)}}return n.promise()}if(!d&&"function"===typeof t.webpack){var l=t.webpack();c.push((function(e){var a=!0,t=!1,n=void 0;try{for(var o,i=l[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var s=o.value;if(-1!==e.indexOf(s))return r()}}catch(u){t=!0,n=u}finally{try{a||null==i.return||i.return()}finally{if(t)throw n}}}))}var u=function(e,a){r();var l=o.default.useContext(s.LoadableContext),u=i.useSubscription(n);return o.default.useImperativeHandle(a,(function(){return{retry:n.retry}})),l&&Array.isArray(t.modules)&&t.modules.forEach((function(e){l(e)})),u.loading||u.error?o.default.createElement(t.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:n.retry}):u.loaded?t.render(u.loaded,e):null};return u.preload=function(){return r()},u.displayName="LoadableComponent",o.default.forwardRef(u)}var h=function(){function e(a,t){n(this,e),this._loadFn=a,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return r(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var a=this._res,t=this._opts;a.loading&&("number"===typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),t.delay)),"number"===typeof t.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),t.timeout))),this._res.promise.then((function(){e._update(),e._clearTimeouts()})).catch((function(a){e._update(),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=Object.assign(Object.assign({},this._state),e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return Object.assign(Object.assign({},this._state),{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading})}},{key:"subscribe",value:function(e){var a=this;return this._callbacks.add(e),function(){a._callbacks.delete(e)}}}]),e}();function v(e){return p(f,e)}function y(e,a){for(var t=[];e.length;){var n=e.pop();t.push(n(a))}return Promise.all(t).then((function(){if(e.length)return y(e,a)}))}v.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return p(m,e)},v.preloadAll=function(){return new Promise((function(e,a){y(u).then(e,a)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(a){var t=function(){return d=!0,a()};y(c,e).then(t,t)}))},window.__NEXT_PRELOADREADY=v.preloadReady,a.default=v},"3Z9Z":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),o=t.n(l),i=t("q1tI"),s=t.n(i),u=t("vUet"),c=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.noGutters,i=e.as,c=void 0===i?"div":i,d=e.className,f=Object(r.a)(e,["bsPrefix","noGutters","as","className"]),m=Object(u.a)(t,"row");return s.a.createElement(c,Object(n.a)({ref:a},f,{className:o()(d,m,l&&"no-gutters")}))}));c.displayName="Row",c.defaultProps={noGutters:!1},a.a=c},"6nM6":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("a6RD"),o=t.n(l),i=t("7vrA"),s=t("6xyR"),u=t("wx14"),c=t("zLVn"),d=t("TSYQ"),f=t.n(d),m=t("vUet"),b=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,l=e.pill,o=e.className,i=e.as,s=void 0===i?"span":i,d=Object(c.a)(e,["bsPrefix","variant","pill","className","as"]),b=Object(m.a)(t,"badge");return r.a.createElement(s,Object(u.a)({ref:a},d,{className:f()(o,b,l&&b+"-pill",n&&b+"-"+n)}))}));b.displayName="Badge",b.defaultProps={pill:!1};var p=b,h=t("YdCC"),v=t("17x9"),y=t.n(v),g=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.fluid,o=e.rounded,i=e.roundedCircle,s=e.thumbnail,d=Object(c.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);t=Object(m.a)(t,"img");var b=f()(l&&t+"-fluid",o&&"rounded",i&&"rounded-circle",s&&t+"-thumbnail");return r.a.createElement("img",Object(u.a)({ref:a},d,{className:f()(n,b)}))}));g.displayName="Image",g.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var O=g,j={bsPrefix:y.a.string,fluid:y.a.bool,rounded:y.a.bool,roundedCircle:y.a.bool,thumbnail:y.a.bool},w=r.a.forwardRef((function(e,a){var t=e.className,n=Object(c.a)(e,["className"]);return r.a.createElement(O,Object(u.a)({ref:a},n,{className:f()(t,"figure-img")}))}));w.displayName="FigureImage",w.propTypes=j,w.defaultProps={fluid:!0};var _=w,N=Object(h.a)("figure-caption",{Component:"figcaption"}),x=Object(h.a)("figure",{Component:"figure"});x.Image=_,x.Caption=N;var C,P=x,E=t("ffb8"),k=t("ds/u"),R=t("Ff2n"),S=t("JCAc"),T=t("ZCiN"),I=t("U1MP"),D=t("YECM"),L=t("dRu9"),M=t("z+q/"),q=((C={})[L.b]="show",C[L.a]="show",C),G=r.a.forwardRef((function(e,a){var t=e.className,l=e.children,o=Object(c.a)(e,["className","children"]),i=Object(n.useCallback)((function(e){Object(M.a)(e),o.onEnter&&o.onEnter(e)}),[o]);return r.a.createElement(L.e,Object(u.a)({ref:a,addEndListener:D.a},o,{onEnter:i}),(function(e,a){return r.a.cloneElement(l,Object(u.a)({},a,{className:f()("fade",t,l.props.className,q[e])}))}))}));G.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},G.displayName="Fade";var V=G,F={label:y.a.string.isRequired,onClick:y.a.func},z=r.a.forwardRef((function(e,a){var t=e.label,n=e.onClick,l=e.className,o=Object(c.a)(e,["label","onClick","className"]);return r.a.createElement("button",Object(u.a)({ref:a,type:"button",className:f()("close",l),onClick:n},o),r.a.createElement("span",{"aria-hidden":"true"},"\xd7"),r.a.createElement("span",{className:"sr-only"},t))}));z.displayName="CloseButton",z.propTypes=F,z.defaultProps={label:"Close"};var A=z,Q=t("dbZe"),Y={show:!0,transition:V,closeLabel:"Close alert"},H={show:"onClose"},U=r.a.forwardRef((function(e,a){var t=Object(S.a)(e,H),n=t.bsPrefix,l=t.show,o=t.closeLabel,i=t.className,s=t.children,d=t.variant,b=t.onClose,p=t.dismissible,h=t.transition,v=Object(c.a)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),y=Object(m.a)(n,"alert"),g=Object(T.a)((function(e){b(!1,e)})),O=r.a.createElement("div",Object(u.a)({role:"alert"},h?v:void 0,{ref:a,className:f()(i,y,d&&y+"-"+d,p&&y+"-dismissible")}),p&&r.a.createElement(A,{onClick:g,label:o}),s);return h?r.a.createElement(h,Object(u.a)({unmountOnExit:!0},v,{in:l}),O):l?O:null})),B=Object(I.a)("h4");B.displayName="DivStyledAsH4",U.displayName="Alert",U.defaultProps=Y,U.Link=Object(h.a)("alert-link",{Component:Q.a}),U.Heading=Object(h.a)("alert-heading",{Component:B});var J=U,Z=t("3Z9Z"),X=t("JI6e"),W=r.a.createElement,K=function(e){var a=e.iconClass,t=e.children,n=Object(R.a)(e,["iconClass","children"]);return W(J,n,W(Z.a,null,W(X.a,{xs:{span:"auto"},sm:{span:"auto"},className:"align-self-center"},W("i",{className:a})),W(X.a,null,t)))},$=r.a.createElement,ee=function(e){var a=e.counters,t=a.unaffected,n=a.infected,r=a.cured;return $("div",{className:"text-center"},$(p,{pill:!0,variant:"secondary"},$("i",{className:"fas fa-smile"}),"\xa0",t)," ",$(p,{pill:!0,variant:"warning"},$("i",{className:"fas fa-radiation"}),"\xa0",n)," ",$(p,{pill:!0,variant:"success"},$("i",{className:"fas fa-notes-medical"}),"\xa0",r))},ae=t("zDhD"),te=r.a.createElement,ne=o()((function(){return Promise.all([t.e(7),t.e(3),t.e(6),t.e(28)]).then(t.bind(null,"VTno"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["VTno"]},modules:["../simulations/sketches/TransmissionSketch"]}}),re=o()((function(){return Promise.all([t.e(7),t.e(3),t.e(6),t.e(25)]).then(t.bind(null,"xiwy"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["xiwy"]},modules:["../simulations/sketches/ImmunitySketch"]}}),le=o()((function(){return Promise.all([t.e(7),t.e(3),t.e(6),t.e(26)]).then(t.bind(null,"RvFn"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["RvFn"]},modules:["../simulations/sketches/NoRestrictionsSketch"]}}),oe=o()((function(){return Promise.all([t.e(7),t.e(3),t.e(6),t.e(27)]).then(t.bind(null,"DQ4S"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["DQ4S"]},modules:["../simulations/sketches/StayHomeSketch"]}});a.default=function(){return te(k.a,null,te(E.NextSeo,{title:"\u0417\u0430\u0449\u043e \u0434\u0430 \u043e\u0441\u0442\u0430\u043d\u0435\u043c \u0432\u043a\u044a\u0449\u0438?",description:"\u041d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0438\u043c\u0443\u043b\u0430\u0446\u0438\u0438, \u043a\u043e\u0438\u0442\u043e \u043f\u043e\u043a\u0430\u0437\u0432\u0430\u0442 \u0437\u0430\u0449\u043e \u0435 \u0432\u0430\u0436\u043d\u043e \u0434\u0430 \u043e\u0441\u0442\u0430\u043d\u0435\u043c \u0432\u043a\u044a\u0449\u0438",openGraph:{images:[{url:"https://coronavirus-bulgaria.org/static/images/open_graph_social_distancing.png?v=".concat("9sXL7jvFKQ1sbB6bh67Qo"),width:1200,height:630,alt:"\u0417\u0430\u0449\u043e \u0434\u0430 \u043e\u0441\u0442\u0430\u043d\u0435\u043c \u0432\u043a\u044a\u0449\u0438?"}]}}),te(i.a,{fluid:!0},te("div",{className:"d-sm-flex align-items-center justify-content-between my-4"},te("h1",{className:"h3 mb-0 text-gray-800"},"\u0417\u0430\u0449\u043e \u0434\u0430 \u043e\u0441\u0442\u0430\u043d\u0435\u043c \u0432\u043a\u044a\u0449\u0438?")),te(s.a,{className:"shadow"},te(s.a.Body,null,te(K,{variant:"info",iconClass:"fa fa-info fa-lg"},"\u0421\u0438\u043c\u0443\u043b\u0430\u0446\u0438\u0438\u0442\u0435 \u043d\u0430 \u0442\u0430\u0437\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441\u0430 \u0432\u0434\u044a\u0445\u043d\u043e\u0432\u0435\u043d\u0438 \u043e\u0442 \u0441\u0442\u0430\u0442\u0438\u044f\u0442\u0430:",te("br",null),te(ae.a,{href:"https://www.washingtonpost.com/graphics/2020/world/corona-simulator/"},'Why outbreaks like coronavirus spread exponentially, and how to "flatten the curve"'),"."),te("p",null,"\u0417\u0430 \u0434\u0430 \u0440\u0430\u0437\u0431\u0435\u0440\u0435\u043c, \u0437\u0430\u0449\u043e \u0435 \u0432\u0430\u0436\u043d\u043e \u0434\u0430 \u0441\u0438 \u043e\u0441\u0442\u0430\u043d\u0435\u043c \u0432\u043a\u044a\u0449\u0438 \u043f\u043e \u0432\u0440\u0435\u043c\u0435 \u043d\u0430 \u0438\u0437\u0432\u044a\u043d\u0440\u0435\u0434\u043d\u043e\u0442\u043e \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0449\u0435 \u0440\u0430\u0437\u0433\u043b\u0435\u0434\u0430\u043c\u0435 \u043d\u0430\u0447\u0438\u043d\u0430, \u043f\u043e \u043a\u043e\u0439\u0442\u043e \u0441\u0435 \u0440\u0430\u0437\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0432\u0430 \u0445\u0438\u043f\u043e\u0442\u0435\u0442\u0438\u0447\u0435\u043d \u0432\u0438\u0440\u0443\u0441 \u0438 \u043a\u0430\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0442\u0430 \u0438\u043b\u0438 \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0442\u0430 \u043d\u0430 \u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e\u0442\u043e \u0431\u0438\u0445\u0430 \u043e\u043a\u0430\u0437\u0430\u043b\u0438 \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u0432\u044a\u0440\u0445\u0443 \u0442\u043e\u0432\u0430 \u0440\u0430\u0437\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435. \u0414\u0430 \u0437\u0430\u043f\u043e\u0447\u0432\u0430\u043c\u0435!"),te("strong",null,"\u041b\u0435\u0433\u0435\u043d\u0434\u0430:"),te("ul",null,te("li",null,te(p,{pill:!0,variant:"secondary"},te("i",{className:"fas fa-smile"}),"\xa0 \u041d\u0435\u0437\u0430\u0441\u0435\u0433\u043d\u0430\u0442")),te("li",null,te(p,{pill:!0,variant:"warning"},te("i",{className:"fas fa-radiation"}),"\xa0 \u0417\u0430\u0440\u0430\u0437\u0435\u043d")),te("li",null,te(p,{pill:!0,variant:"success"},te("i",{className:"fas fa-notes-medical"}),"\xa0 \u0418\u0437\u043b\u0435\u043a\u0443\u0432\u0430\u043d"))),te("p",null,"\u0425\u0438\u043f\u043e\u0442\u0435\u0442\u0438\u0447\u043d\u043e \u0441\u043c\u0435 \u043e\u0442\u043a\u0440\u0438\u043b\u0438 \u043d\u043e\u0432 \u0432\u0438\u0440\u0443\u0441, \u043a\u043e\u0439\u0442\u043e \u0441\u0435 \u0440\u0430\u0437\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0432\u0430 \u043f\u043e \u0432\u044a\u0437\u0434\u0443\u0448\u043d\u043e-\u043a\u0430\u043f\u043a\u043e\u0432 \u043f\u044a\u0442. \u0417\u0430 \u0446\u0435\u043b\u0438\u0442\u0435 \u043d\u0430 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f\u0442\u0430 \u0449\u0435 \u043f\u0440\u0438\u0435\u043c\u0435\u043c, \u0447\u0435 \u0437\u0430\u0440\u0430\u0437\u0435\u043d \u0447\u043e\u0432\u0435\u043a \u0432\u0438\u043d\u0430\u0433\u0438 \u0437\u0430\u0440\u0430\u0437\u044f\u0432\u0430 \u043d\u0435\u0437\u0430\u0440\u0430\u0437\u0435\u043d \u0447\u043e\u0432\u0435\u043a \u043f\u0440\u0438 \u0435\u0432\u0435\u043d\u0442\u0443\u0430\u043b\u0435\u043d \u043a\u043e\u043d\u0442\u0430\u043a\u0442. \u0422\u043e\u0432\u0430 \u0435 \u0438\u043b\u044e\u0441\u0442\u0440\u0438\u0440\u0430\u043d\u043e \u0432 \u0441\u043b\u0435\u0434\u0432\u0430\u0449\u0430\u0442\u0430 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f:"),te(ne,{className:"mx-auto",replayProps:{replayText:"\u0412\u0438\u0436 \u043e\u0442\u043d\u043e\u0432\u043e"}}),te("p",null,"\u0421\u043b\u0435\u0434 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e \u0432\u0440\u0435\u043c\u0435 \u0432\u0441\u0435\u043a\u0438 \u0437\u0430\u0440\u0430\u0437\u0435\u043d \u0441\u0435 \u0432\u044a\u0437\u0441\u0442\u0430\u043d\u043e\u0432\u044f\u0432\u0430. \u041f\u043e \u0442\u043e\u0437\u0438 \u043d\u0430\u0447\u0438\u043d \u043f\u0440\u0438\u0434\u043e\u0431\u0438\u0432\u0430 \u0438\u043c\u0443\u043d\u0438\u0442\u0435\u0442 \u043a\u044a\u043c \u0431\u043e\u043b\u0435\u0441\u0442\u0442\u0430 \u0438 \u043f\u0440\u0438 \u0435\u0432\u0435\u043d\u0442\u0443\u0430\u043b\u043d\u0430 \u0441\u043b\u0435\u0434\u0432\u0430\u0449\u0430 \u0441\u0440\u0435\u0449\u0430 \u0441\u044a\u0441 \u0437\u0430\u0440\u0430\u0437\u0435\u043d \u043d\u0435 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u044a\u0434\u0435 \u0437\u0430\u0440\u0430\u0437\u0435\u043d:"),te(re,{className:"mx-auto",replayProps:{replayText:"\u0412\u0438\u0436 \u043e\u0442\u043d\u043e\u0432\u043e"}}),te("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u0430\u0442\u0430 \u0441\u0430 \u043f\u0440\u043e\u0441\u0442\u0438, \u0430 \u0441\u0435\u0433\u0430 \u0434\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u043c \u043a\u0430\u043a \u0449\u0435 \u0441\u0435 \u0440\u0430\u0437\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0438 \u043d\u0430\u0448\u0430\u0442\u0430 \u0445\u0438\u043f\u043e\u0442\u0435\u0442\u0438\u0447\u043d\u0430 \u0437\u0430\u0440\u0430\u0437\u0430 \u0432 \u0435\u0434\u043d\u0430 \u043e\u0431\u0449\u043d\u043e\u0441\u0442 \u043e\u0442 200 \u0434\u0443\u0448\u0438, \u0438\u0437\u043c\u0435\u0436\u0434\u0443 \u043a\u043e\u0438\u0442\u043e 1 \u0435 \u0437\u0430\u0440\u0430\u0437\u0435\u043d \u0438 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e \u0441\u0435 \u0434\u0432\u0438\u0436\u0438 \u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443\u0432\u0430 \u0441 \u0434\u0440\u0443\u0433\u0438 \u0445\u043e\u0440\u0430:"),te(le,{className:"mx-auto",CountersComponent:ee}),te("p",null,"\u041a\u0430\u043a\u0442\u043e \u0435 \u0432\u0438\u0434\u043d\u043e \u043e\u0442 \u0445\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u0430\u0442\u0430, \u0437\u0430\u0431\u0435\u043b\u044f\u0437\u0432\u0430\u043c\u0435 \u0440\u044f\u0437\u043a\u043e \u043d\u0430\u0440\u0430\u0441\u0442\u0432\u0430\u043d\u0435 \u043d\u0430 \u0431\u0440\u043e\u044f \u0437\u0430\u0440\u0430\u0437\u0435\u043d\u0438 \u0437\u0430 \u043a\u0440\u0430\u0442\u044a\u043a \u043f\u0435\u0440\u0438\u043e\u0434 \u043e\u0442 \u0432\u0440\u0435\u043c\u0435. \u041d\u0435\u043a\u0430 \u0434\u0430 \u043f\u0440\u0438\u0435\u043c\u0435\u043c \u0445\u0438\u043f\u043e\u0442\u0435\u0442\u0438\u0447\u043d\u043e, \u0447\u0435 100 \u0434\u0443\u0448\u0438 \u043e\u0442 \u0437\u0430\u0431\u043e\u043b\u0435\u043b\u0438\u0442\u0435 \u0441\u0435 \u043d\u0443\u0436\u0434\u0430\u044f\u0442 \u043e\u0442 \u0445\u043e\u0441\u043f\u0438\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f, \u043d\u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u043d\u0438\u044f\u0442 \u043a\u0430\u043f\u0430\u0446\u0438\u0442\u0435\u0442 \u043d\u0430 \u0431\u043e\u043b\u043d\u0438\u0446\u0438\u0442\u0435 \u0435 50 \u0434\u0443\u0448\u0438. \u0422\u043e\u0432\u0430 \u043e\u0437\u043d\u0430\u0447\u0430\u0432\u0430, \u0447\u0435 \u043e\u0441\u0442\u0430\u043d\u0430\u043b\u0438\u0442\u0435 50 \u0434\u0443\u0448\u0438 \u043d\u0435 \u0431\u0438\u0445\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u043f\u044a\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u0430 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0430 \u043f\u043e\u043c\u043e\u0449."),te("p",null,"\u041f\u0440\u043e\u0434\u044a\u043b\u0436\u0430\u0432\u0430\u043c\u0435 \u043d\u0430\u0448\u0430\u0442\u0430 \u0441\u0438\u043c\u0443\u043b\u0430\u0446\u0438\u044f \u0432 \u043f\u043e\u0441\u043e\u043a\u0430 \u0434\u0430 \u043d\u0430\u043c\u0430\u043b\u0438\u043c \u0440\u0438\u0441\u043a\u0430 \u043e\u0442 \u043a\u043e\u043b\u0430\u043f\u0441 \u043d\u0430 \u0437\u0434\u0440\u0430\u0432\u043d\u0430\u0442\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430. \u0420\u0435\u0448\u0430\u0432\u0430\u043c\u0435 \u0434\u0430 \u0432\u044a\u0432\u0435\u0434\u0435\u043c \u0443\u043c\u0435\u0440\u0435\u043d\u0438 \u0440\u0435\u0441\u0442\u0440\u0438\u043a\u0442\u0438\u0432\u043d\u0438 \u043c\u0435\u0440\u043a\u0438, \u043f\u0440\u0438 \u043a\u043e\u0438\u0442\u043e 50% \u043e\u0442 \u043e\u0431\u0449\u043d\u043e\u0441\u0442\u0442\u0430 \u0432 \u0441\u0438\u043c\u0443\u043b\u0430\u0446\u0438\u044f\u0442\u0430 \u043e\u0441\u0442\u0430\u0432\u0430 \u0432\u043a\u044a\u0449\u0438 (\u043d\u0435\u043f\u043e\u0434\u0432\u0438\u0436\u043d\u0438 \u0442\u043e\u043f\u0447\u0435\u0442\u0430). \u0414\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u043c \u043a\u0430\u043a \u0442\u0435\u0437\u0438 \u043c\u0435\u0440\u043a\u0438 \u0441\u0435 \u043e\u0442\u0440\u0430\u0437\u044f\u0432\u0430\u0442 \u043d\u0430 \u0440\u0430\u0437\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435\u0442\u043e \u043d\u0430 \u0437\u0430\u0440\u0430\u0437\u0430\u0442\u0430:"),te(oe,{className:"mx-auto",stayHomePercentage:.5,CountersComponent:ee}),te("p",null,"\u0418\u0437\u0433\u043b\u0435\u0436\u0434\u0430 \u043c\u0435\u0440\u043a\u0438\u0442\u0435 \u0434\u0430\u0432\u0430\u0442 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442 \u0438 \u0440\u0430\u0437\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435\u0442\u043e \u0435 \u0437\u0430\u0431\u0430\u0432\u0435\u043d\u043e. \u0412\u044a\u043f\u0440\u0435\u043a\u0438 \u0442\u043e\u0432\u0430 \u043e\u0442\u043d\u043e\u0432\u043e \u0437\u0434\u0440\u0430\u0432\u043d\u0438\u0442\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u0430\u0442 \u043f\u0440\u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u0435\u043d \u043a\u0430\u043f\u0430\u0446\u0438\u0442\u0435\u0442, \u0437\u0430\u0442\u043e\u0432\u0430 \u0432\u044a\u0432\u0435\u0436\u0434\u0430\u043c\u0435 \u043e\u0449\u0435 \u043f\u043e-\u0441\u0442\u0440\u043e\u0433\u0438 \u043c\u0435\u0440\u043a\u0438 \u0432 \u043d\u0430\u0448\u0430\u0442\u0430 \u0441\u0438\u043c\u0443\u043b\u0430\u0446\u0438\u044f \u0438 \u043f\u0440\u0438\u043d\u0443\u0436\u0434\u0430\u0432\u0430\u043c\u0435 \u0445\u043e\u0440\u0430\u0442\u0430 \u0434\u0430 \u0441\u0435 \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u0440\u0430\u0442 \u0441\u043e\u0446\u0438\u0430\u043b\u043d\u043e. \u0421\u043b\u0435\u0434\u0432\u0430\u0449\u0430\u0442\u0430 \u0441\u0438\u043c\u0443\u043b\u0430\u0446\u0438\u044f \u043f\u043e\u043a\u0430\u0437\u0432\u0430 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442\u0430 \u043e\u0442 \u043c\u0435\u0440\u043a\u0438\u0442\u0435 \u043f\u0440\u0438 \u0435\u0434\u0432\u0430 20% \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443\u0432\u0430\u0449\u0430 \u043f\u043e\u043f\u0443\u043b\u0430\u0446\u0438\u044f:"),te(oe,{className:"mx-auto",stayHomePercentage:.8,CountersComponent:ee}),te("p",null,"\u041f\u043e\u0441\u0442\u0438\u0433\u043d\u0430\u0445\u043c\u0435 \u0446\u0435\u043b\u0442\u0430 \u0441\u0438 - \u0437\u0434\u0440\u0430\u0432\u043d\u0438\u0442\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0432 \u043d\u0430\u0448\u0430\u0442\u0430 \u0441\u0438\u043c\u0443\u043b\u0430\u0446\u0438\u044f \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u043f\u043e\u0435\u043c\u0430\u0442 \u0432\u0441\u0438\u0447\u043a\u0438 \u0437\u0430\u0440\u0430\u0437\u0435\u043d\u0438 \u0432\u044a\u0432 \u0432\u0441\u0435\u043a\u0438 \u0435\u0434\u0438\u043d \u043c\u043e\u043c\u0435\u043d\u0442 \u0438 \u0434\u0430 \u0438\u043c\u0430\u0442 \u0441\u0432\u043e\u0431\u043e\u0434\u0435\u043d \u043a\u0430\u043f\u0430\u0446\u0438\u0442\u0435\u0442 \u0437\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u0438 \u0441\u043b\u0443\u0447\u0430\u0438, \u043a\u043e\u0438\u0442\u043e \u043d\u0435 \u0441\u0430 \u0441\u0432\u044a\u0440\u0437\u0430\u043d\u0438 \u0441 \u0445\u0438\u043f\u043e\u0442\u0435\u0442\u0438\u0447\u043d\u0438\u044f \u0432\u0438\u0440\u0443\u0441."),te(K,{variant:"info",iconClass:"fa fa-lightbulb fa-lg"},te("strong",null,"\u0418\u0437\u0432\u043e\u0434:"),"\xa0\u0421\u043e\u0446\u0438\u0430\u043b\u043d\u043e\u0442\u043e \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u0440\u0430\u043d\u0435 \u0443\u0434\u044a\u043b\u0436\u0430\u0432\u0430 \u0432\u0440\u0435\u043c\u0435\u0442\u043e, \u0437\u0430 \u043a\u043e\u0435\u0442\u043e \u0437\u0430\u0440\u0430\u0437\u0430\u0442\u0430 \u0441\u0435 \u0440\u0430\u0437\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u044f\u0432\u0430 \u0441\u0440\u0435\u0434 \u043f\u043e\u043f\u0443\u043b\u0430\u0446\u0438\u044f\u0442\u0430. \u041f\u043e \u0442\u043e\u0437\u0438 \u043d\u0430\u0447\u0438\u043d \u043a\u0430\u043f\u0430\u0446\u0438\u0442\u0435\u0442\u044a\u0442 \u043d\u0430 \u0437\u0434\u0440\u0430\u0432\u043d\u0430\u0442\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043d\u0435 \u0435 \u043d\u0430\u0434\u0445\u0432\u044a\u0440\u043b\u0435\u043d."),te(P,null,te(P.Image,{fluid:!0,src:"/static/images/social_distancing.svg"})),te(K,{variant:"warning",iconClass:"fa fa-exclamation fa-lg"},te("strong",null,"\u0412\u0430\u0436\u043d\u043e:"),"\xa0\u041f\u0440\u0435\u0434\u0445\u043e\u0434\u043d\u0438\u0442\u0435 \u0441\u0438\u043c\u0443\u043b\u0430\u0446\u0438\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0432\u0430\u0442 \u043c\u043d\u043e\u0433\u043e \u043e\u043f\u0440\u043e\u0441\u0442\u0435\u043d \u043c\u043e\u0434\u0435\u043b \u043d\u0430 \u0441\u043e\u0446\u0438\u0430\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u0446\u0435\u0441\u0438, \u043a\u043e\u0438\u0442\u043e \u0441\u0435 \u0441\u043b\u0443\u0447\u0432\u0430\u0442 \u0432 \u0440\u0435\u0430\u043b\u043d\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f. \u0421\u044a\u0449\u0435\u0441\u0442\u0432\u0443\u0432\u0430\u0442 \u043c\u043d\u043e\u0433\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u0438 \u0444\u0430\u043a\u0442\u043e\u0440\u0438, \u043a\u043e\u0438\u0442\u043e \u0432\u043b\u0438\u044f\u044f\u0442 \u043d\u0430 \u043d\u0430\u0447\u0438\u043d\u0430 \u043d\u0430 \u0440\u0430\u0437\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043d\u0430 \u0438\u0441\u0442\u0438\u043d\u0441\u043a\u0430 \u0431\u043e\u043b\u0435\u0441\u0442 \u043a\u0430\u0442\u043e COVID-19."),te("p",null,"\u0411\u044a\u0434\u0435\u0442\u0435 \u0437\u0434\u0440\u0430\u0432\u0438, \u0441\u044a\u043e\u0431\u0440\u0430\u0437\u044f\u0432\u0430\u0439\u0442\u0435 \u0441\u0435 \u0441 \u043d\u0430\u043b\u043e\u0436\u0435\u043d\u0438\u0442\u0435 \u043e\u0442 \u0434\u044a\u0440\u0436\u0430\u0432\u0430\u0442\u0430 \u043c\u0435\u0440\u043a\u0438 \u0438 \u0441\u0438 \u043e\u0441\u0442\u0430\u043d\u0435\u0442\u0435 \u0432\u043a\u044a\u0449\u0438!")))))}},"6xyR":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),o=t.n(l),i=t("q1tI"),s=t.n(i),u=t("vUet"),c=t("YdCC"),d=t("U1MP"),f=t("Wzyw"),m=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.variant,c=e.as,d=void 0===c?"img":c,f=Object(r.a)(e,["bsPrefix","className","variant","as"]),m=Object(u.a)(t,"card-img");return s.a.createElement(d,Object(n.a)({ref:a,className:o()(i?m+"-"+i:m,l)},f))}));m.displayName="CardImg",m.defaultProps={variant:null};var b=m,p=Object(d.a)("h5"),h=Object(d.a)("h6"),v=Object(c.a)("card-body"),y=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.bg,d=e.text,m=e.border,b=e.body,p=e.children,h=e.as,y=void 0===h?"div":h,g=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(u.a)(t,"card"),j=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return s.a.createElement(f.a.Provider,{value:j},s.a.createElement(y,Object(n.a)({ref:a},g,{className:o()(l,O,c&&"bg-"+c,d&&"text-"+d,m&&"border-"+m)}),b?s.a.createElement(v,null,p):p))}));y.displayName="Card",y.defaultProps={body:!1},y.Img=b,y.Title=Object(c.a)("card-title",{Component:p}),y.Subtitle=Object(c.a)("card-subtitle",{Component:h}),y.Body=v,y.Link=Object(c.a)("card-link",{Component:"a"}),y.Text=Object(c.a)("card-text",{Component:"p"}),y.Header=Object(c.a)("card-header"),y.Footer=Object(c.a)("card-footer"),y.ImgOverlay=Object(c.a)("card-img-overlay");a.a=y},Ff2n:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("zLVn");function r(e,a){if(null==e)return{};var t,r,l=Object(n.a)(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}},G8Pc:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/why-stay-home",function(){return t("6nM6")}])},JI6e:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),o=t.n(l),i=t("q1tI"),s=t.n(i),u=t("vUet"),c=["xl","lg","md","sm","xs"],d=s.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.as,d=void 0===i?"div":i,f=Object(r.a)(e,["bsPrefix","className","as"]),m=Object(u.a)(t,"col"),b=[],p=[];return c.forEach((function(e){var a,t,n,r=f[e];if(delete f[e],null!=r&&"object"===typeof r){var l=r.span;a=void 0===l||l,t=r.offset,n=r.order}else a=r;var o="xs"!==e?"-"+e:"";null!=a&&b.push(!0===a?""+m+o:""+m+o+"-"+a),null!=n&&p.push("order"+o+"-"+n),null!=t&&p.push("offset"+o+"-"+t)})),b.length||b.push(m),s.a.createElement(d,Object(n.a)({},f,{ref:a,className:o.a.apply(void 0,[l].concat(b,p))}))}));d.displayName="Col",a.a=d},U1MP:function(e,a,t){"use strict";var n=t("wx14"),r=t("q1tI"),l=t.n(r),o=t("TSYQ"),i=t.n(o);a.a=function(e){return l.a.forwardRef((function(a,t){return l.a.createElement("div",Object(n.a)({},a,{ref:t,className:i()(a.className,e)}))}))}},a6RD:function(e,a,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});var r=n(t("q1tI")),l=n(t("2qu3")),o=!1;function i(e,a){if(delete a.webpack,delete a.modules,!o)return e(a);var t=a.loading;return function(){return r.default.createElement(t,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}a.noSSR=i,a.default=function(e,a){var t=l.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};if(e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=Object.assign(Object.assign({},n),e)),n=Object.assign(Object.assign({},n),a),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(a,t){return e.render(t,a)}),e.modules)){t=l.default.Map;var r={},o=e.modules();Object.keys(o).forEach((function(e){var a=o[e];"function"!==typeof a.then?r[e]=a:r[e]=function(){return a.then((function(e){return e.default||e}))}})),n.loader=r}if(n.loadableGenerated&&delete(n=Object.assign(Object.assign({},n),n.loadableGenerated)).loadableGenerated,"boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,i(t,n);delete n.ssr}return t(n)}},jwwS:function(e,a,t){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(a[t]=e[t]);return a.default=e,a};Object.defineProperty(a,"__esModule",{value:!0});var r=n(t("q1tI"));a.LoadableContext=r.createContext(null)},zDhD:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n).a.createElement;a.a=function(e){var a=e.href,t=e.children;return r("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t)}}},[["G8Pc",1,0,2,4,5]]]);