import{r as h,e7 as N,i as S,aP as z,g as G,p as P,j as e,l as Q,I as g,cQ as W,bR as J,S as k,e as M,B as w,aL as Y,c9 as X,A as Z,C as U,e8 as ee,db as se,aR as te,aS as B,e3 as F,de as ae,e2 as oe,dn as re,dP as ne,cY as le,dd as ie,ed as ce,dp as E,dm as $,dq as L,dT as de,H as ue}from"./index-CSsjSOSC.js";import{u as me,E as he}from"./error-block-CSkWkatt.js";import{u as H}from"./useMutation-YcdpOWmR.js";import{C as pe}from"./custom-breadcrumbs-BtGY489d.js";import{P as D}from"./permission-access-controller-1flaXLY-.js";import{g as xe,r as ge,e as be}from"./utils-MBUcMVfY.js";import{u as Ce}from"./use-table-pQBy9R-W.js";import{T as je}from"./table-no-data-DsS4s79H.js";import{T as fe}from"./table-empty-rows-HoaTYxMY.js";import{T as K,a as Pe,b as Te,c as ye}from"./table-head-custom-CA3WFWFJ.js";import{T as we}from"./table-selected-action-Bfko4loq.js";import{T as Se}from"./table-pagination-custom-BZ8Xadzh.js";import{b as ve}from"./format-number-BF7CDfp8.js";import{C as Re}from"./confirm-dialog-7_lLCFIr.js";import{T as f}from"./TableCell-CsgLQF73.js";import{A as Ee}from"./AvatarGroup-xOhY1uQx.js";import{O as _}from"./order-customer-create-dialog-DPwygXdM.js";import{T as $e}from"./TextField-CXJ43qVc.js";import{I as ke}from"./InputAdornment-C9j2zz_S.js";import{F as Fe,a as De,c as Ae}from"./filters-result-3o9VpIzO.js";import{C as Ie}from"./Chip-jDUxKRTF.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-DRktp9lF.js";import"./Checkbox-DHIrMODH.js";import"./TablePagination-BOu9ijkl.js";import"./KeyboardArrowRight-CZr18QH0.js";import"./LastPage-BRtTzAy-.js";import"./Select-S0DO28Vw.js";import"./Menu-DcPksF2q.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-C3VMpfvF.js";import"./FormControlLabel-mE7Ixr_k.js";import"./DialogContent-7kOqCf2V.js";import"./DialogTitle-CQbewVAB.js";import"./form-provider-RuHYmeCy.js";import"./FormHelperText-3AG-WguW.js";import"./Rating-CFvzjRIc.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DkTmHMBN.js";import"./index-DYmHzB12.js";import"./Slider-DsRDjN-7.js";import"./FormControl-Mrjg3Hrg.js";import"./FormLabel-D76jktbc.js";import"./RadioGroup-BveFsUJx.js";import"./FormGroup-BnPXu43B.js";import"./utils-DfB3ukDY.js";import"./index-CNxr2gWj.js";import"./countries-DSLisFCy.js";import"./Autocomplete-BMaQQCmK.js";import"./country-select-DdxRCnLY.js";import"./InputLabel-C1PS2W-Z.js";import"./upload-avatar-CaO-d8UW.js";import"./image-1sagoi-E.js";import"./DatePicker-szqtGyiO.js";import"./ListItem-yyOwr0Wj.js";import"./MobileDateTimePicker-C6_fzLo-.js";import"./Tabs-CE1nZKJE.js";import"./schema-helper-9F4NFULp.js";import"./LoadingButton-CVLyV_yw.js";import"./CircularProgress-BxvDM41b.js";const Oe=({row:s,index:t,selected:n,onDeleteRow:c,onEditRow:p})=>{const[d,b]=h.useState((s==null?void 0:s.lastOrders.length)>0),{t:u}=N("customer"),C=S(),i=S(),o=z(),m=G(),x=a=>a?`${a==null?void 0:a.street} ${a==null?void 0:a.country}.`:" - ",T=h.useCallback(a=>{m.push(P.dashboard.order.details(a))},[m]),y=h.useCallback(a=>{m.push(P.dashboard.customers.details(a))},[m]),A=h.useCallback(a=>{m.push(P.dashboard.product.details(a))},[m]),I=e.jsxs(K,{hover:!0,selected:n,children:[e.jsx(f,{children:(s==null?void 0:s.ref)||t||(s==null?void 0:s.id)}),e.jsx(f,{children:s==null?void 0:s.name}),e.jsx(f,{children:s==null?void 0:s.email}),e.jsx(f,{children:s==null?void 0:s.phoneNumber}),e.jsx(f,{children:x(s==null?void 0:s.address)}),e.jsxs(f,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[d&&e.jsx(Q,{color:i.value?"inherit":"default",onClick:i.onToggle,sx:{...i.value&&{bgcolor:"action.hover"}},children:e.jsx(g,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(Q,{color:o.open?"inherit":"default",onClick:o.onOpen,children:e.jsx(g,{icon:"eva:more-vertical-fill"})})]})]}),O=e.jsx(K,{children:e.jsx(f,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(W,{in:i.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(J,{sx:{m:1.5},children:s==null?void 0:s.lastOrders.map((a,V)=>{var v;return V===5?e.jsx(k,{alignItems:"flex-end",sx:{p:r=>r.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:r=>`solid 2px ${r.vars.palette.background.neutral}`}},children:e.jsx(M,{variant:"contained",size:"small",endIcon:e.jsx(g,{icon:"heroicons-outline:external-link"}),onClick:()=>{y(s.id)},children:`${u("listView.table.tableActions.seeMore")}`})},a.id):e.jsxs(k,{direction:"row",alignItems:"center",sx:{p:r=>r.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:r=>`solid 2px ${r.vars.palette.background.neutral}`}},children:[e.jsxs(w,{onClick:()=>T(a==null?void 0:a.id),sx:{width:240,display:"flex",gap:1,alignItems:"center",cursor:"pointer",marginRight:5},children:[e.jsx(g,{icon:"heroicons-outline:external-link"}),e.jsx("span",{children:a==null?void 0:a.ref})]}),e.jsx(w,{sx:{width:"100%",color:"error.main",fontWeight:"bold"},children:e.jsx(Ee,{sx:{[`& .${Y.avatar}`]:{width:24,height:24}},children:(v=a==null?void 0:a.productToOrder)==null?void 0:v.map(r=>{var R,l,j,q;return e.jsx(X,{title:`${(R=r==null?void 0:r.product)==null?void 0:R.name} | Quantity : ${r.quantity}`,children:e.jsx(Z,{sx:{cursor:"pointer"},alt:(l=r==null?void 0:r.product)==null?void 0:l.name,src:`${U.site.serverFileHost}${(j=r==null?void 0:r.product)==null?void 0:j.image}`,onClick:()=>{A(s.id)}},r==null?void 0:r.id)},(q=r==null?void 0:r.product)==null?void 0:q.id)})})}),e.jsx(w,{sx:{width:200,textAlign:"right"},children:a==null?void 0:a.status}),e.jsx(w,{sx:{width:340,textAlign:"right"},children:ve(ee((a==null?void 0:a.totalOrderAmount)-(a==null?void 0:a.totalOrderAmount)*((a==null?void 0:a.discount)/100),a==null?void 0:a.snapshotTaxPercentage))||"-"})]},a.id)})})})})});return e.jsxs(e.Fragment,{children:[I,O,e.jsx(se,{open:o.open,anchorEl:o.anchorEl,onClose:o.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(te,{children:[e.jsxs(B,{onClick:()=>{y(s.id),o.onClose()},children:[e.jsx(g,{icon:"solar:eye-bold"}),`${u("listView.table.tableActions.view")}`]}),e.jsx(D,{permission:F.EDIT_CUSTOMER,children:e.jsxs(B,{onClick:()=>{p(),o.onClose()},children:[e.jsx(g,{icon:"solar:pen-bold"}),`${u("listView.table.tableActions.edit")}`]})}),e.jsx(D,{permission:F.DELETE_CUSTOMER,children:e.jsxs(B,{onClick:()=>{C.onTrue(),o.onClose()},sx:{color:"error.main"},children:[e.jsx(g,{icon:"solar:trash-bin-trash-bold"}),`${u("listView.table.tableActions.delete")}`]})})]})}),e.jsx(Re,{open:C.value,onClose:C.onFalse,title:`${u("listView.messages.dialogDelete.title")}`,content:`${u("listView.messages.dialogDelete.text")}`,action:e.jsx(M,{variant:"contained",color:"error",onClick:c,children:`${u("listView.table.tableActions.delete")}`})})]})};function Ve({customer:s,open:t,onClose:n,handler:c}){return e.jsx(_,{customer:s,open:t,onClose:n,handler:c})}function Be({customer:s,open:t,onClose:n,handler:c}){return e.jsx(_,{customer:s,open:t,onClose:n,handler:c})}function Le({filters:s,onResetPage:t,options:n}){const{t:c}=N("customer"),p=h.useCallback(d=>{t(),s.setState({name:d.target.value})},[s,t]);return e.jsx(k,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx($e,{sx:{width:420},value:s.state.name,onChange:p,placeholder:`${c("listView.table.tableToolbar.searchPlaceholder")}`,InputProps:{startAdornment:e.jsx(ke,{position:"start",children:e.jsx(g,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function He({filters:s,totalResults:t,onResetPage:n,sx:c}){const p=h.useCallback(()=>{n(),s.setState({name:""})},[s,n]),d=h.useCallback(()=>{n(),s.onResetState()},[s,n]);return e.jsx(Fe,{totalResults:t,onReset:d,sx:c,children:e.jsx(De,{label:"Keyword:",isShow:!!s.state.name,children:e.jsx(Ie,{...Ae,label:s.state.name,onDelete:p})})})}const Me=({customers:s})=>{const t=Ce({defaultOrderBy:"id"}),{t:n}=N("customer"),c=S(),p=S(),d=S(),[b,u]=h.useState(s),[C,i]=h.useState(),o=ae({name:"",status:"all",startDate:null,endDate:null}),m=oe(o.state.startDate,o.state.endDate),x=Ne({inputData:b,comparator:xe(t.order,t.orderBy),filters:o.state,dateError:m});h.useEffect(()=>{u(s)},[s]);const T=ge(x,t.page,t.rowsPerPage),y=!!o.state.name||o.state.status!=="all"||!!o.state.startDate&&!!o.state.endDate,A=!x.length&&y||!x.length,I=h.useCallback(l=>{r(l)},[T.length,t,b]),O=h.useCallback(l=>{i(l),p.onToggle()},[T.length,t,b]),a=re(),{mutate:V}=H({mutationFn:l=>E.post($.customers.create,l),onSuccess:async()=>{L.success(`${n("listView.messages.toastMessages.createSuccess")}`)},onSettled:async()=>{await a.invalidateQueries({queryKey:["customers"]}),c.onFalse()},onError:l=>{console.log(l)}}),{mutate:v}=H({mutationFn:({id:l,payload:j})=>E.patch($.customers.edit+l,j),onSuccess:async()=>{L.success(`${n("listView.messages.toastMessages.editSuccess")}`)},onSettled:async()=>{await a.invalidateQueries({queryKey:["customers"]}),p.onFalse()},onError:l=>{console.log(l)}}),{mutate:r}=H({mutationFn:l=>E.delete($.customers.delete+l),onSuccess:async()=>{const l=b.filter(j=>j.id!==id);L.success(`${n("listView.messages.toastMessages.deleteSuccess")}`),u(l),t.onUpdatePageDeleteRow(T.length),d.onFalse()},onSettled:async()=>{await a.invalidateQueries({queryKey:["customers"]}),d.onFalse()},onError:()=>{}}),R=[{id:"customerId",label:"#",width:88},{id:"name",label:`${n("listView.table.tableHeader.customerName")}`,width:220},{id:"email",label:`${n("listView.table.tableHeader.email")}`,width:220},{id:"phoneNumber",label:`${n("listView.table.tableHeader.phoneNumber")}`,width:120},{id:"address",label:`${n("listView.table.tableHeader.address")}`,width:120},{id:"",width:88}];return e.jsxs(e.Fragment,{children:[e.jsx(ne,{maxWidth:"xl",children:e.jsxs(k,{spacing:3,children:[e.jsx(pe,{links:[{name:`${n("listView.breadCrumbsPageRootTitle")}`,href:P.dashboard.root},{name:`${n("listView.breadCrumbsParentPageTitle")}`,href:P.dashboard.customers.root}],action:e.jsx(D,{permission:F.ADD_CUSTOMER,children:e.jsx(M,{onClick:()=>c.onToggle(),variant:"contained",startIcon:e.jsx(g,{icon:"mingcute:add-line"}),children:`${n("listView.addNewCustomer")}`})})}),e.jsx(D,{permission:F.LIST_CUSTOMER,children:e.jsxs(le,{children:[e.jsx(Le,{filters:o,onResetPage:t.onResetPage,dateError:m}),y&&e.jsx(He,{filters:o,totalResults:x.length,onResetPage:t.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(w,{sx:{position:"relative"},children:[e.jsx(we,{dense:t.dense,numSelected:t.selected.length,rowCount:x.length}),e.jsx(ie,{sx:{minHeight:444},children:e.jsxs(Pe,{size:t.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Te,{order:t.order,orderBy:t.orderBy,headLabel:R,rowCount:x.length}),e.jsxs(ye,{children:[x.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage).map((l,j)=>e.jsx(Oe,{index:t.page*t.rowsPerPage+j+1,row:l,selected:t.selected.includes(l.id),onEditRow:()=>O(l),onDeleteRow:()=>I(l.id)},l.id)),e.jsx(fe,{height:t.dense?56:76,emptyRows:be(t.page,t.rowsPerPage,x.length)}),e.jsx(je,{notFound:A})]})]})})]}),e.jsx(Se,{page:t.page,dense:t.dense,count:x.length,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onChangeDense:t.onChangeDense,onRowsPerPageChange:t.onChangeRowsPerPage})]})})]})}),e.jsx(Be,{open:c.value,onClose:c.onFalse,handler:V}),e.jsx(Ve,{open:p.value,onClose:p.onFalse,handler:v,customer:C})]})};function Ne({inputData:s,comparator:t,filters:n,dateError:c}){const{status:p,name:d,startDate:b,endDate:u}=n,C=s.map((i,o)=>[i,o]);return C.sort((i,o)=>{const m=t(i[0],o[0]);return m!==0?m:i[1]-o[1]}),s=C.map(i=>i[0]),d&&(s=s.filter(i=>{var o;return i.id.toString().toLowerCase().indexOf(d.toLowerCase())!==-1||i.name.toLowerCase().indexOf(d.toLowerCase())!==-1||i.email.toLowerCase().indexOf(d.toLowerCase())!==-1||((o=i.phoneNumber)==null?void 0:o.toString().toLowerCase().indexOf(d.toLowerCase()))!==-1})),c||b&&u&&(s=s.filter(i=>ce(i.createdAt,b,u))),s}const qe={title:`Customers list | Dashboard - ${U.site.name}`};function Xs(){const s=me({queryKey:["customers"],queryFn:async()=>(await E.get($.customers.list)).data});return s.isPending||s.isLoading?e.jsx(de,{}):s.isError?e.jsx(he,{route:P.dashboard.customers.root}):e.jsxs(e.Fragment,{children:[e.jsx(ue,{children:e.jsxs("title",{children:[" ",qe.title]})}),e.jsx(Me,{customers:s.data})]})}export{Xs as default};
