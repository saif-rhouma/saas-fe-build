import{j as e,S as t,A as s,_ as r,I as o,p as m,H as x,C as d}from"./index-bfXnrd_B.js";import{C as j}from"./custom-breadcrumbs-DCz3ADG5.js";import{a}from"./component-block-Bo7RLSOb.js";import{C as i}from"./Chip-BzH34JAD.js";import{C as f}from"./component-hero-DriVaYlD.js";import{S as h}from"./component-template-eZYJOia1.js";import"./CardHeader-Dl7IFxoa.js";import"./CardContent-BigBPofS.js";function n({variant:l="filled"}){const c=()=>{console.info("You clicked the delete icon.")};return e.jsxs(t,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsxs(a,{title:"Colors",sx:{gap:1},children:[e.jsx(i,{variant:l,label:"Default deletable",avatar:e.jsx(s,{children:"M"}),onDelete:c}),e.jsx(i,{variant:l,clickable:!0,label:"Default clickable",avatar:e.jsx(s,{children:"M"})}),e.jsx(i,{variant:l,label:"Primary deletable",avatar:e.jsx(s,{alt:"Natacha",src:r.image.avatar(1)}),color:"primary",onDelete:c}),e.jsx(i,{variant:l,clickable:!0,label:"Primary clickable",avatar:e.jsx(s,{alt:"Natacha",src:r.image.avatar(1)}),color:"primary"}),e.jsx(i,{variant:l,icon:e.jsx(o,{width:24,icon:"eva:smiling-face-fill"}),label:"Secondary deletable",onDelete:c,color:"secondary"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(o,{width:24,icon:"eva:smiling-face-fill"}),label:"Secondary clickable",color:"secondary"}),e.jsx(i,{variant:l,icon:e.jsx(o,{width:24,icon:"eva:smiling-face-fill"}),label:"Info deletable",onDelete:c,color:"info"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(o,{width:24,icon:"eva:smiling-face-fill"}),label:"Info clickable",color:"info"}),e.jsx(i,{variant:l,icon:e.jsx(o,{width:24,icon:"eva:smiling-face-fill"}),label:"Success deletable",onDelete:c,color:"success"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(o,{width:24,icon:"eva:smiling-face-fill"}),label:"Success clickable",color:"success"}),e.jsx(i,{variant:l,icon:e.jsx(o,{width:24,icon:"eva:smiling-face-fill"}),label:"Warning deletable",onDelete:c,color:"warning"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(o,{width:24,icon:"eva:smiling-face-fill"}),label:"Warning clickable",color:"warning"}),e.jsx(i,{variant:l,icon:e.jsx(o,{width:24,icon:"eva:smiling-face-fill"}),label:"Error deletable",onDelete:c,color:"error"}),e.jsx(i,{clickable:!0,variant:l,icon:e.jsx(o,{width:24,icon:"eva:smiling-face-fill"}),label:"Error clickable",color:"error"})]}),e.jsxs(t,{spacing:5,children:[e.jsxs(a,{title:"Custom icon",sx:{gap:1},children:[e.jsx(i,{variant:l,icon:e.jsx(o,{width:24,icon:"eva:smiling-face-fill"}),label:"Custom icon",onDelete:c,deleteIcon:e.jsx(o,{width:24,icon:"eva:checkmark-fill"})}),e.jsx(i,{variant:l,avatar:e.jsx(s,{children:"M"}),label:"Custom icon",onDelete:c,deleteIcon:e.jsx(o,{width:24,icon:"eva:checkmark-fill"}),color:"info"})]}),e.jsxs(a,{title:"Disabled",sx:{gap:1},children:[e.jsx(i,{disabled:!0,variant:l,icon:e.jsx(o,{width:24,icon:"eva:smiling-face-fill"}),label:"Disabled",onDelete:c}),e.jsx(i,{disabled:!0,variant:l,avatar:e.jsx(s,{children:"M"}),label:"Disabled",onDelete:c,color:"info"})]}),e.jsxs(a,{title:"Sizes",sx:{gap:1},children:[e.jsx(i,{variant:l,icon:e.jsx(o,{width:24,icon:"eva:smiling-face-fill"}),label:"Normal",onDelete:c,color:"info"}),e.jsx(i,{variant:l,size:"small",avatar:e.jsx(s,{children:"M"}),label:"Small",onDelete:c,color:"info"})]})]})]})}function b(){const l=[{name:"Filled",component:e.jsx(n,{})},{name:"Outlined",component:e.jsx(n,{variant:"outlined"})},{name:"Soft",component:e.jsx(n,{variant:"soft"})}];return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsx(j,{heading:"Chip",links:[{name:"Components",href:m.components},{name:"Chip"}],moreLink:["https://mui.com/components/chips"]})}),e.jsx(h,{data:l})]})}const p={title:`Chip | MUI - ${d.site.name}`};function v(){return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsxs("title",{children:[" ",p.title]})}),e.jsx(b,{})]})}export{v as default};
