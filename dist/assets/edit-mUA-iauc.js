import{j as r,dP as d,p as n,dT as u,H as c,C as g,dp as a,dm as e}from"./index-DJBSy2EF.js";import{u as p,E as x}from"./error-block-CvrkSCmw.js";import{u as h}from"./use-params-CFpGffir.js";import{C as l}from"./custom-breadcrumbs-wu6pKqCp.js";import{a as y}from"./product-review-new-form-St7WJ0h3.js";import"./index-Dr2-hOAp.js";import"./image-CcUpnek_.js";import"./color-preview-CnNfoDFC.js";import"./form-provider-B6rN6rcW.js";import"./editor-jz5psZbY.js";import"./incrementer-button-DwWJx-2R.js";import"./carousel-progress-bar-CUDdNUGo.js";import"./html-to-markdown-Dq7VSe9L.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-CufYe6We.js";import"./confirm-dialog-CJ1MpGCr.js";import"./DialogContent-CludgxUR.js";import"./DialogTitle-BZmEf6-n.js";import"./product-Item-button-D_FT_xco.js";import"./upload-avatar-mAHTNZo7.js";import"./format-number-BkN-sNtV.js";import"./FormHelperText-4VkrdFxf.js";import"./formControlState-Dq1zat_P.js";import"./index-cfJrRA7m.js";import"./LoadingButton-CA0ERkDn.js";import"./CircularProgress-qkH5YYbv.js";import"./AccordionSummary-CTh4cWeN.js";import"./FormControlLabel-C5zXWVOI.js";import"./TextField-B9QH0qQV.js";import"./FormControl-Bvq6kqrZ.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-D51FDdfU.js";import"./FormLabel-BcMrCB0K.js";import"./Select-CpdxAjVY.js";import"./Menu-DzF7Vu0n.js";import"./InputBase-DUpzIqxJ.js";import"./Rating-tHWMe1hJ.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-lMSifW85.js";import"./RadioGroup-BHqAuZXd.js";import"./FormGroup-A8YBApVE.js";import"./utils-CTRen34C.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BDZfHe4A.js";import"./Autocomplete-DrDbH-Lk.js";import"./Chip-Csu7Evuy.js";import"./country-select-G1_Mr0xL.js";import"./Checkbox-CJWY43L-.js";import"./DatePicker-B6YlWnqF.js";import"./ListItem-yWcPRO5-.js";import"./MobileDateTimePicker-B5GKNQ1T.js";import"./Tabs-BCERpoja.js";import"./KeyboardArrowRight-J3egVbAl.js";import"./index-C7-PDvr0.js";function f({product:t,productsImages:o,categories:i}){return r.jsxs(d,{children:[r.jsx(l,{heading:"Edit",links:[{name:"Dashboard",href:n.dashboard.root},{name:"Product",href:n.dashboard.product.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),r.jsx(y,{currentProduct:t,productsImages:o,categories:i})]})}const j={title:`Product edit | Dashboard - ${g.site.name}`};function Pr(){const{id:t=""}=h(),o=p({queryKey:["products-images"],queryFn:async()=>{const{data:s}=await a.get(e.products.productsImages);return s}}),i=p({queryKey:["products",t],queryFn:async()=>(await a.get(e.products.details+t)).data}),m=p({queryKey:["product-categories"],queryFn:async()=>{const{data:s}=await a.get(e.productCategories.list);return s}});return i.isLoading||o.isLoading||m.isLoading?r.jsx(u,{}):i.isError||o.isError||m.isError?r.jsx(x,{route:n.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(c,{children:r.jsxs("title",{children:[" ",j.title]})}),r.jsx(f,{product:i.data,productsImages:o.data,categories:m.data})]})}export{Pr as default};