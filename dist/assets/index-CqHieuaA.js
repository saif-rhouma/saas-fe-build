import{i as C,r as a,j as e,ba as w,T as r,S as p,I as D,p as S,H as k,C as A}from"./index-CBaC8EHo.js";import{a as m}from"./format-number-A0Tn_Vtg.js";import{C as y}from"./custom-breadcrumbs-BxTr72-Z.js";import{b as c,U as T,a as d}from"./upload-avatar-BtOhWlWr.js";import{C as R}from"./component-hero-JzUEVFlq.js";import{S as I}from"./component-template-BEKVHC_8.js";import{F as O}from"./FormControlLabel-BT8sHrze.js";import"./FormHelperText-CjukhEhX.js";import"./formControlState-Dq1zat_P.js";import"./index-CTki8kAv.js";import"./image-JHlULIdd.js";import"./CardHeader-Bc65vHFq.js";import"./CardContent-Ccv4_1XH.js";function z(){const n=C(),[t,s]=a.useState([]),[x,i]=a.useState(null),[u,h]=a.useState(null),f=a.useCallback(o=>{const l=o[0];i(l)},[]),j=a.useCallback(o=>{const l=o[0];h(l)},[]),g=a.useCallback(o=>{s([...t,...o])},[t]),v=o=>{const l=t.filter(F=>F!==o);s(l)},b=()=>{s([])},U=[{name:"Upload multi file",component:e.jsxs(e.Fragment,{children:[e.jsx(O,{control:e.jsx(w,{checked:n.value,onClick:n.onToggle}),label:"Show Thumbnail",sx:{mb:3,width:1,justifyContent:"flex-end"}}),e.jsx(c,{multiple:!0,thumbnail:n.value,value:t,onDrop:g,onRemove:v,onRemoveAll:b,onUpload:()=>console.info("ON UPLOAD")})]})},{name:"Upload single file",component:e.jsx(c,{value:x,onDrop:f,onDelete:()=>i(null)})},{name:"Upload avatar",component:e.jsx(T,{value:u,onDrop:j,validator:o=>o.size>1e6?{code:"file-too-large",message:`File is larger than ${m(1e6)}`}:null,helperText:e.jsxs(r,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",m(3145728)]})})},{name:"Upload box",component:e.jsxs(p,{direction:"row",spacing:2,children:[e.jsx(d,{}),e.jsx(d,{placeholder:e.jsxs(p,{spacing:.5,alignItems:"center",children:[e.jsx(D,{icon:"eva:cloud-upload-fill",width:40}),e.jsx(r,{variant:"body2",children:"Upload file"})]}),sx:{mb:3,py:2.5,flexGrow:1,height:"auto"}})]})}];return e.jsxs(e.Fragment,{children:[e.jsx(R,{children:e.jsx(y,{heading:"Upload",links:[{name:"Components",href:S.components},{name:"Upload"}],moreLink:["https://react-dropzone.js.org/#section-basic-example"]})}),e.jsx(I,{data:U})]})}const B={title:`Upload | Components - ${A.site.name}`};function W(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsxs("title",{children:[" ",B.title]})}),e.jsx(z,{})]})}export{W as default};
