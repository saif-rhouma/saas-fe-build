import{r as n,b6 as j,b2 as F,bl as O,bm as g,eD as x,cS as G,bp as M,bS as V,bo as U,j as N,bq as _,br as E,eE as q,bM as H,bN as I}from"./index-DT04UR_O.js";function J(t){return n.Children.toArray(t).filter(o=>n.isValidElement(o))}const A=n.createContext({}),D=n.createContext(void 0);function K(t,o){return o===void 0||t===void 0?!1:Array.isArray(o)?o.indexOf(t)>=0:t===o}const Q=["value"],X=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],Y=t=>{const{classes:o,fullWidth:r,selected:a,disabled:f,size:c,color:b}=t,B={root:["root",a&&"selected",f&&"disabled",r&&"fullWidth",`size${O(c)}`,b]};return E(B,q,o)},Z=j(F,{name:"MuiToggleButton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[o.root,o[`size${O(r.size)}`]]}})(({theme:t,ownerState:o})=>{let r=o.color==="standard"?t.palette.text.primary:t.palette[o.color].main,a;return t.vars&&(r=o.color==="standard"?t.vars.palette.text.primary:t.vars.palette[o.color].main,a=o.color==="standard"?t.vars.palette.text.primaryChannel:t.vars.palette[o.color].mainChannel),g({},t.typography.button,{borderRadius:(t.vars||t).shape.borderRadius,padding:11,border:`1px solid ${(t.vars||t).palette.divider}`,color:(t.vars||t).palette.action.active},o.fullWidth&&{width:"100%"},{[`&.${x.disabled}`]:{color:(t.vars||t).palette.action.disabled,border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:G(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.selected}`]:{color:r,backgroundColor:t.vars?`rgba(${a} / ${t.vars.palette.action.selectedOpacity})`:G(r,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${a} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:G(r,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${a} / ${t.vars.palette.action.selectedOpacity})`:G(r,t.palette.action.selectedOpacity)}}}},o.size==="small"&&{padding:7,fontSize:t.typography.pxToRem(13)},o.size==="large"&&{padding:15,fontSize:t.typography.pxToRem(15)})}),rt=n.forwardRef(function(o,r){const a=n.useContext(A),{value:f}=a,c=M(a,Q),b=n.useContext(D),B=V(g({},c,{selected:K(o.value,f)}),o),v=U({props:B,name:"MuiToggleButton"}),{children:h,className:p,color:k="standard",disabled:C=!1,disableFocusRipple:s=!1,fullWidth:L=!1,onChange:$,onClick:d,selected:T,size:m="medium",value:R}=v,y=M(v,X),z=g({},v,{color:k,disabled:C,disableFocusRipple:s,fullWidth:L,size:m}),P=Y(z),i=u=>{d&&(d(u,R),u.defaultPrevented)||$&&$(u,R)},l=b||"";return N.jsx(Z,g({className:_(c.className,P.root,p,l),disabled:C,focusRipple:!s,ref:r,onClick:i,onChange:$,value:R,ownerState:z,"aria-pressed":T},y,{children:h}))});function w(t){return I("MuiToggleButtonGroup",t)}const e=H("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),S=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],tt=t=>{const{classes:o,orientation:r,fullWidth:a,disabled:f}=t,c={root:["root",r==="vertical"&&"vertical",a&&"fullWidth"],grouped:["grouped",`grouped${O(r)}`,f&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return E(c,w,o)},ot=j("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t;return[{[`& .${e.grouped}`]:o.grouped},{[`& .${e.grouped}`]:o[`grouped${O(r.orientation)}`]},{[`& .${e.firstButton}`]:o.firstButton},{[`& .${e.lastButton}`]:o.lastButton},{[`& .${e.middleButton}`]:o.middleButton},o.root,r.orientation==="vertical"&&o.vertical,r.fullWidth&&o.fullWidth]}})(({ownerState:t,theme:o})=>g({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},t.orientation==="vertical"&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},{[`& .${e.grouped}`]:g({},t.orientation==="horizontal"?{[`&.${e.selected} + .${e.grouped}.${e.selected}`]:{borderLeft:0,marginLeft:0}}:{[`&.${e.selected} + .${e.grouped}.${e.selected}`]:{borderTop:0,marginTop:0}})},t.orientation==="horizontal"?{[`& .${e.firstButton},& .${e.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${e.lastButton},& .${e.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0}}:{[`& .${e.firstButton},& .${e.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${e.lastButton},& .${e.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0}},t.orientation==="horizontal"?{[`& .${e.lastButton}.${x.disabled},& .${e.middleButton}.${x.disabled}`]:{borderLeft:"1px solid transparent"}}:{[`& .${e.lastButton}.${x.disabled},& .${e.middleButton}.${x.disabled}`]:{borderTop:"1px solid transparent"}})),at=n.forwardRef(function(o,r){const a=U({props:o,name:"MuiToggleButtonGroup"}),{children:f,className:c,color:b="standard",disabled:B=!1,exclusive:v=!1,fullWidth:h=!1,onChange:p,orientation:k="horizontal",size:C="medium",value:s}=a,L=M(a,S),$=g({},a,{disabled:B,fullWidth:h,orientation:k,size:C}),d=tt($),T=n.useCallback((i,l)=>{if(!p)return;const u=s&&s.indexOf(l);let W;s&&u>=0?(W=s.slice(),W.splice(u,1)):W=s?s.concat(l):[l],p(i,W)},[p,s]),m=n.useCallback((i,l)=>{p&&p(i,s===l?null:l)},[p,s]),R=n.useMemo(()=>({className:d.grouped,onChange:v?m:T,value:s,size:C,fullWidth:h,color:b,disabled:B}),[d.grouped,v,m,T,s,C,h,b,B]),y=J(f),z=y.length,P=i=>{const l=i===0,u=i===z-1;return l&&u?"":l?d.firstButton:u?d.lastButton:d.middleButton};return N.jsx(ot,g({role:"group",className:_(d.root,c),ref:r,ownerState:$},L,{children:N.jsx(A.Provider,{value:R,children:y.map((i,l)=>N.jsx(D.Provider,{value:P(l),children:i},l))})}))});export{at as T,rt as a,J as g};
