import{j as r,dT as e,p as a,H as n,C as u,dn as s,dl as p}from"./index-CDcUgrfM.js";import{u as m,E as d}from"./error-block-XWJxuTVo.js";import{S as c}from"./staff-create-view-DfjYMAOl.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-BL_vTuJF.js";import"./form-provider-DPEGnoLi.js";import"./TextField-BuUBnZDj.js";import"./FormControl-C7WzToVA.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DFNFmoZn.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-e37nWMJI.js";import"./Select-BZojGQgr.js";import"./Menu--HgoqF6K.js";import"./InputBase-jbxmQqqV.js";import"./FormHelperText-CpMJHbvL.js";import"./Rating-w3dgxeCA.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-CGxeH7db.js";import"./index-h55rDlR6.js";import"./Slider-Cc_JEzEp.js";import"./RadioGroup-SuhSugdB.js";import"./FormGroup-D7ycBH1u.js";import"./FormControlLabel-C9Nh_YCW.js";import"./index-DkkRrZbX.js";import"./countries-DSLisFCy.js";import"./InputAdornment-C4RBZEHJ.js";import"./Autocomplete-BXgXmYj0.js";import"./Chip-CVtkDWmm.js";import"./country-select-BMAkVgNz.js";import"./Checkbox-BxyuHg5r.js";import"./upload-avatar-D77EIrlr.js";import"./format-number-K3MYeV6b.js";import"./image-C4WktV16.js";import"./DatePicker-D6wu5-8l.js";import"./DialogContent-B3AK0H-W.js";import"./ListItem-D2_hmcct.js";import"./MobileDateTimePicker-BKtNADfB.js";import"./Tabs-0KFgPQsD.js";import"./KeyboardArrowRight-BY3fczxh.js";import"./useMutation-BWrcWSYi.js";const l={title:`Create a new user | Dashboard - ${u.site.name}`};function or(){const t=m({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await s.get(p.permissions.list);return o}}),i=m({queryKey:["permissions-groups"],queryFn:async()=>{const{data:o}=await s.get(p.permissionsGroup.list);return o}});return i.isLoading||t.isLoading?r.jsx(e,{}):t.isError||i.isError?r.jsx(d,{route:a.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",l.title]})}),r.jsx(c,{appPermissions:t.data,appPermissionsGroup:i.data})]})}export{or as default};
