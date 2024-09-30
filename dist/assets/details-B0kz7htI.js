import{j as e,B as n,T as N,eu as H,ds as S,S as l,em as C,e as j,I as L,aD as B,ev as $,ew as G,aJ as T,dy as W,r as m,o as P,dI as J,ex as M,ey as O,e8 as Y,p as w,G as b,dJ as f,dH as g,dK as D,ec as _,H as V,C as X}from"./index-MIl7JRte.js";import{u as z,E as U}from"./error-block-ByqY2klf.js";import{u as Z}from"./use-params-DhK642de.js";import"./chart-legends-hF5AEtdn.js";import{l as ee}from"./index-BjsGsgZo.js";import{u as v}from"./useMutation-D1t2nLjA.js";import{C as te}from"./confirm-dialog-fY0DmSZP.js";import{C as se}from"./custom-breadcrumbs-BPBIAp3F.js";import{b as u}from"./format-number-BzcJdoz7.js";import{P as I}from"./permission-access-controller-C7WX44v_.js";import{T as ie,t as ne,a as ae,b as re,c as oe,d as le,e as ce}from"./TimelineSeparator-Bj5zLIuj.js";import{C as E}from"./CardHeader-CbPTXCsG.js";import{O as de}from"./order-product-table-D_s7ky5i.js";import{O as pe}from"./order-payment-details-dialog-DLs8mGGm.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./index-BwFSO260.js";import"./DialogContent-MWHQ5VhB.js";import"./DialogTitle-G7RMJBLj.js";import"./table-head-custom-DFFJs59-.js";import"./TableCell-CUexyj7j.js";import"./Checkbox-CTo3jFS7.js";import"./incrementer-button-9SSzoLJA.js";import"./incrementer-percentage-button-DInlojBz.js";import"./form-provider-ClQZuquv.js";import"./TextField-IqMcSK3A.js";import"./FormControl-BIKiU88P.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Db4FFM5y.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-4maV1u2X.js";import"./Select-DVfqO7-t.js";import"./Menu-C288flBa.js";import"./InputBase-CEys6nDV.js";import"./FormHelperText-DeESC_bm.js";import"./Rating-Mc2yJZtd.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DwhMiLHm.js";import"./index-HtHD65D2.js";import"./Slider-CdWGWfzg.js";import"./RadioGroup-CcVm08vh.js";import"./FormGroup-BwNeKb70.js";import"./FormControlLabel-Dijue8fI.js";import"./countries-DSLisFCy.js";import"./InputAdornment-CNG_kA5I.js";import"./Autocomplete-C2g3c3nW.js";import"./Chip-JwX3biZx.js";import"./country-select-Ck7C9Bj9.js";import"./upload-avatar-CXFdLHTf.js";import"./image-DTyoCSe4.js";import"./DatePicker-BZi2O4La.js";import"./ListItem-DbyD7F5O.js";import"./MobileDateTimePicker-DdCoDJmO.js";import"./Tabs-Cg0yLyVo.js";import"./KeyboardArrowRight-BxpBdu-g.js";import"./schema-helper-BbEVYs1g.js";import"./LoadingButton-51KhMkt4.js";import"./CircularProgress-DwFlPOsz.js";const xe=({order:t,payments:s,dialog:a,handleApproveOrder:r,handlePrint:h})=>{const p=e.jsxs(n,{sx:{pr:4,pl:4,pb:4,pt:2},children:[e.jsx(ie,{sx:{p:0,m:0,[`& .${ne.root}:before`]:{flex:0,padding:0}},children:s==null?void 0:s.map((c,o)=>{const x=o===0,d=o===s.length-1;return e.jsxs(ae,{children:[e.jsxs(re,{children:[e.jsx(oe,{color:x&&"primary"||"grey"}),d?null:e.jsx(le,{})]}),e.jsx(ce,{children:e.jsxs(n,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(n,{children:[e.jsx(N,{variant:"subtitle2",children:u(c.amount)}),e.jsx(n,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:H(c.paymentDate)})]}),e.jsx(S,{color:"success",children:c.paymentType})]})})]},c.id)})}),e.jsxs(l,{justifyContent:"flex-end",spacing:1.5,sx:{marginTop:2},children:[e.jsx(I,{permission:C.ADD_PAYMENT,children:e.jsx(j,{variant:"contained",onClick:()=>a.onTrue(),children:"Add Payment"})}),(t==null?void 0:t.status)==="Draft"&&e.jsx(j,{variant:"outlined",onClick:()=>{r(t.id)},children:"Approve"}),e.jsx(I,{permission:C.PRINT_ORDER,children:e.jsxs(j,{variant:"outlined",color:"info",onClick:()=>h(),children:[e.jsx(L,{icon:"solar:printer-minimalistic-bold"}),e.jsx("span",{style:{margin:4},children:"Print Order"})]})})]})]});return e.jsxs(B,{children:[(s==null?void 0:s.length)>0&&e.jsx(E,{title:"Payments"}),p]})};function me({order:t,discount:s,customer:a,totalAmount:r}){var p,c,o,x;const h=e.jsxs(l,{spacing:2,alignItems:"flex-end",sx:{p:3,textAlign:"right",typography:"body2"},children:[e.jsxs(l,{direction:"row",children:[e.jsx(n,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(n,{sx:{width:160,typography:"subtitle2"},children:u(r)||"-"})]}),e.jsxs(l,{direction:"row",children:[e.jsx(n,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(n,{sx:{width:160,...s&&{color:"error.main"}},children:s?`- ${u(s)}`:"-"})]}),e.jsxs(l,{direction:"row",children:[e.jsxs(n,{sx:{color:"text.secondary"},children:["Tax (",((p=t==null?void 0:t.application)==null?void 0:p.taxPercentage)||"0","%)"]}),e.jsx(n,{sx:{width:160},children:(c=t==null?void 0:t.application)!=null&&c.taxPercentage?u($(r-s,(o=t==null?void 0:t.application)==null?void 0:o.taxPercentage)):"-"})]}),e.jsxs(l,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx("div",{children:"Gross Total"}),e.jsx(n,{sx:{width:160},children:u(G(r-s,(x=t==null?void 0:t.application)==null?void 0:x.taxPercentage))||"-"})]})]});return e.jsxs(B,{children:[e.jsx(l,{justifyContent:"center",alignItems:"center",children:e.jsxs("h1",{className:"print-title",children:["Order REF: #",t.ref]})}),e.jsx("style",{jsx:!0,children:`
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
      `}),e.jsx(E,{className:"print-hide",title:"Details"}),e.jsxs(l,{direction:"row",justifyContent:"space-between",sx:{p:3,typography:"body2"},children:[e.jsxs(n,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[e.jsx(l,{direction:"row",sx:{typography:"subtitle2",marginBottom:1},children:e.jsx("div",{children:"Order Details"})}),e.jsxs(n,{sx:{color:"text.secondary"},children:["ORDER ID: #",t.ref]}),e.jsxs(n,{sx:{color:"text.secondary"},children:["Order Date: ",T(t.orderDate)]}),e.jsxs(n,{sx:{color:"text.secondary"},children:["Delivery Date: ",t.deliveryDate?T(t.deliveryDate):e.jsx("span",{children:" - "})]})]}),e.jsxs(n,{flexDirection:"column",gap:.5,sx:{display:"flex",width:"100%",p:1,borderRight:d=>`dashed 2px ${d.vars.palette.background.neutral}`,borderLeft:d=>`dashed 2px ${d.vars.palette.background.neutral}`},children:[e.jsx(l,{display:"flex",justifyContent:"center",alignItems:"center",sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"NFCAC"})}),e.jsxs(n,{sx:{color:"text.secondary"},children:["Status :"," ",e.jsx(S,{variant:"soft",color:(t==null?void 0:t.status)==="Ready"&&"info"||(t==null?void 0:t.status)==="InProcess"&&"warning"||(t==null?void 0:t.status)==="Delivered"&&"success"||"default",children:t==null?void 0:t.status})]}),e.jsxs(n,{sx:{color:"text.secondary"},children:["TAX: ",a==null?void 0:a.taxNumber]})]}),e.jsxs(n,{flexDirection:"column",alignItems:"center",sx:{p:1,display:"flex",width:"100%"},children:[e.jsx(l,{display:"flex",alignItems:"center",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Invoice To"})}),e.jsx(n,{sx:{color:"text.secondary"},children:a==null?void 0:a.name}),e.jsxs(n,{sx:{color:"text.secondary"},children:["Tel: ",a==null?void 0:a.phoneNumber]})]})]}),e.jsx(W,{children:e.jsx(n,{fullWidth:!0,alignItems:"center",sx:{p:3,borderBottom:d=>`dashed 2px ${d.vars.palette.background.neutral}`},children:e.jsx(de,{products:t.productToOrder,isDetail:!0})})}),h,(t==null?void 0:t.notes)&&e.jsx(l,{justifyContent:"space-between",sx:{p:3,typography:"body2"},children:e.jsxs(n,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[e.jsx(l,{sx:{typography:"subtitle2",marginBottom:1},children:e.jsx("div",{children:"Notes:"})}),e.jsx(n,{sx:{color:"text.secondary"},children:t==null?void 0:t.notes})]})})]})}function he({currentOrder:t}){const[s,a]=m.useState(t),[r,h]=m.useState(),p=m.useRef(),c=P(),o=J(),[x,d]=m.useState([]),y=P(),F=M();m.useEffect(()=>{a(t)},[t]),m.useEffect(()=>{const i=O(s==null?void 0:s.payments,"paymentDate");d(i)},[s==null?void 0:s.payments]);const{mutate:k}=v({mutationFn:i=>f.post(g.payments.create,i),onSuccess:async i=>{D.success("New Payment Has Been Created!");const{data:R}=i,K=O([...x,R],"paymentDate");d(K)},onSettled:async()=>{await o.invalidateQueries({queryKey:["payments"]});const{id:i}=s;await o.invalidateQueries({queryKey:["order",i]}),c.onFalse()},onError:i=>{console.log(i)}}),{mutate:A}=v({mutationFn:i=>f.get(g.order.approve+i),onSuccess:async({data:i})=>{i!=null&&i.length?(y.onTrue(),h(i)):(D.success("Order Has Been Approved!"),a(i))},onSettled:async()=>{const{id:i}=s;await o.invalidateQueries({queryKey:["orders"]}),await o.invalidateQueries({queryKey:["orders","analytics"]}),await o.invalidateQueries({queryKey:["order",i]})},onError:i=>{console.log(i)}}),{mutate:q}=v({mutationFn:i=>f.post(g.order.createPlans,i),onSuccess:async({data:i})=>{D.success("Order Has Been Approved!"),a(i),y.onFalse()},onSettled:async()=>{const{id:i}=s;await o.invalidateQueries({queryKey:["orders"]}),await o.invalidateQueries({queryKey:["orders","analytics"]}),await o.invalidateQueries({queryKey:["order",i]})},onError:i=>{console.log(i)}}),Q=ee.useReactToPrint({content:()=>p.current});return e.jsxs(e.Fragment,{children:[e.jsxs(Y,{children:[e.jsx(se,{links:[{name:"Dashboard",href:w.dashboard.root},{name:"Order",href:w.dashboard.order.root},{name:"Order Details"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(b,{container:!0,spacing:3,children:[e.jsx(b,{xs:12,md:9,children:e.jsx(l,{ref:p,spacing:3,direction:{xs:"column-reverse",md:"column"},children:e.jsx(me,{order:s,customer:s==null?void 0:s.customer,discount:s==null?void 0:s.discount,totalAmount:s==null?void 0:s.totalOrderAmount})})}),e.jsx(b,{xs:12,md:3,children:e.jsx(xe,{order:s,payments:x,dialog:c,handleApproveOrder:A,handlePrint:Q})})]}),e.jsx(pe,{order:s,open:c.value,onClose:c.onFalse,handler:k})]}),e.jsx(te,{open:y.value,onClose:y.onFalse,title:"Out of Stock",content:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Products are out of Stock! do you want to create plans?"}),e.jsxs(n,{sx:{mt:1,mb:1},children:["You need to create ",e.jsx("span",{style:{fontWeight:"bold"},children:r==null?void 0:r.length})," :"]}),r==null?void 0:r.map(i=>e.jsxs(n,{children:["Plan for ",e.jsx("span",{style:{fontWeight:"bold"},children:i.product.name})," because is missing"," ",e.jsx("span",{style:{fontWeight:"bold",color:`${F.vars.palette.error.light}`},children:i.missingQuantity}),"."]}))]}),action:e.jsx(j,{variant:"contained",color:"error",onClick:()=>{q(r)},children:(r==null?void 0:r.length)>1?"Create Plans":"Create Plan"})})]})}const ue={title:`Order details | Dashboard - ${X.site.name}`};function Dt(){const{id:t=""}=Z(),s=z({queryKey:["order",t],queryFn:async()=>{const{data:a}=await f.get(g.order.details+t);return a}});return s.isPending||s.isLoading?e.jsx(_,{}):s.isError?e.jsx(U,{route:w.dashboard.order.root}):e.jsxs(e.Fragment,{children:[e.jsx(V,{children:e.jsxs("title",{children:[" ",ue.title]})}),e.jsx(he,{currentOrder:s.data})]})}export{Dt as default};