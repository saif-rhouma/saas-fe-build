import{b as j,r as a,j as e,p as C,T as f,cV as t,b6 as i,H as S,C as b}from"./index-88qAwG8P.js";import{C as y}from"./custom-breadcrumbs-x7W5GMPl.js";import{C as w}from"./component-hero-6dC0xf2a.js";import{C as G,a as l}from"./component-block-B2nGqAqu.js";import{R as c,a as m}from"./RadioGroup-DZvtDFL6.js";import{F as x}from"./FormControlLabel-ts_MkIWE.js";import"./FormGroup-B0QesIKW.js";import"./formControlState-Dq1zat_P.js";const F=["1col","2col","3col","4col","6col","12col"];function v(){const s=j(),[o,d]=a.useState(2),[r,p]=a.useState(3),u=n=>{d(Number(n.target.value))},h=n=>{p(Number(n.target.value))};return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx(y,{heading:"Grid",links:[{name:"Components",href:C.components},{name:"Grid"}]})}),e.jsxs(G,{children:[e.jsxs(l,{title:"Spacing",sx:{flexDirection:"column",alignItems:"unset"},children:[e.jsxs(f,{variant:"body2",sx:{mb:3,textAlign:"center"},children:["Spacing: ",e.jsx("strong",{children:s.spacing(Number(o))})]}),e.jsx(t,{container:!0,spacing:o,children:[0,1,2,3,4,5,6,7,8,9,10,11].map(n=>e.jsx(t,{xs:1,children:e.jsx(i,{sx:{height:80,boxShadow:s.customShadows.z8}})},n))}),e.jsx(c,{row:!0,name:"spacing",value:o.toString(),onChange:u,sx:{mt:3,display:"flex",justifyContent:"center"},children:[0,1,2,3,4,5,6,7,8,9,10].map(n=>e.jsx(x,{value:n.toString(),label:n.toString(),control:e.jsx(m,{})},n))})]}),e.jsxs(l,{title:"Column",sx:{flexDirection:"column",alignItems:"unset"},children:[e.jsx(t,{container:!0,spacing:3,children:[0,1,2,3,4,5,6,7,8,9,10,11].map(n=>e.jsx(t,{xs:r,children:e.jsxs(i,{sx:{py:3,textAlign:"center",boxShadow:s.customShadows.z8},children:["xs = ",r]})},n))}),e.jsx(c,{row:!0,name:"column",value:r.toString(),onChange:h,sx:{mt:3,display:"flex",justifyContent:"center"},children:[12,6,4,3,2,1].map((n,g)=>e.jsx(x,{value:n.toString(),label:F[g],control:e.jsx(m,{})},n))})]})]})]})}const N={title:`Grid | Foundations - ${b.site.name}`};function k(){return e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsxs("title",{children:[" ",N.title]})}),e.jsx(v,{})]})}export{k as default};
