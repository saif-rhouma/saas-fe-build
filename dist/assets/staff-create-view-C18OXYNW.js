import{dI as B,l as P,r as h,o as q,dJ as g,dH as j,dK as n,p as d,j as e,aD as y,S as k,T as w,B as x,w as D,I as G,e as N,e8 as M}from"./index-D9XQ5HZn.js";import{C as Q}from"./custom-breadcrumbs-CazdlgA0.js";import{z as o,u as V,t as J,a as L,F as t}from"./form-provider-CxGM2Unr.js";import{u as v}from"./useMutation-ts4flLpu.js";import"./image--crxJX70.js";import"./editor-4sPkqXXa.js";import{I as R}from"./InputAdornment-DzIVUKKm.js";const z=o.object({firstName:o.string().min(1,{message:"Staff firstName is required!"}),lastName:o.string().min(1,{message:"Staff lastName is required!"}),password:o.string().min(1,{message:"Password is required!"}).min(8,{message:"Password must be at least 8 characters!"}),email:o.string().min(1,{message:"Email is required!"}),phoneNumber:o.string().min(1,{message:"Phone Number is required!"}),permissions:o.string().array().nonempty({message:"At least one permission is required!"}),isActive:o.boolean()});function H({currentStaff:s,appPermissions:i}){const c=B(),u=P(),[K,C]=h.useState(i),r=q(),p=h.useMemo(()=>({firstName:(s==null?void 0:s.firstName)||"",lastName:(s==null?void 0:s.lastName)||"",phoneNumber:(s==null?void 0:s.phoneNumber)||"",email:(s==null?void 0:s.email)||"",password:(s==null?void 0:s.password)||"",isActive:s==null?void 0:s.isActive,permissions:(s==null?void 0:s.permissions.map(a=>a.slug))||[]}),[s]),b=V({resolver:J(z),defaultValues:p}),{reset:m,watch:O,setValue:U,handleSubmit:I,control:W,formState:{isSubmitting:F}}=b;h.useEffect(()=>{s&&m(p),i&&C(i)},[s,i,p,m]);const{mutate:E}=v({mutationFn:a=>g.post(j.staff.create,a),onSuccess:()=>{n.success("New Staff has been created successfully!"),c.invalidateQueries(["staff"]),m(),u.push(d.dashboard.staff.root)},onError:a=>{console.error(a),n.error("Failed to save staff. Please try again.")}}),{mutate:T}=v({mutationFn:({id:a,payload:l})=>g.patch(j.staff.edit+a,l),onSuccess:()=>{n.success("Staff updated successfully!");const{id:a}=s;c.invalidateQueries(["staff",a]),m(),u.push(d.dashboard.staff.root)},onError:a=>{console.error(a),n.error("Failed to edit staff. Please try again.")}}),A=I(async a=>{try{if(s!=null&&s.id){const{id:l}=s;await T({id:l,payload:a})}else await E(a)}catch(l){console.error(l)}});return e.jsxs(L,{methods:b,onSubmit:A,children:[e.jsx(y,{sx:{mb:4},children:e.jsxs(k,{spacing:4,sx:{p:3},children:[e.jsx(w,{variant:"h6",gutterBottom:!0,children:"Staff Details"}),e.jsxs(x,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[e.jsx(t.Text,{label:"First Name",name:"firstName"}),e.jsx(t.Text,{label:"Last Name",name:"lastName"}),e.jsx(t.Phone,{name:"phoneNumber",label:"Phone number"}),e.jsx(t.Text,{label:"Email",name:"email"}),e.jsx(t.Text,{name:"password",label:"Password",placeholder:"8+ characters",type:r.value?"text":"password",InputLabelProps:{shrink:!0},InputProps:{endAdornment:e.jsx(R,{position:"end",children:e.jsx(D,{onClick:r.onToggle,edge:"end",children:e.jsx(G,{icon:r.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}})]})]})}),e.jsxs(y,{sx:{p:4},children:[e.jsx(w,{variant:"h6",gutterBottom:!0,sx:{mb:4},children:"Permissions"}),e.jsx(x,{display:"flex",justifyContent:"center",alignItems:"center",sx:{mb:4},children:e.jsx(t.MultiCheckbox,{name:"permissions",options:i.map(a=>({label:a.name,value:a.slug})),sx:{display:"grid",columnGap:4,rowGap:4,gridTemplateColumns:"repeat(4, 1fr)"}})}),e.jsx(t.Switch,{name:"isActive",label:"Is Active?"}),e.jsxs(x,{display:"flex",justifyContent:"flex-end",mt:2,children:[e.jsx(N,{type:"submit",variant:"contained",disabled:F,children:"Submit"}),e.jsx(N,{variant:"outlined",onClick:()=>m(),sx:{ml:2},children:"Cancel"})]})]})]})}function ss({currentStaff:s,appPermissions:i}){return e.jsxs(M,{children:[e.jsx(Q,{links:[{name:"Dashboard",href:d.dashboard.root},{name:"Staff",href:d.dashboard.staff.root},{name:"New Staff"}],sx:{mb:{xs:3,md:5}}}),e.jsx(H,{currentStaff:s,appPermissions:i})]})}export{ss as S};
