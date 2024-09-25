import{r as m,dI as q,dJ as I,dH as B,eq as k,j as e,D as c,S as i,B as n,T as a,aJ as g,bR as x,e as R}from"./index-s58VYgz3.js";import{z as y,u as E,t as H,a as J,F as u}from"./form-provider-Bc-Q3UnP.js";import{u as L}from"./useMutation-DPA8wnZk.js";import{b as h}from"./format-number-CB29iT6K.js";import{b as M}from"./upload-avatar-D-rSsmmB.js";import"./image-EV8pe614.js";import"./editor-DBPzd_5b.js";import{s as Q}from"./schema-helper-AIgOjbJw.js";import{a as U,b as W,D as z}from"./DialogContent-BxNHtRW7.js";import{D as K}from"./DialogTitle-SR0GFz0k.js";import{L as N}from"./LoadingButton-CS_HP2qk.js";const V=y.object({amount:y.number().min(1,{message:"Amount is required!"}),paymentDate:Q.date({message:{required_error:"Start date is required!"}}),paymentType:y.string().min(1,{message:"Payment Type is required!"})}),ie=({order:t,payment:D,open:v,onClose:j,handler:f})=>{const d=m.useRef(D),[p,l]=m.useState(),w=m.useCallback(s=>{const r=s[0];l(()=>r)},[]),C=()=>{l(null)},S=q(),T={headers:{"content-type":"multipart/form-data"}},{mutate:P}=L({mutationFn:s=>I.post(B.files.upload,s,T),onSuccess:async({data:s})=>{const{name:r}=s;if(r){const{current:o}=d;o.attachments=r,await f(o)}return s},onSettled:async()=>{l(null),d.current={},await S.invalidateQueries({queryKey:["payments-images"]})},onError:s=>{console.log(s)}}),A={amount:0,paymentType:"",paymentDate:k()},b=E({resolver:H(V),defaultValues:A}),{reset:F,handleSubmit:G,formState:{isSubmitting:_}}=b,O=G(async s=>{try{const r={...s,orderId:t.id,customerId:t.customer.id};if(p){d.current={...r};const o=new FormData;o.append("file",p),o.append("category","Payment"),await P(o)}else await f(r);F()}catch(r){console.log(r)}});return e.jsxs(U,{fullWidth:!0,maxWidth:"lg",open:v,onClose:j,children:[e.jsx(K,{children:"Payment Details"}),e.jsxs(J,{methods:b,onSubmit:O,children:[e.jsxs(W,{children:[e.jsx(c,{}),e.jsxs(i,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(n,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:t.customer.name})]}),e.jsxs(n,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsxs(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:["ORD-",t.id]})]}),e.jsxs(n,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Date:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:g(t.orderDate)})]}),e.jsxs(n,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Delivery Date:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:t.deliveryDate?g(t.deliveryDate):e.jsx("span",{children:" - "})})]})]}),e.jsx(c,{}),e.jsxs(i,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(n,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:h(t.totalOrderAmount)||"-"})]}),e.jsxs(n,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:h(t.orderPaymentAmount)||"-"})]})]}),e.jsx(c,{}),e.jsx(i,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(n,{display:"flex",children:[e.jsx(a,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(a,{component:"span",variant:"subtitle1",children:h(t.totalOrderAmount-t.orderPaymentAmount)})]})}),e.jsx(c,{}),e.jsxs(i,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(n,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(u.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1}}),e.jsx(u.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1}})]}),e.jsxs(n,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(n,{children:e.jsxs(u.Select,{name:"paymentType",label:"Payment Type",children:[e.jsx(x,{value:"Cash",children:"Cash"}),e.jsx(x,{value:"Transfer",children:"Transfer"}),e.jsx(x,{value:"Card",children:"Card"})]})}),e.jsxs(i,{spacing:1.5,children:[e.jsx(a,{variant:"subtitle2",children:"Attachments"}),e.jsx(M,{value:p,onDrop:w,onDelete:C})]})]})]})]}),e.jsxs(z,{children:[e.jsx(N,{type:"submit",variant:"contained",children:"Save"}),e.jsx(R,{color:"inherit",variant:"outlined",onClick:()=>{j(),l(null)},children:"Cancel"})]})]})]})};export{ie as O};
