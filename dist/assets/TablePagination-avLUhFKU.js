import{r as z,aX as q,bv as st,w as F,j as e,aU as s,bt as nt,bu as at,aQ as P,et as lt,bR as it,aW as rt,bF as Y,aY as D,ca as ct,aZ as ut}from"./index-MU8Aef1d.js";import{a as pt,K as dt}from"./KeyboardArrowRight-M3vRdqef.js";import{F as bt,L as gt}from"./LastPage-D2lvtlx_.js";import{T as G}from"./TableCell-D2iXYdpM.js";import{S as Bt}from"./Select-DS35-lJ5.js";import{b as mt}from"./InputBase-D8sPk2Vu.js";const Pt=["backIconButtonProps","count","disabled","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton","slots","slotProps"],ht=z.forwardRef(function(o,B){var R,h,y,$,k,M,x,u;const{backIconButtonProps:_,count:I,disabled:f=!1,getItemAriaLabel:p,nextIconButtonProps:U,onPageChange:v,page:a,rowsPerPage:b,showFirstButton:g,showLastButton:T,slots:d={},slotProps:n={}}=o,H=q(o,Pt),l=st(),E=m=>{v(m,0)},K=m=>{v(m,a-1)},L=m=>{v(m,a+1)},i=m=>{v(m,Math.max(0,Math.ceil(I/b)-1))},r=(R=d.firstButton)!=null?R:F,w=(h=d.lastButton)!=null?h:F,S=(y=d.nextButton)!=null?y:F,A=($=d.previousButton)!=null?$:F,C=(k=d.firstButtonIcon)!=null?k:bt,N=(M=d.lastButtonIcon)!=null?M:gt,c=(x=d.nextButtonIcon)!=null?x:pt,W=(u=d.previousButtonIcon)!=null?u:dt,J=l?w:r,V=l?S:A,O=l?A:S,tt=l?r:w,ot=l?n.lastButton:n.firstButton,Q=l?n.nextButton:n.previousButton,X=l?n.previousButton:n.nextButton,et=l?n.firstButton:n.lastButton;return e.jsxs("div",s({ref:B},H,{children:[g&&e.jsx(J,s({onClick:E,disabled:f||a===0,"aria-label":p("first",a),title:p("first",a)},ot,{children:l?e.jsx(N,s({},n.lastButtonIcon)):e.jsx(C,s({},n.firstButtonIcon))})),e.jsx(V,s({onClick:K,disabled:f||a===0,color:"inherit","aria-label":p("previous",a),title:p("previous",a)},Q??_,{children:l?e.jsx(c,s({},n.nextButtonIcon)):e.jsx(W,s({},n.previousButtonIcon))})),e.jsx(O,s({onClick:L,disabled:f||(I!==-1?a>=Math.ceil(I/b)-1:!1),color:"inherit","aria-label":p("next",a),title:p("next",a)},X??U,{children:l?e.jsx(W,s({},n.previousButtonIcon)):e.jsx(c,s({},n.nextButtonIcon))})),T&&e.jsx(tt,s({onClick:i,disabled:f||a>=Math.ceil(I/b)-1,"aria-label":p("last",a),title:p("last",a)},et,{children:l?e.jsx(C,s({},n.firstButtonIcon)):e.jsx(N,s({},n.lastButtonIcon))}))]}))});function xt(t){return at("MuiTablePagination",t)}const j=nt("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]);var Z;const It=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","disabled","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton","slotProps","slots"],ft=P(G,{name:"MuiTablePagination",slot:"Root",overridesResolver:(t,o)=>o.root})(({theme:t})=>({overflow:"auto",color:(t.vars||t).palette.text.primary,fontSize:t.typography.pxToRem(14),"&:last-child":{padding:0}})),vt=P(lt,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(t,o)=>s({[`& .${j.actions}`]:o.actions},o.toolbar)})(({theme:t})=>({minHeight:52,paddingRight:2,[`${t.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[t.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${j.actions}`]:{flexShrink:0,marginLeft:20}})),Rt=P("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(t,o)=>o.spacer})({flex:"1 1 100%"}),Tt=P("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(t,o)=>o.selectLabel})(({theme:t})=>s({},t.typography.body2,{flexShrink:0})),Lt=P(Bt,{name:"MuiTablePagination",slot:"Select",overridesResolver:(t,o)=>s({[`& .${j.selectIcon}`]:o.selectIcon,[`& .${j.select}`]:o.select},o.input,o.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${j.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),wt=P(it,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(t,o)=>o.menuItem})({}),St=P("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(t,o)=>o.displayedRows})(({theme:t})=>s({},t.typography.body2,{flexShrink:0}));function Ct({from:t,to:o,count:B}){return`${t}–${o} of ${B!==-1?B:`more than ${o}`}`}function jt(t){return`Go to ${t} page`}const yt=t=>{const{classes:o}=t;return ut({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},xt,o)},Ft=z.forwardRef(function(o,B){var R;const h=rt({props:o,name:"MuiTablePagination"}),{ActionsComponent:y=ht,backIconButtonProps:$,className:k,colSpan:M,component:x=G,count:u,disabled:_=!1,getItemAriaLabel:I=jt,labelDisplayedRows:f=Ct,labelRowsPerPage:p="Rows per page:",nextIconButtonProps:U,onPageChange:v,onRowsPerPageChange:a,page:b,rowsPerPage:g,rowsPerPageOptions:T=[10,25,50,100],SelectProps:d={},showFirstButton:n=!1,showLastButton:H=!1,slotProps:l={},slots:E={}}=h,K=q(h,It),L=h,i=yt(L),r=(R=l==null?void 0:l.select)!=null?R:d,w=r.native?"option":wt;let S;(x===G||x==="td")&&(S=M||1e3);const A=Y(r.id),C=Y(r.labelId),N=()=>u===-1?(b+1)*g:g===-1?u:Math.min(u,(b+1)*g);return e.jsx(ft,s({colSpan:S,ref:B,as:x,ownerState:L,className:D(i.root,k)},K,{children:e.jsxs(vt,{className:i.toolbar,children:[e.jsx(Rt,{className:i.spacer}),T.length>1&&e.jsx(Tt,{className:i.selectLabel,id:C,children:p}),T.length>1&&e.jsx(Lt,s({variant:"standard"},!r.variant&&{input:Z||(Z=e.jsx(mt,{}))},{value:g,onChange:a,id:A,labelId:C},r,{classes:s({},r.classes,{root:D(i.input,i.selectRoot,(r.classes||{}).root),select:D(i.select,(r.classes||{}).select),icon:D(i.selectIcon,(r.classes||{}).icon)}),disabled:_,children:T.map(c=>z.createElement(w,s({},!ct(w)&&{ownerState:L},{className:i.menuItem,key:c.label?c.label:c,value:c.value?c.value:c}),c.label?c.label:c))})),e.jsx(St,{className:i.displayedRows,children:f({from:u===0?0:b*g+1,to:N(),count:u===-1?-1:u,page:b})}),e.jsx(y,{className:i.actions,backIconButtonProps:$,count:u,nextIconButtonProps:U,onPageChange:v,page:b,rowsPerPage:g,showFirstButton:n,showLastButton:H,slotProps:l.actions,slots:E.actions,getItemAriaLabel:I,disabled:_})]})}))});export{Ft as T,j as t};
