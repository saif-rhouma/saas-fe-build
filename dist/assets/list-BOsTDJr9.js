import{o as U,bO as Z,j as e,aJ as V,ds as G,w as ee,I as C,dw as te,bQ as se,bR as x,em as A,e as M,r as p,dI as _,dJ as b,dH as w,dK as J,ec as N,p as D,D as ae,S as B,B as q,T as oe,dy as $,l as ie,dz as re,eo as ne,e8 as le,G as f,aD as de,ep as ce,H as me,C as pe}from"./index-MIl7JRte.js";import{u as K,E as X}from"./error-block-ByqY2klf.js";import{u as H}from"./useMutation-D1t2nLjA.js";import{d as ue}from"./download-file-jx2HJ5AX.js";import{C as he}from"./custom-breadcrumbs-BPBIAp3F.js";import{P as O}from"./permission-access-controller-C7WX44v_.js";import{u as xe,g as ge,r as je,T as fe,a as ye,e as Ce}from"./table-selected-action-EpbVzkHp.js";import{T as be}from"./table-no-data-BeWJePlI.js";import{T as we,a as Te,b as Se,c as De}from"./table-head-custom-DFFJs59-.js";import{T as Pe}from"./table-pagination-custom-RIMYRp8Y.js";import{A as L}from"./app-widget-summary-RKp6szi4.js";import{C as ve}from"./confirm-dialog-fY0DmSZP.js";import{T as y}from"./TableCell-CUexyj7j.js";import{z as S,u as Fe,t as ke,a as Re,F}from"./form-provider-ClQZuquv.js";import{b as Ie}from"./upload-avatar-CXFdLHTf.js";import"./image-DTyoCSe4.js";import"./editor-DwhMiLHm.js";import{a as Ee,b as Le,D as Ae}from"./DialogContent-MWHQ5VhB.js";import{D as Be}from"./DialogTitle-G7RMJBLj.js";import{L as qe}from"./LoadingButton-51KhMkt4.js";import{T as Ke}from"./TextField-IqMcSK3A.js";import{I as He}from"./InputAdornment-CNG_kA5I.js";import{S as Oe}from"./Select-DVfqO7-t.js";import{F as Me,a as Ne,c as ze}from"./filters-result-OkLM9o1L.js";import{C as Qe}from"./Chip-JwX3biZx.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-CTo3jFS7.js";import"./empty-content-BeP_n_I6.js";import"./TablePagination-BmHifrUy.js";import"./KeyboardArrowRight-BxpBdu-g.js";import"./LastPage-pwolzQQZ.js";import"./InputBase-CEys6nDV.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-Dijue8fI.js";import"./format-number-BzcJdoz7.js";import"./use-chart-vP_uAh8h.js";import"./chart-legends-hF5AEtdn.js";import"./index-BwFSO260.js";import"./FormHelperText-DeESC_bm.js";import"./Rating-Mc2yJZtd.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-CdWGWfzg.js";import"./FormControl-BIKiU88P.js";import"./FormLabel-4maV1u2X.js";import"./RadioGroup-CcVm08vh.js";import"./FormGroup-BwNeKb70.js";import"./countries-DSLisFCy.js";import"./Autocomplete-C2g3c3nW.js";import"./country-select-Ck7C9Bj9.js";import"./InputLabel-Db4FFM5y.js";import"./DatePicker-BZi2O4La.js";import"./ListItem-DbyD7F5O.js";import"./MobileDateTimePicker-DdCoDJmO.js";import"./Tabs-Cg0yLyVo.js";import"./Menu-C288flBa.js";import"./index-HtHD65D2.js";import"./CircularProgress-DwFlPOsz.js";const We=({row:t,index:r,selected:s,onViewRow:c,onViewFileRow:m,onDeleteRow:d})=>{const l=U(),i=Z(),g=e.jsxs(we,{hover:!0,selected:s,children:[e.jsx(y,{children:r||t.id}),e.jsx(y,{children:V(t.createTime)}),e.jsx(y,{children:t.topic}),e.jsx(y,{children:e.jsx(G,{variant:"soft",color:t.priority==="Low"&&"success"||t.priority==="Medium"&&"warning"||t.priority==="Hight"&&"error"||"default",children:t.priority})}),e.jsx(y,{children:V(t.updateTime)}),e.jsx(y,{children:e.jsx(G,{variant:"soft",color:t.status==="Open"&&"info"||t.status==="Closed"&&"default"||"default",children:t.status})}),e.jsx(y,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(ee,{color:i.open?"inherit":"default",onClick:i.onOpen,children:e.jsx(C,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[g,e.jsx(te,{open:i.open,anchorEl:i.anchorEl,onClose:i.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(se,{children:[(t==null?void 0:t.file)&&e.jsxs(x,{onClick:()=>{m(),i.onClose()},children:[e.jsx(C,{icon:"solar:cloud-download-bold"}),"Download"]}),e.jsxs(x,{onClick:()=>{c(),i.onClose()},children:[e.jsx(C,{icon:"solar:eye-bold"}),"View"]}),e.jsx(O,{permission:A.DELETE_TICKET,children:e.jsxs(x,{onClick:()=>{l.onTrue(),i.onClose()},sx:{color:"error.main"},children:[e.jsx(C,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(ve,{open:l.value,onClose:l.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(M,{variant:"contained",color:"error",onClick:d,children:"Delete"})})]})},Ve=S.object({topic:S.string().min(1,{message:"Topic is required!"}),description:S.string().min(1,{message:"Description is required!"}),memberId:S.number().min(1,{message:"Member is required!"}),priority:S.string().min(1,{message:"Priority is required!"})}),Ge=({currentTicket:t,open:r,onClose:s})=>{//! Upload Logic START
const c=p.useRef(),[m,d]=p.useState([]),[l,i]=p.useState(),g=p.useCallback(a=>{const h=a[0];i(()=>h)},[]),o=()=>{i(null)},u=_(),j={headers:{"content-type":"multipart/form-data"}};//! Upload Logic END
const{mutate:k}=H({mutationFn:a=>b.post(w.files.upload,a,j),onSuccess:async({data:a})=>{const{name:h}=a;if(h){const{current:W}=c;W.file=h,await P(W)}return a},onSettled:async()=>{await u.invalidateQueries({queryKey:["tickets-images"]})},onError:a=>{console.log(a)}}),{mutate:P}=H({mutationFn:a=>b.post(w.tickets.create,a),onSuccess:async()=>{J.success("New Ticket Has Been Created!"),I()},onSettled:async()=>{await u.invalidateQueries({queryKey:["tickets"]}),c.current={},i(null),s()},onError:a=>{console.log(a)}}),R=p.useMemo(()=>({topic:(t==null?void 0:t.topic)||"",description:(t==null?void 0:t.description)||"",memberId:(t==null?void 0:t.memberId)||null,priority:(t==null?void 0:t.priority)||null}),[t]),T=Fe({resolver:ke(Ve),defaultValues:R}),{reset:I,watch:z,setValue:Q,handleSubmit:n,formState:{isSubmitting:v}}=T,Y=n(async a=>{try{if(l){c.current={...a};const h=new FormData;h.append("file",l),h.append("category","Ticket"),await k(h)}else await P(a)}catch(h){console.error(h)}}),E=K({queryKey:["members"],queryFn:async()=>{const{data:a}=await b.get(w.staff.list);return d(a),a}});return E.isPending||E.isLoading?e.jsx(N,{}):E.isError?e.jsx(X,{route:D.dashboard.staff.root}):e.jsxs(Ee,{fullWidth:!0,maxWidth:"md",open:r,onClose:s,children:[e.jsx(Be,{children:"Add New Ticket"}),e.jsxs(Re,{methods:T,onSubmit:Y,children:[e.jsxs(Le,{children:[e.jsx(ae,{}),e.jsxs(B,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(q,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(F.Text,{fullWidth:!0,label:"Enter Topic",name:"topic",sx:{flexGrow:1}}),e.jsx(F.Text,{fullWidth:!0,label:"Description",name:"description",sx:{flexGrow:1}}),e.jsxs(F.Select,{name:"priority",label:"Select a Priority",sx:{width:420,textTransform:"capitalize"},children:[e.jsx(x,{value:"Low",children:"Low"}),e.jsx(x,{value:"Medium",children:"Medium"}),e.jsx(x,{value:"Hight",children:"Hight"})]}),e.jsx(F.Select,{name:"memberId",label:"Select a Member",sx:{width:420,textTransform:"capitalize"},children:m.map(a=>e.jsx(x,{value:a.id,children:`${a==null?void 0:a.firstName} ${a==null?void 0:a.lastName}`},a.id))})]}),e.jsx(q,{children:e.jsxs(B,{spacing:1.5,children:[e.jsx(oe,{variant:"subtitle2",children:"Attachments"}),e.jsx($,{sx:{maxHeight:360,p:2},children:e.jsx(Ie,{value:l,onDrop:g,onDelete:o})})]})})]})]}),e.jsxs(Ae,{children:[e.jsx(qe,{type:"submit",variant:"contained",children:"Save"}),e.jsx(M,{color:"inherit",variant:"outlined",onClick:s,children:"Cancel"})]})]})]})};function Ue({filters:t,onResetPage:r}){const[s,c]=p.useState("all"),m=p.useCallback(l=>{r(),t.setState({name:l.target.value})},[t,r]),d=p.useCallback(l=>{r(),t.setState({status:l.target.value}),c(l.target.value)},[t,r]);return e.jsxs(B,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(Ke,{sx:{width:420},value:t.state.name,onChange:m,placeholder:"Search Here...",InputProps:{startAdornment:e.jsx(He,{position:"start",children:e.jsx(C,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsxs(Oe,{sx:{width:420,textTransform:"capitalize"},value:s,onChange:d,children:[e.jsx(x,{value:"all",children:"All Tickets"}),e.jsx(x,{value:"Open",children:"Open Tickets"}),e.jsx(x,{value:"Closed",children:"Close Tickets"})]})]})}function _e({filters:t,totalResults:r,onResetPage:s,sx:c}){const m=p.useCallback(()=>{s(),t.setState({name:""})},[t,s]),d=p.useCallback(()=>{s(),t.onResetState()},[t,s]);return e.jsx(Me,{totalResults:r,onReset:d,sx:c,children:e.jsx(Ne,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(Qe,{...ze,label:t.state.name,onDelete:m})})})}const Je=[{id:"ticketId",label:"#",width:140},{id:"date",label:"Date",width:280},{id:"topic",label:"Topic"},{id:"priority",label:"Priority"},{id:"lastUpdate",label:"Last Updated"},{id:"status",label:"Status"},{id:"",width:88}],$e=({tickets:t,analytics:r})=>{const s=xe({defaultOrderBy:"orderNumber"}),c=ie(),m=U(),[d,l]=p.useState(t),i=re({name:"",status:"all",startDate:null,endDate:null});p.useEffect(()=>{l(t)},[t]);const g=ne(i.state.startDate,i.state.endDate),o=Xe({inputData:d,comparator:ge(s.order,s.orderBy),filters:i.state,dateError:g}),u=je(o,s.page,s.rowsPerPage),j=!!i.state.name||i.state.status!=="all"||!!i.state.startDate&&!!i.state.endDate,k=!o.length&&j||!o.length,P=p.useCallback(n=>{z(n)},[u.length,s,d]),R=p.useCallback(n=>{c.push(D.dashboard.tickets.details(n))},[c]),T=_(),I=n=>{ue(n)},{mutate:z}=H({mutationFn:n=>b.delete(w.tickets.delete+n),onSuccess:async()=>{const n=d.filter(v=>v.id!==id);J.success("Delete success!"),l(n),s.onUpdatePageDeleteRow(u.length)},onSettled:async()=>{await T.invalidateQueries({queryKey:["tickets"]}),await T.invalidateQueries({queryKey:["tickets","analytics"]})},onError:n=>{}}),Q=()=>r.isPending||r.isLoading?e.jsx(f,{xs:12,md:12,children:e.jsx(N,{})}):e.jsxs(e.Fragment,{children:[e.jsx(f,{xs:12,md:4,children:e.jsx(L,{title:"All Tickets",total:t.length,chart:{}})}),e.jsx(f,{xs:12,md:4,children:e.jsx(L,{title:"Open Tickets",total:r.data.analytics.Open,chart:{}})}),e.jsx(f,{xs:12,md:4,children:e.jsx(L,{title:"Close Tickets",total:r.data.analytics.Closed,chart:{}})})]});return e.jsxs(e.Fragment,{children:[e.jsx(le,{maxWidth:"xl",children:e.jsxs(f,{container:!0,spacing:3,children:[e.jsx(f,{xs:12,md:12,children:e.jsx(he,{links:[{name:"Dashboard",href:D.dashboard.root},{name:"Ticket",href:D.dashboard.tickets.root}],action:e.jsx(O,{permission:A.ADD_TICKET,children:e.jsx(M,{onClick:()=>m.onToggle(),variant:"contained",startIcon:e.jsx(C,{icon:"mingcute:add-line"}),children:"Add New Ticket"})})})}),e.jsxs(O,{permission:A.TICKET_LIST,children:[Q(),e.jsx(f,{xs:12,md:12,children:e.jsxs(de,{children:[e.jsx(Ue,{filters:i,onResetPage:s.onResetPage,dateError:g}),j&&e.jsx(_e,{filters:i,totalResults:o.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(q,{sx:{position:"relative"},children:[e.jsx(fe,{dense:s.dense,numSelected:s.selected.length,rowCount:o.length}),e.jsx($,{sx:{minHeight:444},children:e.jsxs(Te,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Se,{order:s.order,orderBy:s.orderBy,headLabel:Je,rowCount:o.length}),e.jsxs(De,{children:[o.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((n,v)=>e.jsx(We,{row:n,index:s.page*s.rowsPerPage+v+1,selected:s.selected.includes(n.id),onSelectRow:()=>s.onSelectRow(n.id),onDeleteRow:()=>P(n.id),onViewRow:()=>R(n.id),onViewFileRow:()=>I(n.file)},n.id)),e.jsx(ye,{height:s.dense?56:76,emptyRows:Ce(s.page,s.rowsPerPage,o.length)}),e.jsx(be,{notFound:k})]})]})})]}),e.jsx(Pe,{page:s.page,dense:s.dense,count:o.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})]})}),e.jsx(Ge,{open:m.value,onClose:m.onFalse})]})};function Xe({inputData:t,comparator:r,filters:s,dateError:c}){const{status:m,name:d,startDate:l,endDate:i}=s,g=t.map((o,u)=>[o,u]);return g.sort((o,u)=>{const j=r(o[0],u[0]);return j!==0?j:o[1]-u[1]}),t=g.map(o=>o[0]),d&&(t=t.filter(o=>o.id.toString().indexOf(d.toLowerCase())!==-1||o.topic.toLowerCase().indexOf(d.toLowerCase())!==-1||o.priority.toLowerCase().indexOf(d.toLowerCase())!==-1)),m!=="all"&&(t=t.filter(o=>o.status===m)),c||l&&i&&(t=t.filter(o=>ce(o.createdAt,l,i))),t}const Ye={title:`Tickets list | Dashboard - ${pe.site.name}`};function is(){const t=K({queryKey:["tickets"],queryFn:async()=>{const{data:s}=await b.get(w.tickets.list);return s}}),r=K({queryKey:["tickets","analytics"],queryFn:async()=>{const{data:s}=await b.get(w.tickets.analytics);return s}});return r.isLoading||t.isLoading?e.jsx(N,{}):t.isError||r.isError?e.jsx(X,{route:D.dashboard.tickets.root}):e.jsxs(e.Fragment,{children:[e.jsx(me,{children:e.jsxs("title",{children:[" ",Ye.title]})}),e.jsx($e,{tickets:t.data,analytics:r})]})}export{is as default};
