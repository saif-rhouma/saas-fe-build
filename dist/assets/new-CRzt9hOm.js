import{j as r,e8 as m,p as o,ec as p,H as s,C as e,dJ as a,dH as n}from"./index-DCM0dqKu.js";import{u as d,E as u}from"./error-block-DeCjSF4t.js";import{a as c}from"./product-review-new-form-BWQw19aP.js";import"./index-BRWDmL20.js";import"./image-DskMD1i2.js";import"./color-preview-BVNm9jJp.js";import{C as x}from"./custom-breadcrumbs-IetWuDPQ.js";import"./form-provider-CsXzZQi6.js";import"./editor-DskST7D0.js";import"./incrementer-button-CC-rEf7B.js";import"./carousel-progress-bar-Go7QvEqy.js";import"./html-to-markdown-DAs27kOg.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-D2La3F2r.js";import"./product-Item-button-DxaDdbMO.js";import"./upload-avatar-QqSqRao9.js";import"./format-number-BQ7t0qkw.js";import"./FormHelperText-DqZjaKA5.js";import"./formControlState-Dq1zat_P.js";import"./index-BdcQkSNX.js";import"./DialogContent-BFR1QZgD.js";import"./DialogTitle-DthX4Z2k.js";import"./LoadingButton-CNUTqo8f.js";import"./CircularProgress-CObVdEvj.js";import"./AccordionSummary-Dl_TwcP0.js";import"./TextField-n063yImk.js";import"./FormControl-CzeO_UtU.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-D4P0yivD.js";import"./FormLabel-sPKOeIzp.js";import"./Select-BfBEUDqV.js";import"./Menu-DUao5Yoh.js";import"./InputBase-DTC7mqIN.js";import"./Rating-bGgbH5MB.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-DbZp1IuP.js";import"./RadioGroup-Dwnhy8-J.js";import"./FormGroup-B2wxUdmP.js";import"./FormControlLabel-DzI7o2_A.js";import"./countries-DSLisFCy.js";import"./InputAdornment-DO0FXlwx.js";import"./Autocomplete-B8SRK5t2.js";import"./Chip-B7AXZfmm.js";import"./country-select-D81VscAm.js";import"./Checkbox-bK399IpG.js";import"./DatePicker-BHh4WHnP.js";import"./ListItem-BlYb29G3.js";import"./MobileDateTimePicker-B4xWrI2C.js";import"./Tabs-D0Tq82TW.js";import"./KeyboardArrowRight-CIlbmAZJ.js";import"./index-BWYPRE2-.js";function h({productsImages:t}){return r.jsxs(m,{children:[r.jsx(x,{links:[{name:"Dashboard",href:o.dashboard.root},{name:"Product",href:o.dashboard.product.root},{name:"New product"}],sx:{mb:{xs:3,md:5}}}),r.jsx(c,{productsImages:t})]})}const f={title:`Create a new product | Dashboard - ${e.site.name}`};function fr(){const t=d({queryKey:["products-images"],queryFn:async()=>{const{data:i}=await a.get(n.products.productsImages);return i}});return t.isPending||t.isLoading?r.jsx(p,{}):t.isError?r.jsx(u,{route:o.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(s,{children:r.jsxs("title",{children:[" ",f.title]})}),r.jsx(h,{productsImages:t.data})]})}export{fr as default};
