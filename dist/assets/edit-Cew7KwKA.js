import{j as r,dP as p,p as i,dT as d,H as u,C as l,dp as e,dm as m}from"./index-BRWSQhLj.js";import{u as n,E as c}from"./error-block-CQJDxd_0.js";import{u as x}from"./use-params-Cbnuc0U9.js";import{C as h}from"./custom-breadcrumbs-Ch5Xqwj9.js";import{P as f}from"./plan-new-edit-form-BF8cdzcT.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-DFBepesY.js";import"./use-table-hjPNSI30.js";import"./product-Item-button-He-eqUXW.js";import"./component-pagination-custom-CLnSWpkz.js";import"./TablePagination-Dte63ISv.js";import"./KeyboardArrowRight-_gtD3CJF.js";import"./LastPage-CEy56j8W.js";import"./TableCell-CZnUlaW7.js";import"./Select-c5WOnzoP.js";import"./Menu-Qgp7_360.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DLvueaBe.js";import"./plan-product-table-RCKJjqPX.js";import"./table-head-custom-DHHtu9Bc.js";import"./Checkbox-BegWxMiW.js";import"./incrementer-button-DFfBa_d1.js";import"./TextField-DWlrw-uI.js";import"./FormControl-B1BaavBO.js";import"./InputLabel-BQ33YGuJ.js";import"./FormLabel-CbTb2PIY.js";import"./FormHelperText-Cf_wmt5H.js";import"./InputAdornment-C5ShVcra.js";import"./DatePicker-CFxLiWmV.js";import"./index-BoO187_o.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-Zpn99X2f.js";import"./ListItem-D7PnxC_O.js";import"./Chip-s78qHh-l.js";function j({products:o,plan:t}){return r.jsxs(p,{children:[r.jsx(h,{heading:"Edit Plan",links:[{name:"Dashboard",href:i.dashboard.root},{name:"Plan",href:i.dashboard.plan.root},{name:"Edit Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(f,{products:o,plan:t})]})}const P={title:`Create a new Plan | Dashboard - ${l.site.name}`};function or(){const{id:o=""}=x(),t=n({queryKey:["plan",o],queryFn:async()=>(await e.get(m.plan.details+o)).data}),a=n({queryKey:["products"],queryFn:async()=>{const{data:s}=await e.get(m.products.list);return s}});return a.isLoading||t.isLoading?r.jsx(d,{}):t.isError||a.isError?r.jsx(c,{route:i.dashboard.plan.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",P.title]})}),r.jsx(j,{products:a.data,plan:t.data})]})}export{or as default};
