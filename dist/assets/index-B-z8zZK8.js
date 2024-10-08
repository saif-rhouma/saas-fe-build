import{bt as R,bu as F,aQ as k,aR as $,r as N,aW as P,aX as D,j as e,aU as L,aY as b,aZ as B,C as d,eA as h,b as z,S as n,aF as E,eB as V,eC as W,B as a,cu as u,L as t,R as i,dF as c,az as G,v as C,ds as O,m as l,eD as _,T as r,M as X,f as Y,D as Q,H as Z}from"./index-yGbCRgTb.js";import{v as A}from"./fade-o6mfZnVH.js";import{I as q}from"./image-DcD9e3NU.js";import{b as J}from"./transition-BJzcwH5q.js";import{C as K}from"./component-hero-CN-GsTfI.js";function ee(o){return F("MuiCardActionArea",o)}const g=R("MuiCardActionArea",["root","focusVisible","focusHighlight"]),oe=["children","className","focusVisibleClassName"],se=o=>{const{classes:s}=o;return B({root:["root"],focusHighlight:["focusHighlight"]},ee,s)},ae=k($,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${g.focusHighlight}`]:{opacity:(o.vars||o).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${g.focusVisible} .${g.focusHighlight}`]:{opacity:(o.vars||o).palette.action.focusOpacity}})),re=k("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(o,s)=>s.focusHighlight})(({theme:o})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:o.transitions.create("opacity",{duration:o.transitions.duration.short})})),ne=N.forwardRef(function(s,y){const p=P({props:s,name:"MuiCardActionArea"}),{children:H,className:U,focusVisibleClassName:T}=p,I=D(p,oe),x=p,m=se(x);return e.jsxs(ae,L({className:b(m.root,U),focusVisibleClassName:b(T,m.focusVisible),ref:y,ownerState:x},I,{children:[H,e.jsx(re,{className:m.focusHighlight,ownerState:x})]}))}),v=(o,s)=>`/components/${o}/${h(s)}`,S=["Colors","Typography","Shadows","Grid","Icons"].map(o=>({name:o,href:v("foundation",o),icon:`${d.site.basePath}/assets/icons/components/ic-${h(o)}.svg`})),M=["Chip","List","Menu","Tabs","Alert","Badge","Table","Avatar","Dialog","Rating","Slider","Switch","Buttons","Pickers","Popover","Stepper","Tooltip","Checkbox","Progress","Timeline","Accordion","Textfield","Data grid","Tree view","Pagination","Breadcrumbs","Autocomplete","Radio button","Transfer list"].map(o=>({name:o,href:v("mui",o),icon:`${d.site.basePath}/assets/icons/components/ic-${h(o)}.svg`,category:["Data grid","Pickers","Tree view"].includes(o)&&"MUI X"||""})),w=["Map","Dnd","Chart","Image","Label","Editor","Upload","Scroll","Animate","Carousel","Lightbox","Snackbar","Markdown","Walktour","Mega menu","Utilities","Multi language","Navigation bar","Form validation","Form wizard","Scroll progress","Organization chart"].map(o=>({name:o,href:v("extra",o),icon:`${d.site.basePath}/assets/icons/components/ic-extra-${h(o)}.svg`,category:["Chart","Map","Editor","Upload","Carousel","Multi language","Animate","Form validation","Form wizard","Lightbox","Image","Scroll","Scroll progress","Snackbar","Organization chart","Markdown","Walktour"].includes(o)&&"3rd Party"||""}));function te(){const o=z();return e.jsx(n,{component:"nav",sx:{...E,width:280,flexShrink:0,position:"sticky",display:{xs:"none",md:"flex"},top:"calc(var(--layout-header-desktop-height) + 24px)",maxHeight:"calc(100vh - var(--layout-header-desktop-height) * 2)",[`& .${V.root}`]:{mt:0,mx:0,mb:1,p:0,color:"text.primary",typography:"overline"},[`& .${W.root}`]:{typography:"body2",color:"text.secondary",fontSize:o.typography.pxToRem(13),"&:hover":{color:"text.primary"}},"& ul":{display:"flex",flexDirection:"column"},"& li":{display:"flex"}},children:e.jsxs(a,{component:"ul",sx:{gap:2},children:[e.jsxs(a,{component:"li",sx:{flexDirection:"column"},children:[e.jsx(u,{disableSticky:!0,component:"h6",children:"Foundation"}),e.jsx(a,{component:"ul",sx:{gap:.5},children:S.map(s=>e.jsx(a,{component:"li",children:e.jsx(t,{component:i,href:s.href,children:s.name})},s.name))})]}),e.jsxs(a,{component:"li",sx:{flexDirection:"column"},children:[e.jsx(u,{disableSticky:!0,component:"h6",children:"MUI"}),e.jsx(a,{component:"ul",sx:{gap:.5},children:c(M,["name"],["asc"]).map(s=>e.jsx(a,{component:"li",children:e.jsx(t,{component:i,href:s.href,children:s.name})},s.name))})]}),e.jsxs(a,{component:"li",sx:{flexDirection:"column"},children:[e.jsx(u,{disableSticky:!0,component:"h6",children:"Extra"}),e.jsx(a,{component:"ul",sx:{gap:.5},children:c(w,["name"],["asc"]).map(s=>e.jsx(a,{component:"li",children:e.jsx(t,{component:i,href:s.href,children:s.name})},s.name))})]})]})})}function f({item:o}){return e.jsxs(G,{component:i,href:o.href,variant:"outlined",sx:{overflow:"hidden",position:"relative",textDecoration:"none",borderColor:s=>C(s.vars.palette.grey["500Channel"],.12)},children:[o.category&&e.jsx(O,{color:o.category==="MUI X"?"info":"default",sx:{top:8,right:8,zIndex:9,position:"absolute"},children:o.category}),e.jsx(ne,{component:l.div,whileHover:"hover",sx:{borderRadius:0,color:"text.secondary",bgcolor:s=>C(s.vars.palette.grey["500Channel"],.04)},children:e.jsx(l.div,{variants:_(1.1),transition:J(),children:e.jsx(q,{alt:o.name,src:o.icon,ratio:"1/1",sx:{width:200,maxWidth:1}})})}),e.jsx(r,{variant:"subtitle2",sx:{p:2,textAlign:"center"},children:o.name})]})}function ie(){return e.jsxs(e.Fragment,{children:[e.jsx(K,{sx:{py:15},children:e.jsxs(X,{sx:{textAlign:"center"},children:[e.jsx(l.div,{variants:A().inUp,children:e.jsx(r,{variant:"h3",component:"h1",children:"Components"})}),e.jsx(l.div,{variants:A().inUp,children:e.jsx(r,{sx:{color:"text.secondary",mt:3},children:"With huge resource pack making deployment easy and expanding more effectively"})})]})}),e.jsx(Y,{sx:{mt:10,mb:15},children:e.jsxs(n,{direction:{xs:"column",md:"row"},alignItems:{md:"flex-start"},children:[e.jsx(te,{}),e.jsxs(n,{divider:e.jsx(Q,{sx:{borderStyle:"dashed",my:8}}),children:[e.jsxs(n,{spacing:3,children:[e.jsxs(n,{spacing:1,children:[e.jsx(r,{variant:"h5",children:"Foundation"}),e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},children:"Colors, typography, shadows…"})]}),e.jsx(j,{children:S.map(o=>e.jsx(f,{item:o},o.name))})]}),e.jsxs(n,{spacing:3,children:[e.jsxs(n,{spacing:1,children:[e.jsx(r,{variant:"h5",children:"MUI"}),e.jsxs(r,{variant:"body2",sx:{color:"text.secondary"},children:["Components from"," ",e.jsx(t,{href:"https://mui.com/components/",target:"_blank",rel:"noopener",children:"Material UI"}),"."]}),e.jsx(r,{variant:"caption",sx:{color:"text.secondary"},children:e.jsxs("i",{children:["Some advanced components from MUI X will not be included. So you need to purchase a separate",e.jsx(t,{href:"https://mui.com/pricing/",target:"_blank",rel:"noopener",sx:{ml:.5},children:"license"}),"."]})})]}),e.jsx(j,{children:c(M,["name"],["asc"]).map(o=>e.jsx(f,{item:o},o.name))})]}),e.jsxs(n,{spacing:3,children:[e.jsxs(n,{spacing:1,children:[e.jsx(r,{variant:"h5",children:"Extra Components"}),e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},children:"Some custom components / use 3rd party dependencies (chart, map, editor…)."})]}),e.jsx(j,{children:c(w,["name"],["asc"]).map(o=>e.jsx(f,{item:o},o.name))})]})]})]})})]})}function j({children:o}){return e.jsx(a,{rowGap:3,display:"grid",columnGap:2.5,gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(5, 1fr)"},children:o})}const ce={title:`All components | MUI - ${d.site.name}`};function me(){return e.jsxs(e.Fragment,{children:[e.jsx(Z,{children:e.jsxs("title",{children:[" ",ce.title]})}),e.jsx(ie,{})]})}export{me as default};
