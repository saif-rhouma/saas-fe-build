import{r as i,j as e,p as m,aB as l,ba as p,S as c,T as d,H as u,C as h}from"./index-PcvvizaM.js";import{E as x}from"./editor-_YiH203b.js";import{M as f}from"./markdown-CqFanLJG.js";import{C}from"./custom-breadcrumbs-CveB5zSd.js";import{C as g}from"./component-hero-Cdp5ZZpi.js";import{C as j}from"./component-block-lv1a7XGG.js";import{F as k}from"./FormControlLabel-BVXyMM5l.js";import"./TextField-BqVeNtQk.js";import"./FormControl-BDFWwf0L.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CLgWCQLa.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-COKH-IDU.js";import"./Select-oMu1ahJl.js";import"./Menu-DUpb5sCU.js";import"./InputBase-Dg_k17pz.js";import"./FormHelperText-CwIdVd83.js";import"./index-C-MOTVcd.js";import"./html-to-markdown-B54ssAki.js";import"./image-CJs9mC80.js";const b=`

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
`;function z(){const[r,s]=i.useState(!0),[o,a]=i.useState(b),n=t=>{s(t.target.checked)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx(C,{heading:"Editor",links:[{name:"Components",href:m.components},{name:"Editor"}],moreLink:["https://tiptap.dev/docs/editor/introduction"]})}),e.jsxs(j,{maxWidth:!1,sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsxs(l,{sx:{p:3,gap:2,flexShrink:0,display:"flex",flexDirection:"column"},children:[e.jsx(k,{control:e.jsx(p,{name:"fullItem",checked:r,onChange:n}),label:"Full item",labelPlacement:"start",sx:{ml:"auto"}}),e.jsx(x,{fullItem:r,value:o,onChange:t=>a(t),sx:{maxHeight:720}})]}),e.jsxs(c,{spacing:1,sx:{p:3,borderRadius:2,overflowX:"auto",bgcolor:"background.neutral"},children:[e.jsx(d,{variant:"h6",children:"Preview"}),e.jsx(f,{children:o})]})]})]})}const E={title:`Editor | Components - ${h.site.name}`};function $(){return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsxs("title",{children:[" ",E.title]})}),e.jsx(z,{})]})}export{$ as default};