import{i as I,aP as A,j as e,L as F,d0 as N,d7 as q,l as O,I as g,db as _,aR as H,e3 as b,aS as h,e as T,r as c,S as K,eg as Q,g as z,de as V,e2 as M,p as j,dn as W,dP as G,cV as f,R as J,cY as U,B as Y,dd as $,eh as X,dp as R,dm as v,dq as Z,dT as ee,H as te,C as se}from"./index-DSZ8-SnN.js";import{u as ae,E as ne}from"./error-block-Bfei_nF0.js";import{u as oe}from"./useMutation-DusrxMaX.js";import{C as re}from"./custom-breadcrumbs-D_ovYyL8.js";import{P as C}from"./permission-access-controller-BdKtae4H.js";import{g as le,r as ie,e as de}from"./utils-MBUcMVfY.js";import{u as ce}from"./use-table-CxMdT4pf.js";import{T as me}from"./table-no-data-DwOuDKHk.js";import{T as ue}from"./table-empty-rows-BaAfroyB.js";import{T as he,a as pe,b as xe,c as je}from"./table-head-custom-YWIPj6NO.js";import{T as ge}from"./table-selected-action-xpEV6Xbv.js";import{T as be}from"./table-pagination-custom-DI2JWg0p.js";import{C as Ce}from"./confirm-dialog-CkFQTJ92.js";import{T as x}from"./TableCell-DSOEY65A.js";import{T as Pe}from"./TextField-DXnGVnKc.js";import{I as fe}from"./InputAdornment-DQTsYq75.js";import{S as ye}from"./Select-bvm1T7cr.js";import{F as we,a as y,c as w}from"./filters-result--GXLZrQa.js";import{C as D}from"./Chip-BxDt4Lxe.js";import"./incrementer-button-D3YNKy40.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-BIlFgVWF.js";import"./Checkbox-DIewUcg3.js";import"./TablePagination-DMx1QqWY.js";import"./KeyboardArrowRight-ySj1HR2l.js";import"./LastPage-DNd_MO8z.js";import"./InputBase-DUSf-v3M.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-DcdZLABF.js";import"./DialogContent-9Yn0EsJP.js";import"./DialogTitle-kOHEE1rt.js";import"./FormControl-DVwuE-Z3.js";import"./InputLabel-Dt93HXfK.js";import"./FormLabel-D8PgMfa3.js";import"./FormHelperText-CAtOlLkP.js";import"./Menu-WNpJDxC0.js";function De({row:t,index:s,selected:r,onViewRow:d,onEditRow:m,onDeleteRow:n}){var o,u;const i=I(),a=A(),p=e.jsxs(he,{hover:!0,selected:r,children:[e.jsx(x,{children:e.jsx(F,{color:"inherit",onClick:d,underline:"always",sx:{cursor:"pointer"},children:(t==null?void 0:t.ref)||s||(t==null?void 0:t.id)})}),e.jsx(x,{children:N(t.planDate)}),e.jsx(x,{children:t.product.name}),e.jsxs(x,{align:"center",children:[" ",t.quantity," "]}),e.jsx(x,{children:e.jsx(q,{variant:"soft",color:t.status==="Ready"&&"success"||t.status==="Pending"&&"info"||t.status==="ProcessingA"&&"warning"||t.status==="ProcessingB"&&"error"||"default",children:t.status})}),e.jsxs(x,{children:[(o=t.createdBy)==null?void 0:o.firstName," ",(u=t.createdBy)==null?void 0:u.lastName]}),e.jsx(x,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(O,{color:a.open?"inherit":"default",onClick:a.onOpen,children:e.jsx(g,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[p,e.jsx(_,{open:a.open,anchorEl:a.anchorEl,onClose:a.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(H,{children:[e.jsx(C,{permission:b.VIEW_PLAN,children:e.jsxs(h,{onClick:()=>{d(),a.onClose()},children:[e.jsx(g,{icon:"solar:eye-bold"}),"View"]})}),e.jsx(C,{permission:b.EDIT_PLAN,children:e.jsxs(h,{onClick:()=>{m(),a.onClose()},children:[e.jsx(g,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(C,{permission:b.DELETE_PLAN,children:e.jsxs(h,{onClick:()=>{i.onTrue(),a.onClose()},sx:{color:"error.main"},children:[e.jsx(g,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Ce,{open:i.value,onClose:i.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(T,{variant:"contained",color:"error",onClick:n,children:"Delete"})})]})}function Se({filters:t,onResetPage:s}){const[r,d]=c.useState("all"),m=c.useCallback(i=>{s(),t.setState({name:i.target.value})},[t,s]),n=c.useCallback(i=>{s(),t.setState({status:i.target.value}),d(i.target.value)},[t,s]);return e.jsxs(K,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(Pe,{sx:{width:420},value:t.state.name,onChange:m,placeholder:"Search by product or plan number...",InputProps:{startAdornment:e.jsx(fe,{position:"start",children:e.jsx(g,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsxs(ye,{sx:{width:420,textTransform:"capitalize"},value:r,onChange:n,children:[e.jsx(h,{value:"all",children:"All Plans"}),e.jsx(h,{value:"Pending",children:"Pending"}),e.jsx(h,{value:"ProcessingA",children:"Processing-A"}),e.jsx(h,{value:"ProcessingB",children:"Processing-B"}),e.jsx(h,{value:"Ready",children:"Ready"})]})]})}function Te({filters:t,totalResults:s,onResetPage:r,sx:d}){const m=c.useCallback(()=>{r(),t.setState({name:""})},[t,r]),n=c.useCallback(()=>{r(),t.setState({status:"all"})},[t,r]),i=c.useCallback(()=>{r(),t.setState({startDate:null,endDate:null})},[t,r]),a=c.useCallback(()=>{r(),t.onResetState()},[t,r]);return e.jsxs(we,{totalResults:s,onReset:a,sx:d,children:[e.jsx(y,{label:"Status:",isShow:t.state.status!=="all",children:e.jsx(D,{...w,label:t.state.status,onDelete:n,sx:{textTransform:"capitalize"}})}),e.jsx(y,{label:"Date:",isShow:!!(t.state.startDate&&t.state.endDate),children:e.jsx(D,{...w,label:Q(t.state.startDate,t.state.endDate),onDelete:i})}),e.jsx(y,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(D,{...w,label:t.state.name,onDelete:m})})]})}const Re=[{id:"planId",label:"Plan ID",width:60},{id:"planDate",label:"Plan Date",width:140},{id:"product",label:"Product",width:140},{id:"quantity",label:"Quantity",width:120,align:"center"},{id:"status",label:"Status",width:140},{id:"createdBy",label:"Created By",width:140},{id:"",width:88}];function ve({plans:t}){const s=ce({defaultOrderBy:"planId"}),r=z(),[d,m]=c.useState(t),n=V({name:"",status:"all",startDate:null,endDate:null});c.useEffect(()=>{m(t)},[t]);const i=M(n.state.startDate,n.state.endDate),a=Le({inputData:d,comparator:le(s.order,s.orderBy),filters:n.state,dateError:i}),p=ie(a,s.page,s.rowsPerPage),o=!!n.state.name||n.state.status!=="all"||!!n.state.startDate&&!!n.state.endDate,u=!a.length&&o||!a.length,P=c.useCallback(l=>{r.push(j.dashboard.plan.details(l))},[r]),L=c.useCallback(l=>{r.push(j.dashboard.plan.edit(l))},[r]),S=W(),{mutate:B}=oe({mutationFn:l=>R.delete(v.plan.delete+l),onSuccess:async()=>{const l=d.filter(E=>E.id!==id);Z.success("Delete success!"),m(l),s.onUpdatePageDeleteRow(p.length)},onSettled:async()=>{await S.invalidateQueries({queryKey:["plans"]}),await S.invalidateQueries({queryKey:["plans-status"]})},onError:()=>{}}),k=c.useCallback(l=>{B(l)},[p.length,s,d]);return e.jsx(G,{maxWidth:"xl",children:e.jsxs(f,{container:!0,spacing:3,children:[e.jsx(f,{xs:12,md:12,children:e.jsx(re,{links:[{name:"Dashboard",href:j.dashboard.root},{name:"Plan",href:j.dashboard.plan.root},{name:"List"}],action:e.jsx(C,{permission:b.ADD_PLAN,children:e.jsx(T,{component:J,href:j.dashboard.plan.new,variant:"contained",startIcon:e.jsx(g,{icon:"mingcute:add-line"}),children:"Add New Plan"})})})}),e.jsx(C,{permission:b.LIST_PLAN,children:e.jsx(f,{xs:12,md:12,children:e.jsxs(U,{children:[e.jsx(Se,{filters:n,onResetPage:s.onResetPage,dateError:i}),o&&e.jsx(Te,{filters:n,totalResults:a.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(Y,{sx:{position:"relative"},children:[e.jsx(ge,{dense:s.dense,numSelected:s.selected.length,rowCount:a.length}),e.jsx($,{sx:{minHeight:444},children:e.jsxs(pe,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(xe,{order:s.order,orderBy:s.orderBy,headLabel:Re,rowCount:a.length}),e.jsxs(je,{children:[a.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(l=>e.jsx(De,{row:l,selected:s.selected.includes(l.id),onSelectRow:()=>s.onSelectRow(l.id),onDeleteRow:()=>k(l.id),onViewRow:()=>P(l.id),onEditRow:()=>L(l.id)},l.id)),e.jsx(ue,{height:s.dense?56:76,emptyRows:de(s.page,s.rowsPerPage,a.length)}),e.jsx(me,{notFound:u})]})]})})]}),e.jsx(be,{page:s.page,dense:s.dense,count:a.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})})]})})}function Le({inputData:t,comparator:s,filters:r,dateError:d}){const{status:m,name:n,startDate:i,endDate:a}=r,p=t.map((o,u)=>[o,u]);return p.sort((o,u)=>{const P=s(o[0],u[0]);return P!==0?P:o[1]-u[1]}),t=p.map(o=>o[0]),n&&(t=t.filter(o=>o.id.toString().toLowerCase().indexOf(n.toLowerCase())!==-1||o.product.name.toLowerCase().indexOf(n.toLowerCase())!==-1||o.createdBy.firstName.toLowerCase().indexOf(n.toLowerCase())!==-1||o.createdBy.lastName.toLowerCase().indexOf(n.toLowerCase())!==-1)),m!=="all"&&(t=t.filter(o=>o.status===m)),d||i&&a&&(t=t.filter(o=>X(o.createdAt,i,a))),t}const Be={title:`Plan list | Dashboard - ${se.site.name}`};function jt(){const t=ae({queryKey:["plans"],queryFn:async()=>(await R.get(v.plan.list)).data});return t.isPending||t.isLoading?e.jsx(ee,{}):t.isError?e.jsx(ne,{route:j.dashboard.plan.root}):e.jsxs(e.Fragment,{children:[e.jsx(te,{children:e.jsxs("title",{children:[" ",Be.title]})}),e.jsx(ve,{plans:t.data})]})}export{jt as default};
