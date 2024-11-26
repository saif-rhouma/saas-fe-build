import{j as e,p as m,aV as r,H as i,C as l}from"./index-CsblB989.js";import{C as c}from"./custom-breadcrumbs-DQYYRO8w.js";import{C as d}from"./component-hero-BcDGT9Ep.js";import{a as o}from"./component-block-B9RvfrIK.js";import{S as x}from"./component-template-D3TFVqWA.js";import{F as a}from"./FormGroup-DPnbPOcj.js";import{F as t}from"./FormControlLabel-SPUXYPf-.js";import{F as j}from"./FormControl-N3NVqOJu.js";import"./CardHeader-DWMIk5xH.js";import"./CardContent-DLjcbKsj.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";const p=["default","primary","secondary","info","success","warning","error"],h=["top","start","bottom","end"];function u(){const n=[{name:"Basic",component:e.jsxs(o,{children:[e.jsx(r,{name:"basic-1",defaultChecked:!0}),e.jsx(r,{name:"basic-2"}),e.jsx(r,{name:"basic-3",disabled:!0}),e.jsx(r,{name:"basic-4",disabled:!0,checked:!0}),e.jsx(r,{name:"basic-5",defaultChecked:!0,color:"default"})]})},{name:"Sizes",component:e.jsx(o,{children:e.jsxs(a,{row:!0,children:[e.jsx(t,{control:e.jsx(r,{name:"small",size:"small"}),label:"Small"}),e.jsx(t,{control:e.jsx(r,{name:"normal"}),label:"Normal"})]})})},{name:"Placement",component:e.jsx(o,{children:e.jsx(a,{row:!0,children:h.map(s=>e.jsx(t,{value:s,label:s,labelPlacement:s,control:e.jsx(r,{name:s}),sx:{textTransform:"capitalize"}},s))})})},{name:"Colors",component:e.jsx(o,{children:e.jsx(j,{component:"fieldset",children:e.jsxs(a,{children:[p.map(s=>e.jsx(t,{control:e.jsx(r,{defaultChecked:!0,name:s,color:s}),label:s,sx:{textTransform:"capitalize"}},s)),e.jsx(t,{disabled:!0,control:e.jsx(r,{name:"error-disabled",color:"error"}),label:"Disabled"})]})})})}];return e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx(c,{heading:"Switch",links:[{name:"Components",href:m.components},{name:"Switch"}],moreLink:["https://mui.com/components/switches"]})}),e.jsx(x,{data:n})]})}const f={title:`Switch | MUI - ${l.site.name}`};function P(){return e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsxs("title",{children:[" ",f.title]})}),e.jsx(u,{})]})}export{P as default};