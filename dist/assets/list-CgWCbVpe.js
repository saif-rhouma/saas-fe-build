import{i as O,aP as ee,j as e,d0 as V,l as se,I as y,db as oe,aR as re,aS as T,e3 as L,e as Q,r as j,dn as U,dp as q,dm as M,aW as te,am as P,S as g,B as d,T as t,e8 as Y,g as ne,de as ae,e2 as ie,dP as le,p as H,cY as de,dd as ce,eh as xe,dq as z,dT as he,H as me,C as ue}from"./index-CRVB8F69.js";import{u as pe,E as je}from"./error-block-0lRJvl3b.js";import{u as K}from"./useMutation-Dv2OayGI.js";import{d as fe}from"./download-file-DeXtJPPx.js";import{C as ge}from"./custom-breadcrumbs-CBgeVjCX.js";import{P as N}from"./permission-access-controller-JLlhlfLg.js";import{g as be,r as Pe,e as Ce}from"./utils-MBUcMVfY.js";import{u as ve}from"./use-table-CgXGbbdg.js";import{T as Te}from"./table-no-data-BjqYjk_q.js";import{T as De}from"./table-empty-rows-CdRbocQm.js";import{T as ye,a as we,b as Se,c as Ae}from"./table-head-custom-CJzwho5G.js";import{T as Fe}from"./table-selected-action-CFYY2Q0A.js";import{T as Ee}from"./table-pagination-custom-CDd_FCi-.js";import{C as Re}from"./confirm-dialog-B4R_qd6R.js";import{T as v}from"./TableCell-DefBsglL.js";import{z as B,u as ke,t as Ie,a as Be,F as G}from"./form-provider-Cj5HnMmb.js";import{b as C}from"./format-number-BlEHznSm.js";import{b as Ge}from"./upload-avatar-DVEASGMD.js";import"./image-5vyLym5h.js";import"./editor-B6TerEHZ.js";import{s as Oe}from"./schema-helper-CkH2syPz.js";import{a as J,b as $,D as X}from"./DialogContent-DTWdpBHx.js";import{D as Z}from"./DialogTitle-zVJogJSi.js";import{L as Le}from"./LoadingButton-D-TxUmLb.js";import{T as Ne}from"./TextField-a9VrXvMJ.js";import{I as qe}from"./InputAdornment-6EHLKwyL.js";import{F as Me,a as We,c as He}from"./filters-result-Bw7RA2Fw.js";import{C as Ke}from"./Chip-C0F9v8Yk.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-C8ZIgpvp.js";import"./Checkbox-ge_l6EJ8.js";import"./TablePagination-Ir8mqBBY.js";import"./KeyboardArrowRight-Bdp-RYnm.js";import"./LastPage-DtHFBiqB.js";import"./Select-BWwgXsU9.js";import"./Menu-BM961z0Q.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DWgInsnL.js";import"./FormControlLabel-cTtCu-eQ.js";import"./FormHelperText-BjyTaFTe.js";import"./Rating-7neiHll4.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-qJX29ETW.js";import"./FormControl-CFmGE2-k.js";import"./FormLabel-OtvxlZPN.js";import"./RadioGroup-BfSQqxxW.js";import"./FormGroup-BTOkiH5K.js";import"./utils-CXZGrLpc.js";import"./index-xSFMErMk.js";import"./countries-DSLisFCy.js";import"./Autocomplete-CXoresUK.js";import"./country-select-BGXXJ_eo.js";import"./InputLabel-CixZ_02K.js";import"./DatePicker-CB0DQzBJ.js";import"./ListItem-Dj4qJ_SH.js";import"./MobileDateTimePicker-BqsYy-6i.js";import"./Tabs-C9gxXNdG.js";import"./index-DsQx8PFb.js";import"./CircularProgress-DEMC3_90.js";const Ve=({row:s,index:o,selected:c,onViewRow:h,onViewFileRow:x,onDeleteRow:a,onEditRow:m})=>{var l,b;const p=O(),i=ee(),n=e.jsxs(ye,{hover:!0,selected:c,children:[e.jsx(v,{children:o||(s==null?void 0:s.id)}),e.jsx(v,{children:V(s==null?void 0:s.paymentDate)}),e.jsx(v,{children:(l=s==null?void 0:s.customer)==null?void 0:l.name}),e.jsx(v,{children:(b=s==null?void 0:s.order)==null?void 0:b.ref}),e.jsx(v,{children:s==null?void 0:s.amount}),e.jsx(v,{children:s==null?void 0:s.paymentType}),e.jsx(v,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(se,{color:i.open?"inherit":"default",onClick:i.onOpen,children:e.jsx(y,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[n,e.jsx(oe,{open:i.open,anchorEl:i.anchorEl,onClose:i.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(re,{children:[(s==null?void 0:s.attachments)&&e.jsxs(T,{onClick:()=>{x(),i.onClose()},children:[e.jsx(y,{icon:"solar:cloud-download-bold"}),"Download"]}),e.jsx(N,{permission:L.VIEW_PAYMENT,children:e.jsxs(T,{onClick:()=>{h(),i.onClose()},children:[e.jsx(y,{icon:"solar:eye-bold"}),"View"]})}),e.jsx(N,{permission:L.EDIT_PAYMENT,children:e.jsxs(T,{onClick:()=>{m(),i.onClose()},children:[e.jsx(y,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(N,{permission:L.DELETE_PAYMENT,children:e.jsxs(T,{onClick:()=>{p.onTrue(),i.onClose()},sx:{color:"error.main"},children:[e.jsx(y,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Re,{open:p.value,onClose:p.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(Q,{variant:"contained",color:"error",onClick:a,children:"Delete"})})]})},Qe=B.object({amount:B.number().min(1,{message:"Amount is required!"}),paymentDate:Oe.date({message:{required_error:"Start date is required!"}}),paymentType:B.string().min(1,{message:"Payment Type is required!"}),description:B.string()}),_e=({payment:s,open:o,onClose:c,handler:h})=>{var A,F,E,R,k;const x=j.useRef(s);//! Upload Logic START
const[a,m]=j.useState(),p=j.useCallback(r=>{const u=r[0];m(()=>u)},[]),i=()=>{m(null)},n=U(),l={headers:{"content-type":"multipart/form-data"}},{mutate:b}=K({mutationFn:r=>q.post(M.files.upload,r,l),onSuccess:async({data:r})=>{const{name:u}=r;if(u){const{current:I}=x;I.attachments=u,await h({id:s.id,payload:I})}return r},onSettled:async()=>{m(null),x.current={},await n.invalidateQueries({queryKey:["payments-images"]})},onError:r=>{console.log(r)}});//! Upload Logic END
j.useEffect(()=>{s&&w(f)},[s]);const f=j.useMemo(()=>({paymentType:(s==null?void 0:s.paymentType)||"",paymentDate:(s==null?void 0:s.paymentDate)||te(),description:(s==null?void 0:s.description)||""}),[s]),D=ke({resolver:Ie(Qe),defaultValues:f}),{reset:w,handleSubmit:W,formState:{isSubmitting:_}}=D,S=W(async r=>{try{if(a){x.current={...r};const u=new FormData;u.append("file",a),u.append("category","Payment"),await b(u)}else await h({id:s.id,payload:r});w()}catch(u){console.log(u)}});return e.jsxs(J,{fullWidth:!0,maxWidth:"lg",open:o,onClose:c,children:[e.jsx(Z,{children:"Edit Payment"}),e.jsxs(Be,{methods:D,onSubmit:S,children:[e.jsxs($,{children:[e.jsx(P,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(A=s==null?void 0:s.customer)==null?void 0:A.name})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.ref})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Date:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:V(s==null?void 0:s.paymentDate)})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Type:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.paymentType})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:C(s==null?void 0:s.amount)||"-"})]})]}),e.jsx(P,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:C((F=s==null?void 0:s.order)==null?void 0:F.totalOrderAmount)||"-"})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:C((E=s==null?void 0:s.order)==null?void 0:E.orderPaymentAmount)||"-"})]})]}),e.jsx(P,{}),e.jsx(g,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(t,{component:"span",variant:"subtitle1",children:C(((R=s==null?void 0:s.order)==null?void 0:R.totalOrderAmount)-((k=s==null?void 0:s.order)==null?void 0:k.orderPaymentAmount))})]})}),e.jsx(P,{}),e.jsxs(g,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(d,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(3, 1fr)"},children:[e.jsx(G.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1}}),e.jsxs(G.Select,{name:"paymentType",label:"Payment Type",children:[e.jsx(T,{value:"Cash",children:"Cash"}),e.jsx(T,{value:"Transfer",children:"Transfer"}),e.jsx(T,{value:"Card",children:"Card"})]}),e.jsx(G.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1}})]}),e.jsxs(d,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsxs(g,{spacing:1.5,children:[e.jsx(t,{variant:"subtitle2",children:"Notes / Remarks"}),e.jsx(G.Text,{name:"description",multiline:!0,rows:3})]}),e.jsxs(g,{spacing:1.5,children:[e.jsx(t,{variant:"subtitle2",children:"Attachments"}),e.jsx(Ge,{value:a,onDrop:p,onDelete:i})]})]})]})]}),e.jsxs(X,{children:[e.jsx(Le,{type:"submit",variant:"contained",children:s?"Save Changes":"Save"}),e.jsx(Q,{color:"inherit",variant:"outlined",onClick:c,children:"Cancel"})]})]})]})},Ye=({payment:s,open:o,onClose:c})=>{var h,x,a,m,p;return e.jsxs(J,{fullWidth:!0,maxWidth:"md",open:o,onClose:c,children:[e.jsx(Z,{children:"Payment Details"}),e.jsxs($,{children:[e.jsx(P,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(h=s==null?void 0:s.customer)==null?void 0:h.name})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(x=s==null?void 0:s.order)==null?void 0:x.ref})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Date:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:V(s==null?void 0:s.paymentDate)})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Type:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.paymentType})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:C(s==null?void 0:s.amount)||"-"})]})]}),e.jsx(P,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:C(Y((s==null?void 0:s.order.totalOrderAmount)-(s==null?void 0:s.order.totalOrderAmount)*((s==null?void 0:s.order.discount)/100),(a=s==null?void 0:s.order)==null?void 0:a.snapshotTaxPercentage))||"-"})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:C((m=s==null?void 0:s.order)==null?void 0:m.orderPaymentAmount)||"-"})]})]}),e.jsx(P,{}),e.jsx(g,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(t,{component:"span",variant:"subtitle1",children:C(Y((s==null?void 0:s.order.totalOrderAmount)-(s==null?void 0:s.order.totalOrderAmount)*((s==null?void 0:s.order.discount)/100),(p=s==null?void 0:s.order)==null?void 0:p.snapshotTaxPercentage)-(s==null?void 0:s.order.orderPaymentAmount))||"-"})]})}),e.jsx(P,{})]}),e.jsx(X,{children:e.jsx(Q,{color:"inherit",variant:"outlined",onClick:c,children:"Close"})})]})};function ze({filters:s,onResetPage:o,options:c}){const h=j.useCallback(x=>{o(),s.setState({name:x.target.value})},[s,o]);return e.jsx(g,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Ne,{sx:{width:420},value:s.state.name,onChange:h,placeholder:"Search Customer Name or Payment number...",InputProps:{startAdornment:e.jsx(qe,{position:"start",children:e.jsx(y,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function Ue({filters:s,totalResults:o,onResetPage:c,sx:h}){const x=j.useCallback(()=>{c(),s.setState({name:""})},[s,c]),a=j.useCallback(()=>{c(),s.onResetState()},[s,c]);return e.jsx(Me,{totalResults:o,onReset:a,sx:h,children:e.jsx(We,{label:"Keyword:",isShow:!!s.state.name,children:e.jsx(Ke,{...He,label:s.state.name,onDelete:x})})})}const Je=[{id:"paymentId",label:"#",width:88},{id:"date",label:"Date",width:220},{id:"customerName",label:"Customer Name",width:220},{id:"orderId",label:"Order No",width:120},{id:"paidAmount",label:"Paid Amount",width:120},{id:"paymentType",label:"Payment Type",width:120},{id:"",width:88}],$e=({payments:s})=>{const o=ve({defaultOrderBy:"orderNumber"}),[c,h]=j.useState(),x=ne(),a=O(),m=O(),p=O(),[i,n]=j.useState(s),l=ae({name:"",status:"all",startDate:null,endDate:null});j.useEffect(()=>{n(s)},[s]);const b=ie(l.state.startDate,l.state.endDate),f=Xe({inputData:i,comparator:be(o.order,o.orderBy),filters:l.state,dateError:b}),D=Pe(f,o.page,o.rowsPerPage),w=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate,W=!f.length&&w||!f.length,_=j.useCallback(r=>{F(r);const u=i.filter(I=>I.id!==r);n(u),o.onUpdatePageDeleteRow(D.length)},[D.length,o,i]),S=U(),A=r=>{fe(r)},{mutate:F}=K({mutationFn:r=>{q.delete(M.payments.delete+r)},onSuccess:()=>{z.success("Delete success!"),p.onFalse()},onSettled:async()=>{await S.invalidateQueries({queryKey:["payments"]}),p.onFalse()},onError:r=>{console.log(r)}}),E=j.useCallback(r=>{h(r),a.onToggle()},[x]),R=j.useCallback(r=>{h(r),m.onToggle()},[D.length,o,i]),{mutate:k}=K({mutationFn:({id:r,payload:u})=>q.patch(M.payments.edit+r,u),onSuccess:async()=>{z.success("New Payment Has Been Modified!")},onSettled:async()=>{await S.invalidateQueries({queryKey:["payments"]}),await S.invalidateQueries({queryKey:["orders"]}),m.onFalse()},onError:r=>{console.log(r)}});return e.jsxs(e.Fragment,{children:[e.jsx(le,{maxWidth:"xl",children:e.jsxs(g,{spacing:3,children:[e.jsx(ge,{links:[{name:"Dashboard",href:H.dashboard.root},{name:"Payments",href:H.dashboard.payments.root}]}),e.jsx(N,{permission:L.PAYMENT_LIST,children:e.jsxs(de,{children:[e.jsx(ze,{filters:l,onResetPage:o.onResetPage,dateError:b}),w&&e.jsx(Ue,{filters:l,totalResults:f.length,onResetPage:o.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(d,{sx:{position:"relative"},children:[e.jsx(Fe,{dense:o.dense,numSelected:o.selected.length,rowCount:f.length}),e.jsx(ce,{sx:{minHeight:444},children:e.jsxs(we,{size:o.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Se,{order:o.order,orderBy:o.orderBy,headLabel:Je,rowCount:f.length}),e.jsxs(Ae,{children:[f.slice(o.page*o.rowsPerPage,o.page*o.rowsPerPage+o.rowsPerPage).map((r,u)=>e.jsx(Ve,{index:o.page*o.rowsPerPage+u+1,row:r,selected:o.selected.includes(r.id),onEditRow:()=>R(r),onDeleteRow:()=>_(r.id),onViewRow:()=>E(r),onViewFileRow:()=>{A(r.attachments)}},r.id)),e.jsx(De,{height:o.dense?56:76,emptyRows:Ce(o.page,o.rowsPerPage,f.length)}),e.jsx(Te,{notFound:W})]})]})})]}),e.jsx(Ee,{page:o.page,dense:o.dense,count:f.length,rowsPerPage:o.rowsPerPage,onPageChange:o.onChangePage,onChangeDense:o.onChangeDense,onRowsPerPageChange:o.onChangeRowsPerPage})]})})]})}),e.jsx(Ye,{payment:c,open:a.value,onClose:a.onFalse}),e.jsx(_e,{payment:c,open:m.value,onClose:m.onFalse,handler:k})]})};function Xe({inputData:s,comparator:o,filters:c,dateError:h}){const{status:x,name:a,startDate:m,endDate:p}=c,i=s.map((n,l)=>[n,l]);return i.sort((n,l)=>{const b=o(n[0],l[0]);return b!==0?b:n[1]-l[1]}),s=i.map(n=>n[0]),a&&(s=s.filter(n=>n.id.toString().toLowerCase().indexOf(a.toLowerCase())!==-1||n.customer.name.toLowerCase().indexOf(a.toLowerCase())!==-1||n.customer.email.toLowerCase().indexOf(a.toLowerCase())!==-1)),x!=="all"&&(s=s.filter(n=>n.status===x)),h||m&&p&&(s=s.filter(n=>xe(n.createdAt,m,p))),s}const Ze={title:`Payments | Dashboard - ${ue.site.name}`};function lo(){const s=pe({queryKey:["payments"],queryFn:async()=>{const{data:o}=await q.get(M.payments.list);return o}});return s.isPending||s.isLoading?e.jsx(he,{}):s.isError?e.jsx(je,{route:H.dashboard.payments.root}):e.jsxs(e.Fragment,{children:[e.jsx(me,{children:e.jsxs("title",{children:[" ",Ze.title]})}),e.jsx($e,{payments:s.data})]})}export{lo as default};
