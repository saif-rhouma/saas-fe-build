import{aZ as l,aL as m,a_ as p,aK as d,a$ as a,b0 as y}from"./index-oyszM3Nj.js";import{u as h}from"./use-motion-value-CZDAD1h7.js";const V=t=>t&&typeof t=="object"&&t.mix,x=t=>V(t)?t.mix:void 0;function A(...t){const e=!Array.isArray(t[0]),n=e?0:-1,r=t[0+n],o=t[1+n],s=t[2+n],u=t[3+n],c=l(o,s,{mixer:x(s[0]),...u});return e?c(r):c}function f(t,e){const n=h(e()),r=()=>n.set(e());return r(),m(()=>{const o=()=>d.preRender(r,!1,!0),s=t.map(u=>u.on("change",o));return()=>{s.forEach(u=>u()),p(r)}}),n}function C(t){a.current=[],t();const e=f(a.current,t);return a.current=void 0,e}function L(t,e,n,r){if(typeof t=="function")return C(t);const o=typeof e=="function"?e:A(e,n,r);return Array.isArray(t)?i(t,o):i([t],([s])=>o(s))}function i(t,e){const n=y(()=>[]);return f(t,()=>{n.length=0;const r=t.length;for(let o=0;o<r;o++)n[o]=t[o].get();return e(n)})}export{L as u};
