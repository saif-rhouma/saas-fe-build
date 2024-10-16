import{j as e,aH as S,r as d,bc as y,S as j,I as g,b9 as x,dd as R,e4 as v,dP as I,p as f,aB as k,B as b,e2 as P,e as D,ef as B,e5 as N,dT as E,H as A,C as L,dn as F,dl as Y}from"./index-CDcUgrfM.js";import{u as O,E as H}from"./error-block-XWJxuTVo.js";import{C as M}from"./custom-breadcrumbs-BL_vTuJF.js";import{P as T}from"./permission-access-controller-B0kKncHG.js";import{g as q,e as G}from"./utils-MBUcMVfY.js";import{u as w}from"./use-table-DeUiAFAo.js";import{T as z}from"./table-no-data-CiCQCRXO.js";import{T as Q}from"./table-empty-rows-sfVkS9z1.js";import{T as W,a as _,b as K,c as $}from"./table-head-custom-29joC1Qk.js";import{T as J}from"./table-selected-action-DFuq6e6C.js";import{T as h}from"./TableCell-F7WbLTEO.js";import{T as U}from"./TextField-BuUBnZDj.js";import{I as V}from"./InputAdornment-C4RBZEHJ.js";import{D as C}from"./DatePicker-D6wu5-8l.js";import{S as X}from"./Select-BZojGQgr.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-DrRsvASf.js";import"./Checkbox-BxyuHg5r.js";import"./FormControl-C7WzToVA.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DFNFmoZn.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-e37nWMJI.js";import"./FormHelperText-CpMJHbvL.js";import"./index-DkkRrZbX.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-B3AK0H-W.js";import"./ListItem-D2_hmcct.js";import"./Chip-CVtkDWmm.js";import"./Menu--HgoqF6K.js";import"./InputBase-jbxmQqqV.js";const Z=({row:t,selected:a})=>{var m;const c=e.jsxs(W,{hover:!0,selected:a,children:[e.jsx(h,{children:S(t==null?void 0:t.planDate)}),e.jsx(h,{children:t==null?void 0:t.ref}),e.jsx(h,{children:(m=t==null?void 0:t.product)==null?void 0:m.name}),e.jsx(h,{children:t==null?void 0:t.quantity}),e.jsx(h,{children:t==null?void 0:t.status})]});return e.jsx(e.Fragment,{children:c})};function ee({filters:t,onResetPage:a}){const[c,m]=d.useState("all");d.useState(y()),d.useState(y());const r=d.useCallback(n=>{a(),t.setState({name:n.target.value})},[t,a]),i=d.useCallback(n=>{a(),t.setState({status:n.target.value}),m(n.target.value)},[t,a]),l=d.useCallback(n=>{a(),t.setState({startDate:n})},[t,a]),p=d.useCallback(n=>{a(),t.setState({endDate:n})},[t,a]);return e.jsxs(j,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(U,{sx:{flexGrow:1},value:t.state.name,onChange:r,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(V,{position:"start",children:e.jsx(g,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(C,{label:"Start Date",sx:{flexGrow:1},format:"DD/MM/YYYY",value:t.state.startDate,onChange:l}),e.jsx(C,{label:"End Date",sx:{flexGrow:1},value:t.state.endDate,onChange:p,format:"DD/MM/YYYY"}),e.jsxs(X,{sx:{width:420,textTransform:"capitalize"},value:c,onChange:i,children:[e.jsx(x,{value:"all",children:"All Plans"}),e.jsx(x,{value:"Pending",children:"Pending"}),e.jsx(x,{value:"ProcessingA",children:"Processing-A"}),e.jsx(x,{value:"ProcessingB",children:"Processing-B"}),e.jsx(x,{value:"Ready",children:"Ready"})]})]})}const te=[{id:"date",label:"Date",width:300},{id:"planId",label:"Plan Id"},{id:"productName",label:"Product Name"},{id:"orderAmount",label:"Product QTY"},{id:"status",label:"Status"}],ae=({plans:t})=>{const a=w({defaultOrderBy:"orderNumber"}),[c,m]=d.useState(t),r=R({name:"",status:"all",startDate:null,endDate:null}),i=v(r.state.startDate,r.state.endDate),l=se({inputData:c,comparator:q(a.order,a.orderBy),filters:r.state,dateError:i}),p=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate,n=!l.length&&p||!l.length,s=[{displayName:"Date",key:"planDate"},{displayName:"Plan Ref",key:"ref"},{displayName:"Product Name",key:"name"},{displayName:"Product QTY",key:"quantity"},{displayName:"Status",key:"status"}];return e.jsx(I,{maxWidth:"xl",children:e.jsxs(j,{spacing:3,children:[e.jsx(M,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Reports",href:f.dashboard.reports.root},{name:"Plan Report",href:f.dashboard.reports.plan}]}),e.jsxs(k,{children:[e.jsx(ee,{filters:r,onResetPage:a.onResetPage,dateError:i}),e.jsxs(b,{sx:{position:"relative"},children:[e.jsx(J,{dense:a.dense,numSelected:a.selected.length,rowCount:l.length}),e.jsxs(_,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(K,{order:a.order,orderBy:a.orderBy,headLabel:te,rowCount:l.length}),e.jsxs($,{children:[l.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(o=>e.jsx(Z,{row:o,selected:a.selected.includes(o.id)},o.id)),e.jsx(Q,{height:a.dense?56:76,emptyRows:G(a.page,a.rowsPerPage,l.length)}),e.jsx(z,{notFound:n})]})]})]}),e.jsx(b,{children:e.jsx(j,{direction:"row",justifyContent:"flex-end",sx:{p:3,typography:"body2"},children:e.jsx(b,{children:e.jsxs(j,{direction:"row",spacing:1,children:[e.jsx(T,{permission:P.DOWNLOAD_REPORT,children:e.jsx(D,{onClick:()=>{B("plan reports",s,l.map(o=>{var u;return{...o,name:(u=o==null?void 0:o.product)==null?void 0:u.name}}),"Stock")},variant:"contained",startIcon:e.jsx(g,{icon:"mdi:microsoft-excel"}),children:"Download Report"})}),e.jsx(T,{permission:P.PRINT_REPORT,children:e.jsx(D,{variant:"outlined",startIcon:e.jsx(g,{icon:"solar:printer-minimalistic-bold"}),children:"Print Report"})})]})})})})]})]})})};function se({inputData:t,comparator:a,filters:c,dateError:m}){const{status:r,name:i,startDate:l,endDate:p}=c,n=t.map((s,o)=>[s,o]);return n.sort((s,o)=>{const u=a(s[0],o[0]);return u!==0?u:s[1]-o[1]}),t=n.map(s=>s[0]),i&&(t=t.filter(s=>s.orderNumber.toLowerCase().indexOf(i.toLowerCase())!==-1||s.customer.name.toLowerCase().indexOf(i.toLowerCase())!==-1||s.customer.email.toLowerCase().indexOf(i.toLowerCase())!==-1)),r!=="all"&&(t=t.filter(s=>s.status===r)),m||l&&p&&(t=t.filter(s=>N(s.planDate,l,p))),t}const re={title:`Reports list | Dashboard - ${L.site.name}`};function He(){const t=O({queryKey:["plans"],queryFn:async()=>{const{data:a}=await F.get(Y.plan.list);return a}});return t.isPending||t.isLoading?e.jsx(E,{}):t.isError?e.jsx(H,{route:f.dashboard.reports.root}):e.jsxs(e.Fragment,{children:[e.jsx(A,{children:e.jsxs("title",{children:[" ",re.title]})}),e.jsx(ae,{plans:t.data})]})}export{He as default};
