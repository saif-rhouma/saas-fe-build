import{r as h,de as b,e2 as w,j as t,B as x,S as u,I as p,ed as j}from"./index-BNST9t3H.js";import{b as P}from"./format-number-DalNf45u.js";import{g as T}from"./utils-MBUcMVfY.js";import{u as C}from"./use-table-DgK1nPu6.js";import{a as I,b as y,c as S,T as A}from"./table-head-custom-Cj6hevi-.js";import{T as B}from"./table-pagination-custom-DoKSyP-T.js";import{T as D}from"./TextField-XhUvK9fJ.js";import{I as R}from"./InputAdornment-CF1A_q0t.js";import{T as l}from"./TableCell-Drz6UoJo.js";const v=[{id:"orderNumber",label:"#",width:40,align:"center"},{id:"name",label:"Product Name"},{id:"rate",label:"Rate",width:200,align:"center"},{id:"totalAmount",label:"Quantity",width:80,align:"center"},{id:"status",label:"Total",width:200,align:"center"}],H=({products:r,defaultRowsPerPage:c})=>{const a=C({defaultOrderBy:"orderId",defaultRowsPerPage:c}),[m,g]=h.useState(r);h.useEffect(()=>{g(r)},[r]);const s=b({name:"",status:"all",startDate:null,endDate:null}),o=w(s.state.startDate,s.state.endDate),i=E({inputData:m,comparator:T(a.order,a.orderBy),filters:s.state,dateError:o});s.state.name||s.state.status!=="all"||s.state.startDate&&s.state.endDate;const d=h.useCallback(e=>{a.onResetPage(),s.setState({name:e.target.value})},[s,a]);return t.jsxs(x,{display:"flex",flexDirection:"column",alignItems:"center",sx:{borderRadius:1,height:1,width:1,overflow:"hidden",border:e=>`solid 1px ${e.vars.palette.divider}`},children:[t.jsx(u,{className:"print-hide",spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:1,width:1},children:t.jsx(D,{value:s.state.name,onChange:d,size:"small",placeholder:"Search product",InputProps:{startAdornment:t.jsx(R,{position:"start",children:t.jsx(p,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),t.jsx(x,{sx:{flex:1,width:1},children:t.jsxs(I,{size:"small",children:[t.jsx(y,{headLabel:v}),t.jsx(S,{children:i.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map((e,n)=>t.jsxs(A,{children:[t.jsxs(l,{align:"center",children:[" ",n+1||e.productId," "]}),t.jsx(l,{children:`${e.product.name}`}),t.jsx(l,{align:"center",children:`${P(e.snapshotProductPrice||e.product.price)}`}),t.jsx(l,{align:"center",children:t.jsx(x,{sx:{fontWeight:"bold"},children:e==null?void 0:e.quantity})}),t.jsx(l,{align:"center",children:`${P(e.snapshotProductPrice*e.quantity)}`})]},`${e.productId}`))})]})}),t.jsx(B,{className:"print-hide",sx:{width:1},page:a.page,count:i.length,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage,rowsPerPageOptions:[]})]})};function E({inputData:r,comparator:c,filters:a,dateError:m}){const{status:g,name:s,startDate:o,endDate:i}=a,d=r.map((e,n)=>[e,n]);return d.sort((e,n)=>{const f=c(e[0],n[0]);return f!==0?f:e[1]-n[1]}),r=d.map(e=>e[0]),s&&(r=r.filter(e=>{var n;return e.id.toString().toLowerCase().indexOf(s.toLowerCase())!==-1||((n=e==null?void 0:e.product)==null?void 0:n.name.toLowerCase().indexOf(s.toLowerCase()))!==-1})),m||o&&i&&(r=r.filter(e=>j(e.createdAt,o,i))),r}export{H as Q};
