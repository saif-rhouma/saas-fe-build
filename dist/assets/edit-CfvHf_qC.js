import{j as r,dP as p,p as i,dT as d,H as u,C as l,dp as e,dm as m}from"./index-CFpFDdmk.js";import{u as n,E as c}from"./error-block-Qb0JqWMo.js";import{u as x}from"./use-params-B-FmzFVH.js";import{C as h}from"./custom-breadcrumbs-BhZ5AQiJ.js";import{P as f}from"./plan-new-edit-form-CFfDETkC.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-BYxzZEeu.js";import"./use-table-DRwUskxu.js";import"./product-Item-button-iWuQ-HfF.js";import"./component-pagination-custom-QfPhwL3x.js";import"./TablePagination-Bod9RAXB.js";import"./KeyboardArrowRight-BWeVAAgH.js";import"./LastPage-B91oXYll.js";import"./TableCell-nk9uECyp.js";import"./Select-BlD-2uiB.js";import"./Menu-B68-fR6c.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-BlPzdlBf.js";import"./plan-product-table-rJgBkBAP.js";import"./table-head-custom-BYdbhTGG.js";import"./Checkbox-BgUXlmGv.js";import"./incrementer-button-C-kwnl1h.js";import"./TextField-DfM7FsMT.js";import"./FormControl-CNS-_KcR.js";import"./InputLabel-D-P4ONWN.js";import"./FormLabel-DSBvpxE-.js";import"./FormHelperText-CBSty0_k.js";import"./InputAdornment-CgLiqxs-.js";import"./DatePicker--R0iVwy6.js";import"./index-iy408cV1.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-__vH1XwO.js";import"./ListItem-C2-cLBAD.js";import"./Chip-B8Kj4THB.js";function j({products:o,plan:t}){return r.jsxs(p,{children:[r.jsx(h,{heading:"Edit Plan",links:[{name:"Dashboard",href:i.dashboard.root},{name:"Plan",href:i.dashboard.plan.root},{name:"Edit Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(f,{products:o,plan:t})]})}const P={title:`Create a new Plan | Dashboard - ${l.site.name}`};function or(){const{id:o=""}=x(),t=n({queryKey:["plan",o],queryFn:async()=>(await e.get(m.plan.details+o)).data}),a=n({queryKey:["products"],queryFn:async()=>{const{data:s}=await e.get(m.products.list);return s}});return a.isLoading||t.isLoading?r.jsx(d,{}):t.isError||a.isError?r.jsx(c,{route:i.dashboard.plan.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",P.title]})}),r.jsx(j,{products:a.data,plan:t.data})]})}export{or as default};