import{aO as I,aS as a,r,aU as x,aV as p,cQ as u,j as d,aW as f,aX as g,eo as L}from"./index-Cs0Sdxyr.js";const S=["className"],v=s=>{const{alignItems:t,classes:e}=s;return g({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},L,e)},C=I("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:e}=s;return[t.root,e.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:s,ownerState:t})=>a({minWidth:56,color:(s.vars||s).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),h=r.forwardRef(function(t,e){const o=x({props:t,name:"MuiListItemIcon"}),{className:i}=o,c=p(o,S),l=r.useContext(u),n=a({},o,{alignItems:l.alignItems}),m=v(n);return d.jsx(C,a({className:f(m.root,i),ownerState:n,ref:e},c))});export{h as L};