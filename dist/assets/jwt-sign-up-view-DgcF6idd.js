import{l as v,n as S,r as I,o as P,q as B,j as e,S as a,w as L,I as E,L as d,R as f,x as F,T as m,p as T,y as M}from"./index-MU8Aef1d.js";import{z as r,u as N,F as t,a as k,t as A}from"./form-provider-ButI2dhd.js";import"./image-BL6GZRKO.js";import"./editor-DkQPNGFJ.js";import{I as q}from"./InputAdornment-BqrKXd48.js";import{L as C}from"./LoadingButton-Bo4_xExy.js";const R=r.object({email:r.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:r.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"})});function G(){const i=v(),{checkUserSession:o}=S(),[n,u]=I.useState(""),l=P(),g={email:"test1@email.com",password:"12345678"},c=N({resolver:A(R),defaultValues:g}),{handleSubmit:x,formState:{isSubmitting:j}}=c,b=x(async p=>{try{await B({email:p.email,password:p.password}),await(o==null?void 0:o()),i.refresh()}catch(s){console.error(s),u(s instanceof Error?s.message:s)}}),w=e.jsxs(a,{spacing:1.5,sx:{mb:3},children:[e.jsx(m,{variant:"h5",children:"Sign in to Laundry SaaS POS"}),e.jsxs(a,{direction:"row",spacing:.5,children:[e.jsx(m,{variant:"body2",sx:{color:"text.secondary"},children:"Don't have an account?"}),e.jsx(d,{component:f,href:T.auth.jwt.signUp,variant:"subtitle2",children:"Create an Account"})]})]}),y=e.jsxs(a,{spacing:3,children:[e.jsx(t.Text,{name:"email",label:"Email address",InputLabelProps:{shrink:!0}}),e.jsxs(a,{spacing:1.5,children:[e.jsx(t.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:l.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(q,{position:"end",children:e.jsx(L,{onClick:l.onToggle,edge:"end",children:e.jsx(E,{icon:l.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(d,{component:f,href:"#",variant:"body2",color:"inherit",sx:{alignSelf:"flex-end"},children:"Forgot password?"})]}),e.jsx(C,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:j,loadingIndicator:"Sign in...",children:"Login"})]});return e.jsxs(e.Fragment,{children:[w,!!n&&e.jsx(F,{severity:"error",sx:{mb:3},children:n}),e.jsx(k,{methods:c,onSubmit:b,children:y})]})}const V=r.object({firstName:r.string().min(1,{message:"First name is required!"}),lastName:r.string().min(1,{message:"Last name is required!"}),email:r.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:r.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"})});function O(){const{checkUserSession:i}=S(),o=v(),n=P(),[u,l]=I.useState(""),g={firstName:"Hello",lastName:"Friend",email:"hello@gmail.com",password:"@demo1"},c=N({resolver:A(V),defaultValues:g}),{handleSubmit:x,formState:{isSubmitting:j}}=c,b=x(async s=>{try{await M({email:s.email,password:s.password,firstName:s.firstName,lastName:s.lastName}),await(i==null?void 0:i()),o.refresh()}catch(h){console.error(h),l(h instanceof Error?h.message:h)}}),w=e.jsxs(a,{spacing:1.5,sx:{mb:5},children:[e.jsx(m,{variant:"h5",children:"Get started absolutely free"}),e.jsxs(a,{direction:"row",spacing:.5,children:[e.jsx(m,{variant:"body2",sx:{color:"text.secondary"},children:"Already have an account?"}),e.jsx(d,{component:f,href:T.auth.jwt.signIn,variant:"subtitle2",children:"Sign in"})]})]}),y=e.jsxs(a,{spacing:3,children:[e.jsxs(a,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(t.Text,{name:"firstName",label:"First name",InputLabelProps:{shrink:!0}}),e.jsx(t.Text,{name:"lastName",label:"Last name",InputLabelProps:{shrink:!0}})]}),e.jsx(t.Text,{name:"email",label:"Email address",InputLabelProps:{shrink:!0}}),e.jsx(t.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:n.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(q,{position:"end",children:e.jsx(L,{onClick:n.onToggle,edge:"end",children:e.jsx(E,{icon:n.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(C,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:j,loadingIndicator:"Create account...",children:"Create account"})]}),p=e.jsxs(m,{component:"div",sx:{mt:3,textAlign:"center",typography:"caption",color:"text.secondary"},children:["By signing up, I agree to ",e.jsx(d,{underline:"always",color:"text.primary",children:"Terms of service"})," and ",e.jsx(d,{underline:"always",color:"text.primary",children:"Privacy policy"}),"."]});return e.jsxs(e.Fragment,{children:[w,!!u&&e.jsx(F,{severity:"error",sx:{mb:3},children:u}),e.jsx(k,{methods:c,onSubmit:b,children:y}),p]})}export{G as J,O as a};