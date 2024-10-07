import{l as u,r as p,p as d,j as s,B as a,S as i,A as j,C as c,e8 as b,G as x,aD as m,dy as f,ec as y,H as g,dJ as C,dH as w}from"./index-CGa_Q6Py.js";import{u as D,E as T}from"./error-block-stWvsMsx.js";import{u as E}from"./use-params--Re0ClxC.js";import{C as H}from"./custom-breadcrumbs-UiY5PgKl.js";import{a as N,b as P,c as v,T as B}from"./table-head-custom-CWkKt6RV.js";import{T as l}from"./TableCell-BagFzXfr.js";import{C as k}from"./CardHeader-DMBSs74a.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-C-tt3dk-.js";const I=({products:n})=>{const r=[{id:"name",width:60,label:"#"},{id:"name",label:"Product"},{id:"quantity",label:"Quantity",width:120}],o=u(),t=p.useCallback(e=>{o.push(d.dashboard.product.details(e))},[o]);return s.jsx(a,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{borderRadius:1,overflow:"hidden",border:e=>`solid 1px ${e.vars.palette.divider}`},children:s.jsxs(N,{size:"medium",children:[s.jsx(P,{headLabel:r}),s.jsx(v,{children:n==null?void 0:n.map((e,h)=>s.jsxs(B,{children:[s.jsxs(l,{children:[" ",h+1," "]}),s.jsx(l,{children:s.jsxs(i,{spacing:2,direction:"row",alignItems:"center",children:[s.jsx(j,{alt:e==null?void 0:e.name,src:c.site.serverFileHost+((e==null?void 0:e.image)||c.site.defaultImgPlaceHolder)}),s.jsx(a,{component:"span",sx:{cursor:"pointer"},onClick:()=>{t(e.id)},children:e==null?void 0:e.name})]})}),s.jsxs(l,{children:[s.jsxs(a,{sx:{width:240,color:"error.main",fontWeight:"bold"},children:["x",e==null?void 0:e.total_quantity]})," "]})]},e==null?void 0:e.id))})]})})},R=({payload:n})=>{const{customer:r,products:o}=n;return s.jsxs(b,{children:[s.jsx(H,{links:[{name:"Dashboard",href:d.dashboard.root},{name:"Customer",href:d.dashboard.customers.root},{name:"Customer Details"}],sx:{mb:{xs:3,md:5}}}),s.jsx(x,{container:!0,spacing:3,children:s.jsx(x,{xs:12,md:12,children:s.jsx(i,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:s.jsxs(m,{children:[s.jsx(k,{title:"Details"}),s.jsx(i,{direction:"row",gap:10,sx:{p:3,typography:"body2"},children:s.jsxs(a,{flexDirection:"column",gap:1,sx:{display:"flex",width:"100%",p:1},children:[s.jsxs(a,{sx:{color:"text.secondary"},children:["Ref: #",r==null?void 0:r.ref]}),s.jsxs(a,{sx:{color:"text.secondary"},children:["Name: ",r==null?void 0:r.name]}),s.jsxs(a,{sx:{color:"text.secondary"},children:["Email: ",r==null?void 0:r.email]}),(r==null?void 0:r.phoneNumber)&&s.jsxs(a,{sx:{color:"text.secondary"},children:["Phone Number: ",(r==null?void 0:r.phoneNumber)||" - "]}),(r==null?void 0:r.taxNumber)&&s.jsxs(a,{sx:{color:"text.secondary"},children:["Tax Number: ",(r==null?void 0:r.taxNumber)||" - "]})]})}),s.jsx(f,{children:s.jsx(a,{fullWidth:!0,alignItems:"center",sx:{p:3,borderBottom:t=>`dashed 2px ${t.vars.palette.background.neutral}`},children:s.jsx(I,{products:o})})})]})})})})]})},q={title:`Customer details | Dashboard - ${c.site.name}`};function J(){const{id:n=""}=E(),r=D({queryKey:["customer",n],queryFn:async()=>{const{data:o}=await C.get(w.customers.details+n);return o}});return r.isPending||r.isLoading?s.jsx(y,{}):r.isError?s.jsx(T,{route:d.dashboard.plan.root}):s.jsxs(s.Fragment,{children:[s.jsx(g,{children:s.jsxs("title",{children:[" ",q.title]})}),s.jsx(R,{payload:r.data})]})}export{J as default};
