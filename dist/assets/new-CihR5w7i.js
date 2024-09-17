import{w as $,o as U,r as s,bO as X,dN as Z,dO as u,dM as p,dP as b,p as x,j as t,aH as I,S as l,I as O,B as c,C as q,bL as S,e as f,G as g,ed as _,eh as ee,H as te}from"./index-DxrsDIwY.js";import{u as D,E as re}from"./error-block-Cg6RpAZK.js";import{C as se}from"./custom-breadcrumbs-Dd3lNCwD.js";import{u as w}from"./useMutation-f5nVFG-s.js";import{b as ae}from"./format-number-DtiborQ_.js";import{P as oe}from"./product-Item-button-Bivxk7Bf.js";import{O as ne}from"./order-product-table-YaxYCqbq.js";import{O as ie}from"./order-customer-create-dialog-ev9fE2NP.js";import{T as k}from"./TextField-C2VP4uls.js";import{I as de}from"./InputAdornment-D2FMqto9.js";import{S as le}from"./Select-eQVewVvt.js";import{D as ce}from"./DatePicker-CHBP34D3.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./table-head-custom-w-4MLJlt.js";import"./TableCell-CJNt5t20.js";import"./Checkbox-ylG2wecL.js";import"./incrementer-button-BtQ5_PmY.js";import"./form-provider-DzAJAZLb.js";import"./index-wGJ5bMai.js";import"./countries-DSLisFCy.js";import"./fields-Dsl2Pqgx.js";import"./FormHelperText-DMsDqsw2.js";import"./formControlState-Dq1zat_P.js";import"./Rating-FZfLYAhV.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-Dqkfe7Lc.js";import"./Menu-C6l2dIf8.js";import"./index-BNV8Ha3a.js";import"./Slider-R3UsSTxo.js";import"./FormControl-CC-u2HkW.js";import"./utils-DoM3o7-Q.js";import"./FormLabel-EgLeF9WB.js";import"./RadioGroup-IW7zsT63.js";import"./FormGroup-69w0Ctto.js";import"./FormControlLabel-DKxiCaQc.js";import"./Autocomplete-DQd8H5I4.js";import"./Chip-Bq-6ExUD.js";import"./country-select-6tMU1vH_.js";import"./InputLabel-CQVMsmZY.js";import"./upload-avatar-4NlzUb0f.js";import"./image-yj0A9F1D.js";import"./MobileDateTimePicker-UWVv-JJA.js";import"./schema-helper-Dd4Kd2WC.js";import"./DialogContent-262oYdAn.js";import"./DialogTitle-C_65wNCI.js";import"./LoadingButton-BPYHnDdd.js";import"./CircularProgress-CRSD6Bm4.js";import"./InputBase-B9Lf9cs-.js";import"./ListItem-Cbx-5wAg.js";function me({products:a,customers:i}){const d=$(),P=U(),[v,F]=s.useState(),[h,T]=s.useState("Customer"),[j,B]=s.useState(X(new Date)),[o,m]=s.useState([]),[E,y]=s.useState(a),C=Z(),{mutate:A}=w({mutationFn:e=>u.post(p.order.create,e),onSuccess:async()=>{b.success("New Order Has Been Created!")},onSettled:async()=>{await C.invalidateQueries({queryKey:["orders"]}),await C.invalidateQueries({queryKey:["orders","analytics"]}),P.push(x.dashboard.order.root)},onError:()=>{}}),N=s.useCallback(e=>{F(e.target.value)},[]),H=s.useCallback(e=>{T(e.target.value)},[]),L=s.useCallback(e=>{m(r=>{const n=r.findIndex(V=>V.id===e.id);return n>=0?r[n].quantity+=1:(e.quantity=1,r.push(e)),[...r]})},[o]),G=s.useCallback(e=>{const r=e.target.value;r&&y(a.filter(n=>n.name.toLowerCase().indexOf(r)!==-1)),(r==null||r==="")&&y(a)},[]),K=s.useCallback(e=>{m(r=>(r[e].quantity-=1,r[e].quantity===0&&r.splice(e,1),[...r]))},[o]),M=s.useCallback(e=>{m(r=>(r[e].quantity+=1,[...r]))},[o]),Q=s.useCallback(e=>{m(r=>(r.splice(e,1),[...r]))},[o]),Y=s.useCallback(()=>o.reduce((e,r)=>e+r.price*r.quantity,0),[o]),R=t.jsx(I,{children:t.jsxs(l,{spacing:4,sx:{p:3},children:[t.jsx(k,{fullWidth:!0,maxWidth:"xs",placeholder:"Search customer or order number...",InputProps:{startAdornment:t.jsx(de,{position:"start",children:t.jsx(O,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:G}),t.jsx(c,{spacing:2,gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:E.map(e=>t.jsx(oe,{payload:e,handleClick:L,productName:e==null?void 0:e.name,image:q.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))})]})}),W=t.jsx(l,{spacing:2,alignItems:"flex-end",sx:{p:3,textAlign:"right",typography:"body2"},children:t.jsxs(l,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Gross Total:"}),t.jsx(c,{sx:{width:160},children:ae(Y())||"-"})]})}),{mutate:z}=w({mutationFn:e=>u.post(p.customers.create,e),onSuccess:async()=>{b.success("New Customer Has Been Created!")},onSettled:async()=>{await C.invalidateQueries({queryKey:["customers"]}),d.onFalse()},onError:e=>{console.log(e)}}),J=t.jsx(I,{children:t.jsxs(l,{spacing:2,sx:{p:3},children:[t.jsxs(c,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs(le,{sx:{maxWidth:420,textTransform:"capitalize"},value:h,onChange:H,children:[t.jsx(S,{value:"Customer",children:"Customer"}),i.map(e=>t.jsx(S,{value:e.id,children:e.name},e.id))]}),t.jsx(c,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(f,{variant:"contained",startIcon:t.jsx(O,{icon:"mingcute:add-line"}),onClick:()=>d.onToggle(),children:"Add Customer"})}),t.jsx(k,{label:"Order ID",placeholder:"This Could Be Generated Automaticly",value:v,onChange:N,sx:{mt:2}}),t.jsx(ce,{label:"Date",sx:{mt:2},value:j,onChange:e=>{B(e)}})]}),t.jsx(ne,{products:o,onDecrease:K,onIncrease:M,removeItem:Q}),t.jsxs(c,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[W,t.jsxs(c,{display:"flex",gap:2,height:50,children:[t.jsx(f,{variant:"contained",onClick:()=>{if(!isNaN(parseInt(h))&&o.length){const e={orderDate:j.format("YYYY-MM-DD"),products:o.map(r=>({id:r.id,quantity:r.quantity})),customer:h};A(e)}},children:"Save and Continue"}),t.jsx(f,{variant:"outlined",onClick:()=>m([]),children:"Clear All"})]})]})]})});return t.jsxs(g,{container:!0,spacing:3,children:[t.jsx(g,{xs:12,md:4,children:t.jsx(l,{children:R})}),t.jsx(g,{xs:12,md:8,children:t.jsx(l,{children:J})}),t.jsx(ie,{open:d.value,onClose:d.onFalse,handler:z})]})}function ue({products:a,customers:i}){return t.jsxs(_,{children:[t.jsx(se,{heading:"Create a new Order",links:[{name:"Dashboard",href:x.dashboard.root},{name:"Order",href:x.dashboard.order.root},{name:"Add Order"}],sx:{mb:{xs:3,md:5}}}),t.jsx(me,{products:a,customers:i})]})}const pe={title:`Create a new Order | Dashboard - ${q.site.name}`};function ut(){const a=D({queryKey:["products"],queryFn:async()=>(await u.get(p.products.list)).data}),i=D({queryKey:["customers"],queryFn:async()=>(await u.get(p.customers.list)).data});return a.isLoading||i.isLoading?t.jsx(ee,{}):a.isError||a.isError?t.jsx(re,{route:x.dashboard.order.root}):t.jsxs(t.Fragment,{children:[t.jsx(te,{children:t.jsxs("title",{children:[" ",pe.title]})}),t.jsx(ue,{products:a.data,customers:i.data})]})}export{ut as default};
