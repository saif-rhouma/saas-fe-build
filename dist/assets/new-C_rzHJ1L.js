import{j as r,dP as i,p as o,dT as s,H as m,C as e,dp as p,dm as n}from"./index-Dvl3VeO0.js";import{u as d,E as u}from"./error-block-TT69l2zA.js";import{C as c}from"./custom-breadcrumbs-_FwemDTr.js";import{P as l}from"./plan-new-edit-form-B_ZB04sU.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-B8wrmgCg.js";import"./use-table-1wo4byN4.js";import"./product-Item-button-gXc5artA.js";import"./component-pagination-custom-C83t5ozP.js";import"./TablePagination-DGpFnJ22.js";import"./KeyboardArrowRight-D4_r8wm4.js";import"./LastPage-BuQEBiwt.js";import"./TableCell-Dj1NjyEW.js";import"./Select-Cf3n4oRp.js";import"./Menu-BC_JdC8u.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DE-5St_7.js";import"./plan-product-table-CCrEL2fZ.js";import"./table-head-custom-Cf-Z0H6l.js";import"./Checkbox-C1HbPLBs.js";import"./incrementer-button-CthZMkfY.js";import"./TextField-QDA6zvJI.js";import"./FormControl-B3amwCrD.js";import"./InputLabel-DZrjCI_4.js";import"./FormLabel-awknr6vx.js";import"./FormHelperText-GLVUBjRJ.js";import"./InputAdornment-GHeACViv.js";import"./DatePicker-CmiqPdqb.js";import"./index-HsKNJAf-.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-DN7CIu2t.js";import"./ListItem-DPYUINX0.js";import"./Chip-Nd1H2Jg5.js";function x({products:t}){return r.jsxs(i,{children:[r.jsx(c,{heading:"Create a new Plan",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Plan",href:o.dashboard.plan.root},{name:"Add Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(l,{products:t})]})}const h={title:`Create a new Plan | Dashboard - ${e.site.name}`};function Z(){const t=d({queryKey:["products"],queryFn:async()=>{const{data:a}=await p.get(n.products.list);return a}});return t.isLoading?r.jsx(s,{}):t.isError?r.jsx(u,{route:o.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(m,{children:r.jsxs("title",{children:[" ",h.title]})}),r.jsx(x,{products:t.data})]})}export{Z as default};
