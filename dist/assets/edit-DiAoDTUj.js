import{br as W,Y as w,r as o,W as be,ab as S,dp as we,dq as h,dn as g,dr as B,p as I,j as t,cZ as $,S as d,B as n,I as v,C as H,v as Fe,ea as Ie,e8 as Se,e as T,cW as k,dQ as Te,dU as ke,H as Ee}from"./index-BrVky5Gg.js";import{u as F,E as Ye}from"./error-block-FcQeBxj7.js";import{u as Ve}from"./use-params-lRUlHp9M.js";import{C as Oe}from"./custom-breadcrumbs-BF1juKa-.js";import{u as K}from"./useMutation-CE0P_ta-.js";import{b as E}from"./format-number-BYcftzxu.js";import{u as Me}from"./use-table-DPRJgMt8.js";import{C as Ae,O as Re,a as Le,I as Qe}from"./order-discount-product-dialog-CLWQwkpg.js";import{P as Be}from"./product-Item-button-CMCvq_U0.js";import{C as $e}from"./component-pagination-custom-GZxjtojj.js";import{O as ve}from"./order-product-table-aLidpyQa.js";import{O as Ke}from"./order-customer-create-dialog-B1ukmS7_.js";import{T as Ne}from"./TextField-BzhmS018.js";import{I as We}from"./InputAdornment-DEzDbK1Q.js";import{F as He}from"./FormControl-DZf5wqQ9.js";import{F as Ge}from"./FormHelperText-DFhB8bFU.js";import{D as N}from"./DatePicker-B1JNPBiT.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-Bneue424.js";import"./DialogTitle-5kRkAohy.js";import"./Autocomplete-CdBrZWYz.js";import"./Select-6IXk9lW0.js";import"./Menu-DD-zT_J0.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-C8xLxBIT.js";import"./Chip-DP4Tp82d.js";import"./form-provider-IGnvse7Q.js";import"./Rating-Hlni2mlB.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DG5O80Yq.js";import"./index-rYiI9UdX.js";import"./Slider-MS8qHiiX.js";import"./FormLabel-ChyBHZVN.js";import"./RadioGroup-D0Qu_fwA.js";import"./FormGroup-DxT7LmQ0.js";import"./FormControlLabel-0HOCsOrO.js";import"./utils-lkMXEcUg.js";import"./index-Yn_vEU-0.js";import"./countries-DSLisFCy.js";import"./country-select-BuZykQim.js";import"./InputLabel-Dec_12dS.js";import"./Checkbox-CQHPQqdR.js";import"./upload-avatar-DQ7Fanyq.js";import"./image-C-59YYlQ.js";import"./MobileDateTimePicker-DDuapApM.js";import"./Tabs-BKfmXuvi.js";import"./KeyboardArrowRight-Bg2_dmW-.js";import"./TablePagination-B0Hol92q.js";import"./LastPage-CTqN6DYn.js";import"./TableCell-VebxIpQE.js";import"./table-head-custom-CKQJMo0x.js";import"./incrementer-button-w4nr0pul.js";import"./schema-helper-DBRyPFKX.js";import"./LoadingButton-a60uG7nr.js";import"./CircularProgress-BTXCWzN0.js";import"./ListItem-CVfDDPgr.js";function qe({quotation:r,products:l,customers:x,taxPercentage:u}){var Q;const i=Me({defaultRowsPerPage:6}),{t:a}=W("quotations"),P=w(),D=w(),b=w(),Y=w(),[G,q]=o.useState(""),[J,U]=o.useState(""),Z=be(),[z,Ze]=o.useState(r==null?void 0:r.name),[f,X]=o.useState(r==null?void 0:r.discount),[_,ee]=o.useState(0),[V,C]=o.useState(!1),[te,se]=o.useState(),[y,re]=o.useState((Q=r==null?void 0:r.customer)==null?void 0:Q.id),[O,oe]=o.useState(S(r==null?void 0:r.quotationDate)),[M,ae]=o.useState(r!=null&&r.expiredDate?S(r==null?void 0:r.expiredDate):S(new Date).add(1,"day")),[c,m]=o.useState([]),[A,R]=o.useState(l);o.useEffect(()=>{const e=[];for(const s of r==null?void 0:r.productToQuotation){const p={...s.product,quantity:s.quantity,discount:s.discount||0,price:s==null?void 0:s.snapshotProductPrice,snapshotProductPrice:s==null?void 0:s.price};e.push(p)}m(e)},[r]);const L=we(),ie=(e,s)=>{ee(s),se(e),b.onToggle()},ne=e=>{X(e),D.onFalse()},ce=(e,s)=>{m(p=>(p[e].price=s,[...p])),b.onFalse()},{mutate:de}=K({mutationFn:({id:e,payload:s})=>h.patch(g.quotation.edit+e,s),onSuccess:async()=>{B.success(a("editView.messages.toastMessages.createSuccess")),await L.invalidateQueries({queryKey:["quotations"]})},onSettled:async()=>{Z.push(I.dashboard.quotation.root)},onError:e=>{console.error(e)}}),le=o.useCallback(e=>{re(e),C(!e)},[]),ue=o.useCallback(e=>{m(s=>{const p=s.findIndex(De=>De.id===e.id);return p>=0?s[p].quantity+=1:(e.quantity=1,e.discount=0,s.push(e)),[...s]})},[]),me=o.useCallback(e=>{const s=e.target.value;s&&R(l.filter(p=>p.name.toLowerCase().indexOf(s)!==-1)),(s==null||s==="")&&R(l)},[]),pe=o.useCallback(e=>{m(s=>(s[e].quantity-=1,s[e].quantity===0&&s.splice(e,1),[...s]))},[c]),xe=o.useCallback(e=>{m(s=>(s[e].discount>0&&(s[e].discount-=1),[...s]))},[]),he=o.useCallback(e=>{m(s=>(s[e].discount<100&&(s[e].discount+=1),[...s]))},[]),ge=o.useCallback(e=>{m(s=>(s[e].quantity+=1,[...s]))},[c]),fe=o.useCallback(e=>{m(s=>(s.splice(e,1),[...s]))},[c]),j=o.useCallback(()=>c.reduce((e,s)=>e+s.price*s.quantity,0),[c]);o.useCallback(()=>c.reduce((e,s)=>e+s.price*(s.discount/100)*s.quantity,0),[c]);const{mutate:Ce}=K({mutationFn:e=>h.post(g.customers.create,e),onSuccess:async()=>{B.success(a("editView.messages.toastMessages.createCustomerSuccess"))},onSettled:async()=>{await L.invalidateQueries({queryKey:["customers"]}),P.onFalse()},onError:e=>{console.log(e)}}),ye=t.jsx($,{children:t.jsxs(d,{children:[t.jsx(n,{sx:{p:3},children:t.jsx(Ne,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:a("editView.productsList.searchPlaceholder"),InputProps:{startAdornment:t.jsx(We,{position:"start",children:t.jsx(v,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:me})}),t.jsx(n,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:A.slice(i.page*i.rowsPerPage,i.page*i.rowsPerPage+i.rowsPerPage).map(e=>t.jsx(Be,{payload:e,handleClick:ue,productName:e==null?void 0:e.name,image:H.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),t.jsx($e,{page:i.page,count:A.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:i.onChangePage,onRowsPerPageChange:i.onChangeRowsPerPage})]})}),je=t.jsxs(d,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[t.jsxs(d,{direction:"row",children:[t.jsx(n,{sx:{color:"text.secondary"},children:a("editView.editForm.extra.subTotal")}),t.jsx(n,{sx:{width:160,typography:"subtitle2"},children:E(j())||"-"})]}),t.jsxs(d,{direction:"row",alignItems:"center",children:[t.jsx(n,{sx:{color:"text.secondary"},children:a("editView.editForm.extra.discount")}),t.jsx(n,{sx:{width:160},children:t.jsx(n,{sx:{pl:4,mr:-.5},children:t.jsxs(d,{onClick:()=>{D.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${Fe(e.vars.palette.grey["500Channel"],.2)}`},children:[f,"%"]})})})]}),t.jsxs(d,{direction:"row",children:[t.jsxs(n,{sx:{color:"text.secondary"},children:[a("editView.editForm.extra.tax")," (",u||"0","%)"]}),t.jsx(n,{sx:{width:160},children:u?E(Ie(j()-j()*(f/100),u)):"-"})]}),t.jsxs(d,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsxs("div",{children:[a("editView.editForm.extra.total"),":"]}),t.jsx(n,{sx:{width:160},children:E(Se(j()-j()*(f/100),u))||"-"})]})]}),Pe=t.jsx($,{children:t.jsxs(d,{spacing:2,sx:{p:3},children:[t.jsxs(n,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs(He,{sx:{m:1,minWidth:120},error:V&&!y,children:[t.jsx(Ae,{customers:x,onChange:le,selectedCustomer:y}),V&&t.jsx(Ge,{error:!0,children:"Customer is required!"})]}),t.jsx(n,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(T,{variant:"contained",startIcon:t.jsx(v,{icon:"mingcute:add-line"}),onClick:()=>P.onToggle(),children:a("editView.editForm.buttons.addCustomer")})}),t.jsx(N,{label:a("editView.editForm.fields.date.label"),sx:{mt:2},format:"DD/MM/YYYY",value:O,onChange:e=>{oe(e)}}),t.jsx(N,{label:a("editView.editForm.fields.expiry.label"),sx:{mt:2},format:"DD/MM/YYYY",value:M,onChange:e=>{ae(e)}})]}),t.jsx(ve,{products:c,onDecrease:pe,onIncrease:ge,onDecreaseDiscount:xe,onIncreaseDiscount:he,handleDiscountDialog:ie,removeItem:fe}),t.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[je,t.jsxs(n,{display:"flex",gap:2,height:50,children:[t.jsx(T,{variant:"contained",onClick:()=>{if(isNaN(parseInt(y))){C(!0);return}if(C(!1),!c.length){q("Something went wrong. Product(s) are required!"),U("You need to add at least one product to this quotation. Please select a product from the list on the right."),Y.onToggle();return}if(!isNaN(parseInt(y))&&c.length){C(!1);const e={discount:parseInt(f,10),name:z,quotationDate:O.format("YYYY-MM-DD"),expiredDate:M.format("YYYY-MM-DD"),products:c.map(s=>({id:s.id,snapshotProductPrice:s.price,quantity:s.quantity})),customer:y};de({id:r.id,payload:e})}},children:a("editView.editForm.buttons.expiry.saveAndContinue")}),t.jsx(T,{variant:"outlined",onClick:()=>m([]),children:a("editView.editForm.buttons.expiry.clearAll")})]})]})]})});return t.jsxs(k,{container:!0,spacing:3,children:[t.jsx(k,{xs:12,md:3,children:t.jsx(d,{children:ye})}),t.jsx(k,{xs:12,md:9,children:t.jsx(d,{children:Pe})}),t.jsx(Ke,{open:P.value,onClose:P.onFalse,handler:Ce}),t.jsx(Re,{discount:f,open:D.value,onClose:D.onFalse,handler:ne}),t.jsx(Le,{product:te,discount:_,open:b.value,onClose:b.onFalse,handler:ce}),t.jsx(Qe,{dialog:Y,title:G,contentText:J})]})}function Je({quotation:r,products:l,customers:x,taxPercentage:u}){const{t:i}=W("quotations"),a=`${i("editView.pageTitle")}${r.ref}`;return t.jsxs(Te,{children:[t.jsx(Oe,{heading:a,links:[{name:`${i("editView.breadCrumbsPageRootTitle")}`,href:I.dashboard.root},{name:`${i("editView.breadCrumbsParentPageTitle")}`,href:I.dashboard.quotation.root},{name:`${i("editView.breadCrumbsPageTitle")}`}],sx:{mb:{xs:3,md:5}}}),t.jsx(qe,{quotation:r,products:l,customers:x,taxPercentage:u})]})}const Ue={title:`Quotation Edit | Dashboard - ${H.site.name}`};function ss(){const{id:r=""}=Ve(),l=F({queryKey:["quotation",r],queryFn:async()=>{const{data:a}=await h.get(g.quotation.details+r);return a}}),x=F({queryKey:["products"],queryFn:async()=>(await h.get(g.products.list)).data}),u=F({queryKey:["customers"],queryFn:async()=>(await h.get(g.customers.list)).data}),i=F({queryKey:["account-application"],queryFn:async()=>{const{data:a}=await h.get(g.auth.application);return a}});return l.isLoading||i.isLoading||x.isLoading||u.isLoading?t.jsx(ke,{}):l.isError||i.isError||x.isError||x.isError?t.jsx(Ye,{route:I.dashboard.quotation.root}):t.jsxs(t.Fragment,{children:[t.jsx(Ee,{children:t.jsxs("title",{children:[" ",Ue.title]})}),t.jsx(Je,{quotation:l.data,products:x.data,customers:u.data,taxPercentage:i.data.taxPercentage})]})}export{ss as default};
