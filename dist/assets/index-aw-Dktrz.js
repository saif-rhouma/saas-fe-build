import{j as e,B as a,I as g,T,e as d,r as c,dP as w,aH as k,p as v,H as F,C as I}from"./index-BPQkDe0s.js";import{C as L}from"./custom-breadcrumbs-BIW9VTmo.js";import{z as s,u as N,t as A,F as z}from"./form-provider-Csxs3POq.js";import"./editor-JwZorNGg.js";import"./image-C7AA7Kgf.js";import{F as u}from"./fields-uLHuWF6F.js";import{a as B,b as O,c as P}from"./Stepper-BXfKyyTr.js";import{L as R}from"./LoadingButton-ByZAe6Vn.js";import{C as E}from"./component-hero-T8_VAXdF.js";import{C as H}from"./component-block-dQGYhUI2.js";import"./TextField-Bi7NVwCq.js";import"./FormControl-bKQXC1dH.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-AqbAhnGZ.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-8bz6Jicd.js";import"./Select-9Xhy8-ut.js";import"./Menu-DGoJy9BJ.js";import"./InputBase-CPrPQ_RD.js";import"./FormHelperText-CPxcDFA-.js";import"./index-DGJW8Nhg.js";import"./countries-DSLisFCy.js";import"./InputAdornment-Ck59aR0s.js";import"./index-DhCxhDCC.js";import"./Rating-CpW9817X.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-Cn-68b2h.js";import"./RadioGroup-DbSLazbi.js";import"./FormGroup-CC5xoKev.js";import"./FormControlLabel-CkOEQNeq.js";import"./Autocomplete-lg4xc3Dx.js";import"./Chip-ALPNHt2t.js";import"./country-select-Bo5KTiYN.js";import"./Checkbox-DYdkvSfk.js";import"./upload-avatar-CesV9ZGt.js";import"./format-number-9dwzKsgZ.js";import"./DatePicker-BGXln9IR.js";import"./DialogContent-p3i0msBI.js";import"./ListItem-BApUg4RM.js";import"./MobileDateTimePicker-dEpBlYqw.js";import"./CircularProgress-BW2J7VJ8.js";function q({steps:t,activeStep:i}){return e.jsx(B,{activeStep:i,alternativeLabel:!0,sx:{mb:5},children:t.map((o,m)=>e.jsx(O,{children:e.jsx(P,{StepIconComponent:({active:l,completed:p})=>e.jsx(a,{display:"flex",alignItems:"center",justifyContent:"center",sx:{width:24,height:24,borderRadius:"50%",color:"text.disabled",typography:"subtitle2",bgcolor:"action.disabledBackground",...l&&{bgcolor:"primary.main",color:"primary.contrastText"},...p&&{bgcolor:"primary.main",color:"primary.contrastText"}},children:p?e.jsx(g,{width:14,icon:"mingcute:check-fill"}):e.jsx(a,{sx:{typography:"subtitle2"},children:m+1})}),children:o})},o))})}function V(){return e.jsxs(e.Fragment,{children:[e.jsx(u.Text,{name:"stepOne.firstName",label:"First name",variant:"filled",InputLabelProps:{shrink:!0}}),e.jsx(u.Text,{name:"stepOne.lastName",label:"Last name",variant:"filled",InputLabelProps:{shrink:!0}})]})}function W(){return e.jsx(u.Text,{name:"stepTwo.age",label:"Age",type:"number",variant:"filled",InputLabelProps:{shrink:!0},helperText:"Age must be between 18 and 100"})}function D(){return e.jsx(u.Text,{name:"stepThree.email",label:"Email",variant:"filled",InputLabelProps:{shrink:!0}})}function $({onReset:t}){return e.jsxs(a,{gap:3,display:"flex",flex:"1 1 auto",alignItems:"center",flexDirection:"column",justifyContent:"center",sx:{borderRadius:"inherit",bgcolor:"background.neutral"},children:[e.jsx(T,{variant:"subtitle1",children:"All steps completed - you're finished"}),e.jsx(d,{variant:"outlined",onClick:t,startIcon:e.jsx(g,{icon:"solar:restart-bold"}),children:"Reset"})]})}const b=["Step one","Step two","Step three"],G=s.object({firstName:s.string().min(1,{message:"Full name is required!"}),lastName:s.string().min(1,{message:"Last name is required!"})}),J=s.object({age:s.number().min(1,{message:"Age is required!"}).min(18,{message:"Age must be between 18 and 100"}).max(100,{message:"Age must be between 18 and 100"})}),K=s.object({email:s.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})}),M=s.object({stepOne:G,stepTwo:J,stepThree:K}),Q={stepOne:{firstName:"",lastName:""},stepTwo:{age:0},stepThree:{email:""}};function U(){const[t,i]=c.useState(0),o=N({mode:"onChange",resolver:A(M),defaultValues:Q}),{reset:m,trigger:l,handleSubmit:p,formState:{isSubmitting:j}}=o,x=c.useCallback(async r=>{r?await l(r)&&i(y=>y+1):i(n=>n+1)},[l]),f=c.useCallback(()=>{i(r=>r-1)},[]),S=c.useCallback(()=>{m(),i(0)},[m]),C=p(async r=>{try{await new Promise(n=>setTimeout(n,1e3)),w.success("Create success!"),console.info("DATA",r),x()}catch(n){console.error(n)}}),h=t===b.length;return e.jsx(k,{sx:{p:5,width:1,mx:"auto",maxWidth:720},children:e.jsxs(z,{methods:o,onSubmit:C,children:[e.jsx(q,{steps:b,activeStep:t}),e.jsxs(a,{gap:3,display:"flex",flexDirection:"column",sx:{p:3,mb:3,minHeight:240,borderRadius:1.5,border:r=>`dashed 1px ${r.vars.palette.divider}`},children:[t===0&&e.jsx(V,{}),t===1&&e.jsx(W,{}),t===2&&e.jsx(D,{}),h&&e.jsx($,{onReset:S})]}),!h&&e.jsxs(a,{display:"flex",children:[t!==0&&e.jsx(d,{onClick:f,children:"Back"}),e.jsx(a,{sx:{flex:"1 1 auto"}}),t===0&&e.jsx(d,{variant:"contained",onClick:()=>x("stepOne"),children:"Next"}),t===1&&e.jsx(d,{variant:"contained",onClick:()=>x("stepTwo"),children:"Next"}),t===2&&e.jsx(R,{type:"submit",variant:"contained",loading:j,children:"Save changes"})]})]})})}function X(){return e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(L,{heading:"Form wizard",links:[{name:"Components",href:v.components},{name:"Form wizard"}],moreLink:["https://react-hook-form.com","https://zod.dev"]})}),e.jsx(H,{children:e.jsx(U,{})})]})}const Y={title:`Form wizard | Components - ${I.site.name}`};function qe(){return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsxs("title",{children:[" ",Y.title]})}),e.jsx(X,{})]})}export{qe as default};
