import{j as r,dP as i,p as o,dT as s,H as m,C as e,dp as p,dm as n}from"./index-DP6a2E9k.js";import{u as d,E as u}from"./error-block-BfI0F7Kg.js";import{C as c}from"./custom-breadcrumbs-BzrZ9EQb.js";import{P as l}from"./plan-new-edit-form-DQcyw8q4.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-Ok_wZl34.js";import"./use-table-BsjgMcoo.js";import"./product-Item-button-CnOnrLxG.js";import"./component-pagination-custom-Dknief4Y.js";import"./TablePagination-ljOW6YUi.js";import"./KeyboardArrowRight-Dl-x7nPp.js";import"./LastPage-BgEsG8Md.js";import"./TableCell-DXk-udIV.js";import"./Select-DSZcOOSt.js";import"./Menu-BDSRGP0V.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-CsH9RuFA.js";import"./plan-product-table-D9fXJmgO.js";import"./table-head-custom-C_hN9bN8.js";import"./Checkbox-DQX8Zacg.js";import"./incrementer-button-BJTOVQQV.js";import"./TextField-DTH8Ymjh.js";import"./FormControl-DO4W4IIq.js";import"./InputLabel-DWX8Q0GF.js";import"./FormLabel-CwyOc4go.js";import"./FormHelperText-DRwAd9v8.js";import"./InputAdornment-BXZx3WkC.js";import"./DatePicker-DyYDBI9-.js";import"./index-lAqY_A3n.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-EVGdyMm8.js";import"./ListItem-Dc3whLfH.js";import"./Chip-Dz9uFi13.js";function x({products:t}){return r.jsxs(i,{children:[r.jsx(c,{heading:"Create a new Plan",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Plan",href:o.dashboard.plan.root},{name:"Add Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(l,{products:t})]})}const h={title:`Create a new Plan | Dashboard - ${e.site.name}`};function Z(){const t=d({queryKey:["products"],queryFn:async()=>{const{data:a}=await p.get(n.products.list);return a}});return t.isLoading?r.jsx(s,{}):t.isError?r.jsx(u,{route:o.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(m,{children:r.jsxs("title",{children:[" ",h.title]})}),r.jsx(x,{products:t.data})]})}export{Z as default};