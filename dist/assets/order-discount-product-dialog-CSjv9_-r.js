import{j as e,e as m,r as h,B as v,am as d}from"./index-dT1vCng0.js";import{a as j,b as f,D as g}from"./DialogContent-Dtys1wsH.js";import{D as b}from"./DialogTitle-C0n_Nqay.js";import{A as y}from"./Autocomplete-3iL3_8Zy.js";import{T as C}from"./TextField-XTE0wU-C.js";import{z as D,u as F,t as S,a as k,F as I}from"./form-provider-lJ9M1TmS.js";import"./image-COOiVMf9.js";import"./editor-BHWTYWlb.js";const M=({dialog:n,title:r,contentText:o})=>e.jsxs(j,{open:n.value,onClose:n.onFalse,children:[e.jsx(b,{children:r}),e.jsx(f,{sx:{color:"text.secondary"},children:e.jsx("p",{children:o})}),e.jsx(g,{children:e.jsx(m,{variant:"contained",onClick:n.onFalse,autoFocus:!0,children:"Okay"})})]}),q=({customers:n,selectedCustomer:r,onChange:o})=>{const[i,l]=h.useState(n),c=(t,{inputValue:s})=>t.filter(a=>{var u,x;return((u=a.name)==null?void 0:u.toLowerCase().includes(s.toLowerCase()))||((x=a.phoneNumber)==null?void 0:x.toLowerCase().includes(s.toLowerCase()))});return e.jsx(y,{id:"customer-select",options:i,defaultValue:()=>{if(r){const t=i.findIndex(s=>s.id===r);return i[t]}return null},autoHighlight:!0,getOptionLabel:t=>t.name,filterOptions:c,onChange:(t,s)=>{o(s==null?void 0:s.id)},sx:{"& .MuiAutocomplete-listbox .MuiAutocomplete-option":{textTransform:"uppercase"}},renderOption:(t,s)=>{const{key:a,...u}=t;return e.jsx(v,{component:"li",sx:{"& > img":{mr:2,flexShrink:0},textTransform:"capitalize"},...u,children:s.name},a)},renderInput:t=>e.jsx(C,{...t,label:"Customer",InputLabelProps:{shrink:!0},sx:{"& .MuiInputBase-input":{textTransform:"capitalize"}},slotProps:{htmlInput:{...t.inputProps,autoComplete:"new-password"}}})})},L=D.object({percentage:D.number().min(0,{message:"Discount Percentage is required!"}).min(0,{message:"Discount Percentage must be between 0 and 100"}).max(100,{message:"Discount Percentage must be between 0 and 100"})}),H=({discount:n,open:r,onClose:o,handler:i})=>{const l=F({resolver:S(L)}),{reset:c,watch:t,setValue:s,handleSubmit:a,formState:{isSubmitting:u}}=l,x=a(async P=>{try{const{percentage:p}=P;c(),i(p)}catch(p){console.error(p)}});return e.jsx(j,{fullWidth:!0,open:r,onClose:o,children:e.jsxs(k,{methods:l,onSubmit:x,children:[e.jsx(b,{children:"Discount Percentage"}),e.jsx(d,{}),e.jsx(f,{sx:{pt:1,mt:1},children:e.jsx(I.Text,{fullWidth:!0,type:"number",label:"Percentage",name:"percentage"})}),e.jsx(d,{sx:{pt:1,mt:1}}),e.jsxs(g,{children:[e.jsx(m,{type:"submit",variant:"contained",children:"Confirm"}),e.jsx(m,{color:"inherit",variant:"outlined",onClick:()=>{c(),o()},children:"Cancel"})]})]})})},N=({product:n,discount:r,open:o,onClose:i,handler:l})=>{var s;const[c,t]=h.useState(r);return h.useEffect(()=>{t(r)},[r]),e.jsxs(j,{fullWidth:!0,open:o,onClose:i,children:[e.jsxs(b,{children:["Discount Product : ",(s=n==null?void 0:n.product)==null?void 0:s.name]}),e.jsx(d,{}),e.jsx(f,{sx:{pt:1,mt:1},children:e.jsx(C,{fullWidth:!0,label:"Discount Amount",type:"number",value:c,onChange:a=>{t(parseInt(a.target.value,10))}})}),e.jsx(d,{sx:{pt:1,mt:1}}),e.jsxs(g,{children:[e.jsx(m,{type:"submit",variant:"contained",onClick:()=>{l(n.index,c)},children:"Confirm"}),e.jsx(m,{color:"inherit",variant:"outlined",onClick:i,children:"Cancel"})]})]})};export{q as C,M as I,H as O,N as a};
