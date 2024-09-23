import{j as t,S as x,A as j,C as f,B as b,r as g,dC as P,eq as C,eb as y,p,e as T,I as S,aF as k,er as R,ef as B,H as E,dM as I,dK as D}from"./index-C-IhHuTJ.js";import{u as L,E as A}from"./error-block-BR6CrtTz.js";import{C as F}from"./custom-breadcrumbs-uFAKtVA_.js";import{u as _,g as q,r as v,T as N,a as H,e as O}from"./table-selected-action-BOiNrM4L.js";import{T as z}from"./table-no-data-CPZHThY_.js";import{T as K,a as Q,b as W,c as G}from"./table-head-custom-c1vpDJbN.js";import{T as M}from"./table-pagination-custom-RNRyjqlB.js";import{T as i}from"./TableCell-YKx_Gzup.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-OM-b9iKh.js";import"./empty-content-CHLoRVuk.js";import"./TablePagination-CKbxZQl-.js";import"./LastPage-C_sr1jh1.js";import"./Select-aS6O7ajU.js";import"./Menu-CrioubDI.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-T30htlau.js";import"./FormControlLabel-BpukUZ1g.js";const V=({row:e,selected:s})=>{const d=t.jsxs(K,{hover:!0,selected:s,children:[t.jsx(i,{children:e==null?void 0:e.productId}),t.jsx(i,{children:t.jsxs(x,{spacing:2,direction:"row",alignItems:"center",children:[t.jsx(j,{alt:e==null?void 0:e.name,src:f.site.serverFileHost+(e==null?void 0:e.image)}),t.jsx(b,{component:"span",children:e==null?void 0:e.name})]})}),t.jsx(i,{children:e==null?void 0:e.totals_quantity}),t.jsx(i,{children:e==null?void 0:e.pending_quantity}),t.jsx(i,{children:e==null?void 0:e.processing_a_quantity}),t.jsx(i,{children:e==null?void 0:e.processing_b_quantity}),t.jsx(i,{children:e==null?void 0:e.ready_quantity}),t.jsx(i,{children:e==null?void 0:e.in_stock})]});return t.jsx(t.Fragment,{children:d})},$=[{id:"id",label:"#",width:60},{id:"productName",label:"Product Name",width:260},{id:"planId",label:"Plan Qty"},{id:"orderAmount",label:"Pending Stock"},{id:"status",label:"Processing A Stock"},{id:"status",label:"Processing B Stock"},{id:"status",label:"Ready to Deliver Stock"},{id:"status",label:"In Stock"}],J=({products:e})=>{const s=_({defaultOrderBy:"orderNumber"}),[d,h]=g.useState(e),n=P({name:"",status:"all",startDate:null,endDate:null}),o=C(n.state.startDate,n.state.endDate),r=U({inputData:d,comparator:q(s.order,s.orderBy),filters:n.state,dateError:o});g.useEffect(()=>{h(e)},[e]),v(r,s.page,s.rowsPerPage);const l=!!n.state.name||n.state.status!=="all"||!!n.state.startDate&&!!n.state.endDate,c=!r.length&&l||!r.length;return t.jsx(y,{maxWidth:"xl",children:t.jsxs(x,{spacing:3,children:[t.jsx(F,{links:[{name:"Dashboard",href:p.dashboard.root},{name:"Reports",href:p.dashboard.reports.root},{name:"Stock Report",href:p.dashboard.reports.stock}],action:t.jsx(T,{variant:"contained",startIcon:t.jsx(S,{icon:"mdi:microsoft-excel"}),children:"Export Excel"})}),t.jsxs(k,{children:[t.jsxs(b,{sx:{position:"relative"},children:[t.jsx(N,{dense:s.dense,numSelected:s.selected.length,rowCount:r.length}),t.jsxs(Q,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(W,{order:s.order,orderBy:s.orderBy,headLabel:$,rowCount:r.length}),t.jsxs(G,{children:[r.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(a=>t.jsx(V,{row:a,selected:s.selected.includes(a.id)},a.id)),t.jsx(H,{height:s.dense?56:76,emptyRows:O(s.page,s.rowsPerPage,r.length)}),t.jsx(z,{notFound:c})]})]})]}),t.jsx(M,{page:s.page,dense:s.dense,count:r.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})]})})};function U({inputData:e,comparator:s,filters:d,dateError:h}){const{status:n,name:o,startDate:r,endDate:l}=d,c=e.map((a,m)=>[a,m]);return c.sort((a,m)=>{const u=s(a[0],m[0]);return u!==0?u:a[1]-m[1]}),e=c.map(a=>a[0]),o&&(e=e.filter(a=>a.orderNumber.toLowerCase().indexOf(o.toLowerCase())!==-1||a.customer.name.toLowerCase().indexOf(o.toLowerCase())!==-1||a.customer.email.toLowerCase().indexOf(o.toLowerCase())!==-1)),n!=="all"&&(e=e.filter(a=>a.status===n)),h||r&&l&&(e=e.filter(a=>R(a.createdAt,r,l))),e}const X={title:`Reports list | Dashboard - ${f.site.name}`};function be(){const e=L({queryKey:["stock-details"],queryFn:async()=>(await I.get(D.stock.details)).data});return e.isPending||e.isLoading?t.jsx(B,{}):e.isError?t.jsx(A,{route:p.dashboard.reports.root}):t.jsxs(t.Fragment,{children:[t.jsx(E,{children:t.jsxs("title",{children:[" ",X.title]})}),t.jsx(J,{products:e.data})]})}export{be as default};
