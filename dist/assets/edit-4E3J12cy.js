import{j as r,ec as e,p as n,H as d,C as f,dJ as m,dH as p}from"./index-DyaX_SWt.js";import{u as a,E as u}from"./error-block-BS8v6UlH.js";import{u as c}from"./use-params-CpXzQcZE.js";import{S as l}from"./staff-create-view-C6x2JCkE.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-BBBfmruK.js";import"./form-provider-CtnM8NRj.js";import"./TextField-Bd-wf-qe.js";import"./FormControl-DZFzBqwu.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-ChQRcEq0.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BzUaSDH6.js";import"./Select-aW-1jYsc.js";import"./Menu-cdXnIe8s.js";import"./InputBase-DIwXicuG.js";import"./FormHelperText-DmigciDN.js";import"./Rating-EMFrk-nT.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-6VivnzqK.js";import"./index-UxKv0Fz8.js";import"./Slider-C5zkB3dH.js";import"./RadioGroup-Btp6tOQ_.js";import"./FormGroup-ZYenL2Ra.js";import"./FormControlLabel-DB8AMqn6.js";import"./index-DV-9sifZ.js";import"./countries-DSLisFCy.js";import"./InputAdornment-ZksuxZdO.js";import"./Autocomplete-CB7KoUHG.js";import"./Chip-DagaBQru.js";import"./country-select-BvAnew-c.js";import"./Checkbox-DDVYLWrv.js";import"./upload-avatar-C8JbYnCq.js";import"./format-number-gV4plKym.js";import"./image-B19dostR.js";import"./DatePicker-CrivbYTg.js";import"./DialogContent-ji2na2-g.js";import"./ListItem-hwhAMnMr.js";import"./MobileDateTimePicker-L4LPUDsD.js";import"./Tabs-BNN5MOxy.js";import"./KeyboardArrowRight-CAqmS2kb.js";import"./useMutation-8JHOqP8G.js";const x={title:`Staff edit | Dashboard - ${f.site.name}`};function pr(){const{id:o=""}=c(),t=a({queryKey:["staff",o],queryFn:async()=>(await m.get(p.staff.details+o)).data}),i=a({queryKey:["permissions"],queryFn:async()=>{const{data:s}=await m.get(p.permissions.list);return s}});return i.isLoading||t.isLoading?r.jsx(e,{}):t.isError||i.isError?r.jsx(u,{route:n.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(d,{children:r.jsxs("title",{children:[" ",x.title]})}),r.jsx(l,{currentStaff:t.data,appPermissions:i.data})]})}export{pr as default};