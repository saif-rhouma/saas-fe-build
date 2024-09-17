import{r as c,aU as g,aD as q,dj as R,a$ as N,bz as _,aY as d,dk as L,dl as H,j as l,b0 as A,cf as T,b1 as k,dm as z,bW as F,bV as O,aV as Y,dn as f,dp as J}from"./index-CZcV1F_p.js";const M=c.createContext({}),K=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],Q=T(),X=o=>{const{classes:s,square:e,expanded:t,disabled:a,disableGutters:n}=o;return k({root:["root",!e&&"rounded",t&&"expanded",a&&"disabled",!n&&"gutters"],region:["region"]},z,s)},Z=g(q,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:e}=o;return[{[`& .${R.region}`]:s.region},s.root,!e.square&&s.rounded,!e.disableGutters&&s.gutters]}})(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],s),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${R.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${R.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o})=>({variants:[{props:s=>!s.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:s=>!s.disableGutters,style:{[`&.${R.expanded}`]:{margin:"16px 0"}}}]})),bo=c.forwardRef(function(s,e){const t=Q({props:s,name:"MuiAccordion"}),{children:a,className:n,defaultExpanded:i=!1,disabled:p=!1,disableGutters:u=!1,expanded:h,onChange:b,square:y=!1,slots:C={},slotProps:v={},TransitionComponent:P,TransitionProps:m}=t,x=N(t,K),[r,j]=_({controlled:h,default:i,name:"Accordion",state:"expanded"}),w=c.useCallback(E=>{j(!r),b&&b(E,!r)},[r,b,j]),[S,...U]=c.Children.toArray(a),V=c.useMemo(()=>({expanded:r,disabled:p,disableGutters:u,toggle:w}),[r,p,u,w]),$=d({},t,{square:y,disabled:p,disableGutters:u,expanded:r}),G=X($),D=d({transition:P},C),B=d({transition:m},v),[I,W]=L("transition",{elementType:H,externalForwardedProps:{slots:D,slotProps:B},ownerState:$});return l.jsxs(Z,d({className:A(G.root,n),ref:e,ownerState:$,square:y},x,{children:[l.jsx(M.Provider,{value:V,children:S}),l.jsx(I,d({in:r,timeout:"auto"},W,{children:l.jsx("div",{"aria-labelledby":S.props.id,id:S.props["aria-controls"],role:"region",className:G.region,children:U})}))]}))});function oo(o){return F("MuiAccordionDetails",o)}O("MuiAccordionDetails",["root"]);const so=["className"],eo=T(),to=o=>{const{classes:s}=o;return k({root:["root"]},oo,s)},ao=g("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),mo=c.forwardRef(function(s,e){const t=eo({props:s,name:"MuiAccordionDetails"}),{className:a}=t,n=N(t,so),i=t,p=to(i);return l.jsx(ao,d({className:A(p.root,a),ref:e,ownerState:i},n))}),ro=["children","className","expandIcon","focusVisibleClassName","onClick"],no=T(),io=o=>{const{classes:s,expanded:e,disabled:t,disableGutters:a}=o;return k({root:["root",e&&"expanded",t&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",e&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",e&&"expanded"]},J,s)},co=g(Y,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],s),[`&.${f.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${f.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${f.disabled})`]:{cursor:"pointer"},variants:[{props:e=>!e.disableGutters,style:{[`&.${f.expanded}`]:{minHeight:64}}}]}}),lo=g("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,s)=>s.content})(({theme:o})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:s=>!s.disableGutters,style:{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${f.expanded}`]:{margin:"20px 0"}}}]})),po=g("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,s)=>s.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${f.expanded}`]:{transform:"rotate(180deg)"}})),xo=c.forwardRef(function(s,e){const t=no({props:s,name:"MuiAccordionSummary"}),{children:a,className:n,expandIcon:i,focusVisibleClassName:p,onClick:u}=t,h=N(t,ro),{disabled:b=!1,disableGutters:y,expanded:C,toggle:v}=c.useContext(M),P=r=>{v&&v(r),u&&u(r)},m=d({},t,{expanded:C,disabled:b,disableGutters:y}),x=io(m);return l.jsxs(co,d({focusRipple:!1,disableRipple:!0,disabled:b,component:"div","aria-expanded":C,className:A(x.root,n),focusVisibleClassName:A(x.focusVisible,p),onClick:P,ref:e,ownerState:m},h,{children:[l.jsx(lo,{className:x.content,ownerState:m,children:a}),i&&l.jsx(po,{className:x.expandIconWrapper,ownerState:m,children:i})]}))});export{bo as A,xo as a,mo as b};
