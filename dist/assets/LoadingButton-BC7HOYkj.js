import{aO as h,e as C,bp as i,aS as d,aR as l,r as x,bq as E,br as R,aU as y,aV as j,bs as W,j as g,aX as z,bt as M}from"./index-Cs0Sdxyr.js";import{C as U}from"./CircularProgress-DjaT2AqC.js";const _=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],F=n=>{const{loading:o,loadingPosition:t,classes:r}=n,c={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${l(t)}`],endIcon:[o&&`endIconLoading${l(t)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${l(t)}`]},a=z(c,M,r);return d({},r,a)},k=n=>n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"&&n!=="classes",q=h(C,{shouldForwardProp:n=>k(n)||n==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,o)=>[o.root,o.startIconLoadingStart&&{[`& .${i.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${i.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:n,theme:o})=>d({[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},n.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${i.loading}`]:{color:"transparent"}},n.loadingPosition==="start"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},n.loadingPosition==="end"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),G=h("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,o)=>{const{ownerState:t}=n;return[o.loadingIndicator,o[`loadingIndicator${l(t.loadingPosition)}`]]}})(({theme:n,ownerState:o})=>d({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),T=x.forwardRef(function(o,t){const r=x.useContext(E),c=R(r,o),a=y({props:c,name:"MuiLoadingButton"}),{children:u,disabled:I=!1,id:$,loading:e=!1,loadingIndicator:p,loadingPosition:B="center",variant:L="text"}=a,m=j(a,_),P=W($),v=p??g.jsx(U,{"aria-labelledby":P,color:"inherit",size:16}),s=d({},a,{disabled:I,loading:e,loadingIndicator:v,loadingPosition:B,variant:L}),b=F(s),f=e?g.jsx(G,{className:b.loadingIndicator,ownerState:s,children:v}):null;return g.jsxs(q,d({disabled:I||e,id:P,ref:t},m,{variant:L,classes:b,ownerState:s,children:[s.loadingPosition==="end"?u:f,s.loadingPosition==="end"?f:u]}))});export{T as L};
