import{bk as y,bl as C,aO as I,aS as c,r as b,aU as A,aV as j,bm as L,j as i,bn as R,aW as z,T,aR as m,aX as U}from"./index-BUrqGYHV.js";function $(n){return C("MuiInputAdornment",n)}const x=y("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var g;const F=["children","className","component","disablePointerEvents","disableTypography","position","variant"],M=(n,t)=>{const{ownerState:e}=n;return[t.root,t[`position${m(e.position)}`],e.disablePointerEvents===!0&&t.disablePointerEvents,t[e.variant]]},N=n=>{const{classes:t,disablePointerEvents:e,hiddenLabel:o,position:s,size:r,variant:l}=n,d={root:["root",e&&"disablePointerEvents",s&&`position${m(s)}`,l,o&&"hiddenLabel",r&&`size${m(r)}`]};return U(d,$,t)},S=I("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:M})(({theme:n,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},t.variant==="filled"&&{[`&.${x.positionStart}&:not(.${x.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),w=b.forwardRef(function(t,e){const o=A({props:t,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:d=!1,disableTypography:f=!1,position:u,variant:v}=o,E=j(o,F),a=L()||{};let p=v;v&&a.variant,a&&!p&&(p=a.variant);const h=c({},o,{hiddenLabel:a.hiddenLabel,size:a.size,disablePointerEvents:d,position:u,variant:p}),P=N(h);return i.jsx(R.Provider,{value:null,children:i.jsx(S,c({as:l,ownerState:h,className:z(P.root,r),ref:e},E,{children:typeof s=="string"&&!f?i.jsx(T,{color:"text.secondary",children:s}):i.jsxs(b.Fragment,{children:[u==="start"?g||(g=i.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})});export{w as I};