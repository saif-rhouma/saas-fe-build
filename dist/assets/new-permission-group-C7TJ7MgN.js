import{j as r,ec as o,p as m,H as p,C as s,dJ as e,dH as a}from"./index-D-ZKGqTU.js";import{u as n,E as d}from"./error-block-CQIWskvv.js";import{P as u}from"./permissions-group-create-view-CipuGgkL.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-Ce0SsF19.js";import"./form-provider-L0KFjUTq.js";import"./TextField-DhW8zjJC.js";import"./FormControl-n1s9FAXz.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CCRBBEhV.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-C9Vfi2q1.js";import"./Select-B6atPAS4.js";import"./Menu-BvjNAHEG.js";import"./InputBase-B9hwN3-B.js";import"./FormHelperText-BHlZRpvh.js";import"./Rating-C-gTF_lZ.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-CzmUVphq.js";import"./index-Bb5BZvNl.js";import"./Slider-Buv_oatH.js";import"./RadioGroup-Bz4MgZrq.js";import"./FormGroup-CwleoAMr.js";import"./FormControlLabel-5B8r8hjw.js";import"./index-D0kJtIpB.js";import"./countries-DSLisFCy.js";import"./InputAdornment-B2x29rol.js";import"./Autocomplete-C74LI-Rt.js";import"./Chip-CYchvRo_.js";import"./country-select-CBbXG_H4.js";import"./Checkbox-XoXkZxXm.js";import"./upload-avatar-C3B5eTLv.js";import"./format-number-7nwGld6g.js";import"./image-CX1CYgjP.js";import"./DatePicker-BiJlOuDh.js";import"./DialogContent-CKRoYUkD.js";import"./ListItem-CbBrCKNq.js";import"./MobileDateTimePicker-CIeUS7kl.js";import"./Tabs-BAzl82ph.js";import"./KeyboardArrowRight-DzNmTPM2.js";import"./useMutation-DZH4G1UV.js";const c={title:`Create a new Permissions Group | Dashboard - ${s.site.name}`};function ir(){const t=n({queryKey:["permissions"],queryFn:async()=>{const{data:i}=await e.get(a.permissions.list);return i}});return t.isPending||t.isLoading?r.jsx(o,{}):t.isError?r.jsx(d,{route:m.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(p,{children:r.jsxs("title",{children:[" ",c.title]})}),r.jsx(u,{appPermissions:t.data})]})}export{ir as default};
