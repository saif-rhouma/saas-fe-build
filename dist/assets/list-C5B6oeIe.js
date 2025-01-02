import{Y as $,br as D,a3 as N,j as e,L as M,d1 as H,d8 as q,ek as b,$ as O,I as C,dc as _,a6 as K,e4 as w,a7 as x,e as v,r as m,S as Q,ec as W,W as z,df as G,e3 as U,p as j,dp as J,dQ as Y,cW as f,R as Z,cZ as X,B as ee,de as te,ed as ae,dq as B,dn as L,dr as se,dU as ne,H as le,C as oe}from"./index-3kUlxXkm.js";import{u as re,E as ie}from"./error-block-BTCpMwIj.js";import{u as de}from"./useMutation-DWyFExRk.js";import{C as ce}from"./custom-breadcrumbs-CQM3hT8w.js";import{P}from"./permission-access-controller-6Z2YefAG.js";import{g as ue,r as me,e as pe}from"./utils-MBUcMVfY.js";import{u as he}from"./use-table-9MzCtmNE.js";import{T as be}from"./table-no-data-DRMtffow.js";import{T as xe}from"./table-empty-rows-R6XLgnwX.js";import{T as ge,a as je,b as Ce,c as we}from"./table-head-custom-Bzh_BuNQ.js";import{T as Pe}from"./table-selected-action-77MIBAPT.js";import{T as fe}from"./table-pagination-custom-HAHTP3sF.js";import{C as Te}from"./confirm-dialog-DcDyWDMb.js";import{T as g}from"./TableCell-YgDy_fKI.js";import{T as ye}from"./TextField-Ff9PgcBD.js";import{I as Se}from"./InputAdornment-Ug97Thua.js";import{S as De}from"./Select-DOB8r047.js";import{F as Re,a as T,c as y}from"./filters-result-CHuN9x5s.js";import{C as S}from"./Chip-yUQfyewU.js";import"./incrementer-button-DlaR23JU.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-DygIpP7Y.js";import"./Checkbox-BPHZ30Zu.js";import"./TablePagination-CVcJMlXd.js";import"./KeyboardArrowRight-o7aJmcRm.js";import"./LastPage-FHI8cfYQ.js";import"./InputBase-Df4WeLlJ.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-DWtRb9VA.js";import"./DialogContent-BZuUPSmG.js";import"./DialogTitle-DD3683-9.js";import"./FormControl-BaWzc8Dl.js";import"./InputLabel-Df2ESQnA.js";import"./FormLabel-CX5M124t.js";import"./FormHelperText-47ensrNn.js";import"./Menu-CsXXwNKW.js";function ve({row:t,index:a,selected:l,onViewRow:c,onEditRow:r,onDeleteRow:i}){var p,h;const u=$(),{t:s}=D("plans"),d=N(),n=e.jsxs(ge,{hover:!0,selected:l,children:[e.jsx(g,{children:e.jsx(M,{color:"inherit",onClick:c,underline:"always",sx:{cursor:"pointer"},children:(t==null?void 0:t.ref)||a||(t==null?void 0:t.id)})}),e.jsx(g,{children:H(t.planDate)}),e.jsx(g,{children:t.product.name}),e.jsxs(g,{align:"center",children:[" ",t.quantity," "]}),e.jsx(g,{children:e.jsxs(q,{variant:"soft",color:t.status===b.Ready&&"success"||t.status===b.Pending&&"info"||t.status===b.ProcessingA&&"warning"||t.status===b.ProcessingB&&"error"||"default",children:[t.status===b.Pending&&`${s("listView.table.tableToolbar.selectMenu.pending")}`,t.status===b.Ready&&`${s("listView.table.tableToolbar.selectMenu.ready")}`,t.status===b.ProcessingA&&`${s("listView.table.tableToolbar.selectMenu.processingA")}`,t.status===b.ProcessingB&&`${s("listView.table.tableToolbar.selectMenu.processingB")}`]})}),e.jsxs(g,{children:[(p=t.createdBy)==null?void 0:p.firstName," ",(h=t.createdBy)==null?void 0:h.lastName]}),e.jsx(g,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(O,{color:d.open?"inherit":"default",onClick:d.onOpen,children:e.jsx(C,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[n,e.jsx(_,{open:d.open,anchorEl:d.anchorEl,onClose:d.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(K,{children:[e.jsx(P,{permission:w.VIEW_PLAN,children:e.jsxs(x,{onClick:()=>{c(),d.onClose()},children:[e.jsx(C,{icon:"solar:eye-bold"}),s("listView.table.tableActions.view")]})}),e.jsx(P,{permission:w.EDIT_PLAN,children:e.jsxs(x,{onClick:()=>{r(),d.onClose()},children:[e.jsx(C,{icon:"solar:pen-bold"}),s("listView.table.tableActions.edit")]})}),e.jsx(P,{permission:w.DELETE_PLAN,children:e.jsxs(x,{onClick:()=>{u.onTrue(),d.onClose()},sx:{color:"error.main"},children:[e.jsx(C,{icon:"solar:trash-bin-trash-bold"}),s("listView.table.tableActions.delete")]})})]})}),e.jsx(Te,{open:u.value,onClose:u.onFalse,title:s("listView.table.tableActions.delete"),content:"Are you sure want to delete?",action:e.jsx(v,{variant:"contained",color:"error",onClick:i,children:s("listView.table.tableActions.delete")})})]})}function Be({filters:t,onResetPage:a}){const[l,c]=m.useState("all"),{t:r}=D("plans"),i=m.useCallback(s=>{a(),t.setState({name:s.target.value})},[t,a]),u=m.useCallback(s=>{a(),t.setState({status:s.target.value}),c(s.target.value)},[t,a]);return e.jsxs(Q,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(ye,{sx:{width:420},value:t.state.name,onChange:i,placeholder:r("listView.table.tableToolbar.searchPlaceholder"),InputProps:{startAdornment:e.jsx(Se,{position:"start",children:e.jsx(C,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsxs(De,{sx:{width:420,textTransform:"capitalize"},value:l,onChange:u,children:[e.jsx(x,{value:"all",children:r("listView.table.tableToolbar.selectMenu.allPlans")}),e.jsx(x,{value:"Pending",children:r("listView.table.tableToolbar.selectMenu.pending")}),e.jsx(x,{value:"ProcessingA",children:r("listView.table.tableToolbar.selectMenu.processingA")}),e.jsx(x,{value:"ProcessingB",children:r("listView.table.tableToolbar.selectMenu.processingB")}),e.jsx(x,{value:"Ready",children:r("listView.table.tableToolbar.selectMenu.ready")})]})]})}function Le({filters:t,totalResults:a,onResetPage:l,sx:c}){const r=m.useCallback(()=>{l(),t.setState({name:""})},[t,l]),i=m.useCallback(()=>{l(),t.setState({status:"all"})},[t,l]),u=m.useCallback(()=>{l(),t.setState({startDate:null,endDate:null})},[t,l]),s=m.useCallback(()=>{l(),t.onResetState()},[t,l]);return e.jsxs(Re,{totalResults:a,onReset:s,sx:c,children:[e.jsx(T,{label:"Status:",isShow:t.state.status!=="all",children:e.jsx(S,{...y,label:t.state.status,onDelete:i,sx:{textTransform:"capitalize"}})}),e.jsx(T,{label:"Date:",isShow:!!(t.state.startDate&&t.state.endDate),children:e.jsx(S,{...y,label:W(t.state.startDate,t.state.endDate),onDelete:u})}),e.jsx(T,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(S,{...y,label:t.state.name,onDelete:r})})]})}function Ve({plans:t}){const a=he({defaultOrderBy:"planId"}),{t:l}=D("plans"),c=z(),r=[{id:"planId",label:"#",width:60},{id:"planDate",label:`${l("listView.table.tableHeader.date")}`,width:140},{id:"product",label:`${l("listView.table.tableHeader.product")}`,width:140},{id:"quantity",label:`${l("listView.table.tableHeader.quantity")}`,width:120,align:"center"},{id:"status",label:`${l("listView.table.tableHeader.status")}`,width:140},{id:"createdBy",label:`${l("listView.table.tableHeader.createdBy")}`,width:140},{id:"",width:88}],[i,u]=m.useState(t),s=G({name:"",status:"all",startDate:null,endDate:null});m.useEffect(()=>{u(t)},[t]);const d=U(s.state.startDate,s.state.endDate),n=Ae({inputData:i,comparator:ue(a.order,a.orderBy),filters:s.state,dateError:d}),p=me(n,a.page,a.rowsPerPage),h=!!s.state.name||s.state.status!=="all"||!!s.state.startDate&&!!s.state.endDate,V=!n.length&&h||!n.length,A=m.useCallback(o=>{c.push(j.dashboard.plan.details(o))},[c]),k=m.useCallback(o=>{c.push(j.dashboard.plan.edit(o))},[c]),R=J(),{mutate:E}=de({mutationFn:o=>B.delete(L.plan.delete+o),onSuccess:async()=>{const o=i.filter(F=>F.id!==id);se.success("Delete success!"),u(o),a.onUpdatePageDeleteRow(p.length)},onSettled:async()=>{await R.invalidateQueries({queryKey:["plans"]}),await R.invalidateQueries({queryKey:["plans-status"]})},onError:()=>{}}),I=m.useCallback(o=>{E(o)},[p.length,a,i]);return e.jsx(Y,{maxWidth:"xl",children:e.jsxs(f,{container:!0,spacing:3,children:[e.jsx(f,{xs:12,md:12,children:e.jsx(ce,{links:[{name:`${l("listView.breadCrumbsPageRootTitle")}`,href:j.dashboard.root},{name:`${l("listView.breadCrumbsParentPageTitle")}`,href:j.dashboard.plan.root},{name:`${l("listView.breadCrumbsPageTitle")}`}],action:e.jsx(P,{permission:w.ADD_PLAN,children:e.jsx(v,{component:Z,href:j.dashboard.plan.new,variant:"contained",startIcon:e.jsx(C,{icon:"mingcute:add-line"}),children:l("listView.addNewPlan")})})})}),e.jsx(P,{permission:w.LIST_PLAN,children:e.jsx(f,{xs:12,md:12,children:e.jsxs(X,{children:[e.jsx(Be,{filters:s,onResetPage:a.onResetPage,dateError:d}),h&&e.jsx(Le,{filters:s,totalResults:n.length,onResetPage:a.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(ee,{sx:{position:"relative"},children:[e.jsx(Pe,{dense:a.dense,numSelected:a.selected.length,rowCount:n.length}),e.jsx(te,{sx:{minHeight:444},children:e.jsxs(je,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Ce,{order:a.order,orderBy:a.orderBy,headLabel:r,rowCount:n.length}),e.jsxs(we,{children:[n.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(o=>e.jsx(ve,{row:o,selected:a.selected.includes(o.id),onSelectRow:()=>a.onSelectRow(o.id),onDeleteRow:()=>I(o.id),onViewRow:()=>A(o.id),onEditRow:()=>k(o.id)},o.id)),e.jsx(xe,{height:a.dense?56:76,emptyRows:pe(a.page,a.rowsPerPage,n.length)}),e.jsx(be,{notFound:V})]})]})})]}),e.jsx(fe,{page:a.page,dense:a.dense,count:n.length,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onChangeDense:a.onChangeDense,onRowsPerPageChange:a.onChangeRowsPerPage})]})})})]})})}function Ae({inputData:t,comparator:a,filters:l,dateError:c}){const{status:r,name:i,startDate:u,endDate:s}=l,d=t.map((n,p)=>[n,p]);return d.sort((n,p)=>{const h=a(n[0],p[0]);return h!==0?h:n[1]-p[1]}),t=d.map(n=>n[0]),i&&(t=t.filter(n=>n.id.toString().toLowerCase().indexOf(i.toLowerCase())!==-1||n.product.name.toLowerCase().indexOf(i.toLowerCase())!==-1||n.createdBy.firstName.toLowerCase().indexOf(i.toLowerCase())!==-1||n.createdBy.lastName.toLowerCase().indexOf(i.toLowerCase())!==-1)),r!=="all"&&(t=t.filter(n=>n.status===r)),c||u&&s&&(t=t.filter(n=>ae(n.createdAt,u,s))),t}const ke={title:`Plan list | Dashboard - ${oe.site.name}`};function Ct(){const t=re({queryKey:["plans"],queryFn:async()=>(await B.get(L.plan.list)).data});return t.isPending||t.isLoading?e.jsx(ne,{}):t.isError?e.jsx(ie,{route:j.dashboard.plan.root}):e.jsxs(e.Fragment,{children:[e.jsx(le,{children:e.jsxs("title",{children:[" ",ke.title]})}),e.jsx(Ve,{plans:t.data})]})}export{Ct as default};
