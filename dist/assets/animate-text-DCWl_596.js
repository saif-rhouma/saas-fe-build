import{dc as T,dd as g,b2 as $,aN as V,r as A,j as o,T as E,B as p,m as N,de as k}from"./index-D9XQ5HZn.js";import{v as O}from"./fade-o6mfZnVH.js";import{u as B}from"./use-in-view-BHDFj9XN.js";function I(t){t.values.forEach(s=>s.stop())}function x(t,s){[...s].reverse().forEach(e=>{const r=t.getVariant(e);r&&g(t,r),t.variantChildren&&t.variantChildren.forEach(l=>{x(l,s)})})}function L(t,s){if(Array.isArray(s))return x(t,s);if(typeof s=="string")return x(t,[s]);g(t,s)}function R(){const t=new Set,s={subscribe(a){return t.add(a),()=>void t.delete(a)},start(a,e){const r=[];return t.forEach(l=>{r.push(T(l,a,{transitionOverride:e}))}),Promise.all(r)},set(a){return t.forEach(e=>{L(e,a)})},stop(){t.forEach(a=>{I(a)})},mount(){return()=>{s.stop()}}};return s}function S(){const t=$(R);return V(t.mount,[]),t}const W=S,n={root:"animate-text-root",lines:"animate-text-lines",line:"animate-text-line",word:"animate-text-word",char:"animate-text-char",space:"animate-text-space",srOnly:"sr-only",dataIndex:'[data-columns="3"]'};function z({sx:t,text:s,variants:a,once:e=!0,amount:r=1/3,component:l="p",repeatDelay:m=500,...v}){const h=A.useRef(null),c=W(),f=Array.isArray(s)?s:[s],y=B(h,{once:e,amount:r});return A.useEffect(()=>{let i;return y?(()=>{m?i=setTimeout(async()=>{await c.start("initial"),c.start("animate")},m):c.start("animate")})():c.start("initial"),()=>clearTimeout(i)},[c,y,m]),o.jsxs(E,{component:l,className:n.root,sx:{p:0,m:0,[`& .${n.srOnly}`]:{p:0,width:"1px",height:"1px",margin:"-1px",borderWidth:0,overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0, 0, 0, 0)"},...t},...v,children:[o.jsx("span",{className:n.srOnly,children:f.join(" ")}),o.jsx(p,{component:N.span,ref:h,initial:"initial",animate:c,exit:"exit",variants:k(),"aria-hidden":!0,className:n.lines,children:f.map((i,u)=>o.jsx(p,{component:"span","data-index":u,className:n.line,sx:{display:"block"},children:i.split(" ").map((d,b)=>{const C=i.split(" ")[i.split(" ").length-1];return o.jsxs(p,{component:"span","data-index":b,className:n.word,sx:{display:"inline-block"},children:[d.split("").map((j,w)=>o.jsx(p,{component:N.span,variants:a??O().in,"data-index":w,className:n.char,sx:{display:"inline-block"},children:j},`${j}-${w}`)),C!==d&&o.jsx(p,{component:"span",className:n.space,sx:{display:"inline-block"},children:" "})]},`${d}-${b}`)})},`${i}-${u}`))})]})}export{z as A,n as a};
