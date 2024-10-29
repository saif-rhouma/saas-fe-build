import{dl as Y,r as x,C as B,dp as V,i as J,j as a,S,aD as Z,dn as ss,dP as ts,T as es,ba as ns,dm as as,bb as is,H as rs}from"./index-Cb6aSJqI.js";import{u as os}from"./useMutation-D6Rdi7Aa.js";import{u as ds,a as ls,b as F,c as M,p as cs,r as us,g as ms,D as fs,M as ps,S as R,h as xs,v as gs,K as ks,T as hs,d as ys,e as L}from"./sortable.esm-6EMJyy4R.js";import{u as bs,m as q}from"./index-CTyu3nsX.js";import{E as Cs}from"./empty-content-gVFGfKY-.js";import{I as Is,k as Ss,K as vs,a as js,c as Ds,b as Os}from"./kanban-drag-overlay-Bwlpt_dU.js";import{i as ws}from"./image-CKkZri-A.js";import{F as Es}from"./FormControlLabel-CI_VXRKb.js";import"./utils-km2FGkQ4.js";import"./Skeleton-DvZ7LaGA.js";import"./ListItem-DTFB2zaU.js";import"./AvatarGroup-Jn-6GhRb.js";import"./InputBase-4YzQn0tJ.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";const K=!0,D=`${B.site.serverUrl}/api/orders-status`,Ts={revalidateIfStale:K,revalidateOnFocus:K,revalidateOnReconnect:K};function Fs(){const{data:s,isLoading:d,error:u,isValidating:f}=bs(D,Y,Ts);return x.useMemo(()=>{const g=(s==null?void 0:s.board.tasks)??{},p=(s==null?void 0:s.board.columns)??[];return{board:{tasks:g,columns:p},boardLoading:d,boardError:u,boardValidating:f,boardEmpty:!d&&!p.length}},[s==null?void 0:s.board.columns,s==null?void 0:s.board.tasks,u,d,f])}async function Ks(s){q(D,d=>{const{board:u}=d;return{...d,board:{...u,columns:s}}},!1);{const d={updateColumns:s};await V.post(D,d,{params:{endpoint:"move-column"}})}}async function P(s){q(D,d=>{const{board:u}=d;return{...d,board:{...u,tasks:s}}},!1)}function Ms({task:s,disabled:d,columnId:u,sx:f}){const I=J(),{setNodeRef:g,listeners:p,isDragging:m,isSorting:y,transform:b,transition:O}=ds({id:s==null?void 0:s.id}),w=Rs(),E=m&&!w;return a.jsx(Is,{ref:d?void 0:g,task:s,onClick:I.onTrue,stateProps:{transform:b,listeners:p,transition:O,sorting:y,dragging:m,fadeIn:E},sx:{...I.value&&{[`& .${ws.root}`]:{opacity:.8}},...f}})}function Rs(){const[s,d]=x.useState(!1);return x.useEffect(()=>{const u=setTimeout(()=>d(!0),500);return()=>clearTimeout(u)},[]),s}const N={"--item-gap":"16px","--item-radius":"12px","--column-gap":"24px","--column-width":"calc(95% /3)","--column-radius":"16px","--column-padding":"20px 16px 16px 16px"};function Ls(){const{board:s,boardLoading:d,boardEmpty:u}=Fs(),[f,I]=x.useState(!0),g=x.useRef(!1),p=x.useRef(null),[m,y]=x.useState(null),b=s.columns.map(t=>t.id),O=m?b.includes(m):!1,w=ls(F(ys,{activationConstraint:{distance:5}}),F(hs,{activationConstraint:{distance:5}}),F(ks,{coordinateGetter:Ds})),E=x.useCallback(t=>{var i;if(m&&m in s.tasks)return M({...t,droppableContainers:t.droppableContainers.filter(r=>r.id in s.tasks)});const e=cs(t),o=e.length>0?e:us(t);let n=ms(o,"id");if(n!=null){if(n in s.tasks){const r=s.tasks[n].map(l=>l.id);r.length>0&&(n=(i=M({...t,droppableContainers:t.droppableContainers.filter(l=>l.id!==n&&r.includes(l.id))})[0])==null?void 0:i.id)}return p.current=n,[{id:n}]}return g.current&&(p.current=m),p.current?[{id:p.current}]:[]},[m,s==null?void 0:s.tasks]),v=t=>t in s.tasks?t:Object.keys(s.tasks).find(e=>s.tasks[e].map(o=>o.id).includes(t));x.useEffect(()=>{requestAnimationFrame(()=>{g.current=!1})},[]);const A=({active:t})=>{y(t.id)},H=({active:t,over:e})=>{const o=e==null?void 0:e.id;if(o==null||t.id in s.tasks)return;const n=v(o),i=v(t.id);if(!(!n||!i)&&i!==n){const r=s.tasks[i].map(c=>c.id),l=s.tasks[n].map(c=>c.id),C=l.indexOf(o),k=r.indexOf(t.id);let h;if(o in s.tasks)h=l.length+1;else{const X=e&&t.rect.current.translated&&t.rect.current.translated.top>e.rect.top+e.rect.height?1:0;h=C>=0?C+X:l.length+1}g.current=!0;const j={...s.tasks,[i]:s.tasks[i].filter(c=>c.id!==t.id),[n]:[...s.tasks[n].slice(0,h),s.tasks[i][k],...s.tasks[n].slice(h,s.tasks[n].length)]};P(j)}},Q=()=>{s.columns.forEach(t=>{for(let e=0;e<s.tasks[t.id].length;e+=1)t.name==="In Process"&&(s.tasks[t.id][e].status="InProcess"),t.name==="Ready to Deliver"&&(s.tasks[t.id][e].status="Ready"),t.name==="Delivered"&&(s.tasks[t.id][e].status="Delivered")})},W=async t=>{const e=[];s.columns.forEach(n=>{e.push(...s.tasks[n.id])});const o=e.find(n=>n.id===t.id);if(o){const n={status:o.status};o.status==="Delivered"?(n.deliveryDate=is(),s.columns.forEach(i=>{for(let r=0;r<s.tasks[i.id].length;r+=1)s.tasks[i.id][r].id===o.id&&(s.tasks[i.id][r].deliveryDate=n.deliveryDate)})):(n.deliveryDate=null,o.deliveryDate&&s.columns.forEach(i=>{for(let r=0;r<s.tasks[i.id].length;r+=1)s.tasks[i.id][r].id===o.id&&(s.tasks[i.id][r].deliveryDate=null)})),await _({id:o.id,payload:n})}},$=({active:t,over:e})=>{let o;if(t.id in s.tasks&&(e!=null&&e.id)){const l=b.indexOf(t.id),C=b.indexOf(e.id),k=L(s.columns,l,C);Ks(k)}const n=v(t.id);if(!n){y(null);return}const i=e==null?void 0:e.id;if(i==null){y(null);return}const r=v(i);if(r){const l=s.tasks[n].map(c=>c.id),C=s.tasks[r].map(c=>c.id),k=l.indexOf(t.id),h=C.indexOf(i),j=s.tasks[n][k];if(k!==h){const c={...s.tasks,[r]:L(s.tasks[r],k,h)};P(c)}o={id:j.id,payload:{status:j.status}}}Q(),W(o),y(null)},z=a.jsx(S,{direction:"row",alignItems:"flex-start",sx:{gap:"var(--column-gap)"},children:a.jsx(Os,{})}),G=a.jsx(Cs,{filled:!0,sx:{py:10,maxHeight:{md:480}}}),U=a.jsxs(fs,{id:"dnd-kanban",sensors:w,collisionDetection:E,measuring:{droppable:{strategy:ps.Always}},onDragStart:A,onDragOver:H,onDragEnd:$,children:[a.jsx(S,{sx:{flex:"1 1 auto",overflowX:"auto"},children:a.jsx(S,{sx:{pb:3,display:"unset",...f&&{minHeight:0,display:"flex",flex:"1 1 auto"}},children:a.jsx(S,{direction:"row",sx:{gap:"var(--column-gap)",...f&&{minHeight:0,flex:"1 1 auto",[`& .${Ss.columnList}`]:{...Z,flex:"1 1 auto"}}},children:a.jsx(R,{items:[b],strategy:xs,children:s==null?void 0:s.columns.map(t=>a.jsx(vs,{column:t,tasks:s.tasks[t.id],children:a.jsx(R,{items:s.tasks[t.id],strategy:gs,children:s.tasks[t.id].map(e=>a.jsx(Ms,{task:e,columnId:t.id,disabled:O},e.id))})},t.id))})})})}),a.jsx(js,{columns:s==null?void 0:s.columns,tasks:s==null?void 0:s.tasks,activeId:m,sx:N})]}),T=ss(),{mutate:_}=os({mutationFn:({id:t,payload:e})=>V.patch(as.orderStatus.edit+t,e),onSuccess:async()=>{await T.invalidateQueries({queryKey:["orders"]}),await T.invalidateQueries({queryKey:["orders","analytics"]}),await T.invalidateQueries({queryKey:["orders-status"]})},onSettled:async()=>{},onError:t=>{console.log(t)}});return a.jsxs(ts,{maxWidth:!1,sx:{...N,pb:0,pl:{sm:3},pr:{sm:0},flex:"1 1 0",display:"flex",overflow:"hidden",flexDirection:"column"},children:[a.jsxs(S,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{pr:{sm:3},mb:{xs:3,md:5}},children:[a.jsx(es,{variant:"h4",children:"Orders Status"}),a.jsx(Es,{label:"Column fixed",labelPlacement:"start",control:a.jsx(ns,{checked:f,onChange:t=>{I(t.target.checked)},inputProps:{id:"column-fixed-switch"}})})]}),d?z:a.jsx(a.Fragment,{children:u?G:U})]})}const Ps={title:`Order Status | Dashboard - ${B.site.name}`};function Js(){return a.jsxs(a.Fragment,{children:[a.jsx(rs,{children:a.jsxs("title",{children:[" ",Ps.title]})}),a.jsx(Ls,{})]})}export{Js as default};
