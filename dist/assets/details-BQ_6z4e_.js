import{r as m,de as v,e2 as A,g as B,p as x,j as e,B as t,I as E,dP as R,cV as u,S as i,cY as H,A as C,C as d,aL as O,d7 as k,dd as F,dT as S,H as L,dp as $,dm as q}from"./index-DBAnnifB.js";import{u as G,E as V}from"./error-block-I6x1Hy75.js";import{u as N}from"./use-params-DEx6JbuU.js";import{b as g}from"./format-number-DHkj0q5I.js";import{C as Q}from"./custom-breadcrumbs-DBItHaBE.js";import{e as z}from"./utils-C3i7epmT.js";import{g as K}from"./utils-MBUcMVfY.js";import{u as W}from"./use-table-_0b8U19R.js";import{a as Y,b as _,c as J,T as M}from"./table-head-custom-oTVXNsWX.js";import{T as U}from"./table-pagination-custom-CSBoVDUr.js";import{T as l}from"./TableCell-D0tRcJwU.js";import{C as X}from"./CardHeader-Vz8vospd.js";import{A as Z}from"./AvatarGroup-KOO4AQi4.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./index-BHbW1OCY.js";import"./countries-DSLisFCy.js";import"./Checkbox-C9zyd1yT.js";import"./TablePagination-CtzltUxB.js";import"./KeyboardArrowRight-tacz4Y6j.js";import"./LastPage-BC27tdqq.js";import"./Select-Cs1GmroI.js";import"./Menu-CWYUzvJj.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-Dk2d0D5e.js";import"./FormControlLabel-BLHOqcns.js";const ee=({productOrders:s,defaultRowsPerPage:n})=>{var b;const o=[{id:"name",label:"Order Ref",width:150},{id:"customer",label:"Customer"},{id:"quantity",label:"Quantity",width:200},{id:"price",label:"Price",width:200},{id:"total",label:"Total Order Amount",width:200}],r=W({defaultOrderBy:"orderId",defaultRowsPerPage:n}),[c,D]=m.useState(s);m.useEffect(()=>{D(s)},[s]);const h=v({name:"",status:"all",startDate:null,endDate:null}),T=A(h.state.startDate,h.state.endDate),j=z({inputData:c,comparator:K(r.order,r.orderBy),filters:h.state,dateError:T}),f=B(),I=m.useCallback(a=>{f.push(x.dashboard.order.details(a))},[f]);return e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{borderRadius:1,overflow:"hidden",border:a=>`solid 1px ${a.vars.palette.divider}`},children:[e.jsx(t,{sx:{flex:1,width:1},children:e.jsxs(Y,{size:"medium",children:[e.jsx(_,{headLabel:o}),e.jsx(J,{children:(b=j.slice(r.page*r.rowsPerPage,r.page*r.rowsPerPage+r.rowsPerPage))==null?void 0:b.map(a=>{var p,P,y;return e.jsxs(M,{children:[e.jsx(l,{children:e.jsxs(t,{onClick:()=>{var w;return I((w=a==null?void 0:a.order)==null?void 0:w.id)},sx:{width:240,display:"flex",gap:1,alignItems:"center",cursor:"pointer",marginRight:5},children:[e.jsx(E,{icon:"heroicons-outline:external-link"}),e.jsx("span",{children:(p=a==null?void 0:a.order)==null?void 0:p.ref})]})}),e.jsxs(l,{children:[" ",(P=a==null?void 0:a.order)==null?void 0:P.customer.name," "]}),e.jsxs(l,{children:[" x",a==null?void 0:a.quantity," "]}),e.jsxs(l,{children:[" ",g(a==null?void 0:a.snapshotProductPrice)," "]}),e.jsxs(l,{children:[g((y=a==null?void 0:a.order)==null?void 0:y.totalOrderAmount)," "]})]},a==null?void 0:a.id)})})]})}),e.jsx(U,{sx:{width:1},page:r.page,count:j.length,rowsPerPage:r.rowsPerPage,onPageChange:r.onChangePage,onRowsPerPageChange:r.onChangeRowsPerPage})]})},se=({product:s})=>{var n,o,r;return e.jsxs(R,{children:[e.jsx(Q,{links:[{name:"Dashboard",href:x.dashboard.root},{name:"Product",href:x.dashboard.product.root},{name:"Product Details"}],sx:{mb:{xs:3,md:5}}}),e.jsx(u,{container:!0,spacing:3,children:e.jsx(u,{xs:12,md:12,children:e.jsx(i,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:e.jsxs(H,{children:[e.jsx(X,{title:"Details"}),e.jsxs(i,{direction:"row",gap:10,sx:{p:3,typography:"body2"},children:[e.jsx(t,{flexDirection:"column",sx:{p:1,display:"flex"},children:e.jsx(i,{spacing:2,direction:"row",alignItems:"center",children:e.jsx(C,{sx:{width:100,height:100},alt:s==null?void 0:s.name,src:d.site.serverFileHost+((s==null?void 0:s.image)||d.site.defaultImgPlaceHolder)})})}),e.jsxs(t,{flexDirection:"column",gap:1,sx:{display:"flex",width:"100%",p:1},children:[e.jsxs(i,{sx:{color:"text.secondary"},gap:1,flexDirection:"row",alignItems:"center",children:[e.jsx("span",{children:"Category:"}),e.jsxs(i,{gap:1,flexDirection:"row",alignItems:"center",children:[e.jsx(Z,{sx:{[`& .${O.avatar}`]:{width:24,height:24}},children:e.jsx(C,{alt:(n=s==null?void 0:s.category)==null?void 0:n.name,src:`${d.site.serverFileHost}${(o=s==null?void 0:s.category)==null?void 0:o.image}`})}),(r=s==null?void 0:s.category)==null?void 0:r.name]})]}),e.jsxs(t,{sx:{color:"text.secondary"},children:["Name: ",s==null?void 0:s.name]}),e.jsxs(t,{sx:{color:"text.secondary"},children:["Description: ",s==null?void 0:s.description]}),e.jsxs(t,{sx:{color:"text.secondary"},children:["Price:",e.jsx(k,{variant:"soft",color:"info",children:g(s==null?void 0:s.price)})]})]})]}),(s==null?void 0:s.productToOrder.length)>1&&e.jsx(F,{children:e.jsx(t,{fullWidth:!0,alignItems:"center",sx:{p:3,borderBottom:c=>`dashed 2px ${c.vars.palette.background.neutral}`},children:e.jsx(ee,{productOrders:s==null?void 0:s.productToOrder,defaultRowsPerPage:15})})})]})})})})]})},ae={title:`Product details | Dashboard - ${d.site.name}`};function Re(){const{id:s=""}=N(),n=G({queryKey:["plan",s],queryFn:async()=>{const{data:o}=await $.get(q.products.details+s);return o}});return n.isPending||n.isLoading?e.jsx(S,{}):n.isError?e.jsx(V,{route:x.dashboard.plan.root}):e.jsxs(e.Fragment,{children:[e.jsx(L,{children:e.jsxs("title",{children:[" ",ae.title]})}),e.jsx(se,{product:n.data})]})}export{Re as default};
