import{j as r,dT as e,p as a,H as n,C as u,dp as s,dm as p}from"./index-CFpFDdmk.js";import{u as m,E as d}from"./error-block-Qb0JqWMo.js";import{S as c}from"./staff-create-view-Dsaap9_c.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-BhZ5AQiJ.js";import"./form-provider-BpZ_lNCz.js";import"./TextField-DfM7FsMT.js";import"./FormControl-CNS-_KcR.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-D-P4ONWN.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-DSBvpxE-.js";import"./Select-BlD-2uiB.js";import"./Menu-B68-fR6c.js";import"./InputBase-BlPzdlBf.js";import"./FormHelperText-CBSty0_k.js";import"./Rating-hRCFGB57.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-B84uWKaP.js";import"./index-C97vZu8v.js";import"./Slider-1GT9TVwO.js";import"./RadioGroup-q3osZweo.js";import"./FormGroup-cGoNpeSS.js";import"./FormControlLabel-Djcc_FaA.js";import"./utils-BeBWERKu.js";import"./index-iy408cV1.js";import"./countries-DSLisFCy.js";import"./InputAdornment-CgLiqxs-.js";import"./Autocomplete-CiqUWkUt.js";import"./Chip-B8Kj4THB.js";import"./country-select-B5_N9Ghb.js";import"./Checkbox-BgUXlmGv.js";import"./upload-avatar-CpOCvI_m.js";import"./format-number-u5v8ow11.js";import"./image-DogZHW8e.js";import"./DatePicker--R0iVwy6.js";import"./DialogContent-__vH1XwO.js";import"./ListItem-C2-cLBAD.js";import"./MobileDateTimePicker-iVybONG-.js";import"./Tabs-mH73uY_b.js";import"./KeyboardArrowRight-BWeVAAgH.js";import"./useMutation-BYxzZEeu.js";import"./schema-helper-4wDMemZN.js";const f={title:`Create a new user | Dashboard - ${u.site.name}`};function pr(){const t=m({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await s.get(p.permissions.list);return o}}),i=m({queryKey:["permissions-groups"],queryFn:async()=>{const{data:o}=await s.get(p.permissionsGroup.list);return o}});return i.isLoading||t.isLoading?r.jsx(e,{}):t.isError||i.isError?r.jsx(d,{route:a.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",f.title]})}),r.jsx(c,{appPermissions:t.data,appPermissionsGroup:i.data})]})}export{pr as default};
