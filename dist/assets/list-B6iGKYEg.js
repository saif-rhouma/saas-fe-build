import{o as B,bO as w,r as h,j as e,bT as L,w as N,I as b,dw as H,bQ as K,em as C,bR as T,e as F,S as E,l as q,dz as O,eo as Q,dI as _,p as j,e8 as M,R as U,aD as z,B as $,dy as J,ep as W,dJ as P,dH as y,dK as R,ec as G,H as V,C as X}from"./index-yGbCRgTb.js";import{u as Y,E as Z}from"./error-block-DTJA4qog.js";import{u as D}from"./useMutation-By1q-eS7.js";import{C as ee}from"./custom-breadcrumbs-BVoeLH7h.js";import{P as S}from"./permission-access-controller-Dm06QNPj.js";import{g as te,r as se,T as ae,a as ne,e as oe}from"./table-selected-action-ouhBymae.js";import{u as re}from"./use-table-CKTXv-Z5.js";import{T as ie}from"./table-no-data-CAqPvp_P.js";import{T as le,a as de,b as ce,c as me}from"./table-head-custom-Dmu61VxH.js";import{T as he}from"./table-pagination-custom-D_SwmGih.js";import{C as ue}from"./confirm-dialog-Ko2N1QmH.js";import{T as f}from"./TableCell-kQtrcvwO.js";import{T as pe}from"./TextField-HI4be0gE.js";import{I as fe}from"./InputAdornment-CcIxSkvC.js";import{F as xe,a as ge,c as je}from"./filters-result-IEq4pTDN.js";import{C as be}from"./Chip-Di1iaus5.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-CLReM-9f.js";import"./empty-content-DuekPASb.js";import"./TablePagination--mxkDLnZ.js";import"./KeyboardArrowRight-gA8WWooR.js";import"./LastPage-Bpf9jdMv.js";import"./Select-q90WBvXR.js";import"./Menu-BP741PyP.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DgymrakP.js";import"./FormControlLabel-C9PyVvR2.js";import"./DialogContent-DMTZhSCC.js";import"./DialogTitle-Dtm0x3W5.js";import"./FormControl-BZpoYGsF.js";import"./InputLabel-DnqBfGRt.js";import"./FormLabel-CZqAmIUK.js";import"./FormHelperText-Dnev79N5.js";const Ce=({row:t,index:s,selected:i,onEditRow:l,onDeleteRow:d,handler:r})=>{const c=B(),n=w(),[m,o]=h.useState(t==null?void 0:t.isActive);h.useEffect(()=>{o(t==null?void 0:t.isActive)},[t]);const u=x=>()=>{o(!m),r({id:x,payload:{isActive:!m}})},p=e.jsxs(le,{hover:!0,selected:i,children:[e.jsx(f,{children:s||(t==null?void 0:t.id)}),e.jsx(f,{children:`${t==null?void 0:t.firstName} ${t==null?void 0:t.lastName}`}),e.jsx(f,{children:t==null?void 0:t.phoneNumber}),e.jsx(f,{children:t==null?void 0:t.email}),e.jsx(f,{children:e.jsx(L,{checked:m,onChange:u(t.id),color:"primary"})}),e.jsx(f,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(N,{color:n.open?"inherit":"default",onClick:n.onOpen,children:e.jsx(b,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[p,e.jsx(H,{open:n.open,anchorEl:n.anchorEl,onClose:n.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(K,{children:[e.jsx(S,{permission:C.EDIT_STAFF,children:e.jsxs(T,{onClick:()=>{l()},children:[e.jsx(b,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(S,{permission:C.DELETE_STAFF,children:e.jsxs(T,{onClick:()=>{c.onTrue(),n.onClose()},sx:{color:"error.main"},children:[e.jsx(b,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(ue,{open:c.value,onClose:c.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(F,{variant:"contained",color:"error",onClick:d,children:"Delete"})})]})};function Se({filters:t,onResetPage:s,options:i}){const l=h.useCallback(d=>{s(),t.setState({name:d.target.value})},[t,s]);return e.jsx(E,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(pe,{sx:{width:420},value:t.state.name,onChange:l,placeholder:"Search staff or email...",InputProps:{startAdornment:e.jsx(fe,{position:"start",children:e.jsx(b,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function Pe({filters:t,totalResults:s,onResetPage:i,sx:l}){const d=h.useCallback(()=>{i(),t.setState({name:""})},[t,i]),r=h.useCallback(()=>{i(),t.onResetState()},[t,i]);return e.jsx(xe,{totalResults:s,onReset:r,sx:l,children:e.jsx(ge,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(be,{...je,label:t.state.name,onDelete:d})})})}const ye=[{id:"reminderId",label:"#",width:140},{id:"staffName",label:"Staff Name",width:280},{id:"phoneNumber",label:"Phone Number"},{id:"emailAddress",label:"Email Address"},{id:"status",label:"Status"},{id:"",width:88}],Te=({staffs:t})=>{const s=re({defaultOrderBy:"orderNumber"}),i=q(),[l,d]=h.useState(t),r=O({name:"",status:"all",startDate:null,endDate:null});h.useEffect(()=>{d(t)},[t]);const c=Q(r.state.startDate,r.state.endDate),n=Re({inputData:l,comparator:te(s.order,s.orderBy),filters:r.state,dateError:c}),m=se(n,s.page,s.rowsPerPage),o=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate,u=!n.length&&o||!n.length,p=h.useCallback(a=>{A(a)},[m.length,s,l]),x=_(),{mutate:v}=D({mutationFn:async({id:a,payload:g})=>(await P.patch(y.staff.edit+a,g),a),onSuccess:async a=>{R.success("Staff Has Been Modified!"),await x.invalidateQueries({queryKey:["staff",a]})},onSettled:async()=>{await x.invalidateQueries({queryKey:["staffs"]})},onError:a=>{console.log(a)}}),{mutate:A}=D({mutationFn:a=>P.delete(y.staff.delete+a),onSuccess:async a=>{const g=l.filter(k=>k.id!==a);R.success("Delete success!"),d(g),s.onUpdatePageDeleteRow(m.length)},onSettled:async()=>{await x.invalidateQueries({queryKey:["staffs"]})},onError:()=>{}}),I=h.useCallback(a=>{i.push(j.dashboard.staff.edit(a))},[i]);return e.jsx(M,{maxWidth:"xl",children:e.jsxs(E,{spacing:3,children:[e.jsx(ee,{links:[{name:"Dashboard",href:j.dashboard.root},{name:"User",href:j.dashboard.staff.root}],action:e.jsx(S,{permission:C.ADD_STAFF,children:e.jsx(F,{component:U,href:j.dashboard.staff.new,variant:"contained",startIcon:e.jsx(b,{icon:"mingcute:add-line"}),children:"Add New User"})})}),e.jsx(S,{permission:C.STAFF_LIST,children:e.jsxs(z,{children:[e.jsx(Se,{filters:r,onResetPage:s.onResetPage,dateError:c}),o&&e.jsx(Pe,{filters:r,totalResults:n.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs($,{sx:{position:"relative"},children:[e.jsx(ae,{dense:s.dense,numSelected:s.selected.length,rowCount:n.length}),e.jsx(J,{sx:{minHeight:444},children:e.jsxs(de,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(ce,{order:s.order,orderBy:s.orderBy,headLabel:ye,rowCount:n.length}),e.jsxs(me,{children:[n.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((a,g)=>e.jsx(Ce,{row:a,index:s.page*s.rowsPerPage+g+1,selected:s.selected.includes(a.id),onSelectRow:()=>s.onSelectRow(a.id),onDeleteRow:()=>p(a.id),onEditRow:()=>I(a.id),handler:v},a.id)),e.jsx(ne,{height:s.dense?56:76,emptyRows:oe(s.page,s.rowsPerPage,n.length)}),e.jsx(ie,{notFound:u})]})]})})]}),e.jsx(he,{page:s.page,dense:s.dense,count:n.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})})};function Re({inputData:t,comparator:s,filters:i,dateError:l}){const{status:d,name:r,startDate:c,endDate:n}=i,m=t.map((o,u)=>[o,u]);return m.sort((o,u)=>{const p=s(o[0],u[0]);return p!==0?p:o[1]-u[1]}),t=m.map(o=>o[0]),r&&(t=t.filter(o=>o.id.toString().toLowerCase().indexOf(r.toLowerCase())!==-1||o.staffName.toLowerCase().indexOf(r.toLowerCase())!==-1)),d!=="all"&&(t=t.filter(o=>o.status===d)),l||c&&n&&(t=t.filter(o=>W(o.createdAt,c,n))),t}const De={title:`User list | Dashboard - ${X.site.name}`};function dt(){const t=Y({queryKey:["staffs"],queryFn:async()=>{const{data:s}=await P.get(y.staff.list);return s}});return t.isPending||t.isLoading?e.jsx(G,{}):t.isError?e.jsx(Z,{route:j.dashboard.staff.root}):e.jsxs(e.Fragment,{children:[e.jsx(V,{children:e.jsxs("title",{children:[" ",De.title]})}),e.jsx(Te,{staffs:t.data})]})}export{dt as default};