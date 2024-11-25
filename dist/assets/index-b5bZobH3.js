import{b as x,j as s,B as a,p as d,S as i,T as h,eq as g,dq as u,H as y,C}from"./index-CsblB989.js";import{u as j}from"./use-copy-to-clipboard-BUY5znwZ.js";import{C as f}from"./custom-breadcrumbs-DQYYRO8w.js";import{C as T}from"./component-hero-BcDGT9Ep.js";import{S as b}from"./component-template-D3TFVqWA.js";import"./CardHeader-DWMIk5xH.js";import"./CardContent-DLjcbKsj.js";const k=["primary","secondary","info","success","warning","error"],E=["lighter","light","main","dark","darker"],S=["50","100","200","300","400","500","600","700","800","900"],l={display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}};function A(){const t=x(),{copy:r}=j(),p=e=>{e&&(u.success(`Copied: ${e}`),r(e))},o=[...k.map(e=>({name:e[0].toUpperCase()+e.substring(1),component:s.jsx(a,{...l,children:E.map(n=>s.jsx(m,{variation:n,varColor:t.vars.palette[e][n],hexColor:t.palette[e][n],onCopy:()=>p(t.palette[e][n])},n))})})),{name:"Grey",component:s.jsx(a,{...l,children:S.map(e=>s.jsx(m,{variation:e,varColor:t.vars.palette.grey[e],hexColor:t.palette.grey[e],onCopy:()=>p(t.palette.grey[e])},e))})}];return s.jsxs(s.Fragment,{children:[s.jsx(T,{children:s.jsx(f,{heading:"Color",links:[{name:"Components",href:d.components},{name:"Color"}],moreLink:["https://mui.com/customization/color","https://colors.eva.design"]})}),s.jsx(b,{data:o})]})}function m({varColor:t,hexColor:r,variation:p,onCopy:c}){return s.jsxs(i,{spacing:1,onClick:c,sx:{p:2,cursor:"pointer",bgcolor:t,color:o=>o.palette.getContrastText(r),transition:o=>o.transitions.create(["opacity","background-color"],{easing:o.transitions.easing.sharp,duration:o.transitions.duration.shorter}),"&:hover":{opacity:.8}},children:[s.jsx(h,{variant:"subtitle2",sx:{textTransform:"capitalize",flexGrow:1},children:p}),s.jsxs(i,{sx:{typography:"caption"},children:[s.jsx(a,{component:"span",sx:{opacity:.64},children:"Var"}),t]}),s.jsxs(i,{sx:{typography:"caption"},children:[s.jsx(a,{component:"span",sx:{opacity:.64},children:"Hex"}),r]}),s.jsxs(i,{sx:{typography:"caption"},children:[s.jsx(a,{component:"span",sx:{opacity:.64},children:"Rgb"}),g(r).replace("rgb(","").replace(")","")]})]})}const B={title:`Colors | Foundations - ${C.site.name}`};function O(){return s.jsxs(s.Fragment,{children:[s.jsx(y,{children:s.jsxs("title",{children:[" ",B.title]})}),s.jsx(A,{})]})}export{O as default};
