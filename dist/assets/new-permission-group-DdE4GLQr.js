import{j as r,dT as o,p as m,H as p,C as s,dp as e,dm as a}from"./index-DMR9Maie.js";import{u as n,E as d}from"./error-block-k_hEHuwv.js";import{P as u}from"./permissions-group-create-view-9DfmfTXr.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-CiTrA1pf.js";import"./form-provider-4VamkToT.js";import"./TextField-Bm5ELSFV.js";import"./FormControl-BdFY560g.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DYk2T8jE.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BORd5zgj.js";import"./Select-CiZYe2qb.js";import"./Menu-CvvkjWBE.js";import"./InputBase-DR0fCAT-.js";import"./FormHelperText-DEevnlmG.js";import"./Rating-UuO5LYWr.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-Do_EhAkR.js";import"./index-BvR8-QHv.js";import"./Slider-j5oxmhZY.js";import"./RadioGroup-CSjDnUrZ.js";import"./FormGroup-3NJkwRQV.js";import"./FormControlLabel-D6vW3SHP.js";import"./utils-9U5MxRpO.js";import"./index-Bj7PJKGj.js";import"./countries-DSLisFCy.js";import"./InputAdornment-uhfPCmvF.js";import"./Autocomplete-Co0MrA8Y.js";import"./Chip-BlYP7ziA.js";import"./country-select-w33fwywc.js";import"./Checkbox-8SNSNdiU.js";import"./upload-avatar-DFuPvZB1.js";import"./format-number-vxMLQ75Z.js";import"./image-CDdYtbMq.js";import"./DatePicker-BF_5SpW8.js";import"./DialogContent-DH_g6sSZ.js";import"./ListItem-DgTOMIV5.js";import"./MobileDateTimePicker-CiIORD_3.js";import"./Tabs-DRBSOW3j.js";import"./KeyboardArrowRight-Cadhk5j3.js";import"./useMutation-BTovKxdg.js";const c={title:`Create a new Permissions Group | Dashboard - ${s.site.name}`};function or(){const t=n({queryKey:["permissions"],queryFn:async()=>{const{data:i}=await e.get(a.permissions.list);return i}});return t.isPending||t.isLoading?r.jsx(o,{}):t.isError?r.jsx(d,{route:m.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(p,{children:r.jsxs("title",{children:[" ",c.title]})}),r.jsx(u,{appPermissions:t.data})]})}export{or as default};
