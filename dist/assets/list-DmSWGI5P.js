import{r as P,o as E,bO as _,j as e,S as k,A as z,C as L,B as C,ds as K,w as O,I as f,dh as M,az as Q,aI as W,ew as $,dw as G,bQ as V,em as R,bR as q,e as U,l as w,dz as J,eo as X,p as y,dI as Y,e8 as Z,G as S,R as ee,aD as te,cM as se,dy as re,ep as oe,dJ as B,dH as F,dK as ae,ec as ne,H as ie}from"./index-DyaX_SWt.js";import{u as H,E as le}from"./error-block-BS8v6UlH.js";import"./product-review-new-form-dXwdWbRo.js";import"./index-QyooP2qV.js";import"./image-B19dostR.js";import"./color-preview-CyI5Ocqm.js";import{u as de}from"./useMutation-8JHOqP8G.js";import{C as ce}from"./custom-breadcrumbs-BBBfmruK.js";import{P as v}from"./permission-access-controller-B0DEDN1x.js";import{u as pe,g as me,r as ue,T as he,a as xe,e as ge}from"./table-selected-action-ko6Ho4Yc.js";import{T as je}from"./table-no-data-CwZr0YTP.js";import{T as N,a as fe,b as Pe,c as be}from"./table-head-custom-HNlYMA2_.js";import{T as Ce}from"./table-pagination-custom-Bnc76y_q.js";import{b as A}from"./format-number-gV4plKym.js";import{C as ye}from"./confirm-dialog-kFllUWWu.js";import{T as j}from"./TableCell-KLTDlbM5.js";import{T as Te}from"./TextField-Bd-wf-qe.js";import{I as De}from"./InputAdornment-ZksuxZdO.js";import{P as Re}from"./product-table-filters-result-Cx4wKZXz.js";import"./form-provider-CtnM8NRj.js";import"./editor-6VivnzqK.js";import"./incrementer-button-BZh1pJdV.js";import"./carousel-progress-bar-DRS11OWb.js";import"./html-to-markdown-DvZ1Atat.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./product-Item-button-BDBf__GM.js";import"./upload-avatar-C8JbYnCq.js";import"./FormHelperText-DmigciDN.js";import"./formControlState-Dq1zat_P.js";import"./index-DV-9sifZ.js";import"./DialogContent-ji2na2-g.js";import"./DialogTitle-_IId5bVm.js";import"./LoadingButton-DTV36axC.js";import"./CircularProgress-WTepUpDP.js";import"./AccordionSummary-plBMz6nQ.js";import"./Checkbox-DDVYLWrv.js";import"./empty-content-DpRM8z9r.js";import"./TablePagination-BXOrPg7k.js";import"./KeyboardArrowRight-CAqmS2kb.js";import"./LastPage-CaugFMqc.js";import"./Select-aW-1jYsc.js";import"./Menu-cdXnIe8s.js";import"./utils-DoM3o7-Q.js";import"./InputBase-DIwXicuG.js";import"./FormControlLabel-DB8AMqn6.js";import"./FormControl-DZFzBqwu.js";import"./InputLabel-ChQRcEq0.js";import"./FormLabel-BzUaSDH6.js";import"./filters-result-DmGoa6dd.js";import"./Chip-DagaBQru.js";import"./Rating-EMFrk-nT.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-C5zkB3dH.js";import"./RadioGroup-Btp6tOQ_.js";import"./FormGroup-ZYenL2Ra.js";import"./countries-DSLisFCy.js";import"./Autocomplete-CB7KoUHG.js";import"./country-select-BvAnew-c.js";import"./DatePicker-CrivbYTg.js";import"./ListItem-hwhAMnMr.js";import"./MobileDateTimePicker-L4LPUDsD.js";import"./Tabs-BNN5MOxy.js";import"./index-UxKv0Fz8.js";const ve=({row:t,index:l,taxPercentage:s,selected:u,onDeleteRow:h,onEditRow:c})=>{var T;const[x,i]=P.useState((t==null?void 0:t.productToOrder.filter(o=>{var d;return((d=o==null?void 0:o.order)==null?void 0:d.status)==="Delivered"}).length)>0),p=E(),r=E(),n=_(),g=e.jsxs(N,{hover:!0,selected:u,children:[e.jsx(j,{children:l||(t==null?void 0:t.id)}),e.jsx(j,{children:e.jsxs(k,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(z,{alt:t==null?void 0:t.name,src:L.site.serverFileHost+((t==null?void 0:t.image)||L.site.defaultImgPlaceHolder)}),e.jsx(C,{component:"span",children:t==null?void 0:t.name})]})}),e.jsx(j,{children:A(t==null?void 0:t.price)}),e.jsxs(j,{align:"center",children:[" ",((T=t==null?void 0:t.stock)==null?void 0:T.quantity)||"0"," "]}),e.jsx(j,{children:e.jsx(K,{variant:"soft",color:t.isActive===!0&&"success"||t.isActive===!1&&"error"||"default",children:t!=null&&t.isActive?"ACTIVE":"INACTIVE"})}),e.jsxs(j,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[x&&e.jsx(O,{color:r.value?"inherit":"default",onClick:r.onToggle,sx:{...r.value&&{bgcolor:"action.hover"}},children:e.jsx(f,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(O,{color:n.open?"inherit":"default",onClick:n.onOpen,children:e.jsx(f,{icon:"eva:more-vertical-fill"})})]})]}),I=e.jsx(N,{children:e.jsx(j,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(M,{in:r.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(Q,{sx:{m:1.5},children:t==null?void 0:t.productToOrder.filter(o=>{var d;return((d=o==null?void 0:o.order)==null?void 0:d.status)==="Delivered"}).map(o=>{var d,D,a,m;return e.jsxs(k,{direction:"row",alignItems:"center",sx:{p:b=>b.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:b=>`solid 2px ${b.vars.palette.background.neutral}`}},children:[e.jsx(W,{primary:`${(d=o==null?void 0:o.order)==null?void 0:d.ref}`,secondary:o.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(C,{sx:{color:"error.main",fontWeight:"bold"},children:["x",o.quantity," ",e.jsx("span",{style:{color:"#000",fontWeight:"400"},children:`(${A(o.quantity*((t==null?void 0:t.price)||0))})`})]}),e.jsx(C,{sx:{width:140,textAlign:"right"},children:(D=o.order)==null?void 0:D.status}),e.jsx(C,{sx:{width:140,textAlign:"right"},children:A($(((a=o.order)==null?void 0:a.totalOrderAmount)-((m=o.order)==null?void 0:m.discount),s))||"-"})]},o.id)})})})})});return e.jsxs(e.Fragment,{children:[g,I,e.jsx(G,{open:n.open,anchorEl:n.anchorEl,onClose:n.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(V,{children:[e.jsx(v,{permission:R.EDIT_PRODUCT,children:e.jsxs(q,{onClick:()=>{c(t.id),n.onClose()},children:[e.jsx(f,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(v,{permission:R.DELETE_PRODUCT,children:e.jsxs(q,{onClick:()=>{p.onTrue(),n.onClose()},sx:{color:"error.main"},children:[e.jsx(f,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(ye,{open:p.value,onClose:p.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(U,{variant:"contained",color:"error",onClick:h,children:"Delete"})})]})};function Ie({filters:t,onResetPage:l,options:s}){const u=P.useCallback(h=>{l(),t.setState({name:h.target.value})},[t,l]);return e.jsx(k,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Te,{sx:{width:420},value:t.state.name,onChange:u,placeholder:"Search by Product Name or Ref",InputProps:{startAdornment:e.jsx(De,{position:"start",children:e.jsx(f,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}const Se=[{id:"productId",label:"No.",width:80},{id:"productName",label:"Product Name"},{id:"productPrice",label:"Product Price",width:200},{id:"stock",label:"Stock",align:"center"},{id:"status",label:"Status",width:100},{id:"",width:88}];function Ae({products:t,taxPercentage:l}){const s=pe({defaultOrderBy:"planId"}),u=E(),h=w(),[c,x]=P.useState(t),i=J({name:"",status:"all",startDate:null,endDate:null});P.useEffect(()=>{x(t)},[t]);const p=X(i.state.startDate,i.state.endDate),r=Ee({inputData:c,comparator:me(s.order,s.orderBy),filters:i.state,dateError:p}),n=ue(r,s.page,s.rowsPerPage),g=!!i.state.name||i.state.status!=="all"||!!i.state.startDate&&!!i.state.endDate,I=!r.length&&g||!r.length,T=P.useCallback(a=>{D(a)},[n.length,s,c]),o=P.useCallback(a=>{h.push(y.dashboard.product.edit(a))},[h]),d=Y(),{mutate:D}=de({mutationFn:a=>B.delete(F.products.delete+a),onSuccess:async a=>{const m=c.filter(b=>b.id!==a);ae.success("Delete success!"),x(m),s.onUpdatePageDeleteRow(n.length)},onSettled:async()=>{await d.invalidateQueries({queryKey:["products"]})},onError:()=>{}});return e.jsx(Z,{maxWidth:"xl",children:e.jsxs(S,{container:!0,spacing:3,children:[e.jsx(S,{xs:12,md:12,children:e.jsx(ce,{links:[{name:"Dashboard",href:y.dashboard.root},{name:"Product",href:y.dashboard.plan.root},{name:"List"}],action:e.jsx(v,{permission:R.ADD_PRODUCT,children:e.jsx(U,{component:ee,href:y.dashboard.product.new,variant:"contained",startIcon:e.jsx(f,{icon:"mingcute:add-line"}),children:"Add New Product"})})})}),e.jsx(v,{permission:R.LIST_PRODUCT,children:e.jsx(S,{xs:12,md:12,children:e.jsxs(te,{children:[e.jsx(Ie,{filters:i,onResetPage:s.onResetPage,dateError:p}),g&&e.jsx(Re,{filters:i,totalResults:r.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(C,{sx:{position:"relative"},children:[e.jsx(he,{dense:s.dense,numSelected:s.selected.length,rowCount:r.length,onSelectAllRows:a=>s.onSelectAllRows(a,r.map(m=>m.id)),action:e.jsx(se,{title:"Delete",children:e.jsx(O,{color:"primary",onClick:u.onTrue,children:e.jsx(f,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(re,{sx:{minHeight:444},children:e.jsxs(fe,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Pe,{order:s.order,orderBy:s.orderBy,headLabel:Se,rowCount:r.length,numSelected:s.selected.length,onSort:s.onSort}),e.jsxs(be,{children:[r.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((a,m)=>e.jsx(ve,{row:a,index:s.page*s.rowsPerPage+m+1,selected:s.selected.includes(a.id),onEditRow:()=>o(a.id),onDeleteRow:()=>T(a.id),taxPercentage:l},a.id)),e.jsx(xe,{height:s.dense?56:76,emptyRows:ge(s.page,s.rowsPerPage,r.length)}),e.jsx(je,{notFound:I})]})]})})]}),e.jsx(Ce,{page:s.page,dense:s.dense,count:r.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})})]})})}function Ee({inputData:t,comparator:l,filters:s,dateError:u}){const{status:h,name:c,startDate:x,endDate:i}=s,p=t.map((r,n)=>[r,n]);return p.sort((r,n)=>{const g=l(r[0],n[0]);return g!==0?g:r[1]-n[1]}),t=p.map(r=>r[0]),c&&(t=t.filter(r=>r.id.toString().toLowerCase().indexOf(c.toLowerCase())!==-1||r.name.toLowerCase().indexOf(c.toLowerCase())!==-1)),u||x&&i&&(t=t.filter(r=>oe(r.createdAt,x,i))),t}const ke={title:`Product list | Dashboard - ${L.site.name}`};function Mt(){const t=H({queryKey:["products"],queryFn:async()=>{const{data:s}=await B.get(F.products.list);return s}}),l=H({queryKey:["account-application"],queryFn:async()=>{const{data:s}=await B.get(F.auth.application);return s}});return l.isLoading||t.isLoading?e.jsx(ne,{}):l.isError||t.isError?e.jsx(le,{route:y.dashboard.products.root}):e.jsxs(e.Fragment,{children:[e.jsx(ie,{children:e.jsxs("title",{children:[" ",ke.title]})}),e.jsx(Ae,{products:t.data,taxPercentage:l.data.taxPercentage})]})}export{Mt as default};
