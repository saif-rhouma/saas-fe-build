import{j as r,dP as i,p as o,dT as s,H as m,C as e,dp as p,dm as n}from"./index-CRVB8F69.js";import{u as d,E as u}from"./error-block-0lRJvl3b.js";import{C as c}from"./custom-breadcrumbs-CBgeVjCX.js";import{P as l}from"./plan-new-edit-form-1FsQPNXa.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-Dv2OayGI.js";import"./use-table-CgXGbbdg.js";import"./product-Item-button-DLLiD92v.js";import"./component-pagination-custom-BxA8qO8g.js";import"./TablePagination-Ir8mqBBY.js";import"./KeyboardArrowRight-Bdp-RYnm.js";import"./LastPage-DtHFBiqB.js";import"./TableCell-DefBsglL.js";import"./Select-BWwgXsU9.js";import"./Menu-BM961z0Q.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DWgInsnL.js";import"./plan-product-table-DUTvyuAB.js";import"./table-head-custom-CJzwho5G.js";import"./Checkbox-ge_l6EJ8.js";import"./incrementer-button-cdRhxOCZ.js";import"./TextField-a9VrXvMJ.js";import"./FormControl-CFmGE2-k.js";import"./InputLabel-CixZ_02K.js";import"./FormLabel-OtvxlZPN.js";import"./FormHelperText-BjyTaFTe.js";import"./InputAdornment-6EHLKwyL.js";import"./DatePicker-CB0DQzBJ.js";import"./index-xSFMErMk.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-DTWdpBHx.js";import"./ListItem-Dj4qJ_SH.js";import"./Chip-C0F9v8Yk.js";function x({products:t}){return r.jsxs(i,{children:[r.jsx(c,{heading:"Create a new Plan",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Plan",href:o.dashboard.plan.root},{name:"Add Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(l,{products:t})]})}const h={title:`Create a new Plan | Dashboard - ${e.site.name}`};function Z(){const t=d({queryKey:["products"],queryFn:async()=>{const{data:a}=await p.get(n.products.list);return a}});return t.isLoading?r.jsx(s,{}):t.isError?r.jsx(u,{route:o.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(m,{children:r.jsxs("title",{children:[" ",h.title]})}),r.jsx(x,{products:t.data})]})}export{Z as default};