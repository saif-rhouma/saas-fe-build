import{j as r,dT as o,p as m,H as p,C as s,dp as e,dm as a}from"./index-zyulwKWD.js";import{u as n,E as d}from"./error-block-DYjvCFbe.js";import{P as u}from"./permissions-group-create-view-D5Nv65Wf.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-DHj4Ok4N.js";import"./form-provider-B4-ohiGK.js";import"./TextField-CwPpTqRa.js";import"./FormControl-DkR47KrL.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Dxqp6-8F.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-C6u8Qb2i.js";import"./Select-D9XKSxr2.js";import"./Menu-DQMDyUDh.js";import"./InputBase-Cb1ycHRk.js";import"./FormHelperText-DXYAPhzx.js";import"./Rating-Dxb9vRtQ.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DYwyPMk3.js";import"./index-Fr89IBES.js";import"./Slider-CZuO2OIz.js";import"./RadioGroup-DmqY9jkn.js";import"./FormGroup-PZ8L00lW.js";import"./FormControlLabel-krtCXPG7.js";import"./utils-DGmOSEsQ.js";import"./index-WuVNPZZI.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BErxhCkp.js";import"./Autocomplete-CyPDwGC0.js";import"./Chip-hUCBEcuv.js";import"./country-select-CXYKfaKC.js";import"./Checkbox-B2T2mhgd.js";import"./upload-avatar-vd3eyrbg.js";import"./format-number-CwpAkUO8.js";import"./image-CJs4Y8Ie.js";import"./DatePicker-B07m1huX.js";import"./DialogContent-CrSIuYBM.js";import"./ListItem-uUR6JM6K.js";import"./MobileDateTimePicker-BDwlzO1U.js";import"./Tabs-DFyAqHwW.js";import"./KeyboardArrowRight-HkDaFki2.js";import"./useMutation-Cq5RP75q.js";const c={title:`Create a new Permissions Group | Dashboard - ${s.site.name}`};function or(){const t=n({queryKey:["permissions"],queryFn:async()=>{const{data:i}=await e.get(a.permissions.list);return i}});return t.isPending||t.isLoading?r.jsx(o,{}):t.isError?r.jsx(d,{route:m.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(p,{children:r.jsxs("title",{children:[" ",c.title]})}),r.jsx(u,{appPermissions:t.data})]})}export{or as default};
