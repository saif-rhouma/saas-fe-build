import{aO as _,B as d,j as i,r as m,b as S,v as f,aP as j}from"./index-CDcUgrfM.js";const s={root:"mnl__carousel__root",container:"mnl__carousel__container",dots:"mnl__carousel__dots",dot:"mnl__carousel__dot",arrows:"mnl__carousel__arrows",arrowsLabel:"mnl__carousel__arrows_label",arrowPrev:"mnl__carousel__btn--prev",arrowNext:"mnl__carousel__btn--next",arrowSvg:"mnl__carousel__btn__svg",slide:"mnl__carousel__slide",slideContent:"mnl__carousel__slide__content",thumbs:"mnl__carousel__thumbs",thumb:"mnl__carousel__thumb",thumbContainer:"mnl__carousel__thumbs__container",thumbImage:"mnl__carousel__thumb__image",progress:"mnl__carousel__progress",progressBar:"mnl__carousel__progress__bar",state:{selected:"state--selected",disabled:"state--disabled"}},v=_(d,{shouldForwardProp:e=>e!=="axis"&&e!=="slideSpacing"})(({axis:e,slideSpacing:r})=>({display:"block",position:"relative",...e==="x"&&{minWidth:0,paddingLeft:r},...e==="y"&&{minHeight:0,paddingTop:r}})),k=_(d)(()=>({overflow:"hidden",position:"relative",borderRadius:"inherit"}));function y({sx:e,options:r,children:a,...t}){const o=$(r==null?void 0:r.slidesToShow);return i.jsx(v,{component:"li",axis:(r==null?void 0:r.axis)??"x",slideSpacing:r==null?void 0:r.slideSpacing,className:s.slide,sx:{flex:o,...e},...t,children:r!=null&&r.parallax?i.jsx(k,{className:s.slideContent,children:i.jsx("div",{className:"slide__parallax__layer",children:a})}):a})}function $(e){return e&&typeof e=="object"?Object.keys(e).reduce((r,a)=>{const t=e[a];return r[a]=b(t),r},{}):b(e)}function b(e=1){if(typeof e=="string"){if(!(e==="auto"||e.endsWith("%")||e.endsWith("px")))throw new Error("Only accepts values: auto, px, %, or number.");return`0 0 ${e}`}if(typeof e=="number")return`0 0 ${100/e}%`;throw new Error("Invalid value type. Only accepts values: auto, px, %, or number.")}const p=_(d,{shouldForwardProp:e=>e!=="axis"})(({axis:e})=>({margin:"auto",maxWidth:"100%",overflow:"hidden",position:"relative",...e==="y"&&{height:"100%"}})),C=_(d,{shouldForwardProp:e=>e!=="axis"&&e!=="slideSpacing"})(({axis:e,slideSpacing:r})=>({display:"flex",backfaceVisibility:"hidden",...e==="x"&&{touchAction:"pan-y pinch-zoom",marginLeft:`calc(${r} * -1)`},...e==="y"&&{height:"100%",flexDirection:"column",touchAction:"pan-x pinch-zoom",marginTop:`calc(${r} * -1)`}}));function E({carousel:e,children:r,sx:a,slotProps:t}){var u;const{mainRef:o,options:n}=e,c=(n==null?void 0:n.axis)??"x",h=(n==null?void 0:n.slideSpacing)??"0px",x=(n==null?void 0:n.direction)??"ltr",g=m.Children.map(r,l=>{if(m.isValidElement(l)){const w=l;return i.jsx(y,{options:e.options,sx:t==null?void 0:t.slide,children:l},w.key)}return null});return i.jsx(p,{sx:a,axis:c,ref:o,dir:x,className:s.root,children:i.jsx(C,{component:"ul",axis:c,slideSpacing:h,className:s.container,sx:{...((u=e.pluginNames)==null?void 0:u.includes("autoHeight"))&&{alignItems:"flex-start",transition:l=>l.transitions.create(["height"],{easing:l.transitions.easing.easeInOut,duration:l.transitions.duration.shorter})},...t==null?void 0:t.container},children:g})})}const I=m.forwardRef(({children:e,slotProps:r,options:a,sx:t,...o},n)=>{const c=(a==null?void 0:a.axis)??"x",h=(a==null?void 0:a.slideSpacing)??"12px",x=N(c),g=m.Children.map(e,u=>{if(m.isValidElement(u)){const l=u;return i.jsx(y,{options:{...a,slideSpacing:h},sx:r==null?void 0:r.slide,children:u},l.key)}return null});return i.jsx(p,{ref:n,axis:c,className:s.thumbs,sx:{flexShrink:0,...c==="x"&&{p:.5,maxWidth:1},...c==="y"&&{p:.5,maxHeight:1},...!(r!=null&&r.disableMask)&&x,...t},...o,children:i.jsx(C,{component:"ul",axis:c,slideSpacing:h,className:s.thumbContainer,sx:{...r==null?void 0:r.container},children:g})})});function W({sx:e,src:r,index:a,selected:t,...o}){return i.jsx(j,{className:s.thumb,sx:{width:64,height:64,opacity:.48,flexShrink:0,cursor:"pointer",borderRadius:1.25,transition:n=>n.transitions.create(["opacity","box-shadow"],{easing:n.transitions.easing.sharp,duration:n.transitions.duration.short}),...t&&{opacity:1,boxShadow:n=>`0 0 0 2px ${n.vars.palette.primary.main}`},...e},...o,children:i.jsx(d,{component:"img",alt:`carousel-thumb-${a}`,src:r,className:s.thumbImage,sx:{width:1,height:1,objectFit:"cover",borderRadius:"inherit"}})})}function N(e){const r=S(),a={zIndex:9,content:'""',position:"absolute"},t=`${r.vars.palette.background.paper} 20%, ${f(r.vars.palette.background.paperChannel,0)} 100%)`;return e==="y"?{"&::before, &::after":{...a,left:0,height:40,width:"100%"},"&::before":{top:-8,background:`linear-gradient(to bottom, ${t}`},"&::after":{bottom:-8,background:`linear-gradient(to top, ${t}`}}:{"&::before, &::after":{...a,top:0,width:40,height:"100%"},"&::before":{left:-8,background:`linear-gradient(to right, ${t}`},"&::after":{right:-8,background:`linear-gradient(to left, ${t}`}}}const R=_(d)(({theme:e})=>({height:6,maxWidth:120,width:"100%",borderRadius:6,overflow:"hidden",position:"relative",color:e.vars.palette.text.primary,backgroundColor:f(e.vars.palette.grey["500Channel"],.2)})),B=_(d)(()=>({top:0,bottom:0,width:"100%",left:"-100%",position:"absolute",backgroundColor:"currentColor"}));function O({value:e,sx:r,...a}){return i.jsx(R,{sx:r,className:s.progress,...a,children:i.jsx(B,{className:s.progressBar,sx:{transform:`translate3d(${e}%, 0px, 0px)`}})})}export{E as C,I as a,W as b,s as c,O as d};
