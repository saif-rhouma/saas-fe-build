import{i as D,r as o,g as fe,aW as je,dn as ye,dp as g,dm as C,dq as B,p as b,j as t,cY as N,S as c,B as r,I as v,C as L,v as Pe,ee as De,e8 as be,cV as w,e as I,dP as we,dT as Ie,H as qe}from"./index-DBAnnifB.js";import{u as q,E as Se}from"./error-block-I6x1Hy75.js";import{C as Te}from"./custom-breadcrumbs-DBItHaBE.js";import{u as R}from"./useMutation-DLdc3eWl.js";import{b as S}from"./format-number-DHkj0q5I.js";import{u as Fe}from"./use-table-_0b8U19R.js";import{O as ke,a as Oe,I as Ee}from"./order-discount-product-dialog-Cgqb1qgL.js";import{P as Qe}from"./product-Item-button-BTqWLhbZ.js";import{C as Ae}from"./customer-select-VrOiiqy1.js";import{C as Be}from"./component-pagination-custom-Df0leBPC.js";import{O as Ne}from"./order-product-table-DWlLoTU0.js";import{O as ve}from"./order-customer-create-dialog-Dobgr3cC.js";import{T as H}from"./TextField-Cnf5s-_6.js";import{I as Re}from"./InputAdornment-kj6j4mRM.js";import{F as He}from"./FormControl-BL4Ls0ff.js";import{F as Le}from"./FormHelperText-DbwQqqnD.js";import{D as Ye}from"./DatePicker-WvioqOmJ.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-BOG7TMWB.js";import"./DialogTitle-m6FUYnnv.js";import"./form-provider-C9WrYleO.js";import"./Rating-DsIJUcaL.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-CpxSiSi_.js";import"./Menu-CWYUzvJj.js";import"./index-B9zhif9o.js";import"./Slider-BALWrmvq.js";import"./FormLabel-qH7g1y9y.js";import"./formControlState-Dq1zat_P.js";import"./RadioGroup-C_0xPGj6.js";import"./FormGroup-ZuySfzWi.js";import"./FormControlLabel-BLHOqcns.js";import"./utils-C3i7epmT.js";import"./index-BHbW1OCY.js";import"./countries-DSLisFCy.js";import"./Autocomplete-Bk7RHyx1.js";import"./Select-Cs1GmroI.js";import"./utils-DoM3o7-Q.js";import"./InputBase-Dk2d0D5e.js";import"./Chip-DfL_ynnF.js";import"./country-select-SNPz2g0K.js";import"./InputLabel-B6YlaWfN.js";import"./Checkbox-C9zyd1yT.js";import"./upload-avatar-CgBNTr-y.js";import"./image-V4smZB5P.js";import"./MobileDateTimePicker-kmTIkQgP.js";import"./Tabs-D1nVhLuN.js";import"./KeyboardArrowRight-tacz4Y6j.js";import"./TablePagination-CtzltUxB.js";import"./LastPage-BC27tdqq.js";import"./TableCell-D0tRcJwU.js";import"./table-head-custom-oTVXNsWX.js";import"./incrementer-button-Dvx1B3F1.js";import"./schema-helper-CvPOGW5C.js";import"./LoadingButton-CunA2jBP.js";import"./CircularProgress-DeUuXNKO.js";import"./ListItem-CRRiYsyQ.js";function Ke({products:i,customers:m,taxPercentage:l}){const a=Fe({defaultRowsPerPage:6}),f=D(),j=D(),y=D(),T=D(),[Y,K]=o.useState(""),[W,G]=o.useState(""),M=fe(),[F,V]=o.useState(),[p,$]=o.useState(0),[J,z]=o.useState(0),[k,h]=o.useState(!1),[U,X]=o.useState(),[P,Z]=o.useState("Customer"),[O,_]=o.useState(je(new Date)),[n,d]=o.useState([]),[E,Q]=o.useState(i),A=ye(),ee=(e,s)=>{z(s),X(e),y.onToggle()},te=e=>{$(e),j.onFalse()},se=(e,s)=>{d(u=>(u[e].price=s,[...u])),y.onFalse()},{mutate:oe}=R({mutationFn:e=>g.post(C.quotation.create,e),onSuccess:async()=>{B.success("New Quotation Has Been Created!"),await A.invalidateQueries({queryKey:["quotations"]})},onSettled:async()=>{M.push(b.dashboard.quotation.root)},onError:e=>{console.error(e)}}),re=o.useCallback(e=>{V(e.target.value)},[]),ae=o.useCallback(e=>{Z(e.target.value),e.target.value==="Customer"?h(!0):h(!1)},[]),ne=o.useCallback(e=>{d(s=>{const u=s.findIndex(Ce=>Ce.id===e.id);return u>=0?s[u].quantity+=1:(e.quantity=1,e.discount=0,s.push(e)),[...s]})},[]),ie=o.useCallback(e=>{const s=e.target.value;s&&Q(i.filter(u=>u.name.toLowerCase().indexOf(s)!==-1)),(s==null||s==="")&&Q(i)},[]),le=o.useCallback(e=>{d(s=>(s[e].quantity-=1,s[e].quantity===0&&s.splice(e,1),[...s]))},[n]),ce=o.useCallback(e=>{d(s=>(s[e].discount>0&&(s[e].discount-=1),[...s]))},[]),de=o.useCallback(e=>{d(s=>(s[e].discount<100&&(s[e].discount+=1),[...s]))},[]),ue=o.useCallback(e=>{d(s=>(s[e].quantity+=1,[...s]))},[n]),me=o.useCallback(e=>{d(s=>(s.splice(e,1),[...s]))},[n]),x=o.useCallback(()=>n.reduce((e,s)=>e+s.price*s.quantity,0),[n]);o.useCallback(()=>n.reduce((e,s)=>e+s.price*(s.discount/100)*s.quantity,0),[n]);const{mutate:pe}=R({mutationFn:e=>g.post(C.customers.create,e),onSuccess:async()=>{B.success("New Customer Has Been Created!"),await A.invalidateQueries({queryKey:["customers"]})},onSettled:async()=>{f.onFalse()},onError:e=>{console.log(e)}}),he=t.jsx(N,{children:t.jsxs(c,{children:[t.jsx(r,{sx:{p:3},children:t.jsx(H,{color:"success",fullWidth:!0,maxWidth:"xs",placeholder:"Search product...",InputProps:{startAdornment:t.jsx(Re,{position:"start",children:t.jsx(v,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},onChange:ie})}),t.jsx(r,{sx:{pl:3,pr:3},gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:E.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(e=>t.jsx(Qe,{payload:e,handleClick:ne,productName:e==null?void 0:e.name,image:L.site.serverFileHost+(e==null?void 0:e.image)},e==null?void 0:e.id))}),t.jsx(Be,{page:a.page,count:E.length,rowsPerPage:6,defaultRowsPerPage:6,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})}),xe=t.jsxs(c,{spacing:2,alignItems:"flex-end",sx:{p:2,textAlign:"right",typography:"body2"},children:[t.jsxs(c,{direction:"row",children:[t.jsx(r,{sx:{color:"text.secondary"},children:"Subtotal"}),t.jsx(r,{sx:{width:160,typography:"subtitle2"},children:S(x())||"-"})]}),t.jsxs(c,{direction:"row",alignItems:"center",children:[t.jsx(r,{sx:{color:"text.secondary"},children:"Discount"}),t.jsx(r,{sx:{width:160},children:t.jsx(r,{sx:{pl:4,mr:-.5},children:t.jsxs(c,{onClick:()=>{j.onToggle()},sx:{cursor:"pointer",p:.5,color:"error.main",borderRadius:1,typography:"subtitle2",border:e=>`solid 1px ${Pe(e.vars.palette.grey["500Channel"],.2)}`},children:[p,"%"]})})})]}),t.jsxs(c,{direction:"row",children:[t.jsxs(r,{sx:{color:"text.secondary"},children:["Tax (",l||"0","%)"]}),t.jsx(r,{sx:{width:160},children:l?S(De(x()-x()*(p/100),l)):"-"})]}),t.jsxs(c,{direction:"row",sx:{typography:"subtitle1"},children:[t.jsx("div",{children:"Total:"}),t.jsx(r,{sx:{width:160},children:S(be(x()-x()*(p/100),l))||"-"})]})]}),ge=t.jsx(N,{children:t.jsxs(c,{spacing:2,sx:{p:3},children:[t.jsxs(r,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsxs(He,{sx:{m:1,minWidth:120},error:k&&!P,children:[t.jsx(Ae,{customers:m,onChange:ae}),k&&t.jsx(Le,{error:!0,children:"Customer is required!"})]}),t.jsx(r,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:t.jsx(I,{variant:"contained",startIcon:t.jsx(v,{icon:"mingcute:add-line"}),onClick:()=>f.onToggle(),children:"New Customer"})}),t.jsx(H,{label:"Quotation Title",placeholder:"This Could Be Generated Automatically",value:F,onChange:re,sx:{mt:2}}),t.jsx(Ye,{label:"Date",sx:{mt:2},value:O,onChange:e=>{_(e)}})]}),t.jsx(Ne,{products:n,onDecrease:le,onIncrease:ue,onDecreaseDiscount:ce,onIncreaseDiscount:de,handleDiscountDialog:ee,removeItem:me}),t.jsxs(r,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:[xe,t.jsxs(r,{display:"flex",gap:2,height:50,children:[t.jsx(I,{variant:"contained",onClick:()=>{if(isNaN(parseInt(P))){h(!0);return}if(h(!1),!n.length){K("Something went wrong. Product(s) are required!"),G("You need to add at least one product to this quotation. Please select a product from the list on the right."),T.onToggle();return}if(!isNaN(parseInt(P))&&n.length){h(!1);const e={discount:parseInt(p,10),name:F,quotationDate:O.format("YYYY-MM-DD"),products:n.map(s=>({id:s.id,snapshotProductPrice:s.price,quantity:s.quantity})),customer:P};oe(e)}},children:"Save and Continue"}),t.jsx(I,{variant:"outlined",onClick:()=>d([]),children:"Clear All"})]})]})]})});return t.jsxs(w,{container:!0,spacing:3,children:[t.jsx(w,{xs:12,md:3,children:t.jsx(c,{children:he})}),t.jsx(w,{xs:12,md:9,children:t.jsx(c,{children:ge})}),t.jsx(ve,{open:f.value,onClose:f.onFalse,handler:pe}),t.jsx(ke,{discount:p,open:j.value,onClose:j.onFalse,handler:te}),t.jsx(Oe,{product:U,discount:J,open:y.value,onClose:y.onFalse,handler:se}),t.jsx(Ee,{dialog:T,title:Y,contentText:W})]})}function We({products:i,customers:m,taxPercentage:l}){return t.jsxs(we,{children:[t.jsx(Te,{heading:"Create a new quotation",links:[{name:"Dashboard",href:b.dashboard.root},{name:"Quotation",href:b.dashboard.quotation.root},{name:"Add Quotation"}],sx:{mb:{xs:3,md:5}}}),t.jsx(Ke,{products:i,customers:m,taxPercentage:l})]})}const Ge={title:`Create a new Quotation | Dashboard - ${L.site.name}`};function Ut(){const i=q({queryKey:["products"],queryFn:async()=>(await g.get(C.products.list)).data}),m=q({queryKey:["customers"],queryFn:async()=>(await g.get(C.customers.list)).data}),l=q({queryKey:["account-application"],queryFn:async()=>{const{data:a}=await g.get(C.auth.application);return a}});return l.isLoading||i.isLoading||m.isLoading?t.jsx(Ie,{}):l.isError||i.isError||i.isError?t.jsx(Se,{route:b.dashboard.order.root}):t.jsxs(t.Fragment,{children:[t.jsx(qe,{children:t.jsxs("title",{children:[" ",Ge.title]})}),t.jsx(We,{products:i.data,customers:m.data,taxPercentage:l.data.taxPercentage})]})}export{Ut as default};