import{j as r,dP as e,p as m,dT as d,H as n,C as u,dp as p,dm as s}from"./index-bfXnrd_B.js";import{u as a,E as c}from"./error-block-l-vwuuSv.js";import{a as x}from"./product-review-new-form-CoZjbCOD.js";import"./index-Dlu4XMzS.js";import"./image-MPJgE1is.js";import"./color-preview-KG6vbIKq.js";import{C as g}from"./custom-breadcrumbs-DCz3ADG5.js";import"./form-provider-nTgntoFY.js";import"./editor-CsabuRV8.js";import"./incrementer-button-9XYYw-sB.js";import"./carousel-progress-bar-Dcr36oEG.js";import"./html-to-markdown-DYEYt2Cx.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-BPIbqlZf.js";import"./confirm-dialog-PkmEc3uL.js";import"./DialogContent-Cw_V6ejY.js";import"./DialogTitle-BZGU_tSa.js";import"./product-Item-button-BevZuSWa.js";import"./upload-avatar-DE_scHHR.js";import"./format-number-DOsPFhv2.js";import"./FormHelperText-SXsIGm93.js";import"./formControlState-Dq1zat_P.js";import"./index-I9jVg8IY.js";import"./LoadingButton-CFXRI1VR.js";import"./CircularProgress-DcTVjB1u.js";import"./AccordionSummary-DkL5QznU.js";import"./FormControlLabel-CK-ErBpG.js";import"./TextField-BKEfnHMn.js";import"./FormControl-DJjFvo5t.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DSm16ipj.js";import"./FormLabel-mw6hRqxv.js";import"./Select-ENvlCEnV.js";import"./Menu-B0mZFzHv.js";import"./InputBase-CbzKRH4y.js";import"./Rating-DSDijT6x.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-CM3DVFxn.js";import"./RadioGroup-D7AmZXs4.js";import"./FormGroup-jxee7TJf.js";import"./utils-b8vptws0.js";import"./countries-DSLisFCy.js";import"./InputAdornment-XyO72vbx.js";import"./Autocomplete-B6hzfXfq.js";import"./Chip-BzH34JAD.js";import"./country-select-BNRwtX3c.js";import"./Checkbox-Dz0lv2WL.js";import"./DatePicker-B5wrAIaO.js";import"./ListItem-CmnuLqtj.js";import"./MobileDateTimePicker-CYShLaZM.js";import"./Tabs-YvV0dnqT.js";import"./KeyboardArrowRight-CfVThViv.js";import"./index-CdglF-NR.js";function h({productsImages:t,categories:o}){return r.jsxs(e,{children:[r.jsx(g,{links:[{name:"Dashboard",href:m.dashboard.root},{name:"Product",href:m.dashboard.product.root},{name:"New product"}],sx:{mb:{xs:3,md:5}}}),r.jsx(x,{productsImages:t,categories:o})]})}const l={title:`Create a new product | Dashboard - ${u.site.name}`};function jr(){const t=a({queryKey:["products-images"],queryFn:async()=>{const{data:i}=await p.get(s.products.productsImages);return i}}),o=a({queryKey:["product-categories"],queryFn:async()=>{const{data:i}=await p.get(s.productCategories.list);return i}});return o.isLoading||t.isLoading?r.jsx(d,{}):t.isError||o.isError?r.jsx(c,{route:m.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",l.title]})}),r.jsx(h,{productsImages:t.data,categories:o.data})]})}export{jr as default};
