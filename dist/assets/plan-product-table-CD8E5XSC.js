import{j as e,B as h,e as t,I as f}from"./index-DA_sWj7x.js";import{a as T,b as g,c as y,T as x}from"./table-head-custom-CHZjCMuG.js";import{I}from"./incrementer-button-CZkmblIv.js";import{T as a}from"./TableCell-wGSlznO8.js";const C=({products:n,quantity:m,onDecrease:j,onIncrease:r,removeItem:b})=>{const s=[{id:"planId",label:"#",width:40,align:"center"},{id:"name",label:"Product Name"},{id:"quantity",label:"Qty",width:200}];return n!=null&&n.length&&s.push({id:"action",width:10}),e.jsx(h,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{borderRadius:1,overflow:"hidden",border:i=>`solid 1px ${i.vars.palette.divider}`},children:e.jsxs(T,{size:"medium",children:[e.jsx(g,{headLabel:s}),e.jsx(y,{children:n.length?n==null?void 0:n.map((i,l)=>e.jsxs(x,{children:[e.jsxs(a,{align:"center",children:[" ",l+1||(i==null?void 0:i.id)," "]}),e.jsxs(a,{children:[" ",i==null?void 0:i.name," "]}),e.jsx(a,{children:e.jsx(h,{sx:{width:88,textAlign:"right"},children:e.jsx(I,{quantity:i.quantity,onDecrease:()=>j(l),onIncrease:()=>r(l)})})}),e.jsx(a,{children:e.jsx(t,{sx:{color:"error.main"},onClick:b,children:e.jsx(f,{icon:"solar:trash-bin-trash-bold"})})})]},i==null?void 0:i.id)):e.jsxs(x,{children:[e.jsxs(a,{align:"center",children:[" ",n==null?void 0:n.id," "]}),e.jsxs(a,{children:[" ",n==null?void 0:n.name," "]}),e.jsx(a,{children:m})]})})]})})};export{C as P};
