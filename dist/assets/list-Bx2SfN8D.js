import{r,i as B,h as I,dn as D,dp as h,dm as x,dq as k,j as e,aB as U,S as y,T as u,B as v,l as L,I as Q,e as H,dP as K,p as f,dT as V,H as z,C as G}from"./index-oyszM3Nj.js";import{u as M,E as R}from"./error-block-hlD8KBvT.js";import{C as $}from"./custom-breadcrumbs-BfQvIxyX.js";import{z as o,u as J,t as O,a as W,F as i}from"./form-provider-DVH46um2.js";import{h as X}from"./utils-C_u9tDdm.js";import{u as S}from"./useMutation-CrU_O3n6.js";import{a as w}from"./format-number-TKBdgRec.js";import{U as Y}from"./upload-avatar-BeRSwQx_.js";import"./editor-BBBPXrhA.js";import{s as Z}from"./schema-helper-5mta9_MQ.js";import{I as _}from"./InputAdornment-CcMUVLGV.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./TextField-SbZqCQXc.js";import"./FormControl-pEipRvY2.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CtA-6Ha1.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BkqI8r49.js";import"./Select-D9qKJtxp.js";import"./Menu-BDXnOmeW.js";import"./InputBase-CngNuOhd.js";import"./FormHelperText-DGNKCr7Q.js";import"./Rating-BRUpJwhP.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-Dsrfbsc0.js";import"./RadioGroup-tn6_l1NU.js";import"./FormGroup-BL6H52Jf.js";import"./FormControlLabel-kWTZarfi.js";import"./index-BT-WjpOH.js";import"./countries-DSLisFCy.js";import"./Autocomplete-f8l0PZTp.js";import"./Chip-BEEMMiur.js";import"./country-select-C1LXEP87.js";import"./Checkbox-D9Kygjd9.js";import"./DatePicker-Dffai1lP.js";import"./DialogContent-CvCwHI3o.js";import"./ListItem-Dj6rXR1V.js";import"./MobileDateTimePicker-DJ8XBGZQ.js";import"./Tabs-BhFbrTK2.js";import"./KeyboardArrowRight-CPXSLNUL.js";import"./image-D4xzDEh_.js";import"./index-DYy6t0qO.js";const A=o.object({firstName:o.string().min(1,{message:"Staff First Name is required!"}),lastName:o.string().min(1,{message:"Staff Last Name is required!"}),password:o.string().min(1,{message:"Password is required!"}).min(8,{message:"Password must be at least 8 characters!"}),email:o.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:Z.phoneNumber({isValidPhoneNumber:X})}),ee=({userAccount:a})=>{const n=r.useRef(a),l=B(),d=I(),[p,N]=r.useState(null),g=r.useMemo(()=>({firstName:(a==null?void 0:a.firstName)||"",lastName:(a==null?void 0:a.lastName)||"",email:(a==null?void 0:a.email)||"",password:"",phoneNumber:(a==null?void 0:a.phoneNumber)||""}),[a]),b=J({resolver:O(A),defaultValues:g}),{reset:F,watch:se,setValue:re,handleSubmit:C,control:oe,formState:{isSubmitting:ie}}=b,E=C(async t=>{try{if(p){n.current={...t};const s=new FormData;s.append("file",p),s.append("category","Avatar"),await T(s)}else await j(t)}catch(s){console.error(s)}});r.useEffect(()=>{a&&F(g)},[a]);const q=r.useCallback(t=>{const s=t[0];N(s)},[]),P={headers:{"content-type":"multipart/form-data"}},c=D(),{mutate:T}=S({mutationFn:t=>h.post(x.files.upload,t,P),onSuccess:async({data:t})=>{const{name:s}=t;if(s){const{current:m}=n;m.avatar=s,await j(m)}return t},onSettled:async()=>{await c.invalidateQueries({queryKey:["avatar-images"]}),await c.invalidateQueries({queryKey:["account-user"]})},onError:t=>{console.log(t)}}),{mutate:j}=S({mutationFn:t=>h.patch(x.account.edit,t),onSuccess:async({data:t})=>{const{user:s,setState:m}=d;d.user={...s,...t},m(d),k.success("Account Has Been Modified!")},onSettled:async()=>{await c.invalidateQueries({queryKey:["account-user"]})},onError:t=>{console.log(t)}});return e.jsx(U,{sx:{mb:4},children:e.jsx(W,{methods:b,onSubmit:E,children:e.jsxs(y,{spacing:4,sx:{p:3},children:[e.jsx(u,{variant:"h6",gutterBottom:!0,children:"Account Setting"}),e.jsxs(v,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(i.Text,{name:"firstName",label:"First Name"}),e.jsx(i.Text,{name:"lastName",label:"Last Name"}),e.jsx(i.Text,{name:"email",label:"Email address"}),e.jsx(i.Phone,{name:"phoneNumber",label:"Phone number"}),e.jsx(i.Text,{name:"password",label:"Password",placeholder:"8+ characters",type:l.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(_,{position:"end",children:e.jsx(L,{onClick:l.onToggle,edge:"end",children:e.jsx(Q,{icon:l.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsxs(y,{spacing:1.5,children:[e.jsx(u,{variant:"subtitle2",children:"Avatar"}),e.jsx(Y,{value:p,onDrop:q,validator:t=>t.size>1e6?{code:"file-too-large",message:`File is larger than ${w(1e6)}`}:null,helperText:e.jsxs(u,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",w(3145728)]})})]})]}),e.jsx(v,{display:"flex",justifyContent:"flex-end",gap:2,mt:2,children:e.jsx(H,{type:"submit",variant:"contained",children:"Save Changes"})})]})})})},ae=({userAccount:a})=>e.jsxs(K,{children:[e.jsx($,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Settings",href:f.dashboard.tools.root},{name:"Account Settings"}],sx:{mb:{xs:3,md:5}}}),e.jsx(ee,{userAccount:a})]}),te={title:`Tools | Dashboard - ${G.site.name}`};function Ze(){const a=M({queryKey:["account-user"],queryFn:async()=>{const{data:n}=await h.get(x.auth.me);return n}});return a.isPending||a.isLoading?e.jsx(V,{}):a.isError?e.jsx(R,{route:f.dashboard.tools.root}):e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsxs("title",{children:[" ",te.title]})}),e.jsx(ae,{userAccount:a.data})]})}export{Ze as default};
