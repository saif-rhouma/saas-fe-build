import{aU as I,aY as a,r,a_ as x,a$ as p,de as u,j as d,b0 as f,b1 as g,eW as L}from"./index-C2cM-DBs.js";const v=["className"],C=s=>{const{alignItems:t,classes:e}=s;return g({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},L,e)},R=I("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:e}=s;return[t.root,e.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:s,ownerState:t})=>a({minWidth:56,color:(s.vars||s).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),h=r.forwardRef(function(t,e){const o=x({props:t,name:"MuiListItemIcon"}),{className:i}=o,l=p(o,v),c=r.useContext(u),n=a({},o,{alignItems:c.alignItems}),m=C(n);return d.jsx(R,a({className:f(m.root,i),ownerState:n,ref:e},l))});export{h as L};
