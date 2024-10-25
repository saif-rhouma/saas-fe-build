import{r,i as B,h as I,dm as D,dn as h,dl as x,dp as k,j as e,aB as U,S as y,T as u,B as v,l as L,I as Q,e as H,dP as K,p as f,dT as V,H as z,C as G}from"./index-Blkmi4zg.js";import{u as M,E as R}from"./error-block-j3VOggr8.js";import{C as $}from"./custom-breadcrumbs-hNvYebPU.js";import{z as o,c as J,u as O,t as W,a as X,F as i}from"./form-provider-owZ2kEHF.js";import{u as S}from"./useMutation-Bh-jDPxS.js";import{a as w}from"./format-number-BYLJRdzc.js";import{U as Y}from"./upload-avatar-BuX8Fchp.js";import"./editor-BxtnehiU.js";import{s as Z}from"./schema-helper-BCfbLzUS.js";import{I as _}from"./InputAdornment-Mhf8ESbr.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./TextField-ClHFnGLS.js";import"./FormControl-Cq1ehgrJ.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BBPKF53u.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-sbLiSHbj.js";import"./Select-Dsko4AZ7.js";import"./Menu-Cys168vL.js";import"./InputBase-DaiJVK9f.js";import"./FormHelperText-qaIx3Z7I.js";import"./Rating-IVw0kTDT.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-Cono4Ve3.js";import"./RadioGroup-BaohzFKD.js";import"./FormGroup-BUVtViRU.js";import"./FormControlLabel-DoRBZL9Z.js";import"./index-D3feOP7M.js";import"./countries-DSLisFCy.js";import"./Autocomplete-DdcCaF2t.js";import"./Chip-CzDIV7yE.js";import"./country-select-Bz07kSFC.js";import"./Checkbox-frxSvImW.js";import"./DatePicker-DwlNsJux.js";import"./DialogContent-C-Pa2r_f.js";import"./ListItem-ByhCeQFz.js";import"./MobileDateTimePicker-B-a11usE.js";import"./Tabs-DZR5NL1S.js";import"./KeyboardArrowRight-D6gv1H8C.js";import"./image-ukjJK6Il.js";import"./index-Cx5UcevL.js";const A=o.object({firstName:o.string().min(1,{message:"Staff First Name is required!"}),lastName:o.string().min(1,{message:"Staff Last Name is required!"}),password:o.string().min(1,{message:"Password is required!"}).min(8,{message:"Password must be at least 8 characters!"}),email:o.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:Z.phoneNumber({isValidPhoneNumber:J})}),ee=({userAccount:a})=>{const n=r.useRef(a),l=B(),d=I(),[p,N]=r.useState(null),g=r.useMemo(()=>({firstName:(a==null?void 0:a.firstName)||"",lastName:(a==null?void 0:a.lastName)||"",email:(a==null?void 0:a.email)||"",password:"",phoneNumber:(a==null?void 0:a.phoneNumber)||""}),[a]),b=O({resolver:W(A),defaultValues:g}),{reset:F,watch:se,setValue:re,handleSubmit:C,control:oe,formState:{isSubmitting:ie}}=b,E=C(async t=>{try{if(p){n.current={...t};const s=new FormData;s.append("file",p),s.append("category","Avatar"),await q(s)}else await j(t)}catch(s){console.error(s)}});r.useEffect(()=>{a&&F(g)},[a]);const P=r.useCallback(t=>{const s=t[0];N(s)},[]),T={headers:{"content-type":"multipart/form-data"}},c=D(),{mutate:q}=S({mutationFn:t=>h.post(x.files.upload,t,T),onSuccess:async({data:t})=>{const{name:s}=t;if(s){const{current:m}=n;m.avatar=s,await j(m)}return t},onSettled:async()=>{await c.invalidateQueries({queryKey:["avatar-images"]}),await c.invalidateQueries({queryKey:["account-user"]})},onError:t=>{console.log(t)}}),{mutate:j}=S({mutationFn:t=>h.patch(x.account.edit,t),onSuccess:async({data:t})=>{const{user:s,setState:m}=d;d.user={...s,...t},m(d),k.success("Account Has Been Modified!")},onSettled:async()=>{await c.invalidateQueries({queryKey:["account-user"]})},onError:t=>{console.log(t)}});return e.jsx(U,{sx:{mb:4},children:e.jsx(X,{methods:b,onSubmit:E,children:e.jsxs(y,{spacing:4,sx:{p:3},children:[e.jsx(u,{variant:"h6",gutterBottom:!0,children:"Account Setting"}),e.jsxs(v,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(i.Text,{name:"firstName",label:"First Name"}),e.jsx(i.Text,{name:"lastName",label:"Last Name"}),e.jsx(i.Text,{name:"email",label:"Email address"}),e.jsx(i.Phone,{name:"phoneNumber",label:"Phone number"}),e.jsx(i.Text,{name:"password",label:"Password",placeholder:"8+ characters",type:l.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(_,{position:"end",children:e.jsx(L,{onClick:l.onToggle,edge:"end",children:e.jsx(Q,{icon:l.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsxs(y,{spacing:1.5,children:[e.jsx(u,{variant:"subtitle2",children:"Avatar"}),e.jsx(Y,{value:p,onDrop:P,validator:t=>t.size>1e6?{code:"file-too-large",message:`File is larger than ${w(1e6)}`}:null,helperText:e.jsxs(u,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",w(3145728)]})})]})]}),e.jsx(v,{display:"flex",justifyContent:"flex-end",gap:2,mt:2,children:e.jsx(H,{type:"submit",variant:"contained",children:"Save Changes"})})]})})})},ae=({userAccount:a})=>e.jsxs(K,{children:[e.jsx($,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Settings",href:f.dashboard.tools.root},{name:"Account Settings"}],sx:{mb:{xs:3,md:5}}}),e.jsx(ee,{userAccount:a})]}),te={title:`Tools | Dashboard - ${G.site.name}`};function Ye(){const a=M({queryKey:["account-user"],queryFn:async()=>{const{data:n}=await h.get(x.auth.me);return n}});return a.isPending||a.isLoading?e.jsx(V,{}):a.isError?e.jsx(R,{route:f.dashboard.tools.root}):e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsxs("title",{children:[" ",te.title]})}),e.jsx(ae,{userAccount:a.data})]})}export{Ye as default};
