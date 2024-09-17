import{o as G,r as a,bO as j,dN as Q,dO as y,dM as C,dP as P,p as I,j as s,aH as D,S as c,I as R,B as d,C as K,G as u,e as S}from"./index-CZcV1F_p.js";import{u as b}from"./useMutation-RCoCYUsr.js";import{P as L}from"./product-Item-button-DcFsfsVl.js";import{P as W}from"./plan-product-table-BjVIP78U.js";import{T as q}from"./TextField-D7n2_qXr.js";import{I as J}from"./InputAdornment-DsfHwWIs.js";import{D as z}from"./DatePicker-omkT4XAu.js";function se({products:l,plan:n}){const m=G(),[k,x]=a.useState(),[h,f]=a.useState(j(new Date)),[r,o]=a.useState([]),[F,p]=a.useState(l),g=Q();a.useEffect(()=>{n&&(n.product.quantity=n.quantity,o([n.product]),x(n.id),f(j(n.planDate)))},[n]);const{mutate:O}=b({mutationFn:e=>y.post(C.plan.create,e),onSuccess:async()=>{P.success("New Plan Has Been Created!")},onSettled:async()=>{await g.invalidateQueries({queryKey:["plans"]}),m.push(I.dashboard.plan.root)},onError:()=>{}}),{mutate:w}=b({mutationFn:({id:e,payload:t})=>y.patch(C.plan.edit+e,t),onSuccess:async()=>{P.success("Plan Has Been Modified!")},onSettled:async()=>{await g.invalidateQueries({queryKey:["plans"]}),m.push(I.dashboard.plan.root)},onError:e=>{console.log(e)}}),B=a.useCallback(e=>{x(e.target.value)},[]),E=a.useCallback(e=>{const t=e.target.value;t&&p(l.filter(i=>i.name.toLowerCase().indexOf(t)!==-1)),(t==null||t==="")&&p(l)},[l]),v=a.useCallback(e=>{o(t=>{const i=t.findIndex(Y=>Y.id===e.id);return i>=0?t[i].quantity+=1:t.length===0&&(e.quantity=1,t.push(e)),[...t]})},[r]),M=a.useCallback(e=>{o(t=>(t[e].quantity-=1,t[e].quantity===0&&t.splice(e,1),[...t]))},[r]),N=a.useCallback(e=>{o(t=>(t[e].quantity+=1,[...t]))},[r]),T=a.useCallback(e=>{o(t=>(t.splice(e,1),[...t]))},[r]),A=s.jsx(D,{children:s.jsxs(c,{spacing:4,sx:{p:3},children:[s.jsx(q,{fullWidth:!0,maxWidth:"xs",placeholder:"Search customer or order number...",InputProps:{startAdornment:s.jsx(J,{position:"start",children:s.jsx(R,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:E}),s.jsx(d,{spacing:2,gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:F.map(e=>s.jsx(L,{payload:e,handleClick:v,productName:e==null?void 0:e.name,image:K.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))})]})}),H=s.jsx(D,{children:s.jsxs(c,{spacing:2,sx:{p:3},children:[s.jsxs(d,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[s.jsx(q,{label:"Plan ID",value:k,onChange:B,sx:{mt:2}}),s.jsx(z,{label:"Date",sx:{mt:2},value:h,onChange:e=>{f(e)}})]}),s.jsx(W,{products:r,onDecrease:M,onIncrease:N,removeItem:T}),s.jsx(d,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:s.jsxs(d,{display:"flex",gap:2,height:50,children:[s.jsx(S,{variant:"contained",onClick:()=>{if(r.length){const e={planDate:h.format("YYYY-MM-DD"),productId:r[0].id,quantity:r[0].quantity};n?w({id:n.id,payload:e}):O(e)}},children:n?"Save Changes":"Save"}),s.jsx(S,{variant:"outlined",onClick:()=>o([]),children:"Clear All"})]})})]})});return s.jsxs(u,{container:!0,spacing:3,children:[s.jsx(u,{xs:12,md:4,children:s.jsx(c,{children:A})}),s.jsx(u,{xs:12,md:8,children:s.jsx(c,{children:H})})]})}export{se as P};
