import{bU as $,bT as q,aS as D,aW as d,aV as A,r as s,aY as I,aZ as V,cf as F,j as R,bW as Y,a_ as Z,a$ as k}from"./index-C-IhHuTJ.js";import{i as w,a as U}from"./utils-DoM3o7-Q.js";function G(e){return $("MuiFormControl",e)}q("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const H=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],J=e=>{const{classes:t,margin:l,fullWidth:i}=e,r={root:["root",l!=="none"&&`margin${A(l)}`,i&&"fullWidth"]};return k(r,G,t)},K=D("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>d({},t.root,t[`margin${A(e.margin)}`],e.fullWidth&&t.fullWidth)})(({ownerState:e})=>d({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),X=s.forwardRef(function(t,l){const i=I({props:t,name:"MuiFormControl"}),{children:r,className:P,color:u="primary",component:x="div",disabled:n=!1,error:m=!1,focused:v,fullWidth:c=!1,hiddenLabel:f=!1,margin:T="none",required:p=!1,size:g="medium",variant:h="outlined"}=i,_=V(i,H),W=d({},i,{color:u,component:x,disabled:n,error:m,fullWidth:c,hiddenLabel:f,margin:T,required:p,size:g,variant:h}),z=J(W),[b,B]=s.useState(()=>{let a=!1;return r&&s.Children.forEach(r,o=>{if(!F(o,["Input","Select"]))return;const N=F(o,["Select"])?o.props.input:o;N&&w(N.props)&&(a=!0)}),a}),[S,y]=s.useState(()=>{let a=!1;return r&&s.Children.forEach(r,o=>{F(o,["Input","Select"])&&(U(o.props,!0)||U(o.props.inputProps,!0))&&(a=!0)}),a}),[E,C]=s.useState(!1);n&&E&&C(!1);const M=v!==void 0&&!n?v:E;let j;const L=s.useMemo(()=>({adornedStart:b,setAdornedStart:B,color:u,disabled:n,error:m,filled:S,focused:M,fullWidth:c,hiddenLabel:f,size:g,onBlur:()=>{C(!1)},onEmpty:()=>{y(!1)},onFilled:()=>{y(!0)},onFocus:()=>{C(!0)},registerEffect:j,required:p,variant:h}),[b,u,n,m,S,M,c,f,j,p,g,h]);return R.jsx(Y.Provider,{value:L,children:R.jsx(K,d({as:x,ownerState:W,className:Z(z.root,P),ref:l},_,{children:r}))})});export{X as F};
