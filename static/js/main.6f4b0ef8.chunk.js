(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{63:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var s=n(45),i=n.n(s),r=n(14),c=n(47),o=n(48),a=n(49),l=n(54),b=n(0),u=n.n(b),j=(n(63),n(102)),d=n(100),h=n(99),O=n(101),f=n(96),v=n(24),x=n(97),p=n(3),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],G=function(e){Object(a.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={isVisible:!1,visibleGoods:m},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Goods"}),Object(p.jsxs)(h.a,{sx:{m:2},children:["Goods available: ",m.length]}),Object(p.jsx)("br",{}),!1===this.state.isVisible&&Object(p.jsx)(d.a,{type:"button",onClick:function(){e.setState((function(e){return{isVisible:!e.isVisible}}))},children:"Start"}),this.state.isVisible&&Object(p.jsxs)(h.a,{sx:{ms:1,mb:0},children:[Object(p.jsx)(O.a,{children:this.state.visibleGoods.map((function(e){return Object(p.jsx)(f.a,{sx:{pt:0},children:Object(p.jsx)(x.a,{children:e})},e)}))}),Object(p.jsxs)(j.a,{sx:{color:v.a[500]},children:[Object(p.jsx)(d.a,{onClick:function(){return e.setState((function(e){return{visibleGoods:Object(r.a)(e.visibleGoods).reverse()}}))},children:"Reverse"}),Object(p.jsx)(d.a,{onClick:function(){return e.setState((function(e){var t=Object(r.a)(e.visibleGoods);return t.sort((function(e,t){return e.localeCompare(t)})),{visibleGoods:t}}))},children:"Sort alphabetically"}),Object(p.jsx)(d.a,{onClick:function(){return e.setState((function(){return{visibleGoods:[].concat(m)}}))},children:"Reset"}),Object(p.jsx)(d.a,{onClick:function(){return e.setState((function(e){var t=Object(r.a)(e.visibleGoods);return t.sort((function(e,t){return e.length-t.length})),{visibleGoods:t}}))},children:"Sort by Length"})]})]})]})}}]),n}(u.a.Component),g=G;i.a.render(Object(p.jsx)(g,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.6f4b0ef8.chunk.js.map