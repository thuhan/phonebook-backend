(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t(1),c=t.n(r),o=t(15),u=t.n(o),i=(t(21),t(3)),s=t(4),d=t(5),l=t.n(d),b="/api/persons",j=function(){return l.a.get(b).then((function(e){return e.data}))},h=function(e){return l.a.post(b,e).then((function(e){return e.data}))},m=function(e,n){return l.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},f=function(e){l.a.delete("".concat(b,"/").concat(e))},O=function(e){var n=e.searchFilter,t=e.handleFilterChange;return Object(a.jsxs)("div",{children:["filter shown with ",Object(a.jsx)("input",{value:n,onChange:t})]})},p=function(e){var n=e.addPerson,t=e.newName,r=e.handleNameChange,c=e.newNumber,o=e.handleNumberChange;return Object(a.jsxs)("form",{onSubmit:n,children:[Object(a.jsxs)("div",{children:["name: ",Object(a.jsx)("input",{value:t,onChange:r})]}),Object(a.jsxs)("div",{children:["number: ",Object(a.jsx)("input",{value:c,onChange:o})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",children:"add"})})]})},v=function(e){var n=e.name,t=e.number,r=e.handleDelete;e.id;return Object(a.jsxs)("p",{children:[n," ",t," ",Object(a.jsx)("button",{onClick:r,children:"Delete"})]})},g=function(e){var n=e.persons,t=e.searchFilter,r=e.showAll,c=e.setPersons,o=r?n:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(a.jsx)("div",{children:o.map((function(e){return Object(a.jsx)(v,{name:e.name,number:e.number,handleDelete:function(){return function(e){var t=n.find((function(n){return n.id===e}));window.confirm("Delete ".concat(t.name,"?"))&&(f(e),c(n.filter((function(n){return n.id!==e}))))}(e.id)}},e.name)}))})},x=function(e){var n=e.notification;return null===n.message?null:Object(a.jsx)("div",{className:n.notiType,children:n.message})},w=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),u=Object(s.a)(o,2),d=u[0],l=u[1],b=Object(r.useState)(""),f=Object(s.a)(b,2),v=f[0],w=f[1],C=Object(r.useState)(""),y=Object(s.a)(C,2),N=y[0],k=y[1],S=Object(r.useState)(!0),T=Object(s.a)(S,2),F=T[0],D=T[1],P=Object(r.useState)({message:null,notiType:"success"}),A=Object(s.a)(P,2),E=A[0],I=A[1];Object(r.useEffect)((function(){j().then((function(e){return c(e)}))}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Phonebook"}),Object(a.jsx)(x,{notification:E}),Object(a.jsx)(O,{searchFilter:N,handleFilterChange:function(e){e.target.value?D(!1):D(!0),k(e.target.value)}}),Object(a.jsx)("h3",{children:"add a new"}),Object(a.jsx)(p,{addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===d.trim()}));n?n.number!==v?window.confirm("".concat(d," is already added to the phonebook, replace the old number with a new one?"))&&m(n.id,Object(i.a)(Object(i.a)({},n),{},{number:v})).then((function(e){c(t.map((function(t){return t.id!==n.id?t:e})));var a={message:"Updated ".concat(e.name),notiType:"success"};I(a),setTimeout((function(){return I(Object(i.a)(Object(i.a)({},E),{},{message:null}))}),5e3)})).catch((function(e){var a={message:"Information of ".concat(n.name," has already been removed from server"),notiType:"error"};I(a),setTimeout((function(){return I(Object(i.a)(Object(i.a)({},E),{},{message:null}))}),5e3),c(t.filter((function(e){return e.name!==n.name})))})):alert("".concat(d.trim()," is already added to the phonebook")):h({name:d,number:v}).then((function(e){var n={message:"Added ".concat(e.name),notiType:"success"};c(t.concat(e)),I(n),setTimeout((function(){return I(Object(i.a)(Object(i.a)({},E),{},{message:null}))}),5e3)})).catch((function(e){alert(e.response.data.error)}));l(""),w("")},newName:d,handleNameChange:function(e){return l(e.target.value)},newNumber:v,handleNumberChange:function(e){return w(e.target.value)}}),Object(a.jsx)("h2",{children:"Numbers"}),Object(a.jsx)(g,{persons:t,searchFilter:N,showAll:F,setPersons:c})]})};u.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.2fe2d5f6.chunk.js.map