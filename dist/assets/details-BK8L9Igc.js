import{j as e,B as i,S as r,T as O,ey as A,dw as B,e as m,dN as f,dO as j,dM as y,dP as b,aH as w,aN as g,dD as I,w as P,ed as S,p as u,G as h,eh as F,r as R,H as k,C as q}from"./index-DxrsDIwY.js";import{u as E,E as N}from"./error-block-Cg6RpAZK.js";import{u as H}from"./use-params-DfaTvlxU.js";import"./chart-legends-DUFKcd5Q.js";import{u as D}from"./useMutation-f5nVFG-s.js";import{C as Q}from"./custom-breadcrumbs-Dd3lNCwD.js";import{b as x}from"./format-number-DtiborQ_.js";import{T as $}from"./TextField-C2VP4uls.js";import{T as K,t as G,a as L,b as M,c as V,d as W,e as J}from"./TimelineSeparator-C11sRvIf.js";import{C as T}from"./CardHeader-C4RbkosU.js";import{O as U}from"./order-product-table-YaxYCqbq.js";import{O as X}from"./order-payment-details-dialog-PxDq2EkD.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./index-wGJ5bMai.js";import"./FormControl-CC-u2HkW.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CQVMsmZY.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-EgLeF9WB.js";import"./Select-eQVewVvt.js";import"./Menu-C6l2dIf8.js";import"./InputBase-B9Lf9cs-.js";import"./FormHelperText-DMsDqsw2.js";import"./table-head-custom-w-4MLJlt.js";import"./TableCell-CJNt5t20.js";import"./Checkbox-ylG2wecL.js";import"./incrementer-button-BtQ5_PmY.js";import"./form-provider-DzAJAZLb.js";import"./countries-DSLisFCy.js";import"./InputAdornment-D2FMqto9.js";import"./upload-avatar-4NlzUb0f.js";import"./image-yj0A9F1D.js";import"./fields-Dsl2Pqgx.js";import"./Rating-FZfLYAhV.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-Dqkfe7Lc.js";import"./index-BNV8Ha3a.js";import"./Slider-R3UsSTxo.js";import"./RadioGroup-IW7zsT63.js";import"./FormGroup-69w0Ctto.js";import"./FormControlLabel-DKxiCaQc.js";import"./Autocomplete-DQd8H5I4.js";import"./Chip-Bq-6ExUD.js";import"./country-select-6tMU1vH_.js";import"./DatePicker-CHBP34D3.js";import"./DialogContent-262oYdAn.js";import"./ListItem-Cbx-5wAg.js";import"./MobileDateTimePicker-UWVv-JJA.js";import"./schema-helper-Dd4Kd2WC.js";import"./DialogTitle-C_65wNCI.js";import"./LoadingButton-BPYHnDdd.js";import"./CircularProgress-CRSD6Bm4.js";const Y="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let Z=(t=21)=>{let s="",o=crypto.getRandomValues(new Uint8Array(t));for(;t--;)s+=Y[o[t]&63];return s};const _=({order:t,payments:s,dialog:o,setTriggerRender:l})=>{const c=e.jsxs(i,{sx:{pr:4,pl:4,pb:4,pt:2},children:[e.jsx(i,{sx:{mb:2},children:e.jsx($,{size:"small",fullWidth:!0})}),e.jsx(r,{sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Payments"})}),e.jsx(K,{sx:{p:0,m:0,[`& .${G.root}:before`]:{flex:0,padding:0}},children:s==null?void 0:s.map((a,d)=>{const v=d===0,C=d===s.length-1;return e.jsxs(L,{children:[e.jsxs(M,{children:[e.jsx(V,{color:v&&"primary"||"grey"}),C?null:e.jsx(W,{})]}),e.jsx(J,{children:e.jsxs(i,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(i,{children:[e.jsx(O,{variant:"subtitle2",children:x(a.amount)}),e.jsx(i,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:A(a.paymentDate)})]}),e.jsx(B,{color:"success",children:a.paymentType})]})})]},a.id)})}),e.jsxs(r,{justifyContent:"flex-end",spacing:1.5,sx:{marginTop:2},children:[e.jsx(m,{variant:"contained",onClick:()=>o.onTrue(),children:"Add Payment"}),e.jsx(m,{variant:"outlined",onClick:()=>{p(t.id)},children:"Approve"}),e.jsx(m,{children:"Print Invoice"})]})]}),n=f(),{mutate:p}=D({mutationFn:a=>j.get(y.order.approve+a),onSuccess:async()=>{b.success("Order Has Been Approved!")},onSettled:async()=>{const a=t.id;await n.invalidateQueries({queryKey:["orders"]}),await n.invalidateQueries({queryKey:["order",a]})},onError:a=>{console.log(a)}});return e.jsxs(w,{children:[e.jsx(T,{title:"Product Addons"}),c]})};function z({taxes:t,order:s,shipping:o,discount:l,subtotal:c,customer:n,totalAmount:p}){const a=e.jsxs(r,{spacing:2,alignItems:"flex-end",sx:{p:3,textAlign:"right",typography:"body2"},children:[e.jsxs(r,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(i,{sx:{width:160,typography:"subtitle2"},children:x(c)||"-"})]}),e.jsxs(r,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Addon"}),e.jsx(i,{sx:{width:160,...o&&{color:"error.main"}},children:o?`- ${x(o)}`:"-"})]}),e.jsxs(r,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(i,{sx:{width:160,...l&&{color:"error.main"}},children:l?`- ${x(l)}`:"-"})]}),e.jsxs(r,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Tax (0%)"}),e.jsx(i,{sx:{width:160},children:t?x(t):"-"})]}),e.jsxs(r,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx("div",{children:"Gross Total"}),e.jsx(i,{sx:{width:160},children:x(p)||"-"})]})]});return e.jsxs(w,{children:[e.jsx(T,{title:"Details"}),e.jsxs(r,{direction:"row",justifyContent:"space-between",sx:{p:3,typography:"body2"},children:[e.jsxs(i,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[e.jsx(r,{direction:"row",sx:{typography:"subtitle2",marginBottom:1},children:e.jsx("div",{children:"Order Details"})}),e.jsxs(i,{sx:{color:"text.secondary"},children:["ORDER ID: #ORD-",s.id]}),e.jsxs(i,{sx:{color:"text.secondary"},children:["Order Date: ",g(s.orderDate)]}),e.jsxs(i,{sx:{color:"text.secondary"},children:["Delivery Date: ",s.deliveryDate?g(s.deliveryDate):e.jsx("span",{children:" - "})]})]}),e.jsxs(i,{flexDirection:"column",gap:.5,sx:{display:"flex",width:"100%",p:1,borderRight:d=>`dashed 2px ${d.vars.palette.background.neutral}`,borderLeft:d=>`dashed 2px ${d.vars.palette.background.neutral}`},children:[e.jsx(r,{display:"flex",justifyContent:"center",alignItems:"center",sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"NFCAC"})}),e.jsxs(i,{sx:{color:"text.secondary"},children:["Status : ",s.status]}),e.jsxs(i,{sx:{color:"text.secondary"},children:["TAX: ",n==null?void 0:n.taxNumber]})]}),e.jsxs(i,{flexDirection:"column",alignItems:"center",sx:{p:1,display:"flex",width:"100%"},children:[e.jsx(r,{display:"flex",alignItems:"center",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Invoice To"})}),e.jsx(i,{sx:{color:"text.secondary"},children:n==null?void 0:n.name}),e.jsxs(i,{sx:{color:"text.secondary"},children:["Tel: ",n==null?void 0:n.phoneNumber]})]})]}),e.jsx(I,{children:e.jsx(i,{fullWidth:!0,alignItems:"center",sx:{p:3,borderBottom:d=>`dashed 2px ${d.vars.palette.background.neutral}`},children:e.jsx(U,{products:s.productToOrder,isDetail:!0})})}),a,(s==null?void 0:s.notes)&&e.jsx(r,{justifyContent:"space-between",sx:{p:3,typography:"body2"},children:e.jsxs(i,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[e.jsx(r,{sx:{typography:"subtitle2",marginBottom:1},children:e.jsx("div",{children:"Notes:"})}),e.jsx(i,{sx:{color:"text.secondary"},children:s==null?void 0:s.notes})]})})]})}function ee({order:t}){var c;const s=P(),o=f(),{mutate:l}=D({mutationFn:n=>j.post(y.payments.create,n),onSuccess:async()=>{b.success("New Payment Has Been Created!")},onSettled:async()=>{await o.invalidateQueries({queryKey:["payments"]}),await o.invalidateQueries({queryKey:["orders",t.id]}),s.onFalse()},onError:n=>{console.log(n)}});return e.jsxs(S,{children:[e.jsx(Q,{links:[{name:"Dashboard",href:u.dashboard.root},{name:"Order",href:u.dashboard.order.root},{name:"Order Details"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{xs:12,md:9,children:e.jsx(r,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:e.jsx(z,{order:t,customer:t==null?void 0:t.customer,taxes:(c=t==null?void 0:t.customer)==null?void 0:c.customer,shipping:t==null?void 0:t.shipping,discount:t==null?void 0:t.discount,subtotal:t==null?void 0:t.subtotal,totalAmount:t==null?void 0:t.totalOrderAmount})})}),e.jsx(h,{xs:12,md:3,children:e.jsx(_,{order:t,payments:t==null?void 0:t.payments,dialog:s})})]}),e.jsx(X,{order:t,open:s.value,onClose:s.onFalse,handler:l})]})}const te={title:`Order details | Dashboard - ${q.site.name}`};function st(){const{id:t=""}=H(),s=E({queryKey:["order",t],queryFn:async()=>{const{data:c}=await j.get(y.order.details+t);return c}});if(s.isPending||s.isLoading)return e.jsx(F,{});if(s.isError)return e.jsx(N,{route:u.dashboard.order.root});const[o,l]=R.useState(Z());return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsxs("title",{children:[" ",te.title]})}),e.jsx(ee,{order:s.data,setTriggerRender:l})]})}export{st as default};
