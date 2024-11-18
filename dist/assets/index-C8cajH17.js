import{b as j,j as a,s as b,cz as h,e1 as g,bR as x,r as v,p,I as d,H as C,C as f}from"./index-CIoKvMHn.js";import{u as t}from"./use-tabs-mqglGBHF.js";import{T as c,t as u,a as o}from"./Tabs-BSI1eYJz.js";import{C as T}from"./custom-breadcrumbs-BThLSMc0.js";import{C as I}from"./component-hero-BFqKvMY5.js";import{a as s}from"./component-block-Boqz2sjj.js";import{S as w}from"./component-template-CC7hdGNB.js";import"./KeyboardArrowRight-Bw9uoUSF.js";import"./CardHeader-Boa3RkNu.js";import"./CardContent-Bux2j3BG.js";function y({children:l,slotProps:n,sx:r,...m}){const e=j();return a.jsx(c,{sx:{gap:{sm:0},minHeight:38,flexShrink:0,alignItems:"center",bgcolor:"background.neutral",[`& .${u.scroller}`]:{p:1,...n==null?void 0:n.scroller},[`& .${u.flexContainer}`]:{gap:0,...n==null?void 0:n.flexContainer},[`& .${u.scrollButtons}`]:{borderRadius:1,minHeight:"inherit",...n==null?void 0:n.scrollButtons},[`& .${u.indicator}`]:{py:1,height:1,bgcolor:"transparent","& > span":{width:1,height:1,borderRadius:1,display:"block",bgcolor:"common.white",boxShadow:e.customShadows.z1,[b.dark]:{bgcolor:"grey.900"},...n==null?void 0:n.indicator}},[`& .${h.root}`]:{py:1,px:2,zIndex:1,minHeight:"auto",...n==null?void 0:n.tab,[`&.${h.selected}`]:{...n==null?void 0:n.selected}},...r},...m,TabIndicatorProps:{children:a.jsx(g,{children:a.jsx("span",{})})},children:l})}const i=[{value:"one",icon:a.jsx(d,{icon:"solar:phone-bold",width:24}),label:"Item one"},{value:"two",icon:a.jsx(d,{icon:"solar:heart-bold",width:24}),label:"Item two"},{value:"three",icon:a.jsx(d,{icon:"eva:headphones-fill",width:24}),label:"Item three",disabled:!0},{value:"four",icon:a.jsx(d,{icon:"eva:headphones-fill",width:24}),label:"Item four"},{value:"five",icon:a.jsx(d,{icon:"eva:headphones-fill",width:24}),label:"Item five",disabled:!0},{value:"six",icon:a.jsx(d,{icon:"eva:headphones-fill",width:24}),label:"Item six"},{value:"seven",icon:a.jsx(d,{icon:"eva:headphones-fill",width:24}),label:"Item seven"}];function S(){const l=t("one"),n=t("one"),r=t("one"),m=[{name:"Text",component:a.jsxs(s,{sx:{flexDirection:"column",alignItems:"unset"},children:[a.jsx(c,{value:l.value,onChange:l.onChange,children:i.slice(0,3).map(e=>a.jsx(o,{value:e.value,label:e.label},e.value))}),a.jsx(x,{variant:"outlined",sx:{p:2.5,typography:"body2",borderRadius:1.5},children:i.slice(0,3).map(e=>e.value===l.value?a.jsx(v.Fragment,{children:e.label},e.value):null)})]})},{name:"Icon",component:a.jsx(s,{children:a.jsx(c,{value:l.value,onChange:l.onChange,children:i.slice(0,3).map(e=>a.jsx(o,{icon:e.icon,value:e.value},e.value))})})},{name:"Top",component:a.jsx(s,{children:a.jsx(c,{value:l.value,onChange:l.onChange,children:i.slice(0,3).map(e=>a.jsx(o,{iconPosition:"top",icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value))})})},{name:"Bottom",component:a.jsx(s,{children:a.jsx(c,{value:l.value,onChange:l.onChange,children:i.slice(0,3).map(e=>a.jsx(o,{iconPosition:"bottom",icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value))})})},{name:"Start",component:a.jsx(s,{children:a.jsx(c,{value:l.value,onChange:l.onChange,children:i.slice(0,3).map(e=>a.jsx(o,{icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value))})})},{name:"End",component:a.jsx(s,{children:a.jsx(c,{value:l.value,onChange:l.onChange,children:i.slice(0,3).map(e=>a.jsx(o,{iconPosition:"end",icon:e.icon,label:e.label,value:e.value,disabled:e.disabled},e.value))})})},{name:"Scrollable",component:a.jsx(s,{children:a.jsx(c,{value:r.value,onChange:r.onChange,sx:{maxWidth:320},children:i.map(e=>a.jsx(o,{label:e.label,value:e.value},e.value))})})},{name:"Custom",component:a.jsxs(s,{sx:{flexDirection:"column",alignItems:"unset"},children:[a.jsx(y,{value:n.value,onChange:n.onChange,variant:"scrollable",sx:{mx:"auto",maxWidth:320,borderRadius:1},children:i.map(e=>a.jsx(o,{value:e.value,label:e.label},e.value))}),a.jsx(x,{variant:"outlined",sx:{p:2.5,typography:"body2",borderRadius:1.5},children:i.map(e=>e.value===l.value?a.jsx(v.Fragment,{children:e.label},e.value):null)})]})}];return a.jsxs(a.Fragment,{children:[a.jsx(I,{children:a.jsx(T,{heading:"Tabs",links:[{name:"Components",href:p.components},{name:"Tabs"}],moreLink:["https://mui.com/components/tabs"]})}),a.jsx(w,{data:m})]})}const k={title:`Tabs | MUI - ${f.site.name}`};function O(){return a.jsxs(a.Fragment,{children:[a.jsx(C,{children:a.jsxs("title",{children:[" ",k.title]})}),a.jsx(S,{})]})}export{O as default};
