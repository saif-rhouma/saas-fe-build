import{i as b,r as o,g as De,aW as I,dn as Pe,dp as h,dm as g,dq as R,p as S,j as t,cY as L,S as l,B as n,I as v,C as W,v as be,ea as we,e8 as Se,cV as T,e as F,dP as Ie,dT as Te,H as Fe}from"./index-dnffYGPF.js";import{u as w,E as Ee}from"./error-block-B4gGIhQT.js";import{u as ke}from"./use-params-C_1lhTdb.js";import{C as Ye}from"./custom-breadcrumbs-CeSyQC80.js";import{u as H}from"./useMutation-BZOm9juL.js";import{b as E}from"./format-number-Cdw2u6FO.js";import{u as Oe}from"./use-table-GT5S5c4d.js";import{O as Qe,a as Be,I as Me,C as Ne}from"./order-discount-product-dialog-DQ4X6JNU.js";import{P as Ae}from"./product-Item-button-X79U-wAB.js";import{C as Re}from"./component-pagination-custom-Cet3JEs1.js";import{O as Le}from"./order-product-table-5N0SUI8h.js";import{O as ve}from"./order-customer-create-dialog-D_s9mkCo.js";import{T as He}from"./TextField-CXid-WzZ.js";import{I as Ke}from"./InputAdornment-CP4MkqJg.js";import{F as We}from"./FormControl-BRVLZ6vc.js";import{F as $e}from"./FormHelperText-DXwfOPf-.js";import{D as K}from"./DatePicker-B8yVgoxT.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-C0Vz7dRD.js";import"./DialogTitle-CquLbS5k.js";import"./Autocomplete-8nyimgX5.js";import"./Select-C4D05hWU.js";import"./Menu-uKMGOhe2.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-yFOqp3RP.js";import"./Chip-BYZ3Frpb.js";import"./form-provider-CITdfumP.js";import"./Rating-BNuyGKbg.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-BrUPx9bQ.js";import"./index-B9dpO8f9.js";import"./Slider-DGrZGzhI.js";import"./FormLabel-BxuKWCPx.js";import"./RadioGroup-DQr9LGT6.js";import"./FormGroup-V-H13eeJ.js";import"./FormControlLabel-DCf9vair.js";import"./utils-CQ22Mu-N.js";import"./index-3LIzsCGp.js";import"./countries-DSLisFCy.js";import"./country-select-D0uFWVT7.js";import"./InputLabel-BD7j51Pf.js";import"./Checkbox-BH9BFK-7.js";import"./upload-avatar-CkudrcQM.js";import"./image-Bobk4gjY.js";import"./MobileDateTimePicker-B34Jce81.js";import"./Tabs-D57G9S_c.js";import"./KeyboardArrowRight-RY7Zbvek.js";import"./TablePagination-D7UlSYKH.js";import"./LastPage-fSUI9YMj.js";import"./TableCell-BayvW16s.js";import"./table-head-custom-CjD5Hw1j.js";import"./incrementer-button-Dc9-u0Cq.js";import"./schema-helper-D9jMe05D.js";import"./LoadingButton-C6C_t6P4.js";import"./CircularProgress-DxQyBC0I.js";import"./ListItem-CHaPu4TZ.js";function Ge({quotation:r,products:d,customers:x,taxPercentage:u}){var A;const a=Oe({defaultRowsPerPage:6}),c=b(),y=b(),D=b(),k=b(),[$,G]=o.useState(""),[V,J]=o.useState(""),z=De(),[U,ze]=o.useState(r==null?void 0:r.name),[f,X]=o.useState(r==null?void 0:r.discount),[Z,_]=o.useState(0),[Y,C]=o.useState(!1),[q,ee]=o.useState(),[P,te]=o.useState((A=r==null?void 0:r.customer)==null?void 0:A.id),[O,se]=o.useState(I(r==null?void 0:r.quotationDate)),[Q,re]=o.useState(r!=null&&r.expiredDate?I(r==null?void 0:r.expiredDate):I(new Date).add(1,"day")),[i,m]=o.useState([]),[B,M]=o.useState(d);o.useEffect(()=>{const e=[];for(const s of r==null?void 0:r.productToQuotation){const p={...s.product,quantity:s.quantity,discount:s.discount||0,price:s==null?void 0:s.snapshotProductPrice,snapshotProductPrice:s==null?void 0:s.price};e.push(p)}m(e)},[r]);const N=Pe(),oe=(e,s)=>{_(s),ee(e),D.onToggle()},ae=e=>{X(e),y.onFalse()},ne=(e,s)=>{m(p=>(p[e].price=s,[...p])),D.onFalse()},{mutate:ie}=H({mutationFn:({id:e,payload:s})=>h.patch(g.quotation.edit+e,s),onSuccess:async()=>{R.success("New Quotation Has Been Created!"),await N.invalidateQueries({queryKey:["quotations"]})},onSettled:async()=>{z.push(S.dashboard.quotation.root)},onError:e=>{console.error(e)}}),ce=o.useCallback(e=>{te(e),C(!e)},[]),le=o.useCallback(e=>{m(s=>{const p=s.findIndex(ye=>ye.id===e.id);return p>=0?s[p].quantity+=1:(e.quantity=1,e.discount=0,s.push(e)),[...s]})},[]),de=o.useCallback(e=>{const s=e.target.value;s&&M(d.filter(p=>p.name.toLowerCase().indexOf(s)!==-1)),(s==null||s==="")&&M(d)},[]),ue=o.useCallback(e=>{m(s=>(s[e].quantity-=1,s[e].quantity===0&&s.splice(e,1),[...s]))},[i]),me=o.useCallback(e=>{m(s=>(s[e].discount>0&&(s[e].discount-=1),[...s]))},[]),pe=o.useCallback(e=>{m(s=>(s[e].discount<100&&(s[e].discount+=1),[...s]))},[]),xe=o.useCallback(e=>{m(s=>(s[e].quantity+=1,[...s]))},[i]),he=o.useCallback(e=>{m(s=>(s.splice(e,1),[...s]))},[i]),j=o.useCallback(()=>i.reduce((e,s)=>e+s.price*s.quantity,0),[i]);o.useCallback(()=>i.reduce((e,s)=>e+s.price*(s.discount/100)*s.quantity,0),[i]);const{mutate:ge}=H({mutationFn:e=>h.post(g.customers.create,e),onSuccess:async()=>{R.success("New Customer Has Been Created!")},onSettled:async()=>{await N.invalidateQueries({queryKey:["customers"]}),c.onFalse()},onError:e=>{console.log(e)}}),fe=t.jsx(L,{children:t.jsxs(l,{children:[t.jsx(n,{sx:{p:3},children:t.jsx(He,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:"Search product...",InputProps:{startAdornment:t.jsx(Ke,{position:"start",children:t.jsx(v,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:de})}),t.jsx(n,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:B.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(e=>t.jsx(Ae,{payload:e,handleClick:le,productName:e==null?void 0:e.name,image:W.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),t.jsx(Re,{page:a.page,count:B.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})}),Ce=t.jsxs(l,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[t.jsxs(l,{direction:"row",children:[t.jsx(n,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(n,{sx:{width:160,typography:"subtitle2"},children:E(j())||"-"})]}),t.jsxs(l,{direction:"row",alignItems:"center",children:[t.jsx(n,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(n,{sx:{width:160},children:t.jsx(n,{sx:{pl:4,mr:-.5},children:t.jsxs(l,{onClick:()=>{y.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${be(e.vars.palette.grey["500Channel"],.2)}`},children:[f,"%"]})})})]}),t.jsxs(l,{direction:"row",children:[t.jsxs(n,{sx:{color:"text.secondary"},children:["Tax (",u||"0","%)"]}),t.jsx(n,{sx:{width:160},children:u?E(we(j()-j()*(f/100),u)):"-"})]}),t.jsxs(l,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Total:"}),t.jsx(n,{sx:{width:160},children:E(Se(j()-j()*(f/100),u))||"-"})]})]}),je=t.jsx(L,{children:t.jsxs(l,{spacing:2,sx:{p:3},children:[t.jsxs(n,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs(We,{sx:{m:1,minWidth:120},error:Y&&!P,children:[t.jsx(Ne,{customers:x,onChange:ce}),Y&&t.jsx($e,{error:!0,children:"Customer is required!"})]}),t.jsx(n,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(F,{variant:"contained",startIcon:t.jsx(v,{icon:"mingcute:add-line"}),onClick:()=>c.onToggle(),children:"New Customer"})}),t.jsx(K,{label:"Date",sx:{mt:2},format:"DD/MM/YYYY",value:O,onChange:e=>{se(e)}}),t.jsx(K,{label:"Expiry",sx:{mt:2},format:"DD/MM/YYYY",value:Q,onChange:e=>{re(e)}})]}),t.jsx(Le,{products:i,onDecrease:ue,onIncrease:xe,onDecreaseDiscount:me,onIncreaseDiscount:pe,handleDiscountDialog:oe,removeItem:he}),t.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[Ce,t.jsxs(n,{display:"flex",gap:2,height:50,children:[t.jsx(F,{variant:"contained",onClick:()=>{if(isNaN(parseInt(P))){C(!0);return}if(C(!1),!i.length){G("Something went wrong. Product(s) are required!"),J("You need to add at least one product to this quotation. Please select a product from the list on the right."),k.onToggle();return}if(!isNaN(parseInt(P))&&i.length){C(!1);const e={discount:parseInt(f,10),name:U,quotationDate:O.format("YYYY-MM-DD"),expiredDate:Q.format("YYYY-MM-DD"),products:i.map(s=>({id:s.id,snapshotProductPrice:s.price,quantity:s.quantity})),customer:P};ie({id:r.id,payload:e})}},children:"Save and Continue"}),t.jsx(F,{variant:"outlined",onClick:()=>m([]),children:"Clear All"})]})]})]})});return t.jsxs(T,{container:!0,spacing:3,children:[t.jsx(T,{xs:12,md:3,children:t.jsx(l,{children:fe})}),t.jsx(T,{xs:12,md:9,children:t.jsx(l,{children:je})}),t.jsx(ve,{open:c.value,onClose:c.onFalse,handler:ge}),t.jsx(Qe,{discount:f,open:y.value,onClose:y.onFalse,handler:ae}),t.jsx(Be,{product:q,discount:Z,open:D.value,onClose:D.onFalse,handler:ne}),t.jsx(Me,{dialog:k,title:$,contentText:V})]})}function Ve({quotation:r,products:d,customers:x,taxPercentage:u}){const a=`Edit Quotation: #${r.ref}`;return t.jsxs(Ie,{children:[t.jsx(Ye,{heading:a,links:[{name:"Dashboard",href:S.dashboard.root},{name:"Quotation",href:S.dashboard.quotation.root},{name:"Edit Quotation"}],sx:{mb:{xs:3,md:5}}}),t.jsx(Ge,{quotation:r,products:d,customers:x,taxPercentage:u})]})}const Je={title:`Quotation Edit | Dashboard - ${W.site.name}`};function es(){const{id:r=""}=ke(),d=w({queryKey:["quotation",r],queryFn:async()=>{const{data:c}=await h.get(g.quotation.details+r);return c}}),x=w({queryKey:["products"],queryFn:async()=>(await h.get(g.products.list)).data}),u=w({queryKey:["customers"],queryFn:async()=>(await h.get(g.customers.list)).data}),a=w({queryKey:["account-application"],queryFn:async()=>{const{data:c}=await h.get(g.auth.application);return c}});return d.isLoading||a.isLoading||x.isLoading||u.isLoading?t.jsx(Te,{}):d.isError||a.isError||x.isError||x.isError?t.jsx(Ee,{route:S.dashboard.quotation.root}):t.jsxs(t.Fragment,{children:[t.jsx(Fe,{children:t.jsxs("title",{children:[" ",Je.title]})}),t.jsx(Ve,{quotation:d.data,products:x.data,customers:u.data,taxPercentage:a.data.taxPercentage})]})}export{es as default};