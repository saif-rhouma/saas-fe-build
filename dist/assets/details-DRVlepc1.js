import{r as o,dn as B,ea as E,i as v,j as s,S as t,B as r,e8 as S,e9 as F,aH as L,d7 as N,e as p,I as i,am as w,g as G,p as c,dP as H,ay as D,aB as $,cn as h,l as j,v as O,dT as z,H as K,C as V,dp as J,dm as M}from"./index-Cb6aSJqI.js";import{u as U,E as W}from"./error-block-BjnALYtR.js";import{u as X}from"./use-params-C5uI-LxA.js";import{l as Y}from"./index-DdxgntlE.js";import{u as Z}from"./use-tabs-BjqpqjBq.js";import{b as f}from"./format-number-BkELK9o5.js";import{C as _}from"./custom-breadcrumbs-k2LFOW06.js";import{T as q}from"./tickets-create-dialog-DMXWpKCl.js";import{R as ee}from"./reminder-create-dialog-Wig1t3nt.js";import{Q as se,a as re,b as te}from"./quotation-reminder-table-fqu6iNus.js";import{C as ie}from"./CardHeader-iu_IfPM-.js";import{T as ne,a as ae}from"./Tabs-b62Cxr_j.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./form-provider-r_GtnSm5.js";import"./TextField-DQXcR5as.js";import"./FormControl-BIuepxap.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BHzQjcru.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bb0ljwLc.js";import"./Select-CfChxtbn.js";import"./Menu-BgA5ob5m.js";import"./InputBase-4YzQn0tJ.js";import"./FormHelperText-BO4BDf2D.js";import"./Rating-DQIiPGvY.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-UDNnP2Xz.js";import"./index-DZy9M42U.js";import"./Slider-BHOQTROj.js";import"./RadioGroup-1WLwx_FR.js";import"./FormGroup-kgp3wVtK.js";import"./FormControlLabel-CI_VXRKb.js";import"./utils-D-Ozr33c.js";import"./index-BXLKVmsR.js";import"./countries-DSLisFCy.js";import"./InputAdornment-B3lMmCet.js";import"./Autocomplete-BDaB15VF.js";import"./Chip-CRJSjjGM.js";import"./country-select-DOwlUwkR.js";import"./Checkbox-BduLSsJI.js";import"./upload-avatar-DO-yiArG.js";import"./image-CKkZri-A.js";import"./DatePicker-Chzv8MLO.js";import"./DialogContent-CSEM2EB2.js";import"./ListItem-DTFB2zaU.js";import"./MobileDateTimePicker-BNTgtMsh.js";import"./useMutation-D6Rdi7Aa.js";import"./DialogTitle-DEoYoKxf.js";import"./LoadingButton-rewNqQCK.js";import"./CircularProgress-D9mwFFsQ.js";import"./schema-helper-DTTchL2M.js";import"./utils-MBUcMVfY.js";import"./use-table-B_0Wh9K1.js";import"./table-head-custom-CPjDlHqa.js";import"./TableCell-DafvB6oq.js";import"./table-pagination-custom-DGFLFC1J.js";import"./TablePagination-BWIz7obk.js";import"./KeyboardArrowRight-ElyTBoq2.js";import"./LastPage-ByYLdXox.js";import"./AvatarGroup-Jn-6GhRb.js";import"./table-empty-rows-y2B3-iKT.js";const le=[{value:"details",icon:s.jsx(i,{icon:"solar:eye-bold",width:24}),label:"Details"},{value:"tickets",icon:s.jsx(i,{icon:"solar:case-minimalistic-bold",width:24}),label:"Tickets"},{value:"reminders",icon:s.jsx(i,{icon:"solar:calendar-bold",width:24}),label:"Reminders"}];function oe({currentQuotation:l}){var y,g,T,C;const[e,d]=o.useState(l),a=Z("details"),u=o.useRef();B(),E(),o.useEffect(()=>{d(l)},[l]),Y.useReactToPrint({content:()=>u.current});const x=v(),m=v(),k=s.jsxs(t,{alignItems:"flex-end",sx:{pr:3,pl:3,pb:3,textAlign:"right",typography:"body2"},children:[s.jsxs(t,{direction:"row",children:[s.jsx(r,{sx:{color:"text.secondary"},children:"Subtotal"}),s.jsx(r,{sx:{width:160,typography:"subtitle2"},children:f(e==null?void 0:e.totalAmount)||"-"})]}),s.jsxs(t,{direction:"row",children:[s.jsx(r,{sx:{color:"text.secondary"},children:"Discount"}),s.jsx(r,{sx:{width:160,...(e==null?void 0:e.discount)&&{color:"error.main"}},children:e!=null&&e.discount?`- ${e==null?void 0:e.discount}%`:"-"})]}),s.jsxs(t,{direction:"row",children:[s.jsxs(r,{sx:{color:"text.secondary"},children:["Tax (",(e==null?void 0:e.snapshotTaxPercentage)||"0","%)"]}),s.jsx(r,{sx:{width:160},children:e!=null&&e.snapshotTaxPercentage?f(S((e==null?void 0:e.totalAmount)-(e==null?void 0:e.totalAmount)*((e==null?void 0:e.discount)/100),e==null?void 0:e.snapshotTaxPercentage)):"-"})]}),s.jsxs(t,{direction:"row",sx:{typography:"subtitle1"},children:[s.jsx("div",{children:"Gross Total"}),s.jsx(r,{sx:{width:160},children:f(F((e==null?void 0:e.totalAmount)-(e==null?void 0:e.totalAmount)*((e==null?void 0:e.discount)/100),e==null?void 0:e.snapshotTaxPercentage))||"-"})]})]}),P=s.jsxs(t,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:[s.jsxs(r,{sx:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",m:1},children:[s.jsxs(r,{flexDirection:"column",sx:{display:"flex"},children:[s.jsxs(r,{sx:{color:"text.secondary"},children:["Quotation Ref: #",e==null?void 0:e.ref]}),s.jsxs(r,{sx:{color:"text.secondary"},children:["Quotation Date: ",L(e==null?void 0:e.quotationDate)]})]}),s.jsx(r,{sx:{mr:2},children:s.jsxs(r,{sx:{color:"text.secondary"},children:["Status:"," ",s.jsx(N,{variant:"soft",color:(e==null?void 0:e.status)==="InProcess"&&"warning"||(e==null?void 0:e.status)==="Confirmed"&&"success"||(e==null?void 0:e.status)==="Canceled"&&"error"||"default",children:e==null?void 0:e.status})]})}),((y=e==null?void 0:e.order)==null?void 0:y.id)&&s.jsx(r,{sx:{color:"text.secondary"},children:s.jsxs(p,{variant:"contained",size:"small",startIcon:s.jsx(i,{icon:"heroicons-outline:external-link"}),children:["Related to Order: #",(g=e==null?void 0:e.order)==null?void 0:g.ref]})})]}),(e==null?void 0:e.notes)&&s.jsxs(r,{children:[s.jsx(w,{}),s.jsx(t,{sx:{typography:"body2"},children:s.jsx(r,{sx:{p:1},children:s.jsxs(t,{sx:{typography:"subtitle2"},children:[s.jsx("div",{children:"Notes:"}),s.jsx(r,{sx:{color:"text.secondary"},children:e==null?void 0:e.notes})]})})})]})]}),Q=s.jsxs(s.Fragment,{children:[s.jsx(r,{sx:{pr:3,pl:3,mb:3,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:s.jsx(se,{products:e==null?void 0:e.productToQuotation,defaultRowsPerPage:10})}),k]}),I=s.jsx(t,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:s.jsx(r,{sx:{flex:1,mt:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:s.jsx(re,{tickets:e.tickets})})}),R=s.jsx(t,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:s.jsx(r,{sx:{flex:1,mt:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:s.jsx(te,{reminders:e==null?void 0:e.reminders})})}),b=G(),A=o.useCallback(n=>{b.push(c.dashboard.quotation.edit(n))},[b]);return s.jsxs(H,{children:[s.jsx(_,{links:[{name:"Dashboard",href:c.dashboard.root},{name:"Quotation",href:c.dashboard.quotation.root},{name:"Quotation Details"}],sx:{mb:{xs:3,md:5}}}),s.jsx(D,{container:!0,spacing:3,children:s.jsx(D,{xs:12,md:12,children:s.jsx($,{children:s.jsxs(t,{ref:u,direction:{xs:"column-reverse",md:"column",p:3},children:[s.jsx(ie,{sx:{pt:1},className:"print-hide",title:e==null?void 0:e.name,subheader:`Quotation for Customer : ${(T=e==null?void 0:e.customer)==null?void 0:T.name}`,action:s.jsx(t,{spacing:3,direction:{xs:"column",sm:"row"},alignItems:{xs:"flex-end",sm:"center"},sx:{mb:{xs:3,md:5}},children:s.jsxs(t,{direction:"row",spacing:1,flexGrow:1,sx:{width:1},children:[(e==null?void 0:e.status)==="Draft"&&s.jsx(h,{title:"Edit",children:s.jsx(j,{onClick:()=>{A(e==null?void 0:e.id)},children:s.jsx(i,{icon:"solar:pen-bold"})})}),!((C=e==null?void 0:e.order)!=null&&C.id)&&(e==null?void 0:e.status)!=="Canceled"&&s.jsx(h,{title:"Convert to Order",children:s.jsx(j,{children:s.jsx(i,{icon:"solar:restart-circle-bold"})})}),s.jsx(h,{title:"Print",children:s.jsx(j,{children:s.jsx(i,{icon:"solar:printer-minimalistic-bold"})})})]})})}),P,s.jsx(w,{sx:{mt:3}}),s.jsxs(ne,{value:a.value,onChange:a.onChange,sx:{px:3,mb:3,boxShadow:n=>`inset 0 -2px 0 0 ${O(n.vars.palette.grey["500Channel"],.08)}`},children:[le.map(n=>s.jsx(ae,{icon:n.icon,value:n.value,label:n.label},n.value)),a.value==="tickets"&&s.jsx(r,{marginLeft:"auto",sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(p,{onClick:()=>x.onToggle(),variant:"outlined",startIcon:s.jsx(i,{icon:"mingcute:add-line"}),children:"New Ticket"})}),a.value==="reminders"&&s.jsx(r,{marginLeft:"auto",sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(p,{onClick:()=>m.onToggle(),variant:"outlined",startIcon:s.jsx(i,{icon:"mingcute:add-line"}),children:"New Reminder"})})]}),a.value==="details"&&Q,a.value==="tickets"&&I,a.value==="reminders"&&R]})})})}),s.jsx(q,{open:x.value,onClose:x.onFalse,quotation:e}),s.jsx(ee,{open:m.value,onClose:m.onFalse,quotation:e})]})}const ce={title:`Quotation details | Dashboard - ${V.site.name}`};function ys(){const{id:l=""}=X(),e=U({queryKey:["quotation",l],queryFn:async()=>{const{data:d}=await J.get(M.quotation.details+l);return d}});return e.isPending||e.isLoading?s.jsx(z,{}):e.isError?s.jsx(W,{route:c.dashboard.order.root}):s.jsxs(s.Fragment,{children:[s.jsx(K,{children:s.jsxs("title",{children:[" ",ce.title]})}),s.jsx(oe,{currentQuotation:e.data})]})}export{ys as default};
