import{j as r,dP as p,p as i,dT as d,H as u,C as l,dp as e,dm as m}from"./index-7GQe5F-6.js";import{u as n,E as c}from"./error-block-CWBWKv2U.js";import{u as x}from"./use-params-fRwkYY-3.js";import{C as h}from"./custom-breadcrumbs-CJqbGMlg.js";import{P as f}from"./plan-new-edit-form-jorc8ngq.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-DOqshPAY.js";import"./use-table-D1ZmlE10.js";import"./product-Item-button-vOH5g7Vh.js";import"./component-pagination-custom-B3JLqnn3.js";import"./TablePagination-lwFf5bzz.js";import"./KeyboardArrowRight-B6XCIBLk.js";import"./LastPage-DwADpuBe.js";import"./TableCell-BFaYk1ac.js";import"./Select-BYxOPgh-.js";import"./Menu-BJC4bW8z.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-BKmYpMSb.js";import"./plan-product-table-Apzs2xTP.js";import"./table-head-custom-4WwMOc5T.js";import"./Checkbox-CkVZLqx8.js";import"./incrementer-button-UvVoypmv.js";import"./TextField-4W4gVD-H.js";import"./FormControl-Bz31E8ws.js";import"./InputLabel-c61ThEBt.js";import"./FormLabel-B3_Vo4Ci.js";import"./FormHelperText-CE2Rqgbm.js";import"./InputAdornment-C3ScqT6C.js";import"./DatePicker-78RBvtbI.js";import"./index-B6v7KWt-.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-B0WldI83.js";import"./ListItem-BRoQecal.js";import"./Chip-DgW9Rhz9.js";function j({products:o,plan:t}){return r.jsxs(p,{children:[r.jsx(h,{heading:"Edit Plan",links:[{name:"Dashboard",href:i.dashboard.root},{name:"Plan",href:i.dashboard.plan.root},{name:"Edit Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(f,{products:o,plan:t})]})}const P={title:`Create a new Plan | Dashboard - ${l.site.name}`};function or(){const{id:o=""}=x(),t=n({queryKey:["plan",o],queryFn:async()=>(await e.get(m.plan.details+o)).data}),a=n({queryKey:["products"],queryFn:async()=>{const{data:s}=await e.get(m.products.list);return s}});return a.isLoading||t.isLoading?r.jsx(d,{}):t.isError||a.isError?r.jsx(c,{route:i.dashboard.plan.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",P.title]})}),r.jsx(j,{products:a.data,plan:t.data})]})}export{or as default};