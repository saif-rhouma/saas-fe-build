import{j as r,dQ as i,p as o,dU as s,H as e,C as m,dq as p,dn as n}from"./index-3kUlxXkm.js";import{u as d,E as u}from"./error-block-BTCpMwIj.js";import{C as c}from"./custom-breadcrumbs-CQM3hT8w.js";import{P as l}from"./plan-new-edit-form-CsZmGo2j.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-DWyFExRk.js";import"./use-table-9MzCtmNE.js";import"./product-Item-button-aUsvkzkp.js";import"./component-pagination-custom-DLnjI_Fh.js";import"./TablePagination-CVcJMlXd.js";import"./KeyboardArrowRight-o7aJmcRm.js";import"./LastPage-FHI8cfYQ.js";import"./TableCell-YgDy_fKI.js";import"./Select-DOB8r047.js";import"./Menu-CsXXwNKW.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-Df4WeLlJ.js";import"./plan-product-table-Dh3muF1P.js";import"./table-head-custom-Bzh_BuNQ.js";import"./Checkbox-BPHZ30Zu.js";import"./incrementer-button-DlaR23JU.js";import"./TextField-Ff9PgcBD.js";import"./FormControl-BaWzc8Dl.js";import"./InputLabel-Df2ESQnA.js";import"./FormLabel-CX5M124t.js";import"./FormHelperText-47ensrNn.js";import"./InputAdornment-Ug97Thua.js";import"./DatePicker-vbOob6Xb.js";import"./index-BySBJlbP.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-BZuUPSmG.js";import"./ListItem-CBu29PKK.js";import"./Chip-yUQfyewU.js";function x({products:t}){return r.jsxs(i,{children:[r.jsx(c,{heading:"Create a new Plan",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Plan",href:o.dashboard.plan.root},{name:"Add Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(l,{products:t})]})}const h={title:`Create a new Plan | Dashboard - ${m.site.name}`};function Z(){const t=d({queryKey:["products"],queryFn:async()=>{const{data:a}=await p.get(n.products.list);return a}});return t.isLoading?r.jsx(s,{}):t.isError?r.jsx(u,{route:o.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(e,{children:r.jsxs("title",{children:[" ",h.title]})}),r.jsx(x,{products:t.data})]})}export{Z as default};
