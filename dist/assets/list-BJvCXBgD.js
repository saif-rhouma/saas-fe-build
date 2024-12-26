import{r as h,dP as N,i as S,aN as z,g as G,p as P,j as e,l as q,I as g,cQ as W,bP as J,S as k,e as M,B as w,aJ as Y,c7 as X,A as Z,C as U,e8 as ee,db as se,aP as te,aQ as B,e4 as F,de as ae,e3 as oe,dn as re,dQ as ne,cY as le,dd as ie,ed as ce,dp as R,dm as $,dq as L,dU as de,H as ue}from"./index-BEaGYMEI.js";import{u as me,E as he}from"./error-block-BQYINy50.js";import{u as H}from"./useMutation-CD7lT4vI.js";import{C as pe}from"./custom-breadcrumbs-D4hwk-rw.js";import{P as D}from"./permission-access-controller-Cc7F7Sq7.js";import{g as xe,r as ge,e as be}from"./utils-MBUcMVfY.js";import{u as Ce}from"./use-table-DsQxT_g8.js";import{T as je}from"./table-no-data-1VG6qoaS.js";import{T as fe}from"./table-empty-rows-D7ODdqoL.js";import{T as K,a as Pe,b as Te,c as ye}from"./table-head-custom-Drg40nu1.js";import{T as we}from"./table-selected-action-4MJ4AHc-.js";import{T as Se}from"./table-pagination-custom-B8a_JMe_.js";import{b as ve}from"./format-number-JDGLw5r5.js";import{C as Ee}from"./confirm-dialog-B_hHuFtb.js";import{T as f}from"./TableCell-CzBf4-Ov.js";import{A as Re}from"./AvatarGroup-BL49mAPT.js";import{O as _}from"./order-customer-create-dialog-DwB8FjJ5.js";import{T as $e}from"./TextField-CIxpyOlN.js";import{I as ke}from"./InputAdornment-CGsQ7T7u.js";import{F as Fe,a as De,c as Ae}from"./filters-result-DA5pDRfI.js";import{C as Ie}from"./Chip-Db-a91wo.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-DxNFQfFL.js";import"./Checkbox-DRhnNWXi.js";import"./TablePagination-BtzWghPM.js";import"./KeyboardArrowRight-BWGrV5E8.js";import"./LastPage-BtJVqGJo.js";import"./Select-C-U3VYQj.js";import"./Menu-Dc9eDgdb.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-Cx_XAmin.js";import"./FormControlLabel-BO7gRcil.js";import"./DialogContent-kX6pwS8I.js";import"./DialogTitle-CjPJnsJT.js";import"./form-provider-D1JqQzDy.js";import"./FormHelperText-BJ35fbuN.js";import"./Rating-OrTvPT5o.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-BIhbmUVt.js";import"./index-MqrcwFfK.js";import"./Slider-Vpiw_yof.js";import"./FormControl-2hnEuYCX.js";import"./FormLabel-DT9mGYCJ.js";import"./RadioGroup-CBePuX0v.js";import"./FormGroup-Co3Xm8J_.js";import"./utils-BEJZLJ_B.js";import"./index-DHKdtuyp.js";import"./countries-DSLisFCy.js";import"./Autocomplete-DxNaZqwA.js";import"./country-select-UHhuvlSO.js";import"./InputLabel-CeWPpGeQ.js";import"./upload-avatar-Bt3nnzfi.js";import"./image-C-zCjJjA.js";import"./DatePicker-CrD84yY4.js";import"./ListItem-BFzJ2Xb7.js";import"./MobileDateTimePicker-hl_QFTv-.js";import"./Tabs-CAp3wR44.js";import"./schema-helper-B8q_BDb0.js";import"./LoadingButton-EriFvYzy.js";import"./CircularProgress-Dqum4YNW.js";const Oe=({row:s,index:t,selected:n,onDeleteRow:c,onEditRow:p})=>{const[d,b]=h.useState((s==null?void 0:s.lastOrders.length)>0),{t:u}=N("customer"),C=S(),i=S(),o=z(),m=G(),x=a=>a?`${a==null?void 0:a.street} ${a==null?void 0:a.country}.`:" - ",T=h.useCallback(a=>{m.push(P.dashboard.order.details(a))},[m]),y=h.useCallback(a=>{m.push(P.dashboard.customers.details(a))},[m]),A=h.useCallback(a=>{m.push(P.dashboard.product.details(a))},[m]),I=e.jsxs(K,{hover:!0,selected:n,children:[e.jsx(f,{children:(s==null?void 0:s.ref)||t||(s==null?void 0:s.id)}),e.jsx(f,{children:s==null?void 0:s.name}),e.jsx(f,{children:s==null?void 0:s.email}),e.jsx(f,{children:s==null?void 0:s.phoneNumber}),e.jsx(f,{children:x(s==null?void 0:s.address)}),e.jsxs(f,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[d&&e.jsx(q,{color:i.value?"inherit":"default",onClick:i.onToggle,sx:{...i.value&&{bgcolor:"action.hover"}},children:e.jsx(g,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(q,{color:o.open?"inherit":"default",onClick:o.onOpen,children:e.jsx(g,{icon:"eva:more-vertical-fill"})})]})]}),O=e.jsx(K,{children:e.jsx(f,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(W,{in:i.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(J,{sx:{m:1.5},children:s==null?void 0:s.lastOrders.map((a,V)=>{var v;return V===5?e.jsx(k,{alignItems:"flex-end",sx:{p:r=>r.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:r=>`solid 2px ${r.vars.palette.background.neutral}`}},children:e.jsx(M,{variant:"contained",size:"small",endIcon:e.jsx(g,{icon:"heroicons-outline:external-link"}),onClick:()=>{y(s.id)},children:`${u("listView.table.tableActions.seeMore")}`})},a.id):e.jsxs(k,{direction:"row",alignItems:"center",sx:{p:r=>r.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:r=>`solid 2px ${r.vars.palette.background.neutral}`}},children:[e.jsxs(w,{onClick:()=>T(a==null?void 0:a.id),sx:{width:240,display:"flex",gap:1,alignItems:"center",cursor:"pointer",marginRight:5},children:[e.jsx(g,{icon:"heroicons-outline:external-link"}),e.jsx("span",{children:a==null?void 0:a.ref})]}),e.jsx(w,{sx:{width:"100%",color:"error.main",fontWeight:"bold"},children:e.jsx(Re,{sx:{[`& .${Y.avatar}`]:{width:24,height:24}},children:(v=a==null?void 0:a.productToOrder)==null?void 0:v.map(r=>{var E,l,j,Q;return e.jsx(X,{title:`${(E=r==null?void 0:r.product)==null?void 0:E.name} | Quantity : ${r.quantity}`,children:e.jsx(Z,{sx:{cursor:"pointer"},alt:(l=r==null?void 0:r.product)==null?void 0:l.name,src:`${U.site.serverFileHost}${(j=r==null?void 0:r.product)==null?void 0:j.image}`,onClick:()=>{A(s.id)}},r==null?void 0:r.id)},(Q=r==null?void 0:r.product)==null?void 0:Q.id)})})}),e.jsx(w,{sx:{width:200,textAlign:"right"},children:a==null?void 0:a.status}),e.jsx(w,{sx:{width:340,textAlign:"right"},children:ve(ee((a==null?void 0:a.totalOrderAmount)-(a==null?void 0:a.totalOrderAmount)*((a==null?void 0:a.discount)/100),a==null?void 0:a.snapshotTaxPercentage))||"-"})]},a.id)})})})})});return e.jsxs(e.Fragment,{children:[I,O,e.jsx(se,{open:o.open,anchorEl:o.anchorEl,onClose:o.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(te,{children:[e.jsxs(B,{onClick:()=>{y(s.id),o.onClose()},children:[e.jsx(g,{icon:"solar:eye-bold"}),`${u("listView.table.tableActions.view")}`]}),e.jsx(D,{permission:F.EDIT_CUSTOMER,children:e.jsxs(B,{onClick:()=>{p(),o.onClose()},children:[e.jsx(g,{icon:"solar:pen-bold"}),`${u("listView.table.tableActions.edit")}`]})}),e.jsx(D,{permission:F.DELETE_CUSTOMER,children:e.jsxs(B,{onClick:()=>{C.onTrue(),o.onClose()},sx:{color:"error.main"},children:[e.jsx(g,{icon:"solar:trash-bin-trash-bold"}),`${u("listView.table.tableActions.delete")}`]})})]})}),e.jsx(Ee,{open:C.value,onClose:C.onFalse,title:`${u("listView.messages.dialogDelete.title")}`,content:`${u("listView.messages.dialogDelete.text")}`,action:e.jsx(M,{variant:"contained",color:"error",onClick:c,children:`${u("listView.table.tableActions.delete")}`})})]})};function Ve({customer:s,open:t,onClose:n,handler:c}){return e.jsx(_,{customer:s,open:t,onClose:n,handler:c})}function Be({customer:s,open:t,onClose:n,handler:c}){return e.jsx(_,{customer:s,open:t,onClose:n,handler:c})}function Le({filters:s,onResetPage:t,options:n}){const{t:c}=N("customer"),p=h.useCallback(d=>{t(),s.setState({name:d.target.value})},[s,t]);return e.jsx(k,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx($e,{sx:{width:420},value:s.state.name,onChange:p,placeholder:`${c("listView.table.tableToolbar.searchPlaceholder")}`,InputProps:{startAdornment:e.jsx(ke,{position:"start",children:e.jsx(g,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function He({filters:s,totalResults:t,onResetPage:n,sx:c}){const p=h.useCallback(()=>{n(),s.setState({name:""})},[s,n]),d=h.useCallback(()=>{n(),s.onResetState()},[s,n]);return e.jsx(Fe,{totalResults:t,onReset:d,sx:c,children:e.jsx(De,{label:"Keyword:",isShow:!!s.state.name,children:e.jsx(Ie,{...Ae,label:s.state.name,onDelete:p})})})}const Me=({customers:s})=>{const t=Ce({defaultOrderBy:"id"}),{t:n}=N("customer"),c=S(),p=S(),d=S(),[b,u]=h.useState(s),[C,i]=h.useState(),o=ae({name:"",status:"all",startDate:null,endDate:null}),m=oe(o.state.startDate,o.state.endDate),x=Ne({inputData:b,comparator:xe(t.order,t.orderBy),filters:o.state,dateError:m});h.useEffect(()=>{u(s)},[s]);const T=ge(x,t.page,t.rowsPerPage),y=!!o.state.name||o.state.status!=="all"||!!o.state.startDate&&!!o.state.endDate,A=!x.length&&y||!x.length,I=h.useCallback(l=>{r(l)},[T.length,t,b]),O=h.useCallback(l=>{i(l),p.onToggle()},[T.length,t,b]),a=re(),{mutate:V}=H({mutationFn:l=>R.post($.customers.create,l),onSuccess:async()=>{L.success(`${n("listView.messages.toastMessages.createSuccess")}`)},onSettled:async()=>{await a.invalidateQueries({queryKey:["customers"]}),c.onFalse()},onError:l=>{console.log(l)}}),{mutate:v}=H({mutationFn:({id:l,payload:j})=>R.patch($.customers.edit+l,j),onSuccess:async()=>{L.success(`${n("listView.messages.toastMessages.editSuccess")}`)},onSettled:async()=>{await a.invalidateQueries({queryKey:["customers"]}),p.onFalse()},onError:l=>{console.log(l)}}),{mutate:r}=H({mutationFn:l=>R.delete($.customers.delete+l),onSuccess:async()=>{const l=b.filter(j=>j.id!==id);L.success(`${n("listView.messages.toastMessages.deleteSuccess")}`),u(l),t.onUpdatePageDeleteRow(T.length),d.onFalse()},onSettled:async()=>{await a.invalidateQueries({queryKey:["customers"]}),d.onFalse()},onError:()=>{}}),E=[{id:"customerId",label:"#",width:88},{id:"name",label:`${n("listView.table.tableHeader.customerName")}`,width:220},{id:"email",label:`${n("listView.table.tableHeader.email")}`,width:220},{id:"phoneNumber",label:`${n("listView.table.tableHeader.phoneNumber")}`,width:120},{id:"address",label:`${n("listView.table.tableHeader.address")}`,width:120},{id:"",width:88}];return e.jsxs(e.Fragment,{children:[e.jsx(ne,{maxWidth:"xl",children:e.jsxs(k,{spacing:3,children:[e.jsx(pe,{links:[{name:`${n("listView.breadCrumbsPageRootTitle")}`,href:P.dashboard.root},{name:`${n("listView.breadCrumbsParentPageTitle")}`,href:P.dashboard.customers.root}],action:e.jsx(D,{permission:F.ADD_CUSTOMER,children:e.jsx(M,{onClick:()=>c.onToggle(),variant:"contained",startIcon:e.jsx(g,{icon:"mingcute:add-line"}),children:`${n("listView.addNewCustomer")}`})})}),e.jsx(D,{permission:F.LIST_CUSTOMER,children:e.jsxs(le,{children:[e.jsx(Le,{filters:o,onResetPage:t.onResetPage,dateError:m}),y&&e.jsx(He,{filters:o,totalResults:x.length,onResetPage:t.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(w,{sx:{position:"relative"},children:[e.jsx(we,{dense:t.dense,numSelected:t.selected.length,rowCount:x.length}),e.jsx(ie,{sx:{minHeight:444},children:e.jsxs(Pe,{size:t.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Te,{order:t.order,orderBy:t.orderBy,headLabel:E,rowCount:x.length}),e.jsxs(ye,{children:[x.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage).map((l,j)=>e.jsx(Oe,{index:t.page*t.rowsPerPage+j+1,row:l,selected:t.selected.includes(l.id),onEditRow:()=>O(l),onDeleteRow:()=>I(l.id)},l.id)),e.jsx(fe,{height:t.dense?56:76,emptyRows:be(t.page,t.rowsPerPage,x.length)}),e.jsx(je,{notFound:A})]})]})})]}),e.jsx(Se,{page:t.page,dense:t.dense,count:x.length,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onChangeDense:t.onChangeDense,onRowsPerPageChange:t.onChangeRowsPerPage})]})})]})}),e.jsx(Be,{open:c.value,onClose:c.onFalse,handler:V}),e.jsx(Ve,{open:p.value,onClose:p.onFalse,handler:v,customer:C})]})};function Ne({inputData:s,comparator:t,filters:n,dateError:c}){const{status:p,name:d,startDate:b,endDate:u}=n,C=s.map((i,o)=>[i,o]);return C.sort((i,o)=>{const m=t(i[0],o[0]);return m!==0?m:i[1]-o[1]}),s=C.map(i=>i[0]),d&&(s=s.filter(i=>{var o;return i.id.toString().toLowerCase().indexOf(d.toLowerCase())!==-1||i.name.toLowerCase().indexOf(d.toLowerCase())!==-1||i.email.toLowerCase().indexOf(d.toLowerCase())!==-1||((o=i.phoneNumber)==null?void 0:o.toString().toLowerCase().indexOf(d.toLowerCase()))!==-1})),c||b&&u&&(s=s.filter(i=>ce(i.createdAt,b,u))),s}const Qe={title:`Customers list | Dashboard - ${U.site.name}`};function Xs(){const s=me({queryKey:["customers"],queryFn:async()=>(await R.get($.customers.list)).data});return s.isPending||s.isLoading?e.jsx(de,{}):s.isError?e.jsx(he,{route:P.dashboard.customers.root}):e.jsxs(e.Fragment,{children:[e.jsx(ue,{children:e.jsxs("title",{children:[" ",Qe.title]})}),e.jsx(Me,{customers:s.data})]})}export{Xs as default};
