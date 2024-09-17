import{w as P,bI as V,j as e,dw as z,y as B,I as j,dB as G,bK as J,bL as I,e as T,r as u,D as R,S as F,dE as U,er as _,dN as $,ed as X,p as E,aH as Y,B as Z,dy as ee,dD as te,es as se,dO as y,dM as v,dP as S,eh as oe,H as ae,C as ne}from"./index-BjIn7_qX.js";import{u as re,E as ie}from"./error-block-DgIB22LQ.js";import{u as w}from"./useMutation-qcK55m2F.js";import{C as k}from"./confirm-dialog-9KcycDB8.js";import{C as le}from"./custom-breadcrumbs-BvfCbkJS.js";import{u as de,g as ce,r as me,T as ue,a as he,e as pe}from"./table-selected-action-n7GKjEz8.js";import{T as xe}from"./table-no-data-D4XesE38.js";import{T as ge,a as je,b as fe,c as be}from"./table-head-custom-BUj35xa1.js";import{T as Ce}from"./table-pagination-custom-DQGGW8Eh.js";import{b as Pe}from"./format-number-CVePc8Zq.js";import{T as b}from"./TableCell-CN8hPv6L.js";import{z as C,u as ye,t as ve,F as Te}from"./form-provider-IpIS7QyH.js";import{F as A}from"./fields-CDnR68NQ.js";import"./image-Cp18p2kF.js";import"./editor-BSuX1ABo.js";import{a as De,b as Se,D as we}from"./DialogContent-Y7gFy98Q.js";import{D as Ae}from"./DialogTitle-DGtAiJ5y.js";import{L as Ee}from"./LoadingButton-DnorAK6T.js";import{T as Fe}from"./TextField-DpiQLRVb.js";import{I as Ie}from"./InputAdornment-DyfHBPVt.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-B4RwwnIi.js";import"./empty-content-DUH3kGlt.js";import"./TablePagination-m1Q5_RIf.js";import"./LastPage-CKDegpzl.js";import"./Select-DuF5QBaf.js";import"./Menu-BwYh9-WP.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-B1W2ZC-C.js";import"./FormControlLabel-Cebq6FC-.js";import"./index-DhoXhWEB.js";import"./countries-DSLisFCy.js";import"./FormHelperText-CzQPg626.js";import"./Rating-BiHaY-Qu.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-FnaxrRJO.js";import"./FormControl-7ae63LEX.js";import"./FormLabel-CGBfd-SD.js";import"./RadioGroup-B6OaYHCI.js";import"./FormGroup-g0K-BISM.js";import"./Autocomplete-CgcgI0fc.js";import"./Chip-Csudtta_.js";import"./country-select-BQ80n0Y3.js";import"./InputLabel-CFOghGNi.js";import"./upload-avatar-BmHBzJEB.js";import"./DatePicker-CbfV6klG.js";import"./ListItem-Dqffwavq.js";import"./MobileDateTimePicker-esLuqduG.js";import"./index-DAAlmJgF.js";import"./CircularProgress-DB5GjJT4.js";const Re=({row:t,selected:s,onEditRow:d,onDeleteRow:i})=>{const r=P(),n=V(),c=e.jsxs(ge,{hover:!0,selected:s,children:[e.jsx(b,{children:t==null?void 0:t.id}),e.jsx(b,{children:t==null?void 0:t.name}),e.jsx(b,{children:Pe(t==null?void 0:t.price)}),e.jsx(b,{children:e.jsx(z,{variant:"soft",color:t.isActive===!0&&"success"||t.isActive===!1&&"error"||"default",children:t!=null&&t.isActive?"ACTIVE":"INACTIVE"})}),e.jsx(b,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(B,{color:n.open?"inherit":"default",onClick:n.onOpen,children:e.jsx(j,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[c,e.jsx(G,{open:n.open,anchorEl:n.anchorEl,onClose:n.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(J,{children:[e.jsxs(I,{onClick:()=>{d(),n.onClose()},children:[e.jsx(j,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(I,{onClick:()=>{r.onTrue(),n.onClose()},sx:{color:"error.main"},children:[e.jsx(j,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})}),e.jsx(k,{open:r.value,onClose:r.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(T,{variant:"contained",color:"error",onClick:i,children:"Delete"})})]})},Be=C.object({name:C.string().min(1,{message:"Name is required!"}),price:C.number().min(1,{message:"Tax number is required!"}),isActive:C.boolean()}),L=({productAddon:t,open:s,onClose:d,handler:i})=>{const r={name:(t==null?void 0:t.name)||"",price:parseInt(t==null?void 0:t.price)||"",isActive:(t==null?void 0:t.isActive)||!0};u.useEffect(()=>{t&&x(r)},[t]);const[n,c]=u.useState(""),p=ye({resolver:ve(Be),defaultValues:r}),{reset:x,handleSubmit:a,formState:{isSubmitting:h}}=p,l=a(async g=>{try{const m={...g};t?await i({id:t.id,payload:m}):await i(m),x()}catch(m){console.log(m),c(m instanceof Error?m.message:m)}});return e.jsxs(De,{fullWidth:!0,open:s,onClose:d,children:[e.jsx(Ae,{children:"Add Addon"}),e.jsx(R,{}),!!n&&e.jsx(Alert,{severity:"error",sx:{mb:3},children:n}),e.jsxs(Te,{methods:p,onSubmit:l,children:[e.jsx(Se,{children:e.jsxs(F,{spacing:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(A.Text,{fullWidth:!0,label:"Enter Addon Name",name:"name",sx:{mt:2}}),e.jsx(A.Text,{fullWidth:!0,type:"number",label:"Enter Addon Price",name:"price",sx:{mt:2}}),e.jsx(A.Switch,{name:"isActive",label:"Is Active?"})]})}),e.jsx(R,{sx:{pt:1,mt:1}}),e.jsxs(we,{children:[e.jsx(Ee,{type:"submit",variant:"contained",children:t?"Save Changes":"Save"}),e.jsx(T,{color:"inherit",variant:"outlined",onClick:d,children:"Cancel"})]})]})]})},ke=({productAddon:t,open:s,onClose:d,handler:i})=>e.jsx(L,{productAddon:t,open:s,onClose:d,handler:i});function Le({filters:t,onResetPage:s,options:d}){const i=u.useCallback(r=>{s(),t.setState({name:r.target.value})},[t,s]);return e.jsx(F,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Fe,{sx:{width:420},value:t.state.name,onChange:i,placeholder:"Search by Product Addon Name or Id Number...",InputProps:{startAdornment:e.jsx(Ie,{position:"start",children:e.jsx(j,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}const Ne=[{id:"addonId",label:"No.",width:60},{id:"addon",label:"Addon",width:240},{id:"price",label:"Price",width:140},{id:"status",label:"Status",width:140},{id:"",width:88}];function qe({productAddons:t}){const s=de({defaultOrderBy:"planId"}),d=P(),i=P(),r=P(),[n,c]=u.useState(t),[p,x]=u.useState(),a=U({name:"",status:"all",startDate:null,endDate:null});u.useEffect(()=>{c(t)},[t]);const h=_(a.state.startDate,a.state.endDate),l=He({inputData:n,comparator:ce(s.order,s.orderBy),filters:a.state,dateError:h}),g=me(l,s.page,s.rowsPerPage),m=!!a.state.name||a.state.status!=="all"||!!a.state.startDate&&!!a.state.endDate,N=!l.length&&m||!l.length,q=u.useCallback(o=>{Q(o)},[g.length,s,n]),H=u.useCallback(()=>{},[l.length,g.length,s,n]),M=u.useCallback(o=>{x(o),i.onToggle()},[g.length,s,n]),D=$(),{mutate:O}=w({mutationFn:o=>y.post(v.productAddons.create,o),onSuccess:async()=>{S.success("New Product Addon Has Been Created!")},onSettled:async()=>{await D.invalidateQueries({queryKey:["product-addons"]}),d.onFalse()},onError:o=>{console.log(o)}}),{mutate:K}=w({mutationFn:({id:o,payload:f})=>y.patch(v.productAddons.edit+o,f),onSuccess:async()=>{S.success("New Product Addon Has Been Modified!")},onSettled:async()=>{await D.invalidateQueries({queryKey:["product-addons"]}),i.onFalse()},onError:o=>{console.log(o)}}),{mutate:Q}=w({mutationFn:o=>y.delete(v.productAddons.delete+o),onSuccess:async o=>{const f=n.filter(W=>W.id!==o);S.success("Delete success!"),c(f),s.onUpdatePageDeleteRow(g.length)},onSettled:async()=>{await D.invalidateQueries({queryKey:["product-addons"]})},onError:o=>{console.log(o)}});return e.jsxs(e.Fragment,{children:[e.jsx(X,{maxWidth:"xl",children:e.jsxs(F,{spacing:3,children:[e.jsx(le,{links:[{name:"Dashboard",href:E.dashboard.root},{name:"Products",href:E.dashboard.product.root},{name:"Product Addons"}],action:e.jsx(T,{onClick:()=>d.onToggle(),variant:"contained",startIcon:e.jsx(j,{icon:"mingcute:add-line"}),children:"Add New Addon"})}),e.jsxs(Y,{children:[e.jsx(Le,{filters:a,onResetPage:s.onResetPage,dateError:h}),e.jsxs(Z,{sx:{position:"relative"},children:[e.jsx(ue,{dense:s.dense,numSelected:s.selected.length,rowCount:l.length,onSelectAllRows:o=>s.onSelectAllRows(o,l.map(f=>f.id)),action:e.jsx(ee,{title:"Delete",children:e.jsx(B,{color:"primary",onClick:r.onTrue,children:e.jsx(j,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(te,{sx:{minHeight:200},children:e.jsxs(je,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(fe,{order:s.order,orderBy:s.orderBy,headLabel:Ne,rowCount:l.length}),l.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(o=>e.jsx(Re,{row:o,selected:s.selected.includes(o.id),onEditRow:()=>M(o),onDeleteRow:()=>q(o.id)},o.id)),e.jsxs(be,{children:[e.jsx(he,{height:s.dense?56:76,emptyRows:pe(s.page,s.rowsPerPage,l.length)}),e.jsx(xe,{notFound:N})]})]})})]}),e.jsx(Ce,{page:s.page,dense:s.dense,count:l.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})]})}),e.jsx(L,{open:d.value,onClose:d.onFalse,handler:O}),e.jsx(ke,{open:i.value,onClose:i.onFalse,handler:K,productAddon:p}),e.jsx(k,{open:r.value,onClose:r.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",s.selected.length," "]})," items?"]}),action:e.jsx(T,{variant:"contained",color:"error",onClick:()=>{H(),r.onFalse()},children:"Delete"})})]})}function He({inputData:t,comparator:s,filters:d,dateError:i}){const{status:r,name:n,startDate:c,endDate:p}=d,x=t.map((a,h)=>[a,h]);return x.sort((a,h)=>{const l=s(a[0],h[0]);return l!==0?l:a[1]-h[1]}),t=x.map(a=>a[0]),n&&(t=t.filter(a=>a.id.toString().toLowerCase().indexOf(n.toLowerCase())!==-1||a.name.toLowerCase().indexOf(n.toLowerCase())!==-1)),r!=="all"&&(t=t.filter(a=>a.status===r)),i||c&&p&&(t=t.filter(a=>se(a.createdAt,c,p))),t}const Me={title:`Product Addons | Dashboard - ${ne.site.name}`};function Mt(){const t=re({queryKey:["product-addons"],queryFn:async()=>{const{data:s}=await y.get(v.productAddons.list);return s}});return t.isPending||t.isLoading?e.jsx(oe,{}):t.isError?e.jsx(ie,{route:E.dashboard.product.root}):e.jsxs(e.Fragment,{children:[e.jsx(ae,{children:e.jsxs("title",{children:[" ",Me.title]})}),e.jsx(qe,{productAddons:t.data})]})}export{Mt as default};
