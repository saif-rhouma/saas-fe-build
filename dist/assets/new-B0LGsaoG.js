import{j as r,e8 as m,p as o,ec as p,H as s,C as e,dJ as a,dH as n}from"./index-Cq03K-HC.js";import{u as d,E as u}from"./error-block-CBMWt84f.js";import{a as c}from"./product-review-new-form-Ybb9B2Cq.js";import"./index-DdrNXZdn.js";import"./image-DitvMElQ.js";import"./color-preview-DTfG0Jbo.js";import{C as x}from"./custom-breadcrumbs-C_F-6vOC.js";import"./form-provider-DGoPfYCb.js";import"./editor-D16lNrfB.js";import"./incrementer-button-D87DqIoS.js";import"./carousel-progress-bar-crUKuKHu.js";import"./html-to-markdown-CIU-Po6x.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-Dp0rVztm.js";import"./product-Item-button-9ZeFIKBl.js";import"./upload-avatar-CoRpPeQR.js";import"./format-number-DITXUPMN.js";import"./FormHelperText-BdgqWWO0.js";import"./formControlState-Dq1zat_P.js";import"./index-DqNxVOmH.js";import"./DialogContent-D0WbZEYR.js";import"./DialogTitle-CLKmH_im.js";import"./LoadingButton-3T23lww4.js";import"./CircularProgress-sp-m8OZh.js";import"./AccordionSummary-C_77DlY9.js";import"./TextField-BNZ3YpVQ.js";import"./FormControl-DUlfZx4z.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-D6SX5sCR.js";import"./FormLabel-Bx5V1G4l.js";import"./Select-BJK6Q71-.js";import"./Menu-B_EWYTTU.js";import"./InputBase-CPtucf_J.js";import"./Rating-C9YzUf05.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-ic8LVZXa.js";import"./RadioGroup-CqyyD7XC.js";import"./FormGroup-ByRTQQuh.js";import"./FormControlLabel-CS2mv3Te.js";import"./countries-DSLisFCy.js";import"./InputAdornment-B7jHbOut.js";import"./Autocomplete-CidbBtOC.js";import"./Chip-x2W7r02e.js";import"./country-select-D9zKFD0C.js";import"./Checkbox-B5P4NoLN.js";import"./DatePicker-C0kjDQAX.js";import"./ListItem-Dwol_2rN.js";import"./MobileDateTimePicker-DgPLkewz.js";import"./Tabs-Bg2egs3q.js";import"./KeyboardArrowRight-yBnSCV6-.js";import"./index-BOf1bnN2.js";function h({productsImages:t}){return r.jsxs(m,{children:[r.jsx(x,{links:[{name:"Dashboard",href:o.dashboard.root},{name:"Product",href:o.dashboard.product.root},{name:"New product"}],sx:{mb:{xs:3,md:5}}}),r.jsx(c,{productsImages:t})]})}const f={title:`Create a new product | Dashboard - ${e.site.name}`};function fr(){const t=d({queryKey:["products-images"],queryFn:async()=>{const{data:i}=await a.get(n.products.productsImages);return i}});return t.isPending||t.isLoading?r.jsx(p,{}):t.isError?r.jsx(u,{route:o.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(s,{children:r.jsxs("title",{children:[" ",f.title]})}),r.jsx(h,{productsImages:t.data})]})}export{fr as default};