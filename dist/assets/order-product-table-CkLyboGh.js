import{j as e,B as d,S as m,v as b,e as j,I as y}from"./index-s58VYgz3.js";import{b as n}from"./format-number-CB29iT6K.js";import{a as f,b as u,c as p,T as w}from"./table-head-custom-CoBMyUZ2.js";import{I as T}from"./incrementer-button-Bty2gkKK.js";import{T as i}from"./TableCell-DSUpTvC0.js";const B=({products:l,isDetail:a,onDecrease:o,onIncrease:h,removeItem:x})=>{const t=[{id:"orderNumber",label:"#",width:40,align:"center"},{id:"name",label:"Product Name",width:160},{id:"color",label:"Color",width:80},{id:"rate",label:"Rate",width:120},{id:"totalAmount",label:"Qty",width:100},{id:"status",label:"Total",width:140}];return a||t.push({id:"action",width:10}),e.jsx(d,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{borderRadius:1,overflow:"hidden",border:r=>`solid 1px ${r.vars.palette.divider}`},children:e.jsxs(f,{size:"medium",children:[e.jsx(u,{headLabel:t}),e.jsx(p,{children:l==null?void 0:l.map((r,s)=>e.jsxs(w,{children:[e.jsxs(i,{align:"center",children:[" ",r.productId," "]}),e.jsxs(i,{children:[" ",a?`${r.product.name}`:r.name," "]}),e.jsx(i,{children:" x "}),e.jsx(i,{align:a?"inherit":"center",children:a?`${n(r.product.price)}`:e.jsx(m,{sx:{p:.5,borderRadius:1,typography:"subtitle2",border:c=>`solid 1px ${b(c.vars.palette.grey["500Channel"],.2)}`},children:n(r.price)})}),e.jsx(i,{children:a?`x${r.quantity}`:e.jsx(d,{sx:{width:88,textAlign:"right"},children:e.jsx(T,{quantity:r.quantity,onDecrease:()=>o(s),onIncrease:()=>h(s)})})}),e.jsx(i,{children:a?`${n(r.product.price*r.quantity)}`:n(r.price*r.quantity)}),!a&&e.jsx(i,{children:e.jsx(j,{sx:{color:"error.main"},onClick:x,children:e.jsx(y,{icon:"solar:trash-bin-trash-bold"})})})]},a?`${r.productId}`:`${r.id}`))})]})})};export{B as O};
