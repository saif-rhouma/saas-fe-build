import{j as r,dP as d,p as n,dT as u,H as c,C as g,dp as a,dm as e}from"./index-DNUduzdf.js";import{u as p,E as x}from"./error-block-CIoGA_ou.js";import{u as h}from"./use-params-BONyA-Lu.js";import{C as l}from"./custom-breadcrumbs-xaxkOPaz.js";import{a as y}from"./product-review-new-form-CWpw9Ml9.js";import"./index-DVM0Zrf0.js";import"./image-RtGonsw-.js";import"./color-preview-DKOEm42-.js";import"./form-provider-Bc4k30Da.js";import"./editor-BwKOUAEN.js";import"./incrementer-button-CM8gQ1kh.js";import"./carousel-progress-bar-fd0QkHew.js";import"./html-to-markdown-DHlV3gTP.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-BcsgOC3E.js";import"./confirm-dialog--d4joNM1.js";import"./DialogContent-Dd9BzaHb.js";import"./DialogTitle-VCNanOEI.js";import"./product-Item-button-DHxWsZ3c.js";import"./upload-avatar-BM4UFEHK.js";import"./format-number-BcLd92wH.js";import"./FormHelperText-DFZ5t14C.js";import"./formControlState-Dq1zat_P.js";import"./index-F5afGJi_.js";import"./LoadingButton-DSeISU5a.js";import"./CircularProgress-CcsBVUzL.js";import"./AccordionSummary-CW_XPBWc.js";import"./FormControlLabel-DoizJn8S.js";import"./TextField-6Rb6lrwr.js";import"./FormControl-Bi-099x0.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CTVTwIu7.js";import"./FormLabel-DX5Y9dcz.js";import"./Select-B7QtE-mc.js";import"./Menu-BTSMb8hO.js";import"./InputBase-vNgL0uwK.js";import"./Rating-v1PDWPg2.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-XQVrB2W0.js";import"./RadioGroup-ywsYmzwz.js";import"./FormGroup-CBYEmluE.js";import"./utils-BCWhzzy8.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BS55mf9p.js";import"./Autocomplete-BL_cPq9Y.js";import"./Chip-BKVRFIlM.js";import"./country-select-B6y6qm-8.js";import"./Checkbox-DlLxFjwO.js";import"./DatePicker-Dv7_htZh.js";import"./ListItem-BxnuuOz2.js";import"./MobileDateTimePicker-12RDcihh.js";import"./Tabs-KWiZT936.js";import"./KeyboardArrowRight-BCUjH9lG.js";import"./index-C6wa4o7l.js";function f({product:t,productsImages:o,categories:i}){return r.jsxs(d,{children:[r.jsx(l,{heading:"Edit",links:[{name:"Dashboard",href:n.dashboard.root},{name:"Product",href:n.dashboard.product.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),r.jsx(y,{currentProduct:t,productsImages:o,categories:i})]})}const j={title:`Product edit | Dashboard - ${g.site.name}`};function Pr(){const{id:t=""}=h(),o=p({queryKey:["products-images"],queryFn:async()=>{const{data:s}=await a.get(e.products.productsImages);return s}}),i=p({queryKey:["products",t],queryFn:async()=>(await a.get(e.products.details+t)).data}),m=p({queryKey:["product-categories"],queryFn:async()=>{const{data:s}=await a.get(e.productCategories.list);return s}});return i.isLoading||o.isLoading||m.isLoading?r.jsx(u,{}):i.isError||o.isError||m.isError?r.jsx(x,{route:n.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(c,{children:r.jsxs("title",{children:[" ",j.title]})}),r.jsx(f,{product:i.data,productsImages:o.data,categories:m.data})]})}export{Pr as default};
