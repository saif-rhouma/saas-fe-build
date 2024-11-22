import{aw as $,B as k,S as j,v as y,s as I,r as c,j as n,l as w,I as O,e as N,b1 as z,p as E,H as T,C as F}from"./index-BNST9t3H.js";import{C as W}from"./custom-breadcrumbs-BiTdiLox.js";import{C as H}from"./component-hero-C4hEpxtM.js";import{a as G,b as C,s as K,K as L,T as V,d as X,D as Y,c as q,M as J,S as Q,k as U,u as Z,l as P,m as ee,n as ne,o as ae,e as re,j as ie}from"./sortable.esm-CElC6z2x.js";import{S as te}from"./component-template-C07OpuiQ.js";import"./CardHeader-bE6dVpbn.js";import"./CardContent-BKCO-1ok.js";const i={item:"dnd__item",itemWrap:"dnd__item__wrap",removeBtn:"dnd__remove__btn",state:{sorting:"state-sorting",dragging:"state-dragging",dragOverlay:"state-drag-overlay"}},oe=$(k)(()=>({flexShrink:0,display:"flex",transform:"translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1))",transformOrigin:"0 0",touchAction:"manipulation",[`&.${i.state.dragOverlay}`]:{zIndex:999}})),le=$(j)(({theme:a})=>({...a.typography.h2,width:"100%",outline:"none",overflow:"hidden",textAlign:"center",position:"relative",padding:a.spacing(5),transformOrigin:"50% 50%",touchAction:"manipulation",WebkitTapHighlightColor:"transparent",borderRadius:a.shape.borderRadius*2,backgroundColor:a.vars.palette.common.white,transition:a.transitions.create(["box-shadow"]),color:y(a.vars.palette.text.disabledChannel,.24),border:`solid 1px ${y(a.vars.palette.grey["500Channel"],.16)}`,[I.dark]:{backgroundColor:a.vars.palette.grey[900]},"&:hover":{[`& .${i.removeBtn}`]:{opacity:.48}},[`& .${i.removeBtn}`]:{opacity:0,transition:a.transitions.create(["opacity"])},[`&.${i.state.dragOverlay}`]:{backdropFilter:"blur(6px)",boxShadow:a.customShadows.z20,color:a.vars.palette.text.primary,backgroundColor:y(a.vars.palette.common.whiteChannel,.48),[I.dark]:{backgroundColor:y(a.vars.palette.grey["900Channel"],.48)}},[`&.${i.state.dragging}`]:{opacity:.24,backgroundColor:y(a.vars.palette.grey["500Channel"],.12)}})),de=c.forwardRef(({item:a,stateProps:e,onRemove:l,sx:m,...t},d)=>{c.useEffect(()=>{if(e!=null&&e.dragOverlay)return document.body.style.cursor="grabbing",()=>{document.body.style.cursor=""}},[e==null?void 0:e.dragOverlay]);const g=i.itemWrap.concat((e==null?void 0:e.dragOverlay)&&` ${i.state.dragging}`||(e==null?void 0:e.dragOverlay)&&` ${i.state.sorting}`||(e==null?void 0:e.dragOverlay)&&` ${i.state.dragOverlay}`||""),u=i.item.concat((e==null?void 0:e.dragging)&&` ${i.state.dragging}`||(e==null?void 0:e.sorting)&&` ${i.state.sorting}`||(e==null?void 0:e.dragOverlay)&&` ${i.state.dragOverlay}`||"");return n.jsx(oe,{ref:d,component:"li",className:g,sx:{...!!(e!=null&&e.transition)&&{transition:e.transition},...!!(e!=null&&e.transform)&&{"--translate-x":`${Math.round(e.transform.x)}px`,"--translate-y":`${Math.round(e.transform.y)}px`,"--scale-x":`${e.transform.scaleX}`,"--scale-y":`${e.transform.scaleY}`}},children:n.jsxs(le,{className:u,"data-cypress":"draggable-item",sx:m,...t,children:[a,n.jsxs(j,{direction:"row",sx:{top:6,right:6,zIndex:9,position:"absolute"},children:[n.jsx(w,{disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,size:"small",onClick:l,className:i.removeBtn,children:n.jsx(O,{icon:"solar:close-circle-bold"})}),n.jsx(w,{disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,...e==null?void 0:e.handleProps,...e==null?void 0:e.listeners,size:"small",children:n.jsx(O,{icon:"nimbus:drag-dots"})})]})]})})}),D=c.memo(de),se={sideEffects:P({styles:{active:{opacity:"0.5"}}})};function p({itemCount:a=12,swap:e=!1,layout:l="grid"}){const m=[...Array(a)].map((r,o)=>o+1),[t,d]=c.useState(m),g=G(C(X),C(V),C(L,{coordinateGetter:K})),u=c.useRef(!0),f=Math.floor(Math.random()*200),[s,v]=c.useState(null),h=r=>t.indexOf(r),b=s?h(s):-1,A=e?ee:ne,S=e?ae:re,R=e?({id:r,items:o,activeIndex:x,overIndex:M})=>S(o,x,M).indexOf(r):void 0;c.useEffect(()=>{s||(u.current=!0)},[s]);const B=()=>{d([...t,f])},_=r=>{const o=t.filter(x=>x!==r);d(o)};return n.jsxs(j,{alignItems:"flex-end",children:[n.jsx(N,{variant:"contained",onClick:B,children:"+ Add item"}),n.jsxs(Y,{id:"dnd-grid",sensors:g,collisionDetection:q,measuring:{droppable:{strategy:J.Always}},onDragStart:({active:r})=>{r&&v(r.id)},onDragEnd:({over:r})=>{if(v(null),r){const o=h(r.id);b!==o&&d(x=>S(x,b,o))}},children:[n.jsx(Q,{items:t,strategy:A,children:n.jsx(k,{component:"ul",sx:{py:3,gap:2,width:1,...l==="grid"&&{display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(4, 1fr)"}},...l==="vertical"&&{display:"flex",flexDirection:"column"},...l==="horizontal"&&{display:"flex",overflowX:"auto",flexDirection:"row",[`& .${i.itemWrap}`]:{maxWidth:180}}},children:t.map((r,o)=>n.jsx(me,{id:r,index:o,getNewIndex:R,onRemove:()=>_(r)},r))})}),n.jsx(z,{children:n.jsx(U,{dropAnimation:se,children:s?n.jsx(D,{item:t[b],stateProps:{dragOverlay:!0}}):null})})]})]})}const ce=a=>ie({...a,wasDragging:!0});function me({id:a,index:e,onRemove:l,getNewIndex:m}){const{isSorting:t,transform:d,listeners:g,attributes:u,isDragging:f,setNodeRef:s,transition:v,setActivatorNodeRef:h}=Z({id:a,getNewIndex:m,animateLayoutChanges:ce});return n.jsx(D,{ref:s,item:a,"data-id":a,"data-index":e,onRemove:l,stateProps:{listeners:g,transform:d,transition:v,sorting:t,dragging:f,dragOverlay:f,handleProps:{ref:h}},...u})}function ge(){const a=[{name:"Grid",component:n.jsx(p,{swap:!0})},{name:"Vertical",component:n.jsx(p,{layout:"vertical",itemCount:4})},{name:"Horizontal",component:n.jsx(p,{layout:"horizontal",itemCount:3})}];return n.jsxs(n.Fragment,{children:[n.jsx(H,{children:n.jsx(W,{heading:"Dnd",links:[{name:"Components",href:E.components},{name:"Dnd"}],moreLink:["https://docs.dndkit.com/"]})}),n.jsx(te,{data:a})]})}const ue={title:`Dnd | Components - ${F.site.name}`};function pe(){return n.jsxs(n.Fragment,{children:[n.jsx(T,{children:n.jsxs("title",{children:[" ",ue.title]})}),n.jsx(ge,{})]})}export{pe as default};
