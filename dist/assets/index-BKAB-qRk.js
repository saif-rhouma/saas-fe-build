import{j as l,i,k as o,aD as m,r as d,eX as v,p as x,I as c,H as p,C as j}from"./index-CZcV1F_p.js";import{u as r}from"./use-tabs-CtphBDiD.js";import{C as b}from"./custom-breadcrumbs-CbtQHK8e.js";import{C as g}from"./component-hero-DCE50rlX.js";import{a as s}from"./component-block-DM_cP9JR.js";import{S as C}from"./component-template-BsMhCP6A.js";import"./CardHeader-jsflSc80.js";import"./CardContent-ClmJpnKz.js";const n=[{value:"one",icon:l.jsx(c,{icon:"solar:phone-bold",width:24}),label:"Item one"},{value:"two",icon:l.jsx(c,{icon:"solar:heart-bold",width:24}),label:"Item two"},{value:"three",icon:l.jsx(c,{icon:"eva:headphones-fill",width:24}),label:"Item three",disabled:!0},{value:"four",icon:l.jsx(c,{icon:"eva:headphones-fill",width:24}),label:"Item four"},{value:"five",icon:l.jsx(c,{icon:"eva:headphones-fill",width:24}),label:"Item five",disabled:!0},{value:"six",icon:l.jsx(c,{icon:"eva:headphones-fill",width:24}),label:"Item six"},{value:"seven",icon:l.jsx(c,{icon:"eva:headphones-fill",width:24}),label:"Item seven"}];function f(){const a=r("one"),u=r("one"),t=r("one"),h=[{name:"Text",component:l.jsxs(s,{sx:{flexDirection:"column",alignItems:"unset"},children:[l.jsx(i,{value:a.value,onChange:a.onChange,children:n.slice(0,3).map(e=>l.jsx(o,{value:e.value,label:e.label},e.value))}),l.jsx(m,{variant:"outlined",sx:{p:2.5,typography:"body2",borderRadius:1.5},children:n.slice(0,3).map(e=>e.value===a.value?l.jsx(d.Fragment,{children:e.label},e.value):null)})]})},{name:"Icon",component:l.jsx(s,{children:l.jsx(i,{value:a.value,onChange:a.onChange,children:n.slice(0,3).map(e=>l.jsx(o,{icon:e.icon,value:e.value},e.value))})})},{name:"Top",component:l.jsx(s,{children:l.jsx(i,{value:a.value,onChange:a.onChange,children:n.slice(0,3).map(e=>l.jsx(o,{iconPosition:"top",icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value))})})},{name:"Bottom",component:l.jsx(s,{children:l.jsx(i,{value:a.value,onChange:a.onChange,children:n.slice(0,3).map(e=>l.jsx(o,{iconPosition:"bottom",icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value))})})},{name:"Start",component:l.jsx(s,{children:l.jsx(i,{value:a.value,onChange:a.onChange,children:n.slice(0,3).map(e=>l.jsx(o,{icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value))})})},{name:"End",component:l.jsx(s,{children:l.jsx(i,{value:a.value,onChange:a.onChange,children:n.slice(0,3).map(e=>l.jsx(o,{iconPosition:"end",icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value))})})},{name:"Scrollable",component:l.jsx(s,{children:l.jsx(i,{value:t.value,onChange:t.onChange,sx:{maxWidth:320},children:n.map(e=>l.jsx(o,{label:e.label,value:e.value},e.value))})})},{name:"Custom",component:l.jsxs(s,{sx:{flexDirection:"column",alignItems:"unset"},children:[l.jsx(v,{value:u.value,onChange:u.onChange,variant:"scrollable",sx:{mx:"auto",maxWidth:320,borderRadius:1},children:n.map(e=>l.jsx(o,{value:e.value,label:e.label},e.value))}),l.jsx(m,{variant:"outlined",sx:{p:2.5,typography:"body2",borderRadius:1.5},children:n.map(e=>e.value===a.value?l.jsx(d.Fragment,{children:e.label},e.value):null)})]})}];return l.jsxs(l.Fragment,{children:[l.jsx(g,{children:l.jsx(b,{heading:"Tabs",links:[{name:"Components",href:x.components},{name:"Tabs"}],moreLink:["https://mui.com/components/tabs"]})}),l.jsx(C,{data:h})]})}const T={title:`Tabs | MUI - ${j.site.name}`};function D(){return l.jsxs(l.Fragment,{children:[l.jsx(p,{children:l.jsxs("title",{children:[" ",T.title]})}),l.jsx(f,{})]})}export{D as default};
