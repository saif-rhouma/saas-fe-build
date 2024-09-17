import{dL as _,r as u,w as q,j as n,B as E,cr as J,e as X,I as Y,S as j,aJ as Q,ed as Z,T as tt,bN as st,H as nt,C as et}from"./index-BPQkDe0s.js";import{u as at,a as w,c as F,p as ot,r as rt,g as it,D as lt,M as ct,S as K,h as dt,v as ut,K as mt,T as xt,b as pt,d as L}from"./sortable.esm-Bq3fW7q-.js";import{u as ft,m as T}from"./index-6dotFO6y.js";import{E as ht}from"./empty-content-mVT_rcbJ.js";import{k as kt,K as Ct,a as gt,b as bt,c as yt,d as jt}from"./utils-D3HH7bY1.js";import{T as It}from"./TextField-Bi7NVwCq.js";import{C as St}from"./ClickAwayListener-DkH41G57.js";import{F as vt}from"./FormControlLabel-CkOEQNeq.js";import"./InputBase-CPrPQ_RD.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./Skeleton-Cq3ls5A_.js";import"./image-C7AA7Kgf.js";import"./ListItem-BApUg4RM.js";import"./AvatarGroup-DApFS9jB.js";import"./FormControl-bKQXC1dH.js";import"./InputLabel-AqbAhnGZ.js";import"./FormLabel-8bz6Jicd.js";import"./Select-9Xhy8-ut.js";import"./Menu-DGoJy9BJ.js";import"./FormHelperText-CPxcDFA-.js";const O=!1,v="http://localhost:3000/api/orders-status",wt={revalidateIfStale:O,revalidateOnFocus:O,revalidateOnReconnect:O};function Ot(){const{data:t,isLoading:a,error:r,isValidating:l}=ft(v,_,wt);return u.useMemo(()=>{const C=(t==null?void 0:t.board.tasks)??{},p=(t==null?void 0:t.board.columns)??[];return{board:{tasks:C,columns:p},boardLoading:a,boardError:r,boardValidating:l,boardEmpty:!a&&!p.length}},[t==null?void 0:t.board.columns,t==null?void 0:t.board.tasks,r,a,l])}async function Tt(t){T(v,a=>{const{board:r}=a,l=[...r.columns,t],m={...r.tasks,[t.id]:[]};return{...a,board:{...r,columns:l,tasks:m}}},!1)}async function Et(t){T(v,a=>{const{board:r}=a;return{...a,board:{...r,columns:t}}},!1)}async function A(t){T(v,a=>{const{board:r}=a;return{...a,board:{...r,tasks:t}}},!1)}function Ft(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const a=Math.random()*16|0;return(t==="x"?a:a&3|8).toString(16)})}function Kt({sx:t,...a}){const[r,l]=u.useState(""),m=q(),C=u.useCallback(c=>{l(c.target.value)},[]),p=u.useCallback(async()=>{try{const c={id:Ft(),name:r.trim()?r:"Untitled"};Tt(c),l(""),m.onFalse()}catch(c){console.error(c)}},[r,m]),k=u.useCallback(c=>{c.key==="Enter"&&p()},[p]),b=u.useCallback(()=>{l(""),m.onFalse()},[m]);return n.jsxs(n.Fragment,{children:[n.jsx(E,{sx:{width:"var(--column-width)",flex:"0 0 auto",...t},...a,children:m.value?n.jsx(St,{onClickAway:b,children:n.jsx(It,{autoFocus:!0,fullWidth:!0,placeholder:"Untitled",value:r,onChange:C,onKeyUp:k,helperText:"Press Enter to create the column.",sx:{[`& .${J.input}`]:{typography:"h6"}}})}):n.jsx(X,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",startIcon:n.jsx(Y,{icon:"mingcute:add-line",sx:{mr:-.5}}),onClick:m.onTrue,children:"Add column"})}),n.jsx(E,{sx:{width:"1px",flexShrink:0}})]})}const D="placeholder",N={"--item-gap":"16px","--item-radius":"12px","--column-gap":"24px","--column-width":"336px","--column-radius":"16px","--column-padding":"20px 16px 16px 16px"};function Lt(){const{board:t,boardLoading:a,boardEmpty:r}=Ot(),[l,m]=u.useState(!0),C=u.useRef(!1),p=u.useRef(null),[k,b]=u.useState(null),c=t.columns.map(s=>s.id),B=k?c.includes(k):!1,M=at(w(pt,{activationConstraint:{distance:5}}),w(xt,{activationConstraint:{distance:5}}),w(mt,{coordinateGetter:yt})),H=u.useCallback(s=>{var i;if(k&&k in t.tasks)return F({...s,droppableContainers:s.droppableContainers.filter(f=>f.id in t.tasks)});const e=ot(s),x=e.length>0?e:rt(s);let o=it(x,"id");if(o!=null){if(o in t.tasks){const f=t.tasks[o].map(d=>d.id);f.length>0&&(o=(i=F({...s,droppableContainers:s.droppableContainers.filter(d=>d.id!==o&&f.includes(d.id))})[0])==null?void 0:i.id)}return p.current=o,[{id:o}]}return C.current&&(p.current=k),p.current?[{id:p.current}]:[]},[k,t==null?void 0:t.tasks]),I=s=>s in t.tasks?s:Object.keys(t.tasks).find(e=>t.tasks[e].map(x=>x.id).includes(s));u.useEffect(()=>{requestAnimationFrame(()=>{C.current=!1})},[]);const P=({active:s})=>{b(s.id)},R=({active:s,over:e})=>{const x=e==null?void 0:e.id;if(x==null||s.id in t.tasks)return;const o=I(x),i=I(s.id);if(!(!o||!i)&&i!==o){const f=t.tasks[i].map(y=>y.id),d=t.tasks[o].map(y=>y.id),g=d.indexOf(x),S=f.indexOf(s.id);let h;if(x in t.tasks)h=d.length+1;else{const $=e&&s.rect.current.translated&&s.rect.current.translated.top>e.rect.top+e.rect.height?1:0;h=g>=0?g+$:d.length+1}C.current=!0;const G={...t.tasks,[i]:t.tasks[i].filter(y=>y.id!==s.id),[o]:[...t.tasks[o].slice(0,h),t.tasks[i][S],...t.tasks[o].slice(h,t.tasks[o].length)]};A(G)}},V=({active:s,over:e})=>{if(s.id in t.tasks&&(e!=null&&e.id)){const f=c.indexOf(s.id),d=c.indexOf(e.id),g=L(t.columns,f,d);Et(g)}const x=I(s.id);if(!x){b(null);return}const o=e==null?void 0:e.id;if(o==null){b(null);return}const i=I(o);if(i){const f=t.tasks[x].map(h=>h.id),d=t.tasks[i].map(h=>h.id),g=f.indexOf(s.id),S=d.indexOf(o);if(g!==S){const h={...t.tasks,[i]:L(t.tasks[i],g,S)};A(h)}}b(null)},W=n.jsx(j,{direction:"row",alignItems:"flex-start",sx:{gap:"var(--column-gap)"},children:n.jsx(jt,{})}),z=n.jsx(ht,{filled:!0,sx:{py:10,maxHeight:{md:480}}}),U=n.jsxs(lt,{id:"dnd-kanban",sensors:M,collisionDetection:H,measuring:{droppable:{strategy:ct.Always}},onDragStart:P,onDragOver:R,onDragEnd:V,children:[n.jsx(j,{sx:{flex:"1 1 auto",overflowX:"auto"},children:n.jsx(j,{sx:{pb:3,display:"unset",...l&&{minHeight:0,display:"flex",flex:"1 1 auto"}},children:n.jsx(j,{direction:"row",sx:{gap:"var(--column-gap)",...l&&{minHeight:0,flex:"1 1 auto",[`& .${kt.columnList}`]:{...Q,flex:"1 1 auto"}}},children:n.jsxs(K,{items:[...c,D],strategy:dt,children:[t==null?void 0:t.columns.map(s=>n.jsx(Ct,{column:s,tasks:t.tasks[s.id],children:n.jsx(K,{items:t.tasks[s.id],strategy:ut,children:t.tasks[s.id].map(e=>n.jsx(gt,{task:e,columnId:s.id,disabled:B},e.id))})},s.id)),n.jsx(Kt,{id:D})]})})})}),n.jsx(bt,{columns:t==null?void 0:t.columns,tasks:t==null?void 0:t.tasks,activeId:k,sx:N})]});return n.jsxs(Z,{maxWidth:!1,sx:{...N,pb:0,pl:{sm:3},pr:{sm:0},flex:"1 1 0",display:"flex",overflow:"hidden",flexDirection:"column"},children:[n.jsxs(j,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{pr:{sm:3},mb:{xs:3,md:5}},children:[n.jsx(tt,{variant:"h4",children:"Kanban"}),n.jsx(vt,{label:"Column fixed",labelPlacement:"start",control:n.jsx(st,{checked:l,onChange:s=>{m(s.target.checked)},inputProps:{id:"column-fixed-switch"}})})]}),a?W:n.jsx(n.Fragment,{children:r?z:U})]})}const At={title:`Kanban | Dashboard - ${et.site.name}`};function ss(){return n.jsxs(n.Fragment,{children:[n.jsx(nt,{children:n.jsxs("title",{children:[" ",At.title]})}),n.jsx(Lt,{})]})}export{ss as default};
