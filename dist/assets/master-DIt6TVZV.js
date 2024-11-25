import{r as d,C as v,dn as Y,dp as u,dm as y,dq as _,cy as J,j as s,cY as T,S as h,T as g,B as S,aS as L,e as M,dP as Z,p as N,dT as W,H as X}from"./index-CSsjSOSC.js";import{u as R,E as c}from"./error-block-CSkWkatt.js";import{C as A}from"./custom-breadcrumbs-BtGY489d.js";import{z as m,u as ee,t as re,a as se,F as n}from"./form-provider-RuHYmeCy.js";import{h as te}from"./utils-DfB3ukDY.js";import{u as D}from"./useMutation-YcdpOWmR.js";import{f as O}from"./format-number-BF7CDfp8.js";import{b as ae,U as me}from"./upload-avatar-CaO-d8UW.js";import"./editor-DkTmHMBN.js";import{s as ne}from"./schema-helper-9F4NFULp.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./TextField-CXJ43qVc.js";import"./FormControl-Mrjg3Hrg.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-C1PS2W-Z.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-D76jktbc.js";import"./Select-S0DO28Vw.js";import"./Menu-DcPksF2q.js";import"./InputBase-C3VMpfvF.js";import"./FormHelperText-3AG-WguW.js";import"./Rating-CFvzjRIc.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-DsRDjN-7.js";import"./RadioGroup-BveFsUJx.js";import"./FormGroup-BnPXu43B.js";import"./FormControlLabel-mE7Ixr_k.js";import"./index-CNxr2gWj.js";import"./countries-DSLisFCy.js";import"./InputAdornment-C9j2zz_S.js";import"./Autocomplete-BMaQQCmK.js";import"./Chip-jDUxKRTF.js";import"./country-select-DdxRCnLY.js";import"./Checkbox-DHIrMODH.js";import"./DatePicker-szqtGyiO.js";import"./DialogContent-7kOqCf2V.js";import"./ListItem-yyOwr0Wj.js";import"./MobileDateTimePicker-C6_fzLo-.js";import"./Tabs-CE1nZKJE.js";import"./KeyboardArrowRight-CZr18QH0.js";import"./image-1sagoi-E.js";import"./index-DYmHzB12.js";const ie=m.object({name:m.string().min(1,{message:"Staff First Name is required!"}),description:m.string(),email:m.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:ne.phoneNumber({isValidPhoneNumber:te}),currencySymbol:m.string().min(1,{message:"Staff Last Name is required!"}),taxPercentage:m.number().min(1,{message:"Staff Last Name is required!"}),country:m.string().min(1,{message:"Country is required!"}),state:m.string(),street:m.string(),city:m.string(),district:m.string(),zipCode:m.string(),taxNumber:m.number().optional(),printerPOS:m.string().min(1,{message:"Printer POS is required!"})}),oe=({applicationAccount:e,financial:p})=>{const f=d.useRef(e),[b,P]=d.useState(null),[j,E]=d.useState(null);d.useEffect(()=>{e&&(k(q),P(`${v.site.serverFileHost}${e.favicon}`),E(`${v.site.serverFileHost}${e.appLogo}`))},[e]);const q=d.useMemo(()=>{var t,a,i,o,l,x;const r={name:(e==null?void 0:e.name)||"",description:(e==null?void 0:e.description)||"",email:(e==null?void 0:e.email)||"",phoneNumber:(e==null?void 0:e.phoneNumber)||"",currencySymbol:(e==null?void 0:e.currencySymbol)||"",taxPercentage:(e==null?void 0:e.taxPercentage)||"",country:((t=e==null?void 0:e.address)==null?void 0:t.country)||"",state:((a=e==null?void 0:e.address)==null?void 0:a.state)||"",city:((i=e==null?void 0:e.address)==null?void 0:i.city)||"",district:((o=e==null?void 0:e.address)==null?void 0:o.district)||"",zipCode:((l=e==null?void 0:e.address)==null?void 0:l.zipCode)||"",street:((x=e==null?void 0:e.address)==null?void 0:x.street)||"",printerPOS:(e==null?void 0:e.printerPOS)||""};return(e==null?void 0:e.taxNumber)==null||(r.taxNumber=parseInt(e==null?void 0:e.taxNumber,10)),r},[e]),z=ee({resolver:re(ie),defaultValues:q}),{reset:k,watch:xe,setValue:ge,handleSubmit:$,control:he,formState:{isSubmitting:ue}}=z,G=$(async r=>{try{if(r.city||r.country||r.district||r.state||r.street||r.zipCode){const{country:t,state:a,city:i,district:o,zipCode:l,street:x}=r;r.address={country:t,state:a,city:i,district:o,zipCode:l,street:x},delete r.city,delete r.country,delete r.district,delete r.state,delete r.street,delete r.zipCode}if(f.current={...r},b&&j){const t=new FormData;t.append("file",b),t.append("category","AppAvatar");const a=new FormData;a.append("file",j),a.append("category","AppLogo"),await V({avatar:t,logo:a})}else if(b){const t=new FormData;t.append("file",b),t.append("category","AppAvatar"),await K(t)}else if(j){const t=new FormData;t.append("file",j),t.append("category","AppLogo"),await Q(t)}else await w(r)}catch(t){console.error(t)}}),U=d.useCallback(r=>{const t=r[0];P(t)},[]),H=d.useCallback(r=>{const t=r[0];E(()=>t)},[]),I=()=>{E(null)},F={headers:{"content-type":"multipart/form-data"}},B=d.useCallback(r=>{const t=document.querySelector("link[rel~='icon']")||document.createElement("link");t.type="image/x-icon",t.rel="icon",t.href=r,document.getElementsByTagName("head")[0].appendChild(t)},[]),C=Y(),{mutate:K}=D({mutationFn:r=>u.post(y.files.upload,r,F),onSuccess:async({data:r})=>{const{name:t}=r;if(t){const{current:a}=f;a.favicon=t,B(`${v.site.serverFileHost}${t}`),await w(a)}return r},onSettled:async()=>{await C.invalidateQueries({queryKey:["appAvatar-images"]})},onError:r=>{console.log(r)}}),{mutate:Q}=D({mutationFn:r=>u.post(y.files.upload,r,F),onSuccess:async({data:r})=>{const{name:t}=r;if(t){const{current:a}=f;a.appLogo=t,await w(a)}return r},onSettled:async()=>{await C.invalidateQueries({queryKey:["appAvatar-images"]})},onError:r=>{console.log(r)}}),{mutate:V}=D({mutationFn:async({avatar:r,logo:t})=>{const a=await u.post(y.files.upload,r,F),i=await u.post(y.files.upload,t,F);return{avatarRes:a,logoRes:i}},onSuccess:async({avatarRes:r,logoRes:t})=>{var l,x;const a=(l=r==null?void 0:r.data)==null?void 0:l.name,i=(x=t==null?void 0:t.data)==null?void 0:x.name,{current:o}=f;i&&(o.appLogo=i),a&&(o.favicon=a),B(`${v.site.serverFileHost}${a}`),await w(o)},onSettled:async()=>{await C.invalidateQueries({queryKey:["appAvatar-images"]})},onError:r=>{console.log(r)}}),{mutate:w}=D({mutationFn:r=>u.patch(y.master.edit,r),onSuccess:async()=>{_.success("Master Account Has Been Modified!");const{currencySymbol:r}=f.current;localStorage.setItem(J,r)},onSettled:async()=>{await C.invalidateQueries({queryKey:["account-application"]})},onError:r=>{console.log(r)}});return s.jsxs(se,{methods:z,onSubmit:G,children:[s.jsx(T,{sx:{mb:4},children:s.jsxs(h,{spacing:2,sx:{p:3},children:[s.jsx(g,{variant:"h6",gutterBottom:!0,children:"Organization Details"}),s.jsxs(S,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[s.jsx(n.Text,{name:"name",label:"Organization Name"}),s.jsx(n.Phone,{name:"phoneNumber",label:"Phone number"}),s.jsx(n.Text,{name:"email",label:"Email address"}),s.jsx(n.Text,{name:"description",label:"Description"}),s.jsxs(h,{spacing:1.5,children:[s.jsx(g,{variant:"subtitle2",children:"Attachments"}),s.jsx(ae,{value:j,onDrop:H,onDelete:I})]}),s.jsxs(h,{spacing:1.5,children:[s.jsx(g,{variant:"subtitle2",children:"Favicon"}),s.jsx(me,{value:b,onDrop:U,validator:r=>r.size>1e6?{code:"file-too-large",message:`File is larger than ${O(1e6)}`}:null,helperText:s.jsxs(g,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",s.jsx("br",{})," max size of ",O(3145728)]})})]})]})]})}),s.jsx(T,{sx:{mb:4},children:s.jsxs(h,{spacing:2,sx:{p:3},children:[s.jsx(g,{variant:"h6",gutterBottom:!0,children:"Finance Setting"}),s.jsxs(S,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[s.jsx(n.Text,{name:"currencySymbol",label:"Currency Symbol"}),s.jsx(n.Text,{name:"taxPercentage",label:"Tax Percentage"})]})]})}),s.jsx(T,{sx:{mb:4},children:s.jsxs(h,{spacing:2,sx:{p:3},children:[s.jsx(g,{variant:"h6",gutterBottom:!0,children:"Firm Address"}),s.jsxs(S,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[s.jsx(n.CountrySelect,{name:"country",label:"Country",placeholder:"Choose a country"}),s.jsx(n.Text,{name:"state",label:"State/region"}),s.jsx(n.Text,{name:"city",label:"City"}),s.jsx(n.Text,{name:"district",label:"District"}),s.jsx(n.Text,{name:"zipCode",label:"Zip/code"}),s.jsx(n.Text,{name:"street",label:"Address"}),s.jsx(n.Text,{type:"number",name:"taxNumber",label:"Store Tax Number"})]})]})}),s.jsx(T,{sx:{mb:4},children:s.jsxs(h,{spacing:2,sx:{p:3},children:[s.jsx(g,{variant:"h6",gutterBottom:!0,children:"Other Settings"}),s.jsx(S,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:s.jsxs(n.Select,{name:"printerPOS",label:"Printer POS",sx:{width:420,textTransform:"capitalize"},children:[s.jsx(L,{value:"A4",children:"A4"}),s.jsx(L,{value:"Thermal",children:"Thermal"})]})})]})}),s.jsxs(S,{display:"flex",justifyContent:"flex-end",gap:2,mt:2,children:[s.jsx(M,{type:"submit",variant:"contained",children:"Save Changes"}),s.jsx(M,{variant:"outlined",children:"Cancel"})]})]})},de=({applicationAccount:e,financial:p})=>s.jsxs(Z,{children:[s.jsx(A,{links:[{name:"Dashboard",href:N.dashboard.root},{name:"Settings",href:N.dashboard.tools.root},{name:"Master Settings"}],sx:{mb:{xs:3,md:5}}}),s.jsx(oe,{applicationAccount:e,financial:p})]}),le={title:`Tools | Dashboard - ${v.site.name}`};function mr(){const e=R({queryKey:["account-application"],queryFn:async()=>{const{data:p}=await u.get(y.auth.application);return p}});return e.isLoading?s.jsx(W,{}):e.isError?s.jsx(c,{route:N.dashboard.tools.root}):s.jsxs(s.Fragment,{children:[s.jsx(X,{children:s.jsxs("title",{children:[" ",le.title]})}),s.jsx(de,{applicationAccount:e.data})]})}export{mr as default};
