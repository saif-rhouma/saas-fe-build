import{j as r,dT as e,p as a,H as n,C as u,dp as s,dm as p}from"./index-BNST9t3H.js";import{u as m,E as d}from"./error-block-DFMrUAWZ.js";import{S as c}from"./staff-create-view-CsFJioyN.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-BiTdiLox.js";import"./form-provider-BNtu7LB5.js";import"./TextField-XhUvK9fJ.js";import"./FormControl-LqjWjsHB.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BKRRW4uk.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BA37t66N.js";import"./Select-CO9g0L3k.js";import"./Menu-0-Hoa3ia.js";import"./InputBase-B53atiLK.js";import"./FormHelperText-BxJIEqds.js";import"./Rating-SUN7LmWn.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-FUkieYNV.js";import"./index-BqwDHqj-.js";import"./Slider-CwRTu9Nu.js";import"./RadioGroup-B-Un6V4l.js";import"./FormGroup-DxIrRj-4.js";import"./FormControlLabel-rUw4AD6l.js";import"./utils-rQONW9Cc.js";import"./index-D4rN_k6Q.js";import"./countries-DSLisFCy.js";import"./InputAdornment-CF1A_q0t.js";import"./Autocomplete-LuGCl68c.js";import"./Chip-CIWjz3HQ.js";import"./country-select-D-FzK9b2.js";import"./Checkbox-CO6e7jJW.js";import"./upload-avatar-DVJoxmTC.js";import"./format-number-DalNf45u.js";import"./image-Dv-AG5zQ.js";import"./DatePicker-Dg_ZdpM0.js";import"./DialogContent-DHjRqSAQ.js";import"./ListItem-3GvF7WdZ.js";import"./MobileDateTimePicker-CGGE3WaR.js";import"./Tabs-C3pqEdNS.js";import"./KeyboardArrowRight-DqZ8rSQg.js";import"./useMutation-BKsYnDxa.js";import"./schema-helper-C8Rc66eZ.js";const f={title:`Create a new user | Dashboard - ${u.site.name}`};function pr(){const t=m({queryKey:["permissions"],queryFn:async()=>{const{data:o}=await s.get(p.permissions.list);return o}}),i=m({queryKey:["permissions-groups"],queryFn:async()=>{const{data:o}=await s.get(p.permissionsGroup.list);return o}});return i.isLoading||t.isLoading?r.jsx(e,{}):t.isError||i.isError?r.jsx(d,{route:a.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(n,{children:r.jsxs("title",{children:[" ",f.title]})}),r.jsx(c,{appPermissions:t.data,appPermissionsGroup:i.data})]})}export{pr as default};