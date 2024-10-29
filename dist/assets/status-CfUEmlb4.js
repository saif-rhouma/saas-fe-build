import{dl as an,r as f,C as N,dp as Q,aO as V,S as c,s as B,v as K,j as s,I as rn,B as w,b1 as on,A as dn,T as M,aH as R,i as ln,aD as cn,dn as un,dP as mn,ba as xn,dm as fn,H as gn}from"./index-Cb6aSJqI.js";import{u as yn}from"./useMutation-D6Rdi7Aa.js";import{u as hn,a as pn,b as F,c as q,p as bn,r as vn,g as jn,D as Cn,M as In,S as H,h as wn,v as Sn,K as On,T as $n,d as kn,e as W}from"./sortable.esm-6EMJyy4R.js";import{u as Dn,m as U}from"./index-CTyu3nsX.js";import{E as Tn}from"./empty-content-gVFGfKY-.js";import{k as o,K as An,a as En,c as Fn,b as Ln}from"./kanban-drag-overlay-Bwlpt_dU.js";import{i as Mn}from"./image-CKkZri-A.js";import{L as Nn}from"./ListItem-DTFB2zaU.js";import{A as Bn}from"./AvatarGroup-Jn-6GhRb.js";import{F as Kn}from"./FormControlLabel-CI_VXRKb.js";import"./utils-km2FGkQ4.js";import"./Skeleton-DvZ7LaGA.js";import"./InputBase-4YzQn0tJ.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";const L=!0,E=`${N.site.serverUrl}/api/plans-status`,Rn={revalidateIfStale:L,revalidateOnFocus:L,revalidateOnReconnect:L};function qn(){const{data:n,isLoading:e,error:d,isValidating:g}=Dn(E,an,Rn);return f.useMemo(()=>{const p=(n==null?void 0:n.board.tasks)??{},y=(n==null?void 0:n.board.columns)??[];return{board:{tasks:p,columns:y},boardLoading:e,boardError:d,boardValidating:g,boardEmpty:!e&&!y.length}},[n==null?void 0:n.board.columns,n==null?void 0:n.board.tasks,d,e,g])}async function Hn(n){U(E,e=>{const{board:d}=e;return{...e,board:{...d,columns:n}}},!1);{const e={updateColumns:n};await Q.post(E,e,{params:{endpoint:"move-column"}})}}async function z(n){U(E,e=>{const{board:d}=e;return{...e,board:{...d,tasks:n}}},!1)}const Wn=V(Nn)(()=>({"@keyframes fadeIn":{"0%":{opacity:0},"100%":{opacity:1}},transform:"translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1))",transformOrigin:"0 0",touchAction:"manipulation",[`&.${o.state.fadeIn}`]:{animation:"fadeIn 500ms ease"},[`&.${o.state.dragOverlay}`]:{zIndex:999}})),zn=V(c)(({theme:n})=>({width:"100%",cursor:"grab",outline:"none",overflow:"hidden",position:"relative",transformOrigin:"50% 50%",touchAction:"manipulation",boxShadow:n.customShadows.z1,borderRadius:"var(--item-radius)",WebkitTapHighlightColor:"transparent",backgroundColor:n.vars.palette.common.white,transition:n.transitions.create(["box-shadow"]),[B.dark]:{backgroundColor:n.vars.palette.grey[900]},[`&.${o.state.disabled}`]:{},[`&.${o.state.sorting}`]:{},[`&.${o.state.dragOverlay}`]:{backdropFilter:"blur(6px)",boxShadow:n.customShadows.z20,backgroundColor:K(n.vars.palette.common.whiteChannel,.48),[B.dark]:{backgroundColor:K(n.vars.palette.grey["900Channel"],.48)}},[`&.${o.state.dragging}`]:{opacity:.2,filter:"grayscale(1)"}})),Gn=f.forwardRef(({task:n,stateProps:e,sx:d,...g},j)=>{var b,S,O,$;f.useEffect(()=>{if(e!=null&&e.dragOverlay)return document.body.style.cursor="grabbing",()=>{document.body.style.cursor=""}},[e==null?void 0:e.dragOverlay]);const p=o.itemWrap.concat((e==null?void 0:e.fadeIn)&&` ${o.state.fadeIn}`||(e==null?void 0:e.dragOverlay)&&` ${o.state.dragOverlay}`||""),y=o.item.concat((e==null?void 0:e.dragging)&&` ${o.state.dragging}`||(e==null?void 0:e.disabled)&&` ${o.state.disabled}`||(e==null?void 0:e.sorting)&&` ${o.state.sorting}`||(e==null?void 0:e.dragOverlay)&&` ${o.state.dragOverlay}`||""),u=s.jsx(rn,{icon:n.status==="Delivered"?"solar:double-alt-arrow-up-bold-duotone":"solar:double-alt-arrow-right-bold-duotone",sx:{top:4,right:4,position:"absolute",...n.status==="ProcessingA"&&{color:"warning.main"},...n.status==="Ready"&&{color:"success.main"},...n.status==="Pending"&&{color:"info.main"},...n.status==="ProcessingB"&&{color:"error.main"}}}),v=s.jsxs(c,{direction:"row",alignItems:"center",children:[s.jsx(c,{flexGrow:1,direction:"row",alignItems:"center",sx:{typography:"caption",color:"text.disabled"},children:s.jsx(w,{component:"span",sx:{mr:1},children:"Product:"})}),s.jsx(Bn,{sx:{[`& .${on.avatar}`]:{width:24,height:24}},children:s.jsx(dn,{alt:(b=n==null?void 0:n.product)==null?void 0:b.name,src:`${N.site.serverFileHost}${(S=n==null?void 0:n.product)==null?void 0:S.image}`},(O=n==null?void 0:n.product)==null?void 0:O.id)})]});return s.jsx(Wn,{ref:j,disablePadding:!0,className:p,sx:{...!!(e!=null&&e.transition)&&{transition:e.transition},...!!(e!=null&&e.transform)&&{"--translate-x":`${Math.round(e.transform.x)}px`,"--translate-y":`${Math.round(e.transform.y)}px`,"--scale-x":`${e.transform.scaleX}`,"--scale-y":`${e.transform.scaleY}`}},children:s.jsx(zn,{className:y,"data-cypress":"draggable-item",sx:d,tabIndex:0,...e==null?void 0:e.listeners,...g,children:s.jsxs(c,{spacing:1,sx:{px:2,py:2.5,position:"relative"},children:[u,s.jsxs(c,{direction:"row",justifyContent:"space-between",children:[s.jsx(M,{variant:"subtitle2",children:($=n==null?void 0:n.product)==null?void 0:$.name}),s.jsxs(M,{variant:"subtitle2",children:["PLAN-",n==null?void 0:n.id]})]}),s.jsxs(c,{direction:"row",justifyContent:"space-between",sx:{typography:"body2"},children:[s.jsx(w,{sx:{color:"text.secondary"},children:"Plan Date:"}),s.jsx(w,{sx:{color:"text.secondary"},children:R(n==null?void 0:n.planDate)})]}),s.jsxs(c,{direction:"row",justifyContent:"space-between",sx:{typography:"body2"},children:[s.jsx(w,{sx:{color:"text.secondary"},children:"Quantity:"}),s.jsx(w,{sx:{color:"text.secondary"},children:n.quantity?n.quantity:"-"})]}),s.jsxs(c,{direction:"row",justifyContent:"space-between",sx:{typography:"body2"},children:[s.jsx(w,{sx:{color:"text.secondary"},children:"Last Updated Date:"}),s.jsx(w,{sx:{color:"text.secondary"},children:R(n==null?void 0:n.updateTime)})]}),v]})})})}),Qn=f.memo(Gn);function Vn({task:n,disabled:e,columnId:d,sx:g}){const j=ln(),{setNodeRef:p,listeners:y,isDragging:u,isSorting:v,transform:b,transition:S}=hn({id:n==null?void 0:n.id}),O=Un(),$=u&&!O;return s.jsx(Qn,{ref:e?void 0:p,task:n,onClick:j.onTrue,stateProps:{transform:b,listeners:y,transition:S,sorting:v,dragging:u,fadeIn:$},sx:{...j.value&&{[`& .${Mn.root}`]:{opacity:.8}},...g}})}function Un(){const[n,e]=f.useState(!1);return f.useEffect(()=>{const d=setTimeout(()=>e(!0),500);return()=>clearTimeout(d)},[]),n}const G={"--item-gap":"16px","--item-radius":"12px","--column-gap":"24px","--column-width":"calc(95% /4)","--column-radius":"16px","--column-padding":"20px 16px 16px 16px"};function Xn(){const{board:n,boardLoading:e,boardEmpty:d}=qn(),[g,j]=f.useState(!0),p=f.useRef(!1),y=f.useRef(null),[u,v]=f.useState(null),b=n.columns.map(t=>t.id),S=u?b.includes(u):!1,O=pn(F(kn,{activationConstraint:{distance:5}}),F($n,{activationConstraint:{distance:5}}),F(On,{coordinateGetter:Fn})),$=f.useCallback(t=>{var l;if(u&&u in n.tasks)return q({...t,droppableContainers:t.droppableContainers.filter(h=>h.id in n.tasks)});const a=bn(t),r=a.length>0?a:vn(t);let i=jn(r,"id");if(i!=null){if(i in n.tasks){const h=n.tasks[i].map(m=>m.id);h.length>0&&(i=(l=q({...t,droppableContainers:t.droppableContainers.filter(m=>m.id!==i&&h.includes(m.id))})[0])==null?void 0:l.id)}return y.current=i,[{id:i}]}return p.current&&(y.current=u),y.current?[{id:y.current}]:[]},[u,n==null?void 0:n.tasks]),D=t=>t in n.tasks?t:Object.keys(n.tasks).find(a=>n.tasks[a].map(r=>r.id).includes(t));f.useEffect(()=>{requestAnimationFrame(()=>{p.current=!1})},[]);const X=({active:t})=>{v(t.id)},Y=({active:t,over:a})=>{const r=a==null?void 0:a.id;if(r==null||t.id in n.tasks)return;const i=D(r),l=D(t.id);if(!(!i||!l)&&l!==i){const h=n.tasks[l].map(x=>x.id),m=n.tasks[i].map(x=>x.id),k=m.indexOf(r),C=h.indexOf(t.id);let I;if(r in n.tasks)I=m.length+1;else{const sn=a&&t.rect.current.translated&&t.rect.current.translated.top>a.rect.top+a.rect.height?1:0;I=k>=0?k+sn:m.length+1}p.current=!0;const A={...n.tasks,[l]:n.tasks[l].filter(x=>x.id!==t.id),[i]:[...n.tasks[i].slice(0,I),n.tasks[l][C],...n.tasks[i].slice(I,n.tasks[i].length)]};z(A)}},_=()=>{n.columns.forEach(t=>{for(let a=0;a<n.tasks[t.id].length;a++)t.name==="Pending"&&(n.tasks[t.id][a].status="Pending"),t.name==="Processing A"&&(n.tasks[t.id][a].status="ProcessingA"),t.name==="Processing B"&&(n.tasks[t.id][a].status="ProcessingB"),t.name==="Ready"&&(n.tasks[t.id][a].status="Ready")})},J=async t=>{const a=[];n.columns.forEach(i=>{a.push(...n.tasks[i.id])});const r=a.find(i=>i.id===t.id);if(r){const i={status:r.status};await tn({id:r.id,payload:i})}},Z=({active:t,over:a})=>{let r;if(t.id in n.tasks&&(a!=null&&a.id)){const m=b.indexOf(t.id),k=b.indexOf(a.id),C=W(n.columns,m,k);Hn(C)}const i=D(t.id);if(!i){v(null);return}const l=a==null?void 0:a.id;if(l==null){v(null);return}const h=D(l);if(h){const m=n.tasks[i].map(x=>x.id),k=n.tasks[h].map(x=>x.id),C=m.indexOf(t.id),I=k.indexOf(l),A=n.tasks[i][C];if(C!==I){const x={...n.tasks,[h]:W(n.tasks[h],C,I)};z(x)}r={id:A.id,payload:{status:A.status}}}_(),J(r),v(null)},P=s.jsx(c,{direction:"row",alignItems:"flex-start",sx:{gap:"var(--column-gap)"},children:s.jsx(Ln,{})}),nn=s.jsx(Tn,{filled:!0,sx:{py:10,maxHeight:{md:480}}}),en=s.jsxs(Cn,{id:"dnd-kanban",sensors:O,collisionDetection:$,measuring:{droppable:{strategy:In.Always}},onDragStart:X,onDragOver:Y,onDragEnd:Z,children:[s.jsx(c,{sx:{flex:"1 1 auto",overflowX:"auto"},children:s.jsx(c,{sx:{pb:3,display:"unset",...g&&{minHeight:0,display:"flex",flex:"1 1 auto"}},children:s.jsx(c,{direction:"row",sx:{gap:"var(--column-gap)",...g&&{minHeight:0,flex:"1 1 auto",[`& .${o.columnList}`]:{...cn,flex:"1 1 auto"}}},children:s.jsx(H,{items:[b],strategy:wn,children:n==null?void 0:n.columns.map(t=>s.jsx(An,{column:t,tasks:n.tasks[t.id],children:s.jsx(H,{items:n.tasks[t.id],strategy:Sn,children:n.tasks[t.id].map(a=>s.jsx(Vn,{task:a,columnId:t.id,disabled:S},a.id))})},t.id))})})})}),s.jsx(En,{columns:n==null?void 0:n.columns,tasks:n==null?void 0:n.tasks,activeId:u,sx:G})]}),T=un(),{mutate:tn}=yn({mutationFn:({id:t,payload:a})=>Q.patch(fn.planStatus.edit+t,a),onSuccess:async({data:t})=>{const{id:a}=t;await T.invalidateQueries({queryKey:["plans"]}),await T.invalidateQueries({queryKey:["plans","analytics"]}),await T.invalidateQueries({queryKey:["plans-status"]}),await T.invalidateQueries({queryKey:["plan",a]})},onSettled:async()=>{},onError:t=>{console.log(t)}});return s.jsxs(mn,{maxWidth:!1,sx:{...G,pb:0,pl:{sm:3},pr:{sm:0},flex:"1 1 0",display:"flex",overflow:"hidden",flexDirection:"column"},children:[s.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{pr:{sm:3},mb:{xs:3,md:5}},children:[s.jsx(M,{variant:"h4",children:"Plans Status"}),s.jsx(Kn,{label:"Column fixed",labelPlacement:"start",control:s.jsx(xn,{checked:g,onChange:t=>{j(t.target.checked)},inputProps:{id:"column-fixed-switch"}})})]}),e?P:s.jsx(s.Fragment,{children:d?nn:en})]})}const Yn={title:`Plan Status | Dashboard - ${N.site.name}`};function ue(){return s.jsxs(s.Fragment,{children:[s.jsx(gn,{children:s.jsxs("title",{children:[" ",Yn.title]})}),s.jsx(Xn,{})]})}export{ue as default};
