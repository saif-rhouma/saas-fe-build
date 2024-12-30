import{Y as b,a3 as v,j as e,$ as F,I as u,db as I,a6 as H,a7 as j,e as P,dn as L,r as p,de as $,e3 as q,W as A,p as c,dp as V,dQ as M,S as N,R as O,cV as Q,cY as z,B as K,dd as U,dq as f,dm as T,dr as W,dU as Y,H as J,C as _}from"./index-88qAwG8P.js";import{u as X,E as Z}from"./error-block-BTff90qR.js";import{u as ee}from"./useMutation-Bjm4Nnvr.js";import{C as se}from"./custom-breadcrumbs-x7W5GMPl.js";import{g as oe,r as te,e as re}from"./utils-MBUcMVfY.js";import{u as ae}from"./use-table-BYPgfP9k.js";import{T as ne}from"./table-no-data-wFoKraSE.js";import{T as ie}from"./table-empty-rows-6krMqYw2.js";import{T as le,a as de,b as me,c as ce}from"./table-head-custom-g2OgtrHv.js";import{T as pe}from"./table-selected-action-DnALz1xy.js";import{T as ue}from"./table-pagination-custom-Ds9-Dw8y.js";import{C as he}from"./confirm-dialog-BdxUyq-O.js";import{T as x}from"./TableCell-Cl8UZGxf.js";import{P as ge}from"./permissions-group-table-toolbar-CwfKrelc.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-vgDCQT8r.js";import"./Checkbox-Cpc8f1GH.js";import"./TablePagination-CrnuwEMO.js";import"./KeyboardArrowRight-fE7_2VJ7.js";import"./LastPage-B6xWbdc0.js";import"./Select-DFC-Q2QB.js";import"./Menu-BDUaDfAf.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DD8qHu7J.js";import"./FormControlLabel-ts_MkIWE.js";import"./DialogContent-F9o-_CVT.js";import"./DialogTitle-CvyYkdF0.js";import"./TextField-CQpihH7F.js";import"./FormControl-BXGEHd-f.js";import"./InputLabel-B0kOUcWA.js";import"./FormLabel-Ck5_RgM9.js";import"./FormHelperText-DA7jizKd.js";import"./InputAdornment-Bg-m_z4_.js";const xe=({row:o,selected:s,onViewRow:i,onDeleteRow:d,onEditRow:m})=>{var h,l;const t=b(),r=v(),n=e.jsxs(le,{hover:!0,selected:s,children:[e.jsx(x,{children:o==null?void 0:o.name}),e.jsx(x,{children:((h=o==null?void 0:o.permissions)==null?void 0:h.length)||0}),e.jsx(x,{children:((l=o==null?void 0:o.staffs)==null?void 0:l.length)||0}),e.jsx(x,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(F,{color:r.open?"inherit":"default",onClick:r.onOpen,children:e.jsx(u,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[n,e.jsx(I,{open:r.open,anchorEl:r.anchorEl,onClose:r.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(H,{children:[e.jsxs(j,{onClick:()=>{i(),r.onClose()},children:[e.jsx(u,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(j,{onClick:()=>{m(),r.onClose()},children:[e.jsx(u,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(j,{onClick:()=>{t.onTrue(),r.onClose()},sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})}),e.jsx(he,{open:t.value,onClose:t.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(P,{variant:"contained",color:"error",onClick:d,children:"Delete"})})]})};function be({permissionsGroups:o}){const s=ae({defaultOrderBy:"orderNumber"}),{t:i}=L("setting");b(),b();const d=[{id:"year",label:`${i("permissionsGroups.table.tableHeader.name")}`},{id:"startDate",label:`${i("permissionsGroups.table.tableHeader.permissionsCount")}`,width:240},{id:"endDate",label:`${i("permissionsGroups.table.tableHeader.usersCount")}`,width:240},{id:"",width:88}],m=b(),[t,r]=p.useState(o),n=$({name:""}),h=q(n.state.startDate,n.state.endDate);p.useEffect(()=>{r(o)},[o]);const l=je({inputData:t,comparator:oe(s.order,s.orderBy),filters:n.state}),C=te(l,s.page,s.rowsPerPage),y=!!n.state.name||n.state.status!=="all"||!!n.state.startDate&&!!n.state.endDate,w=!l.length&&y||!l.length,R=p.useCallback(a=>{B(a)},[C.length,s,t]),g=A(),D=p.useCallback(a=>{g.push(c.dashboard.tools.editPermissions(a))},[g]),E=p.useCallback(a=>{g.push(c.dashboard.tools.detailsPermissions(a))},[g]),G=V(),{mutate:B}=ee({mutationFn:a=>f.delete(T.permissionsGroup.delete+a),onSuccess:async a=>{const S=t.filter(k=>k.id!==a);W.success(i("permissionsGroups.toastMessages.deleteSuccess")),r(S),s.onUpdatePageDeleteRow(C.length),await G.invalidateQueries({queryKey:["permissions-groups"]})},onSettled:async()=>{m.onFalse()},onError:()=>{}});return e.jsx(M,{children:e.jsxs(N,{spacing:3,children:[e.jsx(se,{links:[{name:`${i("permissionsGroups.breadCrumbsPageRootTitle")}`,href:c.dashboard.root},{name:`${i("permissionsGroups.breadCrumbsParentPageTitle")}`,href:c.dashboard.tools.root},{name:`${i("permissionsGroups.breadCrumbsPageTitle")}`}],sx:{mb:{xs:3,md:5}},action:e.jsx(P,{component:O,href:c.dashboard.tools.newPermissions,variant:"contained",startIcon:e.jsx(u,{icon:"mingcute:add-line"}),children:i("permissionsGroups.addNewPg")})}),e.jsx(Q,{xs:12,md:12,children:e.jsxs(z,{children:[e.jsx(ge,{filters:n,onResetPage:s.onResetPage,dateError:h}),e.jsxs(K,{sx:{position:"relative"},children:[e.jsx(pe,{dense:s.dense,numSelected:s.selected.length,rowCount:l.length}),e.jsx(U,{sx:{minHeight:444},children:e.jsxs(de,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(me,{order:s.order,orderBy:s.orderBy,headLabel:d,rowCount:l.length}),e.jsxs(ce,{children:[l.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(a=>e.jsx(xe,{row:a,selected:s.selected.includes(a.id),onEditRow:()=>D(a.id),onViewRow:()=>E(a.id),onDeleteRow:()=>R(a.id)},a.id)),e.jsx(ie,{height:s.dense?56:76,emptyRows:re(s.page,s.rowsPerPage,l.length)}),e.jsx(ne,{notFound:w})]})]})})]}),e.jsx(ue,{page:s.page,dense:s.dense,count:l.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})})}function je({inputData:o,comparator:s,filters:i}){const{name:d}=i,m=o.map((t,r)=>[t,r]);return m.sort((t,r)=>{const n=s(t[0],r[0]);return n!==0?n:t[1]-r[1]}),o=m.map(t=>t[0]),d&&(o=o.filter(t=>t.name.toLowerCase().indexOf(d.toLowerCase())!==-1)),o}const Ce={title:`Tools | Dashboard - ${_.site.name}`};function os(){const o=X({queryKey:["permissions-groups"],queryFn:async()=>{const{data:s}=await f.get(T.permissionsGroup.list);return s}});return o.isLoading?e.jsx(Y,{}):o.isError?e.jsx(Z,{route:c.dashboard.tools.root}):e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsxs("title",{children:[" ",Ce.title]})}),e.jsx(be,{permissionsGroups:o.data})]})}export{os as default};
