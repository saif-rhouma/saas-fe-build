import{j as r,dT as e,p as a,H as n,C as u,dp as s,dm as p}from"./index-lHvWnAth.js";import{u as m,E as d}from"./error-block-OAPsBAe2.js";import{S as c}from"./staff-create-view-DqEC3zFk.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-BZZEULS_.js";import"./form-provider-DRD8Ki5j.js";import"./TextField-CUU7bZOd.js";import"./FormControl-C_sOeRyz.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BLQz42dI.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-DSca8E5L.js";import"./Select-DMu-II0M.js";import"./Menu-BXdfh1mm.js";import"./InputBase-B1y_nGV8.js";import"./FormHelperText-DONqTFzb.js";import"./Rating-BIxneqw0.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-Bp78_v61.js";import"./index-Dh4ObOjY.js";import"./Slider-iwv3PeIf.js";import"./RadioGroup-BX-9G9fN.js";import"./FormGroup-DnQZWtk_.js";import"./FormControlLabel-Dc9z1FNT.js";import"./utils-CMvDb-z4.js";import"./index-AWllKlEy.js";import"./countries-DSLisFCy.js";import"./InputAdornment-3ABsbC7V.js";import"./Autocomplete-Bscg8jlq.js";import"./Chip-wxKJI6YL.js";import"./country-select-Bqkae59B.js";import"./Checkbox-BkjqBFv4.js";import"./upload-avatar-CZeNxzze.js";import"./format-number-Delp4FjS.js";import"./image-BozkrAD_.js";import"./DatePicker-_phjiQsK.js";import"./DialogContent-DXUy4-2-.js";import"./ListItem-L0CrgSc-.js";import"./MobileDateTimePicker-ByNtdou9.js";import"./Tabs-rJfiarcA.js";import"./KeyboardArrowRight-2u6318G5.js";import"./useMutation-oW6f2Gjt.js";import"./schema-helper-CRxPGzR4.js";import"./AccordionSummary-Cv16AT3s.js";const f={title:`Create a new user | Dashboard - ${u.site.name}`};function mr(){const t=m({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await s.get(p.permissions.list);return o}}),i=m({queryKey:["permissions-groups"],queryFn:async()=>{const{data:o}=await s.get(p.permissionsGroup.list);return o}});return i.isLoading||t.isLoading?r.jsx(e,{}):t.isError||i.isError?r.jsx(d,{route:a.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",f.title]})}),r.jsx(c,{appPermissions:t.data,appPermissionsGroup:i.data})]})}export{mr as default};
