import{j as t,ec as o,p as m,H as p,C as s,dJ as e,dH as a}from"./index-Cq03K-HC.js";import{u as n,E as d}from"./error-block-CBMWt84f.js";import{S as f}from"./staff-create-view-BVrPx-q-.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-C_F-6vOC.js";import"./form-provider-DGoPfYCb.js";import"./TextField-BNZ3YpVQ.js";import"./FormControl-DUlfZx4z.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-D6SX5sCR.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bx5V1G4l.js";import"./Select-BJK6Q71-.js";import"./Menu-B_EWYTTU.js";import"./InputBase-CPtucf_J.js";import"./FormHelperText-BdgqWWO0.js";import"./Rating-C9YzUf05.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-D16lNrfB.js";import"./index-BOf1bnN2.js";import"./Slider-ic8LVZXa.js";import"./RadioGroup-CqyyD7XC.js";import"./FormGroup-ByRTQQuh.js";import"./FormControlLabel-CS2mv3Te.js";import"./index-DqNxVOmH.js";import"./countries-DSLisFCy.js";import"./InputAdornment-B7jHbOut.js";import"./Autocomplete-CidbBtOC.js";import"./Chip-x2W7r02e.js";import"./country-select-D9zKFD0C.js";import"./Checkbox-B5P4NoLN.js";import"./upload-avatar-CoRpPeQR.js";import"./format-number-DITXUPMN.js";import"./image-DitvMElQ.js";import"./DatePicker-C0kjDQAX.js";import"./DialogContent-D0WbZEYR.js";import"./ListItem-Dwol_2rN.js";import"./MobileDateTimePicker-DgPLkewz.js";import"./Tabs-Bg2egs3q.js";import"./KeyboardArrowRight-yBnSCV6-.js";import"./useMutation-Dp0rVztm.js";const u={title:`Create a new staff | Dashboard - ${s.site.name}`};function it(){const r=n({queryKey:["permissions"],queryFn:async()=>{const{data:i}=await e.get(a.permissions.list);return i}});return r.isPending||r.isLoading?t.jsx(o,{}):r.isError?t.jsx(d,{route:m.dashboard.staff.root}):t.jsxs(t.Fragment,{children:[t.jsx(p,{children:t.jsxs("title",{children:[" ",u.title]})}),t.jsx(f,{appPermissions:r.data})]})}export{it as default};
