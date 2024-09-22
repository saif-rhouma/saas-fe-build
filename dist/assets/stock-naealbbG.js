import{bG as X,j as e,S as h,A as D,C as T,B as f,y as R,I as y,dz as Y,bI as Z,bJ as B,dL as k,dM as v,dK as w,dN as A,D as C,e as I,r as p,w as E,dC as ee,eq as te,ef as L,p as P,eb as se,aF as ne,dw as ae,dB as re,H as oe}from"./index-DLJImauo.js";import{u as H,E as N}from"./error-block-CpNyIBSO.js";import{C as ie}from"./custom-breadcrumbs-B-49wW2q.js";import{u as le,g as ce,r as de,T as me,a as ue,e as he}from"./table-selected-action-G55M8q3B.js";import{T as xe}from"./table-no-data-BuIBt0E2.js";import{T as pe,a as ge,b as je,c as be}from"./table-head-custom-D67vLreu.js";import{T as fe}from"./table-pagination-custom-DVAvwLQu.js";import{T as S}from"./TableCell-BVBgA4hr.js";import{z as b,u as Q,t as K,F as M}from"./form-provider-CFcdla9F.js";import{u as O}from"./useMutation-7HTcUz2p.js";import{F}from"./fields-BliOQ6O0.js";import"./image-BZDZbX9M.js";import"./editor-Cv_jl3Bs.js";import{a as W,b as z,D as V}from"./DialogContent-DDfVnIX5.js";import{D as G}from"./DialogTitle-BO1ue4do.js";import{L as J}from"./LoadingButton-0fR1pVna.js";import{T as ye}from"./TextField-Dn-4Yx6H.js";import{I as Se}from"./InputAdornment-DKC0KPnD.js";import{P as Pe}from"./product-table-filters-result-Dmt7h2X-.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-iCj-brcW.js";import"./empty-content-C2NUDuUr.js";import"./TablePagination-DOC7uPQD.js";import"./LastPage-DlgH9h-y.js";import"./Select-C24IVDgk.js";import"./Menu-u9Fg2yBB.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DlzL5OFi.js";import"./FormControlLabel-C_QV2Cmj.js";import"./index-CVIDvc2K.js";import"./countries-DSLisFCy.js";import"./FormHelperText-kKfXHIoW.js";import"./Rating-FzotwsHz.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-0xmJrVsO.js";import"./FormControl-CkwXYy0A.js";import"./FormLabel-CL79af0c.js";import"./RadioGroup-C3COSxFX.js";import"./FormGroup-vDyIqZ9l.js";import"./Autocomplete-BlHa76y8.js";import"./Chip-B_i8-SK5.js";import"./country-select-CN1OaNL9.js";import"./InputLabel-CEebhHey.js";import"./upload-avatar-6dytMmax.js";import"./format-number-Be330NDU.js";import"./DatePicker-D6XSSTkA.js";import"./ListItem-BofKFpgJ.js";import"./MobileDateTimePicker-CdN8K0hT.js";import"./index-B2cAHtCt.js";import"./CircularProgress-DCo-b5qy.js";import"./filters-result-qqMNs2nn.js";const Ce=({row:t,selected:s,onEditRow:i})=>{const a=X(),o=e.jsxs(pe,{hover:!0,selected:s,children:[e.jsx(S,{children:t==null?void 0:t.id}),e.jsx(S,{children:e.jsxs(h,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(D,{alt:t==null?void 0:t.name,src:T.site.serverFileHost+(t==null?void 0:t.image)}),e.jsx(f,{component:"span",children:t==null?void 0:t.name})]})}),e.jsx(S,{children:t.quantity}),e.jsx(S,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(R,{color:a.open?"inherit":"default",onClick:a.onOpen,children:e.jsx(y,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[o,e.jsx(Y,{open:a.open,anchorEl:a.anchorEl,onClose:a.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsx(Z,{children:e.jsxs(B,{onClick:()=>{i(t.id),a.onClose()},children:[e.jsx(y,{icon:"solar:pen-bold"}),"Edit"]})})})]})},Te=b.object({product:b.number().min(1,{message:"Product is required!"}),quantity:b.number().min(1,{message:"Quantity number is required!"})}),ve=({productsList:t,open:s,onClose:i})=>{const a={product:null,quantity:1},o=Q({resolver:K(Te),defaultValues:a}),{reset:r,handleSubmit:d,formState:{isSubmitting:m}}=o,g=d(async n=>{try{x(n)}catch(u){console.log(u)}}),l=k(),{mutate:x}=O({mutationFn:n=>v.post(w.stock.create,n),onSuccess:async n=>{A.success("New Stock Has Been Created!"),r(),i()},onSettled:async()=>{await l.invalidateQueries({queryKey:["products-stock"]})},onError:()=>{}});return e.jsxs(W,{fullWidth:!0,open:s,onClose:i,children:[e.jsx(G,{children:"Add Stock"}),e.jsx(C,{}),e.jsxs(M,{methods:o,onSubmit:g,children:[e.jsx(z,{sx:{pt:2},children:e.jsxs(h,{direction:"row",gap:2,children:[e.jsx(F.Select,{name:"product",label:"Product",children:t==null?void 0:t.filter(n=>(n==null?void 0:n.stock)===null).map(n=>e.jsx(B,{value:n==null?void 0:n.id,children:e.jsxs(h,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(D,{sx:{width:24,height:24},alt:n==null?void 0:n.name,src:T.site.serverFileHost+(n==null?void 0:n.image)}),e.jsx(f,{component:"span",children:n==null?void 0:n.name})]})},n==null?void 0:n.id))}),e.jsx(F.Text,{type:"number",label:"Enter Quantity",name:"quantity"})]})}),e.jsx(C,{sx:{pt:1,mt:1}}),e.jsxs(V,{children:[e.jsx(J,{type:"submit",variant:"contained",children:"Save"}),e.jsx(I,{color:"inherit",variant:"outlined",onClick:i,children:"Cancel"})]})]})]})};function we({filters:t,onResetPage:s,options:i}){const a=p.useCallback(o=>{s(),t.setState({name:o.target.value})},[t,s]);return e.jsx(h,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(ye,{sx:{width:420},value:t.state.name,onChange:a,placeholder:"Search Product Name or Stock number...",InputProps:{startAdornment:e.jsx(Se,{position:"start",children:e.jsx(y,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}const Ee=b.object({quantity:b.number().min(1,{message:"Quantity number is required!"})}),Fe=({stock:t,open:s,onClose:i})=>{const a={quantity:(t==null?void 0:t.quantity)||1},o=Q({resolver:K(Ee),defaultValues:a}),{reset:r,handleSubmit:d,formState:{isSubmitting:m}}=o,g=d(async n=>{try{x({id:t==null?void 0:t.id,payload:n})}catch(u){console.log(u)}});p.useEffect(()=>{t&&r(a)},[t]);const l=k(),{mutate:x}=O({mutationFn:({id:n,payload:u})=>v.patch(w.stock.edit+n,u),onSuccess:async()=>{A.success("Stock Has Been Modified!"),r(),i()},onSettled:async()=>{await l.invalidateQueries({queryKey:["products-stock"]})},onError:()=>{}});return e.jsxs(W,{fullWidth:!0,open:s,onClose:i,children:[e.jsx(G,{children:"Edit Stock"}),e.jsx(C,{}),e.jsxs(M,{methods:o,onSubmit:g,children:[e.jsx(z,{sx:{pt:2},children:e.jsxs(h,{direction:"row",gap:2,children:[e.jsxs(h,{fullWidth:!0,flex:1,spacing:2,direction:"row",alignItems:"center",children:[e.jsx(D,{sx:{width:24,height:24},alt:t==null?void 0:t.name,src:T.site.serverFileHost+(t==null?void 0:t.image)}),e.jsx(f,{component:"span",children:t==null?void 0:t.name})]}),e.jsx(f,{children:e.jsx(F.Text,{type:"number",label:"Enter Quantity",name:"quantity"})})]})}),e.jsx(C,{sx:{pt:1,mt:1}}),e.jsxs(V,{children:[e.jsx(J,{type:"submit",variant:"contained",children:"Save"}),e.jsx(I,{color:"inherit",variant:"outlined",onClick:i,children:"Cancel"})]})]})]})},De=[{id:"stockId",label:"No.",width:60},{id:"productName",label:"Product Name"},{id:"stock",label:"In Stock",width:200},{id:"",width:40}];function Ie({stocks:t}){const s=le({defaultOrderBy:"planId"}),[i,a]=p.useState(),o=E(),r=E(),d=E(),[m,g]=p.useState(t),l=ee({name:"",status:"all",startDate:null,endDate:null});p.useEffect(()=>{g(t)},[t]);const x=te(l.state.startDate,l.state.endDate),n=qe({inputData:m,comparator:ce(s.order,s.orderBy),filters:l.state,dateError:x}),u=de(n,s.page,s.rowsPerPage),_=p.useCallback(c=>{a(c),r.onToggle()},[u.length,s,m]),q=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate,$=!n.length&&q||!n.length,j=H({queryKey:["products"],queryFn:async()=>{const{data:c}=await v.get(w.products.list);return c}});return j.isPending||j.isLoading?e.jsx(L,{}):j.isError?e.jsx(N,{route:P.dashboard.products.root}):e.jsxs(e.Fragment,{children:[e.jsx(se,{maxWidth:"xl",children:e.jsxs(h,{spacing:3,children:[e.jsx(ie,{links:[{name:"Dashboard",href:P.dashboard.root},{name:"Products",href:P.dashboard.product.root},{name:"Product Stock"}],action:j.data.filter(c=>c.stock===null).length?e.jsx(I,{onClick:()=>o.onToggle(),variant:"contained",startIcon:e.jsx(y,{icon:"mingcute:add-line"}),children:"Add Stock"}):""}),e.jsxs(ne,{children:[e.jsx(we,{filters:l,onResetPage:s.onResetPage,dateError:x}),q&&e.jsx(Pe,{filters:l,totalResults:n.length,onResetPage:s.onResetPage,sx:{p:2.5,pt:0}}),e.jsxs(f,{sx:{position:"relative"},children:[e.jsx(me,{dense:s.dense,numSelected:s.selected.length,rowCount:n.length,onSelectAllRows:c=>s.onSelectAllRows(c,n.map(U=>U.id)),action:e.jsx(ae,{title:"Delete",children:e.jsx(R,{color:"primary",onClick:d.onTrue,children:e.jsx(y,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(re,{sx:{minHeight:200},children:e.jsxs(ge,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(je,{order:s.order,orderBy:s.orderBy,headLabel:De,rowCount:n.length}),n.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(c=>e.jsx(Ce,{row:c,onEditRow:()=>_(c),selected:s.selected.includes(c.id)},c.id)),e.jsxs(be,{children:[e.jsx(ue,{height:s.dense?56:76,emptyRows:he(s.page,s.rowsPerPage,n.length)}),e.jsx(xe,{notFound:$})]})]})})]}),e.jsx(fe,{page:s.page,dense:s.dense,count:n.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})]})}),o.value&&e.jsx(ve,{productsList:j.data,open:o.value,onClose:o.onFalse}),e.jsx(Fe,{stock:i,open:r.value,onClose:r.onFalse})]})}function qe({inputData:t,comparator:s,filters:i}){const{name:a}=i,o=t.map((r,d)=>[r,d]);return o.sort((r,d)=>{const m=s(r[0],d[0]);return m!==0?m:r[1]-d[1]}),t=o.map(r=>r[0]),a&&(t=t.filter(r=>r.id.toString().toLowerCase().indexOf(a.toLowerCase())!==-1||r.name.toLowerCase().indexOf(a.toLowerCase())!==-1)),t}const Re={title:`Product Stock | Dashboard - ${T.site.name}`};function Bt(){const t=H({queryKey:["products-stock"],queryFn:async()=>{const{data:s}=await v.get(w.products.stock);return s}});return t.isPending||t.isLoading?e.jsx(L,{}):t.isError?e.jsx(N,{route:P.dashboard.products.root}):e.jsxs(e.Fragment,{children:[e.jsx(oe,{children:e.jsxs("title",{children:[" ",Re.title]})}),e.jsx(Ie,{stocks:t.data})]})}export{Bt as default};
