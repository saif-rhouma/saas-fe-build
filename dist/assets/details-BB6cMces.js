import{j as t,aD as D,S as r,B as o,aJ as C,ds as S,e as f,I as y,dy as k,r as n,l as w,dI as I,p as x,e8 as v,G as h,dJ as j,dH as l,dK as B,ec as q,H as E,C as R}from"./index-D-ZKGqTU.js";import{u as T,E as H}from"./error-block-CQIWskvv.js";import{u as L}from"./use-params-DBj0-cxw.js";import{u as Q}from"./useMutation-DZH4G1UV.js";import{C as F}from"./custom-breadcrumbs-Ce0SsF19.js";import{P as K}from"./plan-product-table-BFGwqtOF.js";import{C as O}from"./CardHeader-BKG7jGOn.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./table-head-custom-COak4_H-.js";import"./TableCell-FvdEFRkr.js";import"./Checkbox-XoXkZxXm.js";import"./incrementer-button-ai0czu6f.js";function $({plan:s,handleViewOrder:e}){var d,a;return t.jsxs(D,{children:[t.jsx(O,{title:"Details"}),t.jsxs(r,{direction:"row",justifyContent:"space-between",sx:{p:3,typography:"body2"},children:[t.jsxs(o,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[t.jsx(r,{direction:"row",sx:{typography:"subtitle2",marginBottom:1},children:t.jsx("div",{children:"Plan Details"})}),t.jsxs(o,{sx:{color:"text.secondary"},children:["Plan ID: ",s==null?void 0:s.ref]}),t.jsxs(o,{sx:{color:"text.secondary"},children:["Plan Date: ",C(s==null?void 0:s.planDate)]})]}),t.jsxs(o,{flexDirection:"column",gap:.5,sx:{display:"flex",width:"100%",p:1,borderRight:i=>`dashed 2px ${i.vars.palette.background.neutral}`,borderLeft:i=>`dashed 2px ${i.vars.palette.background.neutral}`},children:[t.jsx(r,{display:"flex",justifyContent:"center",alignItems:"center",sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:t.jsx("div",{children:"Laundry Saas POS"})}),t.jsxs(o,{sx:{color:"text.secondary"},children:["Quantity : ",s==null?void 0:s.quantity]})]}),t.jsxs(o,{flexDirection:"column",alignItems:"center",sx:{p:1,display:"flex",width:"100%"},children:[t.jsxs(r,{display:"flex",alignItems:"center",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:[t.jsx("div",{children:"Plan Status"}),t.jsx(S,{variant:"soft",color:(s==null?void 0:s.status)==="Ready"&&"success"||(s==null?void 0:s.status)==="Pending"&&"info"||(s==null?void 0:s.status)==="ProcessingA"&&"warning"||(s==null?void 0:s.status)==="ProcessingB"&&"error"||"default",children:s==null?void 0:s.status})]}),((d=s==null?void 0:s.order)==null?void 0:d.id)&&t.jsx(r,{children:t.jsxs(f,{variant:"contained",size:"small",startIcon:t.jsx(y,{icon:"heroicons-outline:external-link"}),onClick:()=>{const{id:i}=s==null?void 0:s.order;i&&e(i)},children:["Related to Order: #",(a=s==null?void 0:s.order)==null?void 0:a.ref]})})]})]}),t.jsx(k,{children:t.jsx(o,{fullWidth:!0,alignItems:"center",sx:{p:3,borderBottom:i=>`dashed 2px ${i.vars.palette.background.neutral}`},children:t.jsx(K,{products:s==null?void 0:s.product,quantity:s==null?void 0:s.quantity})})})]})}function A({currentPlan:s}){const[e,d]=n.useState(s),a=w();n.useEffect(()=>{d(s),u(!(s!=null&&s.isTransferred)&&(s==null?void 0:s.status)==="Ready")},[s]);const[i,u]=n.useState(!(s!=null&&s.isTransferred)&&(s==null?void 0:s.status)==="Ready"),m=I(),{mutate:g}=Q({mutationFn:c=>j.post(l.plan.transferToStock+c),onSuccess:async()=>{B.success("Product has been transferred successfully to Stock!"),u(()=>!i)},onSettled:async()=>{const{id:c}=e;await m.invalidateQueries({queryKey:["plans"]}),await m.invalidateQueries({queryKey:["plan",c]})},onError:()=>{}}),b=n.useCallback(c=>{a.push(x.dashboard.order.details(c))},[a]);return t.jsxs(v,{children:[t.jsx(F,{links:[{name:"Dashboard",href:x.dashboard.root},{name:"Plan",href:x.dashboard.plan.root},{name:"Plan Details"}],sx:{mb:{xs:3,md:5}},action:i&&t.jsx(f,{onClick:async()=>{g(e.id)},variant:"contained",startIcon:t.jsx(y,{icon:"solar:home-add-bold"}),children:"Transfer To Stock"})}),t.jsx(h,{container:!0,spacing:3,children:t.jsx(h,{xs:12,md:12,children:t.jsx(r,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:t.jsx($,{items:e==null?void 0:e.items,plan:e,taxes:e==null?void 0:e.taxes,shipping:e==null?void 0:e.shipping,discount:e==null?void 0:e.discount,subtotal:e==null?void 0:e.subtotal,totalAmount:e==null?void 0:e.totalAmount,handleViewOrder:b})})})})]})}const G={title:`Plan details | Dashboard - ${R.site.name}`};function ts(){const{id:s=""}=L(),e=T({queryKey:["plan",s],queryFn:async()=>(await j.get(l.plan.details+s)).data});return e.isPending||e.isLoading?t.jsx(q,{}):e.isError?t.jsx(H,{route:x.dashboard.plan.root}):t.jsxs(t.Fragment,{children:[t.jsx(E,{children:t.jsxs("title",{children:[" ",G.title]})}),t.jsx(A,{currentPlan:e.data})]})}export{ts as default};
