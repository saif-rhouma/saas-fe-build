import{j as r,dT as a,p as n,H as u,C as d,dp as m,dm as p}from"./index-PcvvizaM.js";import{u as e,E as c}from"./error-block-ByYUb2x8.js";import{u as l}from"./use-params-BJEBinDh.js";import{P as f}from"./permissions-group-create-view-DB3e9U6f.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-CveB5zSd.js";import"./form-provider-QAnR1fN1.js";import"./TextField-BqVeNtQk.js";import"./FormControl-BDFWwf0L.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CLgWCQLa.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-COKH-IDU.js";import"./Select-oMu1ahJl.js";import"./Menu-DUpb5sCU.js";import"./InputBase-Dg_k17pz.js";import"./FormHelperText-CwIdVd83.js";import"./Rating-BxbBWQ1u.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-_YiH203b.js";import"./index-C-MOTVcd.js";import"./Slider-C99_fc9G.js";import"./RadioGroup-4h1o996a.js";import"./FormGroup--EXUIjsJ.js";import"./FormControlLabel-BVXyMM5l.js";import"./utils-D7_t011Z.js";import"./index-2WdDYItv.js";import"./countries-DSLisFCy.js";import"./InputAdornment-9Wd2PMBY.js";import"./Autocomplete-wQ_CiLgR.js";import"./Chip-CIfpjv01.js";import"./country-select-CiBGd84d.js";import"./Checkbox-Ci7zC3Qo.js";import"./upload-avatar-BS1_xrDW.js";import"./format-number-DbRbqmXm.js";import"./image-CJs9mC80.js";import"./DatePicker-BpnHzDBD.js";import"./DialogContent-BNlapGc3.js";import"./ListItem-27j6jDo_.js";import"./MobileDateTimePicker-m0xyb1Je.js";import"./Tabs-CZPaKkdi.js";import"./KeyboardArrowRight-DC977Fth.js";import"./useMutation-CKVX9VXs.js";const x={title:`Permissions Group edit | Dashboard - ${d.site.name}`};function er(){const{id:s=""}=l(),t=e({queryKey:["permissions-group",s],queryFn:async()=>{const{data:o}=await m.get(p.permissionsGroup.details+s);return o}}),i=e({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await m.get(p.permissions.list);return o}});return i.isLoading||t.isLoading?r.jsx(a,{}):t.isError||i.isError?r.jsx(c,{route:n.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",x.title]})}),r.jsx(f,{currentPermission:t.data,appPermissions:i.data})]})}export{er as default};