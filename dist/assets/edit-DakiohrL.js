import{j as r,dP as d,p as n,dT as u,H as c,C as g,dp as a,dm as e}from"./index-lHvWnAth.js";import{u as p,E as x}from"./error-block-OAPsBAe2.js";import{u as h}from"./use-params-Fca2mg6W.js";import{C as l}from"./custom-breadcrumbs-BZZEULS_.js";import{a as y}from"./product-review-new-form-cZYcoWqw.js";import"./index-DbEcbSIX.js";import"./image-BozkrAD_.js";import"./color-preview-C_4ryZz7.js";import"./form-provider-DRD8Ki5j.js";import"./editor-Bp78_v61.js";import"./incrementer-button-Bbm7Wm7a.js";import"./carousel-progress-bar-BX5TnYVI.js";import"./html-to-markdown-Dk0s_dlO.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-oW6f2Gjt.js";import"./confirm-dialog-EJ70J6mA.js";import"./DialogContent-DXUy4-2-.js";import"./DialogTitle-YvzNcI8a.js";import"./product-Item-button-zCoBzoFh.js";import"./upload-avatar-CZeNxzze.js";import"./format-number-Delp4FjS.js";import"./FormHelperText-DONqTFzb.js";import"./formControlState-Dq1zat_P.js";import"./index-AWllKlEy.js";import"./LoadingButton-B-I6ANxj.js";import"./CircularProgress-J2VZCr5j.js";import"./AccordionSummary-Cv16AT3s.js";import"./FormControlLabel-Dc9z1FNT.js";import"./TextField-CUU7bZOd.js";import"./FormControl-C_sOeRyz.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BLQz42dI.js";import"./FormLabel-DSca8E5L.js";import"./Select-DMu-II0M.js";import"./Menu-BXdfh1mm.js";import"./InputBase-B1y_nGV8.js";import"./Rating-BIxneqw0.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-iwv3PeIf.js";import"./RadioGroup-BX-9G9fN.js";import"./FormGroup-DnQZWtk_.js";import"./utils-CMvDb-z4.js";import"./countries-DSLisFCy.js";import"./InputAdornment-3ABsbC7V.js";import"./Autocomplete-Bscg8jlq.js";import"./Chip-wxKJI6YL.js";import"./country-select-Bqkae59B.js";import"./Checkbox-BkjqBFv4.js";import"./DatePicker-_phjiQsK.js";import"./ListItem-L0CrgSc-.js";import"./MobileDateTimePicker-ByNtdou9.js";import"./Tabs-rJfiarcA.js";import"./KeyboardArrowRight-2u6318G5.js";import"./index-Dh4ObOjY.js";function f({product:t,productsImages:o,categories:i}){return r.jsxs(d,{children:[r.jsx(l,{heading:"Edit",links:[{name:"Dashboard",href:n.dashboard.root},{name:"Product",href:n.dashboard.product.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),r.jsx(y,{currentProduct:t,productsImages:o,categories:i})]})}const j={title:`Product edit | Dashboard - ${g.site.name}`};function Pr(){const{id:t=""}=h(),o=p({queryKey:["products-images"],queryFn:async()=>{const{data:s}=await a.get(e.products.productsImages);return s}}),i=p({queryKey:["products",t],queryFn:async()=>(await a.get(e.products.details+t)).data}),m=p({queryKey:["product-categories"],queryFn:async()=>{const{data:s}=await a.get(e.productCategories.list);return s}});return i.isLoading||o.isLoading||m.isLoading?r.jsx(u,{}):i.isError||o.isError||m.isError?r.jsx(x,{route:n.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(c,{children:r.jsxs("title",{children:[" ",j.title]})}),r.jsx(f,{product:i.data,productsImages:o.data,categories:m.data})]})}export{Pr as default};