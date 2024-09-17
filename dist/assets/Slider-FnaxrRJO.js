import{r as S,bz as St,bE as pe,bB as wt,bC as at,c5 as Lt,c6 as Ge,c7 as Ce,c8 as Je,aY as c,c9 as Te,b0 as oe,j as P,ca as T,aU as J,aX as B,cb as ot,cc as nt,cd as st,bx as dt,bA as Pt,a$ as $t,ce as Y,cf as Ct,b1 as Tt,cg as _t}from"./index-BjIn7_qX.js";import{v as Rt}from"./visuallyHidden-Dan1xhjv.js";function At(e,t,a=(s,d)=>s===d){return e.length===t.length&&e.every((s,d)=>a(s,t[d]))}const It=2;function pt(e,t){return e-t}function lt(e,t){var a;const{index:s}=(a=e.reduce((d,w,$)=>{const m=Math.abs(t-w);return d===null||m<d.distance||m===d.distance?{distance:m,index:$}:d},null))!=null?a:{};return s}function we(e,t){if(t.current!==void 0&&e.changedTouches){const a=e;for(let s=0;s<a.changedTouches.length;s+=1){const d=a.changedTouches[s];if(d.identifier===t.current)return{x:d.clientX,y:d.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function _e(e,t,a){return(e-t)*100/(a-t)}function zt(e,t,a){return(a-t)*e+t}function Mt(e){if(Math.abs(e)<1){const a=e.toExponential().split("e-"),s=a[0].split(".")[1];return(s?s.length:0)+parseInt(a[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Nt(e,t,a){const s=Math.round((e-a)/t)*t+a;return Number(s.toFixed(Mt(t)))}function it({values:e,newValue:t,index:a}){const s=e.slice();return s[a]=t,s.sort(pt)}function Le({sliderRef:e,activeIndex:t,setActive:a}){var s,d;const w=Ce(e.current);if(!((s=e.current)!=null&&s.contains(w.activeElement))||Number(w==null||(d=w.activeElement)==null?void 0:d.getAttribute("data-index"))!==t){var $;($=e.current)==null||$.querySelector(`[type="range"][data-index="${t}"]`).focus()}a&&a(t)}function Pe(e,t){return typeof e=="number"&&typeof t=="number"?e===t:typeof e=="object"&&typeof t=="object"?At(e,t):!1}const Et={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},Vt=e=>e;let $e;function ut(){return $e===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?$e=CSS.supports("touch-action","none"):$e=!0),$e}function jt(e){const{"aria-labelledby":t,defaultValue:a,disabled:s=!1,disableSwap:d=!1,isRtl:w=!1,marks:$=!1,max:m=100,min:f=0,name:U,onChange:ne,onChangeCommitted:K,orientation:Q="horizontal",rootRef:fe,scale:se=Vt,step:M=1,shiftStep:le=10,tabIndex:be,value:me}=e,V=S.useRef(),[X,H]=S.useState(-1),[ve,O]=S.useState(-1),[ie,ue]=S.useState(!1),q=S.useRef(0),[_,Z]=St({controlled:me,default:a??f,name:"Slider"}),N=ne&&((r,o,n)=>{const i=r.nativeEvent||r,u=new i.constructor(i.type,i);Object.defineProperty(u,"target",{writable:!0,value:{value:o,name:U}}),ne(u,o,n)}),W=Array.isArray(_);let y=W?_.slice().sort(pt):[_];y=y.map(r=>r==null?f:pe(r,f,m));const ce=$===!0&&M!==null?[...Array(Math.floor((m-f)/M)+1)].map((r,o)=>({value:f+M*o})):$||[],g=ce.map(r=>r.value),{isFocusVisibleRef:R,onBlur:Re,onFocus:Ae,ref:Ie}=wt(),[he,G]=S.useState(-1),L=S.useRef(),ge=at(Ie,L),ye=at(fe,ge),ee=r=>o=>{var n;const i=Number(o.currentTarget.getAttribute("data-index"));Ae(o),R.current===!0&&G(i),O(i),r==null||(n=r.onFocus)==null||n.call(r,o)},te=r=>o=>{var n;Re(o),R.current===!1&&G(-1),O(-1),r==null||(n=r.onBlur)==null||n.call(r,o)},xe=(r,o)=>{const n=Number(r.currentTarget.getAttribute("data-index")),i=y[n],u=g.indexOf(i);let l=o;if(ce&&M==null){const z=g[g.length-1];l>z?l=z:l<g[0]?l=g[0]:l=l<i?g[u-1]:g[u+1]}if(l=pe(l,f,m),W){d&&(l=pe(l,y[n-1]||-1/0,y[n+1]||1/0));const z=l;l=it({values:y,newValue:l,index:n});let E=n;d||(E=l.indexOf(z)),Le({sliderRef:L,activeIndex:E})}Z(l),G(n),N&&!Pe(l,_)&&N(r,l,n),K&&K(r,l)},ze=r=>o=>{var n;if(M!==null){const i=Number(o.currentTarget.getAttribute("data-index")),u=y[i];let l=null;(o.key==="ArrowLeft"||o.key==="ArrowDown")&&o.shiftKey||o.key==="PageDown"?l=Math.max(u-le,f):((o.key==="ArrowRight"||o.key==="ArrowUp")&&o.shiftKey||o.key==="PageUp")&&(l=Math.min(u+le,m)),l!==null&&(xe(o,l),o.preventDefault())}r==null||(n=r.onKeyDown)==null||n.call(r,o)};Lt(()=>{if(s&&L.current.contains(document.activeElement)){var r;(r=document.activeElement)==null||r.blur()}},[s]),s&&X!==-1&&H(-1),s&&he!==-1&&G(-1);const Me=r=>o=>{var n;(n=r.onChange)==null||n.call(r,o),xe(o,o.target.valueAsNumber)},ke=S.useRef();let j=Q;w&&Q==="horizontal"&&(j+="-reverse");const v=({finger:r,move:o=!1})=>{const{current:n}=L,{width:i,height:u,bottom:l,left:z}=n.getBoundingClientRect();let E;j.indexOf("vertical")===0?E=(l-r.y)/u:E=(r.x-z)/i,j.indexOf("-reverse")!==-1&&(E=1-E);let p;if(p=zt(E,f,m),M)p=Nt(p,M,f);else{const ae=lt(g,p);p=g[ae]}p=pe(p,f,m);let C=0;if(W){o?C=ke.current:C=lt(y,p),d&&(p=pe(p,y[C-1]||-1/0,y[C+1]||1/0));const ae=p;p=it({values:y,newValue:p,index:C}),d&&o||(C=p.indexOf(ae),ke.current=C)}return{newValue:p,activeIndex:C}},b=Ge(r=>{const o=we(r,V);if(!o)return;if(q.current+=1,r.type==="mousemove"&&r.buttons===0){A(r);return}const{newValue:n,activeIndex:i}=v({finger:o,move:!0});Le({sliderRef:L,activeIndex:i,setActive:H}),Z(n),!ie&&q.current>It&&ue(!0),N&&!Pe(n,_)&&N(r,n,i)}),A=Ge(r=>{const o=we(r,V);if(ue(!1),!o)return;const{newValue:n}=v({finger:o,move:!0});H(-1),r.type==="touchend"&&O(-1),K&&K(r,n),V.current=void 0,I()}),D=Ge(r=>{if(s)return;ut()||r.preventDefault();const o=r.changedTouches[0];o!=null&&(V.current=o.identifier);const n=we(r,V);if(n!==!1){const{newValue:u,activeIndex:l}=v({finger:n});Le({sliderRef:L,activeIndex:l,setActive:H}),Z(u),N&&!Pe(u,_)&&N(r,u,l)}q.current=0;const i=Ce(L.current);i.addEventListener("touchmove",b,{passive:!0}),i.addEventListener("touchend",A,{passive:!0})}),I=S.useCallback(()=>{const r=Ce(L.current);r.removeEventListener("mousemove",b),r.removeEventListener("mouseup",A),r.removeEventListener("touchmove",b),r.removeEventListener("touchend",A)},[A,b]);S.useEffect(()=>{const{current:r}=L;return r.addEventListener("touchstart",D,{passive:ut()}),()=>{r.removeEventListener("touchstart",D),I()}},[I,D]),S.useEffect(()=>{s&&I()},[s,I]);const Ne=r=>o=>{var n;if((n=r.onMouseDown)==null||n.call(r,o),s||o.defaultPrevented||o.button!==0)return;o.preventDefault();const i=we(o,V);if(i!==!1){const{newValue:l,activeIndex:z}=v({finger:i});Le({sliderRef:L,activeIndex:z,setActive:H}),Z(l),N&&!Pe(l,_)&&N(o,l,z)}q.current=0;const u=Ce(L.current);u.addEventListener("mousemove",b,{passive:!0}),u.addEventListener("mouseup",A)},k=_e(W?y[0]:f,f,m),re=_e(y[y.length-1],f,m)-k,Ee=(r={})=>{const o=Je(r),n={onMouseDown:Ne(o||{})},i=c({},o,n);return c({},r,{ref:ye},i)},Ve=r=>o=>{var n;(n=r.onMouseOver)==null||n.call(r,o);const i=Number(o.currentTarget.getAttribute("data-index"));O(i)},je=r=>o=>{var n;(n=r.onMouseLeave)==null||n.call(r,o),O(-1)};return{active:X,axis:j,axisProps:Et,dragging:ie,focusedThumbIndex:he,getHiddenInputProps:(r={})=>{var o;const n=Je(r),i={onChange:Me(n||{}),onFocus:ee(n||{}),onBlur:te(n||{}),onKeyDown:ze(n||{})},u=c({},n,i);return c({tabIndex:be,"aria-labelledby":t,"aria-orientation":Q,"aria-valuemax":se(m),"aria-valuemin":se(f),name:U,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(o=e.step)!=null?o:void 0,disabled:s},r,u,{style:c({},Rt,{direction:w?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:Ee,getThumbProps:(r={})=>{const o=Je(r),n={onMouseOver:Ve(o||{}),onMouseLeave:je(o||{})};return c({},r,o,n)},marks:ce,open:ve,range:W,rootRef:ye,trackLeap:re,trackOffset:k,values:y,getThumbStyle:r=>({pointerEvents:X!==-1&&X!==r?"none":void 0})}}const Ft=e=>!e||!Te(e),Ht=e=>{const{open:t}=e;return{offset:oe(t&&T.valueLabelOpen),circle:T.valueLabelCircle,label:T.valueLabelLabel}};function Ot(e){const{children:t,className:a,value:s}=e,d=Ht(e);return t?S.cloneElement(t,{className:oe(t.props.className)},P.jsxs(S.Fragment,{children:[t.props.children,P.jsx("span",{className:oe(d.offset,a),"aria-hidden":!0,children:P.jsx("span",{className:d.circle,children:P.jsx("span",{className:d.label,children:s})})})]})):null}const Dt=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"],Yt=Ct();function ct(e){return e}const Bt=J("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`color${B(a.color)}`],a.size!=="medium"&&t[`size${B(a.size)}`],a.marked&&t.marked,a.orientation==="vertical"&&t.vertical,a.track==="inverted"&&t.trackInverted,a.track===!1&&t.trackFalse]}})(({theme:e})=>{var t;return{borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},[`&.${T.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${T.dragging}`]:{[`& .${T.thumb}, & .${T.track}`]:{transition:"none"}},variants:[...Object.keys(((t=e.vars)!=null?t:e).palette).filter(a=>{var s;return((s=e.vars)!=null?s:e).palette[a].main}).map(a=>({props:{color:a},style:{color:(e.vars||e).palette[a].main}})),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}}),Ut=J("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),Kt=J("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>{var t;return{display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.keys(((t=e.vars)!=null?t:e).palette).filter(a=>{var s;return((s=e.vars)!=null?s:e).palette[a].main}).map(a=>({props:{color:a,track:"inverted"},style:c({},e.vars?{backgroundColor:e.vars.palette.Slider[`${a}Track`],borderColor:e.vars.palette.Slider[`${a}Track`]}:c({backgroundColor:ot(e.palette[a].main,.62),borderColor:ot(e.palette[a].main,.62)},e.applyStyles("dark",{backgroundColor:nt(e.palette[a].main,.5)}),e.applyStyles("dark",{borderColor:nt(e.palette[a].main,.5)})))}))]}}),Xt=J("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.thumb,t[`thumbColor${B(a.color)}`],a.size!=="medium"&&t[`thumbSize${B(a.size)}`]]}})(({theme:e})=>{var t;return{position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&.${T.disabled}`]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.keys(((t=e.vars)!=null?t:e).palette).filter(a=>{var s;return((s=e.vars)!=null?s:e).palette[a].main}).map(a=>({props:{color:a},style:{[`&:hover, &.${T.focusVisible}`]:c({},e.vars?{boxShadow:`0px 0px 0px 8px rgba(${e.vars.palette[a].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 8px ${st(e.palette[a].main,.16)}`},{"@media (hover: none)":{boxShadow:"none"}}),[`&.${T.active}`]:c({},e.vars?{boxShadow:`0px 0px 0px 14px rgba(${e.vars.palette[a].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 14px ${st(e.palette[a].main,.16)}`})}}))]}}),qt=J(Ot,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(({theme:e})=>c({zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},[`&.${T.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},[`&.${T.valueLabelOpen}`]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]})),Wt=J("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>dt(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:a}=e;return[t.mark,a&&t.markActive]}})(({theme:e})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8}}]})),Gt=J("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>dt(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(({theme:e})=>c({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(e.vars||e).palette.text.primary}}]})),Jt=e=>{const{disabled:t,dragging:a,marked:s,orientation:d,track:w,classes:$,color:m,size:f}=e,U={root:["root",t&&"disabled",a&&"dragging",s&&"marked",d==="vertical"&&"vertical",w==="inverted"&&"trackInverted",w===!1&&"trackFalse",m&&`color${B(m)}`,f&&`size${B(f)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",f&&`thumbSize${B(f)}`,m&&`thumbColor${B(m)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Tt(U,_t,$)},Qt=({children:e})=>e,tr=S.forwardRef(function(t,a){var s,d,w,$,m,f,U,ne,K,Q,fe,se,M,le,be,me,V,X,H,ve,O,ie,ue,q;const _=Yt({props:t,name:"MuiSlider"}),Z=Pt(),{"aria-label":N,"aria-valuetext":W,"aria-labelledby":y,component:ce="span",components:g={},componentsProps:R={},color:Re="primary",classes:Ae,className:Ie,disableSwap:he=!1,disabled:G=!1,getAriaLabel:L,getAriaValueText:ge,marks:ye=!1,max:ee=100,min:te=0,orientation:xe="horizontal",shiftStep:ze=10,size:Me="medium",step:ke=1,scale:j=ct,slotProps:v,slots:b,track:A="normal",valueLabelDisplay:D="off",valueLabelFormat:I=ct}=_,Ne=$t(_,Dt),k=c({},_,{isRtl:Z,max:ee,min:te,classes:Ae,disabled:G,disableSwap:he,orientation:xe,marks:ye,color:Re,size:Me,step:ke,shiftStep:ze,scale:j,track:A,valueLabelDisplay:D,valueLabelFormat:I}),{axisProps:re,getRootProps:Ee,getHiddenInputProps:Ve,getThumbProps:je,open:Qe,active:Fe,axis:de,focusedThumbIndex:r,range:o,dragging:n,marks:i,values:u,trackOffset:l,trackLeap:z,getThumbStyle:E}=jt(c({},k,{rootRef:a}));k.marked=i.length>0&&i.some(h=>h.label),k.dragging=n,k.focusedThumbIndex=r;const p=Jt(k),C=(s=(d=b==null?void 0:b.root)!=null?d:g.Root)!=null?s:Bt,ae=(w=($=b==null?void 0:b.rail)!=null?$:g.Rail)!=null?w:Ut,Ze=(m=(f=b==null?void 0:b.track)!=null?f:g.Track)!=null?m:Kt,et=(U=(ne=b==null?void 0:b.thumb)!=null?ne:g.Thumb)!=null?U:Xt,tt=(K=(Q=b==null?void 0:b.valueLabel)!=null?Q:g.ValueLabel)!=null?K:qt,He=(fe=(se=b==null?void 0:b.mark)!=null?se:g.Mark)!=null?fe:Wt,Oe=(M=(le=b==null?void 0:b.markLabel)!=null?le:g.MarkLabel)!=null?M:Gt,rt=(be=(me=b==null?void 0:b.input)!=null?me:g.Input)!=null?be:"input",De=(V=v==null?void 0:v.root)!=null?V:R.root,ft=(X=v==null?void 0:v.rail)!=null?X:R.rail,Ye=(H=v==null?void 0:v.track)!=null?H:R.track,Be=(ve=v==null?void 0:v.thumb)!=null?ve:R.thumb,Ue=(O=v==null?void 0:v.valueLabel)!=null?O:R.valueLabel,bt=(ie=v==null?void 0:v.mark)!=null?ie:R.mark,mt=(ue=v==null?void 0:v.markLabel)!=null?ue:R.markLabel,vt=(q=v==null?void 0:v.input)!=null?q:R.input,ht=Y({elementType:C,getSlotProps:Ee,externalSlotProps:De,externalForwardedProps:Ne,additionalProps:c({},Ft(C)&&{as:ce}),ownerState:c({},k,De==null?void 0:De.ownerState),className:[p.root,Ie]}),gt=Y({elementType:ae,externalSlotProps:ft,ownerState:k,className:p.rail}),yt=Y({elementType:Ze,externalSlotProps:Ye,additionalProps:{style:c({},re[de].offset(l),re[de].leap(z))},ownerState:c({},k,Ye==null?void 0:Ye.ownerState),className:p.track}),Ke=Y({elementType:et,getSlotProps:je,externalSlotProps:Be,ownerState:c({},k,Be==null?void 0:Be.ownerState),className:p.thumb}),xt=Y({elementType:tt,externalSlotProps:Ue,ownerState:c({},k,Ue==null?void 0:Ue.ownerState),className:p.valueLabel}),Xe=Y({elementType:He,externalSlotProps:bt,ownerState:k,className:p.mark}),qe=Y({elementType:Oe,externalSlotProps:mt,ownerState:k,className:p.markLabel}),kt=Y({elementType:rt,getSlotProps:Ve,externalSlotProps:vt,ownerState:k});return P.jsxs(C,c({},ht,{children:[P.jsx(ae,c({},gt)),P.jsx(Ze,c({},yt)),i.filter(h=>h.value>=te&&h.value<=ee).map((h,x)=>{const We=_e(h.value,te,ee),Se=re[de].offset(We);let F;return A===!1?F=u.indexOf(h.value)!==-1:F=A==="normal"&&(o?h.value>=u[0]&&h.value<=u[u.length-1]:h.value<=u[0])||A==="inverted"&&(o?h.value<=u[0]||h.value>=u[u.length-1]:h.value>=u[0]),P.jsxs(S.Fragment,{children:[P.jsx(He,c({"data-index":x},Xe,!Te(He)&&{markActive:F},{style:c({},Se,Xe.style),className:oe(Xe.className,F&&p.markActive)})),h.label!=null?P.jsx(Oe,c({"aria-hidden":!0,"data-index":x},qe,!Te(Oe)&&{markLabelActive:F},{style:c({},Se,qe.style),className:oe(p.markLabel,qe.className,F&&p.markLabelActive),children:h.label})):null]},x)}),u.map((h,x)=>{const We=_e(h,te,ee),Se=re[de].offset(We),F=D==="off"?Qt:tt;return P.jsx(F,c({},!Te(F)&&{valueLabelFormat:I,valueLabelDisplay:D,value:typeof I=="function"?I(j(h),x):I,index:x,open:Qe===x||Fe===x||D==="on",disabled:G},xt,{children:P.jsx(et,c({"data-index":x},Ke,{className:oe(p.thumb,Ke.className,Fe===x&&p.active,r===x&&p.focusVisible),style:c({},Se,E(x),Ke.style),children:P.jsx(rt,c({"data-index":x,"aria-label":L?L(x):N,"aria-valuenow":j(h),"aria-labelledby":y,"aria-valuetext":ge?ge(j(h),x):W,value:u[x]},kt))}))}),x)})]}))});export{tr as S};
