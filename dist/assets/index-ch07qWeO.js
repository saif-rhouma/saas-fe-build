import{j as r,B as t,S as n,T as i,p as m,_ as p,H as l,C as c}from"./index-dT1vCng0.js";import{I as s}from"./image-COOiVMf9.js";import{C as d}from"./custom-breadcrumbs-CRMkz5HZ.js";import{C as x}from"./component-hero-COyQmejw.js";import{S as j}from"./component-template-BpORUsvq.js";import"./CardHeader-D0plEQI9.js";import"./CardContent-BEey9om0.js";const f=["4/3","3/4","6/4","4/6","16/9","9/16","21/9","9/21","1/1"],o=f.map((a,e)=>({ratio:a,url:p.image.cover(e+1)}));function u(){const a=[{name:"List",component:r.jsx(t,{gap:2,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},children:o.map(e=>r.jsx(s,{alt:e.ratio,src:e.url,ratio:"3/2",sx:{borderRadius:2}},e.ratio))})},{name:"Aspect ratio",component:r.jsx(t,{gap:2,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},children:o.map(e=>r.jsxs(n,{spacing:1,children:[r.jsx(i,{variant:"overline",sx:{color:"text.secondary"},children:e.ratio}),r.jsx(s,{alt:e.ratio,src:e.url,ratio:e.ratio,sx:{borderRadius:2}})]},e.ratio))})}];return r.jsxs(r.Fragment,{children:[r.jsx(x,{children:r.jsx(d,{heading:"Image",links:[{name:"Components",href:m.components},{name:"Image"}]})}),r.jsx(j,{data:a})]})}const h={title:`Image | Components - ${c.site.name}`};function b(){return r.jsxs(r.Fragment,{children:[r.jsx(l,{children:r.jsxs("title",{children:[" ",h.title]})}),r.jsx(u,{})]})}export{b as default};
