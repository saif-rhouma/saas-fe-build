import{j as e,aH as S,r as d,bb as P,S as j,I as b,b8 as x,de as R,ec as v,dP as I,p as g,aB as N,B as f,e2 as y,e as C,em as k,ed as B,dT as E,H as A,C as L,dp as F,dm as Y}from"./index-zyulwKWD.js";import{u as O,E as w}from"./error-block-DYjvCFbe.js";import{C as H}from"./custom-breadcrumbs-DHj4Ok4N.js";import{P as T}from"./permission-access-controller-DC3hx7Nz.js";import{g as M,e as q}from"./utils-MBUcMVfY.js";import{u as G}from"./use-table-Bf_i8STO.js";import{T as z}from"./table-no-data-CWIOpu1y.js";import{T as Q}from"./table-empty-rows-BLFiUyUG.js";import{T as W,a as _,b as K,c as $}from"./table-head-custom-C5tz8LbQ.js";import{T as J}from"./table-selected-action-DlyVr8QY.js";import{T as U}from"./table-pagination-custom-Bj-7BC4s.js";import{T as h}from"./TableCell-DS8DZ5wT.js";import{T as V}from"./TextField-CwPpTqRa.js";import{I as X}from"./InputAdornment-BErxhCkp.js";import{D}from"./DatePicker-B07m1huX.js";import{S as Z}from"./Select-D9XKSxr2.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-jT1oSNS2.js";import"./Checkbox-B2T2mhgd.js";import"./TablePagination-BV8oey5N.js";import"./KeyboardArrowRight-HkDaFki2.js";import"./LastPage-jJvTp2Lh.js";import"./InputBase-Cb1ycHRk.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-krtCXPG7.js";import"./FormControl-DkR47KrL.js";import"./InputLabel-Dxqp6-8F.js";import"./FormLabel-C6u8Qb2i.js";import"./FormHelperText-DXYAPhzx.js";import"./index-WuVNPZZI.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-CrSIuYBM.js";import"./ListItem-uUR6JM6K.js";import"./Chip-hUCBEcuv.js";import"./Menu-DQMDyUDh.js";const ee=({row:t,selected:a})=>{var c;const m=e.jsxs(W,{hover:!0,selected:a,children:[e.jsx(h,{children:S(t==null?void 0:t.planDate)}),e.jsx(h,{children:t==null?void 0:t.ref}),e.jsx(h,{children:(c=t==null?void 0:t.product)==null?void 0:c.name}),e.jsx(h,{children:t==null?void 0:t.quantity}),e.jsx(h,{children:t==null?void 0:t.status})]});return e.jsx(e.Fragment,{children:m})};function te({filters:t,onResetPage:a}){const[m,c]=d.useState("all");d.useState(P()),d.useState(P());const r=d.useCallback(o=>{a(),t.setState({name:o.target.value})},[t,a]),l=d.useCallback(o=>{a(),t.setState({status:o.target.value}),c(o.target.value)},[t,a]),n=d.useCallback(o=>{a(),t.setState({startDate:o})},[t,a]),p=d.useCallback(o=>{a(),t.setState({endDate:o})},[t,a]);return e.jsxs(j,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(V,{sx:{flexGrow:1},value:t.state.name,onChange:r,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(X,{position:"start",children:e.jsx(b,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(D,{label:"Start Date",sx:{flexGrow:1},format:"DD/MM/YYYY",value:t.state.startDate,onChange:n}),e.jsx(D,{label:"End Date",sx:{flexGrow:1},value:t.state.endDate,onChange:p,format:"DD/MM/YYYY"}),e.jsxs(Z,{sx:{width:420,textTransform:"capitalize"},value:m,onChange:l,children:[e.jsx(x,{value:"all",children:"All Plans"}),e.jsx(x,{value:"Pending",children:"Pending"}),e.jsx(x,{value:"ProcessingA",children:"Processing-A"}),e.jsx(x,{value:"ProcessingB",children:"Processing-B"}),e.jsx(x,{value:"Ready",children:"Ready"})]})]})}const ae=[{id:"date",label:"Date",width:300},{id:"planId",label:"Plan Id"},{id:"productName",label:"Product Name"},{id:"orderAmount",label:"Product QTY"},{id:"status",label:"Status"}],se=({plans:t})=>{const a=G({defaultOrderBy:"orderNumber"}),[m,c]=d.useState(t),r=R({name:"",status:"all",startDate:null,endDate:null}),l=v(r.state.startDate,r.state.endDate),n=re({inputData:m,comparator:M(a.order,a.orderBy),filters:r.state,dateError:l}),p=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate,o=!n.length&&p||!n.length,s=[{displayName:"Date",key:"planDate"},{displayName:"Plan Ref",key:"ref"},{displayName:"Product Name",key:"name"},{displayName:"Product QTY",key:"quantity"},{displayName:"Status",key:"status"}];return e.jsx(I,{maxWidth:"xl",children:e.jsxs(j,{spacing:3,children:[e.jsx(H,{links:[{name:"Dashboard",href:g.dashboard.root},{name:"Reports",href:g.dashboard.reports.root},{name:"Plan Report",href:g.dashboard.reports.plan}]}),e.jsxs(N,{children:[e.jsx(te,{filters:r,onResetPage:a.onResetPage,dateError:l}),e.jsxs(f,{sx:{position:"relative"},children:[e.jsx(J,{dense:a.dense,numSelected:a.selected.length,rowCount:n.length}),e.jsxs(_,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(K,{order:a.order,orderBy:a.orderBy,headLabel:ae,rowCount:n.length}),e.jsxs($,{children:[n.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(i=>e.jsx(ee,{row:i,selected:a.selected.includes(i.id)},i.id)),e.jsx(Q,{height:a.dense?56:76,emptyRows:q(a.page,a.rowsPerPage,n.length)}),e.jsx(z,{notFound:o})]})]})]}),e.jsx(U,{className:"print-hide",page:a.page,count:n.length,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage}),e.jsx(f,{children:e.jsx(j,{direction:"row",justifyContent:"flex-end",sx:{p:3,typography:"body2"},children:e.jsx(f,{children:e.jsxs(j,{direction:"row",spacing:1,children:[e.jsx(T,{permission:y.DOWNLOAD_REPORT,children:e.jsx(C,{onClick:()=>{k("plan reports",s,n.map(i=>{var u;return{...i,name:(u=i==null?void 0:i.product)==null?void 0:u.name}}),"Stock")},variant:"contained",startIcon:e.jsx(b,{icon:"mdi:microsoft-excel"}),children:"Download Report"})}),e.jsx(T,{permission:y.PRINT_REPORT,children:e.jsx(C,{variant:"outlined",startIcon:e.jsx(b,{icon:"solar:printer-minimalistic-bold"}),children:"Print Report"})})]})})})})]})]})})};function re({inputData:t,comparator:a,filters:m,dateError:c}){const{status:r,name:l,startDate:n,endDate:p}=m,o=t.map((s,i)=>[s,i]);return o.sort((s,i)=>{const u=a(s[0],i[0]);return u!==0?u:s[1]-i[1]}),t=o.map(s=>s[0]),l&&(t=t.filter(s=>s.orderNumber.toLowerCase().indexOf(l.toLowerCase())!==-1||s.customer.name.toLowerCase().indexOf(l.toLowerCase())!==-1||s.customer.email.toLowerCase().indexOf(l.toLowerCase())!==-1)),r!=="all"&&(t=t.filter(s=>s.status===r)),c||n&&p&&(t=t.filter(s=>B(s.planDate,n,p))),t}const ne={title:`Reports list | Dashboard - ${L.site.name}`};function Qe(){const t=O({queryKey:["plans"],queryFn:async()=>{const{data:a}=await F.get(Y.plan.list);return a}});return t.isPending||t.isLoading?e.jsx(E,{}):t.isError?e.jsx(w,{route:g.dashboard.reports.root}):e.jsxs(e.Fragment,{children:[e.jsx(A,{children:e.jsxs("title",{children:[" ",ne.title]})}),e.jsx(se,{plans:t.data})]})}export{Qe as default};
