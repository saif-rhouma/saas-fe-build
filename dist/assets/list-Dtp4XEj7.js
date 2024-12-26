import{i as G,aN as ie,j as s,d0 as se,l as le,I as A,db as de,aP as ce,aQ as D,e4 as q,e as z,r as j,dn as oe,dp as Q,dm as H,aU as xe,am as C,S as f,B as l,T as r,e8 as K,g as he,de as ue,e3 as me,dQ as je,p as W,cY as fe,dd as pe,ed as ge,dq as ee,dU as be,H as Pe,C as Ce}from"./index-dT1vCng0.js";import{u as Te,E as ve}from"./error-block-Da0Sg8G5.js";import{u as _}from"./useMutation-CWpoQFoP.js";import{d as De}from"./download-file-Ct15Qaxn.js";import{C as we}from"./custom-breadcrumbs-CRMkz5HZ.js";import{P as M}from"./permission-access-controller-C_EFxg3r.js";import{g as Ae,r as Se,e as Fe}from"./utils-MBUcMVfY.js";import{u as Ee}from"./use-table-C1OZslkl.js";import{T as Re}from"./table-no-data-C0HaQK5o.js";import{T as ke}from"./table-empty-rows-DD9BaYiP.js";import{T as Ie,a as Be,b as Le,c as Ne}from"./table-head-custom-D7pI5rlH.js";import{T as Oe}from"./table-selected-action-CL6--hhx.js";import{T as Ge}from"./table-pagination-custom-Dj-y0IAI.js";import{b as T}from"./format-number-BWe4ZO1J.js";import{C as qe}from"./confirm-dialog-DvxsERp_.js";import{T as v}from"./TableCell-BMxfZsCW.js";import{z as N,u as Me,t as Qe,a as He,F as O}from"./form-provider-lJ9M1TmS.js";import{U as Ke}from"./upload-box-ad-DroXKc4K.js";import"./image-COOiVMf9.js";import"./editor-BHWTYWlb.js";import{s as Ve}from"./schema-helper-CRkdcp3L.js";import{a as re,b as te,D as ne}from"./DialogContent-Dtys1wsH.js";import{D as ae}from"./DialogTitle-C0n_Nqay.js";import{L as We}from"./LoadingButton-BMq0F1fQ.js";import{T as _e}from"./TextField-XTE0wU-C.js";import{I as ze}from"./InputAdornment-Dl5rVrZF.js";import{F as Ue,a as Ye,c as Je}from"./filters-result-Pg_rdTqV.js";import{C as $e}from"./Chip-CVwc7X4-.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-B0--42iR.js";import"./Checkbox-BALPzs0u.js";import"./TablePagination-C1oTGlnz.js";import"./KeyboardArrowRight-DDU4Yld7.js";import"./LastPage-BrCbxUli.js";import"./Select-CkxH8YCA.js";import"./Menu-_pIQorIt.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-J8z2d7JP.js";import"./FormControlLabel-DqXVaC7r.js";import"./FormHelperText-DdVHoqO8.js";import"./Rating-CeJLvm_i.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-pdxX5wdw.js";import"./FormControl-DbqD7KBb.js";import"./FormLabel-D0giXt1x.js";import"./RadioGroup-Cquvp2lY.js";import"./FormGroup-BBfDXbM-.js";import"./utils-CF8aKOPG.js";import"./index-DT43InuW.js";import"./countries-DSLisFCy.js";import"./Autocomplete-3iL3_8Zy.js";import"./country-select-BTNmN6iG.js";import"./InputLabel-3tUFrxKx.js";import"./upload-avatar-aWcNkY5n.js";import"./DatePicker-DHryTCEu.js";import"./ListItem-DSSWjBOG.js";import"./MobileDateTimePicker-CSHu2owW.js";import"./Tabs-DaQ35HSw.js";import"./index-DbS0wgbX.js";import"./CircularProgress-DYm8O6Xn.js";const Xe=({row:e,index:o,selected:d,onViewRow:h,onViewFileRow:x,onDeleteRow:a,onEditRow:u})=>{var i,b;const m=G(),c=ie(),n=s.jsxs(Ie,{hover:!0,selected:d,children:[s.jsx(v,{children:o||(e==null?void 0:e.id)}),s.jsx(v,{children:se(e==null?void 0:e.paymentDate)}),s.jsx(v,{sx:{textTransform:"capitalize"},children:(i=e==null?void 0:e.customer)==null?void 0:i.name}),s.jsx(v,{children:(b=e==null?void 0:e.order)==null?void 0:b.ref}),s.jsx(v,{children:T(e==null?void 0:e.amount)}),s.jsx(v,{children:e==null?void 0:e.paymentType}),s.jsx(v,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:s.jsx(le,{color:c.open?"inherit":"default",onClick:c.onOpen,children:s.jsx(A,{icon:"eva:more-vertical-fill"})})})]});return s.jsxs(s.Fragment,{children:[n,s.jsx(de,{open:c.open,anchorEl:c.anchorEl,onClose:c.onClose,slotProps:{arrow:{placement:"right-top"}},children:s.jsxs(ce,{children:[(e==null?void 0:e.attachments)&&s.jsxs(D,{onClick:()=>{x(),c.onClose()},children:[s.jsx(A,{icon:"solar:cloud-download-bold"}),"Download"]}),s.jsx(M,{permission:q.VIEW_PAYMENT,children:s.jsxs(D,{onClick:()=>{h(),c.onClose()},children:[s.jsx(A,{icon:"solar:eye-bold"}),"View"]})}),s.jsx(M,{permission:q.EDIT_PAYMENT,children:s.jsxs(D,{onClick:()=>{u(),c.onClose()},children:[s.jsx(A,{icon:"solar:pen-bold"}),"Edit"]})}),s.jsx(M,{permission:q.DELETE_PAYMENT,children:s.jsxs(D,{onClick:()=>{m.onTrue(),c.onClose()},sx:{color:"error.main"},children:[s.jsx(A,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),s.jsx(qe,{open:m.value,onClose:m.onFalse,title:"Delete",content:"Are you sure want to delete?",action:s.jsx(z,{variant:"contained",color:"error",onClick:a,children:"Delete"})})]})},Ze=N.object({amount:N.number().min(1,{message:"Amount is required!"}),paymentDate:Ve.date({message:{required_error:"Start date is required!"}}),paymentType:N.string().min(1,{message:"Payment Type is required!"}),notes:N.string().optional()}),ye=({payment:e,open:o,onClose:d,handler:h})=>{var R,k,I,B,L,t,w,Y,J,$,X,Z;const x=j.useRef(e);//! Upload Logic START
const[a,u]=j.useState(),m=j.useCallback(g=>{const P=g[0];u(()=>P)},[]),c=()=>{u(null)},n=oe(),i={headers:{"content-type":"multipart/form-data"}},{mutate:b}=_({mutationFn:g=>Q.post(H.files.upload,g,i),onSuccess:async({data:g})=>{const{name:P}=g;if(P){const{current:y}=x;y.attachments=P,await h({id:e.id,payload:y})}return g},onSettled:async()=>{u(null),x.current={},await n.invalidateQueries({queryKey:["payments-images"]})},onError:g=>{console.log(g)}});//! Upload Logic END
j.useEffect(()=>{e&&F(p)},[e]);const p=j.useMemo(()=>({amount:e==null?void 0:e.amount,paymentType:(e==null?void 0:e.paymentType)||"",paymentDate:(e==null?void 0:e.paymentDate)||xe(),notes:(e==null?void 0:e.notes)||""}),[e]),S=Me({resolver:Qe(Ze),defaultValues:p}),{reset:F,handleSubmit:V,formState:{isSubmitting:U}}=S,E=V(async g=>{try{if(a){x.current={...g};const P=new FormData;P.append("file",a),P.append("category","Payment"),await b(P)}else await h({id:e.id,payload:g});F()}catch(P){console.log(P)}});return s.jsxs(re,{fullWidth:!0,maxWidth:"lg",open:o,onClose:d,children:[s.jsx(ae,{children:"Edit Payment"}),s.jsxs(He,{methods:S,onSubmit:E,children:[s.jsxs(te,{children:[s.jsx(C,{}),s.jsxs(f,{spacing:1,sx:{pt:1,pb:1},children:[s.jsxs(l,{display:"flex",children:[s.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),s.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary",textTransform:"capitalize"},children:(R=e==null?void 0:e.customer)==null?void 0:R.name})]}),s.jsxs(l,{display:"flex",children:[s.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),s.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(k=e==null?void 0:e.order)==null?void 0:k.ref})]})]}),s.jsx(C,{}),s.jsxs(f,{spacing:1,sx:{pt:1,pb:1},children:[s.jsxs(l,{display:"flex",children:[s.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),s.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:T(K(((I=e==null?void 0:e.order)==null?void 0:I.totalOrderAmount)-((B=e==null?void 0:e.order)==null?void 0:B.totalOrderAmount)*(((L=e==null?void 0:e.order)==null?void 0:L.discount)/100),(t=e==null?void 0:e.order)==null?void 0:t.snapshotTaxPercentage))||"-"})]}),s.jsxs(l,{display:"flex",children:[s.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),s.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:T((w=e==null?void 0:e.order)==null?void 0:w.orderPaymentAmount)||"-"})]})]}),s.jsx(C,{}),s.jsx(f,{spacing:1,sx:{pt:2,pb:2},children:s.jsxs(l,{display:"flex",children:[s.jsx(r,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),s.jsx(r,{component:"span",variant:"subtitle1",children:T(Math.abs(Math.round(K(((Y=e==null?void 0:e.order)==null?void 0:Y.totalOrderAmount)-((J=e==null?void 0:e.order)==null?void 0:J.totalOrderAmount)*((($=e==null?void 0:e.order)==null?void 0:$.discount)/100),(X=e==null?void 0:e.order)==null?void 0:X.snapshotTaxPercentage)-((Z=e==null?void 0:e.order)==null?void 0:Z.orderPaymentAmount))))||"-"})]})}),s.jsx(C,{}),(e==null?void 0:e.isChanged)&&s.jsxs(s.Fragment,{children:[s.jsx(f,{spacing:1,sx:{pt:2,pb:2},children:s.jsxs(l,{display:"flex",children:[s.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment amount before change:"}),s.jsx(r,{component:"span",children:T(e==null?void 0:e.amountBeforeChange)||"-"})]})}),s.jsx(C,{})]}),s.jsxs(f,{spacing:2,sx:{pt:2,pb:1},children:[s.jsxs(l,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[s.jsx(O.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1},placeholder:"Amount",InputLabelProps:{shrink:!0}}),s.jsx(O.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1},InputLabelProps:{shrink:!0}})]}),s.jsxs(l,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[s.jsx(l,{children:s.jsxs(O.Select,{name:"paymentType",label:"Payment Type",children:[s.jsx(D,{value:"Cash",children:"Cash"}),s.jsx(D,{value:"Transfer",children:"Transfer"}),s.jsx(D,{value:"Card",children:"Card"})]})}),s.jsx(f,{spacing:1.5,flexDirection:"row",sx:{height:"56px"},children:s.jsx(Ke,{file:a,handleDelete:c,handleDropSingleFile:m})})]}),s.jsx(f,{spacing:1,children:s.jsx(O.Text,{label:"Notes",name:"notes",placeholder:"Notes / Remarks",InputLabelProps:{shrink:!0},multiline:!0,rows:2})})]})]}),s.jsxs(ne,{children:[s.jsx(We,{type:"submit",variant:"contained",children:e?"Save Changes":"Save"}),s.jsx(z,{color:"inherit",variant:"outlined",onClick:d,children:"Cancel"})]})]})]})},es=({payment:e,open:o,onClose:d})=>{var h,x,a,u,m;return s.jsxs(re,{fullWidth:!0,maxWidth:"md",open:o,onClose:d,children:[s.jsx(ae,{children:"Payment Details"}),s.jsxs(te,{children:[s.jsx(C,{}),s.jsxs(f,{spacing:1,sx:{pt:1,pb:1},children:[s.jsxs(l,{display:"flex",children:[s.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),s.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(h=e==null?void 0:e.customer)==null?void 0:h.name})]}),s.jsxs(l,{display:"flex",children:[s.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),s.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(x=e==null?void 0:e.order)==null?void 0:x.ref})]}),s.jsxs(l,{display:"flex",children:[s.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Date:"}),s.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:se(e==null?void 0:e.paymentDate)})]}),s.jsxs(l,{display:"flex",children:[s.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Type:"}),s.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:e==null?void 0:e.paymentType})]}),s.jsxs(l,{display:"flex",children:[s.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Amount:"}),s.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:T(e==null?void 0:e.amount)||"-"})]})]}),s.jsx(C,{}),s.jsxs(f,{spacing:1,sx:{pt:1,pb:1},children:[s.jsxs(l,{display:"flex",children:[s.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),s.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:T(K((e==null?void 0:e.order.totalOrderAmount)-(e==null?void 0:e.order.totalOrderAmount)*((e==null?void 0:e.order.discount)/100),(a=e==null?void 0:e.order)==null?void 0:a.snapshotTaxPercentage))||"-"})]}),s.jsxs(l,{display:"flex",children:[s.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),s.jsx(r,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:T((u=e==null?void 0:e.order)==null?void 0:u.orderPaymentAmount)||"-"})]})]}),s.jsx(C,{}),s.jsx(f,{spacing:1,sx:{pt:2,pb:2},children:s.jsxs(l,{display:"flex",children:[s.jsx(r,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),s.jsx(r,{component:"span",variant:"subtitle1",children:T(K((e==null?void 0:e.order.totalOrderAmount)-(e==null?void 0:e.order.totalOrderAmount)*((e==null?void 0:e.order.discount)/100),(m=e==null?void 0:e.order)==null?void 0:m.snapshotTaxPercentage)-(e==null?void 0:e.order.orderPaymentAmount))||"-"})]})}),s.jsx(C,{}),(e==null?void 0:e.notes)&&s.jsx(f,{spacing:1,sx:{pt:2,pb:2},children:s.jsxs(l,{display:"flex",flexDirection:"column",children:[s.jsx(r,{component:"span",variant:"subtitle1",children:"Notes:"}),s.jsx(r,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:e==null?void 0:e.notes})]})})]}),s.jsx(ne,{children:s.jsx(z,{color:"inherit",variant:"outlined",onClick:d,children:"Close"})})]})};function ss({filters:e,onResetPage:o,options:d}){const h=j.useCallback(x=>{o(),e.setState({name:x.target.value})},[e,o]);return s.jsx(f,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:s.jsx(_e,{sx:{width:420},value:e.state.name,onChange:h,placeholder:"Search Customer Name or Payment number...",InputProps:{startAdornment:s.jsx(ze,{position:"start",children:s.jsx(A,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function os({filters:e,totalResults:o,onResetPage:d,sx:h}){const x=j.useCallback(()=>{d(),e.setState({name:""})},[e,d]),a=j.useCallback(()=>{d(),e.onResetState()},[e,d]);return s.jsx(Ue,{totalResults:o,onReset:a,sx:h,children:s.jsx(Ye,{label:"Keyword:",isShow:!!e.state.name,children:s.jsx($e,{...Je,label:e.state.name,onDelete:x})})})}const rs=[{id:"paymentId",label:"#",width:88},{id:"date",label:"Date",width:220},{id:"customerName",label:"Customer Name",width:220},{id:"orderId",label:"Order No",width:120},{id:"paidAmount",label:"Paid Amount",width:120},{id:"paymentType",label:"Payment Type",width:120},{id:"",width:88}],ts=({payments:e})=>{const o=Ee({defaultOrderBy:"orderNumber"}),[d,h]=j.useState(),x=he(),a=G(),u=G(),m=G(),[c,n]=j.useState(e),i=ue({name:"",status:"all",startDate:null,endDate:null});j.useEffect(()=>{n(e)},[e]);const b=me(i.state.startDate,i.state.endDate),p=ns({inputData:c,comparator:Ae(o.order,o.orderBy),filters:i.state,dateError:b}),S=Se(p,o.page,o.rowsPerPage),F=!!i.state.name||i.state.status!=="all"||!!i.state.startDate&&!!i.state.endDate,V=!p.length&&F||!p.length,U=j.useCallback(t=>{k(t)},[S.length,o,c]),E=oe(),R=t=>{De(t)},{mutate:k}=_({mutationFn:t=>Q.delete(H.payments.delete+t),onSuccess:()=>{ee.success("Delete success!"),m.onFalse()},onSettled:async()=>{await E.invalidateQueries({queryKey:["payments"]}),m.onFalse()},onError:t=>{console.log(t)}}),I=j.useCallback(t=>{h(t),a.onToggle()},[x]),B=j.useCallback(t=>{h(t),u.onToggle()},[S.length,o,c]),{mutate:L}=_({mutationFn:({id:t,payload:w})=>Q.patch(H.payments.edit+t,w),onSuccess:async()=>{ee.success("New Payment Has Been Modified!")},onSettled:async()=>{await E.invalidateQueries({queryKey:["payments"]}),await E.invalidateQueries({queryKey:["orders"]}),u.onFalse()},onError:t=>{console.log(t)}});return s.jsxs(s.Fragment,{children:[s.jsx(je,{maxWidth:"xl",children:s.jsxs(f,{spacing:3,children:[s.jsx(we,{links:[{name:"Dashboard",href:W.dashboard.root},{name:"Payments",href:W.dashboard.payments.root}]}),s.jsx(M,{permission:q.PAYMENT_LIST,children:s.jsxs(fe,{children:[s.jsx(ss,{filters:i,onResetPage:o.onResetPage,dateError:b}),F&&s.jsx(os,{filters:i,totalResults:p.length,onResetPage:o.onResetPage,sx:{p:2.5,pt:0}}),s.jsxs(l,{sx:{position:"relative"},children:[s.jsx(Oe,{dense:o.dense,numSelected:o.selected.length,rowCount:p.length}),s.jsx(pe,{sx:{minHeight:444},children:s.jsxs(Be,{size:o.dense?"small":"medium",sx:{minWidth:960},children:[s.jsx(Le,{order:o.order,orderBy:o.orderBy,headLabel:rs,rowCount:p.length}),s.jsxs(Ne,{children:[p.slice(o.page*o.rowsPerPage,o.page*o.rowsPerPage+o.rowsPerPage).map((t,w)=>s.jsx(Xe,{index:o.page*o.rowsPerPage+w+1,row:t,selected:o.selected.includes(t.id),onEditRow:()=>B(t),onDeleteRow:()=>U(t.id),onViewRow:()=>I(t),onViewFileRow:()=>{R(t.attachments)}},t.id)),s.jsx(ke,{height:o.dense?56:76,emptyRows:Fe(o.page,o.rowsPerPage,p.length)}),s.jsx(Re,{notFound:V})]})]})})]}),s.jsx(Ge,{page:o.page,dense:o.dense,count:p.length,rowsPerPage:o.rowsPerPage,onPageChange:o.onChangePage,onChangeDense:o.onChangeDense,onRowsPerPageChange:o.onChangeRowsPerPage})]})})]})}),s.jsx(es,{payment:d,open:a.value,onClose:a.onFalse}),s.jsx(ye,{payment:d,open:u.value,onClose:u.onFalse,handler:L})]})};function ns({inputData:e,comparator:o,filters:d,dateError:h}){const{status:x,name:a,startDate:u,endDate:m}=d,c=e.map((n,i)=>[n,i]);return c.sort((n,i)=>{const b=o(n[0],i[0]);return b!==0?b:n[1]-i[1]}),e=c.map(n=>n[0]),a&&(e=e.filter(n=>n.id.toString().toLowerCase().indexOf(a.toLowerCase())!==-1||n.customer.name.toLowerCase().indexOf(a.toLowerCase())!==-1||n.customer.email.toLowerCase().indexOf(a.toLowerCase())!==-1)),x!=="all"&&(e=e.filter(n=>n.status===x)),h||u&&m&&(e=e.filter(n=>ge(n.createdAt,u,m))),e}const as={title:`Payments | Dashboard - ${Ce.site.name}`};function po(){const e=Te({queryKey:["payments"],queryFn:async()=>{const{data:o}=await Q.get(H.payments.list);return o}});return e.isPending||e.isLoading?s.jsx(be,{}):e.isError?s.jsx(ve,{route:W.dashboard.payments.root}):s.jsxs(s.Fragment,{children:[s.jsx(Pe,{children:s.jsxs("title",{children:[" ",as.title]})}),s.jsx(ts,{payments:e.data})]})}export{po as default};
