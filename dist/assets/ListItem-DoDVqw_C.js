import{bT as F,bU as E,aS as N,aW as o,r as d,aY as T,aZ as S,dc as I,j as l,a_ as A,a$ as w,dd as X,cb as x,c3 as tt,cf as et,bA as st,c7 as B,aT as ot}from"./index-C-IhHuTJ.js";function at(t){return E("MuiListItem",t)}const b=F("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);function nt(t){return E("MuiListItemSecondaryAction",t)}F("MuiListItemSecondaryAction",["root","disableGutters"]);const it=["className"],rt=t=>{const{disableGutters:e,classes:s}=t;return w({root:["root",e&&"disableGutters"]},nt,s)},ct=N("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>o({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),D=d.forwardRef(function(e,s){const a=T({props:e,name:"MuiListItemSecondaryAction"}),{className:n}=a,i=S(a,it),p=d.useContext(I),u=o({},a,{disableGutters:p.disableGutters}),g=rt(u);return l.jsx(ct,o({className:A(g.root,n),ownerState:u,ref:s},i))});D.muiName="ListItemSecondaryAction";const lt=["className"],dt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],pt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},ut=t=>{const{alignItems:e,button:s,classes:a,dense:n,disabled:i,disableGutters:p,disablePadding:u,divider:g,hasSecondaryAction:f,selected:L}=t;return w({root:["root",n&&"dense",!p&&"gutters",!u&&"padding",g&&"divider",i&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",f&&"secondaryAction",L&&"selected"],container:["container"]},at,a)},mt=N("div",{name:"MuiListItem",slot:"Root",overridesResolver:pt})(({theme:t,ownerState:e})=>o({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&o({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${X.root}`]:{paddingRight:48}},{[`&.${b.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${b.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${b.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${b.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),bt=N("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),ft=d.forwardRef(function(e,s){const a=T({props:e,name:"MuiListItem"}),{alignItems:n="center",autoFocus:i=!1,button:p=!1,children:u,className:g,component:f,components:L={},componentsProps:G={},ContainerComponent:O="li",ContainerProps:{className:W}={},dense:j=!1,disabled:M=!1,disableGutters:P=!1,disablePadding:Y=!1,divider:z=!1,focusVisibleClassName:H,secondaryAction:h,selected:Z=!1,slotProps:q={},slots:J={}}=a,K=S(a.ContainerProps,lt),Q=S(a,dt),k=d.useContext(I),R=d.useMemo(()=>({dense:j||k.dense||!1,alignItems:n,disableGutters:P}),[n,k.dense,j,P]),$=d.useRef(null);tt(()=>{i&&$.current&&$.current.focus()},[i]);const m=d.Children.toArray(u),U=m.length&&et(m[m.length-1],["ListItemSecondaryAction"]),y=o({},a,{alignItems:n,autoFocus:i,button:p,dense:R.dense,disabled:M,disableGutters:P,disablePadding:Y,divider:z,hasSecondaryAction:U,selected:Z}),V=ut(y),_=st($,s),C=J.root||L.Root||mt,v=q.root||G.root||{},r=o({className:A(V.root,v.className,g),disabled:M},Q);let c=f||"li";return p&&(r.component=f||"div",r.focusVisibleClassName=A(b.focusVisible,H),c=ot),U?(c=!r.component&&!f?"div":c,O==="li"&&(c==="li"?c="div":r.component==="li"&&(r.component="div")),l.jsx(I.Provider,{value:R,children:l.jsxs(bt,o({as:O,className:A(V.container,W),ref:_,ownerState:y},K,{children:[l.jsx(C,o({},v,!B(C)&&{as:c,ownerState:o({},y,v.ownerState)},r,{children:m})),m.pop()]}))})):l.jsx(I.Provider,{value:R,children:l.jsxs(C,o({},v,{as:c,ref:_},!B(C)&&{ownerState:o({},y,v.ownerState)},r,{children:[m,h&&l.jsx(D,{children:h})]}))})});export{ft as L,D as a};