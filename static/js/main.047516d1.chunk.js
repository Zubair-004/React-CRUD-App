(this["webpackJsonptask-1"]=this["webpackJsonptask-1"]||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(23),s=n.n(c),i=n(13),j=n(5),d=n(12),u=n(26),l=function(e,t){switch(t.type){case"REMOVE_USER":return{users:e.users.filter((function(e){return e.id!==t.payload}))};case"ADD_USER":return{users:[t.payload].concat(Object(u.a)(e.users))};case"EDIT_USER":var n=t.payload;return{users:e.users.map((function(e){return e.id===n.id?n:e}))};default:return e}},b=n(2),o={users:[]},O=Object(r.createContext)(o),h=function(e){var t=e.children,n=Object(r.useReducer)(l,o),a=Object(d.a)(n,2),c=a[0],s=a[1];return Object(b.jsx)(O.Provider,{value:{users:c.users,removeUser:function(e){s({type:"REMOVE_USER",payload:e})},addUser:function(e){s({type:"ADD_USER",payload:e})},editUser:function(e){s({type:"EDIT_USER",payload:e})}},children:t})},x=n(43),m=n(44),p=n(45),f=n(46),g=n(42),y=n(40),v=n(41),S=function(){var e=Object(r.useContext)(O),t=e.users,n=e.removeUser;return Object(b.jsx)(y.a,{children:t.map((function(e){return Object(b.jsxs)(v.a,{className:"d-flex",children:[Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"130%"},children:[Object(b.jsxs)("span",{style:{whiteSpace:"nowrap"},children:["Name: ",e.name]}),Object(b.jsxs)("span",{style:{whiteSpace:"nowrap"},children:["Gender: ",e.gender]}),Object(b.jsxs)("span",{style:{whiteSpace:"nowrap"},children:["Age: ",e.age]})]}),Object(b.jsxs)("div",{style:{marginLeft:"5rem",display:"flex"},children:[Object(b.jsx)(i.b,{className:"btn btn-warning",style:{textDecoration:"none",height:"fit-content"},to:"/edit/".concat(e.id),children:"Edit"}),Object(b.jsx)(g.a,{onClick:function(){return n(e.id)},color:"danger",style:{marginLeft:"0.5rem",height:"fit-content"},children:"Delete"})]})]})}))})},C=n(47),E=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(d.a)(c,2),i=s[0],j=s[1],u=Object(r.useState)(""),l=Object(d.a)(u,2),o=l[0],h=l[1],y=Object(r.useContext)(O).addUser;return Object(b.jsxs)("div",{style:{display:"flex"},children:[Object(b.jsx)("div",{style:{marginRight:"2rem"},children:Object(b.jsx)(S,{})}),Object(b.jsxs)(x.a,{onSubmit:function(e){e.preventDefault();var t={id:Object(C.a)(),name:n,gender:i,age:o};y(t)},children:[Object(b.jsxs)(m.a,{style:{width:"250%"},children:[Object(b.jsx)(p.a,{children:"Name*"}),Object(b.jsx)(f.a,{required:!0,type:"text",value:n,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)(p.a,{children:"Gender*"}),Object(b.jsx)(f.a,{required:!0,type:"text",value:i,onChange:function(e){return j(e.target.value)}}),Object(b.jsx)(p.a,{children:"Age*"}),Object(b.jsx)(f.a,{required:!0,type:"number",value:o,onChange:function(e){return h(e.target.value)},min:"0"}),Object(b.jsx)("br",{})]}),Object(b.jsx)(g.a,{type:"submit",children:"Add"})]})]})},U=n(16),w=n(20),D=function(e){var t=Object(r.useState)({id:"",name:"",gender:"",age:""}),n=Object(d.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(O),u=s.users,l=s.editUser,o=Object(j.f)(),h=e.match.params.id;Object(r.useEffect)((function(){var e=h,t=u.find((function(t){return t.id===e}));c(t)}),[h,u]);var y=function(e){c(Object(w.a)(Object(w.a)({},a),{},Object(U.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)(x.a,{onSubmit:function(e){l(a),o.push("/")},children:[Object(b.jsxs)(m.a,{children:[Object(b.jsx)(p.a,{children:"Name*"}),Object(b.jsx)(f.a,{required:!0,type:"text",name:"name",value:a.name,onChange:y}),Object(b.jsx)(p.a,{children:"Gender*"}),Object(b.jsx)(f.a,{required:!0,type:"text",name:"gender",value:a.gender,onChange:y}),Object(b.jsx)(p.a,{children:"Age*"}),Object(b.jsx)(f.a,{required:!0,type:"number",name:"age",value:a.age,onChange:y,min:"0"}),Object(b.jsx)("br",{})]}),Object(b.jsx)(g.a,{type:"submit",children:"Update"}),Object(b.jsx)(i.b,{to:"/",style:{marginLeft:"1rem"},className:"btn btn-danger",children:"Cancel"})]})};n(38);var R=function(){return Object(b.jsx)("div",{style:{maxWidth:"30rem",margin:"4rem auto"},children:Object(b.jsx)(h,{children:Object(b.jsx)(i.a,{children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",component:E}),Object(b.jsx)(j.a,{path:"/edit/:id",component:D})]})})})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(R,{})}),document.getElementById("root")),q()}},[[39,1,2]]]);
//# sourceMappingURL=main.047516d1.chunk.js.map