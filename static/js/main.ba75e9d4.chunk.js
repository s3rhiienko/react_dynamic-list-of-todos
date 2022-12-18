(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),o=(c(10),c(11),c(5)),d=c.n(o),i=c(0),r=Object(l.memo)((function(e){var t=e.todos,c=e.selectedTodo,s=e.onSelectTodo;return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":(null===c||void 0===c?void 0:c.id)===e.id}),children:[Object(i.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(i.jsx)("td",{className:"is-vcentered",children:Object(i.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(i.jsx)("i",{className:"fas fa-check"})})}):Object(i.jsx)("td",{className:"is-vcentered"}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:(null===c||void 0===c?void 0:c.id)===e.id?"far fa-eye-slash":"far fa-eye"})})})})]},e.id)}))})]})})),j=Object(l.memo)((function(e){var t=e.query,c=e.setQuery,s=e.option,a=e.setOption;return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){return a(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})}));function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var h,m=Object(l.memo)((function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})})),u=Object(l.memo)((function(e){var t=e.todo,c=e.onTodo,s=Object(l.useState)(null),a=Object(n.a)(s,2),o=a[0],d=a[1];return Object(l.useEffect)((function(){var e;(e=t.userId,b("/users/".concat(e))).then(d)}),[]),Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),o?Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(i.jsx)("strong",{className:t.completed?"has-text-success":"has-text-danger",children:t.completed?"Done":"Planned"})," by ",Object(i.jsx)("a",{href:"mailto:".concat(o.email),children:o.name})]})]})]}):Object(i.jsx)(m,{})]})}));!function(e){e.active="active",e.completed="completed",e.all="all"}(h||(h={}));var O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(null),o=Object(n.a)(a,2),d=o[0],O=o[1],x=Object(l.useState)(""),f=Object(n.a)(x,2),p=f[0],v=f[1],N=Object(l.useState)("all"),y=Object(n.a)(N,2),g=y[0],k=y[1];Object(l.useEffect)((function(){b("/todos").then(s)}),[]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(j,{query:p,setQuery:v,option:g,setOption:k})}),Object(i.jsx)("div",{className:"block",children:c.length?Object(i.jsx)(r,{todos:c.filter((function(e){var t=e.title.toLowerCase().includes(p.toLowerCase());switch(g){case h.active:return!e.completed&&t;case h.completed:return e.completed&&t;default:return t}})),onSelectTodo:O,selectedTodo:d}):Object(i.jsx)(m,{})})]})})}),d&&Object(i.jsx)(u,{todo:d,onTodo:O})]})};a.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ba75e9d4.chunk.js.map