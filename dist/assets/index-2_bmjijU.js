import{r as S,aO as mt}from"./index-dnffYGPF.js";var Pt={exports:{}},Ut={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G=S;function Qt(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zt=typeof Object.is=="function"?Object.is:Qt,te=G.useState,ee=G.useEffect,ne=G.useLayoutEffect,se=G.useDebugValue;function oe(t,e){var n=e(),i=te({inst:{value:n,getSnapshot:e}}),s=i[0].inst,r=i[1];return ne(function(){s.value=n,s.getSnapshot=e,lt(s)&&r({inst:s})},[t,n,e]),ee(function(){return lt(s)&&r({inst:s}),t(function(){lt(s)&&r({inst:s})})},[t]),se(n),n}function lt(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zt(t,n)}catch{return!0}}function re(t,e){return e()}var ie=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?re:oe;Ut.useSyncExternalStore=G.useSyncExternalStore!==void 0?G.useSyncExternalStore:ie;Pt.exports=Ut;var ae=Pt.exports;const P=()=>{},D=P(),ft=Object,a=t=>t===D,N=t=>typeof t=="function",U=(t,e)=>({...t,...e}),ce=t=>N(t.then),ot=new WeakMap;let ue=0;const Z=t=>{const e=typeof t,n=t&&t.constructor,i=n==Date;let s,r;if(ft(t)===t&&!i&&n!=RegExp){if(s=ot.get(t),s)return s;if(s=++ue+"~",ot.set(t,s),n==Array){for(s="@",r=0;r<t.length;r++)s+=Z(t[r])+",";ot.set(t,s)}if(n==ft){s="#";const c=ft.keys(t).sort();for(;!a(r=c.pop());)a(t[r])||(s+=r+":"+Z(t[r])+",");ot.set(t,s)}}else s=i?t.toJSON():e=="symbol"?t.toString():e=="string"?JSON.stringify(t):""+t;return s},W=new WeakMap,dt={},rt={},wt="undefined",it=typeof window!=wt,_t=typeof document!=wt,le=()=>it&&typeof window.requestAnimationFrame!=wt,qt=(t,e)=>{const n=W.get(t);return[()=>!a(e)&&t.get(e)||dt,i=>{if(!a(e)){const s=t.get(e);e in rt||(rt[e]=s),n[5](e,U(s,i),s||dt)}},n[6],()=>!a(e)&&e in rt?rt[e]:!a(e)&&t.get(e)||dt]};let vt=!0;const fe=()=>vt,[pt,St]=it&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[P,P],de=()=>{const t=_t&&document.visibilityState;return a(t)||t!=="hidden"},Ee=t=>(_t&&document.addEventListener("visibilitychange",t),pt("focus",t),()=>{_t&&document.removeEventListener("visibilitychange",t),St("focus",t)}),Re=t=>{const e=()=>{vt=!0,t()},n=()=>{vt=!1};return pt("online",e),pt("offline",n),()=>{St("online",e),St("offline",n)}},he={isOnline:fe,isVisible:de},_e={initFocus:Ee,initReconnect:Re},xt=!mt.useId,tt=!it||"Deno"in window,ve=t=>le()?window.requestAnimationFrame(t):setTimeout(t,1),Et=tt?S.useEffect:S.useLayoutEffect,Rt=typeof navigator<"u"&&navigator.connection,Ft=!tt&&Rt&&(["slow-2g","2g"].includes(Rt.effectiveType)||Rt.saveData),gt=t=>{if(N(t))try{t=t()}catch{t=""}const e=t;return t=typeof t=="string"?t:(Array.isArray(t)?t.length:t)?Z(t):"",[t,e]};let pe=0;const Tt=()=>++pe,Ht=0,jt=1,$t=2,Se=3;var Q={__proto__:null,ERROR_REVALIDATE_EVENT:Se,FOCUS_EVENT:Ht,MUTATE_EVENT:$t,RECONNECT_EVENT:jt};async function kt(...t){const[e,n,i,s]=t,r=U({populateCache:!0,throwOnError:!0},typeof s=="boolean"?{revalidate:s}:s||{});let c=r.populateCache;const R=r.rollbackOnError;let d=r.optimisticData;const A=g=>typeof R=="function"?R(g):R!==!1,T=r.throwOnError;if(N(n)){const g=n,h=[],y=e.keys();for(const v of y)!/^\$(inf|sub)\$/.test(v)&&g(e.get(v)._k)&&h.push(v);return Promise.all(h.map(_))}return _(n);async function _(g){const[h]=gt(g);if(!h)return;const[y,v]=qt(e,h),[at,o,et,Y]=W.get(e),M=()=>{const V=at[h];return(N(r.revalidate)?r.revalidate(y().data,g):r.revalidate!==!1)&&(delete et[h],delete Y[h],V&&V[0])?V[0]($t).then(()=>y().data):y().data};if(t.length<3)return M();let m=i,C;const H=Tt();o[h]=[H,0];const E=!a(d),j=y(),I=j.data,$=j._c,q=a($)?I:$;if(E&&(d=N(d)?d(q,I):d,v({data:d,_c:q})),N(m))try{m=m(q)}catch(V){C=V}if(m&&ce(m))if(m=await m.catch(V=>{C=V}),H!==o[h][0]){if(C)throw C;return m}else C&&E&&A(C)&&(c=!0,v({data:q,_c:D}));if(c&&!C)if(N(c)){const V=c(m,q);v({data:V,error:D,_c:D})}else v({data:m,error:D,_c:D});if(o[h][1]=Tt(),Promise.resolve(M()).then(()=>{v({_c:D})}),C){if(T)throw C;return}return m}}const Wt=(t,e)=>{for(const n in t)t[n][0]&&t[n][0](e)},Te=(t,e)=>{if(!W.has(t)){const n=U(_e,e),i={},s=kt.bind(D,t);let r=P;const c={},R=(T,_)=>{const g=c[T]||[];return c[T]=g,g.push(_),()=>g.splice(g.indexOf(_),1)},d=(T,_,g)=>{t.set(T,_);const h=c[T];if(h)for(const y of h)y(_,g)},A=()=>{if(!W.has(t)&&(W.set(t,[i,{},{},{},s,d,R]),!tt)){const T=n.initFocus(setTimeout.bind(D,Wt.bind(D,i,Ht))),_=n.initReconnect(setTimeout.bind(D,Wt.bind(D,i,jt)));r=()=>{T&&T(),_&&_(),W.delete(t)}}};return A(),[t,s,A,r]}return[t,W.get(t)[4]]},me=(t,e,n,i,s)=>{const r=n.errorRetryCount,c=s.retryCount,R=~~((Math.random()+.5)*(1<<(c<8?c:8)))*n.errorRetryInterval;!a(r)&&c>r||setTimeout(i,R,s)},we=(t,e)=>Z(t)==Z(e),[zt,ge]=Te(new Map),Oe=U({onLoadingSlow:P,onSuccess:P,onError:P,onErrorRetry:me,onDiscarded:P,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Ft?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Ft?5e3:3e3,compare:we,isPaused:()=>!1,cache:zt,mutate:ge,fallback:{}},he),De=(t,e)=>{const n=U(t,e);if(e){const{use:i,fallback:s}=t,{use:r,fallback:c}=e;i&&r&&(n.use=i.concat(r)),s&&c&&(n.fallback=U(s,c))}return n},Ce=S.createContext({}),be="$inf$",Bt=it&&window.__SWR_DEVTOOLS_USE__,Ae=Bt?window.__SWR_DEVTOOLS_USE__:[],Ve=()=>{Bt&&(window.__SWR_DEVTOOLS_REACT__=mt)},ye=t=>N(t[1])?[t[0],t[1],t[2]||{}]:[t[0],null,(t[1]===null?t[2]:t[1])||{}],Ie=()=>U(Oe,S.useContext(Ce)),Le=t=>(e,n,i)=>t(e,n&&((...r)=>{const[c]=gt(e),[,,,R]=W.get(zt);if(c.startsWith(be))return n(...r);const d=R[c];return a(d)?n(...r):(delete R[c],d)}),i),Ne=Ae.concat(Le),xe=t=>function(...n){const i=Ie(),[s,r,c]=ye(n),R=De(i,c);let d=t;const{use:A}=R,T=(A||[]).concat(Ne);for(let _=T.length;_--;)d=T[_](d);return d(s,r||R.fetcher||null,R)},Fe=(t,e,n)=>{const i=e[t]||(e[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s>=0&&(i[s]=i[i.length-1],i.pop())}};Ve();const Mt=mt.use||(t=>{if(t.status==="pending")throw t;if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(t.status="pending",t.then(e=>{t.status="fulfilled",t.value=e},e=>{t.status="rejected",t.reason=e}),t)}),ht={dedupe:!0},We=(t,e,n)=>{const{cache:i,compare:s,suspense:r,fallbackData:c,revalidateOnMount:R,revalidateIfStale:d,refreshInterval:A,refreshWhenHidden:T,refreshWhenOffline:_,keepPreviousData:g}=n,[h,y,v,at]=W.get(i),[o,et]=gt(t),Y=S.useRef(!1),M=S.useRef(!1),m=S.useRef(o),C=S.useRef(e),H=S.useRef(n),E=()=>H.current,j=()=>E().isVisible()&&E().isOnline(),[I,$,q,V]=qt(i,o),k=S.useRef({}).current,Jt=a(c)?n.fallback[o]:c,Ot=(u,l)=>{for(const w in k){const f=w;if(f==="data"){if(!s(u[f],l[f])&&(!a(u[f])||!s(st,l[f])))return!1}else if(l[f]!==u[f])return!1}return!0},Dt=S.useMemo(()=>{const u=!o||!e?!1:a(R)?E().isPaused()||r?!1:a(d)?!0:d:R,l=O=>{const x=U(O);return delete x._k,u?{isValidating:!0,isLoading:!0,...x}:x},w=I(),f=V(),L=l(w),K=w===f?L:l(f);let p=L;return[()=>{const O=l(I());return Ot(O,p)?(p.data=O.data,p.isLoading=O.isLoading,p.isValidating=O.isValidating,p.error=O.error,p):(p=O,O)},()=>K]},[i,o]),z=ae.useSyncExternalStore(S.useCallback(u=>q(o,(l,w)=>{Ot(w,l)||u()}),[i,o]),Dt[0],Dt[1]),Ct=!Y.current,Kt=h[o]&&h[o].length>0,B=z.data,J=a(B)?Jt:B,nt=z.error,bt=S.useRef(J),st=g?a(B)?bt.current:B:J,At=Kt&&!a(nt)?!1:Ct&&!a(R)?R:E().isPaused()?!1:r?a(J)?!1:d:a(J)||d,Vt=!!(o&&e&&Ct&&At),Gt=a(z.isValidating)?Vt:z.isValidating,Yt=a(z.isLoading)?Vt:z.isLoading,X=S.useCallback(async u=>{const l=C.current;if(!o||!l||M.current||E().isPaused())return!1;let w,f,L=!0;const K=u||{},p=!v[o]||!K.dedupe,O=()=>xt?!M.current&&o===m.current&&Y.current:o===m.current,x={isValidating:!1,isLoading:!1},It=()=>{$(x)},Lt=()=>{const b=v[o];b&&b[1]===f&&delete v[o]},Nt={isValidating:!0};a(I().data)&&(Nt.isLoading=!0);try{if(p&&($(Nt),n.loadingTimeout&&a(I().data)&&setTimeout(()=>{L&&O()&&E().onLoadingSlow(o,n)},n.loadingTimeout),v[o]=[l(et),Tt()]),[w,f]=v[o],w=await w,p&&setTimeout(Lt,n.dedupingInterval),!v[o]||v[o][1]!==f)return p&&O()&&E().onDiscarded(o),!1;x.error=D;const b=y[o];if(!a(b)&&(f<=b[0]||f<=b[1]||b[1]===0))return It(),p&&O()&&E().onDiscarded(o),!1;const F=I().data;x.data=s(F,w)?F:w,p&&O()&&E().onSuccess(w,o,n)}catch(b){Lt();const F=E(),{shouldRetryOnError:ct}=F;F.isPaused()||(x.error=b,p&&O()&&(F.onError(b,o,F),(ct===!0||N(ct)&&ct(b))&&(!E().revalidateOnFocus||!E().revalidateOnReconnect||j())&&F.onErrorRetry(b,o,F,Xt=>{const ut=h[o];ut&&ut[0]&&ut[0](Q.ERROR_REVALIDATE_EVENT,Xt)},{retryCount:(K.retryCount||0)+1,dedupe:!0})))}return L=!1,It(),!0},[o,i]),yt=S.useCallback((...u)=>kt(i,m.current,...u),[]);if(Et(()=>{C.current=e,H.current=n,a(B)||(bt.current=B)}),Et(()=>{if(!o)return;const u=X.bind(D,ht);let l=0;const f=Fe(o,h,(L,K={})=>{if(L==Q.FOCUS_EVENT){const p=Date.now();E().revalidateOnFocus&&p>l&&j()&&(l=p+E().focusThrottleInterval,u())}else if(L==Q.RECONNECT_EVENT)E().revalidateOnReconnect&&j()&&u();else{if(L==Q.MUTATE_EVENT)return X();if(L==Q.ERROR_REVALIDATE_EVENT)return X(K)}});return M.current=!1,m.current=o,Y.current=!0,$({_k:et}),At&&(a(J)||tt?u():ve(u)),()=>{M.current=!0,f()}},[o]),Et(()=>{let u;function l(){const f=N(A)?A(I().data):A;f&&u!==-1&&(u=setTimeout(w,f))}function w(){!I().error&&(T||E().isVisible())&&(_||E().isOnline())?X(ht).then(l):l()}return l(),()=>{u&&(clearTimeout(u),u=-1)}},[A,T,_,o]),S.useDebugValue(st),r&&a(J)&&o){if(!xt&&tt)throw new Error("Fallback data is required when using suspense in SSR.");C.current=e,H.current=n,M.current=!1;const u=at[o];if(!a(u)){const l=yt(u);Mt(l)}if(a(nt)){const l=X(ht);a(st)||(l.status="fulfilled",l.value=!0),Mt(l)}else throw nt}return{mutate:yt,get data(){return k.data=!0,st},get error(){return k.error=!0,nt},get isValidating(){return k.isValidating=!0,Gt},get isLoading(){return k.isLoading=!0,Yt}}},Pe=xe(We);export{ge as m,Pe as u};
