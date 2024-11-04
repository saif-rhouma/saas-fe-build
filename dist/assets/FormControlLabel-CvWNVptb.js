import{b6 as R,cp as t,bl as q,bm as d,r as v,bo as S,bp as A,bO as D,T as L,j as p,bq as F,S as M,br as w,cq as U}from"./index-DT04UR_O.js";import{f as W}from"./formControlState-Dq1zat_P.js";const z=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],H=o=>{const{classes:e,disabled:l,labelPlacement:n,error:a,required:r}=o,m={root:["root",l&&"disabled",`labelPlacement${q(n)}`,a&&"error",r&&"required"],label:["label",l&&"disabled"],asterisk:["asterisk",a&&"error"]};return w(m,U,e)},I=R("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:l}=o;return[{[`& .${t.label}`]:e.label},e.root,e[`labelPlacement${q(l.labelPlacement)}`]]}})(({theme:o,ownerState:e})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${t.disabled}`]:{cursor:"default"}},e.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},e.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},e.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${t.label}`]:{[`&.${t.disabled}`]:{color:(o.vars||o).palette.text.disabled}}})),O=R("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(o,e)=>e.asterisk})(({theme:o})=>({[`&.${t.error}`]:{color:(o.vars||o).palette.error.main}})),J=v.forwardRef(function(e,l){var n,a;const r=S({props:e,name:"MuiFormControlLabel"}),{className:m,componentsProps:k={},control:i,disabled:P,disableTypography:$,label:j,labelPlacement:N="end",required:C,slotProps:T={}}=r,_=A(r,z),b=D(),y=(n=P??i.props.disabled)!=null?n:b==null?void 0:b.disabled,u=C??i.props.required,x={disabled:y,required:u};["checked","name","onChange","value","inputRef"].forEach(c=>{typeof i.props[c]>"u"&&typeof r[c]<"u"&&(x[c]=r[c])});const E=W({props:r,muiFormControl:b,states:["error"]}),f=d({},r,{disabled:y,labelPlacement:N,required:u,error:E.error}),g=H(f),h=(a=T.typography)!=null?a:k.typography;let s=j;return s!=null&&s.type!==L&&!$&&(s=p.jsx(L,d({component:"span"},h,{className:F(g.label,h==null?void 0:h.className),children:s}))),p.jsxs(I,d({className:F(g.root,m),ownerState:f,ref:l},_,{children:[v.cloneElement(i,x),u?p.jsxs(M,{display:"block",children:[s,p.jsxs(O,{ownerState:f,"aria-hidden":!0,className:g.asterisk,children:[" ","*"]})]}):s]}))});export{J as F};
