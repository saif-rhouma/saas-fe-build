import{j as e,S as n,T as t,L as c,R as w,p as y,I as j,i as C,l as d,dO as A,am as L,an as b}from"./index-dnffYGPF.js";import{z as r,u as v,a as S,t as P,F as i}from"./form-provider-CITdfumP.js";import{E,P as q,S as D}from"./new-password-icon-B6iwIU0p.js";import"./image-Bobk4gjY.js";import"./editor-BrUPx9bQ.js";import{L as I}from"./LoadingButton-C6C_t6P4.js";import{I as T}from"./InputAdornment-CP4MkqJg.js";const V=r.object({code:r.string().min(1,{message:"Code is required!"}).min(6,{message:"Code must be at least 6 characters!"}),email:r.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})});function M(){const s={code:"",email:""},l=v({resolver:P(V),defaultValues:s}),{handleSubmit:o,formState:{isSubmitting:m}}=l,x=o(async g=>{try{await new Promise(a=>setTimeout(a,500)),console.info("DATA",g)}catch(a){console.error(a)}}),h=e.jsxs(e.Fragment,{children:[e.jsx(E,{sx:{mx:"auto"}}),e.jsxs(n,{spacing:1,sx:{mt:3,mb:5,textAlign:"center",whiteSpace:"pre-line"},children:[e.jsx(t,{variant:"h5",children:"Please check your email!"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:`We've emailed a 6-digit confirmation code. 
Please enter the code in the box below to verify your email.`})]})]}),u=e.jsxs(n,{spacing:3,children:[e.jsx(i.Text,{name:"email",label:"Email address",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),e.jsx(i.Code,{name:"code"}),e.jsx(I,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:m,loadingIndicator:"Verify...",children:"Verify"}),e.jsxs(t,{variant:"body2",sx:{mx:"auto"},children:["Don’t have a code? ",e.jsx(c,{variant:"subtitle2",sx:{cursor:"pointer"},children:"Resend code"})]}),e.jsxs(c,{component:w,href:y.authDemo.centered.signIn,color:"inherit",variant:"subtitle2",sx:{mx:"auto",alignItems:"center",display:"inline-flex"},children:[e.jsx(j,{icon:"eva:arrow-ios-back-fill",width:16,sx:{mr:.5}}),"Return to sign in"]})]});return e.jsxs(e.Fragment,{children:[h,e.jsx(S,{methods:l,onSubmit:x,children:u})]})}const R=r.object({email:r.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:r.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"})});function Q(){const s=C(),l={email:"",password:""},o=v({resolver:P(R),defaultValues:l}),{handleSubmit:m,formState:{isSubmitting:x}}=o,h=m(async F=>{try{await new Promise(f=>setTimeout(f,500)),console.info("DATA",F)}catch(f){console.error(f)}}),u=e.jsx(A,{sx:{mb:3,mx:"auto"}}),g=e.jsxs(n,{alignItems:"center",spacing:1.5,sx:{mb:5},children:[e.jsx(t,{variant:"h5",children:"Sign in to your account"}),e.jsxs(n,{direction:"row",spacing:.5,children:[e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Don't have an account?"}),e.jsx(c,{component:w,href:y.authDemo.centered.signUp,variant:"subtitle2",children:"Get started"})]})]}),a=e.jsxs(n,{spacing:3,children:[e.jsx(i.Text,{name:"email",label:"Email address",InputLabelProps:{shrink:!0}}),e.jsxs(n,{spacing:1.5,children:[e.jsx(c,{component:w,href:y.authDemo.centered.resetPassword,variant:"body2",color:"inherit",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),e.jsx(i.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:s.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(T,{position:"end",children:e.jsx(d,{onClick:s.onToggle,edge:"end",children:e.jsx(j,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}})]}),e.jsx(I,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:x,loadingIndicator:"Sign in...",children:"Sign in"})]}),p=e.jsxs(e.Fragment,{children:[e.jsx(L,{sx:{my:3,typography:"overline",color:"text.disabled","&::before, :after":{borderTopStyle:"dashed"}},children:"OR"}),e.jsxs(n,{direction:"row",justifyContent:"center",spacing:1,children:[e.jsx(d,{children:e.jsx(b,{icon:"google",width:22})}),e.jsx(d,{children:e.jsx(b,{icon:"github",width:22})}),e.jsx(d,{children:e.jsx(b,{icon:"twitter",width:22})})]})]});return e.jsxs(e.Fragment,{children:[u,g,e.jsx(S,{methods:o,onSubmit:h,children:a}),p]})}const W=r.object({firstName:r.string().min(1,{message:"First name is required!"}),lastName:r.string().min(1,{message:"Last name is required!"}),email:r.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:r.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"})});function X(){const s=C(),l={firstName:"",lastName:"",email:"",password:""},o=v({resolver:P(W),defaultValues:l}),{handleSubmit:m,formState:{isSubmitting:x}}=o,h=m(async f=>{try{await new Promise(k=>setTimeout(k,500)),console.info("DATA",f)}catch(k){console.error(k)}}),u=e.jsx(A,{sx:{mb:3,mx:"auto"}}),g=e.jsxs(n,{alignItems:"center",spacing:1.5,sx:{mb:5},children:[e.jsx(t,{variant:"h5",children:"Get started absolutely free"}),e.jsxs(n,{direction:"row",spacing:.5,children:[e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Already have an account?"}),e.jsx(c,{component:w,href:y.authDemo.centered.signIn,variant:"subtitle2",children:"Sign in"})]})]}),a=e.jsxs(n,{spacing:3,children:[e.jsxs(n,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(i.Text,{name:"firstName",label:"First name",InputLabelProps:{shrink:!0}}),e.jsx(i.Text,{name:"lastName",label:"Last name",InputLabelProps:{shrink:!0}})]}),e.jsx(i.Text,{name:"email",label:"Email address",InputLabelProps:{shrink:!0}}),e.jsx(i.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:s.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(T,{position:"end",children:e.jsx(d,{onClick:s.onToggle,edge:"end",children:e.jsx(j,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(I,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:x,loadingIndicator:"Create account...",children:"Create account"})]}),p=e.jsxs(t,{component:"div",sx:{mt:3,textAlign:"center",typography:"caption",color:"text.secondary"},children:["By signing up, I agree to ",e.jsx(c,{underline:"always",color:"text.primary",children:"Terms of service"})," and ",e.jsx(c,{underline:"always",color:"text.primary",children:"Privacy policy"}),"."]}),F=e.jsxs(e.Fragment,{children:[e.jsx(L,{sx:{my:3,typography:"overline",color:"text.disabled","&::before, :after":{borderTopStyle:"dashed"}},children:"OR"}),e.jsxs(n,{direction:"row",justifyContent:"center",spacing:1,children:[e.jsx(d,{children:e.jsx(b,{icon:"google",width:22})}),e.jsx(d,{children:e.jsx(b,{icon:"github",width:22})}),e.jsx(d,{children:e.jsx(b,{icon:"twitter",width:22})})]})]});return e.jsxs(e.Fragment,{children:[u,g,e.jsx(S,{methods:o,onSubmit:h,children:a}),p,F]})}const U=r.object({email:r.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})});function Y(){const s={email:""},l=v({resolver:P(U),defaultValues:s}),{handleSubmit:o,formState:{isSubmitting:m}}=l,x=o(async g=>{try{await new Promise(a=>setTimeout(a,500)),console.info("DATA",g)}catch(a){console.error(a)}}),h=e.jsxs(e.Fragment,{children:[e.jsx(q,{sx:{mx:"auto"}}),e.jsxs(n,{spacing:1,sx:{mt:3,mb:5,textAlign:"center",whiteSpace:"pre-line"},children:[e.jsx(t,{variant:"h5",children:"Forgot your password?"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Please enter the email address associated with your account and we'll email you a link to reset your password."})]})]}),u=e.jsxs(n,{spacing:3,children:[e.jsx(i.Text,{name:"email",label:"Email address",placeholder:"example@gmail.com",autoFocus:!0,InputLabelProps:{shrink:!0}}),e.jsx(I,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:m,loadingIndicator:"Send request...",children:"Send request"}),e.jsxs(c,{component:w,href:y.authDemo.centered.signIn,color:"inherit",variant:"subtitle2",sx:{mx:"auto",alignItems:"center",display:"inline-flex"},children:[e.jsx(j,{icon:"eva:arrow-ios-back-fill",width:16,sx:{mr:.5}}),"Return to sign in"]})]});return e.jsxs(e.Fragment,{children:[h,e.jsx(S,{methods:l,onSubmit:x,children:u})]})}const z=r.object({code:r.string().min(1,{message:"Code is required!"}).min(6,{message:"Code must be at least 6 characters!"}),email:r.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:r.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"}),confirmPassword:r.string().min(1,{message:"Confirm password is required!"})}).refine(s=>s.password===s.confirmPassword,{message:"Passwords do not match!",path:["confirmPassword"]});function Z(){const s=C(),l={code:"",email:"",password:"",confirmPassword:""},o=v({resolver:P(z),defaultValues:l}),{handleSubmit:m,formState:{isSubmitting:x}}=o,h=m(async a=>{try{await new Promise(p=>setTimeout(p,500)),console.info("DATA",a)}catch(p){console.error(p)}}),u=e.jsxs(e.Fragment,{children:[e.jsx(D,{sx:{mx:"auto"}}),e.jsxs(n,{spacing:1,sx:{mt:3,mb:5,textAlign:"center",whiteSpace:"pre-line"},children:[e.jsx(t,{variant:"h5",children:"Request sent successfully!"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:`We've sent a 6-digit confirmation email to your email. 
Please enter the code in below box to verify your email.`})]})]}),g=e.jsxs(n,{spacing:3,children:[e.jsx(i.Text,{name:"email",label:"Email address",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),e.jsx(i.Code,{name:"code"}),e.jsx(i.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:s.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(T,{position:"end",children:e.jsx(d,{onClick:s.onToggle,edge:"end",children:e.jsx(j,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(i.Text,{name:"confirmPassword",label:"Confirm new password",type:s.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(T,{position:"end",children:e.jsx(d,{onClick:s.onToggle,edge:"end",children:e.jsx(j,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(I,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:x,loadingIndicator:"Update password...",children:"Update password"}),e.jsxs(t,{variant:"body2",sx:{mx:"auto"},children:["Don’t have a code? ",e.jsx(c,{variant:"subtitle2",sx:{cursor:"pointer"},children:"Resend code"})]}),e.jsxs(c,{component:w,href:y.authDemo.centered.signIn,color:"inherit",variant:"subtitle2",sx:{mx:"auto",alignItems:"center",display:"inline-flex"},children:[e.jsx(j,{icon:"eva:arrow-ios-back-fill",width:16,sx:{mr:.5}}),"Return to sign in"]})]});return e.jsxs(e.Fragment,{children:[u,e.jsx(S,{methods:o,onSubmit:h,children:g})]})}export{Q as C,X as a,M as b,Y as c,Z as d};
