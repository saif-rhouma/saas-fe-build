import{j as r,dP as d,p as n,dT as u,H as c,C as g,dp as a,dm as e}from"./index-oyszM3Nj.js";import{u as p,E as x}from"./error-block-hlD8KBvT.js";import{u as h}from"./use-params-DY8_Blqt.js";import{C as l}from"./custom-breadcrumbs-BfQvIxyX.js";import{a as y}from"./product-review-new-form-B7dQBUi7.js";import"./index-DXNUARyF.js";import"./image-D4xzDEh_.js";import"./color-preview-DkeoA2-8.js";import"./form-provider-DVH46um2.js";import"./editor-BBBPXrhA.js";import"./incrementer-button-BdPdnwnA.js";import"./carousel-progress-bar-C-kVybXC.js";import"./html-to-markdown-bmTqXdQs.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-CrU_O3n6.js";import"./confirm-dialog-BoUFwhqD.js";import"./DialogContent-CvCwHI3o.js";import"./DialogTitle-DGL8ga-p.js";import"./product-Item-button-HOA19DKx.js";import"./upload-avatar-BeRSwQx_.js";import"./format-number-TKBdgRec.js";import"./FormHelperText-DGNKCr7Q.js";import"./formControlState-Dq1zat_P.js";import"./index-BT-WjpOH.js";import"./LoadingButton-DIzigFgl.js";import"./CircularProgress-By0RBkpg.js";import"./AccordionSummary-D5Az19sB.js";import"./FormControlLabel-kWTZarfi.js";import"./TextField-SbZqCQXc.js";import"./FormControl-pEipRvY2.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CtA-6Ha1.js";import"./FormLabel-BkqI8r49.js";import"./Select-D9qKJtxp.js";import"./Menu-BDXnOmeW.js";import"./InputBase-CngNuOhd.js";import"./Rating-BRUpJwhP.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-Dsrfbsc0.js";import"./RadioGroup-tn6_l1NU.js";import"./FormGroup-BL6H52Jf.js";import"./utils-C_u9tDdm.js";import"./countries-DSLisFCy.js";import"./InputAdornment-CcMUVLGV.js";import"./Autocomplete-f8l0PZTp.js";import"./Chip-BEEMMiur.js";import"./country-select-C1LXEP87.js";import"./Checkbox-D9Kygjd9.js";import"./DatePicker-Dffai1lP.js";import"./ListItem-Dj6rXR1V.js";import"./MobileDateTimePicker-DJ8XBGZQ.js";import"./Tabs-BhFbrTK2.js";import"./KeyboardArrowRight-CPXSLNUL.js";import"./index-DYy6t0qO.js";function f({product:t,productsImages:o,categories:i}){return r.jsxs(d,{children:[r.jsx(l,{heading:"Edit",links:[{name:"Dashboard",href:n.dashboard.root},{name:"Product",href:n.dashboard.product.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),r.jsx(y,{currentProduct:t,productsImages:o,categories:i})]})}const j={title:`Product edit | Dashboard - ${g.site.name}`};function Pr(){const{id:t=""}=h(),o=p({queryKey:["products-images"],queryFn:async()=>{const{data:s}=await a.get(e.products.productsImages);return s}}),i=p({queryKey:["products",t],queryFn:async()=>(await a.get(e.products.details+t)).data}),m=p({queryKey:["product-categories"],queryFn:async()=>{const{data:s}=await a.get(e.productCategories.list);return s}});return i.isLoading||o.isLoading||m.isLoading?r.jsx(u,{}):i.isError||o.isError||m.isError?r.jsx(x,{route:n.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(c,{children:r.jsxs("title",{children:[" ",j.title]})}),r.jsx(f,{product:i.data,productsImages:o.data,categories:m.data})]})}export{Pr as default};