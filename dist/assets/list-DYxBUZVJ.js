import{o as A,bO as W,j as e,L as _,S as D,A as B,B as R,aI as q,aJ as J,bm as V,cM as z,C as N,ds as U,w as H,I as b,dh as X,az as Y,dw as Z,bQ as ee,em as L,bR as C,e as G,r as u,en as te,l as se,b as ae,dz as re,eo as oe,dI as ne,p as f,e8 as le,G as y,R as ie,eb as w,aD as de,dy as ce,ep as me,dJ as M,dH as F,dK as he,ec as ue,H as pe}from"./index-qTpQGZSM.js";import{u as K,E as xe}from"./error-block-LdKLJmXG.js";import{u as je}from"./useMutation-DwwxkYn0.js";import{C as ge}from"./custom-breadcrumbs-BGUga5Db.js";import{P as O}from"./permission-access-controller-UwjT1wkM.js";import{g as ye,r as be,T as Ce,e as fe}from"./table-empty-rows-BjNRKAw-.js";import{u as ve}from"./use-table-BsmW9kBY.js";import{T as Se}from"./table-no-data-CfTNoIH2.js";import{T as Q,a as Pe,b as we,c as Te}from"./table-head-custom-C1TpOHrp.js";import{T as De}from"./table-selected-action-Bi30jodZ.js";import{T as Re}from"./table-pagination-custom-CT6oTmvL.js";import{A as T}from"./app-widget-summary-CUqYqxJi.js";import{b as $}from"./format-number-BnI2ZW2X.js";import{C as Le}from"./confirm-dialog-Bm3fCjvw.js";import{T as g}from"./TableCell-C7feBr2O.js";import{A as Oe}from"./AvatarGroup-JBYz1qT8.js";import{T as Ie}from"./TextField-DlbgkIdM.js";import{I as ke}from"./InputAdornment-AOuf2E7W.js";import{S as Ee}from"./Select-CPhaOcE2.js";import{F as Ae,a as I,c as k}from"./filters-result-YqZWotG6.js";import{C as E}from"./Chip-BkTmiN33.js";import"./index-0NtJkkke.js";import"./incrementer-button-B-z42Mld.js";import"./order-payment-details-dialog-TmjpRtAT.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-DkGXVbKZ.js";import"./Checkbox-BIMD_Kz2.js";import"./TablePagination-C-6SVL6T.js";import"./KeyboardArrowRight-BXMkEFXs.js";import"./LastPage-Bn5LqkbT.js";import"./InputBase-iWMV7tHw.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-CpHiSJVr.js";import"./use-chart-DfKaOrbl.js";import"./chart-legends-CIZL5WJn.js";import"./index-DQ3rvJDb.js";import"./DialogContent-BiWMH9ix.js";import"./DialogTitle-D7golWjh.js";import"./FormControl-BpZ03tA-.js";import"./InputLabel-DcOK32WR.js";import"./FormLabel-DnNlyvb5.js";import"./FormHelperText-B0yAPKEP.js";import"./Menu-rdkUPF4f.js";import"./form-provider-MVJiOuzj.js";import"./Rating-DGo1iH4F.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-Cm_HovbX.js";import"./index-C9BegESN.js";import"./Slider-CN2Pz1pQ.js";import"./RadioGroup-Ct6wIvy3.js";import"./FormGroup-XxqkAOpe.js";import"./countries-DSLisFCy.js";import"./Autocomplete-D_Vw0UML.js";import"./country-select-DSb3nCU9.js";import"./upload-avatar-Ck4q_zWp.js";import"./image-FClgpgDx.js";import"./DatePicker-1dQyUDWB.js";import"./ListItem-BzSUAL2X.js";import"./MobileDateTimePicker-46hsTEu5.js";import"./Tabs-BvOs9ozx.js";import"./schema-helper-DZ7xosjo.js";import"./LoadingButton-ipNV_Zqw.js";import"./CircularProgress-Buj6nA2J.js";function Me({row:t,index:o,selected:s,onViewRow:m,onSelectRow:h,onDeleteRow:c}){var j;const d=A(),l=A(),i=W(),r=e.jsxs(Q,{hover:!0,selected:s,children:[e.jsx(g,{children:e.jsx(_,{color:"inherit",onClick:m,underline:"always",sx:{cursor:"pointer"},children:(t==null?void 0:t.ref)||o||(t==null?void 0:t.id)})}),e.jsx(g,{children:e.jsxs(D,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(B,{alt:t.customer.name,src:t.customer.avatar}),e.jsxs(D,{sx:{typography:"body2",flex:"1 1 auto",alignItems:"flex-start"},children:[e.jsx(R,{component:"span",children:t.customer.name}),e.jsx(R,{component:"span",sx:{color:"text.disabled"},children:t.customer.email})]})]})}),e.jsx(g,{children:e.jsx(q,{primary:J(t.orderDate),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(g,{align:"center",children:e.jsx(Oe,{sx:{[`& .${V.avatar}`]:{width:24,height:24}},children:(j=t==null?void 0:t.productToOrder)==null?void 0:j.map(n=>{var p,v,S,P;return e.jsx(z,{title:`${(p=n==null?void 0:n.product)==null?void 0:p.name} | Quantity : ${n.quantity}`,children:e.jsx(B,{alt:(v=n==null?void 0:n.product)==null?void 0:v.name,src:`${N.site.serverFileHost}${(S=n==null?void 0:n.product)==null?void 0:S.image}`},n==null?void 0:n.id)},(P=n==null?void 0:n.product)==null?void 0:P.id)})})}),e.jsxs(g,{children:[" ",$(t.totalOrderAmount)," "]}),e.jsx(g,{children:e.jsx(U,{variant:"soft",color:t.status==="Ready"&&"info"||t.status==="InProcess"&&"warning"||t.status==="Delivered"&&"success"||t.status==="Canceled"&&"error"||"default",children:t.status})}),e.jsxs(g,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(H,{color:l.value?"inherit":"default",onClick:l.onToggle,sx:{...l.value&&{bgcolor:"action.hover"}},children:e.jsx(b,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(H,{color:i.open?"inherit":"default",onClick:i.onOpen,children:e.jsx(b,{icon:"eva:more-vertical-fill"})})]})]}),x=e.jsx(Q,{children:e.jsx(g,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(X,{in:l.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(Y,{sx:{m:1.5},children:t.productToOrder.map(n=>e.jsxs(D,{direction:"row",alignItems:"center",sx:{p:p=>p.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:p=>`solid 2px ${p.vars.palette.background.neutral}`}},children:[e.jsx(q,{primary:n.product.name,secondary:n.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs("div",{children:["x",n.quantity," "]}),e.jsx(R,{sx:{width:110,textAlign:"right"},children:$(n.product.price)})]},n.id))})})})});return e.jsxs(e.Fragment,{children:[r,x,e.jsx(Z,{open:i.open,anchorEl:i.anchorEl,onClose:i.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(ee,{children:[e.jsx(O,{permission:L.VIEW_ORDER,children:e.jsxs(C,{onClick:()=>{m(),i.onClose()},children:[e.jsx(b,{icon:"solar:eye-bold"}),"View"]})}),t.status!=="Canceled"&&e.jsx(O,{permission:L.DELETE_ORDER,children:e.jsxs(C,{onClick:()=>{d.onTrue(),i.onClose()},sx:{color:"warning.main"},children:[e.jsx(b,{icon:"solar:trash-bin-trash-bold"}),"Cancel"]})})]})}),e.jsx(Le,{open:d.value,onClose:d.onFalse,title:"Cancel Order",content:"Are you sure want to cancel this order?",action:e.jsx(G,{variant:"contained",color:"warning",onClick:()=>{c(),d.onFalse()},children:"Confirm Canceling"})})]})}function Fe({filters:t,onResetPage:o}){const[s,m]=u.useState("all"),h=u.useCallback(d=>{o(),t.setState({name:d.target.value})},[t,o]),c=u.useCallback(d=>{o(),t.setState({status:d.target.value}),m(d.target.value)},[t,o]);return e.jsxs(D,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(Ie,{sx:{width:420},value:t.state.name,onChange:h,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(ke,{position:"start",children:e.jsx(b,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsxs(Ee,{sx:{width:420,textTransform:"capitalize"},value:s,onChange:c,children:[e.jsx(C,{value:"all",children:"All Orders"}),e.jsx(C,{value:"InProcess",children:"Processing"}),e.jsx(C,{value:"Ready",children:"Ready To Deliver"}),e.jsx(C,{value:"Delivered",children:"Delivered"})]})]})}function Be({filters:t,totalResults:o,onResetPage:s,sx:m}){const h=u.useCallback(()=>{s(),t.setState({name:""})},[t,s]),c=u.useCallback(()=>{s(),t.setState({status:"all"})},[t,s]),d=u.useCallback(()=>{s(),t.setState({startDate:null,endDate:null})},[t,s]),l=u.useCallback(()=>{s(),t.onResetState()},[t,s]);return e.jsxs(Ae,{totalResults:o,onReset:l,sx:m,children:[e.jsx(I,{label:"Status:",isShow:t.state.status!=="all",children:e.jsx(E,{...k,label:t.state.status,onDelete:c,sx:{textTransform:"capitalize"}})}),e.jsx(I,{label:"Date:",isShow:!!(t.state.startDate&&t.state.endDate),children:e.jsx(E,{...k,label:te(t.state.startDate,t.state.endDate),onDelete:d})}),e.jsx(I,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(E,{...k,label:t.state.name,onDelete:h})})]})}const qe=[{id:"orderNumber",label:"#",width:88},{id:"name",label:"Customer"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Price",width:140},{id:"status",label:"Status",width:110},{id:"",width:88}];function He({orders:t,analytics:o}){const s=ve({defaultOrderBy:"orderId"}),m=se(),h=ae();A();const[c,d]=u.useState(()=>t),l=re({name:"",status:"all",startDate:null,endDate:null});u.useEffect(()=>{d(t)},[t]);const i=oe(l.state.startDate,l.state.endDate),r=Ke({inputData:c,comparator:ye(s.order,s.orderBy),filters:l.state,dateError:i}),x=be(r,s.page,s.rowsPerPage),j=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate,n=!r.length&&j||!r.length,p=ne(),{mutate:v}=je({mutationFn:a=>M.delete(F.order.delete+a),onSuccess:async()=>{he.success("Order Has Been Canceled!")},onSettled:async()=>{await p.invalidateQueries({queryKey:["orders"]}),await p.invalidateQueries({queryKey:["orders-status"]}),await p.invalidateQueries({queryKey:["orders","analytics"]})},onError:()=>{}}),S=u.useCallback(a=>{v(a)},[x.length,s,c]),P=u.useCallback(a=>{m.replace(f.dashboard.order.details(a))},[m]);return e.jsx(le,{maxWidth:"xl",children:e.jsxs(y,{container:!0,spacing:3,children:[e.jsx(y,{xs:12,md:12,children:e.jsx(ge,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Order",href:f.dashboard.order.root},{name:"List"}],action:e.jsx(O,{permission:L.ADD_ORDER,children:e.jsx(G,{component:ie,href:f.dashboard.order.new,variant:"contained",startIcon:e.jsx(b,{icon:"mingcute:add-line"}),children:"New Order"})})})}),e.jsxs(O,{permission:L.LIST_ORDER,children:[e.jsx(y,{xs:12,md:3,children:e.jsx(T,{title:"All Orders",total:t.length,chart:{categories:o.data.lastSixMonth.map(a=>w(a==null?void 0:a.inMonth)),series:o.data.lastSixMonth.map(a=>a==null?void 0:a.ClaimsPerMonth)}})}),e.jsx(y,{xs:12,md:3,children:e.jsx(T,{title:"Processing Order",total:o.data.analytics.InProcess,chart:{colors:[h.vars.palette.warning.light],categories:o.data.inProcessLastSixMonth.map(a=>w(a==null?void 0:a.inMonth)),series:o.data.inProcessLastSixMonth.map(a=>a==null?void 0:a.ClaimsPerMonth)}})}),e.jsx(y,{xs:12,md:3,children:e.jsx(T,{title:"Ready To Deliver Order",total:o.data.analytics.Ready,chart:{colors:[h.vars.palette.info.main],categories:o.data.readyLastSixMonth.map(a=>w(a==null?void 0:a.inMonth)),series:o.data.readyLastSixMonth.map(a=>a==null?void 0:a.ClaimsPerMonth)}})}),e.jsx(y,{xs:12,md:3,children:e.jsx(T,{title:"Delivered",total:o.data.analytics.Delivered,chart:{colors:[h.vars.palette.success.main],categories:o.data.deliveredLastSixMonth.map(a=>w(a==null?void 0:a.inMonth)),series:o.data.deliveredLastSixMonth.map(a=>a==null?void 0:a.ClaimsPerMonth)}})}),e.jsx(y,{xs:12,md:12,children:e.jsxs(de,{children:[e.jsx(Fe,{filters:l,onResetPage:s.onResetPage,dateError:i}),j&&e.jsx(Be,{filters:l,totalResults:r.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(R,{sx:{position:"relative"},children:[e.jsx(De,{dense:s.dense,numSelected:s.selected.length,rowCount:r.length}),e.jsx(ce,{sx:{minHeight:444},children:e.jsxs(Pe,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(we,{order:s.order,orderBy:s.orderBy,headLabel:qe,rowCount:r.length}),e.jsxs(Te,{children:[r.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(a=>e.jsx(Me,{row:a,selected:s.selected.includes(a.id),onSelectRow:()=>s.onSelectRow(a.id),onDeleteRow:()=>S(a.id),onViewRow:()=>P(a.id)},a.id)),e.jsx(Ce,{height:s.dense?56:76,emptyRows:fe(s.page,s.rowsPerPage,r.length)}),e.jsx(Se,{notFound:n})]})]})})]}),e.jsx(Re,{page:s.page,dense:s.dense,count:r.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})]})})}function Ke({inputData:t,comparator:o,filters:s,dateError:m}){const{status:h,name:c,startDate:d,endDate:l}=s,i=t==null?void 0:t.map((r,x)=>[r,x]);return i==null||i.sort((r,x)=>{const j=o(r[0],x[0]);return j!==0?j:r[1]-x[1]}),t=i==null?void 0:i.map(r=>r[0]),c&&(t=t.filter(r=>r.id.toString().toLowerCase().indexOf(c.toLowerCase())!==-1||r.customer.name.toLowerCase().indexOf(c.toLowerCase())!==-1||r.status.toLowerCase().indexOf(c.toLowerCase())!==-1||r.customer.email.toLowerCase().indexOf(c.toLowerCase())!==-1)),h!=="all"&&(t=t.filter(r=>r.status===h)),m||d&&l&&(t=t.filter(r=>me(r.createTime,d,l))),t}const Qe={title:`Order list | Dashboard - ${N.site.name}`};function es(){const t=K({queryKey:["orders"],queryFn:async()=>{const{data:s}=await M.get(F.order.list);return s}}),o=K({queryKey:["orders","analytics"],queryFn:async()=>{const{data:s}=await M.get(F.order.analytics);return s}});return o.isLoading||t.isLoading?e.jsx(ue,{}):t.isError||o.isError?e.jsx(xe,{route:f.dashboard.order.root}):e.jsxs(e.Fragment,{children:[e.jsx(pe,{children:e.jsxs("title",{children:[" ",Qe.title]})}),e.jsx(He,{orders:t.data,analytics:o})]})}export{es as default};