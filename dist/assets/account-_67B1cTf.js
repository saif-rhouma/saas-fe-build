import{r as h,j as e,dD as ee,aV as se,S as j,T as S,dw as z,B as T,I as a,dP as F,G as c,aH as v,e as C,bI as _,aD as R,y as N,dB as G,bK as H,bL as P,w as I,D as M,aM as W,aN as ne,L as oe,aw as re,bN as ie,ed as te,p as U,i as ae,k as le,eL as ce,eM as de,eN as me,eO as xe,eB as pe,H as ue,C as he}from"./index-BPQkDe0s.js";import{u as je}from"./use-tabs-B-x2h9_m.js";import{C as be}from"./custom-breadcrumbs-BIW9VTmo.js";import{S as $,z as g,i as ge,u as D,t as V,F as L,C as ye}from"./form-provider-Csxs3POq.js";import{a as fe,b as we}from"./format-number-9dwzKsgZ.js";import{F as b}from"./fields-uLHuWF6F.js";import"./image-C7AA7Kgf.js";import"./editor-JwZorNGg.js";import{s as q}from"./schema-helper-CODNJXI3.js";import{u as Ce}from"./use-mocked-user-BLzAaaGS.js";import{L as B}from"./LoadingButton-ByZAe6Vn.js";import{a as ve,b as Se,c as Pe}from"./new-password-icon-DvffVQpS.js";import{A as Ae,a as Te}from"./address-new-form-C5N-hwu_.js";import{a as Z}from"./DialogContent-p3i0msBI.js";import{T as J}from"./TextField-Bi7NVwCq.js";import{I as A}from"./InputAdornment-Ck59aR0s.js";import{C as E}from"./CardHeader--tCBXTtB.js";import{P as Ie}from"./payment-new-card-dialog-COai1qpj.js";import{F as ke}from"./FormControlLabel-CkOEQNeq.js";import"./index-DGJW8Nhg.js";import"./countries-DSLisFCy.js";import"./FormHelperText-CPxcDFA-.js";import"./formControlState-Dq1zat_P.js";import"./Rating-CpW9817X.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-Cn-68b2h.js";import"./FormControl-bKQXC1dH.js";import"./utils-DoM3o7-Q.js";import"./FormLabel-8bz6Jicd.js";import"./RadioGroup-DbSLazbi.js";import"./FormGroup-CC5xoKev.js";import"./Autocomplete-lg4xc3Dx.js";import"./Select-9Xhy8-ut.js";import"./Menu-DGoJy9BJ.js";import"./InputBase-CPrPQ_RD.js";import"./Chip-ALPNHt2t.js";import"./country-select-Bo5KTiYN.js";import"./InputLabel-AqbAhnGZ.js";import"./Checkbox-DYdkvSfk.js";import"./upload-avatar-CesV9ZGt.js";import"./DatePicker-BGXln9IR.js";import"./ListItem-BApUg4RM.js";import"./MobileDateTimePicker-dEpBlYqw.js";import"./index-DhCxhDCC.js";import"./CircularProgress-BW2J7VJ8.js";import"./DialogTitle-DTSEDZ4J.js";function Ne({list:s,open:n,action:o,onClose:r,selected:m,onSelect:p,title:x="Address book"}){const[d,t]=h.useState(""),i=Fe({inputData:s,query:d}),y=!i.length&&!!d,w=h.useCallback(u=>{t(u.target.value)},[]),f=h.useCallback(u=>{p(u),t(""),r()},[r,p]),k=e.jsx(ee,{sx:{p:.5,maxHeight:480},children:i.map(u=>e.jsxs(se,{onClick:()=>f(u),sx:{py:1,my:.5,px:1.5,gap:.5,width:1,borderRadius:1,display:"flex",flexDirection:"column",alignItems:"flex-start",...m(`${u.id}`)&&{bgcolor:"action.selected"}},children:[e.jsxs(j,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(S,{variant:"subtitle2",children:u.name}),u.primary&&e.jsx(z,{color:"info",children:"Default"})]}),u.company&&e.jsx(T,{sx:{color:"primary.main",typography:"caption"},children:u.company}),e.jsx(S,{variant:"body2",sx:{color:"text.secondary"},children:u.fullAddress}),u.phoneNumber&&e.jsx(S,{variant:"body2",sx:{color:"text.secondary"},children:u.phoneNumber})]},u.id))});return e.jsxs(Z,{fullWidth:!0,maxWidth:"xs",open:n,onClose:r,children:[e.jsxs(j,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3,pr:1.5},children:[e.jsxs(S,{variant:"h6",children:[" ",x," "]}),o&&o]}),e.jsx(j,{sx:{p:2,pt:0},children:e.jsx(J,{value:d,onChange:w,placeholder:"Search...",InputProps:{startAdornment:e.jsx(A,{position:"start",children:e.jsx(a,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),y?e.jsx($,{query:d,sx:{px:3,pt:5,pb:10}}):k]})}function Fe({inputData:s,query:n}){return n?s.filter(o=>o.name.toLowerCase().indexOf(n.toLowerCase())!==-1||o.fullAddress.toLowerCase().indexOf(n.toLowerCase())!==-1||`${o.company}`.toLowerCase().indexOf(n.toLowerCase())!==-1):s}const De=g.object({displayName:g.string().min(1,{message:"Name is required!"}),email:g.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"}),photoURL:q.file({message:{required_error:"Avatar is required!"}}),phoneNumber:q.phoneNumber({isValidPhoneNumber:ge}),country:q.objectOrNull({message:{required_error:"Country is required!"}}),address:g.string().min(1,{message:"Address is required!"}),state:g.string().min(1,{message:"State is required!"}),city:g.string().min(1,{message:"City is required!"}),zipCode:g.string().min(1,{message:"Zip code is required!"}),about:g.string().min(1,{message:"About is required!"}),isPublic:g.boolean()});function Le(){const{user:s}=Ce(),n={displayName:(s==null?void 0:s.displayName)||"",email:(s==null?void 0:s.email)||"",photoURL:(s==null?void 0:s.photoURL)||null,phoneNumber:(s==null?void 0:s.phoneNumber)||"",country:(s==null?void 0:s.country)||"",address:(s==null?void 0:s.address)||"",state:(s==null?void 0:s.state)||"",city:(s==null?void 0:s.city)||"",zipCode:(s==null?void 0:s.zipCode)||"",about:(s==null?void 0:s.about)||"",isPublic:(s==null?void 0:s.isPublic)||!1},o=D({mode:"all",resolver:V(De),defaultValues:n}),{handleSubmit:r,formState:{isSubmitting:m}}=o,p=r(async x=>{try{await new Promise(d=>setTimeout(d,500)),F.success("Update success!"),console.info("DATA",x)}catch(d){console.error(d)}});return e.jsx(L,{methods:o,onSubmit:p,children:e.jsxs(c,{container:!0,spacing:3,children:[e.jsx(c,{xs:12,md:4,children:e.jsxs(v,{sx:{pt:10,pb:5,px:3,textAlign:"center"},children:[e.jsx(b.UploadAvatar,{name:"photoURL",maxSize:3145728,helperText:e.jsxs(S,{variant:"caption",sx:{mt:3,mx:"auto",display:"block",textAlign:"center",color:"text.disabled"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",e.jsx("br",{})," max size of ",fe(3145728)]})}),e.jsx(b.Switch,{name:"isPublic",labelPlacement:"start",label:"Public profile",sx:{mt:5}}),e.jsx(C,{variant:"soft",color:"error",sx:{mt:3},children:"Delete user"})]})}),e.jsx(c,{xs:12,md:8,children:e.jsxs(v,{sx:{p:3},children:[e.jsxs(T,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(b.Text,{name:"displayName",label:"Name"}),e.jsx(b.Text,{name:"email",label:"Email address"}),e.jsx(b.Phone,{name:"phoneNumber",label:"Phone number"}),e.jsx(b.Text,{name:"address",label:"Address"}),e.jsx(b.CountrySelect,{name:"country",label:"Country",placeholder:"Choose a country"}),e.jsx(b.Text,{name:"state",label:"State/region"}),e.jsx(b.Text,{name:"city",label:"City"}),e.jsx(b.Text,{name:"zipCode",label:"Zip/code"})]}),e.jsxs(j,{spacing:3,alignItems:"flex-end",sx:{mt:3},children:[e.jsx(b.Text,{name:"about",multiline:!0,rows:4,label:"About"}),e.jsx(B,{type:"submit",variant:"contained",loading:m,children:"Save changes"})]})]})})]})})}function K({card:s,sx:n,...o}){const r=_();return e.jsxs(e.Fragment,{children:[e.jsxs(R,{variant:"outlined",sx:{p:2.5,width:1,position:"relative",...n},...o,children:[e.jsxs(T,{gap:1,display:"flex",alignItems:"center",sx:{mb:1},children:[e.jsx(a,{width:36,icon:s.cardType==="visa"&&"logos:visa"||"logos:mastercard"}),s.primary&&e.jsx(z,{color:"info",children:"Default"})]}),e.jsx(S,{variant:"subtitle2",children:s.cardNumber}),e.jsx(N,{onClick:r.onOpen,sx:{top:8,right:8,position:"absolute"},children:e.jsx(a,{icon:"eva:more-vertical-fill"})})]}),e.jsx(G,{open:r.open,anchorEl:r.anchorEl,onClose:r.onClose,children:e.jsxs(H,{children:[e.jsxs(P,{onClick:r.onClose,children:[e.jsx(a,{icon:"eva:star-fill"}),"Set as primary"]}),e.jsxs(P,{onClick:r.onClose,children:[e.jsx(a,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(P,{onClick:r.onClose,sx:{color:"error.main"},children:[e.jsx(a,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})})]})}function Be({open:s,list:n,onClose:o,selected:r,onSelect:m}){const[p,x]=h.useState(""),t=!Ee({inputData:n,query:p}).length&&!!p,i=h.useCallback(f=>{x(f.target.value)},[]),y=h.useCallback(f=>{m(f),x(""),o()},[o,m]),w=e.jsx(j,{spacing:2.5,sx:{p:3},children:n.map(f=>e.jsx(K,{card:f,onClick:()=>y(f),sx:{cursor:"pointer",...r(f.id)&&{boxShadow:k=>`0 0 0 2px ${k.vars.palette.text.primary}`}}},f.id))});return e.jsxs(Z,{fullWidth:!0,maxWidth:"xs",open:s,onClose:o,children:[e.jsxs(j,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3,pr:1.5},children:[e.jsx(S,{variant:"h6",children:" Cards "}),e.jsx(C,{size:"small",startIcon:e.jsx(a,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})]}),e.jsx(j,{sx:{px:3},children:e.jsx(J,{value:p,onChange:i,placeholder:"Search...",InputProps:{startAdornment:e.jsx(A,{position:"start",children:e.jsx(a,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),t?e.jsx($,{query:p,sx:{px:3,pt:5,pb:10}}):w]})}function Ee({inputData:s,query:n}){return n?s.filter(o=>o.cardNumber.toLowerCase().indexOf(n.toLowerCase())!==-1):s}function qe({cardList:s,addressBook:n,plans:o}){const r=I(),m=I(),p=n.filter(l=>l.primary)[0],x=s.filter(l=>l.primary)[0],[d,t]=h.useState(""),[i,y]=h.useState(p),[w,f]=h.useState(x),k=h.useCallback(l=>{o.filter(X=>X.primary)[0].subscription!==l&&t(l)},[o]),u=h.useCallback(l=>{y(l)},[]),Y=h.useCallback(l=>{f(l)},[]),Q=o.map(l=>e.jsx(c,{xs:12,md:4,children:e.jsxs(R,{variant:"outlined",onClick:()=>k(l.subscription),sx:{p:2.5,cursor:"pointer",position:"relative",...l.primary&&{opacity:.48,cursor:"default"},...l.subscription===d&&{boxShadow:O=>`0 0 0 2px ${O.vars.palette.text.primary}`}},children:[l.primary&&e.jsx(z,{color:"info",startIcon:e.jsx(a,{icon:"eva:star-fill"}),sx:{position:"absolute",top:8,right:8},children:"Current"}),l.subscription==="basic"&&e.jsx(ve,{}),l.subscription==="starter"&&e.jsx(Se,{}),l.subscription==="premium"&&e.jsx(Pe,{}),e.jsx(T,{sx:{typography:"subtitle2",mt:2,mb:.5,textTransform:"capitalize"},children:l.subscription}),e.jsxs(j,{direction:"row",alignItems:"center",sx:{typography:"h4"},children:[l.price||"Free",!!l.price&&e.jsx(T,{component:"span",sx:{typography:"body2",color:"text.disabled",ml:.5},children:"/mo"})]})]})},l.subscription));return e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[e.jsx(E,{title:"Plan"}),e.jsx(c,{container:!0,spacing:2,sx:{p:3},children:Q}),e.jsxs(j,{spacing:2,sx:{p:3,pt:0,typography:"body2"},children:[e.jsxs(c,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(c,{xs:12,md:4,sx:{color:"text.secondary"},children:"Plan"}),e.jsx(c,{xs:12,md:8,sx:{typography:"subtitle2",textTransform:"capitalize"},children:d||"-"})]}),e.jsxs(c,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(c,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing name"}),e.jsx(c,{xs:12,md:8,children:e.jsx(C,{onClick:r.onTrue,endIcon:e.jsx(a,{width:16,icon:"eva:arrow-ios-downward-fill"}),sx:{typography:"subtitle2",p:0,borderRadius:0},children:i==null?void 0:i.name})})]}),e.jsxs(c,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(c,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing address"}),e.jsx(c,{xs:12,md:8,sx:{color:"text.secondary"},children:i==null?void 0:i.fullAddress})]}),e.jsxs(c,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(c,{xs:12,md:4,sx:{color:"text.secondary"},children:"Billing phone number"}),e.jsx(c,{xs:12,md:8,sx:{color:"text.secondary"},children:i==null?void 0:i.phoneNumber})]}),e.jsxs(c,{container:!0,spacing:{xs:.5,md:2},children:[e.jsx(c,{xs:12,md:4,sx:{color:"text.secondary"},children:"Payment method"}),e.jsx(c,{xs:12,md:8,children:e.jsx(C,{onClick:m.onTrue,endIcon:e.jsx(a,{width:16,icon:"eva:arrow-ios-downward-fill"}),sx:{typography:"subtitle2",p:0,borderRadius:0},children:w==null?void 0:w.cardNumber})})]})]}),e.jsx(M,{sx:{borderStyle:"dashed"}}),e.jsxs(j,{spacing:1.5,direction:"row",justifyContent:"flex-end",sx:{p:3},children:[e.jsx(C,{variant:"outlined",children:"Cancel plan"}),e.jsx(C,{variant:"contained",children:"Upgrade plan"})]})]}),e.jsx(Be,{list:s,open:m.value,onClose:m.onFalse,selected:l=>(w==null?void 0:w.id)===l,onSelect:Y}),e.jsx(Ne,{list:n,open:r.value,onClose:r.onFalse,selected:l=>(i==null?void 0:i.id)===l,onSelect:u,action:e.jsx(C,{size:"small",startIcon:e.jsx(a,{icon:"mingcute:add-line"}),sx:{alignSelf:"flex-end"},children:"New"})})]})}function ze({cards:s}){const n=I();return e.jsxs(e.Fragment,{children:[e.jsxs(v,{sx:{my:3},children:[e.jsx(E,{title:"Payment method",action:e.jsx(C,{size:"small",color:"primary",startIcon:e.jsx(a,{icon:"mingcute:add-line"}),onClick:n.onTrue,children:"New Card"})}),e.jsx(T,{rowGap:2.5,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{p:3},children:s.map(o=>e.jsx(K,{card:o},o.id))})]}),e.jsx(Ie,{open:n.value,onClose:n.onFalse})]})}function Oe({invoices:s}){const n=I();return e.jsxs(v,{children:[e.jsx(E,{title:"Invoice history"}),e.jsxs(j,{spacing:1.5,sx:{px:3,pt:3},children:[(n.value?s:s.slice(0,8)).map(o=>e.jsxs(j,{direction:"row",alignItems:"center",children:[e.jsx(W,{primary:o.invoiceNumber,secondary:ne(o.createdAt),primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption",color:"text.disabled"}}),e.jsx(S,{variant:"body2",sx:{textAlign:"right",mr:5},children:we(o.price)}),e.jsx(oe,{color:"inherit",underline:"always",variant:"body2",href:"#",children:"PDF"})]},o.id)),e.jsx(M,{sx:{borderStyle:"dashed"}})]}),e.jsx(j,{alignItems:"flex-start",sx:{p:2},children:e.jsxs(C,{size:"small",color:"inherit",startIcon:e.jsx(a,{width:16,icon:n.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{mr:-.5}}),onClick:n.onToggle,children:["Show ",n.value?"less":"more"]})})]})}function Ue({addressBook:s}){const[n,o]=h.useState(""),r=_(),m=I(),p=h.useCallback(t=>{console.info("ADDRESS",t)},[]),x=h.useCallback((t,i)=>{r.onOpen(t),o(i)},[r]),d=h.useCallback(()=>{r.onClose(),o("")},[r]);return e.jsxs(e.Fragment,{children:[e.jsxs(v,{children:[e.jsx(E,{title:"Address book",action:e.jsx(C,{size:"small",color:"primary",startIcon:e.jsx(a,{icon:"mingcute:add-line"}),onClick:m.onTrue,children:"Address"})}),e.jsx(j,{spacing:2.5,sx:{p:3},children:s.map(t=>e.jsx(Ae,{variant:"outlined",address:t,action:e.jsx(N,{onClick:i=>{x(i,`${t.id}`)},sx:{position:"absolute",top:8,right:8},children:e.jsx(a,{icon:"eva:more-vertical-fill"})}),sx:{p:2.5,borderRadius:1}},t.id))})]}),e.jsx(G,{open:r.open,anchorEl:r.anchorEl,onClose:d,children:e.jsxs(H,{children:[e.jsxs(P,{onClick:()=>{d(),console.info("SET AS PRIMARY",n)},children:[e.jsx(a,{icon:"eva:star-fill"}),"Set as primary"]}),e.jsxs(P,{onClick:()=>{d(),console.info("EDIT",n)},children:[e.jsx(a,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(P,{onClick:()=>{d(),console.info("DELETE",n)},sx:{color:"error.main"},children:[e.jsx(a,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})}),e.jsx(Te,{open:m.value,onClose:m.onFalse,onCreate:p})]})}function _e({cards:s,plans:n,invoices:o,addressBook:r}){return e.jsxs(c,{container:!0,spacing:5,disableEqualOverflow:!0,children:[e.jsxs(c,{xs:12,md:8,children:[e.jsx(qe,{plans:n,cardList:s,addressBook:r}),e.jsx(ze,{cards:s}),e.jsx(Ue,{addressBook:r})]}),e.jsx(c,{xs:12,md:4,children:e.jsx(Oe,{invoices:o})})]})}function Re({socialLinks:s}){const n={facebook:s.facebook||"",instagram:s.instagram||"",linkedin:s.linkedin||"",twitter:s.twitter||""},o=D({defaultValues:n}),{handleSubmit:r,formState:{isSubmitting:m}}=o,p=r(async x=>{try{await new Promise(d=>setTimeout(d,500)),F.success("Update success!"),console.info("DATA",x)}catch(d){console.error(d)}});return e.jsx(L,{methods:o,onSubmit:p,children:e.jsxs(v,{sx:{p:3,gap:3,display:"flex",flexDirection:"column"},children:[Object.keys(s).map(x=>e.jsx(b.Text,{name:x,InputProps:{startAdornment:e.jsx(A,{position:"start",children:e.jsx(re,{width:24,icon:x})})}},x)),e.jsx(B,{type:"submit",variant:"contained",loading:m,sx:{ml:"auto"},children:"Save changes"})]})})}const Ge=[{subheader:"Activity",caption:"Donec mi odio, faucibus at, scelerisque quis",items:[{id:"activity_comments",label:"Email me when someone comments onmy article"},{id:"activity_answers",label:"Email me when someone answers on my form"},{id:"activityFollows",label:"Email me hen someone follows me"}]},{subheader:"Application",caption:"Donec mi odio, faucibus at, scelerisque quis",items:[{id:"application_news",label:"News and announcements"},{id:"application_product",label:"Weekly product updates"},{id:"application_blog",label:"Weekly blog digest"}]}];function He(){const s=D({defaultValues:{selected:["activity_comments","application_product"]}}),{watch:n,control:o,handleSubmit:r,formState:{isSubmitting:m}}=s,p=n(),x=r(async t=>{try{await new Promise(i=>setTimeout(i,500)),F.success("Update success!"),console.info("DATA",t)}catch(i){console.error(i)}}),d=(t,i)=>t.includes(i)?t.filter(y=>y!==i):[...t,i];return e.jsx(L,{methods:s,onSubmit:x,children:e.jsxs(v,{sx:{p:3,gap:3,display:"flex",flexDirection:"column"},children:[Ge.map(t=>e.jsxs(c,{container:!0,spacing:3,children:[e.jsx(c,{xs:12,md:4,children:e.jsx(W,{primary:t.subheader,secondary:t.caption,primaryTypographyProps:{typography:"h6",mb:.5},secondaryTypographyProps:{component:"span"}})}),e.jsx(c,{xs:12,md:8,children:e.jsx(j,{spacing:1,sx:{p:3,borderRadius:2,bgcolor:"background.neutral"},children:e.jsx(ye,{name:"selected",control:o,render:({field:i})=>e.jsx(e.Fragment,{children:t.items.map(y=>e.jsx(ke,{label:y.label,labelPlacement:"start",control:e.jsx(ie,{checked:i.value.includes(y.id),onChange:()=>i.onChange(d(p.selected,y.id))}),sx:{m:0,width:1,justifyContent:"space-between"}},y.id))})})})})]},t.subheader)),e.jsx(B,{type:"submit",variant:"contained",loading:m,sx:{ml:"auto"},children:"Save changes"})]})})}const Me=g.object({oldPassword:g.string().min(1,{message:"Password is required!"}).min(6,{message:"Password must be at least 6 characters!"}),newPassword:g.string().min(1,{message:"New password is required!"}),confirmNewPassword:g.string().min(1,{message:"Confirm password is required!"})}).refine(s=>s.oldPassword!==s.newPassword,{message:"New password must be different than old password",path:["newPassword"]}).refine(s=>s.newPassword===s.confirmNewPassword,{message:"Passwords do not match!",path:["confirmNewPassword"]});function We(){const s=I(),n={oldPassword:"",newPassword:"",confirmNewPassword:""},o=D({mode:"all",resolver:V(Me),defaultValues:n}),{reset:r,handleSubmit:m,formState:{isSubmitting:p}}=o,x=m(async d=>{try{await new Promise(t=>setTimeout(t,500)),r(),F.success("Update success!"),console.info("DATA",d)}catch(t){console.error(t)}});return e.jsx(L,{methods:o,onSubmit:x,children:e.jsxs(v,{sx:{p:3,gap:3,display:"flex",flexDirection:"column"},children:[e.jsx(b.Text,{name:"oldPassword",type:s.value?"text":"password",label:"Old password",InputProps:{endAdornment:e.jsx(A,{position:"end",children:e.jsx(N,{onClick:s.onToggle,edge:"end",children:e.jsx(a,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(b.Text,{name:"newPassword",label:"New password",type:s.value?"text":"password",InputProps:{endAdornment:e.jsx(A,{position:"end",children:e.jsx(N,{onClick:s.onToggle,edge:"end",children:e.jsx(a,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})},helperText:e.jsxs(j,{component:"span",direction:"row",alignItems:"center",children:[e.jsx(a,{icon:"eva:info-fill",width:16,sx:{mr:.5}})," Password must be minimum 6+"]})}),e.jsx(b.Text,{name:"confirmNewPassword",type:s.value?"text":"password",label:"Confirm new password",InputProps:{endAdornment:e.jsx(A,{position:"end",children:e.jsx(N,{onClick:s.onToggle,edge:"end",children:e.jsx(a,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(B,{type:"submit",variant:"contained",loading:p,sx:{ml:"auto"},children:"Save changes"})]})})}const $e=[{value:"general",label:"General",icon:e.jsx(a,{icon:"solar:user-id-bold",width:24})},{value:"billing",label:"Billing",icon:e.jsx(a,{icon:"solar:bill-list-bold",width:24})},{value:"notifications",label:"Notifications",icon:e.jsx(a,{icon:"solar:bell-bing-bold",width:24})},{value:"social",label:"Social links",icon:e.jsx(a,{icon:"solar:share-bold",width:24})},{value:"security",label:"Security",icon:e.jsx(a,{icon:"ic:round-vpn-key",width:24})}];function Ve(){const s=je("general");return e.jsxs(te,{children:[e.jsx(be,{heading:"Account",links:[{name:"Dashboard",href:U.dashboard.root},{name:"User",href:U.dashboard.user.root},{name:"Account"}],sx:{mb:{xs:3,md:5}}}),e.jsx(ae,{value:s.value,onChange:s.onChange,sx:{mb:{xs:3,md:5}},children:$e.map(n=>e.jsx(le,{label:n.label,icon:n.icon,value:n.value},n.value))}),s.value==="general"&&e.jsx(Le,{}),s.value==="billing"&&e.jsx(_e,{plans:ce,cards:de,invoices:me,addressBook:xe}),s.value==="notifications"&&e.jsx(He,{}),s.value==="social"&&e.jsx(Re,{socialLinks:pe.socialLinks}),s.value==="security"&&e.jsx(We,{})]})}const Ze={title:`Account settings | Dashboard - ${he.site.name}`};function Rs(){return e.jsxs(e.Fragment,{children:[e.jsx(ue,{children:e.jsxs("title",{children:[" ",Ze.title]})}),e.jsx(Ve,{})]})}export{Rs as default};
