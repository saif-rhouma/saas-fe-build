import{j as r,dT as n,p as d,H as u,C as c,dp as p,dm as m}from"./index-Dvl3VeO0.js";import{u as a,E as f}from"./error-block-TT69l2zA.js";import{u as y}from"./use-params-CR8IcD5j.js";import{S as l}from"./staff-create-view-B6DE9yOo.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-_FwemDTr.js";import"./form-provider-QfLA6zYj.js";import"./TextField-QDA6zvJI.js";import"./FormControl-B3amwCrD.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DZrjCI_4.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-awknr6vx.js";import"./Select-Cf3n4oRp.js";import"./Menu-BC_JdC8u.js";import"./InputBase-DE-5St_7.js";import"./FormHelperText-GLVUBjRJ.js";import"./Rating-DEBIsfq0.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-J8k5nnz0.js";import"./index-DErg1Wue.js";import"./Slider-TEMan32d.js";import"./RadioGroup-DxXAaDOd.js";import"./FormGroup-BzPBOtz6.js";import"./FormControlLabel-BOpR_Kmc.js";import"./utils-DH8QyFqU.js";import"./index-HsKNJAf-.js";import"./countries-DSLisFCy.js";import"./InputAdornment-GHeACViv.js";import"./Autocomplete-DBHfSqoz.js";import"./Chip-Nd1H2Jg5.js";import"./country-select-B0i5eMSS.js";import"./Checkbox-C1HbPLBs.js";import"./upload-avatar-Cdo9Q1bb.js";import"./format-number-CSQYph-y.js";import"./image-BAN6lPg0.js";import"./DatePicker-CmiqPdqb.js";import"./DialogContent-DN7CIu2t.js";import"./ListItem-DPYUINX0.js";import"./MobileDateTimePicker-BMLO8g1f.js";import"./Tabs-C0KrTadl.js";import"./KeyboardArrowRight-D4_r8wm4.js";import"./useMutation-B8wrmgCg.js";import"./schema-helper-NuYkrOuq.js";import"./AccordionSummary-DF4svdN3.js";const g={title:`User edit | Dashboard - ${c.site.name}`};function dr(){const{id:e=""}=y(),i=a({queryKey:["staff",e],queryFn:async()=>{const{data:t}=await p.get(m.staff.details+e);return t}}),o=a({queryKey:["permissions"],queryFn:async()=>{const{data:t}=await p.get(m.permissions.list);return t}}),s=a({queryKey:["permissions-groups"],queryFn:async()=>{const{data:t}=await p.get(m.permissionsGroup.list);return t}});return o.isLoading||i.isLoading||s.isLoading?r.jsx(n,{}):i.isError||o.isError||s.isError?r.jsx(f,{route:d.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",g.title]})}),r.jsx(l,{currentStaff:i.data,appPermissions:o.data,appPermissionsGroup:s.data})]})}export{dr as default};
