import{r as p,j as a,n as y,S as E,e as v}from"./index-Cb6aSJqI.js";import{z as t,u as C,t as N,a as S,F as s}from"./form-provider-r_GtnSm5.js";import"./image-CKkZri-A.js";import"./editor-UDNnP2Xz.js";import{a as A,b as T,D as c}from"./DialogContent-CSEM2EB2.js";import{D}from"./DialogTitle-DEoYoKxf.js";import{L as u}from"./LoadingButton-rewNqQCK.js";const w=t.object({name:t.string().min(1,{message:"Name is required!"}),city:t.string(),email:t.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),taxNumber:t.number().optional(),address:t.string(),isActive:t.boolean()});function P({customer:e,open:g,onClose:d,handler:m}){var b;const r={name:(e==null?void 0:e.name)||"",city:(e==null?void 0:e.address.city)||"",email:(e==null?void 0:e.email)||"",phoneNumber:(e==null?void 0:e.phoneNumber)||"",taxNumber:parseInt(e==null?void 0:e.taxNumber,10)||"",address:((b=e==null?void 0:e.address)==null?void 0:b.street)||"",isActive:(e==null?void 0:e.isActive)||!0},[x,h]=p.useState(""),o=C({resolver:N(w),defaultValues:r}),{reset:l,handleSubmit:f,formState:{isSubmitting:F}}=o;p.useEffect(()=>{e&&l(r)},[e]);const j=f(async n=>{try{const i={...n};delete i.city,i.address={country:n.city,city:n.city,street:n.address},i.taxNumber=i.taxNumber.toString(),e?await m({id:e.id,payload:i}):await m(i),l()}catch(i){console.log(i),h(i instanceof Error?i.message:i)}});return a.jsxs(A,{fullWidth:!0,open:g,onClose:d,children:[a.jsx(D,{children:e?"Edit Customer":"Add Customer"}),!!x&&a.jsx(y,{severity:"error",sx:{mb:3},children:x}),a.jsxs(S,{methods:o,onSubmit:j,children:[a.jsx(T,{children:a.jsxs(E,{spacing:2,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[a.jsx(s.Text,{fullWidth:!0,label:"Enter Customer Name",name:"name",sx:{mt:2}}),a.jsx(s.Text,{label:"Enter The City",name:"city",sx:{mt:2}}),a.jsx(s.Phone,{name:"phoneNumber",label:"Phone number",sx:{mt:2}}),a.jsx(s.Text,{label:"Enter Email Address",type:"email",name:"email",sx:{mt:2}}),a.jsx(s.Text,{type:"number",label:"Enter Tax Number",name:"taxNumber",sx:{mt:2}}),a.jsx(s.Text,{label:"Enter Address",name:"address",multiline:!0,rows:3,sx:{mt:2}}),a.jsx(s.Switch,{name:"isActive",label:"Is Active?"})]})}),a.jsxs(c,{children:[a.jsx(u,{type:"submit",variant:"contained",children:e?"Save Changes":"Save"}),a.jsx(v,{color:"inherit",variant:"outlined",onClick:()=>{l(r),d()},children:"Cancel"})]})]})]})}export{P as O};
