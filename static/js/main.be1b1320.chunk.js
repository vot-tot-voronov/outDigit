(this.webpackJsonpoutdigit=this.webpackJsonpoutdigit||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(4),l=c.n(n),s=c(2),o=c(0),r=function(e){var t=e.active,c=e.setActive,n=Object(a.useState)([]),l=Object(s.a)(n,2),r=l[0],i=l[1],d=Object(a.useState)([]),u=Object(s.a)(d,2),m=u[0],_=u[1],j=Object(a.useState)(!1),b=Object(s.a)(j,2),h=b[0],O=b[1],x=Object(a.useState)(""),v=Object(s.a)(x,2),p=v[0],f=v[1],N=Object(a.useState)(!0),k=Object(s.a)(N,2),g=k[0],B=k[1],C=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e,t,c;null===(e=C.current)||void 0===e||e.setSelectionRange((null===(t=C.current)||void 0===t?void 0:t.value.length)-2,(null===(c=C.current)||void 0===c?void 0:c.value.length)-2)}),[p]),Object(o.jsx)("div",{className:t?"modal active":"modal",onClick:function(){c(!1),_([]),i([]),f("")},children:Object(o.jsx)("div",{className:"modal__wrapper",children:Object(o.jsxs)("div",{className:t?"modal__content active":"modal__content",onClick:function(e){return e.stopPropagation()},children:[Object(o.jsx)("button",{className:"modal__close",onClick:function(){c(!1),_([]),i([]),f("")}}),Object(o.jsx)("h1",{className:"modal__title",children:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442"}),Object(o.jsx)("p",{className:"modal__text",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0433\u0430\u0441\u0438\u0442\u044c \u0438\u043f\u043e\u0442\u0435\u043a\u0443 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u043e. \u0420\u0430\u0437\u043c\u0435\u0440 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u0432\u044b\u0447\u0435\u0442\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 13% \u043e\u0442 \u0441\u0432\u043e\u0435\u0433\u043e \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0433\u043e\u0434\u043e\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430."}),Object(o.jsxs)("div",{className:"modal__rubBlock",children:[Object(o.jsx)("label",{htmlFor:"modal__rub",className:"modal__labelRub",children:"\u0412\u0430\u0448\u0430 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u043c\u0435\u0441\u044f\u0446"}),Object(o.jsx)("input",{ref:C,type:"text",id:"modal__rub",className:h?"modal__inputRub modal__inputRub--error":"modal__inputRub",name:"rub",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",onChange:function(e){return function(e,t){var c=/\d+/;null===e.match(c)?t(""):t("".concat(e.match(c)," \u20bd"))}(e.target.value,f)},value:p}),Object(o.jsx)("p",{className:h?"modal__error modal__error--true":"modal__error modal__error--false",children:"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"})]}),Object(o.jsx)("button",{className:"modal__calc",onClick:function(){""===p?O(!0):(h&&O(!1),_(function(e,t){if("0"===e.split("")[0])return[];var c=[],a=12*parseInt(e.match(/\d+/).join(""))*.13;if(a>=26e4)return c.push(26e4),t(new Array(c.length).fill(!1)),c;for(var n=Math.trunc(26e4/a),l=26e4%a!==0?26e4-a*n:0,s=0;s<n;s++)c.push(a);return 0!==l&&c.push(l),t(new Array(c.length).fill(!1)),c}(p,i)))},children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"}),0===m.length?Object(o.jsx)(o.Fragment,{}):Object(o.jsxs)("div",{className:"modal__sum",children:[Object(o.jsx)("p",{className:"modal__sumTitle",children:"\u0418\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043d\u0435\u0441\u0442\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u044b\u0445:"}),m.map((function(e,t){return Object(o.jsxs)("div",{className:"modal__checkbox-line",children:[Object(o.jsx)("input",{type:"checkbox",id:"modal__checkbox".concat(t+1),className:"modal__checkbox",name:"year: ".concat(t+1),value:t+1,onChange:function(){return function(e,t,c){c(t.map((function(t,c){return c===e?!t:t})))}(t,r,i)},checked:r[t]}),Object(o.jsxs)("label",{htmlFor:"modal__checkbox".concat(t+1),children:[e.toLocaleString()," \u0440\u0443\u0431\u043b\u0435\u0439",Object(o.jsxs)("span",{className:"modal__checkbox--span",children:["\xa0\u0432 ",t+1,"-\u044b\u0439 \u0433\u043e\u0434"]})]})]},t)}))]}),Object(o.jsxs)("div",{className:"modal__decrease",children:[Object(o.jsx)("p",{className:"modal__decreaseText",children:"\u0427\u0442\u043e \u0443\u043c\u0435\u043d\u0448\u044c\u0448\u0430\u0435\u043c?"}),Object(o.jsxs)("div",{className:"modal__decreaseBlock",children:[Object(o.jsx)("button",{onClick:function(){return B(!0)},className:g?"modal__decreaseBtn modal__decreaseBtn--active":"modal__decreaseBtn",children:"\u041f\u043b\u0430\u0442\u0451\u0436"}),Object(o.jsx)("button",{onClick:function(){return B(!1)},className:g?"modal__decreaseBtn":"modal__decreaseBtn modal__decreaseBtn--active",children:"\u0421\u0440\u043e\u043a"})]})]}),Object(o.jsx)("button",{className:"modal__add",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})})},i=(c(10),function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)("button",{className:"main__button",onClick:function(){return n(!0)},children:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442"}),Object(o.jsx)(r,{active:c,setActive:n})]})});l.a.render(Object(o.jsx)(i,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.be1b1320.chunk.js.map