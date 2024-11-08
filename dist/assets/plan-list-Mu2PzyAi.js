import{j as e,d0 as S,r as d,aW as P,S as j,I as b,aS as x,de as R,e2 as v,dP as I,p as g,cY as N,B as f,e3 as y,e as C,ep as k,eh as B,dT as E,H as A,C as L,dp as F,dm as Y}from"./index-CRVB8F69.js";import{u as O,E as w}from"./error-block-0lRJvl3b.js";import{C as M}from"./custom-breadcrumbs-CBgeVjCX.js";import{P as T}from"./permission-access-controller-JLlhlfLg.js";import{g as q,e as G}from"./utils-MBUcMVfY.js";import{u as H}from"./use-table-CgXGbbdg.js";import{T as W}from"./table-no-data-BjqYjk_q.js";import{T as z}from"./table-empty-rows-CdRbocQm.js";import{T as Q,a as _,b as K,c as $}from"./table-head-custom-CJzwho5G.js";import{T as J}from"./table-selected-action-CFYY2Q0A.js";import{T as U}from"./table-pagination-custom-CDd_FCi-.js";import{T as h}from"./TableCell-DefBsglL.js";import{T as V}from"./TextField-a9VrXvMJ.js";import{I as X}from"./InputAdornment-6EHLKwyL.js";import{D}from"./DatePicker-CB0DQzBJ.js";import{S as Z}from"./Select-BWwgXsU9.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-C8ZIgpvp.js";import"./Checkbox-ge_l6EJ8.js";import"./TablePagination-Ir8mqBBY.js";import"./KeyboardArrowRight-Bdp-RYnm.js";import"./LastPage-DtHFBiqB.js";import"./InputBase-DWgInsnL.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-cTtCu-eQ.js";import"./FormControl-CFmGE2-k.js";import"./InputLabel-CixZ_02K.js";import"./FormLabel-OtvxlZPN.js";import"./FormHelperText-BjyTaFTe.js";import"./index-xSFMErMk.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-DTWdpBHx.js";import"./ListItem-Dj4qJ_SH.js";import"./Chip-C0F9v8Yk.js";import"./Menu-BM961z0Q.js";const ee=({row:t,selected:a})=>{var m;const c=e.jsxs(Q,{hover:!0,selected:a,children:[e.jsx(h,{children:S(t==null?void 0:t.planDate)}),e.jsx(h,{children:t==null?void 0:t.ref}),e.jsx(h,{children:(m=t==null?void 0:t.product)==null?void 0:m.name}),e.jsx(h,{children:t==null?void 0:t.quantity}),e.jsx(h,{children:t==null?void 0:t.status})]});return e.jsx(e.Fragment,{children:c})};function te({filters:t,onResetPage:a}){const[c,m]=d.useState("all");d.useState(P()),d.useState(P());const r=d.useCallback(o=>{a(),t.setState({name:o.target.value})},[t,a]),l=d.useCallback(o=>{a(),t.setState({status:o.target.value}),m(o.target.value)},[t,a]),n=d.useCallback(o=>{a(),t.setState({startDate:o})},[t,a]),p=d.useCallback(o=>{a(),t.setState({endDate:o})},[t,a]);return e.jsxs(j,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(V,{sx:{flexGrow:1},value:t.state.name,onChange:r,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(X,{position:"start",children:e.jsx(b,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(D,{label:"Start Date",sx:{flexGrow:1},format:"DD/MM/YYYY",value:t.state.startDate,onChange:n}),e.jsx(D,{label:"End Date",sx:{flexGrow:1},value:t.state.endDate,onChange:p,format:"DD/MM/YYYY"}),e.jsxs(Z,{sx:{width:420,textTransform:"capitalize"},value:c,onChange:l,children:[e.jsx(x,{value:"all",children:"All Plans"}),e.jsx(x,{value:"Pending",children:"Pending"}),e.jsx(x,{value:"ProcessingA",children:"Processing-A"}),e.jsx(x,{value:"ProcessingB",children:"Processing-B"}),e.jsx(x,{value:"Ready",children:"Ready"})]})]})}const ae=[{id:"date",label:"Date",width:300},{id:"planId",label:"Plan Id"},{id:"productName",label:"Product Name"},{id:"orderAmount",label:"Product QTY"},{id:"status",label:"Status"}],se=({plans:t})=>{const a=H({defaultOrderBy:"orderNumber"}),[c,m]=d.useState(t),r=R({name:"",status:"all",startDate:null,endDate:null}),l=v(r.state.startDate,r.state.endDate),n=re({inputData:c,comparator:q(a.order,a.orderBy),filters:r.state,dateError:l}),p=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate,o=!n.length&&p||!n.length,s=[{displayName:"Date",key:"planDate"},{displayName:"Plan Ref",key:"ref"},{displayName:"Product Name",key:"name"},{displayName:"Product QTY",key:"quantity"},{displayName:"Status",key:"status"}];return e.jsx(I,{maxWidth:"xl",children:e.jsxs(j,{spacing:3,children:[e.jsx(M,{links:[{name:"Dashboard",href:g.dashboard.root},{name:"Reports",href:g.dashboard.reports.root},{name:"Plan Report",href:g.dashboard.reports.plan}]}),e.jsxs(N,{children:[e.jsx(te,{filters:r,onResetPage:a.onResetPage,dateError:l}),e.jsxs(f,{sx:{position:"relative"},children:[e.jsx(J,{dense:a.dense,numSelected:a.selected.length,rowCount:n.length}),e.jsxs(_,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(K,{order:a.order,orderBy:a.orderBy,headLabel:ae,rowCount:n.length}),e.jsxs($,{children:[n.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(i=>e.jsx(ee,{row:i,selected:a.selected.includes(i.id)},i.id)),e.jsx(z,{height:a.dense?56:76,emptyRows:G(a.page,a.rowsPerPage,n.length)}),e.jsx(W,{notFound:o})]})]})]}),e.jsx(U,{className:"print-hide",page:a.page,count:n.length,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage}),e.jsx(f,{children:e.jsx(j,{direction:"row",justifyContent:"flex-end",sx:{p:3,typography:"body2"},children:e.jsx(f,{children:e.jsxs(j,{direction:"row",spacing:1,children:[e.jsx(T,{permission:y.DOWNLOAD_REPORT,children:e.jsx(C,{onClick:()=>{k("plan reports",s,n.map(i=>{var u;return{...i,name:(u=i==null?void 0:i.product)==null?void 0:u.name}}),"Stock")},variant:"contained",startIcon:e.jsx(b,{icon:"mdi:microsoft-excel"}),children:"Download Report"})}),e.jsx(T,{permission:y.PRINT_REPORT,children:e.jsx(C,{variant:"outlined",startIcon:e.jsx(b,{icon:"solar:printer-minimalistic-bold"}),children:"Print Report"})})]})})})})]})]})})};function re({inputData:t,comparator:a,filters:c,dateError:m}){const{status:r,name:l,startDate:n,endDate:p}=c,o=t.map((s,i)=>[s,i]);return o.sort((s,i)=>{const u=a(s[0],i[0]);return u!==0?u:s[1]-i[1]}),t=o.map(s=>s[0]),l&&(t=t.filter(s=>s.orderNumber.toLowerCase().indexOf(l.toLowerCase())!==-1||s.customer.name.toLowerCase().indexOf(l.toLowerCase())!==-1||s.customer.email.toLowerCase().indexOf(l.toLowerCase())!==-1)),r!=="all"&&(t=t.filter(s=>s.status===r)),m||n&&p&&(t=t.filter(s=>B(s.planDate,n,p))),t}const ne={title:`Reports list | Dashboard - ${L.site.name}`};function ze(){const t=O({queryKey:["plans"],queryFn:async()=>{const{data:a}=await F.get(Y.plan.list);return a}});return t.isPending||t.isLoading?e.jsx(E,{}):t.isError?e.jsx(w,{route:g.dashboard.reports.root}):e.jsxs(e.Fragment,{children:[e.jsx(A,{children:e.jsxs("title",{children:[" ",ne.title]})}),e.jsx(se,{plans:t.data})]})}export{ze as default};
