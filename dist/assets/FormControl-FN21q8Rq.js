import{b4 as _,b3 as q,aw as I,aA as d,az as z,r as s,aC as $,aD as w,bD as F,j as N,b6 as k,aE as G,aF as H}from"./index-CIoKvMHn.js";import{i as J,a as R}from"./utils-DoM3o7-Q.js";function K(e){return _("MuiFormControl",e)}q("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const O=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],Q=e=>{const{classes:t,margin:l,fullWidth:i}=e,r={root:["root",l!=="none"&&`margin${z(l)}`,i&&"fullWidth"]};return H(r,K,t)},V=I("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>d({},t.root,t[`margin${z(e.margin)}`],e.fullWidth&&t.fullWidth)})(({ownerState:e})=>d({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),Z=s.forwardRef(function(t,l){const i=$({props:t,name:"MuiFormControl"}),{children:r,className:D,color:u="primary",component:x="div",disabled:n=!1,error:m=!1,focused:v,fullWidth:c=!1,hiddenLabel:f=!1,margin:P="none",required:p=!1,size:g="medium",variant:C="outlined"}=i,U=w(i,O),b=d({},i,{color:u,component:x,disabled:n,error:m,fullWidth:c,hiddenLabel:f,margin:P,required:p,size:g,variant:C}),B=Q(b),[W,L]=s.useState(()=>{let a=!1;return r&&s.Children.forEach(r,o=>{if(!F(o,["Input","Select"]))return;const A=F(o,["Select"])?o.props.input:o;A&&J(A.props)&&(a=!0)}),a}),[S,E]=s.useState(()=>{let a=!1;return r&&s.Children.forEach(r,o=>{F(o,["Input","Select"])&&(R(o.props,!0)||R(o.props.inputProps,!0))&&(a=!0)}),a}),[y,h]=s.useState(!1);n&&y&&h(!1);const M=v!==void 0&&!n?v:y;let j;const T=s.useMemo(()=>({adornedStart:W,setAdornedStart:L,color:u,disabled:n,error:m,filled:S,focused:M,fullWidth:c,hiddenLabel:f,size:g,onBlur:()=>{h(!1)},onEmpty:()=>{E(!1)},onFilled:()=>{E(!0)},onFocus:()=>{h(!0)},registerEffect:j,required:p,variant:C}),[W,u,n,m,S,M,c,f,j,p,g,C]);return N.jsx(k.Provider,{value:T,children:N.jsx(V,d({as:x,ownerState:b,className:G(B.root,D),ref:l},U,{children:r}))})});export{Z as F};
