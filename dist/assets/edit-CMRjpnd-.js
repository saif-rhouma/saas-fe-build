import{j as r,e8 as d,p as n,ec as u,H as c,C as g,dJ as m,dH as e}from"./index-qTpQGZSM.js";import{u as p,E as x}from"./error-block-LdKLJmXG.js";import{u as h}from"./use-params-DxErbCeU.js";import{C as l}from"./custom-breadcrumbs-BGUga5Db.js";import{a as y}from"./product-review-new-form-DwHjCzTi.js";import"./index-BoXhuGyT.js";import"./image-FClgpgDx.js";import"./color-preview-BMQKelnv.js";import"./form-provider-MVJiOuzj.js";import"./editor-Cm_HovbX.js";import"./incrementer-button-B-z42Mld.js";import"./carousel-progress-bar-1yR-XiXM.js";import"./html-to-markdown-BTi6IxJT.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-DwwxkYn0.js";import"./confirm-dialog-Bm3fCjvw.js";import"./DialogContent-BiWMH9ix.js";import"./DialogTitle-D7golWjh.js";import"./product-Item-button-Ci-AkBUt.js";import"./upload-avatar-Ck4q_zWp.js";import"./format-number-BnI2ZW2X.js";import"./FormHelperText-B0yAPKEP.js";import"./formControlState-Dq1zat_P.js";import"./index-DQ3rvJDb.js";import"./LoadingButton-ipNV_Zqw.js";import"./CircularProgress-Buj6nA2J.js";import"./AccordionSummary-AEx-66lO.js";import"./FormControlLabel-CpHiSJVr.js";import"./TextField-DlbgkIdM.js";import"./FormControl-BpZ03tA-.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DcOK32WR.js";import"./FormLabel-DnNlyvb5.js";import"./Select-CPhaOcE2.js";import"./Menu-rdkUPF4f.js";import"./InputBase-iWMV7tHw.js";import"./Rating-DGo1iH4F.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-CN2Pz1pQ.js";import"./RadioGroup-Ct6wIvy3.js";import"./FormGroup-XxqkAOpe.js";import"./countries-DSLisFCy.js";import"./InputAdornment-AOuf2E7W.js";import"./Autocomplete-D_Vw0UML.js";import"./Chip-BkTmiN33.js";import"./country-select-DSb3nCU9.js";import"./Checkbox-BIMD_Kz2.js";import"./DatePicker-1dQyUDWB.js";import"./ListItem-BzSUAL2X.js";import"./MobileDateTimePicker-46hsTEu5.js";import"./Tabs-BvOs9ozx.js";import"./KeyboardArrowRight-BXMkEFXs.js";import"./index-C9BegESN.js";function f({product:t,productsImages:o,categories:i}){return r.jsxs(d,{children:[r.jsx(l,{heading:"Edit",links:[{name:"Dashboard",href:n.dashboard.root},{name:"Product",href:n.dashboard.product.root},{name:t==null?void 0:t.name}],sx:{mb:{xs:3,md:5}}}),r.jsx(y,{currentProduct:t,productsImages:o,categories:i})]})}const j={title:`Product edit | Dashboard - ${g.site.name}`};function br(){const{id:t=""}=h(),o=p({queryKey:["products-images"],queryFn:async()=>{const{data:s}=await m.get(e.products.productsImages);return s}}),i=p({queryKey:["products",t],queryFn:async()=>(await m.get(e.products.details+t)).data}),a=p({queryKey:["product-categories"],queryFn:async()=>{const{data:s}=await m.get(e.productCategories.list);return s}});return i.isLoading||o.isLoading||a.isLoading?r.jsx(u,{}):i.isError||o.isError||a.isError?r.jsx(x,{route:n.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(c,{children:r.jsxs("title",{children:[" ",j.title]})}),r.jsx(f,{product:i.data,productsImages:o.data,categories:a.data})]})}export{br as default};