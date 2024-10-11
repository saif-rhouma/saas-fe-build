import{g as y,r as w,p as x,j as s,B as n,I as C,dP as P,ay as m,S as l,aB as D,A as b,C as d,b1 as T,d6 as u,dc as v,dT as I,H as p,dn as A,dl as B}from"./index-Cs0Sdxyr.js";import{u as H,E as k}from"./error-block-t40v2wjH.js";import{u as q}from"./use-params-DtXHnO1y.js";import{b as c}from"./format-number-TrbPmgcB.js";import{C as E}from"./custom-breadcrumbs-BT-Xn517.js";import{a as R,b as $,c as F,T as L}from"./table-head-custom-DweneoZv.js";import{T as o}from"./TableCell-DQSLj1b3.js";import{C as O}from"./CardHeader-CuZqV3ML.js";import{A as G}from"./AvatarGroup-q3q9DHJL.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-BnpdbSxp.js";const S=({productOrders:e})=>{const r=[{id:"name",label:"Order Ref",width:150},{id:"quantity",label:"Customer"},{id:"quantity",label:"Quantity",width:200},{id:"quantity",label:"Price",width:200},{id:"quantity",label:"Total Order Amount",width:200}],i=y(),t=w.useCallback(a=>{i.push(x.dashboard.order.details(a))},[i]);return s.jsx(n,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{borderRadius:1,overflow:"hidden",border:a=>`solid 1px ${a.vars.palette.divider}`},children:s.jsxs(R,{size:"medium",children:[s.jsx($,{headLabel:r}),s.jsx(F,{children:e==null?void 0:e.map(a=>{var h,j,g;return s.jsxs(L,{children:[s.jsx(o,{children:s.jsxs(n,{onClick:()=>{var f;return t((f=a==null?void 0:a.order)==null?void 0:f.id)},sx:{width:240,display:"flex",gap:1,alignItems:"center",cursor:"pointer",marginRight:5},children:[s.jsx(C,{icon:"heroicons-outline:external-link"}),s.jsx("span",{children:(h=a==null?void 0:a.order)==null?void 0:h.ref})]})}),s.jsxs(o,{children:[" ",(j=a==null?void 0:a.order)==null?void 0:j.customer.name," "]}),s.jsxs(o,{children:[" x",a==null?void 0:a.quantity," "]}),s.jsxs(o,{children:[" ",c(a==null?void 0:a.snapshotProductPrice)," "]}),s.jsxs(o,{children:[c((g=a==null?void 0:a.order)==null?void 0:g.totalOrderAmount)," "]})]},a==null?void 0:a.id)})})]})})},N=({product:e})=>{var r,i,t;return s.jsxs(P,{children:[s.jsx(E,{links:[{name:"Dashboard",href:x.dashboard.root},{name:"Product",href:x.dashboard.product.root},{name:"Product Details"}],sx:{mb:{xs:3,md:5}}}),s.jsx(m,{container:!0,spacing:3,children:s.jsx(m,{xs:12,md:12,children:s.jsx(l,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:s.jsxs(D,{children:[s.jsx(O,{title:"Details"}),s.jsxs(l,{direction:"row",gap:10,sx:{p:3,typography:"body2"},children:[s.jsx(n,{flexDirection:"column",sx:{p:1,display:"flex"},children:s.jsx(l,{spacing:2,direction:"row",alignItems:"center",children:s.jsx(b,{sx:{width:100,height:100},alt:e==null?void 0:e.name,src:d.site.serverFileHost+((e==null?void 0:e.image)||d.site.defaultImgPlaceHolder)})})}),s.jsxs(n,{flexDirection:"column",gap:1,sx:{display:"flex",width:"100%",p:1},children:[s.jsxs(l,{sx:{color:"text.secondary"},gap:1,flexDirection:"row",alignItems:"center",children:[s.jsx("span",{children:"Category:"}),s.jsxs(l,{gap:1,flexDirection:"row",alignItems:"center",children:[s.jsx(G,{sx:{[`& .${T.avatar}`]:{width:24,height:24}},children:s.jsx(b,{alt:(r=e==null?void 0:e.category)==null?void 0:r.name,src:`${d.site.serverFileHost}${(i=e==null?void 0:e.category)==null?void 0:i.image}`})}),(t=e==null?void 0:e.category)==null?void 0:t.name]})]}),s.jsxs(n,{sx:{color:"text.secondary"},children:["Name: ",e==null?void 0:e.name]}),s.jsxs(n,{sx:{color:"text.secondary"},children:["Description: ",e==null?void 0:e.description]}),s.jsxs(n,{sx:{color:"text.secondary"},children:["Price:",s.jsx(u,{variant:"soft",color:"info",children:c(e==null?void 0:e.price)})]})]})]}),(e==null?void 0:e.productToOrder.length)>1&&s.jsx(v,{children:s.jsx(n,{fullWidth:!0,alignItems:"center",sx:{p:3,borderBottom:a=>`dashed 2px ${a.vars.palette.background.neutral}`},children:s.jsx(S,{productOrders:e==null?void 0:e.productToOrder})})})]})})})})]})},Q={title:`Product details | Dashboard - ${d.site.name}`};function as(){const{id:e=""}=q(),r=H({queryKey:["plan",e],queryFn:async()=>{const{data:i}=await A.get(B.products.details+e);return i}});return r.isPending||r.isLoading?s.jsx(I,{}):r.isError?s.jsx(k,{route:x.dashboard.plan.root}):s.jsxs(s.Fragment,{children:[s.jsx(p,{children:s.jsxs("title",{children:[" ",Q.title]})}),s.jsx(N,{product:r.data})]})}export{as as default};
