import{i as w,r as c,dd as T,j as e,B as d,e as g,I as D,dm as S,dP as B,S as j,p as h,ay as u,aB as E,dn as P,dl as C,dp as F,dT as L,H as v,C as R}from"./index-Blkmi4zg.js";import{u as N,E as U}from"./error-block-j3VOggr8.js";import{u as k}from"./use-params-BoIpfAok.js";import{u as H}from"./useMutation-Bh-jDPxS.js";import{C as I}from"./custom-breadcrumbs-hNvYebPU.js";import{C as q}from"./confirm-dialog-Dk6cmFXG.js";import{g as O}from"./utils-MBUcMVfY.js";import{u as A}from"./use-table-6Wdiw2DX.js";import{a as Q,b as z,c as K,T as W}from"./table-head-custom-C3e5Ny4W.js";import{T as $}from"./table-pagination-custom-CfXtpvNX.js";import{P as J}from"./permissions-group-table-toolbar-Cu8ME1IU.js";import{T as x}from"./TableCell-gHO2nfBt.js";import{C as b}from"./CardHeader-BQ8Ut3jY.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./DialogContent-C-Pa2r_f.js";import"./DialogTitle-Cu0erW6v.js";import"./Checkbox-frxSvImW.js";import"./TablePagination-DlVs_VCm.js";import"./KeyboardArrowRight-D6gv1H8C.js";import"./LastPage-f-JQYF8b.js";import"./Select-Dsko4AZ7.js";import"./Menu-Cys168vL.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DaiJVK9f.js";import"./FormControlLabel-DoRBZL9Z.js";import"./TextField-ClHFnGLS.js";import"./FormControl-Cq1ehgrJ.js";import"./InputLabel-BBPKF53u.js";import"./FormLabel-sbLiSHbj.js";import"./FormHelperText-qaIx3Z7I.js";import"./InputAdornment-Mhf8ESbr.js";const M=[{id:"idx",label:"#",width:40,align:"center"},{id:"name",label:"Name"},{id:"email",label:"Email"},{id:"action",width:10}],V=({users:t,onDeleteRow:i})=>{const s=A({defaultOrderBy:"orderNumber"}),r=w(),[n,a]=c.useState(),[l,m]=c.useState(t),f=T({name:""});c.useEffect(()=>{m(t)},[t]);const p=_({inputData:l,comparator:O(s.order,s.orderBy),filters:f.state});return e.jsxs(e.Fragment,{children:[e.jsxs(d,{sx:{position:"relative",borderRadius:1,overflow:"hidden",border:o=>`solid 1px ${o.vars.palette.divider}`},children:[e.jsx(J,{filters:f,onResetPage:s.onResetPage}),e.jsxs(Q,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(z,{headLabel:M}),e.jsx(K,{children:p.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((o,y)=>e.jsxs(W,{children:[e.jsxs(x,{align:"center",children:[" ",y+1," "]}),e.jsxs(x,{children:[" ",o==null?void 0:o.firstName," "]}),e.jsxs(x,{children:[" ",o==null?void 0:o.email," "]}),e.jsx(x,{children:e.jsx(g,{sx:{color:"error.main"},onClick:()=>{r.onTrue(),a(o)},children:e.jsx(D,{icon:"solar:trash-bin-trash-bold"})})})]},o==null?void 0:o.id))})]})]}),e.jsx($,{page:s.page,dense:s.dense,count:p.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onChangeDense:s.onChangeDense,onRowsPerPageChange:s.onChangeRowsPerPage}),e.jsx(q,{open:r.value,onClose:r.onFalse,title:"Delete",content:"Are you sure want to remove user from this group?",action:e.jsx(g,{variant:"contained",color:"error",onClick:()=>{i(n.id),r.onFalse()},children:"Delete"})})]})};function _({inputData:t,comparator:i,filters:s}){const{name:r}=s,n=t.map((a,l)=>[a,l]);return n.sort((a,l)=>{const m=i(a[0],l[0]);return m!==0?m:a[1]-l[1]}),t=n.map(a=>a[0]),r&&(t=t.filter(a=>a.firstName.toLowerCase().indexOf(r.toLowerCase())!==-1||a.email.toLowerCase().indexOf(r.toLowerCase())!==-1)),t}function X({permissionsGroup:t}){const[i,s]=c.useState(t),r=S(),{mutate:n}=H({mutationFn:a=>P.delete(C.permissionsGroup.deleteUser+a),onSuccess:async({data:a})=>{F.success("Delete success!"),s(a),await r.invalidateQueries({queryKey:["permissions-group",t.id]})},onSettled:async()=>{},onError:()=>{}});return c.useEffect(()=>{s(t)},[t]),e.jsx(B,{children:e.jsxs(j,{spacing:3,children:[e.jsx(I,{links:[{name:"Dashboard",href:h.dashboard.root},{name:"Tools",href:h.dashboard.tools.root},{name:"Permissions Groups",href:h.dashboard.tools.permissions},{name:"Permissions Group Details"}],sx:{mb:{xs:3,md:5}}}),e.jsx(u,{container:!0,children:e.jsx(u,{xs:12,md:12,children:e.jsxs(E,{children:[e.jsx(b,{title:"Details"}),e.jsx(j,{direction:"row",justifyContent:"space-between",sx:{p:3,typography:"body2"},children:e.jsxs(d,{flexDirection:"column",sx:{display:"flex",width:"100%"},children:[e.jsxs(d,{sx:{color:"text.secondary"},children:["Name: ",t==null?void 0:t.name]}),e.jsxs(d,{sx:{color:"text.secondary"},children:["Description: ",t==null?void 0:t.description]}),e.jsxs(d,{sx:{color:"text.secondary"},children:["Permissions: ",t==null?void 0:t.permissions.map(a=>a.name).join(", "),"."]})]})}),e.jsx(b,{title:"Users"}),e.jsx(d,{fullWidth:!0,alignItems:"center",sx:{p:3},children:e.jsx(V,{users:i.staffs,onDeleteRow:n})})]})})})]})})}const Y={title:`Permissions Group Details | Dashboard - ${R.site.name}`};function Re(){const{id:t=""}=k(),i=N({queryKey:["permissions-group",t],queryFn:async()=>{const{data:s}=await P.get(C.permissionsGroup.details+t);return s}});return i.isLoading?e.jsx(L,{}):i.isError?e.jsx(U,{route:h.dashboard.tools.root}):e.jsxs(e.Fragment,{children:[e.jsx(v,{children:e.jsxs("title",{children:[" ",Y.title]})}),e.jsx(X,{permissionsGroup:i.data})]})}export{Re as default};
