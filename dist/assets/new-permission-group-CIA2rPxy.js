import{j as r,dT as o,p as m,H as p,C as s,dp as e,dm as a}from"./index-bfXnrd_B.js";import{u as n,E as d}from"./error-block-l-vwuuSv.js";import{P as u}from"./permissions-group-create-view-UmkhYXop.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-DCz3ADG5.js";import"./form-provider-nTgntoFY.js";import"./TextField-BKEfnHMn.js";import"./FormControl-DJjFvo5t.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DSm16ipj.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-mw6hRqxv.js";import"./Select-ENvlCEnV.js";import"./Menu-B0mZFzHv.js";import"./InputBase-CbzKRH4y.js";import"./FormHelperText-SXsIGm93.js";import"./Rating-DSDijT6x.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-CsabuRV8.js";import"./index-CdglF-NR.js";import"./Slider-CM3DVFxn.js";import"./RadioGroup-D7AmZXs4.js";import"./FormGroup-jxee7TJf.js";import"./FormControlLabel-CK-ErBpG.js";import"./utils-b8vptws0.js";import"./index-I9jVg8IY.js";import"./countries-DSLisFCy.js";import"./InputAdornment-XyO72vbx.js";import"./Autocomplete-B6hzfXfq.js";import"./Chip-BzH34JAD.js";import"./country-select-BNRwtX3c.js";import"./Checkbox-Dz0lv2WL.js";import"./upload-avatar-DE_scHHR.js";import"./format-number-DOsPFhv2.js";import"./image-MPJgE1is.js";import"./DatePicker-B5wrAIaO.js";import"./DialogContent-Cw_V6ejY.js";import"./ListItem-CmnuLqtj.js";import"./MobileDateTimePicker-CYShLaZM.js";import"./Tabs-YvV0dnqT.js";import"./KeyboardArrowRight-CfVThViv.js";import"./useMutation-BPIbqlZf.js";const c={title:`Create a new Permissions Group | Dashboard - ${s.site.name}`};function or(){const t=n({queryKey:["permissions"],queryFn:async()=>{const{data:i}=await e.get(a.permissions.list);return i}});return t.isPending||t.isLoading?r.jsx(o,{}):t.isError?r.jsx(d,{route:m.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(p,{children:r.jsxs("title",{children:[" ",c.title]})}),r.jsx(u,{appPermissions:t.data})]})}export{or as default};
