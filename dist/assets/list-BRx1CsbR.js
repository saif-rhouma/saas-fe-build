import{Y as j,dn as E,a3 as _,j as e,d0 as z,e as T,I as h,$ as W,db as U,a6 as Y,a7 as P,e4 as f,r as u,S as V,de as G,e3 as J,dp as X,W as Z,p as C,dQ as ee,cY as te,B as se,dd as oe,ed as ae,dq as D,dm as y,dr as k,dU as ne,H as re,C as ie}from"./index-88qAwG8P.js";import{u as le,E as de}from"./error-block-BTff90qR.js";import{u as v}from"./useMutation-Bjm4Nnvr.js";import{d as ce}from"./download-file-CuMwnLeo.js";import{C as me}from"./custom-breadcrumbs-x7W5GMPl.js";import{P as w}from"./permission-access-controller-BVvbpBzt.js";import{g as pe,r as ue,e as he}from"./utils-MBUcMVfY.js";import{u as xe}from"./use-table-BYPgfP9k.js";import{T as ge}from"./table-no-data-wFoKraSE.js";import{T as be}from"./table-empty-rows-6krMqYw2.js";import{T as je,a as Ce,b as fe,c as we}from"./table-head-custom-g2OgtrHv.js";import{T as Re}from"./table-selected-action-DnALz1xy.js";import{T as Pe}from"./table-pagination-custom-Ds9-Dw8y.js";import{C as Te}from"./confirm-dialog-BdxUyq-O.js";import{T as b}from"./TableCell-Cl8UZGxf.js";import{R as A}from"./reminder-create-dialog-BMD07oTC.js";import{T as De}from"./TextField-CQpihH7F.js";import{I as ye}from"./InputAdornment-Bg-m_z4_.js";import{F as Ee,a as Fe,c as Se}from"./filters-result-B0DfRGbW.js";import{C as Ie}from"./Chip-yDeOg34u.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-vgDCQT8r.js";import"./Checkbox-Cpc8f1GH.js";import"./TablePagination-CrnuwEMO.js";import"./KeyboardArrowRight-fE7_2VJ7.js";import"./LastPage-B6xWbdc0.js";import"./Select-DFC-Q2QB.js";import"./Menu-BDUaDfAf.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DD8qHu7J.js";import"./FormControlLabel-ts_MkIWE.js";import"./DialogContent-F9o-_CVT.js";import"./DialogTitle-CvyYkdF0.js";import"./form-provider-DSldc_Gv.js";import"./FormHelperText-DA7jizKd.js";import"./Rating-4WKJ8FeG.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DKQnkQYm.js";import"./index-DZ-uLlaR.js";import"./Slider-Cdch2KEI.js";import"./FormControl-BXGEHd-f.js";import"./FormLabel-Ck5_RgM9.js";import"./RadioGroup-DZvtDFL6.js";import"./FormGroup-B0QesIKW.js";import"./utils-BDEKF9xP.js";import"./index-CySZofTa.js";import"./countries-DSLisFCy.js";import"./Autocomplete-Du1dNHWZ.js";import"./country-select-B-6neUw6.js";import"./InputLabel-B0kOUcWA.js";import"./upload-avatar-CSIBlxGF.js";import"./format-number-B8FPsWIV.js";import"./image-CkDsegDa.js";import"./DatePicker-C1aTSbY2.js";import"./ListItem-Bt-kWpW8.js";import"./MobileDateTimePicker-pEp8pQrB.js";import"./Tabs-gBKEx7yr.js";import"./upload-box-ad-BK5SyPw0.js";import"./schema-helper-_nyXaTEe.js";import"./LoadingButton-CM47tPre.js";import"./CircularProgress-DIm-Ts9z.js";const ke=({row:t,index:s,selected:n,onViewFileRow:i,onDeleteRow:l,onEditRow:d,onViewQuotationRow:x})=>{var r;const m=j(),{t:c}=E("reminders"),o=_(),p=e.jsxs(je,{hover:!0,selected:n,children:[e.jsx(b,{children:s||(t==null?void 0:t.id)}),e.jsx(b,{children:z(t.reminderDate)}),e.jsx(b,{children:t.title}),e.jsx(b,{children:(r=t.quotation)!=null&&r.ref?e.jsxs(T,{variant:"contained",size:"small",startIcon:e.jsx(h,{icon:"heroicons-outline:external-link"}),onClick:()=>{t.quotation.id&&x(t.quotation.id)},children:["#",t.quotation.ref]}):"-"}),e.jsx(b,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(W,{color:o.open?"inherit":"default",onClick:o.onOpen,children:e.jsx(h,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[p,e.jsx(U,{open:o.open,anchorEl:o.anchorEl,onClose:o.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(Y,{children:[(t==null?void 0:t.file)&&e.jsxs(P,{onClick:()=>{i(),o.onClose()},children:[e.jsx(h,{icon:"solar:cloud-download-bold"}),c("listView.table.tableActions.download")]}),e.jsx(w,{permission:f.ADD_REMINDER,children:e.jsxs(P,{onClick:()=>{d(),o.onClose()},children:[e.jsx(h,{icon:"solar:pen-bold"}),c("listView.table.tableActions.edit")]})}),e.jsx(w,{permission:f.ADD_REMINDER,children:e.jsxs(P,{onClick:()=>{m.onTrue(),o.onClose()},sx:{color:"error.main"},children:[e.jsx(h,{icon:"solar:trash-bin-trash-bold"}),c("listView.table.tableActions.delete")]})})]})}),e.jsx(Te,{open:m.value,onClose:m.onFalse,title:c("listView.messages.dialogDelete.title"),content:c("listView.messages.dialogDelete.text"),action:e.jsx(T,{variant:"contained",color:"error",onClick:l,children:c("listView.table.tableActions.delete")})})]})},ve=({reminder:t,open:s,onClose:n,handler:i})=>e.jsx(A,{currentReminder:t,open:s,onClose:n,handler:i});function Ve({filters:t,onResetPage:s,options:n}){const{t:i}=E("reminders"),l=u.useCallback(d=>{s(),t.setState({name:d.target.value})},[t,s]);return e.jsx(V,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(De,{sx:{width:420},value:t.state.name,onChange:l,placeholder:i("listView.table.tableToolbar.searchPlaceholder"),InputProps:{startAdornment:e.jsx(ye,{position:"start",children:e.jsx(h,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function Ae({filters:t,totalResults:s,onResetPage:n,sx:i}){const l=u.useCallback(()=>{n(),t.setState({name:""})},[t,n]),d=u.useCallback(()=>{n(),t.onResetState()},[t,n]);return e.jsx(Ee,{totalResults:s,onReset:d,sx:i,children:e.jsx(Fe,{label:"Keyword:",isShow:!!t.state.name,children:e.jsx(Ie,{...Se,label:t.state.name,onDelete:l})})})}const Be=({reminders:t})=>{const s=xe({defaultOrderBy:"orderNumber"}),{t:n}=E("reminders"),i=j(),l=j(),d=j(),x=[{id:"reminderId",label:"#",width:140},{id:"date",label:`${n("listView.table.tableHeader.date")}`,width:280},{id:"title",label:`${n("listView.table.tableHeader.title")}`},{id:"related",label:`${n("listView.table.tableHeader.related")}`,width:280},{id:"",width:88}],[m,c]=u.useState(t),o=G({name:"",status:"all",startDate:null,endDate:null}),p=J(o.state.startDate,o.state.endDate);u.useEffect(()=>{c(t)},[t]);const r=Le({inputData:m,comparator:pe(s.order,s.orderBy),filters:o.state,dateError:p}),R=ue(r,s.page,s.rowsPerPage),F=!!o.state.name||o.state.status!=="all"||!!o.state.startDate&&!!o.state.endDate,B=!r.length&&F||!r.length,L=u.useCallback(a=>{Q(a)},[R.length,s,m]),[q,M]=u.useState(),N=u.useCallback(a=>{M(a),l.onToggle()},[R.length,s,m]),S=X(),H=a=>{ce(a)},{mutate:Q}=v({mutationFn:a=>D.delete(y.reminders.delete+a),onSuccess:async a=>{const g=m.filter(K=>K.id!==a);k.success(n("listView.toastMessages.deleteSuccess")),c(g),s.onUpdatePageDeleteRow(R.length),d.onFalse()},onSettled:async()=>{await S.invalidateQueries({queryKey:["reminders"]}),d.onFalse()},onError:()=>{}}),{mutate:$}=v({mutationFn:({id:a,payload:g})=>D.patch(y.reminders.edit+a,g),onSuccess:async()=>{k.success(n("listView.toastMessages.editSuccess"))},onSettled:async()=>{await S.invalidateQueries({queryKey:["reminders"]}),l.onFalse()},onError:a=>{console.log(a)}}),I=Z(),O=u.useCallback(a=>{I.push(C.dashboard.quotation.details(a))},[I]);return e.jsxs(e.Fragment,{children:[e.jsx(ee,{maxWidth:"xl",children:e.jsxs(V,{spacing:3,children:[e.jsx(me,{links:[{name:`${n("listView.breadCrumbsPageRootTitle")}`,href:C.dashboard.root},{name:`${n("listView.breadCrumbsParentPageTitle")}`,href:C.dashboard.reminders.root}],action:e.jsx(w,{permission:f.ADD_REMINDER,children:e.jsx(T,{onClick:()=>i.onToggle(),variant:"contained",startIcon:e.jsx(h,{icon:"mingcute:add-line"}),children:n("listView.addNewReminder")})})}),e.jsx(w,{permission:f.REMINDER_LIST,children:e.jsxs(te,{children:[e.jsx(Ve,{filters:o,onResetPage:s.onResetPage,dateError:p}),F&&e.jsx(Ae,{filters:o,totalResults:r.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(se,{sx:{position:"relative"},children:[e.jsx(Re,{dense:s.dense,numSelected:s.selected.length,rowCount:r.length}),e.jsx(oe,{sx:{minHeight:444},children:e.jsxs(Ce,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(fe,{order:s.order,orderBy:s.orderBy,headLabel:x,rowCount:r.length}),e.jsxs(we,{children:[r.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((a,g)=>e.jsx(ke,{row:a,index:s.page*s.rowsPerPage+g+1,selected:s.selected.includes(a.id),onEditRow:()=>N(a),onDeleteRow:()=>L(a.id),onViewFileRow:()=>H(a.file),onViewQuotationRow:O},a.id)),e.jsx(be,{height:s.dense?56:76,emptyRows:he(s.page,s.rowsPerPage,r.length)}),e.jsx(ge,{notFound:B})]})]})})]}),e.jsx(Pe,{page:s.page,dense:s.dense,count:r.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})}),e.jsx(A,{open:i.value,onClose:i.onFalse}),e.jsx(ve,{reminder:q,open:l.value,onClose:l.onFalse,handler:$})]})};function Le({inputData:t,comparator:s,filters:n,dateError:i}){const{status:l,name:d,startDate:x,endDate:m}=n,c=t.map((o,p)=>[o,p]);return c.sort((o,p)=>{const r=s(o[0],p[0]);return r!==0?r:o[1]-p[1]}),t=c.map(o=>o[0]),d&&(t=t.filter(o=>o.id.toString().toLowerCase().indexOf(d.toLowerCase())!==-1||o.title.toLowerCase().indexOf(d.toLowerCase())!==-1||o.description.toLowerCase().indexOf(d.toLowerCase())!==-1)),l!=="all"&&(t=t.filter(o=>o.status===l)),i||x&&m&&(t=t.filter(o=>ae(o.createdAt,x,m))),t}const qe={title:`Reminders list | Dashboard - ${ie.site.name}`};function Ut(){const t=le({queryKey:["reminders"],queryFn:async()=>{const{data:s}=await D.get(y.reminders.list);return s}});return t.isPending||t.isLoading?e.jsx(ne,{}):t.isError?e.jsx(de,{route:C.dashboard.reminders.root}):e.jsxs(e.Fragment,{children:[e.jsx(re,{children:e.jsxs("title",{children:[" ",qe.title]})}),e.jsx(Be,{reminders:t.data})]})}export{Ut as default};
