import{j as e,B as n,I as g,T,e as d,r as c,dp as w,aB as k,p as v,H as F,C as I}from"./index-Cs0Sdxyr.js";import{C as L}from"./custom-breadcrumbs-BT-Xn517.js";import{F as u,z as s,u as N,t as A,a as B}from"./form-provider-eXyauyxJ.js";import"./editor-CT3ylhik.js";import"./image-Cq9K1zAl.js";import{a as z,b as O,c as R}from"./Stepper-ugeaiHRv.js";import{L as P}from"./LoadingButton-BC7HOYkj.js";import{C as E}from"./component-hero-DLspFZ_U.js";import{C as q}from"./component-block-CH2QnoiR.js";import"./TextField-CLYezYfw.js";import"./FormControl-LO9oSJ-o.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-QrwSoYWN.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CwQQfAsE.js";import"./Select-DDfA3_-T.js";import"./Menu-DSuiBPzi.js";import"./InputBase-BXi8ZaFZ.js";import"./FormHelperText-DkkzjVxJ.js";import"./Rating-BF02HLKo.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-7HzlrEFX.js";import"./RadioGroup-CzKzAp9k.js";import"./FormGroup-BF9selVP.js";import"./FormControlLabel-nLpLCzjO.js";import"./index-B3bfrtVg.js";import"./countries-DSLisFCy.js";import"./InputAdornment-B5qV_qPb.js";import"./Autocomplete-BlKHEWOH.js";import"./Chip-xRW8ggU-.js";import"./country-select-D1lnH3Yh.js";import"./Checkbox-BnpdbSxp.js";import"./upload-avatar-BmI9utwN.js";import"./format-number-TrbPmgcB.js";import"./DatePicker-CTzww6R8.js";import"./DialogContent-Crbj6g6G.js";import"./ListItem-pAOUhWgY.js";import"./MobileDateTimePicker-D7Ni8uEz.js";import"./Tabs-COnq56DM.js";import"./KeyboardArrowRight-jFTTvq_T.js";import"./index-DnS4NWxD.js";import"./CircularProgress-DjaT2AqC.js";function H({steps:t,activeStep:i}){return e.jsx(z,{activeStep:i,alternativeLabel:!0,sx:{mb:5},children:t.map((o,m)=>e.jsx(O,{children:e.jsx(R,{StepIconComponent:({active:l,completed:p})=>e.jsx(n,{display:"flex",alignItems:"center",justifyContent:"center",sx:{width:24,height:24,borderRadius:"50%",color:"text.disabled",typography:"subtitle2",bgcolor:"action.disabledBackground",...l&&{bgcolor:"primary.main",color:"primary.contrastText"},...p&&{bgcolor:"primary.main",color:"primary.contrastText"}},children:p?e.jsx(g,{width:14,icon:"mingcute:check-fill"}):e.jsx(n,{sx:{typography:"subtitle2"},children:m+1})}),children:o})},o))})}function V(){return e.jsxs(e.Fragment,{children:[e.jsx(u.Text,{name:"stepOne.firstName",label:"First name",variant:"filled",InputLabelProps:{shrink:!0}}),e.jsx(u.Text,{name:"stepOne.lastName",label:"Last name",variant:"filled",InputLabelProps:{shrink:!0}})]})}function W(){return e.jsx(u.Text,{name:"stepTwo.age",label:"Age",type:"number",variant:"filled",InputLabelProps:{shrink:!0},helperText:"Age must be between 18 and 100"})}function D(){return e.jsx(u.Text,{name:"stepThree.email",label:"Email",variant:"filled",InputLabelProps:{shrink:!0}})}function $({onReset:t}){return e.jsxs(n,{gap:3,display:"flex",flex:"1 1 auto",alignItems:"center",flexDirection:"column",justifyContent:"center",sx:{borderRadius:"inherit",bgcolor:"background.neutral"},children:[e.jsx(T,{variant:"subtitle1",children:"All steps completed - you're finished"}),e.jsx(d,{variant:"outlined",onClick:t,startIcon:e.jsx(g,{icon:"solar:restart-bold"}),children:"Reset"})]})}const b=["Step one","Step two","Step three"],G=s.object({firstName:s.string().min(1,{message:"Full name is required!"}),lastName:s.string().min(1,{message:"Last name is required!"})}),J=s.object({age:s.number().min(1,{message:"Age is required!"}).min(18,{message:"Age must be between 18 and 100"}).max(100,{message:"Age must be between 18 and 100"})}),K=s.object({email:s.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})}),M=s.object({stepOne:G,stepTwo:J,stepThree:K}),Q={stepOne:{firstName:"",lastName:""},stepTwo:{age:0},stepThree:{email:""}};function U(){const[t,i]=c.useState(0),o=N({mode:"onChange",resolver:A(M),defaultValues:Q}),{reset:m,trigger:l,handleSubmit:p,formState:{isSubmitting:j}}=o,x=c.useCallback(async r=>{r?await l(r)&&i(y=>y+1):i(a=>a+1)},[l]),f=c.useCallback(()=>{i(r=>r-1)},[]),S=c.useCallback(()=>{m(),i(0)},[m]),C=p(async r=>{try{await new Promise(a=>setTimeout(a,1e3)),w.success("Create success!"),console.info("DATA",r),x()}catch(a){console.error(a)}}),h=t===b.length;return e.jsx(k,{sx:{p:5,width:1,mx:"auto",maxWidth:720},children:e.jsxs(B,{methods:o,onSubmit:C,children:[e.jsx(H,{steps:b,activeStep:t}),e.jsxs(n,{gap:3,display:"flex",flexDirection:"column",sx:{p:3,mb:3,minHeight:240,borderRadius:1.5,border:r=>`dashed 1px ${r.vars.palette.divider}`},children:[t===0&&e.jsx(V,{}),t===1&&e.jsx(W,{}),t===2&&e.jsx(D,{}),h&&e.jsx($,{onReset:S})]}),!h&&e.jsxs(n,{display:"flex",children:[t!==0&&e.jsx(d,{onClick:f,children:"Back"}),e.jsx(n,{sx:{flex:"1 1 auto"}}),t===0&&e.jsx(d,{variant:"contained",onClick:()=>x("stepOne"),children:"Next"}),t===1&&e.jsx(d,{variant:"contained",onClick:()=>x("stepTwo"),children:"Next"}),t===2&&e.jsx(P,{type:"submit",variant:"contained",loading:j,children:"Save changes"})]})]})})}function X(){return e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(L,{heading:"Form wizard",links:[{name:"Components",href:v.components},{name:"Form wizard"}],moreLink:["https://react-hook-form.com","https://zod.dev"]})}),e.jsx(q,{children:e.jsx(U,{})})]})}const Y={title:`Form wizard | Components - ${I.site.name}`};function Ve(){return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsxs("title",{children:[" ",Y.title]})}),e.jsx(X,{})]})}export{Ve as default};
