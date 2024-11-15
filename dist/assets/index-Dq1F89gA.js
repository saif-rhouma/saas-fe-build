import{j as t,p as j,b,c as o,bR as p,T as i,S as l,B as a,er as S,H as C,C as T}from"./index-CFpFDdmk.js";import{C as k}from"./custom-breadcrumbs-BhZ5AQiJ.js";import{C as B}from"./component-hero-GiwyxU8t.js";import{S as v}from"./component-template-C0s8R7Wh.js";import"./CardHeader-Dye2cgZC.js";import"./CardContent-DFMcQK6A.js";const F=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","overline","button"],z=F.map(s=>({name:s[0].toUpperCase()+s.substring(1),component:t.jsx(P,{variant:s})}));function H(){const s=[...z,{name:"Colors",component:t.jsxs(l,{spacing:3,children:[["primary","secondary","disabled"].map(e=>t.jsxs(p,{children:[t.jsxs(i,{gutterBottom:!0,variant:"subtitle2",sx:{color:`text.${e}`,textTransform:"capitalize"},children:["text ",e]}),t.jsx(i,{gutterBottom:!0,variant:"body2",sx:{color:`text.${e}`},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]},e)),["primary","secondary","info","warning","error"].map(e=>t.jsxs(p,{children:[t.jsx(i,{gutterBottom:!0,variant:"subtitle2",sx:{color:`${e}.main`,textTransform:"capitalize"},children:e}),t.jsx(i,{gutterBottom:!0,variant:"body2",sx:{color:`${e}.main`},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]},e))]})}];return t.jsxs(t.Fragment,{children:[t.jsx(B,{children:t.jsx(k,{heading:"Typography",links:[{name:"Components",href:j.components},{name:"Typography"}],moreLink:["https://mui.com/components/typography"]})}),t.jsx(v,{data:s})]})}function P({variant:s}){var u,c,m;const e=b(),h=o("up","sm"),d=o("up","md"),x=o("up","lg"),r=e.typography[s],y=(g=>Object.keys(g).some(f=>f.startsWith("@media")))(r);let{fontSize:n}=r;return y&&(h&&(n=(u=r[e.breakpoints.up("sm")])==null?void 0:u.fontSize),d&&(n=(c=r[e.breakpoints.up("md")])==null?void 0:c.fontSize),x&&(n=(m=r[e.breakpoints.up("lg")])==null?void 0:m.fontSize)),t.jsxs(p,{variant:"outlined",sx:{p:3},children:[t.jsx(i,{variant:s,children:"How can you choose a typeface?"}),t.jsxs(l,{spacing:.5,sx:{mt:2,typography:"body2",color:"text.secondary",fontFamily:'"Lucida Console", Courier, monospace'},children:[t.jsxs(a,{component:"span",children:["fontSize: ",`${S(n)}px`]}),t.jsxs(a,{component:"span",children:["lineHeight: ",Number(r.lineHeight).toFixed(2)]}),t.jsxs(a,{component:"span",children:["fontWeight: ",r.fontWeight]})]})]})}const $={title:`Typography | Foundations - ${T.site.name}`};function L(){return t.jsxs(t.Fragment,{children:[t.jsx(C,{children:t.jsxs("title",{children:[" ",$.title]})}),t.jsx(H,{})]})}export{L as default};
