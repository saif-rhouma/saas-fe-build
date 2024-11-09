import{i as B,aP as L,r as h,j as e,aV as N,l as w,I as b,db as q,aR as H,e3 as C,aS as T,e as D,S as E,g as K,de as O,e2 as Q,dn as _,p as j,dP as M,R as U,cY as $,B as z,dd as V,eh as W,dp as P,dm as y,dq as R,dT as G,H as J,C as Y}from"./index-cVC9loO2.js";import{u as X,E as Z}from"./error-block-CTLR1Q8T.js";import{u as F}from"./useMutation-D1Ao7QLV.js";import{C as ee}from"./custom-breadcrumbs-CcAluHeA.js";import{P as S}from"./permission-access-controller-DFrwOXyc.js";import{g as te,r as se,e as ae}from"./utils-MBUcMVfY.js";import{u as ne}from"./use-table-Dq7VnjS8.js";import{T as oe}from"./table-no-data-t2h_pSOQ.js";import{T as re}from"./table-empty-rows-Cort7vwu.js";import{T as ie,a as le,b as de,c as ce}from"./table-head-custom-bk3oBXPg.js";import{T as me}from"./table-selected-action-Cz6OB6ms.js";import{T as he}from"./table-pagination-custom-CClS5mLF.js";import{C as ue}from"./confirm-dialog-BPASpEx5.js";import{T as f}from"./TableCell-8gOmF4Ok.js";import{T as pe}from"./TextField-LJCfmosc.js";import{I as fe}from"./InputAdornment-BrZhMZcc.js";import{F as xe,a as ge,c as je}from"./filters-result-BjX7Ns58.js";import{C as be}from"./Chip-BK1jcf0v.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-DmCj46QE.js";import"./Checkbox-Bdobw5-i.js";import"./TablePagination-CFBfrjTB.js";import"./KeyboardArrowRight-BnvIvIxZ.js";import"./LastPage-D-qrFXII.js";import"./Select-DUYbOU_T.js";import"./Menu-BRMv56CN.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-C5V7Cyqr.js";import"./FormControlLabel-BYQ2iE67.js";import"./DialogContent-DkiO8DEm.js";import"./DialogTitle-BiPM3Q-L.js";import"./FormControl-9caSTWx2.js";import"./InputLabel-CMJbfDqe.js";import"./FormLabel-B5edal7e.js";import"./FormHelperText-CsRk0ikA.js";const Ce=({row:t,index:s,selected:i,onEditRow:l,onDeleteRow:d,handler:r})=>{const c=B(),n=L(),[m,o]=h.useState(t==null?void 0:t.isActive);h.useEffect(()=>{o(t==null?void 0:t.isActive)},[t]);const u=x=>()=>{o(!m),r({id:x,payload:{isActive:!m}})},p=e.jsxs(ie,{hover:!0,selected:i,children:[e.jsx(f,{children:s||(t==null?void 0:t.id)}),e.jsx(f,{children:`${t==null?void 0:t.firstName} ${(t==null?void 0:t.lastName)||""}`}),e.jsx(f,{children:(t==null?void 0:t.phoneNumber)||"-"}),e.jsx(f,{children:t==null?void 0:t.email}),e.jsx(f,{children:e.jsx(N,{checked:m,onChange:u(t.id),color:"primary"})}),e.jsx(f,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(w,{color:n.open?"inherit":"default",onClick:n.onOpen,children:e.jsx(b,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[p,e.jsx(q,{open:n.open,anchorEl:n.anchorEl,onClose:n.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(H,{children:[e.jsx(S,{permission:C.EDIT_STAFF,children:e.jsxs(T,{onClick:()=>{l()},children:[e.jsx(b,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(S,{permission:C.DELETE_STAFF,children:e.jsxs(T,{onClick:()=>{c.onTrue(),n.onClose()},sx:{color:"error.main"},children:[e.jsx(b,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(ue,{open:c.value,onClose:c.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(D,{variant:"contained",color:"error",onClick:d,children:"Delete"})})]})};function Se({filters:t,onResetPage:s,options:i}){const l=h.useCallback(d=>{s(),t.setState({name:d.target.value})},[t,s]);return e.jsx(E,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(pe,{sx:{width:420},value:t.state.name,onChange:l,placeholder:"Search staff or email...",InputProps:{startAdornment:e.jsx(fe,{position:"start",children:e.jsx(b,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function Pe({filters:t,totalResults:s,onResetPage:i,sx:l}){const d=h.useCallback(()=>{i(),t.setState({name:""})},[t,i]),r=h.useCallback(()=>{i(),t.onResetState()},[t,i]);return e.jsx(xe,{totalResults:s,onReset:r,sx:l,children:e.jsx(ge,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(be,{...je,label:t.state.name,onDelete:d})})})}const ye=[{id:"reminderId",label:"#",width:140},{id:"staffName",label:"Staff Name",width:280},{id:"phoneNumber",label:"Phone Number"},{id:"emailAddress",label:"Email Address"},{id:"status",label:"Status"},{id:"",width:88}],Te=({staffs:t})=>{const s=ne({defaultOrderBy:"orderNumber"}),i=K(),[l,d]=h.useState(t),r=O({name:"",status:"all",startDate:null,endDate:null});h.useEffect(()=>{d(t)},[t]);const c=Q(r.state.startDate,r.state.endDate),n=Re({inputData:l,comparator:te(s.order,s.orderBy),filters:r.state,dateError:c}),m=se(n,s.page,s.rowsPerPage),o=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate,u=!n.length&&o||!n.length,p=h.useCallback(a=>{A(a)},[m.length,s,l]),x=_(),{mutate:v}=F({mutationFn:async({id:a,payload:g})=>(await P.patch(y.staff.edit+a,g),a),onSuccess:async a=>{R.success("Staff Has Been Modified!"),await x.invalidateQueries({queryKey:["staff",a]})},onSettled:async()=>{await x.invalidateQueries({queryKey:["staffs"]})},onError:a=>{console.log(a)}}),{mutate:A}=F({mutationFn:a=>P.delete(y.staff.delete+a),onSuccess:async a=>{const g=l.filter(k=>k.id!==a);R.success("Delete success!"),d(g),s.onUpdatePageDeleteRow(m.length)},onSettled:async()=>{await x.invalidateQueries({queryKey:["staffs"]})},onError:()=>{}}),I=h.useCallback(a=>{i.push(j.dashboard.staff.edit(a))},[i]);return e.jsx(M,{maxWidth:"xl",children:e.jsxs(E,{spacing:3,children:[e.jsx(ee,{links:[{name:"Dashboard",href:j.dashboard.root},{name:"User",href:j.dashboard.staff.root}],action:e.jsx(S,{permission:C.ADD_STAFF,children:e.jsx(D,{component:U,href:j.dashboard.staff.new,variant:"contained",startIcon:e.jsx(b,{icon:"mingcute:add-line"}),children:"Add New User"})})}),e.jsx(S,{permission:C.STAFF_LIST,children:e.jsxs($,{children:[e.jsx(Se,{filters:r,onResetPage:s.onResetPage,dateError:c}),o&&e.jsx(Pe,{filters:r,totalResults:n.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(z,{sx:{position:"relative"},children:[e.jsx(me,{dense:s.dense,numSelected:s.selected.length,rowCount:n.length}),e.jsx(V,{sx:{minHeight:444},children:e.jsxs(le,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(de,{order:s.order,orderBy:s.orderBy,headLabel:ye,rowCount:n.length}),e.jsxs(ce,{children:[n.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((a,g)=>e.jsx(Ce,{row:a,index:s.page*s.rowsPerPage+g+1,selected:s.selected.includes(a.id),onSelectRow:()=>s.onSelectRow(a.id),onDeleteRow:()=>p(a.id),onEditRow:()=>I(a.id),handler:v},a.id)),e.jsx(re,{height:s.dense?56:76,emptyRows:ae(s.page,s.rowsPerPage,n.length)}),e.jsx(oe,{notFound:u})]})]})})]}),e.jsx(he,{page:s.page,dense:s.dense,count:n.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})})};function Re({inputData:t,comparator:s,filters:i,dateError:l}){const{status:d,name:r,startDate:c,endDate:n}=i,m=t.map((o,u)=>[o,u]);return m.sort((o,u)=>{const p=s(o[0],u[0]);return p!==0?p:o[1]-u[1]}),t=m.map(o=>o[0]),r&&(t=t.filter(o=>o.id.toString().toLowerCase().indexOf(r.toLowerCase())!==-1||o.staffName.toLowerCase().indexOf(r.toLowerCase())!==-1)),d!=="all"&&(t=t.filter(o=>o.status===d)),l||c&&n&&(t=t.filter(o=>W(o.createdAt,c,n))),t}const Fe={title:`User list | Dashboard - ${Y.site.name}`};function mt(){const t=X({queryKey:["staffs"],queryFn:async()=>{const{data:s}=await P.get(y.staff.list);return s}});return t.isPending||t.isLoading?e.jsx(G,{}):t.isError?e.jsx(Z,{route:j.dashboard.staff.root}):e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsxs("title",{children:[" ",Fe.title]})}),e.jsx(Te,{staffs:t.data})]})}export{mt as default};
