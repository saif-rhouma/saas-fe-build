import{r as n,aw as M,ax as D,az as k,aA as g,eA as x,cf as G,aD as j,b9 as V,aC as U,j as O,aE as _,aF as A,eB as H,b3 as q,b4 as I}from"./index-Dq-evvNl.js";function J(t){return n.Children.toArray(t).filter(o=>n.isValidElement(o))}const E=n.createContext({}),F=n.createContext(void 0);function K(t,o){return o===void 0||t===void 0?!1:Array.isArray(o)?o.indexOf(t)>=0:t===o}const Q=["value"],X=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],Y=t=>{const{classes:o,fullWidth:a,selected:r,disabled:f,size:c,color:v}=t,B={root:["root",r&&"selected",f&&"disabled",a&&"fullWidth",`size${k(c)}`,v]};return A(B,H,o)},Z=M(D,{name:"MuiToggleButton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[`size${k(a.size)}`]]}})(({theme:t,ownerState:o})=>{let a=o.color==="standard"?t.palette.text.primary:t.palette[o.color].main,r;return t.vars&&(a=o.color==="standard"?t.vars.palette.text.primary:t.vars.palette[o.color].main,r=o.color==="standard"?t.vars.palette.text.primaryChannel:t.vars.palette[o.color].mainChannel),g({},t.typography.button,{borderRadius:(t.vars||t).shape.borderRadius,padding:11,border:`1px solid ${(t.vars||t).palette.divider}`,color:(t.vars||t).palette.action.active},o.fullWidth&&{width:"100%"},{[`&.${x.disabled}`]:{color:(t.vars||t).palette.action.disabled,border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:G(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.selected}`]:{color:a,backgroundColor:t.vars?`rgba(${r} / ${t.vars.palette.action.selectedOpacity})`:G(a,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${r} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:G(a,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${r} / ${t.vars.palette.action.selectedOpacity})`:G(a,t.palette.action.selectedOpacity)}}}},o.size==="small"&&{padding:7,fontSize:t.typography.pxToRem(13)},o.size==="large"&&{padding:15,fontSize:t.typography.pxToRem(15)})}),at=n.forwardRef(function(o,a){const r=n.useContext(E),{value:f}=r,c=j(r,Q),v=n.useContext(F),B=V(g({},c,{selected:K(o.value,f)}),o),b=U({props:B,name:"MuiToggleButton"}),{children:h,className:p,color:L="standard",disabled:C=!1,disableFocusRipple:s=!1,fullWidth:N=!1,onChange:$,onClick:d,selected:T,size:m="medium",value:R}=b,y=j(b,X),z=g({},b,{color:L,disabled:C,disableFocusRipple:s,fullWidth:N,size:m}),P=Y(z),i=u=>{d&&(d(u,R),u.defaultPrevented)||$&&$(u,R)},l=v||"";return O.jsx(Z,g({className:_(c.className,P.root,p,l),disabled:C,focusRipple:!s,ref:a,onClick:i,onChange:$,value:R,ownerState:z,"aria-pressed":T},y,{children:h}))});function w(t){return I("MuiToggleButtonGroup",t)}const e=q("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),S=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],tt=t=>{const{classes:o,orientation:a,fullWidth:r,disabled:f}=t,c={root:["root",a==="vertical"&&"vertical",r&&"fullWidth"],grouped:["grouped",`grouped${k(a)}`,f&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return A(c,w,o)},ot=M("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[{[`& .${e.grouped}`]:o.grouped},{[`& .${e.grouped}`]:o[`grouped${k(a.orientation)}`]},{[`& .${e.firstButton}`]:o.firstButton},{[`& .${e.lastButton}`]:o.lastButton},{[`& .${e.middleButton}`]:o.middleButton},o.root,a.orientation==="vertical"&&o.vertical,a.fullWidth&&o.fullWidth]}})(({ownerState:t,theme:o})=>g({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},t.orientation==="vertical"&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},{[`& .${e.grouped}`]:g({},t.orientation==="horizontal"?{[`&.${e.selected} + .${e.grouped}.${e.selected}`]:{borderLeft:0,marginLeft:0}}:{[`&.${e.selected} + .${e.grouped}.${e.selected}`]:{borderTop:0,marginTop:0}})},t.orientation==="horizontal"?{[`& .${e.firstButton},& .${e.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${e.lastButton},& .${e.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0}}:{[`& .${e.firstButton},& .${e.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${e.lastButton},& .${e.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0}},t.orientation==="horizontal"?{[`& .${e.lastButton}.${x.disabled},& .${e.middleButton}.${x.disabled}`]:{borderLeft:"1px solid transparent"}}:{[`& .${e.lastButton}.${x.disabled},& .${e.middleButton}.${x.disabled}`]:{borderTop:"1px solid transparent"}})),rt=n.forwardRef(function(o,a){const r=U({props:o,name:"MuiToggleButtonGroup"}),{children:f,className:c,color:v="standard",disabled:B=!1,exclusive:b=!1,fullWidth:h=!1,onChange:p,orientation:L="horizontal",size:C="medium",value:s}=r,N=j(r,S),$=g({},r,{disabled:B,fullWidth:h,orientation:L,size:C}),d=tt($),T=n.useCallback((i,l)=>{if(!p)return;const u=s&&s.indexOf(l);let W;s&&u>=0?(W=s.slice(),W.splice(u,1)):W=s?s.concat(l):[l],p(i,W)},[p,s]),m=n.useCallback((i,l)=>{p&&p(i,s===l?null:l)},[p,s]),R=n.useMemo(()=>({className:d.grouped,onChange:b?m:T,value:s,size:C,fullWidth:h,color:v,disabled:B}),[d.grouped,b,m,T,s,C,h,v,B]),y=J(f),z=y.length,P=i=>{const l=i===0,u=i===z-1;return l&&u?"":l?d.firstButton:u?d.lastButton:d.middleButton};return O.jsx(ot,g({role:"group",className:_(d.root,c),ref:a,ownerState:$},N,{children:O.jsx(E.Provider,{value:R,children:y.map((i,l)=>O.jsx(F.Provider,{value:P(l),children:i},l))})}))});export{rt as T,at as a,J as g};
