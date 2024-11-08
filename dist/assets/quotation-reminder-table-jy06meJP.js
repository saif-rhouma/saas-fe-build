import{r as m,de as C,ed as T,j as t,B as w,S as u,I as P,aS as j,d0 as B,d7 as p,ee as v,aL as z,A as N,C as H,ei as b}from"./index-CmdkfqKS.js";import{g as y,r as Q,e as G}from"./utils-MBUcMVfY.js";import{u as S}from"./use-table-DaVDFMZu.js";import{a as D,b as I,c as L,T as R}from"./table-head-custom-qQqo0YC1.js";import{T as A}from"./table-pagination-custom-CoMnabQh.js";import{T as O}from"./TextField-BjR7_G8v.js";import{I as $}from"./InputAdornment-BQntN4yz.js";import{S as _}from"./Select-wqZ46ZQV.js";import{T as x}from"./TableCell-BX__SUo1.js";import{b as E}from"./format-number-CpJwq28e.js";import{A as q}from"./AvatarGroup-DbZ4mLlG.js";import{T as M}from"./table-empty-rows-Cg1jP0fQ.js";const W=[{id:"orderNumber",label:"#",width:40,align:"center"},{id:"name",label:"Topic",width:400},{id:"rate",label:"Date",width:200},{id:"totalAmount",label:"Status"},{id:"status",label:"Priority"}],de=({tickets:s})=>{const a=S({defaultOrderBy:"orderId",defaultRowsPerPage:5}),[n,g]=m.useState(s),r=C({name:"",status:"all",startDate:null,endDate:null});m.useEffect(()=>{g(s)},[s]);const l=T(r.state.startDate,r.state.endDate),i=J({inputData:n,comparator:y(a.order,a.orderBy),filters:r.state,dateError:l});Q(i,a.page,a.rowsPerPage);const c=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate;!i.length&&c||i.length;const[h,e]=m.useState("all"),o=m.useCallback(d=>{a.onResetPage(),r.setState({name:d.target.value})},[r,a]),f=m.useCallback(d=>{a.onResetPage(),r.setState({status:d.target.value}),e(d.target.value)},[r,a]);return t.jsxs(w,{display:"flex",flexDirection:"column",alignItems:"center",sx:{borderRadius:1,height:1,width:1,overflow:"hidden",border:d=>`solid 1px ${d.vars.palette.divider}`},children:[t.jsxs(u,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:1,width:1},children:[t.jsx(O,{value:r.state.name,onChange:o,size:"small",placeholder:"Search ticket",InputProps:{startAdornment:t.jsx($,{position:"start",children:t.jsx(P,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),t.jsxs(_,{size:"small",sx:{width:200,textTransform:"capitalize"},value:h,onChange:f,children:[t.jsx(j,{value:"all",children:"All Tickets"}),t.jsx(j,{value:"Open",children:"Open Tickets"}),t.jsx(j,{value:"Closed",children:"Close Tickets"})]})]}),t.jsx(w,{sx:{flex:1,width:1},children:t.jsxs(D,{size:"medium",children:[t.jsx(I,{headLabel:W}),t.jsx(L,{children:i.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map((d,F)=>t.jsxs(R,{children:[t.jsxs(x,{align:"center",children:[" ",F+1||d.id," "]}),t.jsx(x,{children:d.topic}),t.jsx(x,{children:B(d.createTime)}),t.jsx(x,{children:t.jsx(p,{variant:"soft",color:d.status==="Open"&&"info"||d.status==="Closed"&&"default"||"default",children:d.status})}),t.jsx(x,{children:t.jsx(p,{variant:"soft",color:d.priority==="Low"&&"success"||d.priority==="Medium"&&"warning"||d.priority==="Hight"&&"error"||"default",children:d.priority})})]},`${d.id}`))})]})}),t.jsx(A,{sx:{width:1},page:a.page,dense:!0,count:i.length,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})};function J({inputData:s,comparator:a,filters:n,dateError:g}){const{status:r,name:l,startDate:i,endDate:c}=n,h=s.map((e,o)=>[e,o]);return h.sort((e,o)=>{const f=a(e[0],o[0]);return f!==0?f:e[1]-o[1]}),s=h.map(e=>e[0]),l&&(s=s.filter(e=>e.id.toString().toLowerCase().indexOf(l.toLowerCase())!==-1||e.topic.toLowerCase().indexOf(l.toLowerCase())!==-1||e.description.toLowerCase().indexOf(l.toLowerCase())!==-1)),r!=="all"&&(s=s.filter(e=>e.status===r)),g||i&&c&&(s=s.filter(e=>v(e.createdAt,i,c))),s}const K=[{id:"orderNumber",label:"#",width:40,align:"center"},{id:"name",label:"Product Name"},{id:"rate",label:"Rate",width:200},{id:"totalAmount",label:"Quantity",width:80},{id:"status",label:"Total",width:200}],ce=({products:s,defaultRowsPerPage:a})=>{const n=S({defaultOrderBy:"orderId",defaultRowsPerPage:a}),[g,r]=m.useState(s);m.useEffect(()=>{r(s)},[s]);const l=C({name:"",status:"all",startDate:null,endDate:null}),i=T(l.state.startDate,l.state.endDate),c=U({inputData:g,comparator:y(n.order,n.orderBy),filters:l.state,dateError:i});l.state.name||l.state.status!=="all"||l.state.startDate&&l.state.endDate;const h=m.useCallback(e=>{n.onResetPage(),l.setState({name:e.target.value})},[l,n]);return t.jsxs(w,{display:"flex",flexDirection:"column",alignItems:"center",sx:{borderRadius:1,height:1,width:1,overflow:"hidden",border:e=>`solid 1px ${e.vars.palette.divider}`},children:[t.jsx(u,{className:"print-hide",spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:1,width:1},children:t.jsx(O,{value:l.state.name,onChange:h,size:"small",placeholder:"Search product",InputProps:{startAdornment:t.jsx($,{position:"start",children:t.jsx(P,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),t.jsx(w,{sx:{flex:1,width:1},children:t.jsxs(D,{size:"small",children:[t.jsx(I,{headLabel:K}),t.jsx(L,{children:c.slice(n.page*n.rowsPerPage,n.page*n.rowsPerPage+n.rowsPerPage).map((e,o)=>t.jsxs(R,{children:[t.jsxs(x,{align:"center",children:[" ",o+1||e.productId," "]}),t.jsx(x,{children:t.jsxs(u,{direction:"row",alignItems:"center",spacing:1,children:[t.jsx(q,{sx:{[`& .${z.avatar}`]:{width:24,height:24}},children:t.jsx(N,{alt:e==null?void 0:e.name,src:`${H.site.serverFileHost}${e==null?void 0:e.image}`},e==null?void 0:e.id)}),`${e.product.name}`]})}),t.jsx(x,{align:"inherit",children:`${E(e.snapshotProductPrice||e.product.price)}`}),t.jsx(x,{children:t.jsxs(w,{sx:{width:240,color:"error.main",fontWeight:"bold"},children:["x",e==null?void 0:e.quantity]})}),t.jsx(x,{children:`${E(e.snapshotProductPrice*e.quantity)}`})]},`${e.productId}`))})]})}),t.jsx(A,{className:"print-hide",sx:{width:1},page:n.page,count:c.length,rowsPerPage:n.rowsPerPage,onPageChange:n.onChangePage,onRowsPerPageChange:n.onChangeRowsPerPage,rowsPerPageOptions:[]})]})};function U({inputData:s,comparator:a,filters:n,dateError:g}){const{status:r,name:l,startDate:i,endDate:c}=n,h=s.map((e,o)=>[e,o]);return h.sort((e,o)=>{const f=a(e[0],o[0]);return f!==0?f:e[1]-o[1]}),s=h.map(e=>e[0]),l&&(s=s.filter(e=>{var o;return e.id.toString().toLowerCase().indexOf(l.toLowerCase())!==-1||((o=e==null?void 0:e.product)==null?void 0:o.name.toLowerCase().indexOf(l.toLowerCase()))!==-1})),g||i&&c&&(s=s.filter(e=>v(e.createdAt,i,c))),s}const X=[{id:"#",label:"#",width:40},{id:"title",label:"Title"},{id:"rate",label:"Date",width:180},{id:"totalAmount",label:"Status",width:80}],he=({reminders:s=[]})=>{const a=S({defaultOrderBy:"orderId",defaultRowsPerPage:5}),[n,g]=m.useState(s);m.useEffect(()=>{g(s)},[s]);const r=C({name:"",status:"all",startDate:null,endDate:null}),l=T(r.state.startDate,r.state.endDate),i=Y({inputData:n,comparator:y(a.order,a.orderBy),filters:r.state,dateError:l}),c=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate;!i.length&&c||i.length;const h=m.useCallback(e=>{a.onResetPage(),r.setState({name:e.target.value})},[r,a]);return t.jsxs(w,{display:"flex",flexDirection:"column",alignItems:"center",sx:{borderRadius:1,height:1,width:1,overflow:"hidden",border:e=>`solid 1px ${e.vars.palette.divider}`},children:[t.jsx(u,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:1,width:1},children:t.jsx(O,{value:r.state.name,onChange:h,size:"small",placeholder:"Search reminder",InputProps:{startAdornment:t.jsx($,{position:"start",children:t.jsx(P,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),t.jsx(w,{sx:{flex:1,width:1},children:t.jsxs(D,{size:"small",children:[t.jsx(I,{headLabel:X}),t.jsxs(L,{children:[i.slice(a.page*a.rowsPerPage,a.page*a.rowsPerPage+a.rowsPerPage).map((e,o)=>t.jsxs(R,{children:[t.jsxs(x,{align:"center",children:[" ",o+1||e.id," "]}),t.jsx(x,{children:e.title}),t.jsx(x,{children:B(e.reminderDate)}),t.jsx(x,{children:t.jsx(p,{variant:"soft",color:b(e.reminderDate)?"error":"success",children:t.jsx(P,{icon:b(e.reminderDate)?"solar:forbidden-circle-bold":"solar:check-circle-bold-duotone",sx:{color:b(e.reminderDate)?"error":"success"}})})})]},`${e.id}`)),t.jsx(M,{emptyRows:G(a.page,a.rowsPerPage,i.length)})]})]})}),t.jsx(A,{sx:{width:1},page:a.page,dense:!0,count:i.length,rowsPerPage:a.rowsPerPage,onPageChange:a.onChangePage,onRowsPerPageChange:a.onChangeRowsPerPage})]})};function Y({inputData:s,comparator:a,filters:n,dateError:g}){const{status:r,name:l,startDate:i,endDate:c}=n,h=s.map((e,o)=>[e,o]);return h.sort((e,o)=>{const f=a(e[0],o[0]);return f!==0?f:e[1]-o[1]}),s=h.map(e=>e[0]),l&&(s=s.filter(e=>e.id.toString().toLowerCase().indexOf(l.toLowerCase())!==-1||e.title.toLowerCase().indexOf(l.toLowerCase())!==-1||e.description.toLowerCase().indexOf(l.toLowerCase())!==-1)),r!=="all"&&(s=s.filter(e=>e.status===r)),g||i&&c&&(s=s.filter(e=>v(e.createdAt,i,c))),s}export{ce as Q,de as a,he as b};
