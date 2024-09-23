import{r as x,j as e,S as C,du as A,L as D,R as V,B as g,aF as H,p as N,I as S,dw as W,bG as M,e as _,dz as Q,bI as K,bJ as q,o as J,co as Y,A as X,T as y,y as L,dA as B,D as Z,aA as ee,dB as te,v as z,cp as re,w as se,dC as ne,dD as oe,dE as ae,dF as ie,dG as le,dH as ce,f as de,dI as T,H as pe,C as me}from"./index-lMp9zap6.js";import{P as xe,u as he,a as ue}from"./product-skeleton-BXK_FHeN.js";import{m as ge,p as je}from"./product-review-new-form-CVPyow4k.js";import{E as be}from"./empty-content-v04S0NJf.js";import{b as E}from"./format-number-BW6JEF9q.js";import{I as fe}from"./image-7Gw8g56m.js";import{C as ye,a as Ce}from"./color-preview-CJO_juDV.js";import{u as U}from"./use-checkout-context-C07HUaXY.js";import{F as Re}from"./Fab-BZxOmBgR.js";import{P as Se,p as ve}from"./Pagination-DiimFs0V.js";import{S as ke}from"./form-provider-Cj0Z9UsE.js";import{A as Pe}from"./Autocomplete-DnVwYLlc.js";import{T as Ie}from"./TextField-BEm0Gfgz.js";import{I as we}from"./InputAdornment-CznJJWQj.js";import{C as Fe}from"./cart-icon-D2n_GcYA.js";import{F as $}from"./FormControlLabel-CSqTNcaw.js";import{C as Oe}from"./Checkbox-BfbryewD.js";import{a as Te}from"./RadioGroup-C-GnO1ca.js";import{S as Ae}from"./Slider--FnFNgPJ.js";import{R as Le}from"./Rating-D1epoFLf.js";import{b as Be}from"./InputBase-D6UR9yYG.js";import{F as Ee,a as w,c as F}from"./filters-result-BnQFy5UF.js";import{C as O}from"./Chip-lc0vODcu.js";import"./editor-56m6PEpo.js";import"./incrementer-button-iExNop-d.js";import"./carousel-progress-bar-DSPZDLfG.js";import"./html-to-markdown-6kshxNLu.js";import"./index-B6dvdy-Z.js";import"./Skeleton-RWGZjAwW.js";import"./useMutation-B2tKEkiI.js";import"./utils-km2FGkQ4.js";import"./product-Item-button-D_tV4M52.js";import"./upload-avatar-jEC4OtmL.js";import"./FormHelperText-CiWaMPMf.js";import"./formControlState-Dq1zat_P.js";import"./index-KeOEaw8h.js";import"./DialogContent-B0tqVN_s.js";import"./DialogTitle-BCkrw5VA.js";import"./LoadingButton-BI3VwLzw.js";import"./CircularProgress-CX5vuYgb.js";import"./AccordionSummary-CQn1YVkj.js";import"./LastPage-B3GbPSnl.js";import"./FormControl-BFlCQpvi.js";import"./utils-DoM3o7-Q.js";import"./FormLabel-CKyhTT_V.js";import"./countries-DSLisFCy.js";import"./country-select-DkXlsKd6.js";import"./FormGroup-BE8TyzSB.js";import"./InputLabel-D2FT-Pcv.js";import"./Select-DE7_tqxX.js";import"./Menu-Di83eYAm.js";import"./DatePicker-CRaT7_Tx.js";import"./visuallyHidden-Dan1xhjv.js";import"./ListItem-Eefms6HN.js";import"./MobileDateTimePicker-CghIhRUp.js";import"./index-DTyO1f1S.js";function $e(t,p=500){const[a,s]=x.useState(t),r=x.useCallback(()=>{const c=setTimeout(()=>{s(t)},p);return()=>{clearTimeout(c)}},[t,p]);return x.useEffect(()=>{r()},[r]),x.useMemo(()=>a,[a])}function Ge({product:t}){const p=U(),{id:a,name:s,coverUrl:r,price:d,colors:c,available:i,sizes:o,priceSale:l,newLabel:m,saleLabel:h}=t,u=N.product.details(a),b=async()=>{const f={id:a,name:s,coverUrl:r,available:i,price:d,colors:[c[0]],size:o[0],quantity:1};try{p.onAddToCart(f)}catch(n){console.error(n)}},v=(m.enabled||h.enabled)&&e.jsxs(C,{direction:"row",alignItems:"center",spacing:1,sx:{position:"absolute",zIndex:9,top:16,right:16},children:[m.enabled&&e.jsx(A,{variant:"filled",color:"info",children:m.content}),h.enabled&&e.jsx(A,{variant:"filled",color:"error",children:h.content})]}),k=e.jsxs(g,{sx:{position:"relative",p:1},children:[!!i&&e.jsx(Re,{color:"warning",size:"medium",className:"add-cart-btn",onClick:b,sx:{right:16,bottom:16,zIndex:9,opacity:0,position:"absolute",transition:f=>f.transitions.create("all",{easing:f.transitions.easing.easeInOut,duration:f.transitions.duration.shorter})},children:e.jsx(S,{icon:"solar:cart-plus-bold",width:24})}),e.jsx(W,{title:!i&&"Out of stock",placement:"bottom-end",children:e.jsx(fe,{alt:s,src:r,ratio:"1/1",sx:{borderRadius:1.5,...!i&&{opacity:.48,filter:"grayscale(1)"}}})})]}),P=e.jsxs(C,{spacing:2.5,sx:{p:3,pt:2},children:[e.jsx(D,{component:V,href:u,color:"inherit",variant:"subtitle2",noWrap:!0,children:s}),e.jsxs(C,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(ye,{colors:c}),e.jsxs(C,{direction:"row",spacing:.5,sx:{typography:"subtitle1"},children:[l&&e.jsx(g,{component:"span",sx:{color:"text.disabled",textDecoration:"line-through"},children:E(l)}),e.jsx(g,{component:"span",children:E(d)})]})]})]});return e.jsxs(H,{sx:{"&:hover .add-cart-btn":{opacity:1}},children:[v,k,P]})}function Ne({products:t,loading:p,...a}){const s=e.jsx(xe,{}),r=t.map(d=>e.jsx(Ge,{product:d},d.id));return e.jsxs(e.Fragment,{children:[e.jsx(g,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"},...a,children:p?s:r}),t.length>8&&e.jsx(Se,{count:8,sx:{mt:{xs:5,md:8},[`& .${ve.ul}`]:{justifyContent:"center"}}})]})}function We({sort:t,onSort:p,sortOptions:a}){var d;const s=M(),r=(d=a.find(c=>c.value===t))==null?void 0:d.label;return e.jsxs(e.Fragment,{children:[e.jsxs(_,{disableRipple:!0,color:"inherit",onClick:s.onOpen,endIcon:e.jsx(S,{icon:s.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold"},children:["Sort by:",e.jsx(g,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold"},children:r})]}),e.jsx(Q,{open:s.open,anchorEl:s.anchorEl,onClose:s.onClose,children:e.jsx(K,{children:a.map(c=>e.jsx(q,{selected:c.value===t,onClick:()=>{s.onClose(),p(c.value)},children:c.label},c.value))})})]})}function _e({query:t,results:p,onSearch:a,loading:s}){const r=J(),d=i=>{r.push(N.product.details(i))},c=i=>{if(t&&i.key==="Enter"){const o=p.filter(l=>l.name===t)[0];d(o.id)}};return e.jsx(Pe,{sx:{width:{xs:1,sm:260}},loading:s,autoHighlight:!0,popupIcon:null,options:p,onInputChange:(i,o)=>a(o),getOptionLabel:i=>i.name,noOptionsText:e.jsx(ke,{query:t}),isOptionEqualToValue:(i,o)=>i.id===o.id,slotProps:{popper:{placement:"bottom-start",sx:{minWidth:320}},paper:{sx:{[` .${Y.option}`]:{pl:.75}}}},renderInput:i=>e.jsx(Ie,{...i,placeholder:"Search...",onKeyUp:c,InputProps:{...i.InputProps,startAdornment:e.jsx(we,{position:"start",children:e.jsx(S,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})}),endAdornment:e.jsxs(e.Fragment,{children:[s?e.jsx(S,{icon:"svg-spinners:8-dots-rotate",sx:{mr:-3}}):null,i.InputProps.endAdornment]})}}),renderOption:(i,o,{inputValue:l})=>{const m=ge(o.name,l),h=je(o.name,m);return x.createElement(g,{component:"li",...i,onClick:()=>d(o.id),key:o.id},e.jsx(X,{alt:o.name,src:o.coverUrl,variant:"rounded",sx:{mr:1.5,width:48,height:48,flexShrink:0,borderRadius:1}},o.id),e.jsx("div",{children:h.map((u,b)=>e.jsx(y,{component:"span",color:u.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:u.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:u.text},b))},l))}})}function ze({open:t,onOpen:p,onClose:a,canReset:s,filters:r,options:d}){const c=[...Array(21)].map((n,j)=>{const R=j*10,I=j===0?`$${R}`:`${R}`;return{value:R,label:j%4?"":I}}),i=x.useCallback(n=>{const j=r.state.gender.includes(n)?r.state.gender.filter(R=>R!==n):[...r.state.gender,n];r.setState({gender:j})},[r]),o=x.useCallback(n=>{r.setState({category:n})},[r]),l=x.useCallback(n=>{r.setState({colors:n})},[r]),m=x.useCallback((n,j)=>{r.setState({priceRange:j})},[r]),h=x.useCallback(n=>{r.setState({rating:n})},[r]),u=e.jsxs(e.Fragment,{children:[e.jsxs(g,{display:"flex",alignItems:"center",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(y,{variant:"h6",sx:{flexGrow:1},children:"Filters"}),e.jsx(W,{title:"Reset",children:e.jsx(L,{onClick:r.onResetState,children:e.jsx(B,{color:"error",variant:"dot",invisible:!s,children:e.jsx(S,{icon:"solar:restart-bold"})})})}),e.jsx(L,{onClick:a,children:e.jsx(S,{icon:"mingcute:close-line"})})]}),e.jsx(Z,{sx:{borderStyle:"dashed"}})]}),b=e.jsxs(g,{display:"flex",flexDirection:"column",children:[e.jsx(y,{variant:"subtitle2",sx:{mb:1},children:"Gender"}),d.genders.map(n=>e.jsx($,{control:e.jsx(Oe,{checked:r.state.gender.includes(n.label),onClick:()=>i(n.label)}),label:n.label},n.value))]}),v=e.jsxs(g,{display:"flex",flexDirection:"column",children:[e.jsx(y,{variant:"subtitle2",sx:{mb:1},children:"Category"}),d.categories.map(n=>e.jsx($,{control:e.jsx(Te,{checked:n===r.state.category,onClick:()=>o(n)}),label:n,sx:{...n==="all"&&{textTransform:"capitalize"}}},n))]}),k=e.jsxs(g,{display:"flex",flexDirection:"column",children:[e.jsx(y,{variant:"subtitle2",sx:{mb:1},children:"Color"}),e.jsx(Ce,{selected:r.state.colors,onSelectColor:n=>l(n),colors:d.colors,limit:6})]}),P=e.jsxs(g,{display:"flex",flexDirection:"column",children:[e.jsx(y,{variant:"subtitle2",children:"Price"}),e.jsxs(g,{gap:5,display:"flex",sx:{my:2},children:[e.jsx(G,{type:"min",value:r.state.priceRange,onFilters:r.setState}),e.jsx(G,{type:"max",value:r.state.priceRange,onFilters:r.setState})]}),e.jsx(Ae,{value:r.state.priceRange,onChange:m,step:10,min:0,max:200,marks:c,getAriaValueText:n=>`$${n}`,valueLabelFormat:n=>`$${n}`,sx:{alignSelf:"center",width:"calc(100% - 24px)"}})]}),f=e.jsxs(g,{display:"flex",flexDirection:"column",children:[e.jsx(y,{variant:"subtitle2",sx:{mb:2},children:"Rating"}),d.ratings.map((n,j)=>e.jsxs(g,{onClick:()=>h(n),sx:{mb:1,gap:1,ml:-1,p:.5,display:"flex",borderRadius:1,cursor:"pointer",typography:"body2",alignItems:"center","&:hover":{opacity:.48},...r.state.rating===n&&{bgcolor:"action.selected"}},children:[e.jsx(Le,{readOnly:!0,value:4-j})," & Up"]},n))]});return e.jsxs(e.Fragment,{children:[e.jsx(_,{disableRipple:!0,color:"inherit",endIcon:e.jsx(B,{color:"error",variant:"dot",invisible:!s,children:e.jsx(S,{icon:"ic:round-filter-list"})}),onClick:p,children:"Filters"}),e.jsxs(ee,{anchor:"right",open:t,onClose:a,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:320}},children:[u,e.jsx(te,{sx:{px:2.5,py:3},children:e.jsxs(C,{spacing:3,children:[b,v,k,P,f]})})]})]})}function G({type:t,value:p,onFilters:a}){const s=p[0],r=p[1],d=x.useCallback(()=>{s<0&&a({priceRange:[0,r]}),s>200&&a({priceRange:[200,r]}),r<0&&a({priceRange:[s,0]}),r>200&&a({priceRange:[s,200]})},[r,s,a]);return e.jsxs(C,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{width:1},children:[e.jsx(y,{variant:"caption",sx:{flexShrink:0,color:"text.disabled",textTransform:"capitalize",fontWeight:"fontWeightSemiBold"},children:`${t} ($)`}),e.jsx(Be,{fullWidth:!0,value:t==="min"?s:r,onChange:c=>a(t==="min"?{priceRange:[Number(c.target.value),r]}:{priceRange:[s,Number(c.target.value)]}),onBlur:d,inputProps:{step:10,min:0,max:200,type:"number","aria-labelledby":"input-slider"},sx:{maxWidth:48,borderRadius:.75,bgcolor:c=>z(c.vars.palette.grey["500Channel"],.08),[`& .${re.input}`]:{pr:1,py:.75,textAlign:"right",typography:"body2"}}})]})}function Ue({filters:t,totalResults:p,sx:a}){const s=o=>{const l=t.state.gender.filter(m=>m!==o);t.setState({gender:l})},r=()=>{t.setState({category:"all"})},d=o=>{const l=t.state.colors.filter(m=>m!==o);t.setState({colors:l})},c=()=>{t.setState({priceRange:[0,200]})},i=()=>{t.setState({rating:""})};return e.jsxs(Ee,{totalResults:p,onReset:t.onResetState,sx:a,children:[e.jsx(w,{label:"Gender:",isShow:!!t.state.gender.length,children:t.state.gender.map(o=>x.createElement(O,{...F,key:o,label:o,onDelete:()=>s(o)}))}),e.jsx(w,{label:"Category:",isShow:t.state.category!=="all",children:e.jsx(O,{...F,label:t.state.category,onDelete:r})}),e.jsx(w,{label:"Colors:",isShow:!!t.state.colors.length,children:t.state.colors.map(o=>x.createElement(O,{...F,key:o,label:e.jsx(g,{sx:{ml:-.5,width:18,height:18,bgcolor:o,borderRadius:"50%",border:l=>`solid 1px ${z(l.vars.palette.common.whiteChannel,.24)}`}}),onDelete:()=>d(o)}))}),e.jsx(w,{label:"Price:",isShow:t.state.priceRange[0]!==0||t.state.priceRange[1]!==200,children:e.jsx(O,{...F,label:`$${t.state.priceRange[0]} - ${t.state.priceRange[1]}`,onDelete:c})}),e.jsx(w,{label:"Rating:",isShow:!!t.state.rating,children:e.jsx(O,{...F,label:t.state.rating,onDelete:i})})]})}function De({products:t,loading:p}){const a=U(),s=se(),[r,d]=x.useState("featured"),[c,i]=x.useState(""),o=$e(c),l=ne({gender:[],colors:[],rating:"",category:"all",priceRange:[0,200]}),{searchResults:m,searchLoading:h}=he(o),u=Ve({inputData:t,filters:l.state,sortBy:r}),b=l.state.gender.length>0||l.state.colors.length>0||l.state.rating!==""||l.state.category!=="all"||l.state.priceRange[0]!==0||l.state.priceRange[1]!==200,v=!u.length&&b,k=x.useCallback(I=>{d(I)},[]),P=x.useCallback(I=>{i(I)},[]),f=!p&&!t.length,n=e.jsxs(C,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[e.jsx(_e,{query:o,results:m,onSearch:P,loading:h}),e.jsxs(C,{direction:"row",spacing:1,flexShrink:0,children:[e.jsx(ze,{filters:l,canReset:b,open:s.value,onOpen:s.onTrue,onClose:s.onFalse,options:{colors:oe,ratings:ae,genders:ie,categories:["all",...le]}}),e.jsx(We,{sort:r,onSort:k,sortOptions:ce})]})]}),j=e.jsx(Ue,{filters:l,totalResults:u.length}),R=e.jsx(be,{filled:!0,sx:{py:10}});return e.jsxs(de,{sx:{mb:15},children:[e.jsx(Fe,{totalItems:a.totalItems}),e.jsx(y,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Shop"}),e.jsxs(C,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[n,b&&j]}),(v||f)&&R,e.jsx(Ne,{products:u,loading:p})]})}function Ve({inputData:t,filters:p,sortBy:a}){const{gender:s,category:r,colors:d,priceRange:c,rating:i}=p,o=c[0],l=c[1];return a==="featured"&&(t=T(t,["totalSold"],["desc"])),a==="newest"&&(t=T(t,["createdAt"],["desc"])),a==="priceDesc"&&(t=T(t,["price"],["desc"])),a==="priceAsc"&&(t=T(t,["price"],["asc"])),s.length&&(t=t.filter(m=>m.gender.some(h=>s.includes(h)))),r!=="all"&&(t=t.filter(m=>m.category===r)),d.length&&(t=t.filter(m=>m.colors.some(h=>d.includes(h)))),(o!==0||l!==200)&&(t=t.filter(m=>m.price>=o&&m.price<=l)),i&&(t=t.filter(m=>{const h=u=>u==="up4Star"?4:u==="up3Star"?3:u==="up2Star"?2:1;return m.totalRatings>h(i)})),t}const He={title:`Product shop - ${me.site.name}`};function Kt(){const{products:t,productsLoading:p}=ue();return e.jsxs(e.Fragment,{children:[e.jsx(pe,{children:e.jsxs("title",{children:[" ",He.title]})}),e.jsx(De,{products:t,loading:p})]})}export{Kt as default};
