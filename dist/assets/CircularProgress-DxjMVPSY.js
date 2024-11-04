import{bY as _,b6 as k,bl as c,bm as o,bZ as R,r as N,bo as w,bp as z,j as v,bq as E,br as F,b_ as I}from"./index-DT04UR_O.js";const K=["className","color","disableShrink","size","style","thickness","value","variant"];let l=r=>r,C,P,S,$;const t=44,U=_(C||(C=l`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),W=_(P||(P=l`
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
`)),Z=r=>{const{classes:s,variant:e,color:a,disableShrink:d}=r,p={root:["root",e,`color${c(a)}`],svg:["svg"],circle:["circle",`circle${c(e)}`,d&&"circleDisableShrink"]};return F(p,I,s)},q=k("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.root,s[e.variant],s[`color${c(e.color)}`]]}})(({ownerState:r,theme:s})=>o({display:"inline-block"},r.variant==="determinate"&&{transition:s.transitions.create("transform")},r.color!=="inherit"&&{color:(s.vars||s).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&R(S||(S=l`
      animation: ${0} 1.4s linear infinite;
    `),U)),B=k("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,s)=>s.svg})({display:"block"}),G=k("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,s)=>{const{ownerState:e}=r;return[s.circle,s[`circle${c(e.variant)}`],e.disableShrink&&s.circleDisableShrink]}})(({ownerState:r,theme:s})=>o({stroke:"currentColor"},r.variant==="determinate"&&{transition:s.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&R($||($=l`
      animation: ${0} 1.4s ease-in-out infinite;
    `),W)),T=N.forwardRef(function(s,e){const a=w({props:s,name:"MuiCircularProgress"}),{className:d,color:p="primary",disableShrink:D=!1,size:u=40,style:j,thickness:i=3.6,value:m=0,variant:x="indeterminate"}=a,M=z(a,K),n=o({},a,{color:p,disableShrink:D,size:u,thickness:i,value:m,variant:x}),h=Z(n),f={},g={},b={};if(x==="determinate"){const y=2*Math.PI*((t-i)/2);f.strokeDasharray=y.toFixed(3),b["aria-valuenow"]=Math.round(m),f.strokeDashoffset=`${((100-m)/100*y).toFixed(3)}px`,g.transform="rotate(-90deg)"}return v.jsx(q,o({className:E(h.root,d),style:o({width:u,height:u},g,j),ownerState:n,ref:e,role:"progressbar"},b,M,{children:v.jsx(B,{className:h.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:v.jsx(G,{className:h.circle,style:f,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})}))});export{T as C};
