import{_ as r,r as u,j as e,I as t,T as s,p as f,H as C,C as g}from"./index-DLwkls4m.js";import{C as v}from"./custom-breadcrumbs-RrbSlijf.js";import{C as A}from"./component-hero-BL9eOJUB.js";import{a as l}from"./component-block-CcbkXlDA.js";import{S as w}from"./component-template-CXZdldum.js";import{A as c,a as d,b as m}from"./AccordionSummary-Zut3bb8r.js";import"./CardHeader-DcTomhNA.js";import"./CardContent-Cczj0blS.js";const p=[...Array(4)].map((i,o)=>({id:r.id(o),value:`panel${o+1}`,heading:`Accordion ${o+1}`,subHeading:r.postTitle(o),detail:r.description(o)}));function b(){const[i,o]=u.useState(!1),h=n=>(a,j)=>{o(j?n:!1)},x=[{name:"Simple",component:e.jsx(l,{children:e.jsx("div",{children:p.map((n,a)=>e.jsxs(c,{disabled:a===3,children:[e.jsx(d,{expandIcon:e.jsx(t,{icon:"eva:arrow-ios-downward-fill"}),children:e.jsx(s,{variant:"subtitle1",children:n.heading})}),e.jsx(m,{children:e.jsx(s,{children:n.detail})})]},n.value))})})},{name:"Controlled",component:e.jsx(l,{children:e.jsx("div",{children:p.map((n,a)=>e.jsxs(c,{disabled:a===3,expanded:i===n.value,onChange:h(n.value),children:[e.jsxs(d,{expandIcon:e.jsx(t,{icon:"eva:arrow-ios-downward-fill"}),children:[e.jsx(s,{variant:"subtitle1",sx:{width:"33%",flexShrink:0},children:n.heading}),e.jsx(s,{sx:{color:"text.secondary"},children:n.subHeading})]}),e.jsx(m,{children:e.jsx(s,{children:n.detail})})]},n.value))})})}];return e.jsxs(e.Fragment,{children:[e.jsx(A,{children:e.jsx(v,{heading:"Accordion",links:[{name:"Components",href:f.components},{name:"Accordion"}],moreLink:["https://mui.com/components/accordion"]})}),e.jsx(w,{data:x})]})}const y={title:`Accordion | MUI - ${g.site.name}`};function $(){return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsxs("title",{children:[" ",y.title]})}),e.jsx(b,{})]})}export{$ as default};
