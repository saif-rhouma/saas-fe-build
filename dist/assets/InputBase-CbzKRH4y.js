import{r as a,aV as ce,bF as pe,cE as se,bI as Z,cF as ke,j as v,aS as s,aO as fe,c2 as J,aU as Fe,bm as Ae,bM as de,aW as ue,bn as Be,aR as Q,aX as Ie,cG as We,cH as Ee,cd as Pe}from"./index-bfXnrd_B.js";import{f as He}from"./formControlState-Dq1zat_P.js";import{a as Me}from"./utils-DoM3o7-Q.js";const Oe=["onChange","maxRows","minRows","style","value"];function $(o){return parseInt(o,10)||0}const Te={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function Le(o){return o==null||Object.keys(o).length===0||o.outerHeightStyle===0&&!o.overflowing}const Ne=a.forwardRef(function(e,t){const{onChange:c,maxRows:l,minRows:d=1,style:z,value:k}=e,I=ce(e,Oe),{current:R}=a.useRef(k!=null),h=a.useRef(null),F=pe(t,h),b=a.useRef(null),w=a.useCallback(()=>{const u=h.current,n=se(u).getComputedStyle(u);if(n.width==="0px")return{outerHeightStyle:0,overflowing:!1};const p=b.current;p.style.width=n.width,p.value=u.value||e.placeholder||"x",p.value.slice(-1)===`
`&&(p.value+=" ");const A=n.boxSizing,C=$(n.paddingBottom)+$(n.paddingTop),H=$(n.borderBottomWidth)+$(n.borderTopWidth),M=p.scrollHeight;p.value="x";const y=p.scrollHeight;let m=M;d&&(m=Math.max(Number(d)*y,m)),l&&(m=Math.min(Number(l)*y,m)),m=Math.max(m,y);const O=m+(A==="border-box"?C+H:0),T=Math.abs(m-M)<=1;return{outerHeightStyle:O,overflowing:T}},[l,d,e.placeholder]),g=a.useCallback(()=>{const u=w();if(Le(u))return;const S=h.current;S.style.height=`${u.outerHeightStyle}px`,S.style.overflow=u.overflowing?"hidden":""},[w]);Z(()=>{const u=()=>{g()};let S;const n=ke(u),p=h.current,A=se(p);A.addEventListener("resize",n);let C;return typeof ResizeObserver<"u"&&(C=new ResizeObserver(u),C.observe(p)),()=>{n.clear(),cancelAnimationFrame(S),A.removeEventListener("resize",n),C&&C.disconnect()}},[w,g]),Z(()=>{g()});const W=u=>{R||g(),c&&c(u)};return v.jsxs(a.Fragment,{children:[v.jsx("textarea",s({value:k,onChange:W,ref:F,rows:d,style:z},I)),v.jsx("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:b,tabIndex:-1,style:s({},Te.shadow,z,{paddingTop:0,paddingBottom:0})})]})}),je=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],$e=(o,e)=>{const{ownerState:t}=o;return[e.root,t.formControl&&e.formControl,t.startAdornment&&e.adornedStart,t.endAdornment&&e.adornedEnd,t.error&&e.error,t.size==="small"&&e.sizeSmall,t.multiline&&e.multiline,t.color&&e[`color${Q(t.color)}`],t.fullWidth&&e.fullWidth,t.hiddenLabel&&e.hiddenLabel]},De=(o,e)=>{const{ownerState:t}=o;return[e.input,t.size==="small"&&e.inputSizeSmall,t.multiline&&e.inputMultiline,t.type==="search"&&e.inputTypeSearch,t.startAdornment&&e.inputAdornedStart,t.endAdornment&&e.inputAdornedEnd,t.hiddenLabel&&e.inputHiddenLabel]},Ge=o=>{const{classes:e,color:t,disabled:c,error:l,endAdornment:d,focused:z,formControl:k,fullWidth:I,hiddenLabel:R,multiline:h,readOnly:F,size:b,startAdornment:w,type:g}=o,W={root:["root",`color${Q(t)}`,c&&"disabled",l&&"error",I&&"fullWidth",z&&"focused",k&&"formControl",b&&b!=="medium"&&`size${Q(b)}`,h&&"multiline",w&&"adornedStart",d&&"adornedEnd",R&&"hiddenLabel",F&&"readOnly"],input:["input",c&&"disabled",g==="search"&&"inputTypeSearch",h&&"inputMultiline",b==="small"&&"inputSizeSmall",R&&"inputHiddenLabel",w&&"inputAdornedStart",d&&"inputAdornedEnd",F&&"readOnly"]};return Ie(W,We,e)},Ue=fe("div",{name:"MuiInputBase",slot:"Root",overridesResolver:$e})(({theme:o,ownerState:e})=>s({},o.typography.body1,{color:(o.vars||o).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${J.disabled}`]:{color:(o.vars||o).palette.text.disabled,cursor:"default"}},e.multiline&&s({padding:"4px 0 5px"},e.size==="small"&&{paddingTop:1}),e.fullWidth&&{width:"100%"})),Ve=fe("input",{name:"MuiInputBase",slot:"Input",overridesResolver:De})(({theme:o,ownerState:e})=>{const t=o.palette.mode==="light",c=s({color:"currentColor"},o.vars?{opacity:o.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5},{transition:o.transitions.create("opacity",{duration:o.transitions.duration.shorter})}),l={opacity:"0 !important"},d=o.vars?{opacity:o.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5};return s({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":c,"&::-moz-placeholder":c,"&:-ms-input-placeholder":c,"&::-ms-input-placeholder":c,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${J.formControl} &`]:{"&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus::-webkit-input-placeholder":d,"&:focus::-moz-placeholder":d,"&:focus:-ms-input-placeholder":d,"&:focus::-ms-input-placeholder":d},[`&.${J.disabled}`]:{opacity:1,WebkitTextFillColor:(o.vars||o).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},e.size==="small"&&{paddingTop:1},e.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},e.type==="search"&&{MozAppearance:"textfield"})}),_e=v.jsx(Ee,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),Ze=a.forwardRef(function(e,t){var c;const l=Fe({props:e,name:"MuiInputBase"}),{"aria-describedby":d,autoComplete:z,autoFocus:k,className:I,components:R={},componentsProps:h={},defaultValue:F,disabled:b,disableInjectingGlobalStyles:w,endAdornment:g,fullWidth:W=!1,id:u,inputComponent:S="input",inputProps:n={},inputRef:p,maxRows:A,minRows:C,multiline:H=!1,name:M,onBlur:y,onChange:m,onClick:O,onFocus:T,onKeyDown:me,onKeyUp:he,placeholder:be,readOnly:D,renderSuffix:Y,rows:L,slotProps:ee={},slots:oe={},startAdornment:E,type:te="text",value:ge}=l,ye=ce(l,je),N=n.value!=null?n.value:ge,{current:G}=a.useRef(N!=null),B=a.useRef(),xe=a.useCallback(r=>{},[]),we=pe(B,p,n.ref,xe),[U,V]=a.useState(!1),i=Ae(),f=He({props:l,muiFormControl:i,states:["color","disabled","error","hiddenLabel","size","required","filled"]});f.focused=i?i.focused:U,a.useEffect(()=>{!i&&b&&U&&(V(!1),y&&y())},[i,b,U,y]);const _=i&&i.onFilled,K=i&&i.onEmpty,P=a.useCallback(r=>{Me(r)?_&&_():K&&K()},[_,K]);Z(()=>{G&&P({value:N})},[N,P,G]);const Ce=r=>{if(f.disabled){r.stopPropagation();return}T&&T(r),n.onFocus&&n.onFocus(r),i&&i.onFocus?i.onFocus(r):V(!0)},ve=r=>{y&&y(r),n.onBlur&&n.onBlur(r),i&&i.onBlur?i.onBlur(r):V(!1)},Re=(r,...ae)=>{if(!G){const le=r.target||B.current;if(le==null)throw new Error(Pe(1));P({value:le.value})}n.onChange&&n.onChange(r,...ae),m&&m(r,...ae)};a.useEffect(()=>{P(B.current)},[]);const Se=r=>{B.current&&r.currentTarget===r.target&&B.current.focus(),O&&O(r)};let q=S,x=n;H&&q==="input"&&(L?x=s({type:void 0,minRows:L,maxRows:L},x):x=s({type:void 0,maxRows:A,minRows:C},x),q=Ne);const ze=r=>{P(r.animationName==="mui-auto-fill-cancel"?B.current:{value:"x"})};a.useEffect(()=>{i&&i.setAdornedStart(!!E)},[i,E]);const j=s({},l,{color:f.color||"primary",disabled:f.disabled,endAdornment:g,error:f.error,focused:f.focused,formControl:i,fullWidth:W,hiddenLabel:f.hiddenLabel,multiline:H,size:f.size,startAdornment:E,type:te}),ne=Ge(j),re=oe.root||R.Root||Ue,X=ee.root||h.root||{},ie=oe.input||R.Input||Ve;return x=s({},x,(c=ee.input)!=null?c:h.input),v.jsxs(a.Fragment,{children:[!w&&_e,v.jsxs(re,s({},X,!de(re)&&{ownerState:s({},j,X.ownerState)},{ref:t,onClick:Se},ye,{className:ue(ne.root,X.className,I,D&&"MuiInputBase-readOnly"),children:[E,v.jsx(Be.Provider,{value:null,children:v.jsx(ie,s({ownerState:j,"aria-invalid":f.error,"aria-describedby":d,autoComplete:z,autoFocus:k,defaultValue:F,disabled:f.disabled,id:u,onAnimationStart:ze,name:M,placeholder:be,readOnly:D,required:f.required,rows:L,value:N,onKeyDown:me,onKeyUp:he,type:te},x,!de(ie)&&{as:q,ownerState:s({},j,x.ownerState)},{ref:we,className:ue(ne.input,x.className,D&&"MuiInputBase-readOnly"),onBlur:ve,onChange:Re,onFocus:Ce}))}),g,Y?Y(s({},f,{startAdornment:E})):null]}))]})});export{Ue as I,Ve as a,Ze as b,De as i,$e as r};