import{j as r,dP as p,p as s,dT as d,H as u,C as l,dp as e,dm as n}from"./index-oyszM3Nj.js";import{u as m,E as c}from"./error-block-hlD8KBvT.js";import{u as x}from"./use-params-DY8_Blqt.js";import{C as h}from"./custom-breadcrumbs-BfQvIxyX.js";import{P as f}from"./plan-new-edit-form-_4zr4_v4.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-CrU_O3n6.js";import"./product-Item-button-HOA19DKx.js";import"./plan-product-table-Bki2VIc2.js";import"./table-head-custom-BdFVGoLn.js";import"./TableCell-BrIZmqgS.js";import"./Checkbox-D9Kygjd9.js";import"./incrementer-button-BdPdnwnA.js";import"./TextField-SbZqCQXc.js";import"./FormControl-pEipRvY2.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CtA-6Ha1.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BkqI8r49.js";import"./Select-D9qKJtxp.js";import"./Menu-BDXnOmeW.js";import"./InputBase-CngNuOhd.js";import"./FormHelperText-DGNKCr7Q.js";import"./InputAdornment-CcMUVLGV.js";import"./DatePicker-Dffai1lP.js";import"./index-BT-WjpOH.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-CvCwHI3o.js";import"./ListItem-Dj6rXR1V.js";import"./Chip-BEEMMiur.js";function j({products:o,plan:t}){return r.jsxs(p,{children:[r.jsx(h,{heading:"Edit Plan",links:[{name:"Dashboard",href:s.dashboard.root},{name:"Plan",href:s.dashboard.plan.root},{name:"Edit Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(f,{products:o,plan:t})]})}const P={title:`Create a new Plan | Dashboard - ${l.site.name}`};function Y(){const{id:o=""}=x(),t=m({queryKey:["plan",o],queryFn:async()=>(await e.get(n.plan.details+o)).data}),a=m({queryKey:["products"],queryFn:async()=>{const{data:i}=await e.get(n.products.list);return i}});return a.isLoading||t.isLoading?r.jsx(d,{}):t.isError||a.isError?r.jsx(c,{route:s.dashboard.plan.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",P.title]})}),r.jsx(j,{products:a.data,plan:t.data})]})}export{Y as default};
