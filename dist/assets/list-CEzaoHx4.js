import{i as F,aP as H,j as e,d0 as v,d7 as D,e as b,I as x,l as V,db as J,aR as Q,aS as g,e3 as y,r as p,S as z,g as M,de as _,e2 as W,p as f,dn as G,dP as U,cV as h,cY as Y,B as $,dd as X,ed as Z,dp as k,dm as w,dq as ee,dT as I,H as te,C as se}from"./index-DMR9Maie.js";import{u as R,E as ae}from"./error-block-k_hEHuwv.js";import{u as oe}from"./useMutation-BTovKxdg.js";import{d as re}from"./download-file-DiWXkFV7.js";import{C as ie}from"./custom-breadcrumbs-CiTrA1pf.js";import{P}from"./permission-access-controller-UllAm3cL.js";import{g as ne,r as le,e as ce}from"./utils-MBUcMVfY.js";import{u as de}from"./use-table-BnHb3G9w.js";import{T as me}from"./table-no-data-my2sstYq.js";import{T as pe}from"./table-empty-rows-6nOfAF-R.js";import{T as ue,a as he,b as xe,c as je}from"./table-head-custom-CqDxf6Jr.js";import{T as ge}from"./table-selected-action-DkY2CJhX.js";import{T as Ce}from"./table-pagination-custom-Cjuu00eq.js";import{A as T}from"./app-widget-summary-D4dtrM7i.js";import{C as fe}from"./confirm-dialog-BDvFx7wk.js";import{T as u}from"./TableCell-Ct-GV2fl.js";import{T as Te}from"./tickets-create-dialog-DwW5l8x0.js";import{T as be}from"./TextField-Bm5ELSFV.js";import{I as ye}from"./InputAdornment-uhfPCmvF.js";import{S as ke}from"./Select-CiZYe2qb.js";import{F as we,a as Pe,c as Se}from"./filters-result-C1l1_rY1.js";import{C as ve}from"./Chip-BlYP7ziA.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-Cf_YmNVn.js";import"./Checkbox-8SNSNdiU.js";import"./TablePagination-CTBMHaZE.js";import"./KeyboardArrowRight-Cadhk5j3.js";import"./LastPage-BML0UHE4.js";import"./InputBase-DR0fCAT-.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-D6vW3SHP.js";import"./format-number-vxMLQ75Z.js";import"./use-chart-m_H9RrCQ.js";import"./chart-legends-pKeUv_Up.js";import"./index-Bj7PJKGj.js";import"./DialogContent-DH_g6sSZ.js";import"./DialogTitle-ZS7PO6X5.js";import"./form-provider-4VamkToT.js";import"./FormHelperText-DEevnlmG.js";import"./Rating-UuO5LYWr.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-Do_EhAkR.js";import"./Menu-CvvkjWBE.js";import"./index-BvR8-QHv.js";import"./Slider-j5oxmhZY.js";import"./FormControl-BdFY560g.js";import"./FormLabel-BORd5zgj.js";import"./RadioGroup-CSjDnUrZ.js";import"./FormGroup-3NJkwRQV.js";import"./utils-9U5MxRpO.js";import"./countries-DSLisFCy.js";import"./Autocomplete-Co0MrA8Y.js";import"./country-select-w33fwywc.js";import"./InputLabel-DYk2T8jE.js";import"./upload-avatar-DFuPvZB1.js";import"./image-CDdYtbMq.js";import"./DatePicker-BF_5SpW8.js";import"./ListItem-DgTOMIV5.js";import"./MobileDateTimePicker-CiIORD_3.js";import"./Tabs-DRBSOW3j.js";import"./upload-box-ad-DigIyW7i.js";import"./LoadingButton-CghU56kS.js";import"./CircularProgress-Dd4Ff5EU.js";const De=({row:t,index:o,selected:s,onViewRow:c,onViewFileRow:d,onDeleteRow:l,onViewQuotationRow:m})=>{const i=F();console.log("---> row",JSON.parse(t.quotation).ref);const n=H(),a=e.jsxs(ue,{hover:!0,selected:s,children:[e.jsx(u,{children:o||t.id}),e.jsx(u,{children:v(t.createTime)}),e.jsx(u,{children:t.topic}),e.jsx(u,{children:e.jsx(D,{variant:"soft",color:t.priority==="Low"&&"success"||t.priority==="Medium"&&"warning"||t.priority==="Hight"&&"error"||"default",children:t.priority})}),e.jsx(u,{children:v(t.updateTime)}),e.jsx(u,{children:JSON.parse(t.quotation).ref?e.jsxs(b,{variant:"contained",size:"small",startIcon:e.jsx(x,{icon:"heroicons-outline:external-link"}),onClick:()=>{JSON.parse(t.quotation).id&&m(JSON.parse(t.quotation).id)},children:["#",JSON.parse(t.quotation).ref]}):"-"}),e.jsx(u,{children:e.jsx(D,{variant:"soft",color:t.status==="Open"&&"info"||t.status==="Closed"&&"default"||"default",children:t.status})}),e.jsx(u,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(V,{color:n.open?"inherit":"default",onClick:n.onOpen,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[a,e.jsx(J,{open:n.open,anchorEl:n.anchorEl,onClose:n.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(Q,{children:[(t==null?void 0:t.file)&&e.jsxs(g,{onClick:()=>{d(),n.onClose()},children:[e.jsx(x,{icon:"solar:cloud-download-bold"}),"Download"]}),e.jsxs(g,{onClick:()=>{c(),n.onClose()},children:[e.jsx(x,{icon:"solar:eye-bold"}),"View"]}),e.jsx(P,{permission:y.DELETE_TICKET,children:e.jsxs(g,{onClick:()=>{i.onTrue(),n.onClose()},sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(fe,{open:i.value,onClose:i.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(b,{variant:"contained",color:"error",onClick:l,children:"Delete"})})]})};function Re({filters:t,onResetPage:o}){const[s,c]=p.useState("all"),d=p.useCallback(m=>{o(),t.setState({name:m.target.value})},[t,o]),l=p.useCallback(m=>{o(),t.setState({status:m.target.value}),c(m.target.value)},[t,o]);return e.jsxs(z,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(be,{sx:{width:420},value:t.state.name,onChange:d,placeholder:"Search Here...",InputProps:{startAdornment:e.jsx(ye,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsxs(ke,{sx:{width:420,textTransform:"capitalize"},value:s,onChange:l,children:[e.jsx(g,{value:"all",children:"All Tickets"}),e.jsx(g,{value:"Open",children:"Open Tickets"}),e.jsx(g,{value:"Closed",children:"Close Tickets"})]})]})}function Fe({filters:t,totalResults:o,onResetPage:s,sx:c}){const d=p.useCallback(()=>{s(),t.setState({name:""})},[t,s]),l=p.useCallback(()=>{s(),t.onResetState()},[t,s]);return e.jsx(we,{totalResults:o,onReset:l,sx:c,children:e.jsx(Pe,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(ve,{...Se,label:t.state.name,onDelete:d})})})}const Ie=[{id:"ticketId",label:"#",width:140},{id:"date",label:"Date",width:280},{id:"topic",label:"Topic"},{id:"priority",label:"Priority"},{id:"lastUpdate",label:"Last Updated"},{id:"related",label:"Related"},{id:"status",label:"Status"},{id:"",width:88}],Ee=({tickets:t,analytics:o})=>{const s=de({defaultOrderBy:"orderNumber"}),c=M(),d=F(),[l,m]=p.useState(t),i=_({name:"",status:"all",startDate:null,endDate:null});p.useEffect(()=>{m(t)},[t]);const n=W(i.state.startDate,i.state.endDate),a=Le({inputData:l,comparator:ne(s.order,s.orderBy),filters:i.state,dateError:n}),j=le(a,s.page,s.rowsPerPage),C=!!i.state.name||i.state.status!=="all"||!!i.state.startDate&&!!i.state.endDate,E=!a.length&&C||!a.length,L=p.useCallback(r=>{q(r)},[j.length,s,l]),A=p.useCallback(r=>{c.push(f.dashboard.tickets.details(r))},[c]),O=p.useCallback(r=>{c.push(f.dashboard.quotation.details(r))},[c]),S=G(),B=r=>{re(r)},{mutate:q}=oe({mutationFn:r=>k.delete(w.tickets.delete+r),onSuccess:async()=>{ee.success("Delete success!"),await S.invalidateQueries({queryKey:["tickets"]}),await S.invalidateQueries({queryKey:["tickets","analytics"]})},onSettled:async()=>{},onError:r=>{}}),N=()=>o.isPending||o.isLoading?e.jsx(h,{xs:12,md:12,children:e.jsx(I,{})}):e.jsxs(e.Fragment,{children:[e.jsx(h,{xs:12,md:4,children:e.jsx(T,{title:"All Tickets",total:t.length,chart:{}})}),e.jsx(h,{xs:12,md:4,children:e.jsx(T,{title:"Open Tickets",total:o.data.analytics.Open,chart:{}})}),e.jsx(h,{xs:12,md:4,children:e.jsx(T,{title:"Close Tickets",total:o.data.analytics.Closed,chart:{}})})]});return e.jsxs(e.Fragment,{children:[e.jsx(U,{maxWidth:"xl",children:e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{xs:12,md:12,children:e.jsx(ie,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Ticket",href:f.dashboard.tickets.root}],action:e.jsx(P,{permission:y.ADD_TICKET,children:e.jsx(b,{onClick:()=>d.onToggle(),variant:"contained",startIcon:e.jsx(x,{icon:"mingcute:add-line"}),children:"New Ticket"})})})}),e.jsxs(P,{permission:y.TICKET_LIST,children:[N(),e.jsx(h,{xs:12,md:12,children:e.jsxs(Y,{children:[e.jsx(Re,{filters:i,onResetPage:s.onResetPage,dateError:n}),C&&e.jsx(Fe,{filters:i,totalResults:a.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs($,{sx:{position:"relative"},children:[e.jsx(ge,{dense:s.dense,numSelected:s.selected.length,rowCount:a.length}),e.jsx(X,{sx:{minHeight:444},children:e.jsxs(he,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(xe,{order:s.order,orderBy:s.orderBy,headLabel:Ie,rowCount:a.length}),e.jsxs(je,{children:[a.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((r,K)=>e.jsx(De,{row:r,index:s.page*s.rowsPerPage+K+1,selected:s.selected.includes(r.id),onSelectRow:()=>s.onSelectRow(r.id),onDeleteRow:()=>L(r.id),onViewRow:()=>A(r.id),onViewFileRow:()=>B(r.file),onViewQuotationRow:O},r.id)),e.jsx(pe,{height:s.dense?56:76,emptyRows:ce(s.page,s.rowsPerPage,a.length)}),e.jsx(me,{notFound:E})]})]})})]}),e.jsx(Ce,{page:s.page,dense:s.dense,count:a.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})]})}),e.jsx(Te,{open:d.value,onClose:d.onFalse})]})};function Le({inputData:t,comparator:o,filters:s,dateError:c}){const{status:d,name:l,startDate:m,endDate:i}=s,n=t.map((a,j)=>[a,j]);return n.sort((a,j)=>{const C=o(a[0],j[0]);return C!==0?C:a[1]-j[1]}),t=n.map(a=>a[0]),l&&(t=t.filter(a=>a.id.toString().indexOf(l.toLowerCase())!==-1||a.topic.toLowerCase().indexOf(l.toLowerCase())!==-1||a.priority.toLowerCase().indexOf(l.toLowerCase())!==-1)),d!=="all"&&(t=t.filter(a=>a.status===d)),c||m&&i&&(t=t.filter(a=>Z(a.createdAt,m,i))),t}const Ae={title:`Tickets list | Dashboard - ${se.site.name}`};function Wt(){const t=R({queryKey:["tickets"],queryFn:async()=>{const{data:s}=await k.get(w.tickets.list);return s}}),o=R({queryKey:["tickets","analytics"],queryFn:async()=>{const{data:s}=await k.get(w.tickets.analytics);return s}});return o.isLoading||t.isLoading?e.jsx(I,{}):t.isError||o.isError?e.jsx(ae,{route:f.dashboard.tickets.root}):e.jsxs(e.Fragment,{children:[e.jsx(te,{children:e.jsxs("title",{children:[" ",Ae.title]})}),e.jsx(Ee,{tickets:t.data,analytics:o})]})}export{Wt as default};
