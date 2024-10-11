import{j as e,B as n,I as g,T,e as d,r as c,dK as w,aD as k,p as v,H as F,C as I}from"./index-D-ZKGqTU.js";import{C as L}from"./custom-breadcrumbs-Ce0SsF19.js";import{F as u,z as s,u as N,t as A,a as z}from"./form-provider-L0KFjUTq.js";import"./editor-CzmUVphq.js";import"./image-CX1CYgjP.js";import{a as B,b as O,c as R}from"./Stepper-CNO88sBA.js";import{L as P}from"./LoadingButton-C_x5mIfX.js";import{C as E}from"./component-hero-DBV6Y83r.js";import{C as q}from"./component-block-gyf1Z1ot.js";import"./TextField-DhW8zjJC.js";import"./FormControl-n1s9FAXz.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CCRBBEhV.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-C9Vfi2q1.js";import"./Select-B6atPAS4.js";import"./Menu-BvjNAHEG.js";import"./InputBase-B9hwN3-B.js";import"./FormHelperText-BHlZRpvh.js";import"./Rating-C-gTF_lZ.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-Buv_oatH.js";import"./RadioGroup-Bz4MgZrq.js";import"./FormGroup-CwleoAMr.js";import"./FormControlLabel-5B8r8hjw.js";import"./index-D0kJtIpB.js";import"./countries-DSLisFCy.js";import"./InputAdornment-B2x29rol.js";import"./Autocomplete-C74LI-Rt.js";import"./Chip-CYchvRo_.js";import"./country-select-CBbXG_H4.js";import"./Checkbox-XoXkZxXm.js";import"./upload-avatar-C3B5eTLv.js";import"./format-number-7nwGld6g.js";import"./DatePicker-BiJlOuDh.js";import"./DialogContent-CKRoYUkD.js";import"./ListItem-CbBrCKNq.js";import"./MobileDateTimePicker-CIeUS7kl.js";import"./Tabs-BAzl82ph.js";import"./KeyboardArrowRight-DzNmTPM2.js";import"./index-Bb5BZvNl.js";import"./CircularProgress-Bi1c9VU0.js";function D({steps:t,activeStep:i}){return e.jsx(B,{activeStep:i,alternativeLabel:!0,sx:{mb:5},children:t.map((o,m)=>e.jsx(O,{children:e.jsx(R,{StepIconComponent:({active:l,completed:p})=>e.jsx(n,{display:"flex",alignItems:"center",justifyContent:"center",sx:{width:24,height:24,borderRadius:"50%",color:"text.disabled",typography:"subtitle2",bgcolor:"action.disabledBackground",...l&&{bgcolor:"primary.main",color:"primary.contrastText"},...p&&{bgcolor:"primary.main",color:"primary.contrastText"}},children:p?e.jsx(g,{width:14,icon:"mingcute:check-fill"}):e.jsx(n,{sx:{typography:"subtitle2"},children:m+1})}),children:o})},o))})}function H(){return e.jsxs(e.Fragment,{children:[e.jsx(u.Text,{name:"stepOne.firstName",label:"First name",variant:"filled",InputLabelProps:{shrink:!0}}),e.jsx(u.Text,{name:"stepOne.lastName",label:"Last name",variant:"filled",InputLabelProps:{shrink:!0}})]})}function V(){return e.jsx(u.Text,{name:"stepTwo.age",label:"Age",type:"number",variant:"filled",InputLabelProps:{shrink:!0},helperText:"Age must be between 18 and 100"})}function W(){return e.jsx(u.Text,{name:"stepThree.email",label:"Email",variant:"filled",InputLabelProps:{shrink:!0}})}function $({onReset:t}){return e.jsxs(n,{gap:3,display:"flex",flex:"1 1 auto",alignItems:"center",flexDirection:"column",justifyContent:"center",sx:{borderRadius:"inherit",bgcolor:"background.neutral"},children:[e.jsx(T,{variant:"subtitle1",children:"All steps completed - you're finished"}),e.jsx(d,{variant:"outlined",onClick:t,startIcon:e.jsx(g,{icon:"solar:restart-bold"}),children:"Reset"})]})}const b=["Step one","Step two","Step three"],G=s.object({firstName:s.string().min(1,{message:"Full name is required!"}),lastName:s.string().min(1,{message:"Last name is required!"})}),J=s.object({age:s.number().min(1,{message:"Age is required!"}).min(18,{message:"Age must be between 18 and 100"}).max(100,{message:"Age must be between 18 and 100"})}),K=s.object({email:s.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})}),M=s.object({stepOne:G,stepTwo:J,stepThree:K}),Q={stepOne:{firstName:"",lastName:""},stepTwo:{age:0},stepThree:{email:""}};function U(){const[t,i]=c.useState(0),o=N({mode:"onChange",resolver:A(M),defaultValues:Q}),{reset:m,trigger:l,handleSubmit:p,formState:{isSubmitting:j}}=o,x=c.useCallback(async r=>{r?await l(r)&&i(y=>y+1):i(a=>a+1)},[l]),f=c.useCallback(()=>{i(r=>r-1)},[]),S=c.useCallback(()=>{m(),i(0)},[m]),C=p(async r=>{try{await new Promise(a=>setTimeout(a,1e3)),w.success("Create success!"),console.info("DATA",r),x()}catch(a){console.error(a)}}),h=t===b.length;return e.jsx(k,{sx:{p:5,width:1,mx:"auto",maxWidth:720},children:e.jsxs(z,{methods:o,onSubmit:C,children:[e.jsx(D,{steps:b,activeStep:t}),e.jsxs(n,{gap:3,display:"flex",flexDirection:"column",sx:{p:3,mb:3,minHeight:240,borderRadius:1.5,border:r=>`dashed 1px ${r.vars.palette.divider}`},children:[t===0&&e.jsx(H,{}),t===1&&e.jsx(V,{}),t===2&&e.jsx(W,{}),h&&e.jsx($,{onReset:S})]}),!h&&e.jsxs(n,{display:"flex",children:[t!==0&&e.jsx(d,{onClick:f,children:"Back"}),e.jsx(n,{sx:{flex:"1 1 auto"}}),t===0&&e.jsx(d,{variant:"contained",onClick:()=>x("stepOne"),children:"Next"}),t===1&&e.jsx(d,{variant:"contained",onClick:()=>x("stepTwo"),children:"Next"}),t===2&&e.jsx(P,{type:"submit",variant:"contained",loading:j,children:"Save changes"})]})]})})}function X(){return e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsx(L,{heading:"Form wizard",links:[{name:"Components",href:v.components},{name:"Form wizard"}],moreLink:["https://react-hook-form.com","https://zod.dev"]})}),e.jsx(q,{children:e.jsx(U,{})})]})}const Y={title:`Form wizard | Components - ${I.site.name}`};function He(){return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsxs("title",{children:[" ",Y.title]})}),e.jsx(X,{})]})}export{He as default};