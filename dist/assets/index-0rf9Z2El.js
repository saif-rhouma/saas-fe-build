import{j as s,f as l,T as o,dx as d,S as r,B as a,e as c,ay as i,v as x,aG as m,y as u,au as p,H as h,C as j}from"./index-DLJImauo.js";import{a as y}from"./use-countdown-DghxuQN9.js";import{T as g}from"./TextField-Dn-4Yx6H.js";import{I as f}from"./InputAdornment-DKC0KPnD.js";import"./FormControl-CkwXYy0A.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CEebhHey.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CL79af0c.js";import"./Select-C24IVDgk.js";import"./Menu-u9Fg2yBB.js";import"./InputBase-DlzL5OFi.js";import"./FormHelperText-kKfXHIoW.js";function v(){const e=y(new Date("08/08/2025 21:30"));return s.jsxs(l,{children:[s.jsx(o,{variant:"h3",sx:{mb:2},children:"Coming soon!"}),s.jsx(o,{sx:{color:"text.secondary"},children:"We are currently working hard on this page!"}),s.jsx(d,{sx:{my:{xs:5,sm:10}}}),s.jsxs(r,{direction:"row",justifyContent:"center",divider:s.jsx(a,{sx:{mx:{xs:1,sm:2.5}},children:":"}),sx:{typography:"h2"},children:[s.jsx(t,{label:"days",value:e.days}),s.jsx(t,{label:"hours",value:e.hours}),s.jsx(t,{label:"minutes",value:e.minutes}),s.jsx(t,{label:"seconds",value:e.seconds})]}),s.jsx(g,{fullWidth:!0,placeholder:"Enter your email",InputProps:{endAdornment:s.jsx(f,{position:"end",children:s.jsx(c,{variant:"contained",size:"large",children:"Notify me"})}),sx:{pr:.5,[`&.${i.focused}`]:{boxShadow:n=>n.customShadows.z20,transition:n=>n.transitions.create(["box-shadow"],{duration:n.transitions.duration.shorter}),[`& .${i.notchedOutline}`]:{border:n=>`solid 1px ${x(n.vars.palette.grey["500Channel"],.32)}`}}}},sx:{my:5}}),s.jsx(r,{spacing:1,alignItems:"center",justifyContent:"center",direction:"row",children:m.map(n=>s.jsx(u,{children:s.jsx(p,{icon:n.name})},n.name))})]})}function t({label:e,value:n}){return s.jsxs("div",{children:[s.jsxs("div",{children:[" ",n," "]}),s.jsx(a,{sx:{color:"text.secondary",typography:"body1"},children:e})]})}const C={title:`Coming soon - ${j.site.name}`};function G(){return s.jsxs(s.Fragment,{children:[s.jsx(h,{children:s.jsxs("title",{children:[" ",C.title]})}),s.jsx(v,{})]})}export{G as default};