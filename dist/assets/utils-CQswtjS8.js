import{aS as I,S as m,s as j,v as x,r as b,j as a,B as f,cp as $,bG as A,du as L,I as B,bo as E,A as F,C as K,T as _,aL as O,bR as W,aB as G}from"./index-C-IhHuTJ.js";import{e as k,C as z,f as H,i as M,j as U,k as h,l as X,g as Y}from"./sortable.esm-BjYYTZPO.js";import{L as q}from"./ListItem-DoDVqw_C.js";import{A as J}from"./AvatarGroup-BV_E-0J7.js";import{b as Q}from"./InputBase-T30htlau.js";import{S as w}from"./Skeleton-DX_XBHRJ.js";const d={item:"mnl__kanban__item",column:"mnl__kanban__column",itemWrap:"mnl__kanban__item__wrap",columnList:"mnl__kanban__column_list",state:{hover:"state-hover",fadeIn:"state-fade-in",sorting:"state-sorting",dragging:"state-dragging",disabled:"state-disabled",dragOverlay:"state-drag-overlay"}},V=I(m)(({theme:r})=>({flexShrink:0,height:"100%",borderWidth:1,position:"relative",borderStyle:"solid",borderColor:"transparent",padding:"var(--column-padding)",borderRadius:"var(--column-radius)",backgroundColor:r.vars.palette.background.neutral,[j.dark]:{backgroundColor:r.vars.palette.grey[800]},"&::before":{top:0,left:0,content:'""',width:"100%",height:"100%",position:"absolute",borderRadius:"inherit",backgroundColor:"transparent",transition:r.transitions.create(["background-color"])},[`&.${d.state.hover}`]:{"&::before":{backgroundColor:x(r.vars.palette.grey["500Channel"],.08),[j.dark]:{backgroundColor:x(r.vars.palette.grey["500Channel"],.16)}}},[`&.${d.state.dragOverlay}`]:{backdropFilter:"blur(6px)",borderColor:x(r.vars.palette.grey["500Channel"],.08),backgroundColor:x(r.vars.palette.background.neutralChannel,.48),[j.dark]:{backgroundColor:x(r.vars.palette.grey["800Channel"],.48)}},[`&.${d.state.dragging}`]:{opacity:0}})),Z=b.forwardRef(({slots:r,stateProps:e,sx:n,...l},o)=>{const g=d.column.concat((e==null?void 0:e.hover)&&` ${d.state.hover}`||(e==null?void 0:e.dragOverlay)&&` ${d.state.dragOverlay}`||(e==null?void 0:e.dragging)&&` ${d.state.dragging}`||"");return a.jsxs(V,{ref:o,className:g,sx:{gap:2.5,width:"var(--column-width)",...n},...l,children:[(r==null?void 0:r.header)&&r.header,(r==null?void 0:r.action)&&(r==null?void 0:r.action),(r==null?void 0:r.main)&&a.jsx(f,{component:"ul",className:d.columnList,sx:{minHeight:80,display:"flex",gap:"var(--item-gap)",flexDirection:"column"},children:r.main})]})}),D=b.memo(Z);function P({sx:r,...e}){return a.jsx(Q,{sx:{[`&.${$.root}`]:{py:.75,borderRadius:1,typography:"h6",borderWidth:2,borderStyle:"solid",borderColor:"transparent",transition:n=>n.transitions.create(["padding-left","border-color"]),[`&.${$.focused}`]:{pl:.75,borderColor:"text.primary"}},[`& .${$.input}`]:{typography:"h6"},...r},...e})}function R({columnName:r,totalTasks:e}){const n=b.useRef(null),l=A(),[o,g]=b.useState(r);return b.useEffect(()=>{l.open&&n.current&&n.current.focus()},[l.open]),a.jsxs(m,{direction:"row",alignItems:"center",children:[a.jsx(L,{sx:{borderRadius:"50%",borderColor:s=>x(s.vars.palette.grey["500Channel"],.24)},children:e}),a.jsx(P,{inputRef:n,placeholder:"Column name",value:o,inputProps:{id:`input-column-${o}`},sx:{mx:1}})]})}function fr({children:r,column:e,tasks:n,disabled:l,sx:o}){var S;const{attributes:g,isDragging:s,listeners:y,setNodeRef:u,transition:t,active:c,over:i,transform:v}=k({id:e.id,data:{type:"container",children:n},animateLayoutChanges:rr}),p=n==null?void 0:n.map(T=>T.id),C=i?e.id===i.id&&((S=c==null?void 0:c.data.current)==null?void 0:S.type)!=="container"||p.includes(i.id):!1;return a.jsx(D,{ref:l?void 0:u,sx:{transition:t,transform:z.Translate.toString(v),...o},stateProps:{dragging:s,hover:C,handleProps:{...g,...y}},slots:{header:a.jsx(R,{totalTasks:n.length,columnName:e.name}),main:a.jsx(a.Fragment,{children:r})}})}const rr=r=>H({...r,wasDragging:!0}),er=I(q)(()=>({"@keyframes fadeIn":{"0%":{opacity:0},"100%":{opacity:1}},transform:"translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1))",transformOrigin:"0 0",touchAction:"manipulation",[`&.${d.state.fadeIn}`]:{animation:"fadeIn 500ms ease"},[`&.${d.state.dragOverlay}`]:{zIndex:999}})),ar=I(m)(({theme:r})=>({width:"100%",cursor:"grab",outline:"none",overflow:"hidden",position:"relative",transformOrigin:"50% 50%",touchAction:"manipulation",boxShadow:r.customShadows.z1,borderRadius:"var(--item-radius)",WebkitTapHighlightColor:"transparent",backgroundColor:r.vars.palette.common.white,transition:r.transitions.create(["box-shadow"]),[j.dark]:{backgroundColor:r.vars.palette.grey[900]},[`&.${d.state.disabled}`]:{},[`&.${d.state.sorting}`]:{},[`&.${d.state.dragOverlay}`]:{backdropFilter:"blur(6px)",boxShadow:r.customShadows.z20,backgroundColor:x(r.vars.palette.common.whiteChannel,.48),[j.dark]:{backgroundColor:x(r.vars.palette.grey["900Channel"],.48)}},[`&.${d.state.dragging}`]:{opacity:.2,filter:"grayscale(1)"}})),nr=b.forwardRef(({task:r,stateProps:e,sx:n,...l},o)=>{var t,c;b.useEffect(()=>{if(e!=null&&e.dragOverlay)return document.body.style.cursor="grabbing",()=>{document.body.style.cursor=""}},[e==null?void 0:e.dragOverlay]);const g=d.itemWrap.concat((e==null?void 0:e.fadeIn)&&` ${d.state.fadeIn}`||(e==null?void 0:e.dragOverlay)&&` ${d.state.dragOverlay}`||""),s=d.item.concat((e==null?void 0:e.dragging)&&` ${d.state.dragging}`||(e==null?void 0:e.disabled)&&` ${d.state.disabled}`||(e==null?void 0:e.sorting)&&` ${d.state.sorting}`||(e==null?void 0:e.dragOverlay)&&` ${d.state.dragOverlay}`||""),y=a.jsx(B,{icon:r.status==="Delivered"?"solar:double-alt-arrow-up-bold-duotone":"solar:double-alt-arrow-right-bold-duotone",sx:{top:4,right:4,position:"absolute",...r.status==="Delivered"&&{color:"info.main"},...r.status==="Ready"&&{color:"warning.main"},...r.status==="InProcess"&&{color:"error.main"}}}),u=a.jsxs(m,{direction:"row",alignItems:"center",children:[a.jsx(m,{flexGrow:1,direction:"row",alignItems:"center",sx:{typography:"caption",color:"text.disabled"},children:a.jsx(f,{component:"span",sx:{mr:1},children:"Product:"})}),a.jsx(J,{sx:{[`& .${E.avatar}`]:{width:24,height:24}},children:(t=r==null?void 0:r.productToOrder)==null?void 0:t.map(i=>{var v,p;return a.jsx(F,{alt:(v=i==null?void 0:i.product)==null?void 0:v.name,src:`${K.site.serverFileHost}${(p=i==null?void 0:i.product)==null?void 0:p.image}`},i==null?void 0:i.id)})})]});return a.jsx(er,{ref:o,disablePadding:!0,className:g,sx:{...!!(e!=null&&e.transition)&&{transition:e.transition},...!!(e!=null&&e.transform)&&{"--translate-x":`${Math.round(e.transform.x)}px`,"--translate-y":`${Math.round(e.transform.y)}px`,"--scale-x":`${e.transform.scaleX}`,"--scale-y":`${e.transform.scaleY}`}},children:a.jsx(ar,{className:s,"data-cypress":"draggable-item",sx:n,tabIndex:0,...e==null?void 0:e.listeners,...l,children:a.jsxs(m,{spacing:1,sx:{px:2,py:2.5,position:"relative"},children:[y,a.jsxs(m,{direction:"row",justifyContent:"space-between",children:[a.jsx(_,{variant:"subtitle2",children:(c=r==null?void 0:r.customer)==null?void 0:c.name}),a.jsxs(_,{variant:"subtitle2",children:["ORD-",r==null?void 0:r.id]})]}),a.jsxs(m,{direction:"row",justifyContent:"space-between",sx:{typography:"body2"},children:[a.jsx(f,{sx:{color:"text.secondary"},children:"Order Date:"}),a.jsx(f,{sx:{color:"text.secondary"},children:O(r==null?void 0:r.orderDate)})]}),a.jsxs(m,{direction:"row",justifyContent:"space-between",sx:{typography:"body2"},children:[a.jsx(f,{sx:{color:"text.secondary"},children:"Delivery Date:"}),a.jsx(f,{sx:{color:"text.secondary"},children:r.deliveryDate?O(r==null?void 0:r.deliveryDate):"-"})]}),a.jsxs(m,{direction:"row",justifyContent:"space-between",sx:{typography:"body2"},children:[a.jsx(f,{sx:{color:"text.secondary"},children:"Last Updated Date:"}),a.jsx(f,{sx:{color:"text.secondary"},children:O(r==null?void 0:r.updateTime)})]}),u]})})})}),N=b.memo(nr),ir={sideEffects:U({styles:{active:{opacity:"0.5"}}})};function xr({columns:r,tasks:e,activeId:n,sx:l}){const o=r.map(u=>u.id),g=r.find(u=>u.id===n),y=Object.values(e).flat().find(u=>u.id===n);return a.jsx(W,{children:a.jsx(M,{adjustScale:!1,dropAnimation:ir,children:n?a.jsx(a.Fragment,{children:o.includes(n)?a.jsx(or,{column:g,tasks:e[n],sx:l}):a.jsx(tr,{task:y,sx:l})}):null})})}function or({column:r,tasks:e,sx:n}){return a.jsx(D,{slots:{header:a.jsx(R,{columnName:r.name,totalTasks:e.length}),main:e.map(l=>a.jsx(N,{task:l},l.id))},stateProps:{dragOverlay:!0},sx:n})}function tr({task:r,sx:e}){return a.jsx(N,{task:r,sx:e,stateProps:{dragOverlay:!0}})}function hr({amount:r=3,sx:e,...n}){return[...Array(r)].map((l,o)=>a.jsxs(G,{variant:"outlined",sx:{display:"flex",gap:"var(--item-gap)",flexDirection:"column",p:"var(--column-padding)",width:"var(--column-width)",borderRadius:"var(--column-radius)",...e},...n,children:[a.jsx(w,{sx:{pt:"75%",borderRadius:1.5}}),[0].includes(o)&&a.jsx(w,{sx:{pt:"50%",borderRadius:1.5}}),[0,1].includes(o)&&a.jsx(w,{sx:{pt:"25%",borderRadius:1.5}}),[0,1,2].includes(o)&&a.jsx(w,{sx:{pt:"25%",borderRadius:1.5}})]},o))}const dr=[h.Down,h.Right,h.Up,h.Left],br=(r,{context:{active:e,droppableRects:n,droppableContainers:l,collisionRect:o}})=>{var g;if(dr.includes(r.code)){if(r.preventDefault(),!e||!o)return;const s=[];l.getEnabled().forEach(t=>{var v;if(!t||t!=null&&t.disabled)return;const c=n.get(t.id);if(!c)return;const i=t.data.current;if(i){const{type:p,children:C}=i;if(p==="container"&&(C==null?void 0:C.length)>0&&((v=e.data.current)==null?void 0:v.type)!=="container")return}switch(r.code){case h.Down:o.top<c.top&&s.push(t);break;case h.Up:o.top>c.top&&s.push(t);break;case h.Left:o.left>=c.left+c.width&&s.push(t);break;case h.Right:o.left+o.width<=c.left&&s.push(t);break}});const y=X({active:e,collisionRect:o,droppableRects:n,droppableContainers:s,pointerCoordinates:null}),u=Y(y,"id");if(u!=null){const t=l.get(u),c=t==null?void 0:t.node.current,i=t==null?void 0:t.rect.current;if(c&&i)return t.id==="placeholder"?{x:i.left+(i.width-o.width)/2,y:i.top+(i.height-o.height)/2}:((g=t.data.current)==null?void 0:g.type)==="container"?{x:i.left+20,y:i.top+74}:{x:i.left,y:i.top}}}};export{N as I,fr as K,xr as a,hr as b,br as c,d as k};
