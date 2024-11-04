import{aw as R,bI as t,az as k,aA as d,r as v,aC as A,aD as D,b5 as S,T as L,j as p,aE as F,S as w,aF as M,bJ as z}from"./index-1iE_pzdz.js";import{f as I}from"./formControlState-Dq1zat_P.js";const U=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],W=o=>{const{classes:e,disabled:l,labelPlacement:n,error:a,required:r}=o,m={root:["root",l&&"disabled",`labelPlacement${k(n)}`,a&&"error",r&&"required"],label:["label",l&&"disabled"],asterisk:["asterisk",a&&"error"]};return M(m,z,e)},H=R("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:l}=o;return[{[`& .${t.label}`]:e.label},e.root,e[`labelPlacement${k(l.labelPlacement)}`]]}})(({theme:o,ownerState:e})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${t.disabled}`]:{cursor:"default"}},e.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},e.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},e.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${t.label}`]:{[`&.${t.disabled}`]:{color:(o.vars||o).palette.text.disabled}}})),J=R("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(o,e)=>e.asterisk})(({theme:o})=>({[`&.${t.error}`]:{color:(o.vars||o).palette.error.main}})),K=v.forwardRef(function(e,l){var n,a;const r=A({props:e,name:"MuiFormControlLabel"}),{className:m,componentsProps:$={},control:i,disabled:P,disableTypography:j,label:q,labelPlacement:N="end",required:C,slotProps:T={}}=r,E=D(r,U),b=S(),y=(n=P??i.props.disabled)!=null?n:b==null?void 0:b.disabled,u=C??i.props.required,x={disabled:y,required:u};["checked","name","onChange","value","inputRef"].forEach(c=>{typeof i.props[c]>"u"&&typeof r[c]<"u"&&(x[c]=r[c])});const _=I({props:r,muiFormControl:b,states:["error"]}),f=d({},r,{disabled:y,labelPlacement:N,required:u,error:_.error}),g=W(f),h=(a=T.typography)!=null?a:$.typography;let s=q;return s!=null&&s.type!==L&&!j&&(s=p.jsx(L,d({component:"span"},h,{className:F(g.label,h==null?void 0:h.className),children:s}))),p.jsxs(H,d({className:F(g.root,m),ownerState:f,ref:l},E,{children:[v.cloneElement(i,x),u?p.jsxs(w,{display:"block",children:[s,p.jsxs(J,{ownerState:f,"aria-hidden":!0,className:g.asterisk,children:[" ","*"]})]}):s]}))});export{K as F};
