import{b as h,j as t,B as o,I as p}from"./index-CwDFRBrV.js";const b=({payload:i,image:r,productName:n,handleClick:a,handleDelete:s,selected:l})=>{const c=typeof r=="string"?r:URL.createObjectURL(r),d=h().vars.palette.primary.main;return t.jsxs(o,{gap:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{position:"relative",backgroundColor:l?d:"",p:3,borderRadius:1,overflow:"hidden",border:e=>`solid 1px ${e.vars.palette.divider}`},children:[t.jsxs(o,{sx:{display:"inline-flex",width:65,height:65},children:[s&&t.jsx(o,{sx:{padding:.5,margin:0,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",color:"error.main",position:"absolute",top:10,right:10,backgroundColor:"rgba(0, 0, 0, 0.1)",":hover":{backgroundColor:"rgba(0, 0, 0, 0.2)"}},onClick:()=>{s(i)},children:t.jsx(p,{icon:"solar:trash-bin-trash-bold"})}),t.jsx(o,{onClick:()=>a(i),component:"img",src:c,sx:{width:1,height:1,objectFit:"cover",borderRadius:2}})]}),n&&t.jsx(o,{component:"span",sx:{height:24,textAlign:"center",lineHeight:"24px",fontSize:e=>e.typography.subtitle2.fontSize,fontWeight:e=>e.typography.subtitle2.fontWeight},children:n})]})};export{b as P};
