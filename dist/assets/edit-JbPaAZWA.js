import{j as r,dP as p,p as i,dT as d,H as u,C as l,dp as e,dm as m}from"./index-DA_sWj7x.js";import{u as n,E as c}from"./error-block-C851bBpn.js";import{u as x}from"./use-params-Bq4zbjg5.js";import{C as h}from"./custom-breadcrumbs-Dz51tEwQ.js";import{P as f}from"./plan-new-edit-form-B76xzuY8.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-CzAuz-nV.js";import"./use-table-BEB4mKPu.js";import"./product-Item-button-BUa5-lIR.js";import"./component-pagination-custom-NUXLUKjY.js";import"./TablePagination-OhwqDisP.js";import"./KeyboardArrowRight-BY1WhlU8.js";import"./LastPage-_Emt8W-B.js";import"./TableCell-wGSlznO8.js";import"./Select-D9yQfH_l.js";import"./Menu-COzu8Q58.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DdR0vOej.js";import"./plan-product-table-CD8E5XSC.js";import"./table-head-custom-CHZjCMuG.js";import"./Checkbox-DlkIc83d.js";import"./incrementer-button-CZkmblIv.js";import"./TextField-BQRcm5r-.js";import"./FormControl-DTxFu6gc.js";import"./InputLabel-boKuiNtX.js";import"./FormLabel-BnVZ0dPm.js";import"./FormHelperText-B0Lo5puV.js";import"./InputAdornment-7VEY_HFv.js";import"./DatePicker-DTE5o5_B.js";import"./index-E2ErbIOV.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-BquOMge6.js";import"./ListItem-BwcFEdmT.js";import"./Chip-DviT2eOB.js";function j({products:o,plan:t}){return r.jsxs(p,{children:[r.jsx(h,{heading:"Edit Plan",links:[{name:"Dashboard",href:i.dashboard.root},{name:"Plan",href:i.dashboard.plan.root},{name:"Edit Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(f,{products:o,plan:t})]})}const P={title:`Create a new Plan | Dashboard - ${l.site.name}`};function or(){const{id:o=""}=x(),t=n({queryKey:["plan",o],queryFn:async()=>(await e.get(m.plan.details+o)).data}),a=n({queryKey:["products"],queryFn:async()=>{const{data:s}=await e.get(m.products.list);return s}});return a.isLoading||t.isLoading?r.jsx(d,{}):t.isError||a.isError?r.jsx(c,{route:i.dashboard.plan.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",P.title]})}),r.jsx(j,{products:a.data,plan:t.data})]})}export{or as default};
