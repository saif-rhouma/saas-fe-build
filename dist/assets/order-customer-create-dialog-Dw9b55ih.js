import{r as p,j as a,z as y,S as N,e as E}from"./index-BPQkDe0s.js";import{z as t,i as v,u as C,t as S,F as u}from"./form-provider-Csxs3POq.js";import{F as r}from"./fields-uLHuWF6F.js";import"./image-C7AA7Kgf.js";import"./editor-JwZorNGg.js";import{s as T}from"./schema-helper-CODNJXI3.js";import{a as A,b as c,D}from"./DialogContent-p3i0msBI.js";import{D as F}from"./DialogTitle-DTSEDZ4J.js";import{L as w}from"./LoadingButton-ByZAe6Vn.js";const q=t.object({name:t.string().min(1,{message:"Name is required!"}),city:t.string(),email:t.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:T.phoneNumber({isValidPhoneNumber:v}),taxNumber:t.number().min(1,{message:"Tax number is required!"}),address:t.string(),isActive:t.boolean()});function H({customer:e,open:h,onClose:n,handler:l}){var b;const m={name:(e==null?void 0:e.name)||"",city:(e==null?void 0:e.address.city)||"",email:(e==null?void 0:e.email)||"",phoneNumber:(e==null?void 0:e.phoneNumber)||"",taxNumber:parseInt(e==null?void 0:e.taxNumber)||"",address:((b=e==null?void 0:e.address)==null?void 0:b.street)||"",isActive:(e==null?void 0:e.isActive)||!0},[d,g]=p.useState(""),x=C({resolver:S(q),defaultValues:m}),{reset:o,handleSubmit:f,formState:{isSubmitting:k}}=x;p.useEffect(()=>{e&&o(m)},[e]);const j=f(async s=>{try{const i={...s};delete i.city,i.address={country:s.city,city:s.city,street:s.address},i.taxNumber=i.taxNumber.toString(),e?await l({id:e.id,payload:i}):await l(i),o()}catch(i){console.log(i),g(i instanceof Error?i.message:i)}});return a.jsxs(A,{fullWidth:!0,open:h,onClose:n,children:[a.jsx(F,{children:e?"Edit Customer":"Add Customer"}),!!d&&a.jsx(y,{severity:"error",sx:{mb:3},children:d}),a.jsxs(u,{methods:x,onSubmit:j,children:[a.jsx(c,{children:a.jsxs(N,{spacing:2,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[a.jsx(r.Text,{fullWidth:!0,label:"Enter Customer Name",name:"name",sx:{mt:2}}),a.jsx(r.Text,{label:"Enter The City",name:"city",sx:{mt:2}}),a.jsx(r.Text,{label:"Enter Phone Number",name:"phoneNumber",sx:{mt:2}}),a.jsx(r.Text,{label:"Enter Email Address",type:"email",name:"email",sx:{mt:2}}),a.jsx(r.Text,{type:"number",label:"Enter Tax Number",name:"taxNumber",sx:{mt:2}}),a.jsx(r.Text,{label:"Enter Address",name:"address",multiline:!0,rows:3,sx:{mt:2}}),a.jsx(r.Switch,{name:"isActive",label:"Is Active?"})]})}),a.jsxs(D,{children:[a.jsx(w,{type:"submit",variant:"contained",children:e?"Save Changes":"Save"}),a.jsx(E,{color:"inherit",variant:"outlined",onClick:n,children:"Cancel"})]})]})]})}export{H as O};
