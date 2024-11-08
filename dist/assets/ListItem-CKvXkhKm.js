import{b3 as U,b4 as _,aw as N,aA as o,r as d,aC as D,aD as S,cD as I,j as l,aE as A,aF as w,cE as Z,bz as x,br as tt,bD as et,bo as st,bv as B,ax as ot}from"./index-DSZ8-SnN.js";function at(t){return _("MuiListItem",t)}const m=U("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);function nt(t){return _("MuiListItemSecondaryAction",t)}U("MuiListItemSecondaryAction",["root","disableGutters"]);const it=["className"],rt=t=>{const{disableGutters:e,classes:s}=t;return w({root:["root",e&&"disableGutters"]},nt,s)},ct=N("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>o({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),T=d.forwardRef(function(e,s){const a=D({props:e,name:"MuiListItemSecondaryAction"}),{className:n}=a,i=S(a,it),p=d.useContext(I),u=o({},a,{disableGutters:p.disableGutters}),g=rt(u);return l.jsx(ct,o({className:A(g.root,n),ownerState:u,ref:s},i))});T.muiName="ListItemSecondaryAction";const lt=["className"],dt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],pt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},ut=t=>{const{alignItems:e,button:s,classes:a,dense:n,disabled:i,disableGutters:p,disablePadding:u,divider:g,hasSecondaryAction:f,selected:L}=t;return w({root:["root",n&&"dense",!p&&"gutters",!u&&"padding",g&&"divider",i&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",f&&"secondaryAction",L&&"selected"],container:["container"]},at,a)},bt=N("div",{name:"MuiListItem",slot:"Root",overridesResolver:pt})(({theme:t,ownerState:e})=>o({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&o({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${Z.root}`]:{paddingRight:48}},{[`&.${m.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${m.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${m.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${m.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),mt=N("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),ft=d.forwardRef(function(e,s){const a=D({props:e,name:"MuiListItem"}),{alignItems:n="center",autoFocus:i=!1,button:p=!1,children:u,className:g,component:f,components:L={},componentsProps:G={},ContainerComponent:O="li",ContainerProps:{className:z}={},dense:j=!1,disabled:M=!1,disableGutters:P=!1,disablePadding:H=!1,divider:W=!1,focusVisibleClassName:Y,secondaryAction:h,selected:q=!1,slotProps:J={},slots:K={}}=a,Q=S(a.ContainerProps,lt),X=S(a,dt),k=d.useContext(I),R=d.useMemo(()=>({dense:j||k.dense||!1,alignItems:n,disableGutters:P}),[n,k.dense,j,P]),$=d.useRef(null);tt(()=>{i&&$.current&&$.current.focus()},[i]);const b=d.Children.toArray(u),E=b.length&&et(b[b.length-1],["ListItemSecondaryAction"]),C=o({},a,{alignItems:n,autoFocus:i,button:p,dense:R.dense,disabled:M,disableGutters:P,disablePadding:H,divider:W,hasSecondaryAction:E,selected:q}),F=ut(C),V=st($,s),y=K.root||L.Root||bt,v=J.root||G.root||{},r=o({className:A(F.root,v.className,g),disabled:M},X);let c=f||"li";return p&&(r.component=f||"div",r.focusVisibleClassName=A(m.focusVisible,Y),c=ot),E?(c=!r.component&&!f?"div":c,O==="li"&&(c==="li"?c="div":r.component==="li"&&(r.component="div")),l.jsx(I.Provider,{value:R,children:l.jsxs(mt,o({as:O,className:A(F.container,z),ref:V,ownerState:C},Q,{children:[l.jsx(y,o({},v,!B(y)&&{as:c,ownerState:o({},C,v.ownerState)},r,{children:b})),b.pop()]}))})):l.jsx(I.Provider,{value:R,children:l.jsxs(y,o({},v,{as:c,ref:V},!B(y)&&{ownerState:o({},C,v.ownerState)},r,{children:[b,h&&l.jsx(T,{children:h})]}))})});export{ft as L,T as a};
