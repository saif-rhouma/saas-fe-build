import{dn as B,g as N,r as d,dp as f,dm as b,dq as m,p as r,j as t,cY as j,S as T,T as g,B as p,e as y,dP as k}from"./index-DSZ8-SnN.js";import{C as q}from"./custom-breadcrumbs-D_ovYyL8.js";import{z as n,u as D,t as L,a as M,F as u}from"./form-provider-Cfa9nJ2G.js";import{u as G}from"./useMutation-DusrxMaX.js";import"./image-CnfTgJRa.js";import"./editor-C8mFRUZ0.js";const Q=n.object({name:n.string().min(1,{message:"Staff firstName is required!"}),permissionsList:n.string().array().nonempty({message:"At least one permission is required!"}),description:n.string()});function V({currentPermission:s,appPermissions:a}){const c=B(),x=N(),[I,C]=d.useState(a),l=d.useMemo(()=>({name:(s==null?void 0:s.name)||"",description:(s==null?void 0:s.description)||"",permissionsList:(s==null?void 0:s.permissions.map(e=>e.slug))||[]}),[s]),h=D({resolver:L(Q),defaultValues:l}),{reset:o,watch:R,setValue:z,handleSubmit:S,control:A,formState:{isSubmitting:w}}=h;d.useEffect(()=>{s&&o(l),a&&C(a)},[s,a,l,o]);const{mutate:v}=G({mutationFn:e=>f.post(b.permissionsGroup.create,e),onSuccess:()=>{m.success("New Permissions Group has been created successfully!"),c.invalidateQueries(["permissions-groups"]),o(),x.push(r.dashboard.tools.permissions)},onError:e=>{console.error(e)}}),{mutate:F}=G({mutationFn:({id:e,payload:i})=>f.patch(b.permissionsGroup.edit+e,i),onSuccess:()=>{m.success("Permissions Group updated successfully!");const{id:e}=s;c.invalidateQueries(["permissions-Group",e]),o(),x.push(r.dashboard.tools.permissions)},onError:e=>{console.error(e),m.error("Failed to edit Permissions Group. Please try again.")}}),E=S(async e=>{try{if(s!=null&&s.id){const{id:i}=s;await F({id:i,payload:e})}else await v(e)}catch(i){console.error(i)}});return t.jsxs(M,{methods:h,onSubmit:E,children:[t.jsx(j,{sx:{mb:4},children:t.jsxs(T,{spacing:4,sx:{p:3},children:[t.jsx(g,{variant:"h6",gutterBottom:!0,children:"Permissions Group Details"}),t.jsxs(p,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[t.jsx(u.Text,{label:"Name",name:"name"}),t.jsx(u.Text,{label:"Description",name:"description",multiline:!0,rows:3,inputProps:{maxLength:250}})]})]})}),t.jsxs(j,{sx:{p:4},children:[t.jsx(g,{variant:"h6",gutterBottom:!0,sx:{mb:4},children:"Permissions"}),t.jsx(p,{display:"flex",justifyContent:"center",alignItems:"center",sx:{mb:4},children:t.jsx(u.MultiCheckbox,{name:"permissionsList",options:a.map(e=>({label:e.name,value:e.slug})),sx:{display:"grid",columnGap:4,rowGap:4,gridTemplateColumns:"repeat(4, 1fr)"}})}),t.jsxs(p,{display:"flex",justifyContent:"flex-end",mt:2,children:[t.jsx(y,{type:"submit",variant:"contained",disabled:w,children:"Submit"}),t.jsx(y,{variant:"outlined",onClick:()=>o(),sx:{ml:2},children:"Cancel"})]})]})]})}function W({currentPermission:s,appPermissions:a}){return t.jsxs(k,{children:[t.jsx(q,{links:[{name:"Dashboard",href:r.dashboard.root},{name:"Permissions Groups",href:r.dashboard.staff.root},{name:"New Permissions Group"}],sx:{mb:{xs:3,md:5}}}),t.jsx(V,{currentPermission:s,appPermissions:a})]})}export{W as P};
