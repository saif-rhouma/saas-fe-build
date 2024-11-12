import{r as o,i as D,j as s,S as t,B as r,ea as _,e3 as G,d0 as $,d7 as K,e as h,I as n,am as I,g as U,p as d,dn as z,dP as J,cV as P,cY as M,e4 as j,c9 as u,l as f,v as Y,dp as Q,dm as O,dq as W,dT as X,H as Z,C as q}from"./index-ElVqIGcB.js";import{u as ee,E as se}from"./error-block-D1Wv1ibr.js";import{u as re}from"./use-params-CTM69Leb.js";import{l as ie}from"./index-DxvEqxC5.js";import{u as te}from"./useMutation-Bncb4rlV.js";import{u as ne}from"./use-tabs-DifS93BY.js";import{b as y}from"./format-number-Bbl8r7KE.js";import{C as ae}from"./custom-breadcrumbs-CBqi865E.js";import{P as b}from"./permission-access-controller-TBIa8Pbb.js";import{T as le}from"./tickets-create-dialog-D4fMrmX8.js";import{R as oe}from"./reminder-create-dialog-BSxtCFYG.js";import{Q as de,a as ce,b as xe}from"./quotation-reminder-table-bxGMJ4By.js";import{C as me}from"./CardHeader-DnnQehza.js";import{T as pe,a as he}from"./Tabs-BgYqllO9.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./form-provider-DvXtepJ_.js";import"./TextField-CiF1hxc-.js";import"./FormControl-T65SLQDL.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-D_pXLzl4.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-B9_mBwZG.js";import"./Select-_pqpK2mU.js";import"./Menu-DkcwaS5T.js";import"./InputBase-zeET2Sei.js";import"./FormHelperText-CTeFjG1s.js";import"./Rating-DmOu2u9_.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-CfNBOYYK.js";import"./index-BoA6mM0y.js";import"./Slider-D5Q7X7FE.js";import"./RadioGroup-By7LwJIm.js";import"./FormGroup-BNv7RZUl.js";import"./FormControlLabel-DXHIWK9H.js";import"./utils-HHOWrrtq.js";import"./index-kkITcZCu.js";import"./countries-DSLisFCy.js";import"./InputAdornment-CFGayAjm.js";import"./Autocomplete-CY4Mq3WT.js";import"./Chip-BFGN5bW6.js";import"./country-select-9ZOoZjiN.js";import"./Checkbox-C2uYWbTl.js";import"./upload-avatar-Chv1Xed3.js";import"./image-BWHQl3vW.js";import"./DatePicker-B-tf4Oe2.js";import"./DialogContent-Duo2pg8C.js";import"./ListItem-D9Z1ce0i.js";import"./MobileDateTimePicker-Cw8lgBhU.js";import"./DialogTitle-DxYQvFou.js";import"./LoadingButton-CdHr8RRV.js";import"./CircularProgress-CkZ9rK0T.js";import"./schema-helper-D8g288Yp.js";import"./utils-MBUcMVfY.js";import"./use-table-CkfRkHqo.js";import"./table-head-custom-Bna6vkEk.js";import"./TableCell-B_LOBPFc.js";import"./table-pagination-custom-B7Jo03aK.js";import"./TablePagination-C85A18cO.js";import"./KeyboardArrowRight-BusmjiF6.js";import"./LastPage-ZzH3xXhT.js";import"./AvatarGroup-BAQwZlG9.js";import"./table-empty-rows-C-DsiXF6.js";const je=[{value:"details",icon:s.jsx(n,{icon:"solar:eye-bold",width:24}),label:"Details"},{value:"tickets",icon:s.jsx(n,{icon:"solar:case-minimalistic-bold",width:24}),label:"Tickets"},{value:"reminders",icon:s.jsx(n,{icon:"solar:calendar-bold",width:24}),label:"Reminders"}];function ue({currentQuotation:l}){var C,w,v,k;const[e,x]=o.useState(l),a=ne("details"),g=o.useRef();o.useEffect(()=>{x(l)},[l]);const R=ie.useReactToPrint({content:()=>g.current}),m=D(),p=D(),A=s.jsxs(t,{alignItems:"flex-end",sx:{pr:3,pl:3,pb:3,textAlign:"right",typography:"body2"},children:[s.jsxs(t,{direction:"row",children:[s.jsx(r,{sx:{color:"text.secondary"},children:"Subtotal"}),s.jsx(r,{sx:{width:160,typography:"subtitle2"},children:y(e==null?void 0:e.totalAmount)||"-"})]}),s.jsxs(t,{direction:"row",children:[s.jsx(r,{sx:{color:"text.secondary"},children:"Discount"}),s.jsx(r,{sx:{width:160,...(e==null?void 0:e.discount)&&{color:"error.main"}},children:e!=null&&e.discount?`- ${e==null?void 0:e.discount}%`:"-"})]}),s.jsxs(t,{direction:"row",children:[s.jsxs(r,{sx:{color:"text.secondary"},children:["Tax (",(e==null?void 0:e.snapshotTaxPercentage)||"0","%)"]}),s.jsx(r,{sx:{width:160},children:e!=null&&e.snapshotTaxPercentage?y(_((e==null?void 0:e.totalAmount)-(e==null?void 0:e.totalAmount)*((e==null?void 0:e.discount)/100),e==null?void 0:e.snapshotTaxPercentage)):"-"})]}),s.jsxs(t,{direction:"row",sx:{typography:"subtitle1"},children:[s.jsx("div",{children:"Gross Total"}),s.jsx(r,{sx:{width:160},children:y(G((e==null?void 0:e.totalAmount)-(e==null?void 0:e.totalAmount)*((e==null?void 0:e.discount)/100),e==null?void 0:e.snapshotTaxPercentage))||"-"})]})]}),E=s.jsxs(t,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:[s.jsxs(r,{sx:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",m:1},children:[s.jsxs(r,{flexDirection:"column",sx:{display:"flex"},children:[s.jsxs(r,{sx:{color:"text.secondary"},children:["Quotation Ref: #",e==null?void 0:e.ref]}),s.jsxs(r,{sx:{color:"text.secondary"},children:["Quotation Date: ",$(e==null?void 0:e.quotationDate)]})]}),s.jsx(r,{sx:{mr:2},children:s.jsxs(r,{sx:{color:"text.secondary"},children:["Status:"," ",s.jsx(K,{variant:"soft",color:(e==null?void 0:e.status)==="InProcess"&&"warning"||(e==null?void 0:e.status)==="Confirmed"&&"success"||(e==null?void 0:e.status)==="Canceled"&&"error"||"default",children:e==null?void 0:e.status})]})}),((C=e==null?void 0:e.order)==null?void 0:C.id)&&s.jsx(r,{sx:{color:"text.secondary"},children:s.jsxs(h,{variant:"contained",size:"small",startIcon:s.jsx(n,{icon:"heroicons-outline:external-link"}),onClick:()=>{const{id:i}=e==null?void 0:e.order;i&&H(i)},children:["Related to Order: #",(w=e==null?void 0:e.order)==null?void 0:w.ref]})})]}),(e==null?void 0:e.notes)&&s.jsxs(r,{children:[s.jsx(I,{}),s.jsx(t,{sx:{typography:"body2"},children:s.jsx(r,{sx:{p:1},children:s.jsxs(t,{sx:{typography:"subtitle2"},children:[s.jsx("div",{children:"Notes:"}),s.jsx(r,{sx:{color:"text.secondary"},children:e==null?void 0:e.notes})]})})})]})]}),N=s.jsxs(s.Fragment,{children:[s.jsx(r,{sx:{pr:3,pl:3,mb:3,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:s.jsx(de,{products:e==null?void 0:e.productToQuotation,defaultRowsPerPage:10})}),A]}),S=s.jsx(t,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:s.jsx(r,{sx:{flex:1,mt:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:s.jsx(ce,{tickets:e.tickets})})}),B=s.jsx(t,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:s.jsx(r,{sx:{flex:1,mt:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:s.jsx(xe,{reminders:e==null?void 0:e.reminders})})}),c=U(),F=o.useCallback(i=>{c.push(d.dashboard.quotation.edit(i))},[c]),H=o.useCallback(i=>{c.push(d.dashboard.order.details(i))},[c]),T=z(),{mutate:L}=te({mutationFn:i=>Q.post(O.quotation.createOrder,i),onSuccess:async({data:i})=>{W.success("Order Has Been Created!");const{id:V}=e;await T.invalidateQueries({queryKey:["quotations"]}),await T.invalidateQueries({queryKey:["quotation",V]})},onError:i=>{console.log(i)}});return s.jsxs(J,{children:[s.jsx(ae,{links:[{name:"Dashboard",href:d.dashboard.root},{name:"Quotation",href:d.dashboard.quotation.root},{name:"Quotation Details"}],sx:{mb:{xs:3,md:5}}}),s.jsx(P,{container:!0,spacing:3,children:s.jsx(P,{xs:12,md:12,children:s.jsxs(M,{ref:g,children:[s.jsx("style",{jsx:!0,children:`
              .print-title {
                display: none; /* Hide on screen */
              }

              @media print {
                html,
                body {
                  height: initial !important;
                  overflow: initial !important;
                }
                .print-title {
                  display: block; /* Show only when printing */
                }
                .print-hide {
                  display: none; /* Hide on screen */
                }
                .print-padding {
                  padding: 60px;
                }
              }
            `}),s.jsxs(t,{direction:{md:"column",p:3},children:[s.jsx(me,{sx:{pt:1},title:e==null?void 0:e.name,subheader:`Quotation for Customer : ${(v=e==null?void 0:e.customer)==null?void 0:v.name}`,action:s.jsx(t,{className:"print-hide",spacing:3,direction:{xs:"column",sm:"row"},alignItems:{xs:"flex-end",sm:"center"},sx:{mb:{xs:3,md:5}},children:s.jsxs(t,{direction:"row",spacing:1,flexGrow:1,sx:{width:1},children:[s.jsx(b,{permission:j.EDIT_QUOTATION,children:(e==null?void 0:e.status)==="Draft"&&s.jsx(u,{title:"Edit",children:s.jsx(f,{onClick:()=>{F(e==null?void 0:e.id)},children:s.jsx(n,{icon:"solar:pen-bold"})})})}),s.jsx(b,{permission:j.CONVERT_QUOTATION_TO_ORDER,children:!((k=e==null?void 0:e.order)!=null&&k.id)&&(e==null?void 0:e.status)==="Draft"&&s.jsx(u,{title:"Convert to Order",children:s.jsx(f,{onClick:()=>{L({quotationId:e==null?void 0:e.id})},children:s.jsx(n,{icon:"solar:restart-circle-bold"})})})}),s.jsx(b,{permission:j.PRINT_QUOTATION,children:s.jsx(u,{title:"Print",children:s.jsx(f,{onClick:()=>{a.setValue("details"),R()},children:s.jsx(n,{icon:"solar:printer-minimalistic-bold"})})})})]})})}),E,s.jsx(I,{sx:{mt:3}}),s.jsxs(pe,{value:a.value,className:"print-hide",onChange:a.onChange,sx:{px:3,mb:3,boxShadow:i=>`inset 0 -2px 0 0 ${Y(i.vars.palette.grey["500Channel"],.08)}`},children:[je.map(i=>s.jsx(he,{icon:i.icon,value:i.value,label:i.label},i.value)),a.value==="tickets"&&s.jsx(r,{marginLeft:"auto",sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(h,{onClick:()=>m.onToggle(),variant:"outlined",startIcon:s.jsx(n,{icon:"mingcute:add-line"}),children:"New Ticket"})}),a.value==="reminders"&&s.jsx(r,{marginLeft:"auto",sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(h,{onClick:()=>p.onToggle(),variant:"outlined",startIcon:s.jsx(n,{icon:"mingcute:add-line"}),children:"New Reminder"})})]}),a.value==="details"&&N,a.value==="tickets"&&S,a.value==="reminders"&&B]})]})})}),s.jsx(le,{open:m.value,onClose:m.onFalse,quotation:e}),s.jsx(oe,{open:p.value,onClose:p.onFalse,quotation:e})]})}const fe={title:`Quotation details | Dashboard - ${q.site.name}`};function Ps(){const{id:l=""}=re(),e=ee({queryKey:["quotation",l],queryFn:async()=>{const{data:x}=await Q.get(O.quotation.details+l);return x}});return e.isPending||e.isLoading?s.jsx(X,{}):e.isError?s.jsx(se,{route:d.dashboard.order.root}):s.jsxs(s.Fragment,{children:[s.jsx(Z,{children:s.jsxs("title",{children:[" ",fe.title]})}),s.jsx(ue,{currentQuotation:e.data})]})}export{Ps as default};