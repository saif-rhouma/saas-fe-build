import{c2 as _,aU as k,aX as n,aY as o,c3 as R,r as N,a_ as w,a$ as z,j as v,b0 as E,b1 as U,c4 as F}from"./index-DxrsDIwY.js";const I=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,P,b,$,S;const a=44,K=_(P||(P=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),W=_(b||(b=l`
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
`)),B=r=>{const{classes:s,variant:e,color:t,disableShrink:d}=r,u={root:["root",e,`color${n(t)}`],svg:["svg"],circle:["circle",`circle${n(e)}`,d&&"circleDisableShrink"]};return U(u,F,s)},G=k("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.root,s[e.variant],s[`color${n(e.color)}`]]}})(({ownerState:r,theme:s})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:s.transitions.create("transform")},r.color!=="inherit"&&{color:(s.vars||s).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&R($||($=l`
      animation: ${0} 1.4s linear infinite;
    `),K)),L=k("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,s)=>s.svg})({display:"block"}),T=k("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.circle,s[`circle${n(e.variant)}`],e.disableShrink&&s.circleDisableShrink]}})(({ownerState:r,theme:s})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:s.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&R(S||(S=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),W)),X=N.forwardRef(function(s,e){const t=w({props:s,name:"MuiCircularProgress"}),{className:d,color:u="primary",disableShrink:D=!1,size:p=40,style:j,thickness:i=3.6,value:h=0,variant:x="indeterminate"}=t,M=z(t,I),c=o({},t,{color:u,disableShrink:D,size:p,thickness:i,value:h,variant:x}),m=B(c),f={},g={},y={};if(x==="determinate"){const C=2*Math.PI*((a-i)/2);f.strokeDasharray=C.toFixed(3),y["aria-valuenow"]=Math.round(h),f.strokeDashoffset=`${((100-h)/100*C).toFixed(3)}px`,g.transform="rotate(-90deg)"}return v.jsx(G,o({className:E(m.root,d),style:o({width:p,height:p},g,j),ownerState:c,ref:e,role:"progressbar"},y,M,{children:v.jsx(L,{className:m.svg,ownerState:c,viewBox:`${a/2} ${a/2} ${a} ${a}`,children:v.jsx(T,{className:m.circle,style:f,ownerState:c,cx:a,cy:a,r:(a-i)/2,fill:"none",strokeWidth:i})})}))});export{X as C};
