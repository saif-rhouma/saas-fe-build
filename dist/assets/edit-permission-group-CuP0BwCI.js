import{j as r,dT as a,p as n,H as u,C as d,dp as m,dm as p}from"./index-9WIYojXz.js";import{u as e,E as c}from"./error-block-DhnojnAQ.js";import{u as l}from"./use-params-D2ubw5Mh.js";import{P as f}from"./permissions-group-create-view-DJzfaY4s.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-DHTIFeqs.js";import"./form-provider-DoDHQ7Pw.js";import"./TextField-B5VRxv2z.js";import"./FormControl-i5_L0HW9.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BsFZyvhX.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Cdv8FF65.js";import"./Select-Dbda1_Lz.js";import"./Menu-DQZymDEx.js";import"./InputBase-DxJhG4-2.js";import"./FormHelperText-CrDWnCKF.js";import"./Rating-BAJTeGkk.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-BKzPrEd2.js";import"./index-h44KeYk_.js";import"./Slider-26tiyZvR.js";import"./RadioGroup-DVJYKuuN.js";import"./FormGroup-ecogmTvT.js";import"./FormControlLabel-CQ80V3t9.js";import"./utils-D4ZVlgLI.js";import"./index-B6xKEW1L.js";import"./countries-DSLisFCy.js";import"./InputAdornment-Dy27B7Wv.js";import"./Autocomplete-D7aQSa71.js";import"./Chip-D0QOLpKJ.js";import"./country-select-CYyCXO2U.js";import"./Checkbox-DS1rDb6Y.js";import"./upload-avatar-rQsZa8Xt.js";import"./format-number-ThVrp-kn.js";import"./image-CDF1XP5G.js";import"./DatePicker-C3QrlNIh.js";import"./DialogContent-DyFL-JUF.js";import"./ListItem-gqkY54PP.js";import"./MobileDateTimePicker-CGGrjhgG.js";import"./Tabs-jmmmMz6a.js";import"./KeyboardArrowRight-vrz_hNQL.js";import"./useMutation-ZFzLckbx.js";const x={title:`Permissions Group edit | Dashboard - ${d.site.name}`};function er(){const{id:s=""}=l(),t=e({queryKey:["permissions-group",s],queryFn:async()=>{const{data:o}=await m.get(p.permissionsGroup.details+s);return o}}),i=e({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await m.get(p.permissions.list);return o}});return i.isLoading||t.isLoading?r.jsx(a,{}):t.isError||i.isError?r.jsx(c,{route:n.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",x.title]})}),r.jsx(f,{currentPermission:t.data,appPermissions:i.data})]})}export{er as default};