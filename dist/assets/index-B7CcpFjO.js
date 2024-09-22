import{j as e,aB as k,fG as W,du as S,g as v,C as m,dJ as Y,r as u,fH as Z,ft as F,fv as s,fu as D,B as b,dw as P,I as L,aS as _,aT as A,fw as j,s as ee,fy as O,fB as G,d_ as J,fx as R,dj as ae,fz as z,v as E,b as H,S as f,bK as ie,fC as te,w as ne,y as K,aA as se,fD as oe,fI as re,D as ce,fJ as le,T as $,dA as me,bL as ve,fK as de,p as he,H as pe}from"./index-DLJImauo.js";import{C as ue}from"./custom-breadcrumbs-B-49wW2q.js";import{u as xe}from"./index-BoF40ko4.js";import{S as be}from"./Skeleton-BFlFQZOr.js";import{T as N,a as C}from"./ToggleButtonGroup-Pt8rZl6e.js";import{T as ge}from"./TextField-Dn-4Yx6H.js";import{F as fe}from"./FormControlLabel-C_QV2Cmj.js";import{C as je}from"./component-hero-CCPDuJjw.js";import{S as ye}from"./component-template-COBXpeD3.js";import"./FormControl-CkwXYy0A.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CEebhHey.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CL79af0c.js";import"./Select-C24IVDgk.js";import"./Menu-u9Fg2yBB.js";import"./InputBase-DlzL5OFi.js";import"./FormHelperText-kKfXHIoW.js";import"./CardHeader-DDkjAWap.js";import"./CardContent-S3vkTNCY.js";function we(){const a="/api/navbar",{data:n,isLoading:o,error:t,isValidating:i}=xe(a,Y);return u.useMemo(()=>({data:(n==null?void 0:n.navItems)??[],isLoading:o,error:t,isValidating:i,isEmpty:!o&&!(n!=null&&n.navItems.length)}),[n==null?void 0:n.navItems,t,o,i])}function $e(){const a=we();return e.jsx(k,{variant:"outlined",sx:{p:2,width:1,mx:"auto",maxWidth:320,borderRadius:2},children:a.isLoading?[...Array(8)].map((n,o)=>e.jsx(be,{variant:"rounded",height:48,sx:{borderRadius:1,my:.5}},o)):e.jsx(W,{data:a.data,render:{navIcon:Ie,navInfo:n=>({"info.landing":e.jsx(S,{color:"error",children:n}),"info.blog":e.jsx(S,{color:"info",children:n}),"info.blog.item1":e.jsx(e.Fragment,{children:n})})}})})}const Ie={"icon.landing":e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-dashboard.svg`}),"icon.services":e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-analytics.svg`}),"icon.blog":e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-blog.svg`}),"icon.about":e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-user.svg`}),"icon.tour":e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-tour.svg`}),"icon.menu":e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-menu-item.svg`}),"icon.level2a":e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-chat.svg`}),"icon.level2b":e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-mail.svg`}),"icon.level2c":e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-calendar.svg`})},T=[{subheader:"Marketing",items:[{title:"Landing",path:"#landing",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-dashboard.svg`}),roles:["admin"],caption:"Display only admin role",info:e.jsx(S,{color:"error",children:"+2 "})},{title:"Services",path:"#services",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-analytics.svg`}),roles:["admin","user"]},{title:"Blog",path:"#blog",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-blog.svg`}),info:e.jsx(S,{color:"info",children:"+3 "}),children:[{title:"Item 1",path:"#blog/item-1",caption:"Display caption",info:"+2"},{title:"Item 2",path:"#blog/item-2"}]}]},{subheader:"Travel",items:[{title:"About",path:"#about",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-user.svg`}),info:"+4"},{title:"Contact",path:"#contact",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-tour.svg`})},{title:"Level",path:"#level",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-menu-item.svg`}),children:[{title:"Level 2a",path:"#level/2a",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-chat.svg`}),caption:"This is the caption",children:[{title:"Level 3a",path:"#level/2a/3a"},{title:"Level 3b",path:"#level/2a/3b",children:[{title:"Level 4a",path:"#level/2a/3b/4a"},{title:"Level 4b",path:"#level/2a/3b/4b"}]},{title:"Level 3c",path:"#level/2a/3c"}]},{title:"Level 2b",path:"#level/2b",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-mail.svg`})},{title:"Level 2c",path:"#level/2c",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-calendar.svg`})}]}]}];function Ne(){return e.jsx(k,{variant:"outlined",sx:{p:.5,mx:"auto",maxWidth:96,borderRadius:1},children:e.jsx(Z,{data:T,cssVars:{"--nav-item-gap":"8px"},slotProps:{paper:{},rootItem:{sx:{},icon:{},title:{},caption:{},info:{},arrow:{}},subItem:{sx:{},icon:{},title:{},caption:{},info:{},arrow:{}}}})})}const Ce=u.forwardRef(({path:a,icon:n,info:o,title:t,caption:i,open:r,depth:d,render:c,active:h,disabled:p,hasChild:x,slotProps:l,externalLink:y,enabledRootRedirect:w,...I},B)=>{const g=F({path:a,icon:n,info:o,depth:d,render:c,hasChild:x,externalLink:y,enabledRootRedirect:w});return e.jsxs(ke,{ref:B,"aria-label":t,depth:d,active:h,disabled:p,open:r&&!h,sx:{...l==null?void 0:l.sx,[`& .${s.item.icon}`]:l==null?void 0:l.icon,[`& .${s.item.texts}`]:l==null?void 0:l.texts,[`& .${s.item.title}`]:l==null?void 0:l.title,[`& .${s.item.caption}`]:l==null?void 0:l.caption,[`& .${s.item.arrow}`]:l==null?void 0:l.arrow},className:D({open:r&&!h,active:h,disabled:p}),...g.baseProps,...I,children:[n&&e.jsx(b,{component:"span",className:s.item.icon,children:g.renderIcon}),t&&e.jsxs(b,{component:"span",className:s.item.texts,children:[e.jsx(b,{component:"span",className:s.item.title,children:t}),i&&e.jsx(P,{title:i,placement:"top-start",children:e.jsx(b,{component:"span",className:s.item.caption,children:i})})]}),o&&e.jsx(b,{component:"span",className:s.item.info,children:g.renderInfo}),x&&e.jsx(L,{width:16,icon:r?"eva:arrow-ios-downward-fill":"eva:arrow-ios-forward-fill",className:s.item.arrow})]})}),ke=_(A,{shouldForwardProp:a=>a!=="active"&&a!=="open"&&a!=="disabled"&&a!=="depth"})(({active:a,open:n,disabled:o,depth:t,theme:i})=>{const r=t===1,d=!r,c={item:{width:"100%",color:"var(--nav-item-color)",borderRadius:"var(--nav-item-radius)",paddingTop:"var(--nav-item-pt)",paddingLeft:"var(--nav-item-pl)",paddingRight:"var(--nav-item-pr)",paddingBottom:"var(--nav-item-pb)","&:hover":{backgroundColor:"var(--nav-item-hover-color)"}},icon:{...j.icon,width:"var(--nav-icon-size)",height:"var(--nav-icon-size)",margin:"var(--nav-icon-margin)"},texts:{minWidth:0,flex:"1 1 auto"},title:{...j.noWrap,...i.typography.body2,fontWeight:a?i.typography.fontWeightSemiBold:i.typography.fontWeightMedium},caption:{...j.noWrap,...i.typography.caption,color:"var(--nav-item-caption-color)"},arrow:{...j.arrow},info:{...j.info}};return{...r&&{...c.item,minHeight:"var(--nav-item-root-height)",[`& .${s.item.icon}`]:{...c.icon},[`& .${s.item.texts}`]:{...c.texts},[`& .${s.item.title}`]:{...c.title},[`& .${s.item.caption}`]:{...c.caption},[`& .${s.item.arrow}`]:{...c.arrow},[`& .${s.item.info}`]:{...c.info},...a&&{color:"var(--nav-item-root-active-color)",backgroundColor:"var(--nav-item-root-active-bg)","&:hover":{backgroundColor:"var(--nav-item-root-active-hover-bg)"},[ee.dark]:{color:"var(--nav-item-root-active-color-on-dark)"}},...n&&{color:"var(--nav-item-root-open-color)",backgroundColor:"var(--nav-item-root-open-bg)"}},...d&&{...c.item,minHeight:"var(--nav-item-sub-height)",[`& .${s.item.icon}`]:{...c.icon},[`& .${s.item.texts}`]:{...c.texts},[`& .${s.item.title}`]:{...c.title},[`& .${s.item.caption}`]:{...c.caption},[`& .${s.item.arrow}`]:{...c.arrow},[`& .${s.item.info}`]:{...c.info},"&::before":{width:3,left:-13,height:16,content:'""',borderRadius:3,position:"absolute",transform:"scale(0)",transition:i.transitions.create(["transform"],{duration:i.transitions.duration.short}),...a&&{transform:"scale(1)",backgroundColor:"currentColor"}},...a&&{color:"var(--nav-item-sub-active-color)",backgroundColor:"var(--nav-item-sub-active-bg)"},...n&&{color:"var(--nav-item-sub-open-color)",backgroundColor:"var(--nav-item-sub-open-bg)"}},...o&&j.disabled}});function U({data:a,render:n,depth:o,slotProps:t,enabledRootRedirect:i}){const r=O(),d=G(a.path,!!a.children),[c,h]=u.useState(d);u.useEffect(()=>{d||x()},[r]);const p=u.useCallback(()=>{a.children&&h(y=>!y)},[a.children]),x=u.useCallback(()=>{h(!1)},[]),l=e.jsx(Ce,{render:n,path:a.path,icon:a.icon,title:a.title,info:a.info,caption:a.caption,depth:o,open:c,hasChild:!!a.children,enabledRootRedirect:i,externalLink:J(a.path),slotProps:o===1?t==null?void 0:t.rootItem:t==null?void 0:t.subItem,onClick:p});return a.children?e.jsxs(R,{disabled:a.disabled,sx:{[`& .${s.li}`]:{"&:first-of-type":{mt:"var(--nav-item-gap)"}}},children:[l,e.jsx(ae,{in:c,sx:{...o+1!==1&&{pl:"calc(var(--nav-item-pl) - 2px + var(--nav-icon-size) / 2)",[`& .${s.ul}`]:{position:"relative",pl:"12px","&::before":{top:0,left:0,bottom:0,width:"1px",content:'""',opacity:.24,bgcolor:"grey.500",position:"absolute"}}}},children:e.jsx(Se,{data:a.children,render:n,depth:o,slotProps:t,enabledRootRedirect:i})})]}):e.jsx(R,{disabled:a.disabled,children:l})}function Se({data:a,render:n,depth:o,slotProps:t,enabledRootRedirect:i}){return e.jsx(z,{sx:{gap:"var(--nav-item-gap)"},children:a.map(r=>e.jsx(U,{data:r,render:n,depth:o+1,slotProps:t,enabledRootRedirect:i},r.title))})}const q={desktop:{root:"nav__basic__desktop"},mobile:{root:"nav__basic__mobile"}};function Re(a){const{shape:n,spacing:o,vars:{palette:t}}=a;return{"--nav-item-gap":o(3),"--nav-item-radius":"0","--nav-item-caption-color":t.text.disabled,"--nav-item-root-padding":"0","--nav-item-root-active-color":t.primary.main,"--nav-item-sub-radius":`${n.borderRadius*.75}px`,"--nav-item-sub-padding":o(.75,1,.75,1),"--nav-item-sub-color":t.text.secondary,"--nav-item-sub-hover-color":t.text.primary,"--nav-item-sub-hover-bg":t.action.hover,"--nav-item-sub-active-color":t.text.primary,"--nav-item-sub-active-bg":t.action.selected,"--nav-item-sub-open-color":t.text.primary,"--nav-item-sub-open-bg":t.action.hover,"--nav-icon-size":"22px","--nav-icon-margin":o(0,1,0,0)}}function Le(a){const{shape:n,spacing:o,vars:{palette:t}}=a;return{"--nav-item-gap":o(.5),"--nav-item-radius":`${n.borderRadius}px`,"--nav-item-pt":o(.5),"--nav-item-pl":o(1.5),"--nav-item-pr":o(1),"--nav-item-pb":o(.5),"--nav-item-color":t.text.secondary,"--nav-item-hover-color":t.action.hover,"--nav-item-caption-color":t.text.disabled,"--nav-item-root-height":"44px","--nav-item-root-active-color":t.primary.main,"--nav-item-root-active-color-on-dark":t.primary.light,"--nav-item-root-active-bg":E(t.primary.mainChannel,.08),"--nav-item-root-active-hover-bg":E(t.primary.mainChannel,.16),"--nav-item-root-open-color":t.text.primary,"--nav-item-root-open-bg":t.action.hover,"--nav-item-sub-height":"36px","--nav-item-sub-active-color":t.text.primary,"--nav-item-sub-active-bg":t.action.hover,"--nav-item-sub-open-color":t.text.primary,"--nav-item-sub-open-bg":t.action.hover,"--nav-icon-size":"24px","--nav-icon-margin":o(0,2,0,0)}}const X={desktop:Re,mobile:Le};function ze({sx:a,data:n,render:o,slotProps:t,enabledRootRedirect:i,cssVars:r,...d}){const c=H(),h={...X.mobile(c),...r};return e.jsx(f,{component:"nav",className:q.mobile.root,sx:{...h,...a},...d,children:e.jsx(z,{sx:{flex:"1 1 auto",gap:"var(--nav-item-gap)"},children:n.map(p=>e.jsx(U,{depth:1,data:p,render:o,slotProps:t,enabledRootRedirect:i},p.title))})})}const Be=u.forwardRef(({path:a,icon:n,info:o,title:t,caption:i,open:r,depth:d,render:c,active:h,disabled:p,hasChild:x,slotProps:l,externalLink:y,enabledRootRedirect:w,...I},B)=>{const g=F({path:a,icon:n,info:o,depth:d,render:c,hasChild:x,externalLink:y,enabledRootRedirect:w});return e.jsxs(Me,{ref:B,"aria-label":t,depth:d,active:h,disabled:p,open:r&&!h,disableRipple:g.rootItem,sx:{...l==null?void 0:l.sx,[`& .${s.item.icon}`]:l==null?void 0:l.icon,[`& .${s.item.texts}`]:l==null?void 0:l.texts,[`& .${s.item.title}`]:l==null?void 0:l.title,[`& .${s.item.caption}`]:l==null?void 0:l.caption,[`& .${s.item.arrow}`]:l==null?void 0:l.arrow},className:D({open:r&&!h,active:h,disabled:p}),...g.baseProps,...I,children:[n&&e.jsx(b,{component:"span",className:s.item.icon,children:g.renderIcon}),t&&e.jsxs(b,{component:"span",className:s.item.texts,children:[e.jsx(b,{component:"span",className:s.item.title,children:t}),i&&g.subItem&&e.jsx(b,{component:"span",className:s.item.caption,children:i})]}),o&&e.jsx(b,{component:"span",className:s.item.info,children:g.renderInfo}),x&&e.jsx(L,{width:16,icon:g.subItem?"eva:arrow-ios-forward-fill":"eva:arrow-ios-downward-fill",className:s.item.arrow})]})}),Me=_(A,{shouldForwardProp:a=>a!=="active"&&a!=="open"&&a!=="disabled"&&a!=="depth"})(({active:a,open:n,disabled:o,depth:t,theme:i})=>{const r=t===1,d=t!==1,c={item:{},icon:{...j.icon,width:"var(--nav-icon-size)",height:"var(--nav-icon-size)",margin:"var(--nav-icon-margin)"},texts:{display:"flex",flex:"1 1 auto",flexDirection:"column"},title:{...i.typography.body2,fontWeight:a?i.typography.fontWeightSemiBold:i.typography.fontWeightMedium},caption:{...i.typography.caption,color:"var(--nav-item-caption-color)"},arrow:{...j.arrow},info:{...j.info}};return{...r&&{...c.item,padding:"var(--nav-item-root-padding)",borderRadius:"var(--nav-item-radius)",transition:i.transitions.create(["all"],{duration:i.transitions.duration.shorter}),"&:hover":{opacity:.64},[`& .${s.item.icon}`]:{...c.icon},[`& .${s.item.texts}`]:{...c.texts},[`& .${s.item.title}`]:{...c.title},[`& .${s.item.arrow}`]:{...c.arrow},[`& .${s.item.info}`]:{...c.info},...a&&{color:"var(--nav-item-root-active-color)"},...n&&{opacity:.64}},...d&&{...c.item,fontSize:i.typography.pxToRem(13),borderRadius:"var(--nav-item-sub-radius)",padding:"var(--nav-item-sub-padding)","&:hover":{color:"var(--nav-item-sub-hover-color)",backgroundColor:"var(--nav-item-sub-hover-bg)"},color:"var(--nav-item-sub-color)",[`& .${s.item.icon}`]:{...c.icon},[`& .${s.item.texts}`]:{...c.texts},[`& .${s.item.title}`]:{...c.title},[`& .${s.item.caption}`]:{...c.caption},[`& .${s.item.arrow}`]:{...c.arrow,marginRight:i.spacing(-.5)},[`& .${s.item.info}`]:{...c.info},...a&&{color:"var(--nav-item-sub-active-color)",backgroundColor:"var(--nav-item-sub-active-bg)"},...n&&{color:"var(--nav-item-sub-open-color)",backgroundColor:"var(--nav-item-sub-open-bg)"}},...o&&j.disabled}});function Q({data:a,depth:n,render:o,cssVars:t,slotProps:i,enabledRootRedirect:r}){const d=H(),c=O(),h=u.useRef(null),p=G(a.path,!!a.children),[x,l]=u.useState(!1);u.useEffect(()=>{x&&w()},[c]);const y=u.useCallback(()=>{a.children&&l(!0)},[a.children]),w=u.useCallback(()=>{l(!1)},[]),I=e.jsx(Be,{ref:h,render:o,path:a.path,icon:a.icon,info:a.info,title:a.title,caption:a.caption,depth:n,active:p,disabled:a.disabled,hasChild:!!a.children,open:a.children&&x,enabledRootRedirect:r,externalLink:J(a.path),slotProps:n===1?i==null?void 0:i.rootItem:i==null?void 0:i.subItem,onMouseEnter:y,onMouseLeave:w});return a.children?e.jsxs(R,{disabled:a.disabled,children:[I,e.jsx(ie,{disableScrollLock:!0,open:x,anchorEl:h.current,anchorOrigin:n===1?{vertical:"bottom",horizontal:"left"}:{vertical:"center",horizontal:"right"},transformOrigin:n===1?{vertical:"top",horizontal:"left"}:{vertical:"center",horizontal:"left"},slotProps:{paper:{onMouseEnter:y,onMouseLeave:w,sx:{px:.75,overflow:"unset",boxShadow:"none",backdropFilter:"none",background:"transparent",...n===1&&{pt:1,ml:-.75},...x&&{pointerEvents:"auto"}}}},sx:{...t,pointerEvents:"none"},children:e.jsx(k,{className:s.paper,sx:{minWidth:180,...te({theme:d,dropdown:!0}),...i==null?void 0:i.paper},children:e.jsx(He,{data:a.children,depth:n,render:o,cssVars:t,slotProps:i,enabledRootRedirect:r})})})]}):e.jsx(R,{disabled:a.disabled,children:I})}function He({data:a,depth:n,render:o,cssVars:t,slotProps:i,enabledRootRedirect:r}){return e.jsx(z,{sx:{gap:.5},children:a.map(d=>e.jsx(Q,{data:d,render:o,depth:n+1,cssVars:t,slotProps:i,enabledRootRedirect:r},d.title))})}function Te({sx:a,data:n,render:o,slotProps:t,enabledRootRedirect:i,cssVars:r,...d}){const c=H(),h={...X.desktop(c),...r};return e.jsx(f,{component:"nav",spacing:5,direction:"row",className:q.desktop.root,sx:{...h,...a},...d,children:e.jsx(z,{sx:{flexDirection:"row",gap:"var(--nav-item-gap)"},children:n.map(p=>e.jsx(Q,{depth:1,data:p,render:o,cssVars:h,slotProps:t,enabledRootRedirect:i},p.title))})})}function Ee(){const a=ne();return e.jsxs(e.Fragment,{children:[e.jsxs(k,{variant:"outlined",sx:{p:2,gap:2,width:1,borderRadius:2,display:"flex",overflowX:"auto",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(K,{onClick:a.onTrue,children:e.jsx(L,{icon:"carbon:menu"})}),e.jsx(Te,{data:V,cssVars:{"--nav-item-gap":"16px"},slotProps:{rootItem:{sx:{},icon:{},texts:{},title:{},caption:{},arrow:{}},subItem:{sx:{},icon:{},texts:{},title:{},caption:{},arrow:{}},paper:{}}})]}),e.jsxs(se,{open:a.value,onClose:a.onFalse,PaperProps:{sx:{width:280}},children:[e.jsx(b,{sx:{pl:2.5,py:2},children:e.jsx(oe,{})}),e.jsx(ze,{sx:{px:1.5},data:V,cssVars:{"--nav-item-gap":"8px"},slotProps:{rootItem:{sx:{},icon:{},texts:{},title:{},caption:{},info:{},arrow:{}},subItem:{sx:{},icon:{},texts:{},title:{},caption:{},info:{},arrow:{}},paper:{}}})]})]})}const V=[{title:"Home",path:"#",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-analytics.svg`})},{title:"Page",path:"/basic/page",caption:"This is the caption",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-banking.svg`}),info:e.jsx(S,{color:"info",children:"+2"}),children:[{title:"Page 1",path:"/basic/page/1",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-booking.svg`}),caption:"This is the caption",info:"+3",children:[{title:"Page 1.1",path:"/basic/page/1/1"},{title:"Page 1.2",path:"/basic/page/1/2"}]},{title:"Page 2",path:"/basic/page/2",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-chat.svg`}),children:[{title:"Page 2.1",path:"/basic/page/2/1"},{title:"Page 2.2",path:"/basic/page/2/2"},{title:"Page 2.3",path:"/basic/page/2/3",children:[{title:"Page 2.3.1",path:"/basic/page/2/3/1"},{title:"Page 2.3.2",path:"/basic/page/2/3/2"},{title:"Page 2.3.3",path:"/basic/page/2/3/3"}]}]},{title:"Page 3",path:"#",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-lock.svg`})}]},{title:"Blog",path:"#",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-mail.svg`})},{title:"Contact",path:"#",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-user.svg`}),disabled:!0},{title:"External",path:"https://www.google.com/",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-tour.svg`})}],M={gap:4,icon:24,radius:8,subItemHeight:36,rootItemHeight:44,currentRole:"admin",hiddenSubheader:!1,padding:"4px 8px 4px 12px"};function Ve(){const[a,n]=u.useState(M),o=!re(M,a),t=u.useCallback((r,d)=>{n(c=>({...c,[r]:d}))},[]),i=u.useCallback(()=>{n(M)},[]);return e.jsxs(f,{spacing:5,direction:"row",flexWrap:"wrap",justifyContent:"center",children:[e.jsxs(k,{variant:"outlined",sx:{p:2,width:1,maxWidth:320,borderRadius:2,display:"flex",flexDirection:"column"},children:[e.jsx(W,{data:T,sx:{flex:"1 1 auto"},cssVars:{"--nav-item-gap":`${a.gap}px`},slotProps:{currentRole:a.currentRole,rootItem:{sx:{padding:a.padding,borderRadius:`${a.radius}px`,minHeight:a.rootItemHeight},icon:{width:a.icon,height:a.icon,...!a.icon&&{display:"none"}},texts:{},title:{},caption:{},info:{},arrow:{}},subItem:{sx:{padding:a.padding,borderRadius:`${a.radius}px`,minHeight:a.subItemHeight},icon:{width:a.icon,height:a.icon,...!a.icon&&{display:"none"}},texts:{},title:{},caption:{},info:{},arrow:{}},subheader:{...a.hiddenSubheader&&{display:"none"}}}}),e.jsx(ce,{sx:{my:2}}),e.jsx(le,{depth:1,path:"#",title:"Chat",caption:"Praesent porttitor nulla vitae posuere",icon:e.jsx(v,{src:`${m.site.basePath}/assets/icons/navbar/ic-chat.svg`})})]}),e.jsx(We,{config:a,onChangeConfig:t,canReset:o,onReset:i})]})}function We({config:a,onChangeConfig:n,canReset:o,onReset:t}){return e.jsxs(f,{spacing:3,sx:{p:3,borderRadius:2,position:"relative",bgcolor:"background.neutral"},children:[e.jsxs(b,{display:"flex",alignItems:"center",children:[e.jsx($,{variant:"h6",sx:{flexGrow:1},children:"Controls"}),o&&e.jsx(K,{onClick:t,sx:{top:16,right:16,zIndex:9,position:"absolute"},children:e.jsx(me,{color:"error",variant:"dot",invisible:!o,children:e.jsx(L,{icon:"solar:restart-bold"})})})]}),e.jsxs(f,{spacing:1,children:[e.jsx($,{variant:"subtitle2",children:"Gap"}),e.jsx(N,{exclusive:!0,size:"small",value:a.gap,onChange:(i,r)=>{r!==null&&n("gap",r)},children:[4,8,16,40].map(i=>e.jsx(C,{value:i,sx:{width:1},children:i},i))})]}),e.jsxs(f,{spacing:1,children:[e.jsx($,{variant:"subtitle2",children:"Icon"}),e.jsx(N,{exclusive:!0,size:"small",value:a.icon,onChange:(i,r)=>{r!==null&&n("icon",r)},children:[0,16,20,24,40].map(i=>e.jsx(C,{value:i,sx:{width:1},children:i},i))})]}),e.jsxs(f,{spacing:1,children:[e.jsx($,{variant:"subtitle2",children:"Radius"}),e.jsx(N,{exclusive:!0,size:"small",value:a.radius,onChange:(i,r)=>{r!==null&&n("radius",r)},children:[0,8,16,40].map(i=>e.jsx(C,{value:i,sx:{width:1},children:i},i))})]}),e.jsxs(f,{spacing:1,children:[e.jsx($,{variant:"subtitle2",children:"Role"}),e.jsx(N,{exclusive:!0,size:"small",value:a.currentRole,onChange:(i,r)=>{r!==null&&n("currentRole",r)},children:["admin","user"].map(i=>e.jsx(C,{value:i,sx:{width:1},children:i},i))})]}),e.jsxs(f,{spacing:1,children:[e.jsx($,{variant:"subtitle2",children:"Item Root Height"}),e.jsx(N,{exclusive:!0,size:"small",value:a.rootItemHeight,onChange:(i,r)=>{r!==null&&n("rootItemHeight",r)},children:[36,44,64,80].map(i=>e.jsx(C,{value:i,sx:{width:1},children:i},i))})]}),e.jsxs(f,{spacing:1,children:[e.jsx($,{variant:"subtitle2",children:"Item Sub Height"}),e.jsx(N,{exclusive:!0,size:"small",value:a.subItemHeight,onChange:(i,r)=>{r!==null&&n("subItemHeight",r)},children:[36,44,64,80].map(i=>e.jsx(C,{value:i,sx:{width:1},children:i},i))})]}),e.jsx(ge,{label:"Item Padding",value:a.padding||"",onChange:i=>n("padding",i.target.value)}),e.jsx(fe,{control:e.jsx(ve,{checked:a.hiddenSubheader,onClick:()=>n("hiddenSubheader",!a.hiddenSubheader)}),label:"Hidden subheader"})]})}function Fe(){return e.jsx(k,{variant:"outlined",sx:{px:2,height:80,borderRadius:2},children:e.jsx(de,{data:T,cssVars:{"--nav-item-gap":"24px"},slotProps:{paper:{},rootItem:{sx:{typography:"subtitle1",fontFamily:a=>a.typography.fontSecondaryFamily},icon:{},title:{},caption:{},info:{},arrow:{}},subItem:{sx:{},icon:{},title:{},caption:{},info:{},arrow:{}}}})})}const De=[{name:"Basic",component:e.jsx(Ee,{})},{name:"Vertical",component:e.jsx(Ve,{})},{name:"Mini",component:e.jsx(Ne,{})},{name:"Horizontal",component:e.jsx(Fe,{})},{name:"Data from API",component:e.jsx($e,{})}];function _e(){return e.jsxs(e.Fragment,{children:[e.jsx(je,{children:e.jsx(ue,{heading:"Navigation bar",links:[{name:"Components",href:he.components},{name:"Navigation bar"}]})}),e.jsx(ye,{data:De})]})}const Ae={title:`Navigation bar | Components - ${m.site.name}`};function la(){return e.jsxs(e.Fragment,{children:[e.jsx(pe,{children:e.jsxs("title",{children:[" ",Ae.title]})}),e.jsx(_e,{})]})}export{la as default};
