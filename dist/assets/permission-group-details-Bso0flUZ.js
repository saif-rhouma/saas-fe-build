import{i as w,r as c,de as T,j as e,B as d,e as g,I as D,dn as S,dP as E,S as j,p as h,cV as u,cY as B,dp as P,dm as C,dq as F,dT as L,H as v,C as R}from"./index-9WIYojXz.js";import{u as N,E as U}from"./error-block-DhnojnAQ.js";import{u as k}from"./use-params-D2ubw5Mh.js";import{u as q}from"./useMutation-ZFzLckbx.js";import{C as H}from"./custom-breadcrumbs-DHTIFeqs.js";import{C as I}from"./confirm-dialog-BrEgW9lF.js";import{g as O}from"./utils-MBUcMVfY.js";import{u as A}from"./use-table-D2ieOtgm.js";import{a as Q,b as z,c as K,T as V}from"./table-head-custom-Cbjb5iLb.js";import{T as W}from"./table-pagination-custom-DmLvM2h1.js";import{P as $}from"./permissions-group-table-toolbar-D5UO3NJB.js";import{T as x}from"./TableCell-CbMALV-4.js";import{C as b}from"./CardHeader-CBK6QdHC.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-DyFL-JUF.js";import"./DialogTitle-XreEWkx4.js";import"./Checkbox-DS1rDb6Y.js";import"./TablePagination-DUFtHnjT.js";import"./KeyboardArrowRight-vrz_hNQL.js";import"./LastPage-yC8jxO81.js";import"./Select-Dbda1_Lz.js";import"./Menu-DQZymDEx.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DxJhG4-2.js";import"./FormControlLabel-CQ80V3t9.js";import"./TextField-B5VRxv2z.js";import"./FormControl-i5_L0HW9.js";import"./InputLabel-BsFZyvhX.js";import"./FormLabel-Cdv8FF65.js";import"./FormHelperText-CrDWnCKF.js";import"./InputAdornment-Dy27B7Wv.js";const J=[{id:"idx",label:"#",width:40,align:"center"},{id:"name",label:"Name"},{id:"email",label:"Email"},{id:"action",width:10}],M=({users:t,onDeleteRow:i})=>{const s=A({defaultOrderBy:"orderNumber"}),r=w(),[n,a]=c.useState(),[l,m]=c.useState(t),f=T({name:""});c.useEffect(()=>{m(t)},[t]);const p=Y({inputData:l,comparator:O(s.order,s.orderBy),filters:f.state});return e.jsxs(e.Fragment,{children:[e.jsxs(d,{sx:{position:"relative",borderRadius:1,overflow:"hidden",border:o=>`solid 1px ${o.vars.palette.divider}`},children:[e.jsx($,{filters:f,onResetPage:s.onResetPage}),e.jsxs(Q,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(z,{headLabel:J}),e.jsx(K,{children:p.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((o,y)=>e.jsxs(V,{children:[e.jsxs(x,{align:"center",children:[" ",y+1," "]}),e.jsxs(x,{children:[" ",o==null?void 0:o.firstName," "]}),e.jsxs(x,{children:[" ",o==null?void 0:o.email," "]}),e.jsx(x,{children:e.jsx(g,{sx:{color:"error.main"},onClick:()=>{r.onTrue(),a(o)},children:e.jsx(D,{icon:"solar:trash-bin-trash-bold"})})})]},o==null?void 0:o.id))})]})]}),e.jsx(W,{page:s.page,dense:s.dense,count:p.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage}),e.jsx(I,{open:r.value,onClose:r.onFalse,title:"Delete",content:"Are you sure want to remove user from this group?",action:e.jsx(g,{variant:"contained",color:"error",onClick:()=>{i(n.id),r.onFalse()},children:"Delete"})})]})};function Y({inputData:t,comparator:i,filters:s}){const{name:r}=s,n=t.map((a,l)=>[a,l]);return n.sort((a,l)=>{const m=i(a[0],l[0]);return m!==0?m:a[1]-l[1]}),t=n.map(a=>a[0]),r&&(t=t.filter(a=>a.firstName.toLowerCase().indexOf(r.toLowerCase())!==-1||a.email.toLowerCase().indexOf(r.toLowerCase())!==-1)),t}function _({permissionsGroup:t}){const[i,s]=c.useState(t),r=S(),{mutate:n}=q({mutationFn:a=>P.delete(C.permissionsGroup.deleteUser+a),onSuccess:async({data:a})=>{F.success("Delete success!"),s(a),await r.invalidateQueries({queryKey:["permissions-group",t.id]})},onSettled:async()=>{},onError:()=>{}});return c.useEffect(()=>{s(t)},[t]),e.jsx(E,{children:e.jsxs(j,{spacing:3,children:[e.jsx(H,{links:[{name:"Dashboard",href:h.dashboard.root},{name:"Tools",href:h.dashboard.tools.root},{name:"Permissions Groups",href:h.dashboard.tools.permissions},{name:"Permissions Group Details"}],sx:{mb:{xs:3,md:5}}}),e.jsx(u,{container:!0,children:e.jsx(u,{xs:12,md:12,children:e.jsxs(B,{children:[e.jsx(b,{title:"Details"}),e.jsx(j,{direction:"row",justifyContent:"space-between",sx:{p:3,typography:"body2"},children:e.jsxs(d,{flexDirection:"column",sx:{display:"flex",width:"100%"},children:[e.jsxs(d,{sx:{color:"text.secondary"},children:["Name: ",t==null?void 0:t.name]}),e.jsxs(d,{sx:{color:"text.secondary"},children:["Description: ",t==null?void 0:t.description]}),e.jsxs(d,{sx:{color:"text.secondary"},children:["Permissions: ",t==null?void 0:t.permissions.map(a=>a.name).join(", "),"."]})]})}),e.jsx(b,{title:"Users"}),e.jsx(d,{fullWidth:!0,alignItems:"center",sx:{p:3},children:e.jsx(M,{users:i.staffs,onDeleteRow:n})})]})})})]})})}const X={title:`Permissions Group Details | Dashboard - ${R.site.name}`};function Re(){const{id:t=""}=k(),i=N({queryKey:["permissions-group",t],queryFn:async()=>{const{data:s}=await P.get(C.permissionsGroup.details+t);return s}});return i.isLoading?e.jsx(L,{}):i.isError?e.jsx(U,{route:h.dashboard.tools.root}):e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsxs("title",{children:[" ",X.title]})}),e.jsx(_,{permissionsGroup:i.data})]})}export{Re as default};