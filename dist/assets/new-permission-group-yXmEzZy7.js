import{j as r,dT as o,p as m,H as p,C as s,dp as e,dm as a}from"./index-PcvvizaM.js";import{u as n,E as d}from"./error-block-ByYUb2x8.js";import{P as u}from"./permissions-group-create-view-DB3e9U6f.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-CveB5zSd.js";import"./form-provider-QAnR1fN1.js";import"./TextField-BqVeNtQk.js";import"./FormControl-BDFWwf0L.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CLgWCQLa.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-COKH-IDU.js";import"./Select-oMu1ahJl.js";import"./Menu-DUpb5sCU.js";import"./InputBase-Dg_k17pz.js";import"./FormHelperText-CwIdVd83.js";import"./Rating-BxbBWQ1u.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-_YiH203b.js";import"./index-C-MOTVcd.js";import"./Slider-C99_fc9G.js";import"./RadioGroup-4h1o996a.js";import"./FormGroup--EXUIjsJ.js";import"./FormControlLabel-BVXyMM5l.js";import"./utils-D7_t011Z.js";import"./index-2WdDYItv.js";import"./countries-DSLisFCy.js";import"./InputAdornment-9Wd2PMBY.js";import"./Autocomplete-wQ_CiLgR.js";import"./Chip-CIfpjv01.js";import"./country-select-CiBGd84d.js";import"./Checkbox-Ci7zC3Qo.js";import"./upload-avatar-BS1_xrDW.js";import"./format-number-DbRbqmXm.js";import"./image-CJs9mC80.js";import"./DatePicker-BpnHzDBD.js";import"./DialogContent-BNlapGc3.js";import"./ListItem-27j6jDo_.js";import"./MobileDateTimePicker-m0xyb1Je.js";import"./Tabs-CZPaKkdi.js";import"./KeyboardArrowRight-DC977Fth.js";import"./useMutation-CKVX9VXs.js";const c={title:`Create a new Permissions Group | Dashboard - ${s.site.name}`};function or(){const t=n({queryKey:["permissions"],queryFn:async()=>{const{data:i}=await e.get(a.permissions.list);return i}});return t.isPending||t.isLoading?r.jsx(o,{}):t.isError?r.jsx(d,{route:m.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(p,{children:r.jsxs("title",{children:[" ",c.title]})}),r.jsx(u,{appPermissions:t.data})]})}export{or as default};