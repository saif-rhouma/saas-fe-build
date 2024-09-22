import{b as x,j as a,A as n,_ as e,dw as i,I as c,bo as j,dA as l,p as u,H as g,C as f}from"./index-DLwkls4m.js";import{C as v}from"./custom-breadcrumbs-RrbSlijf.js";import{C as A}from"./component-hero-BL9eOJUB.js";import{a as o}from"./component-block-CcbkXlDA.js";import{S as b}from"./component-template-CXZdldum.js";import{A as h}from"./AvatarGroup-rahM2Rnw.js";import"./CardHeader-DcTomhNA.js";import"./CardContent-Cczj0blS.js";const s=["default","primary","secondary","info","success","warning","error"],C=[24,32,40,56],w=["circular","rounded","square"],N=["online","alway","busy","offline"];function I(){const p=x(),d=[{name:"Image",component:a.jsx(o,{children:[1,2,3,4,5].map((t,r)=>a.jsx(n,{alt:e.fullName(r+1),src:e.image.avatar(r+1)},r))})},{name:"Letter",component:a.jsx(o,{children:s.map((t,r)=>a.jsx(i,{title:t,children:a.jsx(n,{alt:e.fullName(r+3),children:e.fullName(r+3).charAt(0).toUpperCase()})},t))})},{name:"Icon",component:a.jsx(o,{children:s.map(t=>a.jsx(n,{color:t,children:a.jsx(c,{icon:"eva:folder-add-outline",width:24})},t))})},{name:"Variant",component:a.jsx(o,{children:w.map(t=>a.jsx(n,{variant:t,sx:{bgcolor:"primary.main",color:"primary.contrastText"},children:a.jsx(c,{icon:"eva:folder-add-outline",width:24})},t))})},{name:"Grouped",component:a.jsxs(o,{flexDirection:"column",alignItems:"center",children:[C.map(t=>a.jsx(i,{title:t,children:a.jsx(h,{sx:{[`& .${j.avatar}`]:{width:t,height:t}},children:s.map((r,m)=>a.jsx(n,{alt:e.fullAddress(m+1),src:e.image.avatar(m+1)},r))},t)},t)),a.jsx(i,{title:"compact",children:a.jsx(l,{variant:"online",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:a.jsx(h,{variant:"compact",sx:{width:48,height:48},children:s.slice(0,2).map((t,r)=>a.jsx(n,{alt:e.fullName(r+1),src:e.image.avatar(r+1)},t))})})})]})},{name:"With badge",component:a.jsxs(o,{children:[a.jsx(l,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:a.jsx(n,{alt:e.fullName(7),src:e.image.avatar(7),sx:{p:0,width:24,height:24,border:`solid 2px ${p.vars.palette.background.paper}`}}),children:a.jsx(n,{alt:e.fullName(8),src:e.image.avatar(8)})}),N.map((t,r)=>a.jsx(l,{variant:t,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:a.jsx(n,{alt:e.fullName(r+1),src:e.image.avatar(r+1)})},t))]})},{name:"Sizes",component:a.jsx(o,{children:[24,32,48,56,64,80,128].map((t,r)=>a.jsx(n,{alt:e.fullName(r+4),src:e.image.avatar(r+4),sx:{width:t,height:t}},t))})}];return a.jsxs(a.Fragment,{children:[a.jsx(A,{children:a.jsx(v,{heading:"Avatar",links:[{name:"Components",href:u.components},{name:"Avatar"}],moreLink:["https://mui.com/components/avatars"]})}),a.jsx(b,{data:d})]})}const S={title:`Avatar | MUI - ${f.site.name}`};function F(){return a.jsxs(a.Fragment,{children:[a.jsx(g,{children:a.jsxs("title",{children:[" ",S.title]})}),a.jsx(I,{})]})}export{F as default};
