import{aP as $,j as e,S as p,A as w,C as b,B as f,db as U,aR as X,aS as R,I as q,r as x,dn as B,dp as C,dm as T,dq as A,am as S,e as k,i as E,de as Z,ec as ee,dT as H,p as y,dP as te,cY as se,c9 as ae,l as ne,dd as re,H as oe}from"./index-1iE_pzdz.js";import{u as L,E as N}from"./error-block-BIgktCvX.js";import{C as ie}from"./custom-breadcrumbs-CPH4Y4PL.js";import{g as le,r as ce,e as de}from"./utils-MBUcMVfY.js";import{u as me}from"./use-table-D5uAMHpH.js";import{T as ue}from"./table-no-data-B7DbW70a.js";import{T as pe}from"./table-empty-rows-Dj9AnC98.js";import{T as he,a as xe,b as ge,c as je}from"./table-head-custom-DqzsA4di.js";import{T as be}from"./table-selected-action-B-CspTIN.js";import{T as fe}from"./table-pagination-custom-CK7MqgPN.js";import{T as F}from"./TableCell-BhJowIdd.js";import{z as j,u as Q,t as W,a as K,F as D}from"./form-provider-Bk4GtwIc.js";import{u as M}from"./useMutation-BSVHjL8_.js";import"./image-8x8gVsOX.js";import"./editor-DqsCUEj-.js";import{a as O,b as z,D as V}from"./DialogContent-uKdN3zVH.js";import{D as G}from"./DialogTitle-Bw_E_Avm.js";import{L as J}from"./LoadingButton-Bg3a4Y8E.js";import{T as Pe}from"./TextField-DHtCrzsF.js";import{I as ye}from"./InputAdornment-CACQTP1p.js";import{P as Se}from"./product-table-filters-result-DAkHI6hM.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-BXDkrZG_.js";import"./Checkbox-DNBko6Dw.js";import"./TablePagination-BQWhhCd_.js";import"./KeyboardArrowRight-DXB4fbCs.js";import"./LastPage-sTxe72u8.js";import"./Select-CYfB2nz0.js";import"./Menu-BX9dxjlv.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-BadK7O_L.js";import"./FormControlLabel-Df-QIfD8.js";import"./FormHelperText-DsSp4x5g.js";import"./Rating-DaffWkCu.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-CkoquRLq.js";import"./FormControl-NfFD8g29.js";import"./FormLabel-Z8Hq68xw.js";import"./RadioGroup-8jgKyWkn.js";import"./FormGroup-Br4pQUt2.js";import"./utils-CFaUPgDl.js";import"./index-Cq7CuE1D.js";import"./countries-DSLisFCy.js";import"./Autocomplete-BDxJtnkk.js";import"./Chip-Cd2814Jh.js";import"./country-select-CB3QmzBF.js";import"./InputLabel-B4tUSR5W.js";import"./upload-avatar-CqNbza97.js";import"./format-number-CTB21s4Z.js";import"./DatePicker-BYYGSvFj.js";import"./ListItem-MIIjg71W.js";import"./MobileDateTimePicker-CwoMymqr.js";import"./Tabs-BixlVTD0.js";import"./index-K8l5CjQY.js";import"./CircularProgress-CD2AWEVA.js";import"./filters-result-BVCsvvvC.js";const Ce=({row:t,index:s,selected:o,onEditRow:i})=>{const n=$(),r=e.jsxs(he,{hover:!0,selected:o,children:[e.jsx(F,{children:s||(t==null?void 0:t.id)}),e.jsx(F,{children:e.jsxs(p,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(w,{alt:t==null?void 0:t.name,src:b.site.serverFileHost+((t==null?void 0:t.image)||b.site.defaultImgPlaceHolder)}),e.jsx(f,{component:"span",children:t==null?void 0:t.name})]})}),e.jsx(F,{children:t.quantity})]});return e.jsxs(e.Fragment,{children:[r,e.jsx(U,{open:n.open,anchorEl:n.anchorEl,onClose:n.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsx(X,{children:e.jsxs(R,{onClick:()=>{i(t.id),n.onClose()},children:[e.jsx(q,{icon:"solar:pen-bold"}),"Edit"]})})})]})},Te=j.object({quantity:j.number().min(0,{message:"Quantity number is required!"})}),ve=({stock:t,open:s,onClose:o})=>{const i={quantity:(t==null?void 0:t.quantity)||0},n=Q({resolver:W(Te),defaultValues:i}),{reset:r,handleSubmit:c,formState:{isSubmitting:m}}=n,g=c(async a=>{try{h({id:t==null?void 0:t.id,payload:a})}catch(u){console.log(u)}});x.useEffect(()=>{t&&r(i)},[t]);const l=B(),{mutate:h}=M({mutationFn:({id:a,payload:u})=>C.patch(T.stock.edit+a,u),onSuccess:async()=>{A.success("Stock Has Been Modified!"),o()},onSettled:async()=>{await l.invalidateQueries({queryKey:["products-stock"]})},onError:()=>{}});return e.jsxs(O,{fullWidth:!0,open:s,onClose:o,children:[e.jsx(G,{children:"Edit Stock"}),e.jsx(S,{}),e.jsxs(K,{methods:n,onSubmit:g,children:[e.jsx(z,{sx:{pt:2},children:e.jsxs(p,{direction:"row",gap:2,children:[e.jsxs(p,{fullWidth:!0,flex:1,spacing:2,direction:"row",alignItems:"center",children:[e.jsx(w,{sx:{width:24,height:24},alt:t==null?void 0:t.name,src:b.site.serverFileHost+(t==null?void 0:t.image)}),e.jsx(f,{component:"span",children:t==null?void 0:t.name})]}),e.jsx(f,{children:e.jsx(D.Text,{type:"number",label:"Enter Quantity",name:"quantity"})})]})}),e.jsx(S,{sx:{pt:1,mt:1}}),e.jsxs(V,{children:[e.jsx(J,{type:"submit",variant:"contained",children:"Save"}),e.jsx(k,{color:"inherit",variant:"outlined",onClick:o,children:"Cancel"})]})]})]})},Ee=j.object({product:j.number().min(1,{message:"Product is required!"}),quantity:j.number().min(1,{message:"Quantity number is required!"})}),Fe=({productsList:t,open:s,onClose:o})=>{const i={product:null,quantity:1},n=Q({resolver:W(Ee),defaultValues:i}),{reset:r,handleSubmit:c,formState:{isSubmitting:m}}=n,g=c(async a=>{try{h(a)}catch(u){console.log(u)}}),l=B(),{mutate:h}=M({mutationFn:a=>C.post(T.stock.create,a),onSuccess:async a=>{A.success("New Stock Has Been Created!"),r(),o()},onSettled:async()=>{await l.invalidateQueries({queryKey:["products-stock"]})},onError:()=>{}});return e.jsxs(O,{fullWidth:!0,open:s,onClose:o,children:[e.jsx(G,{children:"Add Stock"}),e.jsx(S,{}),e.jsxs(K,{methods:n,onSubmit:g,children:[e.jsx(z,{sx:{pt:2},children:e.jsxs(p,{direction:"row",gap:2,children:[e.jsx(D.Select,{name:"product",label:"Product",children:t==null?void 0:t.filter(a=>(a==null?void 0:a.stock)===null).map(a=>e.jsx(R,{value:a==null?void 0:a.id,children:e.jsxs(p,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(w,{sx:{width:24,height:24},alt:a==null?void 0:a.name,src:b.site.serverFileHost+(a==null?void 0:a.image)}),e.jsx(f,{component:"span",children:a==null?void 0:a.name})]})},a==null?void 0:a.id))}),e.jsx(D.Text,{type:"number",label:"Enter Quantity",name:"quantity"})]})}),e.jsx(S,{sx:{pt:1,mt:1}}),e.jsxs(V,{children:[e.jsx(J,{type:"submit",variant:"contained",children:"Save"}),e.jsx(k,{color:"inherit",variant:"outlined",onClick:o,children:"Cancel"})]})]})]})};function De({filters:t,onResetPage:s,options:o}){const i=x.useCallback(n=>{s(),t.setState({name:n.target.value})},[t,s]);return e.jsx(p,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Pe,{sx:{width:420},value:t.state.name,onChange:i,placeholder:"Search Product Name or Stock number...",InputProps:{startAdornment:e.jsx(ye,{position:"start",children:e.jsx(q,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}const we=[{id:"stockId",label:"No.",width:60},{id:"productName",label:"Product Name"},{id:"stock",label:"In Stock",width:200}];function qe({stocks:t}){const s=me({defaultOrderBy:"planId"}),[o,i]=x.useState(),n=E(),r=E(),c=E(),[m,g]=x.useState(t),l=Z({name:"",status:"all",startDate:null,endDate:null});x.useEffect(()=>{g(t)},[t]);const h=ee(l.state.startDate,l.state.endDate),a=Ie({inputData:m,comparator:le(s.order,s.orderBy),filters:l.state,dateError:h}),u=ce(a,s.page,s.rowsPerPage),Y=x.useCallback(d=>{i(d),r.onToggle()},[u.length,s,m]),I=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate,_=!a.length&&I||!a.length,P=L({queryKey:["products"],queryFn:async()=>{const{data:d}=await C.get(T.products.list);return d}});return P.isPending||P.isLoading?e.jsx(H,{}):P.isError?e.jsx(N,{route:y.dashboard.products.root}):e.jsxs(e.Fragment,{children:[e.jsx(te,{maxWidth:"xl",children:e.jsxs(p,{spacing:3,children:[e.jsx(ie,{links:[{name:"Dashboard",href:y.dashboard.root},{name:"Products",href:y.dashboard.product.root},{name:"Product Stock"}]}),e.jsxs(se,{children:[e.jsx(De,{filters:l,onResetPage:s.onResetPage,dateError:h}),I&&e.jsx(Se,{filters:l,totalResults:a.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(f,{sx:{position:"relative"},children:[e.jsx(be,{dense:s.dense,numSelected:s.selected.length,rowCount:a.length,onSelectAllRows:d=>s.onSelectAllRows(d,a.map(v=>v.id)),action:e.jsx(ae,{title:"Delete",children:e.jsx(ne,{color:"primary",onClick:c.onTrue,children:e.jsx(q,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(re,{sx:{minHeight:200},children:e.jsxs(xe,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(ge,{order:s.order,orderBy:s.orderBy,headLabel:we,rowCount:a.length}),a.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((d,v)=>e.jsx(Ce,{index:s.page*s.rowsPerPage+v+1,row:d,onEditRow:()=>Y(d),selected:s.selected.includes(d.id)},d.id)),e.jsxs(je,{children:[e.jsx(pe,{height:s.dense?56:76,emptyRows:de(s.page,s.rowsPerPage,a.length)}),e.jsx(ue,{notFound:_})]})]})})]}),e.jsx(fe,{page:s.page,dense:s.dense,count:a.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})]})}),n.value&&e.jsx(Fe,{productsList:P.data,open:n.value,onClose:n.onFalse}),e.jsx(ve,{stock:o,open:r.value,onClose:r.onFalse})]})}function Ie({inputData:t,comparator:s,filters:o}){const{name:i}=o,n=t.map((r,c)=>[r,c]);return n.sort((r,c)=>{const m=s(r[0],c[0]);return m!==0?m:r[1]-c[1]}),t=n.map(r=>r[0]),i&&(t=t.filter(r=>r.id.toString().toLowerCase().indexOf(i.toLowerCase())!==-1||r.name.toLowerCase().indexOf(i.toLowerCase())!==-1)),t}const Re={title:`Product Stock | Dashboard - ${b.site.name}`};function Nt(){const t=L({queryKey:["products-stock"],queryFn:async()=>{const{data:s}=await C.get(T.products.stock);return s}});return t.isPending||t.isLoading?e.jsx(H,{}):t.isError?e.jsx(N,{route:y.dashboard.products.root}):e.jsxs(e.Fragment,{children:[e.jsx(oe,{children:e.jsxs("title",{children:[" ",Re.title]})}),e.jsx(qe,{stocks:t.data})]})}export{Nt as default};