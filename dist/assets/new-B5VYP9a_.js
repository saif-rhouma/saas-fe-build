import{j as r,dT as e,p as a,H as n,C as u,dp as s,dm as p}from"./index-DNUduzdf.js";import{u as m,E as d}from"./error-block-CIoGA_ou.js";import{S as c}from"./staff-create-view-bJ-kG2XU.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-xaxkOPaz.js";import"./form-provider-Bc4k30Da.js";import"./TextField-6Rb6lrwr.js";import"./FormControl-Bi-099x0.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CTVTwIu7.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-DX5Y9dcz.js";import"./Select-B7QtE-mc.js";import"./Menu-BTSMb8hO.js";import"./InputBase-vNgL0uwK.js";import"./FormHelperText-DFZ5t14C.js";import"./Rating-v1PDWPg2.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-BwKOUAEN.js";import"./index-C6wa4o7l.js";import"./Slider-XQVrB2W0.js";import"./RadioGroup-ywsYmzwz.js";import"./FormGroup-CBYEmluE.js";import"./FormControlLabel-DoizJn8S.js";import"./utils-BCWhzzy8.js";import"./index-F5afGJi_.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BS55mf9p.js";import"./Autocomplete-BL_cPq9Y.js";import"./Chip-BKVRFIlM.js";import"./country-select-B6y6qm-8.js";import"./Checkbox-DlLxFjwO.js";import"./upload-avatar-BM4UFEHK.js";import"./format-number-BcLd92wH.js";import"./image-RtGonsw-.js";import"./DatePicker-Dv7_htZh.js";import"./DialogContent-Dd9BzaHb.js";import"./ListItem-BxnuuOz2.js";import"./MobileDateTimePicker-12RDcihh.js";import"./Tabs-KWiZT936.js";import"./KeyboardArrowRight-BCUjH9lG.js";import"./useMutation-BcsgOC3E.js";import"./schema-helper-CxRixuBr.js";const f={title:`Create a new user | Dashboard - ${u.site.name}`};function pr(){const t=m({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await s.get(p.permissions.list);return o}}),i=m({queryKey:["permissions-groups"],queryFn:async()=>{const{data:o}=await s.get(p.permissionsGroup.list);return o}});return i.isLoading||t.isLoading?r.jsx(e,{}):t.isError||i.isError?r.jsx(d,{route:a.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",f.title]})}),r.jsx(c,{appPermissions:t.data,appPermissionsGroup:i.data})]})}export{pr as default};