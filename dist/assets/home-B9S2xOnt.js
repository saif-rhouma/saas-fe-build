import{u as Z,r as I,a as J,j as e,I as b,m as i,S as c,B as p,b as F,s as W,c as ee,M as te,v as h,C as g,t as V,T as j,d as de,A as se,_ as S,e as B,R as pe,p as D,L as xe,f as w,g as ne,h as H,G as $,D as E,i as he,k as me,H as ge}from"./index-D-ZKGqTU.js";import{F as ue}from"./Fab-Bz5cHSDa.js";import{u as ye,a as ve,S as je}from"./use-scroll-progress-DJGhR-Y6.js";import{v as m}from"./fade-o6mfZnVH.js";import{u as ie,v as fe,A as be}from"./animate-count-up-HR9bPZ47.js";import{A as we}from"./AvatarGroup-CXQqpOFQ.js";import{u as ke}from"./use-tabs-DGHY62Sd.js";import{T as Ce,a as Ie}from"./Tabs-BAzl82ph.js";import{C as Se}from"./carousel-progress-bar-BQbRyWCv.js";import{u as $e}from"./use-carousel-DfLeAtBu.js";import{C as Fe}from"./carousel-dot-buttons-Dlec1bFi.js";import{C as Me}from"./carousel-arrow-buttons-CA0_gEcV.js";import{R as Te}from"./Rating-C-gTF_lZ.js";import"./use-motion-value-CFysMvBc.js";import"./transition-BJzcwH5q.js";import"./use-in-view-BLOl18mZ.js";import"./KeyboardArrowRight-DzNmTPM2.js";import"./visuallyHidden-Dan1xhjv.js";function De({value:s=90,sx:n,...t}){const{scrollYProgress:a}=Z(),[d,o]=I.useState(!1),l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return J(a,"change",r=>{const u=Math.floor(r*100)>s;o(u)}),e.jsx(ue,{"aria-label":"Back to top",onClick:l,sx:{width:48,height:48,position:"fixed",transform:"scale(0)",right:{xs:24,md:32},bottom:{xs:24,md:32},zIndex:r=>r.zIndex.speedDial,transition:r=>r.transitions.create(["transform"]),...d&&{transform:"scale(1)"},...n},...t,children:e.jsx(b,{width:24,icon:"solar:double-alt-arrow-up-bold-duotone"})})}const X={xs:"(min-width: 0px)",sm:"(min-width: 600px)",md:"(min-width: 900px)",lg:"(min-width: 1200px)",xl:"(min-width: 1536px)"};function Ae({strokeCount:s}){const n={x:{hidden:{x2:0,strokeOpacity:0},visible:l=>{const r=1+l*.5;return{x2:"100%",strokeOpacity:1,transition:{strokeOpacity:{delay:r,duration:.01},x2:{delay:r,bounce:0,duration:1.5,type:"spring"}}}}},y:{hidden:{y2:0,strokeOpacity:0},visible:l=>{const r=1+l*.5;return{y2:"100%",strokeOpacity:1,transition:{strokeOpacity:{delay:r,duration:.01},y2:{delay:r,bounce:0,duration:1.5,type:"spring"}}}}}},t=l=>s/2>l?`translateY(calc(((${l} * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))`:`translateY(calc(((${s-(l+1)} * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))`,a=e.jsx(e.Fragment,{children:[...Array(s)].map((l,r)=>e.jsx(i.line,{x1:"0",x2:"100%",y1:"50%",y2:"50%",variants:n.x,style:{transform:t(r),stroke:"var(--hero-line-stroke-color)",strokeDasharray:"var(--stroke-dasharray)",strokeWidth:"var(--hero-line-stroke-width)"}},r))}),d=l=>s/2>l?`translateX(calc(((${l} * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))`:`translateX(calc(((${s-(l+1)} * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))`,o=e.jsx(e.Fragment,{children:[...Array(s)].map((l,r)=>e.jsx(i.line,{x1:"50%",x2:"50%",y1:"0%",y2:"100%",variants:n.y,style:{transform:d(r),stroke:"var(--hero-line-stroke-color)",strokeDasharray:"var(--stroke-dasharray)",strokeWidth:"var(--hero-line-stroke-width)"}},r))});return e.jsxs(e.Fragment,{children:[a,o]})}function He(){const s={hidden:{opacity:0},visible:n=>({opacity:1,transition:{opacity:{delay:1+n*.5,duration:.01}}})};return e.jsxs(e.Fragment,{children:[e.jsx(i.path,{variants:s,d:"M1 41C1 63.0914 18.9086 81 41 81C63.0914 81 81 63.0914 81 41C81 18.9086 63.0914 1 41 1",style:{strokeDasharray:"var(--stroke-dasharray)",stroke:"var(--hero-circle-stroke-color)",strokeWidth:"var(--hero-circle-stroke-width)",transform:"translate(calc(50% - 480px), calc(50% - 80px))"}}),e.jsx(i.path,{variants:s,d:"M1 41C1 63.0914 18.9086 81 41 81C63.0914 81 81 63.0914 81 41C81 18.9086 63.0914 1 41 1",style:{strokeDasharray:"var(--stroke-dasharray)",stroke:"var(--hero-circle-stroke-color)",strokeWidth:"var(--hero-circle-stroke-width)",transform:"translate(calc(50% + 400px), calc(50% + 80px))"}}),e.jsx(i.circle,{cx:"50%",cy:"50%",fill:"var(--hero-circle-stroke-color)",style:{transform:"translate(calc(0% - 200px), calc(0% + 200px))"},initial:{r:0},animate:{r:5}})]})}function Le(){const s={hidden:{opacity:0,pathLength:0},visible:n=>{const t=1+n*.5;return{opacity:1,pathLength:1,transition:{opacity:{delay:t,duration:.01},pathLength:{delay:t,bounce:0,duration:1.5,type:"spring"}}}}};return e.jsxs(e.Fragment,{children:[e.jsx(i.path,{variants:s,d:"M8 0V16M16 8.08889H0",stroke:"var(--hero-plus-stroke-color)",style:{transform:"translate(calc(50% - 448px), calc(50% - 128px))"}}),e.jsx(i.path,{variants:s,d:"M8 0V16M16 8.08889H0",stroke:"var(--hero-plus-stroke-color)",style:{transform:"translate(calc(50% + 432px), calc(50% + 192px))"}})]})}function ze({sx:s,...n}){return e.jsx(c,{component:i.div,variants:m().in,sx:{left:0,width:1,bottom:0,zIndex:99,height:200,position:"absolute",...s},...n,children:e.jsx(p,{component:"svg",width:"100%",height:"100%",sx:{"& text":{fill:"none",fontSize:200,fontWeight:800,strokeDasharray:4,textTransform:"uppercase",stroke:"var(--hero-text-stroke-color)",strokeWidth:"var(--hero-text-stroke-width)",fontFamily:t=>t.typography.fontSecondaryFamily}},children:e.jsx(i.text,{x:"0",y:"12px",dominantBaseline:"hanging",animate:{x:["0%","-50%"]},transition:{duration:64,ease:"linear",repeat:1/0},children:"Minimal Design System Minimal Design System"})})})}function M({color:s="primary",animate:n,transition:t,sx:a,...d}){const o=F();return e.jsx(p,{component:i.div,variants:{initial:{opacity:0},animate:{opacity:1,transition:{duration:.64,ease:[.43,.13,.23,.96]}}},sx:{width:12,height:12,top:"50%",left:"50%",position:"absolute",...a},...d,children:e.jsx(p,{component:i.div,animate:n,transition:t??{duration:6,ease:"linear",repeat:1/0,repeatType:"reverse"},sx:{width:1,height:1,borderRadius:"50%",boxShadow:`0px -2px 4px 0px ${o.vars.palette[s].main} inset`,background:`linear-gradient(135deg, ${o.vars.palette[s].lighter}, ${o.vars.palette[s].light})`,[W.dark]:{boxShadow:`0px -2px 4px 0px ${o.vars.palette[s].dark} inset`},...a}})})}function Ue(){return e.jsxs(e.Fragment,{children:[e.jsx(M,{color:"error",animate:{x:24},sx:{width:14,height:14,transform:"translate(calc(50% - 457px), calc(50% - 259px))"}}),e.jsx(M,{color:"warning",animate:{y:24},sx:{transform:"translate(calc(50% - 356px), calc(50% + 37px))"}}),e.jsx(M,{color:"info",animate:{x:24},sx:{transform:"translate(calc(50% + 332px), calc(50% + 135px))"}}),e.jsx(M,{color:"secondary",animate:{x:24},sx:{transform:"translate(calc(50% + 430px), calc(50% - 160px))"}}),e.jsx(M,{color:"success",animate:{y:24},sx:{transform:"translate(calc(50% + 136px), calc(50% + 332px))"}})]})}function Re({sx:s}){const n=F(),t=ee("up","md"),a=n.palette.mode==="light";return e.jsxs(c,{component:te,alignItems:"center",justifyContent:"center",sx:{"--stroke-dasharray":3,"--stroke-spacing":"80px","--hero-line-stroke-width":1,"--hero-line-stroke-color":a?h(n.vars.palette.grey["500Channel"],.32):h(n.vars.palette.grey["600Channel"],.16),"--hero-text-stroke-width":1,"--hero-text-stroke-color":a?h(n.vars.palette.grey["500Channel"],.24):h(n.vars.palette.grey["600Channel"],.12),"--hero-circle-stroke-width":1,"--hero-circle-stroke-color":a?h(n.vars.palette.grey["500Channel"],.48):h(n.vars.palette.grey["600Channel"],.24),"--hero-plus-stroke-color":n.vars.palette.text.disabled,top:0,left:0,width:1,height:1,position:"absolute",...s},children:[e.jsx(Ue,{}),t&&e.jsx(ze,{}),e.jsxs(p,{component:i.svg,xmlns:"http://www.w3.org/2000/svg",width:"1440",height:"1080",fill:"none",viewBox:"0 0 1440 1080",initial:"hidden",animate:"visible",sx:{width:1,height:1},children:[e.jsxs("defs",{children:[e.jsxs("radialGradient",{id:"mask_gradient_id",cx:"0",cy:"0",r:"1",gradientTransform:"matrix(720 0 0 420 720 560)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0%",stopColor:"#FFFFFF",stopOpacity:1}),e.jsx("stop",{offset:"100%",stopColor:"#FFFFFF",stopOpacity:.08})]}),e.jsx("mask",{id:"mask_id",children:e.jsx("ellipse",{cx:"50%",cy:"50%",rx:"50%",ry:"36%",fill:"url(#mask_gradient_id)"})})]}),e.jsxs("g",{mask:"url(#mask_id)",children:[e.jsx(He,{}),e.jsx(Le,{}),e.jsx(Ae,{strokeCount:12})]})]}),e.jsx(p,{component:i.div,initial:{opacity:0},animate:{opacity:1},sx:{top:0,left:0,width:1,height:1,zIndex:-1,position:"absolute",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundImage:`linear-gradient(180deg, ${n.vars.palette.background.default} 12%, ${h(n.vars.palette.background.defaultChannel,.92)} 50%, ${n.vars.palette.background.default} 88%), url('${g.site.basePath}/assets/background/background-3.webp')`,[W.dark]:{backgroundImage:`url('${g.site.basePath}/assets/images/home/hero-blur.webp'), linear-gradient(180deg, ${n.vars.palette.background.default} 12%, ${h(n.vars.palette.background.defaultChannel,.96)} 50%, ${n.vars.palette.background.default} 88%), url('${g.site.basePath}/assets/background/background-3.webp')`}}})]})}const Be="sm",U="md",N="lg";function Oe({sx:s,...n}){const t=F(),a=We(),d=ee("up",U),o=d?a.percent:0,l=T(a.scrollY,o*-7),r=T(a.scrollY,o*-6),u=T(a.scrollY,o*-5),k=T(a.scrollY,o*-4),x=T(a.scrollY,o*-3),L=ie(a.scrollY,[0,1],[1,d?Number((1-a.percent/100).toFixed(1)):1]),z=e.jsx(f,{children:e.jsxs(p,{component:"h1",display:"flex",flexWrap:"wrap",justifyContent:"center",sx:{...t.typography.h2,my:0,mx:"auto",maxWidth:680,fontFamily:t.typography.fontSecondaryFamily,[t.breakpoints.up(N)]:{fontSize:72,lineHeight:"90px"}},children:[e.jsx(p,{component:"span",sx:{width:1,opacity:.24},children:"Boost your building"}),"process with",e.jsx(p,{component:i.span,animate:{backgroundPosition:"200% center"},transition:{duration:20,ease:"linear",repeat:1/0,repeatType:"reverse"},sx:{...V(`300deg, ${t.vars.palette.primary.main} 0%, ${t.vars.palette.warning.main} 25%, ${t.vars.palette.primary.main} 50%, ${t.vars.palette.warning.main} 75%, ${t.vars.palette.primary.main} 100%`),backgroundSize:"400%",ml:{xs:.75,md:1,xl:1.5}},children:"Minimal"})]})}),re=e.jsx(f,{children:e.jsx(j,{variant:"body2",sx:{mx:"auto",[t.breakpoints.up(Be)]:{whiteSpace:"pre"},[t.breakpoints.up(N)]:{fontSize:20,lineHeight:"36px"}},children:`The starting point for your next project is based on MUI. 
Easy customization helps you build apps faster and better.`})}),oe=e.jsx(f,{children:e.jsxs(p,{gap:1.5,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",sx:{typography:"subtitle2"},children:[e.jsx(we,{sx:{[`& .${de.root}`]:{width:32,height:32}},children:[...Array(3)].map((C,Y)=>e.jsx(se,{alt:S.fullName(Y+1),src:S.image.avatar(Y+1)},S.fullName(Y+1)))}),"160+ Happy customers"]})}),le=e.jsxs(p,{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:{xs:1.5,sm:2},children:[e.jsx(f,{children:e.jsxs(c,{alignItems:"center",spacing:2.5,children:[e.jsx(B,{component:pe,href:D.dashboard.root,color:"inherit",size:"large",variant:"contained",startIcon:e.jsx(b,{width:24,icon:"iconoir:flash"}),children:e.jsxs("span",{children:["Live preview",e.jsxs(p,{component:"small",sx:{mt:"-3px",opacity:.64,display:"flex",fontSize:t.typography.pxToRem(10),fontWeight:t.typography.fontWeightMedium},children:["v",g.site.version]})]})}),e.jsxs(xe,{color:"inherit",variant:"body2",target:"_blank",rel:"noopener",href:D.freeUI,underline:"always",sx:{gap:.5,alignItems:"center",display:"inline-flex"},children:["Get free version",e.jsx(b,{width:16,icon:"eva:external-link-fill"})]})]})}),e.jsx(f,{children:e.jsx(B,{color:"inherit",size:"large",variant:"outlined",target:"_blank",rel:"noopener",href:D.figma,startIcon:e.jsx(b,{width:24,icon:"solar:figma-outline"}),sx:{borderColor:"text.primary"},children:"Figma preview"})})]}),ce=e.jsxs(c,{spacing:3,sx:{textAlign:"center"},children:[e.jsx(f,{children:e.jsx(j,{variant:"overline",sx:{opacity:.4},children:"Available For"})}),e.jsx(c,{spacing:2.5,direction:"row",children:["js","ts","nextjs","vite","figma"].map(C=>e.jsx(f,{children:C==="nextjs"?e.jsx(ne,{src:`${g.site.basePath}/assets/icons/platforms/ic-${C}.svg`,sx:{width:24,height:24}}):e.jsx(p,{component:"img",alt:C,src:`${g.site.basePath}/assets/icons/platforms/ic-${C}.svg`,sx:{width:24,height:24}})},C))})]});return e.jsx(c,{ref:a.elementRef,component:"section",sx:{overflow:"hidden",position:"relative",[t.breakpoints.up(U)]:{minHeight:760,height:"100vh",maxHeight:1440,display:"block",willChange:"opacity",mt:"calc(var(--layout-header-desktop-height) * -1)"},...s},...n,children:e.jsxs(p,{component:i.div,style:{opacity:L},sx:{width:1,display:"flex",position:"relative",flexDirection:"column",transition:t.transitions.create(["opacity"]),[t.breakpoints.up(U)]:{height:1,position:"fixed",maxHeight:"inherit"}},children:[e.jsxs(w,{component:te,sx:{py:3,gap:5,zIndex:9,display:"flex",alignItems:"center",flexDirection:"column",[t.breakpoints.up(U)]:{flex:"1 1 auto",justifyContent:"center",py:"var(--layout-header-desktop-height)"}},children:[e.jsxs(c,{spacing:3,sx:{textAlign:"center"},children:[e.jsx(i.div,{style:{y:l},children:z}),e.jsx(i.div,{style:{y:r},children:re})]}),e.jsx(i.div,{style:{y:u},children:oe}),e.jsx(i.div,{style:{y:k},children:le}),e.jsx(i.div,{style:{y:x},children:ce})]}),e.jsx(Re,{})]})})}function f({children:s,component:n=i.div}){return e.jsx(p,{component:n,variants:m({distance:24}).inUp,children:s})}function T(s,n){const t={mass:.1,damping:20,stiffness:300,restDelta:.001};return ye(ie(s,[0,1],[0,n]),t)}function We(){const s=I.useRef(null),{scrollY:n}=Z(),[t,a]=I.useState(0);return J(n,"change",d=>{let o=0;s.current&&(o=s.current.offsetHeight);const l=Math.floor(d/o*100);l>=100?a(100):a(Math.floor(l))}),{elementRef:s,percent:t,scrollY:n}}function _({title:s,caption:n,slotProps:t,txtGradient:a,description:d,...o}){var r,u,k,x,L,z;const l=F();return e.jsxs(c,{spacing:3,...o,children:[n&&e.jsx(_e,{title:n,variants:(r=t==null?void 0:t.caption)==null?void 0:r.variants,sx:(u=t==null?void 0:t.caption)==null?void 0:u.sx}),e.jsxs(j,{component:i.h2,variant:"h2",variants:((k=t==null?void 0:t.title)==null?void 0:k.variants)??m({distance:24}).inUp,sx:(x=t==null?void 0:t.title)==null?void 0:x.sx,children:[`${s} `,e.jsx(p,{component:"span",sx:{opacity:.4,display:"inline-block",...V(`to right, ${l.vars.palette.text.primary}, ${h(l.vars.palette.text.primaryChannel,.2)}`)},children:a})]}),d&&e.jsx(j,{component:i.p,variants:((L=t==null?void 0:t.description)==null?void 0:L.variants)??m({distance:24}).inUp,sx:{color:"text.secondary",...(z=t==null?void 0:t.description)==null?void 0:z.sx},children:d})]})}function _e({title:s,variants:n,sx:t}){return e.jsx(c,{component:i.span,variants:n??m({distance:24}).inUp,sx:{typography:"overline",color:"text.disabled",...t},children:s})}const G={zIndex:2,display:"none",color:"grey.500",position:"absolute","& line":{strokeDasharray:3,stroke:"currentColor"},"& path":{fill:"currentColor",stroke:"currentColor"},"@media (min-width: 1440px)":{display:"block"}},A={duration:.64,ease:[.43,.13,.23,.96]};function y({sx:s,vertical:n,...t}){return e.jsx(p,{component:i.svg,sx:{...G,zIndex:1,width:"100%",height:"1px",opacity:.24,...n&&{width:"1px",height:"100%"},...s},...t,children:n?e.jsx(i.line,{x1:"0.5",x2:"0.5",y1:"0",y2:"100%",variants:{initial:{y2:"0%"},animate:{y2:"100%",transition:A}}}):e.jsx(i.line,{x1:"0",x2:"100%",y1:"0.5",y2:"0.5",variants:{initial:{x2:"0%"},animate:{x2:"100%",transition:A}}})})}function q({sx:s,...n}){return e.jsx(p,{component:i.svg,variants:{initial:{scale:0},animate:{scale:1,transition:A}},width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",sx:{...G,width:16,height:16,...s},...n,children:e.jsx("path",{d:"M8 0V16M16 8.08889H0"})})}function R({sx:s,...n}){return e.jsx(p,{component:i.svg,variants:{initial:{scaleX:0},animate:{scaleX:1,transition:A}},width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",sx:{...G,width:16,height:16,...s},...n,children:e.jsx("path",{d:"M14 2L7.96685 8.03315M7.96685 8.03315L2.0663 13.9337M7.96685 8.03315L13.9337 14M7.96685 8.03315L2 2.0663"})})}function O({sx:s,...n}){return e.jsx(p,{component:i.svg,variants:{initial:{scaleX:0},animate:{scaleX:1,transition:A}},width:"20",height:"10",viewBox:"0 0 20 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",sx:{...G,width:20,height:10,...s},...n,children:e.jsx("path",{d:"M10 10L0 0H20L10 10Z"})})}function ae({sx:s,variants:n}){const t=I.useId(),a=I.useId(),d=I.useId();return e.jsxs(p,{component:i.svg,width:"100%",height:"100%",viewBox:"0 0 560 560",xmlns:"http://www.w3.org/2000/svg",fill:"none",variants:n??m().in,sx:{top:0,left:0,right:0,bottom:0,m:"auto",width:560,height:560,color:"grey.500",position:"absolute",...s},children:[e.jsxs("defs",{children:[e.jsxs("radialGradient",{id:d,cx:"0",cy:"0",r:"1",gradientTransform:"matrix(280 0 0 280 280 280)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{}),e.jsx("stop",{offset:"1",stopOpacity:0})]}),e.jsx("clipPath",{id:a,children:e.jsx("path",{fill:"#fff",d:"M0 0H560V560H0z"})})]}),e.jsxs("g",{clipPath:`url(#${a})`,children:[e.jsx("mask",{id:t,style:{maskType:"alpha"},width:"560",height:"560",x:"0",y:"0",maskUnits:"userSpaceOnUse",children:e.jsx("path",{fill:`url(#${d})`,d:"M0 0H560V560H0z"})}),e.jsxs("g",{stroke:"currentColor",strokeDasharray:3,mask:`url(#${t})`,opacity:.4,children:[e.jsx("circle",{cx:"280",cy:"280",r:"90"}),e.jsx("circle",{cx:"280",cy:"280",r:"180"}),e.jsx("path",{d:"M0 0l560 560M560 0L0 560"})]})]})]})}function Ge({sx:s,...n}){const t=e.jsxs(e.Fragment,{children:[e.jsxs(c,{spacing:8,alignItems:"center",sx:{top:64,left:80,position:"absolute",transform:"translateX(-15px)"},children:[e.jsx(O,{sx:{position:"static",opacity:.12}}),e.jsx(O,{sx:{width:30,height:15,opacity:.24,position:"static"}})]}),e.jsx(y,{vertical:!0,sx:{top:0,left:80}})]}),a=e.jsx(_,{caption:"Looking For a",title:"Landing page",txtGradient:"template?",description:"Fuse with dashboards to produce a superior product.",sx:{textAlign:{xs:"center",md:"left"}}}),d=e.jsxs(c,{component:i.div,variants:m({distance:24}).inDown,alignItems:"flex-end",sx:{filter:o=>`drop-shadow(0 24px 48px ${h(o.vars.palette.grey["500Channel"],.16)})`,[W.dark]:{filter:o=>`drop-shadow(0 24px 48px ${h(o.vars.palette.common.blackChannel,.16)})`}},children:[e.jsx(p,{component:"img",alt:"Zone landing page",src:`${g.site.basePath}/assets/images/home/zone-landing.webp`,sx:{width:720,objectFit:"cover",aspectRatio:"16/10",borderRadius:"16px 16px 0 16px",border:o=>`solid 2px ${o.vars.palette.common.white}`}}),e.jsx(p,{sx:{p:.5,borderRadius:"0 0 8px 8px",bgcolor:"common.white"},children:e.jsx(B,{variant:"contained",target:"_blank",rel:"noopener",href:D.zoneStore,endIcon:e.jsx(b,{icon:"eva:arrow-ios-forward-fill"}),sx:{color:"grey.800",bgcolor:"common.white","&:hover":{bgcolor:"common.white"}},children:"Visit Zone UI"})})]});return e.jsx(c,{component:"section",sx:{pt:10,pb:{xs:10,md:20},position:"relative",...s},...n,children:e.jsxs(H,{children:[t,e.jsxs(w,{sx:{position:"relative"},children:[e.jsxs($,{container:!0,disableEqualOverflow:!0,spacing:{xs:5,md:8},sx:{position:"relative",zIndex:9},children:[e.jsx($,{xs:12,md:6,lg:5,children:a}),e.jsx($,{xs:12,md:6,lg:7,children:d})]}),e.jsx(ae,{variants:m().in,sx:{display:{xs:"none",md:"block"}}})]})]})})}function Ye({sx:s,...n}){const t=e.jsxs(e.Fragment,{children:[e.jsx(q,{sx:{top:72,left:72}}),e.jsx(q,{sx:{bottom:72,left:72}}),e.jsx(y,{sx:{top:80,left:0}}),e.jsx(y,{sx:{bottom:80,left:0}}),e.jsx(y,{vertical:!0,sx:{top:0,left:80}})]}),a=e.jsxs(e.Fragment,{children:[e.jsx(_,{caption:"Visualizing Success",title:"What's in",txtGradient:"Minimal?",sx:{mb:{xs:5,md:8},textAlign:{xs:"center",md:"left"}}}),e.jsx(c,{spacing:6,sx:{maxWidth:{sm:560,md:400},mx:{xs:"auto",md:"unset"}},children:Xe.map(o=>e.jsxs(p,{component:i.div,variants:m({distance:24}).inUp,gap:3,display:"flex",children:[e.jsx(ne,{src:o.icon,sx:{width:40,height:40}}),e.jsxs(c,{spacing:1,children:[e.jsx(j,{variant:"h5",component:"h6",children:o.title}),e.jsx(j,{sx:{color:"text.secondary"},children:o.description})]})]},o.title))})]}),d=e.jsx(c,{component:i.div,variants:m({distance:24}).inRight,alignItems:"center",justifyContent:"center",sx:{height:1,position:"relative"},children:e.jsx(p,{sx:{left:0,width:720,borderRadius:2,position:"absolute",bgcolor:"background.default",boxShadow:o=>`-40px 40px 80px 0px ${h(o.vars.palette.grey["500Channel"],.16)}`,[W.dark]:{boxShadow:o=>`-40px 40px 80px 0px ${h(o.vars.palette.common.blackChannel,.16)}`}},children:e.jsx(p,{component:"img",alt:"Home Chart",src:`${g.site.basePath}/assets/images/home/home-chart.webp`,sx:{width:720}})})});return e.jsx(c,{component:"section",sx:{overflow:"hidden",position:"relative",py:{xs:10,md:20},...s},...n,children:e.jsxs(H,{children:[t,e.jsxs(w,{sx:{position:"relative"},children:[e.jsxs($,{container:!0,columnSpacing:{xs:0,md:8},sx:{position:"relative",zIndex:9},children:[e.jsx($,{xs:12,md:6,lg:7,children:a}),e.jsx($,{md:6,lg:5,sx:{display:{xs:"none",md:"block"}},children:d})]}),e.jsx(ae,{variants:m().in,sx:{display:{xs:"none",md:"block"}}})]})]})})}const Xe=[{icon:`${g.site.basePath}/assets/icons/home/ic-make-brand.svg`,title:"Branding",description:"Consistent design makes it easy to brand your own."},{icon:`${g.site.basePath}/assets/icons/home/ic-design.svg`,title:"UI & UX design",description:"The kit is built on the principles of the atomic design system."},{icon:`${g.site.basePath}/assets/icons/home/ic-development.svg`,title:"Development",description:"Easy to customize and extend, saving you time and money."}];function Pe({sx:s,...n}){const t=F(),a=ke("Standard"),d=e.jsx(_,{caption:"plans",title:"Transparent",txtGradient:"pricing",description:"Choose from flexible pricing options designed to fit your business needs and budget with no hidden fees.",sx:{mb:8,textAlign:"center"}}),o=e.jsx(p,{gridTemplateColumns:"repeat(3, 1fr)",sx:{display:{xs:"none",md:"grid"}},children:P.map(r=>e.jsx(Q,{plan:r,sx:{...r.license==="Plus"&&{[t.breakpoints.down(1440)]:{borderLeft:`dashed 1px ${h(t.vars.palette.grey["500Channel"],.2)}`,borderRight:`dashed 1px ${h(t.vars.palette.grey["500Channel"],.2)}`}}}},r.license))}),l=e.jsxs(c,{spacing:5,alignItems:"center",sx:{display:{md:"none"}},children:[e.jsx(Ce,{value:a.value,onChange:a.onChange,sx:{boxShadow:`0px -2px 0px 0px ${h(t.vars.palette.grey["500Channel"],.08)} inset`},children:P.map(r=>e.jsx(Ie,{value:r.license,label:r.license},r.license))}),e.jsx(p,{sx:{width:1,borderRadius:2,border:`dashed 1px ${h(t.vars.palette.grey["500Channel"],.2)}`},children:P.map(r=>r.license===a.value&&e.jsx(Q,{plan:r},r.license))})]});return e.jsx(c,{component:"section",sx:{py:10,position:"relative",...s},...n,children:e.jsxs(H,{children:[e.jsx(y,{vertical:!0,sx:{top:0,left:80}}),e.jsx(w,{children:d}),e.jsxs(p,{sx:{position:"relative","&::before, &::after":{width:64,height:64,content:"''",[t.breakpoints.up(1440)]:{display:"block"}}},children:[e.jsx(w,{children:o}),e.jsx(y,{sx:{top:64,left:0}}),e.jsx(y,{sx:{bottom:64,left:0}})]}),e.jsx(w,{children:l})]})})}function Q({plan:s,sx:n,...t}){const a=s.license==="Standard",d=s.license==="Plus",o=e.jsxs(e.Fragment,{children:[e.jsx(y,{vertical:!0,sx:{top:-64,left:0,height:"calc(100% + (64px * 2))"}}),e.jsx(y,{vertical:!0,sx:{top:-64,right:0,height:"calc(100% + (64px * 2))"}}),e.jsx(R,{sx:{top:-8,left:-8}}),e.jsx(R,{sx:{top:-8,right:-8}}),e.jsx(R,{sx:{bottom:-8,left:-8}}),e.jsx(R,{sx:{bottom:-8,right:-8}})]});return e.jsxs(c,{spacing:5,component:H,sx:{px:6,py:8,position:"relative",...n},...t,children:[d&&o,e.jsxs(c,{direction:"row",alignItems:"center",children:[e.jsxs(c,{flexGrow:1,children:[e.jsx(i.div,{variants:m({distance:24}).inLeft,children:e.jsx(j,{variant:"h4",component:"h6",children:s.license})}),e.jsx(i.div,{variants:fe({distance:24}).inX,children:e.jsx(p,{sx:{width:32,height:6,opacity:.24,borderRadius:1,bgcolor:"error.main",...a&&{bgcolor:"primary.main"},...d&&{bgcolor:"secondary.main"}}})})]}),e.jsx(i.div,{variants:m({distance:24}).inLeft,children:e.jsxs(p,{component:"span",sx:{typography:"h3"},children:["$",s.price]})})]}),e.jsxs(c,{direction:"row",spacing:2,children:[s.icons.map((l,r)=>e.jsx(p,{component:i.img,variants:m().in,alt:l,src:l,sx:{width:24,height:24,...a&&[1,2].includes(r)&&{display:"none"}}},l)),a&&e.jsx(p,{component:i.span,variants:m().in,sx:{ml:-1},children:"(only)"})]}),e.jsxs(c,{spacing:2.5,children:[s.commons.map(l=>e.jsxs(c,{component:i.div,variants:m().in,spacing:1.5,direction:"row",alignItems:"center",sx:{typography:"body2"},children:[e.jsx(b,{width:16,icon:"eva:checkmark-fill"}),l]},l)),e.jsx(i.div,{variants:m({distance:24}).inLeft,children:e.jsx(E,{sx:{borderStyle:"dashed"}})}),s.options.map((l,r)=>{const u=a&&[1,2,3].includes(r)||d&&[3].includes(r);return e.jsxs(c,{component:i.div,variants:m().in,spacing:1.5,direction:"row",alignItems:"center",sx:{typography:"body2",...u&&{color:"text.disabled",textDecoration:"line-through"}},children:[e.jsx(b,{width:18,icon:u?"mingcute:close-line":"eva:checkmark-fill"}),l]},l)})]}),e.jsx(i.div,{variants:m({distance:24}).inUp,children:e.jsx(B,{fullWidth:!0,variant:d?"contained":"outlined",color:"inherit",size:"large",target:"_blank",rel:"noopener",href:D.minimalStore,children:"Get started"})})]})}const P=[...Array(3)].map((s,n)=>({license:["Standard","Plus","Extended"][n],price:[69,129,599][n],commons:["One end products","12 months updates","6 months of support","One-time payments","Lifetime perpetual license."],options:["JavaScript version","TypeScript version","Design resources (Figma)","Commercial applications"],icons:[`${g.site.basePath}/assets/icons/platforms/ic-js.svg`,`${g.site.basePath}/assets/icons/platforms/ic-ts.svg`,`${g.site.basePath}/assets/icons/platforms/ic-figma.svg`]}));function Ee({sx:s,...n}){const t=F(),a=e.jsxs(e.Fragment,{children:[e.jsxs(c,{spacing:8,alignItems:"center",sx:{top:64,left:80,position:"absolute",transform:"translateX(-15px)"},children:[e.jsx(O,{sx:{position:"static",opacity:.12}}),e.jsx(O,{sx:{width:30,height:15,opacity:.24,position:"static"}})]}),e.jsx(y,{vertical:!0,sx:{top:0,left:80}})]}),d=$e({align:"start",slidesToShow:{xs:1,sm:2,md:3,lg:4},breakpoints:{[X.sm]:{slideSpacing:"24px"},[X.md]:{slideSpacing:"40px"},[X.lg]:{slideSpacing:"64px"}}}),o=e.jsx(_,{caption:"testimonials",title:"Rumors are flying",txtGradient:"that...",sx:{mb:{xs:5,md:8},textAlign:"center"}}),l=x=>e.jsx(E,{component:"div",sx:{width:1,opacity:.16,height:"1px",border:"none",position:"absolute",background:`linear-gradient(to right, ${h(t.vars.palette.grey["500Channel"],0)} 0%, ${t.vars.palette.grey[500]} 50%, ${h(t.vars.palette.grey["500Channel"],0)} 100%)`,...x==="top"&&{top:0},...x==="bottom"&&{bottom:0}}}),r=e.jsx(E,{component:"div",orientation:"vertical",flexItem:!0,sx:{opacity:.16,border:"none",width:"1px",background:`linear-gradient(to bottom, ${h(t.vars.palette.grey["500Channel"],0)} 0%, ${t.vars.palette.grey[500]} 50%, ${h(t.vars.palette.grey["500Channel"],0)} 100%)`,display:{xs:"none",md:"block"}}}),u=e.jsxs(c,{sx:{position:"relative",py:{xs:5,md:8}},children:[l("top"),e.jsx(Se,{carousel:d,children:Ve.map(x=>e.jsxs(c,{component:i.div,variants:m().in,children:[e.jsxs(c,{spacing:1,sx:{typography:"subtitle2"},children:[e.jsx(Te,{size:"small",name:"read-only",value:x.rating,precision:.5,readOnly:!0}),x.category]}),e.jsx(j,{sx:{...he({line:4,persistent:t.typography.body1}),mt:2,mb:3},children:x.content}),e.jsxs(c,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(se,{alt:x.name,src:x.avatar,sx:{width:48,height:48}}),e.jsxs(c,{sx:{typography:"subtitle1"},children:[e.jsx(p,{component:"span",children:x.name}),e.jsx(p,{component:"span",sx:{typography:"body2",color:"text.disabled"},children:me(new Date(x.postedAt))})]})]})]},x.id))}),e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mt:{xs:5,md:8}},children:[e.jsx(Fe,{fallback:!0,variant:"rounded",scrollSnaps:d.dots.scrollSnaps,selectedIndex:d.dots.selectedIndex,onClickDot:d.dots.onClickDot}),e.jsx(Me,{...d.arrows,options:d.options})]})]}),k=e.jsxs(c,{sx:{py:{xs:5,md:8},position:"relative"},children:[l("top"),e.jsx(c,{spacing:5,direction:{xs:"column",md:"row"},divider:r,children:[{label:"Purchased order",value:12.121},{label:"Happy customers",value:160},{label:"Review rate",value:4.9}].map(x=>e.jsxs(c,{spacing:2,sx:{textAlign:"center",width:1},children:[e.jsx(i.div,{variants:m({distance:24}).inUp,children:e.jsx(be,{to:x.value,unit:x.label==="Purchased order"?"k+":"+",toFixed:x.label==="Happy customers"?0:1,sx:{fontWeight:"fontWeightBold",fontSize:{xs:40,md:64},lineHeight:{xs:50/40,md:80/64},fontFamily:t.typography.fontSecondaryFamily}})}),e.jsx(i.div,{variants:m({distance:24}).inUp,children:e.jsx(p,{component:"span",sx:{...V(`90deg, ${t.vars.palette.text.primary}, ${h(t.vars.palette.text.primaryChannel,.2)}`),opacity:.4,typography:"h6"},children:x.label})})]},x.label))}),l("bottom")]});return e.jsx(c,{component:"section",sx:{py:10,position:"relative",...s},...n,children:e.jsxs(H,{children:[a,e.jsxs(w,{children:[o,u,k]})]})})}const v=s=>({id:S.id(s),name:S.fullName(s),avatar:S.image.avatar(s),rating:5}),Ve=[{...v(1),category:"Design Quality",content:"The quality of this template is very good, the TypeScript files are neat and the communication with the team behind this template is very good! I would recommend this template for any kind of project, as they implement new features every now and then and enhance their design. I will definitely be using more templates from this team and re-purchasing this template for other projects.",postedAt:"April 20, 2024 23:15:30"},{...v(2),category:"Design Quality",content:"Amazing. I've never purchased complete front ends before, but I'll definitely be doing this again!",postedAt:"March 19, 2024 23:15:30"},{...v(3),category:"Code Quality",content:"Clean & Complete (Design & Code). Thansk Minimal team :)",postedAt:"April 19, 2023 23:15:30"},{...v(4),category:"Customer Support",content:"Thanks to Minimal for customer support with email. I solved the problem. And the code quality is good, too.",postedAt:"May 19, 2023 23:15:30"},{...v(5),category:"Customer Support",content:"Great UI kit, really beautiful as well. Also the customer support is very warm-hearted. However, I hope the components and themes can be provided as a separated project (package).",postedAt:"June 19, 2023 23:15:30"},{...v(6),category:"Design Quality",content:"I would never have been able to create all these beautifull components myself!",postedAt:"July 19, 2023 23:15:30"},{...v(7),category:"Code Quality",content:"The quality of this template is excellent. However, as an individual, the cost of obtaining the TypeScript Source version is beyond my means. Despite my strong desire to acquire it, my limited personal budget does not allow me to do so.",postedAt:"August 19, 2023 23:15:30"},{...v(8),category:"Customizability",content:"The design and code quality are impressive. Regular updates and excellent customer support are major advantages.",postedAt:"September 19, 2023 23:15:30"}];function Ne(){const s=ve();return e.jsxs(e.Fragment,{children:[e.jsx(je,{variant:"linear",progress:s.scrollYProgress,sx:{position:"fixed"}}),e.jsx(De,{}),e.jsx(Oe,{}),e.jsxs(c,{sx:{position:"relative",bgcolor:"background.default"},children:[e.jsx(Ye,{}),e.jsx(Pe,{}),e.jsx(Ee,{}),e.jsx(Ge,{})]})]})}const K={title:"Saas Project Home Page",description:"The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style"};function ht(){return e.jsxs(e.Fragment,{children:[e.jsxs(ge,{children:[e.jsxs("title",{children:[" ",K.title]}),e.jsx("meta",{name:"description",content:K.description})]}),e.jsx(Ne,{})]})}export{ht as default};
