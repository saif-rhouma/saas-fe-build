import{o as A,bO as W,j as e,L as _,S as T,A as B,B as R,aI as q,aJ as J,bm as V,cM as z,C as N,ds as U,w as H,I as b,dh as X,az as Y,dw as Z,bQ as ee,em as L,bR as C,e as G,r as u,en as te,l as ae,b as se,dz as re,eo as oe,dI as ne,p as f,e8 as le,G as y,R as ie,eb as w,aD as de,dy as ce,ep as me,dJ as M,dH as F,dK as he,ec as ue,H as pe}from"./index-yGbCRgTb.js";import{u as K,E as xe}from"./error-block-DTJA4qog.js";import{u as je}from"./useMutation-By1q-eS7.js";import{C as ge}from"./custom-breadcrumbs-BVoeLH7h.js";import{P as O}from"./permission-access-controller-Dm06QNPj.js";import{g as ye,r as be,T as Ce,a as fe,e as ve}from"./table-selected-action-ouhBymae.js";import{u as Se}from"./use-table-CKTXv-Z5.js";import{T as Pe}from"./table-no-data-CAqPvp_P.js";import{T as Q,a as we,b as De,c as Te}from"./table-head-custom-Dmu61VxH.js";import{T as Re}from"./table-pagination-custom-D_SwmGih.js";import{A as D}from"./app-widget-summary-DRcsYwcT.js";import{b as $}from"./format-number-CldpmeB4.js";import{C as Le}from"./confirm-dialog-Ko2N1QmH.js";import{T as g}from"./TableCell-kQtrcvwO.js";import{A as Oe}from"./AvatarGroup-DwZZS858.js";import{T as Ie}from"./TextField-HI4be0gE.js";import{I as ke}from"./InputAdornment-CcIxSkvC.js";import{S as Ee}from"./Select-q90WBvXR.js";import{F as Ae,a as I,c as k}from"./filters-result-IEq4pTDN.js";import{C as E}from"./Chip-Di1iaus5.js";import"./index-C1dYtF1X.js";import"./incrementer-button-DUj63JZv.js";import"./order-payment-details-dialog-DsD9GMmC.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-CLReM-9f.js";import"./empty-content-DuekPASb.js";import"./TablePagination--mxkDLnZ.js";import"./KeyboardArrowRight-gA8WWooR.js";import"./LastPage-Bpf9jdMv.js";import"./InputBase-DgymrakP.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-C9PyVvR2.js";import"./use-chart-Cxntz3C1.js";import"./chart-legends-BwbPgGqA.js";import"./index-R0SYIoas.js";import"./DialogContent-DMTZhSCC.js";import"./DialogTitle-Dtm0x3W5.js";import"./FormControl-BZpoYGsF.js";import"./InputLabel-DnqBfGRt.js";import"./FormLabel-CZqAmIUK.js";import"./FormHelperText-Dnev79N5.js";import"./Menu-BP741PyP.js";import"./form-provider-DYU4Aza6.js";import"./Rating-3onsWGCC.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DVBR6pSL.js";import"./index-CCt0SICN.js";import"./Slider-CzzVUG04.js";import"./RadioGroup-81h_beeC.js";import"./FormGroup-ClqLJ3mg.js";import"./countries-DSLisFCy.js";import"./Autocomplete-C25PC4l8.js";import"./country-select-CxHEhT0K.js";import"./upload-avatar-C2G_2g_c.js";import"./image-DcD9e3NU.js";import"./DatePicker-5fPzc3RP.js";import"./ListItem-CzWKnPSR.js";import"./MobileDateTimePicker-BclKweyT.js";import"./Tabs-CyyRymLB.js";import"./schema-helper-vooul8SF.js";import"./LoadingButton-DkWrtn4w.js";import"./CircularProgress-B5oTQZ22.js";function Me({row:t,index:o,selected:a,onViewRow:m,onSelectRow:h,onDeleteRow:c}){var j;const d=A(),l=A(),i=W(),r=e.jsxs(Q,{hover:!0,selected:a,children:[e.jsx(g,{children:e.jsx(_,{color:"inherit",onClick:m,underline:"always",sx:{cursor:"pointer"},children:(t==null?void 0:t.ref)||o||(t==null?void 0:t.id)})}),e.jsx(g,{children:e.jsxs(T,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(B,{alt:t.customer.name,src:t.customer.avatar}),e.jsxs(T,{sx:{typography:"body2",flex:"1 1 auto",alignItems:"flex-start"},children:[e.jsx(R,{component:"span",children:t.customer.name}),e.jsx(R,{component:"span",sx:{color:"text.disabled"},children:t.customer.email})]})]})}),e.jsx(g,{children:e.jsx(q,{primary:J(t.orderDate),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(g,{align:"center",children:e.jsx(Oe,{sx:{[`& .${V.avatar}`]:{width:24,height:24}},children:(j=t==null?void 0:t.productToOrder)==null?void 0:j.map(n=>{var p,v,S,P;return e.jsx(z,{title:`${(p=n==null?void 0:n.product)==null?void 0:p.name} | Quantity : ${n.quantity}`,children:e.jsx(B,{alt:(v=n==null?void 0:n.product)==null?void 0:v.name,src:`${N.site.serverFileHost}${(S=n==null?void 0:n.product)==null?void 0:S.image}`},n==null?void 0:n.id)},(P=n==null?void 0:n.product)==null?void 0:P.id)})})}),e.jsxs(g,{children:[" ",$(t.totalOrderAmount)," "]}),e.jsx(g,{children:e.jsx(U,{variant:"soft",color:t.status==="Ready"&&"info"||t.status==="InProcess"&&"warning"||t.status==="Delivered"&&"success"||t.status==="Canceled"&&"error"||"default",children:t.status})}),e.jsxs(g,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(H,{color:l.value?"inherit":"default",onClick:l.onToggle,sx:{...l.value&&{bgcolor:"action.hover"}},children:e.jsx(b,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(H,{color:i.open?"inherit":"default",onClick:i.onOpen,children:e.jsx(b,{icon:"eva:more-vertical-fill"})})]})]}),x=e.jsx(Q,{children:e.jsx(g,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(X,{in:l.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(Y,{sx:{m:1.5},children:t.productToOrder.map(n=>e.jsxs(T,{direction:"row",alignItems:"center",sx:{p:p=>p.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:p=>`solid 2px ${p.vars.palette.background.neutral}`}},children:[e.jsx(q,{primary:n.product.name,secondary:n.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs("div",{children:["x",n.quantity," "]}),e.jsx(R,{sx:{width:110,textAlign:"right"},children:$(n.product.price)})]},n.id))})})})});return e.jsxs(e.Fragment,{children:[r,x,e.jsx(Z,{open:i.open,anchorEl:i.anchorEl,onClose:i.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(ee,{children:[e.jsx(O,{permission:L.VIEW_ORDER,children:e.jsxs(C,{onClick:()=>{m(),i.onClose()},children:[e.jsx(b,{icon:"solar:eye-bold"}),"View"]})}),t.status!=="Canceled"&&e.jsx(O,{permission:L.DELETE_ORDER,children:e.jsxs(C,{onClick:()=>{d.onTrue(),i.onClose()},sx:{color:"warning.main"},children:[e.jsx(b,{icon:"solar:trash-bin-trash-bold"}),"Cancel"]})})]})}),e.jsx(Le,{open:d.value,onClose:d.onFalse,title:"Cancel Order",content:"Are you sure want to cancel this order?",action:e.jsx(G,{variant:"contained",color:"warning",onClick:()=>{c(),d.onFalse()},children:"Confirm Canceling"})})]})}function Fe({filters:t,onResetPage:o}){const[a,m]=u.useState("all"),h=u.useCallback(d=>{o(),t.setState({name:d.target.value})},[t,o]),c=u.useCallback(d=>{o(),t.setState({status:d.target.value}),m(d.target.value)},[t,o]);return e.jsxs(T,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(Ie,{sx:{width:420},value:t.state.name,onChange:h,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(ke,{position:"start",children:e.jsx(b,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsxs(Ee,{sx:{width:420,textTransform:"capitalize"},value:a,onChange:c,children:[e.jsx(C,{value:"all",children:"All Orders"}),e.jsx(C,{value:"InProcess",children:"Processing"}),e.jsx(C,{value:"Ready",children:"Ready To Deliver"}),e.jsx(C,{value:"Delivered",children:"Delivered"})]})]})}function Be({filters:t,totalResults:o,onResetPage:a,sx:m}){const h=u.useCallback(()=>{a(),t.setState({name:""})},[t,a]),c=u.useCallback(()=>{a(),t.setState({status:"all"})},[t,a]),d=u.useCallback(()=>{a(),t.setState({startDate:null,endDate:null})},[t,a]),l=u.useCallback(()=>{a(),t.onResetState()},[t,a]);return e.jsxs(Ae,{totalResults:o,onReset:l,sx:m,children:[e.jsx(I,{label:"Status:",isShow:t.state.status!=="all",children:e.jsx(E,{...k,label:t.state.status,onDelete:c,sx:{textTransform:"capitalize"}})}),e.jsx(I,{label:"Date:",isShow:!!(t.state.startDate&&t.state.endDate),children:e.jsx(E,{...k,label:te(t.state.startDate,t.state.endDate),onDelete:d})}),e.jsx(I,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(E,{...k,label:t.state.name,onDelete:h})})]})}const qe=[{id:"orderNumber",label:"#",width:88},{id:"name",label:"Customer"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Price",width:140},{id:"status",label:"Status",width:110},{id:"",width:88}];function He({orders:t,analytics:o}){const a=Se({defaultOrderBy:"orderId"}),m=ae(),h=se();A();const[c,d]=u.useState(()=>t),l=re({name:"",status:"all",startDate:null,endDate:null});u.useEffect(()=>{d(t)},[t]);const i=oe(l.state.startDate,l.state.endDate),r=Ke({inputData:c,comparator:ye(a.order,a.orderBy),filters:l.state,dateError:i}),x=be(r,a.page,a.rowsPerPage),j=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate,n=!r.length&&j||!r.length,p=ne(),{mutate:v}=je({mutationFn:s=>M.delete(F.order.delete+s),onSuccess:async()=>{he.success("Order Has Been Canceled!")},onSettled:async()=>{await p.invalidateQueries({queryKey:["orders"]}),await p.invalidateQueries({queryKey:["orders-status"]}),await p.invalidateQueries({queryKey:["orders","analytics"]})},onError:()=>{}}),S=u.useCallback(s=>{v(s)},[x.length,a,c]),P=u.useCallback(s=>{m.replace(f.dashboard.order.details(s))},[m]);return e.jsx(le,{maxWidth:"xl",children:e.jsxs(y,{container:!0,spacing:3,children:[e.jsx(y,{xs:12,md:12,children:e.jsx(ge,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Order",href:f.dashboard.order.root},{name:"List"}],action:e.jsx(O,{permission:L.ADD_ORDER,children:e.jsx(G,{component:ie,href:f.dashboard.order.new,variant:"contained",startIcon:e.jsx(b,{icon:"mingcute:add-line"}),children:"New Order"})})})}),e.jsxs(O,{permission:L.LIST_ORDER,children:[e.jsx(y,{xs:12,md:3,children:e.jsx(D,{title:"All Orders",total:t.length,chart:{categories:o.data.lastSixMonth.map(s=>w(s==null?void 0:s.inMonth)),series:o.data.lastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(y,{xs:12,md:3,children:e.jsx(D,{title:"Processing Order",total:o.data.analytics.InProcess,chart:{colors:[h.vars.palette.warning.light],categories:o.data.inProcessLastSixMonth.map(s=>w(s==null?void 0:s.inMonth)),series:o.data.inProcessLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(y,{xs:12,md:3,children:e.jsx(D,{title:"Ready To Deliver Order",total:o.data.analytics.Ready,chart:{colors:[h.vars.palette.info.main],categories:o.data.readyLastSixMonth.map(s=>w(s==null?void 0:s.inMonth)),series:o.data.readyLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(y,{xs:12,md:3,children:e.jsx(D,{title:"Delivered",total:o.data.analytics.Delivered,chart:{colors:[h.vars.palette.success.main],categories:o.data.deliveredLastSixMonth.map(s=>w(s==null?void 0:s.inMonth)),series:o.data.deliveredLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(y,{xs:12,md:12,children:e.jsxs(de,{children:[e.jsx(Fe,{filters:l,onResetPage:a.onResetPage,dateError:i}),j&&e.jsx(Be,{filters:l,totalResults:r.length,onResetPage:a.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(R,{sx:{position:"relative"},children:[e.jsx(Ce,{dense:a.dense,numSelected:a.selected.length,rowCount:r.length}),e.jsx(ce,{sx:{minHeight:444},children:e.jsxs(we,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(De,{order:a.order,orderBy:a.orderBy,headLabel:qe,rowCount:r.length}),e.jsxs(Te,{children:[r.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(s=>e.jsx(Me,{row:s,selected:a.selected.includes(s.id),onSelectRow:()=>a.onSelectRow(s.id),onDeleteRow:()=>S(s.id),onViewRow:()=>P(s.id)},s.id)),e.jsx(fe,{height:a.dense?56:76,emptyRows:ve(a.page,a.rowsPerPage,r.length)}),e.jsx(Pe,{notFound:n})]})]})})]}),e.jsx(Re,{page:a.page,dense:a.dense,count:r.length,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onChangeDense:a.onChangeDense,onRowsPerPageChange:a.onChangeRowsPerPage})]})})]})]})})}function Ke({inputData:t,comparator:o,filters:a,dateError:m}){const{status:h,name:c,startDate:d,endDate:l}=a,i=t==null?void 0:t.map((r,x)=>[r,x]);return i==null||i.sort((r,x)=>{const j=o(r[0],x[0]);return j!==0?j:r[1]-x[1]}),t=i==null?void 0:i.map(r=>r[0]),c&&(t=t.filter(r=>r.id.toString().toLowerCase().indexOf(c.toLowerCase())!==-1||r.customer.name.toLowerCase().indexOf(c.toLowerCase())!==-1||r.status.toLowerCase().indexOf(c.toLowerCase())!==-1||r.customer.email.toLowerCase().indexOf(c.toLowerCase())!==-1)),h!=="all"&&(t=t.filter(r=>r.status===h)),m||d&&l&&(t=t.filter(r=>me(r.createTime,d,l))),t}const Qe={title:`Order list | Dashboard - ${N.site.name}`};function Zt(){const t=K({queryKey:["orders"],queryFn:async()=>{const{data:a}=await M.get(F.order.list);return a}}),o=K({queryKey:["orders","analytics"],queryFn:async()=>{const{data:a}=await M.get(F.order.analytics);return a}});return o.isLoading||t.isLoading?e.jsx(ue,{}):t.isError||o.isError?e.jsx(xe,{route:f.dashboard.order.root}):e.jsxs(e.Fragment,{children:[e.jsx(pe,{children:e.jsxs("title",{children:[" ",Qe.title]})}),e.jsx(He,{orders:t.data,analytics:o})]})}export{Zt as default};