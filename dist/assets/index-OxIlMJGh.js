import{r as l,fj as U,j as e,fk as Z,fl as c,B as b,I as x,aO as Y,aP as J,fm as y,fn as w,L as A,R as T,fo as W,S as C,T as L,fp as N,fq as se,fr as K,dC as Q,at as ee,l as ne,am as F,dd as ie,v as E,b as S,bf as le,av as he,b9 as te,au as X,fs as ae,aD as me,_ as z,d7 as re,e as de,ft as ue,ex as pe,eg as xe,f as ve,p as ge,H as fe,C as be}from"./index-zyulwKWD.js";import{C as je}from"./custom-breadcrumbs-DHj4Ok4N.js";import{I as ye}from"./image-CJs4Y8Ie.js";import{C as Ce}from"./carousel-progress-bar-DbAMobnp.js";import{u as we}from"./use-carousel-ey8AF_6E.js";import{C as ke}from"./carousel-dot-buttons-jI1pdTwB.js";import{b as Me}from"./carousel-arrow-buttons-d1zUehBB.js";import{M as Ie}from"./Masonry-C6WC62XA.js";import{C as Le}from"./component-hero-BgKjVGLu.js";import{C as Ne}from"./component-block-jCYpWjeq.js";const Se=l.forwardRef(({path:n,icon:t,info:i,title:r,open:o,render:s,active:m,hasChild:h,disabled:d,slotProps:a,externalLink:g,enabledRootRedirect:u,...j},v)=>{const p=U({path:n,icon:t,info:i,render:s,hasChild:h,externalLink:g,enabledRootRedirect:u});return e.jsxs($e,{ref:v,"aria-label":r,open:o,active:m,disabled:d,className:Z({open:o&&!m,active:m,disabled:d}),sx:{...a==null?void 0:a.sx,[`& .${c.item.icon}`]:a==null?void 0:a.icon,[`& .${c.item.title}`]:a==null?void 0:a.title,[`& .${c.item.info}`]:a==null?void 0:a.info,[`& .${c.item.arrow}`]:a==null?void 0:a.arrow},...p.baseProps,...j,children:[t&&e.jsx(b,{component:"span",className:c.item.icon,children:p.renderIcon}),r&&e.jsx(b,{component:"span",className:c.item.title,children:r}),i&&e.jsx(b,{component:"span",className:c.item.info,children:p.renderInfo}),h&&e.jsx(x,{icon:"eva:arrow-ios-forward-fill",className:c.item.arrow})]})}),$e=Y(J,{shouldForwardProp:n=>n!=="active"&&n!=="open"&&n!=="disabled"})(({active:n,open:t,disabled:i,theme:r})=>({padding:"var(--nav-item-padding)",minHeight:"var(--nav-item-height)",borderRadius:"var(--nav-item-radius)",transition:r.transitions.create(["background-color"],{duration:r.transitions.duration.standard}),"&:hover":{backgroundColor:"var(--nav-item-hover-bg)"},[`& .${c.item.title}`]:{...r.typography.body2,flex:"1 1 auto",fontWeight:n?r.typography.fontWeightSemiBold:r.typography.fontWeightMedium},[`& .${c.item.icon}`]:{...y.icon,width:"var(--nav-icon-size)",height:"var(--nav-icon-size)",margin:"var(--nav-icon-margin)"},[`& .${c.item.arrow}`]:{...y.arrow},[`& .${c.item.info}`]:{...y.info},...n&&{color:"var(--nav-item-active-color)",backgroundColor:"var(--nav-item-active-bg)","&:hover":{backgroundColor:"var(--nav-item-active-hover-bg)"}},...t&&{color:"var(--nav-item-open-color)",backgroundColor:"var(--nav-item-open-bg)"},...i&&y.disabled}));function G({data:n,slotProps:t,...i}){const r=W();return e.jsx(e.Fragment,{children:n.map(o=>e.jsxs(C,{component:w,spacing:1,...i,children:[(o==null?void 0:o.subheader)&&e.jsx(L,{variant:"subtitle2",noWrap:!0,sx:t==null?void 0:t.subheader,children:o.subheader}),e.jsx(N,{sx:{gap:1},children:o.items.map(s=>e.jsx(Re,{title:s.title,path:s.path,active:s.path===se(r),slotProps:t==null?void 0:t.subItem},s.title))})]},(o==null?void 0:o.subheader)??o.items[0].title))})}const Re=l.forwardRef(({title:n,path:t,active:i,slotProps:r},o)=>e.jsx(w,{children:e.jsx(A,{ref:o,component:T,href:t,noWrap:!0,sx:{position:"relative",color:"text.secondary",fontSize:s=>s.typography.pxToRem(13),lineHeight:s=>s.typography.body2.lineHeight,transition:s=>s.transitions.create("color"),"&:hover":{color:"text.primary"},...i&&{color:"text.primary",textDecoration:"underline",fontWeight:"fontWeightSemiBold"},...r},children:n})},n));function _e({data:n,render:t,cssVars:i,slotProps:r}){const o=W(),s=K(n.path,!!n.children),[m,h]=l.useState(!1);l.useEffect(()=>{m&&a()},[o]);const d=l.useCallback(()=>{n.children&&h(!0)},[n.children]),a=l.useCallback(()=>{h(!1)},[]),g=e.jsx(Se,{render:t,path:n.path,icon:n.icon,info:n.info,title:n.title,active:s,disabled:n.disabled,hasChild:!!n.children,open:n.children&&!!m,externalLink:Q(n.path),slotProps:r==null?void 0:r.rootItem,onClick:d});return n.children?e.jsxs(w,{disabled:n.disabled,children:[g,e.jsxs(ee,{open:m,onClose:a,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{display:"flex",flexDirection:"column",width:"calc(var(--nav-width) - 8px)"}},sx:{...i},children:[e.jsxs(C,{direction:"row",alignItems:"center",spacing:1,sx:{px:1,py:1.5},children:[e.jsx(ne,{onClick:a,children:e.jsx(x,{icon:"eva:arrow-ios-back-fill",width:16})}),e.jsx(L,{noWrap:!0,variant:"subtitle1",sx:{textTransform:"capitalize"},children:n.title})]}),e.jsx(F,{}),e.jsx(ie,{fillContent:!0,sx:{p:2},children:e.jsx(C,{component:"nav",spacing:4,children:e.jsx(N,{sx:{gap:3},children:e.jsx(G,{data:n.children,slotProps:r})})})})]})]}):e.jsx(w,{disabled:n.disabled,children:g})}const q={horizontal:{root:"mega__menu__desktop__horizontal"},vertical:{root:"mega__menu__desktop__vertical"},mobile:{root:"mega__menu__desktop__mobile"}};function Be(n){const{spacing:t,vars:{palette:i}}=n;return{"--nav-item-gap":n.spacing(.5),"--nav-item-radius":"0","--nav-item-height":"40px","--nav-item-padding":t(1,1.5,1,2.5),"--nav-item-hover-bg":i.action.hover,"--nav-item-active-color":i.primary.main,"--nav-item-active-bg":E(i.primary.mainChannel,.08),"--nav-item-active-hover-bg":E(i.primary.mainChannel,.16),"--nav-item-open-color":i.text.primary,"--nav-item-open-bg":i.action.hover,"--nav-icon-size":"22px","--nav-icon-margin":t(0,2,0,0)}}function Fe(n){const{shape:t,spacing:i,vars:{palette:r}}=n;return{"--nav-item-gap":n.spacing(2.5),"--nav-item-radius":`${t.borderRadius}px`,"--nav-item-height":"32px","--nav-item-padding":i(.5,1),"--nav-item-hover-bg":r.action.hover,"--nav-item-active-color":r.primary.main,"--nav-item-open-bg":r.action.hover,"--nav-icon-size":"22px","--nav-icon-margin":i(0,1,0,0)}}function Ee(n){const{spacing:t,vars:{palette:i}}=n;return{"--nav-width":"280px","--nav-item-gap":n.spacing(.5),"--nav-item-radius":"0","--nav-item-height":"40px","--nav-item-padding":t(1,1.5,1,2.5),"--nav-item-hover-color":i.action.hover,"--nav-item-active-color":i.primary.main,"--nav-item-active-bg":E(i.primary.mainChannel,.08),"--nav-item-active-hover-bg":E(i.primary.mainChannel,.16),"--nav-item-open-color":i.text.primary,"--nav-item-open-bg":i.action.hover,"--nav-icon-size":"22px","--nav-icon-margin":t(0,2,0,0)}}const P={vertical:Be,horizontal:Fe,mobile:Ee};function We({sx:n,data:t,slots:i,render:r,slotProps:o,cssVars:s,...m}){const h=S(),d=W(),[a,g]=l.useState(!1),u={...P.mobile(h),...s},j=l.useCallback(()=>{g(f=>!f)},[]),v=l.useCallback(()=>{g(!1)},[]);l.useEffect(()=>{a&&v()},[d]);const p=i!=null&&i.button?l.cloneElement(i.button,{onClick:j}):e.jsx(ne,{onClick:j,children:e.jsxs(le,{children:[e.jsx("path",{opacity:"0.32",d:"M15.7798 4.5H5.2202C4.27169 4.5 3.5 5.06057 3.5 5.75042C3.5 6.43943 4.27169 7 5.2202 7H15.7798C16.7283 7 17.5 6.43943 17.5 5.75042C17.5 5.06054 16.7283 4.5 15.7798 4.5Z",fill:"currentColor"}),e.jsx("path",{d:"M18.7798 10.75H8.2202C7.27169 10.75 6.5 11.3106 6.5 12.0004C6.5 12.6894 7.27169 13.25 8.2202 13.25H18.7798C19.7283 13.25 20.5 12.6894 20.5 12.0004C20.5 11.3105 19.7283 10.75 18.7798 10.75Z",fill:"currentColor"}),e.jsx("path",{d:"M15.7798 17H5.2202C4.27169 17 3.5 17.5606 3.5 18.2504C3.5 18.9394 4.27169 19.5 5.2202 19.5H15.7798C16.7283 19.5 17.5 18.9394 17.5 18.2504C17.5 17.5606 16.7283 17 15.7798 17Z",fill:"currentColor"})]})});return e.jsxs(e.Fragment,{children:[p,e.jsxs(ee,{open:a,onClose:v,PaperProps:{sx:{display:"flex",flexDirection:"column",width:"var(--nav-width)"}},sx:{...u},children:[i==null?void 0:i.topArea,e.jsx(ie,{fillContent:!0,children:e.jsx(C,{component:"nav",className:q.mobile.root,sx:n,...m,children:e.jsx(N,{sx:{gap:"var(--nav-item-gap)"},children:t.map(f=>e.jsx(_e,{data:f,render:r,cssVars:u,slotProps:o},f.title))})})}),i==null?void 0:i.bottomArea]})]})}const ze=l.forwardRef(({path:n,icon:t,info:i,title:r,open:o,render:s,active:m,hasChild:h,disabled:d,slotProps:a,externalLink:g,enabledRootRedirect:u,...j},v)=>{const p=U({path:n,icon:t,info:i,render:s,hasChild:h,externalLink:g,enabledRootRedirect:u});return e.jsxs(De,{ref:v,"aria-label":r,open:o,active:m,disabled:d,className:Z({open:o&&!m,active:m,disabled:d}),sx:{...a==null?void 0:a.sx,[`& .${c.item.icon}`]:a==null?void 0:a.icon,[`& .${c.item.title}`]:a==null?void 0:a.title,[`& .${c.item.info}`]:a==null?void 0:a.info,[`& .${c.item.arrow}`]:a==null?void 0:a.arrow},...p.baseProps,...j,children:[t&&e.jsx(b,{component:"span",className:c.item.icon,children:p.renderIcon}),r&&e.jsx(b,{component:"span",className:c.item.title,children:r}),i&&e.jsx(b,{component:"span",className:c.item.info,children:p.renderInfo}),h&&e.jsx(x,{icon:"eva:arrow-ios-forward-fill",className:c.item.arrow})]})}),De=Y(J,{shouldForwardProp:n=>n!=="active"&&n!=="open"&&n!=="disabled"})(({active:n,open:t,disabled:i,theme:r})=>({minHeight:"var(--nav-item-height)",borderRadius:"var(--nav-item-radius)",padding:"var(--nav-item-padding)",transition:r.transitions.create(["background-color"],{duration:r.transitions.duration.standard}),"&:hover":{backgroundColor:"var(--nav-item-hover-bg)"},[`& .${c.item.title}`]:{...r.typography.body2,flex:"1 1 auto",fontWeight:n?r.typography.fontWeightSemiBold:r.typography.fontWeightMedium},[`& .${c.item.icon}`]:{...y.icon,width:"var(--nav-icon-size)",height:"var(--nav-icon-size)",margin:"var(--nav-icon-margin)"},[`& .${c.item.arrow}`]:{...y.arrow},[`& .${c.item.info}`]:{...y.info},...n&&{color:"var(--nav-item-active-color)",backgroundColor:"var(--nav-item-active-bg)","&:hover":{backgroundColor:"var(--nav-item-active-hover-bg)"}},...t&&{color:"var(--nav-item-open-color)",backgroundColor:"var(--nav-item-open-bg)"},...i&&y.disabled}));function He({tags:n,...t}){return e.jsxs(b,{...t,children:[e.jsx(L,{variant:"caption",sx:{mr:.5,fontWeight:"fontWeightBold"},children:"Hot products:"}),n.map((i,r)=>e.jsx(A,{component:T,href:i.path,variant:"caption",sx:{color:"text.secondary",transition:o=>o.transitions.create(["color"]),"&:hover":{color:"text.primary"}},children:r===0?i.title:`, ${i.title} `},i.title))]})}function Oe({slides:n,displayCount:t=8,sx:i}){const r=we({slidesToShow:t,slidesToScroll:t});return e.jsxs(C,{sx:{position:"relative",pt:2,...i},children:[e.jsx(Ce,{carousel:r,children:n.map(o=>e.jsx(Ve,{item:o},o.name))}),e.jsxs(C,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mt:2},children:[e.jsx(Me,{...r.arrows,options:r.options}),e.jsx(ke,{scrollSnaps:r.dots.scrollSnaps,selectedIndex:r.dots.selectedIndex,onClickDot:r.dots.onClickDot,sx:{color:"primary.main"}})]})]})}function Ve({item:n}){const t=S();return e.jsxs(A,{component:T,href:n.path,color:"inherit",underline:"none",sx:{px:1,display:"block",transition:t.transitions.create("color"),"&:hover":{color:"primary.main"}},children:[e.jsx(ye,{alt:n.coverUrl,src:n.coverUrl,ratio:"1/1",sx:{borderRadius:1,mb:1}}),e.jsx(L,{variant:"caption",sx:{...he({line:2,persistent:t.typography.caption}),fontWeight:"fontWeightSemiBold"},children:n.name})]})}function Ae({title:n,path:t,sx:i,...r}){return e.jsxs(A,{component:T,href:t,color:"inherit",sx:{alignItems:"center",typography:"caption",display:"inline-flex",fontWeight:"fontWeightSemiBold",...i},...r,children:[n," ",e.jsx(x,{icon:"eva:arrow-ios-forward-fill",width:16})]})}function oe({data:n,slotProps:t,singleList:i}){var r,o;return n.children?e.jsx(e.Fragment,{children:i?e.jsx(N,{children:e.jsx(G,{data:n.children,slotProps:t})}):e.jsxs(e.Fragment,{children:[e.jsx(Ie,{component:"ul",className:c.ul,columns:4,defaultColumns:4,spacing:3,defaultSpacing:3,sx:{p:0},children:e.jsx(G,{data:n.children,slotProps:t})}),!!n.moreLink&&e.jsx(Ae,{path:n.moreLink.path,title:n.moreLink.title,sx:t==null?void 0:t.moreLink}),!!n.slides&&e.jsxs(e.Fragment,{children:[e.jsx(F,{sx:{borderStyle:"dashed",my:3}}),e.jsx(Oe,{slides:n.slides,displayCount:(r=t==null?void 0:t.carousel)==null?void 0:r.displayCount,sx:(o=t==null?void 0:t.carousel)==null?void 0:o.sx})]}),!!n.tags&&e.jsxs(e.Fragment,{children:[e.jsx(F,{sx:{borderStyle:"dashed",my:3}}),e.jsx(He,{tags:n.tags,sx:t==null?void 0:t.tags})]})]})}):null}function Te({data:n,render:t,slotProps:i,cssVars:r,enabledRootRedirect:o}){var _;const s=S(),m=W(),[h,d]=l.useState(!1),a=l.useRef(null),g=K(n.path,!!n.children),[u,j]=l.useState({x:0,top:0,width:0,height:0}),v=((_=n.children)==null?void 0:_.length)===1,p=!v;l.useEffect(()=>{h&&k()},[m]);const f=l.useCallback(()=>{const B=document.getElementsByClassName(q.vertical.root);if(B){const M=B[0].getBoundingClientRect();j({top:M.top,width:M.width,height:M.height,x:M.x})}},[]);l.useEffect(()=>(f(),window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}),[f]);const $=l.useCallback(()=>{n.children&&d(!0)},[n.children]),k=l.useCallback(()=>{d(!1)},[]),R=e.jsx(ze,{ref:a,render:t,path:n.path,icon:n.icon,info:n.info,title:n.title,active:g,disabled:n.disabled,hasChild:!!n.children,open:n.children&&!!h,externalLink:Q(n.path),enabledRootRedirect:o,slotProps:i==null?void 0:i.rootItem,onMouseEnter:$,onMouseLeave:k});return n.children?e.jsxs(w,{disabled:n.disabled,children:[R,e.jsx(te,{disableScrollLock:!0,keepMounted:p,open:h,anchorEl:a.current,anchorReference:"anchorPosition",anchorPosition:{top:u.top-20,left:u.x+u.width},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},slotProps:{paper:{onMouseEnter:$,onMouseLeave:k,sx:{boxShadow:"none",overflow:"unset",backdropFilter:"none",background:"transparent",...h&&{pointerEvents:"auto"},...i==null?void 0:i.paper}}},sx:{...r,pointerEvents:"none"},children:e.jsx(X,{sx:{...ae({theme:s,dropdown:!0}),p:2.5,borderRadius:2,...v&&{...me,minWidth:280,height:u.height},...p&&{minWidth:720,maxWidth:960,minHeight:u.height,width:`calc(100vw - ${u.x*2+u.width}px)`},...i==null?void 0:i.paper},children:e.jsx(oe,{singleList:v,data:n,slotProps:i})})})]}):e.jsx(w,{disabled:n.disabled,children:R})}function qe({sx:n,data:t,render:i,slotProps:r,enabledRootRedirect:o,cssVars:s,...m}){const h=S(),d={...P.vertical(h),...s};return e.jsx(C,{component:"nav",className:q.vertical.root,sx:{...d,flex:"1 1 auto",...n},...m,children:e.jsx(N,{sx:{gap:"var(--nav-item-gap)"},children:t.map(a=>e.jsx(Te,{data:a,render:i,cssVars:d,slotProps:r,enabledRootRedirect:o},a.title))})})}const Ge=l.forwardRef(({path:n,icon:t,info:i,title:r,open:o,render:s,active:m,hasChild:h,disabled:d,slotProps:a,externalLink:g,enabledRootRedirect:u,...j},v)=>{const p=U({path:n,icon:t,info:i,render:s,hasChild:h,externalLink:g,enabledRootRedirect:u});return e.jsxs(Ue,{disableRipple:!0,ref:v,"aria-label":r,open:o,active:m,disabled:d,className:Z({open:o&&!m,active:m,disabled:d}),sx:{...a==null?void 0:a.sx,[`& .${c.item.icon}`]:a==null?void 0:a.icon,[`& .${c.item.title}`]:a==null?void 0:a.title,[`& .${c.item.info}`]:a==null?void 0:a.info,[`& .${c.item.arrow}`]:a==null?void 0:a.arrow},...p.baseProps,...j,children:[t&&e.jsx(b,{component:"span",className:c.item.icon,children:p.renderIcon}),r&&e.jsx(b,{component:"span",className:c.item.title,children:r}),i&&e.jsx(b,{component:"span",className:c.item.info,children:p.renderInfo}),h&&e.jsx(x,{icon:"eva:arrow-ios-downward-fill",className:c.item.arrow})]})}),Ue=Y(J,{shouldForwardProp:n=>n!=="active"&&n!=="open"&&n!=="disabled"})(({active:n,open:t,disabled:i,theme:r})=>({minHeight:"var(--nav-item-height)",padding:"var(--nav-item-padding)",borderRadius:"var(--nav-item-radius)",transition:r.transitions.create(["background-color"],{duration:r.transitions.duration.standard}),"&:hover":{backgroundColor:"var(--nav-item-hover-bg)"},[`& .${c.item.title}`]:{...r.typography.body2,flexShrink:0,fontWeight:n?r.typography.fontWeightSemiBold:r.typography.fontWeightMedium},[`& .${c.item.icon}`]:{...y.icon,width:"var(--nav-icon-size)",height:"var(--nav-icon-size)",margin:"var(--nav-icon-margin)"},[`& .${c.item.arrow}`]:{...y.arrow},[`& .${c.item.info}`]:{...y.info},...n&&{color:"var(--nav-item-active-color)"},...t&&{backgroundColor:"var(--nav-item-open-bg)"},...i&&y.disabled}));function Ze({data:n,render:t,slotProps:i,enabledRootRedirect:r,cssVars:o}){var _;const s=S(),m=W(),[h,d]=l.useState(!1),a=l.useRef(null),g=K(n.path,!!n.children),[u,j]=l.useState({top:0,height:0}),v=((_=n.children)==null?void 0:_.length)===1,p=!v;l.useEffect(()=>{h&&k()},[m]);const f=l.useCallback(()=>{const B=a.current;if(B){const M=B.getBoundingClientRect();j({top:M.top,height:M.height})}},[]);l.useEffect(()=>(f(),window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}),[f]);const $=l.useCallback(()=>{n.children&&d(!0)},[n.children]),k=l.useCallback(()=>{d(!1)},[]),R=e.jsx(Ge,{ref:a,render:t,path:n.path,icon:n.icon,info:n.info,title:n.title,active:g,disabled:n.disabled,hasChild:!!n.children,open:n.children&&!!h,externalLink:Q(n.path),enabledRootRedirect:r,slotProps:i==null?void 0:i.rootItem,onMouseEnter:$,onMouseLeave:k});return n.children?e.jsxs(w,{disabled:n.disabled,children:[R,e.jsx(te,{disableScrollLock:!0,open:h,anchorEl:a.current,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},slotProps:{paper:{onMouseEnter:$,onMouseLeave:k,sx:{boxShadow:"none",overflow:"unset",backdropFilter:"none",background:"transparent",...p&&{right:0,mx:"auto",left:"0 !important",top:`${u.top+u.height}px !important`,maxWidth:{xs:s.breakpoints.values.lg,xl:s.breakpoints.values.xl}},...h&&{pointerEvents:"auto"},...i==null?void 0:i.paper}}},sx:{...o,pointerEvents:"none"},children:e.jsx(X,{sx:{...ae({theme:s,dropdown:!0}),p:2.5,borderRadius:2,...v&&{minWidth:240},...p&&{},...i==null?void 0:i.paper},children:e.jsx(oe,{singleList:v,data:n,slotProps:i})})})]}):e.jsx(w,{disabled:n.disabled,children:R})}function Ye({sx:n,data:t,render:i,slotProps:r,enabledRootRedirect:o,cssVars:s,...m}){const h=S(),d={...P.horizontal(h),...s};return e.jsx(C,{component:"nav",className:q.horizontal.root,sx:{...d,...n},...m,children:e.jsx(N,{sx:{gap:"var(--nav-item-gap)",flexDirection:"row"},children:t.map(a=>e.jsx(Ze,{data:a,render:i,cssVars:d,slotProps:r,enabledRootRedirect:o},a.title))})})}const I=[{title:"Metallic processing machinery",path:"#"},{title:"Machinery for food, beverage & cereal",path:"#"},{title:"Laser equipment",path:"#"},{title:"Mould",path:"#"},{title:"Textile machinery & parts",path:"#"},{title:"Cutting & fold-bend machine",path:"#"},{title:"Paper machinery",path:"#"},{title:"Rubber machinery",path:"#"},{title:"Chemical equipment & machinery",path:"#"},{title:"Mixing equipment",path:"#"},{title:"Machinery for garment, shoes & accessories",path:"#"},{title:"Crushing & culling machine",path:"#"}],D=[{title:"Plastic machinery",path:"#"},{title:"Woodworking machinery",path:"#"},{title:"Blow molding machine",path:"#"},{title:"Plastic recycling machine",path:"#"},{title:"Injection molding machine",path:"#"}],H=[{title:"Building material making machinery",path:"#"},{title:"Lifting equipment",path:"#"},{title:"Excavator",path:"#"},{title:"Concrete machinery",path:"#"},{title:"Stone processing machinery",path:"#"}],O=[{title:"Agriculture machinery",path:"#"},{title:"Livestock machineryfeed",path:"#"},{title:"Feed processing machinery",path:"#"},{title:"Tiller",path:"#"},{title:"Harvesting machine",path:"#"}],V=[{title:"Cnc machine tools",path:"#"},{title:"Lathe",path:"#"},{title:"Grinding machine ",path:"#"},{title:"Drilling machine ",path:"#"},{title:"Milling machine ",path:"#"}],ce=[{title:"Item 1",path:"#",icon:e.jsx(x,{icon:"solar:home-2-outline"}),slides:[...Array(16)].map((n,t)=>({name:z.productName(t),coverUrl:z.image.product(t),path:"#"})),moreLink:{title:"More Categories",path:"#"},tags:[{title:"Paper cup",path:"#"},{title:"Lotion pump",path:"#"},{title:"Brush cutter",path:"#"},{title:"Display rack",path:"#"},{title:"Glass bottle",path:"#"}],children:[{subheader:"Other machinery & parts",items:I},{subheader:"Plastic & woodworking",items:D},{subheader:"Construction machinery",items:H},{subheader:"Agriculture machinery",items:O},{subheader:"Machine tools",items:V}]},{title:"Item 2",path:"#",icon:e.jsx(x,{icon:"solar:atom-outline"}),children:[{subheader:"Other machinery & parts",items:I},{subheader:"Plastic & woodworking",items:D},{subheader:"Construction machinery",items:H},{subheader:"Agriculture machinery",items:O},{subheader:"Machine tools",items:V}]},{title:"Item 3",path:"#",icon:e.jsx(x,{icon:"solar:chart-square-outline"}),info:e.jsx(re,{color:"info",children:"+3"}),children:[{items:I}]},{title:"Item 4",path:"#",icon:e.jsx(x,{icon:"solar:confetti-minimalistic-outline"}),info:"+72",children:[{items:[{title:"Foods",path:"#"},{title:"Cosmetics  ",path:"#"},{title:"Clothes ",path:"#"}]}]},{title:"Item 5",path:"#",icon:e.jsx(x,{icon:"solar:gallery-circle-outline"}),children:[{items:[{title:"Foods",path:"#"},{title:"Cosmetics  ",path:"#"},{title:"Clothes ",path:"#"}]}]},{title:"Item 6",path:"#",icon:e.jsx(x,{icon:"solar:hanger-2-outline"}),children:[{items:[{title:"Foods",path:"#"},{title:"Cosmetics  ",path:"#"},{title:"Clothes ",path:"#"}]}]},{title:"Item 7",path:"#",icon:e.jsx(x,{icon:"solar:letter-outline"}),children:[{items:[{title:"Foods",path:"#"},{title:"Cosmetics  ",path:"#"},{title:"Clothes ",path:"#"}]}]},{title:"Item 8",path:"https://www.google.com/",icon:e.jsx(x,{icon:"solar:airbuds-case-open-outline"}),disabled:!0}],Je=[{title:"Item 1",path:"#",icon:"icon.item1",slides:[...Array(16)].map((n,t)=>({name:z.productName(t),coverUrl:z.image.product(t),path:"#"})),moreLink:{title:"More Categories",path:"#"},tags:[{title:"Paper cup",path:"#"},{title:"Lotion pump",path:"#"},{title:"Brush cutter",path:"#"},{title:"Display rack",path:"#"},{title:"Glass bottle",path:"#"}],children:[{subheader:"Other machinery & parts",items:I},{subheader:"Plastic & woodworking",items:D},{subheader:"Construction machinery",items:H},{subheader:"Agriculture machinery",items:O},{subheader:"Machine tools",items:V}]},{title:"Item 2",path:"#",icon:"icon.item2",children:[{subheader:"Other machinery & parts",items:I},{subheader:"Plastic & woodworking",items:D},{subheader:"Construction machinery",items:H},{subheader:"Agriculture machinery",items:O},{subheader:"Machine tools",items:V}]},{title:"Item 3",path:"#",icon:"icon.item3",info:["info.item3","+3"],children:[{items:I}]},{title:"Item 4",path:"#",icon:"icon.item4",info:["info.item4","+72"],children:[{items:[{title:"Foods",path:"#"},{title:"Cosmetics  ",path:"#"},{title:"Clothes ",path:"#"}]}]},{title:"Item 5",path:"#",icon:"icon.item5",children:[{items:[{title:"Foods",path:"#"},{title:"Cosmetics  ",path:"#"},{title:"Clothes ",path:"#"}]}]}];function Ke(){return e.jsx(We,{data:ce,cssVars:{"--nav-item-gap":"8px"},slots:{button:e.jsx(de,{color:"inherit",variant:"contained",startIcon:e.jsx(x,{icon:"carbon:menu"}),children:"Mobile menu"}),topArea:e.jsxs(b,{sx:{px:2.5,py:3},children:[e.jsx(ue,{}),","]}),bottomArea:e.jsx(F,{children:e.jsx(b,{sx:{p:2,textAlign:"center",color:"text.secondary",typography:"subtitle2"},children:"Bottom"})})}})}function Qe(){return e.jsxs(C,{direction:"row",spacing:3,sx:{height:640,width:1},children:[e.jsxs(X,{variant:"outlined",sx:{width:260,flexShrink:0,display:"flex",borderRadius:2,flexDirection:"column"},children:[e.jsx(L,{variant:"h6",sx:{p:2},children:"Vertical menu"}),e.jsx(F,{sx:{mb:2}}),e.jsx(qe,{data:ce,cssVars:{"--nav-item-gap":"8px"},slotProps:{rootItem:{sx:{typography:"subtitle1"},icon:{},title:{fontFamily:n=>n.typography.fontSecondaryFamily},info:{},arrow:{}},subItem:{},paper:{top:40},subheader:{},tags:{},moreLink:{},carousel:{sx:{},displayCount:8}}})]}),e.jsx(b,{sx:{height:1,borderRadius:2,flex:"1 1 auto",bgcolor:n=>E(n.vars.palette.grey["500Channel"],.04),border:n=>`dashed 1px ${n.vars.palette.divider}`}})]})}function Xe(){return e.jsx(pe,{position:"sticky",sx:{bgcolor:"background.paper",boxShadow:n=>n.customShadows.z8},children:e.jsxs(xe,{component:ve,children:[e.jsx(L,{variant:"h6",sx:{flexGrow:1},children:"Horizontal menu"}),e.jsx(Ye,{data:Je,render:{navIcon:Pe,navInfo:en},cssVars:{"--nav-item-gap":"8px"},slotProps:{rootItem:{sx:{},icon:{},title:{typography:"subtitle1",fontFamily:n=>n.typography.fontSecondaryFamily},info:{},arrow:{}},subItem:{},paper:{},subheader:{},tags:{},moreLink:{},carousel:{sx:{},displayCount:8}}})]})})}const Pe={"icon.item1":e.jsx(x,{icon:"solar:home-2-outline"}),"icon.item2":e.jsx(x,{icon:"solar:atom-outline"}),"icon.item3":e.jsx(x,{icon:"solar:chart-square-outline"}),"icon.item4":e.jsx(x,{icon:"solar:confetti-minimalistic-outline"}),"icon.item5":e.jsx(x,{icon:"solar:gallery-circle-outline"})},en=n=>({"info.item3":e.jsx(re,{color:"info",children:n}),"info.item4":e.jsx(e.Fragment,{children:n})});function nn(){return e.jsxs(e.Fragment,{children:[e.jsx(Le,{children:e.jsx(je,{heading:"Mega Menu",links:[{name:"Components",href:ge.components},{name:"Mega Menu"}]})}),e.jsx(Xe,{}),e.jsxs(Ne,{sx:{alignItems:"flex-start"},children:[e.jsx(Ke,{}),e.jsx(Qe,{})]})]})}const tn={title:`Mega menu | Components - ${be.site.name}`};function pn(){return e.jsxs(e.Fragment,{children:[e.jsx(fe,{children:e.jsxs("title",{children:[" ",tn.title]})}),e.jsx(nn,{})]})}export{pn as default};
