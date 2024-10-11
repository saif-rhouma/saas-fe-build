import{bt as Y,bu as Z,aX as T,bG as q,aU as r,bC as F,j as g,aQ as m,dS as c,aR as H,ce as N,r as E,aW as G,bv as J,aY as h,aT as k,aZ as V,dT as K}from"./index-qTpQGZSM.js";import{F as U,L as W}from"./LastPage-Bn5LqkbT.js";function w(a){return Z("MuiPagination",a)}const ba=Y("MuiPagination",["root","ul","outlined","text"]),S=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function aa(a={}){const{boundaryCount:t=1,componentName:o="usePagination",count:s=1,defaultPage:v=1,disabled:b=!1,hideNextButton:x=!1,hidePrevButton:e=!1,onChange:d,page:f,showFirstButton:R=!1,showLastButton:B=!1,siblingCount:y=1}=a,l=T(a,S),[i,O]=q({controlled:f,default:v,name:o,state:"page"}),z=(n,P)=>{f||O(P),d&&d(n,P)},p=(n,P)=>{const Q=P-n+1;return Array.from({length:Q},(ua,X)=>n+X)},I=p(1,Math.min(t,s)),u=p(Math.max(s-t+1,t+1),s),L=Math.max(Math.min(i-y,s-t-y*2-1),t+2),$=Math.min(Math.max(i+y,t+y*2+2),u.length>0?u[0]-2:s-1),M=[...R?["first"]:[],...e?[]:["previous"],...I,...L>t+2?["start-ellipsis"]:t+1<s-t?[t+1]:[],...p(L,$),...$<s-t-1?["end-ellipsis"]:s-t>t?[s-t]:[],...u,...x?[]:["next"],...B?["last"]:[]],j=n=>{switch(n){case"first":return 1;case"previous":return i-1;case"next":return i+1;case"last":return s;default:return null}},C=M.map(n=>typeof n=="number"?{onClick:P=>{z(P,n)},type:"page",page:n,selected:n===i,disabled:b,"aria-current":n===i?"true":void 0}:{onClick:P=>{z(P,j(n))},type:n,page:j(n),selected:!1,disabled:b||n.indexOf("ellipsis")===-1&&(n==="next"||n==="last"?i>=s:i<=1)});return r({items:C},l)}const _=F(g.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),A=F(g.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),ta=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],D=(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],t[`size${k(o.size)}`],o.variant==="text"&&t[`text${k(o.color)}`],o.variant==="outlined"&&t[`outlined${k(o.color)}`],o.shape==="rounded"&&t.rounded,o.type==="page"&&t.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&t.ellipsis,(o.type==="previous"||o.type==="next")&&t.previousNext,(o.type==="first"||o.type==="last")&&t.firstLast]},oa=a=>{const{classes:t,color:o,disabled:s,selected:v,size:b,shape:x,type:e,variant:d}=a,f={root:["root",`size${k(b)}`,d,x,o!=="standard"&&`color${k(o)}`,o!=="standard"&&`${d}${k(o)}`,s&&"disabled",v&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[e]],icon:["icon"]};return V(f,K,t)},sa=m("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:D})(({theme:a,ownerState:t})=>r({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${c.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)})),na=m(H,{name:"MuiPaginationItem",slot:"Root",overridesResolver:D})(({theme:a,ownerState:t})=>r({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${c.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${c.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:N(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${c.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:N(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${c.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}),({theme:a,ownerState:t})=>r({},t.variant==="text"&&{[`&.${c.selected}`]:r({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].contrastText,backgroundColor:(a.vars||a).palette[t.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t.color].main}},[`&.${c.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t.color].dark}},{[`&.${c.disabled}`]:{color:(a.vars||a).palette.action.disabled}})},t.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${c.selected}`]:r({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:N(a.palette[t.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:N(a.palette[t.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:N(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:N(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},{[`&.${c.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}})})),ia=m("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(({theme:a,ownerState:t})=>r({fontSize:a.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:a.typography.pxToRem(18)},t.size==="large"&&{fontSize:a.typography.pxToRem(22)})),ea=E.forwardRef(function(t,o){const s=G({props:t,name:"MuiPaginationItem"}),{className:v,color:b="standard",component:x,components:e={},disabled:d=!1,page:f,selected:R=!1,shape:B="circular",size:y="medium",slots:l={},type:i="page",variant:O="text"}=s,z=T(s,ta),p=r({},s,{color:b,disabled:d,selected:R,shape:B,size:y,type:i,variant:O}),I=J(),u=oa(p),$=(I?{previous:l.next||e.next||A,next:l.previous||e.previous||_,last:l.first||e.first||U,first:l.last||e.last||W}:{previous:l.previous||e.previous||_,next:l.next||e.next||A,first:l.first||e.first||U,last:l.last||e.last||W})[i];return i==="start-ellipsis"||i==="end-ellipsis"?g.jsx(sa,{ref:o,ownerState:p,className:h(u.root,v),children:"…"}):g.jsxs(na,r({ref:o,ownerState:p,component:x,disabled:d,className:h(u.root,v)},z,{children:[i==="page"&&f,$?g.jsx(ia,{as:$,ownerState:p,className:u.icon}):null]}))}),ra=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],la=a=>{const{classes:t,variant:o}=a;return V({root:["root",o],ul:["ul"]},w,t)},ca=m("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant]]}})({}),da=m("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(a,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function pa(a,t,o){return a==="page"?`${o?"":"Go to "}page ${t}`:`Go to ${a} page`}const xa=E.forwardRef(function(t,o){const s=G({props:t,name:"MuiPagination"}),{boundaryCount:v=1,className:b,color:x="standard",count:e=1,defaultPage:d=1,disabled:f=!1,getItemAriaLabel:R=pa,hideNextButton:B=!1,hidePrevButton:y=!1,renderItem:l=C=>g.jsx(ea,r({},C)),shape:i="circular",showFirstButton:O=!1,showLastButton:z=!1,siblingCount:p=1,size:I="medium",variant:u="text"}=s,L=T(s,ra),{items:$}=aa(r({},s,{componentName:"Pagination"})),M=r({},s,{boundaryCount:v,color:x,count:e,defaultPage:d,disabled:f,getItemAriaLabel:R,hideNextButton:B,hidePrevButton:y,renderItem:l,shape:i,showFirstButton:O,showLastButton:z,siblingCount:p,size:I,variant:u}),j=la(M);return g.jsx(ca,r({"aria-label":"pagination navigation",className:h(j.root,b),ownerState:M,ref:o},L,{children:g.jsx(da,{className:j.ul,ownerState:M,children:$.map((C,n)=>g.jsx("li",{children:l(r({},C,{color:x,"aria-label":R(C.type,C.page,C.selected),shape:i,size:I,variant:u}))},n))})}))});export{xa as P,ba as p};