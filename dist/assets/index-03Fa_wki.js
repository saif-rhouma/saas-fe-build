import{r as c,aR as ce,aQ as me,aO as pe,j as t,b6 as be,fj as ve,fk as ye,B as v,fl as _,m as g,b as ue,eS as D,I as R,y as L,fm as Ie,ec as je,fn as Re,_ as U,v as ne,S as y,di as we,h as Ce,T as de,aH as E,e as N,aD as Oe,w as q,bN as oe,M as ke,p as Le,i as Te,k as De,H as ze,C as Ue}from"./index-DxrsDIwY.js";import{u as $e}from"./use-tabs-D97FSIeO.js";import{C as Ae}from"./custom-breadcrumbs-Dd3lNCwD.js";import{F as W}from"./Fab-DuHQEwUI.js";import{A as ie,v as Y}from"./animate-count-up-Bnj_lXpP.js";import{a as z,C as Be}from"./component-block-C_EA54zP.js";import{v as w}from"./fade-o6mfZnVH.js";import{v as f,a as h}from"./transition-BJzcwH5q.js";import{v as C}from"./bounce-BSK3KHpz.js";import{R as Ye,a as Xe}from"./RadioGroup-IW7zsT63.js";import{F as J}from"./FormControlLabel-DKxiCaQc.js";import{a as Me,b as Se,D as Pe}from"./DialogContent-262oYdAn.js";import{D as Ee}from"./DialogTitle-C_65wNCI.js";import{A as Fe}from"./animate-text-Bl-XyKCq.js";import{C as Ve}from"./component-hero-CI9jrOmv.js";import"./use-in-view-Bwo9Ebdy.js";import"./use-motion-value-DC2ce7Vh.js";import"./FormGroup-69w0Ctto.js";import"./formControlState-Dq1zat_P.js";function fe(){const e=c.useRef(!1);return ce(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Ke(){const e=fe(),[n,o]=c.useState(0),i=c.useCallback(()=>{e.current&&o(n+1)},[n]);return[c.useCallback(()=>me.postRender(i),[i]),n]}class He extends c.Component{getSnapshotBeforeUpdate(n){const o=this.props.childRef.current;if(o&&n.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=o.offsetHeight||0,i.width=o.offsetWidth||0,i.top=o.offsetTop,i.left=o.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Ge({children:e,isPresent:n}){const o=c.useId(),i=c.useRef(null),a=c.useRef({width:0,height:0,top:0,left:0}),{nonce:r}=c.useContext(pe);return c.useInsertionEffect(()=>{const{width:s,height:x,top:l,left:p}=a.current;if(n||!i.current||!s||!x)return;i.current.dataset.motionPopId=o;const u=document.createElement("style");return r&&(u.nonce=r),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${x}px !important;
            top: ${l}px !important;
            left: ${p}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[n]),t.jsx(He,{isPresent:n,childRef:i,sizeRef:a,children:c.cloneElement(e,{ref:i})})}const Q=({children:e,initial:n,isPresent:o,onExitComplete:i,custom:a,presenceAffectsLayout:r,mode:s})=>{const x=be(_e),l=c.useId(),p=c.useMemo(()=>({id:l,initial:n,isPresent:o,custom:a,onExitComplete:u=>{x.set(u,!0);for(const d of x.values())if(!d)return;i&&i()},register:u=>(x.set(u,!1),()=>x.delete(u))}),r?[Math.random()]:[o]);return c.useMemo(()=>{x.forEach((u,d)=>x.set(d,!1))},[o]),c.useEffect(()=>{!o&&!x.size&&i&&i()},[o]),s==="popLayout"&&(e=t.jsx(Ge,{isPresent:o,children:e})),t.jsx(ve.Provider,{value:p,children:e})};function _e(){return new Map}function Ne(e){return c.useEffect(()=>()=>e(),[])}const T=e=>e.key||"";function We(e,n){e.forEach(o=>{const i=T(o);n.set(i,o)})}function Qe(e){const n=[];return c.Children.forEach(e,o=>{c.isValidElement(o)&&n.push(o)}),n}const Ze=({children:e,custom:n,initial:o=!0,onExitComplete:i,exitBeforeEnter:a,presenceAffectsLayout:r=!0,mode:s="sync"})=>{const x=c.useContext(ye).forceRender||Ke()[0],l=fe(),p=Qe(e);let u=p;const d=c.useRef(new Map).current,I=c.useRef(u),j=c.useRef(new Map).current,V=c.useRef(!0);if(ce(()=>{V.current=!1,We(p,j),I.current=u}),Ne(()=>{V.current=!0,j.clear(),d.clear()}),V.current)return t.jsx(t.Fragment,{children:u.map(m=>t.jsx(Q,{isPresent:!0,initial:o?void 0:!1,presenceAffectsLayout:r,mode:s,children:m},T(m)))});u=[...u];const K=I.current.map(T),H=p.map(T),he=K.length;for(let m=0;m<he;m++){const b=K[m];H.indexOf(b)===-1&&!d.has(b)&&d.set(b,void 0)}return s==="wait"&&d.size&&(u=[]),d.forEach((m,b)=>{if(H.indexOf(b)!==-1)return;const G=j.get(b);if(!G)return;const xe=K.indexOf(b);let B=m;if(!B){const ge=()=>{d.delete(b);const ee=Array.from(j.keys()).filter(A=>!H.includes(A));if(ee.forEach(A=>j.delete(A)),I.current=p.filter(A=>{const te=T(A);return te===b||ee.includes(te)}),!d.size){if(l.current===!1)return;x(),i&&i()}};B=t.jsx(Q,{isPresent:!1,onExitComplete:ge,custom:n,presenceAffectsLayout:r,mode:s,children:G},T(G)),d.set(b,B)}u.splice(xe,0,B)}),u=u.map(m=>{const b=m.key;return d.has(b)?m:t.jsx(Q,{isPresent:!0,presenceAffectsLayout:r,mode:s,children:m},T(m))}),t.jsx(t.Fragment,{children:d.size?u:u.map(m=>c.cloneElement(m))})},qe={duration:2,ease:[.43,.13,.23,.96]},Z={animate:{fillOpacity:[0,0,1],pathLength:[1,.4,0],transition:qe}},O=e=>{const n=(e==null?void 0:e.distance)||720,o=e==null?void 0:e.durationIn,i=e==null?void 0:e.durationOut,a=e==null?void 0:e.easeIn,r=e==null?void 0:e.easeOut;return{in:{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1,transition:f({durationIn:o,easeIn:a})},exit:{scale:0,opacity:0,transition:h({durationOut:i,easeOut:r})}},inUp:{initial:{scale:0,opacity:0,translateY:n},animate:{scale:1,opacity:1,translateY:0,transition:f({durationIn:o,easeIn:a})},exit:{scale:0,opacity:0,translateY:n,transition:h({durationOut:i,easeOut:r})}},inDown:{initial:{scale:0,opacity:0,translateY:-n},animate:{scale:1,opacity:1,translateY:0,transition:f({durationIn:o,easeIn:a})},exit:{scale:0,opacity:0,translateY:-n,transition:h({durationOut:i,easeOut:r})}},inLeft:{initial:{scale:0,opacity:0,translateX:-n},animate:{scale:1,opacity:1,translateX:0,transition:f({durationIn:o,easeIn:a})},exit:{scale:0,opacity:0,translateX:-n,transition:h({durationOut:i,easeOut:r})}},inRight:{initial:{scale:0,opacity:0,translateX:n},animate:{scale:1,opacity:1,translateX:0,transition:f({durationIn:o,easeIn:a})},exit:{scale:0,opacity:0,translateX:n,transition:h({durationOut:i,easeOut:r})}},out:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,transition:f({durationIn:o,easeIn:a})}},outUp:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,translateY:-n,transition:f({durationIn:o,easeIn:a})}},outDown:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,translateY:n,transition:f({durationIn:o,easeIn:a})}},outLeft:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,translateX:-n,transition:f({durationIn:o,easeIn:a})}},outRight:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,translateX:n,transition:f({durationIn:o,easeIn:a})}}}},X=e=>{const n=e==null?void 0:e.durationIn,o=e==null?void 0:e.durationOut,i=e==null?void 0:e.easeIn,a=e==null?void 0:e.easeOut;return{inX:{initial:{rotateX:-180,opacity:0},animate:{rotateX:0,opacity:1,transition:f({durationIn:n,easeIn:i})},exit:{rotateX:-180,opacity:0,transition:h({durationOut:o,easeOut:a})}},inY:{initial:{rotateY:-180,opacity:0},animate:{rotateY:0,opacity:1,transition:f({durationIn:n,easeIn:i})},exit:{rotateY:-180,opacity:0,transition:h({durationOut:o,easeOut:a})}},outX:{initial:{rotateX:0,opacity:1},animate:{rotateX:70,opacity:0,transition:h({durationOut:o,easeOut:a})}},outY:{initial:{rotateY:0,opacity:1},animate:{rotateY:70,opacity:0,transition:h({durationOut:o,easeOut:a})}}}},k=e=>{const n=(e==null?void 0:e.distance)||160,o=e==null?void 0:e.durationIn,i=e==null?void 0:e.durationOut,a=e==null?void 0:e.easeIn,r=e==null?void 0:e.easeOut;return{inUp:{initial:{y:n},animate:{y:0,transition:f({durationIn:o,easeIn:a})},exit:{y:n,transition:h({durationOut:i,easeOut:r})}},inDown:{initial:{y:-n},animate:{y:0,transition:f({durationIn:o,easeIn:a})},exit:{y:-n,transition:h({durationOut:i,easeOut:r})}},inLeft:{initial:{x:-n},animate:{x:0,transition:f({durationIn:o,easeIn:a})},exit:{x:-n,transition:h({durationOut:i,easeOut:r})}},inRight:{initial:{x:n},animate:{x:0,transition:f({durationIn:o,easeIn:a})},exit:{x:n,transition:h({durationOut:i,easeOut:r})}},outUp:{initial:{y:0},animate:{y:-n,transition:f({durationIn:o,easeIn:a})},exit:{y:0,transition:h({durationOut:i,easeOut:r})}},outDown:{initial:{y:0},animate:{y:n,transition:f({durationIn:o,easeIn:a})},exit:{y:0,transition:h({durationOut:i,easeOut:r})}},outLeft:{initial:{x:0},animate:{x:-n,transition:f({durationIn:o,easeIn:a})},exit:{x:0,transition:h({durationOut:i,easeOut:r})}},outRight:{initial:{x:0},animate:{x:n,transition:f({durationIn:o,easeIn:a})},exit:{x:0,transition:h({durationOut:i,easeOut:r})}}}},ae=e=>{const n=e==null?void 0:e.durationIn,o=e==null?void 0:e.durationOut,i=e==null?void 0:e.easeIn,a=e==null?void 0:e.easeOut;return{in:{initial:{opacity:0,rotate:-360},animate:{opacity:1,rotate:0,transition:f({durationIn:n,easeIn:i})},exit:{opacity:0,rotate:-360,transition:h({durationOut:o,easeOut:a})}},out:{initial:{opacity:1,rotate:0},animate:{opacity:0,rotate:-360,transition:h({durationOut:o,easeOut:a})}}}},M=e=>{const n=(e==null?void 0:e.colors)||["#19dcea","#b22cff"],o=(e==null?void 0:e.duration)||5,i=(e==null?void 0:e.ease)||"linear";return{animate:{background:n,transition:{duration:o,ease:i}}}},S=e=>{const n=(e==null?void 0:e.duration)||5,o=(e==null?void 0:e.ease)||"easeOut";return{top:{animate:{scale:[1,1.25],y:[0,-15],transformOrigin:["50% 16%","50% top"],transition:{duration:n,ease:o}}},bottom:{animate:{scale:[1,1.25],y:[0,15],transformOrigin:["50% 84%","50% bottom"],transition:{duration:n,ease:o}}},left:{animate:{scale:[1,1.25],x:[0,20],y:[0,15],transformOrigin:["16% 50%","0% left"],transition:{duration:n,ease:o}}},right:{animate:{scale:[1,1.25],x:[0,-20],y:[0,-15],transformOrigin:["84% 50%","0% right"],transition:{duration:n,ease:o}}}}},P=e=>{const n=(e==null?void 0:e.colors)||["#ee7752","#e73c7e","#23a6d5","#23d5ab"],o=(e==null?void 0:e.duration)||5,i=(e==null?void 0:e.ease)||"linear",a=r=>`linear-gradient(${r}deg, ${n})`;return{top:{animate:{backgroundImage:[a(0),a(0)],backgroundPosition:["center 99%","center 1%"],backgroundSize:["100% 600%","100% 600%"],transition:{duration:o,ease:i}}},right:{animate:{backgroundPosition:["1% center","99% center"],backgroundImage:[a(270),a(270)],backgroundSize:["600% 100%","600% 100%"],transition:{duration:o,ease:i}}},bottom:{animate:{backgroundImage:[a(0),a(0)],backgroundPosition:["center 1%","center 99%"],backgroundSize:["100% 600%","100% 600%"],transition:{duration:o,ease:i}}},left:{animate:{backgroundPosition:["99% center","1% center"],backgroundImage:[a(270),a(270)],backgroundSize:["600% 100%","600% 100%"],transition:{duration:o,ease:i}}}}};function se({animate:e,sx:n}){const o=c.useRef(null),i=c.useRef(null),[a,r]=c.useState(1),[s,x]=c.useState(null),l={disable:e==null?void 0:e.disable,delay:(e==null?void 0:e.delay)??0,loop:(e==null?void 0:e.loop)??!0,angle:(e==null?void 0:e.angle)??315,length:(e==null?void 0:e.length)??40,width:(e==null?void 0:e.width)??"2px",color:(e==null?void 0:e.color)??"#000",ease:(e==null?void 0:e.ease)??"linear",duration:(e==null?void 0:e.duration)??8,distance:(e==null?void 0:e.distance)??20,repeatType:(e==null?void 0:e.repeatType)??"loop",disableDoubleline:e==null?void 0:e.disableDoubleline,outline:(e==null?void 0:e.outline)??"135deg, rgba(0,0,0,0.08), rgba(0,0,0,0.08)"};c.useEffect(()=>{if(!l.disable){if(o.current){const{width:d,height:I}=o.current.getBoundingClientRect();r(d/I)}if(!l.disableDoubleline&&i.current){const d=getComputedStyle(i.current);x({paddingLeft:d.paddingLeft,paddingRight:d.paddingRight,paddingBottom:d.paddingBottom,paddingTop:d.paddingTop,borderTopLeftRadius:d.borderTopLeftRadius,borderTopRightRadius:d.borderTopRightRadius,borderBottomLeftRadius:d.borderBottomLeftRadius,borderBottomRightRadius:d.borderBottomRightRadius})}}},[l.disable,l.disableDoubleline]);const p=d=>{const I=[-55,35,125,215,305],j=`transparent ${l.angle-(2+l.length)}deg, ${d}  ${l.angle}deg, transparent ${l.angle+l.length}deg`;return[`conic-gradient(from ${I[0]}deg at ${l.distance/a}% ${l.distance}% , ${j})`,`conic-gradient(from ${I[1]}deg at ${100-l.distance/a}% ${l.distance}% , ${j})`,`conic-gradient(from ${I[2]}deg at ${100-l.distance/a}% ${100-l.distance}% , ${j})`,`conic-gradient(from ${I[3]}deg at ${l.distance/a}% ${100-l.distance}% , ${j})`,`conic-gradient(from ${I[4]}deg at ${l.distance/a}% ${l.distance}% , ${j})`]},u={ease:l.ease,delay:l.delay,duration:l.duration,repeatType:l.repeatType,repeat:l.loop?1/0:1,times:a>1?[0,.25+.25/a,.5,.75+.25/a,1]:[0,a*.25,.5,.5+a*.25,1]};return t.jsxs(v,{ref:o,sx:{minWidth:40,minHeight:40,position:"relative",borderRadius:"inherit","&::before":{..._({color:l.outline,padding:l.width})},...n},children:[t.jsx(v,{ref:i,component:g.span,transition:u,animate:l.disable?void 0:{background:p(typeof l.color=="string"?l.color:l.color[0])},sx:{..._({padding:l.width})}}),!l.disable&&!l.disableDoubleline&&t.jsx(v,{component:g.span,transition:u,animate:{background:p(typeof l.color=="string"?l.color:l.color[1])},sx:{..._(),transform:"scale(-1)",...s&&{paddingTop:s==null?void 0:s.paddingBottom,paddingBottom:s==null?void 0:s.paddingTop,paddingLeft:s==null?void 0:s.paddingRight,paddingRight:s==null?void 0:s.paddingLeft,borderTopLeftRadius:s==null?void 0:s.borderBottomRightRadius,borderTopRightRadius:s==null?void 0:s.borderBottomLeftRadius,borderBottomLeftRadius:s==null?void 0:s.borderTopRightRadius,borderBottomRightRadius:s==null?void 0:s.borderTopLeftRadius}}})]})}function Je(){const e=ue(),n=e.vars.palette.primary.light,o=e.vars.palette.primary.main,i=e.vars.palette.primary.dark;return t.jsxs(v,{component:g.svg,viewBox:"0 0 512 512",sx:{width:240,height:240,strokeWidth:4,stroke:o},children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{x1:"100%",y1:"9.946%",x2:"50%",y2:"50%",id:"a",children:[t.jsx("stop",{stopColor:i,offset:"0%"}),t.jsx("stop",{stopColor:o,offset:"100%"})]}),t.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"b",children:[t.jsx("stop",{stopColor:n,offset:"0%"}),t.jsx("stop",{stopColor:o,offset:"100%"})]}),t.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"c",children:[t.jsx("stop",{stopColor:n,offset:"0%"}),t.jsx("stop",{stopColor:o,offset:"100%"})]})]}),t.jsxs("g",{fill:"none",fillRule:"nonzero",children:[t.jsx(g.path,{...Z,d:"M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z",fill:"url(#a)"}),t.jsx(g.path,{...Z,d:"M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994",fill:"url(#b)"}),t.jsx(g.path,{...Z,d:"M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48",fill:"url(#c)"})]})]})}function et(){return t.jsxs(t.Fragment,{children:[t.jsx(W,{component:g.button,whileTap:"tap",whileHover:"hover",variants:D(1.1,.95),color:"primary",size:"small",children:t.jsx(R,{icon:"mingcute:add-line",width:24})}),t.jsx(W,{component:g.button,whileTap:"tap",whileHover:"hover",variants:D(),color:"primary",size:"medium",children:t.jsx(R,{icon:"mingcute:add-line",width:24})}),t.jsx(W,{component:g.button,whileTap:"tap",whileHover:"hover",variants:D(1.08,.99),color:"primary",children:t.jsx(R,{icon:"mingcute:add-line",width:24})}),t.jsx(L,{component:g.button,whileTap:"tap",whileHover:"hover",variants:D(1.1,.95),color:"primary",size:"small",children:t.jsx(R,{icon:"mingcute:add-line",width:24})}),t.jsx(L,{component:g.button,whileTap:"tap",whileHover:"hover",variants:D(),color:"primary",children:t.jsx(R,{icon:"mingcute:add-line",width:24})}),t.jsx(L,{component:g.button,whileTap:"tap",whileHover:"hover",variants:D(1.08,.99),color:"primary",size:"large",children:t.jsx(R,{icon:"mingcute:add-line",width:24})})]})}function tt(){return t.jsxs(t.Fragment,{children:[t.jsx(ie,{component:"h6",variant:"h1",to:500,unit:"+"}),t.jsx(ie,{component:"h6",variant:"h1",from:200,to:500.14,toFixed:2,unit:"k"})]})}function nt(){const e=ue(),[n,o]=c.useState(0);return t.jsxs(v,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[t.jsx(z,{title:"Button Click",sx:{gap:3},children:t.jsx(et,{})}),t.jsxs(z,{title:"Path",children:[t.jsx(L,{onClick:()=>o(n+1),sx:{position:"absolute",right:16,top:16},children:t.jsx(R,{icon:"eva:refresh-fill"})}),t.jsx(Je,{},n)]}),t.jsxs(z,{title:"Path",sx:{flexDirection:"column"},children:[t.jsx(L,{onClick:()=>o(n+1),sx:{position:"absolute",right:16,top:16},children:t.jsx(R,{icon:"eva:refresh-fill"})}),t.jsx(tt,{},n)]}),t.jsxs(z,{title:"Logo",sx:{gap:5},children:[t.jsx(Ie,{}),t.jsx(je,{})]}),t.jsx(z,{title:"Avatar",sx:{gap:5},children:t.jsx(Re,{width:120,slotProps:{avatar:{alt:"My avatar",src:U.image.avatar(24)},overlay:{border:2,spacing:2}}})}),t.jsxs(z,{title:"Border",sx:{gap:5},children:[t.jsx(se,{animate:{disableDoubleline:!0},sx:{width:160,height:160}}),t.jsx(se,{animate:{width:"4px",color:e.vars.palette.primary.dark,outline:`135deg, ${ne(e.vars.palette.warning.mainChannel,.24)}, ${ne(e.vars.palette.primary.mainChannel,.24)}`},sx:{width:160,height:160}})]})]})}function ot({onRefresh:e,...n}){return t.jsx(y,{direction:"row",alignItems:"center",justifyContent:"flex-end",...n,children:t.jsx(L,{onClick:e,children:t.jsx(R,{icon:"eva:refresh-fill"})})})}function $(e="slideInUp",n=160){return{slideInUp:k({distance:n}).inUp,slideInDown:k({distance:n}).inDown,slideInLeft:k({distance:n}).inLeft,slideInRight:k({distance:n}).inRight,slideOutUp:k({distance:n}).outUp,slideOutDown:k({distance:n}).outDown,slideOutLeft:k({distance:n}).outLeft,slideOutRight:k({distance:n}).outRight,fadeIn:w().in,fadeInUp:w({distance:n}).inUp,fadeInDown:w({distance:n}).inDown,fadeInLeft:w({distance:n}).inLeft,fadeInRight:w({distance:n}).inRight,fadeOut:w({distance:n}).out,fadeOutUp:w({distance:n}).outUp,fadeOutDown:w({distance:n}).outDown,fadeOutLeft:w({distance:n}).outLeft,fadeOutRight:w({distance:n}).outRight,zoomIn:O({distance:80}).in,zoomInUp:O({distance:80}).inUp,zoomInDown:O({distance:80}).inDown,zoomInLeft:O({distance:240}).inLeft,zoomInRight:O({distance:240}).inRight,zoomOut:O().out,zoomOutLeft:O().outLeft,zoomOutRight:O().outRight,zoomOutUp:O().outUp,zoomOutDown:O().outDown,bounceIn:C().in,bounceInUp:C().inUp,bounceInDown:C().inDown,bounceInLeft:C().inLeft,bounceInRight:C().inRight,bounceOut:C().out,bounceOutUp:C().outUp,bounceOutDown:C().outDown,bounceOutLeft:C().outLeft,bounceOutRight:C().outRight,flipInX:X().inX,flipInY:X().inY,flipOutX:X().outX,flipOutY:X().outY,scaleInX:Y().inX,scaleInY:Y().inY,scaleOutX:Y().outX,scaleOutY:Y().outY,rotateIn:ae().in,rotateOut:ae().out,kenburnsTop:S().top,kenburnsBottom:S().bottom,kenburnsLeft:S().left,kenburnsRight:S().right,panTop:P().top,panBottom:P().bottom,panLeft:P().left,panRight:P().right,color2x:M(),color3x:M({colors:["#19dcea","#b22cff","#ea2222"]}),color4x:M({colors:["#19dcea","#b22cff","#ea2222","#f5be10"]}),color5x:M({colors:["#19dcea","#b22cff","#ea2222","#f5be10","#3bd80d"]})}[e]}function it({selectVariant:e,sx:n,...o}){const i=c.useRef(null);return t.jsx(y,{ref:i,component:g.div,variants:we(),sx:{py:5,gap:3,borderRadius:2,flex:"1 1 auto",overflowX:"auto",bgcolor:"background.neutral",...n},...o,children:t.jsx(t.Fragment,{children:[...Array(40)].map((a,r)=>t.jsx(v,{component:Ce,variants:$(e),viewport:{root:i,once:!0,amount:.1},sx:{py:4,width:1,mx:"auto",maxWidth:480,flexShrink:0,borderRadius:1,textAlign:"center",bgcolor:"background.paper",boxShadow:s=>s.customShadows.z8},children:t.jsxs(de,{variant:"body2",children:["Item ",r+1]})},r))})})}function F({variantKey:e,selectVariant:n,onChangeVariant:o,sx:i,...a}){return t.jsx(y,{sx:{p:2.5,width:320,overflowX:"auto",borderLeft:r=>`solid 1px ${r.vars.palette.divider}`,...i},...a,children:t.jsx(Ye,{value:n,onChange:o,children:e.map(r=>t.jsxs(v,{sx:{my:1.5},children:[t.jsx(de,{variant:"overline",sx:{px:1,mb:1,display:"block"},children:r.type}),r.values.map(s=>t.jsx(J,{value:s,label:s,control:t.jsx(Xe,{sx:{display:"none"}}),sx:{px:1,py:.5,mx:0,my:.25,width:"100%",borderRadius:.75,color:"text.secondary",...n===s&&{color:"warning.contrastText"},...n===s&&{bgcolor:"warning.main"}}},s))]},r.type))})})}function at(){const[e,n]=c.useState(0),[o,i]=c.useState("slideInUp"),a=c.useCallback(r=>{n(e+1),i(r.target.value)},[e]);return t.jsxs(E,{sx:{height:640,display:"flex"},children:[t.jsxs(y,{spacing:2.5,sx:{p:2.5,display:"flex",flex:"1 1 auto"},children:[t.jsx(ot,{onRefresh:()=>n(e+1)}),t.jsx(it,{selectVariant:o},e)]}),t.jsx(F,{variantKey:st,selectVariant:o,onChangeVariant:a})]})}const st=[{type:"slide",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"fade",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"zoom",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"bounce",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"flip",values:["flipInX","flipInY"]},{type:"scale",values:["scaleInX","scaleInY"]},{type:"rotate",values:["rotateIn"]}];function rt({open:e,onOpen:n,onClose:o,selectVariant:i,sx:a,...r}){return t.jsxs(t.Fragment,{children:[t.jsx(y,{sx:{borderRadius:2,flex:"1 1 auto",overflow:"hidden",alignItems:"center",justifyContent:"center",bgcolor:"background.neutral",...a},...r,children:t.jsx(N,{size:"large",variant:"contained",onClick:n,children:"Click me!"})}),t.jsx(Ze,{children:e&&t.jsxs(Me,{fullWidth:!0,maxWidth:"xs",open:e,onClose:o,PaperComponent:s=>t.jsx(g.div,{...$(i,320),children:t.jsx(Oe,{...s,children:s.children})}),children:[t.jsx(Ee,{id:"alert-dialog-title",children:"Use Google's location service?"}),t.jsx(Se,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),t.jsxs(Pe,{children:[t.jsx(N,{onClick:o,children:"Disagree"}),t.jsx(N,{variant:"contained",onClick:o,autoFocus:!0,children:"Agree"})]})]})})]})}function lt(){const e=q(),[n,o]=c.useState("slideInUp"),i=c.useCallback(a=>{o(a.target.value)},[]);return t.jsxs(E,{sx:{height:640,display:"flex"},children:[t.jsx(y,{spacing:2.5,sx:{p:2.5,display:"flex",flex:"1 1 auto"},children:t.jsx(rt,{open:e.value,onOpen:e.onTrue,onClose:e.onFalse,selectVariant:n})}),t.jsx(F,{variantKey:ct,selectVariant:n,onChangeVariant:i})]})}const ct=[{type:"slide",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"fade",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"zoom",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"bounce",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"flip",values:["flipInX","flipInY"]},{type:"scale",values:["scaleInX","scaleInY"]},{type:"rotate",values:["rotateIn"]}];function ut({isText:e,isMulti:n,onChangeText:o,onChangeMulti:i,onRefresh:a,...r}){return t.jsxs(y,{direction:"row",alignItems:"center",...r,children:[t.jsx(J,{control:t.jsx(oe,{checked:e,onChange:o}),label:"Text object"}),t.jsx(v,{sx:{flexGrow:1}}),!e&&t.jsx(J,{control:t.jsx(oe,{checked:n,onChange:i}),label:"Multiitem"}),t.jsx(L,{onClick:a,children:t.jsx(R,{icon:"eva:refresh-fill"})})]})}const dt="Minimals",re=[U.image.cover(2),U.image.cover(3),U.image.cover(4),U.image.cover(5)];function ft({isText:e,isMulti:n,selectVariant:o,sx:i,...a}){const r=n?re:re.slice(0,1),s=t.jsx(Fe,{component:"h1",variant:"h1",text:dt,variants:$(o,400),sx:{overflow:"hidden"}}),x=t.jsx(ke,{sx:{gap:3,width:1,display:"flex",alignItems:"center",flexDirection:"column"},children:r.map((l,p)=>t.jsx(v,{component:g.img,src:l,variants:$(o,800),sx:{width:480,borderRadius:1,objectFit:"cover",height:n?80:320,boxShadow:u=>u.customShadows.z8}},p))});return t.jsx(y,{sx:{borderRadius:2,flex:"1 1 auto",overflow:"hidden",alignItems:"center",justifyContent:"center",bgcolor:"background.neutral",...i},...a,children:e?s:x})}function ht(){const e=q(),n=q(),[o,i]=c.useState(0),[a,r]=c.useState("slideInUp"),s=c.useCallback(()=>{i(o+1)},[o]),x=c.useCallback(l=>{i(o+1),r(l.target.value)},[o]);return t.jsxs(E,{sx:{height:640,display:"flex"},children:[t.jsxs(y,{spacing:2.5,sx:{p:2.5,display:"flex",flex:"1 1 auto"},children:[t.jsx(ut,{isText:e.value,isMulti:n.value,onChangeText:e.onToggle,onChangeMulti:n.onToggle,onRefresh:s}),t.jsx(ft,{isText:e.value,isMulti:n.value,selectVariant:a},o)]}),t.jsx(F,{variantKey:xt,selectVariant:a,onChangeVariant:x})]})}const xt=[{type:"slide in",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"slide out",values:["slideOutUp","slideOutDown","slideOutLeft","slideOutRight"]},{type:"fade in",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"fade out",values:["fadeOut","fadeOutUp","fadeOutDown","fadeOutLeft","fadeOutRight"]},{type:"zoom in",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"zoom out",values:["zoomOut","zoomOutUp","zoomOutDown","zoomOutLeft","zoomOutRight"]},{type:"bounce in",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"bounce out",values:["bounceOut","bounceOutUp","bounceOutDown","bounceOutLeft","bounceOutRight"]},{type:"flip in",values:["flipInX","flipInY"]},{type:"flip out",values:["flipOutX","flipOutY"]},{type:"scale in",values:["scaleInX","scaleInY"]},{type:"scale out",values:["scaleOutX","scaleOutY"]},{type:"rotate in",values:["rotateIn"]},{type:"rotate out",values:["rotateOut"]}];function gt({onRefresh:e,...n}){return t.jsx(y,{direction:"row",alignItems:"center",justifyContent:"flex-end",...n,children:t.jsx(L,{onClick:e,children:t.jsx(R,{icon:"eva:refresh-fill"})})})}function mt({selectVariant:e,sx:n,...o}){const i=e.includes("kenburns");return t.jsx(y,{sx:{flex:"1 1 auto",overflow:"hidden",borderRadius:2,...n},...o,children:i?t.jsx(v,{component:g.img,src:U.image.cover(7),...$(e),sx:{width:1,height:1,objectFit:"cover"}}):t.jsx(v,{component:g.div,...$(e),sx:{height:1,width:1}})})}function pt(){const[e,n]=c.useState(0),[o,i]=c.useState("kenburnsTop"),a=r=>{n(e+1),i(r.target.value)};return t.jsxs(E,{sx:{height:640,display:"flex"},children:[t.jsxs(y,{spacing:2.5,sx:{p:2.5,display:"flex",flex:"1 1 auto"},children:[t.jsx(gt,{onRefresh:()=>n(e+1)}),t.jsx(mt,{selectVariant:o},e)]}),t.jsx(F,{variantKey:bt,selectVariant:o,onChangeVariant:a})]})}const bt=[{type:"kenburns",values:["kenburnsTop","kenburnsBottom","kenburnsLeft","kenburnsRight"]},{type:"pan",values:["panTop","panBottom","panLeft","panRight"]},{type:"color change",values:["color2x","color3x","color4x","color5x"]}],le=[{value:"inview",label:"In View",component:t.jsx(ht,{})},{value:"scroll",label:"Scroll",component:t.jsx(at,{})},{value:"dialog",label:"Dialog",component:t.jsx(lt,{})},{value:"background",label:"Background",component:t.jsx(pt,{})},{value:"other",label:"Other",component:t.jsx(nt,{})}];function vt(){const e=$e("inview");return t.jsxs(t.Fragment,{children:[t.jsx(Ve,{children:t.jsx(Ae,{heading:"Animate",links:[{name:"Components",href:Le.components},{name:"Animate"}],moreLink:["https://www.framer.com/api/motion"]})}),t.jsxs(Be,{children:[t.jsx(Te,{value:e.value,onChange:e.onChange,children:le.map(n=>t.jsx(De,{value:n.value,label:n.label},n.value))}),le.map(n=>n.value===e.value&&t.jsx(v,{children:n.component},n.value))]})]})}const yt={title:`Animate | Components - ${Ue.site.name}`};function Pt(){return t.jsxs(t.Fragment,{children:[t.jsx(ze,{children:t.jsxs("title",{children:[" ",yt.title]})}),t.jsx(vt,{})]})}export{Pt as default};
