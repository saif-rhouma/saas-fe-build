import{r as x,dn as O,dp as q,dm as B,ej as k,j as e,am as d,S as i,B as a,T as n,aH as D,b8 as m,I as E,e as R}from"./index-oyszM3Nj.js";import{z as y,u as H,t as L,a as M,F as u}from"./form-provider-DVH46um2.js";import{u as Q}from"./useMutation-CrU_O3n6.js";import{b as h}from"./format-number-TKBdgRec.js";import{a as U}from"./upload-avatar-BeRSwQx_.js";import"./image-D4xzDEh_.js";import"./editor-BBBPXrhA.js";import{s as W}from"./schema-helper-5mta9_MQ.js";import{a as z,b as K,D as N}from"./DialogContent-CvCwHI3o.js";import{D as V}from"./DialogTitle-DGL8ga-p.js";import{L as _}from"./LoadingButton-DIzigFgl.js";const J=y.object({amount:y.number().min(1,{message:"Amount is required!"}),paymentDate:W.date({message:{required_error:"Start date is required!"}}),paymentType:y.string().min(1,{message:"Payment Type is required!"})}),le=({order:s,payment:v,open:w,onClose:j,handler:f})=>{const p=x.useRef(v),[l,c]=x.useState(),C=x.useCallback(t=>{const r=t[0];console.log("---> file",t),c(()=>r)},[]),S=()=>{c(null)},T=O(),P={headers:{"content-type":"multipart/form-data"}},{mutate:A}=Q({mutationFn:t=>q.post(B.files.upload,t,P),onSuccess:async({data:t})=>{const{name:r}=t;if(r){const{current:o}=p;o.attachments=r,await f(o)}return t},onSettled:async()=>{c(null),p.current={},await T.invalidateQueries({queryKey:["payments-images"]})},onError:t=>{console.log(t)}}),F={amount:0,paymentType:"",paymentDate:k()},b=H({resolver:L(J),defaultValues:F}),{reset:g,handleSubmit:G,formState:{isSubmitting:X}}=b,I=G(async t=>{try{const r={...t,orderId:s.id,customerId:s.customer.id};if(l){p.current={...r};const o=new FormData;o.append("file",l),o.append("category","Payment"),await A(o)}else await f(r);g()}catch(r){console.log(r)}});return e.jsxs(z,{fullWidth:!0,maxWidth:"lg",open:w,onClose:j,children:[e.jsx(V,{children:"Add Payment"}),e.jsxs(M,{methods:b,onSubmit:I,children:[e.jsxs(K,{children:[e.jsx(d,{}),e.jsxs(i,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(a,{display:"flex",children:[e.jsx(n,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(n,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s.customer.name})]}),e.jsxs(a,{display:"flex",children:[e.jsx(n,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsx(n,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s.ref})]}),e.jsxs(a,{display:"flex",children:[e.jsx(n,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Date:"}),e.jsx(n,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:D(s.orderDate)})]}),e.jsxs(a,{display:"flex",children:[e.jsx(n,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Delivery Date:"}),e.jsx(n,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s.deliveryDate?D(s.deliveryDate):e.jsx("span",{children:" - "})})]})]}),e.jsx(d,{}),e.jsxs(i,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(a,{display:"flex",children:[e.jsx(n,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(n,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:h(s.totalOrderAmount)||"-"})]}),e.jsxs(a,{display:"flex",children:[e.jsx(n,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(n,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:h(s.orderPaymentAmount)||"-"})]})]}),e.jsx(d,{}),e.jsx(i,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(a,{display:"flex",children:[e.jsx(n,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(n,{component:"span",variant:"subtitle1",children:h(s.totalOrderAmount-s.orderPaymentAmount)})]})}),e.jsx(d,{}),e.jsxs(i,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(a,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(u.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1}}),e.jsx(u.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1}})]}),e.jsxs(a,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(a,{children:e.jsxs(u.Select,{name:"paymentType",label:"Payment Type",children:[e.jsx(m,{value:"Cash",children:"Cash"}),e.jsx(m,{value:"Transfer",children:"Transfer"}),e.jsx(m,{value:"Card",children:"Card"})]})}),e.jsxs(i,{spacing:1.5,flexDirection:"row",sx:{height:"56px"},children:[e.jsx(U,{onDrop:C,sx:{height:"auto"}}),l&&e.jsxs(i,{flexDirection:"row",spacing:1,justifyContent:"center",alignItems:"center",sx:{typography:"body2",color:"error.main",cursor:"pointer",border:"solid 1px rgba(0,0,0,0)",p:1,"&:hover":{border:"solid 1px",borderColor:"error.main",borderRadius:1.5}},onClick:S,children:[e.jsx(E,{icon:"solar:trash-bin-trash-bold"}),e.jsx(a,{children:e.jsxs(a,{spacing:3,children:[e.jsx(n,{component:"span",variant:"subtitle2",sx:{flexGrow:1,mr:1},children:"Filename:"}),e.jsx("span",{children:l.name})]})})]})]})]})]})]}),e.jsxs(N,{children:[e.jsx(_,{type:"submit",variant:"contained",children:"Save"}),e.jsx(R,{color:"inherit",variant:"outlined",onClick:()=>{g(),c(null),j()},children:"Cancel"})]})]})]})};export{le as O};
