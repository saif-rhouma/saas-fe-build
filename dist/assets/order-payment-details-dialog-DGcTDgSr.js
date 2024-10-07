import{r as m,dI as O,dJ as I,dH as B,eq as k,j as e,D as c,S as i,B as s,T as a,aJ as g,bR as x,e as E}from"./index-CGa_Q6Py.js";import{z as y,u as R,t as H,a as J,F as u}from"./form-provider-B3FvCF-c.js";import{u as L}from"./useMutation-BZyJkW6J.js";import{b as h}from"./format-number-D7jLQrJb.js";import{b as M}from"./upload-avatar-lrMiBpkm.js";import"./image-DKbVqab5.js";import"./editor-COn8_0IM.js";import{s as Q}from"./schema-helper-EtcCmujV.js";import{a as U,b as W,D as z}from"./DialogContent-CkKaB1Dh.js";import{D as K}from"./DialogTitle-7P1jGWHj.js";import{L as N}from"./LoadingButton-B5SbTGGo.js";const V=y.object({amount:y.number().min(1,{message:"Amount is required!"}),paymentDate:Q.date({message:{required_error:"Start date is required!"}}),paymentType:y.string().min(1,{message:"Payment Type is required!"})}),ie=({order:t,payment:D,open:v,onClose:j,handler:f})=>{const d=m.useRef(D),[p,l]=m.useState(),w=m.useCallback(n=>{const r=n[0];l(()=>r)},[]),C=()=>{l(null)},S=O(),T={headers:{"content-type":"multipart/form-data"}},{mutate:P}=L({mutationFn:n=>I.post(B.files.upload,n,T),onSuccess:async({data:n})=>{const{name:r}=n;if(r){const{current:o}=d;o.attachments=r,await f(o)}return n},onSettled:async()=>{l(null),d.current={},await S.invalidateQueries({queryKey:["payments-images"]})},onError:n=>{console.log(n)}}),A={amount:0,paymentType:"",paymentDate:k()},b=R({resolver:H(V),defaultValues:A}),{reset:F,handleSubmit:G,formState:{isSubmitting:_}}=b,q=G(async n=>{try{const r={...n,orderId:t.id,customerId:t.customer.id};if(p){d.current={...r};const o=new FormData;o.append("file",p),o.append("category","Payment"),await P(o)}else await f(r);F()}catch(r){console.log(r)}});return e.jsxs(U,{fullWidth:!0,maxWidth:"lg",open:v,onClose:j,children:[e.jsx(K,{children:"Payment Details"}),e.jsxs(J,{methods:b,onSubmit:q,children:[e.jsxs(W,{children:[e.jsx(c,{}),e.jsxs(i,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(s,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:t.customer.name})]}),e.jsxs(s,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:t.ref})]}),e.jsxs(s,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Date:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:g(t.orderDate)})]}),e.jsxs(s,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Delivery Date:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:t.deliveryDate?g(t.deliveryDate):e.jsx("span",{children:" - "})})]})]}),e.jsx(c,{}),e.jsxs(i,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(s,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:h(t.totalOrderAmount)||"-"})]}),e.jsxs(s,{display:"flex",children:[e.jsx(a,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:h(t.orderPaymentAmount)||"-"})]})]}),e.jsx(c,{}),e.jsx(i,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(s,{display:"flex",children:[e.jsx(a,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(a,{component:"span",variant:"subtitle1",children:h(t.totalOrderAmount-t.orderPaymentAmount)})]})}),e.jsx(c,{}),e.jsxs(i,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(s,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(u.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1}}),e.jsx(u.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1}})]}),e.jsxs(s,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(s,{children:e.jsxs(u.Select,{name:"paymentType",label:"Payment Type",children:[e.jsx(x,{value:"Cash",children:"Cash"}),e.jsx(x,{value:"Transfer",children:"Transfer"}),e.jsx(x,{value:"Card",children:"Card"})]})}),e.jsxs(i,{spacing:1.5,children:[e.jsx(a,{variant:"subtitle2",children:"Attachments"}),e.jsx(M,{value:p,onDrop:w,onDelete:C})]})]})]})]}),e.jsxs(z,{children:[e.jsx(N,{type:"submit",variant:"contained",children:"Save"}),e.jsx(E,{color:"inherit",variant:"outlined",onClick:()=>{j(),l(null)},children:"Cancel"})]})]})]})};export{ie as O};
