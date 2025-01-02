import{br as v,Y as D,r,W as Pe,ab as M,dp as we,dq as f,dn as C,dr as Q,p as b,j as t,cZ as R,S as d,B as a,I as B,C as K,v as De,ea as be,e8 as Fe,e as F,cW as q,dQ as qe,dU as Ie,H as Se}from"./index-3kUlxXkm.js";import{u as I,E as Te}from"./error-block-BTCpMwIj.js";import{C as ke}from"./custom-breadcrumbs-CQM3hT8w.js";import{u as L}from"./useMutation-DWyFExRk.js";import{b as S}from"./format-number-CFuBAOSh.js";import{u as Ye}from"./use-table-9MzCtmNE.js";import{C as Ve,O as Oe,a as Ee,I as Ae}from"./order-discount-product-dialog-85FKUS-F.js";import{P as Me}from"./product-Item-button-aUsvkzkp.js";import{C as Qe}from"./component-pagination-custom-DLnjI_Fh.js";import{O as Re}from"./order-product-table-c3zhm8DR.js";import{O as Be}from"./order-customer-create-dialog-BK34coPJ.js";import{T as Le}from"./TextField-Ff9PgcBD.js";import{I as Ne}from"./InputAdornment-Ug97Thua.js";import{F as ve}from"./FormControl-BaWzc8Dl.js";import{F as Ke}from"./FormHelperText-47ensrNn.js";import{D as N}from"./DatePicker-vbOob6Xb.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-BZuUPSmG.js";import"./DialogTitle-DD3683-9.js";import"./Autocomplete-CuAKdGKX.js";import"./Select-DOB8r047.js";import"./Menu-CsXXwNKW.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-Df4WeLlJ.js";import"./Chip-yUQfyewU.js";import"./form-provider-Ddj1YnLe.js";import"./Rating-BWS0RvVN.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-BMX_0Xq6.js";import"./index-nrKetuMS.js";import"./Slider-Dlywp6Zb.js";import"./FormLabel-CX5M124t.js";import"./RadioGroup-D6FwwOLi.js";import"./FormGroup-DHewWmvb.js";import"./FormControlLabel-DWtRb9VA.js";import"./utils-NIylK1Um.js";import"./index-BySBJlbP.js";import"./countries-DSLisFCy.js";import"./country-select-i0JEsBFQ.js";import"./InputLabel-Df2ESQnA.js";import"./Checkbox-BPHZ30Zu.js";import"./upload-avatar-BbAzKhJK.js";import"./image-BEDFCDEn.js";import"./MobileDateTimePicker-DlpjHwQr.js";import"./Tabs-Cs2uCeCP.js";import"./KeyboardArrowRight-o7aJmcRm.js";import"./TablePagination-CVcJMlXd.js";import"./LastPage-FHI8cfYQ.js";import"./TableCell-YgDy_fKI.js";import"./table-head-custom-Bzh_BuNQ.js";import"./incrementer-button-DlaR23JU.js";import"./schema-helper-pKPnN3t8.js";import"./LoadingButton-BtwwM36s.js";import"./CircularProgress-CZhO4lMk.js";import"./ListItem-CBu29PKK.js";function We({products:c,customers:p,taxPercentage:l}){const o=Ye({defaultRowsPerPage:6}),{t:n}=v("quotations"),j=D(),y=D(),P=D(),T=D(),[W,$]=r.useState(""),[H,G]=r.useState(""),J=Pe(),[U,Ge]=r.useState(),[x,Z]=r.useState(0),[z,X]=r.useState(0),[k,h]=r.useState(!1),[_,ee]=r.useState(),[w,te]=r.useState("Customer"),[Y,se]=r.useState(M(new Date)),[V,re]=r.useState(M(new Date).add(1,"day")),[i,u]=r.useState([]),[O,E]=r.useState(c),A=we(),oe=(e,s)=>{X(s),ee(e),P.onToggle()},ae=e=>{Z(e),y.onFalse()},ne=(e,s)=>{u(m=>(m[e].price=s,[...m])),P.onFalse()},{mutate:ie}=L({mutationFn:e=>f.post(C.quotation.create,e),onSuccess:async()=>{Q.success(n("createView.messages.createSuccess")),await A.invalidateQueries({queryKey:["quotations"]})},onSettled:async()=>{J.push(b.dashboard.quotation.root)},onError:e=>{console.error(e)}}),ce=r.useCallback(e=>{te(e),h(!e)},[]),le=r.useCallback(e=>{u(s=>{const m=s.findIndex(ye=>ye.id===e.id);return m>=0?s[m].quantity+=1:(e.quantity=1,e.discount=0,s.push(e)),[...s]})},[]),de=r.useCallback(e=>{const s=e.target.value;s&&E(c.filter(m=>m.name.toLowerCase().indexOf(s)!==-1)),(s==null||s==="")&&E(c)},[]),ue=r.useCallback(e=>{u(s=>(s[e].quantity-=1,s[e].quantity===0&&s.splice(e,1),[...s]))},[i]),me=r.useCallback(e=>{u(s=>(s[e].discount>0&&(s[e].discount-=1),[...s]))},[]),pe=r.useCallback(e=>{u(s=>(s[e].discount<100&&(s[e].discount+=1),[...s]))},[]),xe=r.useCallback(e=>{u(s=>(s[e].quantity+=1,[...s]))},[i]),he=r.useCallback(e=>{u(s=>(s.splice(e,1),[...s]))},[i]),g=r.useCallback(()=>i.reduce((e,s)=>e+s.price*s.quantity,0),[i]);r.useCallback(()=>i.reduce((e,s)=>e+s.price*(s.discount/100)*s.quantity,0),[i]);const{mutate:ge}=L({mutationFn:e=>f.post(C.customers.create,e),onSuccess:async()=>{Q.success(n("createView.messages.editSuccess")),await A.invalidateQueries({queryKey:["customers"]})},onSettled:async()=>{j.onFalse()},onError:e=>{console.log(e)}}),fe=t.jsx(R,{children:t.jsxs(d,{children:[t.jsx(a,{sx:{p:3},children:t.jsx(Le,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:n("createView.productsList.searchPlaceholder"),InputProps:{startAdornment:t.jsx(Ne,{position:"start",children:t.jsx(B,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:de})}),t.jsx(a,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:O.slice(o.page*o.rowsPerPage,o.page*o.rowsPerPage+o.rowsPerPage).map(e=>t.jsx(Me,{payload:e,handleClick:le,productName:e==null?void 0:e.name,image:K.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),t.jsx(Qe,{page:o.page,count:O.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:o.onChangePage,onRowsPerPageChange:o.onChangeRowsPerPage})]})}),Ce=t.jsxs(d,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[t.jsxs(d,{direction:"row",children:[t.jsx(a,{sx:{color:"text.secondary"},children:n("createView.createForm.extra.subTotal")}),t.jsx(a,{sx:{width:160,typography:"subtitle2"},children:S(g())||"-"})]}),t.jsxs(d,{direction:"row",alignItems:"center",children:[t.jsx(a,{sx:{color:"text.secondary"},children:n("createView.createForm.extra.discount")}),t.jsx(a,{sx:{width:160},children:t.jsx(a,{sx:{pl:4,mr:-.5},children:t.jsxs(d,{onClick:()=>{y.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${De(e.vars.palette.grey["500Channel"],.2)}`},children:[x,"%"]})})})]}),t.jsxs(d,{direction:"row",children:[t.jsxs(a,{sx:{color:"text.secondary"},children:[n("createView.createForm.extra.tax")," (",l||"0","%)"]}),t.jsx(a,{sx:{width:160},children:l?S(be(g()-g()*(x/100),l)):"-"})]}),t.jsxs(d,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsxs("div",{children:[n("createView.createForm.extra.grossTotal"),":"]}),t.jsx(a,{sx:{width:160},children:S(Fe(g()-g()*(x/100),l))||"-"})]})]}),je=t.jsx(R,{children:t.jsxs(d,{spacing:2,sx:{p:3},children:[t.jsxs(a,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs(ve,{sx:{m:1,minWidth:120},error:k&&!w,children:[t.jsx(Ve,{customers:p,onChange:ce}),k&&t.jsx(Ke,{error:!0,children:"Customer is required!"})]}),t.jsx(a,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(F,{variant:"contained",startIcon:t.jsx(B,{icon:"mingcute:add-line"}),onClick:()=>j.onToggle(),children:n("createView.createForm.buttons.addCustomer")})}),t.jsx(N,{label:n("createView.createForm.fields.date.label"),sx:{mt:2},format:"DD/MM/YYYY",value:Y,onChange:e=>{se(e)}}),t.jsx(N,{label:n("createView.createForm.fields.expiry.label"),format:"DD/MM/YYYY",sx:{mt:2},value:V,onChange:e=>{re(e)}})]}),t.jsx(Re,{products:i,onDecrease:ue,onIncrease:xe,onDecreaseDiscount:me,onIncreaseDiscount:pe,handleDiscountDialog:oe,removeItem:he}),t.jsxs(a,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[Ce,t.jsxs(a,{display:"flex",gap:2,height:50,children:[t.jsx(F,{variant:"contained",onClick:()=>{if(isNaN(parseInt(w))){h(!0);return}if(h(!1),!i.length){$("Something went wrong. Product(s) are required!"),G("You need to add at least one product to this quotation. Please select a product from the list on the right."),T.onToggle();return}if(!isNaN(parseInt(w))&&i.length){h(!1);const e={discount:parseInt(x,10),name:U,quotationDate:Y.format("YYYY-MM-DD"),expiredDate:V.format("YYYY-MM-DD"),products:i.map(s=>({id:s.id,snapshotProductPrice:s.price,quantity:s.quantity})),customer:w};ie(e)}},children:n("createView.createForm.buttons.saveAndContinue")}),t.jsx(F,{variant:"outlined",onClick:()=>u([]),children:n("createView.createForm.buttons.clearAll")})]})]})]})});return t.jsxs(q,{container:!0,spacing:3,children:[t.jsx(q,{xs:12,md:3,children:t.jsx(d,{children:fe})}),t.jsx(q,{xs:12,md:9,children:t.jsx(d,{children:je})}),t.jsx(Be,{open:j.value,onClose:j.onFalse,handler:ge}),t.jsx(Oe,{discount:x,open:y.value,onClose:y.onFalse,handler:ae}),t.jsx(Ee,{product:_,discount:z,open:P.value,onClose:P.onFalse,handler:ne}),t.jsx(Ae,{dialog:T,title:W,contentText:H})]})}function $e({products:c,customers:p,taxPercentage:l}){const{t:o}=v("quotations");return t.jsxs(qe,{children:[t.jsx(ke,{heading:o("createView.pageTitle"),links:[{name:`${o("createView.breadCrumbsPageRootTitle")}`,href:b.dashboard.root},{name:`${o("createView.breadCrumbsParentPageTitle")}`,href:b.dashboard.quotation.root},{name:`${o("createView.breadCrumbsPageTitle")}`}],sx:{mb:{xs:3,md:5}}}),t.jsx(We,{products:c,customers:p,taxPercentage:l})]})}const He={title:`Create a new Quotation | Dashboard - ${K.site.name}`};function Xt(){const c=I({queryKey:["products"],queryFn:async()=>(await f.get(C.products.list)).data}),p=I({queryKey:["customers"],queryFn:async()=>(await f.get(C.customers.list)).data}),l=I({queryKey:["account-application"],queryFn:async()=>{const{data:o}=await f.get(C.auth.application);return o}});return l.isLoading||c.isLoading||p.isLoading?t.jsx(Ie,{}):l.isError||c.isError||c.isError?t.jsx(Te,{route:b.dashboard.order.root}):t.jsxs(t.Fragment,{children:[t.jsx(Se,{children:t.jsxs("title",{children:[" ",He.title]})}),t.jsx($e,{products:c.data,customers:p.data,taxPercentage:l.data.taxPercentage})]})}export{Xt as default};
