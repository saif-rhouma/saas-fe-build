import{r as o,dn as B,ea as S,i as D,j as s,S as i,B as r,e8 as F,e9 as H,aH as L,d7 as _,e as p,I as t,am as k,g as G,p as c,dP as $,ay as P,aB as U,e2 as h,cn as j,l as f,v as V,dT as z,H as K,C as J,dp as M,dm as W}from"./index-zyulwKWD.js";import{u as X,E as Y}from"./error-block-DYjvCFbe.js";import{u as Z}from"./use-params-D5TMtj-7.js";import{l as q}from"./index-DiQuQNWU.js";import{u as ee}from"./use-tabs-DAZWd3Hz.js";import{b as y}from"./format-number-CwpAkUO8.js";import{C as se}from"./custom-breadcrumbs-DHj4Ok4N.js";import{P as u}from"./permission-access-controller-DC3hx7Nz.js";import{T as re}from"./tickets-create-dialog-Pzj9R6oy.js";import{R as ie}from"./reminder-create-dialog-BmehvoEG.js";import{Q as te,a as ne,b as le}from"./quotation-reminder-table-ASeFo_vD.js";import{C as ae}from"./CardHeader-DBUIw25C.js";import{T as oe,a as ce}from"./Tabs-DFyAqHwW.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./form-provider-B4-ohiGK.js";import"./TextField-CwPpTqRa.js";import"./FormControl-DkR47KrL.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Dxqp6-8F.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-C6u8Qb2i.js";import"./Select-D9XKSxr2.js";import"./Menu-DQMDyUDh.js";import"./InputBase-Cb1ycHRk.js";import"./FormHelperText-DXYAPhzx.js";import"./Rating-Dxb9vRtQ.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DYwyPMk3.js";import"./index-Fr89IBES.js";import"./Slider-CZuO2OIz.js";import"./RadioGroup-DmqY9jkn.js";import"./FormGroup-PZ8L00lW.js";import"./FormControlLabel-krtCXPG7.js";import"./utils-DGmOSEsQ.js";import"./index-WuVNPZZI.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BErxhCkp.js";import"./Autocomplete-CyPDwGC0.js";import"./Chip-hUCBEcuv.js";import"./country-select-CXYKfaKC.js";import"./Checkbox-B2T2mhgd.js";import"./upload-avatar-vd3eyrbg.js";import"./image-CJs4Y8Ie.js";import"./DatePicker-B07m1huX.js";import"./DialogContent-CrSIuYBM.js";import"./ListItem-uUR6JM6K.js";import"./MobileDateTimePicker-BDwlzO1U.js";import"./useMutation-Cq5RP75q.js";import"./DialogTitle-B9BBK-5J.js";import"./LoadingButton-CNgluC-A.js";import"./CircularProgress-D8aR7PE7.js";import"./schema-helper-_MOasXwH.js";import"./utils-MBUcMVfY.js";import"./use-table-Bf_i8STO.js";import"./table-head-custom-C5tz8LbQ.js";import"./TableCell-DS8DZ5wT.js";import"./table-pagination-custom-Bj-7BC4s.js";import"./TablePagination-BV8oey5N.js";import"./KeyboardArrowRight-HkDaFki2.js";import"./LastPage-jJvTp2Lh.js";import"./AvatarGroup-D_gM7ABD.js";import"./table-empty-rows-BLFiUyUG.js";const de=[{value:"details",icon:s.jsx(t,{icon:"solar:eye-bold",width:24}),label:"Details"},{value:"tickets",icon:s.jsx(t,{icon:"solar:case-minimalistic-bold",width:24}),label:"Tickets"},{value:"reminders",icon:s.jsx(t,{icon:"solar:calendar-bold",width:24}),label:"Reminders"}];function xe({currentQuotation:a}){var T,C,w,v;const[e,d]=o.useState(a),n=ee("details"),b=o.useRef();B(),S(),o.useEffect(()=>{d(a)},[a]);const I=q.useReactToPrint({content:()=>b.current}),x=D(),m=D(),Q=s.jsxs(i,{alignItems:"flex-end",sx:{pr:3,pl:3,pb:3,textAlign:"right",typography:"body2"},children:[s.jsxs(i,{direction:"row",children:[s.jsx(r,{sx:{color:"text.secondary"},children:"Subtotal"}),s.jsx(r,{sx:{width:160,typography:"subtitle2"},children:y(e==null?void 0:e.totalAmount)||"-"})]}),s.jsxs(i,{direction:"row",children:[s.jsx(r,{sx:{color:"text.secondary"},children:"Discount"}),s.jsx(r,{sx:{width:160,...(e==null?void 0:e.discount)&&{color:"error.main"}},children:e!=null&&e.discount?`- ${e==null?void 0:e.discount}%`:"-"})]}),s.jsxs(i,{direction:"row",children:[s.jsxs(r,{sx:{color:"text.secondary"},children:["Tax (",(e==null?void 0:e.snapshotTaxPercentage)||"0","%)"]}),s.jsx(r,{sx:{width:160},children:e!=null&&e.snapshotTaxPercentage?y(F((e==null?void 0:e.totalAmount)-(e==null?void 0:e.totalAmount)*((e==null?void 0:e.discount)/100),e==null?void 0:e.snapshotTaxPercentage)):"-"})]}),s.jsxs(i,{direction:"row",sx:{typography:"subtitle1"},children:[s.jsx("div",{children:"Gross Total"}),s.jsx(r,{sx:{width:160},children:y(H((e==null?void 0:e.totalAmount)-(e==null?void 0:e.totalAmount)*((e==null?void 0:e.discount)/100),e==null?void 0:e.snapshotTaxPercentage))||"-"})]})]}),R=s.jsxs(i,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:[s.jsxs(r,{sx:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",m:1},children:[s.jsxs(r,{flexDirection:"column",sx:{display:"flex"},children:[s.jsxs(r,{sx:{color:"text.secondary"},children:["Quotation Ref: #",e==null?void 0:e.ref]}),s.jsxs(r,{sx:{color:"text.secondary"},children:["Quotation Date: ",L(e==null?void 0:e.quotationDate)]})]}),s.jsx(r,{sx:{mr:2},children:s.jsxs(r,{sx:{color:"text.secondary"},children:["Status:"," ",s.jsx(_,{variant:"soft",color:(e==null?void 0:e.status)==="InProcess"&&"warning"||(e==null?void 0:e.status)==="Confirmed"&&"success"||(e==null?void 0:e.status)==="Canceled"&&"error"||"default",children:e==null?void 0:e.status})]})}),((T=e==null?void 0:e.order)==null?void 0:T.id)&&s.jsx(r,{sx:{color:"text.secondary"},children:s.jsxs(p,{variant:"contained",size:"small",startIcon:s.jsx(t,{icon:"heroicons-outline:external-link"}),children:["Related to Order: #",(C=e==null?void 0:e.order)==null?void 0:C.ref]})})]}),(e==null?void 0:e.notes)&&s.jsxs(r,{children:[s.jsx(k,{}),s.jsx(i,{sx:{typography:"body2"},children:s.jsx(r,{sx:{p:1},children:s.jsxs(i,{sx:{typography:"subtitle2"},children:[s.jsx("div",{children:"Notes:"}),s.jsx(r,{sx:{color:"text.secondary"},children:e==null?void 0:e.notes})]})})})]})]}),A=s.jsxs(s.Fragment,{children:[s.jsx(r,{sx:{pr:3,pl:3,mb:3,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:s.jsx(te,{products:e==null?void 0:e.productToQuotation,defaultRowsPerPage:10})}),Q]}),E=s.jsx(i,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:s.jsx(r,{sx:{flex:1,mt:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:s.jsx(ne,{tickets:e.tickets})})}),O=s.jsx(i,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:s.jsx(r,{sx:{flex:1,mt:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:s.jsx(le,{reminders:e==null?void 0:e.reminders})})}),g=G(),N=o.useCallback(l=>{g.push(c.dashboard.quotation.edit(l))},[g]);return s.jsxs($,{children:[s.jsx(se,{links:[{name:"Dashboard",href:c.dashboard.root},{name:"Quotation",href:c.dashboard.quotation.root},{name:"Quotation Details"}],sx:{mb:{xs:3,md:5}}}),s.jsx(P,{container:!0,spacing:3,children:s.jsx(P,{xs:12,md:12,children:s.jsxs(U,{ref:b,children:[s.jsx("style",{jsx:!0,children:`
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
            `}),s.jsxs(i,{direction:{md:"column",p:3},children:[s.jsx(ae,{sx:{pt:1},title:e==null?void 0:e.name,subheader:`Quotation for Customer : ${(w=e==null?void 0:e.customer)==null?void 0:w.name}`,action:s.jsx(i,{className:"print-hide",spacing:3,direction:{xs:"column",sm:"row"},alignItems:{xs:"flex-end",sm:"center"},sx:{mb:{xs:3,md:5}},children:s.jsxs(i,{direction:"row",spacing:1,flexGrow:1,sx:{width:1},children:[s.jsx(u,{permission:h.EDIT_QUOTATION,children:(e==null?void 0:e.status)==="Draft"&&s.jsx(j,{title:"Edit",children:s.jsx(f,{onClick:()=>{N(e==null?void 0:e.id)},children:s.jsx(t,{icon:"solar:pen-bold"})})})}),s.jsx(u,{permission:h.CONVERT_QUOTATION_TO_ORDER,children:!((v=e==null?void 0:e.order)!=null&&v.id)&&(e==null?void 0:e.status)!=="Canceled"&&s.jsx(j,{title:"Convert to Order",children:s.jsx(f,{children:s.jsx(t,{icon:"solar:restart-circle-bold"})})})}),s.jsx(u,{permission:h.PRINT_QUOTATION,children:s.jsx(j,{title:"Print",children:s.jsx(f,{onClick:()=>{n.setValue("details"),I()},children:s.jsx(t,{icon:"solar:printer-minimalistic-bold"})})})})]})})}),R,s.jsx(k,{sx:{mt:3}}),s.jsxs(oe,{value:n.value,className:"print-hide",onChange:n.onChange,sx:{px:3,mb:3,boxShadow:l=>`inset 0 -2px 0 0 ${V(l.vars.palette.grey["500Channel"],.08)}`},children:[de.map(l=>s.jsx(ce,{icon:l.icon,value:l.value,label:l.label},l.value)),n.value==="tickets"&&s.jsx(r,{marginLeft:"auto",sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(p,{onClick:()=>x.onToggle(),variant:"outlined",startIcon:s.jsx(t,{icon:"mingcute:add-line"}),children:"New Ticket"})}),n.value==="reminders"&&s.jsx(r,{marginLeft:"auto",sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(p,{onClick:()=>m.onToggle(),variant:"outlined",startIcon:s.jsx(t,{icon:"mingcute:add-line"}),children:"New Reminder"})})]}),n.value==="details"&&A,n.value==="tickets"&&E,n.value==="reminders"&&O]})]})})}),s.jsx(re,{open:x.value,onClose:x.onFalse,quotation:e}),s.jsx(ie,{open:m.value,onClose:m.onFalse,quotation:e})]})}const me={title:`Quotation details | Dashboard - ${J.site.name}`};function ws(){const{id:a=""}=Z(),e=X({queryKey:["quotation",a],queryFn:async()=>{const{data:d}=await M.get(W.quotation.details+a);return d}});return e.isPending||e.isLoading?s.jsx(z,{}):e.isError?s.jsx(Y,{route:c.dashboard.order.root}):s.jsxs(s.Fragment,{children:[s.jsx(K,{children:s.jsxs("title",{children:[" ",me.title]})}),s.jsx(xe,{currentQuotation:e.data})]})}export{ws as default};