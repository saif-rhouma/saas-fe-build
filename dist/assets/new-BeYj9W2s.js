import{i as D,r as s,g as Ce,aW as je,dn as ye,dp as g,dm as f,dq as B,p as b,j as t,cY as N,S as c,B as o,I as Y,C as L,v as Pe,ea as De,e8 as be,cV as I,e as S,dP as we,dT as Ie,H as Se}from"./index-CFpFDdmk.js";import{u as O,E as Oe}from"./error-block-Qb0JqWMo.js";import{C as Te}from"./custom-breadcrumbs-BhZ5AQiJ.js";import{u as v}from"./useMutation-BYxzZEeu.js";import{b as T}from"./format-number-u5v8ow11.js";import{u as qe}from"./use-table-DRwUskxu.js";import{O as Fe,a as ke,I as Ee}from"./order-discount-product-dialog-BLrNYdf4.js";import{P as Ae}from"./product-Item-button-iWuQ-HfF.js";import{C as Be}from"./customer-select-Cx9vSFLI.js";import{C as Ne}from"./component-pagination-custom-QfPhwL3x.js";import{O as Ye}from"./order-product-table-C2Fek4-R.js";import{O as ve}from"./order-customer-create-dialog-COF-Wwtz.js";import{T as R}from"./TextField-DfM7FsMT.js";import{I as Re}from"./InputAdornment-CgLiqxs-.js";import{F as Le}from"./FormControl-CNS-_KcR.js";import{F as He}from"./FormHelperText-CBSty0_k.js";import{D as Ke}from"./DatePicker--R0iVwy6.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-__vH1XwO.js";import"./DialogTitle-Fqo4pdu1.js";import"./form-provider-BpZ_lNCz.js";import"./Rating-hRCFGB57.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-B84uWKaP.js";import"./Menu-B68-fR6c.js";import"./index-C97vZu8v.js";import"./Slider-1GT9TVwO.js";import"./FormLabel-DSBvpxE-.js";import"./formControlState-Dq1zat_P.js";import"./RadioGroup-q3osZweo.js";import"./FormGroup-cGoNpeSS.js";import"./FormControlLabel-Djcc_FaA.js";import"./utils-BeBWERKu.js";import"./index-iy408cV1.js";import"./countries-DSLisFCy.js";import"./Autocomplete-CiqUWkUt.js";import"./Select-BlD-2uiB.js";import"./utils-DoM3o7-Q.js";import"./InputBase-BlPzdlBf.js";import"./Chip-B8Kj4THB.js";import"./country-select-B5_N9Ghb.js";import"./InputLabel-D-P4ONWN.js";import"./Checkbox-BgUXlmGv.js";import"./upload-avatar-CpOCvI_m.js";import"./image-DogZHW8e.js";import"./MobileDateTimePicker-iVybONG-.js";import"./Tabs-mH73uY_b.js";import"./KeyboardArrowRight-BWeVAAgH.js";import"./TablePagination-Bod9RAXB.js";import"./LastPage-B91oXYll.js";import"./TableCell-nk9uECyp.js";import"./table-head-custom-BYdbhTGG.js";import"./incrementer-button-C-kwnl1h.js";import"./schema-helper-4wDMemZN.js";import"./LoadingButton-DIpeLunE.js";import"./CircularProgress-kusugyBo.js";import"./ListItem-C2-cLBAD.js";function Me({products:i,customers:m,taxPercentage:l}){const a=qe({defaultRowsPerPage:6}),C=D(),j=D(),y=D(),q=D(),[H,K]=s.useState(""),[M,Q]=s.useState(""),G=Ce(),[W,V]=s.useState(),[p,$]=s.useState(0),[J,z]=s.useState(0),[F,h]=s.useState(!1),[U,X]=s.useState(),[P,Z]=s.useState("Customer"),[k,_]=s.useState(je(new Date)),[n,d]=s.useState([]),[E,A]=s.useState(i),w=ye(),ee=(e,r)=>{z(r),X(e),y.onToggle()},te=e=>{$(e),j.onFalse()},re=(e,r)=>{d(u=>(u[e].price=r,[...u])),y.onFalse()},{mutate:se}=v({mutationFn:e=>g.post(f.order.create,e),onSuccess:async()=>{B.success("New Order Has Been Created!"),await w.invalidateQueries({queryKey:["orders"]}),await w.invalidateQueries({queryKey:["orders","analytics"]})},onSettled:async()=>{G.push(b.dashboard.order.root)},onError:e=>{console.error(e)}}),oe=s.useCallback(e=>{V(e.target.value)},[]),ae=s.useCallback(e=>{Z(e),h(!e)},[]),ne=s.useCallback(e=>{d(r=>{const u=r.findIndex(fe=>fe.id===e.id);return u>=0?r[u].quantity+=1:(e.quantity=1,e.discount=0,r.push(e)),[...r]})},[]),ie=s.useCallback(e=>{const r=e.target.value;r&&A(i.filter(u=>u.name.toLowerCase().indexOf(r)!==-1)),(r==null||r==="")&&A(i)},[]),le=s.useCallback(e=>{d(r=>(r[e].quantity-=1,r[e].quantity===0&&r.splice(e,1),[...r]))},[n]),ce=s.useCallback(e=>{d(r=>(r[e].discount>0&&(r[e].discount-=1),[...r]))},[]),de=s.useCallback(e=>{d(r=>(r[e].discount<100&&(r[e].discount+=1),[...r]))},[]),ue=s.useCallback(e=>{d(r=>(r[e].quantity+=1,[...r]))},[n]),me=s.useCallback(e=>{d(r=>(r.splice(e,1),[...r]))},[n]),x=s.useCallback(()=>n.reduce((e,r)=>e+r.price*r.quantity,0),[n]);s.useCallback(()=>n.reduce((e,r)=>e+r.price*(r.discount/100)*r.quantity,0),[n]);const{mutate:pe}=v({mutationFn:e=>g.post(f.customers.create,e),onSuccess:async()=>{B.success("New Customer Has Been Created!")},onSettled:async()=>{await w.invalidateQueries({queryKey:["customers"]}),C.onFalse()},onError:e=>{console.log(e)}}),he=t.jsx(N,{children:t.jsxs(c,{children:[t.jsx(o,{sx:{p:3},children:t.jsx(R,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:"Search product...",InputProps:{startAdornment:t.jsx(Re,{position:"start",children:t.jsx(Y,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:ie})}),t.jsx(o,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:E.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(e=>t.jsx(Ae,{payload:e,handleClick:ne,productName:e==null?void 0:e.name,image:L.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),t.jsx(Ne,{page:a.page,count:E.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})}),xe=t.jsxs(c,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[t.jsxs(c,{direction:"row",children:[t.jsx(o,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(o,{sx:{width:160,typography:"subtitle2"},children:T(x())||"-"})]}),t.jsxs(c,{direction:"row",alignItems:"center",children:[t.jsx(o,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(o,{sx:{width:160},children:t.jsx(o,{sx:{pl:4,mr:-.5},children:t.jsxs(c,{onClick:()=>{j.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${Pe(e.vars.palette.grey["500Channel"],.2)}`},children:[p,"%"]})})})]}),t.jsxs(c,{direction:"row",children:[t.jsxs(o,{sx:{color:"text.secondary"},children:["Tax (",l||"0","%)"]}),t.jsx(o,{sx:{width:160},children:l?T(De(x()-x()*(p/100),l)):"-"})]}),t.jsxs(c,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Total:"}),t.jsx(o,{sx:{width:160},children:T(be(x()-x()*(p/100),l))||"-"})]})]}),ge=t.jsx(N,{children:t.jsxs(c,{spacing:2,sx:{p:3},children:[t.jsxs(o,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs(Le,{error:F&&!P,children:[t.jsx(Be,{customers:m,onChange:ae}),F&&t.jsx(He,{error:!0,children:"Customer is required!"})]}),t.jsx(o,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(S,{variant:"contained",startIcon:t.jsx(Y,{icon:"mingcute:add-line"}),onClick:()=>C.onToggle(),children:"New Customer"})}),t.jsx(R,{label:"Order ID",placeholder:"This Could Be Generated Automatically",value:W,disabled:!0,InputLabelProps:{shrink:!0},onChange:oe,sx:{mt:2}}),t.jsx(Ke,{label:"Date",sx:{mt:2},format:"DD/MM/YYYY",value:k,onChange:e=>{_(e)}})]}),t.jsx(Ye,{products:n,onDecrease:le,onIncrease:ue,onDecreaseDiscount:ce,onIncreaseDiscount:de,handleDiscountDialog:ee,removeItem:me}),t.jsxs(o,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[xe,t.jsxs(o,{display:"flex",gap:2,height:50,children:[t.jsx(S,{variant:"contained",onClick:()=>{if(isNaN(parseInt(P))){h(!0);return}if(h(!1),!n.length){K("Something went wrong. Product(s) are required!"),Q("You need to add at least one product to this order. Please select a product from the list on the right."),q.onToggle();return}if(!isNaN(parseInt(P))&&n.length){h(!1);const e={discount:parseInt(p,10),orderDate:k.format("YYYY-MM-DD"),products:n.map(r=>({id:r.id,snapshotProductPrice:r.price,quantity:r.quantity})),customer:P};se(e)}},children:"Save and Continue"}),t.jsx(S,{variant:"outlined",onClick:()=>d([]),children:"Clear All"})]})]})]})});return t.jsxs(I,{container:!0,spacing:3,children:[t.jsx(I,{xs:12,md:3,children:t.jsx(c,{children:he})}),t.jsx(I,{xs:12,md:9,children:t.jsx(c,{children:ge})}),t.jsx(ve,{open:C.value,onClose:C.onFalse,handler:pe}),t.jsx(Fe,{discount:p,open:j.value,onClose:j.onFalse,handler:te}),t.jsx(ke,{product:U,discount:J,open:y.value,onClose:y.onFalse,handler:re}),t.jsx(Ee,{dialog:q,title:H,contentText:M})]})}function Qe({products:i,customers:m,taxPercentage:l}){return t.jsxs(we,{children:[t.jsx(Te,{heading:"Create a new Order",links:[{name:"Dashboard",href:b.dashboard.root},{name:"Order",href:b.dashboard.order.root},{name:"Add Order"}],sx:{mb:{xs:3,md:5}}}),t.jsx(Me,{products:i,customers:m,taxPercentage:l})]})}const Ge={title:`Create a new Order | Dashboard - ${L.site.name}`};function Ut(){const i=O({queryKey:["products"],queryFn:async()=>(await g.get(f.products.list)).data}),m=O({queryKey:["customers"],queryFn:async()=>(await g.get(f.customers.list)).data}),l=O({queryKey:["account-application"],queryFn:async()=>{const{data:a}=await g.get(f.auth.application);return a}});return l.isLoading||i.isLoading||m.isLoading?t.jsx(Ie,{}):l.isError||i.isError||i.isError?t.jsx(Oe,{route:b.dashboard.order.root}):t.jsxs(t.Fragment,{children:[t.jsx(Se,{children:t.jsxs("title",{children:[" ",Ge.title]})}),t.jsx(Qe,{products:i.data,customers:m.data,taxPercentage:l.data.taxPercentage})]})}export{Ut as default};