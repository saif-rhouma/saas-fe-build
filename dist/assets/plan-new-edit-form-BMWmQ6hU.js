import{l as G,r as a,bU as j,dI as K,dJ as y,dH as C,dK as P,p as I,j as s,aD as D,S as d,I as Q,B as c,C as R,G as u,e as S}from"./index-Cq03K-HC.js";import{u as b}from"./useMutation-Dp0rVztm.js";import{P as J}from"./product-Item-button-9ZeFIKBl.js";import{P as L}from"./plan-product-table-BCg58bpA.js";import{T as q}from"./TextField-BNZ3YpVQ.js";import{I as W}from"./InputAdornment-B7jHbOut.js";import{D as U}from"./DatePicker-C0kjDQAX.js";function te({products:l,plan:n}){const m=G(),[k,x]=a.useState(),[h,f]=a.useState(j(new Date)),[r,i]=a.useState([]),[F,p]=a.useState(l),g=K();a.useEffect(()=>{n&&(n.product.quantity=n.quantity,i([n.product]),x(n.id),f(j(n.planDate)))},[n]);const{mutate:w}=b({mutationFn:e=>y.post(C.plan.create,e),onSuccess:async()=>{P.success("New Plan Has Been Created!")},onSettled:async()=>{await g.invalidateQueries({queryKey:["plans"]}),m.push(I.dashboard.plan.root)},onError:()=>{}}),{mutate:B}=b({mutationFn:({id:e,payload:t})=>y.patch(C.plan.edit+e,t),onSuccess:async()=>{P.success("Plan Has Been Modified!")},onSettled:async()=>{await g.invalidateQueries({queryKey:["plans"]}),m.push(I.dashboard.plan.root)},onError:e=>{console.log(e)}}),E=a.useCallback(e=>{x(e.target.value)},[]),O=a.useCallback(e=>{const t=e.target.value;t&&p(l.filter(o=>o.name.toLowerCase().indexOf(t)!==-1)),(t==null||t==="")&&p(l)},[l]),v=a.useCallback(e=>{i(t=>{const o=t.findIndex(Y=>Y.id===e.id);return o>=0?t[o].quantity+=1:t.length===0&&(e.quantity=1,t.push(e)),[...t]})},[r]),T=a.useCallback(e=>{i(t=>(t[e].quantity-=1,t[e].quantity===0&&t.splice(e,1),[...t]))},[r]),A=a.useCallback(e=>{i(t=>(t[e].quantity+=1,[...t]))},[r]),H=a.useCallback(e=>{i(t=>(t.splice(e,1),[...t]))},[r]),M=s.jsx(D,{children:s.jsxs(d,{spacing:4,sx:{p:3},children:[s.jsx(q,{fullWidth:!0,maxWidth:"xs",placeholder:"Search customer or order number...",InputProps:{startAdornment:s.jsx(W,{position:"start",children:s.jsx(Q,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:O}),s.jsx(c,{spacing:2,gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:F.map(e=>s.jsx(J,{payload:e,handleClick:v,productName:e==null?void 0:e.name,image:R.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))})]})}),N=s.jsx(D,{children:s.jsxs(d,{spacing:2,sx:{p:3},children:[s.jsxs(c,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[s.jsx(q,{label:"Plan ID",value:k,onChange:E,sx:{mt:2}}),s.jsx(U,{label:"Date",sx:{mt:2},value:h,onChange:e=>{f(e)}})]}),s.jsx(L,{products:r,onDecrease:T,onIncrease:A,removeItem:H}),s.jsx(c,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:s.jsxs(c,{display:"flex",gap:2,height:50,children:[s.jsx(S,{variant:"contained",onClick:()=>{if(r.length){const e={planDate:h.format("YYYY-MM-DD"),productId:r[0].id,quantity:r[0].quantity};n?B({id:n.id,payload:e}):w(e)}},children:n?"Save Changes":"Save"}),s.jsx(S,{variant:"outlined",onClick:()=>i([]),children:"Clear All"})]})})]})});return s.jsxs(u,{container:!0,spacing:3,children:[s.jsx(u,{xs:12,md:4,children:s.jsx(d,{children:M})}),s.jsx(u,{xs:12,md:8,children:s.jsx(d,{children:N})})]})}export{te as P};
