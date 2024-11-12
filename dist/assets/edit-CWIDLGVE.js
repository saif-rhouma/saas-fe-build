import{i as b,r as o,g as Pe,bb as De,dn as be,dp as x,dm as g,dq as N,p as w,j as t,aB as R,S as l,B as n,I as L,C as G,v as Ie,e8 as we,e9 as Se,b8 as H,e as T,ay as F,dP as Te,dT as Fe,H as ke}from"./index-zyulwKWD.js";import{u as I,E as Ee}from"./error-block-DYjvCFbe.js";import{u as Oe}from"./use-params-D5TMtj-7.js";import{C as ve}from"./custom-breadcrumbs-DHj4Ok4N.js";import{u as K}from"./useMutation-Cq5RP75q.js";import{b as k}from"./format-number-CwpAkUO8.js";import{u as Qe}from"./use-table-Bf_i8STO.js";import{O as Be,a as Ae,I as qe}from"./order-discount-product-dialog-C_IBrgep.js";import{P as Ne}from"./product-Item-button-C-8MX1pm.js";import{C as Re}from"./component-pagination-custom-DqIX5QTF.js";import{O as Le}from"./order-product-table-Cl1PcjFS.js";import{O as He}from"./order-customer-create-dialog-YgQCTW92.js";import{T as Y}from"./TextField-CwPpTqRa.js";import{I as Ke}from"./InputAdornment-BErxhCkp.js";import{F as Ye}from"./FormControl-DkR47KrL.js";import{S as Ge}from"./Select-D9XKSxr2.js";import{F as Me}from"./FormHelperText-DXYAPhzx.js";import{D as We}from"./DatePicker-B07m1huX.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-CrSIuYBM.js";import"./DialogTitle-B9BBK-5J.js";import"./form-provider-B4-ohiGK.js";import"./Rating-Dxb9vRtQ.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DYwyPMk3.js";import"./Menu-DQMDyUDh.js";import"./index-Fr89IBES.js";import"./Slider-CZuO2OIz.js";import"./FormLabel-C6u8Qb2i.js";import"./formControlState-Dq1zat_P.js";import"./RadioGroup-DmqY9jkn.js";import"./FormGroup-PZ8L00lW.js";import"./FormControlLabel-krtCXPG7.js";import"./utils-DGmOSEsQ.js";import"./index-WuVNPZZI.js";import"./countries-DSLisFCy.js";import"./Autocomplete-CyPDwGC0.js";import"./Chip-hUCBEcuv.js";import"./country-select-CXYKfaKC.js";import"./InputLabel-Dxqp6-8F.js";import"./Checkbox-B2T2mhgd.js";import"./upload-avatar-vd3eyrbg.js";import"./image-CJs4Y8Ie.js";import"./MobileDateTimePicker-BDwlzO1U.js";import"./Tabs-DFyAqHwW.js";import"./KeyboardArrowRight-HkDaFki2.js";import"./TablePagination-BV8oey5N.js";import"./LastPage-jJvTp2Lh.js";import"./TableCell-DS8DZ5wT.js";import"./InputBase-Cb1ycHRk.js";import"./utils-DoM3o7-Q.js";import"./table-head-custom-C5tz8LbQ.js";import"./incrementer-button-CUmqrZ4v.js";import"./schema-helper-_MOasXwH.js";import"./LoadingButton-CNgluC-A.js";import"./CircularProgress-D8aR7PE7.js";import"./ListItem-uUR6JM6K.js";function $e({quotation:r,products:d,customers:h,taxPercentage:u}){var q;const a=Qe({defaultRowsPerPage:6}),c=b(),P=b(),D=b(),E=b(),[M,W]=o.useState(""),[$,z]=o.useState(""),J=Pe(),[O,V]=o.useState(r==null?void 0:r.name),[f,U]=o.useState(r==null?void 0:r.discount),[X,Z]=o.useState(0),[S,C]=o.useState(!1),[_,ee]=o.useState(),[j,te]=o.useState((q=r==null?void 0:r.customer)==null?void 0:q.id),[v,se]=o.useState(De(r==null?void 0:r.quotationDate)),[i,m]=o.useState([]),[Q,B]=o.useState(d);o.useEffect(()=>{const e=[];for(const s of r==null?void 0:r.productToQuotation){const p={...s.product,quantity:s.quantity,discount:s.discount||0,price:s==null?void 0:s.snapshotProductPrice,snapshotProductPrice:s==null?void 0:s.price};e.push(p)}m(e)},[r]);const A=be(),re=(e,s)=>{Z(s),ee(e),D.onToggle()},oe=e=>{U(e),P.onFalse()},ae=(e,s)=>{m(p=>(p[e].price=s,[...p])),D.onFalse()},{mutate:ne}=K({mutationFn:({id:e,payload:s})=>x.patch(g.quotation.edit+e,s),onSuccess:async()=>{N.success("New Quotation Has Been Created!"),await A.invalidateQueries({queryKey:["quotations"]})},onSettled:async()=>{J.push(w.dashboard.quotation.root)},onError:e=>{console.error(e)}}),ie=o.useCallback(e=>{V(e.target.value)},[]),ce=o.useCallback(e=>{te(e.target.value),e.target.value==="Customer"?C(!0):C(!1)},[]),le=o.useCallback(e=>{m(s=>{const p=s.findIndex(ye=>ye.id===e.id);return p>=0?s[p].quantity+=1:(e.quantity=1,e.discount=0,s.push(e)),[...s]})},[]),de=o.useCallback(e=>{const s=e.target.value;s&&B(d.filter(p=>p.name.toLowerCase().indexOf(s)!==-1)),(s==null||s==="")&&B(d)},[]),ue=o.useCallback(e=>{m(s=>(s[e].quantity-=1,s[e].quantity===0&&s.splice(e,1),[...s]))},[i]),me=o.useCallback(e=>{m(s=>(s[e].discount>0&&(s[e].discount-=1),[...s]))},[]),pe=o.useCallback(e=>{m(s=>(s[e].discount<100&&(s[e].discount+=1),[...s]))},[]),he=o.useCallback(e=>{m(s=>(s[e].quantity+=1,[...s]))},[i]),xe=o.useCallback(e=>{m(s=>(s.splice(e,1),[...s]))},[i]),y=o.useCallback(()=>i.reduce((e,s)=>e+s.price*s.quantity,0),[i]);o.useCallback(()=>i.reduce((e,s)=>e+s.price*(s.discount/100)*s.quantity,0),[i]);const{mutate:ge}=K({mutationFn:e=>x.post(g.customers.create,e),onSuccess:async()=>{N.success("New Customer Has Been Created!")},onSettled:async()=>{await A.invalidateQueries({queryKey:["customers"]}),c.onFalse()},onError:e=>{console.log(e)}}),fe=t.jsx(R,{children:t.jsxs(l,{children:[t.jsx(n,{sx:{p:3},children:t.jsx(Y,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:"Search product...",InputProps:{startAdornment:t.jsx(Ke,{position:"start",children:t.jsx(L,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:de})}),t.jsx(n,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:Q.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(e=>t.jsx(Ne,{payload:e,handleClick:le,productName:e==null?void 0:e.name,image:G.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),t.jsx(Re,{page:a.page,count:Q.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})}),Ce=t.jsxs(l,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[t.jsxs(l,{direction:"row",children:[t.jsx(n,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(n,{sx:{width:160,typography:"subtitle2"},children:k(y())||"-"})]}),t.jsxs(l,{direction:"row",alignItems:"center",children:[t.jsx(n,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(n,{sx:{width:160},children:t.jsx(n,{sx:{pl:4,mr:-.5},children:t.jsxs(l,{onClick:()=>{P.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${Ie(e.vars.palette.grey["500Channel"],.2)}`},children:[f,"%"]})})})]}),t.jsxs(l,{direction:"row",children:[t.jsxs(n,{sx:{color:"text.secondary"},children:["Tax (",u||"0","%)"]}),t.jsx(n,{sx:{width:160},children:u?k(we(y()-y()*(f/100),u)):"-"})]}),t.jsxs(l,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Gross Total:"}),t.jsx(n,{sx:{width:160},children:k(Se(y()-y()*(f/100),u))||"-"})]})]}),je=t.jsx(R,{children:t.jsxs(l,{spacing:2,sx:{p:3},children:[t.jsxs(n,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs(Ye,{sx:{m:1,minWidth:120},error:S&&!j,children:[t.jsxs(Ge,{sx:{maxWidth:420,textTransform:"capitalize"},value:j,error:S,onChange:ce,children:[t.jsx(H,{value:"Customer",children:"Customer"}),h.map(e=>t.jsx(H,{value:e.id,children:e.name},e.id))]}),S&&t.jsx(Me,{error:!0,children:"Customer is required!"})]}),t.jsx(n,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(T,{variant:"contained",startIcon:t.jsx(L,{icon:"mingcute:add-line"}),onClick:()=>c.onToggle(),children:"Add Customer"})}),t.jsx(Y,{label:"Quotation Title",placeholder:"This Could Be Generated Automatically",value:O,onChange:ie,sx:{mt:2}}),t.jsx(We,{label:"Date",sx:{mt:2},value:v,onChange:e=>{se(e)}})]}),t.jsx(Le,{products:i,onDecrease:ue,onIncrease:he,onDecreaseDiscount:me,onIncreaseDiscount:pe,handleDiscountDialog:re,removeItem:xe}),t.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[Ce,t.jsxs(n,{display:"flex",gap:2,height:50,children:[t.jsx(T,{variant:"contained",onClick:()=>{if(isNaN(parseInt(j))){C(!0);return}if(C(!1),!i.length){W("Something went wrong. Product(s) are required!"),z("You need to add at least one product to this quotation. Please select a product from the list on the right."),E.onToggle();return}if(!isNaN(parseInt(j))&&i.length){C(!1);const e={discount:parseInt(f,10),name:O,quotationDate:v.format("YYYY-MM-DD"),products:i.map(s=>({id:s.id,snapshotProductPrice:s.price,quantity:s.quantity})),customer:j};ne({id:r.id,payload:e})}},children:"Save and Continue"}),t.jsx(T,{variant:"outlined",onClick:()=>m([]),children:"Clear All"})]})]})]})});return t.jsxs(F,{container:!0,spacing:3,children:[t.jsx(F,{xs:12,md:3,children:t.jsx(l,{children:fe})}),t.jsx(F,{xs:12,md:9,children:t.jsx(l,{children:je})}),t.jsx(He,{open:c.value,onClose:c.onFalse,handler:ge}),t.jsx(Be,{discount:f,open:P.value,onClose:P.onFalse,handler:oe}),t.jsx(Ae,{product:_,discount:X,open:D.value,onClose:D.onFalse,handler:ae}),t.jsx(qe,{dialog:E,title:M,contentText:$})]})}function ze({quotation:r,products:d,customers:h,taxPercentage:u}){const a=`Edit Quotation: #${r.ref}`;return t.jsxs(Te,{children:[t.jsx(ve,{heading:a,links:[{name:"Dashboard",href:w.dashboard.root},{name:"Quotation",href:w.dashboard.quotation.root},{name:"Edit Quotation"}],sx:{mb:{xs:3,md:5}}}),t.jsx($e,{quotation:r,products:d,customers:h,taxPercentage:u})]})}const Je={title:`Quotation Edit | Dashboard - ${G.site.name}`};function es(){const{id:r=""}=Oe(),d=I({queryKey:["quotation",r],queryFn:async()=>{const{data:c}=await x.get(g.quotation.details+r);return c}}),h=I({queryKey:["products"],queryFn:async()=>(await x.get(g.products.list)).data}),u=I({queryKey:["customers"],queryFn:async()=>(await x.get(g.customers.list)).data}),a=I({queryKey:["account-application"],queryFn:async()=>{const{data:c}=await x.get(g.auth.application);return c}});return d.isLoading||a.isLoading||h.isLoading||u.isLoading?t.jsx(Fe,{}):d.isError||a.isError||h.isError||h.isError?t.jsx(Ee,{route:w.dashboard.quotation.root}):t.jsxs(t.Fragment,{children:[t.jsx(ke,{children:t.jsxs("title",{children:[" ",Je.title]})}),t.jsx(ze,{quotation:d.data,products:h.data,customers:u.data,taxPercentage:a.data.taxPercentage})]})}export{es as default};