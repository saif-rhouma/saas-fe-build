var ht=e=>{throw TypeError(e)};var H=(e,t,i)=>t.has(e)||ht("Cannot "+i);var s=(e,t,i)=>(H(e,t,"read from private field"),i?i.call(e):t.get(e)),p=(e,t,i)=>t.has(e)?ht("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),c=(e,t,i,r)=>(H(e,t,"write to private field"),r?r.call(e,i):t.set(e,i),i),l=(e,t,i)=>(H(e,t,"access private method"),i);import{ds as Rt,dV as C,dt as X,dW as A,dX as Ct,dY as ct,dZ as ut,d_ as xt,d$ as Ot,e0 as St,e1 as lt,dw as mt,r as S,dp as Et,j as E,f as wt,M as Qt,m as G,T as dt,dO as It,e as Tt,R as Ft}from"./index-BqQARj70.js";import{s as Ut}from"./utils-km2FGkQ4.js";import{v as K}from"./bounce-BSK3KHpz.js";var m,n,B,v,I,U,R,k,D,j,T,F,w,M,a,L,Y,Z,$,J,q,tt,et,yt,vt,Dt=(vt=class extends Rt{constructor(t,i){super();p(this,a);p(this,m);p(this,n);p(this,B);p(this,v);p(this,I);p(this,U);p(this,R);p(this,k);p(this,D);p(this,j);p(this,T);p(this,F);p(this,w);p(this,M,new Set);this.options=i,c(this,m,t),c(this,R,null),this.bindMethods(),this.setOptions(i)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,n).addObserver(this),ft(s(this,n),this.options)?l(this,a,L).call(this):this.updateResult(),l(this,a,J).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return st(s(this,n),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return st(s(this,n),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,l(this,a,q).call(this),l(this,a,tt).call(this),s(this,n).removeObserver(this)}setOptions(t,i){const r=this.options,f=s(this,n);if(this.options=s(this,m).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof C(this.options.enabled,s(this,n))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");l(this,a,et).call(this),s(this,n).setOptions(this.options),r._defaulted&&!X(this.options,r)&&s(this,m).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,n),observer:this});const u=this.hasListeners();u&&pt(s(this,n),f,this.options,r)&&l(this,a,L).call(this),this.updateResult(i),u&&(s(this,n)!==f||C(this.options.enabled,s(this,n))!==C(r.enabled,s(this,n))||A(this.options.staleTime,s(this,n))!==A(r.staleTime,s(this,n)))&&l(this,a,Y).call(this);const o=l(this,a,Z).call(this);u&&(s(this,n)!==f||C(this.options.enabled,s(this,n))!==C(r.enabled,s(this,n))||o!==s(this,w))&&l(this,a,$).call(this,o)}getOptimisticResult(t){const i=s(this,m).getQueryCache().build(s(this,m),t),r=this.createResult(i,t);return Mt(this,r)&&(c(this,v,r),c(this,U,this.options),c(this,I,s(this,n).state)),r}getCurrentResult(){return s(this,v)}trackResult(t,i){const r={};return Object.keys(t).forEach(f=>{Object.defineProperty(r,f,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(f),i==null||i(f),t[f])})}),r}trackProp(t){s(this,M).add(t)}getCurrentQuery(){return s(this,n)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const i=s(this,m).defaultQueryOptions(t),r=s(this,m).getQueryCache().build(s(this,m),i);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,i))}fetch(t){return l(this,a,L).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,v)))}createResult(t,i){var ot;const r=s(this,n),f=this.options,u=s(this,v),o=s(this,I),d=s(this,U),x=t!==r?t.state:s(this,B),{state:O}=t;let h={...O},P=!1,y;if(i._optimisticResults){const b=this.hasListeners(),N=!b&&ft(t,i),gt=b&&pt(t,r,i,f);(N||gt)&&(h={...h,...St(O.data,t.options)}),i._optimisticResults==="isRestoring"&&(h.fetchStatus="idle")}let{error:_,errorUpdatedAt:rt,status:Q}=h;if(i.select&&h.data!==void 0)if(u&&h.data===(o==null?void 0:o.data)&&i.select===s(this,k))y=s(this,D);else try{c(this,k,i.select),y=i.select(h.data),y=lt(u==null?void 0:u.data,y,i),c(this,D,y),c(this,R,null)}catch(b){c(this,R,b)}else y=h.data;if(i.placeholderData!==void 0&&y===void 0&&Q==="pending"){let b;if(u!=null&&u.isPlaceholderData&&i.placeholderData===(d==null?void 0:d.placeholderData))b=u.data;else if(b=typeof i.placeholderData=="function"?i.placeholderData((ot=s(this,j))==null?void 0:ot.state.data,s(this,j)):i.placeholderData,i.select&&b!==void 0)try{b=i.select(b),c(this,R,null)}catch(N){c(this,R,N)}b!==void 0&&(Q="success",y=lt(u==null?void 0:u.data,b,i),P=!0)}s(this,R)&&(_=s(this,R),y=s(this,D),rt=Date.now(),Q="error");const V=h.fetchStatus==="fetching",W=Q==="pending",z=Q==="error",nt=W&&V,at=y!==void 0;return{status:Q,fetchStatus:h.fetchStatus,isPending:W,isSuccess:Q==="success",isError:z,isInitialLoading:nt,isLoading:nt,data:y,dataUpdatedAt:h.dataUpdatedAt,error:_,errorUpdatedAt:rt,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>x.dataUpdateCount||h.errorUpdateCount>x.errorUpdateCount,isFetching:V,isRefetching:V&&!W,isLoadingError:z&&!at,isPaused:h.fetchStatus==="paused",isPlaceholderData:P,isRefetchError:z&&at,isStale:it(t,i),refetch:this.refetch}}updateResult(t){const i=s(this,v),r=this.createResult(s(this,n),this.options);if(c(this,I,s(this,n).state),c(this,U,this.options),s(this,I).data!==void 0&&c(this,j,s(this,n)),X(r,i))return;c(this,v,r);const f={},u=()=>{if(!i)return!0;const{notifyOnChangeProps:o}=this.options,d=typeof o=="function"?o():o;if(d==="all"||!d&&!s(this,M).size)return!0;const g=new Set(d??s(this,M));return this.options.throwOnError&&g.add("error"),Object.keys(s(this,v)).some(x=>{const O=x;return s(this,v)[O]!==i[O]&&g.has(O)})};(t==null?void 0:t.listeners)!==!1&&u()&&(f.listeners=!0),l(this,a,yt).call(this,{...f,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&l(this,a,J).call(this)}},m=new WeakMap,n=new WeakMap,B=new WeakMap,v=new WeakMap,I=new WeakMap,U=new WeakMap,R=new WeakMap,k=new WeakMap,D=new WeakMap,j=new WeakMap,T=new WeakMap,F=new WeakMap,w=new WeakMap,M=new WeakMap,a=new WeakSet,L=function(t){l(this,a,et).call(this);let i=s(this,n).fetch(this.options,t);return t!=null&&t.throwOnError||(i=i.catch(Ct)),i},Y=function(){l(this,a,q).call(this);const t=A(this.options.staleTime,s(this,n));if(ct||s(this,v).isStale||!ut(t))return;const r=xt(s(this,v).dataUpdatedAt,t)+1;c(this,T,setTimeout(()=>{s(this,v).isStale||this.updateResult()},r))},Z=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,n)):this.options.refetchInterval)??!1},$=function(t){l(this,a,tt).call(this),c(this,w,t),!(ct||C(this.options.enabled,s(this,n))===!1||!ut(s(this,w))||s(this,w)===0)&&c(this,F,setInterval(()=>{(this.options.refetchIntervalInBackground||Ot.isFocused())&&l(this,a,L).call(this)},s(this,w)))},J=function(){l(this,a,Y).call(this),l(this,a,$).call(this,l(this,a,Z).call(this))},q=function(){s(this,T)&&(clearTimeout(s(this,T)),c(this,T,void 0))},tt=function(){s(this,F)&&(clearInterval(s(this,F)),c(this,F,void 0))},et=function(){const t=s(this,m).getQueryCache().build(s(this,m),this.options);if(t===s(this,n))return;const i=s(this,n);c(this,n,t),c(this,B,t.state),this.hasListeners()&&(i==null||i.removeObserver(this),t.addObserver(this))},yt=function(t){mt.batch(()=>{t.listeners&&this.listeners.forEach(i=>{i(s(this,v))}),s(this,m).getQueryCache().notify({query:s(this,n),type:"observerResultsUpdated"})})},vt);function jt(e,t){return C(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function ft(e,t){return jt(e,t)||e.state.data!==void 0&&st(e,t,t.refetchOnMount)}function st(e,t,i){if(C(t.enabled,e)!==!1){const r=typeof i=="function"?i(e):i;return r==="always"||r!==!1&&it(e,t)}return!1}function pt(e,t,i,r){return(e!==t||C(r.enabled,e)===!1)&&(!i.suspense||e.state.status!=="error")&&it(e,i)}function it(e,t){return C(t.enabled,e)!==!1&&e.isStaleByTime(A(t.staleTime,e))}function Mt(e,t){return!X(e.getCurrentResult(),t)}var bt=S.createContext(!1),Pt=()=>S.useContext(bt);bt.Provider;function Lt(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Bt=S.createContext(Lt()),kt=()=>S.useContext(Bt),_t=(e,t)=>{(e.suspense||e.throwOnError)&&(t.isReset()||(e.retryOnMount=!1))},At=e=>{S.useEffect(()=>{e.clearReset()},[e])},Vt=({result:e,errorResetBoundary:t,throwOnError:i,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&Ut(i,[e.error,r]),Wt=e=>{e.suspense&&(typeof e.staleTime!="number"&&(e.staleTime=1e3),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3)))},zt=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,Nt=(e,t,i)=>t.fetchOptimistic(e).catch(()=>{i.clearReset()});function Ht(e,t,i){var x,O,h,P;const r=Et(),f=Pt(),u=kt(),o=r.defaultQueryOptions(e);(O=(x=r.getDefaultOptions().queries)==null?void 0:x._experimental_beforeQuery)==null||O.call(x,o),o._optimisticResults=f?"isRestoring":"optimistic",Wt(o),_t(o,u),At(u);const[d]=S.useState(()=>new t(r,o)),g=d.getOptimisticResult(o);if(S.useSyncExternalStore(S.useCallback(y=>{const _=f?()=>{}:d.subscribe(mt.batchCalls(y));return d.updateResult(),_},[d,f]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),S.useEffect(()=>{d.setOptions(o,{listeners:!1})},[o,d]),zt(o,g))throw Nt(o,d,u);if(Vt({result:g,errorResetBoundary:u,throwOnError:o.throwOnError,query:r.getQueryCache().get(o.queryHash)}))throw g.error;return(P=(h=r.getDefaultOptions().queries)==null?void 0:h._experimental_afterQuery)==null||P.call(h,o,g),o.notifyOnChangeProps?g:d.trackResult(g)}function $t(e,t){return Ht(e,Dt)}function Jt({message:e,route:t="/"}){return E.jsxs(wt,{component:Qt,sx:{p:10,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[E.jsx(G.div,{variants:K().in,children:E.jsx(dt,{variant:"h3",sx:{mb:2},children:"Sorry, Something went wrong!"})}),E.jsx(G.div,{variants:K().in,children:E.jsx(dt,{sx:{color:"text.secondary"},children:e||`Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
            sure to check your spelling.`})}),E.jsx(G.div,{variants:K().in,children:E.jsx(It,{sx:{my:{xs:5,sm:10}}})}),t&&E.jsx(Tt,{component:Ft,href:t,size:"large",variant:"contained",children:"Go to back"})]})}export{Jt as E,$t as u};
