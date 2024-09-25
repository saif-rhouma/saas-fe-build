import{j as e,f as m,e as h,R as d,p as l,I as p,G as n,B as x,T as c,aF as j,i as f,v as g,k as v,H as b,C}from"./index-lMp9zap6.js";import{u as w}from"./use-params-BE9ZeZdM.js";import{b as y,c as k}from"./product-skeleton-BXK_FHeN.js";import"./product-review-new-form-CVPyow4k.js";import"./image-7Gw8g56m.js";import"./color-preview-CJO_juDV.js";import"./form-provider-Cj0Z9UsE.js";import"./editor-56m6PEpo.js";import"./incrementer-button-iExNop-d.js";import"./carousel-progress-bar-DSPZDLfG.js";import"./html-to-markdown-6kshxNLu.js";import{u as P}from"./use-tabs-B16NxWA8.js";import{E as R}from"./empty-content-v04S0NJf.js";import{C as u}from"./custom-breadcrumbs-CnRCretL.js";import{C as D}from"./cart-icon-D2n_GcYA.js";import{u as I}from"./use-checkout-context-C07HUaXY.js";import{P as S,a as T,b as A,c as G}from"./product-details-description-zBmleiAz.js";import"./index-B6dvdy-Z.js";import"./Skeleton-RWGZjAwW.js";import"./useMutation-B2tKEkiI.js";import"./utils-km2FGkQ4.js";import"./product-Item-button-D_tV4M52.js";import"./upload-avatar-jEC4OtmL.js";import"./format-number-BW6JEF9q.js";import"./FormHelperText-CiWaMPMf.js";import"./formControlState-Dq1zat_P.js";import"./index-KeOEaw8h.js";import"./DialogContent-B0tqVN_s.js";import"./DialogTitle-BCkrw5VA.js";import"./LoadingButton-BI3VwLzw.js";import"./CircularProgress-CX5vuYgb.js";import"./AccordionSummary-CQn1YVkj.js";import"./TextField-BEm0Gfgz.js";import"./FormControl-BFlCQpvi.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-D2FT-Pcv.js";import"./FormLabel-CKyhTT_V.js";import"./Select-DE7_tqxX.js";import"./Menu-Di83eYAm.js";import"./InputBase-D6UR9yYG.js";import"./Rating-D1epoFLf.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider--FnFNgPJ.js";import"./RadioGroup-C-GnO1ca.js";import"./FormGroup-BE8TyzSB.js";import"./FormControlLabel-CSqTNcaw.js";import"./countries-DSLisFCy.js";import"./InputAdornment-CznJJWQj.js";import"./Autocomplete-DnVwYLlc.js";import"./Chip-lc0vODcu.js";import"./country-select-DkXlsKd6.js";import"./Checkbox-BfbryewD.js";import"./DatePicker-CRaT7_Tx.js";import"./ListItem-Eefms6HN.js";import"./MobileDateTimePicker-CghIhRUp.js";import"./index-DTyO1f1S.js";import"./Pagination-DiimFs0V.js";import"./LastPage-B3GbPSnl.js";import"./use-light-box-BVnR-iAO.js";import"./use-carousel-DSVLMSky.js";import"./carousel-arrow-buttons-vckF2U5Q.js";import"./markdown-Dz8IonyP.js";const B=[{title:"100% original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 days replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function E({product:i,error:a,loading:o}){const s=I(),r=P("description");return o?e.jsx(m,{sx:{mt:5,mb:10},children:e.jsx(y,{})}):a?e.jsx(m,{sx:{mt:5,mb:10},children:e.jsx(R,{filled:!0,title:"Product not found!",action:e.jsx(h,{component:d,href:l.product.root,startIcon:e.jsx(p,{width:16,icon:"eva:arrow-ios-back-fill"}),sx:{mt:3},children:"Back to list"}),sx:{py:10}})}):e.jsxs(m,{sx:{mt:5,mb:10},children:[e.jsx(D,{totalItems:s.totalItems}),e.jsx(u,{links:[{name:"Home",href:"/"},{name:"Shop",href:l.product.root},{name:i==null?void 0:i.name}],sx:{mb:5}}),e.jsxs(n,{container:!0,spacing:{xs:3,md:5,lg:8},children:[e.jsx(n,{xs:12,md:6,lg:7,children:e.jsx(S,{images:i==null?void 0:i.images})}),e.jsx(n,{xs:12,md:6,lg:5,children:i&&e.jsx(T,{product:i,items:s.items,onAddCart:s.onAddToCart,onGotoStep:s.onGotoStep,disableActions:!(i!=null&&i.available)})})]}),e.jsx(x,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:B.map(t=>e.jsxs(x,{sx:{textAlign:"center",px:5},children:[e.jsx(p,{icon:t.icon,width:32,sx:{color:"primary.main"}}),e.jsx(c,{variant:"subtitle1",sx:{mb:1,mt:2},children:t.title}),e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},children:t.description})]},t.title))}),e.jsxs(j,{children:[e.jsx(f,{value:r.value,onChange:r.onChange,sx:{px:3,boxShadow:t=>`inset 0 -2px 0 0 ${g(t.vars.palette.grey["500Channel"],.08)}`},children:[{value:"description",label:"Description"},{value:"reviews",label:`Reviews (${i==null?void 0:i.reviews.length})`}].map(t=>e.jsx(v,{value:t.value,label:t.label},t.value))}),r.value==="description"&&e.jsx(A,{description:i==null?void 0:i.description}),r.value==="reviews"&&e.jsx(G,{ratings:i==null?void 0:i.ratings,reviews:i==null?void 0:i.reviews,totalRatings:i==null?void 0:i.totalRatings,totalReviews:i==null?void 0:i.totalReviews})]})]})}const F={title:`Product details - ${C.site.name}`};function Vi(){const{id:i=""}=w(),{product:a,productLoading:o,productError:s}=k(i);return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsxs("title",{children:[" ",F.title]})}),e.jsx(E,{product:a,loading:o,error:s})]})}export{Vi as default};