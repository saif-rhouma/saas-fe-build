import{j as t,ec as o,p as m,H as p,C as s,dJ as e,dH as a}from"./index-CcYGUVHj.js";import{u as n,E as d}from"./error-block-DrLwzfMU.js";import{S as f}from"./staff-create-view-DLGQ_GDC.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-B2pKwILD.js";import"./form-provider-CdJJxIi_.js";import"./TextField-Q8D-fe1P.js";import"./FormControl-DyEi2am2.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-C9X7_uSi.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Ct8Q-9i0.js";import"./Select-oUaPpSxi.js";import"./Menu-DMwTpGo6.js";import"./InputBase-D4Zcsm26.js";import"./FormHelperText-CaS0BGUe.js";import"./Rating-BJzZeIIm.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-CmrbN6Cg.js";import"./index-Bv3fybKl.js";import"./Slider-BfGPK7NS.js";import"./RadioGroup-BKIHz0-8.js";import"./FormGroup-DkBXOvcX.js";import"./FormControlLabel-BEskPPUu.js";import"./index-SZ6SJdRJ.js";import"./countries-DSLisFCy.js";import"./InputAdornment--gMbc1oW.js";import"./Autocomplete-BoqBGuRO.js";import"./Chip-BF8Po0b7.js";import"./country-select-8WIzbqhk.js";import"./Checkbox-DgQwk_ps.js";import"./upload-avatar-pih1cWPZ.js";import"./format-number-DKjUSt8e.js";import"./image-l-gE1IT4.js";import"./DatePicker-MBb6QCnS.js";import"./DialogContent-Blcxs__o.js";import"./ListItem-DhWHRhwD.js";import"./MobileDateTimePicker-DSMzaFF0.js";import"./Tabs-s_UE9AaI.js";import"./KeyboardArrowRight-u_Zt7Aff.js";import"./useMutation-Cy6dNzJR.js";const u={title:`Create a new staff | Dashboard - ${s.site.name}`};function it(){const r=n({queryKey:["permissions"],queryFn:async()=>{const{data:i}=await e.get(a.permissions.list);return i}});return r.isPending||r.isLoading?t.jsx(o,{}):r.isError?t.jsx(d,{route:m.dashboard.staff.root}):t.jsxs(t.Fragment,{children:[t.jsx(p,{children:t.jsxs("title",{children:[" ",u.title]})}),t.jsx(f,{appPermissions:r.data})]})}export{it as default};