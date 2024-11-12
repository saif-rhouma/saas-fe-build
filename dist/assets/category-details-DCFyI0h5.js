import{aP as T,j as s,S as x,A as C,C as c,B as l,d7 as D,r as f,de as S,dP as E,p as h,cV as P,cY as b,dd as I,dT as v,H as B,dp as H,dm as L}from"./index-DQSze1U8.js";import{u as A,E as F}from"./error-block-ByVqMk3m.js";import{u as R}from"./use-params-Bn19tu7E.js";import{C as y}from"./custom-breadcrumbs-Dbp-n_yz.js";import{g as N,e as k}from"./utils-MBUcMVfY.js";import{u as O}from"./use-table-85KX-QaE.js";import{T as V}from"./table-no-data-DRnBrHuU.js";import{T as q}from"./table-empty-rows-ZQ_LRu3W.js";import{T as z,a as G,b as K,c as Q}from"./table-head-custom-DZUgBRZf.js";import{T as W}from"./table-pagination-custom-BkSl39E6.js";import{b as Y}from"./format-number-7a30pGHJ.js";import{T as d}from"./TableCell-CZoNGEO_.js";import{C as _}from"./CardHeader-rk1ldNG1.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-CEpq6Y8J.js";import"./Checkbox-DN-K-wR_.js";import"./TablePagination-DItPAUjz.js";import"./KeyboardArrowRight-CCHou5gP.js";import"./LastPage-h1PR1sCd.js";import"./Select-CH0Am0Es.js";import"./Menu-w_nXL5Bn.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-fLt_Sq7P.js";import"./FormControlLabel-Bw6B1Xse.js";const $=({row:e,index:t,selected:n})=>{var i;T();const m=s.jsxs(z,{hover:!0,selected:n,children:[s.jsx(d,{children:t||(e==null?void 0:e.id)}),s.jsx(d,{children:s.jsxs(x,{spacing:2,direction:"row",alignItems:"center",children:[s.jsx(C,{alt:e==null?void 0:e.name,src:c.site.serverFileHost+((e==null?void 0:e.image)||c.site.defaultImgPlaceHolder)}),s.jsx(l,{component:"span",children:e==null?void 0:e.name})]})}),s.jsx(d,{children:Y(e==null?void 0:e.price)}),s.jsxs(d,{align:"center",children:[" ",((i=e==null?void 0:e.stock)==null?void 0:i.quantity)||"0"," "]}),s.jsx(d,{children:s.jsx(D,{variant:"soft",color:e.isActive===!0&&"success"||e.isActive===!1&&"error"||"default",children:e!=null&&e.isActive?"ACTIVE":"INACTIVE"})})]});return s.jsx(s.Fragment,{children:m})},J=[{id:"productId",label:"No.",width:80},{id:"productName",label:"Name"},{id:"productPrice",label:"Price",width:200},{id:"stock",label:"Stock",align:"center"},{id:"status",label:"Status",width:100}],M=({category:e})=>{const t=O({defaultOrderBy:"planId"}),[n,m]=f.useState(e.products),i=S({name:"",status:"all",startDate:null,endDate:null});f.useEffect(()=>{m(e.products)},[e.products]);const r=U({inputData:n,comparator:N(t.order,t.orderBy),filters:i.state}),u=!!i.state.name||i.state.status!=="all"||!!i.state.startDate&&!!i.state.endDate,g=!r.length&&u||!r.length;return s.jsxs(E,{children:[s.jsx(y,{links:[{name:"Dashboard",href:h.dashboard.root},{name:"Product",href:h.dashboard.product.root},{name:"Categories List",href:h.dashboard.product.categories},{name:"Category Details"}],sx:{mb:{xs:3,md:5}}}),s.jsx(P,{container:!0,spacing:3,children:s.jsx(P,{xs:12,md:12,children:s.jsxs(x,{spacing:2,direction:{xs:"column-reverse",md:"column"},children:[s.jsxs(b,{children:[s.jsx(_,{title:"Details"}),s.jsxs(x,{direction:"row",gap:10,sx:{p:3,typography:"body2"},children:[s.jsx(l,{flexDirection:"column",sx:{p:1,display:"flex"},children:s.jsx(x,{spacing:2,direction:"row",alignItems:"center",children:s.jsx(C,{sx:{width:100,height:100},alt:e==null?void 0:e.name,src:c.site.serverFileHost+((e==null?void 0:e.image)||c.site.defaultImgPlaceHolder)})})}),s.jsxs(l,{flexDirection:"column",gap:1,sx:{display:"flex",width:"100%",p:1},children:[s.jsxs(l,{sx:{color:"text.secondary"},children:["Name: ",e==null?void 0:e.name]}),s.jsxs(l,{sx:{color:"text.secondary"},children:["Description: ",e==null?void 0:e.description]})]})]})]}),s.jsxs(b,{children:[s.jsx(I,{sx:{minHeight:444},children:s.jsxs(G,{size:t.dense?"small":"medium",sx:{minWidth:960},children:[s.jsx(K,{order:t.order,orderBy:t.orderBy,headLabel:J,rowCount:r.length,numSelected:t.selected.length,onSort:t.onSort}),s.jsxs(Q,{children:[r.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage).map((o,a)=>s.jsx($,{row:o,index:t.page*t.rowsPerPage+a+1,selected:t.selected.includes(o.id)},o.id)),s.jsx(q,{height:t.dense?56:76,emptyRows:k(t.page,t.rowsPerPage,r.length)}),s.jsx(V,{notFound:g})]})]})}),s.jsx(W,{page:t.page,dense:t.dense,count:r.length,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onChangeDense:t.onChangeDense,onRowsPerPageChange:t.onChangeRowsPerPage})]})]})})})]})};function U({inputData:e,comparator:t,filters:n,dateError:m}){const{status:i,name:r,startDate:u,endDate:g}=n,o=e.map((a,p)=>[a,p]);return o.sort((a,p)=>{const j=t(a[0],p[0]);return j!==0?j:a[1]-p[1]}),e=o.map(a=>a[0]),r&&(e=e.filter(a=>a.id.toString().toLowerCase().indexOf(r.toLowerCase())!==-1||a.name.toLowerCase().indexOf(r.toLowerCase())!==-1)),e}const X={title:`Category details | Dashboard - ${c.site.name}`};function Ee(){const{id:e=""}=R(),t=A({queryKey:["category",e],queryFn:async()=>{const{data:n}=await H.get(L.productCategories.details+e);return n}});return t.isPending||t.isLoading?s.jsx(v,{}):t.isError?s.jsx(F,{route:h.dashboard.plan.root}):s.jsxs(s.Fragment,{children:[s.jsx(B,{children:s.jsxs("title",{children:[" ",X.title]})}),s.jsx(M,{category:t.data})]})}export{Ee as default};
