import{r as j,j as e,I as n,p,H as C,C as f}from"./index-D6VGg1bq.js";import{C as b}from"./custom-breadcrumbs-C78AEP0d.js";import{C as k}from"./component-hero-gEbui6mZ.js";import{a as i}from"./component-block-CBnC1rOz.js";import{S as z}from"./component-template-BB2h0-tq.js";import{C as t}from"./Checkbox-De1TWZfp.js";import{F as o}from"./FormControlLabel-BbRBNDv1.js";import{F as c}from"./FormControl-DODm1Txf.js";import{F as l}from"./FormGroup-CpuGROki.js";import"./CardHeader-hK_r7mPZ.js";import"./CardContent-DrUG6S6f.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";const m=["default","primary","secondary","info","success","warning","error"],g=["top","start","bottom","end"];function F(){const[r,a]=j.useState([!0,!1]),d=s=>{a([s.target.checked,s.target.checked])},x=s=>{a([s.target.checked,r[1]])},u=s=>{a([r[0],s.target.checked])},h=[{name:"Basic",component:e.jsxs(i,{children:[e.jsx(t,{size:"medium"}),e.jsx(t,{size:"medium",defaultChecked:!0}),e.jsx(t,{size:"medium",defaultChecked:!0,indeterminate:!0}),e.jsx(t,{size:"medium",disabled:!0}),e.jsx(t,{size:"medium",disabled:!0,defaultChecked:!0}),e.jsx(t,{size:"medium",disabled:!0,indeterminate:!0})]})},{name:"Size & custom icon",component:e.jsxs(i,{children:[e.jsx(o,{label:"Normal",control:e.jsx(t,{size:"medium",defaultChecked:!0})}),e.jsx(o,{label:"Small",control:e.jsx(t,{size:"small",defaultChecked:!0})}),e.jsx(o,{control:e.jsx(t,{color:"info",size:"small",icon:e.jsx(n,{icon:"solar:heart-bold"}),checkedIcon:e.jsx(n,{icon:"solar:heart-bold"}),inputProps:{id:"favorite-checkbox"}}),label:"Custom icon"}),e.jsx(o,{control:e.jsx(t,{color:"error",size:"small",icon:e.jsx(n,{icon:"eva:award-fill"}),checkedIcon:e.jsx(n,{icon:"eva:award-fill"}),inputProps:{id:"award-checkbox"}}),label:"Custom icon"})]})},{name:"Placement",component:e.jsx(i,{children:e.jsx(c,{component:"fieldset",children:e.jsx(l,{"aria-label":"position",row:!0,children:g.map(s=>e.jsx(o,{value:s,label:s,labelPlacement:s,control:e.jsx(t,{size:"medium"}),sx:{textTransform:"capitalize"}},s))})})})},{name:"Colors",component:e.jsxs(i,{children:[e.jsxs(l,{children:[m.map(s=>e.jsx(o,{control:e.jsx(t,{size:"medium",defaultChecked:!0,color:s}),label:s,sx:{textTransform:"capitalize"}},s)),e.jsx(o,{disabled:!0,control:e.jsx(t,{size:"medium",defaultChecked:!0,color:"error"}),label:"Disabled"})]}),e.jsx(c,{component:"fieldset",children:e.jsxs(l,{children:[m.map(s=>e.jsx(o,{control:e.jsx(t,{size:"medium",defaultChecked:!0,indeterminate:!0,color:s}),label:s,sx:{textTransform:"capitalize"}},s)),e.jsx(o,{disabled:!0,control:e.jsx(t,{size:"medium",defaultChecked:!0,indeterminate:!0,color:"error"}),label:"Disabled"})]})})]})},{name:"Indeterminate",component:e.jsx(i,{children:e.jsxs("div",{children:[e.jsx(o,{label:"Parent",control:e.jsx(t,{size:"medium",checked:r[0]&&r[1],indeterminate:r[0]!==r[1],onChange:d})}),e.jsxs("div",{children:[e.jsx(o,{label:"Child 1",control:e.jsx(t,{size:"medium",checked:r[0],onChange:x})}),e.jsx(o,{label:"Child 2",control:e.jsx(t,{size:"medium",checked:r[1],onChange:u})})]})]})})}];return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx(b,{heading:"Checkboxes",links:[{name:"Components",href:p.components},{name:"Checkboxes"}],moreLink:["https://mui.com/components/checkboxes"]})}),e.jsx(z,{data:h})]})}const w={title:`Checkbox | MUI - ${f.site.name}`};function N(){return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsxs("title",{children:[" ",w.title]})}),e.jsx(F,{})]})}export{N as default};
