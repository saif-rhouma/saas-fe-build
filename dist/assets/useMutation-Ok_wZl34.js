var x=i=>{throw TypeError(i)};var C=(i,t,s)=>t.has(i)||x("Cannot "+s);var e=(i,t,s)=>(C(i,t,"read from private field"),s?s.call(i):t.get(i)),b=(i,t,s)=>t.has(i)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,s),p=(i,t,s,r)=>(C(i,t,"write to private field"),r?r.call(i,s):t.set(i,s),s),m=(i,t,s)=>(C(i,t,"access private method"),s);import{dr as U,ds as k,dt as w,du as q,dv as R,dn as L,r as f}from"./index-DP6a2E9k.js";import{n as j,s as A}from"./utils-km2FGkQ4.js";var a,l,o,h,n,g,M,K,D=(K=class extends U{constructor(t,s){super();b(this,n);b(this,a);b(this,l);b(this,o);b(this,h);p(this,a,t),this.setOptions(s),this.bindMethods(),m(this,n,g).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var r;const s=this.options;this.options=e(this,a).defaultMutationOptions(t),k(this.options,s)||e(this,a).getMutationCache().notify({type:"observerOptionsUpdated",mutation:e(this,o),observer:this}),s!=null&&s.mutationKey&&this.options.mutationKey&&w(s.mutationKey)!==w(this.options.mutationKey)?this.reset():((r=e(this,o))==null?void 0:r.state.status)==="pending"&&e(this,o).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=e(this,o))==null||t.removeObserver(this)}onMutationUpdate(t){m(this,n,g).call(this),m(this,n,M).call(this,t)}getCurrentResult(){return e(this,l)}reset(){var t;(t=e(this,o))==null||t.removeObserver(this),p(this,o,void 0),m(this,n,g).call(this),m(this,n,M).call(this)}mutate(t,s){var r;return p(this,h,s),(r=e(this,o))==null||r.removeObserver(this),p(this,o,e(this,a).getMutationCache().build(e(this,a),this.options)),e(this,o).addObserver(this),e(this,o).execute(t)}},a=new WeakMap,l=new WeakMap,o=new WeakMap,h=new WeakMap,n=new WeakSet,g=function(){var s;const t=((s=e(this,o))==null?void 0:s.state)??q();p(this,l,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},M=function(t){R.batch(()=>{var s,r,u,v,d,y,E,S;if(e(this,h)&&this.hasListeners()){const c=e(this,l).variables,O=e(this,l).context;(t==null?void 0:t.type)==="success"?((r=(s=e(this,h)).onSuccess)==null||r.call(s,t.data,c,O),(v=(u=e(this,h)).onSettled)==null||v.call(u,t.data,null,c,O)):(t==null?void 0:t.type)==="error"&&((y=(d=e(this,h)).onError)==null||y.call(d,t.error,c,O),(S=(E=e(this,h)).onSettled)==null||S.call(E,void 0,t.error,c,O))}this.listeners.forEach(c=>{c(e(this,l))})})},K);function T(i,t){const s=L(),[r]=f.useState(()=>new D(s,i));f.useEffect(()=>{r.setOptions(i)},[r,i]);const u=f.useSyncExternalStore(f.useCallback(d=>r.subscribe(R.batchCalls(d)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),v=f.useCallback((d,y)=>{r.mutate(d,y).catch(j)},[r]);if(u.error&&A(r.options.throwOnError,[u.error]))throw u.error;return{...u,mutate:v,mutateAsync:u.mutate}}export{T as u};
