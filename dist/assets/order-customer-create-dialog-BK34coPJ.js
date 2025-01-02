import{r as m,j as a,a0 as u,S as y,e as N}from"./index-3kUlxXkm.js";import{z as t,u as v,t as C,a as S,F as s}from"./form-provider-Ddj1YnLe.js";import{h as c}from"./utils-NIylK1Um.js";import"./image-BEDFCDEn.js";import"./editor-BMX_0Xq6.js";import{s as A}from"./schema-helper-pKPnN3t8.js";import{a as E,b as P,D as k}from"./DialogContent-BZuUPSmG.js";import{D as I}from"./DialogTitle-DD3683-9.js";import{L}from"./LoadingButton-BtwwM36s.js";const T=t.object({name:t.string().min(1,{message:"Name is required!"}),city:t.string(),email:t.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:A.phoneNumber({isValidPhoneNumber:c}),taxNumber:t.number().optional(),address:t.string(),isActive:t.boolean().optional()});function H({customer:e,open:b,onClose:l,handler:o}){const d=m.useMemo(()=>{var n;const r={name:(e==null?void 0:e.name)||"",city:(e==null?void 0:e.address.city)||"",email:(e==null?void 0:e.email)||"",phoneNumber:(e==null?void 0:e.phoneNumber)||"",address:((n=e==null?void 0:e.address)==null?void 0:n.street)||"",isActive:(e==null?void 0:e.isActive)||!0};return(e==null?void 0:e.taxNumber)==null||(r.taxNumber=parseInt(e==null?void 0:e.taxNumber,10)),r},[e]),[x,g]=m.useState(""),h=v({resolver:C(T),defaultValues:d}),{reset:p,handleSubmit:f,formState:{isSubmitting:D}}=h;m.useEffect(()=>{e&&p(d)},[e]);const j=f(async r=>{var n;try{const i={...r};delete i.city,i.address={country:r.city,city:r.city,street:r.address},i.taxNumber=(n=i.taxNumber)==null?void 0:n.toString(),e?await o({id:e.id,payload:i}):await o(i),l(),p()}catch(i){console.log(i),g(i instanceof Error?i.message:i)}});return a.jsxs(E,{fullWidth:!0,open:b,onClose:l,children:[a.jsx(I,{children:e?"Edit Customer":"Add Customer"}),!!x&&a.jsx(u,{severity:"error",sx:{mb:3},children:x}),a.jsxs(S,{methods:h,onSubmit:j,children:[a.jsx(P,{children:a.jsxs(y,{spacing:2,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[a.jsx(s.Text,{fullWidth:!0,label:"Customer Name",placeholder:"name",InputLabelProps:{shrink:!0},name:"name",sx:{mt:2}}),a.jsx(s.Text,{label:"Email",type:"email",name:"email",sx:{mt:2},placeholder:"email@email.com",InputLabelProps:{shrink:!0}}),a.jsx(s.Phone,{name:"phoneNumber",label:"Phone number",sx:{mt:2},placeholder:"12 345 678",InputLabelProps:{shrink:!0}}),a.jsx(s.Text,{label:"City",name:"city",sx:{mt:2},placeholder:"City name",InputLabelProps:{shrink:!0}}),a.jsx(s.Text,{type:"number",label:"Tax/Vat",name:"taxNumber",sx:{mt:2},placeholder:"12345",InputLabelProps:{shrink:!0}}),a.jsx(s.Text,{label:"Address",name:"address",multiline:!0,rows:3,sx:{mt:2},placeholder:"address, street",InputLabelProps:{shrink:!0}}),e&&a.jsx(s.Switch,{name:"isActive",label:"Is Active?"})]})}),a.jsxs(k,{children:[a.jsx(L,{type:"submit",variant:"contained",children:e?"Save Changes":"Save"}),a.jsx(N,{color:"inherit",variant:"outlined",onClick:()=>{p(d),l()},children:"Cancel"})]})]})]})}export{H as O};
