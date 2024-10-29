import{r as g,de as C,ec as T,j as t,B as u,S as w,I as P,b8 as b,aH as B,d7 as p,ed as v,b1 as z,A as N,C as H,eh as j}from"./index-bfXnrd_B.js";import{g as y,r as Q,e as G}from"./utils-MBUcMVfY.js";import{u as S}from"./use-table-CR-aBkJV.js";import{a as D,b as I,c as L,T as R}from"./table-head-custom-Bj_XyIaF.js";import{T as A}from"./table-pagination-custom-B8C9Cxh7.js";import{T as O}from"./TextField-BKEfnHMn.js";import{I as $}from"./InputAdornment-XyO72vbx.js";import{S as _}from"./Select-ENvlCEnV.js";import{T as x}from"./TableCell-C8-lwuvg.js";import{b as E}from"./format-number-DOsPFhv2.js";import{A as q}from"./AvatarGroup-DJr-h5zk.js";import{T as M}from"./table-empty-rows-vD6O0yFh.js";const W=[{id:"orderNumber",label:"#",width:40,align:"center"},{id:"name",label:"Topic",width:400},{id:"rate",label:"Date",width:200},{id:"totalAmount",label:"Status"},{id:"status",label:"Priority"}],de=({tickets:a})=>{const s=S({defaultOrderBy:"orderId",defaultRowsPerPage:5}),[n,m]=g.useState(a),r=C({name:"",status:"all",startDate:null,endDate:null});g.useEffect(()=>{m(a)},[a]);const l=T(r.state.startDate,r.state.endDate),o=J({inputData:n,comparator:y(s.order,s.orderBy),filters:r.state,dateError:l});Q(o,s.page,s.rowsPerPage);const c=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate;!o.length&&c||o.length;const[h,e]=g.useState("all"),i=g.useCallback(d=>{s.onResetPage(),r.setState({name:d.target.value})},[r,s]),f=g.useCallback(d=>{s.onResetPage(),r.setState({status:d.target.value}),e(d.target.value)},[r,s]);return t.jsxs(u,{display:"flex",flexDirection:"column",alignItems:"center",sx:{borderRadius:1,height:1,width:1,overflow:"hidden",border:d=>`solid 1px ${d.vars.palette.divider}`},children:[t.jsxs(w,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:1,width:1},children:[t.jsx(O,{value:r.state.name,onChange:i,size:"small",placeholder:"Search customer or order number...",InputProps:{startAdornment:t.jsx($,{position:"start",children:t.jsx(P,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),t.jsxs(_,{size:"small",sx:{width:200,textTransform:"capitalize"},value:h,onChange:f,children:[t.jsx(b,{value:"all",children:"All Tickets"}),t.jsx(b,{value:"Open",children:"Open Tickets"}),t.jsx(b,{value:"Closed",children:"Close Tickets"})]})]}),t.jsx(u,{sx:{flex:1,width:1},children:t.jsxs(D,{size:"medium",children:[t.jsx(I,{headLabel:W}),t.jsx(L,{children:o.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((d,F)=>t.jsxs(R,{children:[t.jsxs(x,{align:"center",children:[" ",F+1||d.id," "]}),t.jsx(x,{children:d.topic}),t.jsx(x,{children:B(d.createTime)}),t.jsx(x,{children:t.jsx(p,{variant:"soft",color:d.status==="Open"&&"info"||d.status==="Closed"&&"default"||"default",children:d.status})}),t.jsx(x,{children:t.jsx(p,{variant:"soft",color:d.priority==="Low"&&"success"||d.priority==="Medium"&&"warning"||d.priority==="Hight"&&"error"||"default",children:d.priority})})]},`${d.id}`))})]})}),t.jsx(A,{sx:{width:1},page:s.page,dense:!0,count:o.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onRowsPerPageChange:s.onChangeRowsPerPage})]})};function J({inputData:a,comparator:s,filters:n,dateError:m}){const{status:r,name:l,startDate:o,endDate:c}=n,h=a.map((e,i)=>[e,i]);return h.sort((e,i)=>{const f=s(e[0],i[0]);return f!==0?f:e[1]-i[1]}),a=h.map(e=>e[0]),l&&(a=a.filter(e=>e.id.toString().toLowerCase().indexOf(l.toLowerCase())!==-1||e.topic.toLowerCase().indexOf(l.toLowerCase())!==-1||e.description.toLowerCase().indexOf(l.toLowerCase())!==-1)),r!=="all"&&(a=a.filter(e=>e.status===r)),m||o&&c&&(a=a.filter(e=>v(e.createdAt,o,c))),a}const K=[{id:"orderNumber",label:"#",width:40,align:"center"},{id:"name",label:"Product Name"},{id:"rate",label:"Rate",width:200},{id:"totalAmount",label:"Quantity",width:80},{id:"status",label:"Total",width:200}],ce=({products:a,defaultRowsPerPage:s})=>{const n=S({defaultOrderBy:"orderId",defaultRowsPerPage:s}),[m,r]=g.useState(a);g.useEffect(()=>{r(a)},[a]);const l=C({name:"",status:"all",startDate:null,endDate:null}),o=T(l.state.startDate,l.state.endDate),c=U({inputData:m,comparator:y(n.order,n.orderBy),filters:l.state,dateError:o});l.state.name||l.state.status!=="all"||l.state.startDate&&l.state.endDate;const h=g.useCallback(e=>{n.onResetPage(),l.setState({name:e.target.value})},[l,n]);return t.jsxs(u,{display:"flex",flexDirection:"column",alignItems:"center",sx:{borderRadius:1,height:1,width:1,overflow:"hidden",border:e=>`solid 1px ${e.vars.palette.divider}`},children:[t.jsx(w,{className:"print-hide",spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:1,width:1},children:t.jsx(O,{value:l.state.name,onChange:h,size:"small",placeholder:"Search customer or order number...",InputProps:{startAdornment:t.jsx($,{position:"start",children:t.jsx(P,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),t.jsx(u,{sx:{flex:1,width:1},children:t.jsxs(D,{size:"small",children:[t.jsx(I,{headLabel:K}),t.jsx(L,{children:c.slice(n.page*n.rowsPerPage,n.page*n.rowsPerPage+n.rowsPerPage).map((e,i)=>t.jsxs(R,{children:[t.jsxs(x,{align:"center",children:[" ",i+1||e.productId," "]}),t.jsx(x,{children:t.jsxs(w,{direction:"row",alignItems:"center",spacing:1,children:[t.jsx(q,{sx:{[`& .${z.avatar}`]:{width:24,height:24}},children:t.jsx(N,{alt:e==null?void 0:e.name,src:`${H.site.serverFileHost}${e==null?void 0:e.image}`},e==null?void 0:e.id)}),`${e.product.name}`]})}),t.jsx(x,{align:"inherit",children:`${E(e.snapshotProductPrice||e.product.price)}`}),t.jsx(x,{children:t.jsxs(u,{sx:{width:240,color:"error.main",fontWeight:"bold"},children:["x",e==null?void 0:e.quantity]})}),t.jsx(x,{children:`${E(e.snapshotProductPrice*e.quantity)}`})]},`${e.productId}`))})]})}),t.jsx(A,{className:"print-hide",sx:{width:1},page:n.page,count:c.length,rowsPerPage:n.rowsPerPage,onPageChange:n.onChangePage,onRowsPerPageChange:n.onChangeRowsPerPage,rowsPerPageOptions:[]})]})};function U({inputData:a,comparator:s,filters:n,dateError:m}){const{status:r,name:l,startDate:o,endDate:c}=n;console.log("--> inputData",a);const h=a.map((e,i)=>[e,i]);return h.sort((e,i)=>{const f=s(e[0],i[0]);return f!==0?f:e[1]-i[1]}),a=h.map(e=>e[0]),l&&(a=a.filter(e=>e.id.toString().toLowerCase().indexOf(l.toLowerCase())!==-1||e.product.name.toLowerCase().indexOf(l.toLowerCase())!==-1)),m||o&&c&&(a=a.filter(e=>v(e.createdAt,o,c))),a}const X=[{id:"#",label:"#",width:40},{id:"title",label:"Title"},{id:"rate",label:"Date",width:180},{id:"totalAmount",label:"Status",width:80}],he=({reminders:a=[]})=>{const s=S({defaultOrderBy:"orderId",defaultRowsPerPage:5}),[n,m]=g.useState(a);g.useEffect(()=>{m(a)},[a]);const r=C({name:"",status:"all",startDate:null,endDate:null}),l=T(r.state.startDate,r.state.endDate),o=Y({inputData:n,comparator:y(s.order,s.orderBy),filters:r.state,dateError:l}),c=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate;!o.length&&c||o.length;const h=g.useCallback(e=>{s.onResetPage(),r.setState({name:e.target.value})},[r,s]);return t.jsxs(u,{display:"flex",flexDirection:"column",alignItems:"center",sx:{borderRadius:1,height:1,width:1,overflow:"hidden",border:e=>`solid 1px ${e.vars.palette.divider}`},children:[t.jsx(w,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:1,width:1},children:t.jsx(O,{value:r.state.name,onChange:h,size:"small",placeholder:"Search customer or order number...",InputProps:{startAdornment:t.jsx($,{position:"start",children:t.jsx(P,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),t.jsx(u,{sx:{flex:1,width:1},children:t.jsxs(D,{size:"small",children:[t.jsx(I,{headLabel:X}),t.jsxs(L,{children:[o.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map((e,i)=>t.jsxs(R,{children:[t.jsxs(x,{align:"center",children:[" ",i+1||e.id," "]}),t.jsx(x,{children:e.title}),t.jsx(x,{children:B(e.reminderDate)}),t.jsx(x,{children:t.jsx(p,{variant:"soft",color:j(e.reminderDate)?"error":"success",children:t.jsx(P,{icon:j(e.reminderDate)?"solar:forbidden-circle-bold":"solar:check-circle-bold-duotone",sx:{color:j(e.reminderDate)?"error":"success"}})})})]},`${e.id}`)),t.jsx(M,{emptyRows:G(s.page,s.rowsPerPage,o.length)})]})]})}),t.jsx(A,{sx:{width:1},page:s.page,dense:!0,count:o.length,rowsPerPage:s.rowsPerPage,onPageChange:s.onChangePage,onRowsPerPageChange:s.onChangeRowsPerPage})]})};function Y({inputData:a,comparator:s,filters:n,dateError:m}){const{status:r,name:l,startDate:o,endDate:c}=n,h=a.map((e,i)=>[e,i]);return h.sort((e,i)=>{const f=s(e[0],i[0]);return f!==0?f:e[1]-i[1]}),a=h.map(e=>e[0]),l&&(a=a.filter(e=>e.id.toString().toLowerCase().indexOf(l.toLowerCase())!==-1||e.title.toLowerCase().indexOf(l.toLowerCase())!==-1||e.description.toLowerCase().indexOf(l.toLowerCase())!==-1)),r!=="all"&&(a=a.filter(e=>e.status===r)),m||o&&c&&(a=a.filter(e=>v(e.createdAt,o,c))),a}export{ce as Q,de as a,he as b};
