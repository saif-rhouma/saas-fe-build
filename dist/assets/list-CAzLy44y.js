import{i as L,b5 as Z,j as e,aH as W,l as ee,I as D,db as se,b7 as oe,b8 as v,e2 as N,e as Q,r as j,dn as z,dp as q,dm as M,bb as te,am as y,S as b,B as d,T as r,g as re,de as ne,ec as ae,dP as ie,p as K,aB as le,dd as de,ed as ce,dq as Y,dT as xe,H as me,C as he}from"./index-PcvvizaM.js";import{u as pe,E as ue}from"./error-block-ByYUb2x8.js";import{u as V}from"./useMutation-CKVX9VXs.js";import{d as je}from"./download-file-CENPVEkr.js";import{C as fe}from"./custom-breadcrumbs-CveB5zSd.js";import{P as O}from"./permission-access-controller-B2UElLgV.js";import{g as be,r as ge,e as ye}from"./utils-MBUcMVfY.js";import{u as Pe}from"./use-table-CXqtoWAX.js";import{T as Ce}from"./table-no-data-BVQxlfwo.js";import{T as ve}from"./table-empty-rows-Cjq0RAGA.js";import{T as Te,a as De,b as we,c as Se}from"./table-head-custom-BdCpV7kt.js";import{T as Fe}from"./table-selected-action-CHsDjyal.js";import{T as Ae}from"./table-pagination-custom-C5wACWcH.js";import{C as Ee}from"./confirm-dialog-CKnDVSbe.js";import{T as C}from"./TableCell-C8o5zNcN.js";import{z as B,u as Re,t as ke,a as Ie,F as G}from"./form-provider-QAnR1fN1.js";import{b as P}from"./format-number-DbRbqmXm.js";import{b as Be}from"./upload-avatar-BS1_xrDW.js";import"./image-CJs9mC80.js";import"./editor-_YiH203b.js";import{s as Ge}from"./schema-helper-CQGJpWhe.js";import{a as U,b as J,D as $}from"./DialogContent-BNlapGc3.js";import{D as X}from"./DialogTitle-AFLXDAx8.js";import{L as Le}from"./LoadingButton-Buh1pTwJ.js";import{T as Ne}from"./TextField-BqVeNtQk.js";import{I as Oe}from"./InputAdornment-9Wd2PMBY.js";import{F as qe,a as Me,c as He}from"./filters-result-BT9oMvry.js";import{C as Ke}from"./Chip-CIfpjv01.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-CsXJsjUk.js";import"./Checkbox-Ci7zC3Qo.js";import"./TablePagination-3Idlx3Tg.js";import"./KeyboardArrowRight-DC977Fth.js";import"./LastPage-Nh7WTTAI.js";import"./Select-oMu1ahJl.js";import"./Menu-DUpb5sCU.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-Dg_k17pz.js";import"./FormControlLabel-BVXyMM5l.js";import"./FormHelperText-CwIdVd83.js";import"./Rating-BxbBWQ1u.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-C99_fc9G.js";import"./FormControl-BDFWwf0L.js";import"./FormLabel-COKH-IDU.js";import"./RadioGroup-4h1o996a.js";import"./FormGroup--EXUIjsJ.js";import"./utils-D7_t011Z.js";import"./index-2WdDYItv.js";import"./countries-DSLisFCy.js";import"./Autocomplete-wQ_CiLgR.js";import"./country-select-CiBGd84d.js";import"./InputLabel-CLgWCQLa.js";import"./DatePicker-BpnHzDBD.js";import"./ListItem-27j6jDo_.js";import"./MobileDateTimePicker-m0xyb1Je.js";import"./Tabs-CZPaKkdi.js";import"./index-C-MOTVcd.js";import"./CircularProgress-CjSU_ZH0.js";const Ve=({row:s,index:o,selected:c,onViewRow:m,onViewFileRow:x,onDeleteRow:a,onEditRow:h})=>{var l,g;const u=L(),i=Z(),n=e.jsxs(Te,{hover:!0,selected:c,children:[e.jsx(C,{children:o||(s==null?void 0:s.id)}),e.jsx(C,{children:W(s==null?void 0:s.paymentDate)}),e.jsx(C,{children:(l=s==null?void 0:s.customer)==null?void 0:l.name}),e.jsx(C,{children:(g=s==null?void 0:s.order)==null?void 0:g.ref}),e.jsx(C,{children:s==null?void 0:s.amount}),e.jsx(C,{children:s==null?void 0:s.paymentType}),e.jsx(C,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(ee,{color:i.open?"inherit":"default",onClick:i.onOpen,children:e.jsx(D,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[n,e.jsx(se,{open:i.open,anchorEl:i.anchorEl,onClose:i.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(oe,{children:[(s==null?void 0:s.attachments)&&e.jsxs(v,{onClick:()=>{x(),i.onClose()},children:[e.jsx(D,{icon:"solar:cloud-download-bold"}),"Download"]}),e.jsx(O,{permission:N.VIEW_PAYMENT,children:e.jsxs(v,{onClick:()=>{m(),i.onClose()},children:[e.jsx(D,{icon:"solar:eye-bold"}),"View"]})}),e.jsx(O,{permission:N.EDIT_PAYMENT,children:e.jsxs(v,{onClick:()=>{h(),i.onClose()},children:[e.jsx(D,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(O,{permission:N.DELETE_PAYMENT,children:e.jsxs(v,{onClick:()=>{u.onTrue(),i.onClose()},sx:{color:"error.main"},children:[e.jsx(D,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Ee,{open:u.value,onClose:u.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(Q,{variant:"contained",color:"error",onClick:a,children:"Delete"})})]})},We=B.object({amount:B.number().min(1,{message:"Amount is required!"}),paymentDate:Ge.date({message:{required_error:"Start date is required!"}}),paymentType:B.string().min(1,{message:"Payment Type is required!"}),description:B.string()}),Qe=({payment:s,open:o,onClose:c,handler:m})=>{var F,A,E,R,k;const x=j.useRef(s);//! Upload Logic START
const[a,h]=j.useState(),u=j.useCallback(t=>{const p=t[0];h(()=>p)},[]),i=()=>{h(null)},n=z(),l={headers:{"content-type":"multipart/form-data"}},{mutate:g}=V({mutationFn:t=>q.post(M.files.upload,t,l),onSuccess:async({data:t})=>{const{name:p}=t;if(p){const{current:I}=x;I.attachments=p,await m({id:s.id,payload:I})}return t},onSettled:async()=>{h(null),x.current={},await n.invalidateQueries({queryKey:["payments-images"]})},onError:t=>{console.log(t)}});//! Upload Logic END
j.useEffect(()=>{s&&w(f)},[s]);const f=j.useMemo(()=>({paymentType:(s==null?void 0:s.paymentType)||"",paymentDate:(s==null?void 0:s.paymentDate)||te(),description:(s==null?void 0:s.description)||""}),[s]),T=Re({resolver:ke(We),defaultValues:f}),{reset:w,handleSubmit:H,formState:{isSubmitting:_}}=T,S=H(async t=>{try{if(a){x.current={...t};const p=new FormData;p.append("file",a),p.append("category","Payment"),await g(p)}else await m({id:s.id,payload:t});w()}catch(p){console.log(p)}});return e.jsxs(U,{fullWidth:!0,maxWidth:"lg",open:o,onClose:c,children:[e.jsx(X,{children:"Edit Payment"}),e.jsxs(Ie,{methods:T,onSubmit:S,children:[e.jsxs(J,{children:[e.jsx(y,{}),e.jsxs(b,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(F=s==null?void 0:s.customer)==null?void 0:F.name})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.ref})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Date:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:W(s==null?void 0:s.paymentDate)})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Type:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.paymentType})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P(s==null?void 0:s.amount)||"-"})]})]}),e.jsx(y,{}),e.jsxs(b,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((A=s==null?void 0:s.order)==null?void 0:A.totalOrderAmount)||"-"})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((E=s==null?void 0:s.order)==null?void 0:E.orderPaymentAmount)||"-"})]})]}),e.jsx(y,{}),e.jsx(b,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(r,{component:"span",variant:"subtitle1",children:P(((R=s==null?void 0:s.order)==null?void 0:R.totalOrderAmount)-((k=s==null?void 0:s.order)==null?void 0:k.orderPaymentAmount))})]})}),e.jsx(y,{}),e.jsxs(b,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(d,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(3, 1fr)"},children:[e.jsx(G.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1}}),e.jsxs(G.Select,{name:"paymentType",label:"Payment Type",children:[e.jsx(v,{value:"Cash",children:"Cash"}),e.jsx(v,{value:"Transfer",children:"Transfer"}),e.jsx(v,{value:"Card",children:"Card"})]}),e.jsx(G.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1}})]}),e.jsxs(d,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsxs(b,{spacing:1.5,children:[e.jsx(r,{variant:"subtitle2",children:"Notes / Remarks"}),e.jsx(G.Text,{name:"description",multiline:!0,rows:3})]}),e.jsxs(b,{spacing:1.5,children:[e.jsx(r,{variant:"subtitle2",children:"Attachments"}),e.jsx(Be,{value:a,onDrop:u,onDelete:i})]})]})]})]}),e.jsxs($,{children:[e.jsx(Le,{type:"submit",variant:"contained",children:s?"Save Changes":"Save"}),e.jsx(Q,{color:"inherit",variant:"outlined",onClick:c,children:"Cancel"})]})]})]})},_e=({payment:s,open:o,onClose:c})=>{var m,x,a,h,u;return e.jsxs(U,{fullWidth:!0,maxWidth:"md",open:o,onClose:c,children:[e.jsx(X,{children:"Payment Details"}),e.jsxs(J,{children:[e.jsx(y,{}),e.jsxs(b,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(m=s==null?void 0:s.customer)==null?void 0:m.name})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.ref})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Date:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:W(s==null?void 0:s.paymentDate)})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Type:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.paymentType})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P(s==null?void 0:s.amount)||"-"})]})]}),e.jsx(y,{}),e.jsxs(b,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((x=s==null?void 0:s.order)==null?void 0:x.totalOrderAmount)||"-"})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((a=s==null?void 0:s.order)==null?void 0:a.orderPaymentAmount)||"-"})]})]}),e.jsx(y,{}),e.jsx(b,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(r,{component:"span",variant:"subtitle1",children:P(((h=s==null?void 0:s.order)==null?void 0:h.totalOrderAmount)-((u=s==null?void 0:s.order)==null?void 0:u.orderPaymentAmount))})]})}),e.jsx(y,{})]}),e.jsx($,{children:e.jsx(Q,{color:"inherit",variant:"outlined",onClick:c,children:"Close"})})]})};function Ye({filters:s,onResetPage:o,options:c}){const m=j.useCallback(x=>{o(),s.setState({name:x.target.value})},[s,o]);return e.jsx(b,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Ne,{sx:{width:420},value:s.state.name,onChange:m,placeholder:"Search Customer Name or Payment number...",InputProps:{startAdornment:e.jsx(Oe,{position:"start",children:e.jsx(D,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function ze({filters:s,totalResults:o,onResetPage:c,sx:m}){const x=j.useCallback(()=>{c(),s.setState({name:""})},[s,c]),a=j.useCallback(()=>{c(),s.onResetState()},[s,c]);return e.jsx(qe,{totalResults:o,onReset:a,sx:m,children:e.jsx(Me,{label:"Keyword:",isShow:!!s.state.name,children:e.jsx(Ke,{...He,label:s.state.name,onDelete:x})})})}const Ue=[{id:"paymentId",label:"#",width:88},{id:"date",label:"Date",width:220},{id:"customerName",label:"Customer Name",width:220},{id:"orderId",label:"Order No",width:120},{id:"paidAmount",label:"Paid Amount",width:120},{id:"paymentType",label:"Payment Type",width:120},{id:"",width:88}],Je=({payments:s})=>{const o=Pe({defaultOrderBy:"orderNumber"}),[c,m]=j.useState(),x=re(),a=L(),h=L(),u=L(),[i,n]=j.useState(s),l=ne({name:"",status:"all",startDate:null,endDate:null});j.useEffect(()=>{n(s)},[s]);const g=ae(l.state.startDate,l.state.endDate),f=$e({inputData:i,comparator:be(o.order,o.orderBy),filters:l.state,dateError:g}),T=ge(f,o.page,o.rowsPerPage),w=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate,H=!f.length&&w||!f.length,_=j.useCallback(t=>{A(t);const p=i.filter(I=>I.id!==t);n(p),o.onUpdatePageDeleteRow(T.length)},[T.length,o,i]),S=z(),F=t=>{je(t)},{mutate:A}=V({mutationFn:t=>{q.delete(M.payments.delete+t)},onSuccess:()=>{Y.success("Delete success!"),u.onFalse()},onSettled:async()=>{await S.invalidateQueries({queryKey:["payments"]}),u.onFalse()},onError:t=>{console.log(t)}}),E=j.useCallback(t=>{m(t),a.onToggle()},[x]),R=j.useCallback(t=>{m(t),h.onToggle()},[T.length,o,i]),{mutate:k}=V({mutationFn:({id:t,payload:p})=>q.patch(M.payments.edit+t,p),onSuccess:async()=>{Y.success("New Payment Has Been Modified!")},onSettled:async()=>{await S.invalidateQueries({queryKey:["payments"]}),await S.invalidateQueries({queryKey:["orders"]}),h.onFalse()},onError:t=>{console.log(t)}});return e.jsxs(e.Fragment,{children:[e.jsx(ie,{maxWidth:"xl",children:e.jsxs(b,{spacing:3,children:[e.jsx(fe,{links:[{name:"Dashboard",href:K.dashboard.root},{name:"Payments",href:K.dashboard.payments.root}]}),e.jsx(O,{permission:N.PAYMENT_LIST,children:e.jsxs(le,{children:[e.jsx(Ye,{filters:l,onResetPage:o.onResetPage,dateError:g}),w&&e.jsx(ze,{filters:l,totalResults:f.length,onResetPage:o.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(d,{sx:{position:"relative"},children:[e.jsx(Fe,{dense:o.dense,numSelected:o.selected.length,rowCount:f.length}),e.jsx(de,{sx:{minHeight:444},children:e.jsxs(De,{size:o.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(we,{order:o.order,orderBy:o.orderBy,headLabel:Ue,rowCount:f.length}),e.jsxs(Se,{children:[f.slice(o.page*o.rowsPerPage,o.page*o.rowsPerPage+o.rowsPerPage).map((t,p)=>e.jsx(Ve,{index:o.page*o.rowsPerPage+p+1,row:t,selected:o.selected.includes(t.id),onEditRow:()=>R(t),onDeleteRow:()=>_(t.id),onViewRow:()=>E(t),onViewFileRow:()=>{F(t.attachments)}},t.id)),e.jsx(ve,{height:o.dense?56:76,emptyRows:ye(o.page,o.rowsPerPage,f.length)}),e.jsx(Ce,{notFound:H})]})]})})]}),e.jsx(Ae,{page:o.page,dense:o.dense,count:f.length,rowsPerPage:o.rowsPerPage,onPageChange:o.onChangePage,onChangeDense:o.onChangeDense,onRowsPerPageChange:o.onChangeRowsPerPage})]})})]})}),e.jsx(_e,{payment:c,open:a.value,onClose:a.onFalse}),e.jsx(Qe,{payment:c,open:h.value,onClose:h.onFalse,handler:k})]})};function $e({inputData:s,comparator:o,filters:c,dateError:m}){const{status:x,name:a,startDate:h,endDate:u}=c,i=s.map((n,l)=>[n,l]);return i.sort((n,l)=>{const g=o(n[0],l[0]);return g!==0?g:n[1]-l[1]}),s=i.map(n=>n[0]),a&&(s=s.filter(n=>n.id.toString().toLowerCase().indexOf(a.toLowerCase())!==-1||n.customer.name.toLowerCase().indexOf(a.toLowerCase())!==-1||n.customer.email.toLowerCase().indexOf(a.toLowerCase())!==-1)),x!=="all"&&(s=s.filter(n=>n.status===x)),m||h&&u&&(s=s.filter(n=>ce(n.createdAt,h,u))),s}const Xe={title:`Payments | Dashboard - ${he.site.name}`};function io(){const s=pe({queryKey:["payments"],queryFn:async()=>{const{data:o}=await q.get(M.payments.list);return o}});return s.isPending||s.isLoading?e.jsx(xe,{}):s.isError?e.jsx(ue,{route:K.dashboard.payments.root}):e.jsxs(e.Fragment,{children:[e.jsx(me,{children:e.jsxs("title",{children:[" ",Xe.title]})}),e.jsx(Je,{payments:s.data})]})}export{io as default};
