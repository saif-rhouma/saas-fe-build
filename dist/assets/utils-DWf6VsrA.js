import{aU as D,S as x,s as w,v as p,r as b,j as n,B as h,cr as O,bI as E,dw as F,b as K,I as W,bq as M,A as G,C as U,T as R,aN as S,bT as z,aD as H,w as X}from"./index-C2cM-DBs.js";import{e as N,C as Y,f as q,i as J,j as Q,k as j,l as V,g as Z}from"./sortable.esm-BjqmcVNj.js";import{b as k}from"./InputBase-BLNKgjL-.js";import{S as I}from"./Skeleton-D4bHKsJA.js";import{i as A}from"./image-CAg2ZcR_.js";import{L as P}from"./ListItem-BfmlJSaG.js";import{A as ee}from"./AvatarGroup-B-uvJ4Qn.js";const t={item:"mnl__kanban__item",column:"mnl__kanban__column",itemWrap:"mnl__kanban__item__wrap",columnList:"mnl__kanban__column_list",state:{hover:"state-hover",fadeIn:"state-fade-in",sorting:"state-sorting",dragging:"state-dragging",disabled:"state-disabled",dragOverlay:"state-drag-overlay"}},re=D(x)(({theme:e})=>({flexShrink:0,height:"100%",borderWidth:1,position:"relative",borderStyle:"solid",borderColor:"transparent",padding:"var(--column-padding)",borderRadius:"var(--column-radius)",backgroundColor:e.vars.palette.background.neutral,[w.dark]:{backgroundColor:e.vars.palette.grey[800]},"&::before":{top:0,left:0,content:'""',width:"100%",height:"100%",position:"absolute",borderRadius:"inherit",backgroundColor:"transparent",transition:e.transitions.create(["background-color"])},[`&.${t.state.hover}`]:{"&::before":{backgroundColor:p(e.vars.palette.grey["500Channel"],.08),[w.dark]:{backgroundColor:p(e.vars.palette.grey["500Channel"],.16)}}},[`&.${t.state.dragOverlay}`]:{backdropFilter:"blur(6px)",borderColor:p(e.vars.palette.grey["500Channel"],.08),backgroundColor:p(e.vars.palette.background.neutralChannel,.48),[w.dark]:{backgroundColor:p(e.vars.palette.grey["800Channel"],.48)}},[`&.${t.state.dragging}`]:{opacity:0}})),ne=b.forwardRef(({slots:e,stateProps:r,sx:a,...l},i)=>{const g=t.column.concat((r==null?void 0:r.hover)&&` ${t.state.hover}`||(r==null?void 0:r.dragOverlay)&&` ${t.state.dragOverlay}`||(r==null?void 0:r.dragging)&&` ${t.state.dragging}`||"");return n.jsxs(re,{ref:i,className:g,sx:{gap:2.5,width:"var(--column-width)",...a},...l,children:[(e==null?void 0:e.header)&&e.header,(e==null?void 0:e.action)&&(e==null?void 0:e.action),(e==null?void 0:e.main)&&n.jsx(h,{component:"ul",className:t.columnList,sx:{minHeight:80,display:"flex",gap:"var(--item-gap)",flexDirection:"column"},children:e.main})]})}),B=b.memo(ne);function ae({sx:e,...r}){return n.jsx(k,{sx:{[`&.${O.root}`]:{py:.75,borderRadius:1,typography:"h6",borderWidth:2,borderStyle:"solid",borderColor:"transparent",transition:a=>a.transitions.create(["padding-left","border-color"]),[`&.${O.focused}`]:{pl:.75,borderColor:"text.primary"}},[`& .${O.input}`]:{typography:"h6"},...e},...r})}function L({columnName:e,totalTasks:r}){const a=b.useRef(null),l=E(),[i,g]=b.useState(e);return b.useEffect(()=>{l.open&&a.current&&a.current.focus()},[l.open]),n.jsxs(x,{direction:"row",alignItems:"center",children:[n.jsx(F,{sx:{borderRadius:"50%",borderColor:s=>p(s.vars.palette.grey["500Channel"],.24)},children:r}),n.jsx(ae,{inputRef:a,placeholder:"Column name",value:i,inputProps:{id:`input-column-${i}`},sx:{mx:1}})]})}function pe({children:e,column:r,tasks:a,disabled:l,sx:i}){var m;const{attributes:g,isDragging:s,listeners:f,setNodeRef:u,transition:o,active:c,over:d,transform:y}=N({id:r.id,data:{type:"container",children:a},animateLayoutChanges:ie}),C=a==null?void 0:a.map($=>$.id),v=d?r.id===d.id&&((m=c==null?void 0:c.data.current)==null?void 0:m.type)!=="container"||C.includes(d.id):!1;return n.jsx(B,{ref:l?void 0:u,sx:{transition:o,transform:Y.Translate.toString(y),...i},stateProps:{dragging:s,hover:v,handleProps:{...g,...f}},slots:{header:n.jsx(L,{totalTasks:a.length,columnName:r.name}),main:n.jsx(n.Fragment,{children:e})}})}const ie=e=>q({...e,wasDragging:!0}),oe=D(P)(()=>({"@keyframes fadeIn":{"0%":{opacity:0},"100%":{opacity:1}},transform:"translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1))",transformOrigin:"0 0",touchAction:"manipulation",[`&.${t.state.fadeIn}`]:{animation:"fadeIn 500ms ease"},[`&.${t.state.dragOverlay}`]:{zIndex:999}})),te=D(x)(({theme:e})=>({width:"100%",cursor:"grab",outline:"none",overflow:"hidden",position:"relative",transformOrigin:"50% 50%",touchAction:"manipulation",boxShadow:e.customShadows.z1,borderRadius:"var(--item-radius)",WebkitTapHighlightColor:"transparent",backgroundColor:e.vars.palette.common.white,transition:e.transitions.create(["box-shadow"]),[w.dark]:{backgroundColor:e.vars.palette.grey[900]},[`&.${t.state.disabled}`]:{},[`&.${t.state.sorting}`]:{},[`&.${t.state.dragOverlay}`]:{backdropFilter:"blur(6px)",boxShadow:e.customShadows.z20,backgroundColor:p(e.vars.palette.common.whiteChannel,.48),[w.dark]:{backgroundColor:p(e.vars.palette.grey["900Channel"],.48)}},[`&.${t.state.dragging}`]:{opacity:.2,filter:"grayscale(1)"}})),de=b.forwardRef(({task:e,stateProps:r,sx:a,...l},i)=>{var c,d,y,C,v;const g=K();b.useEffect(()=>{if(r!=null&&r.dragOverlay)return document.body.style.cursor="grabbing",()=>{document.body.style.cursor=""}},[r==null?void 0:r.dragOverlay]);const s=t.itemWrap.concat((r==null?void 0:r.fadeIn)&&` ${t.state.fadeIn}`||(r==null?void 0:r.dragOverlay)&&` ${t.state.dragOverlay}`||""),f=t.item.concat((r==null?void 0:r.dragging)&&` ${t.state.dragging}`||(r==null?void 0:r.disabled)&&` ${t.state.disabled}`||(r==null?void 0:r.sorting)&&` ${t.state.sorting}`||(r==null?void 0:r.dragOverlay)&&` ${t.state.dragOverlay}`||""),u=n.jsx(W,{icon:e.status==="Delivered"?"solar:double-alt-arrow-up-bold-duotone":"solar:double-alt-arrow-right-bold-duotone",sx:{top:4,right:4,position:"absolute",...e.status==="Delivered"&&{color:"info.main"},...e.status==="Ready"&&{color:"warning.main"},...e.status==="InProcess"&&{color:"error.main"}}});(c=e==null?void 0:e.attachments)!=null&&c.length&&(h,g.spacing(1,1,0,1),h,A.root,(d=e==null?void 0:e.attachments)==null||d[0],(y=e==null?void 0:e.attachments)==null||y[0]);const o=n.jsxs(x,{direction:"row",alignItems:"center",children:[n.jsx(x,{flexGrow:1,direction:"row",alignItems:"center",sx:{typography:"caption",color:"text.disabled"},children:n.jsx(h,{component:"span",sx:{mr:1},children:"Product:"})}),n.jsx(ee,{sx:{[`& .${M.avatar}`]:{width:24,height:24}},children:(C=e==null?void 0:e.productToOrder)==null?void 0:C.map(m=>{var $,T;return n.jsx(G,{alt:($=m==null?void 0:m.product)==null?void 0:$.name,src:`${U.site.serverFileHost}${(T=m==null?void 0:m.product)==null?void 0:T.image}`},m==null?void 0:m.id)})})]});return n.jsx(oe,{ref:i,disablePadding:!0,className:s,sx:{...!!(r!=null&&r.transition)&&{transition:r.transition},...!!(r!=null&&r.transform)&&{"--translate-x":`${Math.round(r.transform.x)}px`,"--translate-y":`${Math.round(r.transform.y)}px`,"--scale-x":`${r.transform.scaleX}`,"--scale-y":`${r.transform.scaleY}`}},children:n.jsx(te,{className:f,"data-cypress":"draggable-item",sx:a,tabIndex:0,...r==null?void 0:r.listeners,...l,children:n.jsxs(x,{spacing:1,sx:{px:2,py:2.5,position:"relative"},children:[u,n.jsxs(x,{direction:"row",justifyContent:"space-between",children:[n.jsx(R,{variant:"subtitle2",children:(v=e==null?void 0:e.customer)==null?void 0:v.name}),n.jsxs(R,{variant:"subtitle2",children:["ORD-",e==null?void 0:e.id]})]}),n.jsxs(x,{direction:"row",justifyContent:"space-between",sx:{typography:"body2"},children:[n.jsx(h,{sx:{color:"text.secondary"},children:"Order Date:"}),n.jsx(h,{sx:{color:"text.secondary"},children:S(e==null?void 0:e.orderDate)})]}),n.jsxs(x,{direction:"row",justifyContent:"space-between",sx:{typography:"body2"},children:[n.jsx(h,{sx:{color:"text.secondary"},children:"Delivery Date:"}),n.jsx(h,{sx:{color:"text.secondary"},children:e.deliveryDate?S(e==null?void 0:e.deliveryDate):"-"})]}),n.jsxs(x,{direction:"row",justifyContent:"space-between",sx:{typography:"body2"},children:[n.jsx(h,{sx:{color:"text.secondary"},children:"Last Updated Date:"}),n.jsx(h,{sx:{color:"text.secondary"},children:S(e==null?void 0:e.updateTime)})]}),o]})})})}),_=b.memo(de),le={sideEffects:Q({styles:{active:{opacity:"0.5"}}})};function je({columns:e,tasks:r,activeId:a,sx:l}){const i=e.map(u=>u.id),g=e.find(u=>u.id===a),f=Object.values(r).flat().find(u=>u.id===a);return n.jsx(z,{children:n.jsx(J,{adjustScale:!1,dropAnimation:le,children:a?n.jsx(n.Fragment,{children:i.includes(a)?n.jsx(ce,{column:g,tasks:r[a],sx:l}):n.jsx(se,{task:f,sx:l})}):null})})}function ce({column:e,tasks:r,sx:a}){return n.jsx(B,{slots:{header:n.jsx(L,{columnName:e.name,totalTasks:r.length}),main:r.map(l=>n.jsx(_,{task:l},l.id))},stateProps:{dragOverlay:!0},sx:a})}function se({task:e,sx:r}){return n.jsx(_,{task:e,sx:r,stateProps:{dragOverlay:!0}})}function Ce({amount:e=3,sx:r,...a}){return[...Array(e)].map((l,i)=>n.jsxs(H,{variant:"outlined",sx:{display:"flex",gap:"var(--item-gap)",flexDirection:"column",p:"var(--column-padding)",width:"var(--column-width)",borderRadius:"var(--column-radius)",...r},...a,children:[n.jsx(I,{sx:{pt:"75%",borderRadius:1.5}}),[0].includes(i)&&n.jsx(I,{sx:{pt:"50%",borderRadius:1.5}}),[0,1].includes(i)&&n.jsx(I,{sx:{pt:"25%",borderRadius:1.5}}),[0,1,2].includes(i)&&n.jsx(I,{sx:{pt:"25%",borderRadius:1.5}})]},i))}function we({task:e,disabled:r,columnId:a,sx:l}){const i=X(),{setNodeRef:g,listeners:s,isDragging:f,isSorting:u,transform:o,transition:c}=N({id:e==null?void 0:e.id}),d=ue(),y=f&&!d;return n.jsx(n.Fragment,{children:n.jsx(_,{ref:r?void 0:g,task:e,onClick:i.onTrue,stateProps:{transform:o,listeners:s,transition:c,sorting:u,dragging:f,fadeIn:y},sx:{...i.value&&{[`& .${A.root}`]:{opacity:.8}},...l}})})}function ue(){const[e,r]=b.useState(!1);return b.useEffect(()=>{const a=setTimeout(()=>r(!0),500);return()=>clearTimeout(a)},[]),e}const ge=[j.Down,j.Right,j.Up,j.Left],$e=(e,{context:{active:r,droppableRects:a,droppableContainers:l,collisionRect:i}})=>{var g;if(ge.includes(e.code)){if(e.preventDefault(),!r||!i)return;const s=[];l.getEnabled().forEach(o=>{var y;if(!o||o!=null&&o.disabled)return;const c=a.get(o.id);if(!c)return;const d=o.data.current;if(d){const{type:C,children:v}=d;if(C==="container"&&(v==null?void 0:v.length)>0&&((y=r.data.current)==null?void 0:y.type)!=="container")return}switch(e.code){case j.Down:i.top<c.top&&s.push(o);break;case j.Up:i.top>c.top&&s.push(o);break;case j.Left:i.left>=c.left+c.width&&s.push(o);break;case j.Right:i.left+i.width<=c.left&&s.push(o);break}});const f=V({active:r,collisionRect:i,droppableRects:a,droppableContainers:s,pointerCoordinates:null}),u=Z(f,"id");if(u!=null){const o=l.get(u),c=o==null?void 0:o.node.current,d=o==null?void 0:o.rect.current;if(c&&d)return o.id==="placeholder"?{x:d.left+(d.width-i.width)/2,y:d.top+(d.height-i.height)/2}:((g=o.data.current)==null?void 0:g.type)==="container"?{x:d.left+20,y:d.top+74}:{x:d.left,y:d.top}}}};export{pe as K,we as a,je as b,$e as c,Ce as d,t as k};
