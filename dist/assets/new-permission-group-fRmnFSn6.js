import{j as r,dT as o,p as m,H as p,C as s,dp as e,dm as a}from"./index-7x0Jzu-K.js";import{u as n,E as d}from"./error-block-D00Vx1n_.js";import{P as u}from"./permissions-group-create-view-D6u39mbq.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-D7fqN-ij.js";import"./form-provider-L4HXF3hb.js";import"./TextField-DM-8f0BQ.js";import"./FormControl-CwgFqIpY.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CJ9sg_Jr.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-ChZcLmvt.js";import"./Select-BZc5REn1.js";import"./Menu-B1dt3wvU.js";import"./InputBase-Bf6dB4gm.js";import"./FormHelperText-DXUXEoCg.js";import"./Rating-DCB2jqoU.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-Bx-A_rYM.js";import"./index-DNxFhLTH.js";import"./Slider-CmH7wyJF.js";import"./RadioGroup-Be2nemTL.js";import"./FormGroup-dOY1iFws.js";import"./FormControlLabel-BkxrN50L.js";import"./utils-BKVZXmx9.js";import"./index-BCeO1QHE.js";import"./countries-DSLisFCy.js";import"./InputAdornment-Cy6JkpYJ.js";import"./Autocomplete-Y9_S23We.js";import"./Chip-BqIxCVbz.js";import"./country-select-CiBbKvWF.js";import"./Checkbox-4dEQ1AxH.js";import"./upload-avatar-Cx6DIh4F.js";import"./format-number-BYwLqIh3.js";import"./image-CdiR8fRs.js";import"./DatePicker-DNImynf8.js";import"./DialogContent-DR8-NI-y.js";import"./ListItem-Bl8LEqBl.js";import"./MobileDateTimePicker-C1e3BYNb.js";import"./Tabs-DBbaXAIS.js";import"./KeyboardArrowRight-BVBZSuVb.js";import"./useMutation-Dv_B02Gt.js";const c={title:`Create a new Permissions Group | Dashboard - ${s.site.name}`};function or(){const t=n({queryKey:["permissions"],queryFn:async()=>{const{data:i}=await e.get(a.permissions.list);return i}});return t.isPending||t.isLoading?r.jsx(o,{}):t.isError?r.jsx(d,{route:m.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(p,{children:r.jsxs("title",{children:[" ",c.title]})}),r.jsx(u,{appPermissions:t.data})]})}export{or as default};