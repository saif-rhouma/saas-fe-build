import{j as r,dT as n,p as d,H as u,C as c,dp as p,dm as m}from"./index-BNST9t3H.js";import{u as a,E as f}from"./error-block-DFMrUAWZ.js";import{u as y}from"./use-params-RCDbbnPs.js";import{S as l}from"./staff-create-view-CsFJioyN.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-BiTdiLox.js";import"./form-provider-BNtu7LB5.js";import"./TextField-XhUvK9fJ.js";import"./FormControl-LqjWjsHB.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BKRRW4uk.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BA37t66N.js";import"./Select-CO9g0L3k.js";import"./Menu-0-Hoa3ia.js";import"./InputBase-B53atiLK.js";import"./FormHelperText-BxJIEqds.js";import"./Rating-SUN7LmWn.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-FUkieYNV.js";import"./index-BqwDHqj-.js";import"./Slider-CwRTu9Nu.js";import"./RadioGroup-B-Un6V4l.js";import"./FormGroup-DxIrRj-4.js";import"./FormControlLabel-rUw4AD6l.js";import"./utils-rQONW9Cc.js";import"./index-D4rN_k6Q.js";import"./countries-DSLisFCy.js";import"./InputAdornment-CF1A_q0t.js";import"./Autocomplete-LuGCl68c.js";import"./Chip-CIWjz3HQ.js";import"./country-select-D-FzK9b2.js";import"./Checkbox-CO6e7jJW.js";import"./upload-avatar-DVJoxmTC.js";import"./format-number-DalNf45u.js";import"./image-Dv-AG5zQ.js";import"./DatePicker-Dg_ZdpM0.js";import"./DialogContent-DHjRqSAQ.js";import"./ListItem-3GvF7WdZ.js";import"./MobileDateTimePicker-CGGE3WaR.js";import"./Tabs-C3pqEdNS.js";import"./KeyboardArrowRight-DqZ8rSQg.js";import"./useMutation-BKsYnDxa.js";import"./schema-helper-C8Rc66eZ.js";const g={title:`User edit | Dashboard - ${c.site.name}`};function nr(){const{id:e=""}=y(),i=a({queryKey:["staff",e],queryFn:async()=>{const{data:t}=await p.get(m.staff.details+e);return t}}),o=a({queryKey:["permissions"],queryFn:async()=>{const{data:t}=await p.get(m.permissions.list);return t}}),s=a({queryKey:["permissions-groups"],queryFn:async()=>{const{data:t}=await p.get(m.permissionsGroup.list);return t}});return o.isLoading||i.isLoading||s.isLoading?r.jsx(n,{}):i.isError||o.isError||s.isError?r.jsx(f,{route:d.dashboard.staff.root}):r.jsxs(r.Fragment,{children:[r.jsx(u,{children:r.jsxs("title",{children:[" ",g.title]})}),r.jsx(l,{currentStaff:i.data,appPermissions:o.data,appPermissionsGroup:s.data})]})}export{nr as default};