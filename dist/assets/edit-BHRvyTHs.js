import{j as r,dP as p,p as i,dT as d,H as u,C as l,dp as e,dm as m}from"./index-CsblB989.js";import{u as n,E as c}from"./error-block-D1JbtCwV.js";import{u as x}from"./use-params-Jai1bAdL.js";import{C as h}from"./custom-breadcrumbs-DQYYRO8w.js";import{P as f}from"./plan-new-edit-form-CvCnQzQq.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-BnUM9G4D.js";import"./use-table-Cr_xCBhr.js";import"./product-Item-button-4_fD-W8l.js";import"./component-pagination-custom-CDBFKrw7.js";import"./TablePagination-C2aJ-ypH.js";import"./KeyboardArrowRight-C60ssb8G.js";import"./LastPage-BeFQa4EJ.js";import"./TableCell-Kq_FkOs_.js";import"./Select-LbLUteKL.js";import"./Menu-B2ldK29l.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-CnDGZDGH.js";import"./plan-product-table-PHsr6SEV.js";import"./table-head-custom-vARtgwXs.js";import"./Checkbox-BYMqAuwK.js";import"./incrementer-button-BbFbxcBt.js";import"./TextField-C0rr15oK.js";import"./FormControl-N3NVqOJu.js";import"./InputLabel-DrDrx2-z.js";import"./FormLabel-B95ccZTf.js";import"./FormHelperText-tmkQoI7S.js";import"./InputAdornment-B27KTbFt.js";import"./DatePicker-CDV3q_Jx.js";import"./index-BMmrxPl5.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-D71n8k4T.js";import"./ListItem-HYEjvoe-.js";import"./Chip-_qt5A1XL.js";function j({products:o,plan:t}){return r.jsxs(p,{children:[r.jsx(h,{heading:"Edit Plan",links:[{name:"Dashboard",href:i.dashboard.root},{name:"Plan",href:i.dashboard.plan.root},{name:"Edit Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(f,{products:o,plan:t})]})}const P={title:`Create a new Plan | Dashboard - ${l.site.name}`};function or(){const{id:o=""}=x(),t=n({queryKey:["plan",o],queryFn:async()=>(await e.get(m.plan.details+o)).data}),a=n({queryKey:["products"],queryFn:async()=>{const{data:s}=await e.get(m.products.list);return s}});return a.isLoading||t.isLoading?r.jsx(d,{}):t.isError||a.isError?r.jsx(c,{route:i.dashboard.plan.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",P.title]})}),r.jsx(j,{products:a.data,plan:t.data})]})}export{or as default};