import{b as g,j as e,B as n,t as f,aq as y,v as j,C,e as b,S as w,T as c,av as u,L as k,r as a,dq as T,cn as v,l as I,I as D,p as G,H as S}from"./index-zyulwKWD.js";import{C as L}from"./custom-breadcrumbs-DHj4Ok4N.js";import{C as x,a as s}from"./component-block-jCYpWjeq.js";import{a as W,u as q}from"./use-countdown-BCTrFlzO.js";import{C as B}from"./component-hero-BgKjVGLu.js";import{u as $}from"./use-copy-to-clipboard-Di_MjcyC.js";import{T as A}from"./TextField-CwPpTqRa.js";import{I as P}from"./InputAdornment-BErxhCkp.js";import{S as U}from"./component-template-BZSMRqq2.js";import"./FormControl-DkR47KrL.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Dxqp6-8F.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-C6u8Qb2i.js";import"./Select-D9XKSxr2.js";import"./Menu-DQMDyUDh.js";import"./InputBase-Cb1ycHRk.js";import"./FormHelperText-DXYAPhzx.js";import"./CardHeader-DBUIw25C.js";import"./CardContent-D-EZ58c4.js";function V(){const t=g();return e.jsxs(x,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsx(s,{title:"Text",children:e.jsx(n,{component:"h1",sx:{typography:"h1",...f(`to right, ${t.vars.palette.warning.light}, ${t.vars.palette.primary.main}`)},children:"Minimals UI"})}),e.jsx(s,{title:"Background",children:e.jsx(n,{sx:{...y({color:`135deg, ${j(t.vars.palette.warning.lighterChannel,.8)}, ${j(t.vars.palette.primary.mainChannel,.8)}`,imgUrl:`${C.site.basePath}/assets/background/background-3.webp`}),width:1,height:160}})})]})}function F(){const t=W(new Date("08/08/2025 21:30")),{countdown:o,startCountdown:l,counting:i}=q(30);return e.jsxs(x,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsx(s,{title:"Date",children:e.jsxs(n,{gap:3,display:"flex",alignItems:"center",sx:{textAlign:"center",typography:"body2"},children:[e.jsxs("div",{children:[e.jsx(n,{sx:{typography:"h5"},children:t.days}),e.jsx(n,{sx:{color:"text.secondary"},children:"days"})]}),e.jsxs("div",{children:[e.jsx(n,{sx:{typography:"h5"},children:t.hours}),e.jsx(n,{sx:{color:"text.secondary"},children:"hours"})]}),e.jsxs("div",{children:[e.jsx(n,{sx:{typography:"h5"},children:t.minutes}),e.jsx(n,{sx:{color:"text.secondary"},children:"minutes"})]}),e.jsxs("div",{children:[e.jsx(n,{sx:{typography:"h5"},children:t.seconds}),e.jsx(n,{sx:{color:"text.secondary"},children:"seconds"})]})]})}),e.jsx(s,{title:"Seconds",children:e.jsx(n,{gap:3,display:"flex",alignItems:"center",sx:{typography:"h5",textAlign:"center"},children:e.jsx(b,{disabled:i,onClick:l,children:i?`Counting... (${o})`:"Start"})})})]})}const p=`
Donec posuere vulputate arcu. Fusce vulputate eleifend sapien. Phasellus magna. Proin
sapien ipsum, porta a, auctor quis, euismod ut, mi. Suspendisse faucibus, nunc et
pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.
`;function E(){const t=g();return e.jsxs(w,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsx(s,{title:"1 Line",sx:{flexDirection:"column",alignItems:"unset",minWidth:0},children:e.jsx(c,{noWrap:!0,sx:{width:1},children:p})}),e.jsx(s,{title:"2 Line",sx:{flexDirection:"column",alignItems:"unset",minWidth:0},children:e.jsx(c,{sx:{...u({line:2})},children:p})}),e.jsx(s,{title:"3 Line",sx:{flexDirection:"column",alignItems:"unset",minWidth:0},children:e.jsx(c,{sx:{...u({line:3})},children:p})}),e.jsx(s,{title:"4 Line",sx:{flexDirection:"column",alignItems:"unset",minWidth:0},children:e.jsx(c,{sx:{...u({line:3})},children:p})}),e.jsx(s,{title:"As Link",sx:{flexDirection:"column",alignItems:"unset",minWidth:0},children:e.jsx(k,{href:"#",color:"primary",sx:{maxWidth:300,...u({line:3})},children:p})}),e.jsx(s,{title:"Persistent",sx:{flexDirection:"column",alignItems:"unset",minWidth:0},children:e.jsx(c,{variant:"h6",sx:{...u({line:3,persistent:t.typography.h6}),bgcolor:"background.neutral"},children:"Donec posuere vulputate arcu."})})]})}function M({click:t,doubleClick:o,timeout:l=250}){const i=a.useRef(null),d=a.useCallback(()=>{i.current&&(clearTimeout(i.current),i.current=null)},[]),m=a.useCallback(r=>{d(),t&&r.detail===1&&(i.current=setTimeout(()=>{t(r)},l)),r.detail%2===0&&o(r)},[t,o,l,d]);return a.useMemo(()=>m,[m])}function H(){const{copy:t}=$(),[o,l]=a.useState("https://www.npmjs.com/package/"),i=`Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat
  dolor lectus quis orci. Cras non dolor.
  `,d=a.useCallback(r=>{r&&(T.success("Copied!"),t(r))},[t]),m=M({doubleClick:()=>d(i)}),h=a.useCallback(r=>{l(r.target.value)},[]);return e.jsxs(x,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsx(s,{title:"onChange",children:e.jsx(A,{fullWidth:!0,value:o,onChange:h,InputProps:{endAdornment:e.jsx(P,{position:"end",children:e.jsx(v,{title:"Copy",children:e.jsx(I,{onClick:()=>d(o),children:e.jsx(D,{icon:"eva:copy-fill",width:24})})})})}})}),e.jsx(s,{title:"onDoubleClick",children:e.jsx(c,{onClick:m,children:i})})]})}function O(){const t=[{name:"Text max line",component:e.jsx(E,{})},{name:"Copy to clipboard",component:e.jsx(H,{})},{name:"Gradient",component:e.jsx(V,{})},{name:"Countdown",component:e.jsx(F,{})}];return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsx(L,{heading:"Utilities",links:[{name:"Components",href:G.components},{name:"Utilities"}]})}),e.jsx(U,{data:t})]})}const z={title:`Utilities | Components - ${C.site.name}`};function ue(){return e.jsxs(e.Fragment,{children:[e.jsx(S,{children:e.jsxs("title",{children:[" ",z.title]})}),e.jsx(O,{})]})}export{ue as default};
