import{j as r,e8 as p,p as s,ec as d,H as u,C as l,dJ as e,dH as n}from"./index-BHptOA6I.js";import{u as m,E as c}from"./error-block-Ud3MKpZ8.js";import{u as x}from"./use-params-CZPOh3iy.js";import{C as h}from"./custom-breadcrumbs-B2UF9gRN.js";import{P as f}from"./plan-new-edit-form-BOcfKadt.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./useMutation-PpHH8vvg.js";import"./product-Item-button-CiNl9Ctq.js";import"./plan-product-table-Dm3EmPHd.js";import"./table-head-custom-DTqHCDKd.js";import"./TableCell-zkyNesf-.js";import"./Checkbox-BavyM9xV.js";import"./incrementer-button-CwoBprA0.js";import"./TextField-BRnw8qFO.js";import"./FormControl-oD2GRha3.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DcjFGu9q.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-2Wv0vqaq.js";import"./Select-B_eI20e-.js";import"./Menu-C5yStwHf.js";import"./InputBase-JkTJu-C5.js";import"./FormHelperText-BiwR4I6s.js";import"./InputAdornment-D8S-yi-J.js";import"./DatePicker-B9-I2YkB.js";import"./index-fu32N19L.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-DQ9MPTYY.js";import"./ListItem-H_QQQr97.js";import"./Chip-BqV93oRv.js";function j({products:o,plan:t}){return r.jsxs(p,{children:[r.jsx(h,{heading:"Edit Plan",links:[{name:"Dashboard",href:s.dashboard.root},{name:"Plan",href:s.dashboard.plan.root},{name:"Edit Plan"}],sx:{mb:{xs:3,md:5}}}),r.jsx(f,{products:o,plan:t})]})}const P={title:`Create a new Plan | Dashboard - ${l.site.name}`};function Y(){const{id:o=""}=x(),t=m({queryKey:["plan",o],queryFn:async()=>(await e.get(n.plan.details+o)).data}),a=m({queryKey:["products"],queryFn:async()=>{const{data:i}=await e.get(n.products.list);return i}});return a.isLoading||t.isLoading?r.jsx(d,{}):t.isError||a.isError?r.jsx(c,{route:s.dashboard.plan.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",P.title]})}),r.jsx(j,{products:a.data,plan:t.data})]})}export{Y as default};
