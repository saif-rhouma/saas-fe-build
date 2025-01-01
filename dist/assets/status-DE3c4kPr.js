import{dm as ss,r as p,C as q,dq as B,Y as ts,j as i,br as es,e4 as w,S as I,c$ as ns,dp as as,dQ as is,T as os,aa as rs,dn as ds,ab as ls,H as cs}from"./index-BrVky5Gg.js";import{u as us}from"./useMutation-CE0P_ta-.js";import{u as ms,a as ps,b as _,c as N,p as fs,r as xs,g as gs,D as ks,M as hs,S as P,h as ys,v as Ss,K as Ds,T as Cs,d as bs,e as K}from"./sortable.esm-DWSfxw23.js";import{I as Is,u as A,k as vs,K as Os,a as js,c as Es,b as Rs}from"./kanban-drag-overlay-Ca5HarMn.js";import{u as Ts,m as G}from"./index-DGMueBPl.js";import{E as ws}from"./empty-content-TcyibYvM.js";import{i as _s}from"./image-C-59YYlQ.js";import{F as As}from"./FormControlLabel-0HOCsOrO.js";import"./utils-km2FGkQ4.js";import"./Skeleton-DfaZnOA_.js";import"./ListItem-CVfDDPgr.js";import"./AvatarGroup-BskNT-rd.js";import"./InputBase-C8xLxBIT.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";const F=!0,j=`${q.site.serverUrl}/api/orders-status`,Fs={revalidateIfStale:F,revalidateOnFocus:F,revalidateOnReconnect:F};function Ns(){const{data:a,isLoading:s,error:u,isValidating:g}=Ts(j,ss,Fs);return p.useMemo(()=>{const b=(a==null?void 0:a.board.tasks)??{},f=(a==null?void 0:a.board.columns)??[];return{board:{tasks:b,columns:f,colors:{"In Process":"warning","Ready to Deliver":"info",Delivered:"success"}},boardLoading:s,boardError:u,boardValidating:g,boardEmpty:!s&&!f.length}},[a==null?void 0:a.board.columns,a==null?void 0:a.board.tasks,u,s,g])}async function Ps(a){G(j,s=>{const{board:u}=s;return{...s,board:{...u,columns:a}}},!1);{const s={updateColumns:a};await B.post(j,s,{params:{endpoint:"move-column"}})}}async function M(a){G(j,s=>{const{board:u}=s;return{...s,board:{...u,tasks:a}}},!1)}function Ks({task:a,disabled:s,columnId:u,sx:g}){const k=ts(),{setNodeRef:b,listeners:f,isDragging:x,isSorting:m,transform:S,transition:D}=ms({id:a==null?void 0:a.id}),E=Ms(),R=x&&!E;return i.jsx(Is,{ref:s?void 0:b,task:a,onClick:k.onTrue,stateProps:{transform:S,listeners:f,transition:D,sorting:m,dragging:x,fadeIn:R},sx:{...k.value&&{[`& .${_s.root}`]:{opacity:.8}},...g}})}function Ms(){const[a,s]=p.useState(!1);return p.useEffect(()=>{const u=setTimeout(()=>s(!0),500);return()=>clearTimeout(u)},[]),a}const L={"--item-gap":"16px","--item-radius":"12px","--column-gap":"24px","--column-width":"calc(95% /3)","--column-radius":"16px","--column-padding":"20px 16px 16px 16px"};function Ls(){const{t:a}=es("orders-status"),{board:s,boardLoading:u,boardEmpty:g}=Ns(),[k,b]=p.useState(!0),f=p.useRef(!1),x=p.useRef(null),[m,S]=p.useState(null),D=s.columns.map(t=>t.id),E=m?D.includes(m):!1,R=ps(_(bs,{activationConstraint:{distance:5}}),_(Cs,{activationConstraint:{distance:5}}),_(Ds,{coordinateGetter:Es})),V=p.useCallback(t=>{var o;if(m&&m in s.tasks)return N({...t,droppableContainers:t.droppableContainers.filter(r=>r.id in s.tasks)});const e=fs(t),d=e.length>0?e:xs(t);let n=gs(d,"id");if(n!=null){if(n in s.tasks){const r=s.tasks[n].map(l=>l.id);r.length>0&&(n=(o=N({...t,droppableContainers:t.droppableContainers.filter(l=>l.id!==n&&r.includes(l.id))})[0])==null?void 0:o.id)}return x.current=n,[{id:n}]}return f.current&&(x.current=m),x.current?[{id:x.current}]:[]},[m,s==null?void 0:s.tasks]),v=t=>t in s.tasks?t:Object.keys(s.tasks).find(e=>s.tasks[e].map(d=>d.id).includes(t));p.useEffect(()=>{requestAnimationFrame(()=>{f.current=!1})},[]);const H=({active:t})=>{S(t.id)},Q=({active:t,over:e})=>{const d=e==null?void 0:e.id;if(d==null||t.id in s.tasks)return;const n=v(d),o=v(t.id);if(!(!n||!o)&&o!==n){const r=s.tasks[o].map(c=>c.id),l=s.tasks[n].map(c=>c.id),C=l.indexOf(d),h=r.indexOf(t.id);let y;if(d in s.tasks)y=l.length+1;else{const Z=e&&t.rect.current.translated&&t.rect.current.translated.top>e.rect.top+e.rect.height?1:0;y=C>=0?C+Z:l.length+1}f.current=!0;const O={...s.tasks,[o]:s.tasks[o].filter(c=>c.id!==t.id),[n]:[...s.tasks[n].slice(0,y),s.tasks[o][h],...s.tasks[n].slice(y,s.tasks[n].length)]};M(O)}},U=()=>{s.columns.forEach(t=>{for(let e=0;e<s.tasks[t.id].length;e+=1)t.name==="In Process"&&(s.tasks[t.id][e].status="InProcess"),t.name==="Ready to Deliver"&&(s.tasks[t.id][e].status="Ready"),t.name==="Delivered"&&(s.tasks[t.id][e].status="Delivered")})},$=async t=>{const e=[];s.columns.forEach(n=>{e.push(...s.tasks[n.id])});const d=e.find(n=>n.id===t.id);if(d){const n={status:d.status};d.status==="Delivered"?(n.deliveryDate=ls(),s.columns.forEach(o=>{for(let r=0;r<s.tasks[o.id].length;r+=1)s.tasks[o.id][r].id===d.id&&(s.tasks[o.id][r].deliveryDate=n.deliveryDate)})):(n.deliveryDate=null,d.deliveryDate&&s.columns.forEach(o=>{for(let r=0;r<s.tasks[o.id].length;r+=1)s.tasks[o.id][r].id===d.id&&(s.tasks[o.id][r].deliveryDate=null)})),await J({id:d.id,payload:n})}},W=({active:t,over:e})=>{let d;if(t.id in s.tasks&&(e!=null&&e.id)){const l=D.indexOf(t.id),C=D.indexOf(e.id),h=K(s.columns,l,C);Ps(h)}const n=v(t.id);if(!n){S(null);return}const o=e==null?void 0:e.id;if(o==null){S(null);return}const r=v(o);if(r){const l=s.tasks[n].map(c=>c.id),C=s.tasks[r].map(c=>c.id),h=l.indexOf(t.id),y=C.indexOf(o),O=s.tasks[n][h];if(h!==y){const c={...s.tasks,[r]:K(s.tasks[r],h,y)};M(c)}d={id:O.id,payload:{status:O.status}}}U(),$(d),S(null)},z=i.jsx(I,{direction:"row",alignItems:"flex-start",sx:{gap:"var(--column-gap)"},children:i.jsx(Rs,{})}),Y=i.jsx(ws,{filled:!0,sx:{py:10,maxHeight:{md:480}}}),X=i.jsxs(ks,{id:"dnd-kanban",sensors:R,collisionDetection:V,measuring:{droppable:{strategy:hs.Always}},onDragStart:A(w.ORDER_STATUS_SCREEN_DRAG_AND_DROP)&&H,onDragOver:A(w.ORDER_STATUS_SCREEN_DRAG_AND_DROP)&&Q,onDragEnd:A(w.ORDER_STATUS_SCREEN_DRAG_AND_DROP)&&W,children:[i.jsx(I,{sx:{flex:"1 1 auto",overflowX:"auto"},children:i.jsx(I,{sx:{pb:3,display:"unset",...k&&{minHeight:0,display:"flex",flex:"1 1 auto"}},children:i.jsx(I,{direction:"row",sx:{gap:"var(--column-gap)",...k&&{minHeight:0,flex:"1 1 auto",[`& .${vs.columnList}`]:{...ns,flex:"1 1 auto"}}},children:i.jsx(P,{items:[D],strategy:ys,children:s==null?void 0:s.columns.map(t=>i.jsx(Os,{column:t,tasks:s.tasks[t.id],colors:s.colors,children:i.jsx(P,{items:s.tasks[t.id],strategy:Ss,children:s.tasks[t.id].map(e=>i.jsx(Ks,{task:e,columnId:t.id,disabled:E},e.id))})},t.id))})})})}),i.jsx(js,{columns:s==null?void 0:s.columns,tasks:s==null?void 0:s.tasks,activeId:m,sx:L})]}),T=as(),{mutate:J}=us({mutationFn:({id:t,payload:e})=>B.patch(ds.orderStatus.edit+t,e),onSuccess:async()=>{await T.invalidateQueries({queryKey:["orders"]}),await T.invalidateQueries({queryKey:["orders","analytics"]}),await T.invalidateQueries({queryKey:["orders-status"]})},onSettled:async()=>{},onError:t=>{console.log(t)}});return i.jsxs(is,{maxWidth:!1,sx:{...L,pb:0,pl:{sm:3},pr:{sm:0},flex:"1 1 0",display:"flex",overflow:"hidden",flexDirection:"column"},children:[i.jsxs(I,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{pr:{sm:3},mb:{xs:3,md:5}},children:[i.jsx(os,{variant:"h4",children:a("title")}),i.jsx(As,{label:a("columnFixed"),labelPlacement:"start",control:i.jsx(rs,{checked:k,onChange:t=>{b(t.target.checked)},inputProps:{id:"column-fixed-switch"}})})]}),u?z:i.jsx(i.Fragment,{children:g?Y:X})]})}const qs={title:`Order Status | Dashboard - ${q.site.name}`};function et(){return i.jsxs(i.Fragment,{children:[i.jsx(cs,{children:i.jsxs("title",{children:[" ",qs.title]})}),i.jsx(Ls,{})]})}export{et as default};
