import{i as F,aP as _,j as e,L as G,S as R,A as M,B as w,aT as q,d0 as V,aL as J,c9 as Y,C as $,e8 as z,d7 as U,l as N,I as b,cQ as X,bR as Z,db as ee,aR as te,e3 as L,aS as y,e as W,r as u,eg as ae,g as se,b as re,de as oe,e2 as ne,dn as le,p as f,dP as ie,cV as C,R as de,dS as T,cY as ce,dd as me,eh as he,dp as E,dm as B,dq as ue,dT as pe,H as xe}from"./index-DSZ8-SnN.js";import{u as Q,E as je}from"./error-block-Bfei_nF0.js";import{u as ge}from"./useMutation-DusrxMaX.js";import{C as ye}from"./custom-breadcrumbs-D_ovYyL8.js";import{P as O}from"./permission-access-controller-BdKtae4H.js";import{g as Ce,r as be,e as fe}from"./utils-MBUcMVfY.js";import{u as ve}from"./use-table-CxMdT4pf.js";import{T as Se}from"./table-no-data-DwOuDKHk.js";import{T as Pe}from"./table-empty-rows-BaAfroyB.js";import{T as H,a as Te,b as De,c as Re}from"./table-head-custom-YWIPj6NO.js";import{T as we}from"./table-selected-action-xpEV6Xbv.js";import{T as Le}from"./table-pagination-custom-DI2JWg0p.js";import{A as D}from"./app-widget-summary-DkA6YTeu.js";import{b as K}from"./format-number-Cz1FSQLM.js";import{C as Oe}from"./confirm-dialog-CkFQTJ92.js";import{T as x}from"./TableCell-DSOEY65A.js";import{A as Ie}from"./AvatarGroup-DxaOTv1q.js";import{T as Ae}from"./TextField-DXnGVnKc.js";import{I as ke}from"./InputAdornment-DQTsYq75.js";import{S as Ee}from"./Select-bvm1T7cr.js";import{F as Be,a as I,c as A}from"./filters-result--GXLZrQa.js";import{C as k}from"./Chip-BxDt4Lxe.js";import"./index-DpRp3FVL.js";import"./incrementer-button-D3YNKy40.js";import"./order-payment-details-dialog-D6HUhzFZ.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-BIlFgVWF.js";import"./Checkbox-DIewUcg3.js";import"./TablePagination-DMx1QqWY.js";import"./KeyboardArrowRight-ySj1HR2l.js";import"./LastPage-DNd_MO8z.js";import"./InputBase-DUSf-v3M.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-DcdZLABF.js";import"./use-chart-AiWHWBa5.js";import"./chart-legends-BnqyFb2r.js";import"./index-CHAbpX0m.js";import"./DialogContent-9Yn0EsJP.js";import"./DialogTitle-kOHEE1rt.js";import"./FormControl-DVwuE-Z3.js";import"./InputLabel-Dt93HXfK.js";import"./FormLabel-D8PgMfa3.js";import"./FormHelperText-CAtOlLkP.js";import"./Menu-WNpJDxC0.js";import"./form-provider-Cfa9nJ2G.js";import"./Rating-CJRd3C9A.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-C8mFRUZ0.js";import"./index-ClfPQVwT.js";import"./Slider-DvPw8R3F.js";import"./RadioGroup-B-VQ3Ex7.js";import"./FormGroup-BoA-oXkm.js";import"./utils-DfMGJYQ4.js";import"./countries-DSLisFCy.js";import"./Autocomplete-Ke2RMla7.js";import"./country-select-0bcGB8RG.js";import"./upload-avatar-BRDUoqCR.js";import"./image-CnfTgJRa.js";import"./DatePicker-CHiyzFIc.js";import"./ListItem-CKvXkhKm.js";import"./MobileDateTimePicker-BLXY58Hs.js";import"./Tabs-CZeN0YJj.js";import"./schema-helper-hhXgycyC.js";import"./LoadingButton-Dx3EK8-Y.js";import"./CircularProgress-MhlsCNnq.js";function Fe({row:t,index:o,selected:a,onViewRow:m,onDeleteRow:c}){var p,j,v;const i=F(),d=F(),l=_(),h=e.jsxs(H,{hover:!0,selected:a,children:[e.jsx(x,{children:e.jsx(G,{color:"inherit",onClick:m,underline:"always",sx:{cursor:"pointer"},children:(t==null?void 0:t.ref)||o||(t==null?void 0:t.id)})}),e.jsx(x,{children:e.jsxs(R,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(M,{alt:t.customer.name,src:t.customer.avatar}),e.jsxs(R,{sx:{typography:"body2",flex:"1 1 auto",alignItems:"flex-start"},children:[e.jsx(w,{component:"span",children:t.customer.name}),e.jsx(w,{component:"span",sx:{color:"text.disabled"},children:t.customer.email})]})]})}),e.jsx(x,{children:e.jsx(q,{primary:V(t.orderDate),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(x,{align:"center",children:e.jsx(Ie,{sx:{[`& .${J.avatar}`]:{width:24,height:24}},children:(p=t==null?void 0:t.productToOrder)==null?void 0:p.map(n=>{var g,S,P,s;return e.jsx(Y,{title:`${(g=n==null?void 0:n.product)==null?void 0:g.name} | Quantity : ${n.quantity}`,children:e.jsx(M,{alt:(S=n==null?void 0:n.product)==null?void 0:S.name,src:`${$.site.serverFileHost}${(P=n==null?void 0:n.product)==null?void 0:P.image}`},n==null?void 0:n.id)},(s=n==null?void 0:n.product)==null?void 0:s.id)})})}),e.jsx(x,{children:K(z(t.totalOrderAmount-t.totalOrderAmount*(t.discount/100),t.snapshotTaxPercentage))||"-"}),e.jsxs(x,{children:[(j=t.createdBy)==null?void 0:j.firstName," ",(v=t.createdBy)==null?void 0:v.lastName]}),e.jsx(x,{children:e.jsx(U,{variant:"soft",color:t.status==="Ready"&&"info"||t.status==="InProcess"&&"warning"||t.status==="Delivered"&&"success"||t.status==="Canceled"&&"error"||"default",children:t.status})}),e.jsxs(x,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(N,{color:d.value?"inherit":"default",onClick:d.onToggle,sx:{...d.value&&{bgcolor:"action.hover"}},children:e.jsx(b,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(N,{color:l.open?"inherit":"default",onClick:l.onOpen,children:e.jsx(b,{icon:"eva:more-vertical-fill"})})]})]}),r=e.jsx(H,{children:e.jsx(x,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(X,{in:d.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(Z,{sx:{m:1.5},children:t.productToOrder.map(n=>e.jsxs(R,{direction:"row",alignItems:"center",sx:{p:g=>g.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:g=>`solid 2px ${g.vars.palette.background.neutral}`}},children:[e.jsx(q,{primary:n.product.name,secondary:n.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs("div",{children:["x",n.quantity," "]}),e.jsx(w,{sx:{width:110,textAlign:"right"},children:K(n.snapshotProductPrice)})]},n.id))})})})});return e.jsxs(e.Fragment,{children:[h,r,e.jsx(ee,{open:l.open,anchorEl:l.anchorEl,onClose:l.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(te,{children:[e.jsx(O,{permission:L.VIEW_ORDER,children:e.jsxs(y,{onClick:()=>{m(),l.onClose()},children:[e.jsx(b,{icon:"solar:eye-bold"}),"View"]})}),t.status!=="Canceled"&&e.jsx(O,{permission:L.DELETE_ORDER,children:e.jsxs(y,{onClick:()=>{i.onTrue(),l.onClose()},sx:{color:"warning.main"},children:[e.jsx(b,{icon:"solar:trash-bin-trash-bold"}),"Cancel"]})})]})}),e.jsx(Oe,{open:i.value,onClose:i.onFalse,title:"Cancel Order",content:"Are you sure want to cancel this order?",action:e.jsx(W,{variant:"contained",color:"warning",onClick:()=>{c(),i.onFalse()},children:"Confirm Canceling"})})]})}function Me({filters:t,onResetPage:o}){const[a,m]=u.useState("all"),c=u.useCallback(d=>{o(),t.setState({name:d.target.value})},[t,o]),i=u.useCallback(d=>{o(),t.setState({status:d.target.value}),m(d.target.value)},[t,o]);return e.jsxs(R,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(Ae,{sx:{width:420},value:t.state.name,onChange:c,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(ke,{position:"start",children:e.jsx(b,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsxs(Ee,{sx:{width:420,textTransform:"capitalize"},value:a,onChange:i,children:[e.jsx(y,{value:"all",children:"All Orders"}),e.jsx(y,{value:"Draft",children:"Draft"}),e.jsx(y,{value:"Canceled",children:"Canceled"}),e.jsx(y,{value:"InProcess",children:"Processing"}),e.jsx(y,{value:"Ready",children:"Ready To Deliver"}),e.jsx(y,{value:"Delivered",children:"Delivered"})]})]})}function qe({filters:t,totalResults:o,onResetPage:a,sx:m}){const c=u.useCallback(()=>{a(),t.setState({name:""})},[t,a]),i=u.useCallback(()=>{a(),t.setState({status:"all"})},[t,a]),d=u.useCallback(()=>{a(),t.setState({startDate:null,endDate:null})},[t,a]),l=u.useCallback(()=>{a(),t.onResetState()},[t,a]);return e.jsxs(Be,{totalResults:o,onReset:l,sx:m,children:[e.jsx(I,{label:"Status:",isShow:t.state.status!=="all",children:e.jsx(k,{...A,label:t.state.status,onDelete:i,sx:{textTransform:"capitalize"}})}),e.jsx(I,{label:"Date:",isShow:!!(t.state.startDate&&t.state.endDate),children:e.jsx(k,{...A,label:ae(t.state.startDate,t.state.endDate),onDelete:d})}),e.jsx(I,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(k,{...A,label:t.state.name,onDelete:c})})]})}const Ne=[{id:"orderNumber",label:"#",width:88},{id:"name",label:"Customer"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Price",width:140},{id:"createdBy",label:"Created By",width:200},{id:"status",label:"Status",width:110},{id:"",width:88}];function Qe({orders:t,analytics:o}){const a=ve({defaultOrderBy:"orderId"}),m=se(),c=re(),[i,d]=u.useState(()=>t),l=oe({name:"",status:"all",startDate:null,endDate:null});u.useEffect(()=>{d(t)},[t]);const h=ne(l.state.startDate,l.state.endDate),r=He({inputData:i,comparator:Ce(a.order,a.orderBy),filters:l.state,dateError:h}),p=be(r,a.page,a.rowsPerPage),j=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate,v=!r.length&&j||!r.length,n=le(),{mutate:g}=ge({mutationFn:s=>E.delete(B.order.delete+s),onSuccess:async()=>{ue.success("Order Has Been Canceled!")},onSettled:async()=>{await n.invalidateQueries({queryKey:["orders"]}),await n.invalidateQueries({queryKey:["orders-status"]}),await n.invalidateQueries({queryKey:["orders","analytics"]})},onError:()=>{}}),S=u.useCallback(s=>{g(s)},[p.length,a,i]),P=u.useCallback(s=>{m.replace(f.dashboard.order.details(s))},[m]);return e.jsx(ie,{maxWidth:"xl",children:e.jsxs(C,{container:!0,spacing:3,children:[e.jsx(C,{xs:12,md:12,children:e.jsx(ye,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Order",href:f.dashboard.order.root},{name:"List"}],action:e.jsx(O,{permission:L.ADD_ORDER,children:e.jsx(W,{component:de,href:f.dashboard.order.new,variant:"contained",startIcon:e.jsx(b,{icon:"mingcute:add-line"}),children:"New Order"})})})}),e.jsxs(O,{permission:L.LIST_ORDER,children:[e.jsx(C,{xs:12,md:3,children:e.jsx(D,{title:"All Orders",total:t.length,chart:{categories:o.data.lastSixMonth.map(s=>T(s==null?void 0:s.inMonth)),series:o.data.lastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(C,{xs:12,md:3,children:e.jsx(D,{title:"Processing Order",total:o.data.analytics.InProcess,chart:{colors:[c.vars.palette.warning.light],categories:o.data.inProcessLastSixMonth.map(s=>T(s==null?void 0:s.inMonth)),series:o.data.inProcessLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(C,{xs:12,md:3,children:e.jsx(D,{title:"Ready To Deliver",total:o.data.analytics.Ready,chart:{colors:[c.vars.palette.info.main],categories:o.data.readyLastSixMonth.map(s=>T(s==null?void 0:s.inMonth)),series:o.data.readyLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(C,{xs:12,md:3,children:e.jsx(D,{title:"Delivered",total:o.data.analytics.Delivered,chart:{colors:[c.vars.palette.success.main],categories:o.data.deliveredLastSixMonth.map(s=>T(s==null?void 0:s.inMonth)),series:o.data.deliveredLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(C,{xs:12,md:12,children:e.jsxs(ce,{children:[e.jsx(Me,{filters:l,onResetPage:a.onResetPage,dateError:h}),j&&e.jsx(qe,{filters:l,totalResults:r.length,onResetPage:a.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(w,{sx:{position:"relative"},children:[e.jsx(we,{dense:a.dense,numSelected:a.selected.length,rowCount:r.length}),e.jsx(me,{sx:{minHeight:444},children:e.jsxs(Te,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(De,{order:a.order,orderBy:a.orderBy,headLabel:Ne,rowCount:r.length}),e.jsxs(Re,{children:[r.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(s=>e.jsx(Fe,{row:s,selected:a.selected.includes(s.id),onSelectRow:()=>a.onSelectRow(s.id),onDeleteRow:()=>S(s.id),onViewRow:()=>P(s.id)},s.id)),e.jsx(Pe,{height:a.dense?56:76,emptyRows:fe(a.page,a.rowsPerPage,r.length)}),e.jsx(Se,{notFound:v})]})]})})]}),e.jsx(Le,{page:a.page,dense:a.dense,count:r.length,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onChangeDense:a.onChangeDense,onRowsPerPageChange:a.onChangeRowsPerPage})]})})]})]})})}function He({inputData:t,comparator:o,filters:a,dateError:m}){const{status:c,name:i,startDate:d,endDate:l}=a,h=t==null?void 0:t.map((r,p)=>[r,p]);return h==null||h.sort((r,p)=>{const j=o(r[0],p[0]);return j!==0?j:r[1]-p[1]}),t=h==null?void 0:h.map(r=>r[0]),i&&(t=t.filter(r=>r.id.toString().toLowerCase().indexOf(i.toLowerCase())!==-1||r.customer.name.toLowerCase().indexOf(i.toLowerCase())!==-1||r.status.toLowerCase().indexOf(i.toLowerCase())!==-1||r.customer.email.toLowerCase().indexOf(i.toLowerCase())!==-1)),c!=="all"&&(t=t.filter(r=>r.status===c)),m||d&&l&&(t=t.filter(r=>he(r.createTime,d,l))),t}const Ke={title:`Order list | Dashboard - ${$.site.name}`};function sa(){const t=Q({queryKey:["orders"],queryFn:async()=>{const{data:a}=await E.get(B.order.list);return a}}),o=Q({queryKey:["orders","analytics"],queryFn:async()=>{const{data:a}=await E.get(B.order.analytics);return a}});return o.isLoading||t.isLoading?e.jsx(pe,{}):t.isError||o.isError?e.jsx(je,{route:f.dashboard.order.root}):e.jsxs(e.Fragment,{children:[e.jsx(xe,{children:e.jsxs("title",{children:[" ",Ke.title]})}),e.jsx(Qe,{orders:t.data,analytics:o})]})}export{sa as default};