import{i as D,r as o,g as je,aW as ye,dn as Pe,dp as C,dm as f,dq as A,p as b,j as t,cY as B,S as c,B as r,I as N,C as Y,v as De,e9 as be,e2 as we,aS as R,e as I,cV as S,dP as Ie,dT as Se,H as qe}from"./index-D6VGg1bq.js";import{u as q,E as Te}from"./error-block-Cq6e4nOB.js";import{C as Fe}from"./custom-breadcrumbs-C78AEP0d.js";import{u as H}from"./useMutation-Bx_IT5H7.js";import{b as T}from"./format-number-C5wyMsxU.js";import{u as ke}from"./use-table-DUpQjS3d.js";import{O as Oe,a as ve,I as Ee}from"./order-discount-product-dialog-BIZ18WZW.js";import{P as Qe}from"./product-Item-button-Iekpznyh.js";import{C as Ae}from"./component-pagination-custom-BKaMk5-8.js";import{O as Be}from"./order-product-table-C-VvOUdL.js";import{O as Ne}from"./order-customer-create-dialog-DyI45IGV.js";import{T as L}from"./TextField-BAzy7rvH.js";import{I as Re}from"./InputAdornment-GGI6x7r7.js";import{F as He}from"./FormControl-DODm1Txf.js";import{S as Le}from"./Select-Dr18bHTG.js";import{F as Ye}from"./FormHelperText-C_YYziP2.js";import{D as Ke}from"./DatePicker-DH93weYH.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-Y80oskfE.js";import"./DialogTitle-vQQSu5VC.js";import"./form-provider-C6QMU8bl.js";import"./Rating-UI7_kHEe.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-CF2B6Kvk.js";import"./Menu-EDtmmCpW.js";import"./index-B8NoxTvr.js";import"./Slider-BmmR_MP6.js";import"./FormLabel-C2XdbuiY.js";import"./formControlState-Dq1zat_P.js";import"./RadioGroup-CwkusPkZ.js";import"./FormGroup-CpuGROki.js";import"./FormControlLabel-BbRBNDv1.js";import"./utils-CjO9Hd85.js";import"./index-vzGRRDr6.js";import"./countries-DSLisFCy.js";import"./Autocomplete-BOwAiV9d.js";import"./Chip-gK0i7ahF.js";import"./country-select-CMJy6pzV.js";import"./InputLabel-cFFHQmp0.js";import"./Checkbox-De1TWZfp.js";import"./upload-avatar-DwtveIup.js";import"./image-liNkg10u.js";import"./MobileDateTimePicker-B5mmIsTt.js";import"./Tabs-C2ogl0Yy.js";import"./KeyboardArrowRight-BafFncAZ.js";import"./TablePagination-CasltQ0w.js";import"./LastPage-CN_k2t5Z.js";import"./TableCell-D-t1l7iN.js";import"./InputBase-DzpuTr-y.js";import"./utils-DoM3o7-Q.js";import"./table-head-custom-BCCDj4i1.js";import"./incrementer-button-CO0PFXPg.js";import"./schema-helper-BInjcpKf.js";import"./LoadingButton-DWxFPKCj.js";import"./CircularProgress-1LUgwEa8.js";import"./ListItem-BlXNLjfP.js";function We({products:i,customers:m,taxPercentage:l}){const a=ke({defaultRowsPerPage:6}),j=D(),y=D(),P=D(),F=D(),[K,W]=o.useState(""),[G,M]=o.useState(""),V=je(),[k,$]=o.useState(),[p,z]=o.useState(0),[J,U]=o.useState(0),[w,h]=o.useState(!1),[X,Z]=o.useState(),[x,_]=o.useState("Customer"),[O,ee]=o.useState(ye(new Date)),[n,d]=o.useState([]),[v,E]=o.useState(i),Q=Pe(),te=(e,s)=>{U(s),Z(e),P.onToggle()},se=e=>{z(e),y.onFalse()},oe=(e,s)=>{d(u=>(u[e].price=s,[...u])),P.onFalse()},{mutate:re}=H({mutationFn:e=>C.post(f.quotation.create,e),onSuccess:async()=>{A.success("New Quotation Has Been Created!"),await Q.invalidateQueries({queryKey:["quotations"]})},onSettled:async()=>{V.push(b.dashboard.quotation.root)},onError:e=>{console.error(e)}}),ae=o.useCallback(e=>{$(e.target.value)},[]),ne=o.useCallback(e=>{_(e.target.value),e.target.value==="Customer"?h(!0):h(!1)},[]),ie=o.useCallback(e=>{d(s=>{const u=s.findIndex(fe=>fe.id===e.id);return u>=0?s[u].quantity+=1:(e.quantity=1,e.discount=0,s.push(e)),[...s]})},[]),le=o.useCallback(e=>{const s=e.target.value;s&&E(i.filter(u=>u.name.toLowerCase().indexOf(s)!==-1)),(s==null||s==="")&&E(i)},[]),ce=o.useCallback(e=>{d(s=>(s[e].quantity-=1,s[e].quantity===0&&s.splice(e,1),[...s]))},[n]),de=o.useCallback(e=>{d(s=>(s[e].discount>0&&(s[e].discount-=1),[...s]))},[]),ue=o.useCallback(e=>{d(s=>(s[e].discount<100&&(s[e].discount+=1),[...s]))},[]),me=o.useCallback(e=>{d(s=>(s[e].quantity+=1,[...s]))},[n]),pe=o.useCallback(e=>{d(s=>(s.splice(e,1),[...s]))},[n]),g=o.useCallback(()=>n.reduce((e,s)=>e+s.price*s.quantity,0),[n]);o.useCallback(()=>n.reduce((e,s)=>e+s.price*(s.discount/100)*s.quantity,0),[n]);const{mutate:he}=H({mutationFn:e=>C.post(f.customers.create,e),onSuccess:async()=>{A.success("New Customer Has Been Created!")},onSettled:async()=>{await Q.invalidateQueries({queryKey:["customers"]}),j.onFalse()},onError:e=>{console.log(e)}}),xe=t.jsx(B,{children:t.jsxs(c,{children:[t.jsx(r,{sx:{p:3},children:t.jsx(L,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:"Search product...",InputProps:{startAdornment:t.jsx(Re,{position:"start",children:t.jsx(N,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:le})}),t.jsx(r,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:v.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(e=>t.jsx(Qe,{payload:e,handleClick:ie,productName:e==null?void 0:e.name,image:Y.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),t.jsx(Ae,{page:a.page,count:v.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})}),ge=t.jsxs(c,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[t.jsxs(c,{direction:"row",children:[t.jsx(r,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(r,{sx:{width:160,typography:"subtitle2"},children:T(g())||"-"})]}),t.jsxs(c,{direction:"row",alignItems:"center",children:[t.jsx(r,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(r,{sx:{width:160},children:t.jsx(r,{sx:{pl:4,mr:-.5},children:t.jsxs(c,{onClick:()=>{y.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${De(e.vars.palette.grey["500Channel"],.2)}`},children:[p,"%"]})})})]}),t.jsxs(c,{direction:"row",children:[t.jsxs(r,{sx:{color:"text.secondary"},children:["Tax (",l||"0","%)"]}),t.jsx(r,{sx:{width:160},children:l?T(be(g()-g()*(p/100),l)):"-"})]}),t.jsxs(c,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Gross Total:"}),t.jsx(r,{sx:{width:160},children:T(we(g()-g()*(p/100),l))||"-"})]})]}),Ce=t.jsx(B,{children:t.jsxs(c,{spacing:2,sx:{p:3},children:[t.jsxs(r,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs(He,{sx:{m:1,minWidth:120},error:w&&!x,children:[t.jsxs(Le,{sx:{maxWidth:420,textTransform:"capitalize"},value:x,error:w,onChange:ne,children:[t.jsx(R,{value:"Customer",children:"Customer"}),m.map(e=>t.jsx(R,{value:e.id,children:e.name},e.id))]}),w&&t.jsx(Ye,{error:!0,children:"Customer is required!"})]}),t.jsx(r,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(I,{variant:"contained",startIcon:t.jsx(N,{icon:"mingcute:add-line"}),onClick:()=>j.onToggle(),children:"Add Customer"})}),t.jsx(L,{label:"Quotation Title",placeholder:"This Could Be Generated Automatically",value:k,onChange:ae,sx:{mt:2}}),t.jsx(Ke,{label:"Date",sx:{mt:2},value:O,onChange:e=>{ee(e)}})]}),t.jsx(Be,{products:n,onDecrease:ce,onIncrease:me,onDecreaseDiscount:de,onIncreaseDiscount:ue,handleDiscountDialog:te,removeItem:pe}),t.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[ge,t.jsxs(r,{display:"flex",gap:2,height:50,children:[t.jsx(I,{variant:"contained",onClick:()=>{if(isNaN(parseInt(x))){h(!0);return}if(h(!1),!n.length){W("Something went wrong. Product(s) are required!"),M("You need to add at least one product to this quotation. Please select a product from the list on the right."),F.onToggle();return}if(!isNaN(parseInt(x))&&n.length){h(!1);const e={discount:parseInt(p,10),name:k,quotationDate:O.format("YYYY-MM-DD"),products:n.map(s=>({id:s.id,snapshotProductPrice:s.price,quantity:s.quantity})),customer:x};re(e)}},children:"Save and Continue"}),t.jsx(I,{variant:"outlined",onClick:()=>d([]),children:"Clear All"})]})]})]})});return t.jsxs(S,{container:!0,spacing:3,children:[t.jsx(S,{xs:12,md:3,children:t.jsx(c,{children:xe})}),t.jsx(S,{xs:12,md:9,children:t.jsx(c,{children:Ce})}),t.jsx(Ne,{open:j.value,onClose:j.onFalse,handler:he}),t.jsx(Oe,{discount:p,open:y.value,onClose:y.onFalse,handler:se}),t.jsx(ve,{product:X,discount:J,open:P.value,onClose:P.onFalse,handler:oe}),t.jsx(Ee,{dialog:F,title:K,contentText:G})]})}function Ge({products:i,customers:m,taxPercentage:l}){return t.jsxs(Ie,{children:[t.jsx(Fe,{heading:"Create a new quotation",links:[{name:"Dashboard",href:b.dashboard.root},{name:"Quotation",href:b.dashboard.quotation.root},{name:"Add Quotation"}],sx:{mb:{xs:3,md:5}}}),t.jsx(We,{products:i,customers:m,taxPercentage:l})]})}const Me={title:`Create a new Quotation | Dashboard - ${Y.site.name}`};function Ut(){const i=q({queryKey:["products"],queryFn:async()=>(await C.get(f.products.list)).data}),m=q({queryKey:["customers"],queryFn:async()=>(await C.get(f.customers.list)).data}),l=q({queryKey:["account-application"],queryFn:async()=>{const{data:a}=await C.get(f.auth.application);return a}});return l.isLoading||i.isLoading||m.isLoading?t.jsx(Se,{}):l.isError||i.isError||i.isError?t.jsx(Te,{route:b.dashboard.order.root}):t.jsxs(t.Fragment,{children:[t.jsx(qe,{children:t.jsxs("title",{children:[" ",Me.title]})}),t.jsx(Ge,{products:i.data,customers:m.data,taxPercentage:l.data.taxPercentage})]})}export{Ut as default};
