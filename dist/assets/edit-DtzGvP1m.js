import{j as r,dP as p,p as i,dT as d,H as u,C as l,dp as e,dm as m}from"./index-ElVqIGcB.js";import{u as n,E as c}from"./error-block-D1Wv1ibr.js";import{u as x}from"./use-params-CTM69Leb.js";import{C as h}from"./custom-breadcrumbs-CBqi865E.js";import{P as f}from"./plan-new-edit-form-DfeE3FYs.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-Bncb4rlV.js";import"./use-table-CkfRkHqo.js";import"./product-Item-button-D8sWJVLc.js";import"./component-pagination-custom-CBfaS8Ce.js";import"./TablePagination-C85A18cO.js";import"./KeyboardArrowRight-BusmjiF6.js";import"./LastPage-ZzH3xXhT.js";import"./TableCell-B_LOBPFc.js";import"./Select-_pqpK2mU.js";import"./Menu-DkcwaS5T.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-zeET2Sei.js";import"./plan-product-table-Df6ZBKFH.js";import"./table-head-custom-Bna6vkEk.js";import"./Checkbox-C2uYWbTl.js";import"./incrementer-button-DIV5aQeT.js";import"./TextField-CiF1hxc-.js";import"./FormControl-T65SLQDL.js";import"./InputLabel-D_pXLzl4.js";import"./FormLabel-B9_mBwZG.js";import"./FormHelperText-CTeFjG1s.js";import"./InputAdornment-CFGayAjm.js";import"./DatePicker-B-tf4Oe2.js";import"./index-kkITcZCu.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-Duo2pg8C.js";import"./ListItem-D9Z1ce0i.js";import"./Chip-BFGN5bW6.js";function j({products:o,plan:t}){return r.jsxs(p,{children:[r.jsx(h,{heading:"Edit Plan",links:[{name:"Dashboard",href:i.dashboard.root},{name:"Plan",href:i.dashboard.plan.root},{name:"Edit Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(f,{products:o,plan:t})]})}const P={title:`Create a new Plan | Dashboard - ${l.site.name}`};function or(){const{id:o=""}=x(),t=n({queryKey:["plan",o],queryFn:async()=>(await e.get(m.plan.details+o)).data}),a=n({queryKey:["products"],queryFn:async()=>{const{data:s}=await e.get(m.products.list);return s}});return a.isLoading||t.isLoading?r.jsx(d,{}):t.isError||a.isError?r.jsx(c,{route:i.dashboard.plan.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",P.title]})}),r.jsx(j,{products:a.data,plan:t.data})]})}export{or as default};
