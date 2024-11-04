import{aw as z,ax as F,ay as R,az as c,aA as i,aB as v,r as k,aC as w,aD as $,j as y,aE as g,aF as N,aG as V}from"./index-1iE_pzdz.js";const W=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],_=o=>{const{color:a,variant:s,classes:r,size:l}=o,t={root:["root",s,`size${c(l)}`,a==="inherit"?"colorInherit":a]},d=N(t,V,r);return i({},r,d)},j=z(F,{name:"MuiFab",slot:"Root",shouldForwardProp:o=>R(o)||o==="classes",overridesResolver:(o,a)=>{const{ownerState:s}=o;return[a.root,a[s.variant],a[`size${c(s.size)}`],s.color==="inherit"&&a.colorInherit,a[c(s.size)],a[s.color]]}})(({theme:o,ownerState:a})=>{var s,r;return i({},o.typography.button,{minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(o.vars||o).zIndex.fab,boxShadow:(o.vars||o).shadows[6],"&:active":{boxShadow:(o.vars||o).shadows[12]},color:o.vars?o.vars.palette.text.primary:(s=(r=o.palette).getContrastText)==null?void 0:s.call(r,o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],"&:hover":{backgroundColor:(o.vars||o).palette.grey.A100,"@media (hover: none)":{backgroundColor:(o.vars||o).palette.grey[300]},textDecoration:"none"},[`&.${v.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]}},a.size==="small"&&{width:40,height:40},a.size==="medium"&&{width:48,height:48},a.variant==="extended"&&{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},a.variant==="extended"&&a.size==="small"&&{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34},a.variant==="extended"&&a.size==="medium"&&{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40},a.color==="inherit"&&{color:"inherit"})},({theme:o,ownerState:a})=>i({},a.color!=="inherit"&&a.color!=="default"&&(o.vars||o).palette[a.color]!=null&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main,"&:hover":{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}}),({theme:o})=>({[`&.${v.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}})),I=k.forwardRef(function(a,s){const r=w({props:a,name:"MuiFab"}),{children:l,className:t,color:d="default",component:e="button",disabled:u=!1,disableFocusRipple:p=!1,focusVisibleClassName:x,size:h="large",variant:C="circular"}=r,f=$(r,W),b=i({},r,{color:d,component:e,disabled:u,disableFocusRipple:p,size:h,variant:C}),n=_(b);return y.jsx(j,i({className:g(n.root,t),component:e,disabled:u,focusRipple:!p,focusVisibleClassName:g(n.focusVisible,x),ownerState:b,ref:s},f,{classes:n,children:l}))});export{I as F};
