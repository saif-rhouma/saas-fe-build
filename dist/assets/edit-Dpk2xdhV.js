import{j as r,dP as p,p as i,dT as d,H as u,C as l,dp as e,dm as m}from"./index-Bd-eTnUo.js";import{u as n,E as c}from"./error-block-BS5tpnF6.js";import{u as x}from"./use-params-mGjHkfG-.js";import{C as h}from"./custom-breadcrumbs-DTO7Kcnb.js";import{P as f}from"./plan-new-edit-form-CbSx6EUd.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-u5J1ehDK.js";import"./use-table-u_7TBFPr.js";import"./product-Item-button-DtWod1L2.js";import"./component-pagination-custom-BEYB2ght.js";import"./TablePagination-oOIHrBkR.js";import"./KeyboardArrowRight-Do0Z-cRD.js";import"./LastPage-CMwRe5Xs.js";import"./TableCell-GBTARU-z.js";import"./Select-CgDIp826.js";import"./Menu-DsAfc42u.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-Bi4j64cN.js";import"./plan-product-table-CjCJu-qP.js";import"./table-head-custom-Bxkk-Jk_.js";import"./Checkbox-k73MRx-8.js";import"./incrementer-button-DSJd2HUt.js";import"./TextField-vLvEPjtq.js";import"./FormControl-foeg92WO.js";import"./InputLabel-sjrS-T3g.js";import"./FormLabel-CGKWwmwk.js";import"./FormHelperText-B5ubrhII.js";import"./InputAdornment-lZ34KsGy.js";import"./DatePicker-CkmrGU-z.js";import"./index-uXQ4a3gx.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-CSJWAbbl.js";import"./ListItem-CVBleuHu.js";import"./Chip-Dr3NBI2P.js";function j({products:o,plan:t}){return r.jsxs(p,{children:[r.jsx(h,{heading:"Edit Plan",links:[{name:"Dashboard",href:i.dashboard.root},{name:"Plan",href:i.dashboard.plan.root},{name:"Edit Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(f,{products:o,plan:t})]})}const P={title:`Create a new Plan | Dashboard - ${l.site.name}`};function or(){const{id:o=""}=x(),t=n({queryKey:["plan",o],queryFn:async()=>(await e.get(m.plan.details+o)).data}),a=n({queryKey:["products"],queryFn:async()=>{const{data:s}=await e.get(m.products.list);return s}});return a.isLoading||t.isLoading?r.jsx(d,{}):t.isError||a.isError?r.jsx(c,{route:i.dashboard.plan.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",P.title]})}),r.jsx(j,{products:a.data,plan:t.data})]})}export{or as default};