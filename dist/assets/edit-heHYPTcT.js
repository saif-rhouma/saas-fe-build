import{j as r,ec as a,p as n,H as d,C as u,dJ as m,dH as e}from"./index-CwDFRBrV.js";import{u as p,E as f}from"./error-block-po56rbru.js";import{u as c}from"./use-params-BEoNI6LX.js";import{S as l}from"./staff-create-view-XPWy2A00.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-tdSVNm9k.js";import"./form-provider-C8IltM3z.js";import"./TextField-CHPZUTqF.js";import"./FormControl-yMCQcYEm.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CKyW86qE.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BavGwz4i.js";import"./Select-C_u8K-J_.js";import"./Menu-B_jyagBS.js";import"./InputBase-Bn2YUrmy.js";import"./FormHelperText-Bj0ulyme.js";import"./Rating-C4JeVFy2.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-eNq_8vRL.js";import"./index-BP8NwpZp.js";import"./Slider-Brhk4K8C.js";import"./RadioGroup-c9F65hOo.js";import"./FormGroup-DOTqUq1f.js";import"./FormControlLabel-HvXv_MVH.js";import"./index-DM_1Xs39.js";import"./countries-DSLisFCy.js";import"./InputAdornment-DEbikF0Z.js";import"./Autocomplete-CmyTYkoe.js";import"./Chip-BadVSybg.js";import"./country-select-DGH5tKc3.js";import"./Checkbox-Cm203eFc.js";import"./upload-avatar-Bqr4alq-.js";import"./format-number-Ch538jHW.js";import"./image-D_atTa8y.js";import"./DatePicker-DijfO7Ga.js";import"./DialogContent-DQegyPQl.js";import"./ListItem-M-XT_teX.js";import"./MobileDateTimePicker-DjMxEeI_.js";import"./Tabs-BdVdVdbh.js";import"./KeyboardArrowRight-DJc55wOs.js";import"./useMutation-CkTHNDXi.js";const x={title:`User edit | Dashboard - ${u.site.name}`};function er(){const{id:o=""}=c(),t=p({queryKey:["staff",o],queryFn:async()=>(await m.get(e.staff.details+o)).data}),i=p({queryKey:["permissions"],queryFn:async()=>{const{data:s}=await m.get(e.permissions.list);return s}});return i.isLoading||t.isLoading?r.jsx(a,{}):t.isError||i.isError?r.jsx(f,{route:n.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(d,{children:r.jsxs("title",{children:[" ",x.title]})}),r.jsx(l,{currentStaff:t.data,appPermissions:i.data})]})}export{er as default};