import{j as r,dQ as p,p as i,dU as d,H as u,C as l,dp as e,dm as m}from"./index-dT1vCng0.js";import{u as n,E as c}from"./error-block-Da0Sg8G5.js";import{u as x}from"./use-params-BOYhUDZB.js";import{C as h}from"./custom-breadcrumbs-CRMkz5HZ.js";import{P as f}from"./plan-new-edit-form-CZdajGA7.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-CWpoQFoP.js";import"./use-table-C1OZslkl.js";import"./product-Item-button-kbrZxGU-.js";import"./component-pagination-custom-eZHXYlxO.js";import"./TablePagination-C1oTGlnz.js";import"./KeyboardArrowRight-DDU4Yld7.js";import"./LastPage-BrCbxUli.js";import"./TableCell-BMxfZsCW.js";import"./Select-CkxH8YCA.js";import"./Menu-_pIQorIt.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-J8z2d7JP.js";import"./plan-product-table-rsNzKyfr.js";import"./table-head-custom-D7pI5rlH.js";import"./Checkbox-BALPzs0u.js";import"./incrementer-button-BXF4lnxL.js";import"./TextField-XTE0wU-C.js";import"./FormControl-DbqD7KBb.js";import"./InputLabel-3tUFrxKx.js";import"./FormLabel-D0giXt1x.js";import"./FormHelperText-DdVHoqO8.js";import"./InputAdornment-Dl5rVrZF.js";import"./DatePicker-DHryTCEu.js";import"./index-DT43InuW.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-Dtys1wsH.js";import"./ListItem-DSSWjBOG.js";import"./Chip-CVwc7X4-.js";function j({products:o,plan:t}){return r.jsxs(p,{children:[r.jsx(h,{heading:"Edit Plan",links:[{name:"Dashboard",href:i.dashboard.root},{name:"Plan",href:i.dashboard.plan.root},{name:"Edit Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(f,{products:o,plan:t})]})}const P={title:`Create a new Plan | Dashboard - ${l.site.name}`};function or(){const{id:o=""}=x(),t=n({queryKey:["plan",o],queryFn:async()=>(await e.get(m.plan.details+o)).data}),a=n({queryKey:["products"],queryFn:async()=>{const{data:s}=await e.get(m.products.list);return s}});return a.isLoading||t.isLoading?r.jsx(d,{}):t.isError||a.isError?r.jsx(c,{route:i.dashboard.plan.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",P.title]})}),r.jsx(j,{products:a.data,plan:t.data})]})}export{or as default};
