import{r as u,at as Tt,as as Xt,aq as Et,j as n,aK as Vt,eR as Bt,eS as Ft,eT as Pt,eU as Kt,eV as Gt,eW as ot,eX as Ht,eY as Nt,eZ as _t,e_ as Wt,e$ as Zt,f0 as Jt,f1 as Qt,ar as kt,cM as Lt,f2 as qt,f3 as te,f4 as ee,f5 as ne,f6 as Dt,f7 as ie,f8 as At,B as T,f9 as q,m as v,T as rt,b as zt,ep as F,I as L,l as E,fa as oe,dO as ae,fb as se,_ as K,v as yt,S as k,cN as re,cU as le,cY as J,e as tt,bR as ce,i as at,aV as pt,M as ue,p as de,H as fe,C as he}from"./index-CsblB989.js";import{u as ge}from"./use-tabs-Bp1fKFPs.js";import{C as me}from"./custom-breadcrumbs-DQYYRO8w.js";import{F as et}from"./Fab-BrG5QfFu.js";import{u as xe,A as ye}from"./animate-text-Dd9mUjrM.js";import{u as pe}from"./use-motion-value-CBP913Kn.js";import{u as be}from"./use-transform-Dd47LWc7.js";import{a as P,C as ve}from"./component-block-B9RvfrIK.js";import{v as z}from"./fade-o6mfZnVH.js";import{v as h,a as p}from"./transition-BJzcwH5q.js";import{v as U}from"./bounce-BSK3KHpz.js";import{R as Ie,a as je}from"./RadioGroup-CP1oF_P6.js";import{F as st}from"./FormControlLabel-SPUXYPf-.js";import{a as Re,b as we,D as Ce}from"./DialogContent-D71n8k4T.js";import{D as Oe}from"./DialogTitle-Dw9T0OTq.js";import{C as Te}from"./component-hero-BcDGT9Ep.js";import{T as ke,a as Le}from"./Tabs-Dkt6334O.js";import"./FormGroup-DPnbPOcj.js";import"./formControlState-Dq1zat_P.js";import"./KeyboardArrowRight-C60ssb8G.js";function Ut(){const t=u.useRef(!1);return Tt(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function De(){const t=Ut(),[e,i]=u.useState(0),o=u.useCallback(()=>{t.current&&i(e+1)},[e]);return[u.useCallback(()=>Xt.postRender(o),[o]),e]}class Ae extends u.Component{getSnapshotBeforeUpdate(e){const i=this.props.childRef.current;if(i&&e.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=i.offsetHeight||0,o.width=i.offsetWidth||0,o.top=i.offsetTop,o.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ze({children:t,isPresent:e}){const i=u.useId(),o=u.useRef(null),a=u.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=u.useContext(Et);return u.useInsertionEffect(()=>{const{width:r,height:f,top:l,left:b}=a.current;if(e||!o.current||!r||!f)return;o.current.dataset.motionPopId=i;const c=document.createElement("style");return s&&(c.nonce=s),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${r}px !important;
            height: ${f}px !important;
            top: ${l}px !important;
            left: ${b}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),n.jsx(Ae,{isPresent:e,childRef:o,sizeRef:a,children:u.cloneElement(t,{ref:o})})}const nt=({children:t,initial:e,isPresent:i,onExitComplete:o,custom:a,presenceAffectsLayout:s,mode:r})=>{const f=Vt(Ue),l=u.useId(),b=u.useMemo(()=>({id:l,initial:e,isPresent:i,custom:a,onExitComplete:c=>{f.set(c,!0);for(const d of f.values())if(!d)return;o&&o()},register:c=>(f.set(c,!1),()=>f.delete(c))}),s?[Math.random()]:[i]);return u.useMemo(()=>{f.forEach((c,d)=>f.set(d,!1))},[i]),u.useEffect(()=>{!i&&!f.size&&o&&o()},[i]),r==="popLayout"&&(t=n.jsx(ze,{isPresent:i,children:t})),n.jsx(Bt.Provider,{value:b,children:t})};function Ue(){return new Map}function Ye(t){return u.useEffect(()=>()=>t(),[])}const B=t=>t.key||"";function Me(t,e){t.forEach(i=>{const o=B(i);e.set(o,i)})}function Se(t){const e=[];return u.Children.forEach(t,i=>{u.isValidElement(i)&&e.push(i)}),e}const $e=({children:t,custom:e,initial:i=!0,onExitComplete:o,exitBeforeEnter:a,presenceAffectsLayout:s=!0,mode:r="sync"})=>{const f=u.useContext(Ft).forceRender||De()[0],l=Ut(),b=Se(t);let c=b;const d=u.useRef(new Map).current,m=u.useRef(c),g=u.useRef(new Map).current,R=u.useRef(!0);if(Tt(()=>{R.current=!1,Me(b,g),m.current=c}),Ye(()=>{R.current=!0,g.clear(),d.clear()}),R.current)return n.jsx(n.Fragment,{children:c.map(x=>n.jsx(nt,{isPresent:!0,initial:i?void 0:!1,presenceAffectsLayout:s,mode:r,children:x},B(x)))});c=[...c];const w=m.current.map(B),I=b.map(B),C=w.length;for(let x=0;x<C;x++){const y=w[x];I.indexOf(y)===-1&&!d.has(y)&&d.set(y,void 0)}return r==="wait"&&d.size&&(c=[]),d.forEach((x,y)=>{if(I.indexOf(y)!==-1)return;const O=g.get(y);if(!O)return;const D=w.indexOf(y);let A=x;if(!A){const V=()=>{d.delete(y);const j=Array.from(g.keys()).filter(M=>!I.includes(M));if(j.forEach(M=>g.delete(M)),m.current=b.filter(M=>{const S=B(M);return S===y||j.includes(S)}),!d.size){if(l.current===!1)return;f(),o&&o()}};A=n.jsx(nt,{isPresent:!1,onExitComplete:V,custom:e,presenceAffectsLayout:s,mode:r,children:O},B(O)),d.set(y,A)}c.splice(D,0,A)}),c=c.map(x=>{const y=x.key;return d.has(y)?x:n.jsx(nt,{isPresent:!0,presenceAffectsLayout:s,mode:r,children:x},B(x))}),n.jsx(n.Fragment,{children:d.size?c:c.map(x=>u.cloneElement(x))})};function Xe(t){return typeof t=="object"&&!Array.isArray(t)}function Ee(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},i=Pt(t)?new Kt(e,{enableHardwareAcceleration:!1}):new Gt(e,{enableHardwareAcceleration:!0});i.mount(t),ot.set(t,i)}function Ve(t,e=100){const i=Ht({keyframes:[0,e],...t}),o=Math.min(Nt(i),_t);return{type:"keyframes",ease:a=>i.next(o*a).value/e,duration:Wt(o)}}function bt(t,e,i,o){var a;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?i:(a=o.get(e))!==null&&a!==void 0?a:t}const Be=(t,e,i)=>{const o=e-t;return((i-t)%o+o)%o+t};function Fe(t,e){return Zt(t)?t[Be(0,t.length,e)]:t}function Pe(t,e,i){for(let o=0;o<t.length;o++){const a=t[o];a.at>e&&a.at<i&&(Qt(t,a),o--)}}function Ke(t,e,i,o,a,s){Pe(t,a,s);for(let r=0;r<e.length;r++)t.push({value:e[r],at:Jt(a,s,o[r]),easing:Fe(i,r)})}function Ge(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const He="easeInOut";function Ne(t,{defaultTransition:e={},...i}={},o){const a=e.duration||.3,s=new Map,r=new Map,f={},l=new Map;let b=0,c=0,d=0;for(let m=0;m<t.length;m++){const g=t[m];if(typeof g=="string"){l.set(g,c);continue}else if(!Array.isArray(g)){l.set(g.name,bt(c,g.at,b,l));continue}let[R,w,I={}]=g;I.at!==void 0&&(c=bt(c,I.at,b,l));let C=0;const x=(y,O,D,A=0,V=0)=>{const j=_e(y),{delay:M=0,times:S=qt(j),type:Mt="keyframes",...St}=O;let{ease:lt=e.ease||"easeOut",duration:$}=O;const ct=typeof M=="function"?M(A,V):M,ut=j.length;if(ut<=2&&Mt==="spring"){let gt=100;if(ut===2&&Je(j)){const $t=j[1]-j[0];gt=Math.abs($t)}const mt={...St};$!==void 0&&(mt.duration=ne($));const xt=Ve(mt,gt);lt=xt.ease,$=xt.duration}$??($=a);const dt=c+ct,ft=dt+$;S.length===1&&S[0]===0&&(S[1]=1);const ht=S.length-j.length;ht>0&&te(S,ht),j.length===1&&j.unshift(null),Ke(D,j,lt,S,dt,ft),C=Math.max(ct+$,C),d=Math.max(ft,d)};if(kt(R)){const y=vt(R,r);x(w,I,It("default",y))}else{const y=Lt(R,o,f),O=y.length;for(let D=0;D<O;D++){w=w,I=I;const A=y[D],V=vt(A,r);for(const j in w)x(w[j],We(I,j),It(j,V),D,O)}}b=c,c+=C}return r.forEach((m,g)=>{for(const R in m){const w=m[R];w.sort(Ge);const I=[],C=[],x=[];for(let O=0;O<w.length;O++){const{at:D,value:A,easing:V}=w[O];I.push(A),C.push(ee(0,d,D)),x.push(V||"easeOut")}C[0]!==0&&(C.unshift(0),I.unshift(I[0]),x.unshift(He)),C[C.length-1]!==1&&(C.push(1),I.push(null)),s.has(g)||s.set(g,{keyframes:{},transition:{}});const y=s.get(g);y.keyframes[R]=I,y.transition[R]={...e,duration:d,ease:x,times:C,...i}}}),s}function vt(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function It(t,e){return e[t]||(e[t]=[]),e[t]}function _e(t){return Array.isArray(t)?t:[t]}function We(t,e){return t[e]?{...t,...t[e]}:{...t}}const Ze=t=>typeof t=="number",Je=t=>t.every(Ze);function Yt(t,e,i,o){const a=Lt(t),s=a.length,r=[];for(let f=0;f<s;f++){const l=a[f];ot.has(l)||Ee(l);const b=ot.get(l),c={...i};typeof c.delay=="function"&&(c.delay=c.delay(f,s)),r.push(...ie(b,{...e,transition:c},{}))}return new At(r)}const Qe=t=>Array.isArray(t)&&Array.isArray(t[0]);function qe(t,e,i){const o=[];return Ne(t,e,i).forEach(({keyframes:s,transition:r},f)=>{let l;kt(f)?l=Dt(f,s.default,r.default):l=Yt(f,s,r),o.push(l)}),new At(o)}const tn=t=>{function e(i,o,a){let s;return Qe(i)?s=qe(i,o,t):Xe(o)?s=Yt(i,o,a):s=Dt(i,o,a),s}return e},en=tn(),nn={duration:2,ease:[.43,.13,.23,.96]},it={animate:{fillOpacity:[0,0,1],pathLength:[1,.4,0],transition:nn}},Y=t=>{const e=(t==null?void 0:t.distance)||720,i=t==null?void 0:t.durationIn,o=t==null?void 0:t.durationOut,a=t==null?void 0:t.easeIn,s=t==null?void 0:t.easeOut;return{in:{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1,transition:h({durationIn:i,easeIn:a})},exit:{scale:0,opacity:0,transition:p({durationOut:o,easeOut:s})}},inUp:{initial:{scale:0,opacity:0,translateY:e},animate:{scale:1,opacity:1,translateY:0,transition:h({durationIn:i,easeIn:a})},exit:{scale:0,opacity:0,translateY:e,transition:p({durationOut:o,easeOut:s})}},inDown:{initial:{scale:0,opacity:0,translateY:-e},animate:{scale:1,opacity:1,translateY:0,transition:h({durationIn:i,easeIn:a})},exit:{scale:0,opacity:0,translateY:-e,transition:p({durationOut:o,easeOut:s})}},inLeft:{initial:{scale:0,opacity:0,translateX:-e},animate:{scale:1,opacity:1,translateX:0,transition:h({durationIn:i,easeIn:a})},exit:{scale:0,opacity:0,translateX:-e,transition:p({durationOut:o,easeOut:s})}},inRight:{initial:{scale:0,opacity:0,translateX:e},animate:{scale:1,opacity:1,translateX:0,transition:h({durationIn:i,easeIn:a})},exit:{scale:0,opacity:0,translateX:e,transition:p({durationOut:o,easeOut:s})}},out:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,transition:h({durationIn:i,easeIn:a})}},outUp:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,translateY:-e,transition:h({durationIn:i,easeIn:a})}},outDown:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,translateY:e,transition:h({durationIn:i,easeIn:a})}},outLeft:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,translateX:-e,transition:h({durationIn:i,easeIn:a})}},outRight:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,translateX:e,transition:h({durationIn:i,easeIn:a})}}}},H=t=>{const e=t==null?void 0:t.durationIn,i=t==null?void 0:t.durationOut,o=t==null?void 0:t.easeIn,a=t==null?void 0:t.easeOut;return{inX:{initial:{rotateX:-180,opacity:0},animate:{rotateX:0,opacity:1,transition:h({durationIn:e,easeIn:o})},exit:{rotateX:-180,opacity:0,transition:p({durationOut:i,easeOut:a})}},inY:{initial:{rotateY:-180,opacity:0},animate:{rotateY:0,opacity:1,transition:h({durationIn:e,easeIn:o})},exit:{rotateY:-180,opacity:0,transition:p({durationOut:i,easeOut:a})}},outX:{initial:{rotateX:0,opacity:1},animate:{rotateX:70,opacity:0,transition:p({durationOut:i,easeOut:a})}},outY:{initial:{rotateY:0,opacity:1},animate:{rotateY:70,opacity:0,transition:p({durationOut:i,easeOut:a})}}}},X=t=>{const e=(t==null?void 0:t.distance)||160,i=t==null?void 0:t.durationIn,o=t==null?void 0:t.durationOut,a=t==null?void 0:t.easeIn,s=t==null?void 0:t.easeOut;return{inUp:{initial:{y:e},animate:{y:0,transition:h({durationIn:i,easeIn:a})},exit:{y:e,transition:p({durationOut:o,easeOut:s})}},inDown:{initial:{y:-e},animate:{y:0,transition:h({durationIn:i,easeIn:a})},exit:{y:-e,transition:p({durationOut:o,easeOut:s})}},inLeft:{initial:{x:-e},animate:{x:0,transition:h({durationIn:i,easeIn:a})},exit:{x:-e,transition:p({durationOut:o,easeOut:s})}},inRight:{initial:{x:e},animate:{x:0,transition:h({durationIn:i,easeIn:a})},exit:{x:e,transition:p({durationOut:o,easeOut:s})}},outUp:{initial:{y:0},animate:{y:-e,transition:h({durationIn:i,easeIn:a})},exit:{y:0,transition:p({durationOut:o,easeOut:s})}},outDown:{initial:{y:0},animate:{y:e,transition:h({durationIn:i,easeIn:a})},exit:{y:0,transition:p({durationOut:o,easeOut:s})}},outLeft:{initial:{x:0},animate:{x:-e,transition:h({durationIn:i,easeIn:a})},exit:{x:0,transition:p({durationOut:o,easeOut:s})}},outRight:{initial:{x:0},animate:{x:e,transition:h({durationIn:i,easeIn:a})},exit:{x:0,transition:p({durationOut:o,easeOut:s})}}}},N=t=>{const e=t==null?void 0:t.durationIn,i=t==null?void 0:t.durationOut,o=t==null?void 0:t.easeIn,a=t==null?void 0:t.easeOut;return{in:{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1,transition:h({durationIn:e,easeIn:o})},exit:{scale:0,opacity:0,transition:p({durationOut:i,easeOut:a})}},inX:{initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1,transition:h({durationIn:e,easeIn:o})},exit:{scaleX:0,opacity:0,transition:p({durationOut:i,easeOut:a})}},inY:{initial:{scaleY:0,opacity:0},animate:{scaleY:1,opacity:1,transition:h({durationIn:e,easeIn:o})},exit:{scaleY:0,opacity:0,transition:p({durationOut:i,easeOut:a})}},out:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,transition:h({durationIn:e,easeIn:o})}},outX:{initial:{scaleX:1,opacity:1},animate:{scaleX:0,opacity:0,transition:h({durationIn:e,easeIn:o})}},outY:{initial:{scaleY:1,opacity:1},animate:{scaleY:0,opacity:0,transition:h({durationIn:e,easeIn:o})}}}},jt=t=>{const e=t==null?void 0:t.durationIn,i=t==null?void 0:t.durationOut,o=t==null?void 0:t.easeIn,a=t==null?void 0:t.easeOut;return{in:{initial:{opacity:0,rotate:-360},animate:{opacity:1,rotate:0,transition:h({durationIn:e,easeIn:o})},exit:{opacity:0,rotate:-360,transition:p({durationOut:i,easeOut:a})}},out:{initial:{opacity:1,rotate:0},animate:{opacity:0,rotate:-360,transition:p({durationOut:i,easeOut:a})}}}},_=t=>{const e=(t==null?void 0:t.colors)||["#19dcea","#b22cff"],i=(t==null?void 0:t.duration)||5,o=(t==null?void 0:t.ease)||"linear";return{animate:{background:e,transition:{duration:i,ease:o}}}},W=t=>{const e=(t==null?void 0:t.duration)||5,i=(t==null?void 0:t.ease)||"easeOut";return{top:{animate:{scale:[1,1.25],y:[0,-15],transformOrigin:["50% 16%","50% top"],transition:{duration:e,ease:i}}},bottom:{animate:{scale:[1,1.25],y:[0,15],transformOrigin:["50% 84%","50% bottom"],transition:{duration:e,ease:i}}},left:{animate:{scale:[1,1.25],x:[0,20],y:[0,15],transformOrigin:["16% 50%","0% left"],transition:{duration:e,ease:i}}},right:{animate:{scale:[1,1.25],x:[0,-20],y:[0,-15],transformOrigin:["84% 50%","0% right"],transition:{duration:e,ease:i}}}}},Z=t=>{const e=(t==null?void 0:t.colors)||["#ee7752","#e73c7e","#23a6d5","#23d5ab"],i=(t==null?void 0:t.duration)||5,o=(t==null?void 0:t.ease)||"linear",a=s=>`linear-gradient(${s}deg, ${e})`;return{top:{animate:{backgroundImage:[a(0),a(0)],backgroundPosition:["center 99%","center 1%"],backgroundSize:["100% 600%","100% 600%"],transition:{duration:i,ease:o}}},right:{animate:{backgroundPosition:["1% center","99% center"],backgroundImage:[a(270),a(270)],backgroundSize:["600% 100%","600% 100%"],transition:{duration:i,ease:o}}},bottom:{animate:{backgroundImage:[a(0),a(0)],backgroundPosition:["center 1%","center 99%"],backgroundSize:["100% 600%","100% 600%"],transition:{duration:i,ease:o}}},left:{animate:{backgroundPosition:["99% center","1% center"],backgroundImage:[a(270),a(270)],backgroundSize:["600% 100%","600% 100%"],transition:{duration:i,ease:o}}}}};function Rt({animate:t,sx:e}){const i=u.useRef(null),o=u.useRef(null),[a,s]=u.useState(1),[r,f]=u.useState(null),l={disable:t==null?void 0:t.disable,delay:(t==null?void 0:t.delay)??0,loop:(t==null?void 0:t.loop)??!0,angle:(t==null?void 0:t.angle)??315,length:(t==null?void 0:t.length)??40,width:(t==null?void 0:t.width)??"2px",color:(t==null?void 0:t.color)??"#000",ease:(t==null?void 0:t.ease)??"linear",duration:(t==null?void 0:t.duration)??8,distance:(t==null?void 0:t.distance)??20,repeatType:(t==null?void 0:t.repeatType)??"loop",disableDoubleline:t==null?void 0:t.disableDoubleline,outline:(t==null?void 0:t.outline)??"135deg, rgba(0,0,0,0.08), rgba(0,0,0,0.08)"};u.useEffect(()=>{if(!l.disable){if(i.current){const{width:d,height:m}=i.current.getBoundingClientRect();s(d/m)}if(!l.disableDoubleline&&o.current){const d=getComputedStyle(o.current);f({paddingLeft:d.paddingLeft,paddingRight:d.paddingRight,paddingBottom:d.paddingBottom,paddingTop:d.paddingTop,borderTopLeftRadius:d.borderTopLeftRadius,borderTopRightRadius:d.borderTopRightRadius,borderBottomLeftRadius:d.borderBottomLeftRadius,borderBottomRightRadius:d.borderBottomRightRadius})}}},[l.disable,l.disableDoubleline]);const b=d=>{const m=[-55,35,125,215,305],g=`transparent ${l.angle-(2+l.length)}deg, ${d}  ${l.angle}deg, transparent ${l.angle+l.length}deg`;return[`conic-gradient(from ${m[0]}deg at ${l.distance/a}% ${l.distance}% , ${g})`,`conic-gradient(from ${m[1]}deg at ${100-l.distance/a}% ${l.distance}% , ${g})`,`conic-gradient(from ${m[2]}deg at ${100-l.distance/a}% ${100-l.distance}% , ${g})`,`conic-gradient(from ${m[3]}deg at ${l.distance/a}% ${100-l.distance}% , ${g})`,`conic-gradient(from ${m[4]}deg at ${l.distance/a}% ${l.distance}% , ${g})`]},c={ease:l.ease,delay:l.delay,duration:l.duration,repeatType:l.repeatType,repeat:l.loop?1/0:1,times:a>1?[0,.25+.25/a,.5,.75+.25/a,1]:[0,a*.25,.5,.5+a*.25,1]};return n.jsxs(T,{ref:i,sx:{minWidth:40,minHeight:40,position:"relative",borderRadius:"inherit","&::before":{...q({color:l.outline,padding:l.width})},...e},children:[n.jsx(T,{ref:o,component:v.span,transition:c,animate:l.disable?void 0:{background:b(typeof l.color=="string"?l.color:l.color[0])},sx:{...q({padding:l.width})}}),!l.disable&&!l.disableDoubleline&&n.jsx(T,{component:v.span,transition:c,animate:{background:b(typeof l.color=="string"?l.color:l.color[1])},sx:{...q(),transform:"scale(-1)",...r&&{paddingTop:r==null?void 0:r.paddingBottom,paddingBottom:r==null?void 0:r.paddingTop,paddingLeft:r==null?void 0:r.paddingRight,paddingRight:r==null?void 0:r.paddingLeft,borderTopLeftRadius:r==null?void 0:r.borderBottomRightRadius,borderTopRightRadius:r==null?void 0:r.borderBottomLeftRadius,borderBottomLeftRadius:r==null?void 0:r.borderTopRightRadius,borderBottomRightRadius:r==null?void 0:r.borderTopLeftRadius}}})]})}function wt({to:t,sx:e,from:i=0,unit:o="",toFixed:a=0,duration:s=2,once:r=!0,amount:f=.5,component:l="p",...b}){const c=u.useRef(null),d=xe(c,{once:r,amount:f}),m=pe(i),g=be(m,R=>R.toFixed(a));return u.useEffect(()=>{d&&en(m,t,{duration:s})},[m,s,d,t]),n.jsxs(rt,{component:l,sx:{display:"inline-flex",p:0,m:0,...e},...b,children:[n.jsx(v.span,{ref:c,children:g}),o]})}function on(){const t=zt(),e=t.vars.palette.primary.light,i=t.vars.palette.primary.main,o=t.vars.palette.primary.dark;return n.jsxs(T,{component:v.svg,viewBox:"0 0 512 512",sx:{width:240,height:240,strokeWidth:4,stroke:i},children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{x1:"100%",y1:"9.946%",x2:"50%",y2:"50%",id:"a",children:[n.jsx("stop",{stopColor:o,offset:"0%"}),n.jsx("stop",{stopColor:i,offset:"100%"})]}),n.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"b",children:[n.jsx("stop",{stopColor:e,offset:"0%"}),n.jsx("stop",{stopColor:i,offset:"100%"})]}),n.jsxs("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"c",children:[n.jsx("stop",{stopColor:e,offset:"0%"}),n.jsx("stop",{stopColor:i,offset:"100%"})]})]}),n.jsxs("g",{fill:"none",fillRule:"nonzero",children:[n.jsx(v.path,{...it,d:"M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z",fill:"url(#a)"}),n.jsx(v.path,{...it,d:"M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994",fill:"url(#b)"}),n.jsx(v.path,{...it,d:"M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48",fill:"url(#c)"})]})]})}function an(){return n.jsxs(n.Fragment,{children:[n.jsx(et,{component:v.button,whileTap:"tap",whileHover:"hover",variants:F(1.1,.95),color:"primary",size:"small",children:n.jsx(L,{icon:"mingcute:add-line",width:24})}),n.jsx(et,{component:v.button,whileTap:"tap",whileHover:"hover",variants:F(),color:"primary",size:"medium",children:n.jsx(L,{icon:"mingcute:add-line",width:24})}),n.jsx(et,{component:v.button,whileTap:"tap",whileHover:"hover",variants:F(1.08,.99),color:"primary",children:n.jsx(L,{icon:"mingcute:add-line",width:24})}),n.jsx(E,{component:v.button,whileTap:"tap",whileHover:"hover",variants:F(1.1,.95),color:"primary",size:"small",children:n.jsx(L,{icon:"mingcute:add-line",width:24})}),n.jsx(E,{component:v.button,whileTap:"tap",whileHover:"hover",variants:F(),color:"primary",children:n.jsx(L,{icon:"mingcute:add-line",width:24})}),n.jsx(E,{component:v.button,whileTap:"tap",whileHover:"hover",variants:F(1.08,.99),color:"primary",size:"large",children:n.jsx(L,{icon:"mingcute:add-line",width:24})})]})}function sn(){return n.jsxs(n.Fragment,{children:[n.jsx(wt,{component:"h6",variant:"h1",to:500,unit:"+"}),n.jsx(wt,{component:"h6",variant:"h1",from:200,to:500.14,toFixed:2,unit:"k"})]})}function rn(){const t=zt(),[e,i]=u.useState(0);return n.jsxs(T,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[n.jsx(P,{title:"Button Click",sx:{gap:3},children:n.jsx(an,{})}),n.jsxs(P,{title:"Path",children:[n.jsx(E,{onClick:()=>i(e+1),sx:{position:"absolute",right:16,top:16},children:n.jsx(L,{icon:"eva:refresh-fill"})}),n.jsx(on,{},e)]}),n.jsxs(P,{title:"Path",sx:{flexDirection:"column"},children:[n.jsx(E,{onClick:()=>i(e+1),sx:{position:"absolute",right:16,top:16},children:n.jsx(L,{icon:"eva:refresh-fill"})}),n.jsx(sn,{},e)]}),n.jsxs(P,{title:"Logo",sx:{gap:5},children:[n.jsx(oe,{}),n.jsx(ae,{})]}),n.jsx(P,{title:"Avatar",sx:{gap:5},children:n.jsx(se,{width:120,slotProps:{avatar:{alt:"My avatar",src:K.image.avatar(24)},overlay:{border:2,spacing:2}}})}),n.jsxs(P,{title:"Border",sx:{gap:5},children:[n.jsx(Rt,{animate:{disableDoubleline:!0},sx:{width:160,height:160}}),n.jsx(Rt,{animate:{width:"4px",color:t.vars.palette.primary.dark,outline:`135deg, ${yt(t.vars.palette.warning.mainChannel,.24)}, ${yt(t.vars.palette.primary.mainChannel,.24)}`},sx:{width:160,height:160}})]})]})}function ln({onRefresh:t,...e}){return n.jsx(k,{direction:"row",alignItems:"center",justifyContent:"flex-end",...e,children:n.jsx(E,{onClick:t,children:n.jsx(L,{icon:"eva:refresh-fill"})})})}function G(t="slideInUp",e=160){return{slideInUp:X({distance:e}).inUp,slideInDown:X({distance:e}).inDown,slideInLeft:X({distance:e}).inLeft,slideInRight:X({distance:e}).inRight,slideOutUp:X({distance:e}).outUp,slideOutDown:X({distance:e}).outDown,slideOutLeft:X({distance:e}).outLeft,slideOutRight:X({distance:e}).outRight,fadeIn:z().in,fadeInUp:z({distance:e}).inUp,fadeInDown:z({distance:e}).inDown,fadeInLeft:z({distance:e}).inLeft,fadeInRight:z({distance:e}).inRight,fadeOut:z({distance:e}).out,fadeOutUp:z({distance:e}).outUp,fadeOutDown:z({distance:e}).outDown,fadeOutLeft:z({distance:e}).outLeft,fadeOutRight:z({distance:e}).outRight,zoomIn:Y({distance:80}).in,zoomInUp:Y({distance:80}).inUp,zoomInDown:Y({distance:80}).inDown,zoomInLeft:Y({distance:240}).inLeft,zoomInRight:Y({distance:240}).inRight,zoomOut:Y().out,zoomOutLeft:Y().outLeft,zoomOutRight:Y().outRight,zoomOutUp:Y().outUp,zoomOutDown:Y().outDown,bounceIn:U().in,bounceInUp:U().inUp,bounceInDown:U().inDown,bounceInLeft:U().inLeft,bounceInRight:U().inRight,bounceOut:U().out,bounceOutUp:U().outUp,bounceOutDown:U().outDown,bounceOutLeft:U().outLeft,bounceOutRight:U().outRight,flipInX:H().inX,flipInY:H().inY,flipOutX:H().outX,flipOutY:H().outY,scaleInX:N().inX,scaleInY:N().inY,scaleOutX:N().outX,scaleOutY:N().outY,rotateIn:jt().in,rotateOut:jt().out,kenburnsTop:W().top,kenburnsBottom:W().bottom,kenburnsLeft:W().left,kenburnsRight:W().right,panTop:Z().top,panBottom:Z().bottom,panLeft:Z().left,panRight:Z().right,color2x:_(),color3x:_({colors:["#19dcea","#b22cff","#ea2222"]}),color4x:_({colors:["#19dcea","#b22cff","#ea2222","#f5be10"]}),color5x:_({colors:["#19dcea","#b22cff","#ea2222","#f5be10","#3bd80d"]})}[t]}function cn({selectVariant:t,sx:e,...i}){const o=u.useRef(null);return n.jsx(k,{ref:o,component:v.div,variants:re(),sx:{py:5,gap:3,borderRadius:2,flex:"1 1 auto",overflowX:"auto",bgcolor:"background.neutral",...e},...i,children:n.jsx(n.Fragment,{children:[...Array(40)].map((a,s)=>n.jsx(T,{component:le,variants:G(t),viewport:{root:o,once:!0,amount:.1},sx:{py:4,width:1,mx:"auto",maxWidth:480,flexShrink:0,borderRadius:1,textAlign:"center",bgcolor:"background.paper",boxShadow:r=>r.customShadows.z8},children:n.jsxs(rt,{variant:"body2",children:["Item ",s+1]})},s))})})}function Q({variantKey:t,selectVariant:e,onChangeVariant:i,sx:o,...a}){return n.jsx(k,{sx:{p:2.5,width:320,overflowX:"auto",borderLeft:s=>`solid 1px ${s.vars.palette.divider}`,...o},...a,children:n.jsx(Ie,{value:e,onChange:i,children:t.map(s=>n.jsxs(T,{sx:{my:1.5},children:[n.jsx(rt,{variant:"overline",sx:{px:1,mb:1,display:"block"},children:s.type}),s.values.map(r=>n.jsx(st,{value:r,label:r,control:n.jsx(je,{sx:{display:"none"}}),sx:{px:1,py:.5,mx:0,my:.25,width:"100%",borderRadius:.75,color:"text.secondary",...e===r&&{color:"warning.contrastText"},...e===r&&{bgcolor:"warning.main"}}},r))]},s.type))})})}function un(){const[t,e]=u.useState(0),[i,o]=u.useState("slideInUp"),a=u.useCallback(s=>{e(t+1),o(s.target.value)},[t]);return n.jsxs(J,{sx:{height:640,display:"flex"},children:[n.jsxs(k,{spacing:2.5,sx:{p:2.5,display:"flex",flex:"1 1 auto"},children:[n.jsx(ln,{onRefresh:()=>e(t+1)}),n.jsx(cn,{selectVariant:i},t)]}),n.jsx(Q,{variantKey:dn,selectVariant:i,onChangeVariant:a})]})}const dn=[{type:"slide",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"fade",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"zoom",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"bounce",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"flip",values:["flipInX","flipInY"]},{type:"scale",values:["scaleInX","scaleInY"]},{type:"rotate",values:["rotateIn"]}];function fn({open:t,onOpen:e,onClose:i,selectVariant:o,sx:a,...s}){return n.jsxs(n.Fragment,{children:[n.jsx(k,{sx:{borderRadius:2,flex:"1 1 auto",overflow:"hidden",alignItems:"center",justifyContent:"center",bgcolor:"background.neutral",...a},...s,children:n.jsx(tt,{size:"large",variant:"contained",onClick:e,children:"Click me!"})}),n.jsx($e,{children:t&&n.jsxs(Re,{fullWidth:!0,maxWidth:"xs",open:t,onClose:i,PaperComponent:r=>n.jsx(v.div,{...G(o,320),children:n.jsx(ce,{...r,children:r.children})}),children:[n.jsx(Oe,{id:"alert-dialog-title",children:"Use Google's location service?"}),n.jsx(we,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),n.jsxs(Ce,{children:[n.jsx(tt,{onClick:i,children:"Disagree"}),n.jsx(tt,{variant:"contained",onClick:i,autoFocus:!0,children:"Agree"})]})]})})]})}function hn(){const t=at(),[e,i]=u.useState("slideInUp"),o=u.useCallback(a=>{i(a.target.value)},[]);return n.jsxs(J,{sx:{height:640,display:"flex"},children:[n.jsx(k,{spacing:2.5,sx:{p:2.5,display:"flex",flex:"1 1 auto"},children:n.jsx(fn,{open:t.value,onOpen:t.onTrue,onClose:t.onFalse,selectVariant:e})}),n.jsx(Q,{variantKey:gn,selectVariant:e,onChangeVariant:o})]})}const gn=[{type:"slide",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"fade",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"zoom",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"bounce",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"flip",values:["flipInX","flipInY"]},{type:"scale",values:["scaleInX","scaleInY"]},{type:"rotate",values:["rotateIn"]}];function mn({isText:t,isMulti:e,onChangeText:i,onChangeMulti:o,onRefresh:a,...s}){return n.jsxs(k,{direction:"row",alignItems:"center",...s,children:[n.jsx(st,{control:n.jsx(pt,{checked:t,onChange:i}),label:"Text object"}),n.jsx(T,{sx:{flexGrow:1}}),!t&&n.jsx(st,{control:n.jsx(pt,{checked:e,onChange:o}),label:"Multiitem"}),n.jsx(E,{onClick:a,children:n.jsx(L,{icon:"eva:refresh-fill"})})]})}const xn="Minimals",Ct=[K.image.cover(2),K.image.cover(3),K.image.cover(4),K.image.cover(5)];function yn({isText:t,isMulti:e,selectVariant:i,sx:o,...a}){const s=e?Ct:Ct.slice(0,1),r=n.jsx(ye,{component:"h1",variant:"h1",text:xn,variants:G(i,400),sx:{overflow:"hidden"}}),f=n.jsx(ue,{sx:{gap:3,width:1,display:"flex",alignItems:"center",flexDirection:"column"},children:s.map((l,b)=>n.jsx(T,{component:v.img,src:l,variants:G(i,800),sx:{width:480,borderRadius:1,objectFit:"cover",height:e?80:320,boxShadow:c=>c.customShadows.z8}},b))});return n.jsx(k,{sx:{borderRadius:2,flex:"1 1 auto",overflow:"hidden",alignItems:"center",justifyContent:"center",bgcolor:"background.neutral",...o},...a,children:t?r:f})}function pn(){const t=at(),e=at(),[i,o]=u.useState(0),[a,s]=u.useState("slideInUp"),r=u.useCallback(()=>{o(i+1)},[i]),f=u.useCallback(l=>{o(i+1),s(l.target.value)},[i]);return n.jsxs(J,{sx:{height:640,display:"flex"},children:[n.jsxs(k,{spacing:2.5,sx:{p:2.5,display:"flex",flex:"1 1 auto"},children:[n.jsx(mn,{isText:t.value,isMulti:e.value,onChangeText:t.onToggle,onChangeMulti:e.onToggle,onRefresh:r}),n.jsx(yn,{isText:t.value,isMulti:e.value,selectVariant:a},i)]}),n.jsx(Q,{variantKey:bn,selectVariant:a,onChangeVariant:f})]})}const bn=[{type:"slide in",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"slide out",values:["slideOutUp","slideOutDown","slideOutLeft","slideOutRight"]},{type:"fade in",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"fade out",values:["fadeOut","fadeOutUp","fadeOutDown","fadeOutLeft","fadeOutRight"]},{type:"zoom in",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"zoom out",values:["zoomOut","zoomOutUp","zoomOutDown","zoomOutLeft","zoomOutRight"]},{type:"bounce in",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"bounce out",values:["bounceOut","bounceOutUp","bounceOutDown","bounceOutLeft","bounceOutRight"]},{type:"flip in",values:["flipInX","flipInY"]},{type:"flip out",values:["flipOutX","flipOutY"]},{type:"scale in",values:["scaleInX","scaleInY"]},{type:"scale out",values:["scaleOutX","scaleOutY"]},{type:"rotate in",values:["rotateIn"]},{type:"rotate out",values:["rotateOut"]}];function vn({onRefresh:t,...e}){return n.jsx(k,{direction:"row",alignItems:"center",justifyContent:"flex-end",...e,children:n.jsx(E,{onClick:t,children:n.jsx(L,{icon:"eva:refresh-fill"})})})}function In({selectVariant:t,sx:e,...i}){const o=t.includes("kenburns");return n.jsx(k,{sx:{flex:"1 1 auto",overflow:"hidden",borderRadius:2,...e},...i,children:o?n.jsx(T,{component:v.img,src:K.image.cover(7),...G(t),sx:{width:1,height:1,objectFit:"cover"}}):n.jsx(T,{component:v.div,...G(t),sx:{height:1,width:1}})})}function jn(){const[t,e]=u.useState(0),[i,o]=u.useState("kenburnsTop"),a=s=>{e(t+1),o(s.target.value)};return n.jsxs(J,{sx:{height:640,display:"flex"},children:[n.jsxs(k,{spacing:2.5,sx:{p:2.5,display:"flex",flex:"1 1 auto"},children:[n.jsx(vn,{onRefresh:()=>e(t+1)}),n.jsx(In,{selectVariant:i},t)]}),n.jsx(Q,{variantKey:Rn,selectVariant:i,onChangeVariant:a})]})}const Rn=[{type:"kenburns",values:["kenburnsTop","kenburnsBottom","kenburnsLeft","kenburnsRight"]},{type:"pan",values:["panTop","panBottom","panLeft","panRight"]},{type:"color change",values:["color2x","color3x","color4x","color5x"]}],Ot=[{value:"inview",label:"In View",component:n.jsx(pn,{})},{value:"scroll",label:"Scroll",component:n.jsx(un,{})},{value:"dialog",label:"Dialog",component:n.jsx(hn,{})},{value:"background",label:"Background",component:n.jsx(jn,{})},{value:"other",label:"Other",component:n.jsx(rn,{})}];function wn(){const t=ge("inview");return n.jsxs(n.Fragment,{children:[n.jsx(Te,{children:n.jsx(me,{heading:"Animate",links:[{name:"Components",href:de.components},{name:"Animate"}],moreLink:["https://www.framer.com/api/motion"]})}),n.jsxs(ve,{children:[n.jsx(ke,{value:t.value,onChange:t.onChange,children:Ot.map(e=>n.jsx(Le,{value:e.value,label:e.label},e.value))}),Ot.map(e=>e.value===t.value&&n.jsx(T,{children:e.component},e.value))]})]})}const Cn={title:`Animate | Components - ${he.site.name}`};function Hn(){return n.jsxs(n.Fragment,{children:[n.jsx(fe,{children:n.jsxs("title",{children:[" ",Cn.title]})}),n.jsx(wn,{})]})}export{Hn as default};
