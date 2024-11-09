import{r as i,j as e,p as m,cY as l,aV as p,S as c,T as d,H as u,C as h}from"./index-cVC9loO2.js";import{E as x}from"./editor-DwJGbbeJ.js";import{M as f}from"./markdown-D_TrRIHF.js";import{C}from"./custom-breadcrumbs-CcAluHeA.js";import{C as g}from"./component-hero-BkPA9xZ6.js";import{C as j}from"./component-block-DY7GJg3i.js";import{F as k}from"./FormControlLabel-BYQ2iE67.js";import"./TextField-LJCfmosc.js";import"./FormControl-9caSTWx2.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CMJbfDqe.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-B5edal7e.js";import"./Select-DUYbOU_T.js";import"./Menu-BRMv56CN.js";import"./InputBase-C5V7Cyqr.js";import"./FormHelperText-CsRk0ikA.js";import"./index-B1BrQbnY.js";import"./html-to-markdown-miRRAG75.js";import"./image-CtYWjOfZ.js";const z=`

<h4>This is Heading 4</h4>
<code>This is code</code>

<pre><code class="language-javascript">for (var i=1; i &#x3C;= 20; i++) {
  if (i % 15 == 0)
    return "FizzBuzz"
  else if (i % 3 == 0)
    return "Fizz"
  else if (i % 5 == 0)
    return "Buzz"
  else
    return i
  }</code></pre>
`;function E(){const[r,s]=i.useState(!0),[o,a]=i.useState(z),n=t=>{s(t.target.checked)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx(C,{heading:"Editor",links:[{name:"Components",href:m.components},{name:"Editor"}],moreLink:["https://tiptap.dev/docs/editor/introduction"]})}),e.jsxs(j,{maxWidth:!1,sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsxs(l,{sx:{p:3,gap:2,flexShrink:0,display:"flex",flexDirection:"column"},children:[e.jsx(k,{control:e.jsx(p,{name:"fullItem",checked:r,onChange:n}),label:"Full item",labelPlacement:"start",sx:{ml:"auto"}}),e.jsx(x,{fullItem:r,value:o,onChange:t=>a(t),sx:{maxHeight:720}})]}),e.jsxs(c,{spacing:1,sx:{p:3,borderRadius:2,overflowX:"auto",bgcolor:"background.neutral"},children:[e.jsx(d,{variant:"h6",children:"Preview"}),e.jsx(f,{children:o})]})]})]})}const F={title:`Editor | Components - ${h.site.name}`};function Y(){return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsxs("title",{children:[" ",F.title]})}),e.jsx(E,{})]})}export{Y as default};
