import{j as t,ec as o,p as m,H as p,C as s,dJ as e,dH as a}from"./index-MU8Aef1d.js";import{u as n,E as d}from"./error-block-CRZzLFBN.js";import{S as f}from"./staff-create-view-C0PyyfvA.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./custom-breadcrumbs-C0lr56d6.js";import"./form-provider-ButI2dhd.js";import"./TextField-kOOjmocd.js";import"./FormControl-CqVBMono.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DgcRCKQy.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Czk24vvg.js";import"./Select-DS35-lJ5.js";import"./Menu-DVn49lYq.js";import"./InputBase-D8sPk2Vu.js";import"./FormHelperText-CRdMe4Vi.js";import"./Rating-RcXdXktn.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DkQPNGFJ.js";import"./index-BnViNM37.js";import"./Slider-tAusQR1I.js";import"./RadioGroup-BxPRuATA.js";import"./FormGroup-CKaw5hCt.js";import"./FormControlLabel-wo2rGh3p.js";import"./index-KXkaILWh.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BqrKXd48.js";import"./Autocomplete-DGOnqBF5.js";import"./Chip-C7HvryWj.js";import"./country-select-DkEwN9oT.js";import"./Checkbox-Brycgjrz.js";import"./upload-avatar-BeMZjnZ7.js";import"./format-number-B_68Y8_p.js";import"./image-BL6GZRKO.js";import"./DatePicker-BtjqmFSD.js";import"./DialogContent-B-P_KFZo.js";import"./ListItem-wyLCxN9c.js";import"./MobileDateTimePicker-DgDe3yTf.js";import"./Tabs-BiMEhVVH.js";import"./KeyboardArrowRight-M3vRdqef.js";import"./useMutation-BNt8bUTF.js";const u={title:`Create a new staff | Dashboard - ${s.site.name}`};function it(){const r=n({queryKey:["permissions"],queryFn:async()=>{const{data:i}=await e.get(a.permissions.list);return i}});return r.isPending||r.isLoading?t.jsx(o,{}):r.isError?t.jsx(d,{route:m.dashboard.staff.root}):t.jsxs(t.Fragment,{children:[t.jsx(p,{children:t.jsxs("title",{children:[" ",u.title]})}),t.jsx(f,{appPermissions:r.data})]})}export{it as default};