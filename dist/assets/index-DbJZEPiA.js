import{j as r,B as t,S as n,T as i,p as m,_ as p,H as l,C as c}from"./index-Dvl3VeO0.js";import{I as s}from"./image-BAN6lPg0.js";import{C as d}from"./custom-breadcrumbs-_FwemDTr.js";import{C as x}from"./component-hero-Dt5w5jNI.js";import{S as j}from"./component-template-CiCC2CM2.js";import"./CardHeader-FRpSyAE6.js";import"./CardContent-i5qDd4K3.js";const f=["4/3","3/4","6/4","4/6","16/9","9/16","21/9","9/21","1/1"],o=f.map((a,e)=>({ratio:a,url:p.image.cover(e+1)}));function u(){const a=[{name:"List",component:r.jsx(t,{gap:2,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},children:o.map(e=>r.jsx(s,{alt:e.ratio,src:e.url,ratio:"3/2",sx:{borderRadius:2}},e.ratio))})},{name:"Aspect ratio",component:r.jsx(t,{gap:2,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},children:o.map(e=>r.jsxs(n,{spacing:1,children:[r.jsx(i,{variant:"overline",sx:{color:"text.secondary"},children:e.ratio}),r.jsx(s,{alt:e.ratio,src:e.url,ratio:e.ratio,sx:{borderRadius:2}})]},e.ratio))})}];return r.jsxs(r.Fragment,{children:[r.jsx(x,{children:r.jsx(d,{heading:"Image",links:[{name:"Components",href:m.components},{name:"Image"}]})}),r.jsx(j,{data:a})]})}const h={title:`Image | Components - ${c.site.name}`};function b(){return r.jsxs(r.Fragment,{children:[r.jsx(l,{children:r.jsxs("title",{children:[" ",h.title]})}),r.jsx(u,{})]})}export{b as default};
