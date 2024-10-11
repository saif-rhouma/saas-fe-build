import{dI as B,l as N,r as d,dJ as f,dH as b,dK as m,p as n,j as t,aD as j,S as T,T as g,B as p,e as y,e8 as D}from"./index-D-ZKGqTU.js";import{C as k}from"./custom-breadcrumbs-Ce0SsF19.js";import{z as r,u as L,t as q,a as I,F as u}from"./form-provider-L0KFjUTq.js";import{u as G}from"./useMutation-DZH4G1UV.js";import"./image-CX1CYgjP.js";import"./editor-CzmUVphq.js";const M=r.object({name:r.string().min(1,{message:"Staff firstName is required!"}),permissionsList:r.string().array().nonempty({message:"At least one permission is required!"}),description:r.string()});function Q({currentPermission:s,appPermissions:a}){const c=B(),x=N(),[V,C]=d.useState(a),l=d.useMemo(()=>({name:(s==null?void 0:s.name)||"",description:(s==null?void 0:s.description)||"",permissionsList:(s==null?void 0:s.permissions.map(e=>e.slug))||[]}),[s]),h=L({resolver:q(M),defaultValues:l}),{reset:o,watch:J,setValue:R,handleSubmit:S,control:z,formState:{isSubmitting:w}}=h;d.useEffect(()=>{s&&o(l),a&&C(a)},[s,a,l,o]);const{mutate:v}=G({mutationFn:e=>f.post(b.permissionsGroup.create,e),onSuccess:()=>{m.success("New Permissions Group has been created successfully!"),c.invalidateQueries(["permissions-groups"]),o(),x.push(n.dashboard.tools.permissions)},onError:e=>{console.error(e)}}),{mutate:F}=G({mutationFn:({id:e,payload:i})=>f.patch(b.permissionsGroup.edit+e,i),onSuccess:()=>{m.success("Permissions Group updated successfully!");const{id:e}=s;c.invalidateQueries(["permissions-Group",e]),o(),x.push(n.dashboard.tools.permissions)},onError:e=>{console.error(e),m.error("Failed to edit Permissions Group. Please try again.")}}),E=S(async e=>{try{if(s!=null&&s.id){const{id:i}=s;await F({id:i,payload:e})}else await v(e)}catch(i){console.error(i)}});return t.jsxs(I,{methods:h,onSubmit:E,children:[t.jsx(j,{sx:{mb:4},children:t.jsxs(T,{spacing:4,sx:{p:3},children:[t.jsx(g,{variant:"h6",gutterBottom:!0,children:"Permissions Group Details"}),t.jsxs(p,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[t.jsx(u.Text,{label:"Name",name:"name"}),t.jsx(u.Text,{label:"Description",name:"description",multiline:!0,rows:3,inputProps:{maxLength:250}})]})]})}),t.jsxs(j,{sx:{p:4},children:[t.jsx(g,{variant:"h6",gutterBottom:!0,sx:{mb:4},children:"Permissions"}),t.jsx(p,{display:"flex",justifyContent:"center",alignItems:"center",sx:{mb:4},children:t.jsx(u.MultiCheckbox,{name:"permissionsList",options:a.map(e=>({label:e.name,value:e.slug})),sx:{display:"grid",columnGap:4,rowGap:4,gridTemplateColumns:"repeat(4, 1fr)"}})}),t.jsxs(p,{display:"flex",justifyContent:"flex-end",mt:2,children:[t.jsx(y,{type:"submit",variant:"contained",disabled:w,children:"Submit"}),t.jsx(y,{variant:"outlined",onClick:()=>o(),sx:{ml:2},children:"Cancel"})]})]})]})}function X({currentPermission:s,appPermissions:a}){return t.jsxs(D,{children:[t.jsx(k,{links:[{name:"Dashboard",href:n.dashboard.root},{name:"Permissions Groups",href:n.dashboard.staff.root},{name:"New Permissions Group"}],sx:{mb:{xs:3,md:5}}}),t.jsx(Q,{currentPermission:s,appPermissions:a})]})}export{X as P};
