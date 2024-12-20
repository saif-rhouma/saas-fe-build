import{i as b,r as o,g as Pe,aW as De,dn as be,dp as x,dm as g,dq as N,p as w,j as t,cY as R,S as l,B as n,I as L,C as W,v as Ie,e9 as we,e2 as Se,aS as H,e as T,cV as F,dP as Te,dT as Fe,H as ke}from"./index-7x0Jzu-K.js";import{u as I,E as Ee}from"./error-block-D00Vx1n_.js";import{u as Oe}from"./use-params-DPBrKddI.js";import{C as ve}from"./custom-breadcrumbs-D7fqN-ij.js";import{u as K}from"./useMutation-Dv_B02Gt.js";import{b as k}from"./format-number-BYwLqIh3.js";import{u as Qe}from"./use-table-BlauK5zs.js";import{O as Ae,a as Be,I as qe}from"./order-discount-product-dialog-CA-OzzMO.js";import{P as Ne}from"./product-Item-button-DdNiFE3w.js";import{C as Re}from"./component-pagination-custom-CfiN17TY.js";import{O as Le}from"./order-product-table-DwZLQ20v.js";import{O as He}from"./order-customer-create-dialog-C3qwl9WQ.js";import{T as Y}from"./TextField-DM-8f0BQ.js";import{I as Ke}from"./InputAdornment-Cy6JkpYJ.js";import{F as Ye}from"./FormControl-CwgFqIpY.js";import{S as We}from"./Select-BZc5REn1.js";import{F as Ge}from"./FormHelperText-DXUXEoCg.js";import{D as Me}from"./DatePicker-DNImynf8.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-DR8-NI-y.js";import"./DialogTitle-DqsJD2XR.js";import"./form-provider-L4HXF3hb.js";import"./Rating-DCB2jqoU.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-Bx-A_rYM.js";import"./Menu-B1dt3wvU.js";import"./index-DNxFhLTH.js";import"./Slider-CmH7wyJF.js";import"./FormLabel-ChZcLmvt.js";import"./formControlState-Dq1zat_P.js";import"./RadioGroup-Be2nemTL.js";import"./FormGroup-dOY1iFws.js";import"./FormControlLabel-BkxrN50L.js";import"./utils-BKVZXmx9.js";import"./index-BCeO1QHE.js";import"./countries-DSLisFCy.js";import"./Autocomplete-Y9_S23We.js";import"./Chip-BqIxCVbz.js";import"./country-select-CiBbKvWF.js";import"./InputLabel-CJ9sg_Jr.js";import"./Checkbox-4dEQ1AxH.js";import"./upload-avatar-Cx6DIh4F.js";import"./image-CdiR8fRs.js";import"./MobileDateTimePicker-C1e3BYNb.js";import"./Tabs-DBbaXAIS.js";import"./KeyboardArrowRight-BVBZSuVb.js";import"./TablePagination-NpwYiakq.js";import"./LastPage-2IgpaQX0.js";import"./TableCell-CE_O9heW.js";import"./InputBase-Bf6dB4gm.js";import"./utils-DoM3o7-Q.js";import"./table-head-custom-GbSIW9-C.js";import"./incrementer-button-CtjoRD9w.js";import"./schema-helper-Jf_nWAk5.js";import"./LoadingButton-D4yaP3jf.js";import"./CircularProgress-BU2etINY.js";import"./ListItem-Bl8LEqBl.js";function $e({quotation:r,products:d,customers:h,taxPercentage:u}){var q;const a=Qe({defaultRowsPerPage:6}),c=b(),P=b(),D=b(),E=b(),[G,M]=o.useState(""),[$,V]=o.useState(""),z=Pe(),[O,J]=o.useState(r==null?void 0:r.name),[f,U]=o.useState(r==null?void 0:r.discount),[X,Z]=o.useState(0),[S,C]=o.useState(!1),[_,ee]=o.useState(),[j,te]=o.useState((q=r==null?void 0:r.customer)==null?void 0:q.id),[v,se]=o.useState(De(r==null?void 0:r.quotationDate)),[i,m]=o.useState([]),[Q,A]=o.useState(d);o.useEffect(()=>{const e=[];for(const s of r==null?void 0:r.productToQuotation){const p={...s.product,quantity:s.quantity,discount:s.discount||0,price:s==null?void 0:s.snapshotProductPrice,snapshotProductPrice:s==null?void 0:s.price};e.push(p)}m(e)},[r]);const B=be(),re=(e,s)=>{Z(s),ee(e),D.onToggle()},oe=e=>{U(e),P.onFalse()},ae=(e,s)=>{m(p=>(p[e].price=s,[...p])),D.onFalse()},{mutate:ne}=K({mutationFn:({id:e,payload:s})=>x.patch(g.quotation.edit+e,s),onSuccess:async()=>{N.success("New Quotation Has Been Created!"),await B.invalidateQueries({queryKey:["quotations"]})},onSettled:async()=>{z.push(w.dashboard.quotation.root)},onError:e=>{console.error(e)}}),ie=o.useCallback(e=>{J(e.target.value)},[]),ce=o.useCallback(e=>{te(e.target.value),e.target.value==="Customer"?C(!0):C(!1)},[]),le=o.useCallback(e=>{m(s=>{const p=s.findIndex(ye=>ye.id===e.id);return p>=0?s[p].quantity+=1:(e.quantity=1,e.discount=0,s.push(e)),[...s]})},[]),de=o.useCallback(e=>{const s=e.target.value;s&&A(d.filter(p=>p.name.toLowerCase().indexOf(s)!==-1)),(s==null||s==="")&&A(d)},[]),ue=o.useCallback(e=>{m(s=>(s[e].quantity-=1,s[e].quantity===0&&s.splice(e,1),[...s]))},[i]),me=o.useCallback(e=>{m(s=>(s[e].discount>0&&(s[e].discount-=1),[...s]))},[]),pe=o.useCallback(e=>{m(s=>(s[e].discount<100&&(s[e].discount+=1),[...s]))},[]),he=o.useCallback(e=>{m(s=>(s[e].quantity+=1,[...s]))},[i]),xe=o.useCallback(e=>{m(s=>(s.splice(e,1),[...s]))},[i]),y=o.useCallback(()=>i.reduce((e,s)=>e+s.price*s.quantity,0),[i]);o.useCallback(()=>i.reduce((e,s)=>e+s.price*(s.discount/100)*s.quantity,0),[i]);const{mutate:ge}=K({mutationFn:e=>x.post(g.customers.create,e),onSuccess:async()=>{N.success("New Customer Has Been Created!")},onSettled:async()=>{await B.invalidateQueries({queryKey:["customers"]}),c.onFalse()},onError:e=>{console.log(e)}}),fe=t.jsx(R,{children:t.jsxs(l,{children:[t.jsx(n,{sx:{p:3},children:t.jsx(Y,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:"Search product...",InputProps:{startAdornment:t.jsx(Ke,{position:"start",children:t.jsx(L,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:de})}),t.jsx(n,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:Q.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(e=>t.jsx(Ne,{payload:e,handleClick:le,productName:e==null?void 0:e.name,image:W.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),t.jsx(Re,{page:a.page,count:Q.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})}),Ce=t.jsxs(l,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[t.jsxs(l,{direction:"row",children:[t.jsx(n,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(n,{sx:{width:160,typography:"subtitle2"},children:k(y())||"-"})]}),t.jsxs(l,{direction:"row",alignItems:"center",children:[t.jsx(n,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(n,{sx:{width:160},children:t.jsx(n,{sx:{pl:4,mr:-.5},children:t.jsxs(l,{onClick:()=>{P.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${Ie(e.vars.palette.grey["500Channel"],.2)}`},children:[f,"%"]})})})]}),t.jsxs(l,{direction:"row",children:[t.jsxs(n,{sx:{color:"text.secondary"},children:["Tax (",u||"0","%)"]}),t.jsx(n,{sx:{width:160},children:u?k(we(y()-y()*(f/100),u)):"-"})]}),t.jsxs(l,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Gross Total:"}),t.jsx(n,{sx:{width:160},children:k(Se(y()-y()*(f/100),u))||"-"})]})]}),je=t.jsx(R,{children:t.jsxs(l,{spacing:2,sx:{p:3},children:[t.jsxs(n,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs(Ye,{sx:{m:1,minWidth:120},error:S&&!j,children:[t.jsxs(We,{sx:{maxWidth:420,textTransform:"capitalize"},value:j,error:S,onChange:ce,children:[t.jsx(H,{value:"Customer",children:"Customer"}),h.map(e=>t.jsx(H,{value:e.id,children:e.name},e.id))]}),S&&t.jsx(Ge,{error:!0,children:"Customer is required!"})]}),t.jsx(n,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(T,{variant:"contained",startIcon:t.jsx(L,{icon:"mingcute:add-line"}),onClick:()=>c.onToggle(),children:"Add Customer"})}),t.jsx(Y,{label:"Quotation Title",placeholder:"This Could Be Generated Automatically",value:O,onChange:ie,sx:{mt:2}}),t.jsx(Me,{label:"Date",sx:{mt:2},value:v,onChange:e=>{se(e)}})]}),t.jsx(Le,{products:i,onDecrease:ue,onIncrease:he,onDecreaseDiscount:me,onIncreaseDiscount:pe,handleDiscountDialog:re,removeItem:xe}),t.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[Ce,t.jsxs(n,{display:"flex",gap:2,height:50,children:[t.jsx(T,{variant:"contained",onClick:()=>{if(isNaN(parseInt(j))){C(!0);return}if(C(!1),!i.length){M("Something went wrong. Product(s) are required!"),V("You need to add at least one product to this quotation. Please select a product from the list on the right."),E.onToggle();return}if(!isNaN(parseInt(j))&&i.length){C(!1);const e={discount:parseInt(f,10),name:O,quotationDate:v.format("YYYY-MM-DD"),products:i.map(s=>({id:s.id,snapshotProductPrice:s.price,quantity:s.quantity})),customer:j};ne({id:r.id,payload:e})}},children:"Save and Continue"}),t.jsx(T,{variant:"outlined",onClick:()=>m([]),children:"Clear All"})]})]})]})});return t.jsxs(F,{container:!0,spacing:3,children:[t.jsx(F,{xs:12,md:3,children:t.jsx(l,{children:fe})}),t.jsx(F,{xs:12,md:9,children:t.jsx(l,{children:je})}),t.jsx(He,{open:c.value,onClose:c.onFalse,handler:ge}),t.jsx(Ae,{discount:f,open:P.value,onClose:P.onFalse,handler:oe}),t.jsx(Be,{product:_,discount:X,open:D.value,onClose:D.onFalse,handler:ae}),t.jsx(qe,{dialog:E,title:G,contentText:$})]})}function Ve({quotation:r,products:d,customers:h,taxPercentage:u}){const a=`Edit Quotation: #${r.ref}`;return t.jsxs(Te,{children:[t.jsx(ve,{heading:a,links:[{name:"Dashboard",href:w.dashboard.root},{name:"Quotation",href:w.dashboard.quotation.root},{name:"Edit Quotation"}],sx:{mb:{xs:3,md:5}}}),t.jsx($e,{quotation:r,products:d,customers:h,taxPercentage:u})]})}const ze={title:`Quotation Edit | Dashboard - ${W.site.name}`};function es(){const{id:r=""}=Oe(),d=I({queryKey:["quotation",r],queryFn:async()=>{const{data:c}=await x.get(g.quotation.details+r);return c}}),h=I({queryKey:["products"],queryFn:async()=>(await x.get(g.products.list)).data}),u=I({queryKey:["customers"],queryFn:async()=>(await x.get(g.customers.list)).data}),a=I({queryKey:["account-application"],queryFn:async()=>{const{data:c}=await x.get(g.auth.application);return c}});return d.isLoading||a.isLoading||h.isLoading||u.isLoading?t.jsx(Fe,{}):d.isError||a.isError||h.isError||h.isError?t.jsx(Ee,{route:w.dashboard.quotation.root}):t.jsxs(t.Fragment,{children:[t.jsx(ke,{children:t.jsxs("title",{children:[" ",ze.title]})}),t.jsx(Ve,{quotation:d.data,products:h.data,customers:u.data,taxPercentage:a.data.taxPercentage})]})}export{es as default};
