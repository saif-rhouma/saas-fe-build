import{r as i,j as e,p as m,aF as l,bL as p,S as c,T as d,H as u,C as h}from"./index-DLwkls4m.js";import{E as x}from"./editor-DRhW7keS.js";import{M as f}from"./markdown-CgqHfjBH.js";import{C}from"./custom-breadcrumbs-RrbSlijf.js";import{C as g}from"./component-hero-BL9eOJUB.js";import{C as j}from"./component-block-CcbkXlDA.js";import{F as k}from"./FormControlLabel-7I2uQbxz.js";import"./TextField-B1Cg5HmH.js";import"./FormControl-SJOyIv6-.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-fkQY0vwD.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-DbiGIO3x.js";import"./Select-CL6BPU1z.js";import"./Menu-D_Q_wpzJ.js";import"./InputBase-DNJV1MQo.js";import"./FormHelperText-BVmW-5Ni.js";import"./index-C1NEse06.js";import"./html-to-markdown-Blv1dW2a.js";import"./image-DLBdKQMi.js";const F=`

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
