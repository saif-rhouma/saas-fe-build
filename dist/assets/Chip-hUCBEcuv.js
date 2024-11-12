import{bz as G,j as x,aO as U,ce as l,aR as r,aS as d,bQ as p,r as v,aU as J,aV as Y,bF as Z,aP as K,aW as k,aX as m,cf as h}from"./index-zyulwKWD.js";const S=G(x.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),w=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],aa=a=>{const{classes:o,disabled:n,size:c,color:i,iconColor:$,onDelete:b,clickable:t,variant:s}=a,f={root:["root",s,n&&"disabled",`size${r(c)}`,`color${r(i)}`,t&&"clickable",t&&`clickableColor${r(i)}`,b&&"deletable",b&&`deletableColor${r(i)}`,`${s}${r(i)}`],label:["label",`label${r(c)}`],avatar:["avatar",`avatar${r(c)}`,`avatarColor${r(i)}`],icon:["icon",`icon${r(c)}`,`iconColor${r($)}`],deleteIcon:["deleteIcon",`deleteIcon${r(c)}`,`deleteIconColor${r(i)}`,`deleteIcon${r(s)}Color${r(i)}`]};return m(f,h,o)},oa=U("div",{name:"MuiChip",slot:"Root",overridesResolver:(a,o)=>{const{ownerState:n}=a,{color:c,iconColor:i,clickable:$,onDelete:b,size:t,variant:s}=n;return[{[`& .${l.avatar}`]:o.avatar},{[`& .${l.avatar}`]:o[`avatar${r(t)}`]},{[`& .${l.avatar}`]:o[`avatarColor${r(c)}`]},{[`& .${l.icon}`]:o.icon},{[`& .${l.icon}`]:o[`icon${r(t)}`]},{[`& .${l.icon}`]:o[`iconColor${r(i)}`]},{[`& .${l.deleteIcon}`]:o.deleteIcon},{[`& .${l.deleteIcon}`]:o[`deleteIcon${r(t)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIconColor${r(c)}`]},{[`& .${l.deleteIcon}`]:o[`deleteIcon${r(s)}Color${r(c)}`]},o.root,o[`size${r(t)}`],o[`color${r(c)}`],$&&o.clickable,$&&c!=="default"&&o[`clickableColor${r(c)})`],b&&o.deletable,b&&c!=="default"&&o[`deletableColor${r(c)}`],o[s],o[`${s}${r(c)}`]]}})(({theme:a,ownerState:o})=>{const n=a.palette.mode==="light"?a.palette.grey[700]:a.palette.grey[300];return d({maxWidth:"100%",fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(a.vars||a).palette.text.primary,backgroundColor:(a.vars||a).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:a.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${l.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${l.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:a.vars?a.vars.palette.Chip.defaultAvatarColor:n,fontSize:a.typography.pxToRem(12)},[`& .${l.avatarColorPrimary}`]:{color:(a.vars||a).palette.primary.contrastText,backgroundColor:(a.vars||a).palette.primary.dark},[`& .${l.avatarColorSecondary}`]:{color:(a.vars||a).palette.secondary.contrastText,backgroundColor:(a.vars||a).palette.secondary.dark},[`& .${l.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:a.typography.pxToRem(10)},[`& .${l.icon}`]:d({marginLeft:5,marginRight:-6},o.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},o.iconColor===o.color&&d({color:a.vars?a.vars.palette.Chip.defaultIconColor:n},o.color!=="default"&&{color:"inherit"})),[`& .${l.deleteIcon}`]:d({WebkitTapHighlightColor:"transparent",color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.26)`:p(a.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / 0.4)`:p(a.palette.text.primary,.4)}},o.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},o.color!=="default"&&{color:a.vars?`rgba(${a.vars.palette[o.color].contrastTextChannel} / 0.7)`:p(a.palette[o.color].contrastText,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].contrastText}})},o.size==="small"&&{height:24},o.color!=="default"&&{backgroundColor:(a.vars||a).palette[o.color].main,color:(a.vars||a).palette[o.color].contrastText},o.onDelete&&{[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},o.onDelete&&o.color!=="default"&&{[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}})},({theme:a,ownerState:o})=>d({},o.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:p(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},"&:active":{boxShadow:(a.vars||a).shadows[1]}},o.clickable&&o.color!=="default"&&{[`&:hover, &.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette[o.color].dark}}),({theme:a,ownerState:o})=>d({},o.variant==="outlined"&&{backgroundColor:"transparent",border:a.vars?`1px solid ${a.vars.palette.Chip.defaultBorder}`:`1px solid ${a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[700]}`,[`&.${l.clickable}:hover`]:{backgroundColor:(a.vars||a).palette.action.hover},[`&.${l.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`& .${l.avatar}`]:{marginLeft:4},[`& .${l.avatarSmall}`]:{marginLeft:2},[`& .${l.icon}`]:{marginLeft:4},[`& .${l.iconSmall}`]:{marginLeft:2},[`& .${l.deleteIcon}`]:{marginRight:5},[`& .${l.deleteIconSmall}`]:{marginRight:3}},o.variant==="outlined"&&o.color!=="default"&&{color:(a.vars||a).palette[o.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:p(a.palette[o.color].main,.7)}`,[`&.${l.clickable}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:p(a.palette[o.color].main,a.palette.action.hoverOpacity)},[`&.${l.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / ${a.vars.palette.action.focusOpacity})`:p(a.palette[o.color].main,a.palette.action.focusOpacity)},[`& .${l.deleteIcon}`]:{color:a.vars?`rgba(${a.vars.palette[o.color].mainChannel} / 0.7)`:p(a.palette[o.color].main,.7),"&:hover, &:active":{color:(a.vars||a).palette[o.color].main}}})),la=U("span",{name:"MuiChip",slot:"Label",overridesResolver:(a,o)=>{const{ownerState:n}=a,{size:c}=n;return[o.label,o[`label${r(c)}`]]}})(({ownerState:a})=>d({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},a.variant==="outlined"&&{paddingLeft:11,paddingRight:11},a.size==="small"&&{paddingLeft:8,paddingRight:8},a.size==="small"&&a.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function j(a){return a.key==="Backspace"||a.key==="Delete"}const ca=v.forwardRef(function(o,n){const c=J({props:o,name:"MuiChip"}),{avatar:i,className:$,clickable:b,color:t="default",component:s,deleteIcon:f,disabled:y=!1,icon:C,label:W,onClick:D,onDelete:g,onKeyDown:L,onKeyUp:T,size:F="medium",variant:B="filled",tabIndex:M,skipFocusWhenDisabled:_=!1}=c,A=Y(c,w),I=v.useRef(null),H=Z(I,n),V=e=>{e.stopPropagation(),g&&g(e)},Q=e=>{e.currentTarget===e.target&&j(e)&&e.preventDefault(),L&&L(e)},X=e=>{e.currentTarget===e.target&&(g&&j(e)?g(e):e.key==="Escape"&&I.current&&I.current.blur()),T&&T(e)},R=b!==!1&&D?!0:b,z=R||g?K:s||"div",O=d({},c,{component:z,disabled:y,size:F,color:t,iconColor:v.isValidElement(C)&&C.props.color||t,onDelete:!!g,clickable:R,variant:B}),u=aa(O),q=z===K?d({component:s||"div",focusVisibleClassName:u.focusVisible},g&&{disableRipple:!0}):{};let N=null;g&&(N=f&&v.isValidElement(f)?v.cloneElement(f,{className:k(f.props.className,u.deleteIcon),onClick:V}):x.jsx(S,{className:k(u.deleteIcon),onClick:V}));let E=null;i&&v.isValidElement(i)&&(E=v.cloneElement(i,{className:k(u.avatar,i.props.className)}));let P=null;return C&&v.isValidElement(C)&&(P=v.cloneElement(C,{className:k(u.icon,C.props.className)})),x.jsxs(oa,d({as:z,className:k(u.root,$),disabled:R&&y?!0:void 0,onClick:D,onKeyDown:Q,onKeyUp:X,ref:H,tabIndex:_&&y?-1:M,ownerState:O},q,A,{children:[E||P,x.jsx(la,{className:k(u.label),ownerState:O,children:W}),N]}))});export{ca as C};