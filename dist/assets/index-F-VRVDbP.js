import{r as u,b as $,aD as z,bo as U,j as t,aA as f,cc as X,eE as J,eF as v,aw as F,c9 as e,eG as P,l as y,I as c,m as K,eq as Q,e as n,ci as Y,p as tt,H as et,C as nt}from"./index-z3fnkpoB.js";import{C as it}from"./custom-breadcrumbs-amwibr4j.js";import{C as ot}from"./component-hero-BJCwNRk4.js";import{a as h}from"./component-block-BXJsKF3k.js";import{S as rt}from"./component-template-Bp6EQ_hr.js";import{F as E}from"./Fab-CrQxbQDn.js";import"./CardHeader-Bgb3Zq_G.js";import"./CardContent-BWH8Hsze.js";const st=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],lt={entering:{transform:"none"},entered:{transform:"none"}},dt=u.forwardRef(function(s,L){const l=$(),R={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{addEndListener:T,appear:S=!0,children:x,easing:A,in:w,onEnter:b,onEntered:k,onEntering:B,onExit:C,onExited:D,onExiting:H,style:p,timeout:j=R,TransitionComponent:N=X}=s,W=z(s,st),m=u.useRef(null),q=U(m,x.ref,L),d=i=>o=>{if(i){const a=m.current;o===void 0?i(a):i(a,o)}},G=d(B),I=d((i,o)=>{J(i);const a=v({style:p,timeout:j,easing:A},{mode:"enter"});i.style.webkitTransition=l.transitions.create("transform",a),i.style.transition=l.transitions.create("transform",a),b&&b(i,o)}),_=d(k),M=d(H),O=d(i=>{const o=v({style:p,timeout:j,easing:A},{mode:"exit"});i.style.webkitTransition=l.transitions.create("transform",o),i.style.transition=l.transitions.create("transform",o),C&&C(i)}),V=d(D),Z=i=>{T&&T(m.current,i)};return t.jsx(N,f({appear:S,in:w,nodeRef:m,onEnter:I,onEntered:_,onEntering:G,onExit:O,onExited:V,onExiting:M,addEndListener:Z,timeout:j},W,{children:(i,o)=>u.cloneElement(x,f({style:f({transform:"scale(0)",visibility:i==="exited"&&!w?"hidden":void 0},lt[i],p,x.props.style),ref:q},o))}))}),g=`
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`,at=F(({className:r,...s})=>t.jsx(e,{...s,classes:{popper:r}}))({[`& .${P.tooltip}`]:{maxWidth:500}}),ct=F(({className:r,...s})=>t.jsx(e,{...s,classes:{popper:r}}))({[`& .${P.tooltip}`]:{maxWidth:"none"}});function ht(){const r=[{name:"Simple",component:t.jsxs(h,{children:[t.jsx(e,{title:"Delete",children:t.jsx(y,{children:t.jsx(c,{icon:"solar:trash-bin-trash-bold",width:24})})}),t.jsx(e,{title:"Add",children:t.jsx(E,{children:t.jsx(c,{icon:"mingcute:add-line",width:24})})}),t.jsx(e,{title:"Delete",children:t.jsx(y,{color:"info",children:t.jsx(c,{icon:"solar:trash-bin-trash-bold",width:24})})}),t.jsx(e,{title:"Add",children:t.jsx(E,{component:K.button,whileTap:"tap",whileHover:"hover",variants:Q(),color:"info",children:t.jsx(c,{icon:"mingcute:add-line",width:24})})}),t.jsx(e,{title:"Add",children:t.jsx(n,{variant:"outlined",color:"info",children:"Button"})})]})},{name:"Arrow",component:t.jsx(h,{children:t.jsx(e,{title:"Add",arrow:!0,children:t.jsx(E,{children:t.jsx(c,{icon:"mingcute:add-line",width:24})})})})},{name:"Variable width",component:t.jsxs(h,{children:[t.jsx(e,{title:g,children:t.jsx(n,{color:"inherit",children:"Default width [300px]"})}),t.jsx(at,{title:g,children:t.jsx(n,{color:"inherit",children:"Custom width [500px]"})}),t.jsx(ct,{title:g,children:t.jsx(n,{color:"inherit",children:"No wrapping"})})]})},{name:"Transitions",component:t.jsxs(h,{children:[t.jsx(e,{title:"Add",children:t.jsx(n,{color:"inherit",children:"Grow"})}),t.jsx(e,{TransitionComponent:Y,TransitionProps:{timeout:600},title:"Add",children:t.jsx(n,{color:"inherit",children:"Fade"})}),t.jsx(e,{TransitionComponent:dt,title:"Add",children:t.jsx(n,{color:"inherit",children:"Zoom"})})]})},{name:"Positioned",component:t.jsxs(h,{children:[t.jsx(e,{title:"Add",placement:"top-start",children:t.jsx(n,{color:"inherit",children:"top-start"})}),t.jsx(e,{title:"Add",placement:"top",children:t.jsx(n,{color:"inherit",children:"top"})}),t.jsx(e,{title:"Add",placement:"top-end",children:t.jsx(n,{color:"inherit",children:"top-end"})}),t.jsx(e,{title:"Add",placement:"left-start",children:t.jsx(n,{color:"inherit",children:"left-start"})}),t.jsx(e,{title:"Add",placement:"left",children:t.jsx(n,{color:"inherit",children:"left"})}),t.jsx(e,{title:"Add",placement:"left-end",children:t.jsx(n,{color:"inherit",children:"left-end"})}),t.jsx(e,{title:"Add",placement:"right-start",children:t.jsx(n,{color:"inherit",children:"right-start"})}),t.jsx(e,{title:"Add",placement:"right",children:t.jsx(n,{color:"inherit",children:"right"})}),t.jsx(e,{title:"Add",placement:"right-end",children:t.jsx(n,{color:"inherit",children:"right-end"})}),t.jsx(e,{title:"Add",placement:"bottom-start",children:t.jsx(n,{color:"inherit",children:"bottom-start"})}),t.jsx(e,{title:"Add",placement:"bottom",children:t.jsx(n,{color:"inherit",children:"bottom"})}),t.jsx(e,{title:"Add",placement:"bottom-end",children:t.jsx(n,{color:"inherit",children:"bottom-end"})})]})}];return t.jsxs(t.Fragment,{children:[t.jsx(ot,{children:t.jsx(it,{heading:"Tooltip",links:[{name:"Components",href:tt.components},{name:"Tooltip"}],moreLink:["https://mui.com/components/tooltips"]})}),t.jsx(rt,{data:r})]})}const mt={title:`Tooltip | MUI - ${nt.site.name}`};function At(){return t.jsxs(t.Fragment,{children:[t.jsx(et,{children:t.jsxs("title",{children:[" ",mt.title]})}),t.jsx(ht,{})]})}export{At as default};
