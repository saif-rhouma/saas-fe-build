import{bk as W,bl as G,aO as R,b9 as V,aQ as $,cI as H,b7 as Q,r as l,aU as X,aV as w,bD as q,aS as i,bR as E,j as N,aW as B,aX as J}from"./index-1idvz3yo.js";function Y(s){return G("MuiMenu",s)}W("MuiMenu",["root","paper","list"]);const Z=["onEntering"],ss=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],os={vertical:"top",horizontal:"right"},es={vertical:"top",horizontal:"left"},ts=s=>{const{classes:e}=s;return J({root:["root"],paper:["paper"],list:["list"]},Y,e)},rs=R(V,{shouldForwardProp:s=>$(s)||s==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(s,e)=>e.root})({}),as=R(H,{name:"MuiMenu",slot:"Paper",overridesResolver:(s,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),ns=R(Q,{name:"MuiMenu",slot:"List",overridesResolver:(s,e)=>e.list})({outline:0}),is=l.forwardRef(function(e,b){var x,g;const t=X({props:e,name:"MuiMenu"}),{autoFocus:p=!0,children:S,className:_,disableAutoFocusItem:c=!1,MenuListProps:u={},onClose:P,open:y,PaperProps:T={},PopoverClasses:D,transitionDuration:C="auto",TransitionProps:{onEntering:d}={},variant:m="selectedMenu",slots:M={},slotProps:I={}}=t,L=w(t.TransitionProps,Z),j=w(t,ss),f=q(),r=i({},t,{autoFocus:p,disableAutoFocusItem:c,MenuListProps:u,onEntering:d,PaperProps:T,transitionDuration:C,TransitionProps:L,variant:m}),h=ts(r),O=p&&!c&&y,v=l.useRef(null),U=(o,n)=>{v.current&&v.current.adjustStyleForScrollbar(o,{direction:f?"rtl":"ltr"}),d&&d(o,n)},k=o=>{o.key==="Tab"&&(o.preventDefault(),P&&P(o,"tabKeyDown"))};let a=-1;l.Children.map(S,(o,n)=>{l.isValidElement(o)&&(o.props.disabled||(m==="selectedMenu"&&o.props.selected||a===-1)&&(a=n))});const F=(x=M.paper)!=null?x:as,z=(g=I.paper)!=null?g:T,A=E({elementType:M.root,externalSlotProps:I.root,ownerState:r,className:[h.root,_]}),K=E({elementType:F,externalSlotProps:z,ownerState:r,className:h.paper});return N.jsx(rs,i({onClose:P,anchorOrigin:{vertical:"bottom",horizontal:f?"right":"left"},transformOrigin:f?os:es,slots:{paper:F,root:M.root},slotProps:{root:A,paper:K},open:y,ref:b,transitionDuration:C,TransitionProps:i({onEntering:U},L),ownerState:r},j,{classes:D,children:N.jsx(ns,i({onKeyDown:k,actions:v,autoFocus:p&&(a===-1||c),autoFocusItem:O,variant:m},u,{className:B(h.list,u.className),children:S}))}))});export{is as M};
