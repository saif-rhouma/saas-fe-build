import{bl as F,bm as x,aO as b,aS as i,r as y,aU as L,aV as v,bn as C,j as m,aW as q,aR as k,aX as R}from"./index-CDcUgrfM.js";import{f as g}from"./formControlState-Dq1zat_P.js";function j(r){return x("MuiFormLabel",r)}const t=F("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),M=["children","className","color","component","disabled","error","filled","focused","required"],U=r=>{const{classes:o,color:d,focused:s,disabled:c,error:a,filled:l,required:n}=r,u={root:["root",`color${k(d)}`,c&&"disabled",a&&"error",l&&"filled",s&&"focused",n&&"required"],asterisk:["asterisk",a&&"error"]};return R(u,j,o)},$=b("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:r},o)=>i({},o.root,r.color==="secondary"&&o.colorSecondary,r.filled&&o.filled)})(({theme:r,ownerState:o})=>i({color:(r.vars||r).palette.text.secondary},r.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${t.focused}`]:{color:(r.vars||r).palette[o.color].main},[`&.${t.disabled}`]:{color:(r.vars||r).palette.text.disabled},[`&.${t.error}`]:{color:(r.vars||r).palette.error.main}})),N=b("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(r,o)=>o.asterisk})(({theme:r})=>({[`&.${t.error}`]:{color:(r.vars||r).palette.error.main}})),A=y.forwardRef(function(o,d){const s=L({props:o,name:"MuiFormLabel"}),{children:c,className:a,component:l="label"}=s,n=v(s,M),u=C(),e=g({props:s,muiFormControl:u,states:["color","required","focused","disabled","error","filled"]}),p=i({},s,{color:e.color||"primary",component:l,disabled:e.disabled,error:e.error,filled:e.filled,focused:e.focused,required:e.required}),f=U(p);return m.jsxs($,i({as:l,ownerState:p,className:q(f.root,a),ref:d},n,{children:[c,e.required&&m.jsxs(N,{ownerState:p,"aria-hidden":!0,className:f.asterisk,children:[" ","*"]})]}))});export{A as F,t as f};
