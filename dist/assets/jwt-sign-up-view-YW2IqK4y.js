import{g as f,h as v,r as S,i as I,k as B,p as P,j as e,S as a,l as L,I as E,L as g,R as F,n as T,T as d,o as M}from"./index-DBAnnifB.js";import{z as r,u as k,F as t,a as N,t as A}from"./form-provider-C9WrYleO.js";import"./image-V4smZB5P.js";import"./editor-CpxSiSi_.js";import{I as q}from"./InputAdornment-kj6j4mRM.js";import{L as C}from"./LoadingButton-CunA2jBP.js";const R=r.object({email:r.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:r.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"})});function O(){const i=f(),{checkUserSession:o}=v(),[n,m]=S.useState(""),l=I(),h={email:"test1@email.com",password:"12345678"},c=k({resolver:A(R),defaultValues:h}),{handleSubmit:x,formState:{isSubmitting:j}}=c,b=x(async u=>{try{await B({email:u.email,password:u.password}),await(o==null?void 0:o()),i.replace(P.dashboard)}catch(s){console.error(s),m(s instanceof Error?s.message:s)}}),w=e.jsxs(a,{spacing:1.5,sx:{mb:3},children:[e.jsx(d,{variant:"h5",children:"Sign in to Laundry SaaS POS"}),e.jsx(a,{direction:"row",spacing:.5,children:e.jsx(d,{variant:"body2",sx:{color:"text.secondary"},children:"Don't have an account?"})})]}),y=e.jsxs(a,{spacing:3,children:[e.jsx(t.Text,{name:"email",label:"Email address",InputLabelProps:{shrink:!0}}),e.jsxs(a,{spacing:1.5,children:[e.jsx(t.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:l.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(q,{position:"end",children:e.jsx(L,{onClick:l.onToggle,edge:"end",children:e.jsx(E,{icon:l.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(g,{component:F,href:"#",variant:"body2",color:"inherit",sx:{alignSelf:"flex-end"},children:"Forgot password?"})]}),e.jsx(C,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:j,loadingIndicator:"Sign in...",children:"Login"})]});return e.jsxs(e.Fragment,{children:[w,!!n&&e.jsx(T,{severity:"error",sx:{mb:3},children:n}),e.jsx(N,{methods:c,onSubmit:b,children:y})]})}const V=r.object({firstName:r.string().min(1,{message:"First name is required!"}),lastName:r.string().min(1,{message:"Last name is required!"}),email:r.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:r.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"})});function U(){const{checkUserSession:i}=v(),o=f(),n=I(),[m,l]=S.useState(""),h={firstName:"Hello",lastName:"Friend",email:"hello@gmail.com",password:"@demo1"},c=k({resolver:A(V),defaultValues:h}),{handleSubmit:x,formState:{isSubmitting:j}}=c,b=x(async s=>{try{await M({email:s.email,password:s.password,firstName:s.firstName,lastName:s.lastName}),await(i==null?void 0:i()),o.refresh()}catch(p){console.error(p),l(p instanceof Error?p.message:p)}}),w=e.jsxs(a,{spacing:1.5,sx:{mb:5},children:[e.jsx(d,{variant:"h5",children:"Get started absolutely free"}),e.jsxs(a,{direction:"row",spacing:.5,children:[e.jsx(d,{variant:"body2",sx:{color:"text.secondary"},children:"Already have an account?"}),e.jsx(g,{component:F,href:P.auth.jwt.signIn,variant:"subtitle2",children:"Sign in"})]})]}),y=e.jsxs(a,{spacing:3,children:[e.jsxs(a,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(t.Text,{name:"firstName",label:"First name",InputLabelProps:{shrink:!0}}),e.jsx(t.Text,{name:"lastName",label:"Last name",InputLabelProps:{shrink:!0}})]}),e.jsx(t.Text,{name:"email",label:"Email address",InputLabelProps:{shrink:!0}}),e.jsx(t.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:n.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(q,{position:"end",children:e.jsx(L,{onClick:n.onToggle,edge:"end",children:e.jsx(E,{icon:n.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(C,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:j,loadingIndicator:"Create account...",children:"Create account"})]}),u=e.jsxs(d,{component:"div",sx:{mt:3,textAlign:"center",typography:"caption",color:"text.secondary"},children:["By signing up, I agree to ",e.jsx(g,{underline:"always",color:"text.primary",children:"Terms of service"})," and ",e.jsx(g,{underline:"always",color:"text.primary",children:"Privacy policy"}),"."]});return e.jsxs(e.Fragment,{children:[w,!!m&&e.jsx(T,{severity:"error",sx:{mb:3},children:m}),e.jsx(N,{methods:c,onSubmit:b,children:y}),u]})}export{O as J,U as a};
