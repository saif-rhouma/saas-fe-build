import{j as r,dT as o,p as m,H as p,C as s,dp as e,dm as a}from"./index-DSZ8-SnN.js";import{u as n,E as d}from"./error-block-Bfei_nF0.js";import{P as u}from"./permissions-group-create-view-D7lcV-zV.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-D_ovYyL8.js";import"./form-provider-Cfa9nJ2G.js";import"./TextField-DXnGVnKc.js";import"./FormControl-DVwuE-Z3.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Dt93HXfK.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-D8PgMfa3.js";import"./Select-bvm1T7cr.js";import"./Menu-WNpJDxC0.js";import"./InputBase-DUSf-v3M.js";import"./FormHelperText-CAtOlLkP.js";import"./Rating-CJRd3C9A.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-C8mFRUZ0.js";import"./index-ClfPQVwT.js";import"./Slider-DvPw8R3F.js";import"./RadioGroup-B-VQ3Ex7.js";import"./FormGroup-BoA-oXkm.js";import"./FormControlLabel-DcdZLABF.js";import"./utils-DfMGJYQ4.js";import"./index-CHAbpX0m.js";import"./countries-DSLisFCy.js";import"./InputAdornment-DQTsYq75.js";import"./Autocomplete-Ke2RMla7.js";import"./Chip-BxDt4Lxe.js";import"./country-select-0bcGB8RG.js";import"./Checkbox-DIewUcg3.js";import"./upload-avatar-BRDUoqCR.js";import"./format-number-Cz1FSQLM.js";import"./image-CnfTgJRa.js";import"./DatePicker-CHiyzFIc.js";import"./DialogContent-9Yn0EsJP.js";import"./ListItem-CKvXkhKm.js";import"./MobileDateTimePicker-BLXY58Hs.js";import"./Tabs-CZeN0YJj.js";import"./KeyboardArrowRight-ySj1HR2l.js";import"./useMutation-DusrxMaX.js";const c={title:`Create a new Permissions Group | Dashboard - ${s.site.name}`};function or(){const t=n({queryKey:["permissions"],queryFn:async()=>{const{data:i}=await e.get(a.permissions.list);return i}});return t.isPending||t.isLoading?r.jsx(o,{}):t.isError?r.jsx(d,{route:m.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(p,{children:r.jsxs("title",{children:[" ",c.title]})}),r.jsx(u,{appPermissions:t.data})]})}export{or as default};