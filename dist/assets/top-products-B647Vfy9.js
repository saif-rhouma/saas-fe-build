import{r as x,de as f,e3 as j,j as e,dQ as b,cV as p,p as T,e4 as C,cY as y,B as P,dd as D,S as R,A as S,C as h,dU as E,H as B,dp as L,dm as F}from"./index-BEaGYMEI.js";import{u as H,E as I}from"./error-block-BQYINy50.js";import{b as O}from"./format-number-JDGLw5r5.js";import{C as w}from"./custom-breadcrumbs-D4hwk-rw.js";import{P as A}from"./permission-access-controller-Cc7F7Sq7.js";import{g as q,e as k}from"./utils-MBUcMVfY.js";import{u as v}from"./use-table-DsQxT_g8.js";import{T as N}from"./table-no-data-1VG6qoaS.js";import{T as Q}from"./table-empty-rows-D7ODdqoL.js";import{a as _,b as z,c as G,T as U}from"./table-head-custom-Drg40nu1.js";import{T as V}from"./table-pagination-custom-B8a_JMe_.js";import{P as W}from"./product-table-toolbar-FbxUPW8E.js";import{P as K}from"./product-table-filters-result-CN2vRz7r.js";import{T as l}from"./TableCell-CzBf4-Ov.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-DxNFQfFL.js";import"./Checkbox-DRhnNWXi.js";import"./TablePagination-BtzWghPM.js";import"./KeyboardArrowRight-BWGrV5E8.js";import"./LastPage-BtJVqGJo.js";import"./Select-C-U3VYQj.js";import"./Menu-Dc9eDgdb.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-Cx_XAmin.js";import"./FormControlLabel-BO7gRcil.js";import"./TextField-CIxpyOlN.js";import"./FormControl-2hnEuYCX.js";import"./InputLabel-CeWPpGeQ.js";import"./FormLabel-DT9mGYCJ.js";import"./FormHelperText-BJ35fbuN.js";import"./InputAdornment-CGsQ7T7u.js";import"./filters-result-DA5pDRfI.js";import"./Chip-Db-a91wo.js";const Y=[{id:"id",label:"#",width:60},{id:"name",label:"Product Name"},{id:"price",label:"Price",width:220},{id:"quantity",label:"Total Quantity",width:160}],$=({products:a})=>{const t=v({defaultOrderBy:"planId"}),[m,g]=x.useState(a),r=f({name:"",status:"all",startDate:null,endDate:null});x.useEffect(()=>{g(a)},[a]);const n=j(r.state.startDate,r.state.endDate),o=J({inputData:m,comparator:q(t.order,t.orderBy),filters:r.state,dateError:n}),c=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate,d=!o.length&&c||!o.length;return e.jsx(b,{maxWidth:"xl",children:e.jsxs(p,{container:!0,spacing:3,children:[e.jsx(p,{xs:12,md:12,children:e.jsx(w,{links:[{name:"Dashboard",href:T.dashboard.root},{name:"Top Ordered Products"}]})}),e.jsx(A,{permission:C.LIST_PRODUCT,children:e.jsx(p,{xs:12,md:12,children:e.jsxs(y,{children:[e.jsx(W,{filters:r,onResetPage:t.onResetPage,dateError:n}),c&&e.jsx(K,{filters:r,totalResults:o.length,onResetPage:t.onResetPage,sx:{p:2.5,pt:0}}),e.jsx(P,{sx:{position:"relative"},children:e.jsx(D,{sx:{minHeight:444},children:e.jsxs(_,{size:t.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(z,{order:t.order,orderBy:t.orderBy,headLabel:Y,rowCount:o.length,numSelected:t.selected.length,onSort:t.onSort}),e.jsxs(G,{children:[o.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage).map((s,i)=>e.jsxs(U,{children:[e.jsx(l,{children:s.id}),e.jsx(l,{children:e.jsxs(R,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(S,{alt:s==null?void 0:s.name,src:h.site.serverFileHost+((s==null?void 0:s.image)||h.site.defaultImgPlaceHolder)}),e.jsx(P,{component:"span",children:s==null?void 0:s.name})]})}),e.jsx(l,{children:O(s.price)}),e.jsx(l,{children:s.total_quantity})]})),e.jsx(Q,{height:t.dense?56:76,emptyRows:k(t.page,t.rowsPerPage,o.length)}),e.jsx(N,{notFound:d})]})]})})}),e.jsx(V,{page:t.page,dense:t.dense,count:o.length,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onChangeDense:t.onChangeDense,onRowsPerPageChange:t.onChangeRowsPerPage})]})})})]})})};function J({inputData:a,comparator:t,filters:m,dateError:g}){const{status:r,name:n,startDate:o,endDate:c}=m,d=a.map((s,i)=>[s,i]);return d.sort((s,i)=>{const u=t(s[0],i[0]);return u!==0?u:s[1]-i[1]}),a=d.map(s=>s[0]),n&&(a=a.filter(s=>s.id.toString().toLowerCase().indexOf(n.toLowerCase())!==-1||s.name.toLowerCase().indexOf(n.toLowerCase())!==-1)),a}const M={title:`Dashboard - ${h.site.name}`},we=()=>{const a=H({queryKey:["top-products"],queryFn:async()=>{const{data:t}=await L.get(F.topProducts);return t}});return a.isPending||a.isLoading?e.jsx(E,{}):a.isError?e.jsx(I,{route:""}):e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsxs("title",{children:[" ",M.title]})}),e.jsx($,{products:a.data})]})};export{we as default};
