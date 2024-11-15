import{j as s,e as Z,I as W,B as r,b as Y,cF as ss,v as G,M as ms,m as z,T as F,cI as js,L as fs,l as gs,_ as A,p as bs,H as vs,C as Cs}from"./index-DGNYifC6.js";import{C as ys}from"./custom-breadcrumbs-DRd75Eu9.js";import{I as a}from"./image-CNJbTuDT.js";import{C as c,a as es,b as ts,d as os}from"./carousel-progress-bar-08tUIm-C.js";import{u as d}from"./use-carousel-IYATFEk1.js";import{C as m}from"./carousel-dot-buttons-BOHOKPnp.js";import{b as v,C as O,a as P}from"./carousel-arrow-buttons-DwceZ83Q.js";import{C as Is}from"./component-hero-C8fPZOHt.js";import{A as ws}from"./embla-carousel-autoplay.esm-0OO14Ffu.js";import{v as H}from"./fade-o6mfZnVH.js";import{C as Ss}from"./CardContent-CieJdpnJ.js";import{S as Ds}from"./component-template--3qRFN98.js";import"./transition-BJzcwH5q.js";import"./CardHeader-BjTA_6Uz.js";function ns({sx:t,isPlaying:e,...o}){return s.jsx(Z,{size:"small",color:e?"error":"primary",variant:"contained",startIcon:s.jsx(W,{icon:e?"solar:stop-circle-bold":"solar:play-circle-bold"}),sx:{top:24,right:24,position:"absolute",...t},...o,children:e?"Stop":"Play"})}function x({index:t,sx:e,...o}){return s.jsx(r,{sx:{top:16,left:16,width:24,zIndex:9,height:24,display:"flex",color:"grey.800",borderRadius:"50%",position:"absolute",alignItems:"center",bgcolor:"common.white",typography:"subtitle2",justifyContent:"center",...e},...o,children:t})}function ks({data:t}){const e=d({axis:"y"});return s.jsxs(r,{sx:{position:"relative"},children:[s.jsx(c,{carousel:e,sx:{borderRadius:2,overflow:"hidden",height:{xs:240,sm:320,md:480}},children:t.map((o,n)=>s.jsx(Bs,{index:n,item:o},o.id))}),s.jsx(m,{scrollSnaps:e.dots.scrollSnaps,selectedIndex:e.dots.selectedIndex,onClickDot:e.dots.onClickDot,sx:{top:16,right:16,position:"absolute",color:"warning.main"}}),s.jsx(v,{...e.arrows,options:e.options,slotProps:{prevBtn:{sx:{p:.75}},nextBtn:{sx:{p:.75}}},sx:{p:.5,gap:.5,right:16,bottom:16,borderRadius:1,position:"absolute",bgcolor:"common.white"}})]})}function Bs({item:t,index:e}){return s.jsxs(r,{sx:{position:"relative",height:1},children:[s.jsx(x,{index:e+1}),s.jsx(a,{visibleByDefault:!0,alt:t.title,src:t.coverUrl,sx:{width:1,height:1}})]})}function Ts({data:t}){const e=d({containScroll:!1,slidesToShow:"70%",slideSpacing:"20px"});return s.jsxs(s.Fragment,{children:[s.jsx(c,{carousel:e,children:t.map((o,n)=>s.jsx(Rs,{index:n,item:o},o.id))}),s.jsxs(r,{display:"flex",alignItems:"center",justifyContent:"space-between",sx:{mt:3},children:[s.jsx(v,{...e.arrows,options:e.options}),s.jsx(m,{scrollSnaps:e.dots.scrollSnaps,selectedIndex:e.dots.selectedIndex,onClickDot:e.dots.onClickDot})]})]})}function Rs({item:t,index:e}){return s.jsxs(r,{sx:{borderRadius:2,overflow:"hidden",position:"relative"},children:[s.jsx(x,{index:e+1}),s.jsx(a,{alt:t.title,src:t.coverUrl,ratio:"4/3"})]})}function As({data:t}){const e=d({loop:!0,slidesToShow:"70%",slideSpacing:"20px"});return s.jsxs(s.Fragment,{children:[s.jsx(c,{carousel:e,children:t.map((o,n)=>s.jsx(Fs,{index:n,item:o,selected:e.dots.selectedIndex===n},o.id))}),s.jsx(m,{scrollSnaps:e.dots.scrollSnaps,selectedIndex:e.dots.selectedIndex,onClickDot:e.dots.onClickDot,sx:{width:1,justifyContent:"center",mt:3}})]})}function Fs({item:t,index:e,selected:o}){return s.jsxs(r,{sx:{borderRadius:2,overflow:"hidden",position:"relative",transform:"scale(0.88)",transition:n=>n.transitions.create(["transform"],{easing:n.transitions.easing.easeIn,duration:n.transitions.duration.complex}),...o&&{transform:"scale(1)"}},children:[s.jsx(x,{index:e+1}),s.jsx(a,{alt:t.title,src:t.coverUrl,ratio:{xs:"4/3",sm:"16/10"}})]})}function Os({data:t}){const e=d({loop:!0,slidesToShow:"70%",slideSpacing:"20px"});return s.jsxs(s.Fragment,{children:[s.jsx(c,{carousel:e,children:t.map((o,n)=>s.jsx(Ps,{index:n,item:o,selected:e.dots.selectedIndex===n},o.id))}),s.jsxs(r,{display:"flex",alignItems:"center",justifyContent:"space-between",sx:{mt:3},children:[s.jsx(v,{...e.arrows,options:e.options}),s.jsx(m,{scrollSnaps:e.dots.scrollSnaps,selectedIndex:e.dots.selectedIndex,onClickDot:e.dots.onClickDot})]})]})}function Ps({item:t,index:e,selected:o}){return s.jsxs(r,{sx:{opacity:.24,borderRadius:2,overflow:"hidden",position:"relative",transition:n=>n.transitions.create(["opacity"],{easing:n.transitions.easing.easeIn,duration:n.transitions.duration.complex}),...o&&{opacity:1}},children:[s.jsx(x,{index:e+1}),s.jsx(a,{visibleByDefault:!0,alt:t.title,src:t.coverUrl,ratio:{xs:"4/3",sm:"16/10"}})]})}function Us({data:t}){const e=d({align:"start",slideSpacing:"20px",slidesToShow:{xs:1,sm:2}});return s.jsxs(s.Fragment,{children:[s.jsxs(r,{sx:{position:"relative"},children:[s.jsx(c,{carousel:e,sx:{maxWidth:640},children:t.map((o,n)=>s.jsx($s,{index:n,item:o},o.id))}),s.jsx(O,{...e.arrows,options:e.options,slotProps:{prevBtn:{sx:{bgcolor:"primary.main",color:"primary.contrastText"},svgIcon:s.jsx("path",{fill:"currentColor",d:"M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25z"})},nextBtn:{sx:{bgcolor:"primary.main",color:"primary.contrastText"},svgIcon:s.jsx("path",{fill:"currentColor",d:"M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v5.25z"})}}})]}),s.jsxs(r,{gap:3,display:"flex",alignItems:"center",flexDirection:"column",sx:{p:5,mt:5,borderRadius:2,bgcolor:"background.neutral"},children:[s.jsx(v,{...e.arrows,options:e.options,sx:{color:"secondary.main"}}),s.jsx(P,{...e.arrows,options:e.options,totalSlides:e.dots.dotCount,selectedIndex:e.dots.selectedIndex+1,slotProps:{prevBtn:{svgIcon:s.jsx("path",{fill:"currentColor",d:"M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25z"})},nextBtn:{svgIcon:s.jsx("path",{fill:"currentColor",d:"M4 11.25a.75.75 0 0 0 0 1.5h9.25V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53v5.25z"})}},sx:{bgcolor:"info.main",color:"info.contrastText"}}),s.jsx(m,{scrollSnaps:e.dots.scrollSnaps,selectedIndex:e.dots.selectedIndex,onClickDot:e.dots.onClickDot,fallbackCount:5,sx:{color:"primary.main"}}),s.jsx(m,{variant:"rounded",scrollSnaps:e.dots.scrollSnaps,selectedIndex:e.dots.selectedIndex,onClickDot:e.dots.onClickDot,fallbackCount:5,sx:{color:"info.main"}}),s.jsx(m,{variant:"number",scrollSnaps:e.dots.scrollSnaps,selectedIndex:e.dots.selectedIndex,onClickDot:e.dots.onClickDot,fallbackCount:5,slotProps:{dot:{selected:{bgcolor:"warning.main",color:"warning.contrastText"}}}})]})]})}function $s({item:t,index:e}){return s.jsxs(r,{sx:{borderRadius:2,overflow:"hidden",position:"relative"},children:[s.jsx(x,{index:e+1}),s.jsx(a,{visibleByDefault:!0,alt:t.title,src:t.coverUrl,ratio:"4/3"})]})}function Ms({data:t}){var o;const e=d({thumbs:{slidesToShow:"auto"}});return s.jsxs("div",{children:[s.jsxs(r,{sx:{mb:2.5,position:"relative"},children:[s.jsx(c,{carousel:e,sx:{borderRadius:2},children:t.map((n,i)=>s.jsxs(r,{sx:{position:"relative"},children:[s.jsx(x,{index:i+1}),s.jsx(a,{visibleByDefault:!0,alt:n.title,src:n.coverUrl,ratio:{xs:"4/3",sm:"16/10"}})]},n.id))}),s.jsx(P,{...e.arrows,options:e.options,totalSlides:e.dots.dotCount,selectedIndex:e.dots.selectedIndex+1,sx:{right:16,bottom:16,position:"absolute"}})]}),s.jsx(es,{ref:e.thumbs.thumbsRef,options:(o=e.options)==null?void 0:o.thumbs,sx:{width:{xs:1,sm:360}},children:t.map((n,i)=>s.jsx(ts,{index:i,src:n.coverUrl,selected:i===e.thumbs.selectedIndex,onClick:()=>e.thumbs.onClickThumb(i),sx:{width:{xs:48,sm:64},height:{xs:48,sm:64}}},n.id))})]})}function Es({data:t}){var o;const e=d({thumbs:{axis:"y",slideSpacing:"8px",slidesToShow:"auto"}});return s.jsxs(r,{sx:{position:"relative"},children:[s.jsx(c,{carousel:e,sx:{borderRadius:2},children:t.map((n,i)=>s.jsxs(r,{sx:{position:"relative"},children:[s.jsx(x,{index:i+1}),s.jsx(a,{visibleByDefault:!0,alt:n.title,src:n.coverUrl,ratio:{xs:"3/4",sm:"16/10"}})]},n.id))}),s.jsx(P,{...e.arrows,options:e.options,totalSlides:e.dots.dotCount,selectedIndex:e.dots.selectedIndex+1,sx:{left:16,bottom:16,position:"absolute"}}),s.jsx(r,{sx:{p:.5,right:8,top:"50%",borderRadius:1.25,position:"absolute",bgcolor:"background.paper",transform:"translateY(-50%)"},children:s.jsx(es,{ref:e.thumbs.thumbsRef,options:(o=e.options)==null?void 0:o.thumbs,sx:{height:{xs:200,md:280}},children:t.map((n,i)=>s.jsx(ts,{index:i,src:n.coverUrl,selected:i===e.thumbs.selectedIndex,onClick:()=>e.thumbs.onClickThumb(i),sx:{width:48,height:48}},n.id))})})]})}function Ls({data:t}){const e=d({loop:!0},[ws({playOnInit:!1,delay:2e3})]);return s.jsxs(s.Fragment,{children:[s.jsx(ns,{isPlaying:e.autoplay.isPlaying,onClick:e.autoplay.onTogglePlay}),s.jsxs(r,{sx:{position:"relative"},children:[s.jsx(c,{carousel:e,sx:{borderRadius:2},children:t.map((o,n)=>s.jsx(Vs,{index:n,item:o},o.id))}),s.jsx(m,{scrollSnaps:e.dots.scrollSnaps,selectedIndex:e.dots.selectedIndex,onClickDot:e.dots.onClickDot,sx:{top:16,right:16,position:"absolute",color:"common.white"}})]})]})}function Vs({item:t,index:e}){return s.jsxs(r,{sx:{position:"relative"},children:[s.jsx(x,{index:e+1}),s.jsx(a,{visibleByDefault:!0,alt:t.title,src:t.coverUrl,ratio:{xs:"4/3",sm:"16/10"}})]})}function Ns({data:t}){const e=d({dragFree:!0,slidesToShow:"70%",slideSpacing:"20px"});return s.jsxs(s.Fragment,{children:[s.jsx(c,{carousel:e,children:t.map((o,n)=>s.jsx(zs,{index:n,item:o},o.id))}),s.jsxs(r,{display:"flex",alignItems:"center",justifyContent:"space-between",sx:{mt:3},children:[s.jsx(v,{...e.arrows,options:e.options}),s.jsx(os,{...e.progress})]})]})}function zs({item:t,index:e}){return s.jsxs(r,{sx:{borderRadius:2,overflow:"hidden",position:"relative"},children:[s.jsx(x,{index:e+1}),s.jsx(a,{visibleByDefault:!0,alt:t.title,src:t.coverUrl,ratio:{xs:"4/3",sm:"16/10"}})]})}function Hs({data:t}){const e=d({dragFree:!0,loop:!0,parallax:!0,slidesToShow:"70%",slideSpacing:"20px"});return s.jsxs(s.Fragment,{children:[s.jsxs(r,{sx:{position:"relative"},children:[s.jsx(c,{carousel:e,slotProps:{slide:{borderRadius:2}},children:t.map((o,n)=>s.jsx(Ws,{index:n,item:o},o.id))}),s.jsx(O,{...e.arrows,options:e.options})]}),s.jsx(m,{scrollSnaps:e.dots.scrollSnaps,selectedIndex:e.dots.selectedIndex,onClickDot:e.dots.onClickDot,sx:{width:1,justifyContent:"center",mt:3}})]})}function Ws({item:t,index:e}){return s.jsxs(r,{sx:{position:"relative"},children:[s.jsx(x,{index:e+1}),s.jsx(a,{visibleByDefault:!0,alt:t.title,src:t.coverUrl,ratio:{xs:"4/3",sm:"16/10"}})]})}function Ys({data:t}){const e=d();return s.jsxs(r,{sx:{position:"relative"},children:[s.jsx(c,{carousel:e,sx:{borderRadius:2},children:t.map((o,n)=>s.jsx(Gs,{index:n,item:o,selected:n===e.dots.selectedIndex},o.id))}),s.jsx(P,{...e.arrows,options:e.options,totalSlides:e.dots.dotCount,selectedIndex:e.dots.selectedIndex+1,sx:{top:16,right:16,position:"absolute"}})]})}function Gs({item:t,index:e,selected:o}){const n=Y();return s.jsxs(r,{sx:{position:"relative"},children:[s.jsx(x,{index:e+1}),s.jsx(a,{visibleByDefault:!0,alt:t.title,src:t.coverUrl,ratio:{xs:"4/3",sm:"16/10"}}),s.jsx(r,{sx:{...ss({color:`to top, ${n.vars.palette.grey[900]}, ${G(n.vars.palette.grey["900Channel"],0)}`}),top:0,width:1,height:1,position:"absolute"}}),s.jsxs(r,{component:ms,animate:o,action:!0,sx:{p:3,left:0,width:1,bottom:0,position:"absolute",color:"common.white"},children:[s.jsx(z.div,{variants:H().inRight,children:s.jsx(F,{noWrap:!0,sx:{mb:1,typography:{xs:"subtitle1",md:"h3"}},children:t.title})}),s.jsx(z.div,{variants:H().inRight,children:s.jsx(F,{noWrap:!0,variant:"body2",children:t.description})}),s.jsx(z.div,{variants:H().inRight,children:s.jsx(Z,{color:"primary",variant:"contained",sx:{mt:3,display:{xs:"none",sm:"inline-flex"}},children:"View More"})})]})]})}const _s={direction:"forward",speed:2,startDelay:1e3,active:!0,breakpoints:{},playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,rootNode:null};function _(t={}){let e,o,n,i=!1,g=!0,I=0,b,U;function f(p,h){o=p;const{mergeOptions:w,optionsAtMedia:E}=h,S=w(_s,_.globalOptions),L=w(S,t);if(e=E(L),o.scrollSnapList().length<=1)return;b=e.startDelay,n=!1,U=o.internalEngine().scrollBody;const{eventStore:y}=o.internalEngine(),D=o.rootNode(),k=e.rootNode&&e.rootNode(D)||D,B=o.containerNode();o.on("pointerDown",u),e.stopOnInteraction||o.on("pointerUp",M),e.stopOnMouseEnter&&(y.add(k,"mouseenter",()=>{g=!1,u()}),e.stopOnInteraction||y.add(k,"mouseleave",()=>{g=!0,j()})),e.stopOnFocusIn&&(y.add(B,"focusin",()=>{u(),o.scrollTo(o.selectedScrollSnap(),!0)}),e.stopOnInteraction||y.add(B,"focusout",j)),e.playOnInit&&j()}function C(){o.off("pointerDown",u).off("pointerUp",M).off("settle",$),u(),n=!0,i=!1}function j(){if(n||i||!g)return;o.emit("autoScroll:play");const p=o.internalEngine(),{ownerWindow:h}=p;I=h.setTimeout(()=>{p.scrollBody=is(p),p.animation.start()},b),i=!0}function u(){if(n||!i)return;o.emit("autoScroll:stop");const p=o.internalEngine(),{ownerWindow:h}=p;p.scrollBody=U,h.clearTimeout(I),I=0,i=!1}function $(){g&&j(),o.off("settle",$)}function M(){o.on("settle",$)}function is(p){const{location:h,target:w,scrollTarget:E,index:S,indexPrevious:L,limit:{reachedMin:y,reachedMax:D,constrain:k},options:{loop:B}}=p,xs=e.direction==="forward"?-1:1,T=()=>N;let R=0,X=0,V=h.get(),q=0,J=!1;function us(){let K=0;R=xs*e.speed,V+=R,h.add(R),w.set(h),K=V-q,X=Math.sign(K),q=V;const Q=E.byDistance(0,!1).index;S.get()!==Q&&(L.set(S.get()),S.set(Q),o.emit("select"));const ps=e.direction==="forward"?y(h.get()):D(h.get());if(!B&&ps){J=!0;const hs=k(h.get());h.set(hs),w.set(h),u()}return N}const N={direction:()=>X,duration:()=>-1,velocity:()=>R,settled:()=>J,seek:us,useBaseFriction:T,useBaseDuration:T,useFriction:T,useDuration:T};return N}function ls(p){typeof p<"u"&&(b=p),g=!0,j()}function as(){i&&u()}function cs(){i&&(u(),M())}function ds(){return i}return{name:"autoScroll",options:t,init:f,destroy:C,play:ls,stop:as,reset:cs,isPlaying:ds}}_.globalOptions=void 0;function Xs({data:t}){const e=d({loop:!0},[_({playOnInit:!1})]);return s.jsxs(s.Fragment,{children:[s.jsx(ns,{isPlaying:e.autoScroll.isPlaying,onClick:e.autoScroll.onTogglePlay}),s.jsxs(r,{sx:{position:"relative"},children:[s.jsx(c,{carousel:e,sx:{borderRadius:2},children:t.map((o,n)=>s.jsx(qs,{index:n,item:o},o.id))}),s.jsx(os,{...e.progress,sx:{top:20,right:20,color:"info.light",position:"absolute"}})]})]})}function qs({item:t,index:e}){return s.jsxs(r,{sx:{position:"relative"},children:[s.jsx(x,{index:e+1}),s.jsx(a,{visibleByDefault:!0,alt:t.title,src:t.coverUrl,ratio:{xs:"4/3",sm:"16/10"}})]})}function Js({data:t}){const e=d({loop:!0,dragFree:!0,slideSpacing:"20px",slidesToShow:{xs:1,sm:2,md:"36%"}});return s.jsxs(s.Fragment,{children:[s.jsxs(r,{sx:{position:"relative"},children:[s.jsx(c,{carousel:e,children:t.map((o,n)=>s.jsx(Ks,{index:n,item:o},o.id))}),s.jsx(O,{...e.arrows,options:e.options})]}),s.jsx(m,{variant:"number",scrollSnaps:e.dots.scrollSnaps,selectedIndex:e.dots.selectedIndex,onClickDot:e.dots.onClickDot,sx:{mt:5,mb:2,width:1,justifyContent:"center"}})]})}function Ks({item:t,index:e}){const o=Y();return s.jsxs(r,{sx:{borderRadius:2,overflow:"hidden",position:"relative"},children:[s.jsx(x,{index:e+1}),s.jsx(a,{visibleByDefault:!0,alt:t.title,src:t.coverUrl,ratio:"3/4"}),s.jsxs(Ss,{sx:{...ss({color:`to top, ${o.vars.palette.grey[900]} 25%, ${G(o.vars.palette.grey["900Channel"],0)} 100%`}),width:1,bottom:0,zIndex:9,textAlign:"left",position:"absolute",color:"common.white"},children:[s.jsx(F,{variant:"h5",sx:{...js({line:2}),mb:2},children:t.title}),s.jsxs(fs,{color:"inherit",variant:"overline",sx:{opacity:.72,alignItems:"center",display:"inline-flex",transition:o.transitions.create(["opacity"]),"&:hover":{opacity:1}},children:["learn More",s.jsx(W,{icon:"eva:arrow-forward-fill",width:16,sx:{ml:1}})]})]})]})}function rs(t={}){let e,o=[];const n=["select","slideFocus"];function i(f){e=f;const{options:{axis:C},slideRects:j}=e.internalEngine();C!=="y"&&(o=j.map(u=>u.height),n.forEach(u=>e.on(u,b)),b())}function g(){n.forEach(C=>e.off(C,b));const f=e.containerNode();f.style.height="",f.getAttribute("style")||f.removeAttribute("style")}function I(){const{slideRegistry:f}=e.internalEngine();return f[e.selectedScrollSnap()].map(j=>o[j]).reduce((j,u)=>Math.max(j,u),0)}function b(){e.containerNode().style.height=`${I()}px`}return{name:"autoHeight",options:t,init:i,destroy:g}}rs.globalOptions=void 0;function Qs({data:t}){const e=d({},[rs()]);return s.jsxs(s.Fragment,{children:[s.jsx(v,{...e.arrows,options:e.options,sx:{top:20,right:16,position:"absolute"}}),s.jsx(c,{carousel:e,sx:{borderRadius:2},children:t.map((o,n)=>s.jsx(Zs,{item:o,index:n},o.id))})]})}function Zs({item:t,index:e}){return s.jsxs(r,{sx:{position:"relative",overflow:"hidden",borderRadius:2},children:[s.jsx(x,{index:e+1}),s.jsx(a,{alt:t.title,src:t.coverUrl,sx:{width:1,...e===0&&{height:200},...e===1&&{height:240},...e===2&&{height:160},...e===3&&{height:320}}})]})}function se({data:t}){const e=d({direction:"rtl"});return s.jsxs(r,{dir:"rtl",sx:{position:"relative"},children:[s.jsx(c,{carousel:e,sx:{borderRadius:2},children:t.map((o,n)=>s.jsx(ee,{index:n,item:o},o.id))}),s.jsx(O,{...e.arrows,options:e.options}),s.jsx(m,{scrollSnaps:e.dots.scrollSnaps,selectedIndex:e.dots.selectedIndex,onClickDot:e.dots.onClickDot,sx:{top:16,right:16,color:"info.main",position:"absolute"}})]})}function ee({item:t,index:e}){const o=Y();return s.jsxs(r,{sx:{position:"relative"},children:[s.jsx(x,{index:e+1}),s.jsx(a,{visibleByDefault:!0,alt:t.title,src:t.coverUrl,ratio:{xs:"4/3",sm:"16/10"},slotProps:{overlay:{background:`linear-gradient(to bottom, ${G(o.vars.palette.common.blackChannel,0)} 20%, ${o.vars.palette.grey[900]} 80%)`}}}),s.jsxs(r,{gap:2,display:"flex",alignItems:"center",sx:{p:3,left:0,width:1,bottom:0,zIndex:9,position:"absolute",color:"common.white"},children:[s.jsx(F,{component:"h6",sx:{flexGrow:1,typography:{xs:"subtitle2",sm:"h6"}},children:t.title}),s.jsx(gs,{color:"inherit",children:s.jsx(W,{icon:"eva:more-horizontal-fill"})})]})]})}function te({data:t}){const e=d({slidesToShow:"auto",slideSpacing:"20px"});return s.jsxs(s.Fragment,{children:[s.jsx(c,{carousel:e,children:t.map((o,n)=>s.jsx(oe,{index:n,item:o},o.id))}),s.jsxs(r,{display:"flex",alignItems:"center",justifyContent:"space-between",sx:{mt:3},children:[s.jsx(v,{...e.arrows,options:e.options}),s.jsx(m,{scrollSnaps:e.dots.scrollSnaps,selectedIndex:e.dots.selectedIndex,onClickDot:e.dots.onClickDot})]})]})}function oe({item:t,index:e}){const o=(e+2)*140;return s.jsxs(r,{sx:{position:"relative"},children:[s.jsx(x,{index:e+1}),s.jsx(a,{alt:t.title,src:t.coverUrl,sx:{borderRadius:2,width:{xs:o/3,md:o},height:{xs:160,sm:240,md:320}}})]})}const l=[...Array(20)].map((t,e)=>({id:A.id(e),title:A.postTitle(e),coverUrl:A.image.cover(e),description:A.description(e)})),ne=[{name:"Align",component:s.jsx(Ts,{data:l.slice(11,15)})},{name:"Progress",component:s.jsx(Ns,{data:l.slice(3,7)})},{name:"Opacity",component:s.jsx(Os,{data:l.slice(8,12)})},{name:"Scale",component:s.jsx(As,{data:l.slice(10,14)})},{name:"Parallax",component:s.jsx(Hs,{data:l.slice(11,15)})},{name:"Right-to-left",component:s.jsx(se,{data:l.slice(15,19)})},{name:"Autoplay",component:s.jsx(Ls,{data:l.slice(2,6)})},{name:"Auto Scroll",component:s.jsx(Xs,{data:l.slice(3,7)})},{name:"Thumbs-x",component:s.jsx(Ms,{data:l.slice(3,11)})},{name:"Thumbs-y",component:s.jsx(Es,{data:l.slice(2,10)})},{name:"Variable widths",component:s.jsx(te,{data:l.slice(8,12)})},{name:"Auto height",component:s.jsx(Qs,{data:l.slice(14,18)})},{name:"Y-axis",component:s.jsx(ks,{data:l.slice(4,8)})},{name:"Dots number",component:s.jsx(Js,{data:l.slice(8,16)})},{name:"Animation",component:s.jsx(Ys,{data:l.slice(16,20)})},{name:"Customs",component:s.jsx(Us,{data:l.slice(8,14)})}];function re(){return s.jsxs(s.Fragment,{children:[s.jsx(Is,{children:s.jsx(ys,{heading:"Carousel",links:[{name:"Components",href:bs.components},{name:"Carousel"}],moreLink:["https://www.embla-carousel.com/"]})}),s.jsx(Ds,{data:ne})]})}const ie={title:`Carousel | Components - ${Cs.site.name}`};function ye(){return s.jsxs(s.Fragment,{children:[s.jsx(vs,{children:s.jsxs("title",{children:[" ",ie.title]})}),s.jsx(re,{})]})}export{ye as default};
