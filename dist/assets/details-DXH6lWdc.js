import{j as e,f as m,e as h,R as d,p as l,I as p,G as n,B as x,T as c,aF as j,i as f,v as g,k as v,H as b,C}from"./index-DLJImauo.js";import{u as w}from"./use-params-DeowL31Y.js";import{b as y,c as k}from"./product-skeleton-Brc3OlUm.js";import"./product-review-new-form-C5adLeOx.js";import"./image-BZDZbX9M.js";import"./color-preview-DOkg2xro.js";import"./form-provider-CFcdla9F.js";import"./editor-Cv_jl3Bs.js";import"./incrementer-button-zlyzDSeh.js";import"./carousel-progress-bar-Cb8X7yBu.js";import"./html-to-markdown-zgiF5KCf.js";import{u as P}from"./use-tabs-Cwh66ibX.js";import{E as R}from"./empty-content-C2NUDuUr.js";import{C as u}from"./custom-breadcrumbs-B-49wW2q.js";import{C as D}from"./cart-icon-CMADH_QA.js";import{u as I}from"./use-checkout-context-DESRoPBB.js";import{P as S,a as T,b as A,c as G}from"./product-details-description-C0vlpDDm.js";import"./index-BoF40ko4.js";import"./Skeleton-BFlFQZOr.js";import"./useMutation-7HTcUz2p.js";import"./utils-km2FGkQ4.js";import"./fields-BliOQ6O0.js";import"./FormHelperText-kKfXHIoW.js";import"./formControlState-Dq1zat_P.js";import"./Rating-FzotwsHz.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-0xmJrVsO.js";import"./TextField-Dn-4Yx6H.js";import"./FormControl-CkwXYy0A.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CEebhHey.js";import"./FormLabel-CL79af0c.js";import"./Select-C24IVDgk.js";import"./Menu-u9Fg2yBB.js";import"./InputBase-DlzL5OFi.js";import"./RadioGroup-C3COSxFX.js";import"./FormGroup-vDyIqZ9l.js";import"./FormControlLabel-C_QV2Cmj.js";import"./Autocomplete-BlHa76y8.js";import"./Chip-B_i8-SK5.js";import"./country-select-CN1OaNL9.js";import"./countries-DSLisFCy.js";import"./InputAdornment-DKC0KPnD.js";import"./Checkbox-iCj-brcW.js";import"./upload-avatar-6dytMmax.js";import"./format-number-Be330NDU.js";import"./index-CVIDvc2K.js";import"./DatePicker-D6XSSTkA.js";import"./DialogContent-DDfVnIX5.js";import"./ListItem-BofKFpgJ.js";import"./MobileDateTimePicker-CdN8K0hT.js";import"./product-Item-button-D086THL-.js";import"./DialogTitle-BO1ue4do.js";import"./LoadingButton-0fR1pVna.js";import"./CircularProgress-DCo-b5qy.js";import"./AccordionSummary-CX19oljD.js";import"./index-B2cAHtCt.js";import"./Pagination-Rgny1bj5.js";import"./LastPage-DlgH9h-y.js";import"./use-light-box-BWDi-bYP.js";import"./use-carousel-BDHsJSIl.js";import"./carousel-arrow-buttons-CCHNAu5j.js";import"./markdown-CWSHyXA-.js";const B=[{title:"100% original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 days replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function E({product:i,error:a,loading:o}){const s=I(),r=P("description");return o?e.jsx(m,{sx:{mt:5,mb:10},children:e.jsx(y,{})}):a?e.jsx(m,{sx:{mt:5,mb:10},children:e.jsx(R,{filled:!0,title:"Product not found!",action:e.jsx(h,{component:d,href:l.product.root,startIcon:e.jsx(p,{width:16,icon:"eva:arrow-ios-back-fill"}),sx:{mt:3},children:"Back to list"}),sx:{py:10}})}):e.jsxs(m,{sx:{mt:5,mb:10},children:[e.jsx(D,{totalItems:s.totalItems}),e.jsx(u,{links:[{name:"Home",href:"/"},{name:"Shop",href:l.product.root},{name:i==null?void 0:i.name}],sx:{mb:5}}),e.jsxs(n,{container:!0,spacing:{xs:3,md:5,lg:8},children:[e.jsx(n,{xs:12,md:6,lg:7,children:e.jsx(S,{images:i==null?void 0:i.images})}),e.jsx(n,{xs:12,md:6,lg:5,children:i&&e.jsx(T,{product:i,items:s.items,onAddCart:s.onAddToCart,onGotoStep:s.onGotoStep,disableActions:!(i!=null&&i.available)})})]}),e.jsx(x,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:B.map(t=>e.jsxs(x,{sx:{textAlign:"center",px:5},children:[e.jsx(p,{icon:t.icon,width:32,sx:{color:"primary.main"}}),e.jsx(c,{variant:"subtitle1",sx:{mb:1,mt:2},children:t.title}),e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},children:t.description})]},t.title))}),e.jsxs(j,{children:[e.jsx(f,{value:r.value,onChange:r.onChange,sx:{px:3,boxShadow:t=>`inset 0 -2px 0 0 ${g(t.vars.palette.grey["500Channel"],.08)}`},children:[{value:"description",label:"Description"},{value:"reviews",label:`Reviews (${i==null?void 0:i.reviews.length})`}].map(t=>e.jsx(v,{value:t.value,label:t.label},t.value))}),r.value==="description"&&e.jsx(A,{description:i==null?void 0:i.description}),r.value==="reviews"&&e.jsx(G,{ratings:i==null?void 0:i.ratings,reviews:i==null?void 0:i.reviews,totalRatings:i==null?void 0:i.totalRatings,totalReviews:i==null?void 0:i.totalReviews})]})]})}const F={title:`Product details - ${C.site.name}`};function qi(){const{id:i=""}=w(),{product:a,productLoading:o,productError:s}=k(i);return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsxs("title",{children:[" ",F.title]})}),e.jsx(E,{product:a,loading:o,error:s})]})}export{qi as default};