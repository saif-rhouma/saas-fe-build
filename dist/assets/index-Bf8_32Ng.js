import{j as e,B as a,I as g,T,e as d,r as c,dq as w,cY as k,p as v,H as F,C as I}from"./index-Blsk_n2J.js";import{C as L}from"./custom-breadcrumbs-DQl07oU5.js";import{F as u,z as s,u as N,t as A,a as z}from"./form-provider-DdfiYo_S.js";import"./editor-BNs7J7mr.js";import"./image-Cb1bD9tg.js";import{a as B,b as O,c as R}from"./Stepper-zCPtmpo9.js";import{L as P}from"./LoadingButton-B-r7xLAp.js";import{C as q}from"./component-hero-CU2LSTUF.js";import{C as E}from"./component-block-BDApPAiW.js";import"./TextField-BKSxA_Cs.js";import"./FormControl-qbY7_VIN.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BYZCvd35.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bl7YzlTQ.js";import"./Select-ee9RPtAk.js";import"./Menu-CZN5SQuC.js";import"./InputBase-cMEccQYG.js";import"./FormHelperText-CHZY3fg7.js";import"./Rating-hCyG6wcZ.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-l7vrXkor.js";import"./RadioGroup-B0p7NR0g.js";import"./FormGroup-CvSak5XN.js";import"./FormControlLabel-CB8Q9wIG.js";import"./utils-q9gw6RHQ.js";import"./index-DstcX7rq.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BWmNxI1m.js";import"./Autocomplete-DNr_vrjq.js";import"./Chip-BrbLQ3s5.js";import"./country-select-DRYKmuys.js";import"./Checkbox-B-93dYv5.js";import"./upload-avatar-Y5cPPAL9.js";import"./format-number-CrK_YprG.js";import"./DatePicker-BcikrSOj.js";import"./DialogContent-CB0eeVYr.js";import"./ListItem-D58zR2IT.js";import"./MobileDateTimePicker-Dj8bi4PE.js";import"./Tabs-JjNAVrJX.js";import"./KeyboardArrowRight-DwIijAwp.js";import"./index-FRfytyt8.js";import"./CircularProgress-BUIqYQID.js";function H({steps:t,activeStep:i}){return e.jsx(B,{activeStep:i,alternativeLabel:!0,sx:{mb:5},children:t.map((o,m)=>e.jsx(O,{children:e.jsx(R,{StepIconComponent:({active:l,completed:p})=>e.jsx(a,{display:"flex",alignItems:"center",justifyContent:"center",sx:{width:24,height:24,borderRadius:"50%",color:"text.disabled",typography:"subtitle2",bgcolor:"action.disabledBackground",...l&&{bgcolor:"primary.main",color:"primary.contrastText"},...p&&{bgcolor:"primary.main",color:"primary.contrastText"}},children:p?e.jsx(g,{width:14,icon:"mingcute:check-fill"}):e.jsx(a,{sx:{typography:"subtitle2"},children:m+1})}),children:o})},o))})}function V(){return e.jsxs(e.Fragment,{children:[e.jsx(u.Text,{name:"stepOne.firstName",label:"First name",variant:"filled",InputLabelProps:{shrink:!0}}),e.jsx(u.Text,{name:"stepOne.lastName",label:"Last name",variant:"filled",InputLabelProps:{shrink:!0}})]})}function W(){return e.jsx(u.Text,{name:"stepTwo.age",label:"Age",type:"number",variant:"filled",InputLabelProps:{shrink:!0},helperText:"Age must be between 18 and 100"})}function D(){return e.jsx(u.Text,{name:"stepThree.email",label:"Email",variant:"filled",InputLabelProps:{shrink:!0}})}function $({onReset:t}){return e.jsxs(a,{gap:3,display:"flex",flex:"1 1 auto",alignItems:"center",flexDirection:"column",justifyContent:"center",sx:{borderRadius:"inherit",bgcolor:"background.neutral"},children:[e.jsx(T,{variant:"subtitle1",children:"All steps completed - you're finished"}),e.jsx(d,{variant:"outlined",onClick:t,startIcon:e.jsx(g,{icon:"solar:restart-bold"}),children:"Reset"})]})}const b=["Step one","Step two","Step three"],G=s.object({firstName:s.string().min(1,{message:"Full name is required!"}),lastName:s.string().min(1,{message:"Last name is required!"})}),J=s.object({age:s.number().min(1,{message:"Age is required!"}).min(18,{message:"Age must be between 18 and 100"}).max(100,{message:"Age must be between 18 and 100"})}),Y=s.object({email:s.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})}),K=s.object({stepOne:G,stepTwo:J,stepThree:Y}),M={stepOne:{firstName:"",lastName:""},stepTwo:{age:0},stepThree:{email:""}};function Q(){const[t,i]=c.useState(0),o=N({mode:"onChange",resolver:A(K),defaultValues:M}),{reset:m,trigger:l,handleSubmit:p,formState:{isSubmitting:j}}=o,x=c.useCallback(async r=>{r?await l(r)&&i(y=>y+1):i(n=>n+1)},[l]),f=c.useCallback(()=>{i(r=>r-1)},[]),S=c.useCallback(()=>{m(),i(0)},[m]),C=p(async r=>{try{await new Promise(n=>setTimeout(n,1e3)),w.success("Create success!"),console.info("DATA",r),x()}catch(n){console.error(n)}}),h=t===b.length;return e.jsx(k,{sx:{p:5,width:1,mx:"auto",maxWidth:720},children:e.jsxs(z,{methods:o,onSubmit:C,children:[e.jsx(H,{steps:b,activeStep:t}),e.jsxs(a,{gap:3,display:"flex",flexDirection:"column",sx:{p:3,mb:3,minHeight:240,borderRadius:1.5,border:r=>`dashed 1px ${r.vars.palette.divider}`},children:[t===0&&e.jsx(V,{}),t===1&&e.jsx(W,{}),t===2&&e.jsx(D,{}),h&&e.jsx($,{onReset:S})]}),!h&&e.jsxs(a,{display:"flex",children:[t!==0&&e.jsx(d,{onClick:f,children:"Back"}),e.jsx(a,{sx:{flex:"1 1 auto"}}),t===0&&e.jsx(d,{variant:"contained",onClick:()=>x("stepOne"),children:"Next"}),t===1&&e.jsx(d,{variant:"contained",onClick:()=>x("stepTwo"),children:"Next"}),t===2&&e.jsx(P,{type:"submit",variant:"contained",loading:j,children:"Save changes"})]})]})})}function U(){return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx(L,{heading:"Form wizard",links:[{name:"Components",href:v.components},{name:"Form wizard"}],moreLink:["https://react-hook-form.com","https://zod.dev"]})}),e.jsx(E,{children:e.jsx(Q,{})})]})}const X={title:`Form wizard | Components - ${I.site.name}`};function We(){return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsxs("title",{children:[" ",X.title]})}),e.jsx(U,{})]})}export{We as default};
