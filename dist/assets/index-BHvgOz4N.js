import{eo as D,b as P,j as e,bZ as T,S as j,aH as A,v as w,r as v,aR as U,I as S,dh as I,eq as M,o as V,b_ as E,B as b,w as C,bR as k,D as R,T as N,p as _,bT as B,H as z,C as G}from"./index-Cq03K-HC.js";import{C as J}from"./custom-breadcrumbs-C_F-6vOC.js";import{z as o,i as L,b as $,u as W,t as Z,a as Y,F as l}from"./form-provider-DGoPfYCb.js";import"./image-DitvMElQ.js";import"./editor-D16lNrfB.js";import{s as u}from"./schema-helper-DkKalxt7.js";import{f as O}from"./upload-avatar-CoRpPeQR.js";import{C as K}from"./CircularProgress-sp-m8OZh.js";import{I as F}from"./InputAdornment-B7jHbOut.js";import{L as Q}from"./LoadingButton-3T23lww4.js";import{C as X}from"./component-hero-BTODoQtm.js";import{C as ee}from"./component-block-Cp6UrCmO.js";import{F as te}from"./FormControlLabel-CS2mv3Te.js";import"./TextField-BNZ3YpVQ.js";import"./FormControl-DUlfZx4z.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-D6SX5sCR.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bx5V1G4l.js";import"./Select-BJK6Q71-.js";import"./Menu-B_EWYTTU.js";import"./InputBase-CPtucf_J.js";import"./FormHelperText-BdgqWWO0.js";import"./Rating-C9YzUf05.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-ic8LVZXa.js";import"./RadioGroup-CqyyD7XC.js";import"./FormGroup-ByRTQQuh.js";import"./index-DqNxVOmH.js";import"./countries-DSLisFCy.js";import"./Autocomplete-CidbBtOC.js";import"./Chip-x2W7r02e.js";import"./country-select-D9zKFD0C.js";import"./Checkbox-B5P4NoLN.js";import"./DatePicker-C0kjDQAX.js";import"./DialogContent-D0WbZEYR.js";import"./ListItem-Dwol_2rN.js";import"./MobileDateTimePicker-DgPLkewz.js";import"./Tabs-Bg2egs3q.js";import"./KeyboardArrowRight-yBnSCV6-.js";import"./index-BOf1bnN2.js";import"./format-number-DITXUPMN.js";const le=o.object({fullName:o.string().min(1,{message:"Full name is required!"}).min(6,{message:"Mininum 6 characters!"}).max(32,{message:"Maximum 32 characters!"}),email:o.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:u.phoneNumber({isValidPhoneNumber:L}),editor:u.editor().min(100,{message:"Content must be at least 100 characters"}).max(200,{message:"Content must be less than 200 characters"}),age:o.number().min(1,{message:"Age is required!"}).min(18,{message:"Age must be between 18 and 100"}).max(100,{message:"Age must be between 18 and 100"}),startDate:u.date({message:{required_error:"Start date is required!"}}),endDate:u.date({message:{required_error:"End date is required!"}}),password:o.string().min(1,{message:"Password is required!"}).min(6,{message:"Password is too short!"}),confirmPassword:o.string().min(1,{message:"Confirm password is required!"}),autocomplete:u.objectOrNull({message:{required_error:"Autocomplete is required!"}}),singleCountry:u.objectOrNull({message:{required_error:"Single country is required!"}}),multiCountry:o.string().array().min(2,{message:"Must have at least 2 items!"}),singleSelect:o.string().min(1,{message:"Single select is required!"}),multiSelect:o.string().array().min(2,{message:"Must have at least 2 items!"}),rating:o.number().min(1,{message:"Rating is required!"}),radioGroup:o.string().min(1,{message:"Choose at least one option!"}),checkbox:u.boolean({message:{required_error:"Checkbox is required!"}}),switch:u.boolean({message:{required_error:"Switch is required!"}}),multiCheckbox:o.string().array().nonempty({message:"Choose at least one option!"}),multiSwitch:o.string().array().nonempty({message:"Choose at least one option!"}),slider:o.number().min(10,{message:"Mininum value is >= 10"}),sliderRange:o.number().array().refine(t=>t[0]>=20&&t[1]<=80,{message:"Range must be between 20 and 80"}),singleUpload:u.file({message:{required_error:"Single upload is required!"}}),multiUpload:u.files({message:{required_error:"Multi upload is required!"}})}).refine(t=>t.password===t.confirmPassword,{message:"Passwords do not match!",path:["confirmPassword"]}).refine(t=>!D(t.startDate,t.endDate),{message:"End date cannot be earlier than start date!",path:["endDate"]}),p={item:"item",key:"item__key",value:"item__value"};function se({sx:t}){const s=P(),{watch:n,formState:a}=$(),x=n(),m=Object.keys(x).length,f=Object.keys(a.errors).length;return e.jsx(T,{children:e.jsxs(j,{sx:{...A({color:w(s.vars.palette.grey["900Channel"],.9)}),top:0,right:0,height:1,width:320,position:"fixed",overflowY:"auto",color:"common.white",zIndex:s.zIndex.drawer,...t},children:[e.jsx(h,{label:"State",sx:{color:"success.light"},children:["submitCount","isDirty","isValid","disabled","isLoading","isSubmitted","isSubmitting","isValidating","isSubmitSuccessful"].map(d=>e.jsxs("div",{className:p.item,children:[e.jsx("span",{className:p.key,children:d}),e.jsx("span",{className:p.value,children:JSON.stringify(a[d],null,2)})]},d))}),e.jsx(h,{label:`Values (${m})`,sx:{color:"warning.light"},children:Object.keys(x).map(d=>e.jsxs("div",{className:p.item,children:[e.jsx("span",{className:p.key,children:d}),e.jsx("span",{className:p.value,children:ie(x,d)})]},d))}),e.jsx(h,{label:`Errors (${f})`,sx:{color:"error.light"},children:JSON.stringify(Object.keys(a.errors),null,2)}),e.jsx(h,{label:"Dirty fields",sx:{color:"info.light"},children:JSON.stringify(Object.keys(a.dirtyFields),null,2)}),e.jsx(h,{label:"Touched fields",sx:{color:"info.light"},children:JSON.stringify(Object.keys(a.touchedFields),null,2)})]})})}function h({label:t,children:s,sx:n}){const[a,x]=v.useState(!0);return e.jsxs(j,{sx:{borderBottom:m=>`solid 1px ${m.vars.palette.divider}`,...n},children:[e.jsxs(U,{onClick:()=>x(!a),sx:{p:1.5,typography:"overline",justifyContent:"space-between",...a&&{bgcolor:"action.hover"}},children:[t,e.jsx(S,{width:16,icon:"eva:arrow-ios-downward-fill"})]}),e.jsx(I,{in:a,children:e.jsx(j,{spacing:.25,sx:{p:1,typography:"caption",[`& .${p.item}`]:{display:"inline-flex",alignItems:"flex-start"},[`& .${p.key}`]:{px:.5,color:"common.white",bgcolor:m=>w(m.vars.palette.common.blackChannel,.4)},[`& .${p.value}`]:{flex:"1 1 auto",textAlign:"right",bgcolor:m=>w(m.vars.palette.common.blackChannel,.2)}},children:s})})]})}function ie(t,s){return s==="singleUpload"?JSON.stringify(t.singleUpload&&O(t.singleUpload),null,2):s==="multiUpload"?JSON.stringify(t.multiUpload.map(n=>O(n)),null,2):JSON.stringify(t[s],null,2)||"---"}const y=[{value:"option 1",label:"Option 1"},{value:"option 2",label:"Option 2"},{value:"option 3",label:"Option 3"},{value:"option 4",label:"Option 4"},{value:"option 5",label:"Option 5"},{value:"option 6",label:"Option 6"},{value:"option 7",label:"Option 7"},{value:"option 8",label:"Option 8"}],ae={age:0,email:"",fullName:"",phoneNumber:"",editor:"",autocomplete:null,password:"",confirmPassword:"",startDate:M(),endDate:null,singleUpload:"",multiUpload:[],singleSelect:"",multiSelect:[],singleCountry:"",multiCountry:[],rating:0,radioGroup:"",switch:!1,multiSwitch:[],checkbox:!1,multiCheckbox:[],slider:8,sliderRange:[15,80]};function re({debug:t}){const s=V(),n=W({resolver:Z(le),defaultValues:ae}),{watch:a,reset:x,setValue:m,handleSubmit:f,formState:{isSubmitting:d}}=n,H=a(),q=f(async r=>{try{await new Promise(c=>setTimeout(c,3e3)),x(),console.info("DATA",r)}catch(c){console.error(c)}});return e.jsxs(e.Fragment,{children:[d&&e.jsx(E,{open:!0,sx:{zIndex:r=>r.zIndex.modal+1},children:e.jsx(K,{color:"primary"})}),e.jsxs(Y,{methods:n,onSubmit:q,children:[t&&e.jsx(se,{sx:{display:{xs:"none",lg:"block"}}}),e.jsxs(b,{gap:5,display:"flex",alignItems:"flex-start",flexDirection:{xs:"column",md:"row"},sx:{width:1,...t&&{pr:{lg:"320px"}}},children:[e.jsxs(b,{gap:3,display:"flex",flex:"1 0 auto",flexDirection:"column",sx:{width:{xs:1,md:.5}},children:[e.jsxs(g,{children:[e.jsx(i,{children:e.jsx(l.Text,{name:"fullName",label:"Full name",helperText:"Helper text"})}),e.jsx(i,{children:e.jsx(l.Text,{name:"email",label:"Email address"})})]}),e.jsxs(g,{children:[e.jsx(i,{label:"RHFPhone",children:e.jsx(l.Phone,{name:"phoneNumber",label:"Phone number"})}),e.jsx(i,{children:e.jsx(l.Text,{name:"age",label:"Age",type:"number"})})]}),e.jsxs(g,{children:[e.jsx(l.DatePicker,{name:"startDate",label:"Start date"}),e.jsx(l.DatePicker,{name:"endDate",label:"End date"})]}),e.jsxs(g,{children:[e.jsx(i,{children:e.jsx(l.Text,{name:"password",label:"Password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(F,{position:"end",children:e.jsx(C,{onClick:s.onToggle,edge:"end",children:e.jsx(S,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}})}),e.jsx(i,{children:e.jsx(l.Text,{name:"confirmPassword",label:"Confirm password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(F,{position:"end",children:e.jsx(C,{onClick:s.onToggle,edge:"end",children:e.jsx(S,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}})})]}),e.jsx(i,{label:"RHFAutocomplete",children:e.jsx(l.Autocomplete,{name:"autocomplete",label:"Autocomplete",options:y,getOptionLabel:r=>r.label,isOptionEqualToValue:(r,c)=>r.value===c.value,renderOption:(r,c)=>v.createElement("li",{...r,key:c.value},c.label)})}),e.jsx(i,{label:"RHFAutocomplete",children:e.jsx(l.CountrySelect,{fullWidth:!0,name:"singleCountry",label:"Single country",placeholder:"Choose a country"})}),e.jsx(i,{label:"RHFAutocomplete",children:e.jsx(l.CountrySelect,{multiple:!0,fullWidth:!0,limitTags:3,name:"multiCountry",label:"Multi country",placeholder:"Choose a country",helperText:"Helper text"})}),e.jsxs(g,{children:[e.jsx(i,{label:"RHFSelect",children:e.jsxs(l.Select,{name:"singleSelect",label:"Single select",children:[e.jsx(k,{value:"",children:"None"}),e.jsx(R,{sx:{borderStyle:"dashed"}}),y.map(r=>e.jsx(k,{value:r.label,children:r.label},r.value))]})}),e.jsx(i,{label:"RHFMultiSelect",children:e.jsx(l.MultiSelect,{chip:!0,checkbox:!0,name:"multiSelect",label:"Multi select",options:y})})]}),e.jsx(i,{label:"RHFEditor",children:e.jsx(l.Editor,{fullItem:!0,name:"editor",sx:{maxHeight:480}})})]}),e.jsxs(b,{gap:3,display:"flex",flex:"1 0 auto",flexDirection:"column",sx:{width:{xs:1,md:.5}},children:[e.jsx(i,{label:"RHFUpload",children:e.jsx(l.Upload,{name:"singleUpload",maxSize:3145728,onDelete:()=>m("singleUpload",null,{shouldValidate:!0})})}),e.jsx(i,{label:"RHFUpload",children:e.jsx(l.Upload,{multiple:!0,thumbnail:!0,name:"multiUpload",maxSize:3145728,onRemove:r=>m("multiUpload",H.multiUpload.filter(c=>c!==r),{shouldValidate:!0}),onRemoveAll:()=>m("multiUpload",[],{shouldValidate:!0}),onUpload:()=>console.info("ON UPLOAD")})}),e.jsx(l.Rating,{name:"rating"}),e.jsx(l.Checkbox,{name:"checkbox",label:"RHFCheckbox"}),e.jsx(l.Switch,{name:"switch",label:"RHFSwitch"}),e.jsx(l.RadioGroup,{row:!0,name:"radioGroup",label:"RHFRadioGroup",options:[{label:"Option 1",value:"radio-1"},{label:"Option 2",value:"radio-2"},{label:"Option 3",value:"radio-3"}],sx:{gap:4}}),e.jsx(l.MultiCheckbox,{row:!0,name:"multiCheckbox",label:"RHFMultiCheckbox",options:[{label:"Option 1",value:"checkbox-1"},{label:"Option 2",value:"checkbox-2"},{label:"Option 3",value:"checkbox-3"}],sx:{gap:4}}),e.jsx(l.MultiSwitch,{name:"multiSwitch",label:"RHFMultiSwitch",options:[{label:"Option 1",value:"switch-1"},{label:"Option 2",value:"switch-2"},{label:"Option 3",value:"switch-3"}]}),e.jsx(i,{label:"RHFSlider",children:e.jsx(l.Slider,{name:"slider"})}),e.jsx(i,{label:"RHFSlider",children:e.jsx(l.Slider,{name:"sliderRange"})}),e.jsx(Q,{fullWidth:!0,color:"info",size:"large",type:"submit",variant:"soft",loading:d,children:"Submit to check"})]})]})]})]})}function i({sx:t,children:s,label:n="RHFTextField"}){return e.jsxs(j,{spacing:1,sx:{width:1,...t},children:[e.jsx(N,{variant:"caption",sx:{textAlign:"right",fontStyle:"italic",color:"text.disabled",fontSize:a=>a.typography.pxToRem(10)},children:n}),s]})}function g({children:t,sx:s,...n}){return e.jsx(b,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{...s},...n,children:t})}function oe(){const[t,s]=v.useState(!0),n=a=>{s(a.target.checked)};return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:e.jsx(J,{heading:"Form validation",links:[{name:"Components",href:_.components},{name:"Form validation"}],moreLink:["https://react-hook-form.com","https://zod.dev"]})}),e.jsxs(ee,{maxWidth:"xl",sx:{position:"relative"},children:[e.jsx(N,{variant:"h4",children:" React hook form + Zod "}),e.jsx(te,{control:e.jsx(B,{name:"switch-debug",checked:t,onChange:n}),label:"Show Debug",sx:{alignSelf:"flex-start"}}),e.jsx(R,{sx:{my:5}}),e.jsx(re,{debug:t})]})]})}const ne={title:`Form validation | Components - ${G.site.name}`};function Ke(){return e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsxs("title",{children:[" ",ne.title]})}),e.jsx(oe,{})]})}export{Ke as default};