import{o as E,bO as Z,j as e,aJ as Q,w as ee,I as w,dw as se,bQ as oe,bR as D,em as O,e as W,r as p,dI as U,dJ as N,dH as q,bU as te,D as y,S as g,B as d,T as t,l as re,dz as ne,eo as ae,e8 as ie,p as H,aD as le,dy as de,ep as ce,dK as z,ec as xe,H as me,C as he}from"./index-Cq03K-HC.js";import{u as ue,E as pe}from"./error-block-CBMWt84f.js";import{u as K}from"./useMutation-Dp0rVztm.js";import{C as je}from"./custom-breadcrumbs-C_F-6vOC.js";import{P as L}from"./permission-access-controller-Bzg3p7NA.js";import{u as fe,g as be,r as ge,T as ye,a as Pe,e as Ce}from"./table-selected-action-CjXNfoiW.js";import{T as ve}from"./table-no-data-BdJ2y3p3.js";import{T as De,a as Te,b as we,c as Se}from"./table-head-custom-xPqHms_A.js";import{T as Ae}from"./table-pagination-custom-C2Jp-FKf.js";import{C as Ee}from"./confirm-dialog-DvqBGu4G.js";import{T as v}from"./TableCell-BY4odiRW.js";import{z as B,u as Fe,t as Re,a as Ie,F as G}from"./form-provider-DGoPfYCb.js";import{b as P}from"./format-number-DITXUPMN.js";import{b as ke}from"./upload-avatar-CoRpPeQR.js";import"./image-DitvMElQ.js";import"./editor-D16lNrfB.js";import{s as Be}from"./schema-helper-DkKalxt7.js";import{a as Y,b as J,D as $}from"./DialogContent-D0WbZEYR.js";import{D as X}from"./DialogTitle-CLKmH_im.js";import{L as Ge}from"./LoadingButton-3T23lww4.js";import{T as Oe}from"./TextField-BNZ3YpVQ.js";import{I as Le}from"./InputAdornment-B7jHbOut.js";import{F as Ne,a as qe,c as Me}from"./filters-result-CrYBZAgn.js";import{C as He}from"./Chip-x2W7r02e.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-B5P4NoLN.js";import"./empty-content-D3sAh_j_.js";import"./TablePagination-BR53i_Na.js";import"./KeyboardArrowRight-yBnSCV6-.js";import"./LastPage-CGd1p9nh.js";import"./Select-BJK6Q71-.js";import"./Menu-B_EWYTTU.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-CPtucf_J.js";import"./FormControlLabel-CS2mv3Te.js";import"./FormHelperText-BdgqWWO0.js";import"./Rating-C9YzUf05.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-ic8LVZXa.js";import"./FormControl-DUlfZx4z.js";import"./FormLabel-Bx5V1G4l.js";import"./RadioGroup-CqyyD7XC.js";import"./FormGroup-ByRTQQuh.js";import"./index-DqNxVOmH.js";import"./countries-DSLisFCy.js";import"./Autocomplete-CidbBtOC.js";import"./country-select-D9zKFD0C.js";import"./InputLabel-D6SX5sCR.js";import"./DatePicker-C0kjDQAX.js";import"./ListItem-Dwol_2rN.js";import"./MobileDateTimePicker-DgPLkewz.js";import"./Tabs-Bg2egs3q.js";import"./index-BOf1bnN2.js";import"./CircularProgress-sp-m8OZh.js";const Ke=({row:s,index:o,selected:c,onViewRow:m,onDeleteRow:h,onEditRow:i})=>{var n,l;const x=E();E();const a=Z(),b=e.jsxs(De,{hover:!0,selected:c,children:[e.jsx(v,{children:o||(s==null?void 0:s.id)}),e.jsx(v,{children:Q(s==null?void 0:s.paymentDate)}),e.jsx(v,{children:(n=s==null?void 0:s.customer)==null?void 0:n.name}),e.jsxs(v,{children:["ORD-",(l=s==null?void 0:s.order)==null?void 0:l.id]}),e.jsx(v,{children:s==null?void 0:s.amount}),e.jsx(v,{children:s==null?void 0:s.paymentType}),e.jsx(v,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(ee,{color:a.open?"inherit":"default",onClick:a.onOpen,children:e.jsx(w,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[b,e.jsx(se,{open:a.open,anchorEl:a.anchorEl,onClose:a.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(oe,{children:[(s==null?void 0:s.attachments)&&e.jsxs(D,{onClick:()=>{m(),a.onClose()},children:[e.jsx(w,{icon:"solar:cloud-download-bold"}),"Download"]}),e.jsx(L,{permission:O.VIEW_PAYMENT,children:e.jsxs(D,{onClick:()=>{m(),a.onClose()},children:[e.jsx(w,{icon:"solar:eye-bold"}),"View"]})}),e.jsx(L,{permission:O.EDIT_PAYMENT,children:e.jsxs(D,{onClick:()=>{i(),a.onClose()},children:[e.jsx(w,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(L,{permission:O.DELETE_PAYMENT,children:e.jsxs(D,{onClick:()=>{x.onTrue(),a.onClose()},sx:{color:"error.main"},children:[e.jsx(w,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Ee,{open:x.value,onClose:x.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(W,{variant:"contained",color:"error",onClick:h,children:"Delete"})})]})},Qe=B.object({amount:B.number().min(1,{message:"Amount is required!"}),paymentDate:Be.date({message:{required_error:"Start date is required!"}}),paymentType:B.string().min(1,{message:"Payment Type is required!"}),description:B.string()}),We=({payment:s,open:o,onClose:c,handler:m})=>{var F,R,I,k,r;const h=p.useRef(s);//! Upload Logic START
const[i,x]=p.useState(),a=p.useCallback(u=>{const f=u[0];x(()=>f)},[]),b=()=>{x(null)},n=U(),l={headers:{"content-type":"multipart/form-data"}},{mutate:C}=K({mutationFn:u=>N.post(q.files.upload,u,l),onSuccess:async({data:u})=>{const{name:f}=u;if(f){const{current:V}=h;V.attachments=f,await m({id:s.id,payload:V})}return u},onSettled:async()=>{x(null),h.current={},await n.invalidateQueries({queryKey:["payments-images"]})},onError:u=>{console.log(u)}});//! Upload Logic END
p.useEffect(()=>{s&&S(j)},[s]);const j=p.useMemo(()=>({amount:(s==null?void 0:s.amount)||0,paymentType:(s==null?void 0:s.paymentType)||"",paymentDate:(s==null?void 0:s.paymentDate)||te(),description:(s==null?void 0:s.description)||""}),[s]),T=Fe({resolver:Re(Qe),defaultValues:j}),{reset:S,handleSubmit:M,formState:{isSubmitting:_}}=T,A=M(async u=>{try{if(i){h.current={...u};const f=new FormData;f.append("file",i),f.append("category","Payment"),await C(f)}else await m({id:s.id,payload:u});S()}catch(f){console.log(f)}});return e.jsxs(Y,{fullWidth:!0,maxWidth:"lg",open:o,onClose:c,children:[e.jsx(X,{children:"Edit Payment"}),e.jsxs(Ie,{methods:T,onSubmit:A,children:[e.jsxs(J,{children:[e.jsx(y,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(F=s==null?void 0:s.customer)==null?void 0:F.name})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsxs(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:["ORD-",s==null?void 0:s.id]})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Date:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:Q(s==null?void 0:s.paymentDate)})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Type:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.paymentType})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P(s==null?void 0:s.amount)||"-"})]})]}),e.jsx(y,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((R=s==null?void 0:s.order)==null?void 0:R.totalOrderAmount)||"-"})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((I=s==null?void 0:s.order)==null?void 0:I.orderPaymentAmount)||"-"})]})]}),e.jsx(y,{}),e.jsx(g,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(t,{component:"span",variant:"subtitle1",children:P(((k=s==null?void 0:s.order)==null?void 0:k.totalOrderAmount)-((r=s==null?void 0:s.order)==null?void 0:r.orderPaymentAmount))})]})}),e.jsx(y,{}),e.jsxs(g,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(d,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(3, 1fr)"},children:[e.jsx(G.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1}}),e.jsxs(G.Select,{name:"paymentType",label:"Payment Type",children:[e.jsx(D,{value:"Cash",children:"Cash"}),e.jsx(D,{value:"Transfer",children:"Transfer"}),e.jsx(D,{value:"Card",children:"Card"})]}),e.jsx(G.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1}})]}),e.jsxs(d,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsxs(g,{spacing:1.5,children:[e.jsx(t,{variant:"subtitle2",children:"Notes / Remarks"}),e.jsx(G.Text,{name:"description",multiline:!0,rows:3})]}),e.jsxs(g,{spacing:1.5,children:[e.jsx(t,{variant:"subtitle2",children:"Attachments"}),e.jsx(ke,{value:i,onDrop:a,onDelete:b})]})]})]})]}),e.jsxs($,{children:[e.jsx(Ge,{type:"submit",variant:"contained",children:s?"Save Changes":"Save"}),e.jsx(W,{color:"inherit",variant:"outlined",onClick:c,children:"Cancel"})]})]})]})},_e=({payment:s,open:o,onClose:c})=>{var m,h,i,x,a;return e.jsxs(Y,{fullWidth:!0,maxWidth:"md",open:o,onClose:c,children:[e.jsx(X,{children:"Payment Details"}),e.jsxs(J,{children:[e.jsx(y,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(m=s==null?void 0:s.customer)==null?void 0:m.name})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsxs(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:["ORD-",s==null?void 0:s.id]})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Date:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:Q(s==null?void 0:s.paymentDate)})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Type:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.paymentType})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P(s==null?void 0:s.amount)||"-"})]})]}),e.jsx(y,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((h=s==null?void 0:s.order)==null?void 0:h.totalOrderAmount)||"-"})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((i=s==null?void 0:s.order)==null?void 0:i.orderPaymentAmount)||"-"})]})]}),e.jsx(y,{}),e.jsx(g,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(t,{component:"span",variant:"subtitle1",children:P(((x=s==null?void 0:s.order)==null?void 0:x.totalOrderAmount)-((a=s==null?void 0:s.order)==null?void 0:a.orderPaymentAmount))})]})}),e.jsx(y,{})]}),e.jsx($,{children:e.jsx(W,{color:"inherit",variant:"outlined",onClick:c,children:"Close"})})]})};function Ve({filters:s,onResetPage:o,options:c}){const m=p.useCallback(h=>{o(),s.setState({name:h.target.value})},[s,o]);return e.jsx(g,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Oe,{sx:{width:420},value:s.state.name,onChange:m,placeholder:"Search Customer Name or Payment number...",InputProps:{startAdornment:e.jsx(Le,{position:"start",children:e.jsx(w,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function ze({filters:s,totalResults:o,onResetPage:c,sx:m}){const h=p.useCallback(()=>{c(),s.setState({name:""})},[s,c]),i=p.useCallback(()=>{c(),s.onResetState()},[s,c]);return e.jsx(Ne,{totalResults:o,onReset:i,sx:m,children:e.jsx(qe,{label:"Keyword:",isShow:!!s.state.name,children:e.jsx(He,{...Me,label:s.state.name,onDelete:h})})})}const Ue=[{id:"paymentId",label:"#",width:88},{id:"date",label:"Date",width:220},{id:"customerName",label:"Customer Name",width:220},{id:"orderId",label:"Order No",width:120},{id:"paidAmount",label:"Paid Amount",width:120},{id:"paymentType",label:"Payment Type",width:120},{id:"",width:88}],Ye=({payments:s})=>{const o=fe({defaultOrderBy:"orderNumber"}),[c,m]=p.useState(),h=re(),i=E(),x=E(),a=E(),[b,n]=p.useState(s),l=ne({name:"",status:"all",startDate:null,endDate:null});p.useEffect(()=>{n(s)},[s]);const C=ae(l.state.startDate,l.state.endDate),j=Je({inputData:b,comparator:be(o.order,o.orderBy),filters:l.state,dateError:C}),T=ge(j,o.page,o.rowsPerPage),S=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate,M=!j.length&&S||!j.length,_=p.useCallback(r=>{F(r);const u=b.filter(f=>f.id!==r);n(u),o.onUpdatePageDeleteRow(T.length)},[T.length,o,b]),A=U(),{mutate:F}=K({mutationFn:r=>{N.delete(q.payments.delete+r)},onSuccess:()=>{z.success("Delete success!"),a.onFalse()},onSettled:async()=>{await A.invalidateQueries({queryKey:["payments"]}),a.onFalse()},onError:r=>{console.log(r)}}),R=p.useCallback(r=>{m(r),i.onToggle()},[h]),I=p.useCallback(r=>{m(r),x.onToggle()},[T.length,o,b]),{mutate:k}=K({mutationFn:({id:r,payload:u})=>N.patch(q.payments.edit+r,u),onSuccess:async()=>{z.success("New Payment Has Been Modified!")},onSettled:async()=>{await A.invalidateQueries({queryKey:["payments"]}),await A.invalidateQueries({queryKey:["orders"]}),x.onFalse()},onError:r=>{console.log(r)}});return e.jsxs(e.Fragment,{children:[e.jsx(ie,{maxWidth:"xl",children:e.jsxs(g,{spacing:3,children:[e.jsx(je,{links:[{name:"Dashboard",href:H.dashboard.root},{name:"Payments",href:H.dashboard.payments.root}]}),e.jsx(L,{permission:O.PAYMENT_LIST,children:e.jsxs(le,{children:[e.jsx(Ve,{filters:l,onResetPage:o.onResetPage,dateError:C}),S&&e.jsx(ze,{filters:l,totalResults:j.length,onResetPage:o.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(d,{sx:{position:"relative"},children:[e.jsx(ye,{dense:o.dense,numSelected:o.selected.length,rowCount:j.length}),e.jsx(de,{sx:{minHeight:444},children:e.jsxs(Te,{size:o.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(we,{order:o.order,orderBy:o.orderBy,headLabel:Ue,rowCount:j.length}),e.jsxs(Se,{children:[j.slice(o.page*o.rowsPerPage,o.page*o.rowsPerPage+o.rowsPerPage).map((r,u)=>e.jsx(Ke,{index:o.page*o.rowsPerPage+u+1,row:r,selected:o.selected.includes(r.id),onEditRow:()=>I(r),onDeleteRow:()=>_(r.id),onViewRow:()=>R(r)},r.id)),e.jsx(Pe,{height:o.dense?56:76,emptyRows:Ce(o.page,o.rowsPerPage,j.length)}),e.jsx(ve,{notFound:M})]})]})})]}),e.jsx(Ae,{page:o.page,dense:o.dense,count:j.length,rowsPerPage:o.rowsPerPage,onPageChange:o.onChangePage,onChangeDense:o.onChangeDense,onRowsPerPageChange:o.onChangeRowsPerPage})]})})]})}),e.jsx(_e,{payment:c,open:i.value,onClose:i.onFalse}),e.jsx(We,{payment:c,open:x.value,onClose:x.onFalse,handler:k})]})};function Je({inputData:s,comparator:o,filters:c,dateError:m}){const{status:h,name:i,startDate:x,endDate:a}=c,b=s.map((n,l)=>[n,l]);return b.sort((n,l)=>{const C=o(n[0],l[0]);return C!==0?C:n[1]-l[1]}),s=b.map(n=>n[0]),i&&(s=s.filter(n=>n.id.toString().toLowerCase().indexOf(i.toLowerCase())!==-1||n.customer.name.toLowerCase().indexOf(i.toLowerCase())!==-1||n.customer.email.toLowerCase().indexOf(i.toLowerCase())!==-1)),h!=="all"&&(s=s.filter(n=>n.status===h)),m||x&&a&&(s=s.filter(n=>ce(n.createdAt,x,a))),s}const $e={title:`Payments | Dashboard - ${he.site.name}`};function so(){const s=ue({queryKey:["payments"],queryFn:async()=>{const{data:o}=await N.get(q.payments.list);return o}});return s.isPending||s.isLoading?e.jsx(xe,{}):s.isError?e.jsx(pe,{route:H.dashboard.payments.root}):e.jsxs(e.Fragment,{children:[e.jsx(me,{children:e.jsxs("title",{children:[" ",$e.title]})}),e.jsx(Ye,{payments:s.data})]})}export{so as default};
