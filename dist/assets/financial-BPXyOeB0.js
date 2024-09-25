import{o as j,bO as O,j as e,aJ as B,w as z,I as b,dw as W,bQ as J,em as v,bR as U,e as R,bU as x,r as p,D as k,S as Y,dz as V,eo as G,dI as $,e8 as X,p as I,aD as Z,B as ee,dy as te,dJ as y,dH as f,dK as S,ec as ae,H as se,C as re}from"./index-D9XQ5HZn.js";import{u as oe,E as ne}from"./error-block-w_O0iSRH.js";import{u as T}from"./useMutation-ts4flLpu.js";import{C as ie}from"./custom-breadcrumbs-CazdlgA0.js";import{P as A}from"./permission-access-controller-CBnTTSPg.js";import{u as le,g as de,r as ce,T as me,a as pe,e as ue}from"./table-selected-action-KNwZffED.js";import{T as he}from"./table-no-data-B6s3Ok4M.js";import{T as xe,a as ge,b as je,c as ye}from"./table-head-custom-CmnvuSVC.js";import{T as fe}from"./table-pagination-custom-Bx7mhuFH.js";import{C as be}from"./confirm-dialog-CY42tOB4.js";import{T as g}from"./TableCell-BQnM0xNZ.js";import{z as Ce,u as De,t as Fe,a as Pe,F as E}from"./form-provider-CxGM2Unr.js";import"./image--crxJX70.js";import"./editor-4sPkqXXa.js";import{s as w}from"./schema-helper-DD3saLjd.js";import{a as Se,b as Te,D as Ee}from"./DialogContent-COSPx22v.js";import{D as we}from"./DialogTitle-CwAPclTX.js";import{L as ve}from"./LoadingButton-EVY8EkwD.js";import{T as Ie}from"./TextField-DX4sIYOy.js";import{I as Ae}from"./InputAdornment-DzIVUKKm.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-DF3g1Q_L.js";import"./empty-content-Bkzy38Qy.js";import"./TablePagination-Daqijhxj.js";import"./KeyboardArrowRight-D9a5UIDu.js";import"./LastPage-C7MjNvcm.js";import"./Select-DEn4EjE4.js";import"./Menu-ChOTQt8U.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DsCQaGZz.js";import"./FormControlLabel-CQyLNxlb.js";import"./FormHelperText-BUvJKjZo.js";import"./Rating-Dz1lJuYA.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-BZBxWU4Q.js";import"./FormControl-B_14xPvO.js";import"./FormLabel-ousI8yIh.js";import"./RadioGroup-BU5nUuP7.js";import"./FormGroup-Bfb8EGRU.js";import"./index-Ck2jm1rT.js";import"./countries-DSLisFCy.js";import"./Autocomplete-CbHgTFzS.js";import"./Chip-DtnMtqyD.js";import"./country-select-CcbLyBYj.js";import"./InputLabel-DS6Prtxn.js";import"./upload-avatar-AxagYmpF.js";import"./format-number-B7RckPke.js";import"./DatePicker-CHI830Hp.js";import"./ListItem-DkD46tOc.js";import"./MobileDateTimePicker-Dp-kczs0.js";import"./Tabs-B9OWTzrp.js";import"./index-DaWlhWs_.js";import"./CircularProgress-Cg-Vm1oQ.js";const Re=({row:t,selected:a,onDeleteRow:n,onEditRow:o})=>{const l=j(),s=O(),d=e.jsxs(xe,{hover:!0,selected:a,children:[e.jsx(g,{children:t==null?void 0:t.year}),e.jsx(g,{children:B(t==null?void 0:t.startDate)}),e.jsx(g,{children:B(t==null?void 0:t.endDate)}),e.jsx(g,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(z,{color:s.open?"inherit":"default",onClick:s.onOpen,children:e.jsx(b,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[d,e.jsx(W,{open:s.open,anchorEl:s.anchorEl,onClose:s.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsx(J,{children:e.jsx(A,{permission:v.EDIT_FINANCIAL_YEAR,children:e.jsxs(U,{onClick:()=>{o(),s.onClose()},children:[e.jsx(b,{icon:"solar:pen-bold"}),"Edit"]})})})}),e.jsx(be,{open:l.value,onClose:l.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(R,{variant:"contained",color:"error",onClick:n,children:"Delete"})})]})},Ye=Ce.object({year:w.date({message:{required_error:"Year is required!"}}),startDate:w.date({message:{required_error:"Start date is required!"}}),endDate:w.date({message:{required_error:"End date is required!"}})}),L=({financial:t,open:a,onClose:n,handler:o})=>{const l={year:(t==null?void 0:t.year)||x(),startDate:(t==null?void 0:t.startDate)||x(),endDate:(t==null?void 0:t.endDate)||x()};p.useEffect(()=>{t&&u(l)},[t]);const[s,d]=p.useState(""),i=De({resolver:Fe(Ye),defaultValues:l}),{reset:u,handleSubmit:m,formState:{isSubmitting:h}}=i,C=m(async D=>{try{const c={...D};c.year=x(c.year).format("YYYY"),t?await o({id:t.id,payload:c}):await o(c),u()}catch(c){console.log(c),d(c instanceof Error?c.message:c)}});return e.jsxs(Se,{fullWidth:!0,open:a,onClose:n,children:[e.jsx(we,{children:"Add Financial"}),e.jsx(k,{}),!!s&&e.jsx(Alert,{severity:"error",sx:{mb:3},children:s}),e.jsxs(Pe,{methods:i,onSubmit:C,children:[e.jsx(Te,{children:e.jsxs(Y,{spacing:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(1, 1fr)",lg:"repeat1, 1fr)"},children:[e.jsx(E.DatePicker,{views:["year"],format:"YYYY",label:"Year",name:"year",sx:{mt:2}}),e.jsx(E.DatePicker,{fullWidth:!0,label:"Start Date",name:"startDate",sx:{mt:2}}),e.jsx(E.DatePicker,{fullWidth:!0,label:"End Date",name:"endDate",sx:{mt:2}})]})}),e.jsx(k,{sx:{pt:1,mt:1}}),e.jsxs(Ee,{children:[e.jsx(ve,{type:"submit",variant:"contained",children:t?"Save Changes":"Save"}),e.jsx(R,{color:"inherit",variant:"outlined",onClick:n,children:"Cancel"})]})]})]})},Be=({financial:t,open:a,onClose:n,handler:o})=>e.jsx(L,{financial:t,open:a,onClose:n,handler:o});function ke({filters:t,onResetPage:a,options:n}){const o=p.useCallback(l=>{a(),t.setState({name:l.target.value})},[t,a]);return e.jsx(Y,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Ie,{sx:{width:420},value:t.state.name,onChange:o,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(Ae,{position:"start",children:e.jsx(b,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}const Le=[{id:"year",label:"Year",width:140},{id:"startDate",label:"Start Date"},{id:"endDate",label:"End Date"},{id:"",width:88}];function qe({financialYears:t}){const a=le({defaultOrderBy:"orderNumber"}),n=j(),o=j(),l=j(),[s,d]=p.useState(t),i=V({name:""}),u=G(i.state.startDate,i.state.endDate);p.useEffect(()=>{d(t)},[t]);const m=Ne({inputData:s,comparator:de(a.order,a.orderBy),filters:i.state}),h=ce(m,a.page,a.rowsPerPage),C=!!i.state.name||i.state.status!=="all"||!!i.state.startDate&&!!i.state.endDate,D=!m.length&&C||!m.length,c=p.useCallback(r=>{_(r)},[h.length,a,s]),[q,N]=p.useState(),H=p.useCallback(r=>{N(r),o.onToggle()},[h.length,a,s]),F=$(),{mutate:_}=T({mutationFn:r=>y.delete(f.financial.delete+r),onSuccess:async r=>{const P=s.filter(K=>K.id!==r);S.success("Delete success!"),d(P),a.onUpdatePageDeleteRow(h.length),l.onFalse()},onSettled:async()=>{await F.invalidateQueries({queryKey:["financial-year"]}),l.onFalse()},onError:()=>{}}),{mutate:M}=T({mutationFn:r=>y.post(f.financial.create,r),onSuccess:async()=>{S.success("New Financial Year Has Been Created!")},onSettled:async()=>{await F.invalidateQueries({queryKey:["financial-year"]}),n.onFalse()},onError:r=>{console.log(r)}}),{mutate:Q}=T({mutationFn:({id:r,payload:P})=>y.patch(f.financial.edit+r,P),onSuccess:async()=>{S.success("Financial Year Has Been Modified!")},onSettled:async()=>{await F.invalidateQueries({queryKey:["financial-year"]}),o.onFalse()},onError:r=>{console.log(r)}});return e.jsxs(X,{children:[e.jsxs(Y,{spacing:3,children:[e.jsx(ie,{links:[{name:"Dashboard",href:I.dashboard.root},{name:"Tools",href:I.dashboard.tools.root},{name:"Financial Year"}],sx:{mb:{xs:3,md:5}},action:e.jsx(A,{permission:v.ADD_FINANCIAL_YEAR,children:e.jsx(R,{onClick:()=>n.onToggle(),variant:"contained",startIcon:e.jsx(b,{icon:"mingcute:add-line"}),children:"Add Financial Year"})})}),e.jsx(A,{permission:v.FINANCIAL_LIST,children:e.jsxs(Z,{children:[e.jsx(ke,{filters:i,onResetPage:a.onResetPage,dateError:u}),e.jsxs(ee,{sx:{position:"relative"},children:[e.jsx(me,{dense:a.dense,numSelected:a.selected.length,rowCount:m.length}),e.jsx(te,{sx:{minHeight:444},children:e.jsxs(ge,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(je,{order:a.order,orderBy:a.orderBy,headLabel:Le,rowCount:m.length}),e.jsxs(ye,{children:[m.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map(r=>e.jsx(Re,{row:r,selected:a.selected.includes(r.id),onEditRow:()=>H(r),onDeleteRow:()=>c(r.id)},r.id)),e.jsx(pe,{height:a.dense?56:76,emptyRows:ue(a.page,a.rowsPerPage,m.length)}),e.jsx(he,{notFound:D})]})]})})]}),e.jsx(fe,{page:a.page,dense:a.dense,count:m.length,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onChangeDense:a.onChangeDense,onRowsPerPageChange:a.onChangeRowsPerPage})]})})]}),e.jsx(L,{open:n.value,onClose:n.onFalse,handler:M}),e.jsx(Be,{financial:q,open:o.value,onClose:o.onFalse,handler:Q})]})}function Ne({inputData:t,comparator:a,filters:n}){const{name:o}=n,l=t.map((s,d)=>[s,d]);return l.sort((s,d)=>{const i=a(s[0],d[0]);return i!==0?i:s[1]-d[1]}),t=l.map(s=>s[0]),o&&(t=t.filter(s=>s.year.toLowerCase().indexOf(o.toLowerCase())!==-1)),t}const He={title:`Tools | Dashboard - ${re.site.name}`};function Qt(){const t=oe({queryKey:["financial-year"],queryFn:async()=>{const{data:a}=await y.get(f.financial.list);return a}});return t.isPending||t.isLoading?e.jsx(ae,{}):t.isError?e.jsx(ne,{route:I.dashboard.tools.root}):e.jsxs(e.Fragment,{children:[e.jsx(se,{children:e.jsxs("title",{children:[" ",He.title]})}),e.jsx(qe,{financialYears:t.data})]})}export{Qt as default};