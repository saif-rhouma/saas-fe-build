import{dn as Q,g as z,r as d,i as R,dp as w,dm as y,dq as r,p as h,j as o,cY as N,S as H,T as I,B as b,l as J,I as L,aS as F,e as A,dP as Y}from"./index-7GQe5F-6.js";import{C as $}from"./custom-breadcrumbs-CJqbGMlg.js";import{z as l,u as K,t as O,a as U,F as n}from"./form-provider-DLuA30a-.js";import{h as W}from"./utils-CfQJQMjB.js";import{u as E}from"./useMutation-DOqshPAY.js";import"./image-qFJcDDNa.js";import"./editor-H098rw4w.js";import{s as X}from"./schema-helper-bWDFlrUC.js";import{I as Z}from"./InputAdornment-C3ScqT6C.js";const _=l.object({firstName:l.string().min(1,{message:"Staff firstName is required!"}),password:l.string().min(1,{message:"Password is required!"}).min(8,{message:"Password must be at least 8 characters!"}),email:l.string().min(1,{message:"Email is required!"}),phoneNumber:X.phoneNumber({isValidPhoneNumber:W}),permissions:l.string().array().nonempty({message:"At least one permission is required!"}),isActive:l.boolean(),permissionsGroup:l.number()});function S({currentStaff:s,appPermissions:a,appPermissionsGroup:m}){const j=Q(),g=z(),[f,T]=d.useState(a),[B,C]=d.useState(!1),p=R(),x=d.useMemo(()=>({firstName:(s==null?void 0:s.firstName)||"",lastName:(s==null?void 0:s.lastName)||"",phoneNumber:(s==null?void 0:s.phoneNumber)||"",email:(s==null?void 0:s.email)||"",password:(s==null?void 0:s.password)||"",isActive:(s==null?void 0:s.isActive)===void 0?!0:s==null?void 0:s.isActive,permissions:(s==null?void 0:s.permissions.map(e=>e.slug))||[],permissionsGroup:(s==null?void 0:s.permissionsGroup)||null}),[s]),v=K({resolver:O(_),defaultValues:x}),{reset:t,watch:k,setValue:u,handleSubmit:G,control:ss,formState:{isSubmitting:q}}=v;k(),d.useEffect(()=>{s&&t(x),a&&T(a)},[s,a,x,t]);const{mutate:M}=E({mutationFn:e=>w.post(y.staff.create,e),onSuccess:()=>{r.success("New Staff has been created successfully!"),j.invalidateQueries(["staff"]),t(),g.push(h.dashboard.staff.root)},onError:e=>{console.error(e),r.error("Failed to save staff. Please try again.")}}),{mutate:P}=E({mutationFn:({id:e,payload:i})=>w.patch(y.staff.edit+e,i),onSuccess:()=>{r.success("Staff updated successfully!");const{id:e}=s;j.invalidateQueries(["staff",e]),t(),g.push(h.dashboard.staff.root)},onError:e=>{console.error(e),r.error("Failed to edit staff. Please try again.")}}),V=G(async e=>{e.permissionsGroup!==0&&delete e.permissions;try{if(s!=null&&s.id){const{id:i}=s;await P({id:i,payload:e})}else await M(e)}catch(i){console.error(i)}});return o.jsxs(U,{methods:v,onSubmit:V,children:[o.jsx(N,{sx:{mb:4},children:o.jsxs(H,{spacing:4,sx:{p:3},children:[o.jsx(I,{variant:"h6",gutterBottom:!0,children:"Staff Details"}),o.jsxs(b,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[o.jsx(n.Text,{label:"First Name",name:"firstName"}),o.jsx(n.Text,{label:"Email",name:"email"}),o.jsx(n.Phone,{name:"phoneNumber",label:"Phone number"}),o.jsx(n.Text,{name:"password",label:"Password",placeholder:"8+ characters",type:p.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:o.jsx(Z,{position:"end",children:o.jsx(J,{onClick:p.onToggle,edge:"end",children:o.jsx(L,{icon:p.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(m==null?void 0:m.length)>0&&o.jsxs(n.Select,{name:"permissionsGroup",label:"Choose Permissions Group",sx:{width:420,textTransform:"capitalize"},onChange:e=>{const{value:i}=e.target;if(i){const D=m.find(c=>c.id===i);u("permissions",D.permissions.map(c=>c.slug)),u("permissionsGroup",i),C(!1)}},children:[m.map(e=>o.jsx(F,{value:e.id,children:`${e==null?void 0:e.name}`},e.id)),B&&o.jsx(F,{value:0,children:"Custom"})]})]})]})}),o.jsxs(N,{sx:{p:4},children:[o.jsx(I,{variant:"h6",gutterBottom:!0,sx:{mb:4},children:"Permissions"}),o.jsx(b,{display:"flex",justifyContent:"center",alignItems:"center",sx:{mb:4},children:o.jsx(n.MultiCheckbox,{name:"permissions",onClick:()=>{C(!0),u("permissionsGroup",0)},options:a.map(e=>({label:e.name,value:e.slug})),sx:{display:"grid",columnGap:4,rowGap:4,gridTemplateColumns:"repeat(4, 1fr)"}})}),s&&o.jsx(n.Switch,{name:"isActive",label:"Is Active?"}),o.jsxs(b,{display:"flex",justifyContent:"flex-end",mt:2,children:[o.jsx(A,{type:"submit",variant:"contained",disabled:q,children:"Submit"}),o.jsx(A,{variant:"outlined",onClick:()=>t(),sx:{ml:2},children:"Cancel"})]})]})]})}function rs({currentStaff:s,appPermissions:a,appPermissionsGroup:m}){return o.jsxs(Y,{children:[o.jsx($,{links:[{name:"Dashboard",href:h.dashboard.root},{name:"Staff",href:h.dashboard.staff.root},{name:"New Staff"}],sx:{mb:{xs:3,md:5}}}),o.jsx(S,{currentStaff:s,appPermissions:a,appPermissionsGroup:m})]})}export{rs as S};
