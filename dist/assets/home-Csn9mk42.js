import{u as $,r as w,a as M,j as e,I as y,m as i,S as u,B as c,b as F,s as P,c as T,M as H,v as d,C as f,t as O,T as A,d as B,A as L,_ as j,e as C,R as U,p as b,L as E,f as G,H as K}from"./index-CFpFDdmk.js";import{F as N}from"./Fab-GMR5DA1-.js";import{u as V,a as X,S as q}from"./use-scroll-progress-CeEBD0xt.js";import{v as z}from"./fade-o6mfZnVH.js";import{u as Y}from"./use-transform-qDvNM338.js";import{A as J}from"./AvatarGroup-C3aFVuo2.js";import"./use-motion-value-BVE3B4pk.js";import"./transition-BJzcwH5q.js";function Q({value:r=90,sx:t,...a}){const{scrollYProgress:s}=$(),[p,l]=w.useState(!1),n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return M(s,"change",o=>{const v=Math.floor(o*100)>r;l(v)}),e.jsx(N,{"aria-label":"Back to top",onClick:n,sx:{width:48,height:48,position:"fixed",transform:"scale(0)",right:{xs:24,md:32},bottom:{xs:24,md:32},zIndex:o=>o.zIndex.speedDial,transition:o=>o.transitions.create(["transform"]),...p&&{transform:"scale(1)"},...t},...a,children:e.jsx(y,{width:24,icon:"solar:double-alt-arrow-up-bold-duotone"})})}function Z({strokeCount:r}){const t={x:{hidden:{x2:0,strokeOpacity:0},visible:n=>{const o=1+n*.5;return{x2:"100%",strokeOpacity:1,transition:{strokeOpacity:{delay:o,duration:.01},x2:{delay:o,bounce:0,duration:1.5,type:"spring"}}}}},y:{hidden:{y2:0,strokeOpacity:0},visible:n=>{const o=1+n*.5;return{y2:"100%",strokeOpacity:1,transition:{strokeOpacity:{delay:o,duration:.01},y2:{delay:o,bounce:0,duration:1.5,type:"spring"}}}}}},a=n=>r/2>n?`translateY(calc(((${n} * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))`:`translateY(calc(((${r-(n+1)} * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))`,s=e.jsx(e.Fragment,{children:[...Array(r)].map((n,o)=>e.jsx(i.line,{x1:"0",x2:"100%",y1:"50%",y2:"50%",variants:t.x,style:{transform:a(o),stroke:"var(--hero-line-stroke-color)",strokeDasharray:"var(--stroke-dasharray)",strokeWidth:"var(--hero-line-stroke-width)"}},o))}),p=n=>r/2>n?`translateX(calc(((${n} * var(--stroke-spacing)) + var(--stroke-spacing) / 2) * -1))`:`translateX(calc(((${r-(n+1)} * var(--stroke-spacing)) + var(--stroke-spacing) / 2)))`,l=e.jsx(e.Fragment,{children:[...Array(r)].map((n,o)=>e.jsx(i.line,{x1:"50%",x2:"50%",y1:"0%",y2:"100%",variants:t.y,style:{transform:p(o),stroke:"var(--hero-line-stroke-color)",strokeDasharray:"var(--stroke-dasharray)",strokeWidth:"var(--hero-line-stroke-width)"}},o))});return e.jsxs(e.Fragment,{children:[s,l]})}function ee(){const r={hidden:{opacity:0},visible:t=>({opacity:1,transition:{opacity:{delay:1+t*.5,duration:.01}}})};return e.jsxs(e.Fragment,{children:[e.jsx(i.path,{variants:r,d:"M1 41C1 63.0914 18.9086 81 41 81C63.0914 81 81 63.0914 81 41C81 18.9086 63.0914 1 41 1",style:{strokeDasharray:"var(--stroke-dasharray)",stroke:"var(--hero-circle-stroke-color)",strokeWidth:"var(--hero-circle-stroke-width)",transform:"translate(calc(50% - 480px), calc(50% - 80px))"}}),e.jsx(i.path,{variants:r,d:"M1 41C1 63.0914 18.9086 81 41 81C63.0914 81 81 63.0914 81 41C81 18.9086 63.0914 1 41 1",style:{strokeDasharray:"var(--stroke-dasharray)",stroke:"var(--hero-circle-stroke-color)",strokeWidth:"var(--hero-circle-stroke-width)",transform:"translate(calc(50% + 400px), calc(50% + 80px))"}}),e.jsx(i.circle,{cx:"50%",cy:"50%",fill:"var(--hero-circle-stroke-color)",style:{transform:"translate(calc(0% - 200px), calc(0% + 200px))"},initial:{r:0},animate:{r:5}})]})}function te(){const r={hidden:{opacity:0,pathLength:0},visible:t=>{const a=1+t*.5;return{opacity:1,pathLength:1,transition:{opacity:{delay:a,duration:.01},pathLength:{delay:a,bounce:0,duration:1.5,type:"spring"}}}}};return e.jsxs(e.Fragment,{children:[e.jsx(i.path,{variants:r,d:"M8 0V16M16 8.08889H0",stroke:"var(--hero-plus-stroke-color)",style:{transform:"translate(calc(50% - 448px), calc(50% - 128px))"}}),e.jsx(i.path,{variants:r,d:"M8 0V16M16 8.08889H0",stroke:"var(--hero-plus-stroke-color)",style:{transform:"translate(calc(50% + 432px), calc(50% + 192px))"}})]})}function re({sx:r,...t}){return e.jsx(u,{component:i.div,variants:z().in,sx:{left:0,width:1,bottom:0,zIndex:99,height:200,position:"absolute",...r},...t,children:e.jsx(c,{component:"svg",width:"100%",height:"100%",sx:{"& text":{fill:"none",fontSize:200,fontWeight:800,strokeDasharray:4,textTransform:"uppercase",stroke:"var(--hero-text-stroke-color)",strokeWidth:"var(--hero-text-stroke-width)",fontFamily:a=>a.typography.fontSecondaryFamily}},children:e.jsx(i.text,{x:"0",y:"12px",dominantBaseline:"hanging",animate:{x:["0%","-50%"]},transition:{duration:64,ease:"linear",repeat:1/0},children:"Minimal Design System Minimal Design System"})})})}function h({color:r="primary",animate:t,transition:a,sx:s,...p}){const l=F();return e.jsx(c,{component:i.div,variants:{initial:{opacity:0},animate:{opacity:1,transition:{duration:.64,ease:[.43,.13,.23,.96]}}},sx:{width:12,height:12,top:"50%",left:"50%",position:"absolute",...s},...p,children:e.jsx(c,{component:i.div,animate:t,transition:a??{duration:6,ease:"linear",repeat:1/0,repeatType:"reverse"},sx:{width:1,height:1,borderRadius:"50%",boxShadow:`0px -2px 4px 0px ${l.vars.palette[r].main} inset`,background:`linear-gradient(135deg, ${l.vars.palette[r].lighter}, ${l.vars.palette[r].light})`,[P.dark]:{boxShadow:`0px -2px 4px 0px ${l.vars.palette[r].dark} inset`},...s}})})}function ae(){return e.jsxs(e.Fragment,{children:[e.jsx(h,{color:"error",animate:{x:24},sx:{width:14,height:14,transform:"translate(calc(50% - 457px), calc(50% - 259px))"}}),e.jsx(h,{color:"warning",animate:{y:24},sx:{transform:"translate(calc(50% - 356px), calc(50% + 37px))"}}),e.jsx(h,{color:"info",animate:{x:24},sx:{transform:"translate(calc(50% + 332px), calc(50% + 135px))"}}),e.jsx(h,{color:"secondary",animate:{x:24},sx:{transform:"translate(calc(50% + 430px), calc(50% - 160px))"}}),e.jsx(h,{color:"success",animate:{y:24},sx:{transform:"translate(calc(50% + 136px), calc(50% + 332px))"}})]})}function se({sx:r}){const t=F(),a=T("up","md"),s=t.palette.mode==="light";return e.jsxs(u,{component:H,alignItems:"center",justifyContent:"center",sx:{"--stroke-dasharray":3,"--stroke-spacing":"80px","--hero-line-stroke-width":1,"--hero-line-stroke-color":s?d(t.vars.palette.grey["500Channel"],.32):d(t.vars.palette.grey["600Channel"],.16),"--hero-text-stroke-width":1,"--hero-text-stroke-color":s?d(t.vars.palette.grey["500Channel"],.24):d(t.vars.palette.grey["600Channel"],.12),"--hero-circle-stroke-width":1,"--hero-circle-stroke-color":s?d(t.vars.palette.grey["500Channel"],.48):d(t.vars.palette.grey["600Channel"],.24),"--hero-plus-stroke-color":t.vars.palette.text.disabled,top:0,left:0,width:1,height:1,position:"absolute",...r},children:[e.jsx(ae,{}),a&&e.jsx(re,{}),e.jsxs(c,{component:i.svg,xmlns:"http://www.w3.org/2000/svg",width:"1440",height:"1080",fill:"none",viewBox:"0 0 1440 1080",initial:"hidden",animate:"visible",sx:{width:1,height:1},children:[e.jsxs("defs",{children:[e.jsxs("radialGradient",{id:"mask_gradient_id",cx:"0",cy:"0",r:"1",gradientTransform:"matrix(720 0 0 420 720 560)",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:"0%",stopColor:"#FFFFFF",stopOpacity:1}),e.jsx("stop",{offset:"100%",stopColor:"#FFFFFF",stopOpacity:.08})]}),e.jsx("mask",{id:"mask_id",children:e.jsx("ellipse",{cx:"50%",cy:"50%",rx:"50%",ry:"36%",fill:"url(#mask_gradient_id)"})})]}),e.jsxs("g",{mask:"url(#mask_id)",children:[e.jsx(ee,{}),e.jsx(te,{}),e.jsx(Z,{strokeCount:12})]})]}),e.jsx(c,{component:i.div,initial:{opacity:0},animate:{opacity:1},sx:{top:0,left:0,width:1,height:1,zIndex:-1,position:"absolute",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundImage:`linear-gradient(180deg, ${t.vars.palette.background.default} 12%, ${d(t.vars.palette.background.defaultChannel,.92)} 50%, ${t.vars.palette.background.default} 88%), url('${f.site.basePath}/assets/background/background-3.webp')`,[P.dark]:{backgroundImage:`url('${f.site.basePath}/assets/images/home/hero-blur.webp'), linear-gradient(180deg, ${t.vars.palette.background.default} 12%, ${d(t.vars.palette.background.defaultChannel,.96)} 50%, ${t.vars.palette.background.default} 88%), url('${f.site.basePath}/assets/background/background-3.webp')`}}})]})}const ne="sm",g="md",S="lg";function oe({sx:r,...t}){const a=F(),s=ie(),p=T("up",g),l=p?s.percent:0,n=m(s.scrollY,l*-7),o=m(s.scrollY,l*-6),v=m(s.scrollY,l*-5);m(s.scrollY,l*-4),m(s.scrollY,l*-3);const D=Y(s.scrollY,[0,1],[1,p?Number((1-s.percent/100).toFixed(1)):1]),_=e.jsx(x,{children:e.jsxs(c,{component:"h1",display:"flex",flexWrap:"wrap",justifyContent:"center",sx:{...a.typography.h2,my:0,mx:"auto",maxWidth:780,fontFamily:a.typography.fontSecondaryFamily,[a.breakpoints.up(S)]:{fontSize:72,lineHeight:"90px"}},children:[e.jsx(c,{component:"span",sx:{width:1,opacity:.24},children:"Boost your Production"}),"process with",e.jsx(c,{component:i.span,animate:{backgroundPosition:"200% center"},transition:{duration:20,ease:"linear",repeat:1/0,repeatType:"reverse"},sx:{...O(`300deg, ${a.vars.palette.primary.main} 0%, ${a.vars.palette.warning.main} 25%, ${a.vars.palette.primary.main} 50%, ${a.vars.palette.warning.main} 75%, ${a.vars.palette.primary.main} 100%`),backgroundSize:"400%",ml:{xs:.75,md:1,xl:1.5}},children:"SaaS PROJECT"})]})}),R=e.jsx(x,{children:e.jsx(A,{variant:"body2",sx:{mx:"auto",[a.breakpoints.up(ne)]:{whiteSpace:"pre"},[a.breakpoints.up(S)]:{fontSize:20,lineHeight:"36px"}},children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
 Tempore fuga soluta perferendis iste debitis explicabo, modi aperiam animi pariatur error quidem.`})}),W=e.jsx(x,{children:e.jsxs(c,{gap:1.5,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",sx:{typography:"subtitle2"},children:[e.jsx(J,{sx:{[`& .${B.root}`]:{width:32,height:32}},children:[...Array(3)].map((ce,k)=>e.jsx(L,{alt:j.fullName(k+1),src:j.image.avatar(k+1)},j.fullName(k+1)))}),"160+ Happy customers"]})});return c,u,C,U,b.dashboard.root,y,c,a.typography.pxToRem(10),a.typography.fontWeightMedium,f.site.version,E,b.freeUI,y,C,b.figma,y,e.jsx(u,{ref:s.elementRef,component:"section",sx:{overflow:"hidden",position:"relative",[a.breakpoints.up(g)]:{minHeight:760,height:"100vh",maxHeight:1440,display:"block",willChange:"opacity",mt:"calc(var(--layout-header-desktop-height) * -1)"},...r},...t,children:e.jsxs(c,{component:i.div,style:{opacity:D},sx:{width:1,display:"flex",position:"relative",flexDirection:"column",transition:a.transitions.create(["opacity"]),[a.breakpoints.up(g)]:{height:1,position:"fixed",maxHeight:"inherit"}},children:[e.jsxs(G,{component:H,sx:{py:3,gap:5,zIndex:9,display:"flex",alignItems:"center",flexDirection:"column",[a.breakpoints.up(g)]:{flex:"1 1 auto",justifyContent:"center",py:"var(--layout-header-desktop-height)"}},children:[e.jsxs(u,{spacing:3,sx:{textAlign:"center"},children:[e.jsx(i.div,{style:{y:n},children:_}),e.jsx(i.div,{style:{y:o},children:R})]}),e.jsx(i.div,{style:{y:v},children:W})]}),e.jsx(se,{})]})})}function x({children:r,component:t=i.div}){return e.jsx(c,{component:t,variants:z({distance:24}).inUp,children:r})}function m(r,t){const a={mass:.1,damping:20,stiffness:300,restDelta:.001};return V(Y(r,[0,1],[0,t]),a)}function ie(){const r=w.useRef(null),{scrollY:t}=$(),[a,s]=w.useState(0);return M(t,"change",p=>{let l=0;r.current&&(l=r.current.offsetHeight);const n=Math.floor(p/l*100);n>=100?s(100):s(Math.floor(n))}),{elementRef:r,percent:a,scrollY:t}}function le(){const r=X();return e.jsxs(e.Fragment,{children:[e.jsx(q,{variant:"linear",progress:r.scrollYProgress,sx:{position:"fixed"}}),e.jsx(Q,{}),e.jsx(oe,{})]})}const I={title:"Saas Project Home Page",description:"The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style"};function fe(){return e.jsxs(e.Fragment,{children:[e.jsxs(K,{children:[e.jsxs("title",{children:[" ",I.title]}),e.jsx("meta",{name:"description",content:I.description})]}),e.jsx(le,{})]})}export{fe as default};