import{w as R,bG as X,j as e,aL as H,y as Y,I as w,dz as Z,bI as ee,bJ as D,e as M,r as u,dL as V,dM as O,dK as L,bM as se,D as y,S as g,B as d,T as t,o as oe,dC as te,eq as re,eb as ne,p as N,aF as ae,dB as le,er as ie,dN as z,ef as de,H as ce,C as xe}from"./index-lMp9zap6.js";import{u as me,E as he}from"./error-block-DXWblvjp.js";import{u as K}from"./useMutation-B2tKEkiI.js";import{C as ue}from"./custom-breadcrumbs-CnRCretL.js";import{u as pe,g as je,r as fe,T as be,a as ge,e as ye}from"./table-selected-action-Cgn9qQis.js";import{T as Ce}from"./table-no-data-D5fgAy-Q.js";import{T as Pe,a as ve,b as De,c as Te}from"./table-head-custom-BwAPFtwe.js";import{T as we}from"./table-pagination-custom-sK7wTfre.js";import{C as Se}from"./confirm-dialog-CfE53hWp.js";import{T as v}from"./TableCell-ljoaX5oi.js";import{z as G,u as Fe,t as Re,a as Ae,F as I}from"./form-provider-Cj0Z9UsE.js";import{b as C}from"./format-number-BW6JEF9q.js";import{b as Ee}from"./upload-avatar-jEC4OtmL.js";import"./image-7Gw8g56m.js";import"./editor-56m6PEpo.js";import{s as ke}from"./schema-helper-DOzR5VHI.js";import{a as U,b as J,D as _}from"./DialogContent-B0tqVN_s.js";import{D as $}from"./DialogTitle-BCkrw5VA.js";import{L as Be}from"./LoadingButton-BI3VwLzw.js";import{T as Ge}from"./TextField-BEm0Gfgz.js";import{I as Ie}from"./InputAdornment-CznJJWQj.js";import{F as Oe,a as Le,c as qe}from"./filters-result-BnQFy5UF.js";import{C as Ne}from"./Chip-lc0vODcu.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-BfbryewD.js";import"./empty-content-v04S0NJf.js";import"./TablePagination-Dir7BHGy.js";import"./LastPage-B3GbPSnl.js";import"./Select-DE7_tqxX.js";import"./Menu-Di83eYAm.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-D6UR9yYG.js";import"./FormControlLabel-CSqTNcaw.js";import"./FormHelperText-CiWaMPMf.js";import"./Rating-D1epoFLf.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider--FnFNgPJ.js";import"./FormControl-BFlCQpvi.js";import"./FormLabel-CKyhTT_V.js";import"./RadioGroup-C-GnO1ca.js";import"./FormGroup-BE8TyzSB.js";import"./index-KeOEaw8h.js";import"./countries-DSLisFCy.js";import"./Autocomplete-DnVwYLlc.js";import"./country-select-DkXlsKd6.js";import"./InputLabel-D2FT-Pcv.js";import"./DatePicker-CRaT7_Tx.js";import"./ListItem-Eefms6HN.js";import"./MobileDateTimePicker-CghIhRUp.js";import"./index-DTyO1f1S.js";import"./CircularProgress-CX5vuYgb.js";const Ke=({row:s,selected:o,onViewRow:i,onDeleteRow:x,onEditRow:c})=>{var j,a;const l=R();R();const r=X(),p=e.jsxs(Pe,{hover:!0,selected:o,children:[e.jsx(v,{children:s==null?void 0:s.id}),e.jsx(v,{children:H(s==null?void 0:s.paymentDate)}),e.jsx(v,{children:(j=s==null?void 0:s.customer)==null?void 0:j.name}),e.jsxs(v,{children:["ORD-",(a=s==null?void 0:s.order)==null?void 0:a.id]}),e.jsx(v,{children:s==null?void 0:s.amount}),e.jsx(v,{children:s==null?void 0:s.paymentType}),e.jsx(v,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(Y,{color:r.open?"inherit":"default",onClick:r.onOpen,children:e.jsx(w,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[p,e.jsx(Z,{open:r.open,anchorEl:r.anchorEl,onClose:r.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(ee,{children:[(s==null?void 0:s.attachments)&&e.jsxs(D,{onClick:()=>{i(),r.onClose()},children:[e.jsx(w,{icon:"solar:cloud-download-bold"}),"Download"]}),e.jsxs(D,{onClick:()=>{i(),r.onClose()},children:[e.jsx(w,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(D,{onClick:()=>{c(),r.onClose()},children:[e.jsx(w,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(D,{onClick:()=>{l.onTrue(),r.onClose()},sx:{color:"error.main"},children:[e.jsx(w,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})}),e.jsx(Se,{open:l.value,onClose:l.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(M,{variant:"contained",color:"error",onClick:x,children:"Delete"})})]})},He=G.object({amount:G.number().min(1,{message:"Amount is required!"}),paymentDate:ke.date({message:{required_error:"Start date is required!"}}),paymentType:G.string().min(1,{message:"Payment Type is required!"}),description:G.string()}),Me=({payment:s,open:o,onClose:i,handler:x})=>{var A,E,k,B,n;const c=u.useRef(s);//! Upload Logic START
const[l,r]=u.useState(),p=u.useCallback(h=>{const b=h[0];r(()=>b)},[]),j=()=>{r(null)},a=V(),m={headers:{"content-type":"multipart/form-data"}},{mutate:P}=K({mutationFn:h=>O.post(L.files.upload,h,m),onSuccess:async({data:h})=>{const{name:b}=h;if(b){const{current:W}=c;W.attachments=b,await x({id:s.id,payload:W})}return h},onSettled:async()=>{r(null),c.current={},await a.invalidateQueries({queryKey:["payments-images"]})},onError:h=>{console.log(h)}});//! Upload Logic END
u.useEffect(()=>{s&&S(f)},[s]);const f=u.useMemo(()=>({amount:(s==null?void 0:s.amount)||0,paymentType:(s==null?void 0:s.paymentType)||"",paymentDate:(s==null?void 0:s.paymentDate)||se(),description:(s==null?void 0:s.description)||""}),[s]),T=Fe({resolver:Re(He),defaultValues:f}),{reset:S,handleSubmit:q,formState:{isSubmitting:Q}}=T,F=q(async h=>{try{if(l){c.current={...h};const b=new FormData;b.append("file",l),b.append("category","Payment"),await P(b)}else await x({id:s.id,payload:h});S()}catch(b){console.log(b)}});return e.jsxs(U,{fullWidth:!0,maxWidth:"lg",open:o,onClose:i,children:[e.jsx($,{children:"Edit Payment"}),e.jsxs(Ae,{methods:T,onSubmit:F,children:[e.jsxs(J,{children:[e.jsx(y,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(A=s==null?void 0:s.customer)==null?void 0:A.name})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsxs(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:["ORD-",s==null?void 0:s.id]})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Date:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:H(s==null?void 0:s.paymentDate)})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Type:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.paymentType})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:C(s==null?void 0:s.amount)||"-"})]})]}),e.jsx(y,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:C((E=s==null?void 0:s.order)==null?void 0:E.totalOrderAmount)||"-"})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:C((k=s==null?void 0:s.order)==null?void 0:k.orderPaymentAmount)||"-"})]})]}),e.jsx(y,{}),e.jsx(g,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(t,{component:"span",variant:"subtitle1",children:C(((B=s==null?void 0:s.order)==null?void 0:B.totalOrderAmount)-((n=s==null?void 0:s.order)==null?void 0:n.orderPaymentAmount))})]})}),e.jsx(y,{}),e.jsxs(g,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(d,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(3, 1fr)"},children:[e.jsx(I.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1}}),e.jsxs(I.Select,{name:"paymentType",label:"Payment Type",children:[e.jsx(D,{value:"Cash",children:"Cash"}),e.jsx(D,{value:"Transfer",children:"Transfer"}),e.jsx(D,{value:"Card",children:"Card"})]}),e.jsx(I.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1}})]}),e.jsxs(d,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsxs(g,{spacing:1.5,children:[e.jsx(t,{variant:"subtitle2",children:"Notes / Remarks"}),e.jsx(I.Text,{name:"description",multiline:!0,rows:3})]}),e.jsxs(g,{spacing:1.5,children:[e.jsx(t,{variant:"subtitle2",children:"Attachments"}),e.jsx(Ee,{value:l,onDrop:p,onDelete:j})]})]})]})]}),e.jsxs(_,{children:[e.jsx(Be,{type:"submit",variant:"contained",children:s?"Save Changes":"Save"}),e.jsx(M,{color:"inherit",variant:"outlined",onClick:i,children:"Cancel"})]})]})]})},Qe=({payment:s,open:o,onClose:i})=>{var x,c,l,r,p;return e.jsxs(U,{fullWidth:!0,maxWidth:"md",open:o,onClose:i,children:[e.jsx($,{children:"Payment Details"}),e.jsxs(J,{children:[e.jsx(y,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:(x=s==null?void 0:s.customer)==null?void 0:x.name})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsxs(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:["ORD-",s==null?void 0:s.id]})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Date:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:H(s==null?void 0:s.paymentDate)})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Type:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s==null?void 0:s.paymentType})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Payment Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:C(s==null?void 0:s.amount)||"-"})]})]}),e.jsx(y,{}),e.jsxs(g,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:C((c=s==null?void 0:s.order)==null?void 0:c.totalOrderAmount)||"-"})]}),e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(t,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:C((l=s==null?void 0:s.order)==null?void 0:l.orderPaymentAmount)||"-"})]})]}),e.jsx(y,{}),e.jsx(g,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(d,{display:"flex",children:[e.jsx(t,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(t,{component:"span",variant:"subtitle1",children:C(((r=s==null?void 0:s.order)==null?void 0:r.totalOrderAmount)-((p=s==null?void 0:s.order)==null?void 0:p.orderPaymentAmount))})]})}),e.jsx(y,{})]}),e.jsx(_,{children:e.jsx(M,{color:"inherit",variant:"outlined",onClick:i,children:"Close"})})]})};function We({filters:s,onResetPage:o,options:i}){const x=u.useCallback(c=>{o(),s.setState({name:c.target.value})},[s,o]);return e.jsx(g,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Ge,{sx:{width:420},value:s.state.name,onChange:x,placeholder:"Search Customer Name or Payment number...",InputProps:{startAdornment:e.jsx(Ie,{position:"start",children:e.jsx(w,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function ze({filters:s,totalResults:o,onResetPage:i,sx:x}){const c=u.useCallback(()=>{i(),s.setState({name:""})},[s,i]),l=u.useCallback(()=>{i(),s.onResetState()},[s,i]);return e.jsx(Oe,{totalResults:o,onReset:l,sx:x,children:e.jsx(Le,{label:"Keyword:",isShow:!!s.state.name,children:e.jsx(Ne,{...qe,label:s.state.name,onDelete:c})})})}const Ve=[{id:"paymentId",label:"#",width:88},{id:"date",label:"Date",width:220},{id:"customerName",label:"Customer Name",width:220},{id:"orderId",label:"Order No",width:120},{id:"paidAmount",label:"Paid Amount",width:120},{id:"paymentType",label:"Payment Type",width:120},{id:"",width:88}],Ue=({payments:s})=>{const o=pe({defaultOrderBy:"orderNumber"}),[i,x]=u.useState(),c=oe(),l=R(),r=R(),p=R(),[j,a]=u.useState(s),m=te({name:"",status:"all",startDate:null,endDate:null});u.useEffect(()=>{a(s)},[s]);const P=re(m.state.startDate,m.state.endDate),f=Je({inputData:j,comparator:je(o.order,o.orderBy),filters:m.state,dateError:P}),T=fe(f,o.page,o.rowsPerPage),S=!!m.state.name||m.state.status!=="all"||!!m.state.startDate&&!!m.state.endDate,q=!f.length&&S||!f.length,Q=u.useCallback(n=>{A(n);const h=j.filter(b=>b.id!==n);a(h),o.onUpdatePageDeleteRow(T.length)},[T.length,o,j]),F=V(),{mutate:A}=K({mutationFn:n=>{O.delete(L.payments.delete+n)},onSuccess:()=>{z.success("Delete success!"),p.onFalse()},onSettled:async()=>{await F.invalidateQueries({queryKey:["payments"]}),p.onFalse()},onError:n=>{console.log(n)}}),E=u.useCallback(n=>{x(n),l.onToggle()},[c]),k=u.useCallback(n=>{x(n),r.onToggle()},[T.length,o,j]),{mutate:B}=K({mutationFn:({id:n,payload:h})=>O.patch(L.payments.edit+n,h),onSuccess:async()=>{z.success("New Payment Has Been Modified!")},onSettled:async()=>{await F.invalidateQueries({queryKey:["payments"]}),await F.invalidateQueries({queryKey:["orders"]}),r.onFalse()},onError:n=>{console.log(n)}});return e.jsxs(e.Fragment,{children:[e.jsx(ne,{maxWidth:"xl",children:e.jsxs(g,{spacing:3,children:[e.jsx(ue,{links:[{name:"Dashboard",href:N.dashboard.root},{name:"Payments",href:N.dashboard.payments.root}]}),e.jsxs(ae,{children:[e.jsx(We,{filters:m,onResetPage:o.onResetPage,dateError:P}),S&&e.jsx(ze,{filters:m,totalResults:f.length,onResetPage:o.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(d,{sx:{position:"relative"},children:[e.jsx(be,{dense:o.dense,numSelected:o.selected.length,rowCount:f.length}),e.jsx(le,{sx:{minHeight:444},children:e.jsxs(ve,{size:o.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(De,{order:o.order,orderBy:o.orderBy,headLabel:Ve,rowCount:f.length}),e.jsxs(Te,{children:[f.slice(o.page*o.rowsPerPage,o.page*o.rowsPerPage+o.rowsPerPage).map(n=>e.jsx(Ke,{row:n,selected:o.selected.includes(n.id),onEditRow:()=>k(n),onDeleteRow:()=>Q(n.id),onViewRow:()=>E(n)},n.id)),e.jsx(ge,{height:o.dense?56:76,emptyRows:ye(o.page,o.rowsPerPage,f.length)}),e.jsx(Ce,{notFound:q})]})]})})]}),e.jsx(we,{page:o.page,dense:o.dense,count:f.length,rowsPerPage:o.rowsPerPage,onPageChange:o.onChangePage,onChangeDense:o.onChangeDense,onRowsPerPageChange:o.onChangeRowsPerPage})]})]})}),e.jsx(Qe,{payment:i,open:l.value,onClose:l.onFalse}),e.jsx(Me,{payment:i,open:r.value,onClose:r.onFalse,handler:B})]})};function Je({inputData:s,comparator:o,filters:i,dateError:x}){const{status:c,name:l,startDate:r,endDate:p}=i,j=s.map((a,m)=>[a,m]);return j.sort((a,m)=>{const P=o(a[0],m[0]);return P!==0?P:a[1]-m[1]}),s=j.map(a=>a[0]),l&&(s=s.filter(a=>a.id.toString().toLowerCase().indexOf(l.toLowerCase())!==-1||a.customer.name.toLowerCase().indexOf(l.toLowerCase())!==-1||a.customer.email.toLowerCase().indexOf(l.toLowerCase())!==-1)),c!=="all"&&(s=s.filter(a=>a.status===c)),x||r&&p&&(s=s.filter(a=>ie(a.createdAt,r,p))),s}const _e={title:`Payments | Dashboard - ${xe.site.name}`};function $s(){const s=me({queryKey:["payments"],queryFn:async()=>{const{data:o}=await O.get(L.payments.list);return o}});return s.isPending||s.isLoading?e.jsx(de,{}):s.isError?e.jsx(he,{route:N.dashboard.payments.root}):e.jsxs(e.Fragment,{children:[e.jsx(ce,{children:e.jsxs("title",{children:[" ",_e.title]})}),e.jsx(Ue,{payments:s.data})]})}export{$s as default};
