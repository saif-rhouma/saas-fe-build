import{j as s,f as l,T as o,du as d,S as r,B as a,e as c,aw as i,v as x,aE as m,w as u,as as p,H as h,C as j}from"./index-s58VYgz3.js";import{a as y}from"./use-countdown-CZGuG-T9.js";import{T as g}from"./TextField-BCLnu4FQ.js";import{I as f}from"./InputAdornment-Dr3MFrJT.js";import"./FormControl-Dr-gs9Q7.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BFqGQahW.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-ChuWYFNt.js";import"./Select-D5Vq4S1w.js";import"./Menu-Dwqwx6Um.js";import"./InputBase-DFq9tOKn.js";import"./FormHelperText-BMgUhmlR.js";function v(){const e=y(new Date("08/08/2025 21:30"));return s.jsxs(l,{children:[s.jsx(o,{variant:"h3",sx:{mb:2},children:"Coming soon!"}),s.jsx(o,{sx:{color:"text.secondary"},children:"We are currently working hard on this page!"}),s.jsx(d,{sx:{my:{xs:5,sm:10}}}),s.jsxs(r,{direction:"row",justifyContent:"center",divider:s.jsx(a,{sx:{mx:{xs:1,sm:2.5}},children:":"}),sx:{typography:"h2"},children:[s.jsx(t,{label:"days",value:e.days}),s.jsx(t,{label:"hours",value:e.hours}),s.jsx(t,{label:"minutes",value:e.minutes}),s.jsx(t,{label:"seconds",value:e.seconds})]}),s.jsx(g,{fullWidth:!0,placeholder:"Enter your email",InputProps:{endAdornment:s.jsx(f,{position:"end",children:s.jsx(c,{variant:"contained",size:"large",children:"Notify me"})}),sx:{pr:.5,[`&.${i.focused}`]:{boxShadow:n=>n.customShadows.z20,transition:n=>n.transitions.create(["box-shadow"],{duration:n.transitions.duration.shorter}),[`& .${i.notchedOutline}`]:{border:n=>`solid 1px ${x(n.vars.palette.grey["500Channel"],.32)}`}}}},sx:{my:5}}),s.jsx(r,{spacing:1,alignItems:"center",justifyContent:"center",direction:"row",children:m.map(n=>s.jsx(u,{children:s.jsx(p,{icon:n.name})},n.name))})]})}function t({label:e,value:n}){return s.jsxs("div",{children:[s.jsxs("div",{children:[" ",n," "]}),s.jsx(a,{sx:{color:"text.secondary",typography:"body1"},children:e})]})}const w={title:`Coming soon - ${j.site.name}`};function H(){return s.jsxs(s.Fragment,{children:[s.jsx(h,{children:s.jsxs("title",{children:[" ",w.title]})}),s.jsx(v,{})]})}export{H as default};
