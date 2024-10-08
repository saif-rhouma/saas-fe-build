import{r as g,j as a,x as y,S as E,e as v}from"./index-yGbCRgTb.js";import{z as t,u as C,t as N,a as S,F as s}from"./form-provider-DYU4Aza6.js";import"./image-DcD9e3NU.js";import"./editor-DVBR6pSL.js";import{a as A,b as T,D as c}from"./DialogContent-DMTZhSCC.js";import{D as u}from"./DialogTitle-Dtm0x3W5.js";import{L as D}from"./LoadingButton-DkWrtn4w.js";const w=t.object({name:t.string().min(1,{message:"Name is required!"}),city:t.string(),email:t.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),taxNumber:t.number().min(1,{message:"Tax number is required!"}),address:t.string(),isActive:t.boolean()});function P({customer:e,open:p,onClose:n,handler:l}){var o;const d={name:(e==null?void 0:e.name)||"",city:(e==null?void 0:e.address.city)||"",email:(e==null?void 0:e.email)||"",phoneNumber:(e==null?void 0:e.phoneNumber)||"",taxNumber:parseInt(e==null?void 0:e.taxNumber,10)||"",address:((o=e==null?void 0:e.address)==null?void 0:o.street)||"",isActive:(e==null?void 0:e.isActive)||!0},[m,h]=g.useState(""),x=C({resolver:N(w),defaultValues:d}),{reset:b,handleSubmit:f,formState:{isSubmitting:F}}=x;g.useEffect(()=>{e&&b(d)},[e]);const j=f(async r=>{try{const i={...r};delete i.city,i.address={country:r.city,city:r.city,street:r.address},i.taxNumber=i.taxNumber.toString(),e?await l({id:e.id,payload:i}):await l(i),b()}catch(i){console.log(i),h(i instanceof Error?i.message:i)}});return a.jsxs(A,{fullWidth:!0,open:p,onClose:n,children:[a.jsx(u,{children:e?"Edit Customer":"Add Customer"}),!!m&&a.jsx(y,{severity:"error",sx:{mb:3},children:m}),a.jsxs(S,{methods:x,onSubmit:j,children:[a.jsx(T,{children:a.jsxs(E,{spacing:2,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[a.jsx(s.Text,{fullWidth:!0,label:"Enter Customer Name",name:"name",sx:{mt:2}}),a.jsx(s.Text,{label:"Enter The City",name:"city",sx:{mt:2}}),a.jsx(s.Phone,{name:"phoneNumber",label:"Phone number",sx:{mt:2}}),a.jsx(s.Text,{label:"Enter Email Address",type:"email",name:"email",sx:{mt:2}}),a.jsx(s.Text,{type:"number",label:"Enter Tax Number",name:"taxNumber",sx:{mt:2}}),a.jsx(s.Text,{label:"Enter Address",name:"address",multiline:!0,rows:3,sx:{mt:2}}),a.jsx(s.Switch,{name:"isActive",label:"Is Active?"})]})}),a.jsxs(c,{children:[a.jsx(D,{type:"submit",variant:"contained",children:e?"Save Changes":"Save"}),a.jsx(v,{color:"inherit",variant:"outlined",onClick:n,children:"Cancel"})]})]})]})}export{P as O};
