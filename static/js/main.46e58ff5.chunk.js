(this["webpackJsonplist-phone-numberss"]=this["webpackJsonplist-phone-numberss"]||[]).push([[0],{21:function(n,t,e){},25:function(n,t,e){"use strict";e.r(t);var r,o,a,i,c=e(0),d=e(13),u=(e(21),e(11)),b=e(10),p=e(7),h=e(2),l=e(3),s=l.a.div(r||(r=Object(h.a)(["\n        background-color: #fff6bb; \n        color: #333;\n        border: none;\n        font-weight: 700;\n        text-align: center;\n        margin: 20px auto;\n        padding: 7px;\n        width: 200px;\n        outline: none;\n"]))),f=e(1),g=function(n){var t=n.phoneNumber,e=n.handleDrag,r=n.handleDrop;return Object(f.jsx)(s,{draggable:!0,id:t,onDragOver:function(n){return n.preventDefault()},onDragStart:e,onDrop:r,children:t})},x=l.a.div(o||(o=Object(h.a)(["\n\tdisplay: flex;\n\twidth: 400px;\n"]))),j=l.a.input(a||(a=Object(h.a)(["\n\twidth: 250px;\n\tmargin-right: 20px;\n\tbackground: #fff;\n\tborder: 1px solid #dfe1e5;\n\tbox-shadow: none;\n\tborder-radius: 24px;\n\tz-index: 3;\n\theight: 44px;\n\tpadding: 0 16px;\n\theight: 36px;\n\tcolor: rgba(0, 0, 0, 0.87);\n\toutline: none;\n\tfont-size: 16px;\n"]))),m=l.a.button(i||(i=Object(h.a)(["\n\tbackground-color: #000;\n\tborder-radius: 16px;\n\tcolor: #fff;\n\tfont-size: 14px;\n\tpadding: 0 16px;\n\theight: 36px;\n\twidth: 150px;\n\ttext-align: center;\n\tcursor: pointer;\n\toutline: none;\n\t&:disabled {\n\t\topacity: 0.4;\n\t\tcursor: not-allowed;\n\t}\n"])));function O(n){var t=n.match(/^(\d{3})(\d{3})(\d{4})$/);return t?"("+t[1]+") "+t[2]+"-"+t[3]:null}var v,N,w,D=function(n){var t=n.number,e=n.setNumber,r=n.addPhoneNumber;return Object(f.jsxs)(x,{children:[Object(f.jsx)(j,{value:t,onChange:function(n){return e(n.target.value.replace(/\D/g,"").slice(0,10))}}),Object(f.jsx)(m,{disabled:10!==t.length,onClick:r,children:"Enter"})]})},k=l.a.div(v||(v=Object(h.a)(["\n\tmin-height: 100vh;\n\tpadding: 0 0.5rem;\n\tmargin: 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tbackground-color: #fff;\n"]))),y=l.a.div(N||(N=Object(h.a)(["\n\twidth: 400px;\n\tmargin: 16px;\n\tpadding: 16px;\n"]))),S=l.a.h1(w||(w=Object(h.a)(["\n\tcolor: #e0b115;\n\tbackground: #000;\n\tpadding: 5px 30px;\n\tmargin: 50px 0;\n"]))),z=function(){var n=Object(c.useState)(),t=Object(p.a)(n,2),e=t[0],r=t[1],o=Object(c.useState)(""),a=Object(p.a)(o,2),i=a[0],d=a[1],h=Object(c.useState)([]),l=Object(p.a)(h,2),s=l[0],x=l[1],j=function(n){r(n.currentTarget.id)},m=function(n){var t=s.find((function(n){return n.phoneNumber===e})),r=s.find((function(t){return t.phoneNumber===n.currentTarget.id})),o=t.order,a=r.order,i=s.map((function(t){return t.phoneNumber===e&&(t.order=a),t.phoneNumber===n.currentTarget.id&&(t.order=o),t}));x(i)};return Object(f.jsxs)(k,{children:[Object(f.jsx)(S,{children:"Contact List"}),Object(f.jsx)(D,{number:i,setNumber:d,addPhoneNumber:function(){if(i){var n={phoneNumber:O(i),order:1},t=Object(b.a)(s);for(var e in t)t[e]=Object(u.a)(Object(u.a)({},t[e]),{},{order:t[e].order+1});x([n].concat(Object(b.a)(t))),d("")}}}),Object(f.jsx)(y,{children:s.sort((function(n,t){return n.order-t.order})).map((function(n){return Object(f.jsx)(g,{phoneNumber:n.phoneNumber,handleDrag:j,handleDrop:m},n.phoneNumber)}))})]})};Object(d.render)(Object(f.jsx)(z,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.46e58ff5.chunk.js.map