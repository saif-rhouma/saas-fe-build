import{dl as Z,r as x,C as V,dp as B,i as ss,j as a,e3 as w,S as I,c_ as ts,dn as es,dP as ns,T as as,aV as is,dm as rs,aW as os,H as ds}from"./index-1iE_pzdz.js";import{u as ls}from"./useMutation-BSVHjL8_.js";import{u as cs,a as us,b as _,c as P,p as ms,r as ps,g as fs,D as xs,M as gs,S as F,h as ks,v as hs,K as ys,T as Ss,d as Cs,e as K}from"./sortable.esm-Cf7DffY4.js";import{I as Ds,u as A,k as Is,K as bs,a as vs,c as Os,b as js}from"./kanban-drag-overlay-CMaACCgo.js";import{u as Es,m as G}from"./index-DXbFdVNI.js";import{E as Rs}from"./empty-content-BXDkrZG_.js";import{i as Ts}from"./image-8x8gVsOX.js";import{F as ws}from"./FormControlLabel-Df-QIfD8.js";import"./utils-km2FGkQ4.js";import"./Skeleton-BeIp2ynV.js";import"./ListItem-MIIjg71W.js";import"./AvatarGroup-BMfd3D5_.js";import"./InputBase-BadK7O_L.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";const N=!0,O=`${V.site.serverUrl}/api/orders-status`,_s={revalidateIfStale:N,revalidateOnFocus:N,revalidateOnReconnect:N};function As(){const{data:s,isLoading:d,error:u,isValidating:p}=Es(O,Z,_s);return x.useMemo(()=>{const g=(s==null?void 0:s.board.tasks)??{},f=(s==null?void 0:s.board.columns)??[];return{board:{tasks:g,columns:f},boardLoading:d,boardError:u,boardValidating:p,boardEmpty:!d&&!f.length}},[s==null?void 0:s.board.columns,s==null?void 0:s.board.tasks,u,d,p])}async function Ns(s){G(O,d=>{const{board:u}=d;return{...d,board:{...u,columns:s}}},!1);{const d={updateColumns:s};await B.post(O,d,{params:{endpoint:"move-column"}})}}async function M(s){G(O,d=>{const{board:u}=d;return{...d,board:{...u,tasks:s}}},!1)}function Ps({task:s,disabled:d,columnId:u,sx:p}){const D=ss(),{setNodeRef:g,listeners:f,isDragging:m,isSorting:y,transform:S,transition:j}=cs({id:s==null?void 0:s.id}),E=Fs(),R=m&&!E;return a.jsx(Ds,{ref:d?void 0:g,task:s,onClick:D.onTrue,stateProps:{transform:S,listeners:f,transition:j,sorting:y,dragging:m,fadeIn:R},sx:{...D.value&&{[`& .${Ts.root}`]:{opacity:.8}},...p}})}function Fs(){const[s,d]=x.useState(!1);return x.useEffect(()=>{const u=setTimeout(()=>d(!0),500);return()=>clearTimeout(u)},[]),s}const L={"--item-gap":"16px","--item-radius":"12px","--column-gap":"24px","--column-width":"calc(95% /3)","--column-radius":"16px","--column-padding":"20px 16px 16px 16px"};function Ks(){const{board:s,boardLoading:d,boardEmpty:u}=As(),[p,D]=x.useState(!0),g=x.useRef(!1),f=x.useRef(null),[m,y]=x.useState(null),S=s.columns.map(t=>t.id),j=m?S.includes(m):!1,E=us(_(Cs,{activationConstraint:{distance:5}}),_(Ss,{activationConstraint:{distance:5}}),_(ys,{coordinateGetter:Os})),R=x.useCallback(t=>{var i;if(m&&m in s.tasks)return P({...t,droppableContainers:t.droppableContainers.filter(r=>r.id in s.tasks)});const e=ms(t),o=e.length>0?e:ps(t);let n=fs(o,"id");if(n!=null){if(n in s.tasks){const r=s.tasks[n].map(l=>l.id);r.length>0&&(n=(i=P({...t,droppableContainers:t.droppableContainers.filter(l=>l.id!==n&&r.includes(l.id))})[0])==null?void 0:i.id)}return f.current=n,[{id:n}]}return g.current&&(f.current=m),f.current?[{id:f.current}]:[]},[m,s==null?void 0:s.tasks]),b=t=>t in s.tasks?t:Object.keys(s.tasks).find(e=>s.tasks[e].map(o=>o.id).includes(t));x.useEffect(()=>{requestAnimationFrame(()=>{g.current=!1})},[]);const q=({active:t})=>{y(t.id)},H=({active:t,over:e})=>{const o=e==null?void 0:e.id;if(o==null||t.id in s.tasks)return;const n=b(o),i=b(t.id);if(!(!n||!i)&&i!==n){const r=s.tasks[i].map(c=>c.id),l=s.tasks[n].map(c=>c.id),C=l.indexOf(o),k=r.indexOf(t.id);let h;if(o in s.tasks)h=l.length+1;else{const J=e&&t.rect.current.translated&&t.rect.current.translated.top>e.rect.top+e.rect.height?1:0;h=C>=0?C+J:l.length+1}g.current=!0;const v={...s.tasks,[i]:s.tasks[i].filter(c=>c.id!==t.id),[n]:[...s.tasks[n].slice(0,h),s.tasks[i][k],...s.tasks[n].slice(h,s.tasks[n].length)]};M(v)}},U=()=>{s.columns.forEach(t=>{for(let e=0;e<s.tasks[t.id].length;e+=1)t.name==="In Process"&&(s.tasks[t.id][e].status="InProcess"),t.name==="Ready to Deliver"&&(s.tasks[t.id][e].status="Ready"),t.name==="Delivered"&&(s.tasks[t.id][e].status="Delivered")})},W=async t=>{const e=[];s.columns.forEach(n=>{e.push(...s.tasks[n.id])});const o=e.find(n=>n.id===t.id);if(o){const n={status:o.status};o.status==="Delivered"?(n.deliveryDate=os(),s.columns.forEach(i=>{for(let r=0;r<s.tasks[i.id].length;r+=1)s.tasks[i.id][r].id===o.id&&(s.tasks[i.id][r].deliveryDate=n.deliveryDate)})):(n.deliveryDate=null,o.deliveryDate&&s.columns.forEach(i=>{for(let r=0;r<s.tasks[i.id].length;r+=1)s.tasks[i.id][r].id===o.id&&(s.tasks[i.id][r].deliveryDate=null)})),await Y({id:o.id,payload:n})}},Q=({active:t,over:e})=>{let o;if(t.id in s.tasks&&(e!=null&&e.id)){const l=S.indexOf(t.id),C=S.indexOf(e.id),k=K(s.columns,l,C);Ns(k)}const n=b(t.id);if(!n){y(null);return}const i=e==null?void 0:e.id;if(i==null){y(null);return}const r=b(i);if(r){const l=s.tasks[n].map(c=>c.id),C=s.tasks[r].map(c=>c.id),k=l.indexOf(t.id),h=C.indexOf(i),v=s.tasks[n][k];if(k!==h){const c={...s.tasks,[r]:K(s.tasks[r],k,h)};M(c)}o={id:v.id,payload:{status:v.status}}}U(),W(o),y(null)},$=a.jsx(I,{direction:"row",alignItems:"flex-start",sx:{gap:"var(--column-gap)"},children:a.jsx(js,{})}),z=a.jsx(Rs,{filled:!0,sx:{py:10,maxHeight:{md:480}}}),X=a.jsxs(xs,{id:"dnd-kanban",sensors:E,collisionDetection:R,measuring:{droppable:{strategy:gs.Always}},onDragStart:A(w.ORDER_STATUS_SCREEN_DRAG_AND_DROP)&&q,onDragOver:A(w.ORDER_STATUS_SCREEN_DRAG_AND_DROP)&&H,onDragEnd:A(w.ORDER_STATUS_SCREEN_DRAG_AND_DROP)&&Q,children:[a.jsx(I,{sx:{flex:"1 1 auto",overflowX:"auto"},children:a.jsx(I,{sx:{pb:3,display:"unset",...p&&{minHeight:0,display:"flex",flex:"1 1 auto"}},children:a.jsx(I,{direction:"row",sx:{gap:"var(--column-gap)",...p&&{minHeight:0,flex:"1 1 auto",[`& .${Is.columnList}`]:{...ts,flex:"1 1 auto"}}},children:a.jsx(F,{items:[S],strategy:ks,children:s==null?void 0:s.columns.map(t=>a.jsx(bs,{column:t,tasks:s.tasks[t.id],children:a.jsx(F,{items:s.tasks[t.id],strategy:hs,children:s.tasks[t.id].map(e=>a.jsx(Ps,{task:e,columnId:t.id,disabled:j},e.id))})},t.id))})})})}),a.jsx(vs,{columns:s==null?void 0:s.columns,tasks:s==null?void 0:s.tasks,activeId:m,sx:L})]}),T=es(),{mutate:Y}=ls({mutationFn:({id:t,payload:e})=>B.patch(rs.orderStatus.edit+t,e),onSuccess:async()=>{await T.invalidateQueries({queryKey:["orders"]}),await T.invalidateQueries({queryKey:["orders","analytics"]}),await T.invalidateQueries({queryKey:["orders-status"]})},onSettled:async()=>{},onError:t=>{console.log(t)}});return a.jsxs(ns,{maxWidth:!1,sx:{...L,pb:0,pl:{sm:3},pr:{sm:0},flex:"1 1 0",display:"flex",overflow:"hidden",flexDirection:"column"},children:[a.jsxs(I,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{pr:{sm:3},mb:{xs:3,md:5}},children:[a.jsx(as,{variant:"h4",children:"Orders Status"}),a.jsx(ws,{label:"Column fixed",labelPlacement:"start",control:a.jsx(is,{checked:p,onChange:t=>{D(t.target.checked)},inputProps:{id:"column-fixed-switch"}})})]}),d?$:a.jsx(a.Fragment,{children:u?z:X})]})}const Ms={title:`Order Status | Dashboard - ${V.site.name}`};function st(){return a.jsxs(a.Fragment,{children:[a.jsx(ds,{children:a.jsxs("title",{children:[" ",Ms.title]})}),a.jsx(Ks,{})]})}export{st as default};
