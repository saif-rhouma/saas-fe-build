import{j as r,e8 as n,p as m,ec as d,H as u,C as c,dJ as a,dH as p}from"./index-CGa_Q6Py.js";import{u as e,E as x}from"./error-block-stWvsMsx.js";import{u as h}from"./use-params--Re0ClxC.js";import{C as f}from"./custom-breadcrumbs-UiY5PgKl.js";import{a as g}from"./product-review-new-form-U_au5vTU.js";import"./index-D9UfzKRC.js";import"./image-DKbVqab5.js";import"./color-preview-Bd1MVcD6.js";import"./form-provider-B3FvCF-c.js";import"./editor-COn8_0IM.js";import"./incrementer-button-CieQIA0-.js";import"./carousel-progress-bar-CFdYxW6V.js";import"./html-to-markdown-CxYfLpnJ.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-BZyJkW6J.js";import"./confirm-dialog-B2c6UDYf.js";import"./DialogContent-CkKaB1Dh.js";import"./DialogTitle-7P1jGWHj.js";import"./product-Item-button-BKk4_42J.js";import"./upload-avatar-lrMiBpkm.js";import"./format-number-D7jLQrJb.js";import"./FormHelperText-Cs86-ejI.js";import"./formControlState-Dq1zat_P.js";import"./index-BWadiwXQ.js";import"./LoadingButton-B5SbTGGo.js";import"./CircularProgress-CWCrBmmX.js";import"./AccordionSummary-DYR4C90o.js";import"./FormControlLabel-ULMw-Rz6.js";import"./TextField-x1wfc3aD.js";import"./FormControl-BQjf2Y5Q.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Boupd8R1.js";import"./FormLabel-BwlFMORw.js";import"./Select-C3EwVc3m.js";import"./Menu-CEGb_rPj.js";import"./InputBase-CW41dL9k.js";import"./Rating-B7rrg94U.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-M6bVG310.js";import"./RadioGroup-CZVTeUhr.js";import"./FormGroup-DgzyTd4r.js";import"./countries-DSLisFCy.js";import"./InputAdornment-DYxqegqT.js";import"./Autocomplete-DTDeDKOb.js";import"./Chip-OqFJxE3e.js";import"./country-select-Cmy0LStT.js";import"./Checkbox-C-tt3dk-.js";import"./DatePicker-BTuyCtTt.js";import"./ListItem-3hZALOiS.js";import"./MobileDateTimePicker-H2WyDDk6.js";import"./Tabs-B9rF6pCD.js";import"./KeyboardArrowRight-DTzh8lht.js";import"./index-B34iO5qA.js";function l({product:t,productsImages:o}){return r.jsxs(n,{children:[r.jsx(f,{heading:"Edit",links:[{name:"Dashboard",href:m.dashboard.root},{name:"Product",href:m.dashboard.product.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),r.jsx(g,{currentProduct:t,productsImages:o})]})}const j={title:`Product edit | Dashboard - ${c.site.name}`};function br(){const{id:t=""}=h(),o=e({queryKey:["products-images"],queryFn:async()=>{const{data:s}=await a.get(p.products.productsImages);return s}}),i=e({queryKey:["products",t],queryFn:async()=>(await a.get(p.products.details+t)).data});return i.isLoading||o.isLoading?r.jsx(d,{}):i.isError||o.isError?r.jsx(x,{route:m.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",j.title]})}),r.jsx(l,{product:i.data,productsImages:o.data})]})}export{br as default};