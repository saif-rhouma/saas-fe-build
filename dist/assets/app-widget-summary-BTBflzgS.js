import{b as h,j as s,B as o,I as u,aB as y}from"./index-bfXnrd_B.js";import{d as a,f as b}from"./format-number-DOsPFhv2.js";import{u as f,C as g}from"./use-chart-DrxyPIZq.js";import"./chart-legends-Dck_8txW.js";function k({title:i,percent:r,total:e,chart:t,sx:n,...l}){const d=h(),p=t.colors??[d.palette.primary.main],x=f({chart:{sparkline:{enabled:!0}},colors:p,stroke:{width:0},xaxis:{categories:t.categories},tooltip:{y:{formatter:m=>a(m),title:{formatter:()=>""}}},plotOptions:{bar:{borderRadius:1.5,columnWidth:"64%"}},...t.options}),c=s.jsxs(o,{sx:{gap:.5,display:"flex",alignItems:"center"},children:[s.jsx(u,{width:24,icon:r<0?"solar:double-alt-arrow-down-bold-duotone":"solar:double-alt-arrow-up-bold-duotone",sx:{flexShrink:0,color:"success.main",...r<0&&{color:"error.main"}}}),s.jsxs(o,{component:"span",sx:{typography:"subtitle2"},children:[r>0&&"+",b(r)]}),s.jsx(o,{component:"span",sx:{typography:"body2",color:"text.secondary"},children:"last 7 days"})]});return s.jsxs(y,{sx:{display:"flex",alignItems:"center",p:3,...n},...l,children:[s.jsxs(o,{sx:{flexGrow:1},children:[s.jsx(o,{sx:{typography:"subtitle2"},children:i}),s.jsx(o,{sx:{mt:1.5,mb:1,typography:"h3"},children:e?a(e):0}),r&&c]}),s.jsx(g,{type:"bar",series:[{data:t.series}],options:x,width:60,height:40})]})}export{k as A};
