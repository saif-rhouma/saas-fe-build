import{j as e,f as m,e as h,R as d,p as l,I as p,G as n,B as x,T as c,aD as f,v as j,H as g,C as v}from"./index-DCM0dqKu.js";import{u as b}from"./use-params-D3xvRTwk.js";import{b as C,c as w}from"./product-skeleton-DuGb_1Fr.js";import"./product-review-new-form-BWQw19aP.js";import"./image-DskMD1i2.js";import"./color-preview-BVNm9jJp.js";import"./form-provider-CsXzZQi6.js";import"./editor-DskST7D0.js";import"./incrementer-button-CC-rEf7B.js";import"./carousel-progress-bar-Go7QvEqy.js";import"./html-to-markdown-DAs27kOg.js";import{u as y}from"./use-tabs-DBMWqMp4.js";import{E as k}from"./empty-content-CBh9MUbL.js";import{C as P}from"./custom-breadcrumbs-IetWuDPQ.js";import{C as R}from"./cart-icon-BwajUDcr.js";import{u}from"./use-checkout-context-B-71W21E.js";import{P as D,a as I,b as S,c as T}from"./product-details-description-Bv0V7ov6.js";import{T as A,a as G}from"./Tabs-D0Tq82TW.js";import"./index-BRWDmL20.js";import"./Skeleton-edAeoAuM.js";import"./useMutation-D2La3F2r.js";import"./utils-km2FGkQ4.js";import"./product-Item-button-DxaDdbMO.js";import"./upload-avatar-QqSqRao9.js";import"./format-number-BQ7t0qkw.js";import"./FormHelperText-DqZjaKA5.js";import"./formControlState-Dq1zat_P.js";import"./index-BdcQkSNX.js";import"./DialogContent-BFR1QZgD.js";import"./DialogTitle-DthX4Z2k.js";import"./LoadingButton-CNUTqo8f.js";import"./CircularProgress-CObVdEvj.js";import"./AccordionSummary-Dl_TwcP0.js";import"./TextField-n063yImk.js";import"./FormControl-CzeO_UtU.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-D4P0yivD.js";import"./FormLabel-sPKOeIzp.js";import"./Select-BfBEUDqV.js";import"./Menu-DUao5Yoh.js";import"./InputBase-DTC7mqIN.js";import"./Rating-bGgbH5MB.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-DbZp1IuP.js";import"./RadioGroup-Dwnhy8-J.js";import"./FormGroup-B2wxUdmP.js";import"./FormControlLabel-DzI7o2_A.js";import"./countries-DSLisFCy.js";import"./InputAdornment-DO0FXlwx.js";import"./Autocomplete-B8SRK5t2.js";import"./Chip-B7AXZfmm.js";import"./country-select-D81VscAm.js";import"./Checkbox-bK399IpG.js";import"./DatePicker-BHh4WHnP.js";import"./ListItem-BlYb29G3.js";import"./MobileDateTimePicker-B4xWrI2C.js";import"./index-BWYPRE2-.js";import"./Pagination-D29EBhVt.js";import"./LastPage-DhTfx2BG.js";import"./use-light-box-BZcvulXe.js";import"./use-carousel-xlYc6H8p.js";import"./carousel-arrow-buttons-DcKuAAuG.js";import"./markdown-DjCSCb7g.js";import"./KeyboardArrowRight-CIlbmAZJ.js";const B=[{title:"100% original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 days replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function E({product:i,error:a,loading:o}){const s=u(),r=y("description");return o?e.jsx(m,{sx:{mt:5,mb:10},children:e.jsx(C,{})}):a?e.jsx(m,{sx:{mt:5,mb:10},children:e.jsx(k,{filled:!0,title:"Product not found!",action:e.jsx(h,{component:d,href:l.product.root,startIcon:e.jsx(p,{width:16,icon:"eva:arrow-ios-back-fill"}),sx:{mt:3},children:"Back to list"}),sx:{py:10}})}):e.jsxs(m,{sx:{mt:5,mb:10},children:[e.jsx(R,{totalItems:s.totalItems}),e.jsx(P,{links:[{name:"Home",href:"/"},{name:"Shop",href:l.product.root},{name:i==null?void 0:i.name}],sx:{mb:5}}),e.jsxs(n,{container:!0,spacing:{xs:3,md:5,lg:8},children:[e.jsx(n,{xs:12,md:6,lg:7,children:e.jsx(D,{images:i==null?void 0:i.images})}),e.jsx(n,{xs:12,md:6,lg:5,children:i&&e.jsx(I,{product:i,items:s.items,onAddCart:s.onAddToCart,onGotoStep:s.onGotoStep,disableActions:!(i!=null&&i.available)})})]}),e.jsx(x,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:B.map(t=>e.jsxs(x,{sx:{textAlign:"center",px:5},children:[e.jsx(p,{icon:t.icon,width:32,sx:{color:"primary.main"}}),e.jsx(c,{variant:"subtitle1",sx:{mb:1,mt:2},children:t.title}),e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},children:t.description})]},t.title))}),e.jsxs(f,{children:[e.jsx(A,{value:r.value,onChange:r.onChange,sx:{px:3,boxShadow:t=>`inset 0 -2px 0 0 ${j(t.vars.palette.grey["500Channel"],.08)}`},children:[{value:"description",label:"Description"},{value:"reviews",label:`Reviews (${i==null?void 0:i.reviews.length})`}].map(t=>e.jsx(G,{value:t.value,label:t.label},t.value))}),r.value==="description"&&e.jsx(S,{description:i==null?void 0:i.description}),r.value==="reviews"&&e.jsx(T,{ratings:i==null?void 0:i.ratings,reviews:i==null?void 0:i.reviews,totalRatings:i==null?void 0:i.totalRatings,totalReviews:i==null?void 0:i.totalReviews})]})]})}const H={title:`Product details - ${v.site.name}`};function zi(){const{id:i=""}=b(),{product:a,productLoading:o,productError:s}=w(i);return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsxs("title",{children:[" ",H.title]})}),e.jsx(E,{product:a,loading:o,error:s})]})}export{zi as default};