import{r as g,i as q,aP as se,g as w,p as j,j as e,S as L,A as Y,C as v,B as b,aL as re,c9 as ee,d7 as oe,l as H,I as u,cQ as ae,bR as ne,e as V,e8 as ie,db as le,aR as de,aS as O,e3 as D,de as ce,e2 as pe,dn as me,dP as ue,cV as B,R as he,cY as xe,dd as ge,eh as je,dp as $,dm as N,dq as fe,dT as Pe,H as be}from"./index-cVC9loO2.js";import{u as X,E as Ce}from"./error-block-CTLR1Q8T.js";import"./product-review-new-form-3HY_qvW0.js";import"./index-DjHmM6wz.js";import"./image-CtYWjOfZ.js";import"./color-preview-BdHw5jv4.js";import{u as ye}from"./useMutation-D1Ao7QLV.js";import{C as Te}from"./custom-breadcrumbs-CcAluHeA.js";import{P as k}from"./permission-access-controller-DFrwOXyc.js";import{g as Re,r as ve,e as De}from"./utils-MBUcMVfY.js";import{u as ke}from"./use-table-Dq7VnjS8.js";import{T as Ae}from"./table-no-data-t2h_pSOQ.js";import{T as Se}from"./table-empty-rows-Cort7vwu.js";import{T as Z,a as Ie,b as Ee,c as Le}from"./table-head-custom-bk3oBXPg.js";import{T as Oe}from"./table-selected-action-Cz6OB6ms.js";import{T as Be}from"./table-pagination-custom-CClS5mLF.js";import{b as F}from"./format-number-B1WjFeaX.js";import{C as Fe}from"./confirm-dialog-BPASpEx5.js";import{T as x}from"./TableCell-8gOmF4Ok.js";import{A as qe}from"./AvatarGroup-ChgfWFuN.js";import{P as He}from"./product-table-toolbar-vlCftSHQ.js";import{P as Ve}from"./product-table-filters-result-C89ewzH9.js";import"./form-provider-DE5_2kIJ.js";import"./editor-DwJGbbeJ.js";import"./incrementer-button-B9G-XrUz.js";import"./carousel-progress-bar-Ckre4aam.js";import"./html-to-markdown-miRRAG75.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./product-Item-button-DLqhX_Wi.js";import"./upload-avatar-B9N719Cg.js";import"./FormHelperText-CsRk0ikA.js";import"./formControlState-Dq1zat_P.js";import"./index-atk_TUbO.js";import"./DialogContent-DkiO8DEm.js";import"./DialogTitle-BiPM3Q-L.js";import"./LoadingButton-KRbn5Mjy.js";import"./CircularProgress-BKEJ3hM4.js";import"./AccordionSummary-9nAI3V4H.js";import"./FormControlLabel-BYQ2iE67.js";import"./empty-content-DmCj46QE.js";import"./Checkbox-Bdobw5-i.js";import"./TablePagination-CFBfrjTB.js";import"./KeyboardArrowRight-BnvIvIxZ.js";import"./LastPage-D-qrFXII.js";import"./Select-DUYbOU_T.js";import"./Menu-BRMv56CN.js";import"./utils-DoM3o7-Q.js";import"./InputBase-C5V7Cyqr.js";import"./TextField-LJCfmosc.js";import"./FormControl-9caSTWx2.js";import"./InputLabel-CMJbfDqe.js";import"./FormLabel-B5edal7e.js";import"./InputAdornment-BrZhMZcc.js";import"./filters-result-BjX7Ns58.js";import"./Chip-BK1jcf0v.js";import"./Rating-Db2sKZev.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-CVkTwevy.js";import"./RadioGroup-CCJQrmJv.js";import"./FormGroup-Cn0OYj2K.js";import"./utils-CvPn6zY6.js";import"./countries-DSLisFCy.js";import"./Autocomplete-B3o3prWm.js";import"./country-select-BbxEBL6Y.js";import"./DatePicker-DiMqDnIW.js";import"./ListItem-BGevg6HN.js";import"./MobileDateTimePicker-DxnCUIg9.js";import"./Tabs-TNFzyBZH.js";import"./index-B1BrQbnY.js";const $e=({row:t,index:c,selected:s,onViewRow:C,onDeleteRow:f,onEditRow:p})=>{var y,T,a,h,R,U;const[P,i]=g.useState(((y=t==null?void 0:t.productToOrder)==null?void 0:y.length)>0),m=q(),r=q(),n=se(),l=w(),A=g.useCallback(o=>{l.push(j.dashboard.order.details(o))},[l]),S=g.useCallback(o=>{l.push(j.dashboard.product.details(o))},[l]),I=e.jsxs(Z,{hover:!0,selected:s,children:[e.jsx(x,{children:c||(t==null?void 0:t.id)}),e.jsx(x,{children:e.jsxs(L,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(Y,{alt:t==null?void 0:t.name,src:v.site.serverFileHost+((t==null?void 0:t.image)||v.site.defaultImgPlaceHolder)}),e.jsx(b,{component:"span",children:t==null?void 0:t.name})]})}),e.jsx(x,{children:e.jsx(qe,{sx:{[`& .${re.avatar}`]:{width:24,height:24}},children:e.jsx(ee,{title:`${(T=t==null?void 0:t.category)==null?void 0:T.name}`,children:e.jsx(Y,{alt:(a=t==null?void 0:t.category)==null?void 0:a.name,src:`${v.site.serverFileHost}${(h=t==null?void 0:t.category)==null?void 0:h.image}`})})})}),e.jsx(x,{children:F(t==null?void 0:t.price)}),e.jsxs(x,{align:"center",children:[" ",((R=t==null?void 0:t.stock)==null?void 0:R.quantity)||"0"," "]}),e.jsx(x,{children:e.jsx(oe,{variant:"soft",color:t.isActive===!0&&"success"||t.isActive===!1&&"error"||"default",children:t!=null&&t.isActive?"ACTIVE":"INACTIVE"})}),e.jsxs(x,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[P&&e.jsx(H,{color:r.value?"inherit":"default",onClick:r.onToggle,sx:{...r.value&&{bgcolor:"action.hover"}},children:e.jsx(u,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(H,{color:n.open?"inherit":"default",onClick:n.onOpen,children:e.jsx(u,{icon:"eva:more-vertical-fill"})})]})]}),E=e.jsx(Z,{children:e.jsx(x,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(ae,{in:r.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(ne,{sx:{m:1.5},children:(U=t==null?void 0:t.productToOrder)==null?void 0:U.map((o,te)=>{var _,G,M,Q,W,z,K,J;return te===5?e.jsx(L,{alignItems:"flex-end",sx:{p:d=>d.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:d=>`solid 2px ${d.vars.palette.background.neutral}`}},children:e.jsx(V,{variant:"contained",size:"small",endIcon:e.jsx(u,{icon:"heroicons-outline:external-link"}),onClick:()=>{S(t.id)},children:"See More"})},o.id):e.jsxs(L,{direction:"row",alignItems:"center",sx:{p:d=>d.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:d=>`solid 2px ${d.vars.palette.background.neutral}`}},children:[e.jsxs(b,{onClick:()=>{var d;return A((d=o==null?void 0:o.order)==null?void 0:d.id)},sx:{width:240,display:"flex",gap:1,alignItems:"center",cursor:"pointer",marginRight:5},children:[e.jsx(u,{icon:"heroicons-outline:external-link"}),e.jsx("span",{children:(_=o==null?void 0:o.order)==null?void 0:_.ref})]}),e.jsx(b,{sx:{width:"100%",display:"flex",gap:1,alignItems:"center"},children:e.jsx("span",{children:(M=(G=o.order)==null?void 0:G.customer)==null?void 0:M.name})}),e.jsxs(b,{sx:{width:240,color:"error.main",fontWeight:"bold"},children:["x",o.quantity," ",e.jsx("span",{style:{color:"#000",fontWeight:"400"},children:`(${F(o==null?void 0:o.snapshotProductPrice)})`})]}),e.jsx(b,{sx:{width:200,textAlign:"right"},children:(Q=o.order)==null?void 0:Q.status}),e.jsx(b,{sx:{width:300,textAlign:"right"},children:F(ie(((W=o.order)==null?void 0:W.totalOrderAmount)-((z=o.order)==null?void 0:z.totalOrderAmount)*(((K=o.order)==null?void 0:K.discount)/100),(J=o.order)==null?void 0:J.snapshotTaxPercentage))||"-"})]},o.id)})})})})});return e.jsxs(e.Fragment,{children:[I,E,e.jsx(le,{open:n.open,anchorEl:n.anchorEl,onClose:n.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(de,{children:[e.jsxs(O,{onClick:()=>{C(),n.onClose()},children:[e.jsx(u,{icon:"solar:eye-bold"}),"View"]}),e.jsx(k,{permission:D.EDIT_PRODUCT,children:e.jsxs(O,{onClick:()=>{p(t.id),n.onClose()},children:[e.jsx(u,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(k,{permission:D.DELETE_PRODUCT,children:e.jsxs(O,{onClick:()=>{m.onTrue(),n.onClose()},sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Fe,{open:m.value,onClose:m.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(V,{variant:"contained",color:"error",onClick:f,children:"Delete"})})]})},Ne=[{id:"productId",label:"No.",width:80},{id:"productName",label:"Name"},{id:"productPrice",label:"Category",width:200},{id:"productPrice",label:"Price",width:200},{id:"stock",label:"Stock",align:"center"},{id:"status",label:"Status",width:100},{id:"",width:88}];function Ue({products:t,taxPercentage:c}){const s=ke({defaultOrderBy:"planId"}),C=q(),f=w(),[p,P]=g.useState(t),i=ce({name:"",status:"all",startDate:null,endDate:null});g.useEffect(()=>{P(t)},[t]);const m=pe(i.state.startDate,i.state.endDate),r=_e({inputData:p,comparator:Re(s.order,s.orderBy),filters:i.state,dateError:m}),n=ve(r,s.page,s.rowsPerPage),l=!!i.state.name||i.state.status!=="all"||!!i.state.startDate&&!!i.state.endDate,A=!r.length&&l||!r.length,S=g.useCallback(a=>{T(a)},[n.length,s,p]),I=g.useCallback(a=>{f.push(j.dashboard.product.edit(a))},[f]),E=g.useCallback(a=>{f.push(j.dashboard.product.details(a))},[f]),y=me(),{mutate:T}=ye({mutationFn:a=>$.delete(N.products.delete+a),onSuccess:async a=>{const h=p.filter(R=>R.id!==a);fe.success("Delete success!"),P(h),s.onUpdatePageDeleteRow(n.length)},onSettled:async()=>{await y.invalidateQueries({queryKey:["products"]})},onError:()=>{}});return e.jsx(ue,{maxWidth:"xl",children:e.jsxs(B,{container:!0,spacing:3,children:[e.jsx(B,{xs:12,md:12,children:e.jsx(Te,{links:[{name:"Dashboard",href:j.dashboard.root},{name:"Product",href:j.dashboard.plan.root},{name:"List"}],action:e.jsx(k,{permission:D.ADD_PRODUCT,children:e.jsx(V,{component:he,href:j.dashboard.product.new,variant:"contained",startIcon:e.jsx(u,{icon:"mingcute:add-line"}),children:"Add New Product"})})})}),e.jsx(k,{permission:D.LIST_PRODUCT,children:e.jsx(B,{xs:12,md:12,children:e.jsxs(xe,{children:[e.jsx(He,{filters:i,onResetPage:s.onResetPage,dateError:m}),l&&e.jsx(Ve,{filters:i,totalResults:r.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(b,{sx:{position:"relative"},children:[e.jsx(Oe,{dense:s.dense,numSelected:s.selected.length,rowCount:r.length,onSelectAllRows:a=>s.onSelectAllRows(a,r.map(h=>h.id)),action:e.jsx(ee,{title:"Delete",children:e.jsx(H,{color:"primary",onClick:C.onTrue,children:e.jsx(u,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(ge,{sx:{minHeight:444},children:e.jsxs(Ie,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Ee,{order:s.order,orderBy:s.orderBy,headLabel:Ne,rowCount:r.length,numSelected:s.selected.length,onSort:s.onSort}),e.jsxs(Le,{children:[r.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((a,h)=>e.jsx($e,{row:a,index:s.page*s.rowsPerPage+h+1,selected:s.selected.includes(a.id),onEditRow:()=>I(a.id),onViewRow:()=>E(a.id),onDeleteRow:()=>S(a.id),taxPercentage:c},a.id)),e.jsx(Se,{height:s.dense?56:76,emptyRows:De(s.page,s.rowsPerPage,r.length)}),e.jsx(Ae,{notFound:A})]})]})})]}),e.jsx(Be,{page:s.page,dense:s.dense,count:r.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})})]})})}function _e({inputData:t,comparator:c,filters:s,dateError:C}){const{status:f,name:p,startDate:P,endDate:i}=s,m=t.map((r,n)=>[r,n]);return m.sort((r,n)=>{const l=c(r[0],n[0]);return l!==0?l:r[1]-n[1]}),t=m.map(r=>r[0]),p&&(t=t.filter(r=>r.id.toString().toLowerCase().indexOf(p.toLowerCase())!==-1||r.name.toLowerCase().indexOf(p.toLowerCase())!==-1)),C||P&&i&&(t=t.filter(r=>je(r.createdAt,P,i))),t}const Ge={title:`Product list | Dashboard - ${v.site.name}`};function is(){const t=X({queryKey:["products"],queryFn:async()=>{const{data:s}=await $.get(N.products.list);return s}}),c=X({queryKey:["account-application"],queryFn:async()=>{const{data:s}=await $.get(N.auth.application);return s}});return c.isLoading||t.isLoading?e.jsx(Pe,{}):c.isError||t.isError?e.jsx(Ce,{route:j.dashboard.products.root}):e.jsxs(e.Fragment,{children:[e.jsx(be,{children:e.jsxs("title",{children:[" ",Ge.title]})}),e.jsx(Ue,{products:t.data,taxPercentage:c.data.taxPercentage})]})}export{is as default};
