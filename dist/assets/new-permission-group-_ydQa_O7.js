import{j as r,dT as o,p as m,H as p,C as s,dp as e,dm as a}from"./index-CFpFDdmk.js";import{u as n,E as d}from"./error-block-Qb0JqWMo.js";import{P as u}from"./permissions-group-create-view-D454H4Cz.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-BhZ5AQiJ.js";import"./form-provider-BpZ_lNCz.js";import"./TextField-DfM7FsMT.js";import"./FormControl-CNS-_KcR.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-D-P4ONWN.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-DSBvpxE-.js";import"./Select-BlD-2uiB.js";import"./Menu-B68-fR6c.js";import"./InputBase-BlPzdlBf.js";import"./FormHelperText-CBSty0_k.js";import"./Rating-hRCFGB57.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-B84uWKaP.js";import"./index-C97vZu8v.js";import"./Slider-1GT9TVwO.js";import"./RadioGroup-q3osZweo.js";import"./FormGroup-cGoNpeSS.js";import"./FormControlLabel-Djcc_FaA.js";import"./utils-BeBWERKu.js";import"./index-iy408cV1.js";import"./countries-DSLisFCy.js";import"./InputAdornment-CgLiqxs-.js";import"./Autocomplete-CiqUWkUt.js";import"./Chip-B8Kj4THB.js";import"./country-select-B5_N9Ghb.js";import"./Checkbox-BgUXlmGv.js";import"./upload-avatar-CpOCvI_m.js";import"./format-number-u5v8ow11.js";import"./image-DogZHW8e.js";import"./DatePicker--R0iVwy6.js";import"./DialogContent-__vH1XwO.js";import"./ListItem-C2-cLBAD.js";import"./MobileDateTimePicker-iVybONG-.js";import"./Tabs-mH73uY_b.js";import"./KeyboardArrowRight-BWeVAAgH.js";import"./useMutation-BYxzZEeu.js";const c={title:`Create a new Permissions Group | Dashboard - ${s.site.name}`};function or(){const t=n({queryKey:["permissions"],queryFn:async()=>{const{data:i}=await e.get(a.permissions.list);return i}});return t.isPending||t.isLoading?r.jsx(o,{}):t.isError?r.jsx(d,{route:m.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(p,{children:r.jsxs("title",{children:[" ",c.title]})}),r.jsx(u,{appPermissions:t.data})]})}export{or as default};