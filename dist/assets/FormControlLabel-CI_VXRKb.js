import{aO as F,bZ as t,aR as k,aS as d,r as v,aU as E,aV as A,bm as D,T as L,j as p,aW as R,S as M,aX as U,b_ as W}from"./index-Cb6aSJqI.js";import{f as w}from"./formControlState-Dq1zat_P.js";const z=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],H=o=>{const{classes:e,disabled:l,labelPlacement:n,error:a,required:r}=o,m={root:["root",l&&"disabled",`labelPlacement${k(n)}`,a&&"error",r&&"required"],label:["label",l&&"disabled"],asterisk:["asterisk",a&&"error"]};return U(m,W,e)},I=F("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:l}=o;return[{[`& .${t.label}`]:e.label},e.root,e[`labelPlacement${k(l.labelPlacement)}`]]}})(({theme:o,ownerState:e})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${t.disabled}`]:{cursor:"default"}},e.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},e.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},e.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${t.label}`]:{[`&.${t.disabled}`]:{color:(o.vars||o).palette.text.disabled}}})),O=F("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(o,e)=>e.asterisk})(({theme:o})=>({[`&.${t.error}`]:{color:(o.vars||o).palette.error.main}})),Z=v.forwardRef(function(e,l){var n,a;const r=E({props:e,name:"MuiFormControlLabel"}),{className:m,componentsProps:$={},control:i,disabled:P,disableTypography:j,label:q,labelPlacement:N="end",required:C,slotProps:T={}}=r,_=A(r,z),b=D(),y=(n=P??i.props.disabled)!=null?n:b==null?void 0:b.disabled,u=C??i.props.required,x={disabled:y,required:u};["checked","name","onChange","value","inputRef"].forEach(c=>{typeof i.props[c]>"u"&&typeof r[c]<"u"&&(x[c]=r[c])});const S=w({props:r,muiFormControl:b,states:["error"]}),f=d({},r,{disabled:y,labelPlacement:N,required:u,error:S.error}),g=H(f),h=(a=T.typography)!=null?a:$.typography;let s=q;return s!=null&&s.type!==L&&!j&&(s=p.jsx(L,d({component:"span"},h,{className:R(g.label,h==null?void 0:h.className),children:s}))),p.jsxs(I,d({className:R(g.root,m),ownerState:f,ref:l},_,{children:[v.cloneElement(i,x),u?p.jsxs(M,{display:"block",children:[s,p.jsxs(O,{ownerState:f,"aria-hidden":!0,className:g.asterisk,children:[" ","*"]})]}):s]}))});export{Z as F};
