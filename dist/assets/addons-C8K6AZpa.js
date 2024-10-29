import{i as C,b5 as K,j as e,d7 as V,l as L,I as f,db as z,b7 as G,e2 as D,b8 as B,e as F,r as h,am as N,n as J,S as R,de as U,ec as $,dn as X,dP as Y,p as I,aB as Z,B as ee,cn as te,dd as se,ed as oe,dp as y,dm as T,dq as S,dT as ae,H as re,C as ne}from"./index-bfXnrd_B.js";import{u as ie,E as le}from"./error-block-l-vwuuSv.js";import{u as E}from"./useMutation-BPIbqlZf.js";import{C as de}from"./custom-breadcrumbs-DCz3ADG5.js";import{P as A}from"./permission-access-controller-kwas-atQ.js";import{g as ce,r as me,e as ue}from"./utils-MBUcMVfY.js";import{u as pe}from"./use-table-CR-aBkJV.js";import{T as he}from"./table-no-data-OkhSt8KR.js";import{T as xe}from"./table-empty-rows-vD6O0yFh.js";import{T as ge,a as fe,b as je,c as be}from"./table-head-custom-Bj_XyIaF.js";import{T as Pe}from"./table-selected-action-DBgBQHco.js";import{T as Ce}from"./table-pagination-custom-B8C9Cxh7.js";import{b as ye}from"./format-number-DOsPFhv2.js";import{C as Te}from"./confirm-dialog-PkmEc3uL.js";import{T as b}from"./TableCell-C8-lwuvg.js";import{z as P,u as De,t as Ae,a as ve,F as w}from"./form-provider-nTgntoFY.js";import"./image-MPJgE1is.js";import"./editor-CsabuRV8.js";import{a as Se,b as Ee,D as we}from"./DialogContent-Cw_V6ejY.js";import{D as Ie}from"./DialogTitle-BZGU_tSa.js";import{L as Fe}from"./LoadingButton-CFXRI1VR.js";import{T as Re}from"./TextField-BKEfnHMn.js";import{I as Be}from"./InputAdornment-XyO72vbx.js";import{P as Ne}from"./product-table-filters-result-vQ4u2_VI.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-Grgsd3X9.js";import"./Checkbox-Dz0lv2WL.js";import"./TablePagination-CNXnBoCl.js";import"./KeyboardArrowRight-CfVThViv.js";import"./LastPage-Cuc8YEnF.js";import"./Select-ENvlCEnV.js";import"./Menu-B0mZFzHv.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-CbzKRH4y.js";import"./FormControlLabel-CK-ErBpG.js";import"./FormHelperText-SXsIGm93.js";import"./Rating-DSDijT6x.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-CM3DVFxn.js";import"./FormControl-DJjFvo5t.js";import"./FormLabel-mw6hRqxv.js";import"./RadioGroup-D7AmZXs4.js";import"./FormGroup-jxee7TJf.js";import"./utils-b8vptws0.js";import"./index-I9jVg8IY.js";import"./countries-DSLisFCy.js";import"./Autocomplete-B6hzfXfq.js";import"./Chip-BzH34JAD.js";import"./country-select-BNRwtX3c.js";import"./InputLabel-DSm16ipj.js";import"./upload-avatar-DE_scHHR.js";import"./DatePicker-B5wrAIaO.js";import"./ListItem-CmnuLqtj.js";import"./MobileDateTimePicker-CYShLaZM.js";import"./Tabs-YvV0dnqT.js";import"./index-CdglF-NR.js";import"./CircularProgress-DcTVjB1u.js";import"./filters-result-CwNqN0oe.js";const Le=({row:t,index:s,selected:d,onEditRow:r,onDeleteRow:c})=>{const n=C(),i=K(),u=e.jsxs(ge,{hover:!0,selected:d,children:[e.jsx(b,{children:t==null?void 0:t.id}),e.jsx(b,{children:s||(t==null?void 0:t.name)}),e.jsx(b,{children:ye(t==null?void 0:t.price)}),e.jsx(b,{children:e.jsx(V,{variant:"soft",color:t.isActive===!0&&"success"||t.isActive===!1&&"error"||"default",children:t!=null&&t.isActive?"ACTIVE":"INACTIVE"})}),e.jsx(b,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(L,{color:i.open?"inherit":"default",onClick:i.onOpen,children:e.jsx(f,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[u,e.jsx(z,{open:i.open,anchorEl:i.anchorEl,onClose:i.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(G,{children:[e.jsx(A,{permission:D.EDIT_ADDON,children:e.jsxs(B,{onClick:()=>{r(),i.onClose()},children:[e.jsx(f,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(A,{permission:D.DELETE_ADDON,children:e.jsxs(B,{onClick:()=>{n.onTrue(),i.onClose()},sx:{color:"error.main"},children:[e.jsx(f,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Te,{open:n.value,onClose:n.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(F,{variant:"contained",color:"error",onClick:c,children:"Delete"})})]})},ke=P.object({name:P.string().min(1,{message:"Name is required!"}),price:P.number().min(1,{message:"Tax number is required!"}),isActive:P.boolean()}),k=({productAddon:t,open:s,onClose:d,handler:r})=>{const c={name:(t==null?void 0:t.name)||"",price:parseInt(t==null?void 0:t.price)||"",isActive:t==null?void 0:t.isActive};h.useEffect(()=>{t&&x(c)},[t]);const[n,i]=h.useState(""),u=De({resolver:Ae(ke),defaultValues:c}),{reset:x,handleSubmit:o,formState:{isSubmitting:p}}=u,l=o(async j=>{try{const m={...j};t?await r({id:t.id,payload:m}):await r(m),x()}catch(m){console.log(m),i(m instanceof Error?m.message:m)}});return e.jsxs(Se,{fullWidth:!0,open:s,onClose:d,children:[e.jsx(Ie,{children:"Add Addon"}),e.jsx(N,{}),!!n&&e.jsx(J,{severity:"error",sx:{mb:3},children:n}),e.jsxs(ve,{methods:u,onSubmit:l,children:[e.jsx(Ee,{children:e.jsxs(R,{spacing:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(w.Text,{fullWidth:!0,label:"Enter Addon Name",name:"name",sx:{mt:2}}),e.jsx(w.Text,{fullWidth:!0,type:"number",label:"Enter Addon Price",name:"price",sx:{mt:2}}),e.jsx(w.Switch,{name:"isActive",label:"Is Active?"})]})}),e.jsx(N,{sx:{pt:1,mt:1}}),e.jsxs(we,{children:[e.jsx(Fe,{type:"submit",variant:"contained",children:t?"Save Changes":"Save"}),e.jsx(F,{color:"inherit",variant:"outlined",onClick:d,children:"Cancel"})]})]})]})},qe=({productAddon:t,open:s,onClose:d,handler:r})=>e.jsx(k,{productAddon:t,open:s,onClose:d,handler:r});function Oe({filters:t,onResetPage:s,options:d}){const r=h.useCallback(c=>{s(),t.setState({name:c.target.value})},[t,s]);return e.jsx(R,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Re,{sx:{width:420},value:t.state.name,onChange:r,placeholder:"Search by Product Addon Name or Id Number...",InputProps:{startAdornment:e.jsx(Be,{position:"start",children:e.jsx(f,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}const He=[{id:"addonId",label:"No.",width:60},{id:"addon",label:"Addon",width:240},{id:"price",label:"Price",width:140},{id:"status",label:"Status",width:140},{id:"",width:88}];function Me({productAddons:t}){const s=pe({defaultOrderBy:"planId"}),d=C(),r=C(),c=C(),[n,i]=h.useState(t),[u,x]=h.useState(),o=U({name:"",status:"all",startDate:null,endDate:null});h.useEffect(()=>{i(t)},[t]);const p=$(o.state.startDate,o.state.endDate),l=Qe({inputData:n,comparator:ce(s.order,s.orderBy),filters:o.state,dateError:p}),j=me(l,s.page,s.rowsPerPage),m=!!o.state.name||o.state.status!=="all"||!!o.state.startDate&&!!o.state.endDate,q=!l.length&&m||!l.length,O=h.useCallback(a=>{W(a)},[j.length,s,n]),H=h.useCallback(a=>{x(a),r.onToggle()},[j.length,s,n]),v=X(),{mutate:M}=E({mutationFn:a=>y.post(T.productAddons.create,a),onSuccess:async()=>{S.success("New Product Addon Has Been Created!")},onSettled:async()=>{await v.invalidateQueries({queryKey:["product-addons"]}),d.onFalse()},onError:a=>{console.log(a)}}),{mutate:Q}=E({mutationFn:({id:a,payload:g})=>y.patch(T.productAddons.edit+a,g),onSuccess:async()=>{S.success("New Product Addon Has Been Modified!")},onSettled:async()=>{await v.invalidateQueries({queryKey:["product-addons"]}),r.onFalse()},onError:a=>{console.log(a)}}),{mutate:W}=E({mutationFn:a=>y.delete(T.productAddons.delete+a),onSuccess:async a=>{const g=n.filter(_=>_.id!==a);S.success("Delete success!"),i(g),s.onUpdatePageDeleteRow(j.length)},onSettled:async()=>{await v.invalidateQueries({queryKey:["product-addons"]})},onError:a=>{console.log(a)}});return e.jsxs(e.Fragment,{children:[e.jsx(Y,{maxWidth:"xl",children:e.jsxs(R,{spacing:3,children:[e.jsx(de,{links:[{name:"Dashboard",href:I.dashboard.root},{name:"Products",href:I.dashboard.product.root},{name:"Product Addons"}],action:e.jsx(A,{permission:D.ADD_ADDON,children:e.jsx(F,{onClick:()=>d.onToggle(),variant:"contained",startIcon:e.jsx(f,{icon:"mingcute:add-line"}),children:"Add New Addon"})})}),e.jsx(A,{permission:D.LIST_ADDON,children:e.jsxs(Z,{children:[e.jsx(Oe,{filters:o,onResetPage:s.onResetPage,dateError:p}),m&&e.jsx(Ne,{filters:o,totalResults:l.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(ee,{sx:{position:"relative"},children:[e.jsx(Pe,{dense:s.dense,numSelected:s.selected.length,rowCount:l.length,onSelectAllRows:a=>s.onSelectAllRows(a,l.map(g=>g.id)),action:e.jsx(te,{title:"Delete",children:e.jsx(L,{color:"primary",onClick:c.onTrue,children:e.jsx(f,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(se,{sx:{minHeight:200},children:e.jsxs(fe,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(je,{order:s.order,orderBy:s.orderBy,headLabel:He,rowCount:l.length}),l.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((a,g)=>e.jsx(Le,{row:a,index:s.page*s.rowsPerPage+g+1,selected:s.selected.includes(a.id),onEditRow:()=>H(a),onDeleteRow:()=>O(a.id)},a.id)),e.jsxs(be,{children:[e.jsx(xe,{height:s.dense?56:76,emptyRows:ue(s.page,s.rowsPerPage,l.length)}),e.jsx(he,{notFound:q})]})]})})]}),e.jsx(Ce,{page:s.page,dense:s.dense,count:l.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})}),e.jsx(k,{open:d.value,onClose:d.onFalse,handler:M}),e.jsx(qe,{open:r.value,onClose:r.onFalse,handler:Q,productAddon:u})]})}function Qe({inputData:t,comparator:s,filters:d,dateError:r}){const{status:c,name:n,startDate:i,endDate:u}=d,x=t.map((o,p)=>[o,p]);return x.sort((o,p)=>{const l=s(o[0],p[0]);return l!==0?l:o[1]-p[1]}),t=x.map(o=>o[0]),n&&(t=t.filter(o=>o.id.toString().toLowerCase().indexOf(n.toLowerCase())!==-1||o.name.toLowerCase().indexOf(n.toLowerCase())!==-1)),c!=="all"&&(t=t.filter(o=>o.status===c)),r||i&&u&&(t=t.filter(o=>oe(o.createdAt,i,u))),t}const We={title:`Product Addons | Dashboard - ${ne.site.name}`};function $t(){const t=ie({queryKey:["product-addons"],queryFn:async()=>{const{data:s}=await y.get(T.productAddons.list);return s}});return t.isPending||t.isLoading?e.jsx(ae,{}):t.isError?e.jsx(le,{route:I.dashboard.product.root}):e.jsxs(e.Fragment,{children:[e.jsx(re,{children:e.jsxs("title",{children:[" ",We.title]})}),e.jsx(Me,{productAddons:t.data})]})}export{$t as default};
