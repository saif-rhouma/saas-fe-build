import{b1 as b,b2 as v,au as z,ax as x,ay as c,r as T,aA as F,aB as C,b3 as H,j as m,aC as q,aD as R}from"./index-dT1vCng0.js";import{f as y}from"./formControlState-Dq1zat_P.js";function j(e){return v("MuiFormHelperText",e)}const u=b("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var f;const M=["children","className","component","disabled","error","filled","focused","margin","required","variant"],h=e=>{const{classes:r,contained:o,size:a,disabled:t,error:l,filled:i,focused:n,required:d}=e,s={root:["root",t&&"disabled",l&&"error",a&&`size${x(a)}`,o&&"contained",n&&"focused",i&&"filled",d&&"required"]};return R(s,j,r)},N=z("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,o.size&&r[`size${x(o.size)}`],o.contained&&r.contained,o.filled&&r.filled]}})(({theme:e,ownerState:r})=>c({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${u.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${u.error}`]:{color:(e.vars||e).palette.error.main}},r.size==="small"&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})),$=T.forwardRef(function(r,o){const a=F({props:r,name:"MuiFormHelperText"}),{children:t,className:l,component:i="p"}=a,n=C(a,M),d=H(),s=y({props:a,muiFormControl:d,states:["variant","size","disabled","error","filled","focused","required"]}),p=c({},a,{component:i,contained:s.variant==="filled"||s.variant==="outlined",variant:s.variant,size:s.size,disabled:s.disabled,error:s.error,filled:s.filled,focused:s.focused,required:s.required}),g=h(p);return m.jsx(N,c({as:i,ownerState:p,className:q(g.root,l),ref:o},n,{children:t===" "?f||(f=m.jsx("span",{className:"notranslate",children:"​"})):t}))});export{$ as F,u as f};
