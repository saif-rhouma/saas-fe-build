import{bt as b,bu as T,aQ as v,aT as x,aU as c,r as z,aW as F,aX as C,b$ as H,j as m,aY as q,aZ as R}from"./index-CGa_Q6Py.js";import{f as j}from"./formControlState-Dq1zat_P.js";function y(e){return T("MuiFormHelperText",e)}const u=b("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var f;const M=["children","className","component","disabled","error","filled","focused","margin","required","variant"],U=e=>{const{classes:r,contained:o,size:t,disabled:a,error:l,filled:i,focused:n,required:d}=e,s={root:["root",a&&"disabled",l&&"error",t&&`size${x(t)}`,o&&"contained",n&&"focused",i&&"filled",d&&"required"]};return R(s,y,r)},$=v("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,o.size&&r[`size${x(o.size)}`],o.contained&&r.contained,o.filled&&r.filled]}})(({theme:e,ownerState:r})=>c({color:(e.vars||e).palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${u.disabled}`]:{color:(e.vars||e).palette.text.disabled},[`&.${u.error}`]:{color:(e.vars||e).palette.error.main}},r.size==="small"&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})),_=z.forwardRef(function(r,o){const t=F({props:r,name:"MuiFormHelperText"}),{children:a,className:l,component:i="p"}=t,n=C(t,M),d=H(),s=j({props:t,muiFormControl:d,states:["variant","size","disabled","error","filled","focused","required"]}),p=c({},t,{component:i,contained:s.variant==="filled"||s.variant==="outlined",variant:s.variant,size:s.size,disabled:s.disabled,error:s.error,filled:s.filled,focused:s.focused,required:s.required}),g=U(p);return m.jsx($,c({as:i,ownerState:p,className:q(g.root,l),ref:o},n,{children:a===" "?f||(f=m.jsx("span",{className:"notranslate",children:"​"})):a}))});export{_ as F,u as f};
