import{j as r,dT as e,p as a,H as n,C as u,dp as s,dm as p}from"./index-Dvl3VeO0.js";import{u as m,E as d}from"./error-block-TT69l2zA.js";import{S as c}from"./staff-create-view-B6DE9yOo.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-_FwemDTr.js";import"./form-provider-QfLA6zYj.js";import"./TextField-QDA6zvJI.js";import"./FormControl-B3amwCrD.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DZrjCI_4.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-awknr6vx.js";import"./Select-Cf3n4oRp.js";import"./Menu-BC_JdC8u.js";import"./InputBase-DE-5St_7.js";import"./FormHelperText-GLVUBjRJ.js";import"./Rating-DEBIsfq0.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-J8k5nnz0.js";import"./index-DErg1Wue.js";import"./Slider-TEMan32d.js";import"./RadioGroup-DxXAaDOd.js";import"./FormGroup-BzPBOtz6.js";import"./FormControlLabel-BOpR_Kmc.js";import"./utils-DH8QyFqU.js";import"./index-HsKNJAf-.js";import"./countries-DSLisFCy.js";import"./InputAdornment-GHeACViv.js";import"./Autocomplete-DBHfSqoz.js";import"./Chip-Nd1H2Jg5.js";import"./country-select-B0i5eMSS.js";import"./Checkbox-C1HbPLBs.js";import"./upload-avatar-Cdo9Q1bb.js";import"./format-number-CSQYph-y.js";import"./image-BAN6lPg0.js";import"./DatePicker-CmiqPdqb.js";import"./DialogContent-DN7CIu2t.js";import"./ListItem-DPYUINX0.js";import"./MobileDateTimePicker-BMLO8g1f.js";import"./Tabs-C0KrTadl.js";import"./KeyboardArrowRight-D4_r8wm4.js";import"./useMutation-B8wrmgCg.js";import"./schema-helper-NuYkrOuq.js";import"./AccordionSummary-DF4svdN3.js";const f={title:`Create a new user | Dashboard - ${u.site.name}`};function mr(){const t=m({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await s.get(p.permissions.list);return o}}),i=m({queryKey:["permissions-groups"],queryFn:async()=>{const{data:o}=await s.get(p.permissionsGroup.list);return o}});return i.isLoading||t.isLoading?r.jsx(e,{}):t.isError||i.isError?r.jsx(d,{route:a.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",f.title]})}),r.jsx(c,{appPermissions:t.data,appPermissionsGroup:i.data})]})}export{mr as default};
