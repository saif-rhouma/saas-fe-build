import{bT as b,bU as T,aS as v,aV as x,aW as c,r as z,aY as F,aZ as C,bV as H,j as m,a_ as q,a$ as R}from"./index-C-IhHuTJ.js";import{f as j}from"./formControlState-Dq1zat_P.js";function y(e){return T("MuiFormHelperText",e)}const u=b("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var f;const M=["children","className","component","disabled","error","filled","focused","margin","required","variant"],U=e=>{const{classes:r,contained:o,size:a,disabled:t,error:l,filled:i,focused:n,required:d}=e,s={root:["root",t&&"disabled",l&&"error",a&&`size${x(a)}`,o&&"contained",n&&"focused",i&&"filled",d&&"required"]};return R(s,y,r)},_=v("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,o.size&&r[`size${x(o.size)}`],o.contained&&r.contained,o.filled&&r.filled]}})(({theme:e,ownerState:r})=>c({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${u.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${u.error}`]:{color:(e.vars||e).palette.error.main}},r.size==="small"&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})),N=z.forwardRef(function(r,o){const a=F({props:r,name:"MuiFormHelperText"}),{children:t,className:l,component:i="p"}=a,n=C(a,M),d=H(),s=j({props:a,muiFormControl:d,states:["variant","size","disabled","error","filled","focused","required"]}),p=c({},a,{component:i,contained:s.variant==="filled"||s.variant==="outlined",variant:s.variant,size:s.size,disabled:s.disabled,error:s.error,filled:s.filled,focused:s.focused,required:s.required}),g=U(p);return m.jsx(_,c({as:i,ownerState:p,className:q(g.root,l),ref:o},n,{children:t===" "?f||(f=m.jsx("span",{className:"notranslate",children:"​"})):t}))});export{N as F,u as f};
