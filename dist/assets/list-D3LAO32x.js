import{i as G,b6 as se,j as e,aH as U,d6 as V,l as ae,I as T,da as oe,b8 as ie,b9 as g,e2 as O,e as W,r as d,dm as _,dn as S,dl as b,dp as J,dT as Q,p as P,am as ne,S as H,B as K,T as re,dc as X,g as le,dd as de,e4 as ce,dP as pe,ay as y,aB as ue,e5 as me,H as he,C as xe}from"./index-CDcUgrfM.js";import{u as M,E as Y}from"./error-block-XWJxuTVo.js";import{u as $}from"./useMutation-BWrcWSYi.js";import{d as ge}from"./download-file-CqdSPTXW.js";import{C as je}from"./custom-breadcrumbs-BL_vTuJF.js";import{P as z}from"./permission-access-controller-B0kKncHG.js";import{g as fe,r as ye,e as Ce}from"./utils-MBUcMVfY.js";import{u as we}from"./use-table-DeUiAFAo.js";import{T as Te}from"./table-no-data-CiCQCRXO.js";import{T as Se}from"./table-empty-rows-sfVkS9z1.js";import{T as be,a as De,b as ve,c as Pe}from"./table-head-custom-29joC1Qk.js";import{T as ke}from"./table-selected-action-DFuq6e6C.js";import{T as Fe}from"./table-pagination-custom-C-tRYjZA.js";import{A as N}from"./app-widget-summary-BeAMPRyk.js";import{C as Ee}from"./confirm-dialog-BYewv79v.js";import{T as C}from"./TableCell-F7WbLTEO.js";import{z as w,u as Ie,t as Le,a as Re,F as v}from"./form-provider-DPEGnoLi.js";import{b as Ae}from"./upload-avatar-D77EIrlr.js";import"./image-C4WktV16.js";import"./editor-CGxeH7db.js";import{a as Be,b as qe,D as Ne}from"./DialogContent-B3AK0H-W.js";import{D as Oe}from"./DialogTitle-Dj_SBQFY.js";import{C as Z}from"./Chip-CVtkDWmm.js";import{L as He}from"./LoadingButton-D3qxiYFp.js";import{T as Ke}from"./TextField-BuUBnZDj.js";import{I as Me}from"./InputAdornment-C4RBZEHJ.js";import{S as $e}from"./Select-BZojGQgr.js";import{F as ze,a as We,c as Qe}from"./filters-result-CYig2nVw.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-DrRsvASf.js";import"./Checkbox-BxyuHg5r.js";import"./TablePagination-DXoKd7HH.js";import"./KeyboardArrowRight-BY3fczxh.js";import"./LastPage-DrCAI0el.js";import"./InputBase-jbxmQqqV.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-C9Nh_YCW.js";import"./format-number-K3MYeV6b.js";import"./use-chart-BW2Avf7-.js";import"./chart-legends-DydW_jvP.js";import"./index-DkkRrZbX.js";import"./FormHelperText-CpMJHbvL.js";import"./Rating-w3dgxeCA.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-Cc_JEzEp.js";import"./FormControl-C7WzToVA.js";import"./FormLabel-e37nWMJI.js";import"./RadioGroup-SuhSugdB.js";import"./FormGroup-D7ycBH1u.js";import"./countries-DSLisFCy.js";import"./Autocomplete-BXgXmYj0.js";import"./country-select-BMAkVgNz.js";import"./InputLabel-DFNFmoZn.js";import"./DatePicker-D6wu5-8l.js";import"./ListItem-D2_hmcct.js";import"./MobileDateTimePicker-BKtNADfB.js";import"./Tabs-0KFgPQsD.js";import"./Menu--HgoqF6K.js";import"./index-h55rDlR6.js";import"./CircularProgress-C37bchS4.js";const Ue=({row:t,index:r,selected:s,onViewRow:m,onViewFileRow:c,onDeleteRow:p})=>{const u=G(),i=se(),x=e.jsxs(be,{hover:!0,selected:s,children:[e.jsx(C,{children:r||t.id}),e.jsx(C,{children:U(t.createTime)}),e.jsx(C,{children:t.topic}),e.jsx(C,{children:e.jsx(V,{variant:"soft",color:t.priority==="Low"&&"success"||t.priority==="Medium"&&"warning"||t.priority==="Hight"&&"error"||"default",children:t.priority})}),e.jsx(C,{children:U(t.updateTime)}),e.jsx(C,{children:e.jsx(V,{variant:"soft",color:t.status==="Open"&&"info"||t.status==="Closed"&&"default"||"default",children:t.status})}),e.jsx(C,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(ae,{color:i.open?"inherit":"default",onClick:i.onOpen,children:e.jsx(T,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[x,e.jsx(oe,{open:i.open,anchorEl:i.anchorEl,onClose:i.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(ie,{children:[(t==null?void 0:t.file)&&e.jsxs(g,{onClick:()=>{c(),i.onClose()},children:[e.jsx(T,{icon:"solar:cloud-download-bold"}),"Download"]}),e.jsxs(g,{onClick:()=>{m(),i.onClose()},children:[e.jsx(T,{icon:"solar:eye-bold"}),"View"]}),e.jsx(z,{permission:O.DELETE_TICKET,children:e.jsxs(g,{onClick:()=>{u.onTrue(),i.onClose()},sx:{color:"error.main"},children:[e.jsx(T,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Ee,{open:u.value,onClose:u.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(W,{variant:"contained",color:"error",onClick:p,children:"Delete"})})]})},Ve=w.object({topic:w.string().min(1,{message:"Topic is required!"}),description:w.string().min(1,{message:"Description is required!"}),memberId:w.number().min(1,{message:"Member is required!"}),priority:w.string().min(1,{message:"Priority is required!"}),mentions:w.any()}),Ge=({currentTicket:t,open:r,onClose:s})=>{//! Upload Logic START
const m=d.useRef(),[c,p]=d.useState([]),[u,i]=d.useState([]),[x,o]=d.useState(),j=d.useCallback(a=>{const n=a[0];o(()=>n)},[]),f=()=>{o(null)},k=_(),I={headers:{"content-type":"multipart/form-data"}};//! Upload Logic END
const{mutate:L}=$({mutationFn:a=>S.post(b.files.upload,a,I),onSuccess:async({data:a})=>{const{name:n}=a;if(n){const{current:h}=m;h.file=n,await D(h)}return a},onSettled:async()=>{await k.invalidateQueries({queryKey:["tickets-images"]})},onError:a=>{console.log(a)}}),{mutate:D}=$({mutationFn:a=>S.post(b.tickets.create,a),onSuccess:async()=>{J.success("New Ticket Has Been Created!"),await k.invalidateQueries({queryKey:["tickets"]}),A()},onSettled:async()=>{m.current={},o(null),s()},onError:a=>{console.log(a)}}),R=d.useMemo(()=>({topic:(t==null?void 0:t.topic)||"",description:(t==null?void 0:t.description)||"",memberId:(t==null?void 0:t.memberId)||null,priority:(t==null?void 0:t.priority)||null,multiSelect:[]}),[t]),F=Ie({resolver:Le(Ve),defaultValues:R}),{reset:A,watch:l,setValue:E,handleSubmit:ee,formState:{isSubmitting:tt}}=F,te=ee(async a=>{try{if(x){m.current={...a};const n=new FormData;n.append("file",x),n.append("category","Ticket"),await L(n)}else await D(a)}catch(n){console.error(n)}}),B=M({queryKey:["members"],queryFn:async()=>{const{data:a}=await S.get(b.staff.list);return p(a),i(a),a}});return B.isPending||B.isLoading?e.jsx(Q,{}):B.isError?e.jsx(Y,{route:P.dashboard.staff.root}):e.jsxs(Be,{fullWidth:!0,maxWidth:"md",open:r,onClose:s,children:[e.jsx(Oe,{children:"Add New Ticket"}),e.jsxs(Re,{methods:F,onSubmit:te,children:[e.jsxs(qe,{children:[e.jsx(ne,{}),e.jsxs(H,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(K,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(v.Text,{fullWidth:!0,label:"Enter Topic",name:"topic",sx:{flexGrow:1}}),e.jsx(v.Text,{fullWidth:!0,label:"Description",name:"description",sx:{flexGrow:1}}),e.jsxs(v.Select,{name:"priority",label:"Select a Priority",sx:{width:420,textTransform:"capitalize"},children:[e.jsx(g,{value:"Low",children:"Low"}),e.jsx(g,{value:"Medium",children:"Medium"}),e.jsx(g,{value:"Hight",children:"Hight"})]}),e.jsx(v.Select,{name:"memberId",label:"Select a Member",sx:{width:420,textTransform:"capitalize"},onChange:a=>{const{value:n}=a.target;if(n){const h=[...c.filter(q=>q.id!==n)];i(h),E("memberId",n),E("mentions",[])}},children:c.map(a=>e.jsx(g,{value:a.id,children:`${a==null?void 0:a.firstName} ${(a==null?void 0:a.lastName)||""}`},a.id))}),e.jsx(v.Autocomplete,{name:"mentions",label:"Users",placeholder:"Add Users",multiple:!0,disableCloseOnSelect:!0,options:u.map(a=>a),getOptionLabel:a=>`${a==null?void 0:a.firstName} ${(a==null?void 0:a.lastName)||""}`,renderOption:(a,n)=>d.createElement("li",{...a,key:n.id},`${n==null?void 0:n.firstName} ${(n==null?void 0:n.lastName)||""}`),renderTags:(a,n)=>a.map((h,q)=>d.createElement(Z,{...n({index:q}),key:h.id,label:`${h==null?void 0:h.firstName} ${(h==null?void 0:h.lastName)||""}`,size:"small",color:"info",variant:"soft"}))})]}),e.jsx(K,{children:e.jsxs(H,{spacing:1.5,children:[e.jsx(re,{variant:"subtitle2",children:"Attachments"}),e.jsx(X,{sx:{maxHeight:360,p:2},children:e.jsx(Ae,{value:x,onDrop:j,onDelete:f})})]})})]})]}),e.jsxs(Ne,{children:[e.jsx(He,{type:"submit",variant:"contained",children:"Save"}),e.jsx(W,{color:"inherit",variant:"outlined",onClick:s,children:"Cancel"})]})]})]})};function _e({filters:t,onResetPage:r}){const[s,m]=d.useState("all"),c=d.useCallback(u=>{r(),t.setState({name:u.target.value})},[t,r]),p=d.useCallback(u=>{r(),t.setState({status:u.target.value}),m(u.target.value)},[t,r]);return e.jsxs(H,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(Ke,{sx:{width:420},value:t.state.name,onChange:c,placeholder:"Search Here...",InputProps:{startAdornment:e.jsx(Me,{position:"start",children:e.jsx(T,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsxs($e,{sx:{width:420,textTransform:"capitalize"},value:s,onChange:p,children:[e.jsx(g,{value:"all",children:"All Tickets"}),e.jsx(g,{value:"Open",children:"Open Tickets"}),e.jsx(g,{value:"Closed",children:"Close Tickets"})]})]})}function Je({filters:t,totalResults:r,onResetPage:s,sx:m}){const c=d.useCallback(()=>{s(),t.setState({name:""})},[t,s]),p=d.useCallback(()=>{s(),t.onResetState()},[t,s]);return e.jsx(ze,{totalResults:r,onReset:p,sx:m,children:e.jsx(We,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(Z,{...Qe,label:t.state.name,onDelete:c})})})}const Xe=[{id:"ticketId",label:"#",width:140},{id:"date",label:"Date",width:280},{id:"topic",label:"Topic"},{id:"priority",label:"Priority"},{id:"lastUpdate",label:"Last Updated"},{id:"status",label:"Status"},{id:"",width:88}],Ye=({tickets:t,analytics:r})=>{const s=we({defaultOrderBy:"orderNumber"}),m=le(),c=G(),[p,u]=d.useState(t),i=de({name:"",status:"all",startDate:null,endDate:null});d.useEffect(()=>{u(t)},[t]);const x=ce(i.state.startDate,i.state.endDate),o=Ze({inputData:p,comparator:fe(s.order,s.orderBy),filters:i.state,dateError:x}),j=ye(o,s.page,s.rowsPerPage),f=!!i.state.name||i.state.status!=="all"||!!i.state.startDate&&!!i.state.endDate,k=!o.length&&f||!o.length,I=d.useCallback(l=>{F(l)},[j.length,s,p]),L=d.useCallback(l=>{m.push(P.dashboard.tickets.details(l))},[m]),D=_(),R=l=>{ge(l)},{mutate:F}=$({mutationFn:l=>S.delete(b.tickets.delete+l),onSuccess:async()=>{J.success("Delete success!"),await D.invalidateQueries({queryKey:["tickets"]}),await D.invalidateQueries({queryKey:["tickets","analytics"]})},onSettled:async()=>{},onError:l=>{}}),A=()=>r.isPending||r.isLoading?e.jsx(y,{xs:12,md:12,children:e.jsx(Q,{})}):e.jsxs(e.Fragment,{children:[e.jsx(y,{xs:12,md:4,children:e.jsx(N,{title:"All Tickets",total:t.length,chart:{}})}),e.jsx(y,{xs:12,md:4,children:e.jsx(N,{title:"Open Tickets",total:r.data.analytics.Open,chart:{}})}),e.jsx(y,{xs:12,md:4,children:e.jsx(N,{title:"Close Tickets",total:r.data.analytics.Closed,chart:{}})})]});return e.jsxs(e.Fragment,{children:[e.jsx(pe,{maxWidth:"xl",children:e.jsxs(y,{container:!0,spacing:3,children:[e.jsx(y,{xs:12,md:12,children:e.jsx(je,{links:[{name:"Dashboard",href:P.dashboard.root},{name:"Ticket",href:P.dashboard.tickets.root}],action:e.jsx(z,{permission:O.ADD_TICKET,children:e.jsx(W,{onClick:()=>c.onToggle(),variant:"contained",startIcon:e.jsx(T,{icon:"mingcute:add-line"}),children:"Add New Ticket"})})})}),e.jsxs(z,{permission:O.TICKET_LIST,children:[A(),e.jsx(y,{xs:12,md:12,children:e.jsxs(ue,{children:[e.jsx(_e,{filters:i,onResetPage:s.onResetPage,dateError:x}),f&&e.jsx(Je,{filters:i,totalResults:o.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(K,{sx:{position:"relative"},children:[e.jsx(ke,{dense:s.dense,numSelected:s.selected.length,rowCount:o.length}),e.jsx(X,{sx:{minHeight:444},children:e.jsxs(De,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(ve,{order:s.order,orderBy:s.orderBy,headLabel:Xe,rowCount:o.length}),e.jsxs(Pe,{children:[o.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((l,E)=>e.jsx(Ue,{row:l,index:s.page*s.rowsPerPage+E+1,selected:s.selected.includes(l.id),onSelectRow:()=>s.onSelectRow(l.id),onDeleteRow:()=>I(l.id),onViewRow:()=>L(l.id),onViewFileRow:()=>R(l.file)},l.id)),e.jsx(Se,{height:s.dense?56:76,emptyRows:Ce(s.page,s.rowsPerPage,o.length)}),e.jsx(Te,{notFound:k})]})]})})]}),e.jsx(Fe,{page:s.page,dense:s.dense,count:o.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})]})}),e.jsx(Ge,{open:c.value,onClose:c.onFalse})]})};function Ze({inputData:t,comparator:r,filters:s,dateError:m}){const{status:c,name:p,startDate:u,endDate:i}=s,x=t.map((o,j)=>[o,j]);return x.sort((o,j)=>{const f=r(o[0],j[0]);return f!==0?f:o[1]-j[1]}),t=x.map(o=>o[0]),p&&(t=t.filter(o=>o.id.toString().indexOf(p.toLowerCase())!==-1||o.topic.toLowerCase().indexOf(p.toLowerCase())!==-1||o.priority.toLowerCase().indexOf(p.toLowerCase())!==-1)),c!=="all"&&(t=t.filter(o=>o.status===c)),m||u&&i&&(t=t.filter(o=>me(o.createdAt,u,i))),t}const et={title:`Tickets list | Dashboard - ${xe.site.name}`};function ps(){const t=M({queryKey:["tickets"],queryFn:async()=>{const{data:s}=await S.get(b.tickets.list);return s}}),r=M({queryKey:["tickets","analytics"],queryFn:async()=>{const{data:s}=await S.get(b.tickets.analytics);return s}});return r.isLoading||t.isLoading?e.jsx(Q,{}):t.isError||r.isError?e.jsx(Y,{route:P.dashboard.tickets.root}):e.jsxs(e.Fragment,{children:[e.jsx(he,{children:e.jsxs("title",{children:[" ",et.title]})}),e.jsx(Ye,{tickets:t.data,analytics:r})]})}export{ps as default};