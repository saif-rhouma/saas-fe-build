import{j as r,dT as a,p as n,H as u,C as d,dp as m,dm as p}from"./index-BRWSQhLj.js";import{u as e,E as c}from"./error-block-CQJDxd_0.js";import{u as l}from"./use-params-Cbnuc0U9.js";import{P as f}from"./permissions-group-create-view-CgkhOXYh.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-Ch5Xqwj9.js";import"./form-provider-CQ0Db_3w.js";import"./TextField-DWlrw-uI.js";import"./FormControl-B1BaavBO.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BQ33YGuJ.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CbTb2PIY.js";import"./Select-c5WOnzoP.js";import"./Menu-Qgp7_360.js";import"./InputBase-DLvueaBe.js";import"./FormHelperText-Cf_wmt5H.js";import"./Rating-CBSUqLfB.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-B2aXBOKa.js";import"./index-Bmd1Rs2t.js";import"./Slider-C5l2k4ei.js";import"./RadioGroup-DcyreO6-.js";import"./FormGroup-DD7duurx.js";import"./FormControlLabel-DYRCPyH0.js";import"./utils-qGzo-3WL.js";import"./index-BoO187_o.js";import"./countries-DSLisFCy.js";import"./InputAdornment-C5ShVcra.js";import"./Autocomplete-NSgekTkA.js";import"./Chip-s78qHh-l.js";import"./country-select-CAd0vdKk.js";import"./Checkbox-BegWxMiW.js";import"./upload-avatar-BTYeNaMQ.js";import"./format-number-CAgYIf5a.js";import"./image-Bnsg2-8e.js";import"./DatePicker-CFxLiWmV.js";import"./DialogContent-Zpn99X2f.js";import"./ListItem-D7PnxC_O.js";import"./MobileDateTimePicker-D24CD_1h.js";import"./Tabs-Cj2WHLSd.js";import"./KeyboardArrowRight-_gtD3CJF.js";import"./useMutation-DFBepesY.js";const x={title:`Permissions Group edit | Dashboard - ${d.site.name}`};function er(){const{id:s=""}=l(),t=e({queryKey:["permissions-group",s],queryFn:async()=>{const{data:o}=await m.get(p.permissionsGroup.details+s);return o}}),i=e({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await m.get(p.permissions.list);return o}});return i.isLoading||t.isLoading?r.jsx(a,{}):t.isError||i.isError?r.jsx(c,{route:n.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",x.title]})}),r.jsx(f,{currentPermission:t.data,appPermissions:i.data})]})}export{er as default};
