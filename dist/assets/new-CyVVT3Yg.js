import{j as r,dP as i,p as o,dT as s,H as m,C as e,dp as p,dm as n}from"./index-Blsk_n2J.js";import{u as d,E as u}from"./error-block-Cp70Gs-C.js";import{C as c}from"./custom-breadcrumbs-DQl07oU5.js";import{P as l}from"./plan-new-edit-form-BZeJM4RJ.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-9mDdNxrY.js";import"./use-table-CvyqwdTr.js";import"./product-Item-button-DCUi9jga.js";import"./component-pagination-custom-D25rUjNL.js";import"./TablePagination-DLd8oQnP.js";import"./KeyboardArrowRight-DwIijAwp.js";import"./LastPage-Bbja-U1X.js";import"./TableCell-pdyLDV8n.js";import"./Select-ee9RPtAk.js";import"./Menu-CZN5SQuC.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-cMEccQYG.js";import"./plan-product-table-gJL_--Qb.js";import"./table-head-custom-cPV8HOCy.js";import"./Checkbox-B-93dYv5.js";import"./incrementer-button-C2DOpqm8.js";import"./TextField-BKSxA_Cs.js";import"./FormControl-qbY7_VIN.js";import"./InputLabel-BYZCvd35.js";import"./FormLabel-Bl7YzlTQ.js";import"./FormHelperText-CHZY3fg7.js";import"./InputAdornment-BWmNxI1m.js";import"./DatePicker-BcikrSOj.js";import"./index-DstcX7rq.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-CB0eeVYr.js";import"./ListItem-D58zR2IT.js";import"./Chip-BrbLQ3s5.js";function x({products:t}){return r.jsxs(i,{children:[r.jsx(c,{heading:"Create a new Plan",links:[{name:"Dashboard",href:o.dashboard.root},{name:"Plan",href:o.dashboard.plan.root},{name:"Add Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(l,{products:t})]})}const h={title:`Create a new Plan | Dashboard - ${e.site.name}`};function Z(){const t=d({queryKey:["products"],queryFn:async()=>{const{data:a}=await p.get(n.products.list);return a}});return t.isLoading?r.jsx(s,{}):t.isError?r.jsx(u,{route:o.dashboard.products.root}):r.jsxs(r.Fragment,{children:[r.jsx(m,{children:r.jsxs("title",{children:[" ",h.title]})}),r.jsx(x,{products:t.data})]})}export{Z as default};
