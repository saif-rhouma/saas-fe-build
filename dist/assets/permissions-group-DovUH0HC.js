import{i as b,aP as k,j as e,l as v,I as u,db as F,aR as I,aS as j,e as P,r as p,de as G,ed as L,g as N,p as d,dn as q,dP as A,S as H,R as V,cV as O,cY as M,B as Q,dd as z,dp as f,dm as C,dq as K,dT as U,H as J,C as W}from"./index-ElVqIGcB.js";import{u as Y,E as _}from"./error-block-D1Wv1ibr.js";import{u as $}from"./useMutation-Bncb4rlV.js";import{C as X}from"./custom-breadcrumbs-CBqi865E.js";import{g as Z,r as ee,e as se}from"./utils-MBUcMVfY.js";import{u as oe}from"./use-table-CkfRkHqo.js";import{T as te}from"./table-no-data-CbKFQvxp.js";import{T as re}from"./table-empty-rows-C-DsiXF6.js";import{T as ae,a as ne,b as ie,c as le}from"./table-head-custom-Bna6vkEk.js";import{T as de}from"./table-selected-action-Bnv8C0Lo.js";import{T as ce}from"./table-pagination-custom-B7Jo03aK.js";import{C as me}from"./confirm-dialog-BLQbtW9C.js";import{T as x}from"./TableCell-B_LOBPFc.js";import{P as pe}from"./permissions-group-table-toolbar-B5Wl9wZg.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-2LXir5-a.js";import"./Checkbox-C2uYWbTl.js";import"./TablePagination-C85A18cO.js";import"./KeyboardArrowRight-BusmjiF6.js";import"./LastPage-ZzH3xXhT.js";import"./Select-_pqpK2mU.js";import"./Menu-DkcwaS5T.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-zeET2Sei.js";import"./FormControlLabel-DXHIWK9H.js";import"./DialogContent-Duo2pg8C.js";import"./DialogTitle-DxYQvFou.js";import"./TextField-CiF1hxc-.js";import"./FormControl-T65SLQDL.js";import"./InputLabel-D_pXLzl4.js";import"./FormLabel-B9_mBwZG.js";import"./FormHelperText-CTeFjG1s.js";import"./InputAdornment-CFGayAjm.js";const ue=({row:o,selected:s,onViewRow:c,onDeleteRow:i,onEditRow:l})=>{var m,h;const t=b(),a=k(),n=e.jsxs(ae,{hover:!0,selected:s,children:[e.jsx(x,{children:o==null?void 0:o.name}),e.jsx(x,{children:((m=o==null?void 0:o.permissions)==null?void 0:m.length)||0}),e.jsx(x,{children:((h=o==null?void 0:o.staffs)==null?void 0:h.length)||0}),e.jsx(x,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(v,{color:a.open?"inherit":"default",onClick:a.onOpen,children:e.jsx(u,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[n,e.jsx(F,{open:a.open,anchorEl:a.anchorEl,onClose:a.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(I,{children:[e.jsxs(j,{onClick:()=>{c(),a.onClose()},children:[e.jsx(u,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(j,{onClick:()=>{l(),a.onClose()},children:[e.jsx(u,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(j,{onClick:()=>{t.onTrue(),a.onClose()},sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})}),e.jsx(me,{open:t.value,onClose:t.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(P,{variant:"contained",color:"error",onClick:i,children:"Delete"})})]})},he=[{id:"year",label:"Name"},{id:"startDate",label:"Permissions Number",width:240},{id:"endDate",label:"Users Number",width:240},{id:"",width:88}];function ge({permissionsGroups:o}){const s=oe({defaultOrderBy:"orderNumber"});b(),b();const c=b(),[i,l]=p.useState(o),t=G({name:""}),a=L(t.state.startDate,t.state.endDate);p.useEffect(()=>{l(o)},[o]);const n=xe({inputData:i,comparator:Z(s.order,s.orderBy),filters:t.state}),m=ee(n,s.page,s.rowsPerPage),h=!!t.state.name||t.state.status!=="all"||!!t.state.startDate&&!!t.state.endDate,T=!n.length&&h||!n.length,y=p.useCallback(r=>{E(r)},[m.length,s,i]),g=N(),w=p.useCallback(r=>{g.push(d.dashboard.tools.editPermissions(r))},[g]),R=p.useCallback(r=>{g.push(d.dashboard.tools.detailsPermissions(r))},[g]),D=q(),{mutate:E}=$({mutationFn:r=>f.delete(C.permissionsGroup.delete+r),onSuccess:async r=>{const B=i.filter(S=>S.id!==r);K.success("Delete success!"),l(B),s.onUpdatePageDeleteRow(m.length),await D.invalidateQueries({queryKey:["permissions-groups"]})},onSettled:async()=>{c.onFalse()},onError:()=>{}});return e.jsx(A,{children:e.jsxs(H,{spacing:3,children:[e.jsx(X,{links:[{name:"Dashboard",href:d.dashboard.root},{name:"Tools",href:d.dashboard.tools.root},{name:"Permissions Groups"}],sx:{mb:{xs:3,md:5}},action:e.jsx(P,{component:V,href:d.dashboard.tools.newPermissions,variant:"contained",startIcon:e.jsx(u,{icon:"mingcute:add-line"}),children:"New Permissions Group"})}),e.jsx(O,{xs:12,md:12,children:e.jsxs(M,{children:[e.jsx(pe,{filters:t,onResetPage:s.onResetPage,dateError:a}),e.jsxs(Q,{sx:{position:"relative"},children:[e.jsx(de,{dense:s.dense,numSelected:s.selected.length,rowCount:n.length}),e.jsx(z,{sx:{minHeight:444},children:e.jsxs(ne,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(ie,{order:s.order,orderBy:s.orderBy,headLabel:he,rowCount:n.length}),e.jsxs(le,{children:[n.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(r=>e.jsx(ue,{row:r,selected:s.selected.includes(r.id),onEditRow:()=>w(r.id),onViewRow:()=>R(r.id),onDeleteRow:()=>y(r.id)},r.id)),e.jsx(re,{height:s.dense?56:76,emptyRows:se(s.page,s.rowsPerPage,n.length)}),e.jsx(te,{notFound:T})]})]})})]}),e.jsx(ce,{page:s.page,dense:s.dense,count:n.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})})}function xe({inputData:o,comparator:s,filters:c}){const{name:i}=c,l=o.map((t,a)=>[t,a]);return l.sort((t,a)=>{const n=s(t[0],a[0]);return n!==0?n:t[1]-a[1]}),o=l.map(t=>t[0]),i&&(o=o.filter(t=>t.name.toLowerCase().indexOf(i.toLowerCase())!==-1)),o}const be={title:`Tools | Dashboard - ${W.site.name}`};function es(){const o=Y({queryKey:["permissions-groups"],queryFn:async()=>{const{data:s}=await f.get(C.permissionsGroup.list);return s}});return o.isLoading?e.jsx(U,{}):o.isError?e.jsx(_,{route:d.dashboard.tools.root}):e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsxs("title",{children:[" ",be.title]})}),e.jsx(ge,{permissionsGroups:o.data})]})}export{es as default};
