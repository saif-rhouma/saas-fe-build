import{i as D,r as o,g as je,aW as ye,dn as Pe,dp as C,dm as f,dq as A,p as b,j as t,cY as B,S as c,B as r,I as N,C as Y,v as De,e9 as be,e2 as we,aS as R,e as I,cV as S,dP as Ie,dT as Se,H as qe}from"./index-7x0Jzu-K.js";import{u as q,E as Te}from"./error-block-D00Vx1n_.js";import{C as Fe}from"./custom-breadcrumbs-D7fqN-ij.js";import{u as H}from"./useMutation-Dv_B02Gt.js";import{b as T}from"./format-number-BYwLqIh3.js";import{u as ke}from"./use-table-BlauK5zs.js";import{O as Oe,a as ve,I as Ee}from"./order-discount-product-dialog-CA-OzzMO.js";import{P as Qe}from"./product-Item-button-DdNiFE3w.js";import{C as Ae}from"./component-pagination-custom-CfiN17TY.js";import{O as Be}from"./order-product-table-DwZLQ20v.js";import{O as Ne}from"./order-customer-create-dialog-C3qwl9WQ.js";import{T as L}from"./TextField-DM-8f0BQ.js";import{I as Re}from"./InputAdornment-Cy6JkpYJ.js";import{F as He}from"./FormControl-CwgFqIpY.js";import{S as Le}from"./Select-BZc5REn1.js";import{F as Ye}from"./FormHelperText-DXUXEoCg.js";import{D as Ke}from"./DatePicker-DNImynf8.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-DR8-NI-y.js";import"./DialogTitle-DqsJD2XR.js";import"./form-provider-L4HXF3hb.js";import"./Rating-DCB2jqoU.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-Bx-A_rYM.js";import"./Menu-B1dt3wvU.js";import"./index-DNxFhLTH.js";import"./Slider-CmH7wyJF.js";import"./FormLabel-ChZcLmvt.js";import"./formControlState-Dq1zat_P.js";import"./RadioGroup-Be2nemTL.js";import"./FormGroup-dOY1iFws.js";import"./FormControlLabel-BkxrN50L.js";import"./utils-BKVZXmx9.js";import"./index-BCeO1QHE.js";import"./countries-DSLisFCy.js";import"./Autocomplete-Y9_S23We.js";import"./Chip-BqIxCVbz.js";import"./country-select-CiBbKvWF.js";import"./InputLabel-CJ9sg_Jr.js";import"./Checkbox-4dEQ1AxH.js";import"./upload-avatar-Cx6DIh4F.js";import"./image-CdiR8fRs.js";import"./MobileDateTimePicker-C1e3BYNb.js";import"./Tabs-DBbaXAIS.js";import"./KeyboardArrowRight-BVBZSuVb.js";import"./TablePagination-NpwYiakq.js";import"./LastPage-2IgpaQX0.js";import"./TableCell-CE_O9heW.js";import"./InputBase-Bf6dB4gm.js";import"./utils-DoM3o7-Q.js";import"./table-head-custom-GbSIW9-C.js";import"./incrementer-button-CtjoRD9w.js";import"./schema-helper-Jf_nWAk5.js";import"./LoadingButton-D4yaP3jf.js";import"./CircularProgress-BU2etINY.js";import"./ListItem-Bl8LEqBl.js";function We({products:i,customers:m,taxPercentage:l}){const a=ke({defaultRowsPerPage:6}),j=D(),y=D(),P=D(),F=D(),[K,W]=o.useState(""),[G,M]=o.useState(""),V=je(),[k,$]=o.useState(),[p,z]=o.useState(0),[J,U]=o.useState(0),[w,h]=o.useState(!1),[X,Z]=o.useState(),[x,_]=o.useState("Customer"),[O,ee]=o.useState(ye(new Date)),[n,d]=o.useState([]),[v,E]=o.useState(i),Q=Pe(),te=(e,s)=>{U(s),Z(e),P.onToggle()},se=e=>{z(e),y.onFalse()},oe=(e,s)=>{d(u=>(u[e].price=s,[...u])),P.onFalse()},{mutate:re}=H({mutationFn:e=>C.post(f.quotation.create,e),onSuccess:async()=>{A.success("New Quotation Has Been Created!"),await Q.invalidateQueries({queryKey:["quotations"]})},onSettled:async()=>{V.push(b.dashboard.quotation.root)},onError:e=>{console.error(e)}}),ae=o.useCallback(e=>{$(e.target.value)},[]),ne=o.useCallback(e=>{_(e.target.value),e.target.value==="Customer"?h(!0):h(!1)},[]),ie=o.useCallback(e=>{d(s=>{const u=s.findIndex(fe=>fe.id===e.id);return u>=0?s[u].quantity+=1:(e.quantity=1,e.discount=0,s.push(e)),[...s]})},[]),le=o.useCallback(e=>{const s=e.target.value;s&&E(i.filter(u=>u.name.toLowerCase().indexOf(s)!==-1)),(s==null||s==="")&&E(i)},[]),ce=o.useCallback(e=>{d(s=>(s[e].quantity-=1,s[e].quantity===0&&s.splice(e,1),[...s]))},[n]),de=o.useCallback(e=>{d(s=>(s[e].discount>0&&(s[e].discount-=1),[...s]))},[]),ue=o.useCallback(e=>{d(s=>(s[e].discount<100&&(s[e].discount+=1),[...s]))},[]),me=o.useCallback(e=>{d(s=>(s[e].quantity+=1,[...s]))},[n]),pe=o.useCallback(e=>{d(s=>(s.splice(e,1),[...s]))},[n]),g=o.useCallback(()=>n.reduce((e,s)=>e+s.price*s.quantity,0),[n]);o.useCallback(()=>n.reduce((e,s)=>e+s.price*(s.discount/100)*s.quantity,0),[n]);const{mutate:he}=H({mutationFn:e=>C.post(f.customers.create,e),onSuccess:async()=>{A.success("New Customer Has Been Created!"),await Q.invalidateQueries({queryKey:["customers"]})},onSettled:async()=>{j.onFalse()},onError:e=>{console.log(e)}}),xe=t.jsx(B,{children:t.jsxs(c,{children:[t.jsx(r,{sx:{p:3},children:t.jsx(L,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:"Search product...",InputProps:{startAdornment:t.jsx(Re,{position:"start",children:t.jsx(N,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:le})}),t.jsx(r,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:v.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(e=>t.jsx(Qe,{payload:e,handleClick:ie,productName:e==null?void 0:e.name,image:Y.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),t.jsx(Ae,{page:a.page,count:v.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})}),ge=t.jsxs(c,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[t.jsxs(c,{direction:"row",children:[t.jsx(r,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(r,{sx:{width:160,typography:"subtitle2"},children:T(g())||"-"})]}),t.jsxs(c,{direction:"row",alignItems:"center",children:[t.jsx(r,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(r,{sx:{width:160},children:t.jsx(r,{sx:{pl:4,mr:-.5},children:t.jsxs(c,{onClick:()=>{y.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${De(e.vars.palette.grey["500Channel"],.2)}`},children:[p,"%"]})})})]}),t.jsxs(c,{direction:"row",children:[t.jsxs(r,{sx:{color:"text.secondary"},children:["Tax (",l||"0","%)"]}),t.jsx(r,{sx:{width:160},children:l?T(be(g()-g()*(p/100),l)):"-"})]}),t.jsxs(c,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Gross Total:"}),t.jsx(r,{sx:{width:160},children:T(we(g()-g()*(p/100),l))||"-"})]})]}),Ce=t.jsx(B,{children:t.jsxs(c,{spacing:2,sx:{p:3},children:[t.jsxs(r,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs(He,{sx:{m:1,minWidth:120},error:w&&!x,children:[t.jsxs(Le,{sx:{maxWidth:420,textTransform:"capitalize"},value:x,error:w,onChange:ne,children:[t.jsx(R,{value:"Customer",children:"Customer"}),m.map(e=>t.jsx(R,{value:e.id,children:e.name},e.id))]}),w&&t.jsx(Ye,{error:!0,children:"Customer is required!"})]}),t.jsx(r,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(I,{variant:"contained",startIcon:t.jsx(N,{icon:"mingcute:add-line"}),onClick:()=>j.onToggle(),children:"Add Customer"})}),t.jsx(L,{label:"Quotation Title",placeholder:"This Could Be Generated Automatically",value:k,onChange:ae,sx:{mt:2}}),t.jsx(Ke,{label:"Date",sx:{mt:2},value:O,onChange:e=>{ee(e)}})]}),t.jsx(Be,{products:n,onDecrease:ce,onIncrease:me,onDecreaseDiscount:de,onIncreaseDiscount:ue,handleDiscountDialog:te,removeItem:pe}),t.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[ge,t.jsxs(r,{display:"flex",gap:2,height:50,children:[t.jsx(I,{variant:"contained",onClick:()=>{if(isNaN(parseInt(x))){h(!0);return}if(h(!1),!n.length){W("Something went wrong. Product(s) are required!"),M("You need to add at least one product to this quotation. Please select a product from the list on the right."),F.onToggle();return}if(!isNaN(parseInt(x))&&n.length){h(!1);const e={discount:parseInt(p,10),name:k,quotationDate:O.format("YYYY-MM-DD"),products:n.map(s=>({id:s.id,snapshotProductPrice:s.price,quantity:s.quantity})),customer:x};re(e)}},children:"Save and Continue"}),t.jsx(I,{variant:"outlined",onClick:()=>d([]),children:"Clear All"})]})]})]})});return t.jsxs(S,{container:!0,spacing:3,children:[t.jsx(S,{xs:12,md:3,children:t.jsx(c,{children:xe})}),t.jsx(S,{xs:12,md:9,children:t.jsx(c,{children:Ce})}),t.jsx(Ne,{open:j.value,onClose:j.onFalse,handler:he}),t.jsx(Oe,{discount:p,open:y.value,onClose:y.onFalse,handler:se}),t.jsx(ve,{product:X,discount:J,open:P.value,onClose:P.onFalse,handler:oe}),t.jsx(Ee,{dialog:F,title:K,contentText:G})]})}function Ge({products:i,customers:m,taxPercentage:l}){return t.jsxs(Ie,{children:[t.jsx(Fe,{heading:"Create a new quotation",links:[{name:"Dashboard",href:b.dashboard.root},{name:"Quotation",href:b.dashboard.quotation.root},{name:"Add Quotation"}],sx:{mb:{xs:3,md:5}}}),t.jsx(We,{products:i,customers:m,taxPercentage:l})]})}const Me={title:`Create a new Quotation | Dashboard - ${Y.site.name}`};function Ut(){const i=q({queryKey:["products"],queryFn:async()=>(await C.get(f.products.list)).data}),m=q({queryKey:["customers"],queryFn:async()=>(await C.get(f.customers.list)).data}),l=q({queryKey:["account-application"],queryFn:async()=>{const{data:a}=await C.get(f.auth.application);return a}});return l.isLoading||i.isLoading||m.isLoading?t.jsx(Se,{}):l.isError||i.isError||i.isError?t.jsx(Te,{route:b.dashboard.order.root}):t.jsxs(t.Fragment,{children:[t.jsx(qe,{children:t.jsxs("title",{children:[" ",Me.title]})}),t.jsx(Ge,{products:i.data,customers:m.data,taxPercentage:l.data.taxPercentage})]})}export{Ut as default};
