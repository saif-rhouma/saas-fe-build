import{j as r,ef as p,p as n,H as d,C as f,dM as m,dK as e}from"./index-C-IhHuTJ.js";import{u}from"./use-params-CE8XRVYz.js";import{S as c}from"./staff-create-view-DyIFJS85.js";import{u as a,E as l}from"./error-block-BR6CrtTz.js";import"./custom-breadcrumbs-uFAKtVA_.js";import"./form-provider-CBudI90v.js";import"./TextField-9UQBwjuM.js";import"./FormControl-Cqn5KMTu.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Di_kJ4FW.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Cjr_5zdF.js";import"./Select-aS6O7ajU.js";import"./Menu-CrioubDI.js";import"./InputBase-T30htlau.js";import"./FormHelperText-Bk0TYkV4.js";import"./Rating-aPX_sh3H.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-D_zyis-v.js";import"./index-BbzwuQnk.js";import"./Slider-DLXe-CaB.js";import"./RadioGroup-CONsuzNK.js";import"./FormGroup-DsmEYSPW.js";import"./FormControlLabel-BpukUZ1g.js";import"./index-DW-YGTnX.js";import"./countries-DSLisFCy.js";import"./InputAdornment-epef3vq8.js";import"./Autocomplete-NiW7S513.js";import"./Chip-DE7nSvgd.js";import"./country-select-CMj3wYaW.js";import"./Checkbox-OM-b9iKh.js";import"./upload-avatar-BSr4Zgme.js";import"./format-number-DBz3y1Zx.js";import"./image-Bf3dx3WP.js";import"./DatePicker-DCzcHVvE.js";import"./DialogContent-7B2ADHjp.js";import"./ListItem-DoDVqw_C.js";import"./MobileDateTimePicker-BipeM__l.js";import"./useMutation-CsQJW4rY.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";const x={title:`Staff edit | Dashboard - ${f.site.name}`};function sr(){const{id:t=""}=u();console.log(t);const o=a({queryKey:["staff",t],queryFn:async()=>(await m.get(e.staff.details+t)).data}),i=a({queryKey:["permissions"],queryFn:async()=>{const{data:s}=await m.get(e.permissions.list);return s}});return i.isLoading||o.isLoading?r.jsx(p,{}):o.isError||i.isError?r.jsx(l,{route:n.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(d,{children:r.jsxs("title",{children:[" ",x.title]})}),r.jsx(c,{currentStaff:o.data,appPermissions:i.data})]})}export{sr as default};
