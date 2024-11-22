import{i as f,aP as K,j as e,d0 as _,e as P,I as h,l as V,db as z,aR as W,aS as w,e3 as R,r as p,S as I,de as G,e2 as J,dn as U,g as Y,p as C,dP as $,cY as X,B as Z,dd as ee,ed as te,dp as D,dm as T,dq as F,dT as se,H as oe,C as ne}from"./index-CFpFDdmk.js";import{u as re,E as ae}from"./error-block-Qb0JqWMo.js";import{u as S}from"./useMutation-BYxzZEeu.js";import{d as ie}from"./download-file-B9aQRlwl.js";import{C as le}from"./custom-breadcrumbs-BhZ5AQiJ.js";import{P as b}from"./permission-access-controller-BmW-jOjt.js";import{g as de,r as ce,e as me}from"./utils-MBUcMVfY.js";import{u as pe}from"./use-table-DRwUskxu.js";import{T as ue}from"./table-no-data-CxKE0QTn.js";import{T as he}from"./table-empty-rows-Cp9yDg2d.js";import{T as xe,a as ge,b as je,c as fe}from"./table-head-custom-BYdbhTGG.js";import{T as Ce}from"./table-selected-action-BYPXAJsv.js";import{T as Re}from"./table-pagination-custom-Co0L0YrL.js";import{C as be}from"./confirm-dialog-CEtTq-Ia.js";import{T as j}from"./TableCell-nk9uECyp.js";import{R as k}from"./reminder-create-dialog-BCgi-_VA.js";import{T as we}from"./TextField-DfM7FsMT.js";import{I as Pe}from"./InputAdornment-CgLiqxs-.js";import{F as De,a as Te,c as ye}from"./filters-result-DRJaClbG.js";import{C as Ee}from"./Chip-B8Kj4THB.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-COBAYCBt.js";import"./Checkbox-BgUXlmGv.js";import"./TablePagination-Bod9RAXB.js";import"./KeyboardArrowRight-BWeVAAgH.js";import"./LastPage-B91oXYll.js";import"./Select-BlD-2uiB.js";import"./Menu-B68-fR6c.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-BlPzdlBf.js";import"./FormControlLabel-Djcc_FaA.js";import"./DialogContent-__vH1XwO.js";import"./DialogTitle-Fqo4pdu1.js";import"./form-provider-BpZ_lNCz.js";import"./FormHelperText-CBSty0_k.js";import"./Rating-hRCFGB57.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-B84uWKaP.js";import"./index-C97vZu8v.js";import"./Slider-1GT9TVwO.js";import"./FormControl-CNS-_KcR.js";import"./FormLabel-DSBvpxE-.js";import"./RadioGroup-q3osZweo.js";import"./FormGroup-cGoNpeSS.js";import"./utils-BeBWERKu.js";import"./index-iy408cV1.js";import"./countries-DSLisFCy.js";import"./Autocomplete-CiqUWkUt.js";import"./country-select-B5_N9Ghb.js";import"./InputLabel-D-P4ONWN.js";import"./upload-avatar-CpOCvI_m.js";import"./format-number-u5v8ow11.js";import"./image-DogZHW8e.js";import"./DatePicker--R0iVwy6.js";import"./ListItem-C2-cLBAD.js";import"./MobileDateTimePicker-iVybONG-.js";import"./Tabs-mH73uY_b.js";import"./upload-box-ad-Bui4D6nL.js";import"./schema-helper-4wDMemZN.js";import"./LoadingButton-DIpeLunE.js";import"./CircularProgress-kusugyBo.js";const Fe=({row:t,index:s,selected:a,onViewFileRow:i,onDeleteRow:c,onEditRow:d,onViewQuotationRow:u})=>{var m;const r=f(),l=K(),o=e.jsxs(xe,{hover:!0,selected:a,children:[e.jsx(j,{children:s||(t==null?void 0:t.id)}),e.jsx(j,{children:_(t.reminderDate)}),e.jsx(j,{children:t.title}),e.jsx(j,{children:(m=t.quotation)!=null&&m.ref?e.jsxs(P,{variant:"contained",size:"small",startIcon:e.jsx(h,{icon:"heroicons-outline:external-link"}),onClick:()=>{t.quotation.id&&u(t.quotation.id)},children:["#",t.quotation.ref]}):"-"}),e.jsx(j,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(V,{color:l.open?"inherit":"default",onClick:l.onOpen,children:e.jsx(h,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[o,e.jsx(z,{open:l.open,anchorEl:l.anchorEl,onClose:l.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(W,{children:[(t==null?void 0:t.file)&&e.jsxs(w,{onClick:()=>{i(),l.onClose()},children:[e.jsx(h,{icon:"solar:cloud-download-bold"}),"Download"]}),e.jsx(b,{permission:R.ADD_REMINDER,children:e.jsxs(w,{onClick:()=>{d(),l.onClose()},children:[e.jsx(h,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(b,{permission:R.ADD_REMINDER,children:e.jsxs(w,{onClick:()=>{r.onTrue(),l.onClose()},sx:{color:"error.main"},children:[e.jsx(h,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(be,{open:r.value,onClose:r.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(P,{variant:"contained",color:"error",onClick:c,children:"Delete"})})]})},Se=({reminder:t,open:s,onClose:a,handler:i})=>e.jsx(k,{currentReminder:t,open:s,onClose:a,handler:i});function Ie({filters:t,onResetPage:s,options:a}){const i=p.useCallback(c=>{s(),t.setState({name:c.target.value})},[t,s]);return e.jsx(I,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(we,{sx:{width:420},value:t.state.name,onChange:i,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(Pe,{position:"start",children:e.jsx(h,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function ke({filters:t,totalResults:s,onResetPage:a,sx:i}){const c=p.useCallback(()=>{a(),t.setState({name:""})},[t,a]),d=p.useCallback(()=>{a(),t.onResetState()},[t,a]);return e.jsx(De,{totalResults:s,onReset:d,sx:i,children:e.jsx(Te,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(Ee,{...ye,label:t.state.name,onDelete:c})})})}const ve=[{id:"reminderId",label:"#",width:140},{id:"date",label:"Date",width:280},{id:"title",label:"Title"},{id:"related",label:"Related",width:280},{id:"",width:88}],Be=({reminders:t})=>{const s=pe({defaultOrderBy:"orderNumber"}),a=f(),i=f(),c=f(),[d,u]=p.useState(t),r=G({name:"",status:"all",startDate:null,endDate:null}),l=J(r.state.startDate,r.state.endDate);p.useEffect(()=>{u(t)},[t]);const o=Le({inputData:d,comparator:de(s.order,s.orderBy),filters:r.state,dateError:l}),m=ce(o,s.page,s.rowsPerPage),x=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate,v=!o.length&&x||!o.length,B=p.useCallback(n=>{M(n)},[m.length,s,d]),[L,A]=p.useState(),q=p.useCallback(n=>{A(n),i.onToggle()},[m.length,s,d]),y=U(),N=n=>{ie(n)},{mutate:M}=S({mutationFn:n=>D.delete(T.reminders.delete+n),onSuccess:async n=>{const g=d.filter(Q=>Q.id!==n);F.success("Delete success!"),u(g),s.onUpdatePageDeleteRow(m.length),c.onFalse()},onSettled:async()=>{await y.invalidateQueries({queryKey:["reminders"]}),c.onFalse()},onError:()=>{}}),{mutate:H}=S({mutationFn:({id:n,payload:g})=>D.patch(T.reminders.edit+n,g),onSuccess:async()=>{F.success("New Reminder Has Been Modified!")},onSettled:async()=>{await y.invalidateQueries({queryKey:["reminders"]}),i.onFalse()},onError:n=>{console.log(n)}}),E=Y(),O=p.useCallback(n=>{E.push(C.dashboard.quotation.details(n))},[E]);return e.jsxs(e.Fragment,{children:[e.jsx($,{maxWidth:"xl",children:e.jsxs(I,{spacing:3,children:[e.jsx(le,{links:[{name:"Dashboard",href:C.dashboard.root},{name:"Reminders",href:C.dashboard.reminders.root}],action:e.jsx(b,{permission:R.ADD_REMINDER,children:e.jsx(P,{onClick:()=>a.onToggle(),variant:"contained",startIcon:e.jsx(h,{icon:"mingcute:add-line"}),children:"New Reminder"})})}),e.jsx(b,{permission:R.REMINDER_LIST,children:e.jsxs(X,{children:[e.jsx(Ie,{filters:r,onResetPage:s.onResetPage,dateError:l}),x&&e.jsx(ke,{filters:r,totalResults:o.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(Z,{sx:{position:"relative"},children:[e.jsx(Ce,{dense:s.dense,numSelected:s.selected.length,rowCount:o.length}),e.jsx(ee,{sx:{minHeight:444},children:e.jsxs(ge,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(je,{order:s.order,orderBy:s.orderBy,headLabel:ve,rowCount:o.length}),e.jsxs(fe,{children:[o.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((n,g)=>e.jsx(Fe,{row:n,index:s.page*s.rowsPerPage+g+1,selected:s.selected.includes(n.id),onEditRow:()=>q(n),onDeleteRow:()=>B(n.id),onViewFileRow:()=>N(n.file),onViewQuotationRow:O},n.id)),e.jsx(he,{height:s.dense?56:76,emptyRows:me(s.page,s.rowsPerPage,o.length)}),e.jsx(ue,{notFound:v})]})]})})]}),e.jsx(Re,{page:s.page,dense:s.dense,count:o.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})}),e.jsx(k,{open:a.value,onClose:a.onFalse}),e.jsx(Se,{reminder:L,open:i.value,onClose:i.onFalse,handler:H})]})};function Le({inputData:t,comparator:s,filters:a,dateError:i}){const{status:c,name:d,startDate:u,endDate:r}=a,l=t.map((o,m)=>[o,m]);return l.sort((o,m)=>{const x=s(o[0],m[0]);return x!==0?x:o[1]-m[1]}),t=l.map(o=>o[0]),d&&(t=t.filter(o=>o.id.toString().toLowerCase().indexOf(d.toLowerCase())!==-1||o.title.toLowerCase().indexOf(d.toLowerCase())!==-1||o.description.toLowerCase().indexOf(d.toLowerCase())!==-1)),c!=="all"&&(t=t.filter(o=>o.status===c)),i||u&&r&&(t=t.filter(o=>te(o.createdAt,u,r))),t}const Ae={title:`Reminders list | Dashboard - ${ne.site.name}`};function Wt(){const t=re({queryKey:["reminders"],queryFn:async()=>{const{data:s}=await D.get(T.reminders.list);return s}});return t.isPending||t.isLoading?e.jsx(se,{}):t.isError?e.jsx(ae,{route:C.dashboard.reminders.root}):e.jsxs(e.Fragment,{children:[e.jsx(oe,{children:e.jsxs("title",{children:[" ",Ae.title]})}),e.jsx(Be,{reminders:t.data})]})}export{Wt as default};