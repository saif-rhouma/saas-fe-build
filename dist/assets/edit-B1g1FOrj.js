import{j as r,dT as n,p as d,H as u,C as c,dp as p,dm as m}from"./index-1idvz3yo.js";import{u as a,E as f}from"./error-block-vNz861xQ.js";import{u as y}from"./use-params-DOYLYWzc.js";import{S as l}from"./staff-create-view-Dk3APoRZ.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-Cd5BgAXC.js";import"./form-provider-CRkwJWgI.js";import"./TextField-Deyfex1l.js";import"./FormControl-e9sHLsS9.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-B7kGj3og.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-DnpLWzxD.js";import"./Select-BzV6E8A7.js";import"./Menu-Bh2_2QIQ.js";import"./InputBase-bYfGaHWI.js";import"./FormHelperText-D4hzGFD8.js";import"./Rating-DX-PCdge.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-D3n3GjcT.js";import"./index-CRahxoL1.js";import"./Slider-Co86ffvq.js";import"./RadioGroup-B8Dgslmt.js";import"./FormGroup-D7-JGyTF.js";import"./FormControlLabel-BSF48Dfl.js";import"./utils-WnNbXvdL.js";import"./index-BGw46kZf.js";import"./countries-DSLisFCy.js";import"./InputAdornment-lyNMHj9g.js";import"./Autocomplete-D-gYEvyh.js";import"./Chip-BvDqjkJu.js";import"./country-select-6TD4L1qU.js";import"./Checkbox-BE-qIa3l.js";import"./upload-avatar-kKzdYGMV.js";import"./format-number-CBFKJ_Xm.js";import"./image-DdCP0E-b.js";import"./DatePicker-CEGP_gWC.js";import"./DialogContent-DD2zYDfk.js";import"./ListItem-pRP8lI0N.js";import"./MobileDateTimePicker-CPvIs9e9.js";import"./Tabs-BXODOCZp.js";import"./KeyboardArrowRight-OJVnc1rR.js";import"./useMutation-BdU4esUD.js";const g={title:`User edit | Dashboard - ${c.site.name}`};function er(){const{id:e=""}=y(),i=a({queryKey:["staff",e],queryFn:async()=>{const{data:t}=await p.get(m.staff.details+e);return t}}),o=a({queryKey:["permissions"],queryFn:async()=>{const{data:t}=await p.get(m.permissions.list);return t}}),s=a({queryKey:["permissions-groups"],queryFn:async()=>{const{data:t}=await p.get(m.permissionsGroup.list);return t}});return o.isLoading||i.isLoading||s.isLoading?r.jsx(n,{}):i.isError||o.isError||s.isError?r.jsx(f,{route:d.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",g.title]})}),r.jsx(l,{currentStaff:i.data,appPermissions:o.data,appPermissionsGroup:s.data})]})}export{er as default};
