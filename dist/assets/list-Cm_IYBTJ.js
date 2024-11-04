import{r as m,i as S,aP as V,g as _,p as f,j as e,l as q,I as x,cQ as z,bR as G,S as D,e as $,B as T,aL as W,c9 as J,A as Y,C as K,e2 as X,db as Z,aR as ee,aS as B,e3 as k,de as se,ec as te,dn as oe,dP as re,cY as ae,dd as ne,ed as ie,dp as E,dm as R,dq as L,dT as le,H as ce}from"./index-1iE_pzdz.js";import{u as de,E as ue}from"./error-block-BIgktCvX.js";import{u as N}from"./useMutation-BSVHjL8_.js";import{C as me}from"./custom-breadcrumbs-CPH4Y4PL.js";import{P as F}from"./permission-access-controller-CzKKRgWh.js";import{g as he,r as pe,e as xe}from"./utils-MBUcMVfY.js";import{u as ge}from"./use-table-D5uAMHpH.js";import{T as Ce}from"./table-no-data-B7DbW70a.js";import{T as je}from"./table-empty-rows-Dj9AnC98.js";import{T as Q,a as be,b as fe,c as ye}from"./table-head-custom-DqzsA4di.js";import{T as Pe}from"./table-selected-action-B-CspTIN.js";import{T as Te}from"./table-pagination-custom-CK7MqgPN.js";import{b as Se}from"./format-number-CTB21s4Z.js";import{C as ve}from"./confirm-dialog-bajMrxPj.js";import{T as j}from"./TableCell-BhJowIdd.js";import{A as Ee}from"./AvatarGroup-BMfd3D5_.js";import{O as U}from"./order-customer-create-dialog-_OExvB3m.js";import{T as Re}from"./TextField-DHtCrzsF.js";import{I as De}from"./InputAdornment-CACQTP1p.js";import{F as ke,a as Fe,c as we}from"./filters-result-BVCsvvvC.js";import{C as Ae}from"./Chip-Cd2814Jh.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-BXDkrZG_.js";import"./Checkbox-DNBko6Dw.js";import"./TablePagination-BQWhhCd_.js";import"./KeyboardArrowRight-DXB4fbCs.js";import"./LastPage-sTxe72u8.js";import"./Select-CYfB2nz0.js";import"./Menu-BX9dxjlv.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-BadK7O_L.js";import"./FormControlLabel-Df-QIfD8.js";import"./DialogContent-uKdN3zVH.js";import"./DialogTitle-Bw_E_Avm.js";import"./form-provider-Bk4GtwIc.js";import"./FormHelperText-DsSp4x5g.js";import"./Rating-DaffWkCu.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DqsCUEj-.js";import"./index-K8l5CjQY.js";import"./Slider-CkoquRLq.js";import"./FormControl-NfFD8g29.js";import"./FormLabel-Z8Hq68xw.js";import"./RadioGroup-8jgKyWkn.js";import"./FormGroup-Br4pQUt2.js";import"./utils-CFaUPgDl.js";import"./index-Cq7CuE1D.js";import"./countries-DSLisFCy.js";import"./Autocomplete-BDxJtnkk.js";import"./country-select-CB3QmzBF.js";import"./InputLabel-B4tUSR5W.js";import"./upload-avatar-CqNbza97.js";import"./image-8x8gVsOX.js";import"./DatePicker-BYYGSvFj.js";import"./ListItem-MIIjg71W.js";import"./MobileDateTimePicker-CwoMymqr.js";import"./Tabs-BixlVTD0.js";import"./schema-helper-DzP9Jl7a.js";import"./LoadingButton-Bg3a4Y8E.js";import"./CircularProgress-CD2AWEVA.js";const Ie=({row:s,index:t,selected:i,onDeleteRow:c,onEditRow:h})=>{const[d,b]=m.useState((s==null?void 0:s.lastOrders.length)>0),g=S(),p=S(),r=V(),l=_(),u=o=>o?`${o==null?void 0:o.street} ${o==null?void 0:o.country}.`:" - ",y=m.useCallback(o=>{l.push(f.dashboard.order.details(o))},[l]),P=m.useCallback(o=>{l.push(f.dashboard.customers.details(o))},[l]),w=m.useCallback(o=>{l.push(f.dashboard.product.details(o))},[l]),A=e.jsxs(Q,{hover:!0,selected:i,children:[e.jsx(j,{children:(s==null?void 0:s.ref)||t||(s==null?void 0:s.id)}),e.jsx(j,{children:s==null?void 0:s.name}),e.jsx(j,{children:s==null?void 0:s.email}),e.jsx(j,{children:s==null?void 0:s.phoneNumber}),e.jsx(j,{children:u(s==null?void 0:s.address)}),e.jsxs(j,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[d&&e.jsx(q,{color:p.value?"inherit":"default",onClick:p.onToggle,sx:{...p.value&&{bgcolor:"action.hover"}},children:e.jsx(x,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(q,{color:r.open?"inherit":"default",onClick:r.onOpen,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})]})]}),I=e.jsx(Q,{children:e.jsx(j,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(z,{in:p.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(G,{sx:{m:1.5},children:s==null?void 0:s.lastOrders.map((o,O)=>{var v;return O===5?e.jsx(D,{alignItems:"flex-end",sx:{p:a=>a.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:a=>`solid 2px ${a.vars.palette.background.neutral}`}},children:e.jsx($,{variant:"contained",size:"small",endIcon:e.jsx(x,{icon:"heroicons-outline:external-link"}),onClick:()=>{P(s.id)},children:"See More"})},o.id):e.jsxs(D,{direction:"row",alignItems:"center",sx:{p:a=>a.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:a=>`solid 2px ${a.vars.palette.background.neutral}`}},children:[e.jsxs(T,{onClick:()=>y(o==null?void 0:o.id),sx:{width:240,display:"flex",gap:1,alignItems:"center",cursor:"pointer",marginRight:5},children:[e.jsx(x,{icon:"heroicons-outline:external-link"}),e.jsx("span",{children:o==null?void 0:o.ref})]}),e.jsx(T,{sx:{width:"100%",color:"error.main",fontWeight:"bold"},children:e.jsx(Ee,{sx:{[`& .${W.avatar}`]:{width:24,height:24}},children:(v=o==null?void 0:o.productToOrder)==null?void 0:v.map(a=>{var n,C,H,M;return e.jsx(J,{title:`${(n=a==null?void 0:a.product)==null?void 0:n.name} | Quantity : ${a.quantity}`,children:e.jsx(Y,{sx:{cursor:"pointer"},alt:(C=a==null?void 0:a.product)==null?void 0:C.name,src:`${K.site.serverFileHost}${(H=a==null?void 0:a.product)==null?void 0:H.image}`,onClick:()=>{w(s.id)}},a==null?void 0:a.id)},(M=a==null?void 0:a.product)==null?void 0:M.id)})})}),e.jsx(T,{sx:{width:200,textAlign:"right"},children:o==null?void 0:o.status}),e.jsx(T,{sx:{width:340,textAlign:"right"},children:Se(X((o==null?void 0:o.totalOrderAmount)-(o==null?void 0:o.totalOrderAmount)*((o==null?void 0:o.discount)/100),o==null?void 0:o.snapshotTaxPercentage))||"-"})]},o.id)})})})})});return e.jsxs(e.Fragment,{children:[A,I,e.jsx(Z,{open:r.open,anchorEl:r.anchorEl,onClose:r.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(ee,{children:[e.jsxs(B,{onClick:()=>{P(s.id),r.onClose()},children:[e.jsx(x,{icon:"solar:eye-bold"}),"View"]}),e.jsx(F,{permission:k.EDIT_CUSTOMER,children:e.jsxs(B,{onClick:()=>{h(),r.onClose()},children:[e.jsx(x,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(F,{permission:k.DELETE_CUSTOMER,children:e.jsxs(B,{onClick:()=>{g.onTrue(),r.onClose()},sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(ve,{open:g.value,onClose:g.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx($,{variant:"contained",color:"error",onClick:c,children:"Delete"})})]})};function Oe({customer:s,open:t,onClose:i,handler:c}){return e.jsx(U,{customer:s,open:t,onClose:i,handler:c})}function Be({customer:s,open:t,onClose:i,handler:c}){return e.jsx(U,{customer:s,open:t,onClose:i,handler:c})}function Le({filters:s,onResetPage:t,options:i}){const c=m.useCallback(h=>{t(),s.setState({name:h.target.value})},[s,t]);return e.jsx(D,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Re,{sx:{width:420},value:s.state.name,onChange:c,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(De,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function Ne({filters:s,totalResults:t,onResetPage:i,sx:c}){const h=m.useCallback(()=>{i(),s.setState({name:""})},[s,i]),d=m.useCallback(()=>{i(),s.onResetState()},[s,i]);return e.jsx(ke,{totalResults:t,onReset:d,sx:c,children:e.jsx(Fe,{label:"Keyword:",isShow:!!s.state.name,children:e.jsx(Ae,{...we,label:s.state.name,onDelete:h})})})}const $e=[{id:"customerId",label:"#",width:88},{id:"name",label:"Customer Name",width:220},{id:"email",label:"Email",width:220},{id:"phoneNumber",label:"Phone Number",width:120},{id:"address",label:"Address",width:120},{id:"",width:88}],He=({customers:s})=>{const t=ge({defaultOrderBy:"id"}),i=S(),c=S(),h=S(),[d,b]=m.useState(s),[g,p]=m.useState(),r=se({name:"",status:"all",startDate:null,endDate:null}),l=te(r.state.startDate,r.state.endDate),u=Me({inputData:d,comparator:he(t.order,t.orderBy),filters:r.state,dateError:l});m.useEffect(()=>{b(s)},[s]);const y=pe(u,t.page,t.rowsPerPage),P=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate,w=!u.length&&P||!u.length,A=m.useCallback(n=>{a(n)},[y.length,t,d]),I=m.useCallback(n=>{p(n),c.onToggle()},[y.length,t,d]),o=oe(),{mutate:O}=N({mutationFn:n=>E.post(R.customers.create,n),onSuccess:async()=>{L.success("New Customer Has Been Created!")},onSettled:async()=>{await o.invalidateQueries({queryKey:["customers"]}),i.onFalse()},onError:n=>{console.log(n)}}),{mutate:v}=N({mutationFn:({id:n,payload:C})=>E.patch(R.customers.edit+n,C),onSuccess:async()=>{L.success("Customer Has Been Modified!")},onSettled:async()=>{await o.invalidateQueries({queryKey:["customers"]}),c.onFalse()},onError:n=>{console.log(n)}}),{mutate:a}=N({mutationFn:n=>E.delete(R.customers.delete+n),onSuccess:async()=>{const n=d.filter(C=>C.id!==id);L.success("Delete success!"),b(n),t.onUpdatePageDeleteRow(y.length),h.onFalse()},onSettled:async()=>{await o.invalidateQueries({queryKey:["customers"]}),h.onFalse()},onError:()=>{}});return e.jsxs(e.Fragment,{children:[e.jsx(re,{maxWidth:"xl",children:e.jsxs(D,{spacing:3,children:[e.jsx(me,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Customers",href:f.dashboard.customers.root}],action:e.jsx(F,{permission:k.ADD_CUSTOMER,children:e.jsx($,{onClick:()=>i.onToggle(),variant:"contained",startIcon:e.jsx(x,{icon:"mingcute:add-line"}),children:"Add New Customer"})})}),e.jsx(F,{permission:k.LIST_CUSTOMER,children:e.jsxs(ae,{children:[e.jsx(Le,{filters:r,onResetPage:t.onResetPage,dateError:l}),P&&e.jsx(Ne,{filters:r,totalResults:u.length,onResetPage:t.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(T,{sx:{position:"relative"},children:[e.jsx(Pe,{dense:t.dense,numSelected:t.selected.length,rowCount:u.length}),e.jsx(ne,{sx:{minHeight:444},children:e.jsxs(be,{size:t.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(fe,{order:t.order,orderBy:t.orderBy,headLabel:$e,rowCount:u.length}),e.jsxs(ye,{children:[u.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage).map((n,C)=>e.jsx(Ie,{index:t.page*t.rowsPerPage+C+1,row:n,selected:t.selected.includes(n.id),onEditRow:()=>I(n),onDeleteRow:()=>A(n.id)},n.id)),e.jsx(je,{height:t.dense?56:76,emptyRows:xe(t.page,t.rowsPerPage,u.length)}),e.jsx(Ce,{notFound:w})]})]})})]}),e.jsx(Te,{page:t.page,dense:t.dense,count:u.length,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onChangeDense:t.onChangeDense,onRowsPerPageChange:t.onChangeRowsPerPage})]})})]})}),e.jsx(Be,{open:i.value,onClose:i.onFalse,handler:O}),e.jsx(Oe,{open:c.value,onClose:c.onFalse,handler:v,customer:g})]})};function Me({inputData:s,comparator:t,filters:i,dateError:c}){const{status:h,name:d,startDate:b,endDate:g}=i,p=s.map((r,l)=>[r,l]);return p.sort((r,l)=>{const u=t(r[0],l[0]);return u!==0?u:r[1]-l[1]}),s=p.map(r=>r[0]),d&&(s=s.filter(r=>{var l;return r.id.toString().toLowerCase().indexOf(d.toLowerCase())!==-1||r.name.toLowerCase().indexOf(d.toLowerCase())!==-1||r.email.toLowerCase().indexOf(d.toLowerCase())!==-1||((l=r.phoneNumber)==null?void 0:l.toString().toLowerCase().indexOf(d.toLowerCase()))!==-1})),c||b&&g&&(s=s.filter(r=>ie(r.createdAt,b,g))),s}const qe={title:`Customers list | Dashboard - ${K.site.name}`};function Ys(){const s=de({queryKey:["customers"],queryFn:async()=>(await E.get(R.customers.list)).data});return s.isPending||s.isLoading?e.jsx(le,{}):s.isError?e.jsx(ue,{route:f.dashboard.customers.root}):e.jsxs(e.Fragment,{children:[e.jsx(ce,{children:e.jsxs("title",{children:[" ",qe.title]})}),e.jsx(He,{customers:s.data})]})}export{Ys as default};
