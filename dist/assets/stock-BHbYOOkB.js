import{bO as U,j as e,S as h,A as F,C as b,B as f,dw as X,bQ as Y,bR as R,I,r as x,dI as B,dJ as C,dH as T,dK as A,D as S,e as H,o as E,dz as Z,eo as ee,ec as k,p as P,e8 as te,aD as se,cM as ae,w as ne,dy as re,H as oe}from"./index-CwDFRBrV.js";import{u as L,E as Q}from"./error-block-po56rbru.js";import{C as ie}from"./custom-breadcrumbs-tdSVNm9k.js";import{g as le,r as ce,T as de,a as me,e as ue}from"./table-selected-action-QvRRh6wE.js";import{u as he}from"./use-table-keuem4Xf.js";import{T as pe}from"./table-no-data-C6vJju_i.js";import{T as xe,a as ge,b as je,c as be}from"./table-head-custom-0GEy35EZ.js";import{T as fe}from"./table-pagination-custom-B9zCiItL.js";import{T as D}from"./TableCell-D5WBIyLx.js";import{z as j,u as N,t as K,a as M,F as w}from"./form-provider-C8IltM3z.js";import{u as O}from"./useMutation-CkTHNDXi.js";import"./image-D_atTa8y.js";import"./editor-eNq_8vRL.js";import{a as W,b as z,D as V}from"./DialogContent-DQegyPQl.js";import{D as J}from"./DialogTitle-B_p_zW0I.js";import{L as G}from"./LoadingButton-BM8YRB0z.js";import{T as ye}from"./TextField-CHPZUTqF.js";import{I as Pe}from"./InputAdornment-DEbikF0Z.js";import{P as Se}from"./product-table-filters-result-JvB5GNoX.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-Cm203eFc.js";import"./empty-content-LLazwqBz.js";import"./TablePagination-CxmbsKV-.js";import"./KeyboardArrowRight-DJc55wOs.js";import"./LastPage-DeJVGkdu.js";import"./Select-C_u8K-J_.js";import"./Menu-B_jyagBS.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-Bn2YUrmy.js";import"./FormControlLabel-HvXv_MVH.js";import"./FormHelperText-Bj0ulyme.js";import"./Rating-C4JeVFy2.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-Brhk4K8C.js";import"./FormControl-yMCQcYEm.js";import"./FormLabel-BavGwz4i.js";import"./RadioGroup-c9F65hOo.js";import"./FormGroup-DOTqUq1f.js";import"./index-DM_1Xs39.js";import"./countries-DSLisFCy.js";import"./Autocomplete-CmyTYkoe.js";import"./Chip-BadVSybg.js";import"./country-select-DGH5tKc3.js";import"./InputLabel-CKyW86qE.js";import"./upload-avatar-Bqr4alq-.js";import"./format-number-Ch538jHW.js";import"./DatePicker-DijfO7Ga.js";import"./ListItem-M-XT_teX.js";import"./MobileDateTimePicker-DjMxEeI_.js";import"./Tabs-BdVdVdbh.js";import"./index-BP8NwpZp.js";import"./CircularProgress-f16JZADw.js";import"./filters-result-DEYNNCA9.js";const Ce=({row:t,index:s,selected:o,onEditRow:i})=>{const n=U(),r=e.jsxs(xe,{hover:!0,selected:o,children:[e.jsx(D,{children:s||(t==null?void 0:t.id)}),e.jsx(D,{children:e.jsxs(h,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(F,{alt:t==null?void 0:t.name,src:b.site.serverFileHost+((t==null?void 0:t.image)||b.site.defaultImgPlaceHolder)}),e.jsx(f,{component:"span",children:t==null?void 0:t.name})]})}),e.jsx(D,{children:t.quantity})]});return e.jsxs(e.Fragment,{children:[r,e.jsx(X,{open:n.open,anchorEl:n.anchorEl,onClose:n.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsx(Y,{children:e.jsxs(R,{onClick:()=>{i(t.id),n.onClose()},children:[e.jsx(I,{icon:"solar:pen-bold"}),"Edit"]})})})]})},Te=j.object({quantity:j.number().min(0,{message:"Quantity number is required!"})}),ve=({stock:t,open:s,onClose:o})=>{const i={quantity:(t==null?void 0:t.quantity)||0},n=N({resolver:K(Te),defaultValues:i}),{reset:r,handleSubmit:c,formState:{isSubmitting:m}}=n,g=c(async a=>{try{p({id:t==null?void 0:t.id,payload:a})}catch(u){console.log(u)}});x.useEffect(()=>{t&&r(i)},[t]);const l=B(),{mutate:p}=O({mutationFn:({id:a,payload:u})=>C.patch(T.stock.edit+a,u),onSuccess:async()=>{A.success("Stock Has Been Modified!"),o()},onSettled:async()=>{await l.invalidateQueries({queryKey:["products-stock"]})},onError:()=>{}});return e.jsxs(W,{fullWidth:!0,open:s,onClose:o,children:[e.jsx(J,{children:"Edit Stock"}),e.jsx(S,{}),e.jsxs(M,{methods:n,onSubmit:g,children:[e.jsx(z,{sx:{pt:2},children:e.jsxs(h,{direction:"row",gap:2,children:[e.jsxs(h,{fullWidth:!0,flex:1,spacing:2,direction:"row",alignItems:"center",children:[e.jsx(F,{sx:{width:24,height:24},alt:t==null?void 0:t.name,src:b.site.serverFileHost+(t==null?void 0:t.image)}),e.jsx(f,{component:"span",children:t==null?void 0:t.name})]}),e.jsx(f,{children:e.jsx(w.Text,{type:"number",label:"Enter Quantity",name:"quantity"})})]})}),e.jsx(S,{sx:{pt:1,mt:1}}),e.jsxs(V,{children:[e.jsx(G,{type:"submit",variant:"contained",children:"Save"}),e.jsx(H,{color:"inherit",variant:"outlined",onClick:o,children:"Cancel"})]})]})]})},Ee=j.object({product:j.number().min(1,{message:"Product is required!"}),quantity:j.number().min(1,{message:"Quantity number is required!"})}),De=({productsList:t,open:s,onClose:o})=>{const i={product:null,quantity:1},n=N({resolver:K(Ee),defaultValues:i}),{reset:r,handleSubmit:c,formState:{isSubmitting:m}}=n,g=c(async a=>{try{p(a)}catch(u){console.log(u)}}),l=B(),{mutate:p}=O({mutationFn:a=>C.post(T.stock.create,a),onSuccess:async a=>{A.success("New Stock Has Been Created!"),r(),o()},onSettled:async()=>{await l.invalidateQueries({queryKey:["products-stock"]})},onError:()=>{}});return e.jsxs(W,{fullWidth:!0,open:s,onClose:o,children:[e.jsx(J,{children:"Add Stock"}),e.jsx(S,{}),e.jsxs(M,{methods:n,onSubmit:g,children:[e.jsx(z,{sx:{pt:2},children:e.jsxs(h,{direction:"row",gap:2,children:[e.jsx(w.Select,{name:"product",label:"Product",children:t==null?void 0:t.filter(a=>(a==null?void 0:a.stock)===null).map(a=>e.jsx(R,{value:a==null?void 0:a.id,children:e.jsxs(h,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(F,{sx:{width:24,height:24},alt:a==null?void 0:a.name,src:b.site.serverFileHost+(a==null?void 0:a.image)}),e.jsx(f,{component:"span",children:a==null?void 0:a.name})]})},a==null?void 0:a.id))}),e.jsx(w.Text,{type:"number",label:"Enter Quantity",name:"quantity"})]})}),e.jsx(S,{sx:{pt:1,mt:1}}),e.jsxs(V,{children:[e.jsx(G,{type:"submit",variant:"contained",children:"Save"}),e.jsx(H,{color:"inherit",variant:"outlined",onClick:o,children:"Cancel"})]})]})]})};function we({filters:t,onResetPage:s,options:o}){const i=x.useCallback(n=>{s(),t.setState({name:n.target.value})},[t,s]);return e.jsx(h,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(ye,{sx:{width:420},value:t.state.name,onChange:i,placeholder:"Search Product Name or Stock number...",InputProps:{startAdornment:e.jsx(Pe,{position:"start",children:e.jsx(I,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}const Fe=[{id:"stockId",label:"No.",width:60},{id:"productName",label:"Product Name"},{id:"stock",label:"In Stock",width:200}];function Ie({stocks:t}){const s=he({defaultOrderBy:"planId"}),[o,i]=x.useState(),n=E(),r=E(),c=E(),[m,g]=x.useState(t),l=Z({name:"",status:"all",startDate:null,endDate:null});x.useEffect(()=>{g(t)},[t]);const p=ee(l.state.startDate,l.state.endDate),a=qe({inputData:m,comparator:le(s.order,s.orderBy),filters:l.state,dateError:p}),u=ce(a,s.page,s.rowsPerPage),_=x.useCallback(d=>{i(d),r.onToggle()},[u.length,s,m]),q=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate,$=!a.length&&q||!a.length,y=L({queryKey:["products"],queryFn:async()=>{const{data:d}=await C.get(T.products.list);return d}});return y.isPending||y.isLoading?e.jsx(k,{}):y.isError?e.jsx(Q,{route:P.dashboard.products.root}):e.jsxs(e.Fragment,{children:[e.jsx(te,{maxWidth:"xl",children:e.jsxs(h,{spacing:3,children:[e.jsx(ie,{links:[{name:"Dashboard",href:P.dashboard.root},{name:"Products",href:P.dashboard.product.root},{name:"Product Stock"}]}),e.jsxs(se,{children:[e.jsx(we,{filters:l,onResetPage:s.onResetPage,dateError:p}),q&&e.jsx(Se,{filters:l,totalResults:a.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(f,{sx:{position:"relative"},children:[e.jsx(de,{dense:s.dense,numSelected:s.selected.length,rowCount:a.length,onSelectAllRows:d=>s.onSelectAllRows(d,a.map(v=>v.id)),action:e.jsx(ae,{title:"Delete",children:e.jsx(ne,{color:"primary",onClick:c.onTrue,children:e.jsx(I,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(re,{sx:{minHeight:200},children:e.jsxs(ge,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(je,{order:s.order,orderBy:s.orderBy,headLabel:Fe,rowCount:a.length}),a.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((d,v)=>e.jsx(Ce,{index:s.page*s.rowsPerPage+v+1,row:d,onEditRow:()=>_(d),selected:s.selected.includes(d.id)},d.id)),e.jsxs(be,{children:[e.jsx(me,{height:s.dense?56:76,emptyRows:ue(s.page,s.rowsPerPage,a.length)}),e.jsx(pe,{notFound:$})]})]})})]}),e.jsx(fe,{page:s.page,dense:s.dense,count:a.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})]})}),n.value&&e.jsx(De,{productsList:y.data,open:n.value,onClose:n.onFalse}),e.jsx(ve,{stock:o,open:r.value,onClose:r.onFalse})]})}function qe({inputData:t,comparator:s,filters:o}){const{name:i}=o,n=t.map((r,c)=>[r,c]);return n.sort((r,c)=>{const m=s(r[0],c[0]);return m!==0?m:r[1]-c[1]}),t=n.map(r=>r[0]),i&&(t=t.filter(r=>r.id.toString().toLowerCase().indexOf(i.toLowerCase())!==-1||r.name.toLowerCase().indexOf(i.toLowerCase())!==-1)),t}const Re={title:`Product Stock | Dashboard - ${b.site.name}`};function Ht(){const t=L({queryKey:["products-stock"],queryFn:async()=>{const{data:s}=await C.get(T.products.stock);return s}});return t.isPending||t.isLoading?e.jsx(k,{}):t.isError?e.jsx(Q,{route:P.dashboard.products.root}):e.jsxs(e.Fragment,{children:[e.jsx(oe,{children:e.jsxs("title",{children:[" ",Re.title]})}),e.jsx(Ie,{stocks:t.data})]})}export{Ht as default};
