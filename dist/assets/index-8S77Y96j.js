import{r as i,j as e,p as m,aF as l,bL as p,S as c,T as d,H as u,C as h}from"./index-DLJImauo.js";import{E as x}from"./editor-Cv_jl3Bs.js";import{M as f}from"./markdown-CWSHyXA-.js";import{C}from"./custom-breadcrumbs-B-49wW2q.js";import{C as g}from"./component-hero-CCPDuJjw.js";import{C as j}from"./component-block-vnra8cVp.js";import{F as k}from"./FormControlLabel-C_QV2Cmj.js";import"./TextField-Dn-4Yx6H.js";import"./FormControl-CkwXYy0A.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CEebhHey.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CL79af0c.js";import"./Select-C24IVDgk.js";import"./Menu-u9Fg2yBB.js";import"./InputBase-DlzL5OFi.js";import"./FormHelperText-kKfXHIoW.js";import"./index-B2cAHtCt.js";import"./html-to-markdown-zgiF5KCf.js";import"./image-BZDZbX9M.js";const F=`

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
