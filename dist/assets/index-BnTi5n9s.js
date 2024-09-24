import{r as i,j as e,p as m,aF as l,bL as p,S as c,T as d,H as u,C as h}from"./index-Bm3rBIkL.js";import{E as x}from"./editor-B_eq4lpY.js";import{M as f}from"./markdown-BqnGV2rP.js";import{C}from"./custom-breadcrumbs-DgyWxDBR.js";import{C as g}from"./component-hero-ZZj7uI9P.js";import{C as j}from"./component-block-BFnYnJd_.js";import{F as k}from"./FormControlLabel-3udn0dpo.js";import"./TextField-Zaq0_UQI.js";import"./FormControl-Dpp_E6i1.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-XKr5fbZR.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CW4sUJth.js";import"./Select-BbFY65UU.js";import"./Menu-BCmDYN65.js";import"./InputBase-CLwZiNSB.js";import"./FormHelperText-D4MtsGiu.js";import"./index-DJLOkwgj.js";import"./html-to-markdown-B4HHgAIa.js";import"./image-BvWqJKQA.js";const F=`

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
`;function b(){const[r,s]=i.useState(!0),[o,a]=i.useState(F),n=t=>{s(t.target.checked)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx(C,{heading:"Editor",links:[{name:"Components",href:m.components},{name:"Editor"}],moreLink:["https://tiptap.dev/docs/editor/introduction"]})}),e.jsxs(j,{maxWidth:!1,sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsxs(l,{sx:{p:3,gap:2,flexShrink:0,display:"flex",flexDirection:"column"},children:[e.jsx(k,{control:e.jsx(p,{name:"fullItem",checked:r,onChange:n}),label:"Full item",labelPlacement:"start",sx:{ml:"auto"}}),e.jsx(x,{fullItem:r,value:o,onChange:t=>a(t),sx:{maxHeight:720}})]}),e.jsxs(c,{spacing:1,sx:{p:3,borderRadius:2,overflowX:"auto",bgcolor:"background.neutral"},children:[e.jsx(d,{variant:"h6",children:"Preview"}),e.jsx(f,{children:o})]})]})]})}const z={title:`Editor | Components - ${h.site.name}`};function $(){return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsxs("title",{children:[" ",z.title]})}),e.jsx(b,{})]})}export{$ as default};
