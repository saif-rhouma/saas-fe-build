import{j as r,dU as a,p as n,H as u,C as d,dp as m,dm as p}from"./index-BEaGYMEI.js";import{u as e,E as c}from"./error-block-BQYINy50.js";import{u as l}from"./use-params-D6bIDsGA.js";import{P as f}from"./permissions-group-create-view-C7cPX1NC.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-D4hwk-rw.js";import"./form-provider-D1JqQzDy.js";import"./TextField-CIxpyOlN.js";import"./FormControl-2hnEuYCX.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CeWPpGeQ.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-DT9mGYCJ.js";import"./Select-C-U3VYQj.js";import"./Menu-Dc9eDgdb.js";import"./InputBase-Cx_XAmin.js";import"./FormHelperText-BJ35fbuN.js";import"./Rating-OrTvPT5o.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-BIhbmUVt.js";import"./index-MqrcwFfK.js";import"./Slider-Vpiw_yof.js";import"./RadioGroup-CBePuX0v.js";import"./FormGroup-Co3Xm8J_.js";import"./FormControlLabel-BO7gRcil.js";import"./utils-BEJZLJ_B.js";import"./index-DHKdtuyp.js";import"./countries-DSLisFCy.js";import"./InputAdornment-CGsQ7T7u.js";import"./Autocomplete-DxNaZqwA.js";import"./Chip-Db-a91wo.js";import"./country-select-UHhuvlSO.js";import"./Checkbox-DRhnNWXi.js";import"./upload-avatar-Bt3nnzfi.js";import"./format-number-JDGLw5r5.js";import"./image-C-zCjJjA.js";import"./DatePicker-CrD84yY4.js";import"./DialogContent-kX6pwS8I.js";import"./ListItem-BFzJ2Xb7.js";import"./MobileDateTimePicker-hl_QFTv-.js";import"./Tabs-CAp3wR44.js";import"./KeyboardArrowRight-BWGrV5E8.js";import"./useMutation-CD7lT4vI.js";const x={title:`Permissions Group edit | Dashboard - ${d.site.name}`};function er(){const{id:s=""}=l(),t=e({queryKey:["permissions-group",s],queryFn:async()=>{const{data:o}=await m.get(p.permissionsGroup.details+s);return o}}),i=e({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await m.get(p.permissions.list);return o}});return i.isLoading||t.isLoading?r.jsx(a,{}):t.isError||i.isError?r.jsx(c,{route:n.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",x.title]})}),r.jsx(f,{currentPermission:t.data,appPermissions:i.data})]})}export{er as default};
