import{j as e,H as i,C as o}from"./index-DLJImauo.js";import{u as s}from"./use-params-DeowL31Y.js";import{S as a}from"./staff-create-view-0VvTH_cl.js";import"./custom-breadcrumbs-B-49wW2q.js";import"./form-provider-CFcdla9F.js";import"./TextField-Dn-4Yx6H.js";import"./FormControl-CkwXYy0A.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CEebhHey.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CL79af0c.js";import"./Select-C24IVDgk.js";import"./Menu-u9Fg2yBB.js";import"./InputBase-DlzL5OFi.js";import"./FormHelperText-kKfXHIoW.js";import"./index-CVIDvc2K.js";import"./countries-DSLisFCy.js";import"./InputAdornment-DKC0KPnD.js";import"./useMutation-7HTcUz2p.js";import"./utils-km2FGkQ4.js";import"./editor-Cv_jl3Bs.js";import"./index-B2cAHtCt.js";import"./image-BZDZbX9M.js";import"./FormControlLabel-C_QV2Cmj.js";import"./Checkbox-iCj-brcW.js";const n=[{id:1,reminderId:"001",staffName:"John Doe",phoneNumber:"+1 (555) 123-4567",emailAddress:"johndoe@example.com",status:!0},{id:2,reminderId:"002",staffName:"Jane Smith",phoneNumber:"+1 (555) 987-6543",emailAddress:"janesmith@example.com",status:!1},{id:3,reminderId:"003",staffName:"Michael Brown",phoneNumber:"+1 (555) 456-7890",emailAddress:"michaelbrown@example.com",status:!0},{id:4,reminderId:"004",staffName:"Emily Johnson",phoneNumber:"+1 (555) 321-0987",emailAddress:"emilyjohnson@example.com",status:!1},{id:5,reminderId:"005",staffName:"David Wilson",phoneNumber:"+1 (555) 654-3210",emailAddress:"davidwilson@example.com",status:!0}],d={title:`Staff edit | Dashboard - ${o.site.name}`};function G(){const{id:t=""}=s(),m=n.find(r=>r.id===parseInt(t));return console.log(t),console.log(m),e.jsxs(e.Fragment,{children:[e.jsx(i,{children:e.jsxs("title",{children:[" ",d.title]})}),e.jsx(a,{staff:m})]})}export{G as default};