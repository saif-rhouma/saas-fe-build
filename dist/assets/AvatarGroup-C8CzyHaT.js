import{aU as y,aY as l,bq as S,d as L,r as n,a_ as U,a$ as V,j as b,b0 as x,A as k,b1 as q,br as z}from"./index-DxrsDIwY.js";const D=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],G={small:-16,medium:null},I=s=>{const{classes:a}=s;return q({root:["root"],avatar:["avatar"]},z,a)},T=y("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(s,a)=>l({[`& .${S.avatar}`]:a.avatar},a.root)})(({theme:s,ownerState:a})=>{const r=a.spacing&&G[a.spacing]!==void 0?G[a.spacing]:-a.spacing;return{[`& .${L.root}`]:{border:`2px solid ${(s.vars||s).palette.background.default}`,boxSizing:"content-box",marginLeft:r??-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}}),Y=n.forwardRef(function(a,r){var A;const i=U({props:a,name:"MuiAvatarGroup"}),{children:N,className:C,component:g="div",componentsProps:M={},max:c=5,renderSurplus:h,slotProps:$={},spacing:j="medium",total:E,variant:p="circular"}=i,R=V(i,D);let t=c<2?2:c;const f=l({},i,{max:c,spacing:j,component:g,variant:p}),d=I(f),m=n.Children.toArray(N).filter(o=>n.isValidElement(o)),e=E||m.length;e===t&&(t+=1),t=Math.min(e+1,t);const P=Math.min(m.length,t-1),v=Math.max(e-t,e-P,0),_=h?h(v):`+${v}`,u=(A=$.additionalAvatar)!=null?A:M.additionalAvatar;return b.jsxs(T,l({as:g,ownerState:f,className:x(d.root,C),ref:r},R,{children:[v?b.jsx(k,l({variant:p},u,{className:x(d.avatar,u==null?void 0:u.className),children:_})):null,m.slice(0,P).reverse().map(o=>n.cloneElement(o,{className:x(o.props.className,d.avatar),variant:o.props.variant||p}))]}))});export{Y as A};
