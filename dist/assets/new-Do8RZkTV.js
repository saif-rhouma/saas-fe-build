import{j as r,dT as e,p as a,H as n,C as u,dp as s,dm as p}from"./index-CBaC8EHo.js";import{u as m,E as d}from"./error-block-BTe9s2nY.js";import{S as c}from"./staff-create-view-n1y5qrfw.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-BxTr72-Z.js";import"./form-provider-BxN_pXQk.js";import"./TextField-CWnJgASx.js";import"./FormControl-rSsbK9bU.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-wSZ3k1ab.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-D7hrAPuP.js";import"./Select-D0TbZOSm.js";import"./Menu-3ZwLqMmb.js";import"./InputBase-DoQjdZGJ.js";import"./FormHelperText-CjukhEhX.js";import"./Rating-CuOYObDU.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DiHvGSTy.js";import"./index-CJMVu8n5.js";import"./Slider-CMwkyTYT.js";import"./RadioGroup-DNGwP5Qi.js";import"./FormGroup-BAxxQFBl.js";import"./FormControlLabel-BT8sHrze.js";import"./utils-niUY0Cf1.js";import"./index-CTki8kAv.js";import"./countries-DSLisFCy.js";import"./InputAdornment-DSSunrFA.js";import"./Autocomplete-BDM7zb25.js";import"./Chip-DwDEebma.js";import"./country-select-DxbLGwZH.js";import"./Checkbox-CSJ38Wk1.js";import"./upload-avatar-BtOhWlWr.js";import"./format-number-A0Tn_Vtg.js";import"./image-JHlULIdd.js";import"./DatePicker-B0psQHbO.js";import"./DialogContent-CwxRFPNY.js";import"./ListItem-Sr0c6Z_7.js";import"./MobileDateTimePicker-BhIfNxzq.js";import"./Tabs-BMeMDnqG.js";import"./KeyboardArrowRight-Dc-JAGRf.js";import"./useMutation-D1kYRBf6.js";const f={title:`Create a new user | Dashboard - ${u.site.name}`};function sr(){const t=m({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await s.get(p.permissions.list);return o}}),i=m({queryKey:["permissions-groups"],queryFn:async()=>{const{data:o}=await s.get(p.permissionsGroup.list);return o}});return i.isLoading||t.isLoading?r.jsx(e,{}):t.isError||i.isError?r.jsx(d,{route:a.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",f.title]})}),r.jsx(c,{appPermissions:t.data,appPermissionsGroup:i.data})]})}export{sr as default};
