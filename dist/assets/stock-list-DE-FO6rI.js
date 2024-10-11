import{j as t,S as y,A as j,C as h,B as f,r as x,dz as P,eo as b,e8 as k,p,em as C,e as T,ez as S,I as R,aD as _,ep as D,ec as N,H as B,dJ as E,dH as I}from"./index-D-ZKGqTU.js";import{u as q,E as A}from"./error-block-CQIWskvv.js";import{C as L}from"./custom-breadcrumbs-Ce0SsF19.js";import{P as F}from"./permission-access-controller-CFkXurO4.js";import{g as O,e as v}from"./utils-MBUcMVfY.js";import{u as H}from"./use-table-DeqmuJBx.js";import{T as z}from"./table-no-data-bi3FLgGi.js";import{T as Q}from"./table-empty-rows-ZG1hn5NQ.js";import{T as W,a as G,b as J,c as K}from"./table-head-custom-COak4_H-.js";import{T as V}from"./table-selected-action-eNFtkPSf.js";import{T as $}from"./table-pagination-custom-DgvLjnHq.js";import{T as o}from"./TableCell-FvdEFRkr.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-CaftPqQK.js";import"./Checkbox-XoXkZxXm.js";import"./TablePagination-DVtYhtU_.js";import"./KeyboardArrowRight-DzNmTPM2.js";import"./LastPage-CC1oKrM4.js";import"./Select-B6atPAS4.js";import"./Menu-BvjNAHEG.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-B9hwN3-B.js";import"./FormControlLabel-5B8r8hjw.js";const M=({row:e,selected:s})=>{const d=t.jsxs(W,{hover:!0,selected:s,children:[t.jsx(o,{children:e==null?void 0:e.productId}),t.jsx(o,{children:t.jsxs(y,{spacing:2,direction:"row",alignItems:"center",children:[t.jsx(j,{alt:e==null?void 0:e.name,src:h.site.serverFileHost+((e==null?void 0:e.image)||h.site.defaultImgPlaceHolder)}),t.jsx(f,{component:"span",children:e==null?void 0:e.name})]})}),t.jsx(o,{children:e==null?void 0:e.totals_quantity}),t.jsx(o,{children:e==null?void 0:e.pending_quantity}),t.jsx(o,{children:e==null?void 0:e.processing_a_quantity}),t.jsx(o,{children:e==null?void 0:e.processing_b_quantity}),t.jsx(o,{children:e==null?void 0:e.ready_quantity}),t.jsx(o,{children:e==null?void 0:e.in_stock})]});return t.jsx(t.Fragment,{children:d})},U=[{id:"id",label:"#",width:60},{id:"productName",label:"Product Name",width:260},{id:"planId",label:"Plan Qty"},{id:"orderAmount",label:"Pending Stock"},{id:"status",label:"Processing A Stock"},{id:"status",label:"Processing B Stock"},{id:"status",label:"Ready to Deliver Stock"},{id:"status",label:"In Stock"}],X=({products:e})=>{const s=H({defaultOrderBy:"orderNumber"}),[d,u]=x.useState(e),n=P({name:"",status:"all",startDate:null,endDate:null}),l=b(n.state.startDate,n.state.endDate),r=Y({inputData:d,comparator:O(s.order,s.orderBy),filters:n.state,dateError:l});x.useEffect(()=>{u(e)},[e]);const c=!!n.state.name||n.state.status!=="all"||!!n.state.startDate&&!!n.state.endDate,m=!r.length&&c||!r.length,a=[{displayName:"Product Name",key:"name"},{displayName:"Plan Qty",key:"totals_quantity"},{displayName:"Pending Stock",key:"pending_quantity"},{displayName:"Processing A Stock",key:"processing_a_quantity"},{displayName:"Processing B Stock",key:"processing_b_quantity"},{displayName:"Ready to Deliver Stock",key:"ready_quantity"},{displayName:"In Stock",key:"in_stock"}];return t.jsx(k,{maxWidth:"xl",children:t.jsxs(y,{spacing:3,children:[t.jsx(L,{links:[{name:"Dashboard",href:p.dashboard.root},{name:"Reports",href:p.dashboard.reports.root},{name:"Stock Report",href:p.dashboard.reports.stock}],action:t.jsx(F,{permission:C.DOWNLOAD_REPORT,children:t.jsx(T,{onClick:()=>{S("stock reports",a,r,"Stock")},variant:"contained",startIcon:t.jsx(R,{icon:"mdi:microsoft-excel"}),children:"Export Excel"})})}),t.jsxs(_,{children:[t.jsxs(f,{sx:{position:"relative"},children:[t.jsx(V,{dense:s.dense,numSelected:s.selected.length,rowCount:r.length}),t.jsxs(G,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(J,{order:s.order,orderBy:s.orderBy,headLabel:U,rowCount:r.length}),t.jsxs(K,{children:[r.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(i=>t.jsx(M,{row:i,selected:s.selected.includes(i.id)},i.id)),t.jsx(Q,{height:s.dense?56:76,emptyRows:v(s.page,s.rowsPerPage,r.length)}),t.jsx(z,{notFound:m})]})]})]}),t.jsx($,{page:s.page,dense:s.dense,count:r.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})]})})};function Y({inputData:e,comparator:s,filters:d,dateError:u}){const{status:n,name:l,startDate:r,endDate:c}=d,m=e.map((a,i)=>[a,i]);return m.sort((a,i)=>{const g=s(a[0],i[0]);return g!==0?g:a[1]-i[1]}),e=m.map(a=>a[0]),l&&(e=e.filter(a=>a.orderNumber.toLowerCase().indexOf(l.toLowerCase())!==-1||a.customer.name.toLowerCase().indexOf(l.toLowerCase())!==-1||a.customer.email.toLowerCase().indexOf(l.toLowerCase())!==-1)),n!=="all"&&(e=e.filter(a=>a.status===n)),u||r&&c&&(e=e.filter(a=>D(a.createdAt,r,c))),e}const Z={title:`Reports list | Dashboard - ${h.site.name}`};function Se(){const e=q({queryKey:["stock-details"],queryFn:async()=>(await E.get(I.stock.details)).data});return e.isPending||e.isLoading?t.jsx(N,{}):e.isError?t.jsx(A,{route:p.dashboard.reports.root}):t.jsxs(t.Fragment,{children:[t.jsx(B,{children:t.jsxs("title",{children:[" ",Z.title]})}),t.jsx(X,{products:e.data})]})}export{Se as default};