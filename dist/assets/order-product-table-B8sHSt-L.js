import{j as n,B as r,v as j,I as c,e as y}from"./index-ElVqIGcB.js";import{b as t}from"./format-number-Bbl8r7KE.js";import{a as f,b as g,c as u,T as I}from"./table-head-custom-Bna6vkEk.js";import{I as p}from"./incrementer-button-DIV5aQeT.js";import{T as s}from"./TableCell-B_LOBPFc.js";const q=({products:l,isDetail:i,onDecrease:d,onIncrease:h,onDecreaseDiscount:T,onIncreaseDiscount:w,handleDiscountDialog:x,removeItem:m})=>{const o=[{id:"orderNumber",label:"#",width:40,align:"center"},{id:"name",label:"Product Name",width:400},{id:"rate",label:"Rate",width:200},{id:"totalAmount",label:"Quantity"},{id:"status",label:"Total"}];return i||o.push({id:"action",width:5}),n.jsx(r,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{borderRadius:1,overflow:"hidden",border:e=>`solid 1px ${e.vars.palette.divider}`},children:n.jsxs(f,{size:"medium",children:[n.jsx(g,{headLabel:o}),n.jsx(u,{children:l==null?void 0:l.map((e,a)=>n.jsxs(I,{children:[n.jsxs(s,{align:"center",children:[" ",a+1||e.productId," "]}),n.jsxs(s,{children:[" ",i?`${e.product.name}`:e.name," "]}),n.jsx(s,{align:i?"inherit":"center",children:i?`${t(e.snapshotProductPrice||e.product.price)}`:n.jsxs(r,{sx:{display:"flex",justifyContent:"center",alignItems:"center",position:"relative",p:.5,borderRadius:1,typography:"subtitle2",border:b=>`solid 1px ${j(b.vars.palette.grey["500Channel"],.2)}`},children:[n.jsx(r,{children:t(e.price)}),n.jsx(r,{sx:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",right:0,padding:.5,color:"warning.main","&:hover":{color:"error.main"}},onClick:()=>x({index:a,product:e},e.price),children:n.jsx(c,{icon:"solar:pen-bold"})})]})}),n.jsx(s,{children:i?n.jsxs(r,{sx:{width:240,color:"error.main",fontWeight:"bold"},children:["x",e==null?void 0:e.quantity]}):n.jsx(r,{sx:{width:88,textAlign:"right"},children:n.jsx(p,{quantity:e.quantity,onDecrease:()=>d(a),onIncrease:()=>h(a)})})}),n.jsx(s,{children:i?`${t(e.snapshotProductPrice*e.quantity)}`:t((e.price-e.price*(e.discount/100))*e.quantity)}),!i&&n.jsx(s,{children:n.jsx(y,{sx:{color:"error.main"},onClick:()=>{m(a)},children:n.jsx(c,{icon:"solar:trash-bin-trash-bold"})})})]},i?`${e.productId}`:`${e.id}`))})]})})};export{q as O};
