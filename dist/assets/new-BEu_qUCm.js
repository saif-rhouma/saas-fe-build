import{j as r,dP as i,p as o,dT as s,H as m,C as e,dp as p,dm as n}from"./index-CIoKvMHn.js";import{u as d,E as u}from"./error-block-DhaRFWwY.js";import{C as c}from"./custom-breadcrumbs-BThLSMc0.js";import{P as l}from"./plan-new-edit-form-CiWnLVxC.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-L7mmbuNE.js";import"./use-table-CxT2ERfL.js";import"./product-Item-button-Cwi9KPhh.js";import"./component-pagination-custom-trxarNvq.js";import"./TablePagination-QOWgtfOk.js";import"./KeyboardArrowRight-Bw9uoUSF.js";import"./LastPage-BcU4aNgu.js";import"./TableCell-uJN4TiGP.js";import"./Select-DSZG82Q4.js";import"./Menu-C1-wEn-P.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-Df-FEvS4.js";import"./plan-product-table-ol7x0tBG.js";import"./table-head-custom-ClFYX0fF.js";import"./Checkbox-0687NpDf.js";import"./incrementer-button-CsjYBCQe.js";import"./TextField-C00rKtlH.js";import"./FormControl-FN21q8Rq.js";import"./InputLabel-iaMgGLYd.js";import"./FormLabel-BuFlWDAS.js";import"./FormHelperText-CqGjfG0J.js";import"./InputAdornment-Cvj5YTOu.js";import"./DatePicker-Cd2R6_FW.js";import"./index-3LcnEoVf.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-DW8kkh1u.js";import"./ListItem-BpMsl4m4.js";import"./Chip-Cec_Jw5m.js";function x({products:t}){return r.jsxs(i,{children:[r.jsx(c,{heading:"Create a new Plan",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Plan",href:o.dashboard.plan.root},{name:"Add Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(l,{products:t})]})}const h={title:`Create a new Plan | Dashboard - ${e.site.name}`};function Z(){const t=d({queryKey:["products"],queryFn:async()=>{const{data:a}=await p.get(n.products.list);return a}});return t.isLoading?r.jsx(s,{}):t.isError?r.jsx(u,{route:o.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(m,{children:r.jsxs("title",{children:[" ",h.title]})}),r.jsx(x,{products:t.data})]})}export{Z as default};