import{j as r,e8 as n,p as m,ec as d,H as u,C as c,dJ as a,dH as e}from"./index-D9XQ5HZn.js";import{u as p,E as x}from"./error-block-w_O0iSRH.js";import{u as h}from"./use-params-CgxoczUS.js";import{C as f}from"./custom-breadcrumbs-CazdlgA0.js";import{a as g}from"./product-review-new-form-BnXJlzDK.js";import"./index-CB8RShMh.js";import"./image--crxJX70.js";import"./color-preview-b9EC1hCt.js";import"./form-provider-CxGM2Unr.js";import"./editor-4sPkqXXa.js";import"./incrementer-button-BjSnt38i.js";import"./carousel-progress-bar-qLDTps8O.js";import"./html-to-markdown-j4QajOxF.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-ts4flLpu.js";import"./product-Item-button-DObZHK26.js";import"./upload-avatar-AxagYmpF.js";import"./format-number-B7RckPke.js";import"./FormHelperText-BUvJKjZo.js";import"./formControlState-Dq1zat_P.js";import"./index-Ck2jm1rT.js";import"./DialogContent-COSPx22v.js";import"./DialogTitle-CwAPclTX.js";import"./LoadingButton-EVY8EkwD.js";import"./CircularProgress-Cg-Vm1oQ.js";import"./AccordionSummary-ChILM9-a.js";import"./TextField-DX4sIYOy.js";import"./FormControl-B_14xPvO.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DS6Prtxn.js";import"./FormLabel-ousI8yIh.js";import"./Select-DEn4EjE4.js";import"./Menu-ChOTQt8U.js";import"./InputBase-DsCQaGZz.js";import"./Rating-Dz1lJuYA.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-BZBxWU4Q.js";import"./RadioGroup-BU5nUuP7.js";import"./FormGroup-Bfb8EGRU.js";import"./FormControlLabel-CQyLNxlb.js";import"./countries-DSLisFCy.js";import"./InputAdornment-DzIVUKKm.js";import"./Autocomplete-CbHgTFzS.js";import"./Chip-DtnMtqyD.js";import"./country-select-CcbLyBYj.js";import"./Checkbox-DF3g1Q_L.js";import"./DatePicker-CHI830Hp.js";import"./ListItem-DkD46tOc.js";import"./MobileDateTimePicker-Dp-kczs0.js";import"./Tabs-B9OWTzrp.js";import"./KeyboardArrowRight-D9a5UIDu.js";import"./index-DaWlhWs_.js";function l({product:t,productsImages:o}){return r.jsxs(n,{children:[r.jsx(f,{heading:"Edit",links:[{name:"Dashboard",href:m.dashboard.root},{name:"Product",href:m.dashboard.product.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),r.jsx(g,{currentProduct:t,productsImages:o})]})}const j={title:`Product edit | Dashboard - ${c.site.name}`};function yr(){const{id:t=""}=h(),o=p({queryKey:["products-images"],queryFn:async()=>{const{data:s}=await a.get(e.products.productsImages);return s}}),i=p({queryKey:["products",t],queryFn:async()=>(await a.get(e.products.details+t)).data});return i.isLoading||o.isLoading?r.jsx(d,{}):i.isError||o.isError?r.jsx(x,{route:m.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",j.title]})}),r.jsx(l,{product:i.data,productsImages:o.data})]})}export{yr as default};
