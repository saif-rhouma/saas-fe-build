import{w as I,bG as H,j as e,L as W,S as P,A,B as D,aK as M,aL as J,bo as V,dw as z,C as K,du as U,y as B,I as b,dj as _,aB as X,dz as Y,bI as Z,bJ as C,e as N,r as u,ep as ee,o as te,b as ae,dC as se,eq as re,dL as oe,p as f,eb as ne,G as j,R as le,ee as w,aF as ie,dB as de,er as ce,dM as k,dK as O,dN as me,ef as ue,H as he}from"./index-lMp9zap6.js";import{u as F,E as pe}from"./error-block-DXWblvjp.js";import{u as xe}from"./useMutation-B2tKEkiI.js";import{C as ge}from"./custom-breadcrumbs-CnRCretL.js";import{u as je,g as ye,r as be,T as Ce,a as fe,e as ve}from"./table-selected-action-Cgn9qQis.js";import{T as we}from"./table-no-data-D5fgAy-Q.js";import{T as E,a as Se,b as Pe,c as De}from"./table-head-custom-BwAPFtwe.js";import{T as Te}from"./table-pagination-custom-sK7wTfre.js";import{A as S}from"./app-widget-summary-BHttn7Yj.js";import{b as q}from"./format-number-BW6JEF9q.js";import{C as Re}from"./confirm-dialog-CfE53hWp.js";import{T as g}from"./TableCell-ljoaX5oi.js";import{A as Le}from"./AvatarGroup-DL-rnc4_.js";import{T as Ie}from"./TextField-BEm0Gfgz.js";import{I as ke}from"./InputAdornment-CznJJWQj.js";import{S as Oe}from"./Select-DE7_tqxX.js";import{F as Ae,a as T,c as R}from"./filters-result-BnQFy5UF.js";import{C as L}from"./Chip-lc0vODcu.js";import"./order-payment-details-dialog-BTb-1qAv.js";import"./incrementer-button-iExNop-d.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-BfbryewD.js";import"./empty-content-v04S0NJf.js";import"./TablePagination-Dir7BHGy.js";import"./LastPage-B3GbPSnl.js";import"./InputBase-D6UR9yYG.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-CSqTNcaw.js";import"./use-chart-ClK5Zjjr.js";import"./chart-legends-CluWo5DV.js";import"./index-KeOEaw8h.js";import"./DialogContent-B0tqVN_s.js";import"./DialogTitle-BCkrw5VA.js";import"./FormControl-BFlCQpvi.js";import"./InputLabel-D2FT-Pcv.js";import"./FormLabel-CKyhTT_V.js";import"./FormHelperText-CiWaMPMf.js";import"./Menu-Di83eYAm.js";import"./form-provider-Cj0Z9UsE.js";import"./Rating-D1epoFLf.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-56m6PEpo.js";import"./index-DTyO1f1S.js";import"./Slider--FnFNgPJ.js";import"./RadioGroup-C-GnO1ca.js";import"./FormGroup-BE8TyzSB.js";import"./countries-DSLisFCy.js";import"./Autocomplete-DnVwYLlc.js";import"./country-select-DkXlsKd6.js";import"./upload-avatar-jEC4OtmL.js";import"./image-7Gw8g56m.js";import"./DatePicker-CRaT7_Tx.js";import"./ListItem-Eefms6HN.js";import"./MobileDateTimePicker-CghIhRUp.js";import"./schema-helper-DOzR5VHI.js";import"./LoadingButton-BI3VwLzw.js";import"./CircularProgress-CX5vuYgb.js";function Me({row:t,selected:r,onViewRow:a,onSelectRow:p,onDeleteRow:c}){var h;const d=I();console.log("---> row",t);const i=I(),l=H(),m=e.jsxs(E,{hover:!0,selected:r,children:[e.jsx(g,{children:e.jsx(W,{color:"inherit",onClick:a,underline:"always",sx:{cursor:"pointer"},children:t.id})}),e.jsx(g,{children:e.jsxs(P,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(A,{alt:t.customer.name,src:t.customer.avatar}),e.jsxs(P,{sx:{typography:"body2",flex:"1 1 auto",alignItems:"flex-start"},children:[e.jsx(D,{component:"span",children:t.customer.name}),e.jsx(D,{component:"span",sx:{color:"text.disabled"},children:t.customer.email})]})]})}),e.jsx(g,{children:e.jsx(M,{primary:J(t.orderDate),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(g,{align:"center",children:e.jsx(Le,{sx:{[`& .${V.avatar}`]:{width:24,height:24}},children:(h=t==null?void 0:t.productToOrder)==null?void 0:h.map(n=>{var x,y,v;return e.jsx(z,{title:`${(x=n==null?void 0:n.product)==null?void 0:x.name} | Quantity : ${n.quantity}`,children:e.jsx(A,{alt:(y=n==null?void 0:n.product)==null?void 0:y.name,src:`${K.site.serverFileHost}${(v=n==null?void 0:n.product)==null?void 0:v.image}`},n==null?void 0:n.id)})})})}),e.jsxs(g,{children:[" ",q(t.totalOrderAmount)," "]}),e.jsx(g,{children:e.jsx(U,{variant:"soft",color:t.status==="Ready"&&"info"||t.status==="InProcess"&&"warning"||t.status==="Delivered"&&"success"||"default",children:t.status})}),e.jsxs(g,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(B,{color:i.value?"inherit":"default",onClick:i.onToggle,sx:{...i.value&&{bgcolor:"action.hover"}},children:e.jsx(b,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(B,{color:l.open?"inherit":"default",onClick:l.onOpen,children:e.jsx(b,{icon:"eva:more-vertical-fill"})})]})]}),o=e.jsx(E,{children:e.jsx(g,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(_,{in:i.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(X,{sx:{m:1.5},children:t.productToOrder.map(n=>e.jsxs(P,{direction:"row",alignItems:"center",sx:{p:x=>x.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:x=>`solid 2px ${x.vars.palette.background.neutral}`}},children:[e.jsx(M,{primary:n.product.name,secondary:n.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs("div",{children:["x",n.quantity," "]}),e.jsx(D,{sx:{width:110,textAlign:"right"},children:q(n.product.price)})]},n.id))})})})});return e.jsxs(e.Fragment,{children:[m,o,e.jsx(Y,{open:l.open,anchorEl:l.anchorEl,onClose:l.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(Z,{children:[e.jsxs(C,{onClick:()=>{a(),l.onClose()},children:[e.jsx(b,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(C,{onClick:()=>{d.onTrue(),l.onClose()},sx:{color:"error.main"},children:[e.jsx(b,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})}),e.jsx(Re,{open:d.value,onClose:d.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(N,{variant:"contained",color:"error",onClick:c,children:"Delete"})})]})}function Be({filters:t,onResetPage:r}){const[a,p]=u.useState("all"),c=u.useCallback(i=>{r(),t.setState({name:i.target.value})},[t,r]),d=u.useCallback(i=>{r(),t.setState({status:i.target.value}),p(i.target.value)},[t,r]);return e.jsxs(P,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(Ie,{sx:{width:420},value:t.state.name,onChange:c,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(ke,{position:"start",children:e.jsx(b,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsxs(Oe,{sx:{width:420,textTransform:"capitalize"},value:a,onChange:d,children:[e.jsx(C,{value:"all",children:"All Orders"}),e.jsx(C,{value:"InProcess",children:"Processing"}),e.jsx(C,{value:"Ready",children:"Ready To Deliver"}),e.jsx(C,{value:"Delivered",children:"Delivered"})]})]})}function Fe({filters:t,totalResults:r,onResetPage:a,sx:p}){const c=u.useCallback(()=>{a(),t.setState({name:""})},[t,a]),d=u.useCallback(()=>{a(),t.setState({status:"all"})},[t,a]),i=u.useCallback(()=>{a(),t.setState({startDate:null,endDate:null})},[t,a]),l=u.useCallback(()=>{a(),t.onResetState()},[t,a]);return e.jsxs(Ae,{totalResults:r,onReset:l,sx:p,children:[e.jsx(T,{label:"Status:",isShow:t.state.status!=="all",children:e.jsx(L,{...R,label:t.state.status,onDelete:d,sx:{textTransform:"capitalize"}})}),e.jsx(T,{label:"Date:",isShow:!!(t.state.startDate&&t.state.endDate),children:e.jsx(L,{...R,label:ee(t.state.startDate,t.state.endDate),onDelete:i})}),e.jsx(T,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(L,{...R,label:t.state.name,onDelete:c})})]})}const Ee=[{id:"orderNumber",label:"#",width:88},{id:"name",label:"Customer"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Price",width:140},{id:"status",label:"Status",width:110},{id:"",width:88}];function qe({orders:t,analytics:r}){const a=je({defaultOrderBy:"orderId"}),p=te(),c=ae();I();const[d,i]=u.useState(()=>t),l=se({name:"",status:"all",startDate:null,endDate:null});u.useEffect(()=>{i(t)},[t]);const m=re(l.state.startDate,l.state.endDate),o=Ke({inputData:d,comparator:ye(a.order,a.orderBy),filters:l.state,dateError:m}),h=be(o,a.page,a.rowsPerPage),n=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate,x=!o.length&&n||!o.length,y=oe(),{mutate:v}=xe({mutationFn:s=>k.delete(O.order.delete+s),onSuccess:async()=>{const s=d.filter(G=>G.id!==id);me.success("Delete success!"),i(s),a.onUpdatePageDeleteRow(h.length)},onSettled:async()=>{await y.invalidateQueries({queryKey:["orders"]}),await y.invalidateQueries({queryKey:["orders-status"]}),await y.invalidateQueries({queryKey:["orders","analytics"]})},onError:()=>{}}),Q=u.useCallback(s=>{v(s)},[h.length,a,d]),$=u.useCallback(s=>{p.replace(f.dashboard.order.details(s))},[p]);return e.jsx(ne,{maxWidth:"xl",children:e.jsxs(j,{container:!0,spacing:3,children:[e.jsx(j,{xs:12,md:12,children:e.jsx(ge,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Order",href:f.dashboard.order.root},{name:"List"}],action:e.jsx(N,{component:le,href:f.dashboard.order.new,variant:"contained",startIcon:e.jsx(b,{icon:"mingcute:add-line"}),children:"New Order"})})}),e.jsx(j,{xs:12,md:3,children:e.jsx(S,{title:"All Orders",total:t.length,chart:{categories:r.data.lastSixMonth.map(s=>w(s==null?void 0:s.inMonth)),series:r.data.lastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(j,{xs:12,md:3,children:e.jsx(S,{title:"Processing Order",total:r.data.analytics.InProcess,chart:{colors:[c.vars.palette.warning.light],categories:r.data.inProcessLastSixMonth.map(s=>w(s==null?void 0:s.inMonth)),series:r.data.inProcessLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(j,{xs:12,md:3,children:e.jsx(S,{title:"Ready To Deliver Order",total:r.data.analytics.Ready,chart:{colors:[c.vars.palette.info.main],categories:r.data.readyLastSixMonth.map(s=>w(s==null?void 0:s.inMonth)),series:r.data.readyLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(j,{xs:12,md:3,children:e.jsx(S,{title:"Delivered",total:r.data.analytics.Delivered,chart:{colors:[c.vars.palette.success.main],categories:r.data.deliveredLastSixMonth.map(s=>w(s==null?void 0:s.inMonth)),series:r.data.deliveredLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(j,{xs:12,md:12,children:e.jsxs(ie,{children:[e.jsx(Be,{filters:l,onResetPage:a.onResetPage,dateError:m}),n&&e.jsx(Fe,{filters:l,totalResults:o.length,onResetPage:a.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(D,{sx:{position:"relative"},children:[e.jsx(Ce,{dense:a.dense,numSelected:a.selected.length,rowCount:o.length}),e.jsx(de,{sx:{minHeight:444},children:e.jsxs(Se,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Pe,{order:a.order,orderBy:a.orderBy,headLabel:Ee,rowCount:o.length}),e.jsxs(De,{children:[o.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(s=>e.jsx(Me,{row:s,selected:a.selected.includes(s.id),onSelectRow:()=>a.onSelectRow(s.id),onDeleteRow:()=>Q(s.id),onViewRow:()=>$(s.id)},s.id)),e.jsx(fe,{height:a.dense?56:76,emptyRows:ve(a.page,a.rowsPerPage,o.length)}),e.jsx(we,{notFound:x})]})]})})]}),e.jsx(Te,{page:a.page,dense:a.dense,count:o.length,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onChangeDense:a.onChangeDense,onRowsPerPageChange:a.onChangeRowsPerPage})]})})]})})}function Ke({inputData:t,comparator:r,filters:a,dateError:p}){const{status:c,name:d,startDate:i,endDate:l}=a,m=t==null?void 0:t.map((o,h)=>[o,h]);return m==null||m.sort((o,h)=>{const n=r(o[0],h[0]);return n!==0?n:o[1]-h[1]}),t=m==null?void 0:m.map(o=>o[0]),d&&(t=t.filter(o=>o.id.toString().toLowerCase().indexOf(d.toLowerCase())!==-1||o.customer.name.toLowerCase().indexOf(d.toLowerCase())!==-1||o.customer.email.toLowerCase().indexOf(d.toLowerCase())!==-1)),c!=="all"&&(t=t.filter(o=>o.status===c)),p||i&&l&&(t=t.filter(o=>ce(o.createTime,i,l))),t}const Ne={title:`Order list | Dashboard - ${K.site.name}`};function Vt(){const t=F({queryKey:["orders"],queryFn:async()=>{const{data:a}=await k.get(O.order.list);return a}}),r=F({queryKey:["orders","analytics"],queryFn:async()=>{const{data:a}=await k.get(O.order.analytics);return a}});return r.isLoading||t.isLoading?e.jsx(ue,{}):t.isError||r.isError?e.jsx(pe,{route:f.dashboard.order.root}):e.jsxs(e.Fragment,{children:[e.jsx(he,{children:e.jsxs("title",{children:[" ",Ne.title]})}),e.jsx(qe,{orders:t.data,analytics:r})]})}export{Vt as default};