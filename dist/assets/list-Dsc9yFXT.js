import{r,i as q,h as I,dw as D,dx as h,b5 as x,dy as k,j as e,aB as U,S as y,T as u,B as v,l as Q,I as H,e as K,dP as L,p as f,dT as V,H as z,C as G}from"./index-DT04UR_O.js";import{u as M,E as R}from"./error-block-BoCOKljz.js";import{C as $}from"./custom-breadcrumbs-DhAwakkx.js";import{z as o,u as J,t as O,a as W,F as i}from"./form-provider-B7hZ-ssH.js";import{h as X}from"./utils-CuXi_5LX.js";import{u as w}from"./useMutation-BAtwb5WR.js";import{c as S}from"./format-number-Bl4e0oau.js";import{U as Y}from"./upload-avatar-DKfjcflR.js";import"./editor-ovNaHRWQ.js";import{s as Z}from"./schema-helper-CV7wxzWO.js";import{I as _}from"./InputAdornment-Df-7KMx3.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./TextField-BjQsoMIa.js";import"./FormControl-CW9RfL9F.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Dlp26u7k.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-D5kKRx-M.js";import"./Select-C_-xEl5F.js";import"./Menu-BPDpcHu6.js";import"./InputBase-BM5GWnYp.js";import"./FormHelperText-DdVZ689Y.js";import"./Rating-yEv_VYnC.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-C2cpfGcN.js";import"./RadioGroup-DtRipWnf.js";import"./FormGroup-BSMNbJJJ.js";import"./FormControlLabel-CvWNVptb.js";import"./index-aTkpnRqN.js";import"./countries-DSLisFCy.js";import"./Autocomplete-Btx_vR5S.js";import"./Chip-QNIqa7VZ.js";import"./country-select-DDYiN-2v.js";import"./Checkbox-BU7EYPXc.js";import"./DatePicker-B3mVQQbR.js";import"./DialogContent-D3trKXnB.js";import"./ListItem-DytXkWka.js";import"./MobileDateTimePicker-BEdQjBBa.js";import"./Tabs-V8wu0P1d.js";import"./KeyboardArrowRight-DI6e2iIr.js";import"./image-BC3--aR2.js";import"./index-DFqQWiXf.js";const A=o.object({firstName:o.string().min(1,{message:"Staff First Name is required!"}),lastName:o.string(),password:o.string().min(1,{message:"Password is required!"}).min(8,{message:"Password must be at least 8 characters!"}),email:o.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:Z.phoneNumber({isValidPhoneNumber:X})}),ee=({userAccount:a})=>{const n=r.useRef(a),l=q(),d=I(),[p,N]=r.useState(null),g=r.useMemo(()=>({firstName:(a==null?void 0:a.firstName)||"",lastName:(a==null?void 0:a.lastName)||"",email:(a==null?void 0:a.email)||"",password:"",phoneNumber:(a==null?void 0:a.phoneNumber)||""}),[a]),b=J({resolver:O(A),defaultValues:g}),{reset:F,watch:se,setValue:re,handleSubmit:C,control:oe,formState:{isSubmitting:ie}}=b,E=C(async t=>{try{if(p){n.current={...t};const s=new FormData;s.append("file",p),s.append("category","Avatar"),await B(s)}else await j(t)}catch(s){console.error(s)}});r.useEffect(()=>{a&&F(g)},[a]);const P=r.useCallback(t=>{const s=t[0];N(s)},[]),T={headers:{"content-type":"multipart/form-data"}},c=D(),{mutate:B}=w({mutationFn:t=>h.post(x.files.upload,t,T),onSuccess:async({data:t})=>{const{name:s}=t;if(s){const{current:m}=n;m.avatar=s,await j(m)}return t},onSettled:async()=>{await c.invalidateQueries({queryKey:["avatar-images"]}),await c.invalidateQueries({queryKey:["account-user"]})},onError:t=>{console.log(t)}}),{mutate:j}=w({mutationFn:t=>h.patch(x.account.edit,t),onSuccess:async({data:t})=>{const{user:s,setState:m}=d;d.user={...s,...t},m(d),k.success("Account Has Been Modified!")},onSettled:async()=>{await c.invalidateQueries({queryKey:["account-user"]})},onError:t=>{console.log(t)}});return e.jsx(U,{sx:{mb:4},children:e.jsx(W,{methods:b,onSubmit:E,children:e.jsxs(y,{spacing:4,sx:{p:3},children:[e.jsx(u,{variant:"h6",gutterBottom:!0,children:"Account Setting"}),e.jsxs(v,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(i.Text,{name:"firstName",label:"First Name"}),e.jsx(i.Text,{name:"lastName",label:"Last Name"}),e.jsx(i.Text,{name:"email",label:"Email address"}),e.jsx(i.Phone,{name:"phoneNumber",label:"Phone number"}),e.jsx(i.Text,{name:"password",label:"Password",placeholder:"8+ characters",type:l.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(_,{position:"end",children:e.jsx(Q,{onClick:l.onToggle,edge:"end",children:e.jsx(H,{icon:l.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsxs(y,{spacing:1.5,children:[e.jsx(u,{variant:"subtitle2",children:"Avatar"}),e.jsx(Y,{value:p,onDrop:P,validator:t=>t.size>1e6?{code:"file-too-large",message:`File is larger than ${S(1e6)}`}:null,helperText:e.jsxs(u,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",S(3145728)]})})]})]}),e.jsx(v,{display:"flex",justifyContent:"flex-end",gap:2,mt:2,children:e.jsx(K,{type:"submit",variant:"contained",children:"Save Changes"})})]})})})},ae=({userAccount:a})=>e.jsxs(L,{children:[e.jsx($,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Settings",href:f.dashboard.tools.root},{name:"Account Settings"}],sx:{mb:{xs:3,md:5}}}),e.jsx(ee,{userAccount:a})]}),te={title:`Tools | Dashboard - ${G.site.name}`};function Ze(){const a=M({queryKey:["account-user"],queryFn:async()=>{const{data:n}=await h.get(x.auth.me);return n}});return a.isPending||a.isLoading?e.jsx(V,{}):a.isError?e.jsx(R,{route:f.dashboard.tools.root}):e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsxs("title",{children:[" ",te.title]})}),e.jsx(ae,{userAccount:a.data})]})}export{Ze as default};