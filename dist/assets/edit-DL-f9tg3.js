import{j as r,e8 as p,p as s,ec as d,H as u,C as l,dJ as e,dH as n}from"./index-DyaX_SWt.js";import{u as m,E as c}from"./error-block-BS8v6UlH.js";import{u as x}from"./use-params-CpXzQcZE.js";import{C as h}from"./custom-breadcrumbs-BBBfmruK.js";import{P as f}from"./plan-new-edit-form-B8wZNtIo.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-8JHOqP8G.js";import"./product-Item-button-BDBf__GM.js";import"./plan-product-table-C-YBpmt3.js";import"./table-head-custom-HNlYMA2_.js";import"./TableCell-KLTDlbM5.js";import"./Checkbox-DDVYLWrv.js";import"./incrementer-button-BZh1pJdV.js";import"./TextField-Bd-wf-qe.js";import"./FormControl-DZFzBqwu.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-ChQRcEq0.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BzUaSDH6.js";import"./Select-aW-1jYsc.js";import"./Menu-cdXnIe8s.js";import"./InputBase-DIwXicuG.js";import"./FormHelperText-DmigciDN.js";import"./InputAdornment-ZksuxZdO.js";import"./DatePicker-CrivbYTg.js";import"./index-DV-9sifZ.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-ji2na2-g.js";import"./ListItem-hwhAMnMr.js";import"./Chip-DagaBQru.js";function j({products:o,plan:t}){return r.jsxs(p,{children:[r.jsx(h,{heading:"Edit Plan",links:[{name:"Dashboard",href:s.dashboard.root},{name:"Plan",href:s.dashboard.plan.root},{name:"Edit Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(f,{products:o,plan:t})]})}const P={title:`Create a new Plan | Dashboard - ${l.site.name}`};function Y(){const{id:o=""}=x(),t=m({queryKey:["plan",o],queryFn:async()=>(await e.get(n.plan.details+o)).data}),a=m({queryKey:["products"],queryFn:async()=>{const{data:i}=await e.get(n.products.list);return i}});return a.isLoading||t.isLoading?r.jsx(d,{}):t.isError||a.isError?r.jsx(c,{route:s.dashboard.plan.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",P.title]})}),r.jsx(j,{products:a.data,plan:t.data})]})}export{Y as default};
