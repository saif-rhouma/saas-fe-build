import{dl as Z,r as x,C as B,dp as G,i as ss,j as a,e4 as w,S as I,c_ as ts,dn as es,dQ as ns,T as as,aT as is,dm as os,aU as rs,H as ds}from"./index-CC8ZOXtA.js";import{u as ls}from"./useMutation-DdAIUrKi.js";import{u as cs,a as us,b as _,c as P,p as ms,r as fs,g as ps,D as xs,M as gs,S as F,h as ks,v as hs,K as ys,T as Ss,d as Cs,e as K}from"./sortable.esm-CG8pmxwE.js";import{I as Ds,u as A,k as Is,K as bs,a as vs,c as Os,b as js}from"./kanban-drag-overlay-DXkOMt2Z.js";import{u as Es,m as U}from"./index-DcKZLDCF.js";import{E as Rs}from"./empty-content-CE7ZD1Zt.js";import{i as Ts}from"./image-BlOEV0mO.js";import{F as ws}from"./FormControlLabel-DSmn4eUx.js";import"./utils-km2FGkQ4.js";import"./Skeleton-BazZWwm2.js";import"./ListItem-DjRfQpUp.js";import"./AvatarGroup-D5MeQNj0.js";import"./InputBase-Lx9oX8L4.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";const N=!0,O=`${B.site.serverUrl}/api/orders-status`,_s={revalidateIfStale:N,revalidateOnFocus:N,revalidateOnReconnect:N};function As(){const{data:s,isLoading:d,error:u,isValidating:f}=Es(O,Z,_s);return x.useMemo(()=>{const g=(s==null?void 0:s.board.tasks)??{},p=(s==null?void 0:s.board.columns)??[];return{board:{tasks:g,columns:p,colors:{"In Process":"warning","Ready to Deliver":"info",Delivered:"success"}},boardLoading:d,boardError:u,boardValidating:f,boardEmpty:!d&&!p.length}},[s==null?void 0:s.board.columns,s==null?void 0:s.board.tasks,u,d,f])}async function Ns(s){U(O,d=>{const{board:u}=d;return{...d,board:{...u,columns:s}}},!1);{const d={updateColumns:s};await G.post(O,d,{params:{endpoint:"move-column"}})}}async function M(s){U(O,d=>{const{board:u}=d;return{...d,board:{...u,tasks:s}}},!1)}function Ps({task:s,disabled:d,columnId:u,sx:f}){const D=ss(),{setNodeRef:g,listeners:p,isDragging:m,isSorting:y,transform:S,transition:j}=cs({id:s==null?void 0:s.id}),E=Fs(),R=m&&!E;return a.jsx(Ds,{ref:d?void 0:g,task:s,onClick:D.onTrue,stateProps:{transform:S,listeners:p,transition:j,sorting:y,dragging:m,fadeIn:R},sx:{...D.value&&{[`& .${Ts.root}`]:{opacity:.8}},...f}})}function Fs(){const[s,d]=x.useState(!1);return x.useEffect(()=>{const u=setTimeout(()=>d(!0),500);return()=>clearTimeout(u)},[]),s}const L={"--item-gap":"16px","--item-radius":"12px","--column-gap":"24px","--column-width":"calc(95% /3)","--column-radius":"16px","--column-padding":"20px 16px 16px 16px"};function Ks(){const{board:s,boardLoading:d,boardEmpty:u}=As(),[f,D]=x.useState(!0),g=x.useRef(!1),p=x.useRef(null),[m,y]=x.useState(null),S=s.columns.map(t=>t.id),j=m?S.includes(m):!1,E=us(_(Cs,{activationConstraint:{distance:5}}),_(Ss,{activationConstraint:{distance:5}}),_(ys,{coordinateGetter:Os})),R=x.useCallback(t=>{var i;if(m&&m in s.tasks)return P({...t,droppableContainers:t.droppableContainers.filter(o=>o.id in s.tasks)});const e=ms(t),r=e.length>0?e:fs(t);let n=ps(r,"id");if(n!=null){if(n in s.tasks){const o=s.tasks[n].map(l=>l.id);o.length>0&&(n=(i=P({...t,droppableContainers:t.droppableContainers.filter(l=>l.id!==n&&o.includes(l.id))})[0])==null?void 0:i.id)}return p.current=n,[{id:n}]}return g.current&&(p.current=m),p.current?[{id:p.current}]:[]},[m,s==null?void 0:s.tasks]),b=t=>t in s.tasks?t:Object.keys(s.tasks).find(e=>s.tasks[e].map(r=>r.id).includes(t));x.useEffect(()=>{requestAnimationFrame(()=>{g.current=!1})},[]);const V=({active:t})=>{y(t.id)},q=({active:t,over:e})=>{const r=e==null?void 0:e.id;if(r==null||t.id in s.tasks)return;const n=b(r),i=b(t.id);if(!(!n||!i)&&i!==n){const o=s.tasks[i].map(c=>c.id),l=s.tasks[n].map(c=>c.id),C=l.indexOf(r),k=o.indexOf(t.id);let h;if(r in s.tasks)h=l.length+1;else{const J=e&&t.rect.current.translated&&t.rect.current.translated.top>e.rect.top+e.rect.height?1:0;h=C>=0?C+J:l.length+1}g.current=!0;const v={...s.tasks,[i]:s.tasks[i].filter(c=>c.id!==t.id),[n]:[...s.tasks[n].slice(0,h),s.tasks[i][k],...s.tasks[n].slice(h,s.tasks[n].length)]};M(v)}},H=()=>{s.columns.forEach(t=>{for(let e=0;e<s.tasks[t.id].length;e+=1)t.name==="In Process"&&(s.tasks[t.id][e].status="InProcess"),t.name==="Ready to Deliver"&&(s.tasks[t.id][e].status="Ready"),t.name==="Delivered"&&(s.tasks[t.id][e].status="Delivered")})},Q=async t=>{const e=[];s.columns.forEach(n=>{e.push(...s.tasks[n.id])});const r=e.find(n=>n.id===t.id);if(r){const n={status:r.status};r.status==="Delivered"?(n.deliveryDate=rs(),s.columns.forEach(i=>{for(let o=0;o<s.tasks[i.id].length;o+=1)s.tasks[i.id][o].id===r.id&&(s.tasks[i.id][o].deliveryDate=n.deliveryDate)})):(n.deliveryDate=null,r.deliveryDate&&s.columns.forEach(i=>{for(let o=0;o<s.tasks[i.id].length;o+=1)s.tasks[i.id][o].id===r.id&&(s.tasks[i.id][o].deliveryDate=null)})),await Y({id:r.id,payload:n})}},W=({active:t,over:e})=>{let r;if(t.id in s.tasks&&(e!=null&&e.id)){const l=S.indexOf(t.id),C=S.indexOf(e.id),k=K(s.columns,l,C);Ns(k)}const n=b(t.id);if(!n){y(null);return}const i=e==null?void 0:e.id;if(i==null){y(null);return}const o=b(i);if(o){const l=s.tasks[n].map(c=>c.id),C=s.tasks[o].map(c=>c.id),k=l.indexOf(t.id),h=C.indexOf(i),v=s.tasks[n][k];if(k!==h){const c={...s.tasks,[o]:K(s.tasks[o],k,h)};M(c)}r={id:v.id,payload:{status:v.status}}}H(),Q(r),y(null)},$=a.jsx(I,{direction:"row",alignItems:"flex-start",sx:{gap:"var(--column-gap)"},children:a.jsx(js,{})}),z=a.jsx(Rs,{filled:!0,sx:{py:10,maxHeight:{md:480}}}),X=a.jsxs(xs,{id:"dnd-kanban",sensors:E,collisionDetection:R,measuring:{droppable:{strategy:gs.Always}},onDragStart:A(w.ORDER_STATUS_SCREEN_DRAG_AND_DROP)&&V,onDragOver:A(w.ORDER_STATUS_SCREEN_DRAG_AND_DROP)&&q,onDragEnd:A(w.ORDER_STATUS_SCREEN_DRAG_AND_DROP)&&W,children:[a.jsx(I,{sx:{flex:"1 1 auto",overflowX:"auto"},children:a.jsx(I,{sx:{pb:3,display:"unset",...f&&{minHeight:0,display:"flex",flex:"1 1 auto"}},children:a.jsx(I,{direction:"row",sx:{gap:"var(--column-gap)",...f&&{minHeight:0,flex:"1 1 auto",[`& .${Is.columnList}`]:{...ts,flex:"1 1 auto"}}},children:a.jsx(F,{items:[S],strategy:ks,children:s==null?void 0:s.columns.map(t=>a.jsx(bs,{column:t,tasks:s.tasks[t.id],colors:s.colors,children:a.jsx(F,{items:s.tasks[t.id],strategy:hs,children:s.tasks[t.id].map(e=>a.jsx(Ps,{task:e,columnId:t.id,disabled:j},e.id))})},t.id))})})})}),a.jsx(vs,{columns:s==null?void 0:s.columns,tasks:s==null?void 0:s.tasks,activeId:m,sx:L})]}),T=es(),{mutate:Y}=ls({mutationFn:({id:t,payload:e})=>G.patch(os.orderStatus.edit+t,e),onSuccess:async()=>{await T.invalidateQueries({queryKey:["orders"]}),await T.invalidateQueries({queryKey:["orders","analytics"]}),await T.invalidateQueries({queryKey:["orders-status"]})},onSettled:async()=>{},onError:t=>{console.log(t)}});return a.jsxs(ns,{maxWidth:!1,sx:{...L,pb:0,pl:{sm:3},pr:{sm:0},flex:"1 1 0",display:"flex",overflow:"hidden",flexDirection:"column"},children:[a.jsxs(I,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{pr:{sm:3},mb:{xs:3,md:5}},children:[a.jsx(as,{variant:"h4",children:"Orders Status"}),a.jsx(ws,{label:"Column fixed",labelPlacement:"start",control:a.jsx(is,{checked:f,onChange:t=>{D(t.target.checked)},inputProps:{id:"column-fixed-switch"}})})]}),d?$:a.jsx(a.Fragment,{children:u?z:X})]})}const Ms={title:`Order Status | Dashboard - ${B.site.name}`};function st(){return a.jsxs(a.Fragment,{children:[a.jsx(ds,{children:a.jsxs("title",{children:[" ",Ms.title]})}),a.jsx(Ks,{})]})}export{st as default};
