import{v as M,a as I}from"./transition-BJzcwH5q.js";import{b3 as at,aR as it,b4 as st,aQ as ot,b5 as C,b6 as rt,b7 as ct,b8 as ut,b9 as lt,ba as j,bb as ft,bc as mt,bd as yt,be as dt,bf as ht,bg as gt,bh as pt,aP as B,bi as Q,bj as bt,bk as At,bl as Et,bm as xt,bn as _,bo as Vt,bp as J,r as R,j as H,T as St,m as vt}from"./index-C2cM-DBs.js";import{u as Mt}from"./use-in-view-B9-kX8bn.js";import{u as Z}from"./use-motion-value-BXace482.js";const Tt=t=>t&&typeof t=="object"&&t.mix,wt=t=>Tt(t)?t.mix:void 0;function Dt(...t){const e=!Array.isArray(t[0]),a=e?0:-1,n=t[0+a],i=t[1+a],s=t[2+a],o=t[3+a],r=at(i,s,{mixer:wt(s[0]),...o});return e?r(n):r}function $(t,e){const a=Z(e()),n=()=>a.set(e());return n(),it(()=>{const i=()=>ot.preRender(n,!1,!0),s=t.map(o=>o.on("change",i));return()=>{s.forEach(o=>o()),st(n)}}),a}function It(t){C.current=[],t();const e=$(C.current,t);return C.current=void 0,e}function Ct(t,e,a,n){if(typeof t=="function")return It(t);const i=typeof e=="function"?e:Dt(e,a,n);return Array.isArray(t)?P(t,i):P([t],([s])=>i(s))}function P(t,e){const a=rt(()=>[]);return $(t,()=>{a.length=0;const n=t.length;for(let i=0;i<n;i++)a[i]=t[i].get();return e(a)})}function jt(t){return typeof t=="object"&&!Array.isArray(t)}function Xt(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},a=ct(t)?new ut(e,{enableHardwareAcceleration:!1}):new lt(e,{enableHardwareAcceleration:!0});a.mount(t),j.set(t,a)}function Yt(t,e=100){const a=ft({keyframes:[0,e],...t}),n=Math.min(mt(a),yt);return{type:"keyframes",ease:i=>a.next(n*i).value/e,duration:dt(n)}}function U(t,e,a,n){var i;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?a:(i=n.get(e))!==null&&i!==void 0?i:t}const Gt=(t,e,a)=>{const n=e-t;return((a-t)%n+n)%n+t};function Kt(t,e){return ht(t)?t[Gt(0,t.length,e)]:t}function Lt(t,e,a){for(let n=0;n<t.length;n++){const i=t[n];i.at>e&&i.at<a&&(pt(t,i),n--)}}function Ft(t,e,a,n,i,s){Lt(t,i,s);for(let o=0;o<e.length;o++)t.push({value:e[o],at:gt(i,s,n[o]),easing:Kt(a,o)})}function Ot(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const kt="easeInOut";function Nt(t,{defaultTransition:e={},...a}={},n){const i=e.duration||.3,s=new Map,o=new Map,r={},u=new Map;let x=0,c=0,V=0;for(let d=0;d<t.length;d++){const f=t[d];if(typeof f=="string"){u.set(f,c);continue}else if(!Array.isArray(f)){u.set(f.name,U(c,f.at,x,u));continue}let[h,g,m={}]=f;m.at!==void 0&&(c=U(c,m.at,x,u));let y=0;const S=(p,b,E,T=0,w=0)=>{const l=Rt(p),{delay:D=0,times:v=At(l),type:tt="keyframes",...et}=b;let{ease:X=e.ease||"easeOut",duration:A}=b;const Y=typeof D=="function"?D(T,w):D,G=l.length;if(G<=2&&tt==="spring"){let O=100;if(G===2&&Ut(l)){const nt=l[1]-l[0];O=Math.abs(nt)}const k={...et};A!==void 0&&(k.duration=xt(A));const N=Yt(k,O);X=N.ease,A=N.duration}A??(A=i);const K=c+Y,L=K+A;v.length===1&&v[0]===0&&(v[1]=1);const F=v.length-l.length;F>0&&Et(v,F),l.length===1&&l.unshift(null),Ft(E,l,X,v,K,L),y=Math.max(Y+A,y),V=Math.max(L,V)};if(B(h)){const p=W(h,o);S(g,m,z("default",p))}else{const p=Q(h,n,r),b=p.length;for(let E=0;E<b;E++){g=g,m=m;const T=p[E],w=W(T,o);for(const l in g)S(g[l],Ht(m,l),z(l,w),E,b)}}x=c,c+=y}return o.forEach((d,f)=>{for(const h in d){const g=d[h];g.sort(Ot);const m=[],y=[],S=[];for(let b=0;b<g.length;b++){const{at:E,value:T,easing:w}=g[b];m.push(T),y.push(bt(0,V,E)),S.push(w||"easeOut")}y[0]!==0&&(y.unshift(0),m.unshift(m[0]),S.unshift(kt)),y[y.length-1]!==1&&(y.push(1),m.push(null)),s.has(f)||s.set(f,{keyframes:{},transition:{}});const p=s.get(f);p.keyframes[h]=m,p.transition[h]={...e,duration:V,ease:S,times:y,...a}}}),s}function W(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function z(t,e){return e[t]||(e[t]=[]),e[t]}function Rt(t){return Array.isArray(t)?t:[t]}function Ht(t,e){return t[e]?{...t,...t[e]}:{...t}}const Pt=t=>typeof t=="number",Ut=t=>t.every(Pt);function q(t,e,a,n){const i=Q(t),s=i.length,o=[];for(let r=0;r<s;r++){const u=i[r];j.has(u)||Xt(u);const x=j.get(u),c={...a};typeof c.delay=="function"&&(c.delay=c.delay(r,s)),o.push(...Vt(x,{...e,transition:c},{}))}return new J(o)}const Wt=t=>Array.isArray(t)&&Array.isArray(t[0]);function zt(t,e,a){const n=[];return Nt(t,e,a).forEach(({keyframes:s,transition:o},r)=>{let u;B(r)?u=_(r,s.default,o.default):u=q(r,s,o),n.push(u)}),new J(n)}const Bt=t=>{function e(a,n,i){let s;return Wt(a)?s=zt(a,n,t):jt(n)?s=q(a,n,i):s=_(a,n,i),s}return e},Qt=Bt(),qt=t=>{const e=t==null?void 0:t.durationIn,a=t==null?void 0:t.durationOut,n=t==null?void 0:t.easeIn,i=t==null?void 0:t.easeOut;return{in:{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1,transition:M({durationIn:e,easeIn:n})},exit:{scale:0,opacity:0,transition:I({durationOut:a,easeOut:i})}},inX:{initial:{scaleX:0,opacity:0},animate:{scaleX:1,opacity:1,transition:M({durationIn:e,easeIn:n})},exit:{scaleX:0,opacity:0,transition:I({durationOut:a,easeOut:i})}},inY:{initial:{scaleY:0,opacity:0},animate:{scaleY:1,opacity:1,transition:M({durationIn:e,easeIn:n})},exit:{scaleY:0,opacity:0,transition:I({durationOut:a,easeOut:i})}},out:{initial:{scale:1,opacity:1},animate:{scale:0,opacity:0,transition:M({durationIn:e,easeIn:n})}},outX:{initial:{scaleX:1,opacity:1},animate:{scaleX:0,opacity:0,transition:M({durationIn:e,easeIn:n})}},outY:{initial:{scaleY:1,opacity:1},animate:{scaleY:0,opacity:0,transition:M({durationIn:e,easeIn:n})}}}};function te({to:t,sx:e,from:a=0,unit:n="",toFixed:i=0,duration:s=2,once:o=!0,amount:r=.5,component:u="p",...x}){const c=R.useRef(null),V=Mt(c,{once:o,amount:r}),d=Z(a),f=Ct(d,h=>h.toFixed(i));return R.useEffect(()=>{V&&Qt(d,t,{duration:s})},[d,s,V,t]),H.jsxs(St,{component:u,sx:{display:"inline-flex",p:0,m:0,...e},...x,children:[H.jsx(vt.span,{ref:c,children:f}),n]})}export{te as A,Ct as u,qt as v};
