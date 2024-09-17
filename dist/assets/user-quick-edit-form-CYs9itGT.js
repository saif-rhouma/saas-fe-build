import{o as P,r as T,dP as q,p as z,j as i,G as c,aH as v,dw as D,B as h,T as d,bN as k,S,e as w,z as G,eG as R,bL as V}from"./index-BjIn7_qX.js";import{z as s,i as N,u as A,t as u,F as E,C as L}from"./form-provider-IpIS7QyH.js";import{a as B}from"./format-number-CVePc8Zq.js";import{F as e}from"./fields-CDnR68NQ.js";import"./image-Cp18p2kF.js";import"./editor-BSuX1ABo.js";import{s as n}from"./schema-helper-Ca6G8-HA.js";import{F as W}from"./FormControlLabel-Cebq6FC-.js";import{L as F}from"./LoadingButton-DnorAK6T.js";import{a as _,b as I,D as O}from"./DialogContent-Y7gFy98Q.js";import{D as Z}from"./DialogTitle-DGtAiJ5y.js";const M=s.object({avatarUrl:n.file({message:{required_error:"Avatar is required!"}}),name:s.string().min(1,{message:"Name is required!"}),email:s.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:n.phoneNumber({isValidPhoneNumber:N}),country:n.objectOrNull({message:{required_error:"Country is required!"}}),address:s.string().min(1,{message:"Address is required!"}),company:s.string().min(1,{message:"Company is required!"}),state:s.string().min(1,{message:"State is required!"}),city:s.string().min(1,{message:"City is required!"}),role:s.string().min(1,{message:"Role is required!"}),zipCode:s.string().min(1,{message:"Zip code is required!"}),status:s.string(),isVerified:s.boolean()});function sa({currentUser:a}){const g=P(),m=T.useMemo(()=>({status:(a==null?void 0:a.status)||"",avatarUrl:(a==null?void 0:a.avatarUrl)||null,isVerified:(a==null?void 0:a.isVerified)||!0,name:(a==null?void 0:a.name)||"",email:(a==null?void 0:a.email)||"",phoneNumber:(a==null?void 0:a.phoneNumber)||"",country:(a==null?void 0:a.country)||"",state:(a==null?void 0:a.state)||"",city:(a==null?void 0:a.city)||"",address:(a==null?void 0:a.address)||"",zipCode:(a==null?void 0:a.zipCode)||"",company:(a==null?void 0:a.company)||"",role:(a==null?void 0:a.role)||""}),[a]),x=A({mode:"onSubmit",resolver:u(M),defaultValues:m}),{reset:p,watch:j,control:y,handleSubmit:f,formState:{isSubmitting:C}}=x,o=j(),b=f(async l=>{try{await new Promise(t=>setTimeout(t,500)),p(),q.success(a?"Update success!":"Create success!"),g.push(z.dashboard.user.list),console.info("DATA",l)}catch(t){console.error(t)}});return i.jsx(E,{methods:x,onSubmit:b,children:i.jsxs(c,{container:!0,spacing:3,children:[i.jsx(c,{xs:12,md:4,children:i.jsxs(v,{sx:{pt:10,pb:5,px:3},children:[a&&i.jsx(D,{color:o.status==="active"&&"success"||o.status==="banned"&&"error"||"warning",sx:{position:"absolute",top:24,right:24},children:o.status}),i.jsx(h,{sx:{mb:5},children:i.jsx(e.UploadAvatar,{name:"avatarUrl",maxSize:3145728,helperText:i.jsxs(d,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",i.jsx("br",{})," max size of ",B(3145728)]})})}),a&&i.jsx(W,{labelPlacement:"start",control:i.jsx(L,{name:"status",control:y,render:({field:l})=>i.jsx(k,{...l,checked:l.value!=="active",onChange:t=>l.onChange(t.target.checked?"banned":"active")})}),label:i.jsxs(i.Fragment,{children:[i.jsx(d,{variant:"subtitle2",sx:{mb:.5},children:"Banned"}),i.jsx(d,{variant:"body2",sx:{color:"text.secondary"},children:"Apply disable account"})]}),sx:{mx:0,mb:3,width:1,justifyContent:"space-between"}}),i.jsx(e.Switch,{name:"isVerified",labelPlacement:"start",label:i.jsxs(i.Fragment,{children:[i.jsx(d,{variant:"subtitle2",sx:{mb:.5},children:"Email verified"}),i.jsx(d,{variant:"body2",sx:{color:"text.secondary"},children:"Disabling this will automatically send the user a verification email"})]}),sx:{mx:0,width:1,justifyContent:"space-between"}}),a&&i.jsx(S,{justifyContent:"center",alignItems:"center",sx:{mt:3},children:i.jsx(w,{variant:"soft",color:"error",children:"Delete user"})})]})}),i.jsx(c,{xs:12,md:8,children:i.jsxs(v,{sx:{p:3},children:[i.jsxs(h,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[i.jsx(e.Text,{name:"name",label:"Full name"}),i.jsx(e.Text,{name:"email",label:"Email address"}),i.jsx(e.Phone,{name:"phoneNumber",label:"Phone number"}),i.jsx(e.CountrySelect,{fullWidth:!0,name:"country",label:"Country",placeholder:"Choose a country"}),i.jsx(e.Text,{name:"state",label:"State/region"}),i.jsx(e.Text,{name:"city",label:"City"}),i.jsx(e.Text,{name:"address",label:"Address"}),i.jsx(e.Text,{name:"zipCode",label:"Zip/code"}),i.jsx(e.Text,{name:"company",label:"Company"}),i.jsx(e.Text,{name:"role",label:"Role"})]}),i.jsx(S,{alignItems:"flex-end",sx:{mt:3},children:i.jsx(F,{type:"submit",variant:"contained",loading:C,children:a?"Save changes":"Create user"})})]})})]})})}const Q=s.object({name:s.string().min(1,{message:"Name is required!"}),email:s.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),phoneNumber:n.phoneNumber({isValidPhoneNumber:N}),country:n.objectOrNull({message:{required_error:"Country is required!"}}),state:s.string().min(1,{message:"State is required!"}),city:s.string().min(1,{message:"City is required!"}),address:s.string().min(1,{message:"Address is required!"}),zipCode:s.string().min(1,{message:"Zip code is required!"}),company:s.string().min(1,{message:"Company is required!"}),role:s.string().min(1,{message:"Role is required!"}),status:s.string()});function oa({currentUser:a,open:g,onClose:m}){const x=T.useMemo(()=>({name:(a==null?void 0:a.name)||"",email:(a==null?void 0:a.email)||"",phoneNumber:(a==null?void 0:a.phoneNumber)||"",address:(a==null?void 0:a.address)||"",country:(a==null?void 0:a.country)||"",state:(a==null?void 0:a.state)||"",city:(a==null?void 0:a.city)||"",zipCode:(a==null?void 0:a.zipCode)||"",status:a==null?void 0:a.status,company:(a==null?void 0:a.company)||"",role:(a==null?void 0:a.role)||""}),[a]),p=A({mode:"all",resolver:u(Q),defaultValues:x}),{reset:j,handleSubmit:y,formState:{isSubmitting:f}}=p,C=y(async o=>{const b=new Promise(l=>setTimeout(l,1e3));try{j(),m(),q.promise(b,{loading:"Loading...",success:"Update success!",error:"Update error!"}),await b,console.info("DATA",o)}catch(l){console.error(l)}});return i.jsx(_,{fullWidth:!0,maxWidth:!1,open:g,onClose:m,PaperProps:{sx:{maxWidth:720}},children:i.jsxs(E,{methods:p,onSubmit:C,children:[i.jsx(Z,{children:"Quick Update"}),i.jsxs(I,{children:[i.jsx(G,{variant:"outlined",severity:"info",sx:{mb:3},children:"Account is waiting for confirmation"}),i.jsxs(h,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[i.jsx(e.Select,{name:"status",label:"Status",children:R.map(o=>i.jsx(V,{value:o.value,children:o.label},o.value))}),i.jsx(h,{sx:{display:{xs:"none",sm:"block"}}}),i.jsx(e.Text,{name:"name",label:"Full name"}),i.jsx(e.Text,{name:"email",label:"Email address"}),i.jsx(e.Phone,{name:"phoneNumber",label:"Phone number"}),i.jsx(e.CountrySelect,{fullWidth:!0,name:"country",label:"Country",placeholder:"Choose a country"}),i.jsx(e.Text,{name:"state",label:"State/region"}),i.jsx(e.Text,{name:"city",label:"City"}),i.jsx(e.Text,{name:"address",label:"Address"}),i.jsx(e.Text,{name:"zipCode",label:"Zip/code"}),i.jsx(e.Text,{name:"company",label:"Company"}),i.jsx(e.Text,{name:"role",label:"Role"})]})]}),i.jsxs(O,{children:[i.jsx(w,{variant:"outlined",onClick:m,children:"Cancel"}),i.jsx(F,{type:"submit",variant:"contained",loading:f,children:"Update"})]})]})})}export{oa as U,sa as a};
