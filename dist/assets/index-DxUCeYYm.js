import{r as u,j as e,S as P,I as i,w as C,bR as W,p as g,H as y,C as I}from"./index-qTpQGZSM.js";import{C as S}from"./custom-breadcrumbs-BGUga5Db.js";import{a}from"./component-block-DkY8eQss.js";import{T as t}from"./TextField-DlbgkIdM.js";import{I as n}from"./InputAdornment-AOuf2E7W.js";import{C as T}from"./component-hero-J_burMe4.js";import{S as M}from"./component-template-BBVYEv6O.js";import"./FormControl-BpZ03tA-.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DcOK32WR.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-DnNlyvb5.js";import"./Select-CPhaOcE2.js";import"./Menu-rdkUPF4f.js";import"./InputBase-iWMV7tHw.js";import"./FormHelperText-B0yAPKEP.js";import"./CardHeader-yB_ZScpU.js";import"./CardContent-Du86eNd1.js";const x=[{value:"USD",label:"$"},{value:"EUR",label:"€"},{value:"BTC",label:"฿"},{value:"JPY",label:"¥"}];function d({variant:l}){const[c,f]=u.useState("EUR"),[r,p]=u.useState({amount:"",password:"",weight:"",weightRange:"",showPassword:!1}),h=u.useCallback(s=>{f(s.target.value)},[]),m=s=>w=>{p({...r,[s]:w.target.value})},j=u.useCallback(()=>{p({...r,showPassword:!r.showPassword})},[r]),b=u.useCallback(s=>{s.preventDefault()},[]),o={gap:3,flexDirection:"column"};return e.jsxs(P,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsxs(a,{title:"General",sx:o,children:[e.jsx(t,{variant:l,fullWidth:!0,label:"Inactive"}),e.jsx(t,{variant:l,required:!0,fullWidth:!0,label:"Activated",defaultValue:"Hello Minimal"}),e.jsx(t,{variant:l,fullWidth:!0,type:"password",label:"Password",autoComplete:"current-password"}),e.jsx(t,{variant:l,disabled:!0,fullWidth:!0,label:"Disabled",defaultValue:"Hello Minimal"})]}),e.jsxs(a,{title:"With icon & adornments",sx:o,children:[e.jsx(t,{variant:l,fullWidth:!0,label:"Filled",InputProps:{startAdornment:e.jsx(n,{position:"start",children:e.jsx(i,{icon:"solar:user-rounded-bold",width:24})})}}),e.jsx(t,{variant:l,disabled:!0,fullWidth:!0,label:"Disabled",defaultValue:"Hello Minimal",InputProps:{startAdornment:e.jsx(n,{position:"start",children:e.jsx(i,{icon:"solar:user-rounded-bold",width:24})})}}),e.jsx(t,{variant:l,fullWidth:!0,label:"With normal TextField",InputProps:{startAdornment:e.jsx(n,{position:"start",children:"Kg"})}}),e.jsx(t,{variant:l,fullWidth:!0,value:r.weight,onChange:m("weight"),helperText:"Weight",InputProps:{endAdornment:e.jsx(n,{position:"end",children:"Kg"})}}),e.jsx(t,{variant:l,fullWidth:!0,type:r.showPassword?"text":"password",value:r.password,onChange:m("password"),label:"Password",InputProps:{startAdornment:e.jsx(n,{position:"start",children:e.jsx(i,{icon:"solar:user-rounded-bold",width:24})}),endAdornment:e.jsx(n,{position:"end",children:e.jsx(C,{onClick:j,onMouseDown:b,edge:"end",children:r.showPassword?e.jsx(i,{icon:"solar:eye-bold",width:24}):e.jsx(i,{icon:"solar:eye-closed-bold",width:24})})})}})]}),e.jsxs(a,{title:"With caption",sx:o,children:[e.jsx(t,{variant:l,fullWidth:!0,label:"Error",defaultValue:"Hello Minimal",helperText:"Incorrect entry."}),e.jsx(t,{variant:l,error:!0,fullWidth:!0,label:"Error",defaultValue:"Hello Minimal",helperText:"Incorrect entry."})]}),e.jsxs(a,{title:"Type",sx:o,children:[e.jsx(t,{variant:l,fullWidth:!0,type:"password",label:"Password",autoComplete:"current-password"}),e.jsx(t,{variant:l,fullWidth:!0,type:"number",label:"Number",defaultValue:0,InputLabelProps:{shrink:!0}}),e.jsx(t,{variant:l,fullWidth:!0,label:"Search",type:"search"})]}),e.jsxs(a,{title:"Sizes",sx:o,children:[e.jsx(t,{variant:l,fullWidth:!0,label:"Size",size:"small",defaultValue:"Small"}),e.jsx(t,{variant:l,fullWidth:!0,label:"Size",defaultValue:"Normal"})]}),e.jsxs(a,{title:"Select",sx:o,children:[e.jsx(t,{id:"select-currency-label-x",variant:l,select:!0,fullWidth:!0,label:"Select",value:c,onChange:h,helperText:"Please select your currency",InputLabelProps:{htmlFor:`${l}-select-currency-label`},inputProps:{id:`${l}-select-currency-label`},children:x.map(s=>e.jsx(W,{value:s.value,children:s.label},s.value))}),e.jsx(t,{variant:l,select:!0,fullWidth:!0,size:"small",value:c,label:"Native select",SelectProps:{native:!0},onChange:h,helperText:"Please select your currency",InputLabelProps:{htmlFor:`${l}-native-select-currency-label`},inputProps:{id:`${l}-native-select-currency-label`},children:x.map(s=>e.jsx("option",{value:s.value,children:s.label},s.value))})]}),e.jsxs(a,{title:"Multiline",sx:o,children:[e.jsx(t,{variant:l,fullWidth:!0,multiline:!0,maxRows:4,label:"Multiline",value:"Controlled"}),e.jsx(t,{variant:l,fullWidth:!0,multiline:!0,placeholder:"Placeholder",label:"Multiline Placeholder"}),e.jsx(t,{variant:l,rows:4,fullWidth:!0,multiline:!0,label:"Multiline",defaultValue:"Default Value"})]})]})}function V(){const l=[{name:"Outlined",component:e.jsx(d,{variant:"outlined"})},{name:"Filled",component:e.jsx(d,{variant:"filled"})},{name:"Standard",component:e.jsx(d,{variant:"standard"})}];return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx(S,{heading:"Textfield",links:[{name:"Components",href:g.components},{name:"Textfield"}],moreLink:["https://mui.com/components/text-fields"]})}),e.jsx(M,{data:l})]})}const k={title:`Textfield | MUI - ${I.site.name}`};function Y(){return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsxs("title",{children:[" ",k.title]})}),e.jsx(V,{})]})}export{Y as default};
