import{i as f,aP as O,j as e,d0 as K,l as _,I as u,db as Q,aR as z,aS as b,e3 as C,e as F,r as p,S,de as V,e2 as W,dn as G,dP as J,p as w,cY as U,B as Y,dd as $,eh as X,dp as P,dm as D,dq as y,dT as Z,H as ee,C as te}from"./index-DSZ8-SnN.js";import{u as se,E as oe}from"./error-block-Bfei_nF0.js";import{u as E}from"./useMutation-DusrxMaX.js";import{d as re}from"./download-file-BDHjeoCA.js";import{C as ne}from"./custom-breadcrumbs-D_ovYyL8.js";import{P as R}from"./permission-access-controller-BdKtae4H.js";import{g as ae,r as ie,e as le}from"./utils-MBUcMVfY.js";import{u as de}from"./use-table-CxMdT4pf.js";import{T as me}from"./table-no-data-DwOuDKHk.js";import{T as ce}from"./table-empty-rows-BaAfroyB.js";import{T as pe,a as he,b as ue,c as xe}from"./table-head-custom-YWIPj6NO.js";import{T as ge}from"./table-selected-action-xpEV6Xbv.js";import{T as je}from"./table-pagination-custom-DI2JWg0p.js";import{C as fe}from"./confirm-dialog-CkFQTJ92.js";import{T as j}from"./TableCell-DSOEY65A.js";import{R as I}from"./reminder-create-dialog-C9VroThh.js";import{T as Ce}from"./TextField-DXnGVnKc.js";import{I as Re}from"./InputAdornment-DQTsYq75.js";import{F as be,a as we,c as Pe}from"./filters-result--GXLZrQa.js";import{C as De}from"./Chip-BxDt4Lxe.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-BIlFgVWF.js";import"./Checkbox-DIewUcg3.js";import"./TablePagination-DMx1QqWY.js";import"./KeyboardArrowRight-ySj1HR2l.js";import"./LastPage-DNd_MO8z.js";import"./Select-bvm1T7cr.js";import"./Menu-WNpJDxC0.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DUSf-v3M.js";import"./FormControlLabel-DcdZLABF.js";import"./DialogContent-9Yn0EsJP.js";import"./DialogTitle-kOHEE1rt.js";import"./form-provider-Cfa9nJ2G.js";import"./FormHelperText-CAtOlLkP.js";import"./Rating-CJRd3C9A.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-C8mFRUZ0.js";import"./index-ClfPQVwT.js";import"./Slider-DvPw8R3F.js";import"./FormControl-DVwuE-Z3.js";import"./FormLabel-D8PgMfa3.js";import"./RadioGroup-B-VQ3Ex7.js";import"./FormGroup-BoA-oXkm.js";import"./utils-DfMGJYQ4.js";import"./index-CHAbpX0m.js";import"./countries-DSLisFCy.js";import"./Autocomplete-Ke2RMla7.js";import"./country-select-0bcGB8RG.js";import"./InputLabel-Dt93HXfK.js";import"./upload-avatar-BRDUoqCR.js";import"./format-number-Cz1FSQLM.js";import"./image-CnfTgJRa.js";import"./DatePicker-CHiyzFIc.js";import"./ListItem-CKvXkhKm.js";import"./MobileDateTimePicker-BLXY58Hs.js";import"./Tabs-CZeN0YJj.js";import"./schema-helper-hhXgycyC.js";import"./LoadingButton-Dx3EK8-Y.js";import"./CircularProgress-MhlsCNnq.js";const Te=({row:s,index:t,selected:a,onViewFileRow:i,onDeleteRow:d,onEditRow:l})=>{const m=f(),r=O(),h=e.jsxs(pe,{hover:!0,selected:a,children:[e.jsx(j,{children:t||(s==null?void 0:s.id)}),e.jsx(j,{children:K(s.reminderDate)}),e.jsx(j,{children:s.title}),e.jsx(j,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(_,{color:r.open?"inherit":"default",onClick:r.onOpen,children:e.jsx(u,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[h,e.jsx(Q,{open:r.open,anchorEl:r.anchorEl,onClose:r.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(z,{children:[(s==null?void 0:s.file)&&e.jsxs(b,{onClick:()=>{i(),r.onClose()},children:[e.jsx(u,{icon:"solar:cloud-download-bold"}),"Download"]}),e.jsx(R,{permission:C.ADD_REMINDER,children:e.jsxs(b,{onClick:()=>{l(),r.onClose()},children:[e.jsx(u,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(R,{permission:C.ADD_REMINDER,children:e.jsxs(b,{onClick:()=>{m.onTrue(),r.onClose()},sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(fe,{open:m.value,onClose:m.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(F,{variant:"contained",color:"error",onClick:d,children:"Delete"})})]})},ye=({reminder:s,open:t,onClose:a,handler:i})=>e.jsx(I,{currentReminder:s,open:t,onClose:a,handler:i});function Ee({filters:s,onResetPage:t,options:a}){const i=p.useCallback(d=>{t(),s.setState({name:d.target.value})},[s,t]);return e.jsx(S,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Ce,{sx:{width:420},value:s.state.name,onChange:i,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(Re,{position:"start",children:e.jsx(u,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function Fe({filters:s,totalResults:t,onResetPage:a,sx:i}){const d=p.useCallback(()=>{a(),s.setState({name:""})},[s,a]),l=p.useCallback(()=>{a(),s.onResetState()},[s,a]);return e.jsx(be,{totalResults:t,onReset:l,sx:i,children:e.jsx(we,{label:"Keyword:",isShow:!!s.state.name,children:e.jsx(De,{...Pe,label:s.state.name,onDelete:d})})})}const Se=[{id:"reminderId",label:"#",width:140},{id:"date",label:"Date",width:280},{id:"title",label:"Title"},{id:"",width:88}],Ie=({reminders:s})=>{const t=de({defaultOrderBy:"orderNumber"}),a=f(),i=f(),d=f(),[l,m]=p.useState(s),r=V({name:"",status:"all",startDate:null,endDate:null}),h=W(r.state.startDate,r.state.endDate);p.useEffect(()=>{m(s)},[s]);const o=ve({inputData:l,comparator:ae(t.order,t.orderBy),filters:r.state,dateError:h}),c=ie(o,t.page,t.rowsPerPage),x=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate,v=!o.length&&x||!o.length,k=p.useCallback(n=>{M(n)},[c.length,t,l]),[B,A]=p.useState(),L=p.useCallback(n=>{A(n),i.onToggle()},[c.length,t,l]),T=G(),N=n=>{re(n)},{mutate:M}=E({mutationFn:n=>P.delete(D.reminders.delete+n),onSuccess:async n=>{const g=l.filter(H=>H.id!==n);y.success("Delete success!"),m(g),t.onUpdatePageDeleteRow(c.length),d.onFalse()},onSettled:async()=>{await T.invalidateQueries({queryKey:["reminders"]}),d.onFalse()},onError:()=>{}}),{mutate:q}=E({mutationFn:({id:n,payload:g})=>P.patch(D.reminders.edit+n,g),onSuccess:async()=>{y.success("New Reminder Has Been Modified!")},onSettled:async()=>{await T.invalidateQueries({queryKey:["reminders"]}),i.onFalse()},onError:n=>{console.log(n)}});return e.jsxs(e.Fragment,{children:[e.jsx(J,{maxWidth:"xl",children:e.jsxs(S,{spacing:3,children:[e.jsx(ne,{links:[{name:"Dashboard",href:w.dashboard.root},{name:"Reminders",href:w.dashboard.reminders.root}],action:e.jsx(R,{permission:C.ADD_REMINDER,children:e.jsx(F,{onClick:()=>a.onToggle(),variant:"contained",startIcon:e.jsx(u,{icon:"mingcute:add-line"}),children:"Add Reminder"})})}),e.jsx(R,{permission:C.REMINDER_LIST,children:e.jsxs(U,{children:[e.jsx(Ee,{filters:r,onResetPage:t.onResetPage,dateError:h}),x&&e.jsx(Fe,{filters:r,totalResults:o.length,onResetPage:t.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(Y,{sx:{position:"relative"},children:[e.jsx(ge,{dense:t.dense,numSelected:t.selected.length,rowCount:o.length}),e.jsx($,{sx:{minHeight:444},children:e.jsxs(he,{size:t.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(ue,{order:t.order,orderBy:t.orderBy,headLabel:Se,rowCount:o.length}),e.jsxs(xe,{children:[o.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage).map((n,g)=>e.jsx(Te,{row:n,index:t.page*t.rowsPerPage+g+1,selected:t.selected.includes(n.id),onEditRow:()=>L(n),onDeleteRow:()=>k(n.id),onViewFileRow:()=>N(n.file)},n.id)),e.jsx(ce,{height:t.dense?56:76,emptyRows:le(t.page,t.rowsPerPage,o.length)}),e.jsx(me,{notFound:v})]})]})})]}),e.jsx(je,{page:t.page,dense:t.dense,count:o.length,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onChangeDense:t.onChangeDense,onRowsPerPageChange:t.onChangeRowsPerPage})]})})]})}),e.jsx(I,{open:a.value,onClose:a.onFalse}),e.jsx(ye,{reminder:B,open:i.value,onClose:i.onFalse,handler:q})]})};function ve({inputData:s,comparator:t,filters:a,dateError:i}){const{status:d,name:l,startDate:m,endDate:r}=a,h=s.map((o,c)=>[o,c]);return h.sort((o,c)=>{const x=t(o[0],c[0]);return x!==0?x:o[1]-c[1]}),s=h.map(o=>o[0]),l&&(s=s.filter(o=>o.id.toString().toLowerCase().indexOf(l.toLowerCase())!==-1||o.title.toLowerCase().indexOf(l.toLowerCase())!==-1||o.description.toLowerCase().indexOf(l.toLowerCase())!==-1)),d!=="all"&&(s=s.filter(o=>o.status===d)),i||m&&r&&(s=s.filter(o=>X(o.createdAt,m,r))),s}const ke={title:`Reminders list | Dashboard - ${te.site.name}`};function _t(){const s=se({queryKey:["reminders"],queryFn:async()=>{const{data:t}=await P.get(D.reminders.list);return t}});return s.isPending||s.isLoading?e.jsx(Z,{}):s.isError?e.jsx(oe,{route:w.dashboard.reminders.root}):e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:e.jsxs("title",{children:[" ",ke.title]})}),e.jsx(Ie,{reminders:s.data})]})}export{_t as default};
