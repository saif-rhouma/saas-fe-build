import{b as p,j as t,B as i}from"./index-BPQkDe0s.js";const x=({payload:r,image:o,productName:n,handleClick:s,selected:l})=>{const c=typeof o=="string"?o:URL.createObjectURL(o),h=p().vars.palette.primary.main;return t.jsxs(i,{gap:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{backgroundColor:l?h:"",p:3,borderRadius:1,overflow:"hidden",border:e=>`solid 1px ${e.vars.palette.divider}`},onClick:()=>s(r),children:[t.jsx(i,{sx:{display:"inline-flex",width:65,height:65},children:t.jsx(i,{component:"img",src:c,sx:{width:1,height:1,objectFit:"cover",borderRadius:2}})}),n&&t.jsx(i,{component:"span",sx:{height:24,lineHeight:"24px",fontSize:e=>e.typography.subtitle2.fontSize,fontWeight:e=>e.typography.subtitle2.fontWeight},children:n})]})};export{x as P};
