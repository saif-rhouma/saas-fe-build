import{i as D,r as s,g as je,aW as ye,dn as Pe,dp as C,dm as f,dq as A,p as b,j as t,cY as B,S as c,B as o,I as N,C as L,v as De,ee as be,e8 as we,aS as R,e as S,cV as O,dP as Ie,dT as Se,H as Oe}from"./index-CRVB8F69.js";import{u as T,E as Te}from"./error-block-0lRJvl3b.js";import{C as qe}from"./custom-breadcrumbs-CBgeVjCX.js";import{u as H}from"./useMutation-Dv2OayGI.js";import{b as q}from"./format-number-BlEHznSm.js";import{u as Fe}from"./use-table-CgXGbbdg.js";import{O as ke,a as ve,I as Ee}from"./order-discount-product-dialog-Dn3tyhvg.js";import{P as Ae}from"./product-Item-button-DLLiD92v.js";import{C as Be}from"./component-pagination-custom-BxA8qO8g.js";import{O as Ne}from"./order-product-table-DMIoWaMJ.js";import{O as Re}from"./order-customer-create-dialog-DUmG7dnt.js";import{T as K}from"./TextField-a9VrXvMJ.js";import{I as He}from"./InputAdornment-6EHLKwyL.js";import{F as Ke}from"./FormControl-CFmGE2-k.js";import{S as Le}from"./Select-BWwgXsU9.js";import{F as Ye}from"./FormHelperText-BjyTaFTe.js";import{D as Qe}from"./DatePicker-CB0DQzBJ.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-DTWdpBHx.js";import"./DialogTitle-zVJogJSi.js";import"./form-provider-Cj5HnMmb.js";import"./Rating-7neiHll4.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-B6TerEHZ.js";import"./Menu-BM961z0Q.js";import"./index-DsQx8PFb.js";import"./Slider-qJX29ETW.js";import"./FormLabel-OtvxlZPN.js";import"./formControlState-Dq1zat_P.js";import"./RadioGroup-BfSQqxxW.js";import"./FormGroup-BTOkiH5K.js";import"./FormControlLabel-cTtCu-eQ.js";import"./utils-CXZGrLpc.js";import"./index-xSFMErMk.js";import"./countries-DSLisFCy.js";import"./Autocomplete-CXoresUK.js";import"./Chip-C0F9v8Yk.js";import"./country-select-BGXXJ_eo.js";import"./InputLabel-CixZ_02K.js";import"./Checkbox-ge_l6EJ8.js";import"./upload-avatar-DVEASGMD.js";import"./image-5vyLym5h.js";import"./MobileDateTimePicker-BqsYy-6i.js";import"./Tabs-C9gxXNdG.js";import"./KeyboardArrowRight-Bdp-RYnm.js";import"./TablePagination-Ir8mqBBY.js";import"./LastPage-DtHFBiqB.js";import"./TableCell-DefBsglL.js";import"./InputBase-DWgInsnL.js";import"./utils-DoM3o7-Q.js";import"./table-head-custom-CJzwho5G.js";import"./incrementer-button-cdRhxOCZ.js";import"./schema-helper-CkH2syPz.js";import"./LoadingButton-D-TxUmLb.js";import"./CircularProgress-DEMC3_90.js";import"./ListItem-Dj4qJ_SH.js";function We({products:i,customers:m,taxPercentage:l}){const a=Fe({defaultRowsPerPage:6}),j=D(),y=D(),P=D(),F=D(),[Y,Q]=s.useState(""),[W,G]=s.useState(""),M=je(),[V,$]=s.useState(),[p,z]=s.useState(0),[J,U]=s.useState(0),[w,h]=s.useState(!1),[X,Z]=s.useState(),[x,_]=s.useState("Customer"),[k,ee]=s.useState(ye(new Date)),[n,d]=s.useState([]),[v,E]=s.useState(i),I=Pe(),te=(e,r)=>{U(r),Z(e),P.onToggle()},re=e=>{z(e),y.onFalse()},se=(e,r)=>{d(u=>(u[e].price=r,[...u])),P.onFalse()},{mutate:oe}=H({mutationFn:e=>C.post(f.order.create,e),onSuccess:async()=>{A.success("New Order Has Been Created!"),await I.invalidateQueries({queryKey:["orders"]}),await I.invalidateQueries({queryKey:["orders","analytics"]})},onSettled:async()=>{M.push(b.dashboard.order.root)},onError:e=>{console.error(e)}}),ae=s.useCallback(e=>{$(e.target.value)},[]),ne=s.useCallback(e=>{_(e.target.value),e.target.value==="Customer"?h(!0):h(!1)},[]),ie=s.useCallback(e=>{d(r=>{const u=r.findIndex(fe=>fe.id===e.id);return u>=0?r[u].quantity+=1:(e.quantity=1,e.discount=0,r.push(e)),[...r]})},[]),le=s.useCallback(e=>{const r=e.target.value;r&&E(i.filter(u=>u.name.toLowerCase().indexOf(r)!==-1)),(r==null||r==="")&&E(i)},[]),ce=s.useCallback(e=>{d(r=>(r[e].quantity-=1,r[e].quantity===0&&r.splice(e,1),[...r]))},[n]),de=s.useCallback(e=>{d(r=>(r[e].discount>0&&(r[e].discount-=1),[...r]))},[]),ue=s.useCallback(e=>{d(r=>(r[e].discount<100&&(r[e].discount+=1),[...r]))},[]),me=s.useCallback(e=>{d(r=>(r[e].quantity+=1,[...r]))},[n]),pe=s.useCallback(e=>{d(r=>(r.splice(e,1),[...r]))},[n]),g=s.useCallback(()=>n.reduce((e,r)=>e+r.price*r.quantity,0),[n]);s.useCallback(()=>n.reduce((e,r)=>e+r.price*(r.discount/100)*r.quantity,0),[n]);const{mutate:he}=H({mutationFn:e=>C.post(f.customers.create,e),onSuccess:async()=>{A.success("New Customer Has Been Created!")},onSettled:async()=>{await I.invalidateQueries({queryKey:["customers"]}),j.onFalse()},onError:e=>{console.log(e)}}),xe=t.jsx(B,{children:t.jsxs(c,{children:[t.jsx(o,{sx:{p:3},children:t.jsx(K,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:"Search product...",InputProps:{startAdornment:t.jsx(He,{position:"start",children:t.jsx(N,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:le})}),t.jsx(o,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:v.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(e=>t.jsx(Ae,{payload:e,handleClick:ie,productName:e==null?void 0:e.name,image:L.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),t.jsx(Be,{page:a.page,count:v.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})}),ge=t.jsxs(c,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[t.jsxs(c,{direction:"row",children:[t.jsx(o,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(o,{sx:{width:160,typography:"subtitle2"},children:q(g())||"-"})]}),t.jsxs(c,{direction:"row",alignItems:"center",children:[t.jsx(o,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(o,{sx:{width:160},children:t.jsx(o,{sx:{pl:4,mr:-.5},children:t.jsxs(c,{onClick:()=>{y.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${De(e.vars.palette.grey["500Channel"],.2)}`},children:[p,"%"]})})})]}),t.jsxs(c,{direction:"row",children:[t.jsxs(o,{sx:{color:"text.secondary"},children:["Tax (",l||"0","%)"]}),t.jsx(o,{sx:{width:160},children:l?q(be(g()-g()*(p/100),l)):"-"})]}),t.jsxs(c,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Gross Total:"}),t.jsx(o,{sx:{width:160},children:q(we(g()-g()*(p/100),l))||"-"})]})]}),Ce=t.jsx(B,{children:t.jsxs(c,{spacing:2,sx:{p:3},children:[t.jsxs(o,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs(Ke,{sx:{m:1,minWidth:120},error:w&&!x,children:[t.jsxs(Le,{sx:{maxWidth:420,textTransform:"capitalize"},value:x,error:w,onChange:ne,children:[t.jsx(R,{value:"Customer",children:"Customer"}),m.map(e=>t.jsx(R,{value:e.id,children:e.name},e.id))]}),w&&t.jsx(Ye,{error:!0,children:"Customer is required!"})]}),t.jsx(o,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(S,{variant:"contained",startIcon:t.jsx(N,{icon:"mingcute:add-line"}),onClick:()=>j.onToggle(),children:"Add Customer"})}),t.jsx(K,{label:"Order ID",placeholder:"This Could Be Generated Automatically",value:V,onChange:ae,sx:{mt:2}}),t.jsx(Qe,{label:"Date",sx:{mt:2},value:k,onChange:e=>{ee(e)}})]}),t.jsx(Ne,{products:n,onDecrease:ce,onIncrease:me,onDecreaseDiscount:de,onIncreaseDiscount:ue,handleDiscountDialog:te,removeItem:pe}),t.jsxs(o,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[ge,t.jsxs(o,{display:"flex",gap:2,height:50,children:[t.jsx(S,{variant:"contained",onClick:()=>{if(isNaN(parseInt(x))){h(!0);return}if(h(!1),!n.length){Q("Something went wrong. Product(s) are required!"),G("You need to add at least one product to this order. Please select a product from the list on the right."),F.onToggle();return}if(!isNaN(parseInt(x))&&n.length){h(!1);const e={discount:parseInt(p,10),orderDate:k.format("YYYY-MM-DD"),products:n.map(r=>({id:r.id,snapshotProductPrice:r.price,quantity:r.quantity})),customer:x};oe(e)}},children:"Save and Continue"}),t.jsx(S,{variant:"outlined",onClick:()=>d([]),children:"Clear All"})]})]})]})});return t.jsxs(O,{container:!0,spacing:3,children:[t.jsx(O,{xs:12,md:3,children:t.jsx(c,{children:xe})}),t.jsx(O,{xs:12,md:9,children:t.jsx(c,{children:Ce})}),t.jsx(Re,{open:j.value,onClose:j.onFalse,handler:he}),t.jsx(ke,{discount:p,open:y.value,onClose:y.onFalse,handler:re}),t.jsx(ve,{product:X,discount:J,open:P.value,onClose:P.onFalse,handler:se}),t.jsx(Ee,{dialog:F,title:Y,contentText:W})]})}function Ge({products:i,customers:m,taxPercentage:l}){return t.jsxs(Ie,{children:[t.jsx(qe,{heading:"Create a new Order",links:[{name:"Dashboard",href:b.dashboard.root},{name:"Order",href:b.dashboard.order.root},{name:"Add Order"}],sx:{mb:{xs:3,md:5}}}),t.jsx(We,{products:i,customers:m,taxPercentage:l})]})}const Me={title:`Create a new Order | Dashboard - ${L.site.name}`};function Ut(){const i=T({queryKey:["products"],queryFn:async()=>(await C.get(f.products.list)).data}),m=T({queryKey:["customers"],queryFn:async()=>(await C.get(f.customers.list)).data}),l=T({queryKey:["account-application"],queryFn:async()=>{const{data:a}=await C.get(f.auth.application);return a}});return l.isLoading||i.isLoading||m.isLoading?t.jsx(Se,{}):l.isError||i.isError||i.isError?t.jsx(Te,{route:b.dashboard.order.root}):t.jsxs(t.Fragment,{children:[t.jsx(Oe,{children:t.jsxs("title",{children:[" ",Me.title]})}),t.jsx(Ge,{products:i.data,customers:m.data,taxPercentage:l.data.taxPercentage})]})}export{Ut as default};
