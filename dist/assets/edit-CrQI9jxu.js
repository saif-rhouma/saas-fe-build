import{j as r,dP as d,p as n,dT as u,H as c,C as g,dp as a,dm as e}from"./index-PcvvizaM.js";import{u as p,E as x}from"./error-block-ByYUb2x8.js";import{u as h}from"./use-params-BJEBinDh.js";import{C as l}from"./custom-breadcrumbs-CveB5zSd.js";import{a as y}from"./product-review-new-form-CL1ocIpN.js";import"./index-pPI9fdNH.js";import"./image-CJs9mC80.js";import"./color-preview-C__X2prd.js";import"./form-provider-QAnR1fN1.js";import"./editor-_YiH203b.js";import"./incrementer-button-1m375Bub.js";import"./carousel-progress-bar-BJ04jgZk.js";import"./html-to-markdown-B54ssAki.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-CKVX9VXs.js";import"./confirm-dialog-CKnDVSbe.js";import"./DialogContent-BNlapGc3.js";import"./DialogTitle-AFLXDAx8.js";import"./product-Item-button-DKfH0eIa.js";import"./upload-avatar-BS1_xrDW.js";import"./format-number-DbRbqmXm.js";import"./FormHelperText-CwIdVd83.js";import"./formControlState-Dq1zat_P.js";import"./index-2WdDYItv.js";import"./LoadingButton-Buh1pTwJ.js";import"./CircularProgress-CjSU_ZH0.js";import"./AccordionSummary-CDAOJQeN.js";import"./FormControlLabel-BVXyMM5l.js";import"./TextField-BqVeNtQk.js";import"./FormControl-BDFWwf0L.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CLgWCQLa.js";import"./FormLabel-COKH-IDU.js";import"./Select-oMu1ahJl.js";import"./Menu-DUpb5sCU.js";import"./InputBase-Dg_k17pz.js";import"./Rating-BxbBWQ1u.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-C99_fc9G.js";import"./RadioGroup-4h1o996a.js";import"./FormGroup--EXUIjsJ.js";import"./utils-D7_t011Z.js";import"./countries-DSLisFCy.js";import"./InputAdornment-9Wd2PMBY.js";import"./Autocomplete-wQ_CiLgR.js";import"./Chip-CIfpjv01.js";import"./country-select-CiBGd84d.js";import"./Checkbox-Ci7zC3Qo.js";import"./DatePicker-BpnHzDBD.js";import"./ListItem-27j6jDo_.js";import"./MobileDateTimePicker-m0xyb1Je.js";import"./Tabs-CZPaKkdi.js";import"./KeyboardArrowRight-DC977Fth.js";import"./index-C-MOTVcd.js";function f({product:t,productsImages:o,categories:i}){return r.jsxs(d,{children:[r.jsx(l,{heading:"Edit",links:[{name:"Dashboard",href:n.dashboard.root},{name:"Product",href:n.dashboard.product.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),r.jsx(y,{currentProduct:t,productsImages:o,categories:i})]})}const j={title:`Product edit | Dashboard - ${g.site.name}`};function Pr(){const{id:t=""}=h(),o=p({queryKey:["products-images"],queryFn:async()=>{const{data:s}=await a.get(e.products.productsImages);return s}}),i=p({queryKey:["products",t],queryFn:async()=>(await a.get(e.products.details+t)).data}),m=p({queryKey:["product-categories"],queryFn:async()=>{const{data:s}=await a.get(e.productCategories.list);return s}});return i.isLoading||o.isLoading||m.isLoading?r.jsx(u,{}):i.isError||o.isError||m.isError?r.jsx(x,{route:n.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(c,{children:r.jsxs("title",{children:[" ",j.title]})}),r.jsx(f,{product:i.data,productsImages:o.data,categories:m.data})]})}export{Pr as default};
