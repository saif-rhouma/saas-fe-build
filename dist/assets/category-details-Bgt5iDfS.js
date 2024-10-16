import{b6 as T,j as s,S as x,A as C,C as c,B as l,d6 as D,r as f,dd as S,dP as E,p as h,ay as b,aB as P,dc as B,dT as I,H as v,dn as H,dl as L}from"./index-CDcUgrfM.js";import{u as y,E as A}from"./error-block-XWJxuTVo.js";import{u as F}from"./use-params-DKihax7a.js";import{C as R}from"./custom-breadcrumbs-BL_vTuJF.js";import{g as N,e as k}from"./utils-MBUcMVfY.js";import{u as O}from"./use-table-DeUiAFAo.js";import{T as q}from"./table-no-data-CiCQCRXO.js";import{T as V}from"./table-empty-rows-sfVkS9z1.js";import{T as z,a as G,b as K,c as Q}from"./table-head-custom-29joC1Qk.js";import{T as W}from"./table-pagination-custom-C-tRYjZA.js";import{b as _}from"./format-number-K3MYeV6b.js";import{T as d}from"./TableCell-F7WbLTEO.js";import{C as $}from"./CardHeader-CNs3kuny.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-DrRsvASf.js";import"./Checkbox-BxyuHg5r.js";import"./TablePagination-DXoKd7HH.js";import"./KeyboardArrowRight-BY3fczxh.js";import"./LastPage-DrCAI0el.js";import"./Select-BZojGQgr.js";import"./Menu--HgoqF6K.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-jbxmQqqV.js";import"./FormControlLabel-C9Nh_YCW.js";const J=({row:e,index:t,selected:n})=>{var i;T();const m=s.jsxs(z,{hover:!0,selected:n,children:[s.jsx(d,{children:t||(e==null?void 0:e.id)}),s.jsx(d,{children:s.jsxs(x,{spacing:2,direction:"row",alignItems:"center",children:[s.jsx(C,{alt:e==null?void 0:e.name,src:c.site.serverFileHost+((e==null?void 0:e.image)||c.site.defaultImgPlaceHolder)}),s.jsx(l,{component:"span",children:e==null?void 0:e.name})]})}),s.jsx(d,{children:_(e==null?void 0:e.price)}),s.jsxs(d,{align:"center",children:[" ",((i=e==null?void 0:e.stock)==null?void 0:i.quantity)||"0"," "]}),s.jsx(d,{children:s.jsx(D,{variant:"soft",color:e.isActive===!0&&"success"||e.isActive===!1&&"error"||"default",children:e!=null&&e.isActive?"ACTIVE":"INACTIVE"})})]});return s.jsx(s.Fragment,{children:m})},M=[{id:"productId",label:"No.",width:80},{id:"productName",label:"Name"},{id:"productPrice",label:"Price",width:200},{id:"stock",label:"Stock",align:"center"},{id:"status",label:"Status",width:100}],U=({category:e})=>{const t=O({defaultOrderBy:"planId"}),[n,m]=f.useState(e.products),i=S({name:"",status:"all",startDate:null,endDate:null});f.useEffect(()=>{m(e.products)},[e.products]);const r=X({inputData:n,comparator:N(t.order,t.orderBy),filters:i.state}),u=!!i.state.name||i.state.status!=="all"||!!i.state.startDate&&!!i.state.endDate,g=!r.length&&u||!r.length;return s.jsxs(E,{children:[s.jsx(R,{links:[{name:"Dashboard",href:h.dashboard.root},{name:"Product",href:h.dashboard.product.root},{name:"Categories List",href:h.dashboard.product.categories},{name:"Category Details"}],sx:{mb:{xs:3,md:5}}}),s.jsx(b,{container:!0,spacing:3,children:s.jsx(b,{xs:12,md:12,children:s.jsxs(x,{spacing:2,direction:{xs:"column-reverse",md:"column"},children:[s.jsxs(P,{children:[s.jsx($,{title:"Details"}),s.jsxs(x,{direction:"row",gap:10,sx:{p:3,typography:"body2"},children:[s.jsx(l,{flexDirection:"column",sx:{p:1,display:"flex"},children:s.jsx(x,{spacing:2,direction:"row",alignItems:"center",children:s.jsx(C,{sx:{width:100,height:100},alt:e==null?void 0:e.name,src:c.site.serverFileHost+((e==null?void 0:e.image)||c.site.defaultImgPlaceHolder)})})}),s.jsxs(l,{flexDirection:"column",gap:1,sx:{display:"flex",width:"100%",p:1},children:[s.jsxs(l,{sx:{color:"text.secondary"},children:["Name: ",e==null?void 0:e.name]}),s.jsxs(l,{sx:{color:"text.secondary"},children:["Description: ",e==null?void 0:e.description]})]})]})]}),s.jsxs(P,{children:[s.jsx(B,{sx:{minHeight:444},children:s.jsxs(G,{size:t.dense?"small":"medium",sx:{minWidth:960},children:[s.jsx(K,{order:t.order,orderBy:t.orderBy,headLabel:M,rowCount:r.length,numSelected:t.selected.length,onSort:t.onSort}),s.jsxs(Q,{children:[r.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage).map((o,a)=>s.jsx(J,{row:o,index:t.page*t.rowsPerPage+a+1,selected:t.selected.includes(o.id)},o.id)),s.jsx(V,{height:t.dense?56:76,emptyRows:k(t.page,t.rowsPerPage,r.length)}),s.jsx(q,{notFound:g})]})]})}),s.jsx(W,{page:t.page,dense:t.dense,count:r.length,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onChangeDense:t.onChangeDense,onRowsPerPageChange:t.onChangeRowsPerPage})]})]})})})]})};function X({inputData:e,comparator:t,filters:n,dateError:m}){const{status:i,name:r,startDate:u,endDate:g}=n,o=e.map((a,p)=>[a,p]);return o.sort((a,p)=>{const j=t(a[0],p[0]);return j!==0?j:a[1]-p[1]}),e=o.map(a=>a[0]),r&&(e=e.filter(a=>a.id.toString().toLowerCase().indexOf(r.toLowerCase())!==-1||a.name.toLowerCase().indexOf(r.toLowerCase())!==-1)),e}const Y={title:`Category details | Dashboard - ${c.site.name}`};function Ee(){const{id:e=""}=F(),t=y({queryKey:["category",e],queryFn:async()=>{const{data:n}=await H.get(L.productCategories.details+e);return n}});return t.isPending||t.isLoading?s.jsx(I,{}):t.isError?s.jsx(A,{route:h.dashboard.plan.root}):s.jsxs(s.Fragment,{children:[s.jsx(v,{children:s.jsxs("title",{children:[" ",Y.title]})}),s.jsx(U,{category:t.data})]})}export{Ee as default};
