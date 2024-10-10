import{dI as R,l as V,r as d,o as z,dJ as v,dH as y,dK as r,p,j as o,aD as N,S as J,T as I,B as b,w as H,I as K,bR as G,e as F,e8 as L}from"./index-qTpQGZSM.js";import{C as $}from"./custom-breadcrumbs-BGUga5Db.js";import{z as m,u as O,t as U,a as W,F as l}from"./form-provider-MVJiOuzj.js";import{u as A}from"./useMutation-DwwxkYn0.js";import"./image-FClgpgDx.js";import"./editor-Cm_HovbX.js";import{I as X}from"./InputAdornment-AOuf2E7W.js";const Y=m.object({firstName:m.string().min(1,{message:"Staff firstName is required!"}),password:m.string().min(1,{message:"Password is required!"}).min(8,{message:"Password must be at least 8 characters!"}),email:m.string().min(1,{message:"Email is required!"}),permissions:m.string().array().nonempty({message:"At least one permission is required!"}),isActive:m.boolean(),permissionsGroup:m.number()});function Z({currentStaff:s,appPermissions:a,appPermissionsGroup:t}){const j=R(),g=V(),[_,E]=d.useState(a),[T,w]=d.useState(!1),h=z(),x=d.useMemo(()=>({firstName:(s==null?void 0:s.firstName)||"",lastName:(s==null?void 0:s.lastName)||"",phoneNumber:(s==null?void 0:s.phoneNumber)||"",email:(s==null?void 0:s.email)||"",password:(s==null?void 0:s.password)||"",isActive:(s==null?void 0:s.isActive)===void 0?!0:s==null?void 0:s.isActive,permissions:(s==null?void 0:s.permissions.map(e=>e.slug))||[],permissionsGroup:(s==null?void 0:s.permissionsGroup)||null}),[s]),C=O({resolver:U(Y),defaultValues:x}),{reset:n,watch:B,setValue:u,handleSubmit:k,control:S,formState:{isSubmitting:P}}=C;B(),d.useEffect(()=>{s&&n(x),a&&E(a)},[s,a,x,n]);const{mutate:q}=A({mutationFn:e=>v.post(y.staff.create,e),onSuccess:()=>{r.success("New Staff has been created successfully!"),j.invalidateQueries(["staff"]),n(),g.push(p.dashboard.staff.root)},onError:e=>{console.error(e),r.error("Failed to save staff. Please try again.")}}),{mutate:D}=A({mutationFn:({id:e,payload:i})=>v.patch(y.staff.edit+e,i),onSuccess:()=>{r.success("Staff updated successfully!");const{id:e}=s;j.invalidateQueries(["staff",e]),n(),g.push(p.dashboard.staff.root)},onError:e=>{console.error(e),r.error("Failed to edit staff. Please try again.")}}),M=k(async e=>{e.permissionsGroup!==0&&delete e.permissions;try{if(s!=null&&s.id){const{id:i}=s;await D({id:i,payload:e})}else await q(e)}catch(i){console.error(i)}});return o.jsxs(W,{methods:C,onSubmit:M,children:[o.jsx(N,{sx:{mb:4},children:o.jsxs(J,{spacing:4,sx:{p:3},children:[o.jsx(I,{variant:"h6",gutterBottom:!0,children:"Staff Details"}),o.jsxs(b,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[o.jsx(l.Text,{label:"First Name",name:"firstName"}),o.jsx(l.Text,{label:"Email",name:"email"}),o.jsx(l.Phone,{name:"phoneNumber",label:"Phone number"}),o.jsx(l.Text,{name:"password",label:"Password",placeholder:"8+ characters",type:h.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:o.jsx(X,{position:"end",children:o.jsx(H,{onClick:h.onToggle,edge:"end",children:o.jsx(K,{icon:h.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),o.jsxs(l.Select,{name:"permissionsGroup",label:"Choose Permissions Group",sx:{width:420,textTransform:"capitalize"},onChange:e=>{const{value:i}=e.target;if(i){const Q=t.find(c=>c.id===i);u("permissions",Q.permissions.map(c=>c.slug)),u("permissionsGroup",i),w(!1)}},children:[t.map(e=>o.jsx(G,{value:e.id,children:`${e==null?void 0:e.name}`},e.id)),T&&o.jsx(G,{value:0,children:"Custom"})]})]})]})}),o.jsxs(N,{sx:{p:4},children:[o.jsx(I,{variant:"h6",gutterBottom:!0,sx:{mb:4},children:"Permissions"}),o.jsx(b,{display:"flex",justifyContent:"center",alignItems:"center",sx:{mb:4},children:o.jsx(l.MultiCheckbox,{name:"permissions",onClick:()=>{w(!0),u("permissionsGroup",0)},options:a.map(e=>({label:e.name,value:e.slug})),sx:{display:"grid",columnGap:4,rowGap:4,gridTemplateColumns:"repeat(4, 1fr)"}})}),s&&o.jsx(l.Switch,{name:"isActive",label:"Is Active?"}),o.jsxs(b,{display:"flex",justifyContent:"flex-end",mt:2,children:[o.jsx(F,{type:"submit",variant:"contained",disabled:P,children:"Submit"}),o.jsx(F,{variant:"outlined",onClick:()=>n(),sx:{ml:2},children:"Cancel"})]})]})]})}function ls({currentStaff:s,appPermissions:a,appPermissionsGroup:t}){return o.jsxs(L,{children:[o.jsx($,{links:[{name:"Dashboard",href:p.dashboard.root},{name:"Staff",href:p.dashboard.staff.root},{name:"New Staff"}],sx:{mb:{xs:3,md:5}}}),o.jsx(Z,{currentStaff:s,appPermissions:a,appPermissionsGroup:t})]})}export{ls as S};
