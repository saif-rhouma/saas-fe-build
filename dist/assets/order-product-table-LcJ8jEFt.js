import{j as n,B as a,v as b,I as c,e as g}from"./index-BNST9t3H.js";import{b as l}from"./format-number-DalNf45u.js";import{a as f,b as y,c as I,T as p}from"./table-head-custom-Cj6hevi-.js";import{I as u}from"./incrementer-button-B9-YUF9V.js";import{T as r}from"./TableCell-Drz6UoJo.js";const q=({products:t,isDetail:i,onDecrease:d,onIncrease:h,onDecreaseDiscount:w,onIncreaseDiscount:T,handleDiscountDialog:x,removeItem:m})=>{const o=[{id:"orderNumber",label:"#",width:40,align:"center"},{id:"name",label:"Product Name"},{id:"rate",label:"Rate",width:160,align:"center"},{id:"totalAmount",label:"Quantity",width:80,align:"center"},{id:"status",label:"Total",width:140,align:"center"}];return i||o.push({id:"action",width:5}),n.jsx(a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{borderRadius:1,overflow:"hidden",border:e=>`solid 1px ${e.vars.palette.divider}`},children:n.jsxs(f,{size:"small",children:[n.jsx(y,{headLabel:o}),n.jsx(I,{children:t==null?void 0:t.map((e,s)=>n.jsxs(p,{children:[n.jsxs(r,{align:"center",children:[" ",s+1||e.productId," "]}),n.jsxs(r,{sx:{flexGrow:1},children:[" ",i?`${e.product.name}`:e.name," "]}),n.jsx(r,{align:"center",children:i?`${l(e.snapshotProductPrice||e.product.price)}`:n.jsxs(a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",position:"relative",p:.5,borderRadius:1,typography:"subtitle2",border:j=>`solid 1px ${b(j.vars.palette.grey["500Channel"],.2)}`},children:[n.jsx(a,{children:l(e.price)}),n.jsx(a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",right:0,padding:.5,color:"warning.main","&:hover":{color:"error.main"}},onClick:()=>x({index:s,product:e},e.price),children:n.jsx(c,{icon:"solar:pen-bold"})})]})}),i?n.jsx(r,{align:"center",children:n.jsx(a,{sx:{fontWeight:"bold"},children:e==null?void 0:e.quantity})}):n.jsxs(r,{children:[n.jsx(a,{sx:{width:88,textAlign:"right"},children:n.jsx(u,{quantity:e.quantity,onDecrease:()=>d(s),onIncrease:()=>h(s)})})," "]}),n.jsx(r,{align:"center",children:i?`${l(e.snapshotProductPrice*e.quantity)}`:l((e.price-e.price*(e.discount/100))*e.quantity)}),!i&&n.jsx(r,{children:n.jsx(g,{sx:{color:"error.main"},onClick:()=>{m(s)},children:n.jsx(c,{icon:"solar:trash-bin-trash-bold"})})})]},i?`${e.productId}`:`${e.id}`))})]})})};export{q as O};
