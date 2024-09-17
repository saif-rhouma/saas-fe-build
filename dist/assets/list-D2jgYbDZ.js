import{r,w as q,dN as B,dO as p,dM as c,dP as I,j as e,aH as D,S as j,T as d,B as y,y as k,I as U,e as H,ed as L,p as u,eh as V,H as M,C as Q}from"./index-DxrsDIwY.js";import{u as z,E as G}from"./error-block-Cg6RpAZK.js";import{C as K}from"./custom-breadcrumbs-Dd3lNCwD.js";import{z as o,b as $,u as O,t as R,F as J}from"./form-provider-DzAJAZLb.js";import{u as v}from"./useMutation-f5nVFG-s.js";import{a as w}from"./format-number-DtiborQ_.js";import{U as W}from"./upload-avatar-4NlzUb0f.js";import{F as i}from"./fields-Dsl2Pqgx.js";import"./editor-Dqkfe7Lc.js";import{s as X}from"./schema-helper-Dd4Kd2WC.js";import{I as Y}from"./InputAdornment-D2FMqto9.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./TextField-C2VP4uls.js";import"./FormControl-CC-u2HkW.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CQVMsmZY.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-EgLeF9WB.js";import"./Select-eQVewVvt.js";import"./Menu-C6l2dIf8.js";import"./InputBase-B9Lf9cs-.js";import"./FormHelperText-DMsDqsw2.js";import"./index-wGJ5bMai.js";import"./countries-DSLisFCy.js";import"./image-yj0A9F1D.js";import"./Rating-FZfLYAhV.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-R3UsSTxo.js";import"./RadioGroup-IW7zsT63.js";import"./FormGroup-69w0Ctto.js";import"./FormControlLabel-DKxiCaQc.js";import"./Autocomplete-DQd8H5I4.js";import"./Chip-Bq-6ExUD.js";import"./country-select-6tMU1vH_.js";import"./Checkbox-ylG2wecL.js";import"./DatePicker-CHBP34D3.js";import"./DialogContent-262oYdAn.js";import"./ListItem-Cbx-5wAg.js";import"./MobileDateTimePicker-UWVv-JJA.js";import"./index-BNV8Ha3a.js";const Z=o.object({firstName:o.string().min(1,{message:"Staff First Name is required!"}),lastName:o.string().min(1,{message:"Staff Last Name is required!"}),password:o.string().min(1,{message:"Password is required!"}).min(8,{message:"Password must be at least 6 characters!"}),email:o.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:X.phoneNumber({isValidPhoneNumber:$})}),_=({userAccount:a})=>{const n=r.useRef(a),m=q(),[l,S]=r.useState(null),h=r.useMemo(()=>({firstName:(a==null?void 0:a.firstName)||"",lastName:(a==null?void 0:a.lastName)||"",email:(a==null?void 0:a.email)||"",password:"",phoneNumber:(a==null?void 0:a.phoneNumber)||""}),[a]),x=O({resolver:R(Z),defaultValues:h}),{reset:N,watch:te,setValue:se,handleSubmit:F,control:re,formState:{isSubmitting:oe}}=x,C=F(async t=>{try{if(l){n.current={...t};const s=new FormData;s.append("file",l),s.append("category","Avatar"),await T(s)}else await g(t)}catch(s){console.error(s)}});r.useEffect(()=>{a&&N(h)},[a]);const E=r.useCallback(t=>{const s=t[0];S(s)},[]),P={headers:{"content-type":"multipart/form-data"}},f=B(),{mutate:T}=v({mutationFn:t=>p.post(c.files.upload,t,P),onSuccess:async({data:t})=>{const{name:s}=t;if(s){const{current:b}=n;b.avatar=s,await g(b)}return t},onSettled:async()=>{await f.invalidateQueries({queryKey:["avatar-images"]})},onError:t=>{console.log(t)}}),{mutate:g}=v({mutationFn:t=>p.patch(c.account.edit,t),onSuccess:async()=>{I.success("Account Has Been Modified!")},onSettled:async()=>{await f.invalidateQueries({queryKey:["account-user"]})},onError:t=>{console.log(t)}});return e.jsx(D,{sx:{mb:4},children:e.jsx(J,{methods:x,onSubmit:C,children:e.jsxs(j,{spacing:4,sx:{p:3},children:[e.jsx(d,{variant:"h6",gutterBottom:!0,children:"Settings"}),e.jsxs(y,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(i.Text,{name:"firstName",label:"First Name"}),e.jsx(i.Text,{name:"lastName",label:"Last Name"}),e.jsx(i.Text,{name:"email",label:"Email address"}),e.jsx(i.Phone,{name:"phoneNumber",label:"Phone number"}),e.jsx(i.Text,{name:"password",label:"Password",placeholder:"8+ characters",type:m.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(Y,{position:"end",children:e.jsx(k,{onClick:m.onToggle,edge:"end",children:e.jsx(U,{icon:m.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsxs(j,{spacing:1.5,children:[e.jsx(d,{variant:"subtitle2",children:"Avatar"}),e.jsx(W,{value:l,onDrop:E,validator:t=>t.size>1e6?{code:"file-too-large",message:`File is larger than ${w(1e6)}`}:null,helperText:e.jsxs(d,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",w(3145728)]})})]})]}),e.jsx(y,{display:"flex",justifyContent:"flex-end",gap:2,mt:2,children:e.jsx(H,{type:"submit",variant:"contained",children:"Save Changes"})})]})})})},A=({userAccount:a})=>e.jsxs(L,{children:[e.jsx(K,{links:[{name:"Dashboard",href:u.dashboard.root},{name:"Tools",href:u.dashboard.tools.root},{name:"Account Settings"}],sx:{mb:{xs:3,md:5}}}),e.jsx(_,{userAccount:a})]}),ee=A,ae={title:`Tools | Dashboard - ${Q.site.name}`};function We(){const a=z({queryKey:["account-user"],queryFn:async()=>{const{data:n}=await p.get(c.auth.me);return n}});return a.isPending||a.isLoading?e.jsx(V,{}):a.isError?e.jsx(G,{route:u.dashboard.tools.root}):e.jsxs(e.Fragment,{children:[e.jsx(M,{children:e.jsxs("title",{children:[" ",ae.title]})}),e.jsx(ee,{userAccount:a.data})]})}export{We as default};
