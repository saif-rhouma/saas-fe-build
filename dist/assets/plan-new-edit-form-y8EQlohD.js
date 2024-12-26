import{g as Q,r as t,aU as j,dn as G,dp as y,dm as I,dq as b,p as w,j as s,cY as D,S as d,I as K,B as u,C as L,cV as m,e as S}from"./index-BEaGYMEI.js";import{u as q}from"./useMutation-CD7lT4vI.js";import{u as W}from"./use-table-DsQxT_g8.js";import{P as J}from"./product-Item-button-CoLt0Smh.js";import{C as U}from"./component-pagination-custom-BstsPM_m.js";import{P as V}from"./plan-product-table-CMBw1J53.js";import{T as k}from"./TextField-CIxpyOlN.js";import{I as z}from"./InputAdornment-CGsQ7T7u.js";import{D as X}from"./DatePicker-CrD84yY4.js";function ie({products:l,plan:n}){const r=W({defaultRowsPerPage:6}),h=Q(),[F,g]=t.useState(),[x,f]=t.useState(j(new Date)),[i,o]=t.useState([]),[P,p]=t.useState(l),C=G();t.useEffect(()=>{n&&(n.product.quantity=n.quantity,o([n.product]),g(n.id),f(j(n.planDate)))},[n]);const{mutate:R}=q({mutationFn:e=>y.post(I.plan.create,e),onSuccess:async()=>{b.success("New Plan Has Been Created!")},onSettled:async()=>{await C.invalidateQueries({queryKey:["plans"]}),h.push(w.dashboard.plan.root)},onError:()=>{}}),{mutate:B}=q({mutationFn:({id:e,payload:a})=>y.patch(I.plan.edit+e,a),onSuccess:async()=>{b.success("Plan Has Been Modified!")},onSettled:async()=>{await C.invalidateQueries({queryKey:["plans"]}),h.push(w.dashboard.plan.root)},onError:e=>{console.log(e)}}),E=t.useCallback(e=>{g(e.target.value)},[]),O=t.useCallback(e=>{const a=e.target.value;a&&p(l.filter(c=>c.name.toLowerCase().indexOf(a)!==-1)),(a==null||a==="")&&p(l)},[l]),T=t.useCallback(e=>{o(a=>{const c=a.findIndex(H=>H.id===e.id);return c>=0?a[c].quantity+=1:a.length===0&&(e.quantity=1,a.push(e)),[...a]})},[i]),v=t.useCallback(e=>{o(a=>(a[e].quantity-=1,a[e].quantity===0&&a.splice(e,1),[...a]))},[i]),Y=t.useCallback(e=>{o(a=>(a[e].quantity+=1,[...a]))},[i]),A=t.useCallback(e=>{o(a=>(a.splice(e,1),[...a]))},[i]),M=s.jsx(D,{children:s.jsxs(d,{spacing:4,sx:{p:3},children:[s.jsx(k,{fullWidth:!0,maxWidth:"xs",placeholder:"Search customer or order number...",InputProps:{startAdornment:s.jsx(z,{position:"start",children:s.jsx(K,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:O}),s.jsx(u,{spacing:2,gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:P.slice(r.page*r.rowsPerPage,r.page*r.rowsPerPage+r.rowsPerPage).map(e=>s.jsx(J,{payload:e,handleClick:T,productName:e==null?void 0:e.name,image:L.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),s.jsx(U,{page:r.page,count:P.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:r.onChangePage,onRowsPerPageChange:r.onChangeRowsPerPage})]})}),N=s.jsx(D,{children:s.jsxs(d,{spacing:2,sx:{p:3},children:[s.jsxs(u,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[s.jsx(k,{label:"Plan ID",value:F,onChange:E,sx:{mt:2}}),s.jsx(X,{label:"Date",sx:{mt:2},value:x,onChange:e=>{f(e)}})]}),s.jsx(V,{products:i,onDecrease:v,onIncrease:Y,removeItem:A}),s.jsx(u,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:s.jsxs(u,{display:"flex",gap:2,height:50,children:[s.jsx(S,{variant:"contained",onClick:()=>{if(i.length){const e={planDate:x.format("YYYY-MM-DD"),productId:i[0].id,quantity:i[0].quantity};n?B({id:n.id,payload:e}):R(e)}},children:n?"Save Changes":"Save"}),s.jsx(S,{variant:"outlined",onClick:()=>o([]),children:"Clear All"})]})})]})});return s.jsxs(m,{container:!0,spacing:3,children:[s.jsx(m,{xs:12,md:4,children:s.jsx(d,{children:M})}),s.jsx(m,{xs:12,md:8,children:s.jsx(d,{children:N})})]})}export{ie as P};
