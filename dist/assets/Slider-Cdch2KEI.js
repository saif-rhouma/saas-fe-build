import{r as S,aC as St,aH as pe,aE as wt,aF as rt,aI as Lt,aJ as Ge,aK as Ce,aL as Je,y as c,aM as Te,F as oe,j as P,aN as T,o as J,x as Y,aO as ot,aP as nt,aQ as st,aB as dt,aD as Pt,E as $t,aR as B,aS as Ct,G as Tt,aT as _t}from"./index-88qAwG8P.js";import{v as Rt}from"./visuallyHidden-Dan1xhjv.js";function At(e,t,r=(s,d)=>s===d){return e.length===t.length&&e.every((s,d)=>r(s,t[d]))}const It=2;function pt(e,t){return e-t}function lt(e,t){var r;const{index:s}=(r=e.reduce((d,w,$)=>{const b=Math.abs(t-w);return d===null||b<d.distance||b===d.distance?{distance:b,index:$}:d},null))!=null?r:{};return s}function we(e,t){if(t.current!==void 0&&e.changedTouches){const r=e;for(let s=0;s<r.changedTouches.length;s+=1){const d=r.changedTouches[s];if(d.identifier===t.current)return{x:d.clientX,y:d.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function _e(e,t,r){return(e-t)*100/(r-t)}function Mt(e,t,r){return(r-t)*e+t}function zt(e){if(Math.abs(e)<1){const r=e.toExponential().split("e-"),s=r[0].split(".")[1];return(s?s.length:0)+parseInt(r[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Nt(e,t,r){const s=Math.round((e-r)/t)*t+r;return Number(s.toFixed(zt(t)))}function it({values:e,newValue:t,index:r}){const s=e.slice();return s[r]=t,s.sort(pt)}function Le({sliderRef:e,activeIndex:t,setActive:r}){var s,d;const w=Ce(e.current);if(!((s=e.current)!=null&&s.contains(w.activeElement))||Number(w==null||(d=w.activeElement)==null?void 0:d.getAttribute("data-index"))!==t){var $;($=e.current)==null||$.querySelector(`[type="range"][data-index="${t}"]`).focus()}r&&r(t)}function Pe(e,t){return typeof e=="number"&&typeof t=="number"?e===t:typeof e=="object"&&typeof t=="object"?At(e,t):!1}const Et={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},Vt=e=>e;let $e;function ut(){return $e===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?$e=CSS.supports("touch-action","none"):$e=!0),$e}function Ft(e){const{"aria-labelledby":t,defaultValue:r,disabled:s=!1,disableSwap:d=!1,isRtl:w=!1,marks:$=!1,max:b=100,min:f=0,name:K,onChange:ne,onChangeCommitted:U,orientation:Q="horizontal",rootRef:fe,scale:se=Vt,step:z=1,shiftStep:le=10,tabIndex:me,value:be}=e,V=S.useRef(),[X,j]=S.useState(-1),[ve,O]=S.useState(-1),[ie,ue]=S.useState(!1),q=S.useRef(0),[_,Z]=St({controlled:be,default:r??f,name:"Slider"}),N=ne&&((a,o,n)=>{const i=a.nativeEvent||a,u=new i.constructor(i.type,i);Object.defineProperty(u,"target",{writable:!0,value:{value:o,name:K}}),ne(u,o,n)}),W=Array.isArray(_);let y=W?_.slice().sort(pt):[_];y=y.map(a=>a==null?f:pe(a,f,b));const ce=$===!0&&z!==null?[...Array(Math.floor((b-f)/z)+1)].map((a,o)=>({value:f+z*o})):$||[],g=ce.map(a=>a.value),{isFocusVisibleRef:R,onBlur:Re,onFocus:Ae,ref:Ie}=wt(),[he,G]=S.useState(-1),L=S.useRef(),ge=rt(Ie,L),ye=rt(fe,ge),ee=a=>o=>{var n;const i=Number(o.currentTarget.getAttribute("data-index"));Ae(o),R.current===!0&&G(i),O(i),a==null||(n=a.onFocus)==null||n.call(a,o)},te=a=>o=>{var n;Re(o),R.current===!1&&G(-1),O(-1),a==null||(n=a.onBlur)==null||n.call(a,o)},xe=(a,o)=>{const n=Number(a.currentTarget.getAttribute("data-index")),i=y[n],u=g.indexOf(i);let l=o;if(ce&&z==null){const M=g[g.length-1];l>M?l=M:l<g[0]?l=g[0]:l=l<i?g[u-1]:g[u+1]}if(l=pe(l,f,b),W){d&&(l=pe(l,y[n-1]||-1/0,y[n+1]||1/0));const M=l;l=it({values:y,newValue:l,index:n});let E=n;d||(E=l.indexOf(M)),Le({sliderRef:L,activeIndex:E})}Z(l),G(n),N&&!Pe(l,_)&&N(a,l,n),U&&U(a,l)},Me=a=>o=>{var n;if(z!==null){const i=Number(o.currentTarget.getAttribute("data-index")),u=y[i];let l=null;(o.key==="ArrowLeft"||o.key==="ArrowDown")&&o.shiftKey||o.key==="PageDown"?l=Math.max(u-le,f):((o.key==="ArrowRight"||o.key==="ArrowUp")&&o.shiftKey||o.key==="PageUp")&&(l=Math.min(u+le,b)),l!==null&&(xe(o,l),o.preventDefault())}a==null||(n=a.onKeyDown)==null||n.call(a,o)};Lt(()=>{if(s&&L.current.contains(document.activeElement)){var a;(a=document.activeElement)==null||a.blur()}},[s]),s&&X!==-1&&j(-1),s&&he!==-1&&G(-1);const ze=a=>o=>{var n;(n=a.onChange)==null||n.call(a,o),xe(o,o.target.valueAsNumber)},ke=S.useRef();let F=Q;w&&Q==="horizontal"&&(F+="-reverse");const v=({finger:a,move:o=!1})=>{const{current:n}=L,{width:i,height:u,bottom:l,left:M}=n.getBoundingClientRect();let E;F.indexOf("vertical")===0?E=(l-a.y)/u:E=(a.x-M)/i,F.indexOf("-reverse")!==-1&&(E=1-E);let p;if(p=Mt(E,f,b),z)p=Nt(p,z,f);else{const re=lt(g,p);p=g[re]}p=pe(p,f,b);let C=0;if(W){o?C=ke.current:C=lt(y,p),d&&(p=pe(p,y[C-1]||-1/0,y[C+1]||1/0));const re=p;p=it({values:y,newValue:p,index:C}),d&&o||(C=p.indexOf(re),ke.current=C)}return{newValue:p,activeIndex:C}},m=Ge(a=>{const o=we(a,V);if(!o)return;if(q.current+=1,a.type==="mousemove"&&a.buttons===0){A(a);return}const{newValue:n,activeIndex:i}=v({finger:o,move:!0});Le({sliderRef:L,activeIndex:i,setActive:j}),Z(n),!ie&&q.current>It&&ue(!0),N&&!Pe(n,_)&&N(a,n,i)}),A=Ge(a=>{const o=we(a,V);if(ue(!1),!o)return;const{newValue:n}=v({finger:o,move:!0});j(-1),a.type==="touchend"&&O(-1),U&&U(a,n),V.current=void 0,I()}),D=Ge(a=>{if(s)return;ut()||a.preventDefault();const o=a.changedTouches[0];o!=null&&(V.current=o.identifier);const n=we(a,V);if(n!==!1){const{newValue:u,activeIndex:l}=v({finger:n});Le({sliderRef:L,activeIndex:l,setActive:j}),Z(u),N&&!Pe(u,_)&&N(a,u,l)}q.current=0;const i=Ce(L.current);i.addEventListener("touchmove",m,{passive:!0}),i.addEventListener("touchend",A,{passive:!0})}),I=S.useCallback(()=>{const a=Ce(L.current);a.removeEventListener("mousemove",m),a.removeEventListener("mouseup",A),a.removeEventListener("touchmove",m),a.removeEventListener("touchend",A)},[A,m]);S.useEffect(()=>{const{current:a}=L;return a.addEventListener("touchstart",D,{passive:ut()}),()=>{a.removeEventListener("touchstart",D),I()}},[I,D]),S.useEffect(()=>{s&&I()},[s,I]);const Ne=a=>o=>{var n;if((n=a.onMouseDown)==null||n.call(a,o),s||o.defaultPrevented||o.button!==0)return;o.preventDefault();const i=we(o,V);if(i!==!1){const{newValue:l,activeIndex:M}=v({finger:i});Le({sliderRef:L,activeIndex:M,setActive:j}),Z(l),N&&!Pe(l,_)&&N(o,l,M)}q.current=0;const u=Ce(L.current);u.addEventListener("mousemove",m,{passive:!0}),u.addEventListener("mouseup",A)},k=_e(W?y[0]:f,f,b),ae=_e(y[y.length-1],f,b)-k,Ee=(a={})=>{const o=Je(a),n={onMouseDown:Ne(o||{})},i=c({},o,n);return c({},a,{ref:ye},i)},Ve=a=>o=>{var n;(n=a.onMouseOver)==null||n.call(a,o);const i=Number(o.currentTarget.getAttribute("data-index"));O(i)},Fe=a=>o=>{var n;(n=a.onMouseLeave)==null||n.call(a,o),O(-1)};return{active:X,axis:F,axisProps:Et,dragging:ie,focusedThumbIndex:he,getHiddenInputProps:(a={})=>{var o;const n=Je(a),i={onChange:ze(n||{}),onFocus:ee(n||{}),onBlur:te(n||{}),onKeyDown:Me(n||{})},u=c({},n,i);return c({tabIndex:me,"aria-labelledby":t,"aria-orientation":Q,"aria-valuemax":se(b),"aria-valuemin":se(f),name:K,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(o=e.step)!=null?o:void 0,disabled:s},a,u,{style:c({},Rt,{direction:w?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:Ee,getThumbProps:(a={})=>{const o=Je(a),n={onMouseOver:Ve(o||{}),onMouseLeave:Fe(o||{})};return c({},a,o,n)},marks:ce,open:ve,range:W,rootRef:ye,trackLeap:ae,trackOffset:k,values:y,getThumbStyle:a=>({pointerEvents:X!==-1&&X!==a?"none":void 0})}}const Ht=e=>!e||!Te(e),jt=e=>{const{open:t}=e;return{offset:oe(t&&T.valueLabelOpen),circle:T.valueLabelCircle,label:T.valueLabelLabel}};function Ot(e){const{children:t,className:r,value:s}=e,d=jt(e);return t?S.cloneElement(t,{className:oe(t.props.className)},P.jsxs(S.Fragment,{children:[t.props.children,P.jsx("span",{className:oe(d.offset,r),"aria-hidden":!0,children:P.jsx("span",{className:d.circle,children:P.jsx("span",{className:d.label,children:s})})})]})):null}const Dt=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"],Bt=Ct();function ct(e){return e}const Yt=J("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`color${Y(r.color)}`],r.size!=="medium"&&t[`size${Y(r.size)}`],r.marked&&t.marked,r.orientation==="vertical"&&t.vertical,r.track==="inverted"&&t.trackInverted,r.track===!1&&t.trackFalse]}})(({theme:e})=>{var t;return{borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},[`&.${T.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${T.dragging}`]:{[`& .${T.thumb}, & .${T.track}`]:{transition:"none"}},variants:[...Object.keys(((t=e.vars)!=null?t:e).palette).filter(r=>{var s;return((s=e.vars)!=null?s:e).palette[r].main}).map(r=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}})),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}}),Kt=J("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),Ut=J("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>{var t;return{display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.keys(((t=e.vars)!=null?t:e).palette).filter(r=>{var s;return((s=e.vars)!=null?s:e).palette[r].main}).map(r=>({props:{color:r,track:"inverted"},style:c({},e.vars?{backgroundColor:e.vars.palette.Slider[`${r}Track`],borderColor:e.vars.palette.Slider[`${r}Track`]}:c({backgroundColor:ot(e.palette[r].main,.62),borderColor:ot(e.palette[r].main,.62)},e.applyStyles("dark",{backgroundColor:nt(e.palette[r].main,.5)}),e.applyStyles("dark",{borderColor:nt(e.palette[r].main,.5)})))}))]}}),Xt=J("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.thumb,t[`thumbColor${Y(r.color)}`],r.size!=="medium"&&t[`thumbSize${Y(r.size)}`]]}})(({theme:e})=>{var t;return{position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&.${T.disabled}`]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.keys(((t=e.vars)!=null?t:e).palette).filter(r=>{var s;return((s=e.vars)!=null?s:e).palette[r].main}).map(r=>({props:{color:r},style:{[`&:hover, &.${T.focusVisible}`]:c({},e.vars?{boxShadow:`0px 0px 0px 8px rgba(${e.vars.palette[r].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 8px ${st(e.palette[r].main,.16)}`},{"@media (hover: none)":{boxShadow:"none"}}),[`&.${T.active}`]:c({},e.vars?{boxShadow:`0px 0px 0px 14px rgba(${e.vars.palette[r].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 14px ${st(e.palette[r].main,.16)}`})}}))]}}),qt=J(Ot,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(({theme:e})=>c({zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},[`&.${T.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},[`&.${T.valueLabelOpen}`]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]})),Wt=J("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>dt(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:r}=e;return[t.mark,r&&t.markActive]}})(({theme:e})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8}}]})),Gt=J("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>dt(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(({theme:e})=>c({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(e.vars||e).palette.text.primary}}]})),Jt=e=>{const{disabled:t,dragging:r,marked:s,orientation:d,track:w,classes:$,color:b,size:f}=e,K={root:["root",t&&"disabled",r&&"dragging",s&&"marked",d==="vertical"&&"vertical",w==="inverted"&&"trackInverted",w===!1&&"trackFalse",b&&`color${Y(b)}`,f&&`size${Y(f)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",f&&`thumbSize${Y(f)}`,b&&`thumbColor${Y(b)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Tt(K,_t,$)},Qt=({children:e})=>e,ta=S.forwardRef(function(t,r){var s,d,w,$,b,f,K,ne,U,Q,fe,se,z,le,me,be,V,X,j,ve,O,ie,ue,q;const _=Bt({props:t,name:"MuiSlider"}),Z=Pt(),{"aria-label":N,"aria-valuetext":W,"aria-labelledby":y,component:ce="span",components:g={},componentsProps:R={},color:Re="primary",classes:Ae,className:Ie,disableSwap:he=!1,disabled:G=!1,getAriaLabel:L,getAriaValueText:ge,marks:ye=!1,max:ee=100,min:te=0,orientation:xe="horizontal",shiftStep:Me=10,size:ze="medium",step:ke=1,scale:F=ct,slotProps:v,slots:m,track:A="normal",valueLabelDisplay:D="off",valueLabelFormat:I=ct}=_,Ne=$t(_,Dt),k=c({},_,{isRtl:Z,max:ee,min:te,classes:Ae,disabled:G,disableSwap:he,orientation:xe,marks:ye,color:Re,size:ze,step:ke,shiftStep:Me,scale:F,track:A,valueLabelDisplay:D,valueLabelFormat:I}),{axisProps:ae,getRootProps:Ee,getHiddenInputProps:Ve,getThumbProps:Fe,open:Qe,active:He,axis:de,focusedThumbIndex:a,range:o,dragging:n,marks:i,values:u,trackOffset:l,trackLeap:M,getThumbStyle:E}=Ft(c({},k,{rootRef:r}));k.marked=i.length>0&&i.some(h=>h.label),k.dragging=n,k.focusedThumbIndex=a;const p=Jt(k),C=(s=(d=m==null?void 0:m.root)!=null?d:g.Root)!=null?s:Yt,re=(w=($=m==null?void 0:m.rail)!=null?$:g.Rail)!=null?w:Kt,Ze=(b=(f=m==null?void 0:m.track)!=null?f:g.Track)!=null?b:Ut,et=(K=(ne=m==null?void 0:m.thumb)!=null?ne:g.Thumb)!=null?K:Xt,tt=(U=(Q=m==null?void 0:m.valueLabel)!=null?Q:g.ValueLabel)!=null?U:qt,je=(fe=(se=m==null?void 0:m.mark)!=null?se:g.Mark)!=null?fe:Wt,Oe=(z=(le=m==null?void 0:m.markLabel)!=null?le:g.MarkLabel)!=null?z:Gt,at=(me=(be=m==null?void 0:m.input)!=null?be:g.Input)!=null?me:"input",De=(V=v==null?void 0:v.root)!=null?V:R.root,ft=(X=v==null?void 0:v.rail)!=null?X:R.rail,Be=(j=v==null?void 0:v.track)!=null?j:R.track,Ye=(ve=v==null?void 0:v.thumb)!=null?ve:R.thumb,Ke=(O=v==null?void 0:v.valueLabel)!=null?O:R.valueLabel,mt=(ie=v==null?void 0:v.mark)!=null?ie:R.mark,bt=(ue=v==null?void 0:v.markLabel)!=null?ue:R.markLabel,vt=(q=v==null?void 0:v.input)!=null?q:R.input,ht=B({elementType:C,getSlotProps:Ee,externalSlotProps:De,externalForwardedProps:Ne,additionalProps:c({},Ht(C)&&{as:ce}),ownerState:c({},k,De==null?void 0:De.ownerState),className:[p.root,Ie]}),gt=B({elementType:re,externalSlotProps:ft,ownerState:k,className:p.rail}),yt=B({elementType:Ze,externalSlotProps:Be,additionalProps:{style:c({},ae[de].offset(l),ae[de].leap(M))},ownerState:c({},k,Be==null?void 0:Be.ownerState),className:p.track}),Ue=B({elementType:et,getSlotProps:Fe,externalSlotProps:Ye,ownerState:c({},k,Ye==null?void 0:Ye.ownerState),className:p.thumb}),xt=B({elementType:tt,externalSlotProps:Ke,ownerState:c({},k,Ke==null?void 0:Ke.ownerState),className:p.valueLabel}),Xe=B({elementType:je,externalSlotProps:mt,ownerState:k,className:p.mark}),qe=B({elementType:Oe,externalSlotProps:bt,ownerState:k,className:p.markLabel}),kt=B({elementType:at,getSlotProps:Ve,externalSlotProps:vt,ownerState:k});return P.jsxs(C,c({},ht,{children:[P.jsx(re,c({},gt)),P.jsx(Ze,c({},yt)),i.filter(h=>h.value>=te&&h.value<=ee).map((h,x)=>{const We=_e(h.value,te,ee),Se=ae[de].offset(We);let H;return A===!1?H=u.indexOf(h.value)!==-1:H=A==="normal"&&(o?h.value>=u[0]&&h.value<=u[u.length-1]:h.value<=u[0])||A==="inverted"&&(o?h.value<=u[0]||h.value>=u[u.length-1]:h.value>=u[0]),P.jsxs(S.Fragment,{children:[P.jsx(je,c({"data-index":x},Xe,!Te(je)&&{markActive:H},{style:c({},Se,Xe.style),className:oe(Xe.className,H&&p.markActive)})),h.label!=null?P.jsx(Oe,c({"aria-hidden":!0,"data-index":x},qe,!Te(Oe)&&{markLabelActive:H},{style:c({},Se,qe.style),className:oe(p.markLabel,qe.className,H&&p.markLabelActive),children:h.label})):null]},x)}),u.map((h,x)=>{const We=_e(h,te,ee),Se=ae[de].offset(We),H=D==="off"?Qt:tt;return P.jsx(H,c({},!Te(H)&&{valueLabelFormat:I,valueLabelDisplay:D,value:typeof I=="function"?I(F(h),x):I,index:x,open:Qe===x||He===x||D==="on",disabled:G},xt,{children:P.jsx(et,c({"data-index":x},Ue,{className:oe(p.thumb,Ue.className,He===x&&p.active,a===x&&p.focusVisible),style:c({},Se,E(x),Ue.style),children:P.jsx(at,c({"data-index":x,"aria-label":L?L(x):N,"aria-valuenow":F(h),"aria-labelledby":y,"aria-valuetext":ge?ge(F(h),x):W,value:u[x]},kt))}))}),x)})]}))});export{ta as S};
