import{j as r,dP as e,p as m,dT as d,H as n,C as u,dp as p,dm as s}from"./index-1idvz3yo.js";import{u as a,E as c}from"./error-block-vNz861xQ.js";import{a as x}from"./product-review-new-form-CjQiCB9i.js";import"./index-PlqHHuj4.js";import"./image-DdCP0E-b.js";import"./color-preview-6BORAZPW.js";import{C as g}from"./custom-breadcrumbs-Cd5BgAXC.js";import"./form-provider-CRkwJWgI.js";import"./editor-D3n3GjcT.js";import"./incrementer-button-DFdQN2rq.js";import"./carousel-progress-bar-BqHm23vL.js";import"./html-to-markdown-CVqVogjg.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-BdU4esUD.js";import"./confirm-dialog-Bh7v_d6V.js";import"./DialogContent-DD2zYDfk.js";import"./DialogTitle-ComDvH0u.js";import"./product-Item-button-C7qGCMmZ.js";import"./upload-avatar-kKzdYGMV.js";import"./format-number-CBFKJ_Xm.js";import"./FormHelperText-D4hzGFD8.js";import"./formControlState-Dq1zat_P.js";import"./index-BGw46kZf.js";import"./LoadingButton-D7yfFEAj.js";import"./CircularProgress-CaSQHkro.js";import"./AccordionSummary-wVBruncF.js";import"./FormControlLabel-BSF48Dfl.js";import"./TextField-Deyfex1l.js";import"./FormControl-e9sHLsS9.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-B7kGj3og.js";import"./FormLabel-DnpLWzxD.js";import"./Select-BzV6E8A7.js";import"./Menu-Bh2_2QIQ.js";import"./InputBase-bYfGaHWI.js";import"./Rating-DX-PCdge.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-Co86ffvq.js";import"./RadioGroup-B8Dgslmt.js";import"./FormGroup-D7-JGyTF.js";import"./utils-WnNbXvdL.js";import"./countries-DSLisFCy.js";import"./InputAdornment-lyNMHj9g.js";import"./Autocomplete-D-gYEvyh.js";import"./Chip-BvDqjkJu.js";import"./country-select-6TD4L1qU.js";import"./Checkbox-BE-qIa3l.js";import"./DatePicker-CEGP_gWC.js";import"./ListItem-pRP8lI0N.js";import"./MobileDateTimePicker-CPvIs9e9.js";import"./Tabs-BXODOCZp.js";import"./KeyboardArrowRight-OJVnc1rR.js";import"./index-CRahxoL1.js";function h({productsImages:t,categories:o}){return r.jsxs(e,{children:[r.jsx(g,{links:[{name:"Dashboard",href:m.dashboard.root},{name:"Product",href:m.dashboard.product.root},{name:"New product"}],sx:{mb:{xs:3,md:5}}}),r.jsx(x,{productsImages:t,categories:o})]})}const l={title:`Create a new product | Dashboard - ${u.site.name}`};function jr(){const t=a({queryKey:["products-images"],queryFn:async()=>{const{data:i}=await p.get(s.products.productsImages);return i}}),o=a({queryKey:["product-categories"],queryFn:async()=>{const{data:i}=await p.get(s.productCategories.list);return i}});return o.isLoading||t.isLoading?r.jsx(d,{}):t.isError||o.isError?r.jsx(c,{route:m.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",l.title]})}),r.jsx(h,{productsImages:t.data,categories:o.data})]})}export{jr as default};