import{r as c,df as y,e3 as D,W as T,p as g,j as e,B as t,e8 as H,S as m,A as F,C as b,dQ as N,cW as C,cZ as O,v as L,de as w,el as v,dU as q,H as W,dq as V,dn as Q}from"./index-BqQARj70.js";import{u as _,E as z}from"./error-block-Cvsq6LVS.js";import{u as G}from"./use-params-C27m3orW.js";import{u as K}from"./use-tabs-CbQ-vSRU.js";import{C as U}from"./custom-breadcrumbs-ryDpeVg5.js";import{b as Z}from"./format-number-BvEweN_e.js";import{e as B}from"./utils-BkGDLkaZ.js";import{g as E}from"./utils-MBUcMVfY.js";import{u as R}from"./use-table-CIIi1yXP.js";import{a as A,b as I,c as S,T as k}from"./table-head-custom-BsfRnN01.js";import{T as $}from"./table-pagination-custom-B8jkTEOc.js";import{T as h}from"./TableCell-BYUYO2qG.js";import{C as J}from"./CardHeader-DXB_c6fw.js";import{T as M,a as X}from"./Tabs-CmqXMWlF.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./index-ALNGUIW9.js";import"./countries-DSLisFCy.js";import"./Checkbox-Bhx6CUcB.js";import"./TablePagination-Dx3_2Y4O.js";import"./KeyboardArrowRight-CBFHahxG.js";import"./LastPage-B8ZhtlKX.js";import"./Select-BcNE4CY6.js";import"./Menu-CyG4g8V9.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-ByUog9Qa.js";import"./FormControlLabel-DYa7_yhu.js";const Y=({orders:n,defaultRowsPerPage:l})=>{var u;const a=[{id:"ref",label:"#"},{id:"price",label:"Price",width:220}],s=R({defaultOrderBy:"orderId",defaultRowsPerPage:l}),[d,o]=c.useState(n);c.useEffect(()=>{o(n)},[n]);const i=y({name:"",status:"all",startDate:null,endDate:null}),j=D(i.state.startDate,i.state.endDate),x=B({inputData:d,comparator:E(s.order,s.orderBy),filters:i.state,dateError:j}),p=T(),f=c.useCallback(r=>{p.push(g.dashboard.order.details(r))},[p]);return e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{borderRadius:1,overflow:"hidden",border:r=>`solid 1px ${r.vars.palette.divider}`},children:[e.jsx(t,{sx:{flex:1,width:1},children:e.jsxs(A,{size:"medium",children:[e.jsx(I,{headLabel:a}),e.jsx(S,{children:(u=x.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage))==null?void 0:u.map((r,P)=>e.jsxs(k,{onClick:()=>f(r==null?void 0:r.id),sx:{cursor:"pointer"},hover:!0,children:[e.jsx(h,{children:(r==null?void 0:r.ref)||P||(r==null?void 0:r.id)}),e.jsx(h,{children:Z(H(r.totalOrderAmount-r.totalOrderAmount*(r.discount/100),r.snapshotTaxPercentage))||"-"})]},r==null?void 0:r.id))})]})}),e.jsx($,{sx:{width:1},page:s.page,count:x.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onRowsPerPageChange:s.onChangeRowsPerPage})]})},ee=({products:n,defaultRowsPerPage:l})=>{var u;const a=[{id:"id",width:60,label:"#"},{id:"name",label:"Product"},{id:"quantity",label:"Quantity",width:120}],s=R({defaultOrderBy:"orderId",defaultRowsPerPage:l}),[d,o]=c.useState(n);c.useEffect(()=>{o(n)},[n]);const i=y({name:"",status:"all",startDate:null,endDate:null}),j=D(i.state.startDate,i.state.endDate),x=B({inputData:d,comparator:E(s.order,s.orderBy),filters:i.state,dateError:j}),p=T(),f=c.useCallback(r=>{p.push(g.dashboard.product.details(r))},[p]);return e.jsxs(t,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{borderRadius:1,overflow:"hidden",border:r=>`solid 1px ${r.vars.palette.divider}`},children:[e.jsx(t,{sx:{flex:1,width:1},children:e.jsxs(A,{size:"medium",children:[e.jsx(I,{headLabel:a}),e.jsx(S,{children:(u=x.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage))==null?void 0:u.map((r,P)=>e.jsxs(k,{children:[e.jsxs(h,{children:[" ",P+1," "]}),e.jsx(h,{children:e.jsxs(m,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(F,{alt:r==null?void 0:r.name,src:b.site.serverFileHost+((r==null?void 0:r.image)||b.site.defaultImgPlaceHolder)}),e.jsx(t,{component:"span",sx:{cursor:"pointer"},onClick:()=>{f(r.id)},children:r==null?void 0:r.name})]})}),e.jsx(h,{children:e.jsxs(t,{sx:{width:240,color:"error.main",fontWeight:"bold"},children:["x",r==null?void 0:r.total_quantity]})})]},r==null?void 0:r.id))})]})}),e.jsx($,{sx:{width:1},page:s.page,count:x.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onRowsPerPageChange:s.onChangeRowsPerPage})]})},re=({payload:n})=>{const l=[{value:"products",icon:e.jsx(v,{src:`${b.site.basePath}/assets/icons/navbar/ic-product.svg`}),label:"Products"},{value:"orders",icon:e.jsx(v,{src:`${b.site.basePath}/assets/icons/navbar/ic-order.svg`}),label:"Orders"}],{customer:a,products:s}=n,d=K("products");return e.jsxs(N,{children:[e.jsx(U,{links:[{name:"Dashboard",href:g.dashboard.root},{name:"Customers",href:g.dashboard.customers.root},{name:"Customer Details"}],sx:{mb:{xs:3,md:5}}}),e.jsx(C,{container:!0,spacing:3,children:e.jsx(C,{xs:12,md:12,children:e.jsx(m,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:e.jsxs(O,{children:[e.jsx(J,{title:"Details"}),e.jsx(m,{direction:"row",gap:10,sx:{p:3,typography:"body2"},children:e.jsxs(t,{flexDirection:"column",gap:1,sx:{display:"flex",width:"100%",p:1},children:[e.jsxs(t,{sx:{color:"text.secondary"},children:["Ref: #",a==null?void 0:a.ref]}),e.jsxs(t,{sx:{color:"text.secondary"},children:["Name: ",a==null?void 0:a.name]}),e.jsxs(t,{sx:{color:"text.secondary"},children:["Email: ",a==null?void 0:a.email]}),(a==null?void 0:a.phoneNumber)&&e.jsxs(t,{sx:{color:"text.secondary"},children:["Phone Number: ",(a==null?void 0:a.phoneNumber)||" - "]}),(a==null?void 0:a.taxNumber)&&e.jsxs(t,{sx:{color:"text.secondary"},children:["Tax/Vat: ",(a==null?void 0:a.taxNumber)||" - "]})]})}),e.jsx(t,{sx:{p:2},children:e.jsxs(t,{sx:{borderRadius:1,overflow:"hidden",border:o=>`solid 1px ${o.vars.palette.divider}`},children:[e.jsx(t,{sx:{boxShadow:o=>`inset 0 -2px 0 0 ${L(o.vars.palette.grey["500Channel"],.08)}`},children:e.jsx(M,{value:d.value,onChange:d.onChange,sx:{pr:3,pl:3},children:l.map(o=>e.jsx(X,{icon:o.icon,value:o.value,label:o.label},o.value))})}),d.value==="products"&&e.jsx(w,{children:e.jsx(t,{fullWidth:!0,alignItems:"center",sx:{pr:3,pl:3,pb:3,pt:1,borderBottom:o=>`dashed 2px ${o.vars.palette.background.neutral}`},children:e.jsx(ee,{products:s,defaultRowsPerPage:15})})}),d.value==="orders"&&e.jsx(w,{children:e.jsx(t,{fullWidth:!0,alignItems:"center",sx:{pr:3,pl:3,pb:3,pt:1,borderBottom:o=>`dashed 2px ${o.vars.palette.background.neutral}`},children:e.jsx(Y,{orders:a.orders,defaultRowsPerPage:15})})})]})})]})})})})]})},ae={title:`Customer details | Dashboard - ${b.site.name}`};function Se(){const{id:n=""}=G(),l=_({queryKey:["customer",n],queryFn:async()=>{const{data:a}=await V.get(Q.customers.details+n);return a}});return l.isPending||l.isLoading?e.jsx(q,{}):l.isError?e.jsx(z,{route:g.dashboard.plan.root}):e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsxs("title",{children:[" ",ae.title]})}),e.jsx(re,{payload:l.data})]})}export{Se as default};
