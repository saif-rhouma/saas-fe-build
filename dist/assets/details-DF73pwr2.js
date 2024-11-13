import{r as g,de as v,e2 as A,g as B,p as c,j as e,B as t,I as E,dP as R,cV as u,S as l,cY as H,A as C,C as d,aL as O,d7 as k,dd as F,dT as S,H as L,dp as $,dm as q}from"./index-CuWEjZ-G.js";import{u as G,E as V}from"./error-block-XCP8Xdky.js";import{u as z}from"./use-params-BcUfmB3_.js";import{b as m}from"./format-number-Cf_bMPPr.js";import{C as N}from"./custom-breadcrumbs-BsK2CLus.js";import{e as Q}from"./utils-l0ft-egQ.js";import{g as K}from"./utils-MBUcMVfY.js";import{u as W}from"./use-table-75dAXbPG.js";import{a as Y,b as _,c as J,T as M}from"./table-head-custom-B_b4Mciq.js";import{T as U}from"./table-pagination-custom-B4KJAJyJ.js";import{T as o}from"./TableCell-xn0OHm1b.js";import{C as X}from"./CardHeader-C57Jho8K.js";import{A as Z}from"./AvatarGroup-Cm6eJVW3.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./index-BunGN8rp.js";import"./countries-DSLisFCy.js";import"./Checkbox-BmspYUiW.js";import"./TablePagination-CJMhKRte.js";import"./KeyboardArrowRight-jh7tJvHZ.js";import"./LastPage-NFUUwqpx.js";import"./Select-yTvD-6UB.js";import"./Menu-CcOZhntM.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-bLqbXfWL.js";import"./FormControlLabel-QWd6EiOd.js";const ee=({productOrders:a,defaultRowsPerPage:n})=>{var p;const i=[{id:"name",label:"Order Ref",width:150},{id:"customer",label:"Customer",align:"center"},{id:"quantity",label:"Quantity",width:200,align:"center"},{id:"price",label:"Price",width:200,align:"center"},{id:"total",label:"Total Order Amount",width:200,align:"center"}],r=W({defaultOrderBy:"orderId",defaultRowsPerPage:n}),[x,D]=g.useState(a);g.useEffect(()=>{D(a)},[a]);const h=v({name:"",status:"all",startDate:null,endDate:null}),T=A(h.state.startDate,h.state.endDate),f=Q({inputData:x,comparator:K(r.order,r.orderBy),filters:h.state,dateError:T}),j=B(),I=g.useCallback(s=>{j.push(c.dashboard.order.details(s))},[j]);return e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{borderRadius:1,overflow:"hidden",border:s=>`solid 1px ${s.vars.palette.divider}`},children:[e.jsx(t,{sx:{flex:1,width:1},children:e.jsxs(Y,{size:"medium",children:[e.jsx(_,{headLabel:i}),e.jsx(J,{children:(p=f.slice(r.page*r.rowsPerPage,r.page*r.rowsPerPage+r.rowsPerPage))==null?void 0:p.map(s=>{var b,P,y;return e.jsxs(M,{children:[e.jsx(o,{children:e.jsxs(t,{onClick:()=>{var w;return I((w=s==null?void 0:s.order)==null?void 0:w.id)},sx:{width:240,display:"flex",gap:1,alignItems:"center",cursor:"pointer",marginRight:5},children:[e.jsx(E,{icon:"heroicons-outline:external-link"}),e.jsx("span",{children:(b=s==null?void 0:s.order)==null?void 0:b.ref})]})}),e.jsxs(o,{align:"center",sx:{textTransform:"capitalize"},children:[" ",(P=s==null?void 0:s.order)==null?void 0:P.customer.name," "]}),e.jsxs(o,{align:"center",children:[" ",s==null?void 0:s.quantity," "]}),e.jsxs(o,{align:"center",children:[" ",m(s==null?void 0:s.snapshotProductPrice)," "]}),e.jsxs(o,{align:"center",children:[m((y=s==null?void 0:s.order)==null?void 0:y.totalOrderAmount)," "]})]},s==null?void 0:s.id)})})]})}),e.jsx(U,{sx:{width:1},page:r.page,count:f.length,rowsPerPage:r.rowsPerPage,onPageChange:r.onChangePage,onRowsPerPageChange:r.onChangeRowsPerPage})]})},ae=({product:a})=>{var n,i,r;return e.jsxs(R,{children:[e.jsx(N,{links:[{name:"Dashboard",href:c.dashboard.root},{name:"Products",href:c.dashboard.product.root},{name:"Product Details"}],sx:{mb:{xs:3,md:5}}}),e.jsx(u,{container:!0,spacing:3,children:e.jsx(u,{xs:12,md:12,children:e.jsx(l,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:e.jsxs(H,{children:[e.jsx(X,{title:"Details"}),e.jsxs(l,{direction:"row",gap:10,sx:{p:3,typography:"body2"},children:[e.jsx(t,{flexDirection:"column",sx:{p:1,display:"flex"},children:e.jsx(l,{spacing:2,direction:"row",alignItems:"center",children:e.jsx(C,{sx:{width:100,height:100},alt:a==null?void 0:a.name,src:d.site.serverFileHost+((a==null?void 0:a.image)||d.site.defaultImgPlaceHolder)})})}),e.jsxs(t,{flexDirection:"column",gap:1,sx:{display:"flex",width:"100%",p:1},children:[e.jsxs(l,{sx:{color:"text.secondary"},gap:1,flexDirection:"row",alignItems:"center",children:[e.jsx("span",{children:"Category:"}),e.jsxs(l,{gap:1,flexDirection:"row",alignItems:"center",children:[e.jsx(Z,{sx:{[`& .${O.avatar}`]:{width:24,height:24}},children:e.jsx(C,{alt:(n=a==null?void 0:a.category)==null?void 0:n.name,src:`${d.site.serverFileHost}${(i=a==null?void 0:a.category)==null?void 0:i.image}`})}),(r=a==null?void 0:a.category)==null?void 0:r.name]})]}),e.jsxs(t,{sx:{color:"text.secondary"},children:["Name: ",a==null?void 0:a.name]}),e.jsxs(t,{sx:{color:"text.secondary"},children:["Description: ",a==null?void 0:a.description]}),e.jsxs(t,{sx:{color:"text.secondary"},children:["Price:",e.jsx(k,{variant:"soft",color:"info",children:m(a==null?void 0:a.price)})]})]})]}),(a==null?void 0:a.productToOrder.length)>1&&e.jsx(F,{children:e.jsx(t,{fullWidth:!0,alignItems:"center",sx:{p:3,borderBottom:x=>`dashed 2px ${x.vars.palette.background.neutral}`},children:e.jsx(ee,{productOrders:a==null?void 0:a.productToOrder,defaultRowsPerPage:15})})})]})})})})]})},se={title:`Product details | Dashboard - ${d.site.name}`};function Re(){const{id:a=""}=z(),n=G({queryKey:["plan",a],queryFn:async()=>{const{data:i}=await $.get(q.products.details+a);return i}});return n.isPending||n.isLoading?e.jsx(S,{}):n.isError?e.jsx(V,{route:c.dashboard.plan.root}):e.jsxs(e.Fragment,{children:[e.jsx(L,{children:e.jsxs("title",{children:[" ",se.title]})}),e.jsx(ae,{product:n.data})]})}export{Re as default};
