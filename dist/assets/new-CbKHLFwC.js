import{j as r,dP as s,p as o,dT as i,H as e,C as m,dp as n,dm as p}from"./index-Cb6aSJqI.js";import{u as d,E as u}from"./error-block-BjnALYtR.js";import{C as c}from"./custom-breadcrumbs-k2LFOW06.js";import{P as l}from"./plan-new-edit-form-C2ehROlG.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-D6Rdi7Aa.js";import"./product-Item-button-N-AtKXv2.js";import"./plan-product-table-DODZDbZA.js";import"./table-head-custom-CPjDlHqa.js";import"./TableCell-DafvB6oq.js";import"./Checkbox-BduLSsJI.js";import"./incrementer-button-CyX4IiAx.js";import"./TextField-DQXcR5as.js";import"./FormControl-BIuepxap.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BHzQjcru.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bb0ljwLc.js";import"./Select-CfChxtbn.js";import"./Menu-BgA5ob5m.js";import"./InputBase-4YzQn0tJ.js";import"./FormHelperText-BO4BDf2D.js";import"./InputAdornment-B3lMmCet.js";import"./DatePicker-Chzv8MLO.js";import"./index-BXLKVmsR.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-CSEM2EB2.js";import"./ListItem-DTFB2zaU.js";import"./Chip-CRJSjjGM.js";function x({products:t}){return r.jsxs(s,{children:[r.jsx(c,{heading:"Create a new Plan",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Plan",href:o.dashboard.plan.root},{name:"Add Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(l,{products:t})]})}const h={title:`Create a new Plan | Dashboard - ${m.site.name}`};function M(){const t=d({queryKey:["products"],queryFn:async()=>{const{data:a}=await n.get(p.products.list);return a}});return t.isLoading?r.jsx(i,{}):t.isError?r.jsx(u,{route:o.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(e,{children:r.jsxs("title",{children:[" ",h.title]})}),r.jsx(x,{products:t.data})]})}export{M as default};