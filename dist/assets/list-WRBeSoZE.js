import{o as L,bO as Z,j as e,aJ as V,w as ee,I as D,dw as se,bQ as oe,bR as v,em as N,e as W,r as j,dI as U,dJ as q,dH as M,bU as te,D as y,S as b,B as d,T as r,l as re,dz as ne,eo as ae,e8 as ie,p as K,aD as le,dy as de,ep as ce,dK as z,ec as xe,H as me,C as he}from"./index-qTpQGZSM.js";import{u as ue,E as pe}from"./error-block-LdKLJmXG.js";import{u as Q}from"./useMutation-DwwxkYn0.js";import{d as je}from"./download-file-BdLWCbMd.js";import{C as fe}from"./custom-breadcrumbs-BGUga5Db.js";import{P as O}from"./permission-access-controller-UwjT1wkM.js";import{g as be,r as ge,T as ye,e as Pe}from"./table-empty-rows-BjNRKAw-.js";import{u as Ce}from"./use-table-BsmW9kBY.js";import{T as ve}from"./table-no-data-CfTNoIH2.js";import{T as Te,a as De,b as we,c as Se}from"./table-head-custom-C1TpOHrp.js";import{T as Fe}from"./table-selected-action-Bi30jodZ.js";import{T as Ae}from"./table-pagination-custom-CT6oTmvL.js";import{C as Ee}from"./confirm-dialog-Bm3fCjvw.js";import{T as C}from"./TableCell-C7feBr2O.js";import{z as B,u as Re,t as ke,a as Ie,F as G}from"./form-provider-MVJiOuzj.js";import{b as P}from"./format-number-BnI2ZW2X.js";import{b as Be}from"./upload-avatar-Ck4q_zWp.js";import"./image-FClgpgDx.js";import"./editor-Cm_HovbX.js";import{s as Ge}from"./schema-helper-DZ7xosjo.js";import{a as Y,b as J,D as $}from"./DialogContent-BiWMH9ix.js";import{D as X}from"./DialogTitle-D7golWjh.js";import{L as Le}from"./LoadingButton-ipNV_Zqw.js";import{T as Ne}from"./TextField-DlbgkIdM.js";import{I as Oe}from"./InputAdornment-AOuf2E7W.js";import{F as qe,a as Me,c as He}from"./filters-result-YqZWotG6.js";import{C as Ke}from"./Chip-BkTmiN33.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-DkGXVbKZ.js";import"./Checkbox-BIMD_Kz2.js";import"./TablePagination-C-6SVL6T.js";import"./KeyboardArrowRight-BXMkEFXs.js";import"./LastPage-Bn5LqkbT.js";import"./Select-CPhaOcE2.js";import"./Menu-rdkUPF4f.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-iWMV7tHw.js";import"./FormControlLabel-CpHiSJVr.js";import"./FormHelperText-B0yAPKEP.js";import"./Rating-DGo1iH4F.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-CN2Pz1pQ.js";import"./FormControl-BpZ03tA-.js";import"./FormLabel-DnNlyvb5.js";import"./RadioGroup-Ct6wIvy3.js";import"./FormGroup-XxqkAOpe.js";import"./index-DQ3rvJDb.js";import"./countries-DSLisFCy.js";import"./Autocomplete-D_Vw0UML.js";import"./country-select-DSb3nCU9.js";import"./InputLabel-DcOK32WR.js";import"./DatePicker-1dQyUDWB.js";import"./ListItem-BzSUAL2X.js";import"./MobileDateTimePicker-46hsTEu5.js";import"./Tabs-BvOs9ozx.js";import"./index-C9BegESN.js";import"./CircularProgress-Buj6nA2J.js";const Qe=({row:s,index:o,selected:c,onViewRow:m,onViewFileRow:x,onDeleteRow:a,onEditRow:h})=>{var l,g;const p=L(),i=Z(),n=e.jsxs(Te,{hover:!0,selected:c,children:[e.jsx(C,{children:o||(s==null?void 0:s.id)}),e.jsx(C,{children:V(s==null?void 0:s.paymentDate)}),e.jsx(C,{children:(l=s==null?void 0:s.customer)==null?void 0:l.name}),e.jsx(C,{children:(g=s==null?void 0:s.order)==null?void 0:g.ref}),e.jsx(C,{children:s==null?void 0:s.amount}),e.jsx(C,{children:s==null?void 0:s.paymentType}),e.jsx(C,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(ee,{color:i.open?"inherit":"default",onClick:i.onOpen,children:e.jsx(D,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[n,e.jsx(se,{open:i.open,anchorEl:i.anchorEl,onClose:i.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(oe,{children:[(s==null?void 0:s.attachments)&&e.jsxs(v,{onClick:()=>{x(),i.onClose()},children:[e.jsx(D,{icon:"solar:cloud-download-bold"}),"Download"]}),e.jsx(O,{permission:N.VIEW_PAYMENT,children:e.jsxs(v,{onClick:()=>{m(),i.onClose()},children:[e.jsx(D,{icon:"solar:eye-bold"}),"View"]})}),e.jsx(O,{permission:N.EDIT_PAYMENT,children:e.jsxs(v,{onClick:()=>{h(),i.onClose()},children:[e.jsx(D,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(O,{permission:N.DELETE_PAYMENT,children:e.jsxs(v,{onClick:()=>{p.onTrue(),i.onClose()},sx:{color:"error.main"},children:[e.jsx(D,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Ee,{open:p.value,onClose:p.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(W,{variant:"contained",color:"error",onClick:a,children:"Delete"})})]})},Ve=B.object({amount:B.number().min(1,{message:"Amount is required!"}),paymentDate:Ge.date({message:{required_error:"Start date is required!"}}),paymentType:B.string().min(1,{message:"Payment Type is required!"}),description:B.string()}),We=({payment:s,open:o,onClose:c,handler:m})=>{var F,A,E,R,k;const x=j.useRef(s);//! Upload Logic START
const[a,h]=j.useState(),p=j.useCallback(t=>{const u=t[0];h(()=>u)},[]),i=()=>{h(null)},n=U(),l={headers:{"content-type":"multipart/form-data"}},{mutate:g}=Q({mutationFn:t=>q.post(M.files.upload,t,l),onSuccess:async({data:t})=>{const{name:u}=t;if(u){const{current:I}=x;I.attachments=u,await m({id:s.id,payload:I})}return t},onSettled:async()=>{h(null),x.current={},await n.invalidateQueries({queryKey:["payments-images"]})},onError:t=>{console.log(t)}});//! Upload Logic END
j.useEffect(()=>{s&&w(f)},[s]);const f=j.useMemo(()=>({amount:(s==null?void 0:s.amount)||0,paymentType:(s==null?void 0:s.paymentType)||"",paymentDate:(s==null?void 0:s.paymentDate)||te(),description:(s==null?void 0:s.description)||""}),[s]),T=Re({resolver:ke(Ve),defaultValues:f}),{reset:w,handleSubmit:H,formState:{isSubmitting:_}}=T,S=H(async t=>{try{if(a){x.current={...t};const u=new FormData;u.append("file",a),u.append("category","Payment"),await g(u)}else await m({id:s.id,payload:t});w()}catch(u){console.log(u)}});return e.jsxs(Y,{fullWidth:!0,maxWidth:"lg",open:o,onClose:c,children:[e.jsx(X,{children:"Edit Payment"}),e.jsxs(Ie,{methods:T,onSubmit:S,children:[e.jsxs(J,{children:[e.jsx(y,{}),e.jsxs(b,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(F=s==null?void 0:s.customer)==null?void 0:F.name})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.ref})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Date:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:V(s==null?void 0:s.paymentDate)})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Type:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.paymentType})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P(s==null?void 0:s.amount)||"-"})]})]}),e.jsx(y,{}),e.jsxs(b,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((A=s==null?void 0:s.order)==null?void 0:A.totalOrderAmount)||"-"})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((E=s==null?void 0:s.order)==null?void 0:E.orderPaymentAmount)||"-"})]})]}),e.jsx(y,{}),e.jsx(b,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(r,{component:"span",variant:"subtitle1",children:P(((R=s==null?void 0:s.order)==null?void 0:R.totalOrderAmount)-((k=s==null?void 0:s.order)==null?void 0:k.orderPaymentAmount))})]})}),e.jsx(y,{}),e.jsxs(b,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(d,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(3, 1fr)"},children:[e.jsx(G.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1}}),e.jsxs(G.Select,{name:"paymentType",label:"Payment Type",children:[e.jsx(v,{value:"Cash",children:"Cash"}),e.jsx(v,{value:"Transfer",children:"Transfer"}),e.jsx(v,{value:"Card",children:"Card"})]}),e.jsx(G.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1}})]}),e.jsxs(d,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsxs(b,{spacing:1.5,children:[e.jsx(r,{variant:"subtitle2",children:"Notes / Remarks"}),e.jsx(G.Text,{name:"description",multiline:!0,rows:3})]}),e.jsxs(b,{spacing:1.5,children:[e.jsx(r,{variant:"subtitle2",children:"Attachments"}),e.jsx(Be,{value:a,onDrop:p,onDelete:i})]})]})]})]}),e.jsxs($,{children:[e.jsx(Le,{type:"submit",variant:"contained",children:s?"Save Changes":"Save"}),e.jsx(W,{color:"inherit",variant:"outlined",onClick:c,children:"Cancel"})]})]})]})},_e=({payment:s,open:o,onClose:c})=>{var m,x,a,h,p;return e.jsxs(Y,{fullWidth:!0,maxWidth:"md",open:o,onClose:c,children:[e.jsx(X,{children:"Payment Details"}),e.jsxs(J,{children:[e.jsx(y,{}),e.jsxs(b,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(m=s==null?void 0:s.customer)==null?void 0:m.name})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.ref})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Date:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:V(s==null?void 0:s.paymentDate)})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Type:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.paymentType})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P(s==null?void 0:s.amount)||"-"})]})]}),e.jsx(y,{}),e.jsxs(b,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((x=s==null?void 0:s.order)==null?void 0:x.totalOrderAmount)||"-"})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((a=s==null?void 0:s.order)==null?void 0:a.orderPaymentAmount)||"-"})]})]}),e.jsx(y,{}),e.jsx(b,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(r,{component:"span",variant:"subtitle1",children:P(((h=s==null?void 0:s.order)==null?void 0:h.totalOrderAmount)-((p=s==null?void 0:s.order)==null?void 0:p.orderPaymentAmount))})]})}),e.jsx(y,{})]}),e.jsx($,{children:e.jsx(W,{color:"inherit",variant:"outlined",onClick:c,children:"Close"})})]})};function ze({filters:s,onResetPage:o,options:c}){const m=j.useCallback(x=>{o(),s.setState({name:x.target.value})},[s,o]);return e.jsx(b,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Ne,{sx:{width:420},value:s.state.name,onChange:m,placeholder:"Search Customer Name or Payment number...",InputProps:{startAdornment:e.jsx(Oe,{position:"start",children:e.jsx(D,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function Ue({filters:s,totalResults:o,onResetPage:c,sx:m}){const x=j.useCallback(()=>{c(),s.setState({name:""})},[s,c]),a=j.useCallback(()=>{c(),s.onResetState()},[s,c]);return e.jsx(qe,{totalResults:o,onReset:a,sx:m,children:e.jsx(Me,{label:"Keyword:",isShow:!!s.state.name,children:e.jsx(Ke,{...He,label:s.state.name,onDelete:x})})})}const Ye=[{id:"paymentId",label:"#",width:88},{id:"date",label:"Date",width:220},{id:"customerName",label:"Customer Name",width:220},{id:"orderId",label:"Order No",width:120},{id:"paidAmount",label:"Paid Amount",width:120},{id:"paymentType",label:"Payment Type",width:120},{id:"",width:88}],Je=({payments:s})=>{const o=Ce({defaultOrderBy:"orderNumber"}),[c,m]=j.useState(),x=re(),a=L(),h=L(),p=L(),[i,n]=j.useState(s),l=ne({name:"",status:"all",startDate:null,endDate:null});j.useEffect(()=>{n(s)},[s]);const g=ae(l.state.startDate,l.state.endDate),f=$e({inputData:i,comparator:be(o.order,o.orderBy),filters:l.state,dateError:g}),T=ge(f,o.page,o.rowsPerPage),w=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate,H=!f.length&&w||!f.length,_=j.useCallback(t=>{A(t);const u=i.filter(I=>I.id!==t);n(u),o.onUpdatePageDeleteRow(T.length)},[T.length,o,i]),S=U(),F=t=>{je(t)},{mutate:A}=Q({mutationFn:t=>{q.delete(M.payments.delete+t)},onSuccess:()=>{z.success("Delete success!"),p.onFalse()},onSettled:async()=>{await S.invalidateQueries({queryKey:["payments"]}),p.onFalse()},onError:t=>{console.log(t)}}),E=j.useCallback(t=>{m(t),a.onToggle()},[x]),R=j.useCallback(t=>{m(t),h.onToggle()},[T.length,o,i]),{mutate:k}=Q({mutationFn:({id:t,payload:u})=>q.patch(M.payments.edit+t,u),onSuccess:async()=>{z.success("New Payment Has Been Modified!")},onSettled:async()=>{await S.invalidateQueries({queryKey:["payments"]}),await S.invalidateQueries({queryKey:["orders"]}),h.onFalse()},onError:t=>{console.log(t)}});return e.jsxs(e.Fragment,{children:[e.jsx(ie,{maxWidth:"xl",children:e.jsxs(b,{spacing:3,children:[e.jsx(fe,{links:[{name:"Dashboard",href:K.dashboard.root},{name:"Payments",href:K.dashboard.payments.root}]}),e.jsx(O,{permission:N.PAYMENT_LIST,children:e.jsxs(le,{children:[e.jsx(ze,{filters:l,onResetPage:o.onResetPage,dateError:g}),w&&e.jsx(Ue,{filters:l,totalResults:f.length,onResetPage:o.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(d,{sx:{position:"relative"},children:[e.jsx(Fe,{dense:o.dense,numSelected:o.selected.length,rowCount:f.length}),e.jsx(de,{sx:{minHeight:444},children:e.jsxs(De,{size:o.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(we,{order:o.order,orderBy:o.orderBy,headLabel:Ye,rowCount:f.length}),e.jsxs(Se,{children:[f.slice(o.page*o.rowsPerPage,o.page*o.rowsPerPage+o.rowsPerPage).map((t,u)=>e.jsx(Qe,{index:o.page*o.rowsPerPage+u+1,row:t,selected:o.selected.includes(t.id),onEditRow:()=>R(t),onDeleteRow:()=>_(t.id),onViewRow:()=>E(t),onViewFileRow:()=>{F(t.attachments)}},t.id)),e.jsx(ye,{height:o.dense?56:76,emptyRows:Pe(o.page,o.rowsPerPage,f.length)}),e.jsx(ve,{notFound:H})]})]})})]}),e.jsx(Ae,{page:o.page,dense:o.dense,count:f.length,rowsPerPage:o.rowsPerPage,onPageChange:o.onChangePage,onChangeDense:o.onChangeDense,onRowsPerPageChange:o.onChangeRowsPerPage})]})})]})}),e.jsx(_e,{payment:c,open:a.value,onClose:a.onFalse}),e.jsx(We,{payment:c,open:h.value,onClose:h.onFalse,handler:k})]})};function $e({inputData:s,comparator:o,filters:c,dateError:m}){const{status:x,name:a,startDate:h,endDate:p}=c,i=s.map((n,l)=>[n,l]);return i.sort((n,l)=>{const g=o(n[0],l[0]);return g!==0?g:n[1]-l[1]}),s=i.map(n=>n[0]),a&&(s=s.filter(n=>n.id.toString().toLowerCase().indexOf(a.toLowerCase())!==-1||n.customer.name.toLowerCase().indexOf(a.toLowerCase())!==-1||n.customer.email.toLowerCase().indexOf(a.toLowerCase())!==-1)),x!=="all"&&(s=s.filter(n=>n.status===x)),m||h&&p&&(s=s.filter(n=>ce(n.createdAt,h,p))),s}const Xe={title:`Payments | Dashboard - ${he.site.name}`};function no(){const s=ue({queryKey:["payments"],queryFn:async()=>{const{data:o}=await q.get(M.payments.list);return o}});return s.isPending||s.isLoading?e.jsx(xe,{}):s.isError?e.jsx(pe,{route:K.dashboard.payments.root}):e.jsxs(e.Fragment,{children:[e.jsx(me,{children:e.jsxs("title",{children:[" ",Xe.title]})}),e.jsx(Je,{payments:s.data})]})}export{no as default};
