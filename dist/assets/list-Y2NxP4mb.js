import{o as v,bO as V,j as e,aJ as Y,w as J,I as j,dw as $,bQ as X,bR as L,em as I,e as K,r as p,dI as G,dJ as w,dH as y,bU as D,D as Z,S as k,B as M,T as ee,dy as z,dz as te,eo as se,e8 as oe,p as N,aD as ae,ep as ie,dK as q,ec as ne,H as re,C as le}from"./index-yGbCRgTb.js";import{u as de,E as ce}from"./error-block-DTJA4qog.js";import{u as R}from"./useMutation-By1q-eS7.js";import{d as me}from"./download-file-X-lFHTJ5.js";import{C as pe}from"./custom-breadcrumbs-BVoeLH7h.js";import{P as B}from"./permission-access-controller-Dm06QNPj.js";import{g as he,r as ue,T as xe,a as ge,e as fe}from"./table-selected-action-ouhBymae.js";import{u as je}from"./use-table-CKTXv-Z5.js";import{T as be}from"./table-no-data-CAqPvp_P.js";import{T as Ce,a as De,b as we,c as ye}from"./table-head-custom-Dmu61VxH.js";import{T as Te}from"./table-pagination-custom-D_SwmGih.js";import{C as Pe}from"./confirm-dialog-Ko2N1QmH.js";import{T as F}from"./TableCell-kQtrcvwO.js";import{z as H,u as Se,t as Fe,a as Ee,F as E}from"./form-provider-DYU4Aza6.js";import{b as ve}from"./upload-avatar-C2G_2g_c.js";import"./image-DcD9e3NU.js";import"./editor-DVBR6pSL.js";import{s as _}from"./schema-helper-vooul8SF.js";import{a as Re,b as Ie,D as ke}from"./DialogContent-DMTZhSCC.js";import{D as Be}from"./DialogTitle-Dtm0x3W5.js";import{L as Ae}from"./LoadingButton-DkWrtn4w.js";import{T as Le}from"./TextField-HI4be0gE.js";import{I as qe}from"./InputAdornment-CcIxSkvC.js";import{F as He,a as Me,c as Ne}from"./filters-result-IEq4pTDN.js";import{C as Ke}from"./Chip-Di1iaus5.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-CLReM-9f.js";import"./empty-content-DuekPASb.js";import"./TablePagination--mxkDLnZ.js";import"./KeyboardArrowRight-gA8WWooR.js";import"./LastPage-Bpf9jdMv.js";import"./Select-q90WBvXR.js";import"./Menu-BP741PyP.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DgymrakP.js";import"./FormControlLabel-C9PyVvR2.js";import"./FormHelperText-Dnev79N5.js";import"./Rating-3onsWGCC.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-CzzVUG04.js";import"./FormControl-BZpoYGsF.js";import"./FormLabel-CZqAmIUK.js";import"./RadioGroup-81h_beeC.js";import"./FormGroup-ClqLJ3mg.js";import"./index-R0SYIoas.js";import"./countries-DSLisFCy.js";import"./Autocomplete-C25PC4l8.js";import"./country-select-CxHEhT0K.js";import"./InputLabel-DnqBfGRt.js";import"./DatePicker-5fPzc3RP.js";import"./ListItem-CzWKnPSR.js";import"./MobileDateTimePicker-BclKweyT.js";import"./Tabs-CyyRymLB.js";import"./format-number-CldpmeB4.js";import"./index-CCt0SICN.js";import"./CircularProgress-B5oTQZ22.js";const Oe=({row:t,index:s,selected:n,onViewFileRow:r,onDeleteRow:c,onEditRow:l})=>{const m=v(),i=V(),x=e.jsxs(Ce,{hover:!0,selected:n,children:[e.jsx(F,{children:s||(t==null?void 0:t.id)}),e.jsx(F,{children:Y(t.reminderDate)}),e.jsx(F,{children:t.title}),e.jsx(F,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(J,{color:i.open?"inherit":"default",onClick:i.onOpen,children:e.jsx(j,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[x,e.jsx($,{open:i.open,anchorEl:i.anchorEl,onClose:i.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(X,{children:[(t==null?void 0:t.file)&&e.jsxs(L,{onClick:()=>{r(),i.onClose()},children:[e.jsx(j,{icon:"solar:cloud-download-bold"}),"Download"]}),e.jsx(B,{permission:I.ADD_REMINDER,children:e.jsxs(L,{onClick:()=>{l(),i.onClose()},children:[e.jsx(j,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(B,{permission:I.ADD_REMINDER,children:e.jsxs(L,{onClick:()=>{m.onTrue(),i.onClose()},sx:{color:"error.main"},children:[e.jsx(j,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Pe,{open:m.value,onClose:m.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(K,{variant:"contained",color:"error",onClick:c,children:"Delete"})})]})},Qe=H.object({title:H.string().min(1,{message:"title is required!"}),description:H.string().min(1,{message:"Description is required!"}),date:_.date({message:{required_error:"Date is required!"}}),time:_.date({message:{required_error:"Time is required!"}})}),U=({currentReminder:t,open:s,onClose:n,handler:r})=>{const c=p.useRef(t);//! Upload Logic START
const[l,m]=p.useState(),i=p.useCallback(d=>{const u=d[0];m(()=>u)},[]),x=()=>{m(null)},a=G(),h={headers:{"content-type":"multipart/form-data"}},{mutate:g}=R({mutationFn:d=>w.post(y.files.upload,d,h),onSuccess:async({data:d})=>{const{name:u}=d;if(u){const{current:o}=c;o.file=u,delete o.time,delete o.date,t?await r({id:t.id,payload:o}):await r(o)}return d},onSettled:async()=>{m(null),await a.invalidateQueries({queryKey:["reminders-images"]})},onError:d=>{console.log(d)}});//! Upload Logic END
const T=p.useMemo(()=>({title:(t==null?void 0:t.title)||"",description:(t==null?void 0:t.description)||"",date:(t==null?void 0:t.reminderDate)||D(),time:(t==null?void 0:t.reminderDate)||D()}),[t]);p.useEffect(()=>{t&&S(T)},[t]);const P=Se({resolver:Fe(Qe),defaultValues:T}),{reset:S,watch:O,setValue:Q,handleSubmit:b,formState:{isSubmitting:W}}=P,A=b(async d=>{try{const u=D(d.date).format("YYYY-MM-DD"),o=D(d.time).format("HH:mm:ss"),f=D(`${u}T${o}`).toISOString();if(d.reminderDate=f,l){c.current={...d};const C=new FormData;C.append("file",l),C.append("category","Reminder"),await g(C)}else t?await r({id:t.id,payload:d}):await r(d);n(),c.current={},S()}catch(u){console.error(u)}});return e.jsxs(Re,{fullWidth:!0,maxWidth:"md",open:s,onClose:n,children:[e.jsx(Be,{children:t?"Edit Reminder":"Add Reminder"}),e.jsxs(Ee,{methods:P,onSubmit:A,children:[e.jsxs(Ie,{children:[e.jsx(Z,{}),e.jsxs(k,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(M,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(E.DatePicker,{fullWidth:!0,label:"Date",name:"date",sx:{flexGrow:1}}),e.jsx(E.TimePicker,{label:"Time",name:"time",sx:{flexGrow:1}}),e.jsx(E.Text,{fullWidth:!0,name:"title",label:"Title",sx:{flexGrow:1}}),e.jsx(E.Text,{fullWidth:!0,name:"description",label:"Description",sx:{flexGrow:1}})]}),e.jsx(M,{children:e.jsxs(k,{spacing:1.5,children:[e.jsx(ee,{variant:"subtitle2",children:"Attachments"}),e.jsx(z,{sx:{maxHeight:360,p:2},children:e.jsx(ve,{value:l,onDrop:i,onDelete:x})})]})})]})]}),e.jsxs(ke,{children:[e.jsx(Ae,{type:"submit",variant:"contained",children:t?"Save Changes":"Save"}),e.jsx(K,{color:"inherit",variant:"outlined",onClick:n,children:"Cancel"})]})]})]})},We=({reminder:t,open:s,onClose:n,handler:r})=>e.jsx(U,{currentReminder:t,open:s,onClose:n,handler:r});function _e({filters:t,onResetPage:s,options:n}){const r=p.useCallback(c=>{s(),t.setState({name:c.target.value})},[t,s]);return e.jsx(k,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Le,{sx:{width:420},value:t.state.name,onChange:r,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(qe,{position:"start",children:e.jsx(j,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function Ge({filters:t,totalResults:s,onResetPage:n,sx:r}){const c=p.useCallback(()=>{n(),t.setState({name:""})},[t,n]),l=p.useCallback(()=>{n(),t.onResetState()},[t,n]);return e.jsx(He,{totalResults:s,onReset:l,sx:r,children:e.jsx(Me,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(Ke,{...Ne,label:t.state.name,onDelete:c})})})}const ze=[{id:"reminderId",label:"#",width:140},{id:"date",label:"Date",width:280},{id:"title",label:"Title"},{id:"",width:88}],Ue=({reminders:t})=>{const s=je({defaultOrderBy:"orderNumber"}),n=v(),r=v(),c=v(),[l,m]=p.useState(t),i=te({name:"",status:"all",startDate:null,endDate:null}),x=se(i.state.startDate,i.state.endDate);p.useEffect(()=>{m(t)},[t]);const a=Ve({inputData:l,comparator:he(s.order,s.orderBy),filters:i.state,dateError:x}),h=ue(a,s.page,s.rowsPerPage),g=!!i.state.name||i.state.status!=="all"||!!i.state.startDate&&!!i.state.endDate,T=!a.length&&g||!a.length,P=p.useCallback(o=>{A(o)},[h.length,s,l]),[S,O]=p.useState(),Q=p.useCallback(o=>{O(o),r.onToggle()},[h.length,s,l]),b=G(),W=o=>{me(o)},{mutate:A}=R({mutationFn:o=>w.delete(y.reminders.delete+o),onSuccess:async o=>{const f=l.filter(C=>C.id!==o);q.success("Delete success!"),m(f),s.onUpdatePageDeleteRow(h.length),c.onFalse()},onSettled:async()=>{await b.invalidateQueries({queryKey:["reminders"]}),c.onFalse()},onError:()=>{}}),{mutate:d}=R({mutationFn:o=>w.post(y.reminders.create,o),onSuccess:async()=>{q.success("New Reminder Has Been Created!")},onSettled:async()=>{await b.invalidateQueries({queryKey:["reminders"]}),n.onFalse()},onError:o=>{console.log(o)}}),{mutate:u}=R({mutationFn:({id:o,payload:f})=>w.patch(y.reminders.edit+o,f),onSuccess:async()=>{q.success("New Reminder Has Been Modified!")},onSettled:async()=>{await b.invalidateQueries({queryKey:["reminders"]}),r.onFalse()},onError:o=>{console.log(o)}});return e.jsxs(e.Fragment,{children:[e.jsx(oe,{maxWidth:"xl",children:e.jsxs(k,{spacing:3,children:[e.jsx(pe,{links:[{name:"Dashboard",href:N.dashboard.root},{name:"Reminders",href:N.dashboard.reminders.root}],action:e.jsx(B,{permission:I.ADD_REMINDER,children:e.jsx(K,{onClick:()=>n.onToggle(),variant:"contained",startIcon:e.jsx(j,{icon:"mingcute:add-line"}),children:"Add Reminder"})})}),e.jsx(B,{permission:I.REMINDER_LIST,children:e.jsxs(ae,{children:[e.jsx(_e,{filters:i,onResetPage:s.onResetPage,dateError:x}),g&&e.jsx(Ge,{filters:i,totalResults:a.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(M,{sx:{position:"relative"},children:[e.jsx(xe,{dense:s.dense,numSelected:s.selected.length,rowCount:a.length}),e.jsx(z,{sx:{minHeight:444},children:e.jsxs(De,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(we,{order:s.order,orderBy:s.orderBy,headLabel:ze,rowCount:a.length}),e.jsxs(ye,{children:[a.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((o,f)=>e.jsx(Oe,{row:o,index:s.page*s.rowsPerPage+f+1,selected:s.selected.includes(o.id),onEditRow:()=>Q(o),onDeleteRow:()=>P(o.id),onViewFileRow:()=>W(o.file)},o.id)),e.jsx(ge,{height:s.dense?56:76,emptyRows:fe(s.page,s.rowsPerPage,a.length)}),e.jsx(be,{notFound:T})]})]})})]}),e.jsx(Te,{page:s.page,dense:s.dense,count:a.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})}),e.jsx(U,{open:n.value,onClose:n.onFalse,handler:d}),e.jsx(We,{reminder:S,open:r.value,onClose:r.onFalse,handler:u})]})};function Ve({inputData:t,comparator:s,filters:n,dateError:r}){const{status:c,name:l,startDate:m,endDate:i}=n,x=t.map((a,h)=>[a,h]);return x.sort((a,h)=>{const g=s(a[0],h[0]);return g!==0?g:a[1]-h[1]}),t=x.map(a=>a[0]),l&&(t=t.filter(a=>a.id.toString().toLowerCase().indexOf(l.toLowerCase())!==-1||a.title.toLowerCase().indexOf(l.toLowerCase())!==-1||a.description.toLowerCase().indexOf(l.toLowerCase())!==-1)),c!=="all"&&(t=t.filter(a=>a.status===c)),r||m&&i&&(t=t.filter(a=>ie(a.createdAt,m,i))),t}const Ye={title:`Reminders list | Dashboard - ${le.site.name}`};function ts(){const t=de({queryKey:["reminders"],queryFn:async()=>{const{data:s}=await w.get(y.reminders.list);return s}});return t.isPending||t.isLoading?e.jsx(ne,{}):t.isError?e.jsx(ce,{route:N.dashboard.reminders.root}):e.jsxs(e.Fragment,{children:[e.jsx(re,{children:e.jsxs("title",{children:[" ",Ye.title]})}),e.jsx(Ue,{reminders:t.data})]})}export{ts as default};
