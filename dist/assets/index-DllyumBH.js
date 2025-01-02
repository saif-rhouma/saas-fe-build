import{o as b,T as j,y as u,r as T,D as w,E as M,j as e,F as O,G as I,b6 as S,v as E,p as R,I as l,H as N,C as P}from"./index-3kUlxXkm.js";import{C as F}from"./custom-breadcrumbs-CQM3hT8w.js";import{C as L}from"./component-hero-RFDbpPq-.js";import{a as r}from"./component-block-CUfVkdMs.js";import{S as A}from"./component-template-BkTUr3s-.js";import{f as C,g as D,h as H,T as a,a as c,b as m,c as x,d,e as p}from"./TimelineSeparator-BQ7rZigk.js";import"./CardHeader-Dma4zJfI.js";import"./CardContent-BFrBBvcq.js";const U=["className"],_=n=>{const{position:o,classes:t}=n,s={root:["root",C(o)]};return I(s,H,t)},B=b(j,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:t}=n;return[o.root,o[C(t.position)]]}})(({ownerState:n})=>u({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},n.position==="left"&&{textAlign:"left"})),y=T.forwardRef(function(o,t){const s=w({props:o,name:"MuiTimelineOppositeContent"}),{className:h}=s,k=M(s,U),{position:g}=T.useContext(D),f=u({},s,{position:g||"left"}),v=_(f);return e.jsx(B,u({component:"div",className:O(v.root,h),ownerState:f,ref:t},k))});y.muiName="TimelineOppositeContent";const i=[{key:1,title:"Default",des:"Morbi mattis ullamcorper",time:"09:30 am",icon:e.jsx(l,{icon:"eva:folder-add-fill",width:24})},{key:2,title:"Primary",des:"Morbi mattis ullamcorper",time:"10:00 am",color:"primary",icon:e.jsx(l,{icon:"eva:image-2-fill",width:24})},{key:3,title:"Secondary",des:"Morbi mattis ullamcorper",time:"10:00 am",color:"secondary",icon:e.jsx(l,{icon:"eva:pantone-fill",width:24})},{key:4,title:"Info",des:"Morbi mattis ullamcorper",time:"10:30 am",color:"info",icon:e.jsx(l,{icon:"eva:tv-fill",width:24})},{key:5,title:"Success",des:"Morbi mattis ullamcorper",time:"11:00 am",color:"success",icon:e.jsx(l,{icon:"eva:activity-fill",width:24})},{key:6,title:"Warning",des:"Morbi mattis ullamcorper",time:"11:30 am",color:"warning",icon:e.jsx(l,{icon:"eva:cube-fill",width:24})},{key:7,title:"Error",des:"Morbi mattis ullamcorper",time:"12:00 am",color:"error",icon:e.jsx(l,{icon:"eva:film-fill",width:24})}];function G(){const n=i[i.length-1].key,o=i.slice(i.length-3),t=[{name:"Left",component:e.jsx(r,{children:e.jsx(a,{position:"left",children:o.map(s=>e.jsxs(c,{children:[e.jsxs(m,{children:[e.jsx(x,{}),n===s.key?null:e.jsx(d,{})]}),e.jsx(p,{children:s.title})]},s.key))})})},{name:"Right",component:e.jsx(r,{children:e.jsx(a,{position:"right",children:o.map(s=>e.jsxs(c,{children:[e.jsxs(m,{children:[e.jsx(x,{}),n===s.key?null:e.jsx(d,{})]}),e.jsx(p,{children:s.title})]},s.key))})})},{name:"Alternating",component:e.jsx(r,{children:e.jsx(a,{position:"alternate",children:o.map(s=>e.jsxs(c,{children:[e.jsxs(m,{children:[e.jsx(x,{}),n===s.key?null:e.jsx(d,{})]}),e.jsx(p,{children:s.title})]},s.key))})})},{name:"Filled",component:e.jsx(r,{children:e.jsx(a,{position:"alternate",children:i.map(s=>e.jsxs(c,{children:[e.jsxs(m,{children:[e.jsx(x,{color:s.color}),n===s.key?null:e.jsx(d,{})]}),e.jsx(p,{children:s.title})]},s.key))})})},{name:"Outlined",component:e.jsx(r,{children:e.jsx(a,{position:"alternate",children:i.map(s=>e.jsxs(c,{children:[e.jsxs(m,{children:[e.jsx(x,{variant:"outlined",color:s.color}),n===s.key?null:e.jsx(d,{})]}),e.jsx(p,{children:s.title})]},s.key))})})},{name:"Opposite content",component:e.jsx(r,{children:e.jsx(a,{position:"alternate",children:i.map(s=>e.jsxs(c,{children:[e.jsx(y,{children:e.jsx(j,{sx:{color:"text.secondary"},children:s.time})}),e.jsxs(m,{children:[e.jsx(x,{color:s.color}),n===s.key?null:e.jsx(d,{})]}),e.jsx(p,{children:e.jsxs(j,{children:[" ",s.title]})})]},s.key))})})},{name:"Customized",component:e.jsx(r,{children:e.jsx(a,{position:"alternate",children:i.map(s=>e.jsxs(c,{children:[e.jsx(y,{children:e.jsx(j,{variant:"body2",sx:{color:"text.secondary"},children:s.time})}),e.jsxs(m,{children:[e.jsx(x,{color:s.color,children:s.icon}),e.jsx(d,{})]}),e.jsx(p,{children:e.jsxs(S,{sx:{p:3,bgcolor:h=>E(h.vars.palette.grey["500Channel"],.12)},children:[e.jsx(j,{variant:"subtitle2",children:s.title}),e.jsx(j,{variant:"body2",sx:{color:"text.secondary"},children:s.des})]})})]},s.key))})})}];return e.jsxs(e.Fragment,{children:[e.jsx(L,{children:e.jsx(F,{heading:"Timeline",links:[{name:"Components",href:R.components},{name:"Timeline"}],moreLink:["https://mui.com/components/timeline"]})}),e.jsx(A,{data:t})]})}const V={title:`Timeline | MUI - ${P.site.name}`};function Y(){return e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsxs("title",{children:[" ",V.title]})}),e.jsx(G,{})]})}export{Y as default};
