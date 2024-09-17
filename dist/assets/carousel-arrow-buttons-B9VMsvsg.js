import{j as a,S as j,b as z,v as C,B as y,aV as R,bt as k,bu as N,s as A}from"./index-C2cM-DBs.js";import{c as h}from"./carousel-progress-bar-CPY0YlVz.js";function F({options:v,slotProps:e,totalSlides:b,selectedIndex:n,onClickPrev:x,onClickNext:B,disablePrev:i,disableNext:d,sx:r,...g}){var c,u,t,S,f,I;return a.jsxs(j,{direction:"row",alignItems:"center",display:"inline-flex",className:h.arrows,sx:{gap:.5,zIndex:9,color:"action.active",...r},...g,children:[a.jsx(m,{variant:"prev",options:v,disabled:i,onClick:x,svgIcon:(c=e==null?void 0:e.prevBtn)==null?void 0:c.svgIcon,svgSize:(u=e==null?void 0:e.prevBtn)==null?void 0:u.svgSize,sx:(t=e==null?void 0:e.prevBtn)==null?void 0:t.sx}),a.jsx(m,{variant:"next",options:v,disabled:d,onClick:B,svgIcon:(S=e==null?void 0:e.nextBtn)==null?void 0:S.svgIcon,svgSize:(f=e==null?void 0:e.prevBtn)==null?void 0:f.svgSize,sx:(I=e==null?void 0:e.prevBtn)==null?void 0:I.sx})]})}function l({options:v,slotProps:e,totalSlides:b,selectedIndex:n,onClickPrev:x,onClickNext:B,disablePrev:i,disableNext:d,sx:r,...g}){var u,t,S,f,I,w;const c=z();return a.jsxs(j,{direction:"row",alignItems:"center",display:"inline-flex",className:h.arrows,sx:{p:.5,gap:.25,zIndex:9,borderRadius:1.25,color:"common.white",bgcolor:C(c.vars.palette.grey["900Channel"],.48),...r},...g,children:[a.jsx(m,{variant:"prev",options:v,disabled:i,onClick:x,sx:{p:.75,borderRadius:"inherit",...(u=e==null?void 0:e.prevBtn)==null?void 0:u.sx},svgIcon:(t=e==null?void 0:e.prevBtn)==null?void 0:t.svgIcon,svgSize:((S=e==null?void 0:e.prevBtn)==null?void 0:S.svgSize)??16}),a.jsxs(y,{component:"span",className:h.arrowsLabel,sx:{mx:.5,typography:"subtitle2"},children:[n,"/",b]}),a.jsx(m,{variant:"next",options:v,disabled:d,onClick:B,sx:{p:.75,borderRadius:"inherit",...(f=e==null?void 0:e.nextBtn)==null?void 0:f.sx},svgIcon:(I=e==null?void 0:e.nextBtn)==null?void 0:I.svgIcon,svgSize:((w=e==null?void 0:e.prevBtn)==null?void 0:w.svgSize)??16})]})}function E({options:v,slotProps:e,onClickPrev:b,onClickNext:n,disablePrev:x,disableNext:B}){var d,r,g,c,u,t;const i={zIndex:9,top:"50%",borderRadius:1.5,position:"absolute",color:"common.white",bgcolor:"text.primary",transform:"translateY(-50%)","&:hover":{opacity:.8},[A.dark]:{color:"grey.800"}};return a.jsxs(a.Fragment,{children:[a.jsx(m,{variant:"prev",options:v,disabled:x,onClick:b,svgIcon:(d=e==null?void 0:e.prevBtn)==null?void 0:d.svgIcon,svgSize:(r=e==null?void 0:e.prevBtn)==null?void 0:r.svgSize,sx:{left:-16,...i,...(g=e==null?void 0:e.prevBtn)==null?void 0:g.sx}}),a.jsx(m,{variant:"next",options:v,disabled:B,onClick:n,svgIcon:(c=e==null?void 0:e.nextBtn)==null?void 0:c.svgIcon,svgSize:(u=e==null?void 0:e.nextBtn)==null?void 0:u.svgSize,sx:{right:-16,...i,...(t=e==null?void 0:e.nextBtn)==null?void 0:t.sx}})]})}function m({sx:v,svgIcon:e,svgSize:b,options:n,variant:x,...B}){const i=x==="prev",d=x==="next",r=e||a.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.488 4.43a.75.75 0 0 1 .081 1.058L9.988 12l5.581 6.512a.75.75 0 1 1-1.138.976l-6-7a.75.75 0 0 1 0-.976l6-7a.75.75 0 0 1 1.057-.081",clipRule:"evenodd"}),g=e||a.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L14.012 12L8.431 5.488a.75.75 0 0 1 .08-1.057",clipRule:"evenodd"});return a.jsx(R,{className:i?h.arrowPrev:h.arrowPrev,"aria-label":i?"Prev button":"Next button",sx:{p:1,borderRadius:"50%",boxSizing:"content-box",transition:c=>c.transitions.create(["all"],{easing:c.transitions.easing.sharp,duration:c.transitions.duration.short}),[`&.${k.disabled}`]:{opacity:.4},...v,...(n==null?void 0:n.direction)==="rtl"&&{...i&&{right:-16,left:"auto"},...d&&{left:-16,right:"auto"}}},...B,children:a.jsx(N,{className:h.arrowSvg,sx:{width:b??20,height:b??20,...(n==null?void 0:n.axis)==="y"&&{transform:" rotate(90deg)"},...(n==null?void 0:n.direction)==="rtl"&&{transform:" scaleX(-1)"}},children:i?r:g})})}export{F as C,E as a,l as b};
