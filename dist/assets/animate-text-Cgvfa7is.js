import{dg as T,dh as v,b6 as $,aR as V,r as A,j as o,T as E,B as p,m as g,di as k}from"./index-BjIn7_qX.js";import{v as O}from"./fade-o6mfZnVH.js";import{u as R}from"./use-in-view-2Ab4XSpc.js";function B(t){t.values.forEach(s=>s.stop())}function h(t,s){[...s].reverse().forEach(e=>{const r=t.getVariant(e);r&&v(t,r),t.variantChildren&&t.variantChildren.forEach(l=>{h(l,s)})})}function I(t,s){if(Array.isArray(s))return h(t,s);if(typeof s=="string")return h(t,[s]);v(t,s)}function L(){const t=new Set,s={subscribe(a){return t.add(a),()=>void t.delete(a)},start(a,e){const r=[];return t.forEach(l=>{r.push(T(l,a,{transitionOverride:e}))}),Promise.all(r)},set(a){return t.forEach(e=>{I(e,a)})},stop(){t.forEach(a=>{B(a)})},mount(){return()=>{s.stop()}}};return s}function S(){const t=$(L);return V(t.mount,[]),t}const W=S,n={root:"animate-text-root",lines:"animate-text-lines",line:"animate-text-line",word:"animate-text-word",char:"animate-text-char",space:"animate-text-space",srOnly:"sr-only",dataIndex:'[data-columns="3"]'};function z({sx:t,text:s,variants:a,once:e=!0,amount:r=1/3,component:l="p",repeatDelay:m=500,...C}){const x=A.useRef(null),c=W(),f=Array.isArray(s)?s:[s],y=R(x,{once:e,amount:r});return A.useEffect(()=>{let i;return y?(()=>{m?i=setTimeout(async()=>{await c.start("initial"),c.start("animate")},m):c.start("animate")})():c.start("initial"),()=>clearTimeout(i)},[c,y,m]),o.jsxs(E,{component:l,className:n.root,sx:{p:0,m:0,[`& .${n.srOnly}`]:{p:0,width:"1px",height:"1px",margin:"-1px",borderWidth:0,overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0, 0, 0, 0)"},...t},...C,children:[o.jsx("span",{className:n.srOnly,children:f.join(" ")}),o.jsx(p,{component:g.span,ref:x,initial:"initial",animate:c,exit:"exit",variants:k(),"aria-hidden":!0,className:n.lines,children:f.map((i,u)=>o.jsx(p,{component:"span","data-index":u,className:n.line,sx:{display:"block"},children:i.split(" ").map((d,b)=>{const N=i.split(" ")[i.split(" ").length-1];return o.jsxs(p,{component:"span","data-index":b,className:n.word,sx:{display:"inline-block"},children:[d.split("").map((j,w)=>o.jsx(p,{component:g.span,variants:a??O().in,"data-index":w,className:n.char,sx:{display:"inline-block"},children:j},`${j}-${w}`)),N!==d&&o.jsx(p,{component:"span",className:n.space,sx:{display:"inline-block"},children:" "})]},`${d}-${b}`)})},`${i}-${u}`))})]})}export{z as A,n as a};
