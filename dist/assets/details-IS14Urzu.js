import{r as c,de as y,e2 as T,g as D,p as g,j as e,B as t,e8 as H,S as m,A as F,C as b,dP as N,cV as C,cY as O,v as L,dd as w,ek as v,dT as V,H as q,dp as W,dm as _}from"./index-DP6a2E9k.js";import{u as z,E as G}from"./error-block-BfI0F7Kg.js";import{u as Q}from"./use-params-DM5FW4IJ.js";import{u as K}from"./use-tabs-CGRd3gBV.js";import{C as Y}from"./custom-breadcrumbs-BzrZ9EQb.js";import{b as J}from"./format-number-u73Xbp1v.js";import{e as B}from"./utils-C4SPBIjm.js";import{g as E}from"./utils-MBUcMVfY.js";import{u as R}from"./use-table-BsjgMcoo.js";import{a as A,b as I,c as S,T as k}from"./table-head-custom-C_hN9bN8.js";import{T as $}from"./table-pagination-custom-Cf3IvLqe.js";import{T as h}from"./TableCell-DXk-udIV.js";import{C as M}from"./CardHeader-lL1twHfB.js";import{T as U,a as X}from"./Tabs-Bj2Bzbag.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./index-lAqY_A3n.js";import"./countries-DSLisFCy.js";import"./Checkbox-DQX8Zacg.js";import"./TablePagination-ljOW6YUi.js";import"./KeyboardArrowRight-Dl-x7nPp.js";import"./LastPage-BgEsG8Md.js";import"./Select-DSZcOOSt.js";import"./Menu-BDSRGP0V.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-CsH9RuFA.js";import"./FormControlLabel-CiAkhJAg.js";const Z=({orders:n,defaultRowsPerPage:l})=>{var u;const a=[{id:"ref",label:"#"},{id:"price",label:"Price",width:220}],s=R({defaultOrderBy:"orderId",defaultRowsPerPage:l}),[d,o]=c.useState(n);c.useEffect(()=>{o(n)},[n]);const i=y({name:"",status:"all",startDate:null,endDate:null}),j=T(i.state.startDate,i.state.endDate),x=B({inputData:d,comparator:E(s.order,s.orderBy),filters:i.state,dateError:j}),p=D(),f=c.useCallback(r=>{p.push(g.dashboard.order.details(r))},[p]);return e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{borderRadius:1,overflow:"hidden",border:r=>`solid 1px ${r.vars.palette.divider}`},children:[e.jsx(t,{sx:{flex:1,width:1},children:e.jsxs(A,{size:"medium",children:[e.jsx(I,{headLabel:a}),e.jsx(S,{children:(u=x.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage))==null?void 0:u.map((r,P)=>e.jsxs(k,{onClick:()=>f(r==null?void 0:r.id),sx:{cursor:"pointer"},hover:!0,children:[e.jsx(h,{children:(r==null?void 0:r.ref)||P||(r==null?void 0:r.id)}),e.jsx(h,{children:J(H(r.totalOrderAmount-r.totalOrderAmount*(r.discount/100),r.snapshotTaxPercentage))||"-"})]},r==null?void 0:r.id))})]})}),e.jsx($,{sx:{width:1},page:s.page,count:x.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onRowsPerPageChange:s.onChangeRowsPerPage})]})},ee=({products:n,defaultRowsPerPage:l})=>{var u;const a=[{id:"id",width:60,label:"#"},{id:"name",label:"Product"},{id:"quantity",label:"Quantity",width:120}],s=R({defaultOrderBy:"orderId",defaultRowsPerPage:l}),[d,o]=c.useState(n);c.useEffect(()=>{o(n)},[n]);const i=y({name:"",status:"all",startDate:null,endDate:null}),j=T(i.state.startDate,i.state.endDate),x=B({inputData:d,comparator:E(s.order,s.orderBy),filters:i.state,dateError:j}),p=D(),f=c.useCallback(r=>{p.push(g.dashboard.product.details(r))},[p]);return e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{borderRadius:1,overflow:"hidden",border:r=>`solid 1px ${r.vars.palette.divider}`},children:[e.jsx(t,{sx:{flex:1,width:1},children:e.jsxs(A,{size:"medium",children:[e.jsx(I,{headLabel:a}),e.jsx(S,{children:(u=x.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage))==null?void 0:u.map((r,P)=>e.jsxs(k,{children:[e.jsxs(h,{children:[" ",P+1," "]}),e.jsx(h,{children:e.jsxs(m,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(F,{alt:r==null?void 0:r.name,src:b.site.serverFileHost+((r==null?void 0:r.image)||b.site.defaultImgPlaceHolder)}),e.jsx(t,{component:"span",sx:{cursor:"pointer"},onClick:()=>{f(r.id)},children:r==null?void 0:r.name})]})}),e.jsx(h,{children:e.jsxs(t,{sx:{width:240,color:"error.main",fontWeight:"bold"},children:["x",r==null?void 0:r.total_quantity]})})]},r==null?void 0:r.id))})]})}),e.jsx($,{sx:{width:1},page:s.page,count:x.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onRowsPerPageChange:s.onChangeRowsPerPage})]})},re=({payload:n})=>{const l=[{value:"products",icon:e.jsx(v,{src:`${b.site.basePath}/assets/icons/navbar/ic-product.svg`}),label:"Products"},{value:"orders",icon:e.jsx(v,{src:`${b.site.basePath}/assets/icons/navbar/ic-order.svg`}),label:"Orders"}],{customer:a,products:s}=n,d=K("products");return e.jsxs(N,{children:[e.jsx(Y,{links:[{name:"Dashboard",href:g.dashboard.root},{name:"Customers",href:g.dashboard.customers.root},{name:"Customer Details"}],sx:{mb:{xs:3,md:5}}}),e.jsx(C,{container:!0,spacing:3,children:e.jsx(C,{xs:12,md:12,children:e.jsx(m,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:e.jsxs(O,{children:[e.jsx(M,{title:"Details"}),e.jsx(m,{direction:"row",gap:10,sx:{p:3,typography:"body2"},children:e.jsxs(t,{flexDirection:"column",gap:1,sx:{display:"flex",width:"100%",p:1},children:[e.jsxs(t,{sx:{color:"text.secondary"},children:["Ref: #",a==null?void 0:a.ref]}),e.jsxs(t,{sx:{color:"text.secondary"},children:["Name: ",a==null?void 0:a.name]}),e.jsxs(t,{sx:{color:"text.secondary"},children:["Email: ",a==null?void 0:a.email]}),(a==null?void 0:a.phoneNumber)&&e.jsxs(t,{sx:{color:"text.secondary"},children:["Phone Number: ",(a==null?void 0:a.phoneNumber)||" - "]}),(a==null?void 0:a.taxNumber)&&e.jsxs(t,{sx:{color:"text.secondary"},children:["Tax/Vat: ",(a==null?void 0:a.taxNumber)||" - "]})]})}),e.jsx(t,{sx:{p:2},children:e.jsxs(t,{sx:{borderRadius:1,overflow:"hidden",border:o=>`solid 1px ${o.vars.palette.divider}`},children:[e.jsx(t,{sx:{boxShadow:o=>`inset 0 -2px 0 0 ${L(o.vars.palette.grey["500Channel"],.08)}`},children:e.jsx(U,{value:d.value,onChange:d.onChange,sx:{pr:3,pl:3},children:l.map(o=>e.jsx(X,{icon:o.icon,value:o.value,label:o.label},o.value))})}),d.value==="products"&&e.jsx(w,{children:e.jsx(t,{fullWidth:!0,alignItems:"center",sx:{pr:3,pl:3,pb:3,pt:1,borderBottom:o=>`dashed 2px ${o.vars.palette.background.neutral}`},children:e.jsx(ee,{products:s,defaultRowsPerPage:15})})}),d.value==="orders"&&e.jsx(w,{children:e.jsx(t,{fullWidth:!0,alignItems:"center",sx:{pr:3,pl:3,pb:3,pt:1,borderBottom:o=>`dashed 2px ${o.vars.palette.background.neutral}`},children:e.jsx(Z,{orders:a.orders,defaultRowsPerPage:15})})})]})})]})})})})]})},ae={title:`Customer details | Dashboard - ${b.site.name}`};function Se(){const{id:n=""}=Q(),l=z({queryKey:["customer",n],queryFn:async()=>{const{data:a}=await W.get(_.customers.details+n);return a}});return l.isPending||l.isLoading?e.jsx(V,{}):l.isError?e.jsx(G,{route:g.dashboard.plan.root}):e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsxs("title",{children:[" ",ae.title]})}),e.jsx(re,{payload:l.data})]})}export{Se as default};
