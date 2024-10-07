import{r as i,j as e,p as m,aD as l,bT as p,S as c,T as d,H as u,C as h}from"./index-BHptOA6I.js";import{E as x}from"./editor-CR3MLm06.js";import{M as f}from"./markdown-Bub6wZBn.js";import{C}from"./custom-breadcrumbs-B2UF9gRN.js";import{C as g}from"./component-hero-CdwWNpUc.js";import{C as j}from"./component-block-DIiC8SvR.js";import{F as k}from"./FormControlLabel-BpgKL08t.js";import"./TextField-BRnw8qFO.js";import"./FormControl-oD2GRha3.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DcjFGu9q.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-2Wv0vqaq.js";import"./Select-B_eI20e-.js";import"./Menu-C5yStwHf.js";import"./InputBase-JkTJu-C5.js";import"./FormHelperText-BiwR4I6s.js";import"./index-DcMguJdV.js";import"./html-to-markdown-CWsVFomt.js";import"./image-BnT6ltHr.js";const b=`

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
