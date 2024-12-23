import{r as a,aB as ce,bm as pe,co as se,bp as Z,cp as ke,j as v,ay as s,au as fe,bL as J,aA as Ae,b3 as Be,bt as de,aC as ue,b4 as Fe,ax as Q,aD as Ie,cq as Pe,cr as We,bY as Ee}from"./index-CC8ZOXtA.js";import{f as He}from"./formControlState-Dq1zat_P.js";import{a as Te}from"./utils-DoM3o7-Q.js";const Le=["onChange","maxRows","minRows","style","value"];function $(o){return parseInt(o,10)||0}const Me={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function Oe(o){return o==null||Object.keys(o).length===0||o.outerHeightStyle===0&&!o.overflowing}const Ne=a.forwardRef(function(e,t){const{onChange:c,maxRows:l,minRows:d=1,style:z,value:k}=e,I=ce(e,Le),{current:R}=a.useRef(k!=null),h=a.useRef(null),A=pe(t,h),b=a.useRef(null),w=a.useCallback(()=>{const u=h.current,n=se(u).getComputedStyle(u);if(n.width==="0px")return{outerHeightStyle:0,overflowing:!1};const p=b.current;p.style.width=n.width,p.value=u.value||e.placeholder||"x",p.value.slice(-1)===`
`&&(p.value+=" ");const B=n.boxSizing,C=$(n.paddingBottom)+$(n.paddingTop),H=$(n.borderBottomWidth)+$(n.borderTopWidth),T=p.scrollHeight;p.value="x";const y=p.scrollHeight;let m=T;d&&(m=Math.max(Number(d)*y,m)),l&&(m=Math.min(Number(l)*y,m)),m=Math.max(m,y);const L=m+(B==="border-box"?C+H:0),M=Math.abs(m-T)<=1;return{outerHeightStyle:L,overflowing:M}},[l,d,e.placeholder]),g=a.useCallback(()=>{const u=w();if(Oe(u))return;const S=h.current;S.style.height=`${u.outerHeightStyle}px`,S.style.overflow=u.overflowing?"hidden":""},[w]);Z(()=>{const u=()=>{g()};let S;const n=ke(u),p=h.current,B=se(p);B.addEventListener("resize",n);let C;return typeof ResizeObserver<"u"&&(C=new ResizeObserver(u),C.observe(p)),()=>{n.clear(),cancelAnimationFrame(S),B.removeEventListener("resize",n),C&&C.disconnect()}},[w,g]),Z(()=>{g()});const P=u=>{R||g(),c&&c(u)};return v.jsxs(a.Fragment,{children:[v.jsx("textarea",s({value:k,onChange:P,ref:A,rows:d,style:z},I)),v.jsx("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:b,tabIndex:-1,style:s({},Me.shadow,z,{paddingTop:0,paddingBottom:0})})]})}),je=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],$e=(o,e)=>{const{ownerState:t}=o;return[e.root,t.formControl&&e.formControl,t.startAdornment&&e.adornedStart,t.endAdornment&&e.adornedEnd,t.error&&e.error,t.size==="small"&&e.sizeSmall,t.multiline&&e.multiline,t.color&&e[`color${Q(t.color)}`],t.fullWidth&&e.fullWidth,t.hiddenLabel&&e.hiddenLabel]},De=(o,e)=>{const{ownerState:t}=o;return[e.input,t.size==="small"&&e.inputSizeSmall,t.multiline&&e.inputMultiline,t.type==="search"&&e.inputTypeSearch,t.startAdornment&&e.inputAdornedStart,t.endAdornment&&e.inputAdornedEnd,t.hiddenLabel&&e.inputHiddenLabel]},_e=o=>{const{classes:e,color:t,disabled:c,error:l,endAdornment:d,focused:z,formControl:k,fullWidth:I,hiddenLabel:R,multiline:h,readOnly:A,size:b,startAdornment:w,type:g}=o,P={root:["root",`color${Q(t)}`,c&&"disabled",l&&"error",I&&"fullWidth",z&&"focused",k&&"formControl",b&&b!=="medium"&&`size${Q(b)}`,h&&"multiline",w&&"adornedStart",d&&"adornedEnd",R&&"hiddenLabel",A&&"readOnly"],input:["input",c&&"disabled",g==="search"&&"inputTypeSearch",h&&"inputMultiline",b==="small"&&"inputSizeSmall",R&&"inputHiddenLabel",w&&"inputAdornedStart",d&&"inputAdornedEnd",A&&"readOnly"]};return Ie(P,Pe,e)},qe=fe("div",{name:"MuiInputBase",slot:"Root",overridesResolver:$e})(({theme:o,ownerState:e})=>s({},o.typography.body1,{color:(o.vars||o).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${J.disabled}`]:{color:(o.vars||o).palette.text.disabled,cursor:"default"}},e.multiline&&s({padding:"4px 0 5px"},e.size==="small"&&{paddingTop:1}),e.fullWidth&&{width:"100%"})),Ge=fe("input",{name:"MuiInputBase",slot:"Input",overridesResolver:De})(({theme:o,ownerState:e})=>{const t=o.palette.mode==="light",c=s({color:"currentColor"},o.vars?{opacity:o.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5},{transition:o.transitions.create("opacity",{duration:o.transitions.duration.shorter})}),l={opacity:"0 !important"},d=o.vars?{opacity:o.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5};return s({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":c,"&::-moz-placeholder":c,"&:-ms-input-placeholder":c,"&::-ms-input-placeholder":c,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${J.formControl} &`]:{"&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus::-webkit-input-placeholder":d,"&:focus::-moz-placeholder":d,"&:focus:-ms-input-placeholder":d,"&:focus::-ms-input-placeholder":d},[`&.${J.disabled}`]:{opacity:1,WebkitTextFillColor:(o.vars||o).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},e.size==="small"&&{paddingTop:1},e.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},e.type==="search"&&{MozAppearance:"textfield"})}),Ke=v.jsx(We,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),Ze=a.forwardRef(function(e,t){var c;const l=Ae({props:e,name:"MuiInputBase"}),{"aria-describedby":d,autoComplete:z,autoFocus:k,className:I,components:R={},componentsProps:h={},defaultValue:A,disabled:b,disableInjectingGlobalStyles:w,endAdornment:g,fullWidth:P=!1,id:u,inputComponent:S="input",inputProps:n={},inputRef:p,maxRows:B,minRows:C,multiline:H=!1,name:T,onBlur:y,onChange:m,onClick:L,onFocus:M,onKeyDown:me,onKeyUp:he,placeholder:be,readOnly:D,renderSuffix:X,rows:O,slotProps:ee={},slots:oe={},startAdornment:W,type:te="text",value:ge}=l,ye=ce(l,je),N=n.value!=null?n.value:ge,{current:_}=a.useRef(N!=null),F=a.useRef(),xe=a.useCallback(r=>{},[]),we=pe(F,p,n.ref,xe),[q,G]=a.useState(!1),i=Be(),f=He({props:l,muiFormControl:i,states:["color","disabled","error","hiddenLabel","size","required","filled"]});f.focused=i?i.focused:q,a.useEffect(()=>{!i&&b&&q&&(G(!1),y&&y())},[i,b,q,y]);const K=i&&i.onFilled,U=i&&i.onEmpty,E=a.useCallback(r=>{Te(r)?K&&K():U&&U()},[K,U]);Z(()=>{_&&E({value:N})},[N,E,_]);const Ce=r=>{if(f.disabled){r.stopPropagation();return}M&&M(r),n.onFocus&&n.onFocus(r),i&&i.onFocus?i.onFocus(r):G(!0)},ve=r=>{y&&y(r),n.onBlur&&n.onBlur(r),i&&i.onBlur?i.onBlur(r):G(!1)},Re=(r,...ae)=>{if(!_){const le=r.target||F.current;if(le==null)throw new Error(Ee(1));E({value:le.value})}n.onChange&&n.onChange(r,...ae),m&&m(r,...ae)};a.useEffect(()=>{E(F.current)},[]);const Se=r=>{F.current&&r.currentTarget===r.target&&F.current.focus(),L&&L(r)};let V=S,x=n;H&&V==="input"&&(O?x=s({type:void 0,minRows:O,maxRows:O},x):x=s({type:void 0,maxRows:B,minRows:C},x),V=Ne);const ze=r=>{E(r.animationName==="mui-auto-fill-cancel"?F.current:{value:"x"})};a.useEffect(()=>{i&&i.setAdornedStart(!!W)},[i,W]);const j=s({},l,{color:f.color||"primary",disabled:f.disabled,endAdornment:g,error:f.error,focused:f.focused,formControl:i,fullWidth:P,hiddenLabel:f.hiddenLabel,multiline:H,size:f.size,startAdornment:W,type:te}),ne=_e(j),re=oe.root||R.Root||qe,Y=ee.root||h.root||{},ie=oe.input||R.Input||Ge;return x=s({},x,(c=ee.input)!=null?c:h.input),v.jsxs(a.Fragment,{children:[!w&&Ke,v.jsxs(re,s({},Y,!de(re)&&{ownerState:s({},j,Y.ownerState)},{ref:t,onClick:Se},ye,{className:ue(ne.root,Y.className,I,D&&"MuiInputBase-readOnly"),children:[W,v.jsx(Fe.Provider,{value:null,children:v.jsx(ie,s({ownerState:j,"aria-invalid":f.error,"aria-describedby":d,autoComplete:z,autoFocus:k,defaultValue:A,disabled:f.disabled,id:u,onAnimationStart:ze,name:T,placeholder:be,readOnly:D,required:f.required,rows:O,value:N,onKeyDown:me,onKeyUp:he,type:te},x,!de(ie)&&{as:V,ownerState:s({},j,x.ownerState)},{ref:we,className:ue(ne.input,x.className,D&&"MuiInputBase-readOnly"),onBlur:ve,onChange:Re,onFocus:Ce}))}),g,X?X(s({},f,{startAdornment:W})):null]}))]})});export{qe as I,Ge as a,Ze as b,De as i,$e as r};
