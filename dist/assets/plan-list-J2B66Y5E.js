import{j as e,aN as y,r as i,bO as C,S as h,I as f,bL as u,o as S,dE as T,er as v,ed as I,p as j,aH as B,B as b,e as P,es as L,eh as R,H as k,C as E,dO as F,dM as A}from"./index-CZcV1F_p.js";import{u as N,E as Y}from"./error-block-Dw3l6JuN.js";import{C as O}from"./custom-breadcrumbs-CbtQHK8e.js";import{u as w,g as M,r as H,T as G,a as q,e as z}from"./table-selected-action-CboGdCqh.js";import{T as Q}from"./table-no-data-CVXJF7AK.js";import{T as W,a as $,b as K,c as V}from"./table-head-custom-Cs1cDsOq.js";import{T as p}from"./TableCell-C1nm99o0.js";import{T as _}from"./TextField-D7n2_qXr.js";import{I as J}from"./InputAdornment-DsfHwWIs.js";import{D}from"./DatePicker-omkT4XAu.js";import{S as U}from"./Select-DLGgW76C.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-B9Q7SrE_.js";import"./empty-content-CpfMP5Ra.js";import"./FormControl-3TPlxton.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-h10-06k3.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CRn0_UJR.js";import"./FormHelperText-BnZQySOl.js";import"./index-BQhbB6Ru.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-BM8q5mKd.js";import"./ListItem-cuOSimek.js";import"./Chip-C3BxFZTA.js";import"./Menu-Biq0K9Dc.js";import"./InputBase-De2NihOG.js";const X=({row:t,selected:a})=>{var c;console.log("----------> row",t);const d=e.jsxs(W,{hover:!0,selected:a,children:[e.jsx(p,{children:y(t==null?void 0:t.planDate)}),e.jsxs(p,{children:["PLN-",t==null?void 0:t.id]}),e.jsx(p,{children:(c=t==null?void 0:t.product)==null?void 0:c.name}),e.jsx(p,{children:t==null?void 0:t.quantity}),e.jsx(p,{children:t==null?void 0:t.status})]});return e.jsx(e.Fragment,{children:d})};function Z({filters:t,onResetPage:a}){const[d,c]=i.useState("all");i.useState(C()),i.useState(C());const r=i.useCallback(n=>{a(),t.setState({name:n.target.value})},[t,a]),l=i.useCallback(n=>{a(),t.setState({status:n.target.value}),c(n.target.value)},[t,a]),o=i.useCallback(n=>{a(),t.setState({startDate:n})},[t,a]),m=i.useCallback(n=>{a(),t.setState({endDate:n})},[t,a]);return e.jsxs(h,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(_,{sx:{flexGrow:1},value:t.state.name,onChange:r,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(J,{position:"start",children:e.jsx(f,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(D,{label:"Start Date",sx:{flexGrow:1},format:"DD/MM/YYYY",value:t.state.startDate,onChange:o}),e.jsx(D,{label:"End Date",sx:{flexGrow:1},value:t.state.endDate,onChange:m,format:"DD/MM/YYYY"}),e.jsxs(U,{sx:{width:420,textTransform:"capitalize"},value:d,onChange:l,children:[e.jsx(u,{value:"all",children:"All Plans"}),e.jsx(u,{value:"Pending",children:"Pending"}),e.jsx(u,{value:"ProcessingA",children:"Processing-A"}),e.jsx(u,{value:"ProcessingB",children:"Processing-B"}),e.jsx(u,{value:"Ready",children:"Ready"})]})]})}const ee=[{id:"date",label:"Date",width:300},{id:"planId",label:"Plan Id"},{id:"productName",label:"Product Name"},{id:"orderAmount",label:"Product QTY"},{id:"status",label:"Status"}],te=({plans:t})=>{const a=w({defaultOrderBy:"orderNumber"});S();const[d,c]=i.useState(t),r=T({name:"",status:"all",startDate:null,endDate:null}),l=v(r.state.startDate,r.state.endDate),o=se({inputData:d,comparator:M(a.order,a.orderBy),filters:r.state,dateError:l});H(o,a.page,a.rowsPerPage);const m=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate,n=!o.length&&m||!o.length;return e.jsx(I,{maxWidth:"xl",children:e.jsxs(h,{spacing:3,children:[e.jsx(O,{links:[{name:"Dashboard",href:j.dashboard.root},{name:"Reports",href:j.dashboard.reports.root},{name:"Plan Report",href:j.dashboard.reports.plan}]}),e.jsxs(B,{children:[e.jsx(Z,{filters:r,onResetPage:a.onResetPage,dateError:l}),e.jsxs(b,{sx:{position:"relative"},children:[e.jsx(G,{dense:a.dense,numSelected:a.selected.length,rowCount:o.length}),e.jsxs($,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(K,{order:a.order,orderBy:a.orderBy,headLabel:ee,rowCount:o.length}),e.jsxs(V,{children:[o.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(s=>e.jsx(X,{row:s,selected:a.selected.includes(s.id)},s.id)),e.jsx(q,{height:a.dense?56:76,emptyRows:z(a.page,a.rowsPerPage,o.length)}),e.jsx(Q,{notFound:n})]})]})]}),e.jsx(b,{children:e.jsx(h,{direction:"row",justifyContent:"flex-end",sx:{p:3,typography:"body2"},children:e.jsx(b,{children:e.jsxs(h,{direction:"row",spacing:1,children:[e.jsx(P,{variant:"contained",startIcon:e.jsx(f,{icon:"carbon:checkmark-filled"}),children:"Download Report"}),e.jsx(P,{variant:"outlined",startIcon:e.jsx(f,{icon:"carbon:checkmark-filled"}),children:"Print Report"})]})})})})]})]})})},ae=te;function se({inputData:t,comparator:a,filters:d,dateError:c}){const{status:r,name:l,startDate:o,endDate:m}=d,n=t.map((s,x)=>[s,x]);return n.sort((s,x)=>{const g=a(s[0],x[0]);return g!==0?g:s[1]-x[1]}),t=n.map(s=>s[0]),l&&(t=t.filter(s=>s.orderNumber.toLowerCase().indexOf(l.toLowerCase())!==-1||s.customer.name.toLowerCase().indexOf(l.toLowerCase())!==-1||s.customer.email.toLowerCase().indexOf(l.toLowerCase())!==-1)),r!=="all"&&(t=t.filter(s=>s.status===r)),c||o&&m&&(t=t.filter(s=>L(s.planDate,o,m))),t}const re={title:`Reports list | Dashboard - ${E.site.name}`};function Ae(){const t=N({queryKey:["plans"],queryFn:async()=>{const{data:a}=await F.get(A.plan.list);return a}});return t.isPending||t.isLoading?e.jsx(R,{}):t.isError?e.jsx(Y,{route:j.dashboard.reports.root}):e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsxs("title",{children:[" ",re.title]})}),e.jsx(ae,{plans:t.data})]})}export{Ae as default};
