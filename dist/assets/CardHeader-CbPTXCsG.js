import{bt as R,bu as T,aQ as c,aU as i,r as j,aW as N,aX as P,T as l,j as s,aY as M,aZ as U}from"./index-MIl7JRte.js";function A(a){return T("MuiCardHeader",a)}const v=R("MuiCardHeader",["root","avatar","action","content","title","subheader"]),_=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],k=a=>{const{classes:e}=a;return U({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},A,e)},w=c("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>i({[`& .${v.title}`]:e.title,[`& .${v.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),E=c("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),S=c("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),W=c("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),B=j.forwardRef(function(e,h){const p=N({props:e,name:"MuiCardHeader"}),{action:m,avatar:d,className:C,component:y="div",disableTypography:u=!1,subheader:b,subheaderTypographyProps:x,title:g,titleTypographyProps:f}=p,H=P(p,_),r=i({},p,{component:y,disableTypography:u}),t=k(r);let o=g;o!=null&&o.type!==l&&!u&&(o=s.jsx(l,i({variant:d?"body2":"h5",className:t.title,component:"span",display:"block"},f,{children:o})));let n=b;return n!=null&&n.type!==l&&!u&&(n=s.jsx(l,i({variant:d?"body2":"body1",className:t.subheader,color:"text.secondary",component:"span",display:"block"},x,{children:n}))),s.jsxs(w,i({className:M(t.root,C),as:y,ref:h,ownerState:r},H,{children:[d&&s.jsx(E,{className:t.avatar,ownerState:r,children:d}),s.jsxs(W,{className:t.content,ownerState:r,children:[o,n]}),m&&s.jsx(S,{className:t.action,ownerState:r,children:m})]}))});export{B as C};
