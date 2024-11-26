import{i as f,aP as K,j as e,d0 as _,e as P,I as h,l as V,db as z,aR as W,aS as w,e3 as R,r as p,S as I,de as G,e2 as J,dn as U,g as Y,p as C,dP as $,cY as X,B as Z,dd as ee,ed as te,dp as D,dm as T,dq as F,dT as se,H as oe,C as ne}from"./index-lHvWnAth.js";import{u as re,E as ae}from"./error-block-OAPsBAe2.js";import{u as S}from"./useMutation-oW6f2Gjt.js";import{d as ie}from"./download-file-CDn8RfAr.js";import{C as le}from"./custom-breadcrumbs-BZZEULS_.js";import{P as b}from"./permission-access-controller-cpJHZ9Qy.js";import{g as de,r as ce,e as me}from"./utils-MBUcMVfY.js";import{u as pe}from"./use-table-GTy8WYC4.js";import{T as ue}from"./table-no-data-Cq3a9X-F.js";import{T as he}from"./table-empty-rows-C_VNTYCv.js";import{T as xe,a as ge,b as je,c as fe}from"./table-head-custom-C4BOg2JL.js";import{T as Ce}from"./table-selected-action-CdBpyqi4.js";import{T as Re}from"./table-pagination-custom-BLI0NPO9.js";import{C as be}from"./confirm-dialog-EJ70J6mA.js";import{T as j}from"./TableCell-V5w8oILr.js";import{R as k}from"./reminder-create-dialog-BUsypSol.js";import{T as we}from"./TextField-CUU7bZOd.js";import{I as Pe}from"./InputAdornment-3ABsbC7V.js";import{F as De,a as Te,c as ye}from"./filters-result-BeNYYg5n.js";import{C as Ee}from"./Chip-wxKJI6YL.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-Bq3bMhbs.js";import"./Checkbox-BkjqBFv4.js";import"./TablePagination-DeZbfMgu.js";import"./KeyboardArrowRight-2u6318G5.js";import"./LastPage-BSqF7-oZ.js";import"./Select-DMu-II0M.js";import"./Menu-BXdfh1mm.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-B1y_nGV8.js";import"./FormControlLabel-Dc9z1FNT.js";import"./DialogContent-DXUy4-2-.js";import"./DialogTitle-YvzNcI8a.js";import"./form-provider-DRD8Ki5j.js";import"./FormHelperText-DONqTFzb.js";import"./Rating-BIxneqw0.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-Bp78_v61.js";import"./index-Dh4ObOjY.js";import"./Slider-iwv3PeIf.js";import"./FormControl-C_sOeRyz.js";import"./FormLabel-DSca8E5L.js";import"./RadioGroup-BX-9G9fN.js";import"./FormGroup-DnQZWtk_.js";import"./utils-CMvDb-z4.js";import"./index-AWllKlEy.js";import"./countries-DSLisFCy.js";import"./Autocomplete-Bscg8jlq.js";import"./country-select-Bqkae59B.js";import"./InputLabel-BLQz42dI.js";import"./upload-avatar-CZeNxzze.js";import"./format-number-Delp4FjS.js";import"./image-BozkrAD_.js";import"./DatePicker-_phjiQsK.js";import"./ListItem-L0CrgSc-.js";import"./MobileDateTimePicker-ByNtdou9.js";import"./Tabs-rJfiarcA.js";import"./upload-box-ad-BTS9tmRg.js";import"./schema-helper-CRxPGzR4.js";import"./LoadingButton-B-I6ANxj.js";import"./CircularProgress-J2VZCr5j.js";const Fe=({row:t,index:s,selected:a,onViewFileRow:i,onDeleteRow:c,onEditRow:d,onViewQuotationRow:u})=>{var m;const r=f(),l=K(),o=e.jsxs(xe,{hover:!0,selected:a,children:[e.jsx(j,{children:s||(t==null?void 0:t.id)}),e.jsx(j,{children:_(t.reminderDate)}),e.jsx(j,{children:t.title}),e.jsx(j,{children:(m=t.quotation)!=null&&m.ref?e.jsxs(P,{variant:"contained",size:"small",startIcon:e.jsx(h,{icon:"heroicons-outline:external-link"}),onClick:()=>{t.quotation.id&&u(t.quotation.id)},children:["#",t.quotation.ref]}):"-"}),e.jsx(j,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(V,{color:l.open?"inherit":"default",onClick:l.onOpen,children:e.jsx(h,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[o,e.jsx(z,{open:l.open,anchorEl:l.anchorEl,onClose:l.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(W,{children:[(t==null?void 0:t.file)&&e.jsxs(w,{onClick:()=>{i(),l.onClose()},children:[e.jsx(h,{icon:"solar:cloud-download-bold"}),"Download"]}),e.jsx(b,{permission:R.ADD_REMINDER,children:e.jsxs(w,{onClick:()=>{d(),l.onClose()},children:[e.jsx(h,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(b,{permission:R.ADD_REMINDER,children:e.jsxs(w,{onClick:()=>{r.onTrue(),l.onClose()},sx:{color:"error.main"},children:[e.jsx(h,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(be,{open:r.value,onClose:r.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(P,{variant:"contained",color:"error",onClick:c,children:"Delete"})})]})},Se=({reminder:t,open:s,onClose:a,handler:i})=>e.jsx(k,{currentReminder:t,open:s,onClose:a,handler:i});function Ie({filters:t,onResetPage:s,options:a}){const i=p.useCallback(c=>{s(),t.setState({name:c.target.value})},[t,s]);return e.jsx(I,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(we,{sx:{width:420},value:t.state.name,onChange:i,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(Pe,{position:"start",children:e.jsx(h,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function ke({filters:t,totalResults:s,onResetPage:a,sx:i}){const c=p.useCallback(()=>{a(),t.setState({name:""})},[t,a]),d=p.useCallback(()=>{a(),t.onResetState()},[t,a]);return e.jsx(De,{totalResults:s,onReset:d,sx:i,children:e.jsx(Te,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(Ee,{...ye,label:t.state.name,onDelete:c})})})}const ve=[{id:"reminderId",label:"#",width:140},{id:"date",label:"Date",width:280},{id:"title",label:"Title"},{id:"related",label:"Related",width:280},{id:"",width:88}],Be=({reminders:t})=>{const s=pe({defaultOrderBy:"orderNumber"}),a=f(),i=f(),c=f(),[d,u]=p.useState(t),r=G({name:"",status:"all",startDate:null,endDate:null}),l=J(r.state.startDate,r.state.endDate);p.useEffect(()=>{u(t)},[t]);const o=Le({inputData:d,comparator:de(s.order,s.orderBy),filters:r.state,dateError:l}),m=ce(o,s.page,s.rowsPerPage),x=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate,v=!o.length&&x||!o.length,B=p.useCallback(n=>{M(n)},[m.length,s,d]),[L,A]=p.useState(),q=p.useCallback(n=>{A(n),i.onToggle()},[m.length,s,d]),y=U(),N=n=>{ie(n)},{mutate:M}=S({mutationFn:n=>D.delete(T.reminders.delete+n),onSuccess:async n=>{const g=d.filter(Q=>Q.id!==n);F.success("Delete success!"),u(g),s.onUpdatePageDeleteRow(m.length),c.onFalse()},onSettled:async()=>{await y.invalidateQueries({queryKey:["reminders"]}),c.onFalse()},onError:()=>{}}),{mutate:H}=S({mutationFn:({id:n,payload:g})=>D.patch(T.reminders.edit+n,g),onSuccess:async()=>{F.success("New Reminder Has Been Modified!")},onSettled:async()=>{await y.invalidateQueries({queryKey:["reminders"]}),i.onFalse()},onError:n=>{console.log(n)}}),E=Y(),O=p.useCallback(n=>{E.push(C.dashboard.quotation.details(n))},[E]);return e.jsxs(e.Fragment,{children:[e.jsx($,{maxWidth:"xl",children:e.jsxs(I,{spacing:3,children:[e.jsx(le,{links:[{name:"Dashboard",href:C.dashboard.root},{name:"Reminders",href:C.dashboard.reminders.root}],action:e.jsx(b,{permission:R.ADD_REMINDER,children:e.jsx(P,{onClick:()=>a.onToggle(),variant:"contained",startIcon:e.jsx(h,{icon:"mingcute:add-line"}),children:"New Reminder"})})}),e.jsx(b,{permission:R.REMINDER_LIST,children:e.jsxs(X,{children:[e.jsx(Ie,{filters:r,onResetPage:s.onResetPage,dateError:l}),x&&e.jsx(ke,{filters:r,totalResults:o.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(Z,{sx:{position:"relative"},children:[e.jsx(Ce,{dense:s.dense,numSelected:s.selected.length,rowCount:o.length}),e.jsx(ee,{sx:{minHeight:444},children:e.jsxs(ge,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(je,{order:s.order,orderBy:s.orderBy,headLabel:ve,rowCount:o.length}),e.jsxs(fe,{children:[o.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((n,g)=>e.jsx(Fe,{row:n,index:s.page*s.rowsPerPage+g+1,selected:s.selected.includes(n.id),onEditRow:()=>q(n),onDeleteRow:()=>B(n.id),onViewFileRow:()=>N(n.file),onViewQuotationRow:O},n.id)),e.jsx(he,{height:s.dense?56:76,emptyRows:me(s.page,s.rowsPerPage,o.length)}),e.jsx(ue,{notFound:v})]})]})})]}),e.jsx(Re,{page:s.page,dense:s.dense,count:o.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})}),e.jsx(k,{open:a.value,onClose:a.onFalse}),e.jsx(Se,{reminder:L,open:i.value,onClose:i.onFalse,handler:H})]})};function Le({inputData:t,comparator:s,filters:a,dateError:i}){const{status:c,name:d,startDate:u,endDate:r}=a,l=t.map((o,m)=>[o,m]);return l.sort((o,m)=>{const x=s(o[0],m[0]);return x!==0?x:o[1]-m[1]}),t=l.map(o=>o[0]),d&&(t=t.filter(o=>o.id.toString().toLowerCase().indexOf(d.toLowerCase())!==-1||o.title.toLowerCase().indexOf(d.toLowerCase())!==-1||o.description.toLowerCase().indexOf(d.toLowerCase())!==-1)),c!=="all"&&(t=t.filter(o=>o.status===c)),i||u&&r&&(t=t.filter(o=>te(o.createdAt,u,r))),t}const Ae={title:`Reminders list | Dashboard - ${ne.site.name}`};function Wt(){const t=re({queryKey:["reminders"],queryFn:async()=>{const{data:s}=await D.get(T.reminders.list);return s}});return t.isPending||t.isLoading?e.jsx(se,{}):t.isError?e.jsx(ae,{route:C.dashboard.reminders.root}):e.jsxs(e.Fragment,{children:[e.jsx(oe,{children:e.jsxs("title",{children:[" ",Ae.title]})}),e.jsx(Be,{reminders:t.data})]})}export{Wt as default};
