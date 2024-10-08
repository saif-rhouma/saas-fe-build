import{bt as x,bu as u,aQ as p,T as f,r as j,aX as g,j as e,aU as T,aY as v,cf as C,aZ as A,p as y,x as n,e as i,v as k,H as U,C as b}from"./index-yGbCRgTb.js";import{C as D}from"./custom-breadcrumbs-BVoeLH7h.js";import{C as I}from"./component-hero-CN-GsTfI.js";import{a as o}from"./component-block-tz7T7j82.js";import{S as M}from"./component-template-BUt_MHbG.js";import"./CardHeader-DDfI07wT.js";import"./CardContent-DxoMu2KI.js";function w(s){return u("MuiAlertTitle",s)}x("MuiAlertTitle",["root"]);const z=["className"],F=C(),R=s=>{const{classes:t}=s;return A({root:["root"]},w,t)},O=p(f,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(s,t)=>t.root})(({theme:s})=>({fontWeight:s.typography.fontWeightMedium,marginTop:-2})),S=j.forwardRef(function(t,l){const a=F({props:t,name:"MuiAlertTitle"}),{className:m}=a,d=g(a,z),c=a,h=R(c);return e.jsx(O,T({gutterBottom:!0,component:"div",ownerState:c,ref:l,className:v(h.root,m)},d))}),r=["info","success","warning","error"];function B(){const s=[{name:"Standard",component:e.jsx(o,{sx:{flexDirection:"column",alignItems:"unset"},children:r.map(t=>e.jsxs(n,{severity:t,onClose:()=>{},children:["This is an ",t," alert — check it out!"]},t))})},{name:"Filled",component:e.jsx(o,{sx:{flexDirection:"column",alignItems:"unset"},children:r.map(t=>e.jsxs(n,{severity:t,variant:"filled",onClose:()=>{},children:["This is an ",t," alert — check it out!"]},t))})},{name:"Outlined",component:e.jsx(o,{sx:{flexDirection:"column",alignItems:"unset"},children:r.map(t=>e.jsxs(n,{severity:t,variant:"outlined",onClose:()=>{},children:["This is an ",t," alert — check it out!"]},t))})},{name:"Description",component:e.jsx(o,{sx:{flexDirection:"column",alignItems:"unset"},children:r.map(t=>e.jsxs(n,{severity:t,onClose:()=>{},children:[e.jsxs(S,{sx:{textTransform:"capitalize"},children:[" ",t," "]}),"This is an ",t," alert — ",e.jsx("strong",{children:"check it out!"})]},t))})},{name:"Actions",component:e.jsxs(o,{sx:{flexDirection:"column",alignItems:"unset"},children:[e.jsx(n,{severity:"info",action:e.jsx(i,{color:"info",size:"small",variant:"soft",children:"Action"}),children:"This is an info alert — check it out!"}),e.jsx(n,{severity:"info",variant:"filled",action:e.jsxs(e.Fragment,{children:[e.jsx(i,{color:"inherit",size:"small",variant:"outlined",sx:{mr:1,border:t=>`1px solid ${k(t.vars.palette.common.whiteChannel,.48)}`},children:"Undo"}),e.jsx(i,{size:"small",color:"info",variant:"contained",sx:{bgcolor:"info.dark"},children:"Action"})]}),children:"This is an info alert — check it out!"}),e.jsx(n,{severity:"info",variant:"outlined",action:e.jsxs(e.Fragment,{children:[e.jsx(i,{color:"info",size:"small",variant:"outlined",sx:{mr:1},children:"Undo"}),e.jsx(i,{color:"info",size:"small",variant:"contained",sx:{bgcolor:"info.dark"},children:"Action"})]}),children:"This is an info alert — check it out!"})]})}];return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx(D,{heading:"Alert",links:[{name:"Components",href:y.components},{name:"Alert"}],moreLink:["https://mui.com/components/alert"]})}),e.jsx(M,{data:s})]})}const N={title:`Alert | MUI - ${b.site.name}`};function $(){return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsxs("title",{children:[" ",N.title]})}),e.jsx(B,{})]})}export{$ as default};
