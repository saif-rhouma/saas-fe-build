import{bt as y,bu as C,aQ as I,aU as c,r as b,aW as A,aX as j,b$ as L,j as i,c0 as T,aY as z,T as R,aT as m,aZ as $}from"./index-CcYGUVHj.js";function U(e){return C("MuiInputAdornment",e)}const x=y("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var g;const F=["children","className","component","disablePointerEvents","disableTypography","position","variant"],M=(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${m(n.position)}`],n.disablePointerEvents===!0&&t.disablePointerEvents,t[n.variant]]},N=e=>{const{classes:t,disablePointerEvents:n,hiddenLabel:o,position:s,size:r,variant:l}=e,d={root:["root",n&&"disablePointerEvents",s&&`position${m(s)}`,l,o&&"hiddenLabel",r&&`size${m(r)}`]};return $(d,U,t)},_=I("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:M})(({theme:e,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},t.variant==="filled"&&{[`&.${x.positionStart}&:not(.${x.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),w=b.forwardRef(function(t,n){const o=A({props:t,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:d=!1,disableTypography:f=!1,position:u,variant:v}=o,E=j(o,F),a=L()||{};let p=v;v&&a.variant,a&&!p&&(p=a.variant);const h=c({},o,{hiddenLabel:a.hiddenLabel,size:a.size,disablePointerEvents:d,position:u,variant:p}),P=N(h);return i.jsx(T.Provider,{value:null,children:i.jsx(_,c({as:l,ownerState:h,className:z(P.root,r),ref:n},E,{children:typeof s=="string"&&!f?i.jsx(R,{color:"text.secondary",children:s}):i.jsxs(b.Fragment,{children:[u==="start"?g||(g=i.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})});export{w as I};
