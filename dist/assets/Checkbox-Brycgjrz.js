import{bC as h,j as a,aQ as B,ci as P,aS as R,aT as l,aU as n,ce as _,cF as u,r as x,aW as g,aX as y,aY as H,aZ as M,cG as S}from"./index-MU8Aef1d.js";const E=h(a.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),O=h(a.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),V=h(a.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),F=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],L=o=>{const{classes:e,indeterminate:c,color:s,size:r}=o,t={root:["root",c&&"indeterminate",`color${l(s)}`,`size${l(r)}`]},d=M(t,S,e);return n({},e,d)},N=B(P,{shouldForwardProp:o=>R(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:c}=o;return[e.root,c.indeterminate&&e.indeterminate,e[`size${l(c.size)}`],c.color!=="default"&&e[`color${l(c.color)}`]]}})(({theme:o,ownerState:e})=>n({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:_(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${u.checked}, &.${u.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${u.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),U=a.jsx(O,{}),T=a.jsx(E,{}),W=a.jsx(V,{}),Q=x.forwardRef(function(e,c){var s,r;const t=g({props:e,name:"MuiCheckbox"}),{checkedIcon:d=U,color:f="primary",icon:z=T,indeterminate:i=!1,indeterminateIcon:m=W,inputProps:b,size:p="medium",className:$}=t,j=y(t,F),C=i?m:z,k=i?m:d,v=n({},t,{color:f,indeterminate:i,size:p}),I=L(v);return a.jsx(N,n({type:"checkbox",inputProps:n({"data-indeterminate":i},b),icon:x.cloneElement(C,{fontSize:(s=C.props.fontSize)!=null?s:p}),checkedIcon:x.cloneElement(k,{fontSize:(r=k.props.fontSize)!=null?r:p}),ownerState:v,ref:c,className:H(I.root,$)},j,{classes:I}))});export{Q as C};
