import{r as g,de as v,e3 as A,W as B,p as c,j as e,B as t,I as E,dQ as R,cV as u,S as l,cY as H,A as C,C as d,Q as O,d7 as k,dd as F,dU as S,H as $,dq as q,dm as L}from"./index-88qAwG8P.js";import{u as G,E as Q}from"./error-block-BTff90qR.js";import{u as V}from"./use-params-0IhfDin6.js";import{b as m}from"./format-number-B8FPsWIV.js";import{C as z}from"./custom-breadcrumbs-x7W5GMPl.js";import{e as N}from"./utils-BDEKF9xP.js";import{g as W}from"./utils-MBUcMVfY.js";import{u as K}from"./use-table-BYPgfP9k.js";import{a as U,b as Y,c as _,T as J}from"./table-head-custom-g2OgtrHv.js";import{T as M}from"./table-pagination-custom-Ds9-Dw8y.js";import{T as o}from"./TableCell-Cl8UZGxf.js";import{C as X}from"./CardHeader-BiUdbdTy.js";import{A as Z}from"./AvatarGroup-CWqMds2i.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./index-CySZofTa.js";import"./countries-DSLisFCy.js";import"./Checkbox-Cpc8f1GH.js";import"./TablePagination-CrnuwEMO.js";import"./KeyboardArrowRight-fE7_2VJ7.js";import"./LastPage-B6xWbdc0.js";import"./Select-DFC-Q2QB.js";import"./Menu-BDUaDfAf.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DD8qHu7J.js";import"./FormControlLabel-ts_MkIWE.js";const ee=({productOrders:a,defaultRowsPerPage:n})=>{var b;const i=[{id:"name",label:"Order Ref",width:150},{id:"customer",label:"Customer",align:"center"},{id:"quantity",label:"Quantity",width:200,align:"center"},{id:"price",label:"Price",width:200,align:"center"},{id:"total",label:"Total Order Amount",width:200,align:"center"}],r=K({defaultOrderBy:"orderId",defaultRowsPerPage:n}),[x,D]=g.useState(a);g.useEffect(()=>{D(a)},[a]);const h=v({name:"",status:"all",startDate:null,endDate:null}),T=A(h.state.startDate,h.state.endDate),f=N({inputData:x,comparator:W(r.order,r.orderBy),filters:h.state,dateError:T}),j=B(),I=g.useCallback(s=>{j.push(c.dashboard.order.details(s))},[j]);return e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{borderRadius:1,overflow:"hidden",border:s=>`solid 1px ${s.vars.palette.divider}`},children:[e.jsx(t,{sx:{flex:1,width:1},children:e.jsxs(U,{size:"medium",children:[e.jsx(Y,{headLabel:i}),e.jsx(_,{children:(b=f.slice(r.page*r.rowsPerPage,r.page*r.rowsPerPage+r.rowsPerPage))==null?void 0:b.map(s=>{var p,P,y;return e.jsxs(J,{children:[e.jsx(o,{children:e.jsxs(t,{onClick:()=>{var w;return I((w=s==null?void 0:s.order)==null?void 0:w.id)},sx:{width:240,display:"flex",gap:1,alignItems:"center",cursor:"pointer",marginRight:5},children:[e.jsx(E,{icon:"heroicons-outline:external-link"}),e.jsx("span",{children:(p=s==null?void 0:s.order)==null?void 0:p.ref})]})}),e.jsxs(o,{align:"center",sx:{textTransform:"capitalize"},children:[" ",(P=s==null?void 0:s.order)==null?void 0:P.customer.name," "]}),e.jsxs(o,{align:"center",children:[" ",s==null?void 0:s.quantity," "]}),e.jsxs(o,{align:"center",children:[" ",m(s==null?void 0:s.snapshotProductPrice)," "]}),e.jsxs(o,{align:"center",children:[m((y=s==null?void 0:s.order)==null?void 0:y.totalOrderAmount)," "]})]},s==null?void 0:s.id)})})]})}),e.jsx(M,{sx:{width:1},page:r.page,count:f.length,rowsPerPage:r.rowsPerPage,onPageChange:r.onChangePage,onRowsPerPageChange:r.onChangeRowsPerPage})]})},ae=({product:a})=>{var n,i,r;return e.jsxs(R,{children:[e.jsx(z,{links:[{name:"Dashboard",href:c.dashboard.root},{name:"Products",href:c.dashboard.product.root},{name:"Product Details"}],sx:{mb:{xs:3,md:5}}}),e.jsx(u,{container:!0,spacing:3,children:e.jsx(u,{xs:12,md:12,children:e.jsx(l,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:e.jsxs(H,{children:[e.jsx(X,{title:"Details"}),e.jsxs(l,{direction:"row",gap:10,sx:{p:3,typography:"body2"},children:[e.jsx(t,{flexDirection:"column",sx:{p:1,display:"flex"},children:e.jsx(l,{spacing:2,direction:"row",alignItems:"center",children:e.jsx(C,{sx:{width:100,height:100},alt:a==null?void 0:a.name,src:d.site.serverFileHost+((a==null?void 0:a.image)||d.site.defaultImgPlaceHolder)})})}),e.jsxs(t,{flexDirection:"column",gap:1,sx:{display:"flex",width:"100%",p:1},children:[e.jsxs(l,{sx:{color:"text.secondary"},gap:1,flexDirection:"row",alignItems:"center",children:[e.jsx("span",{children:"Category:"}),e.jsxs(l,{gap:1,flexDirection:"row",alignItems:"center",children:[e.jsx(Z,{sx:{[`& .${O.avatar}`]:{width:24,height:24}},children:e.jsx(C,{alt:(n=a==null?void 0:a.category)==null?void 0:n.name,src:`${d.site.serverFileHost}${(i=a==null?void 0:a.category)==null?void 0:i.image}`})}),(r=a==null?void 0:a.category)==null?void 0:r.name]})]}),e.jsxs(t,{sx:{color:"text.secondary"},children:["Name: ",a==null?void 0:a.name]}),e.jsxs(t,{sx:{color:"text.secondary"},children:["Description: ",a==null?void 0:a.description]}),e.jsxs(t,{sx:{color:"text.secondary"},children:["Price:",e.jsx(k,{variant:"soft",color:"info",children:m(a==null?void 0:a.price)})]})]})]}),(a==null?void 0:a.productToOrder.length)>1&&e.jsx(F,{children:e.jsx(t,{fullWidth:!0,alignItems:"center",sx:{p:3,borderBottom:x=>`dashed 2px ${x.vars.palette.background.neutral}`},children:e.jsx(ee,{productOrders:a==null?void 0:a.productToOrder,defaultRowsPerPage:15})})})]})})})})]})},se={title:`Product details | Dashboard - ${d.site.name}`};function Re(){const{id:a=""}=V(),n=G({queryKey:["plan",a],queryFn:async()=>{const{data:i}=await q.get(L.products.details+a);return i}});return n.isPending||n.isLoading?e.jsx(S,{}):n.isError?e.jsx(Q,{route:c.dashboard.plan.root}):e.jsxs(e.Fragment,{children:[e.jsx($,{children:e.jsxs("title",{children:[" ",se.title]})}),e.jsx(ae,{product:n.data})]})}export{Re as default};
