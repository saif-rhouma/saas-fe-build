import{j as r,dP as d,p as n,dT as u,H as c,C as g,dp as a,dm as e}from"./index-CeoumMXa.js";import{u as p,E as x}from"./error-block-BOKHva85.js";import{u as h}from"./use-params-CXCu2-xj.js";import{C as l}from"./custom-breadcrumbs-ngxVXzzx.js";import{a as y}from"./product-review-new-form-KcxaH00x.js";import"./index-DkjmWicx.js";import"./image-gD0MRFhe.js";import"./color-preview-DNPAbAwZ.js";import"./form-provider-DKdlN7sO.js";import"./editor-CGBM6KiM.js";import"./incrementer-button-A6OiDBlw.js";import"./carousel-progress-bar-nhDx4kKg.js";import"./html-to-markdown-CVK-3bXO.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-4je3POSu.js";import"./confirm-dialog-BDK8QBMr.js";import"./DialogContent-lL6v-LR1.js";import"./DialogTitle-DLappBwE.js";import"./product-Item-button-Cjqcx02-.js";import"./upload-avatar-DgzKyEAI.js";import"./format-number-CfOaiGtc.js";import"./FormHelperText-NhuMVC6U.js";import"./formControlState-Dq1zat_P.js";import"./index-DetNUK_X.js";import"./LoadingButton-CaE9NhiX.js";import"./CircularProgress-jqseK15W.js";import"./AccordionSummary-Dd5KQlgE.js";import"./FormControlLabel-D1f6UQW5.js";import"./TextField-z3Q2rwEm.js";import"./FormControl-BFUuTpvQ.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BN-i6Vxq.js";import"./FormLabel-D-qsWjCe.js";import"./Select-DbrC784k.js";import"./Menu-CT9abzpD.js";import"./InputBase-BzFRFGp-.js";import"./Rating-BkeEaraV.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-D_-Y0-29.js";import"./RadioGroup-CqUEke42.js";import"./FormGroup-BxLT3eby.js";import"./utils-V23ossyP.js";import"./countries-DSLisFCy.js";import"./InputAdornment-C38_n1P8.js";import"./Autocomplete-DtovygcX.js";import"./Chip-CvED2Eee.js";import"./country-select-wu1LAMSz.js";import"./Checkbox-CkO8iVtf.js";import"./DatePicker-UmXUWr0U.js";import"./ListItem-B8kaKgTM.js";import"./MobileDateTimePicker-bh-hYpGs.js";import"./Tabs-JWaOApeP.js";import"./KeyboardArrowRight-PHQ94moU.js";import"./index-y5LOUhki.js";function f({product:t,productsImages:o,categories:i}){return r.jsxs(d,{children:[r.jsx(l,{heading:"Edit",links:[{name:"Dashboard",href:n.dashboard.root},{name:"Product",href:n.dashboard.product.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),r.jsx(y,{currentProduct:t,productsImages:o,categories:i})]})}const j={title:`Product edit | Dashboard - ${g.site.name}`};function Pr(){const{id:t=""}=h(),o=p({queryKey:["products-images"],queryFn:async()=>{const{data:s}=await a.get(e.products.productsImages);return s}}),i=p({queryKey:["products",t],queryFn:async()=>(await a.get(e.products.details+t)).data}),m=p({queryKey:["product-categories"],queryFn:async()=>{const{data:s}=await a.get(e.productCategories.list);return s}});return i.isLoading||o.isLoading||m.isLoading?r.jsx(u,{}):i.isError||o.isError||m.isError?r.jsx(x,{route:n.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(c,{children:r.jsxs("title",{children:[" ",j.title]})}),r.jsx(f,{product:i.data,productsImages:o.data,categories:m.data})]})}export{Pr as default};