import{r as h,br as re,j as s,I as l,Y as F,S as a,B as i,ea as te,e8 as ie,d1 as N,d8 as ae,e9 as n,e as v,a5 as B,W as le,p as u,dp as ne,dq as j,dn as f,dQ as oe,cW as L,cZ as de,e4 as k,bq as d,$ as m,v as ce,dr as V,dU as me,H as xe,C as pe}from"./index-BrVky5Gg.js";import{u as M,E as he}from"./error-block-FcQeBxj7.js";import{u as ue}from"./use-params-lRUlHp9M.js";import{u as Q}from"./useMutation-CE0P_ta-.js";import{u as je}from"./use-tabs-DImOCbVe.js";import{b as P}from"./format-number-BYcftzxu.js";import{C as fe}from"./custom-breadcrumbs-BF1juKa-.js";import{P as D}from"./permission-access-controller-mr8Vt4iB.js";import{T as be}from"./tickets-create-dialog-D8RfKpwu.js";import{R as ye}from"./reminder-create-dialog-JaobCYjo.js";import{Q as we,a as Ce,P as ge}from"./print-quotation-details-template-DfwAZpGK.js";import{Q as Te}from"./quotation-product-table-CAjoVN6W.js";import{C as ve}from"./CardHeader-DEDB19_Z.js";import{T as ke,a as Ve}from"./Tabs-BKfmXuvi.js";import{C as Qe}from"./CircularProgress-BTXCWzN0.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./form-provider-IGnvse7Q.js";import"./TextField-BzhmS018.js";import"./FormControl-DZf5wqQ9.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Dec_12dS.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-ChyBHZVN.js";import"./Select-6IXk9lW0.js";import"./Menu-DD-zT_J0.js";import"./InputBase-C8xLxBIT.js";import"./FormHelperText-DFhB8bFU.js";import"./Rating-Hlni2mlB.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DG5O80Yq.js";import"./index-rYiI9UdX.js";import"./Slider-MS8qHiiX.js";import"./RadioGroup-D0Qu_fwA.js";import"./FormGroup-DxT7LmQ0.js";import"./FormControlLabel-0HOCsOrO.js";import"./utils-lkMXEcUg.js";import"./index-Yn_vEU-0.js";import"./countries-DSLisFCy.js";import"./InputAdornment-DEzDbK1Q.js";import"./Autocomplete-CdBrZWYz.js";import"./Chip-DP4Tp82d.js";import"./country-select-BuZykQim.js";import"./Checkbox-CQHPQqdR.js";import"./upload-avatar-DQ7Fanyq.js";import"./image-C-59YYlQ.js";import"./DatePicker-B1JNPBiT.js";import"./DialogContent-Bneue424.js";import"./ListItem-CVfDDPgr.js";import"./MobileDateTimePicker-DDuapApM.js";import"./upload-box-ad-BtwdQlbF.js";import"./DialogTitle-5kRkAohy.js";import"./LoadingButton-a60uG7nr.js";import"./schema-helper-DBRyPFKX.js";import"./utils-MBUcMVfY.js";import"./use-table-DPRJgMt8.js";import"./table-head-custom-CKQJMo0x.js";import"./TableCell-VebxIpQE.js";import"./table-pagination-custom-DhUmgRwP.js";import"./TablePagination-B0Hol92q.js";import"./KeyboardArrowRight-Bg2_dmW-.js";import"./LastPage-CTqN6DYn.js";import"./table-empty-rows-B-BeiqOV.js";function Pe({currentQuotation:c}){var I,O,$,E,R,A;const[e,w]=h.useState(c),{t}=re("quotations"),K=[{value:"details",icon:s.jsx(l,{icon:"solar:eye-bold",width:24}),label:`${t("detailView.detailsTab")}`},{value:"tickets",icon:s.jsx(l,{icon:"solar:case-minimalistic-bold",width:24}),label:`${t("detailView.ticketsTab")}`},{value:"reminders",icon:s.jsx(l,{icon:"solar:calendar-bold",width:24}),label:`${t("detailView.remindersTab")}`}],o=je("details");h.useEffect(()=>{w(c)},[c]);const C=F(),g=F(),U=s.jsxs(a,{alignItems:"flex-end",sx:{pr:3,pl:3,pb:3,textAlign:"right",typography:"body2"},children:[s.jsxs(a,{direction:"row",children:[s.jsx(i,{sx:{color:"text.secondary"},children:t("detailView.subtotal")}),s.jsx(i,{sx:{width:160,typography:"subtitle2"},children:P(e==null?void 0:e.totalAmount)||"-"})]}),s.jsxs(a,{direction:"row",children:[s.jsx(i,{sx:{color:"text.secondary"},children:t("detailView.discount")}),s.jsx(i,{sx:{width:160,...(e==null?void 0:e.discount)&&{color:"error.main"}},children:e!=null&&e.discount?`- ${e==null?void 0:e.discount}%`:"-"})]}),s.jsxs(a,{direction:"row",children:[s.jsxs(i,{sx:{color:"text.secondary"},children:[t("detailView.tax")," (",(e==null?void 0:e.snapshotTaxPercentage)||"0","%)"]}),s.jsx(i,{sx:{width:160},children:e!=null&&e.snapshotTaxPercentage?P(te((e==null?void 0:e.totalAmount)-(e==null?void 0:e.totalAmount)*((e==null?void 0:e.discount)/100),e==null?void 0:e.snapshotTaxPercentage)):"-"})]}),s.jsxs(a,{direction:"row",sx:{typography:"subtitle1"},children:[s.jsx("div",{children:t("detailView.total")}),s.jsx(i,{sx:{width:160},children:P(ie((e==null?void 0:e.totalAmount)-(e==null?void 0:e.totalAmount)*((e==null?void 0:e.discount)/100),e==null?void 0:e.snapshotTaxPercentage))||"-"})]})]}),_=s.jsxs(a,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:[s.jsxs(i,{sx:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",m:1},children:[s.jsxs(i,{flexDirection:"column",sx:{display:"flex"},children:[s.jsxs(i,{sx:{color:"text.secondary"},children:[t("detailView.quotationRef"),e==null?void 0:e.ref]}),s.jsxs(i,{sx:{color:"text.secondary"},children:[t("detailView.quotationDate"),N(e==null?void 0:e.quotationDate)]}),s.jsxs(i,{sx:{color:"text.secondary"},children:[t("detailView.quotationExpiry"),N(e==null?void 0:e.expiredDate)]})]}),s.jsx(i,{sx:{mr:2},children:s.jsxs(i,{sx:{color:"text.secondary"},children:[t("detailView.status"),s.jsxs(ae,{variant:"soft",color:(e==null?void 0:e.status)===n.Confirmed&&"info"||(e==null?void 0:e.status)===n.Converted&&"success"||(e==null?void 0:e.status)===n.Canceled&&"error"||"default",children:[(e==null?void 0:e.status)===n.Created&&`${t("listView.table.tableToolbar.selectMenu.created")}`,(e==null?void 0:e.status)===n.Confirmed&&`${t("listView.table.tableToolbar.selectMenu.confirmed")}`,(e==null?void 0:e.status)===n.Converted&&`${t("listView.table.tableToolbar.selectMenu.converted")}`,(e==null?void 0:e.status)===n.Canceled&&`${t("listView.table.tableToolbar.selectMenu.canceled")}`]})]})}),((I=e==null?void 0:e.order)==null?void 0:I.id)&&s.jsx(i,{sx:{color:"text.secondary"},className:"print-hide",children:s.jsxs(v,{variant:"contained",size:"small",startIcon:s.jsx(l,{icon:"heroicons-outline:external-link"}),onClick:()=>{const{id:r}=e==null?void 0:e.order;r&&S(r)},children:[t("detailView.relatedToOrder"),(O=e==null?void 0:e.order)==null?void 0:O.ref]})})]}),(e==null?void 0:e.notes)&&s.jsxs(i,{children:[s.jsx(B,{}),s.jsx(a,{sx:{typography:"body2"},children:s.jsx(i,{sx:{p:1},children:s.jsxs(a,{sx:{typography:"subtitle2"},children:[s.jsx("div",{children:t("detailView.notes")}),s.jsx(i,{sx:{color:"text.secondary"},children:e==null?void 0:e.notes})]})})})]})]}),G=s.jsxs(s.Fragment,{children:[s.jsx(i,{sx:{pr:3,pl:3,mb:3,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:s.jsx(Te,{products:e==null?void 0:e.productToQuotation,defaultRowsPerPage:10})}),U]}),H=s.jsx(a,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:s.jsx(i,{sx:{flex:1,mt:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:s.jsx(we,{tickets:e.tickets})})}),z=s.jsx(a,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:s.jsx(i,{sx:{flex:1,mt:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:s.jsx(Ce,{reminders:e==null?void 0:e.reminders})})}),b=le(),W=h.useCallback(r=>{b.push(u.dashboard.quotation.edit(r))},[b]),S=h.useCallback(r=>{b.push(u.dashboard.order.details(r))},[b]),y=ne(),{mutate:J}=Q({mutationFn:r=>j.post(f.quotation.createOrder,r),onSuccess:async({data:r})=>{V.success(t("detailView.messages.toastMessages.createOrderSuccess"));const{id:x}=e;await y.invalidateQueries({queryKey:["quotations"]}),await y.invalidateQueries({queryKey:["quotation",x]})},onError:r=>{console.log(r)}}),{mutate:Y}=Q({mutationFn:r=>j.post(f.quotation.share,r),onSuccess:async({data:r})=>{V.success(t("detailView.messages.toastMessages.sendToCustomerSuccess"))},onError:r=>{console.log(r)}}),{mutate:Z}=Q({mutationFn:r=>j.patch(f.quotation.editStatus+r,{status:n.Confirmed}),onSuccess:async({data:r})=>{V.success(t("detailView.messages.toastMessages.confirmQuotationSuccess"));const{id:x}=e;await y.invalidateQueries({queryKey:["quotations"]}),await y.invalidateQueries({queryKey:["quotation",x]})},onError:r=>{console.log(r)}}),[X,T]=h.useState(!1),q=()=>{T(!0)},{data:Se,isLoading:ee,error:Ie}=M({queryKey:["download-quotation",e.id],queryFn:async()=>{const r=await j.get(f.quotation.downloadPdf+e.id,{responseType:"blob"}),x=window.URL.createObjectURL(new Blob([r.data])),p=document.createElement("a");return p.href=x,p.setAttribute("download",`Quotation-${e.ref}.pdf`),document.body.appendChild(p),p.click(),document.body.removeChild(p),T(!1),r.data},enabled:X,onSuccess:()=>{T(!1)},onError:r=>{console.error("Download failed:",r)}}),se=s.jsx(d,{title:"Download Pdf",children:s.jsx(m,{onClick:q,children:ee?s.jsx(Qe,{size:24,color:"inherit"}):s.jsx(l,{icon:"eva:cloud-download-fill",color:"error.main"})})});return s.jsxs(oe,{children:[s.jsx(fe,{links:[{name:`${t("detailView.breadCrumbsPageRootTitle")}`,href:u.dashboard.root},{name:`${t("detailView.breadCrumbsParentPageTitle")}`,href:u.dashboard.quotation.root},{name:`${t("detailView.breadCrumbsPageTitle")}`}],sx:{mb:{xs:3,md:5}}}),s.jsx(L,{container:!0,spacing:3,children:s.jsx(L,{xs:12,md:12,children:s.jsx(de,{children:s.jsxs(a,{direction:{md:"column",p:3},className:"print-top-margin print-padding",children:[s.jsx(ve,{sx:{pt:1},title:e==null?void 0:e.name,subheader:`${t("detailView.quotationForCustomer")}${($=e==null?void 0:e.customer)==null?void 0:$.name}`,action:s.jsx(a,{className:"print-hide",spacing:3,direction:{xs:"column",sm:"row"},alignItems:{xs:"flex-end",sm:"center"},sx:{mb:{xs:3,md:5}},children:s.jsxs(a,{direction:"row",spacing:1,flexGrow:1,sx:{width:1},children:[s.jsx(D,{permission:k.EDIT_QUOTATION,children:(e==null?void 0:e.status)===n.Created&&s.jsx(d,{title:"Edit",children:s.jsx(m,{onClick:()=>{W(e==null?void 0:e.id)},children:s.jsx(l,{icon:"solar:pen-bold",color:"warning.main"})})})}),(e==null?void 0:e.status)===n.Created&&s.jsx(d,{title:"Confirm",children:s.jsx(m,{onClick:()=>{Z(e==null?void 0:e.id)},children:s.jsx(l,{icon:"line-md:confirm-circle-filled"})})}),s.jsx(D,{permission:k.CONVERT_QUOTATION_TO_ORDER,children:!((E=e==null?void 0:e.order)!=null&&E.id)&&((e==null?void 0:e.status)===n.Created||(e==null?void 0:e.status)===n.Confirmed)&&s.jsx(d,{title:"Convert to Order",children:s.jsx(m,{onClick:()=>{J({quotationId:e==null?void 0:e.id})},children:s.jsx(l,{icon:"solar:restart-circle-bold"})})})}),((R=e==null?void 0:e.order)==null?void 0:R.id)&&s.jsx(d,{title:`Related to Order: #${(A=e==null?void 0:e.order)==null?void 0:A.ref}`,children:s.jsx(m,{onClick:()=>{var r;S((r=e==null?void 0:e.order)==null?void 0:r.id)},children:s.jsx(l,{icon:"heroicons-outline:external-link"})})}),se,s.jsx(D,{permission:k.PRINT_QUOTATION,children:s.jsx(d,{title:"Print",children:s.jsx(ge,{quotation:e})})}),s.jsx(d,{title:"Send To the Customer",children:s.jsx(m,{onClick:()=>{Y({id:e.id})},children:s.jsx(l,{icon:"iconamoon:send-fill",color:"info.main"})})})]})})}),_,s.jsx(B,{sx:{mt:3}}),s.jsxs(ke,{value:o.value,className:"print-hide",onChange:o.onChange,sx:{px:3,mb:3,boxShadow:r=>`inset 0 -2px 0 0 ${ce(r.vars.palette.grey["500Channel"],.08)}`},children:[K.map(r=>s.jsx(Ve,{icon:r.icon,value:r.value,label:r.label},r.value)),o.value==="tickets"&&s.jsx(i,{marginLeft:"auto",sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(v,{onClick:()=>C.onToggle(),variant:"outlined",startIcon:s.jsx(l,{icon:"mingcute:add-line"}),children:t("detailView.newTicket")})}),o.value==="reminders"&&s.jsx(i,{marginLeft:"auto",sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(v,{onClick:()=>g.onToggle(),variant:"outlined",startIcon:s.jsx(l,{icon:"mingcute:add-line"}),children:t("detailView.newReminder")})})]}),o.value==="details"&&G,o.value==="tickets"&&H,o.value==="reminders"&&z]})})})}),s.jsx(be,{open:C.value,onClose:C.onFalse,quotation:e}),s.jsx(ye,{open:g.value,onClose:g.onFalse,quotation:e})]})}const De={title:`Quotation details | Dashboard - ${pe.site.name}`};function Ks(){const{id:c=""}=ue(),e=M({queryKey:["quotation",c],queryFn:async()=>{const{data:w}=await j.get(f.quotation.details+c);return w}});return e.isPending||e.isLoading?s.jsx(me,{}):e.isError?s.jsx(he,{route:u.dashboard.order.root}):s.jsxs(s.Fragment,{children:[s.jsx(xe,{children:s.jsxs("title",{children:[" ",De.title]})}),s.jsx(Pe,{currentQuotation:e.data})]})}export{Ks as default};
