import{j as r,dP as e,p as m,dT as d,H as n,C as u,dp as p,dm as s}from"./index-BNST9t3H.js";import{u as a,E as c}from"./error-block-DFMrUAWZ.js";import{a as x}from"./product-review-new-form-CreDHtq5.js";import"./index-laY47Fbc.js";import"./image-Dv-AG5zQ.js";import"./color-preview-DqhQflwL.js";import{C as g}from"./custom-breadcrumbs-BiTdiLox.js";import"./form-provider-BNtu7LB5.js";import"./editor-FUkieYNV.js";import"./incrementer-button-B9-YUF9V.js";import"./carousel-progress-bar-CvS1DHph.js";import"./html-to-markdown-DV9T95Cn.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-BKsYnDxa.js";import"./confirm-dialog-Capw1-Hb.js";import"./DialogContent-DHjRqSAQ.js";import"./DialogTitle-BnePALrZ.js";import"./product-Item-button-CFogackH.js";import"./upload-avatar-DVJoxmTC.js";import"./format-number-DalNf45u.js";import"./FormHelperText-BxJIEqds.js";import"./formControlState-Dq1zat_P.js";import"./index-D4rN_k6Q.js";import"./LoadingButton-DKBdvIXL.js";import"./CircularProgress-Du1pN_CC.js";import"./AccordionSummary-C4SGrz1w.js";import"./FormControlLabel-rUw4AD6l.js";import"./TextField-XhUvK9fJ.js";import"./FormControl-LqjWjsHB.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BKRRW4uk.js";import"./FormLabel-BA37t66N.js";import"./Select-CO9g0L3k.js";import"./Menu-0-Hoa3ia.js";import"./InputBase-B53atiLK.js";import"./Rating-SUN7LmWn.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-CwRTu9Nu.js";import"./RadioGroup-B-Un6V4l.js";import"./FormGroup-DxIrRj-4.js";import"./utils-rQONW9Cc.js";import"./countries-DSLisFCy.js";import"./InputAdornment-CF1A_q0t.js";import"./Autocomplete-LuGCl68c.js";import"./Chip-CIWjz3HQ.js";import"./country-select-D-FzK9b2.js";import"./Checkbox-CO6e7jJW.js";import"./DatePicker-Dg_ZdpM0.js";import"./ListItem-3GvF7WdZ.js";import"./MobileDateTimePicker-CGGE3WaR.js";import"./Tabs-C3pqEdNS.js";import"./KeyboardArrowRight-DqZ8rSQg.js";import"./index-BqwDHqj-.js";function h({productsImages:t,categories:o}){return r.jsxs(e,{children:[r.jsx(g,{links:[{name:"Dashboard",href:m.dashboard.root},{name:"Product",href:m.dashboard.product.root},{name:"New product"}],sx:{mb:{xs:3,md:5}}}),r.jsx(x,{productsImages:t,categories:o})]})}const l={title:`Create a new product | Dashboard - ${u.site.name}`};function jr(){const t=a({queryKey:["products-images"],queryFn:async()=>{const{data:i}=await p.get(s.products.productsImages);return i}}),o=a({queryKey:["product-categories"],queryFn:async()=>{const{data:i}=await p.get(s.productCategories.list);return i}});return o.isLoading||t.isLoading?r.jsx(d,{}):t.isError||o.isError?r.jsx(c,{route:m.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",l.title]})}),r.jsx(h,{productsImages:t.data,categories:o.data})]})}export{jr as default};