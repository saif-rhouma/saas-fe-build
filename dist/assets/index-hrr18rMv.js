import{j as n,p as s,dA as e,I as i,T as l,B as r,H as d,C as c}from"./index-C-IhHuTJ.js";import{C as m}from"./custom-breadcrumbs-uFAKtVA_.js";import{C as h}from"./component-hero-DfxmCnyF.js";import{a}from"./component-block-D7YlnC1f.js";import{S as x}from"./component-template-B4MJwQK4.js";import"./CardHeader-CR7Gf6oG.js";import"./CardContent-zbqFMSx8.js";const g=["default","primary","secondary","info","success","warning","error"],p=["alway","online","busy","offline"];function j(){const t=[{name:"Basic",component:n.jsx(a,{sx:{gap:4},children:g.map(o=>n.jsx(e,{badgeContent:4,color:o,children:n.jsx(i,{icon:"fluent:mail-24-filled",width:24})},o))})},{name:"Maximum value",component:n.jsxs(a,{sx:{gap:4},children:[n.jsx(e,{badgeContent:99,color:"error",children:n.jsx(i,{icon:"fluent:mail-24-filled",width:24})}),n.jsx(e,{badgeContent:100,color:"error",children:n.jsx(i,{icon:"fluent:mail-24-filled",width:24})}),n.jsx(e,{badgeContent:1e3,max:999,color:"error",children:n.jsx(i,{icon:"fluent:mail-24-filled",width:24})})]})},{name:"Dot badge",component:n.jsxs(a,{sx:{gap:4},children:[n.jsx(e,{color:"info",variant:"dot",children:n.jsx(i,{icon:"fluent:mail-24-filled",width:24})}),n.jsx(e,{color:"info",variant:"dot",children:n.jsx(l,{children:"Typography"})})]})},{name:"Badge overlap",component:n.jsxs(a,{sx:{gap:4},children:[n.jsx(e,{color:"info",badgeContent:" ",children:n.jsx(r,{sx:{width:40,height:40,bgcolor:"warning.main"}})}),n.jsx(e,{color:"info",badgeContent:" ",variant:"dot",children:n.jsx(r,{sx:{width:40,height:40,bgcolor:"warning.main"}})}),n.jsx(e,{color:"info",overlap:"circular",badgeContent:" ",children:n.jsx(r,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"warning.main"}})}),n.jsx(e,{color:"info",overlap:"circular",badgeContent:" ",variant:"dot",children:n.jsx(r,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"warning.main"}})})]})},{name:"Status",component:n.jsx(a,{sx:{gap:4},children:p.map(o=>n.jsx(e,{variant:o,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:n.jsx(r,{sx:{width:40,height:40,borderRadius:"50%",bgcolor:"grey.400"}})},o))})}];return n.jsxs(n.Fragment,{children:[n.jsx(h,{children:n.jsx(m,{heading:"Badge",links:[{name:"Components",href:s.components},{name:"Badge"}],moreLink:["https://mui.com/components/badges"]})}),n.jsx(x,{data:t})]})}const f={title:`Badge | MUI - ${c.site.name}`};function T(){return n.jsxs(n.Fragment,{children:[n.jsx(d,{children:n.jsxs("title",{children:[" ",f.title]})}),n.jsx(j,{})]})}export{T as default};
