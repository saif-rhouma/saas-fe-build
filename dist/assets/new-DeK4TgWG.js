import{j as r,dP as e,p as m,dT as d,H as n,C as u,dp as p,dm as s}from"./index-BRWSQhLj.js";import{u as a,E as c}from"./error-block-CQJDxd_0.js";import{a as x}from"./product-review-new-form-B4LI7WnO.js";import"./index-ChTS2LLj.js";import"./image-Bnsg2-8e.js";import"./color-preview-CJF6XhlO.js";import{C as g}from"./custom-breadcrumbs-Ch5Xqwj9.js";import"./form-provider-CQ0Db_3w.js";import"./editor-B2aXBOKa.js";import"./incrementer-button-DFfBa_d1.js";import"./carousel-progress-bar-oR4sphi0.js";import"./html-to-markdown-CuprPBl9.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-DFBepesY.js";import"./confirm-dialog-ssSifk0I.js";import"./DialogContent-Zpn99X2f.js";import"./DialogTitle-BVmBC5Ly.js";import"./product-Item-button-He-eqUXW.js";import"./upload-avatar-BTYeNaMQ.js";import"./format-number-CAgYIf5a.js";import"./FormHelperText-Cf_wmt5H.js";import"./formControlState-Dq1zat_P.js";import"./index-BoO187_o.js";import"./LoadingButton-Dn3oyTkA.js";import"./CircularProgress-CAgk0uJC.js";import"./AccordionSummary-DypVR3Zd.js";import"./FormControlLabel-DYRCPyH0.js";import"./TextField-DWlrw-uI.js";import"./FormControl-B1BaavBO.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BQ33YGuJ.js";import"./FormLabel-CbTb2PIY.js";import"./Select-c5WOnzoP.js";import"./Menu-Qgp7_360.js";import"./InputBase-DLvueaBe.js";import"./Rating-CBSUqLfB.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-C5l2k4ei.js";import"./RadioGroup-DcyreO6-.js";import"./FormGroup-DD7duurx.js";import"./utils-qGzo-3WL.js";import"./countries-DSLisFCy.js";import"./InputAdornment-C5ShVcra.js";import"./Autocomplete-NSgekTkA.js";import"./Chip-s78qHh-l.js";import"./country-select-CAd0vdKk.js";import"./Checkbox-BegWxMiW.js";import"./DatePicker-CFxLiWmV.js";import"./ListItem-D7PnxC_O.js";import"./MobileDateTimePicker-D24CD_1h.js";import"./Tabs-Cj2WHLSd.js";import"./KeyboardArrowRight-_gtD3CJF.js";import"./index-Bmd1Rs2t.js";function h({productsImages:t,categories:o}){return r.jsxs(e,{children:[r.jsx(g,{links:[{name:"Dashboard",href:m.dashboard.root},{name:"Product",href:m.dashboard.product.root},{name:"New product"}],sx:{mb:{xs:3,md:5}}}),r.jsx(x,{productsImages:t,categories:o})]})}const l={title:`Create a new product | Dashboard - ${u.site.name}`};function jr(){const t=a({queryKey:["products-images"],queryFn:async()=>{const{data:i}=await p.get(s.products.productsImages);return i}}),o=a({queryKey:["product-categories"],queryFn:async()=>{const{data:i}=await p.get(s.productCategories.list);return i}});return o.isLoading||t.isLoading?r.jsx(d,{}):t.isError||o.isError?r.jsx(c,{route:m.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",l.title]})}),r.jsx(h,{productsImages:t.data,categories:o.data})]})}export{jr as default};
