import{r as p,j as e,cV as d,e as u,I as j,cY as O,cl as R,cJ as S,aR as $,am as E,p as A,H as B,C as H}from"./index-CC8ZOXtA.js";import{C as P}from"./custom-breadcrumbs-Bl5OnNTu.js";import{C as F}from"./component-hero-DWzxV4ym.js";import{a as v}from"./component-block-CGf-Pi1H.js";import{L as z}from"./ListItemIcon-C7zTQy2o.js";import{C as y}from"./Checkbox-Dv9DB-8I.js";import{S as V}from"./component-template-BJ2_seyO.js";import{C as D}from"./CardHeader-D47k68P3.js";import"./CardContent-7m3tjAC0.js";function C(t,s){return t.filter(i=>s.indexOf(i)===-1)}function T(t,s){return t.filter(i=>s.indexOf(i)!==-1)}function G(){const[t,s]=p.useState([]),[i,h]=p.useState([0,1,2,3]),[o,x]=p.useState([4,5,6,7]),c=T(t,i),a=T(t,o),b=l=>()=>{const n=t.indexOf(l),r=[...t];n===-1?r.push(l):r.splice(n,1),s(r)},m=()=>{x(o.concat(i)),h([])},k=()=>{x(o.concat(c)),h(C(i,c)),s(C(t,c))},w=()=>{h(i.concat(a)),x(C(o,a)),s(C(t,a))},L=()=>{h(i.concat(o)),x([])},g=l=>e.jsx(O,{sx:{width:200,overflow:"auto",borderRadius:1.5},children:e.jsx(R,{dense:!0,component:"div",role:"list",children:l.map(n=>{const r=`transfer-list-item-${n}-label`;return e.jsxs(S,{role:"listitem",onClick:b(n),children:[e.jsx(z,{children:e.jsx(y,{checked:t.indexOf(n)!==-1,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":r}})}),e.jsx($,{id:r,primary:`List item ${n+1}`})]},n)})})});return e.jsxs(d,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"auto",py:3},children:[e.jsx(d,{children:g(i)}),e.jsxs(d,{container:!0,direction:"column",alignItems:"center",sx:{p:3},children:[e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:m,disabled:i.length===0,"aria-label":"move all right",sx:{my:1},children:e.jsx(j,{icon:"eva:arrowhead-right-fill",width:18})}),e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:k,disabled:c.length===0,"aria-label":"move selected right",sx:{my:1},children:e.jsx(j,{icon:"eva:arrow-ios-forward-fill",width:18})}),e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:w,disabled:a.length===0,"aria-label":"move selected left",sx:{my:1},children:e.jsx(j,{icon:"eva:arrow-ios-back-fill",width:18})}),e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:L,disabled:o.length===0,"aria-label":"move all left",sx:{my:1},children:e.jsx(j,{icon:"eva:arrowhead-left-fill",width:18})})]}),e.jsx(d,{children:g(o)})]})}function f(t,s){return t.filter(i=>s.indexOf(i)===-1)}function I(t,s){return t.filter(i=>s.indexOf(i)!==-1)}function M(t,s){return[...t,...f(s,t)]}function J(){const[t,s]=p.useState([]),[i,h]=p.useState([0,1,2,3]),[o,x]=p.useState([4,5,6,7]),c=I(t,i),a=I(t,o),b=l=>()=>{const n=t.indexOf(l),r=[...t];n===-1?r.push(l):r.splice(n,1),s(r)},m=l=>I(t,l).length,k=l=>()=>{m(l)===l.length?s(f(t,l)):s(M(t,l))},w=()=>{x(o.concat(c)),h(f(i,c)),s(f(t,c))},L=()=>{h(i.concat(a)),x(f(o,a)),s(f(t,a))},g=(l,n)=>e.jsxs(O,{sx:{borderRadius:1.5},children:[e.jsx(D,{avatar:e.jsx(y,{onClick:k(n),checked:m(n)===n.length&&n.length!==0,indeterminate:m(n)!==n.length&&m(n)!==0,disabled:n.length===0,inputProps:{"aria-label":"All items selected"}}),title:l,subheader:`${m(n)}/${n.length} selected`,sx:{p:2}}),e.jsx(E,{}),e.jsx(R,{dense:!0,component:"div",role:"list",sx:{width:200,overflow:"auto"},children:n.map(r=>e.jsxs(S,{role:"listitem",onClick:b(r),children:[e.jsx(z,{children:e.jsx(y,{disableRipple:!0,checked:t.indexOf(r)!==-1,tabIndex:-1,inputProps:{"aria-labelledby":`transfer-list-all-item-${r}-label`}})}),e.jsx($,{id:`transfer-list-all-item-${r}-label`,primary:`List item ${r+1}`})]},r))})]});return e.jsxs(d,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"auto",p:3},children:[e.jsx(d,{children:g("Choices",i)}),e.jsxs(d,{container:!0,direction:"column",alignItems:"center",sx:{p:3},children:[e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:w,disabled:c.length===0,"aria-label":"move selected right",sx:{my:1},children:e.jsx(j,{icon:"eva:arrow-ios-forward-fill",width:18})}),e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:L,disabled:a.length===0,"aria-label":"move selected left",sx:{my:1},children:e.jsx(j,{icon:"eva:arrow-ios-back-fill",width:18})})]}),e.jsx(d,{children:g("Chosen",o)})]})}function N(){const t=[{name:"Simple",component:e.jsx(v,{children:e.jsx(G,{})})},{name:"Enhanced",component:e.jsx(v,{children:e.jsx(J,{})})}];return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsx(P,{heading:"Transfer List",links:[{name:"Components",href:A.components},{name:"Transfer List"}],moreLink:["https://mui.com/components/transfer-list"]})}),e.jsx(V,{data:t})]})}const U={title:`Transfer list | MUI - ${H.site.name}`};function te(){return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsxs("title",{children:[" ",U.title]})}),e.jsx(N,{})]})}export{te as default};
