import{Y as b,r as o,W as De,ab as I,dp as Pe,dq as h,dm as g,dr as R,p as S,j as t,cY as L,S as l,B as n,I as v,C as W,v as be,ea as we,e8 as Se,cV as T,e as F,dn as Ie,dQ as Te,dU as Fe,H as Ee}from"./index-88qAwG8P.js";import{u as w,E as ke}from"./error-block-BTff90qR.js";import{u as Ye}from"./use-params-0IhfDin6.js";import{C as Oe}from"./custom-breadcrumbs-x7W5GMPl.js";import{u as H}from"./useMutation-Bjm4Nnvr.js";import{b as E}from"./format-number-B8FPsWIV.js";import{u as Qe}from"./use-table-BYPgfP9k.js";import{O as Be,a as Me,I as Ne,C as Ae}from"./order-discount-product-dialog-DO9bIDGV.js";import{P as Re}from"./product-Item-button-Ci8ZBUz0.js";import{C as Le}from"./component-pagination-custom-QKi9Y21H.js";import{O as ve}from"./order-product-table-01y8OgeE.js";import{O as He}from"./order-customer-create-dialog-Dyn7Y3RP.js";import{T as Ke}from"./TextField-CQpihH7F.js";import{I as We}from"./InputAdornment-Bg-m_z4_.js";import{F as $e}from"./FormControl-BXGEHd-f.js";import{F as Ge}from"./FormHelperText-DA7jizKd.js";import{D as K}from"./DatePicker-C1aTSbY2.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-F9o-_CVT.js";import"./DialogTitle-CvyYkdF0.js";import"./Autocomplete-Du1dNHWZ.js";import"./Select-DFC-Q2QB.js";import"./Menu-BDUaDfAf.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DD8qHu7J.js";import"./Chip-yDeOg34u.js";import"./form-provider-DSldc_Gv.js";import"./Rating-4WKJ8FeG.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DKQnkQYm.js";import"./index-DZ-uLlaR.js";import"./Slider-Cdch2KEI.js";import"./FormLabel-Ck5_RgM9.js";import"./RadioGroup-DZvtDFL6.js";import"./FormGroup-B0QesIKW.js";import"./FormControlLabel-ts_MkIWE.js";import"./utils-BDEKF9xP.js";import"./index-CySZofTa.js";import"./countries-DSLisFCy.js";import"./country-select-B-6neUw6.js";import"./InputLabel-B0kOUcWA.js";import"./Checkbox-Cpc8f1GH.js";import"./upload-avatar-CSIBlxGF.js";import"./image-CkDsegDa.js";import"./MobileDateTimePicker-pEp8pQrB.js";import"./Tabs-gBKEx7yr.js";import"./KeyboardArrowRight-fE7_2VJ7.js";import"./TablePagination-CrnuwEMO.js";import"./LastPage-B6xWbdc0.js";import"./TableCell-Cl8UZGxf.js";import"./table-head-custom-g2OgtrHv.js";import"./incrementer-button-BYzmwBWa.js";import"./schema-helper-_nyXaTEe.js";import"./LoadingButton-CM47tPre.js";import"./CircularProgress-DIm-Ts9z.js";import"./ListItem-Bt-kWpW8.js";function Ve({quotation:r,products:d,customers:x,taxPercentage:u}){var A;const a=Qe({defaultRowsPerPage:6}),c=b(),D=b(),P=b(),k=b(),[$,G]=o.useState(""),[V,J]=o.useState(""),U=De(),[q,qe]=o.useState(r==null?void 0:r.name),[f,z]=o.useState(r==null?void 0:r.discount),[X,Z]=o.useState(0),[Y,C]=o.useState(!1),[_,ee]=o.useState(),[j,te]=o.useState((A=r==null?void 0:r.customer)==null?void 0:A.id),[O,se]=o.useState(I(r==null?void 0:r.quotationDate)),[Q,re]=o.useState(r!=null&&r.expiredDate?I(r==null?void 0:r.expiredDate):I(new Date).add(1,"day")),[i,m]=o.useState([]),[B,M]=o.useState(d);o.useEffect(()=>{const e=[];for(const s of r==null?void 0:r.productToQuotation){const p={...s.product,quantity:s.quantity,discount:s.discount||0,price:s==null?void 0:s.snapshotProductPrice,snapshotProductPrice:s==null?void 0:s.price};e.push(p)}m(e)},[r]);const N=Pe(),oe=(e,s)=>{Z(s),ee(e),P.onToggle()},ae=e=>{z(e),D.onFalse()},ne=(e,s)=>{m(p=>(p[e].price=s,[...p])),P.onFalse()},{mutate:ie}=H({mutationFn:({id:e,payload:s})=>h.patch(g.quotation.edit+e,s),onSuccess:async()=>{R.success("New Quotation Has Been Created!"),await N.invalidateQueries({queryKey:["quotations"]})},onSettled:async()=>{U.push(S.dashboard.quotation.root)},onError:e=>{console.error(e)}}),ce=o.useCallback(e=>{te(e),C(!e)},[]),le=o.useCallback(e=>{m(s=>{const p=s.findIndex(ye=>ye.id===e.id);return p>=0?s[p].quantity+=1:(e.quantity=1,e.discount=0,s.push(e)),[...s]})},[]),de=o.useCallback(e=>{const s=e.target.value;s&&M(d.filter(p=>p.name.toLowerCase().indexOf(s)!==-1)),(s==null||s==="")&&M(d)},[]),ue=o.useCallback(e=>{m(s=>(s[e].quantity-=1,s[e].quantity===0&&s.splice(e,1),[...s]))},[i]),me=o.useCallback(e=>{m(s=>(s[e].discount>0&&(s[e].discount-=1),[...s]))},[]),pe=o.useCallback(e=>{m(s=>(s[e].discount<100&&(s[e].discount+=1),[...s]))},[]),xe=o.useCallback(e=>{m(s=>(s[e].quantity+=1,[...s]))},[i]),he=o.useCallback(e=>{m(s=>(s.splice(e,1),[...s]))},[i]),y=o.useCallback(()=>i.reduce((e,s)=>e+s.price*s.quantity,0),[i]);o.useCallback(()=>i.reduce((e,s)=>e+s.price*(s.discount/100)*s.quantity,0),[i]);const{mutate:ge}=H({mutationFn:e=>h.post(g.customers.create,e),onSuccess:async()=>{R.success("New Customer Has Been Created!")},onSettled:async()=>{await N.invalidateQueries({queryKey:["customers"]}),c.onFalse()},onError:e=>{console.log(e)}}),fe=t.jsx(L,{children:t.jsxs(l,{children:[t.jsx(n,{sx:{p:3},children:t.jsx(Ke,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:"Search product...",InputProps:{startAdornment:t.jsx(We,{position:"start",children:t.jsx(v,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:de})}),t.jsx(n,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:B.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(e=>t.jsx(Re,{payload:e,handleClick:le,productName:e==null?void 0:e.name,image:W.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),t.jsx(Le,{page:a.page,count:B.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})}),Ce=t.jsxs(l,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[t.jsxs(l,{direction:"row",children:[t.jsx(n,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(n,{sx:{width:160,typography:"subtitle2"},children:E(y())||"-"})]}),t.jsxs(l,{direction:"row",alignItems:"center",children:[t.jsx(n,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(n,{sx:{width:160},children:t.jsx(n,{sx:{pl:4,mr:-.5},children:t.jsxs(l,{onClick:()=>{D.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${be(e.vars.palette.grey["500Channel"],.2)}`},children:[f,"%"]})})})]}),t.jsxs(l,{direction:"row",children:[t.jsxs(n,{sx:{color:"text.secondary"},children:["Tax (",u||"0","%)"]}),t.jsx(n,{sx:{width:160},children:u?E(we(y()-y()*(f/100),u)):"-"})]}),t.jsxs(l,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Total:"}),t.jsx(n,{sx:{width:160},children:E(Se(y()-y()*(f/100),u))||"-"})]})]}),je=t.jsx(L,{children:t.jsxs(l,{spacing:2,sx:{p:3},children:[t.jsxs(n,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs($e,{sx:{m:1,minWidth:120},error:Y&&!j,children:[t.jsx(Ae,{customers:x,onChange:ce,selectedCustomer:j}),Y&&t.jsx(Ge,{error:!0,children:"Customer is required!"})]}),t.jsx(n,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(F,{variant:"contained",startIcon:t.jsx(v,{icon:"mingcute:add-line"}),onClick:()=>c.onToggle(),children:"New Customer"})}),t.jsx(K,{label:"Date",sx:{mt:2},format:"DD/MM/YYYY",value:O,onChange:e=>{se(e)}}),t.jsx(K,{label:"Expiry",sx:{mt:2},format:"DD/MM/YYYY",value:Q,onChange:e=>{re(e)}})]}),t.jsx(ve,{products:i,onDecrease:ue,onIncrease:xe,onDecreaseDiscount:me,onIncreaseDiscount:pe,handleDiscountDialog:oe,removeItem:he}),t.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[Ce,t.jsxs(n,{display:"flex",gap:2,height:50,children:[t.jsx(F,{variant:"contained",onClick:()=>{if(isNaN(parseInt(j))){C(!0);return}if(C(!1),!i.length){G("Something went wrong. Product(s) are required!"),J("You need to add at least one product to this quotation. Please select a product from the list on the right."),k.onToggle();return}if(!isNaN(parseInt(j))&&i.length){C(!1);const e={discount:parseInt(f,10),name:q,quotationDate:O.format("YYYY-MM-DD"),expiredDate:Q.format("YYYY-MM-DD"),products:i.map(s=>({id:s.id,snapshotProductPrice:s.price,quantity:s.quantity})),customer:j};ie({id:r.id,payload:e})}},children:"Save and Continue"}),t.jsx(F,{variant:"outlined",onClick:()=>m([]),children:"Clear All"})]})]})]})});return t.jsxs(T,{container:!0,spacing:3,children:[t.jsx(T,{xs:12,md:3,children:t.jsx(l,{children:fe})}),t.jsx(T,{xs:12,md:9,children:t.jsx(l,{children:je})}),t.jsx(He,{open:c.value,onClose:c.onFalse,handler:ge}),t.jsx(Be,{discount:f,open:D.value,onClose:D.onFalse,handler:ae}),t.jsx(Me,{product:_,discount:X,open:P.value,onClose:P.onFalse,handler:ne}),t.jsx(Ne,{dialog:k,title:$,contentText:V})]})}function Je({quotation:r,products:d,customers:x,taxPercentage:u}){Ie("quotations");const a=`Edit Quotation: #${r.ref}`;return t.jsxs(Te,{children:[t.jsx(Oe,{heading:a,links:[{name:"Dashboard",href:S.dashboard.root},{name:"Quotation",href:S.dashboard.quotation.root},{name:"Edit Quotation"}],sx:{mb:{xs:3,md:5}}}),t.jsx(Ve,{quotation:r,products:d,customers:x,taxPercentage:u})]})}const Ue={title:`Quotation Edit | Dashboard - ${W.site.name}`};function ts(){const{id:r=""}=Ye(),d=w({queryKey:["quotation",r],queryFn:async()=>{const{data:c}=await h.get(g.quotation.details+r);return c}}),x=w({queryKey:["products"],queryFn:async()=>(await h.get(g.products.list)).data}),u=w({queryKey:["customers"],queryFn:async()=>(await h.get(g.customers.list)).data}),a=w({queryKey:["account-application"],queryFn:async()=>{const{data:c}=await h.get(g.auth.application);return c}});return d.isLoading||a.isLoading||x.isLoading||u.isLoading?t.jsx(Fe,{}):d.isError||a.isError||x.isError||x.isError?t.jsx(ke,{route:S.dashboard.quotation.root}):t.jsxs(t.Fragment,{children:[t.jsx(Ee,{children:t.jsxs("title",{children:[" ",Ue.title]})}),t.jsx(Je,{quotation:d.data,products:x.data,customers:u.data,taxPercentage:a.data.taxPercentage})]})}export{ts as default};
