import{i as Y,e7 as oe,aP as Pe,j as e,L as Se,S as y,A as je,I as x,B as r,aT as be,d0 as ne,aL as ke,c9 as S,C as ye,e8 as ge,d7 as Ce,e9 as b,l as v,cQ as De,bR as Qe,db as Ie,aR as Re,e3 as D,aS as E,e as K,r as m,dp as $,dm as O,dn as Te,dq as z,ea as Ae,am as _,eb as Ee,g as ve,p as k,cY as we,v as q,dT as re,ec as $e,de as Oe,e2 as Le,dP as Ve,cV as ee,R as Fe,dd as Be,ed as Ne,H as He}from"./index-B_LxAfOw.js";import{u as ie,E as le}from"./error-block-D_MYnRmv.js";import{u as J}from"./useMutation-JcvTdMHO.js";import{C as Me}from"./custom-breadcrumbs-DL_hb143.js";import{P as Q}from"./permission-access-controller-C-mzjIpl.js";import{g as _e,r as Ke,e as Ue}from"./utils-MBUcMVfY.js";import{u as Ge}from"./use-table-CgWaK9GH.js";import{T as We}from"./table-no-data-BpBxpQNC.js";import{T as ze}from"./table-empty-rows-XUBxCVEs.js";import{T as fe,a as Je,b as Ye,c as Xe}from"./table-head-custom-D-1KlyPH.js";import{T as Ze}from"./table-selected-action-DmJZ48Ja.js";import{T as qe}from"./table-pagination-custom-x0Cfu797.js";import{b as U}from"./format-number-FqNcKw9g.js";import{C as es}from"./confirm-dialog-vMNhGnJU.js";import{T as P}from"./TableCell-Bkba25Fa.js";import{A as ss}from"./AvatarGroup-Y1PgcYMK.js";import{l as ts}from"./index-CJVSlQ0g.js";import{u as as}from"./use-tabs-DB0W1oou.js";import{P as ns,Q as rs,a as is}from"./print-quotation-details-template-Cx4Kd18x.js";import{Q as ls}from"./quotation-product-table-CFkBfv1X.js";import{T as os}from"./tickets-create-dialog-HfbfFFS8.js";import{R as ds}from"./reminder-create-dialog-oUX6nVft.js";import{T as cs,a as xs}from"./Tabs-BqnPQTFv.js";import{C as ms}from"./CardHeader-DdkDowiJ.js";import{C as hs}from"./CircularProgress-DboLAM6X.js";import{T as us}from"./TextField-g4Fthtsf.js";import{I as ps}from"./InputAdornment-BTvT09Ii.js";import{S as js}from"./Select-QKqu9e47.js";import{F as bs,a as se,c as te}from"./filters-result-DINIit0F.js";import{C as ae}from"./Chip-CVIOtR2A.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-C6zWf2hF.js";import"./Checkbox-z6GeiG8R.js";import"./TablePagination-DywvYP3v.js";import"./KeyboardArrowRight-BtOk_xlC.js";import"./LastPage-CoMLvjnL.js";import"./InputBase-_1vnMm32.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-4vlEM5hQ.js";import"./DialogContent-mATg592v.js";import"./DialogTitle-DhF4djKX.js";import"./form-provider-DRQxOV8Y.js";import"./FormHelperText-D_d3ajJ5.js";import"./Rating-CBUd4S94.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DKAvcO9Y.js";import"./Menu-CxORF-cC.js";import"./index-CdEFktw1.js";import"./Slider-D6JfGZrk.js";import"./FormControl-Cpf2cPA_.js";import"./FormLabel-5sjEvyne.js";import"./RadioGroup-CLEwTjo9.js";import"./FormGroup-nQK_9dhV.js";import"./utils-yjgNUJgj.js";import"./index-CbjmbUmg.js";import"./countries-DSLisFCy.js";import"./Autocomplete-IBvFH2OI.js";import"./country-select-BzVuOG2J.js";import"./InputLabel-DgCi-pAG.js";import"./upload-avatar-3WsjDam9.js";import"./image-CQyiiIog.js";import"./DatePicker-CY7qF4QG.js";import"./ListItem-BI9IFyG7.js";import"./MobileDateTimePicker-DrqE_RDh.js";import"./upload-box-ad-Cg5J-ZcS.js";import"./LoadingButton-ChZryCZV.js";import"./schema-helper-gkoXVo9V.js";function fs({row:t,index:n,selected:i,onViewRow:s,onClickRow:d,onEditRow:u,onDeleteRow:j,isFullDisplay:p}){var V,C,B;const g=Y(),{t:l}=oe("quotations"),h=Y(),f=Pe(),L=e.jsxs(fe,{hover:!0,selected:i,children:[e.jsx(P,{onClick:d,children:e.jsx(Se,{color:"inherit",onClick:s,underline:"always",sx:{cursor:"pointer"},children:(t==null?void 0:t.ref)||n||(t==null?void 0:t.id)})}),e.jsx(P,{onClick:d,children:e.jsxs(y,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(je,{sx:{bgcolor:"#00AB55"},alt:t.name,src:t.customer.avatar,children:e.jsx(x,{color:"white",icon:"fluent:person-20-filled",width:24})}),e.jsxs(y,{sx:{typography:"body2",flex:"1 1 auto",alignItems:"flex-start"},children:[e.jsx(r,{component:"span",children:t.name}),e.jsx(r,{component:"span",sx:{color:"text.disabled"},children:t.customer.name})]})]})}),e.jsx(P,{onClick:d,children:e.jsx(be,{primary:ne(t.quotationDate),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(P,{align:"center",onClick:d,children:e.jsx(ss,{sx:{[`& .${ke.avatar}`]:{width:24,height:24}},children:(V=t==null?void 0:t.productToQuotation)==null?void 0:V.map(o=>{var w,I,R,F;return e.jsx(S,{title:`${(w=o==null?void 0:o.product)==null?void 0:w.name} | Quantity : ${o.quantity}`,children:e.jsx(je,{alt:(I=o==null?void 0:o.product)==null?void 0:I.name,src:`${ye.site.serverFileHost}${(R=o==null?void 0:o.product)==null?void 0:R.image}`},o==null?void 0:o.id)},(F=o==null?void 0:o.product)==null?void 0:F.id)})})}),e.jsxs(P,{onClick:d,children:[U(ge((t==null?void 0:t.totalAmount)-(t==null?void 0:t.totalAmount)*((t==null?void 0:t.discount)/100),t==null?void 0:t.snapshotTaxPercentage))||"-"," "]}),!p&&e.jsxs(P,{onClick:d,children:[(C=t.createdBy)==null?void 0:C.firstName," ",(B=t.createdBy)==null?void 0:B.lastName]}),!p&&e.jsx(P,{onClick:d,children:e.jsxs(Ce,{variant:"soft",color:t.status===b.Confirmed&&"info"||t.status===b.Converted&&"success"||t.status===b.Canceled&&"error"||"default",children:[t.status===b.Created&&`${l("listView.table.tableToolbar.selectMenu.created")}`,t.status===b.Confirmed&&`${l("listView.table.tableToolbar.selectMenu.confirmed")}`,t.status===b.Converted&&`${l("listView.table.tableToolbar.selectMenu.converted")}`,t.status===b.Canceled&&`${l("listView.table.tableToolbar.selectMenu.canceled")}`]})}),!p&&e.jsxs(P,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(v,{color:h.value?"inherit":"default",onClick:h.onToggle,sx:{...h.value&&{bgcolor:"action.hover"}},children:e.jsx(x,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(v,{color:f.open?"inherit":"default",onClick:f.onOpen,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})]})]}),T=e.jsx(fe,{children:e.jsx(P,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(De,{in:h.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(Qe,{sx:{m:1.5},children:t.productToQuotation.map(o=>e.jsxs(y,{direction:"row",alignItems:"center",sx:{p:w=>w.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:w=>`solid 2px ${w.vars.palette.background.neutral}`}},children:[e.jsx(be,{primary:o.product.name,secondary:o.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs("div",{children:[o.quantity," "]}),e.jsx(r,{sx:{width:110,textAlign:"right"},children:U(o.snapshotProductPrice)})]},o.id))})})})});return e.jsxs(e.Fragment,{children:[L,T,e.jsx(Ie,{open:f.open,anchorEl:f.anchorEl,onClose:f.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(Re,{children:[e.jsx(Q,{permission:D.VIEW_QUOTATION,children:e.jsxs(E,{onClick:()=>{s(),f.onClose()},children:[e.jsx(x,{icon:"solar:eye-bold"}),`${l("listView.table.tableActions.view")}`]})}),(t==null?void 0:t.status)===b.Created&&e.jsx(Q,{permission:D.EDIT_QUOTATION,children:e.jsxs(E,{onClick:()=>{u(),f.onClose()},children:[e.jsx(x,{icon:"solar:pen-bold"}),`${l("listView.table.tableActions.edit")}`]})}),t.status!==b.Canceled&&e.jsx(Q,{permission:D.DELETE_QUOTATION,children:e.jsxs(E,{onClick:()=>{g.onTrue(),f.onClose()},sx:{color:"warning.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),`${l("listView.table.tableActions.cancel")}`]})})]})}),e.jsx(es,{open:g.value,onClose:g.onFalse,title:"Cancel Quotation",content:"Are you sure want to cancel this quotation?",action:e.jsx(K,{variant:"contained",color:"warning",onClick:()=>{j(),g.onFalse()},children:"Confirm Canceling"})})]})}const ys=[{value:"details",icon:e.jsx(x,{icon:"solar:eye-bold",width:24}),label:"Details"},{value:"tickets",icon:e.jsx(x,{icon:"solar:case-minimalistic-bold",width:24}),label:"Tickets"},{value:"reminders",icon:e.jsx(x,{icon:"solar:calendar-bold",width:24}),label:"Reminders"}],gs=({selectedQuotation:t,handleResize:n,handleClose:i})=>{var ce,xe,me,he,ue,pe;const[s,d]=m.useState(t),u=ie({queryKey:["quotation",s.id],queryFn:async()=>{const{data:a}=await $.get(O.quotation.details+s.id);return d(a),a}});m.useEffect(()=>{t.id!==s.id&&d(t)},[s.id,t]);const j=Te(),{mutate:p}=J({mutationFn:a=>$.post(O.quotation.createOrder,a),onSuccess:async({data:a})=>{z.success("Order Has Been Created!");const{id:H}=s;await j.invalidateQueries({queryKey:["quotations"]}),await j.invalidateQueries({queryKey:["quotation",H]})},onError:a=>{console.log(a)}}),{mutate:g}=J({mutationFn:a=>$.post(O.quotation.share,a),onSuccess:async({data:a})=>{z.success("Quotation has been sended to the customer.")},onError:a=>{console.log(a)}}),{mutate:l}=J({mutationFn:a=>$.patch(O.quotation.editStatus+a,{status:b.Confirmed}),onSuccess:async({data:a})=>{z.success("Quotation Has Been Confirmed!");const{id:H}=s;await j.invalidateQueries({queryKey:["quotations"]}),await j.invalidateQueries({queryKey:["quotation",H]})},onError:a=>{console.log(a)}}),h=as("details"),[f,L]=m.useState(!1),T=()=>{L(!0)},{data:V,isLoading:C,error:B}=ie({queryKey:["download-quotation",s.id],queryFn:async()=>{const a=await $.get(O.quotation.downloadPdf+s.id,{responseType:"blob"}),H=window.URL.createObjectURL(new Blob([a.data])),M=document.createElement("a");return M.href=H,M.setAttribute("download",`Quotation-${s.ref}.pdf`),document.body.appendChild(M),M.click(),document.body.removeChild(M),a.data},enabled:f,cacheTime:0,onSuccess:()=>{L(!1)}}),o=e.jsx(S,{title:"Download Pdf",children:e.jsx(v,{onClick:T,children:C?e.jsx(hs,{size:24,color:"inherit"}):e.jsx(x,{icon:"eva:cloud-download-fill"})})}),w=e.jsxs(y,{alignItems:"flex-end",sx:{p:1,textAlign:"right",typography:"body2"},children:[e.jsxs(y,{direction:"row",children:[e.jsx(r,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(r,{sx:{width:160,typography:"subtitle2"},children:U(s==null?void 0:s.totalAmount)||"-"})]}),e.jsxs(y,{direction:"row",children:[e.jsx(r,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(r,{sx:{width:160,...(s==null?void 0:s.discount)&&{color:"error.main"}},children:s!=null&&s.discount?`- ${s==null?void 0:s.discount}%`:"-"})]}),e.jsxs(y,{direction:"row",children:[e.jsxs(r,{sx:{color:"text.secondary"},children:["Tax (",(s==null?void 0:s.snapshotTaxPercentage)||"0","%)"]}),e.jsx(r,{sx:{width:160},children:s!=null&&s.snapshotTaxPercentage?U(Ae((s==null?void 0:s.totalAmount)-(s==null?void 0:s.totalAmount)*((s==null?void 0:s.discount)/100),s==null?void 0:s.snapshotTaxPercentage)):"-"})]}),e.jsxs(y,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx("div",{children:"Total"}),e.jsx(r,{sx:{width:160},children:U(ge((s==null?void 0:s.totalAmount)-(s==null?void 0:s.totalAmount)*((s==null?void 0:s.discount)/100),s==null?void 0:s.snapshotTaxPercentage))||"-"})]})]}),I=Y(),R=Y(),F=e.jsxs(y,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:[e.jsxs(r,{sx:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",m:1},children:[e.jsxs(r,{flexDirection:"column",sx:{display:"flex"},children:[e.jsxs(r,{sx:{color:"text.secondary"},children:["Quotation Ref: #",s==null?void 0:s.ref]}),e.jsxs(r,{sx:{color:"text.secondary"},children:["Quotation Date: ",ne(s==null?void 0:s.quotationDate)]}),e.jsxs(r,{sx:{color:"text.secondary"},children:["Quotation Expiry: ",ne(s==null?void 0:s.expiredDate)]})]}),e.jsx(r,{sx:{mr:2},children:e.jsxs(r,{sx:{color:"text.secondary"},children:["Status:",e.jsx(Ce,{variant:"soft",color:(s==null?void 0:s.status)===b.Confirmed&&"info"||(s==null?void 0:s.status)===b.Converted&&"success"||(s==null?void 0:s.status)===b.Canceled&&"error"||"default",children:s==null?void 0:s.status})]})}),((ce=s==null?void 0:s.order)==null?void 0:ce.id)&&e.jsx(r,{sx:{color:"text.secondary"},className:"print-hide",children:e.jsxs(K,{variant:"contained",size:"small",startIcon:e.jsx(x,{icon:"heroicons-outline:external-link"}),onClick:()=>{const{id:a}=s==null?void 0:s.order;a&&W(a)},children:["Related to Order: #",(xe=s==null?void 0:s.order)==null?void 0:xe.ref]})})]}),e.jsxs(r,{sx:{flex:1,mt:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e.jsx(ls,{products:s==null?void 0:s.productToQuotation,defaultRowsPerPage:s!=null&&s.notes?5:10}),e.jsx(_,{sx:{mt:1}})]}),w,(s==null?void 0:s.notes)&&e.jsxs(r,{children:[e.jsx(_,{}),e.jsx(y,{sx:{typography:"body2"},children:e.jsx(r,{sx:{p:1},children:e.jsxs(y,{sx:{typography:"subtitle2"},children:[e.jsx("div",{children:"Notes:"}),e.jsx(r,{sx:{color:"text.secondary"},children:s==null?void 0:s.notes})]})})})]})]}),X=a=>a.isPending||a.isLoading?e.jsx(re,{}):a.isError?e.jsx(le,{}):e.jsxs(y,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:[e.jsx(r,{sx:{display:"flex",width:"100%",alignItems:"center",m:2},children:e.jsx(r,{children:e.jsx(Q,{permission:D.ADD_TICKET,children:e.jsx(K,{onClick:()=>I.onToggle(),variant:"contained",startIcon:e.jsx(x,{icon:"mingcute:add-line"}),children:"New Ticket"})})})}),e.jsx(_,{}),e.jsx(r,{sx:{flex:1,mt:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:e.jsx(rs,{tickets:u.data.tickets})})]}),Z=a=>a.isPending||a.isLoading?e.jsx(re,{}):a.isError?e.jsx(le,{}):e.jsxs(y,{sx:{display:"flex",flex:1,pb:3,pr:3,pl:3,typography:"body2"},children:[e.jsx(r,{sx:{display:"flex",width:"100%",alignItems:"center",m:2},children:e.jsx(r,{children:e.jsx(Q,{permission:D.ADD_REMINDER,children:e.jsx(K,{onClick:()=>R.onToggle(),variant:"contained",startIcon:e.jsx(x,{icon:"mingcute:add-line"}),children:"New Reminder"})})})}),e.jsx(_,{}),e.jsx(r,{sx:{flex:1,mt:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:e.jsx(is,{reminders:u.data.reminders})})]}),G=Ee(),A=ve(),W=m.useCallback(a=>{A.push(k.dashboard.order.details(a))},[A]),c=m.useCallback(a=>{A.push(k.dashboard.quotation.details(a))},[A]),N=m.useCallback(a=>{A.push(k.dashboard.quotation.edit(a))},[A]),de=m.useRef();return ts.useReactToPrint({content:()=>de.current}),e.jsxs(e.Fragment,{children:[e.jsxs(we,{ref:de,sx:{height:1,display:"flex",flexDirection:"column",width:1,transition:"all 2s ease-in-out"},children:[e.jsx("style",{jsx:!0,children:`
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
        `}),e.jsxs(cs,{className:"print-hide ",value:h.value,onChange:h.onChange,sx:{px:3,boxShadow:a=>`inset 0 -2px 0 0 ${q(a.vars.palette.grey["500Channel"],.08)}`},children:[ys.map(a=>e.jsx(xs,{icon:a.icon,value:a.value,label:a.label},a.value)),e.jsx(r,{sx:{display:"flex",justifyContent:"center",alignItems:"center",borderLeft:`solid 1px ${q(G.vars.palette.grey["500Channel"],.16)}`},children:e.jsx(v,{sx:{ml:1},onClick:n,children:e.jsx(x,{icon:"solar:full-screen-bold",width:24})})}),e.jsx(r,{marginLeft:"auto",sx:{display:"flex",justifyContent:"center",alignItems:"center",borderLeft:`solid 1px ${q(G.vars.palette.grey["500Channel"],.16)}`},children:e.jsx(v,{sx:{ml:1},onClick:i,children:e.jsx(x,{icon:"solar:close-square-outline",width:24})})})]}),e.jsxs(r,{className:"print-top-margin print-padding",sx:{display:"flex",flexDirection:"column",position:"relative",flex:1},children:[e.jsx(ms,{sx:{pt:1},title:s==null?void 0:s.name,subheader:`Quotation for Customer : ${(me=s==null?void 0:s.customer)==null?void 0:me.name}`,action:e.jsx(y,{spacing:3,className:"print-hide",direction:{xs:"column",sm:"row"},alignItems:{xs:"flex-end",sm:"center"},sx:{mb:{xs:3,md:5}},children:e.jsxs(y,{direction:"row",spacing:1,flexGrow:1,sx:{width:1},children:[e.jsx(S,{title:"View",children:e.jsx(v,{onClick:()=>{c(s==null?void 0:s.id)},children:e.jsx(x,{icon:"solar:eye-bold"})})}),(s==null?void 0:s.status)===b.Created&&e.jsx(S,{title:"Edit",children:e.jsx(v,{onClick:()=>{N(s==null?void 0:s.id)},children:e.jsx(x,{icon:"solar:pen-bold"})})}),(s==null?void 0:s.status)===b.Created&&e.jsx(S,{title:"Confirm",children:e.jsx(v,{onClick:()=>{l(s==null?void 0:s.id)},children:e.jsx(x,{icon:"line-md:confirm-circle-filled"})})}),e.jsx(Q,{permission:D.CONVERT_QUOTATION_TO_ORDER,children:!((he=s==null?void 0:s.order)!=null&&he.id)&&((s==null?void 0:s.status)===b.Created||(s==null?void 0:s.status)===b.Confirmed)&&e.jsx(S,{title:"Convert to Order",children:e.jsx(v,{onClick:()=>{p({quotationId:s==null?void 0:s.id})},children:e.jsx(x,{icon:"solar:restart-circle-bold"})})})}),((ue=s==null?void 0:s.order)==null?void 0:ue.id)&&e.jsx(S,{title:`Related to Order: #${(pe=s==null?void 0:s.order)==null?void 0:pe.ref}`,children:e.jsx(v,{onClick:()=>{var a;W((a=s==null?void 0:s.order)==null?void 0:a.id)},children:e.jsx(x,{icon:"heroicons-outline:external-link"})})}),o,e.jsx(Q,{permission:D.PRINT_QUOTATION,children:e.jsx(S,{title:"Print",children:e.jsx(ns,{quotation:s})})}),e.jsx(S,{title:"Send To the Customer",children:e.jsx(v,{onClick:()=>{g({id:s.id})},children:e.jsx(x,{icon:"iconamoon:send-fill"})})})]})})}),e.jsx(_,{}),h.value==="details"&&F,h.value==="tickets"&&X(u),h.value==="reminders"&&Z(u)]})]}),e.jsx(os,{open:I.value,onClose:I.onFalse,quotation:s}),e.jsx(ds,{open:R.value,onClose:R.onFalse,quotation:s})]})};function Cs({filters:t,onResetPage:n}){const[i,s]=m.useState("all"),{t:d}=oe("quotations"),u=m.useCallback(p=>{n(),t.setState({name:p.target.value})},[t,n]),j=m.useCallback(p=>{n(),t.setState({status:p.target.value}),s(p.target.value)},[t,n]);return e.jsxs(y,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(us,{sx:{width:420},value:t.state.name,onChange:u,placeholder:`${d("listView.table.tableToolbar.searchPlaceholder")}`,InputProps:{startAdornment:e.jsx(ps,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsxs(js,{sx:{width:420,textTransform:"capitalize"},value:i,onChange:j,children:[e.jsx(E,{value:"all",children:`${d("listView.table.tableToolbar.selectMenu.allQuotations")}`}),e.jsx(E,{value:"Created",children:`${d("listView.table.tableToolbar.selectMenu.created")}`}),e.jsx(E,{value:"Confirmed",children:`${d("listView.table.tableToolbar.selectMenu.confirmed")}`}),e.jsx(E,{value:"Canceled",children:`${d("listView.table.tableToolbar.selectMenu.canceled")}`}),e.jsx(E,{value:"Converted",children:`${d("listView.table.tableToolbar.selectMenu.converted")}`})]})]})}function Ts({filters:t,totalResults:n,onResetPage:i,sx:s}){const d=m.useCallback(()=>{i(),t.setState({name:""})},[t,i]),u=m.useCallback(()=>{i(),t.setState({status:"all"})},[t,i]),j=m.useCallback(()=>{i(),t.setState({startDate:null,endDate:null})},[t,i]),p=m.useCallback(()=>{i(),t.onResetState()},[t,i]);return e.jsxs(bs,{totalResults:n,onReset:p,sx:s,children:[e.jsx(se,{label:"Status:",isShow:t.state.status!=="all",children:e.jsx(ae,{...te,label:t.state.status,onDelete:u,sx:{textTransform:"capitalize"}})}),e.jsx(se,{label:"Date:",isShow:!!(t.state.startDate&&t.state.endDate),children:e.jsx(ae,{...te,label:$e(t.state.startDate,t.state.endDate),onDelete:j})}),e.jsx(se,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(ae,{...te,label:t.state.name,onDelete:d})})]})}function vs({quotations:t}){const n=Ge({defaultOrderBy:"orderId",defaultRowsPerPage:5}),{t:i}=oe("quotations"),[s,d]=m.useState(),[u,j]=m.useState(!1),p=[{id:"ref",label:"#",width:88},{id:"details",label:`${i("listView.table.tableHeader.details")}`},{id:"createdAt",label:`${i("listView.table.tableHeader.date")}`,width:140},{id:"totalQuantity",label:`${i("listView.table.tableHeader.items")}`,width:120,align:"center"},{id:"totalAmount",label:`${i("listView.table.tableHeader.price")}`,width:140},{id:"createdBy",label:`${i("listView.table.tableHeader.createdBy")}`,width:200},{id:"status",label:`${i("listView.table.tableHeader.status")}`,width:110},{id:"",width:88}],[g,l]=m.useState(p),h=ve(),[f,L]=m.useState(()=>t),T=Oe({name:"",status:"all",startDate:null,endDate:null});m.useEffect(()=>{if(j(!1),L(t),s){const c=t.find(N=>N.id===s.id);d(c)}},[t]),m.useEffect(()=>{const c=s?p.filter(N=>!["createdBy","status",""].includes(N.id)):p;l(c)},[s]);const V=Le(T.state.startDate,T.state.endDate),C=ws({inputData:f,comparator:_e(n.order,n.orderBy),filters:T.state,dateError:V}),B=Ke(C,n.page,n.rowsPerPage),o=!!T.state.name||T.state.status!=="all"||!!T.state.startDate&&!!T.state.endDate,w=!C.length&&o||!C.length,I=Te(),{mutate:R}=J({mutationFn:c=>$.delete(O.quotation.delete+c),onSuccess:async()=>{z.success("Order Has Been Canceled!")},onSettled:async()=>{await I.invalidateQueries({queryKey:["quotations"]})},onError:()=>{}}),F=m.useCallback(c=>{R(c)},[B.length,n,f]),X=m.useCallback(c=>{h.replace(k.dashboard.quotation.details(c))},[h]),Z=m.useCallback(c=>{h.replace(k.dashboard.quotation.edit(c))},[h]),G=()=>{j(!u)},A=()=>{d(null),j(!1)},W=c=>{d(c)};return e.jsx(Ve,{maxWidth:"xl",children:e.jsxs(ee,{container:!0,spacing:3,children:[e.jsx(ee,{xs:12,md:12,children:e.jsx(Me,{links:[{name:`${i("listView.breadCrumbsPageRootTitle")}`,href:k.dashboard.root},{name:`${i("listView.breadCrumbsParentPageTitle")}`,href:k.dashboard.quotation.root},{name:`${i("listView.breadCrumbsPageTitle")}`}],action:e.jsx(Q,{permission:D.ADD_QUOTATION,children:e.jsx(K,{component:Fe,href:k.dashboard.quotation.new,variant:"contained",startIcon:e.jsx(x,{icon:"mingcute:add-line"}),children:`${i("listView.addNewQuotation")}`})})})}),e.jsxs(Q,{permission:D.LIST_QUOTATION,children:[!u&&e.jsx(ee,{xs:12,md:s?5:12,children:e.jsxs(we,{children:[e.jsx(Cs,{filters:T,onResetPage:n.onResetPage,dateError:V}),o&&e.jsx(Ts,{filters:T,totalResults:C.length,onResetPage:n.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(r,{sx:{position:"relative"},children:[e.jsx(Ze,{dense:n.dense,numSelected:n.selected.length,rowCount:C.length}),e.jsx(Be,{sx:{minHeight:444},children:e.jsxs(Je,{size:n.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Ye,{order:n.order,orderBy:n.orderBy,headLabel:g,rowCount:C.length}),e.jsxs(Xe,{children:[C.slice(n.page*n.rowsPerPage,n.page*n.rowsPerPage+n.rowsPerPage).map(c=>e.jsx(fs,{row:c,selected:n.selected.includes(c.id),onSelectRow:()=>n.onSelectRow(c.id),onDeleteRow:()=>F(c.id),onViewRow:()=>X(c.id),onEditRow:()=>Z(c.id),onClickRow:()=>W(c),isFullDisplay:s},c.id)),e.jsx(ze,{height:n.dense?56:76,emptyRows:Ue(n.page,n.rowsPerPage,C.length)}),e.jsx(We,{notFound:w})]})]})})]}),e.jsx(qe,{page:n.page,dense:n.dense,count:C.length,rowsPerPage:n.rowsPerPage,onPageChange:n.onChangePage,onChangeDense:n.onChangeDense,onRowsPerPageChange:n.onChangeRowsPerPage})]})}),s&&e.jsx(r,{sx:{display:"flex",flex:1,p:1.5,transition:"all 2s ease-in-out"},children:e.jsx(gs,{selectedQuotation:s,handleResize:G,handleClose:A})})]})]})})}function ws({inputData:t,comparator:n,filters:i,dateError:s}){const{status:d,name:u,startDate:j,endDate:p}=i,g=t==null?void 0:t.map((l,h)=>[l,h]);return g==null||g.sort((l,h)=>{const f=n(l[0],h[0]);return f!==0?f:l[1]-h[1]}),t=g==null?void 0:g.map(l=>l[0]),u&&(t=t.filter(l=>l.id.toString().toLowerCase().indexOf(u.toLowerCase())!==-1||l.customer.name.toLowerCase().indexOf(u.toLowerCase())!==-1||l.status.toLowerCase().indexOf(u.toLowerCase())!==-1||l.customer.email.toLowerCase().indexOf(u.toLowerCase())!==-1)),d!=="all"&&(t=t.filter(l=>l.status===d)),s||j&&p&&(t=t.filter(l=>Ne(l.createTime,j,p))),t}const Ps={title:`Quotation list | Dashboard - ${ye.site.name}`};function Mt(){const t=ie({queryKey:["quotations"],queryFn:async()=>{const{data:n}=await $.get(O.quotation.list);return n}});return t.isLoading?e.jsx(re,{}):t.isError?e.jsx(le,{route:k.dashboard.quotation.root}):e.jsxs(e.Fragment,{children:[e.jsx(He,{children:e.jsxs("title",{children:[" ",Ps.title]})}),e.jsx(vs,{quotations:t.data})]})}export{Mt as default};
