import{j as r,dT as a,p as n,H as u,C as d,dp as m,dm as p}from"./index-CsblB989.js";import{u as e,E as c}from"./error-block-D1JbtCwV.js";import{u as l}from"./use-params-Jai1bAdL.js";import{P as f}from"./permissions-group-create-view-Ca5vHx7C.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-DQYYRO8w.js";import"./form-provider-Du6VuMoa.js";import"./TextField-C0rr15oK.js";import"./FormControl-N3NVqOJu.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DrDrx2-z.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-B95ccZTf.js";import"./Select-LbLUteKL.js";import"./Menu-B2ldK29l.js";import"./InputBase-CnDGZDGH.js";import"./FormHelperText-tmkQoI7S.js";import"./Rating-CZ82oMVe.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-CL68ZPGs.js";import"./index-BVsEWNMT.js";import"./Slider-DPAupNwA.js";import"./RadioGroup-CP1oF_P6.js";import"./FormGroup-DPnbPOcj.js";import"./FormControlLabel-SPUXYPf-.js";import"./utils-DOJdEOh4.js";import"./index-BMmrxPl5.js";import"./countries-DSLisFCy.js";import"./InputAdornment-B27KTbFt.js";import"./Autocomplete-BdC29jcZ.js";import"./Chip-_qt5A1XL.js";import"./country-select-BsoE5ktB.js";import"./Checkbox-BYMqAuwK.js";import"./upload-avatar-cbQBKvLv.js";import"./format-number-D9HQPhfy.js";import"./image-BZWDGRmV.js";import"./DatePicker-CDV3q_Jx.js";import"./DialogContent-D71n8k4T.js";import"./ListItem-HYEjvoe-.js";import"./MobileDateTimePicker-BbGrDX_d.js";import"./Tabs-Dkt6334O.js";import"./KeyboardArrowRight-C60ssb8G.js";import"./useMutation-BnUM9G4D.js";const x={title:`Permissions Group edit | Dashboard - ${d.site.name}`};function er(){const{id:s=""}=l(),t=e({queryKey:["permissions-group",s],queryFn:async()=>{const{data:o}=await m.get(p.permissionsGroup.details+s);return o}}),i=e({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await m.get(p.permissions.list);return o}});return i.isLoading||t.isLoading?r.jsx(a,{}):t.isError||i.isError?r.jsx(c,{route:n.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",x.title]})}),r.jsx(f,{currentPermission:t.data,appPermissions:i.data})]})}export{er as default};
