import{r as i,j as e,p as m,aD as l,bT as p,S as c,T as d,H as u,C as h}from"./index-CGa_Q6Py.js";import{E as x}from"./editor-COn8_0IM.js";import{M as f}from"./markdown-BTFtpKrw.js";import{C}from"./custom-breadcrumbs-UiY5PgKl.js";import{C as g}from"./component-hero-DQ3xykV0.js";import{C as j}from"./component-block-BKWMZge6.js";import{F as k}from"./FormControlLabel-ULMw-Rz6.js";import"./TextField-x1wfc3aD.js";import"./FormControl-BQjf2Y5Q.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Boupd8R1.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BwlFMORw.js";import"./Select-C3EwVc3m.js";import"./Menu-CEGb_rPj.js";import"./InputBase-CW41dL9k.js";import"./FormHelperText-Cs86-ejI.js";import"./index-B34iO5qA.js";import"./html-to-markdown-CxYfLpnJ.js";import"./image-DKbVqab5.js";const b=`

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
