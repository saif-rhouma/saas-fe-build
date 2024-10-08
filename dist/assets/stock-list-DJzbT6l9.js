import{j as t,S as y,A as j,C as h,B as f,r as x,dz as P,eo as b,e8 as k,p,em as C,e as S,ez as T,I as R,aD as _,ep as D,ec as N,H as B,dJ as E,dH as I}from"./index-CGa_Q6Py.js";import{u as q,E as A}from"./error-block-stWvsMsx.js";import{C as L}from"./custom-breadcrumbs-UiY5PgKl.js";import{P as F}from"./permission-access-controller-DkEHMJRe.js";import{g as O,T as v,a as H,e as z}from"./table-selected-action-CI1imvwh.js";import{u as Q}from"./use-table-Df2CeYBc.js";import{T as W}from"./table-no-data-EU9bMd-R.js";import{T as G,a as J,b as K,c as V}from"./table-head-custom-CWkKt6RV.js";import{T as $}from"./table-pagination-custom-DM1iVbyP.js";import{T as o}from"./TableCell-BagFzXfr.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-C-tt3dk-.js";import"./empty-content-D4xWPsWi.js";import"./TablePagination-D7WE1nHD.js";import"./KeyboardArrowRight-DTzh8lht.js";import"./LastPage-DVTcRzyf.js";import"./Select-C3EwVc3m.js";import"./Menu-CEGb_rPj.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-CW41dL9k.js";import"./FormControlLabel-ULMw-Rz6.js";const M=({row:e,selected:s})=>{const d=t.jsxs(G,{hover:!0,selected:s,children:[t.jsx(o,{children:e==null?void 0:e.productId}),t.jsx(o,{children:t.jsxs(y,{spacing:2,direction:"row",alignItems:"center",children:[t.jsx(j,{alt:e==null?void 0:e.name,src:h.site.serverFileHost+((e==null?void 0:e.image)||h.site.defaultImgPlaceHolder)}),t.jsx(f,{component:"span",children:e==null?void 0:e.name})]})}),t.jsx(o,{children:e==null?void 0:e.totals_quantity}),t.jsx(o,{children:e==null?void 0:e.pending_quantity}),t.jsx(o,{children:e==null?void 0:e.processing_a_quantity}),t.jsx(o,{children:e==null?void 0:e.processing_b_quantity}),t.jsx(o,{children:e==null?void 0:e.ready_quantity}),t.jsx(o,{children:e==null?void 0:e.in_stock})]});return t.jsx(t.Fragment,{children:d})},U=[{id:"id",label:"#",width:60},{id:"productName",label:"Product Name",width:260},{id:"planId",label:"Plan Qty"},{id:"orderAmount",label:"Pending Stock"},{id:"status",label:"Processing A Stock"},{id:"status",label:"Processing B Stock"},{id:"status",label:"Ready to Deliver Stock"},{id:"status",label:"In Stock"}],X=({products:e})=>{const s=Q({defaultOrderBy:"orderNumber"}),[d,u]=x.useState(e),r=P({name:"",status:"all",startDate:null,endDate:null}),l=b(r.state.startDate,r.state.endDate),n=Y({inputData:d,comparator:O(s.order,s.orderBy),filters:r.state,dateError:l});x.useEffect(()=>{u(e)},[e]);const c=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate,m=!n.length&&c||!n.length,a=[{displayName:"Product Name",key:"name"},{displayName:"Plan Qty",key:"totals_quantity"},{displayName:"Pending Stock",key:"pending_quantity"},{displayName:"Processing A Stock",key:"processing_a_quantity"},{displayName:"Processing B Stock",key:"processing_b_quantity"},{displayName:"Ready to Deliver Stock",key:"ready_quantity"},{displayName:"In Stock",key:"in_stock"}];return t.jsx(k,{maxWidth:"xl",children:t.jsxs(y,{spacing:3,children:[t.jsx(L,{links:[{name:"Dashboard",href:p.dashboard.root},{name:"Reports",href:p.dashboard.reports.root},{name:"Stock Report",href:p.dashboard.reports.stock}],action:t.jsx(F,{permission:C.DOWNLOAD_REPORT,children:t.jsx(S,{onClick:()=>{T("stock reports",a,n,"Stock")},variant:"contained",startIcon:t.jsx(R,{icon:"mdi:microsoft-excel"}),children:"Export Excel"})})}),t.jsxs(_,{children:[t.jsxs(f,{sx:{position:"relative"},children:[t.jsx(v,{dense:s.dense,numSelected:s.selected.length,rowCount:n.length}),t.jsxs(J,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(K,{order:s.order,orderBy:s.orderBy,headLabel:U,rowCount:n.length}),t.jsxs(V,{children:[n.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(i=>t.jsx(M,{row:i,selected:s.selected.includes(i.id)},i.id)),t.jsx(H,{height:s.dense?56:76,emptyRows:z(s.page,s.rowsPerPage,n.length)}),t.jsx(W,{notFound:m})]})]})]}),t.jsx($,{page:s.page,dense:s.dense,count:n.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})]})})};function Y({inputData:e,comparator:s,filters:d,dateError:u}){const{status:r,name:l,startDate:n,endDate:c}=d,m=e.map((a,i)=>[a,i]);return m.sort((a,i)=>{const g=s(a[0],i[0]);return g!==0?g:a[1]-i[1]}),e=m.map(a=>a[0]),l&&(e=e.filter(a=>a.orderNumber.toLowerCase().indexOf(l.toLowerCase())!==-1||a.customer.name.toLowerCase().indexOf(l.toLowerCase())!==-1||a.customer.email.toLowerCase().indexOf(l.toLowerCase())!==-1)),r!=="all"&&(e=e.filter(a=>a.status===r)),u||n&&c&&(e=e.filter(a=>D(a.createdAt,n,c))),e}const Z={title:`Reports list | Dashboard - ${h.site.name}`};function Ce(){const e=q({queryKey:["stock-details"],queryFn:async()=>(await E.get(I.stock.details)).data});return e.isPending||e.isLoading?t.jsx(N,{}):e.isError?t.jsx(A,{route:p.dashboard.reports.root}):t.jsxs(t.Fragment,{children:[t.jsx(B,{children:t.jsxs("title",{children:[" ",Z.title]})}),t.jsx(X,{products:e.data})]})}export{Ce as default};