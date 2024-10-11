import{j as e,S as x,aB as c,r as o,p as j,H as h,C as v}from"./index-D-ZKGqTU.js";import{C as g}from"./custom-breadcrumbs-Ce0SsF19.js";import{a as i}from"./component-block-gyf1Z1ot.js";import{C}from"./component-hero-DBV6Y83r.js";import{C as s}from"./CircularProgress-Bi1c9VU0.js";import{S as w}from"./component-template-CcALv9X5.js";import"./CardHeader-BKG7jGOn.js";import"./CardContent-CdSq0VaC.js";const l=["inherit","primary","secondary","info","success","warning","error"];function P({progress:t,buffer:n}){return e.jsxs(x,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsx(i,{title:"Indeterminate",sx:{flexDirection:"column"},children:l.map(r=>e.jsx(c,{color:r,sx:{mb:2,width:1}},r))}),e.jsx(i,{title:"Determinate",sx:{flexDirection:"column"},children:l.map(r=>e.jsx(c,{color:r,value:t,variant:"determinate",sx:{mb:2,width:1}},r))}),e.jsx(i,{title:"Buffer",sx:{flexDirection:"column"},children:l.map(r=>e.jsx(c,{color:r,variant:"buffer",value:t,valueBuffer:n,sx:{mb:2,width:1}},r))}),e.jsx(i,{title:"Query",sx:{flexDirection:"column"},children:l.map(r=>e.jsx(c,{color:r,variant:"query",value:t,valueBuffer:n,sx:{mb:2,width:1}},r))})]})}const S=["inherit","primary","secondary","info","success","warning","error"];function I({progress:t}){return e.jsxs(x,{spacing:5,children:[e.jsx(i,{title:"Indeterminate",children:S.map(n=>e.jsx(s,{color:n},n))}),e.jsxs(i,{title:"Determinate",children:[e.jsx(s,{color:"info"}),e.jsx(s,{color:"info",variant:"determinate",value:25}),e.jsx(s,{color:"info",variant:"determinate",value:50}),e.jsx(s,{color:"info",variant:"determinate",value:75}),e.jsx(s,{color:"info",variant:"determinate",value:100}),e.jsx(s,{color:"info",variant:"determinate",value:t})]}),e.jsxs(i,{title:"Sizes",children:[e.jsx(s,{size:48,color:"info"}),e.jsx(s,{color:"info"}),e.jsx(s,{size:32,color:"info"}),e.jsx(s,{size:24,color:"info"})]})]})}function y(){const[t,n]=o.useState(0),[r,f]=o.useState(10);o.useEffect(()=>{const a=setInterval(()=>{n(m=>{if(m===100)return 0;const p=Math.random()*10;return Math.min(m+p,100)})},500);return()=>{clearInterval(a)}},[]);const u=o.useRef(()=>{});o.useEffect(()=>{u.current=()=>{if(t>100)n(0),f(10);else{const a=Math.random()*10,m=Math.random()*10;n(t+a),f(t+a+m)}}}),o.useEffect(()=>{const a=setInterval(()=>{u.current()},500);return()=>{clearInterval(a)}},[]);const d=[{name:"Circular",component:e.jsx(I,{progress:t})},{name:"Linear",component:e.jsx(P,{progress:t,buffer:r})}];return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsx(g,{heading:"Progress",links:[{name:"Components",href:j.components},{name:"Progress"}],moreLink:["https://mui.com/components/progress"]})}),e.jsx(w,{data:d})]})}const B={title:`Progress | MUI - ${v.site.name}`};function z(){return e.jsxs(e.Fragment,{children:[e.jsx(h,{children:e.jsxs("title",{children:[" ",B.title]})}),e.jsx(y,{})]})}export{z as default};
