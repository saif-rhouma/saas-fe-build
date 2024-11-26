import{j as t,B as i,T as U,c9 as g,I as m,eh as Y,d7 as _,S as l,ef as d,e8 as V,e3 as P,e as R,cY as G,h as J,g as X,r as h,p as k,ea as Z,i as K,dp as b,dm as w,l as F,d0 as $,ei as tt,dn as et,eb as st,ej as H,dP as nt,cV as B,dq as N,dT as it,H as at,C as ot}from"./index-CSsjSOSC.js";import{u as W,E as lt}from"./error-block-CSkWkatt.js";import{u as ct}from"./use-params-5PVJOoQw.js";import"./chart-legends-D0Fkk-1H.js";import{P as rt,a as dt,O as xt}from"./order-status-dialog-DT-nF_C0.js";import{l as pt}from"./index-CdHUXfjo.js";import{u as Q}from"./useMutation-YcdpOWmR.js";import{C as ht}from"./confirm-dialog-7_lLCFIr.js";import{C as mt}from"./custom-breadcrumbs-BtGY489d.js";import{b as O}from"./format-number-BF7CDfp8.js";import{P as S}from"./permission-access-controller-1flaXLY-.js";import{T as ut,t as jt,a as yt,b as ft,c as gt,d as bt,e as wt}from"./TimelineSeparator-D3srMfxL.js";import{C as z}from"./CardHeader-DRV-8q2G.js";import{O as Ct}from"./order-product-table-Clp93oeV.js";import{C as Dt}from"./CircularProgress-BxvDM41b.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./index-CNxr2gWj.js";import"./form-provider-RuHYmeCy.js";import"./TextField-CXJ43qVc.js";import"./FormControl-Mrjg3Hrg.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-C1PS2W-Z.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-D76jktbc.js";import"./Select-S0DO28Vw.js";import"./Menu-DcPksF2q.js";import"./InputBase-C3VMpfvF.js";import"./FormHelperText-3AG-WguW.js";import"./Rating-CFvzjRIc.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DkTmHMBN.js";import"./index-DYmHzB12.js";import"./Slider-DsRDjN-7.js";import"./RadioGroup-BveFsUJx.js";import"./FormGroup-BnPXu43B.js";import"./FormControlLabel-mE7Ixr_k.js";import"./utils-DfB3ukDY.js";import"./countries-DSLisFCy.js";import"./InputAdornment-C9j2zz_S.js";import"./Autocomplete-BMaQQCmK.js";import"./Chip-jDUxKRTF.js";import"./country-select-DdxRCnLY.js";import"./Checkbox-DHIrMODH.js";import"./upload-avatar-CaO-d8UW.js";import"./image-1sagoi-E.js";import"./DatePicker-szqtGyiO.js";import"./DialogContent-7kOqCf2V.js";import"./ListItem-yyOwr0Wj.js";import"./MobileDateTimePicker-C6_fzLo-.js";import"./Tabs-CE1nZKJE.js";import"./KeyboardArrowRight-CZr18QH0.js";import"./upload-box-ad-kL8U2Kj4.js";import"./schema-helper-9F4NFULp.js";import"./DialogTitle-CQbewVAB.js";import"./LoadingButton-CVLyV_yw.js";import"./table-head-custom-CA3WFWFJ.js";import"./TableCell-CsgLQF73.js";import"./incrementer-button-DNnvb0Pb.js";const Tt=({order:e,payments:s,dialog:a,handleApproveOrder:o,handlePrint:C})=>{console.log("----> order.orderPaymentAmount",e.orderPaymentAmount);const y=t.jsxs(i,{sx:{pr:4,pl:4,pb:4,pt:2},children:[t.jsx(ut,{sx:{p:0,m:0,[`& .${jt.root}:before`]:{flex:0,padding:0}},children:s==null?void 0:s.map((x,r)=>{const u=r===0,j=r===s.length-1;return t.jsxs(yt,{children:[t.jsxs(ft,{children:[t.jsx(gt,{color:u&&"primary"||"grey"}),j?null:t.jsx(bt,{})]}),t.jsx(wt,{children:t.jsxs(i,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs(i,{children:[t.jsxs(i,{display:"flex",alignItems:"center",gap:1,children:[t.jsx(U,{variant:"subtitle2",children:O(x.amount)}),x.isChanged&&t.jsx(g,{title:"has been modified!",children:t.jsx(m,{sx:{color:"warning.main"},width:18,icon:"eos-icons:content-modified"})})]}),t.jsx(i,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:Y(x.paymentDate)})]}),t.jsx(_,{color:"success",children:x.paymentType})]})})]},x.id)})}),t.jsx(l,{justifyContent:"flex-end",spacing:1.5,sx:{marginTop:2},children:(e==null?void 0:e.status)!==d.Draft&&(e==null?void 0:e.status)!==d.Canceled&&(Math.round(V(e.totalOrderAmount-e.totalOrderAmount*(e.discount/100),e==null?void 0:e.snapshotTaxPercentage)-e.orderPaymentAmount)>0?t.jsx(S,{permission:P.ADD_PAYMENT,children:t.jsx(R,{variant:"contained",onClick:()=>a.onTrue(),startIcon:t.jsx(m,{icon:"mingcute:add-line"}),children:"New Payment"})}):t.jsx(R,{variant:"contained",color:"success",sx:{cursor:"not-allowed"},startIcon:t.jsx(m,{icon:"solar:check-read-bold-duotone"}),children:"Payed"}))})]});return t.jsxs(G,{children:[(s==null?void 0:s.length)>0&&t.jsx(z,{title:"Payments"}),y]})};function vt({order:e,discount:s,customer:a,totalAmount:o,handleApproveOrder:C,handlePrint:y}){var n,T,v,L;const{user:x}=J(),r=X(),u=h.useCallback(c=>{r.replace(k.dashboard.quotation.details(c))},[r]),j=t.jsxs(l,{spacing:2,alignItems:"flex-end",sx:{p:3,textAlign:"right",typography:"body2"},children:[t.jsxs(l,{direction:"row",children:[t.jsx(i,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(i,{sx:{width:160,typography:"subtitle2"},children:O(o)||"-"})]}),t.jsxs(l,{direction:"row",children:[t.jsx(i,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(i,{sx:{width:160,...s&&{color:"error.main"}},children:s?`- ${s}%`:"-"})]}),t.jsxs(l,{direction:"row",children:[t.jsxs(i,{sx:{color:"text.secondary"},children:["Tax (",(e==null?void 0:e.snapshotTaxPercentage)||"0","%)"]}),t.jsx(i,{sx:{width:160},children:e!=null&&e.snapshotTaxPercentage?O(Z(o-o*(s/100),e==null?void 0:e.snapshotTaxPercentage)):"-"})]}),t.jsxs(l,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Total"}),t.jsx(i,{sx:{width:160},children:O(V(o-o*(s/100),e==null?void 0:e.snapshotTaxPercentage))||"-"})]})]}),p=K(),[E,D]=h.useState(!1),A=()=>{D(!0)},{isLoading:q}=W({queryKey:["download-order",e.id],queryFn:async()=>{const c=await b.get(w.order.downloadPdf+e.id,{responseType:"blob"}),M=window.URL.createObjectURL(new Blob([c.data])),f=document.createElement("a");return f.href=M,f.setAttribute("download",`Order-${e.ref}.pdf`),document.body.appendChild(f),f.click(),document.body.removeChild(f),c.data},enabled:E&&e.id!=null,onSuccess:()=>{D(!1)},onError:c=>{console.error("Download failed:",c)}}),I=t.jsx(g,{title:"Download Pdf",children:t.jsx(F,{onClick:A,children:q?t.jsx(Dt,{size:24,color:"inherit"}):t.jsx(m,{icon:"eva:cloud-download-fill"})})});return t.jsxs(t.Fragment,{children:[t.jsxs(G,{children:[t.jsx(l,{justifyContent:"center",alignItems:"center",children:t.jsxs("h1",{className:"print-title",children:["Order REF: #",e.ref]})}),t.jsx("style",{jsx:!0,children:`
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
        `}),t.jsx(z,{className:"print-hide",title:"Details",subheader:((n=e==null?void 0:e.quotation)==null?void 0:n.id)&&`Related to Quotation: #${(T=e==null?void 0:e.quotation)==null?void 0:T.ref}`,action:t.jsx(l,{className:"print-hide",children:t.jsxs(l,{direction:"row",spacing:1,flexGrow:1,children:[((v=e==null?void 0:e.quotation)==null?void 0:v.id)&&t.jsx(g,{title:`Related to Quotation: #${(L=e==null?void 0:e.quotation)==null?void 0:L.ref}`,children:t.jsx(F,{onClick:()=>{var c;u((c=e==null?void 0:e.quotation)==null?void 0:c.id)},children:t.jsx(m,{icon:"heroicons-outline:external-link"})})}),t.jsx(S,{permission:P.ORDER_STATUS_SCREEN_DRAG_AND_DROP,children:(e==null?void 0:e.status)!==d.Draft&&(e==null?void 0:e.status)!==d.Canceled&&t.jsx(g,{title:"Change Order Status",children:t.jsx(F,{onClick:()=>p.onToggle(),children:t.jsx(m,{icon:"tabler:status-change"})})})}),I,t.jsx(S,{permission:P.PRINT_ORDER,children:t.jsx(g,{title:"Print",children:t.jsx(rt,{order:e})})}),t.jsx(S,{permission:P.APPROVE_ORDER,children:(e==null?void 0:e.status)===d.Draft&&t.jsx(R,{variant:"contained",size:"medium",color:"info",startIcon:t.jsx(m,{icon:"material-symbols:order-approve"}),onClick:()=>{C(e.id)},children:"Click to Approve"})})]})})}),t.jsxs(l,{display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(3, 1fr)"},sx:{p:2,typography:"body2"},children:[t.jsxs(i,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[t.jsx(l,{display:"flex",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:t.jsx("div",{children:"Order Details"})}),t.jsxs(i,{sx:{color:"text.secondary"},children:["ORDER ID: #",e.ref]}),t.jsxs(i,{sx:{color:"text.secondary"},children:["Order Date: ",$(e.orderDate)]}),t.jsxs(i,{sx:{color:"text.secondary"},children:["Delivery Date: ",e.deliveryDate?$(e.deliveryDate):t.jsx("span",{children:" - "})]})]}),t.jsxs(i,{flexDirection:"column",sx:{display:"flex",width:1,p:1,borderRight:c=>`dashed 2px ${c.vars.palette.background.neutral}`,borderLeft:c=>`dashed 2px ${c.vars.palette.background.neutral}`},children:[t.jsx(l,{display:"flex",justifyContent:"center",sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:t.jsx("div",{children:tt(x)})}),t.jsxs(i,{sx:{color:"text.secondary"},children:["Status:"," ",t.jsx(_,{variant:"soft",color:(e==null?void 0:e.status)===d.Ready&&"info"||(e==null?void 0:e.status)===d.InProcess&&"warning"||(e==null?void 0:e.status)===d.Delivered&&"success"||(e==null?void 0:e.status)===d.Canceled&&"error"||"default",children:e==null?void 0:e.status})]}),t.jsxs(i,{sx:{color:"text.secondary"},children:["Tax/Vat: ",a==null?void 0:a.taxNumber]})]}),t.jsxs(i,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[t.jsx(l,{display:"flex",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:t.jsx("div",{children:"Order To"})}),t.jsxs(i,{sx:{color:"text.secondary",textTransform:"capitalize"},children:["Customer: ",a==null?void 0:a.name]}),t.jsxs(i,{sx:{color:"text.secondary"},children:["Tel: ",a==null?void 0:a.phoneNumber]})]})]}),t.jsx(i,{fullWidth:!0,alignItems:"center",sx:{p:2,borderBottom:c=>`dashed 2px ${c.vars.palette.background.neutral}`},children:t.jsx(Ct,{products:e.productToOrder,isDetail:!0})}),j,(e==null?void 0:e.notes)&&t.jsx(l,{justifyContent:"space-between",sx:{p:3,typography:"body2"},children:t.jsxs(i,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[t.jsx(l,{sx:{typography:"subtitle2",marginBottom:1},children:t.jsx("div",{children:"Notes:"})}),t.jsx(i,{sx:{color:"text.secondary"},children:e==null?void 0:e.notes})]})})]}),t.jsx(dt,{currentOrder:e,open:p.value,onClose:p.onFalse})]})}function Pt({currentOrder:e}){const[s,a]=h.useState(e),[o,C]=h.useState(),y=h.useRef(),x=K(),r=et(),[u,j]=h.useState([]),p=K(),E=st();h.useEffect(()=>{a(e)},[e]),h.useEffect(()=>{const n=H(s==null?void 0:s.payments,"paymentDate");j(n)},[s==null?void 0:s.payments]);const{mutate:D}=Q({mutationFn:n=>b.post(w.payments.create,n),onSuccess:async n=>{N.success("New Payment Has Been Created!");const{data:T}=n,v=H([...u,T],"paymentDate");j(v)},onSettled:async()=>{await r.invalidateQueries({queryKey:["payments"]});const{id:n}=s;await r.invalidateQueries({queryKey:["order",n]}),x.onFalse()},onError:n=>{console.log(n)}}),{mutate:A}=Q({mutationFn:n=>b.get(w.order.approve+n),onSuccess:async({data:n})=>{n!=null&&n.length?(p.onTrue(),C(n)):(N.success("Order Has Been Approved!"),a(n))},onSettled:async()=>{const{id:n}=s;await r.invalidateQueries({queryKey:["orders"]}),await r.invalidateQueries({queryKey:["orders","analytics"]}),await r.invalidateQueries({queryKey:["order",n]})},onError:n=>{console.log(n)}}),{mutate:q}=Q({mutationFn:n=>b.post(w.order.createPlans,n),onSuccess:async({data:n})=>{N.success("Order Has Been Approved!"),a(n),p.onFalse()},onSettled:async()=>{const{id:n}=s;await r.invalidateQueries({queryKey:["orders"]}),await r.invalidateQueries({queryKey:["orders","analytics"]}),await r.invalidateQueries({queryKey:["order",n]})},onError:n=>{console.log(n)}}),I=pt.useReactToPrint({content:()=>y.current});return t.jsxs(t.Fragment,{children:[t.jsxs(nt,{children:[t.jsx(mt,{links:[{name:"Dashboard",href:k.dashboard.root},{name:"Orders",href:k.dashboard.order.root},{name:"Order Details"}],sx:{mb:{xs:3,md:5}}}),t.jsxs(B,{container:!0,spacing:3,children:[t.jsx(B,{xs:12,md:(s==null?void 0:s.status)!==d.Draft&&(s==null?void 0:s.status)!==d.Canceled?9:12,children:t.jsx(l,{ref:y,spacing:3,direction:{xs:"column-reverse",md:"column"},children:t.jsx(vt,{order:s,customer:s==null?void 0:s.customer,discount:s==null?void 0:s.discount,totalAmount:s==null?void 0:s.totalOrderAmount,handleApproveOrder:A,handlePrint:I})})}),(s==null?void 0:s.status)!==d.Draft&&(s==null?void 0:s.status)!==d.Canceled&&t.jsx(B,{xs:12,md:3,children:t.jsx(Tt,{order:s,payments:u,dialog:x})})]}),t.jsx(xt,{order:s,open:x.value,onClose:x.onFalse,handler:D})]}),t.jsx(ht,{open:p.value,onClose:p.onFalse,title:"Out of Stock",content:t.jsxs(t.Fragment,{children:[t.jsx(i,{children:"Products are out of Stock! do you want to create plans?"}),t.jsxs(i,{sx:{mt:1,mb:1},children:["You need to create ",t.jsx("span",{style:{fontWeight:"bold"},children:o==null?void 0:o.length})," :"]}),o==null?void 0:o.map(n=>t.jsxs(i,{children:["Plan for ",t.jsx("span",{style:{fontWeight:"bold"},children:n.product.name})," because is missing"," ",t.jsx("span",{style:{fontWeight:"bold",color:`${E.vars.palette.error.light}`},children:n.missingQuantity}),"."]}))]}),action:t.jsx(R,{variant:"contained",color:"error",onClick:()=>{q(o)},children:(o==null?void 0:o.length)>1?"Create Plans":"Create Plan"})})]})}const Ot={title:`Order details | Dashboard - ${ot.site.name}`};function Ie(){const{id:e=""}=ct(),s=W({queryKey:["order",e],queryFn:async()=>{const{data:a}=await b.get(w.order.details+e);return a}});return s.isPending||s.isLoading?t.jsx(it,{}):s.isError?t.jsx(lt,{route:k.dashboard.order.root}):t.jsxs(t.Fragment,{children:[t.jsx(at,{children:t.jsxs("title",{children:[" ",Ot.title]})}),t.jsx(Pt,{currentOrder:s.data})]})}export{Ie as default};