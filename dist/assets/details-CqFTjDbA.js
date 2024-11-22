import{j as t,B as i,T as U,c9 as g,I as m,eh as Y,d7 as _,S as l,ef as d,e8 as V,e3 as P,e as R,cY as G,h as J,g as X,r as h,p as k,ea as Z,i as K,dp as b,dm as C,l as F,d0 as $,ei as tt,dn as et,eb as st,ej as H,dP as nt,cV as B,dq as N,dT as it,H as at,C as ot}from"./index-Blsk_n2J.js";import{u as W,E as lt}from"./error-block-Cp70Gs-C.js";import{u as ct}from"./use-params-DwIFgDk2.js";import"./chart-legends-k6x2sGTc.js";import{P as rt,a as dt,O as xt}from"./order-status-dialog-BFHwleUG.js";import{l as pt}from"./index-Mn-7QyP8.js";import{u as Q}from"./useMutation-9mDdNxrY.js";import{C as ht}from"./confirm-dialog-DLNKot-8.js";import{C as mt}from"./custom-breadcrumbs-DQl07oU5.js";import{b as O}from"./format-number-CrK_YprG.js";import{P as S}from"./permission-access-controller-BjQmVSBA.js";import{T as ut,t as jt,a as yt,b as ft,c as gt,d as bt,e as Ct}from"./TimelineSeparator-Chrd3odT.js";import{C as z}from"./CardHeader-C7t5Irc2.js";import{O as wt}from"./order-product-table-eiNE5oTD.js";import{C as Dt}from"./CircularProgress-BUIqYQID.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./index-DstcX7rq.js";import"./form-provider-DdfiYo_S.js";import"./TextField-BKSxA_Cs.js";import"./FormControl-qbY7_VIN.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BYZCvd35.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bl7YzlTQ.js";import"./Select-ee9RPtAk.js";import"./Menu-CZN5SQuC.js";import"./InputBase-cMEccQYG.js";import"./FormHelperText-CHZY3fg7.js";import"./Rating-hCyG6wcZ.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-BNs7J7mr.js";import"./index-FRfytyt8.js";import"./Slider-l7vrXkor.js";import"./RadioGroup-B0p7NR0g.js";import"./FormGroup-CvSak5XN.js";import"./FormControlLabel-CB8Q9wIG.js";import"./utils-q9gw6RHQ.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BWmNxI1m.js";import"./Autocomplete-DNr_vrjq.js";import"./Chip-BrbLQ3s5.js";import"./country-select-DRYKmuys.js";import"./Checkbox-B-93dYv5.js";import"./upload-avatar-Y5cPPAL9.js";import"./image-Cb1bD9tg.js";import"./DatePicker-BcikrSOj.js";import"./DialogContent-CB0eeVYr.js";import"./ListItem-D58zR2IT.js";import"./MobileDateTimePicker-Dj8bi4PE.js";import"./Tabs-JjNAVrJX.js";import"./KeyboardArrowRight-DwIijAwp.js";import"./upload-box-ad-DM_7rvdf.js";import"./schema-helper-CVZeQlXx.js";import"./DialogTitle-EF_AIZLJ.js";import"./LoadingButton-B-r7xLAp.js";import"./table-head-custom-cPV8HOCy.js";import"./TableCell-pdyLDV8n.js";import"./incrementer-button-C2DOpqm8.js";const Tt=({order:e,payments:s,dialog:a,handleApproveOrder:o,handlePrint:w})=>{console.log("----> order.orderPaymentAmount",e.orderPaymentAmount);const y=t.jsxs(i,{sx:{pr:4,pl:4,pb:4,pt:2},children:[t.jsx(ut,{sx:{p:0,m:0,[`& .${jt.root}:before`]:{flex:0,padding:0}},children:s==null?void 0:s.map((x,c)=>{const u=c===0,j=c===s.length-1;return t.jsxs(yt,{children:[t.jsxs(ft,{children:[t.jsx(gt,{color:u&&"primary"||"grey"}),j?null:t.jsx(bt,{})]}),t.jsx(Ct,{children:t.jsxs(i,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs(i,{children:[t.jsxs(i,{display:"flex",alignItems:"center",gap:1,children:[t.jsx(U,{variant:"subtitle2",children:O(x.amount)}),x.isChanged&&t.jsx(g,{title:"has been modified!",children:t.jsx(m,{sx:{color:"warning.main"},width:18,icon:"eos-icons:content-modified"})})]}),t.jsx(i,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:Y(x.paymentDate)})]}),t.jsx(_,{color:"success",children:x.paymentType})]})})]},x.id)})}),t.jsx(l,{justifyContent:"flex-end",spacing:1.5,sx:{marginTop:2},children:(e==null?void 0:e.status)!==d.Draft&&(e==null?void 0:e.status)!==d.Canceled&&(Math.round(V(e.totalOrderAmount-e.totalOrderAmount*(e.discount/100),e==null?void 0:e.snapshotTaxPercentage)-e.orderPaymentAmount)>0?t.jsx(S,{permission:P.ADD_PAYMENT,children:t.jsx(R,{variant:"contained",onClick:()=>a.onTrue(),startIcon:t.jsx(m,{icon:"mingcute:add-line"}),children:"New Payment"})}):t.jsx(R,{variant:"contained",color:"success",sx:{cursor:"not-allowed"},startIcon:t.jsx(m,{icon:"solar:check-read-bold-duotone"}),children:"Payed"}))})]});return t.jsxs(G,{children:[(s==null?void 0:s.length)>0&&t.jsx(z,{title:"Payments"}),y]})};function vt({order:e,discount:s,customer:a,totalAmount:o,handleApproveOrder:w,handlePrint:y}){var n,T,v,L;const{user:x}=J(),c=X(),u=h.useCallback(r=>{c.replace(k.dashboard.quotation.details(r))},[c]),j=t.jsxs(l,{spacing:2,alignItems:"flex-end",sx:{p:3,textAlign:"right",typography:"body2"},children:[t.jsxs(l,{direction:"row",children:[t.jsx(i,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(i,{sx:{width:160,typography:"subtitle2"},children:O(o)||"-"})]}),t.jsxs(l,{direction:"row",children:[t.jsx(i,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(i,{sx:{width:160,...s&&{color:"error.main"}},children:s?`- ${s}%`:"-"})]}),t.jsxs(l,{direction:"row",children:[t.jsxs(i,{sx:{color:"text.secondary"},children:["Tax (",(e==null?void 0:e.snapshotTaxPercentage)||"0","%)"]}),t.jsx(i,{sx:{width:160},children:e!=null&&e.snapshotTaxPercentage?O(Z(o-o*(s/100),e==null?void 0:e.snapshotTaxPercentage)):"-"})]}),t.jsxs(l,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Total"}),t.jsx(i,{sx:{width:160},children:O(V(o-o*(s/100),e==null?void 0:e.snapshotTaxPercentage))||"-"})]})]}),p=K(),[A,D]=h.useState(!1),E=()=>{D(!0)},{isLoading:q}=W({queryKey:["download-order",e.id],queryFn:async()=>{const r=await b.get(C.order.downloadPdf+e.id,{responseType:"blob"}),M=window.URL.createObjectURL(new Blob([r.data])),f=document.createElement("a");return f.href=M,f.setAttribute("download",`Order-${e.ref}.pdf`),document.body.appendChild(f),f.click(),document.body.removeChild(f),r.data},enabled:A,cacheTime:0,onSuccess:()=>{D(!1)}}),I=t.jsx(g,{title:"Download Pdf",children:t.jsx(F,{onClick:E,children:q?t.jsx(Dt,{size:24,color:"inherit"}):t.jsx(m,{icon:"eva:cloud-download-fill"})})});return t.jsxs(t.Fragment,{children:[t.jsxs(G,{children:[t.jsx(l,{justifyContent:"center",alignItems:"center",children:t.jsxs("h1",{className:"print-title",children:["Order REF: #",e.ref]})}),t.jsx("style",{jsx:!0,children:`
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
        `}),t.jsx(z,{className:"print-hide",title:"Details",subheader:((n=e==null?void 0:e.quotation)==null?void 0:n.id)&&`Related to Quotation: #${(T=e==null?void 0:e.quotation)==null?void 0:T.ref}`,action:t.jsx(l,{className:"print-hide",children:t.jsxs(l,{direction:"row",spacing:1,flexGrow:1,children:[((v=e==null?void 0:e.quotation)==null?void 0:v.id)&&t.jsx(g,{title:`Related to Quotation: #${(L=e==null?void 0:e.quotation)==null?void 0:L.ref}`,children:t.jsx(F,{onClick:()=>{var r;u((r=e==null?void 0:e.quotation)==null?void 0:r.id)},children:t.jsx(m,{icon:"heroicons-outline:external-link"})})}),t.jsx(S,{permission:P.ORDER_STATUS_SCREEN_DRAG_AND_DROP,children:(e==null?void 0:e.status)!==d.Draft&&(e==null?void 0:e.status)!==d.Canceled&&t.jsx(g,{title:"Change Order Status",children:t.jsx(F,{onClick:()=>p.onToggle(),children:t.jsx(m,{icon:"tabler:status-change"})})})}),I,t.jsx(S,{permission:P.PRINT_ORDER,children:t.jsx(g,{title:"Print",children:t.jsx(rt,{order:e})})}),t.jsx(S,{permission:P.APPROVE_ORDER,children:(e==null?void 0:e.status)===d.Draft&&t.jsx(R,{variant:"contained",size:"medium",color:"info",startIcon:t.jsx(m,{icon:"material-symbols:order-approve"}),onClick:()=>{w(e.id)},children:"Click to Approve"})})]})})}),t.jsxs(l,{display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(3, 1fr)"},sx:{p:2,typography:"body2"},children:[t.jsxs(i,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[t.jsx(l,{display:"flex",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:t.jsx("div",{children:"Order Details"})}),t.jsxs(i,{sx:{color:"text.secondary"},children:["ORDER ID: #",e.ref]}),t.jsxs(i,{sx:{color:"text.secondary"},children:["Order Date: ",$(e.orderDate)]}),t.jsxs(i,{sx:{color:"text.secondary"},children:["Delivery Date: ",e.deliveryDate?$(e.deliveryDate):t.jsx("span",{children:" - "})]})]}),t.jsxs(i,{flexDirection:"column",sx:{display:"flex",width:1,p:1,borderRight:r=>`dashed 2px ${r.vars.palette.background.neutral}`,borderLeft:r=>`dashed 2px ${r.vars.palette.background.neutral}`},children:[t.jsx(l,{display:"flex",justifyContent:"center",sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:t.jsx("div",{children:tt(x)})}),t.jsxs(i,{sx:{color:"text.secondary"},children:["Status:"," ",t.jsx(_,{variant:"soft",color:(e==null?void 0:e.status)===d.Ready&&"info"||(e==null?void 0:e.status)===d.InProcess&&"warning"||(e==null?void 0:e.status)===d.Delivered&&"success"||(e==null?void 0:e.status)===d.Canceled&&"error"||"default",children:e==null?void 0:e.status})]}),t.jsxs(i,{sx:{color:"text.secondary"},children:["Tax/Vat: ",a==null?void 0:a.taxNumber]})]}),t.jsxs(i,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[t.jsx(l,{display:"flex",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:t.jsx("div",{children:"Order To"})}),t.jsxs(i,{sx:{color:"text.secondary",textTransform:"capitalize"},children:["Customer: ",a==null?void 0:a.name]}),t.jsxs(i,{sx:{color:"text.secondary"},children:["Tel: ",a==null?void 0:a.phoneNumber]})]})]}),t.jsx(i,{fullWidth:!0,alignItems:"center",sx:{p:2,borderBottom:r=>`dashed 2px ${r.vars.palette.background.neutral}`},children:t.jsx(wt,{products:e.productToOrder,isDetail:!0})}),j,(e==null?void 0:e.notes)&&t.jsx(l,{justifyContent:"space-between",sx:{p:3,typography:"body2"},children:t.jsxs(i,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[t.jsx(l,{sx:{typography:"subtitle2",marginBottom:1},children:t.jsx("div",{children:"Notes:"})}),t.jsx(i,{sx:{color:"text.secondary"},children:e==null?void 0:e.notes})]})})]}),t.jsx(dt,{currentOrder:e,open:p.value,onClose:p.onFalse})]})}function Pt({currentOrder:e}){const[s,a]=h.useState(e),[o,w]=h.useState(),y=h.useRef(),x=K(),c=et(),[u,j]=h.useState([]),p=K(),A=st();h.useEffect(()=>{a(e)},[e]),h.useEffect(()=>{const n=H(s==null?void 0:s.payments,"paymentDate");j(n)},[s==null?void 0:s.payments]);const{mutate:D}=Q({mutationFn:n=>b.post(C.payments.create,n),onSuccess:async n=>{N.success("New Payment Has Been Created!");const{data:T}=n,v=H([...u,T],"paymentDate");j(v)},onSettled:async()=>{await c.invalidateQueries({queryKey:["payments"]});const{id:n}=s;await c.invalidateQueries({queryKey:["order",n]}),x.onFalse()},onError:n=>{console.log(n)}}),{mutate:E}=Q({mutationFn:n=>b.get(C.order.approve+n),onSuccess:async({data:n})=>{n!=null&&n.length?(p.onTrue(),w(n)):(N.success("Order Has Been Approved!"),a(n))},onSettled:async()=>{const{id:n}=s;await c.invalidateQueries({queryKey:["orders"]}),await c.invalidateQueries({queryKey:["orders","analytics"]}),await c.invalidateQueries({queryKey:["order",n]})},onError:n=>{console.log(n)}}),{mutate:q}=Q({mutationFn:n=>b.post(C.order.createPlans,n),onSuccess:async({data:n})=>{N.success("Order Has Been Approved!"),a(n),p.onFalse()},onSettled:async()=>{const{id:n}=s;await c.invalidateQueries({queryKey:["orders"]}),await c.invalidateQueries({queryKey:["orders","analytics"]}),await c.invalidateQueries({queryKey:["order",n]})},onError:n=>{console.log(n)}}),I=pt.useReactToPrint({content:()=>y.current});return t.jsxs(t.Fragment,{children:[t.jsxs(nt,{children:[t.jsx(mt,{links:[{name:"Dashboard",href:k.dashboard.root},{name:"Orders",href:k.dashboard.order.root},{name:"Order Details"}],sx:{mb:{xs:3,md:5}}}),t.jsxs(B,{container:!0,spacing:3,children:[t.jsx(B,{xs:12,md:(s==null?void 0:s.status)!==d.Draft&&(s==null?void 0:s.status)!==d.Canceled?9:12,children:t.jsx(l,{ref:y,spacing:3,direction:{xs:"column-reverse",md:"column"},children:t.jsx(vt,{order:s,customer:s==null?void 0:s.customer,discount:s==null?void 0:s.discount,totalAmount:s==null?void 0:s.totalOrderAmount,handleApproveOrder:E,handlePrint:I})})}),(s==null?void 0:s.status)!==d.Draft&&(s==null?void 0:s.status)!==d.Canceled&&t.jsx(B,{xs:12,md:3,children:t.jsx(Tt,{order:s,payments:u,dialog:x})})]}),t.jsx(xt,{order:s,open:x.value,onClose:x.onFalse,handler:D})]}),t.jsx(ht,{open:p.value,onClose:p.onFalse,title:"Out of Stock",content:t.jsxs(t.Fragment,{children:[t.jsx(i,{children:"Products are out of Stock! do you want to create plans?"}),t.jsxs(i,{sx:{mt:1,mb:1},children:["You need to create ",t.jsx("span",{style:{fontWeight:"bold"},children:o==null?void 0:o.length})," :"]}),o==null?void 0:o.map(n=>t.jsxs(i,{children:["Plan for ",t.jsx("span",{style:{fontWeight:"bold"},children:n.product.name})," because is missing"," ",t.jsx("span",{style:{fontWeight:"bold",color:`${A.vars.palette.error.light}`},children:n.missingQuantity}),"."]}))]}),action:t.jsx(R,{variant:"contained",color:"error",onClick:()=>{q(o)},children:(o==null?void 0:o.length)>1?"Create Plans":"Create Plan"})})]})}const Ot={title:`Order details | Dashboard - ${ot.site.name}`};function Ie(){const{id:e=""}=ct(),s=W({queryKey:["order",e],queryFn:async()=>{const{data:a}=await b.get(C.order.details+e);return a}});return s.isPending||s.isLoading?t.jsx(it,{}):s.isError?t.jsx(lt,{route:k.dashboard.order.root}):t.jsxs(t.Fragment,{children:[t.jsx(at,{children:t.jsxs("title",{children:[" ",Ot.title]})}),t.jsx(Pt,{currentOrder:s.data})]})}export{Ie as default};
