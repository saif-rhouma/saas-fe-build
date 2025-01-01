import{r as g,br as U,X as J,C as v,dp as X,dq as y,dn as S,dr as Z,bQ as W,j as t,cZ as N,S as f,T as h,B as p,a7 as k,e as M,dQ as R,p as L,dU as A,H as ee}from"./index-BrVky5Gg.js";import{u as re,E as te}from"./error-block-FcQeBxj7.js";import{C as se}from"./custom-breadcrumbs-BF1juKa-.js";import{z as n,u as ae,t as me,a as ne,F as i}from"./form-provider-IGnvse7Q.js";import{h as ie}from"./utils-lkMXEcUg.js";import{u as P}from"./useMutation-CE0P_ta-.js";import{f as O}from"./format-number-BYcftzxu.js";import{b as oe,U as le}from"./upload-avatar-DQ7Fanyq.js";import"./editor-DG5O80Yq.js";import{s as de}from"./schema-helper-DBRyPFKX.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./TextField-BzhmS018.js";import"./FormControl-DZf5wqQ9.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Dec_12dS.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-ChyBHZVN.js";import"./Select-6IXk9lW0.js";import"./Menu-DD-zT_J0.js";import"./InputBase-C8xLxBIT.js";import"./FormHelperText-DFhB8bFU.js";import"./Rating-Hlni2mlB.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-MS8qHiiX.js";import"./RadioGroup-D0Qu_fwA.js";import"./FormGroup-DxT7LmQ0.js";import"./FormControlLabel-0HOCsOrO.js";import"./index-Yn_vEU-0.js";import"./countries-DSLisFCy.js";import"./InputAdornment-DEzDbK1Q.js";import"./Autocomplete-CdBrZWYz.js";import"./Chip-DP4Tp82d.js";import"./country-select-BuZykQim.js";import"./Checkbox-CQHPQqdR.js";import"./DatePicker-B1JNPBiT.js";import"./DialogContent-Bneue424.js";import"./ListItem-CVfDDPgr.js";import"./MobileDateTimePicker-DDuapApM.js";import"./Tabs-BKfmXuvi.js";import"./KeyboardArrowRight-Bg2_dmW-.js";import"./image-C-59YYlQ.js";import"./index-rYiI9UdX.js";const ge=n.object({name:n.string().min(1,{message:"Staff First Name is required!"}),description:n.string(),email:n.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:de.phoneNumber({isValidPhoneNumber:ie}),currencySymbol:n.string().min(1,{message:"Staff Last Name is required!"}),taxPercentage:n.number().min(1,{message:"Staff Last Name is required!"}),country:n.string().min(1,{message:"Country is required!"}),state:n.string(),street:n.string(),city:n.string(),district:n.string(),zipCode:n.string(),taxNumber:n.number().optional(),printerPOS:n.string().min(1,{message:"Printer POS is required!"})}),xe=({applicationAccount:e,financial:C})=>{const d=g.useRef(e),{t:a}=U("setting"),[b,q]=g.useState(null),[j,D]=g.useState(null),E=J();g.useEffect(()=>{e&&(G(z),q(`${v.site.serverFileHost}${e.favicon}`),D(`${v.site.serverFileHost}${e.appLogo}`))},[e]);const z=g.useMemo(()=>{var s,m,o,l,x,u;const r={name:(e==null?void 0:e.name)||"",description:(e==null?void 0:e.description)||"",email:(e==null?void 0:e.email)||"",phoneNumber:(e==null?void 0:e.phoneNumber)||"",currencySymbol:(e==null?void 0:e.currencySymbol)||"",taxPercentage:(e==null?void 0:e.taxPercentage)||"",country:((s=e==null?void 0:e.address)==null?void 0:s.country)||"",state:((m=e==null?void 0:e.address)==null?void 0:m.state)||"",city:((o=e==null?void 0:e.address)==null?void 0:o.city)||"",district:((l=e==null?void 0:e.address)==null?void 0:l.district)||"",zipCode:((x=e==null?void 0:e.address)==null?void 0:x.zipCode)||"",street:((u=e==null?void 0:e.address)==null?void 0:u.street)||"",printerPOS:(e==null?void 0:e.printerPOS)||""};return(e==null?void 0:e.taxNumber)==null||(r.taxNumber=parseInt(e==null?void 0:e.taxNumber,10)),r},[e]),$=ae({resolver:me(ge),defaultValues:z}),{reset:G,watch:fe,setValue:ye,handleSubmit:H,control:Se,formState:{isSubmitting:be}}=$,Q=H(async r=>{try{if(r.city||r.country||r.district||r.state||r.street||r.zipCode){const{country:s,state:m,city:o,district:l,zipCode:x,street:u}=r;r.address={country:s,state:m,city:o,district:l,zipCode:x,street:u},delete r.city,delete r.country,delete r.district,delete r.state,delete r.street,delete r.zipCode}if(d.current={...r},b&&j){const s=new FormData;s.append("file",b),s.append("category","AppAvatar");const m=new FormData;m.append("file",j),m.append("category","AppLogo"),await c({avatar:s,logo:m})}else if(b){const s=new FormData;s.append("file",b),s.append("category","AppAvatar"),await Y(s)}else if(j){const s=new FormData;s.append("file",j),s.append("category","AppLogo"),await _(s)}else await T(r)}catch(s){console.error(s)}}),I=g.useCallback(r=>{const s=r[0];q(s)},[]),K=g.useCallback(r=>{const s=r[0];D(()=>s)},[]),V=()=>{D(null)},F={headers:{"content-type":"multipart/form-data"}},B=g.useCallback(r=>{const s=document.querySelector("link[rel~='icon']")||document.createElement("link");s.type="image/x-icon",s.rel="icon",s.href=r,document.getElementsByTagName("head")[0].appendChild(s)},[]),w=X(),{mutate:Y}=P({mutationFn:r=>y.post(S.files.upload,r,F),onSuccess:async({data:r})=>{const{name:s}=r;if(s){const{current:m}=d;m.favicon=s,B(`${v.site.serverFileHost}${s}`),await T(m)}return r},onSettled:async()=>{await w.invalidateQueries({queryKey:["appAvatar-images"]})},onError:r=>{console.log(r)}}),{mutate:_}=P({mutationFn:r=>y.post(S.files.upload,r,F),onSuccess:async({data:r})=>{const{name:s}=r;if(s){const{current:m}=d;m.appLogo=s,await T(m)}return r},onSettled:async()=>{await w.invalidateQueries({queryKey:["appAvatar-images"]})},onError:r=>{console.log(r)}}),{mutate:c}=P({mutationFn:async({avatar:r,logo:s})=>{const m=await y.post(S.files.upload,r,F),o=await y.post(S.files.upload,s,F);return{avatarRes:m,logoRes:o}},onSuccess:async({avatarRes:r,logoRes:s})=>{var x,u;const m=(x=r==null?void 0:r.data)==null?void 0:x.name,o=(u=s==null?void 0:s.data)==null?void 0:u.name,{current:l}=d;o&&(l.appLogo=o),m&&(l.favicon=m),B(`${v.site.serverFileHost}${m}`),await T(l)},onSettled:async()=>{await w.invalidateQueries({queryKey:["appAvatar-images"]})},onError:r=>{console.log(r)}}),{mutate:T}=P({mutationFn:r=>y.patch(S.master.edit,r),onSuccess:async({data:r})=>{var l;const{user:s,setState:m}=E;(l=s.userOwnedApps)!=null&&l.appLogo?s.userOwnedApps.appLogo=r.appLogo:s.applications.appLogo=r.appLogo,E.user={...s},m(E),Z.success("Master Account Has Been Modified!");const{currencySymbol:o}=d.current;localStorage.setItem(W,o)},onSettled:async()=>{await w.invalidateQueries({queryKey:["account-application"]})},onError:r=>{console.log(r)}});return t.jsxs(ne,{methods:$,onSubmit:Q,children:[t.jsx(N,{sx:{mb:4},children:t.jsxs(f,{spacing:2,sx:{p:3},children:[t.jsx(h,{variant:"h6",gutterBottom:!0,children:a("masterSetting.organizationDetails")}),t.jsxs(p,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[t.jsx(i.Text,{name:"name",label:a("masterSetting.organizationName")}),t.jsx(i.Phone,{name:"phoneNumber",label:a("masterSetting.phoneNumber")}),t.jsx(i.Text,{name:"email",label:a("masterSetting.email")}),t.jsx(i.Text,{name:"description",label:a("masterSetting.description")}),t.jsxs(f,{spacing:1.5,children:[t.jsx(h,{variant:"subtitle2",children:a("masterSetting.attachments")}),t.jsx(oe,{value:j,onDrop:K,onDelete:V})]}),t.jsxs(f,{spacing:1.5,children:[t.jsx(h,{variant:"subtitle2",children:a("masterSetting.favicon")}),t.jsx(le,{value:b,onDrop:I,validator:r=>r.size>1e6?{code:"file-too-large",message:`File is larger than ${O(1e6)}`}:null,helperText:t.jsxs(h,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",t.jsx("br",{})," max size of ",O(3145728)]})})]})]})]})}),t.jsx(N,{sx:{mb:4},children:t.jsxs(f,{spacing:2,sx:{p:3},children:[t.jsx(h,{variant:"h6",gutterBottom:!0,children:a("masterSetting.financeSetting")}),t.jsxs(p,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[t.jsx(i.Text,{name:"currencySymbol",label:a("masterSetting.currencySymbol")}),t.jsx(i.Text,{name:"taxPercentage",label:a("masterSetting.taxPercentage")})]})]})}),t.jsx(N,{sx:{mb:4},children:t.jsxs(f,{spacing:2,sx:{p:3},children:[t.jsx(h,{variant:"h6",gutterBottom:!0,children:a("masterSetting.firmAddress")}),t.jsxs(p,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[t.jsx(i.CountrySelect,{name:"country",label:a("masterSetting.country"),placeholder:a("masterSetting.country")}),t.jsx(i.Text,{name:"state",label:a("masterSetting.state")}),t.jsx(i.Text,{name:"city",label:a("masterSetting.city")}),t.jsx(i.Text,{name:"district",label:a("masterSetting.district")}),t.jsx(i.Text,{name:"zipCode",label:a("masterSetting.zipCode")}),t.jsx(i.Text,{name:"street",label:a("masterSetting.street")}),t.jsx(i.Text,{type:"number",name:"taxNumber",label:a("masterSetting.storeTaxNumber")})]})]})}),t.jsx(N,{sx:{mb:4},children:t.jsxs(f,{spacing:2,sx:{p:3},children:[t.jsx(h,{variant:"h6",gutterBottom:!0,children:a("masterSetting.otherSettings")}),t.jsx(p,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:t.jsxs(i.Select,{name:"printerPOS",label:a("masterSetting.printerPOS"),sx:{width:420,textTransform:"capitalize"},children:[t.jsx(k,{value:"A4",children:a("masterSetting.a4")}),t.jsx(k,{value:"Thermal",children:a("masterSetting.thermal")})]})})]})}),t.jsxs(p,{display:"flex",justifyContent:"flex-end",gap:2,mt:2,children:[t.jsx(M,{type:"submit",variant:"contained",children:a("masterSetting.saveChanges")}),t.jsx(M,{variant:"outlined",children:a("masterSetting.cancel")})]})]})},ue=({applicationAccount:e,financial:C})=>{const{t:d}=U("setting");return t.jsxs(R,{children:[t.jsx(se,{links:[{name:`${d("masterSetting.breadCrumbsPageRootTitle")}`,href:L.dashboard.root},{name:`${d("masterSetting.breadCrumbsParentPageTitle")}`,href:L.dashboard.tools.root},{name:`${d("masterSetting.breadCrumbsPageTitle")}`}],sx:{mb:{xs:3,md:5}}}),t.jsx(xe,{applicationAccount:e,financial:C})]})},he={title:`Tools | Dashboard - ${v.site.name}`};function lr(){const e=re({queryKey:["account-application"],queryFn:async()=>{const{data:C}=await y.get(S.auth.application);return C}});return e.isLoading?t.jsx(A,{}):e.isError?t.jsx(te,{route:L.dashboard.tools.root}):t.jsxs(t.Fragment,{children:[t.jsx(ee,{children:t.jsxs("title",{children:[" ",he.title]})}),t.jsx(ue,{applicationAccount:e.data})]})}export{lr as default};
