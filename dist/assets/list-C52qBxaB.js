import{i as R,aP as H,j as e,d0 as S,d7 as D,l as N,I as j,db as V,aR as M,aS as g,e3 as b,e as F,r as m,S as Q,g as _,de as z,ec as W,p as f,dn as G,dP as U,cV as u,cY as J,B as Y,dd as $,ed as X,dp as y,dm as k,dq as Z,dT as E,H as ee,C as te}from"./index-DJBSy2EF.js";import{u as v,E as se}from"./error-block-CvrkSCmw.js";import{u as ae}from"./useMutation-CufYe6We.js";import{d as oe}from"./download-file-CuX6riAg.js";import{C as re}from"./custom-breadcrumbs-wu6pKqCp.js";import{P as w}from"./permission-access-controller-BCJVcN5Z.js";import{g as ie,r as ne,e as le}from"./utils-MBUcMVfY.js";import{u as ce}from"./use-table-CaQ9UTBV.js";import{T as de}from"./table-no-data-CdNwTCeC.js";import{T as me}from"./table-empty-rows-BFdSuI29.js";import{T as pe,a as ue,b as he,c as xe}from"./table-head-custom-DS0GuAHi.js";import{T as je}from"./table-selected-action-CFbZZtLm.js";import{T as ge}from"./table-pagination-custom-6sQmfddJ.js";import{A as T}from"./app-widget-summary-D6l7hVtV.js";import{C as Ce}from"./confirm-dialog-CJ1MpGCr.js";import{T as h}from"./TableCell-DF0lLe6g.js";import{T as fe}from"./tickets-create-dialog-BgBPWcKd.js";import{T as Te}from"./TextField-B9QH0qQV.js";import{I as be}from"./InputAdornment-BDZfHe4A.js";import{S as ye}from"./Select-CpdxAjVY.js";import{F as ke,a as we,c as Pe}from"./filters-result-BXZdekQk.js";import{C as Se}from"./Chip-Csu7Evuy.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-Bo7F874U.js";import"./Checkbox-CJWY43L-.js";import"./TablePagination-C_TN8XiH.js";import"./KeyboardArrowRight-J3egVbAl.js";import"./LastPage-B2uyZMXU.js";import"./InputBase-DUpzIqxJ.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-C5zXWVOI.js";import"./format-number-BkN-sNtV.js";import"./use-chart-Cb038OIt.js";import"./chart-legends-Db2Q8naQ.js";import"./index-cfJrRA7m.js";import"./DialogContent-CludgxUR.js";import"./DialogTitle-BZmEf6-n.js";import"./form-provider-B6rN6rcW.js";import"./FormHelperText-4VkrdFxf.js";import"./Rating-tHWMe1hJ.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-jz5psZbY.js";import"./Menu-DzF7Vu0n.js";import"./index-C7-PDvr0.js";import"./Slider-lMSifW85.js";import"./FormControl-Bvq6kqrZ.js";import"./FormLabel-BcMrCB0K.js";import"./RadioGroup-BHqAuZXd.js";import"./FormGroup-A8YBApVE.js";import"./utils-CTRen34C.js";import"./countries-DSLisFCy.js";import"./Autocomplete-DrDbH-Lk.js";import"./country-select-G1_Mr0xL.js";import"./InputLabel-D51FDdfU.js";import"./upload-avatar-mAHTNZo7.js";import"./image-CcUpnek_.js";import"./DatePicker-B6YlWnqF.js";import"./ListItem-yWcPRO5-.js";import"./MobileDateTimePicker-B5GKNQ1T.js";import"./Tabs-BCERpoja.js";import"./LoadingButton-CA0ERkDn.js";import"./CircularProgress-qkH5YYbv.js";const De=({row:t,index:r,selected:s,onViewRow:d,onViewFileRow:c,onDeleteRow:n})=>{const l=R(),o=H(),p=e.jsxs(pe,{hover:!0,selected:s,children:[e.jsx(h,{children:r||t.id}),e.jsx(h,{children:S(t.createTime)}),e.jsx(h,{children:t.topic}),e.jsx(h,{children:e.jsx(D,{variant:"soft",color:t.priority==="Low"&&"success"||t.priority==="Medium"&&"warning"||t.priority==="Hight"&&"error"||"default",children:t.priority})}),e.jsx(h,{children:S(t.updateTime)}),e.jsx(h,{children:e.jsx(D,{variant:"soft",color:t.status==="Open"&&"info"||t.status==="Closed"&&"default"||"default",children:t.status})}),e.jsx(h,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(N,{color:o.open?"inherit":"default",onClick:o.onOpen,children:e.jsx(j,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[p,e.jsx(V,{open:o.open,anchorEl:o.anchorEl,onClose:o.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(M,{children:[(t==null?void 0:t.file)&&e.jsxs(g,{onClick:()=>{c(),o.onClose()},children:[e.jsx(j,{icon:"solar:cloud-download-bold"}),"Download"]}),e.jsxs(g,{onClick:()=>{d(),o.onClose()},children:[e.jsx(j,{icon:"solar:eye-bold"}),"View"]}),e.jsx(w,{permission:b.DELETE_TICKET,children:e.jsxs(g,{onClick:()=>{l.onTrue(),o.onClose()},sx:{color:"error.main"},children:[e.jsx(j,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Ce,{open:l.value,onClose:l.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(F,{variant:"contained",color:"error",onClick:n,children:"Delete"})})]})};function ve({filters:t,onResetPage:r}){const[s,d]=m.useState("all"),c=m.useCallback(l=>{r(),t.setState({name:l.target.value})},[t,r]),n=m.useCallback(l=>{r(),t.setState({status:l.target.value}),d(l.target.value)},[t,r]);return e.jsxs(Q,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(Te,{sx:{width:420},value:t.state.name,onChange:c,placeholder:"Search Here...",InputProps:{startAdornment:e.jsx(be,{position:"start",children:e.jsx(j,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsxs(ye,{sx:{width:420,textTransform:"capitalize"},value:s,onChange:n,children:[e.jsx(g,{value:"all",children:"All Tickets"}),e.jsx(g,{value:"Open",children:"Open Tickets"}),e.jsx(g,{value:"Closed",children:"Close Tickets"})]})]})}function Re({filters:t,totalResults:r,onResetPage:s,sx:d}){const c=m.useCallback(()=>{s(),t.setState({name:""})},[t,s]),n=m.useCallback(()=>{s(),t.onResetState()},[t,s]);return e.jsx(ke,{totalResults:r,onReset:n,sx:d,children:e.jsx(we,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(Se,{...Pe,label:t.state.name,onDelete:c})})})}const Fe=[{id:"ticketId",label:"#",width:140},{id:"date",label:"Date",width:280},{id:"topic",label:"Topic"},{id:"priority",label:"Priority"},{id:"lastUpdate",label:"Last Updated"},{id:"status",label:"Status"},{id:"",width:88}],Ee=({tickets:t,analytics:r})=>{const s=ce({defaultOrderBy:"orderNumber"}),d=_(),c=R(),[n,l]=m.useState(t),o=z({name:"",status:"all",startDate:null,endDate:null});m.useEffect(()=>{l(t)},[t]);const p=W(o.state.startDate,o.state.endDate),a=Ie({inputData:n,comparator:ie(s.order,s.orderBy),filters:o.state,dateError:p}),x=ne(a,s.page,s.rowsPerPage),C=!!o.state.name||o.state.status!=="all"||!!o.state.startDate&&!!o.state.endDate,I=!a.length&&C||!a.length,L=m.useCallback(i=>{O(i)},[x.length,s,n]),A=m.useCallback(i=>{d.push(f.dashboard.tickets.details(i))},[d]),P=G(),B=i=>{oe(i)},{mutate:O}=ae({mutationFn:i=>y.delete(k.tickets.delete+i),onSuccess:async()=>{Z.success("Delete success!"),await P.invalidateQueries({queryKey:["tickets"]}),await P.invalidateQueries({queryKey:["tickets","analytics"]})},onSettled:async()=>{},onError:i=>{}}),K=()=>r.isPending||r.isLoading?e.jsx(u,{xs:12,md:12,children:e.jsx(E,{})}):e.jsxs(e.Fragment,{children:[e.jsx(u,{xs:12,md:4,children:e.jsx(T,{title:"All Tickets",total:t.length,chart:{}})}),e.jsx(u,{xs:12,md:4,children:e.jsx(T,{title:"Open Tickets",total:r.data.analytics.Open,chart:{}})}),e.jsx(u,{xs:12,md:4,children:e.jsx(T,{title:"Close Tickets",total:r.data.analytics.Closed,chart:{}})})]});return e.jsxs(e.Fragment,{children:[e.jsx(U,{maxWidth:"xl",children:e.jsxs(u,{container:!0,spacing:3,children:[e.jsx(u,{xs:12,md:12,children:e.jsx(re,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Ticket",href:f.dashboard.tickets.root}],action:e.jsx(w,{permission:b.ADD_TICKET,children:e.jsx(F,{onClick:()=>c.onToggle(),variant:"contained",startIcon:e.jsx(j,{icon:"mingcute:add-line"}),children:"Add New Ticket"})})})}),e.jsxs(w,{permission:b.TICKET_LIST,children:[K(),e.jsx(u,{xs:12,md:12,children:e.jsxs(J,{children:[e.jsx(ve,{filters:o,onResetPage:s.onResetPage,dateError:p}),C&&e.jsx(Re,{filters:o,totalResults:a.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(Y,{sx:{position:"relative"},children:[e.jsx(je,{dense:s.dense,numSelected:s.selected.length,rowCount:a.length}),e.jsx($,{sx:{minHeight:444},children:e.jsxs(ue,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(he,{order:s.order,orderBy:s.orderBy,headLabel:Fe,rowCount:a.length}),e.jsxs(xe,{children:[a.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((i,q)=>e.jsx(De,{row:i,index:s.page*s.rowsPerPage+q+1,selected:s.selected.includes(i.id),onSelectRow:()=>s.onSelectRow(i.id),onDeleteRow:()=>L(i.id),onViewRow:()=>A(i.id),onViewFileRow:()=>B(i.file)},i.id)),e.jsx(me,{height:s.dense?56:76,emptyRows:le(s.page,s.rowsPerPage,a.length)}),e.jsx(de,{notFound:I})]})]})})]}),e.jsx(ge,{page:s.page,dense:s.dense,count:a.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})]})}),e.jsx(fe,{open:c.value,onClose:c.onFalse})]})};function Ie({inputData:t,comparator:r,filters:s,dateError:d}){const{status:c,name:n,startDate:l,endDate:o}=s,p=t.map((a,x)=>[a,x]);return p.sort((a,x)=>{const C=r(a[0],x[0]);return C!==0?C:a[1]-x[1]}),t=p.map(a=>a[0]),n&&(t=t.filter(a=>a.id.toString().indexOf(n.toLowerCase())!==-1||a.topic.toLowerCase().indexOf(n.toLowerCase())!==-1||a.priority.toLowerCase().indexOf(n.toLowerCase())!==-1)),c!=="all"&&(t=t.filter(a=>a.status===c)),d||l&&o&&(t=t.filter(a=>X(a.createdAt,l,o))),t}const Le={title:`Tickets list | Dashboard - ${te.site.name}`};function zt(){const t=v({queryKey:["tickets"],queryFn:async()=>{const{data:s}=await y.get(k.tickets.list);return s}}),r=v({queryKey:["tickets","analytics"],queryFn:async()=>{const{data:s}=await y.get(k.tickets.analytics);return s}});return r.isLoading||t.isLoading?e.jsx(E,{}):t.isError||r.isError?e.jsx(se,{route:f.dashboard.tickets.root}):e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:e.jsxs("title",{children:[" ",Le.title]})}),e.jsx(Ee,{tickets:t.data,analytics:r})]})}export{zt as default};
