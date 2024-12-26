import{i as b,r as o,g as De,aU as I,dn as Pe,dp as h,dm as g,dq as R,p as S,j as t,cY as L,S as l,B as n,I as v,C as W,v as be,ea as we,e8 as Se,cV as T,e as F,dP as Ie,dQ as Te,dU as Fe,H as Ee}from"./index-BEaGYMEI.js";import{u as w,E as ke}from"./error-block-BQYINy50.js";import{u as Ye}from"./use-params-D6bIDsGA.js";import{C as Oe}from"./custom-breadcrumbs-D4hwk-rw.js";import{u as H}from"./useMutation-CD7lT4vI.js";import{b as E}from"./format-number-JDGLw5r5.js";import{u as Qe}from"./use-table-DsQxT_g8.js";import{O as Be,a as Me,I as Ne,C as Ae}from"./order-discount-product-dialog-DUy2d9kM.js";import{P as Re}from"./product-Item-button-CoLt0Smh.js";import{C as Le}from"./component-pagination-custom-BstsPM_m.js";import{O as ve}from"./order-product-table-C6uk498K.js";import{O as He}from"./order-customer-create-dialog-DwB8FjJ5.js";import{T as Ke}from"./TextField-CIxpyOlN.js";import{I as We}from"./InputAdornment-CGsQ7T7u.js";import{F as $e}from"./FormControl-2hnEuYCX.js";import{F as Ge}from"./FormHelperText-BJ35fbuN.js";import{D as K}from"./DatePicker-CrD84yY4.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-kX6pwS8I.js";import"./DialogTitle-CjPJnsJT.js";import"./Autocomplete-DxNaZqwA.js";import"./Select-C-U3VYQj.js";import"./Menu-Dc9eDgdb.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-Cx_XAmin.js";import"./Chip-Db-a91wo.js";import"./form-provider-D1JqQzDy.js";import"./Rating-OrTvPT5o.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-BIhbmUVt.js";import"./index-MqrcwFfK.js";import"./Slider-Vpiw_yof.js";import"./FormLabel-DT9mGYCJ.js";import"./RadioGroup-CBePuX0v.js";import"./FormGroup-Co3Xm8J_.js";import"./FormControlLabel-BO7gRcil.js";import"./utils-BEJZLJ_B.js";import"./index-DHKdtuyp.js";import"./countries-DSLisFCy.js";import"./country-select-UHhuvlSO.js";import"./InputLabel-CeWPpGeQ.js";import"./Checkbox-DRhnNWXi.js";import"./upload-avatar-Bt3nnzfi.js";import"./image-C-zCjJjA.js";import"./MobileDateTimePicker-hl_QFTv-.js";import"./Tabs-CAp3wR44.js";import"./KeyboardArrowRight-BWGrV5E8.js";import"./TablePagination-BtzWghPM.js";import"./LastPage-BtJVqGJo.js";import"./TableCell-CzBf4-Ov.js";import"./table-head-custom-Drg40nu1.js";import"./incrementer-button-Ct55v_XG.js";import"./schema-helper-B8q_BDb0.js";import"./LoadingButton-EriFvYzy.js";import"./CircularProgress-Dqum4YNW.js";import"./ListItem-BFzJ2Xb7.js";function Ue({quotation:r,products:d,customers:x,taxPercentage:u}){var A;const a=Qe({defaultRowsPerPage:6}),c=b(),D=b(),P=b(),k=b(),[$,G]=o.useState(""),[U,V]=o.useState(""),J=De(),[q,qe]=o.useState(r==null?void 0:r.name),[f,z]=o.useState(r==null?void 0:r.discount),[X,Z]=o.useState(0),[Y,C]=o.useState(!1),[_,ee]=o.useState(),[j,te]=o.useState((A=r==null?void 0:r.customer)==null?void 0:A.id),[O,se]=o.useState(I(r==null?void 0:r.quotationDate)),[Q,re]=o.useState(r!=null&&r.expiredDate?I(r==null?void 0:r.expiredDate):I(new Date).add(1,"day")),[i,m]=o.useState([]),[B,M]=o.useState(d);o.useEffect(()=>{const e=[];for(const s of r==null?void 0:r.productToQuotation){const p={...s.product,quantity:s.quantity,discount:s.discount||0,price:s==null?void 0:s.snapshotProductPrice,snapshotProductPrice:s==null?void 0:s.price};e.push(p)}m(e)},[r]);const N=Pe(),oe=(e,s)=>{Z(s),ee(e),P.onToggle()},ae=e=>{z(e),D.onFalse()},ne=(e,s)=>{m(p=>(p[e].price=s,[...p])),P.onFalse()},{mutate:ie}=H({mutationFn:({id:e,payload:s})=>h.patch(g.quotation.edit+e,s),onSuccess:async()=>{R.success("New Quotation Has Been Created!"),await N.invalidateQueries({queryKey:["quotations"]})},onSettled:async()=>{J.push(S.dashboard.quotation.root)},onError:e=>{console.error(e)}}),ce=o.useCallback(e=>{te(e),C(!e)},[]),le=o.useCallback(e=>{m(s=>{const p=s.findIndex(ye=>ye.id===e.id);return p>=0?s[p].quantity+=1:(e.quantity=1,e.discount=0,s.push(e)),[...s]})},[]),de=o.useCallback(e=>{const s=e.target.value;s&&M(d.filter(p=>p.name.toLowerCase().indexOf(s)!==-1)),(s==null||s==="")&&M(d)},[]),ue=o.useCallback(e=>{m(s=>(s[e].quantity-=1,s[e].quantity===0&&s.splice(e,1),[...s]))},[i]),me=o.useCallback(e=>{m(s=>(s[e].discount>0&&(s[e].discount-=1),[...s]))},[]),pe=o.useCallback(e=>{m(s=>(s[e].discount<100&&(s[e].discount+=1),[...s]))},[]),xe=o.useCallback(e=>{m(s=>(s[e].quantity+=1,[...s]))},[i]),he=o.useCallback(e=>{m(s=>(s.splice(e,1),[...s]))},[i]),y=o.useCallback(()=>i.reduce((e,s)=>e+s.price*s.quantity,0),[i]);o.useCallback(()=>i.reduce((e,s)=>e+s.price*(s.discount/100)*s.quantity,0),[i]);const{mutate:ge}=H({mutationFn:e=>h.post(g.customers.create,e),onSuccess:async()=>{R.success("New Customer Has Been Created!")},onSettled:async()=>{await N.invalidateQueries({queryKey:["customers"]}),c.onFalse()},onError:e=>{console.log(e)}}),fe=t.jsx(L,{children:t.jsxs(l,{children:[t.jsx(n,{sx:{p:3},children:t.jsx(Ke,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:"Search product...",InputProps:{startAdornment:t.jsx(We,{position:"start",children:t.jsx(v,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:de})}),t.jsx(n,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:B.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(e=>t.jsx(Re,{payload:e,handleClick:le,productName:e==null?void 0:e.name,image:W.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),t.jsx(Le,{page:a.page,count:B.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})}),Ce=t.jsxs(l,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[t.jsxs(l,{direction:"row",children:[t.jsx(n,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(n,{sx:{width:160,typography:"subtitle2"},children:E(y())||"-"})]}),t.jsxs(l,{direction:"row",alignItems:"center",children:[t.jsx(n,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(n,{sx:{width:160},children:t.jsx(n,{sx:{pl:4,mr:-.5},children:t.jsxs(l,{onClick:()=>{D.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${be(e.vars.palette.grey["500Channel"],.2)}`},children:[f,"%"]})})})]}),t.jsxs(l,{direction:"row",children:[t.jsxs(n,{sx:{color:"text.secondary"},children:["Tax (",u||"0","%)"]}),t.jsx(n,{sx:{width:160},children:u?E(we(y()-y()*(f/100),u)):"-"})]}),t.jsxs(l,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Total:"}),t.jsx(n,{sx:{width:160},children:E(Se(y()-y()*(f/100),u))||"-"})]})]}),je=t.jsx(L,{children:t.jsxs(l,{spacing:2,sx:{p:3},children:[t.jsxs(n,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs($e,{sx:{m:1,minWidth:120},error:Y&&!j,children:[t.jsx(Ae,{customers:x,onChange:ce,selectedCustomer:j}),Y&&t.jsx(Ge,{error:!0,children:"Customer is required!"})]}),t.jsx(n,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(F,{variant:"contained",startIcon:t.jsx(v,{icon:"mingcute:add-line"}),onClick:()=>c.onToggle(),children:"New Customer"})}),t.jsx(K,{label:"Date",sx:{mt:2},format:"DD/MM/YYYY",value:O,onChange:e=>{se(e)}}),t.jsx(K,{label:"Expiry",sx:{mt:2},format:"DD/MM/YYYY",value:Q,onChange:e=>{re(e)}})]}),t.jsx(ve,{products:i,onDecrease:ue,onIncrease:xe,onDecreaseDiscount:me,onIncreaseDiscount:pe,handleDiscountDialog:oe,removeItem:he}),t.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[Ce,t.jsxs(n,{display:"flex",gap:2,height:50,children:[t.jsx(F,{variant:"contained",onClick:()=>{if(isNaN(parseInt(j))){C(!0);return}if(C(!1),!i.length){G("Something went wrong. Product(s) are required!"),V("You need to add at least one product to this quotation. Please select a product from the list on the right."),k.onToggle();return}if(!isNaN(parseInt(j))&&i.length){C(!1);const e={discount:parseInt(f,10),name:q,quotationDate:O.format("YYYY-MM-DD"),expiredDate:Q.format("YYYY-MM-DD"),products:i.map(s=>({id:s.id,snapshotProductPrice:s.price,quantity:s.quantity})),customer:j};ie({id:r.id,payload:e})}},children:"Save and Continue"}),t.jsx(F,{variant:"outlined",onClick:()=>m([]),children:"Clear All"})]})]})]})});return t.jsxs(T,{container:!0,spacing:3,children:[t.jsx(T,{xs:12,md:3,children:t.jsx(l,{children:fe})}),t.jsx(T,{xs:12,md:9,children:t.jsx(l,{children:je})}),t.jsx(He,{open:c.value,onClose:c.onFalse,handler:ge}),t.jsx(Be,{discount:f,open:D.value,onClose:D.onFalse,handler:ae}),t.jsx(Me,{product:_,discount:X,open:P.value,onClose:P.onFalse,handler:ne}),t.jsx(Ne,{dialog:k,title:$,contentText:U})]})}function Ve({quotation:r,products:d,customers:x,taxPercentage:u}){Ie("quotations");const a=`Edit Quotation: #${r.ref}`;return t.jsxs(Te,{children:[t.jsx(Oe,{heading:a,links:[{name:"Dashboard",href:S.dashboard.root},{name:"Quotation",href:S.dashboard.quotation.root},{name:"Edit Quotation"}],sx:{mb:{xs:3,md:5}}}),t.jsx(Ue,{quotation:r,products:d,customers:x,taxPercentage:u})]})}const Je={title:`Quotation Edit | Dashboard - ${W.site.name}`};function ts(){const{id:r=""}=Ye(),d=w({queryKey:["quotation",r],queryFn:async()=>{const{data:c}=await h.get(g.quotation.details+r);return c}}),x=w({queryKey:["products"],queryFn:async()=>(await h.get(g.products.list)).data}),u=w({queryKey:["customers"],queryFn:async()=>(await h.get(g.customers.list)).data}),a=w({queryKey:["account-application"],queryFn:async()=>{const{data:c}=await h.get(g.auth.application);return c}});return d.isLoading||a.isLoading||x.isLoading||u.isLoading?t.jsx(Fe,{}):d.isError||a.isError||x.isError||x.isError?t.jsx(ke,{route:S.dashboard.quotation.root}):t.jsxs(t.Fragment,{children:[t.jsx(Ee,{children:t.jsxs("title",{children:[" ",Je.title]})}),t.jsx(Ve,{quotation:d.data,products:x.data,customers:u.data,taxPercentage:a.data.taxPercentage})]})}export{ts as default};
