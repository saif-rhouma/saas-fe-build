import{j as r,dT as a,p as n,H as u,C as d,dp as m,dm as p}from"./index-CIoKvMHn.js";import{u as e,E as c}from"./error-block-DhaRFWwY.js";import{u as l}from"./use-params-BbXZQ8Rh.js";import{P as f}from"./permissions-group-create-view-B6pNmvdG.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-BThLSMc0.js";import"./form-provider-Cii1ThkP.js";import"./TextField-C00rKtlH.js";import"./FormControl-FN21q8Rq.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-iaMgGLYd.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BuFlWDAS.js";import"./Select-DSZG82Q4.js";import"./Menu-C1-wEn-P.js";import"./InputBase-Df-FEvS4.js";import"./FormHelperText-CqGjfG0J.js";import"./Rating-BqH9V-uJ.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-BUpY4qKP.js";import"./index-Bo-a2sF-.js";import"./Slider-DQtGmLhB.js";import"./RadioGroup-HYVGGCqV.js";import"./FormGroup-DrrfJQn4.js";import"./FormControlLabel-CjW9C05T.js";import"./utils-zFnQ5YZ1.js";import"./index-3LcnEoVf.js";import"./countries-DSLisFCy.js";import"./InputAdornment-Cvj5YTOu.js";import"./Autocomplete-Cfk2nLPT.js";import"./Chip-Cec_Jw5m.js";import"./country-select-Do0TGJiX.js";import"./Checkbox-0687NpDf.js";import"./upload-avatar-B7MRv3B0.js";import"./format-number-BMNyPxVA.js";import"./image-BRvqol2Y.js";import"./DatePicker-Cd2R6_FW.js";import"./DialogContent-DW8kkh1u.js";import"./ListItem-BpMsl4m4.js";import"./MobileDateTimePicker-Bt0KkOmQ.js";import"./Tabs-BSI1eYJz.js";import"./KeyboardArrowRight-Bw9uoUSF.js";import"./useMutation-L7mmbuNE.js";const x={title:`Permissions Group edit | Dashboard - ${d.site.name}`};function er(){const{id:s=""}=l(),t=e({queryKey:["permissions-group",s],queryFn:async()=>{const{data:o}=await m.get(p.permissionsGroup.details+s);return o}}),i=e({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await m.get(p.permissions.list);return o}});return i.isLoading||t.isLoading?r.jsx(a,{}):t.isError||i.isError?r.jsx(c,{route:n.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",x.title]})}),r.jsx(f,{currentPermission:t.data,appPermissions:i.data})]})}export{er as default};