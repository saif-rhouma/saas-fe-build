import{aw as h,e as C,b7 as i,aA as d,az as l,r as x,b8 as E,b9 as y,aC as R,aD as j,ba as z,j as g,aF as W,bb as F}from"./index-CeoumMXa.js";import{C as M}from"./CircularProgress-jqseK15W.js";const _=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],U=n=>{const{loading:o,loadingPosition:t,classes:r}=n,c={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${l(t)}`],endIcon:[o&&`endIconLoading${l(t)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${l(t)}`]},a=W(c,F,r);return d({},r,a)},k=n=>n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"&&n!=="classes",A=h(C,{shouldForwardProp:n=>k(n)||n==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,o)=>[o.root,o.startIconLoadingStart&&{[`& .${i.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${i.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:n,theme:o})=>d({[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},n.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${i.loading}`]:{color:"transparent"}},n.loadingPosition==="start"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},n.loadingPosition==="end"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),D=h("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,o)=>{const{ownerState:t}=n;return[o.loadingIndicator,o[`loadingIndicator${l(t.loadingPosition)}`]]}})(({theme:n,ownerState:o})=>d({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),T=x.forwardRef(function(o,t){const r=x.useContext(E),c=y(r,o),a=R({props:c,name:"MuiLoadingButton"}),{children:u,disabled:I=!1,id:$,loading:e=!1,loadingIndicator:L,loadingPosition:B="center",variant:p="text"}=a,m=j(a,_),P=z($),b=L??g.jsx(M,{"aria-labelledby":P,color:"inherit",size:16}),s=d({},a,{disabled:I,loading:e,loadingIndicator:b,loadingPosition:B,variant:p}),v=U(s),f=e?g.jsx(D,{className:v.loadingIndicator,ownerState:s,children:b}):null;return g.jsxs(A,d({disabled:I||e,id:P,ref:t},m,{variant:p,classes:v,ownerState:s,children:[s.loadingPosition==="end"?u:f,s.loadingPosition==="end"?f:u]}))});export{T as L};
