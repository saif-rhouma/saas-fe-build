import{j as r,dT as o,p as m,H as p,C as s,dp as e,dm as a}from"./index-DGNYifC6.js";import{u as n,E as d}from"./error-block-C-2dSLgv.js";import{P as u}from"./permissions-group-create-view-BN3BYrft.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-DRd75Eu9.js";import"./form-provider-CJcfGRKn.js";import"./TextField-mBdmr42_.js";import"./FormControl-ozFyA-FQ.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-ZTJWG8jQ.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-B8Lxlqfe.js";import"./Select-C6ASwYR-.js";import"./Menu-BP2zLRER.js";import"./InputBase-hrwLUnCD.js";import"./FormHelperText-CVQBffr0.js";import"./Rating-lF0e67mT.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-Bk0hVyX2.js";import"./index-CPrvQNIh.js";import"./Slider-_mufNbtc.js";import"./RadioGroup-CJB7uNqf.js";import"./FormGroup-RIR5D6xL.js";import"./FormControlLabel-C9O5_5-O.js";import"./utils-CGfCLUzb.js";import"./index-BqPiDh_s.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BmxkeBIP.js";import"./Autocomplete-De53pBeJ.js";import"./Chip-B0Ybqywg.js";import"./country-select-DDtqlvTv.js";import"./Checkbox-BIs_5AT0.js";import"./upload-avatar-Bt036TSz.js";import"./format-number-CWTAeVFz.js";import"./image-CNJbTuDT.js";import"./DatePicker-wZuhHZr0.js";import"./DialogContent-B_Tr1w8s.js";import"./ListItem-CYQM3O-q.js";import"./MobileDateTimePicker-B6nPPnvp.js";import"./Tabs-DFrMpOqw.js";import"./KeyboardArrowRight-DID8kgv4.js";import"./useMutation-D2jYRQJx.js";const c={title:`Create a new Permissions Group | Dashboard - ${s.site.name}`};function or(){const t=n({queryKey:["permissions"],queryFn:async()=>{const{data:i}=await e.get(a.permissions.list);return i}});return t.isPending||t.isLoading?r.jsx(o,{}):t.isError?r.jsx(d,{route:m.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(p,{children:r.jsxs("title",{children:[" ",c.title]})}),r.jsx(u,{appPermissions:t.data})]})}export{or as default};
