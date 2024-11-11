import{j as e,S as n,T as t,L as c,R as w,p as y,I as j,i as k,l as d,am as A,an as b}from"./index-DBAnnifB.js";import{z as r,u as v,a as S,t as P,F as a}from"./form-provider-C9WrYleO.js";import{E,P as L,S as q}from"./new-password-icon-BJWran7Z.js";import"./image-V4smZB5P.js";import"./editor-CpxSiSi_.js";import{L as I}from"./LoadingButton-CunA2jBP.js";import{I as T}from"./InputAdornment-kj6j4mRM.js";const C=r.object({code:r.string().min(1,{message:"Code is required!"}).min(6,{message:"Code must be at least 6 characters!"}),email:r.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})});function J(){const s={code:"",email:""},l=v({resolver:P(C),defaultValues:s}),{handleSubmit:o,formState:{isSubmitting:m}}=l,h=o(async p=>{try{await new Promise(i=>setTimeout(i,500)),console.info("DATA",p)}catch(i){console.error(i)}}),x=e.jsxs(e.Fragment,{children:[e.jsx(E,{sx:{mx:"auto"}}),e.jsxs(n,{spacing:1,sx:{mt:3,mb:5,textAlign:"center",whiteSpace:"pre-line"},children:[e.jsx(t,{variant:"h5",children:"Please check your email!"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:`We've emailed a 6-digit confirmation code. 
Please enter the code in the box below to verify your email.`})]})]}),u=e.jsxs(n,{spacing:3,children:[e.jsx(a.Text,{name:"email",label:"Email address",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),e.jsx(a.Code,{name:"code"}),e.jsx(I,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:m,loadingIndicator:"Verify...",children:"Verify"}),e.jsxs(t,{variant:"body2",sx:{mx:"auto"},children:["Don’t have a code? ",e.jsx(c,{variant:"subtitle2",sx:{cursor:"pointer"},children:"Resend code"})]}),e.jsxs(c,{component:w,href:y.authDemo.split.signIn,color:"inherit",variant:"subtitle2",sx:{mx:"auto",alignItems:"center",display:"inline-flex"},children:[e.jsx(j,{icon:"eva:arrow-ios-back-fill",width:16,sx:{mr:.5}}),"Return to sign in"]})]});return e.jsxs(e.Fragment,{children:[x,e.jsx(S,{methods:l,onSubmit:h,children:u})]})}const D=r.object({email:r.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:r.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"})});function K(){const s=k(),l={email:"",password:""},o=v({resolver:P(D),defaultValues:l}),{handleSubmit:m,formState:{isSubmitting:h}}=o,x=m(async g=>{try{await new Promise(f=>setTimeout(f,500)),console.info("DATA",g)}catch(f){console.error(f)}}),u=e.jsxs(n,{spacing:1.5,sx:{mb:5},children:[e.jsx(t,{variant:"h5",children:"Sign in to your account"}),e.jsxs(n,{direction:"row",spacing:.5,children:[e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Don't have an account?"}),e.jsx(c,{component:w,href:y.authDemo.split.signUp,variant:"subtitle2",children:"Get started"})]})]}),p=e.jsxs(n,{spacing:3,children:[e.jsx(a.Text,{name:"email",label:"Email address",InputLabelProps:{shrink:!0}}),e.jsxs(n,{spacing:1.5,children:[e.jsx(c,{component:w,href:y.authDemo.split.resetPassword,variant:"body2",color:"inherit",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),e.jsx(a.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:s.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(T,{position:"end",children:e.jsx(d,{onClick:s.onToggle,edge:"end",children:e.jsx(j,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}})]}),e.jsx(I,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:h,loadingIndicator:"Sign in...",children:"Sign in"})]}),i=e.jsxs(e.Fragment,{children:[e.jsx(A,{sx:{my:3,typography:"overline",color:"text.disabled","&::before, :after":{borderTopStyle:"dashed"}},children:"OR"}),e.jsxs(n,{direction:"row",justifyContent:"center",spacing:1,children:[e.jsx(d,{children:e.jsx(b,{icon:"google",width:22})}),e.jsx(d,{children:e.jsx(b,{icon:"github",width:22})}),e.jsx(d,{children:e.jsx(b,{icon:"twitter",width:22})})]})]});return e.jsxs(e.Fragment,{children:[u,e.jsx(S,{methods:o,onSubmit:x,children:p}),i]})}const V=r.object({firstName:r.string().min(1,{message:"First name is required!"}),lastName:r.string().min(1,{message:"Last name is required!"}),email:r.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:r.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"})});function M(){const s=k(),l={firstName:"",lastName:"",email:"",password:""},o=v({resolver:P(V),defaultValues:l}),{handleSubmit:m,formState:{isSubmitting:h}}=o,x=m(async f=>{try{await new Promise(F=>setTimeout(F,500)),console.info("DATA",f)}catch(F){console.error(F)}}),u=e.jsxs(n,{spacing:1.5,sx:{mb:5},children:[e.jsx(t,{variant:"h5",children:"Get started absolutely free"}),e.jsxs(n,{direction:"row",spacing:.5,children:[e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Already have an account?"}),e.jsx(c,{component:w,href:y.authDemo.split.signIn,variant:"subtitle2",children:"Sign in"})]})]}),p=e.jsxs(n,{spacing:3,children:[e.jsxs(n,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(a.Text,{name:"firstName",label:"First name",InputLabelProps:{shrink:!0}}),e.jsx(a.Text,{name:"lastName",label:"Last name",InputLabelProps:{shrink:!0}})]}),e.jsx(a.Text,{name:"email",label:"Email address",InputLabelProps:{shrink:!0}}),e.jsx(a.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:s.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(T,{position:"end",children:e.jsx(d,{onClick:s.onToggle,edge:"end",children:e.jsx(j,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(I,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:h,loadingIndicator:"Create account...",children:"Create account"})]}),i=e.jsxs(t,{component:"div",sx:{mt:3,textAlign:"center",typography:"caption",color:"text.secondary"},children:["By signing up, I agree to ",e.jsx(c,{underline:"always",color:"text.primary",children:"Terms of service"})," and ",e.jsx(c,{underline:"always",color:"text.primary",children:"Privacy policy"}),"."]}),g=e.jsxs(e.Fragment,{children:[e.jsx(A,{sx:{my:3,typography:"overline",color:"text.disabled","&::before, :after":{borderTopStyle:"dashed"}},children:"OR"}),e.jsxs(n,{direction:"row",justifyContent:"center",spacing:1,children:[e.jsx(d,{children:e.jsx(b,{icon:"google",width:22})}),e.jsx(d,{children:e.jsx(b,{icon:"github",width:22})}),e.jsx(d,{children:e.jsx(b,{icon:"twitter",width:22})})]})]});return e.jsxs(e.Fragment,{children:[u,e.jsx(S,{methods:o,onSubmit:x,children:p}),i,g]})}const R=r.object({email:r.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})});function Q(){const s={email:""},l=v({resolver:P(R),defaultValues:s}),{handleSubmit:o,formState:{isSubmitting:m}}=l,h=o(async p=>{try{await new Promise(i=>setTimeout(i,500)),console.info("DATA",p)}catch(i){console.error(i)}}),x=e.jsxs(e.Fragment,{children:[e.jsx(L,{sx:{mx:"auto"}}),e.jsxs(n,{spacing:1,sx:{mt:3,mb:5,textAlign:"center",whiteSpace:"pre-line"},children:[e.jsx(t,{variant:"h5",children:"Forgot your password?"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Please enter the email address associated with your account and we'll email you a link to reset your password."})]})]}),u=e.jsxs(n,{spacing:3,children:[e.jsx(a.Text,{autoFocus:!0,name:"email",label:"Email address",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),e.jsx(I,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:m,loadingIndicator:"Send request...",children:"Send request"}),e.jsxs(c,{component:w,href:y.authDemo.split.signIn,color:"inherit",variant:"subtitle2",sx:{mx:"auto",alignItems:"center",display:"inline-flex"},children:[e.jsx(j,{icon:"eva:arrow-ios-back-fill",width:16,sx:{mr:.5}}),"Return to sign in"]})]});return e.jsxs(e.Fragment,{children:[x,e.jsx(S,{methods:l,onSubmit:h,children:u})]})}const W=r.object({code:r.string().min(1,{message:"Code is required!"}).min(6,{message:"Code must be at least 6 characters!"}),email:r.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:r.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"}),confirmPassword:r.string().min(1,{message:"Confirm password is required!"})}).refine(s=>s.password===s.confirmPassword,{message:"Passwords do not match!",path:["confirmPassword"]});function X(){const s=k(),l={code:"",email:"",password:"",confirmPassword:""},o=v({resolver:P(W),defaultValues:l}),{handleSubmit:m,formState:{isSubmitting:h}}=o,x=m(async i=>{try{await new Promise(g=>setTimeout(g,500)),console.info("DATA",i)}catch(g){console.error(g)}}),u=e.jsxs(e.Fragment,{children:[e.jsx(q,{sx:{mx:"auto"}}),e.jsxs(n,{spacing:1,sx:{mt:3,mb:5,textAlign:"center",whiteSpace:"pre-line"},children:[e.jsx(t,{variant:"h5",children:"Request sent successfully!"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:`We've sent a 6-digit confirmation email to your email. 
Please enter the code in below box to verify your email.`})]})]}),p=e.jsxs(n,{spacing:3,children:[e.jsx(a.Text,{name:"email",label:"Email address",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),e.jsx(a.Code,{name:"code"}),e.jsx(a.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:s.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(T,{position:"end",children:e.jsx(d,{onClick:s.onToggle,edge:"end",children:e.jsx(j,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(a.Text,{name:"confirmPassword",label:"Confirm new password",type:s.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(T,{position:"end",children:e.jsx(d,{onClick:s.onToggle,edge:"end",children:e.jsx(j,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(I,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:h,loadingIndicator:"Update password...",children:"Update password"}),e.jsxs(t,{variant:"body2",sx:{mx:"auto"},children:["Don’t have a code? ",e.jsx(c,{variant:"subtitle2",sx:{cursor:"pointer"},children:"Resend code"})]}),e.jsxs(c,{component:w,href:y.authDemo.split.signIn,color:"inherit",variant:"subtitle2",sx:{mx:"auto",alignItems:"center",display:"inline-flex"},children:[e.jsx(j,{icon:"eva:arrow-ios-back-fill",width:16,sx:{mr:.5}}),"Return to sign in"]})]});return e.jsxs(e.Fragment,{children:[u,e.jsx(S,{methods:o,onSubmit:x,children:p})]})}export{K as S,M as a,J as b,Q as c,X as d};
