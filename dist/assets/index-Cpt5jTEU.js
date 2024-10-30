import{bk as x,bl as u,aO as p,T as f,r as j,aV as g,j as e,aS as T,aW as v,bS as C,aX as A,p as y,n,e as i,v as k,H as b,C as U}from"./index-PcvvizaM.js";import{C as D}from"./custom-breadcrumbs-CveB5zSd.js";import{C as I}from"./component-hero-Cdp5ZZpi.js";import{a as o}from"./component-block-lv1a7XGG.js";import{S as M}from"./component-template-AOA7DcI1.js";import"./CardHeader-DGEZ_Ma0.js";import"./CardContent-BYZ9hWXW.js";function S(s){return u("MuiAlertTitle",s)}x("MuiAlertTitle",["root"]);const w=["className"],z=C(),F=s=>{const{classes:t}=s;return A({root:["root"]},S,t)},O=p(f,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(s,t)=>t.root})(({theme:s})=>({fontWeight:s.typography.fontWeightMedium,marginTop:-2})),R=j.forwardRef(function(t,l){const a=z({props:t,name:"MuiAlertTitle"}),{className:m}=a,d=g(a,w),c=a,h=F(c);return e.jsx(O,T({gutterBottom:!0,component:"div",ownerState:c,ref:l,className:v(h.root,m)},d))}),r=["info","success","warning","error"];function B(){const s=[{name:"Standard",component:e.jsx(o,{sx:{flexDirection:"column",alignItems:"unset"},children:r.map(t=>e.jsxs(n,{severity:t,onClose:()=>{},children:["This is an ",t," alert — check it out!"]},t))})},{name:"Filled",component:e.jsx(o,{sx:{flexDirection:"column",alignItems:"unset"},children:r.map(t=>e.jsxs(n,{severity:t,variant:"filled",onClose:()=>{},children:["This is an ",t," alert — check it out!"]},t))})},{name:"Outlined",component:e.jsx(o,{sx:{flexDirection:"column",alignItems:"unset"},children:r.map(t=>e.jsxs(n,{severity:t,variant:"outlined",onClose:()=>{},children:["This is an ",t," alert — check it out!"]},t))})},{name:"Description",component:e.jsx(o,{sx:{flexDirection:"column",alignItems:"unset"},children:r.map(t=>e.jsxs(n,{severity:t,onClose:()=>{},children:[e.jsxs(R,{sx:{textTransform:"capitalize"},children:[" ",t," "]}),"This is an ",t," alert — ",e.jsx("strong",{children:"check it out!"})]},t))})},{name:"Actions",component:e.jsxs(o,{sx:{flexDirection:"column",alignItems:"unset"},children:[e.jsx(n,{severity:"info",action:e.jsx(i,{color:"info",size:"small",variant:"soft",children:"Action"}),children:"This is an info alert — check it out!"}),e.jsx(n,{severity:"info",variant:"filled",action:e.jsxs(e.Fragment,{children:[e.jsx(i,{color:"inherit",size:"small",variant:"outlined",sx:{mr:1,border:t=>`1px solid ${k(t.vars.palette.common.whiteChannel,.48)}`},children:"Undo"}),e.jsx(i,{size:"small",color:"info",variant:"contained",sx:{bgcolor:"info.dark"},children:"Action"})]}),children:"This is an info alert — check it out!"}),e.jsx(n,{severity:"info",variant:"outlined",action:e.jsxs(e.Fragment,{children:[e.jsx(i,{color:"info",size:"small",variant:"outlined",sx:{mr:1},children:"Undo"}),e.jsx(i,{color:"info",size:"small",variant:"contained",sx:{bgcolor:"info.dark"},children:"Action"})]}),children:"This is an info alert — check it out!"})]})}];return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(D,{heading:"Alert",links:[{name:"Components",href:y.components},{name:"Alert"}],moreLink:["https://mui.com/components/alert"]})}),e.jsx(M,{data:s})]})}const N={title:`Alert | MUI - ${U.site.name}`};function $(){return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsxs("title",{children:[" ",N.title]})}),e.jsx(B,{})]})}export{$ as default};
