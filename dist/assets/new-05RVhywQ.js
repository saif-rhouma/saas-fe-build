import{j as r,dP as s,p as o,dT as i,H as e,C as m,dp as n,dm as p}from"./index-BUrqGYHV.js";import{u as d,E as u}from"./error-block-DN8xkUHk.js";import{C as c}from"./custom-breadcrumbs-CBrfH2jq.js";import{P as l}from"./plan-new-edit-form-BTYpsEM2.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-rgqrqyyl.js";import"./product-Item-button-CbYLdot3.js";import"./plan-product-table-DPPdEKxm.js";import"./table-head-custom-B0fXVQKp.js";import"./TableCell-emlbuQ_R.js";import"./Checkbox-CulbxVIZ.js";import"./incrementer-button-DOlXZpze.js";import"./TextField-DKFa5Z7P.js";import"./FormControl-C8Ce0ygl.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CVATPChb.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-QZ-E46AU.js";import"./Select-LbnHio0-.js";import"./Menu-CLp5I9kG.js";import"./InputBase-Csxyl5rk.js";import"./FormHelperText-DGaNYjrP.js";import"./InputAdornment-rFmxgjL2.js";import"./DatePicker-B6_5nW4I.js";import"./index-CjG6lXZs.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-Da2XAroL.js";import"./ListItem-Cz45n01_.js";import"./Chip-DSPCc92b.js";function x({products:t}){return r.jsxs(s,{children:[r.jsx(c,{heading:"Create a new Plan",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Plan",href:o.dashboard.plan.root},{name:"Add Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(l,{products:t})]})}const h={title:`Create a new Plan | Dashboard - ${m.site.name}`};function M(){const t=d({queryKey:["products"],queryFn:async()=>{const{data:a}=await n.get(p.products.list);return a}});return t.isLoading?r.jsx(i,{}):t.isError?r.jsx(u,{route:o.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(e,{children:r.jsxs("title",{children:[" ",h.title]})}),r.jsx(x,{products:t.data})]})}export{M as default};
