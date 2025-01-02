import{r,Y as B,X as I,dp as D,dq as h,dn as x,dr as k,j as e,cZ as U,S as y,T as u,B as v,$ as Q,I as H,e as K,dQ as L,p as f,dU as V,H as z,C as G}from"./index-BqQARj70.js";import{u as M,E as $}from"./error-block-Cvsq6LVS.js";import{C as R}from"./custom-breadcrumbs-ryDpeVg5.js";import{z as o,u as J,t as O,a as X,F as i}from"./form-provider-ccfU2XUN.js";import{h as Y}from"./utils-BkGDLkaZ.js";import{u as w}from"./useMutation-D9b-SBJX.js";import{f as S}from"./format-number-BvEweN_e.js";import{U as Z}from"./upload-avatar-rmFzksOv.js";import"./editor-QJd8noTi.js";import{s as W}from"./schema-helper-BD6wlizp.js";import{I as _}from"./InputAdornment-BfS4czl_.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./TextField-Ddc-2_B3.js";import"./FormControl-C8LIfacH.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Cypnw6Fi.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Dza6C49E.js";import"./Select-BcNE4CY6.js";import"./Menu-CyG4g8V9.js";import"./InputBase-ByUog9Qa.js";import"./FormHelperText-D7zaUcMu.js";import"./Rating-CRHSMtZR.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-CY1kJa8b.js";import"./RadioGroup-ChlGooHA.js";import"./FormGroup-CXDpwB7j.js";import"./FormControlLabel-DYa7_yhu.js";import"./index-ALNGUIW9.js";import"./countries-DSLisFCy.js";import"./Autocomplete-mVzVA2ZY.js";import"./Chip-DPBTbqGw.js";import"./country-select-BdT_Z9O2.js";import"./Checkbox-Bhx6CUcB.js";import"./DatePicker-Ce3HVs4j.js";import"./DialogContent-Bu9AzrBB.js";import"./ListItem-D-3kOQEW.js";import"./MobileDateTimePicker-huLGYsGv.js";import"./Tabs-CmqXMWlF.js";import"./KeyboardArrowRight-CBFHahxG.js";import"./image-D-bc4Fg4.js";import"./index-3on3wy4W.js";const A=o.object({firstName:o.string().min(1,{message:"Staff First Name is required!"}),lastName:o.string(),password:o.string().min(1,{message:"Password is required!"}).min(8,{message:"Password must be at least 8 characters!"}),email:o.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:W.phoneNumber({isValidPhoneNumber:Y})}),ee=({userAccount:a})=>{const n=r.useRef(a),l=B(),d=I(),[p,N]=r.useState(null),g=r.useMemo(()=>({firstName:(a==null?void 0:a.firstName)||"",lastName:(a==null?void 0:a.lastName)||"",email:(a==null?void 0:a.email)||"",password:"",phoneNumber:(a==null?void 0:a.phoneNumber)||""}),[a]),b=J({resolver:O(A),defaultValues:g}),{reset:F,watch:se,setValue:re,handleSubmit:C,control:oe,formState:{isSubmitting:ie}}=b,E=C(async t=>{try{if(p){n.current={...t};const s=new FormData;s.append("file",p),s.append("category","Avatar"),await T(s)}else await j(t)}catch(s){console.error(s)}});r.useEffect(()=>{a&&F(g)},[a]);const q=r.useCallback(t=>{const s=t[0];N(s)},[]),P={headers:{"content-type":"multipart/form-data"}},c=D(),{mutate:T}=w({mutationFn:t=>h.post(x.files.upload,t,P),onSuccess:async({data:t})=>{const{name:s}=t;if(s){const{current:m}=n;m.avatar=s,await j(m)}return t},onSettled:async()=>{await c.invalidateQueries({queryKey:["avatar-images"]}),await c.invalidateQueries({queryKey:["account-user"]})},onError:t=>{console.log(t)}}),{mutate:j}=w({mutationFn:t=>h.patch(x.account.edit,t),onSuccess:async({data:t})=>{const{user:s,setState:m}=d;d.user={...s,...t},m(d),k.success("Account Has Been Modified!")},onSettled:async()=>{await c.invalidateQueries({queryKey:["account-user"]})},onError:t=>{console.log(t)}});return e.jsx(U,{sx:{mb:4},children:e.jsx(X,{methods:b,onSubmit:E,children:e.jsxs(y,{spacing:4,sx:{p:3},children:[e.jsx(u,{variant:"h6",gutterBottom:!0,children:"Account Setting"}),e.jsxs(v,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(i.Text,{name:"firstName",label:"First Name"}),e.jsx(i.Text,{name:"lastName",label:"Last Name"}),e.jsx(i.Text,{name:"email",label:"Email address"}),e.jsx(i.Phone,{name:"phoneNumber",label:"Phone number"}),e.jsx(i.Text,{name:"password",label:"Password",placeholder:"8+ characters",type:l.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(_,{position:"end",children:e.jsx(Q,{onClick:l.onToggle,edge:"end",children:e.jsx(H,{icon:l.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsxs(y,{spacing:1.5,children:[e.jsx(u,{variant:"subtitle2",children:"Avatar"}),e.jsx(Z,{value:p,onDrop:q,validator:t=>t.size>1e6?{code:"file-too-large",message:`File is larger than ${S(1e6)}`}:null,helperText:e.jsxs(u,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",S(3145728)]})})]})]}),e.jsx(v,{display:"flex",justifyContent:"flex-end",gap:2,mt:2,children:e.jsx(K,{type:"submit",variant:"contained",children:"Save Changes"})})]})})})},ae=({userAccount:a})=>e.jsxs(L,{children:[e.jsx(R,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Settings",href:f.dashboard.tools.root},{name:"Account Settings"}],sx:{mb:{xs:3,md:5}}}),e.jsx(ee,{userAccount:a})]}),te={title:`Tools | Dashboard - ${G.site.name}`};function We(){const a=M({queryKey:["account-user"],queryFn:async()=>{const{data:n}=await h.get(x.auth.me);return n}});return a.isPending||a.isLoading?e.jsx(V,{}):a.isError?e.jsx($,{route:f.dashboard.tools.root}):e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsxs("title",{children:[" ",te.title]})}),e.jsx(ae,{userAccount:a.data})]})}export{We as default};
