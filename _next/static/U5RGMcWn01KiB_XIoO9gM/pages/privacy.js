(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"6+DC":function(e,a,t){"use strict";var r=t("MX0m"),n=t.n(r),c=t("q1tI"),l=t.n(c),o=t("6xyR"),i=t("DZHF"),s=l.a.createElement;a.a=function(e){var a=e.anchor,t=e.title,r=e.children;return s(o.a,{className:"shadow mb-4 collapsible-card"},s(i.a.Toggle,{as:o.a.Header,eventKey:a,className:"d-block py-3","data-toggle":"collapse","aria-expanded":"true"},s("h6",{className:"jsx-3719953696 m-0 font-weight-bold text-primary"},t)),s(i.a.Collapse,{eventKey:a},s(o.a.Body,null,r)),s(n.a,{id:"3719953696"},[".collapsible-card .card-header{cursor:pointer;}"]))}},"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),i=t.n(o),s=t("vUet"),d=t("YdCC"),u=function(e){return i.a.forwardRef((function(a,t){return i.a.createElement("div",Object(r.a)({},a,{ref:t,className:l()(a.className,e)}))}))},b=t("Wzyw"),f=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.variant,d=e.as,u=void 0===d?"img":d,b=Object(n.a)(e,["bsPrefix","className","variant","as"]),f=Object(s.a)(t,"card-img");return i.a.createElement(u,Object(r.a)({ref:a,className:l()(o?f+"-"+o:f,c)},b))}));f.displayName="CardImg",f.defaultProps={variant:null};var m=f,v=u("h5"),p=u("h6"),y=Object(d.a)("card-body"),h=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,d=e.bg,u=e.text,f=e.border,m=e.body,v=e.children,p=e.as,h=void 0===p?"div":p,j=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(s.a)(t,"card"),g=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return i.a.createElement(b.a.Provider,{value:g},i.a.createElement(h,Object(r.a)({ref:a},j,{className:l()(c,O,d&&"bg-"+d,u&&"text-"+u,f&&"border-"+f)}),m?i.a.createElement(y,null,v):v))}));h.displayName="Card",h.defaultProps={body:!1},h.Img=m,h.Title=Object(d.a)("card-title",{Component:v}),h.Subtitle=Object(d.a)("card-subtitle",{Component:p}),h.Body=y,h.Link=Object(d.a)("card-link",{Component:"a"}),h.Text=Object(d.a)("card-text",{Component:"p"}),h.Header=Object(d.a)("card-header"),h.Footer=Object(d.a)("card-footer"),h.ImgOverlay=Object(d.a)("card-img-overlay");a.a=h},DZHF:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),i=t.n(o),s=t("JCAc"),d=t("vUet"),u=t("ILyh"),b=i.a.createContext(null);var f=i.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"button":t,l=e.children,s=e.eventKey,d=e.onClick,f=Object(n.a)(e,["as","children","eventKey","onClick"]),m=function(e,a){var t=Object(o.useContext)(b),r=Object(o.useContext)(u.a);return function(n){r(e===t?null:e,n),a&&a(n)}}(s,d);return i.a.createElement(c,Object(r.a)({ref:a,onClick:m},f),l)})),m=t("vYJ8"),v=i.a.forwardRef((function(e,a){var t=e.children,c=e.eventKey,l=Object(n.a)(e,["children","eventKey"]),s=Object(o.useContext)(b);return i.a.createElement(m.a,Object(r.a)({ref:a,in:s===c},l),i.a.createElement("div",null,i.a.Children.only(t)))}));v.displayName="AccordionCollapse";var p=v,y=i.a.forwardRef((function(e,a){var t=Object(s.a)(e,{activeKey:"onSelect"}),c=t.as,o=void 0===c?"div":c,f=t.activeKey,m=t.bsPrefix,v=t.children,p=t.className,y=t.onSelect,h=Object(n.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]);return m=Object(d.a)(m,"accordion"),i.a.createElement(b.Provider,{value:f},i.a.createElement(u.a.Provider,{value:y},i.a.createElement(o,Object(r.a)({ref:a},h,{className:l()(p,m)}),v)))}));y.Toggle=f,y.Collapse=p;a.a=y},aeIR:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy",function(){return t("mnIH")}])},mnIH:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),c=t("ffb8"),l=t("7vrA"),o=t("3Z9Z"),i=t("JI6e"),s=t("DZHF"),d=t("wx14"),u=t("zLVn"),b=t("TSYQ"),f=t.n(b),m=t("vUet"),v=t("dbZe"),p=n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,c=e.size,l=e.active,o=e.className,i=e.block,s=e.type,b=e.as,p=Object(u.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),y=Object(m.a)(t,"btn"),h=f()(o,y,l&&"active",y+"-"+r,i&&y+"-block",c&&y+"-"+c);if(p.href)return n.a.createElement(v.a,Object(d.a)({},p,{as:b,ref:a,className:f()(h,p.disabled&&"disabled")}));a&&(p.ref=a),b||(p.type=s);var j=b||"button";return n.a.createElement(j,Object(d.a)({},p,{className:h}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var y=p,h=t("ds/u"),j=t("6+DC"),O=t("zDhD"),g=n.a.createElement;a.default=function(){return g(h.a,null,g(c.NextSeo,{title:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442"}),g(l.a,{fluid:!0},g("div",{className:"d-sm-flex align-items-center justify-content-between mt-4"},g("h1",{className:"h3 mb-0 text-gray-800"},"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442")),g(o.a,{className:"mt-3"},g(i.a,null,g(s.a,{bsPrefix:"custom-accordion"},g(j.a,{anchor:"policy",title:"\u041a\u0430\u043a\u0432\u0430 \u0435 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u0442\u0430 \u043d\u0438 \u043e\u0442\u043d\u043e\u0441\u043d\u043e \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442\u0442\u0430?"},"\u041d\u0438\u0435 \u043f\u0440\u0438\u0435\u043c\u0430\u043c\u0435 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442\u0442\u0430 \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u0441\u0438 \u0438\u0437\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u043d\u043e \u0441\u0435\u0440\u0438\u043e\u0437\u043d\u043e \u0438 \u043d\u0435 \u0441\u043f\u043e\u0434\u0435\u043b\u044f\u043c\u0435 \u0438\u043b\u0438 \u043f\u0440\u043e\u0434\u0430\u0432\u0430\u043c\u0435 \u043b\u0438\u0447\u043d\u0430\u0442\u0430 \u0412\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0430 \u0442\u0440\u0435\u0442\u0438 \u043b\u0438\u0446\u0430 \u0438\u043b\u0438 \u043d\u0435\u0441\u0432\u044a\u0440\u0437\u0430\u043d\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0410\u043d\u0433\u0430\u0436\u0438\u0440\u0430\u043c\u0435 \u0441\u0435 \u0434\u0430 \u0441\u043f\u0430\u0437\u0432\u0430\u043c\u0435 \u043f\u0440\u0430\u0432\u043e\u0442\u043e \u0412\u0438 \u043d\u0430 \u043b\u0438\u0447\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u0438 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u043d\u043e\u0441\u0442. \u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0430 \u0442\u0440\u0435\u0442\u0438 \u0441\u0442\u0440\u0430\u043d\u0438 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u044a\u0434\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0435\u043d\u0430 \u0441\u0430\u043c\u043e \u0438 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043e \u0430\u043a\u043e \u0442\u044f \u0435 \u0438\u0437\u0438\u0441\u043a\u0430\u043d\u0430 \u043e\u0442 \u043a\u043e\u043c\u043f\u0435\u0442\u0435\u043d\u0442\u043d\u0438 \u043e\u0440\u0433\u0430\u043d\u0438, \u043f\u043e \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0438\u0442\u0435 \u043f\u043e\u0441\u043e\u0447\u0435\u043d\u0438 \u0432 \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u0430\u0442\u0430 \u0443\u0440\u0435\u0434\u0431\u0430 \u043d\u0430 \u0420\u0435\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f."),g(j.a,{anchor:"data",title:"\u041a\u0430\u043a\u0432\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0441\u044a\u0431\u0438\u0440\u0430\u043c\u0435 \u043e\u0442 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438\u0442\u0435?"},"\u0417\u0430 \u0432\u0441\u0435\u043a\u0438 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b \u0441\u044a\u0431\u0438\u0440\u0430\u043c\u0435 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0432\u043a\u043b\u044e\u0447\u0432\u0430\u0449\u0430 \u0442\u0438\u043f \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e\u0442\u043e, \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430, \u0432\u0435\u0440\u0441\u0438\u044f \u0438 \u043c\u043e\u0434\u0435\u043b \u043d\u0430 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0438\u044f \u0431\u0440\u0430\u0443\u0437\u044a\u0440, \u043f\u0440\u0435\u043a\u0430\u0440\u0430\u043d\u043e \u0432\u0440\u0435\u043c\u0435 \u0432 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0438\u0442\u0435, \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438 \u0434\u0440. \u0417\u0430 \u0447\u0430\u0441\u0442 \u043e\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u0442\u0430, \u0438\u0437\u0432\u044a\u0440\u0448\u0435\u043d\u0438 \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442\u0442\u0430 \u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0430, \u0441\u0435 \u0437\u0430\u043f\u0430\u0437\u0432\u0430 \u0438 IP \u0430\u0434\u0440\u0435\u0441\u044a\u0442 \u043d\u0430 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u044f. \u041d\u0435 \u0441\u0435 \u0441\u044a\u0445\u0440\u0430\u043d\u044f\u0432\u0430 \u0434\u0435\u043c\u043e\u0433\u0430\u0444\u0441\u043a\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0437\u0430 \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u043e\u0442 \u0442\u0438\u043f\u0430 \u043d\u0430 \u043f\u043e\u043b, \u0432\u044a\u0437\u0440\u0430\u0441\u0442, \u0438\u0437\u043f\u043e\u0432\u044f\u0434\u0432\u0430\u043d\u0430 \u0440\u0435\u043b\u0438\u0433\u0438\u044f, \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0438, \u043c\u043e\u0434\u0435\u043b\u0438 \u0437\u0430 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0438 \u0434\u0440."),g(j.a,{anchor:"usage",title:"\u0417\u0430 \u043a\u0430\u043a\u0432\u0438 \u0446\u0435\u043b\u0438 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f\u0442\u0430?"},"\u0421\u044a\u0431\u0438\u0440\u0430\u043d\u0430\u0442\u0430 \u043e\u0442 \u043d\u0430\u0441 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0441\u0435 \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430 \u0437\u0430 \u043f\u043e\u0434\u043e\u0431\u0440\u044f\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0435\u043d\u0438\u0442\u0435 \u0443\u0441\u043b\u0443\u0433\u0438, \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0442\u0447\u0435\u0442\u0438 \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u0430 \u0432\u0440\u044a\u0437\u043a\u0430."),g(j.a,{anchor:"cookies",title:"\u0411\u0438\u0441\u043a\u0432\u0438\u0442\u043a\u0438"},'\u0418\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u043c\u0435 \u0431\u0438\u0441\u043a\u0432\u0438\u0442\u043a\u0438 ("Cookies"), \u0437\u0430 \u0434\u0430 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043c\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0441\u043a\u043e\u0442\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0438 \u0434\u0430 \u043f\u043e\u0434\u043e\u0431\u0440\u0438\u043c \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u043d\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442\u0438. \u0411\u0438\u0441\u043a\u0432\u0438\u0442\u043a\u0438\u0442\u0435 \u0441\u044a\u0434\u044a\u0440\u0436\u0430\u0442 \u043c\u0430\u043b\u043a\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u0432 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0442\u0435 \u043d\u0430 \u0412\u0430\u0448\u0438\u044f \u0443\u0435\u0431 \u0431\u0440\u0430\u0443\u0437\u044a\u0440, \u0438 \u043f\u043e \u043d\u0438\u043a\u0430\u043a\u044a\u0432 \u043d\u0430\u0447\u0438\u043d \u043d\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u043d\u0430\u0432\u0440\u0435\u0434\u044f\u0442 \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u0430 \u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0430 \u0412\u0438 \u0438\u043b\u0438 \u0434\u0430 \u0438\u043d\u0441\u0442\u0430\u043b\u0438\u0440\u0430\u0442 \u0432\u0440\u0435\u0434\u0435\u043d \u0441\u043e\u0444\u0442\u0443\u0435\u0440. \u0411\u0438\u0441\u043a\u0432\u0438\u0442\u043a\u0438\u0442\u0435 \u043c\u043e\u0433\u0430\u0442 \u0434\u0430 \u0431\u044a\u0434\u0430\u0442 \u0438\u0437\u0438\u0441\u043a\u0430\u043d\u0438 \u0438 \u0434\u043e\u0441\u0442\u044a\u043f\u0435\u043d\u0438 \u0441\u0430\u043c\u043e \u043e\u0442 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u0430, \u043e\u0442 \u043a\u043e\u0439\u0442\u043e \u0441\u0430 \u0438\u0437\u0434\u0430\u0434\u0435\u043d\u0438.'),g(j.a,{anchor:"partners",title:"\u041d\u0430 \u043a\u043e\u0433\u043e \u0441\u043f\u043e\u0434\u0435\u043b\u044f\u043c\u0435 \u0432\u0430\u0448\u0438\u0442\u0435 \u043b\u0438\u0447\u043d\u0438 \u0434\u0430\u043d\u043d\u0438?"},"\u041d\u0435 \u0441\u043f\u043e\u0434\u0435\u043b\u044f\u043c\u0435 \u0438\u043b\u0438 \u043f\u0440\u043e\u0434\u0430\u0432\u0430\u043c\u0435 \u043b\u0438\u0447\u043d\u0430\u0442\u0430 \u0412\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0430 \u0442\u0440\u0435\u0442\u0438 \u043b\u0438\u0446\u0430 \u0438\u043b\u0438 \u043d\u0435\u0441\u0432\u044a\u0440\u0437\u0430\u043d\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0412\u044a\u043f\u0440\u0435\u043a\u0438 \u0442\u043e\u0432\u0430 \u0443\u0435\u0431\u0441\u0430\u0439\u0442\u044a\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u0430, \u0438\u0437\u043f\u043e\u043b\u0437\u0432\u0430\u0439\u043a\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438 \u0443\u0441\u043b\u0443\u0433\u0438 \u043d\u0430 \u0434\u0440\u0443\u0433\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438. \u0421\u043f\u043e\u0434\u0435\u043b\u044f\u043d\u0435\u0442\u043e \u043d\u0430 \u043b\u0438\u0447\u043d\u0430\u0442\u0430 \u0412\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0441\u0435 \u043e\u0441\u044a\u0449\u0435\u0441\u0442\u0432\u044f\u0432\u0430 \u043a\u043e\u0433\u0430\u0442\u043e \u0412\u0438\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u0412\u0430\u0448\u0435\u0442\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435.",g("ul",null,g("li",null,"Google Ireland Ltd. - Google Analytics, Google Tag Manager -",g(O.a,{href:"https://safety.google/privacy/"},"https://safety.google/privacy/")))),g(j.a,{anchor:"preferences",title:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0443\u0441\u043b\u0443\u0433\u0438"},g("div",null,"\u0414\u0430\u0432\u0430\u043c\u0435 \u0432\u044a\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442 \u043d\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0438\u0442\u0435 \u0434\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u044f\u0442 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u043d\u0438\u044f\u0442\u0430 \u0441\u0438 \u0437\u0430 \u043d\u0430\u0448\u0438\u0442\u0435 \u0443\u0441\u043b\u0443\u0433\u0438.",g("br",null),"\u041a\u043b\u0438\u043a\u043d\u0435\u0442\u0435 \u043d\u0430 \u0431\u0443\u0442\u043e\u043d\u0430, \u0437\u0430 \u0434\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u043d\u0438\u044f\u0442\u0430 \u0441\u0438:"),g(y,{className:"mt-2",onClick:function(){return window.tarteaucitron.userInterface.openPanel()}},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u0443\u0441\u043b\u0443\u0433\u0438")),g(j.a,{anchor:"changes",title:"\u041f\u0440\u043e\u043c\u044f\u043d\u0430 \u0432 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u0442\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442"},"\u0417\u0430\u043f\u0430\u0437\u0432\u0430\u043c\u0435 \u0441\u0438 \u043f\u0440\u0430\u0432\u043e\u0442\u043e \u0434\u0430 \u0438\u0437\u0432\u044a\u0440\u0448\u0432\u0430\u043c\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0438 \u043f\u043e \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u0442\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442. \u041f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u0449\u0435 \u0431\u044a\u0434\u0430\u0442 \u043e\u043f\u043e\u0432\u0435\u0441\u0442\u044f\u0432\u0430\u043d\u0438 \u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0430\u0442\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430. \u041f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u044f\u0442 \u0441\u043b\u0435\u0434\u0432\u0430 \u043f\u0440\u043e\u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0434\u0430 \u0441\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0438\u0440\u0430 \u0437\u0430 \u0430\u043a\u0442\u0443\u0430\u043b\u043d\u0430\u0442\u0430 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0437\u0430 \u043f\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u043d\u043e\u0441\u0442.")),g("div",{className:"mb-3"},g("small",null,"\u0414\u0430\u0442\u0430 \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0430 \u043f\u0440\u043e\u043c\u044f\u043d\u0430: 13.03.2020\u0433."))))))}},zDhD:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r).a.createElement;a.a=function(e){var a=e.href,t=e.children;return n("a",{href:a,target:"_blank",rel:"noopener noreferrer"},t)}}},[["aeIR",0,2,1,3,4,5]]]);