import{j as r,dT as o,p as m,H as p,C as s,dp as e,dm as a}from"./index-dnffYGPF.js";import{u as n,E as d}from"./error-block-B4gGIhQT.js";import{P as u}from"./permissions-group-create-view-CPdu66_Z.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-CeSyQC80.js";import"./form-provider-CITdfumP.js";import"./TextField-CXid-WzZ.js";import"./FormControl-BRVLZ6vc.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BD7j51Pf.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BxuKWCPx.js";import"./Select-C4D05hWU.js";import"./Menu-uKMGOhe2.js";import"./InputBase-yFOqp3RP.js";import"./FormHelperText-DXwfOPf-.js";import"./Rating-BNuyGKbg.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-BrUPx9bQ.js";import"./index-B9dpO8f9.js";import"./Slider-DGrZGzhI.js";import"./RadioGroup-DQr9LGT6.js";import"./FormGroup-V-H13eeJ.js";import"./FormControlLabel-DCf9vair.js";import"./utils-CQ22Mu-N.js";import"./index-3LIzsCGp.js";import"./countries-DSLisFCy.js";import"./InputAdornment-CP4MkqJg.js";import"./Autocomplete-8nyimgX5.js";import"./Chip-BYZ3Frpb.js";import"./country-select-D0uFWVT7.js";import"./Checkbox-BH9BFK-7.js";import"./upload-avatar-CkudrcQM.js";import"./format-number-Cdw2u6FO.js";import"./image-Bobk4gjY.js";import"./DatePicker-B8yVgoxT.js";import"./DialogContent-C0Vz7dRD.js";import"./ListItem-CHaPu4TZ.js";import"./MobileDateTimePicker-B34Jce81.js";import"./Tabs-D57G9S_c.js";import"./KeyboardArrowRight-RY7Zbvek.js";import"./useMutation-BZOm9juL.js";const c={title:`Create a new Permissions Group | Dashboard - ${s.site.name}`};function or(){const t=n({queryKey:["permissions"],queryFn:async()=>{const{data:i}=await e.get(a.permissions.list);return i}});return t.isPending||t.isLoading?r.jsx(o,{}):t.isError?r.jsx(d,{route:m.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(p,{children:r.jsxs("title",{children:[" ",c.title]})}),r.jsx(u,{appPermissions:t.data})]})}export{or as default};