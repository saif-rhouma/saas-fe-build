import{j as r,dP as e,p as m,dT as d,H as n,C as u,dp as p,dm as s}from"./index-DNUduzdf.js";import{u as a,E as c}from"./error-block-CIoGA_ou.js";import{a as x}from"./product-review-new-form-CWpw9Ml9.js";import"./index-DVM0Zrf0.js";import"./image-RtGonsw-.js";import"./color-preview-DKOEm42-.js";import{C as g}from"./custom-breadcrumbs-xaxkOPaz.js";import"./form-provider-Bc4k30Da.js";import"./editor-BwKOUAEN.js";import"./incrementer-button-CM8gQ1kh.js";import"./carousel-progress-bar-fd0QkHew.js";import"./html-to-markdown-DHlV3gTP.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-BcsgOC3E.js";import"./confirm-dialog--d4joNM1.js";import"./DialogContent-Dd9BzaHb.js";import"./DialogTitle-VCNanOEI.js";import"./product-Item-button-DHxWsZ3c.js";import"./upload-avatar-BM4UFEHK.js";import"./format-number-BcLd92wH.js";import"./FormHelperText-DFZ5t14C.js";import"./formControlState-Dq1zat_P.js";import"./index-F5afGJi_.js";import"./LoadingButton-DSeISU5a.js";import"./CircularProgress-CcsBVUzL.js";import"./AccordionSummary-CW_XPBWc.js";import"./FormControlLabel-DoizJn8S.js";import"./TextField-6Rb6lrwr.js";import"./FormControl-Bi-099x0.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CTVTwIu7.js";import"./FormLabel-DX5Y9dcz.js";import"./Select-B7QtE-mc.js";import"./Menu-BTSMb8hO.js";import"./InputBase-vNgL0uwK.js";import"./Rating-v1PDWPg2.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-XQVrB2W0.js";import"./RadioGroup-ywsYmzwz.js";import"./FormGroup-CBYEmluE.js";import"./utils-BCWhzzy8.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BS55mf9p.js";import"./Autocomplete-BL_cPq9Y.js";import"./Chip-BKVRFIlM.js";import"./country-select-B6y6qm-8.js";import"./Checkbox-DlLxFjwO.js";import"./DatePicker-Dv7_htZh.js";import"./ListItem-BxnuuOz2.js";import"./MobileDateTimePicker-12RDcihh.js";import"./Tabs-KWiZT936.js";import"./KeyboardArrowRight-BCUjH9lG.js";import"./index-C6wa4o7l.js";function h({productsImages:t,categories:o}){return r.jsxs(e,{children:[r.jsx(g,{links:[{name:"Dashboard",href:m.dashboard.root},{name:"Product",href:m.dashboard.product.root},{name:"New product"}],sx:{mb:{xs:3,md:5}}}),r.jsx(x,{productsImages:t,categories:o})]})}const l={title:`Create a new product | Dashboard - ${u.site.name}`};function jr(){const t=a({queryKey:["products-images"],queryFn:async()=>{const{data:i}=await p.get(s.products.productsImages);return i}}),o=a({queryKey:["product-categories"],queryFn:async()=>{const{data:i}=await p.get(s.productCategories.list);return i}});return o.isLoading||t.isLoading?r.jsx(d,{}):t.isError||o.isError?r.jsx(c,{route:m.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",l.title]})}),r.jsx(h,{productsImages:t.data,categories:o.data})]})}export{jr as default};