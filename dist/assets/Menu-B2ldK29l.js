import{b3 as G,b4 as W,aw as R,aU as $,ay as H,cu as V,aR as q,r as l,aC as B,aD as E,bm as J,aA as i,bA as I,j as N,aE as Q,aF as X}from"./index-CsblB989.js";function Y(s){return W("MuiMenu",s)}G("MuiMenu",["root","paper","list"]);const Z=["onEntering"],ss=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],os={vertical:"top",horizontal:"right"},es={vertical:"top",horizontal:"left"},ts=s=>{const{classes:e}=s;return X({root:["root"],paper:["paper"],list:["list"]},Y,e)},rs=R($,{shouldForwardProp:s=>H(s)||s==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(s,e)=>e.root})({}),as=R(V,{name:"MuiMenu",slot:"Paper",overridesResolver:(s,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),ns=R(q,{name:"MuiMenu",slot:"List",overridesResolver:(s,e)=>e.list})({outline:0}),is=l.forwardRef(function(e,x){var b,g;const t=B({props:e,name:"MuiMenu"}),{autoFocus:p=!0,children:y,className:_,disableAutoFocusItem:u=!1,MenuListProps:c={},onClose:P,open:S,PaperProps:C={},PopoverClasses:D,transitionDuration:T="auto",TransitionProps:{onEntering:d}={},variant:m="selectedMenu",slots:M={},slotProps:F={}}=t,L=E(t.TransitionProps,Z),j=E(t,ss),f=J(),r=i({},t,{autoFocus:p,disableAutoFocusItem:u,MenuListProps:c,onEntering:d,PaperProps:C,transitionDuration:T,TransitionProps:L,variant:m}),h=ts(r),A=p&&!u&&S,v=l.useRef(null),O=(o,n)=>{v.current&&v.current.adjustStyleForScrollbar(o,{direction:f?"rtl":"ltr"}),d&&d(o,n)},U=o=>{o.key==="Tab"&&(o.preventDefault(),P&&P(o,"tabKeyDown"))};let a=-1;l.Children.map(y,(o,n)=>{l.isValidElement(o)&&(o.props.disabled||(m==="selectedMenu"&&o.props.selected||a===-1)&&(a=n))});const w=(b=M.paper)!=null?b:as,z=(g=F.paper)!=null?g:C,K=I({elementType:M.root,externalSlotProps:F.root,ownerState:r,className:[h.root,_]}),k=I({elementType:w,externalSlotProps:z,ownerState:r,className:h.paper});return N.jsx(rs,i({onClose:P,anchorOrigin:{vertical:"bottom",horizontal:f?"right":"left"},transformOrigin:f?os:es,slots:{paper:w,root:M.root},slotProps:{root:K,paper:k},open:S,ref:x,transitionDuration:T,TransitionProps:i({onEntering:O},L),ownerState:r},j,{classes:D,children:N.jsx(ns,i({onKeyDown:U,actions:v,autoFocus:p&&(a===-1||u),autoFocusItem:A,variant:m},c,{className:Q(h.list,c.className),children:y}))}))});export{is as M};
