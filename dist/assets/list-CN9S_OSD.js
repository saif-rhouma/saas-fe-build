import{i as B,b5 as W,j as e,L as _,S as D,A as F,B as w,aG as M,aH as V,b1 as J,cn as Z,C as $,d7 as z,l as q,I as C,cZ as U,au as X,db as Y,b7 as ee,e2 as R,b8 as y,e as N,r as u,eb as te,g as ae,b as se,de as re,ec as oe,dn as ne,p as f,dP as le,ay as g,R as ie,dS as P,aB as de,dd as ce,ed as me,dp as E,dm as A,dq as he,dT as ue,H as pe}from"./index-zyulwKWD.js";import{u as H,E as xe}from"./error-block-DYjvCFbe.js";import{u as je}from"./useMutation-Cq5RP75q.js";import{C as ge}from"./custom-breadcrumbs-DHj4Ok4N.js";import{P as L}from"./permission-access-controller-DC3hx7Nz.js";import{g as ye,r as be,e as Ce}from"./utils-MBUcMVfY.js";import{u as fe}from"./use-table-Bf_i8STO.js";import{T as ve}from"./table-no-data-CWIOpu1y.js";import{T as Se}from"./table-empty-rows-BLFiUyUG.js";import{T as K,a as Pe,b as Te,c as De}from"./table-head-custom-C5tz8LbQ.js";import{T as we}from"./table-selected-action-DlyVr8QY.js";import{T as Re}from"./table-pagination-custom-Bj-7BC4s.js";import{A as T}from"./app-widget-summary-BpjZT60G.js";import{b as Q}from"./format-number-CwpAkUO8.js";import{C as Le}from"./confirm-dialog-BBxJE3es.js";import{T as j}from"./TableCell-DS8DZ5wT.js";import{A as Oe}from"./AvatarGroup-D_gM7ABD.js";import{T as Ie}from"./TextField-CwPpTqRa.js";import{I as ke}from"./InputAdornment-BErxhCkp.js";import{S as Ee}from"./Select-D9XKSxr2.js";import{F as Ae,a as O,c as I}from"./filters-result-TbvdOFit.js";import{C as k}from"./Chip-hUCBEcuv.js";import"./index-DiQuQNWU.js";import"./incrementer-button-CUmqrZ4v.js";import"./order-payment-details-dialog-DrRezMLU.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-jT1oSNS2.js";import"./Checkbox-B2T2mhgd.js";import"./TablePagination-BV8oey5N.js";import"./KeyboardArrowRight-HkDaFki2.js";import"./LastPage-jJvTp2Lh.js";import"./InputBase-Cb1ycHRk.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-krtCXPG7.js";import"./use-chart-C92rpLiP.js";import"./chart-legends-DO9S7J74.js";import"./index-WuVNPZZI.js";import"./DialogContent-CrSIuYBM.js";import"./DialogTitle-B9BBK-5J.js";import"./FormControl-DkR47KrL.js";import"./InputLabel-Dxqp6-8F.js";import"./FormLabel-C6u8Qb2i.js";import"./FormHelperText-DXYAPhzx.js";import"./Menu-DQMDyUDh.js";import"./form-provider-B4-ohiGK.js";import"./Rating-Dxb9vRtQ.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DYwyPMk3.js";import"./index-Fr89IBES.js";import"./Slider-CZuO2OIz.js";import"./RadioGroup-DmqY9jkn.js";import"./FormGroup-PZ8L00lW.js";import"./utils-DGmOSEsQ.js";import"./countries-DSLisFCy.js";import"./Autocomplete-CyPDwGC0.js";import"./country-select-CXYKfaKC.js";import"./upload-avatar-vd3eyrbg.js";import"./image-CJs4Y8Ie.js";import"./DatePicker-B07m1huX.js";import"./ListItem-uUR6JM6K.js";import"./MobileDateTimePicker-BDwlzO1U.js";import"./Tabs-DFyAqHwW.js";import"./schema-helper-_MOasXwH.js";import"./LoadingButton-CNgluC-A.js";import"./CircularProgress-D8aR7PE7.js";function Be({row:t,index:n,selected:a,onViewRow:m,onDeleteRow:c}){var p;const i=B(),d=B(),l=W(),h=e.jsxs(K,{hover:!0,selected:a,children:[e.jsx(j,{children:e.jsx(_,{color:"inherit",onClick:m,underline:"always",sx:{cursor:"pointer"},children:(t==null?void 0:t.ref)||n||(t==null?void 0:t.id)})}),e.jsx(j,{children:e.jsxs(D,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(F,{alt:t.customer.name,src:t.customer.avatar}),e.jsxs(D,{sx:{typography:"body2",flex:"1 1 auto",alignItems:"flex-start"},children:[e.jsx(w,{component:"span",children:t.customer.name}),e.jsx(w,{component:"span",sx:{color:"text.disabled"},children:t.customer.email})]})]})}),e.jsx(j,{children:e.jsx(M,{primary:V(t.orderDate),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(j,{align:"center",children:e.jsx(Oe,{sx:{[`& .${J.avatar}`]:{width:24,height:24}},children:(p=t==null?void 0:t.productToOrder)==null?void 0:p.map(r=>{var x,b,v,S;return e.jsx(Z,{title:`${(x=r==null?void 0:r.product)==null?void 0:x.name} | Quantity : ${r.quantity}`,children:e.jsx(F,{alt:(b=r==null?void 0:r.product)==null?void 0:b.name,src:`${$.site.serverFileHost}${(v=r==null?void 0:r.product)==null?void 0:v.image}`},r==null?void 0:r.id)},(S=r==null?void 0:r.product)==null?void 0:S.id)})})}),e.jsxs(j,{children:[" ",Q(t.totalOrderAmount)," "]}),e.jsx(j,{children:e.jsx(z,{variant:"soft",color:t.status==="Ready"&&"info"||t.status==="InProcess"&&"warning"||t.status==="Delivered"&&"success"||t.status==="Canceled"&&"error"||"default",children:t.status})}),e.jsxs(j,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(q,{color:d.value?"inherit":"default",onClick:d.onToggle,sx:{...d.value&&{bgcolor:"action.hover"}},children:e.jsx(C,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(q,{color:l.open?"inherit":"default",onClick:l.onOpen,children:e.jsx(C,{icon:"eva:more-vertical-fill"})})]})]}),o=e.jsx(K,{children:e.jsx(j,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(U,{in:d.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(X,{sx:{m:1.5},children:t.productToOrder.map(r=>e.jsxs(D,{direction:"row",alignItems:"center",sx:{p:x=>x.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:x=>`solid 2px ${x.vars.palette.background.neutral}`}},children:[e.jsx(M,{primary:r.product.name,secondary:r.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs("div",{children:["x",r.quantity," "]}),e.jsx(w,{sx:{width:110,textAlign:"right"},children:Q(r.snapshotProductPrice)})]},r.id))})})})});return e.jsxs(e.Fragment,{children:[h,o,e.jsx(Y,{open:l.open,anchorEl:l.anchorEl,onClose:l.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(ee,{children:[e.jsx(L,{permission:R.VIEW_ORDER,children:e.jsxs(y,{onClick:()=>{m(),l.onClose()},children:[e.jsx(C,{icon:"solar:eye-bold"}),"View"]})}),t.status!=="Canceled"&&e.jsx(L,{permission:R.DELETE_ORDER,children:e.jsxs(y,{onClick:()=>{i.onTrue(),l.onClose()},sx:{color:"warning.main"},children:[e.jsx(C,{icon:"solar:trash-bin-trash-bold"}),"Cancel"]})})]})}),e.jsx(Le,{open:i.value,onClose:i.onFalse,title:"Cancel Order",content:"Are you sure want to cancel this order?",action:e.jsx(N,{variant:"contained",color:"warning",onClick:()=>{c(),i.onFalse()},children:"Confirm Canceling"})})]})}function Fe({filters:t,onResetPage:n}){const[a,m]=u.useState("all"),c=u.useCallback(d=>{n(),t.setState({name:d.target.value})},[t,n]),i=u.useCallback(d=>{n(),t.setState({status:d.target.value}),m(d.target.value)},[t,n]);return e.jsxs(D,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(Ie,{sx:{width:420},value:t.state.name,onChange:c,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(ke,{position:"start",children:e.jsx(C,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsxs(Ee,{sx:{width:420,textTransform:"capitalize"},value:a,onChange:i,children:[e.jsx(y,{value:"all",children:"All Orders"}),e.jsx(y,{value:"Draft",children:"Draft"}),e.jsx(y,{value:"InProcess",children:"Processing"}),e.jsx(y,{value:"Ready",children:"Ready To Deliver"}),e.jsx(y,{value:"Delivered",children:"Delivered"})]})]})}function Me({filters:t,totalResults:n,onResetPage:a,sx:m}){const c=u.useCallback(()=>{a(),t.setState({name:""})},[t,a]),i=u.useCallback(()=>{a(),t.setState({status:"all"})},[t,a]),d=u.useCallback(()=>{a(),t.setState({startDate:null,endDate:null})},[t,a]),l=u.useCallback(()=>{a(),t.onResetState()},[t,a]);return e.jsxs(Ae,{totalResults:n,onReset:l,sx:m,children:[e.jsx(O,{label:"Status:",isShow:t.state.status!=="all",children:e.jsx(k,{...I,label:t.state.status,onDelete:i,sx:{textTransform:"capitalize"}})}),e.jsx(O,{label:"Date:",isShow:!!(t.state.startDate&&t.state.endDate),children:e.jsx(k,{...I,label:te(t.state.startDate,t.state.endDate),onDelete:d})}),e.jsx(O,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(k,{...I,label:t.state.name,onDelete:c})})]})}const qe=[{id:"orderNumber",label:"#",width:88},{id:"name",label:"Customer"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Price",width:140},{id:"status",label:"Status",width:110},{id:"",width:88}];function He({orders:t,analytics:n}){const a=fe({defaultOrderBy:"orderId"}),m=ae(),c=se(),[i,d]=u.useState(()=>t),l=re({name:"",status:"all",startDate:null,endDate:null});u.useEffect(()=>{d(t)},[t]);const h=oe(l.state.startDate,l.state.endDate),o=Ke({inputData:i,comparator:ye(a.order,a.orderBy),filters:l.state,dateError:h}),p=be(o,a.page,a.rowsPerPage),r=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate,x=!o.length&&r||!o.length,b=ne(),{mutate:v}=je({mutationFn:s=>E.delete(A.order.delete+s),onSuccess:async()=>{he.success("Order Has Been Canceled!")},onSettled:async()=>{await b.invalidateQueries({queryKey:["orders"]}),await b.invalidateQueries({queryKey:["orders-status"]}),await b.invalidateQueries({queryKey:["orders","analytics"]})},onError:()=>{}}),S=u.useCallback(s=>{v(s)},[p.length,a,i]),G=u.useCallback(s=>{m.replace(f.dashboard.order.details(s))},[m]);return e.jsx(le,{maxWidth:"xl",children:e.jsxs(g,{container:!0,spacing:3,children:[e.jsx(g,{xs:12,md:12,children:e.jsx(ge,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Order",href:f.dashboard.order.root},{name:"List"}],action:e.jsx(L,{permission:R.ADD_ORDER,children:e.jsx(N,{component:ie,href:f.dashboard.order.new,variant:"contained",startIcon:e.jsx(C,{icon:"mingcute:add-line"}),children:"New Order"})})})}),e.jsxs(L,{permission:R.LIST_ORDER,children:[e.jsx(g,{xs:12,md:3,children:e.jsx(T,{title:"All Orders",total:t.length,chart:{categories:n.data.lastSixMonth.map(s=>P(s==null?void 0:s.inMonth)),series:n.data.lastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(g,{xs:12,md:3,children:e.jsx(T,{title:"Processing Order",total:n.data.analytics.InProcess,chart:{colors:[c.vars.palette.warning.light],categories:n.data.inProcessLastSixMonth.map(s=>P(s==null?void 0:s.inMonth)),series:n.data.inProcessLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(g,{xs:12,md:3,children:e.jsx(T,{title:"Ready To Deliver",total:n.data.analytics.Ready,chart:{colors:[c.vars.palette.info.main],categories:n.data.readyLastSixMonth.map(s=>P(s==null?void 0:s.inMonth)),series:n.data.readyLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(g,{xs:12,md:3,children:e.jsx(T,{title:"Delivered",total:n.data.analytics.Delivered,chart:{colors:[c.vars.palette.success.main],categories:n.data.deliveredLastSixMonth.map(s=>P(s==null?void 0:s.inMonth)),series:n.data.deliveredLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(g,{xs:12,md:12,children:e.jsxs(de,{children:[e.jsx(Fe,{filters:l,onResetPage:a.onResetPage,dateError:h}),r&&e.jsx(Me,{filters:l,totalResults:o.length,onResetPage:a.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(w,{sx:{position:"relative"},children:[e.jsx(we,{dense:a.dense,numSelected:a.selected.length,rowCount:o.length}),e.jsx(ce,{sx:{minHeight:444},children:e.jsxs(Pe,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Te,{order:a.order,orderBy:a.orderBy,headLabel:qe,rowCount:o.length}),e.jsxs(De,{children:[o.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(s=>e.jsx(Be,{row:s,selected:a.selected.includes(s.id),onSelectRow:()=>a.onSelectRow(s.id),onDeleteRow:()=>S(s.id),onViewRow:()=>G(s.id)},s.id)),e.jsx(Se,{height:a.dense?56:76,emptyRows:Ce(a.page,a.rowsPerPage,o.length)}),e.jsx(ve,{notFound:x})]})]})})]}),e.jsx(Re,{page:a.page,dense:a.dense,count:o.length,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onChangeDense:a.onChangeDense,onRowsPerPageChange:a.onChangeRowsPerPage})]})})]})]})})}function Ke({inputData:t,comparator:n,filters:a,dateError:m}){const{status:c,name:i,startDate:d,endDate:l}=a,h=t==null?void 0:t.map((o,p)=>[o,p]);return h==null||h.sort((o,p)=>{const r=n(o[0],p[0]);return r!==0?r:o[1]-p[1]}),t=h==null?void 0:h.map(o=>o[0]),i&&(t=t.filter(o=>o.id.toString().toLowerCase().indexOf(i.toLowerCase())!==-1||o.customer.name.toLowerCase().indexOf(i.toLowerCase())!==-1||o.status.toLowerCase().indexOf(i.toLowerCase())!==-1||o.customer.email.toLowerCase().indexOf(i.toLowerCase())!==-1)),c!=="all"&&(t=t.filter(o=>o.status===c)),m||d&&l&&(t=t.filter(o=>me(o.createTime,d,l))),t}const Qe={title:`Order list | Dashboard - ${$.site.name}`};function aa(){const t=H({queryKey:["orders"],queryFn:async()=>{const{data:a}=await E.get(A.order.list);return a}}),n=H({queryKey:["orders","analytics"],queryFn:async()=>{const{data:a}=await E.get(A.order.analytics);return a}});return n.isLoading||t.isLoading?e.jsx(ue,{}):t.isError||n.isError?e.jsx(xe,{route:f.dashboard.order.root}):e.jsxs(e.Fragment,{children:[e.jsx(pe,{children:e.jsxs("title",{children:[" ",Qe.title]})}),e.jsx(He,{orders:t.data,analytics:n})]})}export{aa as default};