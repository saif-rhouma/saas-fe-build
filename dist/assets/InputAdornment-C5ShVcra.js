import{b3 as y,b4 as C,aw as A,aA as c,r as b,aC as I,aD as j,b5 as L,j as i,b6 as z,aE as R,T,az as m,aF as F}from"./index-BRWSQhLj.js";function $(e){return C("MuiInputAdornment",e)}const x=y("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var g;const M=["children","className","component","disablePointerEvents","disableTypography","position","variant"],N=(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${m(n.position)}`],n.disablePointerEvents===!0&&t.disablePointerEvents,t[n.variant]]},U=e=>{const{classes:t,disablePointerEvents:n,hiddenLabel:o,position:s,size:r,variant:l}=e,d={root:["root",n&&"disablePointerEvents",s&&`position${m(s)}`,l,o&&"hiddenLabel",r&&`size${m(r)}`]};return F(d,$,t)},_=A("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:N})(({theme:e,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},t.variant==="filled"&&{[`&.${x.positionStart}&:not(.${x.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),S=b.forwardRef(function(t,n){const o=I({props:t,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:d=!1,disableTypography:f=!1,position:u,variant:v}=o,E=j(o,M),a=L()||{};let p=v;v&&a.variant,a&&!p&&(p=a.variant);const h=c({},o,{hiddenLabel:a.hiddenLabel,size:a.size,disablePointerEvents:d,position:u,variant:p}),P=U(h);return i.jsx(z.Provider,{value:null,children:i.jsx(_,c({as:l,ownerState:h,className:R(P.root,r),ref:n},E,{children:typeof s=="string"&&!f?i.jsx(T,{color:"text.secondary",children:s}):i.jsxs(b.Fragment,{children:[u==="start"?g||(g=i.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})});export{S as I};
