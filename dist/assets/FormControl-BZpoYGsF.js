import{bu as q,bt as D,aQ as I,aU as u,aT as A,r as s,aW as $,aX as Q,ch as F,j as R,c0 as X,aY as Y,aZ as Z}from"./index-yGbCRgTb.js";import{i as k,a as U}from"./utils-DoM3o7-Q.js";function w(e){return q("MuiFormControl",e)}D("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const G=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],H=e=>{const{classes:o,margin:l,fullWidth:i}=e,r={root:["root",l!=="none"&&`margin${A(l)}`,i&&"fullWidth"]};return Z(r,w,o)},J=I("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},o)=>u({},o.root,o[`margin${A(e.margin)}`],e.fullWidth&&o.fullWidth)})(({ownerState:e})=>u({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),V=s.forwardRef(function(o,l){const i=$({props:o,name:"MuiFormControl"}),{children:r,className:P,color:d="primary",component:x="div",disabled:n=!1,error:m=!1,focused:v,fullWidth:c=!1,hiddenLabel:f=!1,margin:T="none",required:p=!1,size:g="medium",variant:h="outlined"}=i,z=Q(i,G),W=u({},i,{color:d,component:x,disabled:n,error:m,fullWidth:c,hiddenLabel:f,margin:T,required:p,size:g,variant:h}),B=H(W),[b,L]=s.useState(()=>{let a=!1;return r&&s.Children.forEach(r,t=>{if(!F(t,["Input","Select"]))return;const N=F(t,["Select"])?t.props.input:t;N&&k(N.props)&&(a=!0)}),a}),[S,y]=s.useState(()=>{let a=!1;return r&&s.Children.forEach(r,t=>{F(t,["Input","Select"])&&(U(t.props,!0)||U(t.props.inputProps,!0))&&(a=!0)}),a}),[E,C]=s.useState(!1);n&&E&&C(!1);const M=v!==void 0&&!n?v:E;let j;const _=s.useMemo(()=>({adornedStart:b,setAdornedStart:L,color:d,disabled:n,error:m,filled:S,focused:M,fullWidth:c,hiddenLabel:f,size:g,onBlur:()=>{C(!1)},onEmpty:()=>{y(!1)},onFilled:()=>{y(!0)},onFocus:()=>{C(!0)},registerEffect:j,required:p,variant:h}),[b,d,n,m,S,M,c,f,j,p,g,h]);return R.jsx(X.Provider,{value:_,children:R.jsx(J,u({as:x,ownerState:W,className:Y(B.root,P),ref:l},z,{children:r}))})});export{V as F};
