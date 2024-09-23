import{r as p,j as a,z as y,S as N,e as E}from"./index-lMp9zap6.js";import{z as s,i as v,u as C,t as S,a as u,F as t}from"./form-provider-Cj0Z9UsE.js";import"./image-7Gw8g56m.js";import"./editor-56m6PEpo.js";import{s as A}from"./schema-helper-DOzR5VHI.js";import{a as T,b as c,D}from"./DialogContent-B0tqVN_s.js";import{D as w}from"./DialogTitle-BCkrw5VA.js";import{L as F}from"./LoadingButton-BI3VwLzw.js";const q=s.object({name:s.string().min(1,{message:"Name is required!"}),city:s.string(),email:s.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:A.phoneNumber({isValidPhoneNumber:v}),taxNumber:s.number().min(1,{message:"Tax number is required!"}),address:s.string(),isActive:s.boolean()});function W({customer:e,open:h,onClose:n,handler:l}){var b;const d={name:(e==null?void 0:e.name)||"",city:(e==null?void 0:e.address.city)||"",email:(e==null?void 0:e.email)||"",phoneNumber:(e==null?void 0:e.phoneNumber)||"",taxNumber:parseInt(e==null?void 0:e.taxNumber)||"",address:((b=e==null?void 0:e.address)==null?void 0:b.street)||"",isActive:(e==null?void 0:e.isActive)||!0},[m,g]=p.useState(""),x=C({resolver:S(q),defaultValues:d}),{reset:o,handleSubmit:f,formState:{isSubmitting:P}}=x;p.useEffect(()=>{e&&o(d)},[e]);const j=f(async r=>{try{const i={...r};delete i.city,i.address={country:r.city,city:r.city,street:r.address},i.taxNumber=i.taxNumber.toString(),e?await l({id:e.id,payload:i}):await l(i),o()}catch(i){console.log(i),g(i instanceof Error?i.message:i)}});return a.jsxs(T,{fullWidth:!0,open:h,onClose:n,children:[a.jsx(w,{children:e?"Edit Customer":"Add Customer"}),!!m&&a.jsx(y,{severity:"error",sx:{mb:3},children:m}),a.jsxs(u,{methods:x,onSubmit:j,children:[a.jsx(c,{children:a.jsxs(N,{spacing:2,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[a.jsx(t.Text,{fullWidth:!0,label:"Enter Customer Name",name:"name",sx:{mt:2}}),a.jsx(t.Text,{label:"Enter The City",name:"city",sx:{mt:2}}),a.jsx(t.Phone,{name:"phoneNumber",label:"Phone number",sx:{mt:2}}),a.jsx(t.Text,{label:"Enter Email Address",type:"email",name:"email",sx:{mt:2}}),a.jsx(t.Text,{type:"number",label:"Enter Tax Number",name:"taxNumber",sx:{mt:2}}),a.jsx(t.Text,{label:"Enter Address",name:"address",multiline:!0,rows:3,sx:{mt:2}}),a.jsx(t.Switch,{name:"isActive",label:"Is Active?"})]})}),a.jsxs(D,{children:[a.jsx(F,{type:"submit",variant:"contained",children:e?"Save Changes":"Save"}),a.jsx(E,{color:"inherit",variant:"outlined",onClick:n,children:"Cancel"})]})]})]})}export{W as O};
