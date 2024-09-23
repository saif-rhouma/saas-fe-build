import{w as P,bG as O,j as e,du as Q,y as B,I as g,dz as W,bI as V,bJ as I,e as E,r as p,D as R,z as G,S as F,dC as J,eq as U,dL as _,eb as $,p as D,aF as X,B as Y,dw as Z,dB as ee,er as te,dM as y,dK as T,dN as S,ef as se,H as oe,C as ae}from"./index-lMp9zap6.js";import{u as re,E as ne}from"./error-block-DXWblvjp.js";import{u as w}from"./useMutation-B2tKEkiI.js";import{C as ie}from"./custom-breadcrumbs-CnRCretL.js";import{u as le,g as de,r as ce,T as me,a as ue,e as pe}from"./table-selected-action-Cgn9qQis.js";import{T as he}from"./table-no-data-D5fgAy-Q.js";import{T as xe,a as ge,b as fe,c as je}from"./table-head-custom-BwAPFtwe.js";import{T as be}from"./table-pagination-custom-sK7wTfre.js";import{b as Ce}from"./format-number-BW6JEF9q.js";import{C as Pe}from"./confirm-dialog-CfE53hWp.js";import{T as b}from"./TableCell-ljoaX5oi.js";import{z as C,u as ye,t as Te,a as ve,F as A}from"./form-provider-Cj0Z9UsE.js";import"./image-7Gw8g56m.js";import"./editor-56m6PEpo.js";import{a as Se,b as we,D as Ae}from"./DialogContent-B0tqVN_s.js";import{D as De}from"./DialogTitle-BCkrw5VA.js";import{L as Ee}from"./LoadingButton-BI3VwLzw.js";import{T as Fe}from"./TextField-BEm0Gfgz.js";import{I as Ie}from"./InputAdornment-CznJJWQj.js";import{P as Re}from"./product-table-filters-result-ONSMrQLn.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-BfbryewD.js";import"./empty-content-v04S0NJf.js";import"./TablePagination-Dir7BHGy.js";import"./LastPage-B3GbPSnl.js";import"./Select-DE7_tqxX.js";import"./Menu-Di83eYAm.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-D6UR9yYG.js";import"./FormControlLabel-CSqTNcaw.js";import"./FormHelperText-CiWaMPMf.js";import"./Rating-D1epoFLf.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider--FnFNgPJ.js";import"./FormControl-BFlCQpvi.js";import"./FormLabel-CKyhTT_V.js";import"./RadioGroup-C-GnO1ca.js";import"./FormGroup-BE8TyzSB.js";import"./index-KeOEaw8h.js";import"./countries-DSLisFCy.js";import"./Autocomplete-DnVwYLlc.js";import"./Chip-lc0vODcu.js";import"./country-select-DkXlsKd6.js";import"./InputLabel-D2FT-Pcv.js";import"./upload-avatar-jEC4OtmL.js";import"./DatePicker-CRaT7_Tx.js";import"./ListItem-Eefms6HN.js";import"./MobileDateTimePicker-CghIhRUp.js";import"./index-DTyO1f1S.js";import"./CircularProgress-CX5vuYgb.js";import"./filters-result-BnQFy5UF.js";const Be=({row:t,selected:s,onEditRow:l,onDeleteRow:n})=>{const d=P(),r=O(),m=e.jsxs(xe,{hover:!0,selected:s,children:[e.jsx(b,{children:t==null?void 0:t.id}),e.jsx(b,{children:t==null?void 0:t.name}),e.jsx(b,{children:Ce(t==null?void 0:t.price)}),e.jsx(b,{children:e.jsx(Q,{variant:"soft",color:t.isActive===!0&&"success"||t.isActive===!1&&"error"||"default",children:t!=null&&t.isActive?"ACTIVE":"INACTIVE"})}),e.jsx(b,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(B,{color:r.open?"inherit":"default",onClick:r.onOpen,children:e.jsx(g,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[m,e.jsx(W,{open:r.open,anchorEl:r.anchorEl,onClose:r.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(V,{children:[e.jsxs(I,{onClick:()=>{l(),r.onClose()},children:[e.jsx(g,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(I,{onClick:()=>{d.onTrue(),r.onClose()},sx:{color:"error.main"},children:[e.jsx(g,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})}),e.jsx(Pe,{open:d.value,onClose:d.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(E,{variant:"contained",color:"error",onClick:n,children:"Delete"})})]})},ke=C.object({name:C.string().min(1,{message:"Name is required!"}),price:C.number().min(1,{message:"Tax number is required!"}),isActive:C.boolean()}),k=({productAddon:t,open:s,onClose:l,handler:n})=>{const d={name:(t==null?void 0:t.name)||"",price:parseInt(t==null?void 0:t.price)||"",isActive:t==null?void 0:t.isActive};p.useEffect(()=>{t&&x(d)},[t]);const[r,m]=p.useState(""),h=ye({resolver:Te(ke),defaultValues:d}),{reset:x,handleSubmit:o,formState:{isSubmitting:u}}=h,i=o(async f=>{try{const c={...f};t?await n({id:t.id,payload:c}):await n(c),x()}catch(c){console.log(c),m(c instanceof Error?c.message:c)}});return e.jsxs(Se,{fullWidth:!0,open:s,onClose:l,children:[e.jsx(De,{children:"Add Addon"}),e.jsx(R,{}),!!r&&e.jsx(G,{severity:"error",sx:{mb:3},children:r}),e.jsxs(ve,{methods:h,onSubmit:i,children:[e.jsx(we,{children:e.jsxs(F,{spacing:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(A.Text,{fullWidth:!0,label:"Enter Addon Name",name:"name",sx:{mt:2}}),e.jsx(A.Text,{fullWidth:!0,type:"number",label:"Enter Addon Price",name:"price",sx:{mt:2}}),e.jsx(A.Switch,{name:"isActive",label:"Is Active?"})]})}),e.jsx(R,{sx:{pt:1,mt:1}}),e.jsxs(Ae,{children:[e.jsx(Ee,{type:"submit",variant:"contained",children:t?"Save Changes":"Save"}),e.jsx(E,{color:"inherit",variant:"outlined",onClick:l,children:"Cancel"})]})]})]})},Le=({productAddon:t,open:s,onClose:l,handler:n})=>e.jsx(k,{productAddon:t,open:s,onClose:l,handler:n});function Ne({filters:t,onResetPage:s,options:l}){const n=p.useCallback(d=>{s(),t.setState({name:d.target.value})},[t,s]);return e.jsx(F,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Fe,{sx:{width:420},value:t.state.name,onChange:n,placeholder:"Search by Product Addon Name or Id Number...",InputProps:{startAdornment:e.jsx(Ie,{position:"start",children:e.jsx(g,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}const qe=[{id:"addonId",label:"No.",width:60},{id:"addon",label:"Addon",width:240},{id:"price",label:"Price",width:140},{id:"status",label:"Status",width:140},{id:"",width:88}];function He({productAddons:t}){const s=le({defaultOrderBy:"planId"}),l=P(),n=P(),d=P(),[r,m]=p.useState(t),[h,x]=p.useState(),o=J({name:"",status:"all",startDate:null,endDate:null});p.useEffect(()=>{m(t)},[t]);const u=U(o.state.startDate,o.state.endDate),i=Me({inputData:r,comparator:de(s.order,s.orderBy),filters:o.state,dateError:u}),f=ce(i,s.page,s.rowsPerPage),c=!!o.state.name||o.state.status!=="all"||!!o.state.startDate&&!!o.state.endDate,L=!i.length&&c||!i.length,N=p.useCallback(a=>{z(a)},[f.length,s,r]),q=p.useCallback(a=>{x(a),n.onToggle()},[f.length,s,r]),v=_(),{mutate:H}=w({mutationFn:a=>y.post(T.productAddons.create,a),onSuccess:async()=>{S.success("New Product Addon Has Been Created!")},onSettled:async()=>{await v.invalidateQueries({queryKey:["product-addons"]}),l.onFalse()},onError:a=>{console.log(a)}}),{mutate:M}=w({mutationFn:({id:a,payload:j})=>y.patch(T.productAddons.edit+a,j),onSuccess:async()=>{S.success("New Product Addon Has Been Modified!")},onSettled:async()=>{await v.invalidateQueries({queryKey:["product-addons"]}),n.onFalse()},onError:a=>{console.log(a)}}),{mutate:z}=w({mutationFn:a=>y.delete(T.productAddons.delete+a),onSuccess:async a=>{const j=r.filter(K=>K.id!==a);S.success("Delete success!"),m(j),s.onUpdatePageDeleteRow(f.length)},onSettled:async()=>{await v.invalidateQueries({queryKey:["product-addons"]})},onError:a=>{console.log(a)}});return e.jsxs(e.Fragment,{children:[e.jsx($,{maxWidth:"xl",children:e.jsxs(F,{spacing:3,children:[e.jsx(ie,{links:[{name:"Dashboard",href:D.dashboard.root},{name:"Products",href:D.dashboard.product.root},{name:"Product Addons"}],action:e.jsx(E,{onClick:()=>l.onToggle(),variant:"contained",startIcon:e.jsx(g,{icon:"mingcute:add-line"}),children:"Add New Addon"})}),e.jsxs(X,{children:[e.jsx(Ne,{filters:o,onResetPage:s.onResetPage,dateError:u}),c&&e.jsx(Re,{filters:o,totalResults:i.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(Y,{sx:{position:"relative"},children:[e.jsx(me,{dense:s.dense,numSelected:s.selected.length,rowCount:i.length,onSelectAllRows:a=>s.onSelectAllRows(a,i.map(j=>j.id)),action:e.jsx(Z,{title:"Delete",children:e.jsx(B,{color:"primary",onClick:d.onTrue,children:e.jsx(g,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(ee,{sx:{minHeight:200},children:e.jsxs(ge,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(fe,{order:s.order,orderBy:s.orderBy,headLabel:qe,rowCount:i.length}),i.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(a=>e.jsx(Be,{row:a,selected:s.selected.includes(a.id),onEditRow:()=>q(a),onDeleteRow:()=>N(a.id)},a.id)),e.jsxs(je,{children:[e.jsx(ue,{height:s.dense?56:76,emptyRows:pe(s.page,s.rowsPerPage,i.length)}),e.jsx(he,{notFound:L})]})]})})]}),e.jsx(be,{page:s.page,dense:s.dense,count:i.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})]})}),e.jsx(k,{open:l.value,onClose:l.onFalse,handler:H}),e.jsx(Le,{open:n.value,onClose:n.onFalse,handler:M,productAddon:h})]})}function Me({inputData:t,comparator:s,filters:l,dateError:n}){const{status:d,name:r,startDate:m,endDate:h}=l,x=t.map((o,u)=>[o,u]);return x.sort((o,u)=>{const i=s(o[0],u[0]);return i!==0?i:o[1]-u[1]}),t=x.map(o=>o[0]),r&&(t=t.filter(o=>o.id.toString().toLowerCase().indexOf(r.toLowerCase())!==-1||o.name.toLowerCase().indexOf(r.toLowerCase())!==-1)),d!=="all"&&(t=t.filter(o=>o.status===d)),n||m&&h&&(t=t.filter(o=>te(o.createdAt,m,h))),t}const ze={title:`Product Addons | Dashboard - ${ae.site.name}`};function Kt(){const t=re({queryKey:["product-addons"],queryFn:async()=>{const{data:s}=await y.get(T.productAddons.list);return s}});return t.isPending||t.isLoading?e.jsx(se,{}):t.isError?e.jsx(ne,{route:D.dashboard.product.root}):e.jsxs(e.Fragment,{children:[e.jsx(oe,{children:e.jsxs("title",{children:[" ",ze.title]})}),e.jsx(He,{productAddons:t.data})]})}export{Kt as default};
