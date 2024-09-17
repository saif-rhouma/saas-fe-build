import{w as P,bI as k,r as u,j as e,bN as B,y as N,I as x,dB as A,bK as F,bL as j,e as S,S as y,o as L,b as w,dE as H,er as O,dP as C,dN as M,p as g,ed as q,R as V,aH as $,B as K,dD as Q,es as z,dO as T,dM as R,eh as U,H as W,C as G}from"./index-CZcV1F_p.js";import{u as J,E as _}from"./error-block-Dw3l6JuN.js";import{u as X}from"./useMutation-RCoCYUsr.js";import{C as Y}from"./custom-breadcrumbs-CbtQHK8e.js";import{u as Z,g as ee,r as te,T as se,a as ae,e as ne}from"./table-selected-action-CboGdCqh.js";import{T as oe}from"./table-no-data-CVXJF7AK.js";import{T as re,a as ie,b as le,c as de}from"./table-head-custom-Cs1cDsOq.js";import{T as ce}from"./table-pagination-custom-CQDZANoi.js";import{C as me}from"./confirm-dialog-CFSR5CRi.js";import{T as p}from"./TableCell-C1nm99o0.js";import{T as he}from"./TextField-D7n2_qXr.js";import{I as ue}from"./InputAdornment-DsfHwWIs.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-B9Q7SrE_.js";import"./empty-content-CpfMP5Ra.js";import"./TablePagination-CPW6B5yR.js";import"./LastPage-CSCREIen.js";import"./Select-DLGgW76C.js";import"./Menu-Biq0K9Dc.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-De2NihOG.js";import"./FormControlLabel-BJNlLSWJ.js";import"./DialogContent-BM8q5mKd.js";import"./DialogTitle-DLTxRMh7.js";import"./FormControl-3TPlxton.js";import"./InputLabel-h10-06k3.js";import"./FormLabel-CRn0_UJR.js";import"./FormHelperText-BnZQySOl.js";const fe=({row:t,selected:s,onViewRow:m,onDeleteRow:l,handler:d})=>{const o=P(),i=k(),[a,c]=u.useState(t==null?void 0:t.isActive);u.useEffect(()=>{c(t==null?void 0:t.isActive)},[t]);const n=f=>()=>{c(!a),d({id:f,isActive:!a})},h=e.jsxs(re,{hover:!0,selected:s,children:[e.jsx(p,{children:t==null?void 0:t.id}),e.jsx(p,{children:`${t==null?void 0:t.firstName} ${t==null?void 0:t.lastName}`}),e.jsx(p,{children:t==null?void 0:t.phoneNumber}),e.jsx(p,{children:t==null?void 0:t.email}),e.jsx(p,{children:e.jsx(B,{checked:a,onChange:n(t.id),color:"primary"})}),e.jsx(p,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(N,{color:i.open?"inherit":"default",onClick:i.onOpen,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[h,e.jsx(A,{open:i.open,anchorEl:i.anchorEl,onClose:i.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(F,{children:[e.jsxs(j,{onClick:()=>{o.onTrue(),i.onClose()},sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),e.jsxs(j,{onClick:()=>{m(),i.onClose()},children:[e.jsx(x,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(j,{onClick:()=>{m(),i.onClose()},children:[e.jsx(x,{icon:"solar:eye-bold"}),"Edit"]})]})}),e.jsx(me,{open:o.value,onClose:o.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(S,{variant:"contained",color:"error",onClick:l,children:"Delete"})})]})};function pe({filters:t,onResetPage:s,options:m}){const l=u.useCallback(d=>{s(),t.setState({name:d.target.value})},[t,s]);return e.jsx(y,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(he,{sx:{width:420},value:t.state.name,onChange:l,placeholder:"Search staff or email...",InputProps:{startAdornment:e.jsx(ue,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}const xe=[{id:"reminderId",label:"#",width:140},{id:"staffName",label:"Staff Name",width:280},{id:"phoneNumber",label:"Phone Number"},{id:"emailAddress",label:"Email Address"},{id:"status",label:"Status"},{id:"",width:88}],ge=({staffs:t})=>{const s=Z({defaultOrderBy:"orderNumber"}),m=L();w(),P();const[l,d]=u.useState(t),o=H({name:"",status:"all",startDate:null,endDate:null});u.useEffect(()=>{d(t)},[t]);const i=O(o.state.startDate,o.state.endDate),a=je({inputData:l,comparator:ee(s.order,s.orderBy),filters:o.state,dateError:i}),c=te(a,s.page,s.rowsPerPage),n=!!o.state.name||o.state.status!=="all"||!!o.state.startDate&&!!o.state.endDate,h=!a.length&&n||!a.length,f=u.useCallback(r=>{const b=l.filter(E=>E.id!==r);C.success("Delete success!"),d(b),s.onUpdatePageDeleteRow(c.length)},[c.length,s,l]);u.useCallback(()=>{const r=l.filter(b=>!s.selected.includes(b.id));C.success("Delete success!"),d(r),s.onUpdatePageDeleteRows({totalRowsInPage:c.length,totalRowsFiltered:a.length})},[a.length,c.length,s,l]);const D=M(),{mutate:I}=X({mutationFn:r=>T.patch(R.staff.edit,r),onSuccess:async()=>{C.success("Staff Has Been Modified!")},onSettled:async()=>{await D.invalidateQueries({queryKey:["staffs"]})},onError:r=>{console.log(r)}}),v=u.useCallback(r=>{m.push(g.dashboard.staff.edit(r))},[m]);return e.jsx(e.Fragment,{children:e.jsx(q,{maxWidth:"xl",children:e.jsxs(y,{spacing:3,children:[e.jsx(Y,{links:[{name:"Dashboard",href:g.dashboard.root},{name:"Staff",href:g.dashboard.staff.root}],action:e.jsx(S,{component:V,href:g.dashboard.staff.new,variant:"contained",startIcon:e.jsx(x,{icon:"mingcute:add-line"}),children:"Add New Staff"})}),e.jsxs($,{children:[e.jsx(pe,{filters:o,onResetPage:s.onResetPage,dateError:i}),e.jsxs(K,{sx:{position:"relative"},children:[e.jsx(se,{dense:s.dense,numSelected:s.selected.length,rowCount:a.length}),e.jsx(Q,{sx:{minHeight:444},children:e.jsxs(ie,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(le,{order:s.order,orderBy:s.orderBy,headLabel:xe,rowCount:a.length}),e.jsxs(de,{children:[a.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(r=>e.jsx(fe,{row:r,selected:s.selected.includes(r.id),onSelectRow:()=>s.onSelectRow(r.id),onDeleteRow:()=>f(r.id),onViewRow:()=>v(r.id),handler:I},r.id)),e.jsx(ae,{height:s.dense?56:76,emptyRows:ne(s.page,s.rowsPerPage,a.length)}),e.jsx(oe,{notFound:h})]})]})})]}),e.jsx(ce,{page:s.page,dense:s.dense,count:a.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})]})})})},be=ge;function je({inputData:t,comparator:s,filters:m,dateError:l}){const{status:d,name:o,startDate:i,endDate:a}=m,c=t.map((n,h)=>[n,h]);return c.sort((n,h)=>{const f=s(n[0],h[0]);return f!==0?f:n[1]-h[1]}),t=c.map(n=>n[0]),o&&(t=t.filter(n=>n.id.toString().toLowerCase().indexOf(o.toLowerCase())!==-1||n.staffName.toLowerCase().indexOf(o.toLowerCase())!==-1)),d!=="all"&&(t=t.filter(n=>n.status===d)),l||i&&a&&(t=t.filter(n=>z(n.createdAt,i,a))),t}const Ce={title:`Staff list | Dashboard - ${G.site.name}`};function Ye(){const t=J({queryKey:["staffs"],queryFn:async()=>{const{data:s}=await T.get(R.staff.list);return s}});return t.isPending||t.isLoading?e.jsx(U,{}):t.isError?e.jsx(_,{route:g.dashboard.staff.root}):e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsxs("title",{children:[" ",Ce.title]})}),e.jsx(be,{staffs:t.data})]})}export{Ye as default};
