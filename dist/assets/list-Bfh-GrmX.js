import{r as m,o as S,bO as U,l as V,p as f,j as e,w as q,I as x,dh as _,az as G,S as R,e as H,B as T,bm as W,cM as J,A as X,C as Q,ew as Y,dw as Z,bQ as ee,bR as B,em as k,dz as se,eo as te,dI as oe,e8 as re,aD as ae,dy as ne,ep as le,dJ as E,dH as D,dK as L,ec as ie,H as ce}from"./index-CGa_Q6Py.js";import{u as de,E as ue}from"./error-block-stWvsMsx.js";import{u as N}from"./useMutation-BZyJkW6J.js";import{C as me}from"./custom-breadcrumbs-UiY5PgKl.js";import{P as w}from"./permission-access-controller-DkEHMJRe.js";import{g as he,r as pe,T as xe,a as ge,e as Ce}from"./table-selected-action-CI1imvwh.js";import{u as je}from"./use-table-Df2CeYBc.js";import{T as be}from"./table-no-data-EU9bMd-R.js";import{T as K,a as fe,b as ye,c as Pe}from"./table-head-custom-CWkKt6RV.js";import{T as Te}from"./table-pagination-custom-DM1iVbyP.js";import{b as Se}from"./format-number-D7jLQrJb.js";import{C as ve}from"./confirm-dialog-B2c6UDYf.js";import{T as j}from"./TableCell-BagFzXfr.js";import{A as Ee}from"./AvatarGroup-6z0s6znE.js";import{O as z}from"./order-customer-create-dialog-BupCHXhD.js";import{T as De}from"./TextField-x1wfc3aD.js";import{I as Re}from"./InputAdornment-DYxqegqT.js";import{F as ke,a as we,c as Fe}from"./filters-result-CCyt5Rs1.js";import{C as Ie}from"./Chip-OqFJxE3e.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-C-tt3dk-.js";import"./empty-content-D4xWPsWi.js";import"./TablePagination-D7WE1nHD.js";import"./KeyboardArrowRight-DTzh8lht.js";import"./LastPage-DVTcRzyf.js";import"./Select-C3EwVc3m.js";import"./Menu-CEGb_rPj.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-CW41dL9k.js";import"./FormControlLabel-ULMw-Rz6.js";import"./DialogContent-CkKaB1Dh.js";import"./DialogTitle-7P1jGWHj.js";import"./form-provider-B3FvCF-c.js";import"./FormHelperText-Cs86-ejI.js";import"./Rating-B7rrg94U.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-COn8_0IM.js";import"./index-B34iO5qA.js";import"./Slider-M6bVG310.js";import"./FormControl-BQjf2Y5Q.js";import"./FormLabel-BwlFMORw.js";import"./RadioGroup-CZVTeUhr.js";import"./FormGroup-DgzyTd4r.js";import"./index-BWadiwXQ.js";import"./countries-DSLisFCy.js";import"./Autocomplete-DTDeDKOb.js";import"./country-select-Cmy0LStT.js";import"./InputLabel-Boupd8R1.js";import"./upload-avatar-lrMiBpkm.js";import"./image-DKbVqab5.js";import"./DatePicker-BTuyCtTt.js";import"./ListItem-3hZALOiS.js";import"./MobileDateTimePicker-H2WyDDk6.js";import"./Tabs-B9rF6pCD.js";import"./LoadingButton-B5SbTGGo.js";import"./CircularProgress-CWCrBmmX.js";const Oe=({row:s,index:t,selected:l,onDeleteRow:i,onEditRow:h})=>{const[c,b]=m.useState((s==null?void 0:s.lastOrders.length)>0),g=S(),p=S(),r=U(),d=V(),u=o=>o?`${o==null?void 0:o.street} ${o==null?void 0:o.country}.`:" - ",y=m.useCallback(o=>{d.push(f.dashboard.order.details(o))},[d]),P=m.useCallback(o=>{d.push(f.dashboard.customers.details(o))},[d]),F=m.useCallback(o=>{d.push(f.dashboard.product.details(o))},[d]),I=e.jsxs(K,{hover:!0,selected:l,children:[e.jsx(j,{children:(s==null?void 0:s.ref)||t||(s==null?void 0:s.id)}),e.jsx(j,{children:s==null?void 0:s.name}),e.jsx(j,{children:s==null?void 0:s.email}),e.jsx(j,{children:s==null?void 0:s.phoneNumber}),e.jsx(j,{children:u(s==null?void 0:s.address)}),e.jsxs(j,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[c&&e.jsx(q,{color:p.value?"inherit":"default",onClick:p.onToggle,sx:{...p.value&&{bgcolor:"action.hover"}},children:e.jsx(x,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(q,{color:r.open?"inherit":"default",onClick:r.onOpen,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})]})]}),O=e.jsx(K,{children:e.jsx(j,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(_,{in:p.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(G,{sx:{m:1.5},children:s==null?void 0:s.lastOrders.map((o,A)=>{var v;return A===5?e.jsx(R,{alignItems:"flex-end",sx:{p:a=>a.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:a=>`solid 2px ${a.vars.palette.background.neutral}`}},children:e.jsx(H,{variant:"contained",size:"small",endIcon:e.jsx(x,{icon:"heroicons-outline:external-link"}),onClick:()=>{P(s.id)},children:"See More"})},o.id):e.jsxs(R,{direction:"row",alignItems:"center",sx:{p:a=>a.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:a=>`solid 2px ${a.vars.palette.background.neutral}`}},children:[e.jsxs(T,{onClick:()=>y(o==null?void 0:o.id),sx:{width:240,display:"flex",gap:1,alignItems:"center",cursor:"pointer",marginRight:5},children:[e.jsx(x,{icon:"heroicons-outline:external-link"}),e.jsx("span",{children:o==null?void 0:o.ref})]}),e.jsx(T,{sx:{width:"100%",color:"error.main",fontWeight:"bold"},children:e.jsx(Ee,{sx:{[`& .${W.avatar}`]:{width:24,height:24}},children:(v=o==null?void 0:o.productToOrder)==null?void 0:v.map(a=>{var n,C,M,$;return e.jsx(J,{title:`${(n=a==null?void 0:a.product)==null?void 0:n.name} | Quantity : ${a.quantity}`,children:e.jsx(X,{sx:{cursor:"pointer"},alt:(C=a==null?void 0:a.product)==null?void 0:C.name,src:`${Q.site.serverFileHost}${(M=a==null?void 0:a.product)==null?void 0:M.image}`,onClick:()=>{F(s.id)}},a==null?void 0:a.id)},($=a==null?void 0:a.product)==null?void 0:$.id)})})}),e.jsx(T,{sx:{width:200,textAlign:"right"},children:o==null?void 0:o.status}),e.jsx(T,{sx:{width:340,textAlign:"right"},children:Se(Y((o==null?void 0:o.totalOrderAmount)-(o==null?void 0:o.totalOrderAmount)*((o==null?void 0:o.discount)/100),o==null?void 0:o.snapshotTaxPercentage))||"-"})]},o.id)})})})})});return e.jsxs(e.Fragment,{children:[I,O,e.jsx(Z,{open:r.open,anchorEl:r.anchorEl,onClose:r.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(ee,{children:[e.jsxs(B,{onClick:()=>{P(s.id),r.onClose()},children:[e.jsx(x,{icon:"solar:eye-bold"}),"View"]}),e.jsx(w,{permission:k.EDIT_CUSTOMER,children:e.jsxs(B,{onClick:()=>{h(),r.onClose()},children:[e.jsx(x,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(w,{permission:k.DELETE_CUSTOMER,children:e.jsxs(B,{onClick:()=>{g.onTrue(),r.onClose()},sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(ve,{open:g.value,onClose:g.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(H,{variant:"contained",color:"error",onClick:i,children:"Delete"})})]})};function Ae({customer:s,open:t,onClose:l,handler:i}){return e.jsx(z,{customer:s,open:t,onClose:l,handler:i})}function Be({customer:s,open:t,onClose:l,handler:i}){return e.jsx(z,{customer:s,open:t,onClose:l,handler:i})}function Le({filters:s,onResetPage:t,options:l}){const i=m.useCallback(h=>{t(),s.setState({name:h.target.value})},[s,t]);return e.jsx(R,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(De,{sx:{width:420},value:s.state.name,onChange:i,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(Re,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}function Ne({filters:s,totalResults:t,onResetPage:l,sx:i}){const h=m.useCallback(()=>{l(),s.setState({name:""})},[s,l]),c=m.useCallback(()=>{l(),s.onResetState()},[s,l]);return e.jsx(ke,{totalResults:t,onReset:c,sx:i,children:e.jsx(we,{label:"Keyword:",isShow:!!s.state.name,children:e.jsx(Ie,{...Fe,label:s.state.name,onDelete:h})})})}const He=[{id:"customerId",label:"#",width:88},{id:"name",label:"Customer Name",width:220},{id:"email",label:"Email",width:220},{id:"phoneNumber",label:"Phone Number",width:120},{id:"address",label:"Address",width:120},{id:"",width:88}],Me=({customers:s})=>{const t=je({defaultOrderBy:"id"}),l=S(),i=S(),h=S(),[c,b]=m.useState(s),[g,p]=m.useState(),r=se({name:"",status:"all",startDate:null,endDate:null}),d=te(r.state.startDate,r.state.endDate),u=$e({inputData:c,comparator:he(t.order,t.orderBy),filters:r.state,dateError:d});m.useEffect(()=>{b(s)},[s]);const y=pe(u,t.page,t.rowsPerPage),P=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate,F=!u.length&&P||!u.length,I=m.useCallback(n=>{a(n)},[y.length,t,c]),O=m.useCallback(n=>{p(n),i.onToggle()},[y.length,t,c]),o=oe(),{mutate:A}=N({mutationFn:n=>E.post(D.customers.create,n),onSuccess:async()=>{L.success("New Customer Has Been Created!")},onSettled:async()=>{await o.invalidateQueries({queryKey:["customers"]}),l.onFalse()},onError:n=>{console.log(n)}}),{mutate:v}=N({mutationFn:({id:n,payload:C})=>E.patch(D.customers.edit+n,C),onSuccess:async()=>{L.success("New Customer Has Been Modified!")},onSettled:async()=>{await o.invalidateQueries({queryKey:["customers"]}),i.onFalse()},onError:n=>{console.log(n)}}),{mutate:a}=N({mutationFn:n=>E.delete(D.customers.delete+n),onSuccess:async()=>{const n=c.filter(C=>C.id!==id);L.success("Delete success!"),b(n),t.onUpdatePageDeleteRow(y.length),h.onFalse()},onSettled:async()=>{await o.invalidateQueries({queryKey:["customers"]}),h.onFalse()},onError:()=>{}});return e.jsxs(e.Fragment,{children:[e.jsx(re,{maxWidth:"xl",children:e.jsxs(R,{spacing:3,children:[e.jsx(me,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Customers",href:f.dashboard.customers.root}],action:e.jsx(w,{permission:k.ADD_CUSTOMER,children:e.jsx(H,{onClick:()=>l.onToggle(),variant:"contained",startIcon:e.jsx(x,{icon:"mingcute:add-line"}),children:"Add New Customer"})})}),e.jsx(w,{permission:k.LIST_CUSTOMER,children:e.jsxs(ae,{children:[e.jsx(Le,{filters:r,onResetPage:t.onResetPage,dateError:d}),P&&e.jsx(Ne,{filters:r,totalResults:u.length,onResetPage:t.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(T,{sx:{position:"relative"},children:[e.jsx(xe,{dense:t.dense,numSelected:t.selected.length,rowCount:u.length}),e.jsx(ne,{sx:{minHeight:444},children:e.jsxs(fe,{size:t.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(ye,{order:t.order,orderBy:t.orderBy,headLabel:He,rowCount:u.length}),e.jsxs(Pe,{children:[u.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage).map((n,C)=>e.jsx(Oe,{index:t.page*t.rowsPerPage+C+1,row:n,selected:t.selected.includes(n.id),onEditRow:()=>O(n),onDeleteRow:()=>I(n.id)},n.id)),e.jsx(ge,{height:t.dense?56:76,emptyRows:Ce(t.page,t.rowsPerPage,u.length)}),e.jsx(be,{notFound:F})]})]})})]}),e.jsx(Te,{page:t.page,dense:t.dense,count:u.length,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onChangeDense:t.onChangeDense,onRowsPerPageChange:t.onChangeRowsPerPage})]})})]})}),e.jsx(Be,{open:l.value,onClose:l.onFalse,handler:A}),e.jsx(Ae,{open:i.value,onClose:i.onFalse,handler:v,customer:g})]})};function $e({inputData:s,comparator:t,filters:l,dateError:i}){const{status:h,name:c,startDate:b,endDate:g}=l,p=s.map((r,d)=>[r,d]);return p.sort((r,d)=>{const u=t(r[0],d[0]);return u!==0?u:r[1]-d[1]}),s=p.map(r=>r[0]),c&&(s=s.filter(r=>r.id.toString().toLowerCase().indexOf(c.toLowerCase())!==-1||r.name.toLowerCase().indexOf(c.toLowerCase())!==-1||r.email.toLowerCase().indexOf(c.toLowerCase())!==-1||r.phoneNumber.toString().toLowerCase().indexOf(c.toLowerCase())!==-1)),i||b&&g&&(s=s.filter(r=>le(r.createdAt,b,g))),s}const qe={title:`Customers list | Dashboard - ${Q.site.name}`};function _s(){const s=de({queryKey:["customers"],queryFn:async()=>(await E.get(D.customers.list)).data});return s.isPending||s.isLoading?e.jsx(ie,{}):s.isError?e.jsx(ue,{route:f.dashboard.customers.root}):e.jsxs(e.Fragment,{children:[e.jsx(ce,{children:e.jsxs("title",{children:[" ",qe.title]})}),e.jsx(Me,{customers:s.data})]})}export{_s as default};
