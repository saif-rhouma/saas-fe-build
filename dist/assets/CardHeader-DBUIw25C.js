import{bk as R,bl as T,aO as c,aS as i,r as j,aU as N,aV as P,T as d,j as s,aW as M,aX as U}from"./index-zyulwKWD.js";function A(a){return T("MuiCardHeader",a)}const v=R("MuiCardHeader",["root","avatar","action","content","title","subheader"]),k=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],S=a=>{const{classes:e}=a;return U({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},A,e)},_=c("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>i({[`& .${v.title}`]:e.title,[`& .${v.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),w=c("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),E=c("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),W=c("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),B=j.forwardRef(function(e,h){const p=N({props:e,name:"MuiCardHeader"}),{action:m,avatar:l,className:C,component:y="div",disableTypography:u=!1,subheader:b,subheaderTypographyProps:x,title:g,titleTypographyProps:f}=p,H=P(p,k),r=i({},p,{component:y,disableTypography:u}),t=S(r);let o=g;o!=null&&o.type!==d&&!u&&(o=s.jsx(d,i({variant:l?"body2":"h5",className:t.title,component:"span",display:"block"},f,{children:o})));let n=b;return n!=null&&n.type!==d&&!u&&(n=s.jsx(d,i({variant:l?"body2":"body1",className:t.subheader,color:"text.secondary",component:"span",display:"block"},x,{children:n}))),s.jsxs(_,i({className:M(t.root,C),as:y,ref:h,ownerState:r},H,{children:[l&&s.jsx(w,{className:t.avatar,ownerState:r,children:l}),s.jsxs(W,{className:t.content,ownerState:r,children:[o,n]}),m&&s.jsx(E,{className:t.action,ownerState:r,children:m})]}))});export{B as C};
