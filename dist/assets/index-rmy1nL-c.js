import{r as p,j as e,G as d,e as u,I as j,aF as O,cZ as R,aC as S,aK as $,D as E,p as A,H as B,C as F}from"./index-DLwkls4m.js";import{C as H}from"./custom-breadcrumbs-RrbSlijf.js";import{C as P}from"./component-hero-BL9eOJUB.js";import{a as v}from"./component-block-CcbkXlDA.js";import{L as z}from"./ListItemIcon-BWMrTakZ.js";import{C as y}from"./Checkbox-ByD5WW94.js";import{S as D}from"./component-template-CXZdldum.js";import{C as G}from"./CardHeader-DcTomhNA.js";import"./CardContent-Cczj0blS.js";function C(t,s){return t.filter(i=>s.indexOf(i)===-1)}function T(t,s){return t.filter(i=>s.indexOf(i)!==-1)}function M(){const[t,s]=p.useState([]),[i,h]=p.useState([0,1,2,3]),[o,x]=p.useState([4,5,6,7]),a=T(t,i),c=T(t,o),b=l=>()=>{const n=t.indexOf(l),r=[...t];n===-1?r.push(l):r.splice(n,1),s(r)},m=()=>{x(o.concat(i)),h([])},k=()=>{x(o.concat(a)),h(C(i,a)),s(C(t,a))},w=()=>{h(i.concat(c)),x(C(o,c)),s(C(t,c))},L=()=>{h(i.concat(o)),x([])},g=l=>e.jsx(O,{sx:{width:200,overflow:"auto",borderRadius:1.5},children:e.jsx(R,{dense:!0,component:"div",role:"list",children:l.map(n=>{const r=`transfer-list-item-${n}-label`;return e.jsxs(S,{role:"listitem",onClick:b(n),children:[e.jsx(z,{children:e.jsx(y,{checked:t.indexOf(n)!==-1,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":r}})}),e.jsx($,{id:r,primary:`List item ${n+1}`})]},n)})})});return e.jsxs(d,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"auto",py:3},children:[e.jsx(d,{children:g(i)}),e.jsxs(d,{container:!0,direction:"column",alignItems:"center",sx:{p:3},children:[e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:m,disabled:i.length===0,"aria-label":"move all right",sx:{my:1},children:e.jsx(j,{icon:"eva:arrowhead-right-fill",width:18})}),e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:k,disabled:a.length===0,"aria-label":"move selected right",sx:{my:1},children:e.jsx(j,{icon:"eva:arrow-ios-forward-fill",width:18})}),e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:w,disabled:c.length===0,"aria-label":"move selected left",sx:{my:1},children:e.jsx(j,{icon:"eva:arrow-ios-back-fill",width:18})}),e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:L,disabled:o.length===0,"aria-label":"move all left",sx:{my:1},children:e.jsx(j,{icon:"eva:arrowhead-left-fill",width:18})})]}),e.jsx(d,{children:g(o)})]})}function f(t,s){return t.filter(i=>s.indexOf(i)===-1)}function I(t,s){return t.filter(i=>s.indexOf(i)!==-1)}function V(t,s){return[...t,...f(s,t)]}function K(){const[t,s]=p.useState([]),[i,h]=p.useState([0,1,2,3]),[o,x]=p.useState([4,5,6,7]),a=I(t,i),c=I(t,o),b=l=>()=>{const n=t.indexOf(l),r=[...t];n===-1?r.push(l):r.splice(n,1),s(r)},m=l=>I(t,l).length,k=l=>()=>{m(l)===l.length?s(f(t,l)):s(V(t,l))},w=()=>{x(o.concat(a)),h(f(i,a)),s(f(t,a))},L=()=>{h(i.concat(c)),x(f(o,c)),s(f(t,c))},g=(l,n)=>e.jsxs(O,{sx:{borderRadius:1.5},children:[e.jsx(G,{avatar:e.jsx(y,{onClick:k(n),checked:m(n)===n.length&&n.length!==0,indeterminate:m(n)!==n.length&&m(n)!==0,disabled:n.length===0,inputProps:{"aria-label":"All items selected"}}),title:l,subheader:`${m(n)}/${n.length} selected`,sx:{p:2}}),e.jsx(E,{}),e.jsx(R,{dense:!0,component:"div",role:"list",sx:{width:200,overflow:"auto"},children:n.map(r=>e.jsxs(S,{role:"listitem",onClick:b(r),children:[e.jsx(z,{children:e.jsx(y,{disableRipple:!0,checked:t.indexOf(r)!==-1,tabIndex:-1,inputProps:{"aria-labelledby":`transfer-list-all-item-${r}-label`}})}),e.jsx($,{id:`transfer-list-all-item-${r}-label`,primary:`List item ${r+1}`})]},r))})]});return e.jsxs(d,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"auto",p:3},children:[e.jsx(d,{children:g("Choices",i)}),e.jsxs(d,{container:!0,direction:"column",alignItems:"center",sx:{p:3},children:[e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:w,disabled:a.length===0,"aria-label":"move selected right",sx:{my:1},children:e.jsx(j,{icon:"eva:arrow-ios-forward-fill",width:18})}),e.jsx(u,{color:"inherit",variant:"outlined",size:"small",onClick:L,disabled:c.length===0,"aria-label":"move selected left",sx:{my:1},children:e.jsx(j,{icon:"eva:arrow-ios-back-fill",width:18})})]}),e.jsx(d,{children:g("Chosen",o)})]})}function N(){const t=[{name:"Simple",component:e.jsx(v,{children:e.jsx(M,{})})},{name:"Enhanced",component:e.jsx(v,{children:e.jsx(K,{})})}];return e.jsxs(e.Fragment,{children:[e.jsx(P,{children:e.jsx(H,{heading:"Transfer List",links:[{name:"Components",href:A.components},{name:"Transfer List"}],moreLink:["https://mui.com/components/transfer-list"]})}),e.jsx(D,{data:t})]})}const U={title:`Transfer list | MUI - ${F.site.name}`};function te(){return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsxs("title",{children:[" ",U.title]})}),e.jsx(N,{})]})}export{te as default};
