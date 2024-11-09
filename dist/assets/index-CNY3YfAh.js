import{b as p,j as e,B as i,cF as g,v as d,C as t,f as u,M as v,m as y,I as l,bO as c,cG as C,T as n,e as b,i as w,cH as F,bR as q,A as j,cI as A,cJ as $,H as I}from"./index-cVC9loO2.js";import{v as x}from"./fade-o6mfZnVH.js";import{A as P,a as h}from"./animate-text-D-DZomh5.js";import{T as r}from"./TextField-LJCfmosc.js";import{I as T}from"./InputAdornment-BrZhMZcc.js";import{A as k,a as W,b as D}from"./AccordionSummary-9nAI3V4H.js";import"./transition-BJzcwH5q.js";import"./FormControl-9caSTWx2.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CMJbfDqe.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-B5edal7e.js";import"./Select-DUYbOU_T.js";import"./Menu-BRMv56CN.js";import"./InputBase-C5V7Cyqr.js";import"./FormHelperText-CsRk0ikA.js";function R(){const s=p();return e.jsx(i,{sx:{...g({color:`0deg, ${d(s.vars.palette.grey["900Channel"],.8)}, ${d(s.vars.palette.grey["900Channel"],.8)}`,imgUrl:`${t.site.basePath}/assets/images/faqs/hero.webp`}),height:{md:560},py:{xs:10,md:0},overflow:"hidden",position:"relative"},children:e.jsx(u,{component:v,children:e.jsxs(i,{sx:{bottom:{md:80},position:{md:"absolute"},textAlign:{xs:"center",md:"unset"}},children:[e.jsx(P,{component:"h1",variant:"h1",text:["Where","can we help you?"],variants:x({distance:24}).inRight,sx:{color:"common.white",[`& .${h.line}[data-index="0"]`]:{[`& .${h.word}[data-index="0"]`]:{color:"primary.main"}}}}),e.jsx(y.div,{variants:x().in,children:e.jsx(r,{fullWidth:!0,placeholder:"Search support...",InputProps:{startAdornment:e.jsx(T,{position:"start",children:e.jsx(l,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{mt:5,maxWidth:360,[`& .${c.root}`]:{bgcolor:"common.white"},[`& .${c.input}`]:{typography:"subtitle1"}}})})]})})})}function S(){return e.jsx("div",{children:C.map(s=>e.jsxs(k,{children:[e.jsx(W,{expandIcon:e.jsx(l,{icon:"eva:arrow-ios-downward-fill"}),children:e.jsx(n,{variant:"subtitle1",children:s.heading})}),e.jsx(D,{children:e.jsx(n,{children:s.detail})})]},s.id))})}function B(){return e.jsxs("div",{children:[e.jsx(n,{variant:"h4",children:"Haven't found the right help?"}),e.jsxs(i,{gap:3,display:"flex",flexDirection:"column",sx:{my:5},children:[e.jsx(r,{fullWidth:!0,label:"Name"}),e.jsx(r,{fullWidth:!0,label:"Email"}),e.jsx(r,{fullWidth:!0,label:"Subject"}),e.jsx(r,{fullWidth:!0,label:"Enter your message here.",multiline:!0,rows:4})]}),e.jsx(b,{size:"large",variant:"contained",children:"Submit"})]})}const m=[{label:"Managing your account",icon:`${t.site.basePath}/assets/icons/faqs/ic-account.svg`,href:"#"},{label:"Payment",icon:`${t.site.basePath}/assets/icons/faqs/ic-payment.svg`,href:"#"},{label:"Delivery",icon:`${t.site.basePath}/assets/icons/faqs/ic-delivery.svg`,href:"#"},{label:"Problem with the product",icon:`${t.site.basePath}/assets/icons/faqs/ic-package.svg`,href:"#"},{label:"Return & refund",icon:`${t.site.basePath}/assets/icons/faqs/ic-refund.svg`,href:"#"},{label:"Guarantees and assurances",icon:`${t.site.basePath}/assets/icons/faqs/ic-assurances.svg`,href:"#"}];function E(){const s=w(),o=e.jsxs(e.Fragment,{children:[e.jsx(i,{sx:{p:2,top:0,left:0,width:1,position:"absolute",display:{xs:"block",md:"none"},borderBottom:a=>`solid 1px ${a.vars.palette.divider}`},children:e.jsx(b,{startIcon:e.jsx(l,{icon:"solar:list-bold"}),onClick:s.onTrue,children:"Categories"})}),e.jsx(F,{open:s.value,onClose:s.onFalse,children:e.jsx(i,{gap:1,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",sx:{p:1},children:m.map(a=>e.jsx(H,{category:a},a.label))})})]}),f=e.jsx(i,{gap:3,display:{xs:"none",md:"grid"},gridTemplateColumns:{md:"repeat(3, 1fr)",lg:"repeat(6, 1fr)"},children:m.map(a=>e.jsx(G,{category:a},a.label))});return e.jsxs(e.Fragment,{children:[o,f]})}function G({category:s}){const o=p();return e.jsxs(q,{variant:"outlined",sx:{p:3,borderRadius:2,bgcolor:"unset",cursor:"pointer",textAlign:"center","&:hover":{bgcolor:"background.paper",boxShadow:o.customShadows.z20}},children:[e.jsx(j,{alt:s.icon,src:s.icon,sx:{mb:2,width:80,height:80,mx:"auto"}}),e.jsx(n,{variant:"subtitle2",sx:{...A({line:2,persistent:o.typography.subtitle2})},children:s.label})]})}function H({category:s}){return e.jsxs($,{sx:{py:2,maxWidth:140,borderRadius:1,textAlign:"center",alignItems:"center",typography:"subtitle2",flexDirection:"column",justifyContent:"center",bgcolor:"background.neutral"},children:[e.jsx(j,{alt:s.icon,src:s.icon,sx:{width:48,height:48,mb:1}}),s.label]},s.label)}function M(){return e.jsxs(e.Fragment,{children:[e.jsx(R,{}),e.jsxs(u,{sx:{pb:10,pt:{xs:10,md:15},position:"relative"},children:[e.jsx(E,{}),e.jsx(n,{variant:"h3",sx:{my:{xs:5,md:10}},children:"Frequently asked questions"}),e.jsxs(i,{gap:10,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(S,{}),e.jsx(B,{})]})]})]})}const L={title:`Faqs - ${t.site.name}`};function ie(){return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsxs("title",{children:[" ",L.title]})}),e.jsx(M,{})]})}export{ie as default};
