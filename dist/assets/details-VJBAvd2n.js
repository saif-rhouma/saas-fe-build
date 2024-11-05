import{j as e,B as n,T as K,ek as H,d7 as E,S as o,e3 as b,e as y,I as L,cY as I,e9 as $,e2 as W,d0 as P,r as p,i as O,dn as G,ea as V,el as S,dP as Y,p as C,cV as D,dp as j,dm as f,dq as v,dT as _,H as M,C as J}from"./index-DJBSy2EF.js";import{u as X,E as z}from"./error-block-CvrkSCmw.js";import{u as U}from"./use-params-CFpGffir.js";import"./chart-legends-Db2Q8naQ.js";import{l as Z}from"./index-Chusep8g.js";import{u as w}from"./useMutation-CufYe6We.js";import{C as ee}from"./confirm-dialog-CJ1MpGCr.js";import{C as te}from"./custom-breadcrumbs-wu6pKqCp.js";import{b as g}from"./format-number-BkN-sNtV.js";import{P as T}from"./permission-access-controller-BCJVcN5Z.js";import{T as se,t as ie,a as ne,b as re,c as ae,d as oe,e as le}from"./TimelineSeparator-f5HM0nIB.js";import{C as B}from"./CardHeader-CcqBvLFR.js";import{O as ce}from"./order-product-table-DFsgIhcA.js";import{O as de}from"./order-payment-details-dialog-Cpjg5w2W.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./index-cfJrRA7m.js";import"./DialogContent-CludgxUR.js";import"./DialogTitle-BZmEf6-n.js";import"./table-head-custom-DS0GuAHi.js";import"./TableCell-DF0lLe6g.js";import"./Checkbox-CJWY43L-.js";import"./incrementer-button-DwWJx-2R.js";import"./form-provider-B6rN6rcW.js";import"./TextField-B9QH0qQV.js";import"./FormControl-Bvq6kqrZ.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-D51FDdfU.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BcMrCB0K.js";import"./Select-CpdxAjVY.js";import"./Menu-DzF7Vu0n.js";import"./InputBase-DUpzIqxJ.js";import"./FormHelperText-4VkrdFxf.js";import"./Rating-tHWMe1hJ.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-jz5psZbY.js";import"./index-C7-PDvr0.js";import"./Slider-lMSifW85.js";import"./RadioGroup-BHqAuZXd.js";import"./FormGroup-A8YBApVE.js";import"./FormControlLabel-C5zXWVOI.js";import"./utils-CTRen34C.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BDZfHe4A.js";import"./Autocomplete-DrDbH-Lk.js";import"./Chip-Csu7Evuy.js";import"./country-select-G1_Mr0xL.js";import"./upload-avatar-mAHTNZo7.js";import"./image-CcUpnek_.js";import"./DatePicker-B6YlWnqF.js";import"./ListItem-yWcPRO5-.js";import"./MobileDateTimePicker-B5GKNQ1T.js";import"./Tabs-BCERpoja.js";import"./KeyboardArrowRight-J3egVbAl.js";import"./schema-helper-CgwOJ2mn.js";import"./LoadingButton-CA0ERkDn.js";import"./CircularProgress-qkH5YYbv.js";const pe=({order:t,payments:s,dialog:a,handleApproveOrder:r,handlePrint:x})=>{const c=e.jsxs(n,{sx:{pr:4,pl:4,pb:4,pt:2},children:[e.jsx(se,{sx:{p:0,m:0,[`& .${ie.root}:before`]:{flex:0,padding:0}},children:s==null?void 0:s.map((d,l)=>{const m=l===0,h=l===s.length-1;return e.jsxs(ne,{children:[e.jsxs(re,{children:[e.jsx(ae,{color:m&&"primary"||"grey"}),h?null:e.jsx(oe,{})]}),e.jsx(le,{children:e.jsxs(n,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(n,{children:[e.jsx(K,{variant:"subtitle2",children:g(d.amount)}),e.jsx(n,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:H(d.paymentDate)})]}),e.jsx(E,{color:"success",children:d.paymentType})]})})]},d.id)})}),e.jsxs(o,{justifyContent:"flex-end",spacing:1.5,sx:{marginTop:2},children:[e.jsx(T,{permission:b.ADD_PAYMENT,children:e.jsx(y,{variant:"contained",onClick:()=>a.onTrue(),children:"Add Payment"})}),e.jsx(T,{permission:b.APPROVE_ORDER,children:(t==null?void 0:t.status)==="Draft"&&e.jsx(y,{variant:"outlined",onClick:()=>{r(t.id)},children:"Approve"})}),e.jsx(T,{permission:b.PRINT_ORDER,children:e.jsxs(y,{variant:"outlined",color:"info",onClick:()=>x(),children:[e.jsx(L,{icon:"solar:printer-minimalistic-bold"}),e.jsx("span",{style:{margin:4},children:"Print Order"})]})})]})]});return e.jsxs(I,{children:[(s==null?void 0:s.length)>0&&e.jsx(B,{title:"Payments"}),c]})};function xe({order:t,discount:s,customer:a,totalAmount:r}){const x=e.jsxs(o,{spacing:2,alignItems:"flex-end",sx:{p:3,textAlign:"right",typography:"body2"},children:[e.jsxs(o,{direction:"row",children:[e.jsx(n,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(n,{sx:{width:160,typography:"subtitle2"},children:g(r)||"-"})]}),e.jsxs(o,{direction:"row",children:[e.jsx(n,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(n,{sx:{width:160,...s&&{color:"error.main"}},children:s?`- ${s}%`:"-"})]}),e.jsxs(o,{direction:"row",children:[e.jsxs(n,{sx:{color:"text.secondary"},children:["Tax (",(t==null?void 0:t.snapshotTaxPercentage)||"0","%)"]}),e.jsx(n,{sx:{width:160},children:t!=null&&t.snapshotTaxPercentage?g($(r-r*(s/100),t==null?void 0:t.snapshotTaxPercentage)):"-"})]}),e.jsxs(o,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx("div",{children:"Gross Total"}),e.jsx(n,{sx:{width:160},children:g(W(r-r*(s/100),t==null?void 0:t.snapshotTaxPercentage))||"-"})]})]});return e.jsxs(I,{children:[e.jsx(o,{justifyContent:"center",alignItems:"center",children:e.jsxs("h1",{className:"print-title",children:["Order REF: #",t.ref]})}),e.jsx("style",{jsx:!0,children:`
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
          html,
          body {
            height: initial !important;
            overflow: initial !important;
          }

          .scrollableDiv {
            width: 100%;
            height: 100% !important;
            overflow: visible;
          }
        }
      `}),e.jsx(B,{className:"print-hide",title:"Details"}),e.jsxs(o,{direction:"row",justifyContent:"space-between",sx:{p:3,typography:"body2"},children:[e.jsxs(n,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[e.jsx(o,{direction:"row",sx:{typography:"subtitle2",marginBottom:1},children:e.jsx("div",{children:"Order Details"})}),e.jsxs(n,{sx:{color:"text.secondary"},children:["ORDER ID: #",t.ref]}),e.jsxs(n,{sx:{color:"text.secondary"},children:["Order Date: ",P(t.orderDate)]}),e.jsxs(n,{sx:{color:"text.secondary"},children:["Delivery Date: ",t.deliveryDate?P(t.deliveryDate):e.jsx("span",{children:" - "})]})]}),e.jsxs(n,{flexDirection:"column",gap:.5,sx:{display:"flex",width:"100%",p:1,borderRight:c=>`dashed 2px ${c.vars.palette.background.neutral}`,borderLeft:c=>`dashed 2px ${c.vars.palette.background.neutral}`},children:[e.jsx(o,{display:"flex",justifyContent:"center",alignItems:"center",sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"NFCAC"})}),e.jsxs(n,{sx:{color:"text.secondary"},children:["Status :"," ",e.jsx(E,{variant:"soft",color:(t==null?void 0:t.status)==="Ready"&&"info"||(t==null?void 0:t.status)==="InProcess"&&"warning"||(t==null?void 0:t.status)==="Delivered"&&"success"||"default",children:t==null?void 0:t.status})]}),e.jsxs(n,{sx:{color:"text.secondary"},children:["TAX: ",a==null?void 0:a.taxNumber]})]}),e.jsxs(n,{flexDirection:"column",alignItems:"center",sx:{p:1,display:"flex",width:"100%"},children:[e.jsx(o,{display:"flex",alignItems:"center",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Order To"})}),e.jsx(n,{sx:{color:"text.secondary"},children:a==null?void 0:a.name}),e.jsxs(n,{sx:{color:"text.secondary"},children:["Tel: ",a==null?void 0:a.phoneNumber]})]})]}),e.jsx(n,{fullWidth:!0,alignItems:"center",sx:{p:3,borderBottom:c=>`dashed 2px ${c.vars.palette.background.neutral}`},children:e.jsx(ce,{products:t.productToOrder,isDetail:!0})}),x,(t==null?void 0:t.notes)&&e.jsx(o,{justifyContent:"space-between",sx:{p:3,typography:"body2"},children:e.jsxs(n,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[e.jsx(o,{sx:{typography:"subtitle2",marginBottom:1},children:e.jsx("div",{children:"Notes:"})}),e.jsx(n,{sx:{color:"text.secondary"},children:t==null?void 0:t.notes})]})})]})}function me({currentOrder:t}){const[s,a]=p.useState(t),[r,x]=p.useState(),c=p.useRef(),d=O(),l=G(),[m,h]=p.useState([]),u=O(),k=V();p.useEffect(()=>{a(t)},[t]),p.useEffect(()=>{const i=S(s==null?void 0:s.payments,"paymentDate");h(i)},[s==null?void 0:s.payments]);const{mutate:F}=w({mutationFn:i=>j.post(f.payments.create,i),onSuccess:async i=>{v.success("New Payment Has Been Created!");const{data:Q}=i,N=S([...m,Q],"paymentDate");h(N)},onSettled:async()=>{await l.invalidateQueries({queryKey:["payments"]});const{id:i}=s;await l.invalidateQueries({queryKey:["order",i]}),d.onFalse()},onError:i=>{console.log(i)}}),{mutate:R}=w({mutationFn:i=>j.get(f.order.approve+i),onSuccess:async({data:i})=>{i!=null&&i.length?(u.onTrue(),x(i)):(v.success("Order Has Been Approved!"),a(i))},onSettled:async()=>{const{id:i}=s;await l.invalidateQueries({queryKey:["orders"]}),await l.invalidateQueries({queryKey:["orders","analytics"]}),await l.invalidateQueries({queryKey:["order",i]})},onError:i=>{console.log(i)}}),{mutate:q}=w({mutationFn:i=>j.post(f.order.createPlans,i),onSuccess:async({data:i})=>{v.success("Order Has Been Approved!"),a(i),u.onFalse()},onSettled:async()=>{const{id:i}=s;await l.invalidateQueries({queryKey:["orders"]}),await l.invalidateQueries({queryKey:["orders","analytics"]}),await l.invalidateQueries({queryKey:["order",i]})},onError:i=>{console.log(i)}}),A=Z.useReactToPrint({content:()=>c.current});return e.jsxs(e.Fragment,{children:[e.jsxs(Y,{children:[e.jsx(te,{links:[{name:"Dashboard",href:C.dashboard.root},{name:"Order",href:C.dashboard.order.root},{name:"Order Details"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(D,{container:!0,spacing:3,children:[e.jsx(D,{xs:12,md:9,children:e.jsx(o,{ref:c,spacing:3,direction:{xs:"column-reverse",md:"column"},children:e.jsx(xe,{order:s,customer:s==null?void 0:s.customer,discount:s==null?void 0:s.discount,totalAmount:s==null?void 0:s.totalOrderAmount})})}),e.jsx(D,{xs:12,md:3,children:e.jsx(pe,{order:s,payments:m,dialog:d,handleApproveOrder:R,handlePrint:A})})]}),e.jsx(de,{order:s,open:d.value,onClose:d.onFalse,handler:F})]}),e.jsx(ee,{open:u.value,onClose:u.onFalse,title:"Out of Stock",content:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Products are out of Stock! do you want to create plans?"}),e.jsxs(n,{sx:{mt:1,mb:1},children:["You need to create ",e.jsx("span",{style:{fontWeight:"bold"},children:r==null?void 0:r.length})," :"]}),r==null?void 0:r.map(i=>e.jsxs(n,{children:["Plan for ",e.jsx("span",{style:{fontWeight:"bold"},children:i.product.name})," because is missing"," ",e.jsx("span",{style:{fontWeight:"bold",color:`${k.vars.palette.error.light}`},children:i.missingQuantity}),"."]}))]}),action:e.jsx(y,{variant:"contained",color:"error",onClick:()=>{q(r)},children:(r==null?void 0:r.length)>1?"Create Plans":"Create Plan"})})]})}const he={title:`Order details | Dashboard - ${J.site.name}`};function bt(){const{id:t=""}=U(),s=X({queryKey:["order",t],queryFn:async()=>{const{data:a}=await j.get(f.order.details+t);return a}});return s.isPending||s.isLoading?e.jsx(_,{}):s.isError?e.jsx(z,{route:C.dashboard.order.root}):e.jsxs(e.Fragment,{children:[e.jsx(M,{children:e.jsxs("title",{children:[" ",he.title]})}),e.jsx(me,{currentOrder:s.data})]})}export{bt as default};
