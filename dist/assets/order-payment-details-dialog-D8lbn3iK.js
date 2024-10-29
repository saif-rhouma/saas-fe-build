import{r as p,dm as q,dn as B,dl as I,e6 as k,j as e,am as c,S as i,B as s,T as a,aH as g,b9 as x,e as E}from"./index-Cs0Sdxyr.js";import{z as y,u as H,t as L,a as M,F as u}from"./form-provider-eXyauyxJ.js";import{u as Q}from"./useMutation-Dzc6--kZ.js";import{b as h}from"./format-number-TrbPmgcB.js";import{b as R}from"./upload-avatar-BmI9utwN.js";import"./image-Cq9K1zAl.js";import"./editor-CT3ylhik.js";import{s as U}from"./schema-helper-Ggm2aOvk.js";import{a as W,b as z,D as K}from"./DialogContent-Crbj6g6G.js";import{D as N}from"./DialogTitle-DrSBT5S6.js";import{L as V}from"./LoadingButton-BC7HOYkj.js";const _=y.object({amount:y.number().min(1,{message:"Amount is required!"}),paymentDate:U.date({message:{required_error:"Start date is required!"}}),paymentType:y.string().min(1,{message:"Payment Type is required!"})}),ie=({order:t,payment:D,open:v,onClose:j,handler:f})=>{const d=p.useRef(D),[m,l]=p.useState(),w=p.useCallback(n=>{const r=n[0];l(()=>r)},[]),C=()=>{l(null)},S=q(),T={headers:{"content-type":"multipart/form-data"}},{mutate:P}=Q({mutationFn:n=>B.post(I.files.upload,n,T),onSuccess:async({data:n})=>{const{name:r}=n;if(r){const{current:o}=d;o.attachments=r,await f(o)}return n},onSettled:async()=>{l(null),d.current={},await S.invalidateQueries({queryKey:["payments-images"]})},onError:n=>{console.log(n)}}),A={amount:0,paymentType:"",paymentDate:k()},b=H({resolver:L(_),defaultValues:A}),{reset:F,handleSubmit:G,formState:{isSubmitting:J}}=b,O=G(async n=>{try{const r={...n,orderId:t.id,customerId:t.customer.id};if(m){d.current={...r};const o=new FormData;o.append("file",m),o.append("category","Payment"),await P(o)}else await f(r);F()}catch(r){console.log(r)}});return e.jsxs(W,{fullWidth:!0,maxWidth:"lg",open:v,onClose:j,children:[e.jsx(N,{children:"Payment Details"}),e.jsxs(M,{methods:b,onSubmit:O,children:[e.jsxs(z,{children:[e.jsx(c,{}),e.jsxs(i,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(s,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:t.customer.name})]}),e.jsxs(s,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:t.ref})]}),e.jsxs(s,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Date:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:g(t.orderDate)})]}),e.jsxs(s,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Delivery Date:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:t.deliveryDate?g(t.deliveryDate):e.jsx("span",{children:" - "})})]})]}),e.jsx(c,{}),e.jsxs(i,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(s,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:h(t.totalOrderAmount)||"-"})]}),e.jsxs(s,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:h(t.orderPaymentAmount)||"-"})]})]}),e.jsx(c,{}),e.jsx(i,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(s,{display:"flex",children:[e.jsx(a,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(a,{component:"span",variant:"subtitle1",children:h(t.totalOrderAmount-t.orderPaymentAmount)})]})}),e.jsx(c,{}),e.jsxs(i,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(s,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(u.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1}}),e.jsx(u.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1}})]}),e.jsxs(s,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(s,{children:e.jsxs(u.Select,{name:"paymentType",label:"Payment Type",children:[e.jsx(x,{value:"Cash",children:"Cash"}),e.jsx(x,{value:"Transfer",children:"Transfer"}),e.jsx(x,{value:"Card",children:"Card"})]})}),e.jsxs(i,{spacing:1.5,children:[e.jsx(a,{variant:"subtitle2",children:"Attachments"}),e.jsx(R,{value:m,onDrop:w,onDelete:C})]})]})]})]}),e.jsxs(K,{children:[e.jsx(V,{type:"submit",variant:"contained",children:"Save"}),e.jsx(E,{color:"inherit",variant:"outlined",onClick:()=>{j(),l(null)},children:"Cancel"})]})]})]})};export{ie as O};