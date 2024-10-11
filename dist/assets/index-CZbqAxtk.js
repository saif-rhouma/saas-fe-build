import{r as i,j as e,p as m,aD as l,bT as p,S as c,T as d,H as u,C as h}from"./index-D-ZKGqTU.js";import{E as x}from"./editor-CzmUVphq.js";import{M as f}from"./markdown-CyEZut9i.js";import{C}from"./custom-breadcrumbs-Ce0SsF19.js";import{C as g}from"./component-hero-DBV6Y83r.js";import{C as j}from"./component-block-gyf1Z1ot.js";import{F as k}from"./FormControlLabel-5B8r8hjw.js";import"./TextField-DhW8zjJC.js";import"./FormControl-n1s9FAXz.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CCRBBEhV.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-C9Vfi2q1.js";import"./Select-B6atPAS4.js";import"./Menu-BvjNAHEG.js";import"./InputBase-B9hwN3-B.js";import"./FormHelperText-BHlZRpvh.js";import"./index-Bb5BZvNl.js";import"./html-to-markdown-BtygCoAR.js";import"./image-CX1CYgjP.js";const b=`

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
