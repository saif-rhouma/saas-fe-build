import{bl as q,bk as D,aO as I,aS as d,aR as A,r as s,aU as $,aV as k,bU as F,j,bn as O,aW as V,aX as X}from"./index-CBaC8EHo.js";import{i as w,a as N}from"./utils-DoM3o7-Q.js";function G(e){return q("MuiFormControl",e)}D("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const H=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],J=e=>{const{classes:t,margin:l,fullWidth:i}=e,r={root:["root",l!=="none"&&`margin${A(l)}`,i&&"fullWidth"]};return X(r,G,t)},K=I("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:e},t)=>d({},t.root,t[`margin${A(e.margin)}`],e.fullWidth&&t.fullWidth)})(({ownerState:e})=>d({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},e.margin==="normal"&&{marginTop:16,marginBottom:8},e.margin==="dense"&&{marginTop:8,marginBottom:4},e.fullWidth&&{width:"100%"})),Z=s.forwardRef(function(t,l){const i=$({props:t,name:"MuiFormControl"}),{children:r,className:P,color:u="primary",component:x="div",disabled:n=!1,error:m=!1,focused:v,fullWidth:c=!1,hiddenLabel:f=!1,margin:z="none",required:p=!1,size:g="medium",variant:h="outlined"}=i,B=k(i,H),b=d({},i,{color:u,component:x,disabled:n,error:m,fullWidth:c,hiddenLabel:f,margin:z,required:p,size:g,variant:h}),L=J(b),[W,T]=s.useState(()=>{let a=!1;return r&&s.Children.forEach(r,o=>{if(!F(o,["Input","Select"]))return;const U=F(o,["Select"])?o.props.input:o;U&&w(U.props)&&(a=!0)}),a}),[S,y]=s.useState(()=>{let a=!1;return r&&s.Children.forEach(r,o=>{F(o,["Input","Select"])&&(N(o.props,!0)||N(o.props.inputProps,!0))&&(a=!0)}),a}),[E,C]=s.useState(!1);n&&E&&C(!1);const M=v!==void 0&&!n?v:E;let R;const _=s.useMemo(()=>({adornedStart:W,setAdornedStart:T,color:u,disabled:n,error:m,filled:S,focused:M,fullWidth:c,hiddenLabel:f,size:g,onBlur:()=>{C(!1)},onEmpty:()=>{y(!1)},onFilled:()=>{y(!0)},onFocus:()=>{C(!0)},registerEffect:R,required:p,variant:h}),[W,u,n,m,S,M,c,f,R,p,g,h]);return j.jsx(O.Provider,{value:_,children:j.jsx(K,d({as:x,ownerState:b,className:V(L.root,P),ref:l},B,{children:r}))})});export{Z as F};
