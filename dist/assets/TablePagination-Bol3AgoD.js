import{r as G,a$ as Q,bA as st,y as F,ev as nt,ew as at,j as e,aY as s,bV as lt,bW as it,aU as P,ex as rt,bL as ct,a_ as ut,by as q,b0 as D,c9 as pt,b1 as dt}from"./index-DxrsDIwY.js";import{F as bt,L as gt}from"./LastPage-Ct_4tubK.js";import{T as K}from"./TableCell-CJNt5t20.js";import{S as Bt}from"./Select-eQVewVvt.js";import{b as mt}from"./InputBase-B9Lf9cs-.js";const Pt=["backIconButtonProps","count","disabled","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton","slots","slotProps"],ht=G.forwardRef(function(o,B){var R,h,j,$,k,M,x,u;const{backIconButtonProps:_,count:I,disabled:f=!1,getItemAriaLabel:p,nextIconButtonProps:U,onPageChange:v,page:a,rowsPerPage:b,showFirstButton:g,showLastButton:L,slots:d={},slotProps:n={}}=o,H=Q(o,Pt),l=st(),E=m=>{v(m,0)},z=m=>{v(m,a-1)},T=m=>{v(m,a+1)},i=m=>{v(m,Math.max(0,Math.ceil(I/b)-1))},r=(R=d.firstButton)!=null?R:F,w=(h=d.lastButton)!=null?h:F,S=(j=d.nextButton)!=null?j:F,A=($=d.previousButton)!=null?$:F,y=(k=d.firstButtonIcon)!=null?k:bt,N=(M=d.lastButtonIcon)!=null?M:gt,c=(x=d.nextButtonIcon)!=null?x:nt,W=(u=d.previousButtonIcon)!=null?u:at,X=l?w:r,Z=l?S:A,O=l?A:S,tt=l?r:w,ot=l?n.lastButton:n.firstButton,V=l?n.nextButton:n.previousButton,Y=l?n.previousButton:n.nextButton,et=l?n.firstButton:n.lastButton;return e.jsxs("div",s({ref:B},H,{children:[g&&e.jsx(X,s({onClick:E,disabled:f||a===0,"aria-label":p("first",a),title:p("first",a)},ot,{children:l?e.jsx(N,s({},n.lastButtonIcon)):e.jsx(y,s({},n.firstButtonIcon))})),e.jsx(Z,s({onClick:z,disabled:f||a===0,color:"inherit","aria-label":p("previous",a),title:p("previous",a)},V??_,{children:l?e.jsx(c,s({},n.nextButtonIcon)):e.jsx(W,s({},n.previousButtonIcon))})),e.jsx(O,s({onClick:T,disabled:f||(I!==-1?a>=Math.ceil(I/b)-1:!1),color:"inherit","aria-label":p("next",a),title:p("next",a)},Y??U,{children:l?e.jsx(W,s({},n.previousButtonIcon)):e.jsx(c,s({},n.nextButtonIcon))})),L&&e.jsx(tt,s({onClick:i,disabled:f||a>=Math.ceil(I/b)-1,"aria-label":p("last",a),title:p("last",a)},et,{children:l?e.jsx(y,s({},n.firstButtonIcon)):e.jsx(N,s({},n.lastButtonIcon))}))]}))});function xt(t){return it("MuiTablePagination",t)}const C=lt("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]);var J;const It=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","disabled","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton","slotProps","slots"],ft=P(K,{name:"MuiTablePagination",slot:"Root",overridesResolver:(t,o)=>o.root})(({theme:t})=>({overflow:"auto",color:(t.vars||t).palette.text.primary,fontSize:t.typography.pxToRem(14),"&:last-child":{padding:0}})),vt=P(rt,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(t,o)=>s({[`& .${C.actions}`]:o.actions},o.toolbar)})(({theme:t})=>({minHeight:52,paddingRight:2,[`${t.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[t.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${C.actions}`]:{flexShrink:0,marginLeft:20}})),Rt=P("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(t,o)=>o.spacer})({flex:"1 1 100%"}),Lt=P("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(t,o)=>o.selectLabel})(({theme:t})=>s({},t.typography.body2,{flexShrink:0})),Tt=P(Bt,{name:"MuiTablePagination",slot:"Select",overridesResolver:(t,o)=>s({[`& .${C.selectIcon}`]:o.selectIcon,[`& .${C.select}`]:o.select},o.input,o.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${C.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),wt=P(ct,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(t,o)=>o.menuItem})({}),St=P("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(t,o)=>o.displayedRows})(({theme:t})=>s({},t.typography.body2,{flexShrink:0}));function yt({from:t,to:o,count:B}){return`${t}–${o} of ${B!==-1?B:`more than ${o}`}`}function Ct(t){return`Go to ${t} page`}const jt=t=>{const{classes:o}=t;return dt({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},xt,o)},Nt=G.forwardRef(function(o,B){var R;const h=ut({props:o,name:"MuiTablePagination"}),{ActionsComponent:j=ht,backIconButtonProps:$,className:k,colSpan:M,component:x=K,count:u,disabled:_=!1,getItemAriaLabel:I=Ct,labelDisplayedRows:f=yt,labelRowsPerPage:p="Rows per page:",nextIconButtonProps:U,onPageChange:v,onRowsPerPageChange:a,page:b,rowsPerPage:g,rowsPerPageOptions:L=[10,25,50,100],SelectProps:d={},showFirstButton:n=!1,showLastButton:H=!1,slotProps:l={},slots:E={}}=h,z=Q(h,It),T=h,i=jt(T),r=(R=l==null?void 0:l.select)!=null?R:d,w=r.native?"option":wt;let S;(x===K||x==="td")&&(S=M||1e3);const A=q(r.id),y=q(r.labelId),N=()=>u===-1?(b+1)*g:g===-1?u:Math.min(u,(b+1)*g);return e.jsx(ft,s({colSpan:S,ref:B,as:x,ownerState:T,className:D(i.root,k)},z,{children:e.jsxs(vt,{className:i.toolbar,children:[e.jsx(Rt,{className:i.spacer}),L.length>1&&e.jsx(Lt,{className:i.selectLabel,id:y,children:p}),L.length>1&&e.jsx(Tt,s({variant:"standard"},!r.variant&&{input:J||(J=e.jsx(mt,{}))},{value:g,onChange:a,id:A,labelId:y},r,{classes:s({},r.classes,{root:D(i.input,i.selectRoot,(r.classes||{}).root),select:D(i.select,(r.classes||{}).select),icon:D(i.selectIcon,(r.classes||{}).icon)}),disabled:_,children:L.map(c=>G.createElement(w,s({},!pt(w)&&{ownerState:T},{className:i.menuItem,key:c.label?c.label:c,value:c.value?c.value:c}),c.label?c.label:c))})),e.jsx(St,{className:i.displayedRows,children:f({from:u===0?0:b*g+1,to:N(),count:u===-1?-1:u,page:b})}),e.jsx(j,{className:i.actions,backIconButtonProps:$,count:u,nextIconButtonProps:U,onPageChange:v,page:b,rowsPerPage:g,showFirstButton:n,showLastButton:H,slotProps:l.actions,slots:E.actions,getItemAriaLabel:I,disabled:_})]})}))});export{Nt as T,C as t};
