import{i as N,aP as ee,j as e,d0 as V,l as se,I as w,db as oe,aR as re,aS as T,e3 as O,e as Q,r as j,dn as U,dp as q,dm as M,aW as te,am as C,S as g,B as a,T as t,e8 as Y,g as ne,de as ae,e2 as ie,dP as le,p as H,cY as de,dd as ce,ed as xe,dq as z,dT as he,H as ue,C as me}from"./index-CeoumMXa.js";import{u as pe,E as je}from"./error-block-BOKHva85.js";import{u as K}from"./useMutation-4je3POSu.js";import{d as fe}from"./download-file-BYt6L3-M.js";import{C as ge}from"./custom-breadcrumbs-ngxVXzzx.js";import{P as L}from"./permission-access-controller-DNWFgyMM.js";import{g as be,r as Pe,e as Ce}from"./utils-MBUcMVfY.js";import{u as ve}from"./use-table-BfqLaSOx.js";import{T as Te}from"./table-no-data-BPXsxyMZ.js";import{T as De}from"./table-empty-rows-CQcgBGPP.js";import{T as we,a as ye,b as Se,c as Ae}from"./table-head-custom-BVRvPhIu.js";import{T as Fe}from"./table-selected-action-DIWV9NOy.js";import{T as Ee}from"./table-pagination-custom-SOm9kQdK.js";import{b as P}from"./format-number-CfOaiGtc.js";import{C as Re}from"./confirm-dialog-BDK8QBMr.js";import{T as v}from"./TableCell-BvKTYQ10.js";import{z as G,u as ke,t as Ie,a as Ge,F as B}from"./form-provider-DKdlN7sO.js";import{b as Be}from"./upload-avatar-DgzKyEAI.js";import"./image-gD0MRFhe.js";import"./editor-CGBM6KiM.js";import{s as Ne}from"./schema-helper-Be-m4cwr.js";import{a as J,b as $,D as X}from"./DialogContent-lL6v-LR1.js";import{D as Z}from"./DialogTitle-DLappBwE.js";import{L as Oe}from"./LoadingButton-CaE9NhiX.js";import{T as Le}from"./TextField-z3Q2rwEm.js";import{I as qe}from"./InputAdornment-C38_n1P8.js";import{F as Me,a as We,c as He}from"./filters-result-BKI3qTEq.js";import{C as Ke}from"./Chip-CvED2Eee.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-BzO2aMNa.js";import"./Checkbox-CkO8iVtf.js";import"./TablePagination-D-sELu1u.js";import"./KeyboardArrowRight-PHQ94moU.js";import"./LastPage-DCR1Yf4v.js";import"./Select-DbrC784k.js";import"./Menu-CT9abzpD.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-BzFRFGp-.js";import"./FormControlLabel-D1f6UQW5.js";import"./FormHelperText-NhuMVC6U.js";import"./Rating-BkeEaraV.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-D_-Y0-29.js";import"./FormControl-BFUuTpvQ.js";import"./FormLabel-D-qsWjCe.js";import"./RadioGroup-CqUEke42.js";import"./FormGroup-BxLT3eby.js";import"./utils-V23ossyP.js";import"./index-DetNUK_X.js";import"./countries-DSLisFCy.js";import"./Autocomplete-DtovygcX.js";import"./country-select-wu1LAMSz.js";import"./InputLabel-BN-i6Vxq.js";import"./DatePicker-UmXUWr0U.js";import"./ListItem-B8kaKgTM.js";import"./MobileDateTimePicker-bh-hYpGs.js";import"./Tabs-JWaOApeP.js";import"./index-y5LOUhki.js";import"./CircularProgress-jqseK15W.js";const Ve=({row:s,index:o,selected:c,onViewRow:h,onViewFileRow:x,onDeleteRow:i,onEditRow:u})=>{var d,b;const p=N(),l=ee(),n=e.jsxs(we,{hover:!0,selected:c,children:[e.jsx(v,{children:o||(s==null?void 0:s.id)}),e.jsx(v,{children:V(s==null?void 0:s.paymentDate)}),e.jsx(v,{children:(d=s==null?void 0:s.customer)==null?void 0:d.name}),e.jsx(v,{children:(b=s==null?void 0:s.order)==null?void 0:b.ref}),e.jsx(v,{children:P(s==null?void 0:s.amount)}),e.jsx(v,{children:s==null?void 0:s.paymentType}),e.jsx(v,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(se,{color:l.open?"inherit":"default",onClick:l.onOpen,children:e.jsx(w,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[n,e.jsx(oe,{open:l.open,anchorEl:l.anchorEl,onClose:l.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(re,{children:[(s==null?void 0:s.attachments)&&e.jsxs(T,{onClick:()=>{x(),l.onClose()},children:[e.jsx(w,{icon:"solar:cloud-download-bold"}),"Download"]}),e.jsx(L,{permission:O.VIEW_PAYMENT,children:e.jsxs(T,{onClick:()=>{h(),l.onClose()},children:[e.jsx(w,{icon:"solar:eye-bold"}),"View"]})}),e.jsx(L,{permission:O.EDIT_PAYMENT,children:e.jsxs(T,{onClick:()=>{u(),l.onClose()},children:[e.jsx(w,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(L,{permission:O.DELETE_PAYMENT,children:e.jsxs(T,{onClick:()=>{p.onTrue(),l.onClose()},sx:{color:"error.main"},children:[e.jsx(w,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Re,{open:p.value,onClose:p.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(Q,{variant:"contained",color:"error",onClick:i,children:"Delete"})})]})},Qe=G.object({amount:G.number().min(1,{message:"Amount is required!"}),paymentDate:Ne.date({message:{required_error:"Start date is required!"}}),paymentType:G.string().min(1,{message:"Payment Type is required!"}),description:G.string()}),_e=({payment:s,open:o,onClose:c,handler:h})=>{var A,F,E,R,k;const x=j.useRef(s);//! Upload Logic START
const[i,u]=j.useState(),p=j.useCallback(r=>{const m=r[0];u(()=>m)},[]),l=()=>{u(null)},n=U(),d={headers:{"content-type":"multipart/form-data"}},{mutate:b}=K({mutationFn:r=>q.post(M.files.upload,r,d),onSuccess:async({data:r})=>{const{name:m}=r;if(m){const{current:I}=x;I.attachments=m,await h({id:s.id,payload:I})}return r},onSettled:async()=>{u(null),x.current={},await n.invalidateQueries({queryKey:["payments-images"]})},onError:r=>{console.log(r)}});//! Upload Logic END
j.useEffect(()=>{s&&y(f)},[s]);const f=j.useMemo(()=>({paymentType:(s==null?void 0:s.paymentType)||"",paymentDate:(s==null?void 0:s.paymentDate)||te(),description:(s==null?void 0:s.description)||""}),[s]),D=ke({resolver:Ie(Qe),defaultValues:f}),{reset:y,handleSubmit:W,formState:{isSubmitting:_}}=D,S=W(async r=>{try{if(i){x.current={...r};const m=new FormData;m.append("file",i),m.append("category","Payment"),await b(m)}else await h({id:s.id,payload:r});y()}catch(m){console.log(m)}});return e.jsxs(J,{fullWidth:!0,maxWidth:"lg",open:o,onClose:c,children:[e.jsx(Z,{children:"Edit Payment"}),e.jsxs(Ge,{methods:D,onSubmit:S,children:[e.jsxs($,{children:[e.jsx(C,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(a,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(A=s==null?void 0:s.customer)==null?void 0:A.name})]}),e.jsxs(a,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.ref})]}),e.jsxs(a,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Date:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:V(s==null?void 0:s.paymentDate)})]}),e.jsxs(a,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Type:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.paymentType})]}),e.jsxs(a,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P(s==null?void 0:s.amount)||"-"})]})]}),e.jsx(C,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(a,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((F=s==null?void 0:s.order)==null?void 0:F.totalOrderAmount)||"-"})]}),e.jsxs(a,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((E=s==null?void 0:s.order)==null?void 0:E.orderPaymentAmount)||"-"})]})]}),e.jsx(C,{}),e.jsx(g,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(a,{display:"flex",children:[e.jsx(t,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(t,{component:"span",variant:"subtitle1",children:P(((R=s==null?void 0:s.order)==null?void 0:R.totalOrderAmount)-((k=s==null?void 0:s.order)==null?void 0:k.orderPaymentAmount))})]})}),e.jsx(C,{}),e.jsxs(g,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(a,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(3, 1fr)"},children:[e.jsx(B.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1}}),e.jsxs(B.Select,{name:"paymentType",label:"Payment Type",children:[e.jsx(T,{value:"Cash",children:"Cash"}),e.jsx(T,{value:"Transfer",children:"Transfer"}),e.jsx(T,{value:"Card",children:"Card"})]}),e.jsx(B.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1}})]}),e.jsxs(a,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsxs(g,{spacing:1.5,children:[e.jsx(t,{variant:"subtitle2",children:"Notes / Remarks"}),e.jsx(B.Text,{name:"description",multiline:!0,rows:3})]}),e.jsxs(g,{spacing:1.5,children:[e.jsx(t,{variant:"subtitle2",children:"Attachments"}),e.jsx(Be,{value:i,onDrop:p,onDelete:l})]})]})]})]}),e.jsxs(X,{children:[e.jsx(Oe,{type:"submit",variant:"contained",children:s?"Save Changes":"Save"}),e.jsx(Q,{color:"inherit",variant:"outlined",onClick:c,children:"Cancel"})]})]})]})},Ye=({payment:s,open:o,onClose:c})=>{var h,x,i,u,p;return e.jsxs(J,{fullWidth:!0,maxWidth:"md",open:o,onClose:c,children:[e.jsx(Z,{children:"Payment Details"}),e.jsxs($,{children:[e.jsx(C,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(a,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(h=s==null?void 0:s.customer)==null?void 0:h.name})]}),e.jsxs(a,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(x=s==null?void 0:s.order)==null?void 0:x.ref})]}),e.jsxs(a,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Date:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:V(s==null?void 0:s.paymentDate)})]}),e.jsxs(a,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Type:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.paymentType})]}),e.jsxs(a,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P(s==null?void 0:s.amount)||"-"})]})]}),e.jsx(C,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(a,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P(Y((s==null?void 0:s.order.totalOrderAmount)-(s==null?void 0:s.order.totalOrderAmount)*((s==null?void 0:s.order.discount)/100),(i=s==null?void 0:s.order)==null?void 0:i.snapshotTaxPercentage))||"-"})]}),e.jsxs(a,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((u=s==null?void 0:s.order)==null?void 0:u.orderPaymentAmount)||"-"})]})]}),e.jsx(C,{}),e.jsx(g,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(a,{display:"flex",children:[e.jsx(t,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(t,{component:"span",variant:"subtitle1",children:P(Y((s==null?void 0:s.order.totalOrderAmount)-(s==null?void 0:s.order.totalOrderAmount)*((s==null?void 0:s.order.discount)/100),(p=s==null?void 0:s.order)==null?void 0:p.snapshotTaxPercentage)-(s==null?void 0:s.order.orderPaymentAmount))||"-"})]})}),e.jsx(C,{}),(s==null?void 0:s.notes)&&e.jsx(g,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(a,{display:"flex",flexDirection:"column",children:[e.jsx(t,{component:"span",variant:"subtitle1",children:"Notes:"}),e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:s==null?void 0:s.notes})]})})]}),e.jsx(X,{children:e.jsx(Q,{color:"inherit",variant:"outlined",onClick:c,children:"Close"})})]})};function ze({filters:s,onResetPage:o,options:c}){const h=j.useCallback(x=>{o(),s.setState({name:x.target.value})},[s,o]);return e.jsx(g,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Le,{sx:{width:420},value:s.state.name,onChange:h,placeholder:"Search Customer Name or Payment number...",InputProps:{startAdornment:e.jsx(qe,{position:"start",children:e.jsx(w,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function Ue({filters:s,totalResults:o,onResetPage:c,sx:h}){const x=j.useCallback(()=>{c(),s.setState({name:""})},[s,c]),i=j.useCallback(()=>{c(),s.onResetState()},[s,c]);return e.jsx(Me,{totalResults:o,onReset:i,sx:h,children:e.jsx(We,{label:"Keyword:",isShow:!!s.state.name,children:e.jsx(Ke,{...He,label:s.state.name,onDelete:x})})})}const Je=[{id:"paymentId",label:"#",width:88},{id:"date",label:"Date",width:220},{id:"customerName",label:"Customer Name",width:220},{id:"orderId",label:"Order No",width:120},{id:"paidAmount",label:"Paid Amount",width:120},{id:"paymentType",label:"Payment Type",width:120},{id:"",width:88}],$e=({payments:s})=>{const o=ve({defaultOrderBy:"orderNumber"}),[c,h]=j.useState(),x=ne(),i=N(),u=N(),p=N(),[l,n]=j.useState(s),d=ae({name:"",status:"all",startDate:null,endDate:null});j.useEffect(()=>{n(s)},[s]);const b=ie(d.state.startDate,d.state.endDate),f=Xe({inputData:l,comparator:be(o.order,o.orderBy),filters:d.state,dateError:b}),D=Pe(f,o.page,o.rowsPerPage),y=!!d.state.name||d.state.status!=="all"||!!d.state.startDate&&!!d.state.endDate,W=!f.length&&y||!f.length,_=j.useCallback(r=>{F(r);const m=l.filter(I=>I.id!==r);n(m),o.onUpdatePageDeleteRow(D.length)},[D.length,o,l]),S=U(),A=r=>{fe(r)},{mutate:F}=K({mutationFn:r=>{q.delete(M.payments.delete+r)},onSuccess:()=>{z.success("Delete success!"),p.onFalse()},onSettled:async()=>{await S.invalidateQueries({queryKey:["payments"]}),p.onFalse()},onError:r=>{console.log(r)}}),E=j.useCallback(r=>{h(r),i.onToggle()},[x]),R=j.useCallback(r=>{h(r),u.onToggle()},[D.length,o,l]),{mutate:k}=K({mutationFn:({id:r,payload:m})=>q.patch(M.payments.edit+r,m),onSuccess:async()=>{z.success("New Payment Has Been Modified!")},onSettled:async()=>{await S.invalidateQueries({queryKey:["payments"]}),await S.invalidateQueries({queryKey:["orders"]}),u.onFalse()},onError:r=>{console.log(r)}});return e.jsxs(e.Fragment,{children:[e.jsx(le,{maxWidth:"xl",children:e.jsxs(g,{spacing:3,children:[e.jsx(ge,{links:[{name:"Dashboard",href:H.dashboard.root},{name:"Payments",href:H.dashboard.payments.root}]}),e.jsx(L,{permission:O.PAYMENT_LIST,children:e.jsxs(de,{children:[e.jsx(ze,{filters:d,onResetPage:o.onResetPage,dateError:b}),y&&e.jsx(Ue,{filters:d,totalResults:f.length,onResetPage:o.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(a,{sx:{position:"relative"},children:[e.jsx(Fe,{dense:o.dense,numSelected:o.selected.length,rowCount:f.length}),e.jsx(ce,{sx:{minHeight:444},children:e.jsxs(ye,{size:o.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Se,{order:o.order,orderBy:o.orderBy,headLabel:Je,rowCount:f.length}),e.jsxs(Ae,{children:[f.slice(o.page*o.rowsPerPage,o.page*o.rowsPerPage+o.rowsPerPage).map((r,m)=>e.jsx(Ve,{index:o.page*o.rowsPerPage+m+1,row:r,selected:o.selected.includes(r.id),onEditRow:()=>R(r),onDeleteRow:()=>_(r.id),onViewRow:()=>E(r),onViewFileRow:()=>{A(r.attachments)}},r.id)),e.jsx(De,{height:o.dense?56:76,emptyRows:Ce(o.page,o.rowsPerPage,f.length)}),e.jsx(Te,{notFound:W})]})]})})]}),e.jsx(Ee,{page:o.page,dense:o.dense,count:f.length,rowsPerPage:o.rowsPerPage,onPageChange:o.onChangePage,onChangeDense:o.onChangeDense,onRowsPerPageChange:o.onChangeRowsPerPage})]})})]})}),e.jsx(Ye,{payment:c,open:i.value,onClose:i.onFalse}),e.jsx(_e,{payment:c,open:u.value,onClose:u.onFalse,handler:k})]})};function Xe({inputData:s,comparator:o,filters:c,dateError:h}){const{status:x,name:i,startDate:u,endDate:p}=c,l=s.map((n,d)=>[n,d]);return l.sort((n,d)=>{const b=o(n[0],d[0]);return b!==0?b:n[1]-d[1]}),s=l.map(n=>n[0]),i&&(s=s.filter(n=>n.id.toString().toLowerCase().indexOf(i.toLowerCase())!==-1||n.customer.name.toLowerCase().indexOf(i.toLowerCase())!==-1||n.customer.email.toLowerCase().indexOf(i.toLowerCase())!==-1)),x!=="all"&&(s=s.filter(n=>n.status===x)),h||u&&p&&(s=s.filter(n=>xe(n.createdAt,u,p))),s}const Ze={title:`Payments | Dashboard - ${me.site.name}`};function lo(){const s=pe({queryKey:["payments"],queryFn:async()=>{const{data:o}=await q.get(M.payments.list);return o}});return s.isPending||s.isLoading?e.jsx(he,{}):s.isError?e.jsx(je,{route:H.dashboard.payments.root}):e.jsxs(e.Fragment,{children:[e.jsx(ue,{children:e.jsxs("title",{children:[" ",Ze.title]})}),e.jsx($e,{payments:s.data})]})}export{lo as default};
