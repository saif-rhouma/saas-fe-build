import{r as b,o as A,bO as _,j as e,S as E,A as z,C as N,B as P,ds as K,w as k,I as j,dh as M,az as Q,aI as W,ew as $,dw as G,bQ as V,em as R,bR as B,e as H,l as J,dz as w,eo as X,p as C,dI as Y,e8 as Z,G as I,R as ee,aD as te,cM as se,dy as re,ep as oe,dJ as L,dH as O,dK as ae,ec as ne,H as ie}from"./index-D9XQ5HZn.js";import{u as F,E as le}from"./error-block-w_O0iSRH.js";import"./product-review-new-form-BnXJlzDK.js";import"./index-CB8RShMh.js";import"./image--crxJX70.js";import"./color-preview-b9EC1hCt.js";import{u as de}from"./useMutation-ts4flLpu.js";import{C as ce}from"./custom-breadcrumbs-CazdlgA0.js";import{P as v}from"./permission-access-controller-CBnTTSPg.js";import{u as pe,g as me,r as ue,T as he,a as xe,e as ge}from"./table-selected-action-KNwZffED.js";import{T as je}from"./table-no-data-B6s3Ok4M.js";import{T as q,a as fe,b as be,c as Pe}from"./table-head-custom-CmnvuSVC.js";import{T as Ce}from"./table-pagination-custom-Bx7mhuFH.js";import{b as S}from"./format-number-B7RckPke.js";import{C as ye}from"./confirm-dialog-CY42tOB4.js";import{T as g}from"./TableCell-BQnM0xNZ.js";import{T as Te}from"./TextField-DX4sIYOy.js";import{I as De}from"./InputAdornment-DzIVUKKm.js";import{P as Re}from"./product-table-filters-result-BcMukkXv.js";import"./form-provider-CxGM2Unr.js";import"./editor-4sPkqXXa.js";import"./incrementer-button-BjSnt38i.js";import"./carousel-progress-bar-qLDTps8O.js";import"./html-to-markdown-j4QajOxF.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./product-Item-button-DObZHK26.js";import"./upload-avatar-AxagYmpF.js";import"./FormHelperText-BUvJKjZo.js";import"./formControlState-Dq1zat_P.js";import"./index-Ck2jm1rT.js";import"./DialogContent-COSPx22v.js";import"./DialogTitle-CwAPclTX.js";import"./LoadingButton-EVY8EkwD.js";import"./CircularProgress-Cg-Vm1oQ.js";import"./AccordionSummary-ChILM9-a.js";import"./Checkbox-DF3g1Q_L.js";import"./empty-content-Bkzy38Qy.js";import"./TablePagination-Daqijhxj.js";import"./KeyboardArrowRight-D9a5UIDu.js";import"./LastPage-C7MjNvcm.js";import"./Select-DEn4EjE4.js";import"./Menu-ChOTQt8U.js";import"./utils-DoM3o7-Q.js";import"./InputBase-DsCQaGZz.js";import"./FormControlLabel-CQyLNxlb.js";import"./FormControl-B_14xPvO.js";import"./InputLabel-DS6Prtxn.js";import"./FormLabel-ousI8yIh.js";import"./filters-result-DXLcu6yJ.js";import"./Chip-DtnMtqyD.js";import"./Rating-Dz1lJuYA.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-BZBxWU4Q.js";import"./RadioGroup-BU5nUuP7.js";import"./FormGroup-Bfb8EGRU.js";import"./countries-DSLisFCy.js";import"./Autocomplete-CbHgTFzS.js";import"./country-select-CcbLyBYj.js";import"./DatePicker-CHI830Hp.js";import"./ListItem-DkD46tOc.js";import"./MobileDateTimePicker-Dp-kczs0.js";import"./Tabs-B9OWTzrp.js";import"./index-DaWlhWs_.js";const ve=({row:t,taxPercentage:i,selected:s,onDeleteRow:m,onEditRow:u})=>{var y;const[c,f]=b.useState((t==null?void 0:t.productToOrder.filter(o=>{var d;return((d=o==null?void 0:o.order)==null?void 0:d.status)==="Delivered"}).length)>0),n=A(),l=A(),r=_(),p=e.jsxs(q,{hover:!0,selected:s,children:[e.jsx(g,{children:t==null?void 0:t.id}),e.jsx(g,{children:e.jsxs(E,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(z,{alt:t==null?void 0:t.name,src:N.site.serverFileHost+(t==null?void 0:t.image)}),e.jsx(P,{component:"span",children:t==null?void 0:t.name})]})}),e.jsx(g,{children:S(t==null?void 0:t.price)}),e.jsxs(g,{align:"center",children:[" ",((y=t==null?void 0:t.stock)==null?void 0:y.quantity)||"0"," "]}),e.jsx(g,{children:e.jsx(K,{variant:"soft",color:t.isActive===!0&&"success"||t.isActive===!1&&"error"||"default",children:t!=null&&t.isActive?"ACTIVE":"INACTIVE"})}),e.jsxs(g,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[c&&e.jsx(k,{color:l.value?"inherit":"default",onClick:l.onToggle,sx:{...l.value&&{bgcolor:"action.hover"}},children:e.jsx(j,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(k,{color:r.open?"inherit":"default",onClick:r.onOpen,children:e.jsx(j,{icon:"eva:more-vertical-fill"})})]})]}),h=e.jsx(q,{children:e.jsx(g,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(M,{in:l.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(Q,{sx:{m:1.5},children:t==null?void 0:t.productToOrder.filter(o=>{var d;return((d=o==null?void 0:o.order)==null?void 0:d.status)==="Delivered"}).map(o=>{var d,T,D,a;return e.jsxs(E,{direction:"row",alignItems:"center",sx:{p:x=>x.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:x=>`solid 2px ${x.vars.palette.background.neutral}`}},children:[e.jsx(W,{primary:`ORD-${(d=o==null?void 0:o.order)==null?void 0:d.id}`,secondary:o.sku,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled",mt:.5}}),e.jsxs(P,{sx:{color:"error.main",fontWeight:"bold"},children:["x",o.quantity," ",e.jsx("span",{style:{color:"#000",fontWeight:"400"},children:`(${S(o.quantity*(t==null?void 0:t.price))})`})]}),e.jsx(P,{sx:{width:140,textAlign:"right"},children:(T=o.order)==null?void 0:T.status}),e.jsx(P,{sx:{width:140,textAlign:"right"},children:S($(((D=o.order)==null?void 0:D.totalOrderAmount)-((a=o.order)==null?void 0:a.discount),i))||"-"})]},o.id)})})})})});return e.jsxs(e.Fragment,{children:[p,h,e.jsx(G,{open:r.open,anchorEl:r.anchorEl,onClose:r.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(V,{children:[e.jsx(v,{permission:R.EDIT_PRODUCT,children:e.jsxs(B,{onClick:()=>{u(t.id),r.onClose()},children:[e.jsx(j,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(v,{permission:R.DELETE_PRODUCT,children:e.jsxs(B,{onClick:()=>{n.onTrue(),r.onClose()},sx:{color:"error.main"},children:[e.jsx(j,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(ye,{open:n.value,onClose:n.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(H,{variant:"contained",color:"error",onClick:m,children:"Delete"})})]})};function Ie({filters:t,onResetPage:i,options:s}){const m=b.useCallback(u=>{i(),t.setState({name:u.target.value})},[t,i]);return e.jsx(E,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Te,{sx:{width:420},value:t.state.name,onChange:m,placeholder:"Search by Product Name or Ref",InputProps:{startAdornment:e.jsx(De,{position:"start",children:e.jsx(j,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}const Se=[{id:"productId",label:"No.",width:80},{id:"productName",label:"Product Name"},{id:"productPrice",label:"Product Price",width:200},{id:"stock",label:"Stock",align:"center"},{id:"status",label:"Status",width:100},{id:"",width:88}];function Ae({products:t,taxPercentage:i}){const s=pe({defaultOrderBy:"planId"}),m=A(),u=J(),[c,f]=b.useState(t),n=w({name:"",status:"all",startDate:null,endDate:null});b.useEffect(()=>{f(t)},[t]);const l=X(n.state.startDate,n.state.endDate),r=Ee({inputData:c,comparator:me(s.order,s.orderBy),filters:n.state,dateError:l}),p=ue(r,s.page,s.rowsPerPage),h=!!n.state.name||n.state.status!=="all"||!!n.state.startDate&&!!n.state.endDate,y=!r.length&&h||!r.length,o=b.useCallback(a=>{D(a)},[p.length,s,c]),d=b.useCallback(a=>{u.push(C.dashboard.product.edit(a))},[u]),T=Y(),{mutate:D}=de({mutationFn:a=>L.delete(O.products.delete+a),onSuccess:async a=>{const x=c.filter(U=>U.id!==a);ae.success("Delete success!"),f(x),s.onUpdatePageDeleteRow(p.length)},onSettled:async()=>{await T.invalidateQueries({queryKey:["products"]})},onError:()=>{}});return e.jsx(Z,{maxWidth:"xl",children:e.jsxs(I,{container:!0,spacing:3,children:[e.jsx(I,{xs:12,md:12,children:e.jsx(ce,{links:[{name:"Dashboard",href:C.dashboard.root},{name:"Product",href:C.dashboard.plan.root},{name:"List"}],action:e.jsx(v,{permission:R.ADD_PRODUCT,children:e.jsx(H,{component:ee,href:C.dashboard.product.new,variant:"contained",startIcon:e.jsx(j,{icon:"mingcute:add-line"}),children:"Add New Product"})})})}),e.jsx(v,{permission:R.LIST_PRODUCT,children:e.jsx(I,{xs:12,md:12,children:e.jsxs(te,{children:[e.jsx(Ie,{filters:n,onResetPage:s.onResetPage,dateError:l}),h&&e.jsx(Re,{filters:n,totalResults:r.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(P,{sx:{position:"relative"},children:[e.jsx(he,{dense:s.dense,numSelected:s.selected.length,rowCount:r.length,onSelectAllRows:a=>s.onSelectAllRows(a,r.map(x=>x.id)),action:e.jsx(se,{title:"Delete",children:e.jsx(k,{color:"primary",onClick:m.onTrue,children:e.jsx(j,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(re,{sx:{minHeight:444},children:e.jsxs(fe,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(be,{order:s.order,orderBy:s.orderBy,headLabel:Se,rowCount:r.length,numSelected:s.selected.length,onSort:s.onSort}),e.jsxs(Pe,{children:[r.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(a=>e.jsx(ve,{row:a,selected:s.selected.includes(a.id),onEditRow:()=>d(a.id),onDeleteRow:()=>o(a.id),taxPercentage:i},a.id)),e.jsx(xe,{height:s.dense?56:76,emptyRows:ge(s.page,s.rowsPerPage,r.length)}),e.jsx(je,{notFound:y})]})]})})]}),e.jsx(Ce,{page:s.page,dense:s.dense,count:r.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})})]})})}function Ee({inputData:t,comparator:i,filters:s,dateError:m}){const{status:u,name:c,startDate:f,endDate:n}=s,l=t.map((r,p)=>[r,p]);return l.sort((r,p)=>{const h=i(r[0],p[0]);return h!==0?h:r[1]-p[1]}),t=l.map(r=>r[0]),c&&(t=t.filter(r=>r.id.toString().toLowerCase().indexOf(c.toLowerCase())!==-1||r.name.toLowerCase().indexOf(c.toLowerCase())!==-1)),m||f&&n&&(t=t.filter(r=>oe(r.createdAt,f,n))),t}const ke={title:`Product list | Dashboard - ${N.site.name}`};function Mt(){const t=F({queryKey:["products"],queryFn:async()=>{const{data:s}=await L.get(O.products.list);return s}}),i=F({queryKey:["account-application"],queryFn:async()=>{const{data:s}=await L.get(O.auth.application);return s}});return i.isLoading||t.isLoading?e.jsx(ne,{}):i.isError||t.isError?e.jsx(le,{route:C.dashboard.products.root}):e.jsxs(e.Fragment,{children:[e.jsx(ie,{children:e.jsxs("title",{children:[" ",ke.title]})}),e.jsx(Ae,{products:t.data,taxPercentage:i.data.taxPercentage})]})}export{Mt as default};
