import{v as M,a as I}from"./transition-BJzcwH5q.js";import{b1 as at,aP as it,b2 as st,aO as ot,b3 as C,b4 as rt,b5 as ct,b6 as ut,b7 as lt,b8 as j,b9 as ft,ba as mt,bb as yt,bc as dt,bd as ht,be as gt,bf as bt,aN as B,bg as _,bh as pt,bi as At,bj as Et,bk as xt,bl as J,bm as Vt,bn as Q,r as H,j as R,T as St,m as vt}from"./index-lMp9zap6.js";import{u as Mt}from"./use-in-view-lWyvqFaA.js";import{u as Z}from"./use-motion-value-DtRZ5pvp.js";const Tt=t=>t&&typeof t=="object"&&t.mix,wt=t=>Tt(t)?t.mix:void 0;function Dt(...t){const e=!Array.isArray(t[0]),a=e?0:-1,n=t[0+a],i=t[1+a],s=t[2+a],o=t[3+a],r=at(i,s,{mixer:wt(s[0]),...o});return e?r(n):r}function $(t,e){const a=Z(e()),n=()=>a.set(e());return n(),it(()=>{const i=()=>ot.preRender(n,!1,!0),s=t.map(o=>o.on("change",i));return()=>{s.forEach(o=>o()),st(n)}}),a}function It(t){C.current=[],t();const e=$(C.current,t);return C.current=void 0,e}function Ct(t,e,a,n){if(typeof t=="function")return It(t);const i=typeof e=="function"?e:Dt(e,a,n);return Array.isArray(t)?P(t,i):P([t],([s])=>i(s))}function P(t,e){const a=rt(()=>[]);return $(t,()=>{a.length=0;const n=t.length;for(let i=0;i<n;i++)a[i]=t[i].get();return e(a)})}function jt(t){return typeof t=="object"&&!Array.isArray(t)}function Xt(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},a=ct(t)?new ut(e,{enableHardwareAcceleration:!1}):new lt(e,{enableHardwareAcceleration:!0});a.mount(t),j.set(t,a)}function Yt(t,e=100){const a=ft({keyframes:[0,e],...t}),n=Math.min(mt(a),yt);return{type:"keyframes",ease:i=>a.next(n*i).value/e,duration:dt(n)}}function U(t,e,a,n){var i;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?a:(i=n.get(e))!==null&&i!==void 0?i:t}const Gt=(t,e,a)=>{const n=e-t;return((a-t)%n+n)%n+t};function Kt(t,e){return ht(t)?t[Gt(0,t.length,e)]:t}function Lt(t,e,a){for(let n=0;n<t.length;n++){const i=t[n];i.at>e&&i.at<a&&(bt(t,i),n--)}}function Ot(t,e,a,n,i,s){Lt(t,i,s);for(let o=0;o<e.length;o++)t.push({value:e[o],at:gt(i,s,n[o]),easing:Kt(a,o)})}function Ft(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const Nt="easeInOut";function kt(t,{defaultTransition:e={},...a}={},n){const i=e.duration||.3,s=new Map,o=new Map,r={},u=new Map;let x=0,c=0,V=0;for(let d=0;d<t.length;d++){const f=t[d];if(typeof f=="string"){u.set(f,c);continue}else if(!Array.isArray(f)){u.set(f.name,U(c,f.at,x,u));continue}let[h,g,m={}]=f;m.at!==void 0&&(c=U(c,m.at,x,u));let y=0;const S=(b,p,E,T=0,w=0)=>{const l=Ht(b),{delay:D=0,times:v=pt(l),type:tt="keyframes",...et}=p;let{ease:X=e.ease||"easeOut",duration:A}=p;const Y=typeof D=="function"?D(T,w):D,G=l.length;if(G<=2&&tt==="spring"){let F=100;if(G===2&&Ut(l)){const nt=l[1]-l[0];F=Math.abs(nt)}const N={...et};A!==void 0&&(N.duration=xt(A));const k=Yt(N,F);X=k.ease,A=k.duration}A??(A=i);const K=c+Y,L=K+A;v.length===1&&v[0]===0&&(v[1]=1);const O=v.length-l.length;O>0&&At(v,O),l.length===1&&l.unshift(null),Ot(E,l,X,v,K,L),y=Math.max(Y+A,y),V=Math.max(L,V)};if(B(h)){const b=W(h,o);S(g,m,z("default",b))}else{const b=_(h,n,r),p=b.length;for(let E=0;E<p;E++){g=g,m=m;const T=b[E],w=W(T,o);for(const l in g)S(g[l],Rt(m,l),z(l,w),E,p)}}x=c,c+=y}return o.forEach((d,f)=>{for(const h in d){const g=d[h];g.sort(Ft);const m=[],y=[],S=[];for(let p=0;p<g.length;p++){const{at:E,value:T,easing:w}=g[p];m.push(T),y.push(Et(0,V,E)),S.push(w||"easeOut")}y[0]!==0&&(y.unshift(0),m.unshift(m[0]),S.unshift(Nt)),y[y.length-1]!==1&&(y.push(1),m.push(null)),s.has(f)||s.set(f,{keyframes:{},transition:{}});const b=s.get(f);b.keyframes[h]=m,b.transition[h]={...e,duration:V,ease:S,times:y,...a}}}),s}function W(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function z(t,e){return e[t]||(e[t]=[]),e[t]}function Ht(t){return Array.isArray(t)?t:[t]}function Rt(t,e){return t[e]?{...t,...t[e]}:{...t}}const Pt=t=>typeof t=="number",Ut=t=>t.every(Pt);function q(t,e,a,n){const i=_(t),s=i.length,o=[];for(let r=0;r<s;r++){const u=i[r];j.has(u)||Xt(u);const x=j.get(u),c={...a};typeof c.delay=="function"&&(c.delay=c.delay(r,s)),o.push(...Vt(x,{...e,transition:c},{}))}return new Q(o)}const Wt=t=>Array.isArray(t)&&Array.isArray(t[0]);function zt(t,e,a){const n=[];return kt(t,e,a).forEach(({keyframes:s,transition:o},r)=>{let u;B(r)?u=J(r,s.default,o.default):u=q(r,s,o),n.push(u)}),new Q(n)}const Bt=t=>{function e(a,n,i){let s;return Wt(a)?s=zt(a,n,t):jt(n)?s=q(a,n,i):s=J(a,n,i),s}return e},_t=Bt(),qt=t=>{const e=t==null?void 0:t.durationIn,a=t==null?void 0:t.durationOut,n=t==null?void 0:t.easeIn,i=t==null?void 0:t.easeOut;return{in:{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1,transition:M({durationIn:e,easeIn:n})},exit:{scale:0,opacity:0,transition:I({durationOut:a,easeOut:i})}},inX:{initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1,transition:M({durationIn:e,easeIn:n})},exit:{scaleX:0,opacity:0,transition:I({durationOut:a,easeOut:i})}},inY:{initial:{scaleY:0,opacity:0},animate:{scaleY:1,opacity:1,transition:M({durationIn:e,easeIn:n})},exit:{scaleY:0,opacity:0,transition:I({durationOut:a,easeOut:i})}},out:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,transition:M({durationIn:e,easeIn:n})}},outX:{initial:{scaleX:1,opacity:1},animate:{scaleX:0,opacity:0,transition:M({durationIn:e,easeIn:n})}},outY:{initial:{scaleY:1,opacity:1},animate:{scaleY:0,opacity:0,transition:M({durationIn:e,easeIn:n})}}}};function te({to:t,sx:e,from:a=0,unit:n="",toFixed:i=0,duration:s=2,once:o=!0,amount:r=.5,component:u="p",...x}){const c=H.useRef(null),V=Mt(c,{once:o,amount:r}),d=Z(a),f=Ct(d,h=>h.toFixed(i));return H.useEffect(()=>{V&&_t(d,t,{duration:s})},[d,s,V,t]),R.jsxs(St,{component:u,sx:{display:"inline-flex",p:0,m:0,...e},...x,children:[R.jsx(vt.span,{ref:c,children:f}),n]})}export{te as A,Ct as u,qt as v};
