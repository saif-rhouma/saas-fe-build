import{j as e,B as a,I as g,T,e as d,r as c,dr as w,cZ as k,p as v,H as F,C as I}from"./index-BqQARj70.js";import{C as L}from"./custom-breadcrumbs-ryDpeVg5.js";import{F as u,z as s,u as N,t as A,a as z}from"./form-provider-ccfU2XUN.js";import"./editor-QJd8noTi.js";import"./image-D-bc4Fg4.js";import{a as B,b as O,c as R}from"./Stepper-BVVS3GhY.js";import{L as P}from"./LoadingButton-F-RhBSUA.js";import{C as E}from"./component-hero-D1a2wFwQ.js";import{C as q}from"./component-block-BfyVyfHa.js";import"./TextField-Ddc-2_B3.js";import"./FormControl-C8LIfacH.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Cypnw6Fi.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Dza6C49E.js";import"./Select-BcNE4CY6.js";import"./Menu-CyG4g8V9.js";import"./InputBase-ByUog9Qa.js";import"./FormHelperText-D7zaUcMu.js";import"./Rating-CRHSMtZR.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-CY1kJa8b.js";import"./RadioGroup-ChlGooHA.js";import"./FormGroup-CXDpwB7j.js";import"./FormControlLabel-DYa7_yhu.js";import"./utils-BkGDLkaZ.js";import"./index-ALNGUIW9.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BfS4czl_.js";import"./Autocomplete-mVzVA2ZY.js";import"./Chip-DPBTbqGw.js";import"./country-select-BdT_Z9O2.js";import"./Checkbox-Bhx6CUcB.js";import"./upload-avatar-rmFzksOv.js";import"./format-number-BvEweN_e.js";import"./DatePicker-Ce3HVs4j.js";import"./DialogContent-Bu9AzrBB.js";import"./ListItem-D-3kOQEW.js";import"./MobileDateTimePicker-huLGYsGv.js";import"./Tabs-CmqXMWlF.js";import"./KeyboardArrowRight-CBFHahxG.js";import"./index-3on3wy4W.js";import"./CircularProgress-CnEecEq8.js";function H({steps:t,activeStep:i}){return e.jsx(B,{activeStep:i,alternativeLabel:!0,sx:{mb:5},children:t.map((o,m)=>e.jsx(O,{children:e.jsx(R,{StepIconComponent:({active:l,completed:p})=>e.jsx(a,{display:"flex",alignItems:"center",justifyContent:"center",sx:{width:24,height:24,borderRadius:"50%",color:"text.disabled",typography:"subtitle2",bgcolor:"action.disabledBackground",...l&&{bgcolor:"primary.main",color:"primary.contrastText"},...p&&{bgcolor:"primary.main",color:"primary.contrastText"}},children:p?e.jsx(g,{width:14,icon:"mingcute:check-fill"}):e.jsx(a,{sx:{typography:"subtitle2"},children:m+1})}),children:o})},o))})}function V(){return e.jsxs(e.Fragment,{children:[e.jsx(u.Text,{name:"stepOne.firstName",label:"First name",variant:"filled",InputLabelProps:{shrink:!0}}),e.jsx(u.Text,{name:"stepOne.lastName",label:"Last name",variant:"filled",InputLabelProps:{shrink:!0}})]})}function W(){return e.jsx(u.Text,{name:"stepTwo.age",label:"Age",type:"number",variant:"filled",InputLabelProps:{shrink:!0},helperText:"Age must be between 18 and 100"})}function D(){return e.jsx(u.Text,{name:"stepThree.email",label:"Email",variant:"filled",InputLabelProps:{shrink:!0}})}function $({onReset:t}){return e.jsxs(a,{gap:3,display:"flex",flex:"1 1 auto",alignItems:"center",flexDirection:"column",justifyContent:"center",sx:{borderRadius:"inherit",bgcolor:"background.neutral"},children:[e.jsx(T,{variant:"subtitle1",children:"All steps completed - you're finished"}),e.jsx(d,{variant:"outlined",onClick:t,startIcon:e.jsx(g,{icon:"solar:restart-bold"}),children:"Reset"})]})}const b=["Step one","Step two","Step three"],G=s.object({firstName:s.string().min(1,{message:"Full name is required!"}),lastName:s.string().min(1,{message:"Last name is required!"})}),J=s.object({age:s.number().min(1,{message:"Age is required!"}).min(18,{message:"Age must be between 18 and 100"}).max(100,{message:"Age must be between 18 and 100"})}),Z=s.object({email:s.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})}),K=s.object({stepOne:G,stepTwo:J,stepThree:Z}),M={stepOne:{firstName:"",lastName:""},stepTwo:{age:0},stepThree:{email:""}};function Q(){const[t,i]=c.useState(0),o=N({mode:"onChange",resolver:A(K),defaultValues:M}),{reset:m,trigger:l,handleSubmit:p,formState:{isSubmitting:j}}=o,x=c.useCallback(async r=>{r?await l(r)&&i(y=>y+1):i(n=>n+1)},[l]),f=c.useCallback(()=>{i(r=>r-1)},[]),S=c.useCallback(()=>{m(),i(0)},[m]),C=p(async r=>{try{await new Promise(n=>setTimeout(n,1e3)),w.success("Create success!"),console.info("DATA",r),x()}catch(n){console.error(n)}}),h=t===b.length;return e.jsx(k,{sx:{p:5,width:1,mx:"auto",maxWidth:720},children:e.jsxs(z,{methods:o,onSubmit:C,children:[e.jsx(H,{steps:b,activeStep:t}),e.jsxs(a,{gap:3,display:"flex",flexDirection:"column",sx:{p:3,mb:3,minHeight:240,borderRadius:1.5,border:r=>`dashed 1px ${r.vars.palette.divider}`},children:[t===0&&e.jsx(V,{}),t===1&&e.jsx(W,{}),t===2&&e.jsx(D,{}),h&&e.jsx($,{onReset:S})]}),!h&&e.jsxs(a,{display:"flex",children:[t!==0&&e.jsx(d,{onClick:f,children:"Back"}),e.jsx(a,{sx:{flex:"1 1 auto"}}),t===0&&e.jsx(d,{variant:"contained",onClick:()=>x("stepOne"),children:"Next"}),t===1&&e.jsx(d,{variant:"contained",onClick:()=>x("stepTwo"),children:"Next"}),t===2&&e.jsx(P,{type:"submit",variant:"contained",loading:j,children:"Save changes"})]})]})})}function U(){return e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(L,{heading:"Form wizard",links:[{name:"Components",href:v.components},{name:"Form wizard"}],moreLink:["https://react-hook-form.com","https://zod.dev"]})}),e.jsx(q,{children:e.jsx(Q,{})})]})}const X={title:`Form wizard | Components - ${I.site.name}`};function We(){return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsxs("title",{children:[" ",X.title]})}),e.jsx(U,{})]})}export{We as default};
