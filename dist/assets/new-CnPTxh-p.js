import{j as r,e8 as s,p as o,ec as i,H as e,C as m,dJ as n,dH as p}from"./index-yGbCRgTb.js";import{u as d,E as u}from"./error-block-DTJA4qog.js";import{C as c}from"./custom-breadcrumbs-BVoeLH7h.js";import{P as l}from"./plan-new-edit-form-CjSPlcUf.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-By1q-eS7.js";import"./product-Item-button-C91vQ0ay.js";import"./plan-product-table-qJXbf7-r.js";import"./table-head-custom-Dmu61VxH.js";import"./TableCell-kQtrcvwO.js";import"./Checkbox-CLReM-9f.js";import"./incrementer-button-DUj63JZv.js";import"./TextField-HI4be0gE.js";import"./FormControl-BZpoYGsF.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DnqBfGRt.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CZqAmIUK.js";import"./Select-q90WBvXR.js";import"./Menu-BP741PyP.js";import"./InputBase-DgymrakP.js";import"./FormHelperText-Dnev79N5.js";import"./InputAdornment-CcIxSkvC.js";import"./DatePicker-5fPzc3RP.js";import"./index-R0SYIoas.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-DMTZhSCC.js";import"./ListItem-CzWKnPSR.js";import"./Chip-Di1iaus5.js";function x({products:t}){return r.jsxs(s,{children:[r.jsx(c,{heading:"Create a new Plan",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Plan",href:o.dashboard.plan.root},{name:"Add Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(l,{products:t})]})}const h={title:`Create a new Plan | Dashboard - ${m.site.name}`};function T(){const t=d({queryKey:["products"],queryFn:async()=>{const{data:a}=await n.get(p.products.list);return a}});return t.isLoading?r.jsx(i,{}):t.isError?r.jsx(u,{route:o.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(e,{children:r.jsxs("title",{children:[" ",h.title]})}),r.jsx(x,{products:t.data})]})}export{T as default};
