import{aQ as b,T as j,aU as u,r as T,aW as w,aX as M,j as e,aY as O,aZ as I,az as S,v as R,p as E,I as l,H as N,C as P}from"./index-MIl7JRte.js";import{C as L}from"./custom-breadcrumbs-BPBIAp3F.js";import{C as A}from"./component-hero-BH5eVpU-.js";import{a as r}from"./component-block-CvefYYew.js";import{S as F}from"./component-template-CP99etRA.js";import{f as C,g as U,h as D,T as a,a as c,b as m,c as x,d,e as p}from"./TimelineSeparator-Bj5zLIuj.js";import"./CardHeader-CbPTXCsG.js";import"./CardContent-CZuVVI_6.js";const H=["className"],W=n=>{const{position:o,classes:t}=n,s={root:["root",C(o)]};return I(s,D,t)},_=b(j,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(n,o)=>{const{ownerState:t}=n;return[o.root,o[C(t.position)]]}})(({ownerState:n})=>u({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},n.position==="left"&&{textAlign:"left"})),y=T.forwardRef(function(o,t){const s=w({props:o,name:"MuiTimelineOppositeContent"}),{className:h}=s,k=M(s,H),{position:g}=T.useContext(U),f=u({},s,{position:g||"left"}),v=W(f);return e.jsx(_,u({component:"div",className:O(v.root,h),ownerState:f,ref:t},k))});y.muiName="TimelineOppositeContent";const i=[{key:1,title:"Default",des:"Morbi mattis ullamcorper",time:"09:30 am",icon:e.jsx(l,{icon:"eva:folder-add-fill",width:24})},{key:2,title:"Primary",des:"Morbi mattis ullamcorper",time:"10:00 am",color:"primary",icon:e.jsx(l,{icon:"eva:image-2-fill",width:24})},{key:3,title:"Secondary",des:"Morbi mattis ullamcorper",time:"10:00 am",color:"secondary",icon:e.jsx(l,{icon:"eva:pantone-fill",width:24})},{key:4,title:"Info",des:"Morbi mattis ullamcorper",time:"10:30 am",color:"info",icon:e.jsx(l,{icon:"eva:tv-fill",width:24})},{key:5,title:"Success",des:"Morbi mattis ullamcorper",time:"11:00 am",color:"success",icon:e.jsx(l,{icon:"eva:activity-fill",width:24})},{key:6,title:"Warning",des:"Morbi mattis ullamcorper",time:"11:30 am",color:"warning",icon:e.jsx(l,{icon:"eva:cube-fill",width:24})},{key:7,title:"Error",des:"Morbi mattis ullamcorper",time:"12:00 am",color:"error",icon:e.jsx(l,{icon:"eva:film-fill",width:24})}];function z(){const n=i[i.length-1].key,o=i.slice(i.length-3),t=[{name:"Left",component:e.jsx(r,{children:e.jsx(a,{position:"left",children:o.map(s=>e.jsxs(c,{children:[e.jsxs(m,{children:[e.jsx(x,{}),n===s.key?null:e.jsx(d,{})]}),e.jsx(p,{children:s.title})]},s.key))})})},{name:"Right",component:e.jsx(r,{children:e.jsx(a,{position:"right",children:o.map(s=>e.jsxs(c,{children:[e.jsxs(m,{children:[e.jsx(x,{}),n===s.key?null:e.jsx(d,{})]}),e.jsx(p,{children:s.title})]},s.key))})})},{name:"Alternating",component:e.jsx(r,{children:e.jsx(a,{position:"alternate",children:o.map(s=>e.jsxs(c,{children:[e.jsxs(m,{children:[e.jsx(x,{}),n===s.key?null:e.jsx(d,{})]}),e.jsx(p,{children:s.title})]},s.key))})})},{name:"Filled",component:e.jsx(r,{children:e.jsx(a,{position:"alternate",children:i.map(s=>e.jsxs(c,{children:[e.jsxs(m,{children:[e.jsx(x,{color:s.color}),n===s.key?null:e.jsx(d,{})]}),e.jsx(p,{children:s.title})]},s.key))})})},{name:"Outlined",component:e.jsx(r,{children:e.jsx(a,{position:"alternate",children:i.map(s=>e.jsxs(c,{children:[e.jsxs(m,{children:[e.jsx(x,{variant:"outlined",color:s.color}),n===s.key?null:e.jsx(d,{})]}),e.jsx(p,{children:s.title})]},s.key))})})},{name:"Opposite content",component:e.jsx(r,{children:e.jsx(a,{position:"alternate",children:i.map(s=>e.jsxs(c,{children:[e.jsx(y,{children:e.jsx(j,{sx:{color:"text.secondary"},children:s.time})}),e.jsxs(m,{children:[e.jsx(x,{color:s.color}),n===s.key?null:e.jsx(d,{})]}),e.jsx(p,{children:e.jsxs(j,{children:[" ",s.title]})})]},s.key))})})},{name:"Customized",component:e.jsx(r,{children:e.jsx(a,{position:"alternate",children:i.map(s=>e.jsxs(c,{children:[e.jsx(y,{children:e.jsx(j,{variant:"body2",sx:{color:"text.secondary"},children:s.time})}),e.jsxs(m,{children:[e.jsx(x,{color:s.color,children:s.icon}),e.jsx(d,{})]}),e.jsx(p,{children:e.jsxs(S,{sx:{p:3,bgcolor:h=>R(h.vars.palette.grey["500Channel"],.12)},children:[e.jsx(j,{variant:"subtitle2",children:s.title}),e.jsx(j,{variant:"body2",sx:{color:"text.secondary"},children:s.des})]})})]},s.key))})})}];return e.jsxs(e.Fragment,{children:[e.jsx(A,{children:e.jsx(L,{heading:"Timeline",links:[{name:"Components",href:E.components},{name:"Timeline"}],moreLink:["https://mui.com/components/timeline"]})}),e.jsx(F,{data:t})]})}const B={title:`Timeline | MUI - ${P.site.name}`};function J(){return e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsxs("title",{children:[" ",B.title]})}),e.jsx(z,{})]})}export{J as default};
