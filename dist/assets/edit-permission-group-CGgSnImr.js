import{j as r,dT as a,p as n,H as u,C as d,dp as m,dm as p}from"./index-lHvWnAth.js";import{u as e,E as c}from"./error-block-OAPsBAe2.js";import{u as l}from"./use-params-Fca2mg6W.js";import{P as f}from"./permissions-group-create-view-gnmb9_0u.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-BZZEULS_.js";import"./form-provider-DRD8Ki5j.js";import"./TextField-CUU7bZOd.js";import"./FormControl-C_sOeRyz.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BLQz42dI.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-DSca8E5L.js";import"./Select-DMu-II0M.js";import"./Menu-BXdfh1mm.js";import"./InputBase-B1y_nGV8.js";import"./FormHelperText-DONqTFzb.js";import"./Rating-BIxneqw0.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-Bp78_v61.js";import"./index-Dh4ObOjY.js";import"./Slider-iwv3PeIf.js";import"./RadioGroup-BX-9G9fN.js";import"./FormGroup-DnQZWtk_.js";import"./FormControlLabel-Dc9z1FNT.js";import"./utils-CMvDb-z4.js";import"./index-AWllKlEy.js";import"./countries-DSLisFCy.js";import"./InputAdornment-3ABsbC7V.js";import"./Autocomplete-Bscg8jlq.js";import"./Chip-wxKJI6YL.js";import"./country-select-Bqkae59B.js";import"./Checkbox-BkjqBFv4.js";import"./upload-avatar-CZeNxzze.js";import"./format-number-Delp4FjS.js";import"./image-BozkrAD_.js";import"./DatePicker-_phjiQsK.js";import"./DialogContent-DXUy4-2-.js";import"./ListItem-L0CrgSc-.js";import"./MobileDateTimePicker-ByNtdou9.js";import"./Tabs-rJfiarcA.js";import"./KeyboardArrowRight-2u6318G5.js";import"./useMutation-oW6f2Gjt.js";const x={title:`Permissions Group edit | Dashboard - ${d.site.name}`};function er(){const{id:s=""}=l(),t=e({queryKey:["permissions-group",s],queryFn:async()=>{const{data:o}=await m.get(p.permissionsGroup.details+s);return o}}),i=e({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await m.get(p.permissions.list);return o}});return i.isLoading||t.isLoading?r.jsx(a,{}):t.isError||i.isError?r.jsx(c,{route:n.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",x.title]})}),r.jsx(f,{currentPermission:t.data,appPermissions:i.data})]})}export{er as default};