import{j as r,dT as e,p as a,H as n,C as u,dp as s,dm as p}from"./index-Cb6aSJqI.js";import{u as m,E as d}from"./error-block-BjnALYtR.js";import{S as c}from"./staff-create-view-zCHfGcmo.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-k2LFOW06.js";import"./form-provider-r_GtnSm5.js";import"./TextField-DQXcR5as.js";import"./FormControl-BIuepxap.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BHzQjcru.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bb0ljwLc.js";import"./Select-CfChxtbn.js";import"./Menu-BgA5ob5m.js";import"./InputBase-4YzQn0tJ.js";import"./FormHelperText-BO4BDf2D.js";import"./Rating-DQIiPGvY.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-UDNnP2Xz.js";import"./index-DZy9M42U.js";import"./Slider-BHOQTROj.js";import"./RadioGroup-1WLwx_FR.js";import"./FormGroup-kgp3wVtK.js";import"./FormControlLabel-CI_VXRKb.js";import"./utils-D-Ozr33c.js";import"./index-BXLKVmsR.js";import"./countries-DSLisFCy.js";import"./InputAdornment-B3lMmCet.js";import"./Autocomplete-BDaB15VF.js";import"./Chip-CRJSjjGM.js";import"./country-select-DOwlUwkR.js";import"./Checkbox-BduLSsJI.js";import"./upload-avatar-DO-yiArG.js";import"./format-number-BkELK9o5.js";import"./image-CKkZri-A.js";import"./DatePicker-Chzv8MLO.js";import"./DialogContent-CSEM2EB2.js";import"./ListItem-DTFB2zaU.js";import"./MobileDateTimePicker-BNTgtMsh.js";import"./Tabs-b62Cxr_j.js";import"./KeyboardArrowRight-ElyTBoq2.js";import"./useMutation-D6Rdi7Aa.js";const f={title:`Create a new user | Dashboard - ${u.site.name}`};function sr(){const t=m({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await s.get(p.permissions.list);return o}}),i=m({queryKey:["permissions-groups"],queryFn:async()=>{const{data:o}=await s.get(p.permissionsGroup.list);return o}});return i.isLoading||t.isLoading?r.jsx(e,{}):t.isError||i.isError?r.jsx(d,{route:a.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",f.title]})}),r.jsx(c,{appPermissions:t.data,appPermissionsGroup:i.data})]})}export{sr as default};