import{p as x,g as I,h as U,r as N,i as q,j as e,S as l,L as b,R as P,l as S,I as f,n as A,T as h}from"./index-dnffYGPF.js";import{z as i,u as F,F as p,a as T,t as E}from"./form-provider-CITdfumP.js";import"./image-Bobk4gjY.js";import"./editor-BrUPx9bQ.js";import{I as v}from"./InputAdornment-CP4MkqJg.js";import{L as k}from"./LoadingButton-C6C_t6P4.js";import{P as C,N as R}from"./new-password-icon-B6iwIU0p.js";const L={},V=async({email:a,password:n})=>{const{data:s,error:r}=await L.auth.signInWithPassword({email:a,password:n});if(r)throw console.error(r),r;return{data:s,error:r}},M=async({email:a,password:n,firstName:s,lastName:r})=>{var c,m;const{data:t,error:o}=await L.auth.signUp({email:a,password:n,options:{emailRedirectTo:`${window.location.origin}${x.dashboard.root}`,data:{display_name:`${s} ${r}`}}});if(o)throw console.error(o),o;if(!((m=(c=t==null?void 0:t.user)==null?void 0:c.identities)!=null&&m.length))throw new Error("This user already exists");return{data:t,error:o}},W=async({email:a})=>{const{data:n,error:s}=await L.auth.resetPasswordForEmail(a,{redirectTo:`${window.location.origin}${x.auth.supabase.updatePassword}`});if(s)throw console.error(s),s;return{data:n,error:s}},$=async({password:a})=>{const{data:n,error:s}=await L.auth.updateUser({password:a});if(s)throw console.error(s),s;return{data:n,error:s}},z=i.object({email:i.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:i.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"})});function Y(){const a=I(),{checkUserSession:n}=U(),[s,r]=N.useState(""),t=q(),o={email:"",password:""},c=F({resolver:E(z),defaultValues:o}),{handleSubmit:m,formState:{isSubmitting:g}}=c,w=m(async d=>{try{await V({email:d.email,password:d.password}),await(n==null?void 0:n()),a.refresh()}catch(u){console.error(u),r(u instanceof Error?u.message:u)}}),j=e.jsxs(l,{spacing:1.5,sx:{mb:5},children:[e.jsx(h,{variant:"h5",children:"Sign in to your account"}),e.jsxs(l,{direction:"row",spacing:.5,children:[e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"Don't have an account?"}),e.jsx(b,{component:P,href:x.auth.supabase.signUp,variant:"subtitle2",children:"Get started"})]})]}),y=e.jsxs(l,{spacing:3,children:[e.jsx(p.Text,{name:"email",label:"Email address",InputLabelProps:{shrink:!0}}),e.jsxs(l,{spacing:1.5,children:[e.jsx(b,{component:P,href:x.auth.supabase.resetPassword,variant:"body2",color:"inherit",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),e.jsx(p.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:t.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(v,{position:"end",children:e.jsx(S,{onClick:t.onToggle,edge:"end",children:e.jsx(f,{icon:t.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}})]}),e.jsx(k,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:g,loadingIndicator:"Sign in...",children:"Sign in"})]});return e.jsxs(e.Fragment,{children:[j,!!s&&e.jsx(A,{severity:"error",sx:{mb:3},children:s}),e.jsx(T,{methods:c,onSubmit:w,children:y})]})}const B=i.object({firstName:i.string().min(1,{message:"First name is required!"}),lastName:i.string().min(1,{message:"Last name is required!"}),email:i.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:i.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"})});function Z(){const[a,n]=N.useState(""),s=I(),r=q(),t={firstName:"",lastName:"",email:"",password:""},o=F({resolver:E(B),defaultValues:t}),{handleSubmit:c,formState:{isSubmitting:m}}=o,g=c(async d=>{try{await M({email:d.email,password:d.password,firstName:d.firstName,lastName:d.lastName}),s.push(x.auth.supabase.verify)}catch(u){console.error(u),n(u instanceof Error?u.message:u)}}),w=e.jsxs(l,{spacing:1.5,sx:{mb:5},children:[e.jsx(h,{variant:"h5",children:"Get started absolutely free"}),e.jsxs(l,{direction:"row",spacing:.5,children:[e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"Already have an account?"}),e.jsx(b,{component:P,href:x.auth.supabase.signIn,variant:"subtitle2",children:"Sign in"})]})]}),j=e.jsxs(l,{spacing:3,children:[e.jsxs(l,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(p.Text,{name:"firstName",label:"First name",InputLabelProps:{shrink:!0}}),e.jsx(p.Text,{name:"lastName",label:"Last name",InputLabelProps:{shrink:!0}})]}),e.jsx(p.Text,{name:"email",label:"Email address",InputLabelProps:{shrink:!0}}),e.jsx(p.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:r.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(v,{position:"end",children:e.jsx(S,{onClick:r.onToggle,edge:"end",children:e.jsx(f,{icon:r.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(k,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:m,loadingIndicator:"Create account...",children:"Create account"})]}),y=e.jsxs(h,{component:"div",sx:{mt:3,textAlign:"center",typography:"caption",color:"text.secondary"},children:["By signing up, I agree to ",e.jsx(b,{underline:"always",color:"text.primary",children:"Terms of service"})," and ",e.jsx(b,{underline:"always",color:"text.primary",children:"Privacy policy"}),"."]});return e.jsxs(e.Fragment,{children:[w,!!a&&e.jsx(A,{severity:"error",sx:{mb:3},children:a}),e.jsx(T,{methods:o,onSubmit:g,children:j}),y]})}const H=i.object({email:i.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})});function ee(){const a=I(),n={email:""},s=F({resolver:E(H),defaultValues:n}),{handleSubmit:r,formState:{isSubmitting:t}}=s,o=r(async g=>{try{await W({email:g.email}),a.push(x.auth.supabase.verify)}catch(w){console.error(w)}}),c=e.jsxs(e.Fragment,{children:[e.jsx(C,{sx:{mx:"auto"}}),e.jsxs(l,{spacing:1,sx:{mt:3,mb:5,textAlign:"center",whiteSpace:"pre-line"},children:[e.jsx(h,{variant:"h5",children:"Forgot your password?"}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"Please enter the email address associated with your account and we'll email you a link to reset your password."})]})]}),m=e.jsxs(l,{spacing:3,children:[e.jsx(p.Text,{autoFocus:!0,name:"email",label:"Email address",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),e.jsx(k,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:t,loadingIndicator:"Send request...",children:"Send request"}),e.jsxs(b,{component:P,href:x.auth.supabase.signIn,color:"inherit",variant:"subtitle2",sx:{gap:.5,alignSelf:"center",alignItems:"center",display:"inline-flex"},children:[e.jsx(f,{width:16,icon:"eva:arrow-ios-back-fill"}),"Return to sign in"]})]});return e.jsxs(e.Fragment,{children:[c,e.jsx(T,{methods:s,onSubmit:o,children:m})]})}const G=i.object({password:i.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"}),confirmPassword:i.string().min(1,{message:"Confirm password is required!"})}).refine(a=>a.password===a.confirmPassword,{message:"Passwords do not match!",path:["confirmPassword"]});function se(){const a=I(),[n,s]=N.useState(""),r=q(),t={password:"",confirmPassword:""},o=F({resolver:E(G),defaultValues:t}),{handleSubmit:c,formState:{isSubmitting:m}}=o,g=c(async y=>{try{await $({password:y.password}),a.push(x.dashboard.root)}catch(d){console.error(d),s(d instanceof Error?d.message:d)}}),w=e.jsxs(e.Fragment,{children:[e.jsx(R,{sx:{mx:"auto"}}),e.jsxs(l,{spacing:1,sx:{mt:3,mb:5,textAlign:"center",whiteSpace:"pre-line"},children:[e.jsx(h,{variant:"h5",children:"Update password"}),e.jsx(h,{variant:"body2",sx:{color:"text.secondary"},children:"Successful updates enable access using the new password."})]})]}),j=e.jsxs(l,{spacing:3,children:[e.jsx(p.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:r.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(v,{position:"end",children:e.jsx(S,{onClick:r.onToggle,edge:"end",children:e.jsx(f,{icon:r.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(p.Text,{name:"confirmPassword",label:"Confirm password",type:r.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(v,{position:"end",children:e.jsx(S,{onClick:r.onToggle,edge:"end",children:e.jsx(f,{icon:r.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(k,{fullWidth:!0,type:"submit",size:"large",variant:"contained",loading:m,loadingIndicator:"Update password...",children:"Update password"})]});return e.jsxs(e.Fragment,{children:[w,!!n&&e.jsx(A,{severity:"error",sx:{mb:3},children:n}),e.jsx(T,{methods:o,onSubmit:g,children:j})]})}export{Y as S,Z as a,se as b,ee as c};
