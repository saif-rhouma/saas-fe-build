import{aw as I,aA as a,r,aC as x,aD as p,cD as u,j as d,aE as f,aF as g,ez as L}from"./index-CeoumMXa.js";const C=["className"],v=s=>{const{alignItems:t,classes:e}=s;return g({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},L,e)},R=I("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:e}=s;return[t.root,e.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:s,ownerState:t})=>a({minWidth:56,color:(s.vars||s).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),h=r.forwardRef(function(t,e){const o=x({props:t,name:"MuiListItemIcon"}),{className:i}=o,c=p(o,C),l=r.useContext(u),n=a({},o,{alignItems:l.alignItems}),m=v(n);return d.jsx(R,a({className:f(m.root,i),ownerState:n,ref:e},c))});export{h as L};
