import{bT as Pt,r as O,c2 as ot,cr as $t,c9 as _e,cs as Ct,bm as I,b6 as H,aT as i,bl as mt,aW as oe,ar as dt,ct as de,l as xt,cu as It,au as Ot,cg as nt,cv as yt,j as x,cw as vt,bp as Be,c5 as At,bq as ye,ci as Lt,br as St,cx as Tt}from"./index-DT04UR_O.js";import{i as rt,A as Rt}from"./Select-C_-xEl5F.js";import{C as kt}from"./Chip-QNIqa7VZ.js";function ft(n){return typeof n.normalize<"u"?n.normalize("NFD").replace(/[\u0300-\u036f]/g,""):n}function wt(n={}){const{ignoreAccents:l=!0,ignoreCase:g=!0,limit:A,matchFrom:z="any",stringify:N,trim:T=!1}=n;return(b,{inputValue:Q,getOptionLabel:K})=>{let R=T?Q.trim():Q;g&&(R=R.toLowerCase()),l&&(R=ft(R));const X=R?b.filter(fe=>{let k=(N||K)(fe);return g&&(k=k.toLowerCase()),l&&(k=ft(k)),z==="start"?k.indexOf(R)===0:k.indexOf(R)>-1}):b;return typeof A=="number"?X.slice(0,A):X}}function We(n,l){for(let g=0;g<n.length;g+=1)if(l(n[g]))return g;return-1}const Dt=wt(),gt=5,Nt=n=>{var l;return n.current!==null&&((l=n.current.parentElement)==null?void 0:l.contains(document.activeElement))};function Ft(n){const{unstable_isActiveElementInListbox:l=Nt,unstable_classNamePrefix:g="Mui",autoComplete:A=!1,autoHighlight:z=!1,autoSelect:N=!1,blurOnSelect:T=!1,clearOnBlur:b=!n.freeSolo,clearOnEscape:Q=!1,componentName:K="useAutocomplete",defaultValue:R=n.multiple?[]:null,disableClearable:X=!1,disableCloseOnSelect:fe=!1,disabled:k,disabledItemsFocusable:Ge=!1,disableListWrap:Ke=!1,filterOptions:lt=Dt,filterSelectedOptions:ge=!1,freeSolo:U=!1,getOptionDisabled:_,getOptionKey:Ue,getOptionLabel:ve=t=>{var e;return(e=t.label)!=null?e:t},groupBy:be,handleHomeEndKeys:q=!n.freeSolo,id:at,includeInputInList:qe=!1,inputValue:Ae,isOptionEqualToValue:ne=(t,e)=>t===e,multiple:c=!1,onChange:he,onClose:Le,onHighlightChange:Se,onInputChange:B,onOpen:Te,open:st,openOnFocus:it=!1,options:me,readOnly:Y=!1,selectOnFocus:xe=!n.freeSolo,value:Re}=n,L=Pt(at);let C=ve;C=t=>{const e=ve(t);return typeof e!="string"?String(e):e};const Ie=O.useRef(!1),ke=O.useRef(!0),h=O.useRef(null),S=O.useRef(null),[re,Je]=O.useState(null),[y,Oe]=O.useState(-1),we=z?0:-1,P=O.useRef(we),[a,pt]=ot({controlled:Re,default:R,name:K}),[p,W]=ot({controlled:Ae,default:"",name:K,state:"inputValue"}),[le,De]=O.useState(!1),Z=O.useCallback((t,e)=>{if(!(c?a.length<e.length:e!==null)&&!b)return;let o;if(c)o="";else if(e==null)o="";else{const s=C(e);o=typeof s=="string"?s:""}p!==o&&(W(o),B&&B(t,o,"reset"))},[C,p,c,B,W,b,a]),[J,Ne]=ot({controlled:st,default:!1,name:K,state:"open"}),[Qe,Fe]=O.useState(!0),Ee=!c&&a!=null&&p===C(a),v=J&&!Y,d=v?lt(me.filter(t=>!(ge&&(c?a:[a]).some(e=>e!==null&&ne(t,e)))),{inputValue:Ee&&Qe?"":p,getOptionLabel:C}):[],F=$t({filteredOptions:d,value:a,inputValue:p});O.useEffect(()=>{const t=a!==F.value;le&&!t||U&&!t||Z(null,a)},[a,Z,le,F.value,U]);const Pe=J&&d.length>0&&!Y,ae=_e(t=>{t===-1?h.current.focus():re.querySelector(`[data-tag-index="${t}"]`).focus()});O.useEffect(()=>{c&&y>a.length-1&&(Oe(-1),ae(-1))},[a,c,y,ae]);function se(t,e){if(!S.current||t<0||t>=d.length)return-1;let r=t;for(;;){const o=S.current.querySelector(`[data-option-index="${r}"]`),s=Ge?!1:!o||o.disabled||o.getAttribute("aria-disabled")==="true";if(o&&o.hasAttribute("tabindex")&&!s)return r;if(e==="next"?r=(r+1)%d.length:r=(r-1+d.length)%d.length,r===t)return-1}}const V=_e(({event:t,index:e,reason:r="auto"})=>{if(P.current=e,e===-1?h.current.removeAttribute("aria-activedescendant"):h.current.setAttribute("aria-activedescendant",`${L}-option-${e}`),Se&&Se(t,e===-1?null:d[e],r),!S.current)return;const o=S.current.querySelector(`[role="option"].${g}-focused`);o&&(o.classList.remove(`${g}-focused`),o.classList.remove(`${g}-focusVisible`));let s=S.current;if(S.current.getAttribute("role")!=="listbox"&&(s=S.current.parentElement.querySelector('[role="listbox"]')),!s)return;if(e===-1){s.scrollTop=0;return}const u=S.current.querySelector(`[data-option-index="${e}"]`);if(u&&(u.classList.add(`${g}-focused`),r==="keyboard"&&u.classList.add(`${g}-focusVisible`),s.scrollHeight>s.clientHeight&&r!=="mouse"&&r!=="touch")){const f=u,D=s.clientHeight+s.scrollTop,je=f.offsetTop+f.offsetHeight;je>D?s.scrollTop=je-s.clientHeight:f.offsetTop-f.offsetHeight*(be?1.3:0)<s.scrollTop&&(s.scrollTop=f.offsetTop-f.offsetHeight*(be?1.3:0))}}),E=_e(({event:t,diff:e,direction:r="next",reason:o="auto"})=>{if(!v)return;const u=se((()=>{const f=d.length-1;if(e==="reset")return we;if(e==="start")return 0;if(e==="end")return f;const D=P.current+e;return D<0?D===-1&&qe?-1:Ke&&P.current!==-1||Math.abs(e)>1?0:f:D>f?D===f+1&&qe?-1:Ke||Math.abs(e)>1?f:0:D})(),r);if(V({index:u,reason:o,event:t}),A&&e!=="reset")if(u===-1)h.current.value=p;else{const f=C(d[u]);h.current.value=f,f.toLowerCase().indexOf(p.toLowerCase())===0&&p.length>0&&h.current.setSelectionRange(p.length,f.length)}}),ie=()=>{const t=(e,r)=>{const o=e?C(e):"",s=r?C(r):"";return o===s};if(P.current!==-1&&F.filteredOptions&&F.filteredOptions.length!==d.length&&F.inputValue===p&&(c?a.length===F.value.length&&F.value.every((e,r)=>C(a[r])===C(e)):t(F.value,a))){const e=F.filteredOptions[P.current];if(e)return We(d,r=>C(r)===C(e))}return-1},$e=O.useCallback(()=>{if(!v)return;const t=ie();if(t!==-1){P.current=t;return}const e=c?a[0]:a;if(d.length===0||e==null){E({diff:"reset"});return}if(S.current){if(e!=null){const r=d[P.current];if(c&&r&&We(a,s=>ne(r,s))!==-1)return;const o=We(d,s=>ne(s,e));o===-1?E({diff:"reset"}):V({index:o});return}if(P.current>=d.length-1){V({index:d.length-1});return}V({index:P.current})}},[d.length,c?!1:a,ge,E,V,v,p,c]),Xe=_e(t=>{Ct(S,t),t&&$e()});O.useEffect(()=>{$e()},[$e]);const w=t=>{J||(Ne(!0),Fe(!0),Te&&Te(t))},G=(t,e)=>{J&&(Ne(!1),Le&&Le(t,e))},j=(t,e,r,o)=>{if(c){if(a.length===e.length&&a.every((s,u)=>s===e[u]))return}else if(a===e)return;he&&he(t,e,r,o),pt(e)},pe=O.useRef(!1),ee=(t,e,r="selectOption",o="options")=>{let s=r,u=e;if(c){u=Array.isArray(a)?a.slice():[];const f=We(u,D=>ne(e,D));f===-1?u.push(e):o!=="freeSolo"&&(u.splice(f,1),s="removeOption")}Z(t,u),j(t,u,s,{option:e}),!fe&&(!t||!t.ctrlKey&&!t.metaKey)&&G(t,s),(T===!0||T==="touch"&&pe.current||T==="mouse"&&!pe.current)&&h.current.blur()};function Me(t,e){if(t===-1)return-1;let r=t;for(;;){if(e==="next"&&r===a.length||e==="previous"&&r===-1)return-1;const o=re.querySelector(`[data-tag-index="${r}"]`);if(!o||!o.hasAttribute("tabindex")||o.disabled||o.getAttribute("aria-disabled")==="true")r+=e==="next"?1:-1;else return r}}const He=(t,e)=>{if(!c)return;p===""&&G(t,"toggleInput");let r=y;y===-1?p===""&&e==="previous"&&(r=a.length-1):(r+=e==="next"?1:-1,r<0&&(r=0),r===a.length&&(r=-1)),r=Me(r,e),Oe(r),ae(r)},ze=t=>{Ie.current=!0,W(""),B&&B(t,"","clear"),j(t,c?[]:null,"clear")},Ye=t=>e=>{if(t.onKeyDown&&t.onKeyDown(e),!e.defaultMuiPrevented&&(y!==-1&&["ArrowLeft","ArrowRight"].indexOf(e.key)===-1&&(Oe(-1),ae(-1)),e.which!==229))switch(e.key){case"Home":v&&q&&(e.preventDefault(),E({diff:"start",direction:"next",reason:"keyboard",event:e}));break;case"End":v&&q&&(e.preventDefault(),E({diff:"end",direction:"previous",reason:"keyboard",event:e}));break;case"PageUp":e.preventDefault(),E({diff:-gt,direction:"previous",reason:"keyboard",event:e}),w(e);break;case"PageDown":e.preventDefault(),E({diff:gt,direction:"next",reason:"keyboard",event:e}),w(e);break;case"ArrowDown":e.preventDefault(),E({diff:1,direction:"next",reason:"keyboard",event:e}),w(e);break;case"ArrowUp":e.preventDefault(),E({diff:-1,direction:"previous",reason:"keyboard",event:e}),w(e);break;case"ArrowLeft":He(e,"previous");break;case"ArrowRight":He(e,"next");break;case"Enter":if(P.current!==-1&&v){const r=d[P.current],o=_?_(r):!1;if(e.preventDefault(),o)return;ee(e,r,"selectOption"),A&&h.current.setSelectionRange(h.current.value.length,h.current.value.length)}else U&&p!==""&&Ee===!1&&(c&&e.preventDefault(),ee(e,p,"createOption","freeSolo"));break;case"Escape":v?(e.preventDefault(),e.stopPropagation(),G(e,"escape")):Q&&(p!==""||c&&a.length>0)&&(e.preventDefault(),e.stopPropagation(),ze(e));break;case"Backspace":if(c&&!Y&&p===""&&a.length>0){const r=y===-1?a.length-1:y,o=a.slice();o.splice(r,1),j(e,o,"removeOption",{option:a[r]})}break;case"Delete":if(c&&!Y&&p===""&&a.length>0&&y!==-1){const r=y,o=a.slice();o.splice(r,1),j(e,o,"removeOption",{option:a[r]})}break}},ut=t=>{De(!0),it&&!Ie.current&&w(t)},ue=t=>{if(l(S)){h.current.focus();return}De(!1),ke.current=!0,Ie.current=!1,N&&P.current!==-1&&v?ee(t,d[P.current],"blur"):N&&U&&p!==""?ee(t,p,"blur","freeSolo"):b&&Z(t,a),G(t,"blur")},$=t=>{const e=t.target.value;p!==e&&(W(e),Fe(!1),B&&B(t,e,"input")),e===""?!X&&!c&&j(t,null,"clear"):w(t)},m=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));P.current!==e&&V({event:t,index:e,reason:"mouse"})},M=t=>{V({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"touch"}),pe.current=!0},ct=t=>{const e=Number(t.currentTarget.getAttribute("data-option-index"));ee(t,d[e],"selectOption"),pe.current=!1},Ze=t=>e=>{const r=a.slice();r.splice(t,1),j(e,r,"removeOption",{option:a[t]})},et=t=>{J?G(t,"toggleInput"):w(t)},tt=t=>{t.currentTarget.contains(t.target)&&t.target.getAttribute("id")!==L&&t.preventDefault()},Ve=t=>{t.currentTarget.contains(t.target)&&(h.current.focus(),xe&&ke.current&&h.current.selectionEnd-h.current.selectionStart===0&&h.current.select(),ke.current=!1)},Ce=t=>{!k&&(p===""||!J)&&et(t)};let te=U&&p.length>0;te=te||(c?a.length>0:a!==null);let ce=d;return be&&(ce=d.reduce((t,e,r)=>{const o=be(e);return t.length>0&&t[t.length-1].group===o?t[t.length-1].options.push(e):t.push({key:r,index:r,group:o,options:[e]}),t},[])),k&&le&&ue(),{getRootProps:(t={})=>I({"aria-owns":Pe?`${L}-listbox`:null},t,{onKeyDown:Ye(t),onMouseDown:tt,onClick:Ve}),getInputLabelProps:()=>({id:`${L}-label`,htmlFor:L}),getInputProps:()=>({id:L,value:p,onBlur:ue,onFocus:ut,onChange:$,onMouseDown:Ce,"aria-activedescendant":v?"":null,"aria-autocomplete":A?"both":"list","aria-controls":Pe?`${L}-listbox`:void 0,"aria-expanded":Pe,autoComplete:"off",ref:h,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:k}),getClearProps:()=>({tabIndex:-1,type:"button",onClick:ze}),getPopupIndicatorProps:()=>({tabIndex:-1,type:"button",onClick:et}),getTagProps:({index:t})=>I({key:t,"data-tag-index":t,tabIndex:-1},!Y&&{onDelete:Ze(t)}),getListboxProps:()=>({role:"listbox",id:`${L}-listbox`,"aria-labelledby":`${L}-label`,ref:Xe,onMouseDown:t=>{t.preventDefault()}}),getOptionProps:({index:t,option:e})=>{var r;const o=(c?a:[a]).some(u=>u!=null&&ne(e,u)),s=_?_(e):!1;return{key:(r=Ue==null?void 0:Ue(e))!=null?r:C(e),tabIndex:-1,role:"option",id:`${L}-option-${t}`,onMouseMove:m,onClick:ct,onTouchStart:M,"data-option-index":t,"aria-disabled":s,"aria-selected":o}},id:L,inputValue:p,value:a,dirty:te,expanded:v&&re,popupOpen:v,focused:le||y!==-1,anchorEl:re,setAnchorEl:Je,focusedTag:y,groupedOptions:ce}}var bt,ht;const Et=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionKey","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],Mt=["ref"],Ht=["key"],zt=["key"],Vt=Lt(),jt=n=>{const{classes:l,disablePortal:g,expanded:A,focused:z,fullWidth:N,hasClearIcon:T,hasPopupIcon:b,inputFocused:Q,popupOpen:K,size:R}=n,X={root:["root",A&&"expanded",z&&"focused",N&&"fullWidth",T&&"hasClearIcon",b&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",Q&&"inputFocused"],tag:["tag",`tagSize${mt(R)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",K&&"popupIndicatorOpen"],popper:["popper",g&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return St(X,Tt,l)},_t=H("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(n,l)=>{const{ownerState:g}=n,{fullWidth:A,hasClearIcon:z,hasPopupIcon:N,inputFocused:T,size:b}=g;return[{[`& .${i.tag}`]:l.tag},{[`& .${i.tag}`]:l[`tagSize${mt(b)}`]},{[`& .${i.inputRoot}`]:l.inputRoot},{[`& .${i.input}`]:l.input},{[`& .${i.input}`]:T&&l.inputFocused},l.root,A&&l.fullWidth,N&&l.hasPopupIcon,z&&l.hasClearIcon]}})({[`&.${i.focused} .${i.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${i.clearIndicator}`]:{visibility:"visible"}},[`& .${i.tag}`]:{margin:3,maxWidth:"calc(100% - 6px)"},[`& .${i.inputRoot}`]:{[`.${i.hasPopupIcon}&, .${i.hasClearIcon}&`]:{paddingRight:30},[`.${i.hasPopupIcon}.${i.hasClearIcon}&`]:{paddingRight:56},[`& .${i.input}`]:{width:0,minWidth:30}},[`& .${rt.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${rt.root}.${oe.sizeSmall}`]:{[`& .${rt.input}`]:{padding:"2px 4px 3px 0"}},[`& .${dt.root}`]:{padding:9,[`.${i.hasPopupIcon}&, .${i.hasClearIcon}&`]:{paddingRight:39},[`.${i.hasPopupIcon}.${i.hasClearIcon}&`]:{paddingRight:65},[`& .${i.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${i.endAdornment}`]:{right:9}},[`& .${dt.root}.${oe.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${i.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${de.root}`]:{paddingTop:19,paddingLeft:8,[`.${i.hasPopupIcon}&, .${i.hasClearIcon}&`]:{paddingRight:39},[`.${i.hasPopupIcon}.${i.hasClearIcon}&`]:{paddingRight:65},[`& .${de.input}`]:{padding:"7px 4px"},[`& .${i.endAdornment}`]:{right:9}},[`& .${de.root}.${oe.sizeSmall}`]:{paddingBottom:1,[`& .${de.input}`]:{padding:"2.5px 4px"}},[`& .${oe.hiddenLabel}`]:{paddingTop:8},[`& .${de.root}.${oe.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${i.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${de.root}.${oe.hiddenLabel}.${oe.sizeSmall}`]:{[`& .${i.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${i.input}`]:{flexGrow:1,textOverflow:"ellipsis",opacity:0},variants:[{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{[`& .${i.tag}`]:{margin:2,maxWidth:"calc(100% - 4px)"}}},{props:{inputFocused:!0},style:{[`& .${i.input}`]:{opacity:1}}},{props:{multiple:!0},style:{[`& .${i.inputRoot}`]:{flexWrap:"wrap"}}}]}),Bt=H("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(n,l)=>l.endAdornment})({position:"absolute",right:0,top:"50%",transform:"translate(0, -50%)"}),Wt=H(xt,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(n,l)=>l.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),Gt=H(xt,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:n},l)=>I({},l.popupIndicator,n.popupOpen&&l.popupIndicatorOpen)})({padding:2,marginRight:-2,variants:[{props:{popupOpen:!0},style:{transform:"rotate(180deg)"}}]}),Kt=H(It,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(n,l)=>{const{ownerState:g}=n;return[{[`& .${i.option}`]:l.option},l.popper,g.disablePortal&&l.popperDisablePortal]}})(({theme:n})=>({zIndex:(n.vars||n).zIndex.modal,variants:[{props:{disablePortal:!0},style:{position:"absolute"}}]})),Ut=H(Ot,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(n,l)=>l.paper})(({theme:n})=>I({},n.typography.body1,{overflow:"auto"})),qt=H("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(n,l)=>l.loading})(({theme:n})=>({color:(n.vars||n).palette.text.secondary,padding:"14px 16px"})),Jt=H("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(n,l)=>l.noOptions})(({theme:n})=>({color:(n.vars||n).palette.text.secondary,padding:"14px 16px"})),Qt=H("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(n,l)=>l.listbox})(({theme:n})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${i.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[n.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${i.focused}`]:{backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(n.vars||n).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${i.focusVisible}`]:{backgroundColor:(n.vars||n).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / ${n.vars.palette.action.selectedOpacity})`:nt(n.palette.primary.main,n.palette.action.selectedOpacity),[`&.${i.focused}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.hoverOpacity}))`:nt(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(n.vars||n).palette.action.selected}},[`&.${i.focusVisible}`]:{backgroundColor:n.vars?`rgba(${n.vars.palette.primary.mainChannel} / calc(${n.vars.palette.action.selectedOpacity} + ${n.vars.palette.action.focusOpacity}))`:nt(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)}}}})),Xt=H(yt,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(n,l)=>l.groupLabel})(({theme:n})=>({backgroundColor:(n.vars||n).palette.background.paper,top:-8})),Yt=H("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(n,l)=>l.groupUl})({padding:0,[`& .${i.option}`]:{paddingLeft:24}}),oo=O.forwardRef(function(l,g){var A,z,N,T;const b=Vt({props:l,name:"MuiAutocomplete"}),{autoComplete:Q=!1,autoHighlight:K=!1,autoSelect:R=!1,blurOnSelect:X=!1,ChipProps:fe,className:k,clearIcon:Ge=bt||(bt=x.jsx(vt,{fontSize:"small"})),clearOnBlur:Ke=!b.freeSolo,clearOnEscape:lt=!1,clearText:ge="Clear",closeText:U="Close",componentsProps:_={},defaultValue:Ue=b.multiple?[]:null,disableClearable:ve=!1,disableCloseOnSelect:be=!1,disabled:q=!1,disabledItemsFocusable:at=!1,disableListWrap:qe=!1,disablePortal:Ae=!1,filterSelectedOptions:ne=!1,forcePopupIcon:c="auto",freeSolo:he=!1,fullWidth:Le=!1,getLimitTagsText:Se=o=>`+${o}`,getOptionLabel:B,groupBy:Te,handleHomeEndKeys:st=!b.freeSolo,includeInputInList:it=!1,limitTags:me=-1,ListboxComponent:Y="ul",ListboxProps:xe,loading:Re=!1,loadingText:L="Loading…",multiple:C=!1,noOptionsText:Ie="No options",openOnFocus:ke=!1,openText:h="Open",PaperComponent:S=Ot,PopperComponent:re=It,popupIcon:Je=ht||(ht=x.jsx(Rt,{})),readOnly:y=!1,renderGroup:Oe,renderInput:we,renderOption:P,renderTags:a,selectOnFocus:pt=!b.freeSolo,size:p="medium",slotProps:W={}}=b,le=Be(b,Et),{getRootProps:De,getInputProps:Z,getInputLabelProps:J,getPopupIndicatorProps:Ne,getClearProps:Qe,getTagProps:Fe,getListboxProps:Ee,getOptionProps:v,value:d,dirty:F,expanded:Pe,id:ae,popupOpen:se,focused:V,focusedTag:E,anchorEl:ie,setAnchorEl:$e,inputValue:Xe,groupedOptions:w}=Ft(I({},b,{componentName:"Autocomplete"})),G=!ve&&!q&&F&&!y,j=(!he||c===!0)&&c!==!1,{onMouseDown:pe}=Z(),{ref:ee}=xe??{},Me=Ee(),{ref:He}=Me,ze=Be(Me,Mt),Ye=At(He,ee),ue=B||(o=>{var s;return(s=o.label)!=null?s:o}),$=I({},b,{disablePortal:Ae,expanded:Pe,focused:V,fullWidth:Le,getOptionLabel:ue,hasClearIcon:G,hasPopupIcon:j,inputFocused:E===-1,popupOpen:se,size:p}),m=jt($);let M;if(C&&d.length>0){const o=s=>I({className:m.tag,disabled:q},Fe(s));a?M=a(d,o,$):M=d.map((s,u)=>{const f=o({index:u}),{key:D}=f,je=Be(f,Ht);return x.jsx(kt,I({label:ue(s),size:p},je,fe),D)})}if(me>-1&&Array.isArray(M)){const o=M.length-me;!V&&o>0&&(M=M.splice(0,me),M.push(x.jsx("span",{className:m.tag,children:Se(o)},M.length)))}const Ze=Oe||(o=>x.jsxs("li",{children:[x.jsx(Xt,{className:m.groupLabel,ownerState:$,component:"div",children:o.group}),x.jsx(Yt,{className:m.groupUl,ownerState:$,children:o.children})]},o.key)),tt=P||((o,s)=>{const{key:u}=o,f=Be(o,zt);return x.jsx("li",I({},f,{children:ue(s)}),u)}),Ve=(o,s)=>{const u=v({option:o,index:s});return tt(I({},u,{className:m.option}),o,{selected:u["aria-selected"],index:s,inputValue:Xe},$)},Ce=(A=W.clearIndicator)!=null?A:_.clearIndicator,te=(z=W.paper)!=null?z:_.paper,ce=(N=W.popper)!=null?N:_.popper,t=(T=W.popupIndicator)!=null?T:_.popupIndicator,e=o=>x.jsx(Kt,I({as:re,disablePortal:Ae,style:{width:ie?ie.clientWidth:null},ownerState:$,role:"presentation",anchorEl:ie,open:se},ce,{className:ye(m.popper,ce==null?void 0:ce.className),children:x.jsx(Ut,I({ownerState:$,as:S},te,{className:ye(m.paper,te==null?void 0:te.className),children:o}))}));let r=null;return w.length>0?r=e(x.jsx(Qt,I({as:Y,className:m.listbox,ownerState:$},ze,xe,{ref:Ye,children:w.map((o,s)=>Te?Ze({key:o.key,group:o.group,children:o.options.map((u,f)=>Ve(u,o.index+f))}):Ve(o,s))}))):Re&&w.length===0?r=e(x.jsx(qt,{className:m.loading,ownerState:$,children:L})):w.length===0&&!he&&!Re&&(r=e(x.jsx(Jt,{className:m.noOptions,ownerState:$,role:"presentation",onMouseDown:o=>{o.preventDefault()},children:Ie}))),x.jsxs(O.Fragment,{children:[x.jsx(_t,I({ref:g,className:ye(m.root,k),ownerState:$},De(le),{children:we({id:ae,disabled:q,fullWidth:!0,size:p==="small"?"small":void 0,InputLabelProps:J(),InputProps:I({ref:$e,className:m.inputRoot,startAdornment:M,onClick:o=>{o.target===o.currentTarget&&pe(o)}},(G||j)&&{endAdornment:x.jsxs(Bt,{className:m.endAdornment,ownerState:$,children:[G?x.jsx(Wt,I({},Qe(),{"aria-label":ge,title:ge,ownerState:$},Ce,{className:ye(m.clearIndicator,Ce==null?void 0:Ce.className),children:Ge})):null,j?x.jsx(Gt,I({},Ne(),{disabled:q,"aria-label":se?U:h,title:se?U:h,ownerState:$},t,{className:ye(m.popupIndicator,t==null?void 0:t.className),children:Je})):null]})}),inputProps:I({className:m.input,disabled:q,readOnly:y},Z())})})),ie?r:null]})});export{oo as A,wt as c};