import{r as x,dI as Y,dJ as u,dH as y,dK as V,d7 as J,j as e,aD as C,S as h,T as g,B as S,bR as z,e as B,e8 as _,p as D,ec as $,H as Z,C as W}from"./index-CwDFRBrV.js";import{u as M,E as X}from"./error-block-po56rbru.js";import{C as R}from"./custom-breadcrumbs-tdSVNm9k.js";import{z as m,c,u as A,t as ee,a as re,F as n}from"./form-provider-C8IltM3z.js";import{u as T}from"./useMutation-CkTHNDXi.js";import{a as O}from"./format-number-Ch538jHW.js";import{b as se,U as te}from"./upload-avatar-Bqr4alq-.js";import"./editor-eNq_8vRL.js";import{s as ae}from"./schema-helper-DaL9n66F.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./TextField-CHPZUTqF.js";import"./FormControl-yMCQcYEm.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CKyW86qE.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-BavGwz4i.js";import"./Select-C_u8K-J_.js";import"./Menu-B_jyagBS.js";import"./InputBase-Bn2YUrmy.js";import"./FormHelperText-Bj0ulyme.js";import"./Rating-C4JeVFy2.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-Brhk4K8C.js";import"./RadioGroup-c9F65hOo.js";import"./FormGroup-DOTqUq1f.js";import"./FormControlLabel-HvXv_MVH.js";import"./index-DM_1Xs39.js";import"./countries-DSLisFCy.js";import"./InputAdornment-DEbikF0Z.js";import"./Autocomplete-CmyTYkoe.js";import"./Chip-BadVSybg.js";import"./country-select-DGH5tKc3.js";import"./Checkbox-Cm203eFc.js";import"./DatePicker-DijfO7Ga.js";import"./DialogContent-DQegyPQl.js";import"./ListItem-M-XT_teX.js";import"./MobileDateTimePicker-DjMxEeI_.js";import"./Tabs-BdVdVdbh.js";import"./KeyboardArrowRight-DJc55wOs.js";import"./image-D_atTa8y.js";import"./index-BP8NwpZp.js";const me=m.object({name:m.string().min(1,{message:"Staff First Name is required!"}),description:m.string(),email:m.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:ae.phoneNumber({isValidPhoneNumber:c}),currencySymbol:m.string().min(1,{message:"Staff Last Name is required!"}),taxPercentage:m.number().min(1,{message:"Staff Last Name is required!"}),financialYear:m.number().min(1,{message:"Financial Year is required!"}),country:m.string().min(1,{message:"Country is required!"}),state:m.string(),street:m.string(),city:m.string(),district:m.string(),zipCode:m.string(),taxNumber:m.number(),printerPOS:m.string().min(1,{message:"Printer POS is required!"})}),ne=({applicationAccount:r,financial:f})=>{const d=x.useRef(r),[b,L]=x.useState(null),[j,N]=x.useState(null);x.useEffect(()=>{r&&G(P)},[r]);const P=x.useMemo(()=>{var s,t,a,i,l,o;return{name:(r==null?void 0:r.name)||"",description:(r==null?void 0:r.description)||"",email:(r==null?void 0:r.email)||"",phoneNumber:(r==null?void 0:r.phoneNumber)||"",currencySymbol:(r==null?void 0:r.currencySymbol)||"",taxPercentage:(r==null?void 0:r.taxPercentage)||"",country:((s=r==null?void 0:r.address)==null?void 0:s.country)||"",state:((t=r==null?void 0:r.address)==null?void 0:t.state)||"",city:((a=r==null?void 0:r.address)==null?void 0:a.city)||"",district:((i=r==null?void 0:r.address)==null?void 0:i.district)||"",zipCode:((l=r==null?void 0:r.address)==null?void 0:l.zipCode)||"",street:((o=r==null?void 0:r.address)==null?void 0:o.street)||"",taxNumber:(r==null?void 0:r.taxNumber)||0,printerPOS:(r==null?void 0:r.printerPOS)||""}},[r]),q=A({resolver:ee(me),defaultValues:P}),{reset:G,watch:le,setValue:oe,handleSubmit:U,control:xe,formState:{isSubmitting:ge}}=q,K=U(async s=>{try{if(s.city||s.country||s.district||s.state||s.street||s.zipCode){const{country:t,state:a,city:i,district:l,zipCode:o,street:p}=s;s.address={country:t,state:a,city:i,district:l,zipCode:o,street:p},delete s.city,delete s.country,delete s.district,delete s.state,delete s.street,delete s.zipCode}if(d.current={...s},b&&j){const t=new FormData;t.append("file",b),t.append("category","AppAvatar");const a=new FormData;a.append("file",j),a.append("category","AppLogo"),await Q({avatar:t,logo:a})}else if(b){const t=new FormData;t.append("file",b),t.append("category","AppAvatar"),await E(t)}else if(j){const t=new FormData;t.append("file",j),t.append("category","AppLogo"),await E(t)}else await w(s)}catch(t){console.error(t)}}),k=x.useCallback(s=>{const t=s[0];L(t)},[]),H=x.useCallback(s=>{const t=s[0];N(()=>t)},[]),I=()=>{N(null)},v={headers:{"content-type":"multipart/form-data"}},F=Y(),{mutate:E}=T({mutationFn:s=>u.post(y.files.upload,s,v),onSuccess:async({data:s})=>{const{name:t}=s;if(t){const{current:a}=d;a.avatar=t,await w(a)}return s},onSettled:async()=>{await F.invalidateQueries({queryKey:["appAvatar-images"]})},onError:s=>{console.log(s)}}),{mutate:Q}=T({mutationFn:async({avatar:s,logo:t})=>{const a=await u.post(y.files.upload,s,v),i=await u.post(y.files.upload,t,v);return{avatarRes:a,logoRes:i}},onSuccess:async({avatarRes:s,logoRes:t})=>{var o,p;const a=(o=s==null?void 0:s.data)==null?void 0:o.name,i=(p=t==null?void 0:t.data)==null?void 0:p.name,{current:l}=d;i&&(l.appLogo=i),a&&(l.favicon=a),await w(l)},onSettled:async()=>{await F.invalidateQueries({queryKey:["appAvatar-images"]})},onError:s=>{console.log(s)}}),{mutate:w}=T({mutationFn:s=>u.patch(y.master.edit,s),onSuccess:async()=>{V.success("Master Account Has Been Modified!");const{currencySymbol:s}=d.current;localStorage.setItem(J,s)},onSettled:async()=>{await F.invalidateQueries({queryKey:["account-application"]})},onError:s=>{console.log(s)}});return e.jsxs(re,{methods:q,onSubmit:K,children:[e.jsx(C,{sx:{mb:4},children:e.jsxs(h,{spacing:2,sx:{p:3},children:[e.jsx(g,{variant:"h6",gutterBottom:!0,children:"Organization Details"}),e.jsxs(S,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(n.Text,{name:"name",label:"Organization Name"}),e.jsx(n.Phone,{name:"phoneNumber",label:"Phone number"}),e.jsx(n.Text,{name:"email",label:"Email address"}),e.jsx(n.Text,{name:"description",label:"Description"}),e.jsxs(h,{spacing:1.5,children:[e.jsx(g,{variant:"subtitle2",children:"Attachments"}),e.jsx(se,{value:j,onDrop:H,onDelete:I})]}),e.jsxs(h,{spacing:1.5,children:[e.jsx(g,{variant:"subtitle2",children:"Favicon"}),e.jsx(te,{value:b,onDrop:k,validator:s=>s.size>1e6?{code:"file-too-large",message:`File is larger than ${O(1e6)}`}:null,helperText:e.jsxs(g,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",O(3145728)]})})]})]})]})}),e.jsx(C,{sx:{mb:4},children:e.jsxs(h,{spacing:2,sx:{p:3},children:[e.jsx(g,{variant:"h6",gutterBottom:!0,children:"Finance Setting"}),e.jsxs(S,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(n.Text,{name:"currencySymbol",label:"Currency Symbol"}),e.jsx(n.Text,{name:"taxPercentage",label:"Tax Percentage"})]})]})}),e.jsx(C,{sx:{mb:4},children:e.jsxs(h,{spacing:2,sx:{p:3},children:[e.jsx(g,{variant:"h6",gutterBottom:!0,children:"Firm Address"}),e.jsxs(S,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(n.CountrySelect,{name:"country",label:"Country",placeholder:"Choose a country"}),e.jsx(n.Text,{name:"state",label:"State/region"}),e.jsx(n.Text,{name:"city",label:"City"}),e.jsx(n.Text,{name:"district",label:"District"}),e.jsx(n.Text,{name:"zipCode",label:"Zip/code"}),e.jsx(n.Text,{name:"street",label:"Address"}),e.jsx(n.Text,{type:"number",name:"taxNumber",label:"Store Tax Number"})]})]})}),e.jsx(C,{sx:{mb:4},children:e.jsxs(h,{spacing:2,sx:{p:3},children:[e.jsx(g,{variant:"h6",gutterBottom:!0,children:"Other Settings"}),e.jsx(S,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:e.jsxs(n.Select,{name:"printerPOS",label:"Printer POS",sx:{width:420,textTransform:"capitalize"},children:[e.jsx(z,{value:"A4",children:"A4"}),e.jsx(z,{value:"Thermal",children:"Thermal"})]})})]})}),e.jsxs(S,{display:"flex",justifyContent:"flex-end",gap:2,mt:2,children:[e.jsx(B,{type:"submit",variant:"contained",children:"Save Changes"}),e.jsx(B,{variant:"outlined",children:"Cancel"})]})]})},ie=({applicationAccount:r,financial:f})=>e.jsxs(_,{children:[e.jsx(R,{links:[{name:"Dashboard",href:D.dashboard.root},{name:"Settings",href:D.dashboard.tools.root},{name:"Master Settings"}],sx:{mb:{xs:3,md:5}}}),e.jsx(ne,{applicationAccount:r,financial:f})]}),de={title:`Tools | Dashboard - ${W.site.name}`};function sr(){const r=M({queryKey:["account-application"],queryFn:async()=>{const{data:d}=await u.get(y.auth.application);return d}}),f=M({queryKey:["financial-year"],queryFn:async()=>{const{data:d}=await u.get(y.financial.list);return d}});return f.isLoading||r.isLoading?e.jsx($,{}):r.isError?e.jsx(X,{route:D.dashboard.tools.root}):e.jsxs(e.Fragment,{children:[e.jsx(Z,{children:e.jsxs("title",{children:[" ",de.title]})}),e.jsx(ie,{applicationAccount:r.data,financial:f.data})]})}export{sr as default};