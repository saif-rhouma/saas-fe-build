import{j as r,dT as e,p as a,H as n,C as u,dp as s,dm as p}from"./index-DBAnnifB.js";import{u as m,E as d}from"./error-block-I6x1Hy75.js";import{S as c}from"./staff-create-view-CGEFaoTs.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-DBItHaBE.js";import"./form-provider-C9WrYleO.js";import"./TextField-Cnf5s-_6.js";import"./FormControl-BL4Ls0ff.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-B6YlaWfN.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-qH7g1y9y.js";import"./Select-Cs1GmroI.js";import"./Menu-CWYUzvJj.js";import"./InputBase-Dk2d0D5e.js";import"./FormHelperText-DbwQqqnD.js";import"./Rating-DsIJUcaL.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-CpxSiSi_.js";import"./index-B9zhif9o.js";import"./Slider-BALWrmvq.js";import"./RadioGroup-C_0xPGj6.js";import"./FormGroup-ZuySfzWi.js";import"./FormControlLabel-BLHOqcns.js";import"./utils-C3i7epmT.js";import"./index-BHbW1OCY.js";import"./countries-DSLisFCy.js";import"./InputAdornment-kj6j4mRM.js";import"./Autocomplete-Bk7RHyx1.js";import"./Chip-DfL_ynnF.js";import"./country-select-SNPz2g0K.js";import"./Checkbox-C9zyd1yT.js";import"./upload-avatar-CgBNTr-y.js";import"./format-number-DHkj0q5I.js";import"./image-V4smZB5P.js";import"./DatePicker-WvioqOmJ.js";import"./DialogContent-BOG7TMWB.js";import"./ListItem-CRRiYsyQ.js";import"./MobileDateTimePicker-kmTIkQgP.js";import"./Tabs-D1nVhLuN.js";import"./KeyboardArrowRight-tacz4Y6j.js";import"./useMutation-DLdc3eWl.js";import"./schema-helper-CvPOGW5C.js";const f={title:`Create a new user | Dashboard - ${u.site.name}`};function pr(){const t=m({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await s.get(p.permissions.list);return o}}),i=m({queryKey:["permissions-groups"],queryFn:async()=>{const{data:o}=await s.get(p.permissionsGroup.list);return o}});return i.isLoading||t.isLoading?r.jsx(e,{}):t.isError||i.isError?r.jsx(d,{route:a.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",f.title]})}),r.jsx(c,{appPermissions:t.data,appPermissionsGroup:i.data})]})}export{pr as default};
