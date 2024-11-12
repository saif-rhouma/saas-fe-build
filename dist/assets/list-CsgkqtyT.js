import{r as u,i as v,aP as U,g as _,p as T,j as e,l as q,I as g,cQ as z,bR as G,S as w,e as H,B as S,aL as W,c9 as J,A as Y,C as K,e2 as X,db as Z,aR as ee,aS as L,e3 as A,en as se,de as te,ec as oe,dn as re,dP as ae,cY as ne,dd as le,ed as ie,dp as k,dm as F,dq as N,dT as ce,H as de}from"./index-BUkc7Fsf.js";import{u as ue,E as me}from"./error-block-BMnFuAQR.js";import{u as $}from"./useMutation-Bu3_VPGY.js";import{C as he}from"./custom-breadcrumbs-CL0q_6e2.js";import{P as I}from"./permission-access-controller-D8InZjLn.js";import{g as pe,r as xe,e as ge}from"./utils-MBUcMVfY.js";import{u as Ce}from"./use-table-D-rmPlGf.js";import{T as je}from"./table-no-data-L_vtbHNw.js";import{T as be}from"./table-empty-rows-CnKwt_g5.js";import{T as Q,a as fe,b as ye,c as Te}from"./table-head-custom-BG1xHw-X.js";import{T as Pe}from"./table-selected-action-CtrtJ4bi.js";import{T as Se}from"./table-pagination-custom-CRcGgWz1.js";import{b as ve}from"./format-number-DclRACXZ.js";import{C as Ee}from"./confirm-dialog-DkJx0hQ4.js";import{T as f}from"./TableCell-pnBacSd4.js";import{A as Re}from"./AvatarGroup-Dz7jKuBX.js";import{O as V}from"./order-customer-create-dialog-BoPJ2I_m.js";import{T as De}from"./TextField-borq0bL5.js";import{I as ke}from"./InputAdornment-Cb7Fe9N5.js";import{F as Fe,a as we,c as Ae}from"./filters-result-BB5MQLfR.js";import{C as Ie}from"./Chip-CIa4MnwU.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-B0vrpYbF.js";import"./Checkbox-CBb5w9Zu.js";import"./TablePagination-YMeSIc_D.js";import"./KeyboardArrowRight-BHo19vWg.js";import"./LastPage-CgQNJj_q.js";import"./Select-BqjrNlWW.js";import"./Menu-DnxcDa3h.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-eA2S-h6o.js";import"./FormControlLabel-CXIRs7Ob.js";import"./DialogContent-Cp4PxtSn.js";import"./DialogTitle-3bRr4EI2.js";import"./form-provider-QqBD3CGU.js";import"./FormHelperText-FWMNt2lu.js";import"./Rating-BgtJ1bAx.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DdXAAWE4.js";import"./index-CDZtdS6z.js";import"./Slider-CE7Mn5hI.js";import"./FormControl-Da6RRZ3T.js";import"./FormLabel-ClNwb4vl.js";import"./RadioGroup-Bh3tQGDE.js";import"./FormGroup-Dt3DcMhH.js";import"./utils-Y0NsjulE.js";import"./index-DIvWYC7g.js";import"./countries-DSLisFCy.js";import"./Autocomplete-DZc0TKvu.js";import"./country-select-DSGrTyy5.js";import"./InputLabel-eL3TaEhp.js";import"./upload-avatar-CurHEeLB.js";import"./image-CCdN6W1s.js";import"./DatePicker-BA7hh0CT.js";import"./ListItem-VlWOepYx.js";import"./MobileDateTimePicker-wae2GaXa.js";import"./Tabs-CJtyXYLt.js";import"./schema-helper-DJ_CxDTh.js";import"./LoadingButton-D4ACVqvX.js";import"./CircularProgress-GOJrBTqZ.js";const Oe=({row:s,index:t,selected:c,onDeleteRow:i,onEditRow:m})=>{const[d,C]=u.useState((s==null?void 0:s.lastOrders.length)>0),p=v(),x=v(),a=U(),n=_(),b=o=>o?`${o==null?void 0:o.street} ${o==null?void 0:o.country}.`:" - ",h=u.useCallback(o=>{n.push(T.dashboard.order.details(o))},[n]),y=u.useCallback(o=>{n.push(T.dashboard.customers.details(o))},[n]),E=u.useCallback(o=>{n.push(T.dashboard.product.details(o))},[n]),O=e.jsxs(Q,{hover:!0,selected:c,children:[e.jsx(f,{children:(s==null?void 0:s.ref)||t||(s==null?void 0:s.id)}),e.jsx(f,{children:s==null?void 0:s.name}),e.jsx(f,{children:s==null?void 0:s.email}),e.jsx(f,{children:s==null?void 0:s.phoneNumber}),e.jsx(f,{children:b(s==null?void 0:s.address)}),e.jsxs(f,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[d&&e.jsx(q,{color:x.value?"inherit":"default",onClick:x.onToggle,sx:{...x.value&&{bgcolor:"action.hover"}},children:e.jsx(g,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(q,{color:a.open?"inherit":"default",onClick:a.onOpen,children:e.jsx(g,{icon:"eva:more-vertical-fill"})})]})]}),B=e.jsx(Q,{children:e.jsx(f,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(z,{in:x.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(G,{sx:{m:1.5},children:s==null?void 0:s.lastOrders.map((o,P)=>{var R;return P===5?e.jsx(w,{alignItems:"flex-end",sx:{p:r=>r.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:r=>`solid 2px ${r.vars.palette.background.neutral}`}},children:e.jsx(H,{variant:"contained",size:"small",endIcon:e.jsx(g,{icon:"heroicons-outline:external-link"}),onClick:()=>{y(s.id)},children:"See More"})},o.id):e.jsxs(w,{direction:"row",alignItems:"center",sx:{p:r=>r.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:r=>`solid 2px ${r.vars.palette.background.neutral}`}},children:[e.jsxs(S,{onClick:()=>h(o==null?void 0:o.id),sx:{width:240,display:"flex",gap:1,alignItems:"center",cursor:"pointer",marginRight:5},children:[e.jsx(g,{icon:"heroicons-outline:external-link"}),e.jsx("span",{children:o==null?void 0:o.ref})]}),e.jsx(S,{sx:{width:"100%",color:"error.main",fontWeight:"bold"},children:e.jsx(Re,{sx:{[`& .${W.avatar}`]:{width:24,height:24}},children:(R=o==null?void 0:o.productToOrder)==null?void 0:R.map(r=>{var D,l,j,M;return e.jsx(J,{title:`${(D=r==null?void 0:r.product)==null?void 0:D.name} | Quantity : ${r.quantity}`,children:e.jsx(Y,{sx:{cursor:"pointer"},alt:(l=r==null?void 0:r.product)==null?void 0:l.name,src:`${K.site.serverFileHost}${(j=r==null?void 0:r.product)==null?void 0:j.image}`,onClick:()=>{E(s.id)}},r==null?void 0:r.id)},(M=r==null?void 0:r.product)==null?void 0:M.id)})})}),e.jsx(S,{sx:{width:200,textAlign:"right"},children:o==null?void 0:o.status}),e.jsx(S,{sx:{width:340,textAlign:"right"},children:ve(X((o==null?void 0:o.totalOrderAmount)-(o==null?void 0:o.totalOrderAmount)*((o==null?void 0:o.discount)/100),o==null?void 0:o.snapshotTaxPercentage))||"-"})]},o.id)})})})})});return e.jsxs(e.Fragment,{children:[O,B,e.jsx(Z,{open:a.open,anchorEl:a.anchorEl,onClose:a.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(ee,{children:[e.jsxs(L,{onClick:()=>{y(s.id),a.onClose()},children:[e.jsx(g,{icon:"solar:eye-bold"}),"View"]}),e.jsx(I,{permission:A.EDIT_CUSTOMER,children:e.jsxs(L,{onClick:()=>{m(),a.onClose()},children:[e.jsx(g,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(I,{permission:A.DELETE_CUSTOMER,children:e.jsxs(L,{onClick:()=>{p.onTrue(),a.onClose()},sx:{color:"error.main"},children:[e.jsx(g,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Ee,{open:p.value,onClose:p.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(H,{variant:"contained",color:"error",onClick:i,children:"Delete"})})]})};function Be({customer:s,open:t,onClose:c,handler:i}){return e.jsx(V,{customer:s,open:t,onClose:c,handler:i})}function Le({customer:s,open:t,onClose:c,handler:i}){return e.jsx(V,{customer:s,open:t,onClose:c,handler:i})}function Ne({filters:s,onResetPage:t,options:c}){const i=u.useCallback(m=>{t(),s.setState({name:m.target.value})},[s,t]);return e.jsx(w,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(De,{sx:{width:420},value:s.state.name,onChange:i,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(ke,{position:"start",children:e.jsx(g,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function $e({filters:s,totalResults:t,onResetPage:c,sx:i}){const m=u.useCallback(()=>{c(),s.setState({name:""})},[s,c]),d=u.useCallback(()=>{c(),s.onResetState()},[s,c]);return e.jsx(Fe,{totalResults:t,onReset:d,sx:i,children:e.jsx(we,{label:"Keyword:",isShow:!!s.state.name,children:e.jsx(Ie,{...Ae,label:s.state.name,onDelete:m})})})}const He=[{id:"customerId",label:"#",width:88},{id:"name",label:"Customer Name",width:220},{id:"email",label:"Email",width:220},{id:"phoneNumber",label:"Phone Number",width:120},{id:"address",label:"Address",width:120},{id:"",width:88}],Me=({customers:s})=>{const t=Ce({defaultOrderBy:"id"}),{t:c}=se("customer");console.log("----> i18n",c("listView.pageRootTitle"));const i=v(),m=v(),d=v(),[C,p]=u.useState(s),[x,a]=u.useState(),n=te({name:"",status:"all",startDate:null,endDate:null}),b=oe(n.state.startDate,n.state.endDate),h=qe({inputData:C,comparator:pe(t.order,t.orderBy),filters:n.state,dateError:b});u.useEffect(()=>{p(s)},[s]);const y=xe(h,t.page,t.rowsPerPage),E=!!n.state.name||n.state.status!=="all"||!!n.state.startDate&&!!n.state.endDate,O=!h.length&&E||!h.length,B=u.useCallback(l=>{D(l)},[y.length,t,C]),o=u.useCallback(l=>{a(l),m.onToggle()},[y.length,t,C]),P=re(),{mutate:R}=$({mutationFn:l=>k.post(F.customers.create,l),onSuccess:async()=>{N.success("New Customer Has Been Created!")},onSettled:async()=>{await P.invalidateQueries({queryKey:["customers"]}),i.onFalse()},onError:l=>{console.log(l)}}),{mutate:r}=$({mutationFn:({id:l,payload:j})=>k.patch(F.customers.edit+l,j),onSuccess:async()=>{N.success("Customer Has Been Modified!")},onSettled:async()=>{await P.invalidateQueries({queryKey:["customers"]}),m.onFalse()},onError:l=>{console.log(l)}}),{mutate:D}=$({mutationFn:l=>k.delete(F.customers.delete+l),onSuccess:async()=>{const l=C.filter(j=>j.id!==id);N.success("Delete success!"),p(l),t.onUpdatePageDeleteRow(y.length),d.onFalse()},onSettled:async()=>{await P.invalidateQueries({queryKey:["customers"]}),d.onFalse()},onError:()=>{}});return e.jsxs(e.Fragment,{children:[e.jsx(ae,{maxWidth:"xl",children:e.jsxs(w,{spacing:3,children:[e.jsx(he,{links:[{name:"Dashboard",href:T.dashboard.root},{name:"Customers",href:T.dashboard.customers.root}],action:e.jsx(I,{permission:A.ADD_CUSTOMER,children:e.jsx(H,{onClick:()=>i.onToggle(),variant:"contained",startIcon:e.jsx(g,{icon:"mingcute:add-line"}),children:"Add New Customer"})})}),e.jsx(I,{permission:A.LIST_CUSTOMER,children:e.jsxs(ne,{children:[e.jsx(Ne,{filters:n,onResetPage:t.onResetPage,dateError:b}),E&&e.jsx($e,{filters:n,totalResults:h.length,onResetPage:t.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(S,{sx:{position:"relative"},children:[e.jsx(Pe,{dense:t.dense,numSelected:t.selected.length,rowCount:h.length}),e.jsx(le,{sx:{minHeight:444},children:e.jsxs(fe,{size:t.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(ye,{order:t.order,orderBy:t.orderBy,headLabel:He,rowCount:h.length}),e.jsxs(Te,{children:[h.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage).map((l,j)=>e.jsx(Oe,{index:t.page*t.rowsPerPage+j+1,row:l,selected:t.selected.includes(l.id),onEditRow:()=>o(l),onDeleteRow:()=>B(l.id)},l.id)),e.jsx(be,{height:t.dense?56:76,emptyRows:ge(t.page,t.rowsPerPage,h.length)}),e.jsx(je,{notFound:O})]})]})})]}),e.jsx(Se,{page:t.page,dense:t.dense,count:h.length,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onChangeDense:t.onChangeDense,onRowsPerPageChange:t.onChangeRowsPerPage})]})})]})}),e.jsx(Le,{open:i.value,onClose:i.onFalse,handler:R}),e.jsx(Be,{open:m.value,onClose:m.onFalse,handler:r,customer:x})]})};function qe({inputData:s,comparator:t,filters:c,dateError:i}){const{status:m,name:d,startDate:C,endDate:p}=c,x=s.map((a,n)=>[a,n]);return x.sort((a,n)=>{const b=t(a[0],n[0]);return b!==0?b:a[1]-n[1]}),s=x.map(a=>a[0]),d&&(s=s.filter(a=>{var n;return a.id.toString().toLowerCase().indexOf(d.toLowerCase())!==-1||a.name.toLowerCase().indexOf(d.toLowerCase())!==-1||a.email.toLowerCase().indexOf(d.toLowerCase())!==-1||((n=a.phoneNumber)==null?void 0:n.toString().toLowerCase().indexOf(d.toLowerCase()))!==-1})),i||C&&p&&(s=s.filter(a=>ie(a.createdAt,C,p))),s}const Qe={title:`Customers list | Dashboard - ${K.site.name}`};function Xs(){const s=ue({queryKey:["customers"],queryFn:async()=>(await k.get(F.customers.list)).data});return s.isPending||s.isLoading?e.jsx(ce,{}):s.isError?e.jsx(me,{route:T.dashboard.customers.root}):e.jsxs(e.Fragment,{children:[e.jsx(de,{children:e.jsxs("title",{children:[" ",Qe.title]})}),e.jsx(Me,{customers:s.data})]})}export{Xs as default};