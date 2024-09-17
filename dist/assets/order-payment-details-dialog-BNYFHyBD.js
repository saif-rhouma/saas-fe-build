import{r as p,dN as q,dO as B,dM as I,et as k,j as e,D as c,S as i,B as n,T as a,aN as g,bL as x,e as E}from"./index-CZcV1F_p.js";import{z as y,u as L,t as M,F as N}from"./form-provider-Bx2WBj5v.js";import{u as R}from"./useMutation-RCoCYUsr.js";import{b as u}from"./format-number-_ePrRxix.js";import{b as Q}from"./upload-avatar-1D7Vf-s3.js";import"./image-DzsMNwzu.js";import{F as h}from"./fields-hbdK3Trc.js";import"./editor-DaVZ1Z83.js";import{s as U}from"./schema-helper-CcrSI3-3.js";import{a as W,b as z,D as H}from"./DialogContent-BM8q5mKd.js";import{D as K}from"./DialogTitle-DLTxRMh7.js";import{L as V}from"./LoadingButton-C_R2hpVD.js";const _=y.object({amount:y.number().min(1,{message:"Amount is required!"}),paymentDate:U.date({message:{required_error:"Start date is required!"}}),paymentType:y.string().min(1,{message:"Payment Type is required!"})}),le=({order:t,payment:D,open:v,onClose:j,handler:f})=>{const d=p.useRef(D),[m,l]=p.useState(),w=p.useCallback(s=>{const r=s[0];l(()=>r)},[]),C=()=>{l(null)},S=q(),T={headers:{"content-type":"multipart/form-data"}},{mutate:P}=R({mutationFn:s=>B.post(I.files.upload,s,T),onSuccess:async({data:s})=>{const{name:r}=s;if(r){const{current:o}=d;o.attachments=r,await f(o)}return s},onSettled:async()=>{l(null),d.current={},await S.invalidateQueries({queryKey:["payments-images"]})},onError:s=>{console.log(s)}}),F={amount:0,paymentType:"",paymentDate:k()},b=L({resolver:M(_),defaultValues:F}),{reset:A,handleSubmit:G,formState:{isSubmitting:J}}=b,O=G(async s=>{try{const r={...s,orderId:t.id,customerId:t.customer.id};if(m){d.current={...r};const o=new FormData;o.append("file",m),o.append("category","Payment"),await P(o)}else await f(r);A()}catch(r){console.log(r)}});return e.jsxs(W,{fullWidth:!0,maxWidth:"lg",open:v,onClose:j,children:[e.jsx(K,{children:"Payment Details"}),e.jsxs(N,{methods:b,onSubmit:O,children:[e.jsxs(z,{children:[e.jsx(c,{}),e.jsxs(i,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(n,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:t.customer.name})]}),e.jsxs(n,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsxs(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:["ORD-",t.id]})]}),e.jsxs(n,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Date:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:g(t.orderDate)})]}),e.jsxs(n,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Delivery Date:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:t.deliveryDate?g(t.deliveryDate):e.jsx("span",{children:" - "})})]})]}),e.jsx(c,{}),e.jsxs(i,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(n,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:u(t.totalOrderAmount)||"-"})]}),e.jsxs(n,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:u(t.orderPaymentAmount)||"-"})]})]}),e.jsx(c,{}),e.jsx(i,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(n,{display:"flex",children:[e.jsx(a,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(a,{component:"span",variant:"subtitle1",children:u(t.totalOrderAmount-t.orderPaymentAmount)})]})}),e.jsx(c,{}),e.jsxs(i,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(n,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(h.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1}}),e.jsx(h.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1}})]}),e.jsxs(n,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(n,{children:e.jsxs(h.Select,{name:"paymentType",label:"Payment Type",children:[e.jsx(x,{value:"Cash",children:"Cash"}),e.jsx(x,{value:"Transfer",children:"Transfer"}),e.jsx(x,{value:"Card",children:"Card"})]})}),e.jsxs(i,{spacing:1.5,children:[e.jsx(a,{variant:"subtitle2",children:"Attachments"}),e.jsx(Q,{value:m,onDrop:w,onDelete:C})]})]})]})]}),e.jsxs(H,{children:[e.jsx(V,{type:"submit",variant:"contained",children:"Save"}),e.jsx(E,{color:"inherit",variant:"outlined",onClick:()=>{j(),l(null)},children:"Cancel"})]})]})]})};export{le as O};
