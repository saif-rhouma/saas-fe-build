import{j as r,dT as a,p as n,H as u,C as d,dp as m,dm as p}from"./index-Blsk_n2J.js";import{u as e,E as c}from"./error-block-Cp70Gs-C.js";import{u as l}from"./use-params-DwIFgDk2.js";import{P as f}from"./permissions-group-create-view-CDlR6sBx.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-DQl07oU5.js";import"./form-provider-DdfiYo_S.js";import"./TextField-BKSxA_Cs.js";import"./FormControl-qbY7_VIN.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BYZCvd35.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bl7YzlTQ.js";import"./Select-ee9RPtAk.js";import"./Menu-CZN5SQuC.js";import"./InputBase-cMEccQYG.js";import"./FormHelperText-CHZY3fg7.js";import"./Rating-hCyG6wcZ.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-BNs7J7mr.js";import"./index-FRfytyt8.js";import"./Slider-l7vrXkor.js";import"./RadioGroup-B0p7NR0g.js";import"./FormGroup-CvSak5XN.js";import"./FormControlLabel-CB8Q9wIG.js";import"./utils-q9gw6RHQ.js";import"./index-DstcX7rq.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BWmNxI1m.js";import"./Autocomplete-DNr_vrjq.js";import"./Chip-BrbLQ3s5.js";import"./country-select-DRYKmuys.js";import"./Checkbox-B-93dYv5.js";import"./upload-avatar-Y5cPPAL9.js";import"./format-number-CrK_YprG.js";import"./image-Cb1bD9tg.js";import"./DatePicker-BcikrSOj.js";import"./DialogContent-CB0eeVYr.js";import"./ListItem-D58zR2IT.js";import"./MobileDateTimePicker-Dj8bi4PE.js";import"./Tabs-JjNAVrJX.js";import"./KeyboardArrowRight-DwIijAwp.js";import"./useMutation-9mDdNxrY.js";const x={title:`Permissions Group edit | Dashboard - ${d.site.name}`};function er(){const{id:s=""}=l(),t=e({queryKey:["permissions-group",s],queryFn:async()=>{const{data:o}=await m.get(p.permissionsGroup.details+s);return o}}),i=e({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await m.get(p.permissions.list);return o}});return i.isLoading||t.isLoading?r.jsx(a,{}):t.isError||i.isError?r.jsx(c,{route:n.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",x.title]})}),r.jsx(f,{currentPermission:t.data,appPermissions:i.data})]})}export{er as default};