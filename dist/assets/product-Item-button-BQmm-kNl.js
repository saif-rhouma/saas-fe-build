import{b as f,j as e,B as r,I as m}from"./index-CSsjSOSC.js";const y=({payload:s,image:i,productName:n,handleClick:c,handleDelete:l,selected:p,deletedAction:o,deletedImages:x})=>{const h=typeof i=="string"?i:URL.createObjectURL(i),a=f(),d=a.vars.palette.primary.main,g=a.vars.palette.error.main,b=()=>x.some(u=>u===s)?g:"";return e.jsxs(r,{gap:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{position:"relative",backgroundColor:o?b:p?d:"",p:3,borderRadius:1,overflow:"hidden",border:t=>`solid 1px ${t.vars.palette.divider}`},children:[e.jsxs(r,{sx:{display:"inline-flex",width:65,height:65},children:[o&&e.jsx(r,{sx:{padding:.5,margin:0,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",color:"error.main",position:"absolute",top:10,right:10,backgroundColor:"rgba(0, 0, 0, 0.1)"},children:e.jsx(m,{icon:"solar:trash-bin-trash-bold"})}),e.jsx(r,{onClick:()=>{o?l(s):c(s)},component:"img",src:h,sx:{width:1,height:1,objectFit:"cover",borderRadius:2}})]}),n&&e.jsx(r,{component:"span",sx:{height:24,textAlign:"center",lineHeight:"24px",fontSize:t=>t.typography.subtitle2.fontSize,fontWeight:t=>t.typography.subtitle2.fontWeight},children:n})]})};export{y as P};
