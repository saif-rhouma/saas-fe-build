import{i as L,aP as Z,j as e,d0 as V,l as ee,I as D,db as se,aR as oe,aS as v,e3 as N,e as Q,r as j,dn as z,dp as q,dm as M,aW as te,am as y,S as g,B as d,T as r,g as re,de as ne,ec as ae,dP as ie,p as H,cY as le,dd as de,ed as ce,dq as Y,dT as xe,H as me,C as he}from"./index-BRWSQhLj.js";import{u as pe,E as ue}from"./error-block-CQJDxd_0.js";import{u as K}from"./useMutation-DFBepesY.js";import{d as je}from"./download-file-BonZ_sS1.js";import{C as fe}from"./custom-breadcrumbs-Ch5Xqwj9.js";import{P as O}from"./permission-access-controller-B4htbbzP.js";import{g as ge,r as be,e as ye}from"./utils-MBUcMVfY.js";import{u as Pe}from"./use-table-hjPNSI30.js";import{T as Ce}from"./table-no-data-DXoUwl5T.js";import{T as ve}from"./table-empty-rows-BLHRux3Z.js";import{T as Te,a as De,b as we,c as Se}from"./table-head-custom-DHHtu9Bc.js";import{T as Fe}from"./table-selected-action-CvbzqnNF.js";import{T as Ae}from"./table-pagination-custom-D8jCmj8C.js";import{C as Ee}from"./confirm-dialog-ssSifk0I.js";import{T as C}from"./TableCell-CZnUlaW7.js";import{z as B,u as Re,t as ke,a as Ie,F as G}from"./form-provider-CQ0Db_3w.js";import{b as P}from"./format-number-CAgYIf5a.js";import{b as Be}from"./upload-avatar-BTYeNaMQ.js";import"./image-Bnsg2-8e.js";import"./editor-B2aXBOKa.js";import{s as Ge}from"./schema-helper-zSX3QRt9.js";import{a as U,b as J,D as $}from"./DialogContent-Zpn99X2f.js";import{D as X}from"./DialogTitle-BVmBC5Ly.js";import{L as Le}from"./LoadingButton-Dn3oyTkA.js";import{T as Ne}from"./TextField-DWlrw-uI.js";import{I as Oe}from"./InputAdornment-C5ShVcra.js";import{F as qe,a as Me,c as We}from"./filters-result-B7T3Rv-5.js";import{C as He}from"./Chip-s78qHh-l.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-CoWYP2h4.js";import"./Checkbox-BegWxMiW.js";import"./TablePagination-Dte63ISv.js";import"./KeyboardArrowRight-_gtD3CJF.js";import"./LastPage-CEy56j8W.js";import"./Select-c5WOnzoP.js";import"./Menu-Qgp7_360.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DLvueaBe.js";import"./FormControlLabel-DYRCPyH0.js";import"./FormHelperText-Cf_wmt5H.js";import"./Rating-CBSUqLfB.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-C5l2k4ei.js";import"./FormControl-B1BaavBO.js";import"./FormLabel-CbTb2PIY.js";import"./RadioGroup-DcyreO6-.js";import"./FormGroup-DD7duurx.js";import"./utils-qGzo-3WL.js";import"./index-BoO187_o.js";import"./countries-DSLisFCy.js";import"./Autocomplete-NSgekTkA.js";import"./country-select-CAd0vdKk.js";import"./InputLabel-BQ33YGuJ.js";import"./DatePicker-CFxLiWmV.js";import"./ListItem-D7PnxC_O.js";import"./MobileDateTimePicker-D24CD_1h.js";import"./Tabs-Cj2WHLSd.js";import"./index-Bmd1Rs2t.js";import"./CircularProgress-CAgk0uJC.js";const Ke=({row:s,index:o,selected:c,onViewRow:m,onViewFileRow:x,onDeleteRow:i,onEditRow:h})=>{var l,b;const u=L(),n=Z(),a=e.jsxs(Te,{hover:!0,selected:c,children:[e.jsx(C,{children:o||(s==null?void 0:s.id)}),e.jsx(C,{children:V(s==null?void 0:s.paymentDate)}),e.jsx(C,{children:(l=s==null?void 0:s.customer)==null?void 0:l.name}),e.jsx(C,{children:(b=s==null?void 0:s.order)==null?void 0:b.ref}),e.jsx(C,{children:s==null?void 0:s.amount}),e.jsx(C,{children:s==null?void 0:s.paymentType}),e.jsx(C,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(ee,{color:n.open?"inherit":"default",onClick:n.onOpen,children:e.jsx(D,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[a,e.jsx(se,{open:n.open,anchorEl:n.anchorEl,onClose:n.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(oe,{children:[(s==null?void 0:s.attachments)&&e.jsxs(v,{onClick:()=>{x(),n.onClose()},children:[e.jsx(D,{icon:"solar:cloud-download-bold"}),"Download"]}),e.jsx(O,{permission:N.VIEW_PAYMENT,children:e.jsxs(v,{onClick:()=>{m(),n.onClose()},children:[e.jsx(D,{icon:"solar:eye-bold"}),"View"]})}),e.jsx(O,{permission:N.EDIT_PAYMENT,children:e.jsxs(v,{onClick:()=>{h(),n.onClose()},children:[e.jsx(D,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(O,{permission:N.DELETE_PAYMENT,children:e.jsxs(v,{onClick:()=>{u.onTrue(),n.onClose()},sx:{color:"error.main"},children:[e.jsx(D,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Ee,{open:u.value,onClose:u.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(Q,{variant:"contained",color:"error",onClick:i,children:"Delete"})})]})},Ve=B.object({amount:B.number().min(1,{message:"Amount is required!"}),paymentDate:Ge.date({message:{required_error:"Start date is required!"}}),paymentType:B.string().min(1,{message:"Payment Type is required!"}),description:B.string()}),Qe=({payment:s,open:o,onClose:c,handler:m})=>{var F,A,E,R,k;const x=j.useRef(s);//! Upload Logic START
const[i,h]=j.useState(),u=j.useCallback(t=>{const p=t[0];h(()=>p)},[]),n=()=>{h(null)},a=z(),l={headers:{"content-type":"multipart/form-data"}},{mutate:b}=K({mutationFn:t=>q.post(M.files.upload,t,l),onSuccess:async({data:t})=>{const{name:p}=t;if(p){const{current:I}=x;I.attachments=p,await m({id:s.id,payload:I})}return t},onSettled:async()=>{h(null),x.current={},await a.invalidateQueries({queryKey:["payments-images"]})},onError:t=>{console.log(t)}});//! Upload Logic END
j.useEffect(()=>{s&&w(f)},[s]);const f=j.useMemo(()=>({paymentType:(s==null?void 0:s.paymentType)||"",paymentDate:(s==null?void 0:s.paymentDate)||te(),description:(s==null?void 0:s.description)||""}),[s]),T=Re({resolver:ke(Ve),defaultValues:f}),{reset:w,handleSubmit:W,formState:{isSubmitting:_}}=T,S=W(async t=>{try{if(i){x.current={...t};const p=new FormData;p.append("file",i),p.append("category","Payment"),await b(p)}else await m({id:s.id,payload:t});w()}catch(p){console.log(p)}});return e.jsxs(U,{fullWidth:!0,maxWidth:"lg",open:o,onClose:c,children:[e.jsx(X,{children:"Edit Payment"}),e.jsxs(Ie,{methods:T,onSubmit:S,children:[e.jsxs(J,{children:[e.jsx(y,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(F=s==null?void 0:s.customer)==null?void 0:F.name})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.ref})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Date:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:V(s==null?void 0:s.paymentDate)})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Type:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.paymentType})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P(s==null?void 0:s.amount)||"-"})]})]}),e.jsx(y,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((A=s==null?void 0:s.order)==null?void 0:A.totalOrderAmount)||"-"})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((E=s==null?void 0:s.order)==null?void 0:E.orderPaymentAmount)||"-"})]})]}),e.jsx(y,{}),e.jsx(g,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(r,{component:"span",variant:"subtitle1",children:P(((R=s==null?void 0:s.order)==null?void 0:R.totalOrderAmount)-((k=s==null?void 0:s.order)==null?void 0:k.orderPaymentAmount))})]})}),e.jsx(y,{}),e.jsxs(g,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(d,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(3, 1fr)"},children:[e.jsx(G.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1}}),e.jsxs(G.Select,{name:"paymentType",label:"Payment Type",children:[e.jsx(v,{value:"Cash",children:"Cash"}),e.jsx(v,{value:"Transfer",children:"Transfer"}),e.jsx(v,{value:"Card",children:"Card"})]}),e.jsx(G.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1}})]}),e.jsxs(d,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsxs(g,{spacing:1.5,children:[e.jsx(r,{variant:"subtitle2",children:"Notes / Remarks"}),e.jsx(G.Text,{name:"description",multiline:!0,rows:3})]}),e.jsxs(g,{spacing:1.5,children:[e.jsx(r,{variant:"subtitle2",children:"Attachments"}),e.jsx(Be,{value:i,onDrop:u,onDelete:n})]})]})]})]}),e.jsxs($,{children:[e.jsx(Le,{type:"submit",variant:"contained",children:s?"Save Changes":"Save"}),e.jsx(Q,{color:"inherit",variant:"outlined",onClick:c,children:"Cancel"})]})]})]})},_e=({payment:s,open:o,onClose:c})=>{var m,x,i,h,u,n;return e.jsxs(U,{fullWidth:!0,maxWidth:"md",open:o,onClose:c,children:[e.jsx(X,{children:"Payment Details"}),e.jsxs(J,{children:[e.jsx(y,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(m=s==null?void 0:s.customer)==null?void 0:m.name})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(x=s==null?void 0:s.order)==null?void 0:x.ref})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Date:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:V(s==null?void 0:s.paymentDate)})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Type:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.paymentType})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P(s==null?void 0:s.amount)||"-"})]})]}),e.jsx(y,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((i=s==null?void 0:s.order)==null?void 0:i.totalOrderAmount)||"-"})]}),e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:P((h=s==null?void 0:s.order)==null?void 0:h.orderPaymentAmount)||"-"})]})]}),e.jsx(y,{}),e.jsx(g,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(d,{display:"flex",children:[e.jsx(r,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(r,{component:"span",variant:"subtitle1",children:P(((u=s==null?void 0:s.order)==null?void 0:u.totalOrderAmount)-((n=s==null?void 0:s.order)==null?void 0:n.orderPaymentAmount))})]})}),e.jsx(y,{})]}),e.jsx($,{children:e.jsx(Q,{color:"inherit",variant:"outlined",onClick:c,children:"Close"})})]})};function Ye({filters:s,onResetPage:o,options:c}){const m=j.useCallback(x=>{o(),s.setState({name:x.target.value})},[s,o]);return e.jsx(g,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Ne,{sx:{width:420},value:s.state.name,onChange:m,placeholder:"Search Customer Name or Payment number...",InputProps:{startAdornment:e.jsx(Oe,{position:"start",children:e.jsx(D,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function ze({filters:s,totalResults:o,onResetPage:c,sx:m}){const x=j.useCallback(()=>{c(),s.setState({name:""})},[s,c]),i=j.useCallback(()=>{c(),s.onResetState()},[s,c]);return e.jsx(qe,{totalResults:o,onReset:i,sx:m,children:e.jsx(Me,{label:"Keyword:",isShow:!!s.state.name,children:e.jsx(He,{...We,label:s.state.name,onDelete:x})})})}const Ue=[{id:"paymentId",label:"#",width:88},{id:"date",label:"Date",width:220},{id:"customerName",label:"Customer Name",width:220},{id:"orderId",label:"Order No",width:120},{id:"paidAmount",label:"Paid Amount",width:120},{id:"paymentType",label:"Payment Type",width:120},{id:"",width:88}],Je=({payments:s})=>{const o=Pe({defaultOrderBy:"orderNumber"}),[c,m]=j.useState(),x=re(),i=L(),h=L(),u=L(),[n,a]=j.useState(s),l=ne({name:"",status:"all",startDate:null,endDate:null});j.useEffect(()=>{a(s)},[s]);const b=ae(l.state.startDate,l.state.endDate),f=$e({inputData:n,comparator:ge(o.order,o.orderBy),filters:l.state,dateError:b}),T=be(f,o.page,o.rowsPerPage),w=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate,W=!f.length&&w||!f.length,_=j.useCallback(t=>{A(t);const p=n.filter(I=>I.id!==t);a(p),o.onUpdatePageDeleteRow(T.length)},[T.length,o,n]),S=z(),F=t=>{je(t)},{mutate:A}=K({mutationFn:t=>{q.delete(M.payments.delete+t)},onSuccess:()=>{Y.success("Delete success!"),u.onFalse()},onSettled:async()=>{await S.invalidateQueries({queryKey:["payments"]}),u.onFalse()},onError:t=>{console.log(t)}}),E=j.useCallback(t=>{console.log("---> row",t),m(t),i.onToggle()},[x]),R=j.useCallback(t=>{m(t),h.onToggle()},[T.length,o,n]),{mutate:k}=K({mutationFn:({id:t,payload:p})=>q.patch(M.payments.edit+t,p),onSuccess:async()=>{Y.success("New Payment Has Been Modified!")},onSettled:async()=>{await S.invalidateQueries({queryKey:["payments"]}),await S.invalidateQueries({queryKey:["orders"]}),h.onFalse()},onError:t=>{console.log(t)}});return e.jsxs(e.Fragment,{children:[e.jsx(ie,{maxWidth:"xl",children:e.jsxs(g,{spacing:3,children:[e.jsx(fe,{links:[{name:"Dashboard",href:H.dashboard.root},{name:"Payments",href:H.dashboard.payments.root}]}),e.jsx(O,{permission:N.PAYMENT_LIST,children:e.jsxs(le,{children:[e.jsx(Ye,{filters:l,onResetPage:o.onResetPage,dateError:b}),w&&e.jsx(ze,{filters:l,totalResults:f.length,onResetPage:o.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(d,{sx:{position:"relative"},children:[e.jsx(Fe,{dense:o.dense,numSelected:o.selected.length,rowCount:f.length}),e.jsx(de,{sx:{minHeight:444},children:e.jsxs(De,{size:o.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(we,{order:o.order,orderBy:o.orderBy,headLabel:Ue,rowCount:f.length}),e.jsxs(Se,{children:[f.slice(o.page*o.rowsPerPage,o.page*o.rowsPerPage+o.rowsPerPage).map((t,p)=>e.jsx(Ke,{index:o.page*o.rowsPerPage+p+1,row:t,selected:o.selected.includes(t.id),onEditRow:()=>R(t),onDeleteRow:()=>_(t.id),onViewRow:()=>E(t),onViewFileRow:()=>{F(t.attachments)}},t.id)),e.jsx(ve,{height:o.dense?56:76,emptyRows:ye(o.page,o.rowsPerPage,f.length)}),e.jsx(Ce,{notFound:W})]})]})})]}),e.jsx(Ae,{page:o.page,dense:o.dense,count:f.length,rowsPerPage:o.rowsPerPage,onPageChange:o.onChangePage,onChangeDense:o.onChangeDense,onRowsPerPageChange:o.onChangeRowsPerPage})]})})]})}),e.jsx(_e,{payment:c,open:i.value,onClose:i.onFalse}),e.jsx(Qe,{payment:c,open:h.value,onClose:h.onFalse,handler:k})]})};function $e({inputData:s,comparator:o,filters:c,dateError:m}){const{status:x,name:i,startDate:h,endDate:u}=c,n=s.map((a,l)=>[a,l]);return n.sort((a,l)=>{const b=o(a[0],l[0]);return b!==0?b:a[1]-l[1]}),s=n.map(a=>a[0]),i&&(s=s.filter(a=>a.id.toString().toLowerCase().indexOf(i.toLowerCase())!==-1||a.customer.name.toLowerCase().indexOf(i.toLowerCase())!==-1||a.customer.email.toLowerCase().indexOf(i.toLowerCase())!==-1)),x!=="all"&&(s=s.filter(a=>a.status===x)),m||h&&u&&(s=s.filter(a=>ce(a.createdAt,h,u))),s}const Xe={title:`Payments | Dashboard - ${he.site.name}`};function io(){const s=pe({queryKey:["payments"],queryFn:async()=>{const{data:o}=await q.get(M.payments.list);return o}});return s.isPending||s.isLoading?e.jsx(xe,{}):s.isError?e.jsx(ue,{route:H.dashboard.payments.root}):e.jsxs(e.Fragment,{children:[e.jsx(me,{children:e.jsxs("title",{children:[" ",Xe.title]})}),e.jsx(Je,{payments:s.data})]})}export{io as default};
