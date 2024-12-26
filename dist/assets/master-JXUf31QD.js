import{r as d,h as _,C as S,dn as J,dp as h,dm as f,dq as Z,cw as W,j as s,cY as T,S as u,T as g,B as p,aQ as B,e as M,dQ as X,p as L,dU as R,H as c}from"./index-dT1vCng0.js";import{u as A,E as ee}from"./error-block-Da0Sg8G5.js";import{C as re}from"./custom-breadcrumbs-CRMkz5HZ.js";import{z as m,u as se,t as te,a as ae,F as n}from"./form-provider-lJ9M1TmS.js";import{h as me}from"./utils-CF8aKOPG.js";import{u as D}from"./useMutation-CWpoQFoP.js";import{f as k}from"./format-number-BWe4ZO1J.js";import{b as ne,U as ie}from"./upload-avatar-aWcNkY5n.js";import"./editor-BHWTYWlb.js";import{s as oe}from"./schema-helper-CRkdcp3L.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./TextField-XTE0wU-C.js";import"./FormControl-DbqD7KBb.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-3tUFrxKx.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-D0giXt1x.js";import"./Select-CkxH8YCA.js";import"./Menu-_pIQorIt.js";import"./InputBase-J8z2d7JP.js";import"./FormHelperText-DdVHoqO8.js";import"./Rating-CeJLvm_i.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-pdxX5wdw.js";import"./RadioGroup-Cquvp2lY.js";import"./FormGroup-BBfDXbM-.js";import"./FormControlLabel-DqXVaC7r.js";import"./index-DT43InuW.js";import"./countries-DSLisFCy.js";import"./InputAdornment-Dl5rVrZF.js";import"./Autocomplete-3iL3_8Zy.js";import"./Chip-CVwc7X4-.js";import"./country-select-BTNmN6iG.js";import"./Checkbox-BALPzs0u.js";import"./DatePicker-DHryTCEu.js";import"./DialogContent-Dtys1wsH.js";import"./ListItem-DSSWjBOG.js";import"./MobileDateTimePicker-CSHu2owW.js";import"./Tabs-DaQ35HSw.js";import"./KeyboardArrowRight-DDU4Yld7.js";import"./image-COOiVMf9.js";import"./index-DbS0wgbX.js";const de=m.object({name:m.string().min(1,{message:"Staff First Name is required!"}),description:m.string(),email:m.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:oe.phoneNumber({isValidPhoneNumber:me}),currencySymbol:m.string().min(1,{message:"Staff Last Name is required!"}),taxPercentage:m.number().min(1,{message:"Staff Last Name is required!"}),country:m.string().min(1,{message:"Country is required!"}),state:m.string(),street:m.string(),city:m.string(),district:m.string(),zipCode:m.string(),taxNumber:m.number().optional(),printerPOS:m.string().min(1,{message:"Printer POS is required!"})}),le=({applicationAccount:e,financial:v})=>{const y=d.useRef(e),[b,P]=d.useState(null),[j,E]=d.useState(null),N=_();d.useEffect(()=>{e&&(U(q),P(`${S.site.serverFileHost}${e.favicon}`),E(`${S.site.serverFileHost}${e.appLogo}`))},[e]);const q=d.useMemo(()=>{var t,a,i,o,l,x;const r={name:(e==null?void 0:e.name)||"",description:(e==null?void 0:e.description)||"",email:(e==null?void 0:e.email)||"",phoneNumber:(e==null?void 0:e.phoneNumber)||"",currencySymbol:(e==null?void 0:e.currencySymbol)||"",taxPercentage:(e==null?void 0:e.taxPercentage)||"",country:((t=e==null?void 0:e.address)==null?void 0:t.country)||"",state:((a=e==null?void 0:e.address)==null?void 0:a.state)||"",city:((i=e==null?void 0:e.address)==null?void 0:i.city)||"",district:((o=e==null?void 0:e.address)==null?void 0:o.district)||"",zipCode:((l=e==null?void 0:e.address)==null?void 0:l.zipCode)||"",street:((x=e==null?void 0:e.address)==null?void 0:x.street)||"",printerPOS:(e==null?void 0:e.printerPOS)||""};return(e==null?void 0:e.taxNumber)==null||(r.taxNumber=parseInt(e==null?void 0:e.taxNumber,10)),r},[e]),z=se({resolver:te(de),defaultValues:q}),{reset:U,watch:ue,setValue:he,handleSubmit:$,control:fe,formState:{isSubmitting:ye}}=z,G=$(async r=>{try{if(r.city||r.country||r.district||r.state||r.street||r.zipCode){const{country:t,state:a,city:i,district:o,zipCode:l,street:x}=r;r.address={country:t,state:a,city:i,district:o,zipCode:l,street:x},delete r.city,delete r.country,delete r.district,delete r.state,delete r.street,delete r.zipCode}if(y.current={...r},b&&j){const t=new FormData;t.append("file",b),t.append("category","AppAvatar");const a=new FormData;a.append("file",j),a.append("category","AppLogo"),await Y({avatar:t,logo:a})}else if(b){const t=new FormData;t.append("file",b),t.append("category","AppAvatar"),await K(t)}else if(j){const t=new FormData;t.append("file",j),t.append("category","AppLogo"),await V(t)}else await w(r)}catch(t){console.error(t)}}),H=d.useCallback(r=>{const t=r[0];P(t)},[]),Q=d.useCallback(r=>{const t=r[0];E(()=>t)},[]),I=()=>{E(null)},C={headers:{"content-type":"multipart/form-data"}},O=d.useCallback(r=>{const t=document.querySelector("link[rel~='icon']")||document.createElement("link");t.type="image/x-icon",t.rel="icon",t.href=r,document.getElementsByTagName("head")[0].appendChild(t)},[]),F=J(),{mutate:K}=D({mutationFn:r=>h.post(f.files.upload,r,C),onSuccess:async({data:r})=>{const{name:t}=r;if(t){const{current:a}=y;a.favicon=t,O(`${S.site.serverFileHost}${t}`),await w(a)}return r},onSettled:async()=>{await F.invalidateQueries({queryKey:["appAvatar-images"]})},onError:r=>{console.log(r)}}),{mutate:V}=D({mutationFn:r=>h.post(f.files.upload,r,C),onSuccess:async({data:r})=>{const{name:t}=r;if(t){const{current:a}=y;a.appLogo=t,await w(a)}return r},onSettled:async()=>{await F.invalidateQueries({queryKey:["appAvatar-images"]})},onError:r=>{console.log(r)}}),{mutate:Y}=D({mutationFn:async({avatar:r,logo:t})=>{const a=await h.post(f.files.upload,r,C),i=await h.post(f.files.upload,t,C);return{avatarRes:a,logoRes:i}},onSuccess:async({avatarRes:r,logoRes:t})=>{var l,x;const a=(l=r==null?void 0:r.data)==null?void 0:l.name,i=(x=t==null?void 0:t.data)==null?void 0:x.name,{current:o}=y;i&&(o.appLogo=i),a&&(o.favicon=a),O(`${S.site.serverFileHost}${a}`),await w(o)},onSettled:async()=>{await F.invalidateQueries({queryKey:["appAvatar-images"]})},onError:r=>{console.log(r)}}),{mutate:w}=D({mutationFn:r=>h.patch(f.master.edit,r),onSuccess:async({data:r})=>{var o;const{user:t,setState:a}=N;(o=t.userOwnedApps)!=null&&o.appLogo?t.userOwnedApps.appLogo=r.appLogo:t.applications.appLogo=r.appLogo,N.user={...t},a(N),Z.success("Master Account Has Been Modified!");const{currencySymbol:i}=y.current;localStorage.setItem(W,i)},onSettled:async()=>{await F.invalidateQueries({queryKey:["account-application"]})},onError:r=>{console.log(r)}});return s.jsxs(ae,{methods:z,onSubmit:G,children:[s.jsx(T,{sx:{mb:4},children:s.jsxs(u,{spacing:2,sx:{p:3},children:[s.jsx(g,{variant:"h6",gutterBottom:!0,children:"Organization Details"}),s.jsxs(p,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[s.jsx(n.Text,{name:"name",label:"Organization Name"}),s.jsx(n.Phone,{name:"phoneNumber",label:"Phone number"}),s.jsx(n.Text,{name:"email",label:"Email address"}),s.jsx(n.Text,{name:"description",label:"Description"}),s.jsxs(u,{spacing:1.5,children:[s.jsx(g,{variant:"subtitle2",children:"Attachments"}),s.jsx(ne,{value:j,onDrop:Q,onDelete:I})]}),s.jsxs(u,{spacing:1.5,children:[s.jsx(g,{variant:"subtitle2",children:"Favicon"}),s.jsx(ie,{value:b,onDrop:H,validator:r=>r.size>1e6?{code:"file-too-large",message:`File is larger than ${k(1e6)}`}:null,helperText:s.jsxs(g,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",s.jsx("br",{})," max size of ",k(3145728)]})})]})]})]})}),s.jsx(T,{sx:{mb:4},children:s.jsxs(u,{spacing:2,sx:{p:3},children:[s.jsx(g,{variant:"h6",gutterBottom:!0,children:"Finance Setting"}),s.jsxs(p,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[s.jsx(n.Text,{name:"currencySymbol",label:"Currency Symbol"}),s.jsx(n.Text,{name:"taxPercentage",label:"Tax Percentage"})]})]})}),s.jsx(T,{sx:{mb:4},children:s.jsxs(u,{spacing:2,sx:{p:3},children:[s.jsx(g,{variant:"h6",gutterBottom:!0,children:"Firm Address"}),s.jsxs(p,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[s.jsx(n.CountrySelect,{name:"country",label:"Country",placeholder:"Choose a country"}),s.jsx(n.Text,{name:"state",label:"State/region"}),s.jsx(n.Text,{name:"city",label:"City"}),s.jsx(n.Text,{name:"district",label:"District"}),s.jsx(n.Text,{name:"zipCode",label:"Zip/code"}),s.jsx(n.Text,{name:"street",label:"Address"}),s.jsx(n.Text,{type:"number",name:"taxNumber",label:"Store Tax Number"})]})]})}),s.jsx(T,{sx:{mb:4},children:s.jsxs(u,{spacing:2,sx:{p:3},children:[s.jsx(g,{variant:"h6",gutterBottom:!0,children:"Other Settings"}),s.jsx(p,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:s.jsxs(n.Select,{name:"printerPOS",label:"Printer POS",sx:{width:420,textTransform:"capitalize"},children:[s.jsx(B,{value:"A4",children:"A4"}),s.jsx(B,{value:"Thermal",children:"Thermal"})]})})]})}),s.jsxs(p,{display:"flex",justifyContent:"flex-end",gap:2,mt:2,children:[s.jsx(M,{type:"submit",variant:"contained",children:"Save Changes"}),s.jsx(M,{variant:"outlined",children:"Cancel"})]})]})},xe=({applicationAccount:e,financial:v})=>s.jsxs(X,{children:[s.jsx(re,{links:[{name:"Dashboard",href:L.dashboard.root},{name:"Settings",href:L.dashboard.tools.root},{name:"Master Settings"}],sx:{mb:{xs:3,md:5}}}),s.jsx(le,{applicationAccount:e,financial:v})]}),ge={title:`Tools | Dashboard - ${S.site.name}`};function ir(){const e=A({queryKey:["account-application"],queryFn:async()=>{const{data:v}=await h.get(f.auth.application);return v}});return e.isLoading?s.jsx(R,{}):e.isError?s.jsx(ee,{route:L.dashboard.tools.root}):s.jsxs(s.Fragment,{children:[s.jsx(c,{children:s.jsxs("title",{children:[" ",ge.title]})}),s.jsx(xe,{applicationAccount:e.data})]})}export{ir as default};
