import{j as r,eb as s,p as o,ef as i,H as e,C as m,dM as n,dK as p}from"./index-C-IhHuTJ.js";import{u as d,E as u}from"./error-block-BR6CrtTz.js";import{C as c}from"./custom-breadcrumbs-uFAKtVA_.js";import{P as l}from"./plan-new-edit-form-550ssqYJ.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-CsQJW4rY.js";import"./product-Item-button-BkF4_gyf.js";import"./plan-product-table-C1PqAmbS.js";import"./table-head-custom-c1vpDJbN.js";import"./TableCell-YKx_Gzup.js";import"./Checkbox-OM-b9iKh.js";import"./incrementer-button-DdfFaMBt.js";import"./TextField-9UQBwjuM.js";import"./FormControl-Cqn5KMTu.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Di_kJ4FW.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Cjr_5zdF.js";import"./Select-aS6O7ajU.js";import"./Menu-CrioubDI.js";import"./InputBase-T30htlau.js";import"./FormHelperText-Bk0TYkV4.js";import"./InputAdornment-epef3vq8.js";import"./DatePicker-DCzcHVvE.js";import"./index-DW-YGTnX.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-7B2ADHjp.js";import"./ListItem-DoDVqw_C.js";import"./Chip-DE7nSvgd.js";function x({products:t}){return r.jsxs(s,{children:[r.jsx(c,{heading:"Create a new Plan",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Plan",href:o.dashboard.plan.root},{name:"Add Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(l,{products:t})]})}const h={title:`Create a new Plan | Dashboard - ${m.site.name}`};function T(){const t=d({queryKey:["products"],queryFn:async()=>{const{data:a}=await n.get(p.products.list);return a}});return t.isLoading?r.jsx(i,{}):t.isError?r.jsx(u,{route:o.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(e,{children:r.jsxs("title",{children:[" ",h.title]})}),r.jsx(x,{products:t.data})]})}export{T as default};
