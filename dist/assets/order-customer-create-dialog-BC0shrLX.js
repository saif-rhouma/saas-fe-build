import{r as x,j as a,n as y,S as N,e as E}from"./index-CmdkfqKS.js";import{z as r,u as v,t as S,a as C,F as n}from"./form-provider-DrNjnJOg.js";import{h as A}from"./utils-BKO3Uglo.js";import"./image-n6arU1a7.js";import"./editor-CFV9i_63.js";import{s as u}from"./schema-helper-UGzp3Z51.js";import{a as T,b as D,D as c}from"./DialogContent-Dk5OBRXK.js";import{D as w}from"./DialogTitle-BioDnUJV.js";import{L as F}from"./LoadingButton-CR1m5No3.js";const M=r.object({name:r.string().min(1,{message:"Name is required!"}),city:r.string(),email:r.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:u.phoneNumber({isValidPhoneNumber:A}),taxNumber:r.number().optional(),address:r.string(),isActive:r.boolean()});function H({customer:e,open:h,onClose:l,handler:b}){const d=x.useMemo(()=>{var s;const t={name:(e==null?void 0:e.name)||"",city:(e==null?void 0:e.address.city)||"",email:(e==null?void 0:e.email)||"",phoneNumber:(e==null?void 0:e.phoneNumber)||"",address:((s=e==null?void 0:e.address)==null?void 0:s.street)||"",isActive:(e==null?void 0:e.isActive)||!0};return(e==null?void 0:e.taxNumber)==null||(t.taxNumber=parseInt(e==null?void 0:e.taxNumber,10)),t},[e]),[o,g]=x.useState(""),p=v({resolver:S(M),defaultValues:d}),{reset:m,handleSubmit:f,formState:{isSubmitting:P}}=p;x.useEffect(()=>{e&&m(d)},[e]);const j=f(async t=>{var s;try{const i={...t};delete i.city,i.address={country:t.city,city:t.city,street:t.address},i.taxNumber=(s=i.taxNumber)==null?void 0:s.toString(),e?await b({id:e.id,payload:i}):await b(i),l(),m()}catch(i){console.log(i),g(i instanceof Error?i.message:i)}});return a.jsxs(T,{fullWidth:!0,open:h,onClose:l,children:[a.jsx(w,{children:e?"Edit Customer":"Add Customer"}),!!o&&a.jsx(y,{severity:"error",sx:{mb:3},children:o}),a.jsxs(C,{methods:p,onSubmit:j,children:[a.jsx(D,{children:a.jsxs(N,{spacing:2,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[a.jsx(n.Text,{fullWidth:!0,label:"Enter Customer Name",name:"name",sx:{mt:2}}),a.jsx(n.Text,{label:"Enter The City",name:"city",sx:{mt:2}}),a.jsx(n.Phone,{name:"phoneNumber",label:"Phone number",sx:{mt:2}}),a.jsx(n.Text,{label:"Enter Email Address",type:"email",name:"email",sx:{mt:2}}),a.jsx(n.Text,{type:"number",label:"Enter Tax Number",name:"taxNumber",sx:{mt:2}}),a.jsx(n.Text,{label:"Enter Address",name:"address",multiline:!0,rows:3,sx:{mt:2}}),a.jsx(n.Switch,{name:"isActive",label:"Is Active?"})]})}),a.jsxs(c,{children:[a.jsx(F,{type:"submit",variant:"contained",children:e?"Save Changes":"Save"}),a.jsx(E,{color:"inherit",variant:"outlined",onClick:()=>{m(d),l()},children:"Cancel"})]})]})]})}export{H as O};
