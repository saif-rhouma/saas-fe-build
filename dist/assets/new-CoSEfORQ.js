import{j as r,dT as e,p as a,H as n,C as u,dp as s,dm as p}from"./index-BUrqGYHV.js";import{u as m,E as d}from"./error-block-DN8xkUHk.js";import{S as c}from"./staff-create-view-BZNimn3o.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-CBrfH2jq.js";import"./form-provider-CJyypkeJ.js";import"./TextField-DKFa5Z7P.js";import"./FormControl-C8Ce0ygl.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CVATPChb.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-QZ-E46AU.js";import"./Select-LbnHio0-.js";import"./Menu-CLp5I9kG.js";import"./InputBase-Csxyl5rk.js";import"./FormHelperText-DGaNYjrP.js";import"./Rating-C1UHyF2E.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-CeuP6Tw8.js";import"./index-BUy-UA8k.js";import"./Slider-DYfwcK3l.js";import"./RadioGroup-CTjgqBIL.js";import"./FormGroup-CR7AHwol.js";import"./FormControlLabel-4OLGmRDr.js";import"./utils-DruuQAc1.js";import"./index-CjG6lXZs.js";import"./countries-DSLisFCy.js";import"./InputAdornment-rFmxgjL2.js";import"./Autocomplete-BKiAob6w.js";import"./Chip-DSPCc92b.js";import"./country-select-DQSkT6LU.js";import"./Checkbox-CulbxVIZ.js";import"./upload-avatar-BoMdhMW2.js";import"./format-number-CWCyR4b1.js";import"./image-DcDxLlMJ.js";import"./DatePicker-B6_5nW4I.js";import"./DialogContent-Da2XAroL.js";import"./ListItem-Cz45n01_.js";import"./MobileDateTimePicker-vfT97u6f.js";import"./Tabs-DV-6d-h_.js";import"./KeyboardArrowRight-CRQH5XCK.js";import"./useMutation-rgqrqyyl.js";const f={title:`Create a new user | Dashboard - ${u.site.name}`};function sr(){const t=m({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await s.get(p.permissions.list);return o}}),i=m({queryKey:["permissions-groups"],queryFn:async()=>{const{data:o}=await s.get(p.permissionsGroup.list);return o}});return i.isLoading||t.isLoading?r.jsx(e,{}):t.isError||i.isError?r.jsx(d,{route:a.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",f.title]})}),r.jsx(c,{appPermissions:t.data,appPermissionsGroup:i.data})]})}export{sr as default};
