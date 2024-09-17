import{aU as R,cm as t,aX as $,aY as d,r as v,a_ as S,a$ as A,bX as D,T as L,j as p,b0 as F,S as M,b1 as U,cn as w}from"./index-C2cM-DBs.js";import{f as W}from"./formControlState-Dq1zat_P.js";const X=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],z=o=>{const{classes:e,disabled:l,labelPlacement:n,error:a,required:r}=o,m={root:["root",l&&"disabled",`labelPlacement${$(n)}`,a&&"error",r&&"required"],label:["label",l&&"disabled"],asterisk:["asterisk",a&&"error"]};return U(m,w,e)},H=R("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:l}=o;return[{[`& .${t.label}`]:e.label},e.root,e[`labelPlacement${$(l.labelPlacement)}`]]}})(({theme:o,ownerState:e})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${t.disabled}`]:{cursor:"default"}},e.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},e.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},e.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${t.label}`]:{[`&.${t.disabled}`]:{color:(o.vars||o).palette.text.disabled}}})),I=R("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(o,e)=>e.asterisk})(({theme:o})=>({[`&.${t.error}`]:{color:(o.vars||o).palette.error.main}})),G=v.forwardRef(function(e,l){var n,a;const r=S({props:e,name:"MuiFormControlLabel"}),{className:m,componentsProps:k={},control:i,disabled:P,disableTypography:j,label:q,labelPlacement:N="end",required:C,slotProps:T={}}=r,_=A(r,X),b=D(),y=(n=P??i.props.disabled)!=null?n:b==null?void 0:b.disabled,u=C??i.props.required,x={disabled:y,required:u};["checked","name","onChange","value","inputRef"].forEach(c=>{typeof i.props[c]>"u"&&typeof r[c]<"u"&&(x[c]=r[c])});const E=W({props:r,muiFormControl:b,states:["error"]}),f=d({},r,{disabled:y,labelPlacement:N,required:u,error:E.error}),g=z(f),h=(a=T.typography)!=null?a:k.typography;let s=q;return s!=null&&s.type!==L&&!j&&(s=p.jsx(L,d({component:"span"},h,{className:F(g.label,h==null?void 0:h.className),children:s}))),p.jsxs(H,d({className:F(g.root,m),ownerState:f,ref:l},_,{children:[v.cloneElement(i,x),u?p.jsxs(M,{display:"block",children:[s,p.jsxs(I,{ownerState:f,"aria-hidden":!0,className:g.asterisk,children:[" ","*"]})]}):s]}))});export{G as F};
