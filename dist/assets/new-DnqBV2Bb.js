import{j as r,dQ as e,p as m,dU as d,H as n,C as u,dp as p,dm as s}from"./index-CC8ZOXtA.js";import{u as a,E as c}from"./error-block-ClcTD9po.js";import{a as x}from"./product-review-new-form-Ce2m3TW1.js";import"./index-DcKZLDCF.js";import"./image-BlOEV0mO.js";import"./color-preview-ChtI-xXW.js";import{C as g}from"./custom-breadcrumbs-Bl5OnNTu.js";import"./form-provider-DAJmH35K.js";import"./editor-CaGL4rG0.js";import"./incrementer-button-C2nyBf6u.js";import"./carousel-progress-bar-BmV-4c0D.js";import"./html-to-markdown-DRRWa3Ga.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-DdAIUrKi.js";import"./confirm-dialog-MYD50ozi.js";import"./DialogContent-CB7Unwzu.js";import"./DialogTitle-CUFjdCkA.js";import"./product-Item-button-CQMZiYwj.js";import"./upload-avatar-DBJlPSVT.js";import"./format-number-pdBITjLa.js";import"./FormHelperText-Bsh-3BCg.js";import"./formControlState-Dq1zat_P.js";import"./index-B2RZm-di.js";import"./LoadingButton-DsnjjvCJ.js";import"./CircularProgress-DBXL2oaw.js";import"./AccordionSummary-BtELHS-g.js";import"./FormControlLabel-DSmn4eUx.js";import"./TextField-C3GBty_k.js";import"./FormControl-CAeI9VZ6.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-C4WXc4Lp.js";import"./FormLabel-Co2KdlDF.js";import"./Select-aQYZH3TH.js";import"./Menu-eKJMgiWE.js";import"./InputBase-Lx9oX8L4.js";import"./Rating-CFU91EQa.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-Loskhemd.js";import"./RadioGroup-Dewy7eJk.js";import"./FormGroup-BEHuPMNZ.js";import"./utils-Be64QJhR.js";import"./countries-DSLisFCy.js";import"./InputAdornment-CZqtpVU7.js";import"./Autocomplete-UYjoJm2K.js";import"./Chip-Bqn7aPqU.js";import"./country-select-BHdsHhaW.js";import"./Checkbox-Dv9DB-8I.js";import"./DatePicker-DL9s210N.js";import"./ListItem-DjRfQpUp.js";import"./MobileDateTimePicker-UNDcqYl2.js";import"./Tabs-D2MBqKqb.js";import"./KeyboardArrowRight-C_h4tT89.js";import"./index-l4VxMZSv.js";function h({productsImages:t,categories:o}){return r.jsxs(e,{children:[r.jsx(g,{links:[{name:"Dashboard",href:m.dashboard.root},{name:"Product",href:m.dashboard.product.root},{name:"New product"}],sx:{mb:{xs:3,md:5}}}),r.jsx(x,{productsImages:t,categories:o})]})}const l={title:`Create a new product | Dashboard - ${u.site.name}`};function jr(){const t=a({queryKey:["products-images"],queryFn:async()=>{const{data:i}=await p.get(s.products.productsImages);return i}}),o=a({queryKey:["product-categories"],queryFn:async()=>{const{data:i}=await p.get(s.productCategories.list);return i}});return o.isLoading||t.isLoading?r.jsx(d,{}):t.isError||o.isError?r.jsx(c,{route:m.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",l.title]})}),r.jsx(h,{productsImages:t.data,categories:o.data})]})}export{jr as default};
