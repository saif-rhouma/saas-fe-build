import{r as x,i as q,aP as se,g as w,p as f,j as e,S as v,A as Y,C as D,B as C,aL as re,c9 as ee,d7 as ae,l as H,I as p,cQ as oe,bR as ne,e as N,e2 as ie,db as le,aR as de,aS as O,e3 as I,de as ce,ec as pe,dn as me,dP as ue,cV as B,R as he,cY as xe,dd as ge,ed as je,dp as V,dm as $,dq as fe,dT as be,H as Pe}from"./index-DJBSy2EF.js";import{u as X,E as Ce}from"./error-block-CvrkSCmw.js";import"./product-review-new-form-St7WJ0h3.js";import"./index-Dr2-hOAp.js";import"./image-CcUpnek_.js";import"./color-preview-CnNfoDFC.js";import{u as ye}from"./useMutation-CufYe6We.js";import{C as Te}from"./custom-breadcrumbs-wu6pKqCp.js";import{P as A}from"./permission-access-controller-BCJVcN5Z.js";import{g as Re,r as ve,e as De}from"./utils-MBUcMVfY.js";import{u as Ie}from"./use-table-CaQ9UTBV.js";import{T as Ae}from"./table-no-data-CdNwTCeC.js";import{T as Se}from"./table-empty-rows-BFdSuI29.js";import{T as Z,a as ke,b as Ee,c as Le}from"./table-head-custom-DS0GuAHi.js";import{T as Oe}from"./table-selected-action-CFbZZtLm.js";import{T as Be}from"./table-pagination-custom-6sQmfddJ.js";import{b as F}from"./format-number-BkN-sNtV.js";import{C as Fe}from"./confirm-dialog-CJ1MpGCr.js";import{T as j}from"./TableCell-DF0lLe6g.js";import{A as qe}from"./AvatarGroup-DgMRRaIN.js";import{T as He}from"./TextField-B9QH0qQV.js";import{I as Ne}from"./InputAdornment-BDZfHe4A.js";import{P as Ve}from"./product-table-filters-result-8zA6S2hJ.js";import"./form-provider-B6rN6rcW.js";import"./editor-jz5psZbY.js";import"./incrementer-button-DwWJx-2R.js";import"./carousel-progress-bar-CUDdNUGo.js";import"./html-to-markdown-Dq7VSe9L.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./product-Item-button-D_FT_xco.js";import"./upload-avatar-mAHTNZo7.js";import"./FormHelperText-4VkrdFxf.js";import"./formControlState-Dq1zat_P.js";import"./index-cfJrRA7m.js";import"./DialogContent-CludgxUR.js";import"./DialogTitle-BZmEf6-n.js";import"./LoadingButton-CA0ERkDn.js";import"./CircularProgress-qkH5YYbv.js";import"./AccordionSummary-CTh4cWeN.js";import"./FormControlLabel-C5zXWVOI.js";import"./empty-content-Bo7F874U.js";import"./Checkbox-CJWY43L-.js";import"./TablePagination-C_TN8XiH.js";import"./KeyboardArrowRight-J3egVbAl.js";import"./LastPage-B2uyZMXU.js";import"./Select-CpdxAjVY.js";import"./Menu-DzF7Vu0n.js";import"./utils-DoM3o7-Q.js";import"./InputBase-DUpzIqxJ.js";import"./FormControl-Bvq6kqrZ.js";import"./InputLabel-D51FDdfU.js";import"./FormLabel-BcMrCB0K.js";import"./filters-result-BXZdekQk.js";import"./Chip-Csu7Evuy.js";import"./Rating-tHWMe1hJ.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-lMSifW85.js";import"./RadioGroup-BHqAuZXd.js";import"./FormGroup-A8YBApVE.js";import"./utils-CTRen34C.js";import"./countries-DSLisFCy.js";import"./Autocomplete-DrDbH-Lk.js";import"./country-select-G1_Mr0xL.js";import"./DatePicker-B6YlWnqF.js";import"./ListItem-yWcPRO5-.js";import"./MobileDateTimePicker-B5GKNQ1T.js";import"./Tabs-BCERpoja.js";import"./index-C7-PDvr0.js";const $e=({row:t,index:l,selected:s,onViewRow:b,onDeleteRow:m,onEditRow:u})=>{var y,T,o,g,R,U;const[P,i]=x.useState(((y=t==null?void 0:t.productToOrder)==null?void 0:y.length)>0),h=q(),r=q(),n=se(),d=w(),S=x.useCallback(a=>{d.push(f.dashboard.order.details(a))},[d]),k=x.useCallback(a=>{d.push(f.dashboard.product.details(a))},[d]),E=e.jsxs(Z,{hover:!0,selected:s,children:[e.jsx(j,{children:l||(t==null?void 0:t.id)}),e.jsx(j,{children:e.jsxs(v,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(Y,{alt:t==null?void 0:t.name,src:D.site.serverFileHost+((t==null?void 0:t.image)||D.site.defaultImgPlaceHolder)}),e.jsx(C,{component:"span",children:t==null?void 0:t.name})]})}),e.jsx(j,{children:e.jsx(qe,{sx:{[`& .${re.avatar}`]:{width:24,height:24}},children:e.jsx(ee,{title:`${(T=t==null?void 0:t.category)==null?void 0:T.name}`,children:e.jsx(Y,{alt:(o=t==null?void 0:t.category)==null?void 0:o.name,src:`${D.site.serverFileHost}${(g=t==null?void 0:t.category)==null?void 0:g.image}`})})})}),e.jsx(j,{children:F(t==null?void 0:t.price)}),e.jsxs(j,{align:"center",children:[" ",((R=t==null?void 0:t.stock)==null?void 0:R.quantity)||"0"," "]}),e.jsx(j,{children:e.jsx(ae,{variant:"soft",color:t.isActive===!0&&"success"||t.isActive===!1&&"error"||"default",children:t!=null&&t.isActive?"ACTIVE":"INACTIVE"})}),e.jsxs(j,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[P&&e.jsx(H,{color:r.value?"inherit":"default",onClick:r.onToggle,sx:{...r.value&&{bgcolor:"action.hover"}},children:e.jsx(p,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(H,{color:n.open?"inherit":"default",onClick:n.onOpen,children:e.jsx(p,{icon:"eva:more-vertical-fill"})})]})]}),L=e.jsx(Z,{children:e.jsx(j,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(oe,{in:r.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(ne,{sx:{m:1.5},children:(U=t==null?void 0:t.productToOrder)==null?void 0:U.map((a,te)=>{var _,G,M,Q,W,z,K,J;return te===5?e.jsx(v,{alignItems:"flex-end",sx:{p:c=>c.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:c=>`solid 2px ${c.vars.palette.background.neutral}`}},children:e.jsx(N,{variant:"contained",size:"small",endIcon:e.jsx(p,{icon:"heroicons-outline:external-link"}),onClick:()=>{k(t.id)},children:"See More"})},a.id):e.jsxs(v,{direction:"row",alignItems:"center",sx:{p:c=>c.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:c=>`solid 2px ${c.vars.palette.background.neutral}`}},children:[e.jsxs(C,{onClick:()=>{var c;return S((c=a==null?void 0:a.order)==null?void 0:c.id)},sx:{width:240,display:"flex",gap:1,alignItems:"center",cursor:"pointer",marginRight:5},children:[e.jsx(p,{icon:"heroicons-outline:external-link"}),e.jsx("span",{children:(_=a==null?void 0:a.order)==null?void 0:_.ref})]}),e.jsx(C,{sx:{width:"100%",display:"flex",gap:1,alignItems:"center"},children:e.jsx("span",{children:(M=(G=a.order)==null?void 0:G.customer)==null?void 0:M.name})}),e.jsxs(C,{sx:{width:240,color:"error.main",fontWeight:"bold"},children:["x",a.quantity," ",e.jsx("span",{style:{color:"#000",fontWeight:"400"},children:`(${F(a==null?void 0:a.snapshotProductPrice)})`})]}),e.jsx(C,{sx:{width:200,textAlign:"right"},children:(Q=a.order)==null?void 0:Q.status}),e.jsx(C,{sx:{width:300,textAlign:"right"},children:F(ie(((W=a.order)==null?void 0:W.totalOrderAmount)-((z=a.order)==null?void 0:z.totalOrderAmount)*(((K=a.order)==null?void 0:K.discount)/100),(J=a.order)==null?void 0:J.snapshotTaxPercentage))||"-"})]},a.id)})})})})});return e.jsxs(e.Fragment,{children:[E,L,e.jsx(le,{open:n.open,anchorEl:n.anchorEl,onClose:n.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(de,{children:[e.jsxs(O,{onClick:()=>{b(),n.onClose()},children:[e.jsx(p,{icon:"solar:eye-bold"}),"View"]}),e.jsx(A,{permission:I.EDIT_PRODUCT,children:e.jsxs(O,{onClick:()=>{u(t.id),n.onClose()},children:[e.jsx(p,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(A,{permission:I.DELETE_PRODUCT,children:e.jsxs(O,{onClick:()=>{h.onTrue(),n.onClose()},sx:{color:"error.main"},children:[e.jsx(p,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Fe,{open:h.value,onClose:h.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(N,{variant:"contained",color:"error",onClick:m,children:"Delete"})})]})};function Ue({filters:t,onResetPage:l,options:s}){const b=x.useCallback(m=>{l(),t.setState({name:m.target.value})},[t,l]);return e.jsx(v,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(He,{sx:{width:420},value:t.state.name,onChange:b,placeholder:"Search by Product Name or Ref",InputProps:{startAdornment:e.jsx(Ne,{position:"start",children:e.jsx(p,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}const _e=[{id:"productId",label:"No.",width:80},{id:"productName",label:"Name"},{id:"productPrice",label:"Category",width:200},{id:"productPrice",label:"Price",width:200},{id:"stock",label:"Stock",align:"center"},{id:"status",label:"Status",width:100},{id:"",width:88}];function Ge({products:t,taxPercentage:l}){const s=Ie({defaultOrderBy:"planId"}),b=q(),m=w(),[u,P]=x.useState(t),i=ce({name:"",status:"all",startDate:null,endDate:null});x.useEffect(()=>{P(t)},[t]);const h=pe(i.state.startDate,i.state.endDate),r=Me({inputData:u,comparator:Re(s.order,s.orderBy),filters:i.state,dateError:h}),n=ve(r,s.page,s.rowsPerPage),d=!!i.state.name||i.state.status!=="all"||!!i.state.startDate&&!!i.state.endDate,S=!r.length&&d||!r.length,k=x.useCallback(o=>{T(o)},[n.length,s,u]),E=x.useCallback(o=>{m.push(f.dashboard.product.edit(o))},[m]),L=x.useCallback(o=>{m.push(f.dashboard.product.details(o))},[m]),y=me(),{mutate:T}=ye({mutationFn:o=>V.delete($.products.delete+o),onSuccess:async o=>{const g=u.filter(R=>R.id!==o);fe.success("Delete success!"),P(g),s.onUpdatePageDeleteRow(n.length)},onSettled:async()=>{await y.invalidateQueries({queryKey:["products"]})},onError:()=>{}});return e.jsx(ue,{maxWidth:"xl",children:e.jsxs(B,{container:!0,spacing:3,children:[e.jsx(B,{xs:12,md:12,children:e.jsx(Te,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Product",href:f.dashboard.plan.root},{name:"List"}],action:e.jsx(A,{permission:I.ADD_PRODUCT,children:e.jsx(N,{component:he,href:f.dashboard.product.new,variant:"contained",startIcon:e.jsx(p,{icon:"mingcute:add-line"}),children:"Add New Product"})})})}),e.jsx(A,{permission:I.LIST_PRODUCT,children:e.jsx(B,{xs:12,md:12,children:e.jsxs(xe,{children:[e.jsx(Ue,{filters:i,onResetPage:s.onResetPage,dateError:h}),d&&e.jsx(Ve,{filters:i,totalResults:r.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(C,{sx:{position:"relative"},children:[e.jsx(Oe,{dense:s.dense,numSelected:s.selected.length,rowCount:r.length,onSelectAllRows:o=>s.onSelectAllRows(o,r.map(g=>g.id)),action:e.jsx(ee,{title:"Delete",children:e.jsx(H,{color:"primary",onClick:b.onTrue,children:e.jsx(p,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(ge,{sx:{minHeight:444},children:e.jsxs(ke,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Ee,{order:s.order,orderBy:s.orderBy,headLabel:_e,rowCount:r.length,numSelected:s.selected.length,onSort:s.onSort}),e.jsxs(Le,{children:[r.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((o,g)=>e.jsx($e,{row:o,index:s.page*s.rowsPerPage+g+1,selected:s.selected.includes(o.id),onEditRow:()=>E(o.id),onViewRow:()=>L(o.id),onDeleteRow:()=>k(o.id),taxPercentage:l},o.id)),e.jsx(Se,{height:s.dense?56:76,emptyRows:De(s.page,s.rowsPerPage,r.length)}),e.jsx(Ae,{notFound:S})]})]})})]}),e.jsx(Be,{page:s.page,dense:s.dense,count:r.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})})]})})}function Me({inputData:t,comparator:l,filters:s,dateError:b}){const{status:m,name:u,startDate:P,endDate:i}=s,h=t.map((r,n)=>[r,n]);return h.sort((r,n)=>{const d=l(r[0],n[0]);return d!==0?d:r[1]-n[1]}),t=h.map(r=>r[0]),u&&(t=t.filter(r=>r.id.toString().toLowerCase().indexOf(u.toLowerCase())!==-1||r.name.toLowerCase().indexOf(u.toLowerCase())!==-1)),b||P&&i&&(t=t.filter(r=>je(r.createdAt,P,i))),t}const Qe={title:`Product list | Dashboard - ${D.site.name}`};function ls(){const t=X({queryKey:["products"],queryFn:async()=>{const{data:s}=await V.get($.products.list);return s}}),l=X({queryKey:["account-application"],queryFn:async()=>{const{data:s}=await V.get($.auth.application);return s}});return l.isLoading||t.isLoading?e.jsx(be,{}):l.isError||t.isError?e.jsx(Ce,{route:f.dashboard.products.root}):e.jsxs(e.Fragment,{children:[e.jsx(Pe,{children:e.jsxs("title",{children:[" ",Qe.title]})}),e.jsx(Ge,{products:t.data,taxPercentage:l.data.taxPercentage})]})}export{ls as default};