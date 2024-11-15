import{i as P,r as o,g as ye,aW as N,dn as De,dp as g,dm as f,dq as A,p as b,j as t,cY as B,S as l,B as r,I as M,C as H,v as Pe,ea as be,e8 as we,cV as w,e as S,dP as Se,dT as qe,H as Ie}from"./index-CFpFDdmk.js";import{u as q,E as Te}from"./error-block-Qb0JqWMo.js";import{C as Fe}from"./custom-breadcrumbs-BhZ5AQiJ.js";import{u as R}from"./useMutation-BYxzZEeu.js";import{b as I}from"./format-number-u5v8ow11.js";import{u as ke}from"./use-table-DRwUskxu.js";import{O as Ye,a as Oe,I as Ee}from"./order-discount-product-dialog-BLrNYdf4.js";import{P as Qe}from"./product-Item-button-iWuQ-HfF.js";import{C as Ne}from"./customer-select-Cx9vSFLI.js";import{C as Ae}from"./component-pagination-custom-QfPhwL3x.js";import{O as Be}from"./order-product-table-C2Fek4-R.js";import{O as Me}from"./order-customer-create-dialog-COF-Wwtz.js";import{T as Re}from"./TextField-DfM7FsMT.js";import{I as ve}from"./InputAdornment-CgLiqxs-.js";import{F as He}from"./FormControl-CNS-_KcR.js";import{F as Le}from"./FormHelperText-CBSty0_k.js";import{D as v}from"./DatePicker--R0iVwy6.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-__vH1XwO.js";import"./DialogTitle-Fqo4pdu1.js";import"./form-provider-BpZ_lNCz.js";import"./Rating-hRCFGB57.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-B84uWKaP.js";import"./Menu-B68-fR6c.js";import"./index-C97vZu8v.js";import"./Slider-1GT9TVwO.js";import"./FormLabel-DSBvpxE-.js";import"./formControlState-Dq1zat_P.js";import"./RadioGroup-q3osZweo.js";import"./FormGroup-cGoNpeSS.js";import"./FormControlLabel-Djcc_FaA.js";import"./utils-BeBWERKu.js";import"./index-iy408cV1.js";import"./countries-DSLisFCy.js";import"./Autocomplete-CiqUWkUt.js";import"./Select-BlD-2uiB.js";import"./utils-DoM3o7-Q.js";import"./InputBase-BlPzdlBf.js";import"./Chip-B8Kj4THB.js";import"./country-select-B5_N9Ghb.js";import"./InputLabel-D-P4ONWN.js";import"./Checkbox-BgUXlmGv.js";import"./upload-avatar-CpOCvI_m.js";import"./image-DogZHW8e.js";import"./MobileDateTimePicker-iVybONG-.js";import"./Tabs-mH73uY_b.js";import"./KeyboardArrowRight-BWeVAAgH.js";import"./TablePagination-Bod9RAXB.js";import"./LastPage-B91oXYll.js";import"./TableCell-nk9uECyp.js";import"./table-head-custom-BYdbhTGG.js";import"./incrementer-button-C-kwnl1h.js";import"./schema-helper-4wDMemZN.js";import"./LoadingButton-DIpeLunE.js";import"./CircularProgress-kusugyBo.js";import"./ListItem-C2-cLBAD.js";function Ke({products:i,customers:m,taxPercentage:c}){const a=ke({defaultRowsPerPage:6}),C=P(),j=P(),y=P(),T=P(),[L,K]=o.useState(""),[W,G]=o.useState(""),V=ye(),[$,J]=o.useState(),[p,z]=o.useState(0),[U,X]=o.useState(0),[F,x]=o.useState(!1),[Z,_]=o.useState(),[D,ee]=o.useState("Customer"),[k,te]=o.useState(N(new Date)),[Y,se]=o.useState(N(new Date).add(1,"day")),[n,d]=o.useState([]),[O,E]=o.useState(i),Q=De(),oe=(e,s)=>{X(s),_(e),y.onToggle()},re=e=>{z(e),j.onFalse()},ae=(e,s)=>{d(u=>(u[e].price=s,[...u])),y.onFalse()},{mutate:ne}=R({mutationFn:e=>g.post(f.quotation.create,e),onSuccess:async()=>{A.success("New Quotation Has Been Created!"),await Q.invalidateQueries({queryKey:["quotations"]})},onSettled:async()=>{V.push(b.dashboard.quotation.root)},onError:e=>{console.error(e)}});o.useCallback(e=>{J(e.target.value)},[]);const ie=o.useCallback(e=>{ee(e),x(!e)},[]),ce=o.useCallback(e=>{d(s=>{const u=s.findIndex(je=>je.id===e.id);return u>=0?s[u].quantity+=1:(e.quantity=1,e.discount=0,s.push(e)),[...s]})},[]),le=o.useCallback(e=>{const s=e.target.value;s&&E(i.filter(u=>u.name.toLowerCase().indexOf(s)!==-1)),(s==null||s==="")&&E(i)},[]),de=o.useCallback(e=>{d(s=>(s[e].quantity-=1,s[e].quantity===0&&s.splice(e,1),[...s]))},[n]),ue=o.useCallback(e=>{d(s=>(s[e].discount>0&&(s[e].discount-=1),[...s]))},[]),me=o.useCallback(e=>{d(s=>(s[e].discount<100&&(s[e].discount+=1),[...s]))},[]),pe=o.useCallback(e=>{d(s=>(s[e].quantity+=1,[...s]))},[n]),xe=o.useCallback(e=>{d(s=>(s.splice(e,1),[...s]))},[n]),h=o.useCallback(()=>n.reduce((e,s)=>e+s.price*s.quantity,0),[n]);o.useCallback(()=>n.reduce((e,s)=>e+s.price*(s.discount/100)*s.quantity,0),[n]);const{mutate:he}=R({mutationFn:e=>g.post(f.customers.create,e),onSuccess:async()=>{A.success("New Customer Has Been Created!"),await Q.invalidateQueries({queryKey:["customers"]})},onSettled:async()=>{C.onFalse()},onError:e=>{console.log(e)}}),ge=t.jsx(B,{children:t.jsxs(l,{children:[t.jsx(r,{sx:{p:3},children:t.jsx(Re,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:"Search product...",InputProps:{startAdornment:t.jsx(ve,{position:"start",children:t.jsx(M,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:le})}),t.jsx(r,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:O.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(e=>t.jsx(Qe,{payload:e,handleClick:ce,productName:e==null?void 0:e.name,image:H.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),t.jsx(Ae,{page:a.page,count:O.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})}),fe=t.jsxs(l,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[t.jsxs(l,{direction:"row",children:[t.jsx(r,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(r,{sx:{width:160,typography:"subtitle2"},children:I(h())||"-"})]}),t.jsxs(l,{direction:"row",alignItems:"center",children:[t.jsx(r,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(r,{sx:{width:160},children:t.jsx(r,{sx:{pl:4,mr:-.5},children:t.jsxs(l,{onClick:()=>{j.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${Pe(e.vars.palette.grey["500Channel"],.2)}`},children:[p,"%"]})})})]}),t.jsxs(l,{direction:"row",children:[t.jsxs(r,{sx:{color:"text.secondary"},children:["Tax (",c||"0","%)"]}),t.jsx(r,{sx:{width:160},children:c?I(be(h()-h()*(p/100),c)):"-"})]}),t.jsxs(l,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Total:"}),t.jsx(r,{sx:{width:160},children:I(we(h()-h()*(p/100),c))||"-"})]})]}),Ce=t.jsx(B,{children:t.jsxs(l,{spacing:2,sx:{p:3},children:[t.jsxs(r,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs(He,{sx:{m:1,minWidth:120},error:F&&!D,children:[t.jsx(Ne,{customers:m,onChange:ie}),F&&t.jsx(Le,{error:!0,children:"Customer is required!"})]}),t.jsx(r,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(S,{variant:"contained",startIcon:t.jsx(M,{icon:"mingcute:add-line"}),onClick:()=>C.onToggle(),children:"New Customer"})}),t.jsx(v,{label:"Date",sx:{mt:2},format:"DD/MM/YYYY",value:k,onChange:e=>{te(e)}}),t.jsx(v,{label:"Expiry",format:"DD/MM/YYYY",sx:{mt:2},value:Y,onChange:e=>{se(e)}})]}),t.jsx(Be,{products:n,onDecrease:de,onIncrease:pe,onDecreaseDiscount:ue,onIncreaseDiscount:me,handleDiscountDialog:oe,removeItem:xe}),t.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[fe,t.jsxs(r,{display:"flex",gap:2,height:50,children:[t.jsx(S,{variant:"contained",onClick:()=>{if(isNaN(parseInt(D))){x(!0);return}if(x(!1),!n.length){K("Something went wrong. Product(s) are required!"),G("You need to add at least one product to this quotation. Please select a product from the list on the right."),T.onToggle();return}if(!isNaN(parseInt(D))&&n.length){x(!1);const e={discount:parseInt(p,10),name:$,quotationDate:k.format("YYYY-MM-DD"),expiredDate:Y.format("YYYY-MM-DD"),products:n.map(s=>({id:s.id,snapshotProductPrice:s.price,quantity:s.quantity})),customer:D};ne(e)}},children:"Save and Continue"}),t.jsx(S,{variant:"outlined",onClick:()=>d([]),children:"Clear All"})]})]})]})});return t.jsxs(w,{container:!0,spacing:3,children:[t.jsx(w,{xs:12,md:3,children:t.jsx(l,{children:ge})}),t.jsx(w,{xs:12,md:9,children:t.jsx(l,{children:Ce})}),t.jsx(Me,{open:C.value,onClose:C.onFalse,handler:he}),t.jsx(Ye,{discount:p,open:j.value,onClose:j.onFalse,handler:re}),t.jsx(Oe,{product:Z,discount:U,open:y.value,onClose:y.onFalse,handler:ae}),t.jsx(Ee,{dialog:T,title:L,contentText:W})]})}function We({products:i,customers:m,taxPercentage:c}){return t.jsxs(Se,{children:[t.jsx(Fe,{heading:"Create a new quotation",links:[{name:"Dashboard",href:b.dashboard.root},{name:"Quotation",href:b.dashboard.quotation.root},{name:"Add Quotation"}],sx:{mb:{xs:3,md:5}}}),t.jsx(Ke,{products:i,customers:m,taxPercentage:c})]})}const Ge={title:`Create a new Quotation | Dashboard - ${H.site.name}`};function Xt(){const i=q({queryKey:["products"],queryFn:async()=>(await g.get(f.products.list)).data}),m=q({queryKey:["customers"],queryFn:async()=>(await g.get(f.customers.list)).data}),c=q({queryKey:["account-application"],queryFn:async()=>{const{data:a}=await g.get(f.auth.application);return a}});return c.isLoading||i.isLoading||m.isLoading?t.jsx(qe,{}):c.isError||i.isError||i.isError?t.jsx(Te,{route:b.dashboard.order.root}):t.jsxs(t.Fragment,{children:[t.jsx(Ie,{children:t.jsxs("title",{children:[" ",Ge.title]})}),t.jsx(We,{products:i.data,customers:m.data,taxPercentage:c.data.taxPercentage})]})}export{Xt as default};
