import{bt as ne,j as i,aS as D,bu as O,aV as te,aW as l,bv as be,r as L,aY as xe,aZ as ie,bw as se,bx as Fe,by as Re,bz as Ve,bA as Ce,a_ as W,a$ as Ae,bB as Se,bC as Me}from"./index-DLwkls4m.js";import{v as Le}from"./visuallyHidden-Dan1xhjv.js";const je=ne(i.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),He=ne(i.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),we=["value"],Ee=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function ze(o){const e=o.toString().split(".")[1];return e?e.length:0}function G(o,e){if(o==null)return o;const t=Math.round(o/e)*e;return Number(t.toFixed(ze(e)))}const Ie=o=>{const{classes:e,size:t,readOnly:m,disabled:j,emptyValueFocused:y,focusVisible:v}=o,b={root:["root",`size${te(t)}`,j&&"disabled",v&&"focusVisible",m&&"readOnly"],label:["label","pristine"],labelEmptyValue:[y&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Ae(b,Se,e)},Oe=D("span",{name:"MuiRating",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[{[`& .${O.visuallyHidden}`]:e.visuallyHidden},e.root,e[`size${te(t.size)}`],t.readOnly&&e.readOnly]}})(({theme:o,ownerState:e})=>l({display:"inline-flex",position:"relative",fontSize:o.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${O.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${O.focusVisible} .${O.iconActive}`]:{outline:"1px solid #999"},[`& .${O.visuallyHidden}`]:Le},e.size==="small"&&{fontSize:o.typography.pxToRem(18)},e.size==="large"&&{fontSize:o.typography.pxToRem(30)},e.readOnly&&{pointerEvents:"none"})),ae=D("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:o},e)=>[e.label,o.emptyValueFocused&&e.labelEmptyValueActive]})(({ownerState:o})=>l({cursor:"inherit"},o.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),$e=D("span",{name:"MuiRating",slot:"Icon",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.icon,t.iconEmpty&&e.iconEmpty,t.iconFilled&&e.iconFilled,t.iconHover&&e.iconHover,t.iconFocus&&e.iconFocus,t.iconActive&&e.iconActive]}})(({theme:o,ownerState:e})=>l({display:"flex",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),pointerEvents:"none"},e.iconActive&&{transform:"scale(1.2)"},e.iconEmpty&&{color:(o.vars||o).palette.action.disabled})),Ne=D("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:o=>be(o)&&o!=="iconActive",overridesResolver:(o,e)=>{const{iconActive:t}=o;return[e.decimal,t&&e.iconActive]}})(({iconActive:o})=>l({position:"relative"},o&&{transform:"scale(1.2)"}));function Pe(o){const e=ie(o,we);return i.jsx("span",l({},e))}function oe(o){const{classes:e,disabled:t,emptyIcon:m,focus:j,getLabelText:y,highlightSelectedOnly:v,hover:b,icon:$,IconContainerComponent:H,isActive:N,itemValue:c,labelProps:w,name:x,onBlur:X,onChange:F,onClick:R,onFocus:P,readOnly:T,ownerState:a,ratingValue:u,ratingValueRounded:U}=o,V=v?c===u:c<=u,B=c<=b,C=c<=j,Y=c===U,E=se(),h=i.jsx($e,{as:H,value:c,className:W(e.icon,V?e.iconFilled:e.iconEmpty,B&&e.iconHover,C&&e.iconFocus,N&&e.iconActive),ownerState:l({},a,{iconEmpty:!V,iconFilled:V,iconHover:B,iconFocus:C,iconActive:N}),children:m&&!V?m:$});return T?i.jsx("span",l({},w,{children:h})):i.jsxs(L.Fragment,{children:[i.jsxs(ae,l({ownerState:l({},a,{emptyValueFocused:void 0}),htmlFor:E},w,{children:[h,i.jsx("span",{className:e.visuallyHidden,children:y(c)})]})),i.jsx("input",{className:e.visuallyHidden,onFocus:P,onBlur:X,onChange:F,onClick:R,disabled:t,value:c,id:E,type:"radio",name:x,checked:Y})]})}const Te=i.jsx(je,{fontSize:"inherit"}),Be=i.jsx(He,{fontSize:"inherit"});function ke(o){return`${o} Star${o!==1?"s":""}`}const De=L.forwardRef(function(e,t){const m=xe({name:"MuiRating",props:e}),{className:j,defaultValue:y=null,disabled:v=!1,emptyIcon:b=Be,emptyLabelText:$="Empty",getLabelText:H=ke,highlightSelectedOnly:N=!1,icon:c=Te,IconContainerComponent:w=Pe,max:x=5,name:X,onChange:F,onChangeActive:R,onMouseLeave:P,onMouseMove:T,precision:a=1,readOnly:u=!1,size:U="medium",value:V}=m,B=ie(m,Ee),C=se(X),[Y,E]=Fe({controlled:V,default:y,name:"Rating"}),h=G(Y,a),le=Re(),[{hover:d,focus:k},z]=L.useState({hover:-1,focus:-1});let A=h;d!==-1&&(A=d),k!==-1&&(A=k);const{isFocusVisibleRef:J,onBlur:ce,onFocus:re,ref:ue}=Ve(),[de,Z]=L.useState(!1),K=L.useRef(),pe=Ce(ue,K,t),me=n=>{T&&T(n);const s=K.current,{right:r,left:_,width:S}=s.getBoundingClientRect();let M;le?M=(r-n.clientX)/S:M=(n.clientX-_)/S;let p=G(x*M+a/2,a);p=Me(p,a,x),z(g=>g.hover===p&&g.focus===p?g:{hover:p,focus:p}),Z(!1),R&&d!==p&&R(n,p)},fe=n=>{P&&P(n);const s=-1;z({hover:s,focus:s}),R&&d!==s&&R(n,s)},Q=n=>{let s=n.target.value===""?null:parseFloat(n.target.value);d!==-1&&(s=d),E(s),F&&F(n,s)},ve=n=>{n.clientX===0&&n.clientY===0||(z({hover:-1,focus:-1}),E(null),F&&parseFloat(n.target.value)===h&&F(n,null))},he=n=>{re(n),J.current===!0&&Z(!0);const s=parseFloat(n.target.value);z(r=>({hover:r.hover,focus:s}))},ge=n=>{if(d!==-1)return;ce(n),J.current===!1&&Z(!1);const s=-1;z(r=>({hover:r.hover,focus:s}))},[ye,ee]=L.useState(!1),I=l({},m,{defaultValue:y,disabled:v,emptyIcon:b,emptyLabelText:$,emptyValueFocused:ye,focusVisible:de,getLabelText:H,icon:c,IconContainerComponent:w,max:x,precision:a,readOnly:u,size:U}),f=Ie(I);return i.jsxs(Oe,l({ref:pe,onMouseMove:me,onMouseLeave:fe,className:W(f.root,j,u&&"MuiRating-readOnly"),ownerState:I,role:u?"img":null,"aria-label":u?H(A):null},B,{children:[Array.from(new Array(x)).map((n,s)=>{const r=s+1,_={classes:f,disabled:v,emptyIcon:b,focus:k,getLabelText:H,highlightSelectedOnly:N,hover:d,icon:c,IconContainerComponent:w,name:C,onBlur:ge,onChange:Q,onClick:ve,onFocus:he,ratingValue:A,ratingValueRounded:h,readOnly:u,ownerState:I},S=r===Math.ceil(A)&&(d!==-1||k!==-1);if(a<1){const M=Array.from(new Array(1/a));return i.jsx(Ne,{className:W(f.decimal,S&&f.iconActive),ownerState:I,iconActive:S,children:M.map((p,g)=>{const q=G(r-1+(g+1)*a,a);return i.jsx(oe,l({},_,{isActive:!1,itemValue:q,labelProps:{style:M.length-1===g?{}:{width:q===A?`${(g+1)*a*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),q)})},r)}return i.jsx(oe,l({},_,{isActive:S,itemValue:r}),r)}),!u&&!v&&i.jsxs(ae,{className:W(f.label,f.labelEmptyValue),ownerState:I,children:[i.jsx("input",{className:f.visuallyHidden,value:"",id:`${C}-empty`,type:"radio",name:C,checked:h==null,onFocus:()=>ee(!0),onBlur:()=>ee(!1),onChange:Q}),i.jsx("span",{className:f.visuallyHidden,children:$})]})]}))});export{De as R};
