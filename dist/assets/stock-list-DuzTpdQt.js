import{j as t,S as y,A as P,C as h,B as f,r as x,de as j,ec as b,dP as k,p,e2 as C,e as T,em as S,I as R,aB as _,ed as B,dT as N,H as D,dp as E,dm as I}from"./index-BUrqGYHV.js";import{u as q,E as A}from"./error-block-DN8xkUHk.js";import{C as L}from"./custom-breadcrumbs-CBrfH2jq.js";import{P as F}from"./permission-access-controller-BuU2g-Nm.js";import{g as O,e as v}from"./utils-MBUcMVfY.js";import{u as H}from"./use-table-B2n9CG57.js";import{T as Q}from"./table-no-data-DXNlu0Ia.js";import{T as W}from"./table-empty-rows-CJ9IsNU0.js";import{T as z,a as G,b as K,c as V}from"./table-head-custom-B0fXVQKp.js";import{T as $}from"./table-selected-action-BtQB95UD.js";import{T as J}from"./table-pagination-custom-0Y3O23fe.js";import{T as o}from"./TableCell-emlbuQ_R.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-UDDXE__A.js";import"./Checkbox-CulbxVIZ.js";import"./TablePagination-DCLzxQi3.js";import"./KeyboardArrowRight-CRQH5XCK.js";import"./LastPage-BZ-IWehA.js";import"./Select-LbnHio0-.js";import"./Menu-CLp5I9kG.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-Csxyl5rk.js";import"./FormControlLabel-4OLGmRDr.js";const M=({row:e,selected:s})=>{const l=t.jsxs(z,{hover:!0,selected:s,children:[t.jsx(o,{children:e==null?void 0:e.productId}),t.jsx(o,{children:t.jsxs(y,{spacing:2,direction:"row",alignItems:"center",children:[t.jsx(P,{alt:e==null?void 0:e.name,src:h.site.serverFileHost+((e==null?void 0:e.image)||h.site.defaultImgPlaceHolder)}),t.jsx(f,{component:"span",children:e==null?void 0:e.name})]})}),t.jsx(o,{children:e==null?void 0:e.totals_quantity}),t.jsx(o,{children:e==null?void 0:e.pending_quantity}),t.jsx(o,{children:e==null?void 0:e.processing_a_quantity}),t.jsx(o,{children:e==null?void 0:e.processing_b_quantity}),t.jsx(o,{children:e==null?void 0:e.ready_quantity}),t.jsx(o,{children:e==null?void 0:e.in_stock})]});return t.jsx(t.Fragment,{children:l})},U=[{id:"id",label:"#",width:60},{id:"productName",label:"Product Name",width:260},{id:"planId",label:"Plan Qty"},{id:"orderAmount",label:"Pending Stock"},{id:"status",label:"Processing A Stock"},{id:"status",label:"Processing B Stock"},{id:"status",label:"Ready to Deliver Stock"},{id:"status",label:"In Stock"}],X=({products:e})=>{const s=H({defaultOrderBy:"orderNumber"}),[l,u]=x.useState(e),n=j({name:"",status:"all",startDate:null,endDate:null}),d=b(n.state.startDate,n.state.endDate),r=Y({inputData:l,comparator:O(s.order,s.orderBy),filters:n.state,dateError:d});x.useEffect(()=>{u(e)},[e]);const c=!!n.state.name||n.state.status!=="all"||!!n.state.startDate&&!!n.state.endDate,m=!r.length&&c||!r.length,a=[{displayName:"Product Name",key:"name"},{displayName:"Plan Qty",key:"totals_quantity"},{displayName:"Pending Stock",key:"pending_quantity"},{displayName:"Processing A Stock",key:"processing_a_quantity"},{displayName:"Processing B Stock",key:"processing_b_quantity"},{displayName:"Ready to Deliver Stock",key:"ready_quantity"},{displayName:"In Stock",key:"in_stock"}];return t.jsx(k,{maxWidth:"xl",children:t.jsxs(y,{spacing:3,children:[t.jsx(L,{links:[{name:"Dashboard",href:p.dashboard.root},{name:"Reports",href:p.dashboard.reports.root},{name:"Stock Report",href:p.dashboard.reports.stock}],action:t.jsx(F,{permission:C.DOWNLOAD_REPORT,children:t.jsx(T,{onClick:()=>{S("stock reports",a,r,"Stock")},variant:"contained",startIcon:t.jsx(R,{icon:"mdi:microsoft-excel"}),children:"Export Excel"})})}),t.jsxs(_,{children:[t.jsxs(f,{sx:{position:"relative"},children:[t.jsx($,{dense:s.dense,numSelected:s.selected.length,rowCount:r.length}),t.jsxs(G,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(K,{order:s.order,orderBy:s.orderBy,headLabel:U,rowCount:r.length}),t.jsxs(V,{children:[r.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(i=>t.jsx(M,{row:i,selected:s.selected.includes(i.id)},i.id)),t.jsx(W,{height:s.dense?56:76,emptyRows:v(s.page,s.rowsPerPage,r.length)}),t.jsx(Q,{notFound:m})]})]})]}),t.jsx(J,{page:s.page,dense:s.dense,count:r.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})]})})};function Y({inputData:e,comparator:s,filters:l,dateError:u}){const{status:n,name:d,startDate:r,endDate:c}=l,m=e.map((a,i)=>[a,i]);return m.sort((a,i)=>{const g=s(a[0],i[0]);return g!==0?g:a[1]-i[1]}),e=m.map(a=>a[0]),d&&(e=e.filter(a=>a.orderNumber.toLowerCase().indexOf(d.toLowerCase())!==-1||a.customer.name.toLowerCase().indexOf(d.toLowerCase())!==-1||a.customer.email.toLowerCase().indexOf(d.toLowerCase())!==-1)),n!=="all"&&(e=e.filter(a=>a.status===n)),u||r&&c&&(e=e.filter(a=>B(a.createdAt,r,c))),e}const Z={title:`Reports list | Dashboard - ${h.site.name}`};function Se(){const e=q({queryKey:["stock-details"],queryFn:async()=>(await E.get(I.stock.details)).data});return e.isPending||e.isLoading?t.jsx(N,{}):e.isError?t.jsx(A,{route:p.dashboard.reports.root}):t.jsxs(t.Fragment,{children:[t.jsx(D,{children:t.jsxs("title",{children:[" ",Z.title]})}),t.jsx(X,{products:e.data})]})}export{Se as default};
