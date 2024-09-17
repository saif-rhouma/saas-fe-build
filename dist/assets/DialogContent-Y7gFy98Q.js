import{bV as W,bW as k,r as d,aU as g,bU as O,dc as q,aX as u,aY as t,aD as j,a_ as y,b as G,a$ as S,by as J,j as c,b0 as m,b1 as M,cW as Q,dd as Z}from"./index-BjIn7_qX.js";function oo(o){return k("MuiDialog",o)}const v=W("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),ao=d.createContext({}),eo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],io=g(O,{name:"MuiDialog",slot:"Backdrop",overrides:(o,a)=>a.backdrop})({zIndex:-1}),to=o=>{const{classes:a,scroll:e,maxWidth:i,fullWidth:s,fullScreen:r}=o,l={root:["root"],container:["container",`scroll${u(e)}`],paper:["paper",`paperScroll${u(e)}`,`paperWidth${u(String(i))}`,s&&"paperFullWidth",r&&"paperFullScreen"]};return M(l,oo,a)},so=g(q,{name:"MuiDialog",slot:"Root",overridesResolver:(o,a)=>a.root})({"@media print":{position:"absolute !important"}}),ro=g("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.container,a[`scroll${u(e.scroll)}`]]}})(({ownerState:o})=>t({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),lo=g(j,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.paper,a[`scrollPaper${u(e.scroll)}`],a[`paperWidth${u(String(e.maxWidth))}`],e.fullWidth&&a.paperFullWidth,e.fullScreen&&a.paperFullScreen]}})(({theme:o,ownerState:a})=>t({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},a.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},a.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},a.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${v.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.maxWidth&&a.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[a.maxWidth]}${o.breakpoints.unit}`,[`&.${v.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[a.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${v.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),fo=d.forwardRef(function(a,e){const i=y({props:a,name:"MuiDialog"}),s=G(),r={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":n,BackdropComponent:x,BackdropProps:N,children:A,className:U,disableEscapeKeyDown:P=!1,fullScreen:F=!1,fullWidth:_=!1,maxWidth:I="sm",onBackdropClick:$,onClick:B,onClose:h,open:R,PaperComponent:L=j,PaperProps:w={},scroll:Y="paper",TransitionComponent:E=Q,transitionDuration:T=r,TransitionProps:X}=i,z=S(i,eo),b=t({},i,{disableEscapeKeyDown:P,fullScreen:F,fullWidth:_,maxWidth:I,scroll:Y}),f=to(b),C=d.useRef(),H=p=>{C.current=p.target===p.currentTarget},K=p=>{B&&B(p),C.current&&(C.current=null,$&&$(p),h&&h(p,"backdropClick"))},D=J(n),V=d.useMemo(()=>({titleId:D}),[D]);return c.jsx(so,t({className:m(f.root,U),closeAfterTransition:!0,components:{Backdrop:io},componentsProps:{backdrop:t({transitionDuration:T,as:x},N)},disableEscapeKeyDown:P,onClose:h,open:R,ref:e,onClick:K,ownerState:b},z,{children:c.jsx(E,t({appear:!0,in:R,timeout:T,role:"presentation"},X,{children:c.jsx(ro,{className:m(f.container),onMouseDown:H,ownerState:b,children:c.jsx(lo,t({as:L,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":D},w,{className:m(f.paper,w.className),ownerState:b,children:c.jsx(ao.Provider,{value:V,children:A})}))})}))}))}),no=["className","disableSpacing"],co=o=>{const{classes:a,disableSpacing:e}=o;return M({root:["root",!e&&"spacing"]},Z,a)},po=g("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,!e.disableSpacing&&a.spacing]}})(({ownerState:o})=>t({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),Co=d.forwardRef(function(a,e){const i=y({props:a,name:"MuiDialogActions"}),{className:s,disableSpacing:r=!1}=i,l=S(i,no),n=t({},i,{disableSpacing:r}),x=co(n);return c.jsx(po,t({className:m(x.root,s),ownerState:n,ref:e},l))});function uo(o){return k("MuiDialogContent",o)}W("MuiDialogContent",["root","dividers"]);function Do(o){return k("MuiDialogTitle",o)}const go=W("MuiDialogTitle",["root"]),xo=["className","dividers"],mo=o=>{const{classes:a,dividers:e}=o;return M({root:["root",e&&"dividers"]},uo,a)},bo=g("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,e.dividers&&a.dividers]}})(({theme:o,ownerState:a})=>t({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},a.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${go.root} + &`]:{paddingTop:0}})),vo=d.forwardRef(function(a,e){const i=y({props:a,name:"MuiDialogContent"}),{className:s,dividers:r=!1}=i,l=S(i,xo),n=t({},i,{dividers:r}),x=mo(n);return c.jsx(bo,t({className:m(x.root,s),ownerState:n,ref:e},l))});export{Co as D,fo as a,vo as b,ao as c,v as d,Do as g};
