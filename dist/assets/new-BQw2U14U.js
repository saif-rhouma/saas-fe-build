import{r,j as e,D as b,e as h,o as q,l as Ce,bU as fe,dI as ye,dJ as f,dH as y,dK as K,p as I,aD as N,S as c,I as W,B as o,C as R,v as De,ev as be,ew as Ie,bR as H,G as T,e8 as we,ec as Se,H as Oe}from"./index-CcYGUVHj.js";import{u as F,E as ke}from"./error-block-DrLwzfMU.js";import{C as ve}from"./custom-breadcrumbs-B2pKwILD.js";import{u as L}from"./useMutation-Cy6dNzJR.js";import{b as C}from"./format-number-DKjUSt8e.js";import{P as Pe}from"./product-Item-button-DlZMAkGq.js";import{O as qe}from"./order-product-table-CS8KuTV-.js";import{a as G,b as Q,D as M}from"./DialogContent-Blcxs__o.js";import{D as Y}from"./DialogTitle-CapkBcLX.js";import{T as w}from"./TextField-Q8D-fe1P.js";import{O as Te}from"./order-customer-create-dialog-Br9vsAuw.js";import{I as Fe}from"./InputAdornment--gMbc1oW.js";import{S as Ae}from"./Select-oUaPpSxi.js";import{D as Ee}from"./DatePicker-MBb6QCnS.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./table-head-custom-DEIjwtVm.js";import"./TableCell-YX8_wKqf.js";import"./Checkbox-DgQwk_ps.js";import"./incrementer-button-mRF40xtC.js";import"./incrementer-percentage-button-DVjNyZ5t.js";import"./FormControl-DyEi2am2.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-C9X7_uSi.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Ct8Q-9i0.js";import"./FormHelperText-CaS0BGUe.js";import"./form-provider-CdJJxIi_.js";import"./Rating-BJzZeIIm.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-CmrbN6Cg.js";import"./Menu-DMwTpGo6.js";import"./index-Bv3fybKl.js";import"./Slider-BfGPK7NS.js";import"./RadioGroup-BKIHz0-8.js";import"./FormGroup-DkBXOvcX.js";import"./FormControlLabel-BEskPPUu.js";import"./index-SZ6SJdRJ.js";import"./countries-DSLisFCy.js";import"./Autocomplete-BoqBGuRO.js";import"./Chip-BF8Po0b7.js";import"./country-select-8WIzbqhk.js";import"./upload-avatar-pih1cWPZ.js";import"./image-l-gE1IT4.js";import"./MobileDateTimePicker-DSMzaFF0.js";import"./Tabs-s_UE9AaI.js";import"./KeyboardArrowRight-u_Zt7Aff.js";import"./schema-helper-DQrBur17.js";import"./LoadingButton-LyeEHFJv.js";import"./CircularProgress-DPueiljq.js";import"./InputBase-D4Zcsm26.js";import"./ListItem-DhWHRhwD.js";const Be=({discount:n,open:i,onClose:a,handler:l})=>{const[u,m]=r.useState(n);return e.jsxs(G,{fullWidth:!0,open:i,onClose:a,children:[e.jsx(Y,{children:"Discount"}),e.jsx(b,{}),e.jsx(Q,{sx:{pt:1,mt:1},children:e.jsx(w,{fullWidth:!0,label:"Discount Amount",type:"number",value:u,onChange:p=>{m(p.target.value)}})}),e.jsx(b,{sx:{pt:1,mt:1}}),e.jsxs(M,{children:[e.jsx(h,{type:"submit",variant:"contained",onClick:()=>l(u),children:"Confirm"}),e.jsx(h,{color:"inherit",variant:"outlined",onClick:a,children:"Cancel"})]})]})},Ke=({product:n,discount:i,open:a,onClose:l,handler:u})=>{var D;console.log(">>> -discount",i);const[m,p]=r.useState(i);return r.useEffect(()=>{p(i)},[i]),e.jsxs(G,{fullWidth:!0,open:a,onClose:l,children:[e.jsxs(Y,{children:["Discount Product : ",(D=n==null?void 0:n.product)==null?void 0:D.name]}),e.jsx(b,{}),e.jsx(Q,{sx:{pt:1,mt:1},children:e.jsx(w,{fullWidth:!0,label:"Discount Amount",type:"number",value:m,onChange:S=>{p(S.target.value)}})}),e.jsx(b,{sx:{pt:1,mt:1}}),e.jsxs(M,{children:[e.jsx(h,{type:"submit",variant:"contained",onClick:()=>u(n.index,n.product,m),children:"Confirm"}),e.jsx(h,{color:"inherit",variant:"outlined",onClick:l,children:"Cancel"})]})]})};function Ne({products:n,customers:i,taxPercentage:a}){const l=q(),u=q(),m=q(),p=Ce(),[D,S]=r.useState(),[g,J]=r.useState(0),[$,z]=r.useState(0),[U,V]=r.useState(),[O,X]=r.useState("Customer"),[A,Z]=r.useState(fe(new Date)),[d,x]=r.useState([]),[_,E]=r.useState(n),k=ye(),ee=(t,s)=>{z(s),V(t),m.onToggle()},te=t=>{J(t),u.onFalse()},se=(t,s,j)=>{const P=j/s.price*100;x(B=>(B[t].discount=P,[...B])),m.onFalse()},{mutate:re}=L({mutationFn:t=>f.post(y.order.create,t),onSuccess:async()=>{K.success("New Order Has Been Created!")},onSettled:async()=>{await k.invalidateQueries({queryKey:["orders"]}),await k.invalidateQueries({queryKey:["orders","analytics"]}),p.push(I.dashboard.order.root)},onError:()=>{}}),ne=r.useCallback(t=>{S(t.target.value)},[]),oe=r.useCallback(t=>{X(t.target.value)},[]),ae=r.useCallback(t=>{x(s=>{const j=s.findIndex(P=>P.id===t.id);return j>=0?s[j].quantity+=1:(t.quantity=1,t.discount=0,s.push(t)),[...s]})},[]),ie=r.useCallback(t=>{const s=t.target.value;s&&E(n.filter(j=>j.name.toLowerCase().indexOf(s)!==-1)),(s==null||s==="")&&E(n)},[]),le=r.useCallback(t=>{x(s=>(s[t].quantity-=1,s[t].quantity===0&&s.splice(t,1),[...s]))},[d]),ce=r.useCallback(t=>{x(s=>(s[t].discount>0&&(s[t].discount-=1),[...s]))},[]),de=r.useCallback(t=>{x(s=>(s[t].discount<100&&(s[t].discount+=1),[...s]))},[]),ue=r.useCallback(t=>{x(s=>(s[t].quantity+=1,[...s]))},[d]),me=r.useCallback(t=>{x(s=>(s.splice(t,1),[...s]))},[d]),v=r.useCallback(()=>d.reduce((t,s)=>t+s.price*s.quantity,0),[d]),xe=r.useCallback(()=>d.reduce((t,s)=>t+s.price*(s.discount/100)*s.quantity,0),[d]),{mutate:he}=L({mutationFn:t=>f.post(y.customers.create,t),onSuccess:async()=>{K.success("New Customer Has Been Created!")},onSettled:async()=>{await k.invalidateQueries({queryKey:["customers"]}),l.onFalse()},onError:t=>{console.log(t)}}),pe=e.jsx(N,{children:e.jsxs(c,{spacing:4,sx:{p:3},children:[e.jsx(w,{fullWidth:!0,maxWidth:"xs",placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(Fe,{position:"start",children:e.jsx(W,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:ie}),e.jsx(o,{spacing:2,gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:_.map(t=>e.jsx(Pe,{payload:t,handleClick:ae,productName:t==null?void 0:t.name,image:R.site.serverFileHost+(t==null?void 0:t.image)},t==null?void 0:t.id))})]})}),je=e.jsxs(c,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[e.jsxs(c,{direction:"row",children:[e.jsx(o,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(o,{sx:{width:160,typography:"subtitle2"},children:C(v())||"-"})]}),e.jsxs(c,{direction:"row",alignItems:"center",children:[e.jsx(o,{sx:{color:"text.secondary"},children:"Total Product Discount"}),e.jsx(o,{sx:{width:160},children:e.jsx(o,{children:e.jsx(c,{sx:{color:"error.main",borderRadius:1,typography:"subtitle2"},children:C(xe())||"-"})})})]}),e.jsxs(c,{direction:"row",alignItems:"center",children:[e.jsx(o,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(o,{sx:{width:160},children:e.jsx(o,{sx:{pl:4,mr:-.5},children:e.jsx(c,{onClick:()=>{u.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:t=>`solid 1px ${De(t.vars.palette.grey["500Channel"],.2)}`},children:C(g)})})})]}),e.jsxs(c,{direction:"row",children:[e.jsxs(o,{sx:{color:"text.secondary"},children:["Tax (",a||"0","%)"]}),e.jsx(o,{sx:{width:160},children:a?C(be(v()-g,a)):"-"})]}),e.jsxs(c,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx("div",{children:"Gross Total:"}),e.jsx(o,{sx:{width:160},children:C(Ie(v()-g,a))||"-"})]})]}),ge=e.jsx(N,{children:e.jsxs(c,{spacing:2,sx:{p:3},children:[e.jsxs(o,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsxs(Ae,{sx:{maxWidth:420,textTransform:"capitalize"},value:O,onChange:oe,children:[e.jsx(H,{value:"Customer",children:"Customer"}),i.map(t=>e.jsx(H,{value:t.id,children:t.name},t.id))]}),e.jsx(o,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:e.jsx(h,{variant:"contained",startIcon:e.jsx(W,{icon:"mingcute:add-line"}),onClick:()=>l.onToggle(),children:"Add Customer"})}),e.jsx(w,{label:"Order ID",placeholder:"This Could Be Generated Automaticly",value:D,onChange:ne,sx:{mt:2}}),e.jsx(Ee,{label:"Date",sx:{mt:2},value:A,onChange:t=>{Z(t)}})]}),e.jsx(qe,{products:d,onDecrease:le,onIncrease:ue,onDecreaseDiscount:ce,onIncreaseDiscount:de,handleDiscountDialog:ee,removeItem:me}),e.jsxs(o,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[je,e.jsxs(o,{display:"flex",gap:2,height:50,children:[e.jsx(h,{variant:"contained",onClick:()=>{if(!isNaN(parseInt(O))&&d.length){const t={discount:parseInt(g,10),orderDate:A.format("YYYY-MM-DD"),products:d.map(s=>({id:s.id,quantity:s.quantity})),customer:O};re(t)}},children:"Save and Continue"}),e.jsx(h,{variant:"outlined",onClick:()=>x([]),children:"Clear All"})]})]})]})});return e.jsxs(T,{container:!0,spacing:3,children:[e.jsx(T,{xs:12,md:4,children:e.jsx(c,{children:pe})}),e.jsx(T,{xs:12,md:8,children:e.jsx(c,{children:ge})}),e.jsx(Te,{open:l.value,onClose:l.onFalse,handler:he}),e.jsx(Be,{discount:g,open:u.value,onClose:u.onFalse,handler:te}),e.jsx(Ke,{product:U,discount:$,open:m.value,onClose:m.onFalse,handler:se})]})}function We({products:n,customers:i,taxPercentage:a}){return e.jsxs(we,{children:[e.jsx(ve,{heading:"Create a new Order",links:[{name:"Dashboard",href:I.dashboard.root},{name:"Order",href:I.dashboard.order.root},{name:"Add Order"}],sx:{mb:{xs:3,md:5}}}),e.jsx(Ne,{products:n,customers:i,taxPercentage:a})]})}const He={title:`Create a new Order | Dashboard - ${R.site.name}`};function Ht(){const n=F({queryKey:["products"],queryFn:async()=>(await f.get(y.products.list)).data}),i=F({queryKey:["customers"],queryFn:async()=>(await f.get(y.customers.list)).data}),a=F({queryKey:["account-application"],queryFn:async()=>{const{data:l}=await f.get(y.auth.application);return l}});return a.isLoading||n.isLoading||i.isLoading?e.jsx(Se,{}):a.isError||n.isError||n.isError?e.jsx(ke,{route:I.dashboard.order.root}):e.jsxs(e.Fragment,{children:[e.jsx(Oe,{children:e.jsxs("title",{children:[" ",He.title]})}),e.jsx(We,{products:n.data,customers:i.data,taxPercentage:a.data.taxPercentage})]})}export{Ht as default};
