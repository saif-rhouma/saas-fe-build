import{j as e,e as i,am as c,r as p}from"./index-CRVB8F69.js";import{a as d,b as h,D as j}from"./DialogContent-DTWdpBHx.js";import{D as g}from"./DialogTitle-zVJogJSi.js";import{z as D,u as v,t as C,a as y,F}from"./form-provider-Cj5HnMmb.js";import"./image-5vyLym5h.js";import"./editor-B6TerEHZ.js";import{T as P}from"./TextField-a9VrXvMJ.js";const q=({dialog:t,title:n,contentText:s})=>e.jsxs(d,{open:t.value,onClose:t.onFalse,children:[e.jsx(g,{children:n}),e.jsx(h,{sx:{color:"text.secondary"},children:e.jsx("p",{children:s})}),e.jsx(j,{children:e.jsx(i,{variant:"contained",onClick:t.onFalse,autoFocus:!0,children:"Okay"})})]}),S=D.object({percentage:D.number().min(1,{message:"Discount Percentage is required!"}).min(1,{message:"Discount Percentage must be between 1 and 100"}).max(100,{message:"Discount Percentage must be between 1 and 100"})}),z=({discount:t,open:n,onClose:s,handler:a})=>{const o=v({resolver:C(S)}),{reset:r,watch:l,setValue:m,handleSubmit:u,formState:{isSubmitting:k}}=o,b=u(async f=>{try{const{percentage:x}=f;r(),a(x)}catch(x){console.error(x)}});return e.jsx(d,{fullWidth:!0,open:n,onClose:s,children:e.jsxs(y,{methods:o,onSubmit:b,children:[e.jsx(g,{children:"Discount Percentage"}),e.jsx(c,{}),e.jsx(h,{sx:{pt:1,mt:1},children:e.jsx(F.Text,{fullWidth:!0,type:"number",label:"Percentage",name:"percentage"})}),e.jsx(c,{sx:{pt:1,mt:1}}),e.jsxs(j,{children:[e.jsx(i,{type:"submit",variant:"contained",children:"Confirm"}),e.jsx(i,{color:"inherit",variant:"outlined",onClick:()=>{r(),s()},children:"Cancel"})]})]})})},B=({product:t,discount:n,open:s,onClose:a,handler:o})=>{var m;const[r,l]=p.useState(n);return p.useEffect(()=>{l(n)},[n]),e.jsxs(d,{fullWidth:!0,open:s,onClose:a,children:[e.jsxs(g,{children:["Discount Product : ",(m=t==null?void 0:t.product)==null?void 0:m.name]}),e.jsx(c,{}),e.jsx(h,{sx:{pt:1,mt:1},children:e.jsx(P,{fullWidth:!0,label:"Discount Amount",type:"number",value:r,onChange:u=>{l(u.target.value)}})}),e.jsx(c,{sx:{pt:1,mt:1}}),e.jsxs(j,{children:[e.jsx(i,{type:"submit",variant:"contained",onClick:()=>{o(t.index,r)},children:"Confirm"}),e.jsx(i,{color:"inherit",variant:"outlined",onClick:a,children:"Cancel"})]})]})};export{q as I,z as O,B as a};
