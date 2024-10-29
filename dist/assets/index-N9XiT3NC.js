import{r as i,j as e,p as m,aB as l,ba as p,S as c,T as d,H as u,C as h}from"./index-oyszM3Nj.js";import{E as x}from"./editor-BBBPXrhA.js";import{M as f}from"./markdown-p1sJ0vwi.js";import{C}from"./custom-breadcrumbs-BfQvIxyX.js";import{C as g}from"./component-hero-CXd7ntqu.js";import{C as j}from"./component-block-COGX94V6.js";import{F as k}from"./FormControlLabel-kWTZarfi.js";import"./TextField-SbZqCQXc.js";import"./FormControl-pEipRvY2.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CtA-6Ha1.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BkqI8r49.js";import"./Select-D9qKJtxp.js";import"./Menu-BDXnOmeW.js";import"./InputBase-CngNuOhd.js";import"./FormHelperText-DGNKCr7Q.js";import"./index-DYy6t0qO.js";import"./html-to-markdown-bmTqXdQs.js";import"./image-D4xzDEh_.js";const b=`

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
