import{j as r,ed as m,p as o,eh as p,H as s,C as e,dO as a,dM as d}from"./index-C2cM-DBs.js";import{u as n,E as u}from"./error-block-Beq63EG2.js";import{a as c}from"./product-review-new-form-D7spcFKe.js";import"./index-BrcFUo_I.js";import"./image-CAg2ZcR_.js";import"./color-preview-DapQdGOI.js";import{C as x}from"./custom-breadcrumbs--nSnnPdf.js";import"./form-provider-CLORH2Dm.js";import"./editor-BI5ptJ30.js";import"./incrementer-button-RKg9dRYH.js";import"./carousel-progress-bar-CPY0YlVz.js";import"./html-to-markdown-DrwOCs8Y.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-COmH0tpK.js";import"./fields-BDiywkX5.js";import"./FormHelperText-CRGkNn8K.js";import"./formControlState-Dq1zat_P.js";import"./Rating-CBpe5Nat.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-vNG1DJM-.js";import"./TextField-CfPa8tf7.js";import"./FormControl-CiDtqBG4.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DLkxXyQ2.js";import"./FormLabel-DnduTJzv.js";import"./Select-BbsMkxhi.js";import"./Menu-IfQzjKGx.js";import"./InputBase-BLNKgjL-.js";import"./RadioGroup-COXiBNW9.js";import"./FormGroup-pWlzYSFu.js";import"./FormControlLabel-CjAWsVO-.js";import"./Autocomplete-Dls-OWLW.js";import"./Chip-C1uF1Tma.js";import"./country-select-D13_g16H.js";import"./countries-DSLisFCy.js";import"./InputAdornment-nAtlisNJ.js";import"./Checkbox-k7mydEE9.js";import"./upload-avatar-OInrLzQK.js";import"./format-number-B33p9vL5.js";import"./index-DqEqkcv6.js";import"./DatePicker-DDCPQeC5.js";import"./DialogContent-BpSW4FhH.js";import"./ListItem-BfmlJSaG.js";import"./MobileDateTimePicker--hVS8Apv.js";import"./product-Item-button-A0nnunmQ.js";import"./DialogTitle-DddmK_y9.js";import"./LoadingButton-C7S0WlDO.js";import"./CircularProgress-CfhTfJpo.js";import"./AccordionSummary-CimJu0cG.js";import"./index-9mfm1ewC.js";function h({productsImages:t}){return r.jsxs(m,{children:[r.jsx(x,{links:[{name:"Dashboard",href:o.dashboard.root},{name:"Product",href:o.dashboard.product.root},{name:"New product"}],sx:{mb:{xs:3,md:5}}}),r.jsx(c,{productsImages:t})]})}const f={title:`Create a new product | Dashboard - ${e.site.name}`};function hr(){const t=n({queryKey:["products-images"],queryFn:async()=>{const{data:i}=await a.get(d.products.productsImages);return i}});return t.isPending||t.isLoading?r.jsx(p,{}):t.isError?r.jsx(u,{route:o.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(s,{children:r.jsxs("title",{children:[" ",f.title]})}),r.jsx(h,{productsImages:t.data})]})}export{hr as default};
