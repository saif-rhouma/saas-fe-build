import{bt as k,bu as G,aQ as b,bS as Q,aS as $,d3 as H,bQ as V,r as l,aW as X,aX as I,bv as Y,aU as i,bw as E,j as N,aY as Z,aZ as q}from"./index-CGa_Q6Py.js";function B(s){return G("MuiMenu",s)}k("MuiMenu",["root","paper","list"]);const J=["onEntering"],ss=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],os={vertical:"top",horizontal:"right"},es={vertical:"top",horizontal:"left"},ts=s=>{const{classes:e}=s;return q({root:["root"],paper:["paper"],list:["list"]},B,e)},rs=b(Q,{shouldForwardProp:s=>$(s)||s==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(s,e)=>e.root})({}),as=b(H,{name:"MuiMenu",slot:"Paper",overridesResolver:(s,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),ns=b(V,{name:"MuiMenu",slot:"List",overridesResolver:(s,e)=>e.list})({outline:0}),is=l.forwardRef(function(e,x){var R,S;const t=X({props:e,name:"MuiMenu"}),{autoFocus:p=!0,children:g,className:_,disableAutoFocusItem:u=!1,MenuListProps:c={},onClose:P,open:y,PaperProps:T={},PopoverClasses:j,transitionDuration:C="auto",TransitionProps:{onEntering:d}={},variant:m="selectedMenu",slots:M={},slotProps:L={}}=t,w=I(t.TransitionProps,J),D=I(t,ss),f=Y(),r=i({},t,{autoFocus:p,disableAutoFocusItem:u,MenuListProps:c,onEntering:d,PaperProps:T,transitionDuration:C,TransitionProps:w,variant:m}),v=ts(r),O=p&&!u&&y,h=l.useRef(null),U=(o,n)=>{h.current&&h.current.adjustStyleForScrollbar(o,{direction:f?"rtl":"ltr"}),d&&d(o,n)},z=o=>{o.key==="Tab"&&(o.preventDefault(),P&&P(o,"tabKeyDown"))};let a=-1;l.Children.map(g,(o,n)=>{l.isValidElement(o)&&(o.props.disabled||(m==="selectedMenu"&&o.props.selected||a===-1)&&(a=n))});const F=(R=M.paper)!=null?R:as,A=(S=L.paper)!=null?S:T,K=E({elementType:M.root,externalSlotProps:L.root,ownerState:r,className:[v.root,_]}),W=E({elementType:F,externalSlotProps:A,ownerState:r,className:v.paper});return N.jsx(rs,i({onClose:P,anchorOrigin:{vertical:"bottom",horizontal:f?"right":"left"},transformOrigin:f?os:es,slots:{paper:F,root:M.root},slotProps:{root:K,paper:W},open:y,ref:x,transitionDuration:C,TransitionProps:i({onEntering:U},w),ownerState:r},D,{classes:j,children:N.jsx(ns,i({onKeyDown:z,actions:h,autoFocus:p&&(a===-1||u),autoFocusItem:O,variant:m},c,{className:Z(v.list,c.className),children:g}))}))});export{is as M};
