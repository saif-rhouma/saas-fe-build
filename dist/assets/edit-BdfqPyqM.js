import{j as r,eb as n,p as m,ef as d,H as u,C as c,dM as a,dK as e}from"./index-DAC7DrKI.js";import{u as p,E as x}from"./error-block-DySOa_eo.js";import{u as h}from"./use-params-BPKTstAt.js";import{C as f}from"./custom-breadcrumbs-DLqq1jlX.js";import{a as g}from"./product-review-new-form-CSanduLn.js";import"./index-BT9WFTW4.js";import"./image-uXppHbLd.js";import"./color-preview-Cd_XsJ3V.js";import"./form-provider-w6GRwc9n.js";import"./editor-DHP9j2dL.js";import"./incrementer-button-BLReogVb.js";import"./carousel-progress-bar-BzUnfdvf.js";import"./html-to-markdown-CajkQ2iz.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-Ds6FyOSf.js";import"./fields-D3apoPNI.js";import"./FormHelperText-DDJizVQ2.js";import"./formControlState-Dq1zat_P.js";import"./Rating-JqEjmuzB.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-DKXce_Ll.js";import"./TextField-BemIARnN.js";import"./FormControl-CAs0fYHm.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BgYGZs-G.js";import"./FormLabel-Ohl1t8N_.js";import"./Select-VxgK60LB.js";import"./Menu-CO2UhTso.js";import"./InputBase-CinKVcWY.js";import"./RadioGroup-Cu8878NJ.js";import"./FormGroup-BF5sRrAl.js";import"./FormControlLabel-Dpb-wuL-.js";import"./Autocomplete-Bdm7MKsx.js";import"./Chip-BV006SG6.js";import"./country-select-B-YEZ-QO.js";import"./countries-DSLisFCy.js";import"./InputAdornment-Coc5CotZ.js";import"./Checkbox-aWzJpCDA.js";import"./upload-avatar-CXZ0NYIu.js";import"./format-number-BqWqqWdN.js";import"./index-F5Z3hI1r.js";import"./DatePicker-B0W1aFhA.js";import"./DialogContent-CNnwUfBT.js";import"./ListItem-Dtgjcfn6.js";import"./MobileDateTimePicker-DX-_JOo5.js";import"./product-Item-button-B2JuzHDU.js";import"./DialogTitle-BHD_nV8d.js";import"./LoadingButton-CI8i-ssx.js";import"./CircularProgress-DD9i2_Ze.js";import"./AccordionSummary-31H3QzcG.js";import"./index-BgeSHDfL.js";function l({product:t,productsImages:o}){return r.jsxs(n,{children:[r.jsx(f,{heading:"Edit",links:[{name:"Dashboard",href:m.dashboard.root},{name:"Product",href:m.dashboard.product.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),r.jsx(g,{currentProduct:t,productsImages:o})]})}const j={title:`Product edit | Dashboard - ${c.site.name}`};function jr(){const{id:t=""}=h(),o=p({queryKey:["products-images"],queryFn:async()=>{const{data:s}=await a.get(e.products.productsImages);return s}}),i=p({queryKey:["products",t],queryFn:async()=>(await a.get(e.products.details+t)).data});return i.isLoading||o.isLoading?r.jsx(d,{}):i.isError||o.isError?r.jsx(x,{route:m.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",j.title]})}),r.jsx(l,{product:i.data,productsImages:o.data})]})}export{jr as default};
