import{b3 as R,b4 as T,aw as c,aA as i,r as j,aC as N,aD as P,T as l,j as s,aE as M,aF as A}from"./index-DJBSy2EF.js";function U(a){return T("MuiCardHeader",a)}const v=R("MuiCardHeader",["root","avatar","action","content","title","subheader"]),w=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],E=a=>{const{classes:e}=a;return A({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},U,e)},_=c("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>i({[`& .${v.title}`]:e.title,[`& .${v.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),k=c("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),S=c("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),$=c("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),D=j.forwardRef(function(e,h){const p=N({props:e,name:"MuiCardHeader"}),{action:m,avatar:d,className:C,component:y="div",disableTypography:u=!1,subheader:b,subheaderTypographyProps:x,title:g,titleTypographyProps:f}=p,H=P(p,w),r=i({},p,{component:y,disableTypography:u}),t=E(r);let o=g;o!=null&&o.type!==l&&!u&&(o=s.jsx(l,i({variant:d?"body2":"h5",className:t.title,component:"span",display:"block"},f,{children:o})));let n=b;return n!=null&&n.type!==l&&!u&&(n=s.jsx(l,i({variant:d?"body2":"body1",className:t.subheader,color:"text.secondary",component:"span",display:"block"},x,{children:n}))),s.jsxs(_,i({className:M(t.root,C),as:y,ref:h,ownerState:r},H,{children:[d&&s.jsx(k,{className:t.avatar,ownerState:r,children:d}),s.jsxs($,{className:t.content,ownerState:r,children:[o,n]}),m&&s.jsx(S,{className:t.action,ownerState:r,children:m})]}))});export{D as C};
