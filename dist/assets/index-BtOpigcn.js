import{b as p,j as t,B as a,p as h,bR as l,H as x,C as u}from"./index-Dvl3VeO0.js";import{C as S}from"./custom-breadcrumbs-_FwemDTr.js";import{C as w}from"./component-hero-Dt5w5jNI.js";import{S as j}from"./component-template-CiCC2CM2.js";import"./CardHeader-FRpSyAE6.js";import"./CardContent-i5qDd4K3.js";const n={gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",md:"repeat(3, 1fr)"}};function z(){const s=p(),e=s.shadows.slice(1,s.shadows.length),m=[["z1",s.customShadows.z1],["z4",s.customShadows.z4],["z8",s.customShadows.z8],["z12",s.customShadows.z12],["z16",s.customShadows.z16],["z20",s.customShadows.z20],["z24",s.customShadows.z24],["card",s.customShadows.card],["dropdown",s.customShadows.dropdown],["dialog",s.customShadows.dialog]],i=["primary","secondary","info","success","warning","error"],d=[{name:"System",component:t.jsx(a,{...n,children:e.map((o,c)=>t.jsx(r,{title:`z${c+1}`,sx:{boxShadow:o}},o))})},{name:"Customs",component:t.jsx(a,{...n,children:m.map(o=>t.jsx(r,{title:o[0],sx:{boxShadow:o[1]}},o[0]))})},{name:"Colors",component:t.jsx(a,{...n,children:i.map(o=>t.jsx(r,{title:o,sx:{color:s.vars.palette[o].contrastText,bgcolor:s.vars.palette[o].main,boxShadow:s.customShadows[o]}},o))})}];return t.jsxs(t.Fragment,{children:[t.jsx(w,{children:t.jsx(S,{heading:"Shadows",links:[{name:"Components",href:h.components},{name:"Shadows"}]})}),t.jsx(j,{data:d})]})}function r({sx:s,title:e}){return t.jsx(l,{sx:{p:3,minHeight:120,display:"flex",alignItems:"center",typography:"subtitle2",justifyContent:"center",textTransform:"capitalize",...s},children:e})}const f={title:`Shadows | Foundations - ${u.site.name}`};function F(){return t.jsxs(t.Fragment,{children:[t.jsx(x,{children:t.jsxs("title",{children:[" ",f.title]})}),t.jsx(z,{})]})}export{F as default};
