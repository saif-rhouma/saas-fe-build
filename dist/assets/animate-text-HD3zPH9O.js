import{cS as I,cT as A,b0 as C,aL as T,cU as N,r as x,j as m,T as $,B as h,m as j,cV as k}from"./index-Blkmi4zg.js";import{v as O}from"./fade-o6mfZnVH.js";function S(t){t.values.forEach(e=>e.stop())}function g(t,e){[...e].reverse().forEach(a=>{const n=t.getVariant(a);n&&A(t,n),t.variantChildren&&t.variantChildren.forEach(o=>{g(o,e)})})}function B(t,e){if(Array.isArray(e))return g(t,e);if(typeof e=="string")return g(t,[e]);A(t,e)}function L(){const t=new Set,e={subscribe(s){return t.add(s),()=>void t.delete(s)},start(s,a){const n=[];return t.forEach(o=>{n.push(I(o,s,{transitionOverride:a}))}),Promise.all(n)},set(s){return t.forEach(a=>{B(a,s)})},stop(){t.forEach(s=>{S(s)})},mount(){return()=>{e.stop()}}};return e}function W(){const t=C(L);return T(t.mount,[]),t}const R=W,F={some:0,all:1};function M(t,e,{root:s,margin:a,amount:n="some"}={}){const o=N(t),i=new WeakMap,f=c=>{c.forEach(r=>{const d=i.get(r.target);if(r.isIntersecting!==!!d)if(r.isIntersecting){const l=e(r);typeof l=="function"?i.set(r.target,l):u.unobserve(r.target)}else d&&(d(r),i.delete(r.target))})},u=new IntersectionObserver(f,{root:s,rootMargin:a,threshold:typeof n=="number"?n:F[n]});return o.forEach(c=>u.observe(c)),()=>u.disconnect()}function P(t,{root:e,margin:s,amount:a,once:n=!1}={}){const[o,i]=x.useState(!1);return x.useEffect(()=>{if(!t.current||n&&o)return;const f=()=>(i(!0),n?void 0:()=>i(!1)),u={root:e&&e.current||void 0,margin:s,amount:a};return M(t.current,f,u)},[e,t,s,n,a]),o}const p={root:"animate-text-root",lines:"animate-text-lines",line:"animate-text-line",word:"animate-text-word",char:"animate-text-char",space:"animate-text-space",srOnly:"sr-only",dataIndex:'[data-columns="3"]'};function z({sx:t,text:e,variants:s,once:a=!0,amount:n=1/3,component:o="p",repeatDelay:i=500,...f}){const u=x.useRef(null),c=R(),r=Array.isArray(e)?e:[e],d=P(u,{once:a,amount:n});return x.useEffect(()=>{let l;return d?(()=>{i?l=setTimeout(async()=>{await c.start("initial"),c.start("animate")},i):c.start("animate")})():c.start("initial"),()=>clearTimeout(l)},[c,d,i]),m.jsxs($,{component:o,className:p.root,sx:{p:0,m:0,[`& .${p.srOnly}`]:{p:0,width:"1px",height:"1px",margin:"-1px",borderWidth:0,overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0, 0, 0, 0)"},...t},...f,children:[m.jsx("span",{className:p.srOnly,children:r.join(" ")}),m.jsx(h,{component:j.span,ref:u,initial:"initial",animate:c,exit:"exit",variants:k(),"aria-hidden":!0,className:p.lines,children:r.map((l,b)=>m.jsx(h,{component:"span","data-index":b,className:p.line,sx:{display:"block"},children:l.split(" ").map((w,v)=>{const V=l.split(" ")[l.split(" ").length-1];return m.jsxs(h,{component:"span","data-index":v,className:p.word,sx:{display:"inline-block"},children:[w.split("").map((E,y)=>m.jsx(h,{component:j.span,variants:s??O().in,"data-index":y,className:p.char,sx:{display:"inline-block"},children:E},`${E}-${y}`)),V!==w&&m.jsx(h,{component:"span",className:p.space,sx:{display:"inline-block"},children:" "})]},`${w}-${v}`)})},`${l}-${b}`))})]})}export{z as A,p as a,P as u};
