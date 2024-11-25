import{dn as $,g as H,r as t,i as J,dp as N,dm as I,dq as x,p as h,j as e,cY as A,S as L,T as g,B as r,l as Y,I as E,aS as F,e as G,dP as K}from"./index-CSsjSOSC.js";import{C as O}from"./custom-breadcrumbs-BtGY489d.js";import{z as m,u as U,t as W,a as X,F as l}from"./form-provider-RuHYmeCy.js";import{h as Z}from"./utils-DfB3ukDY.js";import{u as T}from"./useMutation-YcdpOWmR.js";import"./image-1sagoi-E.js";import"./editor-DkTmHMBN.js";import{s as _}from"./schema-helper-9F4NFULp.js";import{I as f}from"./InputAdornment-C9j2zz_S.js";import{A as S,a as ss,b as es}from"./AccordionSummary-CYXTdqAk.js";const is=m.object({firstName:m.string().min(1,{message:"Staff firstName is required!"}),password:m.string().min(1,{message:"Password is required!"}).min(8,{message:"Password must be at least 8 characters!"}),email:m.string().min(1,{message:"Email is required!"}),phoneNumber:_.phoneNumber({isValidPhoneNumber:Z}),permissions:m.string().array().nonempty({message:"At least one permission is required!"}),isActive:m.boolean(),permissionsGroup:m.number()});function os({currentStaff:s,appPermissions:a,appPermissionsGroup:n}){const C=$(),v=H(),[as,k]=t.useState(a),[B,c]=t.useState(!1),u=J(),b=t.useMemo(()=>({firstName:(s==null?void 0:s.firstName)||"",lastName:(s==null?void 0:s.lastName)||"",phoneNumber:(s==null?void 0:s.phoneNumber)||"",email:(s==null?void 0:s.email)||"",password:(s==null?void 0:s.password)||"",isActive:(s==null?void 0:s.isActive)===void 0?!0:s==null?void 0:s.isActive,permissions:(s==null?void 0:s.permissions.map(i=>i.slug))||[],permissionsGroup:(s==null?void 0:s.permissionsGroup)||null}),[s]),w=U({resolver:W(is),defaultValues:b}),{reset:d,watch:q,setValue:p,handleSubmit:M,control:ls,formState:{isSubmitting:D}}=w;q(),t.useEffect(()=>{s&&d(b),a&&k(a)},[s,a,b,d]);const{mutate:P}=T({mutationFn:i=>N.post(I.staff.create,i),onSuccess:()=>{x.success("New Staff has been created successfully!"),C.invalidateQueries(["staff"]),d(),v.push(h.dashboard.staff.root)},onError:i=>{console.error(i),x.error("Failed to save staff. Please try again.")}}),{mutate:V}=T({mutationFn:({id:i,payload:o})=>N.patch(I.staff.edit+i,o),onSuccess:()=>{x.success("Staff updated successfully!");const{id:i}=s;C.invalidateQueries(["staff",i]),d(),v.push(h.dashboard.staff.root)},onError:i=>{console.error(i),x.error("Failed to edit staff. Please try again.")}}),Q=M(async i=>{i.permissionsGroup!==0&&delete i.permissions;try{if(s!=null&&s.id){const{id:o}=s;await V({id:o,payload:i})}else await P(i)}catch(o){console.error(o)}}),[y,R]=t.useState(!s);return e.jsxs(X,{methods:w,onSubmit:Q,children:[e.jsx(A,{sx:{mb:4},children:e.jsxs(L,{spacing:4,sx:{p:3},children:[e.jsx(g,{variant:"h6",gutterBottom:!0,children:"Staff Details"}),e.jsxs(r,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[e.jsx(l.Text,{label:"First Name",name:"firstName"}),e.jsx(l.Text,{label:"Email",name:"email"}),e.jsx(l.Phone,{name:"phoneNumber",label:"Phone number"}),e.jsx(l.Text,{name:"password",label:"Password",placeholder:"8+ characters",type:u.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(f,{position:"end",children:e.jsx(Y,{onClick:u.onToggle,edge:"end",children:e.jsx(E,{icon:u.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(n==null?void 0:n.length)>0&&e.jsxs(l.Select,{name:"permissionsGroup",label:"Choose Permissions Group",sx:{width:420,textTransform:"capitalize"},onChange:i=>{const{value:o}=i.target;if(o){const z=n.find(j=>j.id===o);p("permissions",z.permissions.map(j=>j.slug)),p("permissionsGroup",o),c(!1)}},children:[n.map(i=>e.jsx(F,{value:i.id,children:`${i==null?void 0:i.name}`},i.id)),B&&e.jsx(F,{value:0,children:"Custom"})]})]})]})}),e.jsxs(A,{sx:{p:4},children:[s?e.jsx(r,{sx:{borderRadius:1,overflow:"hidden",border:i=>`solid 1px ${i.vars.palette.divider}`,mb:1},children:e.jsxs(S,{defaultExpanded:s,expanded:y,onChange:()=>{R(!y)},children:[e.jsx(ss,{expandIcon:e.jsx(E,{icon:"eva:arrow-ios-downward-fill"}),children:e.jsx(g,{variant:"subtitle1",children:"Customs Permissions"})}),e.jsx(es,{children:e.jsx(r,{display:"flex",justifyContent:"center",alignItems:"center",sx:{mb:2},children:e.jsx(l.MultiCheckbox,{name:"permissions",onClick:()=>{c(!0),p("permissionsGroup",0)},options:a.map(i=>({label:i.name,value:i.slug})),sx:{display:"grid",columnGap:4,rowGap:4,gridTemplateColumns:"repeat(4, 1fr)"}})})})]})}):e.jsxs(e.Fragment,{children:[e.jsx(g,{variant:"h6",gutterBottom:!0,sx:{mb:4},children:"Permissions"}),e.jsx(r,{display:"flex",justifyContent:"center",alignItems:"center",sx:{mb:4},children:e.jsx(l.MultiCheckbox,{name:"permissions",onClick:()=>{c(!0),p("permissionsGroup",0)},options:a.map(i=>({label:i.name,value:i.slug})),sx:{display:"grid",columnGap:4,rowGap:4,gridTemplateColumns:"repeat(4, 1fr)"}})})]}),s&&e.jsx(l.Switch,{name:"isActive",label:"Is Active?"}),e.jsxs(r,{display:"flex",justifyContent:"flex-end",mt:2,children:[e.jsx(G,{type:"submit",variant:"contained",disabled:D,children:"Submit"}),e.jsx(G,{variant:"outlined",onClick:()=>d(),sx:{ml:2},children:"Cancel"})]})]})]})}function bs({currentStaff:s,appPermissions:a,appPermissionsGroup:n}){return e.jsxs(K,{children:[e.jsx(O,{links:[{name:"Dashboard",href:h.dashboard.root},{name:"Staff",href:h.dashboard.staff.root},{name:"New Staff"}],sx:{mb:{xs:3,md:5}}}),e.jsx(os,{currentStaff:s,appPermissions:a,appPermissionsGroup:n})]})}export{bs as S};
