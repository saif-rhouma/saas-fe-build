import{j as t,cY as C,S as r,B as o,d0 as D,d7 as S,e as f,I as y,dd as k,r as n,g as w,dn as v,p as x,dP as B,cV as h,dp as j,dm as g,dq as I,dT as q,H as T,C as E}from"./index-dnffYGPF.js";import{u as R,E as L}from"./error-block-B4gGIhQT.js";import{u as Q}from"./use-params-C_1lhTdb.js";import{u as F}from"./useMutation-BZOm9juL.js";import{C as H}from"./custom-breadcrumbs-CeSyQC80.js";import{P as O}from"./plan-product-table-EAHP6V18.js";import{C as $}from"./CardHeader-BZtwdrdv.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./table-head-custom-CjD5Hw1j.js";import"./TableCell-BayvW16s.js";import"./Checkbox-BH9BFK-7.js";import"./incrementer-button-Dc9-u0Cq.js";function A({plan:s,handleViewOrder:e}){var d,a;return t.jsxs(C,{children:[t.jsx($,{title:"Details"}),t.jsxs(r,{direction:"row",justifyContent:"space-between",sx:{p:3,typography:"body2"},children:[t.jsxs(o,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[t.jsx(r,{direction:"row",sx:{typography:"subtitle2",marginBottom:1},children:t.jsx("div",{children:"Plan Details"})}),t.jsxs(o,{sx:{color:"text.secondary"},children:["Plan ID: ",s==null?void 0:s.ref]}),t.jsxs(o,{sx:{color:"text.secondary"},children:["Plan Date: ",D(s==null?void 0:s.planDate)]})]}),t.jsxs(o,{flexDirection:"column",gap:.5,sx:{display:"flex",width:"100%",p:1,borderRight:i=>`dashed 2px ${i.vars.palette.background.neutral}`,borderLeft:i=>`dashed 2px ${i.vars.palette.background.neutral}`},children:[t.jsx(r,{display:"flex",justifyContent:"center",alignItems:"center",sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:t.jsx("div",{children:"Laundry Saas POS"})}),t.jsxs(o,{sx:{color:"text.secondary"},children:["Quantity : ",s==null?void 0:s.quantity]})]}),t.jsxs(o,{flexDirection:"column",alignItems:"center",sx:{p:1,display:"flex",width:"100%"},children:[t.jsxs(r,{display:"flex",alignItems:"center",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:[t.jsx("div",{children:"Plan Status"}),t.jsx(S,{variant:"soft",color:(s==null?void 0:s.status)==="Ready"&&"success"||(s==null?void 0:s.status)==="Pending"&&"info"||(s==null?void 0:s.status)==="ProcessingA"&&"warning"||(s==null?void 0:s.status)==="ProcessingB"&&"error"||"default",children:s==null?void 0:s.status})]}),((d=s==null?void 0:s.order)==null?void 0:d.id)&&t.jsx(r,{children:t.jsxs(f,{variant:"contained",size:"small",startIcon:t.jsx(y,{icon:"heroicons-outline:external-link"}),onClick:()=>{const{id:i}=s==null?void 0:s.order;i&&e(i)},children:["Related to Order: #",(a=s==null?void 0:s.order)==null?void 0:a.ref]})})]})]}),t.jsx(k,{children:t.jsx(o,{fullWidth:!0,alignItems:"center",sx:{p:3,borderBottom:i=>`dashed 2px ${i.vars.palette.background.neutral}`},children:t.jsx(O,{products:s==null?void 0:s.product,quantity:s==null?void 0:s.quantity})})})]})}function K({currentPlan:s}){const[e,d]=n.useState(s),a=w();n.useEffect(()=>{d(s),u(!(s!=null&&s.isTransferred)&&(s==null?void 0:s.status)==="Ready")},[s]);const[i,u]=n.useState(!(s!=null&&s.isTransferred)&&(s==null?void 0:s.status)==="Ready"),m=v(),{mutate:l}=F({mutationFn:c=>j.post(g.plan.transferToStock+c),onSuccess:async()=>{I.success("Product has been transferred successfully to Stock!"),u(()=>!i)},onSettled:async()=>{const{id:c}=e;await m.invalidateQueries({queryKey:["plans"]}),await m.invalidateQueries({queryKey:["plan",c]})},onError:()=>{}}),b=n.useCallback(c=>{a.push(x.dashboard.order.details(c))},[a]);return t.jsxs(B,{children:[t.jsx(H,{links:[{name:"Dashboard",href:x.dashboard.root},{name:"Plan",href:x.dashboard.plan.root},{name:"Plan Details"}],sx:{mb:{xs:3,md:5}},action:i&&t.jsx(f,{onClick:async()=>{l(e.id)},variant:"contained",startIcon:t.jsx(y,{icon:"solar:home-add-bold"}),children:"Transfer To Stock"})}),t.jsx(h,{container:!0,spacing:3,children:t.jsx(h,{xs:12,md:12,children:t.jsx(r,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:t.jsx(A,{items:e==null?void 0:e.items,plan:e,taxes:e==null?void 0:e.taxes,shipping:e==null?void 0:e.shipping,discount:e==null?void 0:e.discount,subtotal:e==null?void 0:e.subtotal,totalAmount:e==null?void 0:e.totalAmount,handleViewOrder:b})})})})]})}const V={title:`Plan details | Dashboard - ${E.site.name}`};function ts(){const{id:s=""}=Q(),e=R({queryKey:["plan",s],queryFn:async()=>(await j.get(g.plan.details+s)).data});return e.isPending||e.isLoading?t.jsx(q,{}):e.isError?t.jsx(L,{route:x.dashboard.plan.root}):t.jsxs(t.Fragment,{children:[t.jsx(T,{children:t.jsxs("title",{children:[" ",V.title]})}),t.jsx(K,{currentPlan:e.data})]})}export{ts as default};
