import{j as r,dT as e,p as a,H as n,C as u,dp as s,dm as p}from"./index-1iE_pzdz.js";import{u as m,E as d}from"./error-block-BIgktCvX.js";import{S as c}from"./staff-create-view-u-Zl_jrG.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-CPH4Y4PL.js";import"./form-provider-Bk4GtwIc.js";import"./TextField-DHtCrzsF.js";import"./FormControl-NfFD8g29.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-B4tUSR5W.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Z8Hq68xw.js";import"./Select-CYfB2nz0.js";import"./Menu-BX9dxjlv.js";import"./InputBase-BadK7O_L.js";import"./FormHelperText-DsSp4x5g.js";import"./Rating-DaffWkCu.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DqsCUEj-.js";import"./index-K8l5CjQY.js";import"./Slider-CkoquRLq.js";import"./RadioGroup-8jgKyWkn.js";import"./FormGroup-Br4pQUt2.js";import"./FormControlLabel-Df-QIfD8.js";import"./utils-CFaUPgDl.js";import"./index-Cq7CuE1D.js";import"./countries-DSLisFCy.js";import"./InputAdornment-CACQTP1p.js";import"./Autocomplete-BDxJtnkk.js";import"./Chip-Cd2814Jh.js";import"./country-select-CB3QmzBF.js";import"./Checkbox-DNBko6Dw.js";import"./upload-avatar-CqNbza97.js";import"./format-number-CTB21s4Z.js";import"./image-8x8gVsOX.js";import"./DatePicker-BYYGSvFj.js";import"./DialogContent-uKdN3zVH.js";import"./ListItem-MIIjg71W.js";import"./MobileDateTimePicker-CwoMymqr.js";import"./Tabs-BixlVTD0.js";import"./KeyboardArrowRight-DXB4fbCs.js";import"./useMutation-BSVHjL8_.js";import"./schema-helper-DzP9Jl7a.js";const f={title:`Create a new user | Dashboard - ${u.site.name}`};function pr(){const t=m({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await s.get(p.permissions.list);return o}}),i=m({queryKey:["permissions-groups"],queryFn:async()=>{const{data:o}=await s.get(p.permissionsGroup.list);return o}});return i.isLoading||t.isLoading?r.jsx(e,{}):t.isError||i.isError?r.jsx(d,{route:a.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",f.title]})}),r.jsx(c,{appPermissions:t.data,appPermissionsGroup:i.data})]})}export{pr as default};