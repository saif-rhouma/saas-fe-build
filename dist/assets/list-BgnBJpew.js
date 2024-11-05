import{r as x,j as e,S as C,d7 as L,L as V,R as H,B as g,cY as D,p as W,I as S,c9 as G,aP as M,e as _,db as Q,aR as K,aS as Y,g as q,bM as J,A as X,T as y,l as A,dc as $,am as Z,cH as ee,dd as te,v as U,bN as re,i as se,de as ne,df as oe,dg as ae,dh as ie,di as le,dj as ce,f as de,dk as T,H as pe,C as me}from"./index-DA_sWj7x.js";import{P as xe,u as he,C as ue,a as ge}from"./cart-icon-PVyXvQgN.js";import{m as je,p as be}from"./product-review-new-form-DvMuSMsv.js";import{E as fe}from"./empty-content-C10gBz3p.js";import{b as B}from"./format-number-D9j_wXTT.js";import{I as ye}from"./image-CRDrcpoJ.js";import{C as Ce,a as Re}from"./color-preview-AczErYAl.js";import{u as z}from"./use-checkout-context-DxfrvG4C.js";import{F as Se}from"./Fab-BRlu87cL.js";import{P as ve,p as ke}from"./Pagination-4jjnra00.js";import{S as Pe}from"./form-provider-CTdVN4vu.js";import{A as Ie}from"./Autocomplete-DbJzaceL.js";import{T as we}from"./TextField-BQRcm5r-.js";import{I as Fe}from"./InputAdornment-7VEY_HFv.js";import{F as E}from"./FormControlLabel-BSdOyXTw.js";import{C as Oe}from"./Checkbox-DlkIc83d.js";import{a as Te}from"./RadioGroup-DWlVZGkl.js";import{S as Le}from"./Slider-Clme6BGw.js";import{R as Ae}from"./Rating-Chmlittq.js";import{b as $e}from"./InputBase-DdR0vOej.js";import{F as Be,a as w,c as F}from"./filters-result-Cb3xl34t.js";import{C as O}from"./Chip-DviT2eOB.js";import"./editor-BhUSbnWA.js";import"./incrementer-button-CZkmblIv.js";import"./carousel-progress-bar-BUAR5Sc1.js";import"./html-to-markdown-CgwtPqkq.js";import"./index-BLFYcAC0.js";import"./Skeleton-O6XvML-1.js";import"./useMutation-CzAuz-nV.js";import"./utils-km2FGkQ4.js";import"./confirm-dialog-pLPhLmEX.js";import"./DialogContent-BquOMge6.js";import"./DialogTitle-DhGHrha_.js";import"./product-Item-button-BUa5-lIR.js";import"./upload-avatar-CcLxyF8X.js";import"./FormHelperText-B0Lo5puV.js";import"./formControlState-Dq1zat_P.js";import"./index-E2ErbIOV.js";import"./LoadingButton-BfquC3i-.js";import"./CircularProgress-Bmk4-yk7.js";import"./AccordionSummary-CCSV21nm.js";import"./LastPage-_Emt8W-B.js";import"./FormControl-DTxFu6gc.js";import"./utils-DoM3o7-Q.js";import"./FormLabel-BnVZ0dPm.js";import"./utils-D2vx0BgK.js";import"./countries-DSLisFCy.js";import"./country-select-BQ9_lgmW.js";import"./FormGroup-CqkwRdvu.js";import"./InputLabel-boKuiNtX.js";import"./Select-D9yQfH_l.js";import"./Menu-COzu8Q58.js";import"./DatePicker-DTE5o5_B.js";import"./visuallyHidden-Dan1xhjv.js";import"./ListItem-BwcFEdmT.js";import"./MobileDateTimePicker-CMRypXtW.js";import"./Tabs-Cxp1yOLE.js";import"./KeyboardArrowRight-BY1WhlU8.js";import"./index-Dg6QYdlp.js";function Ee(t,p=500){const[a,s]=x.useState(t),r=x.useCallback(()=>{const c=setTimeout(()=>{s(t)},p);return()=>{clearTimeout(c)}},[t,p]);return x.useEffect(()=>{r()},[r]),x.useMemo(()=>a,[a])}function Ne({product:t}){const p=z(),{id:a,name:s,coverUrl:r,price:d,colors:c,available:i,sizes:o,priceSale:l,newLabel:m,saleLabel:h}=t,u=W.product.details(a),b=async()=>{const f={id:a,name:s,coverUrl:r,available:i,price:d,colors:[c[0]],size:o[0],quantity:1};try{p.onAddToCart(f)}catch(n){console.error(n)}},v=(m.enabled||h.enabled)&&e.jsxs(C,{direction:"row",alignItems:"center",spacing:1,sx:{position:"absolute",zIndex:9,top:16,right:16},children:[m.enabled&&e.jsx(L,{variant:"filled",color:"info",children:m.content}),h.enabled&&e.jsx(L,{variant:"filled",color:"error",children:h.content})]}),k=e.jsxs(g,{sx:{position:"relative",p:1},children:[!!i&&e.jsx(Se,{color:"warning",size:"medium",className:"add-cart-btn",onClick:b,sx:{right:16,bottom:16,zIndex:9,opacity:0,position:"absolute",transition:f=>f.transitions.create("all",{easing:f.transitions.easing.easeInOut,duration:f.transitions.duration.shorter})},children:e.jsx(S,{icon:"solar:cart-plus-bold",width:24})}),e.jsx(G,{title:!i&&"Out of stock",placement:"bottom-end",children:e.jsx(ye,{alt:s,src:r,ratio:"1/1",sx:{borderRadius:1.5,...!i&&{opacity:.48,filter:"grayscale(1)"}}})})]}),P=e.jsxs(C,{spacing:2.5,sx:{p:3,pt:2},children:[e.jsx(V,{component:H,href:u,color:"inherit",variant:"subtitle2",noWrap:!0,children:s}),e.jsxs(C,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(Ce,{colors:c}),e.jsxs(C,{direction:"row",spacing:.5,sx:{typography:"subtitle1"},children:[l&&e.jsx(g,{component:"span",sx:{color:"text.disabled",textDecoration:"line-through"},children:B(l)}),e.jsx(g,{component:"span",children:B(d)})]})]})]});return e.jsxs(D,{sx:{"&:hover .add-cart-btn":{opacity:1}},children:[v,k,P]})}function We({products:t,loading:p,...a}){const s=e.jsx(xe,{}),r=t.map(d=>e.jsx(Ne,{product:d},d.id));return e.jsxs(e.Fragment,{children:[e.jsx(g,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"},...a,children:p?s:r}),t.length>8&&e.jsx(ve,{count:8,sx:{mt:{xs:5,md:8},[`& .${ke.ul}`]:{justifyContent:"center"}}})]})}function Ge({sort:t,onSort:p,sortOptions:a}){var d;const s=M(),r=(d=a.find(c=>c.value===t))==null?void 0:d.label;return e.jsxs(e.Fragment,{children:[e.jsxs(_,{disableRipple:!0,color:"inherit",onClick:s.onOpen,endIcon:e.jsx(S,{icon:s.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"}),sx:{fontWeight:"fontWeightSemiBold"},children:["Sort by:",e.jsx(g,{component:"span",sx:{ml:.5,fontWeight:"fontWeightBold"},children:r})]}),e.jsx(Q,{open:s.open,anchorEl:s.anchorEl,onClose:s.onClose,children:e.jsx(K,{children:a.map(c=>e.jsx(Y,{selected:c.value===t,onClick:()=>{s.onClose(),p(c.value)},children:c.label},c.value))})})]})}function _e({query:t,results:p,onSearch:a,loading:s}){const r=q(),d=i=>{r.push(W.product.details(i))},c=i=>{if(t&&i.key==="Enter"){const o=p.filter(l=>l.name===t)[0];d(o.id)}};return e.jsx(Ie,{sx:{width:{xs:1,sm:260}},loading:s,autoHighlight:!0,popupIcon:null,options:p,onInputChange:(i,o)=>a(o),getOptionLabel:i=>i.name,noOptionsText:e.jsx(Pe,{query:t}),isOptionEqualToValue:(i,o)=>i.id===o.id,slotProps:{popper:{placement:"bottom-start",sx:{minWidth:320}},paper:{sx:{[` .${J.option}`]:{pl:.75}}}},renderInput:i=>e.jsx(we,{...i,placeholder:"Search...",onKeyUp:c,InputProps:{...i.InputProps,startAdornment:e.jsx(Fe,{position:"start",children:e.jsx(S,{icon:"eva:search-fill",sx:{ml:1,color:"text.disabled"}})}),endAdornment:e.jsxs(e.Fragment,{children:[s?e.jsx(S,{icon:"svg-spinners:8-dots-rotate",sx:{mr:-3}}):null,i.InputProps.endAdornment]})}}),renderOption:(i,o,{inputValue:l})=>{const m=je(o.name,l),h=be(o.name,m);return x.createElement(g,{component:"li",...i,onClick:()=>d(o.id),key:o.id},e.jsx(X,{alt:o.name,src:o.coverUrl,variant:"rounded",sx:{mr:1.5,width:48,height:48,flexShrink:0,borderRadius:1}},o.id),e.jsx("div",{children:h.map((u,b)=>e.jsx(y,{component:"span",color:u.highlight?"primary":"textPrimary",sx:{typography:"body2",fontWeight:u.highlight?"fontWeightSemiBold":"fontWeightMedium"},children:u.text},b))},l))}})}function Ue({open:t,onOpen:p,onClose:a,canReset:s,filters:r,options:d}){const c=[...Array(21)].map((n,j)=>{const R=j*10,I=j===0?`$${R}`:`${R}`;return{value:R,label:j%4?"":I}}),i=x.useCallback(n=>{const j=r.state.gender.includes(n)?r.state.gender.filter(R=>R!==n):[...r.state.gender,n];r.setState({gender:j})},[r]),o=x.useCallback(n=>{r.setState({category:n})},[r]),l=x.useCallback(n=>{r.setState({colors:n})},[r]),m=x.useCallback((n,j)=>{r.setState({priceRange:j})},[r]),h=x.useCallback(n=>{r.setState({rating:n})},[r]),u=e.jsxs(e.Fragment,{children:[e.jsxs(g,{display:"flex",alignItems:"center",sx:{py:2,pr:1,pl:2.5},children:[e.jsx(y,{variant:"h6",sx:{flexGrow:1},children:"Filters"}),e.jsx(G,{title:"Reset",children:e.jsx(A,{onClick:r.onResetState,children:e.jsx($,{color:"error",variant:"dot",invisible:!s,children:e.jsx(S,{icon:"solar:restart-bold"})})})}),e.jsx(A,{onClick:a,children:e.jsx(S,{icon:"mingcute:close-line"})})]}),e.jsx(Z,{sx:{borderStyle:"dashed"}})]}),b=e.jsxs(g,{display:"flex",flexDirection:"column",children:[e.jsx(y,{variant:"subtitle2",sx:{mb:1},children:"Gender"}),d.genders.map(n=>e.jsx(E,{control:e.jsx(Oe,{checked:r.state.gender.includes(n.label),onClick:()=>i(n.label)}),label:n.label},n.value))]}),v=e.jsxs(g,{display:"flex",flexDirection:"column",children:[e.jsx(y,{variant:"subtitle2",sx:{mb:1},children:"Category"}),d.categories.map(n=>e.jsx(E,{control:e.jsx(Te,{checked:n===r.state.category,onClick:()=>o(n)}),label:n,sx:{...n==="all"&&{textTransform:"capitalize"}}},n))]}),k=e.jsxs(g,{display:"flex",flexDirection:"column",children:[e.jsx(y,{variant:"subtitle2",sx:{mb:1},children:"Color"}),e.jsx(Re,{selected:r.state.colors,onSelectColor:n=>l(n),colors:d.colors,limit:6})]}),P=e.jsxs(g,{display:"flex",flexDirection:"column",children:[e.jsx(y,{variant:"subtitle2",children:"Price"}),e.jsxs(g,{gap:5,display:"flex",sx:{my:2},children:[e.jsx(N,{type:"min",value:r.state.priceRange,onFilters:r.setState}),e.jsx(N,{type:"max",value:r.state.priceRange,onFilters:r.setState})]}),e.jsx(Le,{value:r.state.priceRange,onChange:m,step:10,min:0,max:200,marks:c,getAriaValueText:n=>`$${n}`,valueLabelFormat:n=>`$${n}`,sx:{alignSelf:"center",width:"calc(100% - 24px)"}})]}),f=e.jsxs(g,{display:"flex",flexDirection:"column",children:[e.jsx(y,{variant:"subtitle2",sx:{mb:2},children:"Rating"}),d.ratings.map((n,j)=>e.jsxs(g,{onClick:()=>h(n),sx:{mb:1,gap:1,ml:-1,p:.5,display:"flex",borderRadius:1,cursor:"pointer",typography:"body2",alignItems:"center","&:hover":{opacity:.48},...r.state.rating===n&&{bgcolor:"action.selected"}},children:[e.jsx(Ae,{readOnly:!0,value:4-j})," & Up"]},n))]});return e.jsxs(e.Fragment,{children:[e.jsx(_,{disableRipple:!0,color:"inherit",endIcon:e.jsx($,{color:"error",variant:"dot",invisible:!s,children:e.jsx(S,{icon:"ic:round-filter-list"})}),onClick:p,children:"Filters"}),e.jsxs(ee,{anchor:"right",open:t,onClose:a,slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:320}},children:[u,e.jsx(te,{sx:{px:2.5,py:3},children:e.jsxs(C,{spacing:3,children:[b,v,k,P,f]})})]})]})}function N({type:t,value:p,onFilters:a}){const s=p[0],r=p[1],d=x.useCallback(()=>{s<0&&a({priceRange:[0,r]}),s>200&&a({priceRange:[200,r]}),r<0&&a({priceRange:[s,0]}),r>200&&a({priceRange:[s,200]})},[r,s,a]);return e.jsxs(C,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{width:1},children:[e.jsx(y,{variant:"caption",sx:{flexShrink:0,color:"text.disabled",textTransform:"capitalize",fontWeight:"fontWeightSemiBold"},children:`${t} ($)`}),e.jsx($e,{fullWidth:!0,value:t==="min"?s:r,onChange:c=>a(t==="min"?{priceRange:[Number(c.target.value),r]}:{priceRange:[s,Number(c.target.value)]}),onBlur:d,inputProps:{step:10,min:0,max:200,type:"number","aria-labelledby":"input-slider"},sx:{maxWidth:48,borderRadius:.75,bgcolor:c=>U(c.vars.palette.grey["500Channel"],.08),[`& .${re.input}`]:{pr:1,py:.75,textAlign:"right",typography:"body2"}}})]})}function ze({filters:t,totalResults:p,sx:a}){const s=o=>{const l=t.state.gender.filter(m=>m!==o);t.setState({gender:l})},r=()=>{t.setState({category:"all"})},d=o=>{const l=t.state.colors.filter(m=>m!==o);t.setState({colors:l})},c=()=>{t.setState({priceRange:[0,200]})},i=()=>{t.setState({rating:""})};return e.jsxs(Be,{totalResults:p,onReset:t.onResetState,sx:a,children:[e.jsx(w,{label:"Gender:",isShow:!!t.state.gender.length,children:t.state.gender.map(o=>x.createElement(O,{...F,key:o,label:o,onDelete:()=>s(o)}))}),e.jsx(w,{label:"Category:",isShow:t.state.category!=="all",children:e.jsx(O,{...F,label:t.state.category,onDelete:r})}),e.jsx(w,{label:"Colors:",isShow:!!t.state.colors.length,children:t.state.colors.map(o=>x.createElement(O,{...F,key:o,label:e.jsx(g,{sx:{ml:-.5,width:18,height:18,bgcolor:o,borderRadius:"50%",border:l=>`solid 1px ${U(l.vars.palette.common.whiteChannel,.24)}`}}),onDelete:()=>d(o)}))}),e.jsx(w,{label:"Price:",isShow:t.state.priceRange[0]!==0||t.state.priceRange[1]!==200,children:e.jsx(O,{...F,label:`$${t.state.priceRange[0]} - ${t.state.priceRange[1]}`,onDelete:c})}),e.jsx(w,{label:"Rating:",isShow:!!t.state.rating,children:e.jsx(O,{...F,label:t.state.rating,onDelete:i})})]})}function Ve({products:t,loading:p}){const a=z(),s=se(),[r,d]=x.useState("featured"),[c,i]=x.useState(""),o=Ee(c),l=ne({gender:[],colors:[],rating:"",category:"all",priceRange:[0,200]}),{searchResults:m,searchLoading:h}=he(o),u=He({inputData:t,filters:l.state,sortBy:r}),b=l.state.gender.length>0||l.state.colors.length>0||l.state.rating!==""||l.state.category!=="all"||l.state.priceRange[0]!==0||l.state.priceRange[1]!==200,v=!u.length&&b,k=x.useCallback(I=>{d(I)},[]),P=x.useCallback(I=>{i(I)},[]),f=!p&&!t.length,n=e.jsxs(C,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},children:[e.jsx(_e,{query:o,results:m,onSearch:P,loading:h}),e.jsxs(C,{direction:"row",spacing:1,flexShrink:0,children:[e.jsx(Ue,{filters:l,canReset:b,open:s.value,onOpen:s.onTrue,onClose:s.onFalse,options:{colors:oe,ratings:ae,genders:ie,categories:["all",...le]}}),e.jsx(Ge,{sort:r,onSort:k,sortOptions:ce})]})]}),j=e.jsx(ze,{filters:l,totalResults:u.length}),R=e.jsx(fe,{filled:!0,sx:{py:10}});return e.jsxs(de,{sx:{mb:15},children:[e.jsx(ue,{totalItems:a.totalItems}),e.jsx(y,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Shop"}),e.jsxs(C,{spacing:2.5,sx:{mb:{xs:3,md:5}},children:[n,b&&j]}),(v||f)&&R,e.jsx(We,{products:u,loading:p})]})}function He({inputData:t,filters:p,sortBy:a}){const{gender:s,category:r,colors:d,priceRange:c,rating:i}=p,o=c[0],l=c[1];return a==="featured"&&(t=T(t,["totalSold"],["desc"])),a==="newest"&&(t=T(t,["createdAt"],["desc"])),a==="priceDesc"&&(t=T(t,["price"],["desc"])),a==="priceAsc"&&(t=T(t,["price"],["asc"])),s.length&&(t=t.filter(m=>m.gender.some(h=>s.includes(h)))),r!=="all"&&(t=t.filter(m=>m.category===r)),d.length&&(t=t.filter(m=>m.colors.some(h=>d.includes(h)))),(o!==0||l!==200)&&(t=t.filter(m=>m.price>=o&&m.price<=l)),i&&(t=t.filter(m=>{const h=u=>u==="up4Star"?4:u==="up3Star"?3:u==="up2Star"?2:1;return m.totalRatings>h(i)})),t}const De={title:`Product shop - ${me.site.name}`};function Jt(){const{products:t,productsLoading:p}=ge();return e.jsxs(e.Fragment,{children:[e.jsx(pe,{children:e.jsxs("title",{children:[" ",De.title]})}),e.jsx(Ve,{products:t,loading:p})]})}export{Jt as default};
