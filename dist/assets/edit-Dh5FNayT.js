import{j as r,e8 as p,p as s,ec as d,H as u,C as l,dJ as e,dH as n}from"./index-Cq03K-HC.js";import{u as m,E as c}from"./error-block-CBMWt84f.js";import{u as x}from"./use-params-BoBy_i4u.js";import{C as h}from"./custom-breadcrumbs-C_F-6vOC.js";import{P as f}from"./plan-new-edit-form-BMWmQ6hU.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-Dp0rVztm.js";import"./product-Item-button-9ZeFIKBl.js";import"./plan-product-table-BCg58bpA.js";import"./table-head-custom-xPqHms_A.js";import"./TableCell-BY4odiRW.js";import"./Checkbox-B5P4NoLN.js";import"./incrementer-button-D87DqIoS.js";import"./TextField-BNZ3YpVQ.js";import"./FormControl-DUlfZx4z.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-D6SX5sCR.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bx5V1G4l.js";import"./Select-BJK6Q71-.js";import"./Menu-B_EWYTTU.js";import"./InputBase-CPtucf_J.js";import"./FormHelperText-BdgqWWO0.js";import"./InputAdornment-B7jHbOut.js";import"./DatePicker-C0kjDQAX.js";import"./index-DqNxVOmH.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-D0WbZEYR.js";import"./ListItem-Dwol_2rN.js";import"./Chip-x2W7r02e.js";function j({products:o,plan:t}){return r.jsxs(p,{children:[r.jsx(h,{heading:"Edit Plan",links:[{name:"Dashboard",href:s.dashboard.root},{name:"Plan",href:s.dashboard.plan.root},{name:"Edit Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(f,{products:o,plan:t})]})}const P={title:`Create a new Plan | Dashboard - ${l.site.name}`};function Y(){const{id:o=""}=x(),t=m({queryKey:["plan",o],queryFn:async()=>(await e.get(n.plan.details+o)).data}),a=m({queryKey:["products"],queryFn:async()=>{const{data:i}=await e.get(n.products.list);return i}});return a.isLoading||t.isLoading?r.jsx(d,{}):t.isError||a.isError?r.jsx(c,{route:s.dashboard.plan.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",P.title]})}),r.jsx(j,{products:a.data,plan:t.data})]})}export{Y as default};
