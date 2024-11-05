import{i as F,aP as _,j as e,L as G,S as w,A as M,B as R,aT as q,d0 as V,aL as J,c9 as Y,C as $,d7 as z,l as N,I as b,cQ as U,bR as X,db as Z,aR as ee,e3 as L,aS as y,e as W,r as u,eb as te,g as ae,b as se,de as re,ec as oe,dn as ne,p as f,dP as le,cV as C,R as ie,dS as T,cY as de,dd as ce,ed as me,dp as A,dm as B,dq as he,dT as ue,H as pe}from"./index-BUkc7Fsf.js";import{u as Q,E as xe}from"./error-block-BMnFuAQR.js";import{u as je}from"./useMutation-Bu3_VPGY.js";import{C as ge}from"./custom-breadcrumbs-CL0q_6e2.js";import{P as O}from"./permission-access-controller-D8InZjLn.js";import{g as ye,r as Ce,e as be}from"./utils-MBUcMVfY.js";import{u as fe}from"./use-table-D-rmPlGf.js";import{T as ve}from"./table-no-data-L_vtbHNw.js";import{T as Se}from"./table-empty-rows-CnKwt_g5.js";import{T as H,a as Pe,b as Te,c as De}from"./table-head-custom-BG1xHw-X.js";import{T as we}from"./table-selected-action-CtrtJ4bi.js";import{T as Re}from"./table-pagination-custom-CRcGgWz1.js";import{A as D}from"./app-widget-summary-I34bZWM4.js";import{b as K}from"./format-number-DclRACXZ.js";import{C as Le}from"./confirm-dialog-DkJx0hQ4.js";import{T as x}from"./TableCell-pnBacSd4.js";import{A as Oe}from"./AvatarGroup-Dz7jKuBX.js";import{T as Ie}from"./TextField-borq0bL5.js";import{I as ke}from"./InputAdornment-Cb7Fe9N5.js";import{S as Ee}from"./Select-BqjrNlWW.js";import{F as Ae,a as I,c as k}from"./filters-result-BB5MQLfR.js";import{C as E}from"./Chip-CIa4MnwU.js";import"./index-Dag_Owh_.js";import"./incrementer-button-BBF6l9gO.js";import"./order-payment-details-dialog-nXnp82-m.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-B0vrpYbF.js";import"./Checkbox-CBb5w9Zu.js";import"./TablePagination-YMeSIc_D.js";import"./KeyboardArrowRight-BHo19vWg.js";import"./LastPage-CgQNJj_q.js";import"./InputBase-eA2S-h6o.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-CXIRs7Ob.js";import"./use-chart-Jq6ssv5-.js";import"./chart-legends-D0KGNN9Y.js";import"./index-DIvWYC7g.js";import"./DialogContent-Cp4PxtSn.js";import"./DialogTitle-3bRr4EI2.js";import"./FormControl-Da6RRZ3T.js";import"./InputLabel-eL3TaEhp.js";import"./FormLabel-ClNwb4vl.js";import"./FormHelperText-FWMNt2lu.js";import"./Menu-DnxcDa3h.js";import"./form-provider-QqBD3CGU.js";import"./Rating-BgtJ1bAx.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DdXAAWE4.js";import"./index-CDZtdS6z.js";import"./Slider-CE7Mn5hI.js";import"./RadioGroup-Bh3tQGDE.js";import"./FormGroup-Dt3DcMhH.js";import"./utils-Y0NsjulE.js";import"./countries-DSLisFCy.js";import"./Autocomplete-DZc0TKvu.js";import"./country-select-DSGrTyy5.js";import"./upload-avatar-CurHEeLB.js";import"./image-CCdN6W1s.js";import"./DatePicker-BA7hh0CT.js";import"./ListItem-VlWOepYx.js";import"./MobileDateTimePicker-wae2GaXa.js";import"./Tabs-CJtyXYLt.js";import"./schema-helper-DJ_CxDTh.js";import"./LoadingButton-D4ACVqvX.js";import"./CircularProgress-GOJrBTqZ.js";function Be({row:t,index:o,selected:a,onViewRow:m,onDeleteRow:c}){var p,j,v;const i=F(),d=F(),l=_(),h=e.jsxs(H,{hover:!0,selected:a,children:[e.jsx(x,{children:e.jsx(G,{color:"inherit",onClick:m,underline:"always",sx:{cursor:"pointer"},children:(t==null?void 0:t.ref)||o||(t==null?void 0:t.id)})}),e.jsx(x,{children:e.jsxs(w,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(M,{alt:t.customer.name,src:t.customer.avatar}),e.jsxs(w,{sx:{typography:"body2",flex:"1 1 auto",alignItems:"flex-start"},children:[e.jsx(R,{component:"span",children:t.customer.name}),e.jsx(R,{component:"span",sx:{color:"text.disabled"},children:t.customer.email})]})]})}),e.jsx(x,{children:e.jsx(q,{primary:V(t.orderDate),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(x,{align:"center",children:e.jsx(Oe,{sx:{[`& .${J.avatar}`]:{width:24,height:24}},children:(p=t==null?void 0:t.productToOrder)==null?void 0:p.map(n=>{var g,S,P,s;return e.jsx(Y,{title:`${(g=n==null?void 0:n.product)==null?void 0:g.name} | Quantity : ${n.quantity}`,children:e.jsx(M,{alt:(S=n==null?void 0:n.product)==null?void 0:S.name,src:`${$.site.serverFileHost}${(P=n==null?void 0:n.product)==null?void 0:P.image}`},n==null?void 0:n.id)},(s=n==null?void 0:n.product)==null?void 0:s.id)})})}),e.jsxs(x,{children:[" ",K(t.totalOrderAmount)," "]}),e.jsxs(x,{children:[(j=t.createdBy)==null?void 0:j.firstName," ",(v=t.createdBy)==null?void 0:v.lastName]}),e.jsx(x,{children:e.jsx(z,{variant:"soft",color:t.status==="Ready"&&"info"||t.status==="InProcess"&&"warning"||t.status==="Delivered"&&"success"||t.status==="Canceled"&&"error"||"default",children:t.status})}),e.jsxs(x,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(N,{color:d.value?"inherit":"default",onClick:d.onToggle,sx:{...d.value&&{bgcolor:"action.hover"}},children:e.jsx(b,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(N,{color:l.open?"inherit":"default",onClick:l.onOpen,children:e.jsx(b,{icon:"eva:more-vertical-fill"})})]})]}),r=e.jsx(H,{children:e.jsx(x,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(U,{in:d.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(X,{sx:{m:1.5},children:t.productToOrder.map(n=>e.jsxs(w,{direction:"row",alignItems:"center",sx:{p:g=>g.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:g=>`solid 2px ${g.vars.palette.background.neutral}`}},children:[e.jsx(q,{primary:n.product.name,secondary:n.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs("div",{children:["x",n.quantity," "]}),e.jsx(R,{sx:{width:110,textAlign:"right"},children:K(n.snapshotProductPrice)})]},n.id))})})})});return e.jsxs(e.Fragment,{children:[h,r,e.jsx(Z,{open:l.open,anchorEl:l.anchorEl,onClose:l.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(ee,{children:[e.jsx(O,{permission:L.VIEW_ORDER,children:e.jsxs(y,{onClick:()=>{m(),l.onClose()},children:[e.jsx(b,{icon:"solar:eye-bold"}),"View"]})}),t.status!=="Canceled"&&e.jsx(O,{permission:L.DELETE_ORDER,children:e.jsxs(y,{onClick:()=>{i.onTrue(),l.onClose()},sx:{color:"warning.main"},children:[e.jsx(b,{icon:"solar:trash-bin-trash-bold"}),"Cancel"]})})]})}),e.jsx(Le,{open:i.value,onClose:i.onFalse,title:"Cancel Order",content:"Are you sure want to cancel this order?",action:e.jsx(W,{variant:"contained",color:"warning",onClick:()=>{c(),i.onFalse()},children:"Confirm Canceling"})})]})}function Fe({filters:t,onResetPage:o}){const[a,m]=u.useState("all"),c=u.useCallback(d=>{o(),t.setState({name:d.target.value})},[t,o]),i=u.useCallback(d=>{o(),t.setState({status:d.target.value}),m(d.target.value)},[t,o]);return e.jsxs(w,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(Ie,{sx:{width:420},value:t.state.name,onChange:c,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(ke,{position:"start",children:e.jsx(b,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsxs(Ee,{sx:{width:420,textTransform:"capitalize"},value:a,onChange:i,children:[e.jsx(y,{value:"all",children:"All Orders"}),e.jsx(y,{value:"Draft",children:"Draft"}),e.jsx(y,{value:"Canceled",children:"Canceled"}),e.jsx(y,{value:"InProcess",children:"Processing"}),e.jsx(y,{value:"Ready",children:"Ready To Deliver"}),e.jsx(y,{value:"Delivered",children:"Delivered"})]})]})}function Me({filters:t,totalResults:o,onResetPage:a,sx:m}){const c=u.useCallback(()=>{a(),t.setState({name:""})},[t,a]),i=u.useCallback(()=>{a(),t.setState({status:"all"})},[t,a]),d=u.useCallback(()=>{a(),t.setState({startDate:null,endDate:null})},[t,a]),l=u.useCallback(()=>{a(),t.onResetState()},[t,a]);return e.jsxs(Ae,{totalResults:o,onReset:l,sx:m,children:[e.jsx(I,{label:"Status:",isShow:t.state.status!=="all",children:e.jsx(E,{...k,label:t.state.status,onDelete:i,sx:{textTransform:"capitalize"}})}),e.jsx(I,{label:"Date:",isShow:!!(t.state.startDate&&t.state.endDate),children:e.jsx(E,{...k,label:te(t.state.startDate,t.state.endDate),onDelete:d})}),e.jsx(I,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(E,{...k,label:t.state.name,onDelete:c})})]})}const qe=[{id:"orderNumber",label:"#",width:88},{id:"name",label:"Customer"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Price",width:140},{id:"createdBy",label:"Created By",width:200},{id:"status",label:"Status",width:110},{id:"",width:88}];function Ne({orders:t,analytics:o}){const a=fe({defaultOrderBy:"orderId"}),m=ae(),c=se(),[i,d]=u.useState(()=>t),l=re({name:"",status:"all",startDate:null,endDate:null});u.useEffect(()=>{d(t)},[t]);const h=oe(l.state.startDate,l.state.endDate),r=Qe({inputData:i,comparator:ye(a.order,a.orderBy),filters:l.state,dateError:h}),p=Ce(r,a.page,a.rowsPerPage),j=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate,v=!r.length&&j||!r.length,n=ne(),{mutate:g}=je({mutationFn:s=>A.delete(B.order.delete+s),onSuccess:async()=>{he.success("Order Has Been Canceled!")},onSettled:async()=>{await n.invalidateQueries({queryKey:["orders"]}),await n.invalidateQueries({queryKey:["orders-status"]}),await n.invalidateQueries({queryKey:["orders","analytics"]})},onError:()=>{}}),S=u.useCallback(s=>{g(s)},[p.length,a,i]),P=u.useCallback(s=>{m.replace(f.dashboard.order.details(s))},[m]);return e.jsx(le,{maxWidth:"xl",children:e.jsxs(C,{container:!0,spacing:3,children:[e.jsx(C,{xs:12,md:12,children:e.jsx(ge,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Order",href:f.dashboard.order.root},{name:"List"}],action:e.jsx(O,{permission:L.ADD_ORDER,children:e.jsx(W,{component:ie,href:f.dashboard.order.new,variant:"contained",startIcon:e.jsx(b,{icon:"mingcute:add-line"}),children:"New Order"})})})}),e.jsxs(O,{permission:L.LIST_ORDER,children:[e.jsx(C,{xs:12,md:3,children:e.jsx(D,{title:"All Orders",total:t.length,chart:{categories:o.data.lastSixMonth.map(s=>T(s==null?void 0:s.inMonth)),series:o.data.lastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(C,{xs:12,md:3,children:e.jsx(D,{title:"Processing Order",total:o.data.analytics.InProcess,chart:{colors:[c.vars.palette.warning.light],categories:o.data.inProcessLastSixMonth.map(s=>T(s==null?void 0:s.inMonth)),series:o.data.inProcessLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(C,{xs:12,md:3,children:e.jsx(D,{title:"Ready To Deliver",total:o.data.analytics.Ready,chart:{colors:[c.vars.palette.info.main],categories:o.data.readyLastSixMonth.map(s=>T(s==null?void 0:s.inMonth)),series:o.data.readyLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(C,{xs:12,md:3,children:e.jsx(D,{title:"Delivered",total:o.data.analytics.Delivered,chart:{colors:[c.vars.palette.success.main],categories:o.data.deliveredLastSixMonth.map(s=>T(s==null?void 0:s.inMonth)),series:o.data.deliveredLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(C,{xs:12,md:12,children:e.jsxs(de,{children:[e.jsx(Fe,{filters:l,onResetPage:a.onResetPage,dateError:h}),j&&e.jsx(Me,{filters:l,totalResults:r.length,onResetPage:a.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(R,{sx:{position:"relative"},children:[e.jsx(we,{dense:a.dense,numSelected:a.selected.length,rowCount:r.length}),e.jsx(ce,{sx:{minHeight:444},children:e.jsxs(Pe,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Te,{order:a.order,orderBy:a.orderBy,headLabel:qe,rowCount:r.length}),e.jsxs(De,{children:[r.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(s=>e.jsx(Be,{row:s,selected:a.selected.includes(s.id),onSelectRow:()=>a.onSelectRow(s.id),onDeleteRow:()=>S(s.id),onViewRow:()=>P(s.id)},s.id)),e.jsx(Se,{height:a.dense?56:76,emptyRows:be(a.page,a.rowsPerPage,r.length)}),e.jsx(ve,{notFound:v})]})]})})]}),e.jsx(Re,{page:a.page,dense:a.dense,count:r.length,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onChangeDense:a.onChangeDense,onRowsPerPageChange:a.onChangeRowsPerPage})]})})]})]})})}function Qe({inputData:t,comparator:o,filters:a,dateError:m}){const{status:c,name:i,startDate:d,endDate:l}=a,h=t==null?void 0:t.map((r,p)=>[r,p]);return h==null||h.sort((r,p)=>{const j=o(r[0],p[0]);return j!==0?j:r[1]-p[1]}),t=h==null?void 0:h.map(r=>r[0]),i&&(t=t.filter(r=>r.id.toString().toLowerCase().indexOf(i.toLowerCase())!==-1||r.customer.name.toLowerCase().indexOf(i.toLowerCase())!==-1||r.status.toLowerCase().indexOf(i.toLowerCase())!==-1||r.customer.email.toLowerCase().indexOf(i.toLowerCase())!==-1)),c!=="all"&&(t=t.filter(r=>r.status===c)),m||d&&l&&(t=t.filter(r=>me(r.createTime,d,l))),t}const He={title:`Order list | Dashboard - ${$.site.name}`};function aa(){const t=Q({queryKey:["orders"],queryFn:async()=>{const{data:a}=await A.get(B.order.list);return a}}),o=Q({queryKey:["orders","analytics"],queryFn:async()=>{const{data:a}=await A.get(B.order.analytics);return a}});return o.isLoading||t.isLoading?e.jsx(ue,{}):t.isError||o.isError?e.jsx(xe,{route:f.dashboard.order.root}):e.jsxs(e.Fragment,{children:[e.jsx(pe,{children:e.jsxs("title",{children:[" ",He.title]})}),e.jsx(Ne,{orders:t.data,analytics:o})]})}export{aa as default};
