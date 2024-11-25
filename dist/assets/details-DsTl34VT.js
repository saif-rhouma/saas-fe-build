import{r as c,i as B,j as s,S as i,B as t,ea as se,e8 as re,d0 as L,d7 as te,e9 as o,e as w,I as n,am as H,g as ie,p as h,dn as ne,dp as u,dm as j,dP as oe,cV as K,cY as ae,e3 as v,c9 as l,l as x,v as le,dq as k,dT as de,H as ce,C as xe}from"./index-9WIYojXz.js";import{u as $,E as me}from"./error-block-DhnojnAQ.js";import{u as pe}from"./use-params-D2ubw5Mh.js";import{l as he}from"./index-DMRtjn0R.js";import{u as Q}from"./useMutation-ZFzLckbx.js";import{u as ue}from"./use-tabs-CfV3rHN-.js";import{b as D}from"./format-number-ThVrp-kn.js";import{C as je}from"./custom-breadcrumbs-DHTIFeqs.js";import{P}from"./permission-access-controller-C4QUhktl.js";import{T as fe}from"./tickets-create-dialog-CWTMf7Bi.js";import{R as ye}from"./reminder-create-dialog-DamlxzsW.js";import{Q as be,a as ge,P as Ce}from"./print-quotation-details-template-CNF59RoP.js";import{Q as Te}from"./quotation-product-table-BZYB6e-6.js";import{C as we}from"./CardHeader-CBK6QdHC.js";import{T as ve,a as ke}from"./Tabs-jmmmMz6a.js";import{C as Qe}from"./CircularProgress-CbumJeXP.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./form-provider-DoDHQ7Pw.js";import"./TextField-B5VRxv2z.js";import"./FormControl-i5_L0HW9.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BsFZyvhX.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Cdv8FF65.js";import"./Select-Dbda1_Lz.js";import"./Menu-DQZymDEx.js";import"./InputBase-DxJhG4-2.js";import"./FormHelperText-CrDWnCKF.js";import"./Rating-BAJTeGkk.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-BKzPrEd2.js";import"./index-h44KeYk_.js";import"./Slider-26tiyZvR.js";import"./RadioGroup-DVJYKuuN.js";import"./FormGroup-ecogmTvT.js";import"./FormControlLabel-CQ80V3t9.js";import"./utils-D4ZVlgLI.js";import"./index-B6xKEW1L.js";import"./countries-DSLisFCy.js";import"./InputAdornment-Dy27B7Wv.js";import"./Autocomplete-D7aQSa71.js";import"./Chip-D0QOLpKJ.js";import"./country-select-CYyCXO2U.js";import"./Checkbox-DS1rDb6Y.js";import"./upload-avatar-rQsZa8Xt.js";import"./image-CDF1XP5G.js";import"./DatePicker-C3QrlNIh.js";import"./DialogContent-DyFL-JUF.js";import"./ListItem-gqkY54PP.js";import"./MobileDateTimePicker-CGGrjhgG.js";import"./upload-box-ad-CsEI9hAK.js";import"./DialogTitle-XreEWkx4.js";import"./LoadingButton-wCda_GsL.js";import"./schema-helper-DKv_F_6_.js";import"./utils-MBUcMVfY.js";import"./use-table-D2ieOtgm.js";import"./table-head-custom-Cbjb5iLb.js";import"./TableCell-CbMALV-4.js";import"./table-pagination-custom-DmLvM2h1.js";import"./TablePagination-DUFtHnjT.js";import"./KeyboardArrowRight-vrz_hNQL.js";import"./LastPage-yC8jxO81.js";import"./table-empty-rows-qR7SV3Wl.js";const De=[{value:"details",icon:s.jsx(n,{icon:"solar:eye-bold",width:24}),label:"Details"},{value:"tickets",icon:s.jsx(n,{icon:"solar:case-minimalistic-bold",width:24}),label:"Tickets"},{value:"reminders",icon:s.jsx(n,{icon:"solar:calendar-bold",width:24}),label:"Reminders"}];function Pe({currentQuotation:d}){var R,E,O,A,N,F;const[e,b]=c.useState(d),a=ue("details"),S=c.useRef();c.useEffect(()=>{b(d)},[d]),he.useReactToPrint({content:()=>S.current});const g=B(),C=B(),U=s.jsxs(i,{alignItems:"flex-end",sx:{pr:3,pl:3,pb:3,textAlign:"right",typography:"body2"},children:[s.jsxs(i,{direction:"row",children:[s.jsx(t,{sx:{color:"text.secondary"},children:"Subtotal"}),s.jsx(t,{sx:{width:160,typography:"subtitle2"},children:D(e==null?void 0:e.totalAmount)||"-"})]}),s.jsxs(i,{direction:"row",children:[s.jsx(t,{sx:{color:"text.secondary"},children:"Discount"}),s.jsx(t,{sx:{width:160,...(e==null?void 0:e.discount)&&{color:"error.main"}},children:e!=null&&e.discount?`- ${e==null?void 0:e.discount}%`:"-"})]}),s.jsxs(i,{direction:"row",children:[s.jsxs(t,{sx:{color:"text.secondary"},children:["Tax (",(e==null?void 0:e.snapshotTaxPercentage)||"0","%)"]}),s.jsx(t,{sx:{width:160},children:e!=null&&e.snapshotTaxPercentage?D(se((e==null?void 0:e.totalAmount)-(e==null?void 0:e.totalAmount)*((e==null?void 0:e.discount)/100),e==null?void 0:e.snapshotTaxPercentage)):"-"})]}),s.jsxs(i,{direction:"row",sx:{typography:"subtitle1"},children:[s.jsx("div",{children:"Total"}),s.jsx(t,{sx:{width:160},children:D(re((e==null?void 0:e.totalAmount)-(e==null?void 0:e.totalAmount)*((e==null?void 0:e.discount)/100),e==null?void 0:e.snapshotTaxPercentage))||"-"})]})]}),_=s.jsxs(i,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:[s.jsxs(t,{sx:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",m:1},children:[s.jsxs(t,{flexDirection:"column",sx:{display:"flex"},children:[s.jsxs(t,{sx:{color:"text.secondary"},children:["Quotation Ref: #",e==null?void 0:e.ref]}),s.jsxs(t,{sx:{color:"text.secondary"},children:["Quotation Date: ",L(e==null?void 0:e.quotationDate)]}),s.jsxs(t,{sx:{color:"text.secondary"},children:["Quotation Expiry: ",L(e==null?void 0:e.expiredDate)]})]}),s.jsx(t,{sx:{mr:2},children:s.jsxs(t,{sx:{color:"text.secondary"},children:["Status:"," ",s.jsx(te,{variant:"soft",color:(e==null?void 0:e.status)===o.Confirmed&&"info"||(e==null?void 0:e.status)===o.Converted&&"success"||(e==null?void 0:e.status)===o.Canceled&&"error"||"default",children:e==null?void 0:e.status})]})}),((R=e==null?void 0:e.order)==null?void 0:R.id)&&s.jsx(t,{sx:{color:"text.secondary"},className:"print-hide",children:s.jsxs(w,{variant:"contained",size:"small",startIcon:s.jsx(n,{icon:"heroicons-outline:external-link"}),onClick:()=>{const{id:r}=e==null?void 0:e.order;r&&I(r)},children:["Related to Order: #",(E=e==null?void 0:e.order)==null?void 0:E.ref]})})]}),(e==null?void 0:e.notes)&&s.jsxs(t,{children:[s.jsx(H,{}),s.jsx(i,{sx:{typography:"body2"},children:s.jsx(t,{sx:{p:1},children:s.jsxs(i,{sx:{typography:"subtitle2"},children:[s.jsx("div",{children:"Notes:"}),s.jsx(t,{sx:{color:"text.secondary"},children:e==null?void 0:e.notes})]})})})]})]}),V=s.jsxs(s.Fragment,{children:[s.jsx(t,{sx:{pr:3,pl:3,mb:3,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:s.jsx(Te,{products:e==null?void 0:e.productToQuotation,defaultRowsPerPage:10})}),U]}),G=s.jsx(i,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:s.jsx(t,{sx:{flex:1,mt:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:s.jsx(be,{tickets:e.tickets})})}),z=s.jsx(i,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:s.jsx(t,{sx:{flex:1,mt:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:s.jsx(ge,{reminders:e==null?void 0:e.reminders})})}),f=ie(),J=c.useCallback(r=>{f.push(h.dashboard.quotation.edit(r))},[f]),I=c.useCallback(r=>{f.push(h.dashboard.order.details(r))},[f]),y=ne(),{mutate:M}=Q({mutationFn:r=>u.post(j.quotation.createOrder,r),onSuccess:async({data:r})=>{k.success("Order Has Been Created!");const{id:m}=e;await y.invalidateQueries({queryKey:["quotations"]}),await y.invalidateQueries({queryKey:["quotation",m]})},onError:r=>{console.log(r)}}),{mutate:Y}=Q({mutationFn:r=>u.post(j.quotation.share,r),onSuccess:async({data:r})=>{k.success("Quotation has been sended to the customer.")},onError:r=>{console.log(r)}}),{mutate:W}=Q({mutationFn:r=>u.patch(j.quotation.editStatus+r,{status:o.Confirmed}),onSuccess:async({data:r})=>{k.success("Quotation Has Been Confirmed!");const{id:m}=e;await y.invalidateQueries({queryKey:["quotations"]}),await y.invalidateQueries({queryKey:["quotation",m]})},onError:r=>{console.log(r)}}),[X,T]=c.useState(!1),Z=()=>{T(!0)},{data:Ie,isLoading:q,error:Re}=$({queryKey:["download-quotation",e.id],queryFn:async()=>{const r=await u.get(j.quotation.downloadPdf+e.id,{responseType:"blob"}),m=window.URL.createObjectURL(new Blob([r.data])),p=document.createElement("a");return p.href=m,p.setAttribute("download",`Quotation-${e.ref}.pdf`),document.body.appendChild(p),p.click(),document.body.removeChild(p),T(!1),r.data},enabled:X,onSuccess:()=>{T(!1)},onError:r=>{console.error("Download failed:",r)}}),ee=s.jsx(l,{title:"Download Pdf",children:s.jsx(x,{onClick:Z,children:q?s.jsx(Qe,{size:24,color:"inherit"}):s.jsx(n,{icon:"eva:cloud-download-fill"})})});return s.jsxs(oe,{children:[s.jsx(je,{links:[{name:"Dashboard",href:h.dashboard.root},{name:"Quotations",href:h.dashboard.quotation.root},{name:"Quotation Details"}],sx:{mb:{xs:3,md:5}}}),s.jsx(K,{container:!0,spacing:3,children:s.jsx(K,{xs:12,md:12,children:s.jsxs(ae,{ref:S,children:[s.jsx("style",{jsx:!0,children:`
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
                  padding: 5px;
                }
                .print-top-margin {
                  margin-top: 40px;
                }
              }
            `}),s.jsxs(i,{direction:{md:"column",p:3},className:"print-top-margin print-padding",children:[s.jsx(we,{sx:{pt:1},title:e==null?void 0:e.name,subheader:`Quotation for Customer : ${(O=e==null?void 0:e.customer)==null?void 0:O.name}`,action:s.jsx(i,{className:"print-hide",spacing:3,direction:{xs:"column",sm:"row"},alignItems:{xs:"flex-end",sm:"center"},sx:{mb:{xs:3,md:5}},children:s.jsxs(i,{direction:"row",spacing:1,flexGrow:1,sx:{width:1},children:[s.jsx(P,{permission:v.EDIT_QUOTATION,children:(e==null?void 0:e.status)===o.Created&&s.jsx(l,{title:"Edit",children:s.jsx(x,{onClick:()=>{J(e==null?void 0:e.id)},children:s.jsx(n,{icon:"solar:pen-bold"})})})}),(e==null?void 0:e.status)===o.Created&&s.jsx(l,{title:"Confirm",children:s.jsx(x,{onClick:()=>{W(e==null?void 0:e.id)},children:s.jsx(n,{icon:"line-md:confirm-circle-filled"})})}),s.jsx(P,{permission:v.CONVERT_QUOTATION_TO_ORDER,children:!((A=e==null?void 0:e.order)!=null&&A.id)&&((e==null?void 0:e.status)===o.Created||(e==null?void 0:e.status)===o.Confirmed)&&s.jsx(l,{title:"Convert to Order",children:s.jsx(x,{onClick:()=>{M({quotationId:e==null?void 0:e.id})},children:s.jsx(n,{icon:"solar:restart-circle-bold"})})})}),((N=e==null?void 0:e.order)==null?void 0:N.id)&&s.jsx(l,{title:`Related to Order: #${(F=e==null?void 0:e.order)==null?void 0:F.ref}`,children:s.jsx(x,{onClick:()=>{var r;I((r=e==null?void 0:e.order)==null?void 0:r.id)},children:s.jsx(n,{icon:"heroicons-outline:external-link"})})}),ee,s.jsx(P,{permission:v.PRINT_QUOTATION,children:s.jsx(l,{title:"Print",children:s.jsx(Ce,{quotation:e})})}),s.jsx(l,{title:"Send To the Customer",children:s.jsx(x,{onClick:()=>{Y({id:e.id})},children:s.jsx(n,{icon:"iconamoon:send-fill"})})})]})})}),_,s.jsx(H,{sx:{mt:3}}),s.jsxs(ve,{value:a.value,className:"print-hide",onChange:a.onChange,sx:{px:3,mb:3,boxShadow:r=>`inset 0 -2px 0 0 ${le(r.vars.palette.grey["500Channel"],.08)}`},children:[De.map(r=>s.jsx(ke,{icon:r.icon,value:r.value,label:r.label},r.value)),a.value==="tickets"&&s.jsx(t,{marginLeft:"auto",sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(w,{onClick:()=>g.onToggle(),variant:"outlined",startIcon:s.jsx(n,{icon:"mingcute:add-line"}),children:"New Ticket"})}),a.value==="reminders"&&s.jsx(t,{marginLeft:"auto",sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(w,{onClick:()=>C.onToggle(),variant:"outlined",startIcon:s.jsx(n,{icon:"mingcute:add-line"}),children:"New Reminder"})})]}),a.value==="details"&&V,a.value==="tickets"&&G,a.value==="reminders"&&z]})]})})}),s.jsx(fe,{open:g.value,onClose:g.onFalse,quotation:e}),s.jsx(ye,{open:C.value,onClose:C.onFalse,quotation:e})]})}const Se={title:`Quotation details | Dashboard - ${xe.site.name}`};function _s(){const{id:d=""}=pe(),e=$({queryKey:["quotation",d],queryFn:async()=>{const{data:b}=await u.get(j.quotation.details+d);return b}});return e.isPending||e.isLoading?s.jsx(de,{}):e.isError?s.jsx(me,{route:h.dashboard.order.root}):s.jsxs(s.Fragment,{children:[s.jsx(ce,{children:s.jsxs("title",{children:[" ",Se.title]})}),s.jsx(Pe,{currentQuotation:e.data})]})}export{_s as default};
