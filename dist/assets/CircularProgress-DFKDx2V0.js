import{bf as D,aw as k,az as c,aA as o,bg as R,r as N,aC as w,aD as z,j as v,aE as E,aF as F,bh as I}from"./index-KK-mXlr9.js";const K=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,b,P,S,$;const a=44,U=D(b||(b=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),W=D(P||(P=l`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),A=r=>{const{classes:s,variant:e,color:t,disableShrink:d}=r,u={root:["root",e,`color${c(t)}`],svg:["svg"],circle:["circle",`circle${c(e)}`,d&&"circleDisableShrink"]};return F(u,I,s)},B=k("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.root,s[e.variant],s[`color${c(e.color)}`]]}})(({ownerState:r,theme:s})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:s.transitions.create("transform")},r.color!=="inherit"&&{color:(s.vars||s).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&R(S||(S=l`
      animation: ${0} 1.4s linear infinite;
    `),U)),G=k("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,s)=>s.svg})({display:"block"}),L=k("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.circle,s[`circle${c(e.variant)}`],e.disableShrink&&s.circleDisableShrink]}})(({ownerState:r,theme:s})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:s.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&R($||($=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),W)),V=N.forwardRef(function(s,e){const t=w({props:s,name:"MuiCircularProgress"}),{className:d,color:u="primary",disableShrink:_=!1,size:h=40,style:j,thickness:i=3.6,value:p=0,variant:x="indeterminate"}=t,M=z(t,K),n=o({},t,{color:u,disableShrink:_,size:h,thickness:i,value:p,variant:x}),m=A(n),f={},g={},C={};if(x==="determinate"){const y=2*Math.PI*((a-i)/2);f.strokeDasharray=y.toFixed(3),C["aria-valuenow"]=Math.round(p),f.strokeDashoffset=`${((100-p)/100*y).toFixed(3)}px`,g.transform="rotate(-90deg)"}return v.jsx(B,o({className:E(m.root,d),style:o({width:h,height:h},g,j),ownerState:n,ref:e,role:"progressbar"},C,M,{children:v.jsx(G,{className:m.svg,ownerState:n,viewBox:`${a/2} ${a/2} ${a} ${a}`,children:v.jsx(L,{className:m.circle,style:f,ownerState:n,cx:a,cy:a,r:(a-i)/2,fill:"none",strokeWidth:i})})}))});export{V as C};
