import{i as D,r as s,g as fe,aW as je,dn as ye,dp as g,dm as C,dq as B,p as b,j as t,cY as N,S as c,B as o,I as v,C as H,v as Pe,ee as De,e8 as be,cV as I,e as S,dP as we,dT as Ie,H as Se}from"./index-DBAnnifB.js";import{u as O,E as Oe}from"./error-block-I6x1Hy75.js";import{C as Te}from"./custom-breadcrumbs-DBItHaBE.js";import{u as R}from"./useMutation-DLdc3eWl.js";import{b as T}from"./format-number-DHkj0q5I.js";import{u as qe}from"./use-table-_0b8U19R.js";import{O as Fe,a as ke,I as Ee}from"./order-discount-product-dialog-Cgqb1qgL.js";import{P as Ae}from"./product-Item-button-BTqWLhbZ.js";import{C as Be}from"./customer-select-VrOiiqy1.js";import{C as Ne}from"./component-pagination-custom-Df0leBPC.js";import{O as ve}from"./order-product-table-DWlLoTU0.js";import{O as Re}from"./order-customer-create-dialog-Dobgr3cC.js";import{T as L}from"./TextField-Cnf5s-_6.js";import{I as Le}from"./InputAdornment-kj6j4mRM.js";import{F as He}from"./FormControl-BL4Ls0ff.js";import{F as Ke}from"./FormHelperText-DbwQqqnD.js";import{D as Ye}from"./DatePicker-WvioqOmJ.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-BOG7TMWB.js";import"./DialogTitle-m6FUYnnv.js";import"./form-provider-C9WrYleO.js";import"./Rating-DsIJUcaL.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-CpxSiSi_.js";import"./Menu-CWYUzvJj.js";import"./index-B9zhif9o.js";import"./Slider-BALWrmvq.js";import"./FormLabel-qH7g1y9y.js";import"./formControlState-Dq1zat_P.js";import"./RadioGroup-C_0xPGj6.js";import"./FormGroup-ZuySfzWi.js";import"./FormControlLabel-BLHOqcns.js";import"./utils-C3i7epmT.js";import"./index-BHbW1OCY.js";import"./countries-DSLisFCy.js";import"./Autocomplete-Bk7RHyx1.js";import"./Select-Cs1GmroI.js";import"./utils-DoM3o7-Q.js";import"./InputBase-Dk2d0D5e.js";import"./Chip-DfL_ynnF.js";import"./country-select-SNPz2g0K.js";import"./InputLabel-B6YlaWfN.js";import"./Checkbox-C9zyd1yT.js";import"./upload-avatar-CgBNTr-y.js";import"./image-V4smZB5P.js";import"./MobileDateTimePicker-kmTIkQgP.js";import"./Tabs-D1nVhLuN.js";import"./KeyboardArrowRight-tacz4Y6j.js";import"./TablePagination-CtzltUxB.js";import"./LastPage-BC27tdqq.js";import"./TableCell-D0tRcJwU.js";import"./table-head-custom-oTVXNsWX.js";import"./incrementer-button-Dvx1B3F1.js";import"./schema-helper-CvPOGW5C.js";import"./LoadingButton-CunA2jBP.js";import"./CircularProgress-DeUuXNKO.js";import"./ListItem-CRRiYsyQ.js";function Qe({products:i,customers:m,taxPercentage:l}){const a=qe({defaultRowsPerPage:6}),f=D(),j=D(),y=D(),q=D(),[K,Y]=s.useState(""),[Q,G]=s.useState(""),M=fe(),[W,V]=s.useState(),[p,$]=s.useState(0),[J,z]=s.useState(0),[F,h]=s.useState(!1),[U,X]=s.useState(),[P,Z]=s.useState("Customer"),[k,_]=s.useState(je(new Date)),[n,d]=s.useState([]),[E,A]=s.useState(i),w=ye(),ee=(e,r)=>{z(r),X(e),y.onToggle()},te=e=>{$(e),j.onFalse()},re=(e,r)=>{d(u=>(u[e].price=r,[...u])),y.onFalse()},{mutate:se}=R({mutationFn:e=>g.post(C.order.create,e),onSuccess:async()=>{B.success("New Order Has Been Created!"),await w.invalidateQueries({queryKey:["orders"]}),await w.invalidateQueries({queryKey:["orders","analytics"]})},onSettled:async()=>{M.push(b.dashboard.order.root)},onError:e=>{console.error(e)}}),oe=s.useCallback(e=>{V(e.target.value)},[]),ae=s.useCallback(e=>{Z(e),h(!e)},[]),ne=s.useCallback(e=>{d(r=>{const u=r.findIndex(Ce=>Ce.id===e.id);return u>=0?r[u].quantity+=1:(e.quantity=1,e.discount=0,r.push(e)),[...r]})},[]),ie=s.useCallback(e=>{const r=e.target.value;r&&A(i.filter(u=>u.name.toLowerCase().indexOf(r)!==-1)),(r==null||r==="")&&A(i)},[]),le=s.useCallback(e=>{d(r=>(r[e].quantity-=1,r[e].quantity===0&&r.splice(e,1),[...r]))},[n]),ce=s.useCallback(e=>{d(r=>(r[e].discount>0&&(r[e].discount-=1),[...r]))},[]),de=s.useCallback(e=>{d(r=>(r[e].discount<100&&(r[e].discount+=1),[...r]))},[]),ue=s.useCallback(e=>{d(r=>(r[e].quantity+=1,[...r]))},[n]),me=s.useCallback(e=>{d(r=>(r.splice(e,1),[...r]))},[n]),x=s.useCallback(()=>n.reduce((e,r)=>e+r.price*r.quantity,0),[n]);s.useCallback(()=>n.reduce((e,r)=>e+r.price*(r.discount/100)*r.quantity,0),[n]);const{mutate:pe}=R({mutationFn:e=>g.post(C.customers.create,e),onSuccess:async()=>{B.success("New Customer Has Been Created!")},onSettled:async()=>{await w.invalidateQueries({queryKey:["customers"]}),f.onFalse()},onError:e=>{console.log(e)}}),he=t.jsx(N,{children:t.jsxs(c,{children:[t.jsx(o,{sx:{p:3},children:t.jsx(L,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:"Search product...",InputProps:{startAdornment:t.jsx(Le,{position:"start",children:t.jsx(v,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:ie})}),t.jsx(o,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:E.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(e=>t.jsx(Ae,{payload:e,handleClick:ne,productName:e==null?void 0:e.name,image:H.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),t.jsx(Ne,{page:a.page,count:E.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})}),xe=t.jsxs(c,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[t.jsxs(c,{direction:"row",children:[t.jsx(o,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(o,{sx:{width:160,typography:"subtitle2"},children:T(x())||"-"})]}),t.jsxs(c,{direction:"row",alignItems:"center",children:[t.jsx(o,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(o,{sx:{width:160},children:t.jsx(o,{sx:{pl:4,mr:-.5},children:t.jsxs(c,{onClick:()=>{j.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${Pe(e.vars.palette.grey["500Channel"],.2)}`},children:[p,"%"]})})})]}),t.jsxs(c,{direction:"row",children:[t.jsxs(o,{sx:{color:"text.secondary"},children:["Tax (",l||"0","%)"]}),t.jsx(o,{sx:{width:160},children:l?T(De(x()-x()*(p/100),l)):"-"})]}),t.jsxs(c,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Total:"}),t.jsx(o,{sx:{width:160},children:T(be(x()-x()*(p/100),l))||"-"})]})]}),ge=t.jsx(N,{children:t.jsxs(c,{spacing:2,sx:{p:3},children:[t.jsxs(o,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs(He,{error:F&&!P,children:[t.jsx(Be,{customers:m,onChange:ae}),F&&t.jsx(Ke,{error:!0,children:"Customer is required!"})]}),t.jsx(o,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(S,{variant:"contained",startIcon:t.jsx(v,{icon:"mingcute:add-line"}),onClick:()=>f.onToggle(),children:"New Customer"})}),t.jsx(L,{label:"Order ID",placeholder:"This Could Be Generated Automatically",value:W,InputLabelProps:{shrink:!0},onChange:oe,sx:{mt:2}}),t.jsx(Ye,{label:"Date",sx:{mt:2},value:k,onChange:e=>{_(e)}})]}),t.jsx(ve,{products:n,onDecrease:le,onIncrease:ue,onDecreaseDiscount:ce,onIncreaseDiscount:de,handleDiscountDialog:ee,removeItem:me}),t.jsxs(o,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[xe,t.jsxs(o,{display:"flex",gap:2,height:50,children:[t.jsx(S,{variant:"contained",onClick:()=>{if(isNaN(parseInt(P))){h(!0);return}if(h(!1),!n.length){Y("Something went wrong. Product(s) are required!"),G("You need to add at least one product to this order. Please select a product from the list on the right."),q.onToggle();return}if(!isNaN(parseInt(P))&&n.length){h(!1);const e={discount:parseInt(p,10),orderDate:k.format("YYYY-MM-DD"),products:n.map(r=>({id:r.id,snapshotProductPrice:r.price,quantity:r.quantity})),customer:P};se(e)}},children:"Save and Continue"}),t.jsx(S,{variant:"outlined",onClick:()=>d([]),children:"Clear All"})]})]})]})});return t.jsxs(I,{container:!0,spacing:3,children:[t.jsx(I,{xs:12,md:3,children:t.jsx(c,{children:he})}),t.jsx(I,{xs:12,md:9,children:t.jsx(c,{children:ge})}),t.jsx(Re,{open:f.value,onClose:f.onFalse,handler:pe}),t.jsx(Fe,{discount:p,open:j.value,onClose:j.onFalse,handler:te}),t.jsx(ke,{product:U,discount:J,open:y.value,onClose:y.onFalse,handler:re}),t.jsx(Ee,{dialog:q,title:K,contentText:Q})]})}function Ge({products:i,customers:m,taxPercentage:l}){return t.jsxs(we,{children:[t.jsx(Te,{heading:"Create a new Order",links:[{name:"Dashboard",href:b.dashboard.root},{name:"Order",href:b.dashboard.order.root},{name:"Add Order"}],sx:{mb:{xs:3,md:5}}}),t.jsx(Qe,{products:i,customers:m,taxPercentage:l})]})}const Me={title:`Create a new Order | Dashboard - ${H.site.name}`};function Ut(){const i=O({queryKey:["products"],queryFn:async()=>(await g.get(C.products.list)).data}),m=O({queryKey:["customers"],queryFn:async()=>(await g.get(C.customers.list)).data}),l=O({queryKey:["account-application"],queryFn:async()=>{const{data:a}=await g.get(C.auth.application);return a}});return l.isLoading||i.isLoading||m.isLoading?t.jsx(Ie,{}):l.isError||i.isError||i.isError?t.jsx(Oe,{route:b.dashboard.order.root}):t.jsxs(t.Fragment,{children:[t.jsx(Se,{children:t.jsxs("title",{children:[" ",Me.title]})}),t.jsx(Ge,{products:i.data,customers:m.data,taxPercentage:l.data.taxPercentage})]})}export{Ut as default};