import{i as b,r as o,g as De,aW as I,dn as Pe,dp as h,dm as g,dq as R,p as S,j as t,cY as L,S as l,B as n,I as v,C as W,v as be,ea as we,e8 as Se,cV as T,e as F,dP as Ie,dT as Te,H as Fe}from"./index-Bd-eTnUo.js";import{u as w,E as Ee}from"./error-block-BS5tpnF6.js";import{u as ke}from"./use-params-mGjHkfG-.js";import{C as Ye}from"./custom-breadcrumbs-DTO7Kcnb.js";import{u as H}from"./useMutation-u5J1ehDK.js";import{b as E}from"./format-number-fb_gV84D.js";import{u as Oe}from"./use-table-u_7TBFPr.js";import{O as Qe,a as Be,I as Me,C as Ne}from"./order-discount-product-dialog-DW1Vddko.js";import{P as Ae}from"./product-Item-button-DtWod1L2.js";import{C as Re}from"./component-pagination-custom-BEYB2ght.js";import{O as Le}from"./order-product-table-B9mm4VWm.js";import{O as ve}from"./order-customer-create-dialog-BO8XZvCx.js";import{T as He}from"./TextField-vLvEPjtq.js";import{I as Ke}from"./InputAdornment-lZ34KsGy.js";import{F as We}from"./FormControl-foeg92WO.js";import{F as $e}from"./FormHelperText-B5ubrhII.js";import{D as K}from"./DatePicker-CkmrGU-z.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-CSJWAbbl.js";import"./DialogTitle-B8mZEMK5.js";import"./Autocomplete-BvvQg5zj.js";import"./Select-CgDIp826.js";import"./Menu-DsAfc42u.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-Bi4j64cN.js";import"./Chip-Dr3NBI2P.js";import"./form-provider-DYd42b-C.js";import"./Rating-DYSQoA2b.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-BQLpkWNs.js";import"./index-DForoPTP.js";import"./Slider-D3EoM31h.js";import"./FormLabel-CGKWwmwk.js";import"./RadioGroup-BY_W1tLV.js";import"./FormGroup-3pMN7gVE.js";import"./FormControlLabel-D7N_BUBn.js";import"./utils-C3kf0HpO.js";import"./index-uXQ4a3gx.js";import"./countries-DSLisFCy.js";import"./country-select-DHd-Zgtr.js";import"./InputLabel-sjrS-T3g.js";import"./Checkbox-k73MRx-8.js";import"./upload-avatar-plDx98Qr.js";import"./image-D6QpXtrM.js";import"./MobileDateTimePicker-Crw9Kej1.js";import"./Tabs-DoRb6H0h.js";import"./KeyboardArrowRight-Do0Z-cRD.js";import"./TablePagination-oOIHrBkR.js";import"./LastPage-CMwRe5Xs.js";import"./TableCell-GBTARU-z.js";import"./table-head-custom-Bxkk-Jk_.js";import"./incrementer-button-DSJd2HUt.js";import"./schema-helper-g8tGIFLl.js";import"./LoadingButton-Bzsd-25i.js";import"./CircularProgress-DvJtfR95.js";import"./ListItem-CVBleuHu.js";function Ge({quotation:r,products:d,customers:x,taxPercentage:u}){var A;const a=Oe({defaultRowsPerPage:6}),c=b(),D=b(),P=b(),k=b(),[$,G]=o.useState(""),[V,J]=o.useState(""),z=De(),[U,ze]=o.useState(r==null?void 0:r.name),[f,X]=o.useState(r==null?void 0:r.discount),[Z,_]=o.useState(0),[Y,C]=o.useState(!1),[q,ee]=o.useState(),[j,te]=o.useState((A=r==null?void 0:r.customer)==null?void 0:A.id),[O,se]=o.useState(I(r==null?void 0:r.quotationDate)),[Q,re]=o.useState(r!=null&&r.expiredDate?I(r==null?void 0:r.expiredDate):I(new Date).add(1,"day")),[i,m]=o.useState([]),[B,M]=o.useState(d);o.useEffect(()=>{const e=[];for(const s of r==null?void 0:r.productToQuotation){const p={...s.product,quantity:s.quantity,discount:s.discount||0,price:s==null?void 0:s.snapshotProductPrice,snapshotProductPrice:s==null?void 0:s.price};e.push(p)}m(e)},[r]);const N=Pe(),oe=(e,s)=>{_(s),ee(e),P.onToggle()},ae=e=>{X(e),D.onFalse()},ne=(e,s)=>{m(p=>(p[e].price=s,[...p])),P.onFalse()},{mutate:ie}=H({mutationFn:({id:e,payload:s})=>h.patch(g.quotation.edit+e,s),onSuccess:async()=>{R.success("New Quotation Has Been Created!"),await N.invalidateQueries({queryKey:["quotations"]})},onSettled:async()=>{z.push(S.dashboard.quotation.root)},onError:e=>{console.error(e)}}),ce=o.useCallback(e=>{te(e),C(!e)},[]),le=o.useCallback(e=>{m(s=>{const p=s.findIndex(ye=>ye.id===e.id);return p>=0?s[p].quantity+=1:(e.quantity=1,e.discount=0,s.push(e)),[...s]})},[]),de=o.useCallback(e=>{const s=e.target.value;s&&M(d.filter(p=>p.name.toLowerCase().indexOf(s)!==-1)),(s==null||s==="")&&M(d)},[]),ue=o.useCallback(e=>{m(s=>(s[e].quantity-=1,s[e].quantity===0&&s.splice(e,1),[...s]))},[i]),me=o.useCallback(e=>{m(s=>(s[e].discount>0&&(s[e].discount-=1),[...s]))},[]),pe=o.useCallback(e=>{m(s=>(s[e].discount<100&&(s[e].discount+=1),[...s]))},[]),xe=o.useCallback(e=>{m(s=>(s[e].quantity+=1,[...s]))},[i]),he=o.useCallback(e=>{m(s=>(s.splice(e,1),[...s]))},[i]),y=o.useCallback(()=>i.reduce((e,s)=>e+s.price*s.quantity,0),[i]);o.useCallback(()=>i.reduce((e,s)=>e+s.price*(s.discount/100)*s.quantity,0),[i]);const{mutate:ge}=H({mutationFn:e=>h.post(g.customers.create,e),onSuccess:async()=>{R.success("New Customer Has Been Created!")},onSettled:async()=>{await N.invalidateQueries({queryKey:["customers"]}),c.onFalse()},onError:e=>{console.log(e)}}),fe=t.jsx(L,{children:t.jsxs(l,{children:[t.jsx(n,{sx:{p:3},children:t.jsx(He,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:"Search product...",InputProps:{startAdornment:t.jsx(Ke,{position:"start",children:t.jsx(v,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:de})}),t.jsx(n,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:B.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(e=>t.jsx(Ae,{payload:e,handleClick:le,productName:e==null?void 0:e.name,image:W.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),t.jsx(Re,{page:a.page,count:B.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})}),Ce=t.jsxs(l,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[t.jsxs(l,{direction:"row",children:[t.jsx(n,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(n,{sx:{width:160,typography:"subtitle2"},children:E(y())||"-"})]}),t.jsxs(l,{direction:"row",alignItems:"center",children:[t.jsx(n,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(n,{sx:{width:160},children:t.jsx(n,{sx:{pl:4,mr:-.5},children:t.jsxs(l,{onClick:()=>{D.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${be(e.vars.palette.grey["500Channel"],.2)}`},children:[f,"%"]})})})]}),t.jsxs(l,{direction:"row",children:[t.jsxs(n,{sx:{color:"text.secondary"},children:["Tax (",u||"0","%)"]}),t.jsx(n,{sx:{width:160},children:u?E(we(y()-y()*(f/100),u)):"-"})]}),t.jsxs(l,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Total:"}),t.jsx(n,{sx:{width:160},children:E(Se(y()-y()*(f/100),u))||"-"})]})]}),je=t.jsx(L,{children:t.jsxs(l,{spacing:2,sx:{p:3},children:[t.jsxs(n,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs(We,{sx:{m:1,minWidth:120},error:Y&&!j,children:[t.jsx(Ne,{customers:x,onChange:ce,selectedCustomer:j}),Y&&t.jsx($e,{error:!0,children:"Customer is required!"})]}),t.jsx(n,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(F,{variant:"contained",startIcon:t.jsx(v,{icon:"mingcute:add-line"}),onClick:()=>c.onToggle(),children:"New Customer"})}),t.jsx(K,{label:"Date",sx:{mt:2},format:"DD/MM/YYYY",value:O,onChange:e=>{se(e)}}),t.jsx(K,{label:"Expiry",sx:{mt:2},format:"DD/MM/YYYY",value:Q,onChange:e=>{re(e)}})]}),t.jsx(Le,{products:i,onDecrease:ue,onIncrease:xe,onDecreaseDiscount:me,onIncreaseDiscount:pe,handleDiscountDialog:oe,removeItem:he}),t.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[Ce,t.jsxs(n,{display:"flex",gap:2,height:50,children:[t.jsx(F,{variant:"contained",onClick:()=>{if(isNaN(parseInt(j))){C(!0);return}if(C(!1),!i.length){G("Something went wrong. Product(s) are required!"),J("You need to add at least one product to this quotation. Please select a product from the list on the right."),k.onToggle();return}if(!isNaN(parseInt(j))&&i.length){C(!1);const e={discount:parseInt(f,10),name:U,quotationDate:O.format("YYYY-MM-DD"),expiredDate:Q.format("YYYY-MM-DD"),products:i.map(s=>({id:s.id,snapshotProductPrice:s.price,quantity:s.quantity})),customer:j};ie({id:r.id,payload:e})}},children:"Save and Continue"}),t.jsx(F,{variant:"outlined",onClick:()=>m([]),children:"Clear All"})]})]})]})});return t.jsxs(T,{container:!0,spacing:3,children:[t.jsx(T,{xs:12,md:3,children:t.jsx(l,{children:fe})}),t.jsx(T,{xs:12,md:9,children:t.jsx(l,{children:je})}),t.jsx(ve,{open:c.value,onClose:c.onFalse,handler:ge}),t.jsx(Qe,{discount:f,open:D.value,onClose:D.onFalse,handler:ae}),t.jsx(Be,{product:q,discount:Z,open:P.value,onClose:P.onFalse,handler:ne}),t.jsx(Me,{dialog:k,title:$,contentText:V})]})}function Ve({quotation:r,products:d,customers:x,taxPercentage:u}){const a=`Edit Quotation: #${r.ref}`;return t.jsxs(Ie,{children:[t.jsx(Ye,{heading:a,links:[{name:"Dashboard",href:S.dashboard.root},{name:"Quotation",href:S.dashboard.quotation.root},{name:"Edit Quotation"}],sx:{mb:{xs:3,md:5}}}),t.jsx(Ge,{quotation:r,products:d,customers:x,taxPercentage:u})]})}const Je={title:`Quotation Edit | Dashboard - ${W.site.name}`};function es(){const{id:r=""}=ke(),d=w({queryKey:["quotation",r],queryFn:async()=>{const{data:c}=await h.get(g.quotation.details+r);return c}}),x=w({queryKey:["products"],queryFn:async()=>(await h.get(g.products.list)).data}),u=w({queryKey:["customers"],queryFn:async()=>(await h.get(g.customers.list)).data}),a=w({queryKey:["account-application"],queryFn:async()=>{const{data:c}=await h.get(g.auth.application);return c}});return d.isLoading||a.isLoading||x.isLoading||u.isLoading?t.jsx(Te,{}):d.isError||a.isError||x.isError||x.isError?t.jsx(Ee,{route:S.dashboard.quotation.root}):t.jsxs(t.Fragment,{children:[t.jsx(Fe,{children:t.jsxs("title",{children:[" ",Je.title]})}),t.jsx(Ve,{quotation:d.data,products:x.data,customers:u.data,taxPercentage:a.data.taxPercentage})]})}export{es as default};
