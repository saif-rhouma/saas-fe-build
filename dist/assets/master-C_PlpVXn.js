import{r as g,dL as V,dM as b,dK as f,dN as J,d9 as _,j as e,aF as C,S as u,T as h,B as F,bJ as T,e as M,eb as $,p as N,ef as Z,H as W,C as X}from"./index-DAC7DrKI.js";import{u as B,E as R}from"./error-block-DySOa_eo.js";import{C as Y}from"./custom-breadcrumbs-DLqq1jlX.js";import{b as c,U as A}from"./upload-avatar-CXZ0NYIu.js";import{a as L}from"./format-number-BqWqqWdN.js";import{z as m,b as ee,u as re,t as se,F as te}from"./form-provider-w6GRwc9n.js";import{u as D}from"./useMutation-Ds6FyOSf.js";import{F as i}from"./fields-D3apoPNI.js";import"./editor-DHP9j2dL.js";import{s as ae}from"./schema-helper-D1xNGTQ3.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./FormHelperText-DDJizVQ2.js";import"./formControlState-Dq1zat_P.js";import"./index-F5Z3hI1r.js";import"./image-uXppHbLd.js";import"./TextField-BemIARnN.js";import"./FormControl-CAs0fYHm.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BgYGZs-G.js";import"./FormLabel-Ohl1t8N_.js";import"./Select-VxgK60LB.js";import"./Menu-CO2UhTso.js";import"./InputBase-CinKVcWY.js";import"./countries-DSLisFCy.js";import"./InputAdornment-Coc5CotZ.js";import"./Rating-JqEjmuzB.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-DKXce_Ll.js";import"./RadioGroup-Cu8878NJ.js";import"./FormGroup-BF5sRrAl.js";import"./FormControlLabel-Dpb-wuL-.js";import"./Autocomplete-Bdm7MKsx.js";import"./Chip-BV006SG6.js";import"./country-select-B-YEZ-QO.js";import"./Checkbox-aWzJpCDA.js";import"./DatePicker-B0W1aFhA.js";import"./DialogContent-CNnwUfBT.js";import"./ListItem-Dtgjcfn6.js";import"./MobileDateTimePicker-DX-_JOo5.js";import"./index-BgeSHDfL.js";const me=m.object({name:m.string().min(1,{message:"Staff First Name is required!"}),description:m.string(),email:m.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:ae.phoneNumber({isValidPhoneNumber:ee}),currencySymbol:m.string().min(1,{message:"Staff Last Name is required!"}),taxPercentage:m.number().min(1,{message:"Staff Last Name is required!"}),financialYear:m.number().min(1,{message:"Financial Year is required!"}),country:m.string().min(1,{message:"Country is required!"}),state:m.string(),street:m.string(),city:m.string(),district:m.string(),zipCode:m.string(),taxNumber:m.number(),printerPOS:m.string().min(1,{message:"Printer POS is required!"})}),ie=({applicationAccount:s,financial:y})=>{const l=g.useRef(s),[j,G]=g.useState(null),[S,P]=g.useState(null);g.useEffect(()=>{s&&O(q)},[s]);const q=g.useMemo(()=>{var r,t,a,n,d,o,x;return{name:(s==null?void 0:s.name)||"",description:(s==null?void 0:s.description)||"",email:(s==null?void 0:s.email)||"",phoneNumber:(s==null?void 0:s.phoneNumber)||"",currencySymbol:(s==null?void 0:s.currencySymbol)||"",taxPercentage:(s==null?void 0:s.taxPercentage)||"",financialYear:((r=s==null?void 0:s.financialYear)==null?void 0:r.id)||"",country:((t=s==null?void 0:s.address)==null?void 0:t.country)||"",state:((a=s==null?void 0:s.address)==null?void 0:a.state)||"",city:((n=s==null?void 0:s.address)==null?void 0:n.city)||"",district:((d=s==null?void 0:s.address)==null?void 0:d.district)||"",zipCode:((o=s==null?void 0:s.address)==null?void 0:o.zipCode)||"",street:((x=s==null?void 0:s.address)==null?void 0:x.street)||"",taxNumber:(s==null?void 0:s.taxNumber)||0,printerPOS:(s==null?void 0:s.printerPOS)||""}},[s]),E=re({resolver:se(me),defaultValues:q}),{reset:O,watch:le,setValue:oe,handleSubmit:U,control:xe,formState:{isSubmitting:ge}}=E,K=U(async r=>{try{if(r.city||r.country||r.district||r.state||r.street||r.zipCode){const{country:t,state:a,city:n,district:d,zipCode:o,street:x}=r;r.address={country:t,state:a,city:n,district:d,zipCode:o,street:x},delete r.city,delete r.country,delete r.district,delete r.state,delete r.street,delete r.zipCode}if(l.current={...r},j&&S){const t=new FormData;t.append("file",j),t.append("category","AppAvatar");const a=new FormData;a.append("file",S),a.append("category","AppLogo"),await I({avatar:t,logo:a})}else if(j){const t=new FormData;t.append("file",j),t.append("category","AppAvatar"),await z(t)}else if(S){const t=new FormData;t.append("file",S),t.append("category","AppLogo"),await z(t)}else await w(r)}catch(t){console.error(t)}}),k=g.useCallback(r=>{const t=r[0];G(t)},[]),Q=g.useCallback(r=>{const t=r[0];P(()=>t)},[]),H=()=>{P(null)},v={headers:{"content-type":"multipart/form-data"}},p=V(),{mutate:z}=D({mutationFn:r=>b.post(f.files.upload,r,v),onSuccess:async({data:r})=>{const{name:t}=r;if(t){const{current:a}=l;a.avatar=t,await w(a)}return r},onSettled:async()=>{await p.invalidateQueries({queryKey:["appAvatar-images"]})},onError:r=>{console.log(r)}}),{mutate:I}=D({mutationFn:async({avatar:r,logo:t})=>{const a=await b.post(f.files.upload,r,v),n=await b.post(f.files.upload,t,v);return{avatarRes:a,logoRes:n}},onSuccess:async({avatarRes:r,logoRes:t})=>{var o,x;const a=(o=r==null?void 0:r.data)==null?void 0:o.name,n=(x=t==null?void 0:t.data)==null?void 0:x.name,{current:d}=l;n&&(d.appLogo=n),a&&(d.favicon=a),console.log("----> payload",d),await w(d)},onSettled:async()=>{await p.invalidateQueries({queryKey:["appAvatar-images"]})},onError:r=>{console.log(r)}}),{mutate:w}=D({mutationFn:r=>b.patch(f.master.edit,r),onSuccess:async()=>{J.success("Master Account Has Been Modified!");const{currencySymbol:r}=l.current;localStorage.setItem(_,r)},onSettled:async()=>{await p.invalidateQueries({queryKey:["account-application"]})},onError:r=>{console.log(r)}});return e.jsx(e.Fragment,{children:e.jsxs(te,{methods:E,onSubmit:K,children:[e.jsx(C,{sx:{mb:4},children:e.jsxs(u,{spacing:2,sx:{p:3},children:[e.jsx(h,{variant:"h6",gutterBottom:!0,children:"Application Details"}),e.jsxs(F,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(i.Text,{name:"name",label:"Application Name"}),e.jsx(i.Phone,{name:"phoneNumber",label:"Phone number"}),e.jsx(i.Text,{name:"email",label:"Email address"}),e.jsx(i.Text,{name:"description",label:"Description"}),e.jsxs(u,{spacing:1.5,children:[e.jsx(h,{variant:"subtitle2",children:"Attachments"}),e.jsx(c,{value:S,onDrop:Q,onDelete:H})]}),e.jsxs(u,{spacing:1.5,children:[e.jsx(h,{variant:"subtitle2",children:"Favicon"}),e.jsx(A,{value:j,onDrop:k,validator:r=>r.size>1e6?{code:"file-too-large",message:`File is larger than ${L(1e6)}`}:null,helperText:e.jsxs(h,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",L(3145728)]})})]})]})]})}),e.jsx(C,{sx:{mb:4},children:e.jsxs(u,{spacing:2,sx:{p:3},children:[e.jsx(h,{variant:"h6",gutterBottom:!0,children:"Finance Setting"}),e.jsxs(F,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[e.jsx(i.Text,{name:"currencySymbol",label:"Currency Symbol"}),e.jsx(i.Text,{name:"taxPercentage",label:"Tax Percentage"}),e.jsx(i.Select,{name:"financialYear",label:"Select a Financial Year",sx:{width:420,textTransform:"capitalize"},children:y.map(r=>e.jsx(T,{value:r==null?void 0:r.id,children:r==null?void 0:r.year},r==null?void 0:r.id))})]})]})}),e.jsx(C,{sx:{mb:4},children:e.jsxs(u,{spacing:2,sx:{p:3},children:[e.jsx(h,{variant:"h6",gutterBottom:!0,children:"Firm Address"}),e.jsxs(F,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(i.CountrySelect,{name:"country",label:"Country",placeholder:"Choose a country"}),e.jsx(i.Text,{name:"state",label:"State/region"}),e.jsx(i.Text,{name:"city",label:"City"}),e.jsx(i.Text,{name:"district",label:"District"}),e.jsx(i.Text,{name:"zipCode",label:"Zip/code"}),e.jsx(i.Text,{name:"street",label:"Address"}),e.jsx(i.Text,{type:"number",name:"taxNumber",label:"Store Tax Number"})]})]})}),e.jsx(C,{sx:{mb:4},children:e.jsxs(u,{spacing:2,sx:{p:3},children:[e.jsx(h,{variant:"h6",gutterBottom:!0,children:"Other Settings"}),e.jsx(F,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:e.jsxs(i.Select,{name:"printerPOS",label:"Printer POS",sx:{width:420,textTransform:"capitalize"},children:[e.jsx(T,{value:"A4",children:"A4"}),e.jsx(T,{value:"Thermal",children:"Thermal"})]})})]})}),e.jsxs(F,{display:"flex",justifyContent:"flex-end",gap:2,mt:2,children:[e.jsx(M,{type:"submit",variant:"contained",children:"Save Changes"}),e.jsx(M,{variant:"outlined",children:"Cancel"})]})]})})},ne=({applicationAccount:s,financial:y})=>e.jsxs($,{children:[e.jsx(Y,{links:[{name:"Dashboard",href:N.dashboard.root},{name:"Tools",href:N.dashboard.tools.root},{name:"Master Settings"}],sx:{mb:{xs:3,md:5}}}),e.jsx(ie,{applicationAccount:s,financial:y})]}),de={title:`Tools | Dashboard - ${X.site.name}`};function rr(){const s=B({queryKey:["account-application"],queryFn:async()=>{const{data:l}=await b.get(f.auth.application);return l}}),y=B({queryKey:["financial-year"],queryFn:async()=>{const{data:l}=await b.get(f.financial.list);return l}});return y.isLoading||s.isLoading?e.jsx(Z,{}):s.isError?e.jsx(R,{route:N.dashboard.tools.root}):e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsxs("title",{children:[" ",de.title]})}),e.jsx(ne,{applicationAccount:s.data,financial:y.data})]})}export{rr as default};
