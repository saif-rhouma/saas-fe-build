import{r as i,j as e,p as m,cY as l,aV as p,S as c,T as d,H as u,C as h}from"./index-DQSze1U8.js";import{E as x}from"./editor-DdsvzCA1.js";import{M as f}from"./markdown-Q9kT7uCm.js";import{C}from"./custom-breadcrumbs-Dbp-n_yz.js";import{C as g}from"./component-hero-BugINP13.js";import{C as j}from"./component-block-D12uQ3Cr.js";import{F as k}from"./FormControlLabel-Bw6B1Xse.js";import"./TextField-BM3ncy7B.js";import"./FormControl-DZKHpfHt.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DhDKa20G.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-m89cyKyH.js";import"./Select-CH0Am0Es.js";import"./Menu-w_nXL5Bn.js";import"./InputBase-fLt_Sq7P.js";import"./FormHelperText-Dq4Iv_kj.js";import"./index-2JQKxIAF.js";import"./html-to-markdown-Dz8kSwBf.js";import"./image-BnHLvXo1.js";const z=`

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
`;function E(){const[r,s]=i.useState(!0),[o,a]=i.useState(z),n=t=>{s(t.target.checked)};return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx(C,{heading:"Editor",links:[{name:"Components",href:m.components},{name:"Editor"}],moreLink:["https://tiptap.dev/docs/editor/introduction"]})}),e.jsxs(j,{maxWidth:!1,sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsxs(l,{sx:{p:3,gap:2,flexShrink:0,display:"flex",flexDirection:"column"},children:[e.jsx(k,{control:e.jsx(p,{name:"fullItem",checked:r,onChange:n}),label:"Full item",labelPlacement:"start",sx:{ml:"auto"}}),e.jsx(x,{fullItem:r,value:o,onChange:t=>a(t),sx:{maxHeight:720}})]}),e.jsxs(c,{spacing:1,sx:{p:3,borderRadius:2,overflowX:"auto",bgcolor:"background.neutral"},children:[e.jsx(d,{variant:"h6",children:"Preview"}),e.jsx(f,{children:o})]})]})]})}const F={title:`Editor | Components - ${h.site.name}`};function Y(){return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsxs("title",{children:[" ",F.title]})}),e.jsx(E,{})]})}export{Y as default};
