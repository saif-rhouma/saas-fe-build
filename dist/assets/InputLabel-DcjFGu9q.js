import{aQ as u,aS as x,aU as e,r as h,aW as b,aX as k,b$ as v,j as z,aY as C,aT as I,aZ as L,cy as W}from"./index-BHptOA6I.js";import{f as g}from"./formControlState-Dq1zat_P.js";import{F as E,f as F}from"./FormLabel-2Wv0vqaq.js";const A=["disableAnimation","margin","shrink","variant","className"],P=a=>{const{classes:s,formControl:r,size:t,shrink:l,disableAnimation:c,variant:m,required:p}=a,o={root:["root",r&&"formControl",!c&&"animated",l&&"shrink",t&&t!=="normal"&&`size${I(t)}`,m],asterisk:[p&&"asterisk"]},n=L(o,W,s);return e({},s,n)},R=u(E,{shouldForwardProp:a=>x(a)||a==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(a,s)=>{const{ownerState:r}=a;return[{[`& .${F.asterisk}`]:s.asterisk},s.root,r.formControl&&s.formControl,r.size==="small"&&s.sizeSmall,r.shrink&&s.shrink,!r.disableAnimation&&s.animated,r.focused&&s.focused,s[r.variant]]}})(({theme:a,ownerState:s})=>e({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},s.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},s.size==="small"&&{transform:"translate(0, 17px) scale(1)"},s.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!s.disableAnimation&&{transition:a.transitions.create(["color","transform","max-width"],{duration:a.transitions.duration.shorter,easing:a.transitions.easing.easeOut})},s.variant==="filled"&&e({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},s.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},s.shrink&&e({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},s.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),s.variant==="outlined"&&e({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},s.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},s.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),N=h.forwardRef(function(s,r){const t=b({name:"MuiInputLabel",props:s}),{disableAnimation:l=!1,shrink:c,className:m}=t,p=k(t,A),o=v();let n=c;typeof n>"u"&&o&&(n=o.filled||o.focused||o.adornedStart);const i=g({props:t,muiFormControl:o,states:["size","variant","required","focused"]}),d=e({},t,{disableAnimation:l,formControl:o,shrink:n,size:i.size,variant:i.variant,required:i.required,focused:i.focused}),f=P(d);return z.jsx(R,e({"data-shrink":n,ownerState:d,ref:r,className:C(f.root,m)},p,{classes:f}))});export{N as I};
