(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(e,t,n){},124:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var s,c=n(0),a=n(69),i=n.n(a),r=(n(79),n(26)),o=n(3),j=n(14),l=(n(80),n(1)),u=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),o=i[0],u=i[1];return Object(l.jsx)("div",{className:"join-container",children:Object(l.jsxs)("div",{className:"join-box",children:[Object(l.jsx)("div",{className:"heading",children:"CHAT APP"}),Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("label",{htmlFor:"input-name",className:"input-label",children:"Name"}),Object(l.jsx)("input",{id:"input-name",type:"text",className:"input",onChange:function(e){s(e.target.value)}})]}),Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("label",{htmlFor:"input-room",className:"input-label",children:"Room"}),Object(l.jsx)("input",{id:"input-room",type:"text",className:"input",onChange:function(e){u(e.target.value)}})]}),Object(l.jsx)(r.b,{onClick:function(e){return n&&o?null:e.preventDefault()},to:"/chat?name=".concat(n,"&room=").concat(o),children:Object(l.jsx)("buttom",{className:"sign-in",type:"submit",children:"Sign In"})})]})})},m=n(74),b=(n(86),n(71)),d=n.n(b),O=n(72),h=n.n(O),x=(n(121),n(42)),p=n(27),f=function(e){var t=e.room;return Object(l.jsxs)("div",{className:"infobar",children:[Object(l.jsxs)("div",{className:"left-inner-container",children:[Object(l.jsx)(x.a,{className:"online-icon",icon:p.a,alt:"online icon"}),Object(l.jsx)("h3",{children:t})]}),Object(l.jsx)("div",{className:"right-inner-container",children:Object(l.jsx)("a",{href:"/",children:Object(l.jsx)(x.a,{className:"close-icon",icon:p.b,alt:"close icon"})})})]})},g=(n(124),n(73)),N=n.n(g),v=(n(146),n(43)),y=n.n(v),C=function(e){var t=e.message,n=t.user,s=t.text,c=!1,a=e.name.trim().toLowerCase();return n===a&&(c=!0),c?Object(l.jsx)("div",{className:"messageContainer",children:Object(l.jsxs)("div",{className:"messageGroup end",children:[Object(l.jsx)("div",{className:"messageBox blue",children:Object(l.jsx)("p",{className:"messageText white",children:y.a.emojify(s)})}),Object(l.jsx)("p",{className:"sentText pr-10",children:a})]})}):Object(l.jsx)("div",{className:"messageContainer",children:Object(l.jsxs)("div",{className:"messageGroup start",children:[Object(l.jsx)("div",{className:"messageBox light",children:Object(l.jsx)("p",{className:"messageText dark",children:y.a.emojify(s)})}),Object(l.jsx)("p",{className:"sentText pl-10",children:n})]})})},S=function(e){var t=e.messages,n=e.name;return Object(l.jsx)(N.a,{className:"messages",children:t.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(C,{message:e,name:n})},t)}))})},k=(n(147),function(e){var t=e.message,n=e.setMessage,s=e.sendMessage;return Object(l.jsxs)("form",{action:"",className:"form",children:[Object(l.jsx)("input",{type:"text",className:"input",placeholder:"Type a message...",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?s(e):null}}),Object(l.jsx)("button",{className:"submit",onClick:function(e){s(e)},children:"Send"})]})}),T=function(e){var t=e.location,n=Object(c.useState)(""),a=Object(j.a)(n,2),i=a[0],r=a[1],o=Object(c.useState)(""),u=Object(j.a)(o,2),b=u[0],O=u[1],x=Object(c.useState)([]),p=Object(j.a)(x,2),g=p[0],N=p[1],v=Object(c.useState)([]),y=Object(j.a)(v,2),C=y[0],T=y[1],M="https://chat-app-diego-germiniani.herokuapp.com/";Object(c.useEffect)((function(){var e=d.a.parse(t.search),n=e.name,c=e.room;s=h()(M),r(n),O(c),s.emit("join",{name:n,room:c},(function(e){return e?alert(e):null}))}),[M,t.search]),Object(c.useEffect)((function(){s.on("message",(function(e){T([].concat(Object(m.a)(C),[e]))}))}),[C]);return console.log(g,C),Object(l.jsx)("div",{className:"chat-container",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(f,{room:b}),Object(l.jsx)(S,{messages:C,name:i}),Object(l.jsx)(k,{message:g,setMessage:N,sendMessage:function(e){e.preventDefault(),g&&s.emit("sendMessage",g,(function(){return N("")}))}})]})})},M=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,component:u}),Object(l.jsx)(o.a,{path:"/chat",exact:!0,component:T})]})})};i.a.render(Object(l.jsx)(M,{}),document.querySelector("#root"))},79:function(e,t,n){},80:function(e,t,n){},86:function(e,t,n){}},[[149,1,2]]]);
//# sourceMappingURL=main.75fd2c7e.chunk.js.map