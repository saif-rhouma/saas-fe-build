import{j as r,dP as e,p as m,dT as d,H as n,C as u,dp as p,dm as s}from"./index-CsblB989.js";import{u as a,E as c}from"./error-block-D1JbtCwV.js";import{a as x}from"./product-review-new-form-DvRMjvSu.js";import"./index-BBe9Z881.js";import"./image-BZWDGRmV.js";import"./color-preview-DTV6Sf-K.js";import{C as g}from"./custom-breadcrumbs-DQYYRO8w.js";import"./form-provider-Du6VuMoa.js";import"./editor-CL68ZPGs.js";import"./incrementer-button-BbFbxcBt.js";import"./carousel-progress-bar-C6SAVv0i.js";import"./html-to-markdown-BM8JggLH.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-BnUM9G4D.js";import"./confirm-dialog-q1u9FQpX.js";import"./DialogContent-D71n8k4T.js";import"./DialogTitle-Dw9T0OTq.js";import"./product-Item-button-4_fD-W8l.js";import"./upload-avatar-cbQBKvLv.js";import"./format-number-D9HQPhfy.js";import"./FormHelperText-tmkQoI7S.js";import"./formControlState-Dq1zat_P.js";import"./index-BMmrxPl5.js";import"./LoadingButton-BxfNjoGU.js";import"./CircularProgress-BP7w1Bmy.js";import"./AccordionSummary-By9I1vBr.js";import"./FormControlLabel-SPUXYPf-.js";import"./TextField-C0rr15oK.js";import"./FormControl-N3NVqOJu.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DrDrx2-z.js";import"./FormLabel-B95ccZTf.js";import"./Select-LbLUteKL.js";import"./Menu-B2ldK29l.js";import"./InputBase-CnDGZDGH.js";import"./Rating-CZ82oMVe.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-DPAupNwA.js";import"./RadioGroup-CP1oF_P6.js";import"./FormGroup-DPnbPOcj.js";import"./utils-DOJdEOh4.js";import"./countries-DSLisFCy.js";import"./InputAdornment-B27KTbFt.js";import"./Autocomplete-BdC29jcZ.js";import"./Chip-_qt5A1XL.js";import"./country-select-BsoE5ktB.js";import"./Checkbox-BYMqAuwK.js";import"./DatePicker-CDV3q_Jx.js";import"./ListItem-HYEjvoe-.js";import"./MobileDateTimePicker-BbGrDX_d.js";import"./Tabs-Dkt6334O.js";import"./KeyboardArrowRight-C60ssb8G.js";import"./index-BVsEWNMT.js";function h({productsImages:t,categories:o}){return r.jsxs(e,{children:[r.jsx(g,{links:[{name:"Dashboard",href:m.dashboard.root},{name:"Product",href:m.dashboard.product.root},{name:"New product"}],sx:{mb:{xs:3,md:5}}}),r.jsx(x,{productsImages:t,categories:o})]})}const l={title:`Create a new product | Dashboard - ${u.site.name}`};function jr(){const t=a({queryKey:["products-images"],queryFn:async()=>{const{data:i}=await p.get(s.products.productsImages);return i}}),o=a({queryKey:["product-categories"],queryFn:async()=>{const{data:i}=await p.get(s.productCategories.list);return i}});return o.isLoading||t.isLoading?r.jsx(d,{}):t.isError||o.isError?r.jsx(c,{route:m.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",l.title]})}),r.jsx(h,{productsImages:t.data,categories:o.data})]})}export{jr as default};
