import{j as e,e as p,B as l,r,D as I,o as w,l as we,bU as Ie,dI as Se,dJ as b,dH as P,dK as L,p as S,aD as G,S as m,I as M,C as J,v as Te,ev as ke,ew as ve,bR as Q,G as F,e8 as Oe,ec as Fe,H as qe}from"./index-CGa_Q6Py.js";import{u as q,E as Ae}from"./error-block-stWvsMsx.js";import{C as Ee}from"./custom-breadcrumbs-UiY5PgKl.js";import{u as Y}from"./useMutation-BZyJkW6J.js";import{b as A}from"./format-number-D7jLQrJb.js";import{u as Be}from"./use-table-Df2CeYBc.js";import{a as E,b as B,D as N}from"./DialogContent-CkKaB1Dh.js";import{D as R}from"./DialogTitle-7P1jGWHj.js";import{P as Ne}from"./product-Item-button-BKk4_42J.js";import{T as Re}from"./TablePagination-D7WE1nHD.js";import{O as We}from"./order-product-table-q7sI-tRk.js";import{T}from"./TextField-x1wfc3aD.js";import{O as He}from"./order-customer-create-dialog-BupCHXhD.js";import{I as Ke}from"./InputAdornment-DYxqegqT.js";import{F as Le}from"./FormControl-BQjf2Y5Q.js";import{S as Ge}from"./Select-C3EwVc3m.js";import{F as Me}from"./FormHelperText-Cs86-ejI.js";import{D as Qe}from"./DatePicker-BTuyCtTt.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./KeyboardArrowRight-DTzh8lht.js";import"./LastPage-DVTcRzyf.js";import"./TableCell-BagFzXfr.js";import"./InputBase-CW41dL9k.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./table-head-custom-CWkKt6RV.js";import"./Checkbox-C-tt3dk-.js";import"./incrementer-button-CieQIA0-.js";import"./InputLabel-Boupd8R1.js";import"./FormLabel-BwlFMORw.js";import"./form-provider-B3FvCF-c.js";import"./Rating-B7rrg94U.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-COn8_0IM.js";import"./Menu-CEGb_rPj.js";import"./index-B34iO5qA.js";import"./Slider-M6bVG310.js";import"./RadioGroup-CZVTeUhr.js";import"./FormGroup-DgzyTd4r.js";import"./FormControlLabel-ULMw-Rz6.js";import"./index-BWadiwXQ.js";import"./countries-DSLisFCy.js";import"./Autocomplete-DTDeDKOb.js";import"./Chip-OqFJxE3e.js";import"./country-select-Cmy0LStT.js";import"./upload-avatar-lrMiBpkm.js";import"./image-DKbVqab5.js";import"./MobileDateTimePicker-H2WyDDk6.js";import"./Tabs-B9rF6pCD.js";import"./LoadingButton-B5SbTGGo.js";import"./CircularProgress-CWCrBmmX.js";import"./ListItem-3hZALOiS.js";const Ye=({dialog:n,title:i,contentText:o})=>e.jsxs(E,{open:n.value,onClose:n.onFalse,children:[e.jsx(R,{children:i}),e.jsx(B,{sx:{color:"text.secondary"},children:e.jsx("p",{children:o})}),e.jsx(N,{children:e.jsx(p,{variant:"contained",onClick:n.onFalse,autoFocus:!0,children:"Okay"})})]});function Je({sx:n,rowsPerPageOptions:i=6,...o}){return e.jsx(l,{sx:{position:"relative",...n},children:e.jsx(Re,{rowsPerPageOptions:i,component:"div",...o,sx:{borderTopColor:"transparent"}})})}const $e=({discount:n,open:i,onClose:o,handler:a})=>{const[c,d]=r.useState(n),x=r.useCallback(()=>{c<0?d(0):c>100&&d(100)},[c]);return e.jsxs(E,{fullWidth:!0,open:i,onClose:o,children:[e.jsx(R,{children:"Discount Percentage"}),e.jsx(I,{}),e.jsx(B,{sx:{pt:1,mt:1},children:e.jsx(T,{fullWidth:!0,label:"Percentage",value:c,onChange:g=>{d(Number(g.target.value))},onBlur:x,inputProps:{step:10,min:0,max:100,type:"number",id:"input-amount"}})}),e.jsx(I,{sx:{pt:1,mt:1}}),e.jsxs(N,{children:[e.jsx(p,{type:"submit",variant:"contained",onClick:()=>a(c),children:"Confirm"}),e.jsx(p,{color:"inherit",variant:"outlined",onClick:o,children:"Cancel"})]})]})},ze=({product:n,discount:i,open:o,onClose:a,handler:c})=>{var g;const[d,x]=r.useState(i);return r.useEffect(()=>{x(i)},[i]),e.jsxs(E,{fullWidth:!0,open:o,onClose:a,children:[e.jsxs(R,{children:["Discount Product : ",(g=n==null?void 0:n.product)==null?void 0:g.name]}),e.jsx(I,{}),e.jsx(B,{sx:{pt:1,mt:1},children:e.jsx(T,{fullWidth:!0,label:"Discount Amount",type:"number",value:d,onChange:k=>{x(k.target.value)}})}),e.jsx(I,{sx:{pt:1,mt:1}}),e.jsxs(N,{children:[e.jsx(p,{type:"submit",variant:"contained",onClick:()=>{c(n.index,d)},children:"Confirm"}),e.jsx(p,{color:"inherit",variant:"outlined",onClick:a,children:"Cancel"})]})]})};function Ue({products:n,customers:i,taxPercentage:o}){const a=Be({defaultRowsPerPage:6}),c=w(),d=w(),x=w(),g=w(),[k,$]=r.useState(""),[z,U]=r.useState(""),V=we(),[X,Z]=r.useState(),[C,_]=r.useState(0),[ee,te]=r.useState(0),[v,f]=r.useState(!1),[se,re]=r.useState(),[y,ne]=r.useState("Customer"),[W,oe]=r.useState(Ie(new Date)),[u,h]=r.useState([]),[H,K]=r.useState(n),O=Se(),ae=(t,s)=>{te(s),re(t),x.onToggle()},ie=t=>{_(t),d.onFalse()},le=(t,s)=>{h(j=>(j[t].price=s,[...j])),x.onFalse()},{mutate:ce}=Y({mutationFn:t=>b.post(P.order.create,t),onSuccess:async()=>{L.success("New Order Has Been Created!"),await O.invalidateQueries({queryKey:["orders"]}),await O.invalidateQueries({queryKey:["orders","analytics"]})},onSettled:async()=>{V.push(S.dashboard.order.root)},onError:t=>{console.error(t)}}),de=r.useCallback(t=>{Z(t.target.value)},[]),ue=r.useCallback(t=>{ne(t.target.value),t.target.value==="Customer"?f(!0):f(!1)},[]),me=r.useCallback(t=>{h(s=>{const j=s.findIndex(Pe=>Pe.id===t.id);return j>=0?s[j].quantity+=1:(t.quantity=1,t.discount=0,s.push(t)),[...s]})},[]),xe=r.useCallback(t=>{const s=t.target.value;s&&K(n.filter(j=>j.name.toLowerCase().indexOf(s)!==-1)),(s==null||s==="")&&K(n)},[]),he=r.useCallback(t=>{h(s=>(s[t].quantity-=1,s[t].quantity===0&&s.splice(t,1),[...s]))},[u]),pe=r.useCallback(t=>{h(s=>(s[t].discount>0&&(s[t].discount-=1),[...s]))},[]),ge=r.useCallback(t=>{h(s=>(s[t].discount<100&&(s[t].discount+=1),[...s]))},[]),je=r.useCallback(t=>{h(s=>(s[t].quantity+=1,[...s]))},[u]),Ce=r.useCallback(t=>{h(s=>(s.splice(t,1),[...s]))},[u]),D=r.useCallback(()=>u.reduce((t,s)=>t+s.price*s.quantity,0),[u]);r.useCallback(()=>u.reduce((t,s)=>t+s.price*(s.discount/100)*s.quantity,0),[u]);const{mutate:fe}=Y({mutationFn:t=>b.post(P.customers.create,t),onSuccess:async()=>{L.success("New Customer Has Been Created!")},onSettled:async()=>{await O.invalidateQueries({queryKey:["customers"]}),c.onFalse()},onError:t=>{console.log(t)}}),ye=e.jsx(G,{children:e.jsxs(m,{children:[e.jsx(l,{sx:{p:3},children:e.jsx(T,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(Ke,{position:"start",children:e.jsx(M,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{"& .MuiOutlinedInput-root":{border:"1px solid #909090"}},onChange:xe})}),e.jsx(l,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:H.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(t=>e.jsx(Ne,{payload:t,handleClick:me,productName:t==null?void 0:t.name,image:J.site.serverFileHost+(t==null?void 0:t.image)},t==null?void 0:t.id))}),e.jsx(Je,{page:a.page,count:H.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})}),De=e.jsxs(m,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[e.jsxs(m,{direction:"row",children:[e.jsx(l,{sx:{color:"text.secondary"},children:"Subtotal"}),e.jsx(l,{sx:{width:160,typography:"subtitle2"},children:A(D())||"-"})]}),e.jsxs(m,{direction:"row",alignItems:"center",children:[e.jsx(l,{sx:{color:"text.secondary"},children:"Discount"}),e.jsx(l,{sx:{width:160},children:e.jsx(l,{sx:{pl:4,mr:-.5},children:e.jsxs(m,{onClick:()=>{d.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:t=>`solid 1px ${Te(t.vars.palette.grey["500Channel"],.2)}`},children:[C,"%"]})})})]}),e.jsxs(m,{direction:"row",children:[e.jsxs(l,{sx:{color:"text.secondary"},children:["Tax (",o||"0","%)"]}),e.jsx(l,{sx:{width:160},children:o?A(ke(D()-D()*(C/100),o)):"-"})]}),e.jsxs(m,{direction:"row",sx:{typography:"subtitle1"},children:[e.jsx("div",{children:"Gross Total:"}),e.jsx(l,{sx:{width:160},children:A(ve(D()-D()*(C/100),o))||"-"})]})]}),be=e.jsx(G,{children:e.jsxs(m,{spacing:2,sx:{p:3},children:[e.jsxs(l,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsxs(Le,{sx:{m:1,minWidth:120},error:v&&!y,children:[e.jsxs(Ge,{sx:{maxWidth:420,textTransform:"capitalize"},value:y,error:v,onChange:ue,children:[e.jsx(Q,{value:"Customer",children:"Customer"}),i.map(t=>e.jsx(Q,{value:t.id,children:t.name},t.id))]}),v&&e.jsx(Me,{error:!0,children:"Customer is required!"})]}),e.jsx(l,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:e.jsx(p,{variant:"contained",startIcon:e.jsx(M,{icon:"mingcute:add-line"}),onClick:()=>c.onToggle(),children:"Add Customer"})}),e.jsx(T,{label:"Order ID",placeholder:"This Could Be Generated Automatically",value:X,onChange:de,sx:{mt:2}}),e.jsx(Qe,{label:"Date",sx:{mt:2},value:W,onChange:t=>{oe(t)}})]}),e.jsx(We,{products:u,onDecrease:he,onIncrease:je,onDecreaseDiscount:pe,onIncreaseDiscount:ge,handleDiscountDialog:ae,removeItem:Ce}),e.jsxs(l,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[De,e.jsxs(l,{display:"flex",gap:2,height:50,children:[e.jsx(p,{variant:"contained",onClick:()=>{if(isNaN(parseInt(y))){f(!0);return}if(f(!1),!u.length){$("Something went wrong. Product(s) are required!"),U("You need to add at least one product to this order. Please select a product from the list on the right."),g.onToggle();return}if(!isNaN(parseInt(y))&&u.length){f(!1);const t={discount:parseInt(C,10),orderDate:W.format("YYYY-MM-DD"),products:u.map(s=>({id:s.id,snapshotProductPrice:s.price,quantity:s.quantity})),customer:y};ce(t)}},children:"Save and Continue"}),e.jsx(p,{variant:"outlined",onClick:()=>h([]),children:"Clear All"})]})]})]})});return e.jsxs(F,{container:!0,spacing:3,children:[e.jsx(F,{xs:12,md:3,children:e.jsx(m,{children:ye})}),e.jsx(F,{xs:12,md:9,children:e.jsx(m,{children:be})}),e.jsx(He,{open:c.value,onClose:c.onFalse,handler:fe}),e.jsx($e,{discount:C,open:d.value,onClose:d.onFalse,handler:ie}),e.jsx(ze,{product:se,discount:ee,open:x.value,onClose:x.onFalse,handler:le}),e.jsx(Ye,{dialog:g,title:k,contentText:z})]})}function Ve({products:n,customers:i,taxPercentage:o}){return e.jsxs(Oe,{children:[e.jsx(Ee,{heading:"Create a new Order",links:[{name:"Dashboard",href:S.dashboard.root},{name:"Order",href:S.dashboard.order.root},{name:"Add Order"}],sx:{mb:{xs:3,md:5}}}),e.jsx(Ue,{products:n,customers:i,taxPercentage:o})]})}const Xe={title:`Create a new Order | Dashboard - ${J.site.name}`};function Zt(){const n=q({queryKey:["products"],queryFn:async()=>(await b.get(P.products.list)).data}),i=q({queryKey:["customers"],queryFn:async()=>(await b.get(P.customers.list)).data}),o=q({queryKey:["account-application"],queryFn:async()=>{const{data:a}=await b.get(P.auth.application);return a}});return o.isLoading||n.isLoading||i.isLoading?e.jsx(Fe,{}):o.isError||n.isError||n.isError?e.jsx(Ae,{route:S.dashboard.order.root}):e.jsxs(e.Fragment,{children:[e.jsx(qe,{children:e.jsxs("title",{children:[" ",Xe.title]})}),e.jsx(Ve,{products:n.data,customers:i.data,taxPercentage:o.data.taxPercentage})]})}export{Zt as default};