import{i as P,r as o,g as je,aU as N,dn as ye,dp as g,dm as f,dq as A,p as w,j as t,cY as B,S as l,B as r,I as M,C as H,v as De,ea as Pe,e8 as we,cV as b,e as S,dQ as be,dU as Se,H as qe}from"./index-BEaGYMEI.js";import{u as q,E as Ie}from"./error-block-BQYINy50.js";import{C as Fe}from"./custom-breadcrumbs-D4hwk-rw.js";import{u as R}from"./useMutation-CD7lT4vI.js";import{b as I}from"./format-number-JDGLw5r5.js";import{u as Te}from"./use-table-DsQxT_g8.js";import{O as ke,a as Ye,I as Oe,C as Ee}from"./order-discount-product-dialog-DUy2d9kM.js";import{P as Qe}from"./product-Item-button-CoLt0Smh.js";import{C as Ne}from"./component-pagination-custom-BstsPM_m.js";import{O as Ae}from"./order-product-table-C6uk498K.js";import{O as Be}from"./order-customer-create-dialog-DwB8FjJ5.js";import{T as Me}from"./TextField-CIxpyOlN.js";import{I as Re}from"./InputAdornment-CGsQ7T7u.js";import{F as ve}from"./FormControl-2hnEuYCX.js";import{F as He}from"./FormHelperText-BJ35fbuN.js";import{D as v}from"./DatePicker-CrD84yY4.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-kX6pwS8I.js";import"./DialogTitle-CjPJnsJT.js";import"./Autocomplete-DxNaZqwA.js";import"./Select-C-U3VYQj.js";import"./Menu-Dc9eDgdb.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-Cx_XAmin.js";import"./Chip-Db-a91wo.js";import"./form-provider-D1JqQzDy.js";import"./Rating-OrTvPT5o.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-BIhbmUVt.js";import"./index-MqrcwFfK.js";import"./Slider-Vpiw_yof.js";import"./FormLabel-DT9mGYCJ.js";import"./RadioGroup-CBePuX0v.js";import"./FormGroup-Co3Xm8J_.js";import"./FormControlLabel-BO7gRcil.js";import"./utils-BEJZLJ_B.js";import"./index-DHKdtuyp.js";import"./countries-DSLisFCy.js";import"./country-select-UHhuvlSO.js";import"./InputLabel-CeWPpGeQ.js";import"./Checkbox-DRhnNWXi.js";import"./upload-avatar-Bt3nnzfi.js";import"./image-C-zCjJjA.js";import"./MobileDateTimePicker-hl_QFTv-.js";import"./Tabs-CAp3wR44.js";import"./KeyboardArrowRight-BWGrV5E8.js";import"./TablePagination-BtzWghPM.js";import"./LastPage-BtJVqGJo.js";import"./TableCell-CzBf4-Ov.js";import"./table-head-custom-Drg40nu1.js";import"./incrementer-button-Ct55v_XG.js";import"./schema-helper-B8q_BDb0.js";import"./LoadingButton-EriFvYzy.js";import"./CircularProgress-Dqum4YNW.js";import"./ListItem-BFzJ2Xb7.js";function Le({products:i,customers:m,taxPercentage:c}){const a=Te({defaultRowsPerPage:6}),C=P(),j=P(),y=P(),F=P(),[L,K]=o.useState(""),[W,G]=o.useState(""),U=je(),[V,Ge]=o.useState(),[p,$]=o.useState(0),[J,z]=o.useState(0),[T,x]=o.useState(!1),[X,Z]=o.useState(),[D,_]=o.useState("Customer"),[k,ee]=o.useState(N(new Date)),[Y,te]=o.useState(N(new Date).add(1,"day")),[n,d]=o.useState([]),[O,E]=o.useState(i),Q=ye(),se=(e,s)=>{z(s),Z(e),y.onToggle()},oe=e=>{$(e),j.onFalse()},re=(e,s)=>{d(u=>(u[e].price=s,[...u])),y.onFalse()},{mutate:ae}=R({mutationFn:e=>g.post(f.quotation.create,e),onSuccess:async()=>{A.success("New Quotation Has Been Created!"),await Q.invalidateQueries({queryKey:["quotations"]})},onSettled:async()=>{U.push(w.dashboard.quotation.root)},onError:e=>{console.error(e)}}),ne=o.useCallback(e=>{_(e),x(!e)},[]),ie=o.useCallback(e=>{d(s=>{const u=s.findIndex(Ce=>Ce.id===e.id);return u>=0?s[u].quantity+=1:(e.quantity=1,e.discount=0,s.push(e)),[...s]})},[]),ce=o.useCallback(e=>{const s=e.target.value;s&&E(i.filter(u=>u.name.toLowerCase().indexOf(s)!==-1)),(s==null||s==="")&&E(i)},[]),le=o.useCallback(e=>{d(s=>(s[e].quantity-=1,s[e].quantity===0&&s.splice(e,1),[...s]))},[n]),de=o.useCallback(e=>{d(s=>(s[e].discount>0&&(s[e].discount-=1),[...s]))},[]),ue=o.useCallback(e=>{d(s=>(s[e].discount<100&&(s[e].discount+=1),[...s]))},[]),me=o.useCallback(e=>{d(s=>(s[e].quantity+=1,[...s]))},[n]),pe=o.useCallback(e=>{d(s=>(s.splice(e,1),[...s]))},[n]),h=o.useCallback(()=>n.reduce((e,s)=>e+s.price*s.quantity,0),[n]);o.useCallback(()=>n.reduce((e,s)=>e+s.price*(s.discount/100)*s.quantity,0),[n]);const{mutate:xe}=R({mutationFn:e=>g.post(f.customers.create,e),onSuccess:async()=>{A.success("New Customer Has Been Created!"),await Q.invalidateQueries({queryKey:["customers"]})},onSettled:async()=>{C.onFalse()},onError:e=>{console.log(e)}}),he=t.jsx(B,{children:t.jsxs(l,{children:[t.jsx(r,{sx:{p:3},children:t.jsx(Me,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:"Search product...",InputProps:{startAdornment:t.jsx(Re,{position:"start",children:t.jsx(M,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:ce})}),t.jsx(r,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:O.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(e=>t.jsx(Qe,{payload:e,handleClick:ie,productName:e==null?void 0:e.name,image:H.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),t.jsx(Ne,{page:a.page,count:O.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})}),ge=t.jsxs(l,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[t.jsxs(l,{direction:"row",children:[t.jsx(r,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(r,{sx:{width:160,typography:"subtitle2"},children:I(h())||"-"})]}),t.jsxs(l,{direction:"row",alignItems:"center",children:[t.jsx(r,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(r,{sx:{width:160},children:t.jsx(r,{sx:{pl:4,mr:-.5},children:t.jsxs(l,{onClick:()=>{j.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${De(e.vars.palette.grey["500Channel"],.2)}`},children:[p,"%"]})})})]}),t.jsxs(l,{direction:"row",children:[t.jsxs(r,{sx:{color:"text.secondary"},children:["Tax (",c||"0","%)"]}),t.jsx(r,{sx:{width:160},children:c?I(Pe(h()-h()*(p/100),c)):"-"})]}),t.jsxs(l,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Total:"}),t.jsx(r,{sx:{width:160},children:I(we(h()-h()*(p/100),c))||"-"})]})]}),fe=t.jsx(B,{children:t.jsxs(l,{spacing:2,sx:{p:3},children:[t.jsxs(r,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs(ve,{sx:{m:1,minWidth:120},error:T&&!D,children:[t.jsx(Ee,{customers:m,onChange:ne}),T&&t.jsx(He,{error:!0,children:"Customer is required!"})]}),t.jsx(r,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(S,{variant:"contained",startIcon:t.jsx(M,{icon:"mingcute:add-line"}),onClick:()=>C.onToggle(),children:"New Customer"})}),t.jsx(v,{label:"Date",sx:{mt:2},format:"DD/MM/YYYY",value:k,onChange:e=>{ee(e)}}),t.jsx(v,{label:"Expiry",format:"DD/MM/YYYY",sx:{mt:2},value:Y,onChange:e=>{te(e)}})]}),t.jsx(Ae,{products:n,onDecrease:le,onIncrease:me,onDecreaseDiscount:de,onIncreaseDiscount:ue,handleDiscountDialog:se,removeItem:pe}),t.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[ge,t.jsxs(r,{display:"flex",gap:2,height:50,children:[t.jsx(S,{variant:"contained",onClick:()=>{if(isNaN(parseInt(D))){x(!0);return}if(x(!1),!n.length){K("Something went wrong. Product(s) are required!"),G("You need to add at least one product to this quotation. Please select a product from the list on the right."),F.onToggle();return}if(!isNaN(parseInt(D))&&n.length){x(!1);const e={discount:parseInt(p,10),name:V,quotationDate:k.format("YYYY-MM-DD"),expiredDate:Y.format("YYYY-MM-DD"),products:n.map(s=>({id:s.id,snapshotProductPrice:s.price,quantity:s.quantity})),customer:D};ae(e)}},children:"Save and Continue"}),t.jsx(S,{variant:"outlined",onClick:()=>d([]),children:"Clear All"})]})]})]})});return t.jsxs(b,{container:!0,spacing:3,children:[t.jsx(b,{xs:12,md:3,children:t.jsx(l,{children:he})}),t.jsx(b,{xs:12,md:9,children:t.jsx(l,{children:fe})}),t.jsx(Be,{open:C.value,onClose:C.onFalse,handler:xe}),t.jsx(ke,{discount:p,open:j.value,onClose:j.onFalse,handler:oe}),t.jsx(Ye,{product:X,discount:J,open:y.value,onClose:y.onFalse,handler:re}),t.jsx(Oe,{dialog:F,title:L,contentText:W})]})}function Ke({products:i,customers:m,taxPercentage:c}){return t.jsxs(be,{children:[t.jsx(Fe,{heading:"Create a new quotation",links:[{name:"Dashboard",href:w.dashboard.root},{name:"Quotation",href:w.dashboard.quotation.root},{name:"Add Quotation"}],sx:{mb:{xs:3,md:5}}}),t.jsx(Le,{products:i,customers:m,taxPercentage:c})]})}const We={title:`Create a new Quotation | Dashboard - ${H.site.name}`};function zt(){const i=q({queryKey:["products"],queryFn:async()=>(await g.get(f.products.list)).data}),m=q({queryKey:["customers"],queryFn:async()=>(await g.get(f.customers.list)).data}),c=q({queryKey:["account-application"],queryFn:async()=>{const{data:a}=await g.get(f.auth.application);return a}});return c.isLoading||i.isLoading||m.isLoading?t.jsx(Se,{}):c.isError||i.isError||i.isError?t.jsx(Ie,{route:w.dashboard.order.root}):t.jsxs(t.Fragment,{children:[t.jsx(qe,{children:t.jsxs("title",{children:[" ",We.title]})}),t.jsx(Ke,{products:i.data,customers:m.data,taxPercentage:c.data.taxPercentage})]})}export{zt as default};
