import{j as r,dP as d,p as n,dT as u,H as c,C as g,dn as m,dl as e}from"./index-CDcUgrfM.js";import{u as p,E as x}from"./error-block-XWJxuTVo.js";import{u as h}from"./use-params-DKihax7a.js";import{C as l}from"./custom-breadcrumbs-BL_vTuJF.js";import{a as y}from"./product-review-new-form-BL_ssBw0.js";import"./index-Cr-6ezSD.js";import"./image-C4WktV16.js";import"./color-preview-DyXITM6v.js";import"./form-provider-DPEGnoLi.js";import"./editor-CGxeH7db.js";import"./incrementer-button-CpwFJ-Yz.js";import"./carousel-progress-bar-Bw0s3fzu.js";import"./html-to-markdown-ZISwUHL4.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-BWrcWSYi.js";import"./confirm-dialog-BYewv79v.js";import"./DialogContent-B3AK0H-W.js";import"./DialogTitle-Dj_SBQFY.js";import"./product-Item-button-D0W1xY0k.js";import"./upload-avatar-D77EIrlr.js";import"./format-number-K3MYeV6b.js";import"./FormHelperText-CpMJHbvL.js";import"./formControlState-Dq1zat_P.js";import"./index-DkkRrZbX.js";import"./LoadingButton-D3qxiYFp.js";import"./CircularProgress-C37bchS4.js";import"./AccordionSummary-BbmQk5GL.js";import"./FormControlLabel-C9Nh_YCW.js";import"./TextField-BuUBnZDj.js";import"./FormControl-C7WzToVA.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DFNFmoZn.js";import"./FormLabel-e37nWMJI.js";import"./Select-BZojGQgr.js";import"./Menu--HgoqF6K.js";import"./InputBase-jbxmQqqV.js";import"./Rating-w3dgxeCA.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-Cc_JEzEp.js";import"./RadioGroup-SuhSugdB.js";import"./FormGroup-D7ycBH1u.js";import"./countries-DSLisFCy.js";import"./InputAdornment-C4RBZEHJ.js";import"./Autocomplete-BXgXmYj0.js";import"./Chip-CVtkDWmm.js";import"./country-select-BMAkVgNz.js";import"./Checkbox-BxyuHg5r.js";import"./DatePicker-D6wu5-8l.js";import"./ListItem-D2_hmcct.js";import"./MobileDateTimePicker-BKtNADfB.js";import"./Tabs-0KFgPQsD.js";import"./KeyboardArrowRight-BY3fczxh.js";import"./index-h55rDlR6.js";function f({product:t,productsImages:o,categories:i}){return r.jsxs(d,{children:[r.jsx(l,{heading:"Edit",links:[{name:"Dashboard",href:n.dashboard.root},{name:"Product",href:n.dashboard.product.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),r.jsx(y,{currentProduct:t,productsImages:o,categories:i})]})}const j={title:`Product edit | Dashboard - ${g.site.name}`};function br(){const{id:t=""}=h(),o=p({queryKey:["products-images"],queryFn:async()=>{const{data:s}=await m.get(e.products.productsImages);return s}}),i=p({queryKey:["products",t],queryFn:async()=>(await m.get(e.products.details+t)).data}),a=p({queryKey:["product-categories"],queryFn:async()=>{const{data:s}=await m.get(e.productCategories.list);return s}});return i.isLoading||o.isLoading||a.isLoading?r.jsx(u,{}):i.isError||o.isError||a.isError?r.jsx(x,{route:n.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(c,{children:r.jsxs("title",{children:[" ",j.title]})}),r.jsx(f,{product:i.data,productsImages:o.data,categories:a.data})]})}export{br as default};
