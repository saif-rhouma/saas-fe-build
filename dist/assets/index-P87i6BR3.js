import{r as i,j as e,p as m,cZ as l,aa as p,S as c,T as d,H as u,C as h}from"./index-BqQARj70.js";import{E as x}from"./editor-QJd8noTi.js";import{M as f}from"./markdown-gtZmpuzs.js";import{C}from"./custom-breadcrumbs-ryDpeVg5.js";import{C as g}from"./component-hero-D1a2wFwQ.js";import{C as j}from"./component-block-BfyVyfHa.js";import{F as k}from"./FormControlLabel-DYa7_yhu.js";import"./TextField-Ddc-2_B3.js";import"./FormControl-C8LIfacH.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Cypnw6Fi.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Dza6C49E.js";import"./Select-BcNE4CY6.js";import"./Menu-CyG4g8V9.js";import"./InputBase-ByUog9Qa.js";import"./FormHelperText-D7zaUcMu.js";import"./index-3on3wy4W.js";import"./html-to-markdown-DE4VH33A.js";import"./image-D-bc4Fg4.js";const z=`

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
`;function E(){const[r,s]=i.useState(!0),[o,a]=i.useState(z),n=t=>{s(t.target.checked)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx(C,{heading:"Editor",links:[{name:"Components",href:m.components},{name:"Editor"}],moreLink:["https://tiptap.dev/docs/editor/introduction"]})}),e.jsxs(j,{maxWidth:!1,sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsxs(l,{sx:{p:3,gap:2,flexShrink:0,display:"flex",flexDirection:"column"},children:[e.jsx(k,{control:e.jsx(p,{name:"fullItem",checked:r,onChange:n}),label:"Full item",labelPlacement:"start",sx:{ml:"auto"}}),e.jsx(x,{fullItem:r,value:o,onChange:t=>a(t),sx:{maxHeight:720}})]}),e.jsxs(c,{spacing:1,sx:{p:3,borderRadius:2,overflowX:"auto",bgcolor:"background.neutral"},children:[e.jsx(d,{variant:"h6",children:"Preview"}),e.jsx(f,{children:o})]})]})]})}const F={title:`Editor | Components - ${h.site.name}`};function Z(){return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsxs("title",{children:[" ",F.title]})}),e.jsx(E,{})]})}export{Z as default};
