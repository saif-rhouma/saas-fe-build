import{j as r,dP as d,p as n,dT as u,H as c,C as g,dp as a,dm as e}from"./index-CmdkfqKS.js";import{u as p,E as x}from"./error-block-C6aVHR9q.js";import{u as h}from"./use-params-Dof4q-Jp.js";import{C as l}from"./custom-breadcrumbs-zp5TT6xQ.js";import{a as y}from"./product-review-new-form-D-8uKzRV.js";import"./index-5ZMDhNTd.js";import"./image-n6arU1a7.js";import"./color-preview-Bfsv_trF.js";import"./form-provider-DrNjnJOg.js";import"./editor-CFV9i_63.js";import"./incrementer-button-CB2q2HRH.js";import"./carousel-progress-bar-BAPTt_bP.js";import"./html-to-markdown-C_2Vmaj8.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-CzRT85lE.js";import"./confirm-dialog-DNtYpku4.js";import"./DialogContent-Dk5OBRXK.js";import"./DialogTitle-BioDnUJV.js";import"./product-Item-button-CIblmZ-d.js";import"./upload-avatar-DL75aXAD.js";import"./format-number-CpJwq28e.js";import"./FormHelperText-k7Kr-y0N.js";import"./formControlState-Dq1zat_P.js";import"./index-BokJwJhp.js";import"./LoadingButton-CR1m5No3.js";import"./CircularProgress-91NhVX-l.js";import"./AccordionSummary-BTkqOeA5.js";import"./FormControlLabel-mbyQcauU.js";import"./TextField-BjR7_G8v.js";import"./FormControl-XfQ-tXV-.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-C0Z2ckwt.js";import"./FormLabel-DuQIyiih.js";import"./Select-wqZ46ZQV.js";import"./Menu-CfD-4i-3.js";import"./InputBase-DqtMshz6.js";import"./Rating-D1Ijv6jH.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-YEdAkdRl.js";import"./RadioGroup-Dwrv9yAA.js";import"./FormGroup-H6LPIoTS.js";import"./utils-BKO3Uglo.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BQntN4yz.js";import"./Autocomplete-CHN5rhb6.js";import"./Chip-B-PFDrO9.js";import"./country-select-BPg5yAyG.js";import"./Checkbox-DVw03bHu.js";import"./DatePicker-BMM5VczW.js";import"./ListItem-PH9S3BFh.js";import"./MobileDateTimePicker-Bf9PkwBg.js";import"./Tabs-Cg9PuxOT.js";import"./KeyboardArrowRight-C6EsOROQ.js";import"./index-Bxt7codH.js";function f({product:t,productsImages:o,categories:i}){return r.jsxs(d,{children:[r.jsx(l,{heading:"Edit",links:[{name:"Dashboard",href:n.dashboard.root},{name:"Product",href:n.dashboard.product.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),r.jsx(y,{currentProduct:t,productsImages:o,categories:i})]})}const j={title:`Product edit | Dashboard - ${g.site.name}`};function Pr(){const{id:t=""}=h(),o=p({queryKey:["products-images"],queryFn:async()=>{const{data:s}=await a.get(e.products.productsImages);return s}}),i=p({queryKey:["products",t],queryFn:async()=>(await a.get(e.products.details+t)).data}),m=p({queryKey:["product-categories"],queryFn:async()=>{const{data:s}=await a.get(e.productCategories.list);return s}});return i.isLoading||o.isLoading||m.isLoading?r.jsx(u,{}):i.isError||o.isError||m.isError?r.jsx(x,{route:n.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(c,{children:r.jsxs("title",{children:[" ",j.title]})}),r.jsx(f,{product:i.data,productsImages:o.data,categories:m.data})]})}export{Pr as default};