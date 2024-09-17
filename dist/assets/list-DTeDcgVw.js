import{r,w as q,dN as B,dO as p,dM as c,dP as I,j as e,aH as D,S as j,T as d,B as y,y as k,I as U,e as H,ed as L,p as u,eh as V,H as M,C as Q}from"./index-CZcV1F_p.js";import{u as z,E as G}from"./error-block-Dw3l6JuN.js";import{C as K}from"./custom-breadcrumbs-CbtQHK8e.js";import{z as o,b as $,u as O,t as R,F as J}from"./form-provider-Bx2WBj5v.js";import{u as v}from"./useMutation-RCoCYUsr.js";import{a as w}from"./format-number-_ePrRxix.js";import{U as W}from"./upload-avatar-1D7Vf-s3.js";import{F as i}from"./fields-hbdK3Trc.js";import"./editor-DaVZ1Z83.js";import{s as X}from"./schema-helper-CcrSI3-3.js";import{I as Y}from"./InputAdornment-DsfHwWIs.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./TextField-D7n2_qXr.js";import"./FormControl-3TPlxton.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-h10-06k3.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CRn0_UJR.js";import"./Select-DLGgW76C.js";import"./Menu-Biq0K9Dc.js";import"./InputBase-De2NihOG.js";import"./FormHelperText-BnZQySOl.js";import"./index-BQhbB6Ru.js";import"./countries-DSLisFCy.js";import"./image-DzsMNwzu.js";import"./Rating-DVTNlvpL.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-B7KCQCsS.js";import"./RadioGroup-r2gxq8lN.js";import"./FormGroup-BdZDUz2q.js";import"./FormControlLabel-BJNlLSWJ.js";import"./Autocomplete-3PR52KH6.js";import"./Chip-C3BxFZTA.js";import"./country-select-C2iLpbAw.js";import"./Checkbox-B9Q7SrE_.js";import"./DatePicker-omkT4XAu.js";import"./DialogContent-BM8q5mKd.js";import"./ListItem-cuOSimek.js";import"./MobileDateTimePicker-SOESVVJ9.js";import"./index-DHVWpqoh.js";const Z=o.object({firstName:o.string().min(1,{message:"Staff First Name is required!"}),lastName:o.string().min(1,{message:"Staff Last Name is required!"}),password:o.string().min(1,{message:"Password is required!"}).min(8,{message:"Password must be at least 6 characters!"}),email:o.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:X.phoneNumber({isValidPhoneNumber:$})}),_=({userAccount:a})=>{const n=r.useRef(a),m=q(),[l,S]=r.useState(null),h=r.useMemo(()=>({firstName:(a==null?void 0:a.firstName)||"",lastName:(a==null?void 0:a.lastName)||"",email:(a==null?void 0:a.email)||"",password:"",phoneNumber:(a==null?void 0:a.phoneNumber)||""}),[a]),x=O({resolver:R(Z),defaultValues:h}),{reset:N,watch:te,setValue:se,handleSubmit:F,control:re,formState:{isSubmitting:oe}}=x,C=F(async t=>{try{if(l){n.current={...t};const s=new FormData;s.append("file",l),s.append("category","Avatar"),await T(s)}else await g(t)}catch(s){console.error(s)}});r.useEffect(()=>{a&&N(h)},[a]);const E=r.useCallback(t=>{const s=t[0];S(s)},[]),P={headers:{"content-type":"multipart/form-data"}},f=B(),{mutate:T}=v({mutationFn:t=>p.post(c.files.upload,t,P),onSuccess:async({data:t})=>{const{name:s}=t;if(s){const{current:b}=n;b.avatar=s,await g(b)}return t},onSettled:async()=>{await f.invalidateQueries({queryKey:["avatar-images"]})},onError:t=>{console.log(t)}}),{mutate:g}=v({mutationFn:t=>p.patch(c.account.edit,t),onSuccess:async()=>{I.success("Account Has Been Modified!")},onSettled:async()=>{await f.invalidateQueries({queryKey:["account-user"]})},onError:t=>{console.log(t)}});return e.jsx(D,{sx:{mb:4},children:e.jsx(J,{methods:x,onSubmit:C,children:e.jsxs(j,{spacing:4,sx:{p:3},children:[e.jsx(d,{variant:"h6",gutterBottom:!0,children:"Settings"}),e.jsxs(y,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(i.Text,{name:"firstName",label:"First Name"}),e.jsx(i.Text,{name:"lastName",label:"Last Name"}),e.jsx(i.Text,{name:"email",label:"Email address"}),e.jsx(i.Phone,{name:"phoneNumber",label:"Phone number"}),e.jsx(i.Text,{name:"password",label:"Password",placeholder:"8+ characters",type:m.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(Y,{position:"end",children:e.jsx(k,{onClick:m.onToggle,edge:"end",children:e.jsx(U,{icon:m.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsxs(j,{spacing:1.5,children:[e.jsx(d,{variant:"subtitle2",children:"Avatar"}),e.jsx(W,{value:l,onDrop:E,validator:t=>t.size>1e6?{code:"file-too-large",message:`File is larger than ${w(1e6)}`}:null,helperText:e.jsxs(d,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",w(3145728)]})})]})]}),e.jsx(y,{display:"flex",justifyContent:"flex-end",gap:2,mt:2,children:e.jsx(H,{type:"submit",variant:"contained",children:"Save Changes"})})]})})})},A=({userAccount:a})=>e.jsxs(L,{children:[e.jsx(K,{links:[{name:"Dashboard",href:u.dashboard.root},{name:"Tools",href:u.dashboard.tools.root},{name:"Account Settings"}],sx:{mb:{xs:3,md:5}}}),e.jsx(_,{userAccount:a})]}),ee=A,ae={title:`Tools | Dashboard - ${Q.site.name}`};function We(){const a=z({queryKey:["account-user"],queryFn:async()=>{const{data:n}=await p.get(c.auth.me);return n}});return a.isPending||a.isLoading?e.jsx(V,{}):a.isError?e.jsx(G,{route:u.dashboard.tools.root}):e.jsxs(e.Fragment,{children:[e.jsx(M,{children:e.jsxs("title",{children:[" ",ae.title]})}),e.jsx(ee,{userAccount:a.data})]})}export{We as default};
