import{j as r,dT as a,p as n,H as u,C as d,dp as m,dm as p}from"./index-Dq-evvNl.js";import{u as e,E as c}from"./error-block-nGQZpI2j.js";import{u as l}from"./use-params-Bq6VCIGa.js";import{P as f}from"./permissions-group-create-view-DXMQpmXL.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-DYD97Ko9.js";import"./form-provider-CLgJHOie.js";import"./TextField-Cj_5F7nl.js";import"./FormControl-rslr5j42.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DrqOaPi2.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-KvD8cBJd.js";import"./Select-DakRlar9.js";import"./Menu-awnyzPDB.js";import"./InputBase-DZMojnGn.js";import"./FormHelperText-DKYsgWfz.js";import"./Rating-BhHRXvQ8.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-C0eyYd6u.js";import"./index-DLtZttU7.js";import"./Slider-DaRHCnHZ.js";import"./RadioGroup-De4mnBib.js";import"./FormGroup-DVGMIHJo.js";import"./FormControlLabel-DtZCRdlS.js";import"./utils-Cow0Z7-9.js";import"./index-BddAEl8_.js";import"./countries-DSLisFCy.js";import"./InputAdornment-D0OWjvDT.js";import"./Autocomplete-CfJdikie.js";import"./Chip-DkkWpaUw.js";import"./country-select-macTvWBb.js";import"./Checkbox-BTSXqwf7.js";import"./upload-avatar-B6qUmVqW.js";import"./format-number-CgtHpjZO.js";import"./image-DqZXN4JC.js";import"./DatePicker-BDITCi-y.js";import"./DialogContent-CkoNm3yi.js";import"./ListItem-DurlSp1S.js";import"./MobileDateTimePicker-SmNGTmTd.js";import"./Tabs-DXuaWaaF.js";import"./KeyboardArrowRight-B4UEHxjn.js";import"./useMutation-C3T1Hyn7.js";const x={title:`Permissions Group edit | Dashboard - ${d.site.name}`};function er(){const{id:s=""}=l(),t=e({queryKey:["permissions-group",s],queryFn:async()=>{const{data:o}=await m.get(p.permissionsGroup.details+s);return o}}),i=e({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await m.get(p.permissions.list);return o}});return i.isLoading||t.isLoading?r.jsx(a,{}):t.isError||i.isError?r.jsx(c,{route:n.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",x.title]})}),r.jsx(f,{currentPermission:t.data,appPermissions:i.data})]})}export{er as default};
