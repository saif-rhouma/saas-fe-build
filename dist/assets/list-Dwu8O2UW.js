import{w as y,bI as N,j as e,S as T,A as H,C as R,B as D,dw as O,y as S,I as x,dB as q,bK as M,bL as P,e as C,r as h,o as V,dE as G,er as K,p as j,dN as Q,ed as z,G as f,R as W,aH as $,dy as J,dD as U,es as _,dO as k,dM as v,dP as X,eh as Y,H as Z}from"./index-DxrsDIwY.js";import{u as ee,E as te}from"./error-block-Cg6RpAZK.js";import"./product-review-new-form-BJk8kuFD.js";import"./index-BLUHqJ53.js";import"./image-yj0A9F1D.js";import"./color-preview-_gGkV3xM.js";import{u as se}from"./useMutation-f5nVFG-s.js";import{C as I}from"./confirm-dialog-tDH-oZWO.js";import{C as oe}from"./custom-breadcrumbs-Dd3lNCwD.js";import{u as re,g as ae,r as ne,T as ie,a as le,e as ce}from"./table-selected-action-DOkqk6zb.js";import{T as de}from"./table-no-data-DzXXEfeL.js";import{T as me,a as pe,b as ue,c as he}from"./table-head-custom-w-4MLJlt.js";import{T as xe}from"./table-pagination-custom-BDQuCrzU.js";import{b as ge}from"./format-number-DtiborQ_.js";import{T as p}from"./TableCell-CJNt5t20.js";import{C as je}from"./Checkbox-ylG2wecL.js";import{T as be}from"./TextField-C2VP4uls.js";import{I as fe}from"./InputAdornment-D2FMqto9.js";import"./form-provider-DzAJAZLb.js";import"./editor-Dqkfe7Lc.js";import"./incrementer-button-BtQ5_PmY.js";import"./carousel-progress-bar-C7Dah3U-.js";import"./html-to-markdown-B4-DEu4j.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./fields-Dsl2Pqgx.js";import"./FormHelperText-DMsDqsw2.js";import"./formControlState-Dq1zat_P.js";import"./Rating-FZfLYAhV.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-R3UsSTxo.js";import"./FormControl-CC-u2HkW.js";import"./utils-DoM3o7-Q.js";import"./FormLabel-EgLeF9WB.js";import"./RadioGroup-IW7zsT63.js";import"./FormGroup-69w0Ctto.js";import"./FormControlLabel-DKxiCaQc.js";import"./Autocomplete-DQd8H5I4.js";import"./Select-eQVewVvt.js";import"./Menu-C6l2dIf8.js";import"./InputBase-B9Lf9cs-.js";import"./Chip-Bq-6ExUD.js";import"./country-select-6tMU1vH_.js";import"./countries-DSLisFCy.js";import"./InputLabel-CQVMsmZY.js";import"./upload-avatar-4NlzUb0f.js";import"./index-wGJ5bMai.js";import"./DatePicker-CHBP34D3.js";import"./DialogContent-262oYdAn.js";import"./ListItem-Cbx-5wAg.js";import"./MobileDateTimePicker-UWVv-JJA.js";import"./product-Item-button-Bivxk7Bf.js";import"./DialogTitle-C_65wNCI.js";import"./LoadingButton-BPYHnDdd.js";import"./CircularProgress-CRSD6Bm4.js";import"./AccordionSummary-9hrdsMAT.js";import"./empty-content-Der9frKm.js";import"./TablePagination-Bol3AgoD.js";import"./LastPage-Ct_4tubK.js";import"./index-BNV8Ha3a.js";const Ce=({row:t,selected:s,onViewRow:c,onSelectRow:d,onDeleteRow:l,onEditRow:m})=>{const a=y(),i=N(),r=e.jsxs(me,{hover:!0,selected:s,children:[e.jsx(p,{padding:"checkbox",children:e.jsx(je,{checked:s,onClick:d,inputProps:{id:`row-checkbox-${t==null?void 0:t.id}`,"aria-label":"Row checkbox"}})}),e.jsx(p,{children:t==null?void 0:t.id}),e.jsx(p,{children:e.jsxs(T,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(H,{alt:t==null?void 0:t.name,src:R.site.serverFileHost+(t==null?void 0:t.image)}),e.jsx(D,{component:"span",children:t==null?void 0:t.name})]})}),e.jsx(p,{children:ge(t==null?void 0:t.price)}),e.jsx(p,{align:"center",children:" - "}),e.jsx(p,{children:e.jsx(O,{variant:"soft",color:t.isActive===!0&&"success"||t.isActive===!1&&"error"||"default",children:t!=null&&t.isActive?"ACTIVE":"INACTIVE"})}),e.jsx(p,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(S,{color:i.open?"inherit":"default",onClick:i.onOpen,children:e.jsx(x,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[r,e.jsx(q,{open:i.open,anchorEl:i.anchorEl,onClose:i.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(M,{children:[e.jsxs(P,{onClick:()=>{m(t.id),i.onClose()},children:[e.jsx(x,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(P,{onClick:()=>{a.onTrue(),i.onClose()},sx:{color:"error.main"},children:[e.jsx(x,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})}),e.jsx(I,{open:a.value,onClose:a.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(C,{variant:"contained",color:"error",onClick:l,children:"Delete"})})]})};function Pe({filters:t,onResetPage:s,options:c}){const d=h.useCallback(l=>{s(),t.setState({name:l.target.value})},[t,s]);return e.jsx(T,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(be,{sx:{width:420},value:t.state.name,onChange:d,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(fe,{position:"start",children:e.jsx(x,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}const ye=[{id:"productId",label:"No.",width:60},{id:"productName",label:"Product Name",width:140},{id:"productPrice",label:"Product Price",width:140},{id:"stock",label:"Stock",width:120,align:"center"},{id:"status",label:"Status",width:140},{id:"",width:88}];function Te({products:t}){const s=re({defaultOrderBy:"planId"}),c=y(),d=V(),[l,m]=h.useState(t),a=G({name:"",status:"all",startDate:null,endDate:null});h.useEffect(()=>{m(t)},[t]);const i=K(a.state.startDate,a.state.endDate),r=Re({inputData:l,comparator:ae(s.order,s.orderBy),filters:a.state,dateError:i}),n=ne(r,s.page,s.rowsPerPage),u=!!a.state.name||a.state.status!=="all"||!!a.state.startDate&&!!a.state.endDate,b=!r.length&&u||!r.length,A=h.useCallback(o=>{B(o)},[n.length,s,l]),E=h.useCallback(o=>{d.push(j.dashboard.product.edit(o))},[d]),w=h.useCallback(()=>{},[r.length,n.length,s,l]),F=Q(),{mutate:B}=se({mutationFn:o=>k.delete(v.products.delete+o),onSuccess:async o=>{const g=l.filter(L=>L.id!==o);X.success("Delete success!"),m(g),s.onUpdatePageDeleteRow(n.length)},onSettled:async()=>{await F.invalidateQueries({queryKey:["products"]})},onError:()=>{}});return e.jsxs(e.Fragment,{children:[e.jsx(z,{maxWidth:"xl",children:e.jsxs(f,{container:!0,spacing:3,children:[e.jsx(f,{xs:12,md:12,children:e.jsx(oe,{links:[{name:"Dashboard",href:j.dashboard.root},{name:"Product",href:j.dashboard.plan.root},{name:"List"}],action:e.jsx(C,{component:W,href:j.dashboard.product.new,variant:"contained",startIcon:e.jsx(x,{icon:"mingcute:add-line"}),children:"Add New Product"})})}),e.jsx(f,{xs:12,md:12,children:e.jsxs($,{children:[e.jsx(Pe,{filters:a,onResetPage:s.onResetPage,dateError:i}),e.jsxs(D,{sx:{position:"relative"},children:[e.jsx(ie,{dense:s.dense,numSelected:s.selected.length,rowCount:r.length,onSelectAllRows:o=>s.onSelectAllRows(o,r.map(g=>g.id)),action:e.jsx(J,{title:"Delete",children:e.jsx(S,{color:"primary",onClick:c.onTrue,children:e.jsx(x,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(U,{sx:{minHeight:444},children:e.jsxs(pe,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(ue,{order:s.order,orderBy:s.orderBy,headLabel:ye,rowCount:r.length,numSelected:s.selected.length,onSort:s.onSort,onSelectAllRows:o=>s.onSelectAllRows(o,r.map(g=>g.id))}),e.jsxs(he,{children:[r.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(o=>e.jsx(Ce,{row:o,selected:s.selected.includes(o.id),onEditRow:()=>E(o.id),onDeleteRow:()=>A(o.id)},o.id)),e.jsx(le,{height:s.dense?56:76,emptyRows:ce(s.page,s.rowsPerPage,r.length)}),e.jsx(de,{notFound:b})]})]})})]}),e.jsx(xe,{page:s.page,dense:s.dense,count:r.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})]})}),e.jsx(I,{open:c.value,onClose:c.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",s.selected.length," "]})," items?"]}),action:e.jsx(C,{variant:"contained",color:"error",onClick:()=>{w(),c.onFalse()},children:"Delete"})})]})}function Re({inputData:t,comparator:s,filters:c,dateError:d}){const{status:l,name:m,startDate:a,endDate:i}=c,r=t.map((n,u)=>[n,u]);return r.sort((n,u)=>{const b=s(n[0],u[0]);return b!==0?b:n[1]-u[1]}),t=r.map(n=>n[0]),m&&(t=t.filter(n=>n.id.toString().toLowerCase().indexOf(m.toLowerCase())!==-1||n.name.toLowerCase().indexOf(m.toLowerCase())!==-1)),d||a&&i&&(t=t.filter(n=>_(n.createdAt,a,i))),t}const De={title:`Product list | Dashboard - ${R.site.name}`};function Ft(){const t=ee({queryKey:["products"],queryFn:async()=>{const{data:s}=await k.get(v.products.list);return s}});return t.isPending||t.isLoading?e.jsx(Y,{}):t.isError?e.jsx(te,{route:j.dashboard.products.root}):e.jsxs(e.Fragment,{children:[e.jsx(Z,{children:e.jsxs("title",{children:[" ",De.title]})}),e.jsx(Te,{products:t.data})]})}export{Ft as default};
