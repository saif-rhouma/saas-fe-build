import{h as N,e4 as L,r as m,e5 as B,aw as I,S as f,s as j,v as h,j as n,B as x,bN as $,aP as E,d7 as F,I as K,aL as W,A as k,C as G,T as _,d0 as O,bR as H,b1 as z}from"./index-lHvWnAth.js";import{f as b,i as M,g as U,u as X,C as Y,j as q,k as J,l as Q}from"./sortable.esm-HcqcQ3yW.js";import{S as w}from"./Skeleton-ncCqEAG6.js";import{L as V}from"./ListItem-L0CrgSc-.js";import{A as Z}from"./AvatarGroup-CWb37ZEO.js";import{b as P}from"./InputBase-B1y_nGV8.js";function be(e){const{user:r}=N(),{permissions:a}=L(),[l,i]=m.useState(!1),s=m.useCallback(u=>a.includes(u),[a]);return m.useEffect(()=>{r.roles[0]===B.STAFF?i(s(e)):i(!0)},[e,s,r.roles]),l}const d={item:"mnl__kanban__item",column:"mnl__kanban__column",itemWrap:"mnl__kanban__item__wrap",columnList:"mnl__kanban__column_list",state:{hover:"state-hover",fadeIn:"state-fade-in",sorting:"state-sorting",dragging:"state-dragging",disabled:"state-disabled",dragOverlay:"state-drag-overlay"}},ee=[b.Down,b.Right,b.Up,b.Left],ye=(e,{context:{active:r,droppableRects:a,droppableContainers:l,collisionRect:i}})=>{var s;if(ee.includes(e.code)){if(e.preventDefault(),!r||!i)return;const u=[];l.getEnabled().forEach(t=>{var v;if(!t||t!=null&&t.disabled)return;const c=a.get(t.id);if(!c)return;const o=t.data.current;if(o){const{type:p,children:C}=o;if(p==="container"&&(C==null?void 0:C.length)>0&&((v=r.data.current)==null?void 0:v.type)!=="container")return}switch(e.code){case b.Down:i.top<c.top&&u.push(t);break;case b.Up:i.top>c.top&&u.push(t);break;case b.Left:i.left>=c.left+c.width&&u.push(t);break;case b.Right:i.left+i.width<=c.left&&u.push(t);break}});const y=M({active:r,collisionRect:i,droppableRects:a,droppableContainers:u,pointerCoordinates:null}),g=U(y,"id");if(g!=null){const t=l.get(g),c=t==null?void 0:t.node.current,o=t==null?void 0:t.rect.current;if(c&&o)return t.id==="placeholder"?{x:o.left+(o.width-i.width)/2,y:o.top+(o.height-i.height)/2}:((s=t.data.current)==null?void 0:s.type)==="container"?{x:o.left+20,y:o.top+74}:{x:o.left,y:o.top}}}},re=I(f)(({theme:e})=>({flexShrink:0,height:"100%",borderWidth:1,position:"relative",borderStyle:"solid",borderColor:"transparent",padding:"var(--column-padding)",borderRadius:"var(--column-radius)",backgroundColor:e.vars.palette.background.neutral,[j.dark]:{backgroundColor:e.vars.palette.grey[800]},"&::before":{top:0,left:0,content:'""',width:"100%",height:"100%",position:"absolute",borderRadius:"inherit",backgroundColor:"transparent",transition:e.transitions.create(["background-color"])},[`&.${d.state.hover}`]:{"&::before":{backgroundColor:h(e.vars.palette.grey["500Channel"],.08),[j.dark]:{backgroundColor:h(e.vars.palette.grey["500Channel"],.16)}}},[`&.${d.state.dragOverlay}`]:{backdropFilter:"blur(6px)",borderColor:h(e.vars.palette.grey["500Channel"],.08),backgroundColor:h(e.vars.palette.background.neutralChannel,.48),[j.dark]:{backgroundColor:h(e.vars.palette.grey["800Channel"],.48)}},[`&.${d.state.dragging}`]:{opacity:0}})),ne=m.forwardRef(({slots:e,stateProps:r,sx:a,...l},i)=>{const s=d.column.concat((r==null?void 0:r.hover)&&` ${d.state.hover}`||(r==null?void 0:r.dragOverlay)&&` ${d.state.dragOverlay}`||(r==null?void 0:r.dragging)&&` ${d.state.dragging}`||"");return n.jsxs(re,{ref:i,className:s,sx:{gap:2.5,width:"var(--column-width)",...a},...l,children:[(e==null?void 0:e.header)&&e.header,(e==null?void 0:e.action)&&(e==null?void 0:e.action),(e==null?void 0:e.main)&&n.jsx(x,{component:"ul",className:d.columnList,sx:{minHeight:80,display:"flex",gap:"var(--item-gap)",flexDirection:"column"},children:e.main})]})}),D=m.memo(ne);function ae({sx:e,...r}){return n.jsx(P,{sx:{[`&.${$.root}`]:{py:.75,borderRadius:1,typography:"h6",borderWidth:2,borderStyle:"solid",borderColor:"transparent",transition:a=>a.transitions.create(["padding-left","border-color"]),[`&.${$.focused}`]:{pl:.75,borderColor:"text.primary"}},[`& .${$.input}`]:{typography:"h6"},...e},...r})}function R({columnName:e,totalTasks:r}){const a=m.useRef(null),l=E(),[i,s]=m.useState(e);return m.useEffect(()=>{l.open&&a.current&&a.current.focus()},[l.open]),n.jsxs(f,{direction:"row",alignItems:"center",children:[n.jsx(F,{sx:{borderRadius:"50%",borderColor:u=>h(u.vars.palette.grey["500Channel"],.24)},children:r}),n.jsx(ae,{inputRef:a,placeholder:"Column name",value:i,inputProps:{id:`input-column-${i}`},sx:{mx:1}})]})}function ve({children:e,column:r,tasks:a,disabled:l,sx:i}){var S;const{attributes:s,isDragging:u,listeners:y,setNodeRef:g,transition:t,active:c,over:o,transform:v}=X({id:r.id,data:{type:"container",children:a},animateLayoutChanges:ie}),p=a==null?void 0:a.map(A=>A.id),C=o?r.id===o.id&&((S=c==null?void 0:c.data.current)==null?void 0:S.type)!=="container"||p.includes(o.id):!1;return n.jsx(D,{ref:l?void 0:g,sx:{transition:t,transform:Y.Translate.toString(v),...i},stateProps:{dragging:u,hover:C,handleProps:{...s,...y}},slots:{header:n.jsx(R,{totalTasks:a.length,columnName:r.name}),main:n.jsx(n.Fragment,{children:e})}})}const ie=e=>q({...e,wasDragging:!0}),oe=I(V)(()=>({"@keyframes fadeIn":{"0%":{opacity:0},"100%":{opacity:1}},transform:"translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1))",transformOrigin:"0 0",touchAction:"manipulation",[`&.${d.state.fadeIn}`]:{animation:"fadeIn 500ms ease"},[`&.${d.state.dragOverlay}`]:{zIndex:999}})),te=I(f)(({theme:e})=>({width:"100%",cursor:"grab",outline:"none",overflow:"hidden",position:"relative",transformOrigin:"50% 50%",touchAction:"manipulation",boxShadow:e.customShadows.z1,borderRadius:"var(--item-radius)",WebkitTapHighlightColor:"transparent",backgroundColor:e.vars.palette.common.white,transition:e.transitions.create(["box-shadow"]),[j.dark]:{backgroundColor:e.vars.palette.grey[900]},[`&.${d.state.disabled}`]:{},[`&.${d.state.sorting}`]:{},[`&.${d.state.dragOverlay}`]:{backdropFilter:"blur(6px)",boxShadow:e.customShadows.z20,backgroundColor:h(e.vars.palette.common.whiteChannel,.48),[j.dark]:{backgroundColor:h(e.vars.palette.grey["900Channel"],.48)}},[`&.${d.state.dragging}`]:{opacity:.2,filter:"grayscale(1)"}})),de=m.forwardRef(({task:e,stateProps:r,sx:a,...l},i)=>{var t,c;m.useEffect(()=>{if(r!=null&&r.dragOverlay)return document.body.style.cursor="grabbing",()=>{document.body.style.cursor=""}},[r==null?void 0:r.dragOverlay]);const s=d.itemWrap.concat((r==null?void 0:r.fadeIn)&&` ${d.state.fadeIn}`||(r==null?void 0:r.dragOverlay)&&` ${d.state.dragOverlay}`||""),u=d.item.concat((r==null?void 0:r.dragging)&&` ${d.state.dragging}`||(r==null?void 0:r.disabled)&&` ${d.state.disabled}`||(r==null?void 0:r.sorting)&&` ${d.state.sorting}`||(r==null?void 0:r.dragOverlay)&&` ${d.state.dragOverlay}`||""),y=n.jsx(K,{icon:e.status==="Delivered"?"solar:double-alt-arrow-up-bold-duotone":"solar:double-alt-arrow-right-bold-duotone",sx:{top:4,right:4,position:"absolute",...e.status==="Delivered"&&{color:"info.main"},...e.status==="Ready"&&{color:"warning.main"},...e.status==="InProcess"&&{color:"error.main"}}}),g=n.jsxs(f,{direction:"row",alignItems:"center",children:[n.jsx(f,{flexGrow:1,direction:"row",alignItems:"center",sx:{typography:"caption",color:"text.disabled"},children:n.jsx(x,{component:"span",sx:{mr:1},children:"Product:"})}),n.jsx(Z,{sx:{[`& .${W.avatar}`]:{width:24,height:24}},children:(t=e==null?void 0:e.productToOrder)==null?void 0:t.map(o=>{var v,p;return n.jsx(k,{alt:(v=o==null?void 0:o.product)==null?void 0:v.name,src:`${G.site.serverFileHost}${(p=o==null?void 0:o.product)==null?void 0:p.image}`},o==null?void 0:o.id)})})]});return n.jsx(oe,{ref:i,disablePadding:!0,className:s,sx:{...!!(r!=null&&r.transition)&&{transition:r.transition},...!!(r!=null&&r.transform)&&{"--translate-x":`${Math.round(r.transform.x)}px`,"--translate-y":`${Math.round(r.transform.y)}px`,"--scale-x":`${r.transform.scaleX}`,"--scale-y":`${r.transform.scaleY}`}},children:n.jsx(te,{className:u,"data-cypress":"draggable-item",sx:a,tabIndex:0,...r==null?void 0:r.listeners,...l,children:n.jsxs(f,{spacing:1,sx:{px:2,py:2.5,position:"relative"},children:[y,n.jsxs(f,{direction:"row",justifyContent:"space-between",children:[n.jsx(_,{variant:"subtitle2",children:(c=e==null?void 0:e.customer)==null?void 0:c.name}),n.jsx(_,{variant:"subtitle2",children:e==null?void 0:e.ref})]}),n.jsxs(f,{direction:"row",justifyContent:"space-between",sx:{typography:"body2"},children:[n.jsx(x,{sx:{color:"text.secondary"},children:"Order Date:"}),n.jsx(x,{sx:{color:"text.secondary"},children:O(e==null?void 0:e.orderDate)})]}),n.jsxs(f,{direction:"row",justifyContent:"space-between",sx:{typography:"body2"},children:[n.jsx(x,{sx:{color:"text.secondary"},children:"Delivery Date:"}),n.jsx(x,{sx:{color:"text.secondary"},children:e.deliveryDate?O(e==null?void 0:e.deliveryDate):"-"})]}),n.jsxs(f,{direction:"row",justifyContent:"space-between",sx:{typography:"body2"},children:[n.jsx(x,{sx:{color:"text.secondary"},children:"Last Updated Date:"}),n.jsx(x,{sx:{color:"text.secondary"},children:O(e==null?void 0:e.updateTime)})]}),g]})})})}),T=m.memo(de);function pe({amount:e=3,sx:r,...a}){return[...Array(e)].map((l,i)=>n.jsxs(H,{variant:"outlined",sx:{display:"flex",gap:"var(--item-gap)",flexDirection:"column",p:"var(--column-padding)",width:"var(--column-width)",borderRadius:"var(--column-radius)",...r},...a,children:[n.jsx(w,{sx:{pt:"75%",borderRadius:1.5}}),[0].includes(i)&&n.jsx(w,{sx:{pt:"50%",borderRadius:1.5}}),[0,1].includes(i)&&n.jsx(w,{sx:{pt:"25%",borderRadius:1.5}}),[0,1,2].includes(i)&&n.jsx(w,{sx:{pt:"25%",borderRadius:1.5}})]},i))}const le={sideEffects:Q({styles:{active:{opacity:"0.5"}}})};function Ce({columns:e,tasks:r,activeId:a,sx:l}){const i=e.map(g=>g.id),s=e.find(g=>g.id===a),y=Object.values(r).flat().find(g=>g.id===a);return n.jsx(z,{children:n.jsx(J,{adjustScale:!1,dropAnimation:le,children:a?n.jsx(n.Fragment,{children:i.includes(a)?n.jsx(ce,{column:s,tasks:r[a],sx:l}):n.jsx(se,{task:y,sx:l})}):null})})}function ce({column:e,tasks:r,sx:a}){return n.jsx(D,{slots:{header:n.jsx(R,{columnName:e.name,totalTasks:r.length}),main:r.map(l=>n.jsx(T,{task:l},l.id))},stateProps:{dragOverlay:!0},sx:a})}function se({task:e,sx:r}){return n.jsx(T,{task:e,sx:r,stateProps:{dragOverlay:!0}})}export{T as I,ve as K,Ce as a,pe as b,ye as c,d as k,be as u};
