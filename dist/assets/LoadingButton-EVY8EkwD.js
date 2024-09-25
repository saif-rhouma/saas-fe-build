import{aQ as b,e as C,c1 as i,aU as d,aT as l,r as h,c2 as E,c3 as y,aW as R,aX as j,bF as W,j as g,aZ as z,c4 as F}from"./index-D9XQ5HZn.js";import{C as M}from"./CircularProgress-Cg-Vm1oQ.js";const U=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],_=n=>{const{loading:o,loadingPosition:t,classes:r}=n,c={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${l(t)}`],endIcon:[o&&`endIconLoading${l(t)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${l(t)}`]},a=z(c,F,r);return d({},r,a)},T=n=>n!=="ownerState"&&n!=="theme"&&n!=="sx"&&n!=="as"&&n!=="classes",k=b(C,{shouldForwardProp:n=>T(n)||n==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,o)=>[o.root,o.startIconLoadingStart&&{[`& .${i.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${i.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:n,theme:o})=>d({[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},n.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${i.loading}`]:{color:"transparent"}},n.loadingPosition==="start"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},n.loadingPosition==="end"&&n.fullWidth&&{[`& .${i.startIconLoadingStart}, & .${i.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),G=b("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,o)=>{const{ownerState:t}=n;return[o.loadingIndicator,o[`loadingIndicator${l(t.loadingPosition)}`]]}})(({theme:n,ownerState:o})=>d({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(n.vars||n).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),X=h.forwardRef(function(o,t){const r=h.useContext(E),c=y(r,o),a=R({props:c,name:"MuiLoadingButton"}),{children:u,disabled:I=!1,id:$,loading:e=!1,loadingIndicator:L,loadingPosition:B="center",variant:p="text"}=a,m=j(a,U),P=W($),v=L??g.jsx(M,{"aria-labelledby":P,color:"inherit",size:16}),s=d({},a,{disabled:I,loading:e,loadingIndicator:v,loadingPosition:B,variant:p}),f=_(s),x=e?g.jsx(G,{className:f.loadingIndicator,ownerState:s,children:v}):null;return g.jsxs(k,d({disabled:I||e,id:P,ref:t},m,{variant:p,classes:f,ownerState:s,children:[s.loadingPosition==="end"?u:x,s.loadingPosition==="end"?x:u]}))});export{X as L};
