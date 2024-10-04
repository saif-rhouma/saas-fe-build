import{o as E,bO as A,j as e,L as F,aJ as N,ds as O,w as q,I as g,dw as H,bQ as K,em as b,bR as h,e as T,r as c,S as Q,en as _,l as z,dz as G,eo as J,p as j,dI as M,e8 as V,G as f,R as W,aD as U,B as $,dy as X,ep as Y,dJ as R,dH as v,dK as Z,ec as ee,H as te,C as se}from"./index-CwDFRBrV.js";import{u as ae,E as ne}from"./error-block-po56rbru.js";import{u as oe}from"./useMutation-CkTHNDXi.js";import{C as re}from"./custom-breadcrumbs-tdSVNm9k.js";import{P as C}from"./permission-access-controller-7g9WRehD.js";import{g as le,r as ie,T as de,a as ce,e as ue}from"./table-selected-action-QvRRh6wE.js";import{u as me}from"./use-table-keuem4Xf.js";import{T as he}from"./table-no-data-C6vJju_i.js";import{T as pe,a as xe,b as je,c as ge}from"./table-head-custom-0GEy35EZ.js";import{T as be}from"./table-pagination-custom-B9zCiItL.js";import{C as Ce}from"./confirm-dialog-CzBLlYBs.js";import{T as x}from"./TableCell-D5WBIyLx.js";import{T as Pe}from"./TextField-CHPZUTqF.js";import{I as fe}from"./InputAdornment-DEbikF0Z.js";import{S as ye}from"./Select-C_u8K-J_.js";import{F as we,a as y,c as w}from"./filters-result-DEYNNCA9.js";import{C as D}from"./Chip-BadVSybg.js";import"./incrementer-button-XoeqYN-8.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-Cm203eFc.js";import"./empty-content-LLazwqBz.js";import"./TablePagination-CxmbsKV-.js";import"./KeyboardArrowRight-DJc55wOs.js";import"./LastPage-DeJVGkdu.js";import"./InputBase-Bn2YUrmy.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-HvXv_MVH.js";import"./DialogContent-DQegyPQl.js";import"./DialogTitle-B_p_zW0I.js";import"./FormControl-yMCQcYEm.js";import"./InputLabel-CKyW86qE.js";import"./FormLabel-BavGwz4i.js";import"./FormHelperText-Bj0ulyme.js";import"./Menu-B_jyagBS.js";function De({row:t,index:s,selected:r,onViewRow:d,onEditRow:u,onDeleteRow:n}){var o,m;const i=E(),a=A(),p=e.jsxs(pe,{hover:!0,selected:r,children:[e.jsx(x,{children:e.jsx(F,{color:"inherit",onClick:d,underline:"always",sx:{cursor:"pointer"},children:(t==null?void 0:t.ref)||s||(t==null?void 0:t.id)})}),e.jsx(x,{children:N(t.planDate)}),e.jsx(x,{children:t.product.name}),e.jsxs(x,{align:"center",children:[" ",t.quantity," "]}),e.jsx(x,{children:e.jsx(O,{variant:"soft",color:t.status==="Ready"&&"success"||t.status==="Pending"&&"info"||t.status==="ProcessingA"&&"warning"||t.status==="ProcessingB"&&"error"||"default",children:t.status})}),e.jsxs(x,{children:[(o=t.createdBy)==null?void 0:o.firstName," ",(m=t.createdBy)==null?void 0:m.lastName]}),e.jsx(x,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(q,{color:a.open?"inherit":"default",onClick:a.onOpen,children:e.jsx(g,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[p,e.jsx(H,{open:a.open,anchorEl:a.anchorEl,onClose:a.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(K,{children:[e.jsx(C,{permission:b.VIEW_PLAN,children:e.jsxs(h,{onClick:()=>{d(),a.onClose()},children:[e.jsx(g,{icon:"solar:eye-bold"}),"View"]})}),e.jsx(C,{permission:b.EDIT_PLAN,children:e.jsxs(h,{onClick:()=>{u(),a.onClose()},children:[e.jsx(g,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(C,{permission:b.DELETE_PLAN,children:e.jsxs(h,{onClick:()=>{i.onTrue(),a.onClose()},sx:{color:"error.main"},children:[e.jsx(g,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Ce,{open:i.value,onClose:i.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(T,{variant:"contained",color:"error",onClick:n,children:"Delete"})})]})}function Se({filters:t,onResetPage:s}){const[r,d]=c.useState("all"),u=c.useCallback(i=>{s(),t.setState({name:i.target.value})},[t,s]),n=c.useCallback(i=>{s(),t.setState({status:i.target.value}),d(i.target.value)},[t,s]);return e.jsxs(Q,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(Pe,{sx:{width:420},value:t.state.name,onChange:u,placeholder:"Search by product or plan number...",InputProps:{startAdornment:e.jsx(fe,{position:"start",children:e.jsx(g,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsxs(ye,{sx:{width:420,textTransform:"capitalize"},value:r,onChange:n,children:[e.jsx(h,{value:"all",children:"All Plans"}),e.jsx(h,{value:"Pending",children:"Pending"}),e.jsx(h,{value:"ProcessingA",children:"Processing-A"}),e.jsx(h,{value:"ProcessingB",children:"Processing-B"}),e.jsx(h,{value:"Ready",children:"Ready"})]})]})}function Te({filters:t,totalResults:s,onResetPage:r,sx:d}){const u=c.useCallback(()=>{r(),t.setState({name:""})},[t,r]),n=c.useCallback(()=>{r(),t.setState({status:"all"})},[t,r]),i=c.useCallback(()=>{r(),t.setState({startDate:null,endDate:null})},[t,r]),a=c.useCallback(()=>{r(),t.onResetState()},[t,r]);return e.jsxs(we,{totalResults:s,onReset:a,sx:d,children:[e.jsx(y,{label:"Status:",isShow:t.state.status!=="all",children:e.jsx(D,{...w,label:t.state.status,onDelete:n,sx:{textTransform:"capitalize"}})}),e.jsx(y,{label:"Date:",isShow:!!(t.state.startDate&&t.state.endDate),children:e.jsx(D,{...w,label:_(t.state.startDate,t.state.endDate),onDelete:i})}),e.jsx(y,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(D,{...w,label:t.state.name,onDelete:u})})]})}const Re=[{id:"planId",label:"Plan ID",width:60},{id:"planDate",label:"Plan Date",width:140},{id:"product",label:"Product",width:140},{id:"quantity",label:"Quantity",width:120,align:"center"},{id:"status",label:"Status",width:140},{id:"createdBy",label:"Created By",width:140},{id:"",width:88}];function ve({plans:t}){const s=me({defaultOrderBy:"planId"}),r=z(),[d,u]=c.useState(t),n=G({name:"",status:"all",startDate:null,endDate:null});c.useEffect(()=>{u(t)},[t]);const i=J(n.state.startDate,n.state.endDate),a=Le({inputData:d,comparator:le(s.order,s.orderBy),filters:n.state,dateError:i}),p=ie(a,s.page,s.rowsPerPage),o=!!n.state.name||n.state.status!=="all"||!!n.state.startDate&&!!n.state.endDate,m=!a.length&&o||!a.length,P=c.useCallback(l=>{r.push(j.dashboard.plan.details(l))},[r]),L=c.useCallback(l=>{r.push(j.dashboard.plan.edit(l))},[r]),S=M(),{mutate:B}=oe({mutationFn:l=>R.delete(v.plan.delete+l),onSuccess:async()=>{const l=d.filter(k=>k.id!==id);Z.success("Delete success!"),u(l),s.onUpdatePageDeleteRow(p.length)},onSettled:async()=>{await S.invalidateQueries({queryKey:["plans"]}),await S.invalidateQueries({queryKey:["plans-status"]})},onError:()=>{}}),I=c.useCallback(l=>{B(l)},[p.length,s,d]);return e.jsx(V,{maxWidth:"xl",children:e.jsxs(f,{container:!0,spacing:3,children:[e.jsx(f,{xs:12,md:12,children:e.jsx(re,{links:[{name:"Dashboard",href:j.dashboard.root},{name:"Plan",href:j.dashboard.plan.root},{name:"List"}],action:e.jsx(C,{permission:b.ADD_PLAN,children:e.jsx(T,{component:W,href:j.dashboard.plan.new,variant:"contained",startIcon:e.jsx(g,{icon:"mingcute:add-line"}),children:"Add New Plan"})})})}),e.jsx(C,{permission:b.LIST_PLAN,children:e.jsx(f,{xs:12,md:12,children:e.jsxs(U,{children:[e.jsx(Se,{filters:n,onResetPage:s.onResetPage,dateError:i}),o&&e.jsx(Te,{filters:n,totalResults:a.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs($,{sx:{position:"relative"},children:[e.jsx(de,{dense:s.dense,numSelected:s.selected.length,rowCount:a.length}),e.jsx(X,{sx:{minHeight:444},children:e.jsxs(xe,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(je,{order:s.order,orderBy:s.orderBy,headLabel:Re,rowCount:a.length}),e.jsxs(ge,{children:[a.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(l=>e.jsx(De,{row:l,selected:s.selected.includes(l.id),onSelectRow:()=>s.onSelectRow(l.id),onDeleteRow:()=>I(l.id),onViewRow:()=>P(l.id),onEditRow:()=>L(l.id)},l.id)),e.jsx(ce,{height:s.dense?56:76,emptyRows:ue(s.page,s.rowsPerPage,a.length)}),e.jsx(he,{notFound:m})]})]})})]}),e.jsx(be,{page:s.page,dense:s.dense,count:a.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})})]})})}function Le({inputData:t,comparator:s,filters:r,dateError:d}){const{status:u,name:n,startDate:i,endDate:a}=r,p=t.map((o,m)=>[o,m]);return p.sort((o,m)=>{const P=s(o[0],m[0]);return P!==0?P:o[1]-m[1]}),t=p.map(o=>o[0]),n&&(t=t.filter(o=>o.id.toString().toLowerCase().indexOf(n.toLowerCase())!==-1||o.product.name.toLowerCase().indexOf(n.toLowerCase())!==-1||o.createdBy.firstName.toLowerCase().indexOf(n.toLowerCase())!==-1||o.createdBy.lastName.toLowerCase().indexOf(n.toLowerCase())!==-1)),u!=="all"&&(t=t.filter(o=>o.status===u)),d||i&&a&&(t=t.filter(o=>Y(o.createdAt,i,a))),t}const Be={title:`Plan list | Dashboard - ${se.site.name}`};function pt(){const t=ae({queryKey:["plans"],queryFn:async()=>(await R.get(v.plan.list)).data});return t.isPending||t.isLoading?e.jsx(ee,{}):t.isError?e.jsx(ne,{route:j.dashboard.plan.root}):e.jsxs(e.Fragment,{children:[e.jsx(te,{children:e.jsxs("title",{children:[" ",Be.title]})}),e.jsx(ve,{plans:t.data})]})}export{pt as default};