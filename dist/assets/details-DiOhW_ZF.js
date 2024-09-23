import{j as t,aF as D,S as r,B as o,aL as C,du as S,e as f,I as y,dB as k,r as n,o as w,dL as B,p as x,eb as v,G as h,dM as j,dK as l,dN as I,ef as q,H as L,C as R}from"./index-C-IhHuTJ.js";import{u as E,E as T}from"./error-block-BR6CrtTz.js";import{u as F}from"./use-params-CE8XRVYz.js";import{u as O}from"./useMutation-CsQJW4rY.js";import{C as Q}from"./custom-breadcrumbs-uFAKtVA_.js";import{P as H}from"./plan-product-table-C1PqAmbS.js";import{C as K}from"./CardHeader-CR7Gf6oG.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./table-head-custom-c1vpDJbN.js";import"./TableCell-YKx_Gzup.js";import"./Checkbox-OM-b9iKh.js";import"./incrementer-button-DdfFaMBt.js";function $({plan:s,handleViewOrder:e}){var d,a;return t.jsxs(D,{children:[t.jsx(K,{title:"Details"}),t.jsxs(r,{direction:"row",justifyContent:"space-between",sx:{p:3,typography:"body2"},children:[t.jsxs(o,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[t.jsx(r,{direction:"row",sx:{typography:"subtitle2",marginBottom:1},children:t.jsx("div",{children:"Plan Details"})}),t.jsxs(o,{sx:{color:"text.secondary"},children:["Plan ID: #PLN-",s==null?void 0:s.id]}),t.jsxs(o,{sx:{color:"text.secondary"},children:["Plan Date: ",C(s==null?void 0:s.planDate)]})]}),t.jsxs(o,{flexDirection:"column",gap:.5,sx:{display:"flex",width:"100%",p:1,borderRight:i=>`dashed 2px ${i.vars.palette.background.neutral}`,borderLeft:i=>`dashed 2px ${i.vars.palette.background.neutral}`},children:[t.jsx(r,{display:"flex",justifyContent:"center",alignItems:"center",sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:t.jsx("div",{children:"Laundry Saas POS"})}),t.jsxs(o,{sx:{color:"text.secondary"},children:["Quantity : ",s==null?void 0:s.quantity]})]}),t.jsxs(o,{flexDirection:"column",alignItems:"center",sx:{p:1,display:"flex",width:"100%"},children:[t.jsxs(r,{display:"flex",alignItems:"center",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:[t.jsx("div",{children:"Plan Status"}),t.jsx(S,{variant:"soft",color:(s==null?void 0:s.status)==="Ready"&&"success"||(s==null?void 0:s.status)==="Pending"&&"info"||(s==null?void 0:s.status)==="ProcessingA"&&"warning"||(s==null?void 0:s.status)==="ProcessingB"&&"error"||"default",children:s==null?void 0:s.status})]}),((d=s==null?void 0:s.order)==null?void 0:d.id)&&t.jsx(r,{children:t.jsxs(f,{variant:"contained",size:"small",startIcon:t.jsx(y,{icon:"heroicons-outline:external-link"}),onClick:()=>{const{id:i}=s==null?void 0:s.order;i&&e(i)},children:["Related to Order: #ORD-",(a=s==null?void 0:s.order)==null?void 0:a.id]})})]})]}),t.jsx(k,{children:t.jsx(o,{fullWidth:!0,alignItems:"center",sx:{p:3,borderBottom:i=>`dashed 2px ${i.vars.palette.background.neutral}`},children:t.jsx(H,{products:s==null?void 0:s.product,quantity:s==null?void 0:s.quantity})})})]})}function A({currentPlan:s}){const[e,d]=n.useState(s),a=w();n.useEffect(()=>{d(s),u(!(s!=null&&s.isTransferred)&&(s==null?void 0:s.status)==="Ready")},[s]);const[i,u]=n.useState(!(s!=null&&s.isTransferred)&&(s==null?void 0:s.status)==="Ready"),m=B(),{mutate:g}=O({mutationFn:c=>j.post(l.plan.transferToStock+c),onSuccess:async()=>{I.success("Product has been transferred successfully to Stock!"),u(()=>!i)},onSettled:async()=>{const{id:c}=e;await m.invalidateQueries({queryKey:["plans"]}),await m.invalidateQueries({queryKey:["plan",c]})},onError:()=>{}}),b=n.useCallback(c=>{a.push(x.dashboard.order.details(c))},[a]);return t.jsxs(v,{children:[t.jsx(Q,{links:[{name:"Dashboard",href:x.dashboard.root},{name:"Plan",href:x.dashboard.plan.root},{name:"Plan Details"}],sx:{mb:{xs:3,md:5}},action:i&&t.jsx(f,{onClick:async()=>{g(e.id)},variant:"contained",startIcon:t.jsx(y,{icon:"solar:home-add-bold"}),children:"Transfer To Stock"})}),t.jsx(h,{container:!0,spacing:3,children:t.jsx(h,{xs:12,md:12,children:t.jsx(r,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:t.jsx($,{items:e==null?void 0:e.items,plan:e,taxes:e==null?void 0:e.taxes,shipping:e==null?void 0:e.shipping,discount:e==null?void 0:e.discount,subtotal:e==null?void 0:e.subtotal,totalAmount:e==null?void 0:e.totalAmount,handleViewOrder:b})})})})]})}const G={title:`Plan details | Dashboard - ${R.site.name}`};function ts(){const{id:s=""}=F(),e=E({queryKey:["plan",s],queryFn:async()=>(await j.get(l.plan.details+s)).data});return e.isPending||e.isLoading?t.jsx(q,{}):e.isError?t.jsx(T,{route:x.dashboard.plan.root}):t.jsxs(t.Fragment,{children:[t.jsx(L,{children:t.jsxs("title",{children:[" ",G.title]})}),t.jsx(A,{currentPlan:e.data})]})}export{ts as default};
