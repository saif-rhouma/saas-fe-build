import{j as r,dP as d,p as n,dT as u,H as c,C as g,dp as a,dm as e}from"./index-CRVB8F69.js";import{u as p,E as x}from"./error-block-0lRJvl3b.js";import{u as h}from"./use-params-OStJ7Vq1.js";import{C as l}from"./custom-breadcrumbs-CBgeVjCX.js";import{a as y}from"./product-review-new-form-QZO0jX6r.js";import"./index-BWeXp-kh.js";import"./image-5vyLym5h.js";import"./color-preview-B9jl1qfd.js";import"./form-provider-Cj5HnMmb.js";import"./editor-B6TerEHZ.js";import"./incrementer-button-cdRhxOCZ.js";import"./carousel-progress-bar-CBX906lf.js";import"./html-to-markdown-DBaEOAZs.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-Dv2OayGI.js";import"./confirm-dialog-B4R_qd6R.js";import"./DialogContent-DTWdpBHx.js";import"./DialogTitle-zVJogJSi.js";import"./product-Item-button-DLLiD92v.js";import"./upload-avatar-DVEASGMD.js";import"./format-number-BlEHznSm.js";import"./FormHelperText-BjyTaFTe.js";import"./formControlState-Dq1zat_P.js";import"./index-xSFMErMk.js";import"./LoadingButton-D-TxUmLb.js";import"./CircularProgress-DEMC3_90.js";import"./AccordionSummary-NLXXwZgg.js";import"./FormControlLabel-cTtCu-eQ.js";import"./TextField-a9VrXvMJ.js";import"./FormControl-CFmGE2-k.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CixZ_02K.js";import"./FormLabel-OtvxlZPN.js";import"./Select-BWwgXsU9.js";import"./Menu-BM961z0Q.js";import"./InputBase-DWgInsnL.js";import"./Rating-7neiHll4.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-qJX29ETW.js";import"./RadioGroup-BfSQqxxW.js";import"./FormGroup-BTOkiH5K.js";import"./utils-CXZGrLpc.js";import"./countries-DSLisFCy.js";import"./InputAdornment-6EHLKwyL.js";import"./Autocomplete-CXoresUK.js";import"./Chip-C0F9v8Yk.js";import"./country-select-BGXXJ_eo.js";import"./Checkbox-ge_l6EJ8.js";import"./DatePicker-CB0DQzBJ.js";import"./ListItem-Dj4qJ_SH.js";import"./MobileDateTimePicker-BqsYy-6i.js";import"./Tabs-C9gxXNdG.js";import"./KeyboardArrowRight-Bdp-RYnm.js";import"./index-DsQx8PFb.js";function f({product:t,productsImages:o,categories:i}){return r.jsxs(d,{children:[r.jsx(l,{heading:"Edit",links:[{name:"Dashboard",href:n.dashboard.root},{name:"Product",href:n.dashboard.product.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),r.jsx(y,{currentProduct:t,productsImages:o,categories:i})]})}const j={title:`Product edit | Dashboard - ${g.site.name}`};function Pr(){const{id:t=""}=h(),o=p({queryKey:["products-images"],queryFn:async()=>{const{data:s}=await a.get(e.products.productsImages);return s}}),i=p({queryKey:["products",t],queryFn:async()=>(await a.get(e.products.details+t)).data}),m=p({queryKey:["product-categories"],queryFn:async()=>{const{data:s}=await a.get(e.productCategories.list);return s}});return i.isLoading||o.isLoading||m.isLoading?r.jsx(u,{}):i.isError||o.isError||m.isError?r.jsx(x,{route:n.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(c,{children:r.jsxs("title",{children:[" ",j.title]})}),r.jsx(f,{product:i.data,productsImages:o.data,categories:m.data})]})}export{Pr as default};