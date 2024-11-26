import{i as v,aP as U,j as e,S as A,A as J,C as q,B as _,l as Q,I as C,db as $,aR as X,e3 as T,aS as k,e as G,r as u,dp as D,dm as S,am as M,n as Z,T as ee,de as te,e2 as se,dn as oe,g as ae,p as F,dP as ne,cV as O,cY as re,c9 as ie,dd as le,ed as ce,dq as N,dT as de,H as me}from"./index-9WIYojXz.js";import{u as pe,E as ue}from"./error-block-DhnojnAQ.js";import{u as R}from"./useMutation-ZFzLckbx.js";import{C as he}from"./custom-breadcrumbs-DHTIFeqs.js";import{P as w}from"./permission-access-controller-C4QUhktl.js";import{g as ge,r as xe,e as je}from"./utils-MBUcMVfY.js";import{u as fe}from"./use-table-D2ieOtgm.js";import{T as Ce}from"./table-no-data-B65M60hl.js";import{T as be}from"./table-empty-rows-qR7SV3Wl.js";import{T as Pe,a as ye,b as Te,c as De}from"./table-head-custom-Cbjb5iLb.js";import{T as Se}from"./table-selected-action-BUKRs8Fl.js";import{T as we}from"./table-pagination-custom-DmLvM2h1.js";import{C as Ee}from"./confirm-dialog-BrEgW9lF.js";import{T as y}from"./TableCell-CbMALV-4.js";import{z as H,u as ve,t as Fe,a as Re,F as Y}from"./form-provider-DoDHQ7Pw.js";import{b as Ae}from"./upload-avatar-rQsZa8Xt.js";import"./image-CDF1XP5G.js";import"./editor-BKzPrEd2.js";import{a as Ie,b as Be,D as Le}from"./DialogContent-DyFL-JUF.js";import{D as ke}from"./DialogTitle-XreEWkx4.js";import{L as Oe}from"./LoadingButton-wCda_GsL.js";import{T as Ne}from"./TextField-B5VRxv2z.js";import{I as He}from"./InputAdornment-Dy27B7Wv.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-Du7nSOyy.js";import"./Checkbox-DS1rDb6Y.js";import"./TablePagination-DUFtHnjT.js";import"./KeyboardArrowRight-vrz_hNQL.js";import"./LastPage-yC8jxO81.js";import"./Select-Dbda1_Lz.js";import"./Menu-DQZymDEx.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DxJhG4-2.js";import"./FormControlLabel-CQ80V3t9.js";import"./FormHelperText-CrDWnCKF.js";import"./Rating-BAJTeGkk.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-26tiyZvR.js";import"./FormControl-i5_L0HW9.js";import"./FormLabel-Cdv8FF65.js";import"./RadioGroup-DVJYKuuN.js";import"./FormGroup-ecogmTvT.js";import"./utils-D4ZVlgLI.js";import"./index-B6xKEW1L.js";import"./countries-DSLisFCy.js";import"./Autocomplete-D7aQSa71.js";import"./Chip-D0QOLpKJ.js";import"./country-select-CYyCXO2U.js";import"./InputLabel-BsFZyvhX.js";import"./DatePicker-C3QrlNIh.js";import"./ListItem-gqkY54PP.js";import"./MobileDateTimePicker-CGGrjhgG.js";import"./Tabs-jmmmMz6a.js";import"./format-number-ThVrp-kn.js";import"./index-h44KeYk_.js";import"./CircularProgress-CbumJeXP.js";const qe=({row:t,index:l,selected:c,onDeleteRow:r,onEditRow:h,onViewRow:m})=>{const s=v(),n=U(),x=e.jsxs(Pe,{hover:!0,selected:c,children:[e.jsx(y,{children:l||(t==null?void 0:t.id)}),e.jsx(y,{children:e.jsxs(A,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(J,{alt:t==null?void 0:t.name,src:q.site.serverFileHost+((t==null?void 0:t.image)||q.site.defaultImgPlaceHolder)}),e.jsx(_,{component:"span",children:t==null?void 0:t.name})]})}),e.jsx(y,{children:t.description}),e.jsx(y,{children:t.products.length}),e.jsx(y,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:e.jsx(Q,{color:n.open?"inherit":"default",onClick:n.onOpen,children:e.jsx(C,{icon:"eva:more-vertical-fill"})})})]});return e.jsxs(e.Fragment,{children:[x,e.jsx($,{open:n.open,anchorEl:n.anchorEl,onClose:n.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(X,{children:[e.jsx(w,{permission:T.VIEW_CATEGORY,children:e.jsxs(k,{onClick:()=>{m(),n.onClose()},children:[e.jsx(C,{icon:"solar:eye-bold"}),"View"]})}),e.jsx(w,{permission:T.EDIT_CATEGORY,children:e.jsxs(k,{onClick:()=>{h(t.id),n.onClose()},children:[e.jsx(C,{icon:"solar:pen-bold"}),"Edit"]})}),e.jsx(w,{permission:T.DELETE_CATEGORY,children:e.jsxs(k,{onClick:()=>{s.onTrue(),n.onClose()},sx:{color:"error.main"},children:[e.jsx(C,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})})]})}),e.jsx(Ee,{open:s.value,onClose:s.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(G,{variant:"contained",color:"error",onClick:r,children:"Delete"})})]})},Ge=H.object({name:H.string().min(1,{message:"Name is required!"}),description:H.string()}),W=({productCategory:t,open:l,onClose:c,handler:r})=>{const h={name:(t==null?void 0:t.name)||"",description:(t==null?void 0:t.description)||"",image:t==null?void 0:t.image},m=u.useRef(t),[s,n]=u.useState(),x=u.useCallback(p=>{const i=p[0];n(()=>i)},[]),a=()=>{n(null)},j={headers:{"content-type":"multipart/form-data"}},{mutate:d}=R({mutationFn:p=>D.post(S.files.upload,p,j),onSuccess:async({data:p})=>{const{name:i}=p;if(i){const{current:g}=m;g.image=i,t?await r({id:t.id,payload:g}):await r(g)}return p},onSettled:async()=>{n(null),m.current={}},onError:p=>{console.log(p)}});u.useEffect(()=>{t&&P(h)},[t]);const[b,I]=u.useState(""),E=ve({resolver:Fe(Ge),defaultValues:h}),{reset:P,handleSubmit:B,formState:{isSubmitting:V}}=E,L=B(async p=>{try{const i={...p};if(s){m.current={...i};const g=new FormData;g.append("file",s),g.append("category","Category"),await d(g)}else t?await r({id:t.id,payload:i}):await r(i);P()}catch(i){console.log(i),I(i instanceof Error?i.message:i)}});return e.jsxs(Ie,{fullWidth:!0,open:l,onClose:c,children:[e.jsx(ke,{children:"Add Category"}),e.jsx(M,{}),!!b&&e.jsx(Z,{severity:"error",sx:{mb:3},children:b}),e.jsxs(Re,{methods:E,onSubmit:L,children:[e.jsxs(Be,{children:[e.jsxs(A,{spacing:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(1, 1fr)",lg:"repeat(1, 1fr)"},children:[e.jsx(Y.Text,{fullWidth:!0,label:"Category Name",name:"name",sx:{mt:2}}),e.jsx(Y.Text,{label:"Description",name:"description",multiline:!0,rows:3,inputProps:{maxLength:250},sx:{mt:2}})]}),e.jsxs(A,{spacing:1.5,sx:{mt:2},children:[e.jsx(ee,{variant:"subtitle2",children:"Attachments"}),e.jsx(Ae,{value:s,onDrop:x,onDelete:a})]})]}),e.jsx(M,{sx:{pt:1,mt:1}}),e.jsxs(Le,{children:[e.jsx(Oe,{type:"submit",variant:"contained",children:t?"Save Changes":"Save"}),e.jsx(G,{color:"inherit",variant:"outlined",onClick:c,children:"Cancel"})]})]})]})},Ve=({category:t,open:l,onClose:c,handler:r})=>e.jsx(W,{productCategory:t,open:l,onClose:c,handler:r});function Me({filters:t,onResetPage:l,options:c}){const r=u.useCallback(h=>{l(),t.setState({name:h.target.value})},[t,l]);return e.jsx(A,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Ne,{sx:{width:420},value:t.state.name,onChange:r,placeholder:"Search by Category Name",InputProps:{startAdornment:e.jsx(He,{position:"start",children:e.jsx(C,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}const Ye=[{id:"id",label:"No.",width:80},{id:"name",label:"Category Name",width:300},{id:"desc",label:"Description"},{id:"status",label:"Product Count",width:200},{id:"",width:88}],_e=({categories:t})=>{const l=v(),c=v(),r=v(),[h,m]=u.useState(),s=fe({defaultOrderBy:"planId"}),[n,x]=u.useState(t),a=te({name:"",status:"all",startDate:null,endDate:null});u.useEffect(()=>{x(t)},[t]);const j=se(a.state.startDate,a.state.endDate),d=Qe({inputData:n,comparator:ge(s.order,s.orderBy),filters:a.state,dateError:j}),b=xe(d,s.page,s.rowsPerPage),I=!!a.state.name||a.state.status!=="all"||!!a.state.startDate&&!!a.state.endDate,E=!d.length&&I||!d.length,P=oe(),{mutate:B}=R({mutationFn:o=>D.delete(S.productCategories.delete+o),onSuccess:async o=>{const f=n.filter(z=>z.id!==o);N.success("Delete success!"),x(f),s.onUpdatePageDeleteRow(b.length),await P.invalidateQueries({queryKey:["product-categories"]})},onError:o=>{console.log(o)}}),V=u.useCallback(o=>{B(o)},[b.length,s,n]),L=u.useCallback(o=>{m(o),r.onToggle()},[b.length,s,n]),{mutate:p}=R({mutationFn:o=>D.post(S.productCategories.create,o),onSuccess:async()=>{N.success("New Category Has Been Created!"),await P.invalidateQueries({queryKey:["product-categories"]})},onSettled:async()=>{c.onFalse()},onError:o=>{console.log(o)}}),{mutate:i}=R({mutationFn:({id:o,payload:f})=>D.patch(S.productCategories.edit+o,f),onSuccess:async()=>{N.success("Category Has Been Modified!"),await P.invalidateQueries({queryKey:["product-categories"]})},onSettled:async()=>{r.onFalse()},onError:o=>{console.log(o)}}),g=ae(),K=u.useCallback(o=>{g.push(F.dashboard.product.categoryDetails(o))},[g]);return e.jsxs(e.Fragment,{children:[e.jsx(ne,{maxWidth:"xl",children:e.jsxs(O,{container:!0,spacing:3,children:[e.jsx(O,{xs:12,md:12,children:e.jsx(he,{links:[{name:"Dashboard",href:F.dashboard.root},{name:"Product",href:F.dashboard.plan.root},{name:"Categories List"}],action:e.jsx(w,{permission:T.ADD_CATEGORY,children:e.jsx(G,{onClick:()=>c.onToggle(),variant:"contained",startIcon:e.jsx(C,{icon:"mingcute:add-line"}),children:"Add New Category"})})})}),e.jsx(O,{xs:12,md:12,children:e.jsx(w,{permission:T.CATEGORY_LIST,children:e.jsxs(re,{children:[e.jsx(Me,{filters:a,onResetPage:s.onResetPage,dateError:j}),e.jsxs(_,{sx:{position:"relative"},children:[e.jsx(Se,{dense:s.dense,numSelected:s.selected.length,rowCount:d.length,onSelectAllRows:o=>s.onSelectAllRows(o,d.map(f=>f.id)),action:e.jsx(ie,{title:"Delete",children:e.jsx(Q,{color:"primary",onClick:l.onTrue,children:e.jsx(C,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(le,{sx:{minHeight:444},children:e.jsxs(ye,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Te,{order:s.order,orderBy:s.orderBy,headLabel:Ye,rowCount:d.length,numSelected:s.selected.length,onSort:s.onSort}),e.jsxs(De,{children:[d.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((o,f)=>e.jsx(qe,{row:o,index:s.page*s.rowsPerPage+f+1,selected:s.selected.includes(o.id),onEditRow:()=>L(o),onViewRow:()=>K(o.id),onDeleteRow:()=>V(o.id)},o.id)),e.jsx(be,{height:s.dense?56:76,emptyRows:je(s.page,s.rowsPerPage,d.length)}),e.jsx(Ce,{notFound:E})]})]})})]}),e.jsx(we,{page:s.page,dense:s.dense,count:d.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage})]})})})]})}),e.jsx(W,{handler:p,open:c.value,onClose:c.onFalse}),e.jsx(Ve,{handler:i,open:r.value,onClose:r.onFalse,category:h})]})};function Qe({inputData:t,comparator:l,filters:c,dateError:r}){const{status:h,name:m,startDate:s,endDate:n}=c,x=t.map((a,j)=>[a,j]);return x.sort((a,j)=>{const d=l(a[0],j[0]);return d!==0?d:a[1]-j[1]}),t=x.map(a=>a[0]),m&&(t=t.filter(a=>a.id.toString().toLowerCase().indexOf(m.toLowerCase())!==-1||a.name.toLowerCase().indexOf(m.toLowerCase())!==-1||a.description.toLowerCase().indexOf(m.toLowerCase())!==-1)),h!=="all"&&(t=t.filter(a=>a.status===h)),r||s&&n&&(t=t.filter(a=>ce(a.createdAt,s,n))),t}const We={title:`Product Addons | Dashboard - ${q.site.name}`};function Xt(){const t=pe({queryKey:["product-categories"],queryFn:async()=>{const{data:l}=await D.get(S.productCategories.list);return l}});return t.isPending||t.isLoading?e.jsx(de,{}):t.isError?e.jsx(ue,{route:F.dashboard.product.root}):e.jsxs(e.Fragment,{children:[e.jsx(me,{children:e.jsxs("title",{children:[" ",We.title]})}),e.jsx(_e,{categories:t.data})]})}export{Xt as default};