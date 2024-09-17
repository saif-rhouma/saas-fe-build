import{w as R,bI as T,j as e,S as g,A as H,L as _,B as F,dw as y,dy as I,y as C,I as p,dB as D,bK as E,bL as j,e as k,r as d,o as z,eJ as K,dE as V,dP as P,p as b,ed as G,R as M,aH as J,i as Q,v as W,k as $,eK as q,dD as X,eG as Y,H as Z,C as ee}from"./index-CZcV1F_p.js";import{U as se}from"./user-quick-edit-form-BDkElnsN.js";import{C as A}from"./confirm-dialog-CFSR5CRi.js";import{C as te}from"./custom-breadcrumbs-CbtQHK8e.js";import{u as oe,g as ae,r as le,T as ne,a as re,e as ie}from"./table-selected-action-CboGdCqh.js";import{T as ce}from"./table-no-data-CVXJF7AK.js";import{T as de,a as me,b as he,c as pe}from"./table-head-custom-Cs1cDsOq.js";import{T as ue}from"./table-pagination-custom-CQDZANoi.js";import{T as u}from"./TableCell-C1nm99o0.js";import{C as L}from"./Checkbox-B9Q7SrE_.js";import{F as xe}from"./FormControl-3TPlxton.js";import{I as je}from"./InputLabel-h10-06k3.js";import{S as ge,O as be}from"./Select-DLGgW76C.js";import{T as Ce}from"./TextField-D7n2_qXr.js";import{I as we}from"./InputAdornment-DsfHwWIs.js";import{F as ve,a as v,c as S}from"./filters-result-CDgCxZP5.js";import{C as f}from"./Chip-C3BxFZTA.js";import"./image-DzsMNwzu.js";import"./form-provider-Bx2WBj5v.js";import"./index-BQhbB6Ru.js";import"./countries-DSLisFCy.js";import"./format-number-_ePrRxix.js";import"./fields-hbdK3Trc.js";import"./FormHelperText-BnZQySOl.js";import"./formControlState-Dq1zat_P.js";import"./Rating-DVTNlvpL.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-DaVZ1Z83.js";import"./Menu-Biq0K9Dc.js";import"./index-DHVWpqoh.js";import"./Slider-B7KCQCsS.js";import"./FormLabel-CRn0_UJR.js";import"./RadioGroup-r2gxq8lN.js";import"./FormGroup-BdZDUz2q.js";import"./FormControlLabel-BJNlLSWJ.js";import"./Autocomplete-3PR52KH6.js";import"./country-select-C2iLpbAw.js";import"./upload-avatar-1D7Vf-s3.js";import"./DatePicker-omkT4XAu.js";import"./DialogContent-BM8q5mKd.js";import"./ListItem-cuOSimek.js";import"./MobileDateTimePicker-SOESVVJ9.js";import"./schema-helper-CcrSI3-3.js";import"./LoadingButton-C_R2hpVD.js";import"./CircularProgress-Dtq66Llh.js";import"./DialogTitle-DLTxRMh7.js";import"./empty-content-CpfMP5Ra.js";import"./TablePagination-CPW6B5yR.js";import"./LastPage-CSCREIen.js";import"./InputBase-De2NihOG.js";import"./utils-DoM3o7-Q.js";function Se({row:s,selected:r,onEditRow:i,onSelectRow:l,onDeleteRow:m}){const n=R(),t=T(),a=R();return e.jsxs(e.Fragment,{children:[e.jsxs(de,{hover:!0,selected:r,"aria-checked":r,tabIndex:-1,children:[e.jsx(u,{padding:"checkbox",children:e.jsx(L,{id:s.id,checked:r,onClick:l})}),e.jsx(u,{children:e.jsxs(g,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(H,{alt:s.name,src:s.avatarUrl}),e.jsxs(g,{sx:{typography:"body2",flex:"1 1 auto",alignItems:"flex-start"},children:[e.jsx(_,{color:"inherit",onClick:i,sx:{cursor:"pointer"},children:s.name}),e.jsx(F,{component:"span",sx:{color:"text.disabled"},children:s.email})]})]})}),e.jsx(u,{sx:{whiteSpace:"nowrap"},children:s.phoneNumber}),e.jsx(u,{sx:{whiteSpace:"nowrap"},children:s.company}),e.jsx(u,{sx:{whiteSpace:"nowrap"},children:s.role}),e.jsx(u,{children:e.jsx(y,{variant:"soft",color:s.status==="active"&&"success"||s.status==="pending"&&"warning"||s.status==="banned"&&"error"||"default",children:s.status})}),e.jsx(u,{children:e.jsxs(g,{direction:"row",alignItems:"center",children:[e.jsx(I,{title:"Quick Edit",placement:"top",arrow:!0,children:e.jsx(C,{color:a.value?"inherit":"default",onClick:a.onTrue,children:e.jsx(p,{icon:"solar:pen-bold"})})}),e.jsx(C,{color:t.open?"inherit":"default",onClick:t.onOpen,children:e.jsx(p,{icon:"eva:more-vertical-fill"})})]})})]}),e.jsx(se,{currentUser:s,open:a.value,onClose:a.onFalse}),e.jsx(D,{open:t.open,anchorEl:t.anchorEl,onClose:t.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(E,{children:[e.jsxs(j,{onClick:()=>{i(),t.onClose()},children:[e.jsx(p,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(j,{onClick:()=>{n.onTrue(),t.onClose()},sx:{color:"error.main"},children:[e.jsx(p,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})}),e.jsx(A,{open:n.value,onClose:n.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(k,{variant:"contained",color:"error",onClick:m,children:"Delete"})})]})}function fe({filters:s,options:r,onResetPage:i}){const l=T(),m=d.useCallback(t=>{i(),s.setState({name:t.target.value})},[s,i]),n=d.useCallback(t=>{const a=typeof t.target.value=="string"?t.target.value.split(","):t.target.value;i(),s.setState({role:a})},[s,i]);return e.jsxs(e.Fragment,{children:[e.jsxs(g,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsxs(xe,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(je,{htmlFor:"user-filter-role-select-label",children:"Role"}),e.jsx(ge,{multiple:!0,value:s.state.role,onChange:n,input:e.jsx(be,{label:"Role"}),renderValue:t=>t.map(a=>a).join(", "),inputProps:{id:"user-filter-role-select-label"},MenuProps:{PaperProps:{sx:{maxHeight:240}}},children:r.roles.map(t=>e.jsxs(j,{value:t,children:[e.jsx(L,{disableRipple:!0,size:"small",checked:s.state.role.includes(t)}),t]},t))})]}),e.jsxs(g,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(Ce,{fullWidth:!0,value:s.state.name,onChange:m,placeholder:"Search...",InputProps:{startAdornment:e.jsx(we,{position:"start",children:e.jsx(p,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(C,{onClick:l.onOpen,children:e.jsx(p,{icon:"eva:more-vertical-fill"})})]})]}),e.jsx(D,{open:l.open,anchorEl:l.anchorEl,onClose:l.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(E,{children:[e.jsxs(j,{onClick:()=>{l.onClose()},children:[e.jsx(p,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(j,{onClick:()=>{l.onClose()},children:[e.jsx(p,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(j,{onClick:()=>{l.onClose()},children:[e.jsx(p,{icon:"solar:export-bold"}),"Export"]})]})})]})}function Re({filters:s,onResetPage:r,totalResults:i,sx:l}){const m=d.useCallback(()=>{r(),s.setState({name:""})},[s,r]),n=d.useCallback(()=>{r(),s.setState({status:"all"})},[s,r]),t=d.useCallback(c=>{const x=s.state.role.filter(w=>w!==c);r(),s.setState({role:x})},[s,r]),a=d.useCallback(()=>{r(),s.onResetState()},[s,r]);return e.jsxs(ve,{totalResults:i,onReset:a,sx:l,children:[e.jsx(v,{label:"Status:",isShow:s.state.status!=="all",children:e.jsx(f,{...S,label:s.state.status,onDelete:n,sx:{textTransform:"capitalize"}})}),e.jsx(v,{label:"Role:",isShow:!!s.state.role.length,children:s.state.role.map(c=>d.createElement(f,{...S,key:c,label:c,onDelete:()=>t(c)}))}),e.jsx(v,{label:"Keyword:",isShow:!!s.state.name,children:e.jsx(f,{...S,label:s.state.name,onDelete:m})})]})}const ke=[{value:"all",label:"All"},...Y],Pe=[{id:"name",label:"Name"},{id:"phoneNumber",label:"Phone number",width:180},{id:"company",label:"Company",width:220},{id:"role",label:"Role",width:180},{id:"status",label:"Status",width:100},{id:"",width:88}];function Te(){const s=oe(),r=z(),i=R(),[l,m]=d.useState(K),n=V({name:"",role:[],status:"all"}),t=Fe({inputData:l,comparator:ae(s.order,s.orderBy),filters:n.state}),a=le(t,s.page,s.rowsPerPage),c=!!n.state.name||n.state.role.length>0||n.state.status!=="all",x=!t.length&&c||!t.length,w=d.useCallback(o=>{const h=l.filter(N=>N.id!==o);P.success("Delete success!"),m(h),s.onUpdatePageDeleteRow(a.length)},[a.length,s,l]),U=d.useCallback(()=>{const o=l.filter(h=>!s.selected.includes(h.id));P.success("Delete success!"),m(o),s.onUpdatePageDeleteRows({totalRowsInPage:a.length,totalRowsFiltered:t.length})},[t.length,a.length,s,l]),B=d.useCallback(o=>{r.push(b.dashboard.user.edit(o))},[r]),O=d.useCallback((o,h)=>{s.onResetPage(),n.setState({status:h})},[n,s]);return e.jsxs(e.Fragment,{children:[e.jsxs(G,{children:[e.jsx(te,{heading:"List",links:[{name:"Dashboard",href:b.dashboard.root},{name:"User",href:b.dashboard.user.root},{name:"List"}],action:e.jsx(k,{component:M,href:b.dashboard.user.new,variant:"contained",startIcon:e.jsx(p,{icon:"mingcute:add-line"}),children:"New user"}),sx:{mb:{xs:3,md:5}}}),e.jsxs(J,{children:[e.jsx(Q,{value:n.state.status,onChange:O,sx:{px:2.5,boxShadow:o=>`inset 0 -2px 0 0 ${W(o.vars.palette.grey["500Channel"],.08)}`},children:ke.map(o=>e.jsx($,{iconPosition:"end",value:o.value,label:o.label,icon:e.jsx(y,{variant:(o.value==="all"||o.value===n.state.status)&&"filled"||"soft",color:o.value==="active"&&"success"||o.value==="pending"&&"warning"||o.value==="banned"&&"error"||"default",children:["active","pending","banned","rejected"].includes(o.value)?l.filter(h=>h.status===o.value).length:l.length})},o.value))}),e.jsx(fe,{filters:n,onResetPage:s.onResetPage,options:{roles:q}}),c&&e.jsx(Re,{filters:n,totalResults:t.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(F,{sx:{position:"relative"},children:[e.jsx(ne,{dense:s.dense,numSelected:s.selected.length,rowCount:t.length,onSelectAllRows:o=>s.onSelectAllRows(o,t.map(h=>h.id)),action:e.jsx(I,{title:"Delete",children:e.jsx(C,{color:"primary",onClick:i.onTrue,children:e.jsx(p,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(X,{children:e.jsxs(me,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(he,{order:s.order,orderBy:s.orderBy,headLabel:Pe,rowCount:t.length,numSelected:s.selected.length,onSort:s.onSort,onSelectAllRows:o=>s.onSelectAllRows(o,t.map(h=>h.id))}),e.jsxs(pe,{children:[t.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(o=>e.jsx(Se,{row:o,selected:s.selected.includes(o.id),onSelectRow:()=>s.onSelectRow(o.id),onDeleteRow:()=>w(o.id),onEditRow:()=>B(o.id)},o.id)),e.jsx(re,{height:s.dense?56:76,emptyRows:ie(s.page,s.rowsPerPage,t.length)}),e.jsx(ce,{notFound:x})]})]})})]}),e.jsx(ue,{page:s.page,dense:s.dense,count:t.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})]}),e.jsx(A,{open:i.value,onClose:i.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",s.selected.length," "]})," items?"]}),action:e.jsx(k,{variant:"contained",color:"error",onClick:()=>{U(),i.onFalse()},children:"Delete"})})]})}function Fe({inputData:s,comparator:r,filters:i}){const{name:l,status:m,role:n}=i,t=s.map((a,c)=>[a,c]);return t.sort((a,c)=>{const x=r(a[0],c[0]);return x!==0?x:a[1]-c[1]}),s=t.map(a=>a[0]),l&&(s=s.filter(a=>a.name.toLowerCase().indexOf(l.toLowerCase())!==-1)),m!=="all"&&(s=s.filter(a=>a.status===m)),n.length&&(s=s.filter(a=>n.includes(a.role))),s}const ye={title:`User list | Dashboard - ${ee.site.name}`};function Ts(){return e.jsxs(e.Fragment,{children:[e.jsx(Z,{children:e.jsxs("title",{children:[" ",ye.title]})}),e.jsx(Te,{})]})}export{Ts as default};
