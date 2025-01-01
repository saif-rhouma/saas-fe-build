import{j as e,e as x,r as j,br as v,B as F,a5 as p}from"./index-BrVky5Gg.js";import{a as f,b as g,D as b}from"./DialogContent-Bneue424.js";import{D}from"./DialogTitle-5kRkAohy.js";import{A as y}from"./Autocomplete-CdBrZWYz.js";import{T as P}from"./TextField-BzhmS018.js";import{z as C,u as S,t as k,a as I,F as L}from"./form-provider-IGnvse7Q.js";import"./image-C-59YYlQ.js";import"./editor-DG5O80Yq.js";const q=({dialog:n,title:r,contentText:o})=>e.jsxs(f,{open:n.value,onClose:n.onFalse,children:[e.jsx(D,{children:r}),e.jsx(g,{sx:{color:"text.secondary"},children:e.jsx("p",{children:o})}),e.jsx(b,{children:e.jsx(x,{variant:"contained",onClick:n.onFalse,autoFocus:!0,children:"Okay"})})]}),H=({customers:n,selectedCustomer:r,onChange:o})=>{const[i,l]=j.useState(n),{t:a}=v("quotations"),u=(t,{inputValue:s})=>t.filter(m=>{var c,d;return((c=m.name)==null?void 0:c.toLowerCase().includes(s.toLowerCase()))||((d=m.phoneNumber)==null?void 0:d.toLowerCase().includes(s.toLowerCase()))});return e.jsx(y,{id:"customer-select",options:i,defaultValue:()=>{if(r){const t=i.findIndex(s=>s.id===r);return i[t]}return null},autoHighlight:!0,getOptionLabel:t=>t.name,filterOptions:u,onChange:(t,s)=>{o(s==null?void 0:s.id)},sx:{"& .MuiAutocomplete-listbox .MuiAutocomplete-option":{textTransform:"uppercase"}},renderOption:(t,s)=>{const{key:m,...c}=t;return e.jsx(F,{component:"li",sx:{"& > img":{mr:2,flexShrink:0},textTransform:"capitalize"},...c,children:s.name},m)},renderInput:t=>e.jsx(P,{...t,label:a("createView.createForm.fields.customer.label"),InputLabelProps:{shrink:!0},sx:{"& .MuiInputBase-input":{textTransform:"capitalize"}},slotProps:{htmlInput:{...t.inputProps,autoComplete:"new-password"}}})})},O=C.object({percentage:C.number().min(0,{message:"Discount Percentage is required!"}).min(0,{message:"Discount Percentage must be between 0 and 100"}).max(100,{message:"Discount Percentage must be between 0 and 100"})}),N=({discount:n,open:r,onClose:o,handler:i})=>{const l=S({resolver:k(O)}),{reset:a,watch:u,setValue:t,handleSubmit:s,formState:{isSubmitting:m}}=l,c=s(async d=>{try{const{percentage:h}=d;a(),i(h)}catch(h){console.error(h)}});return e.jsx(f,{fullWidth:!0,open:r,onClose:o,children:e.jsxs(I,{methods:l,onSubmit:c,children:[e.jsx(D,{children:"Discount Percentage"}),e.jsx(p,{}),e.jsx(g,{sx:{pt:1,mt:1},children:e.jsx(L.Text,{fullWidth:!0,type:"number",label:"Percentage",name:"percentage"})}),e.jsx(p,{sx:{pt:1,mt:1}}),e.jsxs(b,{children:[e.jsx(x,{type:"submit",variant:"contained",children:"Confirm"}),e.jsx(x,{color:"inherit",variant:"outlined",onClick:()=>{a(),o()},children:"Cancel"})]})]})})},R=({product:n,discount:r,open:o,onClose:i,handler:l})=>{var t;const[a,u]=j.useState(r);return j.useEffect(()=>{u(r)},[r]),e.jsxs(f,{fullWidth:!0,open:o,onClose:i,children:[e.jsxs(D,{children:["Discount Product : ",(t=n==null?void 0:n.product)==null?void 0:t.name]}),e.jsx(p,{}),e.jsx(g,{sx:{pt:1,mt:1},children:e.jsx(P,{fullWidth:!0,label:"Discount Amount",type:"number",value:a,onChange:s=>{u(parseInt(s.target.value,10))}})}),e.jsx(p,{sx:{pt:1,mt:1}}),e.jsxs(b,{children:[e.jsx(x,{type:"submit",variant:"contained",onClick:()=>{l(n.index,a)},children:"Confirm"}),e.jsx(x,{color:"inherit",variant:"outlined",onClick:i,children:"Cancel"})]})]})};export{H as C,q as I,N as O,R as a};
