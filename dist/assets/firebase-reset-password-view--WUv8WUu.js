import{al as M,am as O,an as J,ao as K,ap as Q,aq as X,ar as Y,as as Z,at as k,au as _,av as ee,o as W,q as re,r as N,w as G,j as e,S as t,L as j,R as v,p as f,y as h,I as L,z as U,T as x,D as V,aw as b}from"./index-DxrsDIwY.js";import{z as l,u as R,F as A,t as C}from"./form-provider-DzAJAZLb.js";import{F as p}from"./fields-Dsl2Pqgx.js";import"./image-yj0A9F1D.js";import"./editor-Dqkfe7Lc.js";import{I as $}from"./InputAdornment-D2FMqto9.js";import{L as q}from"./LoadingButton-BPYHnDdd.js";import{P as se}from"./new-password-icon-B9aiazx-.js";const w={},ne={},ae=async({email:s,password:i})=>{try{await M(w,s,i);const n=w.currentUser;if(!(n!=null&&n.emailVerified))throw new Error("Email not verified!")}catch(n){throw console.error("Error during sign in with password:",n),n}},z=async()=>{const s=new Z;await k(w,s)},B=async()=>{const s=new _;await k(w,s)},D=async()=>{const s=new ee;await k(w,s)},te=async({email:s,password:i,firstName:n,lastName:d})=>{var c,m;try{const a=await O(w,s,i);await J(a.user);const u=K(Q(ne,"users"),(c=a.user)==null?void 0:c.uid);await X(u,{uid:(m=a.user)==null?void 0:m.uid,email:s,displayName:`${n} ${d}`})}catch(a){throw console.error("Error during sign up:",a),a}},ie=async({email:s})=>{await Y(w,s)},oe=l.object({email:l.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:l.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"})});function ye(){const s=W(),{checkUserSession:i}=re(),[n,d]=N.useState(""),c=G(),m={email:"",password:""},a=R({resolver:C(oe),defaultValues:m}),{handleSubmit:u,formState:{isSubmitting:y}}=a,g=u(async r=>{try{await ae({email:r.email,password:r.password}),await(i==null?void 0:i()),s.refresh()}catch(o){console.error(o),d(o instanceof Error?o.message:o)}}),S=async()=>{try{await z()}catch(r){console.error(r)}},I=async()=>{try{await B()}catch(r){console.error(r)}},P=async()=>{try{await D()}catch(r){console.error(r)}},E=e.jsxs(t,{spacing:1.5,sx:{mb:5},children:[e.jsx(x,{variant:"h5",children:"Sign in to your account"}),e.jsxs(t,{direction:"row",spacing:.5,children:[e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:"Don't have an account?"}),e.jsx(j,{component:v,href:f.auth.firebase.signUp,variant:"subtitle2",children:"Get started"})]})]}),F=e.jsxs(t,{spacing:3,children:[e.jsx(p.Text,{name:"email",label:"Email address",InputLabelProps:{shrink:!0}}),e.jsxs(t,{spacing:1.5,children:[e.jsx(j,{component:v,href:f.auth.firebase.resetPassword,variant:"body2",color:"inherit",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),e.jsx(p.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:c.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx($,{position:"end",children:e.jsx(h,{onClick:c.onToggle,edge:"end",children:e.jsx(L,{icon:c.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}})]}),e.jsx(q,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:y,loadingIndicator:"Sign in...",children:"Sign in"})]}),T=e.jsxs(e.Fragment,{children:[e.jsx(V,{sx:{my:3,typography:"overline",color:"text.disabled","&::before, :after":{borderTopStyle:"dashed"}},children:"OR"}),e.jsxs(t,{direction:"row",justifyContent:"center",spacing:1,children:[e.jsx(h,{onClick:S,children:e.jsx(b,{icon:"google",width:22})}),e.jsx(h,{color:"inherit",onClick:I,children:e.jsx(b,{icon:"github",width:22})}),e.jsx(h,{color:"inherit",onClick:P,children:e.jsx(b,{icon:"twitter",width:22})})]})]});return e.jsxs(e.Fragment,{children:[E,!!n&&e.jsx(U,{severity:"error",sx:{mb:3},children:n}),e.jsx(A,{methods:a,onSubmit:g,children:F}),T]})}const ce=l.object({firstName:l.string().min(1,{message:"First name is required!"}),lastName:l.string().min(1,{message:"Last name is required!"}),email:l.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:l.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"})});function je(){const[s,i]=N.useState(""),n=W(),d=G(),c={firstName:"",lastName:"",email:"",password:""},m=R({resolver:C(ce),defaultValues:c}),{handleSubmit:a,formState:{isSubmitting:u}}=m,y=a(async r=>{try{await te({email:r.email,password:r.password,firstName:r.firstName,lastName:r.lastName});const o=new URLSearchParams({email:r.email}).toString(),H=`${f.auth.firebase.verify}?${o}`;n.push(H)}catch(o){console.error(o),i(o instanceof Error?o.message:o)}}),g=async()=>{try{await z()}catch(r){console.error(r)}},S=async()=>{try{await B()}catch(r){console.error(r)}},I=async()=>{try{await D()}catch(r){console.error(r)}},P=e.jsxs(t,{spacing:1.5,sx:{mb:5},children:[e.jsx(x,{variant:"h5",children:"Get started absolutely free"}),e.jsxs(t,{direction:"row",spacing:.5,children:[e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:"Already have an account?"}),e.jsx(j,{component:v,href:f.auth.firebase.signIn,variant:"subtitle2",children:"Sign in"})]})]}),E=e.jsxs(t,{spacing:3,children:[e.jsxs(t,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(p.Text,{name:"firstName",label:"First name",InputLabelProps:{shrink:!0}}),e.jsx(p.Text,{name:"lastName",label:"Last name",InputLabelProps:{shrink:!0}})]}),e.jsx(p.Text,{name:"email",label:"Email address",InputLabelProps:{shrink:!0}}),e.jsx(p.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:d.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx($,{position:"end",children:e.jsx(h,{onClick:d.onToggle,edge:"end",children:e.jsx(L,{icon:d.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(q,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:u,loadingIndicator:"Create account...",children:"Create account"})]}),F=e.jsxs(x,{component:"div",sx:{mt:3,textAlign:"center",typography:"caption",color:"text.secondary"},children:["By signing up, I agree to ",e.jsx(j,{underline:"always",color:"text.primary",children:"Terms of service"})," and ",e.jsx(j,{underline:"always",color:"text.primary",children:"Privacy policy"}),"."]}),T=e.jsxs(e.Fragment,{children:[e.jsx(V,{sx:{my:3,typography:"overline",color:"text.disabled","&::before, :after":{borderTopStyle:"dashed"}},children:"OR"}),e.jsxs(t,{direction:"row",justifyContent:"center",spacing:1,children:[e.jsx(h,{onClick:g,children:e.jsx(b,{icon:"google",width:22})}),e.jsx(h,{color:"inherit",onClick:S,children:e.jsx(b,{icon:"github",width:22})}),e.jsx(h,{color:"inherit",onClick:I,children:e.jsx(b,{icon:"twitter",width:22})})]})]});return e.jsxs(e.Fragment,{children:[P,!!s&&e.jsx(U,{severity:"error",sx:{mb:3},children:s}),e.jsx(A,{methods:m,onSubmit:y,children:E}),F,T]})}const le=l.object({email:l.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})});function be(){const s=W(),i={email:""},n=R({resolver:C(le),defaultValues:i}),{handleSubmit:d,formState:{isSubmitting:c}}=n,m=d(async y=>{try{await ie({email:y.email});const g=new URLSearchParams({email:y.email}).toString(),S=`${f.auth.firebase.verify}?${g}`;s.push(S)}catch(g){console.error(g)}}),a=e.jsxs(e.Fragment,{children:[e.jsx(se,{sx:{mx:"auto"}}),e.jsxs(t,{spacing:1,sx:{mt:3,mb:5,textAlign:"center",whiteSpace:"pre-line"},children:[e.jsx(x,{variant:"h5",children:"Forgot your password?"}),e.jsx(x,{variant:"body2",sx:{color:"text.secondary"},children:"Please enter the email address associated with your account and we'll email you a link to reset your password."})]})]}),u=e.jsxs(t,{spacing:3,children:[e.jsx(p.Text,{autoFocus:!0,name:"email",label:"Email address",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),e.jsx(q,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:c,loadingIndicator:"Send request...",children:"Send request"}),e.jsxs(j,{component:v,href:f.auth.firebase.signIn,color:"inherit",variant:"subtitle2",sx:{gap:.5,alignSelf:"center",alignItems:"center",display:"inline-flex"},children:[e.jsx(L,{width:16,icon:"eva:arrow-ios-back-fill"}),"Return to sign in"]})]});return e.jsxs(e.Fragment,{children:[a,e.jsx(A,{methods:n,onSubmit:m,children:u})]})}export{ye as F,je as a,be as b};
