import{i as B,aN as N,r as h,j as e,aT as L,l as w,I as b,db as q,aP as Q,e4 as C,aQ as T,e as D,S as E,g as H,de as K,e3 as O,dn as U,p as j,dQ as _,R as M,cY as $,B as z,dd as W,ed as G,dp as P,dm as y,dq as R,dU as J,H as V,C as Y}from"./index-CC8ZOXtA.js";import{u as X,E as Z}from"./error-block-ClcTD9po.js";import{u as F}from"./useMutation-DdAIUrKi.js";import{C as ee}from"./custom-breadcrumbs-Bl5OnNTu.js";import{P as S}from"./permission-access-controller-CWt3Qm2o.js";import{g as te,r as se,e as ae}from"./utils-MBUcMVfY.js";import{u as ne}from"./use-table-BFN1iUju.js";import{T as oe}from"./table-no-data-Cj9_XApF.js";import{T as re}from"./table-empty-rows-C8apdTaI.js";import{T as ie,a as le,b as de,c as ce}from"./table-head-custom-DVdNqcUm.js";import{T as me}from"./table-selected-action-B1Y2vnXu.js";import{T as he}from"./table-pagination-custom-BLNPouAz.js";import{C as ue}from"./confirm-dialog-MYD50ozi.js";import{T as f}from"./TableCell-Lyd9zWIr.js";import{T as pe}from"./TextField-C3GBty_k.js";import{I as fe}from"./InputAdornment-CZqtpVU7.js";import{F as xe,a as ge,c as je}from"./filters-result-B96qldBN.js";import{C as be}from"./Chip-Bqn7aPqU.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-CE7ZD1Zt.js";import"./Checkbox-Dv9DB-8I.js";import"./TablePagination-ByyUZnM0.js";import"./KeyboardArrowRight-C_h4tT89.js";import"./LastPage-KfqZ9eBe.js";import"./Select-aQYZH3TH.js";import"./Menu-eKJMgiWE.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-Lx9oX8L4.js";import"./FormControlLabel-DSmn4eUx.js";import"./DialogContent-CB7Unwzu.js";import"./DialogTitle-CUFjdCkA.js";import"./FormControl-CAeI9VZ6.js";import"./InputLabel-C4WXc4Lp.js";import"./FormLabel-Co2KdlDF.js";import"./FormHelperText-Bsh-3BCg.js";const Ce=({row:t,index:s,selected:i,onEditRow:l,onDeleteRow:d,handler:r})=>{const c=B(),n=N(),[m,o]=h.useState(t==null?void 0:t.isActive);h.useEffect(()=>{o(t==null?void 0:t.isActive)},[t]);const u=x=>()=>{o(!m),r({id:x,payload:{isActive:!m}})},p=e.jsxs(ie,{hover:!0,selected:i,children:[e.jsx(f,{children:s||(t==null?void 0:t.id)}),e.jsx(f,{children:`${t==null?void 0:t.firstName} ${(t==null?void 0:t.lastName)||""}`}),e.jsx(f,{children:(t==null?void 0:t.phoneNumber)||"-"}),e.jsx(f,{children:t==null?void 0:t.email}),e.jsx(f,{children:e.jsx(L,{checked:m,onChange:u(t.id),color:"primary"})}),e.jsx(f,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(w,{color:n.open?"inherit":"default",onClick:n.onOpen,children:e.jsx(b,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[p,e.jsx(q,{open:n.open,anchorEl:n.anchorEl,onClose:n.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(Q,{children:[e.jsx(S,{permission:C.EDIT_STAFF,children:e.jsxs(T,{onClick:()=>{l()},children:[e.jsx(b,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(S,{permission:C.DELETE_STAFF,children:e.jsxs(T,{onClick:()=>{c.onTrue(),n.onClose()},sx:{color:"error.main"},children:[e.jsx(b,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(ue,{open:c.value,onClose:c.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(D,{variant:"contained",color:"error",onClick:d,children:"Delete"})})]})};function Se({filters:t,onResetPage:s,options:i}){const l=h.useCallback(d=>{s(),t.setState({name:d.target.value})},[t,s]);return e.jsx(E,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(pe,{sx:{width:420},value:t.state.name,onChange:l,placeholder:"Search staff or email...",InputProps:{startAdornment:e.jsx(fe,{position:"start",children:e.jsx(b,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function Pe({filters:t,totalResults:s,onResetPage:i,sx:l}){const d=h.useCallback(()=>{i(),t.setState({name:""})},[t,i]),r=h.useCallback(()=>{i(),t.onResetState()},[t,i]);return e.jsx(xe,{totalResults:s,onReset:r,sx:l,children:e.jsx(ge,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(be,{...je,label:t.state.name,onDelete:d})})})}const ye=[{id:"reminderId",label:"#",width:140},{id:"staffName",label:"Staff Name",width:280},{id:"phoneNumber",label:"Phone Number"},{id:"emailAddress",label:"Email Address"},{id:"status",label:"Status"},{id:"",width:88}],Te=({staffs:t})=>{const s=ne({defaultOrderBy:"orderNumber"}),i=H(),[l,d]=h.useState(t),r=K({name:"",status:"all",startDate:null,endDate:null});h.useEffect(()=>{d(t)},[t]);const c=O(r.state.startDate,r.state.endDate),n=Re({inputData:l,comparator:te(s.order,s.orderBy),filters:r.state,dateError:c}),m=se(n,s.page,s.rowsPerPage),o=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate,u=!n.length&&o||!n.length,p=h.useCallback(a=>{A(a)},[m.length,s,l]),x=U(),{mutate:v}=F({mutationFn:async({id:a,payload:g})=>(await P.patch(y.staff.edit+a,g),a),onSuccess:async a=>{R.success("Staff Has Been Modified!"),await x.invalidateQueries({queryKey:["staff",a]})},onSettled:async()=>{await x.invalidateQueries({queryKey:["staffs"]})},onError:a=>{console.log(a)}}),{mutate:A}=F({mutationFn:a=>P.delete(y.staff.delete+a),onSuccess:async a=>{const g=l.filter(k=>k.id!==a);R.success("Delete success!"),d(g),s.onUpdatePageDeleteRow(m.length)},onSettled:async()=>{await x.invalidateQueries({queryKey:["staffs"]})},onError:()=>{}}),I=h.useCallback(a=>{i.push(j.dashboard.staff.edit(a))},[i]);return e.jsx(_,{maxWidth:"xl",children:e.jsxs(E,{spacing:3,children:[e.jsx(ee,{links:[{name:"Dashboard",href:j.dashboard.root},{name:"User",href:j.dashboard.staff.root}],action:e.jsx(S,{permission:C.ADD_STAFF,children:e.jsx(D,{component:M,href:j.dashboard.staff.new,variant:"contained",startIcon:e.jsx(b,{icon:"mingcute:add-line"}),children:"Add New User"})})}),e.jsx(S,{permission:C.STAFF_LIST,children:e.jsxs($,{children:[e.jsx(Se,{filters:r,onResetPage:s.onResetPage,dateError:c}),o&&e.jsx(Pe,{filters:r,totalResults:n.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(z,{sx:{position:"relative"},children:[e.jsx(me,{dense:s.dense,numSelected:s.selected.length,rowCount:n.length}),e.jsx(W,{sx:{minHeight:444},children:e.jsxs(le,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(de,{order:s.order,orderBy:s.orderBy,headLabel:ye,rowCount:n.length}),e.jsxs(ce,{children:[n.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((a,g)=>e.jsx(Ce,{row:a,index:s.page*s.rowsPerPage+g+1,selected:s.selected.includes(a.id),onSelectRow:()=>s.onSelectRow(a.id),onDeleteRow:()=>p(a.id),onEditRow:()=>I(a.id),handler:v},a.id)),e.jsx(re,{height:s.dense?56:76,emptyRows:ae(s.page,s.rowsPerPage,n.length)}),e.jsx(oe,{notFound:u})]})]})})]}),e.jsx(he,{page:s.page,dense:s.dense,count:n.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})})};function Re({inputData:t,comparator:s,filters:i,dateError:l}){const{status:d,name:r,startDate:c,endDate:n}=i,m=t.map((o,u)=>[o,u]);return m.sort((o,u)=>{const p=s(o[0],u[0]);return p!==0?p:o[1]-u[1]}),t=m.map(o=>o[0]),r&&(t=t.filter(o=>o.id.toString().toLowerCase().indexOf(r.toLowerCase())!==-1||o.staffName.toLowerCase().indexOf(r.toLowerCase())!==-1)),d!=="all"&&(t=t.filter(o=>o.status===d)),l||c&&n&&(t=t.filter(o=>G(o.createdAt,c,n))),t}const Fe={title:`User list | Dashboard - ${Y.site.name}`};function mt(){const t=X({queryKey:["staffs"],queryFn:async()=>{const{data:s}=await P.get(y.staff.list);return s}});return t.isPending||t.isLoading?e.jsx(J,{}):t.isError?e.jsx(Z,{route:j.dashboard.staff.root}):e.jsxs(e.Fragment,{children:[e.jsx(V,{children:e.jsxs("title",{children:[" ",Fe.title]})}),e.jsx(Te,{staffs:t.data})]})}export{mt as default};
