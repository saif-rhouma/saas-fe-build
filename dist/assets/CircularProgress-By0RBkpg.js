import{bw as R,aO as x,aR as c,aS as o,bx as _,r as N,aU as w,aV as z,j as v,aW as E,aX as U,by as W}from"./index-oyszM3Nj.js";const F=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,b,P,S,$;const a=44,I=R(b||(b=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),K=R(P||(P=l`
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
`)),V=r=>{const{classes:s,variant:e,color:t,disableShrink:d}=r,u={root:["root",e,`color${c(t)}`],svg:["svg"],circle:["circle",`circle${c(e)}`,d&&"circleDisableShrink"]};return U(u,W,s)},B=x("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.root,s[e.variant],s[`color${c(e.color)}`]]}})(({ownerState:r,theme:s})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:s.transitions.create("transform")},r.color!=="inherit"&&{color:(s.vars||s).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&_(S||(S=l`
      animation: ${0} 1.4s linear infinite;
    `),I)),G=x("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,s)=>s.svg})({display:"block"}),L=x("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.circle,s[`circle${c(e.variant)}`],e.disableShrink&&s.circleDisableShrink]}})(({ownerState:r,theme:s})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:s.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&_($||($=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),K)),T=N.forwardRef(function(s,e){const t=w({props:s,name:"MuiCircularProgress"}),{className:d,color:u="primary",disableShrink:D=!1,size:p=40,style:j,thickness:i=3.6,value:h=0,variant:k="indeterminate"}=t,M=z(t,F),n=o({},t,{color:u,disableShrink:D,size:p,thickness:i,value:h,variant:k}),m=V(n),f={},g={},y={};if(k==="determinate"){const C=2*Math.PI*((a-i)/2);f.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(h),f.strokeDashoffset=`${((100-h)/100*C).toFixed(3)}px`,g.transform="rotate(-90deg)"}return v.jsx(B,o({className:E(m.root,d),style:o({width:p,height:p},g,j),ownerState:n,ref:e,role:"progressbar"},y,M,{children:v.jsx(G,{className:m.svg,ownerState:n,viewBox:`${a/2} ${a/2} ${a} ${a}`,children:v.jsx(L,{className:m.circle,style:f,ownerState:n,cx:a,cy:a,r:(a-i)/2,fill:"none",strokeWidth:i})})}))});export{T as C};
