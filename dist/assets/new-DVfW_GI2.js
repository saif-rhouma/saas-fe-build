import{j as r,dT as e,p as a,H as n,C as u,dp as s,dm as p}from"./index-CsblB989.js";import{u as m,E as d}from"./error-block-D1JbtCwV.js";import{S as c}from"./staff-create-view-CKwX1iyK.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-DQYYRO8w.js";import"./form-provider-Du6VuMoa.js";import"./TextField-C0rr15oK.js";import"./FormControl-N3NVqOJu.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DrDrx2-z.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-B95ccZTf.js";import"./Select-LbLUteKL.js";import"./Menu-B2ldK29l.js";import"./InputBase-CnDGZDGH.js";import"./FormHelperText-tmkQoI7S.js";import"./Rating-CZ82oMVe.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-CL68ZPGs.js";import"./index-BVsEWNMT.js";import"./Slider-DPAupNwA.js";import"./RadioGroup-CP1oF_P6.js";import"./FormGroup-DPnbPOcj.js";import"./FormControlLabel-SPUXYPf-.js";import"./utils-DOJdEOh4.js";import"./index-BMmrxPl5.js";import"./countries-DSLisFCy.js";import"./InputAdornment-B27KTbFt.js";import"./Autocomplete-BdC29jcZ.js";import"./Chip-_qt5A1XL.js";import"./country-select-BsoE5ktB.js";import"./Checkbox-BYMqAuwK.js";import"./upload-avatar-cbQBKvLv.js";import"./format-number-D9HQPhfy.js";import"./image-BZWDGRmV.js";import"./DatePicker-CDV3q_Jx.js";import"./DialogContent-D71n8k4T.js";import"./ListItem-HYEjvoe-.js";import"./MobileDateTimePicker-BbGrDX_d.js";import"./Tabs-Dkt6334O.js";import"./KeyboardArrowRight-C60ssb8G.js";import"./useMutation-BnUM9G4D.js";import"./schema-helper-Dz6Noijb.js";import"./AccordionSummary-By9I1vBr.js";const f={title:`Create a new user | Dashboard - ${u.site.name}`};function mr(){const t=m({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await s.get(p.permissions.list);return o}}),i=m({queryKey:["permissions-groups"],queryFn:async()=>{const{data:o}=await s.get(p.permissionsGroup.list);return o}});return i.isLoading||t.isLoading?r.jsx(e,{}):t.isError||i.isError?r.jsx(d,{route:a.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",f.title]})}),r.jsx(c,{appPermissions:t.data,appPermissionsGroup:i.data})]})}export{mr as default};
