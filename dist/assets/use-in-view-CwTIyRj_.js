import{be as E,r as g}from"./index-MIl7JRte.js";const I={some:0,all:1};function h(s,r,{root:i,margin:c,amount:t="some"}={}){const f=E(s),n=new WeakMap,u=a=>{a.forEach(e=>{const l=n.get(e.target);if(e.isIntersecting!==!!l)if(e.isIntersecting){const d=r(e);typeof d=="function"?n.set(e.target,d):o.unobserve(e.target)}else l&&(l(e),n.delete(e.target))})},o=new IntersectionObserver(u,{root:i,rootMargin:c,threshold:typeof t=="number"?t:I[t]});return f.forEach(a=>o.observe(a)),()=>o.disconnect()}function w(s,{root:r,margin:i,amount:c,once:t=!1}={}){const[f,n]=g.useState(!1);return g.useEffect(()=>{if(!s.current||t&&f)return;const u=()=>(n(!0),t?void 0:()=>n(!1)),o={root:r&&r.current||void 0,margin:i,amount:c};return h(s.current,u,o)},[r,s,i,t,c]),f}export{w as u};
