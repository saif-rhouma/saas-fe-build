import{ak as v,al as z,o as F,x,y as c,r as T,D as b,E as C,am as H,j as p,F as q,G as R}from"./index-BrVky5Gg.js";import{f as y}from"./formControlState-Dq1zat_P.js";function j(e){return z("MuiFormHelperText",e)}const u=v("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var f;const M=["children","className","component","disabled","error","filled","focused","margin","required","variant"],h=e=>{const{classes:r,contained:s,size:t,disabled:a,error:l,filled:i,focused:n,required:d}=e,o={root:["root",a&&"disabled",l&&"error",t&&`size${x(t)}`,s&&"contained",n&&"focused",i&&"filled",d&&"required"]};return R(o,j,r)},N=F("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,s.size&&r[`size${x(s.size)}`],s.contained&&r.contained,s.filled&&r.filled]}})(({theme:e,ownerState:r})=>c({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${u.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${u.error}`]:{color:(e.vars||e).palette.error.main}},r.size==="small"&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})),$=T.forwardRef(function(r,s){const t=b({props:r,name:"MuiFormHelperText"}),{children:a,className:l,component:i="p"}=t,n=C(t,M),d=H(),o=y({props:t,muiFormControl:d,states:["variant","size","disabled","error","filled","focused","required"]}),m=c({},t,{component:i,contained:o.variant==="filled"||o.variant==="outlined",variant:o.variant,size:o.size,disabled:o.disabled,error:o.error,filled:o.filled,focused:o.focused,required:o.required}),g=h(m);return p.jsx(N,c({as:i,ownerState:m,className:q(g.root,l),ref:s},n,{children:a===" "?f||(f=p.jsx("span",{className:"notranslate",children:"​"})):a}))});export{$ as F,u as f};
