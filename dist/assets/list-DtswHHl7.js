import{r as x,i as q,aP as se,g as Z,p as g,j as e,S as O,A as J,C as D,B as b,aL as re,c9 as ee,l as H,I as u,cQ as oe,bR as ae,e as $,e8 as ne,db as ie,aR as le,aS as B,e3 as k,de,e2 as ce,dn as pe,dP as me,cV as L,R as ue,cY as he,dd as xe,ed as ge,dp as V,dm as N,dq as je,dT as Pe,H as fe}from"./index-CsblB989.js";import{u as Y,E as be}from"./error-block-D1JbtCwV.js";import"./product-review-new-form-DvRMjvSu.js";import"./index-BBe9Z881.js";import"./image-BZWDGRmV.js";import"./color-preview-DTV6Sf-K.js";import{u as Ce}from"./useMutation-BnUM9G4D.js";import{C as ye}from"./custom-breadcrumbs-DQYYRO8w.js";import{P as v}from"./permission-access-controller-BNI9mSpP.js";import{g as Te,r as Re,e as De}from"./utils-MBUcMVfY.js";import{u as ke}from"./use-table-Cr_xCBhr.js";import{T as ve}from"./table-no-data-682BM6a1.js";import{T as Se}from"./table-empty-rows-CgikUOWX.js";import{T as X,a as Ee,b as Ie,c as Ae}from"./table-head-custom-vARtgwXs.js";import{T as Oe}from"./table-selected-action-DrUjEaAs.js";import{T as Be}from"./table-pagination-custom-D46BApEC.js";import{b as F}from"./format-number-D9HQPhfy.js";import{C as Le}from"./confirm-dialog-q1u9FQpX.js";import{T as f}from"./TableCell-Kq_FkOs_.js";import{A as Fe}from"./AvatarGroup-DQTfNaGr.js";import{P as qe}from"./product-table-toolbar-C1HgRdVH.js";import{P as He}from"./product-table-filters-result-D0mbjqaV.js";import"./form-provider-Du6VuMoa.js";import"./editor-CL68ZPGs.js";import"./incrementer-button-BbFbxcBt.js";import"./carousel-progress-bar-C6SAVv0i.js";import"./html-to-markdown-BM8JggLH.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./product-Item-button-4_fD-W8l.js";import"./upload-avatar-cbQBKvLv.js";import"./FormHelperText-tmkQoI7S.js";import"./formControlState-Dq1zat_P.js";import"./index-BMmrxPl5.js";import"./DialogContent-D71n8k4T.js";import"./DialogTitle-Dw9T0OTq.js";import"./LoadingButton-BxfNjoGU.js";import"./CircularProgress-BP7w1Bmy.js";import"./AccordionSummary-By9I1vBr.js";import"./FormControlLabel-SPUXYPf-.js";import"./empty-content-_dcLaHM3.js";import"./Checkbox-BYMqAuwK.js";import"./TablePagination-C2aJ-ypH.js";import"./KeyboardArrowRight-C60ssb8G.js";import"./LastPage-BeFQa4EJ.js";import"./Select-LbLUteKL.js";import"./Menu-B2ldK29l.js";import"./utils-DoM3o7-Q.js";import"./InputBase-CnDGZDGH.js";import"./TextField-C0rr15oK.js";import"./FormControl-N3NVqOJu.js";import"./InputLabel-DrDrx2-z.js";import"./FormLabel-B95ccZTf.js";import"./InputAdornment-B27KTbFt.js";import"./filters-result-C59OcCeR.js";import"./Chip-_qt5A1XL.js";import"./Rating-CZ82oMVe.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-DPAupNwA.js";import"./RadioGroup-CP1oF_P6.js";import"./FormGroup-DPnbPOcj.js";import"./utils-DOJdEOh4.js";import"./countries-DSLisFCy.js";import"./Autocomplete-BdC29jcZ.js";import"./country-select-BsoE5ktB.js";import"./DatePicker-CDV3q_Jx.js";import"./ListItem-HYEjvoe-.js";import"./MobileDateTimePicker-BbGrDX_d.js";import"./Tabs-Dkt6334O.js";import"./index-BVsEWNMT.js";const $e=({row:t,index:c,selected:s,onViewRow:C,onDeleteRow:j,onEditRow:p})=>{var y,T,a,h,R,U;const[P,i]=x.useState(((y=t==null?void 0:t.productToOrder)==null?void 0:y.length)>0),m=q(),r=q(),n=se(),l=Z(),S=x.useCallback(o=>{l.push(g.dashboard.order.details(o))},[l]),E=x.useCallback(o=>{l.push(g.dashboard.product.details(o))},[l]),I=e.jsxs(X,{hover:!0,selected:s,children:[e.jsx(f,{children:c||(t==null?void 0:t.id)}),e.jsx(f,{children:e.jsxs(O,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(J,{alt:t==null?void 0:t.name,src:D.site.serverFileHost+((t==null?void 0:t.image)||D.site.defaultImgPlaceHolder)}),e.jsx(b,{component:"span",children:t==null?void 0:t.name})]})}),e.jsx(f,{children:e.jsx(Fe,{sx:{[`& .${re.avatar}`]:{width:24,height:24}},children:e.jsx(ee,{title:`${(T=t==null?void 0:t.category)==null?void 0:T.name}`,children:e.jsx(J,{alt:(a=t==null?void 0:t.category)==null?void 0:a.name,src:`${D.site.serverFileHost}${(h=t==null?void 0:t.category)==null?void 0:h.image}`})})})}),e.jsx(f,{children:F(t==null?void 0:t.price)}),e.jsxs(f,{align:"center",children:[" ",((R=t==null?void 0:t.stock)==null?void 0:R.quantity)||"0"," "]}),e.jsxs(f,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[P&&e.jsx(H,{color:r.value?"inherit":"default",onClick:r.onToggle,sx:{...r.value&&{bgcolor:"action.hover"}},children:e.jsx(u,{icon:"eva:arrow-ios-downward-fill"})}),e.jsx(H,{color:n.open?"inherit":"default",onClick:n.onOpen,children:e.jsx(u,{icon:"eva:more-vertical-fill"})})]})]}),A=e.jsx(X,{children:e.jsx(f,{sx:{p:0,border:"none"},colSpan:8,children:e.jsx(oe,{in:r.value,timeout:"auto",unmountOnExit:!0,sx:{bgcolor:"background.neutral"},children:e.jsx(ae,{sx:{m:1.5},children:(U=t==null?void 0:t.productToOrder)==null?void 0:U.map((o,te)=>{var _,G,M,Q,W,z,K,w;return te===5?e.jsx(O,{alignItems:"flex-end",sx:{p:d=>d.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:d=>`solid 2px ${d.vars.palette.background.neutral}`}},children:e.jsx($,{variant:"contained",size:"small",endIcon:e.jsx(u,{icon:"heroicons-outline:external-link"}),onClick:()=>{E(t.id)},children:"See More"})},o.id):e.jsxs(O,{direction:"row",alignItems:"center",sx:{p:d=>d.spacing(1.5,2,1.5,1.5),"&:not(:last-of-type)":{borderBottom:d=>`solid 2px ${d.vars.palette.background.neutral}`}},children:[e.jsxs(b,{onClick:()=>{var d;return S((d=o==null?void 0:o.order)==null?void 0:d.id)},sx:{width:240,display:"flex",gap:1,alignItems:"center",cursor:"pointer",marginRight:5},children:[e.jsx(u,{icon:"heroicons-outline:external-link"}),e.jsx("span",{children:(_=o==null?void 0:o.order)==null?void 0:_.ref})]}),e.jsx(b,{sx:{width:"100%",display:"flex",gap:1,alignItems:"center"},children:e.jsx("span",{children:(M=(G=o.order)==null?void 0:G.customer)==null?void 0:M.name})}),e.jsxs(b,{sx:{width:240,color:"error.main",fontWeight:"bold"},children:[o.quantity," ",e.jsx("span",{style:{color:"#000",fontWeight:"400"},children:` (${F(o==null?void 0:o.snapshotProductPrice)})`})]}),e.jsx(b,{sx:{width:200,textAlign:"right"},children:(Q=o.order)==null?void 0:Q.status}),e.jsx(b,{sx:{width:300,textAlign:"right"},children:F(ne(((W=o.order)==null?void 0:W.totalOrderAmount)-((z=o.order)==null?void 0:z.totalOrderAmount)*(((K=o.order)==null?void 0:K.discount)/100),(w=o.order)==null?void 0:w.snapshotTaxPercentage))||"-"})]},o.id)})})})})});return e.jsxs(e.Fragment,{children:[I,A,e.jsx(ie,{open:n.open,anchorEl:n.anchorEl,onClose:n.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(le,{children:[e.jsxs(B,{onClick:()=>{C(),n.onClose()},children:[e.jsx(u,{icon:"solar:eye-bold"}),"View"]}),e.jsx(v,{permission:k.EDIT_PRODUCT,children:e.jsxs(B,{onClick:()=>{p(t.id),n.onClose()},children:[e.jsx(u,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(v,{permission:k.DELETE_PRODUCT,children:e.jsxs(B,{onClick:()=>{m.onTrue(),n.onClose()},sx:{color:"error.main"},children:[e.jsx(u,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Le,{open:m.value,onClose:m.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx($,{variant:"contained",color:"error",onClick:j,children:"Delete"})})]})},Ve=[{id:"productId",label:"No.",width:80},{id:"productName",label:"Name"},{id:"productPrice",label:"Category",width:200},{id:"productPrice",label:"Price",width:200},{id:"stock",label:"Stock",align:"center"},{id:"",width:88}];function Ne({products:t,taxPercentage:c}){const s=ke({defaultOrderBy:"planId"}),C=q(),j=Z(),[p,P]=x.useState(t),i=de({name:"",status:"all",startDate:null,endDate:null});x.useEffect(()=>{P(t)},[t]);const m=ce(i.state.startDate,i.state.endDate),r=Ue({inputData:p,comparator:Te(s.order,s.orderBy),filters:i.state,dateError:m}),n=Re(r,s.page,s.rowsPerPage),l=!!i.state.name||i.state.status!=="all"||!!i.state.startDate&&!!i.state.endDate,S=!r.length&&l||!r.length,E=x.useCallback(a=>{T(a)},[n.length,s,p]),I=x.useCallback(a=>{j.push(g.dashboard.product.edit(a))},[j]),A=x.useCallback(a=>{j.push(g.dashboard.product.details(a))},[j]),y=pe(),{mutate:T}=Ce({mutationFn:a=>V.delete(N.products.delete+a),onSuccess:async a=>{const h=p.filter(R=>R.id!==a);je.success("Delete success!"),P(h),s.onUpdatePageDeleteRow(n.length)},onSettled:async()=>{await y.invalidateQueries({queryKey:["products"]})},onError:()=>{}});return e.jsx(me,{maxWidth:"xl",children:e.jsxs(L,{container:!0,spacing:3,children:[e.jsx(L,{xs:12,md:12,children:e.jsx(ye,{links:[{name:"Dashboard",href:g.dashboard.root},{name:"Products",href:g.dashboard.plan.root},{name:"List"}],action:e.jsx(v,{permission:k.ADD_PRODUCT,children:e.jsx($,{component:ue,href:g.dashboard.product.new,variant:"contained",startIcon:e.jsx(u,{icon:"mingcute:add-line"}),children:"New Product"})})})}),e.jsx(v,{permission:k.LIST_PRODUCT,children:e.jsx(L,{xs:12,md:12,children:e.jsxs(he,{children:[e.jsx(qe,{filters:i,onResetPage:s.onResetPage,dateError:m}),l&&e.jsx(He,{filters:i,totalResults:r.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(b,{sx:{position:"relative"},children:[e.jsx(Oe,{dense:s.dense,numSelected:s.selected.length,rowCount:r.length,onSelectAllRows:a=>s.onSelectAllRows(a,r.map(h=>h.id)),action:e.jsx(ee,{title:"Delete",children:e.jsx(H,{color:"primary",onClick:C.onTrue,children:e.jsx(u,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(xe,{sx:{minHeight:444},children:e.jsxs(Ee,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Ie,{order:s.order,orderBy:s.orderBy,headLabel:Ve,rowCount:r.length,numSelected:s.selected.length,onSort:s.onSort}),e.jsxs(Ae,{children:[r.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((a,h)=>e.jsx($e,{row:a,index:s.page*s.rowsPerPage+h+1,selected:s.selected.includes(a.id),onEditRow:()=>I(a.id),onViewRow:()=>A(a.id),onDeleteRow:()=>E(a.id),taxPercentage:c},a.id)),e.jsx(Se,{height:s.dense?56:76,emptyRows:De(s.page,s.rowsPerPage,r.length)}),e.jsx(ve,{notFound:S})]})]})})]}),e.jsx(Be,{page:s.page,dense:s.dense,count:r.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})})]})})}function Ue({inputData:t,comparator:c,filters:s,dateError:C}){const{status:j,name:p,startDate:P,endDate:i}=s,m=t.map((r,n)=>[r,n]);return m.sort((r,n)=>{const l=c(r[0],n[0]);return l!==0?l:r[1]-n[1]}),t=m.map(r=>r[0]),p&&(t=t.filter(r=>r.id.toString().toLowerCase().indexOf(p.toLowerCase())!==-1||r.name.toLowerCase().indexOf(p.toLowerCase())!==-1)),C||P&&i&&(t=t.filter(r=>ge(r.createdAt,P,i))),t}const _e={title:`Product list | Dashboard - ${D.site.name}`};function ns(){const t=Y({queryKey:["products"],queryFn:async()=>{const{data:s}=await V.get(N.products.list);return s}}),c=Y({queryKey:["account-application"],queryFn:async()=>{const{data:s}=await V.get(N.auth.application);return s}});return c.isLoading||t.isLoading?e.jsx(Pe,{}):c.isError||t.isError?e.jsx(be,{route:g.dashboard.products.root}):e.jsxs(e.Fragment,{children:[e.jsx(fe,{children:e.jsxs("title",{children:[" ",_e.title]})}),e.jsx(Ne,{products:t.data,taxPercentage:c.data.taxPercentage})]})}export{ns as default};
