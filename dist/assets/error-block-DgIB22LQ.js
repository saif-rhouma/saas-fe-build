var ht=e=>{throw TypeError(e)};var H=(e,t,i)=>t.has(e)||ht("Cannot "+i);var s=(e,t,i)=>(H(e,t,"read from private field"),i?i.call(e):t.get(e)),p=(e,t,i)=>t.has(e)?ht("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),c=(e,t,i,r)=>(H(e,t,"write to private field"),r?r.call(e,i):t.set(e,i),i),l=(e,t,i)=>(H(e,t,"access private method"),i);import{dR as Rt,ei as C,dS as J,ej as A,ek as Ct,el as ct,em as ut,en as xt,eo as St,ep as Ot,eq as lt,dV as vt,r as O,dN as Et,j as E,f as Qt,M as wt,m as G,T as dt,eb as It,e as Tt,R as Ft}from"./index-BjIn7_qX.js";import{s as Ut}from"./utils-km2FGkQ4.js";import{v as K}from"./bounce-BSK3KHpz.js";var v,n,B,m,I,U,R,k,D,j,T,F,Q,M,a,L,X,Y,Z,$,q,tt,et,bt,mt,Dt=(mt=class extends Rt{constructor(t,i){super();p(this,a);p(this,v);p(this,n);p(this,B);p(this,m);p(this,I);p(this,U);p(this,R);p(this,k);p(this,D);p(this,j);p(this,T);p(this,F);p(this,Q);p(this,M,new Set);this.options=i,c(this,v,t),c(this,R,null),this.bindMethods(),this.setOptions(i)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,n).addObserver(this),ft(s(this,n),this.options)?l(this,a,L).call(this):this.updateResult(),l(this,a,$).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return st(s(this,n),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return st(s(this,n),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,l(this,a,q).call(this),l(this,a,tt).call(this),s(this,n).removeObserver(this)}setOptions(t,i){const r=this.options,f=s(this,n);if(this.options=s(this,v).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof C(this.options.enabled,s(this,n))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");l(this,a,et).call(this),s(this,n).setOptions(this.options),r._defaulted&&!J(this.options,r)&&s(this,v).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,n),observer:this});const u=this.hasListeners();u&&pt(s(this,n),f,this.options,r)&&l(this,a,L).call(this),this.updateResult(i),u&&(s(this,n)!==f||C(this.options.enabled,s(this,n))!==C(r.enabled,s(this,n))||A(this.options.staleTime,s(this,n))!==A(r.staleTime,s(this,n)))&&l(this,a,X).call(this);const o=l(this,a,Y).call(this);u&&(s(this,n)!==f||C(this.options.enabled,s(this,n))!==C(r.enabled,s(this,n))||o!==s(this,Q))&&l(this,a,Z).call(this,o)}getOptimisticResult(t){const i=s(this,v).getQueryCache().build(s(this,v),t),r=this.createResult(i,t);return Mt(this,r)&&(c(this,m,r),c(this,U,this.options),c(this,I,s(this,n).state)),r}getCurrentResult(){return s(this,m)}trackResult(t,i){const r={};return Object.keys(t).forEach(f=>{Object.defineProperty(r,f,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(f),i==null||i(f),t[f])})}),r}trackProp(t){s(this,M).add(t)}getCurrentQuery(){return s(this,n)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const i=s(this,v).defaultQueryOptions(t),r=s(this,v).getQueryCache().build(s(this,v),i);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,i))}fetch(t){return l(this,a,L).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,m)))}createResult(t,i){var ot;const r=s(this,n),f=this.options,u=s(this,m),o=s(this,I),d=s(this,U),x=t!==r?t.state:s(this,B),{state:S}=t;let h={...S},P=!1,b;if(i._optimisticResults){const y=this.hasListeners(),W=!y&&ft(t,i),gt=y&&pt(t,r,i,f);(W||gt)&&(h={...h,...Ot(S.data,t.options)}),i._optimisticResults==="isRestoring"&&(h.fetchStatus="idle")}let{error:_,errorUpdatedAt:rt,status:w}=h;if(i.select&&h.data!==void 0)if(u&&h.data===(o==null?void 0:o.data)&&i.select===s(this,k))b=s(this,D);else try{c(this,k,i.select),b=i.select(h.data),b=lt(u==null?void 0:u.data,b,i),c(this,D,b),c(this,R,null)}catch(y){c(this,R,y)}else b=h.data;if(i.placeholderData!==void 0&&b===void 0&&w==="pending"){let y;if(u!=null&&u.isPlaceholderData&&i.placeholderData===(d==null?void 0:d.placeholderData))y=u.data;else if(y=typeof i.placeholderData=="function"?i.placeholderData((ot=s(this,j))==null?void 0:ot.state.data,s(this,j)):i.placeholderData,i.select&&y!==void 0)try{y=i.select(y),c(this,R,null)}catch(W){c(this,R,W)}y!==void 0&&(w="success",b=lt(u==null?void 0:u.data,y,i),P=!0)}s(this,R)&&(_=s(this,R),b=s(this,D),rt=Date.now(),w="error");const N=h.fetchStatus==="fetching",V=w==="pending",z=w==="error",nt=V&&N,at=b!==void 0;return{status:w,fetchStatus:h.fetchStatus,isPending:V,isSuccess:w==="success",isError:z,isInitialLoading:nt,isLoading:nt,data:b,dataUpdatedAt:h.dataUpdatedAt,error:_,errorUpdatedAt:rt,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>x.dataUpdateCount||h.errorUpdateCount>x.errorUpdateCount,isFetching:N,isRefetching:N&&!V,isLoadingError:z&&!at,isPaused:h.fetchStatus==="paused",isPlaceholderData:P,isRefetchError:z&&at,isStale:it(t,i),refetch:this.refetch}}updateResult(t){const i=s(this,m),r=this.createResult(s(this,n),this.options);if(c(this,I,s(this,n).state),c(this,U,this.options),s(this,I).data!==void 0&&c(this,j,s(this,n)),J(r,i))return;c(this,m,r);const f={},u=()=>{if(!i)return!0;const{notifyOnChangeProps:o}=this.options,d=typeof o=="function"?o():o;if(d==="all"||!d&&!s(this,M).size)return!0;const g=new Set(d??s(this,M));return this.options.throwOnError&&g.add("error"),Object.keys(s(this,m)).some(x=>{const S=x;return s(this,m)[S]!==i[S]&&g.has(S)})};(t==null?void 0:t.listeners)!==!1&&u()&&(f.listeners=!0),l(this,a,bt).call(this,{...f,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&l(this,a,$).call(this)}},v=new WeakMap,n=new WeakMap,B=new WeakMap,m=new WeakMap,I=new WeakMap,U=new WeakMap,R=new WeakMap,k=new WeakMap,D=new WeakMap,j=new WeakMap,T=new WeakMap,F=new WeakMap,Q=new WeakMap,M=new WeakMap,a=new WeakSet,L=function(t){l(this,a,et).call(this);let i=s(this,n).fetch(this.options,t);return t!=null&&t.throwOnError||(i=i.catch(Ct)),i},X=function(){l(this,a,q).call(this);const t=A(this.options.staleTime,s(this,n));if(ct||s(this,m).isStale||!ut(t))return;const r=xt(s(this,m).dataUpdatedAt,t)+1;c(this,T,setTimeout(()=>{s(this,m).isStale||this.updateResult()},r))},Y=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,n)):this.options.refetchInterval)??!1},Z=function(t){l(this,a,tt).call(this),c(this,Q,t),!(ct||C(this.options.enabled,s(this,n))===!1||!ut(s(this,Q))||s(this,Q)===0)&&c(this,F,setInterval(()=>{(this.options.refetchIntervalInBackground||St.isFocused())&&l(this,a,L).call(this)},s(this,Q)))},$=function(){l(this,a,X).call(this),l(this,a,Z).call(this,l(this,a,Y).call(this))},q=function(){s(this,T)&&(clearTimeout(s(this,T)),c(this,T,void 0))},tt=function(){s(this,F)&&(clearInterval(s(this,F)),c(this,F,void 0))},et=function(){const t=s(this,v).getQueryCache().build(s(this,v),this.options);if(t===s(this,n))return;const i=s(this,n);c(this,n,t),c(this,B,t.state),this.hasListeners()&&(i==null||i.removeObserver(this),t.addObserver(this))},bt=function(t){vt.batch(()=>{t.listeners&&this.listeners.forEach(i=>{i(s(this,m))}),s(this,v).getQueryCache().notify({query:s(this,n),type:"observerResultsUpdated"})})},mt);function jt(e,t){return C(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function ft(e,t){return jt(e,t)||e.state.data!==void 0&&st(e,t,t.refetchOnMount)}function st(e,t,i){if(C(t.enabled,e)!==!1){const r=typeof i=="function"?i(e):i;return r==="always"||r!==!1&&it(e,t)}return!1}function pt(e,t,i,r){return(e!==t||C(r.enabled,e)===!1)&&(!i.suspense||e.state.status!=="error")&&it(e,i)}function it(e,t){return C(t.enabled,e)!==!1&&e.isStaleByTime(A(t.staleTime,e))}function Mt(e,t){return!J(e.getCurrentResult(),t)}var yt=O.createContext(!1),Pt=()=>O.useContext(yt);yt.Provider;function Lt(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Bt=O.createContext(Lt()),kt=()=>O.useContext(Bt),_t=(e,t)=>{(e.suspense||e.throwOnError)&&(t.isReset()||(e.retryOnMount=!1))},At=e=>{O.useEffect(()=>{e.clearReset()},[e])},Nt=({result:e,errorResetBoundary:t,throwOnError:i,query:r})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&Ut(i,[e.error,r]),Vt=e=>{e.suspense&&(typeof e.staleTime!="number"&&(e.staleTime=1e3),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3)))},zt=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,Wt=(e,t,i)=>t.fetchOptimistic(e).catch(()=>{i.clearReset()});function Ht(e,t,i){var x,S,h,P;const r=Et(),f=Pt(),u=kt(),o=r.defaultQueryOptions(e);(S=(x=r.getDefaultOptions().queries)==null?void 0:x._experimental_beforeQuery)==null||S.call(x,o),o._optimisticResults=f?"isRestoring":"optimistic",Vt(o),_t(o,u),At(u);const[d]=O.useState(()=>new t(r,o)),g=d.getOptimisticResult(o);if(O.useSyncExternalStore(O.useCallback(b=>{const _=f?()=>{}:d.subscribe(vt.batchCalls(b));return d.updateResult(),_},[d,f]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),O.useEffect(()=>{d.setOptions(o,{listeners:!1})},[o,d]),zt(o,g))throw Wt(o,d,u);if(Nt({result:g,errorResetBoundary:u,throwOnError:o.throwOnError,query:r.getQueryCache().get(o.queryHash)}))throw g.error;return(P=(h=r.getDefaultOptions().queries)==null?void 0:h._experimental_afterQuery)==null||P.call(h,o,g),o.notifyOnChangeProps?g:d.trackResult(g)}function Zt(e,t){return Ht(e,Dt)}function $t({message:e,route:t="/"}){return E.jsxs(Qt,{component:wt,sx:{p:10,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[E.jsx(G.div,{variants:K().in,children:E.jsx(dt,{variant:"h3",sx:{mb:2},children:"Sorry, Something went wrong!"})}),E.jsx(G.div,{variants:K().in,children:E.jsx(dt,{sx:{color:"text.secondary"},children:e||`Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
            sure to check your spelling.`})}),E.jsx(G.div,{variants:K().in,children:E.jsx(It,{sx:{my:{xs:5,sm:10}}})}),t&&E.jsx(Tt,{component:Ft,href:t,size:"large",variant:"contained",children:"Go to back"})]})}export{$t as E,Zt as u};
