import{j as n,B as a,v as j,I as c,e as y}from"./index-yGbCRgTb.js";import{b as s}from"./format-number-CldpmeB4.js";import{a as f,b as u,c as p,T as g}from"./table-head-custom-Dmu61VxH.js";import{I}from"./incrementer-button-DUj63JZv.js";import{T as i}from"./TableCell-kQtrcvwO.js";const q=({products:l,isDetail:r,onDecrease:d,onIncrease:h,onDecreaseDiscount:T,onIncreaseDiscount:C,handleDiscountDialog:x,removeItem:m})=>{const o=[{id:"orderNumber",label:"#",width:40,align:"center"},{id:"name",label:"Product Name",width:400},{id:"rate",label:"Rate",width:200},{id:"totalAmount",label:"Quantity"},{id:"status",label:"Total"}];return r||o.push({id:"action",width:5}),n.jsx(a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{borderRadius:1,overflow:"hidden",border:e=>`solid 1px ${e.vars.palette.divider}`},children:n.jsxs(f,{size:"medium",children:[n.jsx(u,{headLabel:o}),n.jsx(p,{children:l==null?void 0:l.map((e,t)=>n.jsxs(g,{children:[n.jsxs(i,{align:"center",children:[" ",t+1||e.productId," "]}),n.jsxs(i,{children:[" ",r?`${e.product.name}`:e.name," "]}),n.jsx(i,{align:r?"inherit":"center",children:r?`${s(e.product.price)}`:n.jsxs(a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",position:"relative",p:.5,borderRadius:1,typography:"subtitle2",border:b=>`solid 1px ${j(b.vars.palette.grey["500Channel"],.2)}`},children:[n.jsx(a,{children:s(e.price)}),n.jsx(a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",right:0,padding:.5,color:"warning.main","&:hover":{color:"error.main"}},onClick:()=>x({index:t,product:e},e.price),children:n.jsx(c,{icon:"solar:pen-bold"})})]})}),n.jsx(i,{children:r?`x${e.quantity} (${s(e.snapshotProductPrice)})`:n.jsx(a,{sx:{width:88,textAlign:"right"},children:n.jsx(I,{quantity:e.quantity,onDecrease:()=>d(t),onIncrease:()=>h(t)})})}),n.jsx(i,{children:r?`${s(e.snapshotProductPrice*e.quantity)}`:s((e.price-e.price*(e.discount/100))*e.quantity)}),!r&&n.jsx(i,{children:n.jsx(y,{sx:{color:"error.main"},onClick:m,children:n.jsx(c,{icon:"solar:trash-bin-trash-bold"})})})]},r?`${e.productId}`:`${e.id}`))})]})})};export{q as O};
