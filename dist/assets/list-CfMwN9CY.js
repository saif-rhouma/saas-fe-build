import{w as B,bG as _,j as e,aL as W,du as G,y as X,I as T,dz as Y,bI as Z,bJ as x,e as N,r as p,dL as Q,dM as b,dK as C,dN as U,ef as O,p as v,D as ee,S as E,B as q,T as te,dB as V,o as se,dC as ae,eq as oe,eb as ie,G as f,aF as re,er as ne,H as le,C as de}from"./index-lMp9zap6.js";import{u as H,E as $}from"./error-block-DXWblvjp.js";import{u as M}from"./useMutation-B2tKEkiI.js";import{C as ce}from"./custom-breadcrumbs-CnRCretL.js";import{u as me,g as pe,r as ue,T as he,a as xe,e as ge}from"./table-selected-action-Cgn9qQis.js";import{T as je}from"./table-no-data-D5fgAy-Q.js";import{T as fe,a as ye,b as be,c as Ce}from"./table-head-custom-BwAPFtwe.js";import{T as we}from"./table-pagination-custom-sK7wTfre.js";import{A}from"./app-widget-summary-BHttn7Yj.js";import{C as Se}from"./confirm-dialog-CfE53hWp.js";import{T as y}from"./TableCell-ljoaX5oi.js";import{z as S,u as Te,t as ve,a as De,F as P}from"./form-provider-Cj0Z9UsE.js";import{b as Pe}from"./upload-avatar-jEC4OtmL.js";import"./image-7Gw8g56m.js";import"./editor-56m6PEpo.js";import{a as Fe,b as ke,D as Re}from"./DialogContent-B0tqVN_s.js";import{D as Le}from"./DialogTitle-BCkrw5VA.js";import{L as Ie}from"./LoadingButton-BI3VwLzw.js";import{T as Ae}from"./TextField-BEm0Gfgz.js";import{I as Be}from"./InputAdornment-CznJJWQj.js";import{S as Ee}from"./Select-DE7_tqxX.js";import{F as qe,a as He,c as Me}from"./filters-result-BnQFy5UF.js";import{C as Ne}from"./Chip-lc0vODcu.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-BfbryewD.js";import"./empty-content-v04S0NJf.js";import"./TablePagination-Dir7BHGy.js";import"./LastPage-B3GbPSnl.js";import"./InputBase-D6UR9yYG.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-CSqTNcaw.js";import"./format-number-BW6JEF9q.js";import"./use-chart-ClK5Zjjr.js";import"./chart-legends-CluWo5DV.js";import"./index-KeOEaw8h.js";import"./FormHelperText-CiWaMPMf.js";import"./Rating-D1epoFLf.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider--FnFNgPJ.js";import"./FormControl-BFlCQpvi.js";import"./FormLabel-CKyhTT_V.js";import"./RadioGroup-C-GnO1ca.js";import"./FormGroup-BE8TyzSB.js";import"./countries-DSLisFCy.js";import"./Autocomplete-DnVwYLlc.js";import"./country-select-DkXlsKd6.js";import"./InputLabel-D2FT-Pcv.js";import"./DatePicker-CRaT7_Tx.js";import"./ListItem-Eefms6HN.js";import"./MobileDateTimePicker-CghIhRUp.js";import"./Menu-Di83eYAm.js";import"./index-DTyO1f1S.js";import"./CircularProgress-CX5vuYgb.js";const Oe=({row:t,selected:r,onViewRow:s,onDeleteRow:m})=>{const n=B();B();const i=_(),l=e.jsxs(fe,{hover:!0,selected:r,children:[e.jsx(y,{children:t.id}),e.jsx(y,{children:W(t.createTime)}),e.jsx(y,{children:t.topic}),e.jsx(y,{children:e.jsx(G,{variant:"soft",color:t.priority==="Low"&&"success"||t.priority==="Medium"&&"warning"||t.priority==="Hight"&&"error"||"default",children:t.priority})}),e.jsx(y,{children:W(t.updateTime)}),e.jsx(y,{children:e.jsx(G,{variant:"soft",color:t.status==="Open"&&"info"||t.status==="Closed"&&"default"||"default",children:t.status})}),e.jsx(y,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(X,{color:i.open?"inherit":"default",onClick:i.onOpen,children:e.jsx(T,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[l,e.jsx(Y,{open:i.open,anchorEl:i.anchorEl,onClose:i.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(Z,{children:[e.jsxs(x,{onClick:()=>{s(),i.onClose()},children:[e.jsx(T,{icon:"solar:eye-bold"}),"View"]}),e.jsxs(x,{onClick:()=>{n.onTrue(),i.onClose()},sx:{color:"error.main"},children:[e.jsx(T,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})}),e.jsx(Se,{open:n.value,onClose:n.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(N,{variant:"contained",color:"error",onClick:m,children:"Delete"})})]})},Ke=S.object({topic:S.string().min(1,{message:"Topic is required!"}),description:S.string().min(1,{message:"Description is required!"}),memberId:S.number().min(1,{message:"Member is required!"}),priority:S.string().min(1,{message:"Priority is required!"})}),ze=({currentTicket:t,open:r,onClose:s})=>{//! Upload Logic START
const m=p.useRef(),[n,i]=p.useState([]),[l,d]=p.useState(),g=p.useCallback(a=>{const h=a[0];d(()=>h)},[]),o=()=>{d(null)},u=Q(),j={headers:{"content-type":"multipart/form-data"}};//! Upload Logic END
const{mutate:F}=M({mutationFn:a=>b.post(C.files.upload,a,j),onSuccess:async({data:a})=>{const{name:h}=a;if(h){const{current:z}=m;z.file=h,await D(z)}return a},onSettled:async()=>{await u.invalidateQueries({queryKey:["tickets-images"]})},onError:a=>{console.log(a)}}),{mutate:D}=M({mutationFn:a=>b.post(C.tickets.create,a),onSuccess:async()=>{U.success("New Ticket Has Been Created!"),R()},onSettled:async()=>{await u.invalidateQueries({queryKey:["tickets"]}),m.current={},d(null),s()},onError:a=>{console.log(a)}}),k=p.useMemo(()=>({topic:(t==null?void 0:t.topic)||"",description:(t==null?void 0:t.description)||"",memberId:(t==null?void 0:t.memberId)||null,priority:(t==null?void 0:t.priority)||null}),[t]),w=Te({resolver:ve(Ke),defaultValues:k}),{reset:R,watch:K,setValue:c,handleSubmit:L,formState:{isSubmitting:Je}}=w,J=L(async a=>{try{if(l){m.current={...a};const h=new FormData;h.append("file",l),h.append("category","Ticket"),await F(h)}else await D(a)}catch(h){console.error(h)}}),I=H({queryKey:["members"],queryFn:async()=>{const{data:a}=await b.get(C.staff.list);return i(a),a}});return I.isPending||I.isLoading?e.jsx(O,{}):I.isError?e.jsx($,{route:v.dashboard.staff.root}):e.jsxs(Fe,{fullWidth:!0,maxWidth:"md",open:r,onClose:s,children:[e.jsx(Le,{children:"Add New Ticket"}),e.jsxs(De,{methods:w,onSubmit:J,children:[e.jsxs(ke,{children:[e.jsx(ee,{}),e.jsxs(E,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(q,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(P.Text,{fullWidth:!0,label:"Enter Topic",name:"topic",sx:{flexGrow:1}}),e.jsx(P.Text,{fullWidth:!0,label:"Description",name:"description",sx:{flexGrow:1}}),e.jsxs(P.Select,{name:"priority",label:"Select a Priority",sx:{width:420,textTransform:"capitalize"},children:[e.jsx(x,{value:"Low",children:"Low"}),e.jsx(x,{value:"Medium",children:"Medium"}),e.jsx(x,{value:"Hight",children:"Hight"})]}),e.jsx(P.Select,{name:"memberId",label:"Select a Member",sx:{width:420,textTransform:"capitalize"},children:n.map(a=>e.jsx(x,{value:a.id,children:`${a==null?void 0:a.firstName} ${a==null?void 0:a.lastName}`},a.id))})]}),e.jsx(q,{children:e.jsxs(E,{spacing:1.5,children:[e.jsx(te,{variant:"subtitle2",children:"Attachments"}),e.jsx(V,{sx:{maxHeight:360,p:2},children:e.jsx(Pe,{value:l,onDrop:g,onDelete:o})})]})})]})]}),e.jsxs(Re,{children:[e.jsx(Ie,{type:"submit",variant:"contained",children:"Save"}),e.jsx(N,{color:"inherit",variant:"outlined",onClick:s,children:"Cancel"})]})]})]})};function We({filters:t,onResetPage:r}){const[s,m]=p.useState("all"),n=p.useCallback(l=>{r(),t.setState({name:l.target.value})},[t,r]),i=p.useCallback(l=>{r(),t.setState({status:l.target.value}),m(l.target.value)},[t,r]);return e.jsxs(E,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(Ae,{sx:{width:420},value:t.state.name,onChange:n,placeholder:"Search Here...",InputProps:{startAdornment:e.jsx(Be,{position:"start",children:e.jsx(T,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsxs(Ee,{sx:{width:420,textTransform:"capitalize"},value:s,onChange:i,children:[e.jsx(x,{value:"all",children:"All Tickets"}),e.jsx(x,{value:"Open",children:"Open Tickets"}),e.jsx(x,{value:"Closed",children:"Close Tickets"})]})]})}function Ge({filters:t,totalResults:r,onResetPage:s,sx:m}){const n=p.useCallback(()=>{s(),t.setState({name:""})},[t,s]),i=p.useCallback(()=>{s(),t.onResetState()},[t,s]);return e.jsx(qe,{totalResults:r,onReset:i,sx:m,children:e.jsx(He,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(Ne,{...Me,label:t.state.name,onDelete:n})})})}const Qe=[{id:"ticketId",label:"#",width:140},{id:"date",label:"Date",width:280},{id:"topic",label:"Topic"},{id:"priority",label:"Priority"},{id:"lastUpdate",label:"Last Updated"},{id:"status",label:"Status"},{id:"",width:88}],Ue=({tickets:t,analytics:r})=>{const s=me({defaultOrderBy:"orderNumber"}),m=se(),n=B(),[i,l]=p.useState(t),d=ae({name:"",status:"all",startDate:null,endDate:null});p.useEffect(()=>{l(t)},[t]);const g=oe(d.state.startDate,d.state.endDate),o=Ve({inputData:i,comparator:pe(s.order,s.orderBy),filters:d.state,dateError:g}),u=ue(o,s.page,s.rowsPerPage),j=!!d.state.name||d.state.status!=="all"||!!d.state.startDate&&!!d.state.endDate,F=!o.length&&j||!o.length,D=p.useCallback(c=>{R(c)},[u.length,s,i]),k=p.useCallback(c=>{m.push(v.dashboard.tickets.details(c))},[m]),w=Q(),{mutate:R}=M({mutationFn:c=>b.delete(C.tickets.delete+c),onSuccess:async()=>{const c=i.filter(L=>L.id!==id);U.success("Delete success!"),l(c),s.onUpdatePageDeleteRow(u.length)},onSettled:async()=>{await w.invalidateQueries({queryKey:["tickets"]}),await w.invalidateQueries({queryKey:["tickets","analytics"]})},onError:c=>{}}),K=()=>r.isPending||r.isLoading?e.jsx(f,{xs:12,md:12,children:e.jsx(O,{})}):e.jsxs(e.Fragment,{children:[e.jsx(f,{xs:12,md:4,children:e.jsx(A,{title:"All Tickets",total:t.length,chart:{}})}),e.jsx(f,{xs:12,md:4,children:e.jsx(A,{title:"Open Tickets",total:r.data.analytics.Open,chart:{}})}),e.jsx(f,{xs:12,md:4,children:e.jsx(A,{title:"Close Tickets",total:r.data.analytics.Closed,chart:{}})})]});return e.jsxs(e.Fragment,{children:[e.jsx(ie,{maxWidth:"xl",children:e.jsxs(f,{container:!0,spacing:3,children:[e.jsx(f,{xs:12,md:12,children:e.jsx(ce,{links:[{name:"Dashboard",href:v.dashboard.root},{name:"Ticket",href:v.dashboard.tickets.root}],action:e.jsx(N,{onClick:()=>n.onToggle(),variant:"contained",startIcon:e.jsx(T,{icon:"mingcute:add-line"}),children:"Add New Ticket"})})}),K(),e.jsx(f,{xs:12,md:12,children:e.jsxs(re,{children:[e.jsx(We,{filters:d,onResetPage:s.onResetPage,dateError:g}),j&&e.jsx(Ge,{filters:d,totalResults:o.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(q,{sx:{position:"relative"},children:[e.jsx(he,{dense:s.dense,numSelected:s.selected.length,rowCount:o.length}),e.jsx(V,{sx:{minHeight:444},children:e.jsxs(ye,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(be,{order:s.order,orderBy:s.orderBy,headLabel:Qe,rowCount:o.length}),e.jsxs(Ce,{children:[o.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(c=>e.jsx(Oe,{row:c,selected:s.selected.includes(c.id),onSelectRow:()=>s.onSelectRow(c.id),onDeleteRow:()=>D(c.id),onViewRow:()=>k(c.id)},c.id)),e.jsx(xe,{height:s.dense?56:76,emptyRows:ge(s.page,s.rowsPerPage,o.length)}),e.jsx(je,{notFound:F})]})]})})]}),e.jsx(we,{page:s.page,dense:s.dense,count:o.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})}),e.jsx(ze,{open:n.value,onClose:n.onFalse})]})};function Ve({inputData:t,comparator:r,filters:s,dateError:m}){const{status:n,name:i,startDate:l,endDate:d}=s,g=t.map((o,u)=>[o,u]);return g.sort((o,u)=>{const j=r(o[0],u[0]);return j!==0?j:o[1]-u[1]}),t=g.map(o=>o[0]),i&&(t=t.filter(o=>o.id.toString().indexOf(i.toLowerCase())!==-1||o.topic.toLowerCase().indexOf(i.toLowerCase())!==-1||o.priority.toLowerCase().indexOf(i.toLowerCase())!==-1)),n!=="all"&&(t=t.filter(o=>o.status===n)),m||l&&d&&(t=t.filter(o=>ne(o.createdAt,l,d))),t}const $e={title:`Tickets list | Dashboard - ${de.site.name}`};function Yt(){const t=H({queryKey:["tickets"],queryFn:async()=>{const{data:s}=await b.get(C.tickets.list);return s}}),r=H({queryKey:["tickets","analytics"],queryFn:async()=>{const{data:s}=await b.get(C.tickets.analytics);return s}});return r.isLoading||t.isLoading?e.jsx(O,{}):t.isError||r.isError?e.jsx($,{route:v.dashboard.tickets.root}):e.jsxs(e.Fragment,{children:[e.jsx(le,{children:e.jsxs("title",{children:[" ",$e.title]})}),e.jsx(Ue,{tickets:t.data,analytics:r})]})}export{Yt as default};
