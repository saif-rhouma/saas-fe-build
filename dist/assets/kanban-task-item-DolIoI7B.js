import{w as l,j as p,r}from"./index-DLwkls4m.js";import{e as x}from"./sortable.esm-BI1OG6eG.js";import{i as I}from"./image-DLBdKQMi.js";import{I as S}from"./utils-DxEg07LU.js";function b({task:t,disabled:e,columnId:o,sx:i}){const s=l(),{setNodeRef:a,listeners:u,isDragging:n,isSorting:m,transform:c,transition:f}=x({id:t==null?void 0:t.id}),g=T(),d=n&&!g;return p.jsx(S,{ref:e?void 0:a,task:t,onClick:s.onTrue,stateProps:{transform:c,listeners:u,transition:f,sorting:m,dragging:n,fadeIn:d},sx:{...s.value&&{[`& .${I.root}`]:{opacity:.8}},...i}})}function T(){const[t,e]=r.useState(!1);return r.useEffect(()=>{const o=setTimeout(()=>e(!0),500);return()=>clearTimeout(o)},[]),t}export{b as K};
