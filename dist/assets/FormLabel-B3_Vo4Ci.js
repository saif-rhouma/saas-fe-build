import{b3 as F,b4 as x,aw as b,aA as i,r as y,aC as C,aD as L,b5 as v,j as m,aE as q,az as k,aF as g}from"./index-7GQe5F-6.js";import{f as R}from"./formControlState-Dq1zat_P.js";function j(r){return x("MuiFormLabel",r)}const t=F("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),M=["children","className","color","component","disabled","error","filled","focused","required"],$=r=>{const{classes:o,color:d,focused:s,disabled:c,error:a,filled:l,required:n}=r,u={root:["root",`color${k(d)}`,c&&"disabled",a&&"error",l&&"filled",s&&"focused",n&&"required"],asterisk:["asterisk",a&&"error"]};return g(u,j,o)},N=b("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:r},o)=>i({},o.root,r.color==="secondary"&&o.colorSecondary,r.filled&&o.filled)})(({theme:r,ownerState:o})=>i({color:(r.vars||r).palette.text.secondary},r.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${t.focused}`]:{color:(r.vars||r).palette[o.color].main},[`&.${t.disabled}`]:{color:(r.vars||r).palette.text.disabled},[`&.${t.error}`]:{color:(r.vars||r).palette.error.main}})),U=b("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(r,o)=>o.asterisk})(({theme:r})=>({[`&.${t.error}`]:{color:(r.vars||r).palette.error.main}})),S=y.forwardRef(function(o,d){const s=C({props:o,name:"MuiFormLabel"}),{children:c,className:a,component:l="label"}=s,n=L(s,M),u=v(),e=R({props:s,muiFormControl:u,states:["color","required","focused","disabled","error","filled"]}),p=i({},s,{color:e.color||"primary",component:l,disabled:e.disabled,error:e.error,filled:e.filled,focused:e.focused,required:e.required}),f=$(p);return m.jsxs(N,i({as:l,ownerState:p,className:q(f.root,a),ref:d},n,{children:[c,e.required&&m.jsxs(U,{ownerState:p,"aria-hidden":!0,className:f.asterisk,children:[" ","*"]})]}))});export{S as F,t as f};
