import{aS as I,aW as a,r,aY as x,aZ as p,dc as u,j as d,a_ as f,a$ as g,eK as L}from"./index-Bm3rBIkL.js";const S=["className"],v=s=>{const{alignItems:t,classes:e}=s;return g({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},L,e)},C=I("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:e}=s;return[t.root,e.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:s,ownerState:t})=>a({minWidth:56,color:(s.vars||s).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),h=r.forwardRef(function(t,e){const o=x({props:t,name:"MuiListItemIcon"}),{className:i}=o,c=p(o,S),l=r.useContext(u),n=a({},o,{alignItems:l.alignItems}),m=v(n);return d.jsx(C,a({className:f(m.root,i),ownerState:n,ref:e},c))});export{h as L};
