import{b3 as x,b4 as u,aw as p,T as f,r as j,aD as g,j as e,aA as T,aE as v,bB as A,aF as C,p as y,n,e as i,v as k,H as b,C as D}from"./index-BRWSQhLj.js";import{C as U}from"./custom-breadcrumbs-Ch5Xqwj9.js";import{C as w}from"./component-hero-B1HjzdUU.js";import{a as o}from"./component-block-CebTRngM.js";import{S as F}from"./component-template-DqUBK5Qn.js";import"./CardHeader-Dc-Uv2Xe.js";import"./CardContent-C6Ghtb1n.js";function I(s){return u("MuiAlertTitle",s)}x("MuiAlertTitle",["root"]);const M=["className"],z=A(),R=s=>{const{classes:t}=s;return C({root:["root"]},I,t)},B=p(f,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(s,t)=>t.root})(({theme:s})=>({fontWeight:s.typography.fontWeightMedium,marginTop:-2})),O=j.forwardRef(function(t,l){const a=z({props:t,name:"MuiAlertTitle"}),{className:m}=a,d=g(a,M),c=a,h=R(c);return e.jsx(B,T({gutterBottom:!0,component:"div",ownerState:c,ref:l,className:v(h.root,m)},d))}),r=["info","success","warning","error"];function S(){const s=[{name:"Standard",component:e.jsx(o,{sx:{flexDirection:"column",alignItems:"unset"},children:r.map(t=>e.jsxs(n,{severity:t,onClose:()=>{},children:["This is an ",t," alert — check it out!"]},t))})},{name:"Filled",component:e.jsx(o,{sx:{flexDirection:"column",alignItems:"unset"},children:r.map(t=>e.jsxs(n,{severity:t,variant:"filled",onClose:()=>{},children:["This is an ",t," alert — check it out!"]},t))})},{name:"Outlined",component:e.jsx(o,{sx:{flexDirection:"column",alignItems:"unset"},children:r.map(t=>e.jsxs(n,{severity:t,variant:"outlined",onClose:()=>{},children:["This is an ",t," alert — check it out!"]},t))})},{name:"Description",component:e.jsx(o,{sx:{flexDirection:"column",alignItems:"unset"},children:r.map(t=>e.jsxs(n,{severity:t,onClose:()=>{},children:[e.jsxs(O,{sx:{textTransform:"capitalize"},children:[" ",t," "]}),"This is an ",t," alert — ",e.jsx("strong",{children:"check it out!"})]},t))})},{name:"Actions",component:e.jsxs(o,{sx:{flexDirection:"column",alignItems:"unset"},children:[e.jsx(n,{severity:"info",action:e.jsx(i,{color:"info",size:"small",variant:"soft",children:"Action"}),children:"This is an info alert — check it out!"}),e.jsx(n,{severity:"info",variant:"filled",action:e.jsxs(e.Fragment,{children:[e.jsx(i,{color:"inherit",size:"small",variant:"outlined",sx:{mr:1,border:t=>`1px solid ${k(t.vars.palette.common.whiteChannel,.48)}`},children:"Undo"}),e.jsx(i,{size:"small",color:"info",variant:"contained",sx:{bgcolor:"info.dark"},children:"Action"})]}),children:"This is an info alert — check it out!"}),e.jsx(n,{severity:"info",variant:"outlined",action:e.jsxs(e.Fragment,{children:[e.jsx(i,{color:"info",size:"small",variant:"outlined",sx:{mr:1},children:"Undo"}),e.jsx(i,{color:"info",size:"small",variant:"contained",sx:{bgcolor:"info.dark"},children:"Action"})]}),children:"This is an info alert — check it out!"})]})}];return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx(U,{heading:"Alert",links:[{name:"Components",href:y.components},{name:"Alert"}],moreLink:["https://mui.com/components/alert"]})}),e.jsx(F,{data:s})]})}const E={title:`Alert | MUI - ${D.site.name}`};function $(){return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsxs("title",{children:[" ",E.title]})}),e.jsx(S,{})]})}export{$ as default};
