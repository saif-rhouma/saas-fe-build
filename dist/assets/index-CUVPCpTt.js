import{r as i,j as e,p as m,aD as l,bT as p,S as c,T as d,H as u,C as h}from"./index-Cq03K-HC.js";import{E as x}from"./editor-D16lNrfB.js";import{M as f}from"./markdown-D4VjHflN.js";import{C}from"./custom-breadcrumbs-C_F-6vOC.js";import{C as g}from"./component-hero-BTODoQtm.js";import{C as j}from"./component-block-Cp6UrCmO.js";import{F as k}from"./FormControlLabel-CS2mv3Te.js";import"./TextField-BNZ3YpVQ.js";import"./FormControl-DUlfZx4z.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-D6SX5sCR.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bx5V1G4l.js";import"./Select-BJK6Q71-.js";import"./Menu-B_EWYTTU.js";import"./InputBase-CPtucf_J.js";import"./FormHelperText-BdgqWWO0.js";import"./index-BOf1bnN2.js";import"./html-to-markdown-CIU-Po6x.js";import"./image-DitvMElQ.js";const b=`

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
