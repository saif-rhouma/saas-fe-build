import{j as e,B as i,S as r,T as R,ew as L,du as S,e as j,I as N,aF as I,aL as T,dB as H,r as p,w as O,dL as $,ex as W,ey as P,eb as G,p as D,G as b,dM as f,dK as g,dN as w,ef as M,H as z,C as J}from"./index-lMp9zap6.js";import{u as V,E as X}from"./error-block-DXWblvjp.js";import{u as Y}from"./use-params-BE9ZeZdM.js";import"./chart-legends-CluWo5DV.js";import{l as U,O as Z}from"./order-payment-details-dialog-BTb-1qAv.js";import{u as v}from"./useMutation-B2tKEkiI.js";import{C as _}from"./confirm-dialog-CfE53hWp.js";import{C as ee}from"./custom-breadcrumbs-CnRCretL.js";import{b as m}from"./format-number-BW6JEF9q.js";import{T as te}from"./TextField-BEm0Gfgz.js";import{T as se,t as ie,a as ne,b as re,c as oe,d as ae,e as le}from"./TimelineSeparator--1CeDJaQ.js";import{C as B}from"./CardHeader-s6sY6NkO.js";import{O as ce}from"./order-product-table-BFHnhjvd.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./index-KeOEaw8h.js";import"./form-provider-Cj0Z9UsE.js";import"./FormHelperText-CiWaMPMf.js";import"./formControlState-Dq1zat_P.js";import"./Rating-D1epoFLf.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-56m6PEpo.js";import"./Menu-Di83eYAm.js";import"./index-DTyO1f1S.js";import"./Slider--FnFNgPJ.js";import"./FormControl-BFlCQpvi.js";import"./utils-DoM3o7-Q.js";import"./FormLabel-CKyhTT_V.js";import"./RadioGroup-C-GnO1ca.js";import"./FormGroup-BE8TyzSB.js";import"./FormControlLabel-CSqTNcaw.js";import"./countries-DSLisFCy.js";import"./InputAdornment-CznJJWQj.js";import"./Autocomplete-DnVwYLlc.js";import"./Select-DE7_tqxX.js";import"./InputBase-D6UR9yYG.js";import"./Chip-lc0vODcu.js";import"./country-select-DkXlsKd6.js";import"./InputLabel-D2FT-Pcv.js";import"./Checkbox-BfbryewD.js";import"./upload-avatar-jEC4OtmL.js";import"./image-7Gw8g56m.js";import"./DatePicker-CRaT7_Tx.js";import"./DialogContent-B0tqVN_s.js";import"./ListItem-Eefms6HN.js";import"./MobileDateTimePicker-CghIhRUp.js";import"./schema-helper-DOzR5VHI.js";import"./DialogTitle-BCkrw5VA.js";import"./LoadingButton-BI3VwLzw.js";import"./CircularProgress-CX5vuYgb.js";import"./table-head-custom-BwAPFtwe.js";import"./TableCell-ljoaX5oi.js";import"./incrementer-button-iExNop-d.js";const de=({order:o,payments:t,dialog:c,handleApproveOrder:n,handlePrint:h})=>{const a=e.jsxs(i,{sx:{pr:4,pl:4,pb:4,pt:2},children:[e.jsx(i,{sx:{mb:2},children:e.jsx(te,{size:"small",fullWidth:!0})}),e.jsx(r,{sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Payments"})}),e.jsx(se,{sx:{p:0,m:0,[`& .${ie.root}:before`]:{flex:0,padding:0}},children:t==null?void 0:t.map((d,l)=>{const x=l===0,u=l===t.length-1;return e.jsxs(ne,{children:[e.jsxs(re,{children:[e.jsx(oe,{color:x&&"primary"||"grey"}),u?null:e.jsx(ae,{})]}),e.jsx(le,{children:e.jsxs(i,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(i,{children:[e.jsx(R,{variant:"subtitle2",children:m(d.amount)}),e.jsx(i,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:L(d.paymentDate)})]}),e.jsx(S,{color:"success",children:d.paymentType})]})})]},d.id)})}),e.jsxs(r,{justifyContent:"flex-end",spacing:1.5,sx:{marginTop:2},children:[e.jsx(j,{variant:"contained",onClick:()=>c.onTrue(),children:"Add Payment"}),(o==null?void 0:o.status)==="Draft"&&e.jsx(j,{variant:"outlined",onClick:()=>{n(o.id)},children:"Approve"}),e.jsxs(j,{variant:"outlined",color:"info",onClick:()=>h(),children:[e.jsx(N,{icon:"solar:printer-minimalistic-bold"}),e.jsx("span",{style:{margin:4},children:"Print Invoice"})]})]})]});return e.jsxs(I,{children:[e.jsx(B,{title:"Product Addons"}),a]})};function xe({taxes:o,order:t,shipping:c,discount:n,subtotal:h,customer:a,totalAmount:d}){const l=e.jsxs(r,{spacing:2,alignItems:"flex-end",sx:{p:3,textAlign:"right",typography:"body2"},children:[e.jsxs(r,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(i,{sx:{width:160,typography:"subtitle2"},children:m(h)||"-"})]}),e.jsxs(r,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Addon"}),e.jsx(i,{sx:{width:160,...c&&{color:"error.main"}},children:c?`- ${m(c)}`:"-"})]}),e.jsxs(r,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(i,{sx:{width:160,...n&&{color:"error.main"}},children:n?`- ${m(n)}`:"-"})]}),e.jsxs(r,{direction:"row",children:[e.jsx(i,{sx:{color:"text.secondary"},children:"Tax (0%)"}),e.jsx(i,{sx:{width:160},children:o?m(o):"-"})]}),e.jsxs(r,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx("div",{children:"Gross Total"}),e.jsx(i,{sx:{width:160},children:m(d)||"-"})]})]});return e.jsxs(I,{children:[e.jsx(r,{justifyContent:"center",alignItems:"center",children:e.jsxs("h1",{className:"print-title",children:["Order REF: #ORD-",t.id]})}),e.jsx("style",{jsx:!0,children:`
        .print-title {
          display: none; /* Hide on screen */
        }

        @media print {
          .print-title {
            display: block; /* Show only when printing */
          }
          .print-hide {
            display: none; /* Hide on screen */
          }
        }
      `}),e.jsx(B,{className:"print-hide",title:"Details"}),e.jsxs(r,{direction:"row",justifyContent:"space-between",sx:{p:3,typography:"body2"},children:[e.jsxs(i,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[e.jsx(r,{direction:"row",sx:{typography:"subtitle2",marginBottom:1},children:e.jsx("div",{children:"Order Details"})}),e.jsxs(i,{sx:{color:"text.secondary"},children:["ORDER ID: #ORD-",t.id]}),e.jsxs(i,{sx:{color:"text.secondary"},children:["Order Date: ",T(t.orderDate)]}),e.jsxs(i,{sx:{color:"text.secondary"},children:["Delivery Date: ",t.deliveryDate?T(t.deliveryDate):e.jsx("span",{children:" - "})]})]}),e.jsxs(i,{flexDirection:"column",gap:.5,sx:{display:"flex",width:"100%",p:1,borderRight:x=>`dashed 2px ${x.vars.palette.background.neutral}`,borderLeft:x=>`dashed 2px ${x.vars.palette.background.neutral}`},children:[e.jsx(r,{display:"flex",justifyContent:"center",alignItems:"center",sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"NFCAC"})}),e.jsxs(i,{sx:{color:"text.secondary"},children:["Status :"," ",e.jsx(S,{variant:"soft",color:(t==null?void 0:t.status)==="Ready"&&"info"||(t==null?void 0:t.status)==="InProcess"&&"warning"||(t==null?void 0:t.status)==="Delivered"&&"success"||"default",children:t==null?void 0:t.status})]}),e.jsxs(i,{sx:{color:"text.secondary"},children:["TAX: ",a==null?void 0:a.taxNumber]})]}),e.jsxs(i,{flexDirection:"column",alignItems:"center",sx:{p:1,display:"flex",width:"100%"},children:[e.jsx(r,{display:"flex",alignItems:"center",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Invoice To"})}),e.jsx(i,{sx:{color:"text.secondary"},children:a==null?void 0:a.name}),e.jsxs(i,{sx:{color:"text.secondary"},children:["Tel: ",a==null?void 0:a.phoneNumber]})]})]}),e.jsx(H,{children:e.jsx(i,{fullWidth:!0,alignItems:"center",sx:{p:3,borderBottom:x=>`dashed 2px ${x.vars.palette.background.neutral}`},children:e.jsx(ce,{products:t.productToOrder,isDetail:!0})})}),l,(t==null?void 0:t.notes)&&e.jsx(r,{justifyContent:"space-between",sx:{p:3,typography:"body2"},children:e.jsxs(i,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[e.jsx(r,{sx:{typography:"subtitle2",marginBottom:1},children:e.jsx("div",{children:"Notes:"})}),e.jsx(i,{sx:{color:"text.secondary"},children:t==null?void 0:t.notes})]})})]})}function pe({currentOrder:o}){var C;const[t,c]=p.useState(o),[n,h]=p.useState(),a=p.useRef(),d=O(),l=$(),[x,u]=p.useState([]),y=O(),F=W();p.useEffect(()=>{c(o)},[o]),p.useEffect(()=>{const s=P(t==null?void 0:t.payments,"paymentDate");u(s)},[t==null?void 0:t.payments]);const{mutate:k}=v({mutationFn:s=>f.post(g.payments.create,s),onSuccess:async s=>{w.success("New Payment Has Been Created!");const{data:Q}=s,K=P([...x,Q],"paymentDate");u(K)},onSettled:async()=>{await l.invalidateQueries({queryKey:["payments"]});const{id:s}=t;await l.invalidateQueries({queryKey:["order",s]}),d.onFalse()},onError:s=>{console.log(s)}}),{mutate:A}=v({mutationFn:s=>f.get(g.order.approve+s),onSuccess:async({data:s})=>{s!=null&&s.length?(y.onTrue(),h(s)):(w.success("Order Has Been Approved!"),c(s))},onSettled:async()=>{const{id:s}=t;await l.invalidateQueries({queryKey:["orders"]}),await l.invalidateQueries({queryKey:["orders","analytics"]}),await l.invalidateQueries({queryKey:["order",s]})},onError:s=>{console.log(s)}}),{mutate:E}=v({mutationFn:s=>f.post(g.order.createPlans,s),onSuccess:async({data:s})=>{w.success("Order Has Been Approved!"),c(s),y.onFalse()},onSettled:async()=>{const{id:s}=t;await l.invalidateQueries({queryKey:["orders"]}),await l.invalidateQueries({queryKey:["orders","analytics"]}),await l.invalidateQueries({queryKey:["order",s]})},onError:s=>{console.log(s)}}),q=U.useReactToPrint({content:()=>a.current});return e.jsxs(e.Fragment,{children:[e.jsxs(G,{children:[e.jsx(ee,{links:[{name:"Dashboard",href:D.dashboard.root},{name:"Order",href:D.dashboard.order.root},{name:"Order Details"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(b,{container:!0,spacing:3,children:[e.jsx(b,{xs:12,md:9,children:e.jsx(r,{ref:a,spacing:3,direction:{xs:"column-reverse",md:"column"},children:e.jsx(xe,{order:t,customer:t==null?void 0:t.customer,taxes:(C=t==null?void 0:t.customer)==null?void 0:C.customer,shipping:t==null?void 0:t.shipping,discount:t==null?void 0:t.discount,subtotal:t==null?void 0:t.subtotal,totalAmount:t==null?void 0:t.totalOrderAmount})})}),e.jsx(b,{xs:12,md:3,children:e.jsx(de,{order:t,payments:x,dialog:d,handleApproveOrder:A,handlePrint:q})})]}),e.jsx(Z,{order:t,open:d.value,onClose:d.onFalse,handler:k})]}),e.jsx(_,{open:y.value,onClose:y.onFalse,title:"Out of Stock",content:e.jsxs(e.Fragment,{children:[e.jsx(i,{children:"Products are out of Stock! do you want to create plans?"}),e.jsxs(i,{sx:{mt:1,mb:1},children:["You need to create ",e.jsx("span",{style:{fontWeight:"bold"},children:n==null?void 0:n.length})," :"]}),n==null?void 0:n.map(s=>e.jsxs(i,{children:["Plan for ",e.jsx("span",{style:{fontWeight:"bold"},children:s.product.name})," because is missing"," ",e.jsx("span",{style:{fontWeight:"bold",color:`${F.vars.palette.error.light}`},children:s.missingQuantity}),"."]}))]}),action:e.jsx(j,{variant:"contained",color:"error",onClick:()=>{E(n)},children:(n==null?void 0:n.length)>1?"Create Plans":"Create Plan"})})]})}const me={title:`Order details | Dashboard - ${J.site.name}`};function ht(){const{id:o=""}=Y(),t=V({queryKey:["order",o],queryFn:async()=>{const{data:c}=await f.get(g.order.details+o);return c}});return t.isPending||t.isLoading?e.jsx(M,{}):t.isError?e.jsx(X,{route:D.dashboard.order.root}):e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsxs("title",{children:[" ",me.title]})}),e.jsx(pe,{currentOrder:t.data})]})}export{ht as default};
