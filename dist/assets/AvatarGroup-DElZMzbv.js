import{aw as L,aA as l,aL as S,d as _,r as n,aC as D,aD as U,j as C,aE as x,A as V,aF as k,aM as w}from"./index-BRWSQhLj.js";const z=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],G={small:-16,medium:null},F=s=>{const{classes:a}=s;return k({root:["root"],avatar:["avatar"]},w,a)},I=L("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(s,a)=>l({[`& .${S.avatar}`]:a.avatar},a.root)})(({theme:s,ownerState:a})=>{const r=a.spacing&&G[a.spacing]!==void 0?G[a.spacing]:-a.spacing;return{[`& .${_.root}`]:{border:`2px solid ${(s.vars||s).palette.background.default}`,boxSizing:"content-box",marginLeft:r??-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}}),W=n.forwardRef(function(a,r){var A;const i=D({props:a,name:"MuiAvatarGroup"}),{children:N,className:M,component:g="div",componentsProps:E={},max:c=5,renderSurplus:h,slotProps:b={},spacing:j="medium",total:R,variant:p="circular"}=i,$=U(i,z);let t=c<2?2:c;const f=l({},i,{max:c,spacing:j,component:g,variant:p}),d=F(f),m=n.Children.toArray(N).filter(o=>n.isValidElement(o)),e=R||m.length;e===t&&(t+=1),t=Math.min(e+1,t);const P=Math.min(m.length,t-1),v=Math.max(e-t,e-P,0),y=h?h(v):`+${v}`,u=(A=b.additionalAvatar)!=null?A:E.additionalAvatar;return C.jsxs(I,l({as:g,ownerState:f,className:x(d.root,M),ref:r},$,{children:[v?C.jsx(V,l({variant:p},u,{className:x(d.avatar,u==null?void 0:u.className),children:y})):null,m.slice(0,P).reverse().map(o=>n.cloneElement(o,{className:x(o.props.className,d.avatar),variant:o.props.variant||p}))]}))});export{W as A};
