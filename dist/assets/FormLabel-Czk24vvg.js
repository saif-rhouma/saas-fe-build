import{bt as F,bu as x,aQ as b,aU as i,r as y,aW as L,aX as v,b$ as C,j as m,aY as q,aT as k,aZ as g}from"./index-MU8Aef1d.js";import{f as R}from"./formControlState-Dq1zat_P.js";function $(r){return x("MuiFormLabel",r)}const t=F("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),j=["children","className","color","component","disabled","error","filled","focused","required"],M=r=>{const{classes:o,color:d,focused:s,disabled:c,error:a,filled:l,required:n}=r,u={root:["root",`color${k(d)}`,c&&"disabled",a&&"error",l&&"filled",s&&"focused",n&&"required"],asterisk:["asterisk",a&&"error"]};return g(u,$,o)},U=b("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:r},o)=>i({},o.root,r.color==="secondary"&&o.colorSecondary,r.filled&&o.filled)})(({theme:r,ownerState:o})=>i({color:(r.vars||r).palette.text.secondary},r.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${t.focused}`]:{color:(r.vars||r).palette[o.color].main},[`&.${t.disabled}`]:{color:(r.vars||r).palette.text.disabled},[`&.${t.error}`]:{color:(r.vars||r).palette.error.main}})),N=b("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(r,o)=>o.asterisk})(({theme:r})=>({[`&.${t.error}`]:{color:(r.vars||r).palette.error.main}})),A=y.forwardRef(function(o,d){const s=L({props:o,name:"MuiFormLabel"}),{children:c,className:a,component:l="label"}=s,n=v(s,j),u=C(),e=R({props:s,muiFormControl:u,states:["color","required","focused","disabled","error","filled"]}),p=i({},s,{color:e.color||"primary",component:l,disabled:e.disabled,error:e.error,filled:e.filled,focused:e.focused,required:e.required}),f=M(p);return m.jsxs(U,i({as:l,ownerState:p,className:q(f.root,a),ref:d},n,{children:[c,e.required&&m.jsxs(N,{ownerState:p,"aria-hidden":!0,className:f.asterisk,children:[" ","*"]})]}))});export{A as F,t as f};
