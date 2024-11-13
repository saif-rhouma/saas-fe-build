import{ab as D,ac as O,ad as J,ae as K,af as Q,ag as X,ah as Y,ai as Z,aj as k,ak as _,al as ee,g as W,h as se,r as G,i as q,j as e,S as t,L as j,R as v,p as f,l as m,I as L,n as U,T as p,am as V,an as b}from"./index-CeoumMXa.js";import{z as l,u as R,F as x,a as A,t as C}from"./form-provider-DKdlN7sO.js";import"./image-gD0MRFhe.js";import"./editor-CGBM6KiM.js";import{I as $}from"./InputAdornment-C38_n1P8.js";import{L as N}from"./LoadingButton-CaE9NhiX.js";import{P as re}from"./new-password-icon-0-T9MzPV.js";const w={},ae={},ne=async({email:r,password:i})=>{try{await D(w,r,i);const a=w.currentUser;if(!(a!=null&&a.emailVerified))throw new Error("Email not verified!")}catch(a){throw console.error("Error during sign in with password:",a),a}},z=async()=>{const r=new Z;await k(w,r)},B=async()=>{const r=new _;await k(w,r)},H=async()=>{const r=new ee;await k(w,r)},te=async({email:r,password:i,firstName:a,lastName:d})=>{var c,h;try{const n=await O(w,r,i);await J(n.user);const u=K(Q(ae,"users"),(c=n.user)==null?void 0:c.uid);await X(u,{uid:(h=n.user)==null?void 0:h.uid,email:r,displayName:`${a} ${d}`})}catch(n){throw console.error("Error during sign up:",n),n}},ie=async({email:r})=>{await Y(w,r)},oe=l.object({email:l.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:l.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"})});function we(){const r=W(),{checkUserSession:i}=se(),[a,d]=G.useState(""),c=q(),h={email:"",password:""},n=R({resolver:C(oe),defaultValues:h}),{handleSubmit:u,formState:{isSubmitting:y}}=n,g=u(async s=>{try{await ne({email:s.email,password:s.password}),await(i==null?void 0:i()),r.refresh()}catch(o){console.error(o),d(o instanceof Error?o.message:o)}}),S=async()=>{try{await z()}catch(s){console.error(s)}},I=async()=>{try{await B()}catch(s){console.error(s)}},P=async()=>{try{await H()}catch(s){console.error(s)}},E=e.jsxs(t,{spacing:1.5,sx:{mb:5},children:[e.jsx(p,{variant:"h5",children:"Sign in to your account"}),e.jsxs(t,{direction:"row",spacing:.5,children:[e.jsx(p,{variant:"body2",sx:{color:"text.secondary"},children:"Don't have an account?"}),e.jsx(j,{component:v,href:f.auth.firebase.signUp,variant:"subtitle2",children:"Get started"})]})]}),F=e.jsxs(t,{spacing:3,children:[e.jsx(x.Text,{name:"email",label:"Email address",InputLabelProps:{shrink:!0}}),e.jsxs(t,{spacing:1.5,children:[e.jsx(j,{component:v,href:f.auth.firebase.resetPassword,variant:"body2",color:"inherit",sx:{alignSelf:"flex-end"},children:"Forgot password?"}),e.jsx(x.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:c.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx($,{position:"end",children:e.jsx(m,{onClick:c.onToggle,edge:"end",children:e.jsx(L,{icon:c.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}})]}),e.jsx(N,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:y,loadingIndicator:"Sign in...",children:"Sign in"})]}),T=e.jsxs(e.Fragment,{children:[e.jsx(V,{sx:{my:3,typography:"overline",color:"text.disabled","&::before, :after":{borderTopStyle:"dashed"}},children:"OR"}),e.jsxs(t,{direction:"row",justifyContent:"center",spacing:1,children:[e.jsx(m,{onClick:S,children:e.jsx(b,{icon:"google",width:22})}),e.jsx(m,{color:"inherit",onClick:I,children:e.jsx(b,{icon:"github",width:22})}),e.jsx(m,{color:"inherit",onClick:P,children:e.jsx(b,{icon:"twitter",width:22})})]})]});return e.jsxs(e.Fragment,{children:[E,!!a&&e.jsx(U,{severity:"error",sx:{mb:3},children:a}),e.jsx(A,{methods:n,onSubmit:g,children:F}),T]})}const ce=l.object({firstName:l.string().min(1,{message:"First name is required!"}),lastName:l.string().min(1,{message:"Last name is required!"}),email:l.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),password:l.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"})});function ye(){const[r,i]=G.useState(""),a=W(),d=q(),c={firstName:"",lastName:"",email:"",password:""},h=R({resolver:C(ce),defaultValues:c}),{handleSubmit:n,formState:{isSubmitting:u}}=h,y=n(async s=>{try{await te({email:s.email,password:s.password,firstName:s.firstName,lastName:s.lastName});const o=new URLSearchParams({email:s.email}).toString(),M=`${f.auth.firebase.verify}?${o}`;a.push(M)}catch(o){console.error(o),i(o instanceof Error?o.message:o)}}),g=async()=>{try{await z()}catch(s){console.error(s)}},S=async()=>{try{await B()}catch(s){console.error(s)}},I=async()=>{try{await H()}catch(s){console.error(s)}},P=e.jsxs(t,{spacing:1.5,sx:{mb:5},children:[e.jsx(p,{variant:"h5",children:"Get started absolutely free"}),e.jsxs(t,{direction:"row",spacing:.5,children:[e.jsx(p,{variant:"body2",sx:{color:"text.secondary"},children:"Already have an account?"}),e.jsx(j,{component:v,href:f.auth.firebase.signIn,variant:"subtitle2",children:"Sign in"})]})]}),E=e.jsxs(t,{spacing:3,children:[e.jsxs(t,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(x.Text,{name:"firstName",label:"First name",InputLabelProps:{shrink:!0}}),e.jsx(x.Text,{name:"lastName",label:"Last name",InputLabelProps:{shrink:!0}})]}),e.jsx(x.Text,{name:"email",label:"Email address",InputLabelProps:{shrink:!0}}),e.jsx(x.Text,{name:"password",label:"Password",placeholder:"6+ characters",type:d.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx($,{position:"end",children:e.jsx(m,{onClick:d.onToggle,edge:"end",children:e.jsx(L,{icon:d.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(N,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:u,loadingIndicator:"Create account...",children:"Create account"})]}),F=e.jsxs(p,{component:"div",sx:{mt:3,textAlign:"center",typography:"caption",color:"text.secondary"},children:["By signing up, I agree to ",e.jsx(j,{underline:"always",color:"text.primary",children:"Terms of service"})," and ",e.jsx(j,{underline:"always",color:"text.primary",children:"Privacy policy"}),"."]}),T=e.jsxs(e.Fragment,{children:[e.jsx(V,{sx:{my:3,typography:"overline",color:"text.disabled","&::before, :after":{borderTopStyle:"dashed"}},children:"OR"}),e.jsxs(t,{direction:"row",justifyContent:"center",spacing:1,children:[e.jsx(m,{onClick:g,children:e.jsx(b,{icon:"google",width:22})}),e.jsx(m,{color:"inherit",onClick:S,children:e.jsx(b,{icon:"github",width:22})}),e.jsx(m,{color:"inherit",onClick:I,children:e.jsx(b,{icon:"twitter",width:22})})]})]});return e.jsxs(e.Fragment,{children:[P,!!r&&e.jsx(U,{severity:"error",sx:{mb:3},children:r}),e.jsx(A,{methods:h,onSubmit:y,children:E}),F,T]})}const le=l.object({email:l.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})});function je(){const r=W(),i={email:""},a=R({resolver:C(le),defaultValues:i}),{handleSubmit:d,formState:{isSubmitting:c}}=a,h=d(async y=>{try{await ie({email:y.email});const g=new URLSearchParams({email:y.email}).toString(),S=`${f.auth.firebase.verify}?${g}`;r.push(S)}catch(g){console.error(g)}}),n=e.jsxs(e.Fragment,{children:[e.jsx(re,{sx:{mx:"auto"}}),e.jsxs(t,{spacing:1,sx:{mt:3,mb:5,textAlign:"center",whiteSpace:"pre-line"},children:[e.jsx(p,{variant:"h5",children:"Forgot your password?"}),e.jsx(p,{variant:"body2",sx:{color:"text.secondary"},children:"Please enter the email address associated with your account and we'll email you a link to reset your password."})]})]}),u=e.jsxs(t,{spacing:3,children:[e.jsx(x.Text,{autoFocus:!0,name:"email",label:"Email address",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),e.jsx(N,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:c,loadingIndicator:"Send request...",children:"Send request"}),e.jsxs(j,{component:v,href:f.auth.firebase.signIn,color:"inherit",variant:"subtitle2",sx:{gap:.5,alignSelf:"center",alignItems:"center",display:"inline-flex"},children:[e.jsx(L,{width:16,icon:"eva:arrow-ios-back-fill"}),"Return to sign in"]})]});return e.jsxs(e.Fragment,{children:[n,e.jsx(A,{methods:a,onSubmit:h,children:u})]})}export{we as F,ye as a,je as b};
