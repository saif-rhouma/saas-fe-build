import{bz as x,j as a,aO as B,bV as P,aQ as R,aR as l,aS as n,bQ as g,cg as u,r as h,aU as V,aV as _,aW as y,aX as H,ch as M}from"./index-Cb6aSJqI.js";const O=x(a.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),S=x(a.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),E=x(a.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),L=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],N=o=>{const{classes:e,indeterminate:c,color:s,size:r}=o,t={root:["root",c&&"indeterminate",`color${l(s)}`,`size${l(r)}`]},d=H(t,M,e);return n({},e,d)},U=B(P,{shouldForwardProp:o=>R(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:c}=o;return[e.root,c.indeterminate&&e.indeterminate,e[`size${l(c.size)}`],c.color!=="default"&&e[`color${l(c.color)}`]]}})(({theme:o,ownerState:e})=>n({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:g(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${u.checked}, &.${u.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${u.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),F=a.jsx(S,{}),Q=a.jsx(O,{}),W=a.jsx(E,{}),X=h.forwardRef(function(e,c){var s,r;const t=V({props:e,name:"MuiCheckbox"}),{checkedIcon:d=F,color:z="primary",icon:I=Q,indeterminate:i=!1,indeterminateIcon:m=W,inputProps:f,size:p="medium",className:$}=t,j=_(t,L),k=i?m:I,v=i?m:d,C=n({},t,{color:z,indeterminate:i,size:p}),b=N(C);return a.jsx(U,n({type:"checkbox",inputProps:n({"data-indeterminate":i},f),icon:h.cloneElement(k,{fontSize:(s=k.props.fontSize)!=null?s:p}),checkedIcon:h.cloneElement(v,{fontSize:(r=v.props.fontSize)!=null?r:p}),ownerState:C,ref:c,className:y(b.root,$)},j,{classes:b}))});export{X as C};
