import{j as t,p as j,b,c as o,bR as p,T as n,S as l,B as a,et as S,H as C,C as T}from"./index-DA_sWj7x.js";import{C as k}from"./custom-breadcrumbs-Dz51tEwQ.js";import{C as B}from"./component-hero-BWG44Qi9.js";import{S as v}from"./component-template-xKWoB_O3.js";import"./CardHeader-DQ0a36qO.js";import"./CardContent-c-6DRP2v.js";const F=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","overline","button"],z=F.map(s=>({name:s[0].toUpperCase()+s.substring(1),component:t.jsx(P,{variant:s})}));function H(){const s=[...z,{name:"Colors",component:t.jsxs(l,{spacing:3,children:[["primary","secondary","disabled"].map(e=>t.jsxs(p,{children:[t.jsxs(n,{gutterBottom:!0,variant:"subtitle2",sx:{color:`text.${e}`,textTransform:"capitalize"},children:["text ",e]}),t.jsx(n,{gutterBottom:!0,variant:"body2",sx:{color:`text.${e}`},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]},e)),["primary","secondary","info","warning","error"].map(e=>t.jsxs(p,{children:[t.jsx(n,{gutterBottom:!0,variant:"subtitle2",sx:{color:`${e}.main`,textTransform:"capitalize"},children:e}),t.jsx(n,{gutterBottom:!0,variant:"body2",sx:{color:`${e}.main`},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]},e))]})}];return t.jsxs(t.Fragment,{children:[t.jsx(B,{children:t.jsx(k,{heading:"Typography",links:[{name:"Components",href:j.components},{name:"Typography"}],moreLink:["https://mui.com/components/typography"]})}),t.jsx(v,{data:s})]})}function P({variant:s}){var u,c,m;const e=b(),h=o("up","sm"),d=o("up","md"),x=o("up","lg"),i=e.typography[s],y=(g=>Object.keys(g).some(f=>f.startsWith("@media")))(i);let{fontSize:r}=i;return y&&(h&&(r=(u=i[e.breakpoints.up("sm")])==null?void 0:u.fontSize),d&&(r=(c=i[e.breakpoints.up("md")])==null?void 0:c.fontSize),x&&(r=(m=i[e.breakpoints.up("lg")])==null?void 0:m.fontSize)),t.jsxs(p,{variant:"outlined",sx:{p:3},children:[t.jsx(n,{variant:s,children:"How can you choose a typeface?"}),t.jsxs(l,{spacing:.5,sx:{mt:2,typography:"body2",color:"text.secondary",fontFamily:'"Lucida Console", Courier, monospace'},children:[t.jsxs(a,{component:"span",children:["fontSize: ",`${S(r)}px`]}),t.jsxs(a,{component:"span",children:["lineHeight: ",Number(i.lineHeight).toFixed(2)]}),t.jsxs(a,{component:"span",children:["fontWeight: ",i.fontWeight]})]})]})}const $={title:`Typography | Foundations - ${T.site.name}`};function L(){return t.jsxs(t.Fragment,{children:[t.jsx(C,{children:t.jsxs("title",{children:[" ",$.title]})}),t.jsx(H,{})]})}export{L as default};
