import{r as d,aw as g,bR as q,cO as R,aD as $,bl as _,aA as c,cP as L,cQ as F,j as l,aE as A,bB as N,aF as w,cR as H,b3 as O,b4 as Q,ax as z,cS as f,cT as J}from"./index-Bd-eTnUo.js";const M=d.createContext({}),K=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],X=N(),Y=o=>{const{classes:s,square:e,expanded:t,disabled:a,disableGutters:n}=o;return w({root:["root",!e&&"rounded",t&&"expanded",a&&"disabled",!n&&"gutters"],region:["region"]},H,s)},Z=g(q,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:e}=o;return[{[`& .${R.region}`]:s.region},s.root,!e.square&&s.rounded,!e.disableGutters&&s.gutters]}})(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],s),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${R.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${R.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o})=>({variants:[{props:s=>!s.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:s=>!s.disableGutters,style:{[`&.${R.expanded}`]:{margin:"16px 0"}}}]})),bo=d.forwardRef(function(s,e){const t=X({props:s,name:"MuiAccordion"}),{children:a,className:n,defaultExpanded:i=!1,disabled:p=!1,disableGutters:u=!1,expanded:h,onChange:b,square:y=!1,slots:C={},slotProps:v={},TransitionComponent:P,TransitionProps:m}=t,x=$(t,K),[r,k]=_({controlled:h,default:i,name:"Accordion",state:"expanded"}),j=d.useCallback(W=>{k(!r),b&&b(W,!r)},[r,b,k]),[S,...B]=d.Children.toArray(a),D=d.useMemo(()=>({expanded:r,disabled:p,disableGutters:u,toggle:j}),[r,p,u,j]),T=c({},t,{square:y,disabled:p,disableGutters:u,expanded:r}),G=Y(T),U=c({transition:P},C),E=c({transition:m},v),[I,V]=L("transition",{elementType:F,externalForwardedProps:{slots:U,slotProps:E},ownerState:T});return l.jsxs(Z,c({className:A(G.root,n),ref:e,ownerState:T,square:y},x,{children:[l.jsx(M.Provider,{value:D,children:S}),l.jsx(I,c({in:r,timeout:"auto"},V,{children:l.jsx("div",{"aria-labelledby":S.props.id,id:S.props["aria-controls"],role:"region",className:G.region,children:B})}))]}))});function oo(o){return Q("MuiAccordionDetails",o)}O("MuiAccordionDetails",["root"]);const so=["className"],eo=N(),to=o=>{const{classes:s}=o;return w({root:["root"]},oo,s)},ao=g("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),mo=d.forwardRef(function(s,e){const t=eo({props:s,name:"MuiAccordionDetails"}),{className:a}=t,n=$(t,so),i=t,p=to(i);return l.jsx(ao,c({className:A(p.root,a),ref:e,ownerState:i},n))}),ro=["children","className","expandIcon","focusVisibleClassName","onClick"],no=N(),io=o=>{const{classes:s,expanded:e,disabled:t,disableGutters:a}=o;return w({root:["root",e&&"expanded",t&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",e&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",e&&"expanded"]},J,s)},co=g(z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],s),[`&.${f.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${f.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${f.disabled})`]:{cursor:"pointer"},variants:[{props:e=>!e.disableGutters,style:{[`&.${f.expanded}`]:{minHeight:64}}}]}}),lo=g("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,s)=>s.content})(({theme:o})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:s=>!s.disableGutters,style:{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${f.expanded}`]:{margin:"20px 0"}}}]})),po=g("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,s)=>s.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${f.expanded}`]:{transform:"rotate(180deg)"}})),xo=d.forwardRef(function(s,e){const t=no({props:s,name:"MuiAccordionSummary"}),{children:a,className:n,expandIcon:i,focusVisibleClassName:p,onClick:u}=t,h=$(t,ro),{disabled:b=!1,disableGutters:y,expanded:C,toggle:v}=d.useContext(M),P=r=>{v&&v(r),u&&u(r)},m=c({},t,{expanded:C,disabled:b,disableGutters:y}),x=io(m);return l.jsxs(co,c({focusRipple:!1,disableRipple:!0,disabled:b,component:"div","aria-expanded":C,className:A(x.root,n),focusVisibleClassName:A(x.focusVisible,p),onClick:P,ref:e,ownerState:m},h,{children:[l.jsx(lo,{className:x.content,ownerState:m,children:a}),i&&l.jsx(po,{className:x.expandIconWrapper,ownerState:m,children:i})]}))});export{bo as A,xo as a,mo as b};
