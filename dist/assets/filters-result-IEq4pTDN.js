import{j as s,B as e,e as l,I as a}from"./index-yGbCRgTb.js";function x({label:t,children:o,isShow:n,sx:i}){return n?s.jsxs(e,{gap:1,display:"flex",sx:{p:1,borderRadius:1,overflow:"hidden",border:r=>`dashed 1px ${r.vars.palette.divider}`,...i},children:[s.jsx(e,{component:"span",sx:{height:24,lineHeight:"24px",fontSize:r=>r.typography.subtitle2.fontSize,fontWeight:r=>r.typography.subtitle2.fontWeight},children:t}),s.jsx(e,{gap:1,display:"flex",flexWrap:"wrap",children:o})]}):null}const c={size:"small",variant:"soft"};function d({totalResults:t,onReset:o,sx:n,children:i}){return s.jsxs(e,{sx:n,children:[s.jsxs(e,{sx:{mb:1.5,typography:"body2"},children:[s.jsx("strong",{children:t}),s.jsx(e,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),s.jsxs(e,{flexGrow:1,gap:1,display:"flex",flexWrap:"wrap",alignItems:"center",children:[i,s.jsx(l,{color:"error",onClick:o,startIcon:s.jsx(a,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}export{d as F,x as a,c};
