import{j as r,dP as s,p as o,dT as i,H as e,C as m,dp as n,dm as p}from"./index-oyszM3Nj.js";import{u as d,E as u}from"./error-block-hlD8KBvT.js";import{C as c}from"./custom-breadcrumbs-BfQvIxyX.js";import{P as l}from"./plan-new-edit-form-_4zr4_v4.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-CrU_O3n6.js";import"./product-Item-button-HOA19DKx.js";import"./plan-product-table-Bki2VIc2.js";import"./table-head-custom-BdFVGoLn.js";import"./TableCell-BrIZmqgS.js";import"./Checkbox-D9Kygjd9.js";import"./incrementer-button-BdPdnwnA.js";import"./TextField-SbZqCQXc.js";import"./FormControl-pEipRvY2.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CtA-6Ha1.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BkqI8r49.js";import"./Select-D9qKJtxp.js";import"./Menu-BDXnOmeW.js";import"./InputBase-CngNuOhd.js";import"./FormHelperText-DGNKCr7Q.js";import"./InputAdornment-CcMUVLGV.js";import"./DatePicker-Dffai1lP.js";import"./index-BT-WjpOH.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-CvCwHI3o.js";import"./ListItem-Dj6rXR1V.js";import"./Chip-BEEMMiur.js";function x({products:t}){return r.jsxs(s,{children:[r.jsx(c,{heading:"Create a new Plan",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Plan",href:o.dashboard.plan.root},{name:"Add Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(l,{products:t})]})}const h={title:`Create a new Plan | Dashboard - ${m.site.name}`};function M(){const t=d({queryKey:["products"],queryFn:async()=>{const{data:a}=await n.get(p.products.list);return a}});return t.isLoading?r.jsx(i,{}):t.isError?r.jsx(u,{route:o.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(e,{children:r.jsxs("title",{children:[" ",h.title]})}),r.jsx(x,{products:t.data})]})}export{M as default};