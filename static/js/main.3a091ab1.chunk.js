(this["webpackJsonplist-phone-numberss"]=this["webpackJsonplist-phone-numberss"]||[]).push([[0],{20:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var r,a,i,o,c=e(0),d=e(12),u=(e(20),e(7)),b=e(8),p=e(2),l=e(3),s=l.a.div(r||(r=Object(p.a)(["\n        background-color: #fff6bb; \n        color: #333;\n        border: none;\n        font-weight: 700;\n        text-align: center;\n        margin: 20px auto;\n        padding: 7px;\n        width: 200px;\n        outline: none;\n"]))),x=e(1),h=function(n){var t=n.phoneNumber,e=n.handleDrag,r=n.handleDrop;return Object(x.jsx)(s,{draggable:!0,id:t,onDragOver:function(n){return n.preventDefault()},onDragStart:e,onDrop:r,children:t})},g=l.a.div(a||(a=Object(p.a)(["\n\tdisplay: flex;\n\twidth: 400px;\n"]))),j=l.a.input(i||(i=Object(p.a)(["\n\twidth: 250px;\n\tmargin-right: 20px;\n\tbackground: #fff;\n\tborder: 1px solid #dfe1e5;\n\tbox-shadow: none;\n\tborder-radius: 24px;\n\tz-index: 3;\n\theight: 44px;\n\tpadding: 0 16px;\n\theight: 36px;\n\tcolor: rgba(0, 0, 0, 0.87);\n\toutline: none;\n\tfont-size: 16px;\n"]))),f=l.a.button(o||(o=Object(p.a)(["\n\tbackground-color: #000;\n\tborder-radius: 16px;\n\tcolor: #fff;\n\tfont-size: 14px;\n\tpadding: 0 16px;\n\theight: 36px;\n\twidth: 150px;\n\ttext-align: center;\n\tcursor: pointer;\n\toutline: none;\n\t&:disabled {\n\t\topacity: 0.4;\n\t\tcursor: not-allowed;\n\t}\n"])));function O(n){var t=n.match(/^(\d{3})(\d{3})(\d{4})$/);return t?"("+t[1]+") "+t[2]+"-"+t[3]:null}var m,v,w,D=function(n){var t=n.number,e=n.setNumber,r=n.addPhoneNumber;return Object(x.jsxs)(g,{children:[Object(x.jsx)(j,{value:t,onChange:function(n){return e(n.target.value.replace(/\D/g,"").slice(0,10))}}),Object(x.jsx)(f,{disabled:10!==t.length,onClick:r,children:"Enter"})]})},k=l.a.div(m||(m=Object(p.a)(["\n\tmin-height: 100vh;\n\tpadding: 0 0.5rem;\n\tmargin: 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tbackground-color: #fff;\n"]))),N=l.a.div(v||(v=Object(p.a)(["\n\twidth: 400px;\n\tmargin: 16px;\n\tpadding: 16px;\n"]))),y=l.a.h1(w||(w=Object(p.a)(["\n\tcolor: #e0b115;\n\tbackground: #000;\n\tpadding: 5px 30px;\n\tmargin: 50px 0;\n"]))),S=function(){var n=Object(c.useState)(),t=Object(b.a)(n,2),e=t[0],r=t[1],a=Object(c.useState)(""),i=Object(b.a)(a,2),o=i[0],d=i[1],p=Object(c.useState)([]),l=Object(b.a)(p,2),s=l[0],g=l[1],j=function(n){r(n.currentTarget.id)},f=function(n){var t=Object(u.a)(s),r=s.findIndex((function(n){return n===e})),a=s.findIndex((function(t){return t===n.currentTarget.id})),i=s[r];t[r]=s[a],t[a]=i,g(Object(u.a)(t))};return Object(x.jsxs)(k,{children:[Object(x.jsx)(y,{children:"Contact List"}),Object(x.jsx)(D,{number:o,setNumber:d,addPhoneNumber:function(){o&&(g([O(o)].concat(Object(u.a)(s))),d(""))}}),Object(x.jsx)(N,{children:s.map((function(n,t){return Object(x.jsx)(h,{phoneNumber:n,handleDrag:j,handleDrop:f},t)}))})]})};Object(d.render)(Object(x.jsx)(S,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.3a091ab1.chunk.js.map