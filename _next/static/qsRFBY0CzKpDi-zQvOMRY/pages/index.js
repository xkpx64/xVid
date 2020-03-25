(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6xyR":function(a,e,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),s=t.n(c),i=t("q1tI"),l=t.n(i),o=t("vUet"),d=t("YdCC"),m=t("U1MP"),u=t("Wzyw"),f=l.a.forwardRef((function(a,e){var t=a.bsPrefix,c=a.className,i=a.variant,d=a.as,m=void 0===d?"img":d,u=Object(n.a)(a,["bsPrefix","className","variant","as"]),f=Object(o.a)(t,"card-img");return l.a.createElement(m,Object(r.a)({ref:e,className:s()(i?f+"-"+i:f,c)},u))}));f.displayName="CardImg",f.defaultProps={variant:null};var b=f,v=Object(m.a)("h5"),p=Object(m.a)("h6"),N=Object(d.a)("card-body"),g=l.a.forwardRef((function(a,e){var t=a.bsPrefix,c=a.className,d=a.bg,m=a.text,f=a.border,b=a.body,v=a.children,p=a.as,g=void 0===p?"div":p,x=Object(n.a)(a,["bsPrefix","className","bg","text","border","body","children","as"]),h=Object(o.a)(t,"card"),w=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:h+"-header"}}),[h]);return l.a.createElement(u.a.Provider,{value:w},l.a.createElement(g,Object(r.a)({ref:e},x,{className:s()(c,h,d&&"bg-"+d,m&&"text-"+m,f&&"border-"+f)}),b?l.a.createElement(N,null,v):v))}));g.displayName="Card",g.defaultProps={body:!1},g.Img=b,g.Title=Object(d.a)("card-title",{Component:v}),g.Subtitle=Object(d.a)("card-subtitle",{Component:p}),g.Body=N,g.Link=Object(d.a)("card-link",{Component:"a"}),g.Text=Object(d.a)("card-text",{Component:"p"}),g.Header=Object(d.a)("card-header"),g.Footer=Object(d.a)("card-footer"),g.ImgOverlay=Object(d.a)("card-img-overlay");e.a=g},RNiq:function(a,e,t){"use strict";t.r(e);var r=t("q1tI"),n=t.n(r),c=t("ffb8"),s=t("7vrA"),i=t("3Z9Z"),l=t("JI6e"),o=t("6xyR"),d=t("ds/u"),m=n.a.createElement,u=function(a){var e=a.title,t=a.value,r=a.icon,n=a.variant;return m(o.a,{className:"border-left-".concat(n," shadow h-100 py-2")},m(o.a.Body,null,m(i.a,{noGutters:!0,className:"align-items-center"},m(l.a,{className:"mr-2"},m("div",{className:"text-xs font-weight-bold text-".concat(n," text-uppercase mb-1")},e),m("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},t)),m("div",{className:"col-auto"},m("i",{className:"fas ".concat(r," fa-2x text-gray-300")})))))},f=n.a.createElement,b=function(a){var e=a.infected,t=a.cured,r=a.fatal;return f(i.a,{className:"mt-3"},f(l.a,{md:4,className:"mb-4"},f(u,{title:"\u0417\u0430\u0440\u0430\u0437\u0435\u043d\u0438",value:e,icon:"fa-radiation",variant:"warning"})),f(l.a,{md:4,className:"mb-4"},f(u,{title:"\u0418\u0437\u043b\u0435\u043a\u0443\u0432\u0430\u043d\u0438",value:t,icon:"fa-notes-medical",variant:"success"})),f(l.a,{md:4,className:"mb-4"},f(u,{title:"\u0416\u0435\u0440\u0442\u0432\u0438",value:r,icon:"fa-heart",variant:"danger"})))},v=t("l/gT"),p=t("pYBD"),N=t("Hgt2"),g=n.a.createElement;e.default=function(){var a=function(a){return Object.fromEntries(Object.entries(a).map((function(a){return[a[0],a[1].cases]})))},e=[{name:"\u0417\u0430\u0440\u0430\u0437\u0435\u043d\u0438",data:a(N.infected)},{name:"\u0418\u0437\u043b\u0435\u043a\u0443\u0432\u0430\u043d\u0438",data:a(N.cured)},{name:"\u0416\u0435\u0440\u0442\u0432\u0438",data:a(N.fatal)}];return g(d.a,null,g(c.NextSeo,{openGraph:{images:[{url:"https://coronavirus-bulgaria.org/static/images/open_graph_linechart.png?v=".concat("qsRFBY0CzKpDi-zQvOMRY"),width:1200,height:630,alt:"\u0425\u0440\u043e\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u043d\u0430 \u0437\u0430\u0440\u0430\u0437\u0430\u0442\u0430"}]}}),g(s.a,{fluid:!0},g("div",{className:"d-sm-flex align-items-center justify-content-between my-4"},g("h1",{className:"h3 mb-0 text-gray-800"},"\u041d\u0430\u0447\u0430\u043b\u043e")),g(b,{infected:p.infected-p.cured-p.fatal,cured:p.cured,fatal:p.fatal}),g(i.a,null,g(l.a,null,g(o.a,{className:"shadow mb-4"},g(o.a.Header,{className:"py-3 d-flex flex-row align-items-center justify-content-between"},g("h6",{className:"m-0 font-weight-bold text-primary"},"\u0425\u0440\u043e\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u043d\u0430 \u0437\u0430\u0440\u0430\u0437\u0430\u0442\u0430")),g(o.a.Body,null,g(v.a,{data:e})))))))}},U1MP:function(a,e,t){"use strict";var r=t("wx14"),n=t("q1tI"),c=t.n(n),s=t("TSYQ"),i=t.n(s);e.a=function(a){return c.a.forwardRef((function(e,t){return c.a.createElement("div",Object(r.a)({},e,{ref:t,className:i()(e.className,a)}))}))}},pYBD:function(a){a.exports=JSON.parse('{"infected":242,"cured":5,"fatal":3}')},vlRD:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",1,0,9,2,4,5,10]]]);