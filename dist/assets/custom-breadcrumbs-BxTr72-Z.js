import{bz as k,j as r,aO as b,aP as N,aS as p,dB as M,aV as A,bk as U,bl as H,T as E,r as h,aU as O,bR as W,aW as V,aX as q,B as d,L,R as F,S as z}from"./index-CBaC8EHo.js";const G=k(r.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),X=["slots","slotProps"],D=b(N)(({theme:e})=>p({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":p({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":p({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:M(e.palette.grey[200],.12)}:{backgroundColor:M(e.palette.grey[600],.12)})})),J=b(G)({width:24,height:16});function K(e){const{slots:s={},slotProps:n={}}=e,o=A(e,X),t=e;return r.jsx("li",{children:r.jsx(D,p({focusRipple:!0},o,{ownerState:t,children:r.jsx(J,p({as:s.CollapsedIcon,ownerState:t},n.collapsedIcon))}))})}function Q(e){return H("MuiBreadcrumbs",e)}const Y=U("MuiBreadcrumbs",["root","ol","li","separator"]),Z=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],P=e=>{const{classes:s}=e;return q({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},Q,s)},ee=b(E,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,s)=>[{[`& .${Y.li}`]:s.li},s.root]})({}),re=b("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,s)=>s.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),se=b("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,s)=>s.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function ae(e,s,n,o){return e.reduce((t,a,i)=>(i<e.length-1?t=t.concat(a,r.jsx(se,{"aria-hidden":!0,className:s,ownerState:o,children:n},`separator-${i}`)):t.push(a),t),[])}const oe=h.forwardRef(function(s,n){const o=O({props:s,name:"MuiBreadcrumbs"}),{children:t,className:a,component:i="nav",slots:f={},slotProps:j={},expandText:y="Show path",itemsAfterCollapse:u=1,itemsBeforeCollapse:x=1,maxItems:m=8,separator:l="/"}=o,B=A(o,Z),[v,T]=h.useState(!1),g=p({},o,{component:i,expanded:v,expandText:y,itemsAfterCollapse:u,itemsBeforeCollapse:x,maxItems:m,separator:l}),C=P(g),_=W({elementType:f.CollapsedIcon,externalSlotProps:j.collapsedIcon,ownerState:g}),I=h.useRef(null),$=c=>{const R=()=>{T(!0);const w=I.current.querySelector("a[href],button,[tabindex]");w&&w.focus()};return x+u>=c.length?c:[...c.slice(0,x),r.jsx(K,{"aria-label":y,slots:{CollapsedIcon:f.CollapsedIcon},slotProps:{collapsedIcon:_},onClick:R},"ellipsis"),...c.slice(c.length-u,c.length)]},S=h.Children.toArray(t).filter(c=>h.isValidElement(c)).map((c,R)=>r.jsx("li",{className:C.li,children:c},`child-${R}`));return r.jsx(ee,p({ref:n,component:i,color:"text.secondary",className:V(C.root,a),ownerState:g},B,{children:r.jsx(re,{className:C.ol,ref:I,ownerState:g,children:ae(v||m&&S.length<=m?S:$(S),C.separator,l,g)})}))});function te({link:e,activeLast:s,disabled:n}){const o={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...n&&!s&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},t=r.jsxs(r.Fragment,{children:[e.icon&&r.jsx(d,{component:"span",sx:{mr:1,display:"inherit","& svg, & img":{width:20,height:20}},children:e.icon}),e.name]});return e.href?r.jsx(L,{component:F,href:e.href,sx:o,children:t}):r.jsxs(d,{sx:o,children:[" ",t," "]})}function ce({links:e,action:s,heading:n,moreLink:o,activeLast:t,slotProps:a,sx:i,...f}){const j=e[e.length-1].name,y=r.jsx(E,{variant:"h4",sx:{mb:2,...a==null?void 0:a.heading},children:n}),u=r.jsx(oe,{separator:r.jsx(ne,{}),sx:a==null?void 0:a.breadcrumbs,...f,children:e.map((l,B)=>r.jsx(te,{link:l,activeLast:t,disabled:l.name===j},l.name??B))}),x=r.jsxs(d,{sx:{flexShrink:0,...a==null?void 0:a.action},children:[" ",s," "]}),m=r.jsx(d,{component:"ul",children:o==null?void 0:o.map(l=>r.jsx(d,{component:"li",sx:{display:"flex"},children:r.jsx(L,{href:l,variant:"body2",target:"_blank",rel:"noopener",sx:a==null?void 0:a.moreLink,children:l})},l))});return r.jsxs(z,{spacing:2,sx:i,children:[r.jsxs(z,{direction:"row",alignItems:"center",children:[r.jsxs(d,{sx:{flexGrow:1},children:[n&&y,!!e.length&&u]}),s&&x]}),!!o&&m]})}function ne(){return r.jsx(d,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}export{oe as B,ce as C};
