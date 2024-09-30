import{bO as X,j as e,S as h,A as I,C as b,B as f,w as R,I as C,dw as Y,bQ as Z,bR as B,r as x,dI as k,dJ as v,dH as w,dK as A,D as T,e as H,o as D,dz as ee,eo as te,ec as L,p as S,e8 as se,aD as ae,cM as ne,dy as re,H as oe}from"./index-MIl7JRte.js";import{u as Q,E as N}from"./error-block-ByqY2klf.js";import{C as ie}from"./custom-breadcrumbs-BPBIAp3F.js";import{u as le,g as ce,r as de,T as me,a as ue,e as he}from"./table-selected-action-EpbVzkHp.js";import{T as pe}from"./table-no-data-BeWJePlI.js";import{T as xe,a as ge,b as je,c as be}from"./table-head-custom-DFFJs59-.js";import{T as fe}from"./table-pagination-custom-RIMYRp8Y.js";import{T as P}from"./TableCell-CUexyj7j.js";import{z as j,u as O,t as K,a as M,F}from"./form-provider-ClQZuquv.js";import{u as W}from"./useMutation-D1t2nLjA.js";import"./image-DTyoCSe4.js";import"./editor-DwhMiLHm.js";import{a as z,b as V,D as J}from"./DialogContent-MWHQ5VhB.js";import{D as G}from"./DialogTitle-G7RMJBLj.js";import{L as _}from"./LoadingButton-51KhMkt4.js";import{T as ye}from"./TextField-IqMcSK3A.js";import{I as Pe}from"./InputAdornment-CNG_kA5I.js";import{P as Se}from"./product-table-filters-result-Bw2gNOb0.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-CTo3jFS7.js";import"./empty-content-BeP_n_I6.js";import"./TablePagination-BmHifrUy.js";import"./KeyboardArrowRight-BxpBdu-g.js";import"./LastPage-pwolzQQZ.js";import"./Select-DVfqO7-t.js";import"./Menu-C288flBa.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-CEys6nDV.js";import"./FormControlLabel-Dijue8fI.js";import"./FormHelperText-DeESC_bm.js";import"./Rating-Mc2yJZtd.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-CdWGWfzg.js";import"./FormControl-BIKiU88P.js";import"./FormLabel-4maV1u2X.js";import"./RadioGroup-CcVm08vh.js";import"./FormGroup-BwNeKb70.js";import"./index-BwFSO260.js";import"./countries-DSLisFCy.js";import"./Autocomplete-C2g3c3nW.js";import"./Chip-JwX3biZx.js";import"./country-select-Ck7C9Bj9.js";import"./InputLabel-Db4FFM5y.js";import"./upload-avatar-CXFdLHTf.js";import"./format-number-BzcJdoz7.js";import"./DatePicker-BZi2O4La.js";import"./ListItem-DbyD7F5O.js";import"./MobileDateTimePicker-DdCoDJmO.js";import"./Tabs-Cg0yLyVo.js";import"./index-HtHD65D2.js";import"./CircularProgress-DwFlPOsz.js";import"./filters-result-OkLM9o1L.js";const Ce=({row:t,index:s,selected:o,onEditRow:i})=>{const n=X(),r=e.jsxs(xe,{hover:!0,selected:o,children:[e.jsx(P,{children:s||(t==null?void 0:t.id)}),e.jsx(P,{children:e.jsxs(h,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(I,{alt:t==null?void 0:t.name,src:b.site.serverFileHost+((t==null?void 0:t.image)||b.site.defaultImgPlaceHolder)}),e.jsx(f,{component:"span",children:t==null?void 0:t.name})]})}),e.jsx(P,{children:t.quantity}),e.jsx(P,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(R,{color:n.open?"inherit":"default",onClick:n.onOpen,children:e.jsx(C,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[r,e.jsx(Y,{open:n.open,anchorEl:n.anchorEl,onClose:n.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsx(Z,{children:e.jsxs(B,{onClick:()=>{i(t.id),n.onClose()},children:[e.jsx(C,{icon:"solar:pen-bold"}),"Edit"]})})})]})},Te=j.object({quantity:j.number().min(0,{message:"Quantity number is required!"})}),ve=({stock:t,open:s,onClose:o})=>{const i={quantity:(t==null?void 0:t.quantity)||0},n=O({resolver:K(Te),defaultValues:i}),{reset:r,handleSubmit:c,formState:{isSubmitting:m}}=n,g=c(async a=>{try{p({id:t==null?void 0:t.id,payload:a})}catch(u){console.log(u)}});x.useEffect(()=>{t&&r(i)},[t]);const l=k(),{mutate:p}=W({mutationFn:({id:a,payload:u})=>v.patch(w.stock.edit+a,u),onSuccess:async()=>{A.success("Stock Has Been Modified!"),o()},onSettled:async()=>{await l.invalidateQueries({queryKey:["products-stock"]})},onError:()=>{}});return e.jsxs(z,{fullWidth:!0,open:s,onClose:o,children:[e.jsx(G,{children:"Edit Stock"}),e.jsx(T,{}),e.jsxs(M,{methods:n,onSubmit:g,children:[e.jsx(V,{sx:{pt:2},children:e.jsxs(h,{direction:"row",gap:2,children:[e.jsxs(h,{fullWidth:!0,flex:1,spacing:2,direction:"row",alignItems:"center",children:[e.jsx(I,{sx:{width:24,height:24},alt:t==null?void 0:t.name,src:b.site.serverFileHost+(t==null?void 0:t.image)}),e.jsx(f,{component:"span",children:t==null?void 0:t.name})]}),e.jsx(f,{children:e.jsx(F.Text,{type:"number",label:"Enter Quantity",name:"quantity"})})]})}),e.jsx(T,{sx:{pt:1,mt:1}}),e.jsxs(J,{children:[e.jsx(_,{type:"submit",variant:"contained",children:"Save"}),e.jsx(H,{color:"inherit",variant:"outlined",onClick:o,children:"Cancel"})]})]})]})},we=j.object({product:j.number().min(1,{message:"Product is required!"}),quantity:j.number().min(1,{message:"Quantity number is required!"})}),Ee=({productsList:t,open:s,onClose:o})=>{const i={product:null,quantity:1},n=O({resolver:K(we),defaultValues:i}),{reset:r,handleSubmit:c,formState:{isSubmitting:m}}=n,g=c(async a=>{try{p(a)}catch(u){console.log(u)}}),l=k(),{mutate:p}=W({mutationFn:a=>v.post(w.stock.create,a),onSuccess:async a=>{A.success("New Stock Has Been Created!"),r(),o()},onSettled:async()=>{await l.invalidateQueries({queryKey:["products-stock"]})},onError:()=>{}});return e.jsxs(z,{fullWidth:!0,open:s,onClose:o,children:[e.jsx(G,{children:"Add Stock"}),e.jsx(T,{}),e.jsxs(M,{methods:n,onSubmit:g,children:[e.jsx(V,{sx:{pt:2},children:e.jsxs(h,{direction:"row",gap:2,children:[e.jsx(F.Select,{name:"product",label:"Product",children:t==null?void 0:t.filter(a=>(a==null?void 0:a.stock)===null).map(a=>e.jsx(B,{value:a==null?void 0:a.id,children:e.jsxs(h,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(I,{sx:{width:24,height:24},alt:a==null?void 0:a.name,src:b.site.serverFileHost+(a==null?void 0:a.image)}),e.jsx(f,{component:"span",children:a==null?void 0:a.name})]})},a==null?void 0:a.id))}),e.jsx(F.Text,{type:"number",label:"Enter Quantity",name:"quantity"})]})}),e.jsx(T,{sx:{pt:1,mt:1}}),e.jsxs(J,{children:[e.jsx(_,{type:"submit",variant:"contained",children:"Save"}),e.jsx(H,{color:"inherit",variant:"outlined",onClick:o,children:"Cancel"})]})]})]})};function De({filters:t,onResetPage:s,options:o}){const i=x.useCallback(n=>{s(),t.setState({name:n.target.value})},[t,s]);return e.jsx(h,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(ye,{sx:{width:420},value:t.state.name,onChange:i,placeholder:"Search Product Name or Stock number...",InputProps:{startAdornment:e.jsx(Pe,{position:"start",children:e.jsx(C,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}const Fe=[{id:"stockId",label:"No.",width:60},{id:"productName",label:"Product Name"},{id:"stock",label:"In Stock",width:200},{id:"",width:40}];function Ie({stocks:t}){const s=le({defaultOrderBy:"planId"}),[o,i]=x.useState(),n=D(),r=D(),c=D(),[m,g]=x.useState(t),l=ee({name:"",status:"all",startDate:null,endDate:null});x.useEffect(()=>{g(t)},[t]);const p=te(l.state.startDate,l.state.endDate),a=qe({inputData:m,comparator:ce(s.order,s.orderBy),filters:l.state,dateError:p}),u=de(a,s.page,s.rowsPerPage),$=x.useCallback(d=>{i(d),r.onToggle()},[u.length,s,m]),q=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate,U=!a.length&&q||!a.length,y=Q({queryKey:["products"],queryFn:async()=>{const{data:d}=await v.get(w.products.list);return d}});return y.isPending||y.isLoading?e.jsx(L,{}):y.isError?e.jsx(N,{route:S.dashboard.products.root}):e.jsxs(e.Fragment,{children:[e.jsx(se,{maxWidth:"xl",children:e.jsxs(h,{spacing:3,children:[e.jsx(ie,{links:[{name:"Dashboard",href:S.dashboard.root},{name:"Products",href:S.dashboard.product.root},{name:"Product Stock"}]}),e.jsxs(ae,{children:[e.jsx(De,{filters:l,onResetPage:s.onResetPage,dateError:p}),q&&e.jsx(Se,{filters:l,totalResults:a.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(f,{sx:{position:"relative"},children:[e.jsx(me,{dense:s.dense,numSelected:s.selected.length,rowCount:a.length,onSelectAllRows:d=>s.onSelectAllRows(d,a.map(E=>E.id)),action:e.jsx(ne,{title:"Delete",children:e.jsx(R,{color:"primary",onClick:c.onTrue,children:e.jsx(C,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(re,{sx:{minHeight:200},children:e.jsxs(ge,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(je,{order:s.order,orderBy:s.orderBy,headLabel:Fe,rowCount:a.length}),a.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((d,E)=>e.jsx(Ce,{index:s.page*s.rowsPerPage+E+1,row:d,onEditRow:()=>$(d),selected:s.selected.includes(d.id)},d.id)),e.jsxs(be,{children:[e.jsx(ue,{height:s.dense?56:76,emptyRows:he(s.page,s.rowsPerPage,a.length)}),e.jsx(pe,{notFound:U})]})]})})]}),e.jsx(fe,{page:s.page,dense:s.dense,count:a.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})]})}),n.value&&e.jsx(Ee,{productsList:y.data,open:n.value,onClose:n.onFalse}),e.jsx(ve,{stock:o,open:r.value,onClose:r.onFalse})]})}function qe({inputData:t,comparator:s,filters:o}){const{name:i}=o,n=t.map((r,c)=>[r,c]);return n.sort((r,c)=>{const m=s(r[0],c[0]);return m!==0?m:r[1]-c[1]}),t=n.map(r=>r[0]),i&&(t=t.filter(r=>r.id.toString().toLowerCase().indexOf(i.toLowerCase())!==-1||r.name.toLowerCase().indexOf(i.toLowerCase())!==-1)),t}const Re={title:`Product Stock | Dashboard - ${b.site.name}`};function kt(){const t=Q({queryKey:["products-stock"],queryFn:async()=>{const{data:s}=await v.get(w.products.stock);return s}});return t.isPending||t.isLoading?e.jsx(L,{}):t.isError?e.jsx(N,{route:S.dashboard.products.root}):e.jsxs(e.Fragment,{children:[e.jsx(oe,{children:e.jsxs("title",{children:[" ",Re.title]})}),e.jsx(Ie,{stocks:t.data})]})}export{kt as default};