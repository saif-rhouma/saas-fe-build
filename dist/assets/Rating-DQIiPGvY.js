import{bz as ne,j as i,aO as W,bA as O,aR as te,aS as l,bB as be,r as L,aU as xe,aV as ie,br as se,bC as Fe,bD as Re,bE as Ve,bF as Ce,aW as D,aX as Ae,bG as Se,bH as Me}from"./index-Cb6aSJqI.js";import{v as Le}from"./visuallyHidden-Dan1xhjv.js";const je=ne(i.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),He=ne(i.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),Ee=["value"],we=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function ze(o){const e=o.toString().split(".")[1];return e?e.length:0}function J(o,e){if(o==null)return o;const t=Math.round(o/e)*e;return Number(t.toFixed(ze(e)))}const Ie=o=>{const{classes:e,size:t,readOnly:m,disabled:j,emptyValueFocused:y,focusVisible:v}=o,b={root:["root",`size${te(t)}`,j&&"disabled",v&&"focusVisible",m&&"readOnly"],label:["label","pristine"],labelEmptyValue:[y&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Ae(b,Se,e)},Oe=W("span",{name:"MuiRating",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[{[`& .${O.visuallyHidden}`]:e.visuallyHidden},e.root,e[`size${te(t.size)}`],t.readOnly&&e.readOnly]}})(({theme:o,ownerState:e})=>l({display:"inline-flex",position:"relative",fontSize:o.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${O.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${O.focusVisible} .${O.iconActive}`]:{outline:"1px solid #999"},[`& .${O.visuallyHidden}`]:Le},e.size==="small"&&{fontSize:o.typography.pxToRem(18)},e.size==="large"&&{fontSize:o.typography.pxToRem(30)},e.readOnly&&{pointerEvents:"none"})),ae=W("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:o},e)=>[e.label,o.emptyValueFocused&&e.labelEmptyValueActive]})(({ownerState:o})=>l({cursor:"inherit"},o.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),Ne=W("span",{name:"MuiRating",slot:"Icon",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.icon,t.iconEmpty&&e.iconEmpty,t.iconFilled&&e.iconFilled,t.iconHover&&e.iconHover,t.iconFocus&&e.iconFocus,t.iconActive&&e.iconActive]}})(({theme:o,ownerState:e})=>l({display:"flex",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),pointerEvents:"none"},e.iconActive&&{transform:"scale(1.2)"},e.iconEmpty&&{color:(o.vars||o).palette.action.disabled})),Pe=W("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:o=>be(o)&&o!=="iconActive",overridesResolver:(o,e)=>{const{iconActive:t}=o;return[e.decimal,t&&e.iconActive]}})(({iconActive:o})=>l({position:"relative"},o&&{transform:"scale(1.2)"}));function Te(o){const e=ie(o,Ee);return i.jsx("span",l({},e))}function oe(o){const{classes:e,disabled:t,emptyIcon:m,focus:j,getLabelText:y,highlightSelectedOnly:v,hover:b,icon:N,IconContainerComponent:H,isActive:P,itemValue:c,labelProps:E,name:x,onBlur:X,onChange:F,onClick:R,onFocus:T,readOnly:$,ownerState:a,ratingValue:u,ratingValueRounded:U}=o,V=v?c===u:c<=u,B=c<=b,C=c<=j,G=c===U,w=se(),h=i.jsx(Ne,{as:H,value:c,className:D(e.icon,V?e.iconFilled:e.iconEmpty,B&&e.iconHover,C&&e.iconFocus,P&&e.iconActive),ownerState:l({},a,{iconEmpty:!V,iconFilled:V,iconHover:B,iconFocus:C,iconActive:P}),children:m&&!V?m:N});return $?i.jsx("span",l({},E,{children:h})):i.jsxs(L.Fragment,{children:[i.jsxs(ae,l({ownerState:l({},a,{emptyValueFocused:void 0}),htmlFor:w},E,{children:[h,i.jsx("span",{className:e.visuallyHidden,children:y(c)})]})),i.jsx("input",{className:e.visuallyHidden,onFocus:T,onBlur:X,onChange:F,onClick:R,disabled:t,value:c,id:w,type:"radio",name:x,checked:G})]})}const $e=i.jsx(je,{fontSize:"inherit"}),Be=i.jsx(He,{fontSize:"inherit"});function ke(o){return`${o} Star${o!==1?"s":""}`}const We=L.forwardRef(function(e,t){const m=xe({name:"MuiRating",props:e}),{className:j,defaultValue:y=null,disabled:v=!1,emptyIcon:b=Be,emptyLabelText:N="Empty",getLabelText:H=ke,highlightSelectedOnly:P=!1,icon:c=$e,IconContainerComponent:E=Te,max:x=5,name:X,onChange:F,onChangeActive:R,onMouseLeave:T,onMouseMove:$,precision:a=1,readOnly:u=!1,size:U="medium",value:V}=m,B=ie(m,we),C=se(X),[G,w]=Fe({controlled:V,default:y,name:"Rating"}),h=J(G,a),le=Re(),[{hover:d,focus:k},z]=L.useState({hover:-1,focus:-1});let A=h;d!==-1&&(A=d),k!==-1&&(A=k);const{isFocusVisibleRef:K,onBlur:ce,onFocus:re,ref:ue}=Ve(),[de,Y]=L.useState(!1),Q=L.useRef(),pe=Ce(ue,Q,t),me=n=>{$&&$(n);const s=Q.current,{right:r,left:_,width:S}=s.getBoundingClientRect();let M;le?M=(r-n.clientX)/S:M=(n.clientX-_)/S;let p=J(x*M+a/2,a);p=Me(p,a,x),z(g=>g.hover===p&&g.focus===p?g:{hover:p,focus:p}),Y(!1),R&&d!==p&&R(n,p)},fe=n=>{T&&T(n);const s=-1;z({hover:s,focus:s}),R&&d!==s&&R(n,s)},Z=n=>{let s=n.target.value===""?null:parseFloat(n.target.value);d!==-1&&(s=d),w(s),F&&F(n,s)},ve=n=>{n.clientX===0&&n.clientY===0||(z({hover:-1,focus:-1}),w(null),F&&parseFloat(n.target.value)===h&&F(n,null))},he=n=>{re(n),K.current===!0&&Y(!0);const s=parseFloat(n.target.value);z(r=>({hover:r.hover,focus:s}))},ge=n=>{if(d!==-1)return;ce(n),K.current===!1&&Y(!1);const s=-1;z(r=>({hover:r.hover,focus:s}))},[ye,ee]=L.useState(!1),I=l({},m,{defaultValue:y,disabled:v,emptyIcon:b,emptyLabelText:N,emptyValueFocused:ye,focusVisible:de,getLabelText:H,icon:c,IconContainerComponent:E,max:x,precision:a,readOnly:u,size:U}),f=Ie(I);return i.jsxs(Oe,l({ref:pe,onMouseMove:me,onMouseLeave:fe,className:D(f.root,j,u&&"MuiRating-readOnly"),ownerState:I,role:u?"img":null,"aria-label":u?H(A):null},B,{children:[Array.from(new Array(x)).map((n,s)=>{const r=s+1,_={classes:f,disabled:v,emptyIcon:b,focus:k,getLabelText:H,highlightSelectedOnly:P,hover:d,icon:c,IconContainerComponent:E,name:C,onBlur:ge,onChange:Z,onClick:ve,onFocus:he,ratingValue:A,ratingValueRounded:h,readOnly:u,ownerState:I},S=r===Math.ceil(A)&&(d!==-1||k!==-1);if(a<1){const M=Array.from(new Array(1/a));return i.jsx(Pe,{className:D(f.decimal,S&&f.iconActive),ownerState:I,iconActive:S,children:M.map((p,g)=>{const q=J(r-1+(g+1)*a,a);return i.jsx(oe,l({},_,{isActive:!1,itemValue:q,labelProps:{style:M.length-1===g?{}:{width:q===A?`${(g+1)*a*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),q)})},r)}return i.jsx(oe,l({},_,{isActive:S,itemValue:r}),r)}),!u&&!v&&i.jsxs(ae,{className:D(f.label,f.labelEmptyValue),ownerState:I,children:[i.jsx("input",{className:f.visuallyHidden,value:"",id:`${C}-empty`,type:"radio",name:C,checked:h==null,onFocus:()=>ee(!0),onBlur:()=>ee(!1),onChange:Z}),i.jsx("span",{className:f.visuallyHidden,children:N})]})]}))});export{We as R};
