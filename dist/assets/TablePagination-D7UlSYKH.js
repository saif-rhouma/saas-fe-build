import{r as z,aD as X,bm as st,l as F,j as e,aA as s,b3 as nt,b4 as at,aw as P,e6 as lt,aS as it,aC as rt,ba as Q,aE as D,bv as ct,aF as ut}from"./index-dnffYGPF.js";import{a as pt,K as dt}from"./KeyboardArrowRight-RY7Zbvek.js";import{F as bt,L as gt}from"./LastPage-fSUI9YMj.js";import{T as G}from"./TableCell-BayvW16s.js";import{S as Bt}from"./Select-C4D05hWU.js";import{b as mt}from"./InputBase-yFOqp3RP.js";const Pt=["backIconButtonProps","count","disabled","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton","slots","slotProps"],ht=z.forwardRef(function(o,B){var R,h,y,$,k,M,x,u;const{backIconButtonProps:A,count:I,disabled:f=!1,getItemAriaLabel:p,nextIconButtonProps:E,onPageChange:v,page:a,rowsPerPage:b,showFirstButton:g,showLastButton:T,slots:d={},slotProps:n={}}=o,H=X(o,Pt),l=st(),U=m=>{v(m,0)},K=m=>{v(m,a-1)},L=m=>{v(m,a+1)},i=m=>{v(m,Math.max(0,Math.ceil(I/b)-1))},r=(R=d.firstButton)!=null?R:F,S=(h=d.lastButton)!=null?h:F,w=(y=d.nextButton)!=null?y:F,_=($=d.previousButton)!=null?$:F,C=(k=d.firstButtonIcon)!=null?k:bt,N=(M=d.lastButtonIcon)!=null?M:gt,c=(x=d.nextButtonIcon)!=null?x:pt,W=(u=d.previousButtonIcon)!=null?u:dt,Y=l?S:r,Z=l?w:_,O=l?_:w,tt=l?r:S,ot=l?n.lastButton:n.firstButton,q=l?n.nextButton:n.previousButton,J=l?n.previousButton:n.nextButton,et=l?n.firstButton:n.lastButton;return e.jsxs("div",s({ref:B},H,{children:[g&&e.jsx(Y,s({onClick:U,disabled:f||a===0,"aria-label":p("first",a),title:p("first",a)},ot,{children:l?e.jsx(N,s({},n.lastButtonIcon)):e.jsx(C,s({},n.firstButtonIcon))})),e.jsx(Z,s({onClick:K,disabled:f||a===0,color:"inherit","aria-label":p("previous",a),title:p("previous",a)},q??A,{children:l?e.jsx(c,s({},n.nextButtonIcon)):e.jsx(W,s({},n.previousButtonIcon))})),e.jsx(O,s({onClick:L,disabled:f||(I!==-1?a>=Math.ceil(I/b)-1:!1),color:"inherit","aria-label":p("next",a),title:p("next",a)},J??E,{children:l?e.jsx(W,s({},n.previousButtonIcon)):e.jsx(c,s({},n.nextButtonIcon))})),T&&e.jsx(tt,s({onClick:i,disabled:f||a>=Math.ceil(I/b)-1,"aria-label":p("last",a),title:p("last",a)},et,{children:l?e.jsx(C,s({},n.firstButtonIcon)):e.jsx(N,s({},n.lastButtonIcon))}))]}))});function xt(t){return at("MuiTablePagination",t)}const j=nt("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]);var V;const It=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","disabled","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton","slotProps","slots"],ft=P(G,{name:"MuiTablePagination",slot:"Root",overridesResolver:(t,o)=>o.root})(({theme:t})=>({overflow:"auto",color:(t.vars||t).palette.text.primary,fontSize:t.typography.pxToRem(14),"&:last-child":{padding:0}})),vt=P(lt,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(t,o)=>s({[`& .${j.actions}`]:o.actions},o.toolbar)})(({theme:t})=>({minHeight:52,paddingRight:2,[`${t.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[t.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${j.actions}`]:{flexShrink:0,marginLeft:20}})),Rt=P("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(t,o)=>o.spacer})({flex:"1 1 100%"}),Tt=P("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(t,o)=>o.selectLabel})(({theme:t})=>s({},t.typography.body2,{flexShrink:0})),Lt=P(Bt,{name:"MuiTablePagination",slot:"Select",overridesResolver:(t,o)=>s({[`& .${j.selectIcon}`]:o.selectIcon,[`& .${j.select}`]:o.select},o.input,o.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${j.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),St=P(it,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(t,o)=>o.menuItem})({}),wt=P("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(t,o)=>o.displayedRows})(({theme:t})=>s({},t.typography.body2,{flexShrink:0}));function Ct({from:t,to:o,count:B}){return`${t}–${o} of ${B!==-1?B:`more than ${o}`}`}function jt(t){return`Go to ${t} page`}const yt=t=>{const{classes:o}=t;return ut({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},xt,o)},Ft=z.forwardRef(function(o,B){var R;const h=rt({props:o,name:"MuiTablePagination"}),{ActionsComponent:y=ht,backIconButtonProps:$,className:k,colSpan:M,component:x=G,count:u,disabled:A=!1,getItemAriaLabel:I=jt,labelDisplayedRows:f=Ct,labelRowsPerPage:p="Rows per page:",nextIconButtonProps:E,onPageChange:v,onRowsPerPageChange:a,page:b,rowsPerPage:g,rowsPerPageOptions:T=[10,25,50,100],SelectProps:d={},showFirstButton:n=!1,showLastButton:H=!1,slotProps:l={},slots:U={}}=h,K=X(h,It),L=h,i=yt(L),r=(R=l==null?void 0:l.select)!=null?R:d,S=r.native?"option":St;let w;(x===G||x==="td")&&(w=M||1e3);const _=Q(r.id),C=Q(r.labelId),N=()=>u===-1?(b+1)*g:g===-1?u:Math.min(u,(b+1)*g);return e.jsx(ft,s({colSpan:w,ref:B,as:x,ownerState:L,className:D(i.root,k)},K,{children:e.jsxs(vt,{className:i.toolbar,children:[e.jsx(Rt,{className:i.spacer}),T.length>1&&e.jsx(Tt,{className:i.selectLabel,id:C,children:p}),T.length>1&&e.jsx(Lt,s({variant:"standard"},!r.variant&&{input:V||(V=e.jsx(mt,{}))},{value:g,onChange:a,id:_,labelId:C},r,{classes:s({},r.classes,{root:D(i.input,i.selectRoot,(r.classes||{}).root),select:D(i.select,(r.classes||{}).select),icon:D(i.selectIcon,(r.classes||{}).icon)}),disabled:A,children:T.map(c=>z.createElement(S,s({},!ct(S)&&{ownerState:L},{className:i.menuItem,key:c.label?c.label:c,value:c.value?c.value:c}),c.label?c.label:c))})),e.jsx(wt,{className:i.displayedRows,children:f({from:u===0?0:b*g+1,to:N(),count:u===-1?-1:u,page:b})}),e.jsx(y,{className:i.actions,backIconButtonProps:$,count:u,nextIconButtonProps:E,onPageChange:v,page:b,rowsPerPage:g,showFirstButton:n,showLastButton:H,slotProps:l.actions,slots:U.actions,getItemAriaLabel:I,disabled:A})]})}))});export{Ft as T,j as t};
