import{r as u,j as e,p as c,H as x,C as p}from"./index-1idvz3yo.js";import{C as j}from"./custom-breadcrumbs-Cd5BgAXC.js";import{C as h}from"./component-hero-DhLQeUiV.js";import{a}from"./component-block-DTS9fSNC.js";import{S as f}from"./component-template-DAhfiWZX.js";import{F as r}from"./FormControl-e9sHLsS9.js";import{R as n,a as t}from"./RadioGroup-B8Dgslmt.js";import{F as s}from"./FormControlLabel-BSF48Dfl.js";import"./CardHeader-caml2yvu.js";import"./CardContent-BupjhsWx.js";import"./utils-DoM3o7-Q.js";import"./FormGroup-D7-JGyTF.js";import"./formControlState-Dq1zat_P.js";const C=["default","primary","secondary","info","success","warning","error"],b=["top","start","bottom","end"];function g(){const[i,l]=u.useState("a1"),m=o=>{l(o.target.value)},d=[{name:"Basic",component:e.jsx(a,{children:e.jsx(r,{component:"fieldset",children:e.jsxs(n,{row:!0,defaultValue:"nn",children:[e.jsx(t,{size:"medium",value:"nn"}),e.jsx(t,{size:"medium",value:"gg"}),e.jsx(t,{size:"medium",disabled:!0,value:"hh"})]})})})},{name:"Sizes",component:e.jsx(a,{children:e.jsxs(n,{row:!0,defaultValue:"g",children:[e.jsx(s,{value:"g",control:e.jsx(t,{size:"medium"}),label:"Normal"}),e.jsx(s,{value:"p",control:e.jsx(t,{size:"small"}),label:"Small"})]})})},{name:"Placement",component:e.jsx(a,{children:e.jsx(r,{component:"fieldset",children:e.jsx(n,{row:!0,defaultValue:"top",children:b.map(o=>e.jsx(s,{value:o,label:o,labelPlacement:o,control:e.jsx(t,{size:"medium"}),sx:{textTransform:"capitalize"}},o))})})})},{name:"Colors",component:e.jsx(a,{children:e.jsx(r,{component:"fieldset",children:e.jsxs(n,{value:i,onChange:m,children:[C.map(o=>e.jsx(s,{value:o,control:e.jsx(t,{size:"medium",color:o}),label:o,sx:{textTransform:"capitalize"}},o)),e.jsx(s,{disabled:!0,value:"a8",control:e.jsx(t,{size:"medium",color:"error"}),label:"Disabled"})]})})})}];return e.jsxs(e.Fragment,{children:[e.jsx(h,{children:e.jsx(j,{heading:"Radio Buttons",links:[{name:"Components",href:c.components},{name:"Radio Buttons"}],moreLink:["https://mui.com/components/radio-buttons"]})}),e.jsx(f,{data:d})]})}const z={title:`Radio button | MUI - ${p.site.name}`};function H(){return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsxs("title",{children:[" ",z.title]})}),e.jsx(g,{})]})}export{H as default};