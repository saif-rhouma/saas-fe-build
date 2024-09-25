import{d4 as i,d5 as s,d6 as l,d7 as f}from"./index-s58VYgz3.js";function u(){const t=i.resolvedLanguage??s,n=l.find(r=>r.value===t);return{code:n==null?void 0:n.numberFormat.code,currency:n==null?void 0:n.numberFormat.currency}}const c={code:"en-SA",currency:"SAR"};function a(t){return t==null||Number.isNaN(t)?null:Number(t)}function F(t,n){const r=u()||c,o=a(t);return o===null?"":new Intl.NumberFormat(r.code,{minimumFractionDigits:0,maximumFractionDigits:2,...n}).format(o)}function g(t,n){const r=localStorage.getItem(f);r&&(c.currency=r);const o=c,e=a(t);return e===null?"":`${new Intl.NumberFormat(o.code,{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2,...n}).format(e)} ${c.currency}`}function y(t,n){const r=u()||c,o=a(t);return o===null?"":new Intl.NumberFormat(r.code,{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1,...n}).format(o/100)}function N(t,n){const r=u()||c,o=a(t);return o===null?"":new Intl.NumberFormat(r.code,{notation:"compact",maximumFractionDigits:2,...n}).format(o).replace(/[A-Z]/g,m=>m.toLowerCase())}function D(t){const n=a(t);if(n===null||n===0)return"0 bytes";const r=["bytes","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],o=2,e=1024,m=Math.floor(Math.log(n)/Math.log(e));return`${parseFloat((n/e**m).toFixed(o))} ${r[m]}`}export{D as a,g as b,N as c,F as d,y as f};
