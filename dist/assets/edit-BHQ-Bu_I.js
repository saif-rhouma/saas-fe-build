import{j as r,dP as d,p as n,dT as u,H as c,C as g,dp as a,dm as e}from"./index-CsblB989.js";import{u as p,E as x}from"./error-block-D1JbtCwV.js";import{u as h}from"./use-params-Jai1bAdL.js";import{C as l}from"./custom-breadcrumbs-DQYYRO8w.js";import{a as y}from"./product-review-new-form-DvRMjvSu.js";import"./index-BBe9Z881.js";import"./image-BZWDGRmV.js";import"./color-preview-DTV6Sf-K.js";import"./form-provider-Du6VuMoa.js";import"./editor-CL68ZPGs.js";import"./incrementer-button-BbFbxcBt.js";import"./carousel-progress-bar-C6SAVv0i.js";import"./html-to-markdown-BM8JggLH.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-BnUM9G4D.js";import"./confirm-dialog-q1u9FQpX.js";import"./DialogContent-D71n8k4T.js";import"./DialogTitle-Dw9T0OTq.js";import"./product-Item-button-4_fD-W8l.js";import"./upload-avatar-cbQBKvLv.js";import"./format-number-D9HQPhfy.js";import"./FormHelperText-tmkQoI7S.js";import"./formControlState-Dq1zat_P.js";import"./index-BMmrxPl5.js";import"./LoadingButton-BxfNjoGU.js";import"./CircularProgress-BP7w1Bmy.js";import"./AccordionSummary-By9I1vBr.js";import"./FormControlLabel-SPUXYPf-.js";import"./TextField-C0rr15oK.js";import"./FormControl-N3NVqOJu.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DrDrx2-z.js";import"./FormLabel-B95ccZTf.js";import"./Select-LbLUteKL.js";import"./Menu-B2ldK29l.js";import"./InputBase-CnDGZDGH.js";import"./Rating-CZ82oMVe.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-DPAupNwA.js";import"./RadioGroup-CP1oF_P6.js";import"./FormGroup-DPnbPOcj.js";import"./utils-DOJdEOh4.js";import"./countries-DSLisFCy.js";import"./InputAdornment-B27KTbFt.js";import"./Autocomplete-BdC29jcZ.js";import"./Chip-_qt5A1XL.js";import"./country-select-BsoE5ktB.js";import"./Checkbox-BYMqAuwK.js";import"./DatePicker-CDV3q_Jx.js";import"./ListItem-HYEjvoe-.js";import"./MobileDateTimePicker-BbGrDX_d.js";import"./Tabs-Dkt6334O.js";import"./KeyboardArrowRight-C60ssb8G.js";import"./index-BVsEWNMT.js";function f({product:t,productsImages:o,categories:i}){return r.jsxs(d,{children:[r.jsx(l,{heading:"Edit",links:[{name:"Dashboard",href:n.dashboard.root},{name:"Product",href:n.dashboard.product.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),r.jsx(y,{currentProduct:t,productsImages:o,categories:i})]})}const j={title:`Product edit | Dashboard - ${g.site.name}`};function Pr(){const{id:t=""}=h(),o=p({queryKey:["products-images"],queryFn:async()=>{const{data:s}=await a.get(e.products.productsImages);return s}}),i=p({queryKey:["products",t],queryFn:async()=>(await a.get(e.products.details+t)).data}),m=p({queryKey:["product-categories"],queryFn:async()=>{const{data:s}=await a.get(e.productCategories.list);return s}});return i.isLoading||o.isLoading||m.isLoading?r.jsx(u,{}):i.isError||o.isError||m.isError?r.jsx(x,{route:n.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(c,{children:r.jsxs("title",{children:[" ",j.title]})}),r.jsx(f,{product:i.data,productsImages:o.data,categories:m.data})]})}export{Pr as default};
