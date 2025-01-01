import{r as a,E as ce,aF as pe,bI as se,aI as Z,bJ as ke,j as v,y as s,o as fe,b2 as Q,D as Fe,am as Ie,aM as de,F as ue,an as Ae,x as X,G as Be,bK as Ee,bL as Pe,bf as We}from"./index-BrVky5Gg.js";import{f as He}from"./formControlState-Dq1zat_P.js";import{a as Me}from"./utils-DoM3o7-Q.js";const Te=["onChange","maxRows","minRows","style","value"];function $(o){return parseInt(o,10)||0}const Le={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function Oe(o){return o==null||Object.keys(o).length===0||o.outerHeightStyle===0&&!o.overflowing}const Ne=a.forwardRef(function(e,t){const{onChange:c,maxRows:l,minRows:d=1,style:z,value:k}=e,B=ce(e,Te),{current:R}=a.useRef(k!=null),h=a.useRef(null),F=pe(t,h),b=a.useRef(null),w=a.useCallback(()=>{const u=h.current,n=se(u).getComputedStyle(u);if(n.width==="0px")return{outerHeightStyle:0,overflowing:!1};const p=b.current;p.style.width=n.width,p.value=u.value||e.placeholder||"x",p.value.slice(-1)===`
`&&(p.value+=" ");const I=n.boxSizing,C=$(n.paddingBottom)+$(n.paddingTop),H=$(n.borderBottomWidth)+$(n.borderTopWidth),M=p.scrollHeight;p.value="x";const y=p.scrollHeight;let m=M;d&&(m=Math.max(Number(d)*y,m)),l&&(m=Math.min(Number(l)*y,m)),m=Math.max(m,y);const T=m+(I==="border-box"?C+H:0),L=Math.abs(m-M)<=1;return{outerHeightStyle:T,overflowing:L}},[l,d,e.placeholder]),g=a.useCallback(()=>{const u=w();if(Oe(u))return;const S=h.current;S.style.height=`${u.outerHeightStyle}px`,S.style.overflow=u.overflowing?"hidden":""},[w]);Z(()=>{const u=()=>{g()};let S;const n=ke(u),p=h.current,I=se(p);I.addEventListener("resize",n);let C;return typeof ResizeObserver<"u"&&(C=new ResizeObserver(u),C.observe(p)),()=>{n.clear(),cancelAnimationFrame(S),I.removeEventListener("resize",n),C&&C.disconnect()}},[w,g]),Z(()=>{g()});const E=u=>{R||g(),c&&c(u)};return v.jsxs(a.Fragment,{children:[v.jsx("textarea",s({value:k,onChange:E,ref:F,rows:d,style:z},B)),v.jsx("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:b,tabIndex:-1,style:s({},Le.shadow,z,{paddingTop:0,paddingBottom:0})})]})}),je=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],$e=(o,e)=>{const{ownerState:t}=o;return[e.root,t.formControl&&e.formControl,t.startAdornment&&e.adornedStart,t.endAdornment&&e.adornedEnd,t.error&&e.error,t.size==="small"&&e.sizeSmall,t.multiline&&e.multiline,t.color&&e[`color${X(t.color)}`],t.fullWidth&&e.fullWidth,t.hiddenLabel&&e.hiddenLabel]},De=(o,e)=>{const{ownerState:t}=o;return[e.input,t.size==="small"&&e.inputSizeSmall,t.multiline&&e.inputMultiline,t.type==="search"&&e.inputTypeSearch,t.startAdornment&&e.inputAdornedStart,t.endAdornment&&e.inputAdornedEnd,t.hiddenLabel&&e.inputHiddenLabel]},Ge=o=>{const{classes:e,color:t,disabled:c,error:l,endAdornment:d,focused:z,formControl:k,fullWidth:B,hiddenLabel:R,multiline:h,readOnly:F,size:b,startAdornment:w,type:g}=o,E={root:["root",`color${X(t)}`,c&&"disabled",l&&"error",B&&"fullWidth",z&&"focused",k&&"formControl",b&&b!=="medium"&&`size${X(b)}`,h&&"multiline",w&&"adornedStart",d&&"adornedEnd",R&&"hiddenLabel",F&&"readOnly"],input:["input",c&&"disabled",g==="search"&&"inputTypeSearch",h&&"inputMultiline",b==="small"&&"inputSizeSmall",R&&"inputHiddenLabel",w&&"inputAdornedStart",d&&"inputAdornedEnd",F&&"readOnly"]};return Be(E,Ee,e)},Ke=fe("div",{name:"MuiInputBase",slot:"Root",overridesResolver:$e})(({theme:o,ownerState:e})=>s({},o.typography.body1,{color:(o.vars||o).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${Q.disabled}`]:{color:(o.vars||o).palette.text.disabled,cursor:"default"}},e.multiline&&s({padding:"4px 0 5px"},e.size==="small"&&{paddingTop:1}),e.fullWidth&&{width:"100%"})),_e=fe("input",{name:"MuiInputBase",slot:"Input",overridesResolver:De})(({theme:o,ownerState:e})=>{const t=o.palette.mode==="light",c=s({color:"currentColor"},o.vars?{opacity:o.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5},{transition:o.transitions.create("opacity",{duration:o.transitions.duration.shorter})}),l={opacity:"0 !important"},d=o.vars?{opacity:o.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5};return s({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":c,"&::-moz-placeholder":c,"&:-ms-input-placeholder":c,"&::-ms-input-placeholder":c,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${Q.formControl} &`]:{"&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus::-webkit-input-placeholder":d,"&:focus::-moz-placeholder":d,"&:focus:-ms-input-placeholder":d,"&:focus::-ms-input-placeholder":d},[`&.${Q.disabled}`]:{opacity:1,WebkitTextFillColor:(o.vars||o).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},e.size==="small"&&{paddingTop:1},e.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},e.type==="search"&&{MozAppearance:"textfield"})}),Ue=v.jsx(Pe,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),Ze=a.forwardRef(function(e,t){var c;const l=Fe({props:e,name:"MuiInputBase"}),{"aria-describedby":d,autoComplete:z,autoFocus:k,className:B,components:R={},componentsProps:h={},defaultValue:F,disabled:b,disableInjectingGlobalStyles:w,endAdornment:g,fullWidth:E=!1,id:u,inputComponent:S="input",inputProps:n={},inputRef:p,maxRows:I,minRows:C,multiline:H=!1,name:M,onBlur:y,onChange:m,onClick:T,onFocus:L,onKeyDown:me,onKeyUp:he,placeholder:be,readOnly:D,renderSuffix:Y,rows:O,slotProps:ee={},slots:oe={},startAdornment:P,type:te="text",value:ge}=l,ye=ce(l,je),N=n.value!=null?n.value:ge,{current:G}=a.useRef(N!=null),A=a.useRef(),xe=a.useCallback(r=>{},[]),we=pe(A,p,n.ref,xe),[K,_]=a.useState(!1),i=Ie(),f=He({props:l,muiFormControl:i,states:["color","disabled","error","hiddenLabel","size","required","filled"]});f.focused=i?i.focused:K,a.useEffect(()=>{!i&&b&&K&&(_(!1),y&&y())},[i,b,K,y]);const U=i&&i.onFilled,V=i&&i.onEmpty,W=a.useCallback(r=>{Me(r)?U&&U():V&&V()},[U,V]);Z(()=>{G&&W({value:N})},[N,W,G]);const Ce=r=>{if(f.disabled){r.stopPropagation();return}L&&L(r),n.onFocus&&n.onFocus(r),i&&i.onFocus?i.onFocus(r):_(!0)},ve=r=>{y&&y(r),n.onBlur&&n.onBlur(r),i&&i.onBlur?i.onBlur(r):_(!1)},Re=(r,...ae)=>{if(!G){const le=r.target||A.current;if(le==null)throw new Error(We(1));W({value:le.value})}n.onChange&&n.onChange(r,...ae),m&&m(r,...ae)};a.useEffect(()=>{W(A.current)},[]);const Se=r=>{A.current&&r.currentTarget===r.target&&A.current.focus(),T&&T(r)};let q=S,x=n;H&&q==="input"&&(O?x=s({type:void 0,minRows:O,maxRows:O},x):x=s({type:void 0,maxRows:I,minRows:C},x),q=Ne);const ze=r=>{W(r.animationName==="mui-auto-fill-cancel"?A.current:{value:"x"})};a.useEffect(()=>{i&&i.setAdornedStart(!!P)},[i,P]);const j=s({},l,{color:f.color||"primary",disabled:f.disabled,endAdornment:g,error:f.error,focused:f.focused,formControl:i,fullWidth:E,hiddenLabel:f.hiddenLabel,multiline:H,size:f.size,startAdornment:P,type:te}),ne=Ge(j),re=oe.root||R.Root||Ke,J=ee.root||h.root||{},ie=oe.input||R.Input||_e;return x=s({},x,(c=ee.input)!=null?c:h.input),v.jsxs(a.Fragment,{children:[!w&&Ue,v.jsxs(re,s({},J,!de(re)&&{ownerState:s({},j,J.ownerState)},{ref:t,onClick:Se},ye,{className:ue(ne.root,J.className,B,D&&"MuiInputBase-readOnly"),children:[P,v.jsx(Ae.Provider,{value:null,children:v.jsx(ie,s({ownerState:j,"aria-invalid":f.error,"aria-describedby":d,autoComplete:z,autoFocus:k,defaultValue:F,disabled:f.disabled,id:u,onAnimationStart:ze,name:M,placeholder:be,readOnly:D,required:f.required,rows:O,value:N,onKeyDown:me,onKeyUp:he,type:te},x,!de(ie)&&{as:q,ownerState:s({},j,x.ownerState)},{ref:we,className:ue(ne.input,x.className,D&&"MuiInputBase-readOnly"),onBlur:ve,onChange:Re,onFocus:Ce}))}),g,Y?Y(s({},f,{startAdornment:P})):null]}))]})});export{Ke as I,_e as a,Ze as b,De as i,$e as r};
