import{b as g,j as e,B as n,t as f,av as y,v as j,C,e as b,S as w,T as c,i as u,L as k,r as a,dK as T,cM as v,w as I,I as D,p as G,H as S}from"./index-CGa_Q6Py.js";import{C as L}from"./custom-breadcrumbs-UiY5PgKl.js";import{C as x,a as s}from"./component-block-BKWMZge6.js";import{a as W,u as B}from"./use-countdown-CmKJn-fL.js";import{C as $}from"./component-hero-DQ3xykV0.js";import{u as A}from"./use-copy-to-clipboard-Ns4-Byus.js";import{T as P}from"./TextField-x1wfc3aD.js";import{I as U}from"./InputAdornment-DYxqegqT.js";import{S as V}from"./component-template-BGly1H8b.js";import"./FormControl-BQjf2Y5Q.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Boupd8R1.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BwlFMORw.js";import"./Select-C3EwVc3m.js";import"./Menu-CEGb_rPj.js";import"./InputBase-CW41dL9k.js";import"./FormHelperText-Cs86-ejI.js";import"./CardHeader-DMBSs74a.js";import"./CardContent-C8AUsWM2.js";function q(){const t=g();return e.jsxs(x,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsx(s,{title:"Text",children:e.jsx(n,{component:"h1",sx:{typography:"h1",...f(`to right, ${t.vars.palette.warning.light}, ${t.vars.palette.primary.main}`)},children:"Minimals UI"})}),e.jsx(s,{title:"Background",children:e.jsx(n,{sx:{...y({color:`135deg, ${j(t.vars.palette.warning.lighterChannel,.8)}, ${j(t.vars.palette.primary.mainChannel,.8)}`,imgUrl:`${C.site.basePath}/assets/background/background-3.webp`}),width:1,height:160}})})]})}function F(){const t=W(new Date("08/08/2025 21:30")),{countdown:o,startCountdown:l,counting:i}=B(30);return e.jsxs(x,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsx(s,{title:"Date",children:e.jsxs(n,{gap:3,display:"flex",alignItems:"center",sx:{textAlign:"center",typography:"body2"},children:[e.jsxs("div",{children:[e.jsx(n,{sx:{typography:"h5"},children:t.days}),e.jsx(n,{sx:{color:"text.secondary"},children:"days"})]}),e.jsxs("div",{children:[e.jsx(n,{sx:{typography:"h5"},children:t.hours}),e.jsx(n,{sx:{color:"text.secondary"},children:"hours"})]}),e.jsxs("div",{children:[e.jsx(n,{sx:{typography:"h5"},children:t.minutes}),e.jsx(n,{sx:{color:"text.secondary"},children:"minutes"})]}),e.jsxs("div",{children:[e.jsx(n,{sx:{typography:"h5"},children:t.seconds}),e.jsx(n,{sx:{color:"text.secondary"},children:"seconds"})]})]})}),e.jsx(s,{title:"Seconds",children:e.jsx(n,{gap:3,display:"flex",alignItems:"center",sx:{typography:"h5",textAlign:"center"},children:e.jsx(b,{disabled:i,onClick:l,children:i?`Counting... (${o})`:"Start"})})})]})}const p=`
Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin
sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et
pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.
`;function M(){const t=g();return e.jsxs(w,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsx(s,{title:"1 Line",sx:{flexDirection:"column",alignItems:"unset",minWidth:0},children:e.jsx(c,{noWrap:!0,sx:{width:1},children:p})}),e.jsx(s,{title:"2 Line",sx:{flexDirection:"column",alignItems:"unset",minWidth:0},children:e.jsx(c,{sx:{...u({line:2})},children:p})}),e.jsx(s,{title:"3 Line",sx:{flexDirection:"column",alignItems:"unset",minWidth:0},children:e.jsx(c,{sx:{...u({line:3})},children:p})}),e.jsx(s,{title:"4 Line",sx:{flexDirection:"column",alignItems:"unset",minWidth:0},children:e.jsx(c,{sx:{...u({line:3})},children:p})}),e.jsx(s,{title:"As Link",sx:{flexDirection:"column",alignItems:"unset",minWidth:0},children:e.jsx(k,{href:"#",color:"primary",sx:{maxWidth:300,...u({line:3})},children:p})}),e.jsx(s,{title:"Persistent",sx:{flexDirection:"column",alignItems:"unset",minWidth:0},children:e.jsx(c,{variant:"h6",sx:{...u({line:3,persistent:t.typography.h6}),bgcolor:"background.neutral"},children:"Donec posuere vulputate arcu."})})]})}function E({click:t,doubleClick:o,timeout:l=250}){const i=a.useRef(null),d=a.useCallback(()=>{i.current&&(clearTimeout(i.current),i.current=null)},[]),m=a.useCallback(r=>{d(),t&&r.detail===1&&(i.current=setTimeout(()=>{t(r)},l)),r.detail%2===0&&o(r)},[t,o,l,d]);return a.useMemo(()=>m,[m])}function H(){const{copy:t}=A(),[o,l]=a.useState("https://www.npmjs.com/package/"),i=`Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat
  dolor lectus quis orci. Cras non dolor.
  `,d=a.useCallback(r=>{r&&(T.success("Copied!"),t(r))},[t]),m=E({doubleClick:()=>d(i)}),h=a.useCallback(r=>{l(r.target.value)},[]);return e.jsxs(x,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsx(s,{title:"onChange",children:e.jsx(P,{fullWidth:!0,value:o,onChange:h,InputProps:{endAdornment:e.jsx(U,{position:"end",children:e.jsx(v,{title:"Copy",children:e.jsx(I,{onClick:()=>d(o),children:e.jsx(D,{icon:"eva:copy-fill",width:24})})})})}})}),e.jsx(s,{title:"onDoubleClick",children:e.jsx(c,{onClick:m,children:i})})]})}function O(){const t=[{name:"Text max line",component:e.jsx(M,{})},{name:"Copy to clipboard",component:e.jsx(H,{})},{name:"Gradient",component:e.jsx(q,{})},{name:"Countdown",component:e.jsx(F,{})}];return e.jsxs(e.Fragment,{children:[e.jsx($,{children:e.jsx(L,{heading:"Utilities",links:[{name:"Components",href:G.components},{name:"Utilities"}]})}),e.jsx(V,{data:t})]})}const z={title:`Utilities | Components - ${C.site.name}`};function ue(){return e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsxs("title",{children:[" ",z.title]})}),e.jsx(O,{})]})}export{ue as default};
