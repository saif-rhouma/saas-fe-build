import{bG as C,j as i,S as k,e as u,R as x,I as t,B as v,dw as f,y as g,dz as P,bI as y,bJ as I,r as p,eb as j,p as c,eC as D,G as b,T as w,aF as L,i as R,v as T,k as E,H as S,C as B}from"./index-Bm3rBIkL.js";import{u as G}from"./use-params-D5wlM2Nh.js";import{b as O,c as M}from"./product-skeleton-BAMwfSar.js";import"./product-review-new-form-CHH-nlTz.js";import"./image-BvWqJKQA.js";import"./color-preview-CohxypnI.js";import{u as $}from"./use-tabs-CZpiSQ19.js";import{E as A}from"./empty-content-Bj3fPw3b.js";import{P as F,a as H,b as U,c as z}from"./product-details-description-CZOnuLjs.js";import{L as N}from"./LoadingButton-qKaJGA43.js";import"./form-provider-BVzxbRNt.js";import"./editor-B_eq4lpY.js";import"./incrementer-button-alnZ2NIc.js";import"./carousel-progress-bar-BtYfMUsZ.js";import"./html-to-markdown-B4HHgAIa.js";import"./index-QBzjHR1Z.js";import"./Skeleton-DiC8pgLW.js";import"./useMutation-BPy7H-1h.js";import"./utils-km2FGkQ4.js";import"./product-Item-button-DSQD9DFB.js";import"./upload-avatar-CklA5cX-.js";import"./format-number-zZ3CkgDh.js";import"./FormHelperText-D4MtsGiu.js";import"./formControlState-Dq1zat_P.js";import"./index-I76JgJ8L.js";import"./DialogContent-adXfkuCx.js";import"./DialogTitle-3zwXmVtf.js";import"./AccordionSummary-DAGBVshR.js";import"./Rating-DDX-0-qU.js";import"./visuallyHidden-Dan1xhjv.js";import"./Pagination-D8BQQy0r.js";import"./LastPage-Bo5KhWUM.js";import"./use-light-box-bweLBRox.js";import"./use-carousel-Dv8BD2bv.js";import"./carousel-arrow-buttons-QhLDyRHQ.js";import"./markdown-BqnGV2rP.js";import"./index-DJLOkwgj.js";import"./CircularProgress-msI0ykgU.js";import"./TextField-Zaq0_UQI.js";import"./FormControl-Dpp_E6i1.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-XKr5fbZR.js";import"./FormLabel-CW4sUJth.js";import"./Select-BbFY65UU.js";import"./Menu-BCmDYN65.js";import"./InputBase-CLwZiNSB.js";import"./Slider-DEF2K-nH.js";import"./RadioGroup-CcFDuSjI.js";import"./FormGroup-C2nO5a7k.js";import"./FormControlLabel-3udn0dpo.js";import"./countries-DSLisFCy.js";import"./InputAdornment-C5fdA_pt.js";import"./Autocomplete-uJqWLfO9.js";import"./Chip-wb6jkBj9.js";import"./country-select-dI5VfxcM.js";import"./Checkbox-DZc8qiZw.js";import"./DatePicker-BFbM1AIt.js";import"./ListItem-B8LRzQux.js";import"./MobileDateTimePicker-BrtExEWs.js";function Y({publish:e,backLink:r,editLink:n,liveLink:a,publishOptions:d,onChangePublish:m,sx:h,...s}){const l=C();return i.jsxs(i.Fragment,{children:[i.jsxs(k,{spacing:1.5,direction:"row",sx:{mb:{xs:3,md:5},...h},...s,children:[i.jsx(u,{component:x,href:r,startIcon:i.jsx(t,{icon:"eva:arrow-ios-back-fill",width:16}),children:"Back"}),i.jsx(v,{sx:{flexGrow:1}}),e==="published"&&i.jsx(f,{title:"Go Live",children:i.jsx(g,{component:x,href:a,children:i.jsx(t,{icon:"eva:external-link-fill"})})}),i.jsx(f,{title:"Edit",children:i.jsx(g,{component:x,href:n,children:i.jsx(t,{icon:"solar:pen-bold"})})}),i.jsx(N,{color:"inherit",variant:"contained",loading:!e,loadingIndicator:"Loading…",endIcon:i.jsx(t,{icon:"eva:arrow-ios-downward-fill"}),onClick:l.onOpen,sx:{textTransform:"capitalize"},children:e})]}),i.jsx(P,{open:l.open,anchorEl:l.anchorEl,onClose:l.onClose,slotProps:{arrow:{placement:"top-right"}},children:i.jsx(y,{children:d.map(o=>i.jsxs(I,{selected:o.value===e,onClick:()=>{l.onClose(),m(o.value)},children:[o.value==="published"&&i.jsx(t,{icon:"eva:cloud-upload-fill"}),o.value==="draft"&&i.jsx(t,{icon:"solar:file-text-bold"}),o.label]},o.value))})})]})}const _=[{title:"100% original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 days replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function J({product:e,error:r,loading:n}){const a=$("description"),[d,m]=p.useState("");p.useEffect(()=>{e&&m(e==null?void 0:e.publish)},[e]);const h=p.useCallback(s=>{m(s)},[]);return n?i.jsx(j,{sx:{pt:5},children:i.jsx(O,{})}):r?i.jsx(j,{sx:{pt:5},children:i.jsx(A,{filled:!0,title:"Product not found!",action:i.jsx(u,{component:x,href:c.dashboard.product.root,startIcon:i.jsx(t,{width:16,icon:"eva:arrow-ios-back-fill"}),sx:{mt:3},children:"Back to list"}),sx:{py:10,height:"auto",flexGrow:"unset"}})}):i.jsxs(j,{children:[i.jsx(Y,{backLink:c.dashboard.product.root,editLink:c.dashboard.product.edit(`${e==null?void 0:e.id}`),liveLink:c.product.details(`${e==null?void 0:e.id}`),publish:d,onChangePublish:h,publishOptions:D}),i.jsxs(b,{container:!0,spacing:{xs:3,md:5,lg:8},children:[i.jsx(b,{xs:12,md:6,lg:7,children:i.jsx(F,{images:(e==null?void 0:e.images)??[]})}),i.jsx(b,{xs:12,md:6,lg:5,children:e&&i.jsx(H,{disableActions:!0,product:e})})]}),i.jsx(v,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:_.map(s=>i.jsxs(v,{sx:{textAlign:"center",px:5},children:[i.jsx(t,{icon:s.icon,width:32,sx:{color:"primary.main"}}),i.jsx(w,{variant:"subtitle1",sx:{mb:1,mt:2},children:s.title}),i.jsx(w,{variant:"body2",sx:{color:"text.secondary"},children:s.description})]},s.title))}),i.jsxs(L,{children:[i.jsx(R,{value:a.value,onChange:a.onChange,sx:{px:3,boxShadow:s=>`inset 0 -2px 0 0 ${T(s.vars.palette.grey["500Channel"],.08)}`},children:[{value:"description",label:"Description"},{value:"reviews",label:`Reviews (${e==null?void 0:e.reviews.length})`}].map(s=>i.jsx(E,{value:s.value,label:s.label},s.value))}),a.value==="description"&&i.jsx(U,{description:(e==null?void 0:e.description)??""}),a.value==="reviews"&&i.jsx(z,{ratings:(e==null?void 0:e.ratings)??[],reviews:(e==null?void 0:e.reviews)??[],totalRatings:(e==null?void 0:e.totalRatings)??0,totalReviews:(e==null?void 0:e.totalReviews)??0})]})]})}const V={title:`Product details | Dashboard - ${B.site.name}`};function Zi(){const{id:e=""}=G(),{product:r,productLoading:n,productError:a}=M(e);return i.jsxs(i.Fragment,{children:[i.jsx(S,{children:i.jsxs("title",{children:[" ",V.title]})}),i.jsx(J,{product:r,loading:n,error:a})]})}export{Zi as default};