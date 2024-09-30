import{dG as X,r as x,C as B,dJ as H,o as Y,j as a,S,aF as Z,dI as ss,e8 as ts,T as es,bT as ns,dH as as,bU as is,H as os}from"./index-MIl7JRte.js";import{u as rs}from"./useMutation-D1t2nLjA.js";import{u as ds,a as ls,b as F,c as M,p as cs,r as us,g as ms,D as fs,M as ps,S as R,h as xs,v as gs,K as ks,T as hs,d as ys,e as L}from"./sortable.esm-BxRz0xec.js";import{u as bs,m as V}from"./index-XUzp_Ebg.js";import{E as Is}from"./empty-content-BeP_n_I6.js";import{I as Cs,k as Ss,K as vs,a as js,c as Ds,b as Os}from"./kanban-drag-overlay-CHLl_gxa.js";import{i as ws}from"./image-DTyoCSe4.js";import{F as Es}from"./FormControlLabel-Dijue8fI.js";import"./utils-km2FGkQ4.js";import"./Skeleton-CL8K7YP_.js";import"./ListItem-DbyD7F5O.js";import"./AvatarGroup-CJeL0-ee.js";import"./InputBase-CEys6nDV.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";const K=!0,D=`${B.site.serverUrl}/api/orders-status`,Ts={revalidateIfStale:K,revalidateOnFocus:K,revalidateOnReconnect:K};function Fs(){const{data:s,isLoading:d,error:u,isValidating:f}=bs(D,X,Ts);return x.useMemo(()=>{const g=(s==null?void 0:s.board.tasks)??{},p=(s==null?void 0:s.board.columns)??[];return{board:{tasks:g,columns:p},boardLoading:d,boardError:u,boardValidating:f,boardEmpty:!d&&!p.length}},[s==null?void 0:s.board.columns,s==null?void 0:s.board.tasks,u,d,f])}async function Ks(s){V(D,d=>{const{board:u}=d;return{...d,board:{...u,columns:s}}},!1);{const d={updateColumns:s};await H.post(D,d,{params:{endpoint:"move-column"}})}}async function N(s){V(D,d=>{const{board:u}=d;return{...d,board:{...u,tasks:s}}},!1)}function Ms({task:s,disabled:d,columnId:u,sx:f}){const C=Y(),{setNodeRef:g,listeners:p,isDragging:m,isSorting:y,transform:b,transition:O}=ds({id:s==null?void 0:s.id}),w=Rs(),E=m&&!w;return a.jsx(Cs,{ref:d?void 0:g,task:s,onClick:C.onTrue,stateProps:{transform:b,listeners:p,transition:O,sorting:y,dragging:m,fadeIn:E},sx:{...C.value&&{[`& .${ws.root}`]:{opacity:.8}},...f}})}function Rs(){const[s,d]=x.useState(!1);return x.useEffect(()=>{const u=setTimeout(()=>d(!0),500);return()=>clearTimeout(u)},[]),s}const P={"--item-gap":"16px","--item-radius":"12px","--column-gap":"24px","--column-width":"calc(95% /3)","--column-radius":"16px","--column-padding":"20px 16px 16px 16px"};function Ls(){const{board:s,boardLoading:d,boardEmpty:u}=Fs(),[f,C]=x.useState(!0),g=x.useRef(!1),p=x.useRef(null),[m,y]=x.useState(null),b=s.columns.map(t=>t.id),O=m?b.includes(m):!1,w=ls(F(ys,{activationConstraint:{distance:5}}),F(hs,{activationConstraint:{distance:5}}),F(ks,{coordinateGetter:Ds})),E=x.useCallback(t=>{var i;if(m&&m in s.tasks)return M({...t,droppableContainers:t.droppableContainers.filter(o=>o.id in s.tasks)});const e=cs(t),r=e.length>0?e:us(t);let n=ms(r,"id");if(n!=null){if(n in s.tasks){const o=s.tasks[n].map(l=>l.id);o.length>0&&(n=(i=M({...t,droppableContainers:t.droppableContainers.filter(l=>l.id!==n&&o.includes(l.id))})[0])==null?void 0:i.id)}return p.current=n,[{id:n}]}return g.current&&(p.current=m),p.current?[{id:p.current}]:[]},[m,s==null?void 0:s.tasks]),v=t=>t in s.tasks?t:Object.keys(s.tasks).find(e=>s.tasks[e].map(r=>r.id).includes(t));x.useEffect(()=>{requestAnimationFrame(()=>{g.current=!1})},[]);const q=({active:t})=>{y(t.id)},A=({active:t,over:e})=>{const r=e==null?void 0:e.id;if(r==null||t.id in s.tasks)return;const n=v(r),i=v(t.id);if(!(!n||!i)&&i!==n){const o=s.tasks[i].map(c=>c.id),l=s.tasks[n].map(c=>c.id),I=l.indexOf(r),k=o.indexOf(t.id);let h;if(r in s.tasks)h=l.length+1;else{const J=e&&t.rect.current.translated&&t.rect.current.translated.top>e.rect.top+e.rect.height?1:0;h=I>=0?I+J:l.length+1}g.current=!0;const j={...s.tasks,[i]:s.tasks[i].filter(c=>c.id!==t.id),[n]:[...s.tasks[n].slice(0,h),s.tasks[i][k],...s.tasks[n].slice(h,s.tasks[n].length)]};N(j)}},G=()=>{s.columns.forEach(t=>{for(let e=0;e<s.tasks[t.id].length;e+=1)t.name==="In Process"&&(s.tasks[t.id][e].status="InProcess"),t.name==="Ready to Deliver"&&(s.tasks[t.id][e].status="Ready"),t.name==="Delivered"&&(s.tasks[t.id][e].status="Delivered")})},Q=async t=>{const e=[];s.columns.forEach(n=>{e.push(...s.tasks[n.id])});const r=e.find(n=>n.id===t.id);if(r){const n={status:r.status};r.status==="Delivered"?(n.deliveryDate=is(),s.columns.forEach(i=>{for(let o=0;o<s.tasks[i.id].length;o+=1)s.tasks[i.id][o].id===r.id&&(s.tasks[i.id][o].deliveryDate=n.deliveryDate)})):(n.deliveryDate=null,r.deliveryDate&&s.columns.forEach(i=>{for(let o=0;o<s.tasks[i.id].length;o+=1)s.tasks[i.id][o].id===r.id&&(s.tasks[i.id][o].deliveryDate=null)})),await _({id:r.id,payload:n})}},W=({active:t,over:e})=>{let r;if(t.id in s.tasks&&(e!=null&&e.id)){const l=b.indexOf(t.id),I=b.indexOf(e.id),k=L(s.columns,l,I);Ks(k)}const n=v(t.id);if(!n){y(null);return}const i=e==null?void 0:e.id;if(i==null){y(null);return}const o=v(i);if(o){const l=s.tasks[n].map(c=>c.id),I=s.tasks[o].map(c=>c.id),k=l.indexOf(t.id),h=I.indexOf(i),j=s.tasks[n][k];if(k!==h){const c={...s.tasks,[o]:L(s.tasks[o],k,h)};N(c)}r={id:j.id,payload:{status:j.status}}}G(),Q(r),y(null)},$=a.jsx(S,{direction:"row",alignItems:"flex-start",sx:{gap:"var(--column-gap)"},children:a.jsx(Os,{})}),z=a.jsx(Is,{filled:!0,sx:{py:10,maxHeight:{md:480}}}),U=a.jsxs(fs,{id:"dnd-kanban",sensors:w,collisionDetection:E,measuring:{droppable:{strategy:ps.Always}},onDragStart:q,onDragOver:A,onDragEnd:W,children:[a.jsx(S,{sx:{flex:"1 1 auto",overflowX:"auto"},children:a.jsx(S,{sx:{pb:3,display:"unset",...f&&{minHeight:0,display:"flex",flex:"1 1 auto"}},children:a.jsx(S,{direction:"row",sx:{gap:"var(--column-gap)",...f&&{minHeight:0,flex:"1 1 auto",[`& .${Ss.columnList}`]:{...Z,flex:"1 1 auto"}}},children:a.jsx(R,{items:[b],strategy:xs,children:s==null?void 0:s.columns.map(t=>a.jsx(vs,{column:t,tasks:s.tasks[t.id],children:a.jsx(R,{items:s.tasks[t.id],strategy:gs,children:s.tasks[t.id].map(e=>a.jsx(Ms,{task:e,columnId:t.id,disabled:O},e.id))})},t.id))})})})}),a.jsx(js,{columns:s==null?void 0:s.columns,tasks:s==null?void 0:s.tasks,activeId:m,sx:P})]}),T=ss(),{mutate:_}=rs({mutationFn:({id:t,payload:e})=>H.patch(as.orderStatus.edit+t,e),onSuccess:async()=>{await T.invalidateQueries({queryKey:["orders"]}),await T.invalidateQueries({queryKey:["orders","analytics"]}),await T.invalidateQueries({queryKey:["orders-status"]})},onSettled:async()=>{},onError:t=>{console.log(t)}});return a.jsxs(ts,{maxWidth:!1,sx:{...P,pb:0,pl:{sm:3},pr:{sm:0},flex:"1 1 0",display:"flex",overflow:"hidden",flexDirection:"column"},children:[a.jsxs(S,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{pr:{sm:3},mb:{xs:3,md:5}},children:[a.jsx(es,{variant:"h4",children:"Orders Status"}),a.jsx(Es,{label:"Column fixed",labelPlacement:"start",control:a.jsx(ns,{checked:f,onChange:t=>{C(t.target.checked)},inputProps:{id:"column-fixed-switch"}})})]}),d?$:a.jsx(a.Fragment,{children:u?z:U})]})}const Ns={title:`Order Status | Dashboard - ${B.site.name}`};function Ys(){return a.jsxs(a.Fragment,{children:[a.jsx(os,{children:a.jsxs("title",{children:[" ",Ns.title]})}),a.jsx(Ls,{})]})}export{Ys as default};
