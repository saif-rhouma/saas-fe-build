import{w as R,bG as H,j as e,L as G,S as C,A as W,B as f,aK as k,aL as J,du as V,y as O,I as j,dj as $,aB as z,dz as U,bI as _,bJ as y,e as M,r as p,ep as X,o as Y,b as Z,dC as ee,eq as te,dL as ae,p as b,eb as se,G as g,R as re,ee as v,aF as oe,dB as ne,er as le,dM as L,dK as I,dN as ie,ef as de,H as ce,C as me}from"./index-DLJImauo.js";import{u as A,E as pe}from"./error-block-CpNyIBSO.js";import{u as ue}from"./useMutation-7HTcUz2p.js";import{C as he}from"./custom-breadcrumbs-B-49wW2q.js";import{u as xe,g as ge,r as je,T as ye,a as be,e as Ce}from"./table-selected-action-G55M8q3B.js";import{T as fe}from"./table-no-data-BuIBt0E2.js";import{T as B,a as we,b as ve,c as Se}from"./table-head-custom-D67vLreu.js";import{T as Pe}from"./table-pagination-custom-DVAvwLQu.js";import{A as S}from"./app-widget-summary-B9An4do9.js";import{b as F}from"./format-number-Be330NDU.js";import{C as De}from"./confirm-dialog-DT3hav7C.js";import{T as x}from"./TableCell-BVBgA4hr.js";import{T as Te}from"./TextField-Dn-4Yx6H.js";import{I as Re}from"./InputAdornment-DKC0KPnD.js";import{S as Le}from"./Select-C24IVDgk.js";import{F as Ie,a as P,c as D}from"./filters-result-qqMNs2nn.js";import{C as T}from"./Chip-B_i8-SK5.js";import"./order-payment-details-dialog-BtdLOhBK.js";import"./incrementer-button-zlyzDSeh.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-iCj-brcW.js";import"./empty-content-C2NUDuUr.js";import"./TablePagination-DOC7uPQD.js";import"./LastPage-DlgH9h-y.js";import"./InputBase-DlzL5OFi.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-C_QV2Cmj.js";import"./use-chart-sEgpf8ut.js";import"./chart-legends-DAbS-TEE.js";import"./index-CVIDvc2K.js";import"./DialogContent-DDfVnIX5.js";import"./DialogTitle-BO1ue4do.js";import"./FormControl-CkwXYy0A.js";import"./InputLabel-CEebhHey.js";import"./FormLabel-CL79af0c.js";import"./FormHelperText-kKfXHIoW.js";import"./Menu-u9Fg2yBB.js";import"./form-provider-CFcdla9F.js";import"./countries-DSLisFCy.js";import"./upload-avatar-6dytMmax.js";import"./image-BZDZbX9M.js";import"./fields-BliOQ6O0.js";import"./Rating-FzotwsHz.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-Cv_jl3Bs.js";import"./index-B2cAHtCt.js";import"./Slider-0xmJrVsO.js";import"./RadioGroup-C3COSxFX.js";import"./FormGroup-vDyIqZ9l.js";import"./Autocomplete-BlHa76y8.js";import"./country-select-CN1OaNL9.js";import"./DatePicker-D6XSSTkA.js";import"./ListItem-BofKFpgJ.js";import"./MobileDateTimePicker-CdN8K0hT.js";import"./schema-helper-DVDjQj-t.js";import"./LoadingButton-0fR1pVna.js";import"./CircularProgress-DCo-b5qy.js";function ke({row:t,selected:o,onViewRow:a,onSelectRow:u,onDeleteRow:c}){const i=R(),l=R(),n=H(),m=e.jsxs(B,{hover:!0,selected:o,children:[e.jsx(x,{children:e.jsx(G,{color:"inherit",onClick:a,underline:"always",sx:{cursor:"pointer"},children:t.id})}),e.jsx(x,{children:e.jsxs(C,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(W,{alt:t.customer.name,src:t.customer.avatar}),e.jsxs(C,{sx:{typography:"body2",flex:"1 1 auto",alignItems:"flex-start"},children:[e.jsx(f,{component:"span",children:t.customer.name}),e.jsx(f,{component:"span",sx:{color:"text.disabled"},children:t.customer.email})]})]})}),e.jsx(x,{children:e.jsx(k,{primary:J(t.orderDate),primaryTypographyProps:{typography:"body2",noWrap:!0},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsxs(x,{align:"center",children:[" ",t.totalOrderAmount," "]}),e.jsxs(x,{children:[" ",F(t.totalOrderAmount)," "]}),e.jsx(x,{children:e.jsx(V,{variant:"soft",color:t.status==="Ready"&&"info"||t.status==="InProcess"&&"warning"||t.status==="Delivered"&&"success"||"default",children:t.status})}),e.jsxs(x,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(O,{color:l.value?"inherit":"default",onClick:l.onToggle,sx:{...l.value&&{bgcolor:"action.hover"}},children:e.jsx(j,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(O,{color:n.open?"inherit":"default",onClick:n.onOpen,children:e.jsx(j,{icon:"eva:more-vertical-fill"})})]})]}),r=e.jsx(B,{children:e.jsx(x,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx($,{in:l.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(z,{sx:{m:1.5},children:t.productToOrder.map(d=>e.jsxs(C,{direction:"row",alignItems:"center",sx:{p:h=>h.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:h=>`solid 2px ${h.vars.palette.background.neutral}`}},children:[e.jsx(k,{primary:d.product.name,secondary:d.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs("div",{children:["x",d.quantity," "]}),e.jsx(f,{sx:{width:110,textAlign:"right"},children:F(d.product.price)})]},d.id))})})})});return e.jsxs(e.Fragment,{children:[m,r,e.jsx(U,{open:n.open,anchorEl:n.anchorEl,onClose:n.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(_,{children:[e.jsxs(y,{onClick:()=>{a(),n.onClose()},children:[e.jsx(j,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(y,{onClick:()=>{i.onTrue(),n.onClose()},sx:{color:"error.main"},children:[e.jsx(j,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})}),e.jsx(De,{open:i.value,onClose:i.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(M,{variant:"contained",color:"error",onClick:c,children:"Delete"})})]})}function Oe({filters:t,onResetPage:o}){const[a,u]=p.useState("all"),c=p.useCallback(l=>{o(),t.setState({name:l.target.value})},[t,o]),i=p.useCallback(l=>{o(),t.setState({status:l.target.value}),u(l.target.value)},[t,o]);return e.jsxs(C,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(Te,{sx:{width:420},value:t.state.name,onChange:c,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(Re,{position:"start",children:e.jsx(j,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsxs(Le,{sx:{width:420,textTransform:"capitalize"},value:a,onChange:i,children:[e.jsx(y,{value:"all",children:"All Orders"}),e.jsx(y,{value:"InProcess",children:"Processing"}),e.jsx(y,{value:"Ready",children:"Ready To Deliver"}),e.jsx(y,{value:"Delivered",children:"Delivered"})]})]})}function Ae({filters:t,totalResults:o,onResetPage:a,sx:u}){const c=p.useCallback(()=>{a(),t.setState({name:""})},[t,a]),i=p.useCallback(()=>{a(),t.setState({status:"all"})},[t,a]),l=p.useCallback(()=>{a(),t.setState({startDate:null,endDate:null})},[t,a]),n=p.useCallback(()=>{a(),t.onResetState()},[t,a]);return e.jsxs(Ie,{totalResults:o,onReset:n,sx:u,children:[e.jsx(P,{label:"Status:",isShow:t.state.status!=="all",children:e.jsx(T,{...D,label:t.state.status,onDelete:i,sx:{textTransform:"capitalize"}})}),e.jsx(P,{label:"Date:",isShow:!!(t.state.startDate&&t.state.endDate),children:e.jsx(T,{...D,label:X(t.state.startDate,t.state.endDate),onDelete:l})}),e.jsx(P,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(T,{...D,label:t.state.name,onDelete:c})})]})}const Be=[{id:"orderNumber",label:"#",width:88},{id:"name",label:"Customer"},{id:"createdAt",label:"Date",width:140},{id:"totalQuantity",label:"Items",width:120,align:"center"},{id:"totalAmount",label:"Price",width:140},{id:"status",label:"Status",width:110},{id:"",width:88}];function Fe({orders:t,analytics:o}){const a=xe({defaultOrderBy:"orderId"}),u=Y(),c=Z();R();const[i,l]=p.useState(()=>t),n=ee({name:"",status:"all",startDate:null,endDate:null});p.useEffect(()=>{l(t)},[t]);const m=te(n.state.startDate,n.state.endDate),r=Me({inputData:i,comparator:ge(a.order,a.orderBy),filters:n.state,dateError:m}),d=je(r,a.page,a.rowsPerPage),h=!!n.state.name||n.state.status!=="all"||!!n.state.startDate&&!!n.state.endDate,E=!r.length&&h||!r.length,w=ae(),{mutate:q}=ue({mutationFn:s=>L.delete(I.order.delete+s),onSuccess:async()=>{const s=i.filter(Q=>Q.id!==id);ie.success("Delete success!"),l(s),a.onUpdatePageDeleteRow(d.length)},onSettled:async()=>{await w.invalidateQueries({queryKey:["orders"]}),await w.invalidateQueries({queryKey:["orders-status"]}),await w.invalidateQueries({queryKey:["orders","analytics"]})},onError:()=>{}}),K=p.useCallback(s=>{q(s)},[d.length,a,i]),N=p.useCallback(s=>{u.push(b.dashboard.order.details(s))},[u]);return e.jsx(se,{maxWidth:"xl",children:e.jsxs(g,{container:!0,spacing:3,children:[e.jsx(g,{xs:12,md:12,children:e.jsx(he,{links:[{name:"Dashboard",href:b.dashboard.root},{name:"Order",href:b.dashboard.order.root},{name:"List"}],action:e.jsx(M,{component:re,href:b.dashboard.order.new,variant:"contained",startIcon:e.jsx(j,{icon:"mingcute:add-line"}),children:"New Order"})})}),e.jsx(g,{xs:12,md:4,children:e.jsx(S,{title:"All Orders",total:t.length,chart:{categories:o.data.lastSixMonth.map(s=>v(s==null?void 0:s.inMonth)),series:o.data.lastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(g,{xs:12,md:4,children:e.jsx(S,{title:"Processing Order",total:o.data.analytics.InProcess,chart:{colors:[c.vars.palette.info.main],categories:o.data.inProcessLastSixMonth.map(s=>v(s==null?void 0:s.inMonth)),series:o.data.inProcessLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(g,{xs:12,md:4,children:e.jsx(S,{title:"Delivered",total:o.data.analytics.Delivered,chart:{colors:[c.vars.palette.error.main],categories:o.data.deliveredLastSixMonth.map(s=>v(s==null?void 0:s.inMonth)),series:o.data.deliveredLastSixMonth.map(s=>s==null?void 0:s.ClaimsPerMonth)}})}),e.jsx(g,{xs:12,md:12,children:e.jsxs(oe,{children:[e.jsx(Oe,{filters:n,onResetPage:a.onResetPage,dateError:m}),h&&e.jsx(Ae,{filters:n,totalResults:r.length,onResetPage:a.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(f,{sx:{position:"relative"},children:[e.jsx(ye,{dense:a.dense,numSelected:a.selected.length,rowCount:r.length}),e.jsx(ne,{sx:{minHeight:444},children:e.jsxs(we,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(ve,{order:a.order,orderBy:a.orderBy,headLabel:Be,rowCount:r.length}),e.jsxs(Se,{children:[r.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(s=>e.jsx(ke,{row:s,selected:a.selected.includes(s.id),onSelectRow:()=>a.onSelectRow(s.id),onDeleteRow:()=>K(s.id),onViewRow:()=>N(s.id)},s.id)),e.jsx(be,{height:a.dense?56:76,emptyRows:Ce(a.page,a.rowsPerPage,r.length)}),e.jsx(fe,{notFound:E})]})]})})]}),e.jsx(Pe,{page:a.page,dense:a.dense,count:r.length,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onChangeDense:a.onChangeDense,onRowsPerPageChange:a.onChangeRowsPerPage})]})})]})})}function Me({inputData:t,comparator:o,filters:a,dateError:u}){const{status:c,name:i,startDate:l,endDate:n}=a,m=t==null?void 0:t.map((r,d)=>[r,d]);return m==null||m.sort((r,d)=>{const h=o(r[0],d[0]);return h!==0?h:r[1]-d[1]}),t=m==null?void 0:m.map(r=>r[0]),i&&(t=t.filter(r=>r.id.toString().toLowerCase().indexOf(i.toLowerCase())!==-1||r.customer.name.toLowerCase().indexOf(i.toLowerCase())!==-1||r.customer.email.toLowerCase().indexOf(i.toLowerCase())!==-1)),c!=="all"&&(t=t.filter(r=>r.status===c)),u||l&&n&&(t=t.filter(r=>le(r.createTime,l,n))),t}const Ee={title:`Order list | Dashboard - ${me.site.name}`};function Wt(){const t=A({queryKey:["orders"],queryFn:async()=>{const{data:a}=await L.get(I.order.list);return a}}),o=A({queryKey:["orders","analytics"],queryFn:async()=>{const{data:a}=await L.get(I.order.analytics);return a}});return o.isLoading||t.isLoading?e.jsx(de,{}):t.isError||o.isError?e.jsx(pe,{route:b.dashboard.order.root}):e.jsxs(e.Fragment,{children:[e.jsx(ce,{children:e.jsxs("title",{children:[" ",Ee.title]})}),e.jsx(Fe,{orders:t.data,analytics:o})]})}export{Wt as default};
