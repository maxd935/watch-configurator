(this["webpackJsonpfront-configurator"]=this["webpackJsonpfront-configurator"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('{"collection":["steel","gold"],"dial":["red","brown","yellow","purple"],"size":["sm","xl"],"strap":[{"material":"leather","style":["thin"],"color":["purple","green","red","pink","brown","blue","gray","dark-blue","white","black"]},{"material":"rubber","style":["thin","large"],"color":["dark-blue","white","black","orange","red","gray","kaki","brown"]}]}')},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(4),l=c.n(i),a=(c(10),c(2)),s=(c(11),c(12),c.p+"static/media/image-placeholder.3c0a422b.jpg"),j=c(0),o=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:s})})},d=r.a.createContext();function b(e){var t=e.name,c=e.strap,r=Object(n.useContext)(d),i=Object(a.a)(r,2),l=(i[0],i[1]);console.log(t);return Object(j.jsxs)("div",{className:"px-2",onChange:function(){console.log(c),c?l(c):console.log("")},children:[Object(j.jsx)("label",{children:t}),Object(j.jsx)("input",{type:"radio",name:"collection",value:t})]},t)}function u(e){var t=e.data,c=Object(n.useContext)(d),r=Object(a.a)(c,2),i=r[0];r[1];return t.collection.map((function(e){return console.log(e)})),Object(j.jsxs)("div",{className:"flex flex-col flex-grow",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Collection"}),Object(j.jsx)("div",{className:"flex",children:t.collection.map((function(e){return Object(j.jsx)(b,{name:e})}))})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Dial"}),Object(j.jsx)("div",{className:"flex",children:t.dial.map((function(e){return Object(j.jsx)(b,{name:e})}))})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Material"}),Object(j.jsx)("div",{className:"flex",children:t.strap.map((function(e){return Object(j.jsx)(b,{name:e.material,strap:e})}))})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Size"}),Object(j.jsx)("div",{className:"flex",children:t.size.map((function(e){return Object(j.jsx)(b,{name:e})}))})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Style"}),Object(j.jsx)("div",{className:"flex",children:i.style.map((function(e){return Object(j.jsx)(b,{name:e})}))})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Colour"}),Object(j.jsx)("div",{className:"flex",children:i.color.map((function(e){return Object(j.jsx)(b,{name:e})}))})]})]})}var x=c(5),O=function(){var e=Object(n.useState)({}),t=Object(a.a)(e,2);t[0],t[1];return Object(n.useEffect)((function(){}),[]),Object(j.jsxs)("div",{className:"h-screen flex justify-center items-center",children:[Object(j.jsx)(o,{}),Object(j.jsx)(u,{data:x})]})};var h=function(){var e=Object(n.useState)({material:"leather",style:["thin"],color:["purple","green","red","pink","brown","blue","gray","dark-blue","white","black"]}),t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(j.jsx)(d.Provider,{value:[c,r],children:Object(j.jsx)(O,{})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,l=t.getTTFB;c(e),n(e),r(e),i(e),l(e)}))};l.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),f()}],[[14,1,2]]]);
//# sourceMappingURL=main.0e760f5d.chunk.js.map