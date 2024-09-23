import{w as R,bG as T,j as e,S as g,A as _,L as z,B as F,du as I,dw as y,y as C,I as p,dz as D,bI as A,bJ as j,e as k,r as d,o as H,eI as V,dC as G,dN as P,p as b,eb as J,R as M,aF as K,i as Q,v as W,k as $,eJ as q,dB as X,eF as Y,H as Z,C as ee}from"./index-lMp9zap6.js";import{U as se}from"./user-quick-edit-form-DkUp33AY.js";import{C as E}from"./confirm-dialog-CfE53hWp.js";import{C as te}from"./custom-breadcrumbs-CnRCretL.js";import{u as oe,g as ae,r as le,T as ne,a as re,e as ie}from"./table-selected-action-Cgn9qQis.js";import{T as ce}from"./table-no-data-D5fgAy-Q.js";import{T as de,a as me,b as he,c as pe}from"./table-head-custom-BwAPFtwe.js";import{T as ue}from"./table-pagination-custom-sK7wTfre.js";import{T as u}from"./TableCell-ljoaX5oi.js";import{C as U}from"./Checkbox-BfbryewD.js";import{F as xe}from"./FormControl-BFlCQpvi.js";import{I as je}from"./InputLabel-D2FT-Pcv.js";import{S as ge,O as be}from"./Select-DE7_tqxX.js";import{T as Ce}from"./TextField-BEm0Gfgz.js";import{I as we}from"./InputAdornment-CznJJWQj.js";import{F as ve,a as v,c as S}from"./filters-result-BnQFy5UF.js";import{C as f}from"./Chip-lc0vODcu.js";import"./image-7Gw8g56m.js";import"./form-provider-Cj0Z9UsE.js";import"./FormHelperText-CiWaMPMf.js";import"./formControlState-Dq1zat_P.js";import"./Rating-D1epoFLf.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-56m6PEpo.js";import"./Menu-Di83eYAm.js";import"./index-DTyO1f1S.js";import"./Slider--FnFNgPJ.js";import"./FormLabel-CKyhTT_V.js";import"./RadioGroup-C-GnO1ca.js";import"./FormGroup-BE8TyzSB.js";import"./FormControlLabel-CSqTNcaw.js";import"./index-KeOEaw8h.js";import"./countries-DSLisFCy.js";import"./Autocomplete-DnVwYLlc.js";import"./country-select-DkXlsKd6.js";import"./upload-avatar-jEC4OtmL.js";import"./format-number-BW6JEF9q.js";import"./DatePicker-CRaT7_Tx.js";import"./DialogContent-B0tqVN_s.js";import"./ListItem-Eefms6HN.js";import"./MobileDateTimePicker-CghIhRUp.js";import"./schema-helper-DOzR5VHI.js";import"./LoadingButton-BI3VwLzw.js";import"./CircularProgress-CX5vuYgb.js";import"./DialogTitle-BCkrw5VA.js";import"./empty-content-v04S0NJf.js";import"./TablePagination-Dir7BHGy.js";import"./LastPage-B3GbPSnl.js";import"./InputBase-D6UR9yYG.js";import"./utils-DoM3o7-Q.js";function Se({row:s,selected:r,onEditRow:i,onSelectRow:l,onDeleteRow:m}){const n=R(),t=T(),a=R();return e.jsxs(e.Fragment,{children:[e.jsxs(de,{hover:!0,selected:r,"aria-checked":r,tabIndex:-1,children:[e.jsx(u,{padding:"checkbox",children:e.jsx(U,{id:s.id,checked:r,onClick:l})}),e.jsx(u,{children:e.jsxs(g,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(_,{alt:s.name,src:s.avatarUrl}),e.jsxs(g,{sx:{typography:"body2",flex:"1 1 auto",alignItems:"flex-start"},children:[e.jsx(z,{color:"inherit",onClick:i,sx:{cursor:"pointer"},children:s.name}),e.jsx(F,{component:"span",sx:{color:"text.disabled"},children:s.email})]})]})}),e.jsx(u,{sx:{whiteSpace:"nowrap"},children:s.phoneNumber}),e.jsx(u,{sx:{whiteSpace:"nowrap"},children:s.company}),e.jsx(u,{sx:{whiteSpace:"nowrap"},children:s.role}),e.jsx(u,{children:e.jsx(I,{variant:"soft",color:s.status==="active"&&"success"||s.status==="pending"&&"warning"||s.status==="banned"&&"error"||"default",children:s.status})}),e.jsx(u,{children:e.jsxs(g,{direction:"row",alignItems:"center",children:[e.jsx(y,{title:"Quick Edit",placement:"top",arrow:!0,children:e.jsx(C,{color:a.value?"inherit":"default",onClick:a.onTrue,children:e.jsx(p,{icon:"solar:pen-bold"})})}),e.jsx(C,{color:t.open?"inherit":"default",onClick:t.onOpen,children:e.jsx(p,{icon:"eva:more-vertical-fill"})})]})})]}),e.jsx(se,{currentUser:s,open:a.value,onClose:a.onFalse}),e.jsx(D,{open:t.open,anchorEl:t.anchorEl,onClose:t.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(A,{children:[e.jsxs(j,{onClick:()=>{i(),t.onClose()},children:[e.jsx(p,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(j,{onClick:()=>{n.onTrue(),t.onClose()},sx:{color:"error.main"},children:[e.jsx(p,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})}),e.jsx(E,{open:n.value,onClose:n.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(k,{variant:"contained",color:"error",onClick:m,children:"Delete"})})]})}function fe({filters:s,options:r,onResetPage:i}){const l=T(),m=d.useCallback(t=>{i(),s.setState({name:t.target.value})},[s,i]),n=d.useCallback(t=>{const a=typeof t.target.value=="string"?t.target.value.split(","):t.target.value;i(),s.setState({role:a})},[s,i]);return e.jsxs(e.Fragment,{children:[e.jsxs(g,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[e.jsxs(xe,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[e.jsx(je,{htmlFor:"user-filter-role-select-label",children:"Role"}),e.jsx(ge,{multiple:!0,value:s.state.role,onChange:n,input:e.jsx(be,{label:"Role"}),renderValue:t=>t.map(a=>a).join(", "),inputProps:{id:"user-filter-role-select-label"},MenuProps:{PaperProps:{sx:{maxHeight:240}}},children:r.roles.map(t=>e.jsxs(j,{value:t,children:[e.jsx(U,{disableRipple:!0,size:"small",checked:s.state.role.includes(t)}),t]},t))})]}),e.jsxs(g,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[e.jsx(Ce,{fullWidth:!0,value:s.state.name,onChange:m,placeholder:"Search...",InputProps:{startAdornment:e.jsx(we,{position:"start",children:e.jsx(p,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(C,{onClick:l.onOpen,children:e.jsx(p,{icon:"eva:more-vertical-fill"})})]})]}),e.jsx(D,{open:l.open,anchorEl:l.anchorEl,onClose:l.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(A,{children:[e.jsxs(j,{onClick:()=>{l.onClose()},children:[e.jsx(p,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),e.jsxs(j,{onClick:()=>{l.onClose()},children:[e.jsx(p,{icon:"solar:import-bold"}),"Import"]}),e.jsxs(j,{onClick:()=>{l.onClose()},children:[e.jsx(p,{icon:"solar:export-bold"}),"Export"]})]})})]})}function Re({filters:s,onResetPage:r,totalResults:i,sx:l}){const m=d.useCallback(()=>{r(),s.setState({name:""})},[s,r]),n=d.useCallback(()=>{r(),s.setState({status:"all"})},[s,r]),t=d.useCallback(c=>{const x=s.state.role.filter(w=>w!==c);r(),s.setState({role:x})},[s,r]),a=d.useCallback(()=>{r(),s.onResetState()},[s,r]);return e.jsxs(ve,{totalResults:i,onReset:a,sx:l,children:[e.jsx(v,{label:"Status:",isShow:s.state.status!=="all",children:e.jsx(f,{...S,label:s.state.status,onDelete:n,sx:{textTransform:"capitalize"}})}),e.jsx(v,{label:"Role:",isShow:!!s.state.role.length,children:s.state.role.map(c=>d.createElement(f,{...S,key:c,label:c,onDelete:()=>t(c)}))}),e.jsx(v,{label:"Keyword:",isShow:!!s.state.name,children:e.jsx(f,{...S,label:s.state.name,onDelete:m})})]})}const ke=[{value:"all",label:"All"},...Y],Pe=[{id:"name",label:"Name"},{id:"phoneNumber",label:"Phone number",width:180},{id:"company",label:"Company",width:220},{id:"role",label:"Role",width:180},{id:"status",label:"Status",width:100},{id:"",width:88}];function Te(){const s=oe(),r=H(),i=R(),[l,m]=d.useState(V),n=G({name:"",role:[],status:"all"}),t=Fe({inputData:l,comparator:ae(s.order,s.orderBy),filters:n.state}),a=le(t,s.page,s.rowsPerPage),c=!!n.state.name||n.state.role.length>0||n.state.status!=="all",x=!t.length&&c||!t.length,w=d.useCallback(o=>{const h=l.filter(O=>O.id!==o);P.success("Delete success!"),m(h),s.onUpdatePageDeleteRow(a.length)},[a.length,s,l]),L=d.useCallback(()=>{const o=l.filter(h=>!s.selected.includes(h.id));P.success("Delete success!"),m(o),s.onUpdatePageDeleteRows({totalRowsInPage:a.length,totalRowsFiltered:t.length})},[t.length,a.length,s,l]),B=d.useCallback(o=>{r.push(b.dashboard.user.edit(o))},[r]),N=d.useCallback((o,h)=>{s.onResetPage(),n.setState({status:h})},[n,s]);return e.jsxs(e.Fragment,{children:[e.jsxs(J,{children:[e.jsx(te,{heading:"List",links:[{name:"Dashboard",href:b.dashboard.root},{name:"User",href:b.dashboard.user.root},{name:"List"}],action:e.jsx(k,{component:M,href:b.dashboard.user.new,variant:"contained",startIcon:e.jsx(p,{icon:"mingcute:add-line"}),children:"New user"}),sx:{mb:{xs:3,md:5}}}),e.jsxs(K,{children:[e.jsx(Q,{value:n.state.status,onChange:N,sx:{px:2.5,boxShadow:o=>`inset 0 -2px 0 0 ${W(o.vars.palette.grey["500Channel"],.08)}`},children:ke.map(o=>e.jsx($,{iconPosition:"end",value:o.value,label:o.label,icon:e.jsx(I,{variant:(o.value==="all"||o.value===n.state.status)&&"filled"||"soft",color:o.value==="active"&&"success"||o.value==="pending"&&"warning"||o.value==="banned"&&"error"||"default",children:["active","pending","banned","rejected"].includes(o.value)?l.filter(h=>h.status===o.value).length:l.length})},o.value))}),e.jsx(fe,{filters:n,onResetPage:s.onResetPage,options:{roles:q}}),c&&e.jsx(Re,{filters:n,totalResults:t.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(F,{sx:{position:"relative"},children:[e.jsx(ne,{dense:s.dense,numSelected:s.selected.length,rowCount:t.length,onSelectAllRows:o=>s.onSelectAllRows(o,t.map(h=>h.id)),action:e.jsx(y,{title:"Delete",children:e.jsx(C,{color:"primary",onClick:i.onTrue,children:e.jsx(p,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(X,{children:e.jsxs(me,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(he,{order:s.order,orderBy:s.orderBy,headLabel:Pe,rowCount:t.length,numSelected:s.selected.length,onSort:s.onSort,onSelectAllRows:o=>s.onSelectAllRows(o,t.map(h=>h.id))}),e.jsxs(pe,{children:[t.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(o=>e.jsx(Se,{row:o,selected:s.selected.includes(o.id),onSelectRow:()=>s.onSelectRow(o.id),onDeleteRow:()=>w(o.id),onEditRow:()=>B(o.id)},o.id)),e.jsx(re,{height:s.dense?56:76,emptyRows:ie(s.page,s.rowsPerPage,t.length)}),e.jsx(ce,{notFound:x})]})]})})]}),e.jsx(ue,{page:s.page,dense:s.dense,count:t.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})]}),e.jsx(E,{open:i.value,onClose:i.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",s.selected.length," "]})," items?"]}),action:e.jsx(k,{variant:"contained",color:"error",onClick:()=>{L(),i.onFalse()},children:"Delete"})})]})}function Fe({inputData:s,comparator:r,filters:i}){const{name:l,status:m,role:n}=i,t=s.map((a,c)=>[a,c]);return t.sort((a,c)=>{const x=r(a[0],c[0]);return x!==0?x:a[1]-c[1]}),s=t.map(a=>a[0]),l&&(s=s.filter(a=>a.name.toLowerCase().indexOf(l.toLowerCase())!==-1)),m!=="all"&&(s=s.filter(a=>a.status===m)),n.length&&(s=s.filter(a=>n.includes(a.role))),s}const Ie={title:`User list | Dashboard - ${ee.site.name}`};function Ps(){return e.jsxs(e.Fragment,{children:[e.jsx(Z,{children:e.jsxs("title",{children:[" ",Ie.title]})}),e.jsx(Te,{})]})}export{Ps as default};
