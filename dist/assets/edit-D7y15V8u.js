import{j as r,dP as d,p as n,dT as u,H as c,C as g,dp as a,dm as e}from"./index-Bd-eTnUo.js";import{u as p,E as x}from"./error-block-BS5tpnF6.js";import{u as h}from"./use-params-mGjHkfG-.js";import{C as l}from"./custom-breadcrumbs-DTO7Kcnb.js";import{a as y}from"./product-review-new-form-B3vMZlvO.js";import"./index-BswHFX2k.js";import"./image-D6QpXtrM.js";import"./color-preview-_QTUQob8.js";import"./form-provider-DYd42b-C.js";import"./editor-BQLpkWNs.js";import"./incrementer-button-DSJd2HUt.js";import"./carousel-progress-bar-DrIELY_n.js";import"./html-to-markdown-DEEkFw5a.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-u5J1ehDK.js";import"./confirm-dialog-COvqX_r6.js";import"./DialogContent-CSJWAbbl.js";import"./DialogTitle-B8mZEMK5.js";import"./product-Item-button-DtWod1L2.js";import"./upload-avatar-plDx98Qr.js";import"./format-number-fb_gV84D.js";import"./FormHelperText-B5ubrhII.js";import"./formControlState-Dq1zat_P.js";import"./index-uXQ4a3gx.js";import"./LoadingButton-Bzsd-25i.js";import"./CircularProgress-DvJtfR95.js";import"./AccordionSummary-Dim5GmI8.js";import"./FormControlLabel-D7N_BUBn.js";import"./TextField-vLvEPjtq.js";import"./FormControl-foeg92WO.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-sjrS-T3g.js";import"./FormLabel-CGKWwmwk.js";import"./Select-CgDIp826.js";import"./Menu-DsAfc42u.js";import"./InputBase-Bi4j64cN.js";import"./Rating-DYSQoA2b.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-D3EoM31h.js";import"./RadioGroup-BY_W1tLV.js";import"./FormGroup-3pMN7gVE.js";import"./utils-C3kf0HpO.js";import"./countries-DSLisFCy.js";import"./InputAdornment-lZ34KsGy.js";import"./Autocomplete-BvvQg5zj.js";import"./Chip-Dr3NBI2P.js";import"./country-select-DHd-Zgtr.js";import"./Checkbox-k73MRx-8.js";import"./DatePicker-CkmrGU-z.js";import"./ListItem-CVBleuHu.js";import"./MobileDateTimePicker-Crw9Kej1.js";import"./Tabs-DoRb6H0h.js";import"./KeyboardArrowRight-Do0Z-cRD.js";import"./index-DForoPTP.js";function f({product:t,productsImages:o,categories:i}){return r.jsxs(d,{children:[r.jsx(l,{heading:"Edit",links:[{name:"Dashboard",href:n.dashboard.root},{name:"Product",href:n.dashboard.product.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),r.jsx(y,{currentProduct:t,productsImages:o,categories:i})]})}const j={title:`Product edit | Dashboard - ${g.site.name}`};function Pr(){const{id:t=""}=h(),o=p({queryKey:["products-images"],queryFn:async()=>{const{data:s}=await a.get(e.products.productsImages);return s}}),i=p({queryKey:["products",t],queryFn:async()=>(await a.get(e.products.details+t)).data}),m=p({queryKey:["product-categories"],queryFn:async()=>{const{data:s}=await a.get(e.productCategories.list);return s}});return i.isLoading||o.isLoading||m.isLoading?r.jsx(u,{}):i.isError||o.isError||m.isError?r.jsx(x,{route:n.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(c,{children:r.jsxs("title",{children:[" ",j.title]})}),r.jsx(f,{product:i.data,productsImages:o.data,categories:m.data})]})}export{Pr as default};
