import{j as t,B as n,T as V,en as W,d7 as A,S as o,el as r,e3 as E,e as B,I as j,cY as K,h as z,g as G,r as d,p as P,ea as Y,e8 as _,i as F,e1 as M,c9 as C,l as I,d0 as N,eo as J,dn as U,eb as X,ep as Q,dP as Z,cV as S,dp as w,dm as T,dq as q,dT as tt,H as st,C as et}from"./index-DQSze1U8.js";import{u as it,E as nt}from"./error-block-ByVqMk3m.js";import{u as at}from"./use-params-Bn19tu7E.js";import"./chart-legends-BlFxPb8p.js";import{P as lt}from"./react-pdf.browser-ohtJmgt2.js";import{P as ot,a as ct,O as rt,b as xt}from"./order-payment-details-dialog-B-5q1qis.js";import{l as pt}from"./index-DNRrMaLW.js";import{u as k}from"./useMutation-BeFcqbfI.js";import{C as dt}from"./confirm-dialog-CJJX4rh8.js";import{C as mt}from"./custom-breadcrumbs-Dbp-n_yz.js";import{b as v}from"./format-number-7a30pGHJ.js";import{P as R}from"./permission-access-controller-CRGBXqVF.js";import{T as ht,t as ut,a as jt,b as yt,c as ft,d as gt,e as bt}from"./TimelineSeparator-CIDGA_nH.js";import{C as $}from"./CardHeader-rk1ldNG1.js";import{O as Dt}from"./order-product-table-G1yzh3qp.js";import{C as Ct}from"./CircularProgress-DXTtIPPm.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./index-C0n9i7dM.js";import"./___vite-browser-external_commonjs-proxy-CAPj2557.js";import"./form-provider-qWz68rQi.js";import"./TextField-BM3ncy7B.js";import"./FormControl-DZKHpfHt.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DhDKa20G.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-m89cyKyH.js";import"./Select-CH0Am0Es.js";import"./Menu-w_nXL5Bn.js";import"./InputBase-fLt_Sq7P.js";import"./FormHelperText-Dq4Iv_kj.js";import"./Rating-bqzPXOHb.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DdsvzCA1.js";import"./index-2JQKxIAF.js";import"./Slider-CrTSHj7l.js";import"./RadioGroup-HOjjNwl9.js";import"./FormGroup-kHcnZRyC.js";import"./FormControlLabel-Bw6B1Xse.js";import"./utils-5RQ0OZul.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BEfqHtqO.js";import"./Autocomplete-BsTrQ5Mt.js";import"./Chip-DVthNH5a.js";import"./country-select-Bm7HcMJs.js";import"./Checkbox-DN-K-wR_.js";import"./upload-avatar-CyNbpSLY.js";import"./image-BnHLvXo1.js";import"./DatePicker-Dlqwm3KD.js";import"./DialogContent-NYUAPcqk.js";import"./ListItem-1WR7dsIr.js";import"./MobileDateTimePicker-BRm0OX3N.js";import"./Tabs-afPgDWZn.js";import"./KeyboardArrowRight-CCHou5gP.js";import"./DialogTitle-Bh3bvg84.js";import"./upload-box-ad-BIUKVn1l.js";import"./schema-helper-DmHjE2RX.js";import"./LoadingButton-RgRGQqEX.js";import"./table-head-custom-DZUgBRZf.js";import"./TableCell-CZoNGEO_.js";import"./incrementer-button-D4FfvBZ8.js";const wt=({order:s,payments:e,dialog:a,handleApproveOrder:l,handlePrint:y})=>{const u=t.jsxs(n,{sx:{pr:4,pl:4,pb:4,pt:2},children:[t.jsx(ht,{sx:{p:0,m:0,[`& .${ut.root}:before`]:{flex:0,padding:0}},children:e==null?void 0:e.map((x,c)=>{const m=c===0,h=c===e.length-1;return t.jsxs(jt,{children:[t.jsxs(yt,{children:[t.jsx(ft,{color:m&&"primary"||"grey"}),h?null:t.jsx(gt,{})]}),t.jsx(bt,{children:t.jsxs(n,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[t.jsxs(n,{children:[t.jsx(V,{variant:"subtitle2",children:v(x.amount)}),t.jsx(n,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:W(x.paymentDate)})]}),t.jsx(A,{color:"success",children:x.paymentType})]})})]},x.id)})}),t.jsx(o,{justifyContent:"flex-end",spacing:1.5,sx:{marginTop:2},children:(s==null?void 0:s.status)!==r.Draft&&(s==null?void 0:s.status)!==r.Canceled&&t.jsx(R,{permission:E.ADD_PAYMENT,children:t.jsx(B,{variant:"contained",onClick:()=>a.onTrue(),startIcon:t.jsx(j,{icon:"mingcute:add-line"}),children:"New Payment"})})})]});return t.jsxs(K,{children:[(e==null?void 0:e.length)>0&&t.jsx($,{title:"Payments"}),u]})};function Tt({order:s,discount:e,customer:a,totalAmount:l,handleApproveOrder:y,handlePrint:u}){var f,g,b,D;const{user:x}=z(),c=G(),m=d.useCallback(i=>{c.replace(P.dashboard.quotation.details(i))},[c]),h=t.jsxs(o,{spacing:2,alignItems:"flex-end",sx:{p:3,textAlign:"right",typography:"body2"},children:[t.jsxs(o,{direction:"row",children:[t.jsx(n,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(n,{sx:{width:160,typography:"subtitle2"},children:v(l)||"-"})]}),t.jsxs(o,{direction:"row",children:[t.jsx(n,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(n,{sx:{width:160,...e&&{color:"error.main"}},children:e?`- ${e}%`:"-"})]}),t.jsxs(o,{direction:"row",children:[t.jsxs(n,{sx:{color:"text.secondary"},children:["Tax (",(s==null?void 0:s.snapshotTaxPercentage)||"0","%)"]}),t.jsx(n,{sx:{width:160},children:s!=null&&s.snapshotTaxPercentage?v(Y(l-l*(e/100),s==null?void 0:s.snapshotTaxPercentage)):"-"})]}),t.jsxs(o,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Total"}),t.jsx(n,{sx:{width:160},children:v(_(l-l*(e/100),s==null?void 0:s.snapshotTaxPercentage))||"-"})]})]}),p=F(),O=t.jsx(M,{children:t.jsx(lt,{document:s?t.jsx(ot,{order:s}):t.jsx("span",{}),fileName:s==null?void 0:s.ref,style:{textDecoration:"none"},children:({loading:i})=>t.jsx(C,{title:"Download Pdf",children:t.jsx(I,{children:i?t.jsx(Ct,{size:24,color:"inherit"}):t.jsx(j,{icon:"eva:cloud-download-fill"})})})})});return t.jsxs(t.Fragment,{children:[t.jsxs(K,{children:[t.jsx(o,{justifyContent:"center",alignItems:"center",children:t.jsxs("h1",{className:"print-title",children:["Order REF: #",s.ref]})}),t.jsx("style",{jsx:!0,children:`
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
        `}),t.jsx($,{className:"print-hide",title:"Details",subheader:((f=s==null?void 0:s.quotation)==null?void 0:f.id)&&`Related to Quotation: #${(g=s==null?void 0:s.quotation)==null?void 0:g.ref}`,action:t.jsx(o,{className:"print-hide",children:t.jsxs(o,{direction:"row",spacing:1,flexGrow:1,children:[((b=s==null?void 0:s.quotation)==null?void 0:b.id)&&t.jsx(C,{title:`Related to Quotation: #${(D=s==null?void 0:s.quotation)==null?void 0:D.ref}`,children:t.jsx(I,{onClick:()=>{var i;m((i=s==null?void 0:s.quotation)==null?void 0:i.id)},children:t.jsx(j,{icon:"heroicons-outline:external-link"})})}),(s==null?void 0:s.status)!==r.Draft&&(s==null?void 0:s.status)!==r.Canceled&&t.jsx(C,{title:"Change Order Status",children:t.jsx(I,{color:"warning",onClick:()=>p.onToggle(),children:t.jsx(j,{icon:"tabler:status-change"})})}),O,t.jsx(R,{permission:E.PRINT_ORDER,children:t.jsx(C,{title:"Print",children:t.jsx(ct,{order:s})})}),t.jsx(R,{permission:E.APPROVE_ORDER,children:(s==null?void 0:s.status)===r.Draft&&t.jsx(B,{variant:"contained",size:"medium",color:"primary",startIcon:t.jsx(j,{icon:"solar:check-square-bold"}),onClick:()=>{y(s.id)},children:"Approve"})})]})})}),t.jsxs(o,{display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(3, 1fr)"},sx:{p:2,typography:"body2"},children:[t.jsxs(n,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[t.jsx(o,{display:"flex",alignItems:"center",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:t.jsx("div",{children:"Order Details"})}),t.jsxs(n,{sx:{color:"text.secondary"},children:["ORDER ID: #",s.ref]}),t.jsxs(n,{sx:{color:"text.secondary"},children:["Order Date: ",N(s.orderDate)]}),t.jsxs(n,{sx:{color:"text.secondary"},children:["Delivery Date: ",s.deliveryDate?N(s.deliveryDate):t.jsx("span",{children:" - "})]})]}),t.jsxs(n,{flexDirection:"column",alignItems:"center",sx:{display:"flex",width:1,p:1,borderRight:i=>`dashed 2px ${i.vars.palette.background.neutral}`,borderLeft:i=>`dashed 2px ${i.vars.palette.background.neutral}`},children:[t.jsx(o,{display:"flex",justifyContent:"center",alignItems:"center",sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:t.jsx("div",{children:J(x)})}),t.jsxs(n,{sx:{color:"text.secondary"},children:["Status :"," ",t.jsx(A,{variant:"soft",color:(s==null?void 0:s.status)===r.Ready&&"info"||(s==null?void 0:s.status)===r.InProcess&&"warning"||(s==null?void 0:s.status)===r.Delivered&&"success"||(s==null?void 0:s.status)===r.Canceled&&"error"||"default",children:s==null?void 0:s.status})]}),t.jsxs(n,{sx:{color:"text.secondary"},children:["Tax/Vat: ",a==null?void 0:a.taxNumber]})]}),t.jsxs(n,{flexDirection:"column",alignItems:"center",sx:{display:"flex",width:"100%",p:1},children:[t.jsx(o,{display:"flex",alignItems:"center",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:t.jsx("div",{children:"Order To"})}),t.jsx(n,{sx:{color:"text.secondary",textTransform:"capitalize"},children:a==null?void 0:a.name}),t.jsxs(n,{sx:{color:"text.secondary"},children:["Tel: ",a==null?void 0:a.phoneNumber]})]})]}),t.jsx(n,{fullWidth:!0,alignItems:"center",sx:{p:2,borderBottom:i=>`dashed 2px ${i.vars.palette.background.neutral}`},children:t.jsx(Dt,{products:s.productToOrder,isDetail:!0})}),h,(s==null?void 0:s.notes)&&t.jsx(o,{justifyContent:"space-between",sx:{p:3,typography:"body2"},children:t.jsxs(n,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[t.jsx(o,{sx:{typography:"subtitle2",marginBottom:1},children:t.jsx("div",{children:"Notes:"})}),t.jsx(n,{sx:{color:"text.secondary"},children:s==null?void 0:s.notes})]})})]}),t.jsx(rt,{currentOrder:s,open:p.value,onClose:p.onFalse})]})}function vt({currentOrder:s}){const[e,a]=d.useState(s),[l,y]=d.useState(),u=d.useRef(),x=F(),c=U(),[m,h]=d.useState([]),p=F(),O=X();d.useEffect(()=>{a(s)},[s]),d.useEffect(()=>{const i=Q(e==null?void 0:e.payments,"paymentDate");h(i)},[e==null?void 0:e.payments]);const{mutate:f}=k({mutationFn:i=>w.post(T.payments.create,i),onSuccess:async i=>{q.success("New Payment Has Been Created!");const{data:H}=i,L=Q([...m,H],"paymentDate");h(L)},onSettled:async()=>{await c.invalidateQueries({queryKey:["payments"]});const{id:i}=e;await c.invalidateQueries({queryKey:["order",i]}),x.onFalse()},onError:i=>{console.log(i)}}),{mutate:g}=k({mutationFn:i=>w.get(T.order.approve+i),onSuccess:async({data:i})=>{i!=null&&i.length?(p.onTrue(),y(i)):(q.success("Order Has Been Approved!"),a(i))},onSettled:async()=>{const{id:i}=e;await c.invalidateQueries({queryKey:["orders"]}),await c.invalidateQueries({queryKey:["orders","analytics"]}),await c.invalidateQueries({queryKey:["order",i]})},onError:i=>{console.log(i)}}),{mutate:b}=k({mutationFn:i=>w.post(T.order.createPlans,i),onSuccess:async({data:i})=>{q.success("Order Has Been Approved!"),a(i),p.onFalse()},onSettled:async()=>{const{id:i}=e;await c.invalidateQueries({queryKey:["orders"]}),await c.invalidateQueries({queryKey:["orders","analytics"]}),await c.invalidateQueries({queryKey:["order",i]})},onError:i=>{console.log(i)}}),D=pt.useReactToPrint({content:()=>u.current});return t.jsxs(t.Fragment,{children:[t.jsxs(Z,{children:[t.jsx(mt,{links:[{name:"Dashboard",href:P.dashboard.root},{name:"Orders",href:P.dashboard.order.root},{name:"Order Details"}],sx:{mb:{xs:3,md:5}}}),t.jsxs(S,{container:!0,spacing:3,children:[t.jsx(S,{xs:12,md:(e==null?void 0:e.status)!==r.Draft&&(e==null?void 0:e.status)!==r.Canceled?9:12,children:t.jsx(o,{ref:u,spacing:3,direction:{xs:"column-reverse",md:"column"},children:t.jsx(Tt,{order:e,customer:e==null?void 0:e.customer,discount:e==null?void 0:e.discount,totalAmount:e==null?void 0:e.totalOrderAmount,handleApproveOrder:g,handlePrint:D})})}),(e==null?void 0:e.status)!==r.Draft&&(e==null?void 0:e.status)!==r.Canceled&&t.jsx(S,{xs:12,md:3,children:t.jsx(wt,{order:e,payments:m,dialog:x})})]}),t.jsx(xt,{order:e,open:x.value,onClose:x.onFalse,handler:f})]}),t.jsx(dt,{open:p.value,onClose:p.onFalse,title:"Out of Stock",content:t.jsxs(t.Fragment,{children:[t.jsx(n,{children:"Products are out of Stock! do you want to create plans?"}),t.jsxs(n,{sx:{mt:1,mb:1},children:["You need to create ",t.jsx("span",{style:{fontWeight:"bold"},children:l==null?void 0:l.length})," :"]}),l==null?void 0:l.map(i=>t.jsxs(n,{children:["Plan for ",t.jsx("span",{style:{fontWeight:"bold"},children:i.product.name})," because is missing"," ",t.jsx("span",{style:{fontWeight:"bold",color:`${O.vars.palette.error.light}`},children:i.missingQuantity}),"."]}))]}),action:t.jsx(B,{variant:"contained",color:"error",onClick:()=>{b(l)},children:(l==null?void 0:l.length)>1?"Create Plans":"Create Plan"})})]})}const Pt={title:`Order details | Dashboard - ${et.site.name}`};function Bs(){const{id:s=""}=at(),e=it({queryKey:["order",s],queryFn:async()=>{const{data:a}=await w.get(T.order.details+s);return a}});return e.isPending||e.isLoading?t.jsx(tt,{}):e.isError?t.jsx(nt,{route:P.dashboard.order.root}):t.jsxs(t.Fragment,{children:[t.jsx(st,{children:t.jsxs("title",{children:[" ",Pt.title]})}),t.jsx(vt,{currentOrder:e.data})]})}export{Bs as default};